(()=>{"use strict";var e={78765:function(e,t){var r=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0});const o=()=>{let e=chrome.runtime.connect();return e.onMessage.addListener(e=>{const{from:t}=e,o=r(e,["from"]);"helperProxy"===t&&window.postMessage(Object.assign({from:"helper"},o),"https://bilibilihelper.com/")}),e.onDisconnect.addListener(()=>{e=null}),e};let n;window.addEventListener("message",e=>{const t=e.data,{from:s}=t,i=r(t,["from"]);"website"===s&&(n||(n=o()),n.postMessage(Object.assign({from:s},i)))})}},t={};e[78765](0,t)})();