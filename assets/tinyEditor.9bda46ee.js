import{_ as H,L as M,cw as N,M as j,ae as L,g as z,o as I,n as A,v as F,aV as D,s as v,b as w,w as _,a as S,y as O,B as P,bi as q,bj as W}from"./index.dce6f2f8.js";/* empty css               */import{a as E,V as B}from"./ext-beautify.214d634a.js";import{w as U}from"./worker-css.a58f3999.js";import{S as X}from"./index.bdac5992.js";import"./useFlexGapSupport.8b07d630.js";var Y={exports:{}};(function(y,C){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(c,h,$){var f=c("../lib/oop"),m=c("./text_highlight_rules").TextHighlightRules,d=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},d.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};f.inherits(d,m),d.getTagRule=function(o){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},d.getStartRule=function(o){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:o}},d.getEndRule=function(o){return{token:"comment.doc",regex:"\\*\\/",next:o}},h.DocCommentHighlightRules=d}),ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(c,h,$){var f=c("../lib/oop"),m=c("./doc_comment_highlight_rules").DocCommentHighlightRules,d=c("./text_highlight_rules").TextHighlightRules,o="[a-zA-Z\\$_\xA1-\uFFFF][a-zA-Z\\d\\$_\xA1-\uFFFF]*",p=function(i){var r=this.createKeywordMapper({"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},"identifier"),a="case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void",t="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";this.$rules={no_regex:[m.getStartRule("doc-start"),l("no_regex"),{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:["storage.type","punctuation.operator","support.function","punctuation.operator","entity.name.function","text","keyword.operator"],regex:"("+o+")(\\.)(prototype)(\\.)("+o+")(\\s*)(=)",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+o+")(\\.)("+o+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+o+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+o+")(\\.)("+o+")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","entity.name.function","text","paren.lparen"],regex:"(function)(\\s+)("+o+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","paren.lparen"],regex:"("+o+")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:`from(?=\\s*('|"))`},{token:"keyword",regex:"(?:"+a+")\\b",next:"start"},{token:["support.constant"],regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/},{token:r,regex:o},{token:"punctuation.operator",regex:/[.](?![.])/,next:"property"},{token:"storage.type",regex:/=>/,next:"start"},{token:"keyword.operator",regex:/--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"comment",regex:/^#!.*$/}],property:[{token:"text",regex:"\\s+"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+o+")(\\.)("+o+")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",next:"function_arguments"},{token:"punctuation.operator",regex:/[.](?![.])/},{token:"support.function",regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:"support.function.dom",regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:"support.constant",regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:"identifier",regex:o},{regex:"",token:"empty",next:"no_regex"}],start:[m.getStartRule("doc-start"),l("start"),{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],function_arguments:[{token:"variable.parameter",regex:o},{token:"punctuation.operator",regex:"[, ]+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],qqstring:[{token:"constant.language.escape",regex:t},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:t},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},(!i||!i.noES6)&&(this.$rules.no_regex.unshift({regex:"[{}]",onMatch:function(e,n,s){if(this.next=e=="{"?this.nextState:"",e=="{"&&s.length)s.unshift("start",n);else if(e=="}"&&s.length&&(s.shift(),this.next=s.shift(),this.next.indexOf("string")!=-1||this.next.indexOf("jsx")!=-1))return"paren.quasi.end";return e=="{"?"paren.lparen":"paren.rparen"},nextState:"start"},{token:"string.quasi.start",regex:/`/,push:[{token:"constant.language.escape",regex:t},{token:"paren.quasi.start",regex:/\${/,push:"start"},{token:"string.quasi.end",regex:/`/,next:"pop"},{defaultToken:"string.quasi"}]}),(!i||i.jsx!=!1)&&u.call(this)),this.embedRules(m,"doc-",[m.getEndRule("no_regex")]),this.normalizeRules()};f.inherits(p,d);function u(){var i=o.replace("\\d","\\d\\-"),r={onMatch:function(t,e,n){var s=t.charAt(1)=="/"?2:1;return s==1?(e!=this.nextState?n.unshift(this.next,this.nextState,0):n.unshift(this.next),n[2]++):s==2&&e==this.nextState&&(n[1]--,(!n[1]||n[1]<0)&&(n.shift(),n.shift())),[{type:"meta.tag.punctuation."+(s==1?"":"end-")+"tag-open.xml",value:t.slice(0,s)},{type:"meta.tag.tag-name.xml",value:t.substr(s)}]},regex:"</?"+i,next:"jsxAttributes",nextState:"jsx"};this.$rules.start.unshift(r);var a={regex:"{",token:"paren.quasi.start",push:"start"};this.$rules.jsx=[a,r,{include:"reference"},{defaultToken:"string"}],this.$rules.jsxAttributes=[{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",onMatch:function(t,e,n){return e==n[0]&&n.shift(),t.length==2&&(n[0]==this.nextState&&n[1]--,(!n[1]||n[1]<0)&&n.splice(0,2)),this.next=n[0]||"start",[{type:this.token,value:t}]},nextState:"jsx"},a,l("jsxAttributes"),{token:"entity.other.attribute-name.xml",regex:i},{token:"keyword.operator.attribute-equals.xml",regex:"="},{token:"text.tag-whitespace.xml",regex:"\\s+"},{token:"string.attribute-value.xml",regex:"'",stateName:"jsx_attr_q",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',stateName:"jsx_attr_qq",push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},r],this.$rules.reference=[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}]}function l(i){return[{token:"comment",regex:/\/\*/,next:[m.getTagRule(),{token:"comment",regex:"\\*\\/",next:i||"pop"},{defaultToken:"comment",caseInsensitive:!0}]},{token:"comment",regex:"\\/\\/",next:[m.getTagRule(),{token:"comment",regex:"$|^",next:i||"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}h.JavaScriptHighlightRules=p}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(c,h,$){var f=c("../range").Range,m=function(){};(function(){this.checkOutdent=function(d,o){return/^\s+$/.test(d)?/^\s*\}/.test(o):!1},this.autoOutdent=function(d,o){var p=d.getLine(o),u=p.match(/^(\s*\})/);if(!u)return 0;var l=u[1].length,i=d.findMatchingBracket({row:o,column:l});if(!i||i.row==o)return 0;var r=this.$getIndent(d.getLine(i.row));d.replace(new f(o,0,o,l-1),r)},this.$getIndent=function(d){return d.match(/^\s*/)[0]}}).call(m.prototype),h.MatchingBraceOutdent=m}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(c,h,$){var f=c("../../lib/oop"),m=c("../../range").Range,d=c("./fold_mode").FoldMode,o=h.FoldMode=function(p){p&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+p.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+p.end)))};f.inherits(o,d),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(p,u,l){var i=p.getLine(l);if(this.singleLineBlockCommentRe.test(i)&&!this.startRegionRe.test(i)&&!this.tripleStarBlockCommentRe.test(i))return"";var r=this._getFoldWidgetBase(p,u,l);return!r&&this.startRegionRe.test(i)?"start":r},this.getFoldWidgetRange=function(p,u,l,i){var r=p.getLine(l);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(p,r,l);var e=r.match(this.foldingStartMarker);if(e){var a=e.index;if(e[1])return this.openingBracketBlock(p,e[1],l,a);var t=p.getCommentFoldRange(l,a+e[0].length,1);return t&&!t.isMultiLine()&&(i?t=this.getSectionRange(p,l):u!="all"&&(t=null)),t}if(u!=="markbegin"){var e=r.match(this.foldingStopMarker);if(e){var a=e.index+e[0].length;return e[1]?this.closingBracketBlock(p,e[1],l,a):p.getCommentFoldRange(l,a,-1)}}},this.getSectionRange=function(p,u){var l=p.getLine(u),i=l.search(/\S/),r=u,a=l.length;u=u+1;for(var t=u,e=p.getLength();++u<e;){l=p.getLine(u);var n=l.search(/\S/);if(n!==-1){if(i>n)break;var s=this.getFoldWidgetRange(p,"all",u);if(s){if(s.start.row<=r)break;if(s.isMultiLine())u=s.end.row;else if(i==n)break}t=u}}return new m(r,a,t,p.getLine(t).length)},this.getCommentRegionBlock=function(p,u,l){for(var i=u.search(/\s*$/),r=p.getLength(),a=l,t=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,e=1;++l<r;){u=p.getLine(l);var n=t.exec(u);if(!!n&&(n[1]?e--:e++,!e))break}var s=l;if(s>a)return new m(a,i,s,u.length)}}.call(o.prototype)}),ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(c,h,$){var f=c("../lib/oop"),m=c("./text").Mode,d=c("./javascript_highlight_rules").JavaScriptHighlightRules,o=c("./matching_brace_outdent").MatchingBraceOutdent,p=c("../worker/worker_client").WorkerClient,u=c("./behaviour/cstyle").CstyleBehaviour,l=c("./folding/cstyle").FoldMode,i=function(){this.HighlightRules=d,this.$outdent=new o,this.$behaviour=new u,this.foldingRules=new l};f.inherits(i,m),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.getNextLineIndent=function(r,a,t){var e=this.$getIndent(a),n=this.getTokenizer().getLineTokens(a,r),s=n.tokens,g=n.state;if(s.length&&s[s.length-1].type=="comment")return e;if(r=="start"||r=="no_regex"){var x=a.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);x&&(e+=t)}else if(r=="doc-start"){if(g=="start"||g=="no_regex")return"";var x=a.match(/^\s*(\/?)\*/);x&&(x[1]&&(e+=" "),e+="* ")}return e},this.checkOutdent=function(r,a,t){return this.$outdent.checkOutdent(a,t)},this.autoOutdent=function(r,a,t){this.$outdent.autoOutdent(a,t)},this.createWorker=function(r){var a=new p(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return a.attachToDocument(r.getDocument()),a.on("annotate",function(t){r.setAnnotations(t.data)}),a.on("terminate",function(){r.clearAnnotations()}),a},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}.call(i.prototype),h.Mode=i}),function(){ace.require(["ace/mode/javascript"],function(c){y&&(y.exports=c)})}()})(Y);var V={exports:{}};(function(y,C){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(c,h,$){var f=c("../lib/oop"),m=c("./text_highlight_rules").TextHighlightRules,d=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},d.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};f.inherits(d,m),d.getTagRule=function(o){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},d.getStartRule=function(o){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:o}},d.getEndRule=function(o){return{token:"comment.doc",regex:"\\*\\/",next:o}},h.DocCommentHighlightRules=d}),ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(c,h,$){var f=c("../lib/oop"),m=c("./doc_comment_highlight_rules").DocCommentHighlightRules,d=c("./text_highlight_rules").TextHighlightRules,o="[a-zA-Z\\$_\xA1-\uFFFF][a-zA-Z\\d\\$_\xA1-\uFFFF]*",p=function(i){var r=this.createKeywordMapper({"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},"identifier"),a="case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void",t="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";this.$rules={no_regex:[m.getStartRule("doc-start"),l("no_regex"),{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:["storage.type","punctuation.operator","support.function","punctuation.operator","entity.name.function","text","keyword.operator"],regex:"("+o+")(\\.)(prototype)(\\.)("+o+")(\\s*)(=)",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+o+")(\\.)("+o+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+o+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+o+")(\\.)("+o+")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","entity.name.function","text","paren.lparen"],regex:"(function)(\\s+)("+o+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","paren.lparen"],regex:"("+o+")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:`from(?=\\s*('|"))`},{token:"keyword",regex:"(?:"+a+")\\b",next:"start"},{token:["support.constant"],regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/},{token:r,regex:o},{token:"punctuation.operator",regex:/[.](?![.])/,next:"property"},{token:"storage.type",regex:/=>/,next:"start"},{token:"keyword.operator",regex:/--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"comment",regex:/^#!.*$/}],property:[{token:"text",regex:"\\s+"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+o+")(\\.)("+o+")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",next:"function_arguments"},{token:"punctuation.operator",regex:/[.](?![.])/},{token:"support.function",regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:"support.function.dom",regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:"support.constant",regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:"identifier",regex:o},{regex:"",token:"empty",next:"no_regex"}],start:[m.getStartRule("doc-start"),l("start"),{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],function_arguments:[{token:"variable.parameter",regex:o},{token:"punctuation.operator",regex:"[, ]+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],qqstring:[{token:"constant.language.escape",regex:t},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:t},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},(!i||!i.noES6)&&(this.$rules.no_regex.unshift({regex:"[{}]",onMatch:function(e,n,s){if(this.next=e=="{"?this.nextState:"",e=="{"&&s.length)s.unshift("start",n);else if(e=="}"&&s.length&&(s.shift(),this.next=s.shift(),this.next.indexOf("string")!=-1||this.next.indexOf("jsx")!=-1))return"paren.quasi.end";return e=="{"?"paren.lparen":"paren.rparen"},nextState:"start"},{token:"string.quasi.start",regex:/`/,push:[{token:"constant.language.escape",regex:t},{token:"paren.quasi.start",regex:/\${/,push:"start"},{token:"string.quasi.end",regex:/`/,next:"pop"},{defaultToken:"string.quasi"}]}),(!i||i.jsx!=!1)&&u.call(this)),this.embedRules(m,"doc-",[m.getEndRule("no_regex")]),this.normalizeRules()};f.inherits(p,d);function u(){var i=o.replace("\\d","\\d\\-"),r={onMatch:function(t,e,n){var s=t.charAt(1)=="/"?2:1;return s==1?(e!=this.nextState?n.unshift(this.next,this.nextState,0):n.unshift(this.next),n[2]++):s==2&&e==this.nextState&&(n[1]--,(!n[1]||n[1]<0)&&(n.shift(),n.shift())),[{type:"meta.tag.punctuation."+(s==1?"":"end-")+"tag-open.xml",value:t.slice(0,s)},{type:"meta.tag.tag-name.xml",value:t.substr(s)}]},regex:"</?"+i,next:"jsxAttributes",nextState:"jsx"};this.$rules.start.unshift(r);var a={regex:"{",token:"paren.quasi.start",push:"start"};this.$rules.jsx=[a,r,{include:"reference"},{defaultToken:"string"}],this.$rules.jsxAttributes=[{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",onMatch:function(t,e,n){return e==n[0]&&n.shift(),t.length==2&&(n[0]==this.nextState&&n[1]--,(!n[1]||n[1]<0)&&n.splice(0,2)),this.next=n[0]||"start",[{type:this.token,value:t}]},nextState:"jsx"},a,l("jsxAttributes"),{token:"entity.other.attribute-name.xml",regex:i},{token:"keyword.operator.attribute-equals.xml",regex:"="},{token:"text.tag-whitespace.xml",regex:"\\s+"},{token:"string.attribute-value.xml",regex:"'",stateName:"jsx_attr_q",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',stateName:"jsx_attr_qq",push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},r],this.$rules.reference=[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}]}function l(i){return[{token:"comment",regex:/\/\*/,next:[m.getTagRule(),{token:"comment",regex:"\\*\\/",next:i||"pop"},{defaultToken:"comment",caseInsensitive:!0}]},{token:"comment",regex:"\\/\\/",next:[m.getTagRule(),{token:"comment",regex:"$|^",next:i||"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}h.JavaScriptHighlightRules=p}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(c,h,$){var f=c("../range").Range,m=function(){};(function(){this.checkOutdent=function(d,o){return/^\s+$/.test(d)?/^\s*\}/.test(o):!1},this.autoOutdent=function(d,o){var p=d.getLine(o),u=p.match(/^(\s*\})/);if(!u)return 0;var l=u[1].length,i=d.findMatchingBracket({row:o,column:l});if(!i||i.row==o)return 0;var r=this.$getIndent(d.getLine(i.row));d.replace(new f(o,0,o,l-1),r)},this.$getIndent=function(d){return d.match(/^\s*/)[0]}}).call(m.prototype),h.MatchingBraceOutdent=m}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(c,h,$){var f=c("../../lib/oop"),m=c("../../range").Range,d=c("./fold_mode").FoldMode,o=h.FoldMode=function(p){p&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+p.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+p.end)))};f.inherits(o,d),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(p,u,l){var i=p.getLine(l);if(this.singleLineBlockCommentRe.test(i)&&!this.startRegionRe.test(i)&&!this.tripleStarBlockCommentRe.test(i))return"";var r=this._getFoldWidgetBase(p,u,l);return!r&&this.startRegionRe.test(i)?"start":r},this.getFoldWidgetRange=function(p,u,l,i){var r=p.getLine(l);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(p,r,l);var e=r.match(this.foldingStartMarker);if(e){var a=e.index;if(e[1])return this.openingBracketBlock(p,e[1],l,a);var t=p.getCommentFoldRange(l,a+e[0].length,1);return t&&!t.isMultiLine()&&(i?t=this.getSectionRange(p,l):u!="all"&&(t=null)),t}if(u!=="markbegin"){var e=r.match(this.foldingStopMarker);if(e){var a=e.index+e[0].length;return e[1]?this.closingBracketBlock(p,e[1],l,a):p.getCommentFoldRange(l,a,-1)}}},this.getSectionRange=function(p,u){var l=p.getLine(u),i=l.search(/\S/),r=u,a=l.length;u=u+1;for(var t=u,e=p.getLength();++u<e;){l=p.getLine(u);var n=l.search(/\S/);if(n!==-1){if(i>n)break;var s=this.getFoldWidgetRange(p,"all",u);if(s){if(s.start.row<=r)break;if(s.isMultiLine())u=s.end.row;else if(i==n)break}t=u}}return new m(r,a,t,p.getLine(t).length)},this.getCommentRegionBlock=function(p,u,l){for(var i=u.search(/\s*$/),r=p.getLength(),a=l,t=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,e=1;++l<r;){u=p.getLine(l);var n=t.exec(u);if(!!n&&(n[1]?e--:e++,!e))break}var s=l;if(s>a)return new m(a,i,s,u.length)}}.call(o.prototype)}),ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(c,h,$){var f=c("../lib/oop"),m=c("./text").Mode,d=c("./javascript_highlight_rules").JavaScriptHighlightRules,o=c("./matching_brace_outdent").MatchingBraceOutdent,p=c("../worker/worker_client").WorkerClient,u=c("./behaviour/cstyle").CstyleBehaviour,l=c("./folding/cstyle").FoldMode,i=function(){this.HighlightRules=d,this.$outdent=new o,this.$behaviour=new u,this.foldingRules=new l};f.inherits(i,m),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.getNextLineIndent=function(r,a,t){var e=this.$getIndent(a),n=this.getTokenizer().getLineTokens(a,r),s=n.tokens,g=n.state;if(s.length&&s[s.length-1].type=="comment")return e;if(r=="start"||r=="no_regex"){var x=a.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);x&&(e+=t)}else if(r=="doc-start"){if(g=="start"||g=="no_regex")return"";var x=a.match(/^\s*(\/?)\*/);x&&(x[1]&&(e+=" "),e+="* ")}return e},this.checkOutdent=function(r,a,t){return this.$outdent.checkOutdent(a,t)},this.autoOutdent=function(r,a,t){this.$outdent.autoOutdent(a,t)},this.createWorker=function(r){var a=new p(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return a.attachToDocument(r.getDocument()),a.on("annotate",function(t){r.setAnnotations(t.data)}),a.on("terminate",function(){r.clearAnnotations()}),a},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}.call(i.prototype),h.Mode=i}),ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(c,h,$){var f=c("../lib/oop");c("../lib/lang");var m=c("./text_highlight_rules").TextHighlightRules,d=h.supportType="align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index",o=h.supportFunction="rgb|rgba|url|attr|counter|counters",p=h.supportConstant="absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom",u=h.supportConstantColor="aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen",l=h.supportConstantFonts="arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace",i=h.numRe="\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))",r=h.pseudoElements="(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b",a=h.pseudoClasses="(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b",t=function(){var e=this.createKeywordMapper({"support.function":o,"support.constant":p,"support.type":d,"support.constant.color":u,"support.constant.fonts":l},"text",!0);this.$rules={start:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"ruleset"},{token:"paren.rparen",regex:"\\}"},{token:"string",regex:"@(?!viewport)",next:"media"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"keyword",regex:"%"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant.numeric",regex:i},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:!0}],media:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"start"},{token:"paren.rparen",regex:"\\}",next:"start"},{token:"string",regex:";",next:"start"},{token:"keyword",regex:"(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"}],comments:[{token:"comment",regex:"\\/\\*",push:[{token:"comment",regex:"\\*\\/",next:"pop"},{defaultToken:"comment"}]}],ruleset:[{regex:"-(webkit|ms|moz|o)-",token:"text"},{token:"punctuation.operator",regex:"[:;]"},{token:"paren.rparen",regex:"\\}",next:"start"},{include:["strings","url","comments"]},{token:["constant.numeric","keyword"],regex:"("+i+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"},{token:"constant.numeric",regex:i},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:["punctuation","entity.other.attribute-name.pseudo-element.css"],regex:r},{token:["punctuation","entity.other.attribute-name.pseudo-class.css"],regex:a},{include:"url"},{token:e,regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"},{caseInsensitive:!0}],url:[{token:"support.function",regex:"(?:url(:?-prefix)?|domain|regexp)\\(",push:[{token:"support.function",regex:"\\)",next:"pop"},{defaultToken:"string"}]}],strings:[{token:"string.start",regex:"'",push:[{token:"string.end",regex:"'|$",next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]},{token:"string.start",regex:'"',push:[{token:"string.end",regex:'"|$',next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]}],escapes:[{token:"constant.language.escape",regex:/\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/}]},this.normalizeRules()};f.inherits(t,m),h.CssHighlightRules=t}),ace.define("ace/mode/css_completions",["require","exports","module"],function(c,h,$){var f={background:{"#$0":1},"background-color":{"#$0":1,transparent:1,fixed:1},"background-image":{"url('/$0')":1},"background-repeat":{repeat:1,"repeat-x":1,"repeat-y":1,"no-repeat":1,inherit:1},"background-position":{bottom:2,center:2,left:2,right:2,top:2,inherit:2},"background-attachment":{scroll:1,fixed:1},"background-size":{cover:1,contain:1},"background-clip":{"border-box":1,"padding-box":1,"content-box":1},"background-origin":{"border-box":1,"padding-box":1,"content-box":1},border:{"solid $0":1,"dashed $0":1,"dotted $0":1,"#$0":1},"border-color":{"#$0":1},"border-style":{solid:2,dashed:2,dotted:2,double:2,groove:2,hidden:2,inherit:2,inset:2,none:2,outset:2,ridged:2},"border-collapse":{collapse:1,separate:1},bottom:{px:1,em:1,"%":1},clear:{left:1,right:1,both:1,none:1},color:{"#$0":1,"rgb(#$00,0,0)":1},cursor:{default:1,pointer:1,move:1,text:1,wait:1,help:1,progress:1,"n-resize":1,"ne-resize":1,"e-resize":1,"se-resize":1,"s-resize":1,"sw-resize":1,"w-resize":1,"nw-resize":1},display:{none:1,block:1,inline:1,"inline-block":1,"table-cell":1},"empty-cells":{show:1,hide:1},float:{left:1,right:1,none:1},"font-family":{Arial:2,"Comic Sans MS":2,Consolas:2,"Courier New":2,Courier:2,Georgia:2,Monospace:2,"Sans-Serif":2,"Segoe UI":2,Tahoma:2,"Times New Roman":2,"Trebuchet MS":2,Verdana:1},"font-size":{px:1,em:1,"%":1},"font-weight":{bold:1,normal:1},"font-style":{italic:1,normal:1},"font-variant":{normal:1,"small-caps":1},height:{px:1,em:1,"%":1},left:{px:1,em:1,"%":1},"letter-spacing":{normal:1},"line-height":{normal:1},"list-style-type":{none:1,disc:1,circle:1,square:1,decimal:1,"decimal-leading-zero":1,"lower-roman":1,"upper-roman":1,"lower-greek":1,"lower-latin":1,"upper-latin":1,georgian:1,"lower-alpha":1,"upper-alpha":1},margin:{px:1,em:1,"%":1},"margin-right":{px:1,em:1,"%":1},"margin-left":{px:1,em:1,"%":1},"margin-top":{px:1,em:1,"%":1},"margin-bottom":{px:1,em:1,"%":1},"max-height":{px:1,em:1,"%":1},"max-width":{px:1,em:1,"%":1},"min-height":{px:1,em:1,"%":1},"min-width":{px:1,em:1,"%":1},overflow:{hidden:1,visible:1,auto:1,scroll:1},"overflow-x":{hidden:1,visible:1,auto:1,scroll:1},"overflow-y":{hidden:1,visible:1,auto:1,scroll:1},padding:{px:1,em:1,"%":1},"padding-top":{px:1,em:1,"%":1},"padding-right":{px:1,em:1,"%":1},"padding-bottom":{px:1,em:1,"%":1},"padding-left":{px:1,em:1,"%":1},"page-break-after":{auto:1,always:1,avoid:1,left:1,right:1},"page-break-before":{auto:1,always:1,avoid:1,left:1,right:1},position:{absolute:1,relative:1,fixed:1,static:1},right:{px:1,em:1,"%":1},"table-layout":{fixed:1,auto:1},"text-decoration":{none:1,underline:1,"line-through":1,blink:1},"text-align":{left:1,right:1,center:1,justify:1},"text-transform":{capitalize:1,uppercase:1,lowercase:1,none:1},top:{px:1,em:1,"%":1},"vertical-align":{top:1,bottom:1},visibility:{hidden:1,visible:1},"white-space":{nowrap:1,normal:1,pre:1,"pre-line":1,"pre-wrap":1},width:{px:1,em:1,"%":1},"word-spacing":{normal:1},filter:{"alpha(opacity=$0100)":1},"text-shadow":{"$02px 2px 2px #777":1},"text-overflow":{"ellipsis-word":1,clip:1,ellipsis:1},"-moz-border-radius":1,"-moz-border-radius-topright":1,"-moz-border-radius-bottomright":1,"-moz-border-radius-topleft":1,"-moz-border-radius-bottomleft":1,"-webkit-border-radius":1,"-webkit-border-top-right-radius":1,"-webkit-border-top-left-radius":1,"-webkit-border-bottom-right-radius":1,"-webkit-border-bottom-left-radius":1,"-moz-box-shadow":1,"-webkit-box-shadow":1,transform:{"rotate($00deg)":1,"skew($00deg)":1},"-moz-transform":{"rotate($00deg)":1,"skew($00deg)":1},"-webkit-transform":{"rotate($00deg)":1,"skew($00deg)":1}},m=function(){};(function(){this.completionsDefined=!1,this.defineCompletions=function(){if(document){var d=document.createElement("c").style;for(var o in d)if(typeof d[o]=="string"){var p=o.replace(/[A-Z]/g,function(u){return"-"+u.toLowerCase()});f.hasOwnProperty(p)||(f[p]=1)}}this.completionsDefined=!0},this.getCompletions=function(d,o,p,u){if(this.completionsDefined||this.defineCompletions(),d==="ruleset"||o.$mode.$id=="ace/mode/scss"){var l=o.getLine(p.row).substr(0,p.column);return/:[^;]+$/.test(l)?(/([\w\-]+):[^:]*$/.test(l),this.getPropertyValueCompletions(d,o,p,u)):this.getPropertyCompletions(d,o,p,u)}return[]},this.getPropertyCompletions=function(d,o,p,u){var l=Object.keys(f);return l.map(function(i){return{caption:i,snippet:i+": $0;",meta:"property",score:1e6}})},this.getPropertyValueCompletions=function(d,o,p,u){var l=o.getLine(p.row).substr(0,p.column),i=(/([\w\-]+):[^:]*$/.exec(l)||{})[1];if(!i)return[];var r=[];return i in f&&typeof f[i]=="object"&&(r=Object.keys(f[i])),r.map(function(a){return{caption:a,snippet:a,meta:"property value",score:1e6}})}}).call(m.prototype),h.CssCompletions=m}),ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"],function(c,h,$){var f=c("../../lib/oop");c("../behaviour").Behaviour;var m=c("./cstyle").CstyleBehaviour,d=c("../../token_iterator").TokenIterator,o=function(){this.inherit(m),this.add("colon","insertion",function(p,u,l,i,r){if(r===":"&&l.selection.isEmpty()){var a=l.getCursorPosition(),t=new d(i,a.row,a.column),e=t.getCurrentToken();if(e&&e.value.match(/\s+/)&&(e=t.stepBackward()),e&&e.type==="support.type"){var n=i.doc.getLine(a.row),s=n.substring(a.column,a.column+1);if(s===":")return{text:"",selection:[1,1]};if(/^(\s+[^;]|\s*$)/.test(n.substring(a.column)))return{text:":;",selection:[1,1]}}}}),this.add("colon","deletion",function(p,u,l,i,r){var a=i.doc.getTextRange(r);if(!r.isMultiLine()&&a===":"){var t=l.getCursorPosition(),e=new d(i,t.row,t.column),n=e.getCurrentToken();if(n&&n.value.match(/\s+/)&&(n=e.stepBackward()),n&&n.type==="support.type"){var s=i.doc.getLine(r.start.row),g=s.substring(r.end.column,r.end.column+1);if(g===";")return r.end.column++,r}}}),this.add("semicolon","insertion",function(p,u,l,i,r){if(r===";"&&l.selection.isEmpty()){var a=l.getCursorPosition(),t=i.doc.getLine(a.row),e=t.substring(a.column,a.column+1);if(e===";")return{text:"",selection:[1,1]}}}),this.add("!important","insertion",function(p,u,l,i,r){if(r==="!"&&l.selection.isEmpty()){var a=l.getCursorPosition(),t=i.doc.getLine(a.row);if(/^\s*(;|}|$)/.test(t.substring(a.column)))return{text:"!important",selection:[10,10]}}})};f.inherits(o,m),h.CssBehaviour=o}),ace.define("ace/mode/css",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/css_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/css_completions","ace/mode/behaviour/css","ace/mode/folding/cstyle"],function(c,h,$){var f=c("../lib/oop"),m=c("./text").Mode,d=c("./css_highlight_rules").CssHighlightRules,o=c("./matching_brace_outdent").MatchingBraceOutdent,p=c("../worker/worker_client").WorkerClient,u=c("./css_completions").CssCompletions,l=c("./behaviour/css").CssBehaviour,i=c("./folding/cstyle").FoldMode,r=function(){this.HighlightRules=d,this.$outdent=new o,this.$behaviour=new l,this.$completer=new u,this.foldingRules=new i};f.inherits(r,m),function(){this.foldingRules="cStyle",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(a,t,e){var n=this.$getIndent(t),s=this.getTokenizer().getLineTokens(t,a).tokens;if(s.length&&s[s.length-1].type=="comment")return n;var g=t.match(/^.*\{\s*$/);return g&&(n+=e),n},this.checkOutdent=function(a,t,e){return this.$outdent.checkOutdent(t,e)},this.autoOutdent=function(a,t,e){this.$outdent.autoOutdent(t,e)},this.getCompletions=function(a,t,e,n){return this.$completer.getCompletions(a,t,e,n)},this.createWorker=function(a){var t=new p(["ace"],"ace/mode/css_worker","Worker");return t.attachToDocument(a.getDocument()),t.on("annotate",function(e){a.setAnnotations(e.data)}),t.on("terminate",function(){a.clearAnnotations()}),t},this.$id="ace/mode/css",this.snippetFileId="ace/snippets/css"}.call(r.prototype),h.Mode=r}),ace.define("ace/mode/xml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(c,h,$){var f=c("../lib/oop"),m=c("./text_highlight_rules").TextHighlightRules,d=function(o){var p="[_:a-zA-Z\xC0-\uFFFF][-_:.a-zA-Z0-9\xC0-\uFFFF]*";this.$rules={start:[{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\[",next:"cdata"},{token:["punctuation.instruction.xml","keyword.instruction.xml"],regex:"(<\\?)("+p+")",next:"processing_instruction"},{token:"comment.start.xml",regex:"<\\!--",next:"comment"},{token:["xml-pe.doctype.xml","xml-pe.doctype.xml"],regex:"(<\\!)(DOCTYPE)(?=[\\s])",next:"doctype",caseInsensitive:!0},{include:"tag"},{token:"text.end-tag-open.xml",regex:"</"},{token:"text.tag-open.xml",regex:"<"},{include:"reference"},{defaultToken:"text.xml"}],processing_instruction:[{token:"entity.other.attribute-name.decl-attribute-name.xml",regex:p},{token:"keyword.operator.decl-attribute-equals.xml",regex:"="},{include:"whitespace"},{include:"string"},{token:"punctuation.xml-decl.xml",regex:"\\?>",next:"start"}],doctype:[{include:"whitespace"},{include:"string"},{token:"xml-pe.doctype.xml",regex:">",next:"start"},{token:"xml-pe.xml",regex:"[-_a-zA-Z0-9:]+"},{token:"punctuation.int-subset",regex:"\\[",push:"int_subset"}],int_subset:[{token:"text.xml",regex:"\\s+"},{token:"punctuation.int-subset.xml",regex:"]",next:"pop"},{token:["punctuation.markup-decl.xml","keyword.markup-decl.xml"],regex:"(<\\!)("+p+")",push:[{token:"text",regex:"\\s+"},{token:"punctuation.markup-decl.xml",regex:">",next:"pop"},{include:"string"}]}],cdata:[{token:"string.cdata.xml",regex:"\\]\\]>",next:"start"},{token:"text.xml",regex:"\\s+"},{token:"text.xml",regex:"(?:[^\\]]|\\](?!\\]>))+"}],comment:[{token:"comment.end.xml",regex:"-->",next:"start"},{defaultToken:"comment.xml"}],reference:[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],attr_reference:[{token:"constant.language.escape.reference.attribute-value.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],tag:[{token:["meta.tag.punctuation.tag-open.xml","meta.tag.punctuation.end-tag-open.xml","meta.tag.tag-name.xml"],regex:"(?:(<)|(</))((?:"+p+":)?"+p+")",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start"}]}],tag_whitespace:[{token:"text.tag-whitespace.xml",regex:"\\s+"}],whitespace:[{token:"text.whitespace.xml",regex:"\\s+"}],string:[{token:"string.xml",regex:"'",push:[{token:"string.xml",regex:"'",next:"pop"},{defaultToken:"string.xml"}]},{token:"string.xml",regex:'"',push:[{token:"string.xml",regex:'"',next:"pop"},{defaultToken:"string.xml"}]}],attributes:[{token:"entity.other.attribute-name.xml",regex:p},{token:"keyword.operator.attribute-equals.xml",regex:"="},{include:"tag_whitespace"},{include:"attribute_value"}],attribute_value:[{token:"string.attribute-value.xml",regex:"'",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]}]},this.constructor===d&&this.normalizeRules()};(function(){this.embedTagRules=function(o,p,u){this.$rules.tag.unshift({token:["meta.tag.punctuation.tag-open.xml","meta.tag."+u+".tag-name.xml"],regex:"(<)("+u+"(?=\\s|>|$))",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:p+"start"}]}),this.$rules[u+"-end"]=[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start",onMatch:function(l,i,r){return r.splice(0),this.token}}],this.embedRules(o,p,[{token:["meta.tag.punctuation.end-tag-open.xml","meta.tag."+u+".tag-name.xml"],regex:"(</)("+u+"(?=\\s|>|$))",next:u+"-end"},{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\["},{token:"string.cdata.xml",regex:"\\]\\]>"}])}}).call(m.prototype),f.inherits(d,m),h.XmlHighlightRules=d}),ace.define("ace/mode/html_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/css_highlight_rules","ace/mode/javascript_highlight_rules","ace/mode/xml_highlight_rules"],function(c,h,$){var f=c("../lib/oop"),m=c("../lib/lang"),d=c("./css_highlight_rules").CssHighlightRules,o=c("./javascript_highlight_rules").JavaScriptHighlightRules,p=c("./xml_highlight_rules").XmlHighlightRules,u=m.createMap({a:"anchor",button:"form",form:"form",img:"image",input:"form",label:"form",option:"form",script:"script",select:"form",textarea:"form",style:"style",table:"table",tbody:"table",td:"table",tfoot:"table",th:"table",tr:"table"}),l=function(){p.call(this),this.addRules({attributes:[{include:"tag_whitespace"},{token:"entity.other.attribute-name.xml",regex:"[-_a-zA-Z0-9:.]+"},{token:"keyword.operator.attribute-equals.xml",regex:"=",push:[{include:"tag_whitespace"},{token:"string.unquoted.attribute-value.html",regex:"[^<>='\"`\\s]+",next:"pop"},{token:"empty",regex:"",next:"pop"}]},{include:"attribute_value"}],tag:[{token:function(i,r){var a=u[r];return["meta.tag.punctuation."+(i=="<"?"":"end-")+"tag-open.xml","meta.tag"+(a?"."+a:"")+".tag-name.xml"]},regex:"(</?)([-_a-zA-Z0-9:.]+)",next:"tag_stuff"}],tag_stuff:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start"}]}),this.embedTagRules(d,"css-","style"),this.embedTagRules(new o({jsx:!1}).getRules(),"js-","script"),this.constructor===l&&this.normalizeRules()};f.inherits(l,p),h.HtmlHighlightRules=l}),ace.define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(c,h,$){var f=c("../../lib/oop"),m=c("../behaviour").Behaviour,d=c("../../token_iterator").TokenIterator;c("../../lib/lang");function o(u,l){return u&&u.type.lastIndexOf(l+".xml")>-1}var p=function(){this.add("string_dquotes","insertion",function(u,l,i,r,a){if(a=='"'||a=="'"){var t=a,e=r.doc.getTextRange(i.getSelectionRange());if(e!==""&&e!=="'"&&e!='"'&&i.getWrapBehavioursEnabled())return{text:t+e+t,selection:!1};var n=i.getCursorPosition(),s=r.doc.getLine(n.row),g=s.substring(n.column,n.column+1),x=new d(r,n.row,n.column),b=x.getCurrentToken();if(g==t&&(o(b,"attribute-value")||o(b,"string")))return{text:"",selection:[1,1]};if(b||(b=x.stepBackward()),!b)return;for(;o(b,"tag-whitespace")||o(b,"whitespace");)b=x.stepBackward();var k=!g||g.match(/\s/);if(o(b,"attribute-equals")&&(k||g==">")||o(b,"decl-attribute-equals")&&(k||g=="?"))return{text:t+t,selection:[1,1]}}}),this.add("string_dquotes","deletion",function(u,l,i,r,a){var t=r.doc.getTextRange(a);if(!a.isMultiLine()&&(t=='"'||t=="'")){var e=r.doc.getLine(a.start.row),n=e.substring(a.start.column+1,a.start.column+2);if(n==t)return a.end.column++,a}}),this.add("autoclosing","insertion",function(u,l,i,r,a){if(a==">"){var t=i.getSelectionRange().start,e=new d(r,t.row,t.column),n=e.getCurrentToken()||e.stepBackward();if(!n||!(o(n,"tag-name")||o(n,"tag-whitespace")||o(n,"attribute-name")||o(n,"attribute-equals")||o(n,"attribute-value"))||o(n,"reference.attribute-value"))return;if(o(n,"attribute-value")){var s=e.getCurrentTokenColumn()+n.value.length;if(t.column<s)return;if(t.column==s){var g=e.stepForward();if(g&&o(g,"attribute-value"))return;e.stepBackward()}}if(/^\s*>/.test(r.getLine(t.row).slice(t.column)))return;for(;!o(n,"tag-name");)if(n=e.stepBackward(),n.value=="<"){n=e.stepForward();break}var x=e.getCurrentTokenRow(),b=e.getCurrentTokenColumn();if(o(e.stepBackward(),"end-tag-open"))return;var k=n.value;return x==t.row&&(k=k.substring(0,t.column-b)),this.voidElements.hasOwnProperty(k.toLowerCase())?void 0:{text:"></"+k+">",selection:[1,1]}}}),this.add("autoindent","insertion",function(u,l,i,r,a){if(a==`
`){var t=i.getCursorPosition(),e=r.getLine(t.row),n=new d(r,t.row,t.column),s=n.getCurrentToken();if(s&&s.type.indexOf("tag-close")!==-1){if(s.value=="/>")return;for(;s&&s.type.indexOf("tag-name")===-1;)s=n.stepBackward();if(!s)return;var g=s.value,x=n.getCurrentTokenRow();if(s=n.stepBackward(),!s||s.type.indexOf("end-tag")!==-1)return;if(this.voidElements&&!this.voidElements[g]){var b=r.getTokenAt(t.row,t.column+1),e=r.getLine(x),k=this.$getIndent(e),R=k+r.getTabString();return b&&b.value==="</"?{text:`
`+R+`
`+k,selection:[1,R.length,1,R.length]}:{text:`
`+R}}}}})};f.inherits(p,m),h.XmlBehaviour=p}),ace.define("ace/mode/folding/mixed",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode"],function(c,h,$){var f=c("../../lib/oop"),m=c("./fold_mode").FoldMode,d=h.FoldMode=function(o,p){this.defaultMode=o,this.subModes=p};f.inherits(d,m),function(){this.$getMode=function(o){typeof o!="string"&&(o=o[0]);for(var p in this.subModes)if(o.indexOf(p)===0)return this.subModes[p];return null},this.$tryMode=function(o,p,u,l){var i=this.$getMode(o);return i?i.getFoldWidget(p,u,l):""},this.getFoldWidget=function(o,p,u){return this.$tryMode(o.getState(u-1),o,p,u)||this.$tryMode(o.getState(u),o,p,u)||this.defaultMode.getFoldWidget(o,p,u)},this.getFoldWidgetRange=function(o,p,u){var l=this.$getMode(o.getState(u-1));return(!l||!l.getFoldWidget(o,p,u))&&(l=this.$getMode(o.getState(u))),(!l||!l.getFoldWidget(o,p,u))&&(l=this.defaultMode),l.getFoldWidgetRange(o,p,u)}}.call(d.prototype)}),ace.define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/range","ace/mode/folding/fold_mode","ace/token_iterator"],function(c,h,$){var f=c("../../lib/oop");c("../../lib/lang");var m=c("../../range").Range,d=c("./fold_mode").FoldMode,o=c("../../token_iterator").TokenIterator,p=h.FoldMode=function(i,r){d.call(this),this.voidElements=i||{},this.optionalEndTags=f.mixin({},this.voidElements),r&&f.mixin(this.optionalEndTags,r)};f.inherits(p,d);var u=function(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};function l(i,r){return i.type.lastIndexOf(r+".xml")>-1}(function(){this.getFoldWidget=function(i,r,a){var t=this._getFirstTagInLine(i,a);return t?t.closing||!t.tagName&&t.selfClosing?r=="markbeginend"?"end":"":!t.tagName||t.selfClosing||this.voidElements.hasOwnProperty(t.tagName.toLowerCase())||this._findEndTagInLine(i,a,t.tagName,t.end.column)?"":"start":this.getCommentFoldWidget(i,a)},this.getCommentFoldWidget=function(i,r){return/comment/.test(i.getState(r))&&/<!-/.test(i.getLine(r))?"start":""},this._getFirstTagInLine=function(i,r){for(var a=i.getTokens(r),t=new u,e=0;e<a.length;e++){var n=a[e];if(l(n,"tag-open")){if(t.end.column=t.start.column+n.value.length,t.closing=l(n,"end-tag-open"),n=a[++e],!n)return null;for(t.tagName=n.value,t.end.column+=n.value.length,e++;e<a.length;e++)if(n=a[e],t.end.column+=n.value.length,l(n,"tag-close")){t.selfClosing=n.value=="/>";break}return t}else if(l(n,"tag-close"))return t.selfClosing=n.value=="/>",t;t.start.column+=n.value.length}return null},this._findEndTagInLine=function(i,r,a,t){for(var e=i.getTokens(r),n=0,s=0;s<e.length;s++){var g=e[s];if(n+=g.value.length,!(n<t)&&l(g,"end-tag-open")&&(g=e[s+1],g&&g.value==a))return!0}return!1},this._readTagForward=function(i){var r=i.getCurrentToken();if(!r)return null;var a=new u;do if(l(r,"tag-open"))a.closing=l(r,"end-tag-open"),a.start.row=i.getCurrentTokenRow(),a.start.column=i.getCurrentTokenColumn();else if(l(r,"tag-name"))a.tagName=r.value;else if(l(r,"tag-close"))return a.selfClosing=r.value=="/>",a.end.row=i.getCurrentTokenRow(),a.end.column=i.getCurrentTokenColumn()+r.value.length,i.stepForward(),a;while(r=i.stepForward());return null},this._readTagBackward=function(i){var r=i.getCurrentToken();if(!r)return null;var a=new u;do{if(l(r,"tag-open"))return a.closing=l(r,"end-tag-open"),a.start.row=i.getCurrentTokenRow(),a.start.column=i.getCurrentTokenColumn(),i.stepBackward(),a;l(r,"tag-name")?a.tagName=r.value:l(r,"tag-close")&&(a.selfClosing=r.value=="/>",a.end.row=i.getCurrentTokenRow(),a.end.column=i.getCurrentTokenColumn()+r.value.length)}while(r=i.stepBackward());return null},this._pop=function(i,r){for(;i.length;){var a=i[i.length-1];if(!r||a.tagName==r.tagName)return i.pop();if(this.optionalEndTags.hasOwnProperty(a.tagName)){i.pop();continue}else return null}},this.getFoldWidgetRange=function(i,r,a){var t=this._getFirstTagInLine(i,a);if(!t)return this.getCommentFoldWidget(i,a)&&i.getCommentFoldRange(a,i.getLine(a).length);var e=t.closing||t.selfClosing,n=[],s;if(e)for(var g=new o(i,a,t.end.column),b={row:a,column:t.start.column};s=this._readTagBackward(g);){if(s.selfClosing){if(n.length)continue;return s.start.column+=s.tagName.length+2,s.end.column-=2,m.fromPoints(s.start,s.end)}if(s.closing)n.push(s);else if(this._pop(n,s),n.length==0)return s.start.column+=s.tagName.length+2,s.start.row==s.end.row&&s.start.column<s.end.column&&(s.start.column=s.end.column),m.fromPoints(s.start,b)}else{var g=new o(i,a,t.start.column),x={row:a,column:t.start.column+t.tagName.length+2};for(t.start.row==t.end.row&&(x.column=t.end.column);s=this._readTagForward(g);){if(s.selfClosing){if(n.length)continue;return s.start.column+=s.tagName.length+2,s.end.column-=2,m.fromPoints(s.start,s.end)}if(s.closing){if(this._pop(n,s),n.length==0)return m.fromPoints(x,s.start)}else n.push(s)}}}}).call(p.prototype)}),ace.define("ace/mode/folding/html",["require","exports","module","ace/lib/oop","ace/mode/folding/mixed","ace/mode/folding/xml","ace/mode/folding/cstyle"],function(c,h,$){var f=c("../../lib/oop"),m=c("./mixed").FoldMode,d=c("./xml").FoldMode,o=c("./cstyle").FoldMode,p=h.FoldMode=function(u,l){m.call(this,new d(u,l),{"js-":new o,"css-":new o})};f.inherits(p,m)}),ace.define("ace/mode/html_completions",["require","exports","module","ace/token_iterator"],function(c,h,$){var f=c("../token_iterator").TokenIterator,m=["accesskey","class","contenteditable","contextmenu","dir","draggable","dropzone","hidden","id","inert","itemid","itemprop","itemref","itemscope","itemtype","lang","spellcheck","style","tabindex","title","translate"],d=["onabort","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontextmenu","oncuechange","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onpause","onplay","onplaying","onprogress","onratechange","onreset","onscroll","onseeked","onseeking","onselect","onshow","onstalled","onsubmit","onsuspend","ontimeupdate","onvolumechange","onwaiting"],o=m.concat(d),p={a:{href:1,target:{_blank:1,top:1},ping:1,rel:{nofollow:1,alternate:1,author:1,bookmark:1,help:1,license:1,next:1,noreferrer:1,prefetch:1,prev:1,search:1,tag:1},media:1,hreflang:1,type:1},abbr:{},address:{},area:{shape:1,coords:1,href:1,hreflang:1,alt:1,target:1,media:1,rel:1,ping:1,type:1},article:{pubdate:1},aside:{},audio:{src:1,autobuffer:1,autoplay:{autoplay:1},loop:{loop:1},controls:{controls:1},muted:{muted:1},preload:{auto:1,metadata:1,none:1}},b:{},base:{href:1,target:1},bdi:{},bdo:{},blockquote:{cite:1},body:{onafterprint:1,onbeforeprint:1,onbeforeunload:1,onhashchange:1,onmessage:1,onoffline:1,onpopstate:1,onredo:1,onresize:1,onstorage:1,onundo:1,onunload:1},br:{},button:{autofocus:1,disabled:{disabled:1},form:1,formaction:1,formenctype:1,formmethod:1,formnovalidate:1,formtarget:1,name:1,value:1,type:{button:1,submit:1}},canvas:{width:1,height:1},caption:{},cite:{},code:{},col:{span:1},colgroup:{span:1},command:{type:1,label:1,icon:1,disabled:1,checked:1,radiogroup:1,command:1},data:{},datalist:{},dd:{},del:{cite:1,datetime:1},details:{open:1},dfn:{},dialog:{open:1},div:{},dl:{},dt:{},em:{},embed:{src:1,height:1,width:1,type:1},fieldset:{disabled:1,form:1,name:1},figcaption:{},figure:{},footer:{},form:{"accept-charset":1,action:1,autocomplete:1,enctype:{"multipart/form-data":1,"application/x-www-form-urlencoded":1},method:{get:1,post:1},name:1,novalidate:1,target:{_blank:1,top:1}},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},head:{},header:{},hr:{},html:{manifest:1},i:{},iframe:{name:1,src:1,height:1,width:1,sandbox:{"allow-same-origin":1,"allow-top-navigation":1,"allow-forms":1,"allow-scripts":1},seamless:{seamless:1}},img:{alt:1,src:1,height:1,width:1,usemap:1,ismap:1},input:{type:{text:1,password:1,hidden:1,checkbox:1,submit:1,radio:1,file:1,button:1,reset:1,image:31,color:1,date:1,datetime:1,"datetime-local":1,email:1,month:1,number:1,range:1,search:1,tel:1,time:1,url:1,week:1},accept:1,alt:1,autocomplete:{on:1,off:1},autofocus:{autofocus:1},checked:{checked:1},disabled:{disabled:1},form:1,formaction:1,formenctype:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},formmethod:{get:1,post:1},formnovalidate:{formnovalidate:1},formtarget:{_blank:1,_self:1,_parent:1,_top:1},height:1,list:1,max:1,maxlength:1,min:1,multiple:{multiple:1},name:1,pattern:1,placeholder:1,readonly:{readonly:1},required:{required:1},size:1,src:1,step:1,width:1,files:1,value:1},ins:{cite:1,datetime:1},kbd:{},keygen:{autofocus:1,challenge:{challenge:1},disabled:{disabled:1},form:1,keytype:{rsa:1,dsa:1,ec:1},name:1},label:{form:1,for:1},legend:{},li:{value:1},link:{href:1,hreflang:1,rel:{stylesheet:1,icon:1},media:{all:1,screen:1,print:1},type:{"text/css":1,"image/png":1,"image/jpeg":1,"image/gif":1},sizes:1},main:{},map:{name:1},mark:{},math:{},menu:{type:1,label:1},meta:{"http-equiv":{"content-type":1},name:{description:1,keywords:1},content:{"text/html; charset=UTF-8":1},charset:1},meter:{value:1,min:1,max:1,low:1,high:1,optimum:1},nav:{},noscript:{href:1},object:{param:1,data:1,type:1,height:1,width:1,usemap:1,name:1,form:1,classid:1},ol:{start:1,reversed:1},optgroup:{disabled:1,label:1},option:{disabled:1,selected:1,label:1,value:1},output:{for:1,form:1,name:1},p:{},param:{name:1,value:1},pre:{},progress:{value:1,max:1},q:{cite:1},rp:{},rt:{},ruby:{},s:{},samp:{},script:{charset:1,type:{"text/javascript":1},src:1,defer:1,async:1},select:{autofocus:1,disabled:1,form:1,multiple:{multiple:1},name:1,size:1,readonly:{readonly:1}},small:{},source:{src:1,type:1,media:1},span:{},strong:{},style:{type:1,media:{all:1,screen:1,print:1},scoped:1},sub:{},sup:{},svg:{},table:{summary:1},tbody:{},td:{headers:1,rowspan:1,colspan:1},textarea:{autofocus:{autofocus:1},disabled:{disabled:1},form:1,maxlength:1,name:1,placeholder:1,readonly:{readonly:1},required:{required:1},rows:1,cols:1,wrap:{on:1,off:1,hard:1,soft:1}},tfoot:{},th:{headers:1,rowspan:1,colspan:1,scope:1},thead:{},time:{datetime:1},title:{},tr:{},track:{kind:1,src:1,srclang:1,label:1,default:1},section:{},summary:{},u:{},ul:{},var:{},video:{src:1,autobuffer:1,autoplay:{autoplay:1},loop:{loop:1},controls:{controls:1},width:1,height:1,poster:1,muted:{muted:1},preload:{auto:1,metadata:1,none:1}},wbr:{}},u=Object.keys(p);function l(t,e){return t.type.lastIndexOf(e+".xml")>-1}function i(t,e){for(var n=new f(t,e.row,e.column),s=n.getCurrentToken();s&&!l(s,"tag-name");)s=n.stepBackward();if(s)return s.value}function r(t,e){for(var n=new f(t,e.row,e.column),s=n.getCurrentToken();s&&!l(s,"attribute-name");)s=n.stepBackward();if(s)return s.value}var a=function(){};(function(){this.getCompletions=function(t,e,n,s){var g=e.getTokenAt(n.row,n.column);if(!g)return[];if(l(g,"tag-name")||l(g,"tag-open")||l(g,"end-tag-open"))return this.getTagCompletions(t,e,n,s);if(l(g,"tag-whitespace")||l(g,"attribute-name"))return this.getAttributeCompletions(t,e,n,s);if(l(g,"attribute-value"))return this.getAttributeValueCompletions(t,e,n,s);var x=e.getLine(n.row).substr(0,n.column);return/&[a-z]*$/i.test(x)?this.getHTMLEntityCompletions(t,e,n,s):[]},this.getTagCompletions=function(t,e,n,s){return u.map(function(g){return{value:g,meta:"tag",score:1e6}})},this.getAttributeCompletions=function(t,e,n,s){var g=i(e,n);if(!g)return[];var x=o;return g in p&&(x=x.concat(Object.keys(p[g]))),x.map(function(b){return{caption:b,snippet:b+'="$0"',meta:"attribute",score:1e6}})},this.getAttributeValueCompletions=function(t,e,n,s){var g=i(e,n),x=r(e,n);if(!g)return[];var b=[];return g in p&&x in p[g]&&typeof p[g][x]=="object"&&(b=Object.keys(p[g][x])),b.map(function(k){return{caption:k,snippet:k,meta:"attribute value",score:1e6}})},this.getHTMLEntityCompletions=function(t,e,n,s){var g=["Aacute;","aacute;","Acirc;","acirc;","acute;","AElig;","aelig;","Agrave;","agrave;","alefsym;","Alpha;","alpha;","amp;","and;","ang;","Aring;","aring;","asymp;","Atilde;","atilde;","Auml;","auml;","bdquo;","Beta;","beta;","brvbar;","bull;","cap;","Ccedil;","ccedil;","cedil;","cent;","Chi;","chi;","circ;","clubs;","cong;","copy;","crarr;","cup;","curren;","Dagger;","dagger;","dArr;","darr;","deg;","Delta;","delta;","diams;","divide;","Eacute;","eacute;","Ecirc;","ecirc;","Egrave;","egrave;","empty;","emsp;","ensp;","Epsilon;","epsilon;","equiv;","Eta;","eta;","ETH;","eth;","Euml;","euml;","euro;","exist;","fnof;","forall;","frac12;","frac14;","frac34;","frasl;","Gamma;","gamma;","ge;","gt;","hArr;","harr;","hearts;","hellip;","Iacute;","iacute;","Icirc;","icirc;","iexcl;","Igrave;","igrave;","image;","infin;","int;","Iota;","iota;","iquest;","isin;","Iuml;","iuml;","Kappa;","kappa;","Lambda;","lambda;","lang;","laquo;","lArr;","larr;","lceil;","ldquo;","le;","lfloor;","lowast;","loz;","lrm;","lsaquo;","lsquo;","lt;","macr;","mdash;","micro;","middot;","minus;","Mu;","mu;","nabla;","nbsp;","ndash;","ne;","ni;","not;","notin;","nsub;","Ntilde;","ntilde;","Nu;","nu;","Oacute;","oacute;","Ocirc;","ocirc;","OElig;","oelig;","Ograve;","ograve;","oline;","Omega;","omega;","Omicron;","omicron;","oplus;","or;","ordf;","ordm;","Oslash;","oslash;","Otilde;","otilde;","otimes;","Ouml;","ouml;","para;","part;","permil;","perp;","Phi;","phi;","Pi;","pi;","piv;","plusmn;","pound;","Prime;","prime;","prod;","prop;","Psi;","psi;","quot;","radic;","rang;","raquo;","rArr;","rarr;","rceil;","rdquo;","real;","reg;","rfloor;","Rho;","rho;","rlm;","rsaquo;","rsquo;","sbquo;","Scaron;","scaron;","sdot;","sect;","shy;","Sigma;","sigma;","sigmaf;","sim;","spades;","sub;","sube;","sum;","sup;","sup1;","sup2;","sup3;","supe;","szlig;","Tau;","tau;","there4;","Theta;","theta;","thetasym;","thinsp;","THORN;","thorn;","tilde;","times;","trade;","Uacute;","uacute;","uArr;","uarr;","Ucirc;","ucirc;","Ugrave;","ugrave;","uml;","upsih;","Upsilon;","upsilon;","Uuml;","uuml;","weierp;","Xi;","xi;","Yacute;","yacute;","yen;","Yuml;","yuml;","Zeta;","zeta;","zwj;","zwnj;"];return g.map(function(x){return{caption:x,snippet:x,meta:"html entity",score:1e6}})}}).call(a.prototype),h.HtmlCompletions=a}),ace.define("ace/mode/html",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text","ace/mode/javascript","ace/mode/css","ace/mode/html_highlight_rules","ace/mode/behaviour/xml","ace/mode/folding/html","ace/mode/html_completions","ace/worker/worker_client"],function(c,h,$){var f=c("../lib/oop"),m=c("../lib/lang"),d=c("./text").Mode,o=c("./javascript").Mode,p=c("./css").Mode,u=c("./html_highlight_rules").HtmlHighlightRules,l=c("./behaviour/xml").XmlBehaviour,i=c("./folding/html").FoldMode,r=c("./html_completions").HtmlCompletions,a=c("../worker/worker_client").WorkerClient,t=["area","base","br","col","embed","hr","img","input","keygen","link","meta","menuitem","param","source","track","wbr"],e=["li","dt","dd","p","rt","rp","optgroup","option","colgroup","td","th"],n=function(s){this.fragmentContext=s&&s.fragmentContext,this.HighlightRules=u,this.$behaviour=new l,this.$completer=new r,this.createModeDelegates({"js-":o,"css-":p}),this.foldingRules=new i(this.voidElements,m.arrayToMap(e))};f.inherits(n,d),function(){this.blockComment={start:"<!--",end:"-->"},this.voidElements=m.arrayToMap(t),this.getNextLineIndent=function(s,g,x){return this.$getIndent(g)},this.checkOutdent=function(s,g,x){return!1},this.getCompletions=function(s,g,x,b){return this.$completer.getCompletions(s,g,x,b)},this.createWorker=function(s){if(this.constructor==n){var g=new a(["ace"],"ace/mode/html_worker","Worker");return g.attachToDocument(s.getDocument()),this.fragmentContext&&g.call("setOptions",[{context:this.fragmentContext}]),g.on("error",function(x){s.setAnnotations(x.data)}),g.on("terminate",function(){s.clearAnnotations()}),g}},this.$id="ace/mode/html",this.snippetFileId="ace/snippets/html"}.call(n.prototype),h.Mode=n}),function(){ace.require(["ace/mode/html"],function(c){y&&(y.exports=c)})}()})(V);var J={exports:{}};(function(y,C){ace.define("ace/snippets/javascript",["require","exports","module"],function(c,h,$){h.snippetText=`# Prototype
snippet proto
	\${1:class_name}.prototype.\${2:method_name} = function(\${3:first_argument}) {
		\${4:// body...}
	};
# Function
snippet fun
	function \${1?:function_name}(\${2:argument}) {
		\${3:// body...}
	}
# Anonymous Function
regex /((=)\\s*|(:)\\s*|(\\()|\\b)/f/(\\))?/
snippet f
	function\${M1?: \${1:functionName}}($2) {
		\${0:$TM_SELECTED_TEXT}
	}\${M2?;}\${M3?,}\${M4?)}
# Immediate function
trigger \\(?f\\(
endTrigger \\)?
snippet f(
	(function(\${1}) {
		\${0:\${TM_SELECTED_TEXT:/* code */}}
	}(\${1}));
# if
snippet if
	if (\${1:true}) {
		\${0}
	}
# if ... else
snippet ife
	if (\${1:true}) {
		\${2}
	} else {
		\${0}
	}
# tertiary conditional
snippet ter
	\${1:/* condition */} ? \${2:a} : \${3:b}
# switch
snippet switch
	switch (\${1:expression}) {
		case '\${3:case}':
			\${4:// code}
			break;
		\${5}
		default:
			\${2:// code}
	}
# case
snippet case
	case '\${1:case}':
		\${2:// code}
		break;
	\${3}

# while (...) {...}
snippet wh
	while (\${1:/* condition */}) {
		\${0:/* code */}
	}
# try
snippet try
	try {
		\${0:/* code */}
	} catch (e) {}
# do...while
snippet do
	do {
		\${2:/* code */}
	} while (\${1:/* condition */});
# Object Method
snippet :f
regex /([,{[])|^\\s*/:f/
	\${1:method_name}: function(\${2:attribute}) {
		\${0}
	}\${3:,}
# setTimeout function
snippet setTimeout
regex /\\b/st|timeout|setTimeo?u?t?/
	setTimeout(function() {\${3:$TM_SELECTED_TEXT}}, \${1:10});
# Get Elements
snippet gett
	getElementsBy\${1:TagName}('\${2}')\${3}
# Get Element
snippet get
	getElementBy\${1:Id}('\${2}')\${3}
# console.log (Firebug)
snippet cl
	console.log(\${1});
# return
snippet ret
	return \${1:result}
# for (property in object ) { ... }
snippet fori
	for (var \${1:prop} in \${2:Things}) {
		\${0:$2[$1]}
	}
# hasOwnProperty
snippet has
	hasOwnProperty(\${1})
# docstring
snippet /**
	/**
	 * \${1:description}
	 *
	 */
snippet @par
regex /^\\s*\\*\\s*/@(para?m?)?/
	@param {\${1:type}} \${2:name} \${3:description}
snippet @ret
	@return {\${1:type}} \${2:description}
# JSON.parse
snippet jsonp
	JSON.parse(\${1:jstr});
# JSON.stringify
snippet jsons
	JSON.stringify(\${1:object});
# self-defining function
snippet sdf
	var \${1:function_name} = function(\${2:argument}) {
		\${3:// initial code ...}

		$1 = function($2) {
			\${4:// main code}
		};
	}
# singleton
snippet sing
	function \${1:Singleton} (\${2:argument}) {
		// the cached instance
		var instance;

		// rewrite the constructor
		$1 = function $1($2) {
			return instance;
		};
		
		// carry over the prototype properties
		$1.prototype = this;

		// the instance
		instance = new $1();

		// reset the constructor pointer
		instance.constructor = $1;

		\${3:// code ...}

		return instance;
	}
# class
snippet class
regex /^\\s*/clas{0,2}/
	var \${1:class} = function(\${20}) {
		$40$0
	};
	
	(function() {
		\${60:this.prop = ""}
	}).call(\${1:class}.prototype);
	
	exports.\${1:class} = \${1:class};
# 
snippet for-
	for (var \${1:i} = \${2:Things}.length; \${1:i}--; ) {
		\${0:\${2:Things}[\${1:i}];}
	}
# for (...) {...}
snippet for
	for (var \${1:i} = 0; $1 < \${2:Things}.length; $1++) {
		\${3:$2[$1]}$0
	}
# for (...) {...} (Improved Native For-Loop)
snippet forr
	for (var \${1:i} = \${2:Things}.length - 1; $1 >= 0; $1--) {
		\${3:$2[$1]}$0
	}


#modules
snippet def
	define(function(require, exports, module) {
	"use strict";
	var \${1/.*\\///} = require("\${1}");
	
	$TM_SELECTED_TEXT
	});
snippet req
guard ^\\s*
	var \${1/.*\\///} = require("\${1}");
	$0
snippet requ
guard ^\\s*
	var \${1/.*\\/(.)/\\u$1/} = require("\${1}").\${1/.*\\/(.)/\\u$1/};
	$0
`,h.scope="javascript"}),function(){ace.require(["ace/snippets/javascript"],function(c){y&&(y.exports=c)})}()})(J);var Z={exports:{}};(function(y,C){ace.define("ace/snippets/html",["require","exports","module"],function(c,h,$){h.snippetText=`# Some useful Unicode entities
# Non-Breaking Space
snippet nbs
	&nbsp;
# \u2190
snippet left
	&#x2190;
# \u2192
snippet right
	&#x2192;
# \u2191
snippet up
	&#x2191;
# \u2193
snippet down
	&#x2193;
# \u21A9
snippet return
	&#x21A9;
# \u21E4
snippet backtab
	&#x21E4;
# \u21E5
snippet tab
	&#x21E5;
# \u21E7
snippet shift
	&#x21E7;
# \u2303
snippet ctrl
	&#x2303;
# \u2305
snippet enter
	&#x2305;
# \u2318
snippet cmd
	&#x2318;
# \u2325
snippet option
	&#x2325;
# \u2326
snippet delete
	&#x2326;
# \u232B
snippet backspace
	&#x232B;
# \u238B
snippet esc
	&#x238B;
# Generic Doctype
snippet doctype HTML 4.01 Strict
	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
	"http://www.w3.org/TR/html4/strict.dtd">
snippet doctype HTML 4.01 Transitional
	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
	"http://www.w3.org/TR/html4/loose.dtd">
snippet doctype HTML 5
	<!DOCTYPE HTML>
snippet doctype XHTML 1.0 Frameset
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
snippet doctype XHTML 1.0 Strict
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
snippet doctype XHTML 1.0 Transitional
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
snippet doctype XHTML 1.1
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
	"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
# HTML Doctype 4.01 Strict
snippet docts
	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
	"http://www.w3.org/TR/html4/strict.dtd">
# HTML Doctype 4.01 Transitional
snippet doct
	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
	"http://www.w3.org/TR/html4/loose.dtd">
# HTML Doctype 5
snippet doct5
	<!DOCTYPE html>
# XHTML Doctype 1.0 Frameset
snippet docxf
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
# XHTML Doctype 1.0 Strict
snippet docxs
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
# XHTML Doctype 1.0 Transitional
snippet docxt
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
# XHTML Doctype 1.1
snippet docx
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
	"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
# html5shiv
snippet html5shiv
	<!--[if lte IE 8]>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"><\/script>
	<![endif]-->
snippet html5printshiv
	<!--[if lte IE 8]>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv-printshiv.min.js"><\/script>
	<![endif]-->
# Attributes
snippet attr
	\${1:attribute}="\${2:property}"
snippet attr+
	\${1:attribute}="\${2:property}" attr+\${3}
snippet .
	class="\${1}"\${2}
snippet #
	id="\${1}"\${2}
snippet alt
	alt="\${1}"\${2}
snippet charset
	charset="\${1:utf-8}"\${2}
snippet data
	data-\${1}="\${2:$1}"\${3}
snippet for
	for="\${1}"\${2}
snippet height
	height="\${1}"\${2}
snippet href
	href="\${1:#}"\${2}
snippet lang
	lang="\${1:en}"\${2}
snippet media
	media="\${1}"\${2}
snippet name
	name="\${1}"\${2}
snippet rel
	rel="\${1}"\${2}
snippet scope
	scope="\${1:row}"\${2}
snippet src
	src="\${1}"\${2}
snippet title=
	title="\${1}"\${2}
snippet type
	type="\${1}"\${2}
snippet value
	value="\${1}"\${2}
snippet width
	width="\${1}"\${2}
# Elements
snippet a
	<a href="\${1:#}">\${2:$1}</a>
snippet a.
	<a class="\${1}" href="\${2:#}">\${3:$1}</a>
snippet a#
	<a id="\${1}" href="\${2:#}">\${3:$1}</a>
snippet a:ext
	<a href="http://\${1:example.com}">\${2:$1}</a>
snippet a:mail
	<a href="mailto:\${1:joe@example.com}?subject=\${2:feedback}">\${3:email me}</a>
snippet abbr
	<abbr title="\${1}">\${2}</abbr>
snippet address
	<address>
		\${1}
	</address>
snippet area
	<area shape="\${1:rect}" coords="\${2}" href="\${3}" alt="\${4}" />
snippet area+
	<area shape="\${1:rect}" coords="\${2}" href="\${3}" alt="\${4}" />
	area+\${5}
snippet area:c
	<area shape="circle" coords="\${1}" href="\${2}" alt="\${3}" />
snippet area:d
	<area shape="default" coords="\${1}" href="\${2}" alt="\${3}" />
snippet area:p
	<area shape="poly" coords="\${1}" href="\${2}" alt="\${3}" />
snippet area:r
	<area shape="rect" coords="\${1}" href="\${2}" alt="\${3}" />
snippet article
	<article>
		\${1}
	</article>
snippet article.
	<article class="\${1}">
		\${2}
	</article>
snippet article#
	<article id="\${1}">
		\${2}
	</article>
snippet aside
	<aside>
		\${1}
	</aside>
snippet aside.
	<aside class="\${1}">
		\${2}
	</aside>
snippet aside#
	<aside id="\${1}">
		\${2}
	</aside>
snippet audio
	<audio src="\${1}>\${2}</audio>
snippet b
	<b>\${1}</b>
snippet base
	<base href="\${1}" target="\${2}" />
snippet bdi
	<bdi>\${1}</bdo>
snippet bdo
	<bdo dir="\${1}">\${2}</bdo>
snippet bdo:l
	<bdo dir="ltr">\${1}</bdo>
snippet bdo:r
	<bdo dir="rtl">\${1}</bdo>
snippet blockquote
	<blockquote>
		\${1}
	</blockquote>
snippet body
	<body>
		\${1}
	</body>
snippet br
	<br />\${1}
snippet button
	<button type="\${1:submit}">\${2}</button>
snippet button.
	<button class="\${1:button}" type="\${2:submit}">\${3}</button>
snippet button#
	<button id="\${1}" type="\${2:submit}">\${3}</button>
snippet button:s
	<button type="submit">\${1}</button>
snippet button:r
	<button type="reset">\${1}</button>
snippet canvas
	<canvas id="\${1:canvas}"></canvas>
snippet caption
	<caption>\${1}</caption>
snippet cite
	<cite>\${1}</cite>
snippet code
	<code>\${1}</code>
snippet col
	<col />\${1}
snippet col+
	<col />
	col+\${1}
snippet colgroup
	<colgroup>
		\${1}
	</colgroup>
snippet colgroup+
	<colgroup>
		<col />
		col+\${1}
	</colgroup>
snippet command
	<command type="command" label="\${1}" icon="\${2}" />
snippet command:c
	<command type="checkbox" label="\${1}" icon="\${2}" />
snippet command:r
	<command type="radio" radiogroup="\${1}" label="\${2}" icon="\${3}" />
snippet datagrid
	<datagrid>
		\${1}
	</datagrid>
snippet datalist
	<datalist>
		\${1}
	</datalist>
snippet datatemplate
	<datatemplate>
		\${1}
	</datatemplate>
snippet dd
	<dd>\${1}</dd>
snippet dd.
	<dd class="\${1}">\${2}</dd>
snippet dd#
	<dd id="\${1}">\${2}</dd>
snippet del
	<del>\${1}</del>
snippet details
	<details>\${1}</details>
snippet dfn
	<dfn>\${1}</dfn>
snippet dialog
	<dialog>
		\${1}
	</dialog>
snippet div
	<div>
		\${1}
	</div>
snippet div.
	<div class="\${1}">
		\${2}
	</div>
snippet div#
	<div id="\${1}">
		\${2}
	</div>
snippet dl
	<dl>
		\${1}
	</dl>
snippet dl.
	<dl class="\${1}">
		\${2}
	</dl>
snippet dl#
	<dl id="\${1}">
		\${2}
	</dl>
snippet dl+
	<dl>
		<dt>\${1}</dt>
		<dd>\${2}</dd>
		dt+\${3}
	</dl>
snippet dt
	<dt>\${1}</dt>
snippet dt.
	<dt class="\${1}">\${2}</dt>
snippet dt#
	<dt id="\${1}">\${2}</dt>
snippet dt+
	<dt>\${1}</dt>
	<dd>\${2}</dd>
	dt+\${3}
snippet em
	<em>\${1}</em>
snippet embed
	<embed src=\${1} type="\${2} />
snippet fieldset
	<fieldset>
		\${1}
	</fieldset>
snippet fieldset.
	<fieldset class="\${1}">
		\${2}
	</fieldset>
snippet fieldset#
	<fieldset id="\${1}">
		\${2}
	</fieldset>
snippet fieldset+
	<fieldset>
		<legend><span>\${1}</span></legend>
		\${2}
	</fieldset>
	fieldset+\${3}
snippet figcaption
	<figcaption>\${1}</figcaption>
snippet figure
	<figure>\${1}</figure>
snippet footer
	<footer>
		\${1}
	</footer>
snippet footer.
	<footer class="\${1}">
		\${2}
	</footer>
snippet footer#
	<footer id="\${1}">
		\${2}
	</footer>
snippet form
	<form action="\${1}" method="\${2:get}" accept-charset="utf-8">
		\${3}
	</form>
snippet form.
	<form class="\${1}" action="\${2}" method="\${3:get}" accept-charset="utf-8">
		\${4}
	</form>
snippet form#
	<form id="\${1}" action="\${2}" method="\${3:get}" accept-charset="utf-8">
		\${4}
	</form>
snippet h1
	<h1>\${1}</h1>
snippet h1.
	<h1 class="\${1}">\${2}</h1>
snippet h1#
	<h1 id="\${1}">\${2}</h1>
snippet h2
	<h2>\${1}</h2>
snippet h2.
	<h2 class="\${1}">\${2}</h2>
snippet h2#
	<h2 id="\${1}">\${2}</h2>
snippet h3
	<h3>\${1}</h3>
snippet h3.
	<h3 class="\${1}">\${2}</h3>
snippet h3#
	<h3 id="\${1}">\${2}</h3>
snippet h4
	<h4>\${1}</h4>
snippet h4.
	<h4 class="\${1}">\${2}</h4>
snippet h4#
	<h4 id="\${1}">\${2}</h4>
snippet h5
	<h5>\${1}</h5>
snippet h5.
	<h5 class="\${1}">\${2}</h5>
snippet h5#
	<h5 id="\${1}">\${2}</h5>
snippet h6
	<h6>\${1}</h6>
snippet h6.
	<h6 class="\${1}">\${2}</h6>
snippet h6#
	<h6 id="\${1}">\${2}</h6>
snippet head
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />

		<title>\${1:\`substitute(Filename('', 'Page Title'), '^.', '\\u&', '')\`}</title>
		\${2}
	</head>
snippet header
	<header>
		\${1}
	</header>
snippet header.
	<header class="\${1}">
		\${2}
	</header>
snippet header#
	<header id="\${1}">
		\${2}
	</header>
snippet hgroup
	<hgroup>
		\${1}
	</hgroup>
snippet hgroup.
	<hgroup class="\${1}>
		\${2}
	</hgroup>
snippet hr
	<hr />\${1}
snippet html
	<html>
	\${1}
	</html>
snippet xhtml
	<html xmlns="http://www.w3.org/1999/xhtml">
	\${1}
	</html>
snippet html5
	<!DOCTYPE html>
	<html>
		<head>
			<meta http-equiv="content-type" content="text/html; charset=utf-8" />
			<title>\${1:\`substitute(Filename('', 'Page Title'), '^.', '\\u&', '')\`}</title>
			\${2:meta}
		</head>
		<body>
			\${3:body}
		</body>
	</html>
snippet xhtml5
	<!DOCTYPE html>
	<html xmlns="http://www.w3.org/1999/xhtml">
		<head>
			<meta http-equiv="content-type" content="application/xhtml+xml; charset=utf-8" />
			<title>\${1:\`substitute(Filename('', 'Page Title'), '^.', '\\u&', '')\`}</title>
			\${2:meta}
		</head>
		<body>
			\${3:body}
		</body>
	</html>
snippet i
	<i>\${1}</i>
snippet iframe
	<iframe src="\${1}" frameborder="0"></iframe>\${2}
snippet iframe.
	<iframe class="\${1}" src="\${2}" frameborder="0"></iframe>\${3}
snippet iframe#
	<iframe id="\${1}" src="\${2}" frameborder="0"></iframe>\${3}
snippet img
	<img src="\${1}" alt="\${2}" />\${3}
snippet img.
	<img class="\${1}" src="\${2}" alt="\${3}" />\${4}
snippet img#
	<img id="\${1}" src="\${2}" alt="\${3}" />\${4}
snippet input
	<input type="\${1:text/submit/hidden/button/image}" name="\${2}" id="\${3:$2}" value="\${4}" />\${5}
snippet input.
	<input class="\${1}" type="\${2:text/submit/hidden/button/image}" name="\${3}" id="\${4:$3}" value="\${5}" />\${6}
snippet input:text
	<input type="text" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet input:submit
	<input type="submit" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet input:hidden
	<input type="hidden" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet input:button
	<input type="button" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet input:image
	<input type="image" name="\${1}" id="\${2:$1}" src="\${3}" alt="\${4}" />\${5}
snippet input:checkbox
	<input type="checkbox" name="\${1}" id="\${2:$1}" />\${3}
snippet input:radio
	<input type="radio" name="\${1}" id="\${2:$1}" />\${3}
snippet input:color
	<input type="color" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet input:date
	<input type="date" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet input:datetime
	<input type="datetime" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet input:datetime-local
	<input type="datetime-local" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet input:email
	<input type="email" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet input:file
	<input type="file" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet input:month
	<input type="month" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet input:number
	<input type="number" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet input:password
	<input type="password" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet input:range
	<input type="range" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet input:reset
	<input type="reset" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet input:search
	<input type="search" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet input:time
	<input type="time" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet input:url
	<input type="url" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet input:week
	<input type="week" name="\${1}" id="\${2:$1}" value="\${3}" />\${4}
snippet ins
	<ins>\${1}</ins>
snippet kbd
	<kbd>\${1}</kbd>
snippet keygen
	<keygen>\${1}</keygen>
snippet label
	<label for="\${2:$1}">\${1}</label>
snippet label:i
	<label for="\${2:$1}">\${1}</label>
	<input type="\${3:text/submit/hidden/button}" name="\${4:$2}" id="\${5:$2}" value="\${6}" />\${7}
snippet label:s
	<label for="\${2:$1}">\${1}</label>
	<select name="\${3:$2}" id="\${4:$2}">
		<option value="\${5}">\${6:$5}</option>
	</select>
snippet legend
	<legend>\${1}</legend>
snippet legend+
	<legend><span>\${1}</span></legend>
snippet li
	<li>\${1}</li>
snippet li.
	<li class="\${1}">\${2}</li>
snippet li+
	<li>\${1}</li>
	li+\${2}
snippet lia
	<li><a href="\${2:#}">\${1}</a></li>
snippet lia+
	<li><a href="\${2:#}">\${1}</a></li>
	lia+\${3}
snippet link
	<link rel="\${1}" href="\${2}" title="\${3}" type="\${4}" />\${5}
snippet link:atom
	<link rel="alternate" href="\${1:atom.xml}" title="Atom" type="application/atom+xml" />\${2}
snippet link:css
	<link rel="stylesheet" href="\${2:style.css}" type="text/css" media="\${3:all}" />\${4}
snippet link:favicon
	<link rel="shortcut icon" href="\${1:favicon.ico}" type="image/x-icon" />\${2}
snippet link:rss
	<link rel="alternate" href="\${1:rss.xml}" title="RSS" type="application/atom+xml" />\${2}
snippet link:touch
	<link rel="apple-touch-icon" href="\${1:favicon.png}" />\${2}
snippet map
	<map name="\${1}">
		\${2}
	</map>
snippet map.
	<map class="\${1}" name="\${2}">
		\${3}
	</map>
snippet map#
	<map name="\${1}" id="\${2:$1}>
		\${3}
	</map>
snippet map+
	<map name="\${1}">
		<area shape="\${2}" coords="\${3}" href="\${4}" alt="\${5}" />\${6}
	</map>\${7}
snippet mark
	<mark>\${1}</mark>
snippet menu
	<menu>
		\${1}
	</menu>
snippet menu:c
	<menu type="context">
		\${1}
	</menu>
snippet menu:t
	<menu type="toolbar">
		\${1}
	</menu>
snippet meta
	<meta http-equiv="\${1}" content="\${2}" />\${3}
snippet meta:compat
	<meta http-equiv="X-UA-Compatible" content="IE=\${1:7,8,edge}" />\${3}
snippet meta:refresh
	<meta http-equiv="refresh" content="text/html;charset=UTF-8" />\${3}
snippet meta:utf
	<meta http-equiv="content-type" content="text/html;charset=UTF-8" />\${3}
snippet meter
	<meter>\${1}</meter>
snippet nav
	<nav>
		\${1}
	</nav>
snippet nav.
	<nav class="\${1}">
		\${2}
	</nav>
snippet nav#
	<nav id="\${1}">
		\${2}
	</nav>
snippet noscript
	<noscript>
		\${1}
	</noscript>
snippet object
	<object data="\${1}" type="\${2}">
		\${3}
	</object>\${4}
# Embed QT Movie
snippet movie
	<object width="$2" height="$3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B"
	 codebase="http://www.apple.com/qtactivex/qtplugin.cab">
		<param name="src" value="$1" />
		<param name="controller" value="$4" />
		<param name="autoplay" value="$5" />
		<embed src="\${1:movie.mov}"
			width="\${2:320}" height="\${3:240}"
			controller="\${4:true}" autoplay="\${5:true}"
			scale="tofit" cache="true"
			pluginspage="http://www.apple.com/quicktime/download/" />
	</object>\${6}
snippet ol
	<ol>
		\${1}
	</ol>
snippet ol.
	<ol class="\${1}>
		\${2}
	</ol>
snippet ol#
	<ol id="\${1}>
		\${2}
	</ol>
snippet ol+
	<ol>
		<li>\${1}</li>
		li+\${2}
	</ol>
snippet opt
	<option value="\${1}">\${2:$1}</option>
snippet opt+
	<option value="\${1}">\${2:$1}</option>
	opt+\${3}
snippet optt
	<option>\${1}</option>
snippet optgroup
	<optgroup>
		<option value="\${1}">\${2:$1}</option>
		opt+\${3}
	</optgroup>
snippet output
	<output>\${1}</output>
snippet p
	<p>\${1}</p>
snippet param
	<param name="\${1}" value="\${2}" />\${3}
snippet pre
	<pre>
		\${1}
	</pre>
snippet progress
	<progress>\${1}</progress>
snippet q
	<q>\${1}</q>
snippet rp
	<rp>\${1}</rp>
snippet rt
	<rt>\${1}</rt>
snippet ruby
	<ruby>
		<rp><rt>\${1}</rt></rp>
	</ruby>
snippet s
	<s>\${1}</s>
snippet samp
	<samp>
		\${1}
	</samp>
snippet script
	<script type="text/javascript" charset="utf-8">
		\${1}
	<\/script>
snippet scriptsrc
	<script src="\${1}.js" type="text/javascript" charset="utf-8"><\/script>
snippet newscript
	<script type="application/javascript" charset="utf-8">
		\${1}
	<\/script>
snippet newscriptsrc
	<script src="\${1}.js" type="application/javascript" charset="utf-8"><\/script>
snippet section
	<section>
		\${1}
	</section>
snippet section.
	<section class="\${1}">
		\${2}
	</section>
snippet section#
	<section id="\${1}">
		\${2}
	</section>
snippet select
	<select name="\${1}" id="\${2:$1}">
		\${3}
	</select>
snippet select.
	<select name="\${1}" id="\${2:$1}" class="\${3}>
		\${4}
	</select>
snippet select+
	<select name="\${1}" id="\${2:$1}">
		<option value="\${3}">\${4:$3}</option>
		opt+\${5}
	</select>
snippet small
	<small>\${1}</small>
snippet source
	<source src="\${1}" type="\${2}" media="\${3}" />
snippet span
	<span>\${1}</span>
snippet strong
	<strong>\${1}</strong>
snippet style
	<style type="text/css" media="\${1:all}">
		\${2}
	</style>
snippet sub
	<sub>\${1}</sub>
snippet summary
	<summary>
		\${1}
	</summary>
snippet sup
	<sup>\${1}</sup>
snippet table
	<table border="\${1:0}">
		\${2}
	</table>
snippet table.
	<table class="\${1}" border="\${2:0}">
		\${3}
	</table>
snippet table#
	<table id="\${1}" border="\${2:0}">
		\${3}
	</table>
snippet tbody
	<tbody>
		\${1}
	</tbody>
snippet td
	<td>\${1}</td>
snippet td.
	<td class="\${1}">\${2}</td>
snippet td#
	<td id="\${1}">\${2}</td>
snippet td+
	<td>\${1}</td>
	td+\${2}
snippet textarea
	<textarea name="\${1}" id=\${2:$1} rows="\${3:8}" cols="\${4:40}">\${5}</textarea>\${6}
snippet tfoot
	<tfoot>
		\${1}
	</tfoot>
snippet th
	<th>\${1}</th>
snippet th.
	<th class="\${1}">\${2}</th>
snippet th#
	<th id="\${1}">\${2}</th>
snippet th+
	<th>\${1}</th>
	th+\${2}
snippet thead
	<thead>
		\${1}
	</thead>
snippet time
	<time datetime="\${1}" pubdate="\${2:$1}>\${3:$1}</time>
snippet title
	<title>\${1:\`substitute(Filename('', 'Page Title'), '^.', '\\u&', '')\`}</title>
snippet tr
	<tr>
		\${1}
	</tr>
snippet tr+
	<tr>
		<td>\${1}</td>
		td+\${2}
	</tr>
snippet track
	<track src="\${1}" srclang="\${2}" label="\${3}" default="\${4:default}>\${5}</track>\${6}
snippet ul
	<ul>
		\${1}
	</ul>
snippet ul.
	<ul class="\${1}">
		\${2}
	</ul>
snippet ul#
	<ul id="\${1}">
		\${2}
	</ul>
snippet ul+
	<ul>
		<li>\${1}</li>
		li+\${2}
	</ul>
snippet var
	<var>\${1}</var>
snippet video
	<video src="\${1}" height="\${2}" width="\${3}" preload="\${5:none}" autoplay="\${6:autoplay}">\${7}</video>\${8}
snippet wbr
	<wbr />\${1}
`,h.scope="html"}),function(){ace.require(["ace/snippets/html"],function(c){y&&(y.exports=c)})}()})(Z);var G="/assets/worker-javascript.2d639baa.js",K="/assets/worker-html.cf1cf9fc.js";const T=y=>(q("data-v-64614dc2"),y=y(),W(),y),Q={class:"panel"},ee={class:"inputPanel"},te={class:"header"},ne=T(()=>v("span",{class:"i-icon-park-outline-indent-right"},null,-1)),ae=T(()=>v("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),ie=T(()=>v("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),re={class:"inputPanel"},oe={class:"header"},se=T(()=>v("span",{class:"i-icon-park-outline-indent-right"},null,-1)),le=T(()=>v("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),pe=T(()=>v("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),ce={class:"inputPanel"},ue={class:"header"},de=T(()=>v("span",{class:"i-icon-park-outline-indent-right"},null,-1)),ge=T(()=>v("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),me=T(()=>v("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),he=["srcdoc"],fe={setup(y){E.config.setModuleUrl("ace/mode/css_worker",U),E.config.setModuleUrl("ace/mode/javascript_worker",G),E.config.setModuleUrl("ace/mode/html_worker",K);const C=E.require("ace/ext/beautify"),c={},h=M(""),$=M(""),f=M(""),m=N();j(()=>{h.value=m.state.tinyEditor.html,$.value=m.state.tinyEditor.css,f.value=m.state.tinyEditor.js}),L(h,t=>{m.dispatch("tinyEditor/setContent",{type:"html",content:t})}),L($,t=>{m.dispatch("tinyEditor/setContent",{type:"css",content:t})}),L(f,t=>{m.dispatch("tinyEditor/setContent",{type:"js",content:t})});const d=z(()=>h.value+$.value+f.value===""?"\u8F93\u5165\u5185\u5BB9\u4EE5\u5728\u6B64\u5C55\u793A":h.value+"<style>"+$.value+"</style><script>"+f.value+"<\/script>"),o=M(!1);function p(t,e){t.getSession().setTabSize(2),t.getSession().setUseSoftTabs(!0),t.setShowPrintMargin(!1),c[e]=t}function u(t){c[t]&&C.beautify(c[t].session)}function l(t){var e;(e=c[t])==null||e.session.foldAll()}function i(t){var e;(e=c[t])==null||e.session.unfold()}function r(){o.value=!o.value}function a(){window.open("","_blank").document.write(d.value)}return(t,e)=>{const n=P,s=X;return I(),A("div",Q,[F(v("div",ee,[v("div",te,[w(n,{type:"primary",title:"\u683C\u5F0F\u5316",onClick:e[0]||(e[0]=g=>u("html"))},{icon:_(()=>[ne]),_:1}),w(n,{type:"primary",title:"\u6298\u53E0\u6240\u6709",onClick:e[1]||(e[1]=g=>l("html"))},{icon:_(()=>[ae]),_:1}),w(n,{type:"primary",title:"\u5C55\u5F00\u6240\u6709",onClick:e[2]||(e[2]=g=>i("html"))},{icon:_(()=>[ie]),_:1})]),w(S(B),{value:h.value,"onUpdate:value":e[3]||(e[3]=g=>h.value=g),lang:"html",theme:"textmate",style:{height:"calc(100% - 4.2rem)"},placeholder:"\u8BF7\u8F93\u5165HTML\u5185\u5BB9",options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:e[4]||(e[4]=g=>p(g,"html"))},null,8,["value"])],512),[[D,!o.value]]),F(v("div",re,[v("div",oe,[w(n,{type:"primary",title:"\u683C\u5F0F\u5316",onClick:e[5]||(e[5]=g=>u("css"))},{icon:_(()=>[se]),_:1}),w(n,{type:"primary",title:"\u6298\u53E0\u6240\u6709",onClick:e[6]||(e[6]=g=>l("js"))},{icon:_(()=>[le]),_:1}),w(n,{type:"primary",title:"\u5C55\u5F00\u6240\u6709",onClick:e[7]||(e[7]=g=>i("js"))},{icon:_(()=>[pe]),_:1})]),w(S(B),{value:f.value,"onUpdate:value":e[8]||(e[8]=g=>f.value=g),lang:"javascript",theme:"textmate",style:{height:"calc(100% - 4.2rem)"},placeholder:"\u8BF7\u8F93\u5165JS\u5185\u5BB9",options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:e[9]||(e[9]=g=>p(g,"js"))},null,8,["value"])],512),[[D,!o.value]]),F(v("div",ce,[v("div",ue,[w(n,{type:"primary",title:"\u683C\u5F0F\u5316",onClick:e[10]||(e[10]=g=>u("css"))},{icon:_(()=>[de]),_:1}),w(n,{type:"primary",title:"\u6298\u53E0\u6240\u6709",onClick:e[11]||(e[11]=g=>l("css"))},{icon:_(()=>[ge]),_:1}),w(n,{type:"primary",title:"\u5C55\u5F00\u6240\u6709",onClick:e[12]||(e[12]=g=>i("css"))},{icon:_(()=>[me]),_:1})]),w(S(B),{value:$.value,"onUpdate:value":e[13]||(e[13]=g=>$.value=g),lang:"css",theme:"textmate",style:{height:"calc(100% - 4.2rem)"},placeholder:"\u8BF7\u8F93\u5165CSS\u5185\u5BB9",options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:e[14]||(e[14]=g=>p(g,"css"))},null,8,["value"])],512),[[D,!o.value]]),v("div",{class:O(["displayPanel",{fullPanel:o.value}])},[w(s,{class:"fullScreen"},{default:_(()=>[o.value?(I(),A("span",{key:0,class:"i-icon-park-outline-off-screen",title:"\u9000\u51FA\u5B8C\u6574\u5C55\u793A",onClick:r})):(I(),A("span",{key:1,class:"i-icon-park-outline-full-screen",title:"\u5B8C\u6574\u5C55\u793A",onClick:r})),v("span",{class:"i-fa-solid-external-link-alt",title:"\u65B0\u6807\u7B7E\u6253\u5F00",onClick:a})]),_:1}),v("iframe",{"w-full":"","h-full":"",srcdoc:S(d),seamless:"",title:"\u5C55\u793A\u9762\u677F"},null,8,he)],2)])}}};var we=H(fe,[["__scopeId","data-v-64614dc2"]]);export{we as default};
