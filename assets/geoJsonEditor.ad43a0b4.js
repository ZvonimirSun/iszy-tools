import{J as r}from"./jsoneditor.min.62d09865.js";import{_ as d,d as a,o as i,m as u}from"./index.990579d2.js";import{d as n}from"./debounce.a7fcd29b.js";let e,t={type:"FeatureCollection",features:[]};const _=a({name:"GeoJsonEditor",props:{geoJsonLayer:{type:Object,default:void 0}},mounted(){e=new r(this.$refs.geoJsonContainer,{mode:"code",onChangeText:n(this.onChangeText,500)},t),this.$eventBus.on("updateEditor",n(this.updateEditor,500))},beforeUnmount(){this.$eventBus.off("updateEditor",this.updateEditor),e&&(e.destroy(),e=void 0)},methods:{onChangeText(){try{t=e.get(),this.$eventBus.emit("updateGeojsonLayer",t)}catch{}},updateEditor(o){try{o?(e.update(o),this.$eventBus.emit("updateGeojsonLayer",e.get())):(t=this.geoJsonLayer.toGeoJSON(),e.update(t))}catch{}}}}),p={ref:"geoJsonContainer",class:"geoJsonContainer"};function c(o,s,f,h,m,g){return i(),u("div",p,null,512)}var v=d(_,[["render",c],["__scopeId","data-v-1093c958"]]);export{v as default};
