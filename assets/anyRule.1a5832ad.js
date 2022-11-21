import{_ as E,a$ as Z,o as i,L as p,a as l,w as a,F as o,cj as g,M as u,b as A,T as v,b0 as m,b1 as n,a2 as D,cB as y,I as C,U as z,V as k}from"./index.5225add7.js";/* empty css              *//* empty css               */import{_ as S}from"./index.88ce7c47.js";import{F as H}from"./Form.3121af8c.js";import{_ as N}from"./FormItem.2fec0685.js";import"./_arrayIncludesWith.91d14080.js";import"./_baseFindIndex.10ef1a58.js";import"./Col.6da9c2a9.js";import"./responsiveObserve.b8aa4967.js";import"./useFlexGapSupport.08dd27fd.js";import"./toArray.1be0410b.js";import"./get.af123360.js";import"./hasIn.47b3f0c3.js";import"./toInteger.b3f7ff85.js";import"./toFinite.f1c80f15.js";import"./collapseMotion.450b64d3.js";const j=[{title:"\u706B\u8F66\u8F66\u6B21",rule:/^[GCDZTSPKXLY1-9]\d{1,4}$/,examples:["G1868","D102","D9","Z5","Z24","Z17"]},{title:"\u624B\u673A\u673A\u8EAB\u7801(IMEI)",rule:/^\d{15,17}$/,examples:["123456789012345","1234567890123456","12345678901234567"]},{title:"\u5FC5\u987B\u5E26\u7AEF\u53E3\u53F7\u7684\u7F51\u5740(\u6216ip)",rule:/^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/,examples:["https://www.qq.com:8080","127.0.0.1:5050","baidu.com:8001","http://192.168.1.1:9090"],counterExamples:["192.168.1.1","https://www.jd.com"]},{title:'\u7F51\u5740(url,\u652F\u6301\u7AEF\u53E3\u548C"?+\u53C2\u6570"\u548C"#+\u53C2\u6570)',rule:/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,examples:["www.qq.com","https://baidu.com","360.com:8080/vue/#/a=1&b=2"],counterExamples:["...."]},{title:"\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801",rule:/^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/,examples:["91230184MA1BUFLT44","92371000MA3MXH0E3W"]},{title:"\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801(\u5BBD\u677E\u5339\u914D)(15\u4F4D/18\u4F4D/20\u4F4D\u6570\u5B57/\u5B57\u6BCD)",rule:/^(([0-9A-Za-z]{15})|([0-9A-Za-z]{18})|([0-9A-Za-z]{20}))$/,examples:["91110108772551611J","911101085923662400"]},{title:"\u8FC5\u96F7\u94FE\u63A5",rule:/^thunderx?:\/\/[a-zA-Z\d]+=$/,examples:["thunder://QUEsICdtYWduZXQ6P3h0PXVybjpidGloOjBCQTE0RTUxRkUwNjU1RjE0Qzc4NjE4RjY4NDY0QjZFNTEyNjcyOUMnWlo="]},{title:"ed2k\u94FE\u63A5(\u5BBD\u677E\u5339\u914D)",rule:/^ed2k:\/\/\|file\|.+\|\/$/,examples:["ed2k://|file|%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/"]},{title:"\u78C1\u529B\u94FE\u63A5(\u5BBD\u677E\u5339\u914D)",rule:/^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/,examples:["magnet:?xt=urn:btih:40A89A6F4FB1498A98087109D012A9A851FBE0FC"]},{title:"\u5B50\u7F51\u63A9\u7801",rule:/^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/,examples:["255.255.255.0","255.224.0.0"]},{title:'linux"\u9690\u85CF\u6587\u4EF6"\u8DEF\u5F84',rule:/^\/(?:[^/]+\/)*\.[^/]*/,examples:["/usr/ad/.dd","/root/.gitignore","/.gitignore"]},{title:"linux\u6587\u4EF6\u5939\u8DEF\u5F84",rule:/^\/(?:[^/]+\/)*$/,examples:["/usr/ad/dd/","/","/root/"]},{title:"linux\u6587\u4EF6\u8DEF\u5F84",rule:/^\/(?:[^/]+\/)*[^/]+$/,examples:["/root/b.ts","/root/abc"]},{title:'window"\u6587\u4EF6\u5939"\u8DEF\u5F84',rule:/^[a-zA-Z]:\\(?:\w+\\?)*$/,examples:["C:\\Users\\Administrator\\Desktop","e:\\m\\"]},{title:'window\u4E0B"\u6587\u4EF6"\u8DEF\u5F84',rule:/^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/,examples:["C:\\Users\\Administrator\\Desktop\\qq.link","e:\\m\\vscode.exe"]},{title:"\u80A1\u7968\u4EE3\u7801(A\u80A1)",rule:/^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/,examples:["sz000858","SZ002136","sz300675","SH600600","sh601155"]},{title:"\u5927\u4E8E\u7B49\u4E8E0, \u5C0F\u4E8E\u7B49\u4E8E150, \u652F\u6301\u5C0F\u6570\u4F4D\u51FA\u73B05, \u5982145.5, \u7528\u4E8E\u5224\u65AD\u8003\u5377\u5206\u6570",rule:/^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:\.5)?$/,examples:[150,100.5]},{title:"html\u6CE8\u91CA",rule:/^<!--[\s\S]*?-->$/,examples:['<!--<div class="_bubble"></div>-->']},{title:"md5\u683C\u5F0F(32\u4F4D)",rule:/^([a-f\d]{32}|[A-F\d]{32})$/,examples:["21fe181c5bfc16306a6828c1f7b762e8"]},{title:"GUID/UUID",rule:/^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$/i,examples:["e155518c-ca1b-443c-9be9-fe90fdab7345","41E3DAF5-6E37-4BCC-9F8E-0D9521E2AA8D","00000000-0000-0000-0000-000000000000"]},{title:"\u7248\u672C\u53F7(version)\u683C\u5F0F\u5FC5\u987B\u4E3AX.Y.Z",rule:/^\d+(?:\.\d+){2}$/,examples:["16.3.10"]},{title:"\u89C6\u9891(video)\u94FE\u63A5\u5730\u5740\uFF08\u89C6\u9891\u683C\u5F0F\u53EF\u6309\u9700\u589E\u5220\uFF09",rule:/^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i,examples:["http://www.abc.com/video/wc.avi"]},{title:"\u56FE\u7247(image)\u94FE\u63A5\u5730\u5740\uFF08\u56FE\u7247\u683C\u5F0F\u53EF\u6309\u9700\u589E\u5220\uFF09",rule:/^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i,examples:["https://www.abc.com/logo.png"]},{title:"24\u5C0F\u65F6\u5236\u65F6\u95F4\uFF08HH:mm:ss\uFF09",rule:/^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/,examples:["23:34:55"]},{title:"12\u5C0F\u65F6\u5236\u65F6\u95F4\uFF08hh:mm:ss\uFF09",rule:/^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/,examples:["11:34:55"],counterExamples:["23:34:55"]},{title:"base64\u683C\u5F0F",rule:/^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i,examples:["data:image/gif;base64,xxxx=="]},{title:"\u6570\u5B57/\u8D27\u5E01\u91D1\u989D\uFF08\u652F\u6301\u8D1F\u6570\u3001\u5343\u5206\u4F4D\u5206\u9694\u7B26\uFF09",rule:/^-?\d+(,\d{3})*(\.\d{1,2})?$/,examples:[100,-.99,3,234.32,-1,900,235.09,"12,345,678.90"]},{title:"\u6570\u5B57/\u8D27\u5E01\u91D1\u989D (\u53EA\u652F\u6301\u6B63\u6570\u3001\u4E0D\u652F\u6301\u6821\u9A8C\u5343\u5206\u4F4D\u5206\u9694\u7B26)",rule:/(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/,examples:[.99,8.99,666]},{title:"\u94F6\u884C\u5361\u53F7\uFF0810\u523030\u4F4D, \u8986\u76D6\u5BF9\u516C/\u79C1\u8D26\u6237, \u53C2\u8003[\u5FAE\u4FE1\u652F\u4ED8](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)\uFF09",rule:/^[1-9]\d{9,29}$/,examples:["6234567890","6222026006705354217"]},{title:"\u4E2D\u6587\u59D3\u540D",rule:/^(?:[\u4e00-\u9fa5·]{2,16})$/,examples:["\u845B\u4E8C\u86CB","\u51EF\u6587\xB7\u675C\u5170\u7279","\u5FB7\u514B\xB7\u7EF4\u5C14\u7EB3\xB7\u8BFA\u7EF4\u8328\u57FA"]},{title:"\u82F1\u6587\u59D3\u540D",rule:/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,examples:["James","Kevin Wayne Durant","Dirk Nowitzki"]},{title:"\u8F66\u724C\u53F7(\u65B0\u80FD\u6E90)",rule:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](?:((\d{5}[A-HJK])|([A-HJK][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳])$/,examples:["\u4EACAD92035","\u7518G23459F","\u4EACAA92035"]},{title:"\u8F66\u724C\u53F7(\u975E\u65B0\u80FD\u6E90)",rule:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/,examples:["\u4EACA00599","\u9ED1D23908"]},{title:"\u8F66\u724C\u53F7(\u65B0\u80FD\u6E90+\u975E\u65B0\u80FD\u6E90)",rule:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/,examples:["\u4EACA12345D","\u4EACA00599","\u4EACAD92035","\u7518G23459F","\u4EACAA92035"],counterExamples:["\u5B81AD1234555555","\u6D59\u82CFH6F681"]},{title:"\u624B\u673A\u53F7(mobile phone)\u4E2D\u56FD(\u4E25\u8C28), \u6839\u636E\u5DE5\u4FE1\u90E82019\u5E74\u6700\u65B0\u516C\u5E03\u7684\u624B\u673A\u53F7\u6BB5",rule:/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,examples:["008618311006933","+8617888829981","19119255642"]},{title:"\u624B\u673A\u53F7(mobile phone)\u4E2D\u56FD(\u5BBD\u677E), \u53EA\u8981\u662F13,14,15,16,17,18,19\u5F00\u5934\u5373\u53EF",rule:/^(?:(?:\+|00)86)?1[3-9]\d{9}$/,examples:["008618311006933","+8617888829981","19119255642"]},{title:"\u624B\u673A\u53F7(mobile phone)\u4E2D\u56FD(\u6700\u5BBD\u677E), \u53EA\u8981\u662F1\u5F00\u5934\u5373\u53EF, \u5982\u679C\u4F60\u7684\u624B\u673A\u53F7\u662F\u7528\u6765\u63A5\u6536\u77ED\u4FE1, \u4F18\u5148\u5EFA\u8BAE\u9009\u62E9\u8FD9\u4E00\u6761",rule:/^(?:(?:\+|00)86)?1\d{10}$/,examples:["008618311006933","+8617888829981","19119255642"]},{title:"date(\u65E5\u671F)",rule:/^\d{1,4}(-)(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31)$/,examples:["1990-12-12","1-1-1","0000-1-1"],counterExamples:["2020-00-01"]},{title:"email(\u90AE\u7BB1)",rule:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,examples:["90203918@qq.com","nbilly@126.com"]},{title:"\u5EA7\u673A(tel phone)\u7535\u8BDD(\u56FD\u5185),\u5982: 0341-86091234",rule:/^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/,examples:["0936-4211235","89076543","010-12345678-1234"]},{title:"\u8EAB\u4EFD\u8BC1\u53F7(1\u4EE3,15\u4F4D\u6570\u5B57)",rule:/^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/,examples:["123456991010193"]},{title:"\u8EAB\u4EFD\u8BC1\u53F7(2\u4EE3,18\u4F4D\u6570\u5B57),\u6700\u540E\u4E00\u4F4D\u662F\u6821\u9A8C\u4F4D,\u53EF\u80FD\u4E3A\u6570\u5B57\u6216\u5B57\u7B26X",rule:/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,examples:["12345619991205131x"]},{title:"\u8EAB\u4EFD\u8BC1\u53F7, \u652F\u63011/2\u4EE3(15\u4F4D/18\u4F4D\u6570\u5B57)",rule:/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,examples:["622223199912051311"]},{title:"\u62A4\u7167\uFF08\u5305\u542B\u9999\u6E2F\u3001\u6FB3\u95E8\uFF09",rule:/(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/,examples:["s28233515","141234567","159203084","MA1234567","K25345719"]},{title:"\u5E10\u53F7\u662F\u5426\u5408\u6CD5(\u5B57\u6BCD\u5F00\u5934\uFF0C\u5141\u8BB85-16\u5B57\u8282\uFF0C\u5141\u8BB8\u5B57\u6BCD\u6570\u5B57\u4E0B\u5212\u7EBF\u7EC4\u5408",rule:/^[a-zA-Z]\w{4,15}$/,examples:["justin","justin1989","justin_666"]},{title:"\u4E2D\u6587/\u6C49\u5B57",rule:/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/,examples:["\u6B63\u5219","\u524D\u7AEF"]},{title:"\u5C0F\u6570",rule:/^\d+\.\d+$/,examples:["0.0","0.09"]},{title:"\u6570\u5B57",rule:/^\d{1,}$/,examples:[12345678]},{title:"html\u6807\u7B7E(\u5BBD\u677E\u5339\u914D)",rule:/<(\w+)[^>]*>(.*?<\/\1>)?/,examples:['<div id="app"> 2333 </div>','<input type="text">',"<br>"]},{title:"qq\u53F7\u683C\u5F0F\u6B63\u786E",rule:/^[1-9][0-9]{4,10}$/,examples:[903013545,9020304]},{title:"\u6570\u5B57\u548C\u5B57\u6BCD\u7EC4\u6210",rule:/^[A-Za-z0-9]+$/,examples:["james666","haha233hi"]},{title:"\u82F1\u6587\u5B57\u6BCD",rule:/^[a-zA-Z]+$/,examples:["Russel"]},{title:"\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD\u7EC4\u6210",rule:/^[a-z]+$/,examples:["russel"]},{title:"\u5927\u5199\u82F1\u6587\u5B57\u6BCD",rule:/^[A-Z]+$/,examples:["ABC","KD"]},{title:"\u5BC6\u7801\u5F3A\u5EA6\u6821\u9A8C\uFF0C\u6700\u5C116\u4F4D\uFF0C\u5305\u62EC\u81F3\u5C111\u4E2A\u5927\u5199\u5B57\u6BCD\uFF0C1\u4E2A\u5C0F\u5199\u5B57\u6BCD\uFF0C1\u4E2A\u6570\u5B57\uFF0C1\u4E2A\u7279\u6B8A\u5B57\u7B26",rule:/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,examples:["Kd@curry666"]},{title:"\u7528\u6237\u540D\u6821\u9A8C\uFF0C4\u523016\u4F4D\uFF08\u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C\u4E0B\u5212\u7EBF\uFF0C\u51CF\u53F7\uFF09",rule:/^[a-zA-Z0-9_-]{4,16}$/,examples:["xiaohua_qq"]},{title:"ip-v4[:\u7AEF\u53E3]",rule:/^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/,examples:["172.16.0.0","172.16.0.0:8080","127.0.0.0","127.0.0.0:998"]},{title:"ip-v6[:\u7AEF\u53E3]",rule:/^(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))|\[(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))\](?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/i,examples:["2031:0000:130f:0000:0000:09c0:876a:130b","[2031:0000:130f:0000:0000:09c0:876a:130b]:8080"]},{title:"16\u8FDB\u5236\u989C\u8272",rule:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,examples:["#f00","#F90","#000","#fe9de8"]},{title:"\u5FAE\u4FE1\u53F7(wx)\uFF0C6\u81F320\u4F4D\uFF0C\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C\u51CF\u53F7\uFF0C\u4E0B\u5212\u7EBF",rule:/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/,examples:["github666","kd_-666"]},{title:"\u90AE\u653F\u7F16\u7801(\u4E2D\u56FD)",rule:/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,examples:["734500","100101"]},{title:"\u4E2D\u6587\u548C\u6570\u5B57",rule:/^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/,examples:["\u54C8\u54C8\u54C8","\u4F60\u597D6\u554A"]},{title:"\u4E0D\u80FD\u5305\u542B\u5B57\u6BCD",rule:/^[^A-Za-z]*$/,examples:["\u4F60\u597D6\u554A","@\xA5()\uFF01"]},{title:"java\u5305\u540D",rule:/^([a-zA-Z_]\w*)+([.][a-zA-Z_]\w*)+$/,examples:["com.bbb.name"]},{title:"mac\u5730\u5740",rule:/^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i,examples:["38:f9:d3:4b:f5:51","00-0C-29-CA-E4-66"]},{title:"\u5339\u914D\u8FDE\u7EED\u91CD\u590D\u7684\u5B57\u7B26",rule:/(.)\1+/,examples:["\u6211\u6211\u6211","112233","11234"]},{title:"\u6570\u5B57\u548C\u82F1\u6587\u5B57\u6BCD\u7EC4\u6210\uFF0C\u5E76\u4E14\u540C\u65F6\u542B\u6709\u6570\u5B57\u548C\u82F1\u6587\u5B57\u6BCD",rule:/^(?=.*[a-zA-Z])(?=.*\d).+$/,examples:["\u6211a\u62111\u6211","a\u5BF91"]},{title:"\u9999\u6E2F\u8EAB\u4EFD\u8BC1 ",rule:/^[a-zA-Z]\d{6}\([\dA]\)$/,examples:["K034169(1)"]},{title:"\u6FB3\u95E8\u8EAB\u4EFD\u8BC1 ",rule:/^[1|5|7]\d{6}[(\d)]{3}$/,examples:["5686611(1)"]},{title:"\u53F0\u6E7E\u8EAB\u4EFD\u8BC1 ",rule:/^[a-zA-Z][0-9]{9}$/,examples:["U193683453"]}];const U={name:"AnyRule",data:()=>({rules:[],keyword:"",dict:{}}),computed:{isShow(){return e=>e.title.includes(this.keyword)}},mounted(){this.rules=Object.freeze(j.map(e=>(e.key=Z(),e.test="",e.status="",this.dict[e.key]=e,e)))},methods:{async validator(e){if(e&&e.field&&this.dict[e.field]){const{rule:s,test:r}=this.dict[e.field];if(r!==""&&!s.test(r))throw new Error("\u4E0D\u901A\u8FC7")}}}},_=e=>(z("data-v-4559e45c"),e=e(),k(),e),P=_(()=>u("strong",null,"\u641C\u7D22",-1)),B=_(()=>u("strong",null,"\u53CD\u9988",-1));function J(e,s,r,q,I,d){const F=y,f=g,x=C,c=N,$=S,b=H;return i(),p(o,null,[l(f,null,{default:a(()=>[u("blockquote",null,[A(" \u6B63\u5219\u6570\u636E\u6765\u6E90\uFF1A"),l(F,{href:"https://any86.github.io/any-rule/",target:"_blank"},{default:a(()=>[A(" \u6B63\u5219\u5927\u5168 ")]),_:1})])]),_:1}),l(b,{layout:"vertical"},{default:a(()=>[l(c,null,{label:a(()=>[P]),default:a(()=>[l(x,{value:e.keyword,"onUpdate:value":s[0]||(s[0]=t=>e.keyword=t),placeholder:"\u641C\u7D22\u5173\u952E\u8BCD\uFF0C\u5982'\u624B\u673A'"},null,8,["value"])]),_:1}),(i(!0),p(o,null,v(e.rules,(t,h)=>(i(),p(o,{key:h},[m(l($,null,null,512),[[n,d.isShow(t)]]),m(l(c,{rules:{trigger:["change","blur"],validator:d.validator},"has-feedback":"",name:t.key},{label:a(()=>[u("strong",null,D(t.title),1),A("\xA0"),l(F,{href:"https://github.com/any86/any-rule/issues/new?title=\u6211\u6709\u66F4\u597D\u7684\u6B63\u5219: "+t.title,target:"_blank"},{default:a(()=>[B]),_:2},1032,["href"])]),default:a(()=>[l(x,{value:t.test,"onUpdate:value":w=>t.test=w,placeholder:"\u4F8B\u5982: "+t.examples.join(", ")+(t.counterExamples?"; \u53CD\u4F8B: "+t.counterExamples.join(", "):"")},null,8,["value","onUpdate:value","placeholder"])]),_:2},1032,["rules","name"]),[[n,d.isShow(t)]]),m(l(f,{copyable:{text:t.rule.toString()}},{default:a(()=>[u("pre",null,D(t.rule.toString()),1)]),_:2},1032,["copyable"]),[[n,d.isShow(t)]])],64))),128))]),_:1})],64)}const s0=E(U,[["render",J],["__scopeId","data-v-4559e45c"]]);export{s0 as default};
