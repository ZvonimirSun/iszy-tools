import{a0 as de,E as H,r as M,K as ii,G as D,w as yi,N,W as ue,Y as qi,F as q,H as z}from"./index-CYDKG0Vj.js";import{E as be}from"./el-divider-GPr-f2Jp.js";import{T as ce,P as fe}from"./Router-T3FaHp3l.js";var he="2.0.3",Ui=500,zi="user-agent",Y="",Gi="?",mi="function",P="undefined",K="object",Li="string",g="browser",O="cpu",A="device",E="engine",x="os",j="result",r="name",i="type",t="vendor",o="version",v="architecture",di="major",e="model",li="console",u="mobile",h="tablet",p="smarttv",_="wearable",Ei="xr",wi="embedded",ei="inapp",Di="brands",V="formFactors",Ni="fullVersionList",X="platform",Fi="platformVersion",gi="bitness",B="sec-ch-ua",me=B+"-full-version-list",pe=B+"-arch",ge=B+"-"+gi,ve=B+"-form-factors",ke=B+"-"+u,xe=B+"-"+e,ae=B+"-"+X,ye=ae+"-version",ne=[Di,Ni,u,e,X,Fi,v,V,gi],ci="Amazon",G="Apple",Wi="ASUS",ji="BlackBerry",F="Google",Xi="Huawei",Yi="Lenovo",Ki="Honor",fi="LG",_i="Microsoft",Ai="Motorola",Oi="Nvidia",$i="OnePlus",Ri="OPPO",ti="Samsung",Zi="Sharp",ri="Sony",Si="Xiaomi",Ci="Zebra",Ji="Chrome",Qi="Chromium",I="Chromecast",Ee="Edge",oi="Firefox",ai="Opera",Ti="Facebook",ie="Sogou",W="Mobile ",ni=" Browser",Pi="Windows",_e=typeof window!==P,k=_e&&window.navigator?window.navigator:void 0,U=k&&k.userAgentData?k.userAgentData:void 0,Ae=function(a,n){var s={},c=n;if(!pi(n)){c={};for(var w in n)for(var d in n[w])c[d]=n[w][d].concat(c[d]?c[d]:[])}for(var l in a)s[l]=c[l]&&c[l].length%2===0?c[l].concat(a[l]):a[l];return s},vi=function(a){for(var n={},s=0;s<a.length;s++)n[a[s].toUpperCase()]=a[s];return n},Bi=function(a,n){if(typeof a===K&&a.length>0){for(var s in a)if(R(a[s])==R(n))return!0;return!1}return Z(a)?R(n).indexOf(R(a))!==-1:!1},pi=function(a,n){for(var s in a)return/^(browser|cpu|device|engine|os)$/.test(s)||(n?pi(a[s]):!1)},Z=function(a){return typeof a===Li},Hi=function(a){if(a){for(var n=[],s=$(/\\?\"/g,a).split(","),c=0;c<s.length;c++)if(s[c].indexOf(";")>-1){var w=ui(s[c]).split(";v=");n[c]={brand:w[0],version:w[1]}}else n[c]=ui(s[c]);return n}},R=function(a){return Z(a)?a.toLowerCase():a},Mi=function(a){return Z(a)?$(/[^\d\.]/g,a).split(".")[0]:void 0},S=function(a){for(var n in a){var s=a[n];typeof s==K&&s.length==2?this[s[0]]=s[1]:this[s]=void 0}return this},$=function(a,n){return Z(n)?n.replace(a,Y):n},si=function(a){return $(/\\?\"/g,a)},ui=function(a,n){if(Z(a))return a=$(/^\s\s*/,a),typeof n===P?a:a.substring(0,Ui)},Ii=function(a,n){if(!(!a||!n))for(var s=0,c,w,d,l,f,b;s<n.length&&!f;){var m=n[s],y=n[s+1];for(c=w=0;c<m.length&&!f&&m[c];)if(f=m[c++].exec(a),f)for(d=0;d<y.length;d++)b=f[++w],l=y[d],typeof l===K&&l.length>0?l.length===2?typeof l[1]==mi?this[l[0]]=l[1].call(this,b):this[l[0]]=l[1]:l.length===3?typeof l[1]===mi&&!(l[1].exec&&l[1].test)?this[l[0]]=b?l[1].call(this,b,l[2]):void 0:this[l[0]]=b?b.replace(l[1],l[2]):void 0:l.length===4&&(this[l[0]]=b?l[3].call(this,b.replace(l[1],l[2])):void 0):this[l]=b||void 0;s+=2}},L=function(a,n){for(var s in n)if(typeof n[s]===K&&n[s].length>0){for(var c=0;c<n[s].length;c++)if(Bi(n[s][c],a))return s===Gi?void 0:s}else if(Bi(n[s],a))return s===Gi?void 0:s;return n.hasOwnProperty("*")?n["*"]:a},ee={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},te={embedded:"Automotive",mobile:"Mobile",tablet:["Tablet","EInk"],smarttv:"TV",wearable:"Watch",xr:["VR","XR"],"?":["Desktop","Unknown"],"*":void 0},re={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[o,[r,W+"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[o,[r,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[r,o],[/opios[\/ ]+([\w\.]+)/i],[o,[r,ai+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[o,[r,ai+" GX"]],[/\bopr\/([\w\.]+)/i],[o,[r,ai]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[o,[r,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[o,[r,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser)\/([-\w\.]+)/i,/(heytap|ovi|115|surf)browser\/([\d\.]+)/i,/(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i],[r,o],[/quark(?:pc)?\/([-\w\.]+)/i],[o,[r,"Quark"]],[/\bddg\/([\w\.]+)/i],[o,[r,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[o,[r,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[o,[r,"WeChat"]],[/konqueror\/([\w\.]+)/i],[o,[r,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[o,[r,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[o,[r,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[o,[r,"Smart "+Yi+ni]],[/(avast|avg)\/([\w\.]+)/i],[[r,/(.+)/,"$1 Secure"+ni],o],[/\bfocus\/([\w\.]+)/i],[o,[r,oi+" Focus"]],[/\bopt\/([\w\.]+)/i],[o,[r,ai+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[o,[r,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[o,[r,"Dolphin"]],[/coast\/([\w\.]+)/i],[o,[r,ai+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[o,[r,"MIUI"+ni]],[/fxios\/([\w\.-]+)/i],[o,[r,W+oi]],[/\bqihoobrowser\/?([\w\.]*)/i],[o,[r,"360"]],[/\b(qq)\/([\w\.]+)/i],[[r,/(.+)/,"$1Browser"],o],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[r,/(.+)/,"$1"+ni],o],[/samsungbrowser\/([\w\.]+)/i],[o,[r,ti+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[o,[r,ie+" Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[r,ie+" Mobile"],o],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[r,o],[/(lbbrowser|rekonq)/i],[r],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[o,r],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[r,Ti],o,[i,ei]],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/(daum)apps[\/ ]([\w\.]+)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(instagram|snapchat)[\/ ]([-\w\.]+)/i],[r,o,[i,ei]],[/\bgsa\/([\w\.]+) .*safari\//i],[o,[r,"GSA"],[i,ei]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[o,[r,"TikTok"],[i,ei]],[/\[(linkedin)app\]/i],[r,[i,ei]],[/(chromium)[\/ ]([-\w\.]+)/i],[r,o],[/headlesschrome(?:\/([\w\.]+)| )/i],[o,[r,Ji+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[r,Ji+" WebView"],o],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[o,[r,"Android"+ni]],[/chrome\/([\w\.]+) mobile/i],[o,[r,W+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[r,o],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[o,[r,W+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[r,W+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[o,r],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[r,[o,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[r,o],[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[r,W+oi],o],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[r,"Netscape"],o],[/(wolvic|librewolf)\/([\w\.]+)/i],[r,o],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[o,[r,oi+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[r,[o,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[r,[o,/[^\d\.]+./,Y]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[[v,"amd64"]],[/(ia32(?=;))/i,/\b((i[346]|x)86)(pc)?\b/i],[[v,"ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[[v,"arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[[v,"armhf"]],[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[[v,"arm"]],[/((ppc|powerpc)(64)?)( mac|;|\))/i],[[v,/ower/,Y,R]],[/ sun4\w[;\)]/i],[[v,"sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],[[v,R]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[e,[t,ti],[i,h]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[e,[t,ti],[i,u]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[e,[t,G],[i,u]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[e,[t,G],[i,h]],[/(macintosh);/i],[e,[t,G]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[e,[t,Zi],[i,u]],[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[e,[t,Ki],[i,h]],[/honor([-\w ]+)[;\)]/i],[e,[t,Ki],[i,u]],[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[e,[t,Xi],[i,h]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[e,[t,Xi],[i,u]],[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[e,/_/g," "],[t,Si],[i,h]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,/ ([\w ]+) miui\/v?\d/i],[[e,/_/g," "],[t,Si],[i,u]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[e,[t,Ri],[i,u]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[e,[t,L,{OnePlus:["304","403","203"],"*":Ri}],[i,h]],[/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],[e,[t,"BLU"],[i,u]],[/; vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[e,[t,"Vivo"],[i,u]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[e,[t,"Realme"],[i,u]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[e,[t,Ai],[i,u]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[e,[t,Ai],[i,h]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[e,[t,fi],[i,h]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch))(\w+)/i,/\blg-?([\d\w]+) bui/i],[e,[t,fi],[i,u]],[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[e,[t,Yi],[i,h]],[/(nokia) (t[12][01])/i],[t,e,[i,h]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*))/i],[[e,/_/g," "],[i,u],[t,"Nokia"]],[/(pixel (c|tablet))\b/i],[e,[t,F],[i,h]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[e,[t,F],[i,u]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[e,[t,ri],[i,u]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[e,"Xperia Tablet"],[t,ri],[i,h]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[e,[t,$i],[i,u]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[e,[t,ci],[i,h]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[e,/(.+)/g,"Fire Phone $1"],[t,ci],[i,u]],[/(playbook);[-\w\),; ]+(rim)/i],[e,t,[i,h]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[e,[t,ji],[i,u]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[e,[t,Wi],[i,h]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[e,[t,Wi],[i,u]],[/(nexus 9)/i],[e,[t,"HTC"],[i,h]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[t,[e,/_/g," "],[i,u]],[/tcl (xess p17aa)/i,/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],[e,[t,"TCL"],[i,h]],[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],[e,[t,"TCL"],[i,u]],[/(itel) ((\w+))/i],[[t,R],e,[i,L,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[e,[t,"Acer"],[i,h]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[e,[t,"Meizu"],[i,u]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[e,[t,"Ulefone"],[i,u]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[e,[t,"Energizer"],[i,u]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[e,[t,"Cat"],[i,u]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[e,[t,"Smartfren"],[i,u]],[/droid.+; (a(?:015|06[35]|142p?))/i],[e,[t,"Nothing"],[i,u]],[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[e,[t,"Archos"],[i,h]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[e,[t,"Archos"],[i,u]],[/(imo) (tab \w+)/i,/(infinix) (x1101b?)/i],[t,e,[i,h]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (blu|hmd|imo|tcl)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,/(hp) ([\w ]+\w)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,/(oppo) ?([\w ]+) bui/i],[t,e,[i,u]],[/(kobo)\s(ereader|touch)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i],[t,e,[i,h]],[/(surface duo)/i],[e,[t,_i],[i,h]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[e,[t,"Fairphone"],[i,u]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[e,[t,Oi],[i,h]],[/(sprint) (\w+)/i],[t,e,[i,u]],[/(kin\.[onetw]{3})/i],[[e,/\./g," "],[t,_i],[i,u]],[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[e,[t,Ci],[i,h]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[e,[t,Ci],[i,u]],[/smart-tv.+(samsung)/i],[t,[i,p]],[/hbbtv.+maple;(\d+)/i],[[e,/^/,"SmartTV"],[t,ti],[i,p]],[/tcast.+(lg)e?. ([-\w]+)/i],[t,e,[i,p]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[t,fi],[i,p]],[/(apple) ?tv/i],[t,[e,G+" TV"],[i,p]],[/crkey.*devicetype\/chromecast/i],[[e,I+" Third Generation"],[t,F],[i,p]],[/crkey.*devicetype\/([^/]*)/i],[[e,/^/,"Chromecast "],[t,F],[i,p]],[/fuchsia.*crkey/i],[[e,I+" Nest Hub"],[t,F],[i,p]],[/crkey/i],[[e,I],[t,F],[i,p]],[/(portaltv)/i],[e,[t,Ti],[i,p]],[/droid.+aft(\w+)( bui|\))/i],[e,[t,ci],[i,p]],[/(shield \w+ tv)/i],[e,[t,Oi],[i,p]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[e,[t,Zi],[i,p]],[/(bravia[\w ]+)( bui|\))/i],[e,[t,ri],[i,p]],[/(mi(tv|box)-?\w+) bui/i],[e,[t,Si],[i,p]],[/Hbbtv.*(technisat) (.*);/i],[t,e,[i,p]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[t,ui],[e,ui],[i,p]],[/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],[e,[i,p]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[i,p]],[/(ouya)/i,/(nintendo) (\w+)/i],[t,e,[i,li]],[/droid.+; (shield)( bui|\))/i],[e,[t,Oi],[i,li]],[/(playstation \w+)/i],[e,[t,ri],[i,li]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[e,[t,_i],[i,li]],[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[e,[t,ti],[i,_]],[/((pebble))app/i,/(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[t,e,[i,_]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[e,[t,Ri],[i,_]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[e,[t,G],[i,_]],[/(opwwe\d{3})/i],[e,[t,$i],[i,_]],[/(moto 360)/i],[e,[t,Ai],[i,_]],[/(smartwatch 3)/i],[e,[t,ri],[i,_]],[/(g watch r)/i],[e,[t,fi],[i,_]],[/droid.+; (wt63?0{2,3})\)/i],[e,[t,Ci],[i,_]],[/droid.+; (glass) \d/i],[e,[t,F],[i,Ei]],[/(pico) (4|neo3(?: link|pro)?)/i],[t,e,[i,Ei]],[/(quest( \d| pro)?s?).+vr/i],[e,[t,Ti],[i,Ei]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[t,[i,wi]],[/(aeobc)\b/i],[e,[t,ci],[i,wi]],[/(homepod).+mac os/i],[e,[t,G],[i,wi]],[/windows iot/i],[[i,wi]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i],[e,[i,L,{mobile:"Mobile",xr:"VR","*":h}]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[i,h]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[i,u]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[e,[t,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[o,[r,Ee+"HTML"]],[/(arkweb)\/([\w\.]+)/i],[r,o],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[o,[r,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[r,o],[/ladybird\//i],[[r,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[o,r]],os:[[/microsoft (windows) (vista|xp)/i],[r,o],[/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],[r,[o,L,ee]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[o,L,ee],[r,Pi]],[/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[o,/_/g,"."],[r,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[r,"macOS"],[o,/_/g,"."]],[/android ([\d\.]+).*crkey/i],[o,[r,I+" Android"]],[/fuchsia.*crkey\/([\d\.]+)/i],[o,[r,I+" Fuchsia"]],[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],[o,[r,I+" SmartSpeaker"]],[/linux.*crkey\/([\d\.]+)/i],[o,[r,I+" Linux"]],[/crkey\/([\d\.]+)/i],[o,[r,I]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[o,r],[/(ubuntu) ([\w\.]+) like android/i],[[r,/(.+)/,"$1 Touch"],o],[/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/\.; ]?([\d\.]*)/i],[r,o],[/\(bb(10);/i],[o,[r,ji]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[o,[r,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[o,[r,oi+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[o,[r,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[o,[r,"watchOS"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[r,"Chrome OS"],o],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) (\w+)/i,/(xbox); +xbox ([^\);]+)/i,/(pico) .+os([\w\.]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[r,o],[/(sunos) ?([\w\.\d]*)/i],[[r,"Solaris"],o],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[r,o]]},hi=function(){var a={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}};return S.call(a.init,[[g,[r,o,di,i]],[O,[v]],[A,[i,e,t]],[E,[r,o]],[x,[r,o]]]),S.call(a.isIgnore,[[g,[o,di]],[E,[o]],[x,[o]]]),S.call(a.isIgnoreRgx,[[g,/ ?browser$/i],[x,/ ?os$/i]]),S.call(a.toString,[[g,[r,o]],[O,[v]],[A,[t,e]],[E,[r,o]],[x,[r,o]]]),a}(),Oe=function(a,n){var s=hi.init[n],c=hi.isIgnore[n]||0,w=hi.isIgnoreRgx[n]||0,d=hi.toString[n]||0;function l(){S.call(this,s)}return l.prototype.getItem=function(){return a},l.prototype.withClientHints=function(){return U?U.getHighEntropyValues(ne).then(function(f){return a.setCH(new se(f,!1)).parseCH().get()}):a.parseCH().get()},l.prototype.withFeatureCheck=function(){return a.detectFeature().get()},n!=j&&(l.prototype.is=function(f){var b=!1;for(var m in this)if(this.hasOwnProperty(m)&&!Bi(c,m)&&R(w?$(w,this[m]):this[m])==R(w?$(w,f):f)){if(b=!0,f!=P)break}else if(f==P&&b){b=!b;break}return b},l.prototype.toString=function(){var f=Y;for(var b in d)typeof this[d[b]]!==P&&(f+=(f?" ":Y)+this[d[b]]);return f||P}),U||(l.prototype.then=function(f){var b=this,m=function(){for(var T in b)b.hasOwnProperty(T)&&(this[T]=b[T])};m.prototype={is:l.prototype.is,toString:l.prototype.toString};var y=new m;return f(y),y}),new l};function se(a,n){if(a=a||{},S.call(this,ne),n)S.call(this,[[Di,Hi(a[B])],[Ni,Hi(a[me])],[u,/\?1/.test(a[ke])],[e,si(a[xe])],[X,si(a[ae])],[Fi,si(a[ye])],[v,si(a[pe])],[V,Hi(a[ve])],[gi,si(a[ge])]]);else for(var s in a)this.hasOwnProperty(s)&&typeof a[s]!==P&&(this[s]=a[s])}function oe(a,n,s,c){return this.get=function(w){return w?this.data.hasOwnProperty(w)?this.data[w]:void 0:this.data},this.set=function(w,d){return this.data[w]=d,this},this.setCH=function(w){return this.uaCH=w,this},this.detectFeature=function(){if(k&&k.userAgent==this.ua)switch(this.itemType){case g:k.brave&&typeof k.brave.isBrave==mi&&this.set(r,"Brave");break;case A:!this.get(i)&&U&&U[u]&&this.set(i,u),this.get(e)=="Macintosh"&&k&&typeof k.standalone!==P&&k.maxTouchPoints&&k.maxTouchPoints>2&&this.set(e,"iPad").set(i,h);break;case x:!this.get(r)&&U&&U[X]&&this.set(r,U[X]);break;case j:var w=this.data,d=function(l){return w[l].getItem().detectFeature().get()};this.set(g,d(g)).set(O,d(O)).set(A,d(A)).set(E,d(E)).set(x,d(x))}return this},this.parseUA=function(){return this.itemType!=j&&Ii.call(this.data,this.ua,this.rgxMap),this.itemType==g&&this.set(di,Mi(this.get(o))),this},this.parseCH=function(){var w=this.uaCH,d=this.rgxMap;switch(this.itemType){case g:case E:var l=w[Ni]||w[Di],f;if(l)for(var b in l){var m=l[b].brand||l[b],y=l[b].version;this.itemType==g&&!/not.a.brand/i.test(m)&&(!f||/chrom/i.test(f)&&m!=Qi)&&(m=L(m,{Chrome:"Google Chrome",Edge:"Microsoft Edge","Chrome WebView":"Android WebView","Chrome Headless":"HeadlessChrome","Huawei Browser":"HuaweiBrowser","MIUI Browser":"Miui Browser","Opera Mobi":"OperaMobile",Yandex:"YaBrowser"}),this.set(r,m).set(o,y).set(di,Mi(y)),f=m),this.itemType==E&&m==Qi&&this.set(o,y)}break;case O:var T=w[v];T&&(T&&w[gi]=="64"&&(T+="64"),Ii.call(this.data,T+";",d));break;case A:if(w[u]&&this.set(i,u),w[e]&&(this.set(e,w[e]),!this.get(i)||!this.get(t))){var J={};Ii.call(J,"droid 9; "+w[e]+")",d),!this.get(i)&&J.type&&this.set(i,J.type),!this.get(t)&&J.vendor&&this.set(t,J.vendor)}if(w[V]){var bi;if(typeof w[V]!="string")for(var Vi=0;!bi&&Vi<w[V].length;)bi=L(w[V][Vi++],te);else bi=L(w[V],te);this.set(i,bi)}break;case x:var ki=w[X];if(ki){var xi=w[Fi];ki==Pi&&(xi=parseInt(Mi(xi),10)>=13?"11":"10"),this.set(r,ki).set(o,xi)}this.get(r)==Pi&&w[e]=="Xbox"&&this.set(r,"Xbox").set(o,void 0);break;case j:var le=this.data,Q=function(we){return le[we].getItem().setCH(w).parseCH().get()};this.set(g,Q(g)).set(O,Q(O)).set(A,Q(A)).set(E,Q(E)).set(x,Q(x))}return this},S.call(this,[["itemType",a],["ua",n],["uaCH",c],["rgxMap",s],["data",Oe(this,a)]]),this}function C(a,n,s){if(typeof a===K?(pi(a,!0)?(typeof n===K&&(s=n),n=a):(s=a,n=void 0),a=void 0):typeof a===Li&&!pi(n,!0)&&(s=n,n=void 0),s&&typeof s.append===mi){var c={};s.forEach(function(b,m){c[m]=b}),s=c}if(!(this instanceof C))return new C(a,n,s).getResult();var w=typeof a===Li?a:s&&s[zi]?s[zi]:k&&k.userAgent?k.userAgent:Y,d=new se(s,!0),l=n?Ae(re,n):re,f=function(b){return b==j?function(){return new oe(b,w,l,d).set("ua",w).set(g,this.getBrowser()).set(O,this.getCPU()).set(A,this.getDevice()).set(E,this.getEngine()).set(x,this.getOS()).get()}:function(){return new oe(b,w,l[b],d).parseUA().get()}};return S.call(this,[["getBrowser",f(g)],["getCPU",f(O)],["getDevice",f(A)],["getEngine",f(E)],["getOS",f(x)],["getResult",f(j)],["getUA",function(){return w}],["setUA",function(b){return Z(b)&&(w=b.length>Ui?ui(b,Ui):b),this}]]).setUA(w),this}C.VERSION=he;C.BROWSER=vi([r,o,di,i]);C.CPU=vi([v]);C.DEVICE=vi([e,t,i,li,u,p,h,_,wi]);C.ENGINE=C.OS=vi([r,o]);const Re={name:"UserAgent",data:()=>({data:""}),computed:{result(){return C(this.data)}},mounted(){this.data=navigator.userAgent}},Se={key:0},Ce={key:0},Te={key:1},He={key:2},Me={key:3},Ie={key:4};function Ue(a,n,s,c,w,d){const l=ce,f=ue,b=be,m=fe;return M(),H(qi,null,[ii(l,{level:3},{default:yi(()=>n[1]||(n[1]=[N(" 请输入一个UA开始解析 ")])),_:1}),ii(f,{modelValue:a.data,"onUpdate:modelValue":n[0]||(n[0]=y=>a.data=y),placeholder:"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"},null,8,["modelValue"]),a.data?(M(),H(qi,{key:0},[ii(b),ii(l,{level:3},{default:yi(()=>n[2]||(n[2]=[N(" 解析结果 ")])),_:1}),ii(m,null,{default:yi(()=>[d.result.ua?(M(),H("pre",Se,z(d.result.ua),1)):D("",!0),q("ul",null,[d.result.browser.name?(M(),H("li",Ce,[n[3]||(n[3]=q("b",null,"浏览器",-1)),N(": "+z(`${d.result.browser.name} ${d.result.browser.version}`),1)])):D("",!0),d.result.device.type?(M(),H("li",Te,[n[4]||(n[4]=q("b",null,"设备",-1)),N(": "+z(`${d.result.device.type} / ${d.result.device.vendor} / ${d.result.device.model}`),1)])):D("",!0),d.result.os.name?(M(),H("li",He,[n[5]||(n[5]=q("b",null,"操作系统",-1)),N(": "+z(`${d.result.os.name} / ${d.result.os.version}`),1)])):D("",!0),d.result.engine.name?(M(),H("li",Me,[n[6]||(n[6]=q("b",null,"内核",-1)),N(": "+z(`${d.result.engine.name} / ${d.result.engine.version}`),1)])):D("",!0),d.result.cpu.architecture?(M(),H("li",Ie,[n[7]||(n[7]=q("b",null,"架构",-1)),N(": "+z(d.result.cpu.architecture),1)])):D("",!0)])]),_:1})],64)):D("",!0)],64)}const De=de(Re,[["render",Ue]]);export{De as default};
