import{cM as i,a$ as u}from"./index-AbLOts5N.js";function n({source:s,text:e="已复制到剪贴板",createToast:t=!0}={}){const{copy:a,...c}=i({source:s,legacy:!0});return{...c,async copy(o,{notificationMessage:r}={}){s?await a():await a(o),t&&u.success(r??e)}}}export{n as u};
