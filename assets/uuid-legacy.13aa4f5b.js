!function(){var t=document.createElement("style");t.innerHTML=".ant-switch{margin:0;padding:0;color:rgba(0,0,0,.85);font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:'tnum';position:relative;display:inline-block;box-sizing:border-box;min-width:44px;height:22px;line-height:20px;vertical-align:middle;background-color:rgba(0,0,0,.25);border:1px solid transparent;border-radius:100px;cursor:pointer;transition:all .36s;user-select:none}.ant-switch-inner{display:block;margin-right:6px;margin-left:24px;color:#fff;font-size:12px}.ant-switch-loading-icon,.ant-switch::after{position:absolute;top:1px;left:1px;width:18px;height:18px;background-color:#fff;border-radius:18px;cursor:pointer;transition:all .36s cubic-bezier(.78, .14, .15, .86);content:' '}.ant-switch::after{box-shadow:0 2px 4px 0 rgba(0,35,11,.2)}.ant-switch:not(.ant-switch-disabled):active::after,.ant-switch:not(.ant-switch-disabled):active::before{width:24px}.ant-switch-loading-icon{z-index:1;display:none;font-size:12px;background:0 0}.ant-switch-loading-icon svg{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto}.ant-switch-loading .ant-switch-loading-icon{display:inline-block;color:rgba(0,0,0,.85)}.ant-switch-checked.ant-switch-loading .ant-switch-loading-icon{color:#1890ff}.ant-switch:focus{outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2)}.ant-switch:focus:hover{box-shadow:none}.ant-switch-small{min-width:28px;height:16px;line-height:14px}.ant-switch-small .ant-switch-inner{margin-right:3px;margin-left:18px;font-size:12px}.ant-switch-small::after{width:12px;height:12px}.ant-switch-small:active::after,.ant-switch-small:active::before{width:16px}.ant-switch-small .ant-switch-loading-icon{width:12px;height:12px}.ant-switch-small.ant-switch-checked .ant-switch-inner{margin-right:18px;margin-left:3px}.ant-switch-small.ant-switch-checked .ant-switch-loading-icon{left:100%;margin-left:-13px}.ant-switch-small.ant-switch-loading .ant-switch-loading-icon{font-weight:700;transform:scale(.66667)}.ant-switch-checked{background-color:#1890ff}.ant-switch-checked .ant-switch-inner{margin-right:24px;margin-left:6px}.ant-switch-checked::after{left:100%;margin-left:-1px;transform:translateX(-100%)}.ant-switch-checked .ant-switch-loading-icon{left:100%;margin-left:-19px}.ant-switch-disabled,.ant-switch-loading{cursor:not-allowed;opacity:.4}.ant-switch-disabled *,.ant-switch-loading *{cursor:not-allowed}.ant-switch-disabled::after,.ant-switch-disabled::before,.ant-switch-loading::after,.ant-switch-loading::before{cursor:not-allowed}@keyframes AntSwitchSmallLoadingCircle{0%{transform:rotate(0) scale(.66667);transform-origin:50% 50%}100%{transform:rotate(360deg) scale(.66667);transform-origin:50% 50%}}.resultPanel[data-v-67686c40]{width:100%;margin-top:1.6rem}.btnGroup .ant-btn+.ant-btn[data-v-67686c40]{margin-left:.8rem}",document.head.appendChild(t),System.register(["./container-legacy.4d2a30d7.js","./vendor-legacy.4818c0b0.js","./index-legacy.307817a4.js","./index-legacy.a000b4fb.js","./index-legacy.a72b0b5f.js","./index-legacy.ac0c27e9.js","./index-legacy.c3a455d8.js"],(function(t){"use strict";var e,n,a,i,o,r,s,c,l,d,h,u,f,p,m,g,w,v;return{setters:[function(t){e=t._},function(t){n=t.G,a=t.N,i=t.Q,o=t.V,r=t.D,s=t.H,c=t.p,l=t.a,d=t.I,h=t.o,u=t.c,f=t.b,p=t.t,m=t.W,g=t.w,w=t.d,v=t.r},function(){},function(){},function(){},function(){},function(){}],execute:function(){var b,x=new Uint8Array(16);function y(){if(!b&&!(b="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return b(x)}var k=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function S(t){return"string"==typeof t&&k.test(t)}for(var _,C,I=[],U=0;U<256;++U)I.push((U+256).toString(16).substr(1));function j(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(I[t[e+0]]+I[t[e+1]]+I[t[e+2]]+I[t[e+3]]+"-"+I[t[e+4]]+I[t[e+5]]+"-"+I[t[e+6]]+I[t[e+7]]+"-"+I[t[e+8]]+I[t[e+9]]+"-"+I[t[e+10]]+I[t[e+11]]+I[t[e+12]]+I[t[e+13]]+I[t[e+14]]+I[t[e+15]]).toLowerCase();if(!S(n))throw TypeError("Stringified UUID is invalid");return n}var z=0,V=0;function A(t,e,n){var a=e&&n||0,i=e||new Array(16),o=(t=t||{}).node||_,r=void 0!==t.clockseq?t.clockseq:C;if(null==o||null==r){var s=t.random||(t.rng||y)();null==o&&(o=_=[1|s[0],s[1],s[2],s[3],s[4],s[5]]),null==r&&(r=C=16383&(s[6]<<8|s[7]))}var c=void 0!==t.msecs?t.msecs:Date.now(),l=void 0!==t.nsecs?t.nsecs:V+1,d=c-z+(l-V)/1e4;if(d<0&&void 0===t.clockseq&&(r=r+1&16383),(d<0||c>z)&&void 0===t.nsecs&&(l=0),l>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");z=c,V=l,C=r;var h=(1e4*(268435455&(c+=122192928e5))+l)%4294967296;i[a++]=h>>>24&255,i[a++]=h>>>16&255,i[a++]=h>>>8&255,i[a++]=255&h;var u=c/4294967296*1e4&268435455;i[a++]=u>>>8&255,i[a++]=255&u,i[a++]=u>>>24&15|16,i[a++]=u>>>16&255,i[a++]=r>>>8|128,i[a++]=255&r;for(var f=0;f<6;++f)i[a+f]=o[f];return e||j(i)}function H(t,e,n){var a=(t=t||{}).random||(t.rng||y)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=a[i];return e}return j(a)}const{Item:R}=n,{Option:D}=a,{TextArea:T}=d,E=t("default",{name:"UUID在线生成",components:{Container:e,Form:n,Select:a,InputNumber:i,Switch:o,Divider:r,Button:s,Item:R,Option:D,TextArea:T},watch:{formState:{handler(t){"nil"===t.version&&1!==t.count&&(t.count=1),this.auto&&this.generate()},deep:!0},auto:{handler(t){t&&this.generate()},immediate:!0}},data:()=>({formState:{count:1,version:"v4",hasHyphen:!0},auto:!0,times:0,result:""}),methods:{generate(){this.times++,this.result="";const t=this.times,e=this.formState.version,n=this.formState.count,a=this.formState.hasHyphen;for(let i=0;i<n&&t===this.times;i++){let t="";switch(e){case"v1":t=A();break;case"v4":t=H();break;case"nil":t="00000000-0000-0000-0000-000000000000";break}this.result+=a?t+"\n":t.replaceAll("-","")+"\n"}},reset(){this.times=0,this.formState={count:1,version:"v4",hasHyphen:"yes"}}}}),L=g("data-v-67686c40");c("data-v-67686c40");const N=w("Version 1"),q=w("Version 4"),G=w("NIL"),O={class:"btnGroup"},B=w(" 生成 "),F=w(" 重置 "),M={class:"resultPanel"};l();const P=L(((t,e,n,a,i,o)=>{const r=v("Option"),s=v("Select"),c=v("Item"),l=v("InputNumber"),d=v("Switch"),g=v("Form"),w=v("Divider"),b=v("Button"),x=v("TextArea"),y=v("container");return h(),u(y,null,{default:L((()=>[f(g,{layout:"inline",model:t.formState},{default:L((()=>[f(c,{label:"版本"},{default:L((()=>[f(s,{value:t.formState.version,"onUpdate:value":e[1]||(e[1]=e=>t.formState.version=e)},{default:L((()=>[f(r,{value:"v1"},{default:L((()=>[N])),_:1}),f(r,{value:"v4"},{default:L((()=>[q])),_:1}),f(r,{value:"nil"},{default:L((()=>[G])),_:1})])),_:1},8,["value"])])),_:1}),p(f(c,{label:"数量"},{default:L((()=>[f(l,{value:t.formState.count,"onUpdate:value":e[2]||(e[2]=e=>t.formState.count=e),max:500,min:1,step:1},null,8,["value"])])),_:1},512),[[m,"nil"!==t.formState.version]]),f(c,{label:"连字符"},{default:L((()=>[f(d,{checked:t.formState.hasHyphen,"onUpdate:checked":e[3]||(e[3]=e=>t.formState.hasHyphen=e)},null,8,["checked"])])),_:1}),f(c,{label:"自动生成"},{default:L((()=>[f(d,{checked:t.auto,"onUpdate:checked":e[4]||(e[4]=e=>t.auto=e)},null,8,["checked"])])),_:1})])),_:1},8,["model"]),f(w),f("div",O,[f(b,{type:"primary",onClick:o.generate},{default:L((()=>[B])),_:1},8,["onClick"]),f(b,{onClick:o.reset},{default:L((()=>[F])),_:1},8,["onClick"])]),f("div",M,[f(x,{value:t.result,"onUpdate:value":e[5]||(e[5]=e=>t.result=e),placeholder:"结果栏","auto-size":{minRows:10,maxRows:50}},null,8,["value"])])])),_:1})}));E.render=P,E.__scopeId="data-v-67686c40"}}}))}();
