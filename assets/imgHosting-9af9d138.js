import{K as r,F as n,a6 as m}from"./index.js";import{v as g}from"./v4-c87ad79c.js";const t=r().modules.imgHosting,u=n("imgHosting",{persist:!0,state:()=>({imgList:[]}),getters:{uploader(){return t.uploader},config(){return i=>t.configs[i]},commonConfig(){return t.commonConfig}},actions:{saveConfig({uploader:i,config:s}={}){t.uploader=i,t.configs[i]=s},addImage({name:i,url:s}={}){i&&s&&this.imgList.unshift({name:i,url:s,id:g()})},removeImage({id:i}={}){for(const s in this.imgList||[])this.imgList[s].id===i&&this.imgList.splice(parseInt(s),1)},async importConfig({uploader:i="",imgList:s=[],configs:o={},commonConfig:e={renameTimeStamp:!0}}){if(typeof i=="string"&&Array.isArray(s)&&o&&e)this.imgList=s,t.uploader=i,t.configs=o,t.commonConfig=m(t.commonConfig,e);else throw new Error("配置有误")}}});export{u};
