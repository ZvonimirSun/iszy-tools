import{aE as N,B as A,C as V,o as i,f as s,g as k,l as f,w as m,x as b,F as x,r as _,D as p,n as I,s as C,G as h,E as O,t as M,e as U}from"./index.js";import{a as B,E as T}from"./el-form-item-LcqEIrjc.js";import"./el-tag-GnbAOWS9.js";import{E as $,a as G}from"./el-select-znE5dy1_.js";import"./el-scrollbar-vz8xv5bG.js";import"./el-popper-Ff1rQQUh.js";import{E as H}from"./el-switch-30e424rm.js";import{E as L}from"./el-input-number-DD7AKzOB.js";import{E as W}from"./el-upload-CxrwRfDG.js";import"./el-progress-VUylqApT.js";import{c as j}from"./createFile-0-klzpmE.js";import"./castArray-d3CJQxAY.js";import"./index-m_IIyYV3.js";import"./isEqual-bzcHzczw.js";import"./hasIn-fy4vryli.js";import"./strings-_q1vyZcY.js";import"./toInteger-glj0E7Ay.js";import"./toFinite-E8lSThFp.js";import"./isUndefined-IZwZ21d-.js";import"./index-F28HJ5u4.js";const P=[{key:"Difficulty",label:"难度",type:"select",default:"None",options:[{value:"None",label:"正常"},{value:"Easy",label:"简单"},{value:"Difficult",label:"困难"}]},{key:"DayTimeSpeedRate",label:"白天时速",type:"number",default:1,min:.1,max:5,formatter:e=>e.toFixed(6)},{key:"NightTimeSpeedRate",label:"夜晚时速",type:"number",default:1,min:.1,max:5,formatter:e=>e.toFixed(6)},{key:"ExpRate",label:"经验倍率",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PalCaptureRate",label:"帕鲁捕获几率",type:"number",default:1,min:.5,max:2,formatter:e=>e.toFixed(6)},{key:"PalSpawnNumRate",label:"帕鲁重生数量",type:"number",default:1,min:.5,formatter:e=>e.toFixed(6)},{key:"PalDamageRateAttack",label:"帕鲁伤害倍率",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PalDamageRateDefense",label:"帕鲁受伤倍率",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PlayerDamageRateAttack",label:"玩家伤害倍率",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PlayerDamageRateDefense",label:"玩家受伤倍率",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PlayerStomachDecreaceRate",label:"玩家饱腹感下降速度",type:"number",default:1,min:.1,max:5,formatter:e=>e.toFixed(6)},{key:"PlayerStaminaDecreaceRate",label:"玩家体力下降速度",type:"number",default:1,min:.1,max:5,formatter:e=>e.toFixed(6)},{key:"PlayerAutoHPRegeneRate",label:"玩家血量恢复速度",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PlayerAutoHpRegeneRateInSleep",label:"玩家睡眠血量恢复速度",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PalStomachDecreaceRate",label:"帕鲁饱腹感下降速度",type:"number",default:1,min:.1,max:5,formatter:e=>e.toFixed(6)},{key:"PalStaminaDecreaceRate",label:"玩家体力下降速度",type:"number",default:1,min:.1,max:5,formatter:e=>e.toFixed(6)},{key:"PalAutoHPRegeneRate",label:"帕鲁血量恢复速度",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PalAutoHpRegeneRateInSleep",label:"帕鲁睡眠血量恢复速度",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"BuildObjectDamageRate",label:"建筑受伤倍率",type:"number",default:1,min:.5,max:3,formatter:e=>e.toFixed(6)},{key:"BuildObjectDeteriorationDamageRate",label:"建筑劣化速率",type:"number",default:1,min:0,max:10,formatter:e=>e.toFixed(6)},{key:"CollectionDropRate",label:"采集掉落率",type:"number",default:1,min:.5,formatter:e=>e.toFixed(6)},{key:"CollectionObjectHpRate",label:"采集对象血量倍率",type:"number",default:1,min:.5,max:3,formatter:e=>e.toFixed(6)},{key:"CollectionObjectRespawnSpeedRate",label:"采集对象重生速率",type:"number",default:1,min:.5,max:3,formatter:e=>e.toFixed(6)},{key:"EnemyDropItemRate",label:"怪物掉落倍率",type:"number",default:1,min:.5,formatter:e=>e.toFixed(6)},{key:"DeathPenalty",label:"死亡惩罚",type:"select",default:"All",options:[{value:"None",label:"不掉落"},{value:"Item",label:"仅掉落道具"},{value:"ItemAndEquipment",label:"掉落道具和装备"},{value:"All",label:"全部掉落"}]},{key:"bEnablePlayerToPlayerDamage",label:"玩家之间伤害",type:"switch",default:!1},{key:"bEnableFriendlyFire",label:"友方伤害",type:"switch",default:!1},{key:"bEnableInvaderEnemy",label:"袭击事件",type:"switch",default:!0},{key:"bActiveUNKO",label:"大便",type:"switch",default:!1},{key:"bEnableAimAssistPad",label:"手柄辅助瞄准",type:"switch",default:!0},{key:"bEnableAimAssistKeyboard",label:"键盘辅助瞄准",type:"switch",default:!1},{key:"DropItemMaxNum",label:"最大掉落数",type:"number",default:3e3},{key:"DropItemMaxNum_UNKO",label:"最大掉落大便数",type:"number",default:100},{key:"BaseCampMaxNum",label:"最大基地数",type:"number",default:128},{key:"BaseCampWorkerMaxNum",label:"最大基地内工人数",type:"number",default:20},{key:"DropItemAliveMaxHours",label:"掉落物保存时间",type:"number",default:1,formatter:e=>e.toFixed(6)},{key:"bAutoResetGuildNoOnlinePlayers",label:"不在线玩家自动退出公会",type:"switch",default:!1},{key:"AutoResetGuildTimeNoOnlinePlayers",label:"自动退出公会时间",type:"number",default:72,formatter:e=>e.toFixed(6)},{key:"GuildPlayerMaxNum",label:"工会最大人数",type:"number",default:20},{key:"PalEggDefaultHatchingTime",label:"巨大蛋孵化时间(h)",type:"number",default:1,formatter:e=>e.toFixed(6)},{key:"WorkSpeedRate",label:"工作效率",type:"number",default:1,formatter:e=>e.toFixed(6)},{key:"bIsMultiplay",label:"多人游戏",type:"switch",default:!1},{key:"bIsPvP",label:"PVP模式",type:"switch",default:!1},{key:"bCanPickupOtherGuildDeathPenaltyDrop",label:"其他公会死亡掉落物捡取",type:"switch",default:!1},{key:"bEnableNonLoginPenalty",label:"登陆惩罚?",type:"switch",default:!1},{key:"bEnableFastTravel",label:"快速旅行",type:"switch",default:!0},{key:"bIsStartLocationSelectByMap",label:"选择出生点",type:"switch",default:!0},{key:"bExistPlayerAfterLogout",label:"登出自动关服",type:"switch",default:!1},{key:"bEnableDefenseOtherGuildPlayer",label:"工会间伤害",type:"switch",default:!1},{key:"CoopPlayerMaxNum",label:"CoopPlayerMaxNum",type:"number",default:4},{key:"ServerPlayerMaxNum",label:"服务器最大玩家人数",type:"number",default:32},{key:"ServerName",label:"服务器名称",type:"input",default:"Palworld Server"},{key:"ServerDescription",label:"服务器描述",type:"input",default:""},{key:"AdminPassword",label:"管理员密码",type:"input",default:""},{key:"ServerPassword",label:"服务器密码",type:"input",default:""},{key:"PublicPort",label:"服务器端口",type:"number",default:8211},{key:"PublicIP",label:"服务器IP",type:"input",default:""},{key:"RCONEnabled",label:"RCONEnabled",type:"switch",default:!1},{key:"RCONPort",label:"RCONPort",type:"number",default:25575},{key:"Region",label:"地区",type:"input",default:""},{key:"bUseAuth",label:"bUseAuth",type:"switch",default:!0},{key:"BanListURL",label:"封禁名单地址",type:"input",default:"https://api.palworldgame.com/api/banlist.txt"}];function c(){return N(P)}function K(e){if(!e)throw new Error("ini is empty");const l=c();try{const n={};e.replaceAll(`
`,"").replaceAll("\r","").slice(0,-1).split("OptionSettings=(")[1].split(",").forEach(t=>{const u=t.split("="),d=u[0].trim();let r=u[1].trim();r.startsWith('"')&&r.endsWith('"')&&(r=r.slice(1,-1)),n[d]=r});for(const t of P){let u;if(n[t.key]!=null)switch(u=n[t.key],t.type){case"select":t.default=u;break;case"number":t.default=Number(u);break;case"switch":t.default=u==="True";break;default:t.default=u;break}}}catch{throw new Error("wrong ini format")}return l}function q(e){var n;let l="";for(const t of e)switch(t.type){case"select":l+=`${t.key}=${t.default},`;break;case"number":l+=`${t.key}=${t.formatter?t.formatter(t.default||0):(n=t.default)==null?void 0:n.toString()},`;break;case"switch":l+=`${t.key}=${t.default?"True":"False"},`;break;default:l+=`${t.key}="${t.default}",`;break}return`[/Script/Pal.PalGameWorldSettings]
OptionSettings=(${l.slice(0,-1)})

`}const z={flex:"","flex-col":"","gap-4":"","w-full":"","h-full":"","overflow-auto":"","items-center":""},J={flex:"","flex-wrap":"","gap-4":""},Q={flex:"","flex-wrap":""},X=A({__name:"palServerSettings",setup(e){const l=V(c());async function n(d){try{const r=await d.text();l.splice(0,l.length,...K(r)),h.success("解析成功")}catch{h.error("解析失败")}return!1}function t(){const d=q(l);j(d,"PalWorldSettings.ini")}function u(){l.splice(0,l.length,...c())}return(d,r)=>{const y=O,w=W,E=L,F=H,R=$,v=G,S=M,D=B,g=T;return i(),s("div",z,[k("div",J,[f(w,{"before-upload":n,"show-file-list":!1,accept:".ini"},{default:m(()=>[f(y,{type:"primary"},{default:m(()=>[b(" 解析配置 ")]),_:1})]),_:1}),f(y,{onClick:u},{default:m(()=>[b(" 恢复默认 ")]),_:1}),f(y,{onClick:t},{default:m(()=>[b(" 下载配置 ")]),_:1})]),f(g,{"flex-1":"","overflow-auto":"","label-width":"21rem",onSubmit:r[0]||(r[0]=C(()=>{},["prevent"]))},{default:m(()=>[k("div",Q,[(i(!0),s(x,null,_(I(l),a=>(i(),p(D,{key:a.key,label:a.label},{default:m(()=>[a.type==="number"?(i(),p(E,{key:0,modelValue:a.default,"onUpdate:modelValue":o=>a.default=o,min:a.min,max:a.max},null,8,["modelValue","onUpdate:modelValue","min","max"])):a.type==="switch"?(i(),p(F,{key:1,modelValue:a.default,"onUpdate:modelValue":o=>a.default=o},null,8,["modelValue","onUpdate:modelValue"])):a.type==="select"?(i(),p(v,{key:2,modelValue:a.default,"onUpdate:modelValue":o=>a.default=o},{default:m(()=>[(i(!0),s(x,null,_(a.options,o=>(i(),p(R,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):(i(),p(S,{key:3,modelValue:a.default,"onUpdate:modelValue":o=>a.default=o},null,8,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["label"]))),128))])]),_:1})])}}}),xe=U(X,[["__scopeId","data-v-baa4a461"]]);export{xe as default};
