import{J as d}from"./jsoneditor.min-d7b2847f.js";import{_ as a,h as r,o as i,l as _,at as n}from"./index-2d447dfc.js";let e,t={type:"FeatureCollection",features:[]};const c=r({name:"GeoJsonEditor",props:{geoJsonLayer:{type:Object,default:void 0}},mounted(){e=new d(this.$refs.geoJsonContainer,{mode:"code",onChangeText:n(this.onChangeText,500)},t),this.$eventBus.on("updateEditor",n(this.updateEditor,500))},beforeUnmount(){this.$eventBus.off("updateEditor",this.updateEditor),e&&(e.destroy(),e=void 0)},methods:{onChangeText(){try{t=e.get(),this.$eventBus.emit("updateGeojsonLayer",t)}catch{}},updateEditor(o){try{o?(e.update(o),this.$eventBus.emit("updateGeojsonLayer",e.get())):(t=this.geoJsonLayer.toGeoJSON(),e.update(t))}catch{}}}}),u={ref:"geoJsonContainer",class:"geoJsonContainer"};function p(o,s,f,h,l,g){return i(),_("div",u,null,512)}const J=a(c,[["render",p],["__scopeId","data-v-c8b5097e"]]);export{J as default};
