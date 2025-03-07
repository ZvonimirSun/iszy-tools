import{a0 as et,p as M,H as tt,a1 as je,a2 as Ue,a3 as ot,V as it,a4 as v,B as T,a5 as z,a6 as We,a7 as R,a8 as nt,a9 as st,aa as lt,ab as fe,k as ge,ac as Fe,ad as at,ae as rt,af as ct,Z as be,ag as he,ah as ft,a as ht,h as dt,b as pt,c as ut,f as mt,d as Ke,e as gt,E as J,i as bt,s as K,j as yt,r as xt,m as Ct,n as wt,o as kt,w as vt,x as St,y as It,z as Ot,A as Nt,v as de,u as Tt,C as Ce,ai as Et}from"./index-C72vHrzr.js";import{k as Mt,R as At,bl as se,T as Bt,a6 as Rt,a7 as Dt,E as Lt,r as Pt,a0 as $t}from"./index-BYYPt2FS.js";let jt=0;class N{constructor(e,t,o){this.set=e,this.base=t,this.modified=o,this.id=jt++}static define(e){if(e!=null&&e.base)throw new Error("Can not derive from a modified tag");let t=new N([],null,[]);if(t.set.push(t),e)for(let o of e.set)t.set.push(o);return t}static defineModifier(){let e=new Z;return t=>t.modified.indexOf(e)>-1?t:Z.get(t.base||t,t.modified.concat(e).sort((o,n)=>o.id-n.id))}}let Ut=0;class Z{constructor(){this.instances=[],this.id=Ut++}static get(e,t){if(!t.length)return e;let o=t[0].instances.find(a=>a.base==e&&Wt(t,a.modified));if(o)return o;let n=[],s=new N(n,e,t);for(let a of t)a.instances.push(s);let l=Ft(t);for(let a of e.set)if(!a.modified.length)for(let r of l)n.push(Z.get(a,r));return s}}function Wt(i,e){return i.length==e.length&&i.every((t,o)=>t==e[o])}function Ft(i){let e=[[]];for(let t=0;t<i.length;t++)for(let o=0,n=e.length;o<n;o++)e.push(e[o].concat(i[t]));return e.sort((t,o)=>o.length-t.length)}function qo(i){let e=Object.create(null);for(let t in i){let o=i[t];Array.isArray(o)||(o=[o]);for(let n of t.split(" "))if(n){let s=[],l=2,a=n;for(let p=0;;){if(a=="..."&&p>0&&p+3==n.length){l=1;break}let u=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(a);if(!u)throw new RangeError("Invalid path: "+n);if(s.push(u[0]=="*"?"":u[0][0]=='"'?JSON.parse(u[0]):u[0]),p+=u[0].length,p==n.length)break;let m=n[p++];if(p==n.length&&m=="!"){l=0;break}if(m!="/")throw new RangeError("Invalid path: "+n);a=n.slice(p)}let r=s.length-1,f=s[r];if(!f)throw new RangeError("Invalid path: "+n);let d=new pe(o,l,r>0?s.slice(0,r):null);e[f]=d.sort(e[f])}}return Kt.add(e)}const Kt=new et;class pe{constructor(e,t,o,n){this.tags=e,this.mode=t,this.context=o,this.next=n}get opaque(){return this.mode==0}get inherit(){return this.mode==1}sort(e){return!e||e.depth<this.depth?(this.next=e,this):(e.next=this.sort(e.next),e)}get depth(){return this.context?this.context.length:0}}pe.empty=new pe([],2,null);function Ht(i,e){let t=Object.create(null);for(let s of i)if(!Array.isArray(s.tag))t[s.tag.id]=s.class;else for(let l of s.tag)t[l.id]=s.class;let{scope:o,all:n=null}={};return{style:s=>{let l=n;for(let a of s)for(let r of a.set){let f=t[r.id];if(f){l=l?l+" "+f:f;break}}return l},scope:o}}const h=N.define,_=h(),A=h(),we=h(A),ke=h(A),B=h(),G=h(B),le=h(B),O=h(),L=h(O),S=h(),I=h(),ue=h(),F=h(ue),Q=h(),c={comment:_,lineComment:h(_),blockComment:h(_),docComment:h(_),name:A,variableName:h(A),typeName:we,tagName:h(we),propertyName:ke,attributeName:h(ke),className:h(A),labelName:h(A),namespace:h(A),macroName:h(A),literal:B,string:G,docString:h(G),character:h(G),attributeValue:h(G),number:le,integer:h(le),float:h(le),bool:h(B),regexp:h(B),escape:h(B),color:h(B),url:h(B),keyword:S,self:h(S),null:h(S),atom:h(S),unit:h(S),modifier:h(S),operatorKeyword:h(S),controlKeyword:h(S),definitionKeyword:h(S),moduleKeyword:h(S),operator:I,derefOperator:h(I),arithmeticOperator:h(I),logicOperator:h(I),bitwiseOperator:h(I),compareOperator:h(I),updateOperator:h(I),definitionOperator:h(I),typeOperator:h(I),controlOperator:h(I),punctuation:ue,separator:h(ue),bracket:F,angleBracket:h(F),squareBracket:h(F),paren:h(F),brace:h(F),content:O,heading:L,heading1:h(L),heading2:h(L),heading3:h(L),heading4:h(L),heading5:h(L),heading6:h(L),contentSeparator:h(O),list:h(O),quote:h(O),emphasis:h(O),strong:h(O),link:h(O),monospace:h(O),strikethrough:h(O),inserted:h(),deleted:h(),changed:h(),invalid:h(),meta:Q,documentMeta:h(Q),annotation:h(Q),processingInstruction:h(Q),definition:N.defineModifier(),constant:N.defineModifier(),function:N.defineModifier(),standard:N.defineModifier(),local:N.defineModifier(),special:N.defineModifier()};Ht([{tag:c.link,class:"tok-link"},{tag:c.heading,class:"tok-heading"},{tag:c.emphasis,class:"tok-emphasis"},{tag:c.strong,class:"tok-strong"},{tag:c.keyword,class:"tok-keyword"},{tag:c.atom,class:"tok-atom"},{tag:c.bool,class:"tok-bool"},{tag:c.url,class:"tok-url"},{tag:c.labelName,class:"tok-labelName"},{tag:c.inserted,class:"tok-inserted"},{tag:c.deleted,class:"tok-deleted"},{tag:c.literal,class:"tok-literal"},{tag:c.string,class:"tok-string"},{tag:c.number,class:"tok-number"},{tag:[c.regexp,c.escape,c.special(c.string)],class:"tok-string2"},{tag:c.variableName,class:"tok-variableName"},{tag:c.local(c.variableName),class:"tok-variableName tok-local"},{tag:c.definition(c.variableName),class:"tok-variableName tok-definition"},{tag:c.special(c.variableName),class:"tok-variableName2"},{tag:c.definition(c.propertyName),class:"tok-propertyName tok-definition"},{tag:c.typeName,class:"tok-typeName"},{tag:c.namespace,class:"tok-namespace"},{tag:c.className,class:"tok-className"},{tag:c.macroName,class:"tok-macroName"},{tag:c.propertyName,class:"tok-propertyName"},{tag:c.operator,class:"tok-operator"},{tag:c.comment,class:"tok-comment"},{tag:c.meta,class:"tok-meta"},{tag:c.invalid,class:"tok-invalid"},{tag:c.punctuation,class:"tok-punctuation"}]);const Vt="#e5c07b",ve="#e06c75",zt="#56b6c2",qt="#ffffff",Y="#abb2bf",me="#7d8799",_t="#61afef",Gt="#98c379",Se="#d19a66",Qt="#c678dd",Xt="#21252b",Ie="#2c313a",Oe="#282c34",ae="#353a42",Yt="#3E4451",Ne="#528bff",Te=M.theme({"&":{color:Y,backgroundColor:Oe},".cm-content":{caretColor:Ne},".cm-cursor, .cm-dropCursor":{borderLeftColor:Ne},"&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:Yt},".cm-panels":{backgroundColor:Xt,color:Y},".cm-panels.cm-panels-top":{borderBottom:"2px solid black"},".cm-panels.cm-panels-bottom":{borderTop:"2px solid black"},".cm-searchMatch":{backgroundColor:"#72a1ff59",outline:"1px solid #457dff"},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:"#6199ff2f"},".cm-activeLine":{backgroundColor:"#6699ff0b"},".cm-selectionMatch":{backgroundColor:"#aafe661a"},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bad0f847"},".cm-gutters":{backgroundColor:Oe,color:me,border:"none"},".cm-activeLineGutter":{backgroundColor:Ie},".cm-foldPlaceholder":{backgroundColor:"transparent",border:"none",color:"#ddd"},".cm-tooltip":{border:"none",backgroundColor:ae},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:"transparent",borderBottomColor:"transparent"},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:ae,borderBottomColor:ae},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:Ie,color:Y}}},{dark:!0}),Ee=tt.define([{tag:c.keyword,color:Qt},{tag:[c.name,c.deleted,c.character,c.propertyName,c.macroName],color:ve},{tag:[c.function(c.variableName),c.labelName],color:_t},{tag:[c.color,c.constant(c.name),c.standard(c.name)],color:Se},{tag:[c.definition(c.name),c.separator],color:Y},{tag:[c.typeName,c.className,c.number,c.changed,c.annotation,c.modifier,c.self,c.namespace],color:Vt},{tag:[c.operator,c.operatorKeyword,c.url,c.escape,c.regexp,c.link,c.special(c.string)],color:zt},{tag:[c.meta,c.comment],color:me},{tag:c.strong,fontWeight:"bold"},{tag:c.emphasis,fontStyle:"italic"},{tag:c.strikethrough,textDecoration:"line-through"},{tag:c.link,color:me,textDecoration:"underline"},{tag:c.heading,fontWeight:"bold",color:ve},{tag:[c.atom,c.bool,c.special(c.variableName)],color:Se},{tag:[c.processingInstruction,c.string,c.inserted],color:Gt},{tag:c.invalid,color:qt}]);class He{constructor(e,t,o,n){this.state=e,this.pos=t,this.explicit=o,this.view=n,this.abortListeners=[]}tokenBefore(e){let t=be(this.state).resolveInner(this.pos,-1);for(;t&&e.indexOf(t.name)<0;)t=t.parent;return t?{from:t.from,to:this.pos,text:this.state.sliceDoc(t.from,this.pos),type:t.type}:null}matchBefore(e){let t=this.state.doc.lineAt(this.pos),o=Math.max(t.from,this.pos-250),n=t.text.slice(o-t.from,this.pos-t.from),s=n.search(Ve(e,!1));return s<0?null:{from:o+s,to:this.pos,text:n.slice(s)}}get aborted(){return this.abortListeners==null}addEventListener(e,t){e=="abort"&&this.abortListeners&&this.abortListeners.push(t)}}function Me(i){let e=Object.keys(i).join(""),t=/\w/.test(e);return t&&(e=e.replace(/\w/g,"")),`[${t?"\\w":""}${e.replace(/[^\w\s]/g,"\\$&")}]`}function Jt(i){let e=Object.create(null),t=Object.create(null);for(let{label:n}of i){e[n[0]]=!0;for(let s=1;s<n.length;s++)t[n[s]]=!0}let o=Me(e)+Me(t)+"*$";return[new RegExp("^"+o),new RegExp(o)]}function Zt(i){let e=i.map(n=>typeof n=="string"?{label:n}:n),[t,o]=e.every(n=>/^\w+$/.test(n.label))?[/\w*$/,/\w+$/]:Jt(e);return n=>{let s=n.matchBefore(o);return s||n.explicit?{from:s?s.from:n.pos,options:e,validFor:t}:null}}class Ae{constructor(e,t,o,n){this.completion=e,this.source=t,this.match=o,this.score=n}}function D(i){return i.selection.main.from}function Ve(i,e){var t;let{source:o}=i,n=e&&o[0]!="^",s=o[o.length-1]!="$";return!n&&!s?i:new RegExp(`${n?"^":""}(?:${o})${s?"$":""}`,(t=i.flags)!==null&&t!==void 0?t:i.ignoreCase?"i":"")}const ze=at.define();function eo(i,e,t,o){let{main:n}=i.selection,s=t-n.from,l=o-n.from;return Object.assign(Object.assign({},i.changeByRange(a=>a!=n&&t!=o&&i.sliceDoc(a.from+s,a.from+l)!=i.sliceDoc(t,o)?{range:a}:{changes:{from:a.from+s,to:o==n.from?a.to:a.from+l,insert:e},range:T.cursor(a.from+s+e.length)})),{scrollIntoView:!0,userEvent:"input.complete"})}const Be=new WeakMap;function to(i){if(!Array.isArray(i))return i;let e=Be.get(i);return e||Be.set(i,e=Zt(i)),e}const ee=z.define(),H=z.define();class oo{constructor(e){this.pattern=e,this.chars=[],this.folded=[],this.any=[],this.precise=[],this.byWord=[],this.score=0,this.matched=[];for(let t=0;t<e.length;){let o=v(e,t),n=R(o);this.chars.push(o);let s=e.slice(t,t+n),l=s.toUpperCase();this.folded.push(v(l==s?s.toLowerCase():l,0)),t+=n}this.astral=e.length!=this.chars.length}ret(e,t){return this.score=e,this.matched=t,this}match(e){if(this.pattern.length==0)return this.ret(-100,[]);if(e.length<this.pattern.length)return null;let{chars:t,folded:o,any:n,precise:s,byWord:l}=this;if(t.length==1){let g=v(e,0),$=R(g),E=$==e.length?0:-100;if(g!=t[0])if(g==o[0])E+=-200;else return null;return this.ret(E,[0,$])}let a=e.indexOf(this.pattern);if(a==0)return this.ret(e.length==this.pattern.length?0:-100,[0,this.pattern.length]);let r=t.length,f=0;if(a<0){for(let g=0,$=Math.min(e.length,200);g<$&&f<r;){let E=v(e,g);(E==t[f]||E==o[f])&&(n[f++]=g),g+=R(E)}if(f<r)return null}let d=0,p=0,u=!1,m=0,b=-1,w=-1,ie=/[a-z]/.test(e),W=!0;for(let g=0,$=Math.min(e.length,200),E=0;g<$&&p<r;){let x=v(e,g);a<0&&(d<r&&x==t[d]&&(s[d++]=g),m<r&&(x==t[m]||x==o[m]?(m==0&&(b=g),w=g+1,m++):m=0));let q,ne=x<255?x>=48&&x<=57||x>=97&&x<=122?2:x>=65&&x<=90?1:0:(q=Fe(x))!=q.toLowerCase()?1:q!=q.toUpperCase()?2:0;(!g||ne==1&&ie||E==0&&ne!=0)&&(t[p]==x||o[p]==x&&(u=!0)?l[p++]=g:l.length&&(W=!1)),E=ne,g+=R(x)}return p==r&&l[0]==0&&W?this.result(-100+(u?-200:0),l,e):m==r&&b==0?this.ret(-200-e.length+(w==e.length?0:-100),[0,w]):a>-1?this.ret(-700-e.length,[a,a+this.pattern.length]):m==r?this.ret(-900-e.length,[b,w]):p==r?this.result(-100+(u?-200:0)+-700+(W?0:-1100),l,e):t.length==2?null:this.result((n[0]?-700:0)+-200+-1100,n,e)}result(e,t,o){let n=[],s=0;for(let l of t){let a=l+(this.astral?R(v(o,l)):1);s&&n[s-1]==l?n[s-1]=a:(n[s++]=l,n[s++]=a)}return this.ret(e-o.length,n)}}class io{constructor(e){this.pattern=e,this.matched=[],this.score=0,this.folded=e.toLowerCase()}match(e){if(e.length<this.pattern.length)return null;let t=e.slice(0,this.pattern.length),o=t==this.pattern?0:t.toLowerCase()==this.folded?-200:null;return o==null?null:(this.matched=[0,t.length],this.score=o+(e.length==this.pattern.length?0:-100),this)}}const y=ot.define({combine(i){return lt(i,{activateOnTyping:!0,activateOnCompletion:()=>!1,activateOnTypingDelay:100,selectOnOpen:!0,override:null,closeOnBlur:!0,maxRenderedOptions:100,defaultKeymap:!0,tooltipClass:()=>"",optionClass:()=>"",aboveCursor:!1,icons:!0,addToOptions:[],positionInfo:no,filterStrict:!1,compareCompletions:(e,t)=>e.label.localeCompare(t.label),interactionDelay:75,updateSyncTime:100},{defaultKeymap:(e,t)=>e&&t,closeOnBlur:(e,t)=>e&&t,icons:(e,t)=>e&&t,tooltipClass:(e,t)=>o=>Re(e(o),t(o)),optionClass:(e,t)=>o=>Re(e(o),t(o)),addToOptions:(e,t)=>e.concat(t),filterStrict:(e,t)=>e||t})}});function Re(i,e){return i?e?i+" "+e:i:e}function no(i,e,t,o,n,s){let l=i.textDirection==ft.RTL,a=l,r=!1,f="top",d,p,u=e.left-n.left,m=n.right-e.right,b=o.right-o.left,w=o.bottom-o.top;if(a&&u<Math.min(b,m)?a=!1:!a&&m<Math.min(b,u)&&(a=!0),b<=(a?u:m))d=Math.max(n.top,Math.min(t.top,n.bottom-w))-e.top,p=Math.min(400,a?u:m);else{r=!0,p=Math.min(400,(l?e.right:n.right-e.left)-30);let g=n.bottom-e.bottom;g>=w||g>e.top?d=t.bottom-e.top:(f="bottom",d=e.bottom-t.top)}let ie=(e.bottom-e.top)/s.offsetHeight,W=(e.right-e.left)/s.offsetWidth;return{style:`${f}: ${d/ie}px; max-width: ${p/W}px`,class:"cm-completionInfo-"+(r?l?"left-narrow":"right-narrow":a?"left":"right")}}function so(i){let e=i.addToOptions.slice();return i.icons&&e.push({render(t){let o=document.createElement("div");return o.classList.add("cm-completionIcon"),t.type&&o.classList.add(...t.type.split(/\s+/g).map(n=>"cm-completionIcon-"+n)),o.setAttribute("aria-hidden","true"),o},position:20}),e.push({render(t,o,n,s){let l=document.createElement("span");l.className="cm-completionLabel";let a=t.displayLabel||t.label,r=0;for(let f=0;f<s.length;){let d=s[f++],p=s[f++];d>r&&l.appendChild(document.createTextNode(a.slice(r,d)));let u=l.appendChild(document.createElement("span"));u.appendChild(document.createTextNode(a.slice(d,p))),u.className="cm-completionMatchedText",r=p}return r<a.length&&l.appendChild(document.createTextNode(a.slice(r))),l},position:50},{render(t){if(!t.detail)return null;let o=document.createElement("span");return o.className="cm-completionDetail",o.textContent=t.detail,o},position:80}),e.sort((t,o)=>t.position-o.position).map(t=>t.render)}function re(i,e,t){if(i<=t)return{from:0,to:i};if(e<0&&(e=0),e<=i>>1){let n=Math.floor(e/t);return{from:n*t,to:(n+1)*t}}let o=Math.floor((i-e)/t);return{from:i-(o+1)*t,to:i-o*t}}class lo{constructor(e,t,o){this.view=e,this.stateField=t,this.applyCompletion=o,this.info=null,this.infoDestroy=null,this.placeInfoReq={read:()=>this.measureInfo(),write:r=>this.placeInfo(r),key:this},this.space=null,this.currentClass="";let n=e.state.field(t),{options:s,selected:l}=n.open,a=e.state.facet(y);this.optionContent=so(a),this.optionClass=a.optionClass,this.tooltipClass=a.tooltipClass,this.range=re(s.length,l,a.maxRenderedOptions),this.dom=document.createElement("div"),this.dom.className="cm-tooltip-autocomplete",this.updateTooltipClass(e.state),this.dom.addEventListener("mousedown",r=>{let{options:f}=e.state.field(t).open;for(let d=r.target,p;d&&d!=this.dom;d=d.parentNode)if(d.nodeName=="LI"&&(p=/-(\d+)$/.exec(d.id))&&+p[1]<f.length){this.applyCompletion(e,f[+p[1]]),r.preventDefault();return}}),this.dom.addEventListener("focusout",r=>{let f=e.state.field(this.stateField,!1);f&&f.tooltip&&e.state.facet(y).closeOnBlur&&r.relatedTarget!=e.contentDOM&&e.dispatch({effects:H.of(null)})}),this.showOptions(s,n.id)}mount(){this.updateSel()}showOptions(e,t){this.list&&this.list.remove(),this.list=this.dom.appendChild(this.createListBox(e,t,this.range)),this.list.addEventListener("scroll",()=>{this.info&&this.view.requestMeasure(this.placeInfoReq)})}update(e){var t;let o=e.state.field(this.stateField),n=e.startState.field(this.stateField);if(this.updateTooltipClass(e.state),o!=n){let{options:s,selected:l,disabled:a}=o.open;(!n.open||n.open.options!=s)&&(this.range=re(s.length,l,e.state.facet(y).maxRenderedOptions),this.showOptions(s,o.id)),this.updateSel(),a!=((t=n.open)===null||t===void 0?void 0:t.disabled)&&this.dom.classList.toggle("cm-tooltip-autocomplete-disabled",!!a)}}updateTooltipClass(e){let t=this.tooltipClass(e);if(t!=this.currentClass){for(let o of this.currentClass.split(" "))o&&this.dom.classList.remove(o);for(let o of t.split(" "))o&&this.dom.classList.add(o);this.currentClass=t}}positioned(e){this.space=e,this.info&&this.view.requestMeasure(this.placeInfoReq)}updateSel(){let e=this.view.state.field(this.stateField),t=e.open;if((t.selected>-1&&t.selected<this.range.from||t.selected>=this.range.to)&&(this.range=re(t.options.length,t.selected,this.view.state.facet(y).maxRenderedOptions),this.showOptions(t.options,e.id)),this.updateSelectedOption(t.selected)){this.destroyInfo();let{completion:o}=t.options[t.selected],{info:n}=o;if(!n)return;let s=typeof n=="string"?document.createTextNode(n):n(o);if(!s)return;"then"in s?s.then(l=>{l&&this.view.state.field(this.stateField,!1)==e&&this.addInfoPane(l,o)}).catch(l=>fe(this.view.state,l,"completion info")):this.addInfoPane(s,o)}}addInfoPane(e,t){this.destroyInfo();let o=this.info=document.createElement("div");if(o.className="cm-tooltip cm-completionInfo",e.nodeType!=null)o.appendChild(e),this.infoDestroy=null;else{let{dom:n,destroy:s}=e;o.appendChild(n),this.infoDestroy=s||null}this.dom.appendChild(o),this.view.requestMeasure(this.placeInfoReq)}updateSelectedOption(e){let t=null;for(let o=this.list.firstChild,n=this.range.from;o;o=o.nextSibling,n++)o.nodeName!="LI"||!o.id?n--:n==e?o.hasAttribute("aria-selected")||(o.setAttribute("aria-selected","true"),t=o):o.hasAttribute("aria-selected")&&o.removeAttribute("aria-selected");return t&&ro(this.list,t),t}measureInfo(){let e=this.dom.querySelector("[aria-selected]");if(!e||!this.info)return null;let t=this.dom.getBoundingClientRect(),o=this.info.getBoundingClientRect(),n=e.getBoundingClientRect(),s=this.space;if(!s){let l=this.dom.ownerDocument.defaultView||window;s={left:0,top:0,right:l.innerWidth,bottom:l.innerHeight}}return n.top>Math.min(s.bottom,t.bottom)-10||n.bottom<Math.max(s.top,t.top)+10?null:this.view.state.facet(y).positionInfo(this.view,t,n,o,s,this.dom)}placeInfo(e){this.info&&(e?(e.style&&(this.info.style.cssText=e.style),this.info.className="cm-tooltip cm-completionInfo "+(e.class||"")):this.info.style.cssText="top: -1e6px")}createListBox(e,t,o){const n=document.createElement("ul");n.id=t,n.setAttribute("role","listbox"),n.setAttribute("aria-expanded","true"),n.setAttribute("aria-label",this.view.state.phrase("Completions"));let s=null;for(let l=o.from;l<o.to;l++){let{completion:a,match:r}=e[l],{section:f}=a;if(f){let u=typeof f=="string"?f:f.name;if(u!=s&&(l>o.from||o.from==0))if(s=u,typeof f!="string"&&f.header)n.appendChild(f.header(f));else{let m=n.appendChild(document.createElement("completion-section"));m.textContent=u}}const d=n.appendChild(document.createElement("li"));d.id=t+"-"+l,d.setAttribute("role","option");let p=this.optionClass(a);p&&(d.className=p);for(let u of this.optionContent){let m=u(a,this.view.state,this.view,r);m&&d.appendChild(m)}}return o.from&&n.classList.add("cm-completionListIncompleteTop"),o.to<e.length&&n.classList.add("cm-completionListIncompleteBottom"),n}destroyInfo(){this.info&&(this.infoDestroy&&this.infoDestroy(),this.info.remove(),this.info=null)}destroy(){this.destroyInfo()}}function ao(i,e){return t=>new lo(t,i,e)}function ro(i,e){let t=i.getBoundingClientRect(),o=e.getBoundingClientRect(),n=t.height/i.offsetHeight;o.top<t.top?i.scrollTop-=(t.top-o.top)/n:o.bottom>t.bottom&&(i.scrollTop+=(o.bottom-t.bottom)/n)}function De(i){return(i.boost||0)*100+(i.apply?10:0)+(i.info?5:0)+(i.type?1:0)}function co(i,e){let t=[],o=null,n=f=>{t.push(f);let{section:d}=f.completion;if(d){o||(o=[]);let p=typeof d=="string"?d:d.name;o.some(u=>u.name==p)||o.push(typeof d=="string"?{name:p}:d)}},s=e.facet(y);for(let f of i)if(f.hasResult()){let d=f.result.getMatch;if(f.result.filter===!1)for(let p of f.result.options)n(new Ae(p,f.source,d?d(p):[],1e9-t.length));else{let p=e.sliceDoc(f.from,f.to),u,m=s.filterStrict?new io(p):new oo(p);for(let b of f.result.options)if(u=m.match(b.label)){let w=b.displayLabel?d?d(b,u.matched):[]:u.matched;n(new Ae(b,f.source,w,u.score+(b.boost||0)))}}}if(o){let f=Object.create(null),d=0,p=(u,m)=>{var b,w;return((b=u.rank)!==null&&b!==void 0?b:1e9)-((w=m.rank)!==null&&w!==void 0?w:1e9)||(u.name<m.name?-1:1)};for(let u of o.sort(p))d-=1e5,f[u.name]=d;for(let u of t){let{section:m}=u.completion;m&&(u.score+=f[typeof m=="string"?m:m.name])}}let l=[],a=null,r=s.compareCompletions;for(let f of t.sort((d,p)=>p.score-d.score||r(d.completion,p.completion))){let d=f.completion;!a||a.label!=d.label||a.detail!=d.detail||a.type!=null&&d.type!=null&&a.type!=d.type||a.apply!=d.apply||a.boost!=d.boost?l.push(f):De(f.completion)>De(a)&&(l[l.length-1]=f),a=f.completion}return l}class j{constructor(e,t,o,n,s,l){this.options=e,this.attrs=t,this.tooltip=o,this.timestamp=n,this.selected=s,this.disabled=l}setSelected(e,t){return e==this.selected||e>=this.options.length?this:new j(this.options,Le(t,e),this.tooltip,this.timestamp,e,this.disabled)}static build(e,t,o,n,s){let l=co(e,t);if(!l.length)return n&&e.some(r=>r.state==1)?new j(n.options,n.attrs,n.tooltip,n.timestamp,n.selected,!0):null;let a=t.facet(y).selectOnOpen?0:-1;if(n&&n.selected!=a&&n.selected!=-1){let r=n.options[n.selected].completion;for(let f=0;f<l.length;f++)if(l[f].completion==r){a=f;break}}return new j(l,Le(o,a),{pos:e.reduce((r,f)=>f.hasResult()?Math.min(r,f.from):r,1e8),create:go,above:s.aboveCursor},n?n.timestamp:Date.now(),a,!1)}map(e){return new j(this.options,this.attrs,Object.assign(Object.assign({},this.tooltip),{pos:e.mapPos(this.tooltip.pos)}),this.timestamp,this.selected,this.disabled)}}class te{constructor(e,t,o){this.active=e,this.id=t,this.open=o}static start(){return new te(uo,"cm-ac-"+Math.floor(Math.random()*2e6).toString(36),null)}update(e){let{state:t}=e,o=t.facet(y),s=(o.override||t.languageDataAt("autocomplete",D(t)).map(to)).map(a=>(this.active.find(f=>f.source==a)||new k(a,this.active.some(f=>f.state!=0)?1:0)).update(e,o));s.length==this.active.length&&s.every((a,r)=>a==this.active[r])&&(s=this.active);let l=this.open;l&&e.docChanged&&(l=l.map(e.changes)),e.selection||s.some(a=>a.hasResult()&&e.changes.touchesRange(a.from,a.to))||!fo(s,this.active)?l=j.build(s,t,this.id,l,o):l&&l.disabled&&!s.some(a=>a.state==1)&&(l=null),!l&&s.every(a=>a.state!=1)&&s.some(a=>a.hasResult())&&(s=s.map(a=>a.hasResult()?new k(a.source,0):a));for(let a of e.effects)a.is(Ge)&&(l=l&&l.setSelected(a.value,this.id));return s==this.active&&l==this.open?this:new te(s,this.id,l)}get tooltip(){return this.open?this.open.tooltip:null}get attrs(){return this.open?this.open.attrs:this.active.length?ho:po}}function fo(i,e){if(i==e)return!0;for(let t=0,o=0;;){for(;t<i.length&&!i[t].hasResult;)t++;for(;o<e.length&&!e[o].hasResult;)o++;let n=t==i.length,s=o==e.length;if(n||s)return n==s;if(i[t++].result!=e[o++].result)return!1}}const ho={"aria-autocomplete":"list"},po={};function Le(i,e){let t={"aria-autocomplete":"list","aria-haspopup":"listbox","aria-controls":i};return e>-1&&(t["aria-activedescendant"]=i+"-"+e),t}const uo=[];function qe(i,e){if(i.isUserEvent("input.complete")){let o=i.annotation(ze);if(o&&e.activateOnCompletion(o))return 12}let t=i.isUserEvent("input.type");return t&&e.activateOnTyping?5:t?1:i.isUserEvent("delete.backward")?2:i.selection?8:i.docChanged?16:0}class k{constructor(e,t,o=-1){this.source=e,this.state=t,this.explicitPos=o}hasResult(){return!1}update(e,t){let o=qe(e,t),n=this;(o&8||o&16&&this.touches(e))&&(n=new k(n.source,0)),o&4&&n.state==0&&(n=new k(this.source,1)),n=n.updateFor(e,o);for(let s of e.effects)if(s.is(ee))n=new k(n.source,1,s.value?D(e.state):-1);else if(s.is(H))n=new k(n.source,0);else if(s.is(_e))for(let l of s.value)l.source==n.source&&(n=l);return n}updateFor(e,t){return this.map(e.changes)}map(e){return e.empty||this.explicitPos<0?this:new k(this.source,this.state,e.mapPos(this.explicitPos))}touches(e){return e.changes.touchesRange(D(e.state))}}class U extends k{constructor(e,t,o,n,s){super(e,2,t),this.result=o,this.from=n,this.to=s}hasResult(){return!0}updateFor(e,t){var o;if(!(t&3))return this.map(e.changes);let n=this.result;n.map&&!e.changes.empty&&(n=n.map(n,e.changes));let s=e.changes.mapPos(this.from),l=e.changes.mapPos(this.to,1),a=D(e.state);if((this.explicitPos<0?a<=s:a<this.from)||a>l||!n||t&2&&D(e.startState)==this.from)return new k(this.source,t&4?1:0);let r=this.explicitPos<0?-1:e.changes.mapPos(this.explicitPos);return mo(n.validFor,e.state,s,l)?new U(this.source,r,n,s,l):n.update&&(n=n.update(n,s,l,new He(e.state,a,r>=0)))?new U(this.source,r,n,n.from,(o=n.to)!==null&&o!==void 0?o:D(e.state)):new k(this.source,1,r)}map(e){return e.empty?this:(this.result.map?this.result.map(this.result,e):this.result)?new U(this.source,this.explicitPos<0?-1:e.mapPos(this.explicitPos),this.result,e.mapPos(this.from),e.mapPos(this.to,1)):new k(this.source,0)}touches(e){return e.changes.touchesRange(this.from,this.to)}}function mo(i,e,t,o){if(!i)return!1;let n=e.sliceDoc(t,o);return typeof i=="function"?i(n,t,o,e):Ve(i,!0).test(n)}const _e=z.define({map(i,e){return i.map(t=>t.map(e))}}),Ge=z.define(),C=je.define({create(){return te.start()},update(i,e){return i.update(e)},provide:i=>[st.from(i,e=>e.tooltip),M.contentAttributes.from(i,e=>e.attrs)]});function ye(i,e){const t=e.completion.apply||e.completion.label;let o=i.state.field(C).active.find(n=>n.source==e.source);return o instanceof U?(typeof t=="string"?i.dispatch(Object.assign(Object.assign({},eo(i.state,t,o.from,o.to)),{annotations:ze.of(e.completion)})):t(i,e.completion,o.from,o.to),!0):!1}const go=ao(C,ye);function X(i,e="option"){return t=>{let o=t.state.field(C,!1);if(!o||!o.open||o.open.disabled||Date.now()-o.open.timestamp<t.state.facet(y).interactionDelay)return!1;let n=1,s;e=="page"&&(s=We(t,o.open.tooltip))&&(n=Math.max(2,Math.floor(s.dom.offsetHeight/s.dom.querySelector("li").offsetHeight)-1));let{length:l}=o.open.options,a=o.open.selected>-1?o.open.selected+n*(i?1:-1):i?0:l-1;return a<0?a=e=="page"?0:l-1:a>=l&&(a=e=="page"?l-1:0),t.dispatch({effects:Ge.of(a)}),!0}}const bo=i=>{let e=i.state.field(C,!1);return i.state.readOnly||!e||!e.open||e.open.selected<0||e.open.disabled||Date.now()-e.open.timestamp<i.state.facet(y).interactionDelay?!1:ye(i,e.open.options[e.open.selected])},yo=i=>i.state.field(C,!1)?(i.dispatch({effects:ee.of(!0)}),!0):!1,xo=i=>{let e=i.state.field(C,!1);return!e||!e.active.some(t=>t.state!=0)?!1:(i.dispatch({effects:H.of(null)}),!0)};class Co{constructor(e,t){this.active=e,this.context=t,this.time=Date.now(),this.updates=[],this.done=void 0}}const wo=50,ko=1e3,vo=it.fromClass(class{constructor(i){this.view=i,this.debounceUpdate=-1,this.running=[],this.debounceAccept=-1,this.pendingStart=!1,this.composing=0;for(let e of i.state.field(C).active)e.state==1&&this.startQuery(e)}update(i){let e=i.state.field(C),t=i.state.facet(y);if(!i.selectionSet&&!i.docChanged&&i.startState.field(C)==e)return;let o=i.transactions.some(s=>{let l=qe(s,t);return l&8||(s.selection||s.docChanged)&&!(l&3)});for(let s=0;s<this.running.length;s++){let l=this.running[s];if(o||l.updates.length+i.transactions.length>wo&&Date.now()-l.time>ko){for(let a of l.context.abortListeners)try{a()}catch(r){fe(this.view.state,r)}l.context.abortListeners=null,this.running.splice(s--,1)}else l.updates.push(...i.transactions)}this.debounceUpdate>-1&&clearTimeout(this.debounceUpdate),i.transactions.some(s=>s.effects.some(l=>l.is(ee)))&&(this.pendingStart=!0);let n=this.pendingStart?50:t.activateOnTypingDelay;if(this.debounceUpdate=e.active.some(s=>s.state==1&&!this.running.some(l=>l.active.source==s.source))?setTimeout(()=>this.startUpdate(),n):-1,this.composing!=0)for(let s of i.transactions)s.isUserEvent("input.type")?this.composing=2:this.composing==2&&s.selection&&(this.composing=3)}startUpdate(){this.debounceUpdate=-1,this.pendingStart=!1;let{state:i}=this.view,e=i.field(C);for(let t of e.active)t.state==1&&!this.running.some(o=>o.active.source==t.source)&&this.startQuery(t)}startQuery(i){let{state:e}=this.view,t=D(e),o=new He(e,t,i.explicitPos==t,this.view),n=new Co(i,o);this.running.push(n),Promise.resolve(i.source(o)).then(s=>{n.context.aborted||(n.done=s||null,this.scheduleAccept())},s=>{this.view.dispatch({effects:H.of(null)}),fe(this.view.state,s)})}scheduleAccept(){this.running.every(i=>i.done!==void 0)?this.accept():this.debounceAccept<0&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(y).updateSyncTime))}accept(){var i;this.debounceAccept>-1&&clearTimeout(this.debounceAccept),this.debounceAccept=-1;let e=[],t=this.view.state.facet(y);for(let o=0;o<this.running.length;o++){let n=this.running[o];if(n.done===void 0)continue;if(this.running.splice(o--,1),n.done){let l=new U(n.active.source,n.active.explicitPos,n.done,n.done.from,(i=n.done.to)!==null&&i!==void 0?i:D(n.updates.length?n.updates[0].startState:this.view.state));for(let a of n.updates)l=l.update(a,t);if(l.hasResult()){e.push(l);continue}}let s=this.view.state.field(C).active.find(l=>l.source==n.active.source);if(s&&s.state==1)if(n.done==null){let l=new k(n.active.source,0);for(let a of n.updates)l=l.update(a,t);l.state!=1&&e.push(l)}else this.startQuery(s)}e.length&&this.view.dispatch({effects:_e.of(e)})}},{eventHandlers:{blur(i){let e=this.view.state.field(C,!1);if(e&&e.tooltip&&this.view.state.facet(y).closeOnBlur){let t=e.open&&We(this.view,e.open.tooltip);(!t||!t.dom.contains(i.relatedTarget))&&setTimeout(()=>this.view.dispatch({effects:H.of(null)}),10)}},compositionstart(){this.composing=1},compositionend(){this.composing==3&&setTimeout(()=>this.view.dispatch({effects:ee.of(!1)}),20),this.composing=0}}}),So=typeof navigator=="object"&&/Win/.test(navigator.platform),Io=Ue.highest(M.domEventHandlers({keydown(i,e){let t=e.state.field(C,!1);if(!t||!t.open||t.open.disabled||t.open.selected<0||i.key.length>1||i.ctrlKey&&!(So&&i.altKey)||i.metaKey)return!1;let o=t.open.options[t.open.selected],n=t.active.find(l=>l.source==o.source),s=o.completion.commitCharacters||n.result.commitCharacters;return s&&s.indexOf(i.key)>-1&&ye(e,o),!1}})),Oo=M.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:"monospace",whiteSpace:"nowrap",overflow:"hidden auto",maxWidth_fallback:"700px",maxWidth:"min(700px, 95vw)",minWidth:"250px",maxHeight:"10em",height:"100%",listStyle:"none",margin:0,padding:0,"& > li, & > completion-section":{padding:"1px 3px",lineHeight:1.2},"& > li":{overflowX:"hidden",textOverflow:"ellipsis",cursor:"pointer"},"& > completion-section":{display:"list-item",borderBottom:"1px solid silver",paddingLeft:"0.5em",opacity:.7}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#17c",color:"white"},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#777"},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#347",color:"white"},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#444"},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:'"···"',opacity:.5,display:"block",textAlign:"center"},".cm-tooltip.cm-completionInfo":{position:"absolute",padding:"3px 9px",width:"max-content",maxWidth:"400px",boxSizing:"border-box"},".cm-completionInfo.cm-completionInfo-left":{right:"100%"},".cm-completionInfo.cm-completionInfo-right":{left:"100%"},".cm-completionInfo.cm-completionInfo-left-narrow":{right:"30px"},".cm-completionInfo.cm-completionInfo-right-narrow":{left:"30px"},"&light .cm-snippetField":{backgroundColor:"#00000022"},"&dark .cm-snippetField":{backgroundColor:"#ffffff22"},".cm-snippetFieldPosition":{verticalAlign:"text-top",width:0,height:"1.15em",display:"inline-block",margin:"0 -0.7px -.7em",borderLeft:"1.4px dotted #888"},".cm-completionMatchedText":{textDecoration:"underline"},".cm-completionDetail":{marginLeft:"0.5em",fontStyle:"italic"},".cm-completionIcon":{fontSize:"90%",width:".8em",display:"inline-block",textAlign:"center",paddingRight:".6em",opacity:"0.6",boxSizing:"content-box"},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:"'ƒ'"}},".cm-completionIcon-class":{"&:after":{content:"'○'"}},".cm-completionIcon-interface":{"&:after":{content:"'◌'"}},".cm-completionIcon-variable":{"&:after":{content:"'𝑥'"}},".cm-completionIcon-constant":{"&:after":{content:"'𝐶'"}},".cm-completionIcon-type":{"&:after":{content:"'𝑡'"}},".cm-completionIcon-enum":{"&:after":{content:"'∪'"}},".cm-completionIcon-property":{"&:after":{content:"'□'"}},".cm-completionIcon-keyword":{"&:after":{content:"'🔑︎'"}},".cm-completionIcon-namespace":{"&:after":{content:"'▢'"}},".cm-completionIcon-text":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}}),V={brackets:["(","[","{","'",'"'],before:")]}:;>",stringPrefixes:[]},P=z.define({map(i,e){let t=e.mapPos(i,-1,rt.TrackAfter);return t??void 0}}),xe=new class extends ct{};xe.startSide=1;xe.endSide=-1;const Qe=je.define({create(){return nt.empty},update(i,e){if(i=i.map(e.changes),e.selection){let t=e.state.doc.lineAt(e.selection.main.head);i=i.update({filter:o=>o>=t.from&&o<=t.to})}for(let t of e.effects)t.is(P)&&(i=i.update({add:[xe.range(t.value,t.value+1)]}));return i}});function No(){return[Eo,Qe]}const ce="()[]{}<>";function Xe(i){for(let e=0;e<ce.length;e+=2)if(ce.charCodeAt(e)==i)return ce.charAt(e+1);return Fe(i<128?i:i+1)}function Ye(i,e){return i.languageDataAt("closeBrackets",e)[0]||V}const To=typeof navigator=="object"&&/Android\b/.test(navigator.userAgent),Eo=M.inputHandler.of((i,e,t,o)=>{if((To?i.composing:i.compositionStarted)||i.state.readOnly)return!1;let n=i.state.selection.main;if(o.length>2||o.length==2&&R(v(o,0))==1||e!=n.from||t!=n.to)return!1;let s=Bo(i.state,o);return s?(i.dispatch(s),!0):!1}),Mo=({state:i,dispatch:e})=>{if(i.readOnly)return!1;let o=Ye(i,i.selection.main.head).brackets||V.brackets,n=null,s=i.changeByRange(l=>{if(l.empty){let a=Ro(i.doc,l.head);for(let r of o)if(r==a&&oe(i.doc,l.head)==Xe(v(r,0)))return{changes:{from:l.head-r.length,to:l.head+r.length},range:T.cursor(l.head-r.length)}}return{range:n=l}});return n||e(i.update(s,{scrollIntoView:!0,userEvent:"delete.backward"})),!n},Ao=[{key:"Backspace",run:Mo}];function Bo(i,e){let t=Ye(i,i.selection.main.head),o=t.brackets||V.brackets;for(let n of o){let s=Xe(v(n,0));if(e==n)return s==n?Po(i,n,o.indexOf(n+n+n)>-1,t):Do(i,n,s,t.before||V.before);if(e==s&&Je(i,i.selection.main.from))return Lo(i,n,s)}return null}function Je(i,e){let t=!1;return i.field(Qe).between(0,i.doc.length,o=>{o==e&&(t=!0)}),t}function oe(i,e){let t=i.sliceString(e,e+2);return t.slice(0,R(v(t,0)))}function Ro(i,e){let t=i.sliceString(e-2,e);return R(v(t,0))==t.length?t:t.slice(1)}function Do(i,e,t,o){let n=null,s=i.changeByRange(l=>{if(!l.empty)return{changes:[{insert:e,from:l.from},{insert:t,from:l.to}],effects:P.of(l.to+e.length),range:T.range(l.anchor+e.length,l.head+e.length)};let a=oe(i.doc,l.head);return!a||/\s/.test(a)||o.indexOf(a)>-1?{changes:{insert:e+t,from:l.head},effects:P.of(l.head+e.length),range:T.cursor(l.head+e.length)}:{range:n=l}});return n?null:i.update(s,{scrollIntoView:!0,userEvent:"input.type"})}function Lo(i,e,t){let o=null,n=i.changeByRange(s=>s.empty&&oe(i.doc,s.head)==t?{changes:{from:s.head,to:s.head+t.length,insert:t},range:T.cursor(s.head+t.length)}:o={range:s});return o?null:i.update(n,{scrollIntoView:!0,userEvent:"input.type"})}function Po(i,e,t,o){let n=o.stringPrefixes||V.stringPrefixes,s=null,l=i.changeByRange(a=>{if(!a.empty)return{changes:[{insert:e,from:a.from},{insert:e,from:a.to}],effects:P.of(a.to+e.length),range:T.range(a.anchor+e.length,a.head+e.length)};let r=a.head,f=oe(i.doc,r),d;if(f==e){if(Pe(i,r))return{changes:{insert:e+e,from:r},effects:P.of(r+e.length),range:T.cursor(r+e.length)};if(Je(i,r)){let u=t&&i.sliceDoc(r,r+e.length*3)==e+e+e?e+e+e:e;return{changes:{from:r,to:r+u.length,insert:u},range:T.cursor(r+u.length)}}}else{if(t&&i.sliceDoc(r-2*e.length,r)==e+e&&(d=$e(i,r-2*e.length,n))>-1&&Pe(i,d))return{changes:{insert:e+e+e+e,from:r},effects:P.of(r+e.length),range:T.cursor(r+e.length)};if(i.charCategorizer(r)(f)!=he.Word&&$e(i,r,n)>-1&&!$o(i,r,e,n))return{changes:{insert:e+e,from:r},effects:P.of(r+e.length),range:T.cursor(r+e.length)}}return{range:s=a}});return s?null:i.update(l,{scrollIntoView:!0,userEvent:"input.type"})}function Pe(i,e){let t=be(i).resolveInner(e+1);return t.parent&&t.from==e}function $o(i,e,t,o){let n=be(i).resolveInner(e,-1),s=o.reduce((l,a)=>Math.max(l,a.length),0);for(let l=0;l<5;l++){let a=i.sliceDoc(n.from,Math.min(n.to,n.from+t.length+s)),r=a.indexOf(t);if(!r||r>-1&&o.indexOf(a.slice(0,r))>-1){let d=n.firstChild;for(;d&&d.from==n.from&&d.to-d.from>t.length+r;){if(i.sliceDoc(d.to-t.length,d.to)==t)return!1;d=d.firstChild}return!0}let f=n.to==e&&n.parent;if(!f)break;n=f}return!1}function $e(i,e,t){let o=i.charCategorizer(e);if(o(i.sliceDoc(e-1,e))!=he.Word)return e;for(let n of t){let s=e-n.length;if(i.sliceDoc(s,e)==n&&o(i.sliceDoc(s-1,s))!=he.Word)return s}return-1}function jo(i={}){return[Io,C,y.of(i),vo,Uo,Oo]}const Ze=[{key:"Ctrl-Space",run:yo},{key:"Escape",run:xo},{key:"ArrowDown",run:X(!0)},{key:"ArrowUp",run:X(!1)},{key:"PageDown",run:X(!0,"page")},{key:"PageUp",run:X(!1,"page")},{key:"Enter",run:bo}],Uo=Ue.highest(ge.computeN([y],i=>i.facet(y).defaultKeymap?[Ze]:[])),Wo=[ht(),dt(),pt(),ut(),mt(),Ke(),gt(),J.allowMultipleSelections.of(!0),bt(),K(de,{fallback:!0}),yt(),No(),jo(),xt(),Ct(),wt(),kt(),ge.of([...Ao,...vt,...St,...It,...Ot,...Ze,...Nt])],Fo={"Control character":"控制字符","Selection deleted":"删除所选内容","Folded lines":"折叠行","Unfolded lines":"展开行",to:"至","folded code":"折叠的代码",unfold:"展开","Fold line":"折叠行","Unfold line":"展开行","Go to line":"跳转至行",go:"确定",Find:"查找",Replace:"替换",next:"下一个",previous:"上一个",all:"全部","match case":"匹配大小写","by word":"按单词",replace:"替换","replace all":"全部替换",close:"关闭","current match":"当前匹配项","replaced $ matches":"替换了 $ 个匹配项","replaced match on line $":"替换了行 $ 的匹配项","on line":"在行",Completions:"自动完成",Diagnostics:"诊断","No diagnostics":"无诊断信息"},Ko={extensions:[Wo,J.phrases.of(Fo),ge.of([Tt]),Ke()]},Ho=Mt({__name:"EditorMini",props:{inputDefault:{default:""},plugin:{default:void 0},placeholder:{default:""},readonly:{type:Boolean,default:!1}},emits:["change"],setup(i,{expose:e,emit:t}){const o=i,n=t;e({getView:u,setInput:p});const s=At();let l;const a=new Ce,r=new Ce,f=[Ko.extensions,o.plugin?o.plugin.miniExtensions||o.plugin.extensions:[],M.updateListener.of(d),a.of(se().isDark?Te:M.theme({},{dark:!1})),r.of(se().isDark?K(Ee,{fallback:!0}):K(de))];o.placeholder&&f.push(Et(o.placeholder)),o.readonly&&f.push(J.readOnly.of(!0)),Bt(()=>{l=new M({state:J.create({extensions:f,doc:o.inputDefault}),parent:s.value})}),Rt(()=>{l==null||l.destroy()}),Dt(()=>se().isDark,m=>{l.dispatch({effects:[a.reconfigure(m?Te:M.theme({},{dark:!1})),r.reconfigure(m?K(Ee,{fallback:!0}):K(de))]})});function d(m){m.docChanged&&n("change",m.state.doc.toString())}function p(m){l.dispatch({changes:{from:0,to:l.state.doc.length,insert:m}})}function u(){return l}return(m,b)=>(Pt(),Lt("div",{ref_key:"editor",ref:s,class:"editor","w-full":""},null,512))}}),_o=$t(Ho,[["__scopeId","data-v-7d53199f"]]);export{_o as _,qo as s,c as t};
