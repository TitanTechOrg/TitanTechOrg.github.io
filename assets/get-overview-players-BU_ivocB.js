import{aI as b,r as i,j as s,q as y,b9 as j,ar as g,aq as N,as as S,ah as C,ai as O}from"./index-BkUaIe_j.js";function R({options:l,label:a,placeholder:r="Select an option",selectKey:t,labelTextSize:c="text-base"}){var m;const{selectedValues:p,setSelectedValue:w}=b(),[o,u]=i.useState(!1),d=i.useRef(null),f=i.useRef(null),n=p[t],h=()=>{u(e=>!e)},v=e=>{w(t,e===n?"":e),u(!1)};return i.useEffect(()=>{const e=x=>{d.current&&!d.current.contains(x.target)&&u(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),i.useEffect(()=>{o&&f.current&&f.current.scrollIntoView({block:"nearest",inline:"nearest"})},[o]),s.jsx("div",{className:"group relative inline-flex w-full min-w-72 max-w-xs flex-col duration-150 transition-background motion-reduce:transition-none",children:s.jsxs("div",{className:"flex w-full flex-col",ref:d,children:[s.jsx(y,{onClick:h,className:"inline-flex w-full items-center justify-start px-3 py-7 shadow-sm outline-none",color:"primary",variant:"flat","aria-haspopup":"listbox","aria-expanded":o,children:s.jsxs("div",{className:"relative flex w-full items-center justify-between",children:[s.jsxs("div",{children:[s.jsx("label",{className:"pointer-events-none absolute -top-3 left-0 z-10 block max-w-full text-ellipsis text-xs",children:a}),s.jsx("div",{className:"absolute -top-2 left-0 inline-flex h-full min-h-4 w-full pt-4 text-xs text-default-500",children:n?(m=l.find(e=>e.value===n))==null?void 0:m.label:r})]}),s.jsx("div",{children:o?s.jsx(j,{className:"h-4 w-4"}):s.jsx(g,{className:"h-4 w-4"})})]})}),o&&s.jsx("ul",{className:"absolute top-full z-20 mt-2 max-h-48 w-full max-w-xs overflow-y-auto rounded-lg bg-content1 p-2 shadow-medium sm:max-h-80",style:{scrollbarWidth:"none",msOverflowStyle:"none"},role:"listbox","aria-labelledby":a,children:l.map(e=>s.jsx("li",{onClick:()=>v(e.value),className:`mb-1 cursor-pointer rounded-lg px-2 py-4 last:mb-0 hover:bg-primary hover:text-primary-foreground ${e.value===n?"bg-primary text-primary-foreground":""}`,role:"option","aria-selected":e.value===n,ref:e.value===n?f:null,children:s.jsxs("div",{className:`flex items-center justify-between ${c}`,children:[e.label,e.value===n&&s.jsx(N,{className:"h-4 w-4"})]})},e.value))})]})})}function V(l,a){return S({queryKey:["overview_players",l,a],queryFn:async()=>await k(l,a),enabled:!!l})}async function k(l,a){let r="";const t=new URLSearchParams;l&&t.append("raid_id",l),a&&t.append("cycle",String(a)),t.size&&(r+="?",r+=t);const c=O.overview+r;return await C.get(c)}export{R as C,V as u};
