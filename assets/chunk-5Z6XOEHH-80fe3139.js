import{t as u,B as e,o as p,r as f,f as g,j as x}from"./index-77515d3c.js";var d=u({base:["px-2","py-1","h-fit","font-mono","font-normal","inline-block","whitespace-nowrap"],variants:{color:{default:e.flat.default,primary:e.flat.primary,secondary:e.flat.secondary,success:e.flat.success,warning:e.flat.warning,danger:e.flat.danger},size:{sm:"text-small",md:"text-medium",lg:"text-large"},radius:{none:"rounded-none",sm:"rounded-small",md:"rounded-medium",lg:"rounded-large",full:"rounded-full"}},defaultVariants:{color:"default",size:"sm",radius:"sm"}});function v(s){const[o,a]=p(s,d.variantKeys),{as:r,children:t,className:n,...c}=o,m=r||"code",i=f.useMemo(()=>d({...a,className:n}),[...Object.values(a),n]);return{Component:m,children:t,getCodeProps:()=>({className:i,...c})}}var l=g((s,o)=>{const{Component:a,children:r,getCodeProps:t}=v({...s});return x.jsx(a,{ref:o,...t(),children:r})});l.displayName="NextUI.Code";var P=l;export{P as c};
