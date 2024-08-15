var rt=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var r=(e,t,s)=>(rt(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},l=(e,t,s,i)=>(rt(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s);var f=(e,t,s)=>(rt(e,t,"access private method"),s);import{u as At,m as It,bs as bt,k as Mt,a as T,o as Bt,q as Pt,s as mt,bt as Ut,bu as _t,bv as D,bw as it,bx as tt,by as Lt,bz as vt,bA as yt,bB as kt,bC as Nt,bD as jt,bE as gt,bF as Ot,bG as Gt,bH as Wt,a5 as Dt,a6 as St,bI as Ht}from"./index-87c3a7cb.js";function zt(e){var t,s;const i=At(),[h,n]=It(e,bt.variantKeys),{ref:o,as:d,children:v,color:y="default",size:g="md",variant:u="solid",radius:S,isDisabled:p=!1,isIconOnly:w=!1,disableRipple:k=(t=i==null?void 0:i.disableRipple)!=null?t:!1,disableAnimation:C=(s=i==null?void 0:i.disableAnimation)!=null?s:!1,className:I,...M}=h,N=d||"div",J=Mt(o),X=T.useMemo(()=>bt({...n,className:I}),[Bt(n),I]),pt=T.useMemo(()=>({size:g,color:y,variant:u,radius:S,isIconOnly:w,isDisabled:p,disableAnimation:C,disableRipple:k,fullWidth:!!(e!=null&&e.fullWidth)}),[g,y,u,S,p,w,C,k,e==null?void 0:e.fullWidth]),Y=T.useCallback(()=>({role:"group",...M}),[M]);return{Component:N,children:v,domRef:J,context:pt,classNames:X,getButtonGroupProps:Y}}var Et=Pt((e,t)=>{const{Component:s,domRef:i,context:h,children:n,classNames:o,getButtonGroupProps:d}=zt({...e,ref:t});return mt.jsx(Ut,{value:h,children:mt.jsx(s,{ref:i,className:o,...d(),children:n})})});Et.displayName="NextUI.ButtonGroup";var he=Et,m,a,G,b,x,P,O,W,U,_,Q,F,E,L,A,j,H,at,z,nt,K,ot,V,ut,Z,ct,$,ht,q,lt,et,wt,Ct,Kt=(Ct=class extends _t{constructor(t,s){super();c(this,A);c(this,H);c(this,z);c(this,K);c(this,V);c(this,Z);c(this,$);c(this,q);c(this,et);c(this,m,void 0);c(this,a,void 0);c(this,G,void 0);c(this,b,void 0);c(this,x,void 0);c(this,P,void 0);c(this,O,void 0);c(this,W,void 0);c(this,U,void 0);c(this,_,void 0);c(this,Q,void 0);c(this,F,void 0);c(this,E,void 0);c(this,L,new Set);this.options=s,l(this,m,t),l(this,O,null),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(r(this,a).addObserver(this),Rt(r(this,a),this.options)?f(this,A,j).call(this):this.updateResult(),f(this,V,ut).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return dt(r(this,a),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return dt(r(this,a),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,f(this,Z,ct).call(this),f(this,$,ht).call(this),r(this,a).removeObserver(this)}setOptions(t,s){const i=this.options,h=r(this,a);if(this.options=r(this,m).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof D(this.options.enabled,r(this,a))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");f(this,q,lt).call(this),r(this,a).setOptions(this.options),i._defaulted&&!it(this.options,i)&&r(this,m).getQueryCache().notify({type:"observerOptionsUpdated",query:r(this,a),observer:this});const n=this.hasListeners();n&&Tt(r(this,a),h,this.options,i)&&f(this,A,j).call(this),this.updateResult(s),n&&(r(this,a)!==h||D(this.options.enabled,r(this,a))!==D(i.enabled,r(this,a))||tt(this.options.staleTime,r(this,a))!==tt(i.staleTime,r(this,a)))&&f(this,H,at).call(this);const o=f(this,z,nt).call(this);n&&(r(this,a)!==h||D(this.options.enabled,r(this,a))!==D(i.enabled,r(this,a))||o!==r(this,E))&&f(this,K,ot).call(this,o)}getOptimisticResult(t){const s=r(this,m).getQueryCache().build(r(this,m),t),i=this.createResult(s,t);return Zt(this,i)&&(l(this,b,i),l(this,P,this.options),l(this,x,r(this,a).state)),i}getCurrentResult(){return r(this,b)}trackResult(t,s){const i={};return Object.keys(t).forEach(h=>{Object.defineProperty(i,h,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(h),s==null||s(h),t[h])})}),i}trackProp(t){r(this,L).add(t)}getCurrentQuery(){return r(this,a)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const s=r(this,m).defaultQueryOptions(t),i=r(this,m).getQueryCache().build(r(this,m),s);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,s))}fetch(t){return f(this,A,j).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),r(this,b)))}createResult(t,s){var Y;const i=r(this,a),h=this.options,n=r(this,b),o=r(this,x),d=r(this,P),y=t!==i?t.state:r(this,G),{state:g}=t;let u={...g},S=!1,p;if(s._optimisticResults){const R=this.hasListeners(),st=!R&&Rt(t,s),Ft=R&&Tt(t,i,s,h);(st||Ft)&&(u={...u,...jt(g.data,t.options)}),s._optimisticResults==="isRestoring"&&(u.fetchStatus="idle")}let{error:w,errorUpdatedAt:k,status:C}=u;if(s.select&&u.data!==void 0)if(n&&u.data===(o==null?void 0:o.data)&&s.select===r(this,W))p=r(this,U);else try{l(this,W,s.select),p=s.select(u.data),p=gt(n==null?void 0:n.data,p,s),l(this,U,p),l(this,O,null)}catch(R){l(this,O,R)}else p=u.data;if(s.placeholderData!==void 0&&p===void 0&&C==="pending"){let R;if(n!=null&&n.isPlaceholderData&&s.placeholderData===(d==null?void 0:d.placeholderData))R=n.data;else if(R=typeof s.placeholderData=="function"?s.placeholderData((Y=r(this,_))==null?void 0:Y.state.data,r(this,_)):s.placeholderData,s.select&&R!==void 0)try{R=s.select(R),l(this,O,null)}catch(st){l(this,O,st)}R!==void 0&&(C="success",p=gt(n==null?void 0:n.data,R,s),S=!0)}r(this,O)&&(w=r(this,O),p=r(this,U),k=Date.now(),C="error");const I=u.fetchStatus==="fetching",M=C==="pending",N=C==="error",J=M&&I,X=p!==void 0;return{status:C,fetchStatus:u.fetchStatus,isPending:M,isSuccess:C==="success",isError:N,isInitialLoading:J,isLoading:J,data:p,dataUpdatedAt:u.dataUpdatedAt,error:w,errorUpdatedAt:k,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:u.dataUpdateCount>0||u.errorUpdateCount>0,isFetchedAfterMount:u.dataUpdateCount>y.dataUpdateCount||u.errorUpdateCount>y.errorUpdateCount,isFetching:I,isRefetching:I&&!M,isLoadingError:N&&!X,isPaused:u.fetchStatus==="paused",isPlaceholderData:S,isRefetchError:N&&X,isStale:ft(t,s),refetch:this.refetch}}updateResult(t){const s=r(this,b),i=this.createResult(r(this,a),this.options);if(l(this,x,r(this,a).state),l(this,P,this.options),r(this,x).data!==void 0&&l(this,_,r(this,a)),it(i,s))return;l(this,b,i);const h={},n=()=>{if(!s)return!0;const{notifyOnChangeProps:o}=this.options,d=typeof o=="function"?o():o;if(d==="all"||!d&&!r(this,L).size)return!0;const v=new Set(d??r(this,L));return this.options.throwOnError&&v.add("error"),Object.keys(r(this,b)).some(y=>{const g=y;return r(this,b)[g]!==s[g]&&v.has(g)})};(t==null?void 0:t.listeners)!==!1&&n()&&(h.listeners=!0),f(this,et,wt).call(this,{...h,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&f(this,V,ut).call(this)}},m=new WeakMap,a=new WeakMap,G=new WeakMap,b=new WeakMap,x=new WeakMap,P=new WeakMap,O=new WeakMap,W=new WeakMap,U=new WeakMap,_=new WeakMap,Q=new WeakMap,F=new WeakMap,E=new WeakMap,L=new WeakMap,A=new WeakSet,j=function(t){f(this,q,lt).call(this);let s=r(this,a).fetch(this.options,t);return t!=null&&t.throwOnError||(s=s.catch(Lt)),s},H=new WeakSet,at=function(){f(this,Z,ct).call(this);const t=tt(this.options.staleTime,r(this,a));if(vt||r(this,b).isStale||!yt(t))return;const i=kt(r(this,b).dataUpdatedAt,t)+1;l(this,Q,setTimeout(()=>{r(this,b).isStale||this.updateResult()},i))},z=new WeakSet,nt=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(r(this,a)):this.options.refetchInterval)??!1},K=new WeakSet,ot=function(t){f(this,$,ht).call(this),l(this,E,t),!(vt||D(this.options.enabled,r(this,a))===!1||!yt(r(this,E))||r(this,E)===0)&&l(this,F,setInterval(()=>{(this.options.refetchIntervalInBackground||Nt.isFocused())&&f(this,A,j).call(this)},r(this,E)))},V=new WeakSet,ut=function(){f(this,H,at).call(this),f(this,K,ot).call(this,f(this,z,nt).call(this))},Z=new WeakSet,ct=function(){r(this,Q)&&(clearTimeout(r(this,Q)),l(this,Q,void 0))},$=new WeakSet,ht=function(){r(this,F)&&(clearInterval(r(this,F)),l(this,F,void 0))},q=new WeakSet,lt=function(){const t=r(this,m).getQueryCache().build(r(this,m),this.options);if(t===r(this,a))return;const s=r(this,a);l(this,a,t),l(this,G,t.state),this.hasListeners()&&(s==null||s.removeObserver(this),t.addObserver(this))},et=new WeakSet,wt=function(t){Ot.batch(()=>{t.listeners&&this.listeners.forEach(s=>{s(r(this,b))}),r(this,m).getQueryCache().notify({query:r(this,a),type:"observerResultsUpdated"})})},Ct);function Vt(e,t){return D(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Rt(e,t){return Vt(e,t)||e.state.data!==void 0&&dt(e,t,t.refetchOnMount)}function dt(e,t,s){if(D(t.enabled,e)!==!1){const i=typeof s=="function"?s(e):s;return i==="always"||i!==!1&&ft(e,t)}return!1}function Tt(e,t,s,i){return(e!==t||D(i.enabled,e)===!1)&&(!s.suspense||e.state.status!=="error")&&ft(e,s)}function ft(e,t){return D(t.enabled,e)!==!1&&e.isStaleByTime(tt(t.staleTime,e))}function Zt(e,t){return!it(e.getCurrentResult(),t)}var xt=T.createContext(!1),$t=()=>T.useContext(xt);xt.Provider;function qt(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var Jt=T.createContext(qt()),Xt=()=>T.useContext(Jt),Yt=(e,t)=>{(e.suspense||e.throwOnError)&&(t.isReset()||(e.retryOnMount=!1))},te=e=>{T.useEffect(()=>{e.clearReset()},[e])},ee=({result:e,errorResetBoundary:t,throwOnError:s,query:i})=>e.isError&&!t.isReset()&&!e.isFetching&&i&&Gt(s,[e.error,i]),se=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},re=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,ie=(e,t,s)=>t.fetchOptimistic(e).catch(()=>{s.clearReset()});function ae(e,t,s){var y,g,u,S;const i=Wt(s),h=$t(),n=Xt(),o=i.defaultQueryOptions(e);(g=(y=i.getDefaultOptions().queries)==null?void 0:y._experimental_beforeQuery)==null||g.call(y,o),o._optimisticResults=h?"isRestoring":"optimistic",se(o),Yt(o,n),te(n);const[d]=T.useState(()=>new t(i,o)),v=d.getOptimisticResult(o);if(T.useSyncExternalStore(T.useCallback(p=>{const w=h?()=>{}:d.subscribe(Ot.batchCalls(p));return d.updateResult(),w},[d,h]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),T.useEffect(()=>{d.setOptions(o,{listeners:!1})},[o,d]),re(o,v))throw ie(o,d,n);if(ee({result:v,errorResetBoundary:n,throwOnError:o.throwOnError,query:i.getQueryCache().get(o.queryHash)}))throw v.error;return(S=(u=i.getDefaultOptions().queries)==null?void 0:u._experimental_afterQuery)==null||S.call(u,o,v),o.notifyOnChangeProps?v:d.trackResult(v)}function Qt(e,t){return ae(e,Kt,t)}const le={ArmorDamage:"Armor Damage +25%",HeadDamage:"Head Damage +30%",BurstDamage:"Burst Damage +30%",AfflictedDamage:"Affliction Damage +30%",AllRaidDamage:"All Raid Damage +15%",BurstChance:"Burst Chance +30%",AfflictedDuration:"Affliction Duration +40%",ChestDamage:"Torso Damage +30%",LimbDamage:"Limb Damage +30%",AfflictedChance:"Affliction Chance +30%",RaidAttackDuration:"Attack Duration +3s",BodyDamage:"Body Damage +20%",SupportEffect:"All Support Effects +15%"},de=e=>["st","nd","rd"][((e+90)%100-10)%10-1]||"th",fe=e=>new Date(e+".000Z").toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"}),pe=(e,t)=>`${e} ⦁ Zone ${t}`,B={"Tier One":3,"Tier Two":4,"Tier Three":4,"Tier Four":5,"Master Tier":6},ne=e=>{switch(e){case"Tier One":return B["Tier One"].valueOf();case"Tier Two":return B["Tier Two"].valueOf();case"Tier Three":return B["Tier Three"].valueOf();case"Tier Four":return B["Tier Four"].valueOf();case"Master Tier":return B["Master Tier"].valueOf();default:return B["Master Tier"].valueOf()}};function be(e){return Qt({queryKey:["cycle_data",e],queryFn:async()=>await oe(e),select:t=>{const s=t.raid_id,i=t.cycles.sort((h,n)=>h.cycle>n.cycle?1:-1);return{raid_id:s,cycles:i}}})}async function oe(e){let t="";const s=new URLSearchParams;e&&s.append("raid_id",e),s&&(t+="?",t+=s);const i=St.cycle_data+t;return await Dt.get(i)}function me(){return Qt({queryKey:["raid_list"],queryFn:async()=>await Dt.get(St.raid_list),select(e){const t=e.raids.map(s=>{let i="Master Tier";return s.tier==="1"?i="Tier One":s.tier==="2"?i="Tier Two":s.tier==="3"?i="Tier Three":s.tier==="4"?i="Tier Four":s.tier==="9999"&&(i="Master Tier"),{...s,tier:i,attacksPerTier:ne(i)}});return e.raids=t,e},placeholderData:Ht})}export{Kt as Q,le as R,de as a,me as b,fe as c,he as d,Qt as e,be as f,pe as g,ae as u};
