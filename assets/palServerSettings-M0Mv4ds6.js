import{bt as V,F as I,dB as O,t as M,dC as U,aE as B,J as u,K as k,ap as y,X as p,a1 as m,ar as x,T as P,ax as w,a0 as s,u as _,ay as T,a$ as E,as as $,az as H,aC as L}from"./index-Tr-dY9sd.js";import{a as G,E as W}from"./el-form-item-o0AvrUqD.js";/* empty css               */import{E as j,a as K}from"./el-select-y8RnV9rs.js";import"./Router-twqYWQ-l.js";import{E as z}from"./el-switch-HFbfTSMc.js";import{E as q}from"./el-input-number-l_ffA9_G.js";import{E as J}from"./el-upload-GCEBpkGB.js";import"./el-progress-2WR37Pi1.js";import{c as X}from"./createFile-5FJE592j.js";import"./castArray-7k1-08SJ.js";import"./index-aUgguFfQ.js";import"./strings-zrX5CzRm.js";import"./_baseIteratee-ZOUb0Lyv.js";import"./hasIn-H5lpYK--.js";import"./toInteger-27wOpi3m.js";import"./toFinite-SeW4l2Nd.js";import"./index-8CKH-yii.js";import"./index-34TzeCuF.js";const Q=[{key:"Difficulty",label:"难度",type:"select",default:"None",options:[{value:"None",label:"正常"},{value:"Easy",label:"简单"},{value:"Difficult",label:"困难"}]},{key:"DayTimeSpeedRate",label:"白天时速",type:"number",default:1,min:.1,max:5,formatter:e=>e.toFixed(6)},{key:"NightTimeSpeedRate",label:"夜晚时速",type:"number",default:1,min:.1,max:5,formatter:e=>e.toFixed(6)},{key:"ExpRate",label:"经验倍率",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PalCaptureRate",label:"帕鲁捕获几率",type:"number",default:1,min:.5,max:2,formatter:e=>e.toFixed(6)},{key:"PalSpawnNumRate",label:"帕鲁重生数量",type:"number",default:1,min:.5,formatter:e=>e.toFixed(6)},{key:"PalDamageRateAttack",label:"帕鲁伤害倍率",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PalDamageRateDefense",label:"帕鲁受伤倍率",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PlayerDamageRateAttack",label:"玩家伤害倍率",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PlayerDamageRateDefense",label:"玩家受伤倍率",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PlayerStomachDecreaceRate",label:"玩家饱腹感下降速度",type:"number",default:1,min:.1,max:5,formatter:e=>e.toFixed(6)},{key:"PlayerStaminaDecreaceRate",label:"玩家体力下降速度",type:"number",default:1,min:.1,max:5,formatter:e=>e.toFixed(6)},{key:"PlayerAutoHPRegeneRate",label:"玩家血量恢复速度",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PlayerAutoHpRegeneRateInSleep",label:"玩家睡眠血量恢复速度",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PalStomachDecreaceRate",label:"帕鲁饱腹感下降速度",type:"number",default:1,min:.1,max:5,formatter:e=>e.toFixed(6)},{key:"PalStaminaDecreaceRate",label:"玩家体力下降速度",type:"number",default:1,min:.1,max:5,formatter:e=>e.toFixed(6)},{key:"PalAutoHPRegeneRate",label:"帕鲁血量恢复速度",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"PalAutoHpRegeneRateInSleep",label:"帕鲁睡眠血量恢复速度",type:"number",default:1,min:.1,formatter:e=>e.toFixed(6)},{key:"BuildObjectDamageRate",label:"建筑受伤倍率",type:"number",default:1,min:.5,max:3,formatter:e=>e.toFixed(6)},{key:"BuildObjectDeteriorationDamageRate",label:"建筑劣化速率",type:"number",default:1,min:0,max:10,formatter:e=>e.toFixed(6)},{key:"CollectionDropRate",label:"采集掉落率",type:"number",default:1,min:.5,formatter:e=>e.toFixed(6)},{key:"CollectionObjectHpRate",label:"采集对象血量倍率",type:"number",default:1,min:.5,max:3,formatter:e=>e.toFixed(6)},{key:"CollectionObjectRespawnSpeedRate",label:"采集对象重生速率",type:"number",default:1,min:.5,max:3,formatter:e=>e.toFixed(6)},{key:"EnemyDropItemRate",label:"怪物掉落倍率",type:"number",default:1,min:.5,formatter:e=>e.toFixed(6)},{key:"DeathPenalty",label:"死亡惩罚",type:"select",default:"All",options:[{value:"None",label:"不掉落"},{value:"Item",label:"仅掉落道具"},{value:"ItemAndEquipment",label:"掉落道具和装备"},{value:"All",label:"全部掉落"}]},{key:"bEnablePlayerToPlayerDamage",label:"玩家之间伤害",type:"switch",default:!1},{key:"bEnableFriendlyFire",label:"友方伤害",type:"switch",default:!1},{key:"bEnableInvaderEnemy",label:"袭击事件",type:"switch",default:!0},{key:"bActiveUNKO",label:"大便",type:"switch",default:!1},{key:"bEnableAimAssistPad",label:"手柄辅助瞄准",type:"switch",default:!0},{key:"bEnableAimAssistKeyboard",label:"键盘辅助瞄准",type:"switch",default:!1},{key:"DropItemMaxNum",label:"最大掉落数",type:"number",default:3e3},{key:"DropItemMaxNum_UNKO",label:"最大掉落大便数",type:"number",default:100},{key:"BaseCampMaxNum",label:"最大基地数",type:"number",default:128},{key:"BaseCampWorkerMaxNum",label:"最大基地内工人数",type:"number",default:20},{key:"DropItemAliveMaxHours",label:"掉落物保存时间",type:"number",default:1,formatter:e=>e.toFixed(6)},{key:"bAutoResetGuildNoOnlinePlayers",label:"不在线玩家自动退出公会",type:"switch",default:!1},{key:"AutoResetGuildTimeNoOnlinePlayers",label:"自动退出公会时间",type:"number",default:72,formatter:e=>e.toFixed(6)},{key:"GuildPlayerMaxNum",label:"工会最大人数",type:"number",default:20},{key:"PalEggDefaultHatchingTime",label:"巨大蛋孵化时间(h)",type:"number",default:1,formatter:e=>e.toFixed(6)},{key:"WorkSpeedRate",label:"工作效率",type:"number",default:1,formatter:e=>e.toFixed(6)},{key:"bIsMultiplay",label:"多人游戏",type:"switch",default:!1},{key:"bIsPvP",label:"PVP模式",type:"switch",default:!1},{key:"bCanPickupOtherGuildDeathPenaltyDrop",label:"其他公会死亡掉落物捡取",type:"switch",default:!1},{key:"bEnableNonLoginPenalty",label:"登陆惩罚?",type:"switch",default:!1},{key:"bEnableFastTravel",label:"快速旅行",type:"switch",default:!0},{key:"bIsStartLocationSelectByMap",label:"选择出生点",type:"switch",default:!0},{key:"bExistPlayerAfterLogout",label:"登出自动关服",type:"switch",default:!1},{key:"bEnableDefenseOtherGuildPlayer",label:"工会间伤害",type:"switch",default:!1},{key:"CoopPlayerMaxNum",label:"CoopPlayerMaxNum",type:"number",default:4},{key:"ServerPlayerMaxNum",label:"服务器最大玩家人数",type:"number",default:32},{key:"ServerName",label:"服务器名称",type:"input",default:"Palworld Server"},{key:"ServerDescription",label:"服务器描述",type:"input",default:""},{key:"AdminPassword",label:"管理员密码",type:"input",default:""},{key:"ServerPassword",label:"服务器密码",type:"input",default:""},{key:"PublicPort",label:"服务器端口",type:"number",default:8211},{key:"PublicIP",label:"服务器IP",type:"input",default:""},{key:"RCONEnabled",label:"RCONEnabled",type:"switch",default:!1},{key:"RCONPort",label:"RCONPort",type:"number",default:25575},{key:"Region",label:"地区",type:"input",default:""},{key:"bUseAuth",label:"bUseAuth",type:"switch",default:!0},{key:"BanListURL",label:"封禁名单地址",type:"input",default:"https://api.palworldgame.com/api/banlist.txt"}];function h(){return V(Q)}function Y(e){if(!e)throw new Error("ini is empty");const r=h();try{const n={};e.replaceAll(`
`,"").replaceAll("\r","").slice(0,-1).split("OptionSettings=(")[1].split(",").forEach(t=>{const l=t.split("="),b=l[0].trim();let i=l[1].trim();i.startsWith('"')&&i.endsWith('"')&&(i=i.slice(1,-1)),n[b]=i});for(const t of r){let l;if(n[t.key]!=null)switch(l=n[t.key],t.type){case"select":t.default=l;break;case"number":t.default=Number(l);break;case"switch":t.default=l==="True";break;default:t.default=l;break}}}catch{throw new Error("wrong ini format")}return r}function Z(e){var n;let r="";for(const t of e)switch(t.type){case"select":r+=`${t.key}=${t.default},`;break;case"number":r+=`${t.key}=${t.formatter?t.formatter(t.default||0):(n=t.default)==null?void 0:n.toString()},`;break;case"switch":r+=`${t.key}=${t.default?"True":"False"},`;break;default:r+=`${t.key}="${t.default}",`;break}return`[/Script/Pal.PalGameWorldSettings]
OptionSettings=(${r.slice(0,-1)})

`}const ee={"h-full":"","w-full":"",flex:"","flex-col":"","items-center":"","gap-4":"","overflow-auto":""},te={flex:"","flex-wrap":"","gap-4":""},ae={class:"v-scroll"},le={class:"content"},re=I({__name:"palServerSettings",setup(e){O(d=>({"1862e640":_(t),"740d56ed":_(n)}));const r=M(null),{width:n,height:t}=U(r),l=B(h());async function b(d){try{const f=await d.text();l.splice(0,l.length,...Y(f)),E.success("解析成功")}catch{E.error("解析失败")}return!1}function i(){const d=Z(l);X(d,"PalWorldSettings.ini")}function F(){l.splice(0,l.length,...h())}return(d,f)=>{const c=$,v=J,R=q,S=z,g=j,D=K,N=H,A=G,C=W;return u(),k("div",ee,[y("div",te,[p(v,{"before-upload":b,"show-file-list":!1,accept:".ini"},{default:m(()=>[p(c,{type:"primary"},{default:m(()=>[x(" 解析配置 ")]),_:1})]),_:1}),p(c,{onClick:F},{default:m(()=>[x(" 恢复默认 ")]),_:1}),p(c,{onClick:i},{default:m(()=>[x(" 下载配置 ")]),_:1})]),p(C,{"label-width":"17rem","position-relative":"","w-full":"","flex-1":"","overflow-auto":"",onSubmit:f[0]||(f[0]=T(()=>{},["prevent"]))},{default:m(()=>[y("div",{ref_key:"scrollContainer",ref:r,class:"scroll-container","h-full":"","w-full":""},[y("div",ae,[y("div",le,[(u(!0),k(P,null,w(_(l),a=>(u(),s(A,{key:a.key,label:a.label},{default:m(()=>[a.type==="number"?(u(),s(R,{key:0,modelValue:a.default,"onUpdate:modelValue":o=>a.default=o,min:a.min,max:a.max},null,8,["modelValue","onUpdate:modelValue","min","max"])):a.type==="switch"?(u(),s(S,{key:1,modelValue:a.default,"onUpdate:modelValue":o=>a.default=o},null,8,["modelValue","onUpdate:modelValue"])):a.type==="select"?(u(),s(D,{key:2,modelValue:a.default,"onUpdate:modelValue":o=>a.default=o},{default:m(()=>[(u(!0),k(P,null,w(a.options,o=>(u(),s(g,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):(u(),s(N,{key:3,modelValue:a.default,"onUpdate:modelValue":o=>a.default=o},null,8,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["label"]))),128))])])],512)]),_:1})])}}}),Fe=L(re,[["__scopeId","data-v-26b9fc8c"]]);export{Fe as default};