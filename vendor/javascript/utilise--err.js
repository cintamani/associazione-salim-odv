import"./client.js";import r from"./owner.js";import o from"./is.js";import e from"./to.js";var t={};var n=o,i=e,a=r;t=function err(r){return function(o){if(!a.console||!console.error.apply)return o;n.arr(arguments[2])&&(arguments[2]=arguments[2].length);var e=i.arr(arguments),t="[err]["+(new Date).toISOString()+"]"+r;e.unshift(t.red?t.red:t);return console.error.apply(console,e),o}};var s=t;export default s;

