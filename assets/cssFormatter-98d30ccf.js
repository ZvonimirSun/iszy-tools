import{_ as T,y as c,d6 as D,D as z,o as F,l as V,m as o,a as t,w as i,n as a,z as R,t as g,ao as j,E as N,J as P,K as q}from"./index-2d447dfc.js";import{E as J}from"./el-divider-fe64cd6a.js";import{a as k,V as K}from"./ext-beautify-4d5193e5.js";import{w as W}from"./worker-css-9d630942.js";import"./theme-twilight-fdc48685.js";import"./ResizeObserver.es-0f9f8adb.js";const l=u=>(P("data-v-80a28525"),u=u(),q(),u),G={class:"codePanel"},H={class:"header"},O=l(()=>o("span",{class:"i-iszy-jsoneditor-format"},null,-1)),Q=l(()=>o("span",{class:"i-iszy-jsoneditor-compact"},null,-1)),X=l(()=>o("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),Y=l(()=>o("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),Z=l(()=>o("span",{class:"i-icon-park-outline-undo"},null,-1)),$=l(()=>o("span",{class:"i-icon-park-outline-redo"},null,-1)),ee=l(()=>o("span",{class:"i-icon-park-outline-to-top"},null,-1)),te=l(()=>o("span",{class:"i-icon-park-outline-to-bottom"},null,-1)),oe={class:"ace-container"},se={class:"footer"},ne={__name:"cssFormatter",setup(u){k.config.setModuleUrl("ace/mode/css_worker",W);const C=k.require("ace/ext/beautify");let e;const r=c(""),d=c({row:0,column:0}),_=c(0),f=c(!1),h=c(!1),p=c("textmate"),v=D();v.value&&(p.value="twilight"),z(v,s=>{s?p.value="twilight":p.value="textmate"});function b(s){e=s,e.getSession().setTabSize(2),e.getSession().setUseSoftTabs(!0),e.setShowPrintMargin(!1),e.selection.on("changeCursor",()=>{d.value=e.selection.getCursor()}),d.value=e.selection.getCursor(),_.value=e.session.getLength()}function S(){e.session.foldAll()}function w(){e.session.unfold()}function x(){e.gotoLine(0,0,!0)}function E(){C.beautify(e.session)}function U(){debugger;try{r.value=r.value.replace(/\s+|\n/g," ").replace(/\s*{\s*/g,"{").replace(/\s*}\s*/g,"}").replace(/\s*:\s*/g,":").replace(/\s*;\s*/g,";")}catch{}}function A(){e.gotoLine(e.session.getLength(),0,!0)}async function B(){_.value=e.session.getLength(),await j();const s=e.session.getUndoManager();f.value=s.hasUndo(),h.value=s.hasRedo()}function I(){e.getSession().getUndoManager().undo(e.getSession())}function L(){e.getSession().getUndoManager().redo(e.getSession())}return(s,y)=>{const n=N,m=J;return F(),V("div",G,[o("div",H,[t(n,{type:"primary",title:"格式化",onClick:E},{icon:i(()=>[O]),_:1}),t(n,{type:"primary",title:"压缩",onClick:U},{icon:i(()=>[Q]),_:1}),t(m,{direction:"vertical"}),t(n,{type:"primary",title:"折叠所有",onClick:S},{icon:i(()=>[X]),_:1}),t(n,{type:"primary",title:"展开所有",onClick:w},{icon:i(()=>[Y]),_:1}),t(m,{direction:"vertical"}),t(n,{type:"primary",title:"撤销",disabled:!a(f),onClick:I},{icon:i(()=>[Z]),_:1},8,["disabled"]),t(n,{type:"primary",title:"重做",disabled:!a(h),onClick:L},{icon:i(()=>[$]),_:1},8,["disabled"]),t(m,{direction:"vertical"}),t(n,{type:"primary",title:"前往顶部",onClick:x},{icon:i(()=>[ee]),_:1}),t(n,{type:"primary",title:"前往底部",onClick:A},{icon:i(()=>[te]),_:1})]),o("div",oe,[t(a(K),{value:a(r),"onUpdate:value":y[0]||(y[0]=M=>R(r)?r.value=M:null),lang:"css",theme:a(p),style:{height:"100%"},options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:b,onChange:B},null,8,["value","theme"])]),o("div",se,[o("span",null,"总行数: "+g(a(_))+"  行数: "+g(a(d).row+1)+"  列数: "+g(a(d).column+1),1)])])}}},de=T(ne,[["__scopeId","data-v-80a28525"]]);export{de as default};
