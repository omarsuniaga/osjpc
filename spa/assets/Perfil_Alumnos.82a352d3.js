import{h as m,c as F,aw as A,ax as V,y as X,z as O,r as x,a as T,aV as U,o as I,d as Y,E as G,q as H,J,Z as L,S as i,P as o,v as W,aA as Z,R as M,a2 as D,aD as q,Y as K,$ as N,_ as tt,a0 as B,X as et,U as j,a3 as z,aH as at}from"./index.3dea5965.js";import{a as rt,Q,b as it,c as R}from"./QList.61020d59.js";import{_ as st,Q as lt,a as ot}from"./Buscar-Alumnos.27ae10d4.js";import{T as nt}from"./TouchPan.05e27f0d.js";import{u as ct}from"./use-cache.b0833c75.js";import{u as ut}from"./use-quasar.6954c37a.js";import"./use-virtual-scroll.053227a7.js";import"./touch.70a9dd44.js";import"./selection.0ecdad27.js";const dt=[m("g",{transform:"translate(-20,-20)"},[m("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[m("animateTransform",{attributeName:"transform",type:"rotate",from:"90 50 50",to:"0 50 50",dur:"1s",repeatCount:"indefinite"})])]),m("g",{transform:"translate(20,20) rotate(15 50 50)"},[m("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[m("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"90 50 50",dur:"1s",repeatCount:"indefinite"})])])];var ft=F({name:"QSpinnerGears",props:A,setup(h){const{cSize:a,classes:p}=V(h);return()=>m("svg",{class:p.value,width:a.value,height:a.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},dt)}});const E=[["left","center","start","width"],["right","center","end","width"],["top","start","center","height"],["bottom","end","center","height"]];var mt=F({name:"QSlideItem",props:{...X,leftColor:String,rightColor:String,topColor:String,bottomColor:String,onSlide:Function},emits:["action","top","right","bottom","left"],setup(h,{slots:a,emit:p}){const{proxy:_}=H(),{$q:y}=_,$=O(h,y),{getCacheWithFn:C}=ct(),g=x(null);let b,t={},n={},d={};const s=T(()=>y.lang.rtl===!0?{left:"right",right:"left"}:{left:"left",right:"right"}),k=T(()=>"q-slide-item q-item-type overflow-hidden"+($.value===!0?" q-slide-item--dark q-dark":""));function v(){g.value.style.transform="translate(0,0)"}function S(e,f,l){h.onSlide!==void 0&&p("slide",{side:e,ratio:f,isReset:l})}function P(e){const f=g.value;if(e.isFirst)t={dir:null,size:{left:0,right:0,top:0,bottom:0},scale:0},f.classList.add("no-transition"),E.forEach(r=>{if(a[r[0]]!==void 0){const w=d[r[0]];w.style.transform="scale(1)",t.size[r[0]]=w.getBoundingClientRect()[r[3]]}}),t.axis=e.direction==="up"||e.direction==="down"?"Y":"X";else if(e.isFinal){f.classList.remove("no-transition"),t.scale===1?(f.style.transform=`translate${t.axis}(${t.dir*100}%)`,b=setTimeout(()=>{p(t.showing,{reset:v}),p("action",{side:t.showing,reset:v})},230)):(f.style.transform="translate(0,0)",S(t.showing,0,!0));return}else e.direction=t.axis==="X"?e.offset.x<0?"left":"right":e.offset.y<0?"up":"down";if(a.left===void 0&&e.direction===s.value.right||a.right===void 0&&e.direction===s.value.left||a.top===void 0&&e.direction==="down"||a.bottom===void 0&&e.direction==="up"){f.style.transform="translate(0,0)";return}let l,u,c;t.axis==="X"?(u=e.direction==="left"?-1:1,l=u===1?s.value.left:s.value.right,c=e.distance.x):(u=e.direction==="up"?-2:2,l=u===2?"top":"bottom",c=e.distance.y),!(t.dir!==null&&Math.abs(u)!==Math.abs(t.dir))&&(t.dir!==u&&(["left","right","top","bottom"].forEach(r=>{n[r]&&(n[r].style.visibility=l===r?"visible":"hidden")}),t.showing=l,t.dir=u),t.scale=Math.max(0,Math.min(1,(c-40)/t.size[l])),f.style.transform=`translate${t.axis}(${c*u/Math.abs(u)}px)`,d[l].style.transform=`scale(${t.scale})`,S(l,t.scale,!1))}return U(()=>{n={},d={}}),I(()=>{clearTimeout(b)}),Object.assign(_,{reset:v}),()=>{const e=[],f={left:a[s.value.right]!==void 0,right:a[s.value.left]!==void 0,up:a.bottom!==void 0,down:a.top!==void 0},l=Object.keys(f).filter(c=>f[c]===!0);E.forEach(c=>{const r=c[0];a[r]!==void 0&&e.push(m("div",{ref:w=>{n[r]=w},class:`q-slide-item__${r} absolute-full row no-wrap items-${c[1]} justify-${c[2]}`+(h[r+"Color"]!==void 0?` bg-${h[r+"Color"]}`:"")},[m("div",{ref:w=>{d[r]=w}},a[r]())]))});const u=m("div",{key:`${l.length===0?"only-":""} content`,ref:g,class:"q-slide-item__content"},Y(a.default));return l.length===0?e.push(u):e.push(G(u,C("dir#"+l.join(""),()=>{const c={prevent:!0,stop:!0,mouse:!0};return l.forEach(r=>{c[r]=!0}),[[nt,P,void 0,c]]}))),m("div",{class:k.value},e)}}});const ht={class:"q-m-sm flex justify-center"},pt=B("Listado de Alumnos "),gt=B(" Perfil "),vt=["src"],Qt={__name:"Perfil_Alumnos",setup(h){ut(),W("Resultado_Busqueda");let a=x([]),p=x(""),_,y=x("https://placeimg.com/500/300/nature?t="+Math.random());const $=n=>n.length!=0?(a.value=n.map(d=>({...d,avatar:y.value})),a.value):C(),C=async()=>{a.value=await Z().then(n=>n.map(d=>({...d.data(),avatar:y.value})))};J(async()=>{await C()}),I(()=>{clearTimeout(_)});const g=x({left:0,right:0}),b=T(()=>g.value.right>=2?"green-10":"green-"+(3+Math.round(Math.min(3,g.value.right*3)))),t=({side:n,ratio:d,isReset:s})=>{clearTimeout(_),_=setTimeout(()=>{g.value[n]=d},s===!0?200:void 0)};return(n,d)=>(M(),L("div",ht,[i(rt,{bordered:"",separator:"",style:{"max-width":"550px",width:"100%"}},{default:o(()=>[i(Q,{header:""},{default:o(()=>[pt,i(D,{name:"format_list_numbered"})]),_:1}),i(st,{text:q(p),class:"flex justify-center",style:{"min-width":"360px",width:"100%"},onOnFire:$},null,8,["text"]),i(K),(M(!0),L(N,null,tt(q(a),(s,k)=>(M(),L("div",{key:k,class:"items"},[i(mt,{"right-color":q(b),onRight:v=>n.$router.push("/Detalles_Alumnos/"+s.id),onSlide:t},{right:o(()=>[gt]),default:o(()=>[i(it,{class:"flex justify-between row"},{default:o(()=>[i(R,{avatar:""},{default:o(()=>[i(et,null,{loading:o(()=>[i(ft,{color:"white"})]),default:o(()=>[j("img",{src:s.avatar,style:{height:"240px",width:"240px"},draggable:"false"},null,8,vt)]),_:2},1024)]),_:2},1024),i(R,null,{default:o(()=>[i(Q,{class:"text-weight-medium"},{default:o(()=>[j("span",null,z(s.nombre)+" "+z(s.apellido),1)]),_:2},1024),i(Q,{class:"text-small"},{default:o(()=>[B(z(s.instrumento),1)]),_:2},1024),i(Q,null,{default:o(()=>[i(lt,{items:s.grupo,"virtual-scroll-horizontal":""},{default:o(({item:v,index:S})=>[(M(),L("div",{key:S,class:at([v.class,"q-pa-xs"])},[i(ot,{top:"",outline:"",color:"secondary",label:v},null,8,["label"])],2))]),_:2},1032,["items"])]),_:2},1024)]),_:2},1024),i(R,{side:""},{default:o(()=>[i(D,{name:"swipe_left"})]),_:1})]),_:2},1024)]),_:2},1032,["right-color","onRight"])]))),128))]),_:1})]))}};export{Qt as default};
