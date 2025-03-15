#include "dns.h"

DnsOutboundEditor::DnsOutboundEditor(QWidget *parent)
    : Qv2rayPlugin::QvPluginEditor(parent)
{
    setupUi(this);
    setProperty("QV2RAY_INTERNAL_HAS_STREAMSETTINGS", false);
    setProperty("QV2RAY_INTERNAL_HAS_FORWARD_PROXY", false);
}

void DnsOutboundEditor::changeEvent(QEvent *e)
{
    QWidget::changeEvent(e);
    switch (e->type())
    {
    case QEvent::LanguageChange:
        retranslateUi(this);
        break;
    default:
        break;
    }
}

void DnsOutboundEditor::on_tcpCB_clicked()
{
    PLUGIN_EDITOR_LOADING_GUARD
    content.insert(QStringLiteral("network"), QStringLiteral("tcp"));
}

void DnsOutboundEditor::on_udpCB_clicked()
{
    PLUGIN_EDITOR_LOADING_GUARD
    content.insert(QStringLiteral("network"), QStringLiteral("udp"));
}

void DnsOutboundEditor::on_originalCB_clicked()
{
    PLUGIN_EDITOR_LOADING_GUARD
    content.remove(QStringLiteral("network"));
}

void DnsOutboundEditor::on_addressTxt_textEdited(const QString &arg1)
{
    PLUGIN_EDITOR_LOADING_GUARD
    if (arg1.isEmpty())
        content.remove(QStringLiteral("network"));
    else
        content.insert(QStringLiteral("network"), arg1);
}

void DnsOutboundEditor::on_portSB_valueChanged(int arg1)
{
    PLUGIN_EDITOR_LOADING_GUARD
    if (arg1 < 0)
        content.remove(QStringLiteral("port"));
    else
        content.insert(QStringLiteral("port"), arg1);
}
