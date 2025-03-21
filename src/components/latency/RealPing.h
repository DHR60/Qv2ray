#pragma once
#include "LatencyTest.h"

#include <QNetworkReply>

class QNetworkAccessManager;

namespace Qv2ray::components::latency::realping
{
class RealPing : public QObject
{
    Q_OBJECT

public:
    RealPing(LatencyTestRequest &req, LatencyTestHost *testHost, QObject *parent = nullptr);
    ~RealPing();
    void start();

private slots:
    void onRequestFinished(QNetworkReply *reply);
    void onTimeout();

private:
    void notifyTestHost();
    void sendRequest();

    QNetworkAccessManager *networkManager;
    QTimer *timeoutTimer;
    QElapsedTimer requestTimer;
    LatencyTestRequest request;
    LatencyTestResult result;
    LatencyTestHost *testHost;
    int currentRequestCount;

    QNetworkReply *currentReply = nullptr;

signals:
    void latencyTestCompleted(Qv2ray::base::ConnectionId id, Qv2ray::components::latency::LatencyTestResult data);
};
} // namespace Qv2ray::components::latency::realping
