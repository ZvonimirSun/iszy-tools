import{_ as K,r as b,j as X,o as G,J as Q,a as g,w as _,K as r,ao as $,a0 as R,a6 as F,ci as Y,B as Z,b as q,S as ee,T as te}from"./index.bbc49104.js";import{_ as ne}from"./index.6d4b8726.js";import{a as J,V as U}from"./ext-beautify.58e245dd.js";import{w as oe}from"./worker-javascript.a4945fc9.js";var ae={exports:{}};(function(x,B){ace.define("ace/mode/json_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,f,S){var h=e("../lib/oop"),m=e("./text_highlight_rules").TextHighlightRules,d=function(){this.$rules={start:[{token:"variable",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'},{token:"string",regex:'"',next:"string"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"text",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"comment",regex:"\\/\\/.*$"},{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"punctuation.operator",regex:/[,]/},{token:"text",regex:"\\s+"}],string:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]}};h.inherits(d,m),f.JsonHighlightRules=d}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,f,S){var h=e("../range").Range,m=function(){};(function(){this.checkOutdent=function(d,p){return/^\s+$/.test(d)?/^\s*\}/.test(p):!1},this.autoOutdent=function(d,p){var t=d.getLine(p),o=t.match(/^(\s*\})/);if(!o)return 0;var a=o[1].length,l=d.findMatchingBracket({row:p,column:a});if(!l||l.row==p)return 0;var i=this.$getIndent(d.getLine(l.row));d.replace(new h(p,0,p,a-1),i)},this.$getIndent=function(d){return d.match(/^\s*/)[0]}}).call(m.prototype),f.MatchingBraceOutdent=m}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,f,S){var h=e("../../lib/oop"),m=e("../../range").Range,d=e("./fold_mode").FoldMode,p=f.FoldMode=function(t){t&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+t.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+t.end)))};h.inherits(p,d),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(t,o,a){var l=t.getLine(a);if(this.singleLineBlockCommentRe.test(l)&&!this.startRegionRe.test(l)&&!this.tripleStarBlockCommentRe.test(l))return"";var i=this._getFoldWidgetBase(t,o,a);return!i&&this.startRegionRe.test(l)?"start":i},this.getFoldWidgetRange=function(t,o,a,l){var i=t.getLine(a);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(t,i,a);var c=i.match(this.foldingStartMarker);if(c){var s=c.index;if(c[1])return this.openingBracketBlock(t,c[1],a,s);var u=t.getCommentFoldRange(a,s+c[0].length,1);return u&&!u.isMultiLine()&&(l?u=this.getSectionRange(t,a):o!="all"&&(u=null)),u}if(o!=="markbegin"){var c=i.match(this.foldingStopMarker);if(c){var s=c.index+c[0].length;return c[1]?this.closingBracketBlock(t,c[1],a,s):t.getCommentFoldRange(a,s,-1)}}},this.getSectionRange=function(t,o){var a=t.getLine(o),l=a.search(/\S/),i=o,s=a.length;o=o+1;for(var u=o,c=t.getLength();++o<c;){a=t.getLine(o);var y=a.search(/\S/);if(y!==-1){if(l>y)break;var C=this.getFoldWidgetRange(t,"all",o);if(C){if(C.start.row<=i)break;if(C.isMultiLine())o=C.end.row;else if(l==y)break}u=o}}return new m(i,s,u,t.getLine(u).length)},this.getCommentRegionBlock=function(t,o,a){for(var l=o.search(/\s*$/),i=t.getLength(),s=a,u=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,c=1;++a<i;){o=t.getLine(a);var y=u.exec(o);if(!!y&&(y[1]?c--:c++,!c))break}var C=a;if(C>s)return new m(s,l,C,o.length)}}.call(p.prototype)}),ace.define("ace/mode/json",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/json_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle","ace/worker/worker_client"],function(e,f,S){var h=e("../lib/oop"),m=e("./text").Mode,d=e("./json_highlight_rules").JsonHighlightRules,p=e("./matching_brace_outdent").MatchingBraceOutdent,t=e("./behaviour/cstyle").CstyleBehaviour,o=e("./folding/cstyle").FoldMode,a=e("../worker/worker_client").WorkerClient,l=function(){this.HighlightRules=d,this.$outdent=new p,this.$behaviour=new t,this.foldingRules=new o};h.inherits(l,m),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(i,s,u){var c=this.$getIndent(s);if(i=="start"){var y=s.match(/^.*[\{\(\[]\s*$/);y&&(c+=u)}return c},this.checkOutdent=function(i,s,u){return this.$outdent.checkOutdent(s,u)},this.autoOutdent=function(i,s,u){this.$outdent.autoOutdent(s,u)},this.createWorker=function(i){var s=new a(["ace"],"ace/mode/json_worker","JsonWorker");return s.attachToDocument(i.getDocument()),s.on("annotate",function(u){i.setAnnotations(u.data)}),s.on("terminate",function(){i.clearAnnotations()}),s},this.$id="ace/mode/json"}.call(l.prototype),f.Mode=l}),function(){ace.require(["ace/mode/json"],function(e){x&&(x.exports=e)})}()})(ae);var ie={exports:{}};(function(x,B){(function(){ace.require(["ace/snippets/json"],function(e){x&&(x.exports=e)})})()})(ie);const se="/assets/worker-json.e628a930.js";const k=x=>(ee("data-v-4d2aad09"),x=x(),te(),x),re={flex:"","h-full":"","flex-col":""},le={flex:"","flex-wrap":"","justify-between":"","overflow-auto":"","flex-1":""},ce={class:"codePanel"},ue={class:"header"},de=k(()=>r("span",{class:"i-iszy-jsoneditor-format"},null,-1)),ge=k(()=>r("span",{class:"i-icon-park-outline-compression"},null,-1)),he=k(()=>r("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),pe=k(()=>r("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),fe=k(()=>r("span",{class:"i-icon-park-outline-undo"},null,-1)),me=k(()=>r("span",{class:"i-icon-park-outline-redo"},null,-1)),_e=k(()=>r("span",{class:"i-icon-park-outline-to-top"},null,-1)),ve=k(()=>r("span",{class:"i-icon-park-outline-to-bottom"},null,-1)),ke={class:"ace-container"},xe={class:"footer"},ye={class:"codePanel"},be={class:"header"},Ce=k(()=>r("span",{class:"i-iszy-jsoneditor-format"},null,-1)),Se=k(()=>r("span",{class:"i-icon-park-outline-undo"},null,-1)),Re=k(()=>r("span",{class:"i-icon-park-outline-redo"},null,-1)),Me=k(()=>r("span",{class:"i-icon-park-solid-right-one"},null,-1)),je={class:"ace-container"},Be={class:"footer"},we={__name:"jsonConverter",setup(x){J.config.setModuleUrl("ace/mode/json_worker",se),J.config.setModuleUrl("ace/mode/javascript_worker",oe);const B=J.require("ace/ext/beautify");let e=null,f=null;const S=b(`function main(json) {
  return json
}`),h=b(`{
  "a": 1,
  "b": 2
}`),m=b({row:0,column:0}),d=b({row:0,column:0}),p=b(0),t=b(0),o=b(!1),a=b(!1),l=b(!1),i=b(!1),s=X("$msg");function u(n){e=n,n.getSession().setTabSize(2),n.getSession().setUseSoftTabs(!0),n.setShowPrintMargin(!1),n.selection.on("changeCursor",()=>{m.value=n.selection.getCursor()}),m.value=n.selection.getCursor(),p.value=n.session.getLength()}function c(n){f=n,n.getSession().setTabSize(2),n.getSession().setUseSoftTabs(!0),n.setShowPrintMargin(!1),n.selection.on("changeCursor",()=>{d.value=n.selection.getCursor()}),d.value=n.selection.getCursor(),t.value=n.session.getLength()}function y(){e.session.foldAll()}function C(){e.session.unfold()}function O(){e.gotoLine(0)}function L(){try{h.value=JSON.stringify(JSON.parse(h.value),null,2)}catch{}}function T(){try{h.value=JSON.stringify(JSON.parse(h.value))}catch{}}function A(){B.beautify(f.session)}function I(){e.gotoLine(e.session.getLength())}async function W(){p.value=e.session.getLength(),await F();const n=e.session.getUndoManager();o.value=n.hasUndo(),a.value=n.hasRedo()}async function E(){t.value=f.session.getLength(),await F();const n=f.session.getUndoManager();l.value=n.hasUndo(),i.value=n.hasRedo()}function N(){e.getSession().getUndoManager().undo()}function H(){e.getSession().getUndoManager().redo()}function P(){f.getSession().getUndoManager().undo()}function V(){f.getSession().getUndoManager().redo()}function z(){try{const n=new Function("json",S.value+`
return main(json)`);h.value=JSON.stringify(n(JSON.parse(h.value))),L(),s.success("\u8F6C\u6362\u6210\u529F")}catch(n){s.warn(n.message)}}return(n,j)=>{const D=Y,v=Z,M=ne;return G(),Q("div",re,[g(D,null,{default:_(()=>[q(" \u5728\u53F3\u4FA7\u8F93\u5165JavaScript\u65B9\u6CD5(main\u65B9\u6CD5\u662F\u5FC5\u987B\u7684)\uFF0C\u7528\u4E8E\u8F6C\u6362\u5DE6\u4FA7\u7684JSON\u6570\u636E\u3002 ")]),_:1}),r("div",le,[r("div",ce,[r("div",ue,[g(v,{type:"primary",title:"\u683C\u5F0F\u5316",onClick:L},{icon:_(()=>[de]),_:1}),g(v,{type:"primary",title:"\u538B\u7F29",onClick:T},{icon:_(()=>[ge]),_:1}),g(M,{type:"vertical"}),g(v,{type:"primary",title:"\u6298\u53E0\u6240\u6709",onClick:y},{icon:_(()=>[he]),_:1}),g(v,{type:"primary",title:"\u5C55\u5F00\u6240\u6709",onClick:C},{icon:_(()=>[pe]),_:1}),g(M,{type:"vertical"}),g(v,{type:"primary",title:"\u64A4\u9500",disabled:!o.value,onClick:N},{icon:_(()=>[fe]),_:1},8,["disabled"]),g(v,{type:"primary",title:"\u91CD\u505A",disabled:!a.value,onClick:H},{icon:_(()=>[me]),_:1},8,["disabled"]),g(M,{type:"vertical"}),g(v,{type:"primary",title:"\u524D\u5F80\u9876\u90E8",onClick:O},{icon:_(()=>[_e]),_:1}),g(v,{type:"primary",title:"\u524D\u5F80\u5E95\u90E8",onClick:I},{icon:_(()=>[ve]),_:1})]),r("div",ke,[g($(U),{value:h.value,"onUpdate:value":j[0]||(j[0]=w=>h.value=w),lang:"json",theme:"textmate",style:{height:"100%"},options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:u,onChange:W},null,8,["value"])]),r("div",xe,[r("span",null,"\u603B\u884C\u6570:\xA0"+R(p.value)+"\xA0\xA0\u884C\u6570:\xA0"+R(m.value.row+1)+"\xA0\xA0\u5217\u6570:\xA0"+R(m.value.column+1),1)])]),r("div",ye,[r("div",be,[g(v,{type:"primary",title:"\u683C\u5F0F\u5316",onClick:A},{icon:_(()=>[Ce]),_:1}),g(M,{type:"vertical"}),g(v,{type:"primary",title:"\u64A4\u9500",disabled:!l.value,onClick:P},{icon:_(()=>[Se]),_:1},8,["disabled"]),g(v,{type:"primary",title:"\u91CD\u505A",disabled:!i.value,onClick:V},{icon:_(()=>[Re]),_:1},8,["disabled"]),g(M,{type:"vertical"}),g(v,{type:"primary",title:"\u8FD0\u884C",onClick:z},{icon:_(()=>[Me]),_:1})]),r("div",je,[g($(U),{value:S.value,"onUpdate:value":j[1]||(j[1]=w=>S.value=w),lang:"javascript",theme:"textmate",style:{height:"100%"},options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:c,onChange:E},null,8,["value"])]),r("div",Be,[r("span",null,"\u603B\u884C\u6570:\xA0"+R(t.value)+"\xA0\xA0\u884C\u6570:\xA0"+R(d.value.row+1)+"\xA0\xA0\u5217\u6570:\xA0"+R(d.value.column+1),1)])])])])}}},Ue=K(we,[["__scopeId","data-v-4d2aad09"]]);export{Ue as default};