import{bx as C,k as I,dA as O,R as M,dB as U,a4 as B,E as k,r as i,F as y,K as p,w as s,L as T,N as x,Y as w,Z as P,x as _,q as d,W as $,$ as L,aA as E,a0 as H}from"./index-CCHXUW6W.js";import{E as W,a as G}from"./el-form-item-DVvjP_4C.js";/* empty css               */import{a as j,E as K}from"./el-select-DWFpuwd8.js";import"./el-popper-D7uO62g1.js";import{E as q}from"./el-switch-D4WeuAeX.js";import{E as z}from"./el-input-number-CCZycv4E.js";import{E as Y}from"./el-upload-FwI4VunL.js";import"./el-progress-Cc7XuLtJ.js";import{c as Z}from"./createFile-BU-_GaZ4.js";import"./castArray-DGYX5zrV.js";import"./clone-VaB1VCni.js";import"./index-BvrITQOB.js";import"./strings-C0XhqU0o.js";import"./Router-DUIpt0HJ.js";import"./_baseIteratee-jBbSyueY.js";import"./index-B9ROuUt4.js";import"./index-VwAMpcpz.js";import"./isUndefined-DCTLXrZ8.js";import"./index-BQyZLjVJ.js";const J=[{key:"Difficulty",label:"难度",type:"select",default:"None",options:[{value:"None",label:"正常"},{value:"Easy",label:"简单"},{value:"Difficult",label:"困难"}]},{key:"DayTimeSpeedRate",label:"白天时速",type:"number",default:1,min:.1,max:5,formatter:e=>e.toFixed(6)},{key:"NightTimeSpeedRate",label:"夜晚时速",type:"number",default:1,min:.1,max:5,formatter:e=>e.toFixed(6)},{key:"ExpRate",label:"经验倍率",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PalCaptureRate",label:"帕鲁捕获几率",type:"number",default:1,min:.5,max:2,formatter:e=>e.toFixed(6)},{key:"PalSpawnNumRate",label:"帕鲁重生数量",type:"number",default:1,min:.5,formatter:e=>e.toFixed(6)},{key:"PalDamageRateAttack",label:"帕鲁伤害倍率",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PalDamageRateDefense",label:"帕鲁受伤倍率",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PlayerDamageRateAttack",label:"玩家伤害倍率",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PlayerDamageRateDefense",label:"玩家受伤倍率",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PlayerStomachDecreaceRate",label:"玩家饱腹感下降速度",type:"number",default:1,min:.1,max:5,formatter:e=>e.toFixed(6)},{key:"PlayerStaminaDecreaceRate",label:"玩家体力下降速度",type:"number",default:1,min:.1,max:5,formatter:e=>e.toFixed(6)},{key:"PlayerAutoHPRegeneRate",label:"玩家血量恢复速度",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PlayerAutoHpRegeneRateInSleep",label:"玩家睡眠血量恢复速度",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PalStomachDecreaceRate",label:"帕鲁饱腹感下降速度",type:"number",default:1,min:.1,max:5,formatter:e=>e.toFixed(6)},{key:"PalStaminaDecreaceRate",label:"玩家体力下降速度",type:"number",default:1,min:.1,max:5,formatter:e=>e.toFixed(6)},{key:"PalAutoHPRegeneRate",label:"帕鲁血量恢复速度",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PalAutoHpRegeneRateInSleep",label:"帕鲁睡眠血量恢复速度",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"BuildObjectDamageRate",label:"建筑受伤倍率",type:"number",default:1,min:.5,max:3,formatter:e=>e.toFixed(6)},{key:"BuildObjectDeteriorationDamageRate",label:"建筑劣化速率",type:"number",default:1,min:0,max:10,formatter:e=>e.toFixed(6)},{key:"CollectionDropRate",label:"采集掉落率",type:"number",default:1,min:.5,formatter:e=>e.toFixed(6)},{key:"CollectionObjectHpRate",label:"采集对象血量倍率",type:"number",default:1,min:.5,max:3,formatter:e=>e.toFixed(6)},{key:"CollectionObjectRespawnSpeedRate",label:"采集对象重生速率",type:"number",default:1,min:.5,max:3,formatter:e=>e.toFixed(6)},{key:"EnemyDropItemRate",label:"怪物掉落倍率",type:"number",default:1,min:.5,formatter:e=>e.toFixed(6)},{key:"DeathPenalty",label:"死亡惩罚",type:"select",default:"All",options:[{value:"None",label:"不掉落"},{value:"Item",label:"仅掉落道具"},{value:"ItemAndEquipment",label:"掉落道具和装备"},{value:"All",label:"全部掉落"}]},{key:"bEnablePlayerToPlayerDamage",label:"玩家之间伤害",type:"switch",default:!1},{key:"bEnableFriendlyFire",label:"友方伤害",type:"switch",default:!1},{key:"bEnableInvaderEnemy",label:"袭击事件",type:"switch",default:!0},{key:"bActiveUNKO",label:"大便",type:"switch",default:!1},{key:"bEnableAimAssistPad",label:"手柄辅助瞄准",type:"switch",default:!0},{key:"bEnableAimAssistKeyboard",label:"键盘辅助瞄准",type:"switch",default:!1},{key:"DropItemMaxNum",label:"最大掉落数",type:"number",default:3e3},{key:"DropItemMaxNum_UNKO",label:"最大掉落大便数",type:"number",default:100},{key:"BaseCampMaxNum",label:"最大基地数",type:"number",default:128},{key:"BaseCampWorkerMaxNum",label:"最大基地内工人数",type:"number",default:20},{key:"DropItemAliveMaxHours",label:"掉落物保存时间",type:"number",default:1,formatter:e=>e.toFixed(6)},{key:"bAutoResetGuildNoOnlinePlayers",label:"不在线玩家自动退出公会",type:"switch",default:!1},{key:"AutoResetGuildTimeNoOnlinePlayers",label:"自动退出公会时间",type:"number",default:72,formatter:e=>e.toFixed(6)},{key:"GuildPlayerMaxNum",label:"工会最大人数",type:"number",default:20},{key:"PalEggDefaultHatchingTime",label:"巨大蛋孵化时间(h)",type:"number",default:1,formatter:e=>e.toFixed(6)},{key:"WorkSpeedRate",label:"工作效率",type:"number",default:1,formatter:e=>e.toFixed(6)},{key:"bIsMultiplay",label:"多人游戏",type:"switch",default:!1},{key:"bIsPvP",label:"PVP模式",type:"switch",default:!1},{key:"bCanPickupOtherGuildDeathPenaltyDrop",label:"其他公会死亡掉落物捡取",type:"switch",default:!1},{key:"bEnableNonLoginPenalty",label:"登陆惩罚?",type:"switch",default:!1},{key:"bEnableFastTravel",label:"快速旅行",type:"switch",default:!0},{key:"bIsStartLocationSelectByMap",label:"选择出生点",type:"switch",default:!0},{key:"bExistPlayerAfterLogout",label:"登出自动关服",type:"switch",default:!1},{key:"bEnableDefenseOtherGuildPlayer",label:"工会间伤害",type:"switch",default:!1},{key:"CoopPlayerMaxNum",label:"CoopPlayerMaxNum",type:"number",default:4},{key:"ServerPlayerMaxNum",label:"服务器最大玩家人数",type:"number",default:32},{key:"ServerName",label:"服务器名称",type:"input",default:"Palworld Server"},{key:"ServerDescription",label:"服务器描述",type:"input",default:""},{key:"AdminPassword",label:"管理员密码",type:"input",default:""},{key:"ServerPassword",label:"服务器密码",type:"input",default:""},{key:"PublicPort",label:"服务器端口",type:"number",default:8211},{key:"PublicIP",label:"服务器IP",type:"input",default:""},{key:"RCONEnabled",label:"RCONEnabled",type:"switch",default:!1},{key:"RCONPort",label:"RCONPort",type:"number",default:25575},{key:"Region",label:"地区",type:"input",default:""},{key:"bUseAuth",label:"bUseAuth",type:"switch",default:!0},{key:"BanListURL",label:"封禁名单地址",type:"input",default:"https://api.palworldgame.com/api/banlist.txt"}];function h(){return C(J)}function Q(e){if(!e)throw new Error("ini is empty");const r=h();try{const u={};e.replaceAll(`
`,"").replaceAll("\r","").slice(0,-1).split("OptionSettings=(")[1].split(",").forEach(t=>{const a=t.split("="),b=a[0].trim();let m=a[1].trim();m.startsWith('"')&&m.endsWith('"')&&(m=m.slice(1,-1)),u[b]=m});for(const t of r){let a;if(u[t.key]!=null)switch(a=u[t.key],t.type){case"select":t.default=a;break;case"number":t.default=Number(a);break;case"switch":t.default=a==="True";break;default:t.default=a;break}}}catch{throw new Error("wrong ini format")}return r}function X(e){var u;let r="";for(const t of e)switch(t.type){case"select":r+=`${t.key}=${t.default},`;break;case"number":r+=`${t.key}=${t.formatter?t.formatter(t.default||0):(u=t.default)==null?void 0:u.toString()},`;break;case"switch":r+=`${t.key}=${t.default?"True":"False"},`;break;default:r+=`${t.key}="${t.default}",`;break}return`[/Script/Pal.PalGameWorldSettings]
OptionSettings=(${r.slice(0,-1)})

`}const ee={"h-full":"","w-full":"",flex:"","flex-col":"","items-center":"","gap-4":"","overflow-auto":""},te={flex:"","flex-wrap":"","gap-4":""},le={class:"v-scroll"},ae={class:"content"},re=I({__name:"palServerSettings",setup(e){O(f=>({fb8d64bc:_(t),"0673142a":_(u)}));const r=M(null),{width:u,height:t}=U(r),a=B(h());async function b(f){try{const o=await f.text();a.splice(0,a.length,...Q(o)),E.success("解析成功")}catch{E.error("解析失败")}return!1}function m(){const f=X(a);Z(f,"PalWorldSettings.ini")}function F(){a.splice(0,a.length,...h())}return(f,o)=>{const c=T,R=Y,v=z,S=q,g=K,D=j,N=$,A=W,V=G;return i(),k("div",ee,[y("div",te,[p(R,{"before-upload":b,"show-file-list":!1,accept:".ini"},{default:s(()=>[p(c,{type:"primary"},{default:s(()=>o[1]||(o[1]=[x(" 解析配置 ")])),_:1})]),_:1}),p(c,{onClick:F},{default:s(()=>o[2]||(o[2]=[x(" 恢复默认 ")])),_:1}),p(c,{onClick:m},{default:s(()=>o[3]||(o[3]=[x(" 下载配置 ")])),_:1})]),p(V,{"label-width":"17rem","position-relative":"","w-full":"","flex-1":"","overflow-auto":"",onSubmit:o[0]||(o[0]=L(()=>{},["prevent"]))},{default:s(()=>[y("div",{ref_key:"scrollContainer",ref:r,class:"scroll-container","h-full":"","w-full":""},[y("div",le,[y("div",ae,[(i(!0),k(w,null,P(_(a),l=>(i(),d(A,{key:l.key,label:l.label},{default:s(()=>[l.type==="number"?(i(),d(v,{key:0,modelValue:l.default,"onUpdate:modelValue":n=>l.default=n,min:l.min,max:l.max},null,8,["modelValue","onUpdate:modelValue","min","max"])):l.type==="switch"?(i(),d(S,{key:1,modelValue:l.default,"onUpdate:modelValue":n=>l.default=n},null,8,["modelValue","onUpdate:modelValue"])):l.type==="select"?(i(),d(D,{key:2,modelValue:l.default,"onUpdate:modelValue":n=>l.default=n},{default:s(()=>[(i(!0),k(w,null,P(l.options,n=>(i(),d(g,{key:n.value,label:n.label,value:n.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):(i(),d(N,{key:3,modelValue:l.default,"onUpdate:modelValue":n=>l.default=n},null,8,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["label"]))),128))])])],512)]),_:1})])}}}),Re=H(re,[["__scopeId","data-v-31d916c0"]]);export{Re as default};
