import{a as n,h as x,j as me,r as H,F as w,bL as fe,cE as ge,cF as Ee,p as Q,P as T,d as ce,e as ye,a4 as ve,ag as de,ad as Qe,aH as he,ba as ae,f as be,a$ as _e,x as Ce,a5 as Se,_ as Be,o as S,J as B,w as i,$ as le,R as Ie,L as Ne,cg as ke,b as u,bu as we,K as Z,a0 as _,B as Je,I as xe,cd as Re,S as Ke,T as Pe}from"./index.0076ae71.js";import{a as Ue}from"./index.40efd5a3.js";import{_ as je}from"./index.d10b11c0.js";import{_ as De}from"./index.1840c018.js";import"./index.16e8d45c.js";import{R as se,r as re}from"./responsiveObserve.feea05c3.js";import"./css.b1edd3c8.js";import"./EyeOutlined.37d7aead.js";import"./FormItem.64437d2d.js";import"./Col.4a27d762.js";import"./useFlexGapSupport.c97836c2.js";import"./toArray.212a2a2e.js";import"./get.82adb324.js";import"./hasIn.92743382.js";import"./toInteger.92a1bf9f.js";import"./toFinite.5bacd687.js";import"./_baseFindIndex.10ef1a58.js";import"./collapseMotion.6195688e.js";import"./index.0f56182c.js";import"./Form.83fad866.js";import"./_arrayIncludesWith.91d14080.js";import"./useRefs.7d2cdf6b.js";function D(e){return e!=null}var Te=function(t){var a=t.itemPrefixCls,o=t.component,r=t.span,l=t.labelStyle,c=t.contentStyle,E=t.bordered,d=t.label,A=t.content,s=t.colon,h=o;if(E){var f;return n(h,{class:[(f={},x(f,"".concat(a,"-item-label"),D(d)),x(f,"".concat(a,"-item-content"),D(A)),f)],colSpan:r},{default:function(){return[D(d)&&n("span",{style:l},[d]),D(A)&&n("span",{style:c},[A])]}})}return n(h,{class:["".concat(a,"-item")],colSpan:r},{default:function(){return[n("div",{class:"".concat(a,"-item-container")},[d&&n("span",{class:["".concat(a,"-item-label"),x({},"".concat(a,"-item-no-colon"),!s)],style:l},[d]),A&&n("span",{class:"".concat(a,"-item-content"),style:c},[A])])]}})};const q=Te;var ze=function(t){var a=function(f,g,p){var C=g.colon,m=g.prefixCls,b=g.bordered,I=p.component,U=p.type,z=p.showLabel,j=p.showContent,N=p.labelStyle,R=p.contentStyle;return f.map(function(y,K){var k,P,v=y.props||{},G=v.prefixCls,F=G===void 0?m:G,X=v.span,O=X===void 0?1:X,W=v.labelStyle,V=W===void 0?v["label-style"]:W,$=v.contentStyle,ee=$===void 0?v["content-style"]:$,te=v.label,ne=te===void 0?(P=(k=y.children)===null||k===void 0?void 0:k.label)===null||P===void 0?void 0:P.call(k):te,oe=fe(y),L=ge(y),M=Ee(y),Y=y.key;return typeof I=="string"?n(q,{key:"".concat(U,"-").concat(String(Y)||K),class:L,style:M,labelStyle:Q(Q({},N),V),contentStyle:Q(Q({},R),ee),span:O,colon:C,component:I,itemPrefixCls:F,bordered:b,label:z?ne:null,content:j?oe:null},null):[n(q,{key:"label-".concat(String(Y)||K),class:L,style:Q(Q(Q({},N),M),V),span:1,colon:C,component:I[0],itemPrefixCls:F,bordered:b,label:ne},null),n(q,{key:"content-".concat(String(Y)||K),class:L,style:Q(Q(Q({},R),M),ee),span:O*2-1,component:I[1],itemPrefixCls:F,bordered:b,content:oe},null)]})},o=t.prefixCls,r=t.vertical,l=t.row,c=t.index,E=t.bordered,d=me(pe,{labelStyle:H({}),contentStyle:H({})}),A=d.labelStyle,s=d.contentStyle;return r?n(w,null,[n("tr",{key:"label-".concat(c),class:"".concat(o,"-row")},[a(l,t,{component:"th",type:"label",showLabel:!0,labelStyle:A.value,contentStyle:s.value})]),n("tr",{key:"content-".concat(c),class:"".concat(o,"-row")},[a(l,t,{component:"td",type:"content",showContent:!0,labelStyle:A.value,contentStyle:s.value})])]):n("tr",{key:c,class:"".concat(o,"-row")},[a(l,t,{component:E?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:A.value,contentStyle:s.value})])};const Fe=ze;T.any;var Le=function(){return{prefixCls:String,label:T.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}},Ae=ce({name:"ADescriptionsItem",props:Le(),slots:["label"],setup:function(t,a){var o=a.slots;return function(){var r;return(r=o.default)===null||r===void 0?void 0:r.call(o)}}}),ue={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function Me(e,t){if(typeof e=="number")return e;if(de(e)==="object")for(var a=0;a<re.length;a++){var o=re[a];if(t[o]&&e[o]!==void 0)return e[o]||ue[o]}return 3}function ie(e,t,a){var o=e;return(t===void 0||t>a)&&(o=Ce(e,{span:a}),Se(t===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),o}function Ye(e,t){var a=_e(e),o=[],r=[],l=t;return a.forEach(function(c,E){var d,A=(d=c.props)===null||d===void 0?void 0:d.span,s=A||1;if(E===a.length-1){r.push(ie(c,A,l)),o.push(r);return}s<l?(l-=s,r.push(c)):(r.push(ie(c,s,l)),o.push(r),l=t,r=[])}),o}var qe=function(){return{prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:T.any,extra:T.any,column:{type:[Number,Object],default:function(){return ue}},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}},pe=Symbol("descriptionsContext"),J=ce({name:"ADescriptions",props:qe(),slots:["title","extra"],Item:Ae,setup:function(t,a){var o=a.slots,r=ye("descriptions",t),l=r.prefixCls,c=r.direction,E,d=H({});ve(function(){E=se.subscribe(function(s){de(t.column)==="object"&&(d.value=s)})}),Qe(function(){se.unsubscribe(E)}),he(pe,{labelStyle:ae(t,"labelStyle"),contentStyle:ae(t,"contentStyle")});var A=be(function(){return Me(t.column,d.value)});return function(){var s,h,f,g,p=t.size,C=t.bordered,m=C===void 0?!1:C,b=t.layout,I=b===void 0?"horizontal":b,U=t.colon,z=U===void 0?!0:U,j=t.title,N=j===void 0?(h=o.title)===null||h===void 0?void 0:h.call(o):j,R=t.extra,y=R===void 0?(f=o.extra)===null||f===void 0?void 0:f.call(o):R,K=(g=o.default)===null||g===void 0?void 0:g.call(o),k=Ye(K,A.value);return n("div",{class:[l.value,(s={},x(s,"".concat(l.value,"-").concat(p),p!=="default"),x(s,"".concat(l.value,"-bordered"),!!m),x(s,"".concat(l.value,"-rtl"),c.value==="rtl"),s)]},[(N||y)&&n("div",{class:"".concat(l.value,"-header")},[N&&n("div",{class:"".concat(l.value,"-title")},[N]),y&&n("div",{class:"".concat(l.value,"-extra")},[y])]),n("div",{class:"".concat(l.value,"-view")},[n("table",null,[n("tbody",null,[k.map(function(P,v){return n(Fe,{key:v,index:v,colon:z,prefixCls:l.value,vertical:I==="vertical",bordered:m,row:P},null)})])])])])}}});J.install=function(e){return e.component(J.name,J),e.component(J.Item.name,J.Item),e};const He=J;const Ze={name:"WhatAnimeIsThis",data:()=>({file:"",img:void 0,fileName:"",id:"",quota:0,quotaUsed:0,loading:!1,result:[]}),mounted(){this.checkTimes()},methods:{beforeUpload(e){if(e.size/1024/1024>=10)return this.$msg.error("\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC710MB!"),!1;const t=new FileReader;return t.onload=()=>{this.img=e,this.fileName=e.name,this.file=t.result},t.readAsDataURL(e),!1},async start(){try{this.loading=!0;const e=new FormData;e.append("image",this.img);const t=await this.$axios.post("https://api.trace.moe/search?anilistInfo",e,{headers:{"Content-Type":"multipart/form-data"}});this.loading=!1,await this.checkTimes(),t.data.error||(this.result=t.data.result||[])}catch{this.loading=!1,this.$msg.error("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5")}},async checkTimes(){try{const e=await this.$axios.get("https://api.trace.moe/me");this.id=e.data.id||"",this.quotaUsed=e.data.quotaUsed||0,this.quota=e.data.quota||0}catch{this.$msg.error("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5")}},secondToDate(e){const t=Math.floor(e/3600),a=Math.floor(e/60%60),o=(e%60).toFixed(2);return t+":"+a+":"+o}}},Ge=e=>(Ke("data-v-4735267d"),e=e(),Pe(),e),Xe={key:0},Oe=Ge(()=>Z("span",{class:"i-icon-park-outline-loading"},null,-1)),We={key:1},Ve=["src","poster"];function $e(e,t,a,o,r,l){const c=Ne,E=Je,d=xe,A=De,s=Re,h=ke,f=je,g=Ue,p=Ae,C=He;return S(),B(w,null,[n(c,{level:3},{default:i(()=>[u(" \u8BF7\u9009\u62E9\u8981\u8BC6\u522B\u52A8\u6F2B\u622A\u56FE ")]),_:1}),n(A,{"file-list":[],"show-upload-list":!1,accept:"image/*","before-upload":l.beforeUpload},{default:i(()=>[n(d,{readonly:"",placeholder:"\u70B9\u51FB\u8FD9\u91CC\u4E0A\u4F20\u56FE\u7247",value:e.fileName},{addonAfter:i(()=>[n(E,{block:"",disabled:!e.file||e.quota===0||e.quota-e.quotaUsed<=0,onClick:we(l.start,["stop"])},{default:i(()=>[e.loading?(S(),B("span",Xe,[Oe,u("\u8BC6\u522B\u4E2D")])):(S(),B("span",We,"\u5F00\u59CB\u8BC6\u522B"))]),_:1},8,["disabled","onClick"])]),_:1},8,["value"])]),_:1},8,["before-upload"]),n(h,null,{default:i(()=>[Z("blockquote",null,[u(" \u4F7F\u7528 trace.moe API\uFF0C\u6709\u4F7F\u7528\u6B21\u6570\u9650\u5236\u3002\u7528\u6237ID\uFF1A "),n(s,{code:""},{default:i(()=>[u(_(e.id),1)]),_:1}),u(" \uFF0C\u6BCF\u6708\u6B21\u6570\u5269\u4F59\uFF1A "),n(s,{code:""},{default:i(()=>[u(_(e.quota),1)]),_:1}),u(" \uFF0C\u5DF2\u4F7F\u7528\u6B21\u6570\uFF1A "),n(s,{code:""},{default:i(()=>[u(_(e.quotaUsed),1)]),_:1})])]),_:1}),e.file?(S(),B(w,{key:0},[n(f),n(c,{level:3},{default:i(()=>[u(" \u9884\u89C8 ")]),_:1}),n(g,{style:{"max-width":"100%"},src:e.file,fallback:"data:image/png;base64,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"},null,8,["src"])],64)):le("",!0),e.result.length>0?(S(),B(w,{key:1},[n(f),n(c,{level:3},{default:i(()=>[u(" \u7ED3\u679C ")]),_:1}),(S(!0),B(w,null,Ie(e.result,(m,b)=>(S(),B(w,{key:b},[n(f),n(C,{title:m.anilist.title.native+(m.episode?" EP#"+m.episode:""),bordered:"",size:"small",layout:"vertical"},{default:i(()=>[n(p,{label:"\u7F57\u9A6C\u97F3"},{default:i(()=>[u(_(m.anilist.title.romaji),1)]),_:2},1024),n(p,{label:"\u6587\u4EF6\u540D"},{default:i(()=>[u(_(m.filename),1)]),_:2},1024),n(p,{label:"\u76F8\u4F3C\u5EA6"},{default:i(()=>[u(_((m.similarity*100).toFixed(2)+"%"),1)]),_:2},1024),n(p,{label:"\u5339\u914D\u4F4D\u7F6E"},{default:i(()=>[n(s,{code:""},{default:i(()=>[u(_(l.secondToDate(m.from)),1)]),_:2},1024),u(" ~ "),n(s,{code:""},{default:i(()=>[u(_(l.secondToDate(m.to)),1)]),_:2},1024)]),_:2},1024),n(p,{label:"\u9884\u89C8",span:3},{default:i(()=>[Z("video",{controls:"",style:{"max-width":"100%"},src:m.video,poster:m.image},null,8,Ve)]),_:2},1024)]),_:2},1032,["title"])],64))),128))],64)):le("",!0)],64)}const bt=Be(Ze,[["render",$e],["__scopeId","data-v-4735267d"]]);export{bt as default};
