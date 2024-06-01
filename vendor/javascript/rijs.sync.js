import e from"xrs/client";import t from"utilise/is";import s from"utilise/to";import r from"utilise/set";import i from"utilise/not";import n from"utilise/key";import o from"utilise/str";import a from"utilise/keys";import m from"utilise/time";import u from"utilise/extend";import l from"utilise/values";import p from"utilise/flatten";import c from"utilise/emitterify";import f from"buffer";var d="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var b={};var h=f.Buffer;b=function sync(t,{}={},{xrs:s=e}={}){t.server=s();t.send=send(t);t.subscribe=subscribe(t);t.subscriptions={};t.get=get(t);t.upload=upload(t);t.upload.id=0;t.server.on("recv").map((e,s,r)=>cache(t)(e,s,r));return t};const send=({server:e})=>(t,s,r)=>t instanceof Blob?e.send(t,s):y.obj(t)?e.send(t):e.send({name:t,type:s,value:r});const get=e=>(t,s)=>e.subscribe(t,s).filter((e,t,s)=>s.source.emit("stop")).start();const cache=(e,t,s)=>r=>{i&&r.name&&i!=r.name&&e.link(i,r.name);const i=r.name=r.name||t;r.type||(r.type="update");y.def(s)&&(r.key=`${s}.${w(r.key)}`);r.key||"update"!=r.type?g(r)(e.resources[i]?e(i):e(i,{})):e(body(r));e.change=r;return k(s)(e(i))};const subscribe=e=>(t,s)=>{if(y.arr(t))return merge(t.map(t=>e.subscribe(t,s))).map(e=>t.reduce((t,s,r)=>(t[s]=e[r],t),{}));e.subscriptions[t]=e.subscriptions[t]||{};if(y.arr(s))return merge(s.map(s=>e.subscribe(t,s))).map(r=>k(s)(e(t)));const r=R().on("subscription");r.on("stop").each((n,o,a)=>{i.subs.splice(i.subs.indexOf(r),1);B(1e3,()=>{if(!i.subs.length){i.source.emit("stop");e.subscriptions[t][s]=void 0;r.emit("end")}})});e.subscriptions[t][s]&&r.on("start").map(()=>k(s)(e(t))).filter(y.def).map(e=>r.next(e));const i=e.subscriptions[t][s]=e.subscriptions[t][s]||e.send(t,"SUBSCRIBE",s).map(cache(e,t,s)).each(t=>{[].concat(i.subs).map(e=>e.next(t));delete e.change});i.subs=i.subs||[];i.subs.push(r);return r};const upload=e=>(t,s)=>{let r=++e.upload.id,i={},n=0,next=()=>{if(!o.length)return true;const{field:t,filename:s,i:i,blob:m}=o.shift();return e.send(m,{filename:s,field:t,i:i,index:r}).on("progress",({received:e,total:t})=>a.emit("progress",{total:n,received:n-(m.size-e)-o.reduce((e,t)=>e+=t.blob.size,0)})).then(next)};const o=z(s).map(e=>(i[e]=s[e],e)).filter(e=>s[e]instanceof FileList).map(e=>{i[e]=[];return v.arr(s[e]).map(e=>(n+=e.size,e)).map((t,s)=>({field:e,filename:t.name,i:s,blob:t,sent:0}))}).reduce(O,[]);const a=e.send({files:o.length,type:"PREUPLOAD",fields:i,index:r,size:n,name:t}).once("sent",next);return a};const body=({name:e,value:t,headers:s})=>({name:e,headers:s,body:t});const y=t,v=s,g=r,x=i,k=n,w=o,z=a,B=m,$=u,A=l,O=p,R=c,all=e=>arr(document.querySelectorAll(e)),{min:S,pow:U}=Math,{assign:j}=Object,nametype=(e,t)=>`(${e?e+", ":""}${t||""})`,stream=e=>new null("stream").Readable({read(){this.push(e.length?new h(new Uint8Array(e.shift())):null)}});const merge=e=>{const t=R().on("merged");t.streams=e;e.map((s,r)=>s.each(r=>{s.latest=r;const i=e.map(e=>e.latest);i.every(y.def)&&t.next(i)}));t.once("start").map(t=>e.map(e=>e.source.emit("start")));t.once("stop").map(t=>e.map(e=>e.source.emit("stop")));return t};var E=b;export default E;
