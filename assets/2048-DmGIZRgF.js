import{P as x,Q as C,a0 as w,F as g,G as o,X as S,Y as E,o as p}from"./index-Abyzm83G.js";class v{constructor(e,t){this.x=e.x,this.y=e.y,this.value=t||2,this.previousPosition=null,this.mergedFrom=null}savePosition(){this.previousPosition={x:this.x,y:this.y}}updatePosition(e){this.x=e.x,this.y=e.y}serialize(){return{position:{x:this.x,y:this.y},value:this.value}}}class f{constructor(e,t){this.size=e,this.cells=t?this.fromState(t):this.empty()}empty(){const e=[];for(let t=0;t<this.size;t++){const s=e[t]=[];for(let i=0;i<this.size;i++)s.push(null)}return e}fromState(e){const t=[];for(let s=0;s<this.size;s++){const i=t[s]=[];for(let n=0;n<this.size;n++){const r=e[s][n];i.push(r?new v(r.position,r.value):null)}}return t}randomAvailableCell(){const e=this.availableCells();if(e.length)return e[Math.floor(Math.random()*e.length)]}availableCells(){const e=[];return this.eachCell((t,s,i)=>{i||e.push({x:t,y:s})}),e}eachCell(e){for(let t=0;t<this.size;t++)for(let s=0;s<this.size;s++)e(t,s,this.cells[t][s])}cellsAvailable(){return!!this.availableCells().length}cellAvailable(e){return!this.cellOccupied(e)}cellOccupied(e){return!!this.cellContent(e)}cellContent(e){return this.withinBounds(e)?this.cells[e.x][e.y]:null}insertTile(e){this.cells[e.x][e.y]=e}removeTile(e){this.cells[e.x][e.y]=null}withinBounds(e){return e.x>=0&&e.x<this.size&&e.y>=0&&e.y<this.size}serialize(){const e=[];for(let t=0;t<this.size;t++){const s=e[t]=[];for(let i=0;i<this.size;i++)s.push(this.cells[t][i]?this.cells[t][i].serialize():null)}return{size:this.size,cells:e}}}class P{constructor(e){this.events={},this.vue=e,this.map={ArrowUp:0,ArrowRight:1,ArrowDown:2,ArrowLeft:3,KeyK:0,KeyL:1,keyJ:2,keyH:3,KeyW:0,KeyD:1,KeyS:2,KeyA:3},window.navigator.msPointerEnabled?(this.eventTouchstart="MSPointerDown",this.eventTouchmove="MSPointerMove",this.eventTouchend="MSPointerUp"):(this.eventTouchstart="touchstart",this.eventTouchmove="touchmove",this.eventTouchend="touchend"),this.retryButton=this.vue.$refs.retryButton,this.restartButton=this.vue.$refs.restartButton,this.keepPlayingButton=this.vue.$refs.keepPlayingButton,this.gameContainer=this.vue.$refs.gameContainer,this.touchStartClientX=void 0,this.touchStartClientY=void 0,this.listen()}on(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)}emit(e,t){const s=this.events[e];s&&s.forEach(i=>{i(t)})}listen(){document.addEventListener("keydown",this._keyboardEvent.bind(this)),this.bindButtonPress(this.retryButton,this.restart),this.bindButtonPress(this.restartButton,this.restart),this.bindButtonPress(this.keepPlayingButton,this.keepPlaying),this.gameContainer.addEventListener(this.eventTouchstart,this._touchStartEvent.bind(this)),this.gameContainer.addEventListener("mousedown",this._touchStartEvent.bind(this)),this.gameContainer.addEventListener(this.eventTouchmove,e=>{e.preventDefault()}),this.gameContainer.addEventListener(this.eventTouchend,this._touchEndEvent.bind(this)),this.gameContainer.addEventListener("mouseup",this._touchEndEvent.bind(this))}restart(e){e.preventDefault(),this.emit("restart")}keepPlaying(e){e.preventDefault(),this.emit("keepPlaying")}bindButtonPress(e,t){e.addEventListener("click",t.bind(this)),e.addEventListener(this.eventTouchend,t.bind(this))}removeButtonPress(e){e.addEventListener("click"),e.addEventListener(this.eventTouchend)}_keyboardEvent(e){const t=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey,s=this.map[e.code];t||s!==void 0&&(e.preventDefault(),this.emit("move",s)),!t&&e.code==="KeyR"&&this.restart(e)}_touchStartEvent(e){e.type!=="mousedown"&&(!window.navigator.msPointerEnabled&&e.touches.length>1||e.targetTouches.length>1)||(window.navigator.msPointerEnabled||e.type==="mousedown"?(this.touchStartClientX=e.pageX,this.touchStartClientY=e.pageY):(this.touchStartClientX=e.touches[0].clientX,this.touchStartClientY=e.touches[0].clientY),e.preventDefault())}_touchEndEvent(e){if(e.type!=="mouseup"&&(!window.navigator.msPointerEnabled&&e.touches.length>0||e.targetTouches.length>0))return;let t,s;window.navigator.msPointerEnabled||e.type==="mouseup"?(t=e.pageX,s=e.pageY):(t=e.changedTouches[0].clientX,s=e.changedTouches[0].clientY);const i=t-this.touchStartClientX,n=Math.abs(i),r=s-this.touchStartClientY,a=Math.abs(r);Math.max(n,a)>10&&this.emit("move",n>a?i>0?1:3:r>0?2:0)}destroy(){document.removeEventListener("keydown",this._keyboardEvent),this.removeButtonPress(this.retryButton),this.removeButtonPress(this.restartButton),this.removeButtonPress(this.keepPlayingButton),this.gameContainer.addEventListener("mousedown"),this.gameContainer.addEventListener("mouseup"),this.gameContainer.addEventListener(this.eventTouchstart),this.gameContainer.addEventListener(this.eventTouchmove),this.gameContainer.addEventListener(this.eventTouchend)}}class _{constructor(e){this.vue=e,this.tileContainer=this.vue.$refs.tileContainer,this.scoreContainer=this.vue.$refs.scoreContainer,this.bestContainer=this.vue.$refs.bestContainer,this.messageContainer=this.vue.$refs.messageContainer,this.score=0}actuate(e,t){const s=this;window.requestAnimationFrame(()=>{s.clearContainer(s.tileContainer),e.cells.forEach(i=>{i.forEach(n=>{n&&s.addTile(n)})}),s.updateScore(t.score),s.updateBestScore(t.bestScore),t.terminated&&(t.over?s.message(!1):t.won&&s.message(!0))})}continueGame(){this.clearMessage()}clearContainer(e){for(;e.firstChild;)e.removeChild(e.firstChild)}addTile(e){const t=this,s=document.createElement("div"),i=document.createElement("div"),n=e.previousPosition||{x:e.x,y:e.y},r=this.positionClass(n),a=["tile",`tile-${e.value}`,r];e.value>2048&&a.push("tile-super"),this.applyClasses(s,a),i.classList.add("tile-inner"),i.textContent=e.value,e.previousPosition?window.requestAnimationFrame(()=>{a[2]=t.positionClass({x:e.x,y:e.y}),t.applyClasses(s,a)}):e.mergedFrom?(a.push("tile-merged"),this.applyClasses(s,a),e.mergedFrom.forEach(l=>{t.addTile(l)})):(a.push("tile-new"),this.applyClasses(s,a)),s.appendChild(i),this.tileContainer.appendChild(s)}applyClasses(e,t){e.setAttribute("class",t.join(" "))}normalizePosition(e){return{x:e.x+1,y:e.y+1}}positionClass(e){return e=this.normalizePosition(e),`tile-position-${e.x}-${e.y}`}updateScore(e){this.clearContainer(this.scoreContainer);const t=e-this.score;if(this.score=e,this.scoreContainer.textContent=this.score,t>0){const s=document.createElement("div");s.classList.add("score-addition"),s.textContent=`+${t}`,this.scoreContainer.appendChild(s)}}updateBestScore(e){this.bestContainer.textContent=e}message(e){const t=e?"game-won":"game-over",s=e?"你赢啦!":"游戏结束!";this.messageContainer.classList.add(t),this.messageContainer.getElementsByTagName("p")[0].textContent=s}clearMessage(){this.messageContainer.classList.remove("game-won"),this.messageContainer.classList.remove("game-over")}}class T{constructor(e,t){this.vue=t,this.size=e,this.inputManager=new P(t),this.actuator=new _(t),this.startTiles=2,this.inputManager.on("move",this.move.bind(this)),this.inputManager.on("restart",this.restart.bind(this)),this.inputManager.on("keepPlaying",this.keepPlaying.bind(this)),this.setup()}destroy(){}restart(){this.vue.clearGameState(),this.actuator.continueGame(),this.setup()}keepPlaying(){this.keepPlaying=!0,this.actuator.continueGame()}isGameTerminated(){return this.over||this.won&&!this.keepPlaying}setup(){const e=this.vue.gameState;if(e)try{this.grid=new f(e.grid.size,e.grid.cells),this.score=e.score,this.over=e.over,this.won=e.won,this.keepPlaying=e.keepPlaying}catch{this.restart()}else this.grid=new f(this.size),this.score=0,this.over=!1,this.won=!1,this.keepPlaying=!1,this.addStartTiles();this.actuate()}addStartTiles(){for(let e=0;e<this.startTiles;e++)this.addRandomTile()}addRandomTile(){if(this.grid.cellsAvailable()){const e=Math.random()<.9?2:4,t=new v(this.grid.randomAvailableCell(),e);this.grid.insertTile(t)}}actuate(){this.vue.bestScore<this.score&&this.vue.setBestScore(this.score),this.over?this.vue.clearGameState():this.vue.setGameState(this.serialize()),this.vue.state={grid:this.grid,score:this.score,over:this.over,won:this.won,bestScore:this.vue.bestScore,terminated:this.isGameTerminated()},this.actuator.actuate(this.grid,{score:this.score,over:this.over,won:this.won,bestScore:this.vue.bestScore,terminated:this.isGameTerminated()})}serialize(){return{grid:this.grid.serialize(),score:this.score,over:this.over,won:this.won,keepPlaying:this.keepPlaying}}prepareTiles(){this.grid.eachCell((e,t,s)=>{s&&(s.mergedFrom=null,s.savePosition())})}moveTile(e,t){this.grid.cells[e.x][e.y]=null,this.grid.cells[t.x][t.y]=e,e.updatePosition(t)}move(e){const t=this;if(this.isGameTerminated())return;let s,i;const n=this.getVector(e),r=this.buildTraversals(n);let a=!1;this.prepareTiles(),r.x.forEach(l=>{r.y.forEach(b=>{if(s={x:l,y:b},i=t.grid.cellContent(s),i){const c=t.findFarthestPosition(s,n),u=t.grid.cellContent(c.next);if(u&&u.value===i.value&&!u.mergedFrom){const d=new v(c.next,i.value*2);d.mergedFrom=[i,u],t.grid.insertTile(d),t.grid.removeTile(i),i.updatePosition(c.next),t.score+=d.value,d.value===2048&&(t.won=!0)}else t.moveTile(i,c.farthest);t.positionsEqual(s,i)||(a=!0)}})}),a&&(this.addRandomTile(),this.movesAvailable()||(this.over=!0),this.actuate())}getVector(e){return{0:{x:0,y:-1},1:{x:1,y:0},2:{x:0,y:1},3:{x:-1,y:0}}[e]}buildTraversals(e){const t={x:[],y:[]};for(let s=0;s<this.size;s++)t.x.push(s),t.y.push(s);return e.x===1&&(t.x=t.x.reverse()),e.y===1&&(t.y=t.y.reverse()),t}findFarthestPosition(e,t){let s;do s=e,e={x:s.x+t.x,y:s.y+t.y};while(this.grid.withinBounds(e)&&this.grid.cellAvailable(e));return{farthest:s,next:e}}movesAvailable(){return this.grid.cellsAvailable()||this.tileMatchesAvailable()}tileMatchesAvailable(){const e=this;let t;for(let s=0;s<this.size;s++)for(let i=0;i<this.size;i++)if(t=this.grid.cellContent({x:s,y:i}),t)for(let n=0;n<4;n++){const r=e.getVector(n),a={x:s+r.x,y:i+r.y},l=e.grid.cellContent(a);if(l&&l.value===t.value)return!0}return!1}positionsEqual(e,t){return e.x===t.x&&e.y===t.y}}const m=x("2048",{persist:!0,state:()=>({gameState:null}),actions:{setBestScore(h){C().modules[2048].bestScore=h},setGameState(h){this.gameState=h},clearGameState(){this.setGameState()}}});let y;const B={name:"2048Game",data:()=>({state:{}}),computed:{gameState(){return m().gameState},bestScore(){return C().modules[2048].bestScore}},mounted(){y=new T(4,this)},beforeUnmount(){y.destroy()},methods:{setBestScore:m().setBestScore,setGameState:m().setGameState,clearGameState:m().clearGameState}},k={class:"panel"},z={class:"wrapper"},L={class:"above-game"},G={class:"scores-container"},M={ref:"scoreContainer",class:"score-container"},A={ref:"bestContainer",class:"best-container"},$={ref:"restartButton",class:"restart-button"},K={ref:"gameContainer",class:"game-container"},F={ref:"messageContainer",class:"game-message"},D={class:"lower"},X={ref:"keepPlayingButton",class:"keep-playing-button"},Y={ref:"retryButton",class:"retry-button"},R={class:"grid-container"},q={ref:"tileContainer",class:"tile-container"};function V(h,e,t,s,i,n){return p(),g("div",null,[o("div",k,[o("div",z,[o("div",L,[o("div",G,[o("div",M," 0 ",512),o("div",A," 0 ",512)]),o("a",$,"新游戏",512)]),o("div",K,[o("div",F,[e[0]||(e[0]=o("p",null,null,-1)),o("div",D,[o("a",X,"继续挑战",512),o("a",Y,"重新开始",512)])],512),o("div",R,[(p(),g(S,null,E(16,r=>o("div",{key:r,class:"grid-cell"})),64))]),o("div",q,null,512)],512)])])])}const H=w(B,[["render",V],["__scopeId","data-v-27e40a40"]]);export{H as default};