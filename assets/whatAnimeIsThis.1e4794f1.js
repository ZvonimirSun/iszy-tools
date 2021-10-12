import{C as S}from"./vue-codemirror.c53b1c48.js";import{$ as b,aw as v,a0 as R,ad as T,ax as D,ay as u,az as j,a as o,o as d,c as w,w as t,T as Y,b as A,V as z,f as l,e as I,g as a,U as i,P as g,O as f,Q as q}from"./vendor.a1d008c9.js";/* empty css               *//* empty css               *//* empty css                */import{_ as F}from"./index.f44d3f6b.js";const{Item:L}=u,{Title:M,Paragraph:P,Text:H}=Y,Z={name:"what_anime_is_this",components:{Container:S,Input:b,Upload:v,Title:M,Button:R,Divider:T,Image:D,Paragraph:P,Text:H,Descriptions:u,Item:L,Loading:j},data:()=>({file:"",img:void 0,fileName:"",id:"",quota:0,quotaUsed:0,loading:!1,result:[]}),mounted(){this.checkTimes()},methods:{beforeUpload(e){if(e.size/1024/1024>=10)return this.$msg.error("\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC710MB!"),!1;const n=new FileReader;return n.onload=()=>{this.img=e,this.fileName=e.name,this.file=n.result},n.readAsDataURL(e),!1},async start(){try{this.loading=!0;const e=new FormData;e.append("image",this.img);const n=await this.$axios.post("https://api.trace.moe/search?anilistInfo",e,{headers:{"Content-Type":"multipart/form-data"}});this.loading=!1,await this.checkTimes(),n.data.error||(this.result=n.data.result||[])}catch(e){this.loading=!1,this.$msg.error("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5")}},async checkTimes(){try{const e=await this.$axios.get("https://api.trace.moe/me");this.id=e.data.id||"",this.quotaUsed=e.data.quotaUsed||0,this.quota=e.data.quota||0}catch(e){this.$msg.error("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5")}},secondToDate(e){const n=Math.floor(e/3600),B=Math.floor(e/60%60),m=(e%60).toFixed(2);return n+":"+B+":"+m}}},x=a("\u8BF7\u9009\u62E9\u8981\u8BC6\u522B\u52A8\u6F2B\u622A\u56FE"),G={key:0},X=a("\u8BC6\u522B\u4E2D"),V={key:1},W=a("\u4F7F\u7528 trace.moe API\uFF0C\u6709\u4F7F\u7528\u6B21\u6570\u9650\u5236\u3002\u7528\u6237ID\uFF1A "),O=a(" \uFF0C\u6BCF\u6708\u6B21\u6570\u5269\u4F59\uFF1A "),$=a(" \uFF0C\u5DF2\u4F7F\u7528\u6B21\u6570\uFF1A "),ee=a("\u9884\u89C8"),Ae=a("\u7ED3\u679C"),te=a(" ~ "),ae=["src","poster"];function oe(e,n,B,m,se,Q){const c=o("Title"),p=o("Loading"),C=o("Button"),N=o("Input"),_=o("Upload"),E=o("Text"),J=o("Paragraph"),h=o("Divider"),k=o("Image"),r=o("Item"),y=o("Descriptions"),U=o("container");return d(),w(U,null,{default:t(()=>[A(c,{level:3},{default:t(()=>[x]),_:1}),A(_,{fileList:[],showUploadList:!1,accept:"image/*","before-upload":Q.beforeUpload},{default:t(()=>[A(N,{readonly:"",placeholder:"\u70B9\u51FB\u8FD9\u91CC\u4E0A\u4F20\u56FE\u7247",value:e.fileName},{addonAfter:t(()=>[A(C,{block:"",disabled:!e.file||e.quota===0||e.quota-e.quotaUsed<=0,onClick:z(Q.start,["stop"])},{default:t(()=>[e.loading?(d(),l("span",G,[A(p,{theme:"outline"}),X])):(d(),l("span",V,"\u5F00\u59CB\u8BC6\u522B"))]),_:1},8,["disabled","onClick"])]),_:1},8,["value"])]),_:1},8,["before-upload"]),A(J,null,{default:t(()=>[I("blockquote",null,[W,A(E,{code:""},{default:t(()=>[a(i(e.id),1)]),_:1}),O,A(E,{code:""},{default:t(()=>[a(i(e.quota),1)]),_:1}),$,A(E,{code:""},{default:t(()=>[a(i(e.quotaUsed),1)]),_:1})])]),_:1}),e.file?(d(),l(g,{key:0},[A(h),A(c,{level:3},{default:t(()=>[ee]),_:1}),A(k,{style:{"max-width":"100%"},src:e.file,fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="},null,8,["src"])],64)):f("",!0),e.result.length>0?(d(),l(g,{key:1},[A(h),A(c,{level:3},{default:t(()=>[Ae]),_:1}),(d(!0),l(g,null,q(e.result,(s,K)=>(d(),l(g,{key:K},[A(h),A(y,{title:s.anilist.title.native+(s.episode?" EP#"+s.episode:""),bordered:"",size:"small",layout:"vertical"},{default:t(()=>[A(r,{label:"\u7F57\u9A6C\u97F3"},{default:t(()=>[a(i(s.anilist.title.romaji),1)]),_:2},1024),A(r,{label:"\u6587\u4EF6\u540D"},{default:t(()=>[a(i(s.filename),1)]),_:2},1024),A(r,{label:"\u76F8\u4F3C\u5EA6"},{default:t(()=>[a(i((s.similarity*100).toFixed(2)+"%"),1)]),_:2},1024),A(r,{label:"\u5339\u914D\u4F4D\u7F6E"},{default:t(()=>[A(E,{code:""},{default:t(()=>[a(i(Q.secondToDate(s.from)),1)]),_:2},1024),te,A(E,{code:""},{default:t(()=>[a(i(Q.secondToDate(s.to)),1)]),_:2},1024)]),_:2},1024),A(r,{label:"\u9884\u89C8",span:3},{default:t(()=>[I("video",{controls:"",style:{"max-width":"100%"},src:s.video,poster:s.image},null,8,ae)]),_:2},1024)]),_:2},1032,["title"])],64))),128))],64)):f("",!0)]),_:1})}var Qe=F(Z,[["render",oe],["__scopeId","data-v-77a8737c"]]);export{Qe as default};
