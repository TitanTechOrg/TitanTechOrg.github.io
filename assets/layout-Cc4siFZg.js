const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Dow5QNPs.js","assets/index-CzEEEt2j.js","assets/index-B2Ialv0x.css","assets/index-B70IUAzW.js"])))=>i.map(i=>d[i]);
import{r as p,t as me,d as pe,c as he,f as N,u as k,a as y,j as e,b,A as xe,L as q,m as J,$ as T,_ as Q,e as be,g as ve,o as ge,h as ye,i as we,k as ee,l as te,S as je,M as Ce,n as Ne,p as ke,N as B,O as $e}from"./index-CzEEEt2j.js";import{l as _e}from"./chunk-OPTZHMJX-5OwBxhB1.js";import{$ as K,a as Me,p as Pe}from"./Overlay-fRpmRihU.js";import{T as Z,$ as ae}from"./chunk-736YWA4T-ZX5LjJRn.js";import{$ as Se,a as Oe,b as Ie}from"./useButton-DVc4rAow.js";import{i as Re}from"./chunk-MLPFQTYO-DaHnnu93.js";import"./index-O0bzRyzX.js";function Ae(){return typeof window.ResizeObserver<"u"}function He(t){const{ref:a,box:n,onResize:r}=t;p.useEffect(()=>{let o=a==null?void 0:a.current;if(o)if(Ae()){const l=new window.ResizeObserver(s=>{s.length&&r()});return l.observe(o,{box:n}),()=>{o&&l.unobserve(o)}}else return window.addEventListener("resize",r,!1),()=>{window.removeEventListener("resize",r,!1)}},[r,a,n])}var G=me({slots:{base:["flex","z-40","w-full","h-auto","items-center","justify-center","data-[menu-open=true]:border-none"],wrapper:["z-40","flex","px-6","gap-4","w-full","flex-row","relative","flex-nowrap","items-center","justify-between","h-[var(--navbar-height)]"],toggle:["group","flex","items-center","justify-center","w-6","h-full","outline-none","rounded-small","tap-highlight-transparent",...pe],srOnly:["sr-only"],toggleIcon:["w-full","h-full","pointer-events-none","flex","flex-col","items-center","justify-center","text-inherit","group-data-[pressed=true]:opacity-70","transition-opacity","before:content-['']","before:block","before:h-px","before:w-6","before:bg-current","before:transition-transform","before:duration-150","before:-translate-y-1","before:rotate-0","group-data-[open=true]:before:translate-y-px","group-data-[open=true]:before:rotate-45","after:content-['']","after:block","after:h-px","after:w-6","after:bg-current","after:transition-transform","after:duration-150","after:translate-y-1","after:rotate-0","group-data-[open=true]:after:translate-y-0","group-data-[open=true]:after:-rotate-45"],brand:["flex","basis-0","flex-row","flex-grow","flex-nowrap","justify-start","bg-transparent","items-center","no-underline","text-medium","whitespace-nowrap","box-border"],content:["flex","gap-4","h-full","flex-row","flex-nowrap","items-center","data-[justify=start]:justify-start","data-[justify=start]:flex-grow","data-[justify=start]:basis-0","data-[justify=center]:justify-center","data-[justify=end]:justify-end","data-[justify=end]:flex-grow","data-[justify=end]:basis-0"],item:["text-medium","whitespace-nowrap","box-border","list-none","data-[active=true]:font-semibold"],menu:["z-30","px-6","pt-2","fixed","flex","max-w-full","top-[var(--navbar-height)]","inset-x-0","bottom-0","w-screen","flex-col","gap-2","overflow-y-auto"],menuItem:["text-large","data-[active=true]:font-semibold"]},variants:{position:{static:{base:"static"},sticky:{base:"sticky top-0 inset-x-0"}},maxWidth:{sm:{wrapper:"max-w-[640px]"},md:{wrapper:"max-w-[768px]"},lg:{wrapper:"max-w-[1024px]"},xl:{wrapper:"max-w-[1280px]"},"2xl":{wrapper:"max-w-[1536px]"},full:{wrapper:"max-w-full"}},hideOnScroll:{true:{base:["sticky","top-0","inset-x-0"]}},isBordered:{true:{base:["border-b","border-divider"]}},isBlurred:{false:{base:"bg-background",menu:"bg-background"},true:{base:["backdrop-blur-lg","data-[menu-open=true]:backdrop-blur-xl","backdrop-saturate-150","bg-background/70"],menu:["backdrop-blur-xl","backdrop-saturate-150","bg-background/70"]}},disableAnimation:{true:{menu:["hidden","h-[calc(100dvh_-_var(--navbar-height))]","data-[open=true]:flex"]}}},defaultVariants:{maxWidth:"lg",position:"sticky",isBlurred:!0}});function Ee(t,a,n){const{isSelected:r}=a,{isPressed:o,buttonProps:l}=Se({...t,onPress:Oe(a.toggle,t.onPress)},n);return{isPressed:o,isSelected:r,isDisabled:t.isDisabled||!1,buttonProps:Ie(l,{"aria-pressed":r})}}var[Te,M]=he({name:"NavbarContext",strict:!0,errorMessage:"useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />"}),Le={enter:{height:"calc(100vh - var(--navbar-height))",transition:{duration:.3,easings:"easeOut"}},exit:{height:0,transition:{duration:.25,easings:"easeIn"}}},Ve=()=>Q(()=>import("./index-Dow5QNPs.js"),__vite__mapDeps([0,1,2,3])).then(t=>t.default),ne=N((t,a)=>{var n,r;const{className:o,children:l,portalContainer:s,motionProps:i,style:c,...d}=t,u=k(a),{slots:m,isMenuOpen:h,height:x,disableAnimation:v,classNames:w}=M(),$=y(w==null?void 0:w.menu,o);return v?h?e.jsx(K,{portalContainer:s,children:e.jsx("ul",{ref:u,className:(n=m.menu)==null?void 0:n.call(m,{class:$}),"data-open":b(h),style:{"--navbar-height":typeof x=="number"?`${x}px`:x},...d,children:l})}):null:e.jsx(xe,{mode:"wait",children:h?e.jsx(K,{portalContainer:s,children:e.jsx(q,{features:Ve,children:e.jsx(J.ul,{ref:u,layoutScroll:!0,animate:"enter",className:(r=m.menu)==null?void 0:r.call(m,{class:$}),"data-open":b(h),exit:"exit",initial:"exit",style:{"--navbar-height":typeof x=="number"?`${x}px`:x,...c},variants:Le,...T(i,d),children:l})})}):null})});ne.displayName="HeroUI.NavbarMenu";var se=ne,ze={visible:{y:0,transition:{ease:Z.easeOut}},hidden:{y:"-100%",transition:{ease:Z.easeIn}}},Be=typeof window<"u";function X(t){return Be?t?{x:t.scrollLeft,y:t.scrollTop}:{x:window.scrollX,y:window.scrollY}:{x:0,y:0}}var De=t=>{const{elementRef:a,delay:n=30,callback:r,isEnabled:o}=t,l=p.useRef(o?X(a==null?void 0:a.current):{x:0,y:0}),s=p.useRef(null),i=p.useCallback(()=>{const c=X(a==null?void 0:a.current);typeof r=="function"&&r({prevPos:l.current,currPos:c}),l.current=c,s.current=null},[r,a]);return p.useEffect(()=>{if(!o)return;const c=()=>{n?(s.current&&clearTimeout(s.current),s.current=setTimeout(i,n)):i()},d=(a==null?void 0:a.current)||window;return d.addEventListener("scroll",c),()=>{d.removeEventListener("scroll",c),s.current&&(clearTimeout(s.current),s.current=null)}},[a==null?void 0:a.current,n,i,o]),l.current};function We(t){var a,n;const r=be(),[o,l]=ve(t,G.variantKeys),{ref:s,as:i,parentRef:c,height:d="4rem",shouldHideOnScroll:u=!1,disableScrollHandler:m=!1,shouldBlockScroll:h=!0,onScrollPositionChange:x,isMenuOpen:v,isMenuDefaultOpen:w,onMenuOpenChange:$=()=>{},motionProps:O,className:L,classNames:j,...P}=o,V=i||"nav",S=(n=(a=t.disableAnimation)!=null?a:r==null?void 0:r.disableAnimation)!=null?n:!1,g=k(s),_=p.useRef(0),I=p.useRef(0),[R,A]=p.useState(!1),ue=p.useCallback(f=>{$(f||!1)},[$]),[H,W]=ae(v,w??!1,ue),F=()=>{if(g.current){const f=g.current.offsetWidth;f!==_.current&&(_.current=f)}};Me({isDisabled:!(h&&H)}),He({ref:g,onResize:()=>{var f;const C=(f=g.current)==null?void 0:f.offsetWidth,E=window.innerWidth-document.documentElement.clientWidth;C&&C+E==_.current||C!==_.current&&(F(),W(!1))}}),p.useEffect(()=>{var f;F(),I.current=((f=g.current)==null?void 0:f.offsetHeight)||0},[]);const z=p.useMemo(()=>G({...l,disableAnimation:S,hideOnScroll:u}),[ge(l),S,u]),fe=y(j==null?void 0:j.base,L);return De({elementRef:c,isEnabled:u||!m,callback:({prevPos:f,currPos:C})=>{x==null||x(C.y),u&&A(E=>{const U=C.y>f.y&&C.y>I.current;return U!==E?U:E})}}),{Component:V,slots:z,domRef:g,height:d,isHidden:R,disableAnimation:S,shouldHideOnScroll:u,isMenuOpen:H,classNames:j,setIsMenuOpen:W,motionProps:O,getBaseProps:(f={})=>({...T(P,f),"data-hidden":b(R),"data-menu-open":b(H),ref:g,className:z.base({class:y(fe,f==null?void 0:f.className)}),style:{"--navbar-height":typeof d=="number"?`${d}px`:d,...P==null?void 0:P.style,...f==null?void 0:f.style}}),getWrapperProps:(f={})=>({...f,"data-menu-open":b(H),className:z.wrapper({class:y(j==null?void 0:j.wrapper,f==null?void 0:f.className)})})}}var Fe=()=>Q(()=>import("./index-Dow5QNPs.js"),__vite__mapDeps([0,1,2,3])).then(t=>t.default),re=N((t,a)=>{const{children:n,...r}=t,o=We({...r,ref:a}),l=o.Component,[s,i]=Pe(n,se),c=e.jsxs(e.Fragment,{children:[e.jsx("header",{...o.getWrapperProps(),children:s}),i]});return e.jsx(Te,{value:o,children:o.shouldHideOnScroll?e.jsx(q,{features:Fe,children:e.jsx(J.nav,{animate:o.isHidden?"hidden":"visible",initial:!1,variants:ze,...T(o.getBaseProps(),o.motionProps),children:c})}):e.jsx(l,{...o.getBaseProps(),children:c})})});re.displayName="HeroUI.Navbar";var Ue=re,oe=N((t,a)=>{var n;const{as:r,className:o,children:l,...s}=t,i=r||"div",c=k(a),{slots:d,classNames:u}=M(),m=y(u==null?void 0:u.brand,o);return e.jsx(i,{ref:c,className:(n=d.brand)==null?void 0:n.call(d,{class:m}),...s,children:l})});oe.displayName="HeroUI.NavbarBrand";var Ke=oe,le=N((t,a)=>{var n;const{as:r,className:o,children:l,justify:s="start",...i}=t,c=r||"ul",d=k(a),{slots:u,classNames:m}=M(),h=y(m==null?void 0:m.content,o);return e.jsx(c,{ref:d,className:(n=u.content)==null?void 0:n.call(u,{class:h}),"data-justify":s,...i,children:l})});le.displayName="HeroUI.NavbarContent";var D=le,ie=N((t,a)=>{var n;const{as:r,className:o,children:l,isActive:s,...i}=t,c=r||"li",d=k(a),{slots:u,classNames:m}=M(),h=y(m==null?void 0:m.item,o);return e.jsx(c,{ref:d,className:(n=u.item)==null?void 0:n.call(u,{class:h}),"data-active":b(s),...i,children:l})});ie.displayName="HeroUI.NavbarItem";var Y=ie,ce=N((t,a)=>{var n;const{className:r,children:o,isActive:l,...s}=t,i=k(a),{slots:c,isMenuOpen:d,classNames:u}=M(),m=y(u==null?void 0:u.menuItem,r);return e.jsx("li",{ref:i,className:(n=c.menuItem)==null?void 0:n.call(c,{class:m}),"data-active":b(l),"data-open":b(d),...s,children:o})});ce.displayName="HeroUI.NavbarMenuItem";var Ze=ce;function Ge(t={}){let{isReadOnly:a}=t,[n,r]=ae(t.isSelected,t.defaultSelected||!1,t.onChange);function o(s){a||r(s)}function l(){a||r(!n)}return{isSelected:n,setSelected:o,toggle:l}}var de=N((t,a)=>{var n;const{as:r,icon:o,className:l,onChange:s,autoFocus:i,srOnlyText:c,...d}=t,u=r||"button",m=k(a),{slots:h,classNames:x,isMenuOpen:v,setIsMenuOpen:w}=M(),O=Ge({...d,isSelected:v,onChange:A=>{s==null||s(A),w(A)}}),{buttonProps:L,isPressed:j}=Ee(t,O,m),{isFocusVisible:P,focusProps:V}=ye({autoFocus:i}),{isHovered:S,hoverProps:g}=we({}),_=y(x==null?void 0:x.toggle,l),I=p.useMemo(()=>typeof o=="function"?o(v??!1):o||e.jsx("span",{className:h.toggleIcon({class:x==null?void 0:x.toggleIcon})}),[o,v,h.toggleIcon,x==null?void 0:x.toggleIcon]),R=p.useMemo(()=>c||(O.isSelected?"close navigation menu":"open navigation menu"),[c,v]);return e.jsxs(u,{ref:m,className:(n=h.toggle)==null?void 0:n.call(h,{class:_}),"data-focus-visible":b(P),"data-hover":b(S),"data-open":b(v),"data-pressed":b(j),...T(L,V,g,d),children:[e.jsx("span",{className:h.srOnly(),children:R}),I]})});de.displayName="HeroUI.NavbarMenuToggle";var Xe=de;const Ye="/assets/Logo-mAbEiMhI.webp",qe=()=>{const{darkMode:t,setDarkMode:a}=ee(),[n,r]=p.useState(t);return p.useEffect(()=>{document.documentElement.classList.toggle("dark",n),a(n)},[n,r]),[n,r]};function Je(){const[t,a]=qe(),n=p.useCallback(()=>{a(r=>!r)},[a]);return e.jsx(te,{onPress:n,isIconOnly:!0,variant:"light","aria-label":"Toggle between dark and light mode",children:t?e.jsx(je,{}):e.jsx(Ce,{})})}const Qe=({fill:t="currentColor",height:a,width:n,...r})=>e.jsxs("svg",{viewBox:"0 0 241 194",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[e.jsx("mask",{id:"mask0_1_219",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M240.469 0.958984H-0.00585938V193.918H240.469V0.958984Z",fill:"white"})}),e.jsxs("g",{mask:"url(#mask0_1_219)",children:[e.jsx("path",{d:"M96.1344 193.911C61.1312 193.911 32.6597 178.256 15.9721 149.829C1.19788 124.912 -0.00585938 97.9229 -0.00585938 67.7662C-0.00585938 49.8876 5.37293 34.3215 15.5413 22.7466C24.8861 12.1157 38.1271 5.22907 52.8317 3.35378C70.2858 1.14271 91.9848 0.958984 114.545 0.958984C151.259 0.958984 161.63 1.4088 176.075 2.85328C195.29 4.76026 211.458 11.932 222.824 23.5955C234.368 35.4428 240.469 51.2624 240.469 69.3627V72.9994C240.469 103.885 219.821 129.733 191.046 136.759C188.898 141.827 186.237 146.871 183.089 151.837L183.006 151.964C172.869 167.632 149.042 193.918 103.401 193.918H96.1281L96.1344 193.911Z",fill:"white"}),e.jsx("path",{d:"M174.568 17.9772C160.927 16.6151 151.38 16.1589 114.552 16.1589C90.908 16.1589 70.9008 16.387 54.7644 18.4334C33.3949 21.164 15.2058 37.5285 15.2058 67.7674C15.2058 98.0066 16.796 121.422 29.0741 142.107C42.9425 165.751 66.1302 178.707 96.1412 178.707H103.414C140.242 178.707 160.25 159.156 170.253 143.698C174.574 136.874 177.754 130.058 179.801 123.234C205.947 120.96 225.27 99.3624 225.27 72.9941V69.3577C225.27 40.9432 206.631 21.164 174.574 17.9772H174.568Z",fill:"white"}),e.jsx("path",{d:"M15.1975 67.7674C15.1975 37.5285 33.3866 21.164 54.7559 18.4334C70.8987 16.387 90.906 16.1589 114.544 16.1589C151.372 16.1589 160.919 16.6151 174.559 17.9772C206.617 21.1576 225.255 40.937 225.255 69.3577V72.9941C225.255 99.3687 205.932 120.966 179.786 123.234C177.74 130.058 174.559 136.874 170.238 143.698C160.235 159.156 140.228 178.707 103.4 178.707H96.1264C66.1155 178.707 42.9277 165.751 29.0595 142.107C16.7814 121.422 15.1912 98.4563 15.1912 67.7674",fill:"#202020"}),e.jsx("path",{d:"M32.2469 67.9899C32.2469 97.3168 34.0654 116.184 43.6127 133.689C54.5225 153.924 74.3018 161.653 96.8117 161.653H103.857C133.411 161.653 147.736 147.329 155.693 134.829C159.558 128.462 162.966 121.417 164.784 112.547L166.147 106.864H174.332C192.521 106.864 208.208 92.09 208.208 73.2166V69.8082C208.208 48.6669 195.024 37.5228 172.058 34.7987C159.102 33.6646 151.372 33.2084 114.538 33.2084C89.7602 33.2084 72.0272 33.4364 58.6152 35.4828C39.7483 38.2134 32.2407 48.8951 32.2407 67.9899",fill:"white"}),e.jsx("path",{d:"M166.158 83.6801C166.158 86.4107 168.204 88.4572 171.841 88.4572C183.435 88.4572 189.802 81.8619 189.802 70.9523C189.802 60.0427 183.435 53.2195 171.841 53.2195C168.204 53.2195 166.158 55.2657 166.158 57.9963V83.6866V83.6801Z",fill:"#202020"}),e.jsx("path",{d:"M54.5321 82.3198C54.5321 95.732 62.0332 107.326 71.5807 116.424C77.9478 122.562 87.9515 128.93 94.7685 133.022C96.8147 134.157 98.8611 134.841 101.136 134.841C103.866 134.841 106.134 134.157 107.959 133.022C114.782 128.93 124.779 122.562 130.919 116.424C140.694 107.332 148.195 95.7383 148.195 82.3198C148.195 67.7673 137.286 54.8115 121.599 54.8115C112.28 54.8115 105.912 59.5882 101.136 66.1772C96.8147 59.582 90.2259 54.8115 80.9001 54.8115C64.9855 54.8115 54.5256 67.7673 54.5256 82.3198",fill:"#FF5A16"})]})]}),et=()=>e.jsx(_e,{isExternal:!0,href:"https://ko-fi.com/silical",target:"_blank",rel:"noopener noreferrer","aria-label":"Link to Ko-fi donation page (opens in a new tab)",children:e.jsxs(te,{className:"bg-orange-500","aria-label":"KoFi donation button",children:[e.jsx("span",{className:"text-xs text-white",children:"Support me"}),e.jsx(Qe,{className:"h-6 w-6"})]})});function tt(){const[t,a]=p.useState(!1),n=Ne(),{token:r,checkAuth:o}=ee(s=>({token:s.token,checkAuth:s.checkAuth})),l=p.useMemo(()=>{const s=o();return ke.filter(i=>s?!0:!i.protected)},[r,o]);return e.jsxs(Ue,{onMenuOpenChange:a,isMenuOpen:t,disableAnimation:!0,classNames:{item:["flex","relative","h-full","items-center","data-[active=true]:after:content-['']","data-[active=true]:after:absolute","data-[active=true]:after:bottom-0","data-[active=true]:after:left-0","data-[active=true]:after:right-0","data-[active=true]:after:h-[2px]","data-[active=true]:after:rounded-[2px]","data-[active=true]:after:bg-primary"],wrapper:["max-w-screen-2xl","px-4"]},isBordered:!0,children:[e.jsxs(D,{children:[e.jsx(Xe,{"aria-label":t?"Close menu":"Open menu",className:"md:hidden"}),e.jsx(Ke,{children:e.jsxs(B,{to:"/",className:"flex min-w-fit flex-row items-center gap-2 text-foreground",children:[e.jsx("div",{className:"h-10 w-10",children:e.jsx(Re,{src:Ye,className:"rounded"})}),e.jsx("p",{className:"hidden font-bold text-inherit sm:block",children:"TitanTech"})]})})]}),e.jsx(D,{className:"hidden gap-4 md:flex lg:flex",justify:"center",children:l.map(s=>{const i="/"+s.path;return e.jsx(Y,{isActive:n.pathname===i,children:e.jsx(B,{to:i,className:n.pathname===i?"text-primary":"text-foreground",children:e.jsx("span",{className:"capitalize",children:s.path})})},`menu-${s.path}`)})}),e.jsx(D,{justify:"end",children:e.jsxs(Y,{className:"flex flex-row items-center justify-end gap-1",children:[e.jsx(Je,{}),e.jsx(et,{})]})}),e.jsx(se,{className:"min-h-lvh pb-32",children:l.map(s=>{const i=s.path.replace(/-/g," ");return e.jsx(Ze,{onClick:()=>a(!1),children:e.jsx(B,{className:`/${s.path}`===n.pathname?"text-primary":"text-foreground",to:`/${s.path}`,children:e.jsx("span",{className:"capitalize",children:i})})},`mobile-menu-${s.path}`)})})]})}function ut(){return e.jsxs(e.Fragment,{children:[e.jsx(tt,{}),e.jsx("main",{id:"content",className:"flex w-full flex-1 flex-col items-center justify-center",children:e.jsx("div",{className:"w-full max-w-screen-2xl flex-1 p-4",children:e.jsx($e,{})})})]})}export{ut as default};
