#pragma once
#include "DNSBase.h"
#include "LatencyTest.h"
#include "base/Qv2rayBase.h"

#include <type_traits>
namespace Qv2ray::components::latency::tcping
{
class TCPing : public DNSBase<TCPing>
{
public:
    using DNSBase<TCPing>::DNSBase;
    void start();
    ~TCPing() override;

protected:

private:
    void ping() override;
    void notifyTestHost();
};
} // namespace Qv2ray::components::latency::tcping
