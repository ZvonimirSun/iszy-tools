import{cE as i,b0 as u}from"./index-Yw6At5pr.js";function n({source:s,text:a="已复制到剪贴板",createToast:t=!0}={}){const{copy:e,...c}=i({source:s,legacy:!0});return{...c,async copy(o,{notificationMessage:r}={}){s?await e():await e(o),t&&u.success(r??a)}}}export{n as u};
