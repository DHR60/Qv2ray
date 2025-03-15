#pragma once

#include "ui/common/QvMessageBus.h"
#include "ui_InboundSettingsWidget.h"

class InboundSettingsWidget
    : public QWidget,
      private Ui::InboundSettingsWidget
{
    Q_OBJECT
    QvMessageBusSlotDecl;

public:
    explicit InboundSettingsWidget(QWidget *parent = nullptr);

protected:
    void changeEvent(QEvent *e);
};
