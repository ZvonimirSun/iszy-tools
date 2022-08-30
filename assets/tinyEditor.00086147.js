import{_ as H,r as M,cQ as z,D as N,m as D,f as O,o as S,J as A,a1 as F,a2 as I,L as v,a as k,w as _,at as R,b4 as j,B as P,b0 as W,b1 as q}from"./index.0500d8ac.js";import{_ as U}from"./index.b5f212a0.js";import{a as E,V as B}from"./ext-beautify.1bd3edf8.js";import{w as X}from"./worker-css.3ba9763e.js";import{w as Y}from"./worker-javascript.29f02170.js";import"./useFlexGapSupport.af4ff067.js";var V={exports:{}};(function(w,L){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(u,h,$){var f=u("../lib/oop"),g=u("./text_highlight_rules").TextHighlightRules,m=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},m.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};f.inherits(m,g),m.getTagRule=function(s){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},m.getStartRule=function(s){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:s}},m.getEndRule=function(s){return{token:"comment.doc",regex:"\\*\\/",next:s}},h.DocCommentHighlightRules=m}),ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(u,h,$){var f=u("../lib/oop"),g=u("./doc_comment_highlight_rules").DocCommentHighlightRules,m=u("./text_highlight_rules").TextHighlightRules,s="[a-zA-Z\\$_\xA1-\uFFFF][a-zA-Z\\d\\$_\xA1-\uFFFF]*",p=function(i){var o=this.createKeywordMapper({"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},"identifier"),a="case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void",t="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";this.$rules={no_regex:[g.getStartRule("doc-start"),l("no_regex"),{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:["storage.type","punctuation.operator","support.function","punctuation.operator","entity.name.function","text","keyword.operator"],regex:"("+s+")(\\.)(prototype)(\\.)("+s+")(\\s*)(=)",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+s+")(\\.)("+s+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+s+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+s+")(\\.)("+s+")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","entity.name.function","text","paren.lparen"],regex:"(function)(\\s+)("+s+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","paren.lparen"],regex:"("+s+")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:`from(?=\\s*('|"))`},{token:"keyword",regex:"(?:"+a+")\\b",next:"start"},{token:["support.constant"],regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/},{token:o,regex:s},{token:"punctuation.operator",regex:/[.](?![.])/,next:"property"},{token:"storage.type",regex:/=>/,next:"start"},{token:"keyword.operator",regex:/--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"comment",regex:/^#!.*$/}],property:[{token:"text",regex:"\\s+"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+s+")(\\.)("+s+")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",next:"function_arguments"},{token:"punctuation.operator",regex:/[.](?![.])/},{token:"support.function",regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:"support.function.dom",regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:"support.constant",regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:"identifier",regex:s},{regex:"",token:"empty",next:"no_regex"}],start:[g.getStartRule("doc-start"),l("start"),{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],function_arguments:[{token:"variable.parameter",regex:s},{token:"punctuation.operator",regex:"[, ]+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],qqstring:[{token:"constant.language.escape",regex:t},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:t},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},(!i||!i.noES6)&&(this.$rules.no_regex.unshift({regex:"[{}]",onMatch:function(e,n,r){if(this.next=e=="{"?this.nextState:"",e=="{"&&r.length)r.unshift("start",n);else if(e=="}"&&r.length&&(r.shift(),this.next=r.shift(),this.next.indexOf("string")!=-1||this.next.indexOf("jsx")!=-1))return"paren.quasi.end";return e=="{"?"paren.lparen":"paren.rparen"},nextState:"start"},{token:"string.quasi.start",regex:/`/,push:[{token:"constant.language.escape",regex:t},{token:"paren.quasi.start",regex:/\${/,push:"start"},{token:"string.quasi.end",regex:/`/,next:"pop"},{defaultToken:"string.quasi"}]}),(!i||i.jsx!=!1)&&c.call(this)),this.embedRules(g,"doc-",[g.getEndRule("no_regex")]),this.normalizeRules()};f.inherits(p,m);function c(){var i=s.replace("\\d","\\d\\-"),o={onMatch:function(t,e,n){var r=t.charAt(1)=="/"?2:1;return r==1?(e!=this.nextState?n.unshift(this.next,this.nextState,0):n.unshift(this.next),n[2]++):r==2&&e==this.nextState&&(n[1]--,(!n[1]||n[1]<0)&&(n.shift(),n.shift())),[{type:"meta.tag.punctuation."+(r==1?"":"end-")+"tag-open.xml",value:t.slice(0,r)},{type:"meta.tag.tag-name.xml",value:t.substr(r)}]},regex:"</?"+i,next:"jsxAttributes",nextState:"jsx"};this.$rules.start.unshift(o);var a={regex:"{",token:"paren.quasi.start",push:"start"};this.$rules.jsx=[a,o,{include:"reference"},{defaultToken:"string"}],this.$rules.jsxAttributes=[{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",onMatch:function(t,e,n){return e==n[0]&&n.shift(),t.length==2&&(n[0]==this.nextState&&n[1]--,(!n[1]||n[1]<0)&&n.splice(0,2)),this.next=n[0]||"start",[{type:this.token,value:t}]},nextState:"jsx"},a,l("jsxAttributes"),{token:"entity.other.attribute-name.xml",regex:i},{token:"keyword.operator.attribute-equals.xml",regex:"="},{token:"text.tag-whitespace.xml",regex:"\\s+"},{token:"string.attribute-value.xml",regex:"'",stateName:"jsx_attr_q",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',stateName:"jsx_attr_qq",push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},o],this.$rules.reference=[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}]}function l(i){return[{token:"comment",regex:/\/\*/,next:[g.getTagRule(),{token:"comment",regex:"\\*\\/",next:i||"pop"},{defaultToken:"comment",caseInsensitive:!0}]},{token:"comment",regex:"\\/\\/",next:[g.getTagRule(),{token:"comment",regex:"$|^",next:i||"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}h.JavaScriptHighlightRules=p}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(u,h,$){var f=u("../range").Range,g=function(){};(function(){this.checkOutdent=function(m,s){return/^\s+$/.test(m)?/^\s*\}/.test(s):!1},this.autoOutdent=function(m,s){var p=m.getLine(s),c=p.match(/^(\s*\})/);if(!c)return 0;var l=c[1].length,i=m.findMatchingBracket({row:s,column:l});if(!i||i.row==s)return 0;var o=this.$getIndent(m.getLine(i.row));m.replace(new f(s,0,s,l-1),o)},this.$getIndent=function(m){return m.match(/^\s*/)[0]}}).call(g.prototype),h.MatchingBraceOutdent=g}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(u,h,$){var f=u("../../lib/oop"),g=u("../../range").Range,m=u("./fold_mode").FoldMode,s=h.FoldMode=function(p){p&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+p.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+p.end)))};f.inherits(s,m),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(p,c,l){var i=p.getLine(l);if(this.singleLineBlockCommentRe.test(i)&&!this.startRegionRe.test(i)&&!this.tripleStarBlockCommentRe.test(i))return"";var o=this._getFoldWidgetBase(p,c,l);return!o&&this.startRegionRe.test(i)?"start":o},this.getFoldWidgetRange=function(p,c,l,i){var o=p.getLine(l);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(p,o,l);var e=o.match(this.foldingStartMarker);if(e){var a=e.index;if(e[1])return this.openingBracketBlock(p,e[1],l,a);var t=p.getCommentFoldRange(l,a+e[0].length,1);return t&&!t.isMultiLine()&&(i?t=this.getSectionRange(p,l):c!="all"&&(t=null)),t}if(c!=="markbegin"){var e=o.match(this.foldingStopMarker);if(e){var a=e.index+e[0].length;return e[1]?this.closingBracketBlock(p,e[1],l,a):p.getCommentFoldRange(l,a,-1)}}},this.getSectionRange=function(p,c){var l=p.getLine(c),i=l.search(/\S/),o=c,a=l.length;c=c+1;for(var t=c,e=p.getLength();++c<e;){l=p.getLine(c);var n=l.search(/\S/);if(n!==-1){if(i>n)break;var r=this.getFoldWidgetRange(p,"all",c);if(r){if(r.start.row<=o)break;if(r.isMultiLine())c=r.end.row;else if(i==n)break}t=c}}return new g(o,a,t,p.getLine(t).length)},this.getCommentRegionBlock=function(p,c,l){for(var i=c.search(/\s*$/),o=p.getLength(),a=l,t=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,e=1;++l<o;){c=p.getLine(l);var n=t.exec(c);if(!!n&&(n[1]?e--:e++,!e))break}var r=l;if(r>a)return new g(a,i,r,c.length)}}.call(s.prototype)}),ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(u,h,$){var f=u("../lib/oop"),g=u("./text").Mode,m=u("./javascript_highlight_rules").JavaScriptHighlightRules,s=u("./matching_brace_outdent").MatchingBraceOutdent,p=u("../worker/worker_client").WorkerClient,c=u("./behaviour/cstyle").CstyleBehaviour,l=u("./folding/cstyle").FoldMode,i=function(){this.HighlightRules=m,this.$outdent=new s,this.$behaviour=new c,this.foldingRules=new l};f.inherits(i,g),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.getNextLineIndent=function(o,a,t){var e=this.$getIndent(a),n=this.getTokenizer().getLineTokens(a,o),r=n.tokens,d=n.state;if(r.length&&r[r.length-1].type=="comment")return e;if(o=="start"||o=="no_regex"){var x=a.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);x&&(e+=t)}else if(o=="doc-start"){if(d=="start"||d=="no_regex")return"";var x=a.match(/^\s*(\/?)\*/);x&&(x[1]&&(e+=" "),e+="* ")}return e},this.checkOutdent=function(o,a,t){return this.$outdent.checkOutdent(a,t)},this.autoOutdent=function(o,a,t){this.$outdent.autoOutdent(a,t)},this.createWorker=function(o){var a=new p(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return a.attachToDocument(o.getDocument()),a.on("annotate",function(t){o.setAnnotations(t.data)}),a.on("terminate",function(){o.clearAnnotations()}),a},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}.call(i.prototype),h.Mode=i}),ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(u,h,$){var f=u("../lib/oop");u("../lib/lang");var g=u("./text_highlight_rules").TextHighlightRules,m=h.supportType="align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index",s=h.supportFunction="rgb|rgba|url|attr|counter|counters",p=h.supportConstant="absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom",c=h.supportConstantColor="aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen",l=h.supportConstantFonts="arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace",i=h.numRe="\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))",o=h.pseudoElements="(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b",a=h.pseudoClasses="(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b",t=function(){var e=this.createKeywordMapper({"support.function":s,"support.constant":p,"support.type":m,"support.constant.color":c,"support.constant.fonts":l},"text",!0);this.$rules={start:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"ruleset"},{token:"paren.rparen",regex:"\\}"},{token:"string",regex:"@(?!viewport)",next:"media"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"keyword",regex:"%"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant.numeric",regex:i},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:!0}],media:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"start"},{token:"paren.rparen",regex:"\\}",next:"start"},{token:"string",regex:";",next:"start"},{token:"keyword",regex:"(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"}],comments:[{token:"comment",regex:"\\/\\*",push:[{token:"comment",regex:"\\*\\/",next:"pop"},{defaultToken:"comment"}]}],ruleset:[{regex:"-(webkit|ms|moz|o)-",token:"text"},{token:"punctuation.operator",regex:"[:;]"},{token:"paren.rparen",regex:"\\}",next:"start"},{include:["strings","url","comments"]},{token:["constant.numeric","keyword"],regex:"("+i+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"},{token:"constant.numeric",regex:i},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:["punctuation","entity.other.attribute-name.pseudo-element.css"],regex:o},{token:["punctuation","entity.other.attribute-name.pseudo-class.css"],regex:a},{include:"url"},{token:e,regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"},{caseInsensitive:!0}],url:[{token:"support.function",regex:"(?:url(:?-prefix)?|domain|regexp)\\(",push:[{token:"support.function",regex:"\\)",next:"pop"},{defaultToken:"string"}]}],strings:[{token:"string.start",regex:"'",push:[{token:"string.end",regex:"'|$",next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]},{token:"string.start",regex:'"',push:[{token:"string.end",regex:'"|$',next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]}],escapes:[{token:"constant.language.escape",regex:/\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/}]},this.normalizeRules()};f.inherits(t,g),h.CssHighlightRules=t}),ace.define("ace/mode/css_completions",["require","exports","module"],function(u,h,$){var f={background:{"#$0":1},"background-color":{"#$0":1,transparent:1,fixed:1},"background-image":{"url('/$0')":1},"background-repeat":{repeat:1,"repeat-x":1,"repeat-y":1,"no-repeat":1,inherit:1},"background-position":{bottom:2,center:2,left:2,right:2,top:2,inherit:2},"background-attachment":{scroll:1,fixed:1},"background-size":{cover:1,contain:1},"background-clip":{"border-box":1,"padding-box":1,"content-box":1},"background-origin":{"border-box":1,"padding-box":1,"content-box":1},border:{"solid $0":1,"dashed $0":1,"dotted $0":1,"#$0":1},"border-color":{"#$0":1},"border-style":{solid:2,dashed:2,dotted:2,double:2,groove:2,hidden:2,inherit:2,inset:2,none:2,outset:2,ridged:2},"border-collapse":{collapse:1,separate:1},bottom:{px:1,em:1,"%":1},clear:{left:1,right:1,both:1,none:1},color:{"#$0":1,"rgb(#$00,0,0)":1},cursor:{default:1,pointer:1,move:1,text:1,wait:1,help:1,progress:1,"n-resize":1,"ne-resize":1,"e-resize":1,"se-resize":1,"s-resize":1,"sw-resize":1,"w-resize":1,"nw-resize":1},display:{none:1,block:1,inline:1,"inline-block":1,"table-cell":1},"empty-cells":{show:1,hide:1},float:{left:1,right:1,none:1},"font-family":{Arial:2,"Comic Sans MS":2,Consolas:2,"Courier New":2,Courier:2,Georgia:2,Monospace:2,"Sans-Serif":2,"Segoe UI":2,Tahoma:2,"Times New Roman":2,"Trebuchet MS":2,Verdana:1},"font-size":{px:1,em:1,"%":1},"font-weight":{bold:1,normal:1},"font-style":{italic:1,normal:1},"font-variant":{normal:1,"small-caps":1},height:{px:1,em:1,"%":1},left:{px:1,em:1,"%":1},"letter-spacing":{normal:1},"line-height":{normal:1},"list-style-type":{none:1,disc:1,circle:1,square:1,decimal:1,"decimal-leading-zero":1,"lower-roman":1,"upper-roman":1,"lower-greek":1,"lower-latin":1,"upper-latin":1,georgian:1,"lower-alpha":1,"upper-alpha":1},margin:{px:1,em:1,"%":1},"margin-right":{px:1,em:1,"%":1},"margin-left":{px:1,em:1,"%":1},"margin-top":{px:1,em:1,"%":1},"margin-bottom":{px:1,em:1,"%":1},"max-height":{px:1,em:1,"%":1},"max-width":{px:1,em:1,"%":1},"min-height":{px:1,em:1,"%":1},"min-width":{px:1,em:1,"%":1},overflow:{hidden:1,visible:1,auto:1,scroll:1},"overflow-x":{hidden:1,visible:1,auto:1,scroll:1},"overflow-y":{hidden:1,visible:1,auto:1,scroll:1},padding:{px:1,em:1,"%":1},"padding-top":{px:1,em:1,"%":1},"padding-right":{px:1,em:1,"%":1},"padding-bottom":{px:1,em:1,"%":1},"padding-left":{px:1,em:1,"%":1},"page-break-after":{auto:1,always:1,avoid:1,left:1,right:1},"page-break-before":{auto:1,always:1,avoid:1,left:1,right:1},position:{absolute:1,relative:1,fixed:1,static:1},right:{px:1,em:1,"%":1},"table-layout":{fixed:1,auto:1},"text-decoration":{none:1,underline:1,"line-through":1,blink:1},"text-align":{left:1,right:1,center:1,justify:1},"text-transform":{capitalize:1,uppercase:1,lowercase:1,none:1},top:{px:1,em:1,"%":1},"vertical-align":{top:1,bottom:1},visibility:{hidden:1,visible:1},"white-space":{nowrap:1,normal:1,pre:1,"pre-line":1,"pre-wrap":1},width:{px:1,em:1,"%":1},"word-spacing":{normal:1},filter:{"alpha(opacity=$0100)":1},"text-shadow":{"$02px 2px 2px #777":1},"text-overflow":{"ellipsis-word":1,clip:1,ellipsis:1},"-moz-border-radius":1,"-moz-border-radius-topright":1,"-moz-border-radius-bottomright":1,"-moz-border-radius-topleft":1,"-moz-border-radius-bottomleft":1,"-webkit-border-radius":1,"-webkit-border-top-right-radius":1,"-webkit-border-top-left-radius":1,"-webkit-border-bottom-right-radius":1,"-webkit-border-bottom-left-radius":1,"-moz-box-shadow":1,"-webkit-box-shadow":1,transform:{"rotate($00deg)":1,"skew($00deg)":1},"-moz-transform":{"rotate($00deg)":1,"skew($00deg)":1},"-webkit-transform":{"rotate($00deg)":1,"skew($00deg)":1}},g=function(){};(function(){this.completionsDefined=!1,this.defineCompletions=function(){if(document){var m=document.createElement("c").style;for(var s in m)if(typeof m[s]=="string"){var p=s.replace(/[A-Z]/g,function(c){return"-"+c.toLowerCase()});f.hasOwnProperty(p)||(f[p]=1)}}this.completionsDefined=!0},this.getCompletions=function(m,s,p,c){if(this.completionsDefined||this.defineCompletions(),m==="ruleset"||s.$mode.$id=="ace/mode/scss"){var l=s.getLine(p.row).substr(0,p.column);return/:[^;]+$/.test(l)?(/([\w\-]+):[^:]*$/.test(l),this.getPropertyValueCompletions(m,s,p,c)):this.getPropertyCompletions(m,s,p,c)}return[]},this.getPropertyCompletions=function(m,s,p,c){var l=Object.keys(f);return l.map(function(i){return{caption:i,snippet:i+": $0;",meta:"property",score:1e6}})},this.getPropertyValueCompletions=function(m,s,p,c){var l=s.getLine(p.row).substr(0,p.column),i=(/([\w\-]+):[^:]*$/.exec(l)||{})[1];if(!i)return[];var o=[];return i in f&&typeof f[i]=="object"&&(o=Object.keys(f[i])),o.map(function(a){return{caption:a,snippet:a,meta:"property value",score:1e6}})}}).call(g.prototype),h.CssCompletions=g}),ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"],function(u,h,$){var f=u("../../lib/oop");u("../behaviour").Behaviour;var g=u("./cstyle").CstyleBehaviour,m=u("../../token_iterator").TokenIterator,s=function(){this.inherit(g),this.add("colon","insertion",function(p,c,l,i,o){if(o===":"&&l.selection.isEmpty()){var a=l.getCursorPosition(),t=new m(i,a.row,a.column),e=t.getCurrentToken();if(e&&e.value.match(/\s+/)&&(e=t.stepBackward()),e&&e.type==="support.type"){var n=i.doc.getLine(a.row),r=n.substring(a.column,a.column+1);if(r===":")return{text:"",selection:[1,1]};if(/^(\s+[^;]|\s*$)/.test(n.substring(a.column)))return{text:":;",selection:[1,1]}}}}),this.add("colon","deletion",function(p,c,l,i,o){var a=i.doc.getTextRange(o);if(!o.isMultiLine()&&a===":"){var t=l.getCursorPosition(),e=new m(i,t.row,t.column),n=e.getCurrentToken();if(n&&n.value.match(/\s+/)&&(n=e.stepBackward()),n&&n.type==="support.type"){var r=i.doc.getLine(o.start.row),d=r.substring(o.end.column,o.end.column+1);if(d===";")return o.end.column++,o}}}),this.add("semicolon","insertion",function(p,c,l,i,o){if(o===";"&&l.selection.isEmpty()){var a=l.getCursorPosition(),t=i.doc.getLine(a.row),e=t.substring(a.column,a.column+1);if(e===";")return{text:"",selection:[1,1]}}}),this.add("!important","insertion",function(p,c,l,i,o){if(o==="!"&&l.selection.isEmpty()){var a=l.getCursorPosition(),t=i.doc.getLine(a.row);if(/^\s*(;|}|$)/.test(t.substring(a.column)))return{text:"!important",selection:[10,10]}}})};f.inherits(s,g),h.CssBehaviour=s}),ace.define("ace/mode/css",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/css_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/css_completions","ace/mode/behaviour/css","ace/mode/folding/cstyle"],function(u,h,$){var f=u("../lib/oop"),g=u("./text").Mode,m=u("./css_highlight_rules").CssHighlightRules,s=u("./matching_brace_outdent").MatchingBraceOutdent,p=u("../worker/worker_client").WorkerClient,c=u("./css_completions").CssCompletions,l=u("./behaviour/css").CssBehaviour,i=u("./folding/cstyle").FoldMode,o=function(){this.HighlightRules=m,this.$outdent=new s,this.$behaviour=new l,this.$completer=new c,this.foldingRules=new i};f.inherits(o,g),function(){this.foldingRules="cStyle",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(a,t,e){var n=this.$getIndent(t),r=this.getTokenizer().getLineTokens(t,a).tokens;if(r.length&&r[r.length-1].type=="comment")return n;var d=t.match(/^.*\{\s*$/);return d&&(n+=e),n},this.checkOutdent=function(a,t,e){return this.$outdent.checkOutdent(t,e)},this.autoOutdent=function(a,t,e){this.$outdent.autoOutdent(t,e)},this.getCompletions=function(a,t,e,n){return this.$completer.getCompletions(a,t,e,n)},this.createWorker=function(a){var t=new p(["ace"],"ace/mode/css_worker","Worker");return t.attachToDocument(a.getDocument()),t.on("annotate",function(e){a.setAnnotations(e.data)}),t.on("terminate",function(){a.clearAnnotations()}),t},this.$id="ace/mode/css",this.snippetFileId="ace/snippets/css"}.call(o.prototype),h.Mode=o}),ace.define("ace/mode/xml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(u,h,$){var f=u("../lib/oop"),g=u("./text_highlight_rules").TextHighlightRules,m=function(s){var p="[_:a-zA-Z\xC0-\uFFFF][-_:.a-zA-Z0-9\xC0-\uFFFF]*";this.$rules={start:[{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\[",next:"cdata"},{token:["punctuation.instruction.xml","keyword.instruction.xml"],regex:"(<\\?)("+p+")",next:"processing_instruction"},{token:"comment.start.xml",regex:"<\\!--",next:"comment"},{token:["xml-pe.doctype.xml","xml-pe.doctype.xml"],regex:"(<\\!)(DOCTYPE)(?=[\\s])",next:"doctype",caseInsensitive:!0},{include:"tag"},{token:"text.end-tag-open.xml",regex:"</"},{token:"text.tag-open.xml",regex:"<"},{include:"reference"},{defaultToken:"text.xml"}],processing_instruction:[{token:"entity.other.attribute-name.decl-attribute-name.xml",regex:p},{token:"keyword.operator.decl-attribute-equals.xml",regex:"="},{include:"whitespace"},{include:"string"},{token:"punctuation.xml-decl.xml",regex:"\\?>",next:"start"}],doctype:[{include:"whitespace"},{include:"string"},{token:"xml-pe.doctype.xml",regex:">",next:"start"},{token:"xml-pe.xml",regex:"[-_a-zA-Z0-9:]+"},{token:"punctuation.int-subset",regex:"\\[",push:"int_subset"}],int_subset:[{token:"text.xml",regex:"\\s+"},{token:"punctuation.int-subset.xml",regex:"]",next:"pop"},{token:["punctuation.markup-decl.xml","keyword.markup-decl.xml"],regex:"(<\\!)("+p+")",push:[{token:"text",regex:"\\s+"},{token:"punctuation.markup-decl.xml",regex:">",next:"pop"},{include:"string"}]}],cdata:[{token:"string.cdata.xml",regex:"\\]\\]>",next:"start"},{token:"text.xml",regex:"\\s+"},{token:"text.xml",regex:"(?:[^\\]]|\\](?!\\]>))+"}],comment:[{token:"comment.end.xml",regex:"-->",next:"start"},{defaultToken:"comment.xml"}],reference:[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],attr_reference:[{token:"constant.language.escape.reference.attribute-value.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],tag:[{token:["meta.tag.punctuation.tag-open.xml","meta.tag.punctuation.end-tag-open.xml","meta.tag.tag-name.xml"],regex:"(?:(<)|(</))((?:"+p+":)?"+p+")",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start"}]}],tag_whitespace:[{token:"text.tag-whitespace.xml",regex:"\\s+"}],whitespace:[{token:"text.whitespace.xml",regex:"\\s+"}],string:[{token:"string.xml",regex:"'",push:[{token:"string.xml",regex:"'",next:"pop"},{defaultToken:"string.xml"}]},{token:"string.xml",regex:'"',push:[{token:"string.xml",regex:'"',next:"pop"},{defaultToken:"string.xml"}]}],attributes:[{token:"entity.other.attribute-name.xml",regex:p},{token:"keyword.operator.attribute-equals.xml",regex:"="},{include:"tag_whitespace"},{include:"attribute_value"}],attribute_value:[{token:"string.attribute-value.xml",regex:"'",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]}]},this.constructor===m&&this.normalizeRules()};(function(){this.embedTagRules=function(s,p,c){this.$rules.tag.unshift({token:["meta.tag.punctuation.tag-open.xml","meta.tag."+c+".tag-name.xml"],regex:"(<)("+c+"(?=\\s|>|$))",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:p+"start"}]}),this.$rules[c+"-end"]=[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start",onMatch:function(l,i,o){return o.splice(0),this.token}}],this.embedRules(s,p,[{token:["meta.tag.punctuation.end-tag-open.xml","meta.tag."+c+".tag-name.xml"],regex:"(</)("+c+"(?=\\s|>|$))",next:c+"-end"},{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\["},{token:"string.cdata.xml",regex:"\\]\\]>"}])}}).call(g.prototype),f.inherits(m,g),h.XmlHighlightRules=m}),ace.define("ace/mode/html_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/css_highlight_rules","ace/mode/javascript_highlight_rules","ace/mode/xml_highlight_rules"],function(u,h,$){var f=u("../lib/oop"),g=u("../lib/lang"),m=u("./css_highlight_rules").CssHighlightRules,s=u("./javascript_highlight_rules").JavaScriptHighlightRules,p=u("./xml_highlight_rules").XmlHighlightRules,c=g.createMap({a:"anchor",button:"form",form:"form",img:"image",input:"form",label:"form",option:"form",script:"script",select:"form",textarea:"form",style:"style",table:"table",tbody:"table",td:"table",tfoot:"table",th:"table",tr:"table"}),l=function(){p.call(this),this.addRules({attributes:[{include:"tag_whitespace"},{token:"entity.other.attribute-name.xml",regex:"[-_a-zA-Z0-9:.]+"},{token:"keyword.operator.attribute-equals.xml",regex:"=",push:[{include:"tag_whitespace"},{token:"string.unquoted.attribute-value.html",regex:"[^<>='\"`\\s]+",next:"pop"},{token:"empty",regex:"",next:"pop"}]},{include:"attribute_value"}],tag:[{token:function(i,o){var a=c[o];return["meta.tag.punctuation."+(i=="<"?"":"end-")+"tag-open.xml","meta.tag"+(a?"."+a:"")+".tag-name.xml"]},regex:"(</?)([-_a-zA-Z0-9:.]+)",next:"tag_stuff"}],tag_stuff:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start"}]}),this.embedTagRules(m,"css-","style"),this.embedTagRules(new s({jsx:!1}).getRules(),"js-","script"),this.constructor===l&&this.normalizeRules()};f.inherits(l,p),h.HtmlHighlightRules=l}),ace.define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(u,h,$){var f=u("../../lib/oop"),g=u("../behaviour").Behaviour,m=u("../../token_iterator").TokenIterator;u("../../lib/lang");function s(c,l){return c&&c.type.lastIndexOf(l+".xml")>-1}var p=function(){this.add("string_dquotes","insertion",function(c,l,i,o,a){if(a=='"'||a=="'"){var t=a,e=o.doc.getTextRange(i.getSelectionRange());if(e!==""&&e!=="'"&&e!='"'&&i.getWrapBehavioursEnabled())return{text:t+e+t,selection:!1};var n=i.getCursorPosition(),r=o.doc.getLine(n.row),d=r.substring(n.column,n.column+1),x=new m(o,n.row,n.column),b=x.getCurrentToken();if(d==t&&(s(b,"attribute-value")||s(b,"string")))return{text:"",selection:[1,1]};if(b||(b=x.stepBackward()),!b)return;for(;s(b,"tag-whitespace")||s(b,"whitespace");)b=x.stepBackward();var y=!d||d.match(/\s/);if(s(b,"attribute-equals")&&(y||d==">")||s(b,"decl-attribute-equals")&&(y||d=="?"))return{text:t+t,selection:[1,1]}}}),this.add("string_dquotes","deletion",function(c,l,i,o,a){var t=o.doc.getTextRange(a);if(!a.isMultiLine()&&(t=='"'||t=="'")){var e=o.doc.getLine(a.start.row),n=e.substring(a.start.column+1,a.start.column+2);if(n==t)return a.end.column++,a}}),this.add("autoclosing","insertion",function(c,l,i,o,a){if(a==">"){var t=i.getSelectionRange().start,e=new m(o,t.row,t.column),n=e.getCurrentToken()||e.stepBackward();if(!n||!(s(n,"tag-name")||s(n,"tag-whitespace")||s(n,"attribute-name")||s(n,"attribute-equals")||s(n,"attribute-value"))||s(n,"reference.attribute-value"))return;if(s(n,"attribute-value")){var r=e.getCurrentTokenColumn()+n.value.length;if(t.column<r)return;if(t.column==r){var d=e.stepForward();if(d&&s(d,"attribute-value"))return;e.stepBackward()}}if(/^\s*>/.test(o.getLine(t.row).slice(t.column)))return;for(;!s(n,"tag-name");)if(n=e.stepBackward(),n.value=="<"){n=e.stepForward();break}var x=e.getCurrentTokenRow(),b=e.getCurrentTokenColumn();if(s(e.stepBackward(),"end-tag-open"))return;var y=n.value;return x==t.row&&(y=y.substring(0,t.column-b)),this.voidElements.hasOwnProperty(y.toLowerCase())?void 0:{text:"></"+y+">",selection:[1,1]}}}),this.add("autoindent","insertion",function(c,l,i,o,a){if(a==`
`){var t=i.getCursorPosition(),e=o.getLine(t.row),n=new m(o,t.row,t.column),r=n.getCurrentToken();if(r&&r.type.indexOf("tag-close")!==-1){if(r.value=="/>")return;for(;r&&r.type.indexOf("tag-name")===-1;)r=n.stepBackward();if(!r)return;var d=r.value,x=n.getCurrentTokenRow();if(r=n.stepBackward(),!r||r.type.indexOf("end-tag")!==-1)return;if(this.voidElements&&!this.voidElements[d]){var b=o.getTokenAt(t.row,t.column+1),e=o.getLine(x),y=this.$getIndent(e),C=y+o.getTabString();return b&&b.value==="</"?{text:`
`+C+`
`+y,selection:[1,C.length,1,C.length]}:{text:`
`+C}}}}})};f.inherits(p,g),h.XmlBehaviour=p}),ace.define("ace/mode/folding/mixed",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode"],function(u,h,$){var f=u("../../lib/oop"),g=u("./fold_mode").FoldMode,m=h.FoldMode=function(s,p){this.defaultMode=s,this.subModes=p};f.inherits(m,g),function(){this.$getMode=function(s){typeof s!="string"&&(s=s[0]);for(var p in this.subModes)if(s.indexOf(p)===0)return this.subModes[p];return null},this.$tryMode=function(s,p,c,l){var i=this.$getMode(s);return i?i.getFoldWidget(p,c,l):""},this.getFoldWidget=function(s,p,c){return this.$tryMode(s.getState(c-1),s,p,c)||this.$tryMode(s.getState(c),s,p,c)||this.defaultMode.getFoldWidget(s,p,c)},this.getFoldWidgetRange=function(s,p,c){var l=this.$getMode(s.getState(c-1));return(!l||!l.getFoldWidget(s,p,c))&&(l=this.$getMode(s.getState(c))),(!l||!l.getFoldWidget(s,p,c))&&(l=this.defaultMode),l.getFoldWidgetRange(s,p,c)}}.call(m.prototype)}),ace.define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/range","ace/mode/folding/fold_mode","ace/token_iterator"],function(u,h,$){var f=u("../../lib/oop");u("../../lib/lang");var g=u("../../range").Range,m=u("./fold_mode").FoldMode,s=u("../../token_iterator").TokenIterator,p=h.FoldMode=function(i,o){m.call(this),this.voidElements=i||{},this.optionalEndTags=f.mixin({},this.voidElements),o&&f.mixin(this.optionalEndTags,o)};f.inherits(p,m);var c=function(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};function l(i,o){return i.type.lastIndexOf(o+".xml")>-1}(function(){this.getFoldWidget=function(i,o,a){var t=this._getFirstTagInLine(i,a);return t?t.closing||!t.tagName&&t.selfClosing?o=="markbeginend"?"end":"":!t.tagName||t.selfClosing||this.voidElements.hasOwnProperty(t.tagName.toLowerCase())||this._findEndTagInLine(i,a,t.tagName,t.end.column)?"":"start":this.getCommentFoldWidget(i,a)},this.getCommentFoldWidget=function(i,o){return/comment/.test(i.getState(o))&&/<!-/.test(i.getLine(o))?"start":""},this._getFirstTagInLine=function(i,o){for(var a=i.getTokens(o),t=new c,e=0;e<a.length;e++){var n=a[e];if(l(n,"tag-open")){if(t.end.column=t.start.column+n.value.length,t.closing=l(n,"end-tag-open"),n=a[++e],!n)return null;for(t.tagName=n.value,t.end.column+=n.value.length,e++;e<a.length;e++)if(n=a[e],t.end.column+=n.value.length,l(n,"tag-close")){t.selfClosing=n.value=="/>";break}return t}else if(l(n,"tag-close"))return t.selfClosing=n.value=="/>",t;t.start.column+=n.value.length}return null},this._findEndTagInLine=function(i,o,a,t){for(var e=i.getTokens(o),n=0,r=0;r<e.length;r++){var d=e[r];if(n+=d.value.length,!(n<t)&&l(d,"end-tag-open")&&(d=e[r+1],d&&d.value==a))return!0}return!1},this._readTagForward=function(i){var o=i.getCurrentToken();if(!o)return null;var a=new c;do if(l(o,"tag-open"))a.closing=l(o,"end-tag-open"),a.start.row=i.getCurrentTokenRow(),a.start.column=i.getCurrentTokenColumn();else if(l(o,"tag-name"))a.tagName=o.value;else if(l(o,"tag-close"))return a.selfClosing=o.value=="/>",a.end.row=i.getCurrentTokenRow(),a.end.column=i.getCurrentTokenColumn()+o.value.length,i.stepForward(),a;while(o=i.stepForward());return null},this._readTagBackward=function(i){var o=i.getCurrentToken();if(!o)return null;var a=new c;do{if(l(o,"tag-open"))return a.closing=l(o,"end-tag-open"),a.start.row=i.getCurrentTokenRow(),a.start.column=i.getCurrentTokenColumn(),i.stepBackward(),a;l(o,"tag-name")?a.tagName=o.value:l(o,"tag-close")&&(a.selfClosing=o.value=="/>",a.end.row=i.getCurrentTokenRow(),a.end.column=i.getCurrentTokenColumn()+o.value.length)}while(o=i.stepBackward());return null},this._pop=function(i,o){for(;i.length;){var a=i[i.length-1];if(!o||a.tagName==o.tagName)return i.pop();if(this.optionalEndTags.hasOwnProperty(a.tagName)){i.pop();continue}else return null}},this.getFoldWidgetRange=function(i,o,a){var t=this._getFirstTagInLine(i,a);if(!t)return this.getCommentFoldWidget(i,a)&&i.getCommentFoldRange(a,i.getLine(a).length);var e=t.closing||t.selfClosing,n=[],r;if(e)for(var d=new s(i,a,t.end.column),b={row:a,column:t.start.column};r=this._readTagBackward(d);){if(r.selfClosing){if(n.length)continue;return r.start.column+=r.tagName.length+2,r.end.column-=2,g.fromPoints(r.start,r.end)}if(r.closing)n.push(r);else if(this._pop(n,r),n.length==0)return r.start.column+=r.tagName.length+2,r.start.row==r.end.row&&r.start.column<r.end.column&&(r.start.column=r.end.column),g.fromPoints(r.start,b)}else{var d=new s(i,a,t.start.column),x={row:a,column:t.start.column+t.tagName.length+2};for(t.start.row==t.end.row&&(x.column=t.end.column);r=this._readTagForward(d);){if(r.selfClosing){if(n.length)continue;return r.start.column+=r.tagName.length+2,r.end.column-=2,g.fromPoints(r.start,r.end)}if(r.closing){if(this._pop(n,r),n.length==0)return g.fromPoints(x,r.start)}else n.push(r)}}}}).call(p.prototype)}),ace.define("ace/mode/folding/html",["require","exports","module","ace/lib/oop","ace/mode/folding/mixed","ace/mode/folding/xml","ace/mode/folding/cstyle"],function(u,h,$){var f=u("../../lib/oop"),g=u("./mixed").FoldMode,m=u("./xml").FoldMode,s=u("./cstyle").FoldMode,p=h.FoldMode=function(c,l){g.call(this,new m(c,l),{"js-":new s,"css-":new s})};f.inherits(p,g)}),ace.define("ace/mode/html_completions",["require","exports","module","ace/token_iterator"],function(u,h,$){var f=u("../token_iterator").TokenIterator,g=["accesskey","class","contenteditable","contextmenu","dir","draggable","dropzone","hidden","id","inert","itemid","itemprop","itemref","itemscope","itemtype","lang","spellcheck","style","tabindex","title","translate"],m=["onabort","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontextmenu","oncuechange","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onpause","onplay","onplaying","onprogress","onratechange","onreset","onscroll","onseeked","onseeking","onselect","onshow","onstalled","onsubmit","onsuspend","ontimeupdate","onvolumechange","onwaiting"],s=g.concat(m),p={a:{href:1,target:{_blank:1,top:1},ping:1,rel:{nofollow:1,alternate:1,author:1,bookmark:1,help:1,license:1,next:1,noreferrer:1,prefetch:1,prev:1,search:1,tag:1},media:1,hreflang:1,type:1},abbr:{},address:{},area:{shape:1,coords:1,href:1,hreflang:1,alt:1,target:1,media:1,rel:1,ping:1,type:1},article:{pubdate:1},aside:{},audio:{src:1,autobuffer:1,autoplay:{autoplay:1},loop:{loop:1},controls:{controls:1},muted:{muted:1},preload:{auto:1,metadata:1,none:1}},b:{},base:{href:1,target:1},bdi:{},bdo:{},blockquote:{cite:1},body:{onafterprint:1,onbeforeprint:1,onbeforeunload:1,onhashchange:1,onmessage:1,onoffline:1,onpopstate:1,onredo:1,onresize:1,onstorage:1,onundo:1,onunload:1},br:{},button:{autofocus:1,disabled:{disabled:1},form:1,formaction:1,formenctype:1,formmethod:1,formnovalidate:1,formtarget:1,name:1,value:1,type:{button:1,submit:1}},canvas:{width:1,height:1},caption:{},cite:{},code:{},col:{span:1},colgroup:{span:1},command:{type:1,label:1,icon:1,disabled:1,checked:1,radiogroup:1,command:1},data:{},datalist:{},dd:{},del:{cite:1,datetime:1},details:{open:1},dfn:{},dialog:{open:1},div:{},dl:{},dt:{},em:{},embed:{src:1,height:1,width:1,type:1},fieldset:{disabled:1,form:1,name:1},figcaption:{},figure:{},footer:{},form:{"accept-charset":1,action:1,autocomplete:1,enctype:{"multipart/form-data":1,"application/x-www-form-urlencoded":1},method:{get:1,post:1},name:1,novalidate:1,target:{_blank:1,top:1}},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},head:{},header:{},hr:{},html:{manifest:1},i:{},iframe:{name:1,src:1,height:1,width:1,sandbox:{"allow-same-origin":1,"allow-top-navigation":1,"allow-forms":1,"allow-scripts":1},seamless:{seamless:1}},img:{alt:1,src:1,height:1,width:1,usemap:1,ismap:1},input:{type:{text:1,password:1,hidden:1,checkbox:1,submit:1,radio:1,file:1,button:1,reset:1,image:31,color:1,date:1,datetime:1,"datetime-local":1,email:1,month:1,number:1,range:1,search:1,tel:1,time:1,url:1,week:1},accept:1,alt:1,autocomplete:{on:1,off:1},autofocus:{autofocus:1},checked:{checked:1},disabled:{disabled:1},form:1,formaction:1,formenctype:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},formmethod:{get:1,post:1},formnovalidate:{formnovalidate:1},formtarget:{_blank:1,_self:1,_parent:1,_top:1},height:1,list:1,max:1,maxlength:1,min:1,multiple:{multiple:1},name:1,pattern:1,placeholder:1,readonly:{readonly:1},required:{required:1},size:1,src:1,step:1,width:1,files:1,value:1},ins:{cite:1,datetime:1},kbd:{},keygen:{autofocus:1,challenge:{challenge:1},disabled:{disabled:1},form:1,keytype:{rsa:1,dsa:1,ec:1},name:1},label:{form:1,for:1},legend:{},li:{value:1},link:{href:1,hreflang:1,rel:{stylesheet:1,icon:1},media:{all:1,screen:1,print:1},type:{"text/css":1,"image/png":1,"image/jpeg":1,"image/gif":1},sizes:1},main:{},map:{name:1},mark:{},math:{},menu:{type:1,label:1},meta:{"http-equiv":{"content-type":1},name:{description:1,keywords:1},content:{"text/html; charset=UTF-8":1},charset:1},meter:{value:1,min:1,max:1,low:1,high:1,optimum:1},nav:{},noscript:{href:1},object:{param:1,data:1,type:1,height:1,width:1,usemap:1,name:1,form:1,classid:1},ol:{start:1,reversed:1},optgroup:{disabled:1,label:1},option:{disabled:1,selected:1,label:1,value:1},output:{for:1,form:1,name:1},p:{},param:{name:1,value:1},pre:{},progress:{value:1,max:1},q:{cite:1},rp:{},rt:{},ruby:{},s:{},samp:{},script:{charset:1,type:{"text/javascript":1},src:1,defer:1,async:1},select:{autofocus:1,disabled:1,form:1,multiple:{multiple:1},name:1,size:1,readonly:{readonly:1}},small:{},source:{src:1,type:1,media:1},span:{},strong:{},style:{type:1,media:{all:1,screen:1,print:1},scoped:1},sub:{},sup:{},svg:{},table:{summary:1},tbody:{},td:{headers:1,rowspan:1,colspan:1},textarea:{autofocus:{autofocus:1},disabled:{disabled:1},form:1,maxlength:1,name:1,placeholder:1,readonly:{readonly:1},required:{required:1},rows:1,cols:1,wrap:{on:1,off:1,hard:1,soft:1}},tfoot:{},th:{headers:1,rowspan:1,colspan:1,scope:1},thead:{},time:{datetime:1},title:{},tr:{},track:{kind:1,src:1,srclang:1,label:1,default:1},section:{},summary:{},u:{},ul:{},var:{},video:{src:1,autobuffer:1,autoplay:{autoplay:1},loop:{loop:1},controls:{controls:1},width:1,height:1,poster:1,muted:{muted:1},preload:{auto:1,metadata:1,none:1}},wbr:{}},c=Object.keys(p);function l(t,e){return t.type.lastIndexOf(e+".xml")>-1}function i(t,e){for(var n=new f(t,e.row,e.column),r=n.getCurrentToken();r&&!l(r,"tag-name");)r=n.stepBackward();if(r)return r.value}function o(t,e){for(var n=new f(t,e.row,e.column),r=n.getCurrentToken();r&&!l(r,"attribute-name");)r=n.stepBackward();if(r)return r.value}var a=function(){};(function(){this.getCompletions=function(t,e,n,r){var d=e.getTokenAt(n.row,n.column);if(!d)return[];if(l(d,"tag-name")||l(d,"tag-open")||l(d,"end-tag-open"))return this.getTagCompletions(t,e,n,r);if(l(d,"tag-whitespace")||l(d,"attribute-name"))return this.getAttributeCompletions(t,e,n,r);if(l(d,"attribute-value"))return this.getAttributeValueCompletions(t,e,n,r);var x=e.getLine(n.row).substr(0,n.column);return/&[a-z]*$/i.test(x)?this.getHTMLEntityCompletions(t,e,n,r):[]},this.getTagCompletions=function(t,e,n,r){return c.map(function(d){return{value:d,meta:"tag",score:1e6}})},this.getAttributeCompletions=function(t,e,n,r){var d=i(e,n);if(!d)return[];var x=s;return d in p&&(x=x.concat(Object.keys(p[d]))),x.map(function(b){return{caption:b,snippet:b+'="$0"',meta:"attribute",score:1e6}})},this.getAttributeValueCompletions=function(t,e,n,r){var d=i(e,n),x=o(e,n);if(!d)return[];var b=[];return d in p&&x in p[d]&&typeof p[d][x]=="object"&&(b=Object.keys(p[d][x])),b.map(function(y){return{caption:y,snippet:y,meta:"attribute value",score:1e6}})},this.getHTMLEntityCompletions=function(t,e,n,r){var d=["Aacute;","aacute;","Acirc;","acirc;","acute;","AElig;","aelig;","Agrave;","agrave;","alefsym;","Alpha;","alpha;","amp;","and;","ang;","Aring;","aring;","asymp;","Atilde;","atilde;","Auml;","auml;","bdquo;","Beta;","beta;","brvbar;","bull;","cap;","Ccedil;","ccedil;","cedil;","cent;","Chi;","chi;","circ;","clubs;","cong;","copy;","crarr;","cup;","curren;","Dagger;","dagger;","dArr;","darr;","deg;","Delta;","delta;","diams;","divide;","Eacute;","eacute;","Ecirc;","ecirc;","Egrave;","egrave;","empty;","emsp;","ensp;","Epsilon;","epsilon;","equiv;","Eta;","eta;","ETH;","eth;","Euml;","euml;","euro;","exist;","fnof;","forall;","frac12;","frac14;","frac34;","frasl;","Gamma;","gamma;","ge;","gt;","hArr;","harr;","hearts;","hellip;","Iacute;","iacute;","Icirc;","icirc;","iexcl;","Igrave;","igrave;","image;","infin;","int;","Iota;","iota;","iquest;","isin;","Iuml;","iuml;","Kappa;","kappa;","Lambda;","lambda;","lang;","laquo;","lArr;","larr;","lceil;","ldquo;","le;","lfloor;","lowast;","loz;","lrm;","lsaquo;","lsquo;","lt;","macr;","mdash;","micro;","middot;","minus;","Mu;","mu;","nabla;","nbsp;","ndash;","ne;","ni;","not;","notin;","nsub;","Ntilde;","ntilde;","Nu;","nu;","Oacute;","oacute;","Ocirc;","ocirc;","OElig;","oelig;","Ograve;","ograve;","oline;","Omega;","omega;","Omicron;","omicron;","oplus;","or;","ordf;","ordm;","Oslash;","oslash;","Otilde;","otilde;","otimes;","Ouml;","ouml;","para;","part;","permil;","perp;","Phi;","phi;","Pi;","pi;","piv;","plusmn;","pound;","Prime;","prime;","prod;","prop;","Psi;","psi;","quot;","radic;","rang;","raquo;","rArr;","rarr;","rceil;","rdquo;","real;","reg;","rfloor;","Rho;","rho;","rlm;","rsaquo;","rsquo;","sbquo;","Scaron;","scaron;","sdot;","sect;","shy;","Sigma;","sigma;","sigmaf;","sim;","spades;","sub;","sube;","sum;","sup;","sup1;","sup2;","sup3;","supe;","szlig;","Tau;","tau;","there4;","Theta;","theta;","thetasym;","thinsp;","THORN;","thorn;","tilde;","times;","trade;","Uacute;","uacute;","uArr;","uarr;","Ucirc;","ucirc;","Ugrave;","ugrave;","uml;","upsih;","Upsilon;","upsilon;","Uuml;","uuml;","weierp;","Xi;","xi;","Yacute;","yacute;","yen;","Yuml;","yuml;","Zeta;","zeta;","zwj;","zwnj;"];return d.map(function(x){return{caption:x,snippet:x,meta:"html entity",score:1e6}})}}).call(a.prototype),h.HtmlCompletions=a}),ace.define("ace/mode/html",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text","ace/mode/javascript","ace/mode/css","ace/mode/html_highlight_rules","ace/mode/behaviour/xml","ace/mode/folding/html","ace/mode/html_completions","ace/worker/worker_client"],function(u,h,$){var f=u("../lib/oop"),g=u("../lib/lang"),m=u("./text").Mode,s=u("./javascript").Mode,p=u("./css").Mode,c=u("./html_highlight_rules").HtmlHighlightRules,l=u("./behaviour/xml").XmlBehaviour,i=u("./folding/html").FoldMode,o=u("./html_completions").HtmlCompletions,a=u("../worker/worker_client").WorkerClient,t=["area","base","br","col","embed","hr","img","input","keygen","link","meta","menuitem","param","source","track","wbr"],e=["li","dt","dd","p","rt","rp","optgroup","option","colgroup","td","th"],n=function(r){this.fragmentContext=r&&r.fragmentContext,this.HighlightRules=c,this.$behaviour=new l,this.$completer=new o,this.createModeDelegates({"js-":s,"css-":p}),this.foldingRules=new i(this.voidElements,g.arrayToMap(e))};f.inherits(n,m),function(){this.blockComment={start:"<!--",end:"-->"},this.voidElements=g.arrayToMap(t),this.getNextLineIndent=function(r,d,x){return this.$getIndent(d)},this.checkOutdent=function(r,d,x){return!1},this.getCompletions=function(r,d,x,b){return this.$completer.getCompletions(r,d,x,b)},this.createWorker=function(r){if(this.constructor==n){var d=new a(["ace"],"ace/mode/html_worker","Worker");return d.attachToDocument(r.getDocument()),this.fragmentContext&&d.call("setOptions",[{context:this.fragmentContext}]),d.on("error",function(x){r.setAnnotations(x.data)}),d.on("terminate",function(){r.clearAnnotations()}),d}},this.$id="ace/mode/html",this.snippetFileId="ace/snippets/html"}.call(n.prototype),h.Mode=n}),function(){ace.require(["ace/mode/html"],function(u){w&&(w.exports=u)})}()})(V);var Z={exports:{}};(function(w,L){ace.define("ace/snippets/html.snippets",["require","exports","module"],function(u,h,$){$.exports=`# Some useful Unicode entities
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
`}),ace.define("ace/snippets/html",["require","exports","module","ace/snippets/html.snippets"],function(u,h,$){h.snippetText=u("./html.snippets"),h.scope="html"}),function(){ace.require(["ace/snippets/html"],function(u){w&&(w.exports=u)})}()})(Z);const J="/assets/worker-html.98c45599.js";const T=w=>(W("data-v-1a8b19f3"),w=w(),q(),w),G={class:"panel"},K={class:"inputPanel"},Q={class:"header"},tt=T(()=>v("span",{class:"i-icon-park-outline-indent-right"},null,-1)),et=T(()=>v("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),nt=T(()=>v("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),at={class:"inputPanel"},it={class:"header"},ot=T(()=>v("span",{class:"i-icon-park-outline-indent-right"},null,-1)),rt=T(()=>v("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),st=T(()=>v("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),lt={class:"inputPanel"},pt={class:"header"},ut=T(()=>v("span",{class:"i-icon-park-outline-indent-right"},null,-1)),ct=T(()=>v("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),dt=T(()=>v("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),mt=["srcdoc"],gt={__name:"tinyEditor",setup(w){E.config.setModuleUrl("ace/mode/css_worker",X),E.config.setModuleUrl("ace/mode/javascript_worker",Y),E.config.setModuleUrl("ace/mode/html_worker",J);const L=E.require("ace/ext/beautify"),u={},h=M(""),$=M(""),f=M(""),g=z();N(()=>{h.value=g.state.tinyEditor.html,$.value=g.state.tinyEditor.css,f.value=g.state.tinyEditor.js}),D(h,t=>{g.dispatch("tinyEditor/setContent",{type:"html",content:t})}),D($,t=>{g.dispatch("tinyEditor/setContent",{type:"css",content:t})}),D(f,t=>{g.dispatch("tinyEditor/setContent",{type:"js",content:t})});const m=O(()=>h.value+$.value+f.value===""?"\u8F93\u5165\u5185\u5BB9\u4EE5\u5728\u6B64\u5C55\u793A":h.value+"<style>"+$.value+"</style><script>"+f.value+"<\/script>"),s=M(!1);function p(t,e){t.getSession().setTabSize(2),t.getSession().setUseSoftTabs(!0),t.setShowPrintMargin(!1),u[e]=t}function c(t){u[t]&&L.beautify(u[t].session)}function l(t){var e;(e=u[t])==null||e.session.foldAll()}function i(t){var e;(e=u[t])==null||e.session.unfold()}function o(){s.value=!s.value}function a(){window.open("","_blank").document.write(m.value)}return(t,e)=>{const n=P,r=U;return S(),A("div",G,[F(v("div",K,[v("div",Q,[k(n,{type:"primary",title:"\u683C\u5F0F\u5316",onClick:e[0]||(e[0]=d=>c("html"))},{icon:_(()=>[tt]),_:1}),k(n,{type:"primary",title:"\u6298\u53E0\u6240\u6709",onClick:e[1]||(e[1]=d=>l("html"))},{icon:_(()=>[et]),_:1}),k(n,{type:"primary",title:"\u5C55\u5F00\u6240\u6709",onClick:e[2]||(e[2]=d=>i("html"))},{icon:_(()=>[nt]),_:1})]),k(R(B),{value:h.value,"onUpdate:value":e[3]||(e[3]=d=>h.value=d),lang:"html",theme:"textmate",style:{height:"calc(100% - 4.2rem)"},placeholder:"\u8BF7\u8F93\u5165HTML\u5185\u5BB9",options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:e[4]||(e[4]=d=>p(d,"html"))},null,8,["value"])],512),[[I,!s.value]]),F(v("div",at,[v("div",it,[k(n,{type:"primary",title:"\u683C\u5F0F\u5316",onClick:e[5]||(e[5]=d=>c("css"))},{icon:_(()=>[ot]),_:1}),k(n,{type:"primary",title:"\u6298\u53E0\u6240\u6709",onClick:e[6]||(e[6]=d=>l("js"))},{icon:_(()=>[rt]),_:1}),k(n,{type:"primary",title:"\u5C55\u5F00\u6240\u6709",onClick:e[7]||(e[7]=d=>i("js"))},{icon:_(()=>[st]),_:1})]),k(R(B),{value:f.value,"onUpdate:value":e[8]||(e[8]=d=>f.value=d),lang:"javascript",theme:"textmate",style:{height:"calc(100% - 4.2rem)"},placeholder:"\u8BF7\u8F93\u5165JS\u5185\u5BB9",options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:e[9]||(e[9]=d=>p(d,"js"))},null,8,["value"])],512),[[I,!s.value]]),F(v("div",lt,[v("div",pt,[k(n,{type:"primary",title:"\u683C\u5F0F\u5316",onClick:e[10]||(e[10]=d=>c("css"))},{icon:_(()=>[ut]),_:1}),k(n,{type:"primary",title:"\u6298\u53E0\u6240\u6709",onClick:e[11]||(e[11]=d=>l("css"))},{icon:_(()=>[ct]),_:1}),k(n,{type:"primary",title:"\u5C55\u5F00\u6240\u6709",onClick:e[12]||(e[12]=d=>i("css"))},{icon:_(()=>[dt]),_:1})]),k(R(B),{value:$.value,"onUpdate:value":e[13]||(e[13]=d=>$.value=d),lang:"css",theme:"textmate",style:{height:"calc(100% - 4.2rem)"},placeholder:"\u8BF7\u8F93\u5165CSS\u5185\u5BB9",options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:e[14]||(e[14]=d=>p(d,"css"))},null,8,["value"])],512),[[I,!s.value]]),v("div",{class:j(["displayPanel",{fullPanel:s.value}])},[k(r,{class:"fullScreen"},{default:_(()=>[s.value?(S(),A("span",{key:0,class:"i-icon-park-outline-off-screen",title:"\u9000\u51FA\u5B8C\u6574\u5C55\u793A",onClick:o})):(S(),A("span",{key:1,class:"i-icon-park-outline-full-screen",title:"\u5B8C\u6574\u5C55\u793A",onClick:o})),v("span",{class:"i-fa-solid-external-link-alt",title:"\u65B0\u6807\u7B7E\u6253\u5F00",onClick:a})]),_:1}),v("iframe",{"w-full":"","h-full":"",srcdoc:R(m),seamless:"",title:"\u5C55\u793A\u9762\u677F"},null,8,mt)],2)])}}},yt=H(gt,[["__scopeId","data-v-1a8b19f3"]]);export{yt as default};
