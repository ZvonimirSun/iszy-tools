import{ag as Y,aH as ue,bq as de,l as A,ac as v,af as W,br as k,n as S,aN as ke,p as N,bs as K,D as ce,q as J,o as b,e as L,w as C,r as _,L as $e,M as Ee,x as y,v as s,aa as pe,t as w,z as h,s as q,aR as D,f as U,an as O,bt as Re,A as Z,a8 as we,bu as Ce,bv as Pe,aq as Fe,bw as Ue,bx as _e,b4 as Le,B as M,ab as Se,a7 as G,by as x,U as ee,bz as Te,bA as Oe,bB as De,J as te,aK as Be,a6 as je,at as qe,bd as Ne,bC as se,bD as ae,C as Ae}from"./index.js";import{E as Ke}from"./el-progress-00563754.js";import{i as Me}from"./isEqual-62aeb03d.js";const fe=Symbol("uploadContextKey"),He="ElUpload";class ze extends Error{constructor(r,e,p,u){super(r),this.name="UploadAjaxError",this.status=e,this.method=p,this.url=u}}function oe(o,r,e){let p;return e.response?p=`${e.response.error||e.response}`:e.responseText?p=`${e.responseText}`:p=`fail to ${r.method} ${o} ${e.status}`,new ze(p,e.status,r.method,o)}function Ie(o){const r=o.responseText||o.response;if(!r)return r;try{return JSON.parse(r)}catch{return r}}const Ve=o=>{typeof XMLHttpRequest>"u"&&Y(He,"XMLHttpRequest is undefined");const r=new XMLHttpRequest,e=o.action;r.upload&&r.upload.addEventListener("progress",d=>{const m=d;m.percent=d.total>0?d.loaded/d.total*100:0,o.onProgress(m)});const p=new FormData;if(o.data)for(const[d,m]of Object.entries(o.data))ue(m)&&m.length?p.append(d,...m):p.append(d,m);p.append(o.filename,o.file,o.file.name),r.addEventListener("error",()=>{o.onError(oe(e,o,r))}),r.addEventListener("load",()=>{if(r.status<200||r.status>=300)return o.onError(oe(e,o,r));o.onSuccess(Ie(r))}),r.open(o.method,e,!0),o.withCredentials&&"withCredentials"in r&&(r.withCredentials=!0);const u=o.headers||{};if(u instanceof Headers)u.forEach((d,m)=>r.setRequestHeader(m,d));else for(const[d,m]of Object.entries(u))de(m)||r.setRequestHeader(d,String(m));return r.send(p),r},me=["text","picture","picture-card"];let Xe=1;const Q=()=>Date.now()+Xe++,ve=A({action:{type:String,default:"#"},headers:{type:v(Object)},method:{type:String,default:"post"},data:{type:v([Object,Function,Promise]),default:()=>W({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},fileList:{type:v(Array),default:()=>W([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:me,default:"text"},httpRequest:{type:v(Function),default:Ve},disabled:Boolean,limit:Number}),We=A({...ve,beforeUpload:{type:v(Function),default:k},beforeRemove:{type:v(Function)},onRemove:{type:v(Function),default:k},onChange:{type:v(Function),default:k},onPreview:{type:v(Function),default:k},onSuccess:{type:v(Function),default:k},onProgress:{type:v(Function),default:k},onError:{type:v(Function),default:k},onExceed:{type:v(Function),default:k}}),Je=A({files:{type:v(Array),default:()=>W([])},disabled:{type:Boolean,default:!1},handlePreview:{type:v(Function),default:k},listType:{type:String,values:me,default:"text"}}),Ge={remove:o=>!!o},Qe=["onKeydown"],Ye=["src"],Ze=["onClick"],xe=["title"],et=["onClick"],tt=["onClick"],st=S({name:"ElUploadList"}),at=S({...st,props:Je,emits:Ge,setup(o,{emit:r}){const e=o,{t:p}=ke(),u=N("upload"),d=N("icon"),m=N("list"),R=K(),g=ce(!1),$=J(()=>[u.b("list"),u.bm("list",e.listType),u.is("disabled",e.disabled)]),E=f=>{r("remove",f)};return(f,n)=>(b(),L(Le,{tag:"ul",class:y(s($)),name:s(m).b()},{default:C(()=>[(b(!0),_($e,null,Ee(f.files,t=>(b(),_("li",{key:t.uid||t.name,class:y([s(u).be("list","item"),s(u).is(t.status),{focusing:g.value}]),tabindex:"0",onKeydown:pe(i=>!s(R)&&E(t),["delete"]),onFocus:n[0]||(n[0]=i=>g.value=!0),onBlur:n[1]||(n[1]=i=>g.value=!1),onClick:n[2]||(n[2]=i=>g.value=!1)},[w(f.$slots,"default",{file:t},()=>[f.listType==="picture"||t.status!=="uploading"&&f.listType==="picture-card"?(b(),_("img",{key:0,class:y(s(u).be("list","item-thumbnail")),src:t.url,alt:""},null,10,Ye)):h("v-if",!0),t.status==="uploading"||f.listType!=="picture-card"?(b(),_("div",{key:1,class:y(s(u).be("list","item-info"))},[q("a",{class:y(s(u).be("list","item-name")),onClick:D(i=>f.handlePreview(t),["prevent"])},[U(s(O),{class:y(s(d).m("document"))},{default:C(()=>[U(s(Re))]),_:1},8,["class"]),q("span",{class:y(s(u).be("list","item-file-name")),title:t.name},Z(t.name),11,xe)],10,Ze),t.status==="uploading"?(b(),L(s(Ke),{key:0,type:f.listType==="picture-card"?"circle":"line","stroke-width":f.listType==="picture-card"?6:2,percentage:Number(t.percentage),style:we(f.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):h("v-if",!0)],2)):h("v-if",!0),q("label",{class:y(s(u).be("list","item-status-label"))},[f.listType==="text"?(b(),L(s(O),{key:0,class:y([s(d).m("upload-success"),s(d).m("circle-check")])},{default:C(()=>[U(s(Ce))]),_:1},8,["class"])):["picture-card","picture"].includes(f.listType)?(b(),L(s(O),{key:1,class:y([s(d).m("upload-success"),s(d).m("check")])},{default:C(()=>[U(s(Pe))]),_:1},8,["class"])):h("v-if",!0)],2),s(R)?h("v-if",!0):(b(),L(s(O),{key:2,class:y(s(d).m("close")),onClick:i=>E(t)},{default:C(()=>[U(s(Fe))]),_:2},1032,["class","onClick"])),h(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),h(" This is a bug which needs to be fixed "),h(" TODO: Fix the incorrect navigation interaction "),s(R)?h("v-if",!0):(b(),_("i",{key:3,class:y(s(d).m("close-tip"))},Z(s(p)("el.upload.deleteTip")),3)),f.listType==="picture-card"?(b(),_("span",{key:4,class:y(s(u).be("list","item-actions"))},[q("span",{class:y(s(u).be("list","item-preview")),onClick:i=>f.handlePreview(t)},[U(s(O),{class:y(s(d).m("zoom-in"))},{default:C(()=>[U(s(Ue))]),_:1},8,["class"])],10,et),s(R)?h("v-if",!0):(b(),_("span",{key:0,class:y(s(u).be("list","item-delete")),onClick:i=>E(t)},[U(s(O),{class:y(s(d).m("delete"))},{default:C(()=>[U(s(_e))]),_:1},8,["class"])],10,tt))],2)):h("v-if",!0)])],42,Qe))),128)),w(f.$slots,"append")]),_:3},8,["class","name"]))}});var ne=M(at,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const ot=A({disabled:{type:Boolean,default:!1}}),nt={file:o=>ue(o)},lt=["onDrop","onDragover"],ye="ElUploadDrag",rt=S({name:ye}),it=S({...rt,props:ot,emits:nt,setup(o,{emit:r}){const e=Se(fe);e||Y(ye,"usage: <el-upload><el-upload-dragger /></el-upload>");const p=N("upload"),u=ce(!1),d=K(),m=g=>{if(d.value)return;u.value=!1,g.stopPropagation();const $=Array.from(g.dataTransfer.files),E=e.accept.value;if(!E){r("file",$);return}const f=$.filter(n=>{const{type:t,name:i}=n,a=i.includes(".")?`.${i.split(".").pop()}`:"",c=t.replace(/\/.*$/,"");return E.split(",").map(l=>l.trim()).filter(l=>l).some(l=>l.startsWith(".")?a===l:/\/\*$/.test(l)?c===l.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(l)?t===l:!1)});r("file",f)},R=()=>{d.value||(u.value=!0)};return(g,$)=>(b(),_("div",{class:y([s(p).b("dragger"),s(p).is("dragover",u.value)]),onDrop:D(m,["prevent"]),onDragover:D(R,["prevent"]),onDragleave:$[0]||($[0]=D(E=>u.value=!1,["prevent"]))},[w(g.$slots,"default")],42,lt))}});var ut=M(it,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const dt=A({...ve,beforeUpload:{type:v(Function),default:k},onRemove:{type:v(Function),default:k},onStart:{type:v(Function),default:k},onSuccess:{type:v(Function),default:k},onProgress:{type:v(Function),default:k},onError:{type:v(Function),default:k},onExceed:{type:v(Function),default:k}}),ct=["onKeydown"],pt=["name","multiple","accept"],ft=S({name:"ElUploadContent",inheritAttrs:!1}),mt=S({...ft,props:dt,setup(o,{expose:r}){const e=o,p=N("upload"),u=K(),d=G({}),m=G(),R=a=>{if(a.length===0)return;const{autoUpload:c,limit:l,fileList:P,multiple:F,onStart:B,onExceed:H}=e;if(l&&P.length+a.length>l){H(a,P);return}F||(a=a.slice(0,1));for(const z of a){const j=z;j.uid=Q(),B(j),c&&g(j)}},g=async a=>{if(m.value.value="",!e.beforeUpload)return E(a);let c,l={};try{const F=e.data,B=e.beforeUpload(a);l=x(e.data)?ee(e.data):e.data,c=await B,x(e.data)&&Me(F,l)&&(l=ee(e.data))}catch{c=!1}if(c===!1){e.onRemove(a);return}let P=a;c instanceof Blob&&(c instanceof File?P=c:P=new File([c],a.name,{type:a.type})),E(Object.assign(P,{uid:a.uid}),l)},$=async(a,c)=>Oe(a)?a(c):a,E=async(a,c)=>{const{headers:l,data:P,method:F,withCredentials:B,name:H,action:z,onProgress:j,onSuccess:ge,onError:be,httpRequest:he}=e;try{c=await $(c??P,a)}catch{e.onRemove(a);return}const{uid:I}=a,V={headers:l||{},withCredentials:B,file:a,data:c,method:F,filename:H,action:z,onProgress:T=>{j(T,a)},onSuccess:T=>{ge(T,a),delete d.value[I]},onError:T=>{be(T,a),delete d.value[I]}},X=he(V);d.value[I]=X,X instanceof Promise&&X.then(V.onSuccess,V.onError)},f=a=>{const c=a.target.files;c&&R(Array.from(c))},n=()=>{u.value||(m.value.value="",m.value.click())},t=()=>{n()};return r({abort:a=>{Te(d.value).filter(a?([l])=>String(a.uid)===l:()=>!0).forEach(([l,P])=>{P instanceof XMLHttpRequest&&P.abort(),delete d.value[l]})},upload:g}),(a,c)=>(b(),_("div",{class:y([s(p).b(),s(p).m(a.listType),s(p).is("drag",a.drag)]),tabindex:"0",onClick:n,onKeydown:pe(D(t,["self"]),["enter","space"])},[a.drag?(b(),L(ut,{key:0,disabled:s(u),onFile:R},{default:C(()=>[w(a.$slots,"default")]),_:3},8,["disabled"])):w(a.$slots,"default",{key:1}),q("input",{ref_key:"inputRef",ref:m,class:y(s(p).e("input")),name:a.name,multiple:a.multiple,accept:a.accept,type:"file",onChange:f,onClick:c[0]||(c[0]=D(()=>{},["stop"]))},null,42,pt)],42,ct))}});var le=M(mt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const re="ElUpload",ie=o=>{var r;(r=o.url)!=null&&r.startsWith("blob:")&&URL.revokeObjectURL(o.url)},vt=(o,r)=>{const e=De(o,"fileList",void 0,{passive:!0}),p=n=>e.value.find(t=>t.uid===n.uid);function u(n){var t;(t=r.value)==null||t.abort(n)}function d(n=["ready","uploading","success","fail"]){e.value=e.value.filter(t=>!n.includes(t.status))}const m=(n,t)=>{const i=p(t);i&&(console.error(n),i.status="fail",e.value.splice(e.value.indexOf(i),1),o.onError(n,i,e.value),o.onChange(i,e.value))},R=(n,t)=>{const i=p(t);i&&(o.onProgress(n,i,e.value),i.status="uploading",i.percentage=Math.round(n.percent))},g=(n,t)=>{const i=p(t);i&&(i.status="success",i.response=n,o.onSuccess(n,i,e.value),o.onChange(i,e.value))},$=n=>{de(n.uid)&&(n.uid=Q());const t={name:n.name,percentage:0,status:"ready",size:n.size,raw:n,uid:n.uid};if(o.listType==="picture-card"||o.listType==="picture")try{t.url=URL.createObjectURL(n)}catch(i){Be(re,i.message),o.onError(i,t,e.value)}e.value=[...e.value,t],o.onChange(t,e.value)},E=async n=>{const t=n instanceof File?p(n):n;t||Y(re,"file to be removed not found");const i=a=>{u(a);const c=e.value;c.splice(c.indexOf(a),1),o.onRemove(a,c),ie(a)};o.beforeRemove?await o.beforeRemove(t,e.value)!==!1&&i(t):i(t)};function f(){e.value.filter(({status:n})=>n==="ready").forEach(({raw:n})=>{var t;return n&&((t=r.value)==null?void 0:t.upload(n))})}return te(()=>o.listType,n=>{n!=="picture-card"&&n!=="picture"||(e.value=e.value.map(t=>{const{raw:i,url:a}=t;if(!a&&i)try{t.url=URL.createObjectURL(i)}catch(c){o.onError(c,t,e.value)}return t}))}),te(e,n=>{for(const t of n)t.uid||(t.uid=Q()),t.status||(t.status="success")},{immediate:!0,deep:!0}),{uploadFiles:e,abort:u,clearFiles:d,handleError:m,handleProgress:R,handleStart:$,handleSuccess:g,handleRemove:E,submit:f,revokeFileObjectURL:ie}},yt=S({name:"ElUpload"}),gt=S({...yt,props:We,setup(o,{expose:r}){const e=o,p=K(),u=G(),{abort:d,submit:m,clearFiles:R,uploadFiles:g,handleStart:$,handleError:E,handleRemove:f,handleSuccess:n,handleProgress:t,revokeFileObjectURL:i}=vt(e,u),a=J(()=>e.listType==="picture-card"),c=J(()=>({...e,fileList:g.value,onStart:$,onProgress:t,onSuccess:n,onError:E,onRemove:f}));return je(()=>{g.value.forEach(i)}),qe(fe,{accept:Ne(e,"accept")}),r({abort:d,submit:m,clearFiles:R,handleStart:$,handleRemove:f}),(l,P)=>(b(),_("div",null,[s(a)&&l.showFileList?(b(),L(ne,{key:0,disabled:s(p),"list-type":l.listType,files:s(g),"handle-preview":l.onPreview,onRemove:s(f)},se({append:C(()=>[U(le,ae({ref_key:"uploadRef",ref:u},s(c)),{default:C(()=>[l.$slots.trigger?w(l.$slots,"trigger",{key:0}):h("v-if",!0),!l.$slots.trigger&&l.$slots.default?w(l.$slots,"default",{key:1}):h("v-if",!0)]),_:3},16)]),_:2},[l.$slots.file?{name:"default",fn:C(({file:F})=>[w(l.$slots,"file",{file:F})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):h("v-if",!0),!s(a)||s(a)&&!l.showFileList?(b(),L(le,ae({key:1,ref_key:"uploadRef",ref:u},s(c)),{default:C(()=>[l.$slots.trigger?w(l.$slots,"trigger",{key:0}):h("v-if",!0),!l.$slots.trigger&&l.$slots.default?w(l.$slots,"default",{key:1}):h("v-if",!0)]),_:3},16)):h("v-if",!0),l.$slots.trigger?w(l.$slots,"default",{key:2}):h("v-if",!0),w(l.$slots,"tip"),!s(a)&&l.showFileList?(b(),L(ne,{key:3,disabled:s(p),"list-type":l.listType,files:s(g),"handle-preview":l.onPreview,onRemove:s(f)},se({_:2},[l.$slots.file?{name:"default",fn:C(({file:F})=>[w(l.$slots,"file",{file:F})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):h("v-if",!0)]))}});var bt=M(gt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const Et=Ae(bt);export{Et as E};
