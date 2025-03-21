#include "StreamSettingsWidget.h"

#include "ui/widgets/common/WidgetUIBase.h"
#include "ui/widgets/editors/w_ChainSha256Editor.h"
#include "ui/widgets/editors/w_JsonEditor.h"
#include "utils/QvHelpers.h"

#define QV_MODULE_NAME "StreamSettingsWidget"

StreamSettingsWidget::StreamSettingsWidget(QWidget *parent)
    : QWidget(parent)
{
    setupUi(this);
    QvMessageBusConnect(StreamSettingsWidget);

    securityScrollArea->setVisible(false);
    tlsGroupBox->setVisible(false);
    realityGroupBox->setVisible(false);
}

QvMessageBusSlotImpl(StreamSettingsWidget)
{
    switch (msg)
    {
        MBRetranslateDefaultImpl;
    case UPDATE_COLORSCHEME:
    case HIDE_WINDOWS:
    case SHOW_WINDOWS:
        break;
    }
}

XConfigGen::Xray::StreamSettings4Ray StreamSettingsWidget::GetStreamSettings() const
{
    return stream;
}

void StreamSettingsWidget::SetStreamObject(const XConfigGen::Xray::StreamSettings4Ray &sso)
{
    stream = sso;
    transportCombo->setCurrentText(stream.network.value_or(QString()));
    // TLS reality
    {
        const auto securityStr = stream.security.value_or(QStringLiteral("none")).toLower();
        const static QMap<QString, int> securityIndexMap {
            {"none",    0},
            {"tls",     1},
            {"reality", 2}
        };
        if (securityIndexMap.contains(securityStr))
            securityTypeCB->setCurrentIndex(securityIndexMap[securityStr]);
        else
            LOG("Unsupported Security Type:", securityStr);

#define tls_reality_process(prefix)                                                        \
    {                                                                                      \
        serverNameTxt->setText(stream.prefix##Settings->serverName.value_or(QString()));   \
        fingerprintTxt->setText(stream.prefix##Settings->fingerprint.value_or(QString())); \
    }

        // tls
        if (securityStr == QStringLiteral("tls") && stream.tlsSettings.has_value())
        {
            tls_reality_process(tls);
            enableSessionResumptionCB->setChecked(stream.tlsSettings->enableSessionResumption.value_or(false));
            disableSystemRoot->setChecked(stream.tlsSettings->disableSystemRoot.value_or(false));
            alpnTxt->setText(stream.tlsSettings->alpn.join("|"));
        }
        // reality
        if (securityStr == QStringLiteral("reality") && stream.realitySettings.has_value())
        {
            tls_reality_process(reality);
            publicKeyTxt->setText(stream.realitySettings->publicKey.value_or(QString()));
            shortIdsTxt->setText(stream.realitySettings->shortId.value_or(QString()));
            spiderXTxt->setText(stream.realitySettings->spiderX.value_or(QString()));
        }
    }
    // TCP
    if (stream.tcpSettings.has_value())
    {
        const auto &tcpSettings = stream.tcpSettings.value();
        tcpHeaderTypeCB->setCurrentText(tcpSettings.header.type);
        tcpRequestTxt->setPlainText(tcpSettings.header.request.value_or(QString()));
        tcpRespTxt->setPlainText(tcpSettings.header.response.value_or(QString()));
    }
    // HTTP
    if (stream.httpSettings.has_value())
    {
        const auto &httpSettings = stream.httpSettings.value();
        httpHostTxt->setPlainText(httpSettings.host.join(NEWLINE));
        httpPathTxt->setText(httpSettings.path.value_or(QString("/")));
        // httpMethodCB->setCurrentText(httpSettings.method);
        httpHeadersTxt->setPlainText(JsonToString(httpSettings.toJson()["headers"].toObject()));
    }
    // WS
    if (stream.wsSettings.has_value())
    {
        const auto &wsSettings = stream.wsSettings.value();
        wsPathTxt->setText(wsSettings.path.value_or(QString("/")));
        QString wsHeaders;
        for (const auto &[key, value] : wsSettings.headers.toStdMap())
        {
            wsHeaders = wsHeaders % key % "|" % value % NEWLINE;
        }
        wsHeadersTxt->setPlainText(wsHeaders);
        wsAcceptProxyProtocolCB->setChecked(wsSettings.acceptProxyProtocol.value_or(false));
    }
    // mKCP
    if (stream.kcpSettings.has_value())
    {
        const auto &kcpSettings = stream.kcpSettings.value();
        kcpMTU->setValue(kcpSettings.mtu.value_or(1350));
        kcpTTI->setValue(kcpSettings.tti.value_or(50));
        kcpCongestionCB->setChecked(kcpSettings.congestion.value_or(false));
        kcpReadBufferSB->setValue(kcpSettings.readBufferSize.value_or(2));
        kcpUploadCapacSB->setValue(kcpSettings.uplinkCapacity.value_or(5));
        kcpDownCapacitySB->setValue(kcpSettings.downlinkCapacity.value_or(20));
        kcpWriteBufferSB->setValue(kcpSettings.writeBufferSize.value_or(2));
        kcpSeedTxt->setText(kcpSettings.seed.value_or(QString()));
        if (kcpSettings.header.has_value())
        {
            const auto &header = kcpSettings.header.value();
            kcpHeaderType->setCurrentText(header.type);
            dnsDomainTxt->setText(header.domain.value_or(QString()));
        }
    }
    // DS
    // {
    //     dsPathTxt->setText(stream.dsSettings.path);
    // }
    // QUIC
    if (stream.quicSettings.has_value())
    {
        const auto &quicSettings = stream.quicSettings.value();
        quicKeyTxt->setText(quicSettings.key.value_or(QString()));
        quicSecurityCB->setCurrentText(quicSettings.security.value_or(QString()));
        quicHeaderTypeCB->setCurrentText(quicSettings.header.value_or(XConfigGen::Xray::Header4Ray()).type);
    }
    // gRPC
    if (stream.grpcSettings.has_value())
    {
        const auto &grpcSettings = stream.grpcSettings.value();
        grpcServiceNameTxt->setText(grpcSettings.serviceName.value_or(QString()));
        grpcModeCB->setCurrentText(grpcSettings.multiMode ? "multi" : "gun");
    }
    // SOCKOPT
    if (stream.sockopt.has_value())
    {
        const auto &sockopt = stream.sockopt.value();
        tProxyCB->setCurrentText(sockopt.tproxy.value_or(QString("off")));
        tcpFastOpenCB->setChecked(sockopt.tcpFastOpen.value_or(false));
        soMarkSpinBox->setValue(sockopt.mark.value_or(0));
        tcpKeepAliveIntervalSpinBox->setValue(sockopt.tcpKeepAliveInterval.value_or(0));
    }
    // HTTP Upgrade
    if (stream.httpupgradeSettings.has_value())
    {
        const auto &httpUpgradeSettings = stream.httpupgradeSettings.value();
        huPathTxt->setText(httpUpgradeSettings.path.value_or(QString("/")));
        huHostTxt->setText(httpUpgradeSettings.host.value_or(QString()));
        huAcceptProxyProtocolCB->setChecked(httpUpgradeSettings.acceptProxyProtocol.value_or(false));
        QString huHeaders;
        for (const auto &[key, value] : httpUpgradeSettings.headers.toStdMap())
        {
            huHeaders = huHeaders % key % "|" % value % NEWLINE;
        }
        huHeadersTxt->setPlainText(huHeaders);
    }
    // xhttp
    if (stream.xhttpSettings.has_value())
    {
        const auto &xhttpSettings = stream.xhttpSettings.value();
        xhPathTxt->setText(xhttpSettings.path.value_or(QString("/")));
        xhHostTxt->setText(xhttpSettings.host.value_or(QString()));
        xhModeCombo->setCurrentText(xhttpSettings.mode.value_or(QString("auto")));
        xhExtra->setPlainText(JsonToString(xhttpSettings.extra));
    }
}

void StreamSettingsWidget::on_httpPathTxt_textEdited(const QString &arg1)
{
    XConfigGen::Xray::HttpSettings4Ray httpSettings;
    if (stream.httpSettings.has_value())
        httpSettings = stream.httpSettings.value();
    httpSettings.path = arg1;
    stream.httpSettings = httpSettings;
}

void StreamSettingsWidget::on_httpHostTxt_textEdited()
{
    XConfigGen::Xray::HttpSettings4Ray httpSettings;
    if (stream.httpSettings.has_value())
        httpSettings = stream.httpSettings.value();

    const auto hosts = httpHostTxt->toPlainText().replace("\r", "").split("\n");
    httpSettings.host.clear();
    for (const auto &host : hosts)
    {
        if (!host.trimmed().isEmpty())
            httpSettings.host.push_back(host.trimmed());
    }

    stream.httpSettings = httpSettings;
}

void StreamSettingsWidget::on_wsHeadersTxt_textChanged()
{
    XConfigGen::Xray::WsSettings4Ray wsSettings;
    if (stream.wsSettings.has_value())
        wsSettings = stream.wsSettings.value();
    const auto headers = SplitLines(wsHeadersTxt->toPlainText());
    wsSettings.headers.clear();
    for (const auto &header : headers)
    {
        if (header.isEmpty())
            continue;

        if (!header.contains("|"))
        {
            LOG("Header missing '|' separator");
            RED(wsHeadersTxt);
            return;
        }

        const auto index = header.indexOf("|");
        auto key = header.left(index);
        auto value = header.right(header.length() - index - 1);
        wsSettings.headers[key] = value;
    }
    stream.wsSettings = wsSettings;
    BLACK(wsHeadersTxt);
}

void StreamSettingsWidget::on_tcpRequestDefBtn_clicked()
{
    XConfigGen::Xray::TcpSettings4Ray tcpSettings;
    if (stream.tcpSettings.has_value())
        tcpSettings = stream.tcpSettings.value();
    tcpRequestTxt->clear();
    tcpSettings.header.request = std::nullopt;
    stream.tcpSettings = tcpSettings;
}

void StreamSettingsWidget::on_tcpRespDefBtn_clicked()
{
    XConfigGen::Xray::TcpSettings4Ray tcpSettings;
    if (stream.tcpSettings.has_value())
        tcpSettings = stream.tcpSettings.value();
    tcpRespTxt->clear();
    tcpSettings.header.response = std::nullopt;
    stream.tcpSettings = tcpSettings;
}

void StreamSettingsWidget::on_soMarkSpinBox_valueChanged(int arg1)
{
    XConfigGen::Xray::Sockopt4Ray sockopt;
    if (stream.sockopt.has_value())
        sockopt = stream.sockopt.value();
    sockopt.mark = arg1;
    stream.sockopt = sockopt;
}

void StreamSettingsWidget::on_tcpFastOpenCB_stateChanged(int arg1)
{
    XConfigGen::Xray::Sockopt4Ray sockopt;
    if (stream.sockopt.has_value())
        sockopt = stream.sockopt.value();
    sockopt.tcpFastOpen = arg1 == Qt::Checked;
    stream.sockopt = sockopt;
}

void StreamSettingsWidget::on_tProxyCB_currentIndexChanged(int arg1)
{
    XConfigGen::Xray::Sockopt4Ray sockopt;
    if (stream.sockopt.has_value())
        sockopt = stream.sockopt.value();
    sockopt.tproxy = tProxyCB->itemText(arg1);
    stream.sockopt = sockopt;
}

void StreamSettingsWidget::on_quicSecurityCB_currentIndexChanged(int arg1)
{
    XConfigGen::Xray::QuicSettings4Ray quicSettings;
    if (stream.quicSettings.has_value())
        quicSettings = stream.quicSettings.value();
    quicSettings.security = quicSecurityCB->itemText(arg1);
    stream.quicSettings = quicSettings;
}

void StreamSettingsWidget::on_quicKeyTxt_textEdited(const QString &arg1)
{
    XConfigGen::Xray::QuicSettings4Ray quicSettings;
    if (stream.quicSettings.has_value())
        quicSettings = stream.quicSettings.value();
    quicSettings.key = arg1;
    stream.quicSettings = quicSettings;
}

void StreamSettingsWidget::on_quicHeaderTypeCB_currentIndexChanged(int arg1)
{
    XConfigGen::Xray::QuicSettings4Ray quicSettings;
    if (stream.quicSettings.has_value())
        quicSettings = stream.quicSettings.value();
    XConfigGen::Xray::Header4Ray header;
    if (quicSettings.header.has_value())
        header = quicSettings.header.value();
    header.type = quicHeaderTypeCB->itemText(arg1);
    quicSettings.header = header;
    stream.quicSettings = quicSettings;
}

void StreamSettingsWidget::on_tcpHeaderTypeCB_currentIndexChanged(int arg1)
{
    XConfigGen::Xray::TcpSettings4Ray tcpSettings;
    if (stream.tcpSettings.has_value())
        tcpSettings = stream.tcpSettings.value();
    tcpSettings.header.type = tcpHeaderTypeCB->itemText(arg1);
    stream.tcpSettings = tcpSettings;
}

void StreamSettingsWidget::on_wsPathTxt_textEdited(const QString &arg1)
{
    if (arg1.isEmpty() || arg1 == QStringLiteral("/"))
    {
        return;
    }
    XConfigGen::Xray::WsSettings4Ray wsSettings;
    if (stream.wsSettings.has_value())
        wsSettings = stream.wsSettings.value();
    wsSettings.path = arg1;
    stream.wsSettings = wsSettings;
}

void StreamSettingsWidget::on_kcpMTU_valueChanged(int arg1)
{
    XConfigGen::Xray::KcpSettings4Ray kcpSettings;
    if (stream.kcpSettings.has_value())
        kcpSettings = stream.kcpSettings.value();
    kcpSettings.mtu = arg1;
    stream.kcpSettings = kcpSettings;
}

void StreamSettingsWidget::on_kcpTTI_valueChanged(int arg1)
{
    XConfigGen::Xray::KcpSettings4Ray kcpSettings;
    if (stream.kcpSettings.has_value())
        kcpSettings = stream.kcpSettings.value();
    kcpSettings.tti = arg1;
    stream.kcpSettings = kcpSettings;
}

void StreamSettingsWidget::on_kcpUploadCapacSB_valueChanged(int arg1)
{
    XConfigGen::Xray::KcpSettings4Ray kcpSettings;
    if (stream.kcpSettings.has_value())
        kcpSettings = stream.kcpSettings.value();
    kcpSettings.uplinkCapacity = arg1;
    stream.kcpSettings = kcpSettings;
}

void StreamSettingsWidget::on_kcpCongestionCB_stateChanged(int arg1)
{
    XConfigGen::Xray::KcpSettings4Ray kcpSettings;
    if (stream.kcpSettings.has_value())
        kcpSettings = stream.kcpSettings.value();
    kcpSettings.congestion = arg1 == Qt::Checked;
    stream.kcpSettings = kcpSettings;
}

void StreamSettingsWidget::on_kcpDownCapacitySB_valueChanged(int arg1)
{
    XConfigGen::Xray::KcpSettings4Ray kcpSettings;
    if (stream.kcpSettings.has_value())
        kcpSettings = stream.kcpSettings.value();
    kcpSettings.downlinkCapacity = arg1;
    stream.kcpSettings = kcpSettings;
}

void StreamSettingsWidget::on_kcpReadBufferSB_valueChanged(int arg1)
{
    XConfigGen::Xray::KcpSettings4Ray kcpSettings;
    if (stream.kcpSettings.has_value())
        kcpSettings = stream.kcpSettings.value();
    kcpSettings.readBufferSize = arg1;
    stream.kcpSettings = kcpSettings;
}

void StreamSettingsWidget::on_kcpWriteBufferSB_valueChanged(int arg1)
{
    XConfigGen::Xray::KcpSettings4Ray kcpSettings;
    if (stream.kcpSettings.has_value())
        kcpSettings = stream.kcpSettings.value();
    kcpSettings.writeBufferSize = arg1;
    stream.kcpSettings = kcpSettings;
}

void StreamSettingsWidget::on_kcpHeaderType_currentIndexChanged(int arg1)
{
    XConfigGen::Xray::KcpSettings4Ray kcpSettings;
    if (stream.kcpSettings.has_value())
        kcpSettings = stream.kcpSettings.value();
    XConfigGen::Xray::Header4Ray header;
    if (kcpSettings.header.has_value())
        header = kcpSettings.header.value();
    header.type = kcpHeaderType->itemText(arg1);
    kcpSettings.header = header;
    stream.kcpSettings = kcpSettings;
}

void StreamSettingsWidget::on_kcpSeedTxt_textEdited(const QString &arg1)
{
    XConfigGen::Xray::KcpSettings4Ray kcpSettings;
    if (stream.kcpSettings.has_value())
        kcpSettings = stream.kcpSettings.value();
    kcpSettings.seed = arg1;
    stream.kcpSettings = kcpSettings;
}

void StreamSettingsWidget::on_dnsDomainTxt_textEdited(const QString &arg1)
{
    XConfigGen::Xray::KcpSettings4Ray kcpSettings;
    if (stream.kcpSettings.has_value())
        kcpSettings = stream.kcpSettings.value();
    XConfigGen::Xray::Header4Ray header;
    if (kcpSettings.header.has_value())
        header = kcpSettings.header.value();
    header.domain = arg1;
    kcpSettings.header = header;
    stream.kcpSettings = kcpSettings;
}

void StreamSettingsWidget::on_dsPathTxt_textEdited(const QString &arg1)
{
    // XConfigGen::Xray::DsSettings4Ray dsSettings;
    // if (stream.dsSettings.has_value())
    //     dsSettings = stream.dsSettings.value();
    // dsSettings.path = arg1;
    // stream.dsSettings = dsSettings;
}

void StreamSettingsWidget::on_tcpRequestEditBtn_clicked()
{
    JsonEditor w(JsonFromString(tcpRequestTxt->toPlainText()), this);
    auto rJson = w.OpenEditor();
    tcpRequestTxt->setPlainText(JsonToString(rJson));
    auto tcpReqObject = HTTPRequestObject::fromJson(rJson);
    if (stream.tcpSettings.has_value())
    {
        auto tcpSettings = stream.tcpSettings.value();
        tcpSettings.header.request = QJsonDocument(tcpReqObject.toJson()).toJson();
        stream.tcpSettings = tcpSettings;
    }
}

void StreamSettingsWidget::on_tcpResponseEditBtn_clicked()
{
    JsonEditor w(JsonFromString(tcpRespTxt->toPlainText()), this);
    auto rJson = w.OpenEditor();
    tcpRespTxt->setPlainText(JsonToString(rJson));
    auto tcpRspObject = HTTPResponseObject::fromJson(rJson);
    if (stream.tcpSettings.has_value())
    {
        auto tcpSettings = stream.tcpSettings.value();
        tcpSettings.header.response = QJsonDocument(tcpRspObject.toJson()).toJson();
        ;
        stream.tcpSettings = tcpSettings;
    }
}

void StreamSettingsWidget::on_transportCombo_currentIndexChanged(int arg1)
{
    stream.network = transportCombo->itemText(arg1);
    v2rayStackView->setCurrentIndex(arg1);
}

void StreamSettingsWidget::on_securityTypeCB_currentIndexChanged(int arg1)
{
    const auto security = securityTypeCB->itemText(arg1).toLower();
    stream.security = security;
    const bool tls = security == "tls";
    const bool reality = security == "reality";
    securityScrollArea->setVisible(tls || reality);
    tlsGroupBox->setVisible(tls);
    realityGroupBox->setVisible(reality);
}

void StreamSettingsWidget::on_serverNameTxt_textEdited(const QString &arg1)
{
    XConfigGen::Xray::TlsSettings4Ray tlsSettings;
    QString currentSecurity = securityTypeCB->currentText(); // 获取当前的安全类型

    // 根据 securityTypeCB 的文本选择 tlsSettings 或 realitySettings
    if (currentSecurity == "tls" && stream.tlsSettings.has_value())
    {
        tlsSettings = stream.tlsSettings.value();
    }
    else if (currentSecurity == "reality" && stream.realitySettings.has_value())
    {
        tlsSettings = stream.realitySettings.value();
    }

    // 更新 serverName
    tlsSettings.serverName = arg1.trimmed();

    // 将更新后的设置保存回对应的设置
    if (currentSecurity == "tls")
    {
        stream.tlsSettings = tlsSettings;
    }
    else if (currentSecurity == "reality")
    {
        stream.realitySettings = tlsSettings;
    }
}

void StreamSettingsWidget::on_allowInsecureCB_stateChanged(int arg1)
{
    XConfigGen::Xray::TlsSettings4Ray tlsSettings;
    if (stream.tlsSettings.has_value())
        tlsSettings = stream.tlsSettings.value();
    tlsSettings.allowInsecure = arg1 == Qt::Checked;
    stream.tlsSettings = tlsSettings;
}

void StreamSettingsWidget::on_enableSessionResumptionCB_stateChanged(int arg1)
{
    // XConfigGen::Xray::TlsSettings4Ray tlsSettings;
    // if (stream.tlsSettings.has_value())
    //     tlsSettings = stream.tlsSettings.value();
    // tlsSettings.enableSessionResumptionCB = arg1 == Qt::Checked;
    // stream.tlsSettings = tlsSettings;
}

void StreamSettingsWidget::on_alpnTxt_textEdited(const QString &arg1)
{
    XConfigGen::Xray::TlsSettings4Ray tlsSettings;
    if (stream.tlsSettings.has_value())
        tlsSettings = stream.tlsSettings.value();
#if QT_VERSION >= QT_VERSION_CHECK(5, 14, 0)
    tlsSettings.alpn = arg1.split('|', Qt::SplitBehaviorFlags::SkipEmptyParts);
#else
    tlsSettings.alpn = arg1.split('|', QString::SkipEmptyParts);
#endif
    stream.tlsSettings = tlsSettings;
}

void StreamSettingsWidget::on_disableSystemRoot_stateChanged(int arg1)
{
    XConfigGen::Xray::TlsSettings4Ray tlsSettings;
    if (stream.tlsSettings.has_value())
        tlsSettings = stream.tlsSettings.value();
    tlsSettings.disableSystemRoot = arg1;
    stream.tlsSettings = tlsSettings;
}

void StreamSettingsWidget::on_openCertEditorBtn_clicked()
{
}

void StreamSettingsWidget::on_grpcServiceNameTxt_textEdited(const QString &arg1)
{
    XConfigGen::Xray::GrpcSettings4Ray grpcSettings;
    if (stream.grpcSettings.has_value())
        grpcSettings = stream.grpcSettings.value();
    grpcSettings.serviceName = arg1;
    stream.grpcSettings = grpcSettings;
}

void StreamSettingsWidget::on_grpcModeCB_currentIndexChanged(int arg1)
{
    XConfigGen::Xray::GrpcSettings4Ray grpcSettings;
    if (stream.grpcSettings.has_value())
        grpcSettings = stream.grpcSettings.value();
    grpcSettings.multiMode = grpcModeCB->itemText(arg1).toLower() == "multi";
    stream.grpcSettings = grpcSettings;
}

void StreamSettingsWidget::on_pinnedPeerCertificateChainSha256Btn_clicked()
{
}

void StreamSettingsWidget::on_httpMethodCB_currentTextChanged(const QString &arg1)
{
    XConfigGen::Xray::HttpSettings4Ray httpSettings;
    if (stream.httpSettings.has_value())
        httpSettings = stream.httpSettings.value();
    httpSettings.method = arg1;
    stream.httpSettings = httpSettings;
}

void StreamSettingsWidget::on_tcpKeepAliveIntervalSpinBox_valueChanged(int arg1)
{
    XConfigGen::Xray::Sockopt4Ray sockopt;
    if (stream.sockopt.has_value())
        sockopt = stream.sockopt.value();
    sockopt.tcpKeepAliveInterval = arg1;
    stream.sockopt = sockopt;
}

void StreamSettingsWidget::on_httpHeadersDefBtn_clicked()
{
    // XConfigGen::Xray::HttpSettings4Ray httpSettings;
    // if (stream.httpSettings.has_value())
    //     httpSettings = stream.httpSettings.value();
    httpHeadersTxt->clear();
    // stream.httpSettings.headers = HttpObject().headers;
}

void StreamSettingsWidget::on_httpHeadersEditBtn_clicked()
{
    // JsonEditor w(JsonFromString(httpHeadersTxt->toPlainText()), this);
    // auto rJson = w.OpenEditor();
    // httpHeadersTxt->setPlainText(JsonToString(rJson));
    // auto json = HttpObject().toJson();
    // json["headers"] = rJson;
    // stream.httpSettings.headers = HttpObject::fromJson(json).headers;
}

void StreamSettingsWidget::on_fingerprintTxt_textEdited(const QString &arg1)
{
    XConfigGen::Xray::TlsSettings4Ray tlsSettings;
    QString currentSecurity = securityTypeCB->currentText(); // 获取当前的安全类型

    // 根据 securityTypeCB 的文本选择 tlsSettings 或 realitySettings
    if (currentSecurity == "tls" && stream.tlsSettings.has_value())
    {
        tlsSettings = stream.tlsSettings.value();
    }
    else if (currentSecurity == "reality" && stream.realitySettings.has_value())
    {
        tlsSettings = stream.realitySettings.value();
    }

    // 更新 fingerprint
    tlsSettings.fingerprint = arg1.trimmed();

    // 将更新后的设置保存回对应的设置
    if (currentSecurity == "tls")
    {
        stream.tlsSettings = tlsSettings;
    }
    else if (currentSecurity == "reality")
    {
        stream.realitySettings = tlsSettings;
    }
}

void StreamSettingsWidget::on_publicKeyTxt_textEdited(const QString &arg1)
{
    XConfigGen::Xray::TlsSettings4Ray realitySettings;
    if (stream.realitySettings.has_value())
        realitySettings = stream.realitySettings.value();
    realitySettings.publicKey = arg1;
    stream.realitySettings = realitySettings;
}

void StreamSettingsWidget::on_shortIdsTxt_textEdited(const QString &arg1)
{
    XConfigGen::Xray::TlsSettings4Ray realitySettings;
    if (stream.realitySettings.has_value())
        realitySettings = stream.realitySettings.value();
    realitySettings.shortId = arg1;
    stream.realitySettings = realitySettings;
}

void StreamSettingsWidget::on_spiderXTxt_textEdited(const QString &arg1)
{
    XConfigGen::Xray::TlsSettings4Ray realitySettings;
    if (stream.realitySettings.has_value())
        realitySettings = stream.realitySettings.value();
    realitySettings.spiderX = arg1;
    stream.realitySettings = realitySettings;
}

void StreamSettingsWidget::on_wsHostTxt_textEdited(const QString &arg1)
{
    XConfigGen::Xray::WsSettings4Ray wsSettings;
    if (stream.wsSettings.has_value())
        wsSettings = stream.wsSettings.value();
    wsSettings.host = arg1;
    stream.wsSettings = wsSettings;
}

void StreamSettingsWidget::on_wsAcceptProxyProtocolCB_stateChanged(int arg1)
{
    XConfigGen::Xray::WsSettings4Ray wsSettings;
    if (stream.wsSettings.has_value())
        wsSettings = stream.wsSettings.value();
    wsSettings.acceptProxyProtocol = arg1 == Qt::Checked;
    stream.wsSettings = wsSettings;
}

void StreamSettingsWidget::on_huAcceptProxyProtocolCB_stateChanged(int arg1)
{
    XConfigGen::Xray::HttpUpgradeSettings4Ray huSettings;
    if (stream.wsSettings.has_value())
        huSettings = stream.httpupgradeSettings.value();
    huSettings.acceptProxyProtocol = arg1 == Qt::Checked;
    stream.httpupgradeSettings = huSettings;
}

void StreamSettingsWidget::on_huHostTxt_textEdited(const QString &arg1)
{
    XConfigGen::Xray::HttpUpgradeSettings4Ray huSettings;
    if (stream.wsSettings.has_value())
        huSettings = stream.httpupgradeSettings.value();
    huSettings.host = arg1;
    stream.httpupgradeSettings = huSettings;
}

void StreamSettingsWidget::on_huPathTxt_textEdited(const QString &arg1)
{
    XConfigGen::Xray::HttpUpgradeSettings4Ray huSettings;
    if (stream.wsSettings.has_value())
        huSettings = stream.httpupgradeSettings.value();
    huSettings.path = arg1;
    stream.httpupgradeSettings = huSettings;
}

void StreamSettingsWidget::on_huHeadersTxt_textChanged()
{
    XConfigGen::Xray::HttpUpgradeSettings4Ray huSettings;
    if (stream.wsSettings.has_value())
        huSettings = stream.httpupgradeSettings.value();
    const auto headers = SplitLines(huHeadersTxt->toPlainText());
    huSettings.headers.clear();
    for (const auto &header : headers)
    {
        if (header.isEmpty())
            continue;

        if (!header.contains("|"))
        {
            LOG("Header missing '|' separator");
            RED(huHeadersTxt);
            return;
        }

        const auto index = header.indexOf("|");
        auto key = header.left(index);
        auto value = header.right(header.length() - index - 1);
        huSettings.headers[key] = value;
    }
    stream.httpupgradeSettings = huSettings;
    BLACK(huHeadersTxt);
}

void StreamSettingsWidget::on_xhHostTxt_textEdited(const QString &arg1)
{
    XConfigGen::Xray::XhttpSettings4Ray xhSettings;
    if (stream.wsSettings.has_value())
        xhSettings = stream.xhttpSettings.value();
    xhSettings.host = arg1;
    stream.xhttpSettings = xhSettings;
}

void StreamSettingsWidget::on_xhPathTxt_textEdited(const QString &arg1)
{
    XConfigGen::Xray::XhttpSettings4Ray xhSettings;
    if (stream.wsSettings.has_value())
        xhSettings = stream.xhttpSettings.value();
    xhSettings.path = arg1;
    stream.xhttpSettings = xhSettings;
}

void StreamSettingsWidget::on_xhModeCombo_currentTextChanged(const QString &arg1)
{
    XConfigGen::Xray::XhttpSettings4Ray xhSettings;
    if (stream.wsSettings.has_value())
        xhSettings = stream.xhttpSettings.value();
    xhSettings.mode = arg1;
    stream.xhttpSettings = xhSettings;
}

void StreamSettingsWidget::on_xhExtra_textChanged()
{
    XConfigGen::Xray::XhttpSettings4Ray xhSettings;
    if (stream.wsSettings.has_value())
        xhSettings = stream.xhttpSettings.value();
    xhSettings.extra = JsonFromString(xhExtra->toPlainText());
    stream.xhttpSettings = xhSettings;
}
