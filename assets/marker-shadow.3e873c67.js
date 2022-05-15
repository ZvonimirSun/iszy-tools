import{l}from"./leaflet-src.6560a1b9.js";const h=l.exports.TileLayer.extend({initialize:function(t,s={}){const a=this.providers,e=t.split("."),o=e[0],n=e[1],r=e[2],c=a[o][n][r];s.subdomains=a[o].Subdomains,"tms"in a[o]&&(s.tms=a[o].tms),l.exports.TileLayer.prototype.initialize.call(this,c,s)}});function v(t,s={}){return s.csysType=a(t),new h(t,s);function a(e){const n=e.split(".")[0];let r="wgs84";switch(n){case"Geoq":case"GaoDe":case"Google":r="gcj02";break;case"Baidu":r="bd09";break;case"OSM":case"TianDiTu":r="wgs84";break}return r}}const i=Math.PI,m=6378245,p=.006693421622965943,g=i*3e3/180;h.include({providers:{TianDiTu:{Normal:{Map:"//t{s}.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk={key}",Annotation:"//t{s}.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk={key}"},Satellite:{Map:"//t{s}.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk={key}",Annotation:"//t{s}.tianditu.gov.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}&tk={key}"},Terrain:{Map:"//t{s}.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk={key}",Annotation:"//t{s}.tianditu.gov.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}&tk={key}"},Subdomains:["0","1","2","3","4","5","6","7"],key:""},GaoDe:{Normal:{Map:"//webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"},Satellite:{Map:"//webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",Annotation:"//webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}"},Subdomains:["1","2","3","4"]},Google:{Normal:{Map:"//www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"},Satellite:{Map:"//www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",Annotation:"//www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}"},Subdomains:[]},Geoq:{Normal:{Map:"//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",PurplishBlue:"//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",Gray:"//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",Warm:"//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}"},Theme:{Hydro:"//thematic.geoq.cn/arcgis/rest/services/ThematicMaps/WorldHydroMap/MapServer/tile/{z}/{y}/{x}"},Subdomains:[]},OSM:{Normal:{Map:"//{s}.tile.osm.org/{z}/{x}/{y}.png"},Subdomains:["a","b","c"]},Baidu:{Normal:{Map:"//online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1"},Satellite:{Map:"//shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46",Annotation:"//online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=sl&v=020"},Subdomains:"0123456789",tms:!0}},csysConvert:{bd09_To_gps84:function(t,s){const a=this.bd09_To_gcj02(t,s);return this.gcj02_To_gps84(a.lng,a.lat)},gps84_To_bd09:function(t,s){const a=this.gps84_To_gcj02(t,s);return this.gcj02_To_bd09(a.lng,a.lat)},gps84_To_gcj02:function(t,s){let a=y(t-105,s-35),e=d(t-105,s-35);const o=s/180*i;let n=Math.sin(o);n=1-p*n*n;const r=Math.sqrt(n);a=a*180/(m*(1-p)/(n*r)*i),e=e*180/(m/r*Math.cos(o)*i);const c=s+a;return{lng:t+e,lat:c}},gcj02_To_gps84:function(t,s){const a=M(t,s),e=t*2-a.lng,o=s*2-a.lat;return{lng:e,lat:o}},gcj02_To_bd09:function(t,s){const a=Math.sqrt(t*t+s*s)+2e-5*Math.sin(s*g),e=Math.atan2(s,t)+3e-6*Math.cos(t*g),o=a*Math.cos(e)+.0065,n=a*Math.sin(e)+.006;return{lng:o,lat:n}},bd09_To_gcj02:function(t,s){const a=t-.0065,e=s-.006,o=Math.sqrt(a*a+e*e)-2e-5*Math.sin(e*g),n=Math.atan2(e,a)-3e-6*Math.cos(a*g),r=o*Math.cos(n),c=o*Math.sin(n);return{lng:r,lat:c}}},_setZoomTransform:function(t,s,a){let e=s;e!=null&&this.options&&(this.options.csysType==="gcj02"?e=this.csysConvert.gps84_To_gcj02(s.lng,s.lat):this.options.csysType==="bd09"&&(e=this.csysConvert.gps84_To_bd09(s.lng,s.lat)));const o=this._map.getZoomScale(a,t.zoom),n=t.origin.multiplyBy(o).subtract(this._map._getNewPixelOrigin(e,a)).round();l.exports.Browser.any3d?l.exports.DomUtil.setTransform(t.el,n,o):l.exports.DomUtil.setPosition(t.el,n)},_getTiledPixelBounds:function(t){let s=t;s!=null&&this.options&&(this.options.csysType==="gcj02"?s=this.csysConvert.gps84_To_gcj02(t.lng,t.lat):this.options.csysType==="bd09"&&(s=this.csysConvert.gps84_To_bd09(t.lng,t.lat)));const a=this._map,e=a._animatingZoom?Math.max(a._animateToZoom,a.getZoom()):a.getZoom(),o=a.getZoomScale(e,this._tileZoom),n=a.project(s,this._tileZoom).floor(),r=a.getSize().divideBy(o*2);return new l.exports.Bounds(n.subtract(r),n.add(r))}});function M(t,s){let a=y(t-105,s-35),e=d(t-105,s-35);const o=s/180*i;let n=Math.sin(o);n=1-p*n*n;const r=Math.sqrt(n);a=a*180/(m*(1-p)/(n*r)*i),e=e*180/(m/r*Math.cos(o)*i);const c=s+a;return{lng:t+e,lat:c}}function y(t,s){let a=-100+2*t+3*s+.2*s*s+.1*t*s+.2*Math.sqrt(Math.abs(t));return a+=(20*Math.sin(6*t*i)+20*Math.sin(2*t*i))*2/3,a+=(20*Math.sin(s*i)+40*Math.sin(s/3*i))*2/3,a+=(160*Math.sin(s/12*i)+320*Math.sin(s*i/30))*2/3,a}function d(t,s){let a=300+t+2*s+.1*t*t+.1*t*s+.1*Math.sqrt(Math.abs(t));return a+=(20*Math.sin(6*t*i)+20*Math.sin(2*t*i))*2/3,a+=(20*Math.sin(t*i)+40*Math.sin(t/3*i))*2/3,a+=(150*Math.sin(t/12*i)+300*Math.sin(t/30*i))*2/3,a}var z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC";export{h as C,v as c,z as m};