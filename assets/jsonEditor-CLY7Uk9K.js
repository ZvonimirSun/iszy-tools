import{bm as Y,P as vt,a_ as pt,bn as gt,aW as N,ax as V,bo as J,aw as ht,Q as yt,k as Ct,R as $,T as _t,n as Dt,E as C,r as _,ai as Q,K as p,an as G,x as u,F as f,t as K,v as L,w as h,G as $t,Y as F,L as wt,N as w,W as St,X as Z,Z as xt,H as q,$ as It,a0 as kt}from"./index-i7h8R5B5.js";import{v as Et}from"./el-loading--YE98CZ6.js";import{E as Lt}from"./el-dialog-C-cwTK4j.js";import{E as jt}from"./el-space-CRZMmtck.js";import{V as O}from"./VanillaJsonEditor-C0wWvBsU.js";import{u as tt}from"./useComponentRef-CGpqIaAs.js";import{d as S}from"./dayjs.min-C_Ii8SE7.js";import{P as Mt}from"./Router-G6dV55QZ.js";import"./index-Dbark8aO.js";import"./isUndefined-DCTLXrZ8.js";import"./el-popper-BF_vNFzV.js";import"./createFile-B7IzQEOg.js";import"./formatBytes-aAslYXQD.js";import"./jse-theme-dark-D85GGQDq.js";import"./_baseEach-Dt3hWqM4.js";import"./_castFunction-96IMNxgN.js";import"./_baseIteratee-Dek1li4U.js";import"./map-DJPV1x7C.js";import"./toFinite-CXcbJcAU.js";import"./index-CuikOomq.js";import"./index-Vcq4gwWv.js";import"./memoize-one.esm-BdPwpGay.js";import"./index-DzUXqSkD.js";import"./range-B0EuuZ8t.js";import"./castArray-DmqlXQV8.js";function bt(e,n,a){return e===e&&(a!==void 0&&(e=e<=a?e:a),n!==void 0&&(e=e>=n?e:n)),e}function Pt(e,n,a){return a===void 0&&(a=n,n=void 0),a!==void 0&&(a=Y(a),a=a===a?a:0),n!==void 0&&(n=Y(n),n=n===n?n:0),bt(Y(e),n,a)}function et(e,n){e=e||32,n=n||"ABCDEFGHJKMNPQRSTWXYZabcdefghijkmnprstwxyz2345678";const a=n.length;let r="";for(let c=0;c<e;c++)r+=n.charAt(Math.floor(Math.random()*a));return r}const Yt=new gt;let j={},at=!1;const nt=vt("jsonEditor",{persist:!0,state:()=>({leftId:null,rightId:null,splitterValue:.5,fullStatus:"",$_data:{}}),getters:{dataList:e=>n=>{const a=[];for(const r in e.$_data)a.push({_id:r,name:e.$_data[r].name,updated:S(e.$_data[r].updated).format("YYYY-MM-DD HH:mm")});return n?a.filter(r=>r.name.includes(n)):a},data:e=>n=>e.$_data[n]?{...e.$_data[n],updated:S(e.$_data[n].updated).format("YYYY-MM-DD HH:mm")}:null,leftData:e=>e.leftId&&e.$_data[e.leftId]?{...e.$_data[e.leftId],updated:S(e.$_data[e.leftId].updated).format("YYYY-MM-DD HH:mm")}:null,rightData:e=>e.rightId&&e.$_data[e.rightId]?{...e.$_data[e.rightId],updated:S(e.$_data[e.rightId].updated).format("YYYY-MM-DD HH:mm")}:null,syncCloud:()=>ht().logged&&yt().modules.jsonEditor.syncCloud},actions:{setSplitter(e=.5){this.splitterValue=Pt(e,0,1)},setFullStatus(e){e==="left"||e==="right"?this.fullStatus=e:this.fullStatus=""},replaceState(e=[]){const n={};for(const a of e)n[a.key]={name:a.name,content:{}},a.text!=null?n[a.key].content.text=a.text:a.json!=null&&(n[a.key].content.json=a.json),n[a.key].updated=S(a.updatedAt).format();this.$_data=n},async getSyncData(){try{const e=(await N.get(`${V.apiBaseUrl}/tools/jsoneditor`)).data;e.success?this.replaceState(e.data):console.log(e.message)}catch(e){console.log(e.message)}},syncData:pt(({id:e,data:n}={})=>{if(navigator.onLine)Yt.enqueue(N.post(`${V.apiBaseUrl}/tools/jsoneditor/${e}`,n));else if(j[e]=n,!at){let a=function(){window.removeEventListener("online",a);for(const r in j)nt().syncData({id:r,data:j[r]});j={}};at=!0,window.addEventListener("online",a)}},500),saveData({left:e,right:n,id:a,content:r,name:c}={}){if(this.syncCloud&&(a=a||et(6),r!=null||c!=null)){const d={name:c||(this.$_data[a]||{}).name||`文档-${a}`};typeof r=="string"?d.text=r:typeof r=="object"&&(d.json=J(r)),this.syncData({id:a,data:d})}typeof r<"u"?(a=a||et(6),this.$_data[a]=this.$_data[a]||{},this.$_data[a].name=c||this.$_data[a].name||`文档-${a}`,typeof r=="string"?this.$_data[a].content={text:r}:this.$_data[a].content={json:J(r)},this.$_data[a].updated=S().format(),e&&(this.leftId=a),n&&(this.rightId=a)):a&&this.$_data[a]?(e&&(this.leftId=a),n&&(this.rightId=a),this.$_data[a].name=c||this.$_data[a].name):(e&&(this.leftId=null),n&&(this.rightId=null))},async deleteData({id:e}={}){if(this.syncCloud)try{const n=(await N.delete(`${V.apiBaseUrl}/tools/jsoneditor/${e}`)).data;n.success?(this.leftId===e&&(this.leftId=null),this.rightId===e&&(this.rightId=null),this.$_data[e]&&delete this.$_data[e]):console.log(n.message)}catch(n){console.log(n)}else this.leftId===e&&(this.leftId=null),this.rightId===e&&(this.rightId=null),this.$_data[e]&&delete this.$_data[e]}}}),Nt={"element-loading-text":"同步中...",class:"loadingPanel"},Vt={class:"dragIcon"},Ft={key:0,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},Bt={key:1,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-left",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},Ht={key:2,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"ellipsis-vertical",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 512"},zt={class:"data-list"},Rt=["onClick"],Xt={class:"data-list-item-info"},Tt={class:"data-list-item-info-title"},Ut={class:"data-list-item-info-description"},Wt={class:"data-list-item-actions"},At={class:"dialog-footer"},Jt=Ct({__name:"jsonEditor",setup(e){const n=tt(),a=tt(),r=$(),c=$(!0),d=$(""),l=nt(),lt={array:[1,2,3],boolean:!0,color:"gold",null:null,number:123,object:{a:"b",c:"d"},string:"Hello World"};_t(()=>{ot()});async function ot(){var o,t,s,m,v;l.syncCloud&&await l.getSyncData(),c.value=!1,l.leftData&&l.leftData.content?l.leftData.content.json?(o=n.value)==null||o.set(l.leftData.content.json):l.leftData.content.text&&((t=n.value)==null||t.set(l.leftData.content.text)):(s=n.value)==null||s.set(lt),l.rightData&&l.rightData.content&&(l.rightData.content.json?(m=a.value)==null||m.set(l.rightData.content.json):l.rightData.content.text&&((v=a.value)==null||v.set(l.rightData.content.text))),d.value=l.fullStatus}function B(o){var t,s;l.saveData({[o]:!0}),o==="left"?(t=n.value)==null||t.set({}):o==="right"&&((s=a.value)==null||s.set({}))}function H(o,t){let s=null;o==="left"?s=l.leftId:o==="right"&&(s=l.rightId),s&&l.saveData({id:s,name:t})}function z(o,t){let s=null;o==="left"?s=l.leftId:o==="right"&&(s=l.rightId);const m={[o]:!0,content:t};s&&(m.id=s),l.saveData(m)}const D=$(!1),y=$(""),x=$("");let M="";const st=Dt(()=>l.dataList(x.value));function R(o){y.value="",x.value="",M=o,D.value=!0}function it(){var o,t,s,m;if(y.value){const v=l.data(y.value);if(v&&v.content){const g=v.content;M==="left"?(l.saveData({left:!0,id:y.value}),g.json?(o=n.value)==null||o.set(g.json):g.text&&((t=n.value)==null||t.set(g.text))):M==="right"&&(l.saveData({right:!0,id:y.value}),g.json?(s=a.value)==null||s.set(g.json):g.text&&((m=a.value)==null||m.set(g.text)))}}D.value=!1}function X(o,{name:t,content:s}){var m,v;l.saveData({[o]:!0,name:t,content:s}),o==="left"?(m=n.value)==null||m.set(s):o==="right"&&((v=a.value)==null||v.set(s))}function T(o){const t=o==="left"?l.leftId:l.rightId;t&&l.deleteData({id:t})}function rt(){var t,s;const o=(t=n.value)==null?void 0:t.get();o!=null&&((s=a.value)==null||s.set(o))}function dt(){var t,s;const o=(t=a.value)==null?void 0:t.get();o!=null&&((s=n.value)==null||s.set(o))}let b=0,I=0,P=!1;function U(o){var s;if(o instanceof MouseEvent&&o.button!==0)return;const t=(s=n.value)==null?void 0:s.container;t&&(P=!1,I=Number.parseFloat(window.getComputedStyle(t).width),Number.isNaN(I)&&(I=0),o instanceof TouchEvent?(b=o.touches[0].clientX,document.addEventListener("touchend",E),document.addEventListener("touchmove",k)):(b=o.clientX,document.addEventListener("mouseup",E),document.addEventListener("mousemove",k)))}function k(o){if(!r.value)return;P=!0;let t=0;o instanceof TouchEvent?t=o.touches[0].clientX:t=o.clientX;const s=I-b+t,m=Number.parseFloat(window.getComputedStyle(r.value).width);s<435?(d.value="right",d.value!==l.fullStatus&&l.setFullStatus("right")):m-100-s<435?(d.value="left",d.value!==l.fullStatus&&l.setFullStatus("left")):(d.value="",l.setSplitter(s/(m-100)),d.value!==l.fullStatus&&l.setFullStatus())}function E(){document.removeEventListener("mousemove",k),document.removeEventListener("touchmove",k),document.removeEventListener("mouseup",E),document.removeEventListener("touchend",E)}function ut(){r.value&&(P||(d.value==="left"?(l.setSplitter(1-435/(Number.parseFloat(window.getComputedStyle(r.value).width)-100)),d.value=""):d.value==="right"&&(l.setSplitter(435/(Number.parseFloat(window.getComputedStyle(r.value).width)-100)),d.value="")))}return(o,t)=>{var W,A;const s=wt,m=jt,v=Mt,g=St,ft=Lt,mt=Et;return _(),C(F,null,[Q(f("div",Nt,null,512),[[G,u(c)],[mt,!0]]),Q(f("div",{ref_key:"editorPanel",ref:r,class:"editorPanel"},[p(O,{ref_key:"editorPanelContainerLeft",ref:n,"show-menu-bar":"",class:L(["editorPanelContainer editorPanelContainerLeft",{full:u(d)==="left",hide:u(d)==="right"}]),style:K({flex:`${u(l).splitterValue} 1 0`}),name:(W=u(l).leftData)==null?void 0:W.name,config:{mode:"text"},onChange:t[0]||(t[0]=i=>z("left",i)),onOpenRecent:t[1]||(t[1]=i=>R("left")),onOpen:t[2]||(t[2]=i=>X("left",i)),onCreate:t[3]||(t[3]=i=>B("left")),onChangeName:t[4]||(t[4]=i=>H("left",i)),onDelete:t[5]||(t[5]=i=>T("left"))},null,8,["class","style","name"]),f("div",{class:L(["controller noShowMobile",{full:u(d)}])},[p(m,{direction:"vertical"},{default:h(()=>[u(d)?$t("",!0):(_(),C(F,{key:0},[t[17]||(t[17]=f("div",{class:"emptySpace"},null,-1)),p(s,{type:"primary",block:"",onClick:rt},{default:h(()=>t[15]||(t[15]=[w(" 复制 "),f("span",{class:"i-icon-park-outline-right"},null,-1)])),_:1}),p(s,{type:"primary",block:"",onClick:dt},{default:h(()=>t[16]||(t[16]=[f("span",{class:"i-icon-park-outline-left"},null,-1),w(" 复制 ")])),_:1})],64)),f("div",{class:"drag",onMousedown:U,onTouchstart:U,onClick:ut},[f("div",Vt,[u(d)==="right"?(_(),C("svg",Ft,t[18]||(t[18]=[f("path",{fill:"currentColor",d:"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"},null,-1)]))):u(d)==="left"?(_(),C("svg",Bt,t[19]||(t[19]=[f("path",{fill:"currentColor",d:"M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"},null,-1)]))):(_(),C("svg",Ht,t[20]||(t[20]=[f("path",{fill:"currentColor",d:"M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"},null,-1)])))])],32)]),_:1})],2),p(O,{ref_key:"editorPanelContainerRight",ref:a,"show-menu-bar":"",class:L(["editorPanelContainer noShowMobile editorPanelContainerRight",{full:u(d)==="right",hide:u(d)==="left"}]),style:K({flex:`${1-u(l).splitterValue} 1 0`}),name:(A=u(l).rightData)==null?void 0:A.name,config:{mode:"tree"},onChange:t[6]||(t[6]=i=>z("right",i)),onOpenRecent:t[7]||(t[7]=i=>R("right")),onOpen:t[8]||(t[8]=i=>X("right",i)),onCreate:t[9]||(t[9]=i=>B("right")),onChangeName:t[10]||(t[10]=i=>H("right",i)),onDelete:t[11]||(t[11]=i=>T("right"))},null,8,["class","style","name"])],512),[[G,!u(c)]]),p(ft,{modelValue:u(D),"onUpdate:modelValue":t[14]||(t[14]=i=>Z(D)?D.value=i:null),title:"打开最近"},{footer:h(()=>[f("span",At,[p(s,{onClick:t[13]||(t[13]=i=>D.value=!1)},{default:h(()=>t[23]||(t[23]=[w("取消")])),_:1}),p(s,{type:"primary",onClick:it},{default:h(()=>t[24]||(t[24]=[w(" 确定 ")])),_:1})])]),default:h(()=>[p(v,null,{default:h(()=>t[21]||(t[21]=[w("搜索")])),_:1}),p(g,{modelValue:u(x),"onUpdate:modelValue":t[12]||(t[12]=i=>Z(x)?x.value=i:null),placeholder:"请输入文档名称"},null,8,["modelValue"]),f("div",zt,[(_(!0),C(F,null,xt(u(st),i=>(_(),C("div",{key:i._id,class:L(["data-list-item",{selected:i._id===u(y)}]),onClick:ct=>y.value=i._id},[f("div",Xt,[f("div",Tt,q(i.name),1),f("div",Ut,q(`最后修改: ${i.updated}`),1)]),f("div",Wt,[p(s,{type:"danger",onClick:It(ct=>u(l).deleteData({id:i._id}),["stop"])},{default:h(()=>t[22]||(t[22]=[w(" 删除 ")])),_:2},1032,["onClick"])])],10,Rt))),128))])]),_:1},8,["modelValue"])],64)}}}),Ce=kt(Jt,[["__scopeId","data-v-382b1951"]]);export{Ce as default};
