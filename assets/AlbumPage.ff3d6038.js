import{Q as z}from"./QImg.40b13b04.js";import{a1 as N,ay as F,r as h,b0 as G,b1 as H,c as A,o as W,b2 as J,a3 as c,a4 as v,a5 as i,aj as q,a7 as n,d as s,a2 as d,a8 as m,aq as g,ab as x,l as _,R as T,av as I,ak as p,ac as K}from"./index.f6b0e315.js";import{Q as D,c as C,u as X,v as Y,w as Z,x as ee}from"./index.0ad149ba.js";import{m as ae,Q as te,g as le,b as B,a as b,f as oe}from"./durationUtils.75008d74.js";import{Q as se}from"./QTd.dbf733a9.js";import{Q as ie}from"./QTable.be451506.js";import{Q as ne}from"./QPage.3b2df487.js";import{u as ue,C as M}from"./use-quasar.089a9afc.js";const re={key:0,class:"row full-width"},de={class:"col-4 q-px-md",style:{"max-width":"230px"}},ce={class:"col-8"},me={class:"row full-width full-height items-end"},fe={class:"col-12"},ve=n("div",{class:"text-body1"},"Album",-1),_e={class:"q-mb-sm-sm q-mb-none q-mt-md"},be={class:"col-12"},pe={class:"row full-width"},he={class:"text-subtitle1 text-bold"},ge={key:0,class:"text-subtitle1"},xe={class:"text-subtitle1"},ke={class:"text-subtitle1"},ye={class:"col-12 q-pt-md"},we=p("Play"),Qe=p("Save"),Ae=p("View Full Metadata"),qe=p("Suggest an Edit"),Te={class:"col-12 q-pt-md q-px-md"},Ie=N({name:"AlbumPage"}),Le=N({...Ie,setup(De){const k=F(),y=ue(),f=h(),P=new G(H),o=h(),r=h(),w=K,S=A(()=>{var e,a,t,l;return((a=(e=o==null?void 0:o.value)==null?void 0:e.albumImage)==null?void 0:a.url)===null?"http://via.placeholder.com/640x360":(l=(t=o==null?void 0:o.value)==null?void 0:t.albumImage)==null?void 0:l.url});function $(){var e;k.push({name:"albumMetadata",params:{albumId:(e=o.value)==null?void 0:e.id}})}function E(){var a,t,l;(a=r.value)==null||a.sort((u,O)=>O.index-u.index),console.log(r.value),y.notify({position:"top",type:"secondary",message:`Added ${(t=r.value)==null?void 0:t.length} tracks to Queue`});const e=(l=r.value)==null?void 0:l.map(u=>u==null?void 0:u.id).reverse();console.log(e),w.addTrackToQueueByIdBatch(e,!0,!0)}async function L(e){console.log(e);const a=parseInt(e);let t=null;if(!r.value){alert("Empty Tracklist");return}for(let l of r.value)if(l.index===a){t=l;break}if(t===null){console.log("Invalid Index. No Index: "+e+". in track list.");return}await w.addTrackToQueueById(t.id,!0,!0),y.notify({position:"top",type:"secondary",message:"Added to Queue"})}async function R(e){return P.getAlbum({id:e})}async function Q(){var e,a,t;o.value=await R(k.currentRoute.value.params.albumId),(e=o.value)!=null&&e.tracks&&((a=o.value)==null||a.tracks.sort((l,u)=>l.index-u.index),r.value=(t=o.value)==null?void 0:t.tracks)}W(async()=>{await Q()}),J(async()=>{await Q()});const V=[{name:"index",required:!0,label:"#",align:"center",field:e=>e.index,format:e=>`${e}`,style:"width: 100px",sortable:!1},{name:"title",required:!0,label:"TITLE",align:"left",field:e=>{var a;return(a=e.name)==null?void 0:a._default},format:e=>`${e}`,classes:"text-bold",sortable:!1},{name:"original",required:!1,label:"ORIGINAL",align:"left",field:e=>e.original,format:e=>e.map(a=>{var t;return(t=a.title)==null?void 0:t._default}).join(" \u2502 "),classes:"text-bold",sortable:!1},{name:"duration",required:!0,label:"DURATION",align:"right",field:e=>e.duration,format:e=>`${oe(e)}`,classes:"text-bold",sortable:!1}];let U=A(()=>{var a,t;let e=[];return(t=(a=o.value)==null?void 0:a.tracks)==null||t.forEach(l=>{l.duration&&e.push(l.duration)}),ae(e)});const j={rowsPerPage:0,descending:!0};return(e,a)=>(c(),v(ne,{padding:""},{default:i(()=>{var t;return[o.value?(c(),q("div",re,[n("div",de,[s(z,{src:d(S),ratio:"1"},null,8,["src"])]),n("div",ce,[n("div",me,[n("div",fe,[ve,n("h3",_e,m(o.value.albumName._default),1)]),n("div",be,[n("div",pe,[n("div",he,m(o.value.albumArtist[0].name),1),o.value.releaseDate?(c(),v(g,{key:0,vertical:"",spaced:""})):x("",!0),n("div",null,[o.value.releaseDate?(c(),q("div",ge,m((t=o.value.releaseDate)==null?void 0:t.toLocaleDateString()),1)):x("",!0)]),s(g,{vertical:"",spaced:""}),n("div",xe,m(o.value.tracks.length)+" Tracks",1),s(g,{vertical:"",spaced:""}),n("div",ke,m(d(U)),1)])])])]),n("div",ye,[s(_,{fab:"",class:"q-mx-md",round:"",icon:d(C),color:"black","text-color":"white",onClick:E},{default:i(()=>[s(D,null,{default:i(()=>[we]),_:1})]),_:1},8,["icon"]),s(_,{fab:"",flat:"",class:"q-mx-md",round:"",icon:d(X)},{default:i(()=>[s(D,null,{default:i(()=>[Qe]),_:1})]),_:1},8,["icon"]),s(_,{fab:"",flat:"",class:"q-mx-md",round:"",icon:d(ee)},{default:i(()=>[s(te,{fit:"",anchor:"center middle",self:"top middle"},{default:i(()=>[s(le,null,{default:i(()=>[T((c(),v(B,{clickable:"",class:"bg-dark",onClick:$},{default:i(()=>[s(b,{avatar:""},{default:i(()=>[s(I,{icon:d(Y)},null,8,["icon"])]),_:1}),s(b,null,{default:i(()=>[Ae]),_:1})]),_:1})),[[M]]),T((c(),v(B,{clickable:"",class:"bg-dark"},{default:i(()=>[s(b,{avatar:""},{default:i(()=>[s(I,{icon:d(Z)},null,8,["icon"])]),_:1}),s(b,null,{default:i(()=>[qe]),_:1})]),_:1})),[[M]])]),_:1})]),_:1})]),_:1},8,["icon"])]),n("div",Te,[s(ie,{rows:r.value,columns:V,pagination:j,separator:"none","row-key":"index",flat:"","hide-bottom":"","virtual-scroll":"","hide-pagination":""},{"body-cell-index":i(l=>[s(se,{props:l},{default:i(()=>[s(_,{flat:"",onMouseover:u=>f.value=l.value,onMouseleave:a[0]||(a[0]=u=>f.value=void 0),onClick:u=>L(l.value),label:f.value!==l.value?l.value:void 0,icon:f.value===l.value?d(C):void 0},null,8,["onMouseover","onClick","label","icon"])]),_:2},1032,["props"])]),_:1},8,["rows"])])])):x("",!0)]}),_:1}))}});export{Le as default};