import{j as I,a6 as N,R as b,o as w,F as h,K as n,w as r,G as m,m as i,L as v,I as x,$ as E,N as P}from"./index-B64UzQ7O.js";import{a as C,E as U}from"./el-form-item-kovEj_mb.js";import{E as y}from"./el-input-number-C7iANaec.js";import"./castArray-0GIcrlWO.js";import"./index-CSyJimct.js";const B={"h-full":"","w-full":"",flex:"","flex-col":"","gap-2":"","overflow-auto":""},R={flex:"","flex-wrap":"","gap-2":""},k={flex:"","flex-1":"","gap-2":"","overflow-auto":""},J={"h-full":"","flex-1":"","overflow-auto":""},M={"h-full":"","flex-1":"","overflow-auto":""},$=I({__name:"lodCalculator",setup(O){const l=N({ppi:"96",pixelSize:"0.26",scaleDomination:"295829355.454566",resolution:"78271.51696402059"}),o=N({ppi:96,pixelSize:.26,count:21,scaleDomination:295829355454566e-6,resolution:78271.51696402059,lod:0}),c=b(""),d=b("");function V(t){if(!t)return;const e=Number.parseFloat(t);Number.isNaN(e)||(o.ppi=e,l.pixelSize=(.0254/o.ppi*1e3).toFixed(2),o.pixelSize=Number.parseFloat(l.pixelSize),l.scaleDomination?p(l.scaleDomination):l.resolution&&f(l.resolution))}function D(t){if(!t)return;const e=Number.parseFloat(t);Number.isNaN(e)||(o.pixelSize=e,l.ppi=(.0254/o.pixelSize*1e3).toFixed(3),o.ppi=Number.parseFloat(l.ppi),l.scaleDomination?p(l.scaleDomination):l.resolution&&f(l.resolution))}function p(t){if(!t)return;const e=Number.parseFloat(t);Number.isNaN(e)||(o.scaleDomination=e,l.resolution=(o.scaleDomination/o.ppi*.0254).toPrecision(11),o.resolution=Number.parseFloat(l.resolution))}function f(t){if(!t)return;const e=Number.parseFloat(t);Number.isNaN(e)||(o.resolution=e,l.scaleDomination=(o.resolution/.0254*o.ppi).toPrecision(11),o.scaleDomination=Number.parseFloat(l.scaleDomination))}function S(){o.count&&(o.count<1?o.count=1:o.count<o.lod+1&&(o.lod=o.count-1))}function g(){let t;o.lod===0?t=o.resolution:t=o.resolution*2**o.lod;const e=[];for(let a=0;a<o.count;a++){const u=t/2**a;e.push({lod:a,resolution:Number.parseFloat(u.toPrecision(11)),scaleDomination:Number.parseFloat((u/.0254*o.ppi).toPrecision(11))})}c.value=JSON.stringify(e,null,2),d.value=JSON.stringify(e.map(a=>a.resolution),null,2)}return(t,e)=>{const a=E,u=C,_=y,F=P,z=U;return w(),h("div",B,[n(z,{"label-width":130},{default:r(()=>[m("div",R,[n(u,{label:"屏幕分辨率",class:"form-item"},{default:r(()=>[n(a,{modelValue:i(l).ppi,"onUpdate:modelValue":e[0]||(e[0]=s=>i(l).ppi=s),onInput:V},null,8,["modelValue"])]),_:1}),n(u,{label:"像元大小(mm)",class:"form-item"},{default:r(()=>[n(a,{modelValue:i(l).pixelSize,"onUpdate:modelValue":e[1]||(e[1]=s=>i(l).pixelSize=s),onInput:D},null,8,["modelValue"])]),_:1}),n(u,{label:"切片层级数",class:"form-item"},{default:r(()=>[n(_,{modelValue:i(o).count,"onUpdate:modelValue":e[2]||(e[2]=s=>i(o).count=s),modelModifiers:{number:!0},"controls-position":"right",min:0,step:1,onChange:S},null,8,["modelValue"])]),_:1}),n(u,{label:"ScaleDomination",class:"form-item"},{default:r(()=>[n(a,{modelValue:i(l).scaleDomination,"onUpdate:modelValue":e[3]||(e[3]=s=>i(l).scaleDomination=s),onInput:p},null,8,["modelValue"])]),_:1}),n(u,{label:"Resolution",class:"form-item"},{default:r(()=>[n(a,{modelValue:i(l).resolution,"onUpdate:modelValue":e[4]||(e[4]=s=>i(l).resolution=s),onInput:f},null,8,["modelValue"])]),_:1}),n(u,{label:"当前层级",class:"form-item"},{default:r(()=>[n(_,{modelValue:i(o).lod,"onUpdate:modelValue":e[5]||(e[5]=s=>i(o).lod=s),modelModifiers:{number:!0},"controls-position":"right",min:0,max:i(o).count,step:1},null,8,["modelValue","max"])]),_:1}),n(u,{class:"form-item"},{default:r(()=>[n(F,{type:"primary",onClick:g},{default:r(()=>[v(" 生成 ")]),_:1})]),_:1})])]),_:1}),m("div",k,[m("div",J,[m("pre",null,x(i(c)),1)]),m("div",M,[m("pre",null,x(i(d)),1)])])])}}});export{$ as default};