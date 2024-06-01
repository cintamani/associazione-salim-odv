var e="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var t={};t=stringify;stringify.default=stringify;stringify.stable=deterministicStringify;stringify.stableStringify=deterministicStringify;var i="[...]";var r="[Circular]";var n=[];var f=[];function defaultOptions(){return{depthLimit:Number.MAX_SAFE_INTEGER,edgesLimit:Number.MAX_SAFE_INTEGER}}function stringify(e,t,i,r){"undefined"===typeof r&&(r=defaultOptions());decirc(e,"",0,[],void 0,0,r);var c;try{c=0===f.length?JSON.stringify(e,t,i):JSON.stringify(e,replaceGetterValues(t),i)}catch(e){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{while(0!==n.length){var a=n.pop();4===a.length?Object.defineProperty(a[0],a[1],a[3]):a[0][a[1]]=a[2]}}return c}function setReplace(e,t,i,r){var c=Object.getOwnPropertyDescriptor(r,i);if(void 0!==c.get)if(c.configurable){Object.defineProperty(r,i,{value:e});n.push([r,i,t,c])}else f.push([t,i,e]);else{r[i]=e;n.push([r,i,t])}}function decirc(e,t,n,f,c,a,l){a+=1;var o;if("object"===typeof e&&null!==e){for(o=0;o<f.length;o++)if(f[o]===e){setReplace(r,e,t,c);return}if("undefined"!==typeof l.depthLimit&&a>l.depthLimit){setReplace(i,e,t,c);return}if("undefined"!==typeof l.edgesLimit&&n+1>l.edgesLimit){setReplace(i,e,t,c);return}f.push(e);if(Array.isArray(e))for(o=0;o<e.length;o++)decirc(e[o],o,o,f,e,a,l);else{var s=Object.keys(e);for(o=0;o<s.length;o++){var u=s[o];decirc(e[u],u,o,f,e,a,l)}}f.pop()}}function compareFunction(e,t){return e<t?-1:e>t?1:0}function deterministicStringify(e,t,i,r){"undefined"===typeof r&&(r=defaultOptions());var c=deterministicDecirc(e,"",0,[],void 0,0,r)||e;var a;try{a=0===f.length?JSON.stringify(c,t,i):JSON.stringify(c,replaceGetterValues(t),i)}catch(e){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{while(0!==n.length){var l=n.pop();4===l.length?Object.defineProperty(l[0],l[1],l[3]):l[0][l[1]]=l[2]}}return a}function deterministicDecirc(e,t,f,c,a,l,o){l+=1;var s;if("object"===typeof e&&null!==e){for(s=0;s<c.length;s++)if(c[s]===e){setReplace(r,e,t,a);return}try{if("function"===typeof e.toJSON)return}catch(e){return}if("undefined"!==typeof o.depthLimit&&l>o.depthLimit){setReplace(i,e,t,a);return}if("undefined"!==typeof o.edgesLimit&&f+1>o.edgesLimit){setReplace(i,e,t,a);return}c.push(e);if(Array.isArray(e))for(s=0;s<e.length;s++)deterministicDecirc(e[s],s,s,c,e,l,o);else{var u={};var p=Object.keys(e).sort(compareFunction);for(s=0;s<p.length;s++){var d=p[s];deterministicDecirc(e[d],d,s,c,e,l,o);u[d]=e[d]}if("undefined"===typeof a)return u;n.push([a,t,e]);a[t]=u}c.pop()}}function replaceGetterValues(t){t="undefined"!==typeof t?t:function(e,t){return t};return function(i,r){if(f.length>0)for(var n=0;n<f.length;n++){var c=f[n];if(c[1]===i&&c[0]===r){r=c[2];f.splice(n,1);break}}return t.call(this||e,i,r)}}var c=t;export{c as default};

