import{_ as g,co as u,o as f,J as m,aZ as n,a_ as d,K as t,a0 as h,S as p,T as v}from"./index.0076ae71.js";const _="/assets/O.aabe6b8b.png",b="/assets/R.fca5b3d5.png",k="/assets/Ob.fa8b324c.png",R="/assets/oreo.6b415d4d.png",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADdElEQVRYR72WT2hcVRTGv28m42QkUSxZiLUi/gfBtqIhRMe88yQEqy5aBelKaN0JrkTcCe5c6MZuRKG4EEsWElSyqM47M1NIo0Zq1SgtumgpVIJYmtRkdOblyJWZ8PKYvPemU+Yu3z3nfL977nnnHmIAKwiCZ4eHh09PTk7+FZfjAPShqucBNIrFoheHGAhAEAS/kbwXwE+tVqs8PT19tXPwQQM43TOtVks6EAyC4AjJu7aIyNDMLpP83cxOiUgr7ZoWFxdv2djYGCe5x8x2AxiK+bwG4LbIty0IqqolCPxpZh+SfFtEGnE7J7y+vv4WSScQF03jPgPgqTSA/4OY2bl8Pn9wamrq107USqWyO5fLKYD705QS9k9lAmgH+APA4yJyaWFhYVej0ThN8oE+xN3B3nc10CBZzBLIzOZF5LlqtfoVgKez+OxkY2bHfd8/4jLwEIDbO4Zmlifp0noAwPPRAGb2AoAxkh90Cfw1yc/DMDyXy+X+jfl9QvKOiMZxETlK0hJ/Q1U9CuCjdh3Um83mgUKhcJHkrhjAuyLy+k6njfQBl/YtcWef2gdU9RiAVzc3N2fy+fzDZvZeTKgqIpJ0HR2AuHhWAHc9Jz3P21utVl1LvS8qRnLc87zvUgB+BvBtJ+3b/LMUkqreCWAfgC9i9nMicjAthqre7XneBXfncdvUK+g4qGodQDkWYL+I/JAGkLSfCaBerz8ShuHZWGV/4/v+RD/imWrAGanqZwC2pZrkIQDXPM9zPSFxqeq+oaGhC+Vy+UrPV6CqjwGIF9ml0dHRe9bW1s6b2Su+71eSCK57Hpidnc2PjY3VSD4RS//LJP8BcAKAex/GReRahj6QfR5YWloqrK6ufkzycEz8RxHZr6q/kHywvVcplUqHJiYmVrtBRBtR6jzQDnArgBcBuN9v2zKzJ927D+DT2NZlM3uT5MUuPttacRSil9fQxT0hIoeDIHiH5BtpxZeyn30ecIHM7Ptmszk1MzPz9/Ly8k0rKytzAJ7pB8LMaqkZMLNNkidLpdJL0TtuQ3wJYPp6IZLmAdcyl81MC4XCsXK57N6ArqtWq+0Jw3CO5KO9gCTNA02SZ5N+q25C8/PzxZGRkb1hGN6cVoTRVzFTK+7lZGm/Yc/zQL/izr+veeAGAfQ3D/QLcUPmgX4hdvIfSBEmwf8HPrvGUyfelUEAAAAASUVORK5CYII=";const y={name:"GameOreooo",data:()=>({output:!1,loading:!0,oreoArr:[],imgUrl:"",assets:{O:_,R:b,Ob:k,Oreo:R,random:S}}),computed:{oreoStr:function(){let s="";for(let o=0;o<this.oreoArr.length;o++)switch(this.oreoArr[o]){case"O":case"Ob":s+="\u5965";break;case"R":s+="\u5229";break;case"-":s+="\u4E0E";break}return s}},mounted(){setTimeout(()=>{this.loading=!1},1e3)},methods:{strAdd(s){switch(s){case"o":this.oreoArr.length===0?this.oreoArr.push("O"):this.oreoArr.push("Ob");break;case"r":this.oreoArr.push("R");break;case"-":this.oreoArr.length>0&&this.oreoArr[this.oreoArr.length-1]!=="-"&&this.oreoArr.push("-");break;case"-1":this.oreoArr.length>0&&this.oreoArr.pop();break}},getRandom(){for(let s=0;s<Math.floor(Math.random()*8)+1;s++){const o=Math.random()*5;let a="";o<1?a="-":o<3?a="o":a="r";for(let i=0;i<Math.floor(Math.random()*4)+1;i++)console.log(s,a,i),this.strAdd(a)}this.oreoArr[this.oreoArr.length-1]==="-"&&this.oreoArr.pop(),this.oreoArr.length===0&&this.getRandom()},generateImage(){if(this.oreoArr.length>0){this.loading=!0,this.output=!0;const s=this.oreoArr,o=[];s[s.length-1]==="-"&&s.pop();let a=0;for(let e=0;e<s.length;e++){const r=s[e];if(r!=="-"){const A={image:this.$refs[r],x:r==="R"?10:0,y:a,width:r==="R"?220:240,height:r==="R"?155:160};o.splice(0,0,A),a+=24}else a+=72}a+=160-24;const i=this.$refs.oreo_canvas;i.height=a;const c=i.getContext("2d");o.forEach(e=>{c.drawImage(e.image,e.x,e.y,e.width,e.height)}),u.get(i.toDataURL("image/png"),{responseType:"blob"}).then(e=>{this.imgUrl=URL.createObjectURL(e.data)}),setTimeout(()=>{this.loading=!1},1e3)}},backToInput(){this.output=!1,this.oreoArr=[],this.imgUrl=""}}},l=s=>(p("data-v-6d7c12a1"),s=s(),v(),s),C={class:"oreooo"},I={class:"content-loading"},w=["src"],O={class:"imgContainer"},q=["src"],L=["src"],U=["src"],P={class:"wrapper"},Z={class:"title"},B=l(()=>t("div",{class:"meta"}," \u6211\u60F3\u8981\uFF1A ",-1)),T={class:"input str"},z={class:"input str placeholder"},M=l(()=>t("span",null,"\u5965\u5229\u5965...",-1)),K=["src"],x={class:"control"},G={class:"wrapper"},E={class:"title"},H=l(()=>t("div",{class:"meta"}," \u8FD9\u662F\u4F60\u7684 ",-1)),J={class:"output str"},V={class:"output-image"},D={ref:"oreo_canvas",width:"240",height:"500"},Q={class:"btn"},Y=["href"];function j(s,o,a,i,c,e){return f(),m("div",C,[n(t("div",I,[t("img",{src:s.assets.Oreo,alt:"",class:"loading-img"},null,8,w)],512),[[d,s.loading]]),t("div",O,[t("img",{ref:"O",src:s.assets.O},null,8,q),t("img",{ref:"R",src:s.assets.R},null,8,L),t("img",{ref:"Ob",src:s.assets.Ob},null,8,U)]),n(t("div",P,[t("div",Z,[B,n(t("div",T,[t("span",null,h(e.oreoStr),1)],512),[[d,e.oreoStr]]),n(t("div",z,[M,t("img",{src:s.assets.random,class:"icon",onClick:o[0]||(o[0]=r=>e.getRandom())},null,8,K)],512),[[d,!e.oreoStr]])]),t("div",x,[t("div",{class:"btn",onClick:o[1]||(o[1]=r=>e.strAdd("o"))}," +\u5965 "),t("div",{class:"btn",onClick:o[2]||(o[2]=r=>e.strAdd("r"))}," +\u5229 "),t("div",{class:"btn",onClick:o[3]||(o[3]=r=>e.strAdd("-"))}," +\u4E0E "),t("div",{class:"btn",onClick:o[4]||(o[4]=r=>e.strAdd("-1"))}," -1 ")]),t("div",{class:"index-btn",onClick:o[5]||(o[5]=(...r)=>e.generateImage&&e.generateImage(...r))}," \u751F\u6210 ")],512),[[d,!s.loading&&!s.output]]),n(t("div",G,[t("div",E,[H,t("div",J,h(e.oreoStr),1)]),t("div",V,[t("canvas",D,"\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 HTML5 canvas \u6807\u7B7E\u3002",512)]),t("div",Q,[t("a",{href:s.imgUrl,target:"_blank"},"\u67E5\u770B\u56FE\u7247",8,Y)]),t("div",{class:"btn",onClick:o[6]||(o[6]=(...r)=>e.backToInput&&e.backToInput(...r))}," \u8FD4\u56DE ")],512),[[d,!s.loading&&s.output]])])}const W=g(y,[["render",j],["__scopeId","data-v-6d7c12a1"]]);export{W as default};
