import{t as U,r as u,g as q,h as G,u as H,o as J,a as C,b as E,f as Q,j as h}from"./index-sHi6hHJ4.js";import{u as X}from"./index-ACL-0hXH.js";var L=U({slots:{wrapper:"relative shadow-black/5",zoomedWrapper:"relative overflow-hidden rounded-inherit",img:"relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",blurredImg:["absolute","z-0","inset-0","w-full","h-full","object-cover","filter","blur-lg","scale-105","saturate-150","opacity-30","translate-y-1"]},variants:{radius:{none:{},sm:{},md:{},lg:{},full:{}},shadow:{none:{wrapper:"shadow-none",img:"shadow-none"},sm:{wrapper:"shadow-small",img:"shadow-small"},md:{wrapper:"shadow-medium",img:"shadow-medium"},lg:{wrapper:"shadow-large",img:"shadow-large"}},isZoomed:{true:{img:["object-cover","transform","hover:scale-125"]}},showSkeleton:{true:{wrapper:["group","relative","overflow-hidden","bg-content3 dark:bg-content2"],img:"opacity-0"}},disableAnimation:{true:{img:"transition-none"},false:{img:"transition-transform-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{radius:"lg",shadow:"none",isZoomed:!1,isBlurred:!1,showSkeleton:!1},compoundVariants:[{showSkeleton:!0,disableAnimation:!1,class:{wrapper:["before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2"]}}],compoundSlots:[{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"none",class:"rounded-none"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"full",class:"rounded-full"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"sm",class:"rounded-small"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"md",class:"rounded-md"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"lg",class:"rounded-large"}]});function Y(p={}){const{loading:m,src:t,srcSet:c,onLoad:o,onError:l,crossOrigin:g,sizes:i,ignoreFallback:s}=p,[f,r]=u.useState("pending");u.useEffect(()=>{r(t?"loading":"pending")},[t]);const n=u.useRef(),b=u.useCallback(()=>{if(!t)return;a();const e=new Image;e.src=t,g&&(e.crossOrigin=g),c&&(e.srcset=c),i&&(e.sizes=i),m&&(e.loading=m),e.onload=d=>{a(),r("loaded"),o==null||o(d)},e.onerror=d=>{a(),r("failed"),l==null||l(d)},n.current=e},[t,g,c,i,o,l,m]),a=()=>{n.current&&(n.current.onload=null,n.current.onerror=null,n.current=null)};return X(()=>{if(!s)return f==="loading"&&b(),()=>{a()}},[f,b,s]),s?"loaded":f}function ee(p){var m,t;const c=q(),[o,l]=G(p,L.variantKeys),{ref:g,as:i,src:s,className:f,classNames:r,loading:n,isBlurred:b,fallbackSrc:a,isLoading:e,disableSkeleton:d=!!a,removeWrapper:A=!1,onError:B,onLoad:Z,srcSet:k,sizes:I,crossOrigin:S,..._}=o,y=Y({src:s,loading:n,onError:B,onLoad:Z,ignoreFallback:!1,srcSet:k,sizes:I,crossOrigin:S}),x=(t=(m=p.disableAnimation)!=null?m:c==null?void 0:c.disableAnimation)!=null?t:!1,z=y==="loaded"&&!e,W=y==="loading"||e,O=p.isZoomed,$=i||"img",N=H(g),{w:F}=u.useMemo(()=>({w:o.width?typeof o.width=="number"?`${o.width}px`:o.width:"fit-content"}),[o==null?void 0:o.width]),j=(!s||!z)&&!!a,P=W&&!d,w=u.useMemo(()=>L({...l,disableAnimation:x,showSkeleton:P}),[J(l),x,P]),M=C(f,r==null?void 0:r.img),V=(v={})=>{const T=C(M,v==null?void 0:v.className);return{src:s,ref:N,"data-loaded":E(z),className:w.img({class:T}),loading:n,srcSet:k,sizes:I,crossOrigin:S,..._}},D=u.useCallback(()=>{const v=j?{backgroundImage:`url(${a})`}:{};return{className:w.wrapper({class:r==null?void 0:r.wrapper}),style:{...v,maxWidth:F}}},[w,j,a,r==null?void 0:r.wrapper]),K=u.useCallback(()=>({src:s,"aria-hidden":E(!0),className:w.blurredImg({class:r==null?void 0:r.blurredImg})}),[w,s,r==null?void 0:r.blurredImg]);return{Component:$,domRef:N,slots:w,classNames:r,isBlurred:b,disableSkeleton:d,fallbackSrc:a,removeWrapper:A,isZoomed:O,isLoading:W,getImgProps:V,getWrapperProps:D,getBlurredImgProps:K}}var R=Q((p,m)=>{const{Component:t,domRef:c,slots:o,classNames:l,isBlurred:g,isZoomed:i,fallbackSrc:s,removeWrapper:f,disableSkeleton:r,getImgProps:n,getWrapperProps:b,getBlurredImgProps:a}=ee({...p,ref:m}),e=h.jsx(t,{ref:c,...n()});if(f)return e;const d=h.jsx("div",{className:o.zoomedWrapper({class:l==null?void 0:l.zoomedWrapper}),children:e});return g?h.jsxs("div",{...b(),children:[i?d:e,u.cloneElement(e,a())]}):i||!r||s?h.jsxs("div",{...b(),children:[" ",i?d:e]}):e});R.displayName="NextUI.Image";var ae=R;export{ae as i};
