import{aJ as b,a as c,c as L,R as j,i as f,as as N,t as T,aE as d,g as y,h as k,j as V,N as H,o as O,E as W,w as _}from"./index-2683d89a.js";function z(e,a){let{id:i,"aria-label":s,"aria-labelledby":l}=e;return i=b(i),l&&s?l=[...new Set([i,...l.trim().split(/\s+/)])].join(" "):l&&(l=l.trim().split(/\s+/).join(" ")),!s&&!l&&a&&(s=a),{id:i,"aria-label":s,"aria-labelledby":l}}function M(e,a,i){let s=c.useRef(a),l=L(()=>{i&&i(s.current)});c.useEffect(()=>{var t;let r=e==null||(t=e.current)===null||t===void 0?void 0:t.form;return r==null||r.addEventListener("reset",l),()=>{r==null||r.removeEventListener("reset",l)}},[e,l])}const v={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function A(e={}){let{style:a,isFocusable:i}=e,[s,l]=c.useState(!1),{focusWithinProps:t}=N({isDisabled:!i,onFocusWithinChange:o=>l(o)}),r=c.useMemo(()=>s?a:a?{...v,...a}:v,[s]);return{visuallyHiddenProps:{...t,style:r}}}function K(e){let{children:a,elementType:i="div",isFocusable:s,style:l,...t}=e,{visuallyHiddenProps:r}=A(e);return j.createElement(i,f(t,r),a)}var P=T({base:["px-2","py-1","h-fit","font-mono","font-normal","inline-block","whitespace-nowrap"],variants:{color:{default:d.flat.default,primary:d.flat.primary,secondary:d.flat.secondary,success:d.flat.success,warning:d.flat.warning,danger:d.flat.danger},size:{sm:"text-small",md:"text-medium",lg:"text-large"},radius:{none:"rounded-none",sm:"rounded-small",md:"rounded-medium",lg:"rounded-large",full:"rounded-full"}},defaultVariants:{color:"default",size:"sm",radius:"sm"}});function U(e,a,i){let{isDisabled:s=!1,isReadOnly:l=!1,value:t,name:r,children:o,"aria-label":n,"aria-labelledby":p,validationState:m="valid",isInvalid:$}=e,x=u=>{u.stopPropagation(),a.setSelected(u.target.checked)},g=o!=null,C=n!=null||p!=null;!g&&!C&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:w,isPressed:S}=y({isDisabled:s}),{pressProps:E,isPressed:D}=y({isDisabled:s||l,onPress(){a.toggle()}}),{focusableProps:F}=k(e,i),R=f(w,F),I=V(e,{labelable:!0});return M(i,a.isSelected,a.setSelected),{labelProps:f(E,{onClick:u=>u.preventDefault()}),inputProps:f(I,{"aria-invalid":$||m==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":l||void 0,onChange:x,disabled:s,...t==null?{}:{value:t},name:r,type:"checkbox",...R}),isSelected:a.isSelected,isPressed:S||D,isDisabled:s,isReadOnly:l,isInvalid:$||m==="invalid"}}function q(e){let{id:a,label:i,"aria-labelledby":s,"aria-label":l,labelElementType:t="label"}=e;a=b(a);let r=b(),o={};i?(s=s?`${r} ${s}`:r,o={id:r,htmlFor:t==="label"?a:void 0}):!s&&!l&&console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");let n=z({id:a,"aria-label":l,"aria-labelledby":s});return{labelProps:o,fieldProps:n}}function B(e){const[a,i]=H(e,P.variantKeys),{as:s,children:l,className:t,...r}=a,o=s||"code",n=c.useMemo(()=>P({...i,className:t}),[O(i),t]);return{Component:o,children:l,getCodeProps:()=>({className:n,...r})}}var h=W((e,a)=>{const{Component:i,children:s,getCodeProps:l}=B({...e});return _.jsx(i,{ref:a,...l(),children:s})});h.displayName="NextUI.Code";var G=h;function Q(e,a){return typeof e=="function"?e(...a):!!e}export{q as $,M as a,K as b,G as c,U as d,A as e,z as f,Q as s};