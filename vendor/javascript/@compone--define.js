import e from"@compone/class";import t from"@compone/event";import n from"utilise/client";var r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var s={};const i=e,a=t,o=n,noop=()=>{},l=o&&window.HTMLElement||class{},c=o&&window.customElements||{};s=function define(e,t){1==arguments.length&&(t=e,e=`anon-${c.anon++}`);if(t.hasOwnProperty("wrapper"))return t.wrapper;if(!e.includes("-"))return;if(!o)return wrap(i(t));let n=c.get(e);if(n){if(n.class==i(t))return n;n.class=i(t);const r=Array.from(document.querySelectorAll(e));r.map(e=>{e.disconnectedCallback();e.methods.map(t=>{delete e[t]});e.connectedCallback()})}else c.define(e,n=wrap(i(t)));return n};const wrap=e=>{e.hasOwnProperty("wrapper")||(e.wrapper=class extends l{constructor(){super();a(this||r);(this||r).ready=this.once("ready");(this||r).state=(this||r).state||{}}connectedCallback(){const{prototype:t}=e.wrapper.class;(this||r).methods=Object.getOwnPropertyNames(t).filter(e=>!(e in d)).map(e=>((this||r)[e]=t[e].bind(this||r),e));return Promise.resolve(((this||r).connected||noop).call(this||r,this||r,(this||r).state)).then(e=>{this.emit("ready");return this.render()})}render(){const{prototype:t}=e.wrapper.class;return(this||r).pending=(this||r).pending||(this||r).ready.then(()=>{delete(this||r).pending;return t.render.call(this||r,this||r,(this||r).state)})}disconnectedCallback(){((this||r).disconnected||noop).call(this||r,this||r,(this||r).state);this.dispatchEvent(new CustomEvent("disconnected"));(this||r).initialised=false}get(e){return this.querySelector(e)}});e.wrapper.class=e;return e.wrapper};const d={length:1,prototype:1,name:1,render:1};c.anon=c.anon||1;var p=s;export default p;
