import{l as x,g as p,e as s,o as r,B as d,j as m}from"./index-_kLejrJI.js";import{s as u}from"./index-6zGE5DCB.js";var b=function(){return s(s({},r(m(),["component"])),{},{ellipsis:{type:[Boolean,Object],default:void 0}})},t=function(o,a){var i=a.slots,l=a.attrs,e=o.ellipsis;x(p(e)!=="object"||!e||!("expandable"in e)&&!("rows"in e),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props.");var c=s(s({},o),{},{ellipsis:e&&p(e)==="object"?r(e,["expandable","rows"]):e,component:"span"},l);return u(d,c,i)};t.displayName="ATypographyText";t.inheritAttrs=!1;t.props=b();const T=t;export{T as _};