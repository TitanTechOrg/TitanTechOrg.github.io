import{as as y,ah as v,ai as b,j as e,b1 as m,b2 as f,q as o,b3 as g,b4 as N,b5 as w,b6 as C,aI as _,ap as x,P,b7 as L}from"./index-Cp4ATDPT.js";import{C as R,u as S}from"./get-overview-players-uT64GgRd.js";import{b as u,u as O}from"./get-raid-list-BW8p1ywA.js";import{s as I,R as F}from"./raid-card-DHhUqB-v.js";import"./chunk-UWUNWEEL-DixY6oSK.js";import"./index-BRt-hS4C.js";function k(a){return y({queryKey:["player_profile",a],queryFn:async()=>await A(a),enabled:!!a})}async function A(a){let r="";const l=new URLSearchParams;a&&l.append("clan_player_id",a),l.size&&(r+="?",r+=l);const s=b.profile+r;return await v.get(s)}function B({overviewPlayers:a,isLoading:r}){return e.jsx("div",{children:!r&&a?e.jsx(R,{selectKey:"player-selector",label:"Clan member",placeholder:"Select player",options:a.players_data.map(l=>({value:l.player_id,label:l.player_name})).sort((l,s)=>l.label.localeCompare(s.label))}):e.jsx(I,{className:"min-h-14 w-full max-w-xs rounded-lg px-3 py-2"})})}function E(a){if(a.length===0)return 0;const r=a.reduce((l,s)=>l+s.level,0);return parseFloat((r/a.length).toFixed(2))}function T({playerProfile:a}){return e.jsxs("div",{className:"col-span-1 row-start-2",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Player stats"}),e.jsx("div",{className:"flex h-full flex-col justify-between gap-1",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("p",{children:"Ingame name"}),a.name]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("p",{children:"Loyalty"}),a.loyalty_level]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("p",{children:"Raid level"}),a.player_raid_level]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("p",{children:"Wildcards"}),a.raid_wildcard_count]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("p",{children:"Total Card Level"}),a.total_card_level]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("p",{children:"Average Card Level"}),E(a.cards)]})]})})]})}function q({cards:a}){const{filters:r,toggleFilter:l}=m(),s=a.map(t=>({...t,readable_name:u(f(t.skill_name))}));return e.jsxs("div",{className:"col-span-2 row-start-3 flex flex-col gap-4",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Raid Cards"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{onClick:()=>l("sortBy"),children:r.sortBy}),e.jsx(o,{onClick:()=>l("sortOrder"),endContent:r.sortOrder===g.sortOrder[0]?e.jsx(N,{}):e.jsx(w,{}),children:r.sortOrder})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(d,{title:"Burst",data:{cards:s}}),e.jsx(d,{title:"Affliction",data:{cards:s}}),e.jsx(d,{title:"Support",data:{cards:s}})]})]})}function D(a,r,l){const s=a.sortOrder==="Asc";return(a.sortBy==="Sort by Name"?"skill_name":"level")==="level"?s?r.level-l.level:l.level-r.level:s?r.readable_name.localeCompare(l.readable_name):l.readable_name.localeCompare(r.readable_name)}function d({title:a,data:r}){const{filters:l}=m();return e.jsxs("div",{className:"w-full",children:[e.jsx("h1",{className:"pb-2 text-left text-lg font-medium",children:a}),e.jsx("div",{className:"flex flex-wrap gap-1",children:r.cards.filter(s=>C(s.skill_name)===a).map(s=>({...s,readable_name:u(f(s.skill_name))})).sort((s,t)=>D(l,s,t)).map(({skill_name:s,level:t,readable_name:n})=>e.jsx(F,{name:s,value:t,readableName:n},s))})]})}function G(){var c;const{data:a,isLoading:r}=O(),l=(c=a==null?void 0:a.raids.find(h=>h.ended_at!=null))==null?void 0:c.raid_id,{data:s,isLoading:t}=S(l),{selectedValues:n}=_(),{data:i,isLoading:p,isError:j}=k(n["player-selector"]);return r?e.jsx("div",{className:"flex h-dvh justify-center",children:e.jsx(x,{})}):e.jsx(P,{children:e.jsxs("div",{className:"grid grid-cols-1 gap-6 text-left sm:grid-cols-2",children:[e.jsxs("div",{className:"col-span-2 row-span-1 row-start-1",children:[e.jsxs("div",{className:"mb-2 flex flex-col items-start justify-center",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Player Raid Profile"}),e.jsx("p",{children:"Select a player to show their raid info"}),e.jsx("p",{className:"text-xs italic",children:"Players are fetched based on previous raid"})]}),s?e.jsx(B,{overviewPlayers:s,isLoading:t}):e.jsx("p",{children:"No data yet. Complete a raid and try again."})]}),p?e.jsx("div",{className:"col-span-2 mx-auto justify-center",children:e.jsx(x,{label:"Loading player data..."})}):j?e.jsx("div",{className:"col-span-2 mx-auto justify-center",children:"Player data could not be fetched. Is the player currently in the clan?"}):i&&e.jsxs(e.Fragment,{children:[e.jsx(T,{playerProfile:i}),e.jsx(q,{cards:i.cards}),e.jsx("div",{className:"col-span-2 row-start-4",children:e.jsx(L,{cards:i.cards},"RaidCardsLevelChart")})]})]})})}export{G as default};