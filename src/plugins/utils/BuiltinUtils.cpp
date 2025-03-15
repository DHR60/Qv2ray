#include "BuiltinUtils.h"

#include "core/EventHandler.h"
#include "core/GUIInterface.h"

bool InternalUtilsPlugin::InitializePlugin(const QString &, const QJsonObject &settings)
{
    this->settings = settings;
    this->eventHandler = std::make_shared<EventHandler>();
    this->guiInterface = new GUIInterface;
    return true;
}
