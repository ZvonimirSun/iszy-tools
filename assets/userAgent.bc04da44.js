import{ap as Ni,ab as Oi,al as Si,r as X,o as _,c as k,f as D,y as ti,A as _i,E as x,T as Ri,g as O,a as S,D as y}from"./vendor.9bb798a0.js";/* empty css               */import{_ as Mi}from"./index.ee6ec559.js";var si={exports:{}};(function(E,R){(function(f,m){var ni="0.7.31",u="",M="?",L="function",C="undefined",z="object",T="string",xi="major",a="model",o="name",i="type",e="vendor",r="version",p="architecture",U="console",l="mobile",t="tablet",v="smarttv",q="wearable",li="embedded",Z=255,K="Amazon",J="Apple",bi="ASUS",wi="BlackBerry",A="Browser",V="Chrome",yi="Edge",j="Firefox",G="Google",ci="Huawei",Q="LG",$="Microsoft",ui="Motorola",F="Opera",ii="Samsung",ei="Sony",di="Xiaomi",ai="Zebra",mi="Facebook",Ei=function(s,w){var n={};for(var d in s)w[d]&&w[d].length%2==0?n[d]=w[d].concat(s[d]):n[d]=s[d];return n},W=function(s){for(var w={},n=0;n<s.length;n++)w[s[n].toUpperCase()]=s[n];return w},pi=function(s,w){return typeof s===T?P(w).indexOf(P(s))!==-1:!1},P=function(s){return s.toLowerCase()},Ti=function(s){return typeof s===T?s.replace(/[^\d\.]/g,u).split(".")[0]:m},oi=function(s,w){if(typeof s===T)return s=s.replace(/^\s\s*/,u).replace(/\s\s*$/,u),typeof w===C?s:s.substring(0,Z)},B=function(s,w){for(var n=0,d,b,Y,c,I,g;n<w.length&&!I;){var gi=w[n],fi=w[n+1];for(d=b=0;d<gi.length&&!I;)if(I=gi[d++].exec(s),I)for(Y=0;Y<fi.length;Y++)g=I[++b],c=fi[Y],typeof c===z&&c.length>0?c.length===2?typeof c[1]==L?this[c[0]]=c[1].call(this,g):this[c[0]]=c[1]:c.length===3?typeof c[1]===L&&!(c[1].exec&&c[1].test)?this[c[0]]=g?c[1].call(this,g,c[2]):m:this[c[0]]=g?g.replace(c[1],c[2]):m:c.length===4&&(this[c[0]]=g?c[3].call(this,g.replace(c[1],c[2])):m):this[c]=g||m;n+=2}},ri=function(s,w){for(var n in w)if(typeof w[n]===z&&w[n].length>0){for(var d=0;d<w[n].length;d++)if(pi(w[n][d],s))return n===M?m:n}else if(pi(w[n],s))return n===M?m:n;return s},Ai={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},hi={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0","2000":"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0","7":"NT 6.1","8":"NT 6.2","8.1":"NT 6.3","10":["NT 6.4","NT 10.0"],RT:"ARM"},vi={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[r,[o,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[r,[o,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[o,r],[/opios[\/ ]+([\w\.]+)/i],[r,[o,F+" Mini"]],[/\bopr\/([\w\.]+)/i],[r,[o,F]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[o,r],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[r,[o,"UC"+A]],[/\bqbcore\/([\w\.]+)/i],[r,[o,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[r,[o,"WeChat"]],[/konqueror\/([\w\.]+)/i],[r,[o,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[r,[o,"IE"]],[/yabrowser\/([\w\.]+)/i],[r,[o,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[o,/(.+)/,"$1 Secure "+A],r],[/\bfocus\/([\w\.]+)/i],[r,[o,j+" Focus"]],[/\bopt\/([\w\.]+)/i],[r,[o,F+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[r,[o,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[r,[o,"Dolphin"]],[/coast\/([\w\.]+)/i],[r,[o,F+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[r,[o,"MIUI "+A]],[/fxios\/([-\w\.]+)/i],[r,[o,j]],[/\bqihu|(qi?ho?o?|360)browser/i],[[o,"360 "+A]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[o,/(.+)/,"$1 "+A],r],[/(comodo_dragon)\/([\w\.]+)/i],[[o,/_/g," "],r],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[o,r],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[o],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[o,mi],r],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[o,r],[/\bgsa\/([\w\.]+) .*safari\//i],[r,[o,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[r,[o,V+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[o,V+" WebView"],r],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[r,[o,"Android "+A]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[o,r],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[r,[o,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[r,o],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[o,[r,ri,Ai]],[/(webkit|khtml)\/([\w\.]+)/i],[o,r],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[o,"Netscape"],r],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[r,[o,j+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[o,r]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,P]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,u,P]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,P]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[a,[e,ii],[i,t]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[a,[e,ii],[i,l]],[/\((ip(?:hone|od)[\w ]*);/i],[a,[e,J],[i,l]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[a,[e,J],[i,t]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[a,[e,ci],[i,t]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[a,[e,ci],[i,l]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[a,/_/g," "],[e,di],[i,l]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[a,/_/g," "],[e,di],[i,t]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[a,[e,"OPPO"],[i,l]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[a,[e,"Vivo"],[i,l]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[a,[e,"Realme"],[i,l]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[a,[e,ui],[i,l]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[a,[e,ui],[i,t]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[a,[e,Q],[i,t]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[a,[e,Q],[i,l]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[a,[e,"Lenovo"],[i,t]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[a,/_/g," "],[e,"Nokia"],[i,l]],[/(pixel c)\b/i],[a,[e,G],[i,t]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[a,[e,G],[i,l]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[a,[e,ei],[i,l]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[a,"Xperia Tablet"],[e,ei],[i,t]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[a,[e,"OnePlus"],[i,l]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[a,[e,K],[i,t]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[a,/(.+)/g,"Fire Phone $1"],[e,K],[i,l]],[/(playbook);[-\w\),; ]+(rim)/i],[a,e,[i,t]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[a,[e,wi],[i,l]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[a,[e,bi],[i,t]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[a,[e,bi],[i,l]],[/(nexus 9)/i],[a,[e,"HTC"],[i,t]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[e,[a,/_/g," "],[i,l]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[a,[e,"Acer"],[i,t]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[a,[e,"Meizu"],[i,l]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[a,[e,"Sharp"],[i,l]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[e,a,[i,l]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[e,a,[i,t]],[/(surface duo)/i],[a,[e,$],[i,t]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[a,[e,"Fairphone"],[i,l]],[/(u304aa)/i],[a,[e,"AT&T"],[i,l]],[/\bsie-(\w*)/i],[a,[e,"Siemens"],[i,l]],[/\b(rct\w+) b/i],[a,[e,"RCA"],[i,t]],[/\b(venue[\d ]{2,7}) b/i],[a,[e,"Dell"],[i,t]],[/\b(q(?:mv|ta)\w+) b/i],[a,[e,"Verizon"],[i,t]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[a,[e,"Barnes & Noble"],[i,t]],[/\b(tm\d{3}\w+) b/i],[a,[e,"NuVision"],[i,t]],[/\b(k88) b/i],[a,[e,"ZTE"],[i,t]],[/\b(nx\d{3}j) b/i],[a,[e,"ZTE"],[i,l]],[/\b(gen\d{3}) b.+49h/i],[a,[e,"Swiss"],[i,l]],[/\b(zur\d{3}) b/i],[a,[e,"Swiss"],[i,t]],[/\b((zeki)?tb.*\b) b/i],[a,[e,"Zeki"],[i,t]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[e,"Dragon Touch"],a,[i,t]],[/\b(ns-?\w{0,9}) b/i],[a,[e,"Insignia"],[i,t]],[/\b((nxa|next)-?\w{0,9}) b/i],[a,[e,"NextBook"],[i,t]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[e,"Voice"],a,[i,l]],[/\b(lvtel\-)?(v1[12]) b/i],[[e,"LvTel"],a,[i,l]],[/\b(ph-1) /i],[a,[e,"Essential"],[i,l]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[a,[e,"Envizen"],[i,t]],[/\b(trio[-\w\. ]+) b/i],[a,[e,"MachSpeed"],[i,t]],[/\btu_(1491) b/i],[a,[e,"Rotor"],[i,t]],[/(shield[\w ]+) b/i],[a,[e,"Nvidia"],[i,t]],[/(sprint) (\w+)/i],[e,a,[i,l]],[/(kin\.[onetw]{3})/i],[[a,/\./g," "],[e,$],[i,l]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[a,[e,ai],[i,t]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[a,[e,ai],[i,l]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[e,a,[i,U]],[/droid.+; (shield) bui/i],[a,[e,"Nvidia"],[i,U]],[/(playstation [345portablevi]+)/i],[a,[e,ei],[i,U]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[a,[e,$],[i,U]],[/smart-tv.+(samsung)/i],[e,[i,v]],[/hbbtv.+maple;(\d+)/i],[[a,/^/,"SmartTV"],[e,ii],[i,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[e,Q],[i,v]],[/(apple) ?tv/i],[e,[a,J+" TV"],[i,v]],[/crkey/i],[[a,V+"cast"],[e,G],[i,v]],[/droid.+aft(\w)( bui|\))/i],[a,[e,K],[i,v]],[/\(dtv[\);].+(aquos)/i],[a,[e,"Sharp"],[i,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[e,oi],[a,oi],[i,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[i,v]],[/((pebble))app/i],[e,a,[i,q]],[/droid.+; (glass) \d/i],[a,[e,G],[i,q]],[/droid.+; (wt63?0{2,3})\)/i],[a,[e,ai],[i,q]],[/(quest( 2)?)/i],[a,[e,mi],[i,q]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[e,[i,li]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[a,[i,l]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[a,[i,t]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[i,t]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[i,l]],[/(android[-\w\. ]{0,9});.+buil/i],[a,[e,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[r,[o,yi+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[r,[o,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[o,r],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[r,o]],os:[[/microsoft (windows) (vista|xp)/i],[o,r],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[o,[r,ri,hi]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[o,"Windows"],[r,ri,hi]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[r,/_/g,"."],[o,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[o,"Mac OS"],[r,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[r,o],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[o,r],[/\(bb(10);/i],[r,[o,wi]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[r,[o,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[r,[o,j+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[r,[o,"webOS"]],[/crkey\/([\d\.]+)/i],[r,[o,V+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[o,"Chromium OS"],r],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[o,r],[/(sunos) ?([\w\.\d]*)/i],[[o,"Solaris"],r],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[o,r]]},h=function(s,w){if(typeof s===z&&(w=s,s=m),!(this instanceof h))return new h(s,w).getResult();var n=s||(typeof f!==C&&f.navigator&&f.navigator.userAgent?f.navigator.userAgent:u),d=w?Ei(vi,w):vi;return this.getBrowser=function(){var b={};return b[o]=m,b[r]=m,B.call(b,n,d.browser),b.major=Ti(b.version),b},this.getCPU=function(){var b={};return b[p]=m,B.call(b,n,d.cpu),b},this.getDevice=function(){var b={};return b[e]=m,b[a]=m,b[i]=m,B.call(b,n,d.device),b},this.getEngine=function(){var b={};return b[o]=m,b[r]=m,B.call(b,n,d.engine),b},this.getOS=function(){var b={};return b[o]=m,b[r]=m,B.call(b,n,d.os),b},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(b){return n=typeof b===T&&b.length>Z?oi(b,Z):b,this},this.setUA(n),this};h.VERSION=ni,h.BROWSER=W([o,r,xi]),h.CPU=W([p]),h.DEVICE=W([a,e,i,U,l,v,t,q,li]),h.ENGINE=h.OS=W([o,r]),E.exports&&(R=E.exports=h),R.UAParser=h;var N=typeof f!==C&&(f.jQuery||f.Zepto);if(N&&!N.ua){var H=new h;N.ua=H.getResult(),N.ua.get=function(){return H.getUA()},N.ua.set=function(s){H.setUA(s);var w=H.getResult();for(var n in w)N.ua[n]=w[n]}}})(typeof window=="object"?window:Ni)})(si,si.exports);var Ci=si.exports;const{Title:zi,Paragraph:Ui}=Ri,ki=new Ci,qi={name:"userAgent",components:{Title:zi,Input:Oi,Paragraph:Ui,Divider:Si},data:()=>({data:""}),computed:{result(){return ki.setUA(this.data),ki.getResult()}},mounted(){this.data=navigator.userAgent}},Pi=y("\u8BF7\u8F93\u5165\u4E00\u4E2AUA\u5F00\u59CB\u89E3\u6790"),Bi=y("\u89E3\u6790\u7ED3\u679C"),Ii={key:0},Di={key:0},Li=S("b",null,"\u6D4F\u89C8\u5668",-1),Vi={key:1},ji=S("b",null,"\u8BBE\u5907",-1),Gi={key:2},Fi=S("b",null,"\u64CD\u4F5C\u7CFB\u7EDF",-1),Wi={key:3},Hi=S("b",null,"\u5185\u6838",-1),Yi={key:4},Xi=S("b",null,"\u67B6\u6784",-1);function Zi(E,R,f,m,ni,u){const M=X("Title"),L=X("Input"),C=X("Divider"),z=X("Paragraph");return _(),k(_i,null,[D(M,{level:3},{default:ti(()=>[Pi]),_:1}),D(L,{placeholder:"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",value:E.data,"onUpdate:value":R[0]||(R[0]=T=>E.data=T)},null,8,["value"]),E.data?(_(),k(_i,{key:0},[D(C),D(M,{level:3},{default:ti(()=>[Bi]),_:1}),D(z,null,{default:ti(()=>[u.result.ua?(_(),k("pre",Ii,O(u.result.ua),1)):x("",!0),S("ul",null,[u.result.browser.name?(_(),k("li",Di,[Li,y(": "+O(`${u.result.browser.name} ${u.result.browser.version}`),1)])):x("",!0),u.result.device.type?(_(),k("li",Vi,[ji,y(": "+O(`${u.result.device.type} / ${u.result.device.vendor} / ${u.result.device.model}`),1)])):x("",!0),u.result.os.name?(_(),k("li",Gi,[Fi,y(": "+O(`${u.result.os.name} / ${u.result.os.version}`),1)])):x("",!0),u.result.engine.name?(_(),k("li",Wi,[Hi,y(": "+O(`${u.result.engine.name} / ${u.result.engine.version}`),1)])):x("",!0),u.result.cpu.architecture?(_(),k("li",Yi,[Xi,y(": "+O(u.result.cpu.architecture),1)])):x("",!0)])]),_:1})],64)):x("",!0)],64)}var $i=Mi(qi,[["render",Zi]]);export{$i as default};
