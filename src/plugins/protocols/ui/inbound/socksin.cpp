#include "socksin.hpp"

#include "BuiltinProtocolPlugin.hpp"

SocksInboundEditor::SocksInboundEditor(QWidget *parent)
    : Qv2rayPlugin::QvPluginEditor(parent)
{
    setupUi(this);
    setProperty("QV2RAY_INTERNAL_HAS_STREAMSETTINGS", true);
}

void SocksInboundEditor::changeEvent(QEvent *e)
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

void SocksInboundEditor::SetContent(const QJsonObject &content)
{
    PLUGIN_EDITOR_LOADING_SCOPE({
        this->content = content;
        // SOCKS
        socksAuthCombo->setCurrentText(content.value(QStringLiteral("auth")).toString());
        socksUDPCB->setChecked(content.value(QStringLiteral("udp")).toBool(false));
        socksUDPIPAddrTxt->setText(content.value(QStringLiteral("ip")).toString(QString()));

        QJsonArray accounts = content.value(QStringLiteral("accounts")).toArray();
        for (const auto &userValue : std::as_const(accounts))
        {
            if (userValue.isObject())
            {
                QJsonObject user = userValue.toObject();
                QString username = user.value(QStringLiteral("user")).toString();
                QString password = user.value(QStringLiteral("pass")).toString();
                socksAccountListBox->addItem(username + ":" + password);
            }
        }
    })
}

void SocksInboundEditor::on_socksRemoveUserBtn_clicked()
{
    PLUGIN_EDITOR_LOADING_GUARD
    if (socksAccountListBox->currentRow() != -1)
    {
        auto item = socksAccountListBox->currentItem();
        auto list = content.value(QStringLiteral("accounts")).toArray();

        for (int i = 0; i < list.count(); i++)
        {
            auto user = list[i].toObject();
            auto entry = user["user"].toString() + ":" + user["pass"].toString();

            if (entry == item->text().trimmed())
            {
                list.removeAt(i);
                content.insert(QStringLiteral("accounts"), list);
                socksAccountListBox->takeItem(socksAccountListBox->currentRow());
                return;
            }
        }
    }
    else
    {
        emit InternalProtocolSupportPluginInstance->PluginErrorMessageBox(tr("Removing a user"), tr("You haven't selected a user yet."));
    }
}

void SocksInboundEditor::on_socksAddUserBtn_clicked()
{
    PLUGIN_EDITOR_LOADING_GUARD
    auto user = socksAddUserTxt->text();
    auto pass = socksAddPasswordTxt->text();
    //
    auto list = content.value(QStringLiteral("accounts")).toArray();

    for (int i = 0; i < list.count(); i++)
    {
        auto _user = list[i].toObject();

        if (_user["user"].toString() == user)
        {
            emit InternalProtocolSupportPluginInstance->PluginErrorMessageBox(tr("Add a user"), tr("This user exists already."));
            return;
        }
    }

    socksAddUserTxt->clear();
    socksAddPasswordTxt->clear();
    QJsonObject entry;
    entry["user"] = user;
    entry["pass"] = pass;
    list.append(entry);
    socksAccountListBox->addItem(user + ":" + pass);
    content.insert(QStringLiteral("accounts"), list);
}

void SocksInboundEditor::on_socksUDPCB_stateChanged(int arg1)
{
    PLUGIN_EDITOR_LOADING_GUARD
    content.insert(QStringLiteral("udp"), arg1 == Qt::Checked);
}

void SocksInboundEditor::on_socksUDPIPAddrTxt_textEdited(const QString &arg1)
{
    PLUGIN_EDITOR_LOADING_GUARD
    content.insert(QStringLiteral("ip"), arg1);
}

void SocksInboundEditor::on_socksAuthCombo_currentIndexChanged(int arg1)
{
    PLUGIN_EDITOR_LOADING_GUARD
    content.insert(QStringLiteral("auth"), socksAuthCombo->itemText(arg1).toLower());
}
