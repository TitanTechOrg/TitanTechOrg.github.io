import{t as de,d as ue,c as fe,f as k,u as M,a as C,r as h,j as e,b as x,A as me,L as X,e as Y,m as J,$ as O,g as pe,h as he,o as xe,i as be,k as ve,l as ge,n as je,p as Q,q as ee,S as Ce,M as Ne,s as ye,v as we,N as E,O as ke}from"./index-K6nlRrNh.js";import{l as Me}from"./chunk-4HJHOVVR-BdSa9eRx.js";import{R as Pe,$ as _e,p as Se,a as Ie}from"./Combination-Cnbq9zL7.js";import{T as K,$ as Oe,a as $e}from"./chunk-736YWA4T-CIvzYZ3T.js";import{i as Ae}from"./chunk-UWUNWEEL-_YUhgMp8.js";import"./index-Dji9XDD7.js";var Z=de({slots:{base:["flex","z-40","w-full","h-auto","items-center","justify-center","data-[menu-open=true]:border-none"],wrapper:["z-40","flex","px-6","gap-4","w-full","flex-row","relative","flex-nowrap","items-center","justify-between","h-[var(--navbar-height)]"],toggle:["group","flex","items-center","justify-center","w-6","h-full","outline-none","rounded-small","tap-highlight-transparent",...ue],srOnly:["sr-only"],toggleIcon:["w-full","h-full","pointer-events-none","flex","flex-col","items-center","justify-center","text-inherit","group-data-[pressed=true]:opacity-70","transition-opacity","before:content-['']","before:block","before:h-px","before:w-6","before:bg-current","before:transition-transform","before:duration-150","before:-translate-y-1","before:rotate-0","group-data-[open=true]:before:translate-y-px","group-data-[open=true]:before:rotate-45","after:content-['']","after:block","after:h-px","after:w-6","after:bg-current","after:transition-transform","after:duration-150","after:translate-y-1","after:rotate-0","group-data-[open=true]:after:translate-y-0","group-data-[open=true]:after:-rotate-45"],brand:["flex","basis-0","flex-row","flex-grow","flex-nowrap","justify-start","bg-transparent","items-center","no-underline","text-medium","whitespace-nowrap","box-border"],content:["flex","gap-4","h-full","flex-row","flex-nowrap","items-center","data-[justify=start]:justify-start","data-[justify=start]:flex-grow","data-[justify=start]:basis-0","data-[justify=center]:justify-center","data-[justify=end]:justify-end","data-[justify=end]:flex-grow","data-[justify=end]:basis-0"],item:["text-medium","whitespace-nowrap","box-border","list-none","data-[active=true]:font-semibold"],menu:["z-30","px-6","pt-2","fixed","flex","max-w-full","top-[var(--navbar-height)]","inset-x-0","bottom-0","w-screen","flex-col","gap-2","overflow-y-auto"],menuItem:["text-large","data-[active=true]:font-semibold"]},variants:{position:{static:{base:"static"},sticky:{base:"sticky top-0 inset-x-0"}},maxWidth:{sm:{wrapper:"max-w-[640px]"},md:{wrapper:"max-w-[768px]"},lg:{wrapper:"max-w-[1024px]"},xl:{wrapper:"max-w-[1280px]"},"2xl":{wrapper:"max-w-[1536px]"},full:{wrapper:"max-w-full"}},hideOnScroll:{true:{base:["sticky","top-0","inset-x-0"]}},isBordered:{true:{base:["border-b","border-divider"]}},isBlurred:{false:{base:"bg-background",menu:"bg-background"},true:{base:["backdrop-blur-lg","data-[menu-open=true]:backdrop-blur-xl","backdrop-saturate-150","bg-background/70"],menu:["backdrop-blur-xl","backdrop-saturate-150","bg-background/70"]}},disableAnimation:{true:{menu:["hidden","h-[calc(100dvh_-_var(--navbar-height))]","data-[open=true]:flex"]}}},defaultVariants:{maxWidth:"lg",position:"sticky",isBlurred:!0}}),[Re,P]=fe({name:"NavbarContext",strict:!0,errorMessage:"useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />"}),Te={enter:{height:"calc(100vh - var(--navbar-height))",transition:{duration:.3,easings:"easeOut"}},exit:{height:0,transition:{duration:.25,easings:"easeIn"}}},te=k((n,a)=>{var t,o;const{className:r,children:i,portalContainer:s,motionProps:l,style:c,...f}=n,d=M(a),{slots:m,isMenuOpen:p,height:b,disableAnimation:v,classNames:N}=P(),_=C(N==null?void 0:N.menu,r),y=h.useCallback(({children:w})=>e.jsx(Pe,{forwardProps:!0,enabled:p,removeScrollBar:!1,children:w}),[p]),g=v?e.jsx(y,{children:e.jsx("ul",{ref:d,className:(t=m.menu)==null?void 0:t.call(m,{class:_}),"data-open":x(p),style:{"--navbar-height":b},...f,children:i})}):e.jsx(me,{mode:"wait",children:p?e.jsx(X,{features:Y,children:e.jsx(y,{children:e.jsx(J.ul,{ref:d,layoutScroll:!0,animate:"enter",className:(o=m.menu)==null?void 0:o.call(m,{class:_}),"data-open":x(p),exit:"exit",initial:"exit",style:{"--navbar-height":b,...c},variants:Te,...O(l,f),children:i})})}):null});return e.jsx(_e,{portalContainer:s,children:g})});te.displayName="NextUI.NavbarMenu";var ae=te,Be={visible:{y:0,transition:{ease:K.easeOut}},hidden:{y:"-100%",transition:{ease:K.easeIn}}},He=typeof window<"u";function G(n){return He?n?{x:n.scrollLeft,y:n.scrollTop}:{x:window.scrollX,y:window.scrollY}:{x:0,y:0}}var Le=n=>{const{elementRef:a,delay:t=30,callback:o,isEnabled:r}=n,i=h.useRef(r?G(a==null?void 0:a.current):{x:0,y:0}),s=h.useRef(null),l=h.useCallback(()=>{const c=G(a==null?void 0:a.current);typeof o=="function"&&o({prevPos:i.current,currPos:c}),i.current=c,s.current=null},[o,a]);return h.useEffect(()=>{if(!r)return;const c=()=>{t?s.current===null&&(s.current=setTimeout(l,t)):l()},f=(a==null?void 0:a.current)||window;return f.addEventListener("scroll",c),()=>{f.removeEventListener("scroll",c),s.current&&clearTimeout(s.current)}},[a==null?void 0:a.current,t,l,r]),i.current};function Ve(n){var a,t;const o=pe(),[r,i]=he(n,Z.variantKeys),{ref:s,as:l,parentRef:c,height:f="4rem",shouldHideOnScroll:d=!1,disableScrollHandler:m=!1,onScrollPositionChange:p,isMenuOpen:b,isMenuDefaultOpen:v,onMenuOpenChange:N=()=>{},motionProps:_,className:y,classNames:g,...w}=r,B=l||"nav",S=(t=(a=n.disableAnimation)!=null?a:o==null?void 0:o.disableAnimation)!=null?t:!1,j=M(s),I=h.useRef(0),$=h.useRef(0),[A,H]=h.useState(!1),R=h.useCallback(u=>{N(u||!1)},[N]),[L,D]=Oe(b,v??!1,R),F=()=>{if(j.current){const u=j.current.offsetWidth;u!==I.current&&(I.current=u)}};$e({ref:j,onResize:()=>{var u;((u=j.current)==null?void 0:u.offsetWidth)!==I.current&&(F(),D(!1))}}),h.useEffect(()=>{var u;F(),$.current=((u=j.current)==null?void 0:u.offsetHeight)||0},[]);const V=h.useMemo(()=>Z({...i,disableAnimation:S,hideOnScroll:d}),[xe(i),S,d]),ce=C(g==null?void 0:g.base,y);return Le({elementRef:c,isEnabled:d||!m,callback:({prevPos:u,currPos:T})=>{p==null||p(T.y),d&&H(U=>{const z=T.y>u.y&&T.y>$.current;return z!==U?z:U})}}),{Component:B,slots:V,domRef:j,height:f,isHidden:A,disableAnimation:S,shouldHideOnScroll:d,isMenuOpen:L,classNames:g,setIsMenuOpen:D,motionProps:_,getBaseProps:(u={})=>({...O(w,u),"data-hidden":x(A),"data-menu-open":x(L),ref:j,className:V.base({class:C(ce,u==null?void 0:u.className)}),style:{"--navbar-height":f,...w==null?void 0:w.style,...u==null?void 0:u.style}}),getWrapperProps:(u={})=>({...u,"data-menu-open":x(L),className:V.wrapper({class:C(g==null?void 0:g.wrapper,u==null?void 0:u.className)})})}}var se=k((n,a)=>{const{children:t,...o}=n,r=Ve({...o,ref:a}),i=r.Component,[s,l]=Se(t,ae),c=e.jsxs(e.Fragment,{children:[e.jsx("header",{...r.getWrapperProps(),children:s}),l]});return e.jsx(Re,{value:r,children:r.shouldHideOnScroll?e.jsx(X,{features:Y,children:e.jsx(J.nav,{animate:r.isHidden?"hidden":"visible",initial:!1,variants:Be,...O(r.getBaseProps(),r.motionProps),children:c})}):e.jsx(i,{...r.getBaseProps(),children:c})})});se.displayName="NextUI.Navbar";var Ee=se,ne=k((n,a)=>{var t;const{as:o,className:r,children:i,...s}=n,l=o||"div",c=M(a),{slots:f,classNames:d}=P(),m=C(d==null?void 0:d.brand,r);return e.jsx(l,{ref:c,className:(t=f.brand)==null?void 0:t.call(f,{class:m}),...s,children:i})});ne.displayName="NextUI.NavbarBrand";var We=ne,re=k((n,a)=>{var t;const{as:o,className:r,children:i,justify:s="start",...l}=n,c=o||"ul",f=M(a),{slots:d,classNames:m}=P(),p=C(m==null?void 0:m.content,r);return e.jsx(c,{ref:f,className:(t=d.content)==null?void 0:t.call(d,{class:p}),"data-justify":s,...l,children:i})});re.displayName="NextUI.NavbarContent";var W=re,oe=k((n,a)=>{var t;const{as:o,className:r,children:i,isActive:s,...l}=n,c=o||"li",f=M(a),{slots:d,classNames:m}=P(),p=C(m==null?void 0:m.item,r);return e.jsx(c,{ref:f,className:(t=d.item)==null?void 0:t.call(d,{class:p}),"data-active":x(s),...l,children:i})});oe.displayName="NextUI.NavbarItem";var q=oe,le=k((n,a)=>{var t;const{className:o,children:r,isActive:i,...s}=n,l=M(a),{slots:c,isMenuOpen:f,classNames:d}=P(),m=C(d==null?void 0:d.menuItem,o);return e.jsx("li",{ref:l,className:(t=c.menuItem)==null?void 0:t.call(c,{class:m}),"data-active":x(i),"data-open":x(f),...s,children:r})});le.displayName="NextUI.NavbarMenuItem";var De=le;function Fe(n,a,t){const{isSelected:o}=a,{isPressed:r,buttonProps:i}=be({...n,onPress:ve(a.toggle,n.onPress)},t);return{isPressed:r,buttonProps:O(i,{"aria-pressed":o})}}var ie=k((n,a)=>{var t;const{as:o,icon:r,className:i,onChange:s,autoFocus:l,srOnlyText:c,...f}=n,d=o||"button",m=M(a),{slots:p,classNames:b,isMenuOpen:v,setIsMenuOpen:N}=P(),y=Ie({...f,isSelected:v,onChange:R=>{s==null||s(R),N(R)}}),{buttonProps:g,isPressed:w}=Fe(n,y,m),{isFocusVisible:B,focusProps:S}=ge({autoFocus:l}),{isHovered:j,hoverProps:I}=je({}),$=C(b==null?void 0:b.toggle,i),A=h.useMemo(()=>typeof r=="function"?r(v??!1):r||e.jsx("span",{className:p.toggleIcon({class:b==null?void 0:b.toggleIcon})}),[r,v,p.toggleIcon,b==null?void 0:b.toggleIcon]),H=h.useMemo(()=>c||(y.isSelected?"close navigation menu":"open navigation menu"),[c,v]);return e.jsxs(d,{ref:m,className:(t=p.toggle)==null?void 0:t.call(p,{class:$}),"data-focus-visible":x(B),"data-hover":x(j),"data-open":x(v),"data-pressed":x(w),...O(g,S,I,f),children:[e.jsx("span",{className:p.srOnly(),children:H}),A]})});ie.displayName="NextUI.NavbarMenuToggle";var Ue=ie;const ze="/assets/Logo-mAbEiMhI.webp",Ke=()=>{const{darkMode:n,setDarkMode:a}=Q(),[t,o]=h.useState(n);return h.useEffect(()=>{document.documentElement.classList.toggle("dark",t),a(t)},[t,o]),[t,o]};function Ze(){const[n,a]=Ke(),t=h.useCallback(()=>{a(o=>!o)},[a]);return e.jsx(ee,{onClick:t,isIconOnly:!0,variant:"light","aria-label":"Toggle between dark and light mode",children:n?e.jsx(Ce,{}):e.jsx(Ne,{})})}const Ge=({fill:n="currentColor",height:a,width:t,...o})=>e.jsxs("svg",{viewBox:"0 0 241 194",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:[e.jsx("mask",{id:"mask0_1_219",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M240.469 0.958984H-0.00585938V193.918H240.469V0.958984Z",fill:"white"})}),e.jsxs("g",{mask:"url(#mask0_1_219)",children:[e.jsx("path",{d:"M96.1344 193.911C61.1312 193.911 32.6597 178.256 15.9721 149.829C1.19788 124.912 -0.00585938 97.9229 -0.00585938 67.7662C-0.00585938 49.8876 5.37293 34.3215 15.5413 22.7466C24.8861 12.1157 38.1271 5.22907 52.8317 3.35378C70.2858 1.14271 91.9848 0.958984 114.545 0.958984C151.259 0.958984 161.63 1.4088 176.075 2.85328C195.29 4.76026 211.458 11.932 222.824 23.5955C234.368 35.4428 240.469 51.2624 240.469 69.3627V72.9994C240.469 103.885 219.821 129.733 191.046 136.759C188.898 141.827 186.237 146.871 183.089 151.837L183.006 151.964C172.869 167.632 149.042 193.918 103.401 193.918H96.1281L96.1344 193.911Z",fill:"white"}),e.jsx("path",{d:"M174.568 17.9772C160.927 16.6151 151.38 16.1589 114.552 16.1589C90.908 16.1589 70.9008 16.387 54.7644 18.4334C33.3949 21.164 15.2058 37.5285 15.2058 67.7674C15.2058 98.0066 16.796 121.422 29.0741 142.107C42.9425 165.751 66.1302 178.707 96.1412 178.707H103.414C140.242 178.707 160.25 159.156 170.253 143.698C174.574 136.874 177.754 130.058 179.801 123.234C205.947 120.96 225.27 99.3624 225.27 72.9941V69.3577C225.27 40.9432 206.631 21.164 174.574 17.9772H174.568Z",fill:"white"}),e.jsx("path",{d:"M15.1975 67.7674C15.1975 37.5285 33.3866 21.164 54.7559 18.4334C70.8987 16.387 90.906 16.1589 114.544 16.1589C151.372 16.1589 160.919 16.6151 174.559 17.9772C206.617 21.1576 225.255 40.937 225.255 69.3577V72.9941C225.255 99.3687 205.932 120.966 179.786 123.234C177.74 130.058 174.559 136.874 170.238 143.698C160.235 159.156 140.228 178.707 103.4 178.707H96.1264C66.1155 178.707 42.9277 165.751 29.0595 142.107C16.7814 121.422 15.1912 98.4563 15.1912 67.7674",fill:"#202020"}),e.jsx("path",{d:"M32.2469 67.9899C32.2469 97.3168 34.0654 116.184 43.6127 133.689C54.5225 153.924 74.3018 161.653 96.8117 161.653H103.857C133.411 161.653 147.736 147.329 155.693 134.829C159.558 128.462 162.966 121.417 164.784 112.547L166.147 106.864H174.332C192.521 106.864 208.208 92.09 208.208 73.2166V69.8082C208.208 48.6669 195.024 37.5228 172.058 34.7987C159.102 33.6646 151.372 33.2084 114.538 33.2084C89.7602 33.2084 72.0272 33.4364 58.6152 35.4828C39.7483 38.2134 32.2407 48.8951 32.2407 67.9899",fill:"white"}),e.jsx("path",{d:"M166.158 83.6801C166.158 86.4107 168.204 88.4572 171.841 88.4572C183.435 88.4572 189.802 81.8619 189.802 70.9523C189.802 60.0427 183.435 53.2195 171.841 53.2195C168.204 53.2195 166.158 55.2657 166.158 57.9963V83.6866V83.6801Z",fill:"#202020"}),e.jsx("path",{d:"M54.5321 82.3198C54.5321 95.732 62.0332 107.326 71.5807 116.424C77.9478 122.562 87.9515 128.93 94.7685 133.022C96.8147 134.157 98.8611 134.841 101.136 134.841C103.866 134.841 106.134 134.157 107.959 133.022C114.782 128.93 124.779 122.562 130.919 116.424C140.694 107.332 148.195 95.7383 148.195 82.3198C148.195 67.7673 137.286 54.8115 121.599 54.8115C112.28 54.8115 105.912 59.5882 101.136 66.1772C96.8147 59.582 90.2259 54.8115 80.9001 54.8115C64.9855 54.8115 54.5256 67.7673 54.5256 82.3198",fill:"#FF5A16"})]})]}),qe=()=>e.jsx(Me,{isExternal:!0,href:"https://ko-fi.com/silical",target:"_blank",rel:"noopener noreferrer","aria-label":"Link to Ko-fi donation page (opens in a new tab)",children:e.jsxs(ee,{className:"bg-orange-500","aria-label":"KoFi donation button",children:[e.jsx("span",{className:"text-xs text-white",children:"Support me"}),e.jsx(Ge,{className:"h-6 w-6"})]})});function Xe(){const[n,a]=h.useState(!1),t=ye(),{token:o,checkAuth:r}=Q(s=>({token:s.token,checkAuth:s.checkAuth})),i=h.useMemo(()=>{const s=r();return we.filter(l=>s?!0:!l.protected)},[o,r]);return e.jsxs(Ee,{onMenuOpenChange:a,isMenuOpen:n,disableAnimation:!0,classNames:{item:["flex","relative","h-full","items-center","data-[active=true]:after:content-['']","data-[active=true]:after:absolute","data-[active=true]:after:bottom-0","data-[active=true]:after:left-0","data-[active=true]:after:right-0","data-[active=true]:after:h-[2px]","data-[active=true]:after:rounded-[2px]","data-[active=true]:after:bg-primary"],wrapper:["max-w-screen-2xl","px-4"]},isBordered:!0,children:[e.jsxs(W,{children:[e.jsx(Ue,{"aria-label":n?"Close menu":"Open menu",className:"md:hidden"}),e.jsx(We,{children:e.jsxs(E,{to:"/",className:"flex min-w-fit flex-row items-center gap-2 text-foreground",children:[e.jsx("div",{className:"h-10 w-10",children:e.jsx(Ae,{src:ze,className:"rounded"})}),e.jsx("p",{className:"hidden font-bold text-inherit sm:block",children:"TitanTech"})]})})]}),e.jsx(W,{className:"hidden gap-4 md:flex lg:flex",justify:"center",children:i.map(s=>{const l="/"+s.path;return e.jsx(q,{isActive:t.pathname===l,children:e.jsx(E,{to:l,className:t.pathname===l?"text-primary":"text-foreground",children:e.jsx("span",{className:"capitalize",children:s.path})})},`menu-${s.path}`)})}),e.jsx(W,{justify:"end",children:e.jsxs(q,{className:"flex flex-row items-center justify-end gap-1",children:[e.jsx(Ze,{}),e.jsx(qe,{})]})}),e.jsx(ae,{className:"min-h-lvh pb-32",children:i.map(s=>{const l=s.path.replace(/-/g," ");return e.jsx(De,{onClick:()=>a(!1),children:e.jsx(E,{className:`/${s.path}`===t.pathname?"text-primary":"text-foreground",to:`/${s.path}`,children:e.jsx("span",{className:"capitalize",children:l})})},`mobile-menu-${s.path}`)})})]})}function rt(){return e.jsxs(e.Fragment,{children:[e.jsx(Xe,{}),e.jsx("main",{id:"content",className:"flex w-full flex-1 flex-col items-center justify-center",children:e.jsx("div",{className:"w-full max-w-screen-2xl flex-1 p-4",children:e.jsx(ke,{})})})]})}export{rt as default};
