import{c7 as D,c8 as y,j as C,B as q,c9 as F,n as H,b as r,w as l,s as I,F as A,ap as V,q as u,o as T,v as O,aZ as E,d as _}from"./index.72d94db8.js";/* empty css               *//* empty css              *//* empty css               */import{S as g}from"./index.b82b788e.js";/* empty css               *//* empty css               */import{I as L}from"./index.cf35f3ad.js";import{S as M}from"./index.81c10dc8.js";import{D as R}from"./index.e439c227.js";import{F as N}from"./Form.11eb3f85.js";import"./toArray.18cd0795.js";import"./Overflow.0ee5f886.js";import"./isMobile.6491fde5.js";import"./useMergedState.1547b6ef.js";import"./useState.be9273dd.js";import"./DownOutlined.008f8e91.js";import"./SearchOutlined.9f51c328.js";import"./Col.cbd59677.js";import"./responsiveObserve.2bb7104e.js";import"./useFlexGapSupport.6f69268a.js";import"./get.2cdcd4e5.js";import"./hasIn.7069e382.js";import"./_arrayIncludesWith.40afec22.js";import"./toFinite.6614054b.js";import"./collapseMotion.ebbeccfb.js";var b,k,x=0,w=0;function $(e,t,S){var n=t&&S||0,o=t||new Array(16);e=e||{};var a=e.node||b,s=e.clockseq!==void 0?e.clockseq:k;if(a==null||s==null){var m=e.random||(e.rng||y)();a==null&&(a=b=[m[0]|1,m[1],m[2],m[3],m[4],m[5]]),s==null&&(s=k=(m[6]<<8|m[7])&16383)}var i=e.msecs!==void 0?e.msecs:Date.now(),c=e.nsecs!==void 0?e.nsecs:w+1,h=i-x+(c-w)/1e4;if(h<0&&e.clockseq===void 0&&(s=s+1&16383),(h<0||i>x)&&e.nsecs===void 0&&(c=0),c>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");x=i,w=c,k=s,i+=122192928e5;var p=((i&268435455)*1e4+c)%4294967296;o[n++]=p>>>24&255,o[n++]=p>>>16&255,o[n++]=p>>>8&255,o[n++]=p&255;var v=i/4294967296*1e4&268435455;o[n++]=v>>>8&255,o[n++]=v&255,o[n++]=v>>>24&15|16,o[n++]=v>>>16&255,o[n++]=s>>>8|128,o[n++]=s&255;for(var d=0;d<6;++d)o[n+d]=a[d];return t||D(o)}var j="00000000-0000-0000-0000-000000000000";const{Item:z}=N,{Option:G}=g,{TextArea:P}=V,Z={name:"UUID\u5728\u7EBF\u751F\u6210",components:{Form:N,Select:g,InputNumber:L,Switch:M,Divider:R,Button:q,Item:z,Option:G,TextArea:P},data:()=>({formState:{count:1,version:"v4",hasHyphen:!0},auto:!0,times:0,result:""}),watch:{formState:{handler(e){e.version==="nil"&&e.count!==1&&(e.count=1),this.auto&&this.generate()},deep:!0},auto:{handler(e){e&&this.generate()},immediate:!0}},methods:{generate(){this.times++,this.result="";const e=this.times,t=this.formState.version,S=this.formState.count,n=this.formState.hasHyphen;for(let o=0;o<S&&e===this.times;o++){let a="";switch(t){case"v1":{a=$();break}case"v4":{a=F();break}case"nil":{a=j;break}}n?this.result+=a+`
`:this.result+=a.replaceAll("-","")+`
`}},reset(){this.times=0,this.formState={count:1,version:"v4",hasHyphen:"yes"}}}},B=_(" Version 1 "),J=_(" Version 4 "),K=_(" NIL "),Q={class:"btnGroup"},W=_(" \u751F\u6210 "),X=_(" \u91CD\u7F6E "),Y={class:"resultPanel"};function ee(e,t,S,n,o,a){const s=u("Option"),m=u("Select"),i=u("Item"),c=u("InputNumber"),h=u("Switch"),p=u("Form"),v=u("Divider"),d=u("Button"),U=u("TextArea");return T(),H(A,null,[r(p,{layout:"inline",model:e.formState},{default:l(()=>[r(i,{label:"\u7248\u672C"},{default:l(()=>[r(m,{value:e.formState.version,"onUpdate:value":t[0]||(t[0]=f=>e.formState.version=f)},{default:l(()=>[r(s,{value:"v1"},{default:l(()=>[B]),_:1}),r(s,{value:"v4"},{default:l(()=>[J]),_:1}),r(s,{value:"nil"},{default:l(()=>[K]),_:1})]),_:1},8,["value"])]),_:1}),O(r(i,{label:"\u6570\u91CF"},{default:l(()=>[r(c,{value:e.formState.count,"onUpdate:value":t[1]||(t[1]=f=>e.formState.count=f),max:500,min:1,step:1},null,8,["value"])]),_:1},512),[[E,e.formState.version!=="nil"]]),r(i,{label:"\u8FDE\u5B57\u7B26"},{default:l(()=>[r(h,{checked:e.formState.hasHyphen,"onUpdate:checked":t[2]||(t[2]=f=>e.formState.hasHyphen=f)},null,8,["checked"])]),_:1}),r(i,{label:"\u81EA\u52A8\u751F\u6210"},{default:l(()=>[r(h,{checked:e.auto,"onUpdate:checked":t[3]||(t[3]=f=>e.auto=f)},null,8,["checked"])]),_:1})]),_:1},8,["model"]),r(v),I("div",Q,[r(d,{type:"primary",onClick:a.generate},{default:l(()=>[W]),_:1},8,["onClick"]),r(d,{onClick:a.reset},{default:l(()=>[X]),_:1},8,["onClick"])]),I("div",Y,[r(U,{value:e.result,"onUpdate:value":t[4]||(t[4]=f=>e.result=f),placeholder:"\u7ED3\u679C\u680F","auto-size":{minRows:10,maxRows:50}},null,8,["value"])])],64)}var De=C(Z,[["render",ee],["__scopeId","data-v-6ef644eb"]]);export{De as default};
