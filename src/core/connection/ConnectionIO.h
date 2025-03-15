#pragma once
#include "base/Qv2rayBase.h"
namespace Qv2ray::core::connection::connectionIO
{
CONFIGROOT ConvertConfigFromFile(const QString &sourceFilePath, bool importComplex);
} // namespace Qv2ray::core::connection::connectionIO

using namespace Qv2ray::core::connection;
using namespace Qv2ray::core::connection::connectionIO;
