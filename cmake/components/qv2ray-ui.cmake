set(QV2RAY_UI_COMMON_BASEDIR ${CMAKE_SOURCE_DIR}/src/ui/common)
add_definitions(-DQAPPLICATION_CLASS=QApplication)

set(QV2RAY_UI_COMMON_SOURCES
    # Common Utils
    ${QV2RAY_UI_COMMON_BASEDIR}/QRCodeHelper.cpp
    ${QV2RAY_UI_COMMON_BASEDIR}/QRCodeHelper.h
    ${QV2RAY_UI_COMMON_BASEDIR}/autolaunch/QvAutoLaunch.h
    ${QV2RAY_UI_COMMON_BASEDIR}/autolaunch/QvAutoLaunch.cpp
    ${QV2RAY_UI_COMMON_BASEDIR}/LogHighlighter.h
    ${QV2RAY_UI_COMMON_BASEDIR}/LogHighlighter.cpp
    # Message bus
    ${QV2RAY_UI_COMMON_BASEDIR}/QvMessageBus.h
    ${QV2RAY_UI_COMMON_BASEDIR}/QvMessageBus.cpp
    #
    ${QV2RAY_UI_COMMON_BASEDIR}/darkmode/DarkmodeDetector.cpp
    ${QV2RAY_UI_COMMON_BASEDIR}/darkmode/DarkmodeDetector.h
    #
    ${QV2RAY_UI_COMMON_BASEDIR}/speedchart/speedwidget.cpp
    ${QV2RAY_UI_COMMON_BASEDIR}/speedchart/speedwidget.h
    )
