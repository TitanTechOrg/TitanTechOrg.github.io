import{t as y,e as N,g as j,r as C,o as P,a as c,b as S,f as w,j as r,aO as _}from"./index-CzEEEt2j.js";import{i as A}from"./chunk-MLPFQTYO-DaHnnu93.js";var f=y({slots:{base:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","pointer-events-none","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2","data-[loaded=true]:pointer-events-auto","data-[loaded=true]:overflow-visible","data-[loaded=true]:!bg-transparent","data-[loaded=true]:before:opacity-0 data-[loaded=true]:before:-z-10 data-[loaded=true]:before:animate-none","data-[loaded=true]:after:opacity-0"],content:["opacity-0","group-data-[loaded=true]:opacity-100"]},variants:{disableAnimation:{true:{base:"before:animate-none before:transition-none after:transition-none",content:"transition-none"},false:{base:"transition-background !duration-300",content:"transition-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{}});function z(e){var t,a;const s=N(),[l,i]=j(e,f.variantKeys),{as:p,children:b,isLoaded:v=!1,className:g,classNames:o,...x}=l,h=p||"div",u=(a=(t=e.disableAnimation)!=null?t:s==null?void 0:s.disableAnimation)!=null?a:!1,d=C.useMemo(()=>f({...i,disableAnimation:u}),[P(i),u,b]),k=c(o==null?void 0:o.base,g);return{Component:h,children:b,slots:d,classNames:o,getSkeletonProps:(n={})=>({"data-loaded":S(v),className:d.base({class:c(k,n==null?void 0:n.className)}),...x}),getContentProps:(n={})=>({className:d.content({class:c(o==null?void 0:o.content,n==null?void 0:n.className)})})}}var m=w((e,t)=>{const{Component:a,children:s,getSkeletonProps:l,getContentProps:i}=z({...e});return r.jsx(a,{ref:t,...l(),children:r.jsx("div",{...i(),children:s})})});m.displayName="HeroUI.Skeleton";var V=m;function D({name:e,value:t,readableName:a}){return r.jsxs("div",{title:a,className:"relative h-8 w-8 sm:h-16 sm:w-16",children:[r.jsx(A,{src:_(e),className:"z-0 rounded object-cover"}),r.jsx("span",{className:"absolute bottom-0 right-0 z-10 rounded-br rounded-tl bg-black/50 px-0.5 text-right text-tiny text-white",children:t})]})}export{D as R,V as s};
