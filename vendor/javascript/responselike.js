import*as e from"stream";import*as r from"lowercase-keys";import t from"buffer";var s="default"in e?e.default:e;var o="default"in r?r.default:r;var a={};var u=t.Buffer;const n=s.Readable;const f=o;class Response extends n{constructor(e,r,t,s){if("number"!==typeof e)throw new TypeError("Argument `statusCode` should be a number");if("object"!==typeof r)throw new TypeError("Argument `headers` should be an object");if(!(t instanceof u))throw new TypeError("Argument `body` should be a buffer");if("string"!==typeof s)throw new TypeError("Argument `url` should be a string");super();this.statusCode=e;this.headers=f(r);this.body=t;this.url=s}_read(){this.push(this.body);this.push(null)}}a=Response;var d=a;export{d as default};

