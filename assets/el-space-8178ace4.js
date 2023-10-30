import{g as N,h as T,j as $,k as v,aG as B,r as A,y as b,aV as I,aB as d,as as g,a as y,aW as o,a8 as C,b as L,a5 as h,ar as O,aX as R,aY as z,aZ as V,x as Y}from"./index.js";const j=N({prefixCls:{type:String}}),P=T({name:"ElSpaceItem",props:j,setup(e,{slots:u}){const p=$("space"),i=v(()=>`${e.prefixCls||p.b()}__item`);return()=>B("div",{class:i.value},A(u,"default"))}}),w={small:8,default:12,large:16};function k(e){const u=$("space"),p=v(()=>[u.b(),u.m(e.direction),e.class]),i=b(0),n=b(0),m=v(()=>{const t=e.wrap||e.fill?{flexWrap:"wrap",marginBottom:`-${n.value}px`}:{},a={alignItems:e.alignment};return[t,a,e.style]}),f=v(()=>{const t={paddingBottom:`${n.value}px`,marginRight:`${i.value}px`},a=e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{};return[t,a]});return I(()=>{const{size:t="small",wrap:a,direction:r,fill:l}=e;if(d(t)){const[s=0,c=0]=t;i.value=s,n.value=c}else{let s;g(t)?s=t:s=w[t||"small"]||w.small,(a||l)&&r==="horizontal"?i.value=n.value=s:r==="horizontal"?(i.value=s,n.value=0):(n.value=s,i.value=0)}}),{classes:p,containerStyle:m,itemStyle:f}}const _=N({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:h([String,Object,Array]),default:""},style:{type:h([String,Array,Object]),default:""},alignment:{type:h(String),default:"center"},prefixCls:{type:String},spacer:{type:h([Object,String,Number,Array]),default:null,validator:e=>C(e)||g(e)||O(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:R,validator:e=>g(e)||d(e)&&e.length===2&&e.every(g)}}),W=T({name:"ElSpace",props:_,setup(e,{slots:u}){const{classes:p,containerStyle:i,itemStyle:n}=k(e);function m(f,t="",a=[]){const{prefixCls:r}=e;return f.forEach((l,s)=>{z(l)?d(l.children)&&l.children.forEach((c,S)=>{z(c)&&d(c.children)?m(c.children,`${t+S}-`,a):a.push(y(P,{style:n.value,prefixCls:r,key:`nested-${t+S}`},{default:()=>[c]},o.PROPS|o.STYLE,["style","prefixCls"]))}):V(l)&&a.push(y(P,{style:n.value,prefixCls:r,key:`LoopKey${t+s}`},{default:()=>[l]},o.PROPS|o.STYLE,["style","prefixCls"]))}),a}return()=>{var f;const{spacer:t,direction:a}=e,r=A(u,"default",{key:0},()=>[]);if(((f=r.children)!=null?f:[]).length===0)return null;if(d(r.children)){let l=m(r.children);if(t){const s=l.length-1;l=l.reduce((c,S,E)=>{const x=[...c,S];return E!==s&&x.push(y("span",{style:[n.value,a==="vertical"?"width: 100%":null],key:E},[C(t)?t:L(t,o.TEXT)],o.STYLE)),x},[])}return y("div",{class:p.value,style:i.value},l,o.STYLE|o.CLASS)}return r.children}}}),G=Y(W);export{G as E};
