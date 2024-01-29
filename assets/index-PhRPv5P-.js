var I=Object.defineProperty;var w=(t,e,r)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var c=(t,e,r)=>(w(t,typeof e!="symbol"?e+"":e,r),r);import{cd as G,c8 as L,dz as S,aj as P,e as R,aE as _,b,f as n,g as i,F as d,r as g,a1 as k,x as p,A as v,o as a,a0 as y,p as B,h as D}from"./index-Qxs6HJco.js";import{r as C}from"./range-azhGtBzX.js";import{b as T}from"./_baseRandom-YcfkcgcC.js";import"./toFinite-wsya9F5G.js";function A(t,e){return G(e,function(r){return t[r]})}function K(t){return t==null?[]:A(t,L(t))}function x(t,e){var r=-1,l=t.length,u=l-1;for(e=e===void 0?l:e;++r<e;){var o=T(r,u),s=t[o];t[o]=t[r],t[r]=s}return t.length=e,t}function E(t){return x(S(t))}function M(t){return x(K(t))}function N(t){var e=P(t)?E:M;return e(t)}class h{}c(h,"i",[[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]]]),c(h,"j",[[[1,0,0],[1,1,1],[0,0,0]],[[0,1,1],[0,1,0],[0,1,0]],[[0,0,0],[1,1,1],[0,0,1]],[[0,1,0],[0,1,0],[1,1,0]]]),c(h,"l",[[[0,0,1],[1,1,1],[0,0,0]],[[0,1,0],[0,1,0],[0,1,1]],[[0,0,0],[1,1,1],[1,0,0]],[[1,1,0],[0,1,0],[0,1,0]]]),c(h,"o",[[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]]),c(h,"s",[[[0,0,0],[0,1,1],[1,1,0]],[[0,1,0],[0,1,1],[0,0,1]]]),c(h,"t",[[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0],[0,1,1],[0,1,0]],[[0,0,0],[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]]]),c(h,"z",[[[0,0,0],[1,1,0],[0,1,1]],[[0,0,1],[0,1,1],[0,1,0]]]),c(h,"iLegend",[[0,0,0,0],[1,1,1,1]]),c(h,"jLegend",[[1,0,0,0],[1,1,1,0]]),c(h,"lLegend",[[0,0,1,0],[1,1,1,0]]),c(h,"oLegend",[[0,1,1,0],[0,1,1,0]]),c(h,"sLegend",[[0,1,1,0],[1,1,0,0]]),c(h,"tLegend",[[0,1,0,0],[1,1,1,0]]),c(h,"zLegend",[[1,1,0,0],[0,1,1,0]]);const V=["i","j","l","o","s","t","z"],j={name:"TetrisGame",data:()=>({inited:!1,gridCells:{col:10,row:20},matrix:null,rotate:0,position:null,currentTetrimino:null,nextTetrimino:null,tetriminosShuffle:[],score:0,lines:0,start:!1,end:!1,pause:!1,lock:!1,clearing:!1,clearIndexs:[],intervalID:void 0}),computed:{movable:function(){return this.start&&!this.end&&!this.clearing&&!this.pause},level:function(){return Math.ceil(this.lines/10)},nextTetriminoMatrixLegend:function(){return this.nextTetrimino?h[this.nextTetrimino+"Legend"]:null},positions:function(){return this.currentTetrimino?this._getPositions(this._getRotatedMatrix(this.rotate),this.position):null},currentMatrix:function(){if(this.currentTetrimino){const t=_(this.matrix);for(const e of this.positions)e[0]>=0&&e[0]<this.gridCells.row&&e[1]>=0&&e[1]<this.gridCells.col&&(t[e[0]][e[1]]=this.currentTetrimino);return t}else return this.matrix},speed:function(){const t=this.level<=20?this.level:20;return 1e3*(.8-(t-1)*.007)**(t-1)},bestScore:function(){return b().modules.tetris.bestScore}},mounted(){this.resetGame(),this.getNextTetrimino(),this.addListener(),this.inited=!0},beforeUnmount(){this.removeListener()},methods:{playGame(){this.start||(this.score=0,this.lines=0,this.getNextTetrimino(),this.start=!0,this.intervalID=setInterval(()=>{this.clearing||this.moveDown()},this.speed))},resetGame(){clearInterval(this.intervalID);const t=Array(this.gridCells.row);for(const e of C(this.gridCells.row))t[e]=Array(this.gridCells.col).fill("");this.matrix=t,this.rotate=0,this.resetPosition(),this.currentTetrimino=void 0,this.start=!1,this.end=!1,this.pause=!1,this.lock=!1,this.clearing=!1},pauseGame(t){t?this.lock=!0:t===!1&&(this.lock=!1),this.start&&(this.lock===!1||t)&&(this.pause?(this.pause=!this.pause,this.intervalID=setInterval(()=>{this.clearing||this.moveDown()},this.speed)):(this.pause=!this.pause,clearInterval(this.intervalID)))},resetPosition(){this.rotate=0,this.position=[0,Math.ceil(this.gridCells.col/2)]},updateMatrix(){if(this.start){for(const e of this.positions)e[0]<0&&(this.end=!0);if(this.matrix=_(this.currentMatrix),this.end){this.pauseGame(!0),this.clearIndexs=[];for(const e of C(this.gridCells.row))this.clearIndexs.push(e);setTimeout(()=>{this.score>this.bestScore&&this.setBestScore(this.score),this.clearIndexs=[],this.resetGame()},600);return}this.score+=4;const t=[];for(const e in this.matrix)this.matrix[e].filter(l=>l==="").length===0&&t.push(parseInt(e));if(t.length>0){this.clearing=!0,this.pauseGame(!0),this.clearIndexs=t;const e=_(this.matrix);for(let l=this.clearIndexs.length-1;l>=0;l--)e.splice(this.clearIndexs[l],1);const r=Array(this.clearIndexs.length);for(const l of C(this.clearIndexs.length))r[l]=Array(this.gridCells.col).fill("");setTimeout(()=>{switch(this.lines+=this.clearIndexs.length,this.clearIndexs.length){case 1:this.score+=40*this.level;break;case 2:this.score+=100*this.level;break;case 3:this.score+=300*this.level;break;case 4:this.score+=1200*this.level;break}this.clearIndexs=[],this.matrix=[...r,...e],this.getNextTetrimino(),this.resetPosition(),this.clearing=!1,this.pauseGame(!1)},600)}else this.getNextTetrimino(),this.resetPosition()}},getNextTetrimino(){this.currentTetrimino=this.nextTetrimino,this.tetriminosShuffle.length<=7&&(this.tetriminosShuffle=this.tetriminosShuffle.concat(N(V))),this.nextTetrimino=this.tetriminosShuffle.shift()},rotateRight(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate-1),this.position))&&this.rotate++},rotateLeft(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate-1),this.position))&&this.rotate--},moveLeft(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0],this.position[1]-1]))&&this.position[1]--},moveRight(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0],this.position[1]+1]))&&this.position[1]++},moveDown(){this.movable&&(this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0]+1,this.position[1]]))?this.updateMatrix():this.position[0]++)},moveBottom(){if(this.movable){let t=0;for(;!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0]+t+1,this.position[1]]));)t++;this.position[0]+=t,this.updateMatrix()}},addListener(){document.addEventListener("keydown",this._keyboardEvent.bind(this))},removeListener(){document.removeEventListener("keydown",this._keyboardEvent.bind(this))},_getRotatedMatrix(t){let e=t%h[this.currentTetrimino].length;return e<0&&(e+=h[this.currentTetrimino].length),h[this.currentTetrimino][e]},_getPositions(t,e){const r=[];for(let l=0;l<t.length;l++)for(let u=0;u<t[l].length;u++)if(t[l][u]===1)switch(this.currentTetrimino){case"i":case"o":r.push([e[0]-2+l,e[1]-2+u]);break;case"j":case"l":case"t":r.push([e[0]-1+l,e[1]-1+u]);break;case"s":case"z":r.push([e[0]-2+l,e[1]-1+u]);break;default:return null}return r},_keyboardEvent(t){if(!(t.altKey||t.ctrlKey||t.metaKey||t.shiftKey))switch(t.code){case"Space":this.start?(this.pause&&this.pauseGame(),this.moveBottom()):this.playGame();break;case"KeyW":case"KeyE":case"ArrowUp":this.pause&&this.pauseGame(),this.rotateRight();break;case"KeyQ":this.pause&&this.pauseGame(),this.rotateLeft();break;case"KeyS":case"ArrowDown":this.pause&&this.pauseGame(),this.moveDown();break;case"KeyA":case"ArrowLeft":this.pause&&this.pauseGame(),this.moveLeft();break;case"KeyD":case"ArrowRight":this.pause&&this.pauseGame(),this.moveRight();break;case"KeyP":this.pauseGame();break;case"KeyR":this.start?this.resetGame():this.playGame();break}},_hasConflict(t){for(const e of t){if(e[0]>=this.gridCells.row||e[1]<0||e[1]>=this.gridCells.col)return!0;if(e[0]>=0&&this.matrix[e[0]][e[1]]!=="")return!0}return!1},setBestScore(t){b().modules.tetris.bestScore=t}}},f=t=>(B("data-v-3891317f"),t=t(),D(),t),F={class:"gamePanel"},U={class:"tetrisPanel"},z={class:"tetrisMainPanel"},Q={key:1,class:"tetrisCell"},W={class:"otherPanel"},q={class:"infoPanel"},H={class:"info"},J={class:"digital"},O={class:"info"},X={class:"digital"},Y={class:"info"},Z={class:"digital"},$={class:"info"},tt={class:"digital"},et=f(()=>i("div",{class:"info"}," 下一个 ",-1)),st={class:"nextTetrimino"},it={key:1,class:"tetrisCell"},ot={class:"controlPanel"},rt=f(()=>i("div",{class:"controlInfo pause"}," 暂停P ",-1)),nt=f(()=>i("div",{class:"controlInfo restart"}," 重玩R ",-1)),at=f(()=>i("div",{class:"controlInfo drop"}," 掉落Space ",-1)),lt=f(()=>i("div",{class:"controlInfo up"}," 旋转 ",-1)),ht=f(()=>i("div",{class:"controlInfo left"}," 左移 ",-1)),ct=f(()=>i("div",{class:"controlInfo right"}," 右移 ",-1)),dt=f(()=>i("div",{class:"controlInfo down"}," 下移 ",-1));function ut(t,e,r,l,u,o){return a(),n("div",null,[i("div",F,[i("div",U,[(a(!0),n(d,null,g(t.gridCells.col*2+t.gridCells.row*2+4,s=>(a(),n("div",{key:"tetrisFrameGrid"+s,class:y(["tetrisCell","tetrisCellGrid"])}))),128)),i("div",z,[t.inited?(a(!0),n(d,{key:0},g(t.gridCells.row,s=>(a(),n(d,{key:s},[(a(!0),n(d,null,g(t.gridCells.col,m=>(a(),n(d,{key:m},[o.currentMatrix[s-1][m-1]?(a(),n("div",{key:0,class:y(["tetrisCell","tetrisCellColor-"+o.currentMatrix[s-1][m-1],t.clearIndexs.includes(s-1)?"blink":""])},null,2)):(a(),n("div",Q))],64))),128))],64))),128)):k("",!0)])]),i("div",W,[i("div",q,[i("div",H,[p(" 最高分: "),i("span",J,v(o.bestScore),1)]),i("div",O,[t.start?k("",!0):(a(),n(d,{key:0},[p(" 上轮 ")],64)),p(" 得分: "),i("span",X,v(t.score),1)]),i("div",Y,[p(" 消除行: "),i("span",Z,v(t.lines),1)]),i("div",$,[p(" 级别: "),i("span",tt,v(o.level),1)]),et,i("div",st,[t.inited?(a(),n(d,{key:0},g(2,s=>(a(),n(d,{key:s},[(a(),n(d,null,g(4,m=>(a(),n(d,{key:m},[o.nextTetriminoMatrixLegend[s-1][m-1]?(a(),n("div",{key:0,class:y(["tetrisCell","tetrisCellColor-"+t.nextTetrimino])},null,2)):(a(),n("div",it))],64))),64))],64))),64)):k("",!0)])]),i("div",ot,[i("div",{class:"controlButton pause",onClick:e[0]||(e[0]=(...s)=>o.pauseGame&&o.pauseGame(...s))}),rt,t.start?(a(),n("div",{key:0,class:"controlButton restart",onClick:e[1]||(e[1]=(...s)=>o.resetGame&&o.resetGame(...s))})):(a(),n("div",{key:1,class:"controlButton restart",onClick:e[2]||(e[2]=(...s)=>o.playGame&&o.playGame(...s))})),nt,t.start?(a(),n("div",{key:2,class:"controlButton drop",onClick:e[3]||(e[3]=(...s)=>o.moveBottom&&o.moveBottom(...s))})):(a(),n("div",{key:3,class:"controlButton drop",onClick:e[4]||(e[4]=(...s)=>o.playGame&&o.playGame(...s))})),at,i("div",{class:"controlButton up",onClick:e[5]||(e[5]=(...s)=>o.rotateRight&&o.rotateRight(...s))}),lt,i("div",{class:"controlButton left",onClick:e[6]||(e[6]=(...s)=>o.moveLeft&&o.moveLeft(...s))}),ht,i("div",{class:"controlButton right",onClick:e[7]||(e[7]=(...s)=>o.moveRight&&o.moveRight(...s))}),ct,i("div",{class:"controlButton down",onClick:e[8]||(e[8]=(...s)=>o.moveDown&&o.moveDown(...s))}),dt])])])])}const _t=R(j,[["render",ut],["__scopeId","data-v-3891317f"]]);export{_t as default};
