import{as as s,ah as T,ai as n,ba as u}from"./index-D10sjyHs.js";const l=e=>["st","nd","rd"][((e+90)%100-10)%10-1]||"th",f=e=>new Date(e+".000Z").toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"}),d=(e,a)=>`${e} ⦁ Zone ${a}`,O=e=>e.replace(/([A-Z])/g," $1").trim(),i={"Tier One":3,"Tier Two":4,"Tier Three":4,"Tier Four":5,"Master Tier":6},o=e=>{switch(e){case"Tier One":return i["Tier One"].valueOf();case"Tier Two":return i["Tier Two"].valueOf();case"Tier Three":return i["Tier Three"].valueOf();case"Tier Four":return i["Tier Four"].valueOf();case"Master Tier":return i["Master Tier"].valueOf();default:return i["Master Tier"].valueOf()}};function p(){return s({queryKey:["raid_list"],queryFn:async()=>await T.get(n.raid_list),select(e){const a=e.raids.map(t=>{let r="Master Tier";return t.tier==="1"?r="Tier One":t.tier==="2"?r="Tier Two":t.tier==="3"?r="Tier Three":t.tier==="4"?r="Tier Four":t.tier==="9999"&&(r="Master Tier"),{...t,tier:r,attacksPerTier:o(r)}});return e.raids=a,e},placeholderData:u})}export{l as a,O as b,f as c,d as g,p as u};
