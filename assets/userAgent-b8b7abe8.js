import"./default-5df60f68.js";import"./index-7db2b7cc.js";import{as as Ri,C as Mi,_ as Ci,o as x,l as y,a as j,w as li,H as Ei,s as A,B as Ui,b as S,t as C,m as U,J as zi,K as qi}from"./index-2d447dfc.js";import{E as Bi}from"./el-divider-fe64cd6a.js";import{_ as Pi}from"./Title-ca644414.js";import{_ as Ii}from"./Paragraph-d3fb1d07.js";import"./ResizeObserver.es-0f9f8adb.js";import"./isEqual-a7019869.js";var bi={exports:{}};(function(f,z){(function(E,m){var wi="1.0.35",d="",q="?",B="function",T="undefined",P="object",O="string",ci="major",e="model",o="name",i="type",a="vendor",r="version",h="architecture",I="console",l="mobile",n="tablet",p="smarttv",N="wearable",Q="embedded",$=350,G="Amazon",V="Apple",ui="ASUS",di="BlackBerry",R="Browser",H="Chrome",Si="Edge",W="Firefox",Y="Google",mi="Huawei",ii="LG",ei="Microsoft",pi="Motorola",K="Opera",ai="Samsung",hi="Sharp",X="Sony",oi="Xiaomi",ri="Zebra",vi="Facebook",fi="Chromium OS",gi="Mac OS",Ti=function(b,c){var s={};for(var u in b)c[u]&&c[u].length%2===0?s[u]=c[u].concat(b[u]):s[u]=b[u];return s},Z=function(b){for(var c={},s=0;s<b.length;s++)c[b[s].toUpperCase()]=b[s];return c},_i=function(b,c){return typeof b===O?D(c).indexOf(D(b))!==-1:!1},D=function(b){return b.toLowerCase()},Oi=function(b){return typeof b===O?b.replace(/[^\d\.]/g,d).split(".")[0]:m},ti=function(b,c){if(typeof b===O)return b=b.replace(/^\s\s*/,d),typeof c===T?b:b.substring(0,$)},L=function(b,c){for(var s=0,u,k,g,w,t,_;s<c.length&&!t;){var ni=c[s],yi=c[s+1];for(u=k=0;u<ni.length&&!t&&ni[u];)if(t=ni[u++].exec(b),t)for(g=0;g<yi.length;g++)_=t[++k],w=yi[g],typeof w===P&&w.length>0?w.length===2?typeof w[1]==B?this[w[0]]=w[1].call(this,_):this[w[0]]=w[1]:w.length===3?typeof w[1]===B&&!(w[1].exec&&w[1].test)?this[w[0]]=_?w[1].call(this,_,w[2]):m:this[w[0]]=_?_.replace(w[1],w[2]):m:w.length===4&&(this[w[0]]=_?w[3].call(this,_.replace(w[1],w[2])):m):this[w]=_||m;s+=2}},si=function(b,c){for(var s in c)if(typeof c[s]===P&&c[s].length>0){for(var u=0;u<c[s].length;u++)if(_i(c[s][u],b))return s===q?m:s}else if(_i(c[s],b))return s===q?m:s;return b},Ni={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},ki={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},xi={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[r,[o,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[r,[o,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[o,r],[/opios[\/ ]+([\w\.]+)/i],[r,[o,K+" Mini"]],[/\bopr\/([\w\.]+)/i],[r,[o,K]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[o,r],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[r,[o,"UC"+R]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[r,[o,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[r,[o,"WeChat"]],[/konqueror\/([\w\.]+)/i],[r,[o,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[r,[o,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[r,[o,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[o,/(.+)/,"$1 Secure "+R],r],[/\bfocus\/([\w\.]+)/i],[r,[o,W+" Focus"]],[/\bopt\/([\w\.]+)/i],[r,[o,K+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[r,[o,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[r,[o,"Dolphin"]],[/coast\/([\w\.]+)/i],[r,[o,K+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[r,[o,"MIUI "+R]],[/fxios\/([-\w\.]+)/i],[r,[o,W]],[/\bqihu|(qi?ho?o?|360)browser/i],[[o,"360 "+R]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[o,/(.+)/,"$1 "+R],r],[/(comodo_dragon)\/([\w\.]+)/i],[[o,/_/g," "],r],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[o,r],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[o],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[o,vi],r],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[o,r],[/\bgsa\/([\w\.]+) .*safari\//i],[r,[o,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[r,[o,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[r,[o,H+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[o,H+" WebView"],r],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[r,[o,"Android "+R]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[o,r],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[r,[o,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[r,o],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[o,[r,si,Ni]],[/(webkit|khtml)\/([\w\.]+)/i],[o,r],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[o,"Netscape"],r],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[r,[o,W+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[o,r],[/(cobalt)\/([\w\.]+)/i],[o,[r,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,D]],[/((?:i[346]|x)86)[;\)]/i],[[h,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[h,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[h,"armhf"]],[/windows (ce|mobile); ppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[h,/ower/,d,D]],[/(sun4\w)[;\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[h,D]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[e,[a,ai],[i,n]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[e,[a,ai],[i,l]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[e,[a,V],[i,l]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[e,[a,V],[i,n]],[/(macintosh);/i],[e,[a,V]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[e,[a,hi],[i,l]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[e,[a,mi],[i,n]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[e,[a,mi],[i,l]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[e,/_/g," "],[a,oi],[i,l]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[e,/_/g," "],[a,oi],[i,n]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[e,[a,"OPPO"],[i,l]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[e,[a,"Vivo"],[i,l]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[e,[a,"Realme"],[i,l]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[e,[a,pi],[i,l]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[e,[a,pi],[i,n]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[e,[a,ii],[i,n]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[e,[a,ii],[i,l]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[e,[a,"Lenovo"],[i,n]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[e,/_/g," "],[a,"Nokia"],[i,l]],[/(pixel c)\b/i],[e,[a,Y],[i,n]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[e,[a,Y],[i,l]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[e,[a,X],[i,l]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[e,"Xperia Tablet"],[a,X],[i,n]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[e,[a,"OnePlus"],[i,l]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[e,[a,G],[i,n]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[e,/(.+)/g,"Fire Phone $1"],[a,G],[i,l]],[/(playbook);[-\w\),; ]+(rim)/i],[e,a,[i,n]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[e,[a,di],[i,l]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[e,[a,ui],[i,n]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[e,[a,ui],[i,l]],[/(nexus 9)/i],[e,[a,"HTC"],[i,n]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[a,[e,/_/g," "],[i,l]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[e,[a,"Acer"],[i,n]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[e,[a,"Meizu"],[i,l]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[a,e,[i,l]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[a,e,[i,n]],[/(surface duo)/i],[e,[a,ei],[i,n]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[e,[a,"Fairphone"],[i,l]],[/(u304aa)/i],[e,[a,"AT&T"],[i,l]],[/\bsie-(\w*)/i],[e,[a,"Siemens"],[i,l]],[/\b(rct\w+) b/i],[e,[a,"RCA"],[i,n]],[/\b(venue[\d ]{2,7}) b/i],[e,[a,"Dell"],[i,n]],[/\b(q(?:mv|ta)\w+) b/i],[e,[a,"Verizon"],[i,n]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[e,[a,"Barnes & Noble"],[i,n]],[/\b(tm\d{3}\w+) b/i],[e,[a,"NuVision"],[i,n]],[/\b(k88) b/i],[e,[a,"ZTE"],[i,n]],[/\b(nx\d{3}j) b/i],[e,[a,"ZTE"],[i,l]],[/\b(gen\d{3}) b.+49h/i],[e,[a,"Swiss"],[i,l]],[/\b(zur\d{3}) b/i],[e,[a,"Swiss"],[i,n]],[/\b((zeki)?tb.*\b) b/i],[e,[a,"Zeki"],[i,n]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[a,"Dragon Touch"],e,[i,n]],[/\b(ns-?\w{0,9}) b/i],[e,[a,"Insignia"],[i,n]],[/\b((nxa|next)-?\w{0,9}) b/i],[e,[a,"NextBook"],[i,n]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[a,"Voice"],e,[i,l]],[/\b(lvtel\-)?(v1[12]) b/i],[[a,"LvTel"],e,[i,l]],[/\b(ph-1) /i],[e,[a,"Essential"],[i,l]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[e,[a,"Envizen"],[i,n]],[/\b(trio[-\w\. ]+) b/i],[e,[a,"MachSpeed"],[i,n]],[/\btu_(1491) b/i],[e,[a,"Rotor"],[i,n]],[/(shield[\w ]+) b/i],[e,[a,"Nvidia"],[i,n]],[/(sprint) (\w+)/i],[a,e,[i,l]],[/(kin\.[onetw]{3})/i],[[e,/\./g," "],[a,ei],[i,l]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[e,[a,ri],[i,n]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[e,[a,ri],[i,l]],[/smart-tv.+(samsung)/i],[a,[i,p]],[/hbbtv.+maple;(\d+)/i],[[e,/^/,"SmartTV"],[a,ai],[i,p]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[a,ii],[i,p]],[/(apple) ?tv/i],[a,[e,V+" TV"],[i,p]],[/crkey/i],[[e,H+"cast"],[a,Y],[i,p]],[/droid.+aft(\w)( bui|\))/i],[e,[a,G],[i,p]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[e,[a,hi],[i,p]],[/(bravia[\w ]+)( bui|\))/i],[e,[a,X],[i,p]],[/(mitv-\w{5}) bui/i],[e,[a,oi],[i,p]],[/Hbbtv.*(technisat) (.*);/i],[a,e,[i,p]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[a,ti],[e,ti],[i,p]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[i,p]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[a,e,[i,I]],[/droid.+; (shield) bui/i],[e,[a,"Nvidia"],[i,I]],[/(playstation [345portablevi]+)/i],[e,[a,X],[i,I]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[e,[a,ei],[i,I]],[/((pebble))app/i],[a,e,[i,N]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[e,[a,V],[i,N]],[/droid.+; (glass) \d/i],[e,[a,Y],[i,N]],[/droid.+; (wt63?0{2,3})\)/i],[e,[a,ri],[i,N]],[/(quest( 2| pro)?)/i],[e,[a,vi],[i,N]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[a,[i,Q]],[/(aeobc)\b/i],[e,[a,G],[i,Q]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[e,[i,l]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[e,[i,n]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[i,n]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[i,l]],[/(android[-\w\. ]{0,9});.+buil/i],[e,[a,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[r,[o,Si+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[r,[o,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[o,r],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[r,o]],os:[[/microsoft (windows) (vista|xp)/i],[o,r],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[o,[r,si,ki]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[o,"Windows"],[r,si,ki]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[r,/_/g,"."],[o,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[o,gi],[r,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[r,o],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[o,r],[/\(bb(10);/i],[r,[o,di]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[r,[o,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[r,[o,W+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[r,[o,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[r,[o,"watchOS"]],[/crkey\/([\d\.]+)/i],[r,[o,H+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[o,fi],r],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[o,r],[/(sunos) ?([\w\.\d]*)/i],[[o,"Solaris"],r],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[o,r]]},v=function(b,c){if(typeof b===P&&(c=b,b=m),!(this instanceof v))return new v(b,c).getResult();var s=typeof E!==T&&E.navigator?E.navigator:m,u=b||(s&&s.userAgent?s.userAgent:d),k=s&&s.userAgentData?s.userAgentData:m,g=c?Ti(xi,c):xi,w=s&&s.userAgent==u;return this.getBrowser=function(){var t={};return t[o]=m,t[r]=m,L.call(t,u,g.browser),t[ci]=Oi(t[r]),w&&s&&s.brave&&typeof s.brave.isBrave==B&&(t[o]="Brave"),t},this.getCPU=function(){var t={};return t[h]=m,L.call(t,u,g.cpu),t},this.getDevice=function(){var t={};return t[a]=m,t[e]=m,t[i]=m,L.call(t,u,g.device),w&&!t[i]&&k&&k.mobile&&(t[i]=l),w&&t[e]=="Macintosh"&&s&&typeof s.standalone!==T&&s.maxTouchPoints&&s.maxTouchPoints>2&&(t[e]="iPad",t[i]=n),t},this.getEngine=function(){var t={};return t[o]=m,t[r]=m,L.call(t,u,g.engine),t},this.getOS=function(){var t={};return t[o]=m,t[r]=m,L.call(t,u,g.os),w&&!t[o]&&k&&k.platform!="Unknown"&&(t[o]=k.platform.replace(/chrome os/i,fi).replace(/macos/i,gi)),t},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return u},this.setUA=function(t){return u=typeof t===O&&t.length>$?ti(t,$):t,this},this.setUA(u),this};v.VERSION=wi,v.BROWSER=Z([o,r,ci]),v.CPU=Z([h]),v.DEVICE=Z([e,a,i,I,l,p,n,N,Q]),v.ENGINE=v.OS=Z([o,r]),f.exports&&(z=f.exports=v),z.UAParser=v;var M=typeof E!==T&&(E.jQuery||E.Zepto);if(M&&!M.ua){var J=new v;M.ua=J.getResult(),M.ua.get=function(){return J.getUA()},M.ua.set=function(b){J.setUA(b);var c=J.getResult();for(var s in c)M.ua[s]=c[s]}}})(typeof window=="object"?window:Ri)})(bi,bi.exports);var Vi=bi.exports;const Di=Mi(Vi);const Ai=new Di,Li={name:"UserAgent",data:()=>({data:""}),computed:{result(){return Ai.setUA(this.data),Ai.getResult()}},mounted(){this.data=navigator.userAgent}},F=f=>(zi("data-v-d10e7355"),f=f(),qi(),f),ji={key:0},Fi={key:0},Gi=F(()=>U("b",null,"浏览器",-1)),Hi={key:1},Wi=F(()=>U("b",null,"设备",-1)),Yi={key:2},Ki=F(()=>U("b",null,"操作系统",-1)),Xi={key:3},Zi=F(()=>U("b",null,"内核",-1)),Ji={key:4},Qi=F(()=>U("b",null,"架构",-1));function $i(f,z,E,m,wi,d){const q=Pi,B=Ui,T=Bi,P=Ii;return x(),y(Ei,null,[j(q,{level:3},{default:li(()=>[S(" 请输入一个UA开始解析 ")]),_:1}),j(B,{modelValue:f.data,"onUpdate:modelValue":z[0]||(z[0]=O=>f.data=O),placeholder:"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"},null,8,["modelValue"]),f.data?(x(),y(Ei,{key:0},[j(T),j(q,{level:3},{default:li(()=>[S(" 解析结果 ")]),_:1}),j(P,null,{default:li(()=>[d.result.ua?(x(),y("pre",ji,C(d.result.ua),1)):A("",!0),U("ul",null,[d.result.browser.name?(x(),y("li",Fi,[Gi,S(": "+C(`${d.result.browser.name} ${d.result.browser.version}`),1)])):A("",!0),d.result.device.type?(x(),y("li",Hi,[Wi,S(": "+C(`${d.result.device.type} / ${d.result.device.vendor} / ${d.result.device.model}`),1)])):A("",!0),d.result.os.name?(x(),y("li",Yi,[Ki,S(": "+C(`${d.result.os.name} / ${d.result.os.version}`),1)])):A("",!0),d.result.engine.name?(x(),y("li",Xi,[Zi,S(": "+C(`${d.result.engine.name} / ${d.result.engine.version}`),1)])):A("",!0),d.result.cpu.architecture?(x(),y("li",Ji,[Qi,S(": "+C(d.result.cpu.architecture),1)])):A("",!0)])]),_:1})],64)):A("",!0)],64)}const le=Ci(Li,[["render",$i],["__scopeId","data-v-d10e7355"]]);export{le as default};
