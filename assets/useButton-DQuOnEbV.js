import{V as ue,r as v,W as Ue,aq as ge,ar as He,as as _e}from"./index-B7ShuJRA.js";const ce=typeof document<"u"?ue.useLayoutEffect:()=>{};function A(e){const t=v.useRef(null);return ce(()=>{t.current=e},[e]),v.useCallback((...n)=>{const a=t.current;return a==null?void 0:a(...n)},[])}let be=new Map;function Ne(e,t){if(e===t)return e;let n=be.get(e);if(n)return n.forEach(i=>i(t)),t;let a=be.get(t);return a?(a.forEach(i=>i(e)),e):t}function Ee(...e){return(...t)=>{for(let n of e)typeof n=="function"&&n(...t)}}const h=e=>{var t;return(t=e==null?void 0:e.ownerDocument)!==null&&t!==void 0?t:document},_=e=>e&&"window"in e&&e.window===e?e:h(e).defaultView||window;function N(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let a=e[n];for(let i in a){let c=t[i],u=a[i];typeof c=="function"&&typeof u=="function"&&i[0]==="o"&&i[1]==="n"&&i.charCodeAt(2)>=65&&i.charCodeAt(2)<=90?t[i]=Ee(c,u):(i==="className"||i==="UNSAFE_className")&&typeof c=="string"&&typeof u=="string"?t[i]=Ue(c,u):i==="id"&&c&&u?t.id=Ne(c,u):t[i]=u!==void 0?u:c}}return t}const Ye=new Set(["id"]),Ge=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),Xe=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),Re=/^(data-.*)$/;function We(e,t={}){let{labelable:n,isLink:a,propNames:i}=t,c={};for(const u in e)Object.prototype.hasOwnProperty.call(e,u)&&(Ye.has(u)||n&&Ge.has(u)||a&&Xe.has(u)||i!=null&&i.has(u)||Re.test(u))&&(c[u]=e[u]);return c}function F(e){if(Be())e.focus({preventScroll:!0});else{let t=je(e);e.focus(),Ve(t)}}let j=null;function Be(){if(j==null){j=!1;try{document.createElement("div").focus({get preventScroll(){return j=!0,!0}})}catch{}}return j}function je(e){let t=e.parentNode,n=[],a=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==a;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return a instanceof HTMLElement&&n.push({element:a,scrollTop:a.scrollTop,scrollLeft:a.scrollLeft}),n}function Ve(e){for(let{element:t,scrollTop:n,scrollLeft:a}of e)t.scrollTop=n,t.scrollLeft=a}function Z(e){var t;return typeof window>"u"||window.navigator==null?!1:((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.brands.some(n=>e.test(n.brand)))||e.test(window.navigator.userAgent)}function fe(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function O(e){let t=null;return()=>(t==null&&(t=e()),t)}const G=O(function(){return fe(/^Mac/i)}),ze=O(function(){return fe(/^iPhone/i)}),we=O(function(){return fe(/^iPad/i)||G()&&navigator.maxTouchPoints>1}),Le=O(function(){return ze()||we()}),qe=O(function(){return Z(/AppleWebKit/i)&&!Je()}),Je=O(function(){return Z(/Chrome/i)}),Se=O(function(){return Z(/Android/i)}),Qe=O(function(){return Z(/Firefox/i)});function X(e,t,n=!0){var a,i;let{metaKey:c,ctrlKey:u,altKey:p,shiftKey:d}=t;Qe()&&(!((i=window.event)===null||i===void 0||(a=i.type)===null||a===void 0)&&a.startsWith("key"))&&e.target==="_blank"&&(G()?c=!0:u=!0);let y=qe()&&G()&&!we()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:c,ctrlKey:u,altKey:p,shiftKey:d}):new MouseEvent("click",{metaKey:c,ctrlKey:u,altKey:p,shiftKey:d,bubbles:!0,cancelable:!0});X.isOpening=n,F(e),e.dispatchEvent(y),X.isOpening=!1}X.isOpening=!1;let U=new Map,oe=new Set;function ve(){if(typeof window>"u")return;function e(a){return"propertyName"in a}let t=a=>{if(!e(a)||!a.target)return;let i=U.get(a.target);i||(i=new Set,U.set(a.target,i),a.target.addEventListener("transitioncancel",n,{once:!0})),i.add(a.propertyName)},n=a=>{if(!e(a)||!a.target)return;let i=U.get(a.target);if(i&&(i.delete(a.propertyName),i.size===0&&(a.target.removeEventListener("transitioncancel",n),U.delete(a.target)),U.size===0)){for(let c of oe)c();oe.clear()}};document.body.addEventListener("transitionrun",t),document.body.addEventListener("transitionend",n)}typeof document<"u"&&(document.readyState!=="loading"?ve():document.addEventListener("DOMContentLoaded",ve));function ke(e){requestAnimationFrame(()=>{U.size===0?e():oe.add(e)})}function Ze(){let e=v.useRef(new Map),t=v.useCallback((i,c,u,p)=>{let d=p!=null&&p.once?(...y)=>{e.current.delete(u),u(...y)}:u;e.current.set(u,{type:c,eventTarget:i,fn:d,options:p}),i.addEventListener(c,d,p)},[]),n=v.useCallback((i,c,u,p)=>{var d;let y=((d=e.current.get(u))===null||d===void 0?void 0:d.fn)||u;i.removeEventListener(c,y,p),e.current.delete(u)},[]),a=v.useCallback(()=>{e.current.forEach((i,c)=>{n(i.eventTarget,i.type,c,i.options)})},[n]);return v.useEffect(()=>a,[a]),{addGlobalListener:t,removeGlobalListener:n,removeAllGlobalListeners:a}}function xe(e,t){ce(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}})}function ie(e){return e.mozInputSource===0&&e.isTrusted?!0:Se()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function et(e){return!Se()&&e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"}let H="default",se="",J=new WeakMap;function $e(e){if(Le()){if(H==="default"){const t=h(e);se=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}H="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(J.set(e,e.style.userSelect),e.style.userSelect="none")}function V(e){if(Le()){if(H!=="disabled")return;H="restoring",setTimeout(()=>{ke(()=>{if(H==="restoring"){const t=h(e);t.documentElement.style.webkitUserSelect==="none"&&(t.documentElement.style.webkitUserSelect=se||""),se="",H="default"}})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&J.has(e)){let t=J.get(e);e.style.userSelect==="none"&&(e.style.userSelect=t),e.getAttribute("style")===""&&e.removeAttribute("style"),J.delete(e)}}const Ke=ue.createContext({register:()=>{}});Ke.displayName="PressResponderContext";function tt(e){let t=v.useContext(Ke);if(t){let{register:n,...a}=t;e=N(a,e),n()}return xe(t,e.ref),e}var z=new WeakMap;class q{continuePropagation(){ge(this,z,!1)}get shouldStopPropagation(){return He(this,z)}constructor(t,n,a,i){_e(this,z,{writable:!0,value:void 0}),ge(this,z,!0);var c;let u=(c=i==null?void 0:i.target)!==null&&c!==void 0?c:a.currentTarget;const p=u==null?void 0:u.getBoundingClientRect();let d,y=0,P,D=null;a.clientX!=null&&a.clientY!=null&&(P=a.clientX,D=a.clientY),p&&(P!=null&&D!=null?(d=P-p.left,y=D-p.top):(d=p.width/2,y=p.height/2)),this.type=t,this.pointerType=n,this.target=a.currentTarget,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.x=d,this.y=y}}const ye=Symbol("linkClicked");function rt(e){let{onPress:t,onPressChange:n,onPressStart:a,onPressEnd:i,onPressUp:c,isDisabled:u,isPressed:p,preventFocusOnPress:d,shouldCancelOnPointerExit:y,allowTextSelectionOnPress:P,ref:D,...ee}=tt(e),[te,W]=v.useState(!1),L=v.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:m,removeAllGlobalListeners:K}=Ze(),E=A((r,f)=>{let w=L.current;if(u||w.didFirePressStart)return!1;let l=!0;if(w.isTriggeringEvent=!0,a){let g=new q("pressstart",f,r);a(g),l=g.shouldStopPropagation}return n&&n(!0),w.isTriggeringEvent=!1,w.didFirePressStart=!0,W(!0),l}),$=A((r,f,w=!0)=>{let l=L.current;if(!l.didFirePressStart)return!1;l.ignoreClickAfterPress=!0,l.didFirePressStart=!1,l.isTriggeringEvent=!0;let g=!0;if(i){let o=new q("pressend",f,r);i(o),g=o.shouldStopPropagation}if(n&&n(!1),W(!1),t&&w&&!u){let o=new q("press",f,r);t(o),g&&(g=o.shouldStopPropagation)}return l.isTriggeringEvent=!1,g}),M=A((r,f)=>{let w=L.current;if(u)return!1;if(c){w.isTriggeringEvent=!0;let l=new q("pressup",f,r);return c(l),w.isTriggeringEvent=!1,l.shouldStopPropagation}return!0}),S=A(r=>{let f=L.current;f.isPressed&&f.target&&(f.isOverTarget&&f.pointerType!=null&&$(x(f.target,r),f.pointerType,!1),f.isPressed=!1,f.isOverTarget=!1,f.activePointerId=null,f.pointerType=null,K(),P||V(f.target))}),B=A(r=>{y&&S(r)}),Ae=v.useMemo(()=>{let r=L.current,f={onKeyDown(l){if(re(l.nativeEvent,l.currentTarget)&&l.currentTarget.contains(l.target)){var g;Te(l.target,l.key)&&l.preventDefault();let o=!0;if(!r.isPressed&&!l.repeat){r.target=l.currentTarget,r.isPressed=!0,o=E(l,"keyboard");let s=l.currentTarget,b=k=>{re(k,s)&&!k.repeat&&s.contains(k.target)&&r.target&&M(x(r.target,k),"keyboard")};m(h(l.currentTarget),"keyup",Ee(b,w),!0)}o&&l.stopPropagation(),l.metaKey&&G()&&((g=r.metaKeyEvents)===null||g===void 0||g.set(l.key,l.nativeEvent))}else l.key==="Meta"&&(r.metaKeyEvents=new Map)},onClick(l){if(!(l&&!l.currentTarget.contains(l.target))&&l&&l.button===0&&!r.isTriggeringEvent&&!X.isOpening){let g=!0;if(u&&l.preventDefault(),!r.ignoreClickAfterPress&&!r.ignoreEmulatedMouseEvents&&!r.isPressed&&(r.pointerType==="virtual"||ie(l.nativeEvent))){!u&&!d&&F(l.currentTarget);let o=E(l,"virtual"),s=M(l,"virtual"),b=$(l,"virtual");g=o&&s&&b}r.ignoreEmulatedMouseEvents=!1,r.ignoreClickAfterPress=!1,g&&l.stopPropagation()}}},w=l=>{var g;if(r.isPressed&&r.target&&re(l,r.target)){var o;Te(l.target,l.key)&&l.preventDefault();let b=l.target;$(x(r.target,l),"keyboard",r.target.contains(b)),K(),l.key!=="Enter"&&de(r.target)&&r.target.contains(b)&&!l[ye]&&(l[ye]=!0,X(r.target,l,!1)),r.isPressed=!1,(o=r.metaKeyEvents)===null||o===void 0||o.delete(l.key)}else if(l.key==="Meta"&&(!((g=r.metaKeyEvents)===null||g===void 0)&&g.size)){var s;let b=r.metaKeyEvents;r.metaKeyEvents=void 0;for(let k of b.values())(s=r.target)===null||s===void 0||s.dispatchEvent(new KeyboardEvent("keyup",k))}};if(typeof PointerEvent<"u"){f.onPointerDown=s=>{if(s.button!==0||!s.currentTarget.contains(s.target))return;if(et(s.nativeEvent)){r.pointerType="virtual";return}ae(s.currentTarget)&&s.preventDefault(),r.pointerType=s.pointerType;let b=!0;if(!r.isPressed){r.isPressed=!0,r.isOverTarget=!0,r.activePointerId=s.pointerId,r.target=s.currentTarget,!u&&!d&&F(s.currentTarget),P||$e(r.target),b=E(s,r.pointerType);let k=s.target;"releasePointerCapture"in k&&k.releasePointerCapture(s.pointerId),m(h(s.currentTarget),"pointerup",l,!1),m(h(s.currentTarget),"pointercancel",o,!1)}b&&s.stopPropagation()},f.onMouseDown=s=>{s.currentTarget.contains(s.target)&&s.button===0&&(ae(s.currentTarget)&&s.preventDefault(),s.stopPropagation())},f.onPointerUp=s=>{!s.currentTarget.contains(s.target)||r.pointerType==="virtual"||s.button===0&&M(s,r.pointerType||s.pointerType)},f.onPointerEnter=s=>{s.pointerId===r.activePointerId&&r.target&&!r.isOverTarget&&r.pointerType!=null&&(r.isOverTarget=!0,E(x(r.target,s),r.pointerType))},f.onPointerLeave=s=>{s.pointerId===r.activePointerId&&r.target&&r.isOverTarget&&r.pointerType!=null&&(r.isOverTarget=!1,$(x(r.target,s),r.pointerType,!1),B(s))};let l=s=>{s.pointerId===r.activePointerId&&r.isPressed&&s.button===0&&r.target&&(r.target.contains(s.target)&&r.pointerType!=null?$(x(r.target,s),r.pointerType):r.isOverTarget&&r.pointerType!=null&&$(x(r.target,s),r.pointerType,!1),r.isPressed=!1,r.isOverTarget=!1,r.activePointerId=null,r.pointerType=null,K(),P||V(r.target),"ontouchend"in r.target&&s.pointerType!=="mouse"&&m(r.target,"touchend",g,{once:!0}))},g=s=>{Me(s.currentTarget)&&s.preventDefault()},o=s=>{S(s)};f.onDragStart=s=>{s.currentTarget.contains(s.target)&&S(s)}}else{f.onMouseDown=o=>{if(o.button!==0||!o.currentTarget.contains(o.target))return;if(ae(o.currentTarget)&&o.preventDefault(),r.ignoreEmulatedMouseEvents){o.stopPropagation();return}r.isPressed=!0,r.isOverTarget=!0,r.target=o.currentTarget,r.pointerType=ie(o.nativeEvent)?"virtual":"mouse",!u&&!d&&F(o.currentTarget),E(o,r.pointerType)&&o.stopPropagation(),m(h(o.currentTarget),"mouseup",l,!1)},f.onMouseEnter=o=>{if(!o.currentTarget.contains(o.target))return;let s=!0;r.isPressed&&!r.ignoreEmulatedMouseEvents&&r.pointerType!=null&&(r.isOverTarget=!0,s=E(o,r.pointerType)),s&&o.stopPropagation()},f.onMouseLeave=o=>{if(!o.currentTarget.contains(o.target))return;let s=!0;r.isPressed&&!r.ignoreEmulatedMouseEvents&&r.pointerType!=null&&(r.isOverTarget=!1,s=$(o,r.pointerType,!1),B(o)),s&&o.stopPropagation()},f.onMouseUp=o=>{o.currentTarget.contains(o.target)&&!r.ignoreEmulatedMouseEvents&&o.button===0&&M(o,r.pointerType||"mouse")};let l=o=>{if(o.button===0){if(r.isPressed=!1,K(),r.ignoreEmulatedMouseEvents){r.ignoreEmulatedMouseEvents=!1;return}r.target&&ne(o,r.target)&&r.pointerType!=null?$(x(r.target,o),r.pointerType):r.target&&r.isOverTarget&&r.pointerType!=null&&$(x(r.target,o),r.pointerType,!1),r.isOverTarget=!1}};f.onTouchStart=o=>{if(!o.currentTarget.contains(o.target))return;let s=nt(o.nativeEvent);if(!s)return;r.activePointerId=s.identifier,r.ignoreEmulatedMouseEvents=!0,r.isOverTarget=!0,r.isPressed=!0,r.target=o.currentTarget,r.pointerType="touch",!u&&!d&&F(o.currentTarget),P||$e(r.target),E(C(r.target,o),r.pointerType)&&o.stopPropagation(),m(_(o.currentTarget),"scroll",g,!0)},f.onTouchMove=o=>{if(!o.currentTarget.contains(o.target))return;if(!r.isPressed){o.stopPropagation();return}let s=Pe(o.nativeEvent,r.activePointerId),b=!0;s&&ne(s,o.currentTarget)?!r.isOverTarget&&r.pointerType!=null&&(r.isOverTarget=!0,b=E(C(r.target,o),r.pointerType)):r.isOverTarget&&r.pointerType!=null&&(r.isOverTarget=!1,b=$(C(r.target,o),r.pointerType,!1),B(C(r.target,o))),b&&o.stopPropagation()},f.onTouchEnd=o=>{if(!o.currentTarget.contains(o.target))return;if(!r.isPressed){o.stopPropagation();return}let s=Pe(o.nativeEvent,r.activePointerId),b=!0;s&&ne(s,o.currentTarget)&&r.pointerType!=null?(M(C(r.target,o),r.pointerType),b=$(C(r.target,o),r.pointerType)):r.isOverTarget&&r.pointerType!=null&&(b=$(C(r.target,o),r.pointerType,!1)),b&&o.stopPropagation(),r.isPressed=!1,r.activePointerId=null,r.isOverTarget=!1,r.ignoreEmulatedMouseEvents=!0,r.target&&!P&&V(r.target),K()},f.onTouchCancel=o=>{o.currentTarget.contains(o.target)&&(o.stopPropagation(),r.isPressed&&S(C(r.target,o)))};let g=o=>{r.isPressed&&o.target.contains(r.target)&&S({currentTarget:r.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};f.onDragStart=o=>{o.currentTarget.contains(o.target)&&S(o)}}return f},[m,u,d,K,P,S,B,$,E,M]);return v.useEffect(()=>()=>{var r;P||V((r=L.current.target)!==null&&r!==void 0?r:void 0)},[P]),{isPressed:p||te,pressProps:N(ee,Ae)}}function de(e){return e.tagName==="A"&&e.hasAttribute("href")}function re(e,t){const{key:n,code:a}=e,i=t,c=i.getAttribute("role");return(n==="Enter"||n===" "||n==="Spacebar"||a==="Space")&&!(i instanceof _(i).HTMLInputElement&&!Ce(i,n)||i instanceof _(i).HTMLTextAreaElement||i.isContentEditable)&&!((c==="link"||!c&&de(i))&&n!=="Enter")}function nt(e){const{targetTouches:t}=e;return t.length>0?t[0]:null}function Pe(e,t){const n=e.changedTouches;for(let a=0;a<n.length;a++){const i=n[a];if(i.identifier===t)return i}return null}function C(e,t){let n=0,a=0;return t.targetTouches&&t.targetTouches.length===1&&(n=t.targetTouches[0].clientX,a=t.targetTouches[0].clientY),{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:n,clientY:a}}function x(e,t){let n=t.clientX,a=t.clientY;return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:n,clientY:a}}function at(e){let t=0,n=0;return e.width!==void 0?t=e.width/2:e.radiusX!==void 0&&(t=e.radiusX),e.height!==void 0?n=e.height/2:e.radiusY!==void 0&&(n=e.radiusY),{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}function ot(e,t){return!(e.left>t.right||t.left>e.right||e.top>t.bottom||t.top>e.bottom)}function ne(e,t){let n=t.getBoundingClientRect(),a=at(e);return ot(n,a)}function ae(e){return!(e instanceof HTMLElement)||!e.hasAttribute("draggable")}function Me(e){return e instanceof HTMLInputElement?!1:e instanceof HTMLButtonElement?e.type!=="submit"&&e.type!=="reset":!de(e)}function Te(e,t){return e instanceof HTMLInputElement?!Ce(e,t):Me(e)}const it=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Ce(e,t){return e.type==="checkbox"||e.type==="radio"?t===" ":it.has(e.type)}class st{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(t,n){this.nativeEvent=n,this.target=n.target,this.currentTarget=n.currentTarget,this.relatedTarget=n.relatedTarget,this.bubbles=n.bubbles,this.cancelable=n.cancelable,this.defaultPrevented=n.defaultPrevented,this.eventPhase=n.eventPhase,this.isTrusted=n.isTrusted,this.timeStamp=n.timeStamp,this.type=t}}function lt(e){let t=v.useRef({isFocused:!1,observer:null});ce(()=>{const a=t.current;return()=>{a.observer&&(a.observer.disconnect(),a.observer=null)}},[]);let n=A(a=>{e==null||e(a)});return v.useCallback(a=>{if(a.target instanceof HTMLButtonElement||a.target instanceof HTMLInputElement||a.target instanceof HTMLTextAreaElement||a.target instanceof HTMLSelectElement){t.current.isFocused=!0;let i=a.target,c=u=>{t.current.isFocused=!1,i.disabled&&n(new st("blur",u)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};i.addEventListener("focusout",c,{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&i.disabled){var u;(u=t.current.observer)===null||u===void 0||u.disconnect();let p=i===document.activeElement?null:document.activeElement;i.dispatchEvent(new FocusEvent("blur",{relatedTarget:p})),i.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:p}))}}),t.current.observer.observe(i,{attributes:!0,attributeFilter:["disabled"]})}},[n])}function ut(e){let{isDisabled:t,onFocus:n,onBlur:a,onFocusChange:i}=e;const c=v.useCallback(d=>{if(d.target===d.currentTarget)return a&&a(d),i&&i(!1),!0},[a,i]),u=lt(c),p=v.useCallback(d=>{const y=h(d.target);d.target===d.currentTarget&&y.activeElement===d.target&&(n&&n(d),i&&i(!0),u(d))},[i,n,u]);return{focusProps:{onFocus:!t&&(n||i||a)?p:void 0,onBlur:!t&&(a||i)?c:void 0}}}let R=null,ct=new Set,Y=new Map,I=!1,le=!1;function pe(e,t){for(let n of ct)n(e,t)}function ft(e){return!(e.metaKey||!G()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function Q(e){I=!0,ft(e)&&(R="keyboard",pe("keyboard",e))}function T(e){R="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(I=!0,pe("pointer",e))}function Oe(e){ie(e)&&(I=!0,R="virtual")}function De(e){e.target===window||e.target===document||(!I&&!le&&(R="virtual",pe("virtual",e)),I=!1,le=!1)}function Fe(){I=!1,le=!0}function he(e){if(typeof window>"u"||Y.get(_(e)))return;const t=_(e),n=h(e);let a=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){I=!0,a.apply(this,arguments)},n.addEventListener("keydown",Q,!0),n.addEventListener("keyup",Q,!0),n.addEventListener("click",Oe,!0),t.addEventListener("focus",De,!0),t.addEventListener("blur",Fe,!1),typeof PointerEvent<"u"?(n.addEventListener("pointerdown",T,!0),n.addEventListener("pointermove",T,!0),n.addEventListener("pointerup",T,!0)):(n.addEventListener("mousedown",T,!0),n.addEventListener("mousemove",T,!0),n.addEventListener("mouseup",T,!0)),t.addEventListener("beforeunload",()=>{Ie(e)},{once:!0}),Y.set(t,{focus:a})}const Ie=(e,t)=>{const n=_(e),a=h(e);t&&a.removeEventListener("DOMContentLoaded",t),Y.has(n)&&(n.HTMLElement.prototype.focus=Y.get(n).focus,a.removeEventListener("keydown",Q,!0),a.removeEventListener("keyup",Q,!0),a.removeEventListener("click",Oe,!0),n.removeEventListener("focus",De,!0),n.removeEventListener("blur",Fe,!1),typeof PointerEvent<"u"?(a.removeEventListener("pointerdown",T,!0),a.removeEventListener("pointermove",T,!0),a.removeEventListener("pointerup",T,!0)):(a.removeEventListener("mousedown",T,!0),a.removeEventListener("mousemove",T,!0),a.removeEventListener("mouseup",T,!0)),Y.delete(n))};function dt(e){const t=h(e);let n;return t.readyState!=="loading"?he(e):(n=()=>{he(e)},t.addEventListener("DOMContentLoaded",n)),()=>Ie(e,n)}typeof document<"u"&&dt();function pt(){return R}function me(e){if(!e)return;let t=!0;return n=>{let a={...n,preventDefault(){n.preventDefault()},isDefaultPrevented(){return n.isDefaultPrevented()},stopPropagation(){t?console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."):t=!0},continuePropagation(){t=!1},isPropagationStopped(){return t}};e(a),t&&n.stopPropagation()}}function gt(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:me(e.onKeyDown),onKeyUp:me(e.onKeyUp)}}}function bt(e){const t=h(e);if(pt()==="virtual"){let n=t.activeElement;ke(()=>{t.activeElement===n&&e.isConnected&&F(e)})}else F(e)}let vt=ue.createContext(null);function $t(e){let t=v.useContext(vt)||{};xe(t,e);let{ref:n,...a}=t;return a}function yt(e,t){let{focusProps:n}=ut(e),{keyboardProps:a}=gt(e),i=N(n,a),c=$t(t),u=e.isDisabled?{}:c,p=v.useRef(e.autoFocus);return v.useEffect(()=>{p.current&&t.current&&bt(t.current),p.current=!1},[t]),{focusableProps:N({...i,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},u)}}function Tt(e,t){let{elementType:n="button",isDisabled:a,onPress:i,onPressStart:c,onPressEnd:u,onPressUp:p,onPressChange:d,preventFocusOnPress:y,allowFocusWhenDisabled:P,onClick:D,href:ee,target:te,rel:W,type:L="button"}=e,m;n==="button"?m={type:L,disabled:a}:m={role:"button",tabIndex:a?void 0:0,href:n==="a"&&!a?ee:void 0,target:n==="a"?te:void 0,type:n==="input"?L:void 0,disabled:n==="input"?a:void 0,"aria-disabled":!a||n==="input"?void 0:a,rel:n==="a"?W:void 0};let{pressProps:K,isPressed:E}=rt({onPressStart:c,onPressEnd:u,onPressChange:d,onPress:i,onPressUp:p,isDisabled:a,preventFocusOnPress:y,ref:t}),{focusableProps:$}=yt(e,t);P&&($.tabIndex=a?-1:$.tabIndex);let M=N($,K,We(e,{labelable:!0}));return{isPressed:E,buttonProps:N(m,M,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],onClick:S=>{D&&(D(S),console.warn("onClick is deprecated, please use onPress"))}})}}export{Tt as $,Ee as a,N as b};
