import{E as r,H as G,t as e,n as H,o as I,p as T,q as $,r as A,u as _,v as F,j as l,w as O,h as n,y as P,z as U,A as W,B as J,C as V,G as j,I as q,k as v,J as z,K as Q,M as R,N as Z,O as X,P as Y,Q as ee,x as m,l as oe,a7 as ae,Z as f}from"./index-BG4TqVUi.js";import{D as te,r as re,bJ as i,o as ne,aG as ce,w as le,H as se,I as ie,aC as de}from"./index-tHblRTxj.js";const me="#e5c07b",b="#e06c75",pe="#56b6c2",ge="#ffffff",c="#abb2bf",p="#7d8799",ue="#61afef",he="#98c379",k="#d19a66",fe="#c678dd",be="#21252b",C="#2c313a",y="#282c34",d="#353a42",ke="#3E4451",x="#528bff",w=r.theme({"&":{color:c,backgroundColor:y},".cm-content":{caretColor:x},".cm-cursor, .cm-dropCursor":{borderLeftColor:x},"&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:ke},".cm-panels":{backgroundColor:be,color:c},".cm-panels.cm-panels-top":{borderBottom:"2px solid black"},".cm-panels.cm-panels-bottom":{borderTop:"2px solid black"},".cm-searchMatch":{backgroundColor:"#72a1ff59",outline:"1px solid #457dff"},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:"#6199ff2f"},".cm-activeLine":{backgroundColor:"#6699ff0b"},".cm-selectionMatch":{backgroundColor:"#aafe661a"},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bad0f847"},".cm-gutters":{backgroundColor:y,color:p,border:"none"},".cm-activeLineGutter":{backgroundColor:C},".cm-foldPlaceholder":{backgroundColor:"transparent",border:"none",color:"#ddd"},".cm-tooltip":{border:"none",backgroundColor:d},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:"transparent",borderBottomColor:"transparent"},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:d,borderBottomColor:d},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:C,color:c}}},{dark:!0}),B=G.define([{tag:e.keyword,color:fe},{tag:[e.name,e.deleted,e.character,e.propertyName,e.macroName],color:b},{tag:[e.function(e.variableName),e.labelName],color:ue},{tag:[e.color,e.constant(e.name),e.standard(e.name)],color:k},{tag:[e.definition(e.name),e.separator],color:c},{tag:[e.typeName,e.className,e.number,e.changed,e.annotation,e.modifier,e.self,e.namespace],color:me},{tag:[e.operator,e.operatorKeyword,e.url,e.escape,e.regexp,e.link,e.special(e.string)],color:pe},{tag:[e.meta,e.comment],color:p},{tag:e.strong,fontWeight:"bold"},{tag:e.emphasis,fontStyle:"italic"},{tag:e.strikethrough,textDecoration:"line-through"},{tag:e.link,color:p,textDecoration:"underline"},{tag:e.heading,fontWeight:"bold",color:b},{tag:[e.atom,e.bool,e.special(e.variableName)],color:k},{tag:[e.processingInstruction,e.string,e.inserted],color:he},{tag:e.invalid,color:ge}]),Ce=[H(),I(),T(),$(),A(),_(),F(),l.allowMultipleSelections.of(!0),O(),n(m,{fallback:!0}),P(),U(),W(),J(),V(),j(),q(),v.of([...z,...Q,...R,...Z,...X,...Y,...ee])],ye={"Control character":"控制字符","Selection deleted":"删除所选内容","Folded lines":"折叠行","Unfolded lines":"展开行",to:"至","folded code":"折叠的代码",unfold:"展开","Fold line":"折叠行","Unfold line":"展开行","Go to line":"跳转至行",go:"确定",Find:"查找",Replace:"替换",next:"下一个",previous:"上一个",all:"全部","match case":"匹配大小写","by word":"按单词",replace:"替换","replace all":"全部替换",close:"关闭","current match":"当前匹配项","replaced $ matches":"替换了 $ 个匹配项","replaced match on line $":"替换了行 $ 的匹配项","on line":"在行",Completions:"自动完成",Diagnostics:"诊断","No diagnostics":"无诊断信息"},xe={extensions:[Ce,l.phrases.of(ye),v.of([oe]),_()]},we=te({__name:"EditorMini",props:{inputDefault:{default:""},plugin:{default:void 0},placeholder:{default:""},readonly:{type:Boolean,default:!1}},emits:["change"],setup(S,{expose:D,emit:M}){const t=S,N=M;D({getView:E,setInput:L});const g=re();let o;const u=new f,h=new f,s=[xe.extensions,t.plugin?t.plugin.miniExtensions||t.plugin.extensions:[],r.updateListener.of(K),u.of(i().isDark?w:r.theme({},{dark:!1})),h.of(i().isDark?n(B,{fallback:!0}):n(m))];t.placeholder&&s.push(ae(t.placeholder)),t.readonly&&s.push(l.readOnly.of(!0)),ne(()=>{o=new r({state:l.create({extensions:s,doc:t.inputDefault}),parent:g.value})}),ce(()=>{o==null||o.destroy()}),le(()=>i().isDark,a=>{o.dispatch({effects:[u.reconfigure(a?w:r.theme({},{dark:!1})),h.reconfigure(a?n(B,{fallback:!0}):n(m))]})});function K(a){a.docChanged&&N("change",a.state.doc.toString())}function L(a){o.dispatch({changes:{from:0,to:o.state.doc.length,insert:a}})}function E(){return o}return(a,Be)=>(se(),ie("div",{ref_key:"editor",ref:g,class:"editor","w-full":""},null,512))}}),Se=de(we,[["__scopeId","data-v-ed07c96e"]]);export{Se as _};
