import{al as r}from"./index.5c2f2cc3.js";function l(e,s){if(e.classList)return e.classList.contains(s);var a=e.className;return" ".concat(a," ").indexOf(" ".concat(s," "))>-1}function i(e,s){e.classList?e.classList.add(s):l(e,s)||(e.className="".concat(e.className," ").concat(s))}function c(e,s){if(e.classList)e.classList.remove(s);else if(l(e,s)){var a=e.className;e.className=" ".concat(a," ").replace(" ".concat(s," ")," ")}}var o=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"ant-motion-collapse",a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return{name:s,appear:a,css:!0,onBeforeEnter:function(t){t.style.height="0px",t.style.opacity="0",i(t,s)},onEnter:function(t){r(function(){t.style.height="".concat(t.scrollHeight,"px"),t.style.opacity="1"})},onAfterEnter:function(t){t&&(c(t,s),t.style.height=null,t.style.opacity=null)},onBeforeLeave:function(t){i(t,s),t.style.height="".concat(t.offsetHeight,"px"),t.style.opacity=null},onLeave:function(t){setTimeout(function(){t.style.height="0px",t.style.opacity="0"})},onAfterLeave:function(t){t&&(c(t,s),t.style&&(t.style.height=null,t.style.opacity=null))}}};const u=o;export{u as c};