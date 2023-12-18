var Y={exports:{}};(function(H,j){ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(f,y,N){var M=f("../lib/oop");f("../lib/lang");var R=f("./text_highlight_rules").TextHighlightRules,w=y.supportType="align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index",k=y.supportFunction="rgb|rgba|url|attr|counter|counters",l=y.supportConstant="absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|flex-end|flex-start|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom",b=y.supportConstantColor="aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen",m=y.supportConstantFonts="arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace",S=y.numRe="\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))",T=y.pseudoElements="(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b",$=y.pseudoClasses="(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b",C=function(){var a=this.createKeywordMapper({"support.function":k,"support.constant":l,"support.type":w,"support.constant.color":b,"support.constant.fonts":m},"text",!0);this.$rules={start:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"ruleset"},{token:"paren.rparen",regex:"\\}"},{token:"string",regex:"@(?!viewport)",next:"media"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"keyword",regex:"%"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant.numeric",regex:S},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:!0}],media:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"start"},{token:"paren.rparen",regex:"\\}",next:"start"},{token:"string",regex:";",next:"start"},{token:"keyword",regex:"(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"}],comments:[{token:"comment",regex:"\\/\\*",push:[{token:"comment",regex:"\\*\\/",next:"pop"},{defaultToken:"comment"}]}],ruleset:[{regex:"-(webkit|ms|moz|o)-",token:"text"},{token:"punctuation.operator",regex:"[:;]"},{token:"paren.rparen",regex:"\\}",next:"start"},{include:["strings","url","comments"]},{token:["constant.numeric","keyword"],regex:"("+S+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"},{token:"constant.numeric",regex:S},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:["punctuation","entity.other.attribute-name.pseudo-element.css"],regex:T},{token:["punctuation","entity.other.attribute-name.pseudo-class.css"],regex:$},{include:"url"},{token:a,regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"},{caseInsensitive:!0}],url:[{token:"support.function",regex:"(?:url(:?-prefix)?|domain|regexp)\\(",push:[{token:"support.function",regex:"\\)",next:"pop"},{defaultToken:"string"}]}],strings:[{token:"string.start",regex:"'",push:[{token:"string.end",regex:"'|$",next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]},{token:"string.start",regex:'"',push:[{token:"string.end",regex:'"|$',next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]}],escapes:[{token:"constant.language.escape",regex:/\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/}]},this.normalizeRules()};M.inherits(C,R),y.CssHighlightRules=C}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(f,y,N){var M=f("../range").Range,R=function(){};(function(){this.checkOutdent=function(w,k){return/^\s+$/.test(w)?/^\s*\}/.test(k):!1},this.autoOutdent=function(w,k){var l=w.getLine(k),b=l.match(/^(\s*\})/);if(!b)return 0;var m=b[1].length,S=w.findMatchingBracket({row:k,column:m});if(!S||S.row==k)return 0;var T=this.$getIndent(w.getLine(S.row));w.replace(new M(k,0,k,m-1),T)},this.$getIndent=function(w){return w.match(/^\s*/)[0]}}).call(R.prototype),y.MatchingBraceOutdent=R}),ace.define("ace/mode/css_completions",["require","exports","module"],function(f,y,N){var M={background:{"#$0":1},"background-color":{"#$0":1,transparent:1,fixed:1},"background-image":{"url('/$0')":1},"background-repeat":{repeat:1,"repeat-x":1,"repeat-y":1,"no-repeat":1,inherit:1},"background-position":{bottom:2,center:2,left:2,right:2,top:2,inherit:2},"background-attachment":{scroll:1,fixed:1},"background-size":{cover:1,contain:1},"background-clip":{"border-box":1,"padding-box":1,"content-box":1},"background-origin":{"border-box":1,"padding-box":1,"content-box":1},border:{"solid $0":1,"dashed $0":1,"dotted $0":1,"#$0":1},"border-color":{"#$0":1},"border-style":{solid:2,dashed:2,dotted:2,double:2,groove:2,hidden:2,inherit:2,inset:2,none:2,outset:2,ridged:2},"border-collapse":{collapse:1,separate:1},bottom:{px:1,em:1,"%":1},clear:{left:1,right:1,both:1,none:1},color:{"#$0":1,"rgb(#$00,0,0)":1},cursor:{default:1,pointer:1,move:1,text:1,wait:1,help:1,progress:1,"n-resize":1,"ne-resize":1,"e-resize":1,"se-resize":1,"s-resize":1,"sw-resize":1,"w-resize":1,"nw-resize":1},display:{none:1,block:1,inline:1,"inline-block":1,"table-cell":1},"empty-cells":{show:1,hide:1},float:{left:1,right:1,none:1},"font-family":{Arial:2,"Comic Sans MS":2,Consolas:2,"Courier New":2,Courier:2,Georgia:2,Monospace:2,"Sans-Serif":2,"Segoe UI":2,Tahoma:2,"Times New Roman":2,"Trebuchet MS":2,Verdana:1},"font-size":{px:1,em:1,"%":1},"font-weight":{bold:1,normal:1},"font-style":{italic:1,normal:1},"font-variant":{normal:1,"small-caps":1},height:{px:1,em:1,"%":1},left:{px:1,em:1,"%":1},"letter-spacing":{normal:1},"line-height":{normal:1},"list-style-type":{none:1,disc:1,circle:1,square:1,decimal:1,"decimal-leading-zero":1,"lower-roman":1,"upper-roman":1,"lower-greek":1,"lower-latin":1,"upper-latin":1,georgian:1,"lower-alpha":1,"upper-alpha":1},margin:{px:1,em:1,"%":1},"margin-right":{px:1,em:1,"%":1},"margin-left":{px:1,em:1,"%":1},"margin-top":{px:1,em:1,"%":1},"margin-bottom":{px:1,em:1,"%":1},"max-height":{px:1,em:1,"%":1},"max-width":{px:1,em:1,"%":1},"min-height":{px:1,em:1,"%":1},"min-width":{px:1,em:1,"%":1},overflow:{hidden:1,visible:1,auto:1,scroll:1},"overflow-x":{hidden:1,visible:1,auto:1,scroll:1},"overflow-y":{hidden:1,visible:1,auto:1,scroll:1},padding:{px:1,em:1,"%":1},"padding-top":{px:1,em:1,"%":1},"padding-right":{px:1,em:1,"%":1},"padding-bottom":{px:1,em:1,"%":1},"padding-left":{px:1,em:1,"%":1},"page-break-after":{auto:1,always:1,avoid:1,left:1,right:1},"page-break-before":{auto:1,always:1,avoid:1,left:1,right:1},position:{absolute:1,relative:1,fixed:1,static:1},right:{px:1,em:1,"%":1},"table-layout":{fixed:1,auto:1},"text-decoration":{none:1,underline:1,"line-through":1,blink:1},"text-align":{left:1,right:1,center:1,justify:1},"text-transform":{capitalize:1,uppercase:1,lowercase:1,none:1},top:{px:1,em:1,"%":1},"vertical-align":{top:1,bottom:1},visibility:{hidden:1,visible:1},"white-space":{nowrap:1,normal:1,pre:1,"pre-line":1,"pre-wrap":1},width:{px:1,em:1,"%":1},"word-spacing":{normal:1},filter:{"alpha(opacity=$0100)":1},"text-shadow":{"$02px 2px 2px #777":1},"text-overflow":{"ellipsis-word":1,clip:1,ellipsis:1},"-moz-border-radius":1,"-moz-border-radius-topright":1,"-moz-border-radius-bottomright":1,"-moz-border-radius-topleft":1,"-moz-border-radius-bottomleft":1,"-webkit-border-radius":1,"-webkit-border-top-right-radius":1,"-webkit-border-top-left-radius":1,"-webkit-border-bottom-right-radius":1,"-webkit-border-bottom-left-radius":1,"-moz-box-shadow":1,"-webkit-box-shadow":1,transform:{"rotate($00deg)":1,"skew($00deg)":1},"-moz-transform":{"rotate($00deg)":1,"skew($00deg)":1},"-webkit-transform":{"rotate($00deg)":1,"skew($00deg)":1}},R=function(){};(function(){this.completionsDefined=!1,this.defineCompletions=function(){if(document){var w=document.createElement("c").style;for(var k in w)if(typeof w[k]=="string"){var l=k.replace(/[A-Z]/g,function(b){return"-"+b.toLowerCase()});M.hasOwnProperty(l)||(M[l]=1)}}this.completionsDefined=!0},this.getCompletions=function(w,k,l,b){if(this.completionsDefined||this.defineCompletions(),w==="ruleset"||k.$mode.$id=="ace/mode/scss"){var m=k.getLine(l.row).substr(0,l.column),S=/\([^)]*$/.test(m);return S&&(m=m.substr(m.lastIndexOf("(")+1)),/:[^;]+$/.test(m)?this.getPropertyValueCompletions(w,k,l,b):this.getPropertyCompletions(w,k,l,b,S)}return[]},this.getPropertyCompletions=function(w,k,l,b,m){m=m||!1;var S=Object.keys(M);return S.map(function(T){return{caption:T,snippet:T+": $0"+(m?"":";"),meta:"property",score:1e6}})},this.getPropertyValueCompletions=function(w,k,l,b){var m=k.getLine(l.row).substr(0,l.column),S=(/([\w\-]+):[^:]*$/.exec(m)||{})[1];if(!S)return[];var T=[];return S in M&&typeof M[S]=="object"&&(T=Object.keys(M[S])),T.map(function($){return{caption:$,snippet:$,meta:"property value",score:1e6}})}}).call(R.prototype),y.CssCompletions=R}),ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"],function(f,y,N){var M=f("../../lib/oop");f("../behaviour").Behaviour;var R=f("./cstyle").CstyleBehaviour,w=f("../../token_iterator").TokenIterator,k=function(){this.inherit(R),this.add("colon","insertion",function(l,b,m,S,T){if(T===":"&&m.selection.isEmpty()){var $=m.getCursorPosition(),C=new w(S,$.row,$.column),a=C.getCurrentToken();if(a&&a.value.match(/\s+/)&&(a=C.stepBackward()),a&&a.type==="support.type"){var g=S.doc.getLine($.row),v=g.substring($.column,$.column+1);if(v===":")return{text:"",selection:[1,1]};if(/^(\s+[^;]|\s*$)/.test(g.substring($.column)))return{text:":;",selection:[1,1]}}}}),this.add("colon","deletion",function(l,b,m,S,T){var $=S.doc.getTextRange(T);if(!T.isMultiLine()&&$===":"){var C=m.getCursorPosition(),a=new w(S,C.row,C.column),g=a.getCurrentToken();if(g&&g.value.match(/\s+/)&&(g=a.stepBackward()),g&&g.type==="support.type"){var v=S.doc.getLine(T.start.row),_=v.substring(T.end.column,T.end.column+1);if(_===";")return T.end.column++,T}}}),this.add("semicolon","insertion",function(l,b,m,S,T){if(T===";"&&m.selection.isEmpty()){var $=m.getCursorPosition(),C=S.doc.getLine($.row),a=C.substring($.column,$.column+1);if(a===";")return{text:"",selection:[1,1]}}}),this.add("!important","insertion",function(l,b,m,S,T){if(T==="!"&&m.selection.isEmpty()){var $=m.getCursorPosition(),C=S.doc.getLine($.row);if(/^\s*(;|}|$)/.test(C.substring($.column)))return{text:"!important",selection:[10,10]}}})};M.inherits(k,R),y.CssBehaviour=k}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(f,y,N){var M=f("../../lib/oop"),R=f("../../range").Range,w=f("./fold_mode").FoldMode,k=y.FoldMode=function(l){l&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+l.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+l.end)))};M.inherits(k,w),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(l,b,m){var S=l.getLine(m);if(this.singleLineBlockCommentRe.test(S)&&!this.startRegionRe.test(S)&&!this.tripleStarBlockCommentRe.test(S))return"";var T=this._getFoldWidgetBase(l,b,m);return!T&&this.startRegionRe.test(S)?"start":T},this.getFoldWidgetRange=function(l,b,m,S){var T=l.getLine(m);if(this.startRegionRe.test(T))return this.getCommentRegionBlock(l,T,m);var a=T.match(this.foldingStartMarker);if(a){var $=a.index;if(a[1])return this.openingBracketBlock(l,a[1],m,$);var C=l.getCommentFoldRange(m,$+a[0].length,1);return C&&!C.isMultiLine()&&(S?C=this.getSectionRange(l,m):b!="all"&&(C=null)),C}if(b!=="markbegin"){var a=T.match(this.foldingStopMarker);if(a){var $=a.index+a[0].length;return a[1]?this.closingBracketBlock(l,a[1],m,$):l.getCommentFoldRange(m,$,-1)}}},this.getSectionRange=function(l,b){var m=l.getLine(b),S=m.search(/\S/),T=b,$=m.length;b=b+1;for(var C=b,a=l.getLength();++b<a;){m=l.getLine(b);var g=m.search(/\S/);if(g!==-1){if(S>g)break;var v=this.getFoldWidgetRange(l,"all",b);if(v){if(v.start.row<=T)break;if(v.isMultiLine())b=v.end.row;else if(S==g)break}C=b}}return new R(T,$,C,l.getLine(C).length)},this.getCommentRegionBlock=function(l,b,m){for(var S=b.search(/\s*$/),T=l.getLength(),$=m,C=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;++m<T;){b=l.getLine(m);var g=C.exec(b);if(g&&(g[1]?a--:a++,!a))break}var v=m;if(v>$)return new R($,S,v,b.length)}}).call(k.prototype)}),ace.define("ace/mode/css",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/css_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/css_completions","ace/mode/behaviour/css","ace/mode/folding/cstyle"],function(f,y,N){var M=f("../lib/oop"),R=f("./text").Mode,w=f("./css_highlight_rules").CssHighlightRules,k=f("./matching_brace_outdent").MatchingBraceOutdent,l=f("../worker/worker_client").WorkerClient,b=f("./css_completions").CssCompletions,m=f("./behaviour/css").CssBehaviour,S=f("./folding/cstyle").FoldMode,T=function(){this.HighlightRules=w,this.$outdent=new k,this.$behaviour=new m,this.$completer=new b,this.foldingRules=new S};M.inherits(T,R),(function(){this.foldingRules="cStyle",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function($,C,a){var g=this.$getIndent(C),v=this.getTokenizer().getLineTokens(C,$).tokens;if(v.length&&v[v.length-1].type=="comment")return g;var _=C.match(/^.*\{\s*$/);return _&&(g+=a),g},this.checkOutdent=function($,C,a){return this.$outdent.checkOutdent(C,a)},this.autoOutdent=function($,C,a){this.$outdent.autoOutdent(C,a)},this.getCompletions=function($,C,a,g){return this.$completer.getCompletions($,C,a,g)},this.createWorker=function($){var C=new l(["ace"],"ace/mode/css_worker","Worker");return C.attachToDocument($.getDocument()),C.on("annotate",function(a){$.setAnnotations(a.data)}),C.on("terminate",function(){$.clearAnnotations()}),C},this.$id="ace/mode/css",this.snippetFileId="ace/snippets/css"}).call(T.prototype),y.Mode=T}),function(){ace.require(["ace/mode/css"],function(f){H&&(H.exports=f)})}()})(Y);var Z={exports:{}};(function(H,j){ace.define("ace/theme/textmate",["require","exports","module","ace/theme/textmate-css","ace/lib/dom"],function(f,y,N){y.isDark=!1,y.cssClass="ace-tm",y.cssText=f("./textmate-css"),y.$id="ace/theme/textmate";var M=f("../lib/dom");M.importCssString(y.cssText,y.cssClass,!1)}),function(){ace.require(["ace/theme/textmate"],function(f){H&&(H.exports=f)})}()})(Z);var Q={exports:{}};(function(H,j){ace.define("ace/theme/twilight-css",["require","exports","module"],function(f,y,N){N.exports=`.ace-twilight .ace_gutter {
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
`}),ace.define("ace/theme/twilight",["require","exports","module","ace/theme/twilight-css","ace/lib/dom"],function(f,y,N){y.isDark=!0,y.cssClass="ace-twilight",y.cssText=f("./twilight-css");var M=f("../lib/dom");M.importCssString(y.cssText,y.cssClass,!1)}),function(){ace.require(["ace/theme/twilight"],function(f){H&&(H.exports=f)})}()})(Q);var J={exports:{}};(function(H,j){ace.define("ace/snippets/css.snippets",["require","exports","module"],function(f,y,N){N.exports=`snippet .
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
`}),ace.define("ace/snippets/css",["require","exports","module","ace/snippets/css.snippets"],function(f,y,N){y.snippetText=f("./css.snippets"),y.scope="css"}),function(){ace.require(["ace/snippets/css"],function(f){H&&(H.exports=f)})}()})(J);var ee={exports:{}};(function(H,j){ace.define("ace/ext/searchbox-css",["require","exports","module"],function(f,y,N){N.exports=`

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
}`}),ace.define("ace/ext/searchbox",["require","exports","module","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/ext/searchbox-css","ace/keyboard/hash_handler","ace/lib/keys","ace/config"],function(f,y,N){var M=f("../lib/dom"),R=f("../lib/lang"),w=f("../lib/event"),k=f("./searchbox-css"),l=f("../keyboard/hash_handler").HashHandler,b=f("../lib/keys"),m=f("../config").nls,S=999;M.importCssString(k,"ace_searchbox",!1);var T=function(){function a(g,v,_){this.activeInput;var u=M.createElement("div");M.buildDom(["div",{class:"ace_search right"},["span",{action:"hide",class:"ace_searchbtn_close"}],["div",{class:"ace_search_form"},["input",{class:"ace_search_field",placeholder:m("Search for"),spellcheck:"false"}],["span",{action:"findPrev",class:"ace_searchbtn prev"},"​"],["span",{action:"findNext",class:"ace_searchbtn next"},"​"],["span",{action:"findAll",class:"ace_searchbtn",title:"Alt-Enter"},m("All")]],["div",{class:"ace_replace_form"},["input",{class:"ace_search_field",placeholder:m("Replace with"),spellcheck:"false"}],["span",{action:"replaceAndFindNext",class:"ace_searchbtn"},m("Replace")],["span",{action:"replaceAll",class:"ace_searchbtn"},m("All")]],["div",{class:"ace_search_options"},["span",{action:"toggleReplace",class:"ace_button",title:m("Toggle Replace mode"),style:"float:left;margin-top:-2px;padding:0 5px;"},"+"],["span",{class:"ace_search_counter"}],["span",{action:"toggleRegexpMode",class:"ace_button",title:m("RegExp Search")},".*"],["span",{action:"toggleCaseSensitive",class:"ace_button",title:m("CaseSensitive Search")},"Aa"],["span",{action:"toggleWholeWords",class:"ace_button",title:m("Whole Word Search")},"\\b"],["span",{action:"searchInSelection",class:"ace_button",title:m("Search In Selection")},"S"]]],u),this.element=u.firstChild,this.setSession=this.setSession.bind(this),this.$init(),this.setEditor(g),M.importCssString(k,"ace_searchbox",g.container)}return a.prototype.setEditor=function(g){g.searchBox=this,g.renderer.scroller.appendChild(this.element),this.editor=g},a.prototype.setSession=function(g){this.searchRange=null,this.$syncOptions(!0)},a.prototype.$initElements=function(g){this.searchBox=g.querySelector(".ace_search_form"),this.replaceBox=g.querySelector(".ace_replace_form"),this.searchOption=g.querySelector("[action=searchInSelection]"),this.replaceOption=g.querySelector("[action=toggleReplace]"),this.regExpOption=g.querySelector("[action=toggleRegexpMode]"),this.caseSensitiveOption=g.querySelector("[action=toggleCaseSensitive]"),this.wholeWordOption=g.querySelector("[action=toggleWholeWords]"),this.searchInput=this.searchBox.querySelector(".ace_search_field"),this.replaceInput=this.replaceBox.querySelector(".ace_search_field"),this.searchCounter=g.querySelector(".ace_search_counter")},a.prototype.$init=function(){var g=this.element;this.$initElements(g);var v=this;w.addListener(g,"mousedown",function(_){setTimeout(function(){v.activeInput.focus()},0),w.stopPropagation(_)}),w.addListener(g,"click",function(_){var u=_.target||_.srcElement,o=u.getAttribute("action");o&&v[o]?v[o]():v.$searchBarKb.commands[o]&&v.$searchBarKb.commands[o].exec(v),w.stopPropagation(_)}),w.addCommandKeyListener(g,function(_,u,o){var e=b.keyCodeToString(o),n=v.$searchBarKb.findKeyCommand(u,e);n&&n.exec&&(n.exec(v),w.stopEvent(_))}),this.$onChange=R.delayedCall(function(){v.find(!1,!1)}),w.addListener(this.searchInput,"input",function(){v.$onChange.schedule(20)}),w.addListener(this.searchInput,"focus",function(){v.activeInput=v.searchInput,v.searchInput.value&&v.highlight()}),w.addListener(this.replaceInput,"focus",function(){v.activeInput=v.replaceInput,v.searchInput.value&&v.highlight()})},a.prototype.setSearchRange=function(g){this.searchRange=g,g?this.searchRangeMarker=this.editor.session.addMarker(g,"ace_active-line"):this.searchRangeMarker&&(this.editor.session.removeMarker(this.searchRangeMarker),this.searchRangeMarker=null)},a.prototype.$syncOptions=function(g){M.setCssClass(this.replaceOption,"checked",this.searchRange),M.setCssClass(this.searchOption,"checked",this.searchOption.checked),this.replaceOption.textContent=this.replaceOption.checked?"-":"+",M.setCssClass(this.regExpOption,"checked",this.regExpOption.checked),M.setCssClass(this.wholeWordOption,"checked",this.wholeWordOption.checked),M.setCssClass(this.caseSensitiveOption,"checked",this.caseSensitiveOption.checked);var v=this.editor.getReadOnly();this.replaceOption.style.display=v?"none":"",this.replaceBox.style.display=this.replaceOption.checked&&!v?"":"none",this.find(!1,!1,g)},a.prototype.highlight=function(g){this.editor.session.highlight(g||this.editor.$search.$options.re),this.editor.renderer.updateBackMarkers()},a.prototype.find=function(g,v,_){var u=this.editor.find(this.searchInput.value,{skipCurrent:g,backwards:v,wrap:!0,regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked,preventScroll:_,range:this.searchRange}),o=!u&&this.searchInput.value;M.setCssClass(this.searchBox,"ace_nomatch",o),this.editor._emit("findSearchBox",{match:!o}),this.highlight(),this.updateCounter()},a.prototype.updateCounter=function(){var g=this.editor,v=g.$search.$options.re,_=v.unicode,u=0,o=0;if(v){var e=this.searchRange?g.session.getTextRange(this.searchRange):g.getValue(),n=g.session.doc.positionToIndex(g.selection.anchor);this.searchRange&&(n-=g.session.doc.positionToIndex(this.searchRange.start));for(var t=v.lastIndex=0,i;(i=v.exec(e))&&(u++,t=i.index,t<=n&&o++,!(u>S||!i[0]&&(v.lastIndex=t+=R.skipEmptyMatch(e,t,_),t>=e.length))););}this.searchCounter.textContent=m("$0 of $1",[o,u>S?S+"+":u])},a.prototype.findNext=function(){this.find(!0,!1)},a.prototype.findPrev=function(){this.find(!0,!0)},a.prototype.findAll=function(){var g=this.editor.findAll(this.searchInput.value,{regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked}),v=!g&&this.searchInput.value;M.setCssClass(this.searchBox,"ace_nomatch",v),this.editor._emit("findSearchBox",{match:!v}),this.highlight(),this.hide()},a.prototype.replace=function(){this.editor.getReadOnly()||this.editor.replace(this.replaceInput.value)},a.prototype.replaceAndFindNext=function(){this.editor.getReadOnly()||(this.editor.replace(this.replaceInput.value),this.findNext())},a.prototype.replaceAll=function(){this.editor.getReadOnly()||this.editor.replaceAll(this.replaceInput.value)},a.prototype.hide=function(){this.active=!1,this.setSearchRange(null),this.editor.off("changeSession",this.setSession),this.element.style.display="none",this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb),this.editor.focus()},a.prototype.show=function(g,v){this.active=!0,this.editor.on("changeSession",this.setSession),this.element.style.display="",this.replaceOption.checked=v,g&&(this.searchInput.value=g),this.searchInput.focus(),this.searchInput.select(),this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb),this.$syncOptions(!0)},a.prototype.isFocused=function(){var g=document.activeElement;return g==this.searchInput||g==this.replaceInput},a}(),$=new l;$.bindKeys({"Ctrl-f|Command-f":function(a){var g=a.isReplace=!a.isReplace;a.replaceBox.style.display=g?"":"none",a.replaceOption.checked=!1,a.$syncOptions(),a.searchInput.focus()},"Ctrl-H|Command-Option-F":function(a){a.editor.getReadOnly()||(a.replaceOption.checked=!0,a.$syncOptions(),a.replaceInput.focus())},"Ctrl-G|Command-G":function(a){a.findNext()},"Ctrl-Shift-G|Command-Shift-G":function(a){a.findPrev()},esc:function(a){setTimeout(function(){a.hide()})},Return:function(a){a.activeInput==a.replaceInput&&a.replace(),a.findNext()},"Shift-Return":function(a){a.activeInput==a.replaceInput&&a.replace(),a.findPrev()},"Alt-Return":function(a){a.activeInput==a.replaceInput&&a.replaceAll(),a.findAll()},Tab:function(a){(a.activeInput==a.replaceInput?a.searchInput:a.replaceInput).focus()}}),$.addCommands([{name:"toggleRegexpMode",bindKey:{win:"Alt-R|Alt-/",mac:"Ctrl-Alt-R|Ctrl-Alt-/"},exec:function(a){a.regExpOption.checked=!a.regExpOption.checked,a.$syncOptions()}},{name:"toggleCaseSensitive",bindKey:{win:"Alt-C|Alt-I",mac:"Ctrl-Alt-R|Ctrl-Alt-I"},exec:function(a){a.caseSensitiveOption.checked=!a.caseSensitiveOption.checked,a.$syncOptions()}},{name:"toggleWholeWords",bindKey:{win:"Alt-B|Alt-W",mac:"Ctrl-Alt-B|Ctrl-Alt-W"},exec:function(a){a.wholeWordOption.checked=!a.wholeWordOption.checked,a.$syncOptions()}},{name:"toggleReplace",exec:function(a){a.replaceOption.checked=!a.replaceOption.checked,a.$syncOptions()}},{name:"searchInSelection",exec:function(a){a.searchOption.checked=!a.searchRange,a.setSearchRange(a.searchOption.checked&&a.editor.getSelectionRange()),a.$syncOptions()}}]);var C=new l([{bindKey:"Esc",name:"closeSearchBar",exec:function(a){a.searchBox.hide()}}]);T.prototype.$searchBarKb=$,T.prototype.$closeSearchBarKb=C,y.SearchBox=T,y.Search=function(a,g){var v=a.searchBox||new T(a);v.show(a.session.getTextRange(),g)}}),function(){ace.require(["ace/ext/searchbox"],function(f){H&&(H.exports=f)})}()})(ee);var te={exports:{}};(function(H,j){ace.define("ace/snippets",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter","ace/lib/lang","ace/range","ace/range_list","ace/keyboard/hash_handler","ace/tokenizer","ace/clipboard","ace/editor"],function(f,y,N){var M=f("./lib/dom"),R=f("./lib/oop"),w=f("./lib/event_emitter").EventEmitter,k=f("./lib/lang"),l=f("./range").Range,b=f("./range_list").RangeList,m=f("./keyboard/hash_handler").HashHandler,S=f("./tokenizer").Tokenizer,T=f("./clipboard"),$={CURRENT_WORD:function(e){return e.session.getTextRange(e.session.getWordRange())},SELECTION:function(e,n,t){var i=e.session.getTextRange();return t?i.replace(/\n\r?([ \t]*\S)/g,`
`+t+"$1"):i},CURRENT_LINE:function(e){return e.session.getLine(e.getCursorPosition().row)},PREV_LINE:function(e){return e.session.getLine(e.getCursorPosition().row-1)},LINE_INDEX:function(e){return e.getCursorPosition().row},LINE_NUMBER:function(e){return e.getCursorPosition().row+1},SOFT_TABS:function(e){return e.session.getUseSoftTabs()?"YES":"NO"},TAB_SIZE:function(e){return e.session.getTabSize()},CLIPBOARD:function(e){return T.getText&&T.getText()},FILENAME:function(e){return/[^/\\]*$/.exec(this.FILEPATH(e))[0]},FILENAME_BASE:function(e){return/[^/\\]*$/.exec(this.FILEPATH(e))[0].replace(/\.[^.]*$/,"")},DIRECTORY:function(e){return this.FILEPATH(e).replace(/[^/\\]*$/,"")},FILEPATH:function(e){return"/not implemented.txt"},WORKSPACE_NAME:function(){return"Unknown"},FULLNAME:function(){return"Unknown"},BLOCK_COMMENT_START:function(e){var n=e.session.$mode||{};return n.blockComment&&n.blockComment.start||""},BLOCK_COMMENT_END:function(e){var n=e.session.$mode||{};return n.blockComment&&n.blockComment.end||""},LINE_COMMENT:function(e){var n=e.session.$mode||{};return n.lineCommentStart||""},CURRENT_YEAR:C.bind(null,{year:"numeric"}),CURRENT_YEAR_SHORT:C.bind(null,{year:"2-digit"}),CURRENT_MONTH:C.bind(null,{month:"numeric"}),CURRENT_MONTH_NAME:C.bind(null,{month:"long"}),CURRENT_MONTH_NAME_SHORT:C.bind(null,{month:"short"}),CURRENT_DATE:C.bind(null,{day:"2-digit"}),CURRENT_DAY_NAME:C.bind(null,{weekday:"long"}),CURRENT_DAY_NAME_SHORT:C.bind(null,{weekday:"short"}),CURRENT_HOUR:C.bind(null,{hour:"2-digit",hour12:!1}),CURRENT_MINUTE:C.bind(null,{minute:"2-digit"}),CURRENT_SECOND:C.bind(null,{second:"2-digit"})};$.SELECTED_TEXT=$.SELECTION;function C(e){var n=new Date().toLocaleString("en-us",e);return n.length==1?"0"+n:n}var a=function(){function e(){this.snippetMap={},this.snippetNameMap={},this.variables=$}return e.prototype.getTokenizer=function(){return e.$tokenizer||this.createTokenizer()},e.prototype.createTokenizer=function(){function n(r){return r=r.substr(1),/^\d+$/.test(r)?[{tabstopId:parseInt(r,10)}]:[{text:r}]}function t(r){return"(?:[^\\\\"+r+"]|\\\\.)"}var i={regex:"/("+t("/")+"+)/",onMatch:function(r,d,h){var p=h[0];return p.fmtString=!0,p.guard=r.slice(1,-1),p.flag="",""},next:"formatString"};return e.$tokenizer=new S({start:[{regex:/\\./,onMatch:function(r,d,h){var p=r[1];return(p=="}"&&h.length||"`$\\".indexOf(p)!=-1)&&(r=p),[r]}},{regex:/}/,onMatch:function(r,d,h){return[h.length?h.shift():r]}},{regex:/\$(?:\d+|\w+)/,onMatch:n},{regex:/\$\{[\dA-Z_a-z]+/,onMatch:function(r,d,h){var p=n(r.substr(1));return h.unshift(p[0]),p},next:"snippetVar"},{regex:/\n/,token:"newline",merge:!1}],snippetVar:[{regex:"\\|"+t("\\|")+"*\\|",onMatch:function(r,d,h){var p=r.slice(1,-1).replace(/\\[,|\\]|,/g,function(c){return c.length==2?c[1]:"\0"}).split("\0").map(function(c){return{value:c}});return h[0].choices=p,[p[0]]},next:"start"},i,{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"start"}],formatString:[{regex:/:/,onMatch:function(r,d,h){return h.length&&h[0].expectElse?(h[0].expectElse=!1,h[0].ifEnd={elseEnd:h[0]},[h[0].ifEnd]):":"}},{regex:/\\./,onMatch:function(r,d,h){var p=r[1];return p=="}"&&h.length||"`$\\".indexOf(p)!=-1?r=p:p=="n"?r=`
`:p=="t"?r="	":"ulULE".indexOf(p)!=-1&&(r={changeCase:p,local:p>"a"}),[r]}},{regex:"/\\w*}",onMatch:function(r,d,h){var p=h.shift();return p&&(p.flag=r.slice(1,-1)),this.next=p&&p.tabstopId?"start":"",[p||r]},next:"start"},{regex:/\$(?:\d+|\w+)/,onMatch:function(r,d,h){return[{text:r.slice(1)}]}},{regex:/\${\w+/,onMatch:function(r,d,h){var p={text:r.slice(2)};return h.unshift(p),[p]},next:"formatStringVar"},{regex:/\n/,token:"newline",merge:!1},{regex:/}/,onMatch:function(r,d,h){var p=h.shift();return this.next=p&&p.tabstopId?"start":"",[p||r]},next:"start"}],formatStringVar:[{regex:/:\/\w+}/,onMatch:function(r,d,h){var p=h[0];return p.formatFunction=r.slice(2,-1),[h.shift()]},next:"formatString"},i,{regex:/:[\?\-+]?/,onMatch:function(r,d,h){r[1]=="+"&&(h[0].ifEnd=h[0]),r[1]=="?"&&(h[0].expectElse=!0)},next:"formatString"},{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"formatString"}]}),e.$tokenizer},e.prototype.tokenizeTmSnippet=function(n,t){return this.getTokenizer().getLineTokens(n,t).tokens.map(function(i){return i.value||i})},e.prototype.getVariableValue=function(n,t,i){if(/^\d+$/.test(t))return(this.variables.__||{})[t]||"";if(/^[A-Z]\d+$/.test(t))return(this.variables[t[0]+"__"]||{})[t.substr(1)]||"";if(t=t.replace(/^TM_/,""),!this.variables.hasOwnProperty(t))return"";var r=this.variables[t];return typeof r=="function"&&(r=this.variables[t](n,t,i)),r??""},e.prototype.tmStrFormat=function(n,t,i){if(!t.fmt)return n;var r=t.flag||"",d=t.guard;d=new RegExp(d,r.replace(/[^gim]/g,""));var h=typeof t.fmt=="string"?this.tokenizeTmSnippet(t.fmt,"formatString"):t.fmt,p=this,c=n.replace(d,function(){var s=p.variables.__;p.variables.__=[].slice.call(arguments);for(var x=p.resolveVariables(h,i),A="E",E=0;E<x.length;E++){var L=x[E];if(typeof L=="object")if(x[E]="",L.changeCase&&L.local){var O=x[E+1];O&&typeof O=="string"&&(L.changeCase=="u"?x[E]=O[0].toUpperCase():x[E]=O[0].toLowerCase(),x[E+1]=O.substr(1))}else L.changeCase&&(A=L.changeCase);else A=="U"?x[E]=L.toUpperCase():A=="L"&&(x[E]=L.toLowerCase())}return p.variables.__=s,x.join("")});return c},e.prototype.tmFormatFunction=function(n,t,i){return t.formatFunction=="upcase"?n.toUpperCase():t.formatFunction=="downcase"?n.toLowerCase():n},e.prototype.resolveVariables=function(n,t){for(var i=[],r="",d=!0,h=0;h<n.length;h++){var p=n[h];if(typeof p=="string"){i.push(p),p==`
`?(d=!0,r=""):d&&(r=/^\t*/.exec(p)[0],d=/\S/.test(p));continue}if(p){if(d=!1,p.fmtString){var c=n.indexOf(p,h+1);c==-1&&(c=n.length),p.fmt=n.slice(h+1,c),h=c}if(p.text){var s=this.getVariableValue(t,p.text,r)+"";p.fmtString&&(s=this.tmStrFormat(s,p,t)),p.formatFunction&&(s=this.tmFormatFunction(s,p,t)),s&&!p.ifEnd?(i.push(s),x(p)):!s&&p.ifEnd&&x(p.ifEnd)}else p.elseEnd?x(p.elseEnd):(p.tabstopId!=null||p.changeCase!=null)&&i.push(p)}}function x(A){var E=n.indexOf(A,h+1);E!=-1&&(h=E)}return i},e.prototype.getDisplayTextForSnippet=function(n,t){var i=g.call(this,n,t);return i.text},e.prototype.insertSnippetForSelection=function(n,t,i){i===void 0&&(i={});var r=g.call(this,n,t,i),d=n.getSelectionRange(),h=n.session.replace(d,r.text),p=new v(n),c=n.inVirtualSelectionMode&&n.selection.index;p.addTabstops(r.tabstops,d.start,h,c)},e.prototype.insertSnippet=function(n,t,i){i===void 0&&(i={});var r=this;if(n.inVirtualSelectionMode)return r.insertSnippetForSelection(n,t,i);n.forEachSelection(function(){r.insertSnippetForSelection(n,t,i)},null,{keepOrder:!0}),n.tabstopManager&&n.tabstopManager.tabNext()},e.prototype.$getScope=function(n){var t=n.session.$mode.$id||"";if(t=t.split("/").pop(),t==="html"||t==="php"){t==="php"&&!n.session.$mode.inlinePhp&&(t="html");var i=n.getCursorPosition(),r=n.session.getState(i.row);typeof r=="object"&&(r=r[0]),r.substring&&(r.substring(0,3)=="js-"?t="javascript":r.substring(0,4)=="css-"?t="css":r.substring(0,4)=="php-"&&(t="php"))}return t},e.prototype.getActiveScopes=function(n){var t=this.$getScope(n),i=[t],r=this.snippetMap;return r[t]&&r[t].includeScopes&&i.push.apply(i,r[t].includeScopes),i.push("_"),i},e.prototype.expandWithTab=function(n,t){var i=this,r=n.forEachSelection(function(){return i.expandSnippetForSelection(n,t)},null,{keepOrder:!0});return r&&n.tabstopManager&&n.tabstopManager.tabNext(),r},e.prototype.expandSnippetForSelection=function(n,t){var i=n.getCursorPosition(),r=n.session.getLine(i.row),d=r.substring(0,i.column),h=r.substr(i.column),p=this.snippetMap,c;return this.getActiveScopes(n).some(function(s){var x=p[s];return x&&(c=this.findMatchingSnippet(x,d,h)),!!c},this),c?(t&&t.dryRun||(n.session.doc.removeInLine(i.row,i.column-c.replaceBefore.length,i.column+c.replaceAfter.length),this.variables.M__=c.matchBefore,this.variables.T__=c.matchAfter,this.insertSnippetForSelection(n,c.content),this.variables.M__=this.variables.T__=null),!0):!1},e.prototype.findMatchingSnippet=function(n,t,i){for(var r=n.length;r--;){var d=n[r];if(!(d.startRe&&!d.startRe.test(t))&&!(d.endRe&&!d.endRe.test(i))&&!(!d.startRe&&!d.endRe))return d.matchBefore=d.startRe?d.startRe.exec(t):[""],d.matchAfter=d.endRe?d.endRe.exec(i):[""],d.replaceBefore=d.triggerRe?d.triggerRe.exec(t)[0]:"",d.replaceAfter=d.endTriggerRe?d.endTriggerRe.exec(i)[0]:"",d}},e.prototype.register=function(n,t){var i=this.snippetMap,r=this.snippetNameMap,d=this;n||(n=[]);function h(s){return s&&!/^\^?\(.*\)\$?$|^\\b$/.test(s)&&(s="(?:"+s+")"),s||""}function p(s,x,A){return s=h(s),x=h(x),A?(s=x+s,s&&s[s.length-1]!="$"&&(s=s+"$")):(s=s+x,s&&s[0]!="^"&&(s="^"+s)),new RegExp(s)}function c(s){s.scope||(s.scope=t||"_"),t=s.scope,i[t]||(i[t]=[],r[t]={});var x=r[t];if(s.name){var A=x[s.name];A&&d.unregister(A),x[s.name]=s}i[t].push(s),s.prefix&&(s.tabTrigger=s.prefix),!s.content&&s.body&&(s.content=Array.isArray(s.body)?s.body.join(`
`):s.body),s.tabTrigger&&!s.trigger&&(!s.guard&&/^\w/.test(s.tabTrigger)&&(s.guard="\\b"),s.trigger=k.escapeRegExp(s.tabTrigger)),!(!s.trigger&&!s.guard&&!s.endTrigger&&!s.endGuard)&&(s.startRe=p(s.trigger,s.guard,!0),s.triggerRe=new RegExp(s.trigger),s.endRe=p(s.endTrigger,s.endGuard,!0),s.endTriggerRe=new RegExp(s.endTrigger))}Array.isArray(n)?n.forEach(c):Object.keys(n).forEach(function(s){c(n[s])}),this._signal("registerSnippets",{scope:t})},e.prototype.unregister=function(n,t){var i=this.snippetMap,r=this.snippetNameMap;function d(h){var p=r[h.scope||t];if(p&&p[h.name]){delete p[h.name];var c=i[h.scope||t],s=c&&c.indexOf(h);s>=0&&c.splice(s,1)}}n.content?d(n):Array.isArray(n)&&n.forEach(d)},e.prototype.parseSnippetFile=function(n){n=n.replace(/\r/g,"");for(var t=[],i={},r=/^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm,d;d=r.exec(n);){if(d[1])try{i=JSON.parse(d[1]),t.push(i)}catch{}if(d[4])i.content=d[4].replace(/^\t/gm,""),t.push(i),i={};else{var h=d[2],p=d[3];if(h=="regex"){var c=/\/((?:[^\/\\]|\\.)*)|$/g;i.guard=c.exec(p)[1],i.trigger=c.exec(p)[1],i.endTrigger=c.exec(p)[1],i.endGuard=c.exec(p)[1]}else h=="snippet"?(i.tabTrigger=p.match(/^\S*/)[0],i.name||(i.name=p)):h&&(i[h]=p)}}return t},e.prototype.getSnippetByName=function(n,t){var i=this.snippetNameMap,r;return this.getActiveScopes(t).some(function(d){var h=i[d];return h&&(r=h[n]),!!r},this),r},e}();R.implement(a.prototype,w);var g=function(e,n,t){t===void 0&&(t={});var i=e.getCursorPosition(),r=e.session.getLine(i.row),d=e.session.getTabString(),h=r.match(/^\s*/)[0];i.column<h.length&&(h=h.slice(0,i.column)),n=n.replace(/\r/g,"");var p=this.tokenizeTmSnippet(n);p=this.resolveVariables(p,e),p=p.map(function(z){return z==`
`&&!t.excludeExtraIndent?z+h:typeof z=="string"?z.replace(/\t/g,d):z});var c=[];p.forEach(function(z,U){if(typeof z=="object"){var V=z.tabstopId,B=c[V];if(B||(B=c[V]=[],B.index=V,B.value="",B.parents={}),B.indexOf(z)===-1){z.choices&&!B.choices&&(B.choices=z.choices),B.push(z);var K=p.indexOf(z,U+1);if(K!==-1){var q=p.slice(U+1,K),X=q.some(function(G){return typeof G=="object"});X&&!B.value?B.value=q:q.length&&(!B.value||typeof B.value!="string")&&(B.value=q.join(""))}}}}),c.forEach(function(z){z.length=0});var s={};function x(z){for(var U=[],V=0;V<z.length;V++){var B=z[V];if(typeof B=="object"){if(s[B.tabstopId])continue;var K=z.lastIndexOf(B,V-1);B=U[K]||{tabstopId:B.tabstopId}}U[V]=B}return U}for(var A=0;A<p.length;A++){var E=p[A];if(typeof E=="object"){var L=E.tabstopId,O=c[L],P=p.indexOf(E,A+1);if(s[L]){s[L]===E&&(delete s[L],Object.keys(s).forEach(function(z){O.parents[z]=!0}));continue}s[L]=E;var D=O.value;typeof D!="string"?D=x(D):E.fmt&&(D=this.tmStrFormat(D,E,e)),p.splice.apply(p,[A+1,Math.max(0,P-A)].concat(D,E)),O.indexOf(E)===-1&&O.push(E)}}var I=0,W=0,F="";return p.forEach(function(z){if(typeof z=="string"){var U=z.split(`
`);U.length>1?(W=U[U.length-1].length,I+=U.length-1):W+=z.length,F+=z}else z&&(z.start?z.end={row:I,column:W}:z.start={row:I,column:W})}),{text:F,tabstops:c,tokens:p}},v=function(){function e(n){if(this.index=0,this.ranges=[],this.tabstops=[],n.tabstopManager)return n.tabstopManager;n.tabstopManager=this,this.$onChange=this.onChange.bind(this),this.$onChangeSelection=k.delayedCall(this.onChangeSelection.bind(this)).schedule,this.$onChangeSession=this.onChangeSession.bind(this),this.$onAfterExec=this.onAfterExec.bind(this),this.attach(n)}return e.prototype.attach=function(n){this.$openTabstops=null,this.selectedTabstop=null,this.editor=n,this.session=n.session,this.editor.on("change",this.$onChange),this.editor.on("changeSelection",this.$onChangeSelection),this.editor.on("changeSession",this.$onChangeSession),this.editor.commands.on("afterExec",this.$onAfterExec),this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},e.prototype.detach=function(){this.tabstops.forEach(this.removeTabstopMarkers,this),this.ranges.length=0,this.tabstops.length=0,this.selectedTabstop=null,this.editor.off("change",this.$onChange),this.editor.off("changeSelection",this.$onChangeSelection),this.editor.off("changeSession",this.$onChangeSession),this.editor.commands.off("afterExec",this.$onAfterExec),this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.tabstopManager=null,this.session=null,this.editor=null},e.prototype.onChange=function(n){for(var t=n.action[0]=="r",i=this.selectedTabstop||{},r=i.parents||{},d=this.tabstops.slice(),h=0;h<d.length;h++){var p=d[h],c=p==i||r[p.index];if(p.rangeList.$bias=c?0:1,n.action=="remove"&&p!==i){var s=p.parents&&p.parents[i.index],x=p.rangeList.pointIndex(n.start,s);x=x<0?-x-1:x+1;var A=p.rangeList.pointIndex(n.end,s);A=A<0?-A-1:A-1;for(var E=p.rangeList.ranges.slice(x,A),L=0;L<E.length;L++)this.removeRange(E[L])}p.rangeList.$onChange(n)}var O=this.session;!this.$inChange&&t&&O.getLength()==1&&!O.getValue()&&this.detach()},e.prototype.updateLinkedFields=function(){var n=this.selectedTabstop;if(!(!n||!n.hasLinkedRanges||!n.firstNonLinked)){this.$inChange=!0;for(var t=this.session,i=t.getTextRange(n.firstNonLinked),r=0;r<n.length;r++){var d=n[r];if(d.linked){var h=d.original,p=y.snippetManager.tmStrFormat(i,h,this.editor);t.replace(d,p)}}this.$inChange=!1}},e.prototype.onAfterExec=function(n){n.command&&!n.command.readOnly&&this.updateLinkedFields()},e.prototype.onChangeSelection=function(){if(this.editor){for(var n=this.editor.selection.lead,t=this.editor.selection.anchor,i=this.editor.selection.isEmpty(),r=0;r<this.ranges.length;r++)if(!this.ranges[r].linked){var d=this.ranges[r].contains(n.row,n.column),h=i||this.ranges[r].contains(t.row,t.column);if(d&&h)return}this.detach()}},e.prototype.onChangeSession=function(){this.detach()},e.prototype.tabNext=function(n){var t=this.tabstops.length,i=this.index+(n||1);i=Math.min(Math.max(i,1),t),i==t&&(i=0),this.selectTabstop(i),i===0&&this.detach()},e.prototype.selectTabstop=function(n){this.$openTabstops=null;var t=this.tabstops[this.index];if(t&&this.addTabstopMarkers(t),this.index=n,t=this.tabstops[this.index],!(!t||!t.length)){this.selectedTabstop=t;var i=t.firstNonLinked||t;if(t.choices&&(i.cursor=i.start),this.editor.inVirtualSelectionMode)this.editor.selection.fromOrientedRange(i);else{var r=this.editor.multiSelect;r.toSingleRange(i);for(var d=0;d<t.length;d++)t.hasLinkedRanges&&t[d].linked||r.addRange(t[d].clone(),!0)}this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler),this.selectedTabstop&&this.selectedTabstop.choices&&this.editor.execCommand("startAutocomplete",{matches:this.selectedTabstop.choices})}},e.prototype.addTabstops=function(n,t,i){var r=this.useLink||!this.editor.getOption("enableMultiselect");if(this.$openTabstops||(this.$openTabstops=[]),!n[0]){var d=l.fromPoints(i,i);u(d.start,t),u(d.end,t),n[0]=[d],n[0].index=0}var h=this.index,p=[h+1,0],c=this.ranges;n.forEach(function(s,x){for(var A=this.$openTabstops[x]||s,E=0;E<s.length;E++){var L=s[E],O=l.fromPoints(L.start,L.end||L.start);_(O.start,t),_(O.end,t),O.original=L,O.tabstop=A,c.push(O),A!=s?A.unshift(O):A[E]=O,L.fmtString||A.firstNonLinked&&r?(O.linked=!0,A.hasLinkedRanges=!0):A.firstNonLinked||(A.firstNonLinked=O)}A.firstNonLinked||(A.hasLinkedRanges=!1),A===s&&(p.push(A),this.$openTabstops[x]=A),this.addTabstopMarkers(A),A.rangeList=A.rangeList||new b,A.rangeList.$bias=0,A.rangeList.addList(A)},this),p.length>2&&(this.tabstops.length&&p.push(p.splice(2,1)[0]),this.tabstops.splice.apply(this.tabstops,p))},e.prototype.addTabstopMarkers=function(n){var t=this.session;n.forEach(function(i){i.markerId||(i.markerId=t.addMarker(i,"ace_snippet-marker","text"))})},e.prototype.removeTabstopMarkers=function(n){var t=this.session;n.forEach(function(i){t.removeMarker(i.markerId),i.markerId=null})},e.prototype.removeRange=function(n){var t=n.tabstop.indexOf(n);t!=-1&&n.tabstop.splice(t,1),t=this.ranges.indexOf(n),t!=-1&&this.ranges.splice(t,1),t=n.tabstop.rangeList.ranges.indexOf(n),t!=-1&&n.tabstop.splice(t,1),this.session.removeMarker(n.markerId),n.tabstop.length||(t=this.tabstops.indexOf(n.tabstop),t!=-1&&this.tabstops.splice(t,1),this.tabstops.length||this.detach())},e}();v.prototype.keyboardHandler=new m,v.prototype.keyboardHandler.bindKeys({Tab:function(e){y.snippetManager&&y.snippetManager.expandWithTab(e)||(e.tabstopManager.tabNext(1),e.renderer.scrollCursorIntoView())},"Shift-Tab":function(e){e.tabstopManager.tabNext(-1),e.renderer.scrollCursorIntoView()},Esc:function(e){e.tabstopManager.detach()}});var _=function(e,n){e.row==0&&(e.column+=n.column),e.row+=n.row},u=function(e,n){e.row==n.row&&(e.column-=n.column),e.row-=n.row};M.importCssString(`
.ace_snippet-marker {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: rgba(194, 193, 208, 0.09);
    border: 1px dotted rgba(211, 208, 235, 0.62);
    position: absolute;
}`,"snippets.css",!1),y.snippetManager=new a;var o=f("./editor").Editor;(function(){this.insertSnippet=function(e,n){return y.snippetManager.insertSnippet(this,e,n)},this.expandSnippet=function(e){return y.snippetManager.expandWithTab(this,e)}}).call(o.prototype)}),ace.define("ace/autocomplete/popup",["require","exports","module","ace/virtual_renderer","ace/editor","ace/range","ace/lib/event","ace/lib/lang","ace/lib/dom","ace/config","ace/lib/useragent"],function(f,y,N){var M=f("../virtual_renderer").VirtualRenderer,R=f("../editor").Editor,w=f("../range").Range,k=f("../lib/event"),l=f("../lib/lang"),b=f("../lib/dom"),m=f("../config").nls,S=f("./../lib/useragent"),T=function(_){return"suggest-aria-id:".concat(_)},$=S.isSafari?"menu":"listbox",C=S.isSafari?"menuitem":"option",a=S.isSafari?"aria-current":"aria-selected",g=function(_){var u=new M(_);u.$maxLines=4;var o=new R(u);return o.setHighlightActiveLine(!1),o.setShowPrintMargin(!1),o.renderer.setShowGutter(!1),o.renderer.setHighlightGutterLine(!1),o.$mouseHandler.$focusTimeout=0,o.$highlightTagPending=!0,o},v=function(){function _(u){var o=b.createElement("div"),e=g(o);u&&u.appendChild(o),o.style.display="none",e.renderer.content.style.cursor="default",e.renderer.setStyle("ace_autocomplete"),e.renderer.$textLayer.element.setAttribute("role",$),e.renderer.$textLayer.element.setAttribute("aria-roledescription",m("Autocomplete suggestions")),e.renderer.$textLayer.element.setAttribute("aria-label",m("Autocomplete suggestions")),e.renderer.textarea.setAttribute("aria-hidden","true"),e.setOption("displayIndentGuides",!1),e.setOption("dragDelay",150);var n=function(){};e.focus=n,e.$isFocused=!0,e.renderer.$cursorLayer.restartTimer=n,e.renderer.$cursorLayer.element.style.opacity="0",e.renderer.$maxLines=8,e.renderer.$keepTextAreaAtCursor=!1,e.setHighlightActiveLine(!1),e.session.highlight(""),e.session.$searchHighlight.clazz="ace_highlight-marker",e.on("mousedown",function(c){var s=c.getDocumentPosition();e.selection.moveToPosition(s),r.start.row=r.end.row=s.row,c.stop()});var t,i=new w(-1,0,-1,1/0),r=new w(-1,0,-1,1/0);r.id=e.session.addMarker(r,"ace_active-line","fullLine"),e.setSelectOnHover=function(c){c?i.id&&(e.session.removeMarker(i.id),i.id=null):i.id=e.session.addMarker(i,"ace_line-hover","fullLine")},e.setSelectOnHover(!1),e.on("mousemove",function(c){if(!t){t=c;return}if(!(t.x==c.x&&t.y==c.y)){t=c,t.scrollTop=e.renderer.scrollTop,e.isMouseOver=!0;var s=t.getDocumentPosition().row;i.start.row!=s&&(i.id||e.setRow(s),h(s))}}),e.renderer.on("beforeRender",function(){if(t&&i.start.row!=-1){t.$pos=null;var c=t.getDocumentPosition().row;i.id||e.setRow(c),h(c,!0)}}),e.renderer.on("afterRender",function(){var c=e.getRow(),s=e.renderer.$textLayer,x=s.element.childNodes[c-s.config.firstRow],A=document.activeElement;if(x!==e.selectedNode&&e.selectedNode&&(b.removeCssClass(e.selectedNode,"ace_selected"),A.removeAttribute("aria-activedescendant"),e.selectedNode.removeAttribute(a),e.selectedNode.removeAttribute("id")),e.selectedNode=x,x){b.addCssClass(x,"ace_selected");var E=T(c);x.id=E,s.element.setAttribute("aria-activedescendant",E),A.setAttribute("aria-activedescendant",E),x.setAttribute("role",C),x.setAttribute("aria-roledescription",m("item")),x.setAttribute("aria-label",e.getData(c).value),x.setAttribute("aria-setsize",e.data.length),x.setAttribute("aria-posinset",c+1),x.setAttribute("aria-describedby","doc-tooltip"),x.setAttribute(a,"true")}});var d=function(){h(-1)},h=function(c,s){c!==i.start.row&&(i.start.row=i.end.row=c,s||e.session._emit("changeBackMarker"),e._emit("changeHoverMarker"))};e.getHoveredRow=function(){return i.start.row},k.addListener(e.container,"mouseout",function(){e.isMouseOver=!1,d()}),e.on("hide",d),e.on("changeSelection",d),e.session.doc.getLength=function(){return e.data.length},e.session.doc.getLine=function(c){var s=e.data[c];return typeof s=="string"?s:s&&s.value||""};var p=e.session.bgTokenizer;return p.$tokenizeRow=function(c){var s=e.data[c],x=[];if(!s)return x;typeof s=="string"&&(s={value:s});var A=s.caption||s.value||s.name;function E(z,U){z&&x.push({type:(s.className||"")+(U||""),value:z})}for(var L=A.toLowerCase(),O=(e.filterText||"").toLowerCase(),P=0,D=0,I=0;I<=O.length;I++)if(I!=D&&(s.matchMask&1<<I||I==O.length)){var W=O.slice(D,I);D=I;var F=L.indexOf(W,P);if(F==-1)continue;E(A.slice(P,F),""),P=F+W.length,E(A.slice(F,P),"completion-highlight")}return E(A.slice(P,A.length),""),x.push({type:"completion-spacer",value:" "}),s.meta&&x.push({type:"completion-meta",value:s.meta}),s.message&&x.push({type:"completion-message",value:s.message}),x},p.$updateOnChange=n,p.start=n,e.session.$computeWidth=function(){return this.screenWidth=0},e.isOpen=!1,e.isTopdown=!1,e.autoSelect=!0,e.filterText="",e.isMouseOver=!1,e.data=[],e.setData=function(c,s){e.filterText=s||"",e.setValue(l.stringRepeat(`
`,c.length),-1),e.data=c||[],e.setRow(0)},e.getData=function(c){return e.data[c]},e.getRow=function(){return r.start.row},e.setRow=function(c){c=Math.max(this.autoSelect?0:-1,Math.min(this.data.length-1,c)),r.start.row!=c&&(e.selection.clearSelection(),r.start.row=r.end.row=c||0,e.session._emit("changeBackMarker"),e.moveCursorTo(c||0,0),e.isOpen&&e._signal("select"))},e.on("changeSelection",function(){e.isOpen&&e.setRow(e.selection.lead.row),e.renderer.scrollCursorIntoView()}),e.hide=function(){this.container.style.display="none",e.anchorPos=null,e.anchor=null,e.isOpen&&(e.isOpen=!1,this._signal("hide"))},e.tryShow=function(c,s,x,A){if(!A&&e.isOpen&&e.anchorPos&&e.anchor&&e.anchorPos.top===c.top&&e.anchorPos.left===c.left&&e.anchor===x)return!0;var E=this.container,L=window.innerHeight,O=window.innerWidth,P=this.renderer,D=P.$maxLines*s*1.4,I={top:0,bottom:0,left:0},W=L-c.top-3*this.$borderSize-s,F=c.top-3*this.$borderSize;x||(F<=W||W>=D?x="bottom":x="top"),x==="top"?(I.bottom=c.top-this.$borderSize,I.top=I.bottom-D):x==="bottom"&&(I.top=c.top+s+this.$borderSize,I.bottom=I.top+D);var z=I.top>=0&&I.bottom<=L;if(!A&&!z)return!1;z?P.$maxPixelHeight=null:x==="top"?P.$maxPixelHeight=F:P.$maxPixelHeight=W,x==="top"?(E.style.top="",E.style.bottom=L-I.bottom+"px",e.isTopdown=!1):(E.style.top=I.top+"px",E.style.bottom="",e.isTopdown=!0),E.style.display="";var U=c.left;return U+E.offsetWidth>O&&(U=O-E.offsetWidth),E.style.left=U+"px",E.style.right="",e.isOpen||(e.isOpen=!0,this._signal("show"),t=null),e.anchorPos=c,e.anchor=x,!0},e.show=function(c,s,x){this.tryShow(c,s,x?"bottom":void 0,!0)},e.goTo=function(c){var s=this.getRow(),x=this.session.getLength()-1;switch(c){case"up":s=s<=0?x:s-1;break;case"down":s=s>=x?-1:s+1;break;case"start":s=0;break;case"end":s=x;break}this.setRow(s)},e.getTextLeftOffset=function(){return this.$borderSize+this.renderer.$padding+this.$imageSize},e.$imageSize=0,e.$borderSize=1,e}return _}();b.importCssString(`
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
`,"autocompletion.css",!1),y.AcePopup=v,y.$singleLineEditor=g,y.getAriaId=T}),ace.define("ace/autocomplete/inline_screenreader",["require","exports","module"],function(f,y,N){var M=function(){function R(w){this.editor=w,this.screenReaderDiv=document.createElement("div"),this.screenReaderDiv.classList.add("ace_screenreader-only"),this.editor.container.appendChild(this.screenReaderDiv)}return R.prototype.setScreenReaderContent=function(w){for(!this.popup&&this.editor.completer&&this.editor.completer.popup&&(this.popup=this.editor.completer.popup,this.popup.renderer.on("afterRender",(function(){var l=this.popup.getRow(),b=this.popup.renderer.$textLayer,m=b.element.childNodes[l-b.config.firstRow];if(m){for(var S="doc-tooltip ",T=0;T<this._lines.length;T++)S+="ace-inline-screenreader-line-".concat(T," ");m.setAttribute("aria-describedby",S)}}).bind(this)));this.screenReaderDiv.firstChild;)this.screenReaderDiv.removeChild(this.screenReaderDiv.firstChild);this._lines=w.split(/\r\n|\r|\n/);var k=this.createCodeBlock();this.screenReaderDiv.appendChild(k)},R.prototype.destroy=function(){this.screenReaderDiv.remove()},R.prototype.createCodeBlock=function(){var w=document.createElement("pre");w.setAttribute("id","ace-inline-screenreader");for(var k=0;k<this._lines.length;k++){var l=document.createElement("code");l.setAttribute("id","ace-inline-screenreader-line-".concat(k));var b=document.createTextNode(this._lines[k]);l.appendChild(b),w.appendChild(l)}return w},R}();y.AceInlineScreenReader=M}),ace.define("ace/autocomplete/inline",["require","exports","module","ace/snippets","ace/autocomplete/inline_screenreader"],function(f,y,N){var M=f("../snippets").snippetManager,R=f("./inline_screenreader").AceInlineScreenReader,w=function(){function k(){this.editor=null}return k.prototype.show=function(l,b,m){if(m=m||"",l&&this.editor&&this.editor!==l&&(this.hide(),this.editor=null,this.inlineScreenReader=null),!l||!b)return!1;this.inlineScreenReader||(this.inlineScreenReader=new R(l));var S=b.snippet?M.getDisplayTextForSnippet(l,b.snippet):b.value;return b.hideInlinePreview||!S||!S.startsWith(m)?!1:(this.editor=l,this.inlineScreenReader.setScreenReaderContent(S),S=S.slice(m.length),S===""?l.removeGhostText():l.setGhostText(S),!0)},k.prototype.isOpen=function(){return this.editor?!!this.editor.renderer.$ghostText:!1},k.prototype.hide=function(){return this.editor?(this.editor.removeGhostText(),!0):!1},k.prototype.destroy=function(){this.hide(),this.editor=null,this.inlineScreenReader&&(this.inlineScreenReader.destroy(),this.inlineScreenReader=null)},k}();y.AceInline=w}),ace.define("ace/autocomplete/util",["require","exports","module"],function(f,y,N){y.parForEach=function(R,w,k){var l=0,b=R.length;b===0&&k();for(var m=0;m<b;m++)w(R[m],function(S,T){l++,l===b&&k(S,T)})};var M=/[a-zA-Z_0-9\$\-\u00A2-\u2000\u2070-\uFFFF]/;y.retrievePrecedingIdentifier=function(R,w,k){k=k||M;for(var l=[],b=w-1;b>=0&&k.test(R[b]);b--)l.push(R[b]);return l.reverse().join("")},y.retrieveFollowingIdentifier=function(R,w,k){k=k||M;for(var l=[],b=w;b<R.length&&k.test(R[b]);b++)l.push(R[b]);return l},y.getCompletionPrefix=function(R){var w=R.getCursorPosition(),k=R.session.getLine(w.row),l;return R.completers.forEach((function(b){b.identifierRegexps&&b.identifierRegexps.forEach((function(m){!l&&m&&(l=this.retrievePrecedingIdentifier(k,w.column,m))}).bind(this))}).bind(this)),l||this.retrievePrecedingIdentifier(k,w.column)},y.triggerAutocomplete=function(R){var w=R.getCursorPosition(),k=R.session.getLine(w.row),l=w.column===0?0:w.column-1,b=k[l];return R.completers.some(function(m){if(m.triggerCharacters&&Array.isArray(m.triggerCharacters))return m.triggerCharacters.includes(b)})}}),ace.define("ace/autocomplete",["require","exports","module","ace/keyboard/hash_handler","ace/autocomplete/popup","ace/autocomplete/inline","ace/autocomplete/popup","ace/autocomplete/util","ace/lib/lang","ace/lib/dom","ace/snippets","ace/config","ace/lib/event","ace/lib/scroll"],function(f,y,N){var M=f("./keyboard/hash_handler").HashHandler,R=f("./autocomplete/popup").AcePopup,w=f("./autocomplete/inline").AceInline,k=f("./autocomplete/popup").getAriaId,l=f("./autocomplete/util"),b=f("./lib/lang"),m=f("./lib/dom"),S=f("./snippets").snippetManager,T=f("./config"),$=f("./lib/event"),C=f("./lib/scroll").preventParentScroll,a=function(u,o){o.completer&&o.completer.destroy()},g=function(){function u(){this.autoInsert=!1,this.autoSelect=!0,this.autoShown=!1,this.exactMatch=!1,this.inlineEnabled=!1,this.keyboardHandler=new M,this.keyboardHandler.bindKeys(this.commands),this.parentNode=null,this.setSelectOnHover=!1,this.hasSeen=new Set,this.showLoadingState=!1,this.stickySelectionDelay=500,this.blurListener=this.blurListener.bind(this),this.changeListener=this.changeListener.bind(this),this.mousedownListener=this.mousedownListener.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this),this.onLayoutChange=this.onLayoutChange.bind(this),this.changeTimer=b.delayedCall((function(){this.updateCompletions(!0)}).bind(this)),this.tooltipTimer=b.delayedCall(this.updateDocTooltip.bind(this),50),this.popupTimer=b.delayedCall(this.$updatePopupPosition.bind(this),50),this.stickySelectionTimer=b.delayedCall((function(){this.stickySelection=!0}).bind(this),this.stickySelectionDelay),this.$firstOpenTimer=b.delayedCall((function(){var o=this.completionProvider&&this.completionProvider.initialPosition;this.autoShown||this.popup&&this.popup.isOpen||!o||this.editor.completers.length===0||(this.completions=new _(u.completionsForLoading),this.openPopup(this.editor,o.prefix,!1),this.popup.renderer.setStyle("ace_loading",!0))}).bind(this),this.stickySelectionDelay)}return Object.defineProperty(u,"completionsForLoading",{get:function(){return[{caption:T.nls("Loading..."),value:""}]},enumerable:!1,configurable:!0}),u.prototype.$init=function(){return this.popup=new R(this.parentNode||document.body||document.documentElement),this.popup.on("click",(function(o){this.insertMatch(),o.stop()}).bind(this)),this.popup.focus=this.editor.focus.bind(this.editor),this.popup.on("show",this.$onPopupShow.bind(this)),this.popup.on("hide",this.$onHidePopup.bind(this)),this.popup.on("select",this.$onPopupChange.bind(this)),$.addListener(this.popup.container,"mouseout",this.mouseOutListener.bind(this)),this.popup.on("changeHoverMarker",this.tooltipTimer.bind(null,null)),this.popup.renderer.on("afterRender",this.$onPopupRender.bind(this)),this.popup},u.prototype.$initInline=function(){if(!(!this.inlineEnabled||this.inlineRenderer))return this.inlineRenderer=new w,this.inlineRenderer},u.prototype.getPopup=function(){return this.popup||this.$init()},u.prototype.$onHidePopup=function(){this.inlineRenderer&&this.inlineRenderer.hide(),this.hideDocTooltip(),this.stickySelectionTimer.cancel(),this.popupTimer.cancel(),this.stickySelection=!1},u.prototype.$seen=function(o){!this.hasSeen.has(o)&&o&&o.completer&&o.completer.onSeen&&typeof o.completer.onSeen=="function"&&(o.completer.onSeen(this.editor,o),this.hasSeen.add(o))},u.prototype.$onPopupChange=function(o){if(this.inlineRenderer&&this.inlineEnabled){var e=o?null:this.popup.getData(this.popup.getRow()),n=l.getCompletionPrefix(this.editor);if(this.inlineRenderer.show(this.editor,e,n)?this.$seen(e):this.inlineRenderer.hide(),this.popup.isMouseOver&&this.setSelectOnHover){this.tooltipTimer.call(null,null);return}this.popupTimer.schedule(),this.tooltipTimer.schedule()}else this.popupTimer.call(null,null),this.tooltipTimer.call(null,null)},u.prototype.$onPopupRender=function(){var o=this.inlineRenderer&&this.inlineEnabled;if(this.completions&&this.completions.filtered&&this.completions.filtered.length>0)for(var e=this.popup.getFirstVisibleRow();e<=this.popup.getLastVisibleRow();e++){var n=this.popup.getData(e);n&&(!o||n.hideInlinePreview)&&this.$seen(n)}},u.prototype.$onPopupShow=function(o){this.$onPopupChange(o),this.stickySelection=!1,this.stickySelectionDelay>=0&&this.stickySelectionTimer.schedule(this.stickySelectionDelay)},u.prototype.observeLayoutChanges=function(){if(!(this.$elements||!this.editor)){window.addEventListener("resize",this.onLayoutChange,{passive:!0}),window.addEventListener("wheel",this.mousewheelListener);for(var o=this.editor.container.parentNode,e=[];o;)e.push(o),o.addEventListener("scroll",this.onLayoutChange,{passive:!0}),o=o.parentNode;this.$elements=e}},u.prototype.unObserveLayoutChanges=function(){var o=this;window.removeEventListener("resize",this.onLayoutChange,{passive:!0}),window.removeEventListener("wheel",this.mousewheelListener),this.$elements&&this.$elements.forEach(function(e){e.removeEventListener("scroll",o.onLayoutChange,{passive:!0})}),this.$elements=null},u.prototype.onLayoutChange=function(){if(!this.popup.isOpen)return this.unObserveLayoutChanges();this.$updatePopupPosition(),this.updateDocTooltip()},u.prototype.$updatePopupPosition=function(){var o=this.editor,e=o.renderer,n=e.layerConfig.lineHeight,t=e.$cursorLayer.getPixelPosition(this.base,!0);t.left-=this.popup.getTextLeftOffset();var i=o.container.getBoundingClientRect();t.top+=i.top-e.layerConfig.offset,t.left+=i.left-o.renderer.scrollLeft,t.left+=e.gutterWidth;var r={top:t.top,left:t.left};e.$ghostText&&e.$ghostTextWidget&&this.base.row===e.$ghostText.position.row&&(r.top+=e.$ghostTextWidget.el.offsetHeight);var d=o.container.getBoundingClientRect().bottom-n,h=d<r.top?{top:d,left:r.left}:r;this.popup.tryShow(h,n,"bottom")||this.popup.tryShow(t,n,"top")||this.popup.show(t,n)},u.prototype.openPopup=function(o,e,n){this.$firstOpenTimer.cancel(),this.popup||this.$init(),this.inlineEnabled&&!this.inlineRenderer&&this.$initInline(),this.popup.autoSelect=this.autoSelect,this.popup.setSelectOnHover(this.setSelectOnHover);var t=this.popup.getRow(),i=this.popup.data[t];this.popup.setData(this.completions.filtered,this.completions.filterText),this.editor.textInput.setAriaOptions&&this.editor.textInput.setAriaOptions({activeDescendant:k(this.popup.getRow()),inline:this.inlineEnabled}),o.keyBinding.addKeyboardHandler(this.keyboardHandler);var r;this.stickySelection&&(r=this.popup.data.indexOf(i)),(!r||r===-1)&&(r=0),this.popup.setRow(this.autoSelect?r:-1),r===t&&i!==this.completions.filtered[r]&&this.$onPopupChange(),n?n&&!e&&this.detach():(this.popup.setTheme(o.getTheme()),this.popup.setFontSize(o.getFontSize()),this.$updatePopupPosition(),this.tooltipNode&&this.updateDocTooltip()),this.changeTimer.cancel(),this.observeLayoutChanges()},u.prototype.detach=function(){this.editor&&(this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.off("changeSelection",this.changeListener),this.editor.off("blur",this.blurListener),this.editor.off("mousedown",this.mousedownListener),this.editor.off("mousewheel",this.mousewheelListener)),this.$firstOpenTimer.cancel(),this.changeTimer.cancel(),this.hideDocTooltip(),this.completionProvider&&this.completionProvider.detach(),this.popup&&this.popup.isOpen&&this.popup.hide(),this.popup&&this.popup.renderer&&this.popup.renderer.off("afterRender",this.$onPopupRender),this.base&&this.base.detach(),this.activated=!1,this.completionProvider=this.completions=this.base=null,this.unObserveLayoutChanges()},u.prototype.changeListener=function(o){var e=this.editor.selection.lead;(e.row!=this.base.row||e.column<this.base.column)&&this.detach(),this.activated?this.changeTimer.schedule():this.detach()},u.prototype.blurListener=function(o){var e=document.activeElement,n=this.editor.textInput.getElement(),t=o.relatedTarget&&this.tooltipNode&&this.tooltipNode.contains(o.relatedTarget),i=this.popup&&this.popup.container;e!=n&&e.parentNode!=i&&!t&&e!=this.tooltipNode&&o.relatedTarget!=n&&this.detach()},u.prototype.mousedownListener=function(o){this.detach()},u.prototype.mousewheelListener=function(o){this.popup.isMouseOver||this.detach()},u.prototype.mouseOutListener=function(o){this.popup.isOpen&&this.$updatePopupPosition()},u.prototype.goTo=function(o){this.popup.goTo(o)},u.prototype.insertMatch=function(o,e){if(o||(o=this.popup.getData(this.popup.getRow())),!o)return!1;if(o.value==="")return this.detach();var n=this.completions,t=this.getCompletionProvider().insertMatch(this.editor,o,n.filterText,e);return this.completions==n&&this.detach(),t},u.prototype.showPopup=function(o,e){this.editor&&this.detach(),this.activated=!0,this.editor=o,o.completer!=this&&(o.completer&&o.completer.detach(),o.completer=this),o.on("changeSelection",this.changeListener),o.on("blur",this.blurListener),o.on("mousedown",this.mousedownListener),o.on("mousewheel",this.mousewheelListener),this.updateCompletions(!1,e)},u.prototype.getCompletionProvider=function(o){return this.completionProvider||(this.completionProvider=new v(o)),this.completionProvider},u.prototype.gatherCompletions=function(o,e){return this.getCompletionProvider().gatherCompletions(o,e)},u.prototype.updateCompletions=function(o,e){if(o&&this.base&&this.completions){var t=this.editor.getCursorPosition(),i=this.editor.session.getTextRange({start:this.base,end:t});if(i==this.completions.filterText)return;if(this.completions.setFilter(i),!this.completions.filtered.length)return this.detach();if(this.completions.filtered.length==1&&this.completions.filtered[0].value==i&&!this.completions.filtered[0].snippet)return this.detach();this.openPopup(this.editor,i,o);return}if(e&&e.matches){var t=this.editor.getSelectionRange().start;return this.base=this.editor.session.doc.createAnchor(t.row,t.column),this.base.$insertRight=!0,this.completions=new _(e.matches),this.openPopup(this.editor,"",o)}var n=this.editor.getSession(),t=this.editor.getCursorPosition(),i=l.getCompletionPrefix(this.editor);this.base=n.doc.createAnchor(t.row,t.column-i.length),this.base.$insertRight=!0;var r={exactMatch:this.exactMatch,ignoreCaption:this.ignoreCaption};this.getCompletionProvider({prefix:i,pos:t}).provideCompletions(this.editor,r,(function(d,h,p){var c=h.filtered,s=l.getCompletionPrefix(this.editor);if(this.$firstOpenTimer.cancel(),p){if(!c.length){var x=!this.autoShown&&this.emptyMessage;if(typeof x=="function"&&(x=this.emptyMessage(s)),x){var A=[{caption:x,value:""}];this.completions=new _(A),this.openPopup(this.editor,s,o),this.popup.renderer.setStyle("ace_loading",!1);return}return this.detach()}if(c.length==1&&c[0].value==s&&!c[0].snippet)return this.detach();if(this.autoInsert&&!this.autoShown&&c.length==1)return this.insertMatch(c[0])}this.completions=!p&&this.showLoadingState?new _(u.completionsForLoading.concat(c),h.filterText):h,this.openPopup(this.editor,s,o),this.popup.renderer.setStyle("ace_loading",!p)}).bind(this)),this.showLoadingState&&!this.autoShown&&!(this.popup&&this.popup.isOpen)&&this.$firstOpenTimer.delay(this.stickySelectionDelay/2)},u.prototype.cancelContextMenu=function(){this.editor.$mouseHandler.cancelContextMenu()},u.prototype.updateDocTooltip=function(){var o=this.popup,e=this.completions.filtered,n=e&&(e[o.getHoveredRow()]||e[o.getRow()]),t=null;if(!n||!this.editor||!this.popup.isOpen)return this.hideDocTooltip();for(var i=this.editor.completers.length,r=0;r<i;r++){var d=this.editor.completers[r];if(d.getDocTooltip&&n.completerId===d.id){t=d.getDocTooltip(n);break}}if(!t&&typeof n!="string"&&(t=n),typeof t=="string"&&(t={docText:t}),!t||!(t.docHTML||t.docText))return this.hideDocTooltip();this.showDocTooltip(t)},u.prototype.showDocTooltip=function(o){this.tooltipNode||(this.tooltipNode=m.createElement("div"),this.tooltipNode.style.margin="0",this.tooltipNode.style.pointerEvents="auto",this.tooltipNode.style.overscrollBehavior="contain",this.tooltipNode.tabIndex=-1,this.tooltipNode.onblur=this.blurListener.bind(this),this.tooltipNode.onclick=this.onTooltipClick.bind(this),this.tooltipNode.id="doc-tooltip",this.tooltipNode.setAttribute("role","tooltip"),this.tooltipNode.addEventListener("wheel",C));var e=this.editor.renderer.theme;this.tooltipNode.className="ace_tooltip ace_doc-tooltip "+(e.isDark?"ace_dark ":"")+(e.cssClass||"");var n=this.tooltipNode;o.docHTML?n.innerHTML=o.docHTML:o.docText&&(n.textContent=o.docText),n.parentNode||this.popup.container.appendChild(this.tooltipNode);var t=this.popup,i=t.container.getBoundingClientRect();n.style.top=t.container.style.top,n.style.bottom=t.container.style.bottom,n.style.display="block",window.innerWidth-i.right<320?i.left<320?t.isTopdown?(n.style.top=i.bottom+"px",n.style.left=i.left+"px",n.style.right="",n.style.bottom=""):(n.style.top=t.container.offsetTop-n.offsetHeight+"px",n.style.left=i.left+"px",n.style.right="",n.style.bottom=""):(n.style.right=window.innerWidth-i.left+"px",n.style.left=""):(n.style.left=i.right+1+"px",n.style.right="")},u.prototype.hideDocTooltip=function(){if(this.tooltipTimer.cancel(),!!this.tooltipNode){var o=this.tooltipNode;!this.editor.isFocused()&&document.activeElement==o&&this.editor.focus(),this.tooltipNode=null,o.parentNode&&o.parentNode.removeChild(o)}},u.prototype.onTooltipClick=function(o){for(var e=o.target;e&&e!=this.tooltipNode;){if(e.nodeName=="A"&&e.href){e.rel="noreferrer",e.target="_blank";break}e=e.parentNode}},u.prototype.destroy=function(){if(this.detach(),this.popup){this.popup.destroy();var o=this.popup.container;o&&o.parentNode&&o.parentNode.removeChild(o)}this.editor&&this.editor.completer==this&&(this.editor.off("destroy",a),this.editor.completer=null),this.inlineRenderer=this.popup=this.editor=null},u}();g.prototype.commands={Up:function(u){u.completer.goTo("up")},Down:function(u){u.completer.goTo("down")},"Ctrl-Up|Ctrl-Home":function(u){u.completer.goTo("start")},"Ctrl-Down|Ctrl-End":function(u){u.completer.goTo("end")},Esc:function(u){u.completer.detach()},Return:function(u){return u.completer.insertMatch()},"Shift-Return":function(u){u.completer.insertMatch(null,{deleteSuffix:!0})},Tab:function(u){var o=u.completer.insertMatch();if(!o&&!u.tabstopManager)u.completer.goTo("down");else return o},PageUp:function(u){u.completer.popup.gotoPageUp()},PageDown:function(u){u.completer.popup.gotoPageDown()}},g.for=function(u){return u.completer instanceof g||(u.completer&&(u.completer.destroy(),u.completer=null),T.get("sharedPopups")?(g.$sharedInstance||(g.$sharedInstance=new g),u.completer=g.$sharedInstance):(u.completer=new g,u.once("destroy",a))),u.completer},g.startCommand={name:"startAutocomplete",exec:function(u,o){var e=g.for(u);e.autoInsert=!1,e.autoSelect=!0,e.autoShown=!1,e.showPopup(u,o),e.cancelContextMenu()},bindKey:"Ctrl-Space|Ctrl-Shift-Space|Alt-Space"};var v=function(){function u(o){this.initialPosition=o,this.active=!0}return u.prototype.insertByIndex=function(o,e,n){return!this.completions||!this.completions.filtered?!1:this.insertMatch(o,this.completions.filtered[e],n)},u.prototype.insertMatch=function(o,e,n){if(!e)return!1;if(o.startOperation({command:{name:"insertMatch"}}),e.completer&&e.completer.insertMatch)e.completer.insertMatch(o,e);else{if(!this.completions)return!1;var t=this.completions.filterText.length,i=0;if(e.range&&e.range.start.row===e.range.end.row&&(t-=this.initialPosition.prefix.length,t+=this.initialPosition.pos.column-e.range.start.column,i+=e.range.end.column-this.initialPosition.pos.column),t||i){var r;o.selection.getAllRanges?r=o.selection.getAllRanges():r=[o.getSelectionRange()];for(var d=0,h;h=r[d];d++)h.start.column-=t,h.end.column+=i,o.session.remove(h)}e.snippet?S.insertSnippet(o,e.snippet):this.$insertString(o,e),e.completer&&e.completer.onInsert&&typeof e.completer.onInsert=="function"&&e.completer.onInsert(o,e),e.command&&e.command==="startAutocomplete"&&o.execCommand(e.command)}return o.endOperation(),!0},u.prototype.$insertString=function(o,e){var n=e.value||e;o.execCommand("insertstring",n)},u.prototype.gatherCompletions=function(o,e){var n=o.getSession(),t=o.getCursorPosition(),i=l.getCompletionPrefix(o),r=[];this.completers=o.completers;var d=o.completers.length;return o.completers.forEach(function(h,p){h.getCompletions(o,n,t,i,function(c,s){h.hideInlinePreview&&(s=s.map(function(x){return Object.assign(x,{hideInlinePreview:h.hideInlinePreview})})),!c&&s&&(r=r.concat(s)),e(null,{prefix:l.getCompletionPrefix(o),matches:r,finished:--d===0})})}),!0},u.prototype.provideCompletions=function(o,e,n){var t=(function(h){var p=h.prefix,c=h.matches;this.completions=new _(c),e.exactMatch&&(this.completions.exactMatch=!0),e.ignoreCaption&&(this.completions.ignoreCaption=!0),this.completions.setFilter(p),(h.finished||this.completions.filtered.length)&&n(null,this.completions,h.finished)}).bind(this),i=!0,r=null;if(this.gatherCompletions(o,(function(h,p){if(this.active){h&&(n(h,[],!0),this.detach());var c=p.prefix;if(c.indexOf(p.prefix)===0){if(i){r=p;return}t(p)}}}).bind(this)),i=!1,r){var d=r;r=null,t(d)}},u.prototype.detach=function(){this.active=!1,this.completers&&this.completers.forEach(function(o){typeof o.cancel=="function"&&o.cancel()})},u}(),_=function(){function u(o,e){this.all=o,this.filtered=o,this.filterText=e||"",this.exactMatch=!1,this.ignoreCaption=!1}return u.prototype.setFilter=function(o){if(o.length>this.filterText&&o.lastIndexOf(this.filterText,0)===0)var e=this.filtered;else var e=this.all;this.filterText=o,e=this.filterCompletions(e,this.filterText),e=e.sort(function(t,i){return i.exactMatch-t.exactMatch||i.$score-t.$score||(t.caption||t.value).localeCompare(i.caption||i.value)});var n=null;e=e.filter(function(t){var i=t.snippet||t.caption||t.value;return i===n?!1:(n=i,!0)}),this.filtered=e},u.prototype.filterCompletions=function(o,e){var n=[],t=e.toUpperCase(),i=e.toLowerCase();e:for(var r=0,d;d=o[r];r++){var h=!this.ignoreCaption&&d.caption||d.value||d.snippet;if(h){var p=-1,c=0,s=0,x,A;if(this.exactMatch){if(e!==h.substr(0,e.length))continue e}else{var E=h.toLowerCase().indexOf(i);if(E>-1)s=E;else for(var L=0;L<e.length;L++){var O=h.indexOf(i[L],p+1),P=h.indexOf(t[L],p+1);if(x=O>=0&&(P<0||O<P)?O:P,x<0)continue e;A=x-p-1,A>0&&(p===-1&&(s+=10),s+=A,c=c|1<<L),p=x}}d.matchMask=c,d.exactMatch=s?0:1,d.$score=(d.score||0)-s,n.push(d)}}return n},u}();y.Autocomplete=g,y.CompletionProvider=v,y.FilteredList=_}),ace.define("ace/autocomplete/text_completer",["require","exports","module","ace/range"],function(f,y,N){var M=f("../range").Range,R=/[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;function w(l,b){var m=l.getTextRange(M.fromPoints({row:0,column:0},b));return m.split(R).length-1}function k(l,b){var m=w(l,b),S=l.getValue().split(R),T=Object.create(null),$=S[m];return S.forEach(function(C,a){if(!(!C||C===$)){var g=Math.abs(m-a),v=S.length-g;T[C]?T[C]=Math.max(v,T[C]):T[C]=v}}),T}y.getCompletions=function(l,b,m,S,T){var $=k(b,m),C=Object.keys($);T(null,C.map(function(a){return{caption:a,value:a,score:$[a],meta:"local"}}))}}),ace.define("ace/ext/language_tools",["require","exports","module","ace/snippets","ace/autocomplete","ace/config","ace/lib/lang","ace/autocomplete/util","ace/autocomplete/text_completer","ace/editor","ace/config"],function(f,y,N){var M=f("../snippets").snippetManager,R=f("../autocomplete").Autocomplete,w=f("../config"),k=f("../lib/lang"),l=f("../autocomplete/util"),b=f("../autocomplete/text_completer"),m={getCompletions:function(t,i,r,d,h){if(i.$mode.completer)return i.$mode.completer.getCompletions(t,i,r,d,h);var p=t.session.getState(r.row),c=i.$mode.getCompletions(p,i,r,d);c=c.map(function(s){return s.completerId=m.id,s}),h(null,c)},id:"keywordCompleter"},S=function(t){var i={};return t.replace(/\${(\d+)(:(.*?))?}/g,function(r,d,h,p){return i[d]=p||""}).replace(/\$(\d+?)/g,function(r,d){return i[d]})},T={getCompletions:function(t,i,r,d,h){var p=[],c=i.getTokenAt(r.row,r.column);c&&c.type.match(/(tag-name|tag-open|tag-whitespace|attribute-name|attribute-value)\.xml$/)?p.push("html-tag"):p=M.getActiveScopes(t);var s=M.snippetMap,x=[];p.forEach(function(A){for(var E=s[A]||[],L=E.length;L--;){var O=E[L],P=O.name||O.tabTrigger;P&&x.push({caption:P,snippet:O.content,meta:O.tabTrigger&&!O.name?O.tabTrigger+"⇥ ":"snippet",completerId:T.id})}},this),h(null,x)},getDocTooltip:function(t){t.snippet&&!t.docHTML&&(t.docHTML=["<b>",k.escapeHTML(t.caption),"</b>","<hr></hr>",k.escapeHTML(S(t.snippet))].join(""))},id:"snippetCompleter"},$=[T,b,m];y.setCompleters=function(t){$.length=0,t&&$.push.apply($,t)},y.addCompleter=function(t){$.push(t)},y.textCompleter=b,y.keyWordCompleter=m,y.snippetCompleter=T;var C={name:"expandSnippet",exec:function(t){return M.expandWithTab(t)},bindKey:"Tab"},a=function(t,i){g(i.session.$mode)},g=function(t){typeof t=="string"&&(t=w.$modes[t]),t&&(M.files||(M.files={}),v(t.$id,t.snippetFileId),t.modes&&t.modes.forEach(g))},v=function(t,i){!i||!t||M.files[t]||(M.files[t]={},w.loadModule(i,function(r){r&&(M.files[t]=r,!r.snippets&&r.snippetText&&(r.snippets=M.parseSnippetFile(r.snippetText)),M.register(r.snippets||[],r.scope),r.includeScopes&&(M.snippetMap[r.scope].includeScopes=r.includeScopes,r.includeScopes.forEach(function(d){g("ace/mode/"+d)})))}))},_=function(t){var i=t.editor,r=i.completer&&i.completer.activated;if(t.command.name==="backspace")r&&!l.getCompletionPrefix(i)&&i.completer.detach();else if(t.command.name==="insertstring"&&!r){u=t;var d=t.editor.$liveAutocompletionDelay;d?o.delay(d):e(t)}},u,o=k.delayedCall(function(){e(u)},0),e=function(t){var i=t.editor,r=l.getCompletionPrefix(i),d=l.triggerAutocomplete(i);if(r&&r.length>=i.$liveAutocompletionThreshold||d){var h=R.for(i);h.autoShown=!0,h.showPopup(i)}},n=f("../editor").Editor;f("../config").defineOptions(n.prototype,"editor",{enableBasicAutocompletion:{set:function(t){t?(this.completers||(this.completers=Array.isArray(t)?t:$),this.commands.addCommand(R.startCommand)):this.commands.removeCommand(R.startCommand)},value:!1},enableLiveAutocompletion:{set:function(t){t?(this.completers||(this.completers=Array.isArray(t)?t:$),this.commands.on("afterExec",_)):this.commands.off("afterExec",_)},value:!1},liveAutocompletionDelay:{initialValue:0},liveAutocompletionThreshold:{initialValue:0},enableSnippets:{set:function(t){t?(this.commands.addCommand(C),this.on("changeMode",a),a(null,this)):(this.commands.removeCommand(C),this.off("changeMode",a))},value:!1}})}),function(){ace.require(["ace/ext/language_tools"],function(f){H&&(H.exports=f)})}()})(te);var ne={exports:{}};(function(H,j){ace.define("ace/ext/beautify",["require","exports","module","ace/token_iterator"],function(f,y,N){var M=f("../token_iterator").TokenIterator;function R(w,k){return w.type.lastIndexOf(k+".xml")>-1}y.singletonTags=["area","base","br","col","command","embed","hr","html","img","input","keygen","link","meta","param","source","track","wbr"],y.blockTags=["article","aside","blockquote","body","div","dl","fieldset","footer","form","head","header","html","nav","ol","p","script","section","style","table","tbody","tfoot","thead","ul"],y.formatOptions={lineBreaksAfterCommasInCurlyBlock:!0},y.beautify=function(w){for(var k=new M(w,0,0),l=k.getCurrentToken(),b=w.getTabString(),m=y.singletonTags,S=y.blockTags,T=y.formatOptions||{},$,C=!1,a=!1,g=!1,v="",_="",u="",o=0,e=0,n=0,t=0,i=0,r=0,d=0,h,p=0,c=0,s,x=!1,A=!1,E=!1,L=!1,O={0:0},P=[],D=!1,I=function(){$&&$.value&&$.type!=="string.regexp"&&($.value=$.value.replace(/^\s*/,""))},W=function(){for(var z=v.length-1;!(z==0||v[z]!==" ");)z=z-1;v=v.slice(0,z+1)},F=function(){v=v.trimRight(),C=!1};l!==null;){if(p=k.getCurrentTokenRow(),k.$rowTokens,$=k.stepForward(),typeof l<"u"){if(_=l.value,i=0,E=u==="style"||w.$modeId==="ace/mode/css",R(l,"tag-open")?(A=!0,$&&(L=S.indexOf($.value)!==-1),_==="</"&&(L&&!C&&c<1&&c++,E&&(c=1),i=1,L=!1)):R(l,"tag-close")?A=!1:R(l,"comment.start")?L=!0:R(l,"comment.end")&&(L=!1),!A&&!c&&l.type==="paren.rparen"&&l.value.substr(0,1)==="}"&&c++,p!==h&&(c=p,h&&(c-=h)),c){for(F();c>0;c--)v+=`
`;C=!0,!R(l,"comment")&&!l.type.match(/^(comment|string)$/)&&(_=_.trimLeft())}if(_){if(l.type==="keyword"&&_.match(/^(if|else|elseif|for|foreach|while|switch)$/)?(P[o]=_,I(),g=!0,_.match(/^(else|elseif)$/)&&v.match(/\}[\s]*$/)&&(F(),a=!0)):l.type==="paren.lparen"?(I(),_.substr(-1)==="{"&&(g=!0,x=!1,A||(c=1)),_.substr(0,1)==="{"&&(a=!0,v.substr(-1)!=="["&&v.trimRight().substr(-1)==="["?(F(),a=!1):v.trimRight().substr(-1)===")"?F():W())):l.type==="paren.rparen"?(i=1,_.substr(0,1)==="}"&&(P[o-1]==="case"&&i++,v.trimRight().substr(-1)==="{"?F():(a=!0,E&&(c+=2))),_.substr(0,1)==="]"&&v.substr(-1)!=="}"&&v.trimRight().substr(-1)==="}"&&(a=!1,t++,F()),_.substr(0,1)===")"&&v.substr(-1)!=="("&&v.trimRight().substr(-1)==="("&&(a=!1,t++,F()),W()):(l.type==="keyword.operator"||l.type==="keyword")&&_.match(/^(=|==|===|!=|!==|&&|\|\||and|or|xor|\+=|.=|>|>=|<|<=|=>)$/)?(F(),I(),a=!0,g=!0):l.type==="punctuation.operator"&&_===";"?(F(),I(),g=!0,E&&c++):l.type==="punctuation.operator"&&_.match(/^(:|,)$/)?(F(),I(),_.match(/^(,)$/)&&d>0&&r===0&&T.lineBreaksAfterCommasInCurlyBlock?c++:(g=!0,C=!1)):l.type==="support.php_tag"&&_==="?>"&&!C?(F(),a=!0):R(l,"attribute-name")&&v.substr(-1).match(/^\s$/)?a=!0:R(l,"attribute-equals")?(W(),I()):R(l,"tag-close")?(W(),_==="/>"&&(a=!0)):l.type==="keyword"&&_.match(/^(case|default)$/)&&D&&(i=1),C&&!(l.type.match(/^(comment)$/)&&!_.substr(0,1).match(/^[/#]$/))&&!(l.type.match(/^(string)$/)&&!_.substr(0,1).match(/^['"@]$/))){if(t=n,o>e)for(t++,s=o;s>e;s--)O[s]=t;else o<e&&(t=O[o]);for(e=o,n=t,i&&(t-=i),x&&!r&&(t++,x=!1),s=0;s<t;s++)v+=b}if(l.type==="keyword"&&_.match(/^(case|default)$/)?D===!1&&(P[o]=_,o++,D=!0):l.type==="keyword"&&_.match(/^(break)$/)&&P[o-1]&&P[o-1].match(/^(case|default)$/)&&(o--,D=!1),l.type==="paren.lparen"&&(r+=(_.match(/\(/g)||[]).length,d+=(_.match(/\{/g)||[]).length,o+=_.length),l.type==="keyword"&&_.match(/^(if|else|elseif|for|while)$/)?(x=!0,r=0):!r&&_.trim()&&l.type!=="comment"&&(x=!1),l.type==="paren.rparen")for(r-=(_.match(/\)/g)||[]).length,d-=(_.match(/\}/g)||[]).length,s=0;s<_.length;s++)o--,_.substr(s,1)==="}"&&P[o]==="case"&&o--;l.type=="text"&&(_=_.replace(/\s+$/," ")),a&&!C&&(W(),v.substr(-1)!==`
`&&(v+=" ")),v+=_,g&&(v+=" "),C=!1,a=!1,g=!1,(R(l,"tag-close")&&(L||S.indexOf(u)!==-1)||R(l,"doctype")&&_===">")&&(L&&$&&$.value==="</"?c=-1:c=1),$&&m.indexOf($.value)===-1&&(R(l,"tag-open")&&_==="</"?o--:R(l,"tag-open")&&_==="<"?o++:R(l,"tag-close")&&_==="/>"&&o--),R(l,"tag-name")&&(u=_),h=p}}l=$}v=v.trim(),w.doc.setValue(v)},y.commands=[{name:"beautify",description:"Format selection (Beautify)",exec:function(w){y.beautify(w.session)},bindKey:"Ctrl-Shift-B"}]}),function(){ace.require(["ace/ext/beautify"],function(f){H&&(H.exports=f)})}()})(ne);
