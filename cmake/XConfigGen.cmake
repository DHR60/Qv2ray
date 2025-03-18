add_compile_definitions(QS_HAS_JSON)
add_compile_definitions(QSERIALIZER_INCLUDED)

include_directories(3rdparty/XConfigGen)
include_directories(3rdparty/XConfigGen/src)
include_directories(3rdparty/XConfigGen/3rd/QSerializer)

set(XConfigGen_SOURCES
    3rdparty/XConfigGen/src/XConfigGen.h
    3rdparty/XConfigGen/src/XConfigGen.cpp
    3rdparty/XConfigGen/src/models/xray/Xray.h
    3rdparty/XConfigGen/3rd/QSerializer/src/qserializer.h
)
