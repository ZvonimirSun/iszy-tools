import{_ as n}from"./container.5a706178.js";import{Z as t,a2 as e,a6 as a,a7 as i,M as o,B as r,p as s,a as l,_ as c,b as d,o as h,f as u,w as f,h as p,N as m,a8 as g,e as w,i as b}from"./vendor.8f1f5d06.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */var v,x=new Uint8Array(16);function y(){if(!v&&!(v="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return v(x)}var k=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function S(n){return"string"==typeof n&&k.test(n)}for(var _,C,U=[],I=0;I<256;++I)U.push((I+256).toString(16).substr(1));function j(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(U[n[t+0]]+U[n[t+1]]+U[n[t+2]]+U[n[t+3]]+"-"+U[n[t+4]]+U[n[t+5]]+"-"+U[n[t+6]]+U[n[t+7]]+"-"+U[n[t+8]]+U[n[t+9]]+"-"+U[n[t+10]]+U[n[t+11]]+U[n[t+12]]+U[n[t+13]]+U[n[t+14]]+U[n[t+15]]).toLowerCase();if(!S(e))throw TypeError("Stringified UUID is invalid");return e}var z=0,A=0;function R(n,t,e){var a=t&&e||0,i=t||new Array(16),o=(n=n||{}).node||_,r=void 0!==n.clockseq?n.clockseq:C;if(null==o||null==r){var s=n.random||(n.rng||y)();null==o&&(o=_=[1|s[0],s[1],s[2],s[3],s[4],s[5]]),null==r&&(r=C=16383&(s[6]<<8|s[7]))}var l=void 0!==n.msecs?n.msecs:Date.now(),c=void 0!==n.nsecs?n.nsecs:A+1,d=l-z+(c-A)/1e4;if(d<0&&void 0===n.clockseq&&(r=r+1&16383),(d<0||l>z)&&void 0===n.nsecs&&(c=0),c>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");z=l,A=c,C=r;var h=(1e4*(268435455&(l+=122192928e5))+c)%4294967296;i[a++]=h>>>24&255,i[a++]=h>>>16&255,i[a++]=h>>>8&255,i[a++]=255&h;var u=l/4294967296*1e4&268435455;i[a++]=u>>>8&255,i[a++]=255&u,i[a++]=u>>>24&15|16,i[a++]=u>>>16&255,i[a++]=r>>>8|128,i[a++]=255&r;for(var f=0;f<6;++f)i[a+f]=o[f];return t||j(i)}function V(n,t,e){var a=(n=n||{}).random||(n.rng||y)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){e=e||0;for(var i=0;i<16;++i)t[e+i]=a[i];return t}return j(a)}var D="00000000-0000-0000-0000-000000000000",H="/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-switch {\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  min-width: 44px;\n  height: 22px;\n  line-height: 20px;\n  vertical-align: middle;\n  background-color: rgba(0, 0, 0, 0.25);\n  border: 1px solid transparent;\n  border-radius: 100px;\n  cursor: pointer;\n  transition: all 0.36s;\n  user-select: none;\n}\n.ant-switch-inner {\n  display: block;\n  margin-right: 6px;\n  margin-left: 24px;\n  color: #fff;\n  font-size: 12px;\n}\n.ant-switch-loading-icon,\n.ant-switch::after {\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  width: 18px;\n  height: 18px;\n  background-color: #fff;\n  border-radius: 18px;\n  cursor: pointer;\n  transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  content: ' ';\n}\n.ant-switch::after {\n  box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);\n}\n.ant-switch:not(.ant-switch-disabled):active::before,\n.ant-switch:not(.ant-switch-disabled):active::after {\n  width: 24px;\n}\n.ant-switch-loading-icon {\n  z-index: 1;\n  display: none;\n  font-size: 12px;\n  background: transparent;\n}\n.ant-switch-loading-icon svg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n}\n.ant-switch-loading .ant-switch-loading-icon {\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.85);\n}\n.ant-switch-checked.ant-switch-loading .ant-switch-loading-icon {\n  color: #1890ff;\n}\n.ant-switch:focus {\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n}\n.ant-switch:focus:hover {\n  box-shadow: none;\n}\n.ant-switch-small {\n  min-width: 28px;\n  height: 16px;\n  line-height: 14px;\n}\n.ant-switch-small .ant-switch-inner {\n  margin-right: 3px;\n  margin-left: 18px;\n  font-size: 12px;\n}\n.ant-switch-small::after {\n  width: 12px;\n  height: 12px;\n}\n.ant-switch-small:active::before,\n.ant-switch-small:active::after {\n  width: 16px;\n}\n.ant-switch-small .ant-switch-loading-icon {\n  width: 12px;\n  height: 12px;\n}\n.ant-switch-small.ant-switch-checked .ant-switch-inner {\n  margin-right: 18px;\n  margin-left: 3px;\n}\n.ant-switch-small.ant-switch-checked .ant-switch-loading-icon {\n  left: 100%;\n  margin-left: -13px;\n}\n.ant-switch-small.ant-switch-loading .ant-switch-loading-icon {\n  font-weight: bold;\n  transform: scale(0.66667);\n}\n.ant-switch-checked {\n  background-color: #1890ff;\n}\n.ant-switch-checked .ant-switch-inner {\n  margin-right: 24px;\n  margin-left: 6px;\n}\n.ant-switch-checked::after {\n  left: 100%;\n  margin-left: -1px;\n  transform: translateX(-100%);\n}\n.ant-switch-checked .ant-switch-loading-icon {\n  left: 100%;\n  margin-left: -19px;\n}\n.ant-switch-loading,\n.ant-switch-disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n.ant-switch-loading *,\n.ant-switch-disabled * {\n  cursor: not-allowed;\n}\n.ant-switch-loading::before,\n.ant-switch-disabled::before,\n.ant-switch-loading::after,\n.ant-switch-disabled::after {\n  cursor: not-allowed;\n}\n@keyframes AntSwitchSmallLoadingCircle {\n  0% {\n    transform: rotate(0deg) scale(0.66667);\n    transform-origin: 50% 50%;\n  }\n  100% {\n    transform: rotate(360deg) scale(0.66667);\n    transform-origin: 50% 50%;\n  }\n}\n",N=".resultPanel[data-v-67686c40] {\n  width: 100%;\n  margin-top: 1.6rem;\n}\n.btnGroup .ant-btn + .ant-btn[data-v-67686c40] {\n  margin-left: 0.8rem;\n}";const{Item:T}=t,{Option:q}=e,{TextArea:B}=c,E={name:"UUID在线生成",components:{Container:n,Form:t,Select:e,InputNumber:a,Switch:i,Divider:o,Button:r,Item:T,Option:q,TextArea:B},watch:{formState:{handler(n){"nil"===n.version&&1!==n.count&&(n.count=1),this.auto&&this.generate()},deep:!0},auto:{handler(n){n&&this.generate()},immediate:!0}},data:()=>({formState:{count:1,version:"v4",hasHyphen:!0},auto:!0,times:0,result:""}),methods:{generate(){this.times++,this.result="";const n=this.times,t=this.formState.version,e=this.formState.count,a=this.formState.hasHyphen;for(let i=0;i<e&&n===this.times;i++){let n="";switch(t){case"v1":n=R();break;case"v4":n=V();break;case"nil":n=D;break}this.result+=a?n+"\n":n.replaceAll("-","")+"\n"}},reset(){this.times=0,this.formState={count:1,version:"v4",hasHyphen:"yes"}}}};s("data-v-67686c40");const L=b("Version 1"),O=b("Version 4"),F=b("NIL"),G={class:"btnGroup"},M=b(" 生成 "),P=b(" 重置 "),X={class:"resultPanel"};function Z(n,t,e,a,i,o){const r=d("Option"),s=d("Select"),l=d("Item"),c=d("InputNumber"),b=d("Switch"),v=d("Form"),x=d("Divider"),y=d("Button"),k=d("TextArea"),S=d("container");return h(),u(S,null,{default:f((()=>[p(v,{layout:"inline",model:n.formState},{default:f((()=>[p(l,{label:"版本"},{default:f((()=>[p(s,{value:n.formState.version,"onUpdate:value":t[0]||(t[0]=t=>n.formState.version=t)},{default:f((()=>[p(r,{value:"v1"},{default:f((()=>[L])),_:1}),p(r,{value:"v4"},{default:f((()=>[O])),_:1}),p(r,{value:"nil"},{default:f((()=>[F])),_:1})])),_:1},8,["value"])])),_:1}),m(p(l,{label:"数量"},{default:f((()=>[p(c,{value:n.formState.count,"onUpdate:value":t[1]||(t[1]=t=>n.formState.count=t),max:500,min:1,step:1},null,8,["value"])])),_:1},512),[[g,"nil"!==n.formState.version]]),p(l,{label:"连字符"},{default:f((()=>[p(b,{checked:n.formState.hasHyphen,"onUpdate:checked":t[2]||(t[2]=t=>n.formState.hasHyphen=t)},null,8,["checked"])])),_:1}),p(l,{label:"自动生成"},{default:f((()=>[p(b,{checked:n.auto,"onUpdate:checked":t[3]||(t[3]=t=>n.auto=t)},null,8,["checked"])])),_:1})])),_:1},8,["model"]),p(x),w("div",G,[p(y,{type:"primary",onClick:o.generate},{default:f((()=>[M])),_:1},8,["onClick"]),p(y,{onClick:o.reset},{default:f((()=>[P])),_:1},8,["onClick"])]),w("div",X,[p(k,{value:n.result,"onUpdate:value":t[4]||(t[4]=t=>n.result=t),placeholder:"结果栏","auto-size":{minRows:10,maxRows:50}},null,8,["value"])])])),_:1})}l(),E.render=Z,E.__scopeId="data-v-67686c40";export{E as default};
