import r from"buffer";import e from"process";var t={};var n=e;var f=r;var o=f.Buffer;var a={};var i;for(i in f)f.hasOwnProperty(i)&&"SlowBuffer"!==i&&"Buffer"!==i&&(a[i]=f[i]);var p=a.Buffer={};for(i in o)o.hasOwnProperty(i)&&"allocUnsafe"!==i&&"allocUnsafeSlow"!==i&&(p[i]=o[i]);a.Buffer.prototype=o.prototype;p.from&&p.from!==Uint8Array.from||(p.from=function(r,e,t){if("number"===typeof r)throw new TypeError('The "value" argument must not be of type number. Received type '+typeof r);if(r&&"undefined"===typeof r.length)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);return o(r,e,t)});p.alloc||(p.alloc=function(r,e,t){if("number"!==typeof r)throw new TypeError('The "size" argument must be of type number. Received type '+typeof r);if(r<0||r>=2*(1<<30))throw new RangeError('The value "'+r+'" is invalid for option "size"');var n=o(r);e&&0!==e.length?"string"===typeof t?n.fill(e,t):n.fill(e):n.fill(0);return n});if(!a.kStringMaxLength)try{a.kStringMaxLength=n.binding("buffer").kStringMaxLength}catch(r){}if(!a.constants){a.constants={MAX_LENGTH:a.kMaxLength};a.kStringMaxLength&&(a.constants.MAX_STRING_LENGTH=a.kStringMaxLength)}t=a;var u=t;export default u;

