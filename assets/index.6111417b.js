import{u as x,a as S,M as t,_ as m,S as v}from"./Menu.df737505.js";import{d as _,f as I,a as i,b5 as b,Y as p,P as h,e as j,h as C}from"./index.c31bc572.js";var D=function(){return{title:h.any}},d=_({name:"AMenuItemGroup",inheritAttrs:!1,props:D(),slots:["title"],setup:function(r,o){var n=o.slots,a=o.attrs,u=x(),M=u.prefixCls,s=I(function(){return"".concat(M.value,"-item-group")}),P=S();return function(){var l,c;return P?(l=n.default)===null||l===void 0?void 0:l.call(n):i("li",p(p({},a),{},{onClick:function(g){return g.stopPropagation()},class:s.value}),[i("div",{title:typeof r.title=="string"?r.title:void 0,class:"".concat(s.value,"-title")},[b(n,r,"title")]),i("ul",{class:"".concat(s.value,"-list")},[(c=n.default)===null||c===void 0?void 0:c.call(n)])])}}}),G=function(){return{prefixCls:String,dashed:Boolean}},f=_({name:"AMenuDivider",props:G(),setup:function(r){var o=j("menu",r),n=o.prefixCls,a=I(function(){var u;return u={},C(u,"".concat(n.value,"-item-divider"),!0),C(u,"".concat(n.value,"-item-divider-dashed"),!!r.dashed),u});return function(){return i("li",{class:a.value},null)}}});t.install=function(e){return e.component(t.name,t),e.component(m.name,m),e.component(v.name,v),e.component(f.name,f),e.component(d.name,d),e};t.Item=m;t.Divider=f;t.SubMenu=v;t.ItemGroup=d;