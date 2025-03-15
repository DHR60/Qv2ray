#pragma once
//
#include <QMap>
#include <QtCore>
#include <algorithm>
#include <ctime>
#include <iostream>
#include <optional>
#include <vector>
// Base support.
#include "base/JsonHelpers.h"
#include "base/Qv2rayFeatures.h"
#include "base/Qv2rayLog.h"
// Code Models
#include "base/Qv2rayBaseApplication.h"
#include "base/models/CoreObjectModels.h"
#include "base/models/QvConfigIdentifier.h"
#include "base/models/QvRuntimeConfig.h"
#include "base/models/QvSafeType.h"
#include "base/models/QvSettingsObject.h"
#include "base/models/QvStartupConfig.h"

using namespace Qv2ray;
using namespace Qv2ray::base;
using namespace Qv2ray::base::safetype;
using namespace Qv2ray::base::config;
using namespace Qv2ray::base::objects;
using namespace Qv2ray::base::objects::protocol;
using namespace Qv2ray::base::objects::transfer;

#define QV2RAY_BUILD_INFO       QString(_QV2RAY_BUILD_INFO_STR_)
#define QV2RAY_BUILD_EXTRA_INFO QString(_QV2RAY_BUILD_EXTRA_INFO_STR_)

// Base folder suffix.
#ifdef QT_DEBUG
#define QV2RAY_CONFIG_DIR_SUFFIX "_debug/"
#define _BOMB_                   (static_cast<QObject *>(nullptr)->event(nullptr))
#else
#define _BOMB_
#define QV2RAY_CONFIG_DIR_SUFFIX "/"
#endif

#ifdef Q_OS_WIN
#define QV2RAY_EXECUTABLE_SUFFIX ".exe"
#else
#define QV2RAY_EXECUTABLE_SUFFIX ""
#endif

#ifdef Q_OS_WIN
#define QV2RAY_LIBRARY_SUFFIX ".dll"
#else
#define QV2RAY_LIBRARY_SUFFIX ".so"
#endif

// Get Configured Config Dir Path
#define QV2RAY_CONFIG_DIR            (QvCoreApplication->ConfigPath)
#define QV2RAY_CONFIG_FILE           (QV2RAY_CONFIG_DIR + "Qv2ray.conf")
#define QV2RAY_CONNECTIONS_DIR       (QV2RAY_CONFIG_DIR + "connections/")
#define QV2RAY_PLUGIN_SETTINGS_DIR   (QV2RAY_CONFIG_DIR + "plugin_settings/")
#define QV2RAY_CONFIG_FILE_EXTENSION ".qv2ray.json"
#define QV2RAY_GENERATED_DIR         (QV2RAY_CONFIG_DIR + "generated/")

#if !defined(QV2RAY_DEFAULT_VCORE_PATH) && !defined(QV2RAY_DEFAULT_VASSETS_PATH)
#define QV2RAY_DEFAULT_VASSETS_PATH (QV2RAY_CONFIG_DIR + "bin/")
#define QV2RAY_DEFAULT_VCORE_PATH   (QV2RAY_CONFIG_DIR + "bin/xray" QV2RAY_EXECUTABLE_SUFFIX)
#elif defined(QV2RAY_DEFAULT_VCORE_PATH) && defined(QV2RAY_DEFAULT_VASSETS_PATH)
// ---- Using user-specified VCore and VAssets path
#else // !defined(QV2RAY_DEFAULT_VCORE_PATH) && !defined(QV2RAY_DEFAULT_VASSETS_PATH)
#error Both QV2RAY_DEFAULT_VCORE_PATH and QV2RAY_DEFAULT_VASSETS_PATH need to be presented when using manually specify the paths.
#endif // !defined(QV2RAY_DEFAULT_VCORE_PATH) && !defined(QV2RAY_DEFAULT_VASSETS_PATH)

#define QSTRN(num)                 QString::number(num)

#define OUTBOUND_TAG_BLACKHOLE     "BLACKHOLE"
#define OUTBOUND_TAG_DIRECT        "DIRECT"
#define OUTBOUND_TAG_PROXY         "PROXY"
#define OUTBOUND_TAG_FORWARD_PROXY "QV2RAY_FORWARD_PROXY"

#define API_TAG_DEFAULT            "QV2RAY_API"
#define API_TAG_INBOUND            "QV2RAY_API_INBOUND"

#define QV2RAY_USE_FPROXY_KEY      "_QV2RAY_USE_GLOBAL_FORWARD_PROXY_"
