import{aa as Q,aB as ue,bm as de,g as H,a5 as y,a9 as W,bn as E,h as S,aH as ke,j as N,bo as A,y as ce,o as h,c as U,w as C,l as L,G as $e,H as Ee,p as g,n as e,a3 as pe,r as R,s as b,m as q,aL as D,a as F,ah as O,bp as we,t as Y,a1 as Re,bq as Ce,br as Pe,ak as _e,bs as Fe,bt as Le,b1 as Ue,v as M,a4 as Se,a0 as G,bu as Z,Q as x,bv as Te,bw as Oe,bx as De,D as ee,aE as Be,k as te,$ as je,an as qe,b9 as Ne,by as se,bz as ae,x as He}from"./index-4338fe84.js";import{E as Ae}from"./el-progress-eaa77afd.js";import{i as Me}from"./isEqual-cf808b44.js";const fe=Symbol("uploadContextKey"),Ke="ElUpload";class ze extends Error{constructor(r,t,i,c){super(r),this.name="UploadAjaxError",this.status=t,this.method=i,this.url=c}}function oe(a,r,t){let i;return t.response?i=`${t.response.error||t.response}`:t.responseText?i=`${t.responseText}`:i=`fail to ${r.method} ${a} ${t.status}`,new ze(i,t.status,r.method,a)}function Ie(a){const r=a.responseText||a.response;if(!r)return r;try{return JSON.parse(r)}catch{return r}}const Ve=a=>{typeof XMLHttpRequest>"u"&&Q(Ke,"XMLHttpRequest is undefined");const r=new XMLHttpRequest,t=a.action;r.upload&&r.upload.addEventListener("progress",v=>{const f=v;f.percent=v.total>0?v.loaded/v.total*100:0,a.onProgress(f)});const i=new FormData;if(a.data)for(const[v,f]of Object.entries(a.data))ue(f)&&f.length?i.append(v,...f):i.append(v,f);i.append(a.filename,a.file,a.file.name),r.addEventListener("error",()=>{a.onError(oe(t,a,r))}),r.addEventListener("load",()=>{if(r.status<200||r.status>=300)return a.onError(oe(t,a,r));a.onSuccess(Ie(r))}),r.open(a.method,t,!0),a.withCredentials&&"withCredentials"in r&&(r.withCredentials=!0);const c=a.headers||{};if(c instanceof Headers)c.forEach((v,f)=>r.setRequestHeader(f,v));else for(const[v,f]of Object.entries(c))de(f)||r.setRequestHeader(v,String(f));return r.send(i),r},me=["text","picture","picture-card"];let Xe=1;const J=()=>Date.now()+Xe++,ve=H({action:{type:String,default:"#"},headers:{type:y(Object)},method:{type:String,default:"post"},data:{type:y([Object,Function,Promise]),default:()=>W({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:y(Array),default:()=>W([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:me,default:"text"},httpRequest:{type:y(Function),default:Ve},disabled:Boolean,limit:Number}),We=H({...ve,beforeUpload:{type:y(Function),default:E},beforeRemove:{type:y(Function)},onRemove:{type:y(Function),default:E},onChange:{type:y(Function),default:E},onPreview:{type:y(Function),default:E},onSuccess:{type:y(Function),default:E},onProgress:{type:y(Function),default:E},onError:{type:y(Function),default:E},onExceed:{type:y(Function),default:E}}),Ge=H({files:{type:y(Array),default:()=>W([])},disabled:{type:Boolean,default:!1},handlePreview:{type:y(Function),default:E},listType:{type:String,values:me,default:"text"}}),Je={remove:a=>!!a},Qe=["onKeydown"],Ye=["src"],Ze=["onClick"],xe=["title"],et=["onClick"],tt=["onClick"],st=S({name:"ElUploadList"}),at=S({...st,props:Ge,emits:Je,setup(a,{emit:r}){const{t}=ke(),i=N("upload"),c=N("icon"),v=N("list"),f=A(),w=ce(!1),k=p=>{r("remove",p)};return(p,$)=>(h(),U(Ue,{tag:"ul",class:g([e(i).b("list"),e(i).bm("list",p.listType),e(i).is("disabled",e(f))]),name:e(v).b()},{default:C(()=>[(h(!0),L($e,null,Ee(p.files,m=>(h(),L("li",{key:m.uid||m.name,class:g([e(i).be("list","item"),e(i).is(m.status),{focusing:w.value}]),tabindex:"0",onKeydown:pe(o=>!e(f)&&k(m),["delete"]),onFocus:$[0]||($[0]=o=>w.value=!0),onBlur:$[1]||($[1]=o=>w.value=!1),onClick:$[2]||($[2]=o=>w.value=!1)},[R(p.$slots,"default",{file:m},()=>[p.listType==="picture"||m.status!=="uploading"&&p.listType==="picture-card"?(h(),L("img",{key:0,class:g(e(i).be("list","item-thumbnail")),src:m.url,alt:""},null,10,Ye)):b("v-if",!0),m.status==="uploading"||p.listType!=="picture-card"?(h(),L("div",{key:1,class:g(e(i).be("list","item-info"))},[q("a",{class:g(e(i).be("list","item-name")),onClick:D(o=>p.handlePreview(m),["prevent"])},[F(e(O),{class:g(e(c).m("document"))},{default:C(()=>[F(e(we))]),_:1},8,["class"]),q("span",{class:g(e(i).be("list","item-file-name")),title:m.name},Y(m.name),11,xe)],10,Ze),m.status==="uploading"?(h(),U(e(Ae),{key:0,type:p.listType==="picture-card"?"circle":"line","stroke-width":p.listType==="picture-card"?6:2,percentage:Number(m.percentage),style:Re(p.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):b("v-if",!0)],2)):b("v-if",!0),q("label",{class:g(e(i).be("list","item-status-label"))},[p.listType==="text"?(h(),U(e(O),{key:0,class:g([e(c).m("upload-success"),e(c).m("circle-check")])},{default:C(()=>[F(e(Ce))]),_:1},8,["class"])):["picture-card","picture"].includes(p.listType)?(h(),U(e(O),{key:1,class:g([e(c).m("upload-success"),e(c).m("check")])},{default:C(()=>[F(e(Pe))]),_:1},8,["class"])):b("v-if",!0)],2),e(f)?b("v-if",!0):(h(),U(e(O),{key:2,class:g(e(c).m("close")),onClick:o=>k(m)},{default:C(()=>[F(e(_e))]),_:2},1032,["class","onClick"])),b(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),b(" This is a bug which needs to be fixed "),b(" TODO: Fix the incorrect navigation interaction "),e(f)?b("v-if",!0):(h(),L("i",{key:3,class:g(e(c).m("close-tip"))},Y(e(t)("el.upload.deleteTip")),3)),p.listType==="picture-card"?(h(),L("span",{key:4,class:g(e(i).be("list","item-actions"))},[q("span",{class:g(e(i).be("list","item-preview")),onClick:o=>p.handlePreview(m)},[F(e(O),{class:g(e(c).m("zoom-in"))},{default:C(()=>[F(e(Fe))]),_:1},8,["class"])],10,et),e(f)?b("v-if",!0):(h(),L("span",{key:0,class:g(e(i).be("list","item-delete")),onClick:o=>k(m)},[F(e(O),{class:g(e(c).m("delete"))},{default:C(()=>[F(e(Le))]),_:1},8,["class"])],10,tt))],2)):b("v-if",!0)])],42,Qe))),128)),R(p.$slots,"append")]),_:3},8,["class","name"]))}});var ne=M(at,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const ot=H({disabled:{type:Boolean,default:!1}}),nt={file:a=>ue(a)},lt=["onDrop","onDragover"],ye="ElUploadDrag",rt=S({name:ye}),it=S({...rt,props:ot,emits:nt,setup(a,{emit:r}){const t=Se(fe);t||Q(ye,"usage: <el-upload><el-upload-dragger /></el-upload>");const i=N("upload"),c=ce(!1),v=A(),f=k=>{if(v.value)return;c.value=!1,k.stopPropagation();const p=Array.from(k.dataTransfer.files),$=t.accept.value;if(!$){r("file",p);return}const m=p.filter(o=>{const{type:l,name:d}=o,s=d.includes(".")?`.${d.split(".").pop()}`:"",u=l.replace(/\/.*$/,"");return $.split(",").map(n=>n.trim()).filter(n=>n).some(n=>n.startsWith(".")?s===n:/\/\*$/.test(n)?u===n.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(n)?l===n:!1)});r("file",m)},w=()=>{v.value||(c.value=!0)};return(k,p)=>(h(),L("div",{class:g([e(i).b("dragger"),e(i).is("dragover",c.value)]),onDrop:D(f,["prevent"]),onDragover:D(w,["prevent"]),onDragleave:p[0]||(p[0]=D($=>c.value=!1,["prevent"]))},[R(k.$slots,"default")],42,lt))}});var ut=M(it,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const dt=H({...ve,beforeUpload:{type:y(Function),default:E},onRemove:{type:y(Function),default:E},onStart:{type:y(Function),default:E},onSuccess:{type:y(Function),default:E},onProgress:{type:y(Function),default:E},onError:{type:y(Function),default:E},onExceed:{type:y(Function),default:E}}),ct=["onKeydown"],pt=["name","multiple","accept"],ft=S({name:"ElUploadContent",inheritAttrs:!1}),mt=S({...ft,props:dt,setup(a,{expose:r}){const t=a,i=N("upload"),c=A(),v=G({}),f=G(),w=s=>{if(s.length===0)return;const{autoUpload:u,limit:n,fileList:P,multiple:_,onStart:B,onExceed:K}=t;if(n&&P.length+s.length>n){K(s,P);return}_||(s=s.slice(0,1));for(const z of s){const j=z;j.uid=J(),B(j),u&&k(j)}},k=async s=>{if(f.value.value="",!t.beforeUpload)return $(s);let u,n={};try{const _=t.data,B=t.beforeUpload(s);n=Z(t.data)?x(t.data):t.data,u=await B,Z(t.data)&&Me(_,n)&&(n=x(t.data))}catch{u=!1}if(u===!1){t.onRemove(s);return}let P=s;u instanceof Blob&&(u instanceof File?P=u:P=new File([u],s.name,{type:s.type})),$(Object.assign(P,{uid:s.uid}),n)},p=async(s,u)=>Oe(s)?s(u):s,$=async(s,u)=>{const{headers:n,data:P,method:_,withCredentials:B,name:K,action:z,onProgress:j,onSuccess:ge,onError:he,httpRequest:be}=t;try{u=await p(u??P,s)}catch{t.onRemove(s);return}const{uid:I}=s,V={headers:n||{},withCredentials:B,file:s,data:u,method:_,filename:K,action:z,onProgress:T=>{j(T,s)},onSuccess:T=>{ge(T,s),delete v.value[I]},onError:T=>{he(T,s),delete v.value[I]}},X=be(V);v.value[I]=X,X instanceof Promise&&X.then(V.onSuccess,V.onError)},m=s=>{const u=s.target.files;u&&w(Array.from(u))},o=()=>{c.value||(f.value.value="",f.value.click())},l=()=>{o()};return r({abort:s=>{Te(v.value).filter(s?([n])=>String(s.uid)===n:()=>!0).forEach(([n,P])=>{P instanceof XMLHttpRequest&&P.abort(),delete v.value[n]})},upload:k}),(s,u)=>(h(),L("div",{class:g([e(i).b(),e(i).m(s.listType),e(i).is("drag",s.drag)]),tabindex:"0",onClick:o,onKeydown:pe(D(l,["self"]),["enter","space"])},[s.drag?(h(),U(ut,{key:0,disabled:e(c),onFile:w},{default:C(()=>[R(s.$slots,"default")]),_:3},8,["disabled"])):R(s.$slots,"default",{key:1}),q("input",{ref_key:"inputRef",ref:f,class:g(e(i).e("input")),name:s.name,multiple:s.multiple,accept:s.accept,type:"file",onChange:m,onClick:u[0]||(u[0]=D(()=>{},["stop"]))},null,42,pt)],42,ct))}});var le=M(mt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const re="ElUpload",ie=a=>{var r;(r=a.url)!=null&&r.startsWith("blob:")&&URL.revokeObjectURL(a.url)},vt=(a,r)=>{const t=De(a,"fileList",void 0,{passive:!0}),i=o=>t.value.find(l=>l.uid===o.uid);function c(o){var l;(l=r.value)==null||l.abort(o)}function v(o=["ready","uploading","success","fail"]){t.value=t.value.filter(l=>!o.includes(l.status))}const f=(o,l)=>{const d=i(l);d&&(console.error(o),d.status="fail",t.value.splice(t.value.indexOf(d),1),a.onError(o,d,t.value),a.onChange(d,t.value))},w=(o,l)=>{const d=i(l);d&&(a.onProgress(o,d,t.value),d.status="uploading",d.percentage=Math.round(o.percent))},k=(o,l)=>{const d=i(l);d&&(d.status="success",d.response=o,a.onSuccess(o,d,t.value),a.onChange(d,t.value))},p=o=>{de(o.uid)&&(o.uid=J());const l={name:o.name,percentage:0,status:"ready",size:o.size,raw:o,uid:o.uid};if(a.listType==="picture-card"||a.listType==="picture")try{l.url=URL.createObjectURL(o)}catch(d){Be(re,d.message),a.onError(d,l,t.value)}t.value=[...t.value,l],a.onChange(l,t.value)},$=async o=>{const l=o instanceof File?i(o):o;l||Q(re,"file to be removed not found");const d=s=>{c(s);const u=t.value;u.splice(u.indexOf(s),1),a.onRemove(s,u),ie(s)};a.beforeRemove?await a.beforeRemove(l,t.value)!==!1&&d(l):d(l)};function m(){t.value.filter(({status:o})=>o==="ready").forEach(({raw:o})=>{var l;return o&&((l=r.value)==null?void 0:l.upload(o))})}return ee(()=>a.listType,o=>{o!=="picture-card"&&o!=="picture"||(t.value=t.value.map(l=>{const{raw:d,url:s}=l;if(!s&&d)try{l.url=URL.createObjectURL(d)}catch(u){a.onError(u,l,t.value)}return l}))}),ee(t,o=>{for(const l of o)l.uid||(l.uid=J()),l.status||(l.status="success")},{immediate:!0,deep:!0}),{uploadFiles:t,abort:c,clearFiles:v,handleError:f,handleProgress:w,handleStart:p,handleSuccess:k,handleRemove:$,submit:m,revokeFileObjectURL:ie}},yt=S({name:"ElUpload"}),gt=S({...yt,props:We,setup(a,{expose:r}){const t=a,i=A(),c=G(),{abort:v,submit:f,clearFiles:w,uploadFiles:k,handleStart:p,handleError:$,handleRemove:m,handleSuccess:o,handleProgress:l,revokeFileObjectURL:d}=vt(t,c),s=te(()=>t.listType==="picture-card"),u=te(()=>({...t,fileList:k.value,onStart:p,onProgress:l,onSuccess:o,onError:$,onRemove:m}));return je(()=>{k.value.forEach(d)}),qe(fe,{accept:Ne(t,"accept")}),r({abort:v,submit:f,clearFiles:w,handleStart:p,handleRemove:m}),(n,P)=>(h(),L("div",null,[e(s)&&n.showFileList?(h(),U(ne,{key:0,disabled:e(i),"list-type":n.listType,files:e(k),"handle-preview":n.onPreview,onRemove:e(m)},se({append:C(()=>[F(le,ae({ref_key:"uploadRef",ref:c},e(u)),{default:C(()=>[n.$slots.trigger?R(n.$slots,"trigger",{key:0}):b("v-if",!0),!n.$slots.trigger&&n.$slots.default?R(n.$slots,"default",{key:1}):b("v-if",!0)]),_:3},16)]),_:2},[n.$slots.file?{name:"default",fn:C(({file:_})=>[R(n.$slots,"file",{file:_})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):b("v-if",!0),!e(s)||e(s)&&!n.showFileList?(h(),U(le,ae({key:1,ref_key:"uploadRef",ref:c},e(u)),{default:C(()=>[n.$slots.trigger?R(n.$slots,"trigger",{key:0}):b("v-if",!0),!n.$slots.trigger&&n.$slots.default?R(n.$slots,"default",{key:1}):b("v-if",!0)]),_:3},16)):b("v-if",!0),n.$slots.trigger?R(n.$slots,"default",{key:2}):b("v-if",!0),R(n.$slots,"tip"),!e(s)&&n.showFileList?(h(),U(ne,{key:3,disabled:e(i),"list-type":n.listType,files:e(k),"handle-preview":n.onPreview,onRemove:e(m)},se({_:2},[n.$slots.file?{name:"default",fn:C(({file:_})=>[R(n.$slots,"file",{file:_})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):b("v-if",!0)]))}});var ht=M(gt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const Et=He(ht);export{Et as E};
