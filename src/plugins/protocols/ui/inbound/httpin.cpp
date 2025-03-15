#include "httpin.h"

#include "BuiltinProtocolPlugin.h"

HTTPInboundEditor::HTTPInboundEditor(QWidget *parent)
    : Qv2rayPlugin::QvPluginEditor(parent)
{
    setupUi(this);
    setProperty("QV2RAY_INTERNAL_HAS_STREAMSETTINGS", true);
}

void HTTPInboundEditor::changeEvent(QEvent *e)
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

void HTTPInboundEditor::SetContent(const QJsonObject &content)
{
    PLUGIN_EDITOR_LOADING_SCOPE({
        this->content = content;                                                                        // HTTP
        httpTimeoutSpinBox->setValue(content.value(QStringLiteral("timeout")).toInt(0));                // 添加默认值 0
        httpTransparentCB->setChecked(content.value(QStringLiteral("allowTransparent")).toBool(false)); // 添加默认值 false
        httpAccountListBox->clear();

        QJsonArray accounts = content.value(QStringLiteral("accounts")).toArray(); // 获取 accounts 数组
        for (const auto &userValue : std::as_const(accounts))
        {
            if (userValue.isObject())
            {
                QJsonObject user = userValue.toObject();
                QString username = user.value(QStringLiteral("user")).toString();
                QString password = user.value(QStringLiteral("pass")).toString();
                httpAccountListBox->addItem(username + ":" + password);
            }
        }
    })
}

void HTTPInboundEditor::on_httpTimeoutSpinBox_valueChanged(int arg1)
{
    PLUGIN_EDITOR_LOADING_GUARD
    content.insert(QStringLiteral("timtout"), arg1);
}

void HTTPInboundEditor::on_httpTransparentCB_stateChanged(int arg1)
{
    PLUGIN_EDITOR_LOADING_GUARD
    content.insert(QStringLiteral("allowTransparent"), arg1 == Qt::Checked);
}

void HTTPInboundEditor::on_httpRemoveUserBtn_clicked()
{
    PLUGIN_EDITOR_LOADING_GUARD
    if (httpAccountListBox->currentRow() < 0)
    {
        emit InternalProtocolSupportPluginInstance->PluginErrorMessageBox(tr("Removing a user"), tr("You haven't selected a user yet."));
        return;
    }
    const auto item = httpAccountListBox->currentItem();
    auto list = content.value(QStringLiteral("accounts")).toArray();

    for (int i = 0; i < list.count(); i++)
    {
        const auto user = list[i].toObject();
        const auto entry = user["user"].toString() + ":" + user["pass"].toString();
        if (entry == item->text().trimmed())
        {
            list.removeAt(i);
            content.insert(QStringLiteral("accounts"), list);
            httpAccountListBox->takeItem(httpAccountListBox->currentRow());
            return;
        }
    }
}

void HTTPInboundEditor::on_httpAddUserBtn_clicked()
{
    PLUGIN_EDITOR_LOADING_GUARD
    const auto user = httpAddUserTxt->text();
    const auto pass = httpAddPasswordTxt->text();
    //
    auto list = content.value(QStringLiteral("accounts")).toArray();

    for (int i = 0; i < list.count(); i++)
    {
        const auto _user = list[i].toObject();
        if (_user["user"].toString() == user)
        {
            emit InternalProtocolSupportPluginInstance->PluginErrorMessageBox(tr("Add a user"), tr("This user exists already."));
            return;
        }
    }

    httpAddUserTxt->clear();
    httpAddPasswordTxt->clear();
    list.append(QJsonObject{
        { "user", user },
        { "pass", pass }
    });
    httpAccountListBox->addItem(user + ":" + pass);
    content.insert(QStringLiteral("accounts"), list);
}
