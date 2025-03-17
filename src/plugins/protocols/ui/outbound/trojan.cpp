#include "trojan.h"

#include "BuiltinProtocolPlugin.h"

TrojanOutboundEditor::TrojanOutboundEditor(QWidget *parent)
    : Qv2rayPlugin::QvPluginEditor(parent)
{
    setupUi(this);
    setProperty("QV2RAY_INTERNAL_HAS_STREAMSETTINGS", true);
    setProperty("QV2RAY_INTERNAL_HAS_FORWARD_PROXY", true);
}

void TrojanOutboundEditor::changeEvent(QEvent *e)
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

void TrojanOutboundEditor::SetContent(const QJsonObject &content)
{
    PLUGIN_EDITOR_LOADING_SCOPE({
        QJsonArray servers = content.value(QStringLiteral("servers")).toArray();
        if (servers.isEmpty())
        {
            servers = QJsonArray{ QJsonObject{} };
            QJsonObject mutableContent = content;
            mutableContent.insert(QStringLiteral("servers"), servers);
            this->content = mutableContent;
        }
        // trojan Configs
        trojan = TrojanServerObject::fromJson(servers.first().toObject());
        trojan_passwordTxt->setText(trojan.password);
    })
}

void TrojanOutboundEditor::on_trojan_passwordTxt_textEdited(const QString &arg1)
{
    PLUGIN_EDITOR_LOADING_GUARD
    trojan.password = arg1;
}
