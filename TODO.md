p1：

- 使用 Xray-Core 内核
    * 替换 v2ray 为 xray
        * api 相关
            * ~~替换 v2ray proto 为 xray proto~~
            * api.proto
                * 这部分 xray 与 v2ray 兼容，暂时不用动~~参考 v2rayN 使用 /debug/vars 获取速度~~
            * geosite.proto：从文件中加载预定义的域名和IP列表，这些列表被用于自动完成控件，为用户提供便捷的输入体验。
                * 应该 xray 和 v2ray 这部分是通用的，保留吧。~~目前先删掉吧，没能力搞这个，后面再加上~~
    * 替换配置生成，使其支持 Xray-Core
        - [x] ss
        - [x] vmess + ws + tls
        * 软件不支持：
        - [ ] trojan （报错解析失败）
        - [ ] VLESS （原因：尝试解析vnext）
        * 核心不支持

p2：
- 代码质量优化

p3：
- 使用 xray grpc 调用 api
- 根据反射生成对应 json
