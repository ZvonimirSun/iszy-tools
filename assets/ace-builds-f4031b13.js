var Y={exports:{}};(function(N,j){ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(g,y,I){var R=g("../lib/oop");g("../lib/lang");var T=g("./text_highlight_rules").TextHighlightRules,w=y.supportType="align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index",$=y.supportFunction="rgb|rgba|url|attr|counter|counters",u=y.supportConstant="absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|flex-end|flex-start|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom",x=y.supportConstantColor="aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen",m=y.supportConstantFonts="arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace",_=y.numRe="\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))",S=y.pseudoElements="(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b",k=y.pseudoClasses="(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b",C=function(){var p=this.createKeywordMapper({"support.function":$,"support.constant":u,"support.type":w,"support.constant.color":x,"support.constant.fonts":m},"text",!0);this.$rules={start:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"ruleset"},{token:"paren.rparen",regex:"\\}"},{token:"string",regex:"@(?!viewport)",next:"media"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"keyword",regex:"%"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant.numeric",regex:_},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:!0}],media:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"start"},{token:"paren.rparen",regex:"\\}",next:"start"},{token:"string",regex:";",next:"start"},{token:"keyword",regex:"(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"}],comments:[{token:"comment",regex:"\\/\\*",push:[{token:"comment",regex:"\\*\\/",next:"pop"},{defaultToken:"comment"}]}],ruleset:[{regex:"-(webkit|ms|moz|o)-",token:"text"},{token:"punctuation.operator",regex:"[:;]"},{token:"paren.rparen",regex:"\\}",next:"start"},{include:["strings","url","comments"]},{token:["constant.numeric","keyword"],regex:"("+_+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"},{token:"constant.numeric",regex:_},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:["punctuation","entity.other.attribute-name.pseudo-element.css"],regex:S},{token:["punctuation","entity.other.attribute-name.pseudo-class.css"],regex:k},{include:"url"},{token:p,regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"},{caseInsensitive:!0}],url:[{token:"support.function",regex:"(?:url(:?-prefix)?|domain|regexp)\\(",push:[{token:"support.function",regex:"\\)",next:"pop"},{defaultToken:"string"}]}],strings:[{token:"string.start",regex:"'",push:[{token:"string.end",regex:"'|$",next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]},{token:"string.start",regex:'"',push:[{token:"string.end",regex:'"|$',next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]}],escapes:[{token:"constant.language.escape",regex:/\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/}]},this.normalizeRules()};R.inherits(C,T),y.CssHighlightRules=C}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(g,y,I){var R=g("../range").Range,T=function(){};(function(){this.checkOutdent=function(w,$){return/^\s+$/.test(w)?/^\s*\}/.test($):!1},this.autoOutdent=function(w,$){var u=w.getLine($),x=u.match(/^(\s*\})/);if(!x)return 0;var m=x[1].length,_=w.findMatchingBracket({row:$,column:m});if(!_||_.row==$)return 0;var S=this.$getIndent(w.getLine(_.row));w.replace(new R($,0,$,m-1),S)},this.$getIndent=function(w){return w.match(/^\s*/)[0]}}).call(T.prototype),y.MatchingBraceOutdent=T}),ace.define("ace/mode/css_completions",["require","exports","module"],function(g,y,I){var R={background:{"#$0":1},"background-color":{"#$0":1,transparent:1,fixed:1},"background-image":{"url('/$0')":1},"background-repeat":{repeat:1,"repeat-x":1,"repeat-y":1,"no-repeat":1,inherit:1},"background-position":{bottom:2,center:2,left:2,right:2,top:2,inherit:2},"background-attachment":{scroll:1,fixed:1},"background-size":{cover:1,contain:1},"background-clip":{"border-box":1,"padding-box":1,"content-box":1},"background-origin":{"border-box":1,"padding-box":1,"content-box":1},border:{"solid $0":1,"dashed $0":1,"dotted $0":1,"#$0":1},"border-color":{"#$0":1},"border-style":{solid:2,dashed:2,dotted:2,double:2,groove:2,hidden:2,inherit:2,inset:2,none:2,outset:2,ridged:2},"border-collapse":{collapse:1,separate:1},bottom:{px:1,em:1,"%":1},clear:{left:1,right:1,both:1,none:1},color:{"#$0":1,"rgb(#$00,0,0)":1},cursor:{default:1,pointer:1,move:1,text:1,wait:1,help:1,progress:1,"n-resize":1,"ne-resize":1,"e-resize":1,"se-resize":1,"s-resize":1,"sw-resize":1,"w-resize":1,"nw-resize":1},display:{none:1,block:1,inline:1,"inline-block":1,"table-cell":1},"empty-cells":{show:1,hide:1},float:{left:1,right:1,none:1},"font-family":{Arial:2,"Comic Sans MS":2,Consolas:2,"Courier New":2,Courier:2,Georgia:2,Monospace:2,"Sans-Serif":2,"Segoe UI":2,Tahoma:2,"Times New Roman":2,"Trebuchet MS":2,Verdana:1},"font-size":{px:1,em:1,"%":1},"font-weight":{bold:1,normal:1},"font-style":{italic:1,normal:1},"font-variant":{normal:1,"small-caps":1},height:{px:1,em:1,"%":1},left:{px:1,em:1,"%":1},"letter-spacing":{normal:1},"line-height":{normal:1},"list-style-type":{none:1,disc:1,circle:1,square:1,decimal:1,"decimal-leading-zero":1,"lower-roman":1,"upper-roman":1,"lower-greek":1,"lower-latin":1,"upper-latin":1,georgian:1,"lower-alpha":1,"upper-alpha":1},margin:{px:1,em:1,"%":1},"margin-right":{px:1,em:1,"%":1},"margin-left":{px:1,em:1,"%":1},"margin-top":{px:1,em:1,"%":1},"margin-bottom":{px:1,em:1,"%":1},"max-height":{px:1,em:1,"%":1},"max-width":{px:1,em:1,"%":1},"min-height":{px:1,em:1,"%":1},"min-width":{px:1,em:1,"%":1},overflow:{hidden:1,visible:1,auto:1,scroll:1},"overflow-x":{hidden:1,visible:1,auto:1,scroll:1},"overflow-y":{hidden:1,visible:1,auto:1,scroll:1},padding:{px:1,em:1,"%":1},"padding-top":{px:1,em:1,"%":1},"padding-right":{px:1,em:1,"%":1},"padding-bottom":{px:1,em:1,"%":1},"padding-left":{px:1,em:1,"%":1},"page-break-after":{auto:1,always:1,avoid:1,left:1,right:1},"page-break-before":{auto:1,always:1,avoid:1,left:1,right:1},position:{absolute:1,relative:1,fixed:1,static:1},right:{px:1,em:1,"%":1},"table-layout":{fixed:1,auto:1},"text-decoration":{none:1,underline:1,"line-through":1,blink:1},"text-align":{left:1,right:1,center:1,justify:1},"text-transform":{capitalize:1,uppercase:1,lowercase:1,none:1},top:{px:1,em:1,"%":1},"vertical-align":{top:1,bottom:1},visibility:{hidden:1,visible:1},"white-space":{nowrap:1,normal:1,pre:1,"pre-line":1,"pre-wrap":1},width:{px:1,em:1,"%":1},"word-spacing":{normal:1},filter:{"alpha(opacity=$0100)":1},"text-shadow":{"$02px 2px 2px #777":1},"text-overflow":{"ellipsis-word":1,clip:1,ellipsis:1},"-moz-border-radius":1,"-moz-border-radius-topright":1,"-moz-border-radius-bottomright":1,"-moz-border-radius-topleft":1,"-moz-border-radius-bottomleft":1,"-webkit-border-radius":1,"-webkit-border-top-right-radius":1,"-webkit-border-top-left-radius":1,"-webkit-border-bottom-right-radius":1,"-webkit-border-bottom-left-radius":1,"-moz-box-shadow":1,"-webkit-box-shadow":1,transform:{"rotate($00deg)":1,"skew($00deg)":1},"-moz-transform":{"rotate($00deg)":1,"skew($00deg)":1},"-webkit-transform":{"rotate($00deg)":1,"skew($00deg)":1}},T=function(){};(function(){this.completionsDefined=!1,this.defineCompletions=function(){if(document){var w=document.createElement("c").style;for(var $ in w)if(typeof w[$]=="string"){var u=$.replace(/[A-Z]/g,function(x){return"-"+x.toLowerCase()});R.hasOwnProperty(u)||(R[u]=1)}}this.completionsDefined=!0},this.getCompletions=function(w,$,u,x){if(this.completionsDefined||this.defineCompletions(),w==="ruleset"||$.$mode.$id=="ace/mode/scss"){var m=$.getLine(u.row).substr(0,u.column),_=/\([^)]*$/.test(m);return _&&(m=m.substr(m.lastIndexOf("(")+1)),/:[^;]+$/.test(m)?this.getPropertyValueCompletions(w,$,u,x):this.getPropertyCompletions(w,$,u,x,_)}return[]},this.getPropertyCompletions=function(w,$,u,x,m){m=m||!1;var _=Object.keys(R);return _.map(function(S){return{caption:S,snippet:S+": $0"+(m?"":";"),meta:"property",score:1e6}})},this.getPropertyValueCompletions=function(w,$,u,x){var m=$.getLine(u.row).substr(0,u.column),_=(/([\w\-]+):[^:]*$/.exec(m)||{})[1];if(!_)return[];var S=[];return _ in R&&typeof R[_]=="object"&&(S=Object.keys(R[_])),S.map(function(k){return{caption:k,snippet:k,meta:"property value",score:1e6}})}}).call(T.prototype),y.CssCompletions=T}),ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"],function(g,y,I){var R=g("../../lib/oop");g("../behaviour").Behaviour;var T=g("./cstyle").CstyleBehaviour,w=g("../../token_iterator").TokenIterator,$=function(){this.inherit(T),this.add("colon","insertion",function(u,x,m,_,S){if(S===":"&&m.selection.isEmpty()){var k=m.getCursorPosition(),C=new w(_,k.row,k.column),p=C.getCurrentToken();if(p&&p.value.match(/\s+/)&&(p=C.stepBackward()),p&&p.type==="support.type"){var b=_.doc.getLine(k.row),f=b.substring(k.column,k.column+1);if(f===":")return{text:"",selection:[1,1]};if(/^(\s+[^;]|\s*$)/.test(b.substring(k.column)))return{text:":;",selection:[1,1]}}}}),this.add("colon","deletion",function(u,x,m,_,S){var k=_.doc.getTextRange(S);if(!S.isMultiLine()&&k===":"){var C=m.getCursorPosition(),p=new w(_,C.row,C.column),b=p.getCurrentToken();if(b&&b.value.match(/\s+/)&&(b=p.stepBackward()),b&&b.type==="support.type"){var f=_.doc.getLine(S.start.row),t=f.substring(S.end.column,S.end.column+1);if(t===";")return S.end.column++,S}}}),this.add("semicolon","insertion",function(u,x,m,_,S){if(S===";"&&m.selection.isEmpty()){var k=m.getCursorPosition(),C=_.doc.getLine(k.row),p=C.substring(k.column,k.column+1);if(p===";")return{text:"",selection:[1,1]}}}),this.add("!important","insertion",function(u,x,m,_,S){if(S==="!"&&m.selection.isEmpty()){var k=m.getCursorPosition(),C=_.doc.getLine(k.row);if(/^\s*(;|}|$)/.test(C.substring(k.column)))return{text:"!important",selection:[10,10]}}})};R.inherits($,T),y.CssBehaviour=$}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(g,y,I){var R=g("../../lib/oop"),T=g("../../range").Range,w=g("./fold_mode").FoldMode,$=y.FoldMode=function(u){u&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+u.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+u.end)))};R.inherits($,w),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(u,x,m){var _=u.getLine(m);if(this.singleLineBlockCommentRe.test(_)&&!this.startRegionRe.test(_)&&!this.tripleStarBlockCommentRe.test(_))return"";var S=this._getFoldWidgetBase(u,x,m);return!S&&this.startRegionRe.test(_)?"start":S},this.getFoldWidgetRange=function(u,x,m,_){var S=u.getLine(m);if(this.startRegionRe.test(S))return this.getCommentRegionBlock(u,S,m);var p=S.match(this.foldingStartMarker);if(p){var k=p.index;if(p[1])return this.openingBracketBlock(u,p[1],m,k);var C=u.getCommentFoldRange(m,k+p[0].length,1);return C&&!C.isMultiLine()&&(_?C=this.getSectionRange(u,m):x!="all"&&(C=null)),C}if(x!=="markbegin"){var p=S.match(this.foldingStopMarker);if(p){var k=p.index+p[0].length;return p[1]?this.closingBracketBlock(u,p[1],m,k):u.getCommentFoldRange(m,k,-1)}}},this.getSectionRange=function(u,x){var m=u.getLine(x),_=m.search(/\S/),S=x,k=m.length;x=x+1;for(var C=x,p=u.getLength();++x<p;){m=u.getLine(x);var b=m.search(/\S/);if(b!==-1){if(_>b)break;var f=this.getFoldWidgetRange(u,"all",x);if(f){if(f.start.row<=S)break;if(f.isMultiLine())x=f.end.row;else if(_==b)break}C=x}}return new T(S,k,C,u.getLine(C).length)},this.getCommentRegionBlock=function(u,x,m){for(var _=x.search(/\s*$/),S=u.getLength(),k=m,C=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,p=1;++m<S;){x=u.getLine(m);var b=C.exec(x);if(b&&(b[1]?p--:p++,!p))break}var f=m;if(f>k)return new T(k,_,f,x.length)}}).call($.prototype)}),ace.define("ace/mode/css",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/css_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/css_completions","ace/mode/behaviour/css","ace/mode/folding/cstyle"],function(g,y,I){var R=g("../lib/oop"),T=g("./text").Mode,w=g("./css_highlight_rules").CssHighlightRules,$=g("./matching_brace_outdent").MatchingBraceOutdent,u=g("../worker/worker_client").WorkerClient,x=g("./css_completions").CssCompletions,m=g("./behaviour/css").CssBehaviour,_=g("./folding/cstyle").FoldMode,S=function(){this.HighlightRules=w,this.$outdent=new $,this.$behaviour=new m,this.$completer=new x,this.foldingRules=new _};R.inherits(S,T),(function(){this.foldingRules="cStyle",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(k,C,p){var b=this.$getIndent(C),f=this.getTokenizer().getLineTokens(C,k).tokens;if(f.length&&f[f.length-1].type=="comment")return b;var t=C.match(/^.*\{\s*$/);return t&&(b+=p),b},this.checkOutdent=function(k,C,p){return this.$outdent.checkOutdent(C,p)},this.autoOutdent=function(k,C,p){this.$outdent.autoOutdent(C,p)},this.getCompletions=function(k,C,p,b){return this.$completer.getCompletions(k,C,p,b)},this.createWorker=function(k){var C=new u(["ace"],"ace/mode/css_worker","Worker");return C.attachToDocument(k.getDocument()),C.on("annotate",function(p){k.setAnnotations(p.data)}),C.on("terminate",function(){k.clearAnnotations()}),C},this.$id="ace/mode/css",this.snippetFileId="ace/snippets/css"}).call(S.prototype),y.Mode=S}),function(){ace.require(["ace/mode/css"],function(g){N&&(N.exports=g)})}()})(Y);var Z={exports:{}};(function(N,j){ace.define("ace/theme/textmate",["require","exports","module","ace/theme/textmate-css","ace/lib/dom"],function(g,y,I){y.isDark=!1,y.cssClass="ace-tm",y.cssText=g("./textmate-css"),y.$id="ace/theme/textmate";var R=g("../lib/dom");R.importCssString(y.cssText,y.cssClass,!1)}),function(){ace.require(["ace/theme/textmate"],function(g){N&&(N.exports=g)})}()})(Z);var Q={exports:{}};(function(N,j){ace.define("ace/theme/twilight-css",["require","exports","module"],function(g,y,I){I.exports=`.ace-twilight .ace_gutter {
  background: #232323;
  color: #E2E2E2
}

.ace-twilight .ace_print-margin {
  width: 1px;
  background: #232323
}

.ace-twilight {
  background-color: #141414;
  color: #F8F8F8
}

.ace-twilight .ace_cursor {
  color: #A7A7A7
}

.ace-twilight .ace_marker-layer .ace_selection {
  background: rgba(221, 240, 255, 0.20)
}

.ace-twilight.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #141414;
}

.ace-twilight .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-twilight .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(255, 255, 255, 0.25)
}

.ace-twilight .ace_marker-layer .ace_active-line {
  background: rgba(255, 255, 255, 0.031)
}

.ace-twilight .ace_gutter-active-line {
  background-color: rgba(255, 255, 255, 0.031)
}

.ace-twilight .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(221, 240, 255, 0.20)
}

.ace-twilight .ace_invisible {
  color: rgba(255, 255, 255, 0.25)
}

.ace-twilight .ace_keyword,
.ace-twilight .ace_meta {
  color: #CDA869
}

.ace-twilight .ace_constant,
.ace-twilight .ace_constant.ace_character,
.ace-twilight .ace_constant.ace_character.ace_escape,
.ace-twilight .ace_constant.ace_other,
.ace-twilight .ace_heading,
.ace-twilight .ace_markup.ace_heading,
.ace-twilight .ace_support.ace_constant {
  color: #CF6A4C
}

.ace-twilight .ace_invalid.ace_illegal {
  color: #F8F8F8;
  background-color: rgba(86, 45, 86, 0.75)
}

.ace-twilight .ace_invalid.ace_deprecated {
  text-decoration: underline;
  font-style: italic;
  color: #D2A8A1
}

.ace-twilight .ace_support {
  color: #9B859D
}

.ace-twilight .ace_fold {
  background-color: #AC885B;
  border-color: #F8F8F8
}

.ace-twilight .ace_support.ace_function {
  color: #DAD085
}

.ace-twilight .ace_list,
.ace-twilight .ace_markup.ace_list,
.ace-twilight .ace_storage {
  color: #F9EE98
}

.ace-twilight .ace_entity.ace_name.ace_function,
.ace-twilight .ace_meta.ace_tag {
  color: #AC885B
}

.ace-twilight .ace_string {
  color: #8F9D6A
}

.ace-twilight .ace_string.ace_regexp {
  color: #E9C062
}

.ace-twilight .ace_comment {
  font-style: italic;
  color: #5F5A60
}

.ace-twilight .ace_variable {
  color: #7587A6
}

.ace-twilight .ace_xml-pe {
  color: #494949
}

.ace-twilight .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQERFpYLC1tf0PAAgOAnPnhxyiAAAAAElFTkSuQmCC) right repeat-y
}

.ace-twilight .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/twilight",["require","exports","module","ace/theme/twilight-css","ace/lib/dom"],function(g,y,I){y.isDark=!0,y.cssClass="ace-twilight",y.cssText=g("./twilight-css");var R=g("../lib/dom");R.importCssString(y.cssText,y.cssClass,!1)}),function(){ace.require(["ace/theme/twilight"],function(g){N&&(N.exports=g)})}()})(Q);var J={exports:{}};(function(N,j){ace.define("ace/snippets/css.snippets",["require","exports","module"],function(g,y,I){I.exports=`snippet .
	\${1} {
		\${2}
	}
snippet !
	 !important
snippet bdi:m+
	-moz-border-image: url(\${1}) \${2:0} \${3:0} \${4:0} \${5:0} \${6:stretch} \${7:stretch};
snippet bdi:m
	-moz-border-image: \${1};
snippet bdrz:m
	-moz-border-radius: \${1};
snippet bxsh:m+
	-moz-box-shadow: \${1:0} \${2:0} \${3:0} #\${4:000};
snippet bxsh:m
	-moz-box-shadow: \${1};
snippet bdi:w+
	-webkit-border-image: url(\${1}) \${2:0} \${3:0} \${4:0} \${5:0} \${6:stretch} \${7:stretch};
snippet bdi:w
	-webkit-border-image: \${1};
snippet bdrz:w
	-webkit-border-radius: \${1};
snippet bxsh:w+
	-webkit-box-shadow: \${1:0} \${2:0} \${3:0} #\${4:000};
snippet bxsh:w
	-webkit-box-shadow: \${1};
snippet @f
	@font-face {
		font-family: \${1};
		src: url(\${2});
	}
snippet @i
	@import url(\${1});
snippet @m
	@media \${1:print} {
		\${2}
	}
snippet bg+
	background: #\${1:FFF} url(\${2}) \${3:0} \${4:0} \${5:no-repeat};
snippet bga
	background-attachment: \${1};
snippet bga:f
	background-attachment: fixed;
snippet bga:s
	background-attachment: scroll;
snippet bgbk
	background-break: \${1};
snippet bgbk:bb
	background-break: bounding-box;
snippet bgbk:c
	background-break: continuous;
snippet bgbk:eb
	background-break: each-box;
snippet bgcp
	background-clip: \${1};
snippet bgcp:bb
	background-clip: border-box;
snippet bgcp:cb
	background-clip: content-box;
snippet bgcp:nc
	background-clip: no-clip;
snippet bgcp:pb
	background-clip: padding-box;
snippet bgc
	background-color: #\${1:FFF};
snippet bgc:t
	background-color: transparent;
snippet bgi
	background-image: url(\${1});
snippet bgi:n
	background-image: none;
snippet bgo
	background-origin: \${1};
snippet bgo:bb
	background-origin: border-box;
snippet bgo:cb
	background-origin: content-box;
snippet bgo:pb
	background-origin: padding-box;
snippet bgpx
	background-position-x: \${1};
snippet bgpy
	background-position-y: \${1};
snippet bgp
	background-position: \${1:0} \${2:0};
snippet bgr
	background-repeat: \${1};
snippet bgr:n
	background-repeat: no-repeat;
snippet bgr:x
	background-repeat: repeat-x;
snippet bgr:y
	background-repeat: repeat-y;
snippet bgr:r
	background-repeat: repeat;
snippet bgz
	background-size: \${1};
snippet bgz:a
	background-size: auto;
snippet bgz:ct
	background-size: contain;
snippet bgz:cv
	background-size: cover;
snippet bg
	background: \${1};
snippet bg:ie
	filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='\${1}',sizingMethod='\${2:crop}');
snippet bg:n
	background: none;
snippet bd+
	border: \${1:1px} \${2:solid} #\${3:000};
snippet bdb+
	border-bottom: \${1:1px} \${2:solid} #\${3:000};
snippet bdbc
	border-bottom-color: #\${1:000};
snippet bdbi
	border-bottom-image: url(\${1});
snippet bdbi:n
	border-bottom-image: none;
snippet bdbli
	border-bottom-left-image: url(\${1});
snippet bdbli:c
	border-bottom-left-image: continue;
snippet bdbli:n
	border-bottom-left-image: none;
snippet bdblrz
	border-bottom-left-radius: \${1};
snippet bdbri
	border-bottom-right-image: url(\${1});
snippet bdbri:c
	border-bottom-right-image: continue;
snippet bdbri:n
	border-bottom-right-image: none;
snippet bdbrrz
	border-bottom-right-radius: \${1};
snippet bdbs
	border-bottom-style: \${1};
snippet bdbs:n
	border-bottom-style: none;
snippet bdbw
	border-bottom-width: \${1};
snippet bdb
	border-bottom: \${1};
snippet bdb:n
	border-bottom: none;
snippet bdbk
	border-break: \${1};
snippet bdbk:c
	border-break: close;
snippet bdcl
	border-collapse: \${1};
snippet bdcl:c
	border-collapse: collapse;
snippet bdcl:s
	border-collapse: separate;
snippet bdc
	border-color: #\${1:000};
snippet bdci
	border-corner-image: url(\${1});
snippet bdci:c
	border-corner-image: continue;
snippet bdci:n
	border-corner-image: none;
snippet bdf
	border-fit: \${1};
snippet bdf:c
	border-fit: clip;
snippet bdf:of
	border-fit: overwrite;
snippet bdf:ow
	border-fit: overwrite;
snippet bdf:r
	border-fit: repeat;
snippet bdf:sc
	border-fit: scale;
snippet bdf:sp
	border-fit: space;
snippet bdf:st
	border-fit: stretch;
snippet bdi
	border-image: url(\${1}) \${2:0} \${3:0} \${4:0} \${5:0} \${6:stretch} \${7:stretch};
snippet bdi:n
	border-image: none;
snippet bdl+
	border-left: \${1:1px} \${2:solid} #\${3:000};
snippet bdlc
	border-left-color: #\${1:000};
snippet bdli
	border-left-image: url(\${1});
snippet bdli:n
	border-left-image: none;
snippet bdls
	border-left-style: \${1};
snippet bdls:n
	border-left-style: none;
snippet bdlw
	border-left-width: \${1};
snippet bdl
	border-left: \${1};
snippet bdl:n
	border-left: none;
snippet bdlt
	border-length: \${1};
snippet bdlt:a
	border-length: auto;
snippet bdrz
	border-radius: \${1};
snippet bdr+
	border-right: \${1:1px} \${2:solid} #\${3:000};
snippet bdrc
	border-right-color: #\${1:000};
snippet bdri
	border-right-image: url(\${1});
snippet bdri:n
	border-right-image: none;
snippet bdrs
	border-right-style: \${1};
snippet bdrs:n
	border-right-style: none;
snippet bdrw
	border-right-width: \${1};
snippet bdr
	border-right: \${1};
snippet bdr:n
	border-right: none;
snippet bdsp
	border-spacing: \${1};
snippet bds
	border-style: \${1};
snippet bds:ds
	border-style: dashed;
snippet bds:dtds
	border-style: dot-dash;
snippet bds:dtdtds
	border-style: dot-dot-dash;
snippet bds:dt
	border-style: dotted;
snippet bds:db
	border-style: double;
snippet bds:g
	border-style: groove;
snippet bds:h
	border-style: hidden;
snippet bds:i
	border-style: inset;
snippet bds:n
	border-style: none;
snippet bds:o
	border-style: outset;
snippet bds:r
	border-style: ridge;
snippet bds:s
	border-style: solid;
snippet bds:w
	border-style: wave;
snippet bdt+
	border-top: \${1:1px} \${2:solid} #\${3:000};
snippet bdtc
	border-top-color: #\${1:000};
snippet bdti
	border-top-image: url(\${1});
snippet bdti:n
	border-top-image: none;
snippet bdtli
	border-top-left-image: url(\${1});
snippet bdtli:c
	border-corner-image: continue;
snippet bdtli:n
	border-corner-image: none;
snippet bdtlrz
	border-top-left-radius: \${1};
snippet bdtri
	border-top-right-image: url(\${1});
snippet bdtri:c
	border-top-right-image: continue;
snippet bdtri:n
	border-top-right-image: none;
snippet bdtrrz
	border-top-right-radius: \${1};
snippet bdts
	border-top-style: \${1};
snippet bdts:n
	border-top-style: none;
snippet bdtw
	border-top-width: \${1};
snippet bdt
	border-top: \${1};
snippet bdt:n
	border-top: none;
snippet bdw
	border-width: \${1};
snippet bd
	border: \${1};
snippet bd:n
	border: none;
snippet b
	bottom: \${1};
snippet b:a
	bottom: auto;
snippet bxsh+
	box-shadow: \${1:0} \${2:0} \${3:0} #\${4:000};
snippet bxsh
	box-shadow: \${1};
snippet bxsh:n
	box-shadow: none;
snippet bxz
	box-sizing: \${1};
snippet bxz:bb
	box-sizing: border-box;
snippet bxz:cb
	box-sizing: content-box;
snippet cps
	caption-side: \${1};
snippet cps:b
	caption-side: bottom;
snippet cps:t
	caption-side: top;
snippet cl
	clear: \${1};
snippet cl:b
	clear: both;
snippet cl:l
	clear: left;
snippet cl:n
	clear: none;
snippet cl:r
	clear: right;
snippet cp
	clip: \${1};
snippet cp:a
	clip: auto;
snippet cp:r
	clip: rect(\${1:0} \${2:0} \${3:0} \${4:0});
snippet c
	color: #\${1:000};
snippet ct
	content: \${1};
snippet ct:a
	content: attr(\${1});
snippet ct:cq
	content: close-quote;
snippet ct:c
	content: counter(\${1});
snippet ct:cs
	content: counters(\${1});
snippet ct:ncq
	content: no-close-quote;
snippet ct:noq
	content: no-open-quote;
snippet ct:n
	content: normal;
snippet ct:oq
	content: open-quote;
snippet coi
	counter-increment: \${1};
snippet cor
	counter-reset: \${1};
snippet cur
	cursor: \${1};
snippet cur:a
	cursor: auto;
snippet cur:c
	cursor: crosshair;
snippet cur:d
	cursor: default;
snippet cur:ha
	cursor: hand;
snippet cur:he
	cursor: help;
snippet cur:m
	cursor: move;
snippet cur:p
	cursor: pointer;
snippet cur:t
	cursor: text;
snippet d
	display: \${1};
snippet d:mib
	display: -moz-inline-box;
snippet d:mis
	display: -moz-inline-stack;
snippet d:b
	display: block;
snippet d:cp
	display: compact;
snippet d:ib
	display: inline-block;
snippet d:itb
	display: inline-table;
snippet d:i
	display: inline;
snippet d:li
	display: list-item;
snippet d:n
	display: none;
snippet d:ri
	display: run-in;
snippet d:tbcp
	display: table-caption;
snippet d:tbc
	display: table-cell;
snippet d:tbclg
	display: table-column-group;
snippet d:tbcl
	display: table-column;
snippet d:tbfg
	display: table-footer-group;
snippet d:tbhg
	display: table-header-group;
snippet d:tbrg
	display: table-row-group;
snippet d:tbr
	display: table-row;
snippet d:tb
	display: table;
snippet ec
	empty-cells: \${1};
snippet ec:h
	empty-cells: hide;
snippet ec:s
	empty-cells: show;
snippet exp
	expression()
snippet fl
	float: \${1};
snippet fl:l
	float: left;
snippet fl:n
	float: none;
snippet fl:r
	float: right;
snippet f+
	font: \${1:1em} \${2:Arial},\${3:sans-serif};
snippet fef
	font-effect: \${1};
snippet fef:eb
	font-effect: emboss;
snippet fef:eg
	font-effect: engrave;
snippet fef:n
	font-effect: none;
snippet fef:o
	font-effect: outline;
snippet femp
	font-emphasize-position: \${1};
snippet femp:a
	font-emphasize-position: after;
snippet femp:b
	font-emphasize-position: before;
snippet fems
	font-emphasize-style: \${1};
snippet fems:ac
	font-emphasize-style: accent;
snippet fems:c
	font-emphasize-style: circle;
snippet fems:ds
	font-emphasize-style: disc;
snippet fems:dt
	font-emphasize-style: dot;
snippet fems:n
	font-emphasize-style: none;
snippet fem
	font-emphasize: \${1};
snippet ff
	font-family: \${1};
snippet ff:c
	font-family: \${1:'Monotype Corsiva','Comic Sans MS'},cursive;
snippet ff:f
	font-family: \${1:Capitals,Impact},fantasy;
snippet ff:m
	font-family: \${1:Monaco,'Courier New'},monospace;
snippet ff:ss
	font-family: \${1:Helvetica,Arial},sans-serif;
snippet ff:s
	font-family: \${1:Georgia,'Times New Roman'},serif;
snippet fza
	font-size-adjust: \${1};
snippet fza:n
	font-size-adjust: none;
snippet fz
	font-size: \${1};
snippet fsm
	font-smooth: \${1};
snippet fsm:aw
	font-smooth: always;
snippet fsm:a
	font-smooth: auto;
snippet fsm:n
	font-smooth: never;
snippet fst
	font-stretch: \${1};
snippet fst:c
	font-stretch: condensed;
snippet fst:e
	font-stretch: expanded;
snippet fst:ec
	font-stretch: extra-condensed;
snippet fst:ee
	font-stretch: extra-expanded;
snippet fst:n
	font-stretch: normal;
snippet fst:sc
	font-stretch: semi-condensed;
snippet fst:se
	font-stretch: semi-expanded;
snippet fst:uc
	font-stretch: ultra-condensed;
snippet fst:ue
	font-stretch: ultra-expanded;
snippet fs
	font-style: \${1};
snippet fs:i
	font-style: italic;
snippet fs:n
	font-style: normal;
snippet fs:o
	font-style: oblique;
snippet fv
	font-variant: \${1};
snippet fv:n
	font-variant: normal;
snippet fv:sc
	font-variant: small-caps;
snippet fw
	font-weight: \${1};
snippet fw:b
	font-weight: bold;
snippet fw:br
	font-weight: bolder;
snippet fw:lr
	font-weight: lighter;
snippet fw:n
	font-weight: normal;
snippet f
	font: \${1};
snippet h
	height: \${1};
snippet h:a
	height: auto;
snippet l
	left: \${1};
snippet l:a
	left: auto;
snippet lts
	letter-spacing: \${1};
snippet lh
	line-height: \${1};
snippet lisi
	list-style-image: url(\${1});
snippet lisi:n
	list-style-image: none;
snippet lisp
	list-style-position: \${1};
snippet lisp:i
	list-style-position: inside;
snippet lisp:o
	list-style-position: outside;
snippet list
	list-style-type: \${1};
snippet list:c
	list-style-type: circle;
snippet list:dclz
	list-style-type: decimal-leading-zero;
snippet list:dc
	list-style-type: decimal;
snippet list:d
	list-style-type: disc;
snippet list:lr
	list-style-type: lower-roman;
snippet list:n
	list-style-type: none;
snippet list:s
	list-style-type: square;
snippet list:ur
	list-style-type: upper-roman;
snippet lis
	list-style: \${1};
snippet lis:n
	list-style: none;
snippet mb
	margin-bottom: \${1};
snippet mb:a
	margin-bottom: auto;
snippet ml
	margin-left: \${1};
snippet ml:a
	margin-left: auto;
snippet mr
	margin-right: \${1};
snippet mr:a
	margin-right: auto;
snippet mt
	margin-top: \${1};
snippet mt:a
	margin-top: auto;
snippet m
	margin: \${1};
snippet m:4
	margin: \${1:0} \${2:0} \${3:0} \${4:0};
snippet m:3
	margin: \${1:0} \${2:0} \${3:0};
snippet m:2
	margin: \${1:0} \${2:0};
snippet m:0
	margin: 0;
snippet m:a
	margin: auto;
snippet mah
	max-height: \${1};
snippet mah:n
	max-height: none;
snippet maw
	max-width: \${1};
snippet maw:n
	max-width: none;
snippet mih
	min-height: \${1};
snippet miw
	min-width: \${1};
snippet op
	opacity: \${1};
snippet op:ie
	filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=\${1:100});
snippet op:ms
	-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=\${1:100})';
snippet orp
	orphans: \${1};
snippet o+
	outline: \${1:1px} \${2:solid} #\${3:000};
snippet oc
	outline-color: \${1:#000};
snippet oc:i
	outline-color: invert;
snippet oo
	outline-offset: \${1};
snippet os
	outline-style: \${1};
snippet ow
	outline-width: \${1};
snippet o
	outline: \${1};
snippet o:n
	outline: none;
snippet ovs
	overflow-style: \${1};
snippet ovs:a
	overflow-style: auto;
snippet ovs:mq
	overflow-style: marquee;
snippet ovs:mv
	overflow-style: move;
snippet ovs:p
	overflow-style: panner;
snippet ovs:s
	overflow-style: scrollbar;
snippet ovx
	overflow-x: \${1};
snippet ovx:a
	overflow-x: auto;
snippet ovx:h
	overflow-x: hidden;
snippet ovx:s
	overflow-x: scroll;
snippet ovx:v
	overflow-x: visible;
snippet ovy
	overflow-y: \${1};
snippet ovy:a
	overflow-y: auto;
snippet ovy:h
	overflow-y: hidden;
snippet ovy:s
	overflow-y: scroll;
snippet ovy:v
	overflow-y: visible;
snippet ov
	overflow: \${1};
snippet ov:a
	overflow: auto;
snippet ov:h
	overflow: hidden;
snippet ov:s
	overflow: scroll;
snippet ov:v
	overflow: visible;
snippet pb
	padding-bottom: \${1};
snippet pl
	padding-left: \${1};
snippet pr
	padding-right: \${1};
snippet pt
	padding-top: \${1};
snippet p
	padding: \${1};
snippet p:4
	padding: \${1:0} \${2:0} \${3:0} \${4:0};
snippet p:3
	padding: \${1:0} \${2:0} \${3:0};
snippet p:2
	padding: \${1:0} \${2:0};
snippet p:0
	padding: 0;
snippet pgba
	page-break-after: \${1};
snippet pgba:aw
	page-break-after: always;
snippet pgba:a
	page-break-after: auto;
snippet pgba:l
	page-break-after: left;
snippet pgba:r
	page-break-after: right;
snippet pgbb
	page-break-before: \${1};
snippet pgbb:aw
	page-break-before: always;
snippet pgbb:a
	page-break-before: auto;
snippet pgbb:l
	page-break-before: left;
snippet pgbb:r
	page-break-before: right;
snippet pgbi
	page-break-inside: \${1};
snippet pgbi:a
	page-break-inside: auto;
snippet pgbi:av
	page-break-inside: avoid;
snippet pos
	position: \${1};
snippet pos:a
	position: absolute;
snippet pos:f
	position: fixed;
snippet pos:r
	position: relative;
snippet pos:s
	position: static;
snippet q
	quotes: \${1};
snippet q:en
	quotes: '\\201C' '\\201D' '\\2018' '\\2019';
snippet q:n
	quotes: none;
snippet q:ru
	quotes: '\\00AB' '\\00BB' '\\201E' '\\201C';
snippet rz
	resize: \${1};
snippet rz:b
	resize: both;
snippet rz:h
	resize: horizontal;
snippet rz:n
	resize: none;
snippet rz:v
	resize: vertical;
snippet r
	right: \${1};
snippet r:a
	right: auto;
snippet tbl
	table-layout: \${1};
snippet tbl:a
	table-layout: auto;
snippet tbl:f
	table-layout: fixed;
snippet tal
	text-align-last: \${1};
snippet tal:a
	text-align-last: auto;
snippet tal:c
	text-align-last: center;
snippet tal:l
	text-align-last: left;
snippet tal:r
	text-align-last: right;
snippet ta
	text-align: \${1};
snippet ta:c
	text-align: center;
snippet ta:l
	text-align: left;
snippet ta:r
	text-align: right;
snippet td
	text-decoration: \${1};
snippet td:l
	text-decoration: line-through;
snippet td:n
	text-decoration: none;
snippet td:o
	text-decoration: overline;
snippet td:u
	text-decoration: underline;
snippet te
	text-emphasis: \${1};
snippet te:ac
	text-emphasis: accent;
snippet te:a
	text-emphasis: after;
snippet te:b
	text-emphasis: before;
snippet te:c
	text-emphasis: circle;
snippet te:ds
	text-emphasis: disc;
snippet te:dt
	text-emphasis: dot;
snippet te:n
	text-emphasis: none;
snippet th
	text-height: \${1};
snippet th:a
	text-height: auto;
snippet th:f
	text-height: font-size;
snippet th:m
	text-height: max-size;
snippet th:t
	text-height: text-size;
snippet ti
	text-indent: \${1};
snippet ti:-
	text-indent: -9999px;
snippet tj
	text-justify: \${1};
snippet tj:a
	text-justify: auto;
snippet tj:d
	text-justify: distribute;
snippet tj:ic
	text-justify: inter-cluster;
snippet tj:ii
	text-justify: inter-ideograph;
snippet tj:iw
	text-justify: inter-word;
snippet tj:k
	text-justify: kashida;
snippet tj:t
	text-justify: tibetan;
snippet to+
	text-outline: \${1:0} \${2:0} #\${3:000};
snippet to
	text-outline: \${1};
snippet to:n
	text-outline: none;
snippet tr
	text-replace: \${1};
snippet tr:n
	text-replace: none;
snippet tsh+
	text-shadow: \${1:0} \${2:0} \${3:0} #\${4:000};
snippet tsh
	text-shadow: \${1};
snippet tsh:n
	text-shadow: none;
snippet tt
	text-transform: \${1};
snippet tt:c
	text-transform: capitalize;
snippet tt:l
	text-transform: lowercase;
snippet tt:n
	text-transform: none;
snippet tt:u
	text-transform: uppercase;
snippet tw
	text-wrap: \${1};
snippet tw:no
	text-wrap: none;
snippet tw:n
	text-wrap: normal;
snippet tw:s
	text-wrap: suppress;
snippet tw:u
	text-wrap: unrestricted;
snippet t
	top: \${1};
snippet t:a
	top: auto;
snippet va
	vertical-align: \${1};
snippet va:bl
	vertical-align: baseline;
snippet va:b
	vertical-align: bottom;
snippet va:m
	vertical-align: middle;
snippet va:sub
	vertical-align: sub;
snippet va:sup
	vertical-align: super;
snippet va:tb
	vertical-align: text-bottom;
snippet va:tt
	vertical-align: text-top;
snippet va:t
	vertical-align: top;
snippet v
	visibility: \${1};
snippet v:c
	visibility: collapse;
snippet v:h
	visibility: hidden;
snippet v:v
	visibility: visible;
snippet whsc
	white-space-collapse: \${1};
snippet whsc:ba
	white-space-collapse: break-all;
snippet whsc:bs
	white-space-collapse: break-strict;
snippet whsc:k
	white-space-collapse: keep-all;
snippet whsc:l
	white-space-collapse: loose;
snippet whsc:n
	white-space-collapse: normal;
snippet whs
	white-space: \${1};
snippet whs:n
	white-space: normal;
snippet whs:nw
	white-space: nowrap;
snippet whs:pl
	white-space: pre-line;
snippet whs:pw
	white-space: pre-wrap;
snippet whs:p
	white-space: pre;
snippet wid
	widows: \${1};
snippet w
	width: \${1};
snippet w:a
	width: auto;
snippet wob
	word-break: \${1};
snippet wob:ba
	word-break: break-all;
snippet wob:bs
	word-break: break-strict;
snippet wob:k
	word-break: keep-all;
snippet wob:l
	word-break: loose;
snippet wob:n
	word-break: normal;
snippet wos
	word-spacing: \${1};
snippet wow
	word-wrap: \${1};
snippet wow:no
	word-wrap: none;
snippet wow:n
	word-wrap: normal;
snippet wow:s
	word-wrap: suppress;
snippet wow:u
	word-wrap: unrestricted;
snippet z
	z-index: \${1};
snippet z:a
	z-index: auto;
snippet zoo
	zoom: 1;
`}),ace.define("ace/snippets/css",["require","exports","module","ace/snippets/css.snippets"],function(g,y,I){y.snippetText=g("./css.snippets"),y.scope="css"}),function(){ace.require(["ace/snippets/css"],function(g){N&&(N.exports=g)})}()})(J);var ee={exports:{}};(function(N,j){ace.define("ace/ext/searchbox-css",["require","exports","module"],function(g,y,I){I.exports=`

/* ------------------------------------------------------------------------------------------
 * Editor Search Form
 * --------------------------------------------------------------------------------------- */
.ace_search {
    background-color: #ddd;
    color: #666;
    border: 1px solid #cbcbcb;
    border-top: 0 none;
    overflow: hidden;
    margin: 0;
    padding: 4px 6px 0 4px;
    position: absolute;
    top: 0;
    z-index: 99;
    white-space: normal;
}
.ace_search.left {
    border-left: 0 none;
    border-radius: 0px 0px 5px 0px;
    left: 0;
}
.ace_search.right {
    border-radius: 0px 0px 0px 5px;
    border-right: 0 none;
    right: 0;
}

.ace_search_form, .ace_replace_form {
    margin: 0 20px 4px 0;
    overflow: hidden;
    line-height: 1.9;
}
.ace_replace_form {
    margin-right: 0;
}
.ace_search_form.ace_nomatch {
    outline: 1px solid red;
}

.ace_search_field {
    border-radius: 3px 0 0 3px;
    background-color: white;
    color: black;
    border: 1px solid #cbcbcb;
    border-right: 0 none;
    outline: 0;
    padding: 0;
    font-size: inherit;
    margin: 0;
    line-height: inherit;
    padding: 0 6px;
    min-width: 17em;
    vertical-align: top;
    min-height: 1.8em;
    box-sizing: content-box;
}
.ace_searchbtn {
    border: 1px solid #cbcbcb;
    line-height: inherit;
    display: inline-block;
    padding: 0 6px;
    background: #fff;
    border-right: 0 none;
    border-left: 1px solid #dcdcdc;
    cursor: pointer;
    margin: 0;
    position: relative;
    color: #666;
}
.ace_searchbtn:last-child {
    border-radius: 0 3px 3px 0;
    border-right: 1px solid #cbcbcb;
}
.ace_searchbtn:disabled {
    background: none;
    cursor: default;
}
.ace_searchbtn:hover {
    background-color: #eef1f6;
}
.ace_searchbtn.prev, .ace_searchbtn.next {
     padding: 0px 0.7em
}
.ace_searchbtn.prev:after, .ace_searchbtn.next:after {
     content: "";
     border: solid 2px #888;
     width: 0.5em;
     height: 0.5em;
     border-width:  2px 0 0 2px;
     display:inline-block;
     transform: rotate(-45deg);
}
.ace_searchbtn.next:after {
     border-width: 0 2px 2px 0 ;
}
.ace_searchbtn_close {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;
    border-radius: 50%;
    border: 0 none;
    color: #656565;
    cursor: pointer;
    font: 16px/16px Arial;
    padding: 0;
    height: 14px;
    width: 14px;
    top: 9px;
    right: 7px;
    position: absolute;
}
.ace_searchbtn_close:hover {
    background-color: #656565;
    background-position: 50% 100%;
    color: white;
}

.ace_button {
    margin-left: 2px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
    opacity: 0.7;
    border: 1px solid rgba(100,100,100,0.23);
    padding: 1px;
    box-sizing:    border-box!important;
    color: black;
}

.ace_button:hover {
    background-color: #eee;
    opacity:1;
}
.ace_button:active {
    background-color: #ddd;
}

.ace_button.checked {
    border-color: #3399ff;
    opacity:1;
}

.ace_search_options{
    margin-bottom: 3px;
    text-align: right;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    clear: both;
}

.ace_search_counter {
    float: left;
    font-family: arial;
    padding: 0 8px;
}`}),ace.define("ace/ext/searchbox",["require","exports","module","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/ext/searchbox-css","ace/keyboard/hash_handler","ace/lib/keys","ace/config"],function(g,y,I){var R=g("../lib/dom"),T=g("../lib/lang"),w=g("../lib/event"),$=g("./searchbox-css"),u=g("../keyboard/hash_handler").HashHandler,x=g("../lib/keys"),m=g("../config").nls,_=999;R.importCssString($,"ace_searchbox",!1);var S=function(){function p(b,f,t){var l=R.createElement("div");R.buildDom(["div",{class:"ace_search right"},["span",{action:"hide",class:"ace_searchbtn_close"}],["div",{class:"ace_search_form"},["input",{class:"ace_search_field",placeholder:m("Search for"),spellcheck:"false"}],["span",{action:"findPrev",class:"ace_searchbtn prev"},"​"],["span",{action:"findNext",class:"ace_searchbtn next"},"​"],["span",{action:"findAll",class:"ace_searchbtn",title:"Alt-Enter"},m("All")]],["div",{class:"ace_replace_form"},["input",{class:"ace_search_field",placeholder:m("Replace with"),spellcheck:"false"}],["span",{action:"replaceAndFindNext",class:"ace_searchbtn"},m("Replace")],["span",{action:"replaceAll",class:"ace_searchbtn"},m("All")]],["div",{class:"ace_search_options"},["span",{action:"toggleReplace",class:"ace_button",title:m("Toggle Replace mode"),style:"float:left;margin-top:-2px;padding:0 5px;"},"+"],["span",{class:"ace_search_counter"}],["span",{action:"toggleRegexpMode",class:"ace_button",title:m("RegExp Search")},".*"],["span",{action:"toggleCaseSensitive",class:"ace_button",title:m("CaseSensitive Search")},"Aa"],["span",{action:"toggleWholeWords",class:"ace_button",title:m("Whole Word Search")},"\\b"],["span",{action:"searchInSelection",class:"ace_button",title:m("Search In Selection")},"S"]]],l),this.element=l.firstChild,this.setSession=this.setSession.bind(this),this.$init(),this.setEditor(b),R.importCssString($,"ace_searchbox",b.container)}return p.prototype.setEditor=function(b){b.searchBox=this,b.renderer.scroller.appendChild(this.element),this.editor=b},p.prototype.setSession=function(b){this.searchRange=null,this.$syncOptions(!0)},p.prototype.$initElements=function(b){this.searchBox=b.querySelector(".ace_search_form"),this.replaceBox=b.querySelector(".ace_replace_form"),this.searchOption=b.querySelector("[action=searchInSelection]"),this.replaceOption=b.querySelector("[action=toggleReplace]"),this.regExpOption=b.querySelector("[action=toggleRegexpMode]"),this.caseSensitiveOption=b.querySelector("[action=toggleCaseSensitive]"),this.wholeWordOption=b.querySelector("[action=toggleWholeWords]"),this.searchInput=this.searchBox.querySelector(".ace_search_field"),this.replaceInput=this.replaceBox.querySelector(".ace_search_field"),this.searchCounter=b.querySelector(".ace_search_counter")},p.prototype.$init=function(){var b=this.element;this.$initElements(b);var f=this;w.addListener(b,"mousedown",function(t){setTimeout(function(){f.activeInput.focus()},0),w.stopPropagation(t)}),w.addListener(b,"click",function(t){var l=t.target||t.srcElement,d=l.getAttribute("action");d&&f[d]?f[d]():f.$searchBarKb.commands[d]&&f.$searchBarKb.commands[d].exec(f),w.stopPropagation(t)}),w.addCommandKeyListener(b,function(t,l,d){var i=x.keyCodeToString(d),n=f.$searchBarKb.findKeyCommand(l,i);n&&n.exec&&(n.exec(f),w.stopEvent(t))}),this.$onChange=T.delayedCall(function(){f.find(!1,!1)}),w.addListener(this.searchInput,"input",function(){f.$onChange.schedule(20)}),w.addListener(this.searchInput,"focus",function(){f.activeInput=f.searchInput,f.searchInput.value&&f.highlight()}),w.addListener(this.replaceInput,"focus",function(){f.activeInput=f.replaceInput,f.searchInput.value&&f.highlight()})},p.prototype.setSearchRange=function(b){this.searchRange=b,b?this.searchRangeMarker=this.editor.session.addMarker(b,"ace_active-line"):this.searchRangeMarker&&(this.editor.session.removeMarker(this.searchRangeMarker),this.searchRangeMarker=null)},p.prototype.$syncOptions=function(b){R.setCssClass(this.replaceOption,"checked",this.searchRange),R.setCssClass(this.searchOption,"checked",this.searchOption.checked),this.replaceOption.textContent=this.replaceOption.checked?"-":"+",R.setCssClass(this.regExpOption,"checked",this.regExpOption.checked),R.setCssClass(this.wholeWordOption,"checked",this.wholeWordOption.checked),R.setCssClass(this.caseSensitiveOption,"checked",this.caseSensitiveOption.checked);var f=this.editor.getReadOnly();this.replaceOption.style.display=f?"none":"",this.replaceBox.style.display=this.replaceOption.checked&&!f?"":"none",this.find(!1,!1,b)},p.prototype.highlight=function(b){this.editor.session.highlight(b||this.editor.$search.$options.re),this.editor.renderer.updateBackMarkers()},p.prototype.find=function(b,f,t){var l=this.editor.find(this.searchInput.value,{skipCurrent:b,backwards:f,wrap:!0,regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked,preventScroll:t,range:this.searchRange}),d=!l&&this.searchInput.value;R.setCssClass(this.searchBox,"ace_nomatch",d),this.editor._emit("findSearchBox",{match:!d}),this.highlight(),this.updateCounter()},p.prototype.updateCounter=function(){var b=this.editor,f=b.$search.$options.re,t=f.unicode,l=0,d=0;if(f){var i=this.searchRange?b.session.getTextRange(this.searchRange):b.getValue(),n=b.session.doc.positionToIndex(b.selection.anchor);this.searchRange&&(n-=b.session.doc.positionToIndex(this.searchRange.start));for(var e=f.lastIndex=0,r;(r=f.exec(i))&&(l++,e=r.index,e<=n&&d++,!(l>_||!r[0]&&(f.lastIndex=e+=T.skipEmptyMatch(i,e,t),e>=i.length))););}this.searchCounter.textContent=m("$0 of $1",[d,l>_?_+"+":l])},p.prototype.findNext=function(){this.find(!0,!1)},p.prototype.findPrev=function(){this.find(!0,!0)},p.prototype.findAll=function(){var b=this.editor.findAll(this.searchInput.value,{regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked}),f=!b&&this.searchInput.value;R.setCssClass(this.searchBox,"ace_nomatch",f),this.editor._emit("findSearchBox",{match:!f}),this.highlight(),this.hide()},p.prototype.replace=function(){this.editor.getReadOnly()||this.editor.replace(this.replaceInput.value)},p.prototype.replaceAndFindNext=function(){this.editor.getReadOnly()||(this.editor.replace(this.replaceInput.value),this.findNext())},p.prototype.replaceAll=function(){this.editor.getReadOnly()||this.editor.replaceAll(this.replaceInput.value)},p.prototype.hide=function(){this.active=!1,this.setSearchRange(null),this.editor.off("changeSession",this.setSession),this.element.style.display="none",this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb),this.editor.focus()},p.prototype.show=function(b,f){this.active=!0,this.editor.on("changeSession",this.setSession),this.element.style.display="",this.replaceOption.checked=f,b&&(this.searchInput.value=b),this.searchInput.focus(),this.searchInput.select(),this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb),this.$syncOptions(!0)},p.prototype.isFocused=function(){var b=document.activeElement;return b==this.searchInput||b==this.replaceInput},p}(),k=new u;k.bindKeys({"Ctrl-f|Command-f":function(p){var b=p.isReplace=!p.isReplace;p.replaceBox.style.display=b?"":"none",p.replaceOption.checked=!1,p.$syncOptions(),p.searchInput.focus()},"Ctrl-H|Command-Option-F":function(p){p.editor.getReadOnly()||(p.replaceOption.checked=!0,p.$syncOptions(),p.replaceInput.focus())},"Ctrl-G|Command-G":function(p){p.findNext()},"Ctrl-Shift-G|Command-Shift-G":function(p){p.findPrev()},esc:function(p){setTimeout(function(){p.hide()})},Return:function(p){p.activeInput==p.replaceInput&&p.replace(),p.findNext()},"Shift-Return":function(p){p.activeInput==p.replaceInput&&p.replace(),p.findPrev()},"Alt-Return":function(p){p.activeInput==p.replaceInput&&p.replaceAll(),p.findAll()},Tab:function(p){(p.activeInput==p.replaceInput?p.searchInput:p.replaceInput).focus()}}),k.addCommands([{name:"toggleRegexpMode",bindKey:{win:"Alt-R|Alt-/",mac:"Ctrl-Alt-R|Ctrl-Alt-/"},exec:function(p){p.regExpOption.checked=!p.regExpOption.checked,p.$syncOptions()}},{name:"toggleCaseSensitive",bindKey:{win:"Alt-C|Alt-I",mac:"Ctrl-Alt-R|Ctrl-Alt-I"},exec:function(p){p.caseSensitiveOption.checked=!p.caseSensitiveOption.checked,p.$syncOptions()}},{name:"toggleWholeWords",bindKey:{win:"Alt-B|Alt-W",mac:"Ctrl-Alt-B|Ctrl-Alt-W"},exec:function(p){p.wholeWordOption.checked=!p.wholeWordOption.checked,p.$syncOptions()}},{name:"toggleReplace",exec:function(p){p.replaceOption.checked=!p.replaceOption.checked,p.$syncOptions()}},{name:"searchInSelection",exec:function(p){p.searchOption.checked=!p.searchRange,p.setSearchRange(p.searchOption.checked&&p.editor.getSelectionRange()),p.$syncOptions()}}]);var C=new u([{bindKey:"Esc",name:"closeSearchBar",exec:function(p){p.searchBox.hide()}}]);S.prototype.$searchBarKb=k,S.prototype.$closeSearchBarKb=C,y.SearchBox=S,y.Search=function(p,b){var f=p.searchBox||new S(p);f.show(p.session.getTextRange(),b)}}),function(){ace.require(["ace/ext/searchbox"],function(g){N&&(N.exports=g)})}()})(ee);var te={exports:{}};(function(N,j){ace.define("ace/snippets",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter","ace/lib/lang","ace/range","ace/range_list","ace/keyboard/hash_handler","ace/tokenizer","ace/clipboard","ace/editor"],function(g,y,I){var R=g("./lib/dom"),T=g("./lib/oop"),w=g("./lib/event_emitter").EventEmitter,$=g("./lib/lang"),u=g("./range").Range,x=g("./range_list").RangeList,m=g("./keyboard/hash_handler").HashHandler,_=g("./tokenizer").Tokenizer,S=g("./clipboard"),k={CURRENT_WORD:function(i){return i.session.getTextRange(i.session.getWordRange())},SELECTION:function(i,n,e){var r=i.session.getTextRange();return e?r.replace(/\n\r?([ \t]*\S)/g,`
`+e+"$1"):r},CURRENT_LINE:function(i){return i.session.getLine(i.getCursorPosition().row)},PREV_LINE:function(i){return i.session.getLine(i.getCursorPosition().row-1)},LINE_INDEX:function(i){return i.getCursorPosition().row},LINE_NUMBER:function(i){return i.getCursorPosition().row+1},SOFT_TABS:function(i){return i.session.getUseSoftTabs()?"YES":"NO"},TAB_SIZE:function(i){return i.session.getTabSize()},CLIPBOARD:function(i){return S.getText&&S.getText()},FILENAME:function(i){return/[^/\\]*$/.exec(this.FILEPATH(i))[0]},FILENAME_BASE:function(i){return/[^/\\]*$/.exec(this.FILEPATH(i))[0].replace(/\.[^.]*$/,"")},DIRECTORY:function(i){return this.FILEPATH(i).replace(/[^/\\]*$/,"")},FILEPATH:function(i){return"/not implemented.txt"},WORKSPACE_NAME:function(){return"Unknown"},FULLNAME:function(){return"Unknown"},BLOCK_COMMENT_START:function(i){var n=i.session.$mode||{};return n.blockComment&&n.blockComment.start||""},BLOCK_COMMENT_END:function(i){var n=i.session.$mode||{};return n.blockComment&&n.blockComment.end||""},LINE_COMMENT:function(i){var n=i.session.$mode||{};return n.lineCommentStart||""},CURRENT_YEAR:C.bind(null,{year:"numeric"}),CURRENT_YEAR_SHORT:C.bind(null,{year:"2-digit"}),CURRENT_MONTH:C.bind(null,{month:"numeric"}),CURRENT_MONTH_NAME:C.bind(null,{month:"long"}),CURRENT_MONTH_NAME_SHORT:C.bind(null,{month:"short"}),CURRENT_DATE:C.bind(null,{day:"2-digit"}),CURRENT_DAY_NAME:C.bind(null,{weekday:"long"}),CURRENT_DAY_NAME_SHORT:C.bind(null,{weekday:"short"}),CURRENT_HOUR:C.bind(null,{hour:"2-digit",hour12:!1}),CURRENT_MINUTE:C.bind(null,{minute:"2-digit"}),CURRENT_SECOND:C.bind(null,{second:"2-digit"})};k.SELECTED_TEXT=k.SELECTION;function C(i){var n=new Date().toLocaleString("en-us",i);return n.length==1?"0"+n:n}var p=function(){function i(){this.snippetMap={},this.snippetNameMap={},this.variables=k}return i.prototype.getTokenizer=function(){return i.$tokenizer||this.createTokenizer()},i.prototype.createTokenizer=function(){function n(a){return a=a.substr(1),/^\d+$/.test(a)?[{tabstopId:parseInt(a,10)}]:[{text:a}]}function e(a){return"(?:[^\\\\"+a+"]|\\\\.)"}var r={regex:"/("+e("/")+"+)/",onMatch:function(a,s,c){var o=c[0];return o.fmtString=!0,o.guard=a.slice(1,-1),o.flag="",""},next:"formatString"};return i.$tokenizer=new _({start:[{regex:/\\./,onMatch:function(a,s,c){var o=a[1];return(o=="}"&&c.length||"`$\\".indexOf(o)!=-1)&&(a=o),[a]}},{regex:/}/,onMatch:function(a,s,c){return[c.length?c.shift():a]}},{regex:/\$(?:\d+|\w+)/,onMatch:n},{regex:/\$\{[\dA-Z_a-z]+/,onMatch:function(a,s,c){var o=n(a.substr(1));return c.unshift(o[0]),o},next:"snippetVar"},{regex:/\n/,token:"newline",merge:!1}],snippetVar:[{regex:"\\|"+e("\\|")+"*\\|",onMatch:function(a,s,c){var o=a.slice(1,-1).replace(/\\[,|\\]|,/g,function(v){return v.length==2?v[1]:"\0"}).split("\0").map(function(v){return{value:v}});return c[0].choices=o,[o[0]]},next:"start"},r,{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"start"}],formatString:[{regex:/:/,onMatch:function(a,s,c){return c.length&&c[0].expectElse?(c[0].expectElse=!1,c[0].ifEnd={elseEnd:c[0]},[c[0].ifEnd]):":"}},{regex:/\\./,onMatch:function(a,s,c){var o=a[1];return o=="}"&&c.length||"`$\\".indexOf(o)!=-1?a=o:o=="n"?a=`
`:o=="t"?a="	":"ulULE".indexOf(o)!=-1&&(a={changeCase:o,local:o>"a"}),[a]}},{regex:"/\\w*}",onMatch:function(a,s,c){var o=c.shift();return o&&(o.flag=a.slice(1,-1)),this.next=o&&o.tabstopId?"start":"",[o||a]},next:"start"},{regex:/\$(?:\d+|\w+)/,onMatch:function(a,s,c){return[{text:a.slice(1)}]}},{regex:/\${\w+/,onMatch:function(a,s,c){var o={text:a.slice(2)};return c.unshift(o),[o]},next:"formatStringVar"},{regex:/\n/,token:"newline",merge:!1},{regex:/}/,onMatch:function(a,s,c){var o=c.shift();return this.next=o&&o.tabstopId?"start":"",[o||a]},next:"start"}],formatStringVar:[{regex:/:\/\w+}/,onMatch:function(a,s,c){var o=c[0];return o.formatFunction=a.slice(2,-1),[c.shift()]},next:"formatString"},r,{regex:/:[\?\-+]?/,onMatch:function(a,s,c){a[1]=="+"&&(c[0].ifEnd=c[0]),a[1]=="?"&&(c[0].expectElse=!0)},next:"formatString"},{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"formatString"}]}),i.$tokenizer},i.prototype.tokenizeTmSnippet=function(n,e){return this.getTokenizer().getLineTokens(n,e).tokens.map(function(r){return r.value||r})},i.prototype.getVariableValue=function(n,e,r){if(/^\d+$/.test(e))return(this.variables.__||{})[e]||"";if(/^[A-Z]\d+$/.test(e))return(this.variables[e[0]+"__"]||{})[e.substr(1)]||"";if(e=e.replace(/^TM_/,""),!this.variables.hasOwnProperty(e))return"";var a=this.variables[e];return typeof a=="function"&&(a=this.variables[e](n,e,r)),a??""},i.prototype.tmStrFormat=function(n,e,r){if(!e.fmt)return n;var a=e.flag||"",s=e.guard;s=new RegExp(s,a.replace(/[^gim]/g,""));var c=typeof e.fmt=="string"?this.tokenizeTmSnippet(e.fmt,"formatString"):e.fmt,o=this,v=n.replace(s,function(){var h=o.variables.__;o.variables.__=[].slice.call(arguments);for(var M=o.resolveVariables(c,r),A="E",E=0;E<M.length;E++){var O=M[E];if(typeof O=="object")if(M[E]="",O.changeCase&&O.local){var L=M[E+1];L&&typeof L=="string"&&(O.changeCase=="u"?M[E]=L[0].toUpperCase():M[E]=L[0].toLowerCase(),M[E+1]=L.substr(1))}else O.changeCase&&(A=O.changeCase);else A=="U"?M[E]=O.toUpperCase():A=="L"&&(M[E]=O.toLowerCase())}return o.variables.__=h,M.join("")});return v},i.prototype.tmFormatFunction=function(n,e,r){return e.formatFunction=="upcase"?n.toUpperCase():e.formatFunction=="downcase"?n.toLowerCase():n},i.prototype.resolveVariables=function(n,e){for(var r=[],a="",s=!0,c=0;c<n.length;c++){var o=n[c];if(typeof o=="string"){r.push(o),o==`
`?(s=!0,a=""):s&&(a=/^\t*/.exec(o)[0],s=/\S/.test(o));continue}if(o){if(s=!1,o.fmtString){var v=n.indexOf(o,c+1);v==-1&&(v=n.length),o.fmt=n.slice(c+1,v),c=v}if(o.text){var h=this.getVariableValue(e,o.text,a)+"";o.fmtString&&(h=this.tmStrFormat(h,o,e)),o.formatFunction&&(h=this.tmFormatFunction(h,o,e)),h&&!o.ifEnd?(r.push(h),M(o)):!h&&o.ifEnd&&M(o.ifEnd)}else o.elseEnd?M(o.elseEnd):(o.tabstopId!=null||o.changeCase!=null)&&r.push(o)}}function M(A){var E=n.indexOf(A,c+1);E!=-1&&(c=E)}return r},i.prototype.getDisplayTextForSnippet=function(n,e){var r=b.call(this,n,e);return r.text},i.prototype.insertSnippetForSelection=function(n,e,r){r===void 0&&(r={});var a=b.call(this,n,e,r),s=n.getSelectionRange(),c=n.session.replace(s,a.text),o=new f(n),v=n.inVirtualSelectionMode&&n.selection.index;o.addTabstops(a.tabstops,s.start,c,v)},i.prototype.insertSnippet=function(n,e,r){r===void 0&&(r={});var a=this;if(n.inVirtualSelectionMode)return a.insertSnippetForSelection(n,e,r);n.forEachSelection(function(){a.insertSnippetForSelection(n,e,r)},null,{keepOrder:!0}),n.tabstopManager&&n.tabstopManager.tabNext()},i.prototype.$getScope=function(n){var e=n.session.$mode.$id||"";if(e=e.split("/").pop(),e==="html"||e==="php"){e==="php"&&!n.session.$mode.inlinePhp&&(e="html");var r=n.getCursorPosition(),a=n.session.getState(r.row);typeof a=="object"&&(a=a[0]),a.substring&&(a.substring(0,3)=="js-"?e="javascript":a.substring(0,4)=="css-"?e="css":a.substring(0,4)=="php-"&&(e="php"))}return e},i.prototype.getActiveScopes=function(n){var e=this.$getScope(n),r=[e],a=this.snippetMap;return a[e]&&a[e].includeScopes&&r.push.apply(r,a[e].includeScopes),r.push("_"),r},i.prototype.expandWithTab=function(n,e){var r=this,a=n.forEachSelection(function(){return r.expandSnippetForSelection(n,e)},null,{keepOrder:!0});return a&&n.tabstopManager&&n.tabstopManager.tabNext(),a},i.prototype.expandSnippetForSelection=function(n,e){var r=n.getCursorPosition(),a=n.session.getLine(r.row),s=a.substring(0,r.column),c=a.substr(r.column),o=this.snippetMap,v;return this.getActiveScopes(n).some(function(h){var M=o[h];return M&&(v=this.findMatchingSnippet(M,s,c)),!!v},this),v?(e&&e.dryRun||(n.session.doc.removeInLine(r.row,r.column-v.replaceBefore.length,r.column+v.replaceAfter.length),this.variables.M__=v.matchBefore,this.variables.T__=v.matchAfter,this.insertSnippetForSelection(n,v.content),this.variables.M__=this.variables.T__=null),!0):!1},i.prototype.findMatchingSnippet=function(n,e,r){for(var a=n.length;a--;){var s=n[a];if(!(s.startRe&&!s.startRe.test(e))&&!(s.endRe&&!s.endRe.test(r))&&!(!s.startRe&&!s.endRe))return s.matchBefore=s.startRe?s.startRe.exec(e):[""],s.matchAfter=s.endRe?s.endRe.exec(r):[""],s.replaceBefore=s.triggerRe?s.triggerRe.exec(e)[0]:"",s.replaceAfter=s.endTriggerRe?s.endTriggerRe.exec(r)[0]:"",s}},i.prototype.register=function(n,e){var r=this.snippetMap,a=this.snippetNameMap,s=this;n||(n=[]);function c(h){return h&&!/^\^?\(.*\)\$?$|^\\b$/.test(h)&&(h="(?:"+h+")"),h||""}function o(h,M,A){return h=c(h),M=c(M),A?(h=M+h,h&&h[h.length-1]!="$"&&(h=h+"$")):(h=h+M,h&&h[0]!="^"&&(h="^"+h)),new RegExp(h)}function v(h){h.scope||(h.scope=e||"_"),e=h.scope,r[e]||(r[e]=[],a[e]={});var M=a[e];if(h.name){var A=M[h.name];A&&s.unregister(A),M[h.name]=h}r[e].push(h),h.prefix&&(h.tabTrigger=h.prefix),!h.content&&h.body&&(h.content=Array.isArray(h.body)?h.body.join(`
`):h.body),h.tabTrigger&&!h.trigger&&(!h.guard&&/^\w/.test(h.tabTrigger)&&(h.guard="\\b"),h.trigger=$.escapeRegExp(h.tabTrigger)),!(!h.trigger&&!h.guard&&!h.endTrigger&&!h.endGuard)&&(h.startRe=o(h.trigger,h.guard,!0),h.triggerRe=new RegExp(h.trigger),h.endRe=o(h.endTrigger,h.endGuard,!0),h.endTriggerRe=new RegExp(h.endTrigger))}Array.isArray(n)?n.forEach(v):Object.keys(n).forEach(function(h){v(n[h])}),this._signal("registerSnippets",{scope:e})},i.prototype.unregister=function(n,e){var r=this.snippetMap,a=this.snippetNameMap;function s(c){var o=a[c.scope||e];if(o&&o[c.name]){delete o[c.name];var v=r[c.scope||e],h=v&&v.indexOf(c);h>=0&&v.splice(h,1)}}n.content?s(n):Array.isArray(n)&&n.forEach(s)},i.prototype.parseSnippetFile=function(n){n=n.replace(/\r/g,"");for(var e=[],r={},a=/^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm,s;s=a.exec(n);){if(s[1])try{r=JSON.parse(s[1]),e.push(r)}catch{}if(s[4])r.content=s[4].replace(/^\t/gm,""),e.push(r),r={};else{var c=s[2],o=s[3];if(c=="regex"){var v=/\/((?:[^\/\\]|\\.)*)|$/g;r.guard=v.exec(o)[1],r.trigger=v.exec(o)[1],r.endTrigger=v.exec(o)[1],r.endGuard=v.exec(o)[1]}else c=="snippet"?(r.tabTrigger=o.match(/^\S*/)[0],r.name||(r.name=o)):c&&(r[c]=o)}}return e},i.prototype.getSnippetByName=function(n,e){var r=this.snippetNameMap,a;return this.getActiveScopes(e).some(function(s){var c=r[s];return c&&(a=c[n]),!!a},this),a},i}();T.implement(p.prototype,w);var b=function(i,n,e){e===void 0&&(e={});var r=i.getCursorPosition(),a=i.session.getLine(r.row),s=i.session.getTabString(),c=a.match(/^\s*/)[0];r.column<c.length&&(c=c.slice(0,r.column)),n=n.replace(/\r/g,"");var o=this.tokenizeTmSnippet(n);o=this.resolveVariables(o,i),o=o.map(function(z){return z==`
`&&!e.excludeExtraIndent?z+c:typeof z=="string"?z.replace(/\t/g,s):z});var v=[];o.forEach(function(z,U){if(typeof z=="object"){var V=z.tabstopId,P=v[V];if(P||(P=v[V]=[],P.index=V,P.value="",P.parents={}),P.indexOf(z)===-1){z.choices&&!P.choices&&(P.choices=z.choices),P.push(z);var K=o.indexOf(z,U+1);if(K!==-1){var q=o.slice(U+1,K),X=q.some(function(G){return typeof G=="object"});X&&!P.value?P.value=q:q.length&&(!P.value||typeof P.value!="string")&&(P.value=q.join(""))}}}}),v.forEach(function(z){z.length=0});var h={};function M(z){for(var U=[],V=0;V<z.length;V++){var P=z[V];if(typeof P=="object"){if(h[P.tabstopId])continue;var K=z.lastIndexOf(P,V-1);P=U[K]||{tabstopId:P.tabstopId}}U[V]=P}return U}for(var A=0;A<o.length;A++){var E=o[A];if(typeof E=="object"){var O=E.tabstopId,L=v[O],B=o.indexOf(E,A+1);if(h[O]){h[O]===E&&(delete h[O],Object.keys(h).forEach(function(z){L.parents[z]=!0}));continue}h[O]=E;var F=L.value;typeof F!="string"?F=M(F):E.fmt&&(F=this.tmStrFormat(F,E,i)),o.splice.apply(o,[A+1,Math.max(0,B-A)].concat(F,E)),L.indexOf(E)===-1&&L.push(E)}}var H=0,D=0,W="";return o.forEach(function(z){if(typeof z=="string"){var U=z.split(`
`);U.length>1?(D=U[U.length-1].length,H+=U.length-1):D+=z.length,W+=z}else z&&(z.start?z.end={row:H,column:D}:z.start={row:H,column:D})}),{text:W,tabstops:v,tokens:o}},f=function(){function i(n){if(this.index=0,this.ranges=[],this.tabstops=[],n.tabstopManager)return n.tabstopManager;n.tabstopManager=this,this.$onChange=this.onChange.bind(this),this.$onChangeSelection=$.delayedCall(this.onChangeSelection.bind(this)).schedule,this.$onChangeSession=this.onChangeSession.bind(this),this.$onAfterExec=this.onAfterExec.bind(this),this.attach(n)}return i.prototype.attach=function(n){this.$openTabstops=null,this.selectedTabstop=null,this.editor=n,this.session=n.session,this.editor.on("change",this.$onChange),this.editor.on("changeSelection",this.$onChangeSelection),this.editor.on("changeSession",this.$onChangeSession),this.editor.commands.on("afterExec",this.$onAfterExec),this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},i.prototype.detach=function(){this.tabstops.forEach(this.removeTabstopMarkers,this),this.ranges.length=0,this.tabstops.length=0,this.selectedTabstop=null,this.editor.off("change",this.$onChange),this.editor.off("changeSelection",this.$onChangeSelection),this.editor.off("changeSession",this.$onChangeSession),this.editor.commands.off("afterExec",this.$onAfterExec),this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.tabstopManager=null,this.session=null,this.editor=null},i.prototype.onChange=function(n){for(var e=n.action[0]=="r",r=this.selectedTabstop||{},a=r.parents||{},s=this.tabstops.slice(),c=0;c<s.length;c++){var o=s[c],v=o==r||a[o.index];if(o.rangeList.$bias=v?0:1,n.action=="remove"&&o!==r){var h=o.parents&&o.parents[r.index],M=o.rangeList.pointIndex(n.start,h);M=M<0?-M-1:M+1;var A=o.rangeList.pointIndex(n.end,h);A=A<0?-A-1:A-1;for(var E=o.rangeList.ranges.slice(M,A),O=0;O<E.length;O++)this.removeRange(E[O])}o.rangeList.$onChange(n)}var L=this.session;!this.$inChange&&e&&L.getLength()==1&&!L.getValue()&&this.detach()},i.prototype.updateLinkedFields=function(){var n=this.selectedTabstop;if(!(!n||!n.hasLinkedRanges||!n.firstNonLinked)){this.$inChange=!0;for(var e=this.session,r=e.getTextRange(n.firstNonLinked),a=0;a<n.length;a++){var s=n[a];if(s.linked){var c=s.original,o=y.snippetManager.tmStrFormat(r,c,this.editor);e.replace(s,o)}}this.$inChange=!1}},i.prototype.onAfterExec=function(n){n.command&&!n.command.readOnly&&this.updateLinkedFields()},i.prototype.onChangeSelection=function(){if(this.editor){for(var n=this.editor.selection.lead,e=this.editor.selection.anchor,r=this.editor.selection.isEmpty(),a=0;a<this.ranges.length;a++)if(!this.ranges[a].linked){var s=this.ranges[a].contains(n.row,n.column),c=r||this.ranges[a].contains(e.row,e.column);if(s&&c)return}this.detach()}},i.prototype.onChangeSession=function(){this.detach()},i.prototype.tabNext=function(n){var e=this.tabstops.length,r=this.index+(n||1);r=Math.min(Math.max(r,1),e),r==e&&(r=0),this.selectTabstop(r),r===0&&this.detach()},i.prototype.selectTabstop=function(n){this.$openTabstops=null;var e=this.tabstops[this.index];if(e&&this.addTabstopMarkers(e),this.index=n,e=this.tabstops[this.index],!(!e||!e.length)){this.selectedTabstop=e;var r=e.firstNonLinked||e;if(e.choices&&(r.cursor=r.start),this.editor.inVirtualSelectionMode)this.editor.selection.fromOrientedRange(r);else{var a=this.editor.multiSelect;a.toSingleRange(r);for(var s=0;s<e.length;s++)e.hasLinkedRanges&&e[s].linked||a.addRange(e[s].clone(),!0)}this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler),this.selectedTabstop&&this.selectedTabstop.choices&&this.editor.execCommand("startAutocomplete",{matches:this.selectedTabstop.choices})}},i.prototype.addTabstops=function(n,e,r){var a=this.useLink||!this.editor.getOption("enableMultiselect");if(this.$openTabstops||(this.$openTabstops=[]),!n[0]){var s=u.fromPoints(r,r);l(s.start,e),l(s.end,e),n[0]=[s],n[0].index=0}var c=this.index,o=[c+1,0],v=this.ranges;n.forEach(function(h,M){for(var A=this.$openTabstops[M]||h,E=0;E<h.length;E++){var O=h[E],L=u.fromPoints(O.start,O.end||O.start);t(L.start,e),t(L.end,e),L.original=O,L.tabstop=A,v.push(L),A!=h?A.unshift(L):A[E]=L,O.fmtString||A.firstNonLinked&&a?(L.linked=!0,A.hasLinkedRanges=!0):A.firstNonLinked||(A.firstNonLinked=L)}A.firstNonLinked||(A.hasLinkedRanges=!1),A===h&&(o.push(A),this.$openTabstops[M]=A),this.addTabstopMarkers(A),A.rangeList=A.rangeList||new x,A.rangeList.$bias=0,A.rangeList.addList(A)},this),o.length>2&&(this.tabstops.length&&o.push(o.splice(2,1)[0]),this.tabstops.splice.apply(this.tabstops,o))},i.prototype.addTabstopMarkers=function(n){var e=this.session;n.forEach(function(r){r.markerId||(r.markerId=e.addMarker(r,"ace_snippet-marker","text"))})},i.prototype.removeTabstopMarkers=function(n){var e=this.session;n.forEach(function(r){e.removeMarker(r.markerId),r.markerId=null})},i.prototype.removeRange=function(n){var e=n.tabstop.indexOf(n);e!=-1&&n.tabstop.splice(e,1),e=this.ranges.indexOf(n),e!=-1&&this.ranges.splice(e,1),e=n.tabstop.rangeList.ranges.indexOf(n),e!=-1&&n.tabstop.splice(e,1),this.session.removeMarker(n.markerId),n.tabstop.length||(e=this.tabstops.indexOf(n.tabstop),e!=-1&&this.tabstops.splice(e,1),this.tabstops.length||this.detach())},i}();f.prototype.keyboardHandler=new m,f.prototype.keyboardHandler.bindKeys({Tab:function(i){y.snippetManager&&y.snippetManager.expandWithTab(i)||(i.tabstopManager.tabNext(1),i.renderer.scrollCursorIntoView())},"Shift-Tab":function(i){i.tabstopManager.tabNext(-1),i.renderer.scrollCursorIntoView()},Esc:function(i){i.tabstopManager.detach()}});var t=function(i,n){i.row==0&&(i.column+=n.column),i.row+=n.row},l=function(i,n){i.row==n.row&&(i.column-=n.column),i.row-=n.row};R.importCssString(`
.ace_snippet-marker {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: rgba(194, 193, 208, 0.09);
    border: 1px dotted rgba(211, 208, 235, 0.62);
    position: absolute;
}`,"snippets.css",!1),y.snippetManager=new p;var d=g("./editor").Editor;(function(){this.insertSnippet=function(i,n){return y.snippetManager.insertSnippet(this,i,n)},this.expandSnippet=function(i){return y.snippetManager.expandWithTab(this,i)}}).call(d.prototype)}),ace.define("ace/autocomplete/popup",["require","exports","module","ace/virtual_renderer","ace/editor","ace/range","ace/lib/event","ace/lib/lang","ace/lib/dom","ace/config","ace/lib/useragent"],function(g,y,I){var R=g("../virtual_renderer").VirtualRenderer,T=g("../editor").Editor,w=g("../range").Range,$=g("../lib/event"),u=g("../lib/lang"),x=g("../lib/dom"),m=g("../config").nls,_=g("./../lib/useragent"),S=function(p){return"suggest-aria-id:".concat(p)},k=function(p){var b=new R(p);b.$maxLines=4;var f=new T(b);return f.setHighlightActiveLine(!1),f.setShowPrintMargin(!1),f.renderer.setShowGutter(!1),f.renderer.setHighlightGutterLine(!1),f.$mouseHandler.$focusTimeout=0,f.$highlightTagPending=!0,f},C=function(){function p(b){var f=x.createElement("div"),t=new k(f);b&&b.appendChild(f),f.style.display="none",t.renderer.content.style.cursor="default",t.renderer.setStyle("ace_autocomplete"),t.renderer.$textLayer.element.setAttribute("role",_.isSafari?"menu":"listbox"),t.renderer.$textLayer.element.setAttribute("aria-roledescription",m("Autocomplete suggestions")),t.renderer.$textLayer.element.setAttribute("aria-label",m("Autocomplete suggestions")),t.renderer.textarea.setAttribute("aria-hidden","true"),t.setOption("displayIndentGuides",!1),t.setOption("dragDelay",150);var l=function(){};t.focus=l,t.$isFocused=!0,t.renderer.$cursorLayer.restartTimer=l,t.renderer.$cursorLayer.element.style.opacity=0,t.renderer.$maxLines=8,t.renderer.$keepTextAreaAtCursor=!1,t.setHighlightActiveLine(!1),t.session.highlight(""),t.session.$searchHighlight.clazz="ace_highlight-marker",t.on("mousedown",function(s){var c=s.getDocumentPosition();t.selection.moveToPosition(c),n.start.row=n.end.row=c.row,s.stop()});var d,i=new w(-1,0,-1,1/0),n=new w(-1,0,-1,1/0);n.id=t.session.addMarker(n,"ace_active-line","fullLine"),t.setSelectOnHover=function(s){s?i.id&&(t.session.removeMarker(i.id),i.id=null):i.id=t.session.addMarker(i,"ace_line-hover","fullLine")},t.setSelectOnHover(!1),t.on("mousemove",function(s){if(!d){d=s;return}if(!(d.x==s.x&&d.y==s.y)){d=s,d.scrollTop=t.renderer.scrollTop,t.isMouseOver=!0;var c=d.getDocumentPosition().row;i.start.row!=c&&(i.id||t.setRow(c),r(c))}}),t.renderer.on("beforeRender",function(){if(d&&i.start.row!=-1){d.$pos=null;var s=d.getDocumentPosition().row;i.id||t.setRow(s),r(s,!0)}}),t.renderer.on("afterRender",function(){var s=t.getRow(),c=t.renderer.$textLayer,o=c.element.childNodes[s-c.config.firstRow],v=document.activeElement;if(o!==c.selectedNode&&c.selectedNode&&(x.removeCssClass(c.selectedNode,"ace_selected"),v.removeAttribute("aria-activedescendant"),o.removeAttribute("aria-selected"),c.selectedNode.removeAttribute("id")),c.selectedNode=o,o){x.addCssClass(o,"ace_selected");var h=S(s);o.id=h,c.element.setAttribute("aria-activedescendant",h),v.setAttribute("aria-activedescendant",h),o.setAttribute("role",_.isSafari?"menuitem":"option"),o.setAttribute("aria-roledescription",m("item")),o.setAttribute("aria-label",t.getData(s).value),o.setAttribute("aria-setsize",t.data.length),o.setAttribute("aria-posinset",s+1),o.setAttribute("aria-describedby","doc-tooltip"),o.setAttribute("aria-selected","true")}});var e=function(){r(-1)},r=function(s,c){s!==i.start.row&&(i.start.row=i.end.row=s,c||t.session._emit("changeBackMarker"),t._emit("changeHoverMarker"))};t.getHoveredRow=function(){return i.start.row},$.addListener(t.container,"mouseout",function(){t.isMouseOver=!1,e()}),t.on("hide",e),t.on("changeSelection",e),t.session.doc.getLength=function(){return t.data.length},t.session.doc.getLine=function(s){var c=t.data[s];return typeof c=="string"?c:c&&c.value||""};var a=t.session.bgTokenizer;return a.$tokenizeRow=function(s){var c=t.data[s],o=[];if(!c)return o;typeof c=="string"&&(c={value:c});var v=c.caption||c.value||c.name;function h(H,D){H&&o.push({type:(c.className||"")+(D||""),value:H})}for(var M=v.toLowerCase(),A=(t.filterText||"").toLowerCase(),E=0,O=0,L=0;L<=A.length;L++)if(L!=O&&(c.matchMask&1<<L||L==A.length)){var B=A.slice(O,L);O=L;var F=M.indexOf(B,E);if(F==-1)continue;h(v.slice(E,F),""),E=F+B.length,h(v.slice(F,E),"completion-highlight")}return h(v.slice(E,v.length),""),o.push({type:"completion-spacer",value:" "}),c.meta&&o.push({type:"completion-meta",value:c.meta}),c.message&&o.push({type:"completion-message",value:c.message}),o},a.$updateOnChange=l,a.start=l,t.session.$computeWidth=function(){return this.screenWidth=0},t.isOpen=!1,t.isTopdown=!1,t.autoSelect=!0,t.filterText="",t.isMouseOver=!1,t.data=[],t.setData=function(s,c){t.filterText=c||"",t.setValue(u.stringRepeat(`
`,s.length),-1),t.data=s||[],t.setRow(0)},t.getData=function(s){return t.data[s]},t.getRow=function(){return n.start.row},t.setRow=function(s){s=Math.max(this.autoSelect?0:-1,Math.min(this.data.length-1,s)),n.start.row!=s&&(t.selection.clearSelection(),n.start.row=n.end.row=s||0,t.session._emit("changeBackMarker"),t.moveCursorTo(s||0,0),t.isOpen&&t._signal("select"))},t.on("changeSelection",function(){t.isOpen&&t.setRow(t.selection.lead.row),t.renderer.scrollCursorIntoView()}),t.hide=function(){this.container.style.display="none",t.anchorPos=null,t.anchor=null,t.isOpen&&(t.isOpen=!1,this._signal("hide"))},t.tryShow=function(s,c,o,v){if(!v&&t.isOpen&&t.anchorPos&&t.anchor&&t.anchorPos.top===s.top&&t.anchorPos.left===s.left&&t.anchor===o)return!0;var h=this.container,M=window.innerHeight,A=window.innerWidth,E=this.renderer,O=E.$maxLines*c*1.4,L={top:0,bottom:0,left:0},B=M-s.top-3*this.$borderSize-c,F=s.top-3*this.$borderSize;o||(F<=B||B>=O?o="bottom":o="top"),o==="top"?(L.bottom=s.top-this.$borderSize,L.top=L.bottom-O):o==="bottom"&&(L.top=s.top+c+this.$borderSize,L.bottom=L.top+O);var H=L.top>=0&&L.bottom<=M;if(!v&&!H)return!1;H?E.$maxPixelHeight=null:o==="top"?E.$maxPixelHeight=F:E.$maxPixelHeight=B,o==="top"?(h.style.top="",h.style.bottom=M-L.bottom+"px",t.isTopdown=!1):(h.style.top=L.top+"px",h.style.bottom="",t.isTopdown=!0),h.style.display="";var D=s.left;return D+h.offsetWidth>A&&(D=A-h.offsetWidth),h.style.left=D+"px",h.style.right="",t.isOpen||(t.isOpen=!0,this._signal("show"),d=null),t.anchorPos=s,t.anchor=o,!0},t.show=function(s,c,o){this.tryShow(s,c,o?"bottom":void 0,!0)},t.goTo=function(s){var c=this.getRow(),o=this.session.getLength()-1;switch(s){case"up":c=c<=0?o:c-1;break;case"down":c=c>=o?-1:c+1;break;case"start":c=0;break;case"end":c=o;break}this.setRow(c)},t.getTextLeftOffset=function(){return this.$borderSize+this.renderer.$padding+this.$imageSize},t.$imageSize=0,t.$borderSize=1,t}return p}();x.importCssString(`
.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {
    background-color: #CAD6FA;
    z-index: 1;
}
.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {
    background-color: #3a674e;
}
.ace_editor.ace_autocomplete .ace_line-hover {
    border: 1px solid #abbffe;
    margin-top: -1px;
    background: rgba(233,233,253,0.4);
    position: absolute;
    z-index: 2;
}
.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {
    border: 1px solid rgba(109, 150, 13, 0.8);
    background: rgba(58, 103, 78, 0.62);
}
.ace_completion-meta {
    opacity: 0.5;
    margin-left: 0.9em;
}
.ace_completion-message {
    margin-left: 0.9em;
    color: blue;
}
.ace_editor.ace_autocomplete .ace_completion-highlight{
    color: #2d69c7;
}
.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{
    color: #93ca12;
}
.ace_editor.ace_autocomplete {
    width: 300px;
    z-index: 200000;
    border: 1px lightgray solid;
    position: fixed;
    box-shadow: 2px 3px 5px rgba(0,0,0,.2);
    line-height: 1.4;
    background: #fefefe;
    color: #111;
}
.ace_dark.ace_editor.ace_autocomplete {
    border: 1px #484747 solid;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.51);
    line-height: 1.4;
    background: #25282c;
    color: #c1c1c1;
}
.ace_autocomplete .ace_text-layer  {
    width: calc(100% - 8px);
}
.ace_autocomplete .ace_line {
    display: flex;
    align-items: center;
}
.ace_autocomplete .ace_line > * {
    min-width: 0;
    flex: 0 0 auto;
}
.ace_autocomplete .ace_line .ace_ {
    flex: 0 1 auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.ace_autocomplete .ace_completion-spacer {
    flex: 1;
}
.ace_autocomplete.ace_loading:after  {
    content: "";
    position: absolute;
    top: 0px;
    height: 2px;
    width: 8%;
    background: blue;
    z-index: 100;
    animation: ace_progress 3s infinite linear;
    animation-delay: 300ms;
    transform: translateX(-100%) scaleX(1);
}
@keyframes ace_progress {
    0% { transform: translateX(-100%) scaleX(1) }
    50% { transform: translateX(625%) scaleX(2) } 
    100% { transform: translateX(1500%) scaleX(3) } 
}
@media (prefers-reduced-motion) {
    .ace_autocomplete.ace_loading:after {
        transform: translateX(625%) scaleX(2);
        animation: none;
     }
}
`,"autocompletion.css",!1),y.AcePopup=C,y.$singleLineEditor=k,y.getAriaId=S}),ace.define("ace/autocomplete/inline_screenreader",["require","exports","module"],function(g,y,I){var R=function(){function T(w){this.editor=w,this.screenReaderDiv=document.createElement("div"),this.screenReaderDiv.classList.add("ace_screenreader-only"),this.editor.container.appendChild(this.screenReaderDiv)}return T.prototype.setScreenReaderContent=function(w){for(!this.popup&&this.editor.completer&&this.editor.completer.popup&&(this.popup=this.editor.completer.popup,this.popup.renderer.on("afterRender",(function(){var u=this.popup.getRow(),x=this.popup.renderer.$textLayer,m=x.element.childNodes[u-x.config.firstRow];if(m){for(var _="doc-tooltip ",S=0;S<this._lines.length;S++)_+="ace-inline-screenreader-line-".concat(S," ");m.setAttribute("aria-describedby",_)}}).bind(this)));this.screenReaderDiv.firstChild;)this.screenReaderDiv.removeChild(this.screenReaderDiv.firstChild);this._lines=w.split(/\r\n|\r|\n/);var $=this.createCodeBlock();this.screenReaderDiv.appendChild($)},T.prototype.destroy=function(){this.screenReaderDiv.remove()},T.prototype.createCodeBlock=function(){var w=document.createElement("pre");w.setAttribute("id","ace-inline-screenreader");for(var $=0;$<this._lines.length;$++){var u=document.createElement("code");u.setAttribute("id","ace-inline-screenreader-line-".concat($));var x=document.createTextNode(this._lines[$]);u.appendChild(x),w.appendChild(u)}return w},T}();y.AceInlineScreenReader=R}),ace.define("ace/autocomplete/inline",["require","exports","module","ace/snippets","ace/autocomplete/inline_screenreader"],function(g,y,I){var R=g("../snippets").snippetManager,T=g("./inline_screenreader").AceInlineScreenReader,w=function(){function $(){this.editor=null}return $.prototype.show=function(u,x,m){if(m=m||"",u&&this.editor&&this.editor!==u&&(this.hide(),this.editor=null,this.inlineScreenReader=null),!u||!x)return!1;this.inlineScreenReader||(this.inlineScreenReader=new T(u));var _=x.snippet?R.getDisplayTextForSnippet(u,x.snippet):x.value;return x.hideInlinePreview||!_||!_.startsWith(m)?!1:(this.editor=u,this.inlineScreenReader.setScreenReaderContent(_),_=_.slice(m.length),_===""?u.removeGhostText():u.setGhostText(_),!0)},$.prototype.isOpen=function(){return this.editor?!!this.editor.renderer.$ghostText:!1},$.prototype.hide=function(){return this.editor?(this.editor.removeGhostText(),!0):!1},$.prototype.destroy=function(){this.hide(),this.editor=null,this.inlineScreenReader&&(this.inlineScreenReader.destroy(),this.inlineScreenReader=null)},$}();y.AceInline=w}),ace.define("ace/autocomplete/util",["require","exports","module"],function(g,y,I){y.parForEach=function(T,w,$){var u=0,x=T.length;x===0&&$();for(var m=0;m<x;m++)w(T[m],function(_,S){u++,u===x&&$(_,S)})};var R=/[a-zA-Z_0-9\$\-\u00A2-\u2000\u2070-\uFFFF]/;y.retrievePrecedingIdentifier=function(T,w,$){$=$||R;for(var u=[],x=w-1;x>=0&&$.test(T[x]);x--)u.push(T[x]);return u.reverse().join("")},y.retrieveFollowingIdentifier=function(T,w,$){$=$||R;for(var u=[],x=w;x<T.length&&$.test(T[x]);x++)u.push(T[x]);return u},y.getCompletionPrefix=function(T){var w=T.getCursorPosition(),$=T.session.getLine(w.row),u;return T.completers.forEach((function(x){x.identifierRegexps&&x.identifierRegexps.forEach((function(m){!u&&m&&(u=this.retrievePrecedingIdentifier($,w.column,m))}).bind(this))}).bind(this)),u||this.retrievePrecedingIdentifier($,w.column)},y.triggerAutocomplete=function(T){var w=T.getCursorPosition(),$=T.session.getLine(w.row),u=w.column===0?0:w.column-1,x=$[u];return T.completers.some(function(m){if(m.triggerCharacters&&Array.isArray(m.triggerCharacters))return m.triggerCharacters.includes(x)})}}),ace.define("ace/autocomplete",["require","exports","module","ace/keyboard/hash_handler","ace/autocomplete/popup","ace/autocomplete/inline","ace/autocomplete/popup","ace/autocomplete/util","ace/lib/lang","ace/lib/dom","ace/snippets","ace/config","ace/lib/event"],function(g,y,I){var R=g("./keyboard/hash_handler").HashHandler,T=g("./autocomplete/popup").AcePopup,w=g("./autocomplete/inline").AceInline,$=g("./autocomplete/popup").getAriaId,u=g("./autocomplete/util"),x=g("./lib/lang"),m=g("./lib/dom"),_=g("./snippets").snippetManager,S=g("./config"),k=g("./lib/event"),C=function(t,l){l.completer&&l.completer.destroy()},p=function(){function t(){this.autoInsert=!1,this.autoSelect=!0,this.autoShown=!1,this.exactMatch=!1,this.inlineEnabled=!1,this.keyboardHandler=new R,this.keyboardHandler.bindKeys(this.commands),this.parentNode=null,this.setSelectOnHover=!1,this.hasSeen=new Set,this.showLoadingState=!1,this.stickySelectionDelay=500,this.blurListener=this.blurListener.bind(this),this.changeListener=this.changeListener.bind(this),this.mousedownListener=this.mousedownListener.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this),this.onLayoutChange=this.onLayoutChange.bind(this),this.changeTimer=x.delayedCall((function(){this.updateCompletions(!0)}).bind(this)),this.tooltipTimer=x.delayedCall(this.updateDocTooltip.bind(this),50),this.popupTimer=x.delayedCall(this.$updatePopupPosition.bind(this),50),this.stickySelectionTimer=x.delayedCall((function(){this.stickySelection=!0}).bind(this),this.stickySelectionDelay),this.$firstOpenTimer=x.delayedCall((function(){var l=this.completionProvider&&this.completionProvider.initialPosition;this.autoShown||this.popup&&this.popup.isOpen||!l||(this.completions=new f(t.completionsForLoading),this.openPopup(this.editor,l.prefix,!1),this.popup.renderer.setStyle("ace_loading",!0))}).bind(this),this.stickySelectionDelay)}return Object.defineProperty(t,"completionsForLoading",{get:function(){return[{caption:S.nls("Loading..."),value:""}]},enumerable:!1,configurable:!0}),t.prototype.$init=function(){return this.popup=new T(this.parentNode||document.body||document.documentElement),this.popup.on("click",(function(l){this.insertMatch(),l.stop()}).bind(this)),this.popup.focus=this.editor.focus.bind(this.editor),this.popup.on("show",this.$onPopupShow.bind(this)),this.popup.on("hide",this.$onHidePopup.bind(this)),this.popup.on("select",this.$onPopupChange.bind(this)),k.addListener(this.popup.container,"mouseout",this.mouseOutListener.bind(this)),this.popup.on("changeHoverMarker",this.tooltipTimer.bind(null,null)),this.popup.renderer.on("afterRender",this.$onPopupRender.bind(this)),this.popup},t.prototype.$initInline=function(){if(!(!this.inlineEnabled||this.inlineRenderer))return this.inlineRenderer=new w,this.inlineRenderer},t.prototype.getPopup=function(){return this.popup||this.$init()},t.prototype.$onHidePopup=function(){this.inlineRenderer&&this.inlineRenderer.hide(),this.hideDocTooltip(),this.stickySelectionTimer.cancel(),this.popupTimer.cancel(),this.stickySelection=!1},t.prototype.$seen=function(l){!this.hasSeen.has(l)&&l&&l.completer&&l.completer.onSeen&&typeof l.completer.onSeen=="function"&&(l.completer.onSeen(this.editor,l),this.hasSeen.add(l))},t.prototype.$onPopupChange=function(l){if(this.inlineRenderer&&this.inlineEnabled){var d=l?null:this.popup.getData(this.popup.getRow()),i=u.getCompletionPrefix(this.editor);if(this.inlineRenderer.show(this.editor,d,i)?this.$seen(d):this.inlineRenderer.hide(),this.popup.isMouseOver&&this.setSelectOnHover){this.tooltipTimer.call(null,null);return}this.popupTimer.schedule(),this.tooltipTimer.schedule()}else this.popupTimer.call(null,null),this.tooltipTimer.call(null,null)},t.prototype.$onPopupRender=function(){var l=this.inlineRenderer&&this.inlineEnabled;if(this.completions&&this.completions.filtered&&this.completions.filtered.length>0)for(var d=this.popup.getFirstVisibleRow();d<=this.popup.getLastVisibleRow();d++){var i=this.popup.getData(d);i&&(!l||i.hideInlinePreview)&&this.$seen(i)}},t.prototype.$onPopupShow=function(l){this.$onPopupChange(l),this.stickySelection=!1,this.stickySelectionDelay>=0&&this.stickySelectionTimer.schedule(this.stickySelectionDelay)},t.prototype.observeLayoutChanges=function(){if(!(this.$elements||!this.editor)){window.addEventListener("resize",this.onLayoutChange,{passive:!0}),window.addEventListener("wheel",this.mousewheelListener);for(var l=this.editor.container.parentNode,d=[];l;)d.push(l),l.addEventListener("scroll",this.onLayoutChange,{passive:!0}),l=l.parentNode;this.$elements=d}},t.prototype.unObserveLayoutChanges=function(){var l=this;window.removeEventListener("resize",this.onLayoutChange,{passive:!0}),window.removeEventListener("wheel",this.mousewheelListener),this.$elements&&this.$elements.forEach(function(d){d.removeEventListener("scroll",l.onLayoutChange,{passive:!0})}),this.$elements=null},t.prototype.onLayoutChange=function(){if(!this.popup.isOpen)return this.unObserveLayoutChanges();this.$updatePopupPosition(),this.updateDocTooltip()},t.prototype.$updatePopupPosition=function(){var l=this.editor,d=l.renderer,i=d.layerConfig.lineHeight,n=d.$cursorLayer.getPixelPosition(this.base,!0);n.left-=this.popup.getTextLeftOffset();var e=l.container.getBoundingClientRect();n.top+=e.top-d.layerConfig.offset,n.left+=e.left-l.renderer.scrollLeft,n.left+=d.gutterWidth;var r={top:n.top,left:n.left};d.$ghostText&&d.$ghostTextWidget&&this.base.row===d.$ghostText.position.row&&(r.top+=d.$ghostTextWidget.el.offsetHeight);var a=l.container.getBoundingClientRect().bottom-i,s=a<r.top?{top:a,left:r.left}:r;this.popup.tryShow(s,i,"bottom")||this.popup.tryShow(n,i,"top")||this.popup.show(n,i)},t.prototype.openPopup=function(l,d,i){this.$firstOpenTimer.cancel(),this.popup||this.$init(),this.inlineEnabled&&!this.inlineRenderer&&this.$initInline(),this.popup.autoSelect=this.autoSelect,this.popup.setSelectOnHover(this.setSelectOnHover);var n=this.popup.getRow(),e=this.popup.data[n];this.popup.setData(this.completions.filtered,this.completions.filterText),this.editor.textInput.setAriaOptions&&this.editor.textInput.setAriaOptions({activeDescendant:$(this.popup.getRow()),inline:this.inlineEnabled}),l.keyBinding.addKeyboardHandler(this.keyboardHandler);var r;this.stickySelection&&(r=this.popup.data.indexOf(e)),(!r||r===-1)&&(r=0),this.popup.setRow(this.autoSelect?r:-1),r===n&&e!==this.completions.filtered[r]&&this.$onPopupChange(),i?i&&!d&&this.detach():(this.popup.setTheme(l.getTheme()),this.popup.setFontSize(l.getFontSize()),this.$updatePopupPosition(),this.tooltipNode&&this.updateDocTooltip()),this.changeTimer.cancel(),this.observeLayoutChanges()},t.prototype.detach=function(){this.editor&&(this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.off("changeSelection",this.changeListener),this.editor.off("blur",this.blurListener),this.editor.off("mousedown",this.mousedownListener),this.editor.off("mousewheel",this.mousewheelListener)),this.$firstOpenTimer.cancel(),this.changeTimer.cancel(),this.hideDocTooltip(),this.completionProvider&&this.completionProvider.detach(),this.popup&&this.popup.isOpen&&this.popup.hide(),this.popup&&this.popup.renderer&&this.popup.renderer.off("afterRender",this.$onPopupRender),this.base&&this.base.detach(),this.activated=!1,this.completionProvider=this.completions=this.base=null,this.unObserveLayoutChanges()},t.prototype.changeListener=function(l){var d=this.editor.selection.lead;(d.row!=this.base.row||d.column<this.base.column)&&this.detach(),this.activated?this.changeTimer.schedule():this.detach()},t.prototype.blurListener=function(l){var d=document.activeElement,i=this.editor.textInput.getElement(),n=l.relatedTarget&&this.tooltipNode&&this.tooltipNode.contains(l.relatedTarget),e=this.popup&&this.popup.container;d!=i&&d.parentNode!=e&&!n&&d!=this.tooltipNode&&l.relatedTarget!=i&&this.detach()},t.prototype.mousedownListener=function(l){this.detach()},t.prototype.mousewheelListener=function(l){this.popup.isMouseOver||this.detach()},t.prototype.mouseOutListener=function(l){this.popup.isOpen&&this.$updatePopupPosition()},t.prototype.goTo=function(l){this.popup.goTo(l)},t.prototype.insertMatch=function(l,d){if(l||(l=this.popup.getData(this.popup.getRow())),!l)return!1;if(l.value==="")return this.detach();var i=this.completions,n=this.getCompletionProvider().insertMatch(this.editor,l,i.filterText,d);return this.completions==i&&this.detach(),n},t.prototype.showPopup=function(l,d){this.editor&&this.detach(),this.activated=!0,this.editor=l,l.completer!=this&&(l.completer&&l.completer.detach(),l.completer=this),l.on("changeSelection",this.changeListener),l.on("blur",this.blurListener),l.on("mousedown",this.mousedownListener),l.on("mousewheel",this.mousewheelListener),this.updateCompletions(!1,d)},t.prototype.getCompletionProvider=function(l){return this.completionProvider||(this.completionProvider=new b(l)),this.completionProvider},t.prototype.gatherCompletions=function(l,d){return this.getCompletionProvider().gatherCompletions(l,d)},t.prototype.updateCompletions=function(l,d){if(l&&this.base&&this.completions){var n=this.editor.getCursorPosition(),e=this.editor.session.getTextRange({start:this.base,end:n});if(e==this.completions.filterText)return;if(this.completions.setFilter(e),!this.completions.filtered.length)return this.detach();if(this.completions.filtered.length==1&&this.completions.filtered[0].value==e&&!this.completions.filtered[0].snippet)return this.detach();this.openPopup(this.editor,e,l);return}if(d&&d.matches){var n=this.editor.getSelectionRange().start;return this.base=this.editor.session.doc.createAnchor(n.row,n.column),this.base.$insertRight=!0,this.completions=new f(d.matches),this.openPopup(this.editor,"",l)}var i=this.editor.getSession(),n=this.editor.getCursorPosition(),e=u.getCompletionPrefix(this.editor);this.base=i.doc.createAnchor(n.row,n.column-e.length),this.base.$insertRight=!0;var r={exactMatch:this.exactMatch,ignoreCaption:this.ignoreCaption};this.getCompletionProvider({prefix:e,pos:n}).provideCompletions(this.editor,r,(function(a,s,c){var o=s.filtered,v=u.getCompletionPrefix(this.editor);if(this.$firstOpenTimer.cancel(),c){if(!o.length){var h=!this.autoShown&&this.emptyMessage;if(typeof h=="function"&&(h=this.emptyMessage(v)),h){var M=[{caption:h,value:""}];this.completions=new f(M),this.openPopup(this.editor,v,l),this.popup.renderer.setStyle("ace_loading",!1);return}return this.detach()}if(o.length==1&&o[0].value==v&&!o[0].snippet)return this.detach();if(this.autoInsert&&!this.autoShown&&o.length==1)return this.insertMatch(o[0])}this.completions=!c&&this.showLoadingState?new f(t.completionsForLoading.concat(o),s.filterText):s,this.openPopup(this.editor,v,l),this.popup.renderer.setStyle("ace_loading",!c)}).bind(this)),this.showLoadingState&&!this.autoShown&&!(this.popup&&this.popup.isOpen)&&this.$firstOpenTimer.delay(this.stickySelectionDelay/2)},t.prototype.cancelContextMenu=function(){this.editor.$mouseHandler.cancelContextMenu()},t.prototype.updateDocTooltip=function(){var l=this.popup,d=this.completions.filtered,i=d&&(d[l.getHoveredRow()]||d[l.getRow()]),n=null;if(!i||!this.editor||!this.popup.isOpen)return this.hideDocTooltip();for(var e=this.editor.completers.length,r=0;r<e;r++){var a=this.editor.completers[r];if(a.getDocTooltip&&i.completerId===a.id){n=a.getDocTooltip(i);break}}if(!n&&typeof i!="string"&&(n=i),typeof n=="string"&&(n={docText:n}),!n||!(n.docHTML||n.docText))return this.hideDocTooltip();this.showDocTooltip(n)},t.prototype.showDocTooltip=function(l){this.tooltipNode||(this.tooltipNode=m.createElement("div"),this.tooltipNode.style.margin=0,this.tooltipNode.style.pointerEvents="auto",this.tooltipNode.tabIndex=-1,this.tooltipNode.onblur=this.blurListener.bind(this),this.tooltipNode.onclick=this.onTooltipClick.bind(this),this.tooltipNode.id="doc-tooltip",this.tooltipNode.setAttribute("role","tooltip"),this.tooltipNode.addEventListener("wheel",k.stopPropagation));var d=this.editor.renderer.theme;this.tooltipNode.className="ace_tooltip ace_doc-tooltip "+(d.isDark?"ace_dark ":"")+(d.cssClass||"");var i=this.tooltipNode;l.docHTML?i.innerHTML=l.docHTML:l.docText&&(i.textContent=l.docText),i.parentNode||this.popup.container.appendChild(this.tooltipNode);var n=this.popup,e=n.container.getBoundingClientRect();i.style.top=n.container.style.top,i.style.bottom=n.container.style.bottom,i.style.display="block",window.innerWidth-e.right<320?e.left<320?n.isTopdown?(i.style.top=e.bottom+"px",i.style.left=e.left+"px",i.style.right="",i.style.bottom=""):(i.style.top=n.container.offsetTop-i.offsetHeight+"px",i.style.left=e.left+"px",i.style.right="",i.style.bottom=""):(i.style.right=window.innerWidth-e.left+"px",i.style.left=""):(i.style.left=e.right+1+"px",i.style.right="")},t.prototype.hideDocTooltip=function(){if(this.tooltipTimer.cancel(),!!this.tooltipNode){var l=this.tooltipNode;!this.editor.isFocused()&&document.activeElement==l&&this.editor.focus(),this.tooltipNode=null,l.parentNode&&l.parentNode.removeChild(l)}},t.prototype.onTooltipClick=function(l){for(var d=l.target;d&&d!=this.tooltipNode;){if(d.nodeName=="A"&&d.href){d.rel="noreferrer",d.target="_blank";break}d=d.parentNode}},t.prototype.destroy=function(){if(this.detach(),this.popup){this.popup.destroy();var l=this.popup.container;l&&l.parentNode&&l.parentNode.removeChild(l)}this.editor&&this.editor.completer==this&&(this.editor.off("destroy",C),this.editor.completer=null),this.inlineRenderer=this.popup=this.editor=null},t}();p.prototype.commands={Up:function(t){t.completer.goTo("up")},Down:function(t){t.completer.goTo("down")},"Ctrl-Up|Ctrl-Home":function(t){t.completer.goTo("start")},"Ctrl-Down|Ctrl-End":function(t){t.completer.goTo("end")},Esc:function(t){t.completer.detach()},Return:function(t){return t.completer.insertMatch()},"Shift-Return":function(t){t.completer.insertMatch(null,{deleteSuffix:!0})},Tab:function(t){var l=t.completer.insertMatch();if(!l&&!t.tabstopManager)t.completer.goTo("down");else return l},PageUp:function(t){t.completer.popup.gotoPageUp()},PageDown:function(t){t.completer.popup.gotoPageDown()}},p.for=function(t){return t.completer instanceof p||(t.completer&&(t.completer.destroy(),t.completer=null),S.get("sharedPopups")?(p.$sharedInstance||(p.$sharedInstance=new p),t.completer=p.$sharedInstance):(t.completer=new p,t.once("destroy",C))),t.completer},p.startCommand={name:"startAutocomplete",exec:function(t,l){var d=p.for(t);d.autoInsert=!1,d.autoSelect=!0,d.autoShown=!1,d.showPopup(t,l),d.cancelContextMenu()},bindKey:"Ctrl-Space|Ctrl-Shift-Space|Alt-Space"};var b=function(){function t(l){this.initialPosition=l,this.active=!0}return t.prototype.insertByIndex=function(l,d,i){return!this.completions||!this.completions.filtered?!1:this.insertMatch(l,this.completions.filtered[d],i)},t.prototype.insertMatch=function(l,d,i){if(!d)return!1;if(l.startOperation({command:{name:"insertMatch"}}),d.completer&&d.completer.insertMatch)d.completer.insertMatch(l,d);else{if(!this.completions)return!1;var n=this.completions.filterText.length,e=0;if(d.range&&d.range.start.row===d.range.end.row&&(n-=this.initialPosition.prefix.length,n+=this.initialPosition.pos.column-d.range.start.column,e+=d.range.end.column-this.initialPosition.pos.column),n||e){var r;l.selection.getAllRanges?r=l.selection.getAllRanges():r=[l.getSelectionRange()];for(var a=0,s;s=r[a];a++)s.start.column-=n,s.end.column+=e,l.session.remove(s)}d.snippet?_.insertSnippet(l,d.snippet):this.$insertString(l,d),d.completer&&d.completer.onInsert&&typeof d.completer.onInsert=="function"&&d.completer.onInsert(l,d),d.command&&d.command==="startAutocomplete"&&l.execCommand(d.command)}return l.endOperation(),!0},t.prototype.$insertString=function(l,d){var i=d.value||d;l.execCommand("insertstring",i)},t.prototype.gatherCompletions=function(l,d){var i=l.getSession(),n=l.getCursorPosition(),e=u.getCompletionPrefix(l),r=[];this.completers=l.completers;var a=l.completers.length;return l.completers.forEach(function(s,c){s.getCompletions(l,i,n,e,function(o,v){s.hideInlinePreview&&(v=v.map(function(h){return Object.assign(h,{hideInlinePreview:s.hideInlinePreview})})),!o&&v&&(r=r.concat(v)),d(null,{prefix:u.getCompletionPrefix(l),matches:r,finished:--a===0})})}),!0},t.prototype.provideCompletions=function(l,d,i){var n=(function(s){var c=s.prefix,o=s.matches;this.completions=new f(o),d.exactMatch&&(this.completions.exactMatch=!0),d.ignoreCaption&&(this.completions.ignoreCaption=!0),this.completions.setFilter(c),(s.finished||this.completions.filtered.length)&&i(null,this.completions,s.finished)}).bind(this),e=!0,r=null;if(this.gatherCompletions(l,(function(s,c){if(this.active){s&&(i(s,[],!0),this.detach());var o=c.prefix;if(o.indexOf(c.prefix)===0){if(e){r=c;return}n(c)}}}).bind(this)),e=!1,r){var a=r;r=null,n(a)}},t.prototype.detach=function(){this.active=!1,this.completers&&this.completers.forEach(function(l){typeof l.cancel=="function"&&l.cancel()})},t}(),f=function(){function t(l,d){this.all=l,this.filtered=l,this.filterText=d||"",this.exactMatch=!1,this.ignoreCaption=!1}return t.prototype.setFilter=function(l){if(l.length>this.filterText&&l.lastIndexOf(this.filterText,0)===0)var d=this.filtered;else var d=this.all;this.filterText=l,d=this.filterCompletions(d,this.filterText),d=d.sort(function(n,e){return e.exactMatch-n.exactMatch||e.$score-n.$score||(n.caption||n.value).localeCompare(e.caption||e.value)});var i=null;d=d.filter(function(n){var e=n.snippet||n.caption||n.value;return e===i?!1:(i=e,!0)}),this.filtered=d},t.prototype.filterCompletions=function(l,d){var i=[],n=d.toUpperCase(),e=d.toLowerCase();e:for(var r=0,a;a=l[r];r++){var s=!this.ignoreCaption&&a.caption||a.value||a.snippet;if(s){var c=-1,o=0,v=0,h,M;if(this.exactMatch){if(d!==s.substr(0,d.length))continue e}else{var A=s.toLowerCase().indexOf(e);if(A>-1)v=A;else for(var E=0;E<d.length;E++){var O=s.indexOf(e[E],c+1),L=s.indexOf(n[E],c+1);if(h=O>=0&&(L<0||O<L)?O:L,h<0)continue e;M=h-c-1,M>0&&(c===-1&&(v+=10),v+=M,o=o|1<<E),c=h}}a.matchMask=o,a.exactMatch=v?0:1,a.$score=(a.score||0)-v,i.push(a)}}return i},t}();y.Autocomplete=p,y.CompletionProvider=b,y.FilteredList=f}),ace.define("ace/autocomplete/text_completer",["require","exports","module","ace/range"],function(g,y,I){var R=g("../range").Range,T=/[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;function w(u,x){var m=u.getTextRange(R.fromPoints({row:0,column:0},x));return m.split(T).length-1}function $(u,x){var m=w(u,x),_=u.getValue().split(T),S=Object.create(null),k=_[m];return _.forEach(function(C,p){if(!(!C||C===k)){var b=Math.abs(m-p),f=_.length-b;S[C]?S[C]=Math.max(f,S[C]):S[C]=f}}),S}y.getCompletions=function(u,x,m,_,S){var k=$(x,m),C=Object.keys(k);S(null,C.map(function(p){return{caption:p,value:p,score:k[p],meta:"local"}}))}}),ace.define("ace/ext/language_tools",["require","exports","module","ace/snippets","ace/autocomplete","ace/config","ace/lib/lang","ace/autocomplete/util","ace/autocomplete/text_completer","ace/editor","ace/config"],function(g,y,I){var R=g("../snippets").snippetManager,T=g("../autocomplete").Autocomplete,w=g("../config"),$=g("../lib/lang"),u=g("../autocomplete/util"),x=g("../autocomplete/text_completer"),m={getCompletions:function(e,r,a,s,c){if(r.$mode.completer)return r.$mode.completer.getCompletions(e,r,a,s,c);var o=e.session.getState(a.row),v=r.$mode.getCompletions(o,r,a,s);v=v.map(function(h){return h.completerId=m.id,h}),c(null,v)},id:"keywordCompleter"},_=function(e){var r={};return e.replace(/\${(\d+)(:(.*?))?}/g,function(a,s,c,o){return r[s]=o||""}).replace(/\$(\d+?)/g,function(a,s){return r[s]})},S={getCompletions:function(e,r,a,s,c){var o=[],v=r.getTokenAt(a.row,a.column);v&&v.type.match(/(tag-name|tag-open|tag-whitespace|attribute-name|attribute-value)\.xml$/)?o.push("html-tag"):o=R.getActiveScopes(e);var h=R.snippetMap,M=[];o.forEach(function(A){for(var E=h[A]||[],O=E.length;O--;){var L=E[O],B=L.name||L.tabTrigger;B&&M.push({caption:B,snippet:L.content,meta:L.tabTrigger&&!L.name?L.tabTrigger+"⇥ ":"snippet",completerId:S.id})}},this),c(null,M)},getDocTooltip:function(e){e.snippet&&!e.docHTML&&(e.docHTML=["<b>",$.escapeHTML(e.caption),"</b>","<hr></hr>",$.escapeHTML(_(e.snippet))].join(""))},id:"snippetCompleter"},k=[S,x,m];y.setCompleters=function(e){k.length=0,e&&k.push.apply(k,e)},y.addCompleter=function(e){k.push(e)},y.textCompleter=x,y.keyWordCompleter=m,y.snippetCompleter=S;var C={name:"expandSnippet",exec:function(e){return R.expandWithTab(e)},bindKey:"Tab"},p=function(e,r){b(r.session.$mode)},b=function(e){typeof e=="string"&&(e=w.$modes[e]),e&&(R.files||(R.files={}),f(e.$id,e.snippetFileId),e.modes&&e.modes.forEach(b))},f=function(e,r){!r||!e||R.files[e]||(R.files[e]={},w.loadModule(r,function(a){a&&(R.files[e]=a,!a.snippets&&a.snippetText&&(a.snippets=R.parseSnippetFile(a.snippetText)),R.register(a.snippets||[],a.scope),a.includeScopes&&(R.snippetMap[a.scope].includeScopes=a.includeScopes,a.includeScopes.forEach(function(s){b("ace/mode/"+s)})))}))},t=function(e){var r=e.editor,a=r.completer&&r.completer.activated;if(e.command.name==="backspace")a&&!u.getCompletionPrefix(r)&&r.completer.detach();else if(e.command.name==="insertstring"&&!a){l=e;var s=e.editor.$liveAutocompletionDelay;s?d.delay(s):i(e)}},l,d=$.delayedCall(function(){i(l)},0),i=function(e){var r=e.editor,a=u.getCompletionPrefix(r),s=u.triggerAutocomplete(r);if(a&&a.length>=r.$liveAutocompletionThreshold||s){var c=T.for(r);c.autoShown=!0,c.showPopup(r)}},n=g("../editor").Editor;g("../config").defineOptions(n.prototype,"editor",{enableBasicAutocompletion:{set:function(e){e?(this.completers||(this.completers=Array.isArray(e)?e:k),this.commands.addCommand(T.startCommand)):this.commands.removeCommand(T.startCommand)},value:!1},enableLiveAutocompletion:{set:function(e){e?(this.completers||(this.completers=Array.isArray(e)?e:k),this.commands.on("afterExec",t)):this.commands.off("afterExec",t)},value:!1},liveAutocompletionDelay:{initialValue:0},liveAutocompletionThreshold:{initialValue:0},enableSnippets:{set:function(e){e?(this.commands.addCommand(C),this.on("changeMode",p),p(null,this)):(this.commands.removeCommand(C),this.off("changeMode",p))},value:!1}})}),function(){ace.require(["ace/ext/language_tools"],function(g){N&&(N.exports=g)})}()})(te);var ne={exports:{}};(function(N,j){ace.define("ace/ext/beautify",["require","exports","module","ace/token_iterator"],function(g,y,I){var R=g("../token_iterator").TokenIterator;function T(w,$){return w.type.lastIndexOf($+".xml")>-1}y.singletonTags=["area","base","br","col","command","embed","hr","html","img","input","keygen","link","meta","param","source","track","wbr"],y.blockTags=["article","aside","blockquote","body","div","dl","fieldset","footer","form","head","header","html","nav","ol","p","script","section","style","table","tbody","tfoot","thead","ul"],y.formatOptions={lineBreaksAfterCommasInCurlyBlock:!0},y.beautify=function(w){for(var $=new R(w,0,0),u=$.getCurrentToken(),x=w.getTabString(),m=y.singletonTags,_=y.blockTags,S=y.formatOptions||{},k,C=!1,p=!1,b=!1,f="",t="",l="",d=0,i=0,n=0,e=0,r=0,a=0,s=0,c,o=0,v=0,h,M=!1,A=!1,E=!1,O=!1,L={0:0},B=[],F=!1,H=function(){k&&k.value&&k.type!=="string.regexp"&&(k.value=k.value.replace(/^\s*/,""))},D=function(){for(var z=f.length-1;!(z==0||f[z]!==" ");)z=z-1;f=f.slice(0,z+1)},W=function(){f=f.trimRight(),C=!1};u!==null;){if(o=$.getCurrentTokenRow(),$.$rowTokens,k=$.stepForward(),typeof u<"u"){if(t=u.value,r=0,E=l==="style"||w.$modeId==="ace/mode/css",T(u,"tag-open")?(A=!0,k&&(O=_.indexOf(k.value)!==-1),t==="</"&&(O&&!C&&v<1&&v++,E&&(v=1),r=1,O=!1)):T(u,"tag-close")?A=!1:T(u,"comment.start")?O=!0:T(u,"comment.end")&&(O=!1),!A&&!v&&u.type==="paren.rparen"&&u.value.substr(0,1)==="}"&&v++,o!==c&&(v=o,c&&(v-=c)),v){for(W();v>0;v--)f+=`
`;C=!0,!T(u,"comment")&&!u.type.match(/^(comment|string)$/)&&(t=t.trimLeft())}if(t){if(u.type==="keyword"&&t.match(/^(if|else|elseif|for|foreach|while|switch)$/)?(B[d]=t,H(),b=!0,t.match(/^(else|elseif)$/)&&f.match(/\}[\s]*$/)&&(W(),p=!0)):u.type==="paren.lparen"?(H(),t.substr(-1)==="{"&&(b=!0,M=!1,A||(v=1)),t.substr(0,1)==="{"&&(p=!0,f.substr(-1)!=="["&&f.trimRight().substr(-1)==="["?(W(),p=!1):f.trimRight().substr(-1)===")"?W():D())):u.type==="paren.rparen"?(r=1,t.substr(0,1)==="}"&&(B[d-1]==="case"&&r++,f.trimRight().substr(-1)==="{"?W():(p=!0,E&&(v+=2))),t.substr(0,1)==="]"&&f.substr(-1)!=="}"&&f.trimRight().substr(-1)==="}"&&(p=!1,e++,W()),t.substr(0,1)===")"&&f.substr(-1)!=="("&&f.trimRight().substr(-1)==="("&&(p=!1,e++,W()),D()):(u.type==="keyword.operator"||u.type==="keyword")&&t.match(/^(=|==|===|!=|!==|&&|\|\||and|or|xor|\+=|.=|>|>=|<|<=|=>)$/)?(W(),H(),p=!0,b=!0):u.type==="punctuation.operator"&&t===";"?(W(),H(),b=!0,E&&v++):u.type==="punctuation.operator"&&t.match(/^(:|,)$/)?(W(),H(),t.match(/^(,)$/)&&s>0&&a===0&&S.lineBreaksAfterCommasInCurlyBlock?v++:(b=!0,C=!1)):u.type==="support.php_tag"&&t==="?>"&&!C?(W(),p=!0):T(u,"attribute-name")&&f.substr(-1).match(/^\s$/)?p=!0:T(u,"attribute-equals")?(D(),H()):T(u,"tag-close")?(D(),t==="/>"&&(p=!0)):u.type==="keyword"&&t.match(/^(case|default)$/)&&F&&(r=1),C&&!(u.type.match(/^(comment)$/)&&!t.substr(0,1).match(/^[/#]$/))&&!(u.type.match(/^(string)$/)&&!t.substr(0,1).match(/^['"@]$/))){if(e=n,d>i)for(e++,h=d;h>i;h--)L[h]=e;else d<i&&(e=L[d]);for(i=d,n=e,r&&(e-=r),M&&!a&&(e++,M=!1),h=0;h<e;h++)f+=x}if(u.type==="keyword"&&t.match(/^(case|default)$/)?F===!1&&(B[d]=t,d++,F=!0):u.type==="keyword"&&t.match(/^(break)$/)&&B[d-1]&&B[d-1].match(/^(case|default)$/)&&(d--,F=!1),u.type==="paren.lparen"&&(a+=(t.match(/\(/g)||[]).length,s+=(t.match(/\{/g)||[]).length,d+=t.length),u.type==="keyword"&&t.match(/^(if|else|elseif|for|while)$/)?(M=!0,a=0):!a&&t.trim()&&u.type!=="comment"&&(M=!1),u.type==="paren.rparen")for(a-=(t.match(/\)/g)||[]).length,s-=(t.match(/\}/g)||[]).length,h=0;h<t.length;h++)d--,t.substr(h,1)==="}"&&B[d]==="case"&&d--;u.type=="text"&&(t=t.replace(/\s+$/," ")),p&&!C&&(D(),f.substr(-1)!==`
`&&(f+=" ")),f+=t,b&&(f+=" "),C=!1,p=!1,b=!1,(T(u,"tag-close")&&(O||_.indexOf(l)!==-1)||T(u,"doctype")&&t===">")&&(O&&k&&k.value==="</"?v=-1:v=1),k&&m.indexOf(k.value)===-1&&(T(u,"tag-open")&&t==="</"?d--:T(u,"tag-open")&&t==="<"?d++:T(u,"tag-close")&&t==="/>"&&d--),T(u,"tag-name")&&(l=t),c=o}}u=k}f=f.trim(),w.doc.setValue(f)},y.commands=[{name:"beautify",description:"Format selection (Beautify)",exec:function(w){y.beautify(w.session)},bindKey:"Ctrl-Shift-B"}]}),function(){ace.require(["ace/ext/beautify"],function(g){N&&(N.exports=g)})}()})(ne);
