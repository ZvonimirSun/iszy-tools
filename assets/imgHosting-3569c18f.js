import{b as r,K as n,a0 as g,m}from"./index.js";const t=r().modules.imgHosting,f=n("imgHosting",{persist:!0,state:()=>({imgList:[]}),getters:{uploader(){return t.uploader},config(){return i=>t.configs[i]},commonConfig(){return t.commonConfig}},actions:{saveConfig({uploader:i,config:s}={}){t.uploader=i,t.configs[i]=s},addImage({name:i,url:s}={}){i&&s&&this.imgList.unshift({name:i,url:s,id:g()})},removeImage({id:i}={}){for(const s in this.imgList||[])this.imgList[s].id===i&&this.imgList.splice(parseInt(s),1)},async importConfig({uploader:i="",imgList:s=[],configs:e={},commonConfig:o={renameTimeStamp:!0}}){if(typeof i=="string"&&Array.isArray(s)&&e&&o)this.imgList=s,t.uploader=i,t.configs=e,t.commonConfig=m(t.commonConfig,o);else throw new Error("配置有误")}}});export{f as u};
