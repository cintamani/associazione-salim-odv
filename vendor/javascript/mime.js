import e from"path";import t from"fs";import i from"./types.json.js";import o from"process";var s="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var n={};var r=o;var a=e;var p=t;function Mime(){(this||s).types=Object.create(null);(this||s).extensions=Object.create(null)}Mime.prototype.define=function(e){for(var t in e){var i=e[t];for(var o=0;o<i.length;o++){r.env.DEBUG_MIME&&(this||s).types[i[o]]&&console.warn(((this||s)._loading||"define()").replace(/.*\//,""),'changes "'+i[o]+'" extension type from '+(this||s).types[i[o]]+" to "+t);(this||s).types[i[o]]=t}(this||s).extensions[t]||((this||s).extensions[t]=i[0])}};Mime.prototype.load=function(e){(this||s)._loading=e;var t={},i=p.readFileSync(e,"ascii"),o=i.split(/[\r\n]+/);o.forEach((function(e){var i=e.replace(/\s*#.*|^\s*|\s*$/g,"").split(/\s+/);t[i.shift()]=i}));this.define(t);(this||s)._loading=null};Mime.prototype.lookup=function(e,t){var i=e.replace(/^.*[\.\/\\]/,"").toLowerCase();return(this||s).types[i]||t||(this||s).default_type};Mime.prototype.extension=function(e){var t=e.match(/^\s*([^;\s]*)(?:;|\s|$)/)[1].toLowerCase();return(this||s).extensions[t]};var l=new Mime;l.define(i);l.default_type=l.lookup("bin");l.Mime=Mime;l.charsets={lookup:function(e,t){return/^text\/|^application\/(javascript|json)/.test(e)?"UTF-8":t}};n=l;var f=n;export default f;

