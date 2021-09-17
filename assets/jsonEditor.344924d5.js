import{_ as e}from"./container.5d9d7f8a.js";import{J as t}from"./jsoneditor.min.24c70ac7.js";import{c as o}from"./createFile.1a30fa6d.js";import{e as n,W as i,a5 as a,a6 as r,a7 as d,q as s,a8 as l,a9 as c,aa as h,ab as f,p,a as m,ac as g,b,c as u,w as j,o as v,f as E,g as L}from"./vendor.d7cd07ec.js";/* empty css              *//* empty css              */import{I as k}from"./index.ad8274d8.js";var w=k("left",!0,(function(e){return n("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[n("path",{d:"M31 36L19 24L31 12",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])})),x=k("right",!0,(function(e){return n("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[n("path",{d:"M19 12L31 24L19 36",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])})),y=".editorPanel[data-v-40a56b22] {\n  display: flex;\n  height: 100%;\n}\n@media (max-width: 1024px) {\n.editorPanel[data-v-40a56b22] {\n    height: calc(100% - 3.2rem - 1.2rem);\n}\n}\n.editorPanel .controller[data-v-40a56b22] {\n  height: 100%;\n  width: 10rem;\n  text-align: center;\n}\n.editorPanel .controller .ant-space[data-v-40a56b22] {\n  margin-top: 10rem;\n  width: 80%;\n}\n.editorPanel .controller .ant-space[data-v-40a56b22] .ant-btn {\n  display: flex;\n  align-items: center;\n}\n.editorPanel .controller .ant-space[data-v-40a56b22] .ant-btn .i-icon {\n  font-size: 1.8rem;\n}\n.editorPanel .controller .ant-space[data-v-40a56b22] .ant-btn .i-icon + span, .editorPanel .controller .ant-space[data-v-40a56b22] .ant-btn span + .i-icon {\n  margin-left: 0;\n}\n.editorPanel[data-v-40a56b22] .jsonEditor {\n  height: 100%;\n  width: calc(50% - 5rem);\n}\n.editorPanel[data-v-40a56b22] .jsonEditor .ace-jsoneditor *, .editorPanel[data-v-40a56b22] .jsonEditor textarea.jsoneditor-text *, .editorPanel[data-v-40a56b22] .jsonEditor code, .editorPanel[data-v-40a56b22] .jsonEditor pre {\n  font-family: JetBrains Mono, monospace;\n}\n@media (max-width: 1024px) {\n.editorPanel[data-v-40a56b22] .jsonEditor.jsonEditorLeft {\n    width: 100%;\n}\n}\n.editorPanel[data-v-40a56b22] .jsonEditor.jsonEditorLeft .differentElement {\n  background-color: pink;\n}\n.editorPanel[data-v-40a56b22] .jsonEditor.jsonEditorLeft .differentElement .jsoneditor-field, .editorPanel[data-v-40a56b22] .jsonEditor.jsonEditorLeft .differentElement .jsoneditor-value {\n  color: red;\n}\n.editorPanel[data-v-40a56b22] .jsonEditor.jsonEditorRight .differentElement {\n  background-color: #acee61;\n}\n.editorPanel[data-v-40a56b22] .jsonEditor.jsonEditorRight .differentElement .jsoneditor-field, .editorPanel[data-v-40a56b22] .jsonEditor.jsonEditorRight .differentElement .jsoneditor-value {\n  color: red;\n}\n@media (max-width: 1024px) {\n.noShowMobile[data-v-40a56b22] {\n    display: none !important;\n}\n}\n@media (min-width: 1024px) {\n.showMobile[data-v-40a56b22] {\n    display: none !important;\n}\n}\n@media (max-width: 1024px) {\n.ant-space[data-v-40a56b22] {\n    margin-top: 1.2rem;\n}\n}\n[data-v-40a56b22] .jsoneditor-poweredBy {\n  display: none;\n}";const R={name:"JsonEditor",components:{Container:e,Button:i,Space:a,Checkbox:r,Right:x,Left:w},data:()=>({editorLeft:null,editorRight:null,codeLeft:{Array:[1,2,3],Boolean:!0,Null:null,Number:123,Object:{a:"b",c:"d"},String:"Hello World"},codeRight:{Array:[1,2,3],Boolean:!0,Null:null,Number:123,Object:{a:"b",c:"d"},String:"Hello World"},diff:!0}),mounted(){this.init()},methods:{init(){this.editorLeft=d(new t(this.$refs.jsonEditorLeft,{mode:"code",modes:["code","tree"],onClassName:this.onClassName,onChangeText:e=>{this.codeLeft=JSON.parse(e),this.editorRight.refresh()},autocomplete:{applyTo:["value"],filter:"contain",trigger:"focus",getOptions:(e,t,o,n)=>new Promise(((e,t)=>{const o=this.extractUniqueWords(n.get());o.length>0?e(o):t(new Error("noOptions"))}))}},this.codeLeft)),this.editorRight=d(new t(this.$refs.jsonEditorRight,{mode:"tree",modes:["code","tree"],onClassName:this.onClassName,onChangeText:e=>{this.codeRight=JSON.parse(e),this.editorLeft.refresh()},autocomplete:{applyTo:["value"],filter:"contain",trigger:"focus",getOptions:(e,t,o,n)=>new Promise(((e,t)=>{const o=this.extractUniqueWords(n.get());o.length>0?e(o):t(new Error("noOptions"))}))}},this.codeRight))},copyRight(){this.codeRight=s(this.codeLeft),this.editorRight.update(this.codeRight),this.editorLeft.refresh()},copyLeft(){this.codeLeft=s(this.codeRight),this.editorLeft.update(this.codeLeft),this.editorRight.refresh()},download(){o(this.editorLeft.getText(),"main.json")},changeDiff(){this.editorLeft.refresh(),this.editorRight.refresh()},onClassName({path:e}){const t=l(this.codeLeft,e),o=l(this.codeRight,e);return this.diff?c(t,o)?"":"differentElement":""},extractUniqueWords:e=>h(f(e,(function(e,t){return g(e)?[t]:[t,String(e)]})))},beforeUnmount(){this.editorLeft&&this.editorLeft.destroy(),this.editorRight&&this.editorRight.destroy()}};p("data-v-40a56b22");const P={class:"editorPanel"},C={ref:"jsonEditorLeft",class:"jsonEditor jsonEditorLeft"},N={class:"controller noShowMobile"},_=L("复制 "),S=L(" 复制 "),B=L(" 下载 "),M=L("Diff"),O={ref:"jsonEditorRight",class:"jsonEditor jsonEditorRight noShowMobile"},W=L(" 下载 ");function z(e,t,o,i,a,r){const d=b("Right"),s=b("Button"),l=b("Left"),c=b("Checkbox"),h=b("Space"),f=b("container");return v(),u(f,null,{default:j((()=>[E("div",P,[E("div",C,null,512),E("div",N,[n(h,{direction:"vertical"},{default:j((()=>[n(s,{type:"primary",onClick:r.copyRight,block:""},{default:j((()=>[_,n(d,{theme:"outline"})])),_:1},8,["onClick"]),n(s,{type:"primary",onClick:r.copyLeft,block:""},{default:j((()=>[n(l,{theme:"outline"}),S])),_:1},8,["onClick"]),n(s,{type:"primary",onClick:r.download,block:""},{default:j((()=>[B])),_:1},8,["onClick"]),n(c,{checked:e.diff,"onUpdate:checked":t[0]||(t[0]=t=>e.diff=t),onChange:r.changeDiff},{default:j((()=>[M])),_:1},8,["checked","onChange"])])),_:1})]),E("div",O,null,512)]),n(h,{class:"showMobile"},{default:j((()=>[n(s,{type:"primary",onClick:r.download},{default:j((()=>[W])),_:1},8,["onClick"])])),_:1})])),_:1})}m(),R.render=z,R.__scopeId="data-v-40a56b22";export{R as default};
