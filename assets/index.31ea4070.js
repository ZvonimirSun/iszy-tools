var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,a=(e,a)=>{for(var l in a||(a={}))r.call(a,l)&&n(e,l,a[l]);if(t)for(var l of t(a))o.call(a,l)&&n(e,l,a[l]);return e},l=(e,t,r)=>(n(e,"symbol"!=typeof t?t+"":t,r),r);import{n as c,l as i,p as s,a as d,o as m,c as b,b as h,F as f,x as g,u as v,y as u,w as p,d as P,r as x}from"./vendor.dc490630.js";import{_ as w}from"./container.e916ab81.js";/* empty css              *//* empty css              */class k{}l(k,"i",[[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]]]),l(k,"j",[[[1,0,0],[1,1,1],[0,0,0]],[[0,1,1],[0,1,0],[0,1,0]],[[0,0,0],[1,1,1],[0,0,1]],[[0,1,0],[0,1,0],[1,1,0]]]),l(k,"l",[[[0,0,1],[1,1,1],[0,0,0]],[[0,1,0],[0,1,0],[0,1,1]],[[0,0,0],[1,1,1],[1,0,0]],[[1,1,0],[0,1,0],[0,1,0]]]),l(k,"o",[[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]]),l(k,"s",[[[0,0,0],[0,1,1],[1,1,0]],[[0,1,0],[0,1,1],[0,0,1]]]),l(k,"t",[[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0],[0,1,1],[0,1,0]],[[0,0,0],[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]]]),l(k,"z",[[[0,0,0],[1,1,0],[0,1,1]],[[0,0,1],[0,1,1],[0,1,0]]]),l(k,"iLegend",[[0,0,0,0],[1,1,1,1]]),l(k,"jLegend",[[1,0,0,0],[1,1,1,0]]),l(k,"lLegend",[[0,0,1,0],[1,1,1,0]]),l(k,"oLegend",[[0,1,1,0],[0,1,1,0]]),l(k,"sLegend",[[0,1,1,0],[1,1,0,0]]),l(k,"tLegend",[[0,1,0,0],[1,1,1,0]]),l(k,"zLegend",[[1,1,0,0],[0,1,1,0]]);var y='@font-face {\n  font-family: "DS Digital";\n  src: url("__VITE_ASSET__87eb14d4__"),url("__VITE_ASSET__db992dcd__"),url("__VITE_ASSET__7402d935__"),url("__VITE_ASSET__4d330a54__");\n}\n@keyframes blink-3c6b5e5b {\n0%, 50%, 100% {\n    opacity: 1;\n}\n25%, 75% {\n    opacity: 0;\n}\n}\n.gamePanel[data-v-3c6b5e5b] {\n  height: max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem);\n  width: max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem);\n  margin: 0 auto;\n  border: calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.01) solid #1e1e1e;\n  border-right-color: #a1a1a1;\n  border-bottom-color: #d7d7d7;\n  border-left-color: #525252;\n  background: #000;\n  box-sizing: border-box;\n  padding: calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.01);\n  display: flex;\n  user-select: none;\n}\n.gamePanel .tetrisPanel[data-v-3c6b5e5b] {\n  width: fit-content;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(22, 1fr);\n}\n.gamePanel .tetrisPanel .tetrisMainPanel[data-v-3c6b5e5b] {\n  grid-column: 2/12;\n  grid-row: 2/22;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(20, 1fr);\n}\n.gamePanel .otherPanel[data-v-3c6b5e5b] {\n  height: 100%;\n  padding-left: calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.01);\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.gamePanel .otherPanel .infoPanel[data-v-3c6b5e5b] {\n  text-align: center;\n  height: fit-content;\n}\n.gamePanel .otherPanel .infoPanel .info[data-v-3c6b5e5b] {\n  text-align: left;\n  font-size: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.05) - .8rem);\n  line-height: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.05) + .8rem);\n  color: #fff;\n  margin-bottom: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.01) * 3);\n  font-family: "Microsoft Yahei", sans-serif;\n}\n.gamePanel .otherPanel .infoPanel .info .digital[data-v-3c6b5e5b] {\n  font-family: "DS Digital", serif;\n  font-style: italic;\n  font-size: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.05) + .8rem);\n}\n.gamePanel .otherPanel .infoPanel .nextTetrimino[data-v-3c6b5e5b] {\n  margin: 0 auto;\n  display: grid;\n  width: fit-content;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n}\n.gamePanel .otherPanel .controlPanel[data-v-3c6b5e5b] {\n  flex: 1;\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: repeat(8, 1fr);\n}\n.gamePanel .otherPanel .controlPanel .controlButton[data-v-3c6b5e5b] {\n  cursor: pointer;\n}\n.gamePanel .otherPanel .controlPanel .controlButton.pause[data-v-3c6b5e5b] {\n  grid-row: 2;\n  grid-column: 2/4;\n  background: #00ff00;\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #b4ffb4;\n  border-right-color: #00b400;\n  border-bottom-color: #004a00;\n  border-left-color: #4cff4b;\n}\n.gamePanel .otherPanel .controlPanel .controlButton.pause[data-v-3c6b5e5b]:active {\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #004a00;\n  border-right-color: #4cff4b;\n  border-bottom-color: #b4ffb4;\n  border-left-color: #00b400;\n}\n.gamePanel .otherPanel .controlPanel .controlButton.restart[data-v-3c6b5e5b] {\n  grid-row: 2;\n  grid-column: 5/7;\n  background: #ff0000;\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #ffb5b4;\n  border-right-color: #b30100;\n  border-bottom-color: #4b0000;\n  border-left-color: #ff4b4b;\n}\n.gamePanel .otherPanel .controlPanel .controlButton.restart[data-v-3c6b5e5b]:active {\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #4b0000;\n  border-right-color: #ff4b4b;\n  border-bottom-color: #ffb5b4;\n  border-left-color: #b30100;\n}\n.gamePanel .otherPanel .controlPanel .controlButton.drop[data-v-3c6b5e5b] {\n  grid-row: 5/7;\n  grid-column: 2/4;\n  background: #0000ab;\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #b4b4e7;\n  border-right-color: #000078;\n  border-bottom-color: #00002f;\n  border-left-color: #4c4cc5;\n}\n.gamePanel .otherPanel .controlPanel .controlButton.drop[data-v-3c6b5e5b]:active {\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #00002f;\n  border-right-color: #4c4cc5;\n  border-bottom-color: #b4b4e7;\n  border-left-color: #000078;\n}\n.gamePanel .otherPanel .controlPanel .controlButton.up[data-v-3c6b5e5b] {\n  grid-row: 4;\n  grid-column: 6;\n  background: #0000ab;\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #b4b4e7;\n  border-right-color: #000078;\n  border-bottom-color: #00002f;\n  border-left-color: #4c4cc5;\n}\n.gamePanel .otherPanel .controlPanel .controlButton.up[data-v-3c6b5e5b]:active {\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #00002f;\n  border-right-color: #4c4cc5;\n  border-bottom-color: #b4b4e7;\n  border-left-color: #000078;\n}\n.gamePanel .otherPanel .controlPanel .controlButton.left[data-v-3c6b5e5b] {\n  grid-row: 5;\n  grid-column: 5;\n  background: #0000ab;\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #b4b4e7;\n  border-right-color: #000078;\n  border-bottom-color: #00002f;\n  border-left-color: #4c4cc5;\n}\n.gamePanel .otherPanel .controlPanel .controlButton.left[data-v-3c6b5e5b]:active {\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #00002f;\n  border-right-color: #4c4cc5;\n  border-bottom-color: #b4b4e7;\n  border-left-color: #000078;\n}\n.gamePanel .otherPanel .controlPanel .controlButton.right[data-v-3c6b5e5b] {\n  grid-row: 5;\n  grid-column: 7;\n  background: #0000ab;\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #b4b4e7;\n  border-right-color: #000078;\n  border-bottom-color: #00002f;\n  border-left-color: #4c4cc5;\n}\n.gamePanel .otherPanel .controlPanel .controlButton.right[data-v-3c6b5e5b]:active {\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #00002f;\n  border-right-color: #4c4cc5;\n  border-bottom-color: #b4b4e7;\n  border-left-color: #000078;\n}\n.gamePanel .otherPanel .controlPanel .controlButton.down[data-v-3c6b5e5b] {\n  grid-row: 6;\n  grid-column: 6;\n  background: #0000ab;\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #b4b4e7;\n  border-right-color: #000078;\n  border-bottom-color: #00002f;\n  border-left-color: #4c4cc5;\n}\n.gamePanel .otherPanel .controlPanel .controlButton.down[data-v-3c6b5e5b]:active {\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #00002f;\n  border-right-color: #4c4cc5;\n  border-bottom-color: #b4b4e7;\n  border-left-color: #000078;\n}\n.gamePanel .otherPanel .controlPanel .controlInfo[data-v-3c6b5e5b] {\n  text-align: center;\n  color: #fff;\n  font-family: "Microsoft Yahei", sans-serif;\n  font-size: 1.2rem;\n  line-height: 2rem;\n  white-space: nowrap;\n  overflow: hidden;\n}\n@media screen and (max-width: 40rem) {\n.gamePanel .otherPanel .controlPanel .controlInfo[data-v-3c6b5e5b] {\n    display: none;\n}\n}\n.gamePanel .otherPanel .controlPanel .controlInfo.pause[data-v-3c6b5e5b] {\n  grid-row: 3;\n  grid-column: 2/4;\n}\n.gamePanel .otherPanel .controlPanel .controlInfo.restart[data-v-3c6b5e5b] {\n  grid-row: 3;\n  grid-column: 5/7;\n}\n.gamePanel .otherPanel .controlPanel .controlInfo.drop[data-v-3c6b5e5b] {\n  grid-row: 7;\n  grid-column: 2/4;\n}\n.gamePanel .otherPanel .controlPanel .controlInfo.up[data-v-3c6b5e5b] {\n  grid-row: 4;\n  grid-column: 7;\n}\n.gamePanel .otherPanel .controlPanel .controlInfo.left[data-v-3c6b5e5b] {\n  grid-row: 6;\n  grid-column: 5;\n}\n.gamePanel .otherPanel .controlPanel .controlInfo.right[data-v-3c6b5e5b] {\n  grid-row: 6;\n  grid-column: 7;\n}\n.gamePanel .otherPanel .controlPanel .controlInfo.down[data-v-3c6b5e5b] {\n  grid-row: 7;\n  grid-column: 6;\n}\n.gamePanel .otherPanel .controlPanel .startGame[data-v-3c6b5e5b] {\n  font-family: "Microsoft Yahei", sans-serif;\n  font-size: calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.05);\n  color: #fff;\n  line-height: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.05) + .8rem);\n  cursor: pointer;\n  background: #787878;\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #d7d7d7;\n  border-right-color: #525252;\n  border-bottom-color: #1e1e1e;\n  border-left-color: #a1a1a1;\n}\n.gamePanel .otherPanel .controlPanel .startGame[data-v-3c6b5e5b]:active {\n  border-top-color: #1e1e1e;\n  border-right-color: #a1a1a1;\n  border-bottom-color: #d7d7d7;\n  border-left-color: #525252;\n  font-size: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.05) * 0.9);\n  transition: 0.1s;\n}\n.gamePanel .tetrisCell[data-v-3c6b5e5b] {\n  height: calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2));\n  width: calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2));\n}\n.gamePanel .tetrisCell.blink[data-v-3c6b5e5b] {\n  animation: blink-3c6b5e5b 0.6s both;\n}\n.gamePanel .tetrisCell.tetrisCellColor-i[data-v-3c6b5e5b] {\n  background: #02ffff;\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #b4ffff;\n  border-right-color: #00b4b3;\n  border-bottom-color: #004a4b;\n  border-left-color: #4cffff;\n}\n.gamePanel .tetrisCell.tetrisCellColor-j[data-v-3c6b5e5b] {\n  background: #0000ab;\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #b4b4e7;\n  border-right-color: #000078;\n  border-bottom-color: #00002f;\n  border-left-color: #4c4cc5;\n}\n.gamePanel .tetrisCell.tetrisCellColor-l[data-v-3c6b5e5b] {\n  background: #ff7700;\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #ffd8b5;\n  border-right-color: #b35200;\n  border-bottom-color: #4b1d00;\n  border-left-color: #ffa24c;\n}\n.gamePanel .tetrisCell.tetrisCellColor-o[data-v-3c6b5e5b] {\n  background: #ffff00;\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #ffffb5;\n  border-right-color: #b3b302;\n  border-bottom-color: #4b4b00;\n  border-left-color: #ffff4c;\n}\n.gamePanel .tetrisCell.tetrisCellColor-s[data-v-3c6b5e5b] {\n  background: #00ff00;\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #b4ffb4;\n  border-right-color: #00b400;\n  border-bottom-color: #004a00;\n  border-left-color: #4cff4b;\n}\n.gamePanel .tetrisCell.tetrisCellColor-t[data-v-3c6b5e5b] {\n  background: #cd00cd;\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #f0b5f1;\n  border-right-color: #8f008f;\n  border-bottom-color: #3b003a;\n  border-left-color: #dc4cdb;\n}\n.gamePanel .tetrisCell.tetrisCellColor-z[data-v-3c6b5e5b] {\n  background: #ff0000;\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #ffb5b4;\n  border-right-color: #b30100;\n  border-bottom-color: #4b0000;\n  border-left-color: #ff4b4b;\n}\n.gamePanel .tetrisCell.tetrisCellGrid[data-v-3c6b5e5b] {\n  background: #787878;\n  border: calc(calc(max(min(calc(100vh - 32rem), calc(100vw - 8rem)), 29.7rem) * 0.96 / (20 + 2)) * 0.2) solid #d7d7d7;\n  border-right-color: #525252;\n  border-bottom-color: #1e1e1e;\n  border-left-color: #a1a1a1;\n}';const{mapState:C,mapActions:_}=c("tetris"),I=["i","j","l","o","s","t","z"],T={name:"tetris",components:{Container:w},data:()=>({inited:!1,gridCells:{col:10,row:20},matrix:null,rotate:0,position:null,currentTetrimino:null,nextTetrimino:null,score:0,lines:0,start:!1,end:!1,pause:!1,lock:!1,clearing:!1,clearIndexs:[],intervalID:void 0}),computed:a({movable:function(){return this.start&&!this.end&&!this.clearing&&!this.pause},level:function(){return Math.ceil(this.lines/10)},nextTetriminoMatrixLegend:function(){return this.nextTetrimino?k[this.nextTetrimino+"Legend"]:null},positions:function(){return this.currentTetrimino?this._getPositions(this._getRotatedMatrix(this.rotate),this.position):null},currentMatrix:function(){if(this.currentTetrimino){const e=i.exports.cloneDeep(this.matrix);for(const t of this.positions)t[0]>=0&&t[0]<this.gridCells.row&&t[1]>=0&&t[1]<this.gridCells.col&&(e[t[0]][t[1]]=this.currentTetrimino);return e}return this.matrix}},C(["bestScore"])),mounted(){this.resetGame(),this.getNextTetrimino(),this.addListener(),this.inited=!0},methods:a({playGame(){this.start||(this.score=0,this.lines=0,this.getNextTetrimino(),this.start=!0,this.intervalID=setInterval((()=>{this.clearing||this.moveDown()}),1e3))},resetGame(){clearInterval(this.intervalID);const e=Array(this.gridCells.row);for(const t of i.exports.range(this.gridCells.row))e[t]=Array(this.gridCells.col).fill("");this.matrix=e,this.rotate=0,this.resetPosition(),this.currentTetrimino=void 0,this.start=!1,this.end=!1,this.pause=!1,this.lock=!1,this.clearing=!1},pauseGame(e){e?this.lock=!0:!1===e&&(this.lock=!1),this.start&&(!1===this.lock||e)&&(this.pause?(this.pause=!this.pause,this.intervalID=setInterval((()=>{this.clearing||this.moveDown()}),1e3-10*this.level)):(this.pause=!this.pause,clearInterval(this.intervalID)))},resetPosition(){this.rotate=0,this.position=[0,Math.ceil(this.gridCells.col/2)]},updateMatrix(){if(this.start){for(const t of this.positions)t[0]<0&&(this.end=!0);if(this.matrix=i.exports.cloneDeep(this.currentMatrix),this.end){this.pauseGame(!0),this.clearIndexs=[];for(const e of i.exports.range(this.gridCells.row))this.clearIndexs.push(e);return void setTimeout((()=>{this.score>this.bestScore&&this.setBestScore(this.score),this.clearIndexs=[],this.resetGame()}),600)}this.score+=4;const e=[];for(const t in this.matrix){0===this.matrix[t].filter((e=>""===e)).length&&e.push(parseInt(t))}if(e.length>0){this.clearing=!0,this.pauseGame(!0),this.clearIndexs=e;const t=i.exports.cloneDeep(this.matrix);for(let e=this.clearIndexs.length-1;e>=0;e--)t.splice(this.clearIndexs[e],1);const r=Array(this.clearIndexs.length);for(const e of i.exports.range(this.clearIndexs.length))r[e]=Array(this.gridCells.col).fill("");setTimeout((()=>{switch(this.lines+=this.clearIndexs.length,this.clearIndexs.length){case 1:this.score+=40*this.level;break;case 2:this.score+=100*this.level;break;case 3:this.score+=300*this.level;break;case 4:this.score+=1200*this.level;break}this.clearIndexs=[],this.matrix=[...r,...t],this.getNextTetrimino(),this.resetPosition(),this.clearing=!1,this.pauseGame(!1)}),600)}else this.getNextTetrimino(),this.resetPosition()}},getNextTetrimino(){this.currentTetrimino=this.nextTetrimino,this.nextTetrimino=I[i.exports.random(0,6)]},rotateRight(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate-1),this.position))&&this.rotate++},rotateLeft(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate-1),this.position))&&this.rotate--},moveLeft(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0],this.position[1]-1]))&&this.position[1]--},moveRight(){this.movable&&!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0],this.position[1]+1]))&&this.position[1]++},moveDown(){this.movable&&(this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0]+1,this.position[1]]))?this.updateMatrix():this.position[0]++)},moveBottom(){if(this.movable){let e=0;for(;!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate),[this.position[0]+e+1,this.position[1]]));)e++;this.position[0]+=e,this.updateMatrix()}},addListener(){document.addEventListener("keydown",this._keyboardEvent.bind(this))},removeListener(){document.removeEventListener("keydown",this._keyboardEvent.bind(this))},_getRotatedMatrix(e){let t=e%k[this.currentTetrimino].length;return t<0&&(t+=k[this.currentTetrimino].length),k[this.currentTetrimino][t]},_getPositions(e,t){const r=[];for(let o=0;o<e.length;o++)for(let n=0;n<e[o].length;n++)if(1===e[o][n])switch(this.currentTetrimino){case"i":case"o":r.push([t[0]-2+o,t[1]-2+n]);break;case"j":case"l":case"t":r.push([t[0]-1+o,t[1]-1+n]);break;case"s":case"z":r.push([t[0]-2+o,t[1]-1+n]);break;default:return null}return r},_keyboardEvent(e){if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))switch(e.code){case"Space":this.start?(this.pause&&this.pauseGame(),this.moveBottom()):this.playGame();break;case"KeyW":case"KeyE":case"ArrowUp":this.pause&&this.pauseGame(),this.rotateRight();break;case"KeyQ":this.pause&&this.pauseGame(),this.rotateLeft();break;case"KeyS":case"ArrowDown":this.pause&&this.pauseGame(),this.moveDown();break;case"KeyA":case"ArrowLeft":this.pause&&this.pauseGame(),this.moveLeft();break;case"KeyD":case"ArrowRight":this.pause&&this.pauseGame(),this.moveRight();break;case"KeyP":this.pauseGame();break;case"KeyR":this.start?this.resetGame():this.playGame();break}},_hasConflict(e){for(const t of e){if(t[0]>=this.gridCells.row||t[1]<0||t[1]>=this.gridCells.col)return!0;if(t[0]>=0&&""!==this.matrix[t[0]][t[1]])return!0}return!1}},_(["setBestScore"])),beforeUnmount(){this.removeListener()}},G=p();s("data-v-3c6b5e5b");const B={class:"gamePanel"},M={class:"tetrisPanel"},L={class:"tetrisMainPanel"},D={key:1,class:"tetrisCell"},S={class:"otherPanel"},R={class:"infoPanel"},E={class:"info"},A=P("最高分: "),j={class:"digital"},K={class:"info"},z=P("上轮"),O=P(" 得分: "),N={class:"digital"},V={class:"info"},Y=P("消除行: "),F={class:"digital"},U={class:"info"},Q=P("级别: "),W={class:"digital"},q=h("div",{class:"info"},"下一个",-1),H={class:"nextTetrimino"},J={key:1,class:"tetrisCell"},X={class:"controlPanel"},Z=h("div",{class:"controlInfo pause"},"暂停P",-1),$=h("div",{class:"controlInfo restart"},"重玩R",-1),ee=h("div",{class:"controlInfo drop"},"掉落Space",-1),te=h("div",{class:"controlInfo up"},"旋转",-1),re=h("div",{class:"controlInfo left"},"左移",-1),oe=h("div",{class:"controlInfo right"},"右移",-1),ne=h("div",{class:"controlInfo down"},"下移",-1);d();const ae=G(((e,t,r,o,n,a)=>{const l=x("container");return m(),b(l,null,{default:G((()=>[h("div",B,[h("div",M,[(m(!0),b(f,null,g(2*e.gridCells.col+2*e.gridCells.row+4,(e=>(m(),b("div",{class:["tetrisCell","tetrisCellGrid"],key:"tetrisFrameGrid"+e})))),128)),h("div",L,[e.inited?(m(!0),b(f,{key:0},g(e.gridCells.row,(t=>(m(),b(f,{key:t},[(m(!0),b(f,null,g(e.gridCells.col,(r=>(m(),b(f,{key:r},[a.currentMatrix[t-1][r-1]?(m(),b("div",{key:0,class:["tetrisCell","tetrisCellColor-"+a.currentMatrix[t-1][r-1],e.clearIndexs.includes(t-1)?"blink":""]},null,2)):(m(),b("div",D))],64)))),128))],64)))),128)):v("",!0)])]),h("div",S,[h("div",R,[h("div",E,[A,h("span",j,u(e.bestScore),1)]),h("div",K,[e.start?v("",!0):(m(),b(f,{key:0},[z],64)),O,h("span",N,u(e.score),1)]),h("div",V,[Y,h("span",F,u(e.lines),1)]),h("div",U,[Q,h("span",W,u(a.level),1)]),q,h("div",H,[e.inited?(m(),b(f,{key:0},g(2,(t=>(m(),b(f,{key:t},[(m(),b(f,null,g(4,(r=>(m(),b(f,{key:r},[a.nextTetriminoMatrixLegend[t-1][r-1]?(m(),b("div",{key:0,class:["tetrisCell","tetrisCellColor-"+e.nextTetrimino]},null,2)):(m(),b("div",J))],64)))),64))],64)))),64)):v("",!0)])]),h("div",X,[h("div",{class:"controlButton pause",onClick:t[1]||(t[1]=(...e)=>a.pauseGame&&a.pauseGame(...e))}),Z,e.start?(m(),b("div",{key:0,class:"controlButton restart",onClick:t[2]||(t[2]=(...e)=>a.resetGame&&a.resetGame(...e))})):(m(),b("div",{key:1,class:"controlButton restart",onClick:t[3]||(t[3]=(...e)=>a.playGame&&a.playGame(...e))})),$,e.start?(m(),b("div",{key:2,class:"controlButton drop",onClick:t[4]||(t[4]=(...e)=>a.moveBottom&&a.moveBottom(...e))})):(m(),b("div",{key:3,class:"controlButton drop",onClick:t[5]||(t[5]=(...e)=>a.playGame&&a.playGame(...e))})),ee,h("div",{class:"controlButton up",onClick:t[6]||(t[6]=(...e)=>a.rotateRight&&a.rotateRight(...e))}),te,h("div",{class:"controlButton left",onClick:t[7]||(t[7]=(...e)=>a.moveLeft&&a.moveLeft(...e))}),re,h("div",{class:"controlButton right",onClick:t[8]||(t[8]=(...e)=>a.moveRight&&a.moveRight(...e))}),oe,h("div",{class:"controlButton down",onClick:t[9]||(t[9]=(...e)=>a.moveDown&&a.moveDown(...e))}),ne])])])])),_:1})}));T.render=ae,T.__scopeId="data-v-3c6b5e5b";export default T;
