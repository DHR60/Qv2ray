进行中：
1. 基于反射生成对应的 JSON 数据
   - [x] step1: 基于反射生成对应的 JSON 数据
   - [ ] step2: 使用 `XConfigGen` 替代原有的 `Qv2ray::base::objects` ~~虽然乍一看 `Qv2ray::base::objects` 的实现也不算差，不过使用了使用了大量的宏，并且缺少注释~~

p1：

- [ ] 使用 `XConfigGen` 替代原有的 `Qv2ray::base::objects`
- [x] 使用 ~~`zxing-cpp`~~ (稍微有点过大了，源码约200m，还包含条形码，rMQR 和 DataMatrix 等) `Qt-QrCodeGenerator` 替代 `qt-qrcode`
    * 原因：
        1. `qt-qrcode` 最后一次更新是 12 年前
        2. 其依赖 `libqrencode` 最后一次更新是 5 年前
        3. 最近一次 commit 动了 3rdparty，无法正常生成二维码，但是不报错
- [x] 移除 libuv 和 uvw 依赖
    * 原因：
        1. libuv 引入了大量的编译警告
        2. uvw 在 v3 版本中进行了重大更改，部分代码迁移困难，且现有代码中 uvw 的使用包含了大量宏和协程，维护成本高
- [x] 基于反射生成对应的 JSON 数据
- [x] 实现 VLESS 和 Trojan 协议的分享链接导出功能
- [x] 切换至 Xray-Core 内核
    * [x] 将 v2ray 替换为 xray
        * API 相关
            * ~~暂时维持现状，不替换 v2ray 的 proto 文件为 xray 的 proto 文件~~
    * [x] 调整配置生成方式，使其兼容 Xray-Core
        - [x] 支持 Shadowsocks (ss) 协议
        - [x] 支持 Vmess + WebSocket (ws) + TLS 协议
        - [x] 支持 Trojan 协议
        - [x] 支持 VLESS 协议

p2：
- [ ] 优化代码质量
- [ ] 类似于 v2rayN 的路由编辑界面，以及类似于 nekoray 的 json 高级路由编辑

p3：
- [ ] 使用 Xray proto gRPC 调用 Xray API
