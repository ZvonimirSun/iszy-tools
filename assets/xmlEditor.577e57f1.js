import{_ as E,L as B,o as M,n as I,s as _,b as v,w as C,a as N,z as L,ad as S,B as P,bi as W,bj as X}from"./index.49c484f0.js";/* empty css                */import{a as A,V as z}from"./ext-beautify.4463b338.js";import{D as O}from"./index.5076236e.js";var U={exports:{}};(function(w,F){ace.define("ace/mode/xml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,b,T){var h=r("../lib/oop"),p=r("./text_highlight_rules").TextHighlightRules,f=function(u){var m="[_:a-zA-Z\xC0-\uFFFF][-_:.a-zA-Z0-9\xC0-\uFFFF]*";this.$rules={start:[{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\[",next:"cdata"},{token:["punctuation.instruction.xml","keyword.instruction.xml"],regex:"(<\\?)("+m+")",next:"processing_instruction"},{token:"comment.start.xml",regex:"<\\!--",next:"comment"},{token:["xml-pe.doctype.xml","xml-pe.doctype.xml"],regex:"(<\\!)(DOCTYPE)(?=[\\s])",next:"doctype",caseInsensitive:!0},{include:"tag"},{token:"text.end-tag-open.xml",regex:"</"},{token:"text.tag-open.xml",regex:"<"},{include:"reference"},{defaultToken:"text.xml"}],processing_instruction:[{token:"entity.other.attribute-name.decl-attribute-name.xml",regex:m},{token:"keyword.operator.decl-attribute-equals.xml",regex:"="},{include:"whitespace"},{include:"string"},{token:"punctuation.xml-decl.xml",regex:"\\?>",next:"start"}],doctype:[{include:"whitespace"},{include:"string"},{token:"xml-pe.doctype.xml",regex:">",next:"start"},{token:"xml-pe.xml",regex:"[-_a-zA-Z0-9:]+"},{token:"punctuation.int-subset",regex:"\\[",push:"int_subset"}],int_subset:[{token:"text.xml",regex:"\\s+"},{token:"punctuation.int-subset.xml",regex:"]",next:"pop"},{token:["punctuation.markup-decl.xml","keyword.markup-decl.xml"],regex:"(<\\!)("+m+")",push:[{token:"text",regex:"\\s+"},{token:"punctuation.markup-decl.xml",regex:">",next:"pop"},{include:"string"}]}],cdata:[{token:"string.cdata.xml",regex:"\\]\\]>",next:"start"},{token:"text.xml",regex:"\\s+"},{token:"text.xml",regex:"(?:[^\\]]|\\](?!\\]>))+"}],comment:[{token:"comment.end.xml",regex:"-->",next:"start"},{defaultToken:"comment.xml"}],reference:[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],attr_reference:[{token:"constant.language.escape.reference.attribute-value.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],tag:[{token:["meta.tag.punctuation.tag-open.xml","meta.tag.punctuation.end-tag-open.xml","meta.tag.tag-name.xml"],regex:"(?:(<)|(</))((?:"+m+":)?"+m+")",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start"}]}],tag_whitespace:[{token:"text.tag-whitespace.xml",regex:"\\s+"}],whitespace:[{token:"text.whitespace.xml",regex:"\\s+"}],string:[{token:"string.xml",regex:"'",push:[{token:"string.xml",regex:"'",next:"pop"},{defaultToken:"string.xml"}]},{token:"string.xml",regex:'"',push:[{token:"string.xml",regex:'"',next:"pop"},{defaultToken:"string.xml"}]}],attributes:[{token:"entity.other.attribute-name.xml",regex:m},{token:"keyword.operator.attribute-equals.xml",regex:"="},{include:"tag_whitespace"},{include:"attribute_value"}],attribute_value:[{token:"string.attribute-value.xml",regex:"'",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]}]},this.constructor===f&&this.normalizeRules()};(function(){this.embedTagRules=function(u,m,g){this.$rules.tag.unshift({token:["meta.tag.punctuation.tag-open.xml","meta.tag."+g+".tag-name.xml"],regex:"(<)("+g+"(?=\\s|>|$))",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:m+"start"}]}),this.$rules[g+"-end"]=[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start",onMatch:function(c,o,n){return n.splice(0),this.token}}],this.embedRules(u,m,[{token:["meta.tag.punctuation.end-tag-open.xml","meta.tag."+g+".tag-name.xml"],regex:"(</)("+g+"(?=\\s|>|$))",next:g+"-end"},{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\["},{token:"string.cdata.xml",regex:"\\]\\]>"}])}}).call(p.prototype),h.inherits(f,p),b.XmlHighlightRules=f}),ace.define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(r,b,T){var h=r("../../lib/oop"),p=r("../behaviour").Behaviour,f=r("../../token_iterator").TokenIterator;r("../../lib/lang");function u(g,c){return g&&g.type.lastIndexOf(c+".xml")>-1}var m=function(){this.add("string_dquotes","insertion",function(g,c,o,n,e){if(e=='"'||e=="'"){var t=e,i=n.doc.getTextRange(o.getSelectionRange());if(i!==""&&i!=="'"&&i!='"'&&o.getWrapBehavioursEnabled())return{text:t+i+t,selection:!1};var a=o.getCursorPosition(),l=n.doc.getLine(a.row),s=l.substring(a.column,a.column+1),x=new f(n,a.row,a.column),d=x.getCurrentToken();if(s==t&&(u(d,"attribute-value")||u(d,"string")))return{text:"",selection:[1,1]};if(d||(d=x.stepBackward()),!d)return;for(;u(d,"tag-whitespace")||u(d,"whitespace");)d=x.stepBackward();var k=!s||s.match(/\s/);if(u(d,"attribute-equals")&&(k||s==">")||u(d,"decl-attribute-equals")&&(k||s=="?"))return{text:t+t,selection:[1,1]}}}),this.add("string_dquotes","deletion",function(g,c,o,n,e){var t=n.doc.getTextRange(e);if(!e.isMultiLine()&&(t=='"'||t=="'")){var i=n.doc.getLine(e.start.row),a=i.substring(e.start.column+1,e.start.column+2);if(a==t)return e.end.column++,e}}),this.add("autoclosing","insertion",function(g,c,o,n,e){if(e==">"){var t=o.getSelectionRange().start,i=new f(n,t.row,t.column),a=i.getCurrentToken()||i.stepBackward();if(!a||!(u(a,"tag-name")||u(a,"tag-whitespace")||u(a,"attribute-name")||u(a,"attribute-equals")||u(a,"attribute-value"))||u(a,"reference.attribute-value"))return;if(u(a,"attribute-value")){var l=i.getCurrentTokenColumn()+a.value.length;if(t.column<l)return;if(t.column==l){var s=i.stepForward();if(s&&u(s,"attribute-value"))return;i.stepBackward()}}if(/^\s*>/.test(n.getLine(t.row).slice(t.column)))return;for(;!u(a,"tag-name");)if(a=i.stepBackward(),a.value=="<"){a=i.stepForward();break}var x=i.getCurrentTokenRow(),d=i.getCurrentTokenColumn();if(u(i.stepBackward(),"end-tag-open"))return;var k=a.value;return x==t.row&&(k=k.substring(0,t.column-d)),this.voidElements.hasOwnProperty(k.toLowerCase())?void 0:{text:"></"+k+">",selection:[1,1]}}}),this.add("autoindent","insertion",function(g,c,o,n,e){if(e==`
`){var t=o.getCursorPosition(),i=n.getLine(t.row),a=new f(n,t.row,t.column),l=a.getCurrentToken();if(l&&l.type.indexOf("tag-close")!==-1){if(l.value=="/>")return;for(;l&&l.type.indexOf("tag-name")===-1;)l=a.stepBackward();if(!l)return;var s=l.value,x=a.getCurrentTokenRow();if(l=a.stepBackward(),!l||l.type.indexOf("end-tag")!==-1)return;if(this.voidElements&&!this.voidElements[s]){var d=n.getTokenAt(t.row,t.column+1),i=n.getLine(x),k=this.$getIndent(i),R=k+n.getTabString();return d&&d.value==="</"?{text:`
`+R+`
`+k,selection:[1,R.length,1,R.length]}:{text:`
`+R}}}}})};h.inherits(m,p),b.XmlBehaviour=m}),ace.define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/range","ace/mode/folding/fold_mode","ace/token_iterator"],function(r,b,T){var h=r("../../lib/oop");r("../../lib/lang");var p=r("../../range").Range,f=r("./fold_mode").FoldMode,u=r("../../token_iterator").TokenIterator,m=b.FoldMode=function(o,n){f.call(this),this.voidElements=o||{},this.optionalEndTags=h.mixin({},this.voidElements),n&&h.mixin(this.optionalEndTags,n)};h.inherits(m,f);var g=function(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};function c(o,n){return o.type.lastIndexOf(n+".xml")>-1}(function(){this.getFoldWidget=function(o,n,e){var t=this._getFirstTagInLine(o,e);return t?t.closing||!t.tagName&&t.selfClosing?n=="markbeginend"?"end":"":!t.tagName||t.selfClosing||this.voidElements.hasOwnProperty(t.tagName.toLowerCase())||this._findEndTagInLine(o,e,t.tagName,t.end.column)?"":"start":this.getCommentFoldWidget(o,e)},this.getCommentFoldWidget=function(o,n){return/comment/.test(o.getState(n))&&/<!-/.test(o.getLine(n))?"start":""},this._getFirstTagInLine=function(o,n){for(var e=o.getTokens(n),t=new g,i=0;i<e.length;i++){var a=e[i];if(c(a,"tag-open")){if(t.end.column=t.start.column+a.value.length,t.closing=c(a,"end-tag-open"),a=e[++i],!a)return null;for(t.tagName=a.value,t.end.column+=a.value.length,i++;i<e.length;i++)if(a=e[i],t.end.column+=a.value.length,c(a,"tag-close")){t.selfClosing=a.value=="/>";break}return t}else if(c(a,"tag-close"))return t.selfClosing=a.value=="/>",t;t.start.column+=a.value.length}return null},this._findEndTagInLine=function(o,n,e,t){for(var i=o.getTokens(n),a=0,l=0;l<i.length;l++){var s=i[l];if(a+=s.value.length,!(a<t)&&c(s,"end-tag-open")&&(s=i[l+1],s&&s.value==e))return!0}return!1},this._readTagForward=function(o){var n=o.getCurrentToken();if(!n)return null;var e=new g;do if(c(n,"tag-open"))e.closing=c(n,"end-tag-open"),e.start.row=o.getCurrentTokenRow(),e.start.column=o.getCurrentTokenColumn();else if(c(n,"tag-name"))e.tagName=n.value;else if(c(n,"tag-close"))return e.selfClosing=n.value=="/>",e.end.row=o.getCurrentTokenRow(),e.end.column=o.getCurrentTokenColumn()+n.value.length,o.stepForward(),e;while(n=o.stepForward());return null},this._readTagBackward=function(o){var n=o.getCurrentToken();if(!n)return null;var e=new g;do{if(c(n,"tag-open"))return e.closing=c(n,"end-tag-open"),e.start.row=o.getCurrentTokenRow(),e.start.column=o.getCurrentTokenColumn(),o.stepBackward(),e;c(n,"tag-name")?e.tagName=n.value:c(n,"tag-close")&&(e.selfClosing=n.value=="/>",e.end.row=o.getCurrentTokenRow(),e.end.column=o.getCurrentTokenColumn()+n.value.length)}while(n=o.stepBackward());return null},this._pop=function(o,n){for(;o.length;){var e=o[o.length-1];if(!n||e.tagName==n.tagName)return o.pop();if(this.optionalEndTags.hasOwnProperty(e.tagName)){o.pop();continue}else return null}},this.getFoldWidgetRange=function(o,n,e){var t=this._getFirstTagInLine(o,e);if(!t)return this.getCommentFoldWidget(o,e)&&o.getCommentFoldRange(e,o.getLine(e).length);var i=t.closing||t.selfClosing,a=[],l;if(i)for(var s=new u(o,e,t.end.column),d={row:e,column:t.start.column};l=this._readTagBackward(s);){if(l.selfClosing){if(a.length)continue;return l.start.column+=l.tagName.length+2,l.end.column-=2,p.fromPoints(l.start,l.end)}if(l.closing)a.push(l);else if(this._pop(a,l),a.length==0)return l.start.column+=l.tagName.length+2,l.start.row==l.end.row&&l.start.column<l.end.column&&(l.start.column=l.end.column),p.fromPoints(l.start,d)}else{var s=new u(o,e,t.start.column),x={row:e,column:t.start.column+t.tagName.length+2};for(t.start.row==t.end.row&&(x.column=t.end.column);l=this._readTagForward(s);){if(l.selfClosing){if(a.length)continue;return l.start.column+=l.tagName.length+2,l.end.column-=2,p.fromPoints(l.start,l.end)}if(l.closing){if(this._pop(a,l),a.length==0)return p.fromPoints(x,l.start)}else a.push(l)}}}}).call(m.prototype)}),ace.define("ace/mode/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text","ace/mode/xml_highlight_rules","ace/mode/behaviour/xml","ace/mode/folding/xml","ace/worker/worker_client"],function(r,b,T){var h=r("../lib/oop"),p=r("../lib/lang"),f=r("./text").Mode,u=r("./xml_highlight_rules").XmlHighlightRules,m=r("./behaviour/xml").XmlBehaviour,g=r("./folding/xml").FoldMode,c=r("../worker/worker_client").WorkerClient,o=function(){this.HighlightRules=u,this.$behaviour=new m,this.foldingRules=new g};h.inherits(o,f),function(){this.voidElements=p.arrayToMap([]),this.blockComment={start:"<!--",end:"-->"},this.createWorker=function(n){var e=new c(["ace"],"ace/mode/xml_worker","Worker");return e.attachToDocument(n.getDocument()),e.on("error",function(t){n.setAnnotations(t.data)}),e.on("terminate",function(){n.clearAnnotations()}),e},this.$id="ace/mode/xml"}.call(o.prototype),b.Mode=o}),function(){ace.require(["ace/mode/xml"],function(r){w&&(w.exports=r)})}()})(U);var $={exports:{}};(function(w,F){(function(){ace.require(["ace/snippets/xml"],function(r){w&&(w.exports=r)})})()})($);var D="/assets/worker-xml.3a3ffe3a.js";const y=w=>(W("data-v-613ebcb5"),w=w(),X(),w),H={class:"codePanel"},Z={class:"header"},V=y(()=>_("span",{class:"i-icon-park-outline-indent-right"},null,-1)),j=y(()=>_("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),Y=y(()=>_("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),G=y(()=>_("span",{class:"i-icon-park-outline-undo"},null,-1)),J=y(()=>_("span",{class:"i-icon-park-outline-redo"},null,-1)),K=y(()=>_("span",{class:"i-icon-park-outline-to-top"},null,-1)),Q=y(()=>_("span",{class:"i-icon-park-outline-to-bottom"},null,-1)),q={class:"ace-container"},ee={class:"footer"},te={setup(w){A.config.setModuleUrl("ace/mode/xml_worker",D);const F=A.require("ace/ext/beautify");let r=null;const b=B(""),T=B({row:0,column:0}),h=B(0),p=B(!1),f=B(!1);function u(a){r=a,r.getSession().setTabSize(2),r.getSession().setUseSoftTabs(!0),r.setShowPrintMargin(!1),r.selection.on("changeCursor",()=>{T.value=r.selection.getCursor()}),T.value=r.selection.getCursor(),h.value=r.session.getLength()}function m(){r.session.foldAll()}function g(){r.session.unfold()}function c(){r.gotoLine(0)}function o(){F.beautify(r.session)}function n(){r.gotoLine(r.session.getLength())}async function e(){h.value=r.session.getLength(),await S();const a=r.session.getUndoManager();p.value=a.hasUndo(),f.value=a.hasRedo()}function t(){r.getSession().getUndoManager().undo()}function i(){r.getSession().getUndoManager().redo()}return(a,l)=>{const s=P,x=O;return M(),I("div",H,[_("div",Z,[v(s,{type:"primary",title:"\u683C\u5F0F\u5316",onClick:o},{icon:C(()=>[V]),_:1}),v(x,{type:"vertical"}),v(s,{type:"primary",title:"\u6298\u53E0\u6240\u6709",onClick:m},{icon:C(()=>[j]),_:1}),v(s,{type:"primary",title:"\u5C55\u5F00\u6240\u6709",onClick:g},{icon:C(()=>[Y]),_:1}),v(x,{type:"vertical"}),v(s,{type:"primary",title:"\u64A4\u9500",disabled:!p.value,onClick:t},{icon:C(()=>[G]),_:1},8,["disabled"]),v(s,{type:"primary",title:"\u91CD\u505A",disabled:!f.value,onClick:i},{icon:C(()=>[J]),_:1},8,["disabled"]),v(x,{type:"vertical"}),v(s,{type:"primary",title:"\u524D\u5F80\u9876\u90E8",onClick:c},{icon:C(()=>[K]),_:1}),v(s,{type:"primary",title:"\u524D\u5F80\u5E95\u90E8",onClick:n},{icon:C(()=>[Q]),_:1})]),_("div",q,[v(N(z),{value:b.value,"onUpdate:value":l[0]||(l[0]=d=>b.value=d),lang:"xml",theme:"textmate",style:{height:"100%"},options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:u,onChange:e},null,8,["value"])]),_("div",ee,[_("span",null,"\u603B\u884C\u6570:\xA0"+L(h.value)+"\xA0\xA0\u884C\u6570:\xA0"+L(T.value.row+1)+"\xA0\xA0\u5217\u6570:\xA0"+L(T.value.column+1),1)])])}}};var re=E(te,[["__scopeId","data-v-613ebcb5"]]);export{re as default};
