import{y as a,aS as p,aT as d,aI as i,i as c,aU as u}from"./index.62bfa1d0.js";function s(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var f=a({name:"close-popup",beforeMount(e,{value:t}){const r={depth:s(t),handler(o){r.depth!==0&&setTimeout(()=>{const n=p(e);n!==void 0&&d(n,o,r.depth)})},handlerKey(o){i(o,13)===!0&&r.handler(o)}};e.__qclosepopup=r,e.addEventListener("click",r.handler),e.addEventListener("keyup",r.handlerKey)},updated(e,{value:t,oldValue:r}){t!==r&&(e.__qclosepopup.depth=s(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});function l(){return c(u)}export{f as C,l as u};
