#pragma once

#include "QvGUIPluginInterface.h"
#include "ui_freedom.h"

class FreedomOutboundEditor
    : public Qv2rayPlugin::QvPluginEditor,
      private Ui::freedomOutEditor
{
    Q_OBJECT

public:
    explicit FreedomOutboundEditor(QWidget *parent = nullptr);

    void SetHostAddress(const QString &, int) override {};
    QPair<QString, int> GetHostAddress() const override
    {
        return {};
    };

    void SetContent(const QJsonObject &content) override
    {
        this->content = content;
        PLUGIN_EDITOR_LOADING_SCOPE({
            DSCB->setCurrentText(content.value(QStringLiteral("domainStrategy")).toString());
            redirectTxt->setText(content.value(QStringLiteral("redirect")).toString());
        })
    };
    const QJsonObject GetContent() const override
    {
        return content;
    };

protected:
    void changeEvent(QEvent *e) override;

private slots:
    void on_DSCB_currentTextChanged(const QString &arg1);
    void on_redirectTxt_textEdited(const QString &arg1);
};
