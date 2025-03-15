#include "BuiltinProtocolPlugin.h"

#include "core/OutboundHandler.h"
#include "ui/Interface.h"

bool InternalProtocolSupportPlugin::InitializePlugin(const QString &, const QJsonObject &settings)
{
    this->settings = settings;
    InternalProtocolSupportPluginInstance = this;
    outboundHandler = std::make_shared<BuiltinSerializer>();
    guiInterface = new ProtocolGUIInterface();
    return true;
}
