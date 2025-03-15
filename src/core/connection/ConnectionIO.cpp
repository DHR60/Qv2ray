#include "ConnectionIO.h"

#include "Serialization.h"
#include "utils/QvHelpers.h"

namespace Qv2ray::core::connection::connectionIO
{
CONFIGROOT ConvertConfigFromFile(const QString &sourceFilePath, bool importComplex)
{
    auto root = CONFIGROOT(JsonFromString(StringFromFile(sourceFilePath)));

    if (!importComplex)
    {
        root.remove("inbounds");
        root.remove("routing");
        root.remove("dns");
    }

    root.remove("log");
    root.remove("api");
    root.remove("stats");
    return root;
}
} // namespace Qv2ray::core::connection::connectionIO
