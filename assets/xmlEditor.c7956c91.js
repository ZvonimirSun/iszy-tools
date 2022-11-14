import{_ as M,r as R,o as F,J as S,K as _,a as v,w as T,ao as I,a0 as E,a6 as W,B as X,S as z,T as U}from"./index.835879a6.js";import{_ as $}from"./index.188319ca.js";import{a as L,V as N}from"./ext-beautify.b05c79eb.js";var O={exports:{}};(function(b,A){ace.define("ace/mode/xml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,w,y){var p=t("../lib/oop"),f=t("./text_highlight_rules").TextHighlightRules,x=function(s){var g="[_:a-zA-Z\xC0-\uFFFF][-_:.a-zA-Z0-9\xC0-\uFFFF]*";this.$rules={start:[{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\[",next:"cdata"},{token:["punctuation.instruction.xml","keyword.instruction.xml"],regex:"(<\\?)("+g+")",next:"processing_instruction"},{token:"comment.start.xml",regex:"<\\!--",next:"comment"},{token:["xml-pe.doctype.xml","xml-pe.doctype.xml"],regex:"(<\\!)(DOCTYPE)(?=[\\s])",next:"doctype",caseInsensitive:!0},{include:"tag"},{token:"text.end-tag-open.xml",regex:"</"},{token:"text.tag-open.xml",regex:"<"},{include:"reference"},{defaultToken:"text.xml"}],processing_instruction:[{token:"entity.other.attribute-name.decl-attribute-name.xml",regex:g},{token:"keyword.operator.decl-attribute-equals.xml",regex:"="},{include:"whitespace"},{include:"string"},{token:"punctuation.xml-decl.xml",regex:"\\?>",next:"start"}],doctype:[{include:"whitespace"},{include:"string"},{token:"xml-pe.doctype.xml",regex:">",next:"start"},{token:"xml-pe.xml",regex:"[-_a-zA-Z0-9:]+"},{token:"punctuation.int-subset",regex:"\\[",push:"int_subset"}],int_subset:[{token:"text.xml",regex:"\\s+"},{token:"punctuation.int-subset.xml",regex:"]",next:"pop"},{token:["punctuation.markup-decl.xml","keyword.markup-decl.xml"],regex:"(<\\!)("+g+")",push:[{token:"text",regex:"\\s+"},{token:"punctuation.markup-decl.xml",regex:">",next:"pop"},{include:"string"}]}],cdata:[{token:"string.cdata.xml",regex:"\\]\\]>",next:"start"},{token:"text.xml",regex:"\\s+"},{token:"text.xml",regex:"(?:[^\\]]|\\](?!\\]>))+"}],comment:[{token:"comment.end.xml",regex:"-->",next:"start"},{defaultToken:"comment.xml"}],reference:[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],attr_reference:[{token:"constant.language.escape.reference.attribute-value.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],tag:[{token:["meta.tag.punctuation.tag-open.xml","meta.tag.punctuation.end-tag-open.xml","meta.tag.tag-name.xml"],regex:"(?:(<)|(</))((?:"+g+":)?"+g+")",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start"}]}],tag_whitespace:[{token:"text.tag-whitespace.xml",regex:"\\s+"}],whitespace:[{token:"text.whitespace.xml",regex:"\\s+"}],string:[{token:"string.xml",regex:"'",push:[{token:"string.xml",regex:"'",next:"pop"},{defaultToken:"string.xml"}]},{token:"string.xml",regex:'"',push:[{token:"string.xml",regex:'"',next:"pop"},{defaultToken:"string.xml"}]}],attributes:[{token:"entity.other.attribute-name.xml",regex:g},{token:"keyword.operator.attribute-equals.xml",regex:"="},{include:"tag_whitespace"},{include:"attribute_value"}],attribute_value:[{token:"string.attribute-value.xml",regex:"'",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]}]},this.constructor===x&&this.normalizeRules()};(function(){this.embedTagRules=function(s,g,c){this.$rules.tag.unshift({token:["meta.tag.punctuation.tag-open.xml","meta.tag."+c+".tag-name.xml"],regex:"(<)("+c+"(?=\\s|>|$))",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:g+"start"}]}),this.$rules[c+"-end"]=[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start",onMatch:function(l,r,a){return a.splice(0),this.token}}],this.embedRules(s,g,[{token:["meta.tag.punctuation.end-tag-open.xml","meta.tag."+c+".tag-name.xml"],regex:"(</)("+c+"(?=\\s|>|$))",next:c+"-end"},{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\["},{token:"string.cdata.xml",regex:"\\]\\]>"}])}}).call(f.prototype),p.inherits(x,f),w.XmlHighlightRules=x}),ace.define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(t,w,y){var p=t("../../lib/oop"),f=t("../behaviour").Behaviour,x=t("../../token_iterator").TokenIterator;t("../../lib/lang");function s(c,l){return c&&c.type.lastIndexOf(l+".xml")>-1}var g=function(){this.add("string_dquotes","insertion",function(c,l,r,a,e){if(e=='"'||e=="'"){var n=e,o=a.doc.getTextRange(r.getSelectionRange());if(o!==""&&o!=="'"&&o!='"'&&r.getWrapBehavioursEnabled())return{text:n+o+n,selection:!1};var i=r.getCursorPosition(),u=a.doc.getLine(i.row),d=u.substring(i.column,i.column+1),h=new x(a,i.row,i.column),m=h.getCurrentToken();if(d==n&&(s(m,"attribute-value")||s(m,"string")))return{text:"",selection:[1,1]};if(m||(m=h.stepBackward()),!m)return;for(;s(m,"tag-whitespace")||s(m,"whitespace");)m=h.stepBackward();var k=!d||d.match(/\s/);if(s(m,"attribute-equals")&&(k||d==">")||s(m,"decl-attribute-equals")&&(k||d=="?"))return{text:n+n,selection:[1,1]}}}),this.add("string_dquotes","deletion",function(c,l,r,a,e){var n=a.doc.getTextRange(e);if(!e.isMultiLine()&&(n=='"'||n=="'")){var o=a.doc.getLine(e.start.row),i=o.substring(e.start.column+1,e.start.column+2);if(i==n)return e.end.column++,e}}),this.add("autoclosing","insertion",function(c,l,r,a,e){if(e==">"){var n=r.getSelectionRange().start,o=new x(a,n.row,n.column),i=o.getCurrentToken()||o.stepBackward();if(!i||!(s(i,"tag-name")||s(i,"tag-whitespace")||s(i,"attribute-name")||s(i,"attribute-equals")||s(i,"attribute-value"))||s(i,"reference.attribute-value"))return;if(s(i,"attribute-value")){var u=o.getCurrentTokenColumn()+i.value.length;if(n.column<u)return;if(n.column==u){var d=o.stepForward();if(d&&s(d,"attribute-value"))return;o.stepBackward()}}if(/^\s*>/.test(a.getLine(n.row).slice(n.column)))return;for(;!s(i,"tag-name");)if(i=o.stepBackward(),i.value=="<"){i=o.stepForward();break}var h=o.getCurrentTokenRow(),m=o.getCurrentTokenColumn();if(s(o.stepBackward(),"end-tag-open"))return;var k=i.value;return h==n.row&&(k=k.substring(0,n.column-m)),this.voidElements.hasOwnProperty(k.toLowerCase())?void 0:{text:"></"+k+">",selection:[1,1]}}}),this.add("autoindent","insertion",function(c,l,r,a,e){if(e==`
`){var n=r.getCursorPosition(),o=a.getLine(n.row),i=new x(a,n.row,n.column),u=i.getCurrentToken();if(u&&u.type.indexOf("tag-close")!==-1){if(u.value=="/>")return;for(;u&&u.type.indexOf("tag-name")===-1;)u=i.stepBackward();if(!u)return;var d=u.value,h=i.getCurrentTokenRow();if(u=i.stepBackward(),!u||u.type.indexOf("end-tag")!==-1)return;if(this.voidElements&&!this.voidElements[d]){var m=a.getTokenAt(n.row,n.column+1),o=a.getLine(h),k=this.$getIndent(o),B=k+a.getTabString();return m&&m.value==="</"?{text:`
`+B+`
`+k,selection:[1,B.length,1,B.length]}:{text:`
`+B}}}}})};p.inherits(g,f),w.XmlBehaviour=g}),ace.define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(t,w,y){var p=t("../../lib/oop"),f=t("../../range").Range,x=t("./fold_mode").FoldMode,s=w.FoldMode=function(l,r){x.call(this),this.voidElements=l||{},this.optionalEndTags=p.mixin({},this.voidElements),r&&p.mixin(this.optionalEndTags,r)};p.inherits(s,x);var g=function(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};function c(l,r){return l.type.lastIndexOf(r+".xml")>-1}(function(){this.getFoldWidget=function(l,r,a){var e=this._getFirstTagInLine(l,a);return e?e.closing||!e.tagName&&e.selfClosing?r==="markbeginend"?"end":"":!e.tagName||e.selfClosing||this.voidElements.hasOwnProperty(e.tagName.toLowerCase())||this._findEndTagInLine(l,a,e.tagName,e.end.column)?"":"start":this.getCommentFoldWidget(l,a)},this.getCommentFoldWidget=function(l,r){return/comment/.test(l.getState(r))&&/<!-/.test(l.getLine(r))?"start":""},this._getFirstTagInLine=function(l,r){for(var a=l.getTokens(r),e=new g,n=0;n<a.length;n++){var o=a[n];if(c(o,"tag-open")){if(e.end.column=e.start.column+o.value.length,e.closing=c(o,"end-tag-open"),o=a[++n],!o)return null;for(e.tagName=o.value,e.end.column+=o.value.length,n++;n<a.length;n++)if(o=a[n],e.end.column+=o.value.length,c(o,"tag-close")){e.selfClosing=o.value=="/>";break}return e}else if(c(o,"tag-close"))return e.selfClosing=o.value=="/>",e;e.start.column+=o.value.length}return null},this._findEndTagInLine=function(l,r,a,e){for(var n=l.getTokens(r),o=0,i=0;i<n.length;i++){var u=n[i];if(o+=u.value.length,!(o<e)&&c(u,"end-tag-open")&&(u=n[i+1],u&&u.value==a))return!0}return!1},this.getFoldWidgetRange=function(l,r,a){var e=l.getMatchingTags({row:a,column:0});return e?new f(e.openTag.end.row,e.openTag.end.column,e.closeTag.start.row,e.closeTag.start.column):this.getCommentFoldWidget(l,a)&&l.getCommentFoldRange(a,l.getLine(a).length)}}).call(s.prototype)}),ace.define("ace/mode/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text","ace/mode/xml_highlight_rules","ace/mode/behaviour/xml","ace/mode/folding/xml","ace/worker/worker_client"],function(t,w,y){var p=t("../lib/oop"),f=t("../lib/lang"),x=t("./text").Mode,s=t("./xml_highlight_rules").XmlHighlightRules,g=t("./behaviour/xml").XmlBehaviour,c=t("./folding/xml").FoldMode,l=t("../worker/worker_client").WorkerClient,r=function(){this.HighlightRules=s,this.$behaviour=new g,this.foldingRules=new c};p.inherits(r,x),function(){this.voidElements=f.arrayToMap([]),this.blockComment={start:"<!--",end:"-->"},this.createWorker=function(a){var e=new l(["ace"],"ace/mode/xml_worker","Worker");return e.attachToDocument(a.getDocument()),e.on("error",function(n){a.setAnnotations(n.data)}),e.on("terminate",function(){a.clearAnnotations()}),e},this.$id="ace/mode/xml"}.call(r.prototype),w.Mode=r}),function(){ace.require(["ace/mode/xml"],function(t){b&&(b.exports=t)})}()})(O);var H={exports:{}};(function(b,A){(function(){ace.require(["ace/snippets/xml"],function(t){b&&(b.exports=t)})})()})(H);const P="/assets/worker-xml.8e56ba72.js";const C=b=>(z("data-v-97633f87"),b=b(),U(),b),D={class:"codePanel"},Z={class:"header"},V=C(()=>_("span",{class:"i-iszy-jsoneditor-format"},null,-1)),j=C(()=>_("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),J=C(()=>_("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),K=C(()=>_("span",{class:"i-icon-park-outline-undo"},null,-1)),Y=C(()=>_("span",{class:"i-icon-park-outline-redo"},null,-1)),G=C(()=>_("span",{class:"i-icon-park-outline-to-top"},null,-1)),Q=C(()=>_("span",{class:"i-icon-park-outline-to-bottom"},null,-1)),q={class:"ace-container"},ee={class:"footer"},te={__name:"xmlEditor",setup(b){L.config.setModuleUrl("ace/mode/xml_worker",P);const A=L.require("ace/ext/beautify");let t=null;const w=R(""),y=R({row:0,column:0}),p=R(0),f=R(!1),x=R(!1);function s(i){t=i,t.getSession().setTabSize(2),t.getSession().setUseSoftTabs(!0),t.setShowPrintMargin(!1),t.selection.on("changeCursor",()=>{y.value=t.selection.getCursor()}),y.value=t.selection.getCursor(),p.value=t.session.getLength()}function g(){t.session.foldAll()}function c(){t.session.unfold()}function l(){t.gotoLine(0)}function r(){A.beautify(t.session)}function a(){t.gotoLine(t.session.getLength())}async function e(){p.value=t.session.getLength(),await W();const i=t.session.getUndoManager();f.value=i.hasUndo(),x.value=i.hasRedo()}function n(){t.getSession().getUndoManager().undo()}function o(){t.getSession().getUndoManager().redo()}return(i,u)=>{const d=X,h=$;return F(),S("div",D,[_("div",Z,[v(d,{type:"primary",title:"\u683C\u5F0F\u5316",onClick:r},{icon:T(()=>[V]),_:1}),v(h,{type:"vertical"}),v(d,{type:"primary",title:"\u6298\u53E0\u6240\u6709",onClick:g},{icon:T(()=>[j]),_:1}),v(d,{type:"primary",title:"\u5C55\u5F00\u6240\u6709",onClick:c},{icon:T(()=>[J]),_:1}),v(h,{type:"vertical"}),v(d,{type:"primary",title:"\u64A4\u9500",disabled:!f.value,onClick:n},{icon:T(()=>[K]),_:1},8,["disabled"]),v(d,{type:"primary",title:"\u91CD\u505A",disabled:!x.value,onClick:o},{icon:T(()=>[Y]),_:1},8,["disabled"]),v(h,{type:"vertical"}),v(d,{type:"primary",title:"\u524D\u5F80\u9876\u90E8",onClick:l},{icon:T(()=>[G]),_:1}),v(d,{type:"primary",title:"\u524D\u5F80\u5E95\u90E8",onClick:a},{icon:T(()=>[Q]),_:1})]),_("div",q,[v(I(N),{value:w.value,"onUpdate:value":u[0]||(u[0]=m=>w.value=m),lang:"xml",theme:"textmate",style:{height:"100%"},options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:s,onChange:e},null,8,["value"])]),_("div",ee,[_("span",null,"\u603B\u884C\u6570:\xA0"+E(p.value)+"\xA0\xA0\u884C\u6570:\xA0"+E(y.value.row+1)+"\xA0\xA0\u5217\u6570:\xA0"+E(y.value.column+1),1)])])}}},ie=M(te,[["__scopeId","data-v-97633f87"]]);export{ie as default};
