var G=Object.defineProperty;var I=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var _=(e,t,o)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,k=(e,t)=>{for(var o in t||(t={}))w.call(t,o)&&_(e,o,t[o]);if(I)for(var o of I(t))L.call(t,o)&&_(e,o,t[o]);return e};var c=(e,t,o)=>(_(e,typeof t!="symbol"?t+"":t,o),o);import{a5 as P,j as y,bf as C,bg as R,c as a,a as s,J as d,ab as p,L as b,g as v,K as g,p as B,b as S,o as n,k as x}from"./vendor.53be07e2.js";import{_ as D}from"./index.35805241.js";class l{}c(l,"i",[[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]]]),c(l,"j",[[[1,0,0],[1,1,1],[0,0,0]],[[0,1,1],[0,1,0],[0,1,0]],[[0,0,0],[1,1,1],[0,0,1]],[[0,1,0],[0,1,0],[1,1,0]]]),c(l,"l",[[[0,0,1],[1,1,1],[0,0,0]],[[0,1,0],[0,1,0],[0,1,1]],[[0,0,0],[1,1,1],[1,0,0]],[[1,1,0],[0,1,0],[0,1,0]]]),c(l,"o",[[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]]),c(l,"s",[[[0,0,0],[0,1,1],[1,1,0]],[[0,1,0],[0,1,1],[0,0,1]]]),c(l,"t",[[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0],[0,1,1],[0,1,0]],[[0,0,0],[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]]]),c(l,"z",[[[0,0,0],[1,1,0],[0,1,1]],[[0,0,1],[0,1,1],[0,1,0]]]),c(l,"iLegend",[[0,0,0,0],[1,1,1,1]]),c(l,"jLegend",[[1,0,0,0],[1,1,1,0]]),c(l,"lLegend",[[0,0,1,0],[1,1,1,0]]),c(l,"oLegend",[[0,1,1,0],[0,1,1,0]]),c(l,"sLegend",[[0,1,1,0],[1,1,0,0]]),c(l,"tLegend",[[0,1,0,0],[1,1,1,0]]),c(l,"zLegend",[[1,1,0,0],[0,1,1,0]]);const{mapGetters:T,mapActions:K}=P("tetris"),A=["i","j","l","o","s","t","z"],N={name:"TetrisGame",data:()=>({inited:!1,gridCells:{col:10,row:20},matrix:null,rotate:0,position:null,currentTetrimino:null,nextTetrimino:null,tetriminosShuffle:[],score:0,lines:0,start:!1,end:!1,pause:!1,lock:!1,clearing:!1,clearIndexs:[],intervalID:void 0}),computed:k({movable:function(){return this.start&&!this.end&&!this.clearing&&!this.pause},level:function(){return Math.ceil(this.lines/10)},nextTetriminoMatrixLegend:function(){return this.nextTetrimino?l[this.nextTetrimino+"Legend"]:null},positions:function(){return this.currentTetrimino?this._getPositions(this._getRotatedMatrix(this.rotate),this.position):null},currentMatrix:function(){if(this.currentTetrimino){const e=y(this.matrix);for(const t of this.positions)t[0]>=0&&t[0]<this.gridCells.row&&t[1]>=0&&t[1]<this.gridCells.col&&(e[t[0]][t[1]]=this.currentTetrimino);return e}else return this.matrix},speed:function(){const e=this.level<=20?this.level:20;return 1e3*(.8-(e-1)*.007)**(e-1)}},T(["bestScore"])),mounted(){this.resetGame(),this.getNextTetrimino(),this.addListener(),this.inited=!0},beforeUnmount(){this.removeListener()},methods:k({playGame(){this.start||(this.score=0,this.lines=0,this.getNextTetrimino(),this.start=!0,this.intervalID=setInterval(()=>{this.clearing||this.moveDown()},this.speed))},resetGame(){clearInterval(this.intervalID);const e=Array(this.gridCells.row);for(const t of C(this.gridCells.row))e[t]=Array(this.gridCells.col).fill("");this.matrix=e,this.rotate=0,this.resetPosition(),this.currentTetrimino=void 0,this.start=!1,this.end=!1,this.pause=!1,this.lock=!1,this.clearing=!1},pauseGame(e){e?this.lock=!0:e===!1&&(this.lock=!1),this.start&&(this.lock===!1||e)&&(this.pause?(this.pause=!this.pause,this.intervalID=setInterval(()=>{this.clearing||this.moveDown()},this.speed)):(this.pause=!this.pause,clearInterval(this.intervalID)))},resetPosition(){this.rotate=0,this.position=[0,Math.ceil(this.gridCells.col/2)]},updateMatrix(){if(this.start){for(const t of this.positions)t[0]<0&&(this.end=!0);if(this.matrix=y(this.currentMatrix),this.end){this.pauseGame(!0),this.clearIndexs=[];for(const t of C(this.gridCells.row))this.clearIndexs.push(t);setTimeout(()=>{this.score>this.bestScore&&this.setBestScore(this.score),this.clearIndexs=[],this.resetGame()},600);return}this.score+=4;const e=[];for(const t in this.matrix)this.matrix[t].filter(h=>h==="").length===0&&e.push(parseInt(t));if(e.length>0){this.clearing=!0,this.pauseGame(!0),this.clearIndexs=e;const t=y(this.matrix);for(let h=this.clearIndexs.length-1;h>=0;h--)t.splice(this.clearIndexs[h],1);const o=Array(this.clearIndexs.length);for(const h of C(this.clearIndexs.length))o[h]=Array(this.gridCells.col).fill("");setTimeout(()=>{switch(this.lines+=this.clearIndexs.length,this.clearIndexs.length){case 1:this.score+=40*this.level;break;case 2:this.score+=100*this.level;break;case 3:this.score+=300*this.level;break;case 4:this.score+=1200*this.level;break}this.clearIndexs=[],this.matrix=[...o,...t],this.getNextTetrimino(),this.resetPosition(),this.clearing=!1,this.pauseGame(!1)},600)}else this.getNextTetrimino(),this.resetPosition()}},getNextTetrimino(){this.currentTetrimino=this.nextTetrimino,this.tetriminosShuffle.length<=7&&(this.tetriminosShuffle=this.tetriminosShuffle.concat(R(A))),this.nextTetrimino=this.tetriminosShuffle.shift()},rotateRight(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate-1),this.position))&&this.rotate++},rotateLeft(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate-1),this.position))&&this.rotate--},moveLeft(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0],this.position[1]-1]))&&this.position[1]--},moveRight(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0],this.position[1]+1]))&&this.position[1]++},moveDown(){this.movable&&(this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0]+1,this.position[1]]))?this.updateMatrix():this.position[0]++)},moveBottom(){if(this.movable){let e=0;for(;!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0]+e+1,this.position[1]]));)e++;this.position[0]+=e,this.updateMatrix()}},addListener(){document.addEventListener("keydown",this._keyboardEvent.bind(this))},removeListener(){document.removeEventListener("keydown",this._keyboardEvent.bind(this))},_getRotatedMatrix(e){let t=e%l[this.currentTetrimino].length;return t<0&&(t+=l[this.currentTetrimino].length),l[this.currentTetrimino][t]},_getPositions(e,t){const o=[];for(let h=0;h<e.length;h++)for(let f=0;f<e[h].length;f++)if(e[h][f]===1)switch(this.currentTetrimino){case"i":case"o":o.push([t[0]-2+h,t[1]-2+f]);break;case"j":case"l":case"t":o.push([t[0]-1+h,t[1]-1+f]);break;case"s":case"z":o.push([t[0]-2+h,t[1]-1+f]);break;default:return null}return o},_keyboardEvent(e){if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))switch(e.code){case"Space":this.start?(this.pause&&this.pauseGame(),this.moveBottom()):this.playGame();break;case"KeyW":case"KeyE":case"ArrowUp":this.pause&&this.pauseGame(),this.rotateRight();break;case"KeyQ":this.pause&&this.pauseGame(),this.rotateLeft();break;case"KeyS":case"ArrowDown":this.pause&&this.pauseGame(),this.moveDown();break;case"KeyA":case"ArrowLeft":this.pause&&this.pauseGame(),this.moveLeft();break;case"KeyD":case"ArrowRight":this.pause&&this.pauseGame(),this.moveRight();break;case"KeyP":this.pauseGame();break;case"KeyR":this.start?this.resetGame():this.playGame();break}},_hasConflict(e){for(const t of e){if(t[0]>=this.gridCells.row||t[1]<0||t[1]>=this.gridCells.col)return!0;if(t[0]>=0&&this.matrix[t[0]][t[1]]!=="")return!0}return!1}},K(["setBestScore"]))},u=e=>(B("data-v-144bddc4"),e=e(),S(),e),E={class:"gamePanel"},M={class:"tetrisPanel"},j={class:"tetrisMainPanel"},z={key:1,class:"tetrisCell"},V={class:"otherPanel"},F={class:"infoPanel"},U={class:"info"},H=g(" \u6700\u9AD8\u5206: "),J={class:"digital"},Q={class:"info"},W=g(" \u4E0A\u8F6E "),q=g(" \u5F97\u5206: "),O={class:"digital"},X={class:"info"},Y=g(" \u6D88\u9664\u884C: "),Z={class:"digital"},$={class:"info"},tt=g(" \u7EA7\u522B: "),et={class:"digital"},st=u(()=>s("div",{class:"info"}," \u4E0B\u4E00\u4E2A ",-1)),it={class:"nextTetrimino"},ot={key:1,class:"tetrisCell"},rt={class:"controlPanel"},at=u(()=>s("div",{class:"controlInfo pause"}," \u6682\u505CP ",-1)),nt=u(()=>s("div",{class:"controlInfo restart"}," \u91CD\u73A9R ",-1)),lt=u(()=>s("div",{class:"controlInfo drop"}," \u6389\u843DSpace ",-1)),ht=u(()=>s("div",{class:"controlInfo up"}," \u65CB\u8F6C ",-1)),ct=u(()=>s("div",{class:"controlInfo left"}," \u5DE6\u79FB ",-1)),dt=u(()=>s("div",{class:"controlInfo right"}," \u53F3\u79FB ",-1)),ut=u(()=>s("div",{class:"controlInfo down"}," \u4E0B\u79FB ",-1));function ft(e,t,o,h,f,r){return n(),a("div",null,[s("div",E,[s("div",M,[(n(!0),a(d,null,p(e.gridCells.col*2+e.gridCells.row*2+4,i=>(n(),a("div",{key:"tetrisFrameGrid"+i,class:x(["tetrisCell","tetrisCellGrid"])}))),128)),s("div",j,[e.inited?(n(!0),a(d,{key:0},p(e.gridCells.row,i=>(n(),a(d,{key:i},[(n(!0),a(d,null,p(e.gridCells.col,m=>(n(),a(d,{key:m},[r.currentMatrix[i-1][m-1]?(n(),a("div",{key:0,class:x(["tetrisCell","tetrisCellColor-"+r.currentMatrix[i-1][m-1],e.clearIndexs.includes(i-1)?"blink":""])},null,2)):(n(),a("div",z))],64))),128))],64))),128)):b("",!0)])]),s("div",V,[s("div",F,[s("div",U,[H,s("span",J,v(e.bestScore),1)]),s("div",Q,[e.start?b("",!0):(n(),a(d,{key:0},[W],64)),q,s("span",O,v(e.score),1)]),s("div",X,[Y,s("span",Z,v(e.lines),1)]),s("div",$,[tt,s("span",et,v(r.level),1)]),st,s("div",it,[e.inited?(n(),a(d,{key:0},p(2,i=>(n(),a(d,{key:i},[(n(),a(d,null,p(4,m=>(n(),a(d,{key:m},[r.nextTetriminoMatrixLegend[i-1][m-1]?(n(),a("div",{key:0,class:x(["tetrisCell","tetrisCellColor-"+e.nextTetrimino])},null,2)):(n(),a("div",ot))],64))),64))],64))),64)):b("",!0)])]),s("div",rt,[s("div",{class:"controlButton pause",onClick:t[0]||(t[0]=(...i)=>r.pauseGame&&r.pauseGame(...i))}),at,e.start?(n(),a("div",{key:0,class:"controlButton restart",onClick:t[1]||(t[1]=(...i)=>r.resetGame&&r.resetGame(...i))})):(n(),a("div",{key:1,class:"controlButton restart",onClick:t[2]||(t[2]=(...i)=>r.playGame&&r.playGame(...i))})),nt,e.start?(n(),a("div",{key:2,class:"controlButton drop",onClick:t[3]||(t[3]=(...i)=>r.moveBottom&&r.moveBottom(...i))})):(n(),a("div",{key:3,class:"controlButton drop",onClick:t[4]||(t[4]=(...i)=>r.playGame&&r.playGame(...i))})),lt,s("div",{class:"controlButton up",onClick:t[5]||(t[5]=(...i)=>r.rotateRight&&r.rotateRight(...i))}),ht,s("div",{class:"controlButton left",onClick:t[6]||(t[6]=(...i)=>r.moveLeft&&r.moveLeft(...i))}),ct,s("div",{class:"controlButton right",onClick:t[7]||(t[7]=(...i)=>r.moveRight&&r.moveRight(...i))}),dt,s("div",{class:"controlButton down",onClick:t[8]||(t[8]=(...i)=>r.moveDown&&r.moveDown(...i))}),ut])])])])}var vt=D(N,[["render",ft],["__scopeId","data-v-144bddc4"]]);export{vt as default};
