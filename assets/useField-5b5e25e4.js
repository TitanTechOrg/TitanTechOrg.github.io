import{j as S,aC as R,c as y,S as T,a as d,aQ as C,p as U}from"./index-4b17e137.js";import{$ as F}from"./utils-48c8d215.js";var K=(...a)=>{let e=" ";for(const i of a)if(typeof i=="string"&&i.length>0){e=i;break}return e},W=a=>S.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...a,children:S.jsx("path",{d:"M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z",fill:"currentColor"})});function X(a,e,i){let{validationBehavior:r,focus:c}=a;R(()=>{if(r==="native"&&(i!=null&&i.current)){let t=e.realtimeValidation.isInvalid?e.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";i.current.setCustomValidity(t),i.current.hasAttribute("title")||(i.current.title=""),e.realtimeValidation.isInvalid||e.updateValidation(k(i.current))}});let l=y(()=>{e.resetValidation()}),v=y(t=>{var n;e.displayValidation.isInvalid||e.commitValidation();let u=i==null||(n=i.current)===null||n===void 0?void 0:n.form;if(!t.defaultPrevented&&i&&u&&z(u)===i.current){var f;c?c():(f=i.current)===null||f===void 0||f.focus(),T("keyboard")}t.preventDefault()}),s=y(()=>{e.commitValidation()});d.useEffect(()=>{let t=i==null?void 0:i.current;if(!t)return;let n=t.form;return t.addEventListener("invalid",v),t.addEventListener("change",s),n==null||n.addEventListener("reset",l),()=>{t.removeEventListener("invalid",v),t.removeEventListener("change",s),n==null||n.removeEventListener("reset",l)}},[i,v,s,l,r])}function Q(a){let e=a.validity;return{badInput:e.badInput,customError:e.customError,patternMismatch:e.patternMismatch,rangeOverflow:e.rangeOverflow,rangeUnderflow:e.rangeUnderflow,stepMismatch:e.stepMismatch,tooLong:e.tooLong,tooShort:e.tooShort,typeMismatch:e.typeMismatch,valueMissing:e.valueMissing,valid:e.valid}}function k(a){return{isInvalid:!a.validity.valid,validationDetails:Q(a),validationErrors:a.validationMessage?[a.validationMessage]:[]}}function z(a){for(let e=0;e<a.elements.length;e++){let i=a.elements[e];if(!i.validity.valid)return i}return null}const B={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},D={...B,customError:!0,valid:!1},$={isInvalid:!1,validationDetails:B,validationErrors:[]},_=d.createContext({}),L="__formValidationState"+Date.now();function Z(a){if(a[L]){let{realtimeValidation:e,displayValidation:i,updateValidation:r,resetValidation:c,commitValidation:l}=a[L];return{realtimeValidation:e,displayValidation:i,updateValidation:r,resetValidation:c,commitValidation:l}}return q(a)}function q(a){let{isInvalid:e,validationState:i,name:r,value:c,builtinValidation:l,validate:v,validationBehavior:s="aria"}=a;i&&(e||(e=i==="invalid"));let t=e!==void 0?{isInvalid:e,validationErrors:[],validationDetails:D}:null,n=d.useMemo(()=>A(N(v,c)),[v,c]);l!=null&&l.validationDetails.valid&&(l=null);let u=d.useContext(_),f=d.useMemo(()=>r?Array.isArray(r)?r.flatMap(o=>I(u[o])):I(u[r]):[],[u,r]),[w,P]=d.useState(u),[M,b]=d.useState(!1);u!==w&&(P(u),b(!1));let p=d.useMemo(()=>A(M?[]:f),[M,f]),x=d.useRef($),[V,g]=d.useState($),m=d.useRef($),j=()=>{if(!O)return;E(!1);let o=n||l||x.current;h(o,m.current)||(m.current=o,g(o))},[O,E]=d.useState(!1);return d.useEffect(j),{realtimeValidation:t||p||n||l||$,displayValidation:s==="native"?t||p||V:t||p||n||l||V,updateValidation(o){s==="aria"&&!h(V,o)?g(o):x.current=o},resetValidation(){let o=$;h(o,m.current)||(m.current=o,g(o)),s==="native"&&E(!1),b(!0)},commitValidation(){s==="native"&&E(!0),b(!0)}}}function I(a){return a?Array.isArray(a)?a:[a]:[]}function N(a,e){if(typeof a=="function"){let i=a(e);if(i&&typeof i!="boolean")return I(i)}return[]}function A(a){return a.length?{isInvalid:!0,validationErrors:a,validationDetails:D}:null}function h(a,e){return a===e?!0:a&&e&&a.isInvalid===e.isInvalid&&a.validationErrors.length===e.validationErrors.length&&a.validationErrors.every((i,r)=>i===e.validationErrors[r])&&Object.entries(a.validationDetails).every(([i,r])=>e.validationDetails[i]===r)}function ee(a){let{description:e,errorMessage:i,isInvalid:r,validationState:c}=a,{labelProps:l,fieldProps:v}=F(a),s=C([!!e,!!i,r,c]),t=C([!!e,!!i,r,c]);return v=U(v,{"aria-describedby":[s,t,a["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps:l,fieldProps:v,descriptionProps:{id:s},errorMessageProps:{id:t}}}export{Z as $,W as C,ee as a,X as b,$ as c,L as d,K as s};
