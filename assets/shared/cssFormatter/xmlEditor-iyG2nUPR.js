import{a as F,h as M,b as A,c as E,f as z,d as B,e as G,E as y,g as I,s as L,j as N,k as P,m as U,r as H,n as V,o as j,p as q,q as D,t as R,v as J,w as O,x as T,y as W,z as Q,A as X,B as Y,C as Z,D as ee,F as u,G as S,H as te,I as oe,J as ae,K as se,M as ne}from"../../common-5sobukW6.js";import{j as ie,B as m,l as le,P as re,q as ce,o as l,c as r,a as g,F as v,e as k,g as de,d as x,a3 as ue}from"../../vendor-vjIVktzB.js";const fe=[F(),M(),A(),E(),z(),B(),G(),y.allowMultipleSelections.of(!0),I(),L(Y,{fallback:!0}),N(),P(),U(),H(),V(),j(),q(),D.of([...R,...J,...O,...T,...W,...Q,...X])],pe={"Control character":"控制字符","Selection deleted":"删除所选内容","Folded lines":"折叠行","Unfolded lines":"展开行",to:"至","folded code":"折叠的代码",unfold:"展开","Fold line":"折叠行","Unfold line":"展开行","Go to line":"跳转至行",go:"确定",Find:"查找",Replace:"替换",next:"下一个",previous:"上一个",all:"全部","match case":"匹配大小写","by word":"按单词",replace:"替换","replace all":"全部替换",close:"关闭","current match":"当前匹配项","replaced $ matches":"替换了 $ 个匹配项","replaced match on line $":"替换了行 $ 的匹配项","on line":"在行",Completions:"自动完成",Diagnostics:"诊断","No diagnostics":"无诊断信息"};function he(t){const n=document.createElement("div");return n.style.padding="0 .5rem",n.textContent=c(),{dom:n,update(e){e.selectionSet&&(n.textContent=c())}};function c(){const e=t.state.selection.main,s=t.state.doc.lineAt(e.head);let d=`总行数: ${t.state.doc.lines} 行数: ${s.number} 列数: ${e.head-s.from}`;return e.empty||(d+=`选中: ${Math.abs(e.to-e.from)} 字符`),d}}const me={extensions:[fe,y.phrases.of(pe),D.of([Z]),B(),ee.of(he)],formatter:t=>t,compactor:t=>t},ge={flex:"","flex-col":""},ve={class:"controller",flex:""},ye=["title","onClick"],_e=ie({__name:"editor",props:{inputDefault:{default:""},plugin:{default:()=>me}},emits:["change"],setup(t,{emit:n}){const c=m();let e;const s=t,d=n,_=new ae,f=m(!1),p=m(!1);le(()=>{e=new u({state:y.create({extensions:[...s.plugin.extensions,u.updateListener.of(b),_.of(u.theme({},{dark:S().isDark}))],doc:s.inputDefault}),parent:c.value})}),re(()=>{e==null||e.destroy()}),ce(()=>S().isDark,o=>{e.dispatch({effects:_.reconfigure(u.theme({},{dark:o}))})});function b(o){o.docChanged&&(f.value=te(e.state)>0,p.value=oe(e.state)>0,d("change",o.state.doc.toString()))}const w=[[{title:"格式化",event:function(){const a=s.plugin.formatter(e.state.doc.toString());a&&a!==e.state.doc.toString()&&e.dispatch({changes:{from:0,to:e.state.doc.length,insert:a}})},icon:"i-iszy-editor-format"},{title:"压缩",event:function(){const a=s.plugin.compactor(e.state.doc.toString());a&&a!==e.state.doc.toString()&&e.dispatch({changes:{from:0,to:e.state.doc.length,insert:a}})},icon:"i-iszy-editor-compact"}],[{title:"撤销",isDisabled:()=>!f.value,event:function(){f.value&&se(e)},icon:"i-fa6-solid-arrow-rotate-left"},{title:"重做",isDisabled:()=>!p.value,event:function(){p.value&&ne(e)},icon:"i-fa6-solid-arrow-rotate-right"}]];return(o,a)=>(l(),r("div",ge,[g("div",ve,[(l(),r(v,null,k(w,(K,h)=>(l(),r(v,null,[h!==0?(l(),r("div",{key:"divider"+h,class:"divider"})):de("",!0),(l(!0),r(v,null,k(K,(i,$)=>{var C;return l(),r("div",{key:"btn"+h+$,title:i.title,class:x(["controller-btn",{disabled:(C=i.isDisabled)==null?void 0:C.call(i)}]),onClick:i.event},[g("span",{class:x(i.icon)},null,2)],10,ye)}),128))],64))),64))]),g("div",{ref_key:"editor",ref:c,class:"editor","w-full":""},null,512)]))}}),ke=ue(_e,[["__scopeId","data-v-3b8c7f9a"]]);export{ke as _,me as p};
