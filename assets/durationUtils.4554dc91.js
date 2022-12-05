import{aH as pe,r as w,aI as se,D as Z,n as Ee,B as ee,w as q,o as Ce,p as I,g as H,G as Se,t as O,aJ as te,z as Be,$ as Me,j as E,c as g,h as y,k as P,J as Q,ao as Le,L as K,aK as He,H as re,v as Pe,I as We,aD as Re,K as _e,aE as $e,M as Ae,aF as De,N as Fe,aG as Oe,aL as ze,E as Ie,aM as Qe,aN as ne,Y as Ke,aO as je,am as Ne,aP as Ve,aQ as Ge,aR as Je}from"./index.62bfa1d0.js";function Ue(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),pe.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Ye={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Xe({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:l,proxy:a,emit:r}=H(),o=w(null);let f;function d(i){return o.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const s={};n===void 0&&(Object.assign(s,{hide(i){a.hide(i)},toggle(i){a.toggle(i),i.qAnchorHandled=!0},toggleKey(i){se(i,13)===!0&&s.toggle(i)},contextClick(i){a.hide(i),Z(i),Ee(()=>{a.show(i),i.qAnchorHandled=!0})},prevent:Z,mobileTouch(i){if(s.mobileCleanup(i),d(i)!==!0)return;a.hide(i),o.value.classList.add("non-selectable");const m=i.target;ee(s,"anchor",[[m,"touchmove","mobileCleanup","passive"],[m,"touchend","mobileCleanup","passive"],[m,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{a.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){o.value.classList.remove("non-selectable"),clearTimeout(f),e.value===!0&&i!==void 0&&Ue()}}),n=function(i=l.contextMenu){if(l.noParentEvent===!0||o.value===null)return;let m;i===!0?a.$q.platform.is.mobile===!0?m=[[o.value,"touchstart","mobileTouch","passive"]]:m=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:m=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],ee(s,"anchor",m)});function c(){Se(s,"anchor")}function b(i){for(o.value=i;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function h(){if(l.target===!1||l.target===""||a.$el.parentNode===null)o.value=null;else if(l.target===!0)b(a.$el.parentNode);else{let i=l.target;if(typeof l.target=="string")try{i=document.querySelector(l.target)}catch{i=void 0}i!=null?(o.value=i.$el||i,n()):(o.value=null,console.error(`Anchor: target "${l.target}" not found`))}}return q(()=>l.contextMenu,i=>{o.value!==null&&(c(),n(i))}),q(()=>l.target,()=>{o.value!==null&&c(),h()}),q(()=>l.noParentEvent,i=>{o.value!==null&&(i===!0?c():n())}),Ce(()=>{h(),t!==!0&&l.modelValue===!0&&o.value===null&&r("update:modelValue",!1)}),I(()=>{clearTimeout(f),c()}),{anchorEl:o,canShow:d,anchorEvents:s}}function Ze(e,t){const n=w(null);let l;function a(f,d){const s=`${d!==void 0?"add":"remove"}EventListener`,c=d!==void 0?d:l;f!==window&&f[s]("scroll",c,O.passive),window[s]("scroll",c,O.passive),l=d}function r(){n.value!==null&&(a(n.value),n.value=null)}const o=q(()=>e.noParentEvent,()=>{n.value!==null&&(r(),t())});return I(o),{localScrollTarget:n,unconfigureScrollTarget:r,changeScrollEvent:a}}let ce;const{notPassiveCapture:M}=O,x=[];function L(e){clearTimeout(ce);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=te.length-1;for(;n>=0;){const l=te[n].$;if(l.type.name!=="QDialog")break;if(l.props.seamless!==!0)return;n--}for(let l=x.length-1;l>=0;l--){const a=x[l];if((a.anchorEl.value===null||a.anchorEl.value.contains(t)===!1)&&(t===document.body||a.innerRef.value!==null&&a.innerRef.value.contains(t)===!1))e.qClickOutside=!0,a.onClickOutside(e);else return}}function et(e){x.push(e),x.length===1&&(document.addEventListener("mousedown",L,M),document.addEventListener("touchstart",L,M))}function le(e){const t=x.findIndex(n=>n===e);t>-1&&(x.splice(t,1),x.length===0&&(clearTimeout(ce),document.removeEventListener("mousedown",L,M),document.removeEventListener("touchstart",L,M)))}let ae,oe;function ie(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function tt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const z={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{z[`${e}#ltr`]=e,z[`${e}#rtl`]=e});function ue(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:z[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function nt(e,t){let{top:n,left:l,right:a,bottom:r,width:o,height:f}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],l-=t[0],r+=t[1],a+=t[0],o+=t[0],f+=t[1]),{top:n,left:l,right:a,bottom:r,width:o,height:f,middle:l+(a-l)/2,center:n+(r-n)/2}}function lt(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function at(e){if(Be.is.ios===!0&&window.visualViewport!==void 0){const f=document.body.style,{offsetLeft:d,offsetTop:s}=window.visualViewport;d!==ae&&(f.setProperty("--q-pe-left",d+"px"),ae=d),s!==oe&&(f.setProperty("--q-pe-top",s+"px"),oe=s)}let t;const{scrollLeft:n,scrollTop:l}=e.el;if(e.absoluteOffset===void 0)t=nt(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:f,left:d}=e.anchorEl.getBoundingClientRect(),s=f+e.absoluteOffset.top,c=d+e.absoluteOffset.left;t={top:s,left:c,width:1,height:1,right:c+1,center:s,middle:c,bottom:s+1}}let a={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(a.minWidth=t.width+"px",e.cover===!0&&(a.minHeight=t.height+"px")),Object.assign(e.el.style,a);const r=lt(e.el),o={top:t[e.anchorOrigin.vertical]-r[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-r[e.selfOrigin.horizontal]};ot(o,t,r,e.anchorOrigin,e.selfOrigin),a={top:o.top+"px",left:o.left+"px"},o.maxHeight!==void 0&&(a.maxHeight=o.maxHeight+"px",t.height>o.maxHeight&&(a.minHeight=a.maxHeight)),o.maxWidth!==void 0&&(a.maxWidth=o.maxWidth+"px",t.width>o.maxWidth&&(a.minWidth=a.maxWidth)),Object.assign(e.el.style,a),e.el.scrollTop!==l&&(e.el.scrollTop=l),e.el.scrollLeft!==n&&(e.el.scrollLeft=n)}function ot(e,t,n,l,a){const r=n.bottom,o=n.right,f=Me(),d=window.innerHeight-f,s=document.body.clientWidth;if(e.top<0||e.top+r>d)if(a.vertical==="center")e.top=t[l.vertical]>d/2?Math.max(0,d-r):0,e.maxHeight=Math.min(r,d);else if(t[l.vertical]>d/2){const c=Math.min(d,l.vertical==="center"?t.center:l.vertical===a.vertical?t.bottom:t.top);e.maxHeight=Math.min(r,c),e.top=Math.max(0,c-r)}else e.top=Math.max(0,l.vertical==="center"?t.center:l.vertical===a.vertical?t.top:t.bottom),e.maxHeight=Math.min(r,d-e.top);if(e.left<0||e.left+o>s)if(e.maxWidth=Math.min(o,s),a.horizontal==="middle")e.left=t[l.horizontal]>s/2?Math.max(0,s-o):0;else if(t[l.horizontal]>s/2){const c=Math.min(s,l.horizontal==="middle"?t.middle:l.horizontal===a.horizontal?t.right:t.left);e.maxWidth=Math.min(o,c),e.left=Math.max(0,c-e.maxWidth)}else e.left=Math.max(0,l.horizontal==="middle"?t.middle:l.horizontal===a.horizontal?t.left:t.right),e.maxWidth=Math.min(o,s-e.left)}var st=E({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=g(()=>parseInt(e.lines,10)),l=g(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),a=g(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>y("div",{style:a.value,class:l.value},P(t.default))}}),rt=E({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=g(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>y("div",{class:n.value},P(t.default))}}),ct=E({name:"QItem",props:{...Q,...Le,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=H(),a=K(e,l),{hasRouterLink:r,hasLink:o,linkProps:f,linkClass:d,linkTag:s,navigateToRouterLink:c}=He(),b=w(null),h=w(null),i=g(()=>e.clickable===!0||o.value===!0||e.tag==="label"),m=g(()=>e.disable!==!0&&i.value===!0),W=g(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(a.value===!0?" q-item--dark":"")+(o.value===!0&&e.active===null?d.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),C=g(()=>{if(e.insetLevel===void 0)return null;const v=l.lang.rtl===!0?"Right":"Left";return{["padding"+v]:16+e.insetLevel*56+"px"}});function S(v){m.value===!0&&(h.value!==null&&(v.qKeyEvent!==!0&&document.activeElement===b.value?h.value.focus():document.activeElement===h.value&&b.value.focus()),r.value===!0&&c(v),n("click",v))}function B(v){if(m.value===!0&&se(v,13)===!0){re(v),v.qKeyEvent=!0;const T=new MouseEvent("click",v);T.qKeyEvent=!0,b.value.dispatchEvent(T)}n("keyup",v)}function R(){const v=Pe(t.default,[]);return m.value===!0&&v.unshift(y("div",{class:"q-focus-helper",tabindex:-1,ref:h})),v}return()=>{const v={ref:b,class:W.value,style:C.value,onClick:S,onKeyup:B};return m.value===!0?(v.tabindex=e.tabindex||"0",Object.assign(v,f.value)):i.value===!0&&(v["aria-disabled"]="true"),y(s.value,v,R())}}}),dt=E({name:"QList",props:{...Q,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:t}){const n=H(),l=K(e,n.proxy.$q),a=g(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>y("div",{class:a.value},P(t.default))}}),ft=E({name:"QMenu",inheritAttrs:!1,props:{...Ye,...We,...Q,...Re,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ie},self:{type:String,validator:ie},offset:{type:Array,validator:tt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[..._e,"click","escape-key"],setup(e,{slots:t,emit:n,attrs:l}){let a=null,r,o,f;const d=H(),{proxy:s}=d,{$q:c}=s,b=w(null),h=w(!1),i=g(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),m=K(e,c),{registerTick:W,removeTick:C}=$e(),{registerTimeout:S,removeTimeout:B}=Ae(),{transition:R,transitionStyle:v}=De(e,h),{localScrollTarget:T,changeScrollEvent:de,unconfigureScrollTarget:fe}=Ze(e,Y),{anchorEl:k,canShow:ve}=Xe({showing:h}),{hide:j}=Fe({showing:h,canShow:ve,handleShow:xe,handleHide:ye,hideOnRouteChange:i,processOnMount:!0}),{showPortal:N,hidePortal:V,renderPortal:me}=Oe(d,b,qe),_={anchorEl:k,innerRef:b,onClickOutside(u){if(e.persistent!==!0&&h.value===!0)return j(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&re(u),!0}},G=g(()=>ue(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),he=g(()=>e.cover===!0?G.value:ue(e.self||"top start",c.lang.rtl)),ge=g(()=>(e.square===!0?" q-menu--square":"")+(m.value===!0?" q-menu--dark q-dark":"")),be=g(()=>e.autoClose===!0?{onClick:ke}:{}),J=g(()=>h.value===!0&&e.persistent!==!0);q(J,u=>{u===!0?(Ve(A),et(_)):(ne(A),le(_))});function $(){Ge(()=>{let u=b.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function xe(u){if(C(),B(),a=e.noRefocus===!1?document.activeElement:null,ze(X),N(),Y(),r=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const D=Ie(u);if(D.left!==void 0){const{top:we,left:Te}=k.value.getBoundingClientRect();r={left:D.left-Te,top:D.top-we}}}o===void 0&&(o=q(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,p)),e.noFocus!==!0&&document.activeElement.blur(),W(()=>{p(),e.noFocus!==!0&&$()}),S(()=>{c.platform.is.ios===!0&&(f=e.autoClose,b.value.click()),p(),N(!0),n("show",u)},e.transitionDuration)}function ye(u){C(),B(),V(),U(!0),a!==null&&(u===void 0||u.qClickOutside!==!0)&&(a.focus(),a=null),S(()=>{V(!0),n("hide",u)},e.transitionDuration)}function U(u){r=void 0,o!==void 0&&(o(),o=void 0),(u===!0||h.value===!0)&&(Qe(X),fe(),le(_),ne(A)),u!==!0&&(a=null)}function Y(){(k.value!==null||e.scrollTarget!==void 0)&&(T.value=Ke(k.value,e.scrollTarget),de(T.value,p))}function ke(u){f!==!0?(je(s,u),n("click",u)):f=!1}function X(u){J.value===!0&&e.noFocus!==!0&&Je(b.value,u.target)!==!0&&$()}function A(u){n("escape-key"),j(u)}function p(){const u=b.value;u===null||k.value===null||at({el:u,offset:e.offset,anchorEl:k.value,anchorOrigin:G.value,selfOrigin:he.value,absoluteOffset:r,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function qe(){return y(Ne,{name:R.value,appear:!0},()=>h.value===!0?y("div",{...l,ref:b,tabindex:-1,class:["q-menu q-position-engine scroll"+ge.value,l.class],style:[l.style,v.value],...be.value},P(t.default)):null)}return I(U),Object.assign(s,{focus:$,updatePosition:p}),me}});function vt(e){let t=0;for(let n of e){n=n.split(".")[0];const l=n.split(":");let a=0;for(const r of l.reverse())t+=parseInt(r)*Math.pow(60,a),a++}return it(t)}function F(e,t){let n=e.toString();for(;n.length<t;)n="0"+n;return n}function mt(e){return e=e.split(".")[0],e.split(":").slice(1).join(":")}function ht(e){e=e.split(".")[0];const t=e.split(":");let n=0,l=0;return t.reverse().forEach(a=>{n+=Math.pow(60,l)*parseInt(a),l++}),n}function it(e){let t=e;const n=Math.floor(t/3600);t-=3600*n;const l=Math.floor(t/60);return t-=60*l,`${F(n,2)}:${F(l,2)}:${F(Math.floor(t),2)}`}export{ft as Q,rt as a,ct as b,Ue as c,ht as d,st as e,mt as f,dt as g,tt as h,Ze as i,Xe as j,at as k,et as l,vt as m,ue as p,le as r,it as s,Ye as u,ie as v};