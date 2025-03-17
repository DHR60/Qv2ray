#pragma once
#include "LatencyTest.h"

#include <curl/curl.h>
#include <memory>
#include <unordered_map>
#include <utility>
namespace uvw
{
class loop;
class timer_handle;
} // namespace uvw
namespace Qv2ray::components::latency::realping
{
class RealPing : public std::enable_shared_from_this<RealPing>
{
public:
    RealPing(std::shared_ptr<uvw::loop> loopin, LatencyTestRequest &req, LatencyTestHost *testHost);
    ~RealPing();
    void start();
    void notifyTestHost();
    void recordHanleTime(CURL *);
    long getHandleTime(CURL *);
    std::string getProxyAddress();

private:
    int successCount = 0;
    LatencyTestRequest req;
    LatencyTestResult data;
    LatencyTestHost *testHost;
    std::shared_ptr<uvw::loop> loop;
    std::shared_ptr<uvw::timer_handle> timeout;
    std::unordered_map<CURL *, std::chrono::system_clock::time_point> reqStartTime;
};
} // namespace Qv2ray::components::latency::realping
