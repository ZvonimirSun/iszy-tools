import{ac as _,au as v,ae as w,ax as j,aa as N,$ as U,N as x,ay as D,c as g,f as t,u as s,a as f,D as B,ad as C,az as H,r as a,o as A,a7 as V,aA as F,E as r}from"./vendor.34948a01.js";/* empty css                *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               */import{_ as T}from"./index.cee1046b.js";const{Item:O}=_,{Option:$}=v,{TextArea:z}=C,E={name:"UUID\u5728\u7EBF\u751F\u6210",components:{Form:_,Select:v,InputNumber:w,Switch:j,Divider:N,Button:U,Item:O,Option:$,TextArea:z},watch:{formState:{handler(e){e.version==="nil"&&e.count!==1&&(e.count=1),this.auto&&this.generate()},deep:!0},auto:{handler(e){e&&this.generate()},immediate:!0}},data:()=>({formState:{count:1,version:"v4",hasHyphen:!0},auto:!0,times:0,result:""}),methods:{generate(){this.times++,this.result="";const e=this.times,o=this.formState.version,m=this.formState.count,c=this.formState.hasHyphen;for(let u=0;u<m&&e===this.times;u++){let i="";switch(o){case"v1":{i=D();break}case"v4":{i=x();break}case"nil":{i=H;break}}c?this.result+=i+`
`:this.result+=i.replaceAll("-","")+`
`}},reset(){this.times=0,this.formState={count:1,version:"v4",hasHyphen:"yes"}}}},L=r("Version 1"),R=r("Version 4"),G=r("NIL"),P={class:"btnGroup"},q=r(" \u751F\u6210 "),J=r(" \u91CD\u7F6E "),K={class:"resultPanel"};function M(e,o,m,c,u,i){const d=a("Option"),S=a("Select"),l=a("Item"),k=a("InputNumber"),p=a("Switch"),b=a("Form"),y=a("Divider"),h=a("Button"),I=a("TextArea");return A(),g(B,null,[t(b,{layout:"inline",model:e.formState},{default:s(()=>[t(l,{label:"\u7248\u672C"},{default:s(()=>[t(S,{value:e.formState.version,"onUpdate:value":o[0]||(o[0]=n=>e.formState.version=n)},{default:s(()=>[t(d,{value:"v1"},{default:s(()=>[L]),_:1}),t(d,{value:"v4"},{default:s(()=>[R]),_:1}),t(d,{value:"nil"},{default:s(()=>[G]),_:1})]),_:1},8,["value"])]),_:1}),V(t(l,{label:"\u6570\u91CF"},{default:s(()=>[t(k,{value:e.formState.count,"onUpdate:value":o[1]||(o[1]=n=>e.formState.count=n),max:500,min:1,step:1},null,8,["value"])]),_:1},512),[[F,e.formState.version!=="nil"]]),t(l,{label:"\u8FDE\u5B57\u7B26"},{default:s(()=>[t(p,{checked:e.formState.hasHyphen,"onUpdate:checked":o[2]||(o[2]=n=>e.formState.hasHyphen=n)},null,8,["checked"])]),_:1}),t(l,{label:"\u81EA\u52A8\u751F\u6210"},{default:s(()=>[t(p,{checked:e.auto,"onUpdate:checked":o[3]||(o[3]=n=>e.auto=n)},null,8,["checked"])]),_:1})]),_:1},8,["model"]),t(y),f("div",P,[t(h,{type:"primary",onClick:i.generate},{default:s(()=>[q]),_:1},8,["onClick"]),t(h,{onClick:i.reset},{default:s(()=>[J]),_:1},8,["onClick"])]),f("div",K,[t(I,{value:e.result,"onUpdate:value":o[4]||(o[4]=n=>e.result=n),placeholder:"\u7ED3\u679C\u680F","auto-size":{minRows:10,maxRows:50}},null,8,["value"])])],64)}var ne=T(E,[["render",M],["__scopeId","data-v-8dd6079c"]]);export{ne as default};
