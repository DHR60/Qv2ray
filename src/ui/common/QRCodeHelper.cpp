#include "QRCodeHelper.h"

#include "QrCodeGenerator.h"

#include <QImage>

namespace Qv2ray::ui
{
QString DecodeQRCode(const QImage &)
{
    return "";
}

QImage EncodeQRCode(const QString content, int size)
{
    QrCodeGenerator c;
    return c.generateQr(content, size, 2);
}
} // namespace Qv2ray::ui
