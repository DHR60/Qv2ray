set(QV2RAY_QWIDGETS_UI_BASEDIR ${CMAKE_SOURCE_DIR}/src/ui/widgets)
add_definitions(-DQAPPLICATION_CLASS=QApplication)

set(_QV2RAY_UI_FORMS
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/editors/w_OutboundEditor.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/editors/w_InboundEditor.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/editors/w_JsonEditor.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/editors/w_RoutesEditor.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/editors/w_ChainSha256Editor.ui
    #
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/StreamSettingsWidget.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/ConnectionInfoWidget.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/ConnectionItemWidget.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/RouteSettingsMatrix.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/InboundSettingsWidget.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/ConnectionSettingsWidget.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/DnsSettingsWidget.ui
    #
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_GroupManager.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_ImportConfig.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_MainWindow.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_PreferencesWindow.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_PluginManager.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_ScreenShot_Core.ui
    #
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/complex/ChainEditorWidget.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/complex/RoutingEditorWidget.ui
    )

set(_QV2RAY_UI_NODEEDITOR_SOURCES
    # NodeEditor Models
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/NodeBase.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/NodeBase.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/NodeDispatcher.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/NodeDispatcher.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/models/InboundNodeModel.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/models/InboundNodeModel.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/models/OutboundNodeModel.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/models/OutboundNodeModel.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/models/RuleNodeModel.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/models/RuleNodeModel.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/models/ChainOutboundNodeModel.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/models/ChainOutboundNodeModel.h
    # NodeEditor Widgets
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/widgets/RuleWidget.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/widgets/RuleWidget.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/widgets/RuleWidget.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/widgets/InboundOutboundWidget.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/widgets/InboundOutboundWidget.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/widgets/InboundOutboundWidget.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/widgets/ChainWidget.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/widgets/ChainWidget.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/widgets/ChainWidget.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/widgets/BalancerWidget.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/widgets/BalancerWidget.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/widgets/BalancerWidget.ui
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/widgets/ChainOutboundWidget.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/widgets/ChainOutboundWidget.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/node/widgets/ChainOutboundWidget.ui
    )

set(_QV2RAY_UI_SOURCES
    # Style Manager
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/Qv2rayWidgetApplication.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/Qv2rayWidgetApplication.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/common/WidgetUIBase.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/common/QJsonModel.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/common/QJsonModel.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/styles/StyleManager.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/styles/StyleManager.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/styles/StyleManager.h
    # Models
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/models/ConnectionModelHelper.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/models/ConnectionModelHelper.h
    # UI Widgets
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/ConnectionInfoWidget.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/ConnectionInfoWidget.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/QvAutoCompleteTextEdit.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/QvAutoCompleteTextEdit.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/RouteSettingsMatrix.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/RouteSettingsMatrix.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/ConnectionSettingsWidget.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/ConnectionSettingsWidget.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/ConnectionItemWidget.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/ConnectionItemWidget.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/StreamSettingsWidget.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/StreamSettingsWidget.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/InboundSettingsWidget.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/InboundSettingsWidget.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/DnsSettingsWidget.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/DnsSettingsWidget.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/CertificateItemWidget.ui
    # Complex Widgets
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/complex/ChainEditorWidget.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/complex/ChainEditorWidget.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/complex/RoutingEditorWidget.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/widgets/complex/RoutingEditorWidget.h
    # Editors
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/editors/w_InboundEditor.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/editors/w_InboundEditor.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/editors/w_JsonEditor.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/editors/w_JsonEditor.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/editors/w_OutboundEditor.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/editors/w_OutboundEditor.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/editors/w_RoutesEditor.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/editors/w_RoutesEditor.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/editors/w_ChainSha256Editor.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/editors/w_ChainSha256Editor.cpp
    # Windows
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_ImportConfig.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_ImportConfig.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_MainWindow.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_MainWindow.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_MainWindow_extra.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_PreferencesWindow.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_PreferencesWindow.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_PluginManager.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_PluginManager.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_ScreenShot_Core.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_ScreenShot_Core.cpp
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_GroupManager.h
    ${QV2RAY_QWIDGETS_UI_BASEDIR}/windows/w_GroupManager.cpp
    )

set(QV2RAY_UI_WIDGET_SOURCES ${_QV2RAY_UI_FORMS} ${_QV2RAY_UI_SOURCES} ${_QV2RAY_UI_NODEEDITOR_SOURCES})
