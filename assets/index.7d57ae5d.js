var e=Object.defineProperty,n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(n,t,a)=>t in n?e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,s=(e,s)=>{for(var i in s||(s={}))t.call(s,i)&&r(e,i,s[i]);if(n)for(var i of n(s))a.call(s,i)&&r(e,i,s[i]);return e};import{_ as i}from"./container.7ba57a55.js";import{s as o,p as m,a as l,r as c,c as d,w as f,o as h,d as p,v as g,E as u,F as b}from"./vendor.c5a2ecc1.js";/* empty css              */class v{constructor(e,n){this.x=e.x,this.y=e.y,this.value=n||2,this.previousPosition=null,this.mergedFrom=null}savePosition(){this.previousPosition={x:this.x,y:this.y}}updatePosition(e){this.x=e.x,this.y=e.y}serialize(){return{position:{x:this.x,y:this.y},value:this.value}}}class w{constructor(e,n){this.size=e,this.cells=n?this.fromState(n):this.empty()}empty(){const e=[];for(let n=0;n<this.size;n++){const t=e[n]=[];for(let e=0;e<this.size;e++)t.push(null)}return e}fromState(e){const n=[];for(let t=0;t<this.size;t++){const a=n[t]=[];for(let n=0;n<this.size;n++){const r=e[t][n];a.push(r?new v(r.position,r.value):null)}}return n}randomAvailableCell(){const e=this.availableCells();if(e.length)return e[Math.floor(Math.random()*e.length)]}availableCells(){const e=[];return this.eachCell((function(n,t,a){a||e.push({x:n,y:t})})),e}eachCell(e){for(let n=0;n<this.size;n++)for(let t=0;t<this.size;t++)e(n,t,this.cells[n][t])}cellsAvailable(){return!!this.availableCells().length}cellAvailable(e){return!this.cellOccupied(e)}cellOccupied(e){return!!this.cellContent(e)}cellContent(e){return this.withinBounds(e)?this.cells[e.x][e.y]:null}insertTile(e){this.cells[e.x][e.y]=e}removeTile(e){this.cells[e.x][e.y]=null}withinBounds(e){return e.x>=0&&e.x<this.size&&e.y>=0&&e.y<this.size}serialize(){const e=[];for(let n=0;n<this.size;n++){const t=e[n]=[];for(let e=0;e<this.size;e++)t.push(this.cells[n][e]?this.cells[n][e].serialize():null)}return{size:this.size,cells:e}}}class y{constructor(e){this.events={},this.vue=e,this.map={ArrowUp:0,ArrowRight:1,ArrowDown:2,ArrowLeft:3,KeyK:0,KeyL:1,keyJ:2,keyH:3,KeyW:0,KeyD:1,KeyS:2,KeyA:3},window.navigator.msPointerEnabled?(this.eventTouchstart="MSPointerDown",this.eventTouchmove="MSPointerMove",this.eventTouchend="MSPointerUp"):(this.eventTouchstart="touchstart",this.eventTouchmove="touchmove",this.eventTouchend="touchend"),this.retryButton=this.vue.$refs.retryButton,this.restartButton=this.vue.$refs.restartButton,this.keepPlayingButton=this.vue.$refs.keepPlayingButton,this.gameContainer=this.vue.$refs.gameContainer,this.touchStartClientX=void 0,this.touchStartClientY=void 0,this.listen()}on(e,n){this.events[e]||(this.events[e]=[]),this.events[e].push(n)}emit(e,n){const t=this.events[e];t&&t.forEach((function(e){e(n)}))}listen(){document.addEventListener("keydown",this._keyboardEvent.bind(this)),this.bindButtonPress(this.retryButton,this.restart),this.bindButtonPress(this.restartButton,this.restart),this.bindButtonPress(this.keepPlayingButton,this.keepPlaying),this.gameContainer.addEventListener(this.eventTouchstart,this._touchStartEvent.bind(this)),this.gameContainer.addEventListener("mousedown",this._touchStartEvent.bind(this)),this.gameContainer.addEventListener(this.eventTouchmove,(function(e){e.preventDefault()})),this.gameContainer.addEventListener(this.eventTouchend,this._touchEndEvent.bind(this)),this.gameContainer.addEventListener("mouseup",this._touchEndEvent.bind(this))}restart(e){e.preventDefault(),this.emit("restart")}keepPlaying(e){e.preventDefault(),this.emit("keepPlaying")}bindButtonPress(e,n){e.addEventListener("click",n.bind(this)),e.addEventListener(this.eventTouchend,n.bind(this))}removeButtonPress(e){e.addEventListener("click"),e.addEventListener(this.eventTouchend)}_keyboardEvent(e){const n=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey,t=this.map[e.code];n||void 0!==t&&(e.preventDefault(),this.emit("move",t)),n||"KeyR"!==e.code||this.restart(e)}_touchStartEvent(e){"mousedown"!==e.type&&(!window.navigator.msPointerEnabled&&e.touches.length>1||e.targetTouches.length>1)||(window.navigator.msPointerEnabled||"mousedown"===e.type?(this.touchStartClientX=e.pageX,this.touchStartClientY=e.pageY):(this.touchStartClientX=e.touches[0].clientX,this.touchStartClientY=e.touches[0].clientY),e.preventDefault())}_touchEndEvent(e){if("mouseup"!==e.type&&(!window.navigator.msPointerEnabled&&e.touches.length>0||e.targetTouches.length>0))return;let n,t;window.navigator.msPointerEnabled||"mouseup"===e.type?(n=e.pageX,t=e.pageY):(n=e.changedTouches[0].clientX,t=e.changedTouches[0].clientY);const a=n-this.touchStartClientX,r=Math.abs(a),s=t-this.touchStartClientY,i=Math.abs(s);Math.max(r,i)>10&&this.emit("move",r>i?a>0?1:3:s>0?2:0)}destroy(){document.removeEventListener("keydown",this._keyboardEvent),this.removeButtonPress(this.retryButton),this.removeButtonPress(this.restartButton),this.removeButtonPress(this.keepPlayingButton),this.gameContainer.addEventListener("mousedown"),this.gameContainer.addEventListener("mouseup"),this.gameContainer.addEventListener(this.eventTouchstart),this.gameContainer.addEventListener(this.eventTouchmove),this.gameContainer.addEventListener(this.eventTouchend)}}class k{constructor(e){this.vue=e,this.tileContainer=this.vue.$refs.tileContainer,this.scoreContainer=this.vue.$refs.scoreContainer,this.bestContainer=this.vue.$refs.bestContainer,this.messageContainer=this.vue.$refs.messageContainer,this.score=0}actuate(e,n){const t=this;window.requestAnimationFrame((function(){t.clearContainer(t.tileContainer),e.cells.forEach((function(e){e.forEach((function(e){e&&t.addTile(e)}))})),t.updateScore(n.score),t.updateBestScore(n.bestScore),n.terminated&&(n.over?t.message(!1):n.won&&t.message(!0))}))}continueGame(){this.clearMessage()}clearContainer(e){for(;e.firstChild;)e.removeChild(e.firstChild)}addTile(e){const n=this,t=document.createElement("div"),a=document.createElement("div"),r=e.previousPosition||{x:e.x,y:e.y},s=this.positionClass(r),i=["tile","tile-"+e.value,s];e.value>2048&&i.push("tile-super"),this.applyClasses(t,i),a.classList.add("tile-inner"),a.textContent=e.value,e.previousPosition?window.requestAnimationFrame((function(){i[2]=n.positionClass({x:e.x,y:e.y}),n.applyClasses(t,i)})):e.mergedFrom?(i.push("tile-merged"),this.applyClasses(t,i),e.mergedFrom.forEach((function(e){n.addTile(e)}))):(i.push("tile-new"),this.applyClasses(t,i)),t.appendChild(a),this.tileContainer.appendChild(t)}applyClasses(e,n){e.setAttribute("class",n.join(" "))}normalizePosition(e){return{x:e.x+1,y:e.y+1}}positionClass(e){return"tile-position-"+(e=this.normalizePosition(e)).x+"-"+e.y}updateScore(e){this.clearContainer(this.scoreContainer);const n=e-this.score;if(this.score=e,this.scoreContainer.textContent=this.score,n>0){const e=document.createElement("div");e.classList.add("score-addition"),e.textContent="+"+n,this.scoreContainer.appendChild(e)}}updateBestScore(e){this.bestContainer.textContent=e}message(e){const n=e?"game-won":"game-over",t=e?"你赢啦!":"游戏结束!";this.messageContainer.classList.add(n),this.messageContainer.getElementsByTagName("p")[0].textContent=t}clearMessage(){this.messageContainer.classList.remove("game-won"),this.messageContainer.classList.remove("game-over")}}class z{constructor(e,n){this.vue=n,this.size=e,this.inputManager=new y(n),this.actuator=new k(n),this.startTiles=2,this.inputManager.on("move",this.move.bind(this)),this.inputManager.on("restart",this.restart.bind(this)),this.inputManager.on("keepPlaying",this.keepPlaying.bind(this)),this.setup()}destroy(){}restart(){this.vue.clearGameState(),this.actuator.continueGame(),this.setup()}keepPlaying(){this.keepPlaying=!0,this.actuator.continueGame()}isGameTerminated(){return this.over||this.won&&!this.keepPlaying}setup(){const e=this.vue.gameState;e?(this.grid=new w(e.grid.size,e.grid.cells),this.score=e.score,this.over=e.over,this.won=e.won,this.keepPlaying=e.keepPlaying):(this.grid=new w(this.size),this.score=0,this.over=!1,this.won=!1,this.keepPlaying=!1,this.addStartTiles()),this.actuate()}addStartTiles(){for(let e=0;e<this.startTiles;e++)this.addRandomTile()}addRandomTile(){if(this.grid.cellsAvailable()){const e=Math.random()<.9?2:4,n=new v(this.grid.randomAvailableCell(),e);this.grid.insertTile(n)}}actuate(){this.vue.bestScore<this.score&&this.vue.setBestScore(this.score),this.over?this.vue.clearGameState():this.vue.setGameState(this.serialize()),this.vue.state={grid:this.grid,score:this.score,over:this.over,won:this.won,bestScore:this.vue.bestScore,terminated:this.isGameTerminated()},this.actuator.actuate(this.grid,{score:this.score,over:this.over,won:this.won,bestScore:this.vue.bestScore,terminated:this.isGameTerminated()})}serialize(){return{grid:this.grid.serialize(),score:this.score,over:this.over,won:this.won,keepPlaying:this.keepPlaying}}prepareTiles(){this.grid.eachCell((function(e,n,t){t&&(t.mergedFrom=null,t.savePosition())}))}moveTile(e,n){this.grid.cells[e.x][e.y]=null,this.grid.cells[n.x][n.y]=e,e.updatePosition(n)}move(e){const n=this;if(this.isGameTerminated())return;let t,a;const r=this.getVector(e),s=this.buildTraversals(r);let i=!1;this.prepareTiles(),s.x.forEach((function(e){s.y.forEach((function(s){if(t={x:e,y:s},a=n.grid.cellContent(t),a){const e=n.findFarthestPosition(t,r),s=n.grid.cellContent(e.next);if(s&&s.value===a.value&&!s.mergedFrom){const t=new v(e.next,2*a.value);t.mergedFrom=[a,s],n.grid.insertTile(t),n.grid.removeTile(a),a.updatePosition(e.next),n.score+=t.value,2048===t.value&&(n.won=!0)}else n.moveTile(a,e.farthest);n.positionsEqual(t,a)||(i=!0)}}))})),i&&(this.addRandomTile(),this.movesAvailable()||(this.over=!0),this.actuate())}getVector(e){return{0:{x:0,y:-1},1:{x:1,y:0},2:{x:0,y:1},3:{x:-1,y:0}}[e]}buildTraversals(e){const n={x:[],y:[]};for(let t=0;t<this.size;t++)n.x.push(t),n.y.push(t);return 1===e.x&&(n.x=n.x.reverse()),1===e.y&&(n.y=n.y.reverse()),n}findFarthestPosition(e,n){let t;do{t=e,e={x:t.x+n.x,y:t.y+n.y}}while(this.grid.withinBounds(e)&&this.grid.cellAvailable(e));return{farthest:t,next:e}}movesAvailable(){return this.grid.cellsAvailable()||this.tileMatchesAvailable()}tileMatchesAvailable(){const e=this;let n;for(let t=0;t<this.size;t++)for(let a=0;a<this.size;a++)if(n=this.grid.cellContent({x:t,y:a}),n)for(let r=0;r<4;r++){const s=e.getVector(r),i={x:t+s.x,y:a+s.y},o=e.grid.cellContent(i);if(o&&o.value===n.value)return!0}return!1}positionsEqual(e,n){return e.x===n.x&&e.y===n.y}}var x='@charset "UTF-8";\n@font-face {\n  font-family: "Clear Sans";\n  src: url("__VITE_ASSET__77ef51b0__");\n  src: url("__VITE_ASSET__77ef51b0__$_?#iefix__") format("embedded-opentype"), url("__VITE_ASSET__5080487c__$_#clear_sans_lightregular__") format("svg"), url("__VITE_ASSET__465697ff__") format("woff");\n  font-weight: 200;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Clear Sans";\n  src: url("__VITE_ASSET__4d1fe136__");\n  src: url("__VITE_ASSET__4d1fe136__$_?#iefix__") format("embedded-opentype"), url("__VITE_ASSET__5d7fbc7a__$_#clear_sansregular__") format("svg"), url("__VITE_ASSET__8c94cd2f__") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Clear Sans";\n  src: url("__VITE_ASSET__820a4c29__");\n  src: url("__VITE_ASSET__820a4c29__$_?#iefix__") format("embedded-opentype"), url("__VITE_ASSET__a669c919__$_#clear_sansbold__") format("svg"), url("__VITE_ASSET__b16e36cc__") format("woff");\n  font-weight: 700;\n  font-style: normal;\n}\n@-webkit-keyframes move-up-0c46a597 {\n0% {\n    top: 2.5rem;\n    opacity: 1;\n}\n100% {\n    top: -5rem;\n    opacity: 0;\n}\n}\n@-moz-keyframes move-up-0c46a597 {\n0% {\n    top: 2.5rem;\n    opacity: 1;\n}\n100% {\n    top: -5rem;\n    opacity: 0;\n}\n}\n@keyframes move-up-0c46a597 {\n0% {\n    top: 2.5rem;\n    opacity: 1;\n}\n100% {\n    top: -5rem;\n    opacity: 0;\n}\n}\n[data-v-0c46a597] .panel .scores-container {\n  display: flex;\n  box-sizing: content-box;\n}\n[data-v-0c46a597] .panel .scores-container * + * {\n  margin-left: 0.5rem;\n}\n[data-v-0c46a597] .panel .score-container,[data-v-0c46a597] .panel .best-container {\n  position: relative;\n  display: inline-block;\n  background: #bbada0;\n  padding: 1.5rem 2.5rem;\n  font-size: 2.5rem;\n  height: 2.5rem;\n  line-height: 4.7rem;\n  font-weight: bold;\n  border-radius: 0.3rem;\n  color: white;\n  text-align: center;\n  box-sizing: content-box;\n}\n[data-v-0c46a597] .panel .score-container:after,[data-v-0c46a597] .panel .best-container:after {\n  position: absolute;\n  width: 100%;\n  top: 1rem;\n  left: 0;\n  text-transform: uppercase;\n  font-size: 1.3rem;\n  line-height: 1.3rem;\n  text-align: center;\n  color: #eee4da;\n  box-sizing: content-box;\n}\n[data-v-0c46a597] .panel .score-container .score-addition,[data-v-0c46a597] .panel .best-container .score-addition {\n  position: absolute;\n  right: 3rem;\n  color: red;\n  font-size: 2.5rem;\n  line-height: 2.5rem;\n  font-weight: bold;\n  color: rgba(119, 110, 101, 0.9);\n  z-index: 100;\n  box-sizing: content-box;\n  -webkit-animation: move-up-0c46a597 600ms ease-in;\n  -moz-animation: move-up-0c46a597 600ms ease-in;\n  animation: move-up-0c46a597 600ms ease-in;\n  -webkit-animation-fill-mode: both;\n  -moz-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n[data-v-0c46a597] .panel .score-container:after {\n  content: "分数";\n  box-sizing: content-box;\n}\n[data-v-0c46a597] .panel .best-container:after {\n  box-sizing: content-box;\n  content: "最高分";\n}\n[data-v-0c46a597] .panel p {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  line-height: 1.65;\n}\n[data-v-0c46a597] .panel a {\n  color: #776E65;\n  font-weight: bold;\n  text-decoration: underline;\n  cursor: pointer;\n}\n[data-v-0c46a597] .panel strong.important {\n  text-transform: uppercase;\n}\n[data-v-0c46a597] .panel hr {\n  border: none;\n  border-bottom: 0.1rem solid #d8d4d0;\n  margin-top: 2rem;\n  margin-bottom: 3rem;\n}\n[data-v-0c46a597] .panel .container {\n  font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;\n  font-size: 1.8rem;\n  color: #776E65;\n  width: 50rem;\n  margin: 0 auto;\n}\n@-webkit-keyframes fade-in-0c46a597 {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@-moz-keyframes fade-in-0c46a597 {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes fade-in-0c46a597 {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n[data-v-0c46a597] .panel .game-container {\n  margin-top: 4rem;\n  position: relative;\n  padding: 1.5rem;\n  cursor: default;\n  -webkit-touch-callout: none;\n  -ms-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  background: #bbada0;\n  border-radius: 0.6rem;\n  width: 50rem;\n  height: 50rem;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n[data-v-0c46a597] .panel .game-container .game-message {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(238, 228, 218, 0.5);\n  z-index: 100;\n  text-align: center;\n  -webkit-animation: fade-in-0c46a597 800ms ease 1200ms;\n  -moz-animation: fade-in-0c46a597 800ms ease 1200ms;\n  animation: fade-in-0c46a597 800ms ease 1200ms;\n  -webkit-animation-fill-mode: both;\n  -moz-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n[data-v-0c46a597] .panel .game-container .game-message p {\n  font-size: 6rem;\n  font-weight: bold;\n  height: 6rem;\n  line-height: 6rem;\n  margin-top: 22.2rem;\n}\n[data-v-0c46a597] .panel .game-container .game-message .lower {\n  display: block;\n  margin-top: 5.9rem;\n}\n[data-v-0c46a597] .panel .game-container .game-message a {\n  display: inline-block;\n  background: #8f7a66;\n  border-radius: 0.3rem;\n  padding: 0 2rem;\n  text-decoration: none;\n  color: #f9f6f2;\n  height: 4rem;\n  line-height: 4.2rem;\n  margin-left: 0.9rem;\n}\n[data-v-0c46a597] .panel .game-container .game-message a.keep-playing-button {\n  display: none;\n}\n[data-v-0c46a597] .panel .game-container .game-message.game-won {\n  background: rgba(237, 194, 46, 0.5);\n  color: #f9f6f2;\n}\n[data-v-0c46a597] .panel .game-container .game-message.game-won a.keep-playing-button {\n  display: inline-block;\n}\n[data-v-0c46a597] .panel .game-container .game-message.game-won,[data-v-0c46a597] .panel .game-container .game-message.game-over {\n  display: block;\n}\n[data-v-0c46a597] .panel .grid-container {\n  position: absolute;\n  z-index: 1;\n}\n[data-v-0c46a597] .panel .grid-cell {\n  width: 10.625rem;\n  height: 10.625rem;\n  margin-right: 1.5rem;\n  margin-bottom: 1.5rem;\n  float: left;\n  border-radius: 0.3rem;\n  background: rgba(238, 228, 218, 0.35);\n}\n[data-v-0c46a597] .panel .grid-cell:nth-child(4n) {\n  margin-right: 0;\n}\n[data-v-0c46a597] .panel .grid-cell:nth-last-child(-n+4) {\n  margin-bottom: 0;\n}\n[data-v-0c46a597] .panel .tile-container {\n  position: absolute;\n  z-index: 2;\n}\n[data-v-0c46a597] .panel .tile,[data-v-0c46a597] .panel .tile .tile-inner {\n  width: 11rem;\n  height: 11rem;\n  line-height: 11rem;\n}\n[data-v-0c46a597] .panel .tile.tile-position-1-1 {\n  -webkit-transform: translate(0rem, 0rem);\n  -moz-transform: translate(0rem, 0rem);\n  -ms-transform: translate(0rem, 0rem);\n  transform: translate(0rem, 0rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-1-2 {\n  -webkit-transform: translate(0rem, 12rem);\n  -moz-transform: translate(0rem, 12rem);\n  -ms-transform: translate(0rem, 12rem);\n  transform: translate(0rem, 12rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-1-3 {\n  -webkit-transform: translate(0rem, 24rem);\n  -moz-transform: translate(0rem, 24rem);\n  -ms-transform: translate(0rem, 24rem);\n  transform: translate(0rem, 24rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-1-4 {\n  -webkit-transform: translate(0rem, 36rem);\n  -moz-transform: translate(0rem, 36rem);\n  -ms-transform: translate(0rem, 36rem);\n  transform: translate(0rem, 36rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-2-1 {\n  -webkit-transform: translate(12rem, 0rem);\n  -moz-transform: translate(12rem, 0rem);\n  -ms-transform: translate(12rem, 0rem);\n  transform: translate(12rem, 0rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-2-2 {\n  -webkit-transform: translate(12rem, 12rem);\n  -moz-transform: translate(12rem, 12rem);\n  -ms-transform: translate(12rem, 12rem);\n  transform: translate(12rem, 12rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-2-3 {\n  -webkit-transform: translate(12rem, 24rem);\n  -moz-transform: translate(12rem, 24rem);\n  -ms-transform: translate(12rem, 24rem);\n  transform: translate(12rem, 24rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-2-4 {\n  -webkit-transform: translate(12rem, 36rem);\n  -moz-transform: translate(12rem, 36rem);\n  -ms-transform: translate(12rem, 36rem);\n  transform: translate(12rem, 36rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-3-1 {\n  -webkit-transform: translate(24rem, 0rem);\n  -moz-transform: translate(24rem, 0rem);\n  -ms-transform: translate(24rem, 0rem);\n  transform: translate(24rem, 0rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-3-2 {\n  -webkit-transform: translate(24rem, 12rem);\n  -moz-transform: translate(24rem, 12rem);\n  -ms-transform: translate(24rem, 12rem);\n  transform: translate(24rem, 12rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-3-3 {\n  -webkit-transform: translate(24rem, 24rem);\n  -moz-transform: translate(24rem, 24rem);\n  -ms-transform: translate(24rem, 24rem);\n  transform: translate(24rem, 24rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-3-4 {\n  -webkit-transform: translate(24rem, 36rem);\n  -moz-transform: translate(24rem, 36rem);\n  -ms-transform: translate(24rem, 36rem);\n  transform: translate(24rem, 36rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-4-1 {\n  -webkit-transform: translate(36rem, 0rem);\n  -moz-transform: translate(36rem, 0rem);\n  -ms-transform: translate(36rem, 0rem);\n  transform: translate(36rem, 0rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-4-2 {\n  -webkit-transform: translate(36rem, 12rem);\n  -moz-transform: translate(36rem, 12rem);\n  -ms-transform: translate(36rem, 12rem);\n  transform: translate(36rem, 12rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-4-3 {\n  -webkit-transform: translate(36rem, 24rem);\n  -moz-transform: translate(36rem, 24rem);\n  -ms-transform: translate(36rem, 24rem);\n  transform: translate(36rem, 24rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-4-4 {\n  -webkit-transform: translate(36rem, 36rem);\n  -moz-transform: translate(36rem, 36rem);\n  -ms-transform: translate(36rem, 36rem);\n  transform: translate(36rem, 36rem);\n}\n[data-v-0c46a597] .panel .tile {\n  position: absolute;\n  -webkit-transition: 100ms ease-in-out;\n  -moz-transition: 100ms ease-in-out;\n  transition: 100ms ease-in-out;\n  -webkit-transition-property: -webkit-transform;\n  -moz-transition-property: -moz-transform;\n  transition-property: transform;\n}\n[data-v-0c46a597] .panel .tile .tile-inner {\n  border-radius: 0.3rem;\n  background: #eee4da;\n  text-align: center;\n  font-weight: bold;\n  z-index: 10;\n  font-size: 5.5rem;\n}\n[data-v-0c46a597] .panel .tile.tile-2 .tile-inner {\n  background: #eee4da;\n  box-shadow: 0 0 3rem 1rem rgba(243, 215, 116, max(1 - 4, 0)/7/1.8), inset 0 0 0 0.1rem rgba(255, 255, 255, max(1 - 4, 0)/7/3);\n}\n[data-v-0c46a597] .panel .tile.tile-4 .tile-inner {\n  background: #eee1c9;\n  box-shadow: 0 0 3rem 1rem rgba(243, 215, 116, max(2 - 4, 0)/7/1.8), inset 0 0 0 0.1rem rgba(255, 255, 255, max(2 - 4, 0)/7/3);\n}\n[data-v-0c46a597] .panel .tile.tile-8 .tile-inner {\n  color: #f9f6f2;\n  background: #f3b27a;\n}\n[data-v-0c46a597] .panel .tile.tile-16 .tile-inner {\n  color: #f9f6f2;\n  background: #f69664;\n}\n[data-v-0c46a597] .panel .tile.tile-32 .tile-inner {\n  color: #f9f6f2;\n  background: #f77c5f;\n}\n[data-v-0c46a597] .panel .tile.tile-64 .tile-inner {\n  color: #f9f6f2;\n  background: #f75f3b;\n}\n[data-v-0c46a597] .panel .tile.tile-128 .tile-inner {\n  color: #f9f6f2;\n  background: #edd073;\n  box-shadow: 0 0 3rem 1rem rgba(243, 215, 116, max(7 - 4, 0)/7/1.8), inset 0 0 0 0.1rem rgba(255, 255, 255, max(7 - 4, 0)/7/3);\n  font-size: 4.5rem;\n}\n@media screen and (max-width: 52rem) {\n[data-v-0c46a597] .panel .tile.tile-128 .tile-inner {\n    font-size: 2.5rem;\n}\n}\n[data-v-0c46a597] .panel .tile.tile-256 .tile-inner {\n  color: #f9f6f2;\n  background: #edcc62;\n  box-shadow: 0 0 3rem 1rem rgba(243, 215, 116, max(8 - 4, 0)/7/1.8), inset 0 0 0 0.1rem rgba(255, 255, 255, max(8 - 4, 0)/7/3);\n  font-size: 4.5rem;\n}\n@media screen and (max-width: 52rem) {\n[data-v-0c46a597] .panel .tile.tile-256 .tile-inner {\n    font-size: 2.5rem;\n}\n}\n[data-v-0c46a597] .panel .tile.tile-512 .tile-inner {\n  color: #f9f6f2;\n  background: #edc950;\n  box-shadow: 0 0 3rem 1rem rgba(243, 215, 116, max(9 - 4, 0)/7/1.8), inset 0 0 0 0.1rem rgba(255, 255, 255, max(9 - 4, 0)/7/3);\n  font-size: 4.5rem;\n}\n@media screen and (max-width: 52rem) {\n[data-v-0c46a597] .panel .tile.tile-512 .tile-inner {\n    font-size: 2.5rem;\n}\n}\n[data-v-0c46a597] .panel .tile.tile-1024 .tile-inner {\n  color: #f9f6f2;\n  background: #edc53f;\n  box-shadow: 0 0 3rem 1rem rgba(243, 215, 116, max(10 - 4, 0)/7/1.8), inset 0 0 0 0.1rem rgba(255, 255, 255, max(10 - 4, 0)/7/3);\n  font-size: 3.5rem;\n}\n@media screen and (max-width: 52rem) {\n[data-v-0c46a597] .panel .tile.tile-1024 .tile-inner {\n    font-size: 1.5rem;\n}\n}\n[data-v-0c46a597] .panel .tile.tile-2048 .tile-inner {\n  color: #f9f6f2;\n  background: #edc22e;\n  box-shadow: 0 0 3rem 1rem rgba(243, 215, 116, max(11 - 4, 0)/7/1.8), inset 0 0 0 0.1rem rgba(255, 255, 255, max(11 - 4, 0)/7/3);\n  font-size: 3.5rem;\n}\n@media screen and (max-width: 52rem) {\n[data-v-0c46a597] .panel .tile.tile-2048 .tile-inner {\n    font-size: 1.5rem;\n}\n}\n[data-v-0c46a597] .panel .tile.tile-super .tile-inner {\n  color: #f9f6f2;\n  background: #3c3a33;\n  font-size: 3rem;\n}\n@media screen and (max-width: 52rem) {\n[data-v-0c46a597] .panel .tile.tile-super .tile-inner {\n    font-size: 1rem;\n}\n}\n@-webkit-keyframes appear-0c46a597 {\n0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n}\n}\n@-moz-keyframes appear-0c46a597 {\n0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n}\n}\n@keyframes appear-0c46a597 {\n0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n}\n}\n[data-v-0c46a597] .panel .tile-new .tile-inner {\n  -webkit-animation: appear-0c46a597 200ms ease 100ms;\n  -moz-animation: appear-0c46a597 200ms ease 100ms;\n  animation: appear-0c46a597 200ms ease 100ms;\n  -webkit-animation-fill-mode: backwards;\n  -moz-animation-fill-mode: backwards;\n  animation-fill-mode: backwards;\n}\n@-webkit-keyframes pop-0c46a597 {\n0% {\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1.2);\n    -moz-transform: scale(1.2);\n    -ms-transform: scale(1.2);\n    transform: scale(1.2);\n}\n100% {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n}\n}\n@-moz-keyframes pop-0c46a597 {\n0% {\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1.2);\n    -moz-transform: scale(1.2);\n    -ms-transform: scale(1.2);\n    transform: scale(1.2);\n}\n100% {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n}\n}\n@keyframes pop-0c46a597 {\n0% {\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1.2);\n    -moz-transform: scale(1.2);\n    -ms-transform: scale(1.2);\n    transform: scale(1.2);\n}\n100% {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n}\n}\n[data-v-0c46a597] .panel .tile-merged .tile-inner {\n  z-index: 20;\n  -webkit-animation: pop-0c46a597 200ms ease 100ms;\n  -moz-animation: pop-0c46a597 200ms ease 100ms;\n  animation: pop-0c46a597 200ms ease 100ms;\n  -webkit-animation-fill-mode: backwards;\n  -moz-animation-fill-mode: backwards;\n  animation-fill-mode: backwards;\n}\n[data-v-0c46a597] .panel .above-game {\n  width: 100%;\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n}\n[data-v-0c46a597] .panel .game-intro {\n  float: left;\n  line-height: 4.2rem;\n  margin-bottom: 0;\n}\n[data-v-0c46a597] .panel .restart-button {\n  display: inline-block;\n  background: #8f7a66;\n  border-radius: 0.3rem;\n  padding: 0 2rem;\n  text-decoration: none;\n  color: #f9f6f2;\n  height: 4rem;\n  line-height: 4.2rem;\n  display: block;\n  text-align: center;\n  float: right;\n}\n[data-v-0c46a597] .panel .game-explanation {\n  margin-top: 5rem;\n}\n@media screen and (max-width: 52rem) {\n[data-v-0c46a597] .panel .container {\n    font-size: 1.5rem;\n    width: 28rem;\n    margin: 0 auto;\n}\n[data-v-0c46a597] .panel .score-container,[data-v-0c46a597] .panel .best-container {\n    margin-top: 0;\n    padding: 1.5rem 1rem;\n    min-width: 4rem;\n}\n[data-v-0c46a597] .panel .game-intro {\n    width: 55%;\n    display: block;\n    box-sizing: border-box;\n    line-height: 1.65;\n}\n[data-v-0c46a597] .panel .restart-button {\n    width: 25%;\n    padding: 0;\n    display: block;\n    box-sizing: border-box;\n    margin-top: 0.2rem;\n}\n[data-v-0c46a597] .panel .game-container {\n    margin-top: 1.7rem;\n    position: relative;\n    padding: 1rem;\n    cursor: default;\n    -webkit-touch-callout: none;\n    -ms-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -ms-touch-action: none;\n    touch-action: none;\n    background: #bbada0;\n    border-radius: 0.6rem;\n    width: 28rem;\n    height: 28rem;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n[data-v-0c46a597] .panel .game-container .game-message {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(238, 228, 218, 0.5);\n    z-index: 100;\n    text-align: center;\n    -webkit-animation: fade-in-0c46a597 800ms ease 1200ms;\n    -moz-animation: fade-in-0c46a597 800ms ease 1200ms;\n    animation: fade-in-0c46a597 800ms ease 1200ms;\n    -webkit-animation-fill-mode: both;\n    -moz-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n[data-v-0c46a597] .panel .game-container .game-message p {\n    font-size: 6rem;\n    font-weight: bold;\n    height: 6rem;\n    line-height: 6rem;\n    margin-top: 22.2rem;\n}\n[data-v-0c46a597] .panel .game-container .game-message .lower {\n    display: block;\n    margin-top: 5.9rem;\n}\n[data-v-0c46a597] .panel .game-container .game-message a {\n    display: inline-block;\n    background: #8f7a66;\n    border-radius: 0.3rem;\n    padding: 0 2rem;\n    text-decoration: none;\n    color: #f9f6f2;\n    height: 4rem;\n    line-height: 4.2rem;\n    margin-left: 0.9rem;\n}\n[data-v-0c46a597] .panel .game-container .game-message a.keep-playing-button {\n    display: none;\n}\n[data-v-0c46a597] .panel .game-container .game-message.game-won {\n    background: rgba(237, 194, 46, 0.5);\n    color: #f9f6f2;\n}\n[data-v-0c46a597] .panel .game-container .game-message.game-won a.keep-playing-button {\n    display: inline-block;\n}\n[data-v-0c46a597] .panel .game-container .game-message.game-won,[data-v-0c46a597] .panel .game-container .game-message.game-over {\n    display: block;\n}\n[data-v-0c46a597] .panel .grid-container {\n    position: absolute;\n    z-index: 1;\n}\n[data-v-0c46a597] .panel .grid-cell {\n    width: 5.75rem;\n    height: 5.75rem;\n    margin-right: 1rem;\n    margin-bottom: 1rem;\n    float: left;\n    border-radius: 0.3rem;\n    background: rgba(238, 228, 218, 0.35);\n}\n[data-v-0c46a597] .panel .grid-cell:nth-child(4n) {\n    margin-right: 0;\n}\n[data-v-0c46a597] .panel .grid-cell:nth-last-child(-n+4) {\n    margin-bottom: 0;\n}\n[data-v-0c46a597] .panel .tile-container {\n    position: absolute;\n    z-index: 2;\n}\n[data-v-0c46a597] .panel .tile,[data-v-0c46a597] .panel .tile .tile-inner {\n    width: 6rem;\n    height: 6rem;\n    line-height: 6rem;\n}\n[data-v-0c46a597] .panel .tile.tile-position-1-1 {\n    -webkit-transform: translate(0rem, 0rem);\n    -moz-transform: translate(0rem, 0rem);\n    -ms-transform: translate(0rem, 0rem);\n    transform: translate(0rem, 0rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-1-2 {\n    -webkit-transform: translate(0rem, 6rem);\n    -moz-transform: translate(0rem, 6rem);\n    -ms-transform: translate(0rem, 6rem);\n    transform: translate(0rem, 6rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-1-3 {\n    -webkit-transform: translate(0rem, 13rem);\n    -moz-transform: translate(0rem, 13rem);\n    -ms-transform: translate(0rem, 13rem);\n    transform: translate(0rem, 13rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-1-4 {\n    -webkit-transform: translate(0rem, 20rem);\n    -moz-transform: translate(0rem, 20rem);\n    -ms-transform: translate(0rem, 20rem);\n    transform: translate(0rem, 20rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-2-1 {\n    -webkit-transform: translate(6rem, 0rem);\n    -moz-transform: translate(6rem, 0rem);\n    -ms-transform: translate(6rem, 0rem);\n    transform: translate(6rem, 0rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-2-2 {\n    -webkit-transform: translate(6rem, 6rem);\n    -moz-transform: translate(6rem, 6rem);\n    -ms-transform: translate(6rem, 6rem);\n    transform: translate(6rem, 6rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-2-3 {\n    -webkit-transform: translate(6rem, 13rem);\n    -moz-transform: translate(6rem, 13rem);\n    -ms-transform: translate(6rem, 13rem);\n    transform: translate(6rem, 13rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-2-4 {\n    -webkit-transform: translate(6rem, 20rem);\n    -moz-transform: translate(6rem, 20rem);\n    -ms-transform: translate(6rem, 20rem);\n    transform: translate(6rem, 20rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-3-1 {\n    -webkit-transform: translate(13rem, 0rem);\n    -moz-transform: translate(13rem, 0rem);\n    -ms-transform: translate(13rem, 0rem);\n    transform: translate(13rem, 0rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-3-2 {\n    -webkit-transform: translate(13rem, 6rem);\n    -moz-transform: translate(13rem, 6rem);\n    -ms-transform: translate(13rem, 6rem);\n    transform: translate(13rem, 6rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-3-3 {\n    -webkit-transform: translate(13rem, 13rem);\n    -moz-transform: translate(13rem, 13rem);\n    -ms-transform: translate(13rem, 13rem);\n    transform: translate(13rem, 13rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-3-4 {\n    -webkit-transform: translate(13rem, 20rem);\n    -moz-transform: translate(13rem, 20rem);\n    -ms-transform: translate(13rem, 20rem);\n    transform: translate(13rem, 20rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-4-1 {\n    -webkit-transform: translate(20rem, 0rem);\n    -moz-transform: translate(20rem, 0rem);\n    -ms-transform: translate(20rem, 0rem);\n    transform: translate(20rem, 0rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-4-2 {\n    -webkit-transform: translate(20rem, 6rem);\n    -moz-transform: translate(20rem, 6rem);\n    -ms-transform: translate(20rem, 6rem);\n    transform: translate(20rem, 6rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-4-3 {\n    -webkit-transform: translate(20rem, 13rem);\n    -moz-transform: translate(20rem, 13rem);\n    -ms-transform: translate(20rem, 13rem);\n    transform: translate(20rem, 13rem);\n}\n[data-v-0c46a597] .panel .tile.tile-position-4-4 {\n    -webkit-transform: translate(20rem, 20rem);\n    -moz-transform: translate(20rem, 20rem);\n    -ms-transform: translate(20rem, 20rem);\n    transform: translate(20rem, 20rem);\n}\n[data-v-0c46a597] .panel .tile .tile-inner {\n    font-size: 3.5rem;\n}\n[data-v-0c46a597] .panel .game-message p {\n    font-size: 3rem !important;\n    height: 3rem !important;\n    line-height: 3rem !important;\n    margin-top: 9rem !important;\n}\n[data-v-0c46a597] .panel .game-message .lower {\n    margin-top: 3rem !important;\n}\n}';const{mapActions:_,mapState:C}=o("g2048");let E;const S={name:"2048",components:{Container:i},data:()=>({state:{}}),computed:s({},C({gameState:e=>e.gameState,bestScore:e=>e.bestScore})),mounted(){E=new z(4,this)},methods:s({},_(["setBestScore","setGameState","clearGameState"])),beforeUnmount(){E.destroy()}};m("data-v-0c46a597");const T={class:"panel"},P={class:"container"},A={class:"above-game"},B={class:"scores-container"},L={class:"score-container",ref:"scoreContainer"},M={class:"best-container",ref:"bestContainer"},V={class:"restart-button",ref:"restartButton"},I={class:"game-container",ref:"gameContainer"},$={class:"game-message",ref:"messageContainer"},F=p("p",null,null,-1),G={class:"lower"},K={class:"keep-playing-button",ref:"keepPlayingButton"},j={class:"retry-button",ref:"retryButton"},D={class:"grid-container"},O={class:"tile-container",ref:"tileContainer"};function X(e,n,t,a,r,s){const i=c("container");return h(),d(i,null,{default:f((()=>[p("div",T,[p("div",P,[p("div",A,[p("div",B,[p("div",L,"0",512),p("div",M,"0",512)]),p("a",V,"新游戏",512)]),p("div",I,[p("div",$,[F,p("div",G,[p("a",K,"继续挑战",512),p("a",j,"重新开始",512)])],512),p("div",D,[(h(),g(b,null,u(16,(e=>p("div",{class:"grid-cell",key:e}))),64))]),p("div",O,null,512)],512)])])])),_:1})}l(),S.render=X,S.__scopeId="data-v-0c46a597";export{S as default};