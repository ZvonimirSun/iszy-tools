import{_ as T,y as l,co as D,D as z,o as F,l as V,m as o,a as t,w as i,n as a,z as R,t as g,ab as j,E as N,I as P,J as q}from"./index.js";import{E as J}from"./el-divider-e7db1f3a.js";import{a as k,V as W}from"./ext-beautify-247057e6.js";import{w as G}from"./worker-css-2c615ec9.js";import"./vite-8235fac6.js";import"./ResizeObserver.es-0f9f8adb.js";const c=u=>(P("data-v-854a34c3"),u=u(),q(),u),H={class:"codePanel"},K={class:"header"},O=c(()=>o("span",{class:"i-iszy-jsoneditor-format"},null,-1)),Q=c(()=>o("span",{class:"i-iszy-jsoneditor-compact"},null,-1)),X=c(()=>o("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),Y=c(()=>o("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),Z=c(()=>o("span",{class:"i-icon-park-outline-undo"},null,-1)),$=c(()=>o("span",{class:"i-icon-park-outline-redo"},null,-1)),ee=c(()=>o("span",{class:"i-icon-park-outline-to-top"},null,-1)),te=c(()=>o("span",{class:"i-icon-park-outline-to-bottom"},null,-1)),oe={class:"ace-container"},se={class:"footer"},ne={__name:"cssFormatter",setup(u){k.config.setModuleUrl("ace/mode/css_worker",G);const b=k.require("ace/ext/beautify");let e;const r=l(""),d=l({row:0,column:0}),_=l(0),f=l(!1),h=l(!1),p=l("textmate"),v=D();v.value&&(p.value="twilight"),z(v,s=>{s?p.value="twilight":p.value="textmate"});function C(s){e=s,e.getSession().setTabSize(2),e.getSession().setUseSoftTabs(!0),e.setShowPrintMargin(!1),e.selection.on("changeCursor",()=>{d.value=e.selection.getCursor()}),d.value=e.selection.getCursor(),_.value=e.session.getLength()}function S(){e.session.foldAll()}function w(){e.session.unfold()}function x(){e.gotoLine(0,0,!0)}function E(){b.beautify(e.session)}function U(){debugger;try{r.value=r.value.replace(/\s+|\n/g," ").replace(/\s*{\s*/g,"{").replace(/\s*}\s*/g,"}").replace(/\s*:\s*/g,":").replace(/\s*;\s*/g,";")}catch{}}function I(){e.gotoLine(e.session.getLength(),0,!0)}async function A(){_.value=e.session.getLength(),await j();const s=e.session.getUndoManager();f.value=s.hasUndo(),h.value=s.hasRedo()}function B(){e.getSession().getUndoManager().undo(e.getSession())}function L(){e.getSession().getUndoManager().redo(e.getSession())}return(s,y)=>{const n=N,m=J;return F(),V("div",H,[o("div",K,[t(n,{type:"primary",title:"格式化",onClick:E},{icon:i(()=>[O]),_:1}),t(n,{type:"primary",title:"压缩",onClick:U},{icon:i(()=>[Q]),_:1}),t(m,{direction:"vertical"}),t(n,{type:"primary",title:"折叠所有",onClick:S},{icon:i(()=>[X]),_:1}),t(n,{type:"primary",title:"展开所有",onClick:w},{icon:i(()=>[Y]),_:1}),t(m,{direction:"vertical"}),t(n,{type:"primary",title:"撤销",disabled:!a(f),onClick:B},{icon:i(()=>[Z]),_:1},8,["disabled"]),t(n,{type:"primary",title:"重做",disabled:!a(h),onClick:L},{icon:i(()=>[$]),_:1},8,["disabled"]),t(m,{direction:"vertical"}),t(n,{type:"primary",title:"前往顶部",onClick:x},{icon:i(()=>[ee]),_:1}),t(n,{type:"primary",title:"前往底部",onClick:I},{icon:i(()=>[te]),_:1})]),o("div",oe,[t(a(W),{value:a(r),"onUpdate:value":y[0]||(y[0]=M=>R(r)?r.value=M:null),lang:"css",theme:a(p),style:{height:"100%"},options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:C,onChange:A},null,8,["value","theme"])]),o("div",se,[o("span",null,"总行数: "+g(a(_))+"  行数: "+g(a(d).row+1)+"  列数: "+g(a(d).column+1),1)])])}}},de=T(ne,[["__scopeId","data-v-854a34c3"]]);export{de as default};
