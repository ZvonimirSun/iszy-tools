import{a as n,h as x,H as ue,K as H,br as fe,cj as pe,ck as me,O as y,F as w,P as z,d as re,e as ge,b4 as Ee,M as ie,N as ve,I as ye,ak as ne,f as Qe,ao as he,X as _e,aH as be,_ as Ce,o as S,m as B,w as i,n as oe,p as Se,a2 as Be,a1 as Ie,z as Ne,q as Z,b as u,y as b,B as ke,$ as we,cl as Je,bx as xe,by as Re}from"./index.93b71687.js";import{_ as Ke}from"./index.14b9c8dc.js";import{_ as Ue}from"./index.b7ec492e.js";import{_ as je}from"./index.8d737da4.js";import"./index.76f25ffd.js";import{R as ae,r as le}from"./responsiveObserve.9989b7e5.js";import"./css.b1edd3c8.js";import"./useMergedState.7728052c.js";import"./EyeOutlined.a802f7ec.js";import"./FormItem.bd7a2e5f.js";import"./Col.44017261.js";import"./useFlexGapSupport.68ef4bc8.js";import"./toArray.b65596a9.js";import"./get.cd450ad4.js";import"./hasIn.eec64335.js";import"./toInteger.a9895417.js";import"./toFinite.b556e507.js";import"./_baseFindIndex.10ef1a58.js";import"./collapseMotion.eebad530.js";import"./index.a8fdcdf2.js";import"./Form.970007bf.js";import"./_arrayIncludesWith.91d14080.js";import"./debounce.19a49a4f.js";import"./useRefs.66691193.js";function D(e){return e!=null}var Pe=function(t){var a=t.itemPrefixCls,o=t.component,r=t.span,l=t.labelStyle,c=t.contentStyle,E=t.bordered,d=t.label,A=t.content,s=t.colon,Q=o;if(E){var m;return n(Q,{class:[(m={},x(m,"".concat(a,"-item-label"),D(d)),x(m,"".concat(a,"-item-content"),D(A)),m)],colSpan:r},{default:function(){return[D(d)&&n("span",{style:l},[d]),D(A)&&n("span",{style:c},[A])]}})}return n(Q,{class:["".concat(a,"-item")],colSpan:r},{default:function(){return[n("div",{class:"".concat(a,"-item-container")},[d&&n("span",{class:["".concat(a,"-item-label"),x({},"".concat(a,"-item-no-colon"),!s)],style:l},[d]),A&&n("span",{class:"".concat(a,"-item-content"),style:c},[A])])]}})},L=Pe,De=function(t){var a=function(m,g,f){var C=g.colon,p=g.prefixCls,h=g.bordered,I=f.component,j=f.type,T=f.showLabel,P=f.showContent,N=f.labelStyle,R=f.contentStyle;return m.map(function(v,K){var k,U,_=v.props||{},G=_.prefixCls,M=G===void 0?p:G,X=_.span,O=X===void 0?1:X,W=_.labelStyle,V=_.contentStyle,$=_.label,ee=$===void 0?(U=(k=v.children)===null||k===void 0?void 0:k.label)===null||U===void 0?void 0:U.call(k):$,te=fe(v),F=pe(v),Y=me(v),q=v.key;return typeof I=="string"?n(L,{key:"".concat(j,"-").concat(String(q)||K),class:F,style:Y,labelStyle:y(y({},N.value),W),contentStyle:y(y({},R.value),V),span:O,colon:C,component:I,itemPrefixCls:M,bordered:h,label:T?ee:null,content:P?te:null},null):[n(L,{key:"label-".concat(String(q)||K),class:F,style:y(y(y({},N.value),Y),W),span:1,colon:C,component:I[0],itemPrefixCls:M,bordered:h,label:ee},null),n(L,{key:"content-".concat(String(q)||K),class:F,style:y(y(y({},R.value),Y),V),span:O*2-1,component:I[1],itemPrefixCls:M,bordered:h,content:te},null)]})},o=t.prefixCls,r=t.vertical,l=t.row,c=t.index,E=t.bordered,d=ue(Ae,{labelStyle:H({}),contentStyle:H({})}),A=d.labelStyle,s=d.contentStyle;return r?n(w,null,[n("tr",{key:"label-".concat(c),class:"".concat(o,"-row")},[a(l,t,{component:"th",type:"label",showLabel:!0,labelStyle:A,contentStyle:s})]),n("tr",{key:"content-".concat(c),class:"".concat(o,"-row")},[a(l,t,{component:"td",type:"content",showContent:!0,labelStyle:A,contentStyle:s})])]):n("tr",{key:c,class:"".concat(o,"-row")},[a(l,t,{component:E?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:A,contentStyle:s})])},ze=De;z.any;var Te=function(){return{prefixCls:String,label:z.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}},ce=re({name:"ADescriptionsItem",props:Te(),slots:["label"],setup:function(t,a){var o=a.slots;return function(){var r;return(r=o.default)===null||r===void 0?void 0:r.call(o)}}}),de={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function Me(e,t){if(typeof e=="number")return e;if(ie(e)==="object")for(var a=0;a<le.length;a++){var o=le[a];if(t[o]&&e[o]!==void 0)return e[o]||de[o]}return 3}function se(e,t,a){var o=e;return(t===void 0||t>a)&&(o=_e(e,{span:a}),be(t===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),o}function Fe(e,t){var a=he(e),o=[],r=[],l=t;return a.forEach(function(c,E){var d,A=(d=c.props)===null||d===void 0?void 0:d.span,s=A||1;if(E===a.length-1){r.push(se(c,A,l)),o.push(r);return}s<l?(l-=s,r.push(c)):(r.push(se(c,s,l)),o.push(r),l=t,r=[])}),o}var Ye=function(){return{prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:z.any,extra:z.any,column:{type:[Number,Object],default:function(){return de}},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}},Ae=Symbol("descriptionsContext"),J=re({name:"ADescriptions",props:Ye(),slots:["title","extra"],Item:ce,setup:function(t,a){var o=a.slots,r=ge("descriptions",t),l=r.prefixCls,c=r.direction,E,d=H({});Ee(function(){E=ae.subscribe(function(s){ie(t.column)==="object"&&(d.value=s)})}),ve(function(){ae.unsubscribe(E)}),ye(Ae,{labelStyle:ne(t,"labelStyle"),contentStyle:ne(t,"contentStyle")});var A=Qe(function(){return Me(t.column,d.value)});return function(){var s,Q,m,g,f=t.size,C=t.bordered,p=C===void 0?!1:C,h=t.layout,I=h===void 0?"horizontal":h,j=t.colon,T=j===void 0?!0:j,P=t.title,N=P===void 0?(Q=o.title)===null||Q===void 0?void 0:Q.call(o):P,R=t.extra,v=R===void 0?(m=o.extra)===null||m===void 0?void 0:m.call(o):R,K=(g=o.default)===null||g===void 0?void 0:g.call(o),k=Fe(K,A.value);return n("div",{class:[l.value,(s={},x(s,"".concat(l.value,"-").concat(f),f!=="default"),x(s,"".concat(l.value,"-bordered"),!!p),x(s,"".concat(l.value,"-rtl"),c.value==="rtl"),s)]},[(N||v)&&n("div",{class:"".concat(l.value,"-header")},[N&&n("div",{class:"".concat(l.value,"-title")},[N]),v&&n("div",{class:"".concat(l.value,"-extra")},[v])]),n("div",{class:"".concat(l.value,"-view")},[n("table",null,[n("tbody",null,[k.map(function(U,_){return n(ze,{key:_,index:_,colon:T,prefixCls:l.value,vertical:I==="vertical",bordered:p,row:U},null)})])])])])}}});J.install=function(e){return e.component(J.name,J),e.component(J.Item.name,J.Item),e};var qe=J;const Le={name:"WhatAnimeIsThis",data:()=>({file:"",img:void 0,fileName:"",id:"",quota:0,quotaUsed:0,loading:!1,result:[]}),mounted(){this.checkTimes()},methods:{beforeUpload(e){if(e.size/1024/1024>=10)return this.$msg.error("\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC710MB!"),!1;const t=new FileReader;return t.onload=()=>{this.img=e,this.fileName=e.name,this.file=t.result},t.readAsDataURL(e),!1},async start(){try{this.loading=!0;const e=new FormData;e.append("image",this.img);const t=await this.$axios.post("https://api.trace.moe/search?anilistInfo",e,{headers:{"Content-Type":"multipart/form-data"}});this.loading=!1,await this.checkTimes(),t.data.error||(this.result=t.data.result||[])}catch{this.loading=!1,this.$msg.error("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5")}},async checkTimes(){try{const e=await this.$axios.get("https://api.trace.moe/me");this.id=e.data.id||"",this.quotaUsed=e.data.quotaUsed||0,this.quota=e.data.quota||0}catch{this.$msg.error("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5")}},secondToDate(e){const t=Math.floor(e/3600),a=Math.floor(e/60%60),o=(e%60).toFixed(2);return t+":"+a+":"+o}}},He=e=>(xe("data-v-8eadfaa8"),e=e(),Re(),e),Ze=u(" \u8BF7\u9009\u62E9\u8981\u8BC6\u522B\u52A8\u6F2B\u622A\u56FE "),Ge={key:0},Xe=He(()=>Z("span",{class:"i-icon-park-outline-loading"},null,-1)),Oe=u("\u8BC6\u522B\u4E2D"),We=[Xe,Oe],Ve={key:1},$e=u(" \u4F7F\u7528 trace.moe API\uFF0C\u6709\u4F7F\u7528\u6B21\u6570\u9650\u5236\u3002\u7528\u6237ID\uFF1A "),et=u(" \uFF0C\u6BCF\u6708\u6B21\u6570\u5269\u4F59\uFF1A "),tt=u(" \uFF0C\u5DF2\u4F7F\u7528\u6B21\u6570\uFF1A "),nt=u(" \u9884\u89C8 "),ot=u(" \u7ED3\u679C "),at=u(" ~ "),lt=["src","poster"];function st(e,t,a,o,r,l){const c=Be,E=ke,d=we,A=je,s=Je,Q=Ie,m=Ue,g=Ke,f=ce,C=qe;return S(),B(w,null,[n(c,{level:3},{default:i(()=>[Ze]),_:1}),n(A,{"file-list":[],"show-upload-list":!1,accept:"image/*","before-upload":l.beforeUpload},{default:i(()=>[n(d,{readonly:"",placeholder:"\u70B9\u51FB\u8FD9\u91CC\u4E0A\u4F20\u56FE\u7247",value:e.fileName},{addonAfter:i(()=>[n(E,{block:"",disabled:!e.file||e.quota===0||e.quota-e.quotaUsed<=0,onClick:Ne(l.start,["stop"])},{default:i(()=>[e.loading?(S(),B("span",Ge,We)):(S(),B("span",Ve,"\u5F00\u59CB\u8BC6\u522B"))]),_:1},8,["disabled","onClick"])]),_:1},8,["value"])]),_:1},8,["before-upload"]),n(Q,null,{default:i(()=>[Z("blockquote",null,[$e,n(s,{code:""},{default:i(()=>[u(b(e.id),1)]),_:1}),et,n(s,{code:""},{default:i(()=>[u(b(e.quota),1)]),_:1}),tt,n(s,{code:""},{default:i(()=>[u(b(e.quotaUsed),1)]),_:1})])]),_:1}),e.file?(S(),B(w,{key:0},[n(m),n(c,{level:3},{default:i(()=>[nt]),_:1}),n(g,{style:{"max-width":"100%"},src:e.file,fallback:"data:image/png;base64,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"},null,8,["src"])],64)):oe("",!0),e.result.length>0?(S(),B(w,{key:1},[n(m),n(c,{level:3},{default:i(()=>[ot]),_:1}),(S(!0),B(w,null,Se(e.result,(p,h)=>(S(),B(w,{key:h},[n(m),n(C,{title:p.anilist.title.native+(p.episode?" EP#"+p.episode:""),bordered:"",size:"small",layout:"vertical"},{default:i(()=>[n(f,{label:"\u7F57\u9A6C\u97F3"},{default:i(()=>[u(b(p.anilist.title.romaji),1)]),_:2},1024),n(f,{label:"\u6587\u4EF6\u540D"},{default:i(()=>[u(b(p.filename),1)]),_:2},1024),n(f,{label:"\u76F8\u4F3C\u5EA6"},{default:i(()=>[u(b((p.similarity*100).toFixed(2)+"%"),1)]),_:2},1024),n(f,{label:"\u5339\u914D\u4F4D\u7F6E"},{default:i(()=>[n(s,{code:""},{default:i(()=>[u(b(l.secondToDate(p.from)),1)]),_:2},1024),at,n(s,{code:""},{default:i(()=>[u(b(l.secondToDate(p.to)),1)]),_:2},1024)]),_:2},1024),n(f,{label:"\u9884\u89C8",span:3},{default:i(()=>[Z("video",{controls:"",style:{"max-width":"100%"},src:p.video,poster:p.image},null,8,lt)]),_:2},1024)]),_:2},1032,["title"])],64))),128))],64)):oe("",!0)],64)}var Jt=Ce(Le,[["render",st],["__scopeId","data-v-8eadfaa8"]]);export{Jt as default};
