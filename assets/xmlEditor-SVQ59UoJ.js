import{a as r,h as d,b as h,c as p,f as m,d as i,e as u,E as l,g as f,s as g,j as y,k as S,m as b,r as C,n as x,o as K,p as $,q as c,t as k,v as A,w as v,x as w,y as M,z as B,A as E,B as F,C as G,D as P}from"./common-SrknxvFl.js";const D=[r(),d(),h(),p(),m(),i(),u(),l.allowMultipleSelections.of(!0),f(),g(F,{fallback:!0}),y(),S(),b(),C(),x(),K(),$(),c.of([...k,...A,...v,...w,...M,...B,...E])],H={"Control character":"控制字符","Selection deleted":"删除所选内容","Folded lines":"折叠行","Unfolded lines":"展开行",to:"至","folded code":"折叠的代码",unfold:"展开","Fold line":"折叠行","Unfold line":"展开行","Go to line":"跳转至行",go:"确定",Find:"查找",Replace:"替换",next:"下一个",previous:"上一个",all:"全部","match case":"匹配大小写","by word":"按单词",replace:"替换","replace all":"全部替换",close:"关闭","current match":"当前匹配项","replaced $ matches":"替换了 $ 个匹配项","replaced match on line $":"替换了行 $ 的匹配项","on line":"在行",Completions:"自动完成",Diagnostics:"诊断","No diagnostics":"无诊断信息"};function I(t){const a=document.createElement("div");return a.style.padding="0 .5rem",a.textContent=o(),{dom:a,update(e){e.selectionSet&&(a.textContent=o())}};function o(){const e=t.state.selection.main,s=t.state.doc.lineAt(e.head);let n=`行: ${s.number} 列: ${e.head-s.from}`;return e.empty||(n+=`选中: ${Math.abs(e.to-e.from)} 字符`),n}}const N={extensions:[D,l.phrases.of(H),c.of([G]),i(),P.of(I)],formatter:t=>t,compactor:t=>t};export{N as p};
