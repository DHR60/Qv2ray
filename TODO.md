p1：

- [ ] 根据反射生成对应 json
- [ ] VLESS 和 trojan 的分享链接导出

- [x] 使用 Xray-Core 内核
    * [x] 替换 v2ray 为 xray
        * api 相关
            * ~~替换 v2ray proto 为 xray proto~~ 暂时维持现状
    * [x] 替换配置生成，使其支持 Xray-Core
        - [x] ss
        - [x] vmess + ws + tls
        - [x] trojan
        - [x] VLESS

p2：
- [ ] 代码质量优化

p3：
- [ ] 使用 xray grpc 调用 api
