import{_ as n}from"./container.29f5f960.js";import{Z as t,a3 as e,a8 as a,a9 as i,a4 as s,$ as o,p as r,a as l,_ as c,b as d,c as h,w as u,o as f,e as m,I as p,aa as w,f as g,h as b}from"./vendor.11098cc6.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{s as v,r as x,v as k}from"./v4.7ebacdd7.js";var y,S,_=0,I=0;function j(n,t,e){var a=t&&e||0,i=t||new Array(16),s=(n=n||{}).node||y,o=void 0!==n.clockseq?n.clockseq:S;if(null==s||null==o){var r=n.random||(n.rng||x)();null==s&&(s=y=[1|r[0],r[1],r[2],r[3],r[4],r[5]]),null==o&&(o=S=16383&(r[6]<<8|r[7]))}var l=void 0!==n.msecs?n.msecs:Date.now(),c=void 0!==n.nsecs?n.nsecs:I+1,d=l-_+(c-I)/1e4;if(d<0&&void 0===n.clockseq&&(o=o+1&16383),(d<0||l>_)&&void 0===n.nsecs&&(c=0),c>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_=l,I=c,S=o;var h=(1e4*(268435455&(l+=122192928e5))+c)%4294967296;i[a++]=h>>>24&255,i[a++]=h>>>16&255,i[a++]=h>>>8&255,i[a++]=255&h;var u=l/4294967296*1e4&268435455;i[a++]=u>>>8&255,i[a++]=255&u,i[a++]=u>>>24&15|16,i[a++]=u>>>16&255,i[a++]=o>>>8|128,i[a++]=255&o;for(var f=0;f<6;++f)i[a+f]=s[f];return t||v(i)}var z="00000000-0000-0000-0000-000000000000",C="/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-switch {\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  min-width: 44px;\n  height: 22px;\n  line-height: 20px;\n  vertical-align: middle;\n  background-color: rgba(0, 0, 0, 0.25);\n  border: 1px solid transparent;\n  border-radius: 100px;\n  cursor: pointer;\n  transition: all 0.36s;\n  user-select: none;\n}\n.ant-switch-inner {\n  display: block;\n  margin-right: 6px;\n  margin-left: 24px;\n  color: #fff;\n  font-size: 12px;\n}\n.ant-switch-loading-icon,\n.ant-switch::after {\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  width: 18px;\n  height: 18px;\n  background-color: #fff;\n  border-radius: 18px;\n  cursor: pointer;\n  transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  content: ' ';\n}\n.ant-switch::after {\n  box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);\n}\n.ant-switch:not(.ant-switch-disabled):active::before,\n.ant-switch:not(.ant-switch-disabled):active::after {\n  width: 24px;\n}\n.ant-switch-loading-icon {\n  z-index: 1;\n  display: none;\n  font-size: 12px;\n  background: transparent;\n}\n.ant-switch-loading-icon svg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n}\n.ant-switch-loading .ant-switch-loading-icon {\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.85);\n}\n.ant-switch-checked.ant-switch-loading .ant-switch-loading-icon {\n  color: #1890ff;\n}\n.ant-switch:focus {\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n}\n.ant-switch:focus:hover {\n  box-shadow: none;\n}\n.ant-switch-small {\n  min-width: 28px;\n  height: 16px;\n  line-height: 14px;\n}\n.ant-switch-small .ant-switch-inner {\n  margin-right: 3px;\n  margin-left: 18px;\n  font-size: 12px;\n}\n.ant-switch-small::after {\n  width: 12px;\n  height: 12px;\n}\n.ant-switch-small:active::before,\n.ant-switch-small:active::after {\n  width: 16px;\n}\n.ant-switch-small .ant-switch-loading-icon {\n  width: 12px;\n  height: 12px;\n}\n.ant-switch-small.ant-switch-checked .ant-switch-inner {\n  margin-right: 18px;\n  margin-left: 3px;\n}\n.ant-switch-small.ant-switch-checked .ant-switch-loading-icon {\n  left: 100%;\n  margin-left: -13px;\n}\n.ant-switch-small.ant-switch-loading .ant-switch-loading-icon {\n  font-weight: bold;\n  transform: scale(0.66667);\n}\n.ant-switch-checked {\n  background-color: #1890ff;\n}\n.ant-switch-checked .ant-switch-inner {\n  margin-right: 24px;\n  margin-left: 6px;\n}\n.ant-switch-checked::after {\n  left: 100%;\n  margin-left: -1px;\n  transform: translateX(-100%);\n}\n.ant-switch-checked .ant-switch-loading-icon {\n  left: 100%;\n  margin-left: -19px;\n}\n.ant-switch-loading,\n.ant-switch-disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n.ant-switch-loading *,\n.ant-switch-disabled * {\n  cursor: not-allowed;\n}\n.ant-switch-loading::before,\n.ant-switch-disabled::before,\n.ant-switch-loading::after,\n.ant-switch-disabled::after {\n  cursor: not-allowed;\n}\n@keyframes AntSwitchSmallLoadingCircle {\n  0% {\n    transform: rotate(0deg) scale(0.66667);\n    transform-origin: 50% 50%;\n  }\n  100% {\n    transform: rotate(360deg) scale(0.66667);\n    transform-origin: 50% 50%;\n  }\n}\n",U=".resultPanel[data-v-67686c40] {\n  width: 100%;\n  margin-top: 1.6rem;\n}\n.btnGroup .ant-btn + .ant-btn[data-v-67686c40] {\n  margin-left: 0.8rem;\n}";const{Item:A}=t,{Option:H}=e,{TextArea:D}=c,q={name:"UUID在线生成",components:{Container:n,Form:t,Select:e,InputNumber:a,Switch:i,Divider:s,Button:o,Item:A,Option:H,TextArea:D},watch:{formState:{handler(n){"nil"===n.version&&1!==n.count&&(n.count=1),this.auto&&this.generate()},deep:!0},auto:{handler(n){n&&this.generate()},immediate:!0}},data:()=>({formState:{count:1,version:"v4",hasHyphen:!0},auto:!0,times:0,result:""}),methods:{generate(){this.times++,this.result="";const n=this.times,t=this.formState.version,e=this.formState.count,a=this.formState.hasHyphen;for(let i=0;i<e&&n===this.times;i++){let n="";switch(t){case"v1":n=j();break;case"v4":n=k();break;case"nil":n=z;break}this.result+=a?n+"\n":n.replaceAll("-","")+"\n"}},reset(){this.times=0,this.formState={count:1,version:"v4",hasHyphen:"yes"}}}};r("data-v-67686c40");const N=b("Version 1"),O=b("Version 4"),T=b("NIL"),B={class:"btnGroup"},F=b(" 生成 "),G=b(" 重置 "),L={class:"resultPanel"};function P(n,t,e,a,i,s){const o=d("Option"),r=d("Select"),l=d("Item"),c=d("InputNumber"),b=d("Switch"),v=d("Form"),x=d("Divider"),k=d("Button"),y=d("TextArea"),S=d("container");return f(),h(S,null,{default:u((()=>[m(v,{layout:"inline",model:n.formState},{default:u((()=>[m(l,{label:"版本"},{default:u((()=>[m(r,{value:n.formState.version,"onUpdate:value":t[0]||(t[0]=t=>n.formState.version=t)},{default:u((()=>[m(o,{value:"v1"},{default:u((()=>[N])),_:1}),m(o,{value:"v4"},{default:u((()=>[O])),_:1}),m(o,{value:"nil"},{default:u((()=>[T])),_:1})])),_:1},8,["value"])])),_:1}),p(m(l,{label:"数量"},{default:u((()=>[m(c,{value:n.formState.count,"onUpdate:value":t[1]||(t[1]=t=>n.formState.count=t),max:500,min:1,step:1},null,8,["value"])])),_:1},512),[[w,"nil"!==n.formState.version]]),m(l,{label:"连字符"},{default:u((()=>[m(b,{checked:n.formState.hasHyphen,"onUpdate:checked":t[2]||(t[2]=t=>n.formState.hasHyphen=t)},null,8,["checked"])])),_:1}),m(l,{label:"自动生成"},{default:u((()=>[m(b,{checked:n.auto,"onUpdate:checked":t[3]||(t[3]=t=>n.auto=t)},null,8,["checked"])])),_:1})])),_:1},8,["model"]),m(x),g("div",B,[m(k,{type:"primary",onClick:s.generate},{default:u((()=>[F])),_:1},8,["onClick"]),m(k,{onClick:s.reset},{default:u((()=>[G])),_:1},8,["onClick"])]),g("div",L,[m(y,{value:n.result,"onUpdate:value":t[4]||(t[4]=t=>n.result=t),placeholder:"结果栏","auto-size":{minRows:10,maxRows:50}},null,8,["value"])])])),_:1})}l(),q.render=P,q.__scopeId="data-v-67686c40";export{q as default};
