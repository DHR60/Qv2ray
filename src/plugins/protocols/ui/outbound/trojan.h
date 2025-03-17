#pragma once

#include "CommonTypes.h"
#include "QvGUIPluginInterface.hpp"
#include "ui_trojan.h"

class TrojanOutboundEditor
    : public Qv2rayPlugin::QvPluginEditor,
      private Ui::trojanOutEditor
{
    Q_OBJECT

public:
    explicit TrojanOutboundEditor(QWidget *parent = nullptr);

    void SetHostAddress(const QString &addr, int port) override
    {
        trojan.address = addr;
        trojan.port = port;
    }

    QPair<QString, int> GetHostAddress() const override
    {
        return { trojan.address, trojan.port };
    }

    void SetContent(const QJsonObject &content) override;
    const QJsonObject GetContent() const override
    {
        auto result = content;
        QJsonArray servers;
        servers.append(trojan.toJson());
        result.insert("servers", servers);
        return result;
    }

private:
    TrojanServerObject trojan;

protected:
    void changeEvent(QEvent *e) override;

private slots:
    void on_trojan_passwordTxt_textEdited(const QString &arg1);
};
