import{p as e,a as n,a6 as a,B as t,b as r,g as i,f as l,Q as o,e as c,a7 as s,o as m}from"./vendor.11098cc6.js";var d=async e=>{if(e)if(document.fullscreenElement)await document.exitFullscreen();else try{e.requestFullscreen?await e.requestFullscreen():e.webkitRequestFullScreen?await e.webkitRequestFullScreen():e.mozRequestFullScreen?await e.mozRequestFullScreen():e.msRequestFullscreen?await e.msRequestFullscreen():(void 0).$msg.error("不支持全屏")}catch(n){(void 0).$msg.error("无法进入全屏")}},u=".containerAll[data-v-06282012] {\n  height: calc(100% - 2.4rem);\n  margin-top: 2.4rem;\n  background: #fff;\n  box-shadow: 0 0.8rem 1rem rgba(36, 159, 253, 0.3);\n  border-radius: 0.8rem;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n}\n.containerAll .containerTitle[data-v-06282012] {\n  margin-top: -1.6rem;\n}\n.containerAll .containerTitle .typeName[data-v-06282012] {\n  margin-left: 3rem;\n  padding: 0.5rem 1.6rem;\n  height: 3.2rem;\n  display: inline-flex;\n  align-items: center;\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: 2.4rem;\n  color: #fff;\n  background-color: #16b0f6;\n  box-shadow: 0 0.8rem 1rem #16B0F64D;\n  border-radius: 0.8rem;\n}\n.containerAll .containerTitle .typeName .i-icon[data-v-06282012] {\n  font-size: 2.4rem;\n}\n.containerAll .containerTitle .typeName .i-icon + *[data-v-06282012] {\n  margin-left: 0.5rem;\n}\n.containerAll .containerTitle .typeName * + .i-icon[data-v-06282012] {\n  margin-left: 0.5rem;\n}\n.containerAll .containerTitle .typeName .fullScreen[data-v-06282012] {\n  cursor: pointer;\n}\n.containerAll .containerTitle .typeName .fullScreen.i-icon[data-v-06282012] {\n  font-size: 1.8rem;\n}\n.containerAll .main[data-v-06282012] {\n  padding: 0.8rem;\n  background: #fff;\n  flex: 1;\n  overflow-y: auto;\n  border-radius: 0.8rem;\n}";const f={name:"container",props:{name:String},components:{FullScreen:a,BackTop:t},methods:{fullScreen(){d.bind(this)(this.$refs.container)}}};e("data-v-06282012");const g={class:"containerAll"},p={class:"containerTitle"},v={class:"typeName"},b={class:"main",ref:"container"};function h(e,n,a,t,d,u){const f=r("FullScreen"),h=r("BackTop");return m(),i("div",g,[l("div",p,[l("div",v,[l("span",null,o(a.name||(e.$route.meta||{}).title||e.$route.name),1),c(f,{class:"fullScreen",title:"全屏",onClick:u.fullScreen,theme:"outline"},null,8,["onClick"])])]),l("div",b,[s(e.$slots,"default",{},void 0,!0),c(h,{target:()=>e.$refs.container,visibilityHeight:100},null,8,["target"])],512)])}n(),f.render=h,f.__scopeId="data-v-06282012";export{f as _};
