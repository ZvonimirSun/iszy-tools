import{N as Ni,_ as Oi,o as k,J as x,a as L,w as si,F as ki,$ as y,L as Ri,I as Mi,ci as Ci,b as E,a0 as N,K as O,S as Ui,T as zi}from"./index.bbc49104.js";import{_ as qi}from"./index.6d4b8726.js";var ni={exports:{}};(function(f,R){(function(_,m){var li="1.0.32",u="",M="?",j="function",C="undefined",U="object",A="string",yi="major",a="model",o="name",i="type",e="vendor",r="version",h="architecture",z="console",l="mobile",t="tablet",p="smarttv",q="wearable",bi="embedded",Z=350,J="Amazon",Q="Apple",wi="ASUS",ci="BlackBerry",S="Browser",D="Chrome",Ei="Edge",F="Firefox",G="Google",ui="Huawei",$="LG",ii="Microsoft",di="Motorola",W="Opera",ei="Samsung",mi="Sharp",H="Sony",ai="Xiaomi",oi="Zebra",pi="Facebook",Ai=function(s,w){var n={};for(var d in s)w[d]&&w[d].length%2===0?n[d]=w[d].concat(s[d]):n[d]=s[d];return n},Y=function(s){for(var w={},n=0;n<s.length;n++)w[s[n].toUpperCase()]=s[n];return w},hi=function(s,w){return typeof s===A?B(w).indexOf(B(s))!==-1:!1},B=function(s){return s.toLowerCase()},Si=function(s){return typeof s===A?s.replace(/[^\d\.]/g,u).split(".")[0]:m},ri=function(s,w){if(typeof s===A)return s=s.replace(/^\s\s*/,u).replace(/\s\s*$/,u),typeof w===C?s:s.substring(0,Z)},I=function(s,w){for(var n=0,d,b,X,c,P,g;n<w.length&&!P;){var gi=w[n],_i=w[n+1];for(d=b=0;d<gi.length&&!P;)if(P=gi[d++].exec(s),P)for(X=0;X<_i.length;X++)g=P[++b],c=_i[X],typeof c===U&&c.length>0?c.length===2?typeof c[1]==j?this[c[0]]=c[1].call(this,g):this[c[0]]=c[1]:c.length===3?typeof c[1]===j&&!(c[1].exec&&c[1].test)?this[c[0]]=g?c[1].call(this,g,c[2]):m:this[c[0]]=g?g.replace(c[1],c[2]):m:c.length===4&&(this[c[0]]=g?c[3].call(this,g.replace(c[1],c[2])):m):this[c]=g||m;n+=2}},ti=function(s,w){for(var n in w)if(typeof w[n]===U&&w[n].length>0){for(var d=0;d<w[n].length;d++)if(hi(w[n][d],s))return n===M?m:n}else if(hi(w[n],s))return n===M?m:n;return s},Ti={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},vi={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},fi={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[r,[o,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[r,[o,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[o,r],[/opios[\/ ]+([\w\.]+)/i],[r,[o,W+" Mini"]],[/\bopr\/([\w\.]+)/i],[r,[o,W]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[o,r],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[r,[o,"UC"+S]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[r,[o,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[r,[o,"WeChat"]],[/konqueror\/([\w\.]+)/i],[r,[o,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[r,[o,"IE"]],[/yabrowser\/([\w\.]+)/i],[r,[o,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[o,/(.+)/,"$1 Secure "+S],r],[/\bfocus\/([\w\.]+)/i],[r,[o,F+" Focus"]],[/\bopt\/([\w\.]+)/i],[r,[o,W+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[r,[o,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[r,[o,"Dolphin"]],[/coast\/([\w\.]+)/i],[r,[o,W+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[r,[o,"MIUI "+S]],[/fxios\/([-\w\.]+)/i],[r,[o,F]],[/\bqihu|(qi?ho?o?|360)browser/i],[[o,"360 "+S]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[o,/(.+)/,"$1 "+S],r],[/(comodo_dragon)\/([\w\.]+)/i],[[o,/_/g," "],r],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[o,r],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[o],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[o,pi],r],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[o,r],[/\bgsa\/([\w\.]+) .*safari\//i],[r,[o,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[r,[o,D+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[o,D+" WebView"],r],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[r,[o,"Android "+S]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[o,r],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[r,[o,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[r,o],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[o,[r,ti,Ti]],[/(webkit|khtml)\/([\w\.]+)/i],[o,r],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[o,"Netscape"],r],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[r,[o,F+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[o,r]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,B]],[/((?:i[346]|x)86)[;\)]/i],[[h,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[h,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[h,"armhf"]],[/windows (ce|mobile); ppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[h,/ower/,u,B]],[/(sun4\w)[;\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[h,B]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[a,[e,ei],[i,t]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[a,[e,ei],[i,l]],[/\((ip(?:hone|od)[\w ]*);/i],[a,[e,Q],[i,l]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[a,[e,Q],[i,t]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[a,[e,ui],[i,t]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[a,[e,ui],[i,l]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[a,/_/g," "],[e,ai],[i,l]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[a,/_/g," "],[e,ai],[i,t]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[a,[e,"OPPO"],[i,l]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[a,[e,"Vivo"],[i,l]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[a,[e,"Realme"],[i,l]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[a,[e,di],[i,l]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[a,[e,di],[i,t]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[a,[e,$],[i,t]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[a,[e,$],[i,l]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[a,[e,"Lenovo"],[i,t]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[a,/_/g," "],[e,"Nokia"],[i,l]],[/(pixel c)\b/i],[a,[e,G],[i,t]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[a,[e,G],[i,l]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[a,[e,H],[i,l]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[a,"Xperia Tablet"],[e,H],[i,t]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[a,[e,"OnePlus"],[i,l]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[a,[e,J],[i,t]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[a,/(.+)/g,"Fire Phone $1"],[e,J],[i,l]],[/(playbook);[-\w\),; ]+(rim)/i],[a,e,[i,t]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[a,[e,ci],[i,l]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[a,[e,wi],[i,t]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[a,[e,wi],[i,l]],[/(nexus 9)/i],[a,[e,"HTC"],[i,t]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],[e,[a,/_/g," "],[i,l]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[a,[e,"Acer"],[i,t]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[a,[e,"Meizu"],[i,l]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[a,[e,mi],[i,l]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[e,a,[i,l]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[e,a,[i,t]],[/(surface duo)/i],[a,[e,ii],[i,t]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[a,[e,"Fairphone"],[i,l]],[/(u304aa)/i],[a,[e,"AT&T"],[i,l]],[/\bsie-(\w*)/i],[a,[e,"Siemens"],[i,l]],[/\b(rct\w+) b/i],[a,[e,"RCA"],[i,t]],[/\b(venue[\d ]{2,7}) b/i],[a,[e,"Dell"],[i,t]],[/\b(q(?:mv|ta)\w+) b/i],[a,[e,"Verizon"],[i,t]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[a,[e,"Barnes & Noble"],[i,t]],[/\b(tm\d{3}\w+) b/i],[a,[e,"NuVision"],[i,t]],[/\b(k88) b/i],[a,[e,"ZTE"],[i,t]],[/\b(nx\d{3}j) b/i],[a,[e,"ZTE"],[i,l]],[/\b(gen\d{3}) b.+49h/i],[a,[e,"Swiss"],[i,l]],[/\b(zur\d{3}) b/i],[a,[e,"Swiss"],[i,t]],[/\b((zeki)?tb.*\b) b/i],[a,[e,"Zeki"],[i,t]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[e,"Dragon Touch"],a,[i,t]],[/\b(ns-?\w{0,9}) b/i],[a,[e,"Insignia"],[i,t]],[/\b((nxa|next)-?\w{0,9}) b/i],[a,[e,"NextBook"],[i,t]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[e,"Voice"],a,[i,l]],[/\b(lvtel\-)?(v1[12]) b/i],[[e,"LvTel"],a,[i,l]],[/\b(ph-1) /i],[a,[e,"Essential"],[i,l]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[a,[e,"Envizen"],[i,t]],[/\b(trio[-\w\. ]+) b/i],[a,[e,"MachSpeed"],[i,t]],[/\btu_(1491) b/i],[a,[e,"Rotor"],[i,t]],[/(shield[\w ]+) b/i],[a,[e,"Nvidia"],[i,t]],[/(sprint) (\w+)/i],[e,a,[i,l]],[/(kin\.[onetw]{3})/i],[[a,/\./g," "],[e,ii],[i,l]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[a,[e,oi],[i,t]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[a,[e,oi],[i,l]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[e,a,[i,z]],[/droid.+; (shield) bui/i],[a,[e,"Nvidia"],[i,z]],[/(playstation [345portablevi]+)/i],[a,[e,H],[i,z]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[a,[e,ii],[i,z]],[/smart-tv.+(samsung)/i],[e,[i,p]],[/hbbtv.+maple;(\d+)/i],[[a,/^/,"SmartTV"],[e,ei],[i,p]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[e,$],[i,p]],[/(apple) ?tv/i],[e,[a,Q+" TV"],[i,p]],[/crkey/i],[[a,D+"cast"],[e,G],[i,p]],[/droid.+aft(\w)( bui|\))/i],[a,[e,J],[i,p]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[a,[e,mi],[i,p]],[/(bravia[\w ]+)( bui|\))/i],[a,[e,H],[i,p]],[/(mitv-\w{5}) bui/i],[a,[e,ai],[i,p]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[e,ri],[a,ri],[i,p]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[i,p]],[/((pebble))app/i],[e,a,[i,q]],[/droid.+; (glass) \d/i],[a,[e,G],[i,q]],[/droid.+; (wt63?0{2,3})\)/i],[a,[e,oi],[i,q]],[/(quest( 2)?)/i],[a,[e,pi],[i,q]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[e,[i,bi]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[a,[i,l]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[a,[i,t]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[i,t]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[i,l]],[/(android[-\w\. ]{0,9});.+buil/i],[a,[e,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[r,[o,Ei+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[r,[o,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[o,r],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[r,o]],os:[[/microsoft (windows) (vista|xp)/i],[o,r],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[o,[r,ti,vi]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[o,"Windows"],[r,ti,vi]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[r,/_/g,"."],[o,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[o,"Mac OS"],[r,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[r,o],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[o,r],[/\(bb(10);/i],[r,[o,ci]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[r,[o,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[r,[o,F+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[r,[o,"webOS"]],[/crkey\/([\d\.]+)/i],[r,[o,D+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[o,"Chromium OS"],r],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[o,r],[/(sunos) ?([\w\.\d]*)/i],[[o,"Solaris"],r],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[o,r]]},v=function(s,w){if(typeof s===U&&(w=s,s=m),!(this instanceof v))return new v(s,w).getResult();var n=s||(typeof _!==C&&_.navigator&&_.navigator.userAgent?_.navigator.userAgent:u),d=w?Ai(fi,w):fi;return this.getBrowser=function(){var b={};return b[o]=m,b[r]=m,I.call(b,n,d.browser),b.major=Si(b.version),b},this.getCPU=function(){var b={};return b[h]=m,I.call(b,n,d.cpu),b},this.getDevice=function(){var b={};return b[e]=m,b[a]=m,b[i]=m,I.call(b,n,d.device),b},this.getEngine=function(){var b={};return b[o]=m,b[r]=m,I.call(b,n,d.engine),b},this.getOS=function(){var b={};return b[o]=m,b[r]=m,I.call(b,n,d.os),b},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(b){return n=typeof b===A&&b.length>Z?ri(b,Z):b,this},this.setUA(n),this};v.VERSION=li,v.BROWSER=Y([o,r,yi]),v.CPU=Y([h]),v.DEVICE=Y([a,e,i,z,l,p,t,q,bi]),v.ENGINE=v.OS=Y([o,r]),f.exports&&(R=f.exports=v),R.UAParser=v;var T=typeof _!==C&&(_.jQuery||_.Zepto);if(T&&!T.ua){var K=new v;T.ua=K.getResult(),T.ua.get=function(){return K.getUA()},T.ua.set=function(s){K.setUA(s);var w=K.getResult();for(var n in w)T.ua[n]=w[n]}}})(typeof window=="object"?window:Ni)})(ni,ni.exports);const Bi=ni.exports;const xi=new Bi,Ii={name:"UserAgent",data:()=>({data:""}),computed:{result(){return xi.setUA(this.data),xi.getResult()}},mounted(){this.data=navigator.userAgent}},V=f=>(Ui("data-v-86dff93b"),f=f(),zi(),f),Pi={key:0},Li={key:0},Vi=V(()=>O("b",null,"\u6D4F\u89C8\u5668",-1)),ji={key:1},Di=V(()=>O("b",null,"\u8BBE\u5907",-1)),Fi={key:2},Gi=V(()=>O("b",null,"\u64CD\u4F5C\u7CFB\u7EDF",-1)),Wi={key:3},Hi=V(()=>O("b",null,"\u5185\u6838",-1)),Yi={key:4},Ki=V(()=>O("b",null,"\u67B6\u6784",-1));function Xi(f,R,_,m,li,u){const M=Ri,j=Mi,C=qi,U=Ci;return k(),x(ki,null,[L(M,{level:3},{default:si(()=>[E(" \u8BF7\u8F93\u5165\u4E00\u4E2AUA\u5F00\u59CB\u89E3\u6790 ")]),_:1}),L(j,{value:f.data,"onUpdate:value":R[0]||(R[0]=A=>f.data=A),placeholder:"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"},null,8,["value"]),f.data?(k(),x(ki,{key:0},[L(C),L(M,{level:3},{default:si(()=>[E(" \u89E3\u6790\u7ED3\u679C ")]),_:1}),L(U,null,{default:si(()=>[u.result.ua?(k(),x("pre",Pi,N(u.result.ua),1)):y("",!0),O("ul",null,[u.result.browser.name?(k(),x("li",Li,[Vi,E(": "+N(`${u.result.browser.name} ${u.result.browser.version}`),1)])):y("",!0),u.result.device.type?(k(),x("li",ji,[Di,E(": "+N(`${u.result.device.type} / ${u.result.device.vendor} / ${u.result.device.model}`),1)])):y("",!0),u.result.os.name?(k(),x("li",Fi,[Gi,E(": "+N(`${u.result.os.name} / ${u.result.os.version}`),1)])):y("",!0),u.result.engine.name?(k(),x("li",Wi,[Hi,E(": "+N(`${u.result.engine.name} / ${u.result.engine.version}`),1)])):y("",!0),u.result.cpu.architecture?(k(),x("li",Yi,[Ki,E(": "+N(u.result.cpu.architecture),1)])):y("",!0)])]),_:1})],64)):y("",!0)],64)}const Qi=Oi(Ii,[["render",Xi],["__scopeId","data-v-86dff93b"]]);export{Qi as default};