import{_ as B,L as M,g as H,o as L,n as I,v as A,aV as F,s as v,b as w,w as _,a as S,y as N,B as z,bi as O,bj as j}from"./index.9e6f8565.js";/* empty css                */import{a as E,V as D}from"./ext-beautify.954c109b.js";import{w as P}from"./worker-css.a58f3999.js";import{S as q}from"./index.f5d75a58.js";import"./useFlexGapSupport.f128d527.js";var W={exports:{}};(function(y,C){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(u,h,$){var f=u("../lib/oop"),g=u("./text_highlight_rules").TextHighlightRules,d=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},d.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};f.inherits(d,g),d.getTagRule=function(s){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},d.getStartRule=function(s){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:s}},d.getEndRule=function(s){return{token:"comment.doc",regex:"\\*\\/",next:s}},h.DocCommentHighlightRules=d}),ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(u,h,$){var f=u("../lib/oop"),g=u("./doc_comment_highlight_rules").DocCommentHighlightRules,d=u("./text_highlight_rules").TextHighlightRules,s="[a-zA-Z\\$_\xA1-\uFFFF][a-zA-Z\\d\\$_\xA1-\uFFFF]*",p=function(r){var o=this.createKeywordMapper({"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},"identifier"),t="case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void",e="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";this.$rules={no_regex:[g.getStartRule("doc-start"),l("no_regex"),{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:["storage.type","punctuation.operator","support.function","punctuation.operator","entity.name.function","text","keyword.operator"],regex:"("+s+")(\\.)(prototype)(\\.)("+s+")(\\s*)(=)",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+s+")(\\.)("+s+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+s+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+s+")(\\.)("+s+")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","entity.name.function","text","paren.lparen"],regex:"(function)(\\s+)("+s+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","paren.lparen"],regex:"("+s+")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:`from(?=\\s*('|"))`},{token:"keyword",regex:"(?:"+t+")\\b",next:"start"},{token:["support.constant"],regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/},{token:o,regex:s},{token:"punctuation.operator",regex:/[.](?![.])/,next:"property"},{token:"storage.type",regex:/=>/,next:"start"},{token:"keyword.operator",regex:/--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"comment",regex:/^#!.*$/}],property:[{token:"text",regex:"\\s+"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+s+")(\\.)("+s+")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",next:"function_arguments"},{token:"punctuation.operator",regex:/[.](?![.])/},{token:"support.function",regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:"support.function.dom",regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:"support.constant",regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:"identifier",regex:s},{regex:"",token:"empty",next:"no_regex"}],start:[g.getStartRule("doc-start"),l("start"),{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],function_arguments:[{token:"variable.parameter",regex:s},{token:"punctuation.operator",regex:"[, ]+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],qqstring:[{token:"constant.language.escape",regex:e},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:e},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},(!r||!r.noES6)&&(this.$rules.no_regex.unshift({regex:"[{}]",onMatch:function(a,i,n){if(this.next=a=="{"?this.nextState:"",a=="{"&&n.length)n.unshift("start",i);else if(a=="}"&&n.length&&(n.shift(),this.next=n.shift(),this.next.indexOf("string")!=-1||this.next.indexOf("jsx")!=-1))return"paren.quasi.end";return a=="{"?"paren.lparen":"paren.rparen"},nextState:"start"},{token:"string.quasi.start",regex:/`/,push:[{token:"constant.language.escape",regex:e},{token:"paren.quasi.start",regex:/\${/,push:"start"},{token:"string.quasi.end",regex:/`/,next:"pop"},{defaultToken:"string.quasi"}]}),(!r||r.jsx!=!1)&&c.call(this)),this.embedRules(g,"doc-",[g.getEndRule("no_regex")]),this.normalizeRules()};f.inherits(p,d);function c(){var r=s.replace("\\d","\\d\\-"),o={onMatch:function(e,a,i){var n=e.charAt(1)=="/"?2:1;return n==1?(a!=this.nextState?i.unshift(this.next,this.nextState,0):i.unshift(this.next),i[2]++):n==2&&a==this.nextState&&(i[1]--,(!i[1]||i[1]<0)&&(i.shift(),i.shift())),[{type:"meta.tag.punctuation."+(n==1?"":"end-")+"tag-open.xml",value:e.slice(0,n)},{type:"meta.tag.tag-name.xml",value:e.substr(n)}]},regex:"</?"+r,next:"jsxAttributes",nextState:"jsx"};this.$rules.start.unshift(o);var t={regex:"{",token:"paren.quasi.start",push:"start"};this.$rules.jsx=[t,o,{include:"reference"},{defaultToken:"string"}],this.$rules.jsxAttributes=[{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",onMatch:function(e,a,i){return a==i[0]&&i.shift(),e.length==2&&(i[0]==this.nextState&&i[1]--,(!i[1]||i[1]<0)&&i.splice(0,2)),this.next=i[0]||"start",[{type:this.token,value:e}]},nextState:"jsx"},t,l("jsxAttributes"),{token:"entity.other.attribute-name.xml",regex:r},{token:"keyword.operator.attribute-equals.xml",regex:"="},{token:"text.tag-whitespace.xml",regex:"\\s+"},{token:"string.attribute-value.xml",regex:"'",stateName:"jsx_attr_q",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',stateName:"jsx_attr_qq",push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},o],this.$rules.reference=[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}]}function l(r){return[{token:"comment",regex:/\/\*/,next:[g.getTagRule(),{token:"comment",regex:"\\*\\/",next:r||"pop"},{defaultToken:"comment",caseInsensitive:!0}]},{token:"comment",regex:"\\/\\/",next:[g.getTagRule(),{token:"comment",regex:"$|^",next:r||"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}h.JavaScriptHighlightRules=p}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(u,h,$){var f=u("../range").Range,g=function(){};(function(){this.checkOutdent=function(d,s){return/^\s+$/.test(d)?/^\s*\}/.test(s):!1},this.autoOutdent=function(d,s){var p=d.getLine(s),c=p.match(/^(\s*\})/);if(!c)return 0;var l=c[1].length,r=d.findMatchingBracket({row:s,column:l});if(!r||r.row==s)return 0;var o=this.$getIndent(d.getLine(r.row));d.replace(new f(s,0,s,l-1),o)},this.$getIndent=function(d){return d.match(/^\s*/)[0]}}).call(g.prototype),h.MatchingBraceOutdent=g}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(u,h,$){var f=u("../../lib/oop"),g=u("../../range").Range,d=u("./fold_mode").FoldMode,s=h.FoldMode=function(p){p&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+p.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+p.end)))};f.inherits(s,d),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(p,c,l){var r=p.getLine(l);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var o=this._getFoldWidgetBase(p,c,l);return!o&&this.startRegionRe.test(r)?"start":o},this.getFoldWidgetRange=function(p,c,l,r){var o=p.getLine(l);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(p,o,l);var a=o.match(this.foldingStartMarker);if(a){var t=a.index;if(a[1])return this.openingBracketBlock(p,a[1],l,t);var e=p.getCommentFoldRange(l,t+a[0].length,1);return e&&!e.isMultiLine()&&(r?e=this.getSectionRange(p,l):c!="all"&&(e=null)),e}if(c!=="markbegin"){var a=o.match(this.foldingStopMarker);if(a){var t=a.index+a[0].length;return a[1]?this.closingBracketBlock(p,a[1],l,t):p.getCommentFoldRange(l,t,-1)}}},this.getSectionRange=function(p,c){var l=p.getLine(c),r=l.search(/\S/),o=c,t=l.length;c=c+1;for(var e=c,a=p.getLength();++c<a;){l=p.getLine(c);var i=l.search(/\S/);if(i!==-1){if(r>i)break;var n=this.getFoldWidgetRange(p,"all",c);if(n){if(n.start.row<=o)break;if(n.isMultiLine())c=n.end.row;else if(r==i)break}e=c}}return new g(o,t,e,p.getLine(e).length)},this.getCommentRegionBlock=function(p,c,l){for(var r=c.search(/\s*$/),o=p.getLength(),t=l,e=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;++l<o;){c=p.getLine(l);var i=e.exec(c);if(!!i&&(i[1]?a--:a++,!a))break}var n=l;if(n>t)return new g(t,r,n,c.length)}}.call(s.prototype)}),ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(u,h,$){var f=u("../lib/oop"),g=u("./text").Mode,d=u("./javascript_highlight_rules").JavaScriptHighlightRules,s=u("./matching_brace_outdent").MatchingBraceOutdent,p=u("../worker/worker_client").WorkerClient,c=u("./behaviour/cstyle").CstyleBehaviour,l=u("./folding/cstyle").FoldMode,r=function(){this.HighlightRules=d,this.$outdent=new s,this.$behaviour=new c,this.foldingRules=new l};f.inherits(r,g),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.getNextLineIndent=function(o,t,e){var a=this.$getIndent(t),i=this.getTokenizer().getLineTokens(t,o),n=i.tokens,m=i.state;if(n.length&&n[n.length-1].type=="comment")return a;if(o=="start"||o=="no_regex"){var x=t.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);x&&(a+=e)}else if(o=="doc-start"){if(m=="start"||m=="no_regex")return"";var x=t.match(/^\s*(\/?)\*/);x&&(x[1]&&(a+=" "),a+="* ")}return a},this.checkOutdent=function(o,t,e){return this.$outdent.checkOutdent(t,e)},this.autoOutdent=function(o,t,e){this.$outdent.autoOutdent(t,e)},this.createWorker=function(o){var t=new p(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return t.attachToDocument(o.getDocument()),t.on("annotate",function(e){o.setAnnotations(e.data)}),t.on("terminate",function(){o.clearAnnotations()}),t},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}.call(r.prototype),h.Mode=r}),function(){ace.require(["ace/mode/javascript"],function(u){y&&(y.exports=u)})}()})(W);var U={exports:{}};(function(y,C){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(u,h,$){var f=u("../lib/oop"),g=u("./text_highlight_rules").TextHighlightRules,d=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},d.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};f.inherits(d,g),d.getTagRule=function(s){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},d.getStartRule=function(s){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:s}},d.getEndRule=function(s){return{token:"comment.doc",regex:"\\*\\/",next:s}},h.DocCommentHighlightRules=d}),ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(u,h,$){var f=u("../lib/oop"),g=u("./doc_comment_highlight_rules").DocCommentHighlightRules,d=u("./text_highlight_rules").TextHighlightRules,s="[a-zA-Z\\$_\xA1-\uFFFF][a-zA-Z\\d\\$_\xA1-\uFFFF]*",p=function(r){var o=this.createKeywordMapper({"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},"identifier"),t="case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void",e="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";this.$rules={no_regex:[g.getStartRule("doc-start"),l("no_regex"),{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:["storage.type","punctuation.operator","support.function","punctuation.operator","entity.name.function","text","keyword.operator"],regex:"("+s+")(\\.)(prototype)(\\.)("+s+")(\\s*)(=)",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+s+")(\\.)("+s+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+s+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+s+")(\\.)("+s+")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","entity.name.function","text","paren.lparen"],regex:"(function)(\\s+)("+s+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","paren.lparen"],regex:"("+s+")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:`from(?=\\s*('|"))`},{token:"keyword",regex:"(?:"+t+")\\b",next:"start"},{token:["support.constant"],regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/},{token:o,regex:s},{token:"punctuation.operator",regex:/[.](?![.])/,next:"property"},{token:"storage.type",regex:/=>/,next:"start"},{token:"keyword.operator",regex:/--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"comment",regex:/^#!.*$/}],property:[{token:"text",regex:"\\s+"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+s+")(\\.)("+s+")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",next:"function_arguments"},{token:"punctuation.operator",regex:/[.](?![.])/},{token:"support.function",regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:"support.function.dom",regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:"support.constant",regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:"identifier",regex:s},{regex:"",token:"empty",next:"no_regex"}],start:[g.getStartRule("doc-start"),l("start"),{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],function_arguments:[{token:"variable.parameter",regex:s},{token:"punctuation.operator",regex:"[, ]+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],qqstring:[{token:"constant.language.escape",regex:e},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:e},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},(!r||!r.noES6)&&(this.$rules.no_regex.unshift({regex:"[{}]",onMatch:function(a,i,n){if(this.next=a=="{"?this.nextState:"",a=="{"&&n.length)n.unshift("start",i);else if(a=="}"&&n.length&&(n.shift(),this.next=n.shift(),this.next.indexOf("string")!=-1||this.next.indexOf("jsx")!=-1))return"paren.quasi.end";return a=="{"?"paren.lparen":"paren.rparen"},nextState:"start"},{token:"string.quasi.start",regex:/`/,push:[{token:"constant.language.escape",regex:e},{token:"paren.quasi.start",regex:/\${/,push:"start"},{token:"string.quasi.end",regex:/`/,next:"pop"},{defaultToken:"string.quasi"}]}),(!r||r.jsx!=!1)&&c.call(this)),this.embedRules(g,"doc-",[g.getEndRule("no_regex")]),this.normalizeRules()};f.inherits(p,d);function c(){var r=s.replace("\\d","\\d\\-"),o={onMatch:function(e,a,i){var n=e.charAt(1)=="/"?2:1;return n==1?(a!=this.nextState?i.unshift(this.next,this.nextState,0):i.unshift(this.next),i[2]++):n==2&&a==this.nextState&&(i[1]--,(!i[1]||i[1]<0)&&(i.shift(),i.shift())),[{type:"meta.tag.punctuation."+(n==1?"":"end-")+"tag-open.xml",value:e.slice(0,n)},{type:"meta.tag.tag-name.xml",value:e.substr(n)}]},regex:"</?"+r,next:"jsxAttributes",nextState:"jsx"};this.$rules.start.unshift(o);var t={regex:"{",token:"paren.quasi.start",push:"start"};this.$rules.jsx=[t,o,{include:"reference"},{defaultToken:"string"}],this.$rules.jsxAttributes=[{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",onMatch:function(e,a,i){return a==i[0]&&i.shift(),e.length==2&&(i[0]==this.nextState&&i[1]--,(!i[1]||i[1]<0)&&i.splice(0,2)),this.next=i[0]||"start",[{type:this.token,value:e}]},nextState:"jsx"},t,l("jsxAttributes"),{token:"entity.other.attribute-name.xml",regex:r},{token:"keyword.operator.attribute-equals.xml",regex:"="},{token:"text.tag-whitespace.xml",regex:"\\s+"},{token:"string.attribute-value.xml",regex:"'",stateName:"jsx_attr_q",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',stateName:"jsx_attr_qq",push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},o],this.$rules.reference=[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}]}function l(r){return[{token:"comment",regex:/\/\*/,next:[g.getTagRule(),{token:"comment",regex:"\\*\\/",next:r||"pop"},{defaultToken:"comment",caseInsensitive:!0}]},{token:"comment",regex:"\\/\\/",next:[g.getTagRule(),{token:"comment",regex:"$|^",next:r||"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}h.JavaScriptHighlightRules=p}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(u,h,$){var f=u("../range").Range,g=function(){};(function(){this.checkOutdent=function(d,s){return/^\s+$/.test(d)?/^\s*\}/.test(s):!1},this.autoOutdent=function(d,s){var p=d.getLine(s),c=p.match(/^(\s*\})/);if(!c)return 0;var l=c[1].length,r=d.findMatchingBracket({row:s,column:l});if(!r||r.row==s)return 0;var o=this.$getIndent(d.getLine(r.row));d.replace(new f(s,0,s,l-1),o)},this.$getIndent=function(d){return d.match(/^\s*/)[0]}}).call(g.prototype),h.MatchingBraceOutdent=g}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(u,h,$){var f=u("../../lib/oop"),g=u("../../range").Range,d=u("./fold_mode").FoldMode,s=h.FoldMode=function(p){p&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+p.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+p.end)))};f.inherits(s,d),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(p,c,l){var r=p.getLine(l);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var o=this._getFoldWidgetBase(p,c,l);return!o&&this.startRegionRe.test(r)?"start":o},this.getFoldWidgetRange=function(p,c,l,r){var o=p.getLine(l);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(p,o,l);var a=o.match(this.foldingStartMarker);if(a){var t=a.index;if(a[1])return this.openingBracketBlock(p,a[1],l,t);var e=p.getCommentFoldRange(l,t+a[0].length,1);return e&&!e.isMultiLine()&&(r?e=this.getSectionRange(p,l):c!="all"&&(e=null)),e}if(c!=="markbegin"){var a=o.match(this.foldingStopMarker);if(a){var t=a.index+a[0].length;return a[1]?this.closingBracketBlock(p,a[1],l,t):p.getCommentFoldRange(l,t,-1)}}},this.getSectionRange=function(p,c){var l=p.getLine(c),r=l.search(/\S/),o=c,t=l.length;c=c+1;for(var e=c,a=p.getLength();++c<a;){l=p.getLine(c);var i=l.search(/\S/);if(i!==-1){if(r>i)break;var n=this.getFoldWidgetRange(p,"all",c);if(n){if(n.start.row<=o)break;if(n.isMultiLine())c=n.end.row;else if(r==i)break}e=c}}return new g(o,t,e,p.getLine(e).length)},this.getCommentRegionBlock=function(p,c,l){for(var r=c.search(/\s*$/),o=p.getLength(),t=l,e=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;++l<o;){c=p.getLine(l);var i=e.exec(c);if(!!i&&(i[1]?a--:a++,!a))break}var n=l;if(n>t)return new g(t,r,n,c.length)}}.call(s.prototype)}),ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(u,h,$){var f=u("../lib/oop"),g=u("./text").Mode,d=u("./javascript_highlight_rules").JavaScriptHighlightRules,s=u("./matching_brace_outdent").MatchingBraceOutdent,p=u("../worker/worker_client").WorkerClient,c=u("./behaviour/cstyle").CstyleBehaviour,l=u("./folding/cstyle").FoldMode,r=function(){this.HighlightRules=d,this.$outdent=new s,this.$behaviour=new c,this.foldingRules=new l};f.inherits(r,g),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.getNextLineIndent=function(o,t,e){var a=this.$getIndent(t),i=this.getTokenizer().getLineTokens(t,o),n=i.tokens,m=i.state;if(n.length&&n[n.length-1].type=="comment")return a;if(o=="start"||o=="no_regex"){var x=t.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);x&&(a+=e)}else if(o=="doc-start"){if(m=="start"||m=="no_regex")return"";var x=t.match(/^\s*(\/?)\*/);x&&(x[1]&&(a+=" "),a+="* ")}return a},this.checkOutdent=function(o,t,e){return this.$outdent.checkOutdent(t,e)},this.autoOutdent=function(o,t,e){this.$outdent.autoOutdent(t,e)},this.createWorker=function(o){var t=new p(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return t.attachToDocument(o.getDocument()),t.on("annotate",function(e){o.setAnnotations(e.data)}),t.on("terminate",function(){o.clearAnnotations()}),t},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}.call(r.prototype),h.Mode=r}),ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(u,h,$){var f=u("../lib/oop");u("../lib/lang");var g=u("./text_highlight_rules").TextHighlightRules,d=h.supportType="align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index",s=h.supportFunction="rgb|rgba|url|attr|counter|counters",p=h.supportConstant="absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom",c=h.supportConstantColor="aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen",l=h.supportConstantFonts="arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace",r=h.numRe="\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))",o=h.pseudoElements="(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b",t=h.pseudoClasses="(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b",e=function(){var a=this.createKeywordMapper({"support.function":s,"support.constant":p,"support.type":d,"support.constant.color":c,"support.constant.fonts":l},"text",!0);this.$rules={start:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"ruleset"},{token:"paren.rparen",regex:"\\}"},{token:"string",regex:"@(?!viewport)",next:"media"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"keyword",regex:"%"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant.numeric",regex:r},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:!0}],media:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"start"},{token:"paren.rparen",regex:"\\}",next:"start"},{token:"string",regex:";",next:"start"},{token:"keyword",regex:"(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"}],comments:[{token:"comment",regex:"\\/\\*",push:[{token:"comment",regex:"\\*\\/",next:"pop"},{defaultToken:"comment"}]}],ruleset:[{regex:"-(webkit|ms|moz|o)-",token:"text"},{token:"punctuation.operator",regex:"[:;]"},{token:"paren.rparen",regex:"\\}",next:"start"},{include:["strings","url","comments"]},{token:["constant.numeric","keyword"],regex:"("+r+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"},{token:"constant.numeric",regex:r},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:["punctuation","entity.other.attribute-name.pseudo-element.css"],regex:o},{token:["punctuation","entity.other.attribute-name.pseudo-class.css"],regex:t},{include:"url"},{token:a,regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"},{caseInsensitive:!0}],url:[{token:"support.function",regex:"(?:url(:?-prefix)?|domain|regexp)\\(",push:[{token:"support.function",regex:"\\)",next:"pop"},{defaultToken:"string"}]}],strings:[{token:"string.start",regex:"'",push:[{token:"string.end",regex:"'|$",next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]},{token:"string.start",regex:'"',push:[{token:"string.end",regex:'"|$',next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]}],escapes:[{token:"constant.language.escape",regex:/\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/}]},this.normalizeRules()};f.inherits(e,g),h.CssHighlightRules=e}),ace.define("ace/mode/css_completions",["require","exports","module"],function(u,h,$){var f={background:{"#$0":1},"background-color":{"#$0":1,transparent:1,fixed:1},"background-image":{"url('/$0')":1},"background-repeat":{repeat:1,"repeat-x":1,"repeat-y":1,"no-repeat":1,inherit:1},"background-position":{bottom:2,center:2,left:2,right:2,top:2,inherit:2},"background-attachment":{scroll:1,fixed:1},"background-size":{cover:1,contain:1},"background-clip":{"border-box":1,"padding-box":1,"content-box":1},"background-origin":{"border-box":1,"padding-box":1,"content-box":1},border:{"solid $0":1,"dashed $0":1,"dotted $0":1,"#$0":1},"border-color":{"#$0":1},"border-style":{solid:2,dashed:2,dotted:2,double:2,groove:2,hidden:2,inherit:2,inset:2,none:2,outset:2,ridged:2},"border-collapse":{collapse:1,separate:1},bottom:{px:1,em:1,"%":1},clear:{left:1,right:1,both:1,none:1},color:{"#$0":1,"rgb(#$00,0,0)":1},cursor:{default:1,pointer:1,move:1,text:1,wait:1,help:1,progress:1,"n-resize":1,"ne-resize":1,"e-resize":1,"se-resize":1,"s-resize":1,"sw-resize":1,"w-resize":1,"nw-resize":1},display:{none:1,block:1,inline:1,"inline-block":1,"table-cell":1},"empty-cells":{show:1,hide:1},float:{left:1,right:1,none:1},"font-family":{Arial:2,"Comic Sans MS":2,Consolas:2,"Courier New":2,Courier:2,Georgia:2,Monospace:2,"Sans-Serif":2,"Segoe UI":2,Tahoma:2,"Times New Roman":2,"Trebuchet MS":2,Verdana:1},"font-size":{px:1,em:1,"%":1},"font-weight":{bold:1,normal:1},"font-style":{italic:1,normal:1},"font-variant":{normal:1,"small-caps":1},height:{px:1,em:1,"%":1},left:{px:1,em:1,"%":1},"letter-spacing":{normal:1},"line-height":{normal:1},"list-style-type":{none:1,disc:1,circle:1,square:1,decimal:1,"decimal-leading-zero":1,"lower-roman":1,"upper-roman":1,"lower-greek":1,"lower-latin":1,"upper-latin":1,georgian:1,"lower-alpha":1,"upper-alpha":1},margin:{px:1,em:1,"%":1},"margin-right":{px:1,em:1,"%":1},"margin-left":{px:1,em:1,"%":1},"margin-top":{px:1,em:1,"%":1},"margin-bottom":{px:1,em:1,"%":1},"max-height":{px:1,em:1,"%":1},"max-width":{px:1,em:1,"%":1},"min-height":{px:1,em:1,"%":1},"min-width":{px:1,em:1,"%":1},overflow:{hidden:1,visible:1,auto:1,scroll:1},"overflow-x":{hidden:1,visible:1,auto:1,scroll:1},"overflow-y":{hidden:1,visible:1,auto:1,scroll:1},padding:{px:1,em:1,"%":1},"padding-top":{px:1,em:1,"%":1},"padding-right":{px:1,em:1,"%":1},"padding-bottom":{px:1,em:1,"%":1},"padding-left":{px:1,em:1,"%":1},"page-break-after":{auto:1,always:1,avoid:1,left:1,right:1},"page-break-before":{auto:1,always:1,avoid:1,left:1,right:1},position:{absolute:1,relative:1,fixed:1,static:1},right:{px:1,em:1,"%":1},"table-layout":{fixed:1,auto:1},"text-decoration":{none:1,underline:1,"line-through":1,blink:1},"text-align":{left:1,right:1,center:1,justify:1},"text-transform":{capitalize:1,uppercase:1,lowercase:1,none:1},top:{px:1,em:1,"%":1},"vertical-align":{top:1,bottom:1},visibility:{hidden:1,visible:1},"white-space":{nowrap:1,normal:1,pre:1,"pre-line":1,"pre-wrap":1},width:{px:1,em:1,"%":1},"word-spacing":{normal:1},filter:{"alpha(opacity=$0100)":1},"text-shadow":{"$02px 2px 2px #777":1},"text-overflow":{"ellipsis-word":1,clip:1,ellipsis:1},"-moz-border-radius":1,"-moz-border-radius-topright":1,"-moz-border-radius-bottomright":1,"-moz-border-radius-topleft":1,"-moz-border-radius-bottomleft":1,"-webkit-border-radius":1,"-webkit-border-top-right-radius":1,"-webkit-border-top-left-radius":1,"-webkit-border-bottom-right-radius":1,"-webkit-border-bottom-left-radius":1,"-moz-box-shadow":1,"-webkit-box-shadow":1,transform:{"rotate($00deg)":1,"skew($00deg)":1},"-moz-transform":{"rotate($00deg)":1,"skew($00deg)":1},"-webkit-transform":{"rotate($00deg)":1,"skew($00deg)":1}},g=function(){};(function(){this.completionsDefined=!1,this.defineCompletions=function(){if(document){var d=document.createElement("c").style;for(var s in d)if(typeof d[s]=="string"){var p=s.replace(/[A-Z]/g,function(c){return"-"+c.toLowerCase()});f.hasOwnProperty(p)||(f[p]=1)}}this.completionsDefined=!0},this.getCompletions=function(d,s,p,c){if(this.completionsDefined||this.defineCompletions(),d==="ruleset"||s.$mode.$id=="ace/mode/scss"){var l=s.getLine(p.row).substr(0,p.column);return/:[^;]+$/.test(l)?(/([\w\-]+):[^:]*$/.test(l),this.getPropertyValueCompletions(d,s,p,c)):this.getPropertyCompletions(d,s,p,c)}return[]},this.getPropertyCompletions=function(d,s,p,c){var l=Object.keys(f);return l.map(function(r){return{caption:r,snippet:r+": $0;",meta:"property",score:1e6}})},this.getPropertyValueCompletions=function(d,s,p,c){var l=s.getLine(p.row).substr(0,p.column),r=(/([\w\-]+):[^:]*$/.exec(l)||{})[1];if(!r)return[];var o=[];return r in f&&typeof f[r]=="object"&&(o=Object.keys(f[r])),o.map(function(t){return{caption:t,snippet:t,meta:"property value",score:1e6}})}}).call(g.prototype),h.CssCompletions=g}),ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"],function(u,h,$){var f=u("../../lib/oop");u("../behaviour").Behaviour;var g=u("./cstyle").CstyleBehaviour,d=u("../../token_iterator").TokenIterator,s=function(){this.inherit(g),this.add("colon","insertion",function(p,c,l,r,o){if(o===":"&&l.selection.isEmpty()){var t=l.getCursorPosition(),e=new d(r,t.row,t.column),a=e.getCurrentToken();if(a&&a.value.match(/\s+/)&&(a=e.stepBackward()),a&&a.type==="support.type"){var i=r.doc.getLine(t.row),n=i.substring(t.column,t.column+1);if(n===":")return{text:"",selection:[1,1]};if(/^(\s+[^;]|\s*$)/.test(i.substring(t.column)))return{text:":;",selection:[1,1]}}}}),this.add("colon","deletion",function(p,c,l,r,o){var t=r.doc.getTextRange(o);if(!o.isMultiLine()&&t===":"){var e=l.getCursorPosition(),a=new d(r,e.row,e.column),i=a.getCurrentToken();if(i&&i.value.match(/\s+/)&&(i=a.stepBackward()),i&&i.type==="support.type"){var n=r.doc.getLine(o.start.row),m=n.substring(o.end.column,o.end.column+1);if(m===";")return o.end.column++,o}}}),this.add("semicolon","insertion",function(p,c,l,r,o){if(o===";"&&l.selection.isEmpty()){var t=l.getCursorPosition(),e=r.doc.getLine(t.row),a=e.substring(t.column,t.column+1);if(a===";")return{text:"",selection:[1,1]}}}),this.add("!important","insertion",function(p,c,l,r,o){if(o==="!"&&l.selection.isEmpty()){var t=l.getCursorPosition(),e=r.doc.getLine(t.row);if(/^\s*(;|}|$)/.test(e.substring(t.column)))return{text:"!important",selection:[10,10]}}})};f.inherits(s,g),h.CssBehaviour=s}),ace.define("ace/mode/css",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/css_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/css_completions","ace/mode/behaviour/css","ace/mode/folding/cstyle"],function(u,h,$){var f=u("../lib/oop"),g=u("./text").Mode,d=u("./css_highlight_rules").CssHighlightRules,s=u("./matching_brace_outdent").MatchingBraceOutdent,p=u("../worker/worker_client").WorkerClient,c=u("./css_completions").CssCompletions,l=u("./behaviour/css").CssBehaviour,r=u("./folding/cstyle").FoldMode,o=function(){this.HighlightRules=d,this.$outdent=new s,this.$behaviour=new l,this.$completer=new c,this.foldingRules=new r};f.inherits(o,g),function(){this.foldingRules="cStyle",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(t,e,a){var i=this.$getIndent(e),n=this.getTokenizer().getLineTokens(e,t).tokens;if(n.length&&n[n.length-1].type=="comment")return i;var m=e.match(/^.*\{\s*$/);return m&&(i+=a),i},this.checkOutdent=function(t,e,a){return this.$outdent.checkOutdent(e,a)},this.autoOutdent=function(t,e,a){this.$outdent.autoOutdent(e,a)},this.getCompletions=function(t,e,a,i){return this.$completer.getCompletions(t,e,a,i)},this.createWorker=function(t){var e=new p(["ace"],"ace/mode/css_worker","Worker");return e.attachToDocument(t.getDocument()),e.on("annotate",function(a){t.setAnnotations(a.data)}),e.on("terminate",function(){t.clearAnnotations()}),e},this.$id="ace/mode/css",this.snippetFileId="ace/snippets/css"}.call(o.prototype),h.Mode=o}),ace.define("ace/mode/xml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(u,h,$){var f=u("../lib/oop"),g=u("./text_highlight_rules").TextHighlightRules,d=function(s){var p="[_:a-zA-Z\xC0-\uFFFF][-_:.a-zA-Z0-9\xC0-\uFFFF]*";this.$rules={start:[{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\[",next:"cdata"},{token:["punctuation.instruction.xml","keyword.instruction.xml"],regex:"(<\\?)("+p+")",next:"processing_instruction"},{token:"comment.start.xml",regex:"<\\!--",next:"comment"},{token:["xml-pe.doctype.xml","xml-pe.doctype.xml"],regex:"(<\\!)(DOCTYPE)(?=[\\s])",next:"doctype",caseInsensitive:!0},{include:"tag"},{token:"text.end-tag-open.xml",regex:"</"},{token:"text.tag-open.xml",regex:"<"},{include:"reference"},{defaultToken:"text.xml"}],processing_instruction:[{token:"entity.other.attribute-name.decl-attribute-name.xml",regex:p},{token:"keyword.operator.decl-attribute-equals.xml",regex:"="},{include:"whitespace"},{include:"string"},{token:"punctuation.xml-decl.xml",regex:"\\?>",next:"start"}],doctype:[{include:"whitespace"},{include:"string"},{token:"xml-pe.doctype.xml",regex:">",next:"start"},{token:"xml-pe.xml",regex:"[-_a-zA-Z0-9:]+"},{token:"punctuation.int-subset",regex:"\\[",push:"int_subset"}],int_subset:[{token:"text.xml",regex:"\\s+"},{token:"punctuation.int-subset.xml",regex:"]",next:"pop"},{token:["punctuation.markup-decl.xml","keyword.markup-decl.xml"],regex:"(<\\!)("+p+")",push:[{token:"text",regex:"\\s+"},{token:"punctuation.markup-decl.xml",regex:">",next:"pop"},{include:"string"}]}],cdata:[{token:"string.cdata.xml",regex:"\\]\\]>",next:"start"},{token:"text.xml",regex:"\\s+"},{token:"text.xml",regex:"(?:[^\\]]|\\](?!\\]>))+"}],comment:[{token:"comment.end.xml",regex:"-->",next:"start"},{defaultToken:"comment.xml"}],reference:[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],attr_reference:[{token:"constant.language.escape.reference.attribute-value.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],tag:[{token:["meta.tag.punctuation.tag-open.xml","meta.tag.punctuation.end-tag-open.xml","meta.tag.tag-name.xml"],regex:"(?:(<)|(</))((?:"+p+":)?"+p+")",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start"}]}],tag_whitespace:[{token:"text.tag-whitespace.xml",regex:"\\s+"}],whitespace:[{token:"text.whitespace.xml",regex:"\\s+"}],string:[{token:"string.xml",regex:"'",push:[{token:"string.xml",regex:"'",next:"pop"},{defaultToken:"string.xml"}]},{token:"string.xml",regex:'"',push:[{token:"string.xml",regex:'"',next:"pop"},{defaultToken:"string.xml"}]}],attributes:[{token:"entity.other.attribute-name.xml",regex:p},{token:"keyword.operator.attribute-equals.xml",regex:"="},{include:"tag_whitespace"},{include:"attribute_value"}],attribute_value:[{token:"string.attribute-value.xml",regex:"'",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]}]},this.constructor===d&&this.normalizeRules()};(function(){this.embedTagRules=function(s,p,c){this.$rules.tag.unshift({token:["meta.tag.punctuation.tag-open.xml","meta.tag."+c+".tag-name.xml"],regex:"(<)("+c+"(?=\\s|>|$))",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:p+"start"}]}),this.$rules[c+"-end"]=[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start",onMatch:function(l,r,o){return o.splice(0),this.token}}],this.embedRules(s,p,[{token:["meta.tag.punctuation.end-tag-open.xml","meta.tag."+c+".tag-name.xml"],regex:"(</)("+c+"(?=\\s|>|$))",next:c+"-end"},{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\["},{token:"string.cdata.xml",regex:"\\]\\]>"}])}}).call(g.prototype),f.inherits(d,g),h.XmlHighlightRules=d}),ace.define("ace/mode/html_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/css_highlight_rules","ace/mode/javascript_highlight_rules","ace/mode/xml_highlight_rules"],function(u,h,$){var f=u("../lib/oop"),g=u("../lib/lang"),d=u("./css_highlight_rules").CssHighlightRules,s=u("./javascript_highlight_rules").JavaScriptHighlightRules,p=u("./xml_highlight_rules").XmlHighlightRules,c=g.createMap({a:"anchor",button:"form",form:"form",img:"image",input:"form",label:"form",option:"form",script:"script",select:"form",textarea:"form",style:"style",table:"table",tbody:"table",td:"table",tfoot:"table",th:"table",tr:"table"}),l=function(){p.call(this),this.addRules({attributes:[{include:"tag_whitespace"},{token:"entity.other.attribute-name.xml",regex:"[-_a-zA-Z0-9:.]+"},{token:"keyword.operator.attribute-equals.xml",regex:"=",push:[{include:"tag_whitespace"},{token:"string.unquoted.attribute-value.html",regex:"[^<>='\"`\\s]+",next:"pop"},{token:"empty",regex:"",next:"pop"}]},{include:"attribute_value"}],tag:[{token:function(r,o){var t=c[o];return["meta.tag.punctuation."+(r=="<"?"":"end-")+"tag-open.xml","meta.tag"+(t?"."+t:"")+".tag-name.xml"]},regex:"(</?)([-_a-zA-Z0-9:.]+)",next:"tag_stuff"}],tag_stuff:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start"}]}),this.embedTagRules(d,"css-","style"),this.embedTagRules(new s({jsx:!1}).getRules(),"js-","script"),this.constructor===l&&this.normalizeRules()};f.inherits(l,p),h.HtmlHighlightRules=l}),ace.define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(u,h,$){var f=u("../../lib/oop"),g=u("../behaviour").Behaviour,d=u("../../token_iterator").TokenIterator;u("../../lib/lang");function s(c,l){return c&&c.type.lastIndexOf(l+".xml")>-1}var p=function(){this.add("string_dquotes","insertion",function(c,l,r,o,t){if(t=='"'||t=="'"){var e=t,a=o.doc.getTextRange(r.getSelectionRange());if(a!==""&&a!=="'"&&a!='"'&&r.getWrapBehavioursEnabled())return{text:e+a+e,selection:!1};var i=r.getCursorPosition(),n=o.doc.getLine(i.row),m=n.substring(i.column,i.column+1),x=new d(o,i.row,i.column),b=x.getCurrentToken();if(m==e&&(s(b,"attribute-value")||s(b,"string")))return{text:"",selection:[1,1]};if(b||(b=x.stepBackward()),!b)return;for(;s(b,"tag-whitespace")||s(b,"whitespace");)b=x.stepBackward();var k=!m||m.match(/\s/);if(s(b,"attribute-equals")&&(k||m==">")||s(b,"decl-attribute-equals")&&(k||m=="?"))return{text:e+e,selection:[1,1]}}}),this.add("string_dquotes","deletion",function(c,l,r,o,t){var e=o.doc.getTextRange(t);if(!t.isMultiLine()&&(e=='"'||e=="'")){var a=o.doc.getLine(t.start.row),i=a.substring(t.start.column+1,t.start.column+2);if(i==e)return t.end.column++,t}}),this.add("autoclosing","insertion",function(c,l,r,o,t){if(t==">"){var e=r.getSelectionRange().start,a=new d(o,e.row,e.column),i=a.getCurrentToken()||a.stepBackward();if(!i||!(s(i,"tag-name")||s(i,"tag-whitespace")||s(i,"attribute-name")||s(i,"attribute-equals")||s(i,"attribute-value"))||s(i,"reference.attribute-value"))return;if(s(i,"attribute-value")){var n=a.getCurrentTokenColumn()+i.value.length;if(e.column<n)return;if(e.column==n){var m=a.stepForward();if(m&&s(m,"attribute-value"))return;a.stepBackward()}}if(/^\s*>/.test(o.getLine(e.row).slice(e.column)))return;for(;!s(i,"tag-name");)if(i=a.stepBackward(),i.value=="<"){i=a.stepForward();break}var x=a.getCurrentTokenRow(),b=a.getCurrentTokenColumn();if(s(a.stepBackward(),"end-tag-open"))return;var k=i.value;return x==e.row&&(k=k.substring(0,e.column-b)),this.voidElements.hasOwnProperty(k.toLowerCase())?void 0:{text:"></"+k+">",selection:[1,1]}}}),this.add("autoindent","insertion",function(c,l,r,o,t){if(t==`
`){var e=r.getCursorPosition(),a=o.getLine(e.row),i=new d(o,e.row,e.column),n=i.getCurrentToken();if(n&&n.type.indexOf("tag-close")!==-1){if(n.value=="/>")return;for(;n&&n.type.indexOf("tag-name")===-1;)n=i.stepBackward();if(!n)return;var m=n.value,x=i.getCurrentTokenRow();if(n=i.stepBackward(),!n||n.type.indexOf("end-tag")!==-1)return;if(this.voidElements&&!this.voidElements[m]){var b=o.getTokenAt(e.row,e.column+1),a=o.getLine(x),k=this.$getIndent(a),R=k+o.getTabString();return b&&b.value==="</"?{text:`
`+R+`
`+k,selection:[1,R.length,1,R.length]}:{text:`
`+R}}}}})};f.inherits(p,g),h.XmlBehaviour=p}),ace.define("ace/mode/folding/mixed",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode"],function(u,h,$){var f=u("../../lib/oop"),g=u("./fold_mode").FoldMode,d=h.FoldMode=function(s,p){this.defaultMode=s,this.subModes=p};f.inherits(d,g),function(){this.$getMode=function(s){typeof s!="string"&&(s=s[0]);for(var p in this.subModes)if(s.indexOf(p)===0)return this.subModes[p];return null},this.$tryMode=function(s,p,c,l){var r=this.$getMode(s);return r?r.getFoldWidget(p,c,l):""},this.getFoldWidget=function(s,p,c){return this.$tryMode(s.getState(c-1),s,p,c)||this.$tryMode(s.getState(c),s,p,c)||this.defaultMode.getFoldWidget(s,p,c)},this.getFoldWidgetRange=function(s,p,c){var l=this.$getMode(s.getState(c-1));return(!l||!l.getFoldWidget(s,p,c))&&(l=this.$getMode(s.getState(c))),(!l||!l.getFoldWidget(s,p,c))&&(l=this.defaultMode),l.getFoldWidgetRange(s,p,c)}}.call(d.prototype)}),ace.define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/range","ace/mode/folding/fold_mode","ace/token_iterator"],function(u,h,$){var f=u("../../lib/oop");u("../../lib/lang");var g=u("../../range").Range,d=u("./fold_mode").FoldMode,s=u("../../token_iterator").TokenIterator,p=h.FoldMode=function(r,o){d.call(this),this.voidElements=r||{},this.optionalEndTags=f.mixin({},this.voidElements),o&&f.mixin(this.optionalEndTags,o)};f.inherits(p,d);var c=function(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};function l(r,o){return r.type.lastIndexOf(o+".xml")>-1}(function(){this.getFoldWidget=function(r,o,t){var e=this._getFirstTagInLine(r,t);return e?e.closing||!e.tagName&&e.selfClosing?o=="markbeginend"?"end":"":!e.tagName||e.selfClosing||this.voidElements.hasOwnProperty(e.tagName.toLowerCase())||this._findEndTagInLine(r,t,e.tagName,e.end.column)?"":"start":this.getCommentFoldWidget(r,t)},this.getCommentFoldWidget=function(r,o){return/comment/.test(r.getState(o))&&/<!-/.test(r.getLine(o))?"start":""},this._getFirstTagInLine=function(r,o){for(var t=r.getTokens(o),e=new c,a=0;a<t.length;a++){var i=t[a];if(l(i,"tag-open")){if(e.end.column=e.start.column+i.value.length,e.closing=l(i,"end-tag-open"),i=t[++a],!i)return null;for(e.tagName=i.value,e.end.column+=i.value.length,a++;a<t.length;a++)if(i=t[a],e.end.column+=i.value.length,l(i,"tag-close")){e.selfClosing=i.value=="/>";break}return e}else if(l(i,"tag-close"))return e.selfClosing=i.value=="/>",e;e.start.column+=i.value.length}return null},this._findEndTagInLine=function(r,o,t,e){for(var a=r.getTokens(o),i=0,n=0;n<a.length;n++){var m=a[n];if(i+=m.value.length,!(i<e)&&l(m,"end-tag-open")&&(m=a[n+1],m&&m.value==t))return!0}return!1},this._readTagForward=function(r){var o=r.getCurrentToken();if(!o)return null;var t=new c;do if(l(o,"tag-open"))t.closing=l(o,"end-tag-open"),t.start.row=r.getCurrentTokenRow(),t.start.column=r.getCurrentTokenColumn();else if(l(o,"tag-name"))t.tagName=o.value;else if(l(o,"tag-close"))return t.selfClosing=o.value=="/>",t.end.row=r.getCurrentTokenRow(),t.end.column=r.getCurrentTokenColumn()+o.value.length,r.stepForward(),t;while(o=r.stepForward());return null},this._readTagBackward=function(r){var o=r.getCurrentToken();if(!o)return null;var t=new c;do{if(l(o,"tag-open"))return t.closing=l(o,"end-tag-open"),t.start.row=r.getCurrentTokenRow(),t.start.column=r.getCurrentTokenColumn(),r.stepBackward(),t;l(o,"tag-name")?t.tagName=o.value:l(o,"tag-close")&&(t.selfClosing=o.value=="/>",t.end.row=r.getCurrentTokenRow(),t.end.column=r.getCurrentTokenColumn()+o.value.length)}while(o=r.stepBackward());return null},this._pop=function(r,o){for(;r.length;){var t=r[r.length-1];if(!o||t.tagName==o.tagName)return r.pop();if(this.optionalEndTags.hasOwnProperty(t.tagName)){r.pop();continue}else return null}},this.getFoldWidgetRange=function(r,o,t){var e=this._getFirstTagInLine(r,t);if(!e)return this.getCommentFoldWidget(r,t)&&r.getCommentFoldRange(t,r.getLine(t).length);var a=e.closing||e.selfClosing,i=[],n;if(a)for(var m=new s(r,t,e.end.column),b={row:t,column:e.start.column};n=this._readTagBackward(m);){if(n.selfClosing){if(i.length)continue;return n.start.column+=n.tagName.length+2,n.end.column-=2,g.fromPoints(n.start,n.end)}if(n.closing)i.push(n);else if(this._pop(i,n),i.length==0)return n.start.column+=n.tagName.length+2,n.start.row==n.end.row&&n.start.column<n.end.column&&(n.start.column=n.end.column),g.fromPoints(n.start,b)}else{var m=new s(r,t,e.start.column),x={row:t,column:e.start.column+e.tagName.length+2};for(e.start.row==e.end.row&&(x.column=e.end.column);n=this._readTagForward(m);){if(n.selfClosing){if(i.length)continue;return n.start.column+=n.tagName.length+2,n.end.column-=2,g.fromPoints(n.start,n.end)}if(n.closing){if(this._pop(i,n),i.length==0)return g.fromPoints(x,n.start)}else i.push(n)}}}}).call(p.prototype)}),ace.define("ace/mode/folding/html",["require","exports","module","ace/lib/oop","ace/mode/folding/mixed","ace/mode/folding/xml","ace/mode/folding/cstyle"],function(u,h,$){var f=u("../../lib/oop"),g=u("./mixed").FoldMode,d=u("./xml").FoldMode,s=u("./cstyle").FoldMode,p=h.FoldMode=function(c,l){g.call(this,new d(c,l),{"js-":new s,"css-":new s})};f.inherits(p,g)}),ace.define("ace/mode/html_completions",["require","exports","module","ace/token_iterator"],function(u,h,$){var f=u("../token_iterator").TokenIterator,g=["accesskey","class","contenteditable","contextmenu","dir","draggable","dropzone","hidden","id","inert","itemid","itemprop","itemref","itemscope","itemtype","lang","spellcheck","style","tabindex","title","translate"],d=["onabort","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontextmenu","oncuechange","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onpause","onplay","onplaying","onprogress","onratechange","onreset","onscroll","onseeked","onseeking","onselect","onshow","onstalled","onsubmit","onsuspend","ontimeupdate","onvolumechange","onwaiting"],s=g.concat(d),p={a:{href:1,target:{_blank:1,top:1},ping:1,rel:{nofollow:1,alternate:1,author:1,bookmark:1,help:1,license:1,next:1,noreferrer:1,prefetch:1,prev:1,search:1,tag:1},media:1,hreflang:1,type:1},abbr:{},address:{},area:{shape:1,coords:1,href:1,hreflang:1,alt:1,target:1,media:1,rel:1,ping:1,type:1},article:{pubdate:1},aside:{},audio:{src:1,autobuffer:1,autoplay:{autoplay:1},loop:{loop:1},controls:{controls:1},muted:{muted:1},preload:{auto:1,metadata:1,none:1}},b:{},base:{href:1,target:1},bdi:{},bdo:{},blockquote:{cite:1},body:{onafterprint:1,onbeforeprint:1,onbeforeunload:1,onhashchange:1,onmessage:1,onoffline:1,onpopstate:1,onredo:1,onresize:1,onstorage:1,onundo:1,onunload:1},br:{},button:{autofocus:1,disabled:{disabled:1},form:1,formaction:1,formenctype:1,formmethod:1,formnovalidate:1,formtarget:1,name:1,value:1,type:{button:1,submit:1}},canvas:{width:1,height:1},caption:{},cite:{},code:{},col:{span:1},colgroup:{span:1},command:{type:1,label:1,icon:1,disabled:1,checked:1,radiogroup:1,command:1},data:{},datalist:{},dd:{},del:{cite:1,datetime:1},details:{open:1},dfn:{},dialog:{open:1},div:{},dl:{},dt:{},em:{},embed:{src:1,height:1,width:1,type:1},fieldset:{disabled:1,form:1,name:1},figcaption:{},figure:{},footer:{},form:{"accept-charset":1,action:1,autocomplete:1,enctype:{"multipart/form-data":1,"application/x-www-form-urlencoded":1},method:{get:1,post:1},name:1,novalidate:1,target:{_blank:1,top:1}},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},head:{},header:{},hr:{},html:{manifest:1},i:{},iframe:{name:1,src:1,height:1,width:1,sandbox:{"allow-same-origin":1,"allow-top-navigation":1,"allow-forms":1,"allow-scripts":1},seamless:{seamless:1}},img:{alt:1,src:1,height:1,width:1,usemap:1,ismap:1},input:{type:{text:1,password:1,hidden:1,checkbox:1,submit:1,radio:1,file:1,button:1,reset:1,image:31,color:1,date:1,datetime:1,"datetime-local":1,email:1,month:1,number:1,range:1,search:1,tel:1,time:1,url:1,week:1},accept:1,alt:1,autocomplete:{on:1,off:1},autofocus:{autofocus:1},checked:{checked:1},disabled:{disabled:1},form:1,formaction:1,formenctype:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},formmethod:{get:1,post:1},formnovalidate:{formnovalidate:1},formtarget:{_blank:1,_self:1,_parent:1,_top:1},height:1,list:1,max:1,maxlength:1,min:1,multiple:{multiple:1},name:1,pattern:1,placeholder:1,readonly:{readonly:1},required:{required:1},size:1,src:1,step:1,width:1,files:1,value:1},ins:{cite:1,datetime:1},kbd:{},keygen:{autofocus:1,challenge:{challenge:1},disabled:{disabled:1},form:1,keytype:{rsa:1,dsa:1,ec:1},name:1},label:{form:1,for:1},legend:{},li:{value:1},link:{href:1,hreflang:1,rel:{stylesheet:1,icon:1},media:{all:1,screen:1,print:1},type:{"text/css":1,"image/png":1,"image/jpeg":1,"image/gif":1},sizes:1},main:{},map:{name:1},mark:{},math:{},menu:{type:1,label:1},meta:{"http-equiv":{"content-type":1},name:{description:1,keywords:1},content:{"text/html; charset=UTF-8":1},charset:1},meter:{value:1,min:1,max:1,low:1,high:1,optimum:1},nav:{},noscript:{href:1},object:{param:1,data:1,type:1,height:1,width:1,usemap:1,name:1,form:1,classid:1},ol:{start:1,reversed:1},optgroup:{disabled:1,label:1},option:{disabled:1,selected:1,label:1,value:1},output:{for:1,form:1,name:1},p:{},param:{name:1,value:1},pre:{},progress:{value:1,max:1},q:{cite:1},rp:{},rt:{},ruby:{},s:{},samp:{},script:{charset:1,type:{"text/javascript":1},src:1,defer:1,async:1},select:{autofocus:1,disabled:1,form:1,multiple:{multiple:1},name:1,size:1,readonly:{readonly:1}},small:{},source:{src:1,type:1,media:1},span:{},strong:{},style:{type:1,media:{all:1,screen:1,print:1},scoped:1},sub:{},sup:{},svg:{},table:{summary:1},tbody:{},td:{headers:1,rowspan:1,colspan:1},textarea:{autofocus:{autofocus:1},disabled:{disabled:1},form:1,maxlength:1,name:1,placeholder:1,readonly:{readonly:1},required:{required:1},rows:1,cols:1,wrap:{on:1,off:1,hard:1,soft:1}},tfoot:{},th:{headers:1,rowspan:1,colspan:1,scope:1},thead:{},time:{datetime:1},title:{},tr:{},track:{kind:1,src:1,srclang:1,label:1,default:1},section:{},summary:{},u:{},ul:{},var:{},video:{src:1,autobuffer:1,autoplay:{autoplay:1},loop:{loop:1},controls:{controls:1},width:1,height:1,poster:1,muted:{muted:1},preload:{auto:1,metadata:1,none:1}},wbr:{}},c=Object.keys(p);function l(e,a){return e.type.lastIndexOf(a+".xml")>-1}function r(e,a){for(var i=new f(e,a.row,a.column),n=i.getCurrentToken();n&&!l(n,"tag-name");)n=i.stepBackward();if(n)return n.value}function o(e,a){for(var i=new f(e,a.row,a.column),n=i.getCurrentToken();n&&!l(n,"attribute-name");)n=i.stepBackward();if(n)return n.value}var t=function(){};(function(){this.getCompletions=function(e,a,i,n){var m=a.getTokenAt(i.row,i.column);if(!m)return[];if(l(m,"tag-name")||l(m,"tag-open")||l(m,"end-tag-open"))return this.getTagCompletions(e,a,i,n);if(l(m,"tag-whitespace")||l(m,"attribute-name"))return this.getAttributeCompletions(e,a,i,n);if(l(m,"attribute-value"))return this.getAttributeValueCompletions(e,a,i,n);var x=a.getLine(i.row).substr(0,i.column);return/&[a-z]*$/i.test(x)?this.getHTMLEntityCompletions(e,a,i,n):[]},this.getTagCompletions=function(e,a,i,n){return c.map(function(m){return{value:m,meta:"tag",score:1e6}})},this.getAttributeCompletions=function(e,a,i,n){var m=r(a,i);if(!m)return[];var x=s;return m in p&&(x=x.concat(Object.keys(p[m]))),x.map(function(b){return{caption:b,snippet:b+'="$0"',meta:"attribute",score:1e6}})},this.getAttributeValueCompletions=function(e,a,i,n){var m=r(a,i),x=o(a,i);if(!m)return[];var b=[];return m in p&&x in p[m]&&typeof p[m][x]=="object"&&(b=Object.keys(p[m][x])),b.map(function(k){return{caption:k,snippet:k,meta:"attribute value",score:1e6}})},this.getHTMLEntityCompletions=function(e,a,i,n){var m=["Aacute;","aacute;","Acirc;","acirc;","acute;","AElig;","aelig;","Agrave;","agrave;","alefsym;","Alpha;","alpha;","amp;","and;","ang;","Aring;","aring;","asymp;","Atilde;","atilde;","Auml;","auml;","bdquo;","Beta;","beta;","brvbar;","bull;","cap;","Ccedil;","ccedil;","cedil;","cent;","Chi;","chi;","circ;","clubs;","cong;","copy;","crarr;","cup;","curren;","Dagger;","dagger;","dArr;","darr;","deg;","Delta;","delta;","diams;","divide;","Eacute;","eacute;","Ecirc;","ecirc;","Egrave;","egrave;","empty;","emsp;","ensp;","Epsilon;","epsilon;","equiv;","Eta;","eta;","ETH;","eth;","Euml;","euml;","euro;","exist;","fnof;","forall;","frac12;","frac14;","frac34;","frasl;","Gamma;","gamma;","ge;","gt;","hArr;","harr;","hearts;","hellip;","Iacute;","iacute;","Icirc;","icirc;","iexcl;","Igrave;","igrave;","image;","infin;","int;","Iota;","iota;","iquest;","isin;","Iuml;","iuml;","Kappa;","kappa;","Lambda;","lambda;","lang;","laquo;","lArr;","larr;","lceil;","ldquo;","le;","lfloor;","lowast;","loz;","lrm;","lsaquo;","lsquo;","lt;","macr;","mdash;","micro;","middot;","minus;","Mu;","mu;","nabla;","nbsp;","ndash;","ne;","ni;","not;","notin;","nsub;","Ntilde;","ntilde;","Nu;","nu;","Oacute;","oacute;","Ocirc;","ocirc;","OElig;","oelig;","Ograve;","ograve;","oline;","Omega;","omega;","Omicron;","omicron;","oplus;","or;","ordf;","ordm;","Oslash;","oslash;","Otilde;","otilde;","otimes;","Ouml;","ouml;","para;","part;","permil;","perp;","Phi;","phi;","Pi;","pi;","piv;","plusmn;","pound;","Prime;","prime;","prod;","prop;","Psi;","psi;","quot;","radic;","rang;","raquo;","rArr;","rarr;","rceil;","rdquo;","real;","reg;","rfloor;","Rho;","rho;","rlm;","rsaquo;","rsquo;","sbquo;","Scaron;","scaron;","sdot;","sect;","shy;","Sigma;","sigma;","sigmaf;","sim;","spades;","sub;","sube;","sum;","sup;","sup1;","sup2;","sup3;","supe;","szlig;","Tau;","tau;","there4;","Theta;","theta;","thetasym;","thinsp;","THORN;","thorn;","tilde;","times;","trade;","Uacute;","uacute;","uArr;","uarr;","Ucirc;","ucirc;","Ugrave;","ugrave;","uml;","upsih;","Upsilon;","upsilon;","Uuml;","uuml;","weierp;","Xi;","xi;","Yacute;","yacute;","yen;","Yuml;","yuml;","Zeta;","zeta;","zwj;","zwnj;"];return m.map(function(x){return{caption:x,snippet:x,meta:"html entity",score:1e6}})}}).call(t.prototype),h.HtmlCompletions=t}),ace.define("ace/mode/html",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text","ace/mode/javascript","ace/mode/css","ace/mode/html_highlight_rules","ace/mode/behaviour/xml","ace/mode/folding/html","ace/mode/html_completions","ace/worker/worker_client"],function(u,h,$){var f=u("../lib/oop"),g=u("../lib/lang"),d=u("./text").Mode,s=u("./javascript").Mode,p=u("./css").Mode,c=u("./html_highlight_rules").HtmlHighlightRules,l=u("./behaviour/xml").XmlBehaviour,r=u("./folding/html").FoldMode,o=u("./html_completions").HtmlCompletions,t=u("../worker/worker_client").WorkerClient,e=["area","base","br","col","embed","hr","img","input","keygen","link","meta","menuitem","param","source","track","wbr"],a=["li","dt","dd","p","rt","rp","optgroup","option","colgroup","td","th"],i=function(n){this.fragmentContext=n&&n.fragmentContext,this.HighlightRules=c,this.$behaviour=new l,this.$completer=new o,this.createModeDelegates({"js-":s,"css-":p}),this.foldingRules=new r(this.voidElements,g.arrayToMap(a))};f.inherits(i,d),function(){this.blockComment={start:"<!--",end:"-->"},this.voidElements=g.arrayToMap(e),this.getNextLineIndent=function(n,m,x){return this.$getIndent(m)},this.checkOutdent=function(n,m,x){return!1},this.getCompletions=function(n,m,x,b){return this.$completer.getCompletions(n,m,x,b)},this.createWorker=function(n){if(this.constructor==i){var m=new t(["ace"],"ace/mode/html_worker","Worker");return m.attachToDocument(n.getDocument()),this.fragmentContext&&m.call("setOptions",[{context:this.fragmentContext}]),m.on("error",function(x){n.setAnnotations(x.data)}),m.on("terminate",function(){n.clearAnnotations()}),m}},this.$id="ace/mode/html",this.snippetFileId="ace/snippets/html"}.call(i.prototype),h.Mode=i}),function(){ace.require(["ace/mode/html"],function(u){y&&(y.exports=u)})}()})(U);var X={exports:{}};(function(y,C){ace.define("ace/snippets/javascript",["require","exports","module"],function(u,h,$){h.snippetText=`# Prototype
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
`,h.scope="javascript"}),function(){ace.require(["ace/snippets/javascript"],function(u){y&&(y.exports=u)})}()})(X);var Y={exports:{}};(function(y,C){ace.define("ace/snippets/html",["require","exports","module"],function(u,h,$){h.snippetText=`# Some useful Unicode entities
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
`,h.scope="html"}),function(){ace.require(["ace/snippets/html"],function(u){y&&(y.exports=u)})}()})(Y);var V="/assets/worker-javascript.2d639baa.js",J="/assets/worker-html.cf1cf9fc.js";const T=y=>(O("data-v-1134501f"),y=y(),j(),y),Z={class:"panel"},G={class:"inputPanel"},K={class:"header"},Q=T(()=>v("span",{class:"i-icon-park-outline-indent-right"},null,-1)),ee=T(()=>v("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),te=T(()=>v("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),ne={class:"inputPanel"},ae={class:"header"},ie=T(()=>v("span",{class:"i-icon-park-outline-indent-right"},null,-1)),re=T(()=>v("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),oe=T(()=>v("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),se={class:"inputPanel"},le={class:"header"},pe=T(()=>v("span",{class:"i-icon-park-outline-indent-right"},null,-1)),ue=T(()=>v("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),ce=T(()=>v("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),de=["srcdoc"],ge={setup(y){E.config.setModuleUrl("ace/mode/css_worker",P),E.config.setModuleUrl("ace/mode/javascript_worker",V),E.config.setModuleUrl("ace/mode/html_worker",J);const C=E.require("ace/ext/beautify"),u={},h=M(""),$=M(""),f=M(""),g=H(()=>h.value+$.value+f.value===""?"\u8F93\u5165\u5185\u5BB9\u4EE5\u5728\u6B64\u5C55\u793A":h.value+"<style>"+$.value+"</style><script>"+f.value+"<\/script>"),d=M(!1);function s(t,e){t.getSession().setTabSize(2),t.getSession().setUseSoftTabs(!0),t.setShowPrintMargin(!1),u[e]=t}function p(t){u[t]&&C.beautify(u[t].session)}function c(t){var e;(e=u[t])==null||e.session.foldAll()}function l(t){var e;(e=u[t])==null||e.session.unfold()}function r(){d.value=!d.value}function o(){window.open("","_blank").document.write(g.value)}return(t,e)=>{const a=z,i=q;return L(),I("div",Z,[A(v("div",G,[v("div",K,[w(a,{type:"primary",title:"\u683C\u5F0F\u5316",onClick:e[0]||(e[0]=n=>p("html"))},{icon:_(()=>[Q]),_:1}),w(a,{type:"primary",title:"\u6298\u53E0\u6240\u6709",onClick:e[1]||(e[1]=n=>c("html"))},{icon:_(()=>[ee]),_:1}),w(a,{type:"primary",title:"\u5C55\u5F00\u6240\u6709",onClick:e[2]||(e[2]=n=>l("html"))},{icon:_(()=>[te]),_:1})]),w(S(D),{value:h.value,"onUpdate:value":e[3]||(e[3]=n=>h.value=n),lang:"html",theme:"textmate",style:{height:"calc(100% - 4.2rem)"},placeholder:"\u8BF7\u8F93\u5165HTML\u5185\u5BB9",options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:e[4]||(e[4]=n=>s(n,"html"))},null,8,["value"])],512),[[F,!d.value]]),A(v("div",ne,[v("div",ae,[w(a,{type:"primary",title:"\u683C\u5F0F\u5316",onClick:e[5]||(e[5]=n=>p("css"))},{icon:_(()=>[ie]),_:1}),w(a,{type:"primary",title:"\u6298\u53E0\u6240\u6709",onClick:e[6]||(e[6]=n=>c("js"))},{icon:_(()=>[re]),_:1}),w(a,{type:"primary",title:"\u5C55\u5F00\u6240\u6709",onClick:e[7]||(e[7]=n=>l("js"))},{icon:_(()=>[oe]),_:1})]),w(S(D),{value:f.value,"onUpdate:value":e[8]||(e[8]=n=>f.value=n),lang:"javascript",theme:"textmate",style:{height:"calc(100% - 4.2rem)"},placeholder:"\u8BF7\u8F93\u5165JS\u5185\u5BB9",options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:e[9]||(e[9]=n=>s(n,"js"))},null,8,["value"])],512),[[F,!d.value]]),A(v("div",se,[v("div",le,[w(a,{type:"primary",title:"\u683C\u5F0F\u5316",onClick:e[10]||(e[10]=n=>p("css"))},{icon:_(()=>[pe]),_:1}),w(a,{type:"primary",title:"\u6298\u53E0\u6240\u6709",onClick:e[11]||(e[11]=n=>c("css"))},{icon:_(()=>[ue]),_:1}),w(a,{type:"primary",title:"\u5C55\u5F00\u6240\u6709",onClick:e[12]||(e[12]=n=>l("css"))},{icon:_(()=>[ce]),_:1})]),w(S(D),{value:$.value,"onUpdate:value":e[13]||(e[13]=n=>$.value=n),lang:"css",theme:"textmate",style:{height:"calc(100% - 4.2rem)"},placeholder:"\u8BF7\u8F93\u5165CSS\u5185\u5BB9",options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:e[14]||(e[14]=n=>s(n,"css"))},null,8,["value"])],512),[[F,!d.value]]),v("div",{class:N(["displayPanel",{fullPanel:d.value}])},[w(i,{class:"fullScreen"},{default:_(()=>[d.value?(L(),I("span",{key:0,class:"i-icon-park-outline-off-screen",title:"\u9000\u51FA\u5B8C\u6574\u5C55\u793A",onClick:r})):(L(),I("span",{key:1,class:"i-icon-park-outline-full-screen",title:"\u5B8C\u6574\u5C55\u793A",onClick:r})),v("span",{class:"i-fa-solid-external-link-alt",title:"\u65B0\u6807\u7B7E\u6253\u5F00",onClick:o})]),_:1}),v("iframe",{"w-full":"","h-full":"",srcdoc:S(g),seamless:"",title:"\u5C55\u793A\u9762\u677F"},null,8,de)],2)])}}};var ve=B(ge,[["__scopeId","data-v-1134501f"]]);export{ve as default};
