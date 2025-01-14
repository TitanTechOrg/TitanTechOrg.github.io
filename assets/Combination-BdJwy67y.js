import{r as d,a3 as V,a_ as Ke,a$ as Ye,aw as F,aL as j,a0 as He,aY as qe,b0 as Ue}from"./index-D_Mmpb-t.js";var Xe=Object.create,Te=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,Re=Object.getOwnPropertyNames,Ze=Object.getPrototypeOf,Qe=Object.prototype.hasOwnProperty,ke=(e,t)=>function(){return t||(0,e[Re(e)[0]])((t={exports:{}}).exports,t),t.exports},Je=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Re(t))!Qe.call(e,a)&&a!==r&&Te(e,a,{get:()=>t[a],enumerable:!(n=Ge(t,a))||n.enumerable});return e},et=(e,t,r)=>(r=e!=null?Xe(Ze(e)):{},Je(!e||!e.__esModule?Te(r,"default",{value:e,enumerable:!0}):r,e)),tt=ke({"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(e){var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.iterator;function b(o){return o===null||typeof o!="object"?null:(o=m&&o[m]||o["@@iterator"],typeof o=="function"?o:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,E={};function R(o,l,y){this.props=o,this.context=l,this.refs=E,this.updater=y||g}R.prototype.isReactComponent={},R.prototype.setState=function(o,l){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,l,"setState")},R.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function M(){}M.prototype=R.prototype;function L(o,l,y){this.props=o,this.context=l,this.refs=E,this.updater=y||g}var A=L.prototype=new M;A.constructor=L,v(A,R.prototype),A.isPureReactComponent=!0;var x=Array.isArray,B=Object.prototype.hasOwnProperty,W={current:null},Y={key:!0,ref:!0,__self:!0,__source:!0};function Z(o,l,y){var w,S={},N=null,k=null;if(l!=null)for(w in l.ref!==void 0&&(k=l.ref),l.key!==void 0&&(N=""+l.key),l)B.call(l,w)&&!Y.hasOwnProperty(w)&&(S[w]=l[w]);var _=arguments.length-2;if(_===1)S.children=y;else if(1<_){for(var C=Array(_),I=0;I<_;I++)C[I]=arguments[I+2];S.children=C}if(o&&o.defaultProps)for(w in _=o.defaultProps,_)S[w]===void 0&&(S[w]=_[w]);return{$$typeof:t,type:o,key:N,ref:k,props:S,_owner:W.current}}function Ve(o,l){return{$$typeof:t,type:o.type,key:l,ref:o.ref,props:o.props,_owner:o._owner}}function se(o){return typeof o=="object"&&o!==null&&o.$$typeof===t}function Be(o){var l={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(y){return l[y]})}var ge=/\/+/g;function fe(o,l){return typeof o=="object"&&o!==null&&o.key!=null?Be(""+o.key):l.toString(36)}function J(o,l,y,w,S){var N=typeof o;(N==="undefined"||N==="boolean")&&(o=null);var k=!1;if(o===null)k=!0;else switch(N){case"string":case"number":k=!0;break;case"object":switch(o.$$typeof){case t:case r:k=!0}}if(k)return k=o,S=S(k),o=w===""?"."+fe(k,0):w,x(S)?(y="",o!=null&&(y=o.replace(ge,"$&/")+"/"),J(S,l,y,"",function(I){return I})):S!=null&&(se(S)&&(S=Ve(S,y+(!S.key||k&&k.key===S.key?"":(""+S.key).replace(ge,"$&/")+"/")+o)),l.push(S)),1;if(k=0,w=w===""?".":w+":",x(o))for(var _=0;_<o.length;_++){N=o[_];var C=w+fe(N,_);k+=J(N,l,y,C,S)}else if(C=b(o),typeof C=="function")for(o=C.call(o),_=0;!(N=o.next()).done;)N=N.value,C=w+fe(N,_++),k+=J(N,l,y,C,S);else if(N==="object")throw l=String(o),Error("Objects are not valid as a React child (found: "+(l==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":l)+"). If you meant to render a collection of children, use an array instead.");return k}function ee(o,l,y){if(o==null)return o;var w=[],S=0;return J(o,w,"","",function(N){return l.call(y,N,S++)}),w}function We(o){if(o._status===-1){var l=o._result;l=l(),l.then(function(y){(o._status===0||o._status===-1)&&(o._status=1,o._result=y)},function(y){(o._status===0||o._status===-1)&&(o._status=2,o._result=y)}),o._status===-1&&(o._status=0,o._result=l)}if(o._status===1)return o._result.default;throw o._result}var P={current:null},te={transition:null},ze={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:te,ReactCurrentOwner:W};e.Children={map:ee,forEach:function(o,l,y){ee(o,function(){l.apply(this,arguments)},y)},count:function(o){var l=0;return ee(o,function(){l++}),l},toArray:function(o){return ee(o,function(l){return l})||[]},only:function(o){if(!se(o))throw Error("React.Children.only expected to receive a single React element child.");return o}},e.Component=R,e.Fragment=n,e.Profiler=i,e.PureComponent=L,e.StrictMode=a,e.Suspense=s,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ze,e.cloneElement=function(o,l,y){if(o==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+o+".");var w=v({},o.props),S=o.key,N=o.ref,k=o._owner;if(l!=null){if(l.ref!==void 0&&(N=l.ref,k=W.current),l.key!==void 0&&(S=""+l.key),o.type&&o.type.defaultProps)var _=o.type.defaultProps;for(C in l)B.call(l,C)&&!Y.hasOwnProperty(C)&&(w[C]=l[C]===void 0&&_!==void 0?_[C]:l[C])}var C=arguments.length-2;if(C===1)w.children=y;else if(1<C){_=Array(C);for(var I=0;I<C;I++)_[I]=arguments[I+2];w.children=_}return{$$typeof:t,type:o.type,key:S,ref:N,props:w,_owner:k}},e.createContext=function(o){return o={$$typeof:u,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},o.Provider={$$typeof:c,_context:o},o.Consumer=o},e.createElement=Z,e.createFactory=function(o){var l=Z.bind(null,o);return l.type=o,l},e.createRef=function(){return{current:null}},e.forwardRef=function(o){return{$$typeof:p,render:o}},e.isValidElement=se,e.lazy=function(o){return{$$typeof:h,_payload:{_status:-1,_result:o},_init:We}},e.memo=function(o,l){return{$$typeof:f,type:o,compare:l===void 0?null:l}},e.startTransition=function(o){var l=te.transition;te.transition={};try{o()}finally{te.transition=l}},e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},e.useCallback=function(o,l){return P.current.useCallback(o,l)},e.useContext=function(o){return P.current.useContext(o)},e.useDebugValue=function(){},e.useDeferredValue=function(o){return P.current.useDeferredValue(o)},e.useEffect=function(o,l){return P.current.useEffect(o,l)},e.useId=function(){return P.current.useId()},e.useImperativeHandle=function(o,l,y){return P.current.useImperativeHandle(o,l,y)},e.useInsertionEffect=function(o,l){return P.current.useInsertionEffect(o,l)},e.useLayoutEffect=function(o,l){return P.current.useLayoutEffect(o,l)},e.useMemo=function(o,l){return P.current.useMemo(o,l)},e.useReducer=function(o,l,y){return P.current.useReducer(o,l,y)},e.useRef=function(o){return P.current.useRef(o)},e.useState=function(o){return P.current.useState(o)},e.useSyncExternalStore=function(o,l,y){return P.current.useSyncExternalStore(o,l,y)},e.useTransition=function(){return P.current.useTransition()},e.version="18.2.0"}}),rt=ke({"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(e,t){t.exports=tt()}});/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee=et(rt()),nr=(e,t)=>{var r;let n=[];const a=(r=Ee.Children.map(e,c=>(0,Ee.isValidElement)(c)&&c.type===t?(n.push(c),null):c))==null?void 0:r.filter(Boolean),i=n.length>=0?n:void 0;return[a,i]},D=function(){return D=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},D.apply(this,arguments)};function xe(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function nt(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,i;n<a;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}function ot(){return typeof window.ResizeObserver<"u"}function or(e){const{ref:t,onResize:r}=e;d.useEffect(()=>{let n=t==null?void 0:t.current;if(n)if(ot()){const a=new window.ResizeObserver(i=>{i.length&&r()});return a.observe(n),()=>{n&&a.unobserve(n)}}else return window.addEventListener("resize",r,!1),()=>{window.removeEventListener("resize",r,!1)}},[r,t])}function at(e,t,r){let[n,a]=d.useState(e||t),i=d.useRef(e!==void 0),c=e!==void 0;d.useEffect(()=>{let s=i.current;s!==c&&console.warn(`WARN: A component changed from ${s?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}.`),i.current=c},[c]);let u=c?e:n,p=d.useCallback((s,...f)=>{let h=(m,...b)=>{r&&(Object.is(u,m)||r(m,...b)),c||(u=m)};typeof s=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),a((b,...g)=>{let v=s(c?u:b,...g);return h(v,...f),c?b:v})):(c||a(s),h(s,...f))},[c,u,r]);return[u,p]}function it({children:e}){let t=d.useMemo(()=>({register:()=>{}}),[]);return V.createElement(Ke.Provider,{value:t},e)}function ut(e){const t=Ye(e);if(!(e instanceof t.HTMLElement)&&!(e instanceof t.SVGElement))return!1;let{display:r,visibility:n}=e.style,a=r!=="none"&&n!=="hidden"&&n!=="collapse";if(a){const{getComputedStyle:i}=e.ownerDocument.defaultView;let{display:c,visibility:u}=i(e);a=c!=="none"&&u!=="hidden"&&u!=="collapse"}return a}function ct(e,t){return!e.hasAttribute("hidden")&&!e.hasAttribute("data-react-aria-prevent-focus")&&(e.nodeName==="DETAILS"&&t&&t.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function Oe(e,t){return e.nodeName!=="#comment"&&ut(e)&&ct(e,t)&&(!e.parentElement||Oe(e.parentElement,e))}const Se=V.createContext(null);let $=null;function lt(e){let{children:t,contain:r,restoreFocus:n,autoFocus:a}=e,i=d.useRef(null),c=d.useRef(null),u=d.useRef([]),{parentNode:p}=d.useContext(Se)||{},s=d.useMemo(()=>new pe({scopeRef:u}),[u]);F(()=>{let m=p||T.root;if(T.getTreeNode(m.scopeRef)&&$&&!ue($,m.scopeRef)){let b=T.getTreeNode($);b&&(m=b)}m.addChild(s),T.addNode(s)},[s,p]),F(()=>{let m=T.getTreeNode(u);m&&(m.contain=!!r)},[r]),F(()=>{var m;let b=(m=i.current)===null||m===void 0?void 0:m.nextSibling,g=[];for(;b&&b!==c.current;)g.push(b),b=b.nextSibling;u.current=g},[t]),pt(u,n,r),vt(u,r),mt(u,n,r),ht(u,a),d.useEffect(()=>{const m=j(u.current?u.current[0]:void 0).activeElement;let b=null;if(O(m,u.current)){for(let g of T.traverse())g.scopeRef&&O(m,g.scopeRef.current)&&(b=g);b===T.getTreeNode(u)&&($=b.scopeRef)}},[u]),F(()=>()=>{var m,b,g;let v=(g=(b=T.getTreeNode(u))===null||b===void 0||(m=b.parent)===null||m===void 0?void 0:m.scopeRef)!==null&&g!==void 0?g:null;(u===$||ue(u,$))&&(!v||T.getTreeNode(v))&&($=v),T.removeTreeNode(u)},[u]);let f=d.useMemo(()=>st(u),[]),h=d.useMemo(()=>({focusManager:f,parentNode:s}),[s,f]);return V.createElement(Se.Provider,{value:h},V.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:i}),t,V.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:c}))}function st(e){return{focusNext(t={}){let r=e.current,{from:n,tabbable:a,wrap:i,accept:c}=t,u=n||j(r[0]).activeElement,p=r[0].previousElementSibling,s=H(r),f=K(s,{tabbable:a,accept:c},r);f.currentNode=O(u,r)?u:p;let h=f.nextNode();return!h&&i&&(f.currentNode=p,h=f.nextNode()),h&&z(h,!0),h},focusPrevious(t={}){let r=e.current,{from:n,tabbable:a,wrap:i,accept:c}=t,u=n||j(r[0]).activeElement,p=r[r.length-1].nextElementSibling,s=H(r),f=K(s,{tabbable:a,accept:c},r);f.currentNode=O(u,r)?u:p;let h=f.previousNode();return!h&&i&&(f.currentNode=p,h=f.previousNode()),h&&z(h,!0),h},focusFirst(t={}){let r=e.current,{tabbable:n,accept:a}=t,i=H(r),c=K(i,{tabbable:n,accept:a},r);c.currentNode=r[0].previousElementSibling;let u=c.nextNode();return u&&z(u,!0),u},focusLast(t={}){let r=e.current,{tabbable:n,accept:a}=t,i=H(r),c=K(i,{tabbable:n,accept:a},r);c.currentNode=r[r.length-1].nextElementSibling;let u=c.previousNode();return u&&z(u,!0),u}}}const me=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],ft=me.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";me.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const dt=me.join(':not([hidden]):not([tabindex="-1"]),');function H(e){return e[0].parentElement}function Q(e){let t=T.getTreeNode($);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function vt(e,t){let r=d.useRef(),n=d.useRef();F(()=>{let a=e.current;if(!t){n.current&&(cancelAnimationFrame(n.current),n.current=void 0);return}const i=j(a?a[0]:void 0);let c=s=>{if(s.key!=="Tab"||s.altKey||s.ctrlKey||s.metaKey||!Q(e)||s.isComposing)return;let f=i.activeElement,h=e.current;if(!h||!O(f,h))return;let m=H(h),b=K(m,{tabbable:!0},h);if(!f)return;b.currentNode=f;let g=s.shiftKey?b.previousNode():b.nextNode();g||(b.currentNode=s.shiftKey?h[h.length-1].nextElementSibling:h[0].previousElementSibling,g=s.shiftKey?b.previousNode():b.nextNode()),s.preventDefault(),g&&z(g,!0)},u=s=>{(!$||ue($,e))&&O(s.target,e.current)?($=e,r.current=s.target):Q(e)&&!ie(s.target,e)?r.current?r.current.focus():$&&$.current&&ce($.current):Q(e)&&(r.current=s.target)},p=s=>{n.current&&cancelAnimationFrame(n.current),n.current=requestAnimationFrame(()=>{if(i.activeElement&&Q(e)&&!ie(i.activeElement,e))if($=e,i.body.contains(s.target)){var f;r.current=s.target,(f=r.current)===null||f===void 0||f.focus()}else $.current&&ce($.current)})};return i.addEventListener("keydown",c,!1),i.addEventListener("focusin",u,!1),a==null||a.forEach(s=>s.addEventListener("focusin",u,!1)),a==null||a.forEach(s=>s.addEventListener("focusout",p,!1)),()=>{i.removeEventListener("keydown",c,!1),i.removeEventListener("focusin",u,!1),a==null||a.forEach(s=>s.removeEventListener("focusin",u,!1)),a==null||a.forEach(s=>s.removeEventListener("focusout",p,!1))}},[e,t]),F(()=>()=>{n.current&&cancelAnimationFrame(n.current)},[n])}function Le(e){return ie(e)}function O(e,t){return!e||!t?!1:t.some(r=>r.contains(e))}function ie(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:r}of T.traverse(T.getTreeNode(t)))if(r&&O(e,r.current))return!0;return!1}function ar(e){return ie(e,$)}function ue(e,t){var r;let n=(r=T.getTreeNode(t))===null||r===void 0?void 0:r.parent;for(;n;){if(n.scopeRef===e)return!0;n=n.parent}return!1}function z(e,t=!1){if(e!=null&&!t)try{He(e)}catch{}else if(e!=null)try{e.focus()}catch{}}function ce(e,t=!0){let r=e[0].previousElementSibling,n=H(e),a=K(n,{tabbable:t},e);a.currentNode=r;let i=a.nextNode();t&&!i&&(n=H(e),a=K(n,{tabbable:!1},e),a.currentNode=r,i=a.nextNode()),z(i)}function ht(e,t){const r=V.useRef(t);d.useEffect(()=>{if(r.current){$=e;const n=j(e.current?e.current[0]:void 0);!O(n.activeElement,$.current)&&e.current&&ce(e.current)}r.current=!1},[e])}function pt(e,t,r){F(()=>{if(t||r)return;let n=e.current;const a=j(n?n[0]:void 0);let i=c=>{let u=c.target;O(u,e.current)?$=e:Le(u)||($=null)};return a.addEventListener("focusin",i,!1),n==null||n.forEach(c=>c.addEventListener("focusin",i,!1)),()=>{a.removeEventListener("focusin",i,!1),n==null||n.forEach(c=>c.removeEventListener("focusin",i,!1))}},[e,t,r])}function bt(e){let t=T.getTreeNode($);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(t==null?void 0:t.scopeRef)===e}function mt(e,t,r){const n=d.useRef(typeof document<"u"?j(e.current?e.current[0]:void 0).activeElement:null);F(()=>{let a=e.current;const i=j(a?a[0]:void 0);if(!t||r)return;let c=()=>{(!$||ue($,e))&&O(i.activeElement,e.current)&&($=e)};return i.addEventListener("focusin",c,!1),a==null||a.forEach(u=>u.addEventListener("focusin",c,!1)),()=>{i.removeEventListener("focusin",c,!1),a==null||a.forEach(u=>u.removeEventListener("focusin",c,!1))}},[e,r]),F(()=>{const a=j(e.current?e.current[0]:void 0);if(!t)return;let i=c=>{if(c.key!=="Tab"||c.altKey||c.ctrlKey||c.metaKey||!Q(e)||c.isComposing)return;let u=a.activeElement;if(!O(u,e.current))return;let p=T.getTreeNode(e);if(!p)return;let s=p.nodeToRestore,f=K(a.body,{tabbable:!0});f.currentNode=u;let h=c.shiftKey?f.previousNode():f.nextNode();if((!s||!a.body.contains(s)||s===a.body)&&(s=void 0,p.nodeToRestore=void 0),(!h||!O(h,e.current))&&s){f.currentNode=s;do h=c.shiftKey?f.previousNode():f.nextNode();while(O(h,e.current));c.preventDefault(),c.stopPropagation(),h?z(h,!0):Le(s)?z(s,!0):u.blur()}};return r||a.addEventListener("keydown",i,!0),()=>{r||a.removeEventListener("keydown",i,!0)}},[e,t,r]),F(()=>{const a=j(e.current?e.current[0]:void 0);if(!t)return;let i=T.getTreeNode(e);if(i){var c;return i.nodeToRestore=(c=n.current)!==null&&c!==void 0?c:void 0,()=>{let u=T.getTreeNode(e);if(!u)return;let p=u.nodeToRestore;if(t&&p&&(O(a.activeElement,e.current)||a.activeElement===a.body&&bt(e))){let s=T.clone();requestAnimationFrame(()=>{if(a.activeElement===a.body){let f=s.getTreeNode(e);for(;f;){if(f.nodeToRestore&&f.nodeToRestore.isConnected){z(f.nodeToRestore);return}f=f.parent}for(f=s.getTreeNode(e);f;){if(f.scopeRef&&f.scopeRef.current&&T.getTreeNode(f.scopeRef)){ce(f.scopeRef.current,!0);return}f=f.parent}}})}}}},[e,t])}function K(e,t,r){let n=t!=null&&t.tabbable?dt:ft,a=j(e).createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(i){var c;return!(t==null||(c=t.from)===null||c===void 0)&&c.contains(i)?NodeFilter.FILTER_REJECT:i.matches(n)&&Oe(i)&&(!r||O(i,r))&&(!(t!=null&&t.accept)||t.accept(i))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t!=null&&t.from&&(a.currentNode=t.from),a}class ye{get size(){return this.fastMap.size}getTreeNode(t){return this.fastMap.get(t)}addTreeNode(t,r,n){let a=this.fastMap.get(r??null);if(!a)return;let i=new pe({scopeRef:t});a.addChild(i),i.parent=a,this.fastMap.set(t,i),n&&(i.nodeToRestore=n)}addNode(t){this.fastMap.set(t.scopeRef,t)}removeTreeNode(t){if(t===null)return;let r=this.fastMap.get(t);if(!r)return;let n=r.parent;for(let i of this.traverse())i!==r&&r.nodeToRestore&&i.nodeToRestore&&r.scopeRef&&r.scopeRef.current&&O(i.nodeToRestore,r.scopeRef.current)&&(i.nodeToRestore=r.nodeToRestore);let a=r.children;n&&(n.removeChild(r),a.size>0&&a.forEach(i=>n&&n.addChild(i))),this.fastMap.delete(r.scopeRef)}*traverse(t=this.root){if(t.scopeRef!=null&&(yield t),t.children.size>0)for(let r of t.children)yield*this.traverse(r)}clone(){var t;let r=new ye;var n;for(let a of this.traverse())r.addTreeNode(a.scopeRef,(n=(t=a.parent)===null||t===void 0?void 0:t.scopeRef)!==null&&n!==void 0?n:null,a.nodeToRestore);return r}constructor(){this.fastMap=new Map,this.root=new pe({scopeRef:null}),this.fastMap.set(null,this.root)}}class pe{addChild(t){this.children.add(t),t.parent=this}removeChild(t){this.children.delete(t),t.parent=void 0}constructor(t){this.children=new Set,this.contain=!1,this.scopeRef=t.scopeRef}}let T=new ye;const yt=d.createContext({});function gt(){var e;return(e=d.useContext(yt))!==null&&e!==void 0?e:{}}const Pe=V.createContext(null);function ir(e){let t=qe(),{portalContainer:r=t?null:document.body,isExiting:n}=e,[a,i]=d.useState(!1),c=d.useMemo(()=>({contain:a,setContain:i}),[a,i]),{getContainer:u}=gt();if(!e.portalContainer&&u&&(r=u()),!r)return null;let p=e.children;return e.disableFocusManagement||(p=V.createElement(lt,{restoreFocus:!0,contain:a&&!n},p)),p=V.createElement(Pe.Provider,{value:c},V.createElement(it,null,p)),Ue.createPortal(p,r)}function ur(){let e=d.useContext(Pe),t=e==null?void 0:e.setContain;F(()=>{t==null||t(!0)},[t])}var q={ease:[.36,.66,.4,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1],spring:[.155,1.105,.295,1.12],springOut:[.57,-.15,.62,.07],softSpring:[.16,1.11,.3,1.02]},cr={scaleSpring:{enter:{transform:"scale(1)",opacity:1,transition:{type:"spring",bounce:0,duration:.2}},exit:{transform:"scale(0.85)",opacity:0,transition:{type:"easeOut",duration:.15}}},scaleSpringOpacity:{initial:{opacity:0,transform:"scale(0.8)"},enter:{opacity:1,transform:"scale(1)",transition:{type:"spring",bounce:0,duration:.3}},exit:{opacity:0,transform:"scale(0.96)",transition:{type:"easeOut",bounce:0,duration:.15}}},scale:{enter:{scale:1},exit:{scale:.95}},scaleFadeIn:{enter:{transform:"scale(1)",opacity:1,transition:{duration:.25,ease:q.easeIn}},exit:{transform:"scale(0.95)",opacity:0,transition:{duration:.2,ease:q.easeOut}}},scaleInOut:{enter:{transform:"scale(1)",opacity:1,transition:{duration:.4,ease:q.ease}},exit:{transform:"scale(1.03)",opacity:0,transition:{duration:.3,ease:q.ease}}},fade:{enter:{opacity:1,transition:{duration:.4,ease:q.ease}},exit:{opacity:0,transition:{duration:.3,ease:q.ease}}},collapse:{enter:{opacity:1,height:"auto",transition:{height:{type:"spring",bounce:0,duration:.3},opacity:{easings:"ease",duration:.4}}},exit:{opacity:0,height:0,transition:{easings:"ease",duration:.3}}}};function lr(e={}){let{isReadOnly:t}=e,[r,n]=at(e.isSelected,e.defaultSelected||!1,e.onChange);function a(c){t||n(c)}function i(){t||n(!r)}return{isSelected:r,setSelected:a,toggle:i}}var oe="right-scroll-bar-position",ae="width-before-scroll-bar",Et="with-scroll-bars-hidden",St="--removed-body-scroll-bar-size";function de(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function $t(e,t){var r=d.useState(function(){return{value:e,callback:t,facade:{get current(){return r.value},set current(n){var a=r.value;a!==n&&(r.value=n,r.callback(n,a))}}}})[0];return r.callback=t,r.facade}var wt=typeof window<"u"?d.useLayoutEffect:d.useEffect,$e=new WeakMap;function Ct(e,t){var r=$t(null,function(n){return e.forEach(function(a){return de(a,n)})});return wt(function(){var n=$e.get(r);if(n){var a=new Set(n),i=new Set(e),c=r.current;a.forEach(function(u){i.has(u)||de(u,null)}),i.forEach(function(u){a.has(u)||de(u,c)})}$e.set(r,e)},[e]),r}function Nt(e){return e}function _t(e,t){t===void 0&&(t=Nt);var r=[],n=!1,a={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(i){var c=t(i,n);return r.push(c),function(){r=r.filter(function(u){return u!==c})}},assignSyncMedium:function(i){for(n=!0;r.length;){var c=r;r=[],c.forEach(i)}r={push:function(u){return i(u)},filter:function(){return r}}},assignMedium:function(i){n=!0;var c=[];if(r.length){var u=r;r=[],u.forEach(i),c=r}var p=function(){var f=c;c=[],f.forEach(i)},s=function(){return Promise.resolve().then(p)};s(),r={push:function(f){c.push(f),s()},filter:function(f){return c=c.filter(f),r}}}};return a}function Tt(e){e===void 0&&(e={});var t=_t(null);return t.options=D({async:!0,ssr:!1},e),t}var Me=function(e){var t=e.sideCar,r=xe(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw new Error("Sidecar medium not found");return d.createElement(n,D({},r))};Me.isSideCarExport=!0;function Rt(e,t){return e.useMedium(t),Me}var Ae=Tt(),ve=function(){},le=d.forwardRef(function(e,t){var r=d.useRef(null),n=d.useState({onScrollCapture:ve,onWheelCapture:ve,onTouchMoveCapture:ve}),a=n[0],i=n[1],c=e.forwardProps,u=e.children,p=e.className,s=e.removeScrollBar,f=e.enabled,h=e.shards,m=e.sideCar,b=e.noIsolation,g=e.inert,v=e.allowPinchZoom,E=e.as,R=E===void 0?"div":E,M=e.gapMode,L=xe(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),A=m,x=Ct([r,t]),B=D(D({},L),a);return d.createElement(d.Fragment,null,f&&d.createElement(A,{sideCar:Ae,removeScrollBar:s,shards:h,noIsolation:b,inert:g,setCallbacks:i,allowPinchZoom:!!v,lockRef:r,gapMode:M}),c?d.cloneElement(d.Children.only(u),D(D({},B),{ref:x})):d.createElement(R,D({},B,{className:p,ref:x}),u))});le.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};le.classNames={fullWidth:ae,zeroRight:oe};var kt=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function xt(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=kt();return t&&e.setAttribute("nonce",t),e}function Ot(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Lt(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Pt=function(){var e=0,t=null;return{add:function(r){e==0&&(t=xt())&&(Ot(t,r),Lt(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Mt=function(){var e=Pt();return function(t,r){d.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},Ie=function(){var e=Mt(),t=function(r){var n=r.styles,a=r.dynamic;return e(n,a),null};return t},At={left:0,top:0,right:0,gap:0},he=function(e){return parseInt(e||"",10)||0},It=function(e){var t=window.getComputedStyle(document.body),r=t[e==="padding"?"paddingLeft":"marginLeft"],n=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[he(r),he(n),he(a)]},Ft=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return At;var t=It(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,n-r+t[2]-t[0])}},jt=Ie(),G="data-scroll-locked",Dt=function(e,t,r,n){var a=e.left,i=e.top,c=e.right,u=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(Et,` {
   overflow: hidden `).concat(n,`;
   padding-right: `).concat(u,"px ").concat(n,`;
  }
  body[`).concat(G,`] {
    overflow: hidden `).concat(n,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(n,";"),r==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(c,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(u,"px ").concat(n,`;
    `),r==="padding"&&"padding-right: ".concat(u,"px ").concat(n,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(oe,` {
    right: `).concat(u,"px ").concat(n,`;
  }
  
  .`).concat(ae,` {
    margin-right: `).concat(u,"px ").concat(n,`;
  }
  
  .`).concat(oe," .").concat(oe,` {
    right: 0 `).concat(n,`;
  }
  
  .`).concat(ae," .").concat(ae,` {
    margin-right: 0 `).concat(n,`;
  }
  
  body[`).concat(G,`] {
    `).concat(St,": ").concat(u,`px;
  }
`)},we=function(){var e=parseInt(document.body.getAttribute(G)||"0",10);return isFinite(e)?e:0},Vt=function(){d.useEffect(function(){return document.body.setAttribute(G,(we()+1).toString()),function(){var e=we()-1;e<=0?document.body.removeAttribute(G):document.body.setAttribute(G,e.toString())}},[])},Bt=function(e){var t=e.noRelative,r=e.noImportant,n=e.gapMode,a=n===void 0?"margin":n;Vt();var i=d.useMemo(function(){return Ft(a)},[a]);return d.createElement(jt,{styles:Dt(i,!t,a,r?"":"!important")})},be=!1;if(typeof window<"u")try{var re=Object.defineProperty({},"passive",{get:function(){return be=!0,!0}});window.addEventListener("test",re,re),window.removeEventListener("test",re,re)}catch{be=!1}var U=be?{passive:!1}:!1,Wt=function(e){return e.tagName==="TEXTAREA"},Fe=function(e,t){if(!(e instanceof Element))return!1;var r=window.getComputedStyle(e);return r[t]!=="hidden"&&!(r.overflowY===r.overflowX&&!Wt(e)&&r[t]==="visible")},zt=function(e){return Fe(e,"overflowY")},Kt=function(e){return Fe(e,"overflowX")},Ce=function(e,t){var r=t.ownerDocument,n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var a=je(e,n);if(a){var i=De(e,n),c=i[1],u=i[2];if(c>u)return!0}n=n.parentNode}while(n&&n!==r.body);return!1},Yt=function(e){var t=e.scrollTop,r=e.scrollHeight,n=e.clientHeight;return[t,r,n]},Ht=function(e){var t=e.scrollLeft,r=e.scrollWidth,n=e.clientWidth;return[t,r,n]},je=function(e,t){return e==="v"?zt(t):Kt(t)},De=function(e,t){return e==="v"?Yt(t):Ht(t)},qt=function(e,t){return e==="h"&&t==="rtl"?-1:1},Ut=function(e,t,r,n,a){var i=qt(e,window.getComputedStyle(t).direction),c=i*n,u=r.target,p=t.contains(u),s=!1,f=c>0,h=0,m=0;do{var b=De(e,u),g=b[0],v=b[1],E=b[2],R=v-E-i*g;(g||R)&&je(e,u)&&(h+=R,m+=g),u instanceof ShadowRoot?u=u.host:u=u.parentNode}while(!p&&u!==document.body||p&&(t.contains(u)||t===u));return(f&&(Math.abs(h)<1||!a)||!f&&(Math.abs(m)<1||!a))&&(s=!0),s},ne=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Ne=function(e){return[e.deltaX,e.deltaY]},_e=function(e){return e&&"current"in e?e.current:e},Xt=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Gt=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Zt=0,X=[];function Qt(e){var t=d.useRef([]),r=d.useRef([0,0]),n=d.useRef(),a=d.useState(Zt++)[0],i=d.useState(Ie)[0],c=d.useRef(e);d.useEffect(function(){c.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var v=nt([e.lockRef.current],(e.shards||[]).map(_e),!0).filter(Boolean);return v.forEach(function(E){return E.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),v.forEach(function(E){return E.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var u=d.useCallback(function(v,E){if("touches"in v&&v.touches.length===2)return!c.current.allowPinchZoom;var R=ne(v),M=r.current,L="deltaX"in v?v.deltaX:M[0]-R[0],A="deltaY"in v?v.deltaY:M[1]-R[1],x,B=v.target,W=Math.abs(L)>Math.abs(A)?"h":"v";if("touches"in v&&W==="h"&&B.type==="range")return!1;var Y=Ce(W,B);if(!Y)return!0;if(Y?x=W:(x=W==="v"?"h":"v",Y=Ce(W,B)),!Y)return!1;if(!n.current&&"changedTouches"in v&&(L||A)&&(n.current=x),!x)return!0;var Z=n.current||x;return Ut(Z,E,v,Z==="h"?L:A,!0)},[]),p=d.useCallback(function(v){var E=v;if(!(!X.length||X[X.length-1]!==i)){var R="deltaY"in E?Ne(E):ne(E),M=t.current.filter(function(x){return x.name===E.type&&(x.target===E.target||E.target===x.shadowParent)&&Xt(x.delta,R)})[0];if(M&&M.should){E.cancelable&&E.preventDefault();return}if(!M){var L=(c.current.shards||[]).map(_e).filter(Boolean).filter(function(x){return x.contains(E.target)}),A=L.length>0?u(E,L[0]):!c.current.noIsolation;A&&E.cancelable&&E.preventDefault()}}},[]),s=d.useCallback(function(v,E,R,M){var L={name:v,delta:E,target:R,should:M,shadowParent:Jt(R)};t.current.push(L),setTimeout(function(){t.current=t.current.filter(function(A){return A!==L})},1)},[]),f=d.useCallback(function(v){r.current=ne(v),n.current=void 0},[]),h=d.useCallback(function(v){s(v.type,Ne(v),v.target,u(v,e.lockRef.current))},[]),m=d.useCallback(function(v){s(v.type,ne(v),v.target,u(v,e.lockRef.current))},[]);d.useEffect(function(){return X.push(i),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:m}),document.addEventListener("wheel",p,U),document.addEventListener("touchmove",p,U),document.addEventListener("touchstart",f,U),function(){X=X.filter(function(v){return v!==i}),document.removeEventListener("wheel",p,U),document.removeEventListener("touchmove",p,U),document.removeEventListener("touchstart",f,U)}},[]);var b=e.removeScrollBar,g=e.inert;return d.createElement(d.Fragment,null,g?d.createElement(i,{styles:Gt(a)}):null,b?d.createElement(Bt,{gapMode:e.gapMode}):null)}function Jt(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const er=Rt(Ae,Qt);var tr=d.forwardRef(function(e,t){return d.createElement(le,D({},e,{ref:t,sideCar:er}))});tr.classNames=le.classNames;export{ir as $,tr as R,q as T,et as _,at as a,or as b,lr as c,cr as d,K as e,ar as f,ur as g,lt as h,nr as p,rt as r};
