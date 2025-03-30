#include "Serialization.h"

#include "Generation.h"
#include "core/handler/ConfigHandler.h"

namespace Qv2ray::core::connection
{
namespace serialization
{
QList<std::pair<QString, CONFIGROOT>> ConvertConfigFromString(const QString &link, QString &aliasPrefix, QString &errMessage, const QString &tag, std::optional<QString> newGroup)
{
    const auto TLSOptionsFilter = [](XConfigGen::Xray::Outbounds4Ray &conf)
    {
        if (!conf.streamSettings) // streamSettings 为空时直接返回
            return;

        auto &settings = *conf.streamSettings;
        if (settings.security.value_or(QStringLiteral("none")) != QStringLiteral("tls"))
            return;

        settings.tlsSettings.emplace(settings.tlsSettings.value_or(XConfigGen::Xray::TlsSettings4Ray()))
            .disableSystemRoot = GlobalConfig.advancedConfig.disableSystemRoot;
    };

    const QStringList protocols = {"vmess", "vless", "ss", "trojan"};

    QList<std::pair<QString, CONFIGROOT>> connectionConf;

    if (std::any_of(protocols.cbegin(), protocols.cend(), [&link](const auto &protocol)
                    {
                        return link.startsWith(protocol + "://");
                    }))
    {
        auto outbound = XConfigGen::Xray::Deserialize(link, aliasPrefix, errMessage, tag);
        TLSOptionsFilter(outbound);
        QJsonObject outboundJson = outbound.toJson();

        CONFIGROOT root;
        root["outbounds"] = QJsonArray {outboundJson};
        connectionConf << std::pair {aliasPrefix, root};
        return connectionConf;
    }

    bool ok = false;
    QString pAliasPrefix, pErrMessage, pNewGroup;
    const auto configs = PluginHost->TryDeserializeShareLink(link, &pAliasPrefix, &pErrMessage, &pNewGroup, ok);
    if (ok)
    {
        pErrMessage.clear();
        for (const auto &[_alias, _protocol, _outbound] : configs)
        {
            CONFIGROOT root;
            auto outbound = GenerateOutboundEntry(OUTBOUND_TAG_PROXY, _protocol, OUTBOUNDSETTING(_outbound), {});
            QJsonIO::SetValue(root, outbound, "outbounds", 0);
            connectionConf << std::pair {_alias, root};
        }
    }
    else if (pErrMessage.isEmpty())
    {
        pErrMessage = QObject::tr("Unsupported share link format.");
    }
    aliasPrefix = pAliasPrefix;
    errMessage = pErrMessage;
    newGroup = pNewGroup;

    return connectionConf;
}

const QString ConvertConfigToString(const ConnectionGroupPair &identifier)
{
    auto alias = GetDisplayName(identifier.connectionId);
    if (IsComplexConfig(identifier.connectionId))
    {
        return QV2RAY_SERIALIZATION_COMPLEX_CONFIG_PLACEHOLDER;
    }
    auto server = ConnectionManager->GetConnectionRoot(identifier.connectionId);
    return ConvertConfigToString(alias, GetDisplayName(identifier.groupId), server);
}

const QString ConvertConfigToString(const QString &alias, const QString &groupName, const CONFIGROOT &server)
{
    const auto outboundJson = server["outbounds"].toArray().first().toObject();

    XConfigGen::Xray::Outbounds4Ray outbound;
    outbound.fromJson(outboundJson);

    QString sharelink;

    const auto result = XConfigGen::Xray::Serialize(outbound, alias);
    if (result.isEmpty())
    {
        bool ok = false;
        const auto outbound = OUTBOUND(server["outbounds"].toArray().first().toObject());
        const auto type = outbound["protocol"].toString();
        const auto settings = outbound["settings"].toObject();
        const auto streamSettings = outbound["streamSettings"].toObject();
        sharelink = PluginHost->SerializeOutbound(type, settings, streamSettings, alias, groupName, &ok);
        Q_UNUSED(ok)
    }
    else
    {
        sharelink = result;
    }

    return sharelink;
}

} // namespace serialization
} // namespace Qv2ray::core::connection
