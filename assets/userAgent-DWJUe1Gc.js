import{aS as Ri,aR as Mi,a0 as Ui,F as _,K as G,w as ni,X as Ei,H as S,$ as Ci,o as y,L as T,I as C,G as P}from"./index-BBGb7ztx.js";import{E as Pi}from"./el-divider-D8yUorQm.js";import{T as Bi,P as qi}from"./Router-u-NDJPc-.js";var li={exports:{}};(function(O,p){(function(E,m){var bi="1.0.39",c="",B="?",q="function",N="undefined",z="object",R="string",wi="major",e="model",a="name",i="type",o="vendor",r="version",h="architecture",I="console",l="mobile",n="tablet",v="smarttv",A="wearable",$="embedded",ii=500,H="Amazon",L="Apple",ui="ASUS",di="BlackBerry",V="Browser",W="Chrome",Si="Edge",X="Firefox",Y="Google",ci="Huawei",ei="LG",oi="Microsoft",mi="Motorola",D="Opera",j="Samsung",pi="Sharp",K="Sony",ai="Xiaomi",ri="Zebra",vi="Facebook",hi="Chromium OS",fi="Mac OS",gi=" Browser",Ti=function(b,w){var s={};for(var d in b)w[d]&&w[d].length%2===0?s[d]=w[d].concat(b[d]):s[d]=b[d];return s},Z=function(b){for(var w={},s=0;s<b.length;s++)w[b[s].toUpperCase()]=b[s];return w},ki=function(b,w){return typeof b===R?M(w).indexOf(M(b))!==-1:!1},M=function(b){return b.toLowerCase()},Oi=function(b){return typeof b===R?b.replace(/[^\d\.]/g,c).split(".")[0]:m},ti=function(b,w){if(typeof b===R)return b=b.replace(/^\s\s*/,c),typeof w===N?b:b.substring(0,ii)},F=function(b,w){for(var s=0,d,x,g,u,t,k;s<w.length&&!t;){var si=w[s],yi=w[s+1];for(d=x=0;d<si.length&&!t&&si[d];)if(t=si[d++].exec(b),t)for(g=0;g<yi.length;g++)k=t[++x],u=yi[g],typeof u===z&&u.length>0?u.length===2?typeof u[1]==q?this[u[0]]=u[1].call(this,k):this[u[0]]=u[1]:u.length===3?typeof u[1]===q&&!(u[1].exec&&u[1].test)?this[u[0]]=k?u[1].call(this,k,u[2]):m:this[u[0]]=k?k.replace(u[1],u[2]):m:u.length===4&&(this[u[0]]=k?u[3].call(this,k.replace(u[1],u[2])):m):this[u]=k||m;s+=2}},J=function(b,w){for(var s in w)if(typeof w[s]===z&&w[s].length>0){for(var d=0;d<w[s].length;d++)if(ki(w[s][d],b))return s===B?m:s}else if(ki(w[s],b))return s===B?m:s;return w.hasOwnProperty("*")?w["*"]:b},Ni={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},xi={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},_i={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[r,[a,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[r,[a,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[a,r],[/opios[\/ ]+([\w\.]+)/i],[r,[a,D+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[r,[a,D+" GX"]],[/\bopr\/([\w\.]+)/i],[r,[a,D]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[r,[a,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[a,r],[/quark(?:pc)?\/([-\w\.]+)/i],[r,[a,"Quark"]],[/\bddg\/([\w\.]+)/i],[r,[a,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[r,[a,"UC"+V]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[r,[a,"WeChat"]],[/konqueror\/([\w\.]+)/i],[r,[a,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[r,[a,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[r,[a,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[r,[a,"Smart Lenovo "+V]],[/(avast|avg)\/([\w\.]+)/i],[[a,/(.+)/,"$1 Secure "+V],r],[/\bfocus\/([\w\.]+)/i],[r,[a,X+" Focus"]],[/\bopt\/([\w\.]+)/i],[r,[a,D+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[r,[a,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[r,[a,"Dolphin"]],[/coast\/([\w\.]+)/i],[r,[a,D+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[r,[a,"MIUI "+V]],[/fxios\/([-\w\.]+)/i],[r,[a,X]],[/\bqihu|(qi?ho?o?|360)browser/i],[[a,"360"+gi]],[/\b(qq)\/([\w\.]+)/i],[[a,/(.+)/,"$1Browser"],r],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[a,/(.+)/,"$1"+gi],r],[/samsungbrowser\/([\w\.]+)/i],[r,[a,j+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],r],[/metasr[\/ ]?([\d\.]+)/i],[r,[a,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[a,"Sogou Mobile"],r],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[a,r],[/(lbbrowser|rekonq)/i,/\[(linkedin)app\]/i],[a],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[a,vi],r],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[a,r],[/\bgsa\/([\w\.]+) .*safari\//i],[r,[a,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[r,[a,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[r,[a,W+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[a,W+" WebView"],r],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[r,[a,"Android "+V]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[a,r],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[r,[a,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[r,a],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[a,[r,J,Ni]],[/(webkit|khtml)\/([\w\.]+)/i],[a,r],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[a,"Netscape"],r],[/(wolvic)\/([\w\.]+)/i],[a,r],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[r,[a,X+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[a,[r,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[a,[r,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,M]],[/((?:i[346]|x)86)[;\)]/i],[[h,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[h,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[h,"armhf"]],[/windows (ce|mobile); ppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[h,/ower/,c,M]],[/(sun4\w)[;\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[h,M]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[e,[o,j],[i,n]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[e,[o,j],[i,l]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[e,[o,L],[i,l]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[e,[o,L],[i,n]],[/(macintosh);/i],[e,[o,L]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[e,[o,pi],[i,l]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[e,[o,ci],[i,n]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[e,[o,ci],[i,l]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],[[e,/_/g," "],[o,ai],[i,l]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[e,/_/g," "],[o,ai],[i,n]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[e,[o,"OPPO"],[i,l]],[/\b(opd2\d{3}a?) bui/i],[e,[o,"OPPO"],[i,n]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[e,[o,"Vivo"],[i,l]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[e,[o,"Realme"],[i,l]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[e,[o,mi],[i,l]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[e,[o,mi],[i,n]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[e,[o,ei],[i,n]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[e,[o,ei],[i,l]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[e,[o,"Lenovo"],[i,n]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[e,/_/g," "],[o,"Nokia"],[i,l]],[/(pixel c)\b/i],[e,[o,Y],[i,n]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[e,[o,Y],[i,l]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[e,[o,K],[i,l]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[e,"Xperia Tablet"],[o,K],[i,n]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[e,[o,"OnePlus"],[i,l]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[e,[o,H],[i,n]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[e,/(.+)/g,"Fire Phone $1"],[o,H],[i,l]],[/(playbook);[-\w\),; ]+(rim)/i],[e,o,[i,n]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[e,[o,di],[i,l]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[e,[o,ui],[i,n]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[e,[o,ui],[i,l]],[/(nexus 9)/i],[e,[o,"HTC"],[i,n]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[o,[e,/_/g," "],[i,l]],[/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],[e,[o,"TCL"],[i,n]],[/(itel) ((\w+))/i],[[o,M],e,[i,J,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[e,[o,"Acer"],[i,n]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[e,[o,"Meizu"],[i,l]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[e,[o,"Ulefone"],[i,l]],[/droid.+; (a(?:015|06[35]|142p?))/i],[e,[o,"Nothing"],[i,l]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[o,e,[i,l]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[o,e,[i,n]],[/(surface duo)/i],[e,[o,oi],[i,n]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[e,[o,"Fairphone"],[i,l]],[/(u304aa)/i],[e,[o,"AT&T"],[i,l]],[/\bsie-(\w*)/i],[e,[o,"Siemens"],[i,l]],[/\b(rct\w+) b/i],[e,[o,"RCA"],[i,n]],[/\b(venue[\d ]{2,7}) b/i],[e,[o,"Dell"],[i,n]],[/\b(q(?:mv|ta)\w+) b/i],[e,[o,"Verizon"],[i,n]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[e,[o,"Barnes & Noble"],[i,n]],[/\b(tm\d{3}\w+) b/i],[e,[o,"NuVision"],[i,n]],[/\b(k88) b/i],[e,[o,"ZTE"],[i,n]],[/\b(nx\d{3}j) b/i],[e,[o,"ZTE"],[i,l]],[/\b(gen\d{3}) b.+49h/i],[e,[o,"Swiss"],[i,l]],[/\b(zur\d{3}) b/i],[e,[o,"Swiss"],[i,n]],[/\b((zeki)?tb.*\b) b/i],[e,[o,"Zeki"],[i,n]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[o,"Dragon Touch"],e,[i,n]],[/\b(ns-?\w{0,9}) b/i],[e,[o,"Insignia"],[i,n]],[/\b((nxa|next)-?\w{0,9}) b/i],[e,[o,"NextBook"],[i,n]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[o,"Voice"],e,[i,l]],[/\b(lvtel\-)?(v1[12]) b/i],[[o,"LvTel"],e,[i,l]],[/\b(ph-1) /i],[e,[o,"Essential"],[i,l]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[e,[o,"Envizen"],[i,n]],[/\b(trio[-\w\. ]+) b/i],[e,[o,"MachSpeed"],[i,n]],[/\btu_(1491) b/i],[e,[o,"Rotor"],[i,n]],[/(shield[\w ]+) b/i],[e,[o,"Nvidia"],[i,n]],[/(sprint) (\w+)/i],[o,e,[i,l]],[/(kin\.[onetw]{3})/i],[[e,/\./g," "],[o,oi],[i,l]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[e,[o,ri],[i,n]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[e,[o,ri],[i,l]],[/smart-tv.+(samsung)/i],[o,[i,v]],[/hbbtv.+maple;(\d+)/i],[[e,/^/,"SmartTV"],[o,j],[i,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[o,ei],[i,v]],[/(apple) ?tv/i],[o,[e,L+" TV"],[i,v]],[/crkey/i],[[e,W+"cast"],[o,Y],[i,v]],[/droid.+aft(\w+)( bui|\))/i],[e,[o,H],[i,v]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[e,[o,pi],[i,v]],[/(bravia[\w ]+)( bui|\))/i],[e,[o,K],[i,v]],[/(mitv-\w{5}) bui/i],[e,[o,ai],[i,v]],[/Hbbtv.*(technisat) (.*);/i],[o,e,[i,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[o,ti],[e,ti],[i,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[i,v]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[o,e,[i,I]],[/droid.+; (shield) bui/i],[e,[o,"Nvidia"],[i,I]],[/(playstation [345portablevi]+)/i],[e,[o,K],[i,I]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[e,[o,oi],[i,I]],[/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],[e,[o,j],[i,A]],[/((pebble))app/i],[o,e,[i,A]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[e,[o,L],[i,A]],[/droid.+; (glass) \d/i],[e,[o,Y],[i,A]],[/droid.+; (wt63?0{2,3})\)/i],[e,[o,ri],[i,A]],[/(quest( \d| pro)?)/i],[e,[o,vi],[i,A]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[o,[i,$]],[/(aeobc)\b/i],[e,[o,H],[i,$]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[e,[i,l]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[e,[i,n]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[i,n]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[i,l]],[/(android[-\w\. ]{0,9});.+buil/i],[e,[o,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[r,[a,Si+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[r,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[a,r],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[r,a]],os:[[/microsoft (windows) (vista|xp)/i],[a,r],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[a,[r,J,xi]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[r,J,xi],[a,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[r,/_/g,"."],[a,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[a,fi],[r,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[r,a],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[a,r],[/\(bb(10);/i],[r,[a,di]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[r,[a,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[r,[a,X+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[r,[a,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[r,[a,"watchOS"]],[/crkey\/([\d\.]+)/i],[r,[a,W+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[a,hi],r],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[a,r],[/(sunos) ?([\w\.\d]*)/i],[[a,"Solaris"],r],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[a,r]]},f=function(b,w){if(typeof b===z&&(w=b,b=m),!(this instanceof f))return new f(b,w).getResult();var s=typeof E!==N&&E.navigator?E.navigator:m,d=b||(s&&s.userAgent?s.userAgent:c),x=s&&s.userAgentData?s.userAgentData:m,g=w?Ti(_i,w):_i,u=s&&s.userAgent==d;return this.getBrowser=function(){var t={};return t[a]=m,t[r]=m,F.call(t,d,g.browser),t[wi]=Oi(t[r]),u&&s&&s.brave&&typeof s.brave.isBrave==q&&(t[a]="Brave"),t},this.getCPU=function(){var t={};return t[h]=m,F.call(t,d,g.cpu),t},this.getDevice=function(){var t={};return t[o]=m,t[e]=m,t[i]=m,F.call(t,d,g.device),u&&!t[i]&&x&&x.mobile&&(t[i]=l),u&&t[e]=="Macintosh"&&s&&typeof s.standalone!==N&&s.maxTouchPoints&&s.maxTouchPoints>2&&(t[e]="iPad",t[i]=n),t},this.getEngine=function(){var t={};return t[a]=m,t[r]=m,F.call(t,d,g.engine),t},this.getOS=function(){var t={};return t[a]=m,t[r]=m,F.call(t,d,g.os),u&&!t[a]&&x&&x.platform&&x.platform!="Unknown"&&(t[a]=x.platform.replace(/chrome os/i,hi).replace(/macos/i,fi)),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return d},this.setUA=function(t){return d=typeof t===R&&t.length>ii?ti(t,ii):t,this},this.setUA(d),this};f.VERSION=bi,f.BROWSER=Z([a,r,wi]),f.CPU=Z([h]),f.DEVICE=Z([e,o,i,I,l,v,n,A,$]),f.ENGINE=f.OS=Z([a,r]),O.exports&&(p=O.exports=f),p.UAParser=f;var U=typeof E!==N&&(E.jQuery||E.Zepto);if(U&&!U.ua){var Q=new f;U.ua=Q.getResult(),U.ua.get=function(){return Q.getUA()},U.ua.set=function(b){Q.setUA(b);var w=Q.getResult();for(var s in w)U.ua[s]=w[s]}}})(typeof window=="object"?window:Ri)})(li,li.exports);var zi=li.exports;const Ii=Mi(zi),Ai=new Ii,Li={name:"UserAgent",data:()=>({data:""}),computed:{result(){return Ai.setUA(this.data),Ai.getResult()}},mounted(){this.data=navigator.userAgent}},Vi={key:0},Di={key:0},ji={key:1},Fi={key:2},Gi={key:3},Hi={key:4};function Wi(O,p,E,m,bi,c){const B=Bi,q=Ci,N=Pi,z=qi;return y(),_(Ei,null,[G(B,{level:3},{default:ni(()=>p[1]||(p[1]=[T(" 请输入一个UA开始解析 ")])),_:1}),G(q,{modelValue:O.data,"onUpdate:modelValue":p[0]||(p[0]=R=>O.data=R),placeholder:"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"},null,8,["modelValue"]),O.data?(y(),_(Ei,{key:0},[G(N),G(B,{level:3},{default:ni(()=>p[2]||(p[2]=[T(" 解析结果 ")])),_:1}),G(z,null,{default:ni(()=>[c.result.ua?(y(),_("pre",Vi,C(c.result.ua),1)):S("",!0),P("ul",null,[c.result.browser.name?(y(),_("li",Di,[p[3]||(p[3]=P("b",null,"浏览器",-1)),T(": "+C(`${c.result.browser.name} ${c.result.browser.version}`),1)])):S("",!0),c.result.device.type?(y(),_("li",ji,[p[4]||(p[4]=P("b",null,"设备",-1)),T(": "+C(`${c.result.device.type} / ${c.result.device.vendor} / ${c.result.device.model}`),1)])):S("",!0),c.result.os.name?(y(),_("li",Fi,[p[5]||(p[5]=P("b",null,"操作系统",-1)),T(": "+C(`${c.result.os.name} / ${c.result.os.version}`),1)])):S("",!0),c.result.engine.name?(y(),_("li",Gi,[p[6]||(p[6]=P("b",null,"内核",-1)),T(": "+C(`${c.result.engine.name} / ${c.result.engine.version}`),1)])):S("",!0),c.result.cpu.architecture?(y(),_("li",Hi,[p[7]||(p[7]=P("b",null,"架构",-1)),T(": "+C(c.result.cpu.architecture),1)])):S("",!0)])]),_:1})],64)):S("",!0)],64)}const Zi=Ui(Li,[["render",Wi]]);export{Zi as default};
