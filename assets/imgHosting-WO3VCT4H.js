import{u as r,d as n,m}from"./index-j7kdK-H8.js";import{v as g}from"./index-6ZCt6h3G.js";const s=r().modules.imgHosting,u=n("imgHosting",{persist:!0,state:()=>({imgList:[]}),getters:{uploader(){return s.uploader},config(){return i=>s.configs[i]},commonConfig(){return s.commonConfig}},actions:{saveConfig({uploader:i,config:t}={}){s.uploader=i,s.configs[i]=t},addImage({name:i,url:t}={}){i&&t&&this.imgList.unshift({name:i,url:t,id:g()})},removeImage({id:i}={}){for(const t in this.imgList||[])this.imgList[t].id===i&&this.imgList.splice(parseInt(t),1)},async importConfig({uploader:i="",imgList:t=[],configs:o={},commonConfig:e={renameTimeStamp:!0}}){if(typeof i=="string"&&Array.isArray(t)&&o&&e)this.imgList=t,s.uploader=i,s.configs=o,s.commonConfig=m(s.commonConfig,e);else throw new Error("配置有误")}}});export{u};
