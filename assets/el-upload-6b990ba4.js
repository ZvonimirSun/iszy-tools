import{aa as J,bm as re,g as A,a5 as y,a9 as W,bn as E,h as S,aG as ge,j as q,bo as N,y as ie,o as b,c as P,w as R,l as L,H as be,I as he,p as g,n as e,a3 as ue,r as _,s as h,m as B,aK as O,a as C,ag as T,bp as ke,t as Q,a1 as Ee,bq as $e,br as we,aj as _e,bs as Re,bt as Ce,b1 as Le,v as H,aA as Ue,a4 as Pe,a0 as X,aL as Z,Q as Y,bu as Se,bv as Fe,D as x,aD as Te,as as Oe,k as ee,Z as De,am as je,b9 as Be,bw as te,bx as se,x as qe}from"./index-ae2f467a.js";import{E as Ae}from"./el-progress-323de1d1.js";import{i as Ne}from"./isEqual-d759e3da.js";const de=Symbol("uploadContextKey"),He="ElUpload";class Ke extends Error{constructor(r,s,n,c){super(r),this.name="UploadAjaxError",this.status=s,this.method=n,this.url=c}}function ae(o,r,s){let n;return s.response?n=`${s.response.error||s.response}`:s.responseText?n=`${s.responseText}`:n=`fail to ${r.method} ${o} ${s.status}`,new Ke(n,s.status,r.method,o)}function Me(o){const r=o.responseText||o.response;if(!r)return r;try{return JSON.parse(r)}catch{return r}}const ze=o=>{typeof XMLHttpRequest>"u"&&J(He,"XMLHttpRequest is undefined");const r=new XMLHttpRequest,s=o.action;r.upload&&r.upload.addEventListener("progress",p=>{const f=p;f.percent=p.total>0?p.loaded/p.total*100:0,o.onProgress(f)});const n=new FormData;if(o.data)for(const[p,f]of Object.entries(o.data))Array.isArray(f)?n.append(p,...f):n.append(p,f);n.append(o.filename,o.file,o.file.name),r.addEventListener("error",()=>{o.onError(ae(s,o,r))}),r.addEventListener("load",()=>{if(r.status<200||r.status>=300)return o.onError(ae(s,o,r));o.onSuccess(Me(r))}),r.open(o.method,s,!0),o.withCredentials&&"withCredentials"in r&&(r.withCredentials=!0);const c=o.headers||{};if(c instanceof Headers)c.forEach((p,f)=>r.setRequestHeader(f,p));else for(const[p,f]of Object.entries(c))re(f)||r.setRequestHeader(p,String(f));return r.send(n),r},ce=["text","picture","picture-card"];let Ie=1;const G=()=>Date.now()+Ie++,pe=A({action:{type:String,default:"#"},headers:{type:y(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>W({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:y(Array),default:()=>W([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:ce,default:"text"},httpRequest:{type:y(Function),default:ze},disabled:Boolean,limit:Number}),Ve=A({...pe,beforeUpload:{type:y(Function),default:E},beforeRemove:{type:y(Function)},onRemove:{type:y(Function),default:E},onChange:{type:y(Function),default:E},onPreview:{type:y(Function),default:E},onSuccess:{type:y(Function),default:E},onProgress:{type:y(Function),default:E},onError:{type:y(Function),default:E},onExceed:{type:y(Function),default:E}}),We=A({files:{type:y(Array),default:()=>W([])},disabled:{type:Boolean,default:!1},handlePreview:{type:y(Function),default:E},listType:{type:String,values:ce,default:"text"}}),Xe={remove:o=>!!o},Ge=["onKeydown"],Je=["src"],Qe=["onClick"],Ze=["title"],Ye=["onClick"],xe=["onClick"],et=S({name:"ElUploadList"}),tt=S({...et,props:We,emits:Xe,setup(o,{emit:r}){const{t:s}=ge(),n=q("upload"),c=q("icon"),p=q("list"),f=N(),w=ie(!1),$=d=>{r("remove",d)};return(d,k)=>(b(),P(Le,{tag:"ul",class:g([e(n).b("list"),e(n).bm("list",d.listType),e(n).is("disabled",e(f))]),name:e(p).b()},{default:R(()=>[(b(!0),L(be,null,he(d.files,m=>(b(),L("li",{key:m.uid||m.name,class:g([e(n).be("list","item"),e(n).is(m.status),{focusing:w.value}]),tabindex:"0",onKeydown:ue(a=>!e(f)&&$(m),["delete"]),onFocus:k[0]||(k[0]=a=>w.value=!0),onBlur:k[1]||(k[1]=a=>w.value=!1),onClick:k[2]||(k[2]=a=>w.value=!1)},[_(d.$slots,"default",{file:m},()=>[d.listType==="picture"||m.status!=="uploading"&&d.listType==="picture-card"?(b(),L("img",{key:0,class:g(e(n).be("list","item-thumbnail")),src:m.url,alt:""},null,10,Je)):h("v-if",!0),m.status==="uploading"||d.listType!=="picture-card"?(b(),L("div",{key:1,class:g(e(n).be("list","item-info"))},[B("a",{class:g(e(n).be("list","item-name")),onClick:O(a=>d.handlePreview(m),["prevent"])},[C(e(T),{class:g(e(c).m("document"))},{default:R(()=>[C(e(ke))]),_:1},8,["class"]),B("span",{class:g(e(n).be("list","item-file-name")),title:m.name},Q(m.name),11,Ze)],10,Qe),m.status==="uploading"?(b(),P(e(Ae),{key:0,type:d.listType==="picture-card"?"circle":"line","stroke-width":d.listType==="picture-card"?6:2,percentage:Number(m.percentage),style:Ee(d.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):h("v-if",!0)],2)):h("v-if",!0),B("label",{class:g(e(n).be("list","item-status-label"))},[d.listType==="text"?(b(),P(e(T),{key:0,class:g([e(c).m("upload-success"),e(c).m("circle-check")])},{default:R(()=>[C(e($e))]),_:1},8,["class"])):["picture-card","picture"].includes(d.listType)?(b(),P(e(T),{key:1,class:g([e(c).m("upload-success"),e(c).m("check")])},{default:R(()=>[C(e(we))]),_:1},8,["class"])):h("v-if",!0)],2),e(f)?h("v-if",!0):(b(),P(e(T),{key:2,class:g(e(c).m("close")),onClick:a=>$(m)},{default:R(()=>[C(e(_e))]),_:2},1032,["class","onClick"])),h(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),h(" This is a bug which needs to be fixed "),h(" TODO: Fix the incorrect navigation interaction "),e(f)?h("v-if",!0):(b(),L("i",{key:3,class:g(e(c).m("close-tip"))},Q(e(s)("el.upload.deleteTip")),3)),d.listType==="picture-card"?(b(),L("span",{key:4,class:g(e(n).be("list","item-actions"))},[B("span",{class:g(e(n).be("list","item-preview")),onClick:a=>d.handlePreview(m)},[C(e(T),{class:g(e(c).m("zoom-in"))},{default:R(()=>[C(e(Re))]),_:1},8,["class"])],10,Ye),e(f)?h("v-if",!0):(b(),L("span",{key:0,class:g(e(n).be("list","item-delete")),onClick:a=>$(m)},[C(e(T),{class:g(e(c).m("delete"))},{default:R(()=>[C(e(Ce))]),_:1},8,["class"])],10,xe))],2)):h("v-if",!0)])],42,Ge))),128)),_(d.$slots,"append")]),_:3},8,["class","name"]))}});var oe=H(tt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const st=A({disabled:{type:Boolean,default:!1}}),at={file:o=>Ue(o)},ot=["onDrop","onDragover"],fe="ElUploadDrag",nt=S({name:fe}),lt=S({...nt,props:st,emits:at,setup(o,{emit:r}){const s=Pe(de);s||J(fe,"usage: <el-upload><el-upload-dragger /></el-upload>");const n=q("upload"),c=ie(!1),p=N(),f=$=>{if(p.value)return;c.value=!1,$.stopPropagation();const d=Array.from($.dataTransfer.files),k=s.accept.value;if(!k){r("file",d);return}const m=d.filter(a=>{const{type:i,name:t}=a,u=t.includes(".")?`.${t.split(".").pop()}`:"",v=i.replace(/\/.*$/,"");return k.split(",").map(l=>l.trim()).filter(l=>l).some(l=>l.startsWith(".")?u===l:/\/\*$/.test(l)?v===l.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(l)?i===l:!1)});r("file",m)},w=()=>{p.value||(c.value=!0)};return($,d)=>(b(),L("div",{class:g([e(n).b("dragger"),e(n).is("dragover",c.value)]),onDrop:O(f,["prevent"]),onDragover:O(w,["prevent"]),onDragleave:d[0]||(d[0]=O(k=>c.value=!1,["prevent"]))},[_($.$slots,"default")],42,ot))}});var rt=H(lt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const it=A({...pe,beforeUpload:{type:y(Function),default:E},onRemove:{type:y(Function),default:E},onStart:{type:y(Function),default:E},onSuccess:{type:y(Function),default:E},onProgress:{type:y(Function),default:E},onError:{type:y(Function),default:E},onExceed:{type:y(Function),default:E}}),ut=["onKeydown"],dt=["name","multiple","accept"],ct=S({name:"ElUploadContent",inheritAttrs:!1}),pt=S({...ct,props:it,setup(o,{expose:r}){const s=o,n=q("upload"),c=N(),p=X({}),f=X(),w=t=>{if(t.length===0)return;const{autoUpload:u,limit:v,fileList:l,multiple:F,onStart:U,onExceed:K}=s;if(v&&l.length+t.length>v){K(t,l);return}F||(t=t.slice(0,1));for(const M of t){const D=M;D.uid=G(),U(D),u&&$(D)}},$=async t=>{if(f.value.value="",!s.beforeUpload)return d(t);let u,v={};try{const F=s.data,U=s.beforeUpload(t);v=Z(s.data)?Y(s.data):s.data,u=await U,Z(s.data)&&Ne(F,v)&&(v=Y(s.data))}catch{u=!1}if(u===!1){s.onRemove(t);return}let l=t;u instanceof Blob&&(u instanceof File?l=u:l=new File([u],t.name,{type:t.type})),d(Object.assign(l,{uid:t.uid}),v)},d=(t,u)=>{const{headers:v,data:l,method:F,withCredentials:U,name:K,action:M,onProgress:D,onSuccess:me,onError:ve,httpRequest:ye}=s,{uid:z}=t,I={headers:v||{},withCredentials:U,file:t,data:u??l,method:F,filename:K,action:M,onProgress:j=>{D(j,t)},onSuccess:j=>{me(j,t),delete p.value[z]},onError:j=>{ve(j,t),delete p.value[z]}},V=ye(I);p.value[z]=V,V instanceof Promise&&V.then(I.onSuccess,I.onError)},k=t=>{const u=t.target.files;u&&w(Array.from(u))},m=()=>{c.value||(f.value.value="",f.value.click())},a=()=>{m()};return r({abort:t=>{Se(p.value).filter(t?([v])=>String(t.uid)===v:()=>!0).forEach(([v,l])=>{l instanceof XMLHttpRequest&&l.abort(),delete p.value[v]})},upload:$}),(t,u)=>(b(),L("div",{class:g([e(n).b(),e(n).m(t.listType),e(n).is("drag",t.drag)]),tabindex:"0",onClick:m,onKeydown:ue(O(a,["self"]),["enter","space"])},[t.drag?(b(),P(rt,{key:0,disabled:e(c),onFile:w},{default:R(()=>[_(t.$slots,"default")]),_:3},8,["disabled"])):_(t.$slots,"default",{key:1}),B("input",{ref_key:"inputRef",ref:f,class:g(e(n).e("input")),name:t.name,multiple:t.multiple,accept:t.accept,type:"file",onChange:k,onClick:u[0]||(u[0]=O(()=>{},["stop"]))},null,42,dt)],42,ut))}});var ne=H(pt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const le="ElUpload",ft=o=>{var r;(r=o.url)!=null&&r.startsWith("blob:")&&URL.revokeObjectURL(o.url)},mt=(o,r)=>{const s=Fe(o,"fileList",void 0,{passive:!0}),n=a=>s.value.find(i=>i.uid===a.uid);function c(a){var i;(i=r.value)==null||i.abort(a)}function p(a=["ready","uploading","success","fail"]){s.value=s.value.filter(i=>!a.includes(i.status))}const f=(a,i)=>{const t=n(i);t&&(console.error(a),t.status="fail",s.value.splice(s.value.indexOf(t),1),o.onError(a,t,s.value),o.onChange(t,s.value))},w=(a,i)=>{const t=n(i);t&&(o.onProgress(a,t,s.value),t.status="uploading",t.percentage=Math.round(a.percent))},$=(a,i)=>{const t=n(i);t&&(t.status="success",t.response=a,o.onSuccess(a,t,s.value),o.onChange(t,s.value))},d=a=>{re(a.uid)&&(a.uid=G());const i={name:a.name,percentage:0,status:"ready",size:a.size,raw:a,uid:a.uid};if(o.listType==="picture-card"||o.listType==="picture")try{i.url=URL.createObjectURL(a)}catch(t){Te(le,t.message),o.onError(t,i,s.value)}s.value=[...s.value,i],o.onChange(i,s.value)},k=async a=>{const i=a instanceof File?n(a):a;i||J(le,"file to be removed not found");const t=u=>{c(u);const v=s.value;v.splice(v.indexOf(u),1),o.onRemove(u,v),ft(u)};o.beforeRemove?await o.beforeRemove(i,s.value)!==!1&&t(i):t(i)};function m(){s.value.filter(({status:a})=>a==="ready").forEach(({raw:a})=>{var i;return a&&((i=r.value)==null?void 0:i.upload(a))})}return x(()=>o.listType,a=>{a!=="picture-card"&&a!=="picture"||(s.value=s.value.map(i=>{const{raw:t,url:u}=i;if(!u&&t)try{i.url=URL.createObjectURL(t)}catch(v){o.onError(v,i,s.value)}return i}))}),x(s,a=>{for(const i of a)i.uid||(i.uid=G()),i.status||(i.status="success")},{immediate:!0,deep:!0}),{uploadFiles:s,abort:c,clearFiles:p,handleError:f,handleProgress:w,handleStart:d,handleSuccess:$,handleRemove:k,submit:m}},vt=S({name:"ElUpload"}),yt=S({...vt,props:Ve,setup(o,{expose:r}){const s=o,n=Oe(),c=N(),p=X(),{abort:f,submit:w,clearFiles:$,uploadFiles:d,handleStart:k,handleError:m,handleRemove:a,handleSuccess:i,handleProgress:t}=mt(s,p),u=ee(()=>s.listType==="picture-card"),v=ee(()=>({...s,fileList:d.value,onStart:k,onProgress:t,onSuccess:i,onError:m,onRemove:a}));return De(()=>{d.value.forEach(({url:l})=>{l?.startsWith("blob:")&&URL.revokeObjectURL(l)})}),je(de,{accept:Be(s,"accept")}),r({abort:f,submit:w,clearFiles:$,handleStart:k,handleRemove:a}),(l,F)=>(b(),L("div",null,[e(u)&&l.showFileList?(b(),P(oe,{key:0,disabled:e(c),"list-type":l.listType,files:e(d),"handle-preview":l.onPreview,onRemove:e(a)},te({append:R(()=>[C(ne,se({ref_key:"uploadRef",ref:p},e(v)),{default:R(()=>[e(n).trigger?_(l.$slots,"trigger",{key:0}):h("v-if",!0),!e(n).trigger&&e(n).default?_(l.$slots,"default",{key:1}):h("v-if",!0)]),_:3},16)]),_:2},[l.$slots.file?{name:"default",fn:R(({file:U})=>[_(l.$slots,"file",{file:U})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):h("v-if",!0),!e(u)||e(u)&&!l.showFileList?(b(),P(ne,se({key:1,ref_key:"uploadRef",ref:p},e(v)),{default:R(()=>[e(n).trigger?_(l.$slots,"trigger",{key:0}):h("v-if",!0),!e(n).trigger&&e(n).default?_(l.$slots,"default",{key:1}):h("v-if",!0)]),_:3},16)):h("v-if",!0),l.$slots.trigger?_(l.$slots,"default",{key:2}):h("v-if",!0),_(l.$slots,"tip"),!e(u)&&l.showFileList?(b(),P(oe,{key:3,disabled:e(c),"list-type":l.listType,files:e(d),"handle-preview":l.onPreview,onRemove:e(a)},te({_:2},[l.$slots.file?{name:"default",fn:R(({file:U})=>[_(l.$slots,"file",{file:U})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):h("v-if",!0)]))}});var gt=H(yt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const Et=qe(gt);export{Et as E};