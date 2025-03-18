import{_ as H}from"./FormatTransformer-BT5SnMgh.js";import{aU as K,k as ee,R as te,a4 as ne,E as re,r as le,F as x,K as E,x as b,a0 as oe}from"./index-bx-t8jyU.js";import{E as ae}from"./el-input-number-NlQPvmes.js";import{E as ie}from"./el-switch-CL0BskdX.js";import{O as se,P as L,ap as Oe,S as ce,T as ue,U as fe,W as me,au as pe,Z as J,p as de,B as ge}from"./index-R_nMalGn.js";import{s as ye,t as C}from"./EditorMini-59dpRPH6.js";import"./el-form-item-DsfNvFcV.js";import"./castArray-_6gdgg0Z.js";import"./useComponentRef-DmRL80pD.js";import"./index-DTdhN5mp.js";import"./index-Vcq4gwWv.js";const R=1,$e=2,Se=3,he=4,Te=5,_e=35,Ce=36,Pe=37,ve=11,be=13;function Ve(e){return e==45||e==46||e==58||e>=65&&e<=90||e==95||e>=97&&e<=122||e>=161}function we(e){return e==9||e==10||e==13||e==32}let I=null,Y=null,Z=0;function j(e,n){let o=e.pos+n;if(Y==e&&Z==o)return I;for(;we(e.peek(n));)n++;let r="";for(;;){let a=e.peek(n);if(!Ve(a))break;r+=String.fromCharCode(a),n++}return Y=e,Z=o,I=r||null}function M(e,n){this.name=e,this.parent=n,this.hash=n?n.hash:0;for(let o=0;o<e.length;o++)this.hash+=(this.hash<<4)+e.charCodeAt(o)+(e.charCodeAt(o)<<8)}const We=new Oe({start:null,shift(e,n,o,r){return n==R?new M(j(r,1)||"",e):e},reduce(e,n){return n==ve&&e?e.parent:e},reuse(e,n,o,r){let a=n.type.id;return a==R||a==be?new M(j(r,1)||"",e):e},hash(e){return e?e.hash:0},strict:!1}),xe=new L((e,n)=>{if(e.next==60){if(e.advance(),e.next==47){e.advance();let o=j(e,0);if(!o)return e.acceptToken(Te);if(n.context&&o==n.context.name)return e.acceptToken($e);for(let r=n.context;r;r=r.parent)if(r.name==o)return e.acceptToken(Se,-2);e.acceptToken(he)}else if(e.next!=33&&e.next!=63)return e.acceptToken(R)}},{contextual:!0});function k(e,n){return new L(o=>{let r=0,a=n.charCodeAt(0);e:for(;!(o.next<0);o.advance(),r++)if(o.next==a){for(let m=1;m<n.length;m++)if(o.peek(m)!=n.charCodeAt(m))continue e;break}r&&o.acceptToken(e)})}const Ee=k(_e,"-->"),Xe=k(Ce,"?>"),Qe=k(Pe,"]]>"),Ne=ye({Text:C.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":C.angleBracket,TagName:C.tagName,"MismatchedCloseTag/TagName":[C.tagName,C.invalid],AttributeName:C.attributeName,AttributeValue:C.attributeValue,Is:C.definitionOperator,"EntityReference CharacterReference":C.character,Comment:C.blockComment,ProcessingInst:C.processingInstruction,DoctypeDecl:C.documentMeta,Cdata:C.special(C.string)}),Re=se.deserialize({version:14,states:",SOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DS'#DSOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C{'#C{O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C|'#C|O$dOrO,59^OOOP,59^,59^OOOS'#C}'#C}O$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6y-E6yOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6z-E6zOOOP1G.x1G.xOOOS-E6{-E6{OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'jO!bO,59eOOOO-E6w-E6wO'xOpO1G.uO'xOpO1G.uOOOP1G.u1G.uO(QOpO7+$fOOOP7+$f7+$fO(YO!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(eO#tO'#CnOOOO1G.q1G.qO(sOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO({O#tO,59YOOOO,59Y,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.t",stateData:")Z~OPQOSVOTWOVWOWWOXWOiXOxPO}TO!PUO~OuZOw]O~O^`Oy^O~OPQOQcOSVOTWOVWOWWOXWOxPO}TO!PUO~ORdO~P!SOseO|gO~OthO!OjO~O^lOy^O~OuZOwoO~O^qOy^O~O[vO`sOdwOy^O~ORyO~P!SO^{Oy^O~OseO|}O~OthO!O!PO~O^!QOy^O~O[!SOy^O~O[!VO`sOd!WOy^O~Oa!YOy^O~Oy^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oy^O~O[!_Oy^O~O[!aOy^O~O[!cO`sOd!dOy^O~O[!cO`sOd!dO~Oa!eOy^O~Oy^Oz!gO~Oy^O[ma`madma~O[!jOy^O~O[!kOy^O~O[!lO`sOd!mO~OW!pOX!pOz!rO{!pO~O[!sOy^O~OW!pOX!pOz!vO{!pO~O",goto:"%[wPPPPPPPPPPxxP!OP!UPP!_!iP!oxxxP!u!{#R$Z$j$p$v$|PPPP%SXWORYbXRORYb_t`qru!T!U!bQ!h!YS!o!e!fR!t!nQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!i!nQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!i!]R!n!eQu`S!UqrU![u!U!bR!b!TQ!q!gR!u!qQbRRxbQfTR|fQiUR!OiSXOYTaRb",nodeNames:"⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",maxTerm:47,context:We,nodeProps:[["closedBy",1,"SelfCloseEndTag EndTag",13,"CloseTag MissingCloseTag"],["openedBy",12,"StartTag StartCloseTag",19,"OpenTag",20,"StartTag"],["isolate",-6,13,18,19,21,22,24,""]],propSources:[Ne],skippedNodes:[0],repeatNodeCount:8,tokenData:"Jy~R!XOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs'ssv$nvw(Zw}$n}!O,^!O!P$n!P!Q.m!Q![$n![!]0V!]!^$n!^!_3h!_!`El!`!aF_!a!bGQ!b!c$n!c!}0V!}#P$n#P#QHj#Q#R$n#R#S0V#S#T$n#T#o0V#o%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U$n4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$nX$uWVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nP%dTVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_P%vP;=`<%l%_W&OT{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yW&bP;=`<%l%yX&hP;=`<%l$n_&t_VP{WyUOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ'zTzYVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_~(^ast)c![!]*g!c!}*g#R#S*g#T#o*g%W%o*g%p&a*g&b1p*g4U4d*g4e$IS*g$I`$Ib*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~)fQ!Q![)l#l#m)z~)oQ!Q![)l!]!^)u~)zOX~~)}R!Q![*W!c!i*W#T#Z*W~*ZS!Q![*W!]!^)u!c!i*W#T#Z*W~*jg}!O*g!O!P*g!Q![*g![!]*g!]!^,R!c!}*g#R#S*g#T#o*g$}%O*g%W%o*g%p&a*g&b1p*g1p4U*g4U4d*g4e$IS*g$I`$Ib*g$Je$Jg*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~,WOW~~,ZP;=`<%l*gZ,eYVP{WOr$nrs%_sv$nw}$n}!O-T!O!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ-[YVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a-z!a;'S$n;'S;=`&e<%lO$nZ.TW|QVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n].tYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a/d!a;'S$n;'S;=`&e<%lO$n]/mWdSVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_0b!O`S^QVP{WOr$nrs%_sv$nw}$n}!O0V!O!P0V!P!Q$n!Q![0V![!]0V!]!^$n!^!_%y!_!c$n!c!}0V!}#R$n#R#S0V#S#T$n#T#o0V#o$}$n$}%O0V%O%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U0V4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Je$n$Je$Jg0V$Jg$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$n_3eP;=`<%l0VX3mW{WOq%yqr4Vsv%yw!a%y!a!bEU!b;'S%y;'S;=`&_<%lO%yX4[]{WOr%ysv%yw}%y}!O5T!O!f%y!f!g6V!g!}%y!}#O;f#O#W%y#W#XAr#X;'S%y;'S;=`&_<%lO%yX5YV{WOr%ysv%yw}%y}!O5o!O;'S%y;'S;=`&_<%lO%yX5vT}P{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX6[V{WOr%ysv%yw!q%y!q!r6q!r;'S%y;'S;=`&_<%lO%yX6vV{WOr%ysv%yw!e%y!e!f7]!f;'S%y;'S;=`&_<%lO%yX7bV{WOr%ysv%yw!v%y!v!w7w!w;'S%y;'S;=`&_<%lO%yX7|V{WOr%ysv%yw!{%y!{!|8c!|;'S%y;'S;=`&_<%lO%yX8hV{WOr%ysv%yw!r%y!r!s8}!s;'S%y;'S;=`&_<%lO%yX9SV{WOr%ysv%yw!g%y!g!h9i!h;'S%y;'S;=`&_<%lO%yX9nX{WOr9irs:Zsv9ivw:Zw!`9i!`!a:x!a;'S9i;'S;=`;`<%lO9iP:^TO!`:Z!`!a:m!a;'S:Z;'S;=`:r<%lO:ZP:rOiPP:uP;=`<%l:ZX;PTiP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX;cP;=`<%l9iX;kX{WOr%ysv%yw!e%y!e!f<W!f#V%y#V#W?f#W;'S%y;'S;=`&_<%lO%yX<]V{WOr%ysv%yw!f%y!f!g<r!g;'S%y;'S;=`&_<%lO%yX<wV{WOr%ysv%yw!c%y!c!d=^!d;'S%y;'S;=`&_<%lO%yX=cV{WOr%ysv%yw!v%y!v!w=x!w;'S%y;'S;=`&_<%lO%yX=}V{WOr%ysv%yw!c%y!c!d>d!d;'S%y;'S;=`&_<%lO%yX>iV{WOr%ysv%yw!}%y!}#O?O#O;'S%y;'S;=`&_<%lO%yX?VT{WxPOr%ysv%yw;'S%y;'S;=`&_<%lO%yX?kV{WOr%ysv%yw#W%y#W#X@Q#X;'S%y;'S;=`&_<%lO%yX@VV{WOr%ysv%yw#T%y#T#U@l#U;'S%y;'S;=`&_<%lO%yX@qV{WOr%ysv%yw#h%y#h#iAW#i;'S%y;'S;=`&_<%lO%yXA]V{WOr%ysv%yw#T%y#T#U>d#U;'S%y;'S;=`&_<%lO%yXAwV{WOr%ysv%yw#c%y#c#dB^#d;'S%y;'S;=`&_<%lO%yXBcV{WOr%ysv%yw#V%y#V#WBx#W;'S%y;'S;=`&_<%lO%yXB}V{WOr%ysv%yw#h%y#h#iCd#i;'S%y;'S;=`&_<%lO%yXCiV{WOr%ysv%yw#m%y#m#nDO#n;'S%y;'S;=`&_<%lO%yXDTV{WOr%ysv%yw#d%y#d#eDj#e;'S%y;'S;=`&_<%lO%yXDoV{WOr%ysv%yw#X%y#X#Y9i#Y;'S%y;'S;=`&_<%lO%yXE]T!PP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yZEuWaQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_FhW[UVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZGXYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aGw!a;'S$n;'S;=`&e<%lO$nZHQW!OQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZHqYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_#P$n#P#QIa#Q;'S$n;'S;=`&e<%lO$nZIhYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aJW!a;'S$n;'S;=`&e<%lO$nZJaWwQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n",tokenizers:[xe,Ee,Xe,Qe,0,1,2,3],topRules:{Document:[0,6]},tokenPrec:0});function W(e,n){let o=n&&n.getChild("TagName");return o?e.sliceString(o.from,o.to):""}function X(e,n){let o=n&&n.firstChild;return!o||o.name!="OpenTag"?"":W(e,o)}function je(e,n,o){let r=n&&n.getChildren("Attribute").find(m=>m.from<=o&&m.to>=o),a=r&&r.getChild("AttributeName");return a?e.sliceString(a.from,a.to):""}function Q(e){for(let n=e&&e.parent;n;n=n.parent)if(n.name=="Element")return n;return null}function Ae(e,n){var o;let r=J(e).resolveInner(n,-1),a=null;for(let m=r;!a&&m.parent;m=m.parent)(m.name=="OpenTag"||m.name=="CloseTag"||m.name=="SelfClosingTag"||m.name=="MismatchedCloseTag")&&(a=m);if(a&&(a.to>n||a.lastChild.type.isError)){let m=a.parent;if(r.name=="TagName")return a.name=="CloseTag"||a.name=="MismatchedCloseTag"?{type:"closeTag",from:r.from,context:m}:{type:"openTag",from:r.from,context:Q(m)};if(r.name=="AttributeName")return{type:"attrName",from:r.from,context:a};if(r.name=="AttributeValue")return{type:"attrValue",from:r.from,context:a};let f=r==a||r.name=="Attribute"?r.childBefore(n):r;return(f==null?void 0:f.name)=="StartTag"?{type:"openTag",from:n,context:Q(m)}:(f==null?void 0:f.name)=="StartCloseTag"&&f.to<=n?{type:"closeTag",from:n,context:m}:(f==null?void 0:f.name)=="Is"?{type:"attrValue",from:n,context:a}:f?{type:"attrName",from:n,context:a}:null}else if(r.name=="StartCloseTag")return{type:"closeTag",from:n,context:r.parent};for(;r.parent&&r.to==n&&!(!((o=r.lastChild)===null||o===void 0)&&o.type.isError);)r=r.parent;return r.name=="Element"||r.name=="Text"||r.name=="Document"?{type:"tag",from:n,context:r.name=="Element"?r:Q(r)}:null}class ke{constructor(n,o,r){this.attrs=o,this.attrValues=r,this.children=[],this.name=n.name,this.completion=Object.assign(Object.assign({type:"type"},n.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=n.textContent?n.textContent.map(a=>({label:a,type:"text"})):[]}}const N=/^[:\-\.\w\u00b7-\uffff]*$/;function U(e){return Object.assign(Object.assign({type:"property"},e.completion||{}),{label:e.name})}function F(e){return typeof e=="string"?{label:`"${e}"`,type:"constant"}:/^"/.test(e.label)?e:Object.assign(Object.assign({},e),{label:`"${e.label}"`})}function Ge(e,n){let o=[],r=[],a=Object.create(null);for(let s of n){let y=U(s);o.push(y),s.global&&r.push(y),s.values&&(a[s.name]=s.values.map(F))}let m=[],f=[],h=Object.create(null);for(let s of e){let y=r,d=a;s.attributes&&(y=y.concat(s.attributes.map(p=>typeof p=="string"?o.find(T=>T.label==p)||{label:p,type:"property"}:(p.values&&(d==a&&(d=Object.create(d)),d[p.name]=p.values.map(F)),U(p)))));let $=new ke(s,y,d);h[$.name]=$,m.push($),s.top&&f.push($)}f.length||(f=m);for(let s=0;s<m.length;s++){let y=e[s],d=m[s];if(y.children)for(let $ of y.children)h[$]&&d.children.push(h[$]);else d.children=m}return s=>{var y;let{doc:d}=s.state,$=Ae(s.state,s.pos);if(!$||$.type=="tag"&&!s.explicit)return null;let{type:p,from:T,context:l}=$;if(p=="openTag"){let t=f,i=X(d,l);if(i){let c=h[i];t=(c==null?void 0:c.children)||m}return{from:T,options:t.map(c=>c.completion),validFor:N}}else if(p=="closeTag"){let t=X(d,l);return t?{from:T,to:s.pos+(d.sliceString(s.pos,s.pos+1)==">"?1:0),options:[((y=h[t])===null||y===void 0?void 0:y.closeNameCompletion)||{label:t+">",type:"type"}],validFor:N}:null}else if(p=="attrName"){let t=h[W(d,l)];return{from:T,options:(t==null?void 0:t.attrs)||r,validFor:N}}else if(p=="attrValue"){let t=je(d,l,T);if(!t)return null;let i=h[W(d,l)],c=((i==null?void 0:i.attrValues)||a)[t];return!c||!c.length?null:{from:T,to:s.pos+(d.sliceString(s.pos,s.pos+1)=='"'?1:0),options:c,validFor:/^"[^"]*"?$/}}else if(p=="tag"){let t=X(d,l),i=h[t],c=[],S=l&&l.lastChild;t&&(!S||S.name!="CloseTag"||W(d,S)!=t)&&c.push(i?i.closeCompletion:{label:"</"+t+">",type:"type",boost:2});let O=c.concat(((i==null?void 0:i.children)||(l?m:f)).map(u=>u.openCompletion));if(l&&(i!=null&&i.text.length)){let u=l.firstChild;u.to>s.pos-20&&!/\S/.test(s.state.sliceDoc(u.to,s.pos))&&(O=O.concat(i.text))}return{from:T,options:O,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}else return null}}const A=ce.define({name:"xml",parser:Re.configure({props:[fe.add({Element(e){let n=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(n?0:e.unit)},"OpenTag CloseTag SelfClosingTag"(e){return e.column(e.node.from)+e.unit}}),me.add({Element(e){let n=e.firstChild,o=e.lastChild;return!n||n.name!="OpenTag"?null:{from:n.to,to:o.name=="CloseTag"?o.from:e.to}}}),pe.add({"OpenTag CloseTag":e=>e.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/$/}});function Ie(e={}){let n=[A.data.of({autocomplete:Ge(e.elements||[],e.attributes||[])})];return e.autoCloseTags!==!1&&n.push(Ye),new ue(A,n)}function D(e,n,o=e.length){if(!n)return"";let r=n.firstChild,a=r&&r.getChild("TagName");return a?e.sliceString(a.from,Math.min(a.to,o)):""}const Ye=de.inputHandler.of((e,n,o,r,a)=>{if(e.composing||e.state.readOnly||n!=o||r!=">"&&r!="/"||!A.isActiveAt(e.state,n,-1))return!1;let m=a(),{state:f}=m,h=f.changeByRange(s=>{var y,d,$;let{head:p}=s,T=f.doc.sliceString(p-1,p)==r,l=J(f).resolveInner(p,-1),t;if(T&&r==">"&&l.name=="EndTag"){let i=l.parent;if(((d=(y=i.parent)===null||y===void 0?void 0:y.lastChild)===null||d===void 0?void 0:d.name)!="CloseTag"&&(t=D(f.doc,i.parent,p))){let c=p+(f.doc.sliceString(p,p+1)===">"?1:0),S=`</${t}>`;return{range:s,changes:{from:p,to:c,insert:S}}}}else if(T&&r=="/"&&l.name=="StartCloseTag"){let i=l.parent;if(l.from==p-2&&(($=i.lastChild)===null||$===void 0?void 0:$.name)!="CloseTag"&&(t=D(f.doc,i,p))){let c=p+(f.doc.sliceString(p,p+1)===">"?1:0),S=`${t}>`;return{range:ge.cursor(p+S.length,-1),changes:{from:p,to:c,insert:S}}}}return{range:s}});return h.changes.empty?!1:(e.dispatch([m,f.update(h,{userEvent:"input.complete",scrollIntoView:!0})]),!0)});var V={exports:{}},w={exports:{}},q;function Ze(){return q||(q=1,function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.ParsingError=void 0;class o extends Error{constructor(u,g){super(u),this.cause=g}}n.ParsingError=o;let r;function a(){return s(!1)||p()||$()||d()}function m(){return t(/\s*/),s(!0)||$()||y()||h(!1)}function f(){const O=h(!0),u=[];let g,_=m();for(;_;){if(_.node.type==="Element"){if(g)throw new Error("Found multiple root nodes");g=_.node}_.excluded||u.push(_.node),_=m()}if(!g)throw new o("Failed to parse XML","Root Element not found");if(r.xml.length!==0)throw new o("Failed to parse XML","Not Well-Formed XML");return{declaration:O?O.node:null,root:g,children:u}}function h(O){const u=t(O?/^<\?(xml)\s*/:/^<\?([\w-:.]+)\s*/);if(!u)return;const g={name:u[1],type:"ProcessingInstruction",attributes:{}};for(;!(i()||c("?>"));){const _=T();if(_)g.attributes[_.name]=_.value;else return}return t(/\?>/),{excluded:O?!1:r.options.filter(g)===!1,node:g}}function s(O){const u=t(/^<([^?!</>\s]+)\s*/);if(!u)return;const g={type:"Element",name:u[1],attributes:{},children:[]},_=O?!1:r.options.filter(g)===!1;for(;!(i()||c(">")||c("?>")||c("/>"));){const v=T();if(v)g.attributes[v.name]=v.value;else return}if(t(/^\s*\/>/))return g.children=null,{excluded:_,node:g};t(/\??>/);let P=a();for(;P;)P.excluded||g.children.push(P.node),P=a();if(r.options.strictMode){const v=`</${g.name}>`;if(r.xml.startsWith(v))r.xml=r.xml.slice(v.length);else throw new o("Failed to parse XML",`Closing tag not matching "${v}"`)}else t(/^<\/[\w-:.\u00C0-\u00FF]+\s*>/);return{excluded:_,node:g}}function y(){const O=t(/^<!DOCTYPE\s+\S+\s+SYSTEM[^>]*>/)||t(/^<!DOCTYPE\s+\S+\s+PUBLIC[^>]*>/)||t(/^<!DOCTYPE\s+\S+\s*\[[^\]]*]>/)||t(/^<!DOCTYPE\s+\S+\s*>/);if(O){const u={type:"DocumentType",content:O[0]};return{excluded:r.options.filter(u)===!1,node:u}}}function d(){if(r.xml.startsWith("<![CDATA[")){const O=r.xml.indexOf("]]>");if(O>-1){const u=O+3,g={type:"CDATA",content:r.xml.substring(0,u)};return r.xml=r.xml.slice(u),{excluded:r.options.filter(g)===!1,node:g}}}}function $(){const O=t(/^<!--[\s\S]*?-->/);if(O){const u={type:"Comment",content:O[0]};return{excluded:r.options.filter(u)===!1,node:u}}}function p(){const O=t(/^([^<]+)/);if(O){const u={type:"Text",content:O[1]};return{excluded:r.options.filter(u)===!1,node:u}}}function T(){const O=t(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);if(O)return{name:O[1].trim(),value:l(O[2].trim())}}function l(O){return O.replace(/^['"]|['"]$/g,"")}function t(O){const u=r.xml.match(O);if(u)return r.xml=r.xml.slice(u[0].length),u}function i(){return r.xml.length===0}function c(O){return r.xml.indexOf(O)===0}function S(O,u={}){O=O.trim();const g=u.filter||(()=>!0);return r={xml:O,options:Object.assign(Object.assign({},u),{filter:g,strictMode:u.strictMode===!0})},f()}e.exports=S,n.default=S}(w,w.exports)),w.exports}var z=V.exports,B;function Me(){return B||(B=1,function(e,n){var o=z&&z.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(n,"__esModule",{value:!0});const r=o(Ze());function a(l){if(!l.options.indentation&&!l.options.lineSeparator)return;l.content+=l.options.lineSeparator;let t;for(t=0;t<l.level;t++)l.content+=l.options.indentation}function m(l){l.content=l.content.replace(/ +$/,"");let t;for(t=0;t<l.level;t++)l.content+=l.options.indentation}function f(l,t){l.content+=t}function h(l,t,i){if(typeof l.content=="string")s(l.content,t,i);else if(l.type==="Element")d(l,t,i);else if(l.type==="ProcessingInstruction")p(l,t);else throw new Error("Unknown node type: "+l.type)}function s(l,t,i){if(!i){const c=l.trim();(t.options.lineSeparator||c.length===0)&&(l=c)}l.length>0&&(!i&&t.content.length>0&&a(t),f(t,l))}function y(l,t){const i="/"+l.join("/"),c=l[l.length-1];return t.includes(c)||t.includes(i)}function d(l,t,i){if(t.path.push(l.name),!i&&t.content.length>0&&a(t),f(t,"<"+l.name),$(t,l.attributes),l.children===null||t.options.forceSelfClosingEmptyTag&&l.children.length===0){const c=t.options.whiteSpaceAtEndOfSelfclosingTag?" />":"/>";f(t,c)}else if(l.children.length===0)f(t,"></"+l.name+">");else{const c=l.children;f(t,">"),t.level++;let S=l.attributes["xml:space"]==="preserve",O=!1;if(!S&&t.options.ignoredPaths&&(O=y(t.path,t.options.ignoredPaths),S=O),!S&&t.options.collapseContent){let u=!1,g=!1,_=!1;c.forEach(function(P,v){P.type==="Text"?(P.content.includes(`
`)?(g=!0,P.content=P.content.trim()):(v===0||v===c.length-1)&&!i&&P.content.trim().length===0&&(P.content=""),(P.content.trim().length>0||c.length===1)&&(u=!0)):P.type==="CDATA"?u=!0:_=!0}),u&&(!_||!g)&&(S=!0)}c.forEach(function(u){h(u,t,i||S)}),t.level--,!i&&!S&&a(t),O&&m(t),f(t,"</"+l.name+">")}t.path.pop()}function $(l,t){Object.keys(t).forEach(function(i){const c=t[i].replace(/"/g,"&quot;");f(l," "+i+'="'+c+'"')})}function p(l,t){t.content.length>0&&a(t),f(t,"<?"+l.name),$(t,l.attributes),f(t,"?>")}function T(l,t={}){t.indentation="indentation"in t?t.indentation:"    ",t.collapseContent=t.collapseContent===!0,t.lineSeparator="lineSeparator"in t?t.lineSeparator:`\r
`,t.whiteSpaceAtEndOfSelfclosingTag=t.whiteSpaceAtEndOfSelfclosingTag===!0,t.throwOnFailure=t.throwOnFailure!==!1;try{const i=(0,r.default)(l,{filter:t.filter,strictMode:t.strictMode}),c={content:"",level:0,options:t,path:[]};return i.declaration&&p(i.declaration,c),i.children.forEach(function(S){h(S,c,!1)}),t.lineSeparator?c.content.replace(/\r\n/g,`
`).replace(/\n/g,t.lineSeparator):c.content}catch(i){if(t.throwOnFailure)throw i;return l}}T.minify=(l,t={})=>T(l,Object.assign(Object.assign({},t),{indentation:"",lineSeparator:""})),e.exports=T,n.default=T}(V,V.exports)),V.exports}var Ue=Me();const G=K(Ue);function Fe(e,n={}){try{const{indent:o=2,...r}=n;return G(e.trim(),{collapseContent:!0,indentation:" ".repeat(o),lineSeparator:`
`,...r})}catch{return e}}function De(e){try{return G(e.trim(),{collapseContent:!0,indentation:"",lineSeparator:""})}catch{return e}}function qe(e){try{return G(e.trim()),!0}catch{return!1}}const ze={formatter:Fe,compactor:De,isValid:qe,extensions:[Ie()]},Be={class:"code-container"},Le={"w-full":"",flex:"","flex-col":"","items-center":"","gap-4":""},Je={flex:"","items-center":"","gap-4":""},He=ee({__name:"xmlEditor",setup(e){const n=te("<hello><world>foo</world><world>bar</world></hello>"),o=ne({collapseContent:!0,indent:2});return(r,a)=>{const m=ie,f=ae,h=H;return le(),re("div",Be,[x("div",Le,[x("div",Je,[E(m,{modelValue:b(o).collapseContent,"onUpdate:modelValue":a[0]||(a[0]=s=>b(o).collapseContent=s),size:"large","inactive-text":"折叠内容"},null,8,["modelValue"]),a[2]||(a[2]=x("span",null," 缩进大小 ",-1)),E(f,{modelValue:b(o).indent,"onUpdate:modelValue":a[1]||(a[1]=s=>b(o).indent=s),min:0,max:10,step:1,"step-strictly":!0},null,8,["modelValue"])]),E(h,{"w-full":"",plugin:b(ze),options:b(o),"input-default":b(n),"input-label":"你的XML内容","input-placeholder":"在这里粘贴XML内容...","output-label":"格式化后的XML内容","invalid-message":"请输入正确的XML内容"},null,8,["plugin","options","input-default"])])])}}}),ct=oe(He,[["__scopeId","data-v-fcfe48ed"]]);export{ct as default};
