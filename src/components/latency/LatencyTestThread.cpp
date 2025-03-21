#include "LatencyTestThread.h"

#include "RealPing.h"
#include "TCPing.h"
#include "core/CoreUtils.h"

namespace Qv2ray::components::latency
{

LatencyTestThread::LatencyTestThread(QObject *parent)
    : QThread(parent)
{
}

void LatencyTestThread::stopLatencyTest()
{
    isStop = true;
}

void LatencyTestThread::pushRequest(const ConnectionId &id, int totalTestCount, Qv2rayLatencyTestingMethod method)
{
    if (isStop)
        return;
    QMutexLocker locker {&m};
    const auto &[protocol, host, port] = GetConnectionInfo(id);
    requests.enqueue(LatencyTestRequest {id, host, port, totalTestCount, method});
}

void LatencyTestThread::run()
{
    stopTimer = new QTimer(this); // 使用 Qt 定时器
    stopTimer->setSingleShot(false);
    connect(stopTimer, &QTimer::timeout, this, &LatencyTestThread::onTimerTimeout);
    stopTimer->start(100); // 设置定时器触发间隔，可以根据需要调整

    exec(); // 启动事件循环
}

void LatencyTestThread::onTimerTimeout()
{
    if (isStop)
    {
        QMutexLocker locker {&m};
        requests.clear();

        stopTimer->stop();
        stopTimer->deleteLater();
        quit();
        return;
    }

    {
        QMutexLocker currentTestLocker {&currentTestMutex};
        if (currentTcpingTest || currentRealPingTest)
        {
            return; // 当前有测试正在进行，等待完成
        }
    }

    if (!requests.isEmpty())
    {
        QMutexLocker locker {&m};
        auto req = requests.dequeue();
        auto parent = qobject_cast<LatencyTestHost *>(this->parent());

        switch (req.method)
        {
        case TCPING:
        default:
        {
            currentTcpingTest = QSharedPointer<tcping::TCPing>(new tcping::TCPing(req, parent), &QObject::deleteLater);
            connect(currentTcpingTest.get(), &tcping::TCPing::latencyTestCompleted, this, &LatencyTestThread::onLatencyTestCompleted);
            currentTcpingTest->start();
            break;
        }
        case REALPING:
        {
            currentRealPingTest = QSharedPointer<realping::RealPing>(new realping::RealPing(req, parent), &QObject::deleteLater);
            connect(currentRealPingTest.get(), &realping::RealPing::latencyTestCompleted, this, &LatencyTestThread::onLatencyTestCompleted);
            currentRealPingTest->start();
            break;
        }
        }
    }
}

void LatencyTestThread::onLatencyTestCompleted()
{
    QMutexLocker currentTestLocker {&currentTestMutex};
    currentTcpingTest.clear();
    currentRealPingTest.clear();
}

void LatencyTestThread::pushRequest(const QList<ConnectionId> &ids, int totalTestCount, Qv2rayLatencyTestingMethod method)
{
    if (isStop)
        return;
    QMutexLocker locker {&m};
    for (const auto &id : ids)
    {
        const auto &[protocol, host, port] = GetConnectionInfo(id);
        requests.enqueue(LatencyTestRequest {id, host, port, totalTestCount, method});
    }
}

} // namespace Qv2ray::components::latency
