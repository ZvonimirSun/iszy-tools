import{_ as Q,y,d6 as Y,D as Z,o as q,l as ee,a as d,w as v,m as l,n as f,z as U,t as M,ao as F,A as O,E as te,b as ne,J as oe,K as ie}from"./index-64dd3e12.js";import{E as ae}from"./el-divider-46ad3be0.js";import"./index-4ece5731.js";import{a as L,V as E}from"./ext-beautify-5656bab6.js";import{w as se}from"./worker-javascript-8b46e5e3.js";import"./theme-twilight-fdc48685.js";import{_ as re}from"./Paragraph-8c8ec686.js";import"./ResizeObserver.es-0f9f8adb.js";import"./isEqual-b7755aa5.js";var le={exports:{}};(function(b,B){ace.define("ace/mode/json_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(s,C,p){var m=s("../lib/oop"),_=s("./text_highlight_rules").TextHighlightRules,r=function(){this.$rules={start:[{token:"variable",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'},{token:"string",regex:'"',next:"string"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"text",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"comment",regex:"\\/\\/.*$"},{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"punctuation.operator",regex:/[,]/},{token:"text",regex:"\\s+"}],string:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]}};m.inherits(r,_),C.JsonHighlightRules=r}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(s,C,p){var m=s("../range").Range,_=function(){};(function(){this.checkOutdent=function(r,g){return/^\s+$/.test(r)?/^\s*\}/.test(g):!1},this.autoOutdent=function(r,g){var e=r.getLine(g),o=e.match(/^(\s*\})/);if(!o)return 0;var n=o[1].length,a=r.findMatchingBracket({row:g,column:n});if(!a||a.row==g)return 0;var i=this.$getIndent(r.getLine(a.row));r.replace(new m(g,0,g,n-1),i)},this.$getIndent=function(r){return r.match(/^\s*/)[0]}}).call(_.prototype),C.MatchingBraceOutdent=_}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(s,C,p){var m=s("../../lib/oop"),_=s("../../range").Range,r=s("./fold_mode").FoldMode,g=C.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};m.inherits(g,r),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,o,n){var a=e.getLine(n);if(this.singleLineBlockCommentRe.test(a)&&!this.startRegionRe.test(a)&&!this.tripleStarBlockCommentRe.test(a))return"";var i=this._getFoldWidgetBase(e,o,n);return!i&&this.startRegionRe.test(a)?"start":i},this.getFoldWidgetRange=function(e,o,n,a){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var u=i.match(this.foldingStartMarker);if(u){var c=u.index;if(u[1])return this.openingBracketBlock(e,u[1],n,c);var h=e.getCommentFoldRange(n,c+u[0].length,1);return h&&!h.isMultiLine()&&(a?h=this.getSectionRange(e,n):o!="all"&&(h=null)),h}if(o!=="markbegin"){var u=i.match(this.foldingStopMarker);if(u){var c=u.index+u[0].length;return u[1]?this.closingBracketBlock(e,u[1],n,c):e.getCommentFoldRange(n,c,-1)}}},this.getSectionRange=function(e,o){var n=e.getLine(o),a=n.search(/\S/),i=o,c=n.length;o=o+1;for(var h=o,u=e.getLength();++o<u;){n=e.getLine(o);var R=n.search(/\S/);if(R!==-1){if(a>R)break;var S=this.getFoldWidgetRange(e,"all",o);if(S){if(S.start.row<=i)break;if(S.isMultiLine())o=S.end.row;else if(a==R)break}h=o}}return new _(i,c,h,e.getLine(h).length)},this.getCommentRegionBlock=function(e,o,n){for(var a=o.search(/\s*$/),i=e.getLength(),c=n,h=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,u=1;++n<i;){o=e.getLine(n);var R=h.exec(o);if(R&&(R[1]?u--:u++,!u))break}var S=n;if(S>c)return new _(c,a,S,o.length)}}.call(g.prototype)}),ace.define("ace/mode/json",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/json_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle","ace/worker/worker_client"],function(s,C,p){var m=s("../lib/oop"),_=s("./text").Mode,r=s("./json_highlight_rules").JsonHighlightRules,g=s("./matching_brace_outdent").MatchingBraceOutdent,e=s("./folding/cstyle").FoldMode,o=s("../worker/worker_client").WorkerClient,n=function(){this.HighlightRules=r,this.$outdent=new g,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new e};m.inherits(n,_),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(a,i,c){var h=this.$getIndent(i);if(a=="start"){var u=i.match(/^.*[\{\(\[]\s*$/);u&&(h+=c)}return h},this.checkOutdent=function(a,i,c){return this.$outdent.checkOutdent(i,c)},this.autoOutdent=function(a,i,c){this.$outdent.autoOutdent(i,c)},this.createWorker=function(a){var i=new o(["ace"],"ace/mode/json_worker","JsonWorker");return i.attachToDocument(a.getDocument()),i.on("annotate",function(c){a.setAnnotations(c.data)}),i.on("terminate",function(){a.clearAnnotations()}),i},this.$id="ace/mode/json"}.call(n.prototype),C.Mode=n}),function(){ace.require(["ace/mode/json"],function(s){b&&(b.exports=s)})}()})(le);var ce={exports:{}};(function(b,B){(function(){ace.require(["ace/snippets/json"],function(s){b&&(b.exports=s)})})()})(ce);const ue=""+new URL("worker-json-e35496ff.js",import.meta.url).href;const x=b=>(oe("data-v-a49df34b"),b=b(),ie(),b),de={flex:"","h-full":"","flex-col":""},ge={flex:"","flex-wrap":"","justify-between":"","overflow-auto":"","flex-1":""},he={class:"codePanel"},fe={class:"header"},pe=x(()=>l("span",{class:"i-iszy-jsoneditor-format"},null,-1)),me=x(()=>l("span",{class:"i-icon-park-outline-compression"},null,-1)),_e=x(()=>l("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),ve=x(()=>l("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),ke=x(()=>l("span",{class:"i-icon-park-outline-undo"},null,-1)),xe=x(()=>l("span",{class:"i-icon-park-outline-redo"},null,-1)),ye=x(()=>l("span",{class:"i-icon-park-outline-to-top"},null,-1)),be=x(()=>l("span",{class:"i-icon-park-outline-to-bottom"},null,-1)),Ce={class:"ace-container"},Se={class:"footer"},Re={class:"codePanel"},Me={class:"header"},we=x(()=>l("span",{class:"i-iszy-jsoneditor-format"},null,-1)),je=x(()=>l("span",{class:"i-icon-park-outline-undo"},null,-1)),Be=x(()=>l("span",{class:"i-icon-park-outline-redo"},null,-1)),Je=x(()=>l("span",{class:"i-icon-park-solid-right-one"},null,-1)),Le={class:"ace-container"},$e={class:"footer"},Ue={__name:"jsonConverter",setup(b){L.config.setModuleUrl("ace/mode/json_worker",ue),L.config.setModuleUrl("ace/mode/javascript_worker",se);const B=L.require("ace/ext/beautify"),s=y("textmate"),C=Y();C.value&&(s.value="twilight"),Z(C,t=>{t?s.value="twilight":s.value="textmate"});let p=null,m=null;const _=y(`function main(json) {
  return json
}`),r=y(`{
  "a": 1,
  "b": 2
}`),g=y({row:0,column:0}),e=y({row:0,column:0}),o=y(0),n=y(0),a=y(!1),i=y(!1),c=y(!1),h=y(!1);function u(t){p=t,t.getSession().setTabSize(2),t.getSession().setUseSoftTabs(!0),t.setShowPrintMargin(!1),t.selection.on("changeCursor",()=>{g.value=t.selection.getCursor()}),g.value=t.selection.getCursor(),o.value=t.session.getLength()}function R(t){m=t,t.getSession().setTabSize(2),t.getSession().setUseSoftTabs(!0),t.setShowPrintMargin(!1),t.selection.on("changeCursor",()=>{e.value=t.selection.getCursor()}),e.value=t.selection.getCursor(),n.value=t.session.getLength()}function S(){p.session.foldAll()}function T(){p.session.unfold()}function A(){p.gotoLine(0)}function $(){try{r.value=JSON.stringify(JSON.parse(r.value),null,2)}catch{}}function I(){try{r.value=JSON.stringify(JSON.parse(r.value))}catch{}}function W(){B.beautify(m.session)}function N(){p.gotoLine(p.session.getLength())}async function V(){o.value=p.session.getLength(),await F();const t=p.session.getUndoManager();a.value=t.hasUndo(),i.value=t.hasRedo()}async function D(){n.value=m.session.getLength(),await F();const t=m.session.getUndoManager();c.value=t.hasUndo(),h.value=t.hasRedo()}function H(){p.getSession().getUndoManager().undo()}function z(){p.getSession().getUndoManager().redo()}function P(){m.getSession().getUndoManager().undo()}function K(){m.getSession().getUndoManager().redo()}function X(){try{const t=new Function("json",_.value+`
return main(json)`);r.value=JSON.stringify(t(JSON.parse(r.value))),$(),O.success("转换成功")}catch(t){O.warning(t.message)}}return(t,j)=>{const G=re,k=te,w=ae;return q(),ee("div",de,[d(G,null,{default:v(()=>[ne(" 在右侧输入JavaScript方法(main方法是必须的)，用于转换左侧的JSON数据。 ")]),_:1}),l("div",ge,[l("div",he,[l("div",fe,[d(k,{type:"primary",title:"格式化",onClick:$},{icon:v(()=>[pe]),_:1}),d(k,{type:"primary",title:"压缩",onClick:I},{icon:v(()=>[me]),_:1}),d(w,{direction:"vertical"}),d(k,{type:"primary",title:"折叠所有",onClick:S},{icon:v(()=>[_e]),_:1}),d(k,{type:"primary",title:"展开所有",onClick:T},{icon:v(()=>[ve]),_:1}),d(w,{direction:"vertical"}),d(k,{type:"primary",title:"撤销",disabled:!f(a),onClick:H},{icon:v(()=>[ke]),_:1},8,["disabled"]),d(k,{type:"primary",title:"重做",disabled:!f(i),onClick:z},{icon:v(()=>[xe]),_:1},8,["disabled"]),d(w,{direction:"vertical"}),d(k,{type:"primary",title:"前往顶部",onClick:A},{icon:v(()=>[ye]),_:1}),d(k,{type:"primary",title:"前往底部",onClick:N},{icon:v(()=>[be]),_:1})]),l("div",Ce,[d(f(E),{modelValue:f(r),"onUpdate:modelValue":j[0]||(j[0]=J=>U(r)?r.value=J:null),lang:"json",theme:f(s),style:{height:"100%"},options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:u,onChange:V},null,8,["modelValue","theme"])]),l("div",Se,[l("span",null,"总行数: "+M(f(o))+"  行数: "+M(f(g).row+1)+"  列数: "+M(f(g).column+1),1)])]),l("div",Re,[l("div",Me,[d(k,{type:"primary",title:"格式化",onClick:W},{icon:v(()=>[we]),_:1}),d(w,{direction:"vertical"}),d(k,{type:"primary",title:"撤销",disabled:!f(c),onClick:P},{icon:v(()=>[je]),_:1},8,["disabled"]),d(k,{type:"primary",title:"重做",disabled:!f(h),onClick:K},{icon:v(()=>[Be]),_:1},8,["disabled"]),d(w,{direction:"vertical"}),d(k,{type:"primary",title:"运行",onClick:X},{icon:v(()=>[Je]),_:1})]),l("div",Le,[d(f(E),{modelValue:f(_),"onUpdate:modelValue":j[1]||(j[1]=J=>U(_)?_.value=J:null),lang:"javascript",theme:f(s),style:{height:"100%"},options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:R,onChange:D},null,8,["modelValue","theme"])]),l("div",$e,[l("span",null,"总行数: "+M(f(n))+"  行数: "+M(f(e).row+1)+"  列数: "+M(f(e).column+1),1)])])])])}}},De=Q(Ue,[["__scopeId","data-v-a49df34b"]]);export{De as default};