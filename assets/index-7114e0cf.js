import{L as I,M as w,N as G,O as T,P as M,_ as L,Q as p,G as C,o as a,l,m as n,H as c,I as f,s as _,b as m,t as v,p as x,J as S,K as R}from"./index-ae2f467a.js";import{t as k}from"./toFinite-3d448966.js";import{b as P}from"./_baseRandom-7bfb07b8.js";function B(t,e){return I(e,function(o){return t[o]})}function D(t){return t==null?[]:B(t,w(t))}var K=Math.ceil,A=Math.max;function N(t,e,o,i){for(var h=-1,r=A(K((e-t)/(o||1)),0),s=Array(r);r--;)s[i?r:++h]=t,t+=o;return s}function E(t){return function(e,o,i){return i&&typeof i!="number"&&G(e,o,i)&&(o=i=void 0),e=k(e),o===void 0?(o=e,e=0):o=k(o),i=i===void 0?e<o?1:-1:k(i),N(e,o,i,t)}}var V=E();const y=V;function b(t,e){var o=-1,i=t.length,h=i-1;for(e=e===void 0?i:e;++o<e;){var r=P(o,h),s=t[r];t[r]=t[o],t[o]=s}return t.length=e,t}function F(t){return b(T(t))}function U(t){return b(D(t))}function j(t){var e=M(t)?F:U;return e(t)}class g{static i=[[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]]];static j=[[[1,0,0],[1,1,1],[0,0,0]],[[0,1,1],[0,1,0],[0,1,0]],[[0,0,0],[1,1,1],[0,0,1]],[[0,1,0],[0,1,0],[1,1,0]]];static l=[[[0,0,1],[1,1,1],[0,0,0]],[[0,1,0],[0,1,0],[0,1,1]],[[0,0,0],[1,1,1],[1,0,0]],[[1,1,0],[0,1,0],[0,1,0]]];static o=[[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]];static s=[[[0,0,0],[0,1,1],[1,1,0]],[[0,1,0],[0,1,1],[0,0,1]]];static t=[[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0],[0,1,1],[0,1,0]],[[0,0,0],[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]]];static z=[[[0,0,0],[1,1,0],[0,1,1]],[[0,0,1],[0,1,1],[0,1,0]]];static iLegend=[[0,0,0,0],[1,1,1,1]];static jLegend=[[1,0,0,0],[1,1,1,0]];static lLegend=[[0,0,1,0],[1,1,1,0]];static oLegend=[[0,1,1,0],[0,1,1,0]];static sLegend=[[0,1,1,0],[1,1,0,0]];static tLegend=[[0,1,0,0],[1,1,1,0]];static zLegend=[[1,1,0,0],[0,1,1,0]]}const Q=["i","j","l","o","s","t","z"],z={name:"TetrisGame",data:()=>({inited:!1,gridCells:{col:10,row:20},matrix:null,rotate:0,position:null,currentTetrimino:null,nextTetrimino:null,tetriminosShuffle:[],score:0,lines:0,start:!1,end:!1,pause:!1,lock:!1,clearing:!1,clearIndexs:[],intervalID:void 0}),computed:{movable:function(){return this.start&&!this.end&&!this.clearing&&!this.pause},level:function(){return Math.ceil(this.lines/10)},nextTetriminoMatrixLegend:function(){return this.nextTetrimino?g[this.nextTetrimino+"Legend"]:null},positions:function(){return this.currentTetrimino?this._getPositions(this._getRotatedMatrix(this.rotate),this.position):null},currentMatrix:function(){if(this.currentTetrimino){const t=p(this.matrix);for(const e of this.positions)e[0]>=0&&e[0]<this.gridCells.row&&e[1]>=0&&e[1]<this.gridCells.col&&(t[e[0]][e[1]]=this.currentTetrimino);return t}else return this.matrix},speed:function(){const t=this.level<=20?this.level:20;return 1e3*(.8-(t-1)*.007)**(t-1)},bestScore:function(){return C().modules.tetris.bestScore}},mounted(){this.resetGame(),this.getNextTetrimino(),this.addListener(),this.inited=!0},beforeUnmount(){this.removeListener()},methods:{playGame(){this.start||(this.score=0,this.lines=0,this.getNextTetrimino(),this.start=!0,this.intervalID=setInterval(()=>{this.clearing||this.moveDown()},this.speed))},resetGame(){clearInterval(this.intervalID);const t=Array(this.gridCells.row);for(const e of y(this.gridCells.row))t[e]=Array(this.gridCells.col).fill("");this.matrix=t,this.rotate=0,this.resetPosition(),this.currentTetrimino=void 0,this.start=!1,this.end=!1,this.pause=!1,this.lock=!1,this.clearing=!1},pauseGame(t){t?this.lock=!0:t===!1&&(this.lock=!1),this.start&&(this.lock===!1||t)&&(this.pause?(this.pause=!this.pause,this.intervalID=setInterval(()=>{this.clearing||this.moveDown()},this.speed)):(this.pause=!this.pause,clearInterval(this.intervalID)))},resetPosition(){this.rotate=0,this.position=[0,Math.ceil(this.gridCells.col/2)]},updateMatrix(){if(this.start){for(const e of this.positions)e[0]<0&&(this.end=!0);if(this.matrix=p(this.currentMatrix),this.end){this.pauseGame(!0),this.clearIndexs=[];for(const e of y(this.gridCells.row))this.clearIndexs.push(e);setTimeout(()=>{this.score>this.bestScore&&this.setBestScore(this.score),this.clearIndexs=[],this.resetGame()},600);return}this.score+=4;const t=[];for(const e in this.matrix)this.matrix[e].filter(i=>i==="").length===0&&t.push(parseInt(e));if(t.length>0){this.clearing=!0,this.pauseGame(!0),this.clearIndexs=t;const e=p(this.matrix);for(let i=this.clearIndexs.length-1;i>=0;i--)e.splice(this.clearIndexs[i],1);const o=Array(this.clearIndexs.length);for(const i of y(this.clearIndexs.length))o[i]=Array(this.gridCells.col).fill("");setTimeout(()=>{switch(this.lines+=this.clearIndexs.length,this.clearIndexs.length){case 1:this.score+=40*this.level;break;case 2:this.score+=100*this.level;break;case 3:this.score+=300*this.level;break;case 4:this.score+=1200*this.level;break}this.clearIndexs=[],this.matrix=[...o,...e],this.getNextTetrimino(),this.resetPosition(),this.clearing=!1,this.pauseGame(!1)},600)}else this.getNextTetrimino(),this.resetPosition()}},getNextTetrimino(){this.currentTetrimino=this.nextTetrimino,this.tetriminosShuffle.length<=7&&(this.tetriminosShuffle=this.tetriminosShuffle.concat(j(Q))),this.nextTetrimino=this.tetriminosShuffle.shift()},rotateRight(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate-1),this.position))&&this.rotate++},rotateLeft(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate-1),this.position))&&this.rotate--},moveLeft(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0],this.position[1]-1]))&&this.position[1]--},moveRight(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0],this.position[1]+1]))&&this.position[1]++},moveDown(){this.movable&&(this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0]+1,this.position[1]]))?this.updateMatrix():this.position[0]++)},moveBottom(){if(this.movable){let t=0;for(;!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0]+t+1,this.position[1]]));)t++;this.position[0]+=t,this.updateMatrix()}},addListener(){document.addEventListener("keydown",this._keyboardEvent.bind(this))},removeListener(){document.removeEventListener("keydown",this._keyboardEvent.bind(this))},_getRotatedMatrix(t){let e=t%g[this.currentTetrimino].length;return e<0&&(e+=g[this.currentTetrimino].length),g[this.currentTetrimino][e]},_getPositions(t,e){const o=[];for(let i=0;i<t.length;i++)for(let h=0;h<t[i].length;h++)if(t[i][h]===1)switch(this.currentTetrimino){case"i":case"o":o.push([e[0]-2+i,e[1]-2+h]);break;case"j":case"l":case"t":o.push([e[0]-1+i,e[1]-1+h]);break;case"s":case"z":o.push([e[0]-2+i,e[1]-1+h]);break;default:return null}return o},_keyboardEvent(t){if(!(t.altKey||t.ctrlKey||t.metaKey||t.shiftKey))switch(t.code){case"Space":this.start?(this.pause&&this.pauseGame(),this.moveBottom()):this.playGame();break;case"KeyW":case"KeyE":case"ArrowUp":this.pause&&this.pauseGame(),this.rotateRight();break;case"KeyQ":this.pause&&this.pauseGame(),this.rotateLeft();break;case"KeyS":case"ArrowDown":this.pause&&this.pauseGame(),this.moveDown();break;case"KeyA":case"ArrowLeft":this.pause&&this.pauseGame(),this.moveLeft();break;case"KeyD":case"ArrowRight":this.pause&&this.pauseGame(),this.moveRight();break;case"KeyP":this.pauseGame();break;case"KeyR":this.start?this.resetGame():this.playGame();break}},_hasConflict(t){for(const e of t){if(e[0]>=this.gridCells.row||e[1]<0||e[1]>=this.gridCells.col)return!0;if(e[0]>=0&&this.matrix[e[0]][e[1]]!=="")return!0}return!1},setBestScore(t){C().modules.tetris.bestScore=t}}},d=t=>(S("data-v-b9c012d5"),t=t(),R(),t),H={class:"gamePanel"},J={class:"tetrisPanel"},O={class:"tetrisMainPanel"},W={key:1,class:"tetrisCell"},q={class:"otherPanel"},X={class:"infoPanel"},Y={class:"info"},Z={class:"digital"},$={class:"info"},tt={class:"digital"},et={class:"info"},st={class:"digital"},it={class:"info"},rt={class:"digital"},ot=d(()=>n("div",{class:"info"}," 下一个 ",-1)),nt={class:"nextTetrimino"},at={key:1,class:"tetrisCell"},lt={class:"controlPanel"},ht=d(()=>n("div",{class:"controlInfo pause"}," 暂停P ",-1)),ct=d(()=>n("div",{class:"controlInfo restart"}," 重玩R ",-1)),dt=d(()=>n("div",{class:"controlInfo drop"}," 掉落Space ",-1)),ut=d(()=>n("div",{class:"controlInfo up"}," 旋转 ",-1)),ft=d(()=>n("div",{class:"controlInfo left"}," 左移 ",-1)),mt=d(()=>n("div",{class:"controlInfo right"}," 右移 ",-1)),vt=d(()=>n("div",{class:"controlInfo down"}," 下移 ",-1));function gt(t,e,o,i,h,r){return a(),l("div",null,[n("div",H,[n("div",J,[(a(!0),l(c,null,f(t.gridCells.col*2+t.gridCells.row*2+4,s=>(a(),l("div",{key:"tetrisFrameGrid"+s,class:x(["tetrisCell","tetrisCellGrid"])}))),128)),n("div",O,[t.inited?(a(!0),l(c,{key:0},f(t.gridCells.row,s=>(a(),l(c,{key:s},[(a(!0),l(c,null,f(t.gridCells.col,u=>(a(),l(c,{key:u},[r.currentMatrix[s-1][u-1]?(a(),l("div",{key:0,class:x(["tetrisCell","tetrisCellColor-"+r.currentMatrix[s-1][u-1],t.clearIndexs.includes(s-1)?"blink":""])},null,2)):(a(),l("div",W))],64))),128))],64))),128)):_("",!0)])]),n("div",q,[n("div",X,[n("div",Y,[m(" 最高分: "),n("span",Z,v(r.bestScore),1)]),n("div",$,[t.start?_("",!0):(a(),l(c,{key:0},[m(" 上轮 ")],64)),m(" 得分: "),n("span",tt,v(t.score),1)]),n("div",et,[m(" 消除行: "),n("span",st,v(t.lines),1)]),n("div",it,[m(" 级别: "),n("span",rt,v(r.level),1)]),ot,n("div",nt,[t.inited?(a(),l(c,{key:0},f(2,s=>(a(),l(c,{key:s},[(a(),l(c,null,f(4,u=>(a(),l(c,{key:u},[r.nextTetriminoMatrixLegend[s-1][u-1]?(a(),l("div",{key:0,class:x(["tetrisCell","tetrisCellColor-"+t.nextTetrimino])},null,2)):(a(),l("div",at))],64))),64))],64))),64)):_("",!0)])]),n("div",lt,[n("div",{class:"controlButton pause",onClick:e[0]||(e[0]=(...s)=>r.pauseGame&&r.pauseGame(...s))}),ht,t.start?(a(),l("div",{key:0,class:"controlButton restart",onClick:e[1]||(e[1]=(...s)=>r.resetGame&&r.resetGame(...s))})):(a(),l("div",{key:1,class:"controlButton restart",onClick:e[2]||(e[2]=(...s)=>r.playGame&&r.playGame(...s))})),ct,t.start?(a(),l("div",{key:2,class:"controlButton drop",onClick:e[3]||(e[3]=(...s)=>r.moveBottom&&r.moveBottom(...s))})):(a(),l("div",{key:3,class:"controlButton drop",onClick:e[4]||(e[4]=(...s)=>r.playGame&&r.playGame(...s))})),dt,n("div",{class:"controlButton up",onClick:e[5]||(e[5]=(...s)=>r.rotateRight&&r.rotateRight(...s))}),ut,n("div",{class:"controlButton left",onClick:e[6]||(e[6]=(...s)=>r.moveLeft&&r.moveLeft(...s))}),ft,n("div",{class:"controlButton right",onClick:e[7]||(e[7]=(...s)=>r.moveRight&&r.moveRight(...s))}),mt,n("div",{class:"controlButton down",onClick:e[8]||(e[8]=(...s)=>r.moveDown&&r.moveDown(...s))}),vt])])])])}const kt=L(z,[["render",gt],["__scopeId","data-v-b9c012d5"]]);export{kt as default};