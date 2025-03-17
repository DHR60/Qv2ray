#pragma once
#include "LatencyTest.h"

#include <QThread>
#include <curl/curl.h>
#include <mutex>
#include <unordered_set>

namespace uvw
{
class loop;
class timer_handle;
} // namespace uvw
namespace Qv2ray::components::latency
{
class LatencyTestThread : public QThread
{
    Q_OBJECT

public:
    explicit LatencyTestThread(QObject *parent = nullptr);
    void stopLatencyTest()
    {
        isStop = true;
    }
    void pushRequest(const QList<ConnectionId> &ids, int totalTestCount, Qv2rayLatencyTestingMethod method);
    void pushRequest(const ConnectionId &id, int totalTestCount, Qv2rayLatencyTestingMethod method);

protected:
    void run() override;

private:
    struct CURLGlobal
    {
        CURLGlobal()
        {
            curl_global_init(CURL_GLOBAL_ALL);
        }
        ~CURLGlobal()
        {
            curl_global_cleanup();
        }
    };
    std::shared_ptr<uvw::loop> loop;
    CURLGlobal curlGlobal;
    bool isStop = false;
    std::shared_ptr<uvw::timer_handle> stopTimer;
    std::vector<LatencyTestRequest> requests;
    std::mutex m;

    // static LatencyTestResult TestLatency_p(const ConnectionId &id, const int count);
};

} // namespace Qv2ray::components::latency
