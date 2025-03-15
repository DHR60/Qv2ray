p1：

- 使用 Xray-Core 内核
    * 替换 v2ray 为 xray
        * api 相关
            * ~~替换 v2ray proto 为 xray proto~~
            * api.proto
                * 参考 v2rayN 使用 /debug/vars 获取速度
            * geosite.proto
                * 不知道用处，研究中。。。
    * 替换配置生成，使其支持 Xray-Core
- 代码质量优化 ~~编译时爆出了 120 多个 warn~~

p2：

p3：
- 根据反射生成对应 json
