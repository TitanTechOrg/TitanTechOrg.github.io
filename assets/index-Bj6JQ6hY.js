import{r as s,at as h,be as p,bf as j,bg as D,bh as P,bi as B,bj as I,bk as K,bl as M,bm as O}from"./index-Cho9N5g_.js";const v="label";function m(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function F(t,e){const r=t.options;r&&e&&Object.assign(r,e)}function C(t,e){t.labels=e}function y(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:v;const l=[];t.datasets=e.map(a=>{const o=t.datasets.find(f=>f[r]===a[r]);return!o||!a.data||l.includes(o)?{...a}:(l.push(o),Object.assign(o,a),o)})}function L(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v;const r={labels:[],datasets:[]};return C(r,t.labels),y(r,t.datasets,e),r}function $(t,e){return t.getElementsAtEventForMode(e.nativeEvent,"dataset",{intersect:!0},!1)}function q(t,e){return t.getElementsAtEventForMode(e.nativeEvent,"nearest",{intersect:!0},!1)}function x(t,e){return t.getElementsAtEventForMode(e.nativeEvent,"index",{intersect:!0},!1)}function T(t,e){const{height:r=150,width:l=300,redraw:a=!1,datasetIdKey:o,type:f,data:c,options:i,plugins:R=[],fallbackContent:A,updateMode:E,...w}=t,d=s.useRef(null),n=s.useRef(),b=()=>{d.current&&(n.current=new p(d.current,{type:f,data:L(c,o),options:i&&{...i},plugins:R}),m(e,n.current))},g=()=>{m(e,null),n.current&&(n.current.destroy(),n.current=null)};return s.useEffect(()=>{!a&&n.current&&i&&F(n.current,i)},[a,i]),s.useEffect(()=>{!a&&n.current&&C(n.current.config.data,c.labels)},[a,c.labels]),s.useEffect(()=>{!a&&n.current&&c.datasets&&y(n.current.config.data,c.datasets,o)},[a,c.datasets]),s.useEffect(()=>{n.current&&(a?(g(),setTimeout(b)):n.current.update(E))},[a,i,c.labels,c.datasets,E]),s.useEffect(()=>{n.current&&(g(),setTimeout(b))},[f]),s.useEffect(()=>(b(),()=>g()),[]),h.createElement("canvas",Object.assign({ref:d,role:"img",height:r,width:l},w),A)}const k=s.forwardRef(T);function u(t,e){return p.register(e),s.forwardRef((r,l)=>h.createElement(k,Object.assign({},r,{ref:l,type:t})))}const z=u("line",j),G=u("bar",D),H=u("radar",P),J=u("doughnut",B),N=u("polarArea",I),Q=u("bubble",K),U=u("pie",M),V=u("scatter",O);export{G as Bar,Q as Bubble,k as Chart,J as Doughnut,z as Line,U as Pie,N as PolarArea,H as Radar,V as Scatter,$ as getDatasetAtEvent,q as getElementAtEvent,x as getElementsAtEvent};
