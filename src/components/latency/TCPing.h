#pragma once
#include "LatencyTest.h"
#include "base/Qv2rayBase.h"

#include <QAbstractSocket>

class QTcpSocket;

namespace Qv2ray::components::latency::tcping
{
class TCPing : public QObject
{
    Q_OBJECT

public:
    TCPing(LatencyTestRequest &req, LatencyTestHost *testHost, QObject *parent = nullptr);
    ~TCPing();
    void start();

private slots:
    void onTimeout();
    void onConnected();
    void onErrorOccurred(QAbstractSocket::SocketError error);
    void onDisconnected();

private:
    void startNextRequest();
    void notifyTestHost();

    QTcpSocket *tcpSocket;
    QTimer *timeoutTimer;
    QElapsedTimer requestTimer;
    LatencyTestRequest request;
    LatencyTestResult result;
    LatencyTestHost *testHost;
    int currentRequestCount;

signals:
    void latencyTestCompleted(Qv2ray::base::ConnectionId id, Qv2ray::components::latency::LatencyTestResult data);
};
} // namespace Qv2ray::components::latency::tcping
