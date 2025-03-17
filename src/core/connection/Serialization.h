#pragma once
#include "base/Qv2rayBase.h"
#include "utils/QvHelpers.h"

namespace Qv2ray::core::connection::serialization
{
const inline QString QV2RAY_SERIALIZATION_COMPLEX_CONFIG_PLACEHOLDER = "(N/A)";
QList<std::pair<QString, CONFIGROOT>> ConvertConfigFromString(const QString &link, QString *aliasPrefix, QString *errMessage,
                                                              QString *newGroupName = nullptr);
const QString ConvertConfigToString(const ConnectionGroupPair &id, bool isSip002 = true);
const QString ConvertConfigToString(const QString &alias, const QString &groupName, const CONFIGROOT &server, bool isSip002 = true);

namespace vmess
{
CONFIGROOT Deserialize(const QString &vmess, QString *alias, QString *errMessage);
const QString Serialize(const StreamSettingsObject &transfer, const VMessServerObject &server, const QString &alias);
} // namespace vmess

namespace vmess_new
{
CONFIGROOT Deserialize(const QString &vmess, QString *alias, QString *errMessage);
const QString Serialize(const StreamSettingsObject &transfer, const VMessServerObject &server, const QString &alias);
} // namespace vmess_new

namespace vless
{
CONFIGROOT Deserialize(const QString &vless, QString *alias, QString *errMessage);
} // namespace vless

namespace ss
{
CONFIGROOT Deserialize(const QString &ss, QString *alias, QString *errMessage);
const QString Serialize(const ShadowSocksServerObject &server, const QString &alias, bool isSip002);
} // namespace ss

namespace trojan
{
CONFIGROOT Deserialize(const QString &trojanUri, QString *alias, QString *errMessage);
} // namespace trojan

} // namespace Qv2ray::core::connection::serialization

using namespace Qv2ray::core;
using namespace Qv2ray::core::connection;
using namespace Qv2ray::core::connection::serialization;
