import{J as n}from"./jsoneditor.min.8a192fae.js";import{_ as s}from"./index.48d2206f.js";import{d as r,o as a,f as d}from"./vendor.af973e49.js";let e,o={type:"FeatureCollection",features:[]};const i=r({name:"geoJsonEditor",props:{geoJsonLayer:Object},mounted(){e=new n(this.$refs.geoJsonContainer,{mode:"code",onChangeText:this.onChangeText},o),this.$eventBus.on("updateEditor",this.updateEditor)},methods:{onChangeText(){try{o=e.get(),this.$eventBus.emit("updateGeojsonLayer",o)}catch{}},updateEditor(){try{o=this.geoJsonLayer.toGeoJSON(),e.update(o)}catch{}}},beforeUnmount(){this.$eventBus.off("updateEditor",this.updateEditor),e&&(e.destroy(),e=void 0)}}),p={class:"geoJsonContainer",ref:"geoJsonContainer"};function u(t,c,f,_,h,m){return a(),d("div",p,null,512)}var v=s(i,[["render",u],["__scopeId","data-v-7f0bd4ae"]]);export{v as default};
