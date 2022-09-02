import{c as B,r as P,B as q,C as E,J as Q,h as R,d as V,q as I,s as F,K,aP as O,ab as j,aQ as k}from"./index.2d26860d.js";var J=B({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(n,{slots:C,emit:m}){const S=I(),f=P(null);let u=0;const r=[];function v(e){const o=[],l=typeof e=="boolean"?e:n.noErrorFocus!==!0,h=++u,d=(s,t)=>{m("validation-"+(s===!0?"success":"error"),t)};for(let s=0;s<r.length;s++){const t=r[s],i=t.validate();if(typeof i.then=="function")o.push(i.then(a=>({valid:a,comp:t}),a=>({valid:!1,comp:t,err:a})));else if(i!==!0){if(n.greedy===!1)return d(!1,t),l===!0&&typeof t.focus=="function"&&t.focus(),Promise.resolve(!1);o.push({valid:!1,comp:t})}}return o.length===0?(d(!0),Promise.resolve(!0)):Promise.all(o).then(s=>{const t=s.filter(A=>A.valid!==!0);if(t.length===0)return h===u&&d(!0),!0;const{valid:i,comp:a,err:x}=t[0];return h===u&&(x!==void 0&&console.error(x),d(!1,a),l===!0&&i!==!0&&typeof a.focus=="function"&&a.focus()),!1})}function p(){u++,r.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function b(e){e!==void 0&&F(e);const o=u+1;v().then(l=>{o===u&&l===!0&&(n.onSubmit!==void 0?m("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function y(e){e!==void 0&&F(e),m("reset"),K(()=>{p(),n.autofocus===!0&&n.noResetFocus!==!0&&c()})}function c(){O(()=>{if(f.value===null)return;const e=f.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(f.value.querySelectorAll("[tabindex]"),o=>o.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}j(k,{bindComponent(e){r.push(e)},unbindComponent(e){const o=r.indexOf(e);o>-1&&r.splice(o,1)}});let g=!1;return q(()=>{g=!0}),E(()=>{g===!0&&n.autofocus===!0&&c()}),Q(()=>{n.autofocus===!0&&c()}),Object.assign(S.proxy,{validate:v,resetValidation:p,submit:b,reset:y,focus:c,getValidationComponents:()=>r}),()=>R("form",{class:"q-form",ref:f,onSubmit:b,onReset:y},V(C.default))}});export{J as Q};
