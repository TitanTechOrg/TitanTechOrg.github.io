import{t as N,d as V,j as s,s as F,v as R,w as H,x as z,y as O,z as S,$ as C,B as K,C as U,E as W,e as q,g as G,u as J,h as Q,r as E,o as X,b as P,f as Y}from"./index-CzEEEt2j.js";var I=N({base:["relative inline-flex items-center outline-none tap-highlight-transparent",...V],variants:{size:{sm:"text-small",md:"text-medium",lg:"text-large"},color:{foreground:"text-foreground",primary:"text-primary",secondary:"text-secondary",success:"text-success",warning:"text-warning",danger:"text-danger"},underline:{none:"no-underline",hover:"hover:underline",always:"underline",active:"active:underline",focus:"focus:underline"},isBlock:{true:["px-2","py-1","hover:after:opacity-100","after:content-['']","after:inset-0","after:opacity-0","after:w-full","after:h-full","after:rounded-xl","after:transition-background","after:absolute"],false:"hover:opacity-80 active:opacity-disabled transition-opacity"},isDisabled:{true:"opacity-disabled cursor-default pointer-events-none"},disableAnimation:{true:"after:transition-none transition-none"}},compoundVariants:[{isBlock:!0,color:"foreground",class:"hover:after:bg-foreground/10"},{isBlock:!0,color:"primary",class:"hover:after:bg-primary/20"},{isBlock:!0,color:"secondary",class:"hover:after:bg-secondary/20"},{isBlock:!0,color:"success",class:"hover:after:bg-success/20"},{isBlock:!0,color:"warning",class:"hover:after:bg-warning/20"},{isBlock:!0,color:"danger",class:"hover:after:bg-danger/20"},{underline:["hover","always","active","focus"],class:"underline-offset-4"}],defaultVariants:{color:"primary",size:"md",isBlock:!1,underline:"none",isDisabled:!1}}),Z="flex mx-1 text-current self-center",ee=r=>s.jsxs("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"1em",...r,children:[s.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),s.jsx("path",{d:"M15 3h6v6"}),s.jsx("path",{d:"M10 14L21 3"})]});function re(r,t){let{elementType:n="a",onPress:o,onPressStart:i,onPressEnd:l,onClick:a,role:u,isDisabled:c,...f}=r,b={};n!=="a"&&(b={role:"link",tabIndex:c?void 0:0});let p=F()||R();a&&typeof a=="function"&&u!=="button"&&H("onClick is deprecated, please use onPress instead. See: https://github.com/heroui-inc/heroui/issues/4292","useLink");const m=e=>{p&&(a==null||a(e)),o==null||o(e)};let{focusableProps:k}=z(r,t),{pressProps:d,isPressed:h}=O({onPress:m,onPressStart:i,onPressEnd:l,isDisabled:c,ref:t}),g=S(f,{labelable:!0,isLink:n==="a"}),$=C(k,d),v=K(),y=U(r);return{isPressed:h,linkProps:C(g,y,{...$,...b,"aria-disabled":c||void 0,"aria-current":r["aria-current"],onClick:e=>{var x;(x=d.onClick)==null||x.call(d,e),!p&&a&&a(e),!v.isNative&&e.currentTarget instanceof HTMLAnchorElement&&e.currentTarget.href&&!e.isDefaultPrevented()&&W(e.currentTarget,e)&&r.href&&(e.preventDefault(),v.open(e.currentTarget,e,r.href,r.routerOptions))}})}}function ae(r){var t,n,o,i;const l=q(),[a,u]=G(r,I.variantKeys),{ref:c,as:f,children:b,anchorIcon:p,isExternal:m=!1,showAnchorIcon:k=!1,autoFocus:d=!1,className:h,onPress:g,onPressStart:$,onPressEnd:v,onClick:y,...e}=a,x=f||"a",w=J(c),L=(n=(t=r==null?void 0:r.disableAnimation)!=null?t:l==null?void 0:l.disableAnimation)!=null?n:!1,{linkProps:j}=re({...e,onPress:g,onPressStart:$,onPressEnd:v,onClick:y,isDisabled:r.isDisabled,elementType:`${f}`},w),{isFocused:A,isFocusVisible:B,focusProps:D}=Q({autoFocus:d});m&&(e.rel=(o=e.rel)!=null?o:"noopener noreferrer",e.target=(i=e.target)!=null?i:"_blank");const T=E.useMemo(()=>I({...u,disableAnimation:L,className:h}),[X(u),L,h]),_=E.useCallback(()=>({ref:w,className:T,"data-focus":P(A),"data-disabled":P(r.isDisabled),"data-focus-visible":P(B),...C(D,j,e)}),[T,A,B,D,j,e]);return{Component:x,children:b,anchorIcon:p,showAnchorIcon:k,getLinkProps:_}}var M=Y((r,t)=>{const{Component:n,children:o,showAnchorIcon:i,anchorIcon:l=s.jsx(ee,{className:Z}),getLinkProps:a}=ae({ref:t,...r});return s.jsx(n,{...a(),children:s.jsxs(s.Fragment,{children:[o,i&&l]})})});M.displayName="HeroUI.Link";var te=M;export{te as l};
