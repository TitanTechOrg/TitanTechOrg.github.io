import{t as F,d as R,j as e,x as V,y as H,z as S,$ as j,B as G,C as O,D as q,g as K,h as U,u as W,l as Y,r as _,o as J,b as y,f as Q,P as X,w as I,I as Z,q as ee,E as se}from"./index-DG5YO3Ts.js";var L=F({base:["relative inline-flex items-center outline-none tap-highlight-transparent",...R],variants:{size:{sm:"text-small",md:"text-medium",lg:"text-large"},color:{foreground:"text-foreground",primary:"text-primary",secondary:"text-secondary",success:"text-success",warning:"text-warning",danger:"text-danger"},underline:{none:"no-underline",hover:"hover:underline",always:"underline",active:"active:underline",focus:"focus:underline"},isBlock:{true:["px-2","py-1","hover:after:opacity-100","after:content-['']","after:inset-0","after:opacity-0","after:w-full","after:h-full","after:rounded-xl","after:transition-background","after:absolute"],false:"hover:opacity-80 active:opacity-disabled transition-opacity"},isDisabled:{true:"opacity-disabled cursor-default pointer-events-none"},disableAnimation:{true:"after:transition-none transition-none"}},compoundVariants:[{isBlock:!0,color:"foreground",class:"hover:after:bg-foreground/10"},{isBlock:!0,color:"primary",class:"hover:after:bg-primary/20"},{isBlock:!0,color:"secondary",class:"hover:after:bg-secondary/20"},{isBlock:!0,color:"success",class:"hover:after:bg-success/20"},{isBlock:!0,color:"warning",class:"hover:after:bg-warning/20"},{isBlock:!0,color:"danger",class:"hover:after:bg-danger/20"},{underline:["hover","always","active","focus"],class:"underline-offset-4"}],defaultVariants:{color:"primary",size:"md",isBlock:!1,underline:"none",isDisabled:!1}}),re="flex mx-1 text-current self-center",ae=s=>e.jsxs("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"1em",...s,children:[e.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),e.jsx("path",{d:"M15 3h6v6"}),e.jsx("path",{d:"M10 14L21 3"})]});function te(s,a){let{elementType:n="a",onPress:o,onPressStart:i,onPressEnd:l,onClick:c,isDisabled:d,...x}=s,f={};n!=="a"&&(f={role:"link",tabIndex:d?void 0:0});let{focusableProps:m}=V(s,a),{pressProps:u,isPressed:b}=H({onPress:o,onPressStart:i,onPressEnd:l,isDisabled:d,ref:a}),v=S(x,{labelable:!0}),g=j(m,u),h=G(),k=O(s);return{isPressed:b,linkProps:j(v,k,{...g,...f,"aria-disabled":d||void 0,"aria-current":s["aria-current"],onClick:r=>{var p;(p=u.onClick)===null||p===void 0||p.call(u,r),c&&(c(r),console.warn("onClick is deprecated, please use onPress")),!h.isNative&&r.currentTarget instanceof HTMLAnchorElement&&r.currentTarget.href&&!r.isDefaultPrevented()&&q(r.currentTarget,r)&&s.href&&(r.preventDefault(),h.open(r.currentTarget,r,s.href,s.routerOptions))}})}}function ne(s){var a,n,o,i;const l=K(),[c,d]=U(s,L.variantKeys),{ref:x,as:f,children:m,anchorIcon:u,isExternal:b=!1,showAnchorIcon:v=!1,autoFocus:g=!1,className:h,onPress:k,onPressStart:r,onPressEnd:p,onClick:A,...t}=c,M=f||"a",P=W(x),$=(n=(a=s==null?void 0:s.disableAnimation)!=null?a:l==null?void 0:l.disableAnimation)!=null?n:!1,{linkProps:T}=te({...t,onPress:k,onPressStart:r,onPressEnd:p,onClick:A,isDisabled:s.isDisabled,elementType:`${f}`},P),{isFocused:w,isFocusVisible:N,focusProps:C}=Y({autoFocus:g});b&&(t.rel=(o=t.rel)!=null?o:"noopener noreferrer",t.target=(i=t.target)!=null?i:"_blank");const D=_.useMemo(()=>L({...d,disableAnimation:$,className:h}),[J(d),$,h]),z=_.useCallback(()=>({ref:P,className:D,"data-focus":y(w),"data-disabled":y(s.isDisabled),"data-focus-visible":y(N),...j(C,T,t)}),[D,w,N,C,T,t]);return{Component:M,children:m,anchorIcon:u,showAnchorIcon:v,getLinkProps:z}}var E=Q((s,a)=>{const{Component:n,children:o,showAnchorIcon:i,anchorIcon:l=e.jsx(ae,{className:re}),getLinkProps:c}=ne({ref:a,...s});return e.jsx(n,{...c(),children:e.jsxs(e.Fragment,{children:[o,i&&l]})})});E.displayName="NextUI.Link";var B=E;function ie(){return e.jsx(X,{children:e.jsxs("div",{className:"flex flex-col items-center justify-center gap-8 sm:py-16",children:[e.jsxs("article",{children:[e.jsx("h1",{className:"text-2xl font-semibold",children:"TitanTech"}),e.jsx("p",{className:"text-left",children:"TitanTech is an analytics solution for Tap Titans 2 that aims to provide real-time data and insights to help clan members and leaders optimize their raiding strategy."})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("h1",{className:"text-lg font-medium",children:"Get started"}),e.jsxs("ol",{className:"list-inside list-decimal text-left",children:[e.jsxs("li",{children:["Invite the ",e.jsx(B,{isExternal:!0,showAnchorIcon:!0,href:"https://discord.com/api/oauth2/authorize?client_id=1130160856211128460&permissions=537152576&scope=bot%20applications.commands",target:"_blank",rel:"noopener noreferrer",children:"TitanTech bot"})," to your Discord server"]}),e.jsxs("li",{children:["Type ",e.jsx(I,{children:"/connect_clan <TOKEN>"})]}),e.jsx("li",{children:"Use the link provided by the TitanTech bot to access your Dashboard"})]}),e.jsx(I,{className:"mt-4 text-wrap",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(Z,{className:"h-4 w-4 flex-shrink-0 object-cover sm:mr-4"}),e.jsx("span",{children:"Please note that only (Grand) Master rank can generate a token for your clan"})]})})]}),e.jsxs("div",{className:"flex w-full flex-col items-center justify-center gap-4",children:[e.jsx("h1",{className:"text-lg",children:"Got feedback or questions?"}),e.jsx(ee,{size:"lg",as:B,href:"https://discord.com/invite/FyYR62hHHB",color:"primary",variant:"ghost",target:"_blank",className:"w-fit",startContent:e.jsx(se,{}),children:"Discord"})]})]})})}export{ie as default};
