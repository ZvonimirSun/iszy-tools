import{a5 as pe,j as ce,J as de,bz as ue,bL as he,a3 as ge,B as re,ab as me,q as fe,x as be,c as ee,w as te,f as ne,y as W,a as q,b as V,az as Y,d as xe,aB as ve,aF as $e,o as ie,aH as ye,aI as ke}from"./vendor-vjIVktzB.js";import{a as G}from"./vue3-ace-editor-taLoVwRH.js";import{i as we}from"./common-Xdzx4fGE.js";import"./ant-design-vue-H27IgF1B.js";import"./vanilla-jsoneditor--Y_UqYYL.js";const _e=pe("tinyEditor",{persist:!0,state:()=>({html:"",css:"",js:""})}),ae=["blur","input","change","changeSelectionStyle","changeSession","copy","focus","paste"],oe=ce({name:"VAceEditor",props:{value:{type:String,required:!0},lang:{type:String,default:"text"},theme:{type:String,default:"chrome"},options:Object,placeholder:String,readonly:Boolean,wrap:Boolean,printMargin:{type:[Boolean,Number],default:!0},minLines:Number,maxLines:Number},emits:["update:value","init",...ae],render(){return de("div")},mounted(){const M=this._editor=ue(G.edit(this.$el,{placeholder:this.placeholder,readOnly:this.readonly,value:this.value,mode:"ace/mode/"+this.lang,theme:"ace/theme/"+this.theme,wrap:this.wrap,printMargin:this.printMargin,useWorker:!1,minLines:this.minLines,maxLines:this.maxLines,...this.options}));this._contentBackup=this.value,this._isSettingContent=!1,M.on("change",()=>{if(this._isSettingContent)return;const D=M.getValue();this._contentBackup=D,this.$emit("update:value",D)}),ae.forEach(D=>{const p="on"+he(D);typeof this.$.vnode.props[p]=="function"&&M.on(D,this.$emit.bind(this,D))}),this._ro=new we(()=>M.resize()),this._ro.observe(this.$el),this.$emit("init",M)},beforeUnmount(){var M,D;(M=this._ro)===null||M===void 0||M.disconnect(),(D=this._editor)===null||D===void 0||D.destroy()},methods:{focus(){this._editor.focus()},blur(){this._editor.blur()},selectAll(){this._editor.selectAll()},getAceInstance(){return this._editor}},watch:{value(M){if(this._contentBackup!==M){try{this._isSettingContent=!0,this._editor.setValue(M,1)}finally{this._isSettingContent=!1}this._contentBackup=M}},theme(M){this._editor.setTheme("ace/theme/"+M)},options(M){this._editor.setOptions(M)},readonly(M){this._editor.setReadOnly(M)},placeholder(M){this._editor.setOption("placeholder",M)},wrap(M){this._editor.setWrapBehavioursEnabled(M)},printMargin(M){this._editor.setOption("printMargin",M)},lang(M){this._editor.setOption("mode","ace/mode/"+M)},minLines(M){this._editor.setOption("minLines",M)},maxLines(M){this._editor.setOption("maxLines",M)}}});var Ce={exports:{}};(function(M,D){ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(p,y,I){var R=p("../lib/oop");p("../lib/lang");var w=p("./text_highlight_rules").TextHighlightRules,v=y.supportType="align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index",c=y.supportFunction="rgb|rgba|url|attr|counter|counters",i=y.supportConstant="absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|flex-end|flex-start|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom",h=y.supportConstantColor="aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen",r=y.supportConstantFonts="arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace",f=y.numRe="\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))",g=y.pseudoElements="(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b",s=y.pseudoClasses="(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b",o=function(){var t=this.createKeywordMapper({"support.function":c,"support.constant":i,"support.type":v,"support.constant.color":h,"support.constant.fonts":r},"text",!0);this.$rules={start:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"ruleset"},{token:"paren.rparen",regex:"\\}"},{token:"string",regex:"@(?!viewport)",next:"media"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"keyword",regex:"%"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant.numeric",regex:f},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:!0}],media:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"start"},{token:"paren.rparen",regex:"\\}",next:"start"},{token:"string",regex:";",next:"start"},{token:"keyword",regex:"(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"}],comments:[{token:"comment",regex:"\\/\\*",push:[{token:"comment",regex:"\\*\\/",next:"pop"},{defaultToken:"comment"}]}],ruleset:[{regex:"-(webkit|ms|moz|o)-",token:"text"},{token:"punctuation.operator",regex:"[:;]"},{token:"paren.rparen",regex:"\\}",next:"start"},{include:["strings","url","comments"]},{token:["constant.numeric","keyword"],regex:"("+f+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"},{token:"constant.numeric",regex:f},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:["punctuation","entity.other.attribute-name.pseudo-element.css"],regex:g},{token:["punctuation","entity.other.attribute-name.pseudo-class.css"],regex:s},{include:"url"},{token:t,regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"},{caseInsensitive:!0}],url:[{token:"support.function",regex:"(?:url(:?-prefix)?|domain|regexp)\\(",push:[{token:"support.function",regex:"\\)",next:"pop"},{defaultToken:"string"}]}],strings:[{token:"string.start",regex:"'",push:[{token:"string.end",regex:"'|$",next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]},{token:"string.start",regex:'"',push:[{token:"string.end",regex:'"|$',next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]}],escapes:[{token:"constant.language.escape",regex:/\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/}]},this.normalizeRules()};R.inherits(o,w),y.CssHighlightRules=o}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(p,y,I){var R=p("../range").Range,w=function(){};(function(){this.checkOutdent=function(v,c){return/^\s+$/.test(v)?/^\s*\}/.test(c):!1},this.autoOutdent=function(v,c){var i=v.getLine(c),h=i.match(/^(\s*\})/);if(!h)return 0;var r=h[1].length,f=v.findMatchingBracket({row:c,column:r});if(!f||f.row==c)return 0;var g=this.$getIndent(v.getLine(f.row));v.replace(new R(c,0,c,r-1),g)},this.$getIndent=function(v){return v.match(/^\s*/)[0]}}).call(w.prototype),y.MatchingBraceOutdent=w}),ace.define("ace/mode/css_completions",["require","exports","module"],function(p,y,I){var R={background:{"#$0":1},"background-color":{"#$0":1,transparent:1,fixed:1},"background-image":{"url('/$0')":1},"background-repeat":{repeat:1,"repeat-x":1,"repeat-y":1,"no-repeat":1,inherit:1},"background-position":{bottom:2,center:2,left:2,right:2,top:2,inherit:2},"background-attachment":{scroll:1,fixed:1},"background-size":{cover:1,contain:1},"background-clip":{"border-box":1,"padding-box":1,"content-box":1},"background-origin":{"border-box":1,"padding-box":1,"content-box":1},border:{"solid $0":1,"dashed $0":1,"dotted $0":1,"#$0":1},"border-color":{"#$0":1},"border-style":{solid:2,dashed:2,dotted:2,double:2,groove:2,hidden:2,inherit:2,inset:2,none:2,outset:2,ridged:2},"border-collapse":{collapse:1,separate:1},bottom:{px:1,em:1,"%":1},clear:{left:1,right:1,both:1,none:1},color:{"#$0":1,"rgb(#$00,0,0)":1},cursor:{default:1,pointer:1,move:1,text:1,wait:1,help:1,progress:1,"n-resize":1,"ne-resize":1,"e-resize":1,"se-resize":1,"s-resize":1,"sw-resize":1,"w-resize":1,"nw-resize":1},display:{none:1,block:1,inline:1,"inline-block":1,"table-cell":1},"empty-cells":{show:1,hide:1},float:{left:1,right:1,none:1},"font-family":{Arial:2,"Comic Sans MS":2,Consolas:2,"Courier New":2,Courier:2,Georgia:2,Monospace:2,"Sans-Serif":2,"Segoe UI":2,Tahoma:2,"Times New Roman":2,"Trebuchet MS":2,Verdana:1},"font-size":{px:1,em:1,"%":1},"font-weight":{bold:1,normal:1},"font-style":{italic:1,normal:1},"font-variant":{normal:1,"small-caps":1},height:{px:1,em:1,"%":1},left:{px:1,em:1,"%":1},"letter-spacing":{normal:1},"line-height":{normal:1},"list-style-type":{none:1,disc:1,circle:1,square:1,decimal:1,"decimal-leading-zero":1,"lower-roman":1,"upper-roman":1,"lower-greek":1,"lower-latin":1,"upper-latin":1,georgian:1,"lower-alpha":1,"upper-alpha":1},margin:{px:1,em:1,"%":1},"margin-right":{px:1,em:1,"%":1},"margin-left":{px:1,em:1,"%":1},"margin-top":{px:1,em:1,"%":1},"margin-bottom":{px:1,em:1,"%":1},"max-height":{px:1,em:1,"%":1},"max-width":{px:1,em:1,"%":1},"min-height":{px:1,em:1,"%":1},"min-width":{px:1,em:1,"%":1},overflow:{hidden:1,visible:1,auto:1,scroll:1},"overflow-x":{hidden:1,visible:1,auto:1,scroll:1},"overflow-y":{hidden:1,visible:1,auto:1,scroll:1},padding:{px:1,em:1,"%":1},"padding-top":{px:1,em:1,"%":1},"padding-right":{px:1,em:1,"%":1},"padding-bottom":{px:1,em:1,"%":1},"padding-left":{px:1,em:1,"%":1},"page-break-after":{auto:1,always:1,avoid:1,left:1,right:1},"page-break-before":{auto:1,always:1,avoid:1,left:1,right:1},position:{absolute:1,relative:1,fixed:1,static:1},right:{px:1,em:1,"%":1},"table-layout":{fixed:1,auto:1},"text-decoration":{none:1,underline:1,"line-through":1,blink:1},"text-align":{left:1,right:1,center:1,justify:1},"text-transform":{capitalize:1,uppercase:1,lowercase:1,none:1},top:{px:1,em:1,"%":1},"vertical-align":{top:1,bottom:1},visibility:{hidden:1,visible:1},"white-space":{nowrap:1,normal:1,pre:1,"pre-line":1,"pre-wrap":1},width:{px:1,em:1,"%":1},"word-spacing":{normal:1},filter:{"alpha(opacity=$0100)":1},"text-shadow":{"$02px 2px 2px #777":1},"text-overflow":{"ellipsis-word":1,clip:1,ellipsis:1},"-moz-border-radius":1,"-moz-border-radius-topright":1,"-moz-border-radius-bottomright":1,"-moz-border-radius-topleft":1,"-moz-border-radius-bottomleft":1,"-webkit-border-radius":1,"-webkit-border-top-right-radius":1,"-webkit-border-top-left-radius":1,"-webkit-border-bottom-right-radius":1,"-webkit-border-bottom-left-radius":1,"-moz-box-shadow":1,"-webkit-box-shadow":1,transform:{"rotate($00deg)":1,"skew($00deg)":1},"-moz-transform":{"rotate($00deg)":1,"skew($00deg)":1},"-webkit-transform":{"rotate($00deg)":1,"skew($00deg)":1}},w=function(){};(function(){this.completionsDefined=!1,this.defineCompletions=function(){if(document){var v=document.createElement("c").style;for(var c in v)if(typeof v[c]=="string"){var i=c.replace(/[A-Z]/g,function(h){return"-"+h.toLowerCase()});R.hasOwnProperty(i)||(R[i]=1)}}this.completionsDefined=!0},this.getCompletions=function(v,c,i,h){if(this.completionsDefined||this.defineCompletions(),v==="ruleset"||c.$mode.$id=="ace/mode/scss"){var r=c.getLine(i.row).substr(0,i.column),f=/\([^)]*$/.test(r);return f&&(r=r.substr(r.lastIndexOf("(")+1)),/:[^;]+$/.test(r)?this.getPropertyValueCompletions(v,c,i,h):this.getPropertyCompletions(v,c,i,h,f)}return[]},this.getPropertyCompletions=function(v,c,i,h,r){r=r||!1;var f=Object.keys(R);return f.map(function(g){return{caption:g,snippet:g+": $0"+(r?"":";"),meta:"property",score:1e6}})},this.getPropertyValueCompletions=function(v,c,i,h){var r=c.getLine(i.row).substr(0,i.column),f=(/([\w\-]+):[^:]*$/.exec(r)||{})[1];if(!f)return[];var g=[];return f in R&&typeof R[f]=="object"&&(g=Object.keys(R[f])),g.map(function(s){return{caption:s,snippet:s,meta:"property value",score:1e6}})}}).call(w.prototype),y.CssCompletions=w}),ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"],function(p,y,I){var R=p("../../lib/oop");p("../behaviour").Behaviour;var w=p("./cstyle").CstyleBehaviour,v=p("../../token_iterator").TokenIterator,c=function(){this.inherit(w),this.add("colon","insertion",function(i,h,r,f,g){if(g===":"&&r.selection.isEmpty()){var s=r.getCursorPosition(),o=new v(f,s.row,s.column),t=o.getCurrentToken();if(t&&t.value.match(/\s+/)&&(t=o.stepBackward()),t&&t.type==="support.type"){var a=f.doc.getLine(s.row),d=a.substring(s.column,s.column+1);if(d===":")return{text:"",selection:[1,1]};if(/^(\s+[^;]|\s*$)/.test(a.substring(s.column)))return{text:":;",selection:[1,1]}}}}),this.add("colon","deletion",function(i,h,r,f,g){var s=f.doc.getTextRange(g);if(!g.isMultiLine()&&s===":"){var o=r.getCursorPosition(),t=new v(f,o.row,o.column),a=t.getCurrentToken();if(a&&a.value.match(/\s+/)&&(a=t.stepBackward()),a&&a.type==="support.type"){var d=f.doc.getLine(g.start.row),C=d.substring(g.end.column,g.end.column+1);if(C===";")return g.end.column++,g}}}),this.add("semicolon","insertion",function(i,h,r,f,g){if(g===";"&&r.selection.isEmpty()){var s=r.getCursorPosition(),o=f.doc.getLine(s.row),t=o.substring(s.column,s.column+1);if(t===";")return{text:"",selection:[1,1]}}}),this.add("!important","insertion",function(i,h,r,f,g){if(g==="!"&&r.selection.isEmpty()){var s=r.getCursorPosition(),o=f.doc.getLine(s.row);if(/^\s*(;|}|$)/.test(o.substring(s.column)))return{text:"!important",selection:[10,10]}}})};R.inherits(c,w),y.CssBehaviour=c}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(p,y,I){var R=p("../../lib/oop"),w=p("../../range").Range,v=p("./fold_mode").FoldMode,c=y.FoldMode=function(i){i&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+i.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+i.end)))};R.inherits(c,v),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(i,h,r){var f=i.getLine(r);if(this.singleLineBlockCommentRe.test(f)&&!this.startRegionRe.test(f)&&!this.tripleStarBlockCommentRe.test(f))return"";var g=this._getFoldWidgetBase(i,h,r);return!g&&this.startRegionRe.test(f)?"start":g},this.getFoldWidgetRange=function(i,h,r,f){var g=i.getLine(r);if(this.startRegionRe.test(g))return this.getCommentRegionBlock(i,g,r);var t=g.match(this.foldingStartMarker);if(t){var s=t.index;if(t[1])return this.openingBracketBlock(i,t[1],r,s);var o=i.getCommentFoldRange(r,s+t[0].length,1);return o&&!o.isMultiLine()&&(f?o=this.getSectionRange(i,r):h!="all"&&(o=null)),o}if(h!=="markbegin"){var t=g.match(this.foldingStopMarker);if(t){var s=t.index+t[0].length;return t[1]?this.closingBracketBlock(i,t[1],r,s):i.getCommentFoldRange(r,s,-1)}}},this.getSectionRange=function(i,h){var r=i.getLine(h),f=r.search(/\S/),g=h,s=r.length;h=h+1;for(var o=h,t=i.getLength();++h<t;){r=i.getLine(h);var a=r.search(/\S/);if(a!==-1){if(f>a)break;var d=this.getFoldWidgetRange(i,"all",h);if(d){if(d.start.row<=g)break;if(d.isMultiLine())h=d.end.row;else if(f==a)break}o=h}}return new w(g,s,o,i.getLine(o).length)},this.getCommentRegionBlock=function(i,h,r){for(var f=h.search(/\s*$/),g=i.getLength(),s=r,o=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,t=1;++r<g;){h=i.getLine(r);var a=o.exec(h);if(a&&(a[1]?t--:t++,!t))break}var d=r;if(d>s)return new w(s,f,d,h.length)}}).call(c.prototype)}),ace.define("ace/mode/css",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/css_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/css_completions","ace/mode/behaviour/css","ace/mode/folding/cstyle"],function(p,y,I){var R=p("../lib/oop"),w=p("./text").Mode,v=p("./css_highlight_rules").CssHighlightRules,c=p("./matching_brace_outdent").MatchingBraceOutdent,i=p("../worker/worker_client").WorkerClient,h=p("./css_completions").CssCompletions,r=p("./behaviour/css").CssBehaviour,f=p("./folding/cstyle").FoldMode,g=function(){this.HighlightRules=v,this.$outdent=new c,this.$behaviour=new r,this.$completer=new h,this.foldingRules=new f};R.inherits(g,w),(function(){this.foldingRules="cStyle",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(s,o,t){var a=this.$getIndent(o),d=this.getTokenizer().getLineTokens(o,s).tokens;if(d.length&&d[d.length-1].type=="comment")return a;var C=o.match(/^.*\{\s*$/);return C&&(a+=t),a},this.checkOutdent=function(s,o,t){return this.$outdent.checkOutdent(o,t)},this.autoOutdent=function(s,o,t){this.$outdent.autoOutdent(o,t)},this.getCompletions=function(s,o,t,a){return this.$completer.getCompletions(s,o,t,a)},this.createWorker=function(s){var o=new i(["ace"],"ace/mode/css_worker","Worker");return o.attachToDocument(s.getDocument()),o.on("annotate",function(t){s.setAnnotations(t.data)}),o.on("terminate",function(){s.clearAnnotations()}),o},this.$id="ace/mode/css",this.snippetFileId="ace/snippets/css"}).call(g.prototype),y.Mode=g}),function(){ace.require(["ace/mode/css"],function(p){M&&(M.exports=p)})}()})(Ce);var Te={exports:{}};(function(M,D){ace.define("ace/mode/jsdoc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(p,y,I){var R=p("../lib/oop"),w=p("./text_highlight_rules").TextHighlightRules,v=function(){this.$rules={start:[{token:["comment.doc.tag","comment.doc.text","lparen.doc"],regex:"(@(?:param|member|typedef|property|namespace|var|const|callback))(\\s*)({)",push:[{token:"lparen.doc",regex:"{",push:[{include:"doc-syntax"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"}]},{token:["rparen.doc","text.doc","variable.parameter.doc","lparen.doc","variable.parameter.doc","rparen.doc"],regex:/(})(\s*)(?:([\w=:\/\.]+)|(?:(\[)([\w=:\/\.]+)(\])))/,next:"pop"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"},{include:"doc-syntax"},{defaultToken:"text.doc"}]},{token:["comment.doc.tag","text.doc","lparen.doc"],regex:"(@(?:returns?|yields|type|this|suppress|public|protected|private|package|modifies|implements|external|exception|throws|enum|define|extends))(\\s*)({)",push:[{token:"lparen.doc",regex:"{",push:[{include:"doc-syntax"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"}]},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"},{include:"doc-syntax"},{defaultToken:"text.doc"}]},{token:["comment.doc.tag","text.doc","variable.parameter.doc"],regex:'(@(?:alias|memberof|instance|module|name|lends|namespace|external|this|template|requires|param|implements|function|extends|typedef|mixes|constructor|var|memberof\\!|event|listens|exports|class|constructs|interface|emits|fires|throws|const|callback|borrows|augments))(\\s+)(\\w[\\w#.:/~"\\-]*)?'},{token:["comment.doc.tag","text.doc","variable.parameter.doc"],regex:"(@method)(\\s+)(\\w[\\w.\\(\\)]*)"},{token:"comment.doc.tag",regex:"@access\\s+(?:private|public|protected)"},{token:"comment.doc.tag",regex:"@kind\\s+(?:class|constant|event|external|file|function|member|mixin|module|namespace|typedef)"},{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},v.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}],"doc-syntax":[{token:"operator.doc",regex:/[|:]/},{token:"paren.doc",regex:/[\[\]]/}]},this.normalizeRules()};R.inherits(v,w),v.getTagRule=function(c){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},v.getStartRule=function(c){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:c}},v.getEndRule=function(c){return{token:"comment.doc",regex:"\\*\\/",next:c}},y.JsDocCommentHighlightRules=v}),ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/jsdoc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(p,y,I){var R=p("../lib/oop"),w=p("./jsdoc_comment_highlight_rules").JsDocCommentHighlightRules,v=p("./text_highlight_rules").TextHighlightRules,c="[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*",i=function(f){var g=this.createKeywordMapper({"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Symbol|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static|constructor","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},"identifier"),s="case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void",o="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";this.$rules={no_regex:[w.getStartRule("doc-start"),r("no_regex"),{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:["storage.type","punctuation.operator","support.function","punctuation.operator","entity.name.function","text","keyword.operator"],regex:"("+c+")(\\.)(prototype)(\\.)("+c+")(\\s*)(=)",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+c+")(\\.)("+c+")(\\s*)(=)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+c+")(\\s*)(=)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+c+")(\\.)("+c+")(\\s*)(=)(\\s*)(function\\*?)(\\s+)(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","entity.name.function","text","paren.lparen"],regex:"(function\\*?)(\\s+)("+c+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","paren.lparen"],regex:"("+c+")(\\s*)(:)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:`from(?=\\s*('|"))`},{token:"keyword",regex:"(?:"+s+")\\b",next:"start"},{token:"support.constant",regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|debug|time|trace|timeEnd|assert)\b/},{token:g,regex:c},{token:"punctuation.operator",regex:/[.](?![.])/,next:"property"},{token:"storage.type",regex:/=>/,next:"start"},{token:"keyword.operator",regex:/--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"comment",regex:/^#!.*$/}],property:[{token:"text",regex:"\\s+"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+c+")(\\.)("+c+")(\\s*)(=)(\\s*)(function\\*?)(?:(\\s+)(\\w+))?(\\s*)(\\()",next:"function_arguments"},{token:"punctuation.operator",regex:/[.](?![.])/},{token:"support.function",regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|lter|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward|rEach)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:"support.function.dom",regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:"support.constant",regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:"identifier",regex:c},{regex:"",token:"empty",next:"no_regex"}],start:[w.getStartRule("doc-start"),r("start"),{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],default_parameter:[{token:"string",regex:"'(?=.)",push:[{token:"string",regex:"'|$",next:"pop"},{include:"qstring"}]},{token:"string",regex:'"(?=.)',push:[{token:"string",regex:'"|$',next:"pop"},{include:"qqstring"}]},{token:"constant.language",regex:"null|Infinity|NaN|undefined"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:"punctuation.operator",regex:",",next:"function_arguments"},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],function_arguments:[r("function_arguments"),{token:"variable.parameter",regex:c},{token:"punctuation.operator",regex:","},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],qqstring:[{token:"constant.language.escape",regex:o},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:o},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},(!f||!f.noES6)&&(this.$rules.no_regex.unshift({regex:"[{}]",onMatch:function(t,a,d){if(this.next=t=="{"?this.nextState:"",t=="{"&&d.length)d.unshift("start",a);else if(t=="}"&&d.length&&(d.shift(),this.next=d.shift(),this.next.indexOf("string")!=-1||this.next.indexOf("jsx")!=-1))return"paren.quasi.end";return t=="{"?"paren.lparen":"paren.rparen"},nextState:"start"},{token:"string.quasi.start",regex:/`/,push:[{token:"constant.language.escape",regex:o},{token:"paren.quasi.start",regex:/\${/,push:"start"},{token:"string.quasi.end",regex:/`/,next:"pop"},{defaultToken:"string.quasi"}]},{token:["variable.parameter","text"],regex:"("+c+")(\\s*)(?=\\=>)"},{token:"paren.lparen",regex:"(\\()(?=.+\\s*=>)",next:"function_arguments"},{token:"variable.language",regex:"(?:(?:(?:Weak)?(?:Set|Map))|Promise)\\b"}),this.$rules.function_arguments.unshift({token:"keyword.operator",regex:"=",next:"default_parameter"},{token:"keyword.operator",regex:"\\.{3}"}),this.$rules.property.unshift({token:"support.function",regex:"(findIndex|repeat|startsWith|endsWith|includes|isSafeInteger|trunc|cbrt|log2|log10|sign|then|catch|finally|resolve|reject|race|any|all|allSettled|keys|entries|isInteger)\\b(?=\\()"},{token:"constant.language",regex:"(?:MAX_SAFE_INTEGER|MIN_SAFE_INTEGER|EPSILON)\\b"}),(!f||f.jsx!=!1)&&h.call(this)),this.embedRules(w,"doc-",[w.getEndRule("no_regex")]),this.normalizeRules()};R.inherits(i,v);function h(){var f=c.replace("\\d","\\d\\-"),g={onMatch:function(o,t,a){var d=o.charAt(1)=="/"?2:1;return d==1?(t!=this.nextState?a.unshift(this.next,this.nextState,0):a.unshift(this.next),a[2]++):d==2&&t==this.nextState&&(a[1]--,(!a[1]||a[1]<0)&&(a.shift(),a.shift())),[{type:"meta.tag.punctuation."+(d==1?"":"end-")+"tag-open.xml",value:o.slice(0,d)},{type:"meta.tag.tag-name.xml",value:o.substr(d)}]},regex:"</?"+f,next:"jsxAttributes",nextState:"jsx"};this.$rules.start.unshift(g);var s={regex:"{",token:"paren.quasi.start",push:"start"};this.$rules.jsx=[s,g,{include:"reference"},{defaultToken:"string"}],this.$rules.jsxAttributes=[{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",onMatch:function(o,t,a){return t==a[0]&&a.shift(),o.length==2&&(a[0]==this.nextState&&a[1]--,(!a[1]||a[1]<0)&&a.splice(0,2)),this.next=a[0]||"start",[{type:this.token,value:o}]},nextState:"jsx"},s,r("jsxAttributes"),{token:"entity.other.attribute-name.xml",regex:f},{token:"keyword.operator.attribute-equals.xml",regex:"="},{token:"text.tag-whitespace.xml",regex:"\\s+"},{token:"string.attribute-value.xml",regex:"'",stateName:"jsx_attr_q",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',stateName:"jsx_attr_qq",push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},g],this.$rules.reference=[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}]}function r(f){return[{token:"comment",regex:/\/\*/,next:[w.getTagRule(),{token:"comment",regex:"\\*\\/",next:f||"pop"},{defaultToken:"comment",caseInsensitive:!0}]},{token:"comment",regex:"\\/\\/",next:[w.getTagRule(),{token:"comment",regex:"$|^",next:f||"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}y.JavaScriptHighlightRules=i}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(p,y,I){var R=p("../range").Range,w=function(){};(function(){this.checkOutdent=function(v,c){return/^\s+$/.test(v)?/^\s*\}/.test(c):!1},this.autoOutdent=function(v,c){var i=v.getLine(c),h=i.match(/^(\s*\})/);if(!h)return 0;var r=h[1].length,f=v.findMatchingBracket({row:c,column:r});if(!f||f.row==c)return 0;var g=this.$getIndent(v.getLine(f.row));v.replace(new R(c,0,c,r-1),g)},this.$getIndent=function(v){return v.match(/^\s*/)[0]}}).call(w.prototype),y.MatchingBraceOutdent=w}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(p,y,I){var R=p("../../lib/oop"),w=p("../../range").Range,v=p("./fold_mode").FoldMode,c=y.FoldMode=function(i){i&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+i.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+i.end)))};R.inherits(c,v),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(i,h,r){var f=i.getLine(r);if(this.singleLineBlockCommentRe.test(f)&&!this.startRegionRe.test(f)&&!this.tripleStarBlockCommentRe.test(f))return"";var g=this._getFoldWidgetBase(i,h,r);return!g&&this.startRegionRe.test(f)?"start":g},this.getFoldWidgetRange=function(i,h,r,f){var g=i.getLine(r);if(this.startRegionRe.test(g))return this.getCommentRegionBlock(i,g,r);var t=g.match(this.foldingStartMarker);if(t){var s=t.index;if(t[1])return this.openingBracketBlock(i,t[1],r,s);var o=i.getCommentFoldRange(r,s+t[0].length,1);return o&&!o.isMultiLine()&&(f?o=this.getSectionRange(i,r):h!="all"&&(o=null)),o}if(h!=="markbegin"){var t=g.match(this.foldingStopMarker);if(t){var s=t.index+t[0].length;return t[1]?this.closingBracketBlock(i,t[1],r,s):i.getCommentFoldRange(r,s,-1)}}},this.getSectionRange=function(i,h){var r=i.getLine(h),f=r.search(/\S/),g=h,s=r.length;h=h+1;for(var o=h,t=i.getLength();++h<t;){r=i.getLine(h);var a=r.search(/\S/);if(a!==-1){if(f>a)break;var d=this.getFoldWidgetRange(i,"all",h);if(d){if(d.start.row<=g)break;if(d.isMultiLine())h=d.end.row;else if(f==a)break}o=h}}return new w(g,s,o,i.getLine(o).length)},this.getCommentRegionBlock=function(i,h,r){for(var f=h.search(/\s*$/),g=i.getLength(),s=r,o=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,t=1;++r<g;){h=i.getLine(r);var a=o.exec(h);if(a&&(a[1]?t--:t++,!t))break}var d=r;if(d>s)return new w(s,f,d,h.length)}}).call(c.prototype)}),ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(p,y,I){var R=p("../lib/oop"),w=p("./text").Mode,v=p("./javascript_highlight_rules").JavaScriptHighlightRules,c=p("./matching_brace_outdent").MatchingBraceOutdent,i=p("../worker/worker_client").WorkerClient,h=p("./behaviour/cstyle").CstyleBehaviour,r=p("./folding/cstyle").FoldMode,f=function(){this.HighlightRules=v,this.$outdent=new c,this.$behaviour=new h,this.foldingRules=new r};R.inherits(f,w),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.$pairQuotesAfter={"`":/\w/},this.getNextLineIndent=function(g,s,o){var t=this.$getIndent(s),a=this.getTokenizer().getLineTokens(s,g),d=a.tokens,C=a.state;if(d.length&&d[d.length-1].type=="comment")return t;if(g=="start"||g=="no_regex"){var k=s.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);k&&(t+=o)}else if(g=="doc-start"){if(C=="start"||C=="no_regex")return"";var k=s.match(/^\s*(\/?)\*/);k&&(k[1]&&(t+=" "),t+="* ")}return t},this.checkOutdent=function(g,s,o){return this.$outdent.checkOutdent(s,o)},this.autoOutdent=function(g,s,o){this.$outdent.autoOutdent(s,o)},this.createWorker=function(g){var s=new i(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return s.attachToDocument(g.getDocument()),s.on("annotate",function(o){g.setAnnotations(o.data)}),s.on("terminate",function(){g.clearAnnotations()}),s},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}).call(f.prototype),y.Mode=f}),function(){ace.require(["ace/mode/javascript"],function(p){M&&(M.exports=p)})}()})(Te);var Se={exports:{}};(function(M,D){ace.define("ace/mode/jsdoc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(p,y,I){var R=p("../lib/oop"),w=p("./text_highlight_rules").TextHighlightRules,v=function(){this.$rules={start:[{token:["comment.doc.tag","comment.doc.text","lparen.doc"],regex:"(@(?:param|member|typedef|property|namespace|var|const|callback))(\\s*)({)",push:[{token:"lparen.doc",regex:"{",push:[{include:"doc-syntax"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"}]},{token:["rparen.doc","text.doc","variable.parameter.doc","lparen.doc","variable.parameter.doc","rparen.doc"],regex:/(})(\s*)(?:([\w=:\/\.]+)|(?:(\[)([\w=:\/\.]+)(\])))/,next:"pop"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"},{include:"doc-syntax"},{defaultToken:"text.doc"}]},{token:["comment.doc.tag","text.doc","lparen.doc"],regex:"(@(?:returns?|yields|type|this|suppress|public|protected|private|package|modifies|implements|external|exception|throws|enum|define|extends))(\\s*)({)",push:[{token:"lparen.doc",regex:"{",push:[{include:"doc-syntax"},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"}]},{token:"rparen.doc",regex:"}|(?=$)",next:"pop"},{include:"doc-syntax"},{defaultToken:"text.doc"}]},{token:["comment.doc.tag","text.doc","variable.parameter.doc"],regex:'(@(?:alias|memberof|instance|module|name|lends|namespace|external|this|template|requires|param|implements|function|extends|typedef|mixes|constructor|var|memberof\\!|event|listens|exports|class|constructs|interface|emits|fires|throws|const|callback|borrows|augments))(\\s+)(\\w[\\w#.:/~"\\-]*)?'},{token:["comment.doc.tag","text.doc","variable.parameter.doc"],regex:"(@method)(\\s+)(\\w[\\w.\\(\\)]*)"},{token:"comment.doc.tag",regex:"@access\\s+(?:private|public|protected)"},{token:"comment.doc.tag",regex:"@kind\\s+(?:class|constant|event|external|file|function|member|mixin|module|namespace|typedef)"},{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},v.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}],"doc-syntax":[{token:"operator.doc",regex:/[|:]/},{token:"paren.doc",regex:/[\[\]]/}]},this.normalizeRules()};R.inherits(v,w),v.getTagRule=function(c){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},v.getStartRule=function(c){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:c}},v.getEndRule=function(c){return{token:"comment.doc",regex:"\\*\\/",next:c}},y.JsDocCommentHighlightRules=v}),ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/jsdoc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(p,y,I){var R=p("../lib/oop"),w=p("./jsdoc_comment_highlight_rules").JsDocCommentHighlightRules,v=p("./text_highlight_rules").TextHighlightRules,c="[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*",i=function(f){var g=this.createKeywordMapper({"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Symbol|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static|constructor","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},"identifier"),s="case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void",o="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";this.$rules={no_regex:[w.getStartRule("doc-start"),r("no_regex"),{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:["storage.type","punctuation.operator","support.function","punctuation.operator","entity.name.function","text","keyword.operator"],regex:"("+c+")(\\.)(prototype)(\\.)("+c+")(\\s*)(=)",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+c+")(\\.)("+c+")(\\s*)(=)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+c+")(\\s*)(=)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+c+")(\\.)("+c+")(\\s*)(=)(\\s*)(function\\*?)(\\s+)(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","entity.name.function","text","paren.lparen"],regex:"(function\\*?)(\\s+)("+c+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","paren.lparen"],regex:"("+c+")(\\s*)(:)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)(function\\*?)(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:`from(?=\\s*('|"))`},{token:"keyword",regex:"(?:"+s+")\\b",next:"start"},{token:"support.constant",regex:/that\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|debug|time|trace|timeEnd|assert)\b/},{token:g,regex:c},{token:"punctuation.operator",regex:/[.](?![.])/,next:"property"},{token:"storage.type",regex:/=>/,next:"start"},{token:"keyword.operator",regex:/--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"comment",regex:/^#!.*$/}],property:[{token:"text",regex:"\\s+"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+c+")(\\.)("+c+")(\\s*)(=)(\\s*)(function\\*?)(?:(\\s+)(\\w+))?(\\s*)(\\()",next:"function_arguments"},{token:"punctuation.operator",regex:/[.](?![.])/},{token:"support.function",regex:/(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|lter|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward|rEach)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:"support.function.dom",regex:/(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:"support.constant",regex:/(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:"identifier",regex:c},{regex:"",token:"empty",next:"no_regex"}],start:[w.getStartRule("doc-start"),r("start"),{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/[sxngimy]*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.charclass.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],default_parameter:[{token:"string",regex:"'(?=.)",push:[{token:"string",regex:"'|$",next:"pop"},{include:"qstring"}]},{token:"string",regex:'"(?=.)',push:[{token:"string",regex:'"|$',next:"pop"},{include:"qqstring"}]},{token:"constant.language",regex:"null|Infinity|NaN|undefined"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/},{token:"constant.numeric",regex:/(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/},{token:"punctuation.operator",regex:",",next:"function_arguments"},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],function_arguments:[r("function_arguments"),{token:"variable.parameter",regex:c},{token:"punctuation.operator",regex:","},{token:"text",regex:"\\s+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],qqstring:[{token:"constant.language.escape",regex:o},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:o},{token:"string",regex:"\\\\$",consumeLineEnd:!0},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]},(!f||!f.noES6)&&(this.$rules.no_regex.unshift({regex:"[{}]",onMatch:function(t,a,d){if(this.next=t=="{"?this.nextState:"",t=="{"&&d.length)d.unshift("start",a);else if(t=="}"&&d.length&&(d.shift(),this.next=d.shift(),this.next.indexOf("string")!=-1||this.next.indexOf("jsx")!=-1))return"paren.quasi.end";return t=="{"?"paren.lparen":"paren.rparen"},nextState:"start"},{token:"string.quasi.start",regex:/`/,push:[{token:"constant.language.escape",regex:o},{token:"paren.quasi.start",regex:/\${/,push:"start"},{token:"string.quasi.end",regex:/`/,next:"pop"},{defaultToken:"string.quasi"}]},{token:["variable.parameter","text"],regex:"("+c+")(\\s*)(?=\\=>)"},{token:"paren.lparen",regex:"(\\()(?=.+\\s*=>)",next:"function_arguments"},{token:"variable.language",regex:"(?:(?:(?:Weak)?(?:Set|Map))|Promise)\\b"}),this.$rules.function_arguments.unshift({token:"keyword.operator",regex:"=",next:"default_parameter"},{token:"keyword.operator",regex:"\\.{3}"}),this.$rules.property.unshift({token:"support.function",regex:"(findIndex|repeat|startsWith|endsWith|includes|isSafeInteger|trunc|cbrt|log2|log10|sign|then|catch|finally|resolve|reject|race|any|all|allSettled|keys|entries|isInteger)\\b(?=\\()"},{token:"constant.language",regex:"(?:MAX_SAFE_INTEGER|MIN_SAFE_INTEGER|EPSILON)\\b"}),(!f||f.jsx!=!1)&&h.call(this)),this.embedRules(w,"doc-",[w.getEndRule("no_regex")]),this.normalizeRules()};R.inherits(i,v);function h(){var f=c.replace("\\d","\\d\\-"),g={onMatch:function(o,t,a){var d=o.charAt(1)=="/"?2:1;return d==1?(t!=this.nextState?a.unshift(this.next,this.nextState,0):a.unshift(this.next),a[2]++):d==2&&t==this.nextState&&(a[1]--,(!a[1]||a[1]<0)&&(a.shift(),a.shift())),[{type:"meta.tag.punctuation."+(d==1?"":"end-")+"tag-open.xml",value:o.slice(0,d)},{type:"meta.tag.tag-name.xml",value:o.substr(d)}]},regex:"</?"+f,next:"jsxAttributes",nextState:"jsx"};this.$rules.start.unshift(g);var s={regex:"{",token:"paren.quasi.start",push:"start"};this.$rules.jsx=[s,g,{include:"reference"},{defaultToken:"string"}],this.$rules.jsxAttributes=[{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",onMatch:function(o,t,a){return t==a[0]&&a.shift(),o.length==2&&(a[0]==this.nextState&&a[1]--,(!a[1]||a[1]<0)&&a.splice(0,2)),this.next=a[0]||"start",[{type:this.token,value:o}]},nextState:"jsx"},s,r("jsxAttributes"),{token:"entity.other.attribute-name.xml",regex:f},{token:"keyword.operator.attribute-equals.xml",regex:"="},{token:"text.tag-whitespace.xml",regex:"\\s+"},{token:"string.attribute-value.xml",regex:"'",stateName:"jsx_attr_q",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',stateName:"jsx_attr_qq",push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"reference"},{defaultToken:"string.attribute-value.xml"}]},g],this.$rules.reference=[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}]}function r(f){return[{token:"comment",regex:/\/\*/,next:[w.getTagRule(),{token:"comment",regex:"\\*\\/",next:f||"pop"},{defaultToken:"comment",caseInsensitive:!0}]},{token:"comment",regex:"\\/\\/",next:[w.getTagRule(),{token:"comment",regex:"$|^",next:f||"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}y.JavaScriptHighlightRules=i}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(p,y,I){var R=p("../range").Range,w=function(){};(function(){this.checkOutdent=function(v,c){return/^\s+$/.test(v)?/^\s*\}/.test(c):!1},this.autoOutdent=function(v,c){var i=v.getLine(c),h=i.match(/^(\s*\})/);if(!h)return 0;var r=h[1].length,f=v.findMatchingBracket({row:c,column:r});if(!f||f.row==c)return 0;var g=this.$getIndent(v.getLine(f.row));v.replace(new R(c,0,c,r-1),g)},this.$getIndent=function(v){return v.match(/^\s*/)[0]}}).call(w.prototype),y.MatchingBraceOutdent=w}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(p,y,I){var R=p("../../lib/oop"),w=p("../../range").Range,v=p("./fold_mode").FoldMode,c=y.FoldMode=function(i){i&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+i.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+i.end)))};R.inherits(c,v),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(i,h,r){var f=i.getLine(r);if(this.singleLineBlockCommentRe.test(f)&&!this.startRegionRe.test(f)&&!this.tripleStarBlockCommentRe.test(f))return"";var g=this._getFoldWidgetBase(i,h,r);return!g&&this.startRegionRe.test(f)?"start":g},this.getFoldWidgetRange=function(i,h,r,f){var g=i.getLine(r);if(this.startRegionRe.test(g))return this.getCommentRegionBlock(i,g,r);var t=g.match(this.foldingStartMarker);if(t){var s=t.index;if(t[1])return this.openingBracketBlock(i,t[1],r,s);var o=i.getCommentFoldRange(r,s+t[0].length,1);return o&&!o.isMultiLine()&&(f?o=this.getSectionRange(i,r):h!="all"&&(o=null)),o}if(h!=="markbegin"){var t=g.match(this.foldingStopMarker);if(t){var s=t.index+t[0].length;return t[1]?this.closingBracketBlock(i,t[1],r,s):i.getCommentFoldRange(r,s,-1)}}},this.getSectionRange=function(i,h){var r=i.getLine(h),f=r.search(/\S/),g=h,s=r.length;h=h+1;for(var o=h,t=i.getLength();++h<t;){r=i.getLine(h);var a=r.search(/\S/);if(a!==-1){if(f>a)break;var d=this.getFoldWidgetRange(i,"all",h);if(d){if(d.start.row<=g)break;if(d.isMultiLine())h=d.end.row;else if(f==a)break}o=h}}return new w(g,s,o,i.getLine(o).length)},this.getCommentRegionBlock=function(i,h,r){for(var f=h.search(/\s*$/),g=i.getLength(),s=r,o=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,t=1;++r<g;){h=i.getLine(r);var a=o.exec(h);if(a&&(a[1]?t--:t++,!t))break}var d=r;if(d>s)return new w(s,f,d,h.length)}}).call(c.prototype)}),ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(p,y,I){var R=p("../lib/oop"),w=p("./text").Mode,v=p("./javascript_highlight_rules").JavaScriptHighlightRules,c=p("./matching_brace_outdent").MatchingBraceOutdent,i=p("../worker/worker_client").WorkerClient,h=p("./behaviour/cstyle").CstyleBehaviour,r=p("./folding/cstyle").FoldMode,f=function(){this.HighlightRules=v,this.$outdent=new c,this.$behaviour=new h,this.foldingRules=new r};R.inherits(f,w),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'","`":"`"},this.$pairQuotesAfter={"`":/\w/},this.getNextLineIndent=function(g,s,o){var t=this.$getIndent(s),a=this.getTokenizer().getLineTokens(s,g),d=a.tokens,C=a.state;if(d.length&&d[d.length-1].type=="comment")return t;if(g=="start"||g=="no_regex"){var k=s.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);k&&(t+=o)}else if(g=="doc-start"){if(C=="start"||C=="no_regex")return"";var k=s.match(/^\s*(\/?)\*/);k&&(k[1]&&(t+=" "),t+="* ")}return t},this.checkOutdent=function(g,s,o){return this.$outdent.checkOutdent(s,o)},this.autoOutdent=function(g,s,o){this.$outdent.autoOutdent(s,o)},this.createWorker=function(g){var s=new i(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return s.attachToDocument(g.getDocument()),s.on("annotate",function(o){g.setAnnotations(o.data)}),s.on("terminate",function(){g.clearAnnotations()}),s},this.$id="ace/mode/javascript",this.snippetFileId="ace/snippets/javascript"}).call(f.prototype),y.Mode=f}),ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(p,y,I){var R=p("../lib/oop");p("../lib/lang");var w=p("./text_highlight_rules").TextHighlightRules,v=y.supportType="align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index",c=y.supportFunction="rgb|rgba|url|attr|counter|counters",i=y.supportConstant="absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|flex-end|flex-start|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom",h=y.supportConstantColor="aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen",r=y.supportConstantFonts="arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace",f=y.numRe="\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))",g=y.pseudoElements="(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b",s=y.pseudoClasses="(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b",o=function(){var t=this.createKeywordMapper({"support.function":c,"support.constant":i,"support.type":v,"support.constant.color":h,"support.constant.fonts":r},"text",!0);this.$rules={start:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"ruleset"},{token:"paren.rparen",regex:"\\}"},{token:"string",regex:"@(?!viewport)",next:"media"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"keyword",regex:"%"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant.numeric",regex:f},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:!0}],media:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"start"},{token:"paren.rparen",regex:"\\}",next:"start"},{token:"string",regex:";",next:"start"},{token:"keyword",regex:"(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"}],comments:[{token:"comment",regex:"\\/\\*",push:[{token:"comment",regex:"\\*\\/",next:"pop"},{defaultToken:"comment"}]}],ruleset:[{regex:"-(webkit|ms|moz|o)-",token:"text"},{token:"punctuation.operator",regex:"[:;]"},{token:"paren.rparen",regex:"\\}",next:"start"},{include:["strings","url","comments"]},{token:["constant.numeric","keyword"],regex:"("+f+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"},{token:"constant.numeric",regex:f},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:["punctuation","entity.other.attribute-name.pseudo-element.css"],regex:g},{token:["punctuation","entity.other.attribute-name.pseudo-class.css"],regex:s},{include:"url"},{token:t,regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"},{caseInsensitive:!0}],url:[{token:"support.function",regex:"(?:url(:?-prefix)?|domain|regexp)\\(",push:[{token:"support.function",regex:"\\)",next:"pop"},{defaultToken:"string"}]}],strings:[{token:"string.start",regex:"'",push:[{token:"string.end",regex:"'|$",next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]},{token:"string.start",regex:'"',push:[{token:"string.end",regex:'"|$',next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]}],escapes:[{token:"constant.language.escape",regex:/\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/}]},this.normalizeRules()};R.inherits(o,w),y.CssHighlightRules=o}),ace.define("ace/mode/css_completions",["require","exports","module"],function(p,y,I){var R={background:{"#$0":1},"background-color":{"#$0":1,transparent:1,fixed:1},"background-image":{"url('/$0')":1},"background-repeat":{repeat:1,"repeat-x":1,"repeat-y":1,"no-repeat":1,inherit:1},"background-position":{bottom:2,center:2,left:2,right:2,top:2,inherit:2},"background-attachment":{scroll:1,fixed:1},"background-size":{cover:1,contain:1},"background-clip":{"border-box":1,"padding-box":1,"content-box":1},"background-origin":{"border-box":1,"padding-box":1,"content-box":1},border:{"solid $0":1,"dashed $0":1,"dotted $0":1,"#$0":1},"border-color":{"#$0":1},"border-style":{solid:2,dashed:2,dotted:2,double:2,groove:2,hidden:2,inherit:2,inset:2,none:2,outset:2,ridged:2},"border-collapse":{collapse:1,separate:1},bottom:{px:1,em:1,"%":1},clear:{left:1,right:1,both:1,none:1},color:{"#$0":1,"rgb(#$00,0,0)":1},cursor:{default:1,pointer:1,move:1,text:1,wait:1,help:1,progress:1,"n-resize":1,"ne-resize":1,"e-resize":1,"se-resize":1,"s-resize":1,"sw-resize":1,"w-resize":1,"nw-resize":1},display:{none:1,block:1,inline:1,"inline-block":1,"table-cell":1},"empty-cells":{show:1,hide:1},float:{left:1,right:1,none:1},"font-family":{Arial:2,"Comic Sans MS":2,Consolas:2,"Courier New":2,Courier:2,Georgia:2,Monospace:2,"Sans-Serif":2,"Segoe UI":2,Tahoma:2,"Times New Roman":2,"Trebuchet MS":2,Verdana:1},"font-size":{px:1,em:1,"%":1},"font-weight":{bold:1,normal:1},"font-style":{italic:1,normal:1},"font-variant":{normal:1,"small-caps":1},height:{px:1,em:1,"%":1},left:{px:1,em:1,"%":1},"letter-spacing":{normal:1},"line-height":{normal:1},"list-style-type":{none:1,disc:1,circle:1,square:1,decimal:1,"decimal-leading-zero":1,"lower-roman":1,"upper-roman":1,"lower-greek":1,"lower-latin":1,"upper-latin":1,georgian:1,"lower-alpha":1,"upper-alpha":1},margin:{px:1,em:1,"%":1},"margin-right":{px:1,em:1,"%":1},"margin-left":{px:1,em:1,"%":1},"margin-top":{px:1,em:1,"%":1},"margin-bottom":{px:1,em:1,"%":1},"max-height":{px:1,em:1,"%":1},"max-width":{px:1,em:1,"%":1},"min-height":{px:1,em:1,"%":1},"min-width":{px:1,em:1,"%":1},overflow:{hidden:1,visible:1,auto:1,scroll:1},"overflow-x":{hidden:1,visible:1,auto:1,scroll:1},"overflow-y":{hidden:1,visible:1,auto:1,scroll:1},padding:{px:1,em:1,"%":1},"padding-top":{px:1,em:1,"%":1},"padding-right":{px:1,em:1,"%":1},"padding-bottom":{px:1,em:1,"%":1},"padding-left":{px:1,em:1,"%":1},"page-break-after":{auto:1,always:1,avoid:1,left:1,right:1},"page-break-before":{auto:1,always:1,avoid:1,left:1,right:1},position:{absolute:1,relative:1,fixed:1,static:1},right:{px:1,em:1,"%":1},"table-layout":{fixed:1,auto:1},"text-decoration":{none:1,underline:1,"line-through":1,blink:1},"text-align":{left:1,right:1,center:1,justify:1},"text-transform":{capitalize:1,uppercase:1,lowercase:1,none:1},top:{px:1,em:1,"%":1},"vertical-align":{top:1,bottom:1},visibility:{hidden:1,visible:1},"white-space":{nowrap:1,normal:1,pre:1,"pre-line":1,"pre-wrap":1},width:{px:1,em:1,"%":1},"word-spacing":{normal:1},filter:{"alpha(opacity=$0100)":1},"text-shadow":{"$02px 2px 2px #777":1},"text-overflow":{"ellipsis-word":1,clip:1,ellipsis:1},"-moz-border-radius":1,"-moz-border-radius-topright":1,"-moz-border-radius-bottomright":1,"-moz-border-radius-topleft":1,"-moz-border-radius-bottomleft":1,"-webkit-border-radius":1,"-webkit-border-top-right-radius":1,"-webkit-border-top-left-radius":1,"-webkit-border-bottom-right-radius":1,"-webkit-border-bottom-left-radius":1,"-moz-box-shadow":1,"-webkit-box-shadow":1,transform:{"rotate($00deg)":1,"skew($00deg)":1},"-moz-transform":{"rotate($00deg)":1,"skew($00deg)":1},"-webkit-transform":{"rotate($00deg)":1,"skew($00deg)":1}},w=function(){};(function(){this.completionsDefined=!1,this.defineCompletions=function(){if(document){var v=document.createElement("c").style;for(var c in v)if(typeof v[c]=="string"){var i=c.replace(/[A-Z]/g,function(h){return"-"+h.toLowerCase()});R.hasOwnProperty(i)||(R[i]=1)}}this.completionsDefined=!0},this.getCompletions=function(v,c,i,h){if(this.completionsDefined||this.defineCompletions(),v==="ruleset"||c.$mode.$id=="ace/mode/scss"){var r=c.getLine(i.row).substr(0,i.column),f=/\([^)]*$/.test(r);return f&&(r=r.substr(r.lastIndexOf("(")+1)),/:[^;]+$/.test(r)?this.getPropertyValueCompletions(v,c,i,h):this.getPropertyCompletions(v,c,i,h,f)}return[]},this.getPropertyCompletions=function(v,c,i,h,r){r=r||!1;var f=Object.keys(R);return f.map(function(g){return{caption:g,snippet:g+": $0"+(r?"":";"),meta:"property",score:1e6}})},this.getPropertyValueCompletions=function(v,c,i,h){var r=c.getLine(i.row).substr(0,i.column),f=(/([\w\-]+):[^:]*$/.exec(r)||{})[1];if(!f)return[];var g=[];return f in R&&typeof R[f]=="object"&&(g=Object.keys(R[f])),g.map(function(s){return{caption:s,snippet:s,meta:"property value",score:1e6}})}}).call(w.prototype),y.CssCompletions=w}),ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"],function(p,y,I){var R=p("../../lib/oop");p("../behaviour").Behaviour;var w=p("./cstyle").CstyleBehaviour,v=p("../../token_iterator").TokenIterator,c=function(){this.inherit(w),this.add("colon","insertion",function(i,h,r,f,g){if(g===":"&&r.selection.isEmpty()){var s=r.getCursorPosition(),o=new v(f,s.row,s.column),t=o.getCurrentToken();if(t&&t.value.match(/\s+/)&&(t=o.stepBackward()),t&&t.type==="support.type"){var a=f.doc.getLine(s.row),d=a.substring(s.column,s.column+1);if(d===":")return{text:"",selection:[1,1]};if(/^(\s+[^;]|\s*$)/.test(a.substring(s.column)))return{text:":;",selection:[1,1]}}}}),this.add("colon","deletion",function(i,h,r,f,g){var s=f.doc.getTextRange(g);if(!g.isMultiLine()&&s===":"){var o=r.getCursorPosition(),t=new v(f,o.row,o.column),a=t.getCurrentToken();if(a&&a.value.match(/\s+/)&&(a=t.stepBackward()),a&&a.type==="support.type"){var d=f.doc.getLine(g.start.row),C=d.substring(g.end.column,g.end.column+1);if(C===";")return g.end.column++,g}}}),this.add("semicolon","insertion",function(i,h,r,f,g){if(g===";"&&r.selection.isEmpty()){var s=r.getCursorPosition(),o=f.doc.getLine(s.row),t=o.substring(s.column,s.column+1);if(t===";")return{text:"",selection:[1,1]}}}),this.add("!important","insertion",function(i,h,r,f,g){if(g==="!"&&r.selection.isEmpty()){var s=r.getCursorPosition(),o=f.doc.getLine(s.row);if(/^\s*(;|}|$)/.test(o.substring(s.column)))return{text:"!important",selection:[10,10]}}})};R.inherits(c,w),y.CssBehaviour=c}),ace.define("ace/mode/css",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/css_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/css_completions","ace/mode/behaviour/css","ace/mode/folding/cstyle"],function(p,y,I){var R=p("../lib/oop"),w=p("./text").Mode,v=p("./css_highlight_rules").CssHighlightRules,c=p("./matching_brace_outdent").MatchingBraceOutdent,i=p("../worker/worker_client").WorkerClient,h=p("./css_completions").CssCompletions,r=p("./behaviour/css").CssBehaviour,f=p("./folding/cstyle").FoldMode,g=function(){this.HighlightRules=v,this.$outdent=new c,this.$behaviour=new r,this.$completer=new h,this.foldingRules=new f};R.inherits(g,w),(function(){this.foldingRules="cStyle",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(s,o,t){var a=this.$getIndent(o),d=this.getTokenizer().getLineTokens(o,s).tokens;if(d.length&&d[d.length-1].type=="comment")return a;var C=o.match(/^.*\{\s*$/);return C&&(a+=t),a},this.checkOutdent=function(s,o,t){return this.$outdent.checkOutdent(o,t)},this.autoOutdent=function(s,o,t){this.$outdent.autoOutdent(o,t)},this.getCompletions=function(s,o,t,a){return this.$completer.getCompletions(s,o,t,a)},this.createWorker=function(s){var o=new i(["ace"],"ace/mode/css_worker","Worker");return o.attachToDocument(s.getDocument()),o.on("annotate",function(t){s.setAnnotations(t.data)}),o.on("terminate",function(){s.clearAnnotations()}),o},this.$id="ace/mode/css",this.snippetFileId="ace/snippets/css"}).call(g.prototype),y.Mode=g}),ace.define("ace/mode/xml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(p,y,I){var R=p("../lib/oop"),w=p("./text_highlight_rules").TextHighlightRules,v=function(c){var i="[_:a-zA-ZÀ-￿][-_:.a-zA-Z0-9À-￿]*";this.$rules={start:[{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\[",next:"cdata"},{token:["punctuation.instruction.xml","keyword.instruction.xml"],regex:"(<\\?)("+i+")",next:"processing_instruction"},{token:"comment.start.xml",regex:"<\\!--",next:"comment"},{token:["xml-pe.doctype.xml","xml-pe.doctype.xml"],regex:"(<\\!)(DOCTYPE)(?=[\\s])",next:"doctype",caseInsensitive:!0},{include:"tag"},{token:"text.end-tag-open.xml",regex:"</"},{token:"text.tag-open.xml",regex:"<"},{include:"reference"},{defaultToken:"text.xml"}],processing_instruction:[{token:"entity.other.attribute-name.decl-attribute-name.xml",regex:i},{token:"keyword.operator.decl-attribute-equals.xml",regex:"="},{include:"whitespace"},{include:"string"},{token:"punctuation.xml-decl.xml",regex:"\\?>",next:"start"}],doctype:[{include:"whitespace"},{include:"string"},{token:"xml-pe.doctype.xml",regex:">",next:"start"},{token:"xml-pe.xml",regex:"[-_a-zA-Z0-9:]+"},{token:"punctuation.int-subset",regex:"\\[",push:"int_subset"}],int_subset:[{token:"text.xml",regex:"\\s+"},{token:"punctuation.int-subset.xml",regex:"]",next:"pop"},{token:["punctuation.markup-decl.xml","keyword.markup-decl.xml"],regex:"(<\\!)("+i+")",push:[{token:"text",regex:"\\s+"},{token:"punctuation.markup-decl.xml",regex:">",next:"pop"},{include:"string"}]}],cdata:[{token:"string.cdata.xml",regex:"\\]\\]>",next:"start"},{token:"text.xml",regex:"\\s+"},{token:"text.xml",regex:"(?:[^\\]]|\\](?!\\]>))+"}],comment:[{token:"comment.end.xml",regex:"-->",next:"start"},{defaultToken:"comment.xml"}],reference:[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],attr_reference:[{token:"constant.language.escape.reference.attribute-value.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],tag:[{token:["meta.tag.punctuation.tag-open.xml","meta.tag.punctuation.end-tag-open.xml","meta.tag.tag-name.xml"],regex:"(?:(<)|(</))((?:"+i+":)?"+i+")",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start"}]}],tag_whitespace:[{token:"text.tag-whitespace.xml",regex:"\\s+"}],whitespace:[{token:"text.whitespace.xml",regex:"\\s+"}],string:[{token:"string.xml",regex:"'",push:[{token:"string.xml",regex:"'",next:"pop"},{defaultToken:"string.xml"}]},{token:"string.xml",regex:'"',push:[{token:"string.xml",regex:'"',next:"pop"},{defaultToken:"string.xml"}]}],attributes:[{token:"entity.other.attribute-name.xml",regex:i},{token:"keyword.operator.attribute-equals.xml",regex:"="},{include:"tag_whitespace"},{include:"attribute_value"}],attribute_value:[{token:"string.attribute-value.xml",regex:"'",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]}]},this.constructor===v&&this.normalizeRules()};(function(){this.embedTagRules=function(c,i,h){this.$rules.tag.unshift({token:["meta.tag.punctuation.tag-open.xml","meta.tag."+h+".tag-name.xml"],regex:"(<)("+h+"(?=\\s|>|$))",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:i+"start"}]}),this.$rules[h+"-end"]=[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start",onMatch:function(r,f,g){return g.splice(0),this.token}}],this.embedRules(c,i,[{token:["meta.tag.punctuation.end-tag-open.xml","meta.tag."+h+".tag-name.xml"],regex:"(</)("+h+"(?=\\s|>|$))",next:h+"-end"},{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\["},{token:"string.cdata.xml",regex:"\\]\\]>"}])}}).call(w.prototype),R.inherits(v,w),y.XmlHighlightRules=v}),ace.define("ace/mode/html_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/css_highlight_rules","ace/mode/javascript_highlight_rules","ace/mode/xml_highlight_rules"],function(p,y,I){var R=p("../lib/oop"),w=p("../lib/lang"),v=p("./css_highlight_rules").CssHighlightRules,c=p("./javascript_highlight_rules").JavaScriptHighlightRules,i=p("./xml_highlight_rules").XmlHighlightRules,h=w.createMap({a:"anchor",button:"form",form:"form",img:"image",input:"form",label:"form",option:"form",script:"script",select:"form",textarea:"form",style:"style",table:"table",tbody:"table",td:"table",tfoot:"table",th:"table",tr:"table"}),r=function(){i.call(this),this.addRules({attributes:[{include:"tag_whitespace"},{token:"entity.other.attribute-name.xml",regex:"[-_a-zA-Z0-9:.]+"},{token:"keyword.operator.attribute-equals.xml",regex:"=",push:[{include:"tag_whitespace"},{token:"string.unquoted.attribute-value.html",regex:"[^<>='\"`\\s]+",next:"pop"},{token:"empty",regex:"",next:"pop"}]},{include:"attribute_value"}],tag:[{token:function(f,g){var s=h[g];return["meta.tag.punctuation."+(f=="<"?"":"end-")+"tag-open.xml","meta.tag"+(s?"."+s:"")+".tag-name.xml"]},regex:"(</?)([-_a-zA-Z0-9:.]+)",next:"tag_stuff"}],tag_stuff:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start"}]}),this.embedTagRules(v,"css-","style"),this.embedTagRules(new c({jsx:!1}).getRules(),"js-","script"),this.constructor===r&&this.normalizeRules()};R.inherits(r,i),y.HtmlHighlightRules=r}),ace.define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(p,y,I){var R=p("../../lib/oop"),w=p("../behaviour").Behaviour,v=p("../../token_iterator").TokenIterator;p("../../lib/lang");function c(h,r){return h&&h.type.lastIndexOf(r+".xml")>-1}var i=function(){this.add("string_dquotes","insertion",function(h,r,f,g,s){if(s=='"'||s=="'"){var o=s,t=g.doc.getTextRange(f.getSelectionRange());if(t!==""&&t!=="'"&&t!='"'&&f.getWrapBehavioursEnabled())return{text:o+t+o,selection:!1};var a=f.getCursorPosition(),d=g.doc.getLine(a.row),C=d.substring(a.column,a.column+1),k=new v(g,a.row,a.column),u=k.getCurrentToken();if(C==o&&(c(u,"attribute-value")||c(u,"string")))return{text:"",selection:[1,1]};if(u||(u=k.stepBackward()),!u)return;for(;c(u,"tag-whitespace")||c(u,"whitespace");)u=k.stepBackward();var e=!C||C.match(/\s/);if(c(u,"attribute-equals")&&(e||C==">")||c(u,"decl-attribute-equals")&&(e||C=="?"))return{text:o+o,selection:[1,1]}}}),this.add("string_dquotes","deletion",function(h,r,f,g,s){var o=g.doc.getTextRange(s);if(!s.isMultiLine()&&(o=='"'||o=="'")){var t=g.doc.getLine(s.start.row),a=t.substring(s.start.column+1,s.start.column+2);if(a==o)return s.end.column++,s}}),this.add("autoclosing","insertion",function(h,r,f,g,s){if(s==">"){var o=f.getSelectionRange().start,t=new v(g,o.row,o.column),a=t.getCurrentToken()||t.stepBackward();if(!a||!(c(a,"tag-name")||c(a,"tag-whitespace")||c(a,"attribute-name")||c(a,"attribute-equals")||c(a,"attribute-value"))||c(a,"reference.attribute-value"))return;if(c(a,"attribute-value")){var d=t.getCurrentTokenColumn()+a.value.length;if(o.column<d)return;if(o.column==d){var C=t.stepForward();if(C&&c(C,"attribute-value"))return;t.stepBackward()}}if(/^\s*>/.test(g.getLine(o.row).slice(o.column)))return;for(;!c(a,"tag-name");)if(a=t.stepBackward(),a.value=="<"){a=t.stepForward();break}var k=t.getCurrentTokenRow(),u=t.getCurrentTokenColumn();if(c(t.stepBackward(),"end-tag-open"))return;var e=a.value;return k==o.row&&(e=e.substring(0,o.column-u)),this.voidElements.hasOwnProperty(e.toLowerCase())?void 0:{text:"></"+e+">",selection:[1,1]}}}),this.add("autoindent","insertion",function(h,r,f,g,s){if(s==`
`){var o=f.getCursorPosition(),t=g.getLine(o.row),a=new v(g,o.row,o.column),d=a.getCurrentToken();if(d&&d.type.indexOf("tag-close")!==-1){if(d.value=="/>")return;for(;d&&d.type.indexOf("tag-name")===-1;)d=a.stepBackward();if(!d)return;var C=d.value,k=a.getCurrentTokenRow();if(d=a.stepBackward(),!d||d.type.indexOf("end-tag")!==-1)return;if(this.voidElements&&!this.voidElements[C]){var u=g.getTokenAt(o.row,o.column+1),t=g.getLine(k),e=this.$getIndent(t),l=e+g.getTabString();return u&&u.value==="</"?{text:`
`+l+`
`+e,selection:[1,l.length,1,l.length]}:{text:`
`+l}}}}})};R.inherits(i,w),y.XmlBehaviour=i}),ace.define("ace/mode/folding/mixed",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode"],function(p,y,I){var R=p("../../lib/oop"),w=p("./fold_mode").FoldMode,v=y.FoldMode=function(c,i){this.defaultMode=c,this.subModes=i};R.inherits(v,w),(function(){this.$getMode=function(c){typeof c!="string"&&(c=c[0]);for(var i in this.subModes)if(c.indexOf(i)===0)return this.subModes[i];return null},this.$tryMode=function(c,i,h,r){var f=this.$getMode(c);return f?f.getFoldWidget(i,h,r):""},this.getFoldWidget=function(c,i,h){return this.$tryMode(c.getState(h-1),c,i,h)||this.$tryMode(c.getState(h),c,i,h)||this.defaultMode.getFoldWidget(c,i,h)},this.getFoldWidgetRange=function(c,i,h){var r=this.$getMode(c.getState(h-1));return(!r||!r.getFoldWidget(c,i,h))&&(r=this.$getMode(c.getState(h))),(!r||!r.getFoldWidget(c,i,h))&&(r=this.defaultMode),r.getFoldWidgetRange(c,i,h)}}).call(v.prototype)}),ace.define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(p,y,I){var R=p("../../lib/oop"),w=p("../../range").Range,v=p("./fold_mode").FoldMode,c=y.FoldMode=function(r,f){v.call(this),this.voidElements=r||{},this.optionalEndTags=R.mixin({},this.voidElements),f&&R.mixin(this.optionalEndTags,f)};R.inherits(c,v);var i=function(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};function h(r,f){return r.type.lastIndexOf(f+".xml")>-1}(function(){this.getFoldWidget=function(r,f,g){var s=this._getFirstTagInLine(r,g);return s?s.closing||!s.tagName&&s.selfClosing?f==="markbeginend"?"end":"":!s.tagName||s.selfClosing||this.voidElements.hasOwnProperty(s.tagName.toLowerCase())||this._findEndTagInLine(r,g,s.tagName,s.end.column)?"":"start":this.getCommentFoldWidget(r,g)},this.getCommentFoldWidget=function(r,f){return/comment/.test(r.getState(f))&&/<!-/.test(r.getLine(f))?"start":""},this._getFirstTagInLine=function(r,f){for(var g=r.getTokens(f),s=new i,o=0;o<g.length;o++){var t=g[o];if(h(t,"tag-open")){if(s.end.column=s.start.column+t.value.length,s.closing=h(t,"end-tag-open"),t=g[++o],!t)return null;for(s.tagName=t.value,s.end.column+=t.value.length,o++;o<g.length;o++)if(t=g[o],s.end.column+=t.value.length,h(t,"tag-close")){s.selfClosing=t.value=="/>";break}return s}else if(h(t,"tag-close"))return s.selfClosing=t.value=="/>",s;s.start.column+=t.value.length}return null},this._findEndTagInLine=function(r,f,g,s){for(var o=r.getTokens(f),t=0,a=0;a<o.length;a++){var d=o[a];if(t+=d.value.length,!(t<s)&&h(d,"end-tag-open")&&(d=o[a+1],d&&d.value==g))return!0}return!1},this.getFoldWidgetRange=function(r,f,g){var s=r.getMatchingTags({row:g,column:0});return s?new w(s.openTag.end.row,s.openTag.end.column,s.closeTag.start.row,s.closeTag.start.column):this.getCommentFoldWidget(r,g)&&r.getCommentFoldRange(g,r.getLine(g).length)}}).call(c.prototype)}),ace.define("ace/mode/folding/html",["require","exports","module","ace/lib/oop","ace/mode/folding/mixed","ace/mode/folding/xml","ace/mode/folding/cstyle"],function(p,y,I){var R=p("../../lib/oop"),w=p("./mixed").FoldMode,v=p("./xml").FoldMode,c=p("./cstyle").FoldMode,i=y.FoldMode=function(h,r){w.call(this,new v(h,r),{"js-":new c,"css-":new c})};R.inherits(i,w)}),ace.define("ace/mode/html_completions",["require","exports","module","ace/token_iterator"],function(p,y,I){var R=p("../token_iterator").TokenIterator,w=["accesskey","class","contenteditable","contextmenu","dir","draggable","dropzone","hidden","id","inert","itemid","itemprop","itemref","itemscope","itemtype","lang","spellcheck","style","tabindex","title","translate"],v=["onabort","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontextmenu","oncuechange","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onpause","onplay","onplaying","onprogress","onratechange","onreset","onscroll","onseeked","onseeking","onselect","onshow","onstalled","onsubmit","onsuspend","ontimeupdate","onvolumechange","onwaiting"],c=w.concat(v),i={a:{href:1,target:{_blank:1,top:1},ping:1,rel:{nofollow:1,alternate:1,author:1,bookmark:1,help:1,license:1,next:1,noreferrer:1,prefetch:1,prev:1,search:1,tag:1},media:1,hreflang:1,type:1},abbr:{},address:{},area:{shape:1,coords:1,href:1,hreflang:1,alt:1,target:1,media:1,rel:1,ping:1,type:1},article:{pubdate:1},aside:{},audio:{src:1,autobuffer:1,autoplay:{autoplay:1},loop:{loop:1},controls:{controls:1},muted:{muted:1},preload:{auto:1,metadata:1,none:1}},b:{},base:{href:1,target:1},bdi:{},bdo:{},blockquote:{cite:1},body:{onafterprint:1,onbeforeprint:1,onbeforeunload:1,onhashchange:1,onmessage:1,onoffline:1,onpopstate:1,onredo:1,onresize:1,onstorage:1,onundo:1,onunload:1},br:{},button:{autofocus:1,disabled:{disabled:1},form:1,formaction:1,formenctype:1,formmethod:1,formnovalidate:1,formtarget:1,name:1,value:1,type:{button:1,submit:1}},canvas:{width:1,height:1},caption:{},cite:{},code:{},col:{span:1},colgroup:{span:1},command:{type:1,label:1,icon:1,disabled:1,checked:1,radiogroup:1,command:1},data:{},datalist:{},dd:{},del:{cite:1,datetime:1},details:{open:1},dfn:{},dialog:{open:1},div:{},dl:{},dt:{},em:{},embed:{src:1,height:1,width:1,type:1},fieldset:{disabled:1,form:1,name:1},figcaption:{},figure:{},footer:{},form:{"accept-charset":1,action:1,autocomplete:1,enctype:{"multipart/form-data":1,"application/x-www-form-urlencoded":1},method:{get:1,post:1},name:1,novalidate:1,target:{_blank:1,top:1}},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},head:{},header:{},hr:{},html:{manifest:1},i:{},iframe:{name:1,src:1,height:1,width:1,sandbox:{"allow-same-origin":1,"allow-top-navigation":1,"allow-forms":1,"allow-scripts":1},seamless:{seamless:1}},img:{alt:1,src:1,height:1,width:1,usemap:1,ismap:1},input:{type:{text:1,password:1,hidden:1,checkbox:1,submit:1,radio:1,file:1,button:1,reset:1,image:31,color:1,date:1,datetime:1,"datetime-local":1,email:1,month:1,number:1,range:1,search:1,tel:1,time:1,url:1,week:1},accept:1,alt:1,autocomplete:{on:1,off:1},autofocus:{autofocus:1},checked:{checked:1},disabled:{disabled:1},form:1,formaction:1,formenctype:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},formmethod:{get:1,post:1},formnovalidate:{formnovalidate:1},formtarget:{_blank:1,_self:1,_parent:1,_top:1},height:1,list:1,max:1,maxlength:1,min:1,multiple:{multiple:1},name:1,pattern:1,placeholder:1,readonly:{readonly:1},required:{required:1},size:1,src:1,step:1,width:1,files:1,value:1},ins:{cite:1,datetime:1},kbd:{},keygen:{autofocus:1,challenge:{challenge:1},disabled:{disabled:1},form:1,keytype:{rsa:1,dsa:1,ec:1},name:1},label:{form:1,for:1},legend:{},li:{value:1},link:{href:1,hreflang:1,rel:{stylesheet:1,icon:1},media:{all:1,screen:1,print:1},type:{"text/css":1,"image/png":1,"image/jpeg":1,"image/gif":1},sizes:1},main:{},map:{name:1},mark:{},math:{},menu:{type:1,label:1},meta:{"http-equiv":{"content-type":1},name:{description:1,keywords:1},content:{"text/html; charset=UTF-8":1},charset:1},meter:{value:1,min:1,max:1,low:1,high:1,optimum:1},nav:{},noscript:{href:1},object:{param:1,data:1,type:1,height:1,width:1,usemap:1,name:1,form:1,classid:1},ol:{start:1,reversed:1},optgroup:{disabled:1,label:1},option:{disabled:1,selected:1,label:1,value:1},output:{for:1,form:1,name:1},p:{},param:{name:1,value:1},pre:{},progress:{value:1,max:1},q:{cite:1},rp:{},rt:{},ruby:{},s:{},samp:{},script:{charset:1,type:{"text/javascript":1},src:1,defer:1,async:1},select:{autofocus:1,disabled:1,form:1,multiple:{multiple:1},name:1,size:1,readonly:{readonly:1}},small:{},source:{src:1,type:1,media:1},span:{},strong:{},style:{type:1,media:{all:1,screen:1,print:1},scoped:1},sub:{},sup:{},svg:{},table:{summary:1},tbody:{},td:{headers:1,rowspan:1,colspan:1},textarea:{autofocus:{autofocus:1},disabled:{disabled:1},form:1,maxlength:1,name:1,placeholder:1,readonly:{readonly:1},required:{required:1},rows:1,cols:1,wrap:{on:1,off:1,hard:1,soft:1}},tfoot:{},th:{headers:1,rowspan:1,colspan:1,scope:1},thead:{},time:{datetime:1},title:{},tr:{},track:{kind:1,src:1,srclang:1,label:1,default:1},section:{},summary:{},u:{},ul:{},var:{},video:{src:1,autobuffer:1,autoplay:{autoplay:1},loop:{loop:1},controls:{controls:1},width:1,height:1,poster:1,muted:{muted:1},preload:{auto:1,metadata:1,none:1}},wbr:{}},h=Object.keys(i);function r(o,t){return o.type.lastIndexOf(t+".xml")>-1}function f(o,t){for(var a=new R(o,t.row,t.column),d=a.getCurrentToken();d&&!r(d,"tag-name");)d=a.stepBackward();if(d)return d.value}function g(o,t){for(var a=new R(o,t.row,t.column),d=a.getCurrentToken();d&&!r(d,"attribute-name");)d=a.stepBackward();if(d)return d.value}var s=function(){};(function(){this.getCompletions=function(o,t,a,d){var C=t.getTokenAt(a.row,a.column);if(!C)return[];if(r(C,"tag-name")||r(C,"tag-open")||r(C,"end-tag-open"))return this.getTagCompletions(o,t,a,d);if(r(C,"tag-whitespace")||r(C,"attribute-name"))return this.getAttributeCompletions(o,t,a,d);if(r(C,"attribute-value"))return this.getAttributeValueCompletions(o,t,a,d);var k=t.getLine(a.row).substr(0,a.column);return/&[a-z]*$/i.test(k)?this.getHTMLEntityCompletions(o,t,a,d):[]},this.getTagCompletions=function(o,t,a,d){return h.map(function(C){return{value:C,meta:"tag",score:1e6}})},this.getAttributeCompletions=function(o,t,a,d){var C=f(t,a);if(!C)return[];var k=c;return C in i&&(k=k.concat(Object.keys(i[C]))),k.map(function(u){return{caption:u,snippet:u+'="$0"',meta:"attribute",score:1e6}})},this.getAttributeValueCompletions=function(o,t,a,d){var C=f(t,a),k=g(t,a);if(!C)return[];var u=[];return C in i&&k in i[C]&&typeof i[C][k]=="object"&&(u=Object.keys(i[C][k])),u.map(function(e){return{caption:e,snippet:e,meta:"attribute value",score:1e6}})},this.getHTMLEntityCompletions=function(o,t,a,d){var C=["Aacute;","aacute;","Acirc;","acirc;","acute;","AElig;","aelig;","Agrave;","agrave;","alefsym;","Alpha;","alpha;","amp;","and;","ang;","Aring;","aring;","asymp;","Atilde;","atilde;","Auml;","auml;","bdquo;","Beta;","beta;","brvbar;","bull;","cap;","Ccedil;","ccedil;","cedil;","cent;","Chi;","chi;","circ;","clubs;","cong;","copy;","crarr;","cup;","curren;","Dagger;","dagger;","dArr;","darr;","deg;","Delta;","delta;","diams;","divide;","Eacute;","eacute;","Ecirc;","ecirc;","Egrave;","egrave;","empty;","emsp;","ensp;","Epsilon;","epsilon;","equiv;","Eta;","eta;","ETH;","eth;","Euml;","euml;","euro;","exist;","fnof;","forall;","frac12;","frac14;","frac34;","frasl;","Gamma;","gamma;","ge;","gt;","hArr;","harr;","hearts;","hellip;","Iacute;","iacute;","Icirc;","icirc;","iexcl;","Igrave;","igrave;","image;","infin;","int;","Iota;","iota;","iquest;","isin;","Iuml;","iuml;","Kappa;","kappa;","Lambda;","lambda;","lang;","laquo;","lArr;","larr;","lceil;","ldquo;","le;","lfloor;","lowast;","loz;","lrm;","lsaquo;","lsquo;","lt;","macr;","mdash;","micro;","middot;","minus;","Mu;","mu;","nabla;","nbsp;","ndash;","ne;","ni;","not;","notin;","nsub;","Ntilde;","ntilde;","Nu;","nu;","Oacute;","oacute;","Ocirc;","ocirc;","OElig;","oelig;","Ograve;","ograve;","oline;","Omega;","omega;","Omicron;","omicron;","oplus;","or;","ordf;","ordm;","Oslash;","oslash;","Otilde;","otilde;","otimes;","Ouml;","ouml;","para;","part;","permil;","perp;","Phi;","phi;","Pi;","pi;","piv;","plusmn;","pound;","Prime;","prime;","prod;","prop;","Psi;","psi;","quot;","radic;","rang;","raquo;","rArr;","rarr;","rceil;","rdquo;","real;","reg;","rfloor;","Rho;","rho;","rlm;","rsaquo;","rsquo;","sbquo;","Scaron;","scaron;","sdot;","sect;","shy;","Sigma;","sigma;","sigmaf;","sim;","spades;","sub;","sube;","sum;","sup;","sup1;","sup2;","sup3;","supe;","szlig;","Tau;","tau;","there4;","Theta;","theta;","thetasym;","thinsp;","THORN;","thorn;","tilde;","times;","trade;","Uacute;","uacute;","uArr;","uarr;","Ucirc;","ucirc;","Ugrave;","ugrave;","uml;","upsih;","Upsilon;","upsilon;","Uuml;","uuml;","weierp;","Xi;","xi;","Yacute;","yacute;","yen;","Yuml;","yuml;","Zeta;","zeta;","zwj;","zwnj;"];return C.map(function(k){return{caption:k,snippet:k,meta:"html entity",score:1e6}})}}).call(s.prototype),y.HtmlCompletions=s}),ace.define("ace/mode/html",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text","ace/mode/javascript","ace/mode/css","ace/mode/html_highlight_rules","ace/mode/behaviour/xml","ace/mode/folding/html","ace/mode/html_completions","ace/worker/worker_client"],function(p,y,I){var R=p("../lib/oop"),w=p("../lib/lang"),v=p("./text").Mode,c=p("./javascript").Mode,i=p("./css").Mode,h=p("./html_highlight_rules").HtmlHighlightRules,r=p("./behaviour/xml").XmlBehaviour,f=p("./folding/html").FoldMode,g=p("./html_completions").HtmlCompletions,s=p("../worker/worker_client").WorkerClient,o=["area","base","br","col","embed","hr","img","input","keygen","link","meta","menuitem","param","source","track","wbr"],t=["li","dt","dd","p","rt","rp","optgroup","option","colgroup","td","th"],a=function(d){this.fragmentContext=d&&d.fragmentContext,this.HighlightRules=h,this.$behaviour=new r,this.$completer=new g,this.createModeDelegates({"js-":c,"css-":i}),this.foldingRules=new f(this.voidElements,w.arrayToMap(t))};R.inherits(a,v),(function(){this.blockComment={start:"<!--",end:"-->"},this.voidElements=w.arrayToMap(o),this.getNextLineIndent=function(d,C,k){return this.$getIndent(C)},this.checkOutdent=function(d,C,k){return!1},this.getCompletions=function(d,C,k,u){return this.$completer.getCompletions(d,C,k,u)},this.createWorker=function(d){if(this.constructor==a){var C=new s(["ace"],"ace/mode/html_worker","Worker");return C.attachToDocument(d.getDocument()),this.fragmentContext&&C.call("setOptions",[{context:this.fragmentContext}]),C.on("error",function(k){d.setAnnotations(k.data)}),C.on("terminate",function(){d.clearAnnotations()}),C}},this.$id="ace/mode/html",this.snippetFileId="ace/snippets/html"}).call(a.prototype),y.Mode=a}),function(){ace.require(["ace/mode/html"],function(p){M&&(M.exports=p)})}()})(Se);var Re={exports:{}};(function(M,D){ace.define("ace/theme/textmate",["require","exports","module","ace/theme/textmate-css","ace/lib/dom"],function(p,y,I){y.isDark=!1,y.cssClass="ace-tm",y.cssText=p("./textmate-css"),y.$id="ace/theme/textmate";var R=p("../lib/dom");R.importCssString(y.cssText,y.cssClass,!1)}),function(){ace.require(["ace/theme/textmate"],function(p){M&&(M.exports=p)})}()})(Re);var Ae={exports:{}};(function(M,D){ace.define("ace/theme/twilight-css",["require","exports","module"],function(p,y,I){I.exports=`.ace-twilight .ace_gutter {
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
`}),ace.define("ace/theme/twilight",["require","exports","module","ace/theme/twilight-css","ace/lib/dom"],function(p,y,I){y.isDark=!0,y.cssClass="ace-twilight",y.cssText=p("./twilight-css");var R=p("../lib/dom");R.importCssString(y.cssText,y.cssClass,!1)}),function(){ace.require(["ace/theme/twilight"],function(p){M&&(M.exports=p)})}()})(Ae);var Me={exports:{}};(function(M,D){ace.define("ace/snippets/css.snippets",["require","exports","module"],function(p,y,I){I.exports=`snippet .
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
`}),ace.define("ace/snippets/css",["require","exports","module","ace/snippets/css.snippets"],function(p,y,I){y.snippetText=p("./css.snippets"),y.scope="css"}),function(){ace.require(["ace/snippets/css"],function(p){M&&(M.exports=p)})}()})(Me);var Ee={exports:{}};(function(M,D){ace.define("ace/snippets/javascript.snippets",["require","exports","module"],function(p,y,I){I.exports=`# Prototype
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
`}),ace.define("ace/snippets/javascript",["require","exports","module","ace/snippets/javascript.snippets"],function(p,y,I){y.snippetText=p("./javascript.snippets"),y.scope="javascript"}),function(){ace.require(["ace/snippets/javascript"],function(p){M&&(M.exports=p)})}()})(Ee);var Le={exports:{}};(function(M,D){ace.define("ace/snippets/html.snippets",["require","exports","module"],function(p,y,I){I.exports=`# Some useful Unicode entities
# Non-Breaking Space
snippet nbs
	&nbsp;
# ←
snippet left
	&#x2190;
# →
snippet right
	&#x2192;
# ↑
snippet up
	&#x2191;
# ↓
snippet down
	&#x2193;
# ↩
snippet return
	&#x21A9;
# ⇤
snippet backtab
	&#x21E4;
# ⇥
snippet tab
	&#x21E5;
# ⇧
snippet shift
	&#x21E7;
# ⌃
snippet ctrl
	&#x2303;
# ⌅
snippet enter
	&#x2305;
# ⌘
snippet cmd
	&#x2318;
# ⌥
snippet option
	&#x2325;
# ⌦
snippet delete
	&#x2326;
# ⌫
snippet backspace
	&#x232B;
# ⎋
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
`}),ace.define("ace/snippets/html",["require","exports","module","ace/snippets/html.snippets"],function(p,y,I){y.snippetText=p("./html.snippets"),y.scope="html"}),function(){ace.require(["ace/snippets/html"],function(p){M&&(M.exports=p)})}()})(Le);var Ie={exports:{}};(function(M,D){ace.define("ace/ext/searchbox-css",["require","exports","module"],function(p,y,I){I.exports=`

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
}`}),ace.define("ace/ext/searchbox",["require","exports","module","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/ext/searchbox-css","ace/keyboard/hash_handler","ace/lib/keys","ace/config"],function(p,y,I){var R=p("../lib/dom"),w=p("../lib/lang"),v=p("../lib/event"),c=p("./searchbox-css"),i=p("../keyboard/hash_handler").HashHandler,h=p("../lib/keys"),r=p("../config").nls,f=999;R.importCssString(c,"ace_searchbox",!1);var g=function(){function t(a,d,C){this.activeInput;var k=R.createElement("div");R.buildDom(["div",{class:"ace_search right"},["span",{action:"hide",class:"ace_searchbtn_close"}],["div",{class:"ace_search_form"},["input",{class:"ace_search_field",placeholder:r("Search for"),spellcheck:"false"}],["span",{action:"findPrev",class:"ace_searchbtn prev"},"​"],["span",{action:"findNext",class:"ace_searchbtn next"},"​"],["span",{action:"findAll",class:"ace_searchbtn",title:"Alt-Enter"},r("All")]],["div",{class:"ace_replace_form"},["input",{class:"ace_search_field",placeholder:r("Replace with"),spellcheck:"false"}],["span",{action:"replaceAndFindNext",class:"ace_searchbtn"},r("Replace")],["span",{action:"replaceAll",class:"ace_searchbtn"},r("All")]],["div",{class:"ace_search_options"},["span",{action:"toggleReplace",class:"ace_button",title:r("Toggle Replace mode"),style:"float:left;margin-top:-2px;padding:0 5px;"},"+"],["span",{class:"ace_search_counter"}],["span",{action:"toggleRegexpMode",class:"ace_button",title:r("RegExp Search")},".*"],["span",{action:"toggleCaseSensitive",class:"ace_button",title:r("CaseSensitive Search")},"Aa"],["span",{action:"toggleWholeWords",class:"ace_button",title:r("Whole Word Search")},"\\b"],["span",{action:"searchInSelection",class:"ace_button",title:r("Search In Selection")},"S"]]],k),this.element=k.firstChild,this.setSession=this.setSession.bind(this),this.$init(),this.setEditor(a),R.importCssString(c,"ace_searchbox",a.container)}return t.prototype.setEditor=function(a){a.searchBox=this,a.renderer.scroller.appendChild(this.element),this.editor=a},t.prototype.setSession=function(a){this.searchRange=null,this.$syncOptions(!0)},t.prototype.$initElements=function(a){this.searchBox=a.querySelector(".ace_search_form"),this.replaceBox=a.querySelector(".ace_replace_form"),this.searchOption=a.querySelector("[action=searchInSelection]"),this.replaceOption=a.querySelector("[action=toggleReplace]"),this.regExpOption=a.querySelector("[action=toggleRegexpMode]"),this.caseSensitiveOption=a.querySelector("[action=toggleCaseSensitive]"),this.wholeWordOption=a.querySelector("[action=toggleWholeWords]"),this.searchInput=this.searchBox.querySelector(".ace_search_field"),this.replaceInput=this.replaceBox.querySelector(".ace_search_field"),this.searchCounter=a.querySelector(".ace_search_counter")},t.prototype.$init=function(){var a=this.element;this.$initElements(a);var d=this;v.addListener(a,"mousedown",function(C){setTimeout(function(){d.activeInput.focus()},0),v.stopPropagation(C)}),v.addListener(a,"click",function(C){var k=C.target||C.srcElement,u=k.getAttribute("action");u&&d[u]?d[u]():d.$searchBarKb.commands[u]&&d.$searchBarKb.commands[u].exec(d),v.stopPropagation(C)}),v.addCommandKeyListener(a,function(C,k,u){var e=h.keyCodeToString(u),l=d.$searchBarKb.findKeyCommand(k,e);l&&l.exec&&(l.exec(d),v.stopEvent(C))}),this.$onChange=w.delayedCall(function(){d.find(!1,!1)}),v.addListener(this.searchInput,"input",function(){d.$onChange.schedule(20)}),v.addListener(this.searchInput,"focus",function(){d.activeInput=d.searchInput,d.searchInput.value&&d.highlight()}),v.addListener(this.replaceInput,"focus",function(){d.activeInput=d.replaceInput,d.searchInput.value&&d.highlight()})},t.prototype.setSearchRange=function(a){this.searchRange=a,a?this.searchRangeMarker=this.editor.session.addMarker(a,"ace_active-line"):this.searchRangeMarker&&(this.editor.session.removeMarker(this.searchRangeMarker),this.searchRangeMarker=null)},t.prototype.$syncOptions=function(a){R.setCssClass(this.replaceOption,"checked",this.searchRange),R.setCssClass(this.searchOption,"checked",this.searchOption.checked),this.replaceOption.textContent=this.replaceOption.checked?"-":"+",R.setCssClass(this.regExpOption,"checked",this.regExpOption.checked),R.setCssClass(this.wholeWordOption,"checked",this.wholeWordOption.checked),R.setCssClass(this.caseSensitiveOption,"checked",this.caseSensitiveOption.checked);var d=this.editor.getReadOnly();this.replaceOption.style.display=d?"none":"",this.replaceBox.style.display=this.replaceOption.checked&&!d?"":"none",this.find(!1,!1,a)},t.prototype.highlight=function(a){this.editor.session.highlight(a||this.editor.$search.$options.re),this.editor.renderer.updateBackMarkers()},t.prototype.find=function(a,d,C){var k=this.editor.find(this.searchInput.value,{skipCurrent:a,backwards:d,wrap:!0,regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked,preventScroll:C,range:this.searchRange}),u=!k&&this.searchInput.value;R.setCssClass(this.searchBox,"ace_nomatch",u),this.editor._emit("findSearchBox",{match:!u}),this.highlight(),this.updateCounter()},t.prototype.updateCounter=function(){var a=this.editor,d=a.$search.$options.re,C=d.unicode,k=0,u=0;if(d){var e=this.searchRange?a.session.getTextRange(this.searchRange):a.getValue(),l=a.session.doc.positionToIndex(a.selection.anchor);this.searchRange&&(l-=a.session.doc.positionToIndex(this.searchRange.start));for(var n=d.lastIndex=0,m;(m=d.exec(e))&&(k++,n=m.index,n<=l&&u++,!(k>f||!m[0]&&(d.lastIndex=n+=w.skipEmptyMatch(e,n,C),n>=e.length))););}this.searchCounter.textContent=r("$0 of $1",[u,k>f?f+"+":k])},t.prototype.findNext=function(){this.find(!0,!1)},t.prototype.findPrev=function(){this.find(!0,!0)},t.prototype.findAll=function(){var a=this.editor.findAll(this.searchInput.value,{regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked}),d=!a&&this.searchInput.value;R.setCssClass(this.searchBox,"ace_nomatch",d),this.editor._emit("findSearchBox",{match:!d}),this.highlight(),this.hide()},t.prototype.replace=function(){this.editor.getReadOnly()||this.editor.replace(this.replaceInput.value)},t.prototype.replaceAndFindNext=function(){this.editor.getReadOnly()||(this.editor.replace(this.replaceInput.value),this.findNext())},t.prototype.replaceAll=function(){this.editor.getReadOnly()||this.editor.replaceAll(this.replaceInput.value)},t.prototype.hide=function(){this.active=!1,this.setSearchRange(null),this.editor.off("changeSession",this.setSession),this.element.style.display="none",this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb),this.editor.focus()},t.prototype.show=function(a,d){this.active=!0,this.editor.on("changeSession",this.setSession),this.element.style.display="",this.replaceOption.checked=d,a&&(this.searchInput.value=a),this.searchInput.focus(),this.searchInput.select(),this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb),this.$syncOptions(!0)},t.prototype.isFocused=function(){var a=document.activeElement;return a==this.searchInput||a==this.replaceInput},t}(),s=new i;s.bindKeys({"Ctrl-f|Command-f":function(t){var a=t.isReplace=!t.isReplace;t.replaceBox.style.display=a?"":"none",t.replaceOption.checked=!1,t.$syncOptions(),t.searchInput.focus()},"Ctrl-H|Command-Option-F":function(t){t.editor.getReadOnly()||(t.replaceOption.checked=!0,t.$syncOptions(),t.replaceInput.focus())},"Ctrl-G|Command-G":function(t){t.findNext()},"Ctrl-Shift-G|Command-Shift-G":function(t){t.findPrev()},esc:function(t){setTimeout(function(){t.hide()})},Return:function(t){t.activeInput==t.replaceInput&&t.replace(),t.findNext()},"Shift-Return":function(t){t.activeInput==t.replaceInput&&t.replace(),t.findPrev()},"Alt-Return":function(t){t.activeInput==t.replaceInput&&t.replaceAll(),t.findAll()},Tab:function(t){(t.activeInput==t.replaceInput?t.searchInput:t.replaceInput).focus()}}),s.addCommands([{name:"toggleRegexpMode",bindKey:{win:"Alt-R|Alt-/",mac:"Ctrl-Alt-R|Ctrl-Alt-/"},exec:function(t){t.regExpOption.checked=!t.regExpOption.checked,t.$syncOptions()}},{name:"toggleCaseSensitive",bindKey:{win:"Alt-C|Alt-I",mac:"Ctrl-Alt-R|Ctrl-Alt-I"},exec:function(t){t.caseSensitiveOption.checked=!t.caseSensitiveOption.checked,t.$syncOptions()}},{name:"toggleWholeWords",bindKey:{win:"Alt-B|Alt-W",mac:"Ctrl-Alt-B|Ctrl-Alt-W"},exec:function(t){t.wholeWordOption.checked=!t.wholeWordOption.checked,t.$syncOptions()}},{name:"toggleReplace",exec:function(t){t.replaceOption.checked=!t.replaceOption.checked,t.$syncOptions()}},{name:"searchInSelection",exec:function(t){t.searchOption.checked=!t.searchRange,t.setSearchRange(t.searchOption.checked&&t.editor.getSelectionRange()),t.$syncOptions()}}]);var o=new i([{bindKey:"Esc",name:"closeSearchBar",exec:function(t){t.searchBox.hide()}}]);g.prototype.$searchBarKb=s,g.prototype.$closeSearchBarKb=o,y.SearchBox=g,y.Search=function(t,a){var d=t.searchBox||new g(t);d.show(t.session.getTextRange(),a)}}),function(){ace.require(["ace/ext/searchbox"],function(p){M&&(M.exports=p)})}()})(Ie);var Oe={exports:{}};(function(M,D){ace.define("ace/snippets",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter","ace/lib/lang","ace/range","ace/range_list","ace/keyboard/hash_handler","ace/tokenizer","ace/clipboard","ace/editor"],function(p,y,I){var R=p("./lib/dom"),w=p("./lib/oop"),v=p("./lib/event_emitter").EventEmitter,c=p("./lib/lang"),i=p("./range").Range,h=p("./range_list").RangeList,r=p("./keyboard/hash_handler").HashHandler,f=p("./tokenizer").Tokenizer,g=p("./clipboard"),s={CURRENT_WORD:function(e){return e.session.getTextRange(e.session.getWordRange())},SELECTION:function(e,l,n){var m=e.session.getTextRange();return n?m.replace(/\n\r?([ \t]*\S)/g,`
`+n+"$1"):m},CURRENT_LINE:function(e){return e.session.getLine(e.getCursorPosition().row)},PREV_LINE:function(e){return e.session.getLine(e.getCursorPosition().row-1)},LINE_INDEX:function(e){return e.getCursorPosition().row},LINE_NUMBER:function(e){return e.getCursorPosition().row+1},SOFT_TABS:function(e){return e.session.getUseSoftTabs()?"YES":"NO"},TAB_SIZE:function(e){return e.session.getTabSize()},CLIPBOARD:function(e){return g.getText&&g.getText()},FILENAME:function(e){return/[^/\\]*$/.exec(this.FILEPATH(e))[0]},FILENAME_BASE:function(e){return/[^/\\]*$/.exec(this.FILEPATH(e))[0].replace(/\.[^.]*$/,"")},DIRECTORY:function(e){return this.FILEPATH(e).replace(/[^/\\]*$/,"")},FILEPATH:function(e){return"/not implemented.txt"},WORKSPACE_NAME:function(){return"Unknown"},FULLNAME:function(){return"Unknown"},BLOCK_COMMENT_START:function(e){var l=e.session.$mode||{};return l.blockComment&&l.blockComment.start||""},BLOCK_COMMENT_END:function(e){var l=e.session.$mode||{};return l.blockComment&&l.blockComment.end||""},LINE_COMMENT:function(e){var l=e.session.$mode||{};return l.lineCommentStart||""},CURRENT_YEAR:o.bind(null,{year:"numeric"}),CURRENT_YEAR_SHORT:o.bind(null,{year:"2-digit"}),CURRENT_MONTH:o.bind(null,{month:"numeric"}),CURRENT_MONTH_NAME:o.bind(null,{month:"long"}),CURRENT_MONTH_NAME_SHORT:o.bind(null,{month:"short"}),CURRENT_DATE:o.bind(null,{day:"2-digit"}),CURRENT_DAY_NAME:o.bind(null,{weekday:"long"}),CURRENT_DAY_NAME_SHORT:o.bind(null,{weekday:"short"}),CURRENT_HOUR:o.bind(null,{hour:"2-digit",hour12:!1}),CURRENT_MINUTE:o.bind(null,{minute:"2-digit"}),CURRENT_SECOND:o.bind(null,{second:"2-digit"})};s.SELECTED_TEXT=s.SELECTION;function o(e){var l=new Date().toLocaleString("en-us",e);return l.length==1?"0"+l:l}var t=function(){function e(){this.snippetMap={},this.snippetNameMap={},this.variables=s}return e.prototype.getTokenizer=function(){return e.$tokenizer||this.createTokenizer()},e.prototype.createTokenizer=function(){function l(b){return b=b.substr(1),/^\d+$/.test(b)?[{tabstopId:parseInt(b,10)}]:[{text:b}]}function n(b){return"(?:[^\\\\"+b+"]|\\\\.)"}var m={regex:"/("+n("/")+"+)/",onMatch:function(b,T,S){var $=S[0];return $.fmtString=!0,$.guard=b.slice(1,-1),$.flag="",""},next:"formatString"};return e.$tokenizer=new f({start:[{regex:/\\./,onMatch:function(b,T,S){var $=b[1];return($=="}"&&S.length||"`$\\".indexOf($)!=-1)&&(b=$),[b]}},{regex:/}/,onMatch:function(b,T,S){return[S.length?S.shift():b]}},{regex:/\$(?:\d+|\w+)/,onMatch:l},{regex:/\$\{[\dA-Z_a-z]+/,onMatch:function(b,T,S){var $=l(b.substr(1));return S.unshift($[0]),$},next:"snippetVar"},{regex:/\n/,token:"newline",merge:!1}],snippetVar:[{regex:"\\|"+n("\\|")+"*\\|",onMatch:function(b,T,S){var $=b.slice(1,-1).replace(/\\[,|\\]|,/g,function(_){return _.length==2?_[1]:"\0"}).split("\0").map(function(_){return{value:_}});return S[0].choices=$,[$[0]]},next:"start"},m,{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"start"}],formatString:[{regex:/:/,onMatch:function(b,T,S){return S.length&&S[0].expectElse?(S[0].expectElse=!1,S[0].ifEnd={elseEnd:S[0]},[S[0].ifEnd]):":"}},{regex:/\\./,onMatch:function(b,T,S){var $=b[1];return $=="}"&&S.length||"`$\\".indexOf($)!=-1?b=$:$=="n"?b=`
`:$=="t"?b="	":"ulULE".indexOf($)!=-1&&(b={changeCase:$,local:$>"a"}),[b]}},{regex:"/\\w*}",onMatch:function(b,T,S){var $=S.shift();return $&&($.flag=b.slice(1,-1)),this.next=$&&$.tabstopId?"start":"",[$||b]},next:"start"},{regex:/\$(?:\d+|\w+)/,onMatch:function(b,T,S){return[{text:b.slice(1)}]}},{regex:/\${\w+/,onMatch:function(b,T,S){var $={text:b.slice(2)};return S.unshift($),[$]},next:"formatStringVar"},{regex:/\n/,token:"newline",merge:!1},{regex:/}/,onMatch:function(b,T,S){var $=S.shift();return this.next=$&&$.tabstopId?"start":"",[$||b]},next:"start"}],formatStringVar:[{regex:/:\/\w+}/,onMatch:function(b,T,S){var $=S[0];return $.formatFunction=b.slice(2,-1),[S.shift()]},next:"formatString"},m,{regex:/:[\?\-+]?/,onMatch:function(b,T,S){b[1]=="+"&&(S[0].ifEnd=S[0]),b[1]=="?"&&(S[0].expectElse=!0)},next:"formatString"},{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"formatString"}]}),e.$tokenizer},e.prototype.tokenizeTmSnippet=function(l,n){return this.getTokenizer().getLineTokens(l,n).tokens.map(function(m){return m.value||m})},e.prototype.getVariableValue=function(l,n,m){if(/^\d+$/.test(n))return(this.variables.__||{})[n]||"";if(/^[A-Z]\d+$/.test(n))return(this.variables[n[0]+"__"]||{})[n.substr(1)]||"";if(n=n.replace(/^TM_/,""),!this.variables.hasOwnProperty(n))return"";var b=this.variables[n];return typeof b=="function"&&(b=this.variables[n](l,n,m)),b??""},e.prototype.tmStrFormat=function(l,n,m){if(!n.fmt)return l;var b=n.flag||"",T=n.guard;T=new RegExp(T,b.replace(/[^gim]/g,""));var S=typeof n.fmt=="string"?this.tokenizeTmSnippet(n.fmt,"formatString"):n.fmt,$=this,_=l.replace(T,function(){var x=$.variables.__;$.variables.__=[].slice.call(arguments);for(var A=$.resolveVariables(S,m),E="E",L=0;L<A.length;L++){var O=A[L];if(typeof O=="object")if(A[L]="",O.changeCase&&O.local){var z=A[L+1];z&&typeof z=="string"&&(O.changeCase=="u"?A[L]=z[0].toUpperCase():A[L]=z[0].toLowerCase(),A[L+1]=z.substr(1))}else O.changeCase&&(E=O.changeCase);else E=="U"?A[L]=O.toUpperCase():E=="L"&&(A[L]=O.toLowerCase())}return $.variables.__=x,A.join("")});return _},e.prototype.tmFormatFunction=function(l,n,m){return n.formatFunction=="upcase"?l.toUpperCase():n.formatFunction=="downcase"?l.toLowerCase():l},e.prototype.resolveVariables=function(l,n){for(var m=[],b="",T=!0,S=0;S<l.length;S++){var $=l[S];if(typeof $=="string"){m.push($),$==`
`?(T=!0,b=""):T&&(b=/^\t*/.exec($)[0],T=/\S/.test($));continue}if($){if(T=!1,$.fmtString){var _=l.indexOf($,S+1);_==-1&&(_=l.length),$.fmt=l.slice(S+1,_),S=_}if($.text){var x=this.getVariableValue(n,$.text,b)+"";$.fmtString&&(x=this.tmStrFormat(x,$,n)),$.formatFunction&&(x=this.tmFormatFunction(x,$,n)),x&&!$.ifEnd?(m.push(x),A($)):!x&&$.ifEnd&&A($.ifEnd)}else $.elseEnd?A($.elseEnd):($.tabstopId!=null||$.changeCase!=null)&&m.push($)}}function A(E){var L=l.indexOf(E,S+1);L!=-1&&(S=L)}return m},e.prototype.getDisplayTextForSnippet=function(l,n){var m=a.call(this,l,n);return m.text},e.prototype.insertSnippetForSelection=function(l,n,m){m===void 0&&(m={});var b=a.call(this,l,n,m),T=l.getSelectionRange(),S=l.session.replace(T,b.text),$=new d(l),_=l.inVirtualSelectionMode&&l.selection.index;$.addTabstops(b.tabstops,T.start,S,_)},e.prototype.insertSnippet=function(l,n,m){m===void 0&&(m={});var b=this;if(l.inVirtualSelectionMode)return b.insertSnippetForSelection(l,n,m);l.forEachSelection(function(){b.insertSnippetForSelection(l,n,m)},null,{keepOrder:!0}),l.tabstopManager&&l.tabstopManager.tabNext()},e.prototype.$getScope=function(l){var n=l.session.$mode.$id||"";if(n=n.split("/").pop(),n==="html"||n==="php"){n==="php"&&!l.session.$mode.inlinePhp&&(n="html");var m=l.getCursorPosition(),b=l.session.getState(m.row);typeof b=="object"&&(b=b[0]),b.substring&&(b.substring(0,3)=="js-"?n="javascript":b.substring(0,4)=="css-"?n="css":b.substring(0,4)=="php-"&&(n="php"))}return n},e.prototype.getActiveScopes=function(l){var n=this.$getScope(l),m=[n],b=this.snippetMap;return b[n]&&b[n].includeScopes&&m.push.apply(m,b[n].includeScopes),m.push("_"),m},e.prototype.expandWithTab=function(l,n){var m=this,b=l.forEachSelection(function(){return m.expandSnippetForSelection(l,n)},null,{keepOrder:!0});return b&&l.tabstopManager&&l.tabstopManager.tabNext(),b},e.prototype.expandSnippetForSelection=function(l,n){var m=l.getCursorPosition(),b=l.session.getLine(m.row),T=b.substring(0,m.column),S=b.substr(m.column),$=this.snippetMap,_;return this.getActiveScopes(l).some(function(x){var A=$[x];return A&&(_=this.findMatchingSnippet(A,T,S)),!!_},this),_?(n&&n.dryRun||(l.session.doc.removeInLine(m.row,m.column-_.replaceBefore.length,m.column+_.replaceAfter.length),this.variables.M__=_.matchBefore,this.variables.T__=_.matchAfter,this.insertSnippetForSelection(l,_.content),this.variables.M__=this.variables.T__=null),!0):!1},e.prototype.findMatchingSnippet=function(l,n,m){for(var b=l.length;b--;){var T=l[b];if(!(T.startRe&&!T.startRe.test(n))&&!(T.endRe&&!T.endRe.test(m))&&!(!T.startRe&&!T.endRe))return T.matchBefore=T.startRe?T.startRe.exec(n):[""],T.matchAfter=T.endRe?T.endRe.exec(m):[""],T.replaceBefore=T.triggerRe?T.triggerRe.exec(n)[0]:"",T.replaceAfter=T.endTriggerRe?T.endTriggerRe.exec(m)[0]:"",T}},e.prototype.register=function(l,n){var m=this.snippetMap,b=this.snippetNameMap,T=this;l||(l=[]);function S(x){return x&&!/^\^?\(.*\)\$?$|^\\b$/.test(x)&&(x="(?:"+x+")"),x||""}function $(x,A,E){return x=S(x),A=S(A),E?(x=A+x,x&&x[x.length-1]!="$"&&(x=x+"$")):(x=x+A,x&&x[0]!="^"&&(x="^"+x)),new RegExp(x)}function _(x){x.scope||(x.scope=n||"_"),n=x.scope,m[n]||(m[n]=[],b[n]={});var A=b[n];if(x.name){var E=A[x.name];E&&T.unregister(E),A[x.name]=x}m[n].push(x),x.prefix&&(x.tabTrigger=x.prefix),!x.content&&x.body&&(x.content=Array.isArray(x.body)?x.body.join(`
`):x.body),x.tabTrigger&&!x.trigger&&(!x.guard&&/^\w/.test(x.tabTrigger)&&(x.guard="\\b"),x.trigger=c.escapeRegExp(x.tabTrigger)),!(!x.trigger&&!x.guard&&!x.endTrigger&&!x.endGuard)&&(x.startRe=$(x.trigger,x.guard,!0),x.triggerRe=new RegExp(x.trigger),x.endRe=$(x.endTrigger,x.endGuard,!0),x.endTriggerRe=new RegExp(x.endTrigger))}Array.isArray(l)?l.forEach(_):Object.keys(l).forEach(function(x){_(l[x])}),this._signal("registerSnippets",{scope:n})},e.prototype.unregister=function(l,n){var m=this.snippetMap,b=this.snippetNameMap;function T(S){var $=b[S.scope||n];if($&&$[S.name]){delete $[S.name];var _=m[S.scope||n],x=_&&_.indexOf(S);x>=0&&_.splice(x,1)}}l.content?T(l):Array.isArray(l)&&l.forEach(T)},e.prototype.parseSnippetFile=function(l){l=l.replace(/\r/g,"");for(var n=[],m={},b=/^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm,T;T=b.exec(l);){if(T[1])try{m=JSON.parse(T[1]),n.push(m)}catch{}if(T[4])m.content=T[4].replace(/^\t/gm,""),n.push(m),m={};else{var S=T[2],$=T[3];if(S=="regex"){var _=/\/((?:[^\/\\]|\\.)*)|$/g;m.guard=_.exec($)[1],m.trigger=_.exec($)[1],m.endTrigger=_.exec($)[1],m.endGuard=_.exec($)[1]}else S=="snippet"?(m.tabTrigger=$.match(/^\S*/)[0],m.name||(m.name=$)):S&&(m[S]=$)}}return n},e.prototype.getSnippetByName=function(l,n){var m=this.snippetNameMap,b;return this.getActiveScopes(n).some(function(T){var S=m[T];return S&&(b=S[l]),!!b},this),b},e}();w.implement(t.prototype,v);var a=function(e,l,n){n===void 0&&(n={});var m=e.getCursorPosition(),b=e.session.getLine(m.row),T=e.session.getTabString(),S=b.match(/^\s*/)[0];m.column<S.length&&(S=S.slice(0,m.column)),l=l.replace(/\r/g,"");var $=this.tokenizeTmSnippet(l);$=this.resolveVariables($,e),$=$.map(function(F){return F==`
`&&!n.excludeExtraIndent?F+S:typeof F=="string"?F.replace(/\t/g,T):F});var _=[];$.forEach(function(F,X){if(typeof F=="object"){var K=F.tabstopId,H=_[K];if(H||(H=_[K]=[],H.index=K,H.value="",H.parents={}),H.indexOf(F)===-1){F.choices&&!H.choices&&(H.choices=F.choices),H.push(F);var Z=$.indexOf(F,X+1);if(Z!==-1){var Q=$.slice(X+1,Z),se=Q.some(function(le){return typeof le=="object"});se&&!H.value?H.value=Q:Q.length&&(!H.value||typeof H.value!="string")&&(H.value=Q.join(""))}}}}),_.forEach(function(F){F.length=0});var x={};function A(F){for(var X=[],K=0;K<F.length;K++){var H=F[K];if(typeof H=="object"){if(x[H.tabstopId])continue;var Z=F.lastIndexOf(H,K-1);H=X[Z]||{tabstopId:H.tabstopId}}X[K]=H}return X}for(var E=0;E<$.length;E++){var L=$[E];if(typeof L=="object"){var O=L.tabstopId,z=_[O],N=$.indexOf(L,E+1);if(x[O]){x[O]===L&&(delete x[O],Object.keys(x).forEach(function(F){z.parents[F]=!0}));continue}x[O]=L;var j=z.value;typeof j!="string"?j=A(j):L.fmt&&(j=this.tmStrFormat(j,L,e)),$.splice.apply($,[E+1,Math.max(0,N-E)].concat(j,L)),z.indexOf(L)===-1&&z.push(L)}}var B=0,U=0,P="";return $.forEach(function(F){if(typeof F=="string"){var X=F.split(`
`);X.length>1?(U=X[X.length-1].length,B+=X.length-1):U+=F.length,P+=F}else F&&(F.start?F.end={row:B,column:U}:F.start={row:B,column:U})}),{text:P,tabstops:_,tokens:$}},d=function(){function e(l){if(this.index=0,this.ranges=[],this.tabstops=[],l.tabstopManager)return l.tabstopManager;l.tabstopManager=this,this.$onChange=this.onChange.bind(this),this.$onChangeSelection=c.delayedCall(this.onChangeSelection.bind(this)).schedule,this.$onChangeSession=this.onChangeSession.bind(this),this.$onAfterExec=this.onAfterExec.bind(this),this.attach(l)}return e.prototype.attach=function(l){this.$openTabstops=null,this.selectedTabstop=null,this.editor=l,this.session=l.session,this.editor.on("change",this.$onChange),this.editor.on("changeSelection",this.$onChangeSelection),this.editor.on("changeSession",this.$onChangeSession),this.editor.commands.on("afterExec",this.$onAfterExec),this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},e.prototype.detach=function(){this.tabstops.forEach(this.removeTabstopMarkers,this),this.ranges.length=0,this.tabstops.length=0,this.selectedTabstop=null,this.editor.off("change",this.$onChange),this.editor.off("changeSelection",this.$onChangeSelection),this.editor.off("changeSession",this.$onChangeSession),this.editor.commands.off("afterExec",this.$onAfterExec),this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.tabstopManager=null,this.session=null,this.editor=null},e.prototype.onChange=function(l){for(var n=l.action[0]=="r",m=this.selectedTabstop||{},b=m.parents||{},T=this.tabstops.slice(),S=0;S<T.length;S++){var $=T[S],_=$==m||b[$.index];if($.rangeList.$bias=_?0:1,l.action=="remove"&&$!==m){var x=$.parents&&$.parents[m.index],A=$.rangeList.pointIndex(l.start,x);A=A<0?-A-1:A+1;var E=$.rangeList.pointIndex(l.end,x);E=E<0?-E-1:E-1;for(var L=$.rangeList.ranges.slice(A,E),O=0;O<L.length;O++)this.removeRange(L[O])}$.rangeList.$onChange(l)}var z=this.session;!this.$inChange&&n&&z.getLength()==1&&!z.getValue()&&this.detach()},e.prototype.updateLinkedFields=function(){var l=this.selectedTabstop;if(!(!l||!l.hasLinkedRanges||!l.firstNonLinked)){this.$inChange=!0;for(var n=this.session,m=n.getTextRange(l.firstNonLinked),b=0;b<l.length;b++){var T=l[b];if(T.linked){var S=T.original,$=y.snippetManager.tmStrFormat(m,S,this.editor);n.replace(T,$)}}this.$inChange=!1}},e.prototype.onAfterExec=function(l){l.command&&!l.command.readOnly&&this.updateLinkedFields()},e.prototype.onChangeSelection=function(){if(this.editor){for(var l=this.editor.selection.lead,n=this.editor.selection.anchor,m=this.editor.selection.isEmpty(),b=0;b<this.ranges.length;b++)if(!this.ranges[b].linked){var T=this.ranges[b].contains(l.row,l.column),S=m||this.ranges[b].contains(n.row,n.column);if(T&&S)return}this.detach()}},e.prototype.onChangeSession=function(){this.detach()},e.prototype.tabNext=function(l){var n=this.tabstops.length,m=this.index+(l||1);m=Math.min(Math.max(m,1),n),m==n&&(m=0),this.selectTabstop(m),m===0&&this.detach()},e.prototype.selectTabstop=function(l){this.$openTabstops=null;var n=this.tabstops[this.index];if(n&&this.addTabstopMarkers(n),this.index=l,n=this.tabstops[this.index],!(!n||!n.length)){this.selectedTabstop=n;var m=n.firstNonLinked||n;if(n.choices&&(m.cursor=m.start),this.editor.inVirtualSelectionMode)this.editor.selection.fromOrientedRange(m);else{var b=this.editor.multiSelect;b.toSingleRange(m);for(var T=0;T<n.length;T++)n.hasLinkedRanges&&n[T].linked||b.addRange(n[T].clone(),!0)}this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler),this.selectedTabstop&&this.selectedTabstop.choices&&this.editor.execCommand("startAutocomplete",{matches:this.selectedTabstop.choices})}},e.prototype.addTabstops=function(l,n,m){var b=this.useLink||!this.editor.getOption("enableMultiselect");if(this.$openTabstops||(this.$openTabstops=[]),!l[0]){var T=i.fromPoints(m,m);k(T.start,n),k(T.end,n),l[0]=[T],l[0].index=0}var S=this.index,$=[S+1,0],_=this.ranges;l.forEach(function(x,A){for(var E=this.$openTabstops[A]||x,L=0;L<x.length;L++){var O=x[L],z=i.fromPoints(O.start,O.end||O.start);C(z.start,n),C(z.end,n),z.original=O,z.tabstop=E,_.push(z),E!=x?E.unshift(z):E[L]=z,O.fmtString||E.firstNonLinked&&b?(z.linked=!0,E.hasLinkedRanges=!0):E.firstNonLinked||(E.firstNonLinked=z)}E.firstNonLinked||(E.hasLinkedRanges=!1),E===x&&($.push(E),this.$openTabstops[A]=E),this.addTabstopMarkers(E),E.rangeList=E.rangeList||new h,E.rangeList.$bias=0,E.rangeList.addList(E)},this),$.length>2&&(this.tabstops.length&&$.push($.splice(2,1)[0]),this.tabstops.splice.apply(this.tabstops,$))},e.prototype.addTabstopMarkers=function(l){var n=this.session;l.forEach(function(m){m.markerId||(m.markerId=n.addMarker(m,"ace_snippet-marker","text"))})},e.prototype.removeTabstopMarkers=function(l){var n=this.session;l.forEach(function(m){n.removeMarker(m.markerId),m.markerId=null})},e.prototype.removeRange=function(l){var n=l.tabstop.indexOf(l);n!=-1&&l.tabstop.splice(n,1),n=this.ranges.indexOf(l),n!=-1&&this.ranges.splice(n,1),n=l.tabstop.rangeList.ranges.indexOf(l),n!=-1&&l.tabstop.splice(n,1),this.session.removeMarker(l.markerId),l.tabstop.length||(n=this.tabstops.indexOf(l.tabstop),n!=-1&&this.tabstops.splice(n,1),this.tabstops.length||this.detach())},e}();d.prototype.keyboardHandler=new r,d.prototype.keyboardHandler.bindKeys({Tab:function(e){y.snippetManager&&y.snippetManager.expandWithTab(e)||(e.tabstopManager.tabNext(1),e.renderer.scrollCursorIntoView())},"Shift-Tab":function(e){e.tabstopManager.tabNext(-1),e.renderer.scrollCursorIntoView()},Esc:function(e){e.tabstopManager.detach()}});var C=function(e,l){e.row==0&&(e.column+=l.column),e.row+=l.row},k=function(e,l){e.row==l.row&&(e.column-=l.column),e.row-=l.row};R.importCssString(`
.ace_snippet-marker {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: rgba(194, 193, 208, 0.09);
    border: 1px dotted rgba(211, 208, 235, 0.62);
    position: absolute;
}`,"snippets.css",!1),y.snippetManager=new t;var u=p("./editor").Editor;(function(){this.insertSnippet=function(e,l){return y.snippetManager.insertSnippet(this,e,l)},this.expandSnippet=function(e){return y.snippetManager.expandWithTab(this,e)}}).call(u.prototype)}),ace.define("ace/autocomplete/popup",["require","exports","module","ace/virtual_renderer","ace/editor","ace/range","ace/lib/event","ace/lib/lang","ace/lib/dom","ace/config","ace/lib/useragent"],function(p,y,I){var R=p("../virtual_renderer").VirtualRenderer,w=p("../editor").Editor,v=p("../range").Range,c=p("../lib/event"),i=p("../lib/lang"),h=p("../lib/dom"),r=p("../config").nls,f=p("./../lib/useragent"),g=function(C){return"suggest-aria-id:".concat(C)},s=f.isSafari?"menu":"listbox",o=f.isSafari?"menuitem":"option",t=f.isSafari?"aria-current":"aria-selected",a=function(C){var k=new R(C);k.$maxLines=4;var u=new w(k);return u.setHighlightActiveLine(!1),u.setShowPrintMargin(!1),u.renderer.setShowGutter(!1),u.renderer.setHighlightGutterLine(!1),u.$mouseHandler.$focusTimeout=0,u.$highlightTagPending=!0,u},d=function(){function C(k){var u=h.createElement("div"),e=a(u);k&&k.appendChild(u),u.style.display="none",e.renderer.content.style.cursor="default",e.renderer.setStyle("ace_autocomplete"),e.renderer.$textLayer.element.setAttribute("role",s),e.renderer.$textLayer.element.setAttribute("aria-roledescription",r("Autocomplete suggestions")),e.renderer.$textLayer.element.setAttribute("aria-label",r("Autocomplete suggestions")),e.renderer.textarea.setAttribute("aria-hidden","true"),e.setOption("displayIndentGuides",!1),e.setOption("dragDelay",150);var l=function(){};e.focus=l,e.$isFocused=!0,e.renderer.$cursorLayer.restartTimer=l,e.renderer.$cursorLayer.element.style.opacity="0",e.renderer.$maxLines=8,e.renderer.$keepTextAreaAtCursor=!1,e.setHighlightActiveLine(!1),e.session.highlight(""),e.session.$searchHighlight.clazz="ace_highlight-marker",e.on("mousedown",function(_){var x=_.getDocumentPosition();e.selection.moveToPosition(x),b.start.row=b.end.row=x.row,_.stop()});var n,m=new v(-1,0,-1,1/0),b=new v(-1,0,-1,1/0);b.id=e.session.addMarker(b,"ace_active-line","fullLine"),e.setSelectOnHover=function(_){_?m.id&&(e.session.removeMarker(m.id),m.id=null):m.id=e.session.addMarker(m,"ace_line-hover","fullLine")},e.setSelectOnHover(!1),e.on("mousemove",function(_){if(!n){n=_;return}if(!(n.x==_.x&&n.y==_.y)){n=_,n.scrollTop=e.renderer.scrollTop,e.isMouseOver=!0;var x=n.getDocumentPosition().row;m.start.row!=x&&(m.id||e.setRow(x),S(x))}}),e.renderer.on("beforeRender",function(){if(n&&m.start.row!=-1){n.$pos=null;var _=n.getDocumentPosition().row;m.id||e.setRow(_),S(_,!0)}}),e.renderer.on("afterRender",function(){var _=e.getRow(),x=e.renderer.$textLayer,A=x.element.childNodes[_-x.config.firstRow],E=document.activeElement;if(A!==e.selectedNode&&e.selectedNode&&(h.removeCssClass(e.selectedNode,"ace_selected"),E.removeAttribute("aria-activedescendant"),e.selectedNode.removeAttribute(t),e.selectedNode.removeAttribute("id")),e.selectedNode=A,A){h.addCssClass(A,"ace_selected");var L=g(_);A.id=L,x.element.setAttribute("aria-activedescendant",L),E.setAttribute("aria-activedescendant",L),A.setAttribute("role",o),A.setAttribute("aria-roledescription",r("item")),A.setAttribute("aria-label",e.getData(_).value),A.setAttribute("aria-setsize",e.data.length),A.setAttribute("aria-posinset",_+1),A.setAttribute("aria-describedby","doc-tooltip"),A.setAttribute(t,"true")}});var T=function(){S(-1)},S=function(_,x){_!==m.start.row&&(m.start.row=m.end.row=_,x||e.session._emit("changeBackMarker"),e._emit("changeHoverMarker"))};e.getHoveredRow=function(){return m.start.row},c.addListener(e.container,"mouseout",function(){e.isMouseOver=!1,T()}),e.on("hide",T),e.on("changeSelection",T),e.session.doc.getLength=function(){return e.data.length},e.session.doc.getLine=function(_){var x=e.data[_];return typeof x=="string"?x:x&&x.value||""};var $=e.session.bgTokenizer;return $.$tokenizeRow=function(_){var x=e.data[_],A=[];if(!x)return A;typeof x=="string"&&(x={value:x});var E=x.caption||x.value||x.name;function L(F,X){F&&A.push({type:(x.className||"")+(X||""),value:F})}for(var O=E.toLowerCase(),z=(e.filterText||"").toLowerCase(),N=0,j=0,B=0;B<=z.length;B++)if(B!=j&&(x.matchMask&1<<B||B==z.length)){var U=z.slice(j,B);j=B;var P=O.indexOf(U,N);if(P==-1)continue;L(E.slice(N,P),""),N=P+U.length,L(E.slice(P,N),"completion-highlight")}return L(E.slice(N,E.length),""),A.push({type:"completion-spacer",value:" "}),x.meta&&A.push({type:"completion-meta",value:x.meta}),x.message&&A.push({type:"completion-message",value:x.message}),A},$.$updateOnChange=l,$.start=l,e.session.$computeWidth=function(){return this.screenWidth=0},e.isOpen=!1,e.isTopdown=!1,e.autoSelect=!0,e.filterText="",e.isMouseOver=!1,e.data=[],e.setData=function(_,x){e.filterText=x||"",e.setValue(i.stringRepeat(`
`,_.length),-1),e.data=_||[],e.setRow(0)},e.getData=function(_){return e.data[_]},e.getRow=function(){return b.start.row},e.setRow=function(_){_=Math.max(this.autoSelect?0:-1,Math.min(this.data.length-1,_)),b.start.row!=_&&(e.selection.clearSelection(),b.start.row=b.end.row=_||0,e.session._emit("changeBackMarker"),e.moveCursorTo(_||0,0),e.isOpen&&e._signal("select"))},e.on("changeSelection",function(){e.isOpen&&e.setRow(e.selection.lead.row),e.renderer.scrollCursorIntoView()}),e.hide=function(){this.container.style.display="none",e.anchorPos=null,e.anchor=null,e.isOpen&&(e.isOpen=!1,this._signal("hide"))},e.tryShow=function(_,x,A,E){if(!E&&e.isOpen&&e.anchorPos&&e.anchor&&e.anchorPos.top===_.top&&e.anchorPos.left===_.left&&e.anchor===A)return!0;var L=this.container,O=window.innerHeight,z=window.innerWidth,N=this.renderer,j=N.$maxLines*x*1.4,B={top:0,bottom:0,left:0},U=O-_.top-3*this.$borderSize-x,P=_.top-3*this.$borderSize;A||(P<=U||U>=j?A="bottom":A="top"),A==="top"?(B.bottom=_.top-this.$borderSize,B.top=B.bottom-j):A==="bottom"&&(B.top=_.top+x+this.$borderSize,B.bottom=B.top+j);var F=B.top>=0&&B.bottom<=O;if(!E&&!F)return!1;F?N.$maxPixelHeight=null:A==="top"?N.$maxPixelHeight=P:N.$maxPixelHeight=U,A==="top"?(L.style.top="",L.style.bottom=O-B.bottom+"px",e.isTopdown=!1):(L.style.top=B.top+"px",L.style.bottom="",e.isTopdown=!0),L.style.display="";var X=_.left;return X+L.offsetWidth>z&&(X=z-L.offsetWidth),L.style.left=X+"px",L.style.right="",e.isOpen||(e.isOpen=!0,this._signal("show"),n=null),e.anchorPos=_,e.anchor=A,!0},e.show=function(_,x,A){this.tryShow(_,x,A?"bottom":void 0,!0)},e.goTo=function(_){var x=this.getRow(),A=this.session.getLength()-1;switch(_){case"up":x=x<=0?A:x-1;break;case"down":x=x>=A?-1:x+1;break;case"start":x=0;break;case"end":x=A;break}this.setRow(x)},e.getTextLeftOffset=function(){return this.$borderSize+this.renderer.$padding+this.$imageSize},e.$imageSize=0,e.$borderSize=1,e}return C}();h.importCssString(`
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
`,"autocompletion.css",!1),y.AcePopup=d,y.$singleLineEditor=a,y.getAriaId=g}),ace.define("ace/autocomplete/inline_screenreader",["require","exports","module"],function(p,y,I){var R=function(){function w(v){this.editor=v,this.screenReaderDiv=document.createElement("div"),this.screenReaderDiv.classList.add("ace_screenreader-only"),this.editor.container.appendChild(this.screenReaderDiv)}return w.prototype.setScreenReaderContent=function(v){for(!this.popup&&this.editor.completer&&this.editor.completer.popup&&(this.popup=this.editor.completer.popup,this.popup.renderer.on("afterRender",(function(){var i=this.popup.getRow(),h=this.popup.renderer.$textLayer,r=h.element.childNodes[i-h.config.firstRow];if(r){for(var f="doc-tooltip ",g=0;g<this._lines.length;g++)f+="ace-inline-screenreader-line-".concat(g," ");r.setAttribute("aria-describedby",f)}}).bind(this)));this.screenReaderDiv.firstChild;)this.screenReaderDiv.removeChild(this.screenReaderDiv.firstChild);this._lines=v.split(/\r\n|\r|\n/);var c=this.createCodeBlock();this.screenReaderDiv.appendChild(c)},w.prototype.destroy=function(){this.screenReaderDiv.remove()},w.prototype.createCodeBlock=function(){var v=document.createElement("pre");v.setAttribute("id","ace-inline-screenreader");for(var c=0;c<this._lines.length;c++){var i=document.createElement("code");i.setAttribute("id","ace-inline-screenreader-line-".concat(c));var h=document.createTextNode(this._lines[c]);i.appendChild(h),v.appendChild(i)}return v},w}();y.AceInlineScreenReader=R}),ace.define("ace/autocomplete/inline",["require","exports","module","ace/snippets","ace/autocomplete/inline_screenreader"],function(p,y,I){var R=p("../snippets").snippetManager,w=p("./inline_screenreader").AceInlineScreenReader,v=function(){function c(){this.editor=null}return c.prototype.show=function(i,h,r){if(r=r||"",i&&this.editor&&this.editor!==i&&(this.hide(),this.editor=null,this.inlineScreenReader=null),!i||!h)return!1;this.inlineScreenReader||(this.inlineScreenReader=new w(i));var f=h.snippet?R.getDisplayTextForSnippet(i,h.snippet):h.value;return h.hideInlinePreview||!f||!f.startsWith(r)?!1:(this.editor=i,this.inlineScreenReader.setScreenReaderContent(f),f=f.slice(r.length),f===""?i.removeGhostText():i.setGhostText(f),!0)},c.prototype.isOpen=function(){return this.editor?!!this.editor.renderer.$ghostText:!1},c.prototype.hide=function(){return this.editor?(this.editor.removeGhostText(),!0):!1},c.prototype.destroy=function(){this.hide(),this.editor=null,this.inlineScreenReader&&(this.inlineScreenReader.destroy(),this.inlineScreenReader=null)},c}();y.AceInline=v}),ace.define("ace/autocomplete/util",["require","exports","module"],function(p,y,I){y.parForEach=function(w,v,c){var i=0,h=w.length;h===0&&c();for(var r=0;r<h;r++)v(w[r],function(f,g){i++,i===h&&c(f,g)})};var R=/[a-zA-Z_0-9\$\-\u00A2-\u2000\u2070-\uFFFF]/;y.retrievePrecedingIdentifier=function(w,v,c){c=c||R;for(var i=[],h=v-1;h>=0&&c.test(w[h]);h--)i.push(w[h]);return i.reverse().join("")},y.retrieveFollowingIdentifier=function(w,v,c){c=c||R;for(var i=[],h=v;h<w.length&&c.test(w[h]);h++)i.push(w[h]);return i},y.getCompletionPrefix=function(w){var v=w.getCursorPosition(),c=w.session.getLine(v.row),i;return w.completers.forEach((function(h){h.identifierRegexps&&h.identifierRegexps.forEach((function(r){!i&&r&&(i=this.retrievePrecedingIdentifier(c,v.column,r))}).bind(this))}).bind(this)),i||this.retrievePrecedingIdentifier(c,v.column)},y.triggerAutocomplete=function(w){var v=w.getCursorPosition(),c=w.session.getLine(v.row),i=v.column===0?0:v.column-1,h=c[i];return w.completers.some(function(r){if(r.triggerCharacters&&Array.isArray(r.triggerCharacters))return r.triggerCharacters.includes(h)})}}),ace.define("ace/autocomplete",["require","exports","module","ace/keyboard/hash_handler","ace/autocomplete/popup","ace/autocomplete/inline","ace/autocomplete/popup","ace/autocomplete/util","ace/lib/lang","ace/lib/dom","ace/snippets","ace/config","ace/lib/event","ace/lib/scroll"],function(p,y,I){var R=p("./keyboard/hash_handler").HashHandler,w=p("./autocomplete/popup").AcePopup,v=p("./autocomplete/inline").AceInline,c=p("./autocomplete/popup").getAriaId,i=p("./autocomplete/util"),h=p("./lib/lang"),r=p("./lib/dom"),f=p("./snippets").snippetManager,g=p("./config"),s=p("./lib/event"),o=p("./lib/scroll").preventParentScroll,t=function(k,u){u.completer&&u.completer.destroy()},a=function(){function k(){this.autoInsert=!1,this.autoSelect=!0,this.autoShown=!1,this.exactMatch=!1,this.inlineEnabled=!1,this.keyboardHandler=new R,this.keyboardHandler.bindKeys(this.commands),this.parentNode=null,this.setSelectOnHover=!1,this.hasSeen=new Set,this.showLoadingState=!1,this.stickySelectionDelay=500,this.blurListener=this.blurListener.bind(this),this.changeListener=this.changeListener.bind(this),this.mousedownListener=this.mousedownListener.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this),this.onLayoutChange=this.onLayoutChange.bind(this),this.changeTimer=h.delayedCall((function(){this.updateCompletions(!0)}).bind(this)),this.tooltipTimer=h.delayedCall(this.updateDocTooltip.bind(this),50),this.popupTimer=h.delayedCall(this.$updatePopupPosition.bind(this),50),this.stickySelectionTimer=h.delayedCall((function(){this.stickySelection=!0}).bind(this),this.stickySelectionDelay),this.$firstOpenTimer=h.delayedCall((function(){var u=this.completionProvider&&this.completionProvider.initialPosition;this.autoShown||this.popup&&this.popup.isOpen||!u||this.editor.completers.length===0||(this.completions=new C(k.completionsForLoading),this.openPopup(this.editor,u.prefix,!1),this.popup.renderer.setStyle("ace_loading",!0))}).bind(this),this.stickySelectionDelay)}return Object.defineProperty(k,"completionsForLoading",{get:function(){return[{caption:g.nls("Loading..."),value:""}]},enumerable:!1,configurable:!0}),k.prototype.$init=function(){return this.popup=new w(this.parentNode||document.body||document.documentElement),this.popup.on("click",(function(u){this.insertMatch(),u.stop()}).bind(this)),this.popup.focus=this.editor.focus.bind(this.editor),this.popup.on("show",this.$onPopupShow.bind(this)),this.popup.on("hide",this.$onHidePopup.bind(this)),this.popup.on("select",this.$onPopupChange.bind(this)),s.addListener(this.popup.container,"mouseout",this.mouseOutListener.bind(this)),this.popup.on("changeHoverMarker",this.tooltipTimer.bind(null,null)),this.popup.renderer.on("afterRender",this.$onPopupRender.bind(this)),this.popup},k.prototype.$initInline=function(){if(!(!this.inlineEnabled||this.inlineRenderer))return this.inlineRenderer=new v,this.inlineRenderer},k.prototype.getPopup=function(){return this.popup||this.$init()},k.prototype.$onHidePopup=function(){this.inlineRenderer&&this.inlineRenderer.hide(),this.hideDocTooltip(),this.stickySelectionTimer.cancel(),this.popupTimer.cancel(),this.stickySelection=!1},k.prototype.$seen=function(u){!this.hasSeen.has(u)&&u&&u.completer&&u.completer.onSeen&&typeof u.completer.onSeen=="function"&&(u.completer.onSeen(this.editor,u),this.hasSeen.add(u))},k.prototype.$onPopupChange=function(u){if(this.inlineRenderer&&this.inlineEnabled){var e=u?null:this.popup.getData(this.popup.getRow()),l=i.getCompletionPrefix(this.editor);if(this.inlineRenderer.show(this.editor,e,l)?this.$seen(e):this.inlineRenderer.hide(),this.popup.isMouseOver&&this.setSelectOnHover){this.tooltipTimer.call(null,null);return}this.popupTimer.schedule(),this.tooltipTimer.schedule()}else this.popupTimer.call(null,null),this.tooltipTimer.call(null,null)},k.prototype.$onPopupRender=function(){var u=this.inlineRenderer&&this.inlineEnabled;if(this.completions&&this.completions.filtered&&this.completions.filtered.length>0)for(var e=this.popup.getFirstVisibleRow();e<=this.popup.getLastVisibleRow();e++){var l=this.popup.getData(e);l&&(!u||l.hideInlinePreview)&&this.$seen(l)}},k.prototype.$onPopupShow=function(u){this.$onPopupChange(u),this.stickySelection=!1,this.stickySelectionDelay>=0&&this.stickySelectionTimer.schedule(this.stickySelectionDelay)},k.prototype.observeLayoutChanges=function(){if(!(this.$elements||!this.editor)){window.addEventListener("resize",this.onLayoutChange,{passive:!0}),window.addEventListener("wheel",this.mousewheelListener);for(var u=this.editor.container.parentNode,e=[];u;)e.push(u),u.addEventListener("scroll",this.onLayoutChange,{passive:!0}),u=u.parentNode;this.$elements=e}},k.prototype.unObserveLayoutChanges=function(){var u=this;window.removeEventListener("resize",this.onLayoutChange,{passive:!0}),window.removeEventListener("wheel",this.mousewheelListener),this.$elements&&this.$elements.forEach(function(e){e.removeEventListener("scroll",u.onLayoutChange,{passive:!0})}),this.$elements=null},k.prototype.onLayoutChange=function(){if(!this.popup.isOpen)return this.unObserveLayoutChanges();this.$updatePopupPosition(),this.updateDocTooltip()},k.prototype.$updatePopupPosition=function(){var u=this.editor,e=u.renderer,l=e.layerConfig.lineHeight,n=e.$cursorLayer.getPixelPosition(this.base,!0);n.left-=this.popup.getTextLeftOffset();var m=u.container.getBoundingClientRect();n.top+=m.top-e.layerConfig.offset,n.left+=m.left-u.renderer.scrollLeft,n.left+=e.gutterWidth;var b={top:n.top,left:n.left};e.$ghostText&&e.$ghostTextWidget&&this.base.row===e.$ghostText.position.row&&(b.top+=e.$ghostTextWidget.el.offsetHeight);var T=u.container.getBoundingClientRect().bottom-l,S=T<b.top?{top:T,left:b.left}:b;this.popup.tryShow(S,l,"bottom")||this.popup.tryShow(n,l,"top")||this.popup.show(n,l)},k.prototype.openPopup=function(u,e,l){this.$firstOpenTimer.cancel(),this.popup||this.$init(),this.inlineEnabled&&!this.inlineRenderer&&this.$initInline(),this.popup.autoSelect=this.autoSelect,this.popup.setSelectOnHover(this.setSelectOnHover);var n=this.popup.getRow(),m=this.popup.data[n];this.popup.setData(this.completions.filtered,this.completions.filterText),this.editor.textInput.setAriaOptions&&this.editor.textInput.setAriaOptions({activeDescendant:c(this.popup.getRow()),inline:this.inlineEnabled}),u.keyBinding.addKeyboardHandler(this.keyboardHandler);var b;this.stickySelection&&(b=this.popup.data.indexOf(m)),(!b||b===-1)&&(b=0),this.popup.setRow(this.autoSelect?b:-1),b===n&&m!==this.completions.filtered[b]&&this.$onPopupChange(),l?l&&!e&&this.detach():(this.popup.setTheme(u.getTheme()),this.popup.setFontSize(u.getFontSize()),this.$updatePopupPosition(),this.tooltipNode&&this.updateDocTooltip()),this.changeTimer.cancel(),this.observeLayoutChanges()},k.prototype.detach=function(){this.editor&&(this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.off("changeSelection",this.changeListener),this.editor.off("blur",this.blurListener),this.editor.off("mousedown",this.mousedownListener),this.editor.off("mousewheel",this.mousewheelListener)),this.$firstOpenTimer.cancel(),this.changeTimer.cancel(),this.hideDocTooltip(),this.completionProvider&&this.completionProvider.detach(),this.popup&&this.popup.isOpen&&this.popup.hide(),this.popup&&this.popup.renderer&&this.popup.renderer.off("afterRender",this.$onPopupRender),this.base&&this.base.detach(),this.activated=!1,this.completionProvider=this.completions=this.base=null,this.unObserveLayoutChanges()},k.prototype.changeListener=function(u){var e=this.editor.selection.lead;(e.row!=this.base.row||e.column<this.base.column)&&this.detach(),this.activated?this.changeTimer.schedule():this.detach()},k.prototype.blurListener=function(u){var e=document.activeElement,l=this.editor.textInput.getElement(),n=u.relatedTarget&&this.tooltipNode&&this.tooltipNode.contains(u.relatedTarget),m=this.popup&&this.popup.container;e!=l&&e.parentNode!=m&&!n&&e!=this.tooltipNode&&u.relatedTarget!=l&&this.detach()},k.prototype.mousedownListener=function(u){this.detach()},k.prototype.mousewheelListener=function(u){this.popup.isMouseOver||this.detach()},k.prototype.mouseOutListener=function(u){this.popup.isOpen&&this.$updatePopupPosition()},k.prototype.goTo=function(u){this.popup.goTo(u)},k.prototype.insertMatch=function(u,e){if(u||(u=this.popup.getData(this.popup.getRow())),!u)return!1;if(u.value==="")return this.detach();var l=this.completions,n=this.getCompletionProvider().insertMatch(this.editor,u,l.filterText,e);return this.completions==l&&this.detach(),n},k.prototype.showPopup=function(u,e){this.editor&&this.detach(),this.activated=!0,this.editor=u,u.completer!=this&&(u.completer&&u.completer.detach(),u.completer=this),u.on("changeSelection",this.changeListener),u.on("blur",this.blurListener),u.on("mousedown",this.mousedownListener),u.on("mousewheel",this.mousewheelListener),this.updateCompletions(!1,e)},k.prototype.getCompletionProvider=function(u){return this.completionProvider||(this.completionProvider=new d(u)),this.completionProvider},k.prototype.gatherCompletions=function(u,e){return this.getCompletionProvider().gatherCompletions(u,e)},k.prototype.updateCompletions=function(u,e){if(u&&this.base&&this.completions){var n=this.editor.getCursorPosition(),m=this.editor.session.getTextRange({start:this.base,end:n});if(m==this.completions.filterText)return;if(this.completions.setFilter(m),!this.completions.filtered.length)return this.detach();if(this.completions.filtered.length==1&&this.completions.filtered[0].value==m&&!this.completions.filtered[0].snippet)return this.detach();this.openPopup(this.editor,m,u);return}if(e&&e.matches){var n=this.editor.getSelectionRange().start;return this.base=this.editor.session.doc.createAnchor(n.row,n.column),this.base.$insertRight=!0,this.completions=new C(e.matches),this.openPopup(this.editor,"",u)}var l=this.editor.getSession(),n=this.editor.getCursorPosition(),m=i.getCompletionPrefix(this.editor);this.base=l.doc.createAnchor(n.row,n.column-m.length),this.base.$insertRight=!0;var b={exactMatch:this.exactMatch,ignoreCaption:this.ignoreCaption};this.getCompletionProvider({prefix:m,pos:n}).provideCompletions(this.editor,b,(function(T,S,$){var _=S.filtered,x=i.getCompletionPrefix(this.editor);if(this.$firstOpenTimer.cancel(),$){if(!_.length){var A=!this.autoShown&&this.emptyMessage;if(typeof A=="function"&&(A=this.emptyMessage(x)),A){var E=[{caption:A,value:""}];this.completions=new C(E),this.openPopup(this.editor,x,u),this.popup.renderer.setStyle("ace_loading",!1);return}return this.detach()}if(_.length==1&&_[0].value==x&&!_[0].snippet)return this.detach();if(this.autoInsert&&!this.autoShown&&_.length==1)return this.insertMatch(_[0])}this.completions=!$&&this.showLoadingState?new C(k.completionsForLoading.concat(_),S.filterText):S,this.openPopup(this.editor,x,u),this.popup.renderer.setStyle("ace_loading",!$)}).bind(this)),this.showLoadingState&&!this.autoShown&&!(this.popup&&this.popup.isOpen)&&this.$firstOpenTimer.delay(this.stickySelectionDelay/2)},k.prototype.cancelContextMenu=function(){this.editor.$mouseHandler.cancelContextMenu()},k.prototype.updateDocTooltip=function(){var u=this.popup,e=this.completions.filtered,l=e&&(e[u.getHoveredRow()]||e[u.getRow()]),n=null;if(!l||!this.editor||!this.popup.isOpen)return this.hideDocTooltip();for(var m=this.editor.completers.length,b=0;b<m;b++){var T=this.editor.completers[b];if(T.getDocTooltip&&l.completerId===T.id){n=T.getDocTooltip(l);break}}if(!n&&typeof l!="string"&&(n=l),typeof n=="string"&&(n={docText:n}),!n||!(n.docHTML||n.docText))return this.hideDocTooltip();this.showDocTooltip(n)},k.prototype.showDocTooltip=function(u){this.tooltipNode||(this.tooltipNode=r.createElement("div"),this.tooltipNode.style.margin="0",this.tooltipNode.style.pointerEvents="auto",this.tooltipNode.style.overscrollBehavior="contain",this.tooltipNode.tabIndex=-1,this.tooltipNode.onblur=this.blurListener.bind(this),this.tooltipNode.onclick=this.onTooltipClick.bind(this),this.tooltipNode.id="doc-tooltip",this.tooltipNode.setAttribute("role","tooltip"),this.tooltipNode.addEventListener("wheel",o));var e=this.editor.renderer.theme;this.tooltipNode.className="ace_tooltip ace_doc-tooltip "+(e.isDark?"ace_dark ":"")+(e.cssClass||"");var l=this.tooltipNode;u.docHTML?l.innerHTML=u.docHTML:u.docText&&(l.textContent=u.docText),l.parentNode||this.popup.container.appendChild(this.tooltipNode);var n=this.popup,m=n.container.getBoundingClientRect();l.style.top=n.container.style.top,l.style.bottom=n.container.style.bottom,l.style.display="block",window.innerWidth-m.right<320?m.left<320?n.isTopdown?(l.style.top=m.bottom+"px",l.style.left=m.left+"px",l.style.right="",l.style.bottom=""):(l.style.top=n.container.offsetTop-l.offsetHeight+"px",l.style.left=m.left+"px",l.style.right="",l.style.bottom=""):(l.style.right=window.innerWidth-m.left+"px",l.style.left=""):(l.style.left=m.right+1+"px",l.style.right="")},k.prototype.hideDocTooltip=function(){if(this.tooltipTimer.cancel(),!!this.tooltipNode){var u=this.tooltipNode;!this.editor.isFocused()&&document.activeElement==u&&this.editor.focus(),this.tooltipNode=null,u.parentNode&&u.parentNode.removeChild(u)}},k.prototype.onTooltipClick=function(u){for(var e=u.target;e&&e!=this.tooltipNode;){if(e.nodeName=="A"&&e.href){e.rel="noreferrer",e.target="_blank";break}e=e.parentNode}},k.prototype.destroy=function(){if(this.detach(),this.popup){this.popup.destroy();var u=this.popup.container;u&&u.parentNode&&u.parentNode.removeChild(u)}this.editor&&this.editor.completer==this&&(this.editor.off("destroy",t),this.editor.completer=null),this.inlineRenderer=this.popup=this.editor=null},k}();a.prototype.commands={Up:function(k){k.completer.goTo("up")},Down:function(k){k.completer.goTo("down")},"Ctrl-Up|Ctrl-Home":function(k){k.completer.goTo("start")},"Ctrl-Down|Ctrl-End":function(k){k.completer.goTo("end")},Esc:function(k){k.completer.detach()},Return:function(k){return k.completer.insertMatch()},"Shift-Return":function(k){k.completer.insertMatch(null,{deleteSuffix:!0})},Tab:function(k){var u=k.completer.insertMatch();if(!u&&!k.tabstopManager)k.completer.goTo("down");else return u},PageUp:function(k){k.completer.popup.gotoPageUp()},PageDown:function(k){k.completer.popup.gotoPageDown()}},a.for=function(k){return k.completer instanceof a||(k.completer&&(k.completer.destroy(),k.completer=null),g.get("sharedPopups")?(a.$sharedInstance||(a.$sharedInstance=new a),k.completer=a.$sharedInstance):(k.completer=new a,k.once("destroy",t))),k.completer},a.startCommand={name:"startAutocomplete",exec:function(k,u){var e=a.for(k);e.autoInsert=!1,e.autoSelect=!0,e.autoShown=!1,e.showPopup(k,u),e.cancelContextMenu()},bindKey:"Ctrl-Space|Ctrl-Shift-Space|Alt-Space"};var d=function(){function k(u){this.initialPosition=u,this.active=!0}return k.prototype.insertByIndex=function(u,e,l){return!this.completions||!this.completions.filtered?!1:this.insertMatch(u,this.completions.filtered[e],l)},k.prototype.insertMatch=function(u,e,l){if(!e)return!1;if(u.startOperation({command:{name:"insertMatch"}}),e.completer&&e.completer.insertMatch)e.completer.insertMatch(u,e);else{if(!this.completions)return!1;var n=this.completions.filterText.length,m=0;if(e.range&&e.range.start.row===e.range.end.row&&(n-=this.initialPosition.prefix.length,n+=this.initialPosition.pos.column-e.range.start.column,m+=e.range.end.column-this.initialPosition.pos.column),n||m){var b;u.selection.getAllRanges?b=u.selection.getAllRanges():b=[u.getSelectionRange()];for(var T=0,S;S=b[T];T++)S.start.column-=n,S.end.column+=m,u.session.remove(S)}e.snippet?f.insertSnippet(u,e.snippet):this.$insertString(u,e),e.completer&&e.completer.onInsert&&typeof e.completer.onInsert=="function"&&e.completer.onInsert(u,e),e.command&&e.command==="startAutocomplete"&&u.execCommand(e.command)}return u.endOperation(),!0},k.prototype.$insertString=function(u,e){var l=e.value||e;u.execCommand("insertstring",l)},k.prototype.gatherCompletions=function(u,e){var l=u.getSession(),n=u.getCursorPosition(),m=i.getCompletionPrefix(u),b=[];this.completers=u.completers;var T=u.completers.length;return u.completers.forEach(function(S,$){S.getCompletions(u,l,n,m,function(_,x){S.hideInlinePreview&&(x=x.map(function(A){return Object.assign(A,{hideInlinePreview:S.hideInlinePreview})})),!_&&x&&(b=b.concat(x)),e(null,{prefix:i.getCompletionPrefix(u),matches:b,finished:--T===0})})}),!0},k.prototype.provideCompletions=function(u,e,l){var n=(function(S){var $=S.prefix,_=S.matches;this.completions=new C(_),e.exactMatch&&(this.completions.exactMatch=!0),e.ignoreCaption&&(this.completions.ignoreCaption=!0),this.completions.setFilter($),(S.finished||this.completions.filtered.length)&&l(null,this.completions,S.finished)}).bind(this),m=!0,b=null;if(this.gatherCompletions(u,(function(S,$){if(this.active){S&&(l(S,[],!0),this.detach());var _=$.prefix;if(_.indexOf($.prefix)===0){if(m){b=$;return}n($)}}}).bind(this)),m=!1,b){var T=b;b=null,n(T)}},k.prototype.detach=function(){this.active=!1,this.completers&&this.completers.forEach(function(u){typeof u.cancel=="function"&&u.cancel()})},k}(),C=function(){function k(u,e){this.all=u,this.filtered=u,this.filterText=e||"",this.exactMatch=!1,this.ignoreCaption=!1}return k.prototype.setFilter=function(u){if(u.length>this.filterText&&u.lastIndexOf(this.filterText,0)===0)var e=this.filtered;else var e=this.all;this.filterText=u,e=this.filterCompletions(e,this.filterText),e=e.sort(function(n,m){return m.exactMatch-n.exactMatch||m.$score-n.$score||(n.caption||n.value).localeCompare(m.caption||m.value)});var l=null;e=e.filter(function(n){var m=n.snippet||n.caption||n.value;return m===l?!1:(l=m,!0)}),this.filtered=e},k.prototype.filterCompletions=function(u,e){var l=[],n=e.toUpperCase(),m=e.toLowerCase();e:for(var b=0,T;T=u[b];b++){var S=!this.ignoreCaption&&T.caption||T.value||T.snippet;if(S){var $=-1,_=0,x=0,A,E;if(this.exactMatch){if(e!==S.substr(0,e.length))continue e}else{var L=S.toLowerCase().indexOf(m);if(L>-1)x=L;else for(var O=0;O<e.length;O++){var z=S.indexOf(m[O],$+1),N=S.indexOf(n[O],$+1);if(A=z>=0&&(N<0||z<N)?z:N,A<0)continue e;E=A-$-1,E>0&&($===-1&&(x+=10),x+=E,_=_|1<<O),$=A}}T.matchMask=_,T.exactMatch=x?0:1,T.$score=(T.score||0)-x,l.push(T)}}return l},k}();y.Autocomplete=a,y.CompletionProvider=d,y.FilteredList=C}),ace.define("ace/autocomplete/text_completer",["require","exports","module","ace/range"],function(p,y,I){var R=p("../range").Range,w=/[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;function v(i,h){var r=i.getTextRange(R.fromPoints({row:0,column:0},h));return r.split(w).length-1}function c(i,h){var r=v(i,h),f=i.getValue().split(w),g=Object.create(null),s=f[r];return f.forEach(function(o,t){if(!(!o||o===s)){var a=Math.abs(r-t),d=f.length-a;g[o]?g[o]=Math.max(d,g[o]):g[o]=d}}),g}y.getCompletions=function(i,h,r,f,g){var s=c(h,r),o=Object.keys(s);g(null,o.map(function(t){return{caption:t,value:t,score:s[t],meta:"local"}}))}}),ace.define("ace/ext/language_tools",["require","exports","module","ace/snippets","ace/autocomplete","ace/config","ace/lib/lang","ace/autocomplete/util","ace/autocomplete/text_completer","ace/editor","ace/config"],function(p,y,I){var R=p("../snippets").snippetManager,w=p("../autocomplete").Autocomplete,v=p("../config"),c=p("../lib/lang"),i=p("../autocomplete/util"),h=p("../autocomplete/text_completer"),r={getCompletions:function(n,m,b,T,S){if(m.$mode.completer)return m.$mode.completer.getCompletions(n,m,b,T,S);var $=n.session.getState(b.row),_=m.$mode.getCompletions($,m,b,T);_=_.map(function(x){return x.completerId=r.id,x}),S(null,_)},id:"keywordCompleter"},f=function(n){var m={};return n.replace(/\${(\d+)(:(.*?))?}/g,function(b,T,S,$){return m[T]=$||""}).replace(/\$(\d+?)/g,function(b,T){return m[T]})},g={getCompletions:function(n,m,b,T,S){var $=[],_=m.getTokenAt(b.row,b.column);_&&_.type.match(/(tag-name|tag-open|tag-whitespace|attribute-name|attribute-value)\.xml$/)?$.push("html-tag"):$=R.getActiveScopes(n);var x=R.snippetMap,A=[];$.forEach(function(E){for(var L=x[E]||[],O=L.length;O--;){var z=L[O],N=z.name||z.tabTrigger;N&&A.push({caption:N,snippet:z.content,meta:z.tabTrigger&&!z.name?z.tabTrigger+"⇥ ":"snippet",completerId:g.id})}},this),S(null,A)},getDocTooltip:function(n){n.snippet&&!n.docHTML&&(n.docHTML=["<b>",c.escapeHTML(n.caption),"</b>","<hr></hr>",c.escapeHTML(f(n.snippet))].join(""))},id:"snippetCompleter"},s=[g,h,r];y.setCompleters=function(n){s.length=0,n&&s.push.apply(s,n)},y.addCompleter=function(n){s.push(n)},y.textCompleter=h,y.keyWordCompleter=r,y.snippetCompleter=g;var o={name:"expandSnippet",exec:function(n){return R.expandWithTab(n)},bindKey:"Tab"},t=function(n,m){a(m.session.$mode)},a=function(n){typeof n=="string"&&(n=v.$modes[n]),n&&(R.files||(R.files={}),d(n.$id,n.snippetFileId),n.modes&&n.modes.forEach(a))},d=function(n,m){!m||!n||R.files[n]||(R.files[n]={},v.loadModule(m,function(b){b&&(R.files[n]=b,!b.snippets&&b.snippetText&&(b.snippets=R.parseSnippetFile(b.snippetText)),R.register(b.snippets||[],b.scope),b.includeScopes&&(R.snippetMap[b.scope].includeScopes=b.includeScopes,b.includeScopes.forEach(function(T){a("ace/mode/"+T)})))}))},C=function(n){var m=n.editor,b=m.completer&&m.completer.activated;if(n.command.name==="backspace")b&&!i.getCompletionPrefix(m)&&m.completer.detach();else if(n.command.name==="insertstring"&&!b){k=n;var T=n.editor.$liveAutocompletionDelay;T?u.delay(T):e(n)}},k,u=c.delayedCall(function(){e(k)},0),e=function(n){var m=n.editor,b=i.getCompletionPrefix(m),T=i.triggerAutocomplete(m);if(b&&b.length>=m.$liveAutocompletionThreshold||T){var S=w.for(m);S.autoShown=!0,S.showPopup(m)}},l=p("../editor").Editor;p("../config").defineOptions(l.prototype,"editor",{enableBasicAutocompletion:{set:function(n){n?(this.completers||(this.completers=Array.isArray(n)?n:s),this.commands.addCommand(w.startCommand)):this.commands.removeCommand(w.startCommand)},value:!1},enableLiveAutocompletion:{set:function(n){n?(this.completers||(this.completers=Array.isArray(n)?n:s),this.commands.on("afterExec",C)):this.commands.off("afterExec",C)},value:!1},liveAutocompletionDelay:{initialValue:0},liveAutocompletionThreshold:{initialValue:0},enableSnippets:{set:function(n){n?(this.commands.addCommand(o),this.on("changeMode",t),t(null,this)):(this.commands.removeCommand(o),this.off("changeMode",t))},value:!1}})}),function(){ace.require(["ace/ext/language_tools"],function(p){M&&(M.exports=p)})}()})(Oe);var ze={exports:{}};(function(M,D){ace.define("ace/ext/beautify",["require","exports","module","ace/token_iterator"],function(p,y,I){var R=p("../token_iterator").TokenIterator;function w(v,c){return v.type.lastIndexOf(c+".xml")>-1}y.singletonTags=["area","base","br","col","command","embed","hr","html","img","input","keygen","link","meta","param","source","track","wbr"],y.blockTags=["article","aside","blockquote","body","div","dl","fieldset","footer","form","head","header","html","nav","ol","p","script","section","style","table","tbody","tfoot","thead","ul"],y.formatOptions={lineBreaksAfterCommasInCurlyBlock:!0},y.beautify=function(v){for(var c=new R(v,0,0),i=c.getCurrentToken(),h=v.getTabString(),r=y.singletonTags,f=y.blockTags,g=y.formatOptions||{},s,o=!1,t=!1,a=!1,d="",C="",k="",u=0,e=0,l=0,n=0,m=0,b=0,T=0,S,$=0,_=0,x,A=!1,E=!1,L=!1,O=!1,z={0:0},N=[],j=!1,B=function(){s&&s.value&&s.type!=="string.regexp"&&(s.value=s.value.replace(/^\s*/,""))},U=function(){for(var F=d.length-1;!(F==0||d[F]!==" ");)F=F-1;d=d.slice(0,F+1)},P=function(){d=d.trimRight(),o=!1};i!==null;){if($=c.getCurrentTokenRow(),c.$rowTokens,s=c.stepForward(),typeof i<"u"){if(C=i.value,m=0,L=k==="style"||v.$modeId==="ace/mode/css",w(i,"tag-open")?(E=!0,s&&(O=f.indexOf(s.value)!==-1),C==="</"&&(O&&!o&&_<1&&_++,L&&(_=1),m=1,O=!1)):w(i,"tag-close")?E=!1:w(i,"comment.start")?O=!0:w(i,"comment.end")&&(O=!1),!E&&!_&&i.type==="paren.rparen"&&i.value.substr(0,1)==="}"&&_++,$!==S&&(_=$,S&&(_-=S)),_){for(P();_>0;_--)d+=`
`;o=!0,!w(i,"comment")&&!i.type.match(/^(comment|string)$/)&&(C=C.trimLeft())}if(C){if(i.type==="keyword"&&C.match(/^(if|else|elseif|for|foreach|while|switch)$/)?(N[u]=C,B(),a=!0,C.match(/^(else|elseif)$/)&&d.match(/\}[\s]*$/)&&(P(),t=!0)):i.type==="paren.lparen"?(B(),C.substr(-1)==="{"&&(a=!0,A=!1,E||(_=1)),C.substr(0,1)==="{"&&(t=!0,d.substr(-1)!=="["&&d.trimRight().substr(-1)==="["?(P(),t=!1):d.trimRight().substr(-1)===")"?P():U())):i.type==="paren.rparen"?(m=1,C.substr(0,1)==="}"&&(N[u-1]==="case"&&m++,d.trimRight().substr(-1)==="{"?P():(t=!0,L&&(_+=2))),C.substr(0,1)==="]"&&d.substr(-1)!=="}"&&d.trimRight().substr(-1)==="}"&&(t=!1,n++,P()),C.substr(0,1)===")"&&d.substr(-1)!=="("&&d.trimRight().substr(-1)==="("&&(t=!1,n++,P()),U()):(i.type==="keyword.operator"||i.type==="keyword")&&C.match(/^(=|==|===|!=|!==|&&|\|\||and|or|xor|\+=|.=|>|>=|<|<=|=>)$/)?(P(),B(),t=!0,a=!0):i.type==="punctuation.operator"&&C===";"?(P(),B(),a=!0,L&&_++):i.type==="punctuation.operator"&&C.match(/^(:|,)$/)?(P(),B(),C.match(/^(,)$/)&&T>0&&b===0&&g.lineBreaksAfterCommasInCurlyBlock?_++:(a=!0,o=!1)):i.type==="support.php_tag"&&C==="?>"&&!o?(P(),t=!0):w(i,"attribute-name")&&d.substr(-1).match(/^\s$/)?t=!0:w(i,"attribute-equals")?(U(),B()):w(i,"tag-close")?(U(),C==="/>"&&(t=!0)):i.type==="keyword"&&C.match(/^(case|default)$/)&&j&&(m=1),o&&!(i.type.match(/^(comment)$/)&&!C.substr(0,1).match(/^[/#]$/))&&!(i.type.match(/^(string)$/)&&!C.substr(0,1).match(/^['"@]$/))){if(n=l,u>e)for(n++,x=u;x>e;x--)z[x]=n;else u<e&&(n=z[u]);for(e=u,l=n,m&&(n-=m),A&&!b&&(n++,A=!1),x=0;x<n;x++)d+=h}if(i.type==="keyword"&&C.match(/^(case|default)$/)?j===!1&&(N[u]=C,u++,j=!0):i.type==="keyword"&&C.match(/^(break)$/)&&N[u-1]&&N[u-1].match(/^(case|default)$/)&&(u--,j=!1),i.type==="paren.lparen"&&(b+=(C.match(/\(/g)||[]).length,T+=(C.match(/\{/g)||[]).length,u+=C.length),i.type==="keyword"&&C.match(/^(if|else|elseif|for|while)$/)?(A=!0,b=0):!b&&C.trim()&&i.type!=="comment"&&(A=!1),i.type==="paren.rparen")for(b-=(C.match(/\)/g)||[]).length,T-=(C.match(/\}/g)||[]).length,x=0;x<C.length;x++)u--,C.substr(x,1)==="}"&&N[u]==="case"&&u--;i.type=="text"&&(C=C.replace(/\s+$/," ")),t&&!o&&(U(),d.substr(-1)!==`
`&&(d+=" ")),d+=C,a&&(d+=" "),o=!1,t=!1,a=!1,(w(i,"tag-close")&&(O||f.indexOf(k)!==-1)||w(i,"doctype")&&C===">")&&(O&&s&&s.value==="</"?_=-1:_=1),s&&r.indexOf(s.value)===-1&&(w(i,"tag-open")&&C==="</"?u--:w(i,"tag-open")&&C==="<"?u++:w(i,"tag-close")&&C==="/>"&&u--),w(i,"tag-name")&&(k=C),S=$}}i=s}d=d.trim(),v.doc.setValue(d)},y.commands=[{name:"beautify",description:"Format selection (Beautify)",exec:function(v){y.beautify(v.session)},bindKey:"Ctrl-Shift-B"}]}),function(){ace.require(["ace/ext/beautify"],function(p){M&&(M.exports=p)})}()})(ze);const Fe="/assets/worker-css-f7bltUGf.js",Be="/assets/worker-javascript-PN319Npu.js",Ne="/assets/worker-html-sAHX0OUH.js",J=M=>(ye("data-v-dcace441"),M=M(),ke(),M),De={class:"panel"},Pe={class:"inputPanel"},He={class:"header"},je=J(()=>q("span",{class:"i-iszy-jsoneditor-format"},null,-1)),We=J(()=>q("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),qe=J(()=>q("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),Ue={class:"inputPanel"},Xe={class:"header"},Ve=J(()=>q("span",{class:"i-iszy-jsoneditor-format"},null,-1)),Ye=J(()=>q("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),Ke=J(()=>q("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),Je={class:"inputPanel"},Ge={class:"header"},Ze=J(()=>q("span",{class:"i-iszy-jsoneditor-format"},null,-1)),Qe=J(()=>q("span",{class:"i-icon-park-outline-collapse-text-input"},null,-1)),et=J(()=>q("span",{class:"i-icon-park-outline-expand-text-input"},null,-1)),tt=["srcdoc"],nt={__name:"tinyEditor",setup(M){G.config.setModuleUrl("ace/mode/css_worker",Fe),G.config.setModuleUrl("ace/mode/javascript_worker",Be),G.config.setModuleUrl("ace/mode/html_worker",Ne);const D=G.require("ace/ext/beautify"),p={},y=_e(),I=re("textmate"),R=me();R.value&&(I.value="twilight"),fe(R,s=>{s?I.value="twilight":I.value="textmate"});const w=be(()=>y.html+y.css+y.js===""?"输入内容以在此展示":y.html+"<style>"+y.css+"</style><script>"+y.js+"<\/script>"),v=re(!1);function c(s,o){s.getSession().setTabSize(2),s.getSession().setUseSoftTabs(!0),s.setShowPrintMargin(!1),p[o]=s}function i(s){p[s]&&D.beautify(p[s].session)}function h(s){var o;(o=p[s])==null||o.session.foldAll()}function r(s){var o;(o=p[s])==null||o.session.unfold()}function f(){v.value=!v.value}function g(){window.open("","_blank").document.write(w.value)}return(s,o)=>{const t=ve,a=$e;return ie(),ee("div",De,[te(q("div",Pe,[q("div",He,[V(t,{type:"primary",title:"格式化",onClick:o[0]||(o[0]=d=>i("html"))},{icon:Y(()=>[je]),_:1}),V(t,{type:"primary",title:"折叠所有",onClick:o[1]||(o[1]=d=>h("html"))},{icon:Y(()=>[We]),_:1}),V(t,{type:"primary",title:"展开所有",onClick:o[2]||(o[2]=d=>r("html"))},{icon:Y(()=>[qe]),_:1})]),V(W(oe),{value:W(y).html,"onUpdate:value":o[3]||(o[3]=d=>W(y).html=d),lang:"html",theme:W(I),style:{height:"calc(100% - 4.2rem)"},placeholder:"请输入HTML内容",options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:o[4]||(o[4]=d=>c(d,"html"))},null,8,["value","theme"])],512),[[ne,!W(v)]]),te(q("div",Ue,[q("div",Xe,[V(t,{type:"primary",title:"格式化",onClick:o[5]||(o[5]=d=>i("css"))},{icon:Y(()=>[Ve]),_:1}),V(t,{type:"primary",title:"折叠所有",onClick:o[6]||(o[6]=d=>h("js"))},{icon:Y(()=>[Ye]),_:1}),V(t,{type:"primary",title:"展开所有",onClick:o[7]||(o[7]=d=>r("js"))},{icon:Y(()=>[Ke]),_:1})]),V(W(oe),{value:W(y).js,"onUpdate:value":o[8]||(o[8]=d=>W(y).js=d),lang:"javascript",theme:W(I),style:{height:"calc(100% - 4.2rem)"},placeholder:"请输入JS内容",options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:o[9]||(o[9]=d=>c(d,"js"))},null,8,["value","theme"])],512),[[ne,!W(v)]]),te(q("div",Je,[q("div",Ge,[V(t,{type:"primary",title:"格式化",onClick:o[10]||(o[10]=d=>i("css"))},{icon:Y(()=>[Ze]),_:1}),V(t,{type:"primary",title:"折叠所有",onClick:o[11]||(o[11]=d=>h("css"))},{icon:Y(()=>[Qe]),_:1}),V(t,{type:"primary",title:"展开所有",onClick:o[12]||(o[12]=d=>r("css"))},{icon:Y(()=>[et]),_:1})]),V(W(oe),{value:W(y).css,"onUpdate:value":o[13]||(o[13]=d=>W(y).css=d),lang:"css",theme:W(I),style:{height:"calc(100% - 4.2rem)"},placeholder:"请输入CSS内容",options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},onInit:o[14]||(o[14]=d=>c(d,"css"))},null,8,["value","theme"])],512),[[ne,!W(v)]]),q("div",{class:xe(["displayPanel",{fullPanel:W(v)}])},[V(a,{class:"fullScreen"},{default:Y(()=>[W(v)?(ie(),ee("span",{key:0,class:"i-icon-park-outline-off-screen",title:"退出完整展示",onClick:f})):(ie(),ee("span",{key:1,class:"i-icon-park-outline-full-screen",title:"完整展示",onClick:f})),q("span",{class:"i-fa-solid-external-link-alt",title:"新标签打开",onClick:g})]),_:1}),q("iframe",{"w-full":"","h-full":"",srcdoc:W(w),seamless:"",title:"展示面板",allowTransparency:"true"},null,8,tt)],2)])}}},lt=ge(nt,[["__scopeId","data-v-dcace441"]]);export{lt as default};
