import e from"utilise/overwrite";import t from"utilise/header";import r from"utilise/extend";import o from"utilise/merge";import a from"utilise/attr";import i from"utilise/not";import n from"utilise/key";import d from"utilise/set";import l from"utilise/fn";import s from"utilise/is";import u from"utilise/log";var m="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var p={};function _nullRequire(e){var t=new Error("Cannot find module '"+e+"'");t.code="MODULE_NOT_FOUND";throw t}p=function data(e){w("creating");e.on("change.data").filter(([t,r])=>f("content-type","application/data")(e.resources[t])).filter(([e,t])=>t&&t.key).map(([t,r])=>e.resources[t].body.emit("change",r||null,y(k.in(["bubble"]))));e.types["application/data"]={header:"application/data",ext:"*.data.js",selector:e=>`[data~="${e.name}"]`,extract:e=>(g(`data`)(e)||"").split(" "),check:e=>k.obj(e.body),load(t){let r=_nullRequire(t.headers.path);r=r.default||r;r=k.fn(r)?r(e):r;t.headers["content-type"]=(this||m).header;e(b(t)(r));return e.resources[t.name]},parse(t){const r=e.resources[t.name]||{};c(t.headers)(r.headers);t.body=x()(t.body||[],r.body&&r.body.log,k.num(t.headers.log)?t.headers.log:-1);h(t.body.on)(O(r));t.body.on("change.bubble",r=>{e.emit("change",e.change=[t.name,r],y(k.in(["data"])));delete e.change});t.headers.loaded&&!t.headers.loading&&(t.headers.loading=Promise.resolve(t.headers.loaded(e,t)).then(()=>{delete t.headers.loading;return t}));return t}};return e};const h=e,f=t,c=r,b=o,g=a,y=i,v=n,x=d,_=l,k=s,w=u("[ri/types/data]"),O=v("body.on");var T=p;export default T;
