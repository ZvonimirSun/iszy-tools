import{g as N,cA as v,ad as z,cB as A,h as E,az as I,j as V,y as _,k as p,aA as $,o as c,c as i,w as s,m as f,p as a,n as t,ac as q,ax as D,q as M,s as h,b as u,t as m,a as g,E as C,r as R,X as j,v as L,x as U}from"./index-2d447dfc.js";import{u as k,E as X}from"./el-popper-5f85067b.js";const F=N({title:String,confirmButtonText:String,cancelButtonText:String,confirmButtonType:{type:String,values:v,default:"primary"},cancelButtonType:{type:String,values:v,default:"text"},icon:{type:z,default:()=>A},iconColor:{type:String,default:"#f90"},hideIcon:{type:Boolean,default:!1},hideAfter:{type:Number,default:200},teleported:k.teleported,persistent:k.persistent,width:{type:[String,Number],default:150}}),G={confirm:o=>o instanceof MouseEvent,cancel:o=>o instanceof MouseEvent},H=E({name:"ElPopconfirm"}),J=E({...H,props:F,emits:G,setup(o,{emit:d}){const r=o,{t:y}=I(),n=V("popconfirm"),B=_(),T=()=>{var e,l;(l=(e=B.value)==null?void 0:e.onClose)==null||l.call(e)},P=p(()=>({width:$(r.width)})),S=e=>{d("confirm",e),T()},b=e=>{d("cancel",e),T()},w=p(()=>r.confirmButtonText||y("el.popconfirm.confirmButtonText")),x=p(()=>r.cancelButtonText||y("el.popconfirm.cancelButtonText"));return(e,l)=>(c(),i(t(X),j({ref_key:"tooltipRef",ref:B,trigger:"click",effect:"light"},e.$attrs,{"popper-class":`${t(n).namespace.value}-popover`,"popper-style":t(P),teleported:e.teleported,"fallback-placements":["bottom","top","right","left"],"hide-after":e.hideAfter,persistent:e.persistent}),{content:s(()=>[f("div",{class:a(t(n).b())},[f("div",{class:a(t(n).e("main"))},[!e.hideIcon&&e.icon?(c(),i(t(q),{key:0,class:a(t(n).e("icon")),style:D({color:e.iconColor})},{default:s(()=>[(c(),i(M(e.icon)))]),_:1},8,["class","style"])):h("v-if",!0),u(" "+m(e.title),1)],2),f("div",{class:a(t(n).e("action"))},[g(t(C),{size:"small",type:e.cancelButtonType==="text"?"":e.cancelButtonType,text:e.cancelButtonType==="text",onClick:b},{default:s(()=>[u(m(t(x)),1)]),_:1},8,["type","text"]),g(t(C),{size:"small",type:e.confirmButtonType==="text"?"":e.confirmButtonType,text:e.confirmButtonType==="text",onClick:S},{default:s(()=>[u(m(t(w)),1)]),_:1},8,["type","text"])],2)],2)]),default:s(()=>[e.$slots.reference?R(e.$slots,"reference",{key:0}):h("v-if",!0)]),_:3},16,["popper-class","popper-style","teleported","hide-after","persistent"]))}});var K=L(J,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popconfirm/src/popconfirm.vue"]]);const W=U(K);export{W as E};
