import{_ as q}from"./shared/cssFormatter/xmlEditor-ZAcwIdMV.js";import{L as B,ae as G,j as L,B as J,k as H,o as K,c as ee,a as X,b as w,y as v,bA as te,b8 as ne,aO as re,aP as oe,ad as le}from"./vendor-1PeLGBgx.js";import{C as ae,E as z,s as Oe,t as C,L as ie,b as se,h as ce,j as ue,n as fe,ax as me,e as pe}from"./common-qko3TBVm.js";const Q=1,de=2,ye=3,ge=4,$e=5,Se=35,he=36,_e=37,Te=11,Ce=13;function Pe(e){return e==45||e==46||e==58||e>=65&&e<=90||e==95||e>=97&&e<=122||e>=161}function be(e){return e==9||e==10||e==13||e==32}let I=null,Y=null,Z=0;function N(e,n){let l=e.pos+n;if(Y==e&&Z==l)return I;for(;be(e.peek(n));)n++;let r="";for(;;){let a=e.peek(n);if(!Pe(a))break;r+=String.fromCharCode(a),n++}return Y=e,Z=l,I=r||null}function M(e,n){this.name=e,this.parent=n,this.hash=n?n.hash:0;for(let l=0;l<e.length;l++)this.hash+=(this.hash<<4)+e.charCodeAt(l)+(e.charCodeAt(l)<<8)}const ve=new ae({start:null,shift(e,n,l,r){return n==Q?new M(N(r,1)||"",e):e},reduce(e,n){return n==Te&&e?e.parent:e},reuse(e,n,l,r){let a=n.type.id;return a==Q||a==Ce?new M(N(r,1)||"",e):e},hash(e){return e?e.hash:0},strict:!1}),Ve=new z((e,n)=>{if(e.next==60){if(e.advance(),e.next==47){e.advance();let l=N(e,0);if(!l)return e.acceptToken($e);if(n.context&&l==n.context.name)return e.acceptToken(de);for(let r=n.context;r;r=r.parent)if(r.name==l)return e.acceptToken(ye,-2);e.acceptToken(ge)}else if(e.next!=33&&e.next!=63)return e.acceptToken(Q)}},{contextual:!0});function k(e,n){return new z(l=>{let r=0,a=n.charCodeAt(0);e:for(;!(l.next<0);l.advance(),r++)if(l.next==a){for(let u=1;u<n.length;u++)if(l.peek(u)!=n.charCodeAt(u))continue e;break}r&&l.acceptToken(e)})}const we=k(Se,"-->"),xe=k(he,"?>"),We=k(_e,"]]>"),Ee=Oe({Text:C.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":C.angleBracket,TagName:C.tagName,"MismatchedCloseTag/Tagname":[C.tagName,C.invalid],AttributeName:C.attributeName,AttributeValue:C.attributeValue,Is:C.definitionOperator,"EntityReference CharacterReference":C.character,Comment:C.blockComment,ProcessingInst:C.processingInstruction,DoctypeDecl:C.documentMeta,Cdata:C.special(C.string)}),Xe=ie.deserialize({version:14,states:",SOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DS'#DSOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C{'#C{O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C|'#C|O$dOrO,59^OOOP,59^,59^OOOS'#C}'#C}O$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6y-E6yOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6z-E6zOOOP1G.x1G.xOOOS-E6{-E6{OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'jO!bO,59eOOOO-E6w-E6wO'xOpO1G.uO'xOpO1G.uOOOP1G.u1G.uO(QOpO7+$fOOOP7+$f7+$fO(YO!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(eO#tO'#CnOOOO1G.q1G.qO(sOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO({O#tO,59YOOOO,59Y,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.t",stateData:")Z~OPQOSVOTWOVWOWWOXWOiXOxPO}TO!PUO~OuZOw]O~O^`Oy^O~OPQOQcOSVOTWOVWOWWOXWOxPO}TO!PUO~ORdO~P!SOseO|gO~OthO!OjO~O^lOy^O~OuZOwoO~O^qOy^O~O[vO`sOdwOy^O~ORyO~P!SO^{Oy^O~OseO|}O~OthO!O!PO~O^!QOy^O~O[!SOy^O~O[!VO`sOd!WOy^O~Oa!YOy^O~Oy^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oy^O~O[!_Oy^O~O[!aOy^O~O[!cO`sOd!dOy^O~O[!cO`sOd!dO~Oa!eOy^O~Oy^Oz!gO~Oy^O[ma`madma~O[!jOy^O~O[!kOy^O~O[!lO`sOd!mO~OW!pOX!pOz!rO{!pO~O[!sOy^O~OW!pOX!pOz!vO{!pO~O",goto:"%[wPPPPPPPPPPxxP!OP!UPP!_!iP!oxxxP!u!{#R$Z$j$p$v$|PPPP%SXWORYbXRORYb_t`qru!T!U!bQ!h!YS!o!e!fR!t!nQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!i!nQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!i!]R!n!eQu`S!UqrU![u!U!bR!b!TQ!q!gR!u!qQbRRxbQfTR|fQiUR!OiSXOYTaRb",nodeNames:"⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",maxTerm:47,context:ve,nodeProps:[["closedBy",1,"SelfCloseEndTag EndTag",13,"CloseTag MissingCloseTag"],["openedBy",12,"StartTag StartCloseTag",19,"OpenTag",20,"StartTag"]],propSources:[Ee],skippedNodes:[0],repeatNodeCount:8,tokenData:"Jy~R!XOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs'ssv$nvw(Zw}$n}!O,^!O!P$n!P!Q.m!Q![$n![!]0V!]!^$n!^!_3h!_!`El!`!aF_!a!bGQ!b!c$n!c!}0V!}#P$n#P#QHj#Q#R$n#R#S0V#S#T$n#T#o0V#o%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U$n4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$nX$uWVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nP%dTVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_P%vP;=`<%l%_W&OT{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yW&bP;=`<%l%yX&hP;=`<%l$n_&t_VP{WyUOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ'zTzYVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_~(^ast)c![!]*g!c!}*g#R#S*g#T#o*g%W%o*g%p&a*g&b1p*g4U4d*g4e$IS*g$I`$Ib*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~)fQ!Q![)l#l#m)z~)oQ!Q![)l!]!^)u~)zOX~~)}R!Q![*W!c!i*W#T#Z*W~*ZS!Q![*W!]!^)u!c!i*W#T#Z*W~*jg}!O*g!O!P*g!Q![*g![!]*g!]!^,R!c!}*g#R#S*g#T#o*g$}%O*g%W%o*g%p&a*g&b1p*g1p4U*g4U4d*g4e$IS*g$I`$Ib*g$Je$Jg*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~,WOW~~,ZP;=`<%l*gZ,eYVP{WOr$nrs%_sv$nw}$n}!O-T!O!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ-[YVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a-z!a;'S$n;'S;=`&e<%lO$nZ.TW|QVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n].tYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a/d!a;'S$n;'S;=`&e<%lO$n]/mWdSVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_0b!O`S^QVP{WOr$nrs%_sv$nw}$n}!O0V!O!P0V!P!Q$n!Q![0V![!]0V!]!^$n!^!_%y!_!c$n!c!}0V!}#R$n#R#S0V#S#T$n#T#o0V#o$}$n$}%O0V%O%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U0V4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Je$n$Je$Jg0V$Jg$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$n_3eP;=`<%l0VX3mW{WOq%yqr4Vsv%yw!a%y!a!bEU!b;'S%y;'S;=`&_<%lO%yX4[]{WOr%ysv%yw}%y}!O5T!O!f%y!f!g6V!g!}%y!}#O;f#O#W%y#W#XAr#X;'S%y;'S;=`&_<%lO%yX5YV{WOr%ysv%yw}%y}!O5o!O;'S%y;'S;=`&_<%lO%yX5vT}P{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX6[V{WOr%ysv%yw!q%y!q!r6q!r;'S%y;'S;=`&_<%lO%yX6vV{WOr%ysv%yw!e%y!e!f7]!f;'S%y;'S;=`&_<%lO%yX7bV{WOr%ysv%yw!v%y!v!w7w!w;'S%y;'S;=`&_<%lO%yX7|V{WOr%ysv%yw!{%y!{!|8c!|;'S%y;'S;=`&_<%lO%yX8hV{WOr%ysv%yw!r%y!r!s8}!s;'S%y;'S;=`&_<%lO%yX9SV{WOr%ysv%yw!g%y!g!h9i!h;'S%y;'S;=`&_<%lO%yX9nX{WOr9irs:Zsv9ivw:Zw!`9i!`!a:x!a;'S9i;'S;=`;`<%lO9iP:^TO!`:Z!`!a:m!a;'S:Z;'S;=`:r<%lO:ZP:rOiPP:uP;=`<%l:ZX;PTiP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX;cP;=`<%l9iX;kX{WOr%ysv%yw!e%y!e!f<W!f#V%y#V#W?f#W;'S%y;'S;=`&_<%lO%yX<]V{WOr%ysv%yw!f%y!f!g<r!g;'S%y;'S;=`&_<%lO%yX<wV{WOr%ysv%yw!c%y!c!d=^!d;'S%y;'S;=`&_<%lO%yX=cV{WOr%ysv%yw!v%y!v!w=x!w;'S%y;'S;=`&_<%lO%yX=}V{WOr%ysv%yw!c%y!c!d>d!d;'S%y;'S;=`&_<%lO%yX>iV{WOr%ysv%yw!}%y!}#O?O#O;'S%y;'S;=`&_<%lO%yX?VT{WxPOr%ysv%yw;'S%y;'S;=`&_<%lO%yX?kV{WOr%ysv%yw#W%y#W#X@Q#X;'S%y;'S;=`&_<%lO%yX@VV{WOr%ysv%yw#T%y#T#U@l#U;'S%y;'S;=`&_<%lO%yX@qV{WOr%ysv%yw#h%y#h#iAW#i;'S%y;'S;=`&_<%lO%yXA]V{WOr%ysv%yw#T%y#T#U>d#U;'S%y;'S;=`&_<%lO%yXAwV{WOr%ysv%yw#c%y#c#dB^#d;'S%y;'S;=`&_<%lO%yXBcV{WOr%ysv%yw#V%y#V#WBx#W;'S%y;'S;=`&_<%lO%yXB}V{WOr%ysv%yw#h%y#h#iCd#i;'S%y;'S;=`&_<%lO%yXCiV{WOr%ysv%yw#m%y#m#nDO#n;'S%y;'S;=`&_<%lO%yXDTV{WOr%ysv%yw#d%y#d#eDj#e;'S%y;'S;=`&_<%lO%yXDoV{WOr%ysv%yw#X%y#X#Y9i#Y;'S%y;'S;=`&_<%lO%yXE]T!PP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yZEuWaQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_FhW[UVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZGXYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aGw!a;'S$n;'S;=`&e<%lO$nZHQW!OQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZHqYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_#P$n#P#QIa#Q;'S$n;'S;=`&e<%lO$nZIhYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aJW!a;'S$n;'S;=`&e<%lO$nZJaWwQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n",tokenizers:[Ve,we,xe,We,0,1,2,3],topRules:{Document:[0,6]},tokenPrec:0});function V(e,n){let l=n&&n.getChild("TagName");return l?e.sliceString(l.from,l.to):""}function x(e,n){let l=n&&n.firstChild;return!l||l.name!="OpenTag"?"":V(e,l)}function Qe(e,n,l){let r=n&&n.getChildren("Attribute").find(u=>u.from<=l&&u.to>=l),a=r&&r.getChild("AttributeName");return a?e.sliceString(a.from,a.to):""}function W(e){for(let n=e&&e.parent;n;n=n.parent)if(n.name=="Element")return n;return null}function Ne(e,n){var l;let r=pe(e).resolveInner(n,-1),a=null;for(let u=r;!a&&u.parent;u=u.parent)(u.name=="OpenTag"||u.name=="CloseTag"||u.name=="SelfClosingTag"||u.name=="MismatchedCloseTag")&&(a=u);if(a&&(a.to>n||a.lastChild.type.isError)){let u=a.parent;if(r.name=="TagName")return a.name=="CloseTag"||a.name=="MismatchedCloseTag"?{type:"closeTag",from:r.from,context:u}:{type:"openTag",from:r.from,context:W(u)};if(r.name=="AttributeName")return{type:"attrName",from:r.from,context:a};if(r.name=="AttributeValue")return{type:"attrValue",from:r.from,context:a};let m=r==a||r.name=="Attribute"?r.childBefore(n):r;return(m==null?void 0:m.name)=="StartTag"?{type:"openTag",from:n,context:W(u)}:(m==null?void 0:m.name)=="StartCloseTag"&&m.to<=n?{type:"closeTag",from:n,context:u}:(m==null?void 0:m.name)=="Is"?{type:"attrValue",from:n,context:a}:m?{type:"attrName",from:n,context:a}:null}else if(r.name=="StartCloseTag")return{type:"closeTag",from:n,context:r.parent};for(;r.parent&&r.to==n&&!(!((l=r.lastChild)===null||l===void 0)&&l.type.isError);)r=r.parent;return r.name=="Element"||r.name=="Text"||r.name=="Document"?{type:"tag",from:n,context:r.name=="Element"?r:W(r)}:null}class je{constructor(n,l,r){this.attrs=l,this.attrValues=r,this.children=[],this.name=n.name,this.completion=Object.assign(Object.assign({type:"type"},n.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=n.textContent?n.textContent.map(a=>({label:a,type:"text"})):[]}}const E=/^[:\-\.\w\u00b7-\uffff]*$/;function D(e){return Object.assign(Object.assign({type:"property"},e.completion||{}),{label:e.name})}function F(e){return typeof e=="string"?{label:`"${e}"`,type:"constant"}:/^"/.test(e.label)?e:Object.assign(Object.assign({},e),{label:`"${e.label}"`})}function Re(e,n){let l=[],r=[],a=Object.create(null);for(let c of n){let g=D(c);l.push(g),c.global&&r.push(g),c.values&&(a[c.name]=c.values.map(F))}let u=[],m=[],S=Object.create(null);for(let c of e){let g=r,d=a;c.attributes&&(g=g.concat(c.attributes.map(y=>typeof y=="string"?l.find(h=>h.label==y)||{label:y,type:"property"}:(y.values&&(d==a&&(d=Object.create(d)),d[y.name]=y.values.map(F)),D(y)))));let $=new je(c,g,d);S[$.name]=$,u.push($),c.top&&m.push($)}m.length||(m=u);for(let c=0;c<u.length;c++){let g=e[c],d=u[c];if(g.children)for(let $ of g.children)S[$]&&d.children.push(S[$]);else d.children=u}return c=>{var g;let{doc:d}=c.state,$=Ne(c.state,c.pos);if(!$||$.type=="tag"&&!c.explicit)return null;let{type:y,from:h,context:o}=$;if(y=="openTag"){let t=m,i=x(d,o);if(i){let f=S[i];t=(f==null?void 0:f.children)||u}return{from:h,options:t.map(f=>f.completion),validFor:E}}else if(y=="closeTag"){let t=x(d,o);return t?{from:h,to:c.pos+(d.sliceString(c.pos,c.pos+1)==">"?1:0),options:[((g=S[t])===null||g===void 0?void 0:g.closeNameCompletion)||{label:t+">",type:"type"}],validFor:E}:null}else if(y=="attrName"){let t=S[V(d,o)];return{from:h,options:(t==null?void 0:t.attrs)||r,validFor:E}}else if(y=="attrValue"){let t=Qe(d,o,h);if(!t)return null;let i=S[V(d,o)],f=((i==null?void 0:i.attrValues)||a)[t];return!f||!f.length?null:{from:h,to:c.pos+(d.sliceString(c.pos,c.pos+1)=='"'?1:0),options:f,validFor:/^"[^"]*"?$/}}else if(y=="tag"){let t=x(d,o),i=S[t],f=[],T=o&&o.lastChild;t&&(!T||T.name!="CloseTag"||V(d,T)!=t)&&f.push(i?i.closeCompletion:{label:"</"+t+">",type:"type",boost:2});let O=f.concat(((i==null?void 0:i.children)||(o?u:m)).map(s=>s.openCompletion));if(o&&(i!=null&&i.text.length)){let s=o.firstChild;s.to>c.pos-20&&!/\S/.test(c.state.sliceDoc(s.to,c.pos))&&(O=O.concat(i.text))}return{from:h,options:O,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}else return null}}const U=ce.define({name:"xml",parser:Xe.configure({props:[ue.add({Element(e){let n=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(n?0:e.unit)},"OpenTag CloseTag SelfClosingTag"(e){return e.column(e.node.from)+e.unit}}),fe.add({Element(e){let n=e.firstChild,l=e.lastChild;return!n||n.name!="OpenTag"?null:{from:n.to,to:l.name=="CloseTag"?l.from:e.to}}}),me.add({"OpenTag CloseTag":e=>e.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/$/}});function ke(e={}){return new se(U,U.data.of({autocomplete:Re(e.elements||[],e.attributes||[])}))}var j={exports:{}},R={exports:{}};(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.ParsingError=void 0;class l extends Error{constructor(s,p){super(s),this.cause=p}}n.ParsingError=l;let r;function a(){return c(!1)||y()||$()||d()}function u(){return t(/\s*/),c(!0)||$()||g()||S(!1)}function m(){const O=S(!0),s=[];let p,_=u();for(;_;){if(_.node.type==="Element"){if(p)throw new Error("Found multiple root nodes");p=_.node}_.excluded||s.push(_.node),_=u()}if(!p)throw new l("Failed to parse XML","Root Element not found");if(r.xml.length!==0)throw new l("Failed to parse XML","Not Well-Formed XML");return{declaration:O?O.node:null,root:p,children:s}}function S(O){const s=t(O?/^<\?(xml)\s*/:/^<\?([\w-:.]+)\s*/);if(!s)return;const p={name:s[1],type:"ProcessingInstruction",attributes:{}};for(;!(i()||f("?>"));){const _=h();if(_)p.attributes[_.name]=_.value;else return}return t(/\?>/),{excluded:O?!1:r.options.filter(p)===!1,node:p}}function c(O){const s=t(/^<([^?!</>\s]+)\s*/);if(!s)return;const p={type:"Element",name:s[1],attributes:{},children:[]},_=O?!1:r.options.filter(p)===!1;for(;!(i()||f(">")||f("?>")||f("/>"));){const b=h();if(b)p.attributes[b.name]=b.value;else return}if(t(/^\s*\/>/))return p.children=null,{excluded:_,node:p};t(/\??>/);let P=a();for(;P;)P.excluded||p.children.push(P.node),P=a();if(r.options.strictMode){const b=`</${p.name}>`;if(r.xml.startsWith(b))r.xml=r.xml.slice(b.length);else throw new l("Failed to parse XML",`Closing tag not matching "${b}"`)}else t(/^<\/\s*[\w-:.\u00C0-\u00FF]+>/);return{excluded:_,node:p}}function g(){const O=t(/^<!DOCTYPE\s+\S+\s+SYSTEM[^>]*>/)||t(/^<!DOCTYPE\s+\S+\s+PUBLIC[^>]*>/)||t(/^<!DOCTYPE\s+\S+\s*\[[^\]]*]>/)||t(/^<!DOCTYPE\s+\S+\s*>/);if(O){const s={type:"DocumentType",content:O[0]};return{excluded:r.options.filter(s)===!1,node:s}}}function d(){if(r.xml.startsWith("<![CDATA[")){const O=r.xml.indexOf("]]>");if(O>-1){const s=O+3,p={type:"CDATA",content:r.xml.substring(0,s)};return r.xml=r.xml.slice(s),{excluded:r.options.filter(p)===!1,node:p}}}}function $(){const O=t(/^<!--[\s\S]*?-->/);if(O){const s={type:"Comment",content:O[0]};return{excluded:r.options.filter(s)===!1,node:s}}}function y(){const O=t(/^([^<]+)/);if(O){const s={type:"Text",content:O[1]};return{excluded:r.options.filter(s)===!1,node:s}}}function h(){const O=t(/([^=]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)\s*/);if(O)return{name:O[1].trim(),value:o(O[2].trim())}}function o(O){return O.replace(/^['"]|['"]$/g,"")}function t(O){const s=r.xml.match(O);if(s)return r.xml=r.xml.slice(s[0].length),s}function i(){return r.xml.length===0}function f(O){return r.xml.indexOf(O)===0}function T(O,s={}){O=O.trim();const p=s.filter||(()=>!0);return r={xml:O,options:Object.assign(Object.assign({},s),{filter:p,strictMode:s.strictMode===!0})},m()}e.exports=T,n.default=T})(R,R.exports);var Ae=R.exports;(function(e,n){var l=G&&G.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(n,"__esModule",{value:!0});const r=l(Ae);function a(o){if(!o.options.indentation&&!o.options.lineSeparator)return;o.content+=o.options.lineSeparator;let t;for(t=0;t<o.level;t++)o.content+=o.options.indentation}function u(o){o.content=o.content.replace(/ +$/,"");let t;for(t=0;t<o.level;t++)o.content+=o.options.indentation}function m(o,t){o.content+=t}function S(o,t,i){if(typeof o.content=="string")c(o.content,t,i);else if(o.type==="Element")d(o,t,i);else if(o.type==="ProcessingInstruction")y(o,t);else throw new Error("Unknown node type: "+o.type)}function c(o,t,i){if(!i){const f=o.trim();(t.options.lineSeparator||f.length===0)&&(o=f)}o.length>0&&(!i&&t.content.length>0&&a(t),m(t,o))}function g(o,t){const i="/"+o.join("/"),f=o[o.length-1];return t.includes(f)||t.includes(i)}function d(o,t,i){if(t.path.push(o.name),!i&&t.content.length>0&&a(t),m(t,"<"+o.name),$(t,o.attributes),o.children===null||t.options.forceSelfClosingEmptyTag&&o.children.length===0){const f=t.options.whiteSpaceAtEndOfSelfclosingTag?" />":"/>";m(t,f)}else if(o.children.length===0)m(t,"></"+o.name+">");else{const f=o.children;m(t,">"),t.level++;let T=o.attributes["xml:space"]==="preserve",O=!1;if(!T&&t.options.ignoredPaths&&(O=g(t.path,t.options.ignoredPaths),T=O),!T&&t.options.collapseContent){let s=!1,p=!1,_=!1;f.forEach(function(P,b){P.type==="Text"?(P.content.includes(`
`)?(p=!0,P.content=P.content.trim()):(b===0||b===f.length-1)&&!i&&P.content.trim().length===0&&(P.content=""),P.content.trim().length>0&&(s=!0)):P.type==="CDATA"?s=!0:_=!0}),s&&(!_||!p)&&(T=!0)}f.forEach(function(s){S(s,t,i||T)}),t.level--,!i&&!T&&a(t),O&&u(t),m(t,"</"+o.name+">")}t.path.pop()}function $(o,t){Object.keys(t).forEach(function(i){const f=t[i].replace(/"/g,"&quot;");m(o," "+i+'="'+f+'"')})}function y(o,t){t.content.length>0&&a(t),m(t,"<?"+o.name),$(t,o.attributes),m(t,"?>")}function h(o,t={}){t.indentation="indentation"in t?t.indentation:"    ",t.collapseContent=t.collapseContent===!0,t.lineSeparator="lineSeparator"in t?t.lineSeparator:`\r
`,t.whiteSpaceAtEndOfSelfclosingTag=t.whiteSpaceAtEndOfSelfclosingTag===!0,t.throwOnFailure=t.throwOnFailure!==!1;try{const i=(0,r.default)(o,{filter:t.filter,strictMode:t.strictMode}),f={content:"",level:0,options:t,path:[]};return i.declaration&&y(i.declaration,f),i.children.forEach(function(T){S(T,f,!1)}),t.lineSeparator?f.content.replace(/\r\n/g,`
`).replace(/\n/g,t.lineSeparator):f.content}catch(i){if(t.throwOnFailure)throw i;return o}}h.minify=(o,t={})=>h(o,Object.assign(Object.assign({},t),{indentation:"",lineSeparator:""})),e.exports=h,n.default=h})(j,j.exports);var Ge=j.exports;const A=B(Ge);function Ie(e,n={}){try{const{indent:l=2,...r}=n;return A(e.trim(),{collapseContent:!0,indentation:" ".repeat(l),lineSeparator:`
`,...r})}catch{return e}}function Ye(e){try{return A(e.trim(),{collapseContent:!0,indentation:"",lineSeparator:""})}catch{return e}}function Ze(e){try{return A(e.trim()),!0}catch{return!1}}const Me={formatter:Ie,compactor:Ye,isValid:Ze,extensions:[ke()]},De=e=>(re("data-v-994ce4d0"),e=e(),oe(),e),Fe={class:"code-container"},Ue={flex:"","gap-4":"","flex-col":"","w-full":"","items-center":""},ze={flex:"","gap-4":"","items-center":""},qe=De(()=>X("span",null," 缩进大小 ",-1)),Be=L({__name:"xmlEditor",setup(e){const n=J("<hello><world>foo</world><world>bar</world></hello>"),l=H({collapseContent:!0,indent:2});return(r,a)=>{const u=te,m=ne,S=q;return K(),ee("div",Fe,[X("div",Ue,[X("div",ze,[w(u,{modelValue:v(l).collapseContent,"onUpdate:modelValue":a[0]||(a[0]=c=>v(l).collapseContent=c),size:"large","inactive-text":"折叠内容"},null,8,["modelValue"]),qe,w(m,{modelValue:v(l).indent,"onUpdate:modelValue":a[1]||(a[1]=c=>v(l).indent=c),min:0,max:10,step:1,"step-strictly":!0},null,8,["modelValue"])]),w(S,{"w-full":"",plugin:v(Me),options:v(l),"input-default":v(n),"input-label":"你的XML内容","input-placeholder":"在这里粘贴XML内容...","output-label":"格式化后的XML内容","invalid-message":"请输入正确的XML内容"},null,8,["plugin","options","input-default"])])])}}}),Ke=le(Be,[["__scopeId","data-v-994ce4d0"]]);export{Ke as default};
