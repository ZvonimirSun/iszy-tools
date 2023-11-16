var Y={exports:{}};(function(P,j){ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(g,y,I){var R=g("../lib/oop");g("../lib/lang");var T=g("./text_highlight_rules").TextHighlightRules,k=y.supportType="align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index",$=y.supportFunction="rgb|rgba|url|attr|counter|counters",u=y.supportConstant="absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|flex-end|flex-start|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom",x=y.supportConstantColor="aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen",v=y.supportConstantFonts="arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace",_=y.numRe="\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))",S=y.pseudoElements="(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b",C=y.pseudoClasses="(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b",w=function(){var s=this.createKeywordMapper({"support.function":$,"support.constant":u,"support.type":k,"support.constant.color":x,"support.constant.fonts":v},"text",!0);this.$rules={start:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"ruleset"},{token:"paren.rparen",regex:"\\}"},{token:"string",regex:"@(?!viewport)",next:"media"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"keyword",regex:"%"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant.numeric",regex:_},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:!0}],media:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"start"},{token:"paren.rparen",regex:"\\}",next:"start"},{token:"string",regex:";",next:"start"},{token:"keyword",regex:"(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"}],comments:[{token:"comment",regex:"\\/\\*",push:[{token:"comment",regex:"\\*\\/",next:"pop"},{defaultToken:"comment"}]}],ruleset:[{regex:"-(webkit|ms|moz|o)-",token:"text"},{token:"punctuation.operator",regex:"[:;]"},{token:"paren.rparen",regex:"\\}",next:"start"},{include:["strings","url","comments"]},{token:["constant.numeric","keyword"],regex:"("+_+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"},{token:"constant.numeric",regex:_},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:["punctuation","entity.other.attribute-name.pseudo-element.css"],regex:S},{token:["punctuation","entity.other.attribute-name.pseudo-class.css"],regex:C},{include:"url"},{token:s,regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"},{caseInsensitive:!0}],url:[{token:"support.function",regex:"(?:url(:?-prefix)?|domain|regexp)\\(",push:[{token:"support.function",regex:"\\)",next:"pop"},{defaultToken:"string"}]}],strings:[{token:"string.start",regex:"'",push:[{token:"string.end",regex:"'|$",next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]},{token:"string.start",regex:'"',push:[{token:"string.end",regex:'"|$',next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]}],escapes:[{token:"constant.language.escape",regex:/\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/}]},this.normalizeRules()};R.inherits(w,T),y.CssHighlightRules=w}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(g,y,I){var R=g("../range").Range,T=function(){};(function(){this.checkOutdent=function(k,$){return/^\s+$/.test(k)?/^\s*\}/.test($):!1},this.autoOutdent=function(k,$){var u=k.getLine($),x=u.match(/^(\s*\})/);if(!x)return 0;var v=x[1].length,_=k.findMatchingBracket({row:$,column:v});if(!_||_.row==$)return 0;var S=this.$getIndent(k.getLine(_.row));k.replace(new R($,0,$,v-1),S)},this.$getIndent=function(k){return k.match(/^\s*/)[0]}}).call(T.prototype),y.MatchingBraceOutdent=T}),ace.define("ace/mode/css_completions",["require","exports","module"],function(g,y,I){var R={background:{"#$0":1},"background-color":{"#$0":1,transparent:1,fixed:1},"background-image":{"url('/$0')":1},"background-repeat":{repeat:1,"repeat-x":1,"repeat-y":1,"no-repeat":1,inherit:1},"background-position":{bottom:2,center:2,left:2,right:2,top:2,inherit:2},"background-attachment":{scroll:1,fixed:1},"background-size":{cover:1,contain:1},"background-clip":{"border-box":1,"padding-box":1,"content-box":1},"background-origin":{"border-box":1,"padding-box":1,"content-box":1},border:{"solid $0":1,"dashed $0":1,"dotted $0":1,"#$0":1},"border-color":{"#$0":1},"border-style":{solid:2,dashed:2,dotted:2,double:2,groove:2,hidden:2,inherit:2,inset:2,none:2,outset:2,ridged:2},"border-collapse":{collapse:1,separate:1},bottom:{px:1,em:1,"%":1},clear:{left:1,right:1,both:1,none:1},color:{"#$0":1,"rgb(#$00,0,0)":1},cursor:{default:1,pointer:1,move:1,text:1,wait:1,help:1,progress:1,"n-resize":1,"ne-resize":1,"e-resize":1,"se-resize":1,"s-resize":1,"sw-resize":1,"w-resize":1,"nw-resize":1},display:{none:1,block:1,inline:1,"inline-block":1,"table-cell":1},"empty-cells":{show:1,hide:1},float:{left:1,right:1,none:1},"font-family":{Arial:2,"Comic Sans MS":2,Consolas:2,"Courier New":2,Courier:2,Georgia:2,Monospace:2,"Sans-Serif":2,"Segoe UI":2,Tahoma:2,"Times New Roman":2,"Trebuchet MS":2,Verdana:1},"font-size":{px:1,em:1,"%":1},"font-weight":{bold:1,normal:1},"font-style":{italic:1,normal:1},"font-variant":{normal:1,"small-caps":1},height:{px:1,em:1,"%":1},left:{px:1,em:1,"%":1},"letter-spacing":{normal:1},"line-height":{normal:1},"list-style-type":{none:1,disc:1,circle:1,square:1,decimal:1,"decimal-leading-zero":1,"lower-roman":1,"upper-roman":1,"lower-greek":1,"lower-latin":1,"upper-latin":1,georgian:1,"lower-alpha":1,"upper-alpha":1},margin:{px:1,em:1,"%":1},"margin-right":{px:1,em:1,"%":1},"margin-left":{px:1,em:1,"%":1},"margin-top":{px:1,em:1,"%":1},"margin-bottom":{px:1,em:1,"%":1},"max-height":{px:1,em:1,"%":1},"max-width":{px:1,em:1,"%":1},"min-height":{px:1,em:1,"%":1},"min-width":{px:1,em:1,"%":1},overflow:{hidden:1,visible:1,auto:1,scroll:1},"overflow-x":{hidden:1,visible:1,auto:1,scroll:1},"overflow-y":{hidden:1,visible:1,auto:1,scroll:1},padding:{px:1,em:1,"%":1},"padding-top":{px:1,em:1,"%":1},"padding-right":{px:1,em:1,"%":1},"padding-bottom":{px:1,em:1,"%":1},"padding-left":{px:1,em:1,"%":1},"page-break-after":{auto:1,always:1,avoid:1,left:1,right:1},"page-break-before":{auto:1,always:1,avoid:1,left:1,right:1},position:{absolute:1,relative:1,fixed:1,static:1},right:{px:1,em:1,"%":1},"table-layout":{fixed:1,auto:1},"text-decoration":{none:1,underline:1,"line-through":1,blink:1},"text-align":{left:1,right:1,center:1,justify:1},"text-transform":{capitalize:1,uppercase:1,lowercase:1,none:1},top:{px:1,em:1,"%":1},"vertical-align":{top:1,bottom:1},visibility:{hidden:1,visible:1},"white-space":{nowrap:1,normal:1,pre:1,"pre-line":1,"pre-wrap":1},width:{px:1,em:1,"%":1},"word-spacing":{normal:1},filter:{"alpha(opacity=$0100)":1},"text-shadow":{"$02px 2px 2px #777":1},"text-overflow":{"ellipsis-word":1,clip:1,ellipsis:1},"-moz-border-radius":1,"-moz-border-radius-topright":1,"-moz-border-radius-bottomright":1,"-moz-border-radius-topleft":1,"-moz-border-radius-bottomleft":1,"-webkit-border-radius":1,"-webkit-border-top-right-radius":1,"-webkit-border-top-left-radius":1,"-webkit-border-bottom-right-radius":1,"-webkit-border-bottom-left-radius":1,"-moz-box-shadow":1,"-webkit-box-shadow":1,transform:{"rotate($00deg)":1,"skew($00deg)":1},"-moz-transform":{"rotate($00deg)":1,"skew($00deg)":1},"-webkit-transform":{"rotate($00deg)":1,"skew($00deg)":1}},T=function(){};(function(){this.completionsDefined=!1,this.defineCompletions=function(){if(document){var k=document.createElement("c").style;for(var $ in k)if(typeof k[$]=="string"){var u=$.replace(/[A-Z]/g,function(x){return"-"+x.toLowerCase()});R.hasOwnProperty(u)||(R[u]=1)}}this.completionsDefined=!0},this.getCompletions=function(k,$,u,x){if(this.completionsDefined||this.defineCompletions(),k==="ruleset"||$.$mode.$id=="ace/mode/scss"){var v=$.getLine(u.row).substr(0,u.column),_=/\([^)]*$/.test(v);return _&&(v=v.substr(v.lastIndexOf("(")+1)),/:[^;]+$/.test(v)?this.getPropertyValueCompletions(k,$,u,x):this.getPropertyCompletions(k,$,u,x,_)}return[]},this.getPropertyCompletions=function(k,$,u,x,v){v=v||!1;var _=Object.keys(R);return _.map(function(S){return{caption:S,snippet:S+": $0"+(v?"":";"),meta:"property",score:1e6}})},this.getPropertyValueCompletions=function(k,$,u,x){var v=$.getLine(u.row).substr(0,u.column),_=(/([\w\-]+):[^:]*$/.exec(v)||{})[1];if(!_)return[];var S=[];return _ in R&&typeof R[_]=="object"&&(S=Object.keys(R[_])),S.map(function(C){return{caption:C,snippet:C,meta:"property value",score:1e6}})}}).call(T.prototype),y.CssCompletions=T}),ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"],function(g,y,I){var R=g("../../lib/oop");g("../behaviour").Behaviour;var T=g("./cstyle").CstyleBehaviour,k=g("../../token_iterator").TokenIterator,$=function(){this.inherit(T),this.add("colon","insertion",function(u,x,v,_,S){if(S===":"&&v.selection.isEmpty()){var C=v.getCursorPosition(),w=new k(_,C.row,C.column),s=w.getCurrentToken();if(s&&s.value.match(/\s+/)&&(s=w.stepBackward()),s&&s.type==="support.type"){var m=_.doc.getLine(C.row),i=m.substring(C.column,C.column+1);if(i===":")return{text:"",selection:[1,1]};if(/^(\s+[^;]|\s*$)/.test(m.substring(C.column)))return{text:":;",selection:[1,1]}}}}),this.add("colon","deletion",function(u,x,v,_,S){var C=_.doc.getTextRange(S);if(!S.isMultiLine()&&C===":"){var w=v.getCursorPosition(),s=new k(_,w.row,w.column),m=s.getCurrentToken();if(m&&m.value.match(/\s+/)&&(m=s.stepBackward()),m&&m.type==="support.type"){var i=_.doc.getLine(S.start.row),d=i.substring(S.end.column,S.end.column+1);if(d===";")return S.end.column++,S}}}),this.add("semicolon","insertion",function(u,x,v,_,S){if(S===";"&&v.selection.isEmpty()){var C=v.getCursorPosition(),w=_.doc.getLine(C.row),s=w.substring(C.column,C.column+1);if(s===";")return{text:"",selection:[1,1]}}}),this.add("!important","insertion",function(u,x,v,_,S){if(S==="!"&&v.selection.isEmpty()){var C=v.getCursorPosition(),w=_.doc.getLine(C.row);if(/^\s*(;|}|$)/.test(w.substring(C.column)))return{text:"!important",selection:[10,10]}}})};R.inherits($,T),y.CssBehaviour=$}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(g,y,I){var R=g("../../lib/oop"),T=g("../../range").Range,k=g("./fold_mode").FoldMode,$=y.FoldMode=function(u){u&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+u.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+u.end)))};R.inherits($,k),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(u,x,v){var _=u.getLine(v);if(this.singleLineBlockCommentRe.test(_)&&!this.startRegionRe.test(_)&&!this.tripleStarBlockCommentRe.test(_))return"";var S=this._getFoldWidgetBase(u,x,v);return!S&&this.startRegionRe.test(_)?"start":S},this.getFoldWidgetRange=function(u,x,v,_){var S=u.getLine(v);if(this.startRegionRe.test(S))return this.getCommentRegionBlock(u,S,v);var s=S.match(this.foldingStartMarker);if(s){var C=s.index;if(s[1])return this.openingBracketBlock(u,s[1],v,C);var w=u.getCommentFoldRange(v,C+s[0].length,1);return w&&!w.isMultiLine()&&(_?w=this.getSectionRange(u,v):x!="all"&&(w=null)),w}if(x!=="markbegin"){var s=S.match(this.foldingStopMarker);if(s){var C=s.index+s[0].length;return s[1]?this.closingBracketBlock(u,s[1],v,C):u.getCommentFoldRange(v,C,-1)}}},this.getSectionRange=function(u,x){var v=u.getLine(x),_=v.search(/\S/),S=x,C=v.length;x=x+1;for(var w=x,s=u.getLength();++x<s;){v=u.getLine(x);var m=v.search(/\S/);if(m!==-1){if(_>m)break;var i=this.getFoldWidgetRange(u,"all",x);if(i){if(i.start.row<=S)break;if(i.isMultiLine())x=i.end.row;else if(_==m)break}w=x}}return new T(S,C,w,u.getLine(w).length)},this.getCommentRegionBlock=function(u,x,v){for(var _=x.search(/\s*$/),S=u.getLength(),C=v,w=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,s=1;++v<S;){x=u.getLine(v);var m=w.exec(x);if(m&&(m[1]?s--:s++,!s))break}var i=v;if(i>C)return new T(C,_,i,x.length)}}).call($.prototype)}),ace.define("ace/mode/css",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/css_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/css_completions","ace/mode/behaviour/css","ace/mode/folding/cstyle"],function(g,y,I){var R=g("../lib/oop"),T=g("./text").Mode,k=g("./css_highlight_rules").CssHighlightRules,$=g("./matching_brace_outdent").MatchingBraceOutdent,u=g("../worker/worker_client").WorkerClient,x=g("./css_completions").CssCompletions,v=g("./behaviour/css").CssBehaviour,_=g("./folding/cstyle").FoldMode,S=function(){this.HighlightRules=k,this.$outdent=new $,this.$behaviour=new v,this.$completer=new x,this.foldingRules=new _};R.inherits(S,T),(function(){this.foldingRules="cStyle",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(C,w,s){var m=this.$getIndent(w),i=this.getTokenizer().getLineTokens(w,C).tokens;if(i.length&&i[i.length-1].type=="comment")return m;var d=w.match(/^.*\{\s*$/);return d&&(m+=s),m},this.checkOutdent=function(C,w,s){return this.$outdent.checkOutdent(w,s)},this.autoOutdent=function(C,w,s){this.$outdent.autoOutdent(w,s)},this.getCompletions=function(C,w,s,m){return this.$completer.getCompletions(C,w,s,m)},this.createWorker=function(C){var w=new u(["ace"],"ace/mode/css_worker","Worker");return w.attachToDocument(C.getDocument()),w.on("annotate",function(s){C.setAnnotations(s.data)}),w.on("terminate",function(){C.clearAnnotations()}),w},this.$id="ace/mode/css",this.snippetFileId="ace/snippets/css"}).call(S.prototype),y.Mode=S}),function(){ace.require(["ace/mode/css"],function(g){P&&(P.exports=g)})}()})(Y);var Z={exports:{}};(function(P,j){ace.define("ace/theme/textmate",["require","exports","module","ace/theme/textmate-css","ace/lib/dom"],function(g,y,I){y.isDark=!1,y.cssClass="ace-tm",y.cssText=g("./textmate-css"),y.$id="ace/theme/textmate";var R=g("../lib/dom");R.importCssString(y.cssText,y.cssClass,!1)}),function(){ace.require(["ace/theme/textmate"],function(g){P&&(P.exports=g)})}()})(Z);var Q={exports:{}};(function(P,j){ace.define("ace/theme/twilight-css",["require","exports","module"],function(g,y,I){I.exports=`.ace-twilight .ace_gutter {
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
`}),ace.define("ace/theme/twilight",["require","exports","module","ace/theme/twilight-css","ace/lib/dom"],function(g,y,I){y.isDark=!0,y.cssClass="ace-twilight",y.cssText=g("./twilight-css");var R=g("../lib/dom");R.importCssString(y.cssText,y.cssClass,!1)}),function(){ace.require(["ace/theme/twilight"],function(g){P&&(P.exports=g)})}()})(Q);var J={exports:{}};(function(P,j){ace.define("ace/snippets/css.snippets",["require","exports","module"],function(g,y,I){I.exports=`snippet .
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
`}),ace.define("ace/snippets/css",["require","exports","module","ace/snippets/css.snippets"],function(g,y,I){y.snippetText=g("./css.snippets"),y.scope="css"}),function(){ace.require(["ace/snippets/css"],function(g){P&&(P.exports=g)})}()})(J);var ee={exports:{}};(function(P,j){ace.define("ace/ext/searchbox-css",["require","exports","module"],function(g,y,I){I.exports=`

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
}`}),ace.define("ace/ext/searchbox",["require","exports","module","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/ext/searchbox-css","ace/keyboard/hash_handler","ace/lib/keys","ace/config"],function(g,y,I){var R=g("../lib/dom"),T=g("../lib/lang"),k=g("../lib/event"),$=g("./searchbox-css"),u=g("../keyboard/hash_handler").HashHandler,x=g("../lib/keys"),v=g("../config").nls,_=999;R.importCssString($,"ace_searchbox",!1);var S=function(){function s(m,i,d){var l=R.createElement("div");R.buildDom(["div",{class:"ace_search right"},["span",{action:"hide",class:"ace_searchbtn_close"}],["div",{class:"ace_search_form"},["input",{class:"ace_search_field",placeholder:v("Search for"),spellcheck:"false"}],["span",{action:"findPrev",class:"ace_searchbtn prev"},"​"],["span",{action:"findNext",class:"ace_searchbtn next"},"​"],["span",{action:"findAll",class:"ace_searchbtn",title:"Alt-Enter"},v("All")]],["div",{class:"ace_replace_form"},["input",{class:"ace_search_field",placeholder:v("Replace with"),spellcheck:"false"}],["span",{action:"replaceAndFindNext",class:"ace_searchbtn"},v("Replace")],["span",{action:"replaceAll",class:"ace_searchbtn"},v("All")]],["div",{class:"ace_search_options"},["span",{action:"toggleReplace",class:"ace_button",title:v("Toggle Replace mode"),style:"float:left;margin-top:-2px;padding:0 5px;"},"+"],["span",{class:"ace_search_counter"}],["span",{action:"toggleRegexpMode",class:"ace_button",title:v("RegExp Search")},".*"],["span",{action:"toggleCaseSensitive",class:"ace_button",title:v("CaseSensitive Search")},"Aa"],["span",{action:"toggleWholeWords",class:"ace_button",title:v("Whole Word Search")},"\\b"],["span",{action:"searchInSelection",class:"ace_button",title:v("Search In Selection")},"S"]]],l),this.element=l.firstChild,this.setSession=this.setSession.bind(this),this.$init(),this.setEditor(m),R.importCssString($,"ace_searchbox",m.container)}return s.prototype.setEditor=function(m){m.searchBox=this,m.renderer.scroller.appendChild(this.element),this.editor=m},s.prototype.setSession=function(m){this.searchRange=null,this.$syncOptions(!0)},s.prototype.$initElements=function(m){this.searchBox=m.querySelector(".ace_search_form"),this.replaceBox=m.querySelector(".ace_replace_form"),this.searchOption=m.querySelector("[action=searchInSelection]"),this.replaceOption=m.querySelector("[action=toggleReplace]"),this.regExpOption=m.querySelector("[action=toggleRegexpMode]"),this.caseSensitiveOption=m.querySelector("[action=toggleCaseSensitive]"),this.wholeWordOption=m.querySelector("[action=toggleWholeWords]"),this.searchInput=this.searchBox.querySelector(".ace_search_field"),this.replaceInput=this.replaceBox.querySelector(".ace_search_field"),this.searchCounter=m.querySelector(".ace_search_counter")},s.prototype.$init=function(){var m=this.element;this.$initElements(m);var i=this;k.addListener(m,"mousedown",function(d){setTimeout(function(){i.activeInput.focus()},0),k.stopPropagation(d)}),k.addListener(m,"click",function(d){var l=d.target||d.srcElement,c=l.getAttribute("action");c&&i[c]?i[c]():i.$searchBarKb.commands[c]&&i.$searchBarKb.commands[c].exec(i),k.stopPropagation(d)}),k.addCommandKeyListener(m,function(d,l,c){var o=x.keyCodeToString(c),t=i.$searchBarKb.findKeyCommand(l,o);t&&t.exec&&(t.exec(i),k.stopEvent(d))}),this.$onChange=T.delayedCall(function(){i.find(!1,!1)}),k.addListener(this.searchInput,"input",function(){i.$onChange.schedule(20)}),k.addListener(this.searchInput,"focus",function(){i.activeInput=i.searchInput,i.searchInput.value&&i.highlight()}),k.addListener(this.replaceInput,"focus",function(){i.activeInput=i.replaceInput,i.searchInput.value&&i.highlight()})},s.prototype.setSearchRange=function(m){this.searchRange=m,m?this.searchRangeMarker=this.editor.session.addMarker(m,"ace_active-line"):this.searchRangeMarker&&(this.editor.session.removeMarker(this.searchRangeMarker),this.searchRangeMarker=null)},s.prototype.$syncOptions=function(m){R.setCssClass(this.replaceOption,"checked",this.searchRange),R.setCssClass(this.searchOption,"checked",this.searchOption.checked),this.replaceOption.textContent=this.replaceOption.checked?"-":"+",R.setCssClass(this.regExpOption,"checked",this.regExpOption.checked),R.setCssClass(this.wholeWordOption,"checked",this.wholeWordOption.checked),R.setCssClass(this.caseSensitiveOption,"checked",this.caseSensitiveOption.checked);var i=this.editor.getReadOnly();this.replaceOption.style.display=i?"none":"",this.replaceBox.style.display=this.replaceOption.checked&&!i?"":"none",this.find(!1,!1,m)},s.prototype.highlight=function(m){this.editor.session.highlight(m||this.editor.$search.$options.re),this.editor.renderer.updateBackMarkers()},s.prototype.find=function(m,i,d){var l=this.editor.find(this.searchInput.value,{skipCurrent:m,backwards:i,wrap:!0,regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked,preventScroll:d,range:this.searchRange}),c=!l&&this.searchInput.value;R.setCssClass(this.searchBox,"ace_nomatch",c),this.editor._emit("findSearchBox",{match:!c}),this.highlight(),this.updateCounter()},s.prototype.updateCounter=function(){var m=this.editor,i=m.$search.$options.re,d=0,l=0;if(i){var c=this.searchRange?m.session.getTextRange(this.searchRange):m.getValue(),o=m.session.doc.positionToIndex(m.selection.anchor);this.searchRange&&(o-=m.session.doc.positionToIndex(this.searchRange.start));for(var t=i.lastIndex=0,e;(e=i.exec(c))&&(d++,t=e.index,t<=o&&l++,!(d>_||!e[0]&&(i.lastIndex=t+=1,t>=c.length))););}this.searchCounter.textContent=v("$0 of $1",[l,d>_?_+"+":d])},s.prototype.findNext=function(){this.find(!0,!1)},s.prototype.findPrev=function(){this.find(!0,!0)},s.prototype.findAll=function(){var m=this.editor.findAll(this.searchInput.value,{regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked}),i=!m&&this.searchInput.value;R.setCssClass(this.searchBox,"ace_nomatch",i),this.editor._emit("findSearchBox",{match:!i}),this.highlight(),this.hide()},s.prototype.replace=function(){this.editor.getReadOnly()||this.editor.replace(this.replaceInput.value)},s.prototype.replaceAndFindNext=function(){this.editor.getReadOnly()||(this.editor.replace(this.replaceInput.value),this.findNext())},s.prototype.replaceAll=function(){this.editor.getReadOnly()||this.editor.replaceAll(this.replaceInput.value)},s.prototype.hide=function(){this.active=!1,this.setSearchRange(null),this.editor.off("changeSession",this.setSession),this.element.style.display="none",this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb),this.editor.focus()},s.prototype.show=function(m,i){this.active=!0,this.editor.on("changeSession",this.setSession),this.element.style.display="",this.replaceOption.checked=i,m&&(this.searchInput.value=m),this.searchInput.focus(),this.searchInput.select(),this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb),this.$syncOptions(!0)},s.prototype.isFocused=function(){var m=document.activeElement;return m==this.searchInput||m==this.replaceInput},s}(),C=new u;C.bindKeys({"Ctrl-f|Command-f":function(s){var m=s.isReplace=!s.isReplace;s.replaceBox.style.display=m?"":"none",s.replaceOption.checked=!1,s.$syncOptions(),s.searchInput.focus()},"Ctrl-H|Command-Option-F":function(s){s.editor.getReadOnly()||(s.replaceOption.checked=!0,s.$syncOptions(),s.replaceInput.focus())},"Ctrl-G|Command-G":function(s){s.findNext()},"Ctrl-Shift-G|Command-Shift-G":function(s){s.findPrev()},esc:function(s){setTimeout(function(){s.hide()})},Return:function(s){s.activeInput==s.replaceInput&&s.replace(),s.findNext()},"Shift-Return":function(s){s.activeInput==s.replaceInput&&s.replace(),s.findPrev()},"Alt-Return":function(s){s.activeInput==s.replaceInput&&s.replaceAll(),s.findAll()},Tab:function(s){(s.activeInput==s.replaceInput?s.searchInput:s.replaceInput).focus()}}),C.addCommands([{name:"toggleRegexpMode",bindKey:{win:"Alt-R|Alt-/",mac:"Ctrl-Alt-R|Ctrl-Alt-/"},exec:function(s){s.regExpOption.checked=!s.regExpOption.checked,s.$syncOptions()}},{name:"toggleCaseSensitive",bindKey:{win:"Alt-C|Alt-I",mac:"Ctrl-Alt-R|Ctrl-Alt-I"},exec:function(s){s.caseSensitiveOption.checked=!s.caseSensitiveOption.checked,s.$syncOptions()}},{name:"toggleWholeWords",bindKey:{win:"Alt-B|Alt-W",mac:"Ctrl-Alt-B|Ctrl-Alt-W"},exec:function(s){s.wholeWordOption.checked=!s.wholeWordOption.checked,s.$syncOptions()}},{name:"toggleReplace",exec:function(s){s.replaceOption.checked=!s.replaceOption.checked,s.$syncOptions()}},{name:"searchInSelection",exec:function(s){s.searchOption.checked=!s.searchRange,s.setSearchRange(s.searchOption.checked&&s.editor.getSelectionRange()),s.$syncOptions()}}]);var w=new u([{bindKey:"Esc",name:"closeSearchBar",exec:function(s){s.searchBox.hide()}}]);S.prototype.$searchBarKb=C,S.prototype.$closeSearchBarKb=w,y.SearchBox=S,y.Search=function(s,m){var i=s.searchBox||new S(s);i.show(s.session.getTextRange(),m)}}),function(){ace.require(["ace/ext/searchbox"],function(g){P&&(P.exports=g)})}()})(ee);var te={exports:{}};(function(P,j){ace.define("ace/snippets",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter","ace/lib/lang","ace/range","ace/range_list","ace/keyboard/hash_handler","ace/tokenizer","ace/clipboard","ace/editor"],function(g,y,I){var R=g("./lib/dom"),T=g("./lib/oop"),k=g("./lib/event_emitter").EventEmitter,$=g("./lib/lang"),u=g("./range").Range,x=g("./range_list").RangeList,v=g("./keyboard/hash_handler").HashHandler,_=g("./tokenizer").Tokenizer,S=g("./clipboard"),C={CURRENT_WORD:function(o){return o.session.getTextRange(o.session.getWordRange())},SELECTION:function(o,t,e){var a=o.session.getTextRange();return e?a.replace(/\n\r?([ \t]*\S)/g,`
`+e+"$1"):a},CURRENT_LINE:function(o){return o.session.getLine(o.getCursorPosition().row)},PREV_LINE:function(o){return o.session.getLine(o.getCursorPosition().row-1)},LINE_INDEX:function(o){return o.getCursorPosition().row},LINE_NUMBER:function(o){return o.getCursorPosition().row+1},SOFT_TABS:function(o){return o.session.getUseSoftTabs()?"YES":"NO"},TAB_SIZE:function(o){return o.session.getTabSize()},CLIPBOARD:function(o){return S.getText&&S.getText()},FILENAME:function(o){return/[^/\\]*$/.exec(this.FILEPATH(o))[0]},FILENAME_BASE:function(o){return/[^/\\]*$/.exec(this.FILEPATH(o))[0].replace(/\.[^.]*$/,"")},DIRECTORY:function(o){return this.FILEPATH(o).replace(/[^/\\]*$/,"")},FILEPATH:function(o){return"/not implemented.txt"},WORKSPACE_NAME:function(){return"Unknown"},FULLNAME:function(){return"Unknown"},BLOCK_COMMENT_START:function(o){var t=o.session.$mode||{};return t.blockComment&&t.blockComment.start||""},BLOCK_COMMENT_END:function(o){var t=o.session.$mode||{};return t.blockComment&&t.blockComment.end||""},LINE_COMMENT:function(o){var t=o.session.$mode||{};return t.lineCommentStart||""},CURRENT_YEAR:w.bind(null,{year:"numeric"}),CURRENT_YEAR_SHORT:w.bind(null,{year:"2-digit"}),CURRENT_MONTH:w.bind(null,{month:"numeric"}),CURRENT_MONTH_NAME:w.bind(null,{month:"long"}),CURRENT_MONTH_NAME_SHORT:w.bind(null,{month:"short"}),CURRENT_DATE:w.bind(null,{day:"2-digit"}),CURRENT_DAY_NAME:w.bind(null,{weekday:"long"}),CURRENT_DAY_NAME_SHORT:w.bind(null,{weekday:"short"}),CURRENT_HOUR:w.bind(null,{hour:"2-digit",hour12:!1}),CURRENT_MINUTE:w.bind(null,{minute:"2-digit"}),CURRENT_SECOND:w.bind(null,{second:"2-digit"})};C.SELECTED_TEXT=C.SELECTION;function w(o){var t=new Date().toLocaleString("en-us",o);return t.length==1?"0"+t:t}var s=function(){function o(){this.snippetMap={},this.snippetNameMap={},this.variables=C}return o.prototype.getTokenizer=function(){return o.$tokenizer||this.createTokenizer()},o.prototype.createTokenizer=function(){function t(n){return n=n.substr(1),/^\d+$/.test(n)?[{tabstopId:parseInt(n,10)}]:[{text:n}]}function e(n){return"(?:[^\\\\"+n+"]|\\\\.)"}var a={regex:"/("+e("/")+"+)/",onMatch:function(n,r,h){var p=h[0];return p.fmtString=!0,p.guard=n.slice(1,-1),p.flag="",""},next:"formatString"};return o.$tokenizer=new _({start:[{regex:/\\./,onMatch:function(n,r,h){var p=n[1];return(p=="}"&&h.length||"`$\\".indexOf(p)!=-1)&&(n=p),[n]}},{regex:/}/,onMatch:function(n,r,h){return[h.length?h.shift():n]}},{regex:/\$(?:\d+|\w+)/,onMatch:t},{regex:/\$\{[\dA-Z_a-z]+/,onMatch:function(n,r,h){var p=t(n.substr(1));return h.unshift(p[0]),p},next:"snippetVar"},{regex:/\n/,token:"newline",merge:!1}],snippetVar:[{regex:"\\|"+e("\\|")+"*\\|",onMatch:function(n,r,h){var p=n.slice(1,-1).replace(/\\[,|\\]|,/g,function(b){return b.length==2?b[1]:"\0"}).split("\0").map(function(b){return{value:b}});return h[0].choices=p,[p[0]]},next:"start"},a,{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"start"}],formatString:[{regex:/:/,onMatch:function(n,r,h){return h.length&&h[0].expectElse?(h[0].expectElse=!1,h[0].ifEnd={elseEnd:h[0]},[h[0].ifEnd]):":"}},{regex:/\\./,onMatch:function(n,r,h){var p=n[1];return p=="}"&&h.length||"`$\\".indexOf(p)!=-1?n=p:p=="n"?n=`
`:p=="t"?n="	":"ulULE".indexOf(p)!=-1&&(n={changeCase:p,local:p>"a"}),[n]}},{regex:"/\\w*}",onMatch:function(n,r,h){var p=h.shift();return p&&(p.flag=n.slice(1,-1)),this.next=p&&p.tabstopId?"start":"",[p||n]},next:"start"},{regex:/\$(?:\d+|\w+)/,onMatch:function(n,r,h){return[{text:n.slice(1)}]}},{regex:/\${\w+/,onMatch:function(n,r,h){var p={text:n.slice(2)};return h.unshift(p),[p]},next:"formatStringVar"},{regex:/\n/,token:"newline",merge:!1},{regex:/}/,onMatch:function(n,r,h){var p=h.shift();return this.next=p&&p.tabstopId?"start":"",[p||n]},next:"start"}],formatStringVar:[{regex:/:\/\w+}/,onMatch:function(n,r,h){var p=h[0];return p.formatFunction=n.slice(2,-1),[h.shift()]},next:"formatString"},a,{regex:/:[\?\-+]?/,onMatch:function(n,r,h){n[1]=="+"&&(h[0].ifEnd=h[0]),n[1]=="?"&&(h[0].expectElse=!0)},next:"formatString"},{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"formatString"}]}),o.$tokenizer},o.prototype.tokenizeTmSnippet=function(t,e){return this.getTokenizer().getLineTokens(t,e).tokens.map(function(a){return a.value||a})},o.prototype.getVariableValue=function(t,e,a){if(/^\d+$/.test(e))return(this.variables.__||{})[e]||"";if(/^[A-Z]\d+$/.test(e))return(this.variables[e[0]+"__"]||{})[e.substr(1)]||"";if(e=e.replace(/^TM_/,""),!this.variables.hasOwnProperty(e))return"";var n=this.variables[e];return typeof n=="function"&&(n=this.variables[e](t,e,a)),n??""},o.prototype.tmStrFormat=function(t,e,a){if(!e.fmt)return t;var n=e.flag||"",r=e.guard;r=new RegExp(r,n.replace(/[^gim]/g,""));var h=typeof e.fmt=="string"?this.tokenizeTmSnippet(e.fmt,"formatString"):e.fmt,p=this,b=t.replace(r,function(){var f=p.variables.__;p.variables.__=[].slice.call(arguments);for(var M=p.resolveVariables(h,a),A="E",L=0;L<M.length;L++){var E=M[L];if(typeof E=="object")if(M[L]="",E.changeCase&&E.local){var O=M[L+1];O&&typeof O=="string"&&(E.changeCase=="u"?M[L]=O[0].toUpperCase():M[L]=O[0].toLowerCase(),M[L+1]=O.substr(1))}else E.changeCase&&(A=E.changeCase);else A=="U"?M[L]=E.toUpperCase():A=="L"&&(M[L]=E.toLowerCase())}return p.variables.__=f,M.join("")});return b},o.prototype.tmFormatFunction=function(t,e,a){return e.formatFunction=="upcase"?t.toUpperCase():e.formatFunction=="downcase"?t.toLowerCase():t},o.prototype.resolveVariables=function(t,e){for(var a=[],n="",r=!0,h=0;h<t.length;h++){var p=t[h];if(typeof p=="string"){a.push(p),p==`
`?(r=!0,n=""):r&&(n=/^\t*/.exec(p)[0],r=/\S/.test(p));continue}if(p){if(r=!1,p.fmtString){var b=t.indexOf(p,h+1);b==-1&&(b=t.length),p.fmt=t.slice(h+1,b),h=b}if(p.text){var f=this.getVariableValue(e,p.text,n)+"";p.fmtString&&(f=this.tmStrFormat(f,p,e)),p.formatFunction&&(f=this.tmFormatFunction(f,p,e)),f&&!p.ifEnd?(a.push(f),M(p)):!f&&p.ifEnd&&M(p.ifEnd)}else p.elseEnd?M(p.elseEnd):(p.tabstopId!=null||p.changeCase!=null)&&a.push(p)}}function M(A){var L=t.indexOf(A,h+1);L!=-1&&(h=L)}return a},o.prototype.getDisplayTextForSnippet=function(t,e){var a=m.call(this,t,e);return a.text},o.prototype.insertSnippetForSelection=function(t,e,a){a===void 0&&(a={});var n=m.call(this,t,e,a),r=t.getSelectionRange(),h=t.session.replace(r,n.text),p=new i(t),b=t.inVirtualSelectionMode&&t.selection.index;p.addTabstops(n.tabstops,r.start,h,b)},o.prototype.insertSnippet=function(t,e,a){a===void 0&&(a={});var n=this;if(t.inVirtualSelectionMode)return n.insertSnippetForSelection(t,e,a);t.forEachSelection(function(){n.insertSnippetForSelection(t,e,a)},null,{keepOrder:!0}),t.tabstopManager&&t.tabstopManager.tabNext()},o.prototype.$getScope=function(t){var e=t.session.$mode.$id||"";if(e=e.split("/").pop(),e==="html"||e==="php"){e==="php"&&!t.session.$mode.inlinePhp&&(e="html");var a=t.getCursorPosition(),n=t.session.getState(a.row);typeof n=="object"&&(n=n[0]),n.substring&&(n.substring(0,3)=="js-"?e="javascript":n.substring(0,4)=="css-"?e="css":n.substring(0,4)=="php-"&&(e="php"))}return e},o.prototype.getActiveScopes=function(t){var e=this.$getScope(t),a=[e],n=this.snippetMap;return n[e]&&n[e].includeScopes&&a.push.apply(a,n[e].includeScopes),a.push("_"),a},o.prototype.expandWithTab=function(t,e){var a=this,n=t.forEachSelection(function(){return a.expandSnippetForSelection(t,e)},null,{keepOrder:!0});return n&&t.tabstopManager&&t.tabstopManager.tabNext(),n},o.prototype.expandSnippetForSelection=function(t,e){var a=t.getCursorPosition(),n=t.session.getLine(a.row),r=n.substring(0,a.column),h=n.substr(a.column),p=this.snippetMap,b;return this.getActiveScopes(t).some(function(f){var M=p[f];return M&&(b=this.findMatchingSnippet(M,r,h)),!!b},this),b?(e&&e.dryRun||(t.session.doc.removeInLine(a.row,a.column-b.replaceBefore.length,a.column+b.replaceAfter.length),this.variables.M__=b.matchBefore,this.variables.T__=b.matchAfter,this.insertSnippetForSelection(t,b.content),this.variables.M__=this.variables.T__=null),!0):!1},o.prototype.findMatchingSnippet=function(t,e,a){for(var n=t.length;n--;){var r=t[n];if(!(r.startRe&&!r.startRe.test(e))&&!(r.endRe&&!r.endRe.test(a))&&!(!r.startRe&&!r.endRe))return r.matchBefore=r.startRe?r.startRe.exec(e):[""],r.matchAfter=r.endRe?r.endRe.exec(a):[""],r.replaceBefore=r.triggerRe?r.triggerRe.exec(e)[0]:"",r.replaceAfter=r.endTriggerRe?r.endTriggerRe.exec(a)[0]:"",r}},o.prototype.register=function(t,e){var a=this.snippetMap,n=this.snippetNameMap,r=this;t||(t=[]);function h(f){return f&&!/^\^?\(.*\)\$?$|^\\b$/.test(f)&&(f="(?:"+f+")"),f||""}function p(f,M,A){return f=h(f),M=h(M),A?(f=M+f,f&&f[f.length-1]!="$"&&(f=f+"$")):(f=f+M,f&&f[0]!="^"&&(f="^"+f)),new RegExp(f)}function b(f){f.scope||(f.scope=e||"_"),e=f.scope,a[e]||(a[e]=[],n[e]={});var M=n[e];if(f.name){var A=M[f.name];A&&r.unregister(A),M[f.name]=f}a[e].push(f),f.prefix&&(f.tabTrigger=f.prefix),!f.content&&f.body&&(f.content=Array.isArray(f.body)?f.body.join(`
`):f.body),f.tabTrigger&&!f.trigger&&(!f.guard&&/^\w/.test(f.tabTrigger)&&(f.guard="\\b"),f.trigger=$.escapeRegExp(f.tabTrigger)),!(!f.trigger&&!f.guard&&!f.endTrigger&&!f.endGuard)&&(f.startRe=p(f.trigger,f.guard,!0),f.triggerRe=new RegExp(f.trigger),f.endRe=p(f.endTrigger,f.endGuard,!0),f.endTriggerRe=new RegExp(f.endTrigger))}Array.isArray(t)?t.forEach(b):Object.keys(t).forEach(function(f){b(t[f])}),this._signal("registerSnippets",{scope:e})},o.prototype.unregister=function(t,e){var a=this.snippetMap,n=this.snippetNameMap;function r(h){var p=n[h.scope||e];if(p&&p[h.name]){delete p[h.name];var b=a[h.scope||e],f=b&&b.indexOf(h);f>=0&&b.splice(f,1)}}t.content?r(t):Array.isArray(t)&&t.forEach(r)},o.prototype.parseSnippetFile=function(t){t=t.replace(/\r/g,"");for(var e=[],a={},n=/^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm,r;r=n.exec(t);){if(r[1])try{a=JSON.parse(r[1]),e.push(a)}catch{}if(r[4])a.content=r[4].replace(/^\t/gm,""),e.push(a),a={};else{var h=r[2],p=r[3];if(h=="regex"){var b=/\/((?:[^\/\\]|\\.)*)|$/g;a.guard=b.exec(p)[1],a.trigger=b.exec(p)[1],a.endTrigger=b.exec(p)[1],a.endGuard=b.exec(p)[1]}else h=="snippet"?(a.tabTrigger=p.match(/^\S*/)[0],a.name||(a.name=p)):h&&(a[h]=p)}}return e},o.prototype.getSnippetByName=function(t,e){var a=this.snippetNameMap,n;return this.getActiveScopes(e).some(function(r){var h=a[r];return h&&(n=h[t]),!!n},this),n},o}();T.implement(s.prototype,k);var m=function(o,t,e){e===void 0&&(e={});var a=o.getCursorPosition(),n=o.session.getLine(a.row),r=o.session.getTabString(),h=n.match(/^\s*/)[0];a.column<h.length&&(h=h.slice(0,a.column)),t=t.replace(/\r/g,"");var p=this.tokenizeTmSnippet(t);p=this.resolveVariables(p,o),p=p.map(function(z){return z==`
`&&!e.excludeExtraIndent?z+h:typeof z=="string"?z.replace(/\t/g,r):z});var b=[];p.forEach(function(z,W){if(typeof z=="object"){var V=z.tabstopId,N=b[V];if(N||(N=b[V]=[],N.index=V,N.value="",N.parents={}),N.indexOf(z)===-1){z.choices&&!N.choices&&(N.choices=z.choices),N.push(z);var K=p.indexOf(z,W+1);if(K!==-1){var q=p.slice(W+1,K),X=q.some(function(G){return typeof G=="object"});X&&!N.value?N.value=q:q.length&&(!N.value||typeof N.value!="string")&&(N.value=q.join(""))}}}}),b.forEach(function(z){z.length=0});var f={};function M(z){for(var W=[],V=0;V<z.length;V++){var N=z[V];if(typeof N=="object"){if(f[N.tabstopId])continue;var K=z.lastIndexOf(N,V-1);N=W[K]||{tabstopId:N.tabstopId}}W[V]=N}return W}for(var A=0;A<p.length;A++){var L=p[A];if(typeof L=="object"){var E=L.tabstopId,O=b[E],B=p.indexOf(L,A+1);if(f[E]){f[E]===L&&(delete f[E],Object.keys(f).forEach(function(z){O.parents[z]=!0}));continue}f[E]=L;var F=O.value;typeof F!="string"?F=M(F):L.fmt&&(F=this.tmStrFormat(F,L,o)),p.splice.apply(p,[A+1,Math.max(0,B-A)].concat(F,L)),O.indexOf(L)===-1&&O.push(L)}}var H=0,U=0,D="";return p.forEach(function(z){if(typeof z=="string"){var W=z.split(`
`);W.length>1?(U=W[W.length-1].length,H+=W.length-1):U+=z.length,D+=z}else z&&(z.start?z.end={row:H,column:U}:z.start={row:H,column:U})}),{text:D,tabstops:b,tokens:p}},i=function(){function o(t){if(this.index=0,this.ranges=[],this.tabstops=[],t.tabstopManager)return t.tabstopManager;t.tabstopManager=this,this.$onChange=this.onChange.bind(this),this.$onChangeSelection=$.delayedCall(this.onChangeSelection.bind(this)).schedule,this.$onChangeSession=this.onChangeSession.bind(this),this.$onAfterExec=this.onAfterExec.bind(this),this.attach(t)}return o.prototype.attach=function(t){this.$openTabstops=null,this.selectedTabstop=null,this.editor=t,this.session=t.session,this.editor.on("change",this.$onChange),this.editor.on("changeSelection",this.$onChangeSelection),this.editor.on("changeSession",this.$onChangeSession),this.editor.commands.on("afterExec",this.$onAfterExec),this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},o.prototype.detach=function(){this.tabstops.forEach(this.removeTabstopMarkers,this),this.ranges.length=0,this.tabstops.length=0,this.selectedTabstop=null,this.editor.off("change",this.$onChange),this.editor.off("changeSelection",this.$onChangeSelection),this.editor.off("changeSession",this.$onChangeSession),this.editor.commands.off("afterExec",this.$onAfterExec),this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.tabstopManager=null,this.session=null,this.editor=null},o.prototype.onChange=function(t){for(var e=t.action[0]=="r",a=this.selectedTabstop||{},n=a.parents||{},r=this.tabstops.slice(),h=0;h<r.length;h++){var p=r[h],b=p==a||n[p.index];if(p.rangeList.$bias=b?0:1,t.action=="remove"&&p!==a){var f=p.parents&&p.parents[a.index],M=p.rangeList.pointIndex(t.start,f);M=M<0?-M-1:M+1;var A=p.rangeList.pointIndex(t.end,f);A=A<0?-A-1:A-1;for(var L=p.rangeList.ranges.slice(M,A),E=0;E<L.length;E++)this.removeRange(L[E])}p.rangeList.$onChange(t)}var O=this.session;!this.$inChange&&e&&O.getLength()==1&&!O.getValue()&&this.detach()},o.prototype.updateLinkedFields=function(){var t=this.selectedTabstop;if(!(!t||!t.hasLinkedRanges||!t.firstNonLinked)){this.$inChange=!0;for(var e=this.session,a=e.getTextRange(t.firstNonLinked),n=0;n<t.length;n++){var r=t[n];if(r.linked){var h=r.original,p=y.snippetManager.tmStrFormat(a,h,this.editor);e.replace(r,p)}}this.$inChange=!1}},o.prototype.onAfterExec=function(t){t.command&&!t.command.readOnly&&this.updateLinkedFields()},o.prototype.onChangeSelection=function(){if(this.editor){for(var t=this.editor.selection.lead,e=this.editor.selection.anchor,a=this.editor.selection.isEmpty(),n=0;n<this.ranges.length;n++)if(!this.ranges[n].linked){var r=this.ranges[n].contains(t.row,t.column),h=a||this.ranges[n].contains(e.row,e.column);if(r&&h)return}this.detach()}},o.prototype.onChangeSession=function(){this.detach()},o.prototype.tabNext=function(t){var e=this.tabstops.length,a=this.index+(t||1);a=Math.min(Math.max(a,1),e),a==e&&(a=0),this.selectTabstop(a),a===0&&this.detach()},o.prototype.selectTabstop=function(t){this.$openTabstops=null;var e=this.tabstops[this.index];if(e&&this.addTabstopMarkers(e),this.index=t,e=this.tabstops[this.index],!(!e||!e.length)){this.selectedTabstop=e;var a=e.firstNonLinked||e;if(e.choices&&(a.cursor=a.start),this.editor.inVirtualSelectionMode)this.editor.selection.fromOrientedRange(a);else{var n=this.editor.multiSelect;n.toSingleRange(a);for(var r=0;r<e.length;r++)e.hasLinkedRanges&&e[r].linked||n.addRange(e[r].clone(),!0)}this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler),this.selectedTabstop&&this.selectedTabstop.choices&&this.editor.execCommand("startAutocomplete",{matches:this.selectedTabstop.choices})}},o.prototype.addTabstops=function(t,e,a){var n=this.useLink||!this.editor.getOption("enableMultiselect");if(this.$openTabstops||(this.$openTabstops=[]),!t[0]){var r=u.fromPoints(a,a);l(r.start,e),l(r.end,e),t[0]=[r],t[0].index=0}var h=this.index,p=[h+1,0],b=this.ranges;t.forEach(function(f,M){for(var A=this.$openTabstops[M]||f,L=0;L<f.length;L++){var E=f[L],O=u.fromPoints(E.start,E.end||E.start);d(O.start,e),d(O.end,e),O.original=E,O.tabstop=A,b.push(O),A!=f?A.unshift(O):A[L]=O,E.fmtString||A.firstNonLinked&&n?(O.linked=!0,A.hasLinkedRanges=!0):A.firstNonLinked||(A.firstNonLinked=O)}A.firstNonLinked||(A.hasLinkedRanges=!1),A===f&&(p.push(A),this.$openTabstops[M]=A),this.addTabstopMarkers(A),A.rangeList=A.rangeList||new x,A.rangeList.$bias=0,A.rangeList.addList(A)},this),p.length>2&&(this.tabstops.length&&p.push(p.splice(2,1)[0]),this.tabstops.splice.apply(this.tabstops,p))},o.prototype.addTabstopMarkers=function(t){var e=this.session;t.forEach(function(a){a.markerId||(a.markerId=e.addMarker(a,"ace_snippet-marker","text"))})},o.prototype.removeTabstopMarkers=function(t){var e=this.session;t.forEach(function(a){e.removeMarker(a.markerId),a.markerId=null})},o.prototype.removeRange=function(t){var e=t.tabstop.indexOf(t);e!=-1&&t.tabstop.splice(e,1),e=this.ranges.indexOf(t),e!=-1&&this.ranges.splice(e,1),e=t.tabstop.rangeList.ranges.indexOf(t),e!=-1&&t.tabstop.splice(e,1),this.session.removeMarker(t.markerId),t.tabstop.length||(e=this.tabstops.indexOf(t.tabstop),e!=-1&&this.tabstops.splice(e,1),this.tabstops.length||this.detach())},o}();i.prototype.keyboardHandler=new v,i.prototype.keyboardHandler.bindKeys({Tab:function(o){y.snippetManager&&y.snippetManager.expandWithTab(o)||(o.tabstopManager.tabNext(1),o.renderer.scrollCursorIntoView())},"Shift-Tab":function(o){o.tabstopManager.tabNext(-1),o.renderer.scrollCursorIntoView()},Esc:function(o){o.tabstopManager.detach()}});var d=function(o,t){o.row==0&&(o.column+=t.column),o.row+=t.row},l=function(o,t){o.row==t.row&&(o.column-=t.column),o.row-=t.row};R.importCssString(`
.ace_snippet-marker {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: rgba(194, 193, 208, 0.09);
    border: 1px dotted rgba(211, 208, 235, 0.62);
    position: absolute;
}`,"snippets.css",!1),y.snippetManager=new s;var c=g("./editor").Editor;(function(){this.insertSnippet=function(o,t){return y.snippetManager.insertSnippet(this,o,t)},this.expandSnippet=function(o){return y.snippetManager.expandWithTab(this,o)}}).call(c.prototype)}),ace.define("ace/autocomplete/popup",["require","exports","module","ace/virtual_renderer","ace/editor","ace/range","ace/lib/event","ace/lib/lang","ace/lib/dom","ace/config"],function(g,y,I){var R=g("../virtual_renderer").VirtualRenderer,T=g("../editor").Editor,k=g("../range").Range,$=g("../lib/event"),u=g("../lib/lang"),x=g("../lib/dom"),v=g("../config").nls,_=function(w){return"suggest-aria-id:".concat(w)},S=function(w){var s=new R(w);s.$maxLines=4;var m=new T(s);return m.setHighlightActiveLine(!1),m.setShowPrintMargin(!1),m.renderer.setShowGutter(!1),m.renderer.setHighlightGutterLine(!1),m.$mouseHandler.$focusTimeout=0,m.$highlightTagPending=!0,m},C=function(){function w(s){var m=x.createElement("div"),i=new S(m);s&&s.appendChild(m),m.style.display="none",i.renderer.content.style.cursor="default",i.renderer.setStyle("ace_autocomplete"),i.renderer.$textLayer.element.setAttribute("role","listbox"),i.renderer.$textLayer.element.setAttribute("aria-label",v("Autocomplete suggestions")),i.renderer.textarea.setAttribute("aria-hidden","true"),i.setOption("displayIndentGuides",!1),i.setOption("dragDelay",150);var d=function(){};i.focus=d,i.$isFocused=!0,i.renderer.$cursorLayer.restartTimer=d,i.renderer.$cursorLayer.element.style.opacity=0,i.renderer.$maxLines=8,i.renderer.$keepTextAreaAtCursor=!1,i.setHighlightActiveLine(!1),i.session.highlight(""),i.session.$searchHighlight.clazz="ace_highlight-marker",i.on("mousedown",function(n){var r=n.getDocumentPosition();i.selection.moveToPosition(r),o.start.row=o.end.row=r.row,n.stop()});var l,c=new k(-1,0,-1,1/0),o=new k(-1,0,-1,1/0);o.id=i.session.addMarker(o,"ace_active-line","fullLine"),i.setSelectOnHover=function(n){n?c.id&&(i.session.removeMarker(c.id),c.id=null):c.id=i.session.addMarker(c,"ace_line-hover","fullLine")},i.setSelectOnHover(!1),i.on("mousemove",function(n){if(!l){l=n;return}if(!(l.x==n.x&&l.y==n.y)){l=n,l.scrollTop=i.renderer.scrollTop,i.isMouseOver=!0;var r=l.getDocumentPosition().row;c.start.row!=r&&(c.id||i.setRow(r),e(r))}}),i.renderer.on("beforeRender",function(){if(l&&c.start.row!=-1){l.$pos=null;var n=l.getDocumentPosition().row;c.id||i.setRow(n),e(n,!0)}}),i.renderer.on("afterRender",function(){var n=i.getRow(),r=i.renderer.$textLayer,h=r.element.childNodes[n-r.config.firstRow],p=document.activeElement;if(h!==r.selectedNode&&r.selectedNode&&(x.removeCssClass(r.selectedNode,"ace_selected"),p.removeAttribute("aria-activedescendant"),r.selectedNode.removeAttribute("id")),r.selectedNode=h,h){x.addCssClass(h,"ace_selected");var b=_(n);h.id=b,r.element.setAttribute("aria-activedescendant",b),p.setAttribute("aria-activedescendant",b),h.setAttribute("role","option"),h.setAttribute("aria-label",i.getData(n).value),h.setAttribute("aria-setsize",i.data.length),h.setAttribute("aria-posinset",n+1),h.setAttribute("aria-describedby","doc-tooltip")}});var t=function(){e(-1)},e=function(n,r){n!==c.start.row&&(c.start.row=c.end.row=n,r||i.session._emit("changeBackMarker"),i._emit("changeHoverMarker"))};i.getHoveredRow=function(){return c.start.row},$.addListener(i.container,"mouseout",function(){i.isMouseOver=!1,t()}),i.on("hide",t),i.on("changeSelection",t),i.session.doc.getLength=function(){return i.data.length},i.session.doc.getLine=function(n){var r=i.data[n];return typeof r=="string"?r:r&&r.value||""};var a=i.session.bgTokenizer;return a.$tokenizeRow=function(n){var r=i.data[n],h=[];if(!r)return h;typeof r=="string"&&(r={value:r});var p=r.caption||r.value||r.name;function b(F,H){F&&h.push({type:(r.className||"")+(H||""),value:F})}for(var f=p.toLowerCase(),M=(i.filterText||"").toLowerCase(),A=0,L=0,E=0;E<=M.length;E++)if(E!=L&&(r.matchMask&1<<E||E==M.length)){var O=M.slice(L,E);L=E;var B=f.indexOf(O,A);if(B==-1)continue;b(p.slice(A,B),""),A=B+O.length,b(p.slice(B,A),"completion-highlight")}return b(p.slice(A,p.length),""),h.push({type:"completion-spacer",value:" "}),r.meta&&h.push({type:"completion-meta",value:r.meta}),r.message&&h.push({type:"completion-message",value:r.message}),h},a.$updateOnChange=d,a.start=d,i.session.$computeWidth=function(){return this.screenWidth=0},i.isOpen=!1,i.isTopdown=!1,i.autoSelect=!0,i.filterText="",i.isMouseOver=!1,i.data=[],i.setData=function(n,r){i.filterText=r||"",i.setValue(u.stringRepeat(`
`,n.length),-1),i.data=n||[],i.setRow(0)},i.getData=function(n){return i.data[n]},i.getRow=function(){return o.start.row},i.setRow=function(n){n=Math.max(this.autoSelect?0:-1,Math.min(this.data.length-1,n)),o.start.row!=n&&(i.selection.clearSelection(),o.start.row=o.end.row=n||0,i.session._emit("changeBackMarker"),i.moveCursorTo(n||0,0),i.isOpen&&i._signal("select"))},i.on("changeSelection",function(){i.isOpen&&i.setRow(i.selection.lead.row),i.renderer.scrollCursorIntoView()}),i.hide=function(){this.container.style.display="none",i.anchorPos=null,i.anchor=null,i.isOpen&&(i.isOpen=!1,this._signal("hide"))},i.tryShow=function(n,r,h,p){if(!p&&i.isOpen&&i.anchorPos&&i.anchor&&i.anchorPos.top===n.top&&i.anchorPos.left===n.left&&i.anchor===h)return!0;var b=this.container,f=window.innerHeight,M=window.innerWidth,A=this.renderer,L=A.$maxLines*r*1.4,E={top:0,bottom:0,left:0},O=f-n.top-3*this.$borderSize-r,B=n.top-3*this.$borderSize;h||(B<=O||O>=L?h="bottom":h="top"),h==="top"?(E.bottom=n.top-this.$borderSize,E.top=E.bottom-L):h==="bottom"&&(E.top=n.top+r+this.$borderSize,E.bottom=E.top+L);var F=E.top>=0&&E.bottom<=f;if(!p&&!F)return!1;F?A.$maxPixelHeight=null:h==="top"?A.$maxPixelHeight=B:A.$maxPixelHeight=O,h==="top"?(b.style.top="",b.style.bottom=f-E.bottom+"px",i.isTopdown=!1):(b.style.top=E.top+"px",b.style.bottom="",i.isTopdown=!0),b.style.display="";var H=n.left;return H+b.offsetWidth>M&&(H=M-b.offsetWidth),b.style.left=H+"px",b.style.right="",i.isOpen||(i.isOpen=!0,this._signal("show"),l=null),i.anchorPos=n,i.anchor=h,!0},i.show=function(n,r,h){this.tryShow(n,r,h?"bottom":void 0,!0)},i.goTo=function(n){var r=this.getRow(),h=this.session.getLength()-1;switch(n){case"up":r=r<=0?h:r-1;break;case"down":r=r>=h?-1:r+1;break;case"start":r=0;break;case"end":r=h;break}this.setRow(r)},i.getTextLeftOffset=function(){return this.$borderSize+this.renderer.$padding+this.$imageSize},i.$imageSize=0,i.$borderSize=1,i}return w}();x.importCssString(`
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
`,"autocompletion.css",!1),y.AcePopup=C,y.$singleLineEditor=S,y.getAriaId=_}),ace.define("ace/autocomplete/inline_screenreader",["require","exports","module"],function(g,y,I){var R=function(){function T(k){this.editor=k,this.screenReaderDiv=document.createElement("div"),this.screenReaderDiv.classList.add("ace_screenreader-only"),this.editor.container.appendChild(this.screenReaderDiv)}return T.prototype.setScreenReaderContent=function(k){for(!this.popup&&this.editor.completer&&this.editor.completer.popup&&(this.popup=this.editor.completer.popup,this.popup.renderer.on("afterRender",(function(){var u=this.popup.getRow(),x=this.popup.renderer.$textLayer,v=x.element.childNodes[u-x.config.firstRow];if(v){for(var _="doc-tooltip ",S=0;S<this._lines.length;S++)_+="ace-inline-screenreader-line-".concat(S," ");v.setAttribute("aria-describedby",_)}}).bind(this)));this.screenReaderDiv.firstChild;)this.screenReaderDiv.removeChild(this.screenReaderDiv.firstChild);this._lines=k.split(/\r\n|\r|\n/);var $=this.createCodeBlock();this.screenReaderDiv.appendChild($)},T.prototype.destroy=function(){this.screenReaderDiv.remove()},T.prototype.createCodeBlock=function(){var k=document.createElement("pre");k.setAttribute("id","ace-inline-screenreader");for(var $=0;$<this._lines.length;$++){var u=document.createElement("code");u.setAttribute("id","ace-inline-screenreader-line-".concat($));var x=document.createTextNode(this._lines[$]);u.appendChild(x),k.appendChild(u)}return k},T}();y.AceInlineScreenReader=R}),ace.define("ace/autocomplete/inline",["require","exports","module","ace/snippets","ace/autocomplete/inline_screenreader"],function(g,y,I){var R=g("../snippets").snippetManager,T=g("./inline_screenreader").AceInlineScreenReader,k=function(){function $(){this.editor=null}return $.prototype.show=function(u,x,v){if(v=v||"",u&&this.editor&&this.editor!==u&&(this.hide(),this.editor=null,this.inlineScreenReader=null),!u||!x)return!1;this.inlineScreenReader||(this.inlineScreenReader=new T(u));var _=x.snippet?R.getDisplayTextForSnippet(u,x.snippet):x.value;return x.hideInlinePreview||!_||!_.startsWith(v)?!1:(this.editor=u,this.inlineScreenReader.setScreenReaderContent(_),_=_.slice(v.length),_===""?u.removeGhostText():u.setGhostText(_),!0)},$.prototype.isOpen=function(){return this.editor?!!this.editor.renderer.$ghostText:!1},$.prototype.hide=function(){return this.editor?(this.editor.removeGhostText(),!0):!1},$.prototype.destroy=function(){this.hide(),this.editor=null,this.inlineScreenReader&&(this.inlineScreenReader.destroy(),this.inlineScreenReader=null)},$}();y.AceInline=k}),ace.define("ace/autocomplete/util",["require","exports","module"],function(g,y,I){y.parForEach=function(T,k,$){var u=0,x=T.length;x===0&&$();for(var v=0;v<x;v++)k(T[v],function(_,S){u++,u===x&&$(_,S)})};var R=/[a-zA-Z_0-9\$\-\u00A2-\u2000\u2070-\uFFFF]/;y.retrievePrecedingIdentifier=function(T,k,$){$=$||R;for(var u=[],x=k-1;x>=0&&$.test(T[x]);x--)u.push(T[x]);return u.reverse().join("")},y.retrieveFollowingIdentifier=function(T,k,$){$=$||R;for(var u=[],x=k;x<T.length&&$.test(T[x]);x++)u.push(T[x]);return u},y.getCompletionPrefix=function(T){var k=T.getCursorPosition(),$=T.session.getLine(k.row),u;return T.completers.forEach((function(x){x.identifierRegexps&&x.identifierRegexps.forEach((function(v){!u&&v&&(u=this.retrievePrecedingIdentifier($,k.column,v))}).bind(this))}).bind(this)),u||this.retrievePrecedingIdentifier($,k.column)},y.triggerAutocomplete=function(T){var k=T.getCursorPosition(),$=T.session.getLine(k.row),u=k.column===0?0:k.column-1,x=$[u];return T.completers.some(function(v){if(v.triggerCharacters&&Array.isArray(v.triggerCharacters))return v.triggerCharacters.includes(x)})}}),ace.define("ace/autocomplete",["require","exports","module","ace/keyboard/hash_handler","ace/autocomplete/popup","ace/autocomplete/inline","ace/autocomplete/popup","ace/autocomplete/util","ace/lib/lang","ace/lib/dom","ace/snippets","ace/config","ace/lib/event"],function(g,y,I){var R=g("./keyboard/hash_handler").HashHandler,T=g("./autocomplete/popup").AcePopup,k=g("./autocomplete/inline").AceInline,$=g("./autocomplete/popup").getAriaId,u=g("./autocomplete/util"),x=g("./lib/lang"),v=g("./lib/dom"),_=g("./snippets").snippetManager,S=g("./config"),C=g("./lib/event"),w=function(d,l){l.completer&&l.completer.destroy()},s=function(){function d(){this.autoInsert=!1,this.autoSelect=!0,this.autoShown=!1,this.exactMatch=!1,this.inlineEnabled=!1,this.keyboardHandler=new R,this.keyboardHandler.bindKeys(this.commands),this.parentNode=null,this.setSelectOnHover=!1,this.stickySelectionDelay=500,this.blurListener=this.blurListener.bind(this),this.changeListener=this.changeListener.bind(this),this.mousedownListener=this.mousedownListener.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this),this.onLayoutChange=this.onLayoutChange.bind(this),this.changeTimer=x.delayedCall((function(){this.updateCompletions(!0)}).bind(this)),this.tooltipTimer=x.delayedCall(this.updateDocTooltip.bind(this),50),this.stickySelectionTimer=x.delayedCall((function(){this.stickySelection=!0}).bind(this),this.stickySelectionDelay),this.$firstOpenTimer=x.delayedCall((function(){var l=this.completionProvider&&this.completionProvider.initialPosition;if(!(this.autoShown||this.popup&&this.popup.isOpen||!l)){var c=[{caption:S.nls("Loading..."),value:""}];this.completions=new i(c),this.openPopup(this.editor,l.prefix,!1),this.popup.renderer.setStyle("ace_loading",!0)}}).bind(this),this.stickySelectionDelay)}return d.prototype.$init=function(){return this.popup=new T(this.parentNode||document.body||document.documentElement),this.popup.on("click",(function(l){this.insertMatch(),l.stop()}).bind(this)),this.popup.focus=this.editor.focus.bind(this.editor),this.popup.on("show",this.$onPopupShow.bind(this)),this.popup.on("hide",this.$onHidePopup.bind(this)),this.popup.on("select",this.$onPopupChange.bind(this)),C.addListener(this.popup.container,"mouseout",this.mouseOutListener.bind(this)),this.popup.on("changeHoverMarker",this.tooltipTimer.bind(null,null)),this.popup},d.prototype.$initInline=function(){if(!(!this.inlineEnabled||this.inlineRenderer))return this.inlineRenderer=new k,this.inlineRenderer},d.prototype.getPopup=function(){return this.popup||this.$init()},d.prototype.$onHidePopup=function(){this.inlineRenderer&&this.inlineRenderer.hide(),this.hideDocTooltip(),this.stickySelectionTimer.cancel(),this.stickySelection=!1},d.prototype.$onPopupChange=function(l){if(this.inlineRenderer&&this.inlineEnabled){var c=l?null:this.popup.getData(this.popup.getRow()),o=u.getCompletionPrefix(this.editor);if(this.inlineRenderer.show(this.editor,c,o)||this.inlineRenderer.hide(),this.popup.isMouseOver&&this.setSelectOnHover){this.tooltipTimer.call(null,null);return}}this.$updatePopupPosition(),this.tooltipTimer.call(null,null)},d.prototype.$onPopupShow=function(l){this.$onPopupChange(l),this.stickySelection=!1,this.stickySelectionDelay>=0&&this.stickySelectionTimer.schedule(this.stickySelectionDelay)},d.prototype.observeLayoutChanges=function(){if(!(this.$elements||!this.editor)){window.addEventListener("resize",this.onLayoutChange,{passive:!0}),window.addEventListener("wheel",this.mousewheelListener);for(var l=this.editor.container.parentNode,c=[];l;)c.push(l),l.addEventListener("scroll",this.onLayoutChange,{passive:!0}),l=l.parentNode;this.$elements=c}},d.prototype.unObserveLayoutChanges=function(){var l=this;window.removeEventListener("resize",this.onLayoutChange,{passive:!0}),window.removeEventListener("wheel",this.mousewheelListener),this.$elements&&this.$elements.forEach(function(c){c.removeEventListener("scroll",l.onLayoutChange,{passive:!0})}),this.$elements=null},d.prototype.onLayoutChange=function(){if(!this.popup.isOpen)return this.unObserveLayoutChanges();this.$updatePopupPosition(),this.updateDocTooltip()},d.prototype.$updatePopupPosition=function(){var l=this.editor,c=l.renderer,o=c.layerConfig.lineHeight,t=c.$cursorLayer.getPixelPosition(this.base,!0);t.left-=this.popup.getTextLeftOffset();var e=l.container.getBoundingClientRect();t.top+=e.top-c.layerConfig.offset,t.left+=e.left-l.renderer.scrollLeft,t.left+=c.gutterWidth;var a={top:t.top,left:t.left};c.$ghostText&&c.$ghostTextWidget&&this.base.row===c.$ghostText.position.row&&(a.top+=c.$ghostTextWidget.el.offsetHeight),!this.popup.tryShow(a,o,"bottom")&&(this.popup.tryShow(t,o,"top")||this.popup.show(t,o))},d.prototype.openPopup=function(l,c,o){this.$firstOpenTimer.cancel(),this.popup||this.$init(),this.inlineEnabled&&!this.inlineRenderer&&this.$initInline(),this.popup.autoSelect=this.autoSelect,this.popup.setSelectOnHover(this.setSelectOnHover);var t=this.popup.data[this.popup.getRow()];this.popup.setData(this.completions.filtered,this.completions.filterText),this.editor.textInput.setAriaOptions&&this.editor.textInput.setAriaOptions({activeDescendant:$(this.popup.getRow()),inline:this.inlineEnabled}),l.keyBinding.addKeyboardHandler(this.keyboardHandler);var e=this.popup.data.indexOf(t);e&&this.stickySelection?this.popup.setRow(this.autoSelect?e:-1):this.popup.setRow(this.autoSelect?0:-1),o?o&&!c&&this.detach():(this.popup.setTheme(l.getTheme()),this.popup.setFontSize(l.getFontSize()),this.$updatePopupPosition(),this.tooltipNode&&this.updateDocTooltip()),this.changeTimer.cancel(),this.observeLayoutChanges()},d.prototype.detach=function(){this.editor&&(this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.off("changeSelection",this.changeListener),this.editor.off("blur",this.blurListener),this.editor.off("mousedown",this.mousedownListener),this.editor.off("mousewheel",this.mousewheelListener)),this.$firstOpenTimer.cancel(),this.changeTimer.cancel(),this.hideDocTooltip(),this.completionProvider&&this.completionProvider.detach(),this.popup&&this.popup.isOpen&&this.popup.hide(),this.base&&this.base.detach(),this.activated=!1,this.completionProvider=this.completions=this.base=null,this.unObserveLayoutChanges()},d.prototype.changeListener=function(l){var c=this.editor.selection.lead;(c.row!=this.base.row||c.column<this.base.column)&&this.detach(),this.activated?this.changeTimer.schedule():this.detach()},d.prototype.blurListener=function(l){var c=document.activeElement,o=this.editor.textInput.getElement(),t=l.relatedTarget&&this.tooltipNode&&this.tooltipNode.contains(l.relatedTarget),e=this.popup&&this.popup.container;c!=o&&c.parentNode!=e&&!t&&c!=this.tooltipNode&&l.relatedTarget!=o&&this.detach()},d.prototype.mousedownListener=function(l){this.detach()},d.prototype.mousewheelListener=function(l){this.popup.isMouseOver||this.detach()},d.prototype.mouseOutListener=function(l){this.popup.isOpen&&this.$updatePopupPosition()},d.prototype.goTo=function(l){this.popup.goTo(l)},d.prototype.insertMatch=function(l,c){if(l||(l=this.popup.getData(this.popup.getRow())),!l)return!1;if(l.value==="")return this.detach();var o=this.completions,t=this.getCompletionProvider().insertMatch(this.editor,l,o.filterText,c);return this.completions==o&&this.detach(),t},d.prototype.showPopup=function(l,c){this.editor&&this.detach(),this.activated=!0,this.editor=l,l.completer!=this&&(l.completer&&l.completer.detach(),l.completer=this),l.on("changeSelection",this.changeListener),l.on("blur",this.blurListener),l.on("mousedown",this.mousedownListener),l.on("mousewheel",this.mousewheelListener),this.updateCompletions(!1,c)},d.prototype.getCompletionProvider=function(l){return this.completionProvider||(this.completionProvider=new m(l)),this.completionProvider},d.prototype.gatherCompletions=function(l,c){return this.getCompletionProvider().gatherCompletions(l,c)},d.prototype.updateCompletions=function(l,c){if(l&&this.base&&this.completions){var t=this.editor.getCursorPosition(),e=this.editor.session.getTextRange({start:this.base,end:t});if(e==this.completions.filterText)return;if(this.completions.setFilter(e),!this.completions.filtered.length)return this.detach();if(this.completions.filtered.length==1&&this.completions.filtered[0].value==e&&!this.completions.filtered[0].snippet)return this.detach();this.openPopup(this.editor,e,l);return}if(c&&c.matches){var t=this.editor.getSelectionRange().start;return this.base=this.editor.session.doc.createAnchor(t.row,t.column),this.base.$insertRight=!0,this.completions=new i(c.matches),this.openPopup(this.editor,"",l)}var o=this.editor.getSession(),t=this.editor.getCursorPosition(),e=u.getCompletionPrefix(this.editor);this.base=o.doc.createAnchor(t.row,t.column-e.length),this.base.$insertRight=!0;var a={exactMatch:this.exactMatch,ignoreCaption:this.ignoreCaption};this.getCompletionProvider({prefix:e,pos:t}).provideCompletions(this.editor,a,(function(n,r,h){var p=r.filtered,b=u.getCompletionPrefix(this.editor);if(this.$firstOpenTimer.cancel(),h){if(!p.length){var f=!this.autoShown&&this.emptyMessage;if(typeof f=="function"&&(f=this.emptyMessage(b)),f){var M=[{caption:f,value:""}];this.completions=new i(M),this.openPopup(this.editor,b,l);return}return this.detach()}if(p.length==1&&p[0].value==b&&!p[0].snippet)return this.detach();if(this.autoInsert&&!this.autoShown&&p.length==1)return this.insertMatch(p[0])}this.completions=r,this.openPopup(this.editor,b,l),this.popup.renderer.setStyle("ace_loading",!h)}).bind(this)),!this.autoShown&&!(this.popup&&this.popup.isOpen)&&this.$firstOpenTimer.delay(this.stickySelectionDelay/2)},d.prototype.cancelContextMenu=function(){this.editor.$mouseHandler.cancelContextMenu()},d.prototype.updateDocTooltip=function(){var l=this.popup,c=this.completions.filtered,o=c&&(c[l.getHoveredRow()]||c[l.getRow()]),t=null;if(!o||!this.editor||!this.popup.isOpen)return this.hideDocTooltip();for(var e=this.editor.completers.length,a=0;a<e;a++){var n=this.editor.completers[a];if(n.getDocTooltip&&o.completerId===n.id){t=n.getDocTooltip(o);break}}if(!t&&typeof o!="string"&&(t=o),typeof t=="string"&&(t={docText:t}),!t||!(t.docHTML||t.docText))return this.hideDocTooltip();this.showDocTooltip(t)},d.prototype.showDocTooltip=function(l){this.tooltipNode||(this.tooltipNode=v.createElement("div"),this.tooltipNode.style.margin=0,this.tooltipNode.style.pointerEvents="auto",this.tooltipNode.tabIndex=-1,this.tooltipNode.onblur=this.blurListener.bind(this),this.tooltipNode.onclick=this.onTooltipClick.bind(this),this.tooltipNode.id="doc-tooltip",this.tooltipNode.setAttribute("role","tooltip"));var c=this.editor.renderer.theme;this.tooltipNode.className="ace_tooltip ace_doc-tooltip "+(c.isDark?"ace_dark ":"")+(c.cssClass||"");var o=this.tooltipNode;l.docHTML?o.innerHTML=l.docHTML:l.docText&&(o.textContent=l.docText),o.parentNode||this.popup.container.appendChild(this.tooltipNode);var t=this.popup,e=t.container.getBoundingClientRect();o.style.top=t.container.style.top,o.style.bottom=t.container.style.bottom,o.style.display="block",window.innerWidth-e.right<320?e.left<320?t.isTopdown?(o.style.top=e.bottom+"px",o.style.left=e.left+"px",o.style.right="",o.style.bottom=""):(o.style.top=t.container.offsetTop-o.offsetHeight+"px",o.style.left=e.left+"px",o.style.right="",o.style.bottom=""):(o.style.right=window.innerWidth-e.left+"px",o.style.left=""):(o.style.left=e.right+1+"px",o.style.right="")},d.prototype.hideDocTooltip=function(){if(this.tooltipTimer.cancel(),!!this.tooltipNode){var l=this.tooltipNode;!this.editor.isFocused()&&document.activeElement==l&&this.editor.focus(),this.tooltipNode=null,l.parentNode&&l.parentNode.removeChild(l)}},d.prototype.onTooltipClick=function(l){for(var c=l.target;c&&c!=this.tooltipNode;){if(c.nodeName=="A"&&c.href){c.rel="noreferrer",c.target="_blank";break}c=c.parentNode}},d.prototype.destroy=function(){if(this.detach(),this.popup){this.popup.destroy();var l=this.popup.container;l&&l.parentNode&&l.parentNode.removeChild(l)}this.editor&&this.editor.completer==this&&(this.editor.off("destroy",w),this.editor.completer=null),this.inlineRenderer=this.popup=this.editor=null},d}();s.prototype.commands={Up:function(d){d.completer.goTo("up")},Down:function(d){d.completer.goTo("down")},"Ctrl-Up|Ctrl-Home":function(d){d.completer.goTo("start")},"Ctrl-Down|Ctrl-End":function(d){d.completer.goTo("end")},Esc:function(d){d.completer.detach()},Return:function(d){return d.completer.insertMatch()},"Shift-Return":function(d){d.completer.insertMatch(null,{deleteSuffix:!0})},Tab:function(d){var l=d.completer.insertMatch();if(!l&&!d.tabstopManager)d.completer.goTo("down");else return l},PageUp:function(d){d.completer.popup.gotoPageUp()},PageDown:function(d){d.completer.popup.gotoPageDown()}},s.for=function(d){return d.completer instanceof s||(d.completer&&(d.completer.destroy(),d.completer=null),S.get("sharedPopups")?(s.$sharedInstance||(s.$sharedInstance=new s),d.completer=s.$sharedInstance):(d.completer=new s,d.once("destroy",w))),d.completer},s.startCommand={name:"startAutocomplete",exec:function(d,l){var c=s.for(d);c.autoInsert=!1,c.autoSelect=!0,c.autoShown=!1,c.showPopup(d,l),c.cancelContextMenu()},bindKey:"Ctrl-Space|Ctrl-Shift-Space|Alt-Space"};var m=function(){function d(l){this.initialPosition=l,this.active=!0}return d.prototype.insertByIndex=function(l,c,o){return!this.completions||!this.completions.filtered?!1:this.insertMatch(l,this.completions.filtered[c],o)},d.prototype.insertMatch=function(l,c,o){if(!c)return!1;if(l.startOperation({command:{name:"insertMatch"}}),c.completer&&c.completer.insertMatch)c.completer.insertMatch(l,c);else{if(!this.completions)return!1;var t=this.completions.filterText.length,e=0;if(c.range&&c.range.start.row===c.range.end.row&&(t-=this.initialPosition.prefix.length,t+=this.initialPosition.pos.column-c.range.start.column,e+=c.range.end.column-this.initialPosition.pos.column),t||e){var a;l.selection.getAllRanges?a=l.selection.getAllRanges():a=[l.getSelectionRange()];for(var n=0,r;r=a[n];n++)r.start.column-=t,r.end.column+=e,l.session.remove(r)}c.snippet?_.insertSnippet(l,c.snippet):this.$insertString(l,c),c.command&&c.command==="startAutocomplete"&&l.execCommand(c.command)}return l.endOperation(),!0},d.prototype.$insertString=function(l,c){var o=c.value||c;l.execCommand("insertstring",o)},d.prototype.gatherCompletions=function(l,c){var o=l.getSession(),t=l.getCursorPosition(),e=u.getCompletionPrefix(l),a=[];this.completers=l.completers;var n=l.completers.length;return l.completers.forEach(function(r,h){r.getCompletions(l,o,t,e,function(p,b){r.hideInlinePreview&&(b=b.map(function(f){return Object.assign(f,{hideInlinePreview:r.hideInlinePreview})})),!p&&b&&(a=a.concat(b)),c(null,{prefix:u.getCompletionPrefix(l),matches:a,finished:--n===0})})}),!0},d.prototype.provideCompletions=function(l,c,o){var t=(function(r){var h=r.prefix,p=r.matches;this.completions=new i(p),c.exactMatch&&(this.completions.exactMatch=!0),c.ignoreCaption&&(this.completions.ignoreCaption=!0),this.completions.setFilter(h),(r.finished||this.completions.filtered.length)&&o(null,this.completions,r.finished)}).bind(this),e=!0,a=null;if(this.gatherCompletions(l,(function(r,h){if(this.active){r&&(o(r,[],!0),this.detach());var p=h.prefix;if(p.indexOf(h.prefix)===0){if(e){a=h;return}t(h)}}}).bind(this)),e=!1,a){var n=a;a=null,t(n)}},d.prototype.detach=function(){this.active=!1,this.completers&&this.completers.forEach(function(l){typeof l.cancel=="function"&&l.cancel()})},d}(),i=function(){function d(l,c){this.all=l,this.filtered=l,this.filterText=c||"",this.exactMatch=!1,this.ignoreCaption=!1}return d.prototype.setFilter=function(l){if(l.length>this.filterText&&l.lastIndexOf(this.filterText,0)===0)var c=this.filtered;else var c=this.all;this.filterText=l,c=this.filterCompletions(c,this.filterText),c=c.sort(function(t,e){return e.exactMatch-t.exactMatch||e.$score-t.$score||(t.caption||t.value).localeCompare(e.caption||e.value)});var o=null;c=c.filter(function(t){var e=t.snippet||t.caption||t.value;return e===o?!1:(o=e,!0)}),this.filtered=c},d.prototype.filterCompletions=function(l,c){var o=[],t=c.toUpperCase(),e=c.toLowerCase();e:for(var a=0,n;n=l[a];a++){var r=!this.ignoreCaption&&n.caption||n.value||n.snippet;if(r){var h=-1,p=0,b=0,f,M;if(this.exactMatch){if(c!==r.substr(0,c.length))continue e}else{var A=r.toLowerCase().indexOf(e);if(A>-1)b=A;else for(var L=0;L<c.length;L++){var E=r.indexOf(e[L],h+1),O=r.indexOf(t[L],h+1);if(f=E>=0&&(O<0||E<O)?E:O,f<0)continue e;M=f-h-1,M>0&&(h===-1&&(b+=10),b+=M,p=p|1<<L),h=f}}n.matchMask=p,n.exactMatch=b?0:1,n.$score=(n.score||0)-b,o.push(n)}}return o},d}();y.Autocomplete=s,y.CompletionProvider=m,y.FilteredList=i}),ace.define("ace/autocomplete/text_completer",["require","exports","module","ace/range"],function(g,y,I){var R=g("../range").Range,T=/[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;function k(u,x){var v=u.getTextRange(R.fromPoints({row:0,column:0},x));return v.split(T).length-1}function $(u,x){var v=k(u,x),_=u.getValue().split(T),S=Object.create(null),C=_[v];return _.forEach(function(w,s){if(!(!w||w===C)){var m=Math.abs(v-s),i=_.length-m;S[w]?S[w]=Math.max(i,S[w]):S[w]=i}}),S}y.getCompletions=function(u,x,v,_,S){var C=$(x,v),w=Object.keys(C);S(null,w.map(function(s){return{caption:s,value:s,score:C[s],meta:"local"}}))}}),ace.define("ace/ext/language_tools",["require","exports","module","ace/snippets","ace/autocomplete","ace/config","ace/lib/lang","ace/autocomplete/util","ace/autocomplete/text_completer","ace/editor","ace/config"],function(g,y,I){var R=g("../snippets").snippetManager,T=g("../autocomplete").Autocomplete,k=g("../config"),$=g("../lib/lang"),u=g("../autocomplete/util"),x=g("../autocomplete/text_completer"),v={getCompletions:function(e,a,n,r,h){if(a.$mode.completer)return a.$mode.completer.getCompletions(e,a,n,r,h);var p=e.session.getState(n.row),b=a.$mode.getCompletions(p,a,n,r);b=b.map(function(f){return f.completerId=v.id,f}),h(null,b)},id:"keywordCompleter"},_=function(e){var a={};return e.replace(/\${(\d+)(:(.*?))?}/g,function(n,r,h,p){return a[r]=p||""}).replace(/\$(\d+?)/g,function(n,r){return a[r]})},S={getCompletions:function(e,a,n,r,h){var p=[],b=a.getTokenAt(n.row,n.column);b&&b.type.match(/(tag-name|tag-open|tag-whitespace|attribute-name|attribute-value)\.xml$/)?p.push("html-tag"):p=R.getActiveScopes(e);var f=R.snippetMap,M=[];p.forEach(function(A){for(var L=f[A]||[],E=L.length;E--;){var O=L[E],B=O.name||O.tabTrigger;B&&M.push({caption:B,snippet:O.content,meta:O.tabTrigger&&!O.name?O.tabTrigger+"⇥ ":"snippet",completerId:S.id})}},this),h(null,M)},getDocTooltip:function(e){e.snippet&&!e.docHTML&&(e.docHTML=["<b>",$.escapeHTML(e.caption),"</b>","<hr></hr>",$.escapeHTML(_(e.snippet))].join(""))},id:"snippetCompleter"},C=[S,x,v];y.setCompleters=function(e){C.length=0,e&&C.push.apply(C,e)},y.addCompleter=function(e){C.push(e)},y.textCompleter=x,y.keyWordCompleter=v,y.snippetCompleter=S;var w={name:"expandSnippet",exec:function(e){return R.expandWithTab(e)},bindKey:"Tab"},s=function(e,a){m(a.session.$mode)},m=function(e){typeof e=="string"&&(e=k.$modes[e]),e&&(R.files||(R.files={}),i(e.$id,e.snippetFileId),e.modes&&e.modes.forEach(m))},i=function(e,a){!a||!e||R.files[e]||(R.files[e]={},k.loadModule(a,function(n){n&&(R.files[e]=n,!n.snippets&&n.snippetText&&(n.snippets=R.parseSnippetFile(n.snippetText)),R.register(n.snippets||[],n.scope),n.includeScopes&&(R.snippetMap[n.scope].includeScopes=n.includeScopes,n.includeScopes.forEach(function(r){m("ace/mode/"+r)})))}))},d=function(e){var a=e.editor,n=a.completer&&a.completer.activated;if(e.command.name==="backspace")n&&!u.getCompletionPrefix(a)&&a.completer.detach();else if(e.command.name==="insertstring"&&!n){l=e;var r=e.editor.$liveAutocompletionDelay;r?c.delay(r):o(e)}},l,c=$.delayedCall(function(){o(l)},0),o=function(e){var a=e.editor,n=u.getCompletionPrefix(a),r=u.triggerAutocomplete(a);if(n&&n.length>=a.$liveAutocompletionThreshold||r){var h=T.for(a);h.autoShown=!0,h.showPopup(a)}},t=g("../editor").Editor;g("../config").defineOptions(t.prototype,"editor",{enableBasicAutocompletion:{set:function(e){e?(this.completers||(this.completers=Array.isArray(e)?e:C),this.commands.addCommand(T.startCommand)):this.commands.removeCommand(T.startCommand)},value:!1},enableLiveAutocompletion:{set:function(e){e?(this.completers||(this.completers=Array.isArray(e)?e:C),this.commands.on("afterExec",d)):this.commands.off("afterExec",d)},value:!1},liveAutocompletionDelay:{initialValue:0},liveAutocompletionThreshold:{initialValue:0},enableSnippets:{set:function(e){e?(this.commands.addCommand(w),this.on("changeMode",s),s(null,this)):(this.commands.removeCommand(w),this.off("changeMode",s))},value:!1}})}),function(){ace.require(["ace/ext/language_tools"],function(g){P&&(P.exports=g)})}()})(te);var ne={exports:{}};(function(P,j){ace.define("ace/ext/beautify",["require","exports","module","ace/token_iterator"],function(g,y,I){var R=g("../token_iterator").TokenIterator;function T(k,$){return k.type.lastIndexOf($+".xml")>-1}y.singletonTags=["area","base","br","col","command","embed","hr","html","img","input","keygen","link","meta","param","source","track","wbr"],y.blockTags=["article","aside","blockquote","body","div","dl","fieldset","footer","form","head","header","html","nav","ol","p","script","section","style","table","tbody","tfoot","thead","ul"],y.formatOptions={lineBreaksAfterCommasInCurlyBlock:!0},y.beautify=function(k){for(var $=new R(k,0,0),u=$.getCurrentToken(),x=k.getTabString(),v=y.singletonTags,_=y.blockTags,S=y.formatOptions||{},C,w=!1,s=!1,m=!1,i="",d="",l="",c=0,o=0,t=0,e=0,a=0,n=0,r=0,h,p=0,b=0,f,M=!1,A=!1,L=!1,E=!1,O={0:0},B=[],F=!1,H=function(){C&&C.value&&C.type!=="string.regexp"&&(C.value=C.value.replace(/^\s*/,""))},U=function(){for(var z=i.length-1;!(z==0||i[z]!==" ");)z=z-1;i=i.slice(0,z+1)},D=function(){i=i.trimRight(),w=!1};u!==null;){if(p=$.getCurrentTokenRow(),$.$rowTokens,C=$.stepForward(),typeof u<"u"){if(d=u.value,a=0,L=l==="style"||k.$modeId==="ace/mode/css",T(u,"tag-open")?(A=!0,C&&(E=_.indexOf(C.value)!==-1),d==="</"&&(E&&!w&&b<1&&b++,L&&(b=1),a=1,E=!1)):T(u,"tag-close")?A=!1:T(u,"comment.start")?E=!0:T(u,"comment.end")&&(E=!1),!A&&!b&&u.type==="paren.rparen"&&u.value.substr(0,1)==="}"&&b++,p!==h&&(b=p,h&&(b-=h)),b){for(D();b>0;b--)i+=`
`;w=!0,!T(u,"comment")&&!u.type.match(/^(comment|string)$/)&&(d=d.trimLeft())}if(d){if(u.type==="keyword"&&d.match(/^(if|else|elseif|for|foreach|while|switch)$/)?(B[c]=d,H(),m=!0,d.match(/^(else|elseif)$/)&&i.match(/\}[\s]*$/)&&(D(),s=!0)):u.type==="paren.lparen"?(H(),d.substr(-1)==="{"&&(m=!0,M=!1,A||(b=1)),d.substr(0,1)==="{"&&(s=!0,i.substr(-1)!=="["&&i.trimRight().substr(-1)==="["?(D(),s=!1):i.trimRight().substr(-1)===")"?D():U())):u.type==="paren.rparen"?(a=1,d.substr(0,1)==="}"&&(B[c-1]==="case"&&a++,i.trimRight().substr(-1)==="{"?D():(s=!0,L&&(b+=2))),d.substr(0,1)==="]"&&i.substr(-1)!=="}"&&i.trimRight().substr(-1)==="}"&&(s=!1,e++,D()),d.substr(0,1)===")"&&i.substr(-1)!=="("&&i.trimRight().substr(-1)==="("&&(s=!1,e++,D()),U()):(u.type==="keyword.operator"||u.type==="keyword")&&d.match(/^(=|==|===|!=|!==|&&|\|\||and|or|xor|\+=|.=|>|>=|<|<=|=>)$/)?(D(),H(),s=!0,m=!0):u.type==="punctuation.operator"&&d===";"?(D(),H(),m=!0,L&&b++):u.type==="punctuation.operator"&&d.match(/^(:|,)$/)?(D(),H(),d.match(/^(,)$/)&&r>0&&n===0&&S.lineBreaksAfterCommasInCurlyBlock?b++:(m=!0,w=!1)):u.type==="support.php_tag"&&d==="?>"&&!w?(D(),s=!0):T(u,"attribute-name")&&i.substr(-1).match(/^\s$/)?s=!0:T(u,"attribute-equals")?(U(),H()):T(u,"tag-close")?(U(),d==="/>"&&(s=!0)):u.type==="keyword"&&d.match(/^(case|default)$/)&&F&&(a=1),w&&!(u.type.match(/^(comment)$/)&&!d.substr(0,1).match(/^[/#]$/))&&!(u.type.match(/^(string)$/)&&!d.substr(0,1).match(/^['"@]$/))){if(e=t,c>o)for(e++,f=c;f>o;f--)O[f]=e;else c<o&&(e=O[c]);for(o=c,t=e,a&&(e-=a),M&&!n&&(e++,M=!1),f=0;f<e;f++)i+=x}if(u.type==="keyword"&&d.match(/^(case|default)$/)?F===!1&&(B[c]=d,c++,F=!0):u.type==="keyword"&&d.match(/^(break)$/)&&B[c-1]&&B[c-1].match(/^(case|default)$/)&&(c--,F=!1),u.type==="paren.lparen"&&(n+=(d.match(/\(/g)||[]).length,r+=(d.match(/\{/g)||[]).length,c+=d.length),u.type==="keyword"&&d.match(/^(if|else|elseif|for|while)$/)?(M=!0,n=0):!n&&d.trim()&&u.type!=="comment"&&(M=!1),u.type==="paren.rparen")for(n-=(d.match(/\)/g)||[]).length,r-=(d.match(/\}/g)||[]).length,f=0;f<d.length;f++)c--,d.substr(f,1)==="}"&&B[c]==="case"&&c--;u.type=="text"&&(d=d.replace(/\s+$/," ")),s&&!w&&(U(),i.substr(-1)!==`
`&&(i+=" ")),i+=d,m&&(i+=" "),w=!1,s=!1,m=!1,(T(u,"tag-close")&&(E||_.indexOf(l)!==-1)||T(u,"doctype")&&d===">")&&(E&&C&&C.value==="</"?b=-1:b=1),C&&v.indexOf(C.value)===-1&&(T(u,"tag-open")&&d==="</"?c--:T(u,"tag-open")&&d==="<"?c++:T(u,"tag-close")&&d==="/>"&&c--),T(u,"tag-name")&&(l=d),h=p}}u=C}i=i.trim(),k.doc.setValue(i)},y.commands=[{name:"beautify",description:"Format selection (Beautify)",exec:function(k){y.beautify(k.session)},bindKey:"Ctrl-Shift-B"}]}),function(){ace.require(["ace/ext/beautify"],function(g){P&&(P.exports=g)})}()})(ne);
