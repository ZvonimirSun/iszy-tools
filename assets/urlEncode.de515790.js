import{_ as r,o as s,c as i,w as e,b as t,d as n,bg as p,B as m}from"./index.f1a8911b.js";/* empty css                */import"./index.29bfe784.js";import{S as v}from"./index.718b01c5.js";import"./SearchOutlined.4a02c3e0.js";import"./EyeOutlined.5781087c.js";import"./useFlexGapSupport.6bac83b2.js";const f={name:"URLEncode",data:()=>({mode:"text",value:void 0}),methods:{encode(){this.value!=null&&(this.value=encodeURIComponent(this.value))},decode(){this.value!=null&&(this.value=decodeURIComponent(this.value))},clear(){this.value=void 0}}},h=n(" UrlEncode\u7F16\u7801 "),k=n(" UrlDecode\u89E3\u7801 "),y=n(" \u6E05\u7A7A\u7ED3\u679C ");function C(l,_,x,U,E,o){const c=p,a=m,d=v;return s(),i(d,{direction:"vertical"},{default:e(()=>[t(c,{value:l.value,"onUpdate:value":_[0]||(_[0]=u=>l.value=u),placeholder:"\u8F6C\u6362\u7684\u5185\u5BB9\u7C98\u8D34\u5728\u8FD9\u91CC","auto-size":{minRows:5,maxRows:8}},null,8,["value"]),t(d,null,{default:e(()=>[t(a,{type:"primary",onClick:o.encode},{default:e(()=>[h]),_:1},8,["onClick"]),t(a,{type:"primary",onClick:o.decode},{default:e(()=>[k]),_:1},8,["onClick"]),t(a,{type:"link",onClick:o.clear},{default:e(()=>[y]),_:1},8,["onClick"])]),_:1})]),_:1})}var S=r(f,[["render",C],["__scopeId","data-v-20a00de0"]]);export{S as default};
