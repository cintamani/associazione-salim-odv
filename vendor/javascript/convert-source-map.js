import e from"fs";import r from"path";import t from"buffer";var o={};var n=t.Buffer;var m=e;var a=r;var i=/^\s*\/(?:\/|\*)[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+;)?base64,(.*)$/gm;var p=/(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^\*]+?)[ \t]*(?:\*\/){1}[ \t]*$)/gm;function decodeBase64(e){return new n(e,"base64").toString()}function stripComment(e){return e.split(",").pop()}function readFromFileMap(e,r){var t=p.exec(e);p.lastIndex=0;var o=t[1]||t[2];var n=a.join(r,o);try{return m.readFileSync(n,"utf8")}catch(e){throw new Error("An error occurred while trying to read the map file at "+n+"\n"+e)}}function Converter(e,r){r=r||{};r.isFileComment&&(e=readFromFileMap(e,r.commentFileDir));r.hasComment&&(e=stripComment(e));r.isEncoded&&(e=decodeBase64(e));(r.isJSON||r.isEncoded)&&(e=JSON.parse(e));this.sourcemap=e}function convertFromLargeSource(e){var r=e.split("\n");var t;for(var n=r.length-1;n>0;n--){t=r[n];if(~t.indexOf("sourceMappingURL=data:"))return o.fromComment(t)}}Converter.prototype.toJSON=function(e){return JSON.stringify(this.sourcemap,null,e)};Converter.prototype.toBase64=function(){var e=this.toJSON();return new n(e).toString("base64")};Converter.prototype.toComment=function(e){var r=this.toBase64();var t="sourceMappingURL=data:application/json;base64,"+r;return e&&e.multiline?"/*# "+t+" */":"//# "+t};Converter.prototype.toObject=function(){return JSON.parse(this.toJSON())};Converter.prototype.addProperty=function(e,r){if(this.sourcemap.hasOwnProperty(e))throw new Error("property %s already exists on the sourcemap, use set property instead");return this.setProperty(e,r)};Converter.prototype.setProperty=function(e,r){this.sourcemap[e]=r;return this};Converter.prototype.getProperty=function(e){return this.sourcemap[e]};o.fromObject=function(e){return new Converter(e)};o.fromJSON=function(e){return new Converter(e,{isJSON:true})};o.fromBase64=function(e){return new Converter(e,{isEncoded:true})};o.fromComment=function(e){e=e.replace(/^\/\*/g,"//").replace(/\*\/$/g,"");return new Converter(e,{isEncoded:true,hasComment:true})};o.fromMapFileComment=function(e,r){return new Converter(e,{commentFileDir:r,isFileComment:true,isJSON:true})};o.fromSource=function(e,r){if(r){var t=convertFromLargeSource(e);return t||null}var n=e.match(i);i.lastIndex=0;return n?o.fromComment(n.pop()):null};o.fromMapFileSource=function(e,r){var t=e.match(p);p.lastIndex=0;return t?o.fromMapFileComment(t.pop(),r):null};o.removeComments=function(e){i.lastIndex=0;return e.replace(i,"")};o.removeMapFileComments=function(e){p.lastIndex=0;return e.replace(p,"")};Object.defineProperty(o,"commentRegex",{get:function getCommentRegex(){i.lastIndex=0;return i}});Object.defineProperty(o,"mapFileCommentRegex",{get:function getMapFileCommentRegex(){p.lastIndex=0;return p}});const u=o.fromObject,s=o.fromJSON,c=o.fromBase64,f=o.fromComment,l=o.fromMapFileComment,v=o.fromSource,d=o.fromMapFileSource,C=o.removeComments,g=o.removeMapFileComments,h=o.commentRegex,y=o.mapFileCommentRegex;export default o;export{h as commentRegex,c as fromBase64,f as fromComment,s as fromJSON,l as fromMapFileComment,d as fromMapFileSource,u as fromObject,v as fromSource,y as mapFileCommentRegex,C as removeComments,g as removeMapFileComments};
