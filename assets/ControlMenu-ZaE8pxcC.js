import{a3 as d,o as m,c as _,w as g,a as i,b as r,ay as l,aa as x,aA as E,W as c,aQ as n,f as h}from"./vendor-Ru-BxWlB.js";import{E as s,c as k}from"./common-K04dNQ2-.js";import{a as v}from"./@turf/turf-IP3gYYuh.js";import"./ant-design-vue-MAwBXcQi.js";import"./vanilla-jsoneditor-_koh3yF9.js";const w={class:"controlMenu"},C={__name:"ControlMenu",setup(F){function f(e){if(e.target.files.length){const t=e.target.files[0],o=new FileReader;o.onload=()=>{if(o.result&&typeof o.result=="string")try{const a=JSON.parse(o.result);s.emit("updateEditor",a),s.emit("updateGeojsonLayer",a)}catch{}},o.readAsText(t)}e.target.value=""}function u(){s.emit("getGeoJson",function(e){e?k(JSON.stringify(e),"exportFile.geojson"):x.warning("无可导出数据")})}function p(){s.emit("getGeoJson",function(e){if(e){const t=v(e);t<1e6?n.alert(`面积: ${t.toFixed(2)} 平方米`,"信息"):t<1e8?n.alert(`面积: ${(t/1e4).toFixed(2)} 公顷`,"信息"):n.alert(`面积: ${(t/1e6).toFixed(2)} 平方千米`,"信息")}})}return(e,t)=>{const o=E;return m(),_("div",w,[g(i("input",{ref:"uploader",type:"file",accept:".json,.JSON,.geojson,.GEOJSON",onChange:f},null,544),[[h,!1]]),r(o,{onClick:t[0]||(t[0]=a=>e.$refs.uploader.click())},{default:l(()=>[c(" 打开 ")]),_:1}),r(o,{onClick:u},{default:l(()=>[c(" 保存 ")]),_:1}),i("i",{class:"i-icon-park-outline-info",onClick:p})])}}},M=d(C,[["__scopeId","data-v-e86f5c0b"]]);export{M as default};
