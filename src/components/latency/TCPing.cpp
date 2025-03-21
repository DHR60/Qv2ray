#include "TCPing.h"

#include <QDebug>
#include <QElapsedTimer>
#include <QHostAddress>
#include <QNetworkProxy>
#include <QTcpSocket>
#include <QTimer>

namespace Qv2ray::components::latency::tcping
{
constexpr int conn_timeout_ms = 5000;           // 连接超时时间：5秒
constexpr qint64 LATENCY_TEST_VALUE_ERROR = -1; // 假设未定义的错误常量

TCPing::TCPing(LatencyTestRequest &req, LatencyTestHost *testHost, QObject *parent)
    : QObject(parent),
      tcpSocket(new QTcpSocket(this)),
      timeoutTimer(new QTimer(this)),
      request(req),
      testHost(testHost),
      currentRequestCount(0)
{
    tcpSocket->setProxy(QNetworkProxy::NoProxy);
    connect(timeoutTimer, &QTimer::timeout, this, &TCPing::onTimeout);
    connect(tcpSocket, &QTcpSocket::connected, this, &TCPing::onConnected);
    connect(tcpSocket, &QTcpSocket::errorOccurred, this, &TCPing::onErrorOccurred); // 连接错误信号
    connect(tcpSocket, &QTcpSocket::disconnected, this, &TCPing::onDisconnected);   // 断开连接信号
    connect(this, &TCPing::latencyTestCompleted, testHost, &LatencyTestHost::OnLatencyTestCompleted);
}

TCPing::~TCPing()
{
    delete timeoutTimer;
    delete tcpSocket;
}

void TCPing::start()
{
    currentRequestCount = 0;
    result.totalCount = request.totalCount; // 设置总请求次数
    result.failedCount = 0;
    result.worst = 0;
    result.best = -1; // 初始化为 -1
    result.avg = 0;

    startNextRequest();
}

void TCPing::startNextRequest()
{
    if (currentRequestCount < request.totalCount)
    {
        // 启动超时定时器，设置超时为5秒
        timeoutTimer->start(conn_timeout_ms);

        // 发起 TCP 连接请求
        tcpSocket->connectToHost(request.host, request.port);

        // 启动计时器
        requestTimer.start();
        currentRequestCount++;
    }
    else
    {
        // 所有请求完成，通知结果
        notifyTestHost();
    }
}

void TCPing::onTimeout()
{
    // 如果超时且未连接，记录失败
    if (tcpSocket->state() != QAbstractSocket::ConnectedState)
    {
        qDebug() << "Connection timeout!";
        result.failedCount++;
        tcpSocket->abort(); // 中止连接
        startNextRequest(); // 进行下一次请求
    }
    // 如果已连接，则可能是其他原因导致超时，这里可以添加额外的处理逻辑，但目前假设连接后不会超时
    else
    {
        // 可选：如果连接后也需要超时处理，可以在这里添加逻辑
        qDebug() << "Timeout after connection established (unexpected).";
        tcpSocket->disconnectFromHost(); // 断开连接
    }
}

void TCPing::onConnected()
{
    timeoutTimer->stop(); // 连接成功，停止超时定时器
    qint64 elapsed = requestTimer.elapsed();

    result.avg += elapsed;
    result.worst = qMax(result.worst, elapsed);
    result.best = (result.best == -1) ? elapsed : qMin(result.best, elapsed);

    qDebug() << "Ping response time:" << elapsed << "ms";

    tcpSocket->disconnectFromHost(); // 连接成功后立即断开
    // 注意：不要在这里调用 notifyTestHost，因为还有其他请求可能未完成
}

void TCPing::onDisconnected()
{
    startNextRequest(); // 在断开连接后发起下一次请求
}

void TCPing::onErrorOccurred(QAbstractSocket::SocketError error)
{
    qDebug() << "Socket error:" << tcpSocket->errorString();
    result.failedCount++;
    timeoutTimer->stop(); // 发生错误，停止超时定时器
    startNextRequest();   // 进行下一次请求
}

void TCPing::notifyTestHost()
{
    if (result.failedCount == result.totalCount)
    {
        result.avg = LATENCY_TEST_VALUE_ERROR;
    }
    else if (result.totalCount > 0 && (result.totalCount - result.failedCount) > 0)
    {
        result.avg = result.avg / (result.totalCount - result.failedCount); // 计算平均值
    }
    else
    {
        result.avg = LATENCY_TEST_VALUE_ERROR; // 如果没有成功连接，则平均值为错误
    }

    emit latencyTestCompleted(request.id, result);
}
} // namespace Qv2ray::components::latency::tcping
