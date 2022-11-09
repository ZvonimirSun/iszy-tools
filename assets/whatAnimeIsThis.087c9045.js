import{a as n,h as x,j as me,r as H,F as k,bN as fe,cG as ge,cH as Ee,p as Q,P as T,d as ce,e as ye,a4 as ve,ag as de,ad as Qe,aJ as he,bc as ae,f as be,b1 as _e,y as Ce,a5 as Se,_ as Be,o as S,J as B,w as r,$ as le,R as Ie,L as Ne,ci as we,b as u,bw as ke,K as Z,a0 as _,B as Je,I as xe,cf as Re,S as Ke,T as Pe}from"./index.bbc49104.js";import{a as Ue}from"./index.fb9f2e9b.js";import{_ as je}from"./index.6d4b8726.js";import{_ as De}from"./index.7333f5d5.js";import"./index.15ac8960.js";import{R as se,r as ie}from"./responsiveObserve.b50b6281.js";import"./css.b1edd3c8.js";import"./EyeOutlined.68921e85.js";import"./FormItem.3464d0f1.js";import"./Col.2e3c8649.js";import"./useFlexGapSupport.d7f58804.js";import"./toArray.691daed4.js";import"./get.93394aca.js";import"./hasIn.a44f9487.js";import"./toInteger.90e31492.js";import"./toFinite.80e0d582.js";import"./_baseFindIndex.10ef1a58.js";import"./collapseMotion.6b35f1ec.js";import"./index.320cccdb.js";import"./Form.5160b8fe.js";import"./_arrayIncludesWith.91d14080.js";import"./useRefs.155f3548.js";function D(e){return e!=null}var Te=function(t){var a=t.itemPrefixCls,o=t.component,i=t.span,l=t.labelStyle,c=t.contentStyle,E=t.bordered,d=t.label,A=t.content,s=t.colon,h=o;if(E){var f;return n(h,{class:[(f={},x(f,"".concat(a,"-item-label"),D(d)),x(f,"".concat(a,"-item-content"),D(A)),f)],colSpan:i},{default:function(){return[D(d)&&n("span",{style:l},[d]),D(A)&&n("span",{style:c},[A])]}})}return n(h,{class:["".concat(a,"-item")],colSpan:i},{default:function(){return[n("div",{class:"".concat(a,"-item-container")},[d&&n("span",{class:["".concat(a,"-item-label"),x({},"".concat(a,"-item-no-colon"),!s)],style:l},[d]),A&&n("span",{class:"".concat(a,"-item-content"),style:c},[A])])]}})};const q=Te;var ze=function(t){var a=function(f,g,p){var C=g.colon,m=g.prefixCls,b=g.bordered,I=p.component,U=p.type,z=p.showLabel,j=p.showContent,N=p.labelStyle,R=p.contentStyle;return f.map(function(y,K){var w,P,v=y.props||{},G=v.prefixCls,M=G===void 0?m:G,O=v.span,X=O===void 0?1:O,W=v.labelStyle,$=W===void 0?v["label-style"]:W,V=v.contentStyle,ee=V===void 0?v["content-style"]:V,te=v.label,ne=te===void 0?(w=y.children)===null||w===void 0||(P=w.label)===null||P===void 0?void 0:P.call(w):te,oe=fe(y),F=ge(y),L=Ee(y),Y=y.key;return typeof I=="string"?n(q,{key:"".concat(U,"-").concat(String(Y)||K),class:F,style:L,labelStyle:Q(Q({},N),$),contentStyle:Q(Q({},R),ee),span:X,colon:C,component:I,itemPrefixCls:M,bordered:b,label:z?ne:null,content:j?oe:null},null):[n(q,{key:"label-".concat(String(Y)||K),class:F,style:Q(Q(Q({},N),L),$),span:1,colon:C,component:I[0],itemPrefixCls:M,bordered:b,label:ne},null),n(q,{key:"content-".concat(String(Y)||K),class:F,style:Q(Q(Q({},R),L),ee),span:X*2-1,component:I[1],itemPrefixCls:M,bordered:b,content:oe},null)]})},o=t.prefixCls,i=t.vertical,l=t.row,c=t.index,E=t.bordered,d=me(pe,{labelStyle:H({}),contentStyle:H({})}),A=d.labelStyle,s=d.contentStyle;return i?n(k,null,[n("tr",{key:"label-".concat(c),class:"".concat(o,"-row")},[a(l,t,{component:"th",type:"label",showLabel:!0,labelStyle:A.value,contentStyle:s.value})]),n("tr",{key:"content-".concat(c),class:"".concat(o,"-row")},[a(l,t,{component:"td",type:"content",showContent:!0,labelStyle:A.value,contentStyle:s.value})])]):n("tr",{key:c,class:"".concat(o,"-row")},[a(l,t,{component:E?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:A.value,contentStyle:s.value})])};const Me=ze;T.any;var Fe=function(){return{prefixCls:String,label:T.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}},Ae=ce({compatConfig:{MODE:3},name:"ADescriptionsItem",props:Fe(),slots:["label"],setup:function(t,a){var o=a.slots;return function(){var i;return(i=o.default)===null||i===void 0?void 0:i.call(o)}}}),ue={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function Le(e,t){if(typeof e=="number")return e;if(de(e)==="object")for(var a=0;a<ie.length;a++){var o=ie[a];if(t[o]&&e[o]!==void 0)return e[o]||ue[o]}return 3}function re(e,t,a){var o=e;return(t===void 0||t>a)&&(o=Ce(e,{span:a}),Se(t===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),o}function Ye(e,t){var a=_e(e),o=[],i=[],l=t;return a.forEach(function(c,E){var d,A=(d=c.props)===null||d===void 0?void 0:d.span,s=A||1;if(E===a.length-1){i.push(re(c,A,l)),o.push(i);return}s<l?(l-=s,i.push(c)):(i.push(re(c,s,l)),o.push(i),l=t,i=[])}),o}var qe=function(){return{prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:T.any,extra:T.any,column:{type:[Number,Object],default:function(){return ue}},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}},pe=Symbol("descriptionsContext"),J=ce({compatConfig:{MODE:3},name:"ADescriptions",props:qe(),slots:["title","extra"],Item:Ae,setup:function(t,a){var o=a.slots,i=ye("descriptions",t),l=i.prefixCls,c=i.direction,E,d=H({});ve(function(){E=se.subscribe(function(s){de(t.column)==="object"&&(d.value=s)})}),Qe(function(){se.unsubscribe(E)}),he(pe,{labelStyle:ae(t,"labelStyle"),contentStyle:ae(t,"contentStyle")});var A=be(function(){return Le(t.column,d.value)});return function(){var s,h,f,g,p=t.size,C=t.bordered,m=C===void 0?!1:C,b=t.layout,I=b===void 0?"horizontal":b,U=t.colon,z=U===void 0?!0:U,j=t.title,N=j===void 0?(s=o.title)===null||s===void 0?void 0:s.call(o):j,R=t.extra,y=R===void 0?(h=o.extra)===null||h===void 0?void 0:h.call(o):R,K=(f=o.default)===null||f===void 0?void 0:f.call(o),w=Ye(K,A.value);return n("div",{class:[l.value,(g={},x(g,"".concat(l.value,"-").concat(p),p!=="default"),x(g,"".concat(l.value,"-bordered"),!!m),x(g,"".concat(l.value,"-rtl"),c.value==="rtl"),g)]},[(N||y)&&n("div",{class:"".concat(l.value,"-header")},[N&&n("div",{class:"".concat(l.value,"-title")},[N]),y&&n("div",{class:"".concat(l.value,"-extra")},[y])]),n("div",{class:"".concat(l.value,"-view")},[n("table",null,[n("tbody",null,[w.map(function(P,v){return n(Me,{key:v,index:v,colon:z,prefixCls:l.value,vertical:I==="vertical",bordered:m,row:P},null)})])])])])}}});J.install=function(e){return e.component(J.name,J),e.component(J.Item.name,J.Item),e};const He=J;const Ze={name:"WhatAnimeIsThis",data:()=>({file:"",img:void 0,fileName:"",id:"",quota:0,quotaUsed:0,loading:!1,result:[]}),mounted(){this.checkTimes()},methods:{beforeUpload(e){if(e.size/1024/1024>=10)return this.$msg.error("\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC710MB!"),!1;const t=new FileReader;return t.onload=()=>{this.img=e,this.fileName=e.name,this.file=t.result},t.readAsDataURL(e),!1},async start(){try{this.loading=!0;const e=new FormData;e.append("image",this.img);const t=await this.$axios.post("https://api.trace.moe/search?anilistInfo",e,{headers:{"Content-Type":"multipart/form-data"}});this.loading=!1,await this.checkTimes(),t.data.error||(this.result=t.data.result||[])}catch{this.loading=!1,this.$msg.error("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5")}},async checkTimes(){try{const e=await this.$axios.get("https://api.trace.moe/me");this.id=e.data.id||"",this.quotaUsed=e.data.quotaUsed||0,this.quota=e.data.quota||0}catch{this.$msg.error("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5")}},secondToDate(e){const t=Math.floor(e/3600),a=Math.floor(e/60%60),o=(e%60).toFixed(2);return t+":"+a+":"+o}}},Ge=e=>(Ke("data-v-b9700e5e"),e=e(),Pe(),e),Oe={key:0},Xe=Ge(()=>Z("span",{class:"i-icon-park-outline-loading"},null,-1)),We={key:1},$e=["src","poster"];function Ve(e,t,a,o,i,l){const c=Ne,E=Je,d=xe,A=De,s=Re,h=we,f=je,g=Ue,p=Ae,C=He;return S(),B(k,null,[n(c,{level:3},{default:r(()=>[u(" \u8BF7\u9009\u62E9\u8981\u8BC6\u522B\u52A8\u6F2B\u622A\u56FE ")]),_:1}),n(A,{"file-list":[],"show-upload-list":!1,accept:"image/*","before-upload":l.beforeUpload},{default:r(()=>[n(d,{readonly:"",placeholder:"\u70B9\u51FB\u8FD9\u91CC\u4E0A\u4F20\u56FE\u7247",value:e.fileName},{addonAfter:r(()=>[n(E,{block:"",disabled:!e.file||e.quota===0||e.quota-e.quotaUsed<=0,onClick:ke(l.start,["stop"])},{default:r(()=>[e.loading?(S(),B("span",Oe,[Xe,u("\u8BC6\u522B\u4E2D")])):(S(),B("span",We,"\u5F00\u59CB\u8BC6\u522B"))]),_:1},8,["disabled","onClick"])]),_:1},8,["value"])]),_:1},8,["before-upload"]),n(h,null,{default:r(()=>[Z("blockquote",null,[u(" \u4F7F\u7528 trace.moe API\uFF0C\u6709\u4F7F\u7528\u6B21\u6570\u9650\u5236\u3002\u7528\u6237ID\uFF1A "),n(s,{code:""},{default:r(()=>[u(_(e.id),1)]),_:1}),u(" \uFF0C\u6BCF\u6708\u6B21\u6570\u5269\u4F59\uFF1A "),n(s,{code:""},{default:r(()=>[u(_(e.quota),1)]),_:1}),u(" \uFF0C\u5DF2\u4F7F\u7528\u6B21\u6570\uFF1A "),n(s,{code:""},{default:r(()=>[u(_(e.quotaUsed),1)]),_:1})])]),_:1}),e.file?(S(),B(k,{key:0},[n(f),n(c,{level:3},{default:r(()=>[u(" \u9884\u89C8 ")]),_:1}),n(g,{style:{"max-width":"100%"},src:e.file,fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="},null,8,["src"])],64)):le("",!0),e.result.length>0?(S(),B(k,{key:1},[n(f),n(c,{level:3},{default:r(()=>[u(" \u7ED3\u679C ")]),_:1}),(S(!0),B(k,null,Ie(e.result,(m,b)=>(S(),B(k,{key:b},[n(f),n(C,{title:m.anilist.title.native+(m.episode?" EP#"+m.episode:""),bordered:"",size:"small",layout:"vertical"},{default:r(()=>[n(p,{label:"\u7F57\u9A6C\u97F3"},{default:r(()=>[u(_(m.anilist.title.romaji),1)]),_:2},1024),n(p,{label:"\u6587\u4EF6\u540D"},{default:r(()=>[u(_(m.filename),1)]),_:2},1024),n(p,{label:"\u76F8\u4F3C\u5EA6"},{default:r(()=>[u(_((m.similarity*100).toFixed(2)+"%"),1)]),_:2},1024),n(p,{label:"\u5339\u914D\u4F4D\u7F6E"},{default:r(()=>[n(s,{code:""},{default:r(()=>[u(_(l.secondToDate(m.from)),1)]),_:2},1024),u(" ~ "),n(s,{code:""},{default:r(()=>[u(_(l.secondToDate(m.to)),1)]),_:2},1024)]),_:2},1024),n(p,{label:"\u9884\u89C8",span:3},{default:r(()=>[Z("video",{controls:"",style:{"max-width":"100%"},src:m.video,poster:m.image},null,8,$e)]),_:2},1024)]),_:2},1032,["title"])],64))),128))],64)):le("",!0)],64)}const bt=Be(Ze,[["render",Ve],["__scopeId","data-v-b9700e5e"]]);export{bt as default};