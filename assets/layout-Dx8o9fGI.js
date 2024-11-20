import{t as ue,d as de,c as fe,f as k,u as P,a as y,r as p,j as e,b as h,A as me,L as J,e as Q,m as Z,$ as _,g as pe,h as xe,o as he,i as be,k as ve,l as ge,n as Ne,p as ee,q as ye,S as je,M as we,s as Me,v as q,N as D,O as ke}from"./index-BKdCURy3.js";import{R as Pe,$ as Ce,T as G,a as Se,p as Ie,b as Oe}from"./Combination-3EyKEOkx.js";import{$ as _e}from"./useControlledState-BXi3qtb5.js";import{i as $e}from"./chunk-UWUNWEEL-DvPZq2oU.js";import"./index-kc0T2S7P.js";var K=ue({slots:{base:["flex","z-40","w-full","h-auto","items-center","justify-center","data-[menu-open=true]:border-none"],wrapper:["z-40","flex","px-6","gap-4","w-full","flex-row","relative","flex-nowrap","items-center","justify-between","h-[var(--navbar-height)]"],toggle:["group","flex","items-center","justify-center","w-6","h-full","outline-none","rounded-small","tap-highlight-transparent",...de],srOnly:["sr-only"],toggleIcon:["w-full","h-full","pointer-events-none","flex","flex-col","items-center","justify-center","text-inherit","group-data-[pressed=true]:opacity-70","transition-opacity","before:content-['']","before:block","before:h-px","before:w-6","before:bg-current","before:transition-transform","before:duration-150","before:-translate-y-1","before:rotate-0","group-data-[open=true]:before:translate-y-px","group-data-[open=true]:before:rotate-45","after:content-['']","after:block","after:h-px","after:w-6","after:bg-current","after:transition-transform","after:duration-150","after:translate-y-1","after:rotate-0","group-data-[open=true]:after:translate-y-0","group-data-[open=true]:after:-rotate-45"],brand:["flex","basis-0","flex-row","flex-grow","flex-nowrap","justify-start","bg-transparent","items-center","no-underline","text-medium","whitespace-nowrap","box-border"],content:["flex","gap-4","h-full","flex-row","flex-nowrap","items-center","data-[justify=start]:justify-start","data-[justify=start]:flex-grow","data-[justify=start]:basis-0","data-[justify=center]:justify-center","data-[justify=end]:justify-end","data-[justify=end]:flex-grow","data-[justify=end]:basis-0"],item:["text-medium","whitespace-nowrap","box-border","list-none","data-[active=true]:font-semibold"],menu:["z-30","px-6","pt-2","fixed","flex","max-w-full","top-[var(--navbar-height)]","inset-x-0","bottom-0","w-screen","flex-col","gap-2","overflow-y-auto"],menuItem:["text-large","data-[active=true]:font-semibold"]},variants:{position:{static:{base:"static"},sticky:{base:"sticky top-0 inset-x-0"}},maxWidth:{sm:{wrapper:"max-w-[640px]"},md:{wrapper:"max-w-[768px]"},lg:{wrapper:"max-w-[1024px]"},xl:{wrapper:"max-w-[1280px]"},"2xl":{wrapper:"max-w-[1536px]"},full:{wrapper:"max-w-full"}},hideOnScroll:{true:{base:["sticky","top-0","inset-x-0"]}},isBordered:{true:{base:["border-b","border-divider"]}},isBlurred:{false:{base:"bg-background",menu:"bg-background"},true:{base:["backdrop-blur-lg","data-[menu-open=true]:backdrop-blur-xl","backdrop-saturate-150","bg-background/70"],menu:["backdrop-blur-xl","backdrop-saturate-150","bg-background/70"]}},disableAnimation:{true:{menu:["hidden","h-[calc(100dvh_-_var(--navbar-height))]","data-[open=true]:flex"]}}},defaultVariants:{maxWidth:"lg",position:"sticky",isBlurred:!0}}),[Re,C]=fe({name:"NavbarContext",strict:!0,errorMessage:"useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />"}),Ae={enter:{height:"calc(100vh - var(--navbar-height))",transition:{duration:.3,easings:"easeOut"}},exit:{height:0,transition:{duration:.25,easings:"easeIn"}}},te=k((r,a)=>{var t,o;const{className:s,children:i,portalContainer:n,motionProps:l,style:c,...f}=r,u=P(a),{slots:m,isMenuOpen:x,height:b,disableAnimation:v,classNames:j}=C(),S=y(j==null?void 0:j.menu,s),w=p.useCallback(({children:M})=>e.jsx(Pe,{forwardProps:!0,enabled:x,removeScrollBar:!1,children:M}),[x]),g=v?e.jsx(w,{children:e.jsx("ul",{ref:u,className:(t=m.menu)==null?void 0:t.call(m,{class:S}),"data-open":h(x),style:{"--navbar-height":b},...f,children:i})}):e.jsx(me,{mode:"wait",children:x?e.jsx(J,{features:Q,children:e.jsx(w,{children:e.jsx(Z.ul,{ref:u,layoutScroll:!0,animate:"enter",className:(o=m.menu)==null?void 0:o.call(m,{class:S}),"data-open":h(x),exit:"exit",initial:"exit",style:{"--navbar-height":b,...c},variants:Ae,..._(l,f),children:i})})}):null});return e.jsx(Ce,{portalContainer:n,children:g})});te.displayName="NextUI.NavbarMenu";var ae=te,Te={visible:{y:0,transition:{ease:G.easeOut}},hidden:{y:"-100%",transition:{ease:G.easeIn}}},Be=typeof window<"u";function X(r){return Be?r?{x:r.scrollLeft,y:r.scrollTop}:{x:window.scrollX,y:window.scrollY}:{x:0,y:0}}var Ee=r=>{const{elementRef:a,delay:t=30,callback:o,isEnabled:s}=r,i=p.useRef(s?X(a==null?void 0:a.current):{x:0,y:0}),n=p.useRef(null),l=p.useCallback(()=>{const c=X(a==null?void 0:a.current);typeof o=="function"&&o({prevPos:i.current,currPos:c}),i.current=c,n.current=null},[o,a]);return p.useEffect(()=>{if(!s)return;const c=()=>{t?n.current===null&&(n.current=setTimeout(l,t)):l()},f=(a==null?void 0:a.current)||window;return f.addEventListener("scroll",c),()=>{f.removeEventListener("scroll",c),n.current&&clearTimeout(n.current)}},[a==null?void 0:a.current,t,l,s]),i.current};function We(r){var a,t;const o=pe(),[s,i]=xe(r,K.variantKeys),{ref:n,as:l,parentRef:c,height:f="4rem",shouldHideOnScroll:u=!1,disableScrollHandler:m=!1,onScrollPositionChange:x,isMenuOpen:b,isMenuDefaultOpen:v,onMenuOpenChange:j=()=>{},motionProps:S,className:w,classNames:g,...M}=s,B=l||"nav",I=(t=(a=r.disableAnimation)!=null?a:o==null?void 0:o.disableAnimation)!=null?t:!1,N=P(n),O=p.useRef(0),$=p.useRef(0),[R,E]=p.useState(!1),A=p.useCallback(d=>{j(d||!1)},[j]),[W,z]=_e(b,v??!1,A),U=()=>{if(N.current){const d=N.current.offsetWidth;d!==O.current&&(O.current=d)}};Se({ref:N,onResize:()=>{var d;((d=N.current)==null?void 0:d.offsetWidth)!==O.current&&(U(),z(!1))}}),p.useEffect(()=>{var d;U(),$.current=((d=N.current)==null?void 0:d.offsetHeight)||0},[]);const L=p.useMemo(()=>K({...i,disableAnimation:I,hideOnScroll:u}),[he(i),I,u]),ce=y(g==null?void 0:g.base,w);return Ee({elementRef:c,isEnabled:u||!m,callback:({prevPos:d,currPos:T})=>{x==null||x(T.y),u&&E(V=>{const F=T.y>d.y&&T.y>$.current;return F!==V?F:V})}}),{Component:B,slots:L,domRef:N,height:f,isHidden:R,disableAnimation:I,shouldHideOnScroll:u,isMenuOpen:W,classNames:g,setIsMenuOpen:z,motionProps:S,getBaseProps:(d={})=>({..._(M,d),"data-hidden":h(R),"data-menu-open":h(W),ref:N,className:L.base({class:y(ce,d==null?void 0:d.className)}),style:{"--navbar-height":f,...M==null?void 0:M.style,...d==null?void 0:d.style}}),getWrapperProps:(d={})=>({...d,"data-menu-open":h(W),className:L.wrapper({class:y(g==null?void 0:g.wrapper,d==null?void 0:d.className)})})}}var se=k((r,a)=>{const{children:t,...o}=r,s=We({...o,ref:a}),i=s.Component,[n,l]=Ie(t,ae),c=e.jsxs(e.Fragment,{children:[e.jsx("header",{...s.getWrapperProps(),children:n}),l]});return e.jsx(Re,{value:s,children:s.shouldHideOnScroll?e.jsx(J,{features:Q,children:e.jsx(Z.nav,{animate:s.isHidden?"hidden":"visible",initial:!1,variants:Te,..._(s.getBaseProps(),s.motionProps),children:c})}):e.jsx(i,{...s.getBaseProps(),children:c})})});se.displayName="NextUI.Navbar";var Le=se,ne=k((r,a)=>{var t;const{as:o,className:s,children:i,...n}=r,l=o||"div",c=P(a),{slots:f,classNames:u}=C(),m=y(u==null?void 0:u.brand,s);return e.jsx(l,{ref:c,className:(t=f.brand)==null?void 0:t.call(f,{class:m}),...n,children:i})});ne.displayName="NextUI.NavbarBrand";var De=ne,re=k((r,a)=>{var t;const{as:o,className:s,children:i,justify:n="start",...l}=r,c=o||"ul",f=P(a),{slots:u,classNames:m}=C(),x=y(m==null?void 0:m.content,s);return e.jsx(c,{ref:f,className:(t=u.content)==null?void 0:t.call(u,{class:x}),"data-justify":n,...l,children:i})});re.displayName="NextUI.NavbarContent";var H=re,oe=k((r,a)=>{var t;const{as:o,className:s,children:i,isActive:n,...l}=r,c=o||"li",f=P(a),{slots:u,classNames:m}=C(),x=y(m==null?void 0:m.item,s);return e.jsx(c,{ref:f,className:(t=u.item)==null?void 0:t.call(u,{class:x}),"data-active":h(n),...l,children:i})});oe.displayName="NextUI.NavbarItem";var Y=oe,le=k((r,a)=>{var t;const{className:o,children:s,isActive:i,...n}=r,l=P(a),{slots:c,isMenuOpen:f,classNames:u}=C(),m=y(u==null?void 0:u.menuItem,o);return e.jsx("li",{ref:l,className:(t=c.menuItem)==null?void 0:t.call(c,{class:m}),"data-active":h(i),"data-open":h(f),...n,children:s})});le.displayName="NextUI.NavbarMenuItem";var He=le;function ze(r,a,t){const{isSelected:o}=a,{isPressed:s,buttonProps:i}=be({...r,onPress:ve(a.toggle,r.onPress)},t);return{isPressed:s,buttonProps:_(i,{"aria-pressed":o})}}var ie=k((r,a)=>{var t;const{as:o,icon:s,className:i,onChange:n,autoFocus:l,srOnlyText:c,...f}=r,u=o||"button",m=P(a),{slots:x,classNames:b,isMenuOpen:v,setIsMenuOpen:j}=C(),w=Oe({...f,isSelected:v,onChange:A=>{n==null||n(A),j(A)}}),{buttonProps:g,isPressed:M}=ze(r,w,m),{isFocusVisible:B,focusProps:I}=ge({autoFocus:l}),{isHovered:N,hoverProps:O}=Ne({}),$=y(b==null?void 0:b.toggle,i),R=p.useMemo(()=>typeof s=="function"?s(v??!1):s||e.jsx("span",{className:x.toggleIcon({class:b==null?void 0:b.toggleIcon})}),[s,v,x.toggleIcon,b==null?void 0:b.toggleIcon]),E=p.useMemo(()=>c||(w.isSelected?"close navigation menu":"open navigation menu"),[c,v]);return e.jsxs(u,{ref:m,className:(t=x.toggle)==null?void 0:t.call(x,{class:$}),"data-focus-visible":h(B),"data-hover":h(N),"data-open":h(v),"data-pressed":h(M),..._(g,I,O,f),children:[e.jsx("span",{className:x.srOnly(),children:E}),R]})});ie.displayName="NextUI.NavbarMenuToggle";var Ue=ie;const Ve="/assets/Logo-mAbEiMhI.webp",Fe=()=>{const{darkMode:r,setDarkMode:a}=ee(),[t,o]=p.useState(r);return p.useEffect(()=>{document.documentElement.classList.toggle("dark",t),a(t)},[t,o]),[t,o]};function qe(){const[r,a]=Fe(),t=p.useCallback(()=>{a(o=>!o)},[a]);return e.jsx(ye,{onClick:t,isIconOnly:!0,variant:"light","aria-label":"Toggle between dark and light mode",children:r?e.jsx(je,{}):e.jsx(we,{})})}function Ge(){const[r,a]=p.useState(!1),t=Me(),{checkAuth:o}=ee.getState(),[s,i]=p.useState(q);return p.useEffect(()=>{i(q.filter(n=>o()?n:!n.protected))},[o]),e.jsxs(Le,{onMenuOpenChange:a,isMenuOpen:r,disableAnimation:!0,classNames:{item:["flex","relative","h-full","items-center","data-[active=true]:after:content-['']","data-[active=true]:after:absolute","data-[active=true]:after:bottom-0","data-[active=true]:after:left-0","data-[active=true]:after:right-0","data-[active=true]:after:h-[2px]","data-[active=true]:after:rounded-[2px]","data-[active=true]:after:bg-primary"],wrapper:["max-w-screen-2xl"]},isBordered:!0,children:[e.jsxs(H,{children:[e.jsx(Ue,{"aria-label":r?"Close menu":"Open menu",className:"md:hidden"}),e.jsx(De,{children:e.jsxs(D,{to:"/",className:"flex min-w-fit flex-row items-center gap-2 text-foreground",children:[e.jsx("div",{className:"h-10 w-10",children:e.jsx($e,{src:Ve,className:"rounded"})}),e.jsx("p",{className:"font-bold text-inherit",children:"TitanTech"})]})})]}),e.jsx(H,{className:"hidden gap-4 md:flex lg:flex",justify:"center",children:s.map(n=>{const l="/"+n.path;return e.jsx(Y,{isActive:t.pathname===l,children:e.jsx(D,{to:l,className:t.pathname===l?"text-primary":"text-foreground",children:e.jsx("span",{className:"capitalize",children:n.path})})},`menu-${n.path}`)})}),e.jsx(H,{justify:"end",children:e.jsx(Y,{className:"flex flex-row items-center justify-end gap-4",children:e.jsx(qe,{})})}),e.jsx(ae,{className:"min-h-lvh pb-32",children:s.map(n=>{const l=n.path.replace(/-/g," ");return e.jsx(He,{onClick:()=>a(!1),children:e.jsx(D,{className:`/${n.path}`===t.pathname?"text-primary":"text-foreground",to:`/${n.path}`,children:e.jsx("span",{className:"capitalize",children:l})})},`mobile-menu-${n.path}`)})})]})}function tt(){return e.jsxs(e.Fragment,{children:[e.jsx(Ge,{}),e.jsx("main",{id:"content",className:"flex w-full flex-col items-center justify-center",children:e.jsx("div",{className:"w-full max-w-screen-2xl flex-1 p-4",children:e.jsx(ke,{})})})]})}export{tt as default};
