#include "PluginSettingsWidget.h"
#include "QvGUIPluginInterface.h"
//
#include "inbound/dokodemo-door.h"
#include "inbound/httpin.h"
#include "inbound/socksin.h"
//
#include "outbound/blackhole.h"
#include "outbound/dns.h"
#include "outbound/freedom.h"
#include "outbound/httpout.h"
#include "outbound/loopback.h"
#include "outbound/shadowsocks.h"
#include "outbound/socksout.h"
#include "outbound/vless.h"
#include "outbound/vmess.h"

using namespace Qv2rayPlugin;

class ProtocolGUIInterface : public PluginGUIInterface
{
public:
    explicit ProtocolGUIInterface() {};
    ~ProtocolGUIInterface() {};
    QList<PluginGuiComponentType> GetComponents() const override
    {
        return {
            GUI_COMPONENT_INBOUND_EDITOR, //
            GUI_COMPONENT_OUTBOUND_EDITOR //
        };
    }
    std::unique_ptr<QvPluginSettingsWidget> createSettingsWidgets() const override
    {
        return std::make_unique<SimplePluginSettingsWidget>();
    }
    QList<typed_plugin_editor> createInboundEditors() const override
    {
        return {
            MakeEditorInfoPair<HTTPInboundEditor>("http", "HTTP"),
            MakeEditorInfoPair<SocksInboundEditor>("socks", "SOCKS"),
            MakeEditorInfoPair<DokodemoDoorInboundEditor>("dokodemo-door", "Dokodemo-Door"),
        };
    }
    QList<typed_plugin_editor> createOutboundEditors() const override
    {
        return {
            MakeEditorInfoPair<VmessOutboundEditor>("vmess", "VMess"),                   //
            MakeEditorInfoPair<VlessOutboundEditor>("vless", "VLESS"),                   //
            MakeEditorInfoPair<ShadowsocksOutboundEditor>("shadowsocks", "Shadowsocks"), //
            MakeEditorInfoPair<HttpOutboundEditor>("http", "HTTP"),                      //
            MakeEditorInfoPair<SocksOutboundEditor>("socks", "SOCKS"),                   //
            MakeEditorInfoPair<FreedomOutboundEditor>("freedom", "Freedom"),             //
            MakeEditorInfoPair<BlackholeOutboundEditor>("blackhole", "Blackhole"),       //
            MakeEditorInfoPair<DnsOutboundEditor>("dns", "DNS"),                         //
            MakeEditorInfoPair<LoopbackSettingsEditor>("loopback", "Loopback"),          //
        };
    }
    std::unique_ptr<QvPluginMainWindowWidget> createMainWindowWidget() const override
    {
        return nullptr;
    }
    QIcon Icon() const override
    {
        return QIcon(":/assets/qv2ray.png");
    }
};
