#include "LatencyTestThread.h"

#include "RealPing.h"
#include "TCPing.h"
#include "core/CoreUtils.h"

#ifdef Q_OS_UNIX
#include "unix/ICMPPing.h"
#else
#include "win/ICMPPing.h"
#endif
#include "uvw.hpp"

namespace Qv2ray::components::latency
{

LatencyTestThread::LatencyTestThread(QObject *parent)
    : QThread(parent)
{
}

void LatencyTestThread::pushRequest(const ConnectionId &id, int totalTestCount, Qv2rayLatencyTestingMethod method)
{
    if (isStop)
        return;
    std::unique_lock<std::mutex> lockGuard{ m };
    const auto &[protocol, host, port] = GetConnectionInfo(id);
    requests.emplace_back(LatencyTestRequest{ id, host, port, totalTestCount, method });
}

void LatencyTestThread::run()
{
    loop = uvw::loop::create();
    stopTimer = loop->resource<uvw::timer_handle>();
    stopTimer->on<uvw::timer_event>([this](auto &, auto &handle)
                                    {
                                        if (isStop)
                                        {
                                            if (!requests.empty())
                                                requests.clear();
                                            int timer_count = 0;
                                            uv_walk(
                                                loop->raw(),
                                                [](uv_handle_t *handle, void *arg)
                                                {
                                                    int &counter = *static_cast<int *>(arg);
                                                    if (uv_is_closing(handle) == 0)
                                                        counter++;
                                                },
                                                &timer_count);
                                            if (timer_count == 1) // only current timer
                                            {
                                                handle.stop();
                                                handle.close();
                                                loop.reset();
                                                loop->close();
                                                loop->stop();
                                            }
                                        }
                                        else
                                        {
                                            if (requests.empty())
                                                return;
                                            std::unique_lock<std::mutex> lockGuard{ m };
                                            auto parent = qobject_cast<LatencyTestHost *>(this->parent());
                                            for (auto &req : requests)
                                            {
                                                switch (req.method)
                                                {
                                                case ICMPING:
                                                {
                                                    auto ptr = std::make_shared<icmping::ICMPPing>(loop, req, parent);
                                                    ptr->start();
                                                }
                                                break;
                                                case TCPING:
                                                default:
                                                {
                                                    auto ptr = std::make_shared<tcping::TCPing>(loop, req, parent);
                                                    ptr->start();
                                                    break;
                                                }
                                                case REALPING:
                                                {
                                                    auto ptr = std::make_shared<realping::RealPing>(loop, req, parent);
                                                    ptr->start();
                                                    break;
                                                }
                                                }
                                            }
                                            requests.clear();
                                        }
                                    });
    stopTimer->start(uvw::timer_handle::time{ 500 }, uvw::timer_handle::time{ 500 });
    loop->run();
}
void LatencyTestThread::pushRequest(const QList<ConnectionId> &ids, int totalTestCount, Qv2rayLatencyTestingMethod method)
{
    if (isStop)
        return;
    std::unique_lock<std::mutex> lockGuard{ m };
    for (const auto &id : ids)
    {
        const auto &[protocol, host, port] = GetConnectionInfo(id);
        requests.emplace_back(LatencyTestRequest{ id, host, port, totalTestCount, method });
    }
}
} // namespace Qv2ray::components::latency
