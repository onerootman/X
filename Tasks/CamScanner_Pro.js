/*

[Script]
# > 全能扫描王 SVIP (ap*.intsig.net)
全能扫描王 SVIP = type=http-response, pattern=^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\?, requires-body=1, max-size=-1, script-path=https://raw.githubusercontent.com/onerootman/X/main/Tasks/CamScanner_Pro.js

[MITM]
hostname = %APPEND% ap*.intsig.net

*/

let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry":"3895862400"}}};
$done({body: JSON.stringify(obj)});
