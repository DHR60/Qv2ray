<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_TW" sourcelanguage="en">
<context>
    <name>BalancerWidget</name>
    <message>
        <location filename="../src/ui/widgets/node/widgets/BalancerWidget.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/BalancerWidget.ui" line="23"/>
        <source>Show / Hide</source>
        <translation>顯示/隱藏</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/BalancerWidget.ui" line="34"/>
        <source>Selector</source>
        <translation>選擇器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/BalancerWidget.ui" line="86"/>
        <location filename="../src/ui/widgets/node/widgets/BalancerWidget.ui" line="92"/>
        <source>Strategy</source>
        <translation>策略</translation>
    </message>
</context>
<context>
    <name>CertificateItemWidget</name>
    <message>
        <location filename="../src/ui/widgets/widgets/CertificateItemWidget.ui" line="14"/>
        <source>Certificate Item Editor</source>
        <translation>證書項編輯器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/CertificateItemWidget.ui" line="20"/>
        <source>Usage</source>
        <extracomment>Certificate Usage</extracomment>
        <translation>使用量</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/CertificateItemWidget.ui" line="30"/>
        <source>Usage of certifcate. The default value is &lt;code&gt;encipherment&lt;/code&gt;.

&lt;ul&gt;
&lt;li&gt;&lt;code&gt;encipherment&lt;/code&gt;: Used for TLS authentication and encipherment.&lt;/li&gt;
&lt;li&gt;&lt;code&gt;verify&lt;/code&gt;: Used for verification of remote ceritificate. CA certificates are required.&lt;/li&gt;
&lt;li&gt;&lt;code&gt;issue&lt;/code&gt;: Used to issue other certificates. CA certificates are required.&lt;/li&gt;
&lt;/ul&gt;</source>
        <translation>證書的用途。預設值是 &lt;code&gt;encipherment&lt;/code&gt;。

&lt;ul&gt;
&lt;li&gt;&lt;code&gt;encipherment&lt;/code&gt;: 用於 TLS 身份驗證和加密。 &lt;/li&gt;
&lt;li&gt;&lt;code&gt;verify&lt;/code&gt;: 用於驗證遠程證書。需要CA證書。 &lt;/li&gt;
&lt;li&gt;&lt;code&gt;issue&lt;/code&gt;: 用於簽發其他證書。需要CA證書。 &lt;/li&gt;
&lt;/ul&gt;</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/CertificateItemWidget.ui" line="65"/>
        <source>Certificate</source>
        <extracomment>Certificate Tab</extracomment>
        <translation>證書</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/CertificateItemWidget.ui" line="71"/>
        <location filename="../src/ui/widgets/widgets/CertificateItemWidget.ui" line="135"/>
        <source>From File</source>
        <translation>從檔案</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/CertificateItemWidget.ui" line="74"/>
        <source>Alt+C, Alt+F</source>
        <translation>Alt+C, Alt+F</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/CertificateItemWidget.ui" line="84"/>
        <source>Drag and drop *.crt here...</source>
        <translation>拖拽*.crt 至此處...</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/CertificateItemWidget.ui" line="94"/>
        <location filename="../src/ui/widgets/widgets/CertificateItemWidget.ui" line="158"/>
        <source>Configure Manually</source>
        <translation>手動設定...</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/CertificateItemWidget.ui" line="97"/>
        <source>Alt+C, Alt+M</source>
        <translation>Alt+C, Alt+M</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/CertificateItemWidget.ui" line="129"/>
        <source>Certificate Key</source>
        <extracomment>Tab Certificate Key</extracomment>
        <translation>證書金鑰</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/CertificateItemWidget.ui" line="138"/>
        <source>Alt+K, Alt+F</source>
        <translation>Alt+K, Alt+F</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/CertificateItemWidget.ui" line="161"/>
        <source>Alt+K, Alt+M</source>
        <translation>Alt+K, Alt+M</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/CertificateItemWidget.ui" line="185"/>
        <source>-----BEGIN RSA PRIVATE KEY-----... </source>
        <translation>-----BEGIN RSA PRIVATE KEY-----... </translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/CertificateItemWidget.ui" line="192"/>
        <source>Certificate Key is not necessarily set if usage is set to &lt;code&gt;verify&lt;/code&gt;.</source>
        <translation>若證書用途設為 &lt;code&gt;verify&lt;/code&gt;，則證書金鑰不一定需要設定。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/CertificateItemWidget.ui" line="195"/>
        <source>Unset</source>
        <translation>未設置</translation>
    </message>
</context>
<context>
    <name>ChainEditorWidget</name>
    <message>
        <location filename="../src/ui/widgets/widgets/complex/ChainEditorWidget.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/complex/ChainEditorWidget.cpp" line="115"/>
        <location filename="../src/ui/widgets/widgets/complex/ChainEditorWidget.cpp" line="213"/>
        <source>Chain Editor</source>
        <translation>代理鏈編輯器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/complex/ChainEditorWidget.cpp" line="115"/>
        <source>Could not find outbound tag: %1, The chain may be corrupted</source>
        <translation>無法尋得出站標籤: %1，代理鏈可能已毀損</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/complex/ChainEditorWidget.cpp" line="197"/>
        <source>OK</source>
        <translation>好</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/complex/ChainEditorWidget.cpp" line="213"/>
        <source>Please Select a Chain</source>
        <translation>請選擇代理鏈</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/complex/ChainEditorWidget.cpp" line="200"/>
        <source>There&apos;s an error in your connection.</source>
        <translation>您的連接裏有錯誤。</translation>
    </message>
</context>
<context>
    <name>ChainOutboundWidget</name>
    <message>
        <location filename="../src/ui/widgets/node/widgets/ChainOutboundWidget.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/ChainOutboundWidget.ui" line="42"/>
        <source>Port</source>
        <translation>端口</translation>
    </message>
</context>
<context>
    <name>ChainSha256Editor</name>
    <message>
        <location filename="../src/ui/widgets/editors/w_ChainSha256Editor.ui" line="14"/>
        <source>pinnedPeerCertificateChainSha256 Editor</source>
        <translation>pinnedPeerCerCercatateChainSha256 編輯器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_ChainSha256Editor.cpp" line="33"/>
        <source>Invalid Certificate Hash Chain</source>
        <translation>證書雜湊鏈無效</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_ChainSha256Editor.cpp" line="60"/>
        <source>invalid SHA256: %1</source>
        <translation>無效 SHA256: %1</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_ChainSha256Editor.ui" line="30"/>
        <source>One SHA-256 per line. eg: 50c393f158c3de2db92fa9661bfb00eda5b67c3a777c88524ed3417509631625 6e6ed938298daf79a0173ebca30521a72ab07a9f535bfd6b178e0fc39dff2f4d b635d5701f7b12310fa94fae8040d3fc816a4dc2f0682a14ed4103aae39c0bd6 </source>
        <translation>每行一個 SHA-256 ，例如: 50c393f158c3de2db92fa9661bfb00eda5b67c3a777c88524ed3417509631625 6e6ed938298daf79a0173ebca30521a72ab07a9f535bfd6b178e0fc39dff2f4d b635d5701f7b12310fa94fae8040d3fc816a4dc2f0682a14ed4103aae39c0bd6 </translation>
    </message>
</context>
<context>
    <name>ChainWidget</name>
    <message>
        <location filename="../src/ui/widgets/node/widgets/ChainWidget.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/ChainWidget.ui" line="34"/>
        <source>Chained</source>
        <translation>鏈式</translation>
    </message>
</context>
<context>
    <name>ConnectionInfoWidget</name>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.ui" line="23"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.ui" line="36"/>
        <source>Configuration Details</source>
        <translation>配置詳情</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.ui" line="58"/>
        <source>Connect/Disconnect</source>
        <translation>連接 / 斷開</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.ui" line="72"/>
        <source>Edit Connection</source>
        <translation>編輯連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.ui" line="86"/>
        <source>Edit Connection as JSON</source>
        <translation>將連接編輯為 JSON</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.ui" line="100"/>
        <source>Latency Test</source>
        <translation>測試延遲</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.ui" line="110"/>
        <source>Delete Connection</source>
        <translation>刪除連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.ui" line="153"/>
        <source>Group</source>
        <translation>分組</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.ui" line="182"/>
        <source>Protocol</source>
        <translation>協定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.ui" line="211"/>
        <source>Address</source>
        <translation>位址</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.ui" line="240"/>
        <source>Port</source>
        <translation>端口</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.ui" line="266"/>
        <source>Link</source>
        <translation>連結</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.ui" line="324"/>
        <source>QR Code</source>
        <translation>QR-Code</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.ui" line="375"/>
        <source>Group Name</source>
        <translation>分組名稱</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.ui" line="398"/>
        <source>Subscription Link</source>
        <translation>訂閱連結</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.ui" line="405"/>
        <source>Share Link</source>
        <translation>分享連結</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.cpp" line="118"/>
        <source>Not a subscription</source>
        <translation>不是訂閱</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.cpp" line="171"/>
        <source>Delete an item</source>
        <translation>刪除專案</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.cpp" line="171"/>
        <source>Are you sure to delete the current item?</source>
        <translation>您確定要刪除當前專案嗎？</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/ui/widgets/widgets/ConnectionInfoWidget.cpp" line="113"/>
        <source>(Ignored %n complex config(s))</source>
        <translation>
            <numerusform>（忽略 %n 個複雜配置）</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>ConnectionItemWidget</name>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionItemWidget.cpp" line="33"/>
        <source>Not Tested</source>
        <translation>未測試</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionItemWidget.cpp" line="36"/>
        <location filename="../src/ui/widgets/widgets/ConnectionItemWidget.cpp" line="164"/>
        <source>Error</source>
        <translation>錯誤</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionItemWidget.cpp" line="117"/>
        <source>connection</source>
        <translation>個</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionItemWidget.cpp" line="117"/>
        <source>connections</source>
        <translation>個</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionItemWidget.cpp" line="157"/>
        <source>Testing...</source>
        <translation>正在測試…</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionItemWidget.cpp" line="164"/>
        <source>ms</source>
        <translation>ms</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionItemWidget.cpp" line="208"/>
        <source>Last Connected: </source>
        <translation>上次連接: </translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionItemWidget.cpp" line="209"/>
        <location filename="../src/ui/widgets/widgets/ConnectionItemWidget.cpp" line="222"/>
        <source>Last Updated: </source>
        <translation>最後更新: </translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionItemWidget.cpp" line="221"/>
        <source>Subscription</source>
        <translation>訂閱</translation>
    </message>
</context>
<context>
    <name>ConnectionSettingsWidget</name>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionSettingsWidget.ui" line="16"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
</context>
<context>
    <name>ConnectionWidget</name>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionItemWidget.ui" line="26"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionItemWidget.ui" line="74"/>
        <source>Connection Name</source>
        <translation>連接名稱</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionItemWidget.ui" line="81"/>
        <source>500ms</source>
        <translation>500ms</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionItemWidget.ui" line="112"/>
        <source>0KB / 0KB</source>
        <translation>0KB / 0KB</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionItemWidget.ui" line="137"/>
        <source>OK</source>
        <translation>好</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/ConnectionItemWidget.ui" line="100"/>
        <source>VMESS + WS + TLS</source>
        <translation>VMESS + WS + TLS</translation>
    </message>
</context>
<context>
    <name>DnsSettingsWidget</name>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="22"/>
        <source>Client IP</source>
        <translation>用戶端 IP</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="38"/>
        <source>Tag</source>
        <translation>標籤</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="65"/>
        <source>DNS Servers</source>
        <translation>DNS 伺服器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="73"/>
        <source>DNS List</source>
        <translation>DNS 列表</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="150"/>
        <source>DNS Server Settings</source>
        <translation>DNS 伺服器設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="158"/>
        <source>Address</source>
        <translation>位址</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="170"/>
        <source>Detail Settings</source>
        <translation>詳細設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="179"/>
        <source>Expectd IPs</source>
        <translation>期待 IP</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="189"/>
        <source>Domains</source>
        <translation>網域</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="201"/>
        <source>Port</source>
        <translation>端口</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="237"/>
        <source>Statically Resolved Domains</source>
        <translation>靜態解析網域</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="253"/>
        <source>Domain</source>
        <translation>網域</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="258"/>
        <source>Resolved IP</source>
        <translation>解析 IP</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="29"/>
        <source>The current system&apos;s IP address is used to notify the server of the client&apos;s location when querying DNS. 

It cannot be a private address.</source>
        <translation>當前系統的 IP 位址。用作在查詢 DNS 時提示伺服器用戶端所在的位置。
不能是私有 IP 位址。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="45"/>
        <source>(V2Ray 4.13+) The query traffic sent by this DNS, except for localhost and DOHL modes, will carry this identifier, which can be matched with inboundTag in the route.</source>
        <translation>(V2Ray 4.13+) 除 localhost 和 DoH Local 模式之外，DNS 的查詢流量都會被當作從該入站標籤進入的流量參與路由。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="208"/>
        <source>Port for DNS server. Normally it&apos;s 53.
This entry is ignored by V2Ray core when using DoH servers.</source>
        <translation>DNS 伺服器端口。通常為 53。
當使用 DoH 模式時，此項無效。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="52"/>
        <source>Disable Cache</source>
        <translation>停用快取</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="322"/>
        <source>Query Strategy</source>
        <translation>查詢策略</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="355"/>
        <source>Enabled</source>
        <translation>已啟用</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="348"/>
        <source>Disable Fallback</source>
        <translation>停用回退</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="316"/>
        <source>Miscellaneous</source>
        <translation>雜項</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="362"/>
        <source>Fake DNS IP Pool</source>
        <translation>Fake DNS IP 池</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/DnsSettingsWidget.ui" line="376"/>
        <source>Fake DNS Pool Size</source>
        <translation>Fake DNS IP 池大小</translation>
    </message>
</context>
<context>
    <name>GroupManager</name>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.h" line="79"/>
        <source>Export Connection(s)</source>
        <translation>匯出連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.h" line="80"/>
        <source>Delete Connection(s)</source>
        <translation>刪除連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.h" line="81"/>
        <source>Copy to...</source>
        <translation>複製到...</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.h" line="82"/>
        <source>Move to...</source>
        <translation>移動到...</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.h" line="83"/>
        <source>Link to...</source>
        <translation>連結到...</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.cpp" line="99"/>
        <source>Connection Management</source>
        <translation>連接管理</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.cpp" line="316"/>
        <source>New Group</source>
        <translation>新分組</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.cpp" line="330"/>
        <location filename="../src/ui/widgets/windows/w_GroupManager.cpp" line="335"/>
        <location filename="../src/ui/widgets/windows/w_GroupManager.cpp" line="338"/>
        <source>Update Subscription</source>
        <translation>更新訂閱</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.cpp" line="338"/>
        <source>Would you like to update the subscription?</source>
        <translation>您要更新訂閱嗎？</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.cpp" line="350"/>
        <source>All connections will be moved to default group, do you want to continue?</source>
        <translation>本訂閱中的所有連接都將移動到默認分組，您確定要繼續嗎？</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.cpp" line="330"/>
        <source>The subscription link is empty.</source>
        <translation>訂閱連結為空。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.cpp" line="335"/>
        <source>The subscription link is invalid.</source>
        <translation>訂閱連結無效。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.cpp" line="350"/>
        <source>Remove a Group</source>
        <translation>刪除分組</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.cpp" line="409"/>
        <source>Unknown Subscription Type</source>
        <translation>未知訂閱類型</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.cpp" line="409"/>
        <source>Unknown subscription type &quot;%1&quot;, a plugin may be missing.</source>
        <translation>未知訂閱類型「%1」，或因外掛程式缺失所致。</translation>
    </message>
</context>
<context>
    <name>HTTPInboundEditor</name>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/httpin.cpp" line="64"/>
        <source>Removing a user</source>
        <translation>刪除用戶</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/httpin.cpp" line="64"/>
        <source>You haven&apos;t selected a user yet.</source>
        <translation>您並未選擇任一用戶。</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/httpin.cpp" line="97"/>
        <source>Add a user</source>
        <translation>新增使用者</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/httpin.cpp" line="97"/>
        <source>This user exists already.</source>
        <translation>此用戶已存在。</translation>
    </message>
</context>
<context>
    <name>ImportConfigWindow</name>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="20"/>
        <source>Import file</source>
        <translation>匯入檔案</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="34"/>
        <source>Name/Prefix</source>
        <translation>名稱/前綴</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="41"/>
        <source>A prefix to the imported connection</source>
        <translation>導入連接的名稱前綴</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="48"/>
        <source>Import To Group</source>
        <translation>匯入分組</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="64"/>
        <source>Link</source>
        <translation>連結</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="70"/>
        <source>Share Link</source>
        <translation>分享連結</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="77"/>
        <source>Error List</source>
        <translation>錯誤清單</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="90"/>
        <source>Paste share link here, one line for each.</source>
        <translation>在此粘貼，一行一個。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="101"/>
        <source>QR Code</source>
        <translation>二維碼</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="174"/>
        <source>QRCode File</source>
        <translation>二維碼文件</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="193"/>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="259"/>
        <source>Select</source>
        <translation>選擇</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="107"/>
        <source>Screenshot</source>
        <translation>二維碼截屏</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="116"/>
        <source>Hide Qv2ray</source>
        <translation>隱藏 Qv2ray</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="123"/>
        <source> secs</source>
        <translation> 秒</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="139"/>
        <source>Delay</source>
        <translation>延遲</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="165"/>
        <source>Go</source>
        <translation>開始</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="202"/>
        <source>Detected Link</source>
        <translation>檢測到的連結</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="230"/>
        <source>Advanced</source>
        <translation>高級</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="236"/>
        <source>Manually Input Connections</source>
        <translation>手動輸入連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="243"/>
        <source>Path</source>
        <translation>路徑</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="275"/>
        <source>Json Editor</source>
        <translation>Json 編輯器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="282"/>
        <source>Open JSON Editor</source>
        <translation>打開 Json 編輯器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="311"/>
        <source>Import</source>
        <translation>導入</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="318"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.cpp" line="390"/>
        <source>Select file to import</source>
        <translation>選擇要匯入的檔案</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.cpp" line="183"/>
        <source>Capture QRCode</source>
        <translation>抓取二維碼</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.cpp" line="183"/>
        <source>Cannot find a valid QRCode from this region.</source>
        <translation>無法從這個區域找到有效的二維碼。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.cpp" line="300"/>
        <source>Failed to import connection</source>
        <translation>連接匯入失敗</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.cpp" line="318"/>
        <source>Import config file</source>
        <translation>匯入配置檔案</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.cpp" line="194"/>
        <source>Select an image to import</source>
        <translation>選擇要導入的圖像</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.cpp" line="208"/>
        <source>QRCode scanning failed</source>
        <translation>二維碼掃描失敗</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.cpp" line="208"/>
        <source>Cannot find any QRCode from the image.</source>
        <translation>無法從圖像中找到任何二維碼。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.cpp" line="248"/>
        <source>WARNING: You may have mistaken &apos;subscription link&apos; with &apos;share link&apos;</source>
        <translation>警告：你有可能把「訂閱連結」當成了「分享連結」</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ImportConfig.ui" line="268"/>
        <source>Import as Complex Config</source>
        <translation>導入為複雜配置</translation>
    </message>
</context>
<context>
    <name>InboundEditor</name>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.ui" line="17"/>
        <source>Inbound Editor</source>
        <translation>入站編輯器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.ui" line="30"/>
        <source>Tag</source>
        <translation>標籤</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.ui" line="40"/>
        <source>Tag of this inbound entry</source>
        <translation>此入站條目的標籤</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.ui" line="56"/>
        <source>Hostname or IP Address</source>
        <translation>主機名稱或IP位址</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.ui" line="79"/>
        <source>Protocol</source>
        <translation>協定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.ui" line="162"/>
        <source>Allocation Settings</source>
        <translation>分配設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.ui" line="240"/>
        <source>Strategy</source>
        <translation>策略</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.ui" line="210"/>
        <source>Refresh</source>
        <translation>刷新</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.ui" line="184"/>
        <source>Concurrency</source>
        <translation>併發連接數</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.ui" line="101"/>
        <source>Sniffing Settings</source>
        <translation>篩選設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.cpp" line="148"/>
        <source>Unknown inbound.</source>
        <translation>未知入站。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.cpp" line="149"/>
        <source>The specified inbound type is invalid, this may be caused by a plugin failure.</source>
        <translation>所指明的入站類型無效，或因外掛程式故障導致。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.cpp" line="150"/>
        <source>Please use the JsonEditor or reload the plugin.</source>
        <translation>請使用 JSON 編輯器，或嘗試重載外掛程式。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.ui" line="47"/>
        <source>Address</source>
        <translation>位址</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.ui" line="255"/>
        <source>Inbound Settings</source>
        <translation>入站設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.ui" line="283"/>
        <source>Stream Settings</source>
        <translation>串流設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.ui" line="124"/>
        <source>FakeDNS</source>
        <translation>FakeDNS</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.ui" line="152"/>
        <source>Metadata Only</source>
        <translation>僅限元資料</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.ui" line="110"/>
        <source>FakeDNS-Others</source>
        <translation>FakeDNS-其他</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_InboundEditor.ui" line="131"/>
        <source>Destination Override</source>
        <translation>目標覆蓋</translation>
    </message>
</context>
<context>
    <name>InboundOutboundWidget</name>
    <message>
        <location filename="../src/ui/widgets/node/widgets/InboundOutboundWidget.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/InboundOutboundWidget.cpp" line="32"/>
        <source>External Config</source>
        <translation>外部配置</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/InboundOutboundWidget.cpp" line="66"/>
        <location filename="../src/ui/widgets/node/widgets/InboundOutboundWidget.cpp" line="112"/>
        <source>Edit Outbound</source>
        <translation>編輯出站</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/InboundOutboundWidget.cpp" line="74"/>
        <source>Trying to edit an Complex Config</source>
        <translation>試圖編輯複雜配置</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/InboundOutboundWidget.h" line="32"/>
        <source>You are trying to edit an external connection config, is this what you want?</source>
        <translation>您正試圖編輯一外部連接配置，確定嗎？</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/InboundOutboundWidget.h" line="33"/>
        <source>You have selected an complex config as outbound.</source>
        <translation>您已將複雜配置選爲出站。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/InboundOutboundWidget.h" line="34"/>
        <source>continuing editing this configuration will make you LOSS ALL INBOUND AND ROUTING settings.</source>
        <translation>繼續將導致您失去所有入站及路由設置。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/InboundOutboundWidget.h" line="35"/>
        <source>Is this what you want?</source>
        <translation>您希望如此嗎？</translation>
    </message>
</context>
<context>
    <name>InboundSettingsWidget</name>
    <message>
        <location filename="../src/ui/widgets/widgets/InboundSettingsWidget.ui" line="16"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
</context>
<context>
    <name>JsonEditor</name>
    <message>
        <location filename="../src/ui/widgets/editors/w_JsonEditor.ui" line="17"/>
        <source>JSON Editor</source>
        <translation>JSON 編輯器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_JsonEditor.ui" line="65"/>
        <source>Json Editor</source>
        <translation>Json 編輯器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_JsonEditor.ui" line="51"/>
        <source>Format JSON</source>
        <translation>格式化 JSON</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_JsonEditor.ui" line="58"/>
        <source>Remove All Comments</source>
        <translation>移除所有注釋</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_JsonEditor.ui" line="115"/>
        <source>OK</source>
        <translation>好</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_JsonEditor.cpp" line="23"/>
        <location filename="../src/ui/widgets/editors/w_JsonEditor.cpp" line="50"/>
        <source>Json Contains Syntax Errors</source>
        <translation>JSON 包含語法錯誤</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_JsonEditor.cpp" line="23"/>
        <source>Original Json may contain syntax errors. Json tree is disabled.</source>
        <translation>原 JSON 可能包含語法錯誤，JSON 樹被禁用。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_JsonEditor.cpp" line="50"/>
        <source>You must correct these errors before continuing.</source>
        <translation>您必須先更正這些錯誤才能繼續。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_JsonEditor.cpp" line="100"/>
        <source>Syntax Errors</source>
        <translation>語法錯誤</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_JsonEditor.cpp" line="100"/>
        <source>Please fix the JSON errors or remove the comments before continue</source>
        <translation>請先修復 JSON 錯誤或移除其中的注釋再繼續</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_JsonEditor.ui" line="76"/>
        <source>Structure Preview</source>
        <translation>結構預覽</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="20"/>
        <source>Qv2ray</source>
        <translation>Qv2ray</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="46"/>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="231"/>
        <source>Preferences</source>
        <translation>首選項</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="39"/>
        <source>Plugins</source>
        <translation>外掛程式</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="96"/>
        <source>Locate Current Connection</source>
        <translation>定位到當前連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="83"/>
        <source>Search</source>
        <translation>搜索</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="121"/>
        <source>Sort</source>
        <translation>排序</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="183"/>
        <source>Import Connection</source>
        <translation>匯入連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="193"/>
        <source>New</source>
        <translation>新建</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="289"/>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="358"/>
        <source>Click to toggle show/hide</source>
        <translation>點擊切換顯示/隱藏</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="295"/>
        <source>  Speed Graph</source>
        <translation> 速度圖像</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="305"/>
        <source>Clear chart data</source>
        <translation>清除圖表資料</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="364"/>
        <source>  Log</source>
        <translation>&#xa0; 紀錄檔</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="431"/>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="743"/>
        <source>Not Connected</source>
        <translation>未連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="451"/>
        <source>Speed</source>
        <translation>速度</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="485"/>
        <source>Upload/Download speed</source>
        <translation>上傳/下載速度</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="488"/>
        <source>0.00 B/s
0.00 B/s</source>
        <translation>0.00 B/s
0.00 B/s</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="508"/>
        <source>Data</source>
        <translation>資料</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="542"/>
        <source>Upload/Download Data</source>
        <translation>上傳/下載流量</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="545"/>
        <source>0.00 B
0.00 B</source>
        <translation>0.00 B
0.00 B</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="226"/>
        <source>System Proxy</source>
        <translation>系統代理</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="227"/>
        <source>Recent Connections</source>
        <translation>最近連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="228"/>
        <source>Clear Recent Connections</source>
        <translation>清除最近連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="18"/>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="230"/>
        <source>Hide</source>
        <translation>隱藏</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="232"/>
        <source>Quit</source>
        <translation>退出</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="233"/>
        <source>Connect</source>
        <translation>連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="234"/>
        <source>Reconnect</source>
        <translation>重新連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="235"/>
        <source>Disconnect</source>
        <translation>斷開連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="238"/>
        <source>Enable System Proxy</source>
        <translation>啟用系統代理</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="239"/>
        <source>Disable System Proxy</source>
        <translation>禁用系統代理</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="241"/>
        <source>Connect to this</source>
        <translation>連接到此伺服器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="242"/>
        <source>Set as automatically connected</source>
        <translation>設置為自動連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="247"/>
        <source>Edit</source>
        <translation>編輯</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="243"/>
        <source>Edit as JSON</source>
        <translation>編輯為 JSON</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="245"/>
        <source>Edit as Complex Config</source>
        <translation>編輯為複雜配置</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="246"/>
        <source>Rename</source>
        <translation>重命名</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="248"/>
        <source>Duplicate to the Same Group</source>
        <translation>複製到同組</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="249"/>
        <source>Test Latency</source>
        <translation>測試延遲</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="251"/>
        <source>Clear Usage Data</source>
        <translation>清除統計資料</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="252"/>
        <source>Delete Connection</source>
        <translation>刪除連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="254"/>
        <source>Sort connection list.</source>
        <translation>排序連接列表。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="255"/>
        <source>By connection name, A-Z</source>
        <translation>按名稱，順序</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="256"/>
        <source>By connection name, Z-A</source>
        <translation>按名稱，逆序</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="257"/>
        <source>By latency, Ascending</source>
        <translation>低延遲優先</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="258"/>
        <source>By latency, Descending</source>
        <translation>高延遲優先</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="259"/>
        <source>By data, Ascending</source>
        <translation>低資料使用量優先</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="260"/>
        <source>By data, Descending</source>
        <translation>高資料使用量優先</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="263"/>
        <source>Switch to Qv2ray log</source>
        <translation>切換到 Qv2ray 紀錄</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="161"/>
        <source>Kernel terminated.</source>
        <translation>核心已終止。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="162"/>
        <source>The kernel terminated unexpectedly:</source>
        <translation>核心意外終止：</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="163"/>
        <source>To solve the problem, read the kernel log in the log text browser.</source>
        <translation>要解決問題，請閱讀紀錄視窗中的核心紀錄檔。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="16"/>
        <source>Show</source>
        <translation>顯示</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="511"/>
        <source>Quit Qv2ray</source>
        <translation>退出 Qv2ray</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="511"/>
        <source>Are you sure to exit Qv2ray?</source>
        <translation>確信要退出 Qv2ray 嗎？</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="676"/>
        <source>Removing Connection(s)</source>
        <translation>
            <numerusform>刪除連接</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="677"/>
        <source>Are you sure to remove selected connection(s)?</source>
        <translation>
            <numerusform>您確定要刪除這些連接嗎？</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="738"/>
        <source>Disconnected from: </source>
        <translation>已斷開連接: </translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="765"/>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="767"/>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="768"/>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="847"/>
        <source>Connected: </source>
        <translation>已連接: </translation>
    </message>
    <message numerus="yes">
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="958"/>
        <source>Duplicating Connection(s)</source>
        <translation>
            <numerusform>複製連接</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="959"/>
        <source>Are you sure to duplicate these connection(s)?</source>
        <translation>
            <numerusform>您確定要複製這（些）連接嗎？</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="968"/>
        <source> (Copy)</source>
        <translation> （副本）</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="108"/>
        <source>System proxy configured.</source>
        <translation>系統代理已設置。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="114"/>
        <source>Cannot set system proxy</source>
        <translation>無法設置系統代理</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="114"/>
        <source>Both HTTP and SOCKS inbounds are not enabled</source>
        <translation>HTTP 和 SOCKS 都沒有啟用</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="124"/>
        <source>System proxy removed.</source>
        <translation>系統代理已清除。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="174"/>
        <source>Update Subscriptions</source>
        <translation>更新訂閱</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="1054"/>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="244"/>
        <source>Update Subscription</source>
        <translation>更新訂閱</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="173"/>
        <source>Subscription &quot;%1&quot; has been updated</source>
        <translation>已更新訂閱 &quot;%1&quot;</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="1018"/>
        <source>%1 has been set as auto connect.</source>
        <translation>已將 %1 設置為自動連接。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="1054"/>
        <source>Selected group is not a subscription</source>
        <translation>所選分組不是訂閱</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="175"/>
        <source>Do you want to update these subscriptions?</source>
        <translation>要更新這些訂閱嗎？</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="32"/>
        <source>Groups</source>
        <translation>分組</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="107"/>
        <source>Collapse all groups</source>
        <translation>收起所有分組</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="186"/>
        <source>Import</source>
        <translation>匯入</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="200"/>
        <source>New Complex</source>
        <translation>新複雜配置</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="234"/>
        <source>Recent Connection list cleared.</source>
        <translation>已清除最近已使用連接列表。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="1140"/>
        <source>Copy latest logs</source>
        <translation>複製最近的紀錄檔</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="1140"/>
        <source>Number of lines of logs to copy</source>
        <translation>要複製的紀錄檔行數</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="250"/>
        <source>Test Real Latency</source>
        <translation>測試真實延遲</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="262"/>
        <source>Switch to Core log</source>
        <translation>轉至核心紀錄檔</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="265"/>
        <source>Copy graph as image.</source>
        <translation>複製圖表圖像</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="266"/>
        <source>Copy latest logs.</source>
        <translation>複製近期紀錄檔。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="669"/>
        <source>Do you want to remove this group as well?</source>
        <translation>您要同時移除此群組嗎？</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="669"/>
        <source>Group: </source>
        <translation>群組：</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.cpp" line="670"/>
        <source>Removing Connection</source>
        <translation>刪除連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="267"/>
        <source>Copy selected.</source>
        <translation>复制所选项</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="225"/>
        <source>Bypass CN Mainland</source>
        <translation>繞過中國大陸</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="236"/>
        <source>Enable Bypassing CN Mainland</source>
        <translation>啟用繞過中國大陸</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow_extra.cpp" line="237"/>
        <source>Disable Bypassing CN Mainland</source>
        <translation>停用繞過中國大陸</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_MainWindow.ui" line="374"/>
        <source>Clear log</source>
        <translation>清除紀錄檔</translation>
    </message>
</context>
<context>
    <name>MainWindowForm.ui</name>
    <message>
        <source>Qv2ray</source>
        <translation type="vanished">Qv2ray</translation>
    </message>
</context>
<context>
    <name>MainWindowWidget</name>
    <message>
        <source>Qv2ray Utilities</source>
        <translation type="vanished">Qv2ray 工具</translation>
    </message>
</context>
<context>
    <name>OutboundEditor</name>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.ui" line="26"/>
        <source>Edit Connection Settings</source>
        <translation>編輯連接設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.ui" line="35"/>
        <source>Stream Settings</source>
        <translation>串流設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.ui" line="66"/>
        <source>Tag</source>
        <translation>標籤</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.ui" line="73"/>
        <source>Tag of this outbound setting</source>
        <translation>此出站設定的標籤</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.ui" line="80"/>
        <source>Type</source>
        <translation>類型</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.ui" line="99"/>
        <source>Host</source>
        <translation>主機</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.ui" line="106"/>
        <source>Hostname or IP/IPv6 Address</source>
        <translation>主機名稱或 IP/IPv6 位址</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.ui" line="113"/>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.ui" line="123"/>
        <source>Port</source>
        <translation>端口</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.ui" line="134"/>
        <source>Misc Settings</source>
        <translation>其他</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.ui" line="140"/>
        <source>Use Mux</source>
        <translation>使用 Mux</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.ui" line="147"/>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.ui" line="174"/>
        <source>Enabled</source>
        <translation>已啟用</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.ui" line="154"/>
        <source>Mux Concurrency</source>
        <translation>Mux 併發</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.ui" line="181"/>
        <source>Use Forward Proxy</source>
        <translation>使用前置代理</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.ui" line="193"/>
        <source>Outbound Settings</source>
        <translation>出站設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.cpp" line="107"/>
        <source>Unknown outbound type.</source>
        <translation>未知的出站類型。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.cpp" line="108"/>
        <source>The specified outbound type is not supported, this may happen due to a plugin failure.</source>
        <translation>指定的出站類型不受支援，可能是外掛程式問題。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.cpp" line="204"/>
        <source>Forward proxy has been disabled when using plugin outbound</source>
        <translation>使用外掛程式出站時，前置代理已被禁用</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.cpp" line="149"/>
        <source>Unknown outbound.</source>
        <translation>未知出站。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.cpp" line="150"/>
        <source>The specified outbound type is invalid, this may be caused by a plugin failure.</source>
        <translation>指定的出站類型無效，可能是外掛程式問題。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_OutboundEditor.cpp" line="151"/>
        <source>Please use the JsonEditor or reload the plugin.</source>
        <translation>請使用 JSON 編輯器或重載對應外掛程式。</translation>
    </message>
</context>
<context>
    <name>PluginInboundEditor</name>
    <message>
        <source>Form</source>
        <translation type="vanished">視窗</translation>
    </message>
</context>
<context>
    <name>PluginManageWindow</name>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.cpp" line="53"/>
        <location filename="../src/ui/widgets/windows/w_PluginManager.cpp" line="92"/>
        <location filename="../src/ui/widgets/windows/w_PluginManager.cpp" line="140"/>
        <source>Loaded</source>
        <translation>已載入</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.cpp" line="53"/>
        <location filename="../src/ui/widgets/windows/w_PluginManager.cpp" line="92"/>
        <location filename="../src/ui/widgets/windows/w_PluginManager.cpp" line="140"/>
        <source>Not loaded</source>
        <translation>未載入</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.cpp" line="98"/>
        <source>Plugin Not Loaded</source>
        <translation>外掛程式未載入</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.cpp" line="117"/>
        <source>Plugin does not have settings widget.</source>
        <translation>該外掛程式不包含設定 Widget。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.cpp" line="150"/>
        <source>Plugin not loaded</source>
        <translation>外掛程式未載入</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.cpp" line="150"/>
        <source>This plugin is not loaded, please enable or reload the plugin to continue.</source>
        <translation>外掛程式未載入，請啟用或重載此外掛程式。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.cpp" line="122"/>
        <source>None</source>
        <translation>無</translation>
    </message>
</context>
<context>
    <name>PluginOutboundEditor</name>
    <message>
        <source>Form</source>
        <translation type="vanished">視窗</translation>
    </message>
</context>
<context>
    <name>PluginSettingsWidget</name>
    <message>
        <location filename="../src/plugins/protocols/ui/PluginSettingsWidget.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
</context>
<context>
    <name>PreferencesWindow</name>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="17"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="403"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="407"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="411"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="415"/>
        <source>Preferences</source>
        <translation>首選項</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="40"/>
        <source>General Settings</source>
        <translation>通用</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="48"/>
        <source>Appearance</source>
        <translation>外觀</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="vanished">已啟用</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="80"/>
        <source>UI Theme</source>
        <translation>介面主題</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="100"/>
        <source>Language</source>
        <translation>語言</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="152"/>
        <source>Maximum log lines</source>
        <translation>紀錄最大行數</translation>
    </message>
    <message>
        <source> lines</source>
        <translation type="vanished"> 行</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="126"/>
        <source>Recent Jumplist</source>
        <translation>最近列表</translation>
    </message>
    <message>
        <source> Connections</source>
        <translation type="vanished"> 個</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="200"/>
        <source>Behavior</source>
        <translation>行為</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="206"/>
        <source>Launch at Login</source>
        <translation>登入時啟動</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="260"/>
        <source>Auto Connect</source>
        <translation>自動連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="275"/>
        <source>Config</source>
        <translation>配置</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="295"/>
        <source>Group</source>
        <translation>分組</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="307"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="470"/>
        <source>None</source>
        <translation>不使用</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="314"/>
        <source>Last Connected</source>
        <translation>記憶上次的連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="321"/>
        <source>Fixed</source>
        <translation>固定連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="219"/>
        <source>Quiet Mode</source>
        <translation>安靜模式</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="136"/>
        <source>Connections</source>
        <translation type="unfinished">連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="171"/>
        <source>lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="345"/>
        <source>Network Settings</source>
        <translation>網路設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="356"/>
        <source>These settings are used by Qv2ray itself.
For example, for updating subscriptions.</source>
        <translation>這些設定是針對 Qv2ray 本身的。
例如，用在更新訂閱時。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="367"/>
        <source>User-Agent</source>
        <translation>User Agent</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="408"/>
        <source>Latency Test Method</source>
        <translation>延遲測試方案</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="420"/>
        <source>TCPing</source>
        <translation>TCPing</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="430"/>
        <source>ICMPing</source>
        <translation>ICMPing</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="456"/>
        <source>Qv2ray Proxy</source>
        <translation>Qv2ray 代理</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="480"/>
        <source>System Proxy</source>
        <translation>使用系統代理</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="490"/>
        <source>Custom Proxy</source>
        <translation>使用自訂代理</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="502"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1843"/>
        <source>Type</source>
        <translation>類型</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="526"/>
        <source>Server</source>
        <translation>伺服器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="541"/>
        <source>:</source>
        <translation>:</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="571"/>
        <source>Advanced Behavior</source>
        <translation>高級行為</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="654"/>
        <source>Kernel Settings</source>
        <translation>內核設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="666"/>
        <source>Log Level</source>
        <translation>日誌等級</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="689"/>
        <source>none</source>
        <translation>不使用</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="694"/>
        <source>debug</source>
        <translation>調試</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="699"/>
        <source>info</source>
        <translation>信息</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="704"/>
        <source>warning</source>
        <translation>警告</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="709"/>
        <source>error</source>
        <translation>錯誤</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="736"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="760"/>
        <source>Select</source>
        <translation>選擇</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="832"/>
        <source>Currently:
- vmess/shadowsocks/vless/trojan/socks/http will be treated as PROXY.
- freedom will be treated as DIRECT
- blackhole will be treated as BLOCK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="855"/>
        <source>Plugin Kernel Settings</source>
        <translation>外掛程式內核設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="881"/>
        <source>If not checked, these features will be disabled:

Advanced Routing Settings
Bypass CN websites and IPs
Direct connection of Local LAN addresses
Custom DNS Settings</source>
        <translation>若不勾選此選項，外掛程式的下列功能將被禁用：

高級路由設定
繞過中國大陸
本地位址直連
自訂 DNS 設置</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="893"/>
        <source>Qv2ray will allocate ports, for HTTP and SOCKS respectively, if enabled, for each kernel plugin.</source>
        <translation>如果啟用，Qv2ray 將為每個內核外掛程式分配通訊埠，分別用於 HTTP 和 SOCKS。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="903"/>
        <source>Port Allocation Start</source>
        <translation>端口分配起始值</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="953"/>
        <source>Inbound Settings</source>
        <translation>入站設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="979"/>
        <source>Listening Address</source>
        <translation>監聽位址</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="989"/>
        <source>IPv4 address, e.g. &apos;127.0.0.1&apos; or IPv6 address, e.g. ::1</source>
        <translation>IPv4 位址，例如 127.0.0.1；或 IPv6 位址，例如 ::1</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="996"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1006"/>
        <source>Set System Proxy</source>
        <translation>設置系統代理</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1279"/>
        <source>SOCKS Settings</source>
        <translation>SOCKS 設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1038"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1291"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1498"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1880"/>
        <source>Port</source>
        <translation>端口</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1314"/>
        <source>UDP Support</source>
        <translation>支援 UDP</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1327"/>
        <source>UDP Local IP</source>
        <translation>UDP 本地IP</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1344"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1521"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1903"/>
        <source>Authentication</source>
        <translation>身份驗證</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1357"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1534"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1916"/>
        <source>Username</source>
        <translation>用戶名</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1374"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1551"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1929"/>
        <source>Password</source>
        <translation>密碼</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1242"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1391"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1568"/>
        <source>Sniffing</source>
        <translation>嗅探</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1486"/>
        <source>HTTP Settings</source>
        <translation>HTTP 設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1031"/>
        <source>IPv4 address, e.g. &apos;127.0.0.1&apos;</source>
        <translation>IPv4 位址，例如 127.0.0.1</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1060"/>
        <source>Network Options</source>
        <translation>網路選項</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1072"/>
        <source>TCP</source>
        <translation>TCP</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1079"/>
        <source>UDP</source>
        <translation>UDP</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1805"/>
        <source>DNS Intercept</source>
        <translation>DNS 攔截</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1156"/>
        <source>Mode</source>
        <translation>模式</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1186"/>
        <source>Outbound Mark</source>
        <translation>出站 Mark</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1209"/>
        <source>Listening IPv4 Address</source>
        <translation>IPv4 監聽位址</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1219"/>
        <source>Listening IPv6 Address</source>
        <translation>IPv6 監聽位址</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1235"/>
        <source>IPv6 address, e.g. ::1. Leave blank will disable ipv6.</source>
        <translation>IPv6 位址，例如 ::1。留空會禁用 IPv6 透明代理。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1731"/>
        <source>Connection Settings</source>
        <translation>連接設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1737"/>
        <source>General Connection Settings</source>
        <translation>常規連接設置</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1766"/>
        <source>Bypass CN Mainland</source>
        <translation>繞過中國大陸</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1779"/>
        <source>Bypass Bittorrent Protocol</source>
        <translation>繞過 BitTorrent 協定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1946"/>
        <source>DNS Settings</source>
        <translation>DNS 設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1821"/>
        <source>Forward Proxy</source>
        <translation>前置代理</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1833"/>
        <source>Only simple config is supported.</source>
        <translation>只支援簡單配置。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1867"/>
        <source>Host Address</source>
        <translation>主機位址</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1963"/>
        <source>Advanced Route Settings</source>
        <translation>進階路由設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1983"/>
        <source>About</source>
        <translation>關於</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="2056"/>
        <source>Ignored Version</source>
        <translation>忽略版本</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="2073"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="2080"/>
        <source>Update Channel</source>
        <translation>更新通道</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="2091"/>
        <source>Stable Release</source>
        <translation>穩定通道</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="2096"/>
        <source>Testing</source>
        <translation>測試通道</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="2116"/>
        <source>Qv2ray</source>
        <translation>Qv2ray</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="2133"/>
        <source>Version:</source>
        <translation>版本：</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="2283"/>
        <source>Plugin Interface</source>
        <translation>外掛程式介面</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="2263"/>
        <source>Extra Build Info</source>
        <translation>額外編譯資訊</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="2273"/>
        <source>Built Time</source>
        <translation>構建時間</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="2178"/>
        <source>Build Info</source>
        <translation>編譯資訊</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="2223"/>
        <source>Official Repo</source>
        <translation>官方倉庫</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="2329"/>
        <source>License</source>
        <translation>許可證</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="2360"/>
        <source>About Qt</source>
        <translation>關於 Qt</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="114"/>
        <source>Version: %1</source>
        <translation>版本：%1</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="281"/>
        <source>Update is disabled by your vendor.</source>
        <translation>自動更新已被供應者禁用。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="403"/>
        <source>Duplicated port numbers detected, please check the port number settings.</source>
        <translation>檢測到重複的端口號，請檢查端口號設定。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="407"/>
        <source>Invalid inbound listening address.</source>
        <translation>入站監聽位址不可用。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="362"/>
        <source>Invalid tproxy listening ipv6 address.</source>
        <translation>無效的透明代理 IPv6 監聽位址。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="558"/>
        <source>Open Xray assets folder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="569"/>
        <source>Open Xray core file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="606"/>
        <source>Note</source>
        <translation>注意</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="607"/>
        <source>To recognize the protocol of a connection, one must enable sniffing option in inbound proxy.</source>
        <translation>要識別網路連接的協定，必須要啟用入站代理中的嗅探選項。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="608"/>
        <source>tproxy inbound&apos;s sniffing is enabled by default.</source>
        <translation>tProxy 入站的嗅探選項預設開啟。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="725"/>
        <source>Start with boot</source>
        <translation>開機啟動</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="725"/>
        <source>Failed to set auto start option.</source>
        <translation>無法設置自動啟動選項。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="792"/>
        <source>You may be about to set Xray core incorrectly to Qv2ray itself, which is absolutely not correct.<byte value="xd"/>
This won&apos;t trigger a fork bomb, however, since Qv2ray works in singleton mode.<byte value="xd"/>
If your Xray core filename happened to be &apos;qv2ray&apos;-something, you are totally free to ignore this warning.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="801"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="816"/>
        <source>Xray Core Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="806"/>
        <source>This does not seem like an output from Xray Core.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="810"/>
        <source>&apos;Xray Core&apos; Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="815"/>
        <source>Xray path configuration check passed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="815"/>
        <source>Current version of Xray is: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="915"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="925"/>
        <source>Dangerous Operation</source>
        <translation>危險操作</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="915"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="925"/>
        <source>This will (probably) make it easy to fingerprint your connection.</source>
        <translation>這將讓 GFW 更容易識別出您的連接。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="1145"/>
        <source>NTP Checker</source>
        <translation>網路時間檢查器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="1146"/>
        <source>Check date and time from server:</source>
        <translation>從NTP伺服器檢查日期與時間：</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="1160"/>
        <source>Your time offset is %1 seconds, which is too high.</source>
        <translation>你的時間偏差為 %1 秒，太高了。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="1162"/>
        <source>Time Inaccurate</source>
        <translation>時間不准</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="1166"/>
        <source>Your time offset is %1 seconds, which is a little high.</source>
        <translation>你的時間偏差為 %1 秒，有點高。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="1168"/>
        <source>Time Somewhat Inaccurate</source>
        <translation>時間略有偏差</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="1172"/>
        <source>Your time offset is %1 seconds, which looks good.</source>
        <translation>你的時間偏差為 %1 秒，沒有問題。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="1174"/>
        <source>Time Accurate</source>
        <translation>時間準確</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="1182"/>
        <source>Failed to lookup server: %1</source>
        <translation>無法查找伺服器：%1</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1952"/>
        <source>You can configure default DNS settings for all simple connection config here.</source>
        <translation>你可在此為所有簡單連接配置 DNS 設定。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1972"/>
        <source>You can configure default routing rules for all simple connection config here.</source>
        <translation>你可在此為所有簡單連接配置預設路由規則。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="415"/>
        <source>Invalid DNS settings.</source>
        <translation>無效的 DNS 設定。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="586"/>
        <source>These settings may be useful.
But could damage your server if improperly used.</source>
        <translation>此處的設定可能很有用。
但若使用不當，將會造成不良後果。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="795"/>
        <source>Watch Out!</source>
        <translation>小心！</translation>
    </message>
    <message>
        <source>You may be about to set V2Ray core incorrectly to Qv2ray itself, which is absolutely not correct.<byte value="xd"/>
This won&apos;t trigger a fork bomb, however, since Qv2ray works in singleton mode.<byte value="xd"/>
If your V2Ray core filename happened to be &apos;qv2ray&apos;-something, you are totally free to ignore this warning.</source>
        <translation type="vanished">您或許要將 V2Ray 的可執行檔錯誤地設置成 Qv2ray 本身了，這是非常不對的。
然而，這樣做並不會觸發 Fork 炸彈，因為 Qv2ray 以單例模式工作。
若你的 V2Ray 核心檔案名恰好是 &apos;qv2ray&apos; 什麼的，你完全可以忽略這個警告。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="776"/>
        <source>Check System Date and Time from the Internet</source>
        <translation>聯網對時</translation>
    </message>
    <message>
        <source>Currently:
- vmess/shadowsocks/socks/http will be treated as PROXY.
- freedom will be treated as DIRECT
- blackhole will be treated as BLOCK</source>
        <translation type="vanished">當前：
- VMess/Shadowsocks/SOCKS/HTTP 將被認作代理流量；
- 直連出站（Freedom）將被認作直連流量；
- 黑洞出站（Blackhole）將被認作阻斷流量</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="842"/>
        <source>Include Direct Connection</source>
        <translation>包括直連流量</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="232"/>
        <source>Old Share Link Format</source>
        <translation>舊 VMess 連結格式</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="54"/>
        <source>Adapt Dark Theme</source>
        <translation>適應暗色主題</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="67"/>
        <source>Adapt Dark Tray Theme</source>
        <translation>適應暗色託盤主題</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="660"/>
        <source>V2Ray Core Settings</source>
        <translation>V2Ray 核心設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="717"/>
        <source>V2Ray Core Executable Path</source>
        <translation>V2Ray 核心可執行檔路徑</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="745"/>
        <source>V2Ray Assets Directory</source>
        <translation>V2Ray 資產原始目錄</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="769"/>
        <source>Check V2Ray Core Settings</source>
        <translation>檢查 V2Ray 核心設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="783"/>
        <source>V2Ray API Subsystem</source>
        <translation>V2Ray API 子系統</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="796"/>
        <source>V2Ray API Port</source>
        <translation>V2Ray API 端口</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="825"/>
        <source>Outbound Statistics (V2Ray Core v4.26+)</source>
        <translation>分出站統計 (V2Ray v4.26+)</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="861"/>
        <source>Enabling V2Ray Integration will allow the kernel benefit from the V2Ray routing engine.</source>
        <translation>啟用 V2Ray 外掛程式集成將允許核心受益於 V2Ray 的路由引擎。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="871"/>
        <source>V2Ray Integration</source>
        <translation>V2Ray 集成</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="926"/>
        <source>Only V2Ray Core v4.21+ is supported.</source>
        <translation>僅支援 V2Ray v4.21+。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1792"/>
        <source>Use V2Ray DNS for Direct Connection</source>
        <translation>為直連使用 V2Ray DNS</translation>
    </message>
    <message>
        <source>Open V2Ray assets folder</source>
        <translation type="vanished">打開 V2Ray 資源檔夾</translation>
    </message>
    <message>
        <source>Open V2Ray core file</source>
        <translation type="vanished">打開 V2Ray 核心文件</translation>
    </message>
    <message>
        <source>V2Ray path configuration check passed.</source>
        <translation type="vanished">V2Ray 路徑配置檢查通過。</translation>
    </message>
    <message>
        <source>Current version of V2Ray is: </source>
        <translation type="vanished">V2Ray 當前版本是: </translation>
    </message>
    <message>
        <source>You may be about to set V2Ray core incorrectly to V2Ray Control executable, which is absolutely not correct.<byte value="xd"/>
The filename of V2Ray core is usually &apos;v2ray&apos; or &apos;v2ray.exe&apos;. Make sure to choose it wisely.<byte value="xd"/>
If you insist to proceed, we&apos;re not providing with any support.</source>
        <translation type="vanished">您或許要將 V2Ray 的核心可執行檔錯誤地設置成 V2Ray 控制檔了，這是非常不對的。
V2Ray 核心可執行檔的檔案名通常是 &apos;v2ray&apos; 或者 &apos;v2ray.exe&apos;。確保您作出了正確的選擇。
若您執意繼續，我們將不提供任何支援。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1743"/>
        <source>Force Direct for All Connections</source>
        <translation>所有連接皆直連</translation>
    </message>
    <message>
        <source>&apos;V2Ray Core&apos; Settings</source>
        <translation type="vanished">“V2Ray” 核心設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="442"/>
        <source>RealPing Test URL</source>
        <translation>真實延遲測試連結</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1756"/>
        <source>Bypass Private Addresses</source>
        <translation>略過私有位址</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="451"/>
        <source>You may need to reconnect to apply the settings now.</source>
        <translation>要應用設定，您需要現在重新連接。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="452"/>
        <source>Otherwise they will be applied next time you connect to a server.</source>
        <translation>或者下次連接至伺服器時生效。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="454"/>
        <source>Do you want to reconnect now?</source>
        <translation>要現在重連嗎？</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="455"/>
        <source>Reconnect Required</source>
        <translation>需要重新連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1017"/>
        <source>Dokodemo Door Settings</source>
        <translation>任意門設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="615"/>
        <source>Disable System Root Certificates</source>
        <translation>禁用系統根憑證</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="2026"/>
        <source>Config Directory</source>
        <translation>設定檔目錄</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="2043"/>
        <source>Open Directory</source>
        <translation>開啟目錄</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="625"/>
        <source>Test Latency On Connected</source>
        <translation>連接實測試延遲</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="330"/>
        <source>Start Minimized</source>
        <translation>啟動時最小化</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="187"/>
        <source>Adapt Glyph Tray Icon</source>
        <translation>粒子效果托盤圖示</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1101"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1428"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1605"/>
        <source>Destination Override</source>
        <translation>目標覆蓋</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1113"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1440"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1617"/>
        <source>HTTP</source>
        <translation>HTTP</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1120"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1447"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1624"/>
        <source>TLS</source>
        <translation>TLS</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="1161"/>
        <source>Please synchronize your system to use the VMess protocol.</source>
        <translation>請同步系統時間，否則無法正常使用 VMess協議。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="1167"/>
        <source>VMess protocol may still work, but we suggest you synchronize your clock.</source>
        <translation>VMess協議運作可能不受影響，但我們建議同步時間。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="1173"/>
        <source>VMess protocol may not suffer from time inaccuracy.</source>
        <translation>VMess協議會正常運作。</translation>
    </message>
    <message>
        <source>This does not seem like an output from V2Ray Core.</source>
        <translation type="vanished">這似乎不是來自 V2Ray Core 的輸出。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="808"/>
        <source>Output:</source>
        <translation>輸出：</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="807"/>
        <source>If you are looking for plugins settings, you should go to plugin settings.</source>
        <translation>如果你正在尋找插件設定，你應該去插件設定。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="1184"/>
        <source>No NTP Backend</source>
        <translation>無 NTP 後端</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="1184"/>
        <source>Qv2ray was not built with NTP support.</source>
        <translation>Qv2ray 構建時未開啟 NTP 支援選項。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1254"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1406"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1583"/>
        <source>Metadata Only</source>
        <translation>僅限元資料</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1127"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1454"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1631"/>
        <source>FakeDNS</source>
        <translation>FakeDNS</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.cpp" line="358"/>
        <source>Invalid tproxy listening ipv4 address.</source>
        <translation>無效的透明代理 IPv4 監聽位址。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1666"/>
        <source>Browser Forwarder Settings</source>
        <translation>瀏覽器轉發器設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1678"/>
        <source>Listening Address</source>
        <comment>Listening Address for Browser Forwarder</comment>
        <translation>監聽位址</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1692"/>
        <source>Listening Port</source>
        <comment>Listening Port for Browser Forwarder</comment>
        <translation>監聽端口</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1714"/>
        <source>This applies to Simple Configs with Browser Forwarder on.</source>
        <translation>適用於啟用了瀏覽器轉發器的簡單配置。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="597"/>
        <source>Test Latency Periodically</source>
        <translation>定時測試延遲</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="607"/>
        <source>Run TCPing or ICMPing periodically after connecting to a server.
Qv2ray will give a more accurate latency value if Enabled, but makes it easy to fingerprint the connection.</source>
        <translation>連接到節點之後，對節點進行週期性的延遲監測。
若啟用，Qv2ray 對節點的延遲監測將會更加準確，但這也許會提升您伺服器被暴露的風險。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1134"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1461"/>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="1638"/>
        <source>FakeDNS+Others</source>
        <translation>FakeDNS-其他</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="242"/>
        <source>Click Close Button to Exit</source>
        <translation>點擊關閉按鈕退出程序</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PreferencesWindow.ui" line="252"/>
        <source>Exit instead of minimizing to tray when the close button clicked.
This option may be useful for some desktop environments without tray support.</source>
        <translation>退出程序，而不是在點擊關閉按鈕時最小化到托盤。
此選項可能對某些桌面環境有用，而無需托盤支援。</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/ui/widgets/node/NodeBase.h" line="24"/>
        <source>Out</source>
        <translation>離</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/NodeBase.h" line="25"/>
        <source>In</source>
        <translation>入</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/NodeBase.h" line="26"/>
        <source>Rule</source>
        <translation>規則</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/NodeBase.h" line="27"/>
        <source>Chain</source>
        <translation>代理鏈</translation>
    </message>
    <message>
        <location filename="../src/ui/Qv2rayPlatformApplication.cpp" line="182"/>
        <source>Disable gRPC API subsystem</source>
        <translation>停用 gRPC API 子系統</translation>
    </message>
    <message>
        <location filename="../src/ui/Qv2rayPlatformApplication.cpp" line="183"/>
        <source>Disable plugins feature</source>
        <translation>停用插件功能</translation>
    </message>
    <message>
        <location filename="../src/ui/Qv2rayPlatformApplication.cpp" line="184"/>
        <source>Enable debug output</source>
        <translation>開啟除錯輸出</translation>
    </message>
    <message>
        <location filename="../src/ui/Qv2rayPlatformApplication.cpp" line="185"/>
        <source>Do not automatically connect</source>
        <translation>不要自動連接</translation>
    </message>
    <message>
        <location filename="../src/ui/Qv2rayPlatformApplication.cpp" line="186"/>
        <source>Stop current connection</source>
        <translation>終止當前連線</translation>
    </message>
    <message>
        <location filename="../src/ui/Qv2rayPlatformApplication.cpp" line="187"/>
        <source>Reconnect last connection</source>
        <translation>重新連接上次連接</translation>
    </message>
    <message>
        <location filename="../src/ui/Qv2rayPlatformApplication.cpp" line="188"/>
        <source>Exit Qv2ray</source>
        <translation>退出 Qv2ray</translation>
    </message>
    <message>
        <location filename="../src/ui/Qv2rayPlatformApplication.cpp" line="190"/>
        <source>Qv2ray - A cross-platform Qt frontend for Xray.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Qv2ray - A cross-platform Qt frontend for V2Ray.</source>
        <translation type="vanished">Qv2ray - 跨平台的 V2Ray Qt 前端。</translation>
    </message>
    <message>
        <location filename="../src/components/latency/DNSBase.h" line="49"/>
        <location filename="../src/components/latency/DNSBase.h" line="60"/>
        <source>DNS not resolved</source>
        <translation>無法解析 DNS</translation>
    </message>
    <message>
        <location filename="../src/components/latency/unix/ICMPPing.cpp" line="59"/>
        <source>Socket creation failed</source>
        <translation>插座創建失敗</translation>
    </message>
    <message>
        <location filename="../src/components/latency/unix/ICMPPing.cpp" line="67"/>
        <source>Failed to setup TTL value</source>
        <translation>無法設定 TTL 數值</translation>
    </message>
    <message>
        <location filename="../src/components/latency/unix/ICMPPing.cpp" line="176"/>
        <source>Destination unreachable</source>
        <translation>無法到達目標</translation>
    </message>
    <message>
        <location filename="../src/components/latency/unix/ICMPPing.cpp" line="186"/>
        <source>Timeout</source>
        <translation>超時</translation>
    </message>
    <message>
        <location filename="../src/components/latency/unix/ICMPPing.cpp" line="196"/>
        <source>Unknown error</source>
        <translation>未知錯誤</translation>
    </message>
    <message>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="335"/>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="364"/>
        <source>None</source>
        <translation>無</translation>
    </message>
    <message>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="341"/>
        <source>Settings Widget</source>
        <translation>設定組件</translation>
    </message>
    <message>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="344"/>
        <source>Inbound Editor</source>
        <translation>入站編輯器</translation>
    </message>
    <message>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="347"/>
        <source>Outbound Editor</source>
        <translation>出站編輯器</translation>
    </message>
    <message>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="350"/>
        <source>MainWindow Widget</source>
        <translation>主視窗組件</translation>
    </message>
    <message>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="353"/>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="385"/>
        <source>Unknown type.</source>
        <translation>未知類型</translation>
    </message>
    <message>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="370"/>
        <source>Kernel</source>
        <translation>核心</translation>
    </message>
    <message>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="373"/>
        <source>Outbound Handler/Parser</source>
        <translation>出站處理/分析器</translation>
    </message>
    <message>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="376"/>
        <source>Subscription Adapter</source>
        <translation>訂閱適配器</translation>
    </message>
    <message>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="379"/>
        <source>Event Handler</source>
        <translation>事件處理</translation>
    </message>
    <message>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="382"/>
        <source>GUI Components</source>
        <translation>圖形元件</translation>
    </message>
    <message>
        <location filename="../src/core/connection/Serialization.cpp" line="61"/>
        <source>Unsupported share link format.</source>
        <translation>不支援的分享鏈接格式。</translation>
    </message>
    <message>
        <source>SS URI is too short</source>
        <translation type="vanished">Shadowsocks 分享鏈接過短</translation>
    </message>
    <message>
        <source>Can&apos;t find the colon separator between method and password</source>
        <translation type="vanished">模式和密碼之間缺少冒號</translation>
    </message>
    <message>
        <source>Can&apos;t find the at separator between password and hostname</source>
        <translation type="vanished">密碼和主機名之間缺少分隔符</translation>
    </message>
    <message>
        <source>Can&apos;t find the colon separator between hostname and port</source>
        <translation type="vanished">主機名和端口之間缺少冒號分隔符</translation>
    </message>
    <message>
        <source>Invalid ssd link: json: field %1 must exist</source>
        <translation type="vanished">無效的 ssd 鏈接: json: 字段 %1 必須存在</translation>
    </message>
    <message>
        <source>Invalid ssd link: json: field %1 must be valid port number</source>
        <translation type="vanished">無效的 ssd 鏈接: json: 字段 %1 必須是有效的端口號</translation>
    </message>
    <message>
        <source>Invalid ssd link: json: field %1 must be of type &apos;string&apos;</source>
        <translation type="vanished">無效的 ssd 鏈接: json: 字段 %1 必須是 &apos;字符串&apos; 類型</translation>
    </message>
    <message>
        <source>Invalid ssd link: json: field %1 must be an array</source>
        <translation type="vanished">無效的 ssd 鏈接: json: 字段 %1 必須是一個陣列</translation>
    </message>
    <message>
        <source>Skipping invalid ssd server: server must be an object</source>
        <translation type="vanished">跳過無效的 ssd 服務器：服務器必須是對象</translation>
    </message>
    <message>
        <source>Skipping invalid ssd server: missing required field %1</source>
        <translation type="vanished">跳过无效的 ssd 服务器: 缺少必填字段 %1</translation>
    </message>
    <message>
        <source>Skipping invalid ssd server: field %1 should be of type &apos;string&apos;</source>
        <translation type="vanished">跳過無效的 ssd 服務器: 字段 %1 應該是 &apos;字符串&apos; 類型</translation>
    </message>
    <message>
        <source>Invalid ssd link: should begin with ssd://</source>
        <translation type="vanished">無效的 ssd 鏈接: 應以 ssd:// 開頭</translation>
    </message>
    <message>
        <source>Invalid ssd link: base64 parse failed</source>
        <translation type="vanished">無效的 ssd 鏈接: Base64 解析失敗</translation>
    </message>
    <message>
        <source>Invalid ssd link: json parse failed: </source>
        <translation type="vanished">無效的 ssd 鏈接: JSON 解析失敗: </translation>
    </message>
    <message>
        <source>Invalid ssd link: rc4-md5 encryption is not supported by v2ray-core</source>
        <translation type="vanished">無效的 ssd 鏈接: rc4-md5 加密不被 v2ray-core 支援</translation>
    </message>
    <message>
        <source>VMess string should start with &apos;vmess://&apos;</source>
        <translation type="vanished">VMess 鏈接應以 &apos;vmess://&apos; 開頭</translation>
    </message>
    <message>
        <source>VMess string should be a valid base64 string</source>
        <translation type="vanished">VMess 字符串應該是一個有效的 Base64 字符串</translation>
    </message>
    <message>
        <source>JSON should not be empty</source>
        <translation type="vanished">JSON 不應該為空</translation>
    </message>
    <message>
        <source>vmess:// url is invalid</source>
        <translation type="vanished">無效的 vmess:// 鏈接</translation>
    </message>
    <message>
        <source>Invalid streamSettings protocol: </source>
        <translation type="vanished">無效的流設置協議：</translation>
    </message>
    <message>
        <source>Unknown transport method: </source>
        <translation type="vanished">未知傳輸方式：</translation>
    </message>
    <message>
        <source>(Empty Users)</source>
        <translation type="vanished">(空用戶)</translation>
    </message>
    <message>
        <location filename="../src/core/CoreUtils.cpp" line="31"/>
        <location filename="../src/core/CoreUtils.cpp" line="41"/>
        <location filename="../src/core/CoreUtils.cpp" line="87"/>
        <source>N/A</source>
        <translation>N/A</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/QvKernelABIChecker.cpp" line="42"/>
        <source>core executable file %1 does not exist</source>
        <translation>核心執行文件 %1 不存在</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/QvKernelABIChecker.cpp" line="45"/>
        <source>cannot open core executable file %1 in read-only mode</source>
        <translation>無法以唯讀模式打開核心執行文件 %1</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/QvKernelABIChecker.cpp" line="48"/>
        <source>core executable file %1 is an empty file</source>
        <translation>核心執行文件 %1 為空白檔案</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/QvKernelABIChecker.cpp" line="52"/>
        <source>core executable file %1 is too short to be executed</source>
        <translation>核心執行文件 %1 太短，無法執行</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/QvKernelABIChecker.cpp" line="73"/>
        <source>cannot deduce the type of core executable file %1</source>
        <translation>無法推斷核心執行文件 %1 的類型</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/QvKernelABIChecker.cpp" line="82"/>
        <source>Windows PE executable</source>
        <translation>Windows PE 執行文件</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/QvKernelABIChecker.cpp" line="84"/>
        <source>macOS Mach-O executable</source>
        <translation>macOS Mach-O 執行文件</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/QvKernelABIChecker.cpp" line="86"/>
        <source>ELF x86 executable</source>
        <translation>ELF x86 執行文件</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/QvKernelABIChecker.cpp" line="88"/>
        <source>ELF amd64 executable</source>
        <translation>ELF amd64 執行文件</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/QvKernelABIChecker.cpp" line="90"/>
        <source>ELF arm64 executable</source>
        <translation>ELF arm64 執行文件</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/QvKernelABIChecker.cpp" line="92"/>
        <source>ELF arm executable</source>
        <translation>ELF arm 執行文件</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/QvKernelABIChecker.cpp" line="94"/>
        <source>other ELF executable</source>
        <translation>其他 ELF 執行文件</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/QvKernelABIChecker.cpp" line="96"/>
        <source>trusted abi</source>
        <translation>可信任的 abi</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/QvKernelABIChecker.cpp" line="98"/>
        <source>unknown abi</source>
        <translation>未知的 abi</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsBackend.cpp" line="180"/>
        <source>Cannot Start Qv2ray</source>
        <translation>無法啟動 Qv2ray</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsBackend.cpp" line="181"/>
        <source>Cannot find a place to store config files.</source>
        <translation>找不到保存配置文件的地方。</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsBackend.cpp" line="182"/>
        <source>Qv2ray has searched these paths below:</source>
        <translation>Qv2ray 搜索了以下路徑：</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsBackend.cpp" line="184"/>
        <source>It usually means you don&apos;t have the write permission to all of those locations.</source>
        <translation>這通常意味著你對所有這些地方都沒有寫入權限。</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsBackend.cpp" line="185"/>
        <location filename="../src/core/settings/SettingsBackend.cpp" line="210"/>
        <location filename="../src/core/settings/SettingsBackend.cpp" line="250"/>
        <source>Qv2ray will now exit.</source>
        <translation>Qv2ray將會退出</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsBackend.cpp" line="205"/>
        <source>Failed to initialise Qv2ray</source>
        <translation>Qv2ray 初始化失敗</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsBackend.cpp" line="206"/>
        <source>Failed to determine the location of config file:</source>
        <translation>無法確定配置文件的位置：</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsBackend.cpp" line="207"/>
        <source>Qv2ray has found a config file, but it failed to be loaded due to some errors.</source>
        <translation>Qv2ray 找到了一個配置文件，但由於一些錯誤未能加載。</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsBackend.cpp" line="208"/>
        <source>A workaround is to remove the this file and restart Qv2ray:</source>
        <translation>解決方案是移除此文件並重新啟動 Qv2ray：</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsBackend.cpp" line="211"/>
        <source>Please report if you think it&apos;s a bug.</source>
        <translation>如果您認為它是一個bug，請回報。</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsBackend.cpp" line="246"/>
        <source>Qv2ray Cannot Continue</source>
        <translation>Qv2ray 無法繼續</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsBackend.cpp" line="247"/>
        <source>You are running a lower version of Qv2ray compared to the current config file.</source>
        <translation>與當前配置文件相比，您正在運行一個較低版本的 Qv2ray。</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsBackend.cpp" line="248"/>
        <source>Please check if there&apos;s an issue explaining about it.</source>
        <translation>請檢查是否存在有關此問題的說明。</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsBackend.cpp" line="249"/>
        <source>Or submit a new issue if you think this is an error.</source>
        <translation>或者如果你認為這是一個錯誤，請提交一個新 Issue。</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsUpgrade.cpp" line="48"/>
        <source>Default Group</source>
        <translation>預設分组</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsUpgrade.cpp" line="203"/>
        <source>Deprecated</source>
        <translation>已棄用</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsUpgrade.cpp" line="204"/>
        <source>PAC is now deprecated and is not encouraged to be used anymore.</source>
        <translation>PAC 現已被廢棄，不再被建議使用。</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsUpgrade.cpp" line="205"/>
        <source>It will be removed or be provided as a plugin in the future.</source>
        <translation>它將被刪除或在將來作為插件提供。</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsUpgrade.cpp" line="206"/>
        <source>PAC will still work currently, but please switch to the Xray built-in routing as soon as possible.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PAC will still work currently, but please switch to the V2Ray built-in routing as soon as possible.</source>
        <translation type="vanished">PAC 目前仍在運行，但請盡快切換到V2Ray內置路由。</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsUpgrade.cpp" line="425"/>
        <source>Configuration Upgrade Failed</source>
        <translation>配置更新失敗</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsUpgrade.cpp" line="426"/>
        <source>Unsupported config version number: </source>
        <translation>不支援的配置版本號：</translation>
    </message>
    <message>
        <location filename="../src/core/settings/SettingsUpgrade.cpp" line="427"/>
        <source>Please upgrade firstly up to Qv2ray v2.0/v2.1 and try again.</source>
        <translation>請先升級到 Qv2ray v2.0/v2.1 然後重試。</translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="168"/>
        <source>Qv2ray has encountered an uncaught exception: </source>
        <translation>Qv2ray 遇到未知異常：</translation>
    </message>
    <message>
        <location filename="../src/main.cpp" line="169"/>
        <source>Please report a bug via Github with the file located here: </source>
        <translation>請通過 GitHub 報告該文件的錯誤訊息：</translation>
    </message>
    <message>
        <source>VLESS link should start with vless://</source>
        <translation type="vanished">VLess 鏈接應以 vless:// 開頭</translation>
    </message>
    <message>
        <location filename="../3rdparty/XConfigGen/src/XConfigGen.cpp" line="118"/>
        <source>unsupported protocol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../3rdparty/XConfigGen/src/XConfigGen.cpp" line="131"/>
        <source>link parse failed: %1</source>
        <translation>鏈接解析失敗： %1</translation>
    </message>
    <message>
        <location filename="../3rdparty/XConfigGen/src/XConfigGen.cpp" line="139"/>
        <source>empty host</source>
        <translation>主機名為空</translation>
    </message>
    <message>
        <location filename="../3rdparty/XConfigGen/src/XConfigGen.cpp" line="148"/>
        <source>missing port</source>
        <translation>缺少端口</translation>
    </message>
    <message>
        <location filename="../3rdparty/XConfigGen/src/XConfigGen.cpp" line="163"/>
        <source>missing uuid</source>
        <translation>缺少 UUID</translation>
    </message>
    <message>
        <location filename="../3rdparty/XConfigGen/src/XConfigGen.cpp" line="331"/>
        <source>missing publicKey</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../3rdparty/XConfigGen/src/XConfigGen.cpp" line="414"/>
        <source>URI may be invalid or empty</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../3rdparty/XConfigGen/src/XConfigGen.cpp" line="420"/>
        <source>not supported vmess v1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QtNodes::FlowScene</name>
    <message>
        <location filename="../3rdparty/QNodeEditor/src/FlowScene.cpp" line="294"/>
        <location filename="../3rdparty/QNodeEditor/src/FlowScene.cpp" line="308"/>
        <source>Open Flow Scene</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../3rdparty/QNodeEditor/src/FlowScene.cpp" line="294"/>
        <location filename="../3rdparty/QNodeEditor/src/FlowScene.cpp" line="308"/>
        <source>Flow Scene Files (*.flow)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Qv2ray::Qv2rayWidgetApplication</name>
    <message>
        <location filename="../src/ui/widgets/Qv2rayWidgetApplication.cpp" line="60"/>
        <source>A new version of Qv2ray is starting:</source>
        <translation>新版本 Qv2ray 正在啓動：</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/Qv2rayWidgetApplication.cpp" line="62"/>
        <source>New version information: </source>
        <translation>新版本信息：</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/Qv2rayWidgetApplication.cpp" line="66"/>
        <source>Do you want to exit and launch that new version?</source>
        <translation>要退出並啓動新版本嗎？</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/Qv2rayWidgetApplication.cpp" line="68"/>
        <source>New version detected</source>
        <translation>檢測到新版本</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/Qv2rayWidgetApplication.cpp" line="63"/>
        <source>Version: %1:%2</source>
        <translation>版本：%1:%2</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/Qv2rayWidgetApplication.cpp" line="64"/>
        <source>Path: %1</source>
        <translation>路徑：%1</translation>
    </message>
</context>
<context>
    <name>Qv2ray::components::QvUpdateChecker</name>
    <message>
        <location filename="../src/components/update/UpdateChecker.cpp" line="84"/>
        <source>Qv2ray Update</source>
        <translation>Qv2ray 更新</translation>
    </message>
</context>
<context>
    <name>Qv2ray::components::plugins::QvPluginHost</name>
    <message>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="57"/>
        <source>Failed to load plugin</source>
        <translation>加載插件失敗</translation>
    </message>
    <message>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="72"/>
        <source>Cannot load plugin</source>
        <translation>無法載入插件</translation>
    </message>
    <message>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="73"/>
        <source>The plugin cannot be loaded: </source>
        <translation>無法載入插件：</translation>
    </message>
    <message>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="74"/>
        <source>This plugin was built against a different version of the Plugin Interface.</source>
        <translation>此插件是在不同版本的插件接口上構建的。</translation>
    </message>
    <message>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="75"/>
        <source>Please contact the plugin provider or report the issue to Qv2ray Workgroup.</source>
        <translation>請聯繫插件提供者或將問題報告到 Qv2ray 工作組。</translation>
    </message>
    <message>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="131"/>
        <source>Enabling a plugin</source>
        <translation>啟用外掛程式</translation>
    </message>
    <message>
        <location filename="../src/components/plugins/QvPluginHost.cpp" line="131"/>
        <source>The plugin will become fully functional after restarting Qv2ray.</source>
        <translation>重新啟動 Qv2ray 後插件將完全啟用。</translation>
    </message>
</context>
<context>
    <name>Qv2ray::core::handler::KernelInstanceHandler</name>
    <message>
        <location filename="../src/core/handler/KernelInstanceHandler.cpp" line="48"/>
        <source>There are other processes occupying the ports necessary to start the connection:</source>
        <translation>其他進程佔用了啟動連接所需的端口：</translation>
    </message>
    <message>
        <location filename="../src/core/handler/KernelInstanceHandler.cpp" line="53"/>
        <source>Endpoint: %1:%2 for inbound: &quot;%3&quot;</source>
        <translation>端口: %1:%2 for inbound: &quot;%3&quot;</translation>
    </message>
    <message>
        <location filename="../src/core/handler/KernelInstanceHandler.cpp" line="62"/>
        <source>Local port: %1 for plugin integration.</source>
        <translation>本地端口： %1 用於插件集成。</translation>
    </message>
    <message>
        <location filename="../src/core/handler/KernelInstanceHandler.cpp" line="175"/>
        <location filename="../src/core/handler/KernelInstanceHandler.cpp" line="236"/>
        <source>A plugin kernel failed to start. Please check the outbound settings.</source>
        <translation>插件內核啟動失敗。請檢查出站設置。</translation>
    </message>
</context>
<context>
    <name>Qv2ray::core::handler::QvConfigHandler</name>
    <message>
        <location filename="../src/core/handler/ConfigHandler.cpp" line="31"/>
        <source>Group: %1</source>
        <translation>分组: %1</translation>
    </message>
    <message>
        <location filename="../src/core/handler/ConfigHandler.cpp" line="290"/>
        <location filename="../src/core/handler/ConfigHandler.cpp" line="410"/>
        <source>Group does not exist</source>
        <translation>分組不存在</translation>
    </message>
    <message>
        <location filename="../src/core/handler/ConfigHandler.cpp" line="66"/>
        <location filename="../src/core/handler/ConfigHandler.cpp" line="305"/>
        <source>Default Group</source>
        <translation>預設分组</translation>
    </message>
    <message>
        <location filename="../src/core/handler/ConfigHandler.cpp" line="321"/>
        <source>Failed to start connection</source>
        <translation>啟動連線失敗</translation>
    </message>
    <message>
        <location filename="../src/core/handler/ConfigHandler.cpp" line="528"/>
        <source>Unknown subscription type: %1</source>
        <translation>未知訂閱類型： %1</translation>
    </message>
    <message>
        <location filename="../src/core/handler/ConfigHandler.cpp" line="557"/>
        <location filename="../src/core/handler/ConfigHandler.cpp" line="644"/>
        <location filename="../src/core/handler/ConfigHandler.cpp" line="691"/>
        <source>Update Subscription</source>
        <translation>更新訂閱</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/core/handler/ConfigHandler.cpp" line="557"/>
        <source>%n entrie(s) have been found from the subscription source, do you want to continue?</source>
        <translation>
            <numerusform>在訂閱源只找到了 %n 個條目，您想要繼續嗎？</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location filename="../src/core/handler/ConfigHandler.cpp" line="644"/>
        <source>%1 out of %n entrie(s) have been filtered out, do you want to continue?</source>
        <translation>
            <numerusform>%1 個條目中的 %n 個條目已被過濾出來，您想要繼續嗎？</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location filename="../src/core/handler/ConfigHandler.cpp" line="692"/>
        <source>There&apos;re %n connection(s) in the group that do not belong the current subscription (any more).</source>
        <translation>
            <numerusform>有 %n 個連接已不再屬於當前訂閱分組。</numerusform>
        </translation>
    </message>
    <message>
        <location filename="../src/core/handler/ConfigHandler.cpp" line="695"/>
        <source>Would you like to remove them?</source>
        <translation>您想要刪除它們嗎？</translation>
    </message>
    <message>
        <location filename="../src/core/handler/ConfigHandler.cpp" line="528"/>
        <source>Cannot Update Subscription</source>
        <translation>無法更新訂閱</translation>
    </message>
    <message>
        <location filename="../src/core/handler/ConfigHandler.cpp" line="528"/>
        <source>A subscription plugin is missing?</source>
        <translation>缺少訂閱插件？</translation>
    </message>
</context>
<context>
    <name>Qv2ray::core::kernel::APIWorker</name>
    <message>
        <source>Failed to get statistics data, please check if V2Ray is running properly</source>
        <translation type="vanished">無法獲取統計數據，請檢查 V2Ray 是否正常運行</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/APIBackend.cpp" line="98"/>
        <source>Failed to get statistics data, please check if Xray is running properly</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Qv2ray::core::kernel::V2RayKernelInstance</name>
    <message>
        <location filename="../src/core/kernel/V2RayKernelInteractions.cpp" line="32"/>
        <source>Core file is lacking executable permission for the current user.</source>
        <translation>核心文件缺少當前用戶的執行權限。</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/V2RayKernelInteractions.cpp" line="33"/>
        <source>Qv2ray tried to set, but failed because permission denied.</source>
        <translation>Qv2ray 嘗試設置，但由於權限不足而失敗。</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/V2RayKernelInteractions.cpp" line="52"/>
        <source>Check is skipped</source>
        <translation>檢查已跳過</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/V2RayKernelInteractions.cpp" line="62"/>
        <source>V2Ray core executable not found.</source>
        <translation>找不到 V2Ray 核心執行文件。</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/V2RayKernelInteractions.cpp" line="67"/>
        <source>V2Ray core file cannot be opened, please ensure there&apos;s a file instead of a folder.</source>
        <translation>V2Ray 核心文件無法打開，請確保路徑指向文件而不是文件夾。</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/V2RayKernelInteractions.cpp" line="91"/>
        <source>V2Ray core is incompatible with your platform.<byte value="xd"/>
Expected core ABI is %1, but got actual %2.<byte value="xd"/>
Maybe you have downloaded the wrong core?</source>
        <translation>V2Ray 核心與您的平台不兼容。
預期的核心 ABI 是 %1，但實際上是 %2。
你可能下載了錯誤的核心？</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/V2RayKernelInteractions.cpp" line="123"/>
        <source>V2Ray assets path is not valid.</source>
        <translation>V2Ray 資源路徑無效。</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/V2RayKernelInteractions.cpp" line="126"/>
        <source>No geoip.dat in assets path.</source>
        <translation>資源路徑中沒有 geoip.dat。</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/V2RayKernelInteractions.cpp" line="129"/>
        <source>No geosite.dat in assets path.</source>
        <translation>資源路徑中沒有 geosite.dat。</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/V2RayKernelInteractions.cpp" line="148"/>
        <source>V2Ray core failed with an exit code: </source>
        <translation>V2Ray 核心運行失敗，退出代碼：</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/V2RayKernelInteractions.cpp" line="154"/>
        <source>V2Ray core returns empty string.</source>
        <translation>V2Ray 核心返回空字符串。</translation>
    </message>
    <message>
        <source>Configuration Error</source>
        <translation type="vanished">配置錯誤</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/V2RayKernelInteractions.cpp" line="197"/>
        <source>Invalid V2Ray Instance Status.</source>
        <translation>無效的 V2Ray 實例狀態。</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/V2RayKernelInteractions.cpp" line="42"/>
        <source>Core file not executable.</source>
        <translation>核心文件不可執行。</translation>
    </message>
    <message>
        <location filename="../src/core/kernel/V2RayKernelInteractions.cpp" line="208"/>
        <source>V2Ray kernel failed to start: </source>
        <translation>V2Ray 內核啟動失敗：</translation>
    </message>
</context>
<context>
    <name>Qv2ray::ui::widgets::AutoCompleteTextEdit</name>
    <message>
        <location filename="../src/ui/widgets/widgets/QvAutoCompleteTextEdit.cpp" line="127"/>
        <source>You can not input space characters here.</source>
        <translation>此處不能輸入空格。</translation>
    </message>
</context>
<context>
    <name>RouteEditor</name>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="20"/>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="282"/>
        <source>Route Editor</source>
        <translation>路由編輯器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="416"/>
        <source>Protocol</source>
        <translation>協定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="402"/>
        <source>Tag</source>
        <translation>標籤</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="430"/>
        <source>Host</source>
        <translation>主機</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="444"/>
        <source>Port</source>
        <translation>端口</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="230"/>
        <source>Domain Strategy</source>
        <translation>網域策略</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="256"/>
        <source>Default Outbound</source>
        <translation>默認出站</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="486"/>
        <source>Drag and drop to re-order the rules.</source>
        <translation>拖放以重新排序規則。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="506"/>
        <source>Status</source>
        <translation>狀態</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.cpp" line="333"/>
        <source>Added DIRECT outbound</source>
        <translation>已添加直連出站</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="60"/>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="68"/>
        <source>New Outbound</source>
        <translation>新建出站</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="78"/>
        <source>Import</source>
        <translation>匯入</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="98"/>
        <source>Blackhole</source>
        <translation>黑洞</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="31"/>
        <source>New Inbound</source>
        <translation>新入埠</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="40"/>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="88"/>
        <source>Editor</source>
        <translation>編輯器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="50"/>
        <source>Global Settings</source>
        <translation>全域設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="108"/>
        <source>Freedom</source>
        <translation>自由</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="118"/>
        <source>Balancer</source>
        <translation>均衡器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="128"/>
        <source>Chain</source>
        <translation>代理鏈</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="139"/>
        <source>Existing Connection</source>
        <translation>現存連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="163"/>
        <source>Copy</source>
        <translation>複製</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="173"/>
        <source>Reference</source>
        <translation>參照</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="224"/>
        <source>Routing Settings</source>
        <translation>路由設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="299"/>
        <source>Chain Editor</source>
        <translation>代理鏈編輯器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="309"/>
        <source>DNS Settings</source>
        <translation>DNS 設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="409"/>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="423"/>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="437"/>
        <source>Unknown</source>
        <translation>不明</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="451"/>
        <source>0</source>
        <translation>0</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="513"/>
        <source>Debug Connection Painter</source>
        <translation>除錯連接彩現器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="188"/>
        <source>Connection Template</source>
        <translation>連接模板</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="194"/>
        <source>Inbound</source>
        <translation>入站</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="201"/>
        <source>Outbound</source>
        <translation>出站</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="318"/>
        <source>Override global DNS settings</source>
        <translation>覆蓋全局 DNS 設置</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="396"/>
        <source>Inbound / Outbound Info</source>
        <translation>入站/出站訊息</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="461"/>
        <source>Rules Ordering</source>
        <translation>規則順序</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.cpp" line="480"/>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.cpp" line="508"/>
        <source>Importing All Connections</source>
        <translation>匯入全部連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.cpp" line="480"/>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.cpp" line="508"/>
        <source>Do you want to import all the connections?</source>
        <translation>您確定要匯入所有連接嗎？</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.cpp" line="531"/>
        <source>(All Connections)</source>
        <translation>(所有連接)</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="37"/>
        <source>Add Inbound</source>
        <translation>新增入站</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="47"/>
        <source>Add Inbound from Global Settings</source>
        <translation>從全局設置中新增入站</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="75"/>
        <source>Import Outbound</source>
        <translation>導入出站</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="85"/>
        <source>Add Outbound</source>
        <translation>新增出站</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="95"/>
        <source>Add Blackhole Outbound</source>
        <translation>新增黑洞出站</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="105"/>
        <source>Add Freedom Outbound</source>
        <translation>新增自由出站</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="115"/>
        <source>Add Balancer</source>
        <translation>新增均衡器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="125"/>
        <source>Add Proxy Chain</source>
        <translation>新增代理鏈</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="146"/>
        <source>Group</source>
        <translation>分組</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="153"/>
        <source>Connection</source>
        <translation>連線</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="160"/>
        <source>Copy Connection</source>
        <translation>複製連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="170"/>
        <source>Reference Connection</source>
        <translation>引用連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="326"/>
        <source>Misc</source>
        <translation>其它</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="332"/>
        <source>Browser Forwarder</source>
        <translation>瀏覽器轉發器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="338"/>
        <source>Listening Address</source>
        <translation>監聽位址</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="348"/>
        <source>:Listening Port</source>
        <translation>:監聽端口</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="371"/>
        <source> Observatory</source>
        <translation> 連接觀測</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/editors/w_RoutesEditor.ui" line="377"/>
        <source>Subject Selector</source>
        <translation>主題選擇器</translation>
    </message>
</context>
<context>
    <name>RouteSettingsMatrix</name>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.ui" line="22"/>
        <source>Domain Strategy</source>
        <translation>網域策略</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.ui" line="71"/>
        <source>Lines start with &quot;geoip:&quot; or &quot;geosite:&quot; will have its autocompletion from geoip.dat and geosite.dat</source>
        <translation>以“geoip:”或“geosite:”開頭的行可以自動補全</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.ui" line="80"/>
        <source>Block</source>
        <translation>阻斷</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.ui" line="93"/>
        <source>Direct</source>
        <translation>直連</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.ui" line="103"/>
        <source>Domain</source>
        <translation>網域</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.ui" line="119"/>
        <source>Proxy</source>
        <translation>代理</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.ui" line="135"/>
        <source>IP</source>
        <translation>IP</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.ui" line="171"/>
        <source>Use built-in route schemes</source>
        <translation>使用預置路由方案</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.ui" line="174"/>
        <source>Built-in Schemes...</source>
        <translation>預置方案...</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.ui" line="193"/>
        <source>Import route scheme from file</source>
        <translation>從檔案中匯入路由方案</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.ui" line="196"/>
        <source>Import Scheme...</source>
        <translation>匯入方案...</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.ui" line="206"/>
        <source>Export route scheme to file</source>
        <translation>匯出方案到檔案</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.ui" line="209"/>
        <source>Export Scheme...</source>
        <translation>匯出方案...</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.ui" line="48"/>
        <source>Matcher</source>
        <translation>匹配器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.ui" line="56"/>
        <source>Original</source>
        <translation>原始</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.ui" line="61"/>
        <source>Minimal Perfect Hash Matcher</source>
        <translation>最小完美雜湊匹配器</translation>
    </message>
</context>
<context>
    <name>RouteSettingsMatrixWidget</name>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.cpp" line="48"/>
        <source>empty scheme</source>
        <translation>空白方案</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.cpp" line="120"/>
        <source>Import scheme &apos;%1&apos; made by &apos;%2&apos;? <byte value="xd"/>
 Description: %3</source>
        <translation>要匯入 &apos;%2&apos; 的方案 &apos;%1&apos; 嗎？
描述: %3</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.cpp" line="121"/>
        <source>Importing Scheme</source>
        <translation>正在匯入方案</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.cpp" line="152"/>
        <source>Exporting Scheme</source>
        <translation>正在匯出方案</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.cpp" line="156"/>
        <source>Scheme name:</source>
        <translation>方案名稱：</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.cpp" line="156"/>
        <source>Unnamed Scheme</source>
        <translation>無名方案</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.cpp" line="161"/>
        <source>Author:</source>
        <translation>作者：</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.cpp" line="167"/>
        <source>Description:</source>
        <translation>描述：</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.cpp" line="167"/>
        <source>The author is too lazy to leave a comment</source>
        <translation>作者太懶，沒有寫描述</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.cpp" line="191"/>
        <source>Your route scheme has been successfully exported!</source>
        <translation>路由方案成功匯出！</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.cpp" line="209"/>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.cpp" line="227"/>
        <source>QvRoute Schemes(*.json)</source>
        <translation>QvRoute 方案(*.json)</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/RouteSettingsMatrix.cpp" line="49"/>
        <source>empty scheme (no ads)</source>
        <translation>空規則（去廣告）</translation>
    </message>
</context>
<context>
    <name>RoutingEditorWidget</name>
    <message>
        <location filename="../src/ui/widgets/widgets/complex/RoutingEditorWidget.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/complex/RoutingEditorWidget.ui" line="34"/>
        <source>A rule with no inbound connected means there&apos;s no inbound restriction.</source>
        <translation>未連接入埠的規則無入埠之制限。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/complex/RoutingEditorWidget.ui" line="54"/>
        <source>Add new route</source>
        <translation>添加路由</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/complex/RoutingEditorWidget.ui" line="57"/>
        <source>Add Rule</source>
        <translation>添加規則</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/complex/RoutingEditorWidget.ui" line="64"/>
        <source>Delete outbound</source>
        <translation>刪除離埠</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/complex/RoutingEditorWidget.ui" line="67"/>
        <source>Delete Selection</source>
        <translation>刪除所選項</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/complex/RoutingEditorWidget.cpp" line="94"/>
        <source>Remove Items</source>
        <translation>刪除項目</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/complex/RoutingEditorWidget.cpp" line="94"/>
        <source>Please select a node from the graph to continue.</source>
        <translation>請從圖表中選擇要繼續的節點。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/complex/RoutingEditorWidget.cpp" line="101"/>
        <source>Deleting a node</source>
        <translation>刪除節點</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/complex/RoutingEditorWidget.cpp" line="101"/>
        <source>You need to select a node first</source>
        <translation>您並未選中任何節點</translation>
    </message>
</context>
<context>
    <name>RuleWidget</name>
    <message>
        <location filename="../src/ui/widgets/node/widgets/RuleWidget.ui" line="20"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/RuleWidget.ui" line="40"/>
        <source>Enabled</source>
        <translation>已啓用</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/RuleWidget.ui" line="52"/>
        <source>Details</source>
        <translation>詳情</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/RuleWidget.ui" line="82"/>
        <source>Target IP</source>
        <translation>目標 IP</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/RuleWidget.ui" line="95"/>
        <source>Target Domain</source>
        <translation>目標網域</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/RuleWidget.ui" line="102"/>
        <source>Source IP</source>
        <translation>來源 IP</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/RuleWidget.ui" line="109"/>
        <source>General</source>
        <translation>通用</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/RuleWidget.ui" line="126"/>
        <source>TCP</source>
        <translation>TCP</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/RuleWidget.ui" line="133"/>
        <source>UDP</source>
        <translation>UDP</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/RuleWidget.ui" line="147"/>
        <source>HTTP</source>
        <translation>HTTP</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/RuleWidget.ui" line="154"/>
        <source>TLS</source>
        <translation>TLS</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/RuleWidget.ui" line="161"/>
        <source>Torrent</source>
        <translation>Torrent</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/RuleWidget.ui" line="172"/>
        <source>Port</source>
        <translation>端口</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/node/widgets/RuleWidget.ui" line="179"/>
        <source>80, 443, 8000-8080</source>
        <translation>80, 443, 8000-8080</translation>
    </message>
</context>
<context>
    <name>ScreenShot</name>
    <message>
        <location filename="../src/ui/widgets/windows/w_ScreenShot_Core.ui" line="20"/>
        <source>ScreenShot</source>
        <translation>螢幕截圖</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ScreenShot_Core.ui" line="35"/>
        <source>Size</source>
        <translation>大小</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ScreenShot_Core.ui" line="48"/>
        <source>Screen Shot</source>
        <translation>截屏</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_ScreenShot_Core.ui" line="61"/>
        <source>FG</source>
        <translation>FG</translation>
    </message>
</context>
<context>
    <name>SocksInboundEditor</name>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/socksin.cpp" line="72"/>
        <source>Removing a user</source>
        <translation>移除使用者</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/socksin.cpp" line="72"/>
        <source>You haven&apos;t selected a user yet.</source>
        <translation>您並未選擇任一使用者。</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/socksin.cpp" line="90"/>
        <source>Add a user</source>
        <translation>新增使用者</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/socksin.cpp" line="90"/>
        <source>This user exists already.</source>
        <translation>使用者已存在</translation>
    </message>
</context>
<context>
    <name>SpeedWidget</name>
    <message>
        <location filename="../src/ui/common/speedchart/speedwidget.cpp" line="194"/>
        <location filename="../src/ui/common/speedchart/speedwidget.cpp" line="195"/>
        <source>Proxy</source>
        <translation>代理</translation>
    </message>
    <message>
        <location filename="../src/ui/common/speedchart/speedwidget.cpp" line="198"/>
        <location filename="../src/ui/common/speedchart/speedwidget.cpp" line="199"/>
        <source>Direct</source>
        <translation>直連</translation>
    </message>
    <message>
        <location filename="../src/ui/common/speedchart/speedwidget.cpp" line="204"/>
        <location filename="../src/ui/common/speedchart/speedwidget.cpp" line="205"/>
        <source>Total</source>
        <translation>總計</translation>
    </message>
</context>
<context>
    <name>StreamSettingsWidget</name>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="14"/>
        <source>Stream Settings Widget</source>
        <translation>串流設定 Widget</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="24"/>
        <source>Protocol Settings</source>
        <translation>協定設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="51"/>
        <source>Type</source>
        <translation>類型</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="121"/>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="135"/>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="289"/>
        <source>Edit</source>
        <translation>編輯</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="128"/>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="142"/>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="296"/>
        <source>Reset</source>
        <translation>重置</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="149"/>
        <source>Response</source>
        <translation>回應</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="156"/>
        <source>Request</source>
        <translation>請求</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="169"/>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="311"/>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="660"/>
        <source>Path</source>
        <translation>路徑</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="246"/>
        <source>Host</source>
        <translation>主機</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="253"/>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="392"/>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="724"/>
        <source>Headers</source>
        <translation>請求頭</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="586"/>
        <source>MTU</source>
        <translation>MTU</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="563"/>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="570"/>
        <source>Congestion</source>
        <translation>擁塞控制</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="355"/>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="1086"/>
        <source>Enabled</source>
        <translation>已啟用</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="681"/>
        <source>Security</source>
        <translation>安全選項</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="707"/>
        <source>Key</source>
        <translation>密鑰</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="717"/>
        <source>keys</source>
        <translation>密鑰</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="819"/>
        <source>Transport Protocol</source>
        <translation>傳輸協議</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="868"/>
        <source>TLS Settings</source>
        <translation>TLS 設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="977"/>
        <source>Allow Insecure Certificates</source>
        <translation>允許不安全的證書</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="917"/>
        <source>ALPN</source>
        <translation>ALPN</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="993"/>
        <source>PublicKey</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="1003"/>
        <source>ShortIds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="1013"/>
        <source>spiderX</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="901"/>
        <source>Fingerprint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="1059"/>
        <source>SOCK Options</source>
        <translation>SOCK 選項</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="1065"/>
        <source>Mark</source>
        <translation>Mark</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="1079"/>
        <source>TCP Fast Open</source>
        <translation>TCP 快速打開</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="1093"/>
        <source>tProxy Mode</source>
        <translation>tProxy 工作模式</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="961"/>
        <source>Enable Session Resumption</source>
        <translation>啟用會話恢復</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="1032"/>
        <source>Security Type</source>
        <translation>安全類型</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="403"/>
        <source>Header</source>
        <translation>Header</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="447"/>
        <source>dns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="455"/>
        <source>Seed</source>
        <translation>種子</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="465"/>
        <source>Capacity</source>
        <translation>容量</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="480"/>
        <source>Up: </source>
        <translation>上：</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="502"/>
        <source>Down: </source>
        <translation>下：</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="517"/>
        <source>Buffer Size</source>
        <translation>緩衝器尺寸：</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="532"/>
        <source>Write Size: </source>
        <translation>寫入：</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="548"/>
        <source>Read Size: </source>
        <translation>讀取：</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="577"/>
        <source>Options</source>
        <translation>選項</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="615"/>
        <source>TTI</source>
        <translation>TTI</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="646"/>
        <source>DnsDomain</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="891"/>
        <source>Server Address (SNI)</source>
        <translation>伺服器名稱指示 (SNI)</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="911"/>
        <source>tls</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="954"/>
        <source>Disable System Root Certificates</source>
        <translation>禁用系統根憑證</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="940"/>
        <source>Open Certificate Editor</source>
        <translation>開啟證書編輯器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="924"/>
        <source>Certificates</source>
        <translation>證書</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="974"/>
        <source>AllowInsecure is insecure, do not allow insecure.</source>
        <translation>AllowInsecure 是不安全的，请勿 AllowInsecure。</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="782"/>
        <source>Service Name</source>
        <translation>服務名稱</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="318"/>
        <source>Max Early Data</source>
        <translation>最大 Early Data</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="348"/>
        <source>Browser Forwarding</source>
        <translation>瀏覽器轉發</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="792"/>
        <source>Mode</source>
        <translation>模式</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="947"/>
        <source>Open pinnedPeerCertificateChainSha256 Editor</source>
        <translation>打開 pinnedPeerCerCercatateChainSha256 編輯器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="183"/>
        <source>Method</source>
        <translation>方法</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="362"/>
        <source>Early Data Header Name</source>
        <translation>早期數據頭名稱</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="987"/>
        <source>reality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/widgets/StreamSettingsWidget.ui" line="1119"/>
        <source>TCP Keepalive Interval</source>
        <translation>TCP 保留存活時間</translation>
    </message>
</context>
<context>
    <name>VmessOutboundEditor</name>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/vmess.cpp" line="46"/>
        <source>Non AEAD VMess detected</source>
        <translation>檢測到非 AEAD 的 VMess。</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/vmess.cpp" line="45"/>
        <source>VMess MD5 with Non-zero AlterID has been deprecated, please use VMessAEAD.</source>
        <translation>VMess MD5 使用非零 AlterID 已廢棄，請使用 VMessAEAD。</translation>
    </message>
</context>
<context>
    <name>blackholeOutEditor</name>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/blackhole.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/blackhole.ui" line="20"/>
        <source>Response</source>
        <translation>回應</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/blackhole.ui" line="26"/>
        <source>Type</source>
        <translation>類型</translation>
    </message>
</context>
<context>
    <name>dnsOutEditor</name>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/dns.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/dns.ui" line="20"/>
        <source>Network</source>
        <translation>網路</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/dns.ui" line="29"/>
        <source>TCP</source>
        <translation>TCP</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/dns.ui" line="36"/>
        <source>UDP</source>
        <translation>UDP</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/dns.ui" line="43"/>
        <source>Original</source>
        <translation>原始</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/dns.ui" line="65"/>
        <source>Address</source>
        <translation>位址</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/dns.ui" line="75"/>
        <source>Port</source>
        <translation>端口</translation>
    </message>
</context>
<context>
    <name>dokodemodoorInEditor</name>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/dokodemo-door.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/dokodemo-door.ui" line="20"/>
        <source>Address</source>
        <translation>位址</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/dokodemo-door.ui" line="30"/>
        <source>Optional when using &quot;Follow Redirect&quot;</source>
        <translation>使用“跟隨轉址”時可省</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/dokodemo-door.ui" line="37"/>
        <source>Port</source>
        <translation>端口</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/dokodemo-door.ui" line="60"/>
        <source>Network</source>
        <translation>網路</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/dokodemo-door.ui" line="72"/>
        <source>TCP</source>
        <translation>TCP</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/dokodemo-door.ui" line="85"/>
        <source>UDP</source>
        <translation>UDP</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/dokodemo-door.ui" line="94"/>
        <source>Timeout</source>
        <translation>超時</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/dokodemo-door.ui" line="117"/>
        <source>Follow Redirect</source>
        <translation>遵循重定向 (Redirect)</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/dokodemo-door.ui" line="127"/>
        <source>Enabled</source>
        <translation>已啟用</translation>
    </message>
</context>
<context>
    <name>freedomOutEditor</name>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/freedom.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/freedom.ui" line="20"/>
        <source>Domain Strategy</source>
        <translation>網域策略</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/freedom.ui" line="51"/>
        <source>Redirect</source>
        <translation>重定向 (Redirect)</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/freedom.ui" line="58"/>
        <source>:0</source>
        <translation>:0</translation>
    </message>
</context>
<context>
    <name>httpInEditor</name>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/httpin.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/httpin.ui" line="20"/>
        <source>Allow Transparent</source>
        <translation>允許透明</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/httpin.ui" line="27"/>
        <source>Timeout</source>
        <translation>超時</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/httpin.ui" line="37"/>
        <source>s</source>
        <translation>秒</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/httpin.ui" line="50"/>
        <source>Users</source>
        <translation>使用者</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/httpin.ui" line="61"/>
        <source>Username</source>
        <translation>用戶名</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/httpin.ui" line="68"/>
        <source>Password</source>
        <translation>密碼</translation>
    </message>
</context>
<context>
    <name>httpOutEditor</name>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/httpout.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/httpout.ui" line="20"/>
        <source>Username</source>
        <translation>用戶名</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/httpout.ui" line="34"/>
        <source>Password</source>
        <translation>密碼</translation>
    </message>
</context>
<context>
    <name>loopback</name>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/loopback.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/loopback.ui" line="20"/>
        <source>Inbound Tag</source>
        <translation>入站標籤</translation>
    </message>
</context>
<context>
    <name>shadowsocksOutEditor</name>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/shadowsocks.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/shadowsocks.ui" line="20"/>
        <source>Password</source>
        <translation>密碼</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/shadowsocks.ui" line="34"/>
        <source>Encryption Method</source>
        <translation>加密方式</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/shadowsocks.ui" line="51"/>
        <source>2022-blake3-aes-128-gcm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/shadowsocks.ui" line="56"/>
        <source>2022-blake3-aes-256-gcm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/shadowsocks.ui" line="61"/>
        <source>2022-blake3-chacha20-poly1305</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/shadowsocks.ui" line="81"/>
        <source>xchacha20-poly1305</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/shadowsocks.ui" line="86"/>
        <source>none</source>
        <translation type="unfinished">不使用</translation>
    </message>
</context>
<context>
    <name>socksInEditor</name>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/socksin.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/socksin.ui" line="20"/>
        <source>UDP</source>
        <translation>UDP</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/socksin.ui" line="30"/>
        <source>Enabled</source>
        <translation>已啟用</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/socksin.ui" line="37"/>
        <source>UDP Local IP</source>
        <translation>UDP 本地IP</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/socksin.ui" line="47"/>
        <source>127.0.0.1</source>
        <translation>127.0.0.1</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/socksin.ui" line="54"/>
        <source>Auth</source>
        <translation>身分驗證</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/socksin.ui" line="78"/>
        <source>Users</source>
        <translation>用戶</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/socksin.ui" line="89"/>
        <source>Username</source>
        <translation>用戶名</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/inbound/socksin.ui" line="96"/>
        <source>Password</source>
        <translation>密碼</translation>
    </message>
</context>
<context>
    <name>socksOutEditor</name>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/socksout.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/socksout.ui" line="20"/>
        <source>Username</source>
        <translation>用戶名</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/socksout.ui" line="34"/>
        <source>Password</source>
        <translation>密碼</translation>
    </message>
</context>
<context>
    <name>trojanOutEditor</name>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/trojan.ui" line="14"/>
        <source>Form</source>
        <translation type="unfinished">視窗</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/trojan.ui" line="20"/>
        <source>Password</source>
        <translation type="unfinished">密碼</translation>
    </message>
    <message>
        <source>UUID</source>
        <translation type="obsolete">UUID</translation>
    </message>
    <message>
        <source>Alter ID</source>
        <translation type="obsolete">Alter ID</translation>
    </message>
    <message>
        <source>Security</source>
        <translation type="obsolete">安全選項</translation>
    </message>
</context>
<context>
    <name>vlessOutEditor</name>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/vless.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/vless.ui" line="20"/>
        <source>UUID</source>
        <translation>UUID</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/vless.ui" line="40"/>
        <source>Encryption</source>
        <translation>加密</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/vless.ui" line="65"/>
        <source>Flow</source>
        <translation>流控</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/vless.ui" line="72"/>
        <source>&lt;h3&gt;Notes for &lt;code&gt;udp443&lt;/code&gt; Methods&lt;/h3&gt;

&lt;p&gt;Some applications like Google Chrome would attempt to use QUIC protocol instead of TLS, which, won&apos;t benefit from XTLS at all. What&apos;s worse, QUIC over TCP will cause potential congestion control problem, downgrading your experience.&lt;/p&gt;

&lt;p&gt;Non-&lt;code&gt;udp443&lt;/code&gt; methods block UDP 443 outbound traffic to workaround this situation. If you do want to let it go, use at your own peril.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;關於 &lt;code&gt;udp443&lt;/code&gt; 流控方式&lt;/h3&gt;

&lt;p&gt;某些應用程序如 Google Chrome 嘗試使用 QUIC 協議而不是 TLS 協議，這將導致其無法享受到 XTLS 的加成。更糟的是，QUIC over TCP 存在潛在的擁塞控制問題，可能會令你的體驗降級。 &lt;/p&gt;

&lt;p&gt;非 &lt;code&gt;udp443&lt;/code&gt; 的流控方式會阻斷 UDP 目標端口為 443 的出站流量以繞過此情形。若你確實需要放行 UDP 443，請自行斟酌。 &lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>vmessOutEditor</name>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/vmess.ui" line="14"/>
        <source>Form</source>
        <translation>視窗</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/vmess.ui" line="20"/>
        <source>UUID</source>
        <translation>UUID</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/vmess.ui" line="40"/>
        <source>Alter ID</source>
        <translation>Alter ID</translation>
    </message>
    <message>
        <location filename="../src/plugins/protocols/ui/outbound/vmess.ui" line="57"/>
        <source>Security</source>
        <translation>安全選項</translation>
    </message>
</context>
<context>
    <name>w_GroupManager</name>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="14"/>
        <source>Group Editor</source>
        <translation>組編輯器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="26"/>
        <source>Group Info</source>
        <translation>分組資訊</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="32"/>
        <source>Group Name</source>
        <translation>分組名稱</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="42"/>
        <source>Created At</source>
        <translation>創建於</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="59"/>
        <source>Group List</source>
        <translation>組列表</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="96"/>
        <source>Add Subscription</source>
        <translation>添加訂閱</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="113"/>
        <source>Remove Subscription</source>
        <translation>刪除訂閱</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="159"/>
        <source>Connections</source>
        <translation>連接</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="165"/>
        <source>Delete Selection</source>
        <translation>刪除所選項</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="182"/>
        <source>Name</source>
        <translation>名稱</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="187"/>
        <source>Type</source>
        <translation>類型</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="192"/>
        <source>Host / Port</source>
        <translation>Host / 端口</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="197"/>
        <source>Groups</source>
        <translation>分組</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="205"/>
        <source>Export Selection</source>
        <translation>匯出所選項</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="213"/>
        <source>Subscription Settings</source>
        <translation>訂閱設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="219"/>
        <source>This group is a subscription</source>
        <translation>此分組是一個訂閱</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="240"/>
        <source>Subscription Address</source>
        <translation>訂閱位址</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="267"/>
        <source>Last Updated</source>
        <translation>最後更新</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="303"/>
        <source>Days</source>
        <translation>天</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="391"/>
        <source>Leave blank to exclude nothing</source>
        <translation>留空不排除</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="340"/>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="370"/>
        <source>Relation</source>
        <translation>關係</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="333"/>
        <source>Leave blank to include all</source>
        <translation>留空包含全部</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="406"/>
        <source>Update Subscription</source>
        <translation>更新訂閱</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="414"/>
        <source>DNS Settings</source>
        <translation>DNS 設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="420"/>
        <source>Override Global DNS Settings</source>
        <translation>覆蓋全域 DNS 設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="434"/>
        <source>Advanced Route Settings</source>
        <translation>高級路由設置</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="440"/>
        <source>Override Global Advanced Route Settings</source>
        <translation>覆蓋全域進階路由設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="250"/>
        <source>Subscription Type</source>
        <translation>訂閱類型</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="281"/>
        <source>Update Interval</source>
        <translation>更新間隔</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="327"/>
        <source>Import Include Filters</source>
        <translation>匯入包含過濾器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_GroupManager.ui" line="364"/>
        <source>Import Exclude Filters</source>
        <translation>匯入排除過濾器</translation>
    </message>
</context>
<context>
    <name>w_PluginManager</name>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.ui" line="14"/>
        <source>Plugin Manager</source>
        <translation>外掛程式管理器</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.ui" line="20"/>
        <source>Plugins</source>
        <translation>外掛程式列表</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.ui" line="32"/>
        <source>Open Local Plugin Folder</source>
        <translation>打開本地外掛程式目錄</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.ui" line="39"/>
        <source>Online help about plugins</source>
        <translation>獲取關於外掛程式的線上說明</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.ui" line="42"/>
        <source>?</source>
        <translation>?</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.ui" line="65"/>
        <source>Plugin Metadata</source>
        <translation>元資料</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.ui" line="73"/>
        <source>Name</source>
        <translation>名稱</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.ui" line="105"/>
        <source>Author</source>
        <translation>作者</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.ui" line="137"/>
        <source>Description</source>
        <translation>描述</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.ui" line="169"/>
        <source>Library Path</source>
        <translation>路徑</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.ui" line="201"/>
        <source>State</source>
        <translation>狀態</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.ui" line="333"/>
        <source>Plugin Settings</source>
        <translation>外掛程式設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.ui" line="341"/>
        <source>Plugin Not Loaded</source>
        <translation>外掛程式未載入</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.ui" line="353"/>
        <source>Manually Edit Settings</source>
        <translation>手動編輯設定</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.ui" line="233"/>
        <source>GUI Components</source>
        <translation>圖形元件</translation>
    </message>
    <message>
        <location filename="../src/ui/widgets/windows/w_PluginManager.ui" line="287"/>
        <source>Components</source>
        <translation>元件</translation>
    </message>
</context>
</TS>
