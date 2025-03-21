#pragma once
#include "LatencyTest.h"
#include "RealPing.h"
#include "TCPing.h"

#include <QMutex>
#include <QQueue>
#include <QSharedPointer>
#include <QThread>
#include <QTimer>

namespace Qv2ray::components::latency
{
class LatencyTestThread : public QThread
{
    Q_OBJECT

public:
    explicit LatencyTestThread(QObject *parent = nullptr);
    void stopLatencyTest();
    void pushRequest(const QList<ConnectionId> &ids, int totalTestCount, Qv2rayLatencyTestingMethod method);
    void pushRequest(const ConnectionId &id, int totalTestCount, Qv2rayLatencyTestingMethod method);

protected:
    void run() override;

private slots:
    void onTimerTimeout();
    void onLatencyTestCompleted();

private:
    bool isStop = false;
    QQueue<LatencyTestRequest> requests; // 使用队列来管理请求
    QMutex m;
    QTimer *stopTimer = nullptr; // 使用 Qt 定时器替代 uvw::TimerHandle

    QSharedPointer<tcping::TCPing> currentTcpingTest;
    QSharedPointer<realping::RealPing> currentRealPingTest;
    QMutex currentTestMutex;
};

} // namespace Qv2ray::components::latency
