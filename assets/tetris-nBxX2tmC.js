var x=Object.defineProperty;var I=(e,t,o)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var d=(e,t,o)=>I(e,typeof t!="symbol"?t+"":t,o);import{bT as G,bM as w,dB as L,d as S,a0 as P,b4 as p,Q as R,au as B,F as n,G as i,X as u,Y as m,H as k,L as g,I as v,o as l,n as C}from"./index-Df3kmF7M.js";import{r as y}from"./range-BYs7jkfc.js";import{b as T}from"./_baseRandom-CgWnUD7v.js";import"./toFinite-DfDQjTEV.js";function D(e,t){return G(t,function(o){return e[o]})}function _(e){return e==null?[]:D(e,w(e))}function b(e,t){var o=-1,a=e.length,f=a-1;for(t=t===void 0?a:t;++o<t;){var r=T(o,f),s=e[r];e[r]=e[o],e[o]=s}return e.length=t,e}function K(e){return b(L(e))}function A(e){return b(_(e))}function M(e){var t=S(e)?K:A;return t(e)}class h{}d(h,"i",[[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]]]),d(h,"j",[[[1,0,0],[1,1,1],[0,0,0]],[[0,1,1],[0,1,0],[0,1,0]],[[0,0,0],[1,1,1],[0,0,1]],[[0,1,0],[0,1,0],[1,1,0]]]),d(h,"l",[[[0,0,1],[1,1,1],[0,0,0]],[[0,1,0],[0,1,0],[0,1,1]],[[0,0,0],[1,1,1],[1,0,0]],[[1,1,0],[0,1,0],[0,1,0]]]),d(h,"o",[[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]]),d(h,"s",[[[0,0,0],[0,1,1],[1,1,0]],[[0,1,0],[0,1,1],[0,0,1]]]),d(h,"t",[[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0],[0,1,1],[0,1,0]],[[0,0,0],[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]]]),d(h,"z",[[[0,0,0],[1,1,0],[0,1,1]],[[0,0,1],[0,1,1],[0,1,0]]]),d(h,"iLegend",[[0,0,0,0],[1,1,1,1]]),d(h,"jLegend",[[1,0,0,0],[1,1,1,0]]),d(h,"lLegend",[[0,0,1,0],[1,1,1,0]]),d(h,"oLegend",[[0,1,1,0],[0,1,1,0]]),d(h,"sLegend",[[0,1,1,0],[1,1,0,0]]),d(h,"tLegend",[[0,1,0,0],[1,1,1,0]]),d(h,"zLegend",[[1,1,0,0],[0,1,1,0]]);const N=["i","j","l","o","s","t","z"],E={name:"TetrisGame",data:()=>({inited:!1,gridCells:{col:10,row:20},matrix:null,rotate:0,position:null,currentTetrimino:null,nextTetrimino:null,tetriminosShuffle:[],score:0,lines:0,start:!1,end:!1,pause:!1,lock:!1,clearing:!1,clearIndexs:[],intervalID:void 0}),computed:{movable(){return this.start&&!this.end&&!this.clearing&&!this.pause},level(){return Math.ceil(this.lines/10)},nextTetriminoMatrixLegend(){return this.nextTetrimino?h[`${this.nextTetrimino}Legend`]:null},positions(){return this.currentTetrimino?this._getPositions(this._getRotatedMatrix(this.rotate),this.position):null},currentMatrix(){if(this.currentTetrimino){const e=p(this.matrix);for(const t of this.positions)t[0]>=0&&t[0]<this.gridCells.row&&t[1]>=0&&t[1]<this.gridCells.col&&(e[t[0]][t[1]]=this.currentTetrimino);return e}else return this.matrix},speed(){const e=this.level<=20?this.level:20;return 1e3*(.8-(e-1)*.007)**(e-1)},bestScore(){return R().modules.tetris.bestScore}},mounted(){this.resetGame(),this.getNextTetrimino(),this.addListener(),this.inited=!0},beforeUnmount(){this.removeListener()},methods:{playGame(){this.start||(this.score=0,this.lines=0,this.getNextTetrimino(),this.start=!0,this.intervalID=setInterval(()=>{this.clearing||this.moveDown()},this.speed))},resetGame(){clearInterval(this.intervalID);const e=Array.from({length:this.gridCells.row});for(const t of y(this.gridCells.row))e[t]=Array.from({length:this.gridCells.col}).fill("");this.matrix=e,this.rotate=0,this.resetPosition(),this.currentTetrimino=void 0,this.start=!1,this.end=!1,this.pause=!1,this.lock=!1,this.clearing=!1},pauseGame(e){e?this.lock=!0:e===!1&&(this.lock=!1),this.start&&(this.lock===!1||e)&&(this.pause?(this.pause=!this.pause,this.intervalID=setInterval(()=>{this.clearing||this.moveDown()},this.speed)):(this.pause=!this.pause,clearInterval(this.intervalID)))},resetPosition(){this.rotate=0,this.position=[0,Math.ceil(this.gridCells.col/2)]},updateMatrix(){if(this.start){for(const t of this.positions)t[0]<0&&(this.end=!0);if(this.matrix=p(this.currentMatrix),this.end){this.pauseGame(!0),this.clearIndexs=[];for(const t of y(this.gridCells.row))this.clearIndexs.push(t);setTimeout(()=>{this.score>this.bestScore&&this.setBestScore(this.score),this.clearIndexs=[],this.resetGame()},600);return}this.score+=4;const e=[];for(const t in this.matrix)this.matrix[t].filter(a=>a==="").length===0&&e.push(Number.parseInt(t));if(e.length>0){this.clearing=!0,this.pauseGame(!0),this.clearIndexs=e;const t=p(this.matrix);for(let a=this.clearIndexs.length-1;a>=0;a--)t.splice(this.clearIndexs[a],1);const o=Array.from({length:this.clearIndexs.length});for(const a of y(this.clearIndexs.length))o[a]=Array.from({length:this.gridCells.col}).fill("");setTimeout(()=>{switch(this.lines+=this.clearIndexs.length,this.clearIndexs.length){case 1:this.score+=40*this.level;break;case 2:this.score+=100*this.level;break;case 3:this.score+=300*this.level;break;case 4:this.score+=1200*this.level;break}this.clearIndexs=[],this.matrix=[...o,...t],this.getNextTetrimino(),this.resetPosition(),this.clearing=!1,this.pauseGame(!1)},600)}else this.getNextTetrimino(),this.resetPosition()}},getNextTetrimino(){this.currentTetrimino=this.nextTetrimino,this.tetriminosShuffle.length<=7&&(this.tetriminosShuffle=this.tetriminosShuffle.concat(M(N))),this.nextTetrimino=this.tetriminosShuffle.shift()},rotateRight(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate-1),this.position))&&this.rotate++},rotateLeft(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate-1),this.position))&&this.rotate--},moveLeft(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0],this.position[1]-1]))&&this.position[1]--},moveRight(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0],this.position[1]+1]))&&this.position[1]++},moveDown(){this.movable&&(this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0]+1,this.position[1]]))?this.updateMatrix():this.position[0]++)},moveBottom(){if(this.movable){let e=0;for(;!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0]+e+1,this.position[1]]));)e++;this.position[0]+=e,this.updateMatrix()}},addListener(){document.addEventListener("keydown",this._keyboardEvent.bind(this))},removeListener(){document.removeEventListener("keydown",this._keyboardEvent.bind(this))},_getRotatedMatrix(e){let t=e%h[this.currentTetrimino].length;return t<0&&(t+=h[this.currentTetrimino].length),h[this.currentTetrimino][t]},_getPositions(e,t){const o=[];for(let a=0;a<e.length;a++)for(let f=0;f<e[a].length;f++)if(e[a][f]===1)switch(this.currentTetrimino){case"i":case"o":o.push([t[0]-2+a,t[1]-2+f]);break;case"j":case"l":case"t":o.push([t[0]-1+a,t[1]-1+f]);break;case"s":case"z":o.push([t[0]-2+a,t[1]-1+f]);break;default:return null}return o},_keyboardEvent(e){if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))switch(e.code){case"Space":this.start?(this.pause&&this.pauseGame(),this.moveBottom()):this.playGame();break;case"KeyW":case"KeyE":case"ArrowUp":this.pause&&this.pauseGame(),this.rotateRight();break;case"KeyQ":this.pause&&this.pauseGame(),this.rotateLeft();break;case"KeyS":case"ArrowDown":this.pause&&this.pauseGame(),this.moveDown();break;case"KeyA":case"ArrowLeft":this.pause&&this.pauseGame(),this.moveLeft();break;case"KeyD":case"ArrowRight":this.pause&&this.pauseGame(),this.moveRight();break;case"KeyP":this.pauseGame();break;case"KeyR":this.start?this.resetGame():this.playGame();break}},_hasConflict(e){for(const t of e){if(t[0]>=this.gridCells.row||t[1]<0||t[1]>=this.gridCells.col)return!0;if(t[0]>=0&&this.matrix[t[0]][t[1]]!=="")return!0}return!1},setBestScore(e){B().modules.tetris.bestScore=e}}},V={class:"gamePanel"},F={class:"tetrisPanel"},U={class:"tetrisMainPanel"},j={key:1,class:"tetrisCell"},Q={class:"otherPanel"},z={class:"infoPanel"},H={class:"info"},W={class:"digital"},X={class:"info"},Y={class:"digital"},q={class:"info"},J={class:"digital"},O={class:"info"},Z={class:"digital"},$={class:"nextTetrimino"},tt={key:1,class:"tetrisCell"},et={class:"controlPanel"};function st(e,t,o,a,f,r){return l(),n("div",null,[i("div",V,[i("div",F,[(l(!0),n(u,null,m(e.gridCells.col*2+e.gridCells.row*2+4,s=>(l(),n("div",{key:`tetrisFrameGrid${s}`,class:"tetrisCell tetrisCellGrid"}))),128)),i("div",U,[e.inited?(l(!0),n(u,{key:0},m(e.gridCells.row,s=>(l(),n(u,{key:s},[(l(!0),n(u,null,m(e.gridCells.col,c=>(l(),n(u,{key:c},[r.currentMatrix[s-1][c-1]?(l(),n("div",{key:0,class:C(["tetrisCell",[`tetrisCellColor-${r.currentMatrix[s-1][c-1]}`,e.clearIndexs.includes(s-1)?"blink":""]])},null,2)):(l(),n("div",j))],64))),128))],64))),128)):k("",!0)])]),i("div",Q,[i("div",z,[i("div",H,[t[9]||(t[9]=g(" 最高分: ")),i("span",W,v(r.bestScore),1)]),i("div",X,[e.start?k("",!0):(l(),n(u,{key:0},[g(" 上轮 ")],64)),t[10]||(t[10]=g(" 得分: ")),i("span",Y,v(e.score),1)]),i("div",q,[t[11]||(t[11]=g(" 消除行: ")),i("span",J,v(e.lines),1)]),i("div",O,[t[12]||(t[12]=g(" 级别: ")),i("span",Z,v(r.level),1)]),t[13]||(t[13]=i("div",{class:"info"}," 下一个 ",-1)),i("div",$,[e.inited?(l(),n(u,{key:0},m(2,s=>(l(),n(u,{key:s},[(l(),n(u,null,m(4,c=>(l(),n(u,{key:c},[r.nextTetriminoMatrixLegend[s-1][c-1]?(l(),n("div",{key:0,class:C(["tetrisCell",[`tetrisCellColor-${e.nextTetrimino}`]])},null,2)):(l(),n("div",tt))],64))),64))],64))),64)):k("",!0)])]),i("div",et,[i("div",{class:"controlButton pause",onClick:t[0]||(t[0]=(...s)=>r.pauseGame&&r.pauseGame(...s))}),t[14]||(t[14]=i("div",{class:"pause controlInfo"}," 暂停P ",-1)),e.start?(l(),n("div",{key:0,class:"controlButton restart",onClick:t[1]||(t[1]=(...s)=>r.resetGame&&r.resetGame(...s))})):(l(),n("div",{key:1,class:"controlButton restart",onClick:t[2]||(t[2]=(...s)=>r.playGame&&r.playGame(...s))})),t[15]||(t[15]=i("div",{class:"controlInfo restart"}," 重玩R ",-1)),e.start?(l(),n("div",{key:2,class:"controlButton drop",onClick:t[3]||(t[3]=(...s)=>r.moveBottom&&r.moveBottom(...s))})):(l(),n("div",{key:3,class:"controlButton drop",onClick:t[4]||(t[4]=(...s)=>r.playGame&&r.playGame(...s))})),t[16]||(t[16]=i("div",{class:"controlInfo drop"}," 掉落Space ",-1)),i("div",{class:"controlButton up",onClick:t[5]||(t[5]=(...s)=>r.rotateRight&&r.rotateRight(...s))}),t[17]||(t[17]=i("div",{class:"controlInfo up"}," 旋转 ",-1)),i("div",{class:"controlButton left",onClick:t[6]||(t[6]=(...s)=>r.moveLeft&&r.moveLeft(...s))}),t[18]||(t[18]=i("div",{class:"controlInfo left"}," 左移 ",-1)),i("div",{class:"controlButton right",onClick:t[7]||(t[7]=(...s)=>r.moveRight&&r.moveRight(...s))}),t[19]||(t[19]=i("div",{class:"controlInfo right"}," 右移 ",-1)),i("div",{class:"controlButton down",onClick:t[8]||(t[8]=(...s)=>r.moveDown&&r.moveDown(...s))}),t[20]||(t[20]=i("div",{class:"controlInfo down"}," 下移 ",-1))])])])])}const at=P(E,[["render",st],["__scopeId","data-v-f3aa8138"]]);export{at as default};
