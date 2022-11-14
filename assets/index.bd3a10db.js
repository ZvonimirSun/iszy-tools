import{r as k,ad as Xe,af as _e,d as ce,f as Z,a as f,aa as ie,g as ye,h as W,aO as Ne,p as R,n as B,D as Le,m as me,P as De,aJ as Dt,j as Kt,b6 as Wt,aD as vt,aU as Tt,aF as Ft,aW as $t,bY as jt,aG as zt,bZ as Ht,av as st,bG as Ee,b8 as dt,y as Gt,A as Ut,aw as Ct,b1 as Vt,z as qt,H as Yt,bJ as Xt,bj as Ye,e as Zt,ag as Jt,bd as ft,bf as Qt}from"./index.835879a6.js";import"./index.30d4af1c.js";import{E as ea,M as ta,_ as aa,D as na}from"./Menu.1c2b35e6.js";import{u as U}from"./useState.d8330fb7.js";import{u as ia}from"./useRefs.b1cbba9d.js";import{h as ra}from"./hasIn.5fcc058e.js";import{i as la}from"./isMobile.47354675.js";function oa(r){var e=k(),t=k(!1);function i(){for(var a=arguments.length,n=new Array(a),u=0;u<a;u++)n[u]=arguments[u];t.value||(_e.cancel(e.value),e.value=_e(function(){r.apply(void 0,n)}))}return Xe(function(){t.value=!0,_e.cancel(e.value)}),i}function ua(r){var e=k([]),t=k(typeof r=="function"?r():r),i=oa(function(){var n=t.value;e.value.forEach(function(u){n=u(n)}),e.value=[],t.value=n});function a(n){e.value.push(n),i()}return[t,a]}const ca=ce({compatConfig:{MODE:3},name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup:function(e,t){var i=t.expose,a=t.attrs,n=k();function u(v){var s;(s=e.tab)!==null&&s!==void 0&&s.disabled||e.onClick(v)}i({domRef:n});function c(v){var s;v.preventDefault(),v.stopPropagation(),e.editable.onEdit("remove",{key:(s=e.tab)===null||s===void 0?void 0:s.key,event:v})}var l=Z(function(){var v;return e.editable&&e.closable!==!1&&!((v=e.tab)!==null&&v!==void 0&&v.disabled)});return function(){var v,s,b=e.prefixCls,g=e.id,M=e.active,I=e.tab,F=I.key,E=I.tab,z=I.disabled,x=I.closeIcon,d=e.renderWrapper,A=e.removeAriaLabel,H=e.editable,N=e.onFocus,_="".concat(b,"-tab"),L=f("div",{key:F,ref:n,class:ye(_,(v={},W(v,"".concat(_,"-with-remove"),l.value),W(v,"".concat(_,"-active"),M),W(v,"".concat(_,"-disabled"),z),v)),style:a.style,onClick:u},[f("div",{role:"tab","aria-selected":M,id:g&&"".concat(g,"-tab-").concat(F),class:"".concat(_,"-btn"),"aria-controls":g&&"".concat(g,"-panel-").concat(F),"aria-disabled":z,tabindex:z?null:0,onClick:function(D){D.stopPropagation(),u(D)},onKeydown:function(D){[ie.SPACE,ie.ENTER].includes(D.which)&&(D.preventDefault(),u(D))},onFocus:N},[typeof E=="function"?E():E]),l.value&&f("button",{type:"button","aria-label":A||"remove",tabindex:0,class:"".concat(_,"-remove"),onClick:function(D){D.stopPropagation(),c(D)}},[(x==null?void 0:x())||((s=H.removeIcon)===null||s===void 0?void 0:s.call(H))||"\xD7"])]);return d?d(L):L}}});var bt={width:0,height:0,left:0,top:0};function va(r,e){var t=k(new Map);return Ne(function(){for(var i,a=new Map,n=r.value,u=e.value.get((i=n[0])===null||i===void 0?void 0:i.key)||bt,c=u.left+u.width,l=0;l<n.length;l+=1){var v=n[l].key,s=e.value.get(v);if(!s){var b;s=e.value.get((b=n[l-1])===null||b===void 0?void 0:b.key)||bt}var g=a.get(v)||R({},s);g.right=c-g.left-g.width,a.set(v,g)}t.value=new Map(a)}),t}const Pt=ce({compatConfig:{MODE:3},name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup:function(e,t){var i=t.expose,a=t.attrs,n=k();return i({domRef:n}),function(){var u=e.prefixCls,c=e.editable,l=e.locale;return!c||c.showAdd===!1?null:f("button",{ref:n,type:"button",class:"".concat(u,"-nav-add"),style:a.style,"aria-label":(l==null?void 0:l.addAriaLabel)||"Add tab",onClick:function(s){c.onEdit("add",{event:s})}},[c.addIcon?c.addIcon():"+"])}}});var sa={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:De.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function}};const da=ce({compatConfig:{MODE:3},name:"OperationNode",inheritAttrs:!1,props:sa,emits:["tabClick"],slots:["moreIcon"],setup:function(e,t){var i=t.attrs,a=t.slots,n=U(!1),u=B(n,2),c=u[0],l=u[1],v=U(null),s=B(v,2),b=s[0],g=s[1],M=function(d){for(var A=e.tabs.filter(function(V){return!V.disabled}),H=A.findIndex(function(V){return V.key===b.value})||0,N=A.length,_=0;_<N;_+=1){H=(H+d+N)%N;var L=A[H];if(!L.disabled){g(L.key);return}}},I=function(d){var A=d.which;if(!c.value){[ie.DOWN,ie.SPACE,ie.ENTER].includes(A)&&(l(!0),d.preventDefault());return}switch(A){case ie.UP:M(-1),d.preventDefault();break;case ie.DOWN:M(1),d.preventDefault();break;case ie.ESC:l(!1);break;case ie.SPACE:case ie.ENTER:b.value!==null&&e.onTabClick(b.value,d);break}},F=Z(function(){return"".concat(e.id,"-more-popup")}),E=Z(function(){return b.value!==null?"".concat(F.value,"-").concat(b.value):null}),z=function(d,A){d.preventDefault(),d.stopPropagation(),e.editable.onEdit("remove",{key:A,event:d})};return Le(function(){me(b,function(){var x=document.getElementById(E.value);x&&x.scrollIntoView&&x.scrollIntoView(!1)},{flush:"post",immediate:!0})}),me(c,function(){c.value||g(null)}),function(){var x,d=e.prefixCls,A=e.id,H=e.tabs,N=e.locale,_=e.mobile,L=e.moreIcon,V=L===void 0?((x=a.moreIcon)===null||x===void 0?void 0:x.call(a))||f(ea,null,null):L,D=e.moreTransitionName,j=e.editable,ve=e.tabBarGutter,p=e.rtl,o=e.onTabClick,y="".concat(d,"-dropdown"),T=N==null?void 0:N.dropdownAriaLabel,K=W({},p?"marginRight":"marginLeft",ve);H.length||(K.visibility="hidden",K.order=1);var $=ye(W({},"".concat(y,"-rtl"),p)),C=_?null:f(na,{prefixCls:y,trigger:["hover"],visible:c.value,transitionName:D,onVisibleChange:l,overlayClassName:$,mouseEnterDelay:.1,mouseLeaveDelay:.1},{overlay:function(){return f(ta,{onClick:function(w){var q=w.key,re=w.domEvent;o(q,re),l(!1)},id:F.value,tabindex:-1,role:"listbox","aria-activedescendant":E.value,selectedKeys:[b.value],"aria-label":T!==void 0?T:"expanded dropdown"},{default:function(){return[H.map(function(w){var q,re,xe=j&&w.closable!==!1&&!w.disabled;return f(aa,{key:w.key,id:"".concat(F.value,"-").concat(w.key),role:"option","aria-controls":A&&"".concat(A,"-panel-").concat(w.key),disabled:w.disabled},{default:function(){return[f("span",null,[typeof w.tab=="function"?w.tab():w.tab]),xe&&f("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:"".concat(y,"-menu-item-remove"),onClick:function(se){se.stopPropagation(),z(se,w.key)}},[((q=w.closeIcon)===null||q===void 0?void 0:q.call(w))||((re=j.removeIcon)===null||re===void 0?void 0:re.call(j))||"\xD7"])]}})})]}})},default:function(){return f("button",{type:"button",class:"".concat(d,"-nav-more"),style:K,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":F.value,id:"".concat(A,"-more"),"aria-expanded":c.value,onKeydown:I},[V])}});return f("div",{class:ye("".concat(d,"-nav-operations"),i.class),style:i.style},[C,f(Pt,{prefixCls:d,locale:N,editable:j},null)])}}});var It=Symbol("tabsContextKey"),kt=function(e){Dt(It,e)},Et=function(){return Kt(It,{tabs:k([]),prefixCls:k()})};ce({compatConfig:{MODE:3},name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup:function(e,t){var i=t.slots;return kt(Wt(e)),function(){var a;return(a=i.default)===null||a===void 0?void 0:a.call(i)}}});var fa=.1,mt=.01,Me=20,yt=Math.pow(.995,Me);function ba(r,e){var t=U(),i=B(t,2),a=i[0],n=i[1],u=U(0),c=B(u,2),l=c[0],v=c[1],s=U(0),b=B(s,2),g=b[0],M=b[1],I=U(),F=B(I,2),E=F[0],z=F[1],x=k();function d(p){var o=p.touches[0],y=o.screenX,T=o.screenY;n({x:y,y:T}),clearInterval(x.value)}function A(p){if(!!a.value){p.preventDefault();var o=p.touches[0],y=o.screenX,T=o.screenY,K=y-a.value.x,$=T-a.value.y;e(K,$),n({x:y,y:T});var C=Date.now();M(C-l.value),v(C),z({x:K,y:$})}}function H(){if(!!a.value){var p=E.value;if(n(null),z(null),p){var o=p.x/g.value,y=p.y/g.value,T=Math.abs(o),K=Math.abs(y);if(Math.max(T,K)<fa)return;var $=o,C=y;x.value=setInterval(function(){if(Math.abs($)<mt&&Math.abs(C)<mt){clearInterval(x.value);return}$*=yt,C*=yt,e($*Me,C*Me)},Me)}}}var N=k();function _(p){var o=p.deltaX,y=p.deltaY,T=0,K=Math.abs(o),$=Math.abs(y);K===$?T=N.value==="x"?o:y:K>$?(T=o,N.value="x"):(T=y,N.value="y"),e(-T,-T)&&p.preventDefault()}var L=k({onTouchStart:d,onTouchMove:A,onTouchEnd:H,onWheel:_});function V(p){L.value.onTouchStart(p)}function D(p){L.value.onTouchMove(p)}function j(p){L.value.onTouchEnd(p)}function ve(p){L.value.onWheel(p)}Le(function(){var p,o;document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",j,{passive:!1}),(p=r.value)===null||p===void 0||p.addEventListener("touchstart",V,{passive:!1}),(o=r.value)===null||o===void 0||o.addEventListener("wheel",ve,{passive:!1})}),Xe(function(){document.removeEventListener("touchmove",D),document.removeEventListener("touchend",j)})}function ht(r,e){var t=k(r);function i(a){var n=typeof a=="function"?a(t.value):a;n!==t.value&&e(n,t.value),t.value=n}return[t,i]}function ma(r,e,t,i){if(!vt(r))return r;e=Tt(e,r);for(var a=-1,n=e.length,u=n-1,c=r;c!=null&&++a<n;){var l=Ft(e[a]),v=t;if(l==="__proto__"||l==="constructor"||l==="prototype")return r;if(a!=u){var s=c[l];v=i?i(s,l,c):void 0,v===void 0&&(v=vt(s)?s:$t(e[a+1])?[]:{})}jt(c,l,v),c=c[l]}return r}function ya(r,e,t){for(var i=-1,a=e.length,n={};++i<a;){var u=e[i],c=zt(r,u);t(c,u)&&ma(n,Tt(u,r),c)}return n}function ha(r,e){return ya(r,e,function(t,i){return ra(r,i)})}var ga=Ht(function(r,e){return r==null?{}:ha(r,e)});const _t=ga;var gt={width:0,height:0,left:0,top:0,right:0},pa=function(){return{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:{type:Object,default:void 0},editable:{type:Object},moreIcon:De.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:{type:Object,default:void 0},onTabClick:{type:Function},onTabScroll:{type:Function}}};const pt=ce({compatConfig:{MODE:3},name:"TabNavList",inheritAttrs:!1,props:pa(),slots:["moreIcon","leftExtra","rightExtra","tabBarExtraContent"],emits:["tabClick","tabScroll"],setup:function(e,t){var i=t.attrs,a=t.slots,n=Et(),u=n.tabs,c=n.prefixCls,l=k(),v=k(),s=k(),b=k(),g=ia(),M=B(g,2),I=M[0],F=M[1],E=Z(function(){return e.tabPosition==="top"||e.tabPosition==="bottom"}),z=ht(0,function(h,S){E.value&&e.onTabScroll&&e.onTabScroll({direction:h>S?"left":"right"})}),x=B(z,2),d=x[0],A=x[1],H=ht(0,function(h,S){!E.value&&e.onTabScroll&&e.onTabScroll({direction:h>S?"top":"bottom"})}),N=B(H,2),_=N[0],L=N[1],V=U(0),D=B(V,2),j=D[0],ve=D[1],p=U(0),o=B(p,2),y=o[0],T=o[1],K=U(null),$=B(K,2),C=$[0],Se=$[1],he=U(null),w=B(he,2),q=w[0],re=w[1],xe=U(0),ge=B(xe,2),Te=ge[0],se=ge[1],Be=U(0),Q=B(Be,2),Ke=Q[0],Ae=Q[1],Re=ua(new Map),pe=B(Re,2),We=pe[0],Fe=pe[1],we=va(u,We),At=Z(function(){return"".concat(c.value,"-nav-operations-hidden")}),Ce=k(0),Pe=k(0);Ne(function(){E.value?e.rtl?(Ce.value=0,Pe.value=Math.max(0,j.value-C.value)):(Ce.value=Math.min(0,C.value-j.value),Pe.value=0):(Ce.value=Math.min(0,q.value-y.value),Pe.value=0)});var $e=function(S){return S<Ce.value?Ce.value:S>Pe.value?Pe.value:S},Je=k(),Rt=U(),Qe=B(Rt,2),je=Qe[0],et=Qe[1],ze=function(){et(Date.now())},He=function(){clearTimeout(Je.value)},tt=function(S,m){S(function(O){var P=$e(O+m);return P})};ba(l,function(h,S){if(E.value){if(C.value>=j.value)return!1;tt(A,h)}else{if(q.value>=y.value)return!1;tt(L,S)}return He(),ze(),!0}),me(je,function(){He(),je.value&&(Je.value=setTimeout(function(){et(0)},100))});var at=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey,m=we.value.get(S)||{width:0,height:0,left:0,right:0,top:0};if(E.value){var O=d.value;e.rtl?m.right<d.value?O=m.right:m.right+m.width>d.value+C.value&&(O=m.right+m.width-C.value):m.left<-d.value?O=-m.left:m.left+m.width>-d.value+C.value&&(O=-(m.left+m.width-C.value)),L(0),A($e(O))}else{var P=_.value;m.top<-_.value?P=-m.top:m.top+m.height>-_.value+q.value&&(P=-(m.top+m.height-q.value)),A(0),L($e(P))}},Ge=k(0),Ue=k(0);Ne(function(){var h,S,m,O,P,Y,X,fe=we.value;["top","bottom"].includes(e.tabPosition)?(S="width",P=C.value,Y=j.value,X=Te.value,m=e.rtl?"right":"left",O=Math.abs(d.value)):(S="height",P=q.value,Y=j.value,X=Ke.value,m="top",O=-_.value);var ee=P;Y+X>P&&Y<P&&(ee=P-X);var le=u.value;if(!le.length){var oe;return oe=[0,0],Ge.value=oe[0],Ue.value=oe[1],oe}for(var be=le.length,G=be,te=0;te<be;te+=1){var ae=fe.get(le[te].key)||gt;if(ae[m]+ae[S]>O+ee){G=te-1;break}}for(var ue=0,J=be-1;J>=0;J-=1){var ne=fe.get(le[J].key)||gt;if(ne[m]<O){ue=J+1;break}}return h=[ue,G],Ge.value=h[0],Ue.value=h[1],h});var Ve=function(){var S,m,O,P,Y,X=((S=l.value)===null||S===void 0?void 0:S.offsetWidth)||0,fe=((m=l.value)===null||m===void 0?void 0:m.offsetHeight)||0,ee=((O=b.value)===null||O===void 0?void 0:O.$el)||{},le=ee.offsetWidth||0,oe=ee.offsetHeight||0;Se(X),re(fe),se(le),Ae(oe);var be=(((P=v.value)===null||P===void 0?void 0:P.offsetWidth)||0)-le,G=(((Y=v.value)===null||Y===void 0?void 0:Y.offsetHeight)||0)-oe;ve(be),T(G),Fe(function(){var te=new Map;return u.value.forEach(function(ae){var ue=ae.key,J=F.value.get(ue),ne=(J==null?void 0:J.$el)||J;ne&&te.set(ue,{width:ne.offsetWidth,height:ne.offsetHeight,left:ne.offsetLeft,top:ne.offsetTop})}),te})},nt=Z(function(){return[].concat(st(u.value.slice(0,Ge.value)),st(u.value.slice(Ue.value+1)))}),wt=U(),it=B(wt,2),Ot=it[0],Mt=it[1],de=Z(function(){return we.value.get(e.activeKey)}),rt=k(),lt=function(){_e.cancel(rt.value)};me([de,E,function(){return e.rtl}],function(){var h={};de.value&&(E.value?(e.rtl?h.right=Ee(de.value.right):h.left=Ee(de.value.left),h.width=Ee(de.value.width)):(h.top=Ee(de.value.top),h.height=Ee(de.value.height))),lt(),rt.value=_e(function(){Mt(h)})}),me([function(){return e.activeKey},de,we,E],function(){at()},{flush:"post"}),me([function(){return e.rtl},function(){return e.tabBarGutter},function(){return e.activeKey},function(){return u.value}],function(){Ve()},{flush:"post"});var qe=function(S){var m=S.position,O=S.prefixCls,P=S.extra;if(!P)return null;var Y=P==null?void 0:P({position:m});return Y?f("div",{class:"".concat(O,"-extra-content")},[Y]):null};return Xe(function(){He(),lt()}),function(){var h,S=e.id,m=e.animated,O=e.activeKey,P=e.rtl,Y=e.editable,X=e.locale,fe=e.tabPosition,ee=e.tabBarGutter,le=e.onTabClick,oe=i.class,be=i.style,G=c.value,te=!!nt.value.length,ae="".concat(G,"-nav-wrap"),ue,J,ne,ot;E.value?P?(J=d.value>0,ue=d.value+C.value<j.value):(ue=d.value<0,J=-d.value+C.value<j.value):(ne=_.value<0,ot=-_.value+q.value<y.value);var Oe={};fe==="top"||fe==="bottom"?Oe[P?"marginRight":"marginLeft"]=typeof ee=="number"?"".concat(ee,"px"):ee:Oe.marginTop=typeof ee=="number"?"".concat(ee,"px"):ee;var ut=u.value.map(function(Ie,ct){var ke=Ie.key;return f(ca,{id:S,prefixCls:G,key:ke,tab:Ie,style:ct===0?void 0:Oe,closable:Ie.closable,editable:Y,active:ke===O,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:I(ke),onClick:function(Lt){le(ke,Lt)},onFocus:function(){at(ke),ze(),l.value&&(P||(l.value.scrollLeft=0),l.value.scrollTop=0)}},a)});return f("div",{role:"tablist",class:ye("".concat(G,"-nav"),oe),style:be,onKeydown:function(){ze()}},[f(qe,{position:"left",prefixCls:G,extra:a.leftExtra},null),f(dt,{onResize:Ve},{default:function(){return[f("div",{class:ye(ae,(h={},W(h,"".concat(ae,"-ping-left"),ue),W(h,"".concat(ae,"-ping-right"),J),W(h,"".concat(ae,"-ping-top"),ne),W(h,"".concat(ae,"-ping-bottom"),ot),h)),ref:l},[f(dt,{onResize:Ve},{default:function(){return[f("div",{ref:v,class:"".concat(G,"-nav-list"),style:{transform:"translate(".concat(d.value,"px, ").concat(_.value,"px)"),transition:je.value?"none":void 0}},[ut,f(Pt,{ref:b,prefixCls:G,locale:X,editable:Y,style:R(R({},ut.length===0?void 0:Oe),{},{visibility:te?"hidden":null})},null),f("div",{class:ye("".concat(G,"-ink-bar"),W({},"".concat(G,"-ink-bar-animated"),m.inkBar)),style:Ot.value},null)])]}})])]}}),f(da,R(R({},e),{},{removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:s,prefixCls:G,tabs:nt.value,class:!te&&At.value}),_t(a,["moreIcon"])),f(qe,{position:"right",prefixCls:G,extra:a.rightExtra},null),f(qe,{position:"right",prefixCls:G,extra:a.tabBarExtraContent},null)])}}}),Sa=ce({compatConfig:{MODE:3},name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup:function(e){var t=Et(),i=t.tabs,a=t.prefixCls;return function(){var n=e.id,u=e.activeKey,c=e.animated,l=e.tabPosition,v=e.rtl,s=e.destroyInactiveTabPane,b=c.tabPane,g=a.value,M=i.value.findIndex(function(I){return I.key===u});return f("div",{class:"".concat(g,"-content-holder")},[f("div",{class:["".concat(g,"-content"),"".concat(g,"-content-").concat(l),W({},"".concat(g,"-content-animated"),b)],style:M&&b?W({},v?"marginRight":"marginLeft","-".concat(M,"00%")):null},[i.value.map(function(I){return Gt(I.node,{key:I.key,prefixCls:g,tabKey:I.key,id:n,animated:b,active:I.key===u,destroyInactiveTabPane:s})})])])}}});var xa={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};const Ta=xa;function St(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),i.forEach(function(a){Ca(r,a,t[a])})}return r}function Ca(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Ze=function(e,t){var i=St({},e,t.attrs);return f(Ut,St({},i,{icon:Ta}),null)};Ze.displayName="PlusOutlined";Ze.inheritAttrs=!1;const Pa=Ze;var xt=0,Bt=function(){return{prefixCls:{type:String},id:{type:String},activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:{type:String},animated:{type:[Boolean,Object]},renderTabBar:{type:Function},tabBarGutter:{type:Number},tabBarStyle:{type:Object},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean},hideAdd:Boolean,type:{type:String},size:{type:String},centered:Boolean,onEdit:{type:Function},onChange:{type:Function},onTabClick:{type:Function},onTabScroll:{type:Function},"onUpdate:activeKey":{type:Function},locale:{type:Object,default:void 0},onPrevClick:Function,onNextClick:Function,tabBarExtraContent:De.any}};function Ia(r){return r.map(function(e){if(Yt(e)){for(var t=R({},e.props||{}),i=0,a=Object.entries(t);i<a.length;i++){var n=B(a[i],2),u=n[0],c=n[1];delete t[u],t[Xt(u)]=c}var l=e.children||{},v=e.key!==void 0?e.key:void 0,s=t.tab,b=s===void 0?l.tab:s,g=t.disabled,M=t.forceRender,I=t.closable,F=t.animated,E=t.active,z=t.destroyInactiveTabPane;return R(R({key:v},t),{},{node:e,closeIcon:l.closeIcon,tab:b,disabled:g===""||g,forceRender:M===""||M,closable:I===""||I,animated:F===""||F,active:E===""||E,destroyInactiveTabPane:z===""||z})}return null}).filter(function(e){return e})}var ka=ce({compatConfig:{MODE:3},name:"InternalTabs",inheritAttrs:!1,props:R(R({},Ct(Bt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{},{tabs:{type:Array}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var i=t.attrs,a=t.slots;Ye(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),Ye(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),Ye(a.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");var n=Zt("tabs",e),u=n.prefixCls,c=n.direction,l=n.size,v=n.rootPrefixCls,s=Z(function(){return c.value==="rtl"}),b=Z(function(){var o=e.animated,y=e.tabPosition;return o===!1||["left","right"].includes(y)?{inkBar:!1,tabPane:!1}:o===!0?{inkBar:!0,tabPane:!0}:R({inkBar:!0,tabPane:!1},Jt(o)==="object"?o:{})}),g=U(!1),M=B(g,2),I=M[0],F=M[1];Le(function(){F(la())});var E=ft(function(){var o;return(o=e.tabs[0])===null||o===void 0?void 0:o.key},{value:Z(function(){return e.activeKey}),defaultValue:e.defaultActiveKey}),z=B(E,2),x=z[0],d=z[1],A=U(function(){return e.tabs.findIndex(function(o){return o.key===x.value})}),H=B(A,2),N=H[0],_=H[1];Ne(function(){var o=e.tabs.findIndex(function(T){return T.key===x.value});if(o===-1){var y;o=Math.max(0,Math.min(N.value,e.tabs.length-1)),d((y=e.tabs[o])===null||y===void 0?void 0:y.key)}_(o)});var L=ft(null,{value:Z(function(){return e.id})}),V=B(L,2),D=V[0],j=V[1],ve=Z(function(){return I.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition});Le(function(){e.id||(j("rc-tabs-".concat(xt)),xt+=1)});var p=function(y,T){var K;(K=e.onTabClick)===null||K===void 0||K.call(e,y,T);var $=y!==x.value;if(d(y),$){var C;(C=e.onChange)===null||C===void 0||C.call(e,y)}};return kt({tabs:Z(function(){return e.tabs}),prefixCls:u}),function(){var o,y=e.id,T=e.type,K=e.tabBarGutter,$=e.tabBarStyle,C=e.locale,Se=e.destroyInactiveTabPane,he=e.renderTabBar,w=he===void 0?a.renderTabBar:he,q=e.onTabScroll,re=e.hideAdd,xe=e.centered,ge={id:D.value,activeKey:x.value,animated:b.value,tabPosition:ve.value,rtl:s.value,mobile:I.value},Te;T==="editable-card"&&(Te={onEdit:function(Ae,Re){var pe,We=Re.key,Fe=Re.event;(pe=e.onEdit)===null||pe===void 0||pe.call(e,Ae==="add"?Fe:We,Ae)},removeIcon:function(){return f(Qt,null,null)},addIcon:a.addIcon?a.addIcon:function(){return f(Pa,null,null)},showAdd:re!==!0});var se,Be=R(R({},ge),{},{moreTransitionName:"".concat(v.value,"-slide-up"),editable:Te,locale:C,tabBarGutter:K,onTabClick:p,onTabScroll:q,style:$});w?se=w(R(R({},Be),{},{DefaultTabBar:pt})):se=f(pt,Be,_t(a,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));var Q=u.value;return f("div",R(R({},i),{},{id:y,class:ye(Q,"".concat(Q,"-").concat(ve.value),(o={},W(o,"".concat(Q,"-").concat(l.value),l.value),W(o,"".concat(Q,"-card"),["card","editable-card"].includes(T)),W(o,"".concat(Q,"-editable-card"),T==="editable-card"),W(o,"".concat(Q,"-centered"),xe),W(o,"".concat(Q,"-mobile"),I.value),W(o,"".concat(Q,"-editable"),T==="editable-card"),W(o,"".concat(Q,"-rtl"),s.value),o),i.class)}),[se,f(Sa,R(R({destroyInactiveTabPane:Se},ge),{},{animated:b.value}),null)])}}});const Na=ce({compatConfig:{MODE:3},name:"ATabs",inheritAttrs:!1,props:Ct(Bt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var i=t.attrs,a=t.slots,n=t.emit,u=function(l){n("update:activeKey",l),n("change",l)};return function(){var c,l=Ia(Vt((c=a.default)===null||c===void 0?void 0:c.call(a)));return f(ka,R(R(R({},qt(e,["onUpdate:activeKey"])),i),{},{onChange:u,tabs:l}),a)}}});var Ea=function(){return{tab:De.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}};const La=ce({compatConfig:{MODE:3},name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:Ea(),slots:["closeIcon","tab"],setup:function(e,t){var i=t.attrs,a=t.slots,n=k(e.forceRender);me([function(){return e.active},function(){return e.destroyInactiveTabPane}],function(){e.active?n.value=!0:e.destroyInactiveTabPane&&(n.value=!1)},{immediate:!0});var u=Z(function(){return e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"}});return function(){var c,l=e.prefixCls,v=e.forceRender,s=e.id,b=e.active,g=e.tabKey;return f("div",{id:s&&"".concat(s,"-panel-").concat(g),role:"tabpanel",tabindex:b?0:-1,"aria-labelledby":s&&"".concat(s,"-tab-").concat(g),"aria-hidden":!b,style:[u.value,i.style],class:["".concat(l,"-tabpane"),b&&"".concat(l,"-tabpane-active"),i.class]},[(b||n.value||v)&&((c=a.default)===null||c===void 0?void 0:c.call(a))])}}});export{Na as T,La as _};
