import{aj as B,H as g,T as R,r as d}from"./index-Cho9N5g_.js";var P=(...a)=>{let e=" ";for(const t of a)if(typeof t=="string"&&t.length>0){e=t;break}return e};function Y(a,e,t){let{validationBehavior:r,focus:u}=a;B(()=>{if(r==="native"&&(t!=null&&t.current)){let i=e.realtimeValidation.isInvalid?e.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";t.current.setCustomValidity(i),t.current.hasAttribute("title")||(t.current.title=""),e.realtimeValidation.isInvalid||e.updateValidation(j(t.current))}});let n=g(()=>{e.resetValidation()}),c=g(i=>{var l;e.displayValidation.isInvalid||e.commitValidation();let s=t==null||(l=t.current)===null||l===void 0?void 0:l.form;if(!i.defaultPrevented&&t&&s&&k(s)===t.current){var f;u?u():(f=t.current)===null||f===void 0||f.focus(),R("keyboard")}i.preventDefault()}),v=g(()=>{e.commitValidation()});d.useEffect(()=>{let i=t==null?void 0:t.current;if(!i)return;let l=i.form;return i.addEventListener("invalid",c),i.addEventListener("change",v),l==null||l.addEventListener("reset",n),()=>{i.removeEventListener("invalid",c),i.removeEventListener("change",v),l==null||l.removeEventListener("reset",n)}},[t,c,v,n,r])}function U(a){let e=a.validity;return{badInput:e.badInput,customError:e.customError,patternMismatch:e.patternMismatch,rangeOverflow:e.rangeOverflow,rangeUnderflow:e.rangeUnderflow,stepMismatch:e.stepMismatch,tooLong:e.tooLong,tooShort:e.tooShort,typeMismatch:e.typeMismatch,valueMissing:e.valueMissing,valid:e.valid}}function j(a){return{isInvalid:!a.validity.valid,validationDetails:U(a),validationErrors:a.validationMessage?[a.validationMessage]:[]}}function k(a){for(let e=0;e<a.elements.length;e++){let t=a.elements[e];if(!t.validity.valid)return t}return null}const D={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},A={...D,customError:!0,valid:!1},m={isInvalid:!1,validationDetails:D,validationErrors:[]},F=d.createContext({}),x="__formValidationState"+Date.now();function z(a){if(a[x]){let{realtimeValidation:e,displayValidation:t,updateValidation:r,resetValidation:u,commitValidation:n}=a[x];return{realtimeValidation:e,displayValidation:t,updateValidation:r,resetValidation:u,commitValidation:n}}return Q(a)}function Q(a){let{isInvalid:e,validationState:t,name:r,value:u,builtinValidation:n,validate:c,validationBehavior:v="aria"}=a;t&&(e||(e=t==="invalid"));let i=e!==void 0?{isInvalid:e,validationErrors:[],validationDetails:A}:null,l=d.useMemo(()=>L(_(c,u)),[c,u]);n!=null&&n.validationDetails.valid&&(n=null);let s=d.useContext(F),f=d.useMemo(()=>r?Array.isArray(r)?r.flatMap(o=>I(s[o])):I(s[r]):[],[s,r]),[C,w]=d.useState(s),[M,V]=d.useState(!1);s!==C&&(w(s),V(!1));let b=d.useMemo(()=>L(M?[]:f),[M,f]),S=d.useRef(m),[p,E]=d.useState(m),$=d.useRef(m),O=()=>{if(!T)return;y(!1);let o=l||n||S.current;h(o,$.current)||($.current=o,E(o))},[T,y]=d.useState(!1);return d.useEffect(O),{realtimeValidation:i||b||l||n||m,displayValidation:v==="native"?i||b||p:i||b||l||n||p,updateValidation(o){v==="aria"&&!h(p,o)?E(o):S.current=o},resetValidation(){let o=m;h(o,$.current)||($.current=o,E(o)),v==="native"&&y(!1),V(!0)},commitValidation(){v==="native"&&y(!0),V(!0)}}}function I(a){return a?Array.isArray(a)?a:[a]:[]}function _(a,e){if(typeof a=="function"){let t=a(e);if(t&&typeof t!="boolean")return I(t)}return[]}function L(a){return a.length?{isInvalid:!0,validationErrors:a,validationDetails:A}:null}function h(a,e){return a===e?!0:a&&e&&a.isInvalid===e.isInvalid&&a.validationErrors.length===e.validationErrors.length&&a.validationErrors.every((t,r)=>t===e.validationErrors[r])&&Object.entries(a.validationDetails).every(([t,r])=>e.validationDetails[t]===r)}export{z as $,Y as a,m as b,x as c,P as s};
