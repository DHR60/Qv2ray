#include "RealPing.h"

#include <QHostAddress>
#include <QNetworkAccessManager>
#include <QNetworkProxy>

#define QV_MODULE_NAME "RealPingWorker"

namespace Qv2ray::components::latency::realping
{
RealPing::RealPing(LatencyTestRequest &req, LatencyTestHost *testHost, QObject *parent)
    : QObject(parent),
      networkManager(new QNetworkAccessManager(this)),
      timeoutTimer(new QTimer(this)),
      request(req),
      testHost(testHost),
      currentRequestCount(0)
{
    connect(networkManager, &QNetworkAccessManager::finished, this, &RealPing::onRequestFinished);
    connect(timeoutTimer, &QTimer::timeout, this, &RealPing::onTimeout);
    connect(this, &RealPing::latencyTestCompleted, testHost, &LatencyTestHost::OnLatencyTestCompleted);
}

void RealPing::start()
{
    if (!GlobalConfig.inboundConfig.useSocks && !GlobalConfig.inboundConfig.useHTTP)
    {
        result.avg = -1; // 使用 -1 代表 LATENCY_TEST_VALUE_ERROR
        emit latencyTestCompleted(request.id, result);
        return;
    }
    const auto requestUrl = GlobalConfig.networkConfig.latencyRealPingTestURL;
    result.totalCount = request.totalCount;
    result.failedCount = 0;
    result.worst = 0;
    result.best = -1;
    result.avg = 0;
    currentRequestCount = 0;

    const QString &proxyIp = GlobalConfig.inboundConfig.listenip;
    const int proxyPort = GlobalConfig.inboundConfig.httpSettings.port;
    QNetworkProxy proxy;
    if (GlobalConfig.inboundConfig.useHTTP)
    {
        proxy.setType(QNetworkProxy::HttpProxy);
        proxy.setUser(GlobalConfig.inboundConfig.httpSettings.account.user);
        proxy.setPassword(GlobalConfig.inboundConfig.httpSettings.account.pass);
    }
    else
    {
        proxy.setType(QNetworkProxy::Socks5Proxy);
        proxy.setUser(GlobalConfig.inboundConfig.socksSettings.account.user);
        proxy.setPassword(GlobalConfig.inboundConfig.socksSettings.account.pass);
    }
    proxy.setHostName(proxyIp);
    proxy.setPort(proxyPort);
    networkManager->setProxy(proxy);

    // 启动第一个请求
    sendRequest();
}

void RealPing::sendRequest()
{
    if (currentRequestCount < request.totalCount)
    {
        QNetworkRequest req;
        req.setUrl(QUrl(GlobalConfig.networkConfig.latencyRealPingTestURL));
        requestTimer.start();
        currentReply = networkManager->get(req); // 保存 reply 指针
        timeoutTimer->start(5000);               // 为每个请求设置超时

        // 将 reply 对象与 currentRequestCount 关联，方便在超时时识别
        currentReply->setProperty("requestIndex", currentRequestCount);

        currentRequestCount++;
    }
    else if (currentRequestCount == request.totalCount)
    {
        notifyTestHost();
        emit latencyTestCompleted(request.id, result);
    }
}

void RealPing::onRequestFinished(QNetworkReply *reply)
{
    timeoutTimer->stop(); // 请求完成，停止超时定时器
    qint64 elapsed = requestTimer.elapsed();

    if (reply->error() == QNetworkReply::NoError)
    {
        result.avg += elapsed;
        result.best = (result.best == -1) ? elapsed : qMin(qint64(result.best), elapsed);
        result.worst = qMax(qint64(result.worst), elapsed);
    }
    else
    {
        result.failedCount++;
        qDebug() << "Request failed:" << reply->errorString();
    }
    result.totalCount++; // 总请求数在这里增加，因为 sendRequest 中只管发送

    reply->deleteLater();
    currentReply = nullptr; // 请求完成，清除指针

    // 发送下一个请求
    sendRequest();
}

void RealPing::onTimeout()
{
    if (currentRequestCount > 0 && result.totalCount < request.totalCount)
    {
        // 如果超时发生时还有未完成的请求，则认为该请求失败
        qDebug() << "Request timed out!";
        result.failedCount++;
        result.totalCount++; // 超时也算一次尝试

        if (currentReply)
        {
            currentReply->abort();
            currentReply->deleteLater();
            currentReply = nullptr;
        }

        // 发送下一个请求
        sendRequest();
    }
    else if (result.totalCount == request.totalCount)
    {
        timeoutTimer->stop();
        notifyTestHost();
        emit testHost->OnLatencyTestCompleted(request.id, result);
    }
}

void RealPing::notifyTestHost()
{
    if (result.failedCount == request.totalCount)
    {
        result.avg = -1; // 如果全部失败，设置为错误值
    }
    else
    {
        result.avg /= (result.totalCount - result.failedCount);
    }

    qDebug() << "Latency Test Completed!";
    qDebug() << "Total Count:" << result.totalCount;
    qDebug() << "Success Count:" << (result.totalCount - result.failedCount);
    qDebug() << "Failed Count:" << result.failedCount;
    qDebug() << "Average Latency:" << result.avg << "ms";
    qDebug() << "Best Latency:" << result.best << "ms";
    qDebug() << "Worst Latency:" << result.worst << "ms";
}
RealPing::~RealPing()
{
    LOG("Realping done!");
}
} // namespace Qv2ray::components::latency::realping
