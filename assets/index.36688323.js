import{_ as g,cJ as u,o as v,n as f,v as n,aV as d,s,z as h,bm as m,bn as p}from"./index.cb0e67d8.js";var _="/assets/O.aabe6b8b.png",b="/assets/R.fca5b3d5.png",k="/assets/Ob.fa8b324c.png",R="/assets/oreo.6b415d4d.png",y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADdElEQVRYR72WT2hcVRTGv28m42QkUSxZiLUi/gfBtqIhRMe88yQEqy5aBelKaN0JrkTcCe5c6MZuRKG4EEsWElSyqM47M1NIo0Zq1SgtumgpVIJYmtRkdOblyJWZ8PKYvPemU+Yu3z3nfL977nnnHmIAKwiCZ4eHh09PTk7+FZfjAPShqucBNIrFoheHGAhAEAS/kbwXwE+tVqs8PT19tXPwQQM43TOtVks6EAyC4AjJu7aIyNDMLpP83cxOiUgr7ZoWFxdv2djYGCe5x8x2AxiK+bwG4LbIty0IqqolCPxpZh+SfFtEGnE7J7y+vv4WSScQF03jPgPgqTSA/4OY2bl8Pn9wamrq107USqWyO5fLKYD705QS9k9lAmgH+APA4yJyaWFhYVej0ThN8oE+xN3B3nc10CBZzBLIzOZF5LlqtfoVgKez+OxkY2bHfd8/4jLwEIDbO4Zmlifp0noAwPPRAGb2AoAxkh90Cfw1yc/DMDyXy+X+jfl9QvKOiMZxETlK0hJ/Q1U9CuCjdh3Um83mgUKhcJHkrhjAuyLy+k6njfQBl/YtcWef2gdU9RiAVzc3N2fy+fzDZvZeTKgqIpJ0HR2AuHhWAHc9Jz3P21utVl1LvS8qRnLc87zvUgB+BvBtJ+3b/LMUkqreCWAfgC9i9nMicjAthqre7XneBXfncdvUK+g4qGodQDkWYL+I/JAGkLSfCaBerz8ShuHZWGV/4/v+RD/imWrAGanqZwC2pZrkIQDXPM9zPSFxqeq+oaGhC+Vy+UrPV6CqjwGIF9ml0dHRe9bW1s6b2Su+71eSCK57Hpidnc2PjY3VSD4RS//LJP8BcAKAex/GReRahj6QfR5YWloqrK6ufkzycEz8RxHZr6q/kHywvVcplUqHJiYmVrtBRBtR6jzQDnArgBcBuN9v2zKzJ927D+DT2NZlM3uT5MUuPttacRSil9fQxT0hIoeDIHiH5BtpxZeyn30ecIHM7Ptmszk1MzPz9/Ly8k0rKytzAJ7pB8LMaqkZMLNNkidLpdJL0TtuQ3wJYPp6IZLmAdcyl81MC4XCsXK57N6ArqtWq+0Jw3CO5KO9gCTNA02SZ5N+q25C8/PzxZGRkb1hGN6cVoTRVzFTK+7lZGm/Yc/zQL/izr+veeAGAfQ3D/QLcUPmgX4hdvIfSBEmwf8HPrvGUyfelUEAAAAASUVORK5CYII=";const S={name:"GameOreooo",data:()=>({output:!1,loading:!0,oreoArr:[],imgUrl:"",assets:{O:_,R:b,Ob:k,Oreo:R,random:y}}),computed:{oreoStr:function(){let e="";for(let r=0;r<this.oreoArr.length;r++)switch(this.oreoArr[r]){case"O":case"Ob":e+="\u5965";break;case"R":e+="\u5229";break;case"-":e+="\u4E0E";break}return e}},mounted(){setTimeout(()=>{this.loading=!1},1e3)},methods:{strAdd(e){switch(e){case"o":this.oreoArr.length===0?this.oreoArr.push("O"):this.oreoArr.push("Ob");break;case"r":this.oreoArr.push("R");break;case"-":this.oreoArr.length>0&&this.oreoArr[this.oreoArr.length-1]!=="-"&&this.oreoArr.push("-");break;case"-1":this.oreoArr.length>0&&this.oreoArr.pop();break}},getRandom(){for(let e=0;e<Math.floor(Math.random()*8)+1;e++){const r=Math.random()*5;let a="";r<1?a="-":r<3?a="o":a="r";for(let i=0;i<Math.floor(Math.random()*4)+1;i++)console.log(e,a,i),this.strAdd(a)}this.oreoArr[this.oreoArr.length-1]==="-"&&this.oreoArr.pop(),this.oreoArr.length===0&&this.getRandom()},generateImage(){if(this.oreoArr.length>0){this.loading=!0,this.output=!0;const e=this.oreoArr,r=[];e[e.length-1]==="-"&&e.pop();let a=0;for(let t=0;t<e.length;t++){const o=e[t];if(o!=="-"){const A={image:this.$refs[o],x:o==="R"?10:0,y:a,width:o==="R"?220:240,height:o==="R"?155:160};r.splice(0,0,A),a+=24}else a+=72}a+=160-24;const i=this.$refs.oreo_canvas;i.height=a;const c=i.getContext("2d");r.forEach(t=>{c.drawImage(t.image,t.x,t.y,t.width,t.height)}),u.get(i.toDataURL("image/png"),{responseType:"blob"}).then(t=>{this.imgUrl=URL.createObjectURL(t.data)}),setTimeout(()=>{this.loading=!1},1e3)}},backToInput(){this.output=!1,this.oreoArr=[],this.imgUrl=""}}},l=e=>(m("data-v-4f2519be"),e=e(),p(),e),C={class:"oreooo"},I={class:"content-loading"},w=["src"],O={class:"imgContainer"},q=["src"],L=["src"],U=["src"],P={class:"wrapper"},z={class:"title"},B=l(()=>s("div",{class:"meta"}," \u6211\u60F3\u8981\uFF1A ",-1)),Z={class:"input str"},M={class:"input str placeholder"},T=l(()=>s("span",null,"\u5965\u5229\u5965...",-1)),x=["src"],K={class:"control"},G={class:"wrapper"},V={class:"title"},E=l(()=>s("div",{class:"meta"}," \u8FD9\u662F\u4F60\u7684 ",-1)),H={class:"output str"},J={class:"output-image"},D={ref:"oreo_canvas",width:"240",height:"500"},Q={class:"btn"},Y=["href"];function j(e,r,a,i,c,t){return v(),f("div",C,[n(s("div",I,[s("img",{src:e.assets.Oreo,alt:"",class:"loading-img"},null,8,w)],512),[[d,e.loading]]),s("div",O,[s("img",{ref:"O",src:e.assets.O},null,8,q),s("img",{ref:"R",src:e.assets.R},null,8,L),s("img",{ref:"Ob",src:e.assets.Ob},null,8,U)]),n(s("div",P,[s("div",z,[B,n(s("div",Z,[s("span",null,h(t.oreoStr),1)],512),[[d,t.oreoStr]]),n(s("div",M,[T,s("img",{src:e.assets.random,class:"icon",onClick:r[0]||(r[0]=o=>t.getRandom())},null,8,x)],512),[[d,!t.oreoStr]])]),s("div",K,[s("div",{class:"btn",onClick:r[1]||(r[1]=o=>t.strAdd("o"))}," +\u5965 "),s("div",{class:"btn",onClick:r[2]||(r[2]=o=>t.strAdd("r"))}," +\u5229 "),s("div",{class:"btn",onClick:r[3]||(r[3]=o=>t.strAdd("-"))}," +\u4E0E "),s("div",{class:"btn",onClick:r[4]||(r[4]=o=>t.strAdd("-1"))}," -1 ")]),s("div",{class:"index-btn",onClick:r[5]||(r[5]=(...o)=>t.generateImage&&t.generateImage(...o))}," \u751F\u6210 ")],512),[[d,!e.loading&&!e.output]]),n(s("div",G,[s("div",V,[E,s("div",H,h(t.oreoStr),1)]),s("div",J,[s("canvas",D,"\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 HTML5 canvas \u6807\u7B7E\u3002",512)]),s("div",Q,[s("a",{href:e.imgUrl,target:"_blank"},"\u67E5\u770B\u56FE\u7247",8,Y)]),s("div",{class:"btn",onClick:r[6]||(r[6]=(...o)=>t.backToInput&&t.backToInput(...o))}," \u8FD4\u56DE ")],512),[[d,!e.loading&&e.output]])])}var W=g(S,[["render",j],["__scopeId","data-v-4f2519be"]]);export{W as default};