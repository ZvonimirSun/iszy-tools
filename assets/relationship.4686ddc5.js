import{as as O,T as S,ac as I,$ as F,af as G,aa as z,s as D,u as o,aG as U,ad as A,r as _,o as N,f as d,a as h,g as V,p as q,b as E,E as t}from"./vendor.34948a01.js";/* empty css               *//* empty css                *//* empty css               *//* empty css                *//* empty css               */import{_ as H}from"./index.cee1046b.js";var R={exports:{}};(function(r){(function(x,v){r.exports?r.exports=v():x.relationship=v()})(typeof window!="undefined"?window:O,function(){function x(e){e=e.replace(/[二|三|四|五|六|七|八|九|十]{1,2}/g,"x");for(var s=e.split("\u7684"),l=[],m=!0;s.length;){var w=s.shift(),f=[],u=!1;for(var n in p){var b=p[n];b.indexOf(w)>-1&&(!n&&s.length||f.push(n),u=!0)}if(u||(m=!1),l.length){for(var a=[],n=0;n<l.length;n++)for(var $=0;$<f.length;$++)a.push(l[n]+","+f[$]);l=a}else for(var n=0;n<f.length;n++)l.push(","+f[n])}return m?l:[]}function v(e,s){var l=[],m={};s<0&&(e.indexOf(",w")==0?s=1:e.indexOf(",h")==0&&(s=0)),s>-1&&(e=","+s+e);var w=function(f){var u="";if(!m[f]){m[f]=!0;var n=!0;do{u=f;for(var b in y){var a=y[b];if(f=f.replace(a.exp,a.str),f.indexOf("#")>-1){for(var $=f.split("#"),b=0;b<$.length;b++)w($[b]);n=!1;break}}}while(u!=f);n&&(f=f.replace(/,[01]/,"").substr(1),l.push(f))}};return w(e),l}function g(e){var s=[],l=/&[olx]/g;for(var m in p)m.replace(l,"")==e&&s.push(p[m]);return s}function B(e,s){var l={f:["d","s"],m:["d","s"],h:["w",""],w:["","h"],s:["m","f"],d:["m","f"],lb:["os","ob"],ob:["ls","lb"],xb:["xs","xb"],ls:["os","ob"],os:["ls","lb"],xs:["xs","xb"]},m="";if(e.indexOf("&o")>-1?m="&l":e.indexOf("&l")>-1&&(m="&o"),e){e=e.replace(/&[ol]/g,""),s=s?1:0;var w=(","+s+","+e).replace(/,[fhs]|,[olx]b/g,",1").replace(/,[mwd]|,[olx]s/g,",0");w=w.substring(0,w.lastIndexOf(","));for(var f=e.split(",").reverse(),u=w.split(",").reverse(),n=[],b=0;b<f.length;b++)n.push(l[f[b]][u[b]]);return n.join(",")+m}return""}function i(e){for(var s=e.split(","),l=[],m=0;m<s.length;m++){var w=s[m].replace(/&[ol]/,"");l.push(p[w][0])}return l.join("\u7684")}function c(e){var s={text:"",sex:-1,type:"default",reverse:!1};for(var l in e)s[l]=e[l];for(var m=x(s.text),w=[],f=0;f<m.length;f++)for(var u=v(m[f],s.sex),n=0;n<u.length;n++){var b=u[n];if(s.type=="chain"){var a=i(b);a&&w.push(a)}else if(s.reverse&&(b=B(b,s.sex)),p[b])w.push(p[b][0]);else{var a=g(b);if(a.length||(b=b.replace(/&[ol]/g,""),a=g(b)),a.length||(b=b.replace(/[ol]/g,"x"),a=g(b)),!a.length){var $=b.replace(/x/g,"l");a=g($);var T=b.replace(/x/g,"o");a=a.concat(g(T))}for(var j=0;j<a.length;j++)w.push(a[j][0])}}return C(w)}var y=[{exp:/^(.+)&o([^#]+)&l/g,str:"$1$2"},{exp:/^(.+)&l([^#]+)&o/g,str:"$1$2"},{exp:/(,[ds],(.+),[ds])&[ol]/g,str:"$1"},{exp:/m,h/g,str:"f"},{exp:/f,w/g,str:"m"},{exp:/,[xol][sb](,[mf])/g,str:"$1"},{exp:/,[mf],d&([ol])/,str:",$1s"},{exp:/,[mf],s&([ol])/,str:",$1b"},{exp:/^(.*)(,[fh1]|[xol]b),[mf],s(.*)$/,str:"$1$2,xb$3#$1$2$3"},{exp:/^(.*)(,[mw0]|[xol]s),[mf],d(.*)$/,str:"$1$2,xs$3#$1$2$3"},{exp:/(,[mw0]|[xol]s),[mf],s/,str:"$1,xb"},{exp:/(,[fh1]|[xol]b),[mf],d/,str:"$1,xs"},{exp:/^,[mf],s(.+)?$/,str:",1$1#,xb$1"},{exp:/^,[mf],d(.+)?$/,str:",0$1#,xs$1"},{exp:/(,o[sb])+(,o[sb])/,str:"$2"},{exp:/(,l[sb])+(,l[sb])/,str:"$2"},{exp:/^(.*)(,[fh1])(,[olx][sb])+,[olx]b(.*)$/,str:"$1$2,xb$4#$1$2$4"},{exp:/^(.*)(,[mw0])(,[olx][sb])+,[olx]s(.*)$/,str:"$1$2,xs$4#$1$2$4"},{exp:/(,[fh1])(,[olx][sb])+,[olx]s/g,str:"$1,xs"},{exp:/(,[mw0])(,[olx][sb])+,[olx]b/g,str:"$1,xb"},{exp:/^,[olx][sb],[olx]b(.+)?$/,str:"$1#,xb$1"},{exp:/^,[olx][sb],[olx]s(.+)?$/,str:"$1#,xs$1"},{exp:/^,x([sb])$/,str:",o$1#,l$1"},{exp:/,[ds]&o,ob/g,str:",s&o"},{exp:/,[ds]&o,os/g,str:",d&o"},{exp:/,[ds]&l,lb/g,str:",s&l"},{exp:/,[ds]&l,ls/g,str:",d&l"},{exp:/,[ds](&[ol])?,[olx]s/g,str:",d"},{exp:/,[ds](&[ol])?,[olx]b/g,str:",s"},{exp:/(,[mwd0](&[ol])?|[olx]s),[ds](&[ol])?,m/g,str:"$1"},{exp:/(,[mwd0](&[ol])?|[olx]s),[ds](&[ol])?,f/g,str:"$1,h"},{exp:/(,[fhs1](&[ol])?|[olx]b),[ds](&[ol])?,f/g,str:"$1"},{exp:/(,[fhs1](&[ol])?|[olx]b),[ds](&[ol])?,m/g,str:"$1,w"},{exp:/^,[ds],m(.+)?$/,str:"$1#,w$1"},{exp:/^,[ds],f(.+)?$/,str:"$1#,h$1"},{exp:/,[wh](,[ds])/g,str:"$1"},{exp:/,w,h|,h,w/g,str:""}],p={"":["\u81EA\u5DF1","\u6211"],f:["\u7238\u7238","\u7236\u4EB2","\u963F\u7238","\u8001\u7238","\u8001\u7AA6","\u7239","\u7239\u7239","\u7239\u5730","\u7239\u5572","\u8001\u7237\u5B50"],"f,f":["\u7237\u7237","\u7956\u7236","\u963F\u7237","\u5976\u7237"],"f,f,f":["\u66FE\u7956\u7236","\u592A\u7237","\u592A\u7237\u7237","\u592A\u516C","\u7956\u516C","\u7956\u5976\u7237"],"f,f,f,f":["\u9AD8\u7956\u7236","\u8001\u592A\u7237"],"f,f,f,f,ob":["\u4F2F\u9AD8\u7956\u7236"],"f,f,f,f,lb":["\u53D4\u9AD8\u7956\u7236"],"f,f,f,m":["\u9AD8\u7956\u6BCD","\u8001\u592A\u592A"],"f,f,f,ob":["\u4F2F\u66FD\u7956\u7236","\u66FE\u4F2F\u7956\u7236","\u4F2F\u516C\u592A"],"f,f,f,ob,w":["\u53D4\u66FD\u7956\u6BCD","\u66FE\u4F2F\u7956\u6BCD","\u4F2F\u5A46\u592A"],"f,f,f,lb":["\u4F2F\u66FD\u7956\u7236","\u66FE\u53D4\u7956\u7236","\u53D4\u516C\u592A"],"f,f,f,lb,w":["\u53D4\u66FD\u7956\u6BCD","\u66FE\u53D4\u7956\u6BCD","\u53D4\u5A46\u592A"],"f,f,f,xb,s&o":["\u5802\u4F2F\u7956\u7236"],"f,f,f,xb,s&o,w":["\u5802\u4F2F\u7956\u6BCD"],"f,f,f,xb,s&l":["\u5802\u53D4\u7956\u7236"],"f,f,f,xb,s&l,w":["\u5802\u53D4\u7956\u6BCD"],"f,f,f,xb,s,s&o":["\u4ECE\u4F2F\u7236"],"f,f,f,xb,s,s&o,w":["\u4ECE\u4F2F\u6BCD"],"f,f,f,xb,s,s&l":["\u4ECE\u53D4\u7236"],"f,f,f,xb,s,s&l,w":["\u4ECE\u53D4\u6BCD"],"f,f,f,xb,s,s,s&o":["\u65CF\u5144"],"f,f,f,xb,s,s,s&l":["\u65CF\u5F1F"],"f,f,f,xs":["\u592A\u59D1\u5A46","\u59D1\u5A46\u592A","\u66FE\u7956\u59D1\u6BCD"],"f,f,f,xs,h":["\u592A\u59D1\u4E08\u516C","\u59D1\u4E08\u516C\u592A","\u66FE\u7956\u59D1\u4E08"],"f,f,f,xs,s&o":["\u8868\u4F2F\u7956\u7236"],"f,f,f,xs,s&o,w":["\u8868\u4F2F\u7956\u6BCD"],"f,f,f,xs,s&l":["\u8868\u53D4\u7956\u7236"],"f,f,f,xs,s&l,w":["\u8868\u53D4\u7956\u6BCD"],"f,f,m":["\u66FE\u7956\u6BCD","\u592A\u5976\u5976","\u592A\u5A46","\u7956\u5A46","\u7956\u5976\u5976"],"f,f,m,xb":["\u592A\u8205\u516C","\u592A\u8205\u7237"],"f,f,m,xb,w":["\u592A\u8205\u5A46"],"f,f,m,xb,s&o":["\u8868\u4F2F\u7956\u7236"],"f,f,m,xb,s&o,w":["\u8868\u4F2F\u7956\u6BCD"],"f,f,m,xb,s&l":["\u8868\u53D4\u7956\u7236"],"f,f,m,xb,s&l,w":["\u8868\u53D4\u7956\u6BCD"],"f,f,m,xs":["\u592A\u59E8\u5976","\u66FE\u59E8\u5976\u5976"],"f,f,m,xs,h":["\u592A\u59E8\u7237"],"f,f,m,xs,s&o":["\u8868\u4F2F\u7956\u7236"],"f,f,m,xs,s&o,w":["\u8868\u4F2F\u7956\u6BCD"],"f,f,m,xs,s&l":["\u8868\u53D4\u7956\u7236"],"f,f,m,xs,s&l,w":["\u8868\u53D4\u7956\u6BCD"],"f,f,xb":["\u5802\u7956\u7236","x\u7237\u7237"],"f,f,xb,w":["\u5802\u7956\u6BCD"],"f,f,xb,s&o":["\u5802\u4F2F","\u5802\u4F2F\u7236"],"f,f,xb,s&o,w":["\u5802\u4F2F\u6BCD"],"f,f,xb,s&l":["\u5802\u53D4"],"f,f,xb,s,w":["\u5802\u5A76","\u5802\u53D4\u6BCD","\u5802\u5A76\u6BCD"],"f,f,xb,s,s&o":["\u4ECE\u5144","\u4ECE\u5144\u5F1F"],"f,f,xb,s,s&o,w":["\u4ECE\u5AC2"],"f,f,xb,s,s&l":["\u4ECE\u5F1F","\u4ECE\u5144\u5F1F"],"f,f,xb,s,s&l,w":["\u4ECE\u5F1F\u59B9"],"f,f,xb,s,s,s":["\u4ECE\u4F84","\u4ECE\u4F84\u5B50"],"f,f,xb,s,s,s,w":["\u4ECE\u4F84\u5AB3\u5987"],"f,f,xb,s,s,s,s":["\u4ECE\u4F84\u5B59"],"f,f,xb,s,s,s,d":["\u4ECE\u4F84\u5B59\u5973"],"f,f,xb,s,s,d":["\u4ECE\u4F84\u5973"],"f,f,xb,s,s,d,h":["\u4ECE\u4F84\u5973\u5A7F"],"f,f,xb,s,d&o":["\u4ECE\u59D0","\u4ECE\u59D0\u59B9"],"f,f,xb,s,d&o,h":["\u4ECE\u59D0\u592B"],"f,f,xb,s,d&l":["\u4ECE\u59B9","\u4ECE\u59D0\u59B9"],"f,f,xb,s,d&l,h":["\u4ECE\u59B9\u592B"],"f,f,xb,d":["\u5802\u59D1"],"f,f,xb,d,h":["\u5802\u59D1\u4E08"],"f,f,ob":["\u4F2F\u7956\u7236","\u4F2F\u516C","\u5927\u7237\u7237","\u5927\u7237","\u5802\u7956\u7236","\u4F2F\u7237\u7237","\u4F2F\u8001\u7237"],"f,f,ob,w":["\u4F2F\u7956\u6BCD","\u4F2F\u5A46","\u5927\u5976\u5976","\u5802\u7956\u6BCD"],"f,f,lb":["\u53D4\u7956\u7236","\u53D4\u516C","\u5C0F\u7237\u7237","\u5802\u7956\u7236","\u53D4\u7237\u7237","\u53D4\u8001\u7237"],"f,f,lb,w":["\u53D4\u7956\u6BCD","\u53D4\u5A46","\u5C0F\u5976\u5976","\u5802\u7956\u6BCD","\u53D4\u5976\u5976"],"f,f,xs":["\u59D1\u5A46","\u59D1\u7956\u6BCD","\u7956\u59D1\u6BCD","\u59D1\u5976\u5976"],"f,f,xs,h":["\u59D1\u4E08\u516C","\u59D1\u7956\u7236","\u7956\u59D1\u4E08","\u59D1\u7237\u7237","\u59D1\u5976\u7237","\u59D1\u8001\u7237"],"f,f,xs,s&o":["\u8868\u4F2F","\u8868\u4F2F\u7236"],"f,f,xs,s&o,w":["\u8868\u4F2F\u6BCD"],"f,f,xs,s&l":["\u8868\u53D4","\u8868\u53D4\u7236"],"f,f,xs,s&l,w":["\u8868\u5A76","\u8868\u53D4\u6BCD"],"f,f,xs,d":["\u8868\u59D1"],"f,f,xs,d,h":["\u8868\u59D1\u4E08"],"f,m":["\u5976\u5976","\u7956\u6BCD","\u963F\u5AF2","\u5AF2\u5AF2"],"f,m,f":["\u66FE\u5916\u7956\u7236","\u5916\u592A\u516C"],"f,m,m":["\u66FE\u5916\u7956\u6BCD","\u5916\u592A\u5A46"],"f,m,xb":["\u8205\u516C","\u8205\u8001\u7237","\u8205\u7237\u7237","\u8205\u7237","\u8205\u7956","\u8205\u5976\u7237","\u8205\u7956\u7236","\u592A\u8205\u7236"],"f,m,xb,w":["\u8205\u5A46","\u8205\u5976\u5976","\u8205\u7956\u6BCD","\u5997\u5A46","\u592A\u8205\u6BCD"],"f,m,xb,s&o":["\u8868\u4F2F","\u8868\u4F2F\u7236"],"f,m,xb,s&o,w":["\u8868\u4F2F\u6BCD"],"f,m,xb,s&l":["\u8868\u53D4","\u8868\u53D4\u7236"],"f,m,xb,s&l,w":["\u8868\u5A76","\u8868\u53D4\u6BCD"],"f,m,xb,d":["\u8868\u59D1"],"f,m,xb,d,h":["\u8868\u59D1\u4E08"],"f,m,xs":["\u59E8\u5A46","\u59E8\u5976\u5976","\u59E8\u7956\u7236"],"f,m,xs,h":["\u59E8\u4E08\u516C","\u59E8\u7237\u7237","\u59E8\u7956\u6BCD","\u59E8\u7237","\u59E8\u8001\u7237","\u59E8\u5976\u7237"],"f,m,xs,s&o":["\u8868\u4F2F","\u8868\u4F2F\u7236"],"f,m,xs,s&o,w":["\u8868\u4F2F\u6BCD"],"f,m,xs,s&l":["\u8868\u53D4","\u8868\u53D4\u7236"],"f,m,xs,s&l,w":["\u8868\u5A76","\u8868\u53D4\u6BCD"],"f,m,xs,d":["\u8868\u59D1"],"f,m,xs,d,h":["\u8868\u59D1\u4E08"],"f,xb,s&o":["\u5802\u54E5","\u5802\u5144"],"f,xb,s&o,w":["\u5802\u5AC2"],"f,xb,s&l":["\u5802\u5F1F"],"f,xb,s&l,w":["\u5802\u5F1F\u5AB3"],"f,xb,s,s":["\u5802\u4F84","\u5802\u4F84\u5B50"],"f,xb,s,s,w":["\u5802\u4F84\u5AB3\u5987"],"f,xb,s,s,s":["\u5802\u4F84\u5B59"],"f,xb,s,s,s,w":["\u5802\u4F84\u5B59\u5AB3\u5987"],"f,xb,s,s,d":["\u5802\u4F84\u5B59\u5973"],"f,xb,s,s,d,h":["\u5802\u4F84\u5B59\u5973\u5A7F"],"f,xb,s,d":["\u5802\u4F84\u5973"],"f,xb,s,d,h":["\u5802\u4F84\u5973\u5A7F"],"f,xb,d&o":["\u5802\u59D0"],"f,xb,d&o,h":["\u5802\u59D0\u592B"],"f,xb,d&l":["\u5802\u59B9"],"f,xb,d&l,h":["\u5802\u59B9\u592B"],"f,xb,d,s":["\u5802\u5916\u7525"],"f,xb,d,d":["\u5802\u5916\u7525\u5973"],"f,ob":["\u4F2F\u7236","\u4F2F\u4F2F","\u5927\u4F2F","x\u4F2F"],"f,ob,w":["\u4F2F\u6BCD","\u5927\u5A18"],"f,lb":["\u53D4\u53D4","\u53D4\u7236","\u963F\u53D4","\u53D4","\u4EF2\u7236","x\u53D4"],"f,lb,w":["\u5A76\u5A76","\u5A76\u6BCD","\u963F\u5A76","\u5BB6\u5A76","\u5A76","\u5B63\u6BCD"],"f,xs":["\u59D1\u5988","\u59D1\u6BCD","\u59D1\u59D1","\u59D1"],"f,xs,h":["\u59D1\u4E08","\u59D1\u7236","\u59D1\u592B"],"f,xs,s&o":["\u8868\u54E5(\u59D1\u5BB6)","\u8868\u54E5"],"f,xs,s&o,w":["\u8868\u5AC2(\u59D1\u5BB6)","\u8868\u5AC2"],"f,xs,s&l":["\u8868\u5F1F(\u59D1\u5BB6)","\u8868\u5F1F"],"f,xs,s&l,w":["\u8868\u5F1F\u5AB3(\u59D1\u5BB6)","\u8868\u5F1F\u5AB3"],"f,xs,s,s":["\u8868\u4F84\u5B50"],"f,xs,s,s,s":["\u8868\u4F84\u5B59"],"f,xs,s,s,s,w":["\u8868\u4F84\u5B59\u5AB3\u5987"],"f,xs,s,s,d":["\u8868\u4F84\u5B59\u5973"],"f,xs,s,s,d,h":["\u8868\u4F84\u5B59\u5973\u5A7F"],"f,xs,s,d":["\u8868\u4F84\u5973"],"f,xs,s,d,s":["\u5916\u8868\u4F84\u5B59"],"f,xs,s,d,s,w":["\u5916\u8868\u4F84\u5B59\u5AB3\u5987"],"f,xs,s,d,d":["\u5916\u8868\u4F84\u5B59\u5973"],"f,xs,s,d,d,h":["\u5916\u8868\u4F84\u5B59\u5973\u5A7F"],"f,xs,d&o":["\u8868\u59D0(\u59D1\u5BB6)","\u8868\u59D0"],"f,xs,d&o,h":["\u8868\u59D0\u592B(\u59D1\u5BB6)","\u8868\u59D0\u592B","\u8868\u59D0\u4E08"],"f,xs,d&l":["\u8868\u59B9(\u59D1\u5BB6)","\u8868\u59B9"],"f,xs,d&l,h":["\u8868\u59B9\u592B(\u59D1\u5BB6)","\u8868\u59B9\u592B"],"f,xs,d,s":["\u8868\u5916\u7525"],"f,xs,d,d":["\u8868\u5916\u7525\u5973"],"f,os":["\u59D1\u6BCD"],"f,ls":["\u59D1\u59D0"],m:["\u5988\u5988","\u6BCD\u4EB2","\u8001\u5988","\u963F\u5988","\u8001\u6BCD","\u8001\u5988\u5B50","\u5A18","\u5A18\u4EB2","\u5988\u54AA"],"m,f":["\u5916\u516C","\u59E5\u7237","\u963F\u516C"],"m,f,f":["\u5916\u66FE\u7956\u7236","\u5916\u592A\u7956\u7236","\u592A\u5916\u7956\u7236","\u592A\u59E5\u7237","\u5916\u592A\u516C"],"m,f,f,xb":["\u5916\u592A\u4F2F\u516C"],"m,f,f,xb,w":["\u5916\u592A\u4F2F\u6BCD"],"m,f,f,xs":["\u5916\u592A\u59D1\u5A46"],"m,f,f,xs,h":["\u5916\u592A\u59D1\u4E08\u516C"],"m,f,f,xs,s&o":["\u5916\u8868\u4F2F\u7956\u7236"],"m,f,f,xs,s&o,w":["\u5916\u8868\u4F2F\u7956\u6BCD"],"m,f,f,xs,s&l":["\u5916\u8868\u53D4\u7956\u7236"],"m,f,f,xs,s&l,w":["\u5916\u8868\u53D4\u7956\u6BCD"],"m,f,m":["\u5916\u66FE\u7956\u6BCD","\u5916\u592A\u7956\u6BCD","\u592A\u5916\u7956\u6BCD","\u592A\u59E5\u59E5","\u5916\u592A\u5A46"],"m,f,m,xb":["\u5916\u592A\u8205\u516C"],"m,f,m,xb,w":["\u5916\u592A\u8205\u6BCD","\u5916\u592A\u8205\u5A46"],"m,f,m,xs":["\u5916\u592A\u59E8\u5A46"],"m,f,m,xs,h":["\u5916\u592A\u59D1\u59E8\u516C"],"m,f,xb":["\u5C0F\u59E5\u7237","x\u59E5\u7237"],"m,f,xb,s":["\u5802\u8205","\u5802\u8205\u7236"],"m,f,xb,s,w":["\u5802\u8205\u5988","\u5802\u8205\u6BCD"],"m,f,xb,d":["\u5802\u59E8"],"m,f,xb,d,h":["\u5802\u59E8\u4E08"],"m,f,ob":["\u5916\u4F2F\u7956\u7236","\u4F2F\u59E5\u7237","\u5927\u59E5\u7237","\u5916\u4F2F\u7956"],"m,f,ob,w":["\u5916\u4F2F\u7956\u6BCD","\u4F2F\u59E5\u59E5","\u5927\u59E5\u59E5","\u5916\u59C6\u5A46"],"m,f,lb":["\u5916\u53D4\u7956\u7236","\u53D4\u59E5\u7237","\u5C0F\u59E5\u7237","\u5916\u53D4\u7956"],"m,f,lb,w":["\u5916\u53D4\u7956\u6BCD","\u53D4\u59E5\u59E5","\u5C0F\u59E5\u59E5","\u5916\u59C6\u5A46"],"m,f,xs":["\u5916\u59D1\u7956\u6BCD","\u59D1\u59E5\u59E5","\u5916\u592A\u59D1\u6BCD"],"m,f,xs,h":["\u5916\u59D1\u7956\u7236","\u59D1\u59E5\u7237","\u5916\u592A\u59D1\u7236"],"m,f,xs,s":["\u8868\u8205","\u8868\u8205\u7236"],"m,f,xs,s,w":["\u8868\u8205\u5988","\u8868\u8205\u6BCD"],"m,f,xs,d":["\u8868\u59E8","\u8868\u59E8\u6BCD","\u8868\u59E8\u5988","\u8868\u963F\u59E8"],"m,f,xs,d,h":["\u8868\u59E8\u4E08","\u8868\u59E8\u7236"],"m,m":["\u5916\u5A46","\u59E5\u59E5","\u963F\u5A46"],"m,m,f":["\u5916\u66FE\u5916\u7956\u7236","\u5916\u592A\u5916\u516C","\u592A\u59E5\u7237"],"m,m,m":["\u5916\u66FE\u5916\u7956\u6BCD","\u5916\u592A\u5916\u5A46","\u592A\u59E5\u59E5"],"m,m,xb":["\u5916\u8205\u516C","\u5916\u8205\u7956\u7236","\u8205\u59E5\u7237","\u8205\u5916\u7956\u7236","\u8205\u5916\u516C","\u8205\u516C"],"m,m,xb,w":["\u5916\u8205\u5A46","\u5916\u8205\u7956\u6BCD","\u8205\u59E5\u59E5"],"m,m,xb,s":["\u8868\u8205","\u8868\u8205\u7236"],"m,m,xb,s,w":["\u8868\u8205\u5988","\u8868\u8205\u6BCD"],"m,m,xb,d":["\u8868\u59E8","\u8868\u59E8\u6BCD","\u8868\u59E8\u5988","\u8868\u963F\u59E8"],"m,m,xb,d,h":["\u8868\u59E8\u4E08","\u8868\u59E8\u7236"],"m,m,xs":["\u5916\u59E8\u5A46","\u5916\u59E8\u7956\u6BCD","\u59E8\u59E5\u59E5","\u59E8\u5A46"],"m,m,xs,h":["\u5916\u59E8\u4E08\u516C","\u5916\u59E8\u7956\u7236","\u59E8\u59E5\u7237"],"m,m,xs,s":["\u8868\u8205","\u8868\u8205\u7236"],"m,m,xs,s,w":["\u8868\u8205\u5988","\u8868\u8205\u6BCD"],"m,m,xs,d":["\u8868\u59E8","\u8868\u59E8\u6BCD","\u8868\u59E8\u5988","\u8868\u963F\u59E8"],"m,m,xs,d,h":["\u8868\u59E8\u4E08","\u8868\u59E8\u7236"],"m,xb":["\u8205\u8205","\u8205\u7236","\u8205","\u5A18\u8205","\u8205\u4ED4","x\u8205"],"m,xb,w":["\u8205\u5988","\u8205\u6BCD","\u5997\u5997","\u5997\u6BCD","\u963F\u5997","x\u8205\u5988"],"m,xb,s&o":["\u8868\u54E5(\u8205\u5BB6)","\u8868\u54E5"],"m,xb,s&o,w":["\u8868\u5AC2(\u8205\u5BB6)","\u8868\u5AC2"],"m,xb,s&l":["\u8868\u5F1F(\u8205\u5BB6)","\u8868\u5F1F"],"m,xb,s&l,w":["\u8868\u5F1F\u5AB3(\u8205\u5BB6)","\u8868\u5F1F\u5AB3"],"m,xb,s,s":["\u8868\u4F84\u5B50"],"m,xb,s,s,s":["\u8868\u4F84\u5B59"],"m,xb,s,s,s,w":["\u8868\u4F84\u5B59\u5AB3\u5987"],"m,xb,s,s,d":["\u8868\u4F84\u5B59\u5973"],"m,xb,s,s,d,h":["\u8868\u4F84\u5B59\u5973\u5A7F"],"m,xb,s,d":["\u8868\u4F84\u5973"],"m,xb,s,d,s":["\u5916\u8868\u4F84\u5B59"],"m,xb,s,d,s,w":["\u5916\u8868\u4F84\u5B59\u5AB3\u5987"],"m,xb,s,d,d":["\u5916\u8868\u4F84\u5B59\u5973"],"m,xb,s,d,d,h":["\u5916\u8868\u4F84\u5B59\u5973\u5A7F"],"m,xb,d&o":["\u8868\u59D0(\u8205\u5BB6)","\u8868\u59D0"],"m,xb,d&o,h":["\u8868\u59D0\u592B(\u8205\u5BB6)","\u8868\u59D0\u592B","\u8868\u59D0\u4E08"],"m,xb,d&l":["\u8868\u59B9(\u8205\u5BB6)","\u8868\u59B9"],"m,xb,d&l,h":["\u8868\u59B9\u592B(\u8205\u5BB6)","\u8868\u59B9\u592B"],"m,xb,d,s":["\u8868\u5916\u7525"],"m,xb,d,d":["\u8868\u5916\u7525\u5973"],"m,ob":["\u5927\u8205"],"m,ob,w":["\u5927\u8205\u5988"],"m,lb":["\u5C0F\u8205","\u8205\u7236\u4ED4"],"m,lb,w":["\u5C0F\u8205\u5988"],"m,xs":["\u59E8\u5988","\u59E8\u6BCD","\u59E8\u59E8","\u59E8\u5A18","\u963F\u59E8","\u59E8","x\u59E8","x\u59E8\u5988"],"m,xs,h":["\u59E8\u4E08","\u59E8\u592B","\u59E8\u7236","x\u59E8\u7236"],"m,xs,s&o":["\u8868\u54E5(\u59E8\u5BB6)","\u8868\u54E5"],"m,xs,s&o,w":["\u8868\u5AC2(\u59E8\u5BB6)","\u8868\u5AC2"],"m,xs,s&l":["\u8868\u5F1F(\u59E8\u5BB6)","\u8868\u5F1F"],"m,xs,s&l,w":["\u8868\u5F1F\u5AB3(\u59E8\u5BB6)","\u8868\u5F1F\u5AB3"],"m,xs,s,s":["\u8868\u4F84\u5B50"],"m,xs,s,s,s":["\u8868\u4F84\u5B59"],"m,xs,s,s,s,w":["\u8868\u4F84\u5B59\u5AB3\u5987"],"m,xs,s,s,d":["\u8868\u4F84\u5B59\u5973"],"m,xs,s,s,d,h":["\u8868\u4F84\u5B59\u5973\u5A7F"],"m,xs,s,d":["\u8868\u4F84\u5973"],"m,xs,s,d,s":["\u5916\u8868\u4F84\u5B59"],"m,xs,s,d,s,w":["\u5916\u8868\u4F84\u5B59\u5AB3\u5987"],"m,xs,s,d,d":["\u5916\u8868\u4F84\u5B59\u5973"],"m,xs,s,d,d,h":["\u5916\u8868\u4F84\u5B59\u5973\u5A7F"],"m,xs,d&o":["\u8868\u59D0(\u59E8\u5BB6)","\u8868\u59D0"],"m,xs,d&o,h":["\u8868\u59D0\u592B(\u59E8\u5BB6)","\u8868\u59D0\u592B","\u8868\u59D0\u4E08"],"m,xs,d&l":["\u8868\u59B9(\u59E8\u5BB6)","\u8868\u59B9"],"m,xs,d&l,h":["\u8868\u59B9\u592B(\u59E8\u5BB6)","\u8868\u59B9\u592B"],"m,xs,d,s":["\u8868\u5916\u7525"],"m,xs,d,d":["\u8868\u5916\u7525\u5973"],"m,os":["\u5927\u59E8","\u5927\u59E8\u5988"],"m,os,h":["\u5927\u59E8\u7236","\u5927\u59E8\u4E08","\u5927\u59E8\u592B"],"m,ls":["\u5C0F\u59E8","\u5C0F\u59E8\u5988","\u59E8\u4ED4"],"m,ls,h":["\u5C0F\u59E8\u7236","\u5C0F\u59E8\u4E08","\u5C0F\u59E8\u592B"],h:["\u8001\u516C","\u4E08\u592B","\u5148\u751F","\u5B98\u4EBA","\u7537\u4EBA","\u6C49\u5B50","\u592B","\u592B\u541B","\u7231\u4EBA"],"h,f":["\u516C\u516C"],"h,f,f":["\u7956\u7FC1"],"h,f,f,f":["\u592A\u516C\u7FC1"],"h,f,f,m":["\u592A\u5976\u4EB2"],"h,f,m":["\u7956\u5A46"],"h,f,ob":["\u4F2F\u7FC1"],"h,f,ob,w":["\u4F2F\u5A46"],"h,f,lb":["\u53D4\u7FC1"],"h,f,lb,w":["\u53D4\u5A46"],"h,f,xb,s&o":["\u5802\u5927\u4F2F","\u5802\u5144"],"h,f,xb,s&o,w":["\u5802\u5AC2"],"h,f,xb,s&l":["\u5802\u53D4\u4ED4","\u5802\u5F1F"],"h,f,xb,s&l,w":["\u5802\u5C0F\u5F1F"],"h,m":["\u5A46\u5A46"],"h,m,xb":["\u8205\u516C"],"h,m,xb,w":["\u8205\u5A46"],"h,m,xs":["\u59E8\u5A46"],"h,m,xs,h":["\u59E8\u516C"],"h,xb,s":["\u4F84\u5B50","\u4F84\u513F"],"h,xb,s,w":["\u4F84\u5AB3","\u4F84\u5AB3\u5987"],"h,xb,s,s":["\u4F84\u5B59","\u4F84\u5B59\u5B50"],"h,xb,s,s,w":["\u4F84\u5B59\u5AB3"],"h,xb,s,d":["\u4F84\u5B59\u5973"],"h,xb,s,d,h":["\u4F84\u5B59\u5973\u5A7F"],"h,xb,d":["\u4F84\u5973"],"h,xb,d,h":["\u4F84\u5973\u5A7F","\u4F84\u5A7F"],"h,xb,d,s":["\u5916\u4F84\u5B59"],"h,xb,d,s,w":["\u5916\u4F84\u5AB3\u5987"],"h,xb,d,d":["\u5916\u4F84\u5B59\u5973"],"h,xb,d,d,h":["\u5916\u4F84\u5B59\u5973\u5A7F"],"h,ob":["\u5927\u4F2F\u5B50","\u5927\u4F2F\u54E5","\u592B\u5144"],"h,ob,w":["\u5927\u5A76\u5B50","\u5927\u4F2F\u5AC2","\u5927\u4F2F\u5987","\u4F2F\u5A18","\u5927\u4F2F\u5A18","\u5927\u5AC2","\u592B\u5144\u5AC2","\u59AF\u5A0C"],"h,lb":["\u5C0F\u53D4\u5B50","\u5C0F\u53D4\u5F1F"],"h,lb,w":["\u5C0F\u5A76\u5B50","\u5C0F\u53D4\u5987","\u5C0F\u53D4\u5AB3\u5987","\u59AF\u5A0C"],"h,xs,s":["\u5916\u7525"],"h,xs,s,w":["\u5916\u7525\u5AB3\u5987"],"h,xs,s,s":["\u5916\u7525\u5B59"],"h,xs,s,s,w":["\u5916\u7525\u5B59\u5AB3\u5987"],"h,xs,s,s,s":["\u5916\u66FE\u7525\u5B59"],"h,xs,s,s,d":["\u5916\u66FE\u7525\u5B59\u5973"],"h,xs,s,d":["\u5916\u7525\u5B59\u5973"],"h,xs,s,d,h":["\u5916\u7525\u5B59\u5973\u5A7F"],"h,xs,s,d,s":["\u5916\u66FE\u7525\u5B59"],"h,xs,s,d,d":["\u5916\u66FE\u7525\u5B59\u5973"],"h,xs,d":["\u5916\u7525\u5973"],"h,xs,d,h":["\u5916\u7525\u5973\u5A7F"],"h,xs,d,s":["\u5916\u7525\u5B59"],"h,xs,d,s,w":["\u5916\u7525\u5B59\u5AB3\u5987"],"h,xs,d,s,s":["\u5916\u66FE\u7525\u5B59"],"h,xs,d,s,d":["\u5916\u66FE\u7525\u5B59\u5973"],"h,xs,d,d":["\u5916\u7525\u5B59\u5973"],"h,xs,d,d,h":["\u5916\u7525\u5B59\u5973\u5A7F"],"h,xs,d,d,s":["\u5916\u66FE\u7525\u5B59"],"h,xs,d,d,d":["\u5916\u66FE\u7525\u5B59\u5973"],"h,os":["\u5927\u59D1\u5B50","\u5927\u59D1","\u5927\u5A18\u59D1"],"h,os,h":["\u5927\u59D1\u592B","\u59CA\u4E08","\u5927\u59D1\u59D0\u592B"],"h,ls":["\u5C0F\u59D1\u5B50","\u5C0F\u59D1","\u59D1\u4ED4"],"h,ls,h":["\u5C0F\u59D1\u592B","\u5C0F\u59D1\u59B9\u592B"],w:["\u8001\u5A46","\u59BB\u5B50","\u592A\u592A","\u5AB3\u5987","\u592B\u4EBA","\u5973\u4EBA","\u5A46\u5A18","\u59BB","\u5185\u4EBA","\u5A18\u5B50","\u7231\u4EBA"],"w,f":["\u5CB3\u7236","\u8001\u4E08\u4EBA","\u4E08\u4EBA","\u6CF0\u5C71","\u59BB\u7236"],"w,f,f":["\u592A\u5CB3\u7236"],"w,f,f,ob":["\u592A\u4F2F\u5CB3"],"w,f,f,ob,w":["\u592A\u4F2F\u5CB3\u6BCD"],"w,f,f,lb,":["\u592A\u53D4\u5CB3"],"w,f,f,lb,w":["\u592A\u53D4\u5CB3\u6BCD"],"w,f,f,xb,s&o":["\u59FB\u4F2F"],"w,f,f,xb,s&o,w":["\u59FB\u59C6"],"w,f,f,xb,s&l":["\u59FB\u53D4"],"w,f,f,xb,s&l,w":["\u59FB\u5A76"],"w,f,f,xs":["\u592A\u59D1\u5CB3\u6BCD"],"w,f,f,xs,h":["\u592A\u59D1\u5CB3\u7236"],"w,f,m":["\u592A\u5CB3\u6BCD"],"w,f,m,xb":["\u592A\u8205\u5CB3\u7236"],"w,f,m,xb,w":["\u592A\u8205\u5CB3\u6BCD"],"w,f,m,xs":["\u592A\u59E8\u5CB3\u6BCD"],"w,f,m,xs,h":["\u592A\u59E8\u5CB3\u7236"],"w,f,xb,s&o":["\u5802\u5927\u8205","\u59FB\u5BB6\u5144"],"w,f,xb,s&l":["\u5802\u8205\u4ED4","\u59FB\u5BB6\u5F1F"],"w,f,xb,d&o":["\u5802\u5927\u59E8"],"w,f,xb,d&l":["\u5802\u59E8\u4ED4"],"w,f,ob":["\u4F2F\u5CB3","\u4F2F\u5CB3\u7236"],"w,f,ob,w":["\u4F2F\u5CB3\u6BCD"],"w,f,lb":["\u53D4\u5CB3","\u53D4\u5CB3\u7236"],"w,f,lb,w":["\u53D4\u5CB3\u6BCD"],"w,f,xs":["\u59D1\u5CB3\u6BCD"],"w,f,xs,s&o":["\u8868\u5927\u8205"],"w,f,xs,s&l":["\u8868\u8205\u4ED4"],"w,f,xs,d&o":["\u8868\u5927\u59E8"],"w,f,xs,d&l":["\u8868\u59E8\u4ED4"],"w,m":["\u5CB3\u6BCD","\u4E08\u6BCD\u5A18"],"w,m,f":["\u5916\u592A\u5CB3\u7236"],"w,m,m":["\u5916\u592A\u5CB3\u6BCD"],"w,m,xb":["\u8205\u5CB3\u7236"],"w,m,xb,w":["\u8205\u5CB3\u6BCD"],"w,m,xb,s&o":["\u8868\u5927\u8205"],"w,m,xb,s&l":["\u8868\u8205\u4ED4"],"w,m,xb,d&o":["\u8868\u5927\u59E8"],"w,m,xb,d&l":["\u8868\u59E8\u4ED4"],"w,m,xs":["\u59E8\u5CB3\u6BCD"],"w,m,xs,h":["\u59E8\u5CB3\u7236"],"w,m,xs,s&o":["\u8868\u5927\u8205"],"w,m,xs,s&l":["\u8868\u8205\u4ED4"],"w,m,xs,d&o":["\u8868\u5927\u59E8"],"w,m,xs,d&l":["\u8868\u59E8\u4ED4"],"w,xb,s":["\u5185\u4F84","\u59BB\u4F84"],"w,xb,s,w":["\u5185\u4F84\u5AB3\u5987"],"w,xb,s,s":["\u4F84\u5B59"],"w,xb,s,s,w":["\u4F84\u5B59\u5AB3\u5987"],"w,xb,s,d":["\u4F84\u5B59\u5973"],"w,xb,s,d,h":["\u4F84\u5B59\u5973\u5A7F"],"w,xb,d":["\u5185\u4F84\u5973","\u59BB\u4F84\u5973"],"w,xb,d,h":["\u5185\u4F84\u5973\u5A7F"],"w,xb,d,s":["\u5916\u4F84\u5B59"],"w,xb,d,s,w":["\u5916\u4F84\u5B59\u5AB3\u5987"],"w,xb,d,d":["\u5916\u4F84\u5B59\u5973"],"w,xb,d,d,h":["\u5916\u4F84\u5B59\u5973\u5A7F"],"w,ob":["\u5927\u8205\u54E5","\u5927\u8205\u5B50","\u5185\u5144"],"w,ob,w":["\u8205\u5AC2","\u5927\u8205\u5987","\u5927\u8205\u5AB3\u5987","\u5927\u5997\u5B50","\u5185\u5AC2"],"w,lb":["\u5C0F\u8205\u5B50","\u5185\u5F1F"],"w,lb,w":["\u8205\u5F1F\u5AB3","\u5C0F\u8205\u5987","\u5C0F\u8205\u5AB3\u5987","\u5C0F\u5997\u5B50"],"w,xs,s":["\u59E8\u7525","\u59BB\u5916\u7525"],"w,xs,s,w":["\u59E8\u7525\u5AB3\u5987"],"w,xs,s,s":["\u59E8\u7525\u5B59"],"w,xs,s,s,w":["\u59E8\u7525\u5B59\u5AB3\u5987"],"w,xs,s,d":["\u59E8\u7525\u5B59\u5973"],"w,xs,s,d,h":["\u59E8\u7525\u5B59\u5973\u5A7F"],"w,xs,d":["\u59E8\u7525\u5973","\u59BB\u5916\u7525\u5973"],"w,xs,d,h":["\u59E8\u7525\u5973\u5A7F"],"w,xs,d,s":["\u59E8\u7525\u5B59"],"w,xs,d,s,w":["\u59E8\u7525\u5B59\u5AB3\u5987"],"w,xs,d,d":["\u59E8\u7525\u5B59\u5973"],"w,xs,d,d,h":["\u59E8\u7525\u5B59\u5973\u5A7F"],"w,os":["\u5927\u59E8\u5B50","\u5927\u59E8\u59D0","\u59BB\u59D0"],"w,os,h":["\u5927\u59E8\u592B","\u5927\u59E8\u59D0\u592B","\u895F\u5144","\u8FDE\u895F"],"w,ls":["\u5C0F\u59E8\u5B50","\u5C0F\u59E8\u59D0","\u59BB\u59B9","\u5C0F\u59B9\u513F"],"w,ls,h":["\u5C0F\u59E8\u592B","\u5C0F\u59E8\u59B9\u592B","\u895F\u5F1F","\u8FDE\u895F"],xb:["\u5144\u5F1F"],"xb,w,f":["\u59FB\u4E16\u4F2F","\u4EB2\u5BB6\u7237","\u4EB2\u7239","\u4EB2\u4F2F"],"xb,w,m":["\u59FB\u4F2F\u6BCD","\u4EB2\u5BB6\u5A18","\u4EB2\u5A18"],"xb,s":["\u4F84\u5B50","\u4F84\u513F"],"xb,s,w":["\u4F84\u5AB3","\u4F84\u5AB3\u5987"],"xb,s,s":["\u4F84\u5B59","\u4F84\u5B59\u5B50"],"xb,s,s,w":["\u4F84\u5B59\u5AB3"],"xb,s,s,s":["\u4F84\u66FE\u5B59"],"xb,s,s,d":["\u4F84\u66FE\u5B59\u5973"],"xb,s,d":["\u4F84\u5B59\u5973"],"xb,s,d,h":["\u4F84\u5B59\u5973\u5A7F"],"xb,d":["\u4F84\u5973"],"xb,d,h":["\u4F84\u5973\u5A7F"],"xb,d,s":["\u5916\u4F84\u5B59","\u5916\u4F84\u5B59\u5B50"],"xb,d,s,w":["\u5916\u4F84\u5B59\u5AB3\u5987"],"xb,d,d":["\u5916\u4F84\u5B59\u5973"],"xb,d,d,h":["\u5916\u4F84\u5B59\u5973\u5A7F"],ob:["\u54E5\u54E5","\u54E5","\u5144","\u963F\u54E5","\u5927\u54E5","\u5927\u4F6C","\u8001\u54E5"],"ob,w":["\u5AC2\u5B50","\u5927\u5AC2","\u5AC2","\u963F\u5AC2"],"ob,w,f":["\u59FB\u4F2F\u7236"],"ob,w,m":["\u59FB\u4F2F\u6BCD"],lb:["\u5F1F\u5F1F","\u5F1F","\u7EC6\u4F6C","\u8001\u5F1F"],"lb,w":["\u5F1F\u59B9","\u5F1F\u5AB3","\u5F1F\u5AB3\u5987"],"lb,w,f":["\u59FB\u53D4\u7236"],"lb,w,m":["\u59FB\u53D4\u6BCD"],xs:["\u59D0\u59B9"],"xs,h,f":["\u59FB\u4E16\u4F2F","\u4EB2\u5BB6\u7237","\u4EB2\u7239","\u4EB2\u4F2F"],"xs,h,m":["\u59FB\u4F2F\u6BCD","\u4EB2\u5BB6\u5A18","\u4EB2\u5A18"],"xs,s":["\u5916\u7525"],"xs,s,w":["\u5916\u7525\u5AB3\u5987"],"xs,s,s":["\u5916\u7525\u5B59"],"xs,s,s,w":["\u5916\u7525\u5B59\u5AB3\u5987"],"xs,s,s,s":["\u5916\u66FE\u7525\u5B59"],"xs,s,s,d":["\u5916\u66FE\u7525\u5B59\u5973"],"xs,s,d":["\u5916\u7525\u5B59\u5973"],"xs,s,d,h":["\u5916\u7525\u5B59\u5973\u5A7F"],"xs,s,d,s":["\u5916\u66FE\u7525\u5B59"],"xs,s,d,d":["\u5916\u66FE\u7525\u5B59\u5973"],"xs,d":["\u5916\u7525\u5973"],"xs,d,h":["\u5916\u7525\u5973\u5A7F"],"xs,d,s":["\u5916\u7525\u5B59"],"xs,d,s,w":["\u5916\u7525\u5B59\u5AB3\u5987"],"xs,d,s,s":["\u5916\u66FE\u7525\u5B59"],"xs,d,s,d":["\u5916\u66FE\u7525\u5B59\u5973"],"xs,d,d":["\u5916\u7525\u5B59\u5973"],"xs,d,d,h":["\u5916\u7525\u5B59\u5973\u5A7F"],"xs,d,d,s":["\u5916\u66FE\u7525\u5B59"],"xs,d,d,d":["\u5916\u66FE\u7525\u5B59\u5973"],os:["\u59D0\u59D0","\u59D0","\u5BB6\u59D0","\u963F\u59D0","\u963F\u59CA"],"os,h":["\u59D0\u592B","\u59CA\u592B","\u59CA\u5A7F"],ls:["\u59B9\u59B9","\u59B9","\u8001\u59B9"],"ls,h":["\u59B9\u592B","\u59B9\u5A7F"],s:["\u513F\u5B50","\u4ED4","\u963F\u4ED4","\u4ED4\u4ED4"],"s,w":["\u513F\u5AB3\u5987","\u513F\u5AB3"],"s,w,xb":["\u59FB\u4F84"],"s,w,xs":["\u59FB\u4F84\u5973"],"s,s":["\u5B59\u5B50"],"s,s,w":["\u5B59\u5AB3\u5987","\u5B59\u5AB3"],"s,s,s":["\u66FE\u5B59"],"s,s,s,w":["\u66FE\u5B59\u5AB3\u5987"],"s,s,s,s":["\u7384\u5B59","\u5143\u5B59","\u8180\u5B59"],"s,s,s,d":["\u7384\u5B59\u5973"],"s,s,s,s,s":["\u6765\u5B59"],"s,s,d":["\u66FE\u5B59\u5973"],"s,s,d,h":["\u66FE\u5B59\u5973\u5A7F"],"s,s,d,s":["\u5916\u7384\u5B59"],"s,s,d,d":["\u5916\u7384\u5B59\u5973"],"s,d":["\u5B59\u5973"],"s,d,h":["\u5B59\u5973\u5A7F"],"s,d,s":["\u66FE\u5916\u5B59"],"s,d,d":["\u66FE\u5916\u5B59\u5973"],d:["\u5973\u513F","\u5343\u91D1","\u5973","\u963F\u5973","\u5973\u5973","\u638C\u4E0A\u660E\u73E0"],"d,h":["\u5973\u5A7F","\u5973\u5A7F\u5B50","\u5973\u5A7F\u513F"],"d,h,xb":["\u59FB\u4F84"],"d,h,xs":["\u59FB\u4F84\u5973"],"d,s":["\u5916\u5B59"],"d,s,w":["\u5916\u5B59\u5AB3"],"d,s,s":["\u5916\u66FE\u5B59","\u91CD\u5916\u5B59"],"d,s,d":["\u5916\u66FE\u5B59\u5973","\u91CD\u5916\u5B59\u5973"],"d,d":["\u5916\u5B59\u5973"],"d,d,h":["\u5916\u5B59\u5973\u5A7F"],"d,d,s":["\u5916\u66FE\u5916\u5B59"],"d,d,d":["\u5916\u66FE\u5916\u5B59\u5973"],"s,w,m":["\u4EB2\u5BB6\u6BCD"],"s,w,f":["\u4EB2\u5BB6\u516C","\u4EB2\u5BB6\u7FC1"],"s,w,f,f":["\u592A\u59FB\u7FC1"],"s,w,f,m":["\u592A\u59FB\u59C6"],"s,w,f,ob":["\u59FB\u5144"],"s,w,f,lb":["\u59FB\u5F1F"],"d,h,m":["\u4EB2\u5BB6\u6BCD"],"d,h,f":["\u4EB2\u5BB6\u516C","\u4EB2\u5BB6\u7FC1"],"d,h,f,f":["\u592A\u59FB\u7FC1"],"d,h,f,m":["\u592A\u59FB\u59C6"],"d,h,f,ob":["\u59FB\u5144"],"d,h,f,lb":["\u59FB\u5F1F"]},C=function(e){for(var s,l=[],m={},w=0;(s=e[w])!=null;w++)m[s]||(l.push(s),m[s]=!0);return l};return c})})(R);var J=R.exports;const{Button:K,Group:L}=U,{Item:M}=I,{TextArea:P}=A,Q={name:"relationship",components:{Typography:S,RadioGroup:L,RadioButton:K,Form:I,FormItem:M,TextArea:P,Button:F,Space:G,Divider:z},data:()=>({type:"default",sex:1,reverse:0,input:""}),computed:{result(){try{return J({text:this.input,sex:this.sex,type:this.type,reverse:Boolean(this.reverse)}).join(`
`)+`
`}catch{return`
`}}},methods:{add(r){if(!r)return;const x=this.input.split("\u7684").map(v=>v.trim()).filter(v=>v);x.push(r),this.input=x.join("\u7684")},clear(){this.input=""},backspace(){const r=this.input.split("\u7684").map(x=>x.trim()).filter(x=>x);r.length&&r.pop(),this.input=r.join("\u7684")}}},k=r=>(q("data-v-3193418f"),r=r(),E(),r),W=k(()=>h("blockquote",null,[h("p",null,"\u9022\u5E74\u8FC7\u8282\u9047\u5230\u4E09\u59D1\u516D\u5A46\uFF0C\u62D2\u7EDD\u53EB\u4E0D\u51FA\u53E3\u7684\u5C34\u5C2C\uFF01\u8F7B\u677E\u641E\u5B9A\u4EB2\u621A\u5173\u7CFB\uFF5E"),h("p",null,[t("\u6765\u6E90: "),h("a",{href:"https://github.com/mumuy/relationship"},"mumuy/relationship")])],-1)),X=t("\u627E\u79F0\u547C"),Y=t("\u627E\u5173\u7CFB"),Z=t("\u7537"),ss=t("\u5973"),fs=t("\u6211\u79F0\u547C\u5BF9\u65B9"),xs=t("\u5BF9\u65B9\u79F0\u547C\u6211"),ds=k(()=>h("h5",null,"\u5FEB\u901F\u9009\u62E9\uFF1A",-1)),os=t("\u7236"),es=t("\u6BCD"),ls=t("\u592B"),ts=t("\u59BB"),bs=t("\u5144"),ms=t("\u5F1F"),rs=t("\u59D0"),ws=t("\u59B9"),ns=t("\u5B50"),hs=t("\u5973"),as=t("\u56DE\u9000"),is=t("\u6E05\u7A7A"),ps=t("\u8BA1\u7B97"),us=k(()=>h("h5",null,"\u8BA1\u7B97\u7ED3\u679C\uFF1A",-1)),vs=k(()=>h("h5",null,"\u4F7F\u7528\u6848\u4F8B",-1)),_s=k(()=>h("ol",null,[h("li",null,[t("\u4F7F\u7528\u522B\u79F0\u67E5\u8BE2\uFF1A"),h("code",null,"\u59E5\u59E5\u7684\u7238\u7238\u7684\u8001\u7AA6"),t(" / "),h("code",null,"\u5A18\u5B50\u7684\u7239\u5730\u7684\u6BCD\u4EB2"),t(" / "),h("code",null,"\u5CB3\u4E08\u7684\u5988\u54AA")]),h("li",null,[t("\u4F7F\u7528\u5408\u79F0\u67E5\u8BE2\uFF1A"),h("code",null,"\u8205\u8205\u7684\u5B59\u8F88"),t(" / "),h("code",null,"\u7238\u7238\u7684\u7956\u7236\u6BCD"),t(" / "),h("code",null,"\u59D1\u5988\u7684\u5144\u5F1F\u59D0\u59B9")]),h("li",null,[t("\u5927\u5C0F\u6570\u5B57\u6DF7\u5408\u67E5\u8BE2\uFF1A"),h("code",null,"\u513F\u5B50\u7684\u5927\u8205\u7684\u4E8C\u59D1\u5988\u7684\u4E03\u8205\u59E5\u7237")]),h("li",null,[t("\u4E0D\u9650\u5236\u65B9\u5411\u7956\u8F88\u5B59\u8F88\u8DE8\u5EA6\uFF0C\u53CD\u590D\u67E5\u8BE2\uFF1A"),h("code",null,"\u8205\u5988\u7684\u5A46\u5A46\u7684\u5916\u7525\u7684\u59E8\u5988\u7684\u4F84\u5B50\u7684\u7237\u7237")])],-1));function cs(r,x,v,g,B,i){const c=_("RadioButton"),y=_("RadioGroup"),p=_("FormItem"),C=_("Form"),e=_("TextArea"),s=_("Button"),l=_("Divider"),m=_("Space"),w=_("Typography");return N(),D(w,null,{default:o(()=>[W,d(C,null,{default:o(()=>[d(p,{label:"\u8BA1\u7B97\u7C7B\u578B"},{default:o(()=>[d(y,{value:r.type,"onUpdate:value":x[0]||(x[0]=f=>r.type=f)},{default:o(()=>[d(c,{value:"default"},{default:o(()=>[X]),_:1}),d(c,{value:"chain"},{default:o(()=>[Y]),_:1})]),_:1},8,["value"])]),_:1}),d(p,{label:"\u6211\u7684\u6027\u522B"},{default:o(()=>[d(y,{value:r.sex,"onUpdate:value":x[1]||(x[1]=f=>r.sex=f)},{default:o(()=>[d(c,{value:1},{default:o(()=>[Z]),_:1}),d(c,{value:0},{default:o(()=>[ss]),_:1})]),_:1},8,["value"])]),_:1}),d(p,{label:"\u79F0\u547C\u65B9\u5F0F"},{default:o(()=>[d(y,{value:r.reverse,"onUpdate:value":x[2]||(x[2]=f=>r.reverse=f)},{default:o(()=>[d(c,{value:0},{default:o(()=>[fs]),_:1}),d(c,{value:1},{default:o(()=>[xs]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),d(e,{value:r.input,"onUpdate:value":x[3]||(x[3]=f=>r.input=f),placeholder:"\u79F0\u8C13\u95F4\u7528'\u7684'\u5B57\u5206\u5F00...","auto-size":{minRows:2,maxRows:5},style:{resize:"none"}},null,8,["value"]),ds,d(m,{size:8},{default:o(()=>[d(s,{onClick:x[4]||(x[4]=f=>i.add("\u7238\u7238"))},{default:o(()=>[os]),_:1}),d(s,{onClick:x[5]||(x[5]=f=>i.add("\u5988\u5988"))},{default:o(()=>[es]),_:1}),d(l,{type:"vertical"}),d(s,{onClick:x[6]||(x[6]=f=>i.add("\u8001\u516C"))},{default:o(()=>[ls]),_:1}),d(s,{onClick:x[7]||(x[7]=f=>i.add("\u8001\u5A46"))},{default:o(()=>[ts]),_:1}),d(l,{type:"vertical"}),d(s,{onClick:x[8]||(x[8]=f=>i.add("\u54E5\u54E5"))},{default:o(()=>[bs]),_:1}),d(s,{onClick:x[9]||(x[9]=f=>i.add("\u5F1F\u5F1F"))},{default:o(()=>[ms]),_:1}),d(l,{type:"vertical"}),d(s,{onClick:x[10]||(x[10]=f=>i.add("\u59D0\u59D0"))},{default:o(()=>[rs]),_:1}),d(s,{onClick:x[11]||(x[11]=f=>i.add("\u59B9\u59B9"))},{default:o(()=>[ws]),_:1}),d(l,{type:"vertical"}),d(s,{onClick:x[12]||(x[12]=f=>i.add("\u513F\u5B50"))},{default:o(()=>[ns]),_:1}),d(s,{onClick:x[13]||(x[13]=f=>i.add("\u5973\u513F"))},{default:o(()=>[hs]),_:1})]),_:1}),d(m,{size:8},{default:o(()=>[d(s,{type:"primary",onClick:i.backspace},{default:o(()=>[as]),_:1},8,["onClick"]),d(s,{type:"primary",onClick:i.clear},{default:o(()=>[is]),_:1},8,["onClick"]),d(s,{type:"primary"},{default:o(()=>[ps]),_:1})]),_:1}),us,h("pre",null,V(i.result),1),d(l),vs,_s]),_:1})}var Is=H(Q,[["render",cs],["__scopeId","data-v-3193418f"]]);export{Is as default};
