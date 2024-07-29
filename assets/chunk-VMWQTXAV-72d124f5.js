import{l as ie,aq as ce,v as ue,P as pe,a,aB as me,at as be,x as fe,y as ge,n as he,z as xe,A as n,p as E,B as m,E as ye,F as Pe,j as h}from"./index-4b17e137.js";import{d as Ce,m as ve,b as we}from"./utils-48c8d215.js";var W=ie({slots:{base:"group relative max-w-fit inline-flex items-center justify-start cursor-pointer touch-none tap-highlight-transparent",wrapper:["px-1","relative","inline-flex","items-center","justify-start","flex-shrink-0","overflow-hidden","bg-default-200","rounded-full",...ce],thumb:["z-10","flex","items-center","justify-center","bg-white","shadow-small","rounded-full","origin-right"],startContent:"z-0 absolute left-1.5 rtl:right-1.5 rtl:left-[unset] text-current",endContent:"z-0 absolute right-1.5 rtl:left-1.5 rtl:right-[unset] text-default-600",thumbIcon:"text-black",label:"relative text-foreground select-none"},variants:{color:{default:{wrapper:["group-data-[selected=true]:bg-default-400","group-data-[selected=true]:text-default-foreground"]},primary:{wrapper:["group-data-[selected=true]:bg-primary","group-data-[selected=true]:text-primary-foreground"]},secondary:{wrapper:["group-data-[selected=true]:bg-secondary","group-data-[selected=true]:text-secondary-foreground"]},success:{wrapper:["group-data-[selected=true]:bg-success","group-data-[selected=true]:text-success-foreground"]},warning:{wrapper:["group-data-[selected=true]:bg-warning","group-data-[selected=true]:text-warning-foreground"]},danger:{wrapper:["group-data-[selected=true]:bg-danger","data-[selected=true]:text-danger-foreground"]}},size:{sm:{wrapper:"w-10 h-6 mr-2 rtl:ml-2 rtl:mr-[unset]",thumb:["w-4 h-4 text-tiny","group-data-[selected=true]:ml-4 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-4"],endContent:"text-tiny",startContent:"text-tiny",label:"text-small"},md:{wrapper:"w-12 h-7 mr-2 rtl:ml-2 rtl:mr-[unset]",thumb:["w-5 h-5 text-small","group-data-[selected=true]:ml-5 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-5"],endContent:"text-small",startContent:"text-small",label:"text-medium"},lg:{wrapper:"w-14 h-8 mr-2 rtl:ml-2 rtl:mr-[unset]",thumb:["w-6 h-6 text-medium","group-data-[selected=true]:ml-6 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-6"],endContent:"text-medium",startContent:"text-medium",label:"text-large"}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},disableAnimation:{true:{wrapper:"transition-none",thumb:"transition-none"},false:{wrapper:"transition-background",thumb:"transition-all",startContent:["opacity-0","scale-50","transition-transform-opacity","group-data-[selected=true]:scale-100","group-data-[selected=true]:opacity-100"],endContent:["opacity-100","transition-transform-opacity","group-data-[selected=true]:translate-x-3","group-data-[selected=true]:opacity-0"]}}},defaultVariants:{color:"primary",size:"md",isDisabled:!1},compoundVariants:[{disableAnimation:!1,size:"sm",class:{thumb:["group-data-[pressed=true]:w-5","group-data-[selected]:group-data-[pressed]:ml-3"]}},{disableAnimation:!1,size:"md",class:{thumb:["group-data-[pressed=true]:w-6","group-data-[selected]:group-data-[pressed]:ml-4"]}},{disableAnimation:!1,size:"lg",class:{thumb:["group-data-[pressed=true]:w-7","group-data-[selected]:group-data-[pressed]:ml-5"]}}]});function $e(o,b,f){let{labelProps:d,inputProps:i,isSelected:r,isPressed:l,isDisabled:x,isReadOnly:g}=Ce(o,b,f);return{labelProps:d,inputProps:{...i,role:"switch",checked:r},isSelected:r,isPressed:l,isDisabled:x,isReadOnly:g}}function Se(o={}){var b,f;const d=ue(),[i,r]=pe(o,W.variantKeys),{ref:l,as:x,name:g,value:v="",isReadOnly:w=!1,autoFocus:y=!1,startContent:N,endContent:I,defaultSelected:$,isSelected:S,children:c,thumbIcon:k,className:H,classNames:t,onChange:U,onValueChange:z,...P}=i,G=x||"label",A=a.useRef(null),C=a.useRef(null),T=(f=(b=o.disableAnimation)!=null?b:d==null?void 0:d.disableAnimation)!=null?f:!1,D=a.useId(),R=a.useMemo(()=>{const e=P["aria-label"]||typeof c=="string"?c:void 0;return{name:g,value:v,children:c,autoFocus:y,defaultSelected:$,isSelected:S,isDisabled:!!o.isDisabled,isReadOnly:w,"aria-label":e,"aria-labelledby":P["aria-labelledby"]||D,onChange:z}},[v,g,D,c,y,w,S,$,o.isDisabled,P["aria-label"],P["aria-labelledby"],z]),F=me(R);be(()=>{if(!C.current)return;const e=!!C.current.checked;F.setSelected(e)},[C.current]);const{inputProps:u,isPressed:J,isReadOnly:O}=$e(R,F,C),{focusProps:Q,isFocused:V,isFocusVisible:B}=fe({autoFocus:u.autoFocus}),{hoverProps:X,isHovered:L}=ge({isDisabled:u.disabled}),_=R.isDisabled||O,[Y,K]=a.useState(!1),{pressProps:Z}=he({isDisabled:_,onPressStart(e){e.pointerType!=="keyboard"&&K(!0)},onPressEnd(e){e.pointerType!=="keyboard"&&K(!1)}}),M=_?!1:Y||J,p=u.checked,j=u.disabled,s=a.useMemo(()=>W({...r,disableAnimation:T}),[xe(r),T]),ee=n(t==null?void 0:t.base,H),te=e=>({...E(X,Z,P,e),ref:A,className:s.base({class:n(ee,e==null?void 0:e.className)}),"data-disabled":m(j),"data-selected":m(p),"data-readonly":m(O),"data-focus":m(V),"data-focus-visible":m(B),"data-hover":m(L),"data-pressed":m(M)}),ae=a.useCallback((e={})=>({...e,"aria-hidden":!0,className:n(s.wrapper({class:n(t==null?void 0:t.wrapper,e==null?void 0:e.className)}))}),[s,t==null?void 0:t.wrapper]),se=(e={})=>({...E(u,Q,e),ref:ve(C,l),id:u.id,onChange:ye(U,u.onChange)}),re=a.useCallback((e={})=>({...e,className:s.thumb({class:n(t==null?void 0:t.thumb,e==null?void 0:e.className)})}),[s,t==null?void 0:t.thumb]),le=a.useCallback((e={})=>({...e,id:D,className:s.label({class:n(t==null?void 0:t.label,e==null?void 0:e.className)})}),[s,t==null?void 0:t.label,j,p]),ne=a.useCallback((e={includeStateProps:!1})=>E({width:"1em",height:"1em",className:s.thumbIcon({class:n(t==null?void 0:t.thumbIcon)})},e.includeStateProps?{isSelected:p}:{}),[s,t==null?void 0:t.thumbIcon,p]),oe=a.useCallback((e={})=>({width:"1em",height:"1em",...e,className:s.startContent({class:n(t==null?void 0:t.startContent,e==null?void 0:e.className)})}),[s,t==null?void 0:t.startContent,p]),de=a.useCallback((e={})=>({width:"1em",height:"1em",...e,className:s.endContent({class:n(t==null?void 0:t.endContent,e==null?void 0:e.className)})}),[s,t==null?void 0:t.endContent,p]);return{Component:G,slots:s,classNames:t,domRef:A,children:c,thumbIcon:k,startContent:N,endContent:I,isHovered:L,isSelected:p,isPressed:M,isFocused:V,isFocusVisible:B,isDisabled:j,getBaseProps:te,getWrapperProps:ae,getInputProps:se,getLabelProps:le,getThumbProps:re,getThumbIconProps:ne,getStartContentProps:oe,getEndContentProps:de}}var q=Pe((o,b)=>{const{Component:f,children:d,startContent:i,endContent:r,thumbIcon:l,getBaseProps:x,getInputProps:g,getWrapperProps:v,getThumbProps:w,getThumbIconProps:y,getLabelProps:N,getStartContentProps:I,getEndContentProps:$}=Se({...o,ref:b}),S=typeof l=="function"?l(y({includeStateProps:!0})):l&&a.cloneElement(l,y()),c=i&&a.cloneElement(i,I()),k=r&&a.cloneElement(r,$());return h.jsxs(f,{...x(),children:[h.jsx(we,{elementType:"span",children:h.jsx("input",{...g()})}),h.jsxs("span",{...v(),children:[i&&c,h.jsx("span",{...w(),children:l&&S}),r&&k]}),d&&h.jsx("span",{...N(),children:d})]})});q.displayName="NextUI.Switch";var ke=q;export{ke as s};
