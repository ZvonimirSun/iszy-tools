import{bQ as x,bR as C}from"./index-36befa60.js";const s=new Map;let l;x&&(document.addEventListener("mousedown",e=>l=e),document.addEventListener("mouseup",e=>{for(const t of s.values())for(const{documentHandler:n}of t)n(e,l)}));function i(e,t){let n=[];return Array.isArray(t.arg)?n=t.arg:C(t.arg)&&n.push(t.arg),function(a,o){const c=t.instance.popperRef,r=a.target,u=o==null?void 0:o.target,f=!t||!t.instance,p=!r||!u,m=e.contains(r)||e.contains(u),h=e===r,g=n.length&&n.some(d=>d==null?void 0:d.contains(r))||n.length&&n.includes(u),v=c&&(c.contains(r)||c.contains(u));f||p||m||h||g||v||t.value(a,o)}}const H={beforeMount(e,t){s.has(e)||s.set(e,[]),s.get(e).push({documentHandler:i(e,t),bindingFn:t.value})},updated(e,t){s.has(e)||s.set(e,[]);const n=s.get(e),a=n.findIndex(c=>c.bindingFn===t.oldValue),o={documentHandler:i(e,t),bindingFn:t.value};a>=0?n.splice(a,1,o):n.push(o)},unmounted(e){s.delete(e)}};export{H as C};
