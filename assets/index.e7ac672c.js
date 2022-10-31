import{r as I,ad as Je,af as Ae,d as ce,f as Y,a as f,aa as ne,g as ge,h as D,aM as We,p as Z,n as B,D as De,m as he,P as Fe,aH as Wt,j as Dt,b4 as Ft,aB as st,aS as Ct,aD as Ht,aU as jt,bW as zt,aE as Gt,bX as $t,au as dt,bE as Be,b6 as ft,y as ue,x as Vt,A as Ut,av as Pt,a$ as qt,z as Xt,H as Yt,bH as Zt,bh as Ze,e as Jt,ag as Qt,bb as bt,bd as ea}from"./index.0076ae71.js";import"./index.d036846f.js";import{E as ta,M as aa,_ as na,D as ia}from"./Menu.a10914bf.js";import{u as $}from"./useState.6919aa45.js";import{u as ra}from"./useRefs.7d2cdf6b.js";import{h as la}from"./hasIn.92743382.js";import{i as oa}from"./isMobile.47354675.js";function ua(r){var e=I(),t=I(!1);function n(){for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];t.value||(Ae.cancel(e.value),e.value=Ae(function(){r.apply(void 0,i)}))}return Je(function(){t.value=!0,Ae.cancel(e.value)}),n}function ca(r){var e=I([]),t=I(typeof r=="function"?r():r),n=ua(function(){var i=t.value;e.value.forEach(function(l){i=l(i)}),e.value=[],t.value=i});function a(i){e.value.push(i),n()}return[t,a]}const va=ce({name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup:function(e,t){var n=t.expose,a=t.attrs,i=I();function l(v){var s;!((s=e.tab)===null||s===void 0)&&s.disabled||e.onClick(v)}n({domRef:i});function o(v){var s;v.preventDefault(),v.stopPropagation(),e.editable.onEdit("remove",{key:(s=e.tab)===null||s===void 0?void 0:s.key,event:v})}var u=Y(function(){var v;return e.editable&&e.closable!==!1&&!(!((v=e.tab)===null||v===void 0)&&v.disabled)});return function(){var v,s,b=e.prefixCls,g=e.id,O=e.active,P=e.tab,F=P.key,_=P.tab,j=P.disabled,x=P.closeIcon,d=e.renderWrapper,A=e.removeAriaLabel,z=e.editable,M=e.onFocus,k="".concat(b,"-tab"),L=f("div",{key:F,ref:i,class:ge(k,(v={},D(v,"".concat(k,"-with-remove"),u.value),D(v,"".concat(k,"-active"),O),D(v,"".concat(k,"-disabled"),j),v)),style:a.style,onClick:l},[f("div",{role:"tab","aria-selected":O,id:g&&"".concat(g,"-tab-").concat(F),class:"".concat(k,"-btn"),"aria-controls":g&&"".concat(g,"-panel-").concat(F),"aria-disabled":j,tabindex:j?null:0,onClick:function(K){K.stopPropagation(),l(K)},onKeydown:function(K){[ne.SPACE,ne.ENTER].includes(K.which)&&(K.preventDefault(),l(K))},onFocus:M},[typeof _=="function"?_():_]),u.value&&f("button",{type:"button","aria-label":A||"remove",tabindex:0,class:"".concat(k,"-remove"),onClick:function(K){K.stopPropagation(),o(K)}},[(x==null?void 0:x())||((s=z.removeIcon)===null||s===void 0?void 0:s.call(z))||"\xD7"])]);return d?d(L):L}}});var yt={width:0,height:0,left:0,top:0};function sa(r,e){var t=I(new Map);return We(function(){for(var n,a,i=new Map,l=r.value,o=e.value.get((n=l[0])===null||n===void 0?void 0:n.key)||yt,u=o.left+o.width,v=0;v<l.length;v+=1){var s=l[v].key,b=e.value.get(s);b||(b=e.value.get((a=l[v-1])===null||a===void 0?void 0:a.key)||yt);var g=i.get(s)||Z({},b);g.right=u-g.left-g.width,i.set(s,g)}t.value=new Map(i)}),t}const It=ce({name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup:function(e,t){var n=t.expose,a=t.attrs,i=I();return n({domRef:i}),function(){var l=e.prefixCls,o=e.editable,u=e.locale;return!o||o.showAdd===!1?null:f("button",{ref:i,type:"button",class:"".concat(l,"-nav-add"),style:a.style,"aria-label":(u==null?void 0:u.addAriaLabel)||"Add tab",onClick:function(s){o.onEdit("add",{event:s})}},[o.addIcon?o.addIcon():"+"])}}});var da={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:Fe.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function}};const fa=ce({name:"OperationNode",inheritAttrs:!1,props:da,emits:["tabClick"],slots:["moreIcon"],setup:function(e,t){var n=t.attrs,a=t.slots,i=$(!1),l=B(i,2),o=l[0],u=l[1],v=$(null),s=B(v,2),b=s[0],g=s[1],O=function(d){for(var A=e.tabs.filter(function(V){return!V.disabled}),z=A.findIndex(function(V){return V.key===b.value})||0,M=A.length,k=0;k<M;k+=1){z=(z+d+M)%M;var L=A[z];if(!L.disabled){g(L.key);return}}},P=function(d){var A=d.which;if(!o.value){[ne.DOWN,ne.SPACE,ne.ENTER].includes(A)&&(u(!0),d.preventDefault());return}switch(A){case ne.UP:O(-1),d.preventDefault();break;case ne.DOWN:O(1),d.preventDefault();break;case ne.ESC:u(!1);break;case ne.SPACE:case ne.ENTER:b.value!==null&&e.onTabClick(b.value,d);break}},F=Y(function(){return"".concat(e.id,"-more-popup")}),_=Y(function(){return b.value!==null?"".concat(F.value,"-").concat(b.value):null}),j=function(d,A){d.preventDefault(),d.stopPropagation(),e.editable.onEdit("remove",{key:A,event:d})};return De(function(){he(b,function(){var x=document.getElementById(_.value);x&&x.scrollIntoView&&x.scrollIntoView(!1)},{flush:"post",immediate:!0})}),he(o,function(){o.value||g(null)}),function(){var x,d=e.prefixCls,A=e.id,z=e.tabs,M=e.locale,k=e.mobile,L=e.moreIcon,V=L===void 0?((x=a.moreIcon)===null||x===void 0?void 0:x.call(a))||f(ta,null,null):L,K=e.moreTransitionName,H=e.editable,ve=e.tabBarGutter,p=e.rtl,c=e.onTabClick,y="".concat(d,"-dropdown"),T=M==null?void 0:M.dropdownAriaLabel,W=D({},p?"marginRight":"marginLeft",ve);z.length||(W.visibility="hidden",W.order=1);var R=ge(D({},"".concat(y,"-rtl"),p)),E=k?null:f(ia,{prefixCls:y,trigger:["hover"],visible:o.value,transitionName:K,onVisibleChange:u,overlayClassName:R,mouseEnterDelay:.1,mouseLeaveDelay:.1},{overlay:function(){return f(aa,{onClick:function(w){var U=w.key,ie=w.domEvent;c(U,ie),u(!1)},id:F.value,tabindex:-1,role:"listbox","aria-activedescendant":_.value,selectedKeys:[b.value],"aria-label":T!==void 0?T:"expanded dropdown"},{default:function(){return[z.map(function(w){var U,ie,Te=H&&w.closable!==!1&&!w.disabled;return f(na,{key:w.key,id:"".concat(F.value,"-").concat(w.key),role:"option","aria-controls":A&&"".concat(A,"-panel-").concat(w.key),disabled:w.disabled},{default:function(){return[f("span",null,[typeof w.tab=="function"?w.tab():w.tab]),Te&&f("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:"".concat(y,"-menu-item-remove"),onClick:function(se){se.stopPropagation(),j(se,w.key)}},[((U=w.closeIcon)===null||U===void 0?void 0:U.call(w))||((ie=H.removeIcon)===null||ie===void 0?void 0:ie.call(H))||"\xD7"])]}})})]}})},default:function(){return f("button",{type:"button",class:"".concat(d,"-nav-more"),style:W,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":F.value,id:"".concat(A,"-more"),"aria-expanded":o.value,onKeydown:P},[V])}});return f("div",{class:ge("".concat(d,"-nav-operations"),n.class),style:n.style},[E,f(It,{prefixCls:d,locale:M,editable:H},null)])}}});var _t=Symbol("tabsContextKey"),kt=function(e){Wt(_t,e)},Et=function(){return Dt(_t,{tabs:I([]),prefixCls:I()})};ce({name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup:function(e,t){var n=t.slots;return kt(Ft(e)),function(){var a;return(a=n.default)===null||a===void 0?void 0:a.call(n)}}});var ba=.1,mt=.01,Ke=20,ht=Math.pow(.995,Ke);function ya(r,e){var t=$(),n=B(t,2),a=n[0],i=n[1],l=$(0),o=B(l,2),u=o[0],v=o[1],s=$(0),b=B(s,2),g=b[0],O=b[1],P=$(),F=B(P,2),_=F[0],j=F[1],x=I();function d(p){var c=p.touches[0],y=c.screenX,T=c.screenY;i({x:y,y:T}),clearInterval(x.value)}function A(p){if(!!a.value){p.preventDefault();var c=p.touches[0],y=c.screenX,T=c.screenY,W=y-a.value.x,R=T-a.value.y;e(W,R),i({x:y,y:T});var E=Date.now();O(E-u.value),v(E),j({x:W,y:R})}}function z(){if(!!a.value){var p=_.value;if(i(null),j(null),p){var c=p.x/g.value,y=p.y/g.value,T=Math.abs(c),W=Math.abs(y);if(Math.max(T,W)<ba)return;var R=c,E=y;x.value=setInterval(function(){if(Math.abs(R)<mt&&Math.abs(E)<mt){clearInterval(x.value);return}R*=ht,E*=ht,e(R*Ke,E*Ke)},Ke)}}}var M=I();function k(p){var c=p.deltaX,y=p.deltaY,T=0,W=Math.abs(c),R=Math.abs(y);W===R?T=M.value==="x"?c:y:W>R?(T=c,M.value="x"):(T=y,M.value="y"),e(-T,-T)&&p.preventDefault()}var L=I({onTouchStart:d,onTouchMove:A,onTouchEnd:z,onWheel:k});function V(p){L.value.onTouchStart(p)}function K(p){L.value.onTouchMove(p)}function H(p){L.value.onTouchEnd(p)}function ve(p){L.value.onWheel(p)}De(function(){var p,c;document.addEventListener("touchmove",K,{passive:!1}),document.addEventListener("touchend",H,{passive:!1}),(p=r.value)===null||p===void 0||p.addEventListener("touchstart",V,{passive:!1}),(c=r.value)===null||c===void 0||c.addEventListener("wheel",ve,{passive:!1})}),Je(function(){document.removeEventListener("touchmove",K),document.removeEventListener("touchend",H)})}function gt(r,e){var t=I(r);function n(a){var i=typeof a=="function"?a(t.value):a;i!==t.value&&e(i,t.value),t.value=i}return[t,n]}function ma(r,e,t,n){if(!st(r))return r;e=Ct(e,r);for(var a=-1,i=e.length,l=i-1,o=r;o!=null&&++a<i;){var u=Ht(e[a]),v=t;if(u==="__proto__"||u==="constructor"||u==="prototype")return r;if(a!=l){var s=o[u];v=n?n(s,u,o):void 0,v===void 0&&(v=st(s)?s:jt(e[a+1])?[]:{})}zt(o,u,v),o=o[u]}return r}function ha(r,e,t){for(var n=-1,a=e.length,i={};++n<a;){var l=e[n],o=Gt(r,l);t(o,l)&&ma(i,Ct(l,r),o)}return i}function ga(r,e){return ha(r,e,function(t,n){return la(r,n)})}var pa=$t(function(r,e){return r==null?{}:ga(r,e)});const Bt=pa;var pt={width:0,height:0,left:0,top:0,right:0},Sa=function(){return{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:{type:Object,default:void 0},editable:{type:Object},moreIcon:Fe.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:{type:Object,default:void 0},onTabClick:{type:Function},onTabScroll:{type:Function}}};const St=ce({name:"TabNavList",inheritAttrs:!1,props:Sa(),slots:["moreIcon","leftExtra","rightExtra","tabBarExtraContent"],emits:["tabClick","tabScroll"],setup:function(e,t){var n=t.attrs,a=t.slots,i=Et(),l=i.tabs,o=i.prefixCls,u=I(),v=I(),s=I(),b=I(),g=ra(),O=B(g,2),P=O[0],F=O[1],_=Y(function(){return e.tabPosition==="top"||e.tabPosition==="bottom"}),j=gt(0,function(h,S){_.value&&e.onTabScroll&&e.onTabScroll({direction:h>S?"left":"right"})}),x=B(j,2),d=x[0],A=x[1],z=gt(0,function(h,S){!_.value&&e.onTabScroll&&e.onTabScroll({direction:h>S?"top":"bottom"})}),M=B(z,2),k=M[0],L=M[1],V=$(0),K=B(V,2),H=K[0],ve=K[1],p=$(0),c=B(p,2),y=c[0],T=c[1],W=$(null),R=B(W,2),E=R[0],xe=R[1],pe=$(null),w=B(pe,2),U=w[0],ie=w[1],Te=$(0),Se=B(Te,2),Ce=Se[0],se=Se[1],we=$(0),J=B(we,2),He=J[0],Re=J[1],Ne=ca(new Map),Oe=B(Ne,2),je=Oe[0],Pe=Oe[1],Me=sa(l,je),wt=Y(function(){return"".concat(o.value,"-nav-operations-hidden")}),Ie=I(0),_e=I(0);We(function(){_.value?e.rtl?(Ie.value=0,_e.value=Math.max(0,H.value-E.value)):(Ie.value=Math.min(0,E.value-H.value),_e.value=0):(Ie.value=Math.min(0,U.value-y.value),_e.value=0)});var ze=function(S){return S<Ie.value?Ie.value:S>_e.value?_e.value:S},et=I(),Rt=$(),tt=B(Rt,2),Ge=tt[0],at=tt[1],$e=function(){at(Date.now())},Ve=function(){clearTimeout(et.value)},nt=function(S,m){S(function(N){var C=ze(N+m);return C})};ya(u,function(h,S){if(_.value){if(E.value>=H.value)return!1;nt(A,h)}else{if(U.value>=y.value)return!1;nt(L,S)}return Ve(),$e(),!0}),he(Ge,function(){Ve(),Ge.value&&(et.value=setTimeout(function(){at(0)},100))});var it=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey,m=Me.value.get(S)||{width:0,height:0,left:0,right:0,top:0};if(_.value){var N=d.value;e.rtl?m.right<d.value?N=m.right:m.right+m.width>d.value+E.value&&(N=m.right+m.width-E.value):m.left<-d.value?N=-m.left:m.left+m.width>-d.value+E.value&&(N=-(m.left+m.width-E.value)),L(0),A(ze(N))}else{var C=k.value;m.top<-k.value?C=-m.top:m.top+m.height>-k.value+U.value&&(C=-(m.top+m.height-U.value)),A(0),L(ze(C))}},Ue=I(0),qe=I(0);We(function(){var h,S,m,N,C,q,X,be=Me.value;["top","bottom"].includes(e.tabPosition)?(S="width",C=E.value,q=H.value,X=Ce.value,m=e.rtl?"right":"left",N=Math.abs(d.value)):(S="height",C=U.value,q=H.value,X=He.value,m="top",N=-k.value);var Q=C;q+X>C&&q<C&&(Q=C-X);var re=l.value;if(!re.length){var le;return le=[0,0],Ue.value=le[0],qe.value=le[1],le}for(var ye=re.length,G=ye,te=0;te<ye;te+=1){var ae=be.get(re[te].key)||pt;if(ae[m]+ae[S]>N+Q){G=te-1;break}}for(var oe=0,ee=ye-1;ee>=0;ee-=1){var me=be.get(re[ee].key)||pt;if(me[m]<N){oe=ee+1;break}}return h=[oe,G],Ue.value=h[0],qe.value=h[1],h});var Xe=function(){var S,m,N,C,q,X=((S=u.value)===null||S===void 0?void 0:S.offsetWidth)||0,be=((m=u.value)===null||m===void 0?void 0:m.offsetHeight)||0,Q=((N=b.value)===null||N===void 0?void 0:N.$el)||{},re=Q.offsetWidth||0,le=Q.offsetHeight||0;xe(X),ie(be),se(re),Re(le);var ye=(((C=v.value)===null||C===void 0?void 0:C.offsetWidth)||0)-re,G=(((q=v.value)===null||q===void 0?void 0:q.offsetHeight)||0)-le;ve(ye),T(G),Pe(function(){var te=new Map;return l.value.forEach(function(ae){var oe=ae.key,ee,me=F.value.get(oe),fe=((ee=me)===null||ee===void 0?void 0:ee.$el)||me;fe&&te.set(oe,{width:fe.offsetWidth,height:fe.offsetHeight,left:fe.offsetLeft,top:fe.offsetTop})}),te})},rt=Y(function(){return[].concat(dt(l.value.slice(0,Ue.value)),dt(l.value.slice(qe.value+1)))}),Nt=$(),lt=B(Nt,2),Ot=lt[0],Mt=lt[1],de=Y(function(){return Me.value.get(e.activeKey)}),ot=I(),ut=function(){Ae.cancel(ot.value)};he([de,_,function(){return e.rtl}],function(){var h={};de.value&&(_.value?(e.rtl?h.right=Be(de.value.right):h.left=Be(de.value.left),h.width=Be(de.value.width)):(h.top=Be(de.value.top),h.height=Be(de.value.height))),ut(),ot.value=Ae(function(){Mt(h)})}),he([function(){return e.activeKey},de,Me,_],function(){it()},{flush:"post"}),he([function(){return e.rtl},function(){return e.tabBarGutter},function(){return e.activeKey},function(){return l.value}],function(){Xe()},{flush:"post"});var Ye=function(S){var m=S.position,N=S.prefixCls,C=S.extra;if(!C)return null;var q=C==null?void 0:C({position:m});return q?f("div",{class:"".concat(N,"-extra-content")},[q]):null};return Je(function(){Ve(),ut()}),function(){var h,S=e.id,m=e.animated,N=e.activeKey,C=e.rtl,q=e.editable,X=e.locale,be=e.tabPosition,Q=e.tabBarGutter,re=e.onTabClick,le=n.class,ye=n.style,G=o.value,te=!!rt.value.length,ae="".concat(G,"-nav-wrap"),oe,ee,me,fe;_.value?C?(ee=d.value>0,oe=d.value+E.value<H.value):(oe=d.value<0,ee=-d.value+E.value<H.value):(me=k.value<0,fe=-k.value+U.value<y.value);var Le={};be==="top"||be==="bottom"?Le[C?"marginRight":"marginLeft"]=typeof Q=="number"?"".concat(Q,"px"):Q:Le.marginTop=typeof Q=="number"?"".concat(Q,"px"):Q;var ct=l.value.map(function(ke,vt){var Ee=ke.key;return f(va,{id:S,prefixCls:G,key:Ee,tab:ke,style:vt===0?void 0:Le,closable:ke.closable,editable:q,active:Ee===N,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:P(Ee),onClick:function(Kt){re(Ee,Kt)},onFocus:function(){it(Ee),$e(),u.value&&(C||(u.value.scrollLeft=0),u.value.scrollTop=0)}},a)});return f("div",{role:"tablist",class:ge("".concat(G,"-nav"),le),style:ye,onKeydown:function(){$e()}},[f(Ye,{position:"left",prefixCls:G,extra:a.leftExtra},null),f(ft,{onResize:Xe},{default:function(){return[f("div",{class:ge(ae,(h={},D(h,"".concat(ae,"-ping-left"),oe),D(h,"".concat(ae,"-ping-right"),ee),D(h,"".concat(ae,"-ping-top"),me),D(h,"".concat(ae,"-ping-bottom"),fe),h)),ref:u},[f(ft,{onResize:Xe},{default:function(){return[f("div",{ref:v,class:"".concat(G,"-nav-list"),style:{transform:"translate(".concat(d.value,"px, ").concat(k.value,"px)"),transition:Ge.value?"none":void 0}},[ct,f(It,{ref:b,prefixCls:G,locale:X,editable:q,style:Z(Z({},ct.length===0?void 0:Le),{visibility:te?"hidden":null})},null),f("div",{class:ge("".concat(G,"-ink-bar"),D({},"".concat(G,"-ink-bar-animated"),m.inkBar)),style:Ot.value},null)])]}})])]}}),f(fa,ue(ue({},e),{},{removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:s,prefixCls:G,tabs:rt.value,class:!te&&wt.value}),Bt(a,["moreIcon"])),f(Ye,{position:"right",prefixCls:G,extra:a.rightExtra},null),f(Ye,{position:"right",prefixCls:G,extra:a.tabBarExtraContent},null)])}}}),xa=ce({name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup:function(e){var t=Et(),n=t.tabs,a=t.prefixCls;return function(){var i=e.id,l=e.activeKey,o=e.animated,u=e.tabPosition,v=e.rtl,s=e.destroyInactiveTabPane,b=o.tabPane,g=a.value,O=n.value.findIndex(function(P){return P.key===l});return f("div",{class:"".concat(g,"-content-holder")},[f("div",{class:["".concat(g,"-content"),"".concat(g,"-content-").concat(u),D({},"".concat(g,"-content-animated"),b)],style:O&&b?D({},v?"marginRight":"marginLeft","-".concat(O,"00%")):null},[n.value.map(function(P){return Vt(P.node,{key:P.key,prefixCls:g,tabKey:P.key,id:i,animated:b,active:P.key===l,destroyInactiveTabPane:s})})])])}}});var Ta={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};const Ca=Ta;function xt(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.forEach(function(a){Pa(r,a,t[a])})}return r}function Pa(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Qe=function(e,t){var n=xt({},e,t.attrs);return f(Ut,xt({},n,{icon:Ca}),null)};Qe.displayName="PlusOutlined";Qe.inheritAttrs=!1;const Ia=Qe;var Tt=0,At=function(){return{prefixCls:{type:String},id:{type:String},activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:{type:String},animated:{type:[Boolean,Object]},renderTabBar:{type:Function},tabBarGutter:{type:Number},tabBarStyle:{type:Object},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean},hideAdd:Boolean,type:{type:String},size:{type:String},centered:Boolean,onEdit:{type:Function},onChange:{type:Function},onTabClick:{type:Function},onTabScroll:{type:Function},"onUpdate:activeKey":{type:Function},locale:{type:Object,default:void 0},onPrevClick:Function,onNextClick:Function,tabBarExtraContent:Fe.any}};function _a(r){return r.map(function(e){if(Yt(e)){for(var t=Z({},e.props||{}),n=0,a=Object.entries(t);n<a.length;n++){var i=B(a[n],2),l=i[0],o=i[1];delete t[l],t[Zt(l)]=o}var u=e.children||{},v=e.key!==void 0?e.key:void 0,s=t.tab,b=s===void 0?u.tab:s,g=t.disabled,O=t.forceRender,P=t.closable,F=t.animated,_=t.active,j=t.destroyInactiveTabPane;return Z(Z({key:v},t),{node:e,closeIcon:u.closeIcon,tab:b,disabled:g===""||g,forceRender:O===""||O,closable:P===""||P,animated:F===""||F,active:_===""||_,destroyInactiveTabPane:j===""||j})}return null}).filter(function(e){return e})}var ka=ce({name:"InternalTabs",inheritAttrs:!1,props:Z(Z({},Pt(At(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{tabs:{type:Array}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var n=t.attrs,a=t.slots;Ze(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),Ze(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),Ze(a.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");var i=Jt("tabs",e),l=i.prefixCls,o=i.direction,u=i.size,v=i.rootPrefixCls,s=Y(function(){return o.value==="rtl"}),b=Y(function(){var c=e.animated,y=e.tabPosition;return c===!1||["left","right"].includes(y)?{inkBar:!1,tabPane:!1}:c===!0?{inkBar:!0,tabPane:!0}:Z({inkBar:!0,tabPane:!1},Qt(c)==="object"?c:{})}),g=$(!1),O=B(g,2),P=O[0],F=O[1];De(function(){F(oa())});var _=bt(function(){var c;return(c=e.tabs[0])===null||c===void 0?void 0:c.key},{value:Y(function(){return e.activeKey}),defaultValue:e.defaultActiveKey}),j=B(_,2),x=j[0],d=j[1],A=$(function(){return e.tabs.findIndex(function(c){return c.key===x.value})}),z=B(A,2),M=z[0],k=z[1];We(function(){var c,y=e.tabs.findIndex(function(T){return T.key===x.value});y===-1&&(y=Math.max(0,Math.min(M.value,e.tabs.length-1)),d((c=e.tabs[y])===null||c===void 0?void 0:c.key)),k(y)});var L=bt(null,{value:Y(function(){return e.id})}),V=B(L,2),K=V[0],H=V[1],ve=Y(function(){return P.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition});De(function(){e.id||(H("rc-tabs-".concat(Tt)),Tt+=1)});var p=function(y,T){var W,R;(W=e.onTabClick)===null||W===void 0||W.call(e,y,T);var E=y!==x.value;d(y),E&&((R=e.onChange)===null||R===void 0||R.call(e,y))};return kt({tabs:Y(function(){return e.tabs}),prefixCls:l}),function(){var c,y=e.id,T=e.type,W=e.tabBarGutter,R=e.tabBarStyle,E=e.locale,xe=e.destroyInactiveTabPane,pe=e.renderTabBar,w=pe===void 0?a.renderTabBar:pe,U=e.onTabScroll,ie=e.hideAdd,Te=e.centered,Se={id:K.value,activeKey:x.value,animated:b.value,tabPosition:ve.value,rtl:s.value,mobile:P.value},Ce;T==="editable-card"&&(Ce={onEdit:function(Re,Ne){var Oe=Ne.key,je=Ne.event,Pe;(Pe=e.onEdit)===null||Pe===void 0||Pe.call(e,Re==="add"?je:Oe,Re)},removeIcon:function(){return f(ea,null,null)},addIcon:a.addIcon?a.addIcon:function(){return f(Ia,null,null)},showAdd:ie!==!0});var se,we=Z(Z({},Se),{moreTransitionName:"".concat(v.value,"-slide-up"),editable:Ce,locale:E,tabBarGutter:W,onTabClick:p,onTabScroll:U,style:R});w?se=w(Z(Z({},we),{DefaultTabBar:St})):se=f(St,we,Bt(a,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));var J=l.value;return f("div",ue(ue({},n),{},{id:y,class:ge(J,"".concat(J,"-").concat(ve.value),(c={},D(c,"".concat(J,"-").concat(u.value),u.value),D(c,"".concat(J,"-card"),["card","editable-card"].includes(T)),D(c,"".concat(J,"-editable-card"),T==="editable-card"),D(c,"".concat(J,"-centered"),Te),D(c,"".concat(J,"-mobile"),P.value),D(c,"".concat(J,"-editable"),T==="editable-card"),D(c,"".concat(J,"-rtl"),s.value),c),n.class)}),[se,f(xa,ue(ue({destroyInactiveTabPane:xe},Se),{},{animated:b.value}),null)])}}});const La=ce({name:"ATabs",inheritAttrs:!1,props:Pt(At(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var n=t.attrs,a=t.slots,i=t.emit,l=function(u){i("update:activeKey",u),i("change",u)};return function(){var o,u=_a(qt((o=a.default)===null||o===void 0?void 0:o.call(a)));return f(ka,ue(ue(ue({},Xt(e,["onUpdate:activeKey"])),n),{},{onChange:l,tabs:u}),a)}}});var Ea=function(){return{tab:Fe.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}};const Ka=ce({name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:Ea(),slots:["closeIcon","tab"],setup:function(e,t){var n=t.attrs,a=t.slots,i=I(e.forceRender);he([function(){return e.active},function(){return e.destroyInactiveTabPane}],function(){e.active?i.value=!0:e.destroyInactiveTabPane&&(i.value=!1)},{immediate:!0});var l=Y(function(){return e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"}});return function(){var o,u=e.prefixCls,v=e.forceRender,s=e.id,b=e.active,g=e.tabKey;return f("div",{id:s&&"".concat(s,"-panel-").concat(g),role:"tabpanel",tabindex:b?0:-1,"aria-labelledby":s&&"".concat(s,"-tab-").concat(g),"aria-hidden":!b,style:[l.value,n.style],class:["".concat(u,"-tabpane"),b&&"".concat(u,"-tabpane-active"),n.class]},[(b||i.value||v)&&((o=a.default)===null||o===void 0?void 0:o.call(a))])}}});export{La as T,Ka as _};
