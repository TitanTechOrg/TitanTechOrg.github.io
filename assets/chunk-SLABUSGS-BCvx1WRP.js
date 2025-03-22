import{r as i,t as X,j as y,V as Z,$ as ee}from"./index-85g4MTz1.js";import{$ as te}from"./mergeRefs-BpO9bzld.js";var Me=(...e)=>{let t=" ";for(const n of e)if(typeof n=="string"&&n.length>0){t=n;break}return t};function ne(e){const t=i.useRef(null);return i.useMemo(()=>({get current(){return t.current},set current(n){t.current=n,typeof e=="function"?e(n):e&&(e.current=n)}}),[e])}var ae=X({base:"flex flex-col gap-2 items-start"}),Se=e=>y.jsx("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...e,children:y.jsx("path",{d:"M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z",fill:"currentColor"})});const R={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},K={...R,customError:!0,valid:!1},b={isInvalid:!1,validationDetails:R,validationErrors:[]},re=i.createContext({}),T="__formValidationState"+Date.now();function Ie(e){if(e[T]){let{realtimeValidation:t,displayValidation:n,updateValidation:a,resetValidation:l,commitValidation:r}=e[T];return{realtimeValidation:t,displayValidation:n,updateValidation:a,resetValidation:l,commitValidation:r}}return ie(e)}function ie(e){let{isInvalid:t,validationState:n,name:a,value:l,builtinValidation:r,validate:f,validationBehavior:s="aria"}=e;n&&(t||(t=n==="invalid"));let o=t!==void 0?{isInvalid:t,validationErrors:[],validationDetails:K}:null,d=i.useMemo(()=>{if(!f||l==null)return null;let u=oe(f,l);return F(u)},[f,l]);r!=null&&r.validationDetails.valid&&(r=void 0);let c=i.useContext(re),$=i.useMemo(()=>a?Array.isArray(a)?a.flatMap(u=>A(c[u])):A(c[a]):[],[c,a]),[Q,G]=i.useState(c),[k,h]=i.useState(!1);c!==Q&&(G(c),h(!1));let x=i.useMemo(()=>F(k?[]:$),[k,$]),O=i.useRef(b),[L,M]=i.useState(b),E=i.useRef(b),Y=()=>{if(!J)return;S(!1);let u=d||r||O.current;I(u,E.current)||(E.current=u,M(u))},[J,S]=i.useState(!1);return i.useEffect(Y),{realtimeValidation:o||x||d||r||b,displayValidation:s==="native"?o||x||L:o||x||d||r||L,updateValidation(u){s==="aria"&&!I(L,u)?M(u):O.current=u},resetValidation(){let u=b;I(u,E.current)||(E.current=u,M(u)),s==="native"&&S(!1),h(!0)},commitValidation(){s==="native"&&S(!0),h(!0)}}}function A(e){return e?Array.isArray(e)?e:[e]:[]}function oe(e,t){if(typeof e=="function"){let n=e(t);if(n&&typeof n!="boolean")return A(n)}return[]}function F(e){return e.length?{isInvalid:!0,validationErrors:e,validationDetails:K}:null}function I(e,t){return e===t?!0:!!e&&!!t&&e.isInvalid===t.isInvalid&&e.validationErrors.length===t.validationErrors.length&&e.validationErrors.every((n,a)=>n===t.validationErrors[a])&&Object.entries(e.validationDetails).every(([n,a])=>t.validationDetails[n]===a)}const U=typeof document<"u"?Z.useLayoutEffect:()=>{};function C(e){const t=i.useRef(null);return U(()=>{t.current=e},[e]),i.useCallback((...n)=>{const a=t.current;return a==null?void 0:a(...n)},[])}const g=e=>{var t;return(t=e==null?void 0:e.ownerDocument)!==null&&t!==void 0?t:document},D=e=>e&&"window"in e&&e.window===e?e:g(e).defaultView||window;function le(e){var t;return typeof window>"u"||window.navigator==null?!1:((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.brands.some(n=>e.test(n.brand)))||e.test(window.navigator.userAgent)}function de(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function H(e){let t=null;return()=>(t==null&&(t=e()),t)}const ue=H(function(){return de(/^Mac/i)}),se=H(function(){return le(/Android/i)});function fe(e){return e.mozInputSource===0&&e.isTrusted?!0:se()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}let ce=new Set,p=new Map,m=!1,j=!1;function V(e,t){for(let n of ce)n(e,t)}function ve(e){return!(e.metaKey||!ue()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function w(e){m=!0,ve(e)&&V("keyboard",e)}function v(e){(e.type==="mousedown"||e.type==="pointerdown")&&(m=!0,V("pointer",e))}function z(e){fe(e)&&(m=!0)}function N(e){e.target===window||e.target===document||(!m&&!j&&V("virtual",e),m=!1,j=!1)}function W(){m=!1,j=!0}function _(e){if(typeof window>"u"||p.get(D(e)))return;const t=D(e),n=g(e);let a=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){m=!0,a.apply(this,arguments)},n.addEventListener("keydown",w,!0),n.addEventListener("keyup",w,!0),n.addEventListener("click",z,!0),t.addEventListener("focus",N,!0),t.addEventListener("blur",W,!1),typeof PointerEvent<"u"?(n.addEventListener("pointerdown",v,!0),n.addEventListener("pointermove",v,!0),n.addEventListener("pointerup",v,!0)):(n.addEventListener("mousedown",v,!0),n.addEventListener("mousemove",v,!0),n.addEventListener("mouseup",v,!0)),t.addEventListener("beforeunload",()=>{q(e)},{once:!0}),p.set(t,{focus:a})}const q=(e,t)=>{const n=D(e),a=g(e);t&&a.removeEventListener("DOMContentLoaded",t),p.has(n)&&(n.HTMLElement.prototype.focus=p.get(n).focus,a.removeEventListener("keydown",w,!0),a.removeEventListener("keyup",w,!0),a.removeEventListener("click",z,!0),n.removeEventListener("focus",N,!0),n.removeEventListener("blur",W,!1),typeof PointerEvent<"u"?(a.removeEventListener("pointerdown",v,!0),a.removeEventListener("pointermove",v,!0),a.removeEventListener("pointerup",v,!0)):(a.removeEventListener("mousedown",v,!0),a.removeEventListener("mousemove",v,!0),a.removeEventListener("mouseup",v,!0)),p.delete(n))};function $e(e){const t=g(e);let n;return t.readyState!=="loading"?_(e):(n=()=>{_(e)},t.addEventListener("DOMContentLoaded",n)),()=>q(e,n)}typeof document<"u"&&$e();function me(e){V(e,null)}function Ce(e,t,n){let{validationBehavior:a,focus:l}=e;U(()=>{if(a==="native"&&(n!=null&&n.current)&&!n.current.disabled){let o=t.realtimeValidation.isInvalid?t.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";n.current.setCustomValidity(o),n.current.hasAttribute("title")||(n.current.title=""),t.realtimeValidation.isInvalid||t.updateValidation(ye(n.current))}});let r=C(()=>{t.resetValidation()}),f=C(o=>{var d;t.displayValidation.isInvalid||t.commitValidation();let c=n==null||(d=n.current)===null||d===void 0?void 0:d.form;if(!o.defaultPrevented&&n&&c&&pe(c)===n.current){var $;l?l():($=n.current)===null||$===void 0||$.focus(),me("keyboard")}o.preventDefault()}),s=C(()=>{t.commitValidation()});i.useEffect(()=>{let o=n==null?void 0:n.current;if(!o)return;let d=o.form;return o.addEventListener("invalid",f),o.addEventListener("change",s),d==null||d.addEventListener("reset",r),()=>{o.removeEventListener("invalid",f),o.removeEventListener("change",s),d==null||d.removeEventListener("reset",r)}},[n,f,s,r,a])}function be(e){let t=e.validity;return{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing,valid:t.valid}}function ye(e){return{isInvalid:!e.validity.valid,validationDetails:be(e),validationErrors:e.validationMessage?[e.validationMessage]:[]}}function pe(e){for(let t=0;t<e.elements.length;t++){let n=e.elements[t];if(!n.validity.valid)return n}return null}var B=Symbol("default");function Ee(e,t){let n=i.useContext(e);if(t===null)return null;if(n&&typeof n=="object"&&"slots"in n&&n.slots){let a=new Intl.ListFormat().format(Object.keys(n.slots).map(r=>`"${r}"`));if(!t&&!n.slots[B])throw new Error(`A slot prop is required. Valid slot names are ${a}.`);let l=t||B;if(!n.slots[l])throw new Error(`Invalid slot "${t}". Valid slot names are ${a}.`);return n.slots[l]}return n}function we(e,t,n){let a=Ee(n,e.slot)||{},{ref:l,...r}=a,f=ne(i.useMemo(()=>te(t,l),[t,l])),s=ee(r,e);return"style"in r&&r.style&&"style"in e&&e.style&&(typeof r.style=="function"||typeof e.style=="function"?s.style=o=>{let d=typeof r.style=="function"?r.style(o):r.style,c={...o.defaultStyle,...d},$=typeof e.style=="function"?e.style({...o,defaultStyle:c}):e.style;return{...c,...$}}:s.style={...r.style,...e.style}),[s,f]}const ge=i.createContext({});var P=i.createContext(null);i.forwardRef(function(t,n){[t,n]=we(t,n,P);let{validationErrors:a,validationBehavior:l="native",children:r,className:f,...s}=t;const o=i.useMemo(()=>ae({className:f}),[f]);return y.jsx("form",{noValidate:l!=="native",...s,ref:n,className:o,children:y.jsx(P.Provider,{value:{...t,validationBehavior:l},children:y.jsx(ge.Provider,{value:a??{},children:r})})})});export{Ie as $,Se as C,P as F,Ce as a,T as b,b as c,Me as s,Ee as u};
