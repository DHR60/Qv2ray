#include "blackhole.hpp"

BlackholeOutboundEditor::BlackholeOutboundEditor(QWidget *parent)
    : Qv2rayPlugin::QvPluginEditor(parent)
{
    setupUi(this);
    setProperty("QV2RAY_INTERNAL_HAS_STREAMSETTINGS", false);
    setProperty("QV2RAY_INTERNAL_HAS_FORWARD_PROXY", false);
}

void BlackholeOutboundEditor::changeEvent(QEvent *e)
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

void BlackholeOutboundEditor::SetContent(const QJsonObject &_content)
{
    this->content = _content;
    PLUGIN_EDITOR_LOADING_SCOPE({
        QJsonObject response = content.value(QStringLiteral("response")).toObject();
        if (response.contains(QStringLiteral("type")))
        {
            responseTypeCB->setCurrentText(response.value(QStringLiteral("type")).toString());
        }
    })
}

void BlackholeOutboundEditor::on_responseTypeCB_currentTextChanged(const QString &arg1)
{
    PLUGIN_EDITOR_LOADING_GUARD
    content = QJsonObject{
        {"response", QJsonObject{ { "type", arg1 } }}
    };
}
