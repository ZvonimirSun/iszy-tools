import{b as e,f as c,w as f,d as m,B as _,o as g,g as v}from"./index-00ba3440.js";import{a as y}from"./index-bce8d3cc.js";var b=["ellipsis","rel"],k=function(){return g(e(e({},v()),{},{ellipsis:{type:Boolean,default:void 0}}),["component"])},r=function(l,o){var d=o.slots,u=o.attrs,s=e(e({},l),u),t=s.ellipsis,a=s.rel,n=c(s,b);f(m(t)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var p=e(e({},n),{},{rel:a===void 0&&n.target==="_blank"?"noopener noreferrer":a,ellipsis:!!t,component:"a"});return delete p.navigate,y(_,p,d)};r.displayName="ATypographyLink";r.inheritAttrs=!1;r.props=k();const L=r;export{L as _};
