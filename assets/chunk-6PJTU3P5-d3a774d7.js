import{t as le,au as ne,J as oe,a as s,aE as de,aF as ie,l as ce,m as ue,g as pe,o as me,n,i as j,p,v as be,E as ge,w as h}from"./index-b41bfaf2.js";import{d as fe,b as he}from"./utils-e637daf3.js";var K=le({slots:{base:"group relative max-w-fit inline-flex items-center justify-start cursor-pointer touch-none tap-highlight-transparent",wrapper:["px-1","relative","inline-flex","items-center","justify-start","flex-shrink-0","overflow-hidden","bg-default-200","rounded-full",...ne],thumb:["z-10","flex","items-center","justify-center","bg-white","shadow-small","rounded-full","origin-right"],startContent:"z-0 absolute left-1.5 rtl:right-1.5 rtl:left-[unset] text-current",endContent:"z-0 absolute right-1.5 rtl:left-1.5 rtl:right-[unset] text-default-600",thumbIcon:"text-black",label:"relative text-foreground select-none"},variants:{color:{default:{wrapper:["group-data-[selected=true]:bg-default-400","group-data-[selected=true]:text-default-foreground"]},primary:{wrapper:["group-data-[selected=true]:bg-primary","group-data-[selected=true]:text-primary-foreground"]},secondary:{wrapper:["group-data-[selected=true]:bg-secondary","group-data-[selected=true]:text-secondary-foreground"]},success:{wrapper:["group-data-[selected=true]:bg-success","group-data-[selected=true]:text-success-foreground"]},warning:{wrapper:["group-data-[selected=true]:bg-warning","group-data-[selected=true]:text-warning-foreground"]},danger:{wrapper:["group-data-[selected=true]:bg-danger","data-[selected=true]:text-danger-foreground"]}},size:{sm:{wrapper:"w-10 h-6 mr-2 rtl:ml-2 rtl:mr-[unset]",thumb:["w-4 h-4 text-tiny","group-data-[selected=true]:ml-4 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-4"],endContent:"text-tiny",startContent:"text-tiny",label:"text-small"},md:{wrapper:"w-12 h-7 mr-2 rtl:ml-2 rtl:mr-[unset]",thumb:["w-5 h-5 text-small","group-data-[selected=true]:ml-5 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-5"],endContent:"text-small",startContent:"text-small",label:"text-medium"},lg:{wrapper:"w-14 h-8 mr-2 rtl:ml-2 rtl:mr-[unset]",thumb:["w-6 h-6 text-medium","group-data-[selected=true]:ml-6 rtl:group-data-[selected=true]:ml-0 rtl:group-data-[selected=true]:mr-6"],endContent:"text-medium",startContent:"text-medium",label:"text-large"}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},disableAnimation:{true:{wrapper:"transition-none",thumb:"transition-none"},false:{wrapper:"transition-background",thumb:"transition-all",startContent:["opacity-0","scale-50","transition-transform-opacity","group-data-[selected=true]:scale-100","group-data-[selected=true]:opacity-100"],endContent:["opacity-100","transition-transform-opacity","group-data-[selected=true]:translate-x-3","group-data-[selected=true]:opacity-0"]}}},defaultVariants:{color:"primary",size:"md",isDisabled:!1,disableAnimation:!1},compoundVariants:[{disableAnimation:!1,size:"sm",class:{thumb:["group-data-[pressed=true]:w-5","group-data-[selected]:group-data-[pressed]:ml-3"]}},{disableAnimation:!1,size:"md",class:{thumb:["group-data-[pressed=true]:w-6","group-data-[selected]:group-data-[pressed]:ml-4"]}},{disableAnimation:!1,size:"lg",class:{thumb:["group-data-[pressed=true]:w-7","group-data-[selected]:group-data-[pressed]:ml-5"]}}]});function xe(o,x,m){let{labelProps:b,inputProps:d,isSelected:l,isPressed:r,isDisabled:g,isReadOnly:f}=fe(o,x,m);return{labelProps:b,inputProps:{...d,role:"switch",checked:l},isSelected:l,isPressed:r,isDisabled:g,isReadOnly:f}}function Pe(o={}){const[x,m]=oe(o,K.variantKeys),{ref:b,as:d,name:l,value:r="",isReadOnly:g=!1,autoFocus:f=!1,startContent:C,endContent:v,defaultSelected:P,isSelected:y,children:i,thumbIcon:$,className:S,classNames:t,onChange:N,onValueChange:E,...w}=x,W=d||"label",D=s.useRef(null),z=de(b,D),I=s.useId(),k=s.useMemo(()=>{const e=w["aria-label"]||typeof i=="string"?i:void 0;return{name:l,value:r,children:i,autoFocus:f,defaultSelected:P,isSelected:y,isDisabled:!!o.isDisabled,isReadOnly:g,"aria-label":e,"aria-labelledby":w["aria-labelledby"]||I,onChange:E}},[r,l,I,i,f,g,y,P,o.isDisabled,w["aria-label"],w["aria-labelledby"],E]),H=ie(k),{inputProps:c,isPressed:J,isReadOnly:F}=xe(k,H,D),{focusProps:U,isFocused:T,isFocusVisible:O}=ce({autoFocus:c.autoFocus}),{hoverProps:_,isHovered:A}=ue({isDisabled:c.disabled}),V=k.isDisabled||F,[q,L]=s.useState(!1),{pressProps:G}=pe({isDisabled:V,onPressStart(e){e.pointerType!=="keyboard"&&L(!0)},onPressEnd(e){e.pointerType!=="keyboard"&&L(!1)}}),B=V?!1:q||J,u=c.checked,R=c.disabled,a=s.useMemo(()=>K({...m}),[me(m)]),Q=n(t==null?void 0:t.base,S),X=e=>({...j(_,G,w,e),ref:z,className:a.base({class:n(Q,e==null?void 0:e.className)}),"data-disabled":p(R),"data-selected":p(u),"data-readonly":p(F),"data-focus":p(T),"data-focus-visible":p(O),"data-hover":p(A),"data-pressed":p(B)}),Y=s.useCallback((e={})=>({...e,"aria-hidden":!0,className:n(a.wrapper({class:n(t==null?void 0:t.wrapper,e==null?void 0:e.className)}))}),[a,t==null?void 0:t.wrapper]),Z=(e={})=>({...j(c,U,e),ref:D,id:c.id,onChange:be(N,c.onChange)}),ee=s.useCallback((e={})=>({...e,className:a.thumb({class:n(t==null?void 0:t.thumb,e==null?void 0:e.className)})}),[a,t==null?void 0:t.thumb]),te=s.useCallback((e={})=>({...e,id:I,className:a.label({class:n(t==null?void 0:t.label,e==null?void 0:e.className)})}),[a,t==null?void 0:t.label,R,u]),ae=s.useCallback((e={includeStateProps:!1})=>j({width:"1em",height:"1em",className:a.thumbIcon({class:n(t==null?void 0:t.thumbIcon)})},e.includeStateProps?{isSelected:u}:{}),[a,t==null?void 0:t.thumbIcon,u]),se=s.useCallback((e={})=>({width:"1em",height:"1em",...e,className:a.startContent({class:n(t==null?void 0:t.startContent,e==null?void 0:e.className)})}),[a,t==null?void 0:t.startContent,u]),re=s.useCallback((e={})=>({width:"1em",height:"1em",...e,className:a.endContent({class:n(t==null?void 0:t.endContent,e==null?void 0:e.className)})}),[a,t==null?void 0:t.endContent,u]);return{Component:W,slots:a,classNames:t,domRef:z,children:i,thumbIcon:$,startContent:C,endContent:v,isHovered:A,isSelected:u,isPressed:B,isFocused:T,isFocusVisible:O,isDisabled:R,getBaseProps:X,getWrapperProps:Y,getInputProps:Z,getLabelProps:te,getThumbProps:ee,getThumbIconProps:ae,getStartContentProps:se,getEndContentProps:re}}var M=ge((o,x)=>{const{Component:m,children:b,startContent:d,endContent:l,thumbIcon:r,getBaseProps:g,getInputProps:f,getWrapperProps:C,getThumbProps:v,getThumbIconProps:P,getLabelProps:y,getStartContentProps:i,getEndContentProps:$}=Pe({...o,ref:x}),S=typeof r=="function"?r(P({includeStateProps:!0})):r&&s.cloneElement(r,P()),t=d&&s.cloneElement(d,i()),N=l&&s.cloneElement(l,$());return h.jsxs(m,{...g(),children:[h.jsx(he,{children:h.jsx("input",{...f()})}),h.jsxs("span",{...C(),children:[d&&t,h.jsx("span",{...v(),children:r&&S}),l&&N]}),b&&h.jsx("span",{...y(),children:b})]})});M.displayName="NextUI.Switch";var Ce=M;export{Ce as s};
