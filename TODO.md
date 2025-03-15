p1：

- 使用 Xray-Core 内核
    * 替换 v2ray 为 xray
        * api 相关
            * ~~替换 v2ray proto 为 xray proto~~
            * api.proto
                * 参考 v2rayN 使用 /debug/vars 获取速度
            * geosite.proto：从文件中加载预定义的域名和IP列表，这些列表被用于自动完成控件，为用户提供便捷的输入体验。
                * ~~目前先删掉吧，没能力搞这个，后面再加上~~
                * 应该 xray 和 v2ray 这部分是通用的，保留吧。
    * 替换配置生成，使其支持 Xray-Core
- 代码质量优化 ~~编译时爆出了 120 多个 warn~~

p2：
- 使用 grpc 调用 api

p3：
- 根据反射生成对应 json
