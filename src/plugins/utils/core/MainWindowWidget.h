#pragma once

#include "QvGUIPluginInterface.h"
#include "ui_MainWindowWidget.h"

class MainWindowWidget
    : public Qv2rayPlugin::QvPluginMainWindowWidget,
      private Ui::MainWindowWidget
{
    Q_OBJECT

public:
    explicit MainWindowWidget(QWidget *parent = nullptr);
    const QList<QMenu *> GetMenus() override
    {
        return {};
    }

protected:
    void changeEvent(QEvent *e) override;
};
