import{_ as I,r,o as T,L as E,M as t,a as o,w as n,k as i,l as F,bm as m,aM as V,B as z,bh as R,bi as j}from"./index.01eeedf2.js";import{_ as N}from"./index.44550d0c.js";import{a as h,V as P}from"./ext-beautify.ebd08541.js";import{w as q}from"./worker-css.f3465bc7.js";const a=u=>(R("data-v-2a747b38"),u=u(),j(),u),D={class:"codePanel"},W={class:"header"},G=a(()=>t("span",{class:"i-iszy-jsoneditor-format"},null,-1)),H=a(()=>t("span",{class:"i-iszy-jsoneditor-compact"},null,-1)),J=a(()=>t("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),K=a(()=>t("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),O=a(()=>t("span",{class:"i-icon-park-outline-undo"},null,-1)),Q=a(()=>t("span",{class:"i-icon-park-outline-redo"},null,-1)),X=a(()=>t("span",{class:"i-icon-park-outline-to-top"},null,-1)),Y=a(()=>t("span",{class:"i-icon-park-outline-to-bottom"},null,-1)),Z={class:"ace-container"},$={class:"footer"},ee={__name:"cssFormatter",setup(u){h.config.setModuleUrl("ace/mode/css_worker",q);const v=h.require("ace/ext/beautify");let e=null;const l=r(""),p=r({row:0,column:0}),_=r(0),g=r(!1),f=r(!1);function b(c){e=c,e.getSession().setTabSize(2),e.getSession().setUseSoftTabs(!0),e.setShowPrintMargin(!1),e.selection.on("changeCursor",()=>{p.value=e.selection.getCursor()}),p.value=e.selection.getCursor(),_.value=e.session.getLength()}function k(){e.session.foldAll()}function C(){e.session.unfold()}function x(){e.gotoLine(0)}function S(){v.beautify(e.session)}function w(){try{l.value=l.value.replace(/\s+|\n/g," ").replace(/\s*{\s*/g,"{").replace(/\s*}\s*/g,"}").replace(/\s*:\s*/g,":").replace(/\s*;\s*/g,";")}catch{}}function U(){e.gotoLine(e.session.getLength())}async function M(){_.value=e.session.getLength(),await V();const c=e.session.getUndoManager();g.value=c.hasUndo(),f.value=c.hasRedo()}function B(){e.getSession().getUndoManager().undo()}function L(){e.getSession().getUndoManager().redo()}return(c,y)=>{const s=z,d=N;return T(),E("div",D,[t("div",W,[o(s,{type:"primary",title:"\u683C\u5F0F\u5316",onClick:S},{icon:n(()=>[G]),_:1}),o(s,{type:"primary",title:"\u538B\u7F29",onClick:w},{icon:n(()=>[H]),_:1}),o(d,{type:"vertical"}),o(s,{type:"primary",title:"\u6298\u53E0\u6240\u6709",onClick:k},{icon:n(()=>[J]),_:1}),o(s,{type:"primary",title:"\u5C55\u5F00\u6240\u6709",onClick:C},{icon:n(()=>[K]),_:1}),o(d,{type:"vertical"}),o(s,{type:"primary",title:"\u64A4\u9500",disabled:!i(g),onClick:B},{icon:n(()=>[O]),_:1},8,["disabled"]),o(s,{type:"primary",title:"\u91CD\u505A",disabled:!i(f),onClick:L},{icon:n(()=>[Q]),_:1},8,["disabled"]),o(d,{type:"vertical"}),o(s,{type:"primary",title:"\u524D\u5F80\u9876\u90E8",onClick:x},{icon:n(()=>[X]),_:1}),o(s,{type:"primary",title:"\u524D\u5F80\u5E95\u90E8",onClick:U},{icon:n(()=>[Y]),_:1})]),t("div",Z,[o(i(P),{value:i(l),"onUpdate:value":y[0]||(y[0]=A=>F(l)?l.value=A:null),lang:"css",theme:"textmate",style:{height:"100%"},options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:b,onChange:M},null,8,["value"])]),t("div",$,[t("span",null,"\u603B\u884C\u6570:\xA0"+m(i(_))+"\xA0\xA0\u884C\u6570:\xA0"+m(i(p).row+1)+"\xA0\xA0\u5217\u6570:\xA0"+m(i(p).column+1),1)])])}}},ae=I(ee,[["__scopeId","data-v-2a747b38"]]);export{ae as default};
