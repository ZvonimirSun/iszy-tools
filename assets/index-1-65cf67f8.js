class e{constructor(i,s){this.x=i.x,this.y=i.y,this.value=s||2,this.previousPosition=null,this.mergedFrom=null}savePosition(){this.previousPosition={x:this.x,y:this.y}}updatePosition(i){this.x=i.x,this.y=i.y}serialize(){return{position:{x:this.x,y:this.y},value:this.value}}}export{e as T};
