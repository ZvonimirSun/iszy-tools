import{j as k,a4 as F,R as x,o as b,F as N,K as n,w as s,G as d,m as t,L as w,I as v,N as E,$ as C,a0 as h}from"./index-DjIPrjra.js";import{a as P,E as U}from"./el-form-item-RrmzVhMp.js";import{E as B}from"./el-input-number-DItgOFcb.js";import"./castArray-D-Mnq0oZ.js";import"./index-BJNFuM-W.js";const R={"h-full":"","w-full":"",flex:"","flex-col":"","gap-2":"","overflow-auto":""},J={flex:"","flex-wrap":"","gap-2":""},M={key:0,class:"i-icon-park-outline-edit"},O={key:1,class:"i-icon-park-outline-lock-one"},$={flex:""},j={flex:"","flex-1":"","gap-2":"","overflow-auto":""},G={"h-full":"","flex-1":"","overflow-auto":""},K={"h-full":"","flex-1":"","overflow-auto":""},L=k({__name:"lodCalculator",setup(T){const l=F({ppi:"96",pixelSize:"0.26",scaleDomination:"295829355.454566",resolution:"78271.51696402059"}),o=F({ppi:96,pixelSize:.26,count:21,scaleDomination:295829355454566e-6,resolution:78271.51696402059,lod:0}),V=x(""),D=x(""),u=x(!0);function f(i){if(!i)return;const e=Number.parseFloat(i);Number.isNaN(e)||(o.ppi=e,l.pixelSize=(.0254/o.ppi*1e3).toFixed(2),o.pixelSize=Number.parseFloat(l.pixelSize),u.value&&(l.scaleDomination?c(l.scaleDomination):l.resolution&&_(l.resolution)))}function g(i){if(!i)return;const e=Number.parseFloat(i);Number.isNaN(e)||(o.pixelSize=e,l.ppi=(.0254/o.pixelSize*1e3).toFixed(3),o.ppi=Number.parseFloat(l.ppi),u.value&&(l.scaleDomination?c(l.scaleDomination):l.resolution&&_(l.resolution)))}function c(i){if(!i)return;const e=Number.parseFloat(i);Number.isNaN(e)||(o.scaleDomination=e,u.value?(l.resolution=(o.scaleDomination/o.ppi*.0254).toPrecision(11),o.resolution=Number.parseFloat(l.resolution)):(l.ppi=(o.scaleDomination/o.resolution*.0254).toFixed(3),f(l.ppi)))}function _(i){if(!i)return;const e=Number.parseFloat(i);Number.isNaN(e)||(o.resolution=e,u.value?(l.scaleDomination=(o.resolution/.0254*o.ppi).toPrecision(11),o.scaleDomination=Number.parseFloat(l.scaleDomination)):(l.ppi=(o.scaleDomination/o.resolution*.0254).toFixed(3),f(l.ppi)))}function I(){o.count&&(o.count<1?o.count=1:o.count<o.lod+1&&(o.lod=o.count-1))}function y(){let i;o.lod===0?i=o.resolution:i=o.resolution*2**o.lod;const e=[];for(let r=0;r<o.count;r++){const p=i/2**r;e.push({lod:r,resolution:Number.parseFloat(p.toPrecision(11)),scaleDomination:Number.parseFloat((p/.0254*o.ppi).toPrecision(11))})}V.value=JSON.stringify(e,null,2),D.value=JSON.stringify(e.map(r=>r.resolution),null,2)}return(i,e)=>{const r=E,p=C,m=P,S=B,z=U;return b(),N("div",R,[n(z,{"label-width":130},{default:s(()=>[d("div",J,[n(m,{label:"屏幕分辨率",class:"form-item"},{default:s(()=>[n(p,{modelValue:t(l).ppi,"onUpdate:modelValue":e[1]||(e[1]=a=>t(l).ppi=a),readonly:!t(u),onInput:f},{append:s(()=>[n(r,{class:"edit-btn",onClick:e[0]||(e[0]=a=>u.value=!t(u))},{default:s(()=>[t(u)?(b(),N("i",O)):(b(),N("i",M))]),_:1})]),_:1},8,["modelValue","readonly"])]),_:1}),n(m,{label:"像元大小(mm)",class:"form-item"},{default:s(()=>[n(p,{modelValue:t(l).pixelSize,"onUpdate:modelValue":e[2]||(e[2]=a=>t(l).pixelSize=a),readonly:!t(u),onInput:g},null,8,["modelValue","readonly"])]),_:1}),n(m,{label:"切片层级数",class:"form-item"},{default:s(()=>[n(S,{modelValue:t(o).count,"onUpdate:modelValue":e[3]||(e[3]=a=>t(o).count=a),modelModifiers:{number:!0},"controls-position":"right",min:0,step:1,onChange:I},null,8,["modelValue"])]),_:1}),n(m,{label:"ScaleDomination",class:"form-item"},{default:s(()=>[n(p,{modelValue:t(l).scaleDomination,"onUpdate:modelValue":e[4]||(e[4]=a=>t(l).scaleDomination=a),onInput:c},null,8,["modelValue"])]),_:1}),n(m,{label:"Resolution",class:"form-item"},{default:s(()=>[d("div",$,[n(p,{modelValue:t(l).resolution,"onUpdate:modelValue":e[5]||(e[5]=a=>t(l).resolution=a),onInput:_},null,8,["modelValue"])])]),_:1}),n(m,{label:"当前层级",class:"form-item"},{default:s(()=>[n(S,{modelValue:t(o).lod,"onUpdate:modelValue":e[6]||(e[6]=a=>t(o).lod=a),modelModifiers:{number:!0},"controls-position":"right",min:0,max:t(o).count,step:1},null,8,["modelValue","max"])]),_:1}),n(m,{class:"form-item"},{default:s(()=>[n(r,{type:"primary",onClick:y},{default:s(()=>e[7]||(e[7]=[w(" 生成 ")])),_:1})]),_:1})])]),_:1}),d("div",j,[d("div",G,[d("pre",null,v(t(V)),1)]),d("div",K,[d("pre",null,v(t(D)),1)])])])}}}),X=h(L,[["__scopeId","data-v-4e77b82a"]]);export{X as default};
