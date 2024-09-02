import{h as N,j as T,u as A,k as v,ah as $,r as C,R as z,al as I,bE as d,z as g,K as y,cr as o,a3 as L,L as O,v as h,aO as R,b6 as j,cs as w,ct as k,t as V}from"./index-CReUdWLV.js";const Y=N({prefixCls:{type:String}}),x=T({name:"ElSpaceItem",props:Y,setup(e,{slots:u}){const p=A("space"),r=v(()=>`${e.prefixCls||p.b()}__item`);return()=>$("div",{class:r.value},C(u,"default"))}}),P={small:8,default:12,large:16};function _(e){const u=A("space"),p=v(()=>[u.b(),u.m(e.direction),e.class]),r=z(0),i=z(0),S=v(()=>{const t=e.wrap||e.fill?{flexWrap:"wrap"}:{},n={alignItems:e.alignment},l={rowGap:`${i.value}px`,columnGap:`${r.value}px`};return[t,n,l,e.style]}),f=v(()=>e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{});return I(()=>{const{size:t="small",wrap:n,direction:l,fill:a}=e;if(d(t)){const[s=0,c=0]=t;r.value=s,i.value=c}else{let s;g(t)?s=t:s=P[t||"small"]||P.small,(n||a)&&l==="horizontal"?r.value=i.value=s:l==="horizontal"?(r.value=s,i.value=0):(i.value=s,r.value=0)}}),{classes:p,containerStyle:S,itemStyle:f}}const G=N({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:h([String,Object,Array]),default:""},style:{type:h([String,Array,Object]),default:""},alignment:{type:h(String),default:"center"},prefixCls:{type:String},spacer:{type:h([Object,String,Number,Array]),default:null,validator:e=>L(e)||g(e)||R(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:j,validator:e=>g(e)||d(e)&&e.length===2&&e.every(g)}}),B=T({name:"ElSpace",props:G,setup(e,{slots:u}){const{classes:p,containerStyle:r,itemStyle:i}=_(e);function S(f,t="",n=[]){const{prefixCls:l}=e;return f.forEach((a,s)=>{w(a)?d(a.children)&&a.children.forEach((c,m)=>{w(c)&&d(c.children)?S(c.children,`${t+m}-`,n):n.push(y(x,{style:i.value,prefixCls:l,key:`nested-${t+m}`},{default:()=>[c]},o.PROPS|o.STYLE,["style","prefixCls"]))}):k(a)&&n.push(y(x,{style:i.value,prefixCls:l,key:`LoopKey${t+s}`},{default:()=>[a]},o.PROPS|o.STYLE,["style","prefixCls"]))}),n}return()=>{var f;const{spacer:t,direction:n}=e,l=C(u,"default",{key:0},()=>[]);if(((f=l.children)!=null?f:[]).length===0)return null;if(d(l.children)){let a=S(l.children);if(t){const s=a.length-1;a=a.reduce((c,m,E)=>{const b=[...c,m];return E!==s&&b.push(y("span",{style:[i.value,n==="vertical"?"width: 100%":null],key:E},[L(t)?t:O(t,o.TEXT)],o.STYLE)),b},[])}return y("div",{class:p.value,style:r.value},a,o.STYLE|o.CLASS)}return l.children}}}),W=V(B);export{W as E};
