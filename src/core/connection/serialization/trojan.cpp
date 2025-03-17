#include "core/CoreUtils.h"
#include "core/connection/Generation.h"
#include "core/connection/Serialization.h"
#include "utils/QvHelpers.h"

#define QV_MODULE_NAME "TrojanImporter"

namespace Qv2ray::core::connection
{
namespace serialization::trojan
{
CONFIGROOT Deserialize(const QString &trojanUri, QString *alias, QString *errMessage)
{
    ShadowSocksServerObject server;
    QString d_name;

    if (!trojanUri.startsWith("trojan://"))
    {
        *errMessage = QObject::tr("trojan link should start with trojan://");
        return CONFIGROOT();
    }

    QUrl url(trojanUri);
    if (!url.isValid())
    {
        *errMessage = QObject::tr("link parse failed: %1").arg(url.errorString());
        return CONFIGROOT();
    }

    // fetch host
    const auto hostRaw = url.host();
    if (hostRaw.isEmpty())
    {
        *errMessage = QObject::tr("empty host");
        return CONFIGROOT();
    }
    const auto host = (hostRaw.startsWith('[') && hostRaw.endsWith(']')) ? hostRaw.mid(1, hostRaw.length() - 2) : hostRaw;

    // fetch port
    const auto port = url.port();
    if (port == -1)
    {
        *errMessage = QObject::tr("missing port");
        return CONFIGROOT();
    }

    // fetch remarks
    const auto remarks = url.fragment();
    if (!remarks.isEmpty())
    {
        *alias = remarks;
    }

    // fetch uuid
    const auto uuid = url.userInfo();
    if (uuid.isEmpty())
    {
        *errMessage = QObject::tr("missing uuid");
        return CONFIGROOT();
    }

    // initialize QJsonObject with basic info
    QJsonObject outbound;
    QJsonObject stream;

    QJsonIO::SetValue(outbound, "trojan", "protocol");
    QJsonIO::SetValue(outbound, host, { "settings", "servers", 0, "address" });
    QJsonIO::SetValue(outbound, port, { "settings", "servers", 0, "port" });
    QJsonIO::SetValue(outbound, uuid, { "settings", "servers", 0, "password" });

    QUrlQuery query(url.query());

    // handle type
    const auto hasType = query.hasQueryItem("type");
    const auto type = hasType ? query.queryItemValue("type") : "raw";
    if (type != "raw" || type != "tcp")
        QJsonIO::SetValue(stream, type, "network");

    // type-wise settings
    if (type == "kcp")
    {
        const auto hasSeed = query.hasQueryItem("seed");
        if (hasSeed)
            QJsonIO::SetValue(stream, query.queryItemValue("seed"), { "kcpSettings", "seed" });

        const auto hasHeaderType = query.hasQueryItem("headerType");
        const auto headerType = hasHeaderType ? query.queryItemValue("headerType") : "none";
        if (headerType != "none")
            QJsonIO::SetValue(stream, headerType, { "kcpSettings", "header", "type" });

        // https://github.com/2dust/v2rayN/pull/6852
        // https://github.com/2dust/v2rayNG/pull/4368
        // https://github.com/XTLS/Xray-core/discussions/716#discussioncomment-12387674
        // 目前 mkcp dns 伪装域名使用 host 字段

        const auto hasHost = query.hasQueryItem("host");
        if (hasHost)
        {
            const auto hosts = query.queryItemValue("host");
            QJsonIO::SetValue(stream, hosts, { "kcpSettings", "header", "domain" });
        }
    }
    else if (type == "http")
    {
        const auto hasPath = query.hasQueryItem("path");
        const auto path = hasPath ? QUrl::fromPercentEncoding(query.queryItemValue("path").toUtf8()) : "/";
        if (path != "/")
            QJsonIO::SetValue(stream, path, { "httpSettings", "path" });

        const auto hasHost = query.hasQueryItem("host");
        if (hasHost)
        {
            const auto hosts = QJsonArray::fromStringList(query.queryItemValue("host").split(","));
            QJsonIO::SetValue(stream, hosts, { "httpSettings", "host" });
        }
    }
    else if (type == "ws")
    {
        const auto hasPath = query.hasQueryItem("path");
        const auto path = hasPath ? QUrl::fromPercentEncoding(query.queryItemValue("path").toUtf8()) : "/";
        if (path != "/")
            QJsonIO::SetValue(stream, path, { "wsSettings", "path" });

        const auto hasHost = query.hasQueryItem("host");
        if (hasHost)
        {
            QJsonIO::SetValue(stream, query.queryItemValue("host"), { "wsSettings", "headers", "Host" });
        }
    }
    else if (type == "quic")
    {
        const auto hasQuicSecurity = query.hasQueryItem("quicSecurity");
        if (hasQuicSecurity)
        {
            const auto quicSecurity = query.queryItemValue("quicSecurity");
            QJsonIO::SetValue(stream, quicSecurity, { "quicSettings", "security" });

            if (quicSecurity != "none")
            {
                const auto key = query.queryItemValue("key");
                QJsonIO::SetValue(stream, key, { "quicSettings", "key" });
            }

            const auto hasHeaderType = query.hasQueryItem("headerType");
            const auto headerType = hasHeaderType ? query.queryItemValue("headerType") : "none";
            if (headerType != "none")
                QJsonIO::SetValue(stream, headerType, { "quicSettings", "header", "type" });
        }
    }
    else if (type == "grpc")
    {
        const auto hasServiceName = query.hasQueryItem("serviceName");
        if (hasServiceName)
        {
            const auto serviceName = QUrl::fromPercentEncoding(query.queryItemValue("serviceName").toUtf8());
            QJsonIO::SetValue(stream, serviceName, { "grpcSettings", "serviceName" });
        }

        const auto hasMode = query.hasQueryItem("mode");
        if (hasMode)
        {
            const auto multiMode = QUrl::fromPercentEncoding(query.queryItemValue("mode").toUtf8()) == "multi";
            QJsonIO::SetValue(stream, multiMode, { "grpcSettings", "multiMode" });
        }
    }

    // tls/reality-wise settings
    const auto hasSecurity = query.hasQueryItem("security");
    const auto security = hasSecurity ? query.queryItemValue("security") : "none";
    // tlsSettings realitySettings
    const auto securitySettings = QString(security).append(QStringLiteral("Settings"));
    if (security != "none")
    {
        QJsonIO::SetValue(stream, security, "security");
    }
    // sni
    const auto hasSNI = query.hasQueryItem("sni");
    if (hasSNI)
    {
        const auto sni = query.queryItemValue("sni");
        QJsonIO::SetValue(stream, sni, { securitySettings, "serverName" });
    }
    // fingerprint
    const auto hasFingerprint = query.hasQueryItem("fp");
    if (hasFingerprint)
    {
        const auto fingerprint = query.queryItemValue("fp");
        QJsonIO::SetValue(stream, fingerprint, { securitySettings, "fingerprint" });
    }

    // reality-specific
    if (security == "reality")
    {
        const auto publicKey = query.queryItemValue("pbk");
        if (publicKey.isEmpty())
        {
            *errMessage = QObject::tr("missing publicKey");
            return CONFIGROOT();
        }
        QJsonIO::SetValue(stream, publicKey, { securitySettings, "publicKey" });

        const auto hasShortId = query.hasQueryItem("sid");
        if (hasShortId)
        {
            const auto shortId = query.queryItemValue("sid");
            QJsonIO::SetValue(stream, shortId, { securitySettings, "shortId" });
        }

        const auto hasSpiderX = query.hasQueryItem("spx");
        if (hasSpiderX)
        {
            // 使用 URIComponent 转义
            const auto spiderX = QUrl::fromPercentEncoding(query.queryItemValue("spx").toUtf8());
            QJsonIO::SetValue(stream, spiderX, { securitySettings, "spiderX" });
        }
    }
    else // tls-specific
    {
        const auto hasALPN = query.hasQueryItem("alpn");
        if (hasALPN)
        {
            const auto alpnRaw = QUrl::fromPercentEncoding(query.queryItemValue("alpn").toUtf8());
            const auto alpnArray = QJsonArray::fromStringList(alpnRaw.split(","));
            QJsonIO::SetValue(stream, alpnArray, { securitySettings, "alpn" });
        }
        // 理论：没有 allowInsecure 这个字段。不安全的节点，不适合分享。
        const auto hasAllowInsecure = query.hasQueryItem("allowInsecure");
        if (hasAllowInsecure)
        {
            const auto allowInsecure = query.queryItemValue("allowInsecure") == "1";
            QJsonIO::SetValue(stream, allowInsecure, { securitySettings, "allowInsecure" });
        }
    }

    // assembling config
    CONFIGROOT root;
    outbound["streamSettings"] = stream;
    root["outbounds"] = QJsonArray{ outbound };

    // return
    return root;
}

} // namespace serialization::trojan
} // namespace Qv2ray::core::connection
