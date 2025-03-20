#pragma once
#include "base/Qv2rayBase.h"
#include "src/XConfigGen.h"
#include "utils/QvHelpers.h"

namespace Qv2ray::core::connection::serialization
{
const inline QString QV2RAY_SERIALIZATION_COMPLEX_CONFIG_PLACEHOLDER = "(N/A)";
// TODO 为什么要返回整个配置而不是Outbound？
QList<std::pair<QString, CONFIGROOT>> ConvertConfigFromString(const QString &link, QString &aliasPrefix, QString &errMessage, const QString &tag = {}, std::optional<QString> newGroupName = std::nullopt);
const QString ConvertConfigToString(const ConnectionGroupPair &id);
const QString ConvertConfigToString(const QString &alias, const QString &groupName, const CONFIGROOT &server);
} // namespace Qv2ray::core::connection::serialization

using namespace Qv2ray::core;
using namespace Qv2ray::core::connection;
using namespace Qv2ray::core::connection::serialization;
