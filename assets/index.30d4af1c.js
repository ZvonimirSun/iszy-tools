import{u as D,a as x,M as n,_ as m,S as f}from"./Menu.1c2b35e6.js";import{d as M,f as g,a as s,a8 as S,p as v,P as h,e as j,h as C}from"./index.835879a6.js";var G=function(){return{title:h.any}};const d=M({compatConfig:{MODE:3},name:"AMenuItemGroup",inheritAttrs:!1,props:G(),slots:["title"],setup:function(o,u){var t=u.slots,i=u.attrs,r=D(),_=r.prefixCls,a=g(function(){return"".concat(_.value,"-item-group")}),I=x();return function(){var l,c;return I?(l=t.default)===null||l===void 0?void 0:l.call(t):s("li",v(v({},i),{},{onClick:function(P){return P.stopPropagation()},class:a.value}),[s("div",{title:typeof o.title=="string"?o.title:void 0,class:"".concat(a.value,"-title")},[S(t,o,"title")]),s("ul",{class:"".concat(a.value,"-list")},[(c=t.default)===null||c===void 0?void 0:c.call(t)])])}}});var y=function(){return{prefixCls:String,dashed:Boolean}};const p=M({compatConfig:{MODE:3},name:"AMenuDivider",props:y(),setup:function(o){var u=j("menu",o),t=u.prefixCls,i=g(function(){var r;return r={},C(r,"".concat(t.value,"-item-divider"),!0),C(r,"".concat(t.value,"-item-divider-dashed"),!!o.dashed),r});return function(){return s("li",{class:i.value},null)}}});n.install=function(e){return e.component(n.name,n),e.component(m.name,m),e.component(f.name,f),e.component(p.name,p),e.component(d.name,d),e};n.Item=m;n.Divider=p;n.SubMenu=f;n.ItemGroup=d;
