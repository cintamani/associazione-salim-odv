import o from"process";var r={};var a=o;function posix(o){return"/"===o.charAt(0)}function win32(o){var r=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;var a=r.exec(o);var i=a[1]||"";var n=Boolean(i&&":"!==i.charAt(1));return Boolean(a[2]||n)}r="win32"===a.platform?win32:posix;r.posix=posix;r.win32=win32;var i=r;const n=r.posix,s=r.win32;export default i;export{n as posix,s as win32};

