"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[110],{98767:(e,t,i)=>{i.r(t)},43255:(e,t,i)=>{i.r(t)},12740:(e,t,i)=>{i.r(t)},73545:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const r=i(4822),a=i(15141),s=i(32699);class l extends a.Item{constructor(){super(null,"app"),this.__itemType="app",this.initialStatuses={},this.onReceivedMessageByChromeInterface=(e,t,i)=>{if(!(0,s.isPlainObject)(e)||!e.target)return!0;const{target:o,event:r}=e,a=n(e,["target","event"]);return this.emit(o,r,a,i,t),!0}}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){chrome.runtime.onMessage.addListener(this.onReceivedMessageByChromeInterface),this.addListener("setInitialStatus",(e,t,i)=>{this.logger.log("setInitialStatus",e,t),e.name&&e.value&&(this.initialStatuses[e.name]=e.value),i()}),this.addListener("getInitialStatus",(e,t,i)=>{i(this.initialStatuses)}),this.addListener("getSetting",(e,t,i)=>{if(0===e.filter(e=>"string"===typeof e).length)return i(r.APP_PERMISSION_ERRORS.INVALID_ITEM_NAME);if(1===e.length){const t=a.Item.loadedItems.get(e);return i(t?t.settings:r.APP_PERMISSION_ERRORS.UNDEFINED_ITEM)}if(e.length>1){const t=e.map(e=>a.Item.loadedItems.has(e)?[e,a.Item.loadedItems.get(e).settings]:(this.logger.warn(r.APP_PERMISSION_ERRORS.UNDEFINED_ITEM,e),!1)).filter(Boolean);return i(t)}}),this.addListener("getSettingsForUpload",(e,t,i)=>{const n=Array.from(a.Item.loadedItems.values());Promise.all(n.map(e=>o(this,void 0,void 0,(function*(){const t=yield e.getSettingsForUpload(void 0,void 0,e=>e);if(t)return{[e.names.item]:t}})))).then(e=>e.filter(Boolean)).then(e=>{const t=Object.values(e).reduce((e,t)=>{if(t){const[i,o]=Object.entries(t)[0];o&&(e[i]=o)}return e},{});i(t)})}),this.addListener("setSettingsFromCloud",(e,t,i)=>{const{settings:o}=e;if(!o)return i(!1);Promise.all(Array.from(a.Item.loadedItems.values()).map(e=>{if(e.names.item in o&&e.setSettingsFromCloud)return e.setSettingsFromCloud(o[e.names.item])})).then(()=>{i(!0)})})}))}onUninstall(){const e=Object.create(null,{onUninstall:{get:()=>super.onUninstall}});return o(this,void 0,void 0,(function*(){e.onUninstall.call(this),chrome.runtime.onMessage.addListener(this.onReceivedMessageByChromeInterface)}))}}t.App=l},37740:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.ClockController=t.CLOCK_ERRORS=t.clockErrorFactory=void 0;const n=i(20572),r=i(35611),a=i(36605);t.clockErrorFactory=new a.ItemErrorFactory("clockController"),t.CLOCK_ERRORS={LACK_OF_PERMISSION:t.clockErrorFactory.create("lackPermission"),CREATE_FOCUS_FAILED:t.clockErrorFactory.create("createFocusFailed")};class s extends r.Task{constructor(e,t,i,o,n){super(e,t,i,o,n)}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){return new Promise(e=>{chrome.alarms.get(this.name,t=>o(this,void 0,void 0,(function*(){if(t){const t=yield this.clear();e(!t)}else e(!1)})))})}))}onLaunch(e){return o(this,void 0,void 0,(function*(){chrome.alarms.create(this.name,this.data)}))}onPause(){return o(this,void 0,void 0,(function*(){yield this.clear()}))}onClear(){return o(this,void 0,void 0,(function*(){return new Promise(e=>{chrome.alarms.clear(this.name,t=>{t&&(this.active=!1),e(t)})})}))}}class l extends n.Controller{constructor(e){super(e,"clockController",{dependencies:["permissionController"],settings:{on:!0}}),this.hasPermission=!1,this.tasks=new Map,this.create=(e,i,n)=>o(this,void 0,void 0,(function*(){if(!this.hasPermission)return n(t.CLOCK_ERRORS.LACK_OF_PERMISSION);const{name:i,alarmInfo:o,tags:r=[],focus:a=!1,callback:l}=e,c=this.tasks.has(i)?this.tasks.get(i):null;if(c)if(c.active){if(a)return this.__clear(i).then(e=>{if(e){const e=new s(this,i,o,l,{tags:r});e.launch(),this.tasks.set(i,e)}n(e)}).catch(()=>{n(t.CLOCK_ERRORS.CREATE_FOCUS_FAILED)});n(!1)}else c.setDataMap(o),c.setCallback(o),c.launch(),n(!0);else{const e=new s(this,i,o,l,{tags:r});e.launch(),this.tasks.set(i,e),n(!0)}})),this.query=(e,t,i)=>o(this,void 0,void 0,(function*(){const{name:t,tags:o}=e,n=[];if(this.tasks.has(t)&&n.push(this.tasks.get(t)),o&&o.length>0){const e=Array.from(this.tasks.values()).filter(e=>{if(e.tags&&e.tags.length>0)return o.filter(t=>e.tags.includes(t)).length>0});n.push(...e)}n.length>0?i(n):i(!1)})),this.clear=(e,t,i)=>o(this,void 0,void 0,(function*(){return this.__clear(e.name).then(e=>{i(e)})})),this.pause=(e,t,i)=>o(this,void 0,void 0,(function*(){const{filterTags:o=[],name:n}=e;n||o&&o.length>0?yield this.query({name:n,tags:o},t,e=>{e&&e.length>0&&e.forEach(e=>e.pause()),i(!0)}):i(!1)})),this.relaunch=(e,i,n)=>o(this,void 0,void 0,(function*(){if(!this.hasPermission)return n(t.CLOCK_ERRORS.LACK_OF_PERMISSION);let o=e.tags||[],r=e.name;o.length>0?yield this.query({name:r,tags:o},i,e=>{e&&e.length>0&&e.forEach(e=>e.launch()),n(!0)}):(Array.from(this.tasks.values()).forEach(e=>{e.launch()}),n(!0))})),this.onAlarmCallback=e=>{const t=this.tasks.get(e.name);t&&t.active&&(this.logger.log(`clock controller's clock: ${e.name} is activated`,e),t.runCallback())},this.__clear=e=>o(this,void 0,void 0,(function*(){if(this.tasks.has(e)){const t=this.tasks.get(e);return this.tasks.delete(e),t.clear()}return!0}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){yield this.emit("permissionController","containPermissions",["alarms"],e=>o(this,void 0,void 0,(function*(){this.hasPermission=e}))),this.addListener("permissionUpdated",e=>{const{command:t}=e;if("add"===t||"remove"===t){const t=e.permissions.has("alarms")!==this.hasPermission;t&&(this.hasPermission=!this.hasPermission)}}),this.addListener("create",this.create),this.addListener("query",this.query),this.addListener("clear",this.clear),this.addListener("pause",this.pause),this.addListener("relaunch",this.relaunch)}))}onLaunch(){return o(this,void 0,void 0,(function*(){chrome.alarms.onAlarm.addListener(this.onAlarmCallback)}))}}t.ClockController=l},98683:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.CookieController=void 0;const n=i(20572),r=i(35611);class a extends r.Task{constructor(e,t,i,o,n){super(e,t,i,o,n)}onBeforeRunCallback({removed:e,cookie:t,cause:i}){if(this.data&&this.data.filter){const{name:i,domain:o}=t,n=!this.data.filter.removed||e,r=!this.data.filter.names||this.data.filter.names.includes(i),a=!this.data.filter.domain||this.data.filter.domain.match(o);return n&&r&&a&&this.active}return this.active}onLaunch(){return o(this,void 0,void 0,(function*(){chrome.cookies.onChanged.addListener(this.runCallback)}))}onPause(){return o(this,void 0,void 0,(function*(){this.active=!1}))}onClear(){return o(this,void 0,void 0,(function*(){chrome.cookies.onChanged.removeListener(this.runCallback)}))}}class s extends n.Controller{constructor(e){super(e,"cookieController",{dependencies:["permissionController"],settings:{on:!0}}),this.hasPermission=!1,this.tasks=new Map,this.onLaunch=()=>o(this,void 0,void 0,(function*(){})),this.create=(e,t,i)=>o(this,void 0,void 0,(function*(){const{name:t,data:o,callback:n,options:r}=e;if(t){const e=new a(this,t,o,n,r);this.tasks.set(t,e),yield e.launch(),i(!0)}else i(!1)})),this.createCookie=(e,t,i)=>o(this,void 0,void 0,(function*(){const{name:t,domain:o,expirationDate:n,httpOnly:r,path:a,sameSite:s,secure:l,storeId:c,url:d,value:u}=e;void 0!==d&&void 0!==u?chrome.cookies.set({name:t,domain:o,expirationDate:n,httpOnly:r,path:a,sameSite:s,secure:l,storeId:c,url:d,value:u},e=>{i(e)}):i(!1)})),this.clear=(e,t,i)=>o(this,void 0,void 0,(function*(){const{name:t}=e,o=this.tasks.get(t);o&&(yield o.clear()),i(!0)}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){yield this.emit("permissionController","containPermissions",["cookies"],e=>o(this,void 0,void 0,(function*(){this.hasPermission=e}))),this.addListener("permissionUpdated",e=>{const{command:t}=e;if("add"===t||"remove"===t){const t=e.permissions.has("cookies")!==this.hasPermission;t&&(this.hasPermission=!this.hasPermission)}}),this.addListener("get",(e,t,i)=>{const{url:o,name:n}=e;this.getLocalCookie(o,n).then(e=>i(e))}),this.addListener("create",this.create),this.addListener("clear",this.clear),this.addListener("createCookie",this.createCookie),this.addListener("getLocalUId",(e,t,i)=>{this.hasPermission?this.getLocalUserId().then(i):i(!1)})}))}getLocalUserId(){return o(this,void 0,void 0,(function*(){return this.getLocalCookie("https://www.bilibili.com/","DedeUserID")}))}getLocalCookie(e,t){return o(this,void 0,void 0,(function*(){return new Promise(i=>{chrome.cookies.get({url:e,name:t},e=>{e&&(1e3*e.expirationDate>Date.now()||!e.expirationDate)?i(e.value):i(!1)})})}))}}t.CookieController=s},10401:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.DownloadController=void 0;const n=i(20572),r=i(35611);class a extends r.Task{constructor(e,t,i,n,r){super(e,t,i,n,r),this.onLaunch=()=>o(this,void 0,void 0,(function*(){chrome.downloads.download(this.data,e=>{this.downloadItemId=e,this.callback instanceof Function&&this.callback(e)})})),this.cancel=()=>o(this,void 0,void 0,(function*(){chrome.downloads.cancel(this.downloadItemId,this.cancelCallback)})),this.cancelCallback=i.cancelCallback}}class s extends n.Controller{constructor(e){super(e,"downloadController",{dependencies:["permissionController"],settings:{on:!0}}),this.hasPermission=!1,this.tasks=new Map,this.onLaunch=()=>o(this,void 0,void 0,(function*(){})),this.create=(e,t,i)=>{const{name:o,data:n,callback:r}=e,s=this.tasks.get(o);if(!s){const e=new a(this,o,n,r);this.tasks.set(o,e),i(!0),e.launch().then(()=>{this.tasks.delete(o)})}},this.clear=(e,t,i)=>o(this,void 0,void 0,(function*(){const{name:t}=e;return this.__clear(t).then(e=>{i(e)})})),this.__clear=e=>o(this,void 0,void 0,(function*(){if(this.tasks.has(e)){const t=this.tasks.get(e);return this.tasks.delete(e),t.clear()}return!0}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){yield this.emit("permissionController","containPermissions",["downloads"],e=>o(this,void 0,void 0,(function*(){this.hasPermission=e}))),this.addListener("permissionUpdated",e=>{const{command:t}=e;if("add"===t||"remove"===t){const t=e.permissions.has("downloads")!==this.hasPermission;t&&(this.hasPermission=!this.hasPermission)}}),this.addListener("create",this.create),this.addListener("clear",this.clear)}))}}t.DownloadController=s},61157:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GraphQLError=void 0;class i{constructor(e,t){this.message=e,Object.assign(this,t)}toJSON(){return Object.assign({},this)}}t.GraphQLError=i},91145:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=i(69872);new o.DFGraphQLFactory("AD");t["default"]={}},83561:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=i(69872);new o.DFGraphQLFactory("APP");t["default"]={}},40442:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=i(69872),n=new o.DFGraphQLFactory("BILIBILI_ACCOUNT");t["default"]={idHasNotBound:n.create("ID_NOT_BINDED",-1,"\u672a\u6ce8\u518c"),idHasBound:n.create("ID_BINDED",-2,"\u8be5b\u7ad9\u8d26\u53f7\u5df2\u7ecf\u6ce8\u518c\u8fc7\u52a9\u624b\u8d26\u53f7"),bindError:n.create("BIND_ERROR",-4,"\u6ce8\u518c\u9519\u8bef"),cookieError:n.create("COOKIE_ERROR",-5,"Cookie\u9519\u8bef"),rebindError:n.create("REBIND_ERROR",-6,"\u91cd\u65b0\u6ce8\u518c\u5931\u8d25"),unbindError:n.create("UNBIND_ERROR",-7,"\u89e3\u7ed1\u5931\u8d25"),idCookieMisMatch:n.create("ID_COOLIE_ARE_MISMATCH",-8,"UID\u4e0eCookie\u4e0d\u5339\u914d"),notSignOut:n.create("NEED_SIGNOUT",-9,"\u672a\u767b\u51fa"),notSignIn:n.create("NEED_SIGNIN",-10,"\u672a\u767b\u5f55"),needRebind:n.create("NEED_REBIND",-11,"\u9700\u8981\u91cd\u65b0\u7ed1\u5b9a"),loginError:n.create("LOGIN_ERROR",-12,"\u767b\u5f55\u5931\u8d25"),wrongPassword:n.create("WRONG_PASSWORD",-13,"\u5bc6\u7801\u9519\u8bef"),needFillPassword:n.create("NEED_FILL_PASSWORD",-14,"\u9700\u8981\u8865\u5145\u5bc6\u7801")}},3492:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=i(69872),n=new o.DFGraphQLFactory("BILIBILI_HELPER_ACCOUNT");t["default"]={idHasNotBound:n.create("ID_NOT_BOUND",-1,"\u672a\u6ce8\u518c"),idHasBound:n.create("ID_BOUND",-2,"\u8be5b\u7ad9\u8d26\u53f7\u5df2\u7ecf\u6ce8\u518c\u8fc7\u52a9\u624b\u8d26\u53f7"),bindError:n.create("BIND_ERROR",-4,"\u6ce8\u518c\u9519\u8bef"),cookieError:n.create("COOKIE_ERROR",-5,"Cookie\u9519\u8bef"),rebindError:n.create("REBIND_ERROR",-6,"\u91cd\u7ed1\u9519\u8bef"),unbindError:n.create("UNBIND_ERROR",-7,"\u89e3\u7ed1\u9519\u8bef"),idCookieMisMatch:n.create("ID_COOLIE_ARE_MISMATCH",-8,"UID\u4e0eCookie\u4e0d\u5339\u914d"),notSignOut:n.create("NEED_SIGNOUT",-9,"\u672a\u767b\u51fa"),notSignIn:n.create("NEED_SIGNIN",-10,"\u672a\u767b\u5f55"),needRebind:n.create("NEED_REBIND",-11,"\u9700\u91cd\u7ed1"),loginError:n.create("LOGIN_ERROR",-12,"\u767b\u5f55\u5931\u8d25"),wrongPassword:n.create("WRONG_PASSWORD",-13,"\u5bc6\u7801\u9519\u8bef"),noAccess:n.create("NO_ACCESS",-14,"\u65e0\u6743\u9650"),noAccess2ResetPassword:n.create("NO_ACCESS_TO_RESET_PASSWORD",-15,"\u65e0\u6743\u91cd\u7f6e\u5bc6\u7801"),repeatEmail:n.create("REPEAT_EMAIL",-16,"\u8be5E-mail\u5df2\u88ab\u4f7f\u7528"),noEmail:n.create("NO_EMAIL",-17,"\u672a\u8bbe\u7f6eE-mail"),uncheckedEmail:n.create("UNCHECKED_EMAIL",-18,"\u5df2\u8bbe\u7f6eE-mail\u672a\u6821\u9a8c"),hasBoundEmail:n.create("HAS_BOUND_EMAIL",-19,"\u8be5\u8d26\u53f7\u5df2\u7ecf\u7ed1\u5b9a\u8fc7E-mail"),emailCheckFailed:n.create("EMAIL_CHECK_FAILED",-20,"E-mail\u6821\u9a8c\u5931\u8d25"),saveRedeemFailed:n.create("SAVE_REDEEM_FAILED",-21,"\u4fdd\u5b58\u5151\u6362\u7801\u5931\u8d25"),useRedeemFailed:n.create("USE_REDEEM_FAILED",-22,"\u4f7f\u7528\u5151\u6362\u7801\u5931\u8d25"),noRedeem:n.create("NO_REDEEM",-23,"\u6ca1\u6709\u53ef\u4ee5\u4f7f\u7528\u7684\u5e8f\u5217\u53f7"),invalidProductName:n.create("INVALID_PRODUCT_NAME",-24,"\u9519\u8bef\u7684\u4ea7\u54c1\u7801")}},33446:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=i(69872),n=new o.DFGraphQLFactory("BILIBILI_HELPER_SETTING");t["default"]={invalidValue:n.create("INVALID_VALUE",-1,"\u975e\u6cd5\u7684\u503c")}},84153:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=i(69872),n=new o.DFGraphQLFactory("ACCOUNT");t["default"]={invalidEmail:n.create("INVALID_EMAIL",-1,"\u975e\u6cd5\u7684 e-mail"),invalidCaptcha:n.create("INVALID_CAPTCHA",-2,"\u975e\u6cd5\u7684\u9a8c\u8bc1\u7801"),wrongCaptcha:n.create("WRONG_CAPTCHA",-3,"\u9519\u8bef\u7684\u9a8c\u8bc1\u7801"),noCaptcha:n.create("NO_CAPTCHA",-4,"\u4e0d\u5b58\u5728\u9a8c\u8bc1\u7801"),noAccess:n.create("NO_ACCESS",-5,"\u6ca1\u6709\u6743\u9650"),invalidValue:n.create("INVALID_VALUE",-6,"\u975e\u6cd5\u7684\u503c")}},69872:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DFGraphQLFactory=void 0;const o=i(61157);class n{constructor(e){this.moduleName=e,n.map[e]={}}create(e,t,i){const r=new o.GraphQLError(i);return r.module=this.moduleName,r.type=e,r.code=t,n.map[this.moduleName][e]=r,r}}t.DFGraphQLFactory=n,n.map={}},26350:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=i(69872),n=new o.DFGraphQLFactory("IDENTITY");t["default"]={checkFailed:n.create("CHECK_FAILED",-1,"\u8eab\u4efd\u6821\u9a8c\u9519\u8bef"),hasAdded:n.create("IDENTITY_ADDED",-2,"\u8eab\u4efd\u5df2\u88ab\u6dfb\u52a0")}},55063:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(91145),t),n(i(83561),t),n(i(40442),t),n(i(3492),t),n(i(33446),t),n(i(84153),t),n(i(26350),t),n(i(19352),t),n(i(10407),t),n(i(12638),t),n(i(69872),t),n(i(39846),t)},19352:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=i(69872),n=new o.DFGraphQLFactory("INTERNET");t["default"]={ENOTFOUND:n.create("ENOTFOUND",-1,"ENOTFOUND")}},10407:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=i(69872),n=new o.DFGraphQLFactory("JWT");t["default"]={noneJWT:n.create("NONE_JWT",-1,"\u9700\u8981JWT\u7528\u4e8e\u68c0\u67e5"),invalidJWT:n.create("INVALID_JWT",-2,"\u975e\u6cd5\u7684\u7684JWT")}},12638:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=i(69872);new o.DFGraphQLFactory("MESSAGE");t["default"]={}},39846:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=i(69872),n=new o.DFGraphQLFactory("REDEEM");t["default"]={existed:n.create("REDEEM_CODE_HAS_EXISTED",-1,"\u91cd\u590d\u751f\u6210\u5151\u6362\u7801"),used:n.create("REDEEM_CODE_HAS_USED",-2,"\u5151\u6362\u7801\u4ee5\u88ab\u4f7f\u7528"),createFailed:n.create("REDEEM_CODE_CREATE_FAILED",-3,"\u5151\u6362\u7801\u751f\u6210\u5931\u8d25"),invalidRedeem:n.create("INVALID_REDEEM",-4,"\u65e0\u6548\u7684\u5151\u6362\u7801"),inactiveRedeem:n.create("INACTIVE_REDEEM",-5,"\u4e0d\u53ef\u7528\u7684\u5151\u6362\u7801")}},57119:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.GraphqlController=void 0;const n=i(20572),r=i(32699),a=i(55063);class s extends n.Controller{constructor(e){super(e,"graphqlController",{dependencies:["requestController"],settings:{on:!0}}),this.create=(e,t,i)=>{e.url="https://bilibilihelper.com/g",e.options||(e.options={query:null,variables:null}),e.options.query,e.options.graphql=!0;const n=new Headers;return e.options.headers instanceof Headers?Array.from(e.options.headers.entries()).forEach(([e,t])=>{n.append(e,t)}):(0,r.isPlainObject)(e.options.headers)&&Object.entries(e.options.headers).forEach(([e,t])=>{n.append(e,t)}),n.append("Content-Type","application/json"),e.options.headers=n,e.options.method="POST",e.options.contentType="json",e.options.body=JSON.stringify({query:e.options.query.replace(/\s{2,}/g," "),variables:e.options.variables}),this.emit("requestController","create",e,e=>o(this,void 0,void 0,(function*(){const{error:t,data:o}=e;if(!t&&!o)return i(!1);let n=null;o.errors&&(n=this.dealWithErrors(o.errors)),i({data:o?o.data:null,errors:t||n})})))},this.dealWithErrors=e=>{try{return e.map(e=>{if(!a.DFGraphQLFactory.map[e.module])throw"no module names "+e.module;if(!a.DFGraphQLFactory.map[e.module][e.type])throw`no type ${e.module} in module ${e.module}`;return a.DFGraphQLFactory.map[e.module][e.type]})}catch(e){}}}onLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("create",this.create)}))}}t.GraphqlController=s},94327:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.NetworkController=void 0;const n=i(20572);class r extends n.Controller{constructor(e){super(e,"networkController",{settings:{on:!0,recheck:!1}}),this.online=navigator.onLine,this.getOnline=(e,t,i)=>o(this,void 0,void 0,(function*(){return i(this.online)})),this.onlineCallback=()=>o(this,void 0,void 0,(function*(){setTimeout(()=>{this.settings.recheck?this.recheckOnlineCallback():this.emit("*","networkOnlineChange",!0)},0)})),this.offlineCallback=()=>o(this,void 0,void 0,(function*(){setTimeout(()=>{this.settings.recheck?this.recheckOnlineCallback():this.emit("*","networkOnlineChange",!0)},0)})),this.recheckOnlineCallback=()=>o(this,void 0,void 0,(function*(){const e=yield this.checkOnline();this.online=e,yield this.emit("*","networkOnlineChange",this.online)})),this.connectionTest=(e,t,i)=>o(this,void 0,void 0,(function*(){const{url:t,options:o={}}=e;fetch(t,o).then(()=>{i(!0)}).catch(()=>{i(!1)})})),this.checkOnline=()=>o(this,void 0,void 0,(function*(){return new Promise(e=>fetch("https://www.bilibili.com",{method:"get"}).then(t=>{e(t.ok)}).catch(()=>e(!1)))})),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("getOnline",this.getOnline),this.addListener("connectionTest",this.connectionTest),this.addListener("recheckOnline",this.recheckOnlineCallback),window.addEventListener("online",this.onlineCallback),window.addEventListener("offline",this.offlineCallback),window.addEventListener("recheckOnline",this.recheckOnlineCallback)}))}onLaunch(){return o(this,void 0,void 0,(function*(){}))}}t.NetworkController=r},56680:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i};Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationController=t.NOTIFICATIONS_PERMISSION_ERRORS=t.notificationsErrorFactory=void 0;const r=i(20572),a=i(36605),s=i(15477);t.notificationsErrorFactory=new a.ItemErrorFactory("notificationController"),t.NOTIFICATIONS_PERMISSION_ERRORS={LACK_OF_PERMISSION:t.notificationsErrorFactory.create("lackPermission"),SERVICE_WORKER_NOT_SUPPORT:t.notificationsErrorFactory.create("swNotSupport"),SERVICE_WORKER_NOT_WORKING:t.notificationsErrorFactory.create("swNotWorking")};class l extends r.Controller{constructor(e){super(e,"notificationController",{dependencies:["permissionController"],settings:{on:!0,useActions:!1,autoClose:!1,apiType:"native"}}),this.currentList=[],this.swOn=!1,this.onLaunch=()=>o(this,void 0,void 0,(function*(){chrome.notifications.onButtonClicked.addListener((e,t)=>{this.currentList[e]&&0===t&&this.emit("tabController","create",{url:this.currentList[e],focus:!1},()=>{chrome.notifications.clear(e),delete this.currentList[e]})}),chrome.notifications.onClicked.addListener(e=>{this.currentList[e]&&this.emit("tabController","create",{url:this.currentList[e],focus:!0},()=>{chrome.notifications.clear(e),delete this.currentList[e]})})})),this.post=(...e)=>{switch(this.settings.apiType){case"native":return this.postByNative(...e);case"chrome":return this.postByChrome(...e)}},this.postByNative=(e,i,o)=>{if(!this.swOn)return o(t.NOTIFICATIONS_PERMISSION_ERRORS.SERVICE_WORKER_NOT_WORKING);const{title:n,dir:r="auto",lang:a,badge:s,body:l,tag:c,icon:d,image:u,data:p={},vibrate:h,renotify:m=!1,requireInteraction:f=!1,actions:b,silent:v=!1,autoCloseInterval:g=0}=e;if(navigator.serviceWorker.controller){const e={type:"notification",title:n,dir:r,lang:a,badge:s,body:l,tag:c,icon:d,image:u,data:p,vibrate:h,renotify:m,requireInteraction:f,actions:b,silent:v,autoCloseInterval:g};p.useActions=this.settings.useActions,p.autoClose=this.settings.autoClose,navigator.serviceWorker.controller.postMessage(e),o(!0)}else o(!1)},this.postByWeb=e=>{const{title:t,dir:i="auto",lang:o,badge:n,body:r,tag:a,icon:s,image:l,data:c={},vibrate:d,renotify:u=!1,requireInteraction:p=!1,actions:h,silent:m=!1,autoCloseInterval:f=0}=e,b=new Notification(t,e);c.url&&(b.onclick=e=>{e.preventDefault(),this.emit("tabController","create",{url:c.url,strict:!1}),b.close(),this.emit("googleAnalytics","send",{event:"send",hitType:"event",category:"notification_by_web_api",action:"open_notification"})}),c.autoClose&&options.autoCloseInterval&&setTimeout(()=>{b.close()},options.autoCloseInterval)},this.postByChrome=(e,t,i)=>{const{title:o,dir:n="auto",lang:r,badge:a,body:l,tag:c,icon:d,image:u,data:p={},vibrate:h,renotify:m=!1,requireInteraction:f=!1,actions:b,silent:v=!1,autoCloseInterval:g=0}=e,y={type:"notification",title:o,dir:n,lang:r,badge:a,body:l,tag:c,icon:d,image:u,data:p,vibrate:h,renotify:m,requireInteraction:f,actions:b,silent:v,autoCloseInterval:g},w=p.url?[{title:"\u67e5\u770b"}]:null,k="bilibili-helper-dynamic-check"+String(Math.random()).slice(2);(0,s.createNotification)(k,{type:"basic",iconUrl:y.picture||chrome.runtime.getURL("/statics/images/bilibili-cat-256.png"),title:"\u52a9\u624b\u63d0\u9192\u60a8",message:y.title,buttons:w},e=>{this.currentList[e]=p.url,p.autoClose&&y.autoCloseInterval&&setTimeout(()=>{chrome.notifications.clear(e)},y.autoCloseInterval)})},this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){yield this.emit("permissionController","containPermissions",["notifications"],e=>o(this,void 0,void 0,(function*(){this.hasPermission=e}))),this.addListener("permissionUpdated",e=>{const{command:t}=e;if("add"===t||"remove"===t){const t=e.permissions.has("notifications")!==this.hasPermission;t&&(this.hasPermission=!this.hasPermission)}}),"serviceWorker"in navigator&&navigator.serviceWorker&&"native"===this.settings.apiType&&navigator.serviceWorker.register("../notification.sw.js",{scope:"./"}).then(()=>{this.swOn=!0}).then(()=>{navigator.serviceWorker.addEventListener("message",e=>{const{data:t={}}=e,{target:i,event:o}=t,r=n(t,["target","event"]);"tabController"===i?this.emit(i,o,{queryURL:r.url,strict:!1}):this.emit(i,o,r)})}).catch(e=>{}),this.addListener("post",this.post)}))}onAfterSetSetting(e,t){return o(this,void 0,void 0,(function*(){}))}}t.NotificationController=l},26124:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.PermissionController=t.PERMISSION_ERRORS=t.permissionErrorFactory=void 0;const n=i(20572),r=i(36605);t.permissionErrorFactory=new r.ItemErrorFactory("permissionController"),t.PERMISSION_ERRORS={LACK_OF_PERMISSION:t.permissionErrorFactory.create("lackPermission")};class a extends n.Controller{constructor(e){super(e,"permissionController",{settings:{on:!0}}),this.initPermissions=new Set,this.origins=new Set,this.permissions=new Set,this.lackOrigins=new Set,this.lackPermissions=new Set,this.onPermissionsChange=(e,{origins:t,permissions:i})=>{"remove"===e?(t.forEach(e=>{this.lackOrigins.add(e),this.origins.delete(e)}),i.forEach(e=>{this.lackPermissions.add(e),this.permissions.delete(e)})):(t.forEach(e=>{this.lackOrigins.delete(e),this.origins.add(e)}),i.forEach(e=>{this.lackPermissions.delete(e),this.permissions.add(e)})),this.emit("*","permissionUpdated",{command:e,permissions:this.permissions,origins:this.origins})},this.contains=(e,t)=>o(this,void 0,void 0,(function*(){return new Promise(i=>{chrome.permissions.contains({origins:e,permissions:t},e=>{i(e)})})})),this.request=(e,t)=>o(this,void 0,void 0,(function*(){return new Promise(i=>{chrome.permissions.request({origins:e,permissions:t},e=>{i(e)})})})),this.remove=(e,t)=>o(this,void 0,void 0,(function*(){return new Promise(i=>{chrome.permissions.remove({origins:e,permissions:t},e=>{i(e)})})})),this.store=this.getStore("list-of-missing-permissions"),this.store||(this.setStore("list-of-missing-permissions",[]),this.store=[])}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("containOrigins",(e,t,i)=>{this.contains(e,null).then(i)}),this.addListener("containPermissions",(e,t,i)=>{this.contains(null,e).then(i)}),this.addListener("contains",({origins:e,permissions:t},i,o)=>{this.contains(e,t).then(o)}),this.addListener("request",({origins:e,permissions:t},i,o)=>{this.request(e,t).then(o)}),this.addListener("remove",({origins:e,permissions:t},i,o)=>{this.remove(e,t).then(o)}),chrome.permissions.onAdded.addListener(({origins:e,permissions:t})=>{this.onPermissionsChange("add",{origins:e,permissions:t})}),chrome.permissions.onRemoved.addListener(({origins:e,permissions:t})=>{this.onPermissionsChange("remove",{origins:e,permissions:t})})}))}onLaunch(){return o(this,void 0,void 0,(function*(){yield this.initOwnPermission(),yield this.updateCurrentPermissions()}))}initOwnPermission(){return o(this,void 0,void 0,(function*(){const{permissions:e}=chrome.runtime.getManifest();e.forEach(e=>{/^\*/.test(e)||this.initPermissions.add(e)})}))}updateCurrentPermissions(){return o(this,void 0,void 0,(function*(){return new Promise(e=>{chrome.permissions.getAll(({origins:t,permissions:i})=>{t.forEach(e=>this.origins.add(e)),i.forEach(e=>this.permissions.add(e)),e(!0)})})}))}}t.PermissionController=a},68977:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.RequestController=void 0;const n=i(20572),r=i(44783),a=i(32699),s=6e4,l=3,c=1500;class d{constructor({url:e,options:t={},retryMax:i=l,retryDelay:o=c,timeout:n=s,sendResponse:r}){this.abortTimer=0,this.timeout=s,this.retryMax=3,this.retryDelay=1500,this.retryCount=0,this.abortController=new AbortController,this.url=e,this.options=t,this.retryMax=i,this.retryDelay=o,this.timeout=n,this.sendResponse=r,t.signal=this.abortController.signal}get controlPassword(){return this.options.controlPassword}}class u{constructor(e,t,i,o,n,a){this.logger=new r.Logger("Request Queue"),this.list=[],this.caughtMaxTimes=0,this.sleeping=!1,this.sleepTimer=0,this.suddenlyDuration=500,this.suddenlyTimer=0,this.suddenlyFetchCounter=0,this.locked=!1,this.pushTask=e=>!this.sleeping&&(this.suddenlyFetchCounter>=this.suddenlyQueueFetchMax&&(this.logger.log("Request Queue ~ Suddenly fetch counter: "+this.suddenlyFetchCounter),this.caughtMaxTimes+=1),this.suddenlyFetchCounter+=1,this.suddenlyTimer||(this.suddenlyTimer=setTimeout(()=>{this.suddenlyFetchCounter=0,this.suddenlyTimer=0},this.suddenlyDuration)),this.isSaturation&&(this.caughtMaxTimes+=1),this.needSleep?(this.sleepTimer||(this.sleeping=!0,this.logger.log("Request Queue ~ Go to sleep: "+this.url),this.sleepTimer=setTimeout(()=>{this.logger.log("Request Queue ~ Wake up: "+this.url),this.sleeping=!1,this.caughtMaxTimes=0,this.suddenlyFetchCounter=0},this.sleepDuration)),!1):(this.list.push(e),!0)),this.getTask=()=>this.list.shift(),this.url=e,this.queueMaxLength=t,this.fetchTimeout=i,this.maxCatchTimes=o,this.suddenlyQueueFetchMax=n,this.sleepDuration=a}get isSaturation(){return this.list.length>=this.queueMaxLength}get needSleep(){return this.caughtMaxTimes>=this.maxCatchTimes}}class p extends n.Controller{constructor(e){super(e,"requestController",{dependencies:["permissionController","networkController"],settings:{on:!0}}),this.queueMaxLength=3,this.suddenlyQueueFetchMax=10,this.fetchTimeout=3e4,this.maxCatchTimes=1,this.sleepTime=3e4,this.queues=new Map,this.requestRegExp=new RegExp("requestFrom=$BILIBILI_HELPER_2.6.14"),this.clearQueueTimer=0,this.clearQueueDuration=3e4,this.fetchingList=new Map,this.online=!0,this.create=(e,t,i)=>{if(!this.checkNetworkStatus())return i(!1);if(e.url){const t=new d({url:e.url,options:e.options,retryMax:e.retryMax,retryDelay:e.retryDelay,timeout:e.timeout,sendResponse:i});this.addTask(t)?this.dealWithTaskList(!0):i(!1)}else i(!1)},this.createGraphQL=(e,t,i)=>this.emit("graphqlController","create",e,i),this.cancel=(e,t,i)=>{if(e.controlPassword&&this.fetchingList.has(e.controlPassword)){const t=this.fetchingList.get(e.controlPassword);t.abortController.abort(),i(!0)}else i(!0)},this.onNetworkOnline=e=>{this.online=e},this.onFetch=e=>o(this,void 0,void 0,(function*(){let t,{url:i,options:o,retryMax:n,retryDelay:r,timeout:a,abortController:s,controlPassword:l,abortTimer:c}=e,d=!1,u=new Promise(u=>{t=a&&setTimeout(()=>{s.abort(),e.retryCount<n?d=!0:u("timeout")},a),fetch(decodeURIComponent(i),o).then(e=>(clearTimeout(c),clearTimeout(t),this.fetchingList.delete(l),e)).then(e=>{u(e)}).catch(i=>{clearTimeout(c),clearTimeout(t),this.fetchingList.delete(l),d||"The user aborted a request."!==i.message||u("aborted"),d||"Failed to fetch"===i.message?e.retryCount<n?(e.retryCount+=1,setTimeout(()=>{u(this.onFetch(e))},r)):u("Failed to fetch"):u(i)})});return u||!1})),this.generateResponseObject=e=>{const{bodyUsed:t,headers:i,ok:o,redirected:n,status:r,statusText:a,type:s,url:l}=e;return{bodyUsed:t,headers:i,ok:o,redirected:n,status:r,statusText:a,type:s,url:l}},this.dealWithError=e=>o(this,void 0,void 0,(function*(){return{error:{status:e.status}}})),this.checkNetworkStatus=()=>!!this.online}onLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("create",this.create),this.addListener("createGraphQL",this.createGraphQL),this.addListener("cancel",this.cancel),this.addListener("networkOnlineChange",this.onNetworkOnline)}))}addTask(e){if(this.queues.has(e.url)){const t=this.queues.get(e.url);return t.pushTask(e)}{const t=new u(e.url,this.queueMaxLength,this.fetchTimeout,this.maxCatchTimes,this.suddenlyQueueFetchMax,this.sleepTime);return this.queues.set(e.url,t),t.pushTask(e)}}getTaskQueue(){const e=Array.from(this.queues.values()).filter(e=>e.list.length);if(e&&e.length>0)return e[0]}onBeforeDealWithTaskList(){return o(this,void 0,void 0,(function*(){return this.queues.size>0}))}onDealWithTaskList(){return o(this,void 0,void 0,(function*(){const e=this.getTaskQueue();if(e){const t=e.getTask();if(t){const e=yield this.dealWithTask(t);yield t.sendResponse(e)}clearTimeout(this.clearQueueTimer),this.clearQueueTimer=setTimeout(()=>{e&&0===e.list.length&&this.queues.delete(e.url)},this.clearQueueDuration)}}))}onAfterDealWithTaskList(){return o(this,void 0,void 0,(function*(){this.getTaskQueue()&&(yield this.dealWithTaskList(!0))}))}onBeforeDealWithTask(e){return o(this,void 0,void 0,(function*(){e.options||(e.options={}),e.abortController&&(e.abortTimer=setTimeout(()=>{e.abortController.abort()},this.fetchTimeout))}))}onDealWithTask(e){return o(this,void 0,void 0,(function*(){return yield this.fetch(e)}))}onAfterDealWithTask(e){return o(this,void 0,void 0,(function*(){e.abortTimer&&clearTimeout(e.abortTimer)}))}fetch(e){return o(this,void 0,void 0,(function*(){if(yield this.onBeforeFetch(e)){const t=yield this.onFetch(e);return yield this.onAfterFetch(e,t)}}))}onBeforeFetch(e){return o(this,void 0,void 0,(function*(){let{url:t,options:i}=e;const o=new Headers({From:"BILIBILI_HELPER_2.6.14"});i&&(i.headers instanceof Headers?Array.from(i.headers.entries()).forEach(([e,t])=>{o.append(e,t)}):(0,a.isPlainObject)(i.headers)&&Array.from(Object.entries(i.headers)).forEach(([e,t])=>{o.append(e,t)})),e.options.headers=o;const n=new URL(t);this.requestRegExp.test(t)||i.noRequestFrom||(n.search&&"?"===n.search[0]?e.url+="&":e.url+="?",e.url+="requestFrom=BILIBILI_HELPER_2.6.14");const r=e.controlPassword;return r&&this.fetchingList.set(r,e),!0}))}onAfterFetch(e,t){return o(this,void 0,void 0,(function*(){let{options:i}=e,o=t;if("string"!==typeof t&&i.contentType in t){if(t.status>=400)return this.dealWithError(t);switch(i.contentType.toLowerCase()){case"json":o=yield t.json();break;case"blob":o=yield t.blob();break;case"text":o=yield t.text();break;case"arraybuffer":o=yield t.arrayBuffer();break;default:o=this.generateResponseObject(t)}return{data:o}}return{data:this.generateResponseObject(t)}}))}}t.RequestController=p},50626:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.TabController=t.TAB_PERMISSION_ERRORS=t.tabErrorFactory=void 0;const n=i(20572),r=i(36605);t.tabErrorFactory=new r.ItemErrorFactory("tabController"),t.TAB_PERMISSION_ERRORS={LACK_OF_PERMISSION:t.tabErrorFactory.create("lackPermission")};class a extends n.Controller{constructor(e){super(e,"tabController",{dependencies:["permissionController"],settings:{on:!0}}),this.hasPermission=!1,this.getChromeWindow=()=>o(this,void 0,void 0,(function*(){return new Promise(e=>{chrome.windows.getAll({windowTypes:["normal"]},t=>{e(t||[])})})})),this.create=(e,t,i)=>o(this,void 0,void 0,(function*(){if(this.hasPermission&&(e.url||e.queryURL)){let t,o,n,r,a,s,l,c,d;({url:t,redirect:o="",focus:n=!1,strict:r=!0,queryURL:a=e.url,queryPattern:s="*",windowType:l="normal",active:c=!0,activeIfExist:d=!1}=e||{}),void 0===t&&(t=a);let u=a;a&&!1===r&&(u=a+s),u=u.replace(/^https?/,"*");const p=yield this.getChromeWindow();if(0===p.length)return yield chrome.windows.create({url:t});chrome.tabs.query({windowType:"normal"},e=>{if(0===e.length){const e=window.open("about:blank","emptyWindow");null===e||void 0===e||e.close()}}),n?chrome.tabs.create({url:o||t||a,active:c},e=>{i(e)}):chrome.tabs.query({url:u,windowType:l,currentWindow:!0},e=>{if(e&&e.length>0){const n=e[0],r={active:c};o&&(r.url=o),void 0!==t&&n.url,!n.active&&d&&(r.active=!0),chrome.tabs.update(e[0].id,r,e=>{i(e)})}else chrome.tabs.create({url:o||t||a,active:c},e=>{i(e)})})}}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){yield this.emit("permissionController","containPermissions",["tabs"],e=>{this.hasPermission=e}),this.addListener("permissionUpdated",e=>{const{command:t}=e;if("add"===t||"remove"===t){const t=e.permissions.has("tabs")!==this.hasPermission;t&&(this.hasPermission=!this.hasPermission)}}),this.addListener("create",this.create),chrome.tabs.onCreated.addListener(e=>{this.emit("*","onTabCreated",e)}),chrome.tabs.onUpdated.addListener((e,t,i)=>{this.emit("*","onTabUpdated",{tabId:e,changeInfo:t,tab:i})}),chrome.tabs.onRemoved.addListener((e,t)=>{this.emit("*","onTabRemoved",{tabId:e,removeInfo:t})})}))}}t.TabController=a},46768:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.WebRequestController=void 0;const n=i(20572),r=i(35611),a=i(555);class s extends r.Task{constructor(e,t,i,n,r){super(e,t,i,n,r),this.active=!1,this.onLaunch=()=>o(this,void 0,void 0,(function*(){const{eventName:e,filter:t,options:i}=this.data,o=i.findIndex(e=>"extraHeaders"===e);(0,a.getChromeVersion)()>72?-1===o&&i.push("extraHeaders"):o>=0&&i.splice(o,1),chrome.webRequest[e].addListener(this.runCallback,t,i)})),this.onPause=()=>o(this,void 0,void 0,(function*(){yield this.clear()}));const{eventName:s,filter:l,options:c}=this.data;if(!(s in chrome.webRequest))throw"error event name "+s;if(!l||!c||!r)throw"error params in webRequest task: "+t}onClear(e){return o(this,void 0,void 0,(function*(){const{eventName:e,filter:t,options:i}=this.data;this.manager.logger.log("clear web request task",this.name,e,t,i),chrome.webRequest[e].removeListener(this.runCallback)}))}}class l extends n.Controller{constructor(e){super(e,"webRequestController",{dependencies:["permissionController","networkController"],settings:{on:!0}}),this.hasPermission=!1,this.tasks=new Map,this.onLaunch=()=>o(this,void 0,void 0,(function*(){this.addListener("create",this.create),this.addListener("clear",this.clear)})),this.create=(e,t,i)=>{const{name:o,tags:n=[],eventName:r,filter:a,options:l,callback:c}=e,d=this.tasks.has(o)?this.tasks.get(o):null;if(d)this.logger.warn("exist webRequest task",d,e),d.active?i instanceof Function&&i(!1):(d.setDataMap({filter:a,options:l}),d.setCallback(c),d.launch(),i instanceof Function&&i(!0));else{const e=new s(this,o,{eventName:r,filter:a,options:l},c,{tags:n});e.launch(),this.tasks.set(o,e),i instanceof Function&&i(!0)}},this.clear=(e,t,i)=>o(this,void 0,void 0,(function*(){const{name:t}=e;return this.__clear(t).then(e=>{i(e)})})),this.__clear=e=>o(this,void 0,void 0,(function*(){if(this.tasks.has(e)){const t=this.tasks.get(e);return this.tasks.delete(e),t.clear()}return!0}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){yield this.emit("permissionController","containPermissions",["webRequest"],e=>o(this,void 0,void 0,(function*(){this.hasPermission=e}))),this.addListener("permissionUpdated",e=>{const{command:t}=e;if("add"===t||"remove"===t){const t=e.permissions.has("webRequest")!==this.hasPermission;t&&(this.hasPermission=!this.hasPermission)}})}))}}t.WebRequestController=l},99527:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GraphqlController=t.DownloadController=t.WebRequestController=t.NotificationController=t.ClockController=t.CookieController=t.RequestController=t.TabController=t.PermissionController=t.NetworkController=void 0;var o=i(94327);Object.defineProperty(t,"NetworkController",{enumerable:!0,get:function(){return o.NetworkController}});var n=i(26124);Object.defineProperty(t,"PermissionController",{enumerable:!0,get:function(){return n.PermissionController}});var r=i(50626);Object.defineProperty(t,"TabController",{enumerable:!0,get:function(){return r.TabController}});var a=i(68977);Object.defineProperty(t,"RequestController",{enumerable:!0,get:function(){return a.RequestController}});var s=i(98683);Object.defineProperty(t,"CookieController",{enumerable:!0,get:function(){return s.CookieController}});var l=i(37740);Object.defineProperty(t,"ClockController",{enumerable:!0,get:function(){return l.ClockController}});var c=i(56680);Object.defineProperty(t,"NotificationController",{enumerable:!0,get:function(){return c.NotificationController}});var d=i(46768);Object.defineProperty(t,"WebRequestController",{enumerable:!0,get:function(){return d.WebRequestController}});var u=i(10401);Object.defineProperty(t,"DownloadController",{enumerable:!0,get:function(){return u.DownloadController}});var p=i(57119);Object.defineProperty(t,"GraphqlController",{enumerable:!0,get:function(){return p.GraphqlController}})},52017:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BilibiliAccount=t.BILIBILI_ACCOUNT_PREFIX=void 0;const r=i(15141),a=i(32699),s=i(96582),l=i(22763),c=i(53592),d=n(i(97456)),u=/src="([/.\w\d]+\/space\.(?:[\w\d]+)\.js)/,p=/img:"([\w\d]+)",sub:"([\w\d]+)"/,h=[46,47,18,2,53,8,23,32,15,50,10,31,58,3,45,35,27,43,5,49,33,9,42,19,29,28,14,39,12,38,41,13,37,48,7,16,24,55,40,61,26,17,0,1,60,51,30,4,22,25,54,21,56,59,6,63,57,62,11,36,20,34,44,52],m=["uname","uid","face","bindState","money","levelInfo","hasShop","mobileVerified","emailVerified","moral","official","officialVerify","pendant","vipDueDate","vipStatus","vipType","vip","vipAvatarSubscript","vipLabel","vipNicknameColor","vipPayType","vipThemeType","answerStatus","allowanceCount","isLogin","scores","wallet","shopUrl"],f={mid:"uid",level_info:"levelInfo",has_shop:"hasShop",mobile_verified:"mobileVerified",email_verified:"emailVerified",answer_status:"answerStatus",allowance_count:"allowanceCount",vip_label:"vipLabel",vip_nickname_color:"vipNicknameColor",vip_avatar_subscript:"vipAvatarSubscript",vip_pay_type:"vipPayType",vip_theme_type:"vipThemeType",shop_url:"shopUrl"},b=["uid","username","face","sign","sex","level","isLocal","hasLogin","vip","cookieMap","bindState"];t.BILIBILI_ACCOUNT_PREFIX="bilibiliAccount_";let v=null;class g extends r.Item{constructor(e,i,{username:n="",face:r="",sign:b="",sex:g="\u4fdd\u5bc6",isSpecialAttention:y=!1,vip:w=null,useSandBox:k}={username:"",face:"",sign:"",sex:"\u4fdd\u5bc6",isSpecialAttention:!1,vip:null,useSandBox:!1}){if(super(e,t.BILIBILI_ACCOUNT_PREFIX+String(i),{dependencies:["bilibiliAccountController"],settings:{on:!0},cache:{limit:{duration:864e5}}}),this.__initing=!1,this.initialized=!1,this.useSandBox=!1,this.bindState=c.BIND_STATE.UNBOUND,this.hasLogin=!1,this.hasLocalData=!1,this.isLocal=!1,this.isSpecialAttention=!1,this.specialAttentionUidList=[],this.videos=[],this.update=(e,t)=>{(0,a.isPlainObject)(e)?Object.keys(e).forEach(t=>{this.update(t,e[t])}):"string"===typeof e&&(e in f&&(e=f[e]),m.includes(e)&&void 0!==t&&(this[e]=t))},this.initBindProgress=()=>{chrome.tabs.create({url:c.URLS.LOGIN},e=>{this.sandBox=new l.SandBox(this,[e.id],[],{rebind:!1,bindState:c.BIND_STATE.UNBOUND})})},this.createTab=()=>{chrome.tabs.create({url:c.URLS.MAIN},e=>{this.addTabs2SandBox(e.id)})},this.addTabs2SandBox=(...e)=>{this.sandBox?this.sandBox.addTabs(...e):this.sandBox=new l.SandBox(this,[...e],new Map(this.cookieMap),{rebind:!1,bindState:c.BIND_STATE.BOUND})},this.saveCookie=()=>{this.cookieMap=Array.from(this.sandBox.cookieMap.entries()).map(([e,t])=>t instanceof Map?[e,Array.from(t.entries())]:[e,t]),this.saveAccountData()},this.saveAccountData=()=>{this.setStore("default",this)},this.getSpaceInfo=e=>o(this,void 0,void 0,(function*(){const t="https://api.bilibili.com/x/space/wbi/acc/info",i={mid:e,platform:"web",web_location:1550101};return this.getSapceData(t,e,i).then(t=>{const{code:i,message:o,data:n}=t;if(0===i){const{name:t,sex:i,face:o,sign:r,level:a,live_room:s,vip:l}=n;return{uid:e,username:t,sex:i,face:o,sign:r,level:a,vip:l,roomId:s?+s.roomid:void 0}}return Promise.reject(o)}).catch(e=>{})})),this.checkLogin=()=>o(this,void 0,void 0,(function*(){const e=yield this.getSESSIONDATA(),t=yield this.getLocalUID();e&&String(t)===String(this.uid)?(this.isLocal=!0,this.hasLogin=!0):(this.isLocal=!1,this.hasLogin=!1)})),this.completeBind=()=>o(this,void 0,void 0,(function*(){const e=yield this.initAccountData(!0);this.update(e),this.rename(t.BILIBILI_ACCOUNT_PREFIX+String(this.uid)),this.saveCookie()})),this.getSapceData=(e,t,i)=>o(this,void 0,void 0,(function*(){const{imgKey:o,subKey:n}=yield this.getSpaceWrid(t),{w_rid:r,wts:a}=this.calcWRID(o+n,i),l=(0,s.generateURL)(e,Object.assign(Object.assign({},i),{w_rid:r,wts:a}));return new Promise(e=>{this.emit("requestController","create",{url:l,options:{noRequestFrom:!0,contentType:"json"}},e)}).then(({data:e={}})=>e)})),this.calcWRID=(e,t)=>{const i=[],o=Math.round(Date.now()/1e3);t=Object.assign({},t,{wts:o});const n=Object.keys(t).sort();h.forEach(t=>{const o=e.charAt(t);o&&i.push(o)});const r=[];n.forEach(e=>{let i=t[e];"string"===typeof i&&(i=i.replace(/[!'()*]/g,"")),null!==i&&r.push(`${encodeURIComponent(e)}=${encodeURIComponent(i)}`)});const a=r.join("&"),s=i.join("").slice(0,32);return{w_rid:(0,d.default)(a+s),wts:o.toString()}},this.getSpaceWrid=(e=this.uid)=>o(this,void 0,void 0,(function*(){if(!v){const t=yield this.getSpaceHTML(e);let i=u.exec(t);if(!i)return null;i[1]&&!/^https?/.exec(i[1])&&(i=i[1].replace(/(http?:)?\/\//,"https://"));const{imgKey:o,subKey:n}=(yield this.getSpaceKey(i))||{};v={imgKey:o,subKey:n}}return v})),this.getSpaceHTML=e=>o(this,void 0,void 0,(function*(){const t=yield this.emit("requestController","create",{url:"https://space.bilibili.com/"+e,options:{contentType:"text",headers:{ContextType:"text/javascript; charset=utf-8"}}});return t.data})),this.getSpaceKey=e=>o(this,void 0,void 0,(function*(){const t=yield this.emit("requestController","create",{url:e,options:{contentType:"text",headers:{ContextType:"text/javascript; charset=utf-8"}}});let i=p.exec(t.data);return i?(v=i[1]&&i[2]?{imgKey:i[1],subKey:i[2]}:{imgKey:null,subKey:null},v):null})),this.getLocalUID=()=>o(this,void 0,void 0,(function*(){return new Promise(e=>{this.emit("cookieController","get",{name:"DedeUserID",url:"https://www.bilibili.com/"},t=>{t?e(t):e()})})})),this.getSESSIONDATA=()=>new Promise(e=>{this.emit("cookieController","get",{name:"SESSDATA",url:"https://www.bilibili.com/"},t=>{t?e(t):e()})}),this.destroySandBox=()=>{this.sandBox&&this.sandBox.destroy()},this.uid=i,this.username=n,this.face=r,this.sign=b,this.sex=g,this.vip=w,this.isSpecialAttention=y,this.useSandBox=!!k,"bind"===i)this.bindState=c.BIND_STATE.UNBOUND,this.initBindProgress();else{const e=this.getStore("default");e&&(e.name&&!e.username&&(e.username=e.name,delete e.name),Object.assign(this,e),this.hasLocalData=!0,this.useSandBox&&this.cookieMap&&(this.cookieMap=[...this.cookieMap].map(([e,t])=>t instanceof Array?[e,new Map(t)]:t),this.sandBox=new l.SandBox(this,[],new Map(this.cookieMap))))}this.app.accountMap.set(this.name,this)}get expired(){return!this.sandBox||this.sandBox.cookieExpired}initAccountData(e=!1){return o(this,void 0,void 0,(function*(){if(!this.__initing||e)return this.__initing=!0,yield this.checkLogin(),e&&(yield this.getSpaceInfo(this.uid).then(e=>{Object.assign(this,e)}).then(this.saveAccountData).then(()=>{this.initialized=!0}).catch(e=>{})),this}))}onLaunch(){const e=Object.create(null,{onLaunch:{get:()=>super.onLaunch}});return o(this,void 0,void 0,(function*(){e.onLaunch.call(this),this.checkLogin()}))}updateInfoDetails(){}checkExpired(){return this.sandBox.checkCookieValid().then(e=>this.update(e))}toJSON(){return b.reduce((e,t)=>(void 0!==this[t]&&("username"===t&&!this[t]&&this.names.item||(e[t]=this[t])),e),{})}}t.BilibiliAccount=g},22763:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SandBox=void 0;const r=n(i(52296)),a=i(555),s=i(53592),l=()=>"bh"+String(Math.random()).slice(2,+String(Math.round(10*(Math.random()+5))));class c{constructor(e,t=[],i,n={}){this.id=Date.now(),this.tabs=[],this.cookieMap=new Map,this.cookiesStringMap=new Map,this.cookieExpired=!1,this.cookiePrefix=l(),this.stringifyCookieIntervalTime=2e3,this.blockURLs=s.BLOCK_URLS,this.toString=()=>JSON.stringify(Array.from(this.cookieMap.entries())),this.containTab=e=>this.tabs.includes(e),this.generateCookieStringByDomain=e=>{let t=[];return e instanceof Array?t=e.map(e=>e[1]):e instanceof Map?t=Array.from(e.values()):e.name&&e.domain&&(t=[e]),t.map(({name:e,value:t})=>`${e}=${t}`).join("; ")},this.cookieHeaders2CookieArray=(e,t)=>t.map(({value:t})=>{const i=t.split(";").map(e=>e.trim().split("=")),[o,n]=i.shift();if(s.DISABLED_COOKIE_LIST.includes(o))return!1;let r={};if(o.match(/\(\)<>@,;:"\/\[\]\?=\{\}/))throw`wrong cookie name: ${o}, value ${n}`;return r.name=o,r.value=n,i.reduce((t,[i,o])=>{switch(i.toLowerCase()){case"secure":t.secure=!0;break;case"httponly":t.httpOnly=!0;break;case"hostonly":t.hostOnly=!0;break;case"domain":t.domain=o;break;case"path":t.path=o;break;case"samesite":t.sameSite=o;break;case"max-age":{let i=new Date(e.getTime());i.setSeconds(i.getSeconds()+Number(o)),t.expirationDateOptional=i.getTime()/1e3;break}case"expires":t.expirationDateOptional=new Date(o).getTime()/1e3;break;default:}return t},r)}).filter(Boolean),this.setCookie=e=>{e=e.filter(({name:e})=>!s.DISABLED_COOKIE_LIST.includes(e)),this.setCookieMap(e)},this.addTabs=(...e)=>{e.forEach(e=>{"number"===typeof e&&(this.tabs.includes(e)||this.tabs.push(e))})},this.setBaseCookie=(e,t,i)=>{const o=Array.from(this.cookiesStringMap.entries()),n=o.map(([t,i])=>!!e.match(t)&&i).filter(Boolean).join("; "),r={runAt:"document_start",frameId:t,code:`\n                (() => {\n                    const f = () => {\n                        const currentScript = document.getElementById('bilibiliHelperCookieScript');\n                        currentScript && currentScript.remove();\n                        const scriptDOM = document.createElement('script');\n                        scriptDOM.id = 'bilibiliHelperCookieScript';\n                        scriptDOM.innerHTML = \` \n                            // window.addEventListener('popstate', (e) => console.log(1, e));\n                            const cookieDesc = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie');\n                            let targetCookies = '${n}';\n                            const messageCallback = (event) => {\n                                const {data} = event;\n                                if (data.command === 'setSandBoxCookie') {\n                                    targetCookies += '; ' + data.cookieString;\n                                }\n                            };\n                            window.addEventListener('message', messageCallback);\n                            if (cookieDesc && cookieDesc.configurable) {\n                                Object.defineProperty(document, 'cookie', {\n                                    get: function () {\n                                        return targetCookies;\n                                    },\n                                    set: function (val) {\n                                        if (val) {\n                                            const cookieArray = val.split(';').map((text) => text.split('='));\n                                            const [[key, value], ...rest] = cookieArray;\n                                            cookieArray.push(['name', key]);\n                                            value && cookieArray.push(['value', value]);\n                                            const cookie = cookieArray.reduce((t,[k,v])=>(t[k.trim()]=v.trim(),t),{});\n                                            window.postMessage({\n                                                target: 'sandBox${this.id}',\n                                                command: 'sendEditedCookie',\n                                                cookie,\n                                            }, '*');\n                                        }\n                                    }\n                                });\n                            }\n                        \`;\n                        document.head.appendChild(scriptDOM);\n                        setTimeout(() => scriptDOM.remove(), 100);\n                    };\n                    const t = setInterval(() => {\n                        if (document.head) {\n                            clearInterval(t);\n                            f();\n                        }\n                    }, 10);\n                })();\n            `};chrome.tabs.executeScript(i,r)},this.filterCookieByURL=e=>{const t=e.split("#")[0].split("?")[0].replace(/(^https?:\/\/|\/\/)/,"").split("/")[0];return Array.from(this.cookiesStringMap.entries()).map(([[e,i],o])=>t.indexOf(e)>=0&&o).filter(Boolean).join("; ")},this.setCookieMap=e=>{e&&e.forEach(e=>{const{domain:t=".bilibili.com",name:i}=e;this.cookieMap.has(t)?this.cookieMap.set(t,new Map(this.cookieMap.get(t))):this.cookieMap.set(t,new Map),this.cookieMap.get(t).set(i,e)}),clearTimeout(this.stringifyCookieSetTimeOutId),new Promise(e=>{this.cookiesStringMap.size>0?this.stringifyCookieSetTimeOutId=setTimeout(()=>{e()}):e()}).then(()=>{for(let[e,t]of this.cookieMap){const i=this.generateCookieStringByDomain(t);this.cookiesStringMap.set(e,i)}this.account.saveCookie()})},this.initListener=()=>{const e=["blocking","requestHeaders"],t=["blocking","responseHeaders"];(0,a.getChromeVersion)()>72&&(e.push("extraHeaders"),t.push("extraHeaders")),chrome.webRequest.onBeforeSendHeaders.addListener(this.onBeforeSendHeadersCallback,this.blockURLs,e),chrome.webRequest.onHeadersReceived.addListener(this.onHeaderReceivedCallback,this.blockURLs,t),chrome.webNavigation.onCreatedNavigationTarget.addListener(this.onCreatedNavigationTargetCallback),chrome.webNavigation.onCommitted.addListener(this.onCommittedCallback),chrome.tabs.onCreated.addListener(this.onCreatedCallback),chrome.tabs.onUpdated.addListener(this.onUpdatedCallback),chrome.tabs.onRemoved.addListener(this.onRemovedCallback),chrome.runtime.onMessage.addListener(this.handleOnEditLocalCookieListener)},this.bindingMessageCallback=(e,t,i)=>{const{command:o}=e;if(t.tab&&this.containTab(t.tab.id))if("queryBinding"===o){let e=!1;s.UNBOUND_STATE.includes(this.account.bindState)&&(this.account.bindState=s.BIND_STATE.BINDING,e=!0),i(e)}else"queryBound"===o&&(i(this.account.bindState),this.account.bindState===s.BIND_STATE.BOUND&&this.completeBind());return!0},this.bindingOnCompletedCallback=e=>{const{tabId:t,parentFrameId:i,responseHeaders:o}=e;this.tabs.includes(t)&&-1===i&&this.checkCookieValid().then(e=>{e&&this.account.update(Object.assign(Object.assign({},e),{bindState:s.BIND_STATE.BOUND}))})},this.bindingOnRemoveTabCallback=e=>{const t=this.tabs.indexOf(e);-1!==t&&this.tabs.splice(t,1),0===this.tabs.length&&this.destroy()},this.bindingOnBeforeSendHeadersCallback=e=>{const{requestHeaders:t,url:i,tabId:o}=e,n=new r.default(i,!0),{query:a={}}=n,{type:s=null,sandBoxID:l}=a;if("checkCookie"===s&&+l===this.id||this.tabs.includes(o)){const e=t.find(e=>"cookie"===e.name.toLowerCase()),o=this.filterCookieByURL(i);return e?e.value=o:t.push({name:"Set-Cookie",value:o}),{requestHeaders:t}}return{requestHeaders:t}},this.initBindListener=()=>{chrome.runtime.onMessage.addListener(this.bindingMessageCallback);const e=["blocking","requestHeaders"],t=["blocking","responseHeaders"];(0,a.getChromeVersion)()>72&&(e.push("extraHeaders"),t.push("extraHeaders")),chrome.webRequest.onHeadersReceived.addListener(this.onHeaderReceivedCallback,this.blockURLs,t),chrome.webRequest.onCompleted.addListener(this.bindingOnCompletedCallback,{urls:["*://api.bilibili.com/x/web-interface/nav"]},["responseHeaders","extraHeaders"]),chrome.webNavigation.onCreatedNavigationTarget.addListener(this.onCreatedNavigationTargetCallback),chrome.webNavigation.onCommitted.addListener(this.onCommittedCallback),chrome.webRequest.onBeforeSendHeaders.addListener(this.bindingOnBeforeSendHeadersCallback,this.blockURLs,e),chrome.tabs.onRemoved.addListener(this.bindingOnRemoveTabCallback)},this.completeBind=()=>{chrome.runtime.onMessage.removeListener(this.bindingMessageCallback),chrome.webRequest.onHeadersReceived.removeListener(this.onHeaderReceivedCallback),chrome.webRequest.onCompleted.removeListener(this.bindingOnCompletedCallback),chrome.webRequest.onBeforeSendHeaders.removeListener(this.bindingOnBeforeSendHeadersCallback),chrome.webNavigation.onCreatedNavigationTarget.removeListener(this.onCreatedNavigationTargetCallback),chrome.webNavigation.onCommitted.removeListener(this.onCommittedCallback),chrome.tabs.onRemoved.removeListener(this.bindingOnRemoveTabCallback),this.initListener(),this.account.emit("bilibiliAccountController","completeBind")},this.destroyListener=()=>{chrome.webRequest.onBeforeSendHeaders.removeListener(this.onBeforeSendHeadersCallback),chrome.webRequest.onHeadersReceived.removeListener(this.onHeaderReceivedCallback),chrome.webNavigation.onCreatedNavigationTarget.removeListener(this.onCreatedNavigationTargetCallback),chrome.webNavigation.onCommitted.removeListener(this.onCommittedCallback),chrome.tabs.onUpdated.removeListener(this.onUpdatedCallback),chrome.tabs.onRemoved.removeListener(this.onRemovedCallback),chrome.runtime.onMessage.removeListener(this.handleOnEditLocalCookieListener)},this.onBeforeSendHeadersCallback=(0,a.webRequestCallbackWrapper)(e=>{const{tabId:t,requestHeaders:i,url:o}=e,n=new r.default(o,!0),{query:a={}}=n;if(this.tabs.includes(t)||a.tabId||this.tabs.includes(a.tabId)||"checkCookie"===a.type&&+a.sandBoxID===this.id){const e=Array.from(this.cookiesStringMap.entries()),t=e.map(([e,t])=>!!o.match(e)&&t).filter(Boolean).join("; "),n=[...i],r=n.find(e=>"cookie"===e.name.toLowerCase());return r&&t?r.value=t:t&&n.push({name:"Cookie",value:t}),{requestHeaders:n}}return{requestHeaders:i}}),this.onHeaderReceivedCallback=(0,a.webRequestCallbackWrapper)(e=>{let{tabId:t,responseHeaders:i}=e;if(this.tabs.includes(t)){if(i){const e=i.filter(e=>"set-cookie"===e.name.toLowerCase());let o=i.find(e=>"expires"===e.name.toLowerCase());if(o=o?new Date(o.value):new Date,e&&e.length>0){const n=this.cookieHeaders2CookieArray(o,e);this.sendCookies2Tab(t,n),this.setCookie(n);const r=i.length;for(let e=0;e<r;++e)i[e]&&"set-cookie"===i[e].name.toLowerCase()&&delete i[e];i=i.filter(Boolean)}}return{responseHeaders:i}}}),this.onCreatedNavigationTargetCallback=e=>{const{sourceTabId:t,tabId:i}=e;this.tabs.includes(t)&&!this.tabs.includes(i)&&(this.tabs.push(i),this.setBaseCookie(e.url,e.sourceFrameId,e.tabId))},this.onCommittedCallback=e=>{this.tabs.includes(e.tabId)&&(["about:blank"].includes(e.url)||this.setBaseCookie(e.url,e.frameId,e.tabId))},this.onDOMContentLoadedCallback=e=>{this.tabs.includes(e.tabId)&&(["about:blank"].includes(e.url)||this.setBaseCookie(e.url,e.frameId,e.tabId))},this.onCreatedCallback=e=>{},this.onUpdatedCallback=(e,t,i)=>{if(this.tabs.includes(e)&&"loading"===t.status){const t=new r.default(i.url,!0),{query:o}=t;if(!o.uid){o.uid=this.account.uid;const i=t.toString();chrome.tabs.update(e,{url:i})}}},this.onRemovedCallback=e=>{const t=this.tabs.indexOf(e);-1!==t&&this.tabs.splice(t,1)},this.handleOnEditLocalCookieListener=e=>(e.sandBox==="sandBox"+this.id&&this.setCookie([e.cookie]),!0),this.sendCookies2Tab=(e,t)=>{const i=t.map(({name:e,value:t})=>`${e}=${t}`).join("; ");chrome.tabs.sendMessage(e,{command:"setSandBoxCookie",cookieString:i})},this.checkCookieValid=()=>{const e=`https://api.bilibili.com/x/web-interface/nav?type=checkCookie&sandBoxID=${this.id}&passWrapper=true`;return(0,a.fetchFromHelper)(e).then(e=>e.json()).then(e=>{const{code:t,data:i}=e;return 0===t?(this.cookieExpired=!1,i):Promise.reject(e)}).catch(e=>(this.cookieExpired=!0,Promise.resolve(!1)))},this.checkLoginExpired=()=>this.checkCookieValid(),this.checkBindState=e=>{try{const t={query:"query queryBind ($uid: UID!) {\n                    account {\n                        hasBound(id: $uid) {\n                            active\n                        }\n                    }\n                }",variables:{uid:String(e)}};return(0,a.sendGraphQLRequest)(t).then(({errors:t,data:i}={})=>{if(t)return new Promise(e=>{let i=!1;t.forEach(e=>{switch(e.code){case-1:"IDENTITY"===e.module||"ACCOUNT"===e.module&&(i=!0);break;case-2:e.module;break}}),e(i)}).then(t=>{if(t){const t=this.filterCookieByURL("www.bilibili.com");return this.bindRequest(e,t)}return!1});if(!i.account)return!1;if(i.account.hasBound){if(i.account.hasBound.active)return!0;{const t=this.filterCookieByURL("www.bilibili.com");return this.bindRequest(e,t)}}})}catch(e){return Promise.reject(!1)}},this.bindRequest=(e,t)=>o(this,void 0,void 0,(function*(){const i={query:"mutation bindAccount ($uid: UID!, $cookies: String!) {\n                        account {\n                            bind(id: $uid, cookie: $cookies)\n                        }\n                    }",variables:{uid:String(e),cookies:t}};return(0,a.sendGraphQLRequest)(i).then(({errors:e,data:t}={})=>!e&&(!!t.account&&!!t.account.bind))})),this.account=e,this.tabs=[...t],this.onDestroy=n.onDestroy,this.rebind=n.rebind,i instanceof Map?this.cookieMap=i:i instanceof Array&&this.setCookieMap(i),this.init()}init(){s.UNBOUND_STATE.includes(this.account.bindState)?this.initBindListener():(this.setCookieMap(),this.initListener())}destroy(){this.destroyListener(),"function"===typeof this.onDestroy&&this.onDestroy(),this.account.bindState===s.BIND_STATE.BINDING&&(this.account.bindState=s.BIND_STATE.UNBOUND,this.account.emit("bilibiliAccountController","cancelBind"))}}t.SandBox=c},53592:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DISABLED_COOKIE_LIST=t.BLOCK_URLS=t.URLS=t.UNBOUND_STATE=t.BIND_STATE=void 0,t.BIND_STATE={UNBOUND:0,BINDING:1,BOUND:2,REBIND:3},t.UNBOUND_STATE=[t.BIND_STATE.UNBOUND,t.BIND_STATE.REBIND],t.URLS={LOGIN:"https://passport.bilibili.com/login",MAIN:"https://www.bilibili.com/"},t.BLOCK_URLS={urls:["*://*.bilibili.com/*"]},t.DISABLED_COOKIE_LIST=["rpdid"]},36602:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BilibiliAccountController=void 0;const r=i(58188),a=i(53592),s=n(i(52296)),l=i(52017),c=i(20572),d=i(32699),u=n(i(56058)),p=i(97907);class h extends c.Controller{constructor(e){super(e,"bilibiliAccountController",{settings:{on:!0}}),this.accountMap=new Map,this.bindingAccount=null,this.isLocalBilibiliAccountLogin=!1,this.onLaunch=()=>o(this,void 0,void 0,(function*(){const e=this.getStore("uidList")||[],t=e.reduce((e,t)=>(e[t]=l.BilibiliAccount,e),{});yield this.loadItems(t),yield this.initLocalAccount()})),this.getLocalAccountLoginState=(e,t,i)=>{i(!!this.localAccount&&this.localAccount.hasLogin)},this.create=(e,t,i)=>o(this,void 0,void 0,(function*(){if(e.uid){const{uid:t}=e,o=this.accountMap.get(l.BILIBILI_ACCOUNT_PREFIX+String(t));if(o)return yield o.initAccountData(!0),i(o);{const e=new l.BilibiliAccount(this,String(t));return yield e.initAccountData(!0),this.setStore("uidList",[...new Set(Array.from(this.accountMap.values()).map(e=>e.uid))]),i(e)}}i(!1)})),this.onTabCreated=(e,t,i)=>{const{url:o,id:n}=e;this.onTabCreateORUpdateCallback(o,n)},this.onTabUpdated=(e,t,i)=>{const{tabId:o,changeInfo:n,tab:r}=e;"loading"===n.status&&this.onTabCreateORUpdateCallback(r.url,o)},this.onTabCreateORUpdateCallback=(e,t)=>{const i=new s.default(e,!0),{host:o,query:n}=i;if(o.match(/\.bilibili\.com/)&&void 0!==n.uid){const e=this.accountMap.get(l.BILIBILI_ACCOUNT_PREFIX+String(n.uid));e&&e.addTabs2SandBox(t)}},this.bind=(e,t,i)=>{this.emit("bilibiliHelperAccountController","getStatus",null,({hasLogin:e,bhAccount:t})=>{if(e&&(0,r.isVIP)(t)){const e=Array.from(this.accountMap.values()).filter(e=>e.bindState===a.BIND_STATE.BOUND);e.length<p.MAX_BIND_NUMBER&&(this.bindingAccount=new l.BilibiliAccount(this,"bind",{useSandBox:!0}),window.bindingAccount=this.bindingAccount,this.bindingAccount.manager=this)}}),i()},this.unbind=(e,t,i)=>{this.deleteAccount(e.uid),i(!0)},this.getLocalAccount=(e,t,i)=>{i(this.localAccount)},this.getAccount=(e,t,i)=>{this.accountMap.has(l.BILIBILI_ACCOUNT_PREFIX+String(e.uid))?i(this.accountMap.get(l.BILIBILI_ACCOUNT_PREFIX+String(e.uid))):i(!1)},this.getAccountList=(e,t,i)=>o(this,void 0,void 0,(function*(){if(yield this.localAccount.getSpaceWrid(),e.uidList)Promise.all(e.uidList.map(e=>o(this,void 0,void 0,(function*(){const t=this.accountMap.get(l.BILIBILI_ACCOUNT_PREFIX+String(e));return t||(yield this.create({uid:e},this,e=>e))})))).then(e=>{i(e)}).catch(()=>{i([])});else{const e=Array.from(this.accountMap.values()).filter(e=>e.bindState===a.BIND_STATE.BOUND).map(e=>e.toJSON());i(e)}})),this.createTabByAccount=(e,t,i)=>{if(e){const t=this.accountMap.get(l.BILIBILI_ACCOUNT_PREFIX+String(e.uid));t.createTab()}i()},this.cancelBind=()=>{this.bindingAccount&&(this.bindingAccount.destroySandBox(),this.bindingAccount.cleanStore()),this.bindingAccount=null},this.completeBind=()=>o(this,void 0,void 0,(function*(){yield this.bindingAccount.completeBind(),this.accountMap.has("bilibiliAccount_bind")&&(this.accountMap.set(l.BILIBILI_ACCOUNT_PREFIX+String(this.bindingAccount.uid),this.bindingAccount),this.accountMap.delete("bilibiliAccount_bind")),this.setStore("uidList",[...new Set(Array.from(this.accountMap.values()).map(e=>e.uid))]),u.default.remove("bilibiliAccount_bind-data_default"),this.bindingAccount=null,chrome.tabs.query({url:chrome.runtime.getURL("html/config.html")},e=>{e&&e.length&&e.forEach(e=>{chrome.tabs.sendMessage(e.id,{action:"boundAccount"})})})})),this.deleteAccount=e=>{const t=this.accountMap.get(l.BILIBILI_ACCOUNT_PREFIX+String(e));t&&(t.bindState=a.BIND_STATE.UNBOUND,t.saveAccountData(),t.cleanStore(),this.accountMap.delete(e),this.setStore("uidList",[...new Set(Array.from(this.accountMap.values()).map(e=>e.uid))]))},this.updateAccount=(e,t,i)=>{const o=this.accountMap.get(l.BILIBILI_ACCOUNT_PREFIX+String(e.uid));o&&e.videos},this.initNewAccount=e=>{},this.updateBaseInfo=e=>{},this.initLocalAccount=()=>o(this,void 0,void 0,(function*(){return new Promise(e=>{this.emit("cookieController","get",{name:"DedeUserID",url:"https://www.bilibili.com/"},t=>{e(t||null)})}).then(e=>new Promise(t=>this.create({uid:e},null,t)))})),this.getLocalUID=(e,t,i)=>{i(this.localAccount?this.localAccount.uid:void 0)},this.localBilibiliAccountLoginChange=({removed:e,cookie:t,cause:i})=>o(this,void 0,void 0,(function*(){const{name:o}=t;"explicit"!==i||e||"SESSDATA"!==o?e&&"SESSDATA"===o&&(this.localAccount&&(yield this.localAccount.initAccountData(!0)),yield this.emit("*","localBilibiliAccountLoginStateChange",{login:!1})):(yield this.initLocalAccount(),yield this.emit("*","localBilibiliAccountLoginStateChange",{login:t.expirationDate>Date.now()/1e3}))}))}get localAccount(){return Array.from(this.accountMap.values()).find(e=>e.isLocal)}get accountList(){return Array.from(this.accountMap.values())}onInitStore(){return o(this,void 0,void 0,(function*(){let e=this.getStore("uidList");e&&e.length>0&&(e=e.filter(e=>"bind"!==e),this.setStore("uidList",[...new Set(e)]))}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){yield this.emit("cookieController","create",{name:"watchLocalBilibiliAccountLoginState",data:{filter:{names:["SESSDATA"],domain:".bilibili.com"}},callback:(0,d.debounce)(this.localBilibiliAccountLoginChange,50)}),this.addListener("create",this.create),this.addListener("getAccount",this.getAccount),this.addListener("getAccountList",this.getAccountList),this.addListener("getLocalAccount",this.getLocalAccount),this.addListener("getLocalUID",this.getLocalUID),this.addListener("getLocalAccountLoginState",this.getLocalAccountLoginState),this.addListener("bind",this.bind),this.addListener("unbind",this.unbind),this.addListener("createTabByAccount",this.createTabByAccount),this.addListener("cancelBind",this.cancelBind),this.addListener("completeBind",this.completeBind),this.addListener("onTabCreated",this.onTabCreated),this.addListener("onTabUpdated",this.onTabUpdated),this.addListener("getData",(e,t,i)=>{if(e.url&&e.data&&e.uid){const{url:t,uid:o,data:n}=e,r=this.accountMap.get(l.BILIBILI_ACCOUNT_PREFIX+String(o));r.getSapceData(t,o,n).then(e=>{i(e)})}}),this.addListener("getSpaceInfo",(e,t,i)=>{if(e.uid){const t=this.accountMap.get(l.BILIBILI_ACCOUNT_PREFIX+String(e.uid));t.getSpaceInfo(e.uid).then(e=>{i(e)})}})}))}}t.BilibiliAccountController=h},18603:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.BilibiliHelperAccountController=t.BILIBILI_HELPER_ACCOUNT_ERRORS=t.bilibiliHelperAccountErrorFactory=void 0;const s=i(20572),l=r(i(32699)),c=i(555),d=i(58383),u=i(36605);t.bilibiliHelperAccountErrorFactory=new u.ItemErrorFactory("bilibiliHelperAccountController"),t.BILIBILI_HELPER_ACCOUNT_ERRORS={NOT_LOGIN:t.bilibiliHelperAccountErrorFactory.create("notLogin"),LOGIN_FAILED:t.bilibiliHelperAccountErrorFactory.create("loginFailed"),GET_STATUS_FAILED:t.bilibiliHelperAccountErrorFactory.create("getStatusFailed")};class p extends s.Controller{constructor(e){super(e,"bilibiliHelperAccountController",{dependencies:["bilibiliAccountController"],settings:{on:!0},cache:{type:"local",dataType:"boolean",delayDuration:0}}),this.hasLogin=!1,this.hasRegister=!1,this.bilibiliAccount=null,this.needFillPassword=!1,this.uploadSettingsDuration=1e3,this.downloadSettingsDuration=2e3,this.downloadingSettings=!1,this.needDownloadSettings=!1,this.settingsNeedUpload={},this.accountDataInitialized=!1,this.onNetworkOnline=e=>a(this,void 0,void 0,(function*(){e&&(yield this.initLocalBilibiliAccount(),yield this.checkSettingNeedUpdate(!0))})),this.onLaunch=()=>a(this,void 0,void 0,(function*(){yield this.initLocalBilibiliAccount().then(()=>{this.emit("app","setInitialStatus",{name:"bilibiliHelperAccount",value:!0})})})),this.getBHAccountState=()=>a(this,void 0,void 0,(function*(){const e=this.bilibiliAccount?this.bilibiliAccount.uid:-1,t={query:"query ($blid: BLID!) {\n                        bilibiliHelperAccount {\n                            hasRegister(blid: $blid)\n                            getState {\n                                bhid\n                                boundBlid\n                                email\n                                identities {\n                                    name\n                                    from\n                                    to\n                                    hasDateTimeLimit\n                                }\n                            }\n                        }\n                    }",variables:{blid:String(e)}};return yield this.emit("requestController","createGraphQL",{options:t,retryMax:30,retryDelay:1500},e=>a(this,void 0,void 0,(function*(){const{errors:t,data:i}=e;return this.accountDataInitialized=!0,!(!t&&!i)&&(this.hasRegister=!!i.bilibiliHelperAccount.hasRegister,t&&t.length>0?(this.setStore("default",null),this.bhAccount=null,this.hasLogin=!1,t[0].message):(this.bhAccount=e.data.bilibiliHelperAccount.getState,this.bhAccount.isVIP=(0,c.isVIP)(this.bhAccount),this.bhAccount.isSuperVIP=(0,c.isSuperVIP)(this.bhAccount),this.setStore("default",this.bhAccount),this.hasLogin=!0,this.bhAccount))})))})),this.login=(e,t,i)=>a(this,void 0,void 0,(function*(){const{uid:t,password:o}=e;if(!t||!o)return;const n={query:"mutation ($blid: BLID!, $password: String) {\n                        bilibiliHelperAccount {\n                            login(blid: $blid, password: $password) {\n                                bhid\n                                bhName\n                                email\n                                identities {\n                                    name\n                                    from\n                                    to\n                                    hasDateTimeLimit\n                                }\n                            }\n                        }\n                    }\n                    ",variables:{blid:t,password:e.password}};yield this.emit("requestController","createGraphQL",{options:n},e=>a(this,void 0,void 0,(function*(){const{errors:t,data:o}=e;t&&t.length>0?(yield this.emit("*","accountChanged",{hasLogin:this.hasLogin,bilibiliAccount:this.bilibiliAccount?this.bilibiliAccount.toJSON():null,downloadingSettings:this.downloadingSettings,hasRegister:this.hasRegister,bhAccount:null}),yield this.emit("*","bhAccountChange",{bhAccount:null}),t.forEach(e=>i&&i(e))):e&&o&&(this.bhAccount=o.bilibiliHelperAccount.login,this.bhAccount.isVIP=(0,c.isVIP)(this.bhAccount),this.bhAccount.isSuperVIP=(0,c.isSuperVIP)(this.bhAccount),this.setStore("default",this.bhAccount),this.hasLogin=!0,this.bilibiliAccount&&(yield this.initLocalBilibiliAccount()),yield this.emit("*","accountChanged",{hasLogin:this.hasLogin,bilibiliAccount:this.bilibiliAccount?this.bilibiliAccount.toJSON():null,downloadingSettings:this.downloadingSettings,hasRegister:this.hasRegister,bhAccount:this.bhAccount}),yield this.emit("*","bhAccountChange",{bhAccount:this.getStore("default")}),yield this.checkSettingNeedUpdate(!1),i&&i({hasLogin:!0,bhAccount:this.bhAccount,bilibiliAccount:this.bilibiliAccount.toJSON()}))})))})),this.resetPassword=(e,t,i)=>a(this,void 0,void 0,(function*(){const{uid:t,password:o}=e;if(!t||!o)return;const n={query:"mutation ($blid: BLID!, $password: String!) {\n                      bilibiliHelperAccount {\n                        resetPassword(blid: $blid, password: $password)\n                      }\n                    }",variables:{blid:t,password:o}};yield this.emit("requestController","createGraphQL",{options:n},e=>a(this,void 0,void 0,(function*(){const{errors:t,data:o}=e;t&&t.length>0?t.forEach(e=>{switch(e.module){case"BILIBILI_HELPER_ACCOUNT":switch(e.type){case"NO_ACCESS_TO_RESET_PASSWORD":return this.needFillPassword=!0,i&&i("NO_ACCESS_TO_RESET_PASSWORD");case"BIND_ERROR":return this.hasLogin=!1,i&&i("LOGIN_ERROR")}break;default:break}}):e&&o&&i&&i(o.bilibiliHelperAccount.resetPassword)})))})),this.initLocalBilibiliAccount=()=>a(this,void 0,void 0,(function*(){return yield this.emit("bilibiliAccountController","getLocalAccount",null,e=>{this.bilibiliAccount=e}),yield this.getBHAccountState(),yield this.emit("*","accountChanged",{hasLogin:this.hasLogin,bhAccount:this.bhAccount,bilibiliAccount:this.bilibiliAccount?this.bilibiliAccount.toJSON():null,hasRegister:this.hasRegister}),this.bilibiliAccount})),this.signOut=(e,t,i)=>a(this,void 0,void 0,(function*(){const e={query:"mutation {\n                      bilibiliHelperAccount {\n                        signOut\n                      }\n                    }"};yield this.emit("requestController","createGraphQL",{options:e},e=>a(this,void 0,void 0,(function*(){const{errors:t,data:o}=e;t&&t.length>0?i instanceof Function&&i(!1):e&&(this.hasLogin=!1,this.bhAccount=null,yield this.emit("*","accountChanged",{hasLogin:this.hasLogin,bilibiliAccount:this.bilibiliAccount?this.bilibiliAccount.toJSON():null,downloadingSettings:this.downloadingSettings,hasRegister:this.hasRegister,bhAccount:this.bhAccount}),yield this.emit("*","bhAccountChange",{bhAccount:null}),i instanceof Function&&i(!0))})))})),this.sendCaptchaForBindEmail=(e,t,i)=>{const o={query:"mutation sendCaptchaForBindEmail($email: String!) {\n                      bilibiliHelperAccount {\n                        sendCaptchaForBindEmail(email: $email)\n                      }\n                    }",variables:{email:e.email}};this.emit("requestController","createGraphQL",{options:o},e=>a(this,void 0,void 0,(function*(){const{errors:t,data:o}=e;return t&&t.length>0?i&&i(t[0].message):i&&i("\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f")})))},this.validateCaptchaForEmailBind=(e,t,i)=>{const o={query:"mutation validateCaptchaForEmailBind($captcha: String!) {\n                      bilibiliHelperAccount {\n                        validateCaptchaForEmailBind(captcha: $captcha)\n                      }\n                    }",variables:{captcha:e.captcha+""}};this.emit("requestController","createGraphQL",{options:o},e=>a(this,void 0,void 0,(function*(){const{errors:t,data:o}=e;return t&&t.length>0?i&&i(t[0].message):(yield this.initLocalBilibiliAccount(),i&&i("\u7ed1\u5b9a\u6210\u529f"))})))},this.sendCaptchaForChangePassword=(e,t,i)=>{const o={query:"mutation changePassword($email: String!) {\n                      bilibiliHelperAccount {\n                        sendCaptchaForChangePassword(email: $email)\n                      }\n                    }",variables:{email:e.email}};this.emit("requestController","createGraphQL",{options:o},e=>a(this,void 0,void 0,(function*(){const{errors:t,data:o}=e;return t&&t.length>0?i&&i(t[0].message):i&&i("\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f")})))},this.validateCaptchaForChangePassword=(e,t,i)=>{const o={query:"mutation changePassword($captcha: String!, $password: String!) {\n                      bilibiliHelperAccount {\n                        validateCaptchaForChangePassword(captcha: $captcha, password: $password)\n                      }\n                    }",variables:{captcha:e.captcha+"",password:e.password}};this.emit("requestController","createGraphQL",{options:o},e=>a(this,void 0,void 0,(function*(){const{errors:t,data:o}=e;return t&&t.length>0?i&&i(t[0].message):i&&i("\u4fee\u6539\u6210\u529f")})))},this.sendCaptchaForSignUp=(e,t,i)=>{const o={query:"mutation signUp($blid: BLID!, $email: String!) {\n                      bilibiliHelperAccount {\n                        sendCaptchaForSignUp(blid: $blid, email: $email)\n                      }\n                    }",variables:{blid:e.blid,email:e.email}};this.emit("requestController","createGraphQL",{options:o},e=>a(this,void 0,void 0,(function*(){const{errors:t,data:o}=e;return t&&t.length>0?i&&i(t[0].message):i&&i("\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f")})))},this.validateCaptchaForSignUp=(e,t,i)=>{const o={query:"mutation signUp($blid: BLID!, $email: String!, $captcha: String!, $password: String!) {\n                      bilibiliHelperAccount {\n                        validateCaptchaForSignUp(blid: $blid, email: $email, captcha: $captcha, password: $password)\n                      }\n                    }",variables:{blid:e.blid,email:e.email,captcha:e.captcha+"",password:e.password}};this.emit("requestController","createGraphQL",{options:o},e=>a(this,void 0,void 0,(function*(){const{errors:t,data:o}=e;return t&&t.length>0?i&&i(t[0].message):i&&i("\u6ce8\u518c\u6210\u529f")})))},this.sendCaptchaForResetPassword=(e,t,i)=>{const o={query:"mutation resetPassword($blid: BLID!, $email: String!) {\n                      bilibiliHelperAccount {\n                        sendCaptchaForResetPassword(blid: $blid, email: $email)\n                      }\n                    }",variables:{blid:e.blid,email:e.email}};this.emit("requestController","createGraphQL",{options:o},e=>a(this,void 0,void 0,(function*(){const{errors:t,data:o}=e;return t&&t.length>0?i&&i(t[0].message):i&&i("\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f")})))},this.validateCaptchaForResetPassword=(e,t,i)=>{const o={query:"mutation resetPassword($blid: BLID!, $captcha: String!, $password: String!) {\n                      bilibiliHelperAccount {\n                        validateCaptchaForResetPassword(blid: $blid, captcha: $captcha, password: $password)\n                      }\n                    }",variables:{blid:e.blid,captcha:e.captcha+"",password:e.password}};this.emit("requestController","createGraphQL",{options:o},e=>a(this,void 0,void 0,(function*(){const{errors:t,data:o}=e;return t&&t.length>0?i&&i(t[0].message):i&&i("\u4fee\u6539\u6210\u529f")})))},this.queryTradeNoComplete=(e,t,i)=>{const o={query:"query queryTrade ($outTradeNo: String!) {\n                        payment {\n                            queryTradeByOutTradeNo(outTradeNo: $outTradeNo) {\n                                code\n                                sub_msg\n                                sub_code\n                                trade_status\n                            }\n                        }\n                    }",variables:{outTradeNo:e.outTradeNo}};this.emit("requestController","createGraphQL",{options:o},e=>a(this,void 0,void 0,(function*(){const{errors:t,data:o}=e;return t&&t.length>0?i&&i(t[0].message):("10000"===o.payment.queryTradeByOutTradeNo.code&&(yield this.initLocalBilibiliAccount()),i&&i(Object.assign(Object.assign({},o.payment.queryTradeByOutTradeNo),{hasLogin:this.hasLogin,bhAccount:this.bhAccount,bilibiliAccount:this.bilibiliAccount})))})))},this.useRedeem=(e,t,i)=>{const o={query:"mutation useRedeem ($code: String!) {\n                        bilibiliHelperAccount {\n                            useRedeem(code: $code)\n                        }\n                    }",variables:{code:e.code}};this.emit("requestController","createGraphQL",{options:o},e=>a(this,void 0,void 0,(function*(){const{errors:t,data:o}=e;return t&&t.length>0?i&&i(t[0].message):(yield this.initLocalBilibiliAccount(),i&&i({message:"\u5151\u6362\u6210\u529f",hasLogin:this.hasLogin,bhAccount:this.bhAccount,bilibiliAccount:this.bilibiliAccount}))})))},this.queryOrderAndRedeemList=(e,t,i)=>{const o={query:"query queryOrderList {\n                        bilibiliHelperAccount {\n                            queryOrderList {\n                              redeemList {\n                                active\n                                used\n                                generateType\n                                name\n                                code\n                                days\n                                to\n                                createDateTime\n                              }\n                              orderList {\n                                gmt_create\n                                out_trade_no\n                                total_amount\n                                product_id\n                                duration\n                              }\n                            }\n                        }\n                    }"};this.emit("requestController","createGraphQL",{options:o},e=>a(this,void 0,void 0,(function*(){const{errors:t,data:o}=e;return t&&t.length>0?i&&i(t[0].message):i&&i(o.bilibiliHelperAccount.queryOrderList)})))},this.uploadSettings2Cloud=(e,t,i)=>a(this,void 0,void 0,(function*(){const{featureName:t}=e;this.settingsNeedUpload[t]=yield new Promise(e=>this.emit(t,"getSettingsForUpload",null,e)),clearTimeout(this.uploadSettingIntervalNumber),this.uploadSettingIntervalNumber=setTimeout(()=>{const e={query:"mutation ($bhVersion: String!, $modelVersion: Int!, $value: String!) {\n                      bilibiliHelperSetting {\n                        setByFragment(bhVersion: $bhVersion, modelVersion: $modelVersion, value: $value)\n                      }\n                    }\n                    ",variables:JSON.stringify({bhVersion:d.version,modelVersion:2,value:JSON.stringify(this.settingsNeedUpload)})};this.settingsNeedUpload={},this.emit("requestController","createGraphQL",{options:e},e=>a(this,void 0,void 0,(function*(){const{errors:t}=e;t&&t.length>0?i instanceof Function&&i(!1):e&&i instanceof Function&&i(!0)})))},this.uploadSettingsDuration)})),this.checkSESSIONDATA=e=>a(this,void 0,void 0,(function*(){return new Promise(t=>{this.emit("requestController","create",{url:"https://api.bilibili.com/x/web-interface/nav",options:{contentType:"json",credential:"omit",headers:{"bilibili-helper-header-action-set-cookie":e}}},({data:e})=>{t(!!e&&(0===e.code&&e.data.isLogin))})})})),this.modifyReferer=e=>{const{initiator:t,requestHeaders:i}=e,o=!l.default.isEmpty(l.default.find(i,({name:e})=>e.match("bilibili-helper-header-action"))),n=[...i];if(o){const e=n.findIndex(({name:e})=>"bilibili-helper-header-action-set-cookie"===e);e>-1&&(n.push({name:"cookie",value:n[e].value}),n.splice(e,1))}return{requestHeaders:n}},this.syncSettingsFromCloud=(e,t=!1)=>a(this,void 0,void 0,(function*(){if(this.downloadingSettings&&this.cache.get()&&!(this.cache.get()<e)&&!t)return!1;this.downloadingSettings=!0,e&&this.cache.set(e),this.downloadSettings().then(()=>{this.downloadingSettings=!1})})),this.downloadSettings=(e,t,i)=>{const o={query:"query ($bhVersion: String!, $modelVersion: Int!) {\n                      bilibiliHelperSetting {\n                        get(bhVersion: $bhVersion, modelVersion: $modelVersion) {\n                            value\n                            bhVersion\n                            modelVersion\n                            lastUpdateTime\n                        }\n                      }\n                    }",variables:JSON.stringify({bhVersion:d.version,modelVersion:2})};return this.emit("requestController","createGraphQL",{options:o},e=>a(this,void 0,void 0,(function*(){const{errors:t,data:o}=e;t&&t.length>0?i instanceof Function&&i(!1):e&&o&&(i instanceof Function&&i(!0),o.bilibiliHelperSetting.get&&(this.cache.set(o.bilibiliHelperSetting.get.lastUpdateTime),this.emit("app","setSettingsFromCloud",{settings:JSON.parse(o.bilibiliHelperSetting.get.value)})))})))},this.checkSettingNeedUpdate=(e=!1)=>a(this,void 0,void 0,(function*(){this.needDownloadSettings=!1,this.hasLogin&&(yield this.getSettingLastUpdateTime().then(t=>{(this.cache.get()!==t||e)&&this.syncSettingsFromCloud(t,e)}))})),this.getSettingLastUpdateTime=(e,t,i)=>a(this,void 0,void 0,(function*(){const e={query:"query ($bhVersion: String!, $modelVersion: Int!) {\n                      bilibiliHelperSetting {\n                        get(bhVersion: $bhVersion, modelVersion: $modelVersion) {\n                            lastUpdateTime\n                        }\n                      }\n                    }",variables:JSON.stringify({bhVersion:d.version,modelVersion:2})};return yield this.emit("requestController","createGraphQL",{options:e},e=>a(this,void 0,void 0,(function*(){const{errors:t,data:o}=e;if(t&&t.length>0)i instanceof Function&&i(!1);else if(e&&o){const{lastUpdateTime:e}=o.bilibiliHelperSetting.get||{};return i instanceof Function&&i(e),e}})))}))}onInitStore(){return a(this,void 0,void 0,(function*(){const e=this.getStore("default");this.store=e?{hasLogin:!1,bhid:null,blidList:[],identities:[]}:e,this.settingStore=this.getStore("settings")||{}}))}onBeforeLaunch(){return a(this,void 0,void 0,(function*(){this.addListener("networkOnlineChange",this.onNetworkOnline),this.addListener("login",this.login),this.addListener("signOut",this.signOut),this.addListener("getStatus",(e,t,i)=>{let o;if(this.accountDataInitialized)return i({hasLogin:this.hasLogin,bilibiliAccount:this.bilibiliAccount?this.bilibiliAccount.toJSON():null,downloadingSettings:this.downloadingSettings,hasRegister:this.hasRegister,bhAccount:this.bhAccount}),clearInterval(o),!0;i(null)}),this.addListener("initBHAccount",(e,t,i)=>{this.initLocalBilibiliAccount().then(()=>{i({hasLogin:this.hasLogin,bhAccount:this.bhAccount,bilibiliAccount:this.bilibiliAccount})})}),this.addListener("getBHAccount",(e,t,i)=>{i(this.getStore("default"))}),this.addListener("uploadSettings",this.uploadSettings2Cloud),this.addListener("downloadSettings",(0,l.throttle)(this.downloadSettings,this.downloadSettingsDuration)),this.addListener("resetPassword",this.resetPassword),this.addListener("allHasLoaded",({firstInstall:e},t,i)=>{this.checkSettingNeedUpdate(e||this.needDownloadSettings),i()}),this.addListener("queryTradeNoComplete",this.queryTradeNoComplete),this.addListener("sendCaptchaForSignUp",this.sendCaptchaForSignUp),this.addListener("validateCaptchaForSignUp",this.validateCaptchaForSignUp),this.addListener("sendCaptchaForBindEmail",this.sendCaptchaForBindEmail),this.addListener("validateCaptchaForEmailBind",this.validateCaptchaForEmailBind),this.addListener("sendCaptchaForChangePassword",this.sendCaptchaForChangePassword),this.addListener("validateCaptchaForChangePassword",this.validateCaptchaForChangePassword),this.addListener("sendCaptchaForResetPassword",this.sendCaptchaForResetPassword),this.addListener("validateCaptchaForResetPassword",this.validateCaptchaForResetPassword),this.addListener("useRedeem",this.useRedeem),this.addListener("queryOrderAndRedeemList",this.queryOrderAndRedeemList),this.addListener("localBilibiliAccountLoginStateChange",({login:e})=>a(this,void 0,void 0,(function*(){e?(yield this.initLocalBilibiliAccount(),yield this.emit("*","accountChanged",{hasLogin:this.hasLogin,bhAccount:this.bhAccount,bilibiliAccount:this.bilibiliAccount?this.bilibiliAccount.toJSON():null,hasRegister:this.hasRegister,downloadingSettings:this.downloadingSettings})):(this.bilibiliAccount=null,yield this.emit("*","accountChanged",{hasLogin:this.hasLogin,bhAccount:this.bhAccount,bilibiliAccount:this.bilibiliAccount?this.bilibiliAccount.toJSON():null,hasRegister:this.hasRegister,downloadingSettings:this.downloadingSettings}),yield this.signOut())})))}))}onAfterLaunch(){return a(this,void 0,void 0,(function*(){}))}}t.BilibiliHelperAccountController=p},96849:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BilibiliHelperAccountController=t.BilibiliAccountController=void 0;var o=i(36602);Object.defineProperty(t,"BilibiliAccountController",{enumerable:!0,get:function(){return o.BilibiliAccountController}});var n=i(18603);Object.defineProperty(t,"BilibiliHelperAccountController",{enumerable:!0,get:function(){return n.BilibiliHelperAccountController}})},42760:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.CvImageDownload=void 0;const n=i(12404),r=i(83938);class a extends n.Feature{constructor(e){super(e,"cvImageDownload",{settings:{on:!0}}),this.getMineStr=e=>{switch(e){case"jpg":case"jpeg":case"webp":return"image/jpeg";case"gif":return"image/gif"}},this.getData=(e,t)=>new Promise(i=>{const o=this;this.imageMap[e]?i(this.imageMap[e]):this.image.onload=function(){o.canvas.width=this.width,o.canvas.height=this.height,o.canvas.getContext("2d").drawImage(this,0,0),o.imageMap[e]=o.canvas.toDataURL(t),i(o.imageMap[e])}}),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})})),this.imageMap={},this.canvas=document.createElement("canvas"),this.image=new Image}onLaunch(){return o(this,void 0,void 0,(function*(){if(this.settings.on)try{chrome.contextMenus.create({id:"acghelper-cv-image-download",title:(0,r.__)("cvImageDownload_name"),contexts:["image"],onclick:(e,t)=>{let i=e.srcUrl.replace(/^\/\//,"https://").replace(/http:/,"https:");i.match(/@[\d_!\w-]+\.avif$/)&&(i=i.split("@")[0]);const o=/\/(?:\w+)\.(\w+)$/.exec(i)[1]||"jpg",n=`${t.title.split(" - ")[0]}_${String(Math.random()).slice(2,8)}.${o}`;this.emit("downloadController","create",{name:n,data:{url:i,filename:n,headers:[{name:"Content-Disposition",value:`attachment; filename="${n}"; filename*="utf-8' '${n}"`.replace("/","%2f")}]}})}})}catch(e){}}))}onPause(){return o(this,void 0,void 0,(function*(){chrome.contextMenus.remove("acghelper-cv-image-download",null)}))}}t.CvImageDownload=a},8901:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(42760),t)},24824:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.removeSelectionLimit=void 0;const o=i(555),n=()=>{chrome.runtime.sendMessage({target:"removeSelectionLimit",event:"getSetting"},e=>{e.on&&(0,o.interval)(".article-holder").then(e=>{e&&e.setAttribute("style","user-select: unset!important")})})};t.removeSelectionLimit=n},28133:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DataController=void 0;const n=i(15141),r=o(i(4635));class a extends n.Item{constructor(e,t,i){super(e,t,i),this.__itemType="dataController",this.dataMap=new Map}get db(){return void 0===this._db&&this.platform&&(this._db=new r.default(this.platform)),this._db}}t.DataController=a},12478:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MediaResult=void 0;class i{constructor(e,t,i){Object.assign(this,{code:e,message:t,data:i})}}t.MediaResult=i},16045:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Database=void 0;const s=i(15141),l=i(12404),c=r(i(83995)),d=Object.keys(c).reduce((e,t)=>{const i=c[t];return i&&Function.call.bind(Object.prototype.isPrototypeOf)(s.Item,i)&&(e[t]=c[t]),e},{});class u extends l.Feature{constructor(e){super(e,"database"),this.getSettingsForUpload=(e,t,i)=>a(this,void 0,void 0,(function*(){i&&i({settings:this.simplifyConfig(this.settings)})}))}onBeforeLaunch(){const e=Object.create(null,{onBeforeLaunch:{get:()=>super.onBeforeLaunch}});return a(this,void 0,void 0,(function*(){yield e.onBeforeLaunch.call(this),yield this.loadItems(d)}))}onLaunch(){const e=Object.create(null,{onLaunch:{get:()=>super.onLaunch}});return a(this,void 0,void 0,(function*(){yield e.onLaunch.call(this)}))}}t.Database=u},9571:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.BilibiliLiveController=void 0;const n=i(96582),r=i(12478),a=i(28133);class s extends a.DataController{constructor(e){super(e,"bilibiliLiveController",{platform:"bilibili",dataType:"live"}),this.dataMap=new Map,this.creatingTempList=new Map,this.requestQueue=new Map,this.getLiveRoomData=e=>o(this,void 0,void 0,(function*(){return this.emit("requestController","create",{url:"https://api.live.bilibili.com/room/v1/Room/room_init?id="+e,options:{contentType:"json"}},e=>{var t,i,o;return 0===(null===e||void 0===e?void 0:e.data.code)&&(null===(t=null===e||void 0===e?void 0:e.data)||void 0===t?void 0:t.data)?new r.MediaResult(0,"\u83b7\u53d6\u76f4\u64ad\u95f4\u6570\u636e\u6210\u529f",null===(i=null===e||void 0===e?void 0:e.data)||void 0===i?void 0:i.data):new r.MediaResult(-1,"\u83b7\u53d6\u76f4\u64ad\u95f4\u6570\u636e\u5931\u8d25",null===(o=null===e||void 0===e?void 0:e.data)||void 0===o?void 0:o.data)})}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("getLiveSteamConfig",(e,t,i)=>o(this,void 0,void 0,(function*(){if(e.roomId){const t=yield this.getSteamConfig(e.roomId,null===e||void 0===e?void 0:e.onlyVideo,null===e||void 0===e?void 0:e.onAudio);i(null===t||void 0===t?void 0:t.data)}else i(!1)}))),this.addListener("getLiveRoomData",(e,t,i)=>o(this,void 0,void 0,(function*(){if(e.roomId){const t=yield this.getLiveRoomData(e.roomId);i(null===t||void 0===t?void 0:t.data)}else i(!1)})))}))}getSteamConfig(e,t=!1,i=!1){const o="https://api.live.bilibili.com/xlive/web-room/v2/index/getRoomPlayInfo",a={room_id:e,protocol:"0,1",format:"0,2",codec:"0,1",qn:3e4,platform:"web",ptype:16,only_video:Number(t),only_audio:Number(i)},s=(0,n.generateURL)(o,a),l=this.emit("requestController","create",{url:s,options:{contentType:"json"}},({data:e})=>0===e.code&&(null===e||void 0===e?void 0:e.data)?new r.MediaResult(0,"\u83b7\u53d6\u76f4\u64ad\u95f4\u63a8\u6d41\u914d\u7f6e\u6210\u529f",null===e||void 0===e?void 0:e.data):new r.MediaResult(-1,"\u83b7\u53d6\u76f4\u64ad\u95f4\u63a8\u6d41\u914d\u7f6e\u5931\u8d25",null===e||void 0===e?void 0:e.data));return l||!1}parseParamsFromURL(e){const t=new URL(e),i=/^\/(?:blanc\/)?(\d+)/.exec(t.pathname);return!(!i||!i[1])&&+i[1]}turnCreateInterval(e){this.creatingTempList.delete(e);const t=setTimeout(()=>{this.creatingTempList.delete(e)},3e4);this.creatingTempList.set(e,t)}}t.BilibiliLiveController=s},2389:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(9571),t)},83995:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(2389),t)},93507:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Aria2c=void 0;const r=i(12404),a=n(i(52296)),s=(i(555),[]);class l extends r.Feature{constructor(e){super(e,"aria2c",{settings:{on:!1,host:"localhost",port:"6800",path:"/jsonrpc",secret:"",protocol:"http"}}),this.__messageId=0,this.__connected=!1,this.ws=null,this.downloadFilenames={},this.getGlobalStat=(e,t,i)=>o(this,void 0,void 0,(function*(){yield this.send("aria2.getGlobalStat",["token:"+this.settings.secret])})),this.wrapMessage=(e,t)=>({method:e,"json-rpc":"2.0",id:this.messageId,params:t}),this.initWs=()=>{this.ws=new WebSocket(this.url),this.ws.onclose=(...e)=>{},this.ws.onmessage=e=>{const t=JSON.parse(e.data);if(this.__connected=!0,t.result&&s.push(t.result),t.method&&t.params){const e=t.params.filter(e=>s.includes(e));if(e)switch(t.method){case"aria2.onDownloadStart":this.emit("notificationController","post",{title:"\u89c6\u9891\u5df2\u5f00\u59cb\u4e0b\u8f7d",tag:"aria2c"+e.map(({gid:e})=>e).join(",")});break;case"aria2.onDownloadComplete":this.emit("notificationController","post",{title:"\u89c6\u9891\u5df2\u4e0b\u8f7d\u5b8c\u6bd5",tag:"aria2c"+e.map(({gid:e})=>e).join(",")});break;case"aria2.onDownloadPause":this.emit("notificationController","post",{title:"\u89c6\u9891\u4e0b\u8f7d\u5df2\u6682\u505c",tag:"aria2c"+e.map(({gid:e})=>e).join(",")});break;case"aria2.onDownloadStop":this.emit("notificationController","post",{title:"\u89c6\u9891\u4e0b\u8f7d\u5df2\u7ec8\u6b62",tag:"aria2c"+e.map(({gid:e})=>e).join(",")});break;case"aria2.onDownloadError":this.emit("notificationController","post",{title:"\u89c6\u9891\u4e0b\u8f7d\u51fa\u9519",tag:"aria2c"+e.map(({gid:e})=>e).join(",")});break}}},this.ws.onopen=(...e)=>{this.connectedTest()},this.ws.onerror=(...e)=>{this.emit("notificationController","post",{title:"aria2c RPC \u8fde\u63a5\u5931\u8d25",tag:"aria2c connect failed"})}},this.closeWs=()=>o(this,void 0,void 0,(function*(){this.ws&&(yield this.ws.close()),this.ws=null})),this.send=(e,t)=>o(this,void 0,void 0,(function*(){const i=this.wrapMessage(e,t);this.useWs?yield this.sendByWs(i):yield this.sendByHttp(i)})),this.sendByHttp=e=>o(this,void 0,void 0,(function*(){fetch(this.url,{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>(e.error?this.emit("notificationController","post",{title:"aria2c RPC Error"+e.error.message,tag:"aria2c"+e.error.id+Date.now()}):this.__connected=!0,e)).catch(e=>{this.emit("notificationController","post",{title:"aria2c RPC \u8fde\u63a5\u5931\u8d25",tag:"aria2c connect failed"})})})),this.sendByWs=e=>o(this,void 0,void 0,(function*(){yield this.ws.send(JSON.stringify(e))})),this.connectedTest=()=>o(this,void 0,void 0,(function*(){yield this.getGlobalStat()})),this.download=(e,t,i)=>o(this,void 0,void 0,(function*(){if(!this.settings.on||!this.__connected)return this.emit("notificationController","post",{title:"Aria2c \u8c03\u7528\u5931\u8d25\u6216\u672a\u8fde\u63a5",tag:"aria2c connected failed"+Date.now()});if(this.isVIP||this.isSuperVIP){const t=new a.default(e.uri),i=yield this.emit("renameDownloadFile","renameFileName",{type:"video",pathname:t.pathname});yield this.send("aria2.addUri",["token:"+this.settings.secret,[e.uri],{out:i,header:["referer: https://www.bilibili.com"]}])}else this.emit("notificationController","post",{title:"Aria2c\uff1a\u5f00\u901a\u52a9\u624b\u4f1a\u5458\u4ee5\u4f7f\u7528\u6b64\u529f\u80fd",tag:"aria2c no vip"+Date.now()});i()})),this.onAfterSetSettingsFromCloud=()=>o(this,void 0,void 0,(function*(){this.isVIP||(this.settings.on=!1,yield this.closeWs())})),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})})),window.aria2c=this}get url(){let e=this.settings.protocol+"://"+this.settings.host;return this.settings.port&&(e+=":"+this.settings.port),e+this.settings.path}get messageId(){return++this.__messageId}get useWs(){return["ws","wss"].includes(this.settings.protocol)}onAfterSetSetting(e,t){return o(this,void 0,void 0,(function*(){this.settings.on?(this.isVIP||this.isSuperVIP)&&(yield this.closeWs(),this.useWs?yield this.initWs():yield this.connectedTest()):yield this.closeWs()}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){this.settings.on&&(this.isVIP||this.isSuperVIP?this.useWs?yield this.initWs():yield this.connectedTest():yield this.pause())}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.isVIP||this.isSuperVIP?(this.addListener("getConnectedStat",(e,t,i)=>i(this.__connected)),this.addListener("getGlobalStat",this.getGlobalStat),this.addListener("download",this.download)):yield this.pause()}))}onPause(){return o(this,void 0,void 0,(function*(){yield this.closeWs()}))}}t.Aria2c=l},12956:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(90700),t),n(i(93507),t)},90700:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RenameDownloadFile=void 0;const r=i(20078),a=i(12404),s=n(i(32699)),l=n(i(98777)),c=n(i(52296)),d=i(555),u={TITLE:e=>e.title,AID:e=>e.aid,CID:e=>e.cid,BVID:e=>e.bvid,QUALITY:e=>r.VIDEO_FORMATS_MAP[Number(e.quality)],UPPER:e=>e.owner.name,UID:e=>e.owner.mid,FORMAT:e=>e.format,PN:e=>e.pageNumber,PRE_TITLE:e=>e.preTitle,SUBTITLE:e=>e.subTitle||!1,DATE:e=>e.pubdate?(0,l.default)(new Date(Number(e.pubdate+"000"))).format("YYYY-MM-DD"):"",TIME:e=>e.pubdate?(0,l.default)(new Date(Number(e.pubdate+"000"))).format("HH:mm:ss"):"",NOW_DATE:e=>(0,l.default)().format("YYYY-MM-DD"),NOW_TIME:e=>(0,l.default)().format("HH:mm:ss"),ROOM_ID:e=>e.roomId,LANG:e=>e.lang},p={videoFilename:"__TITLE__.__SUBTITLE__.__CID__.__FORMAT__",videoCoverFilename:"videoCover-__TITLE__.__SUBTITLE__.__CID__.__FORMAT__",videoScreenshotFilename:"screenshot-__TITLE__.__SUBTITLE__.__CID__.__NOW_DATE__ __NOW_TIME__.__FORMAT__",videoDanmuFilename:"__TITLE__.__SUBTITLE__.__CID__.__FORMAT__",audioFilename:"__TITLE__.__SUBTITLE__.__CID__.__FORMAT__",liveScreenshotFilename:"liveScreenshot-__TITLE__.__NOW_DATE__ __NOW_TIME__.__FORMAT__",subtitleFilename:"__TITLE__.__CID__.__LANG__.__FORMAT__"};class h extends a.Feature{constructor(e){super(e,"renameDownloadFile",{settings:Object.assign({on:!0},p)}),this.downloadFilenames={},this.reset=()=>{this.settings=Object.assign(Object.assign({},this.settings),p),this.setStore("shortcuts",this.settings)},this.videoRenameCallback=(0,d.webRequestCallbackWrapper)(e=>{const{initiator:t,responseHeaders:i,url:o}=e;if(/^chrome-extension:\/\//.test(t))return{responseHeaders:i};const n=new c.default(o,"",!0),{query:r}=n;if(!r||!r.requestFrom)return{responseHeaders:i};const a=this.downloadFilenames[n.pathname];if(a){delete this.downloadFilenames[n.pathname];const e=this.generateFilename("video",a),t=s.default.find(i,e=>"content-disposition"===e.name.toLowerCase()),o=`attachment; filename="${e}"; filename*="utf-8' '${e}"`.replace("/","%2f");t?t.value=o:i.push({name:"Content-Disposition",value:o})}return{responseHeaders:i}}),this.audioRenameCallback=(0,d.webRequestCallbackWrapper)(e=>{const{initiator:t,responseHeaders:i,url:o}=e;if(/^chrome-extension:\/\//.test(t))return{responseHeaders:i};const n=new c.default(o,"",!0),{query:r}=n;if(!r||!r.requestFrom)return{responseHeaders:i};const a=this.downloadFilenames[n.pathname];if(a){delete this.downloadFilenames[n.pathname];const e=this.generateFilename("audio",a),t=s.default.find(i,e=>"content-disposition"===e.name.toLowerCase()),o=`attachment; filename="${e}"; filename*="utf-8' '${e}"`;t?t.value=o:i.push({name:"Content-Disposition",value:o})}return{responseHeaders:i}}),this.generateFilename=(e,t)=>{let i=this.settings[e+"Filename"];const o=[...i.matchAll("__.+?__")].flat();return o.forEach(e=>{const o=e.slice(2,-2);if(u[o]){const n=u[o](t);i=i.replace(e,n||"")}}),(0,d.ToCDB)(i.replace(/\s/g,"_")).replace(/[\\/:*?"<>|]/g,"_").replace(/\.\./g,".")},this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onAfterSetSetting(e,t){this.emit("*","renameSettingChange",this.settings)}onBHAccountChange(){return o(this,void 0,void 0,(function*(){this.bhAccount&&(0,d.isVIP)(this.bhAccount)||this.reset()}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("sendVideoFilename",(e,t,i)=>{const o=new c.default(e.url,"",!0);this.downloadFilenames[o.pathname]=e,i()}),this.addListener("renameFileName",(e,t,i)=>{const{type:o,data:n,pathname:r}=e,a=this.settings[o+"Filename"];if(a){if(n){const e=this.generateFilename(o,n);i(e)}else if(!n&&r){const e=this.downloadFilenames[r];if(e){const t=this.generateFilename(o,e);i(t)}else i(!1)}}else i(!1)})}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.emit("webRequestController","create",{name:"videoDownloadFlvRenameFilename",eventName:"onHeadersReceived",filter:{urls:["*://*.bilivideo.com/upgcxcode/**/*.*?*","*://*.mcdn.bilivideo.cn:*/upgcxcode/**/*.*?*"]},options:["responseHeaders","blocking"],callback:this.videoRenameCallback}),this.emit("webRequestController","create",{name:"videoDownloadAudioRenameFilename",eventName:"onHeadersReceived",filter:{urls:["*://*.bilivideo.com/upgcxcode/**/*.m4s?*"]},options:["responseHeaders","blocking"],callback:this.audioRenameCallback})}))}}t.RenameDownloadFile=h},82039:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CheeseDarkMode=t.BlackboardComment=t.SearchDarkMode=t.LivePlayDarkMode=t.VideoPlayDarkMode=t.HistoryDarkMode=t.WatchLaterDarkMode=t.SpaceDarkMode=t.MessageDarkMode=t.ReadRankDarkMode=t.ReadCVDarkMode=t.ReadDarkMode=t.DynamicDarkMode=t.HomeDarkMode=t.IframeMessageDarkMode=t.IframeDynamicDarkMode=void 0;const n=i(82405),r=o(i(57689)),a=i(555),s=i(57333),l=i(81315),c=i(55410),d=i(33126),u=i(59724),p=i(40695),h=i(35877),m=i(39294),f=i(42555),b=i(36861),v=i(7603);class g extends r.default.Component{constructor(e){super(e),this.hackedCSS=null,this.copyedHackedCSS=null,this.state={showDark:!0},this.sysDark=matchMedia("(prefers-color-scheme: dark)"),this.updateDarkModeListener=()=>{!0===this.props.followSystem?(this.sysDark.matches?(document.body.classList.add("bilibili-helper-dark-mode"),this.inactiveHackedCSS()):(document.body.classList.remove("bilibili-helper-dark-mode"),this.activeHackedCSS()),this.setState({showDark:this.sysDark.matches}),this.sysDark.onchange=()=>{this.setState({showDark:this.sysDark.matches})}):this.sysDark.onchange=null},this.activeHackedCSS=()=>{this.copyedHackedCSS&&document.head.appendChild(this.copyedHackedCSS)},this.inactiveHackedCSS=()=>{this.hackedCSS&&(this.copyedHackedCSS=this.hackedCSS.cloneNode(),this.hackedCSS.remove())}}componentDidMount(){this.updateDarkModeListener(),new MutationObserver((e,t)=>{for(let t=0;t<e.length;++t){const i=e[t];if(i.addedNodes.length>0){const e=Array.from(i.addedNodes.values()).filter(e=>"LINK"===e.tagName)[0];e&&"__css-map__"===e.id&&(this.hackedCSS=e,this.state.showDark?this.inactiveHackedCSS():this.activeHackedCSS())}}}).observe(document.head,{childList:!0})}componentDidUpdate(e,t,i){null===e.followSystem&&this.updateDarkModeListener()}}const y=(e,t=!1,i=!0,o=!0)=>r.default.createElement(r.default.Fragment,null,r.default.createElement(s.DarkModeStyle,null),o?r.default.createElement(s.TopBarDarkModeStyle,null):null,i?r.default.createElement(s.TopBarWithoutBanner,null):null,t?r.default.createElement(s.FooterDarkModeStyle,null):null,e);class w extends g{render(){const e=y([r.default.createElement(b.IframeDynamicDarkModeStyle,{key:"iframeDynamic"})]);return this.state.showDark?e:null}}t.IframeDynamicDarkMode=w;class k extends g{render(){const e=y([r.default.createElement(v.IframeMessageDarkModeStyle,{key:"iframeMessage"})]);return this.state.showDark?e:null}}t.IframeMessageDarkMode=k;class x extends g{render(){const e=y([r.default.createElement(l.HomeDarkModeStyle,{key:"home"})],!0,!1);return this.state.showDark?((0,a.removeInjectedStyleLink)("homeLight"),(0,a.injectStyleLink)("homeDark","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/dark.css",!0)):((0,a.removeInjectedStyleLink)("homeDark"),(0,a.injectStyleLink)("homeLight","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/light.css",!0)),this.state.showDark?e:null}}t.HomeDarkMode=x;class S extends g{render(){const e=y([r.default.createElement(c.DynamicDarkModeStyle,{key:"dynamic"}),r.default.createElement(s.UserPopperDarkModeStyle,{key:"userPopper"})]);return(0,a.injectStyleLink)("basicCssMap","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/map.css",!0,!0),this.state.showDark?((0,a.removeInjectedStyleLink)("homeLight"),(0,a.injectStyleLink)("homeDark","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/dark.css",!0,!0)):((0,a.removeInjectedStyleLink)("homeDark"),(0,a.injectStyleLink)("homeLight","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/light.css",!0,!0)),this.state.showDark?e:null}}t.DynamicDarkMode=S;class _ extends g{render(){const e=y([r.default.createElement(d.ReadDarkModeStyle,{key:"read"})]);return this.state.showDark?e:null}}t.ReadDarkMode=_;class O extends g{render(){const e=y([r.default.createElement(d.ReadCVDarkModeStyle,{key:"cv"}),r.default.createElement(s.UserPopperDarkModeStyle,{key:"userPopper"})],!0);return this.state.showDark?e:null}}t.ReadCVDarkMode=O;class C extends g{render(){const e=y([r.default.createElement(d.ReadRankDarkModeStyle,{key:"readRank"})],!0);return this.state.showDark?e:null}}t.ReadRankDarkMode=C;class L extends g{render(){const e=y([r.default.createElement(u.MessageDarkModeStyle,{key:"message"})]);return this.state.showDark?e:null}}t.MessageDarkMode=L;class P extends g{componentDidMount(){super.componentDidMount()}render(){const e=y([r.default.createElement(p.SpaceDarkModeStyle,{key:"space"}),r.default.createElement(s.UserPopperDarkModeStyle,{key:"userPopper"})]);return this.state.showDark?((0,a.removeInjectedStyleLink)("homeLight"),(0,a.injectStyleLink)("homeDark","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/dark.css",!0,!0)):((0,a.removeInjectedStyleLink)("homeDark"),(0,a.injectStyleLink)("homeLight","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/light.css",!0,!0)),this.state.showDark?e:null}}t.SpaceDarkMode=P;class T extends g{render(){const e=y([r.default.createElement(l.WatchLaterDarkModeStyle,{key:"watchLater"})],!0,!1);return this.state.showDark?e:null}}t.WatchLaterDarkMode=T;class I extends g{render(){const e=y([r.default.createElement(l.HistoryDarkModeStyle,{key:"history"}),r.default.createElement(s.FooterDarkModeStyle_2,{key:"footer2"})],!1,!1);return this.state.showDark?e:null}}t.HistoryDarkMode=I;class D extends g{componentDidMount(){this.props.showDark&&(0,a.interval)("#__css-map__",200).then(e=>{null===e||void 0===e||e.remove()})}componentDidUpdate(e,t,i){var o;this.props.showDark?(null===(o=document.getElementById("__css-map__"))||void 0===o||o.remove(),(0,a.injectStyleLink)("homeDark","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/dark.css",!0)):(0,a.injectStyleLink)("homeDark","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/light.css",!0)}render(){const e=y([r.default.createElement(h.VideoPlayDarkModeStyle,{key:"videoPlay"}),r.default.createElement(s.UserPopperDarkModeStyle,{key:"userPopper"})]);return this.props.showDark?e:null}}t.VideoPlayDarkMode=D;class M extends g{render(){return this.state.showDark?r.default.createElement(r.default.Fragment,null,r.default.createElement(s.DarkModeStyle,null),r.default.createElement(m.LivePlayDarkModeStyle,null)," ",r.default.createElement(s.UserPopperDarkModeStyle,null)):null}}t.LivePlayDarkMode=M;class A extends g{render(){const e=y([r.default.createElement(f.SearchDarkModeStyle,{key:"search"})],!0);return this.state.showDark?e:null}}t.SearchDarkMode=A;class E extends g{render(){return(0,a.injectStyleLink)("basicCssMap","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/map.css",!0,!0),this.state.showDark?((0,a.removeInjectedStyleLink)("homeLight"),(0,a.injectStyleLink)("homeDark","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/dark.css",!0)):((0,a.removeInjectedStyleLink)("homeDark"),(0,a.injectStyleLink)("homeLight","https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/light.css",!0)),null}}t.BlackboardComment=E;class B extends g{render(){const e=y([r.default.createElement(n.CheeseStyle,{key:"cheese"})],!0);return this.state.showDark?e:null}}t.CheeseDarkMode=B},43775:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(i(57689)),r=o(i(56058)),a=o(i(635)),s=i(95947),l=i(82039);t["default"]=()=>{const e=(0,a.default)(s.Button).attrs({className:"bilibili-helper-video-dark-mode-btn"})`
      margin-left: auto;
      height: 22px;
      border-radius: 4px;

      button {
        padding: 0 4px;
        min-width: unset;
        font-size: 12px;
        border: 1px solid #fb7299;
        border-radius: 4px;
        color: ${({active:e})=>e?"#fff":"#fb7299"};
        background-color: ${({active:e})=>e?"#fb7299":"#fff"};
        cursor: pointer;
      }
    `;return class extends n.default.Component{constructor(e){super(e),this.handleOnClick=()=>{const e=!this.state.showDark;this.setState({showDark:e}),r.default.set("videoDark",e),e||!1!==this.darkStore||!this.darkGlobal||this.darkTwoFactor||r.default.set("videoDarkTwoFactor",!0),e&&!this.darkGlobal&&this.darkTwoFactor&&r.default.set("videoDarkTwoFactor",!1)},this.darkStore=r.default.get("videoDark"),this.darkTwoFactor=r.default.get("videoDarkTwoFactor"),this.state={showDark:this.darkStore},this.isOldPageOrWatchLater=!!document.querySelector("#__bofqi,.view-later-module, #bangumi_detail")}componentDidMount(){chrome.runtime.sendMessage({target:"darkMode",event:"getSetting"},e=>{if(this.darkGlobal=e.on,e.on&&!this.darkTwoFactor){if(e.darkFollowSystem){const e=matchMedia("(prefers-color-scheme: dark)");this.setState({showDark:e.matches}),e.onchange=()=>{this.setState({showDark:e.matches})}}else this.setState({showDark:!0});if(!1===this.darkStore){let e=r.default.get("videoDarkTime");e=void 0!==e?++e:1,e>3?(r.default.remove("videoDark"),r.default.remove("videoDarkTime")):r.default.set("videoDarkTime",e)}}})}render(){const t=this.state.showDark;return n.default.createElement(n.default.Fragment,null,n.default.createElement(e,{active:t&&!this.isOldPageOrWatchLater,onClick:this.handleOnClick},"\u6df1\u8272\u6a21\u5f0f"),n.default.createElement(l.VideoPlayDarkMode,{showDark:t}))}}}},57333:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UserPopperDarkModeStyle=t.FooterDarkModeStyle_2=t.FooterDarkModeStyle=t.TopBarDarkModeStyle=t.TopBarWithoutBanner=t.DarkModeStyle=void 0;const o=i(635),n=i(43521),r=i(15477),a=o.createGlobalStyle`
  html {
    --dark-0: #101010;
    --dark-1: #141414;
    --dark-2: #131313;
    --dark-3: #1f1f1f;
    --dark-4: #2b2b2b;
    --dark-5: #333333;
    --dark-6: #393939;
    --dark-card: #151515;

    --bg: #1c2022;
    --divider: rgb(47 47 47 / 75%);

    --dark-font-0: #e8e8e8;
    --dark-font-1: #99a2aa;
    --dark-font-2: #879199;
    --dark-font-3: #d9d9d9;
  }

  :root {
    ${n.bilibiliDarkColor};
  }

  body.bilibili-helper-dark-mode {
    background-color: var(--bg) !important;
    color: var(--dark-font-0)!important;
  }
`;t.DarkModeStyle=a;const s=o.createGlobalStyle`
  .international-header .mini-type, .mini-header {
    background: var(--dark-card) !important;
  }

  .nav-link .nav-link-ul .nav-link-item .link,
  .nav-user-center .user-con .item .name {
    color: var(--dark-font-0) !important;
  }
`;t.TopBarWithoutBanner=s;const l=o.createGlobalStyle`
  // 搜索框
  .international-header .nav-search #nav_searchform {
    background: var(--dark-3) !important;
    border-color: var(--dark-3) !important;

    input:focus {
      color: var(--dark-font-0) !important;
    }

    .nav-search-btn {
      background: var(--dark-4) !important;
    }
  }

  .international-header .nav-search-box {
    .header-search-suggest {
      border-color: var(--dark-1) !important;
      background: var(--dark-3) !important;
      color: var(--dark-font-2) !important;

      .trending-item {
        :hover {
          background-color: var(--dark-3) !important;
        }
      }

      .rank.top, .rank.search-rank-top {
        color: var(--dark-font-3) !important;
      }
    }
  }

  .i-frame {
    &::before {
      background-color: var(--bg) !important;
    }

    iframe {
      background-color: unset !important;
    }
  }

  .bilibili-search-history, .bilibili-search-suggest {
    background: var(--dark-card) !important;
    border-color: var(--dark-card) !important;

    li {
      &:hover, &.focus {
        background-color: var(--dark-3) !important;
      }

      a {
        color: var(--dark-font-0) !important;
      }
    }
  }

  //弹出Popper
  .channel-menu-mini, .van-popper-avatar, .van-popper-avatar .level-intro, .van-popper-avatar .coins .info .login-award, .van-popper-avatar .lang-change .lang-intro,
  .van-popper-vip, .van-popper-favorite, .van-popper-favorite .view-all, .van-popper-favorite .play-all, .van-popper-history, .van-popper-upload {
    background-color: var(--dark-3) !important;
  }

  //文字 轻
  .van-popper-avatar .level-info .progress, .van-popper-avatar .count-item .item-key,
  .van-popper-favorite .tab-item--normal, .van-popper-favorite .tab-item--normal .num, .van-popper-favorite .empty-list,
  .header-video-card .video-info .info,
  .header-video-card .video-info .desc,
  .van-popper-history .tab-item,
  .van-popper-history .date-title {
    color: var(--dark-font-1) !important;
  }

  //文字 重
  .van-popover a,
  .van-popper-avatar .level-info .grade, .van-popper-avatar .level-intro, .van-popper-avatar .coins,
  .van-popper-avatar .lang-change .lang-title, .van-popper-avatar .count-item .item-value, .van-popper-avatar .links .link-title,
  .van-popper-avatar .lang-change .lang-intro, .van-popper-avatar .logout, .van-popper-avatar .logout span:hover,
  .van-popper-avatar .nickname,
  .van-popper-avatar .coins .contact-tips,
  .vip-m .bubble-traditional .recommand .title,
  .van-popper-favorite .view-all, .van-popper-favorite .play-all,
  .header-video-card .video-info .line-1,
  .header-video-card .video-info .line-2,
  .van-popper-history .tab-item.tab-item--active,
  .van-popper-history .tab-item.tab-item--active:hover {
    color: var(--dark-font-0) !important;
  }

  //框线
  .van-popper-avatar .coins,
  .van-popper-avatar .counts,
  .van-popper-avatar .links,
  .van-popper-avatar .lang-change,
  .channel-menu-mini .r-box,
  .van-popper-favorite .tabs-panel,
  .van-popper-favorite .play-all,
  .van-popper-history .tab-header {
    border-color: var(--divider) !important;
  }

  //hover蓝
  .van-popover a:hover,
  .van-popper-avatar .coins .info a:hover,
  .van-popper-avatar .counts .count-item:hover .item-key,
  .van-popper-avatar .counts .count-item:hover .item-value .item-num,
  .van-popper-avatar .level-intro__link,
  .van-popper-history .tab-item:hover {
    color: #00A1D6 !important;
  }

  //hover深
  .channel-menu-mini .box a:hover,
  .van-popper-avatar .links .link-item:hover,
  .van-popper-avatar .logout a:hover,
  .van-popper-avatar .lang-change .lang-item:hover,
  .van-popper-avatar .lang-change .lang-intro-item:hover,
  .van-popper-avatar .logout span:hover,
  .van-popper-favorite .tab-item--normal:hover,
  .van-popper-favorite .view-all:hover,
  .van-popper-favorite .play-all:hover,
  .header-video-card:hover,
  .van-popper-upload .upload-item:hover {
    background: var(--dark-2) !important;
  }

  //经验条
  .van-popper-avatar .level-bar {
    background: var(--dark-0) !important;
  }

  //Card顶上的小尖尖
  .van-popper-vip, .van-popper-favorite, .van-popper-history, .van-popper-upload, .popover-app-download {
    .popper__arrow, .popper__arrow::after {
      border-bottom-color: var(--dark-3) !important;
    }
  }

  //下载App
  .popover-app-download {
    background: url(${(0,r.getURL)("/statics/imgs/app-download.png")}) !important;
    background-size: cover !important;

    .txt {
      color: var(--dark-font-0) !important;
    }
  }

  //历史查看更多
  .van-popper-history .view-all {
    background: var(--dark-5) !important;
  }

  //邮箱、手机绑定的悬浮提示框
  .van-popper-avatar .coins .contact-tips {
    background-color: var(--dark-5) !important;
    border-color: var(--dark-5) !important;
    //箭头
    &::after {
      transform: rotate(45deg);
      background: var(--dark-5) !important;
    }

    &.email-tips::after {
      right: -5px !important;
    }

    &.phone-tips::after {
      left: -5px !important;
    }
  }
`;t.TopBarDarkModeStyle=l;const c=o.createGlobalStyle`
  .international-footer {
    background-color: var(--bg) !important;

    .link-box .link-item {
      border-color: var(--divider);

      .bt {
        color: var(--dark-font-2);
      }
    }

    .link-box .link-item.link-c p, .link-box .link-item.link-c a.weixin:hover p,
    a, .partner, .partner a {
      color: var(--dark-font-0);
    }
  }
`;t.FooterDarkModeStyle=c;const d=o.createGlobalStyle`
  .bili-footer {
    .footer-wrp {
      background-color: var(--bg) !important;
      padding-bottom: 70px !important;
    }

    .boston-postcards li {
      border-color: var(--divider);

      .tips {
        color: var(--dark-font-2);
      }
    }

    a {
      color: var(--dark-font-0);
    }

    .partner a:hover {
      color: #00a1d6 !important;
    }
  }
`;t.FooterDarkModeStyle_2=d;const u=o.createGlobalStyle`
  .user-card, .user-card-m, .userinfo-content {
    background: var(--dark-3) !important;

    .face {
      border-color: var(--dark-3) !important;
    }

    .btn-box {
      a.like {
        color: #fff !important;
        border-color: #00a1d6 !important;
        background-color: #00a1d6 !important;
      }

      a.like:hover {
        border-color: #00b5e5 !important;
        background-color: #00b5e5 !important;
      }

      a, a.liked {
        background: var(--dark-5) !important;
        color: var(--dark-font-1) !important;
        border-color: var(--dark-5) !important;

        &:hover {
          background: var(--dark-4) !important;
        }
      }
    }

    .info {
      .user .name, .social {
        color: var(--dark-font-1) !important;

        &.vip, &.vip-red-name {
          color: #fb7299 !important;
        }

        &:hover {
          color: #00A1D6 !important;
        }
      }

      .social a, .sign {
        color: var(--dark-font-1) !important;
      }
    }
  }

  .user-card, .user-card-m, .userinfo-wrapper {
    border-color: var(--dark-3) !important;
  }

  .user-card-m .loading div {
    background: var(--dark-3) !important;
  }

  .nameplate-card {
    background: var(--dark-3) !important;
    border-color: var(--dark-3) !important;

    .nameplate-text {
      border-color: var(--dark-1) !important;

      .n-name, .n-title {
        color: var(--dark-font-0) !important;
      }
    }
  }
`;t.UserPopperDarkModeStyle=u},14517:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DynamicMain=t.CommentMain=t.HomeBase=void 0;const i="\n    .international-header a {\n      color: var(--dark-font-0);\n    }\n    .tab-line-itnl {\n      border-color: var(--divider)!important;\n    }\n    .page-tab .con li {\n      border-color: var(--bg)!important;\n    }\n    .van-popover.van-popper-channel {\n      background: var(--dark-2)!important;\n      border-color: var(--dark-2)!important;\n      .popper__arrow, .popper__arrow::after {\n        border-top-color: var(--dark-2)!important;\n        border-bottom-color: var(--dark-2)!important;\n      }\n    }\n    .bili-banner .taper-line {\n      z-index: 2!important;\n      height: 180px!important;\n    }\n    ";t.HomeBase=i;const o="\n    .b-head {\n      color: var(--dark-font-3)!important;\n    }\n    .bb-comment {\n      background-color: unset!important;\n      .comment-header {\n        border-color: var(--divider)!important;\n        .tabs-order li:not(.on):not(:hover) {\n          color: var(--dark-font-3)!important;\n        }\n      }\n      .comment-send .comment-emoji {\n        border: 1px solid var(--dark-3);\n        background-color: var(--dark-3);\n      }\n      .comment-list .list-item {\n        .user-face .hot-follow .follow-btn.followed {\n          background-color: var(--dark-5);\n          color: var(--dark-font-2);\n        }\n        .con {\n          border-color: var(--divider)!important;\n          .user .name {\n            color: var(--dark-font-1);\n          }\n          .text, div .text-area .text-content {\n            color: var(--dark-font-3);\n          }\n          .vote-container {\n            border-color: var(--dark-4)!important;\n            &:hover .text-area {\n              box-shadow: 0 3px 10px 0 var(--dark-1)!important;\n            }\n          }\n          .info {\n            .reply:hover {\n              background: var(--dark-1);\n            }\n            .reply-tags span {\n              background-color: var(--dark-1) !important;\n              color: var(--dark-font-1) !important;\n            }\n            .operation .opera-list {\n              background-color: var(--dark-3);\n              color: var(--dark-font-0);\n              li:hover {\n                background-color: var(--dark-2);\n              }\n            }\n          }\n          .reply-box {\n            .reply-item {\n              border-color: var(--dark-4);\n              .reply-con {\n                .user .text-con {\n                  color: var(--dark-font-0);\n                }\n                .info .reply:hover {\n                  background: var(--dark-1);\n                }\n              }\n            }\n            .view-more {\n              color: var(--dark-font-1);\n              .btn-more:hover {\n                background: var(--dark-1);\n              }\n            }\n          }\n        }\n      }\n      .bottom-page.center {\n        border-color: var(--dark-2)!important;\n      }\n      .paging-box {\n        span.result, span.dian {\n          color: var(--dark-font-1);\n        }\n        a.tcd-number, a.next, a.prev {\n          color: var(--dark-font-1);\n          &:hover {\n            color: #00a1d6;\n          }\n        }\n      }\n      .paging-box-big {\n        a.tcd-number, a.next, a.prev {\n          color: var(--dark-font-1);\n          background-color: var(--dark-2);\n          border-color: var(--dark-3);\n          &:hover {\n            color: white;\n            background-color: #00a1d6;\n            border-color: var(--dark-3);\n          }\n        }\n        .dian, .dian:hover {\n          color: var(--dark-font-1);\n          background-color: var(--bg);\n          border-color: var(--bg);\n        }\n        .page-jump {\n          input {\n            border-color: var(--dark-3);\n            background-color: var(--dark-2);\n            color: white;\n          }\n        }\n      }\n    }\n    .textarea-container {\n      textarea {\n        background-color: var(--dark-2)!important;\n        border-color: var(--dark-2)!important;\n        color: var(--dark-font-1)!important;\n      }\n      &:hover textarea, &.focus textarea {\n        color: var(--dark-font-0)!important;\n      }\n    }\n    \n    .emoji-box {\n      background: var(--dark-3)!important;\n      border-color: var(--dark-3)!important;\n      box-shadow: 0 11px 12px 0 var(--dark-1)!important;\n      &:before {\n        background: unset!important;\n      }\n      .emoji-text {\n        color: var(--dark-font-3)!important;\n      }\n      .emoji-text:hover {\n        background-color: var(--dark-5)!important;\n      }\n      .emoji-notice {\n        background-color: var(--dark-3)!important;\n        border-color: var(--dark-3)!important;\n        color: var(--dark-font-3)!important;\n      }\n      .emoji-tabs {\n        background: var(--dark-4)!important;\n        .tab-link.on {\n          background: var(--dark-3)!important;\n        }\n        .tab-link:hover {\n          background: var(--dark-5)!important;\n        }\n        .emoji-tab-slider {\n          .prev {\n            background-image: url(https://static.hdslb.com/phoenix/dist/images/left-arrow.svg)!important;\n          }\n          .next {\n            background-image: url(https://static.hdslb.com/phoenix/dist/images/right-arrow.svg)!important;\n          }\n          .prev.on {\n            background-image: url(https://static.hdslb.com/phoenix/dist/images/left-arrow-disable.svg)!important;\n          }\n          .next.on {\n            background-image: url(https://static.hdslb.com/phoenix/dist/images/right-arrow-disable.svg)!important;\n          }\n        }\n      }\n    }\n    ";t.CommentMain=o;const n=`\n    //\u6587\u5b57\n    .text-area .view-danmaku {\n      color: var(--dark-font-2)!important;\n    }\n    \n    .text-area .content,\n    .bili-dyn-card-video__title,\n    .bili-dyn-card-pgc__title,\n    .imagesbox .boost-control li,\n    .text-box .count-box  .text,\n    .bili-dyn-card-article__desc,\n    .item-detail .text,\n    .desc,\n    .bili-rich-text__content {\n      color: var(--dark-font-1)!important;\n    }\n    \n    .text-area .title,\n    .user-name,\n    .user-name a,\n    .text-box .title,\n    .bili-dyn-card-article__title,\n    .bili-dyn-card-live__title,\n    .bili-dyn-title__text,\n    .dyn-vote__detail__title,\n    .vote-title, // \u62bd\u5956\u6807\u9898\n    .dyn-additional-common__detail__title,\n    .dyn-goods__one__detail__name {\n      color: var(--dark-font-0)!important;\n    }\n    \n    .user-name.big-vip a {\n      color: #fb7299!important;\n    }\n    \n    .imagesbox .boost-control li:hover {\n      color: #23ade5!important;\n    }\n    \n    .video-container.can-hover:hover .text-area .title,\n    .bili-dyn-card-video:hover .bili-dyn-card-video__body .bili-dyn-card-video__title,\n    .bili-dyn-card-pgc:hover .bili-dyn-card-pgc__body .bili-dyn-card-pgc__title,\n    .bangumi-container.can-hover:hover .text-area .title,\n    .article-container:hover .text-area .title,\n    .bili-dyn-card-article:hover .bili-dyn-card-article__title,\n    .vote-container:hover .text-area .text-content {\n      color: #00a1d6!important;\n    }\n    \n    .dynamic-link-hover-bg:hover {\n      background: var(--dark-4)!important;\n    }\n    \n    //\u5173\u6ce8\u7684\u4eba\u70b9\u8d5e\n    .like-users-panel::before {\n      background: var(--dark-1)!important;\n    }\n    .like-users-panel {\n      color: var(--dark-font-2)!important;\n      .users-box {\n        color: var(--dark-font-1)!important;\n      }\n    }\n    .users-box .like-users-list:link, .users-box .like-users-list:visited {\n      color: var(--dark-font-1);\n    }\n    \n    //Card\u6309\u94ae\n    .card .more-panel, .bili-dyn-item__more .bili-popover {\n      background: var(--dark-3)!important;\n      color: var(--dark-font-0)!important;\n      border-color: var(--dark-3)!important;\n      -webkit-box-shadow: 0 1px 12px 0 var(--dark-3)!important;\n      box-shadow: 0 1px 12px 0 var(--dark-3)!important;\n      .bili-dyn-more__menu {\n        color: var(--dark-font-0)!important;\n      }\n      &:after, .bili-popover__arrow {\n        background: var(--dark-3)!important;\n        border-color: var(--dark-3)!important;\n      }\n    }\n    \n    //\u89c6\u9891Card, \u756a\u5267Card, \u6587\u7ae0Card, \u6536\u85cfCard\n    .video-container,\n    .bangumi-container,\n    .article-container,\n    .bili-dyn-card-article,\n    .live-container,\n    .media-list .content,\n    .bili-dyn-card-video,\n    .bili-dyn-card-live, .bili-dyn-card-live__body,\n    .bili-dyn-card-pgc,\n    .bili-dyn-content__orig__major,\n    .bili-dyn-card-pgc__body {\n      border-color: var(--dark-3)!important;\n      background: var(--dark-card)!important;\n    }\n    \n    // \u89c6\u9891Card\n    .bili-dyn-card-video__body {\n        background-color: var(--dark-3)!important;\n    }\n    \n    // \u62bd\u5956\n    .bili-popup__wrap {\n      background-color: var(--dark-3)!important;\n      color: var(--dark-font-0)!important;\n      border-color: var(--dark-3)!important;\n      .bili-popup__header {\n        border-color: var(--dark-2)!important;\n      }\n      .bili-popup__header__title {\n        color: var(--dark-font-0)!important;\n      }\n    }\n    \n    #bp-app {\n      background-color: var(--dark-3)!important;\n      color: var(--dark-font-0)!important;\n      .result, .result-wrapper {\n        background-color: var(--dark-3) !important;\n        .prize-winner-block {\n          background-color: var(--dark-3) !important;\n        }\n        .row {\n          background-color: var(--dark-3)!important;\n          ::after {\n            border-color: var(--dark-3)!important;\n          }\n        }\n      }\n    }\n\n    // \u62bd\u5956\n    .vote-info-wrapper {\n      .vote-creator {\n        .vote-user-name {\n          color: var(--dark-font-0)!important;\n        }\n      }\n    }\n    .vote-options {\n      .option-li {\n        border-color: var(--dark-6)!important;\n      }\n    }\n    \n    //\u8f6c\u53d1Card\n    .repost, .reference {\n      background: var(--dark-0)!important;\n      .deleted {\n        background: unset!important;\n      }\n      .bili-dyn-content__orig__major {\n        background-color: inherit!important;\n      }\n    }\n    .dyn-card-opus {\n      .dyn-card-opus__title {\n        color: var(--dark-font-1) !important;\n      }\n    }\n    \n    // \u6295\u7968\n    .dyn-vote {\n      border-color: var(--dark-2)!important;\n      .dyn-vote__cover {\n        background-color: rgb(27 27 27)!important;\n      }\n      .dyn-vote__body {\n        background-color: var(--dark-2)!important;\n        :hover {\n              box-shadow: 0 3px 10px 0 var(--dark-2)!important;\n        }\n      }\n    }\n    \n    //\u56fe\u7247\u9884\u89c8Card\n    .imagesbox .boost-control, .imagesbox .boost-img {\n      background: var(--dark-3)!important;\n    }\n    \n    //\u6d3b\u52a8Card, \u6295\u7968Card, \u97f3\u4e50Card\n    .h5share-container, .vote-container, .music-container {\n      border-color: var(--dark-3)!important;\n    }\n    \n    //\u6536\u85cfCard\u56fe\u7247\u80cc\u666f\n    .media-list .content .cover-box {\n      background: var(--dark-card)!important;\n    }\n    \n    //Card\u9634\u5f71\n    .article-container:hover, .vote-container:hover, .h5share-container:hover, .music-container:hover {\n      .text-area {\n        -webkit-box-shadow: 0 3px 10px 0 var(--dark-1)!important;\n        box-shadow: 0 3px 10px 0 var(--dark-1)!important;\n      }\n    }\n    \n    //\u76f8\u5173\u4f5c\u54c1\n    .shop-panel {\n      .shop-list {\n        background: var(--dark-3)!important;\n      }\n    }\n    .dyn-reserve__card,\n    .dyn-goods__wrap {\n      background-color: var(--dark-card)!important;\n      .dyn-reserve__title {\n        color: var(--dark-font-0)!important;\n      }\n    }\n    .bili-dyn-content__forw__additional {\n      .dyn-vote {\n        border-color: var(--dark-card)!important;\n        .dyn-vote__body {\n          background-color: var(--dark-3)!important;\n        }\n      }\n    }\n    .bili-dyn-list__item {\n      .bili-dyn-content__orig__additional {\n        .dyn-additional-common__wrap {\n          background-color: var(--dark-3)!important;\n        }\n      }\n    }\n    \n    \n    //\u8868\u60c5\u6309\u94ae\n    .comm-emoji {\n      border-color:  var(--dark-1)!important;\n      background-color: var(--dark-1)!important;\n    }\n    \n    //\u8bc4\u8bba\u8f6c\u53d1\n    .panel-area {\n      .forw-area {\n        background-color: unset!important;\n      }\n      ${o}\n    }\n    \n    //\u5f39\u51fa\u6846\n    .bp-popup-panel {\n      background: var(--dark-4)!important;\n      .title-ctnr .popup-title, .popup-content-ctnr {\n        color: var(--dark-font-0)!important;\n      }\n    }\n    \n    .dynamic-list-item-wrap, .forw-more {\n      border-color: var(--dark-2)!important;\n    }\n    \n    //\u5c55\u5f00\u76f8\u5173\u52a8\u6001 \n    .fold-box {\n      border-color: var(--divider)!important;\n    }\n    .bili-modal {\n      background-color: var(--dark-1)!important;\n      .bili-modal__title {\n        color: var(--dark-font-0)!important;\n      }\n    }\n    `;t.DynamicMain=n},36861:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IframeDynamicDarkModeStyle=void 0;const o=i(635);t.IframeDynamicDarkModeStyle=o.createGlobalStyle`
  body {
    background-color: unset!important;
  }
  .out-container {
    background-color: var(--dark-3)!important;
    .tab-bar {
      border-color: var(--divider)!important;
    }
  }
  .split-line {
    &:before {
      border-color: var(--divider)!important;
    }
  }
  .history-tip {
    background-color: var(--divider)!important;
  }
  .list-item {
    &:hover {
      background-color: var(--dark-2) !important;
    }
    .center-box {
      .name-line {
        color: var(--dark-font-1)!important;
      }
      .content {
        color: var(--dark-font-1)!important;
      }
    }
  }
`},7603:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IframeMessageDarkModeStyle=void 0;const o=i(635);t.IframeMessageDarkModeStyle=o.createGlobalStyle`
  html {
    background-image: none!important;
  }
  body {
    background-color: unset!important;
  }
  .im-list-box {
    background-color: var(--dark-3)!important;
    color: var(--dark-font-1) !important;
    
    .im-list {
      &:hover {
        background-color: var(--dark-6)!important;
        color: var(--dark-font-0)!important;
      }
    }
  }
`},13205:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DarkModeUIBuilder=void 0;const n=o(i(57689)),r=o(i(97326)),a=i(82039),s={iframeDynamic:/t\.bilibili\.com\/pages\/nav\/index_new/,iframeMessage:/message\.bilibili.com\/pages\/nav\/index_new_pc_sync/,home:/^https?:\/\/www\.bilibili\.com\/(\?(spm_id_from|uid)(.*)$|$)/,dynamic:/^https?:\/\/(t\.bilibili\.com\/|www\.bilibili\.com\/opus\/)/,videoPlay:/^https?:\/\/www\.bilibili\.com\/(video\/(av|bv|BV)|bangumi\/play\/(ss|ep))(.*)/,livePlay:/^https?:\/\/live\.bilibili\.com\/(blanc\/)?([0-9]+)/,live:/^https?:\/\/live\.bilibili\.com\//,readCV:/^https?:\/\/www\.bilibili\.com\/read\/cv(.*)/i,readRank:/^https?:\/\/www\.bilibili\.com\/read\/ranking(.*)/,read:/^https?:\/\/www\.bilibili\.com\/read\//,space:/^https?:\/\/space\.bilibili\.com\//,message:/^https?:\/\/message\.bilibili\.com\//,watchLater:/^https?:\/\/www\.bilibili\.com\/watchlater\//,history:/^https?:\/\/www\.bilibili\.com\/account\/history/,search:/^https?:\/\/search\.bilibili\.com\//,blackboardComment:/^https:\/\/www\.bilibili\.com\/blackboard\/comemnt-activity\.html/,cheese:/^https?:\/\/www\.bilibili\.com\/cheese\/play\//},l=(e=!1)=>{const t=window.location.href;if(e){if(!s[e])return!1;const i=new RegExp(s[e]);return i.test(t)}for(const e in s){const i=new RegExp(s[e]);if(i.test(t))return e}return!1},c=()=>{class e extends n.default.Component{constructor(e){super(e),this.state={active:!1,pageName:l(),followSystem:null}}componentDidMount(){chrome.runtime.sendMessage({target:"darkMode",event:"getSetting"},e=>{var t;if(e){const{on:i,followSystem:o}=e;i||o&&(null===(t=matchMedia("(prefers-color-scheme: dark)"))||void 0===t?void 0:t.matches)?document.body.classList.contains("bilibili-helper-dark-mode")||document.body.classList.add("bilibili-helper-dark-mode"):document.body.classList.remove("bilibili-helper-dark-mode"),this.setState({active:i,followSystem:o})}})}render(){const{active:e,pageName:t,followSystem:i}=this.state;if(!e)return null;switch(t){case"iframeDynamic":return n.default.createElement(a.IframeDynamicDarkMode,{followSystem:i});case"iframeMessage":return n.default.createElement(a.IframeMessageDarkMode,{followSystem:i});case"home":return n.default.createElement(a.HomeDarkMode,{followSystem:i});case"dynamic":return n.default.createElement(a.DynamicDarkMode,{followSystem:i});case"readCV":return n.default.createElement(a.ReadCVDarkMode,{followSystem:i});case"readRank":return n.default.createElement(a.ReadRankDarkMode,{followSystem:i});case"read":return n.default.createElement(a.ReadDarkMode,{followSystem:i});case"message":return n.default.createElement(a.MessageDarkMode,{followSystem:i});case"space":return n.default.createElement(a.SpaceDarkMode,{followSystem:i});case"watchLater":return n.default.createElement(a.WatchLaterDarkMode,{followSystem:i});case"history":return n.default.createElement(a.HistoryDarkMode,{followSystem:i});case"livePlay":return e?n.default.createElement(a.LivePlayDarkMode,{followSystem:i}):null;case"search":return n.default.createElement(a.SearchDarkMode,{followSystem:i});case"blackboardComment":return n.default.createElement(a.BlackboardComment,{followSystem:i});case"cheese":return n.default.createElement(a.CheeseDarkMode,{followSystem:i});default:return null}}}const t=document.createElement("div");r.default.render(n.default.createElement(e,null),t)};t.DarkModeUIBuilder=c},82405:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CheeseStyle=void 0;const o=i(635),n=o.createGlobalStyle`

  // 课程标题
  .archive-title-box, .publishers-head,
  .publisher-pic-card .publisher-name,
    // 侧边栏
  .edu-play-right .rect-title,
    // 章节选择
  .nav-more-drop,
    // 购买须知标题
  .purchase-note-title,
    // 侧边栏推荐视频标题
  .season-title,
    // 问答栏标题
  .faq-title {
    color: var(--dark-font-0) !important;
  }

  .main-pay-wrapper .main-pay {
    box-shadow: 0 0 8px var(--dark-4, #e5e9ef) !important;
  }

  // 分割线
  .left-archive-tool-box-bottom-line,
  .archive-title-and-introduction-bottom {
    background-color: var(--divider) !important;
  }

  // 购买须知
  .guide-purchase-note {
    color: var(--dark-font-1) !important;
  }

  // 导航条
  header.tab-choose {
    background-color: var(--bg) !important;
    color: var(--dark-font-0) !important;
    box-shadow: 0 0 8px var(--dark-0, #e5e9ef) !important;

    .tab-item:not(.active) p {
      color: var(--dark-font-0) !important;
    }
  }

  .card-nav {
    background-color: var(--dark-1) !important;

    p {
      color: var(--dark-font-3) !important;
    }
  }

  .section-card-list {

    .section-item {
      background-color: var(--dark-1) !important;

      .no, .season-title-ellipsis, .title-hover, .season-title {
        color: var(--dark-font-3) !important;
      }
    }
  }

  .guide-brief {
    border-bottom-color: var(--divider) !important;

    img {
      filter: brightness(.6);
    }
  }

  .guide-box .guide-faq {
    border-bottom-color: var(--divider) !important;

    .faq-list {
      background-color: var(--dark-0) !important;
      color: var(--dark-font-1) !important;

      .question {
        border-bottom-color: var(--divider) !important;
      }
    }
  }
`;t.CheeseStyle=n},55410:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DynamicDarkModeStyle=void 0;const o=i(635),n=i(14517),r=o.createGlobalStyle`
  //底层背景
  #app, #app:before, .fixed-bg, #app > .bg, #app .bgc {
    background: none !important;
  }

  //所有Card背景
  .user-panel, .live-panel, .section-block, .bili-dyn-publishing, .publish-panel,
  .core-style, .bili-rich-textarea__inner, .most-viewed-panel, .bili-dyn-up-list,
  .tab-bar, .bili-dyn-list-tabs, .card, .notice-panel, .new-topic-panel, .bili-dyn-banner,
  .bili-dyn-my-info, .bili-dyn-live-users,
  .feed-topic .publish-panel-container, .feed-topic .empty-content, .topic-panel,
  .sticky-bar, .bili-dyn-item {
    background: var(--dark-card) !important;
  }

  .bili-dyn-item {
    .bili-dyn-card-reserve .bili-dyn-card-reserve__card {
      background-color: var(--dark-3) !important;
    }
  }

  //特殊背景
  .bg-white {
    background: var(--dark-card) !important;
  }

  .live-panel-item .live-up-img {
    background-color: var(--dark-card) !important;
    border-color: var(--dark-3) !important;
  }

  .notice-panel .img-container .notice-img {
    background-color: var(--dark-card) !important;
  }

  //文字 轻
  .tc-slate, .text-content, .time, .live-name, .count, .dynamic-repost, .shop-desc .desc-box .sub-title {
    color: var(--dark-font-2) !important;
  }

  //文字 中
  .most-viewed-item .name, .tag-item .label, .shop-panel .panel-desc {
    color: var(--dark-font-1) !important;
  }

  //文字 重
  .tc-black, .numbers,
  .up-name,
  .bili-dyn-live-users__item__uname,
  .text .content,
  .tag-item .content,
  .item-detail .text, .core-style,
  .shop-desc .desc-box .title,
  .bili-dyn-my-info__name,
  .bili-dyn-my-info__stat__item__count,
  .bili-dyn-live-users__title,
  .bili-dyn-banner__title,
  .bili-rich-textarea__inner,
  .bili-dyn-card-music__title {
    color: var(--dark-font-0) !important;
  }

  //hover蓝
  .more-button .more:hover,
  .most-viewed-panel .list-content .most-viewed-item .name.active,
  .most-viewed-panel .list-content .most-viewed-item:hover .name,
  .tab-bar .tab .tab-text.selected,
  .tab-bar .tab .tab-text:hover {
    color: #00b5e5 !important;
  }

  .user-panel .content .bottom .number-part:hover .numbers,
  .new-topic-panel .tag-item .content:hover {
    color: #00a1d6 !important;
  }

  // 输入框
  .hash-popup {
    background: var(--dark-3) !important;
    border-color: var(--dark-3) !important;

    .topic-container .item.is-selected {
      background: var(--dark-2) !important;
    }
  }

  // 左右箭头
  .bili-dyn-up-list__item__face {
    border-color: var(--dark-0) !important;
    box-shadow: 0 0 0 1px var(--dark-5) !important;
  }

  .bili-dyn-up-list__shadow-left {
    background: linear-gradient(270deg, hsl(0deg 0% 0% / 0%), var(--dark-card)) !important;

    .shadow {
      background: linear-gradient(270deg, hsl(0deg 0% 0% / 0%), var(--dark-card)) !important;
    }
  }

  .bili-dyn-up-list__shadow-right {
    background: linear-gradient(90deg, hsl(0deg 0% 0% / 0%), var(--dark-card)) !important;

    .shadow {
      background: linear-gradient(90deg, hsl(0deg 0% 0% / 0%), var(--dark-card)) !important;
    }
  }

  .bili-dyn-item__extra.border-top {
    border-color: var(--divider) !important;
  }

  // 直播列表
  .bili-dyn-live-users__item-container:hover {
    background: var(--dark-3) !important;
  }

  // 新推送通知条
  .bili-dyn-list__notification {
    background: var(--dark-card) !important;
  }

  // 新话题
  .bili-topic-selector {
    .bili-topic-selector__bulletin {
      background-color: var(--dark-card) !important;

      .bili-topic-item__normal:hover {
        background-color: var(--dark-card) !important;
      }
    }
  }

  .bili-topic-search__popover {
    background-color: var(--dark-3) !important;
    border: 1px solid var(--dark-3) !important;
    box-shadow: none !important;

    &.active {
      background-color: var(--dark-3) !important;
      border: 1px solid var(--dark-3) !important;

      .bili-topic-search__input {
        background-color: var(--dark-5) !important;

        .bili-topic-search__input__inner {
          color: var(--dark-font-1) !important;
        }
      }

      .bili-topic-item__cloud {
        :hover {
          background-color: var(--dark-1) !important;
        }

        .bili-topic-item__cloud__name {
          color: var(--dark-font-1) !important;
        }
      }
    }
  }

  .topic-panel {
    .topic-panel__nav-title, .relevant-topic__title {
      color: var(--dark-font-1);
    }
    .relevant-topic-container__item:hover {
      background-color: var(--dark-3) !important;
    }
  }

  //新动态
  .new-notice-bar {
    background: #d7d4b8 !important;

    .message {
      color: #cf8612 !important;
    }
  }

  //常看列表
  .card-list .most-viewed-panel .list-content .most-viewed-item .section {
    .icon-all, .avatar {
      border-color: var(--dark-5);
      -webkit-box-shadow: 0 0 0 1px var(--dark-0);
      box-shadow: 0 0 0 1px var(--dark-0);

      .active {
        -webkit-box-shadow: 0 0 0 1px #00a1d6 !important;
        box-shadow: 0 0 0 1px #00a1d6 !important;
      }
    }
  }

  //话题标签
  .new-topic-panel .tag-item .label {
    background: var(--dark-3) !important;
  }

  //feed
  .feed-topic .separater-line, .feed-topic .card, .card-offset {
    border-color: var(--dark-card) !important;
  }

  .card .focus-btn .unfocus {
    background-color: var(--dark-5) !important;
    color: var(--dark-font-1);
  }

  .active-panel {
    .tc-dark-slate {
      color: var(--dark-font-1);
    }

    .show-more-button {
      background-color: unset !important;
    }
  }

  //动态详情
  .sticky-bar {
    -webkit-box-shadow: 0 2px 4px 0 var(--dark-card) !important;
    box-shadow: 0 2px 4px 0 var(--dark-card) !important;

    .bar-content {
      .title {
        color: var(--dark-font-0) !important;
      }

      .message {
        color: var(--dark-font-2) !important;

        &:hover {
          color: #00b5e5 !important;
        }
      }
    }
  }

  .detail-content .card {
    border-color: var(--dark-card) !important;
  }

  // 定时发布
  .bili-dyn-draft {
    background-color: var(--dark-card) !important;
    border-color: transparent !important;
  }

  ${n.DynamicMain}
  ${n.CommentMain}
    // 评论
  .comment-send-lite {
    background: var(--dark-card) !important;
  }

  .vote-result-comment {
    background: var(--dark-card) !important;
    border-radius: 8px !important;
  }

  // 右下角悬浮按钮
  .bili-dyn-sidebar__btn {
    background-color: var(--dark-card) !important;

    :hover {
      background-color: var(--dark-4) !important;
    }
  }
  
  // 投票
  .my-followee-wrapper .my-followee {
    .user-list {
      .user-li {
        .vote-info-wrapper {
          .user-name {
            .name {
              color: var(--dark-font-0) !important;
            }
          }
          .vote-to {
            color: var(--dark-font-2) !important
          }
        }
      }
    }
  }
`;t.DynamicDarkModeStyle=r},81315:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HistoryDarkModeStyle=t.WatchLaterDarkModeStyle=t.HomeDarkModeStyle=void 0;const o=i(635),n=i(14517),r=o.css`
  // 导航条
  .bili-header__bar .slide-down {
    
  }
`,a=o.createGlobalStyle`
  ${n.HomeBase}
  .home-slide .item, .card-pic a, .video-card-reco, .pic {
    &:before {
      z-index: 1;
    }
  }

  .video-card-common .card-pic a .count, .live-card .pic .count {
    z-index: 1;
    color: var(--dark-font-0);
  }

  .first-screen img, .storey-box img {
    filter: contrast(0.93) brightness(0.89);
  }

  a, .storey-title .no-link, .manga-panel .manga-list-box .manga-card .manga-title, .rank-header .name {
    color: var(--dark-font-0);
  }

  body, .storey-title .text-info, .storey-title .text-info a, .live-card .up .txt .desc {
    color: var(--dark-font-1);
  }

  .rank-wrap .number, .pgc-rank-wrap .number, .manga-rank-item .rank-number {
    background: var(--dark-4);
  }

  //按钮
  .bypb-window .online {
    background: var(--dark-5) !important;
    border-color: var(--dark-6) !important;
  }

  .exchange-btn .btn, .rank-header .more {
    background: var(--dark-5) !important;
    border-color: var(--dark-6) !important;
    color: var(--dark-font-1);

    &:hover {
      background: var(--dark-5) !important;
    }
  }

  .time-line .tl-link {
    background: var(--dark-5);
  }

  //联系客服
  .contact-help {
    background: var(--dark-4) !important;
    border-color: var(--dark-4) !important;
    box-shadow: 0 6px 10px 0 var(--dark-2) !important;
    color: var(--dark-font-1) !important;
  }

  //电梯
  .elevator {
    .ear {
      color: var(--dark-4);
    }

    .list-box {
      background: var(--dark-4) !important;
      border-color: var(--dark-6) !important;

      .item {
        background: var(--dark-4);
        color: var(--dark-font-0);

        &.sort, &.back-top {
          border-color: var(--dark-6) !important;
        }
      }
    }
  }

  ${r}
`;t.HomeDarkModeStyle=a;const s=o.createGlobalStyle`
  ${n.HomeBase}
  html {
    background: unset !important;
    color: var(--dark-font-0);
  }

  .watch-later-list header {
    .s-btn {
      background: var(--bg);
    }

    .d-btn {
      background: var(--bg);
      border-color: var(--dark-6);
      color: var(--dark-font-2);
    }
  }

  .watch-later-list .list-box .av-item .av-about {
    border-color: var(--divider) !important;

    .t {
      color: var(--dark-font-0);
    }

    .info .user {
      color: var(--dark-font-1);
    }
  }

  .bili-dialog {
    color: unset !important;

    header {
      border-color: var(--dark-1) !important;
    }

    .con {
      background: var(--dark-3) !important;

      .btn-cancel {
        background-color: var(--dark-5) !important;

        &:not(:hover) {
          color: var(--dark-font-1) !important;
          border-color: var(--dark-5) !important;
        }
      }
    }
  }
`;t.WatchLaterDarkModeStyle=s;const l=o.createGlobalStyle`
  .history-wrap .b-head {
    .b-head-t {
      color: var(--dark-font-0);
    }

    .history-btn .btn {
      border-color: #00a1d6 !important;
    }
  }
  .b-head-search_input {
    background: initial;
    color: var(--dark-font-0);
  }

  .history-list {
    .l-info {
      border-color: var(--dark-6);

      .lastplay-time .history-red-round {
        border-color: transparent var(--dark-6) transparent;
      }
    }

    .r-info {
      background: unset !important;

      .r-txt {
        border-color: var(--divider) !important;

        .title:not(:hover) {
          color: var(--dark-font-0);
        }

        .username {
          color: var(--dark-font-1);
        }
      }
    }
  }

  .history-dlg {
    background-color: var(--dark-3) !important;
    border-color: var(--dark-3) !important;

    .dlg-txt {
      color: var(--dark-font-0) !important;
    }

    .cancel {
      height: 32px !important;
      background-color: var(--dark-5) !important;

      &:not(:hover) {
        color: var(--dark-font-1) !important;
        border-color: var(--dark-5) !important;
      }
    }
  }

  .go-top-m .go-top {
    background-color: var(--dark-4) !important;
    border-color: var(--dark-4) !important;
  }
  
  .bili-header .slide-down {
    box-shadow: inset 0 -1px var(--bg) !important;
  }
`;t.HistoryDarkModeStyle=l},39294:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LivePlayDarkModeStyle=void 0;const o=i(635),n=i(14517),r=o.createGlobalStyle`
  html[lab-style*=dark] .card-item-middle-top-right .name {
    color: #222 !important;
  }

  .room-bg.p-fixed:after {
    background: #1c2022d9 !important;
  }

  .link-navbar-ctnr,
  .link-navbar-vm,
  .link-navbar,
  .head-info-section,
  .gift-control-section,
  .rank-list-section,
  .rank-list-ctnr,
  .chat-history-panel,
  .announcement-cntr,
  .chat-control-panel,
  .control-panel-ctnr,
  .gift-sender-panel,
  .count-choice,
  .gift-panel-box,
  .content-wrapper,
  .link-progress-tv,
  .pay-note-panel,
  .feed-title,
  .card,
  .live-record-list-cntr,
  .flip-view-image,
  .bg-white,
  .live-player-ctnr.minimal,
  .user-panel,
  .link-panel-ctnr,
  .calendar-checkin,
  .calendar-checkin .title,
  .calendar-checkin .calendar-wrapper,
  .download-panel-ctnr,
  .side-bar-popup-cntr {
    background-color: var(--dark-card) !important;
  }

  .daily-record-title, .choice-item.active, .choice-item:hover, .divider, .more-btn-cntr, .animation-list .icon-arrow-left, .animation-list .icon-arrow-right {
    background-color: var(--dark-5) !important;
  }

  .choice-item, .danmaku-menu, .logout-btn, .load-more-btn, .checkin-btn, .link-popup-panel {
    background-color: var(--dark-3) !important;
  }

  .danmaku-item .user-name {
    color: var(--dark-font-1) !important;
  }

  body {
    color: var(--dark-font-0);
  }

  .selector-box, .feed-title, .glory-name {
    color: var(--dark-font-0) !important;
  }

  .common-popup-wrap, .gVPoeh,
  .gift-item.buy:hover, .gift-panel-switch:hover, .download-item:hover, .item.self, .rank-list-ctnr .own {
    background-color: var(--dark-3) !important;
  }

  //.rank:not(.rank-1):not(.rank-2):not(.rank-3) {
  //  background: var(--dark-6)!important;
  //}

  .item, .daily-record-title, .daily-text, .gift-info-expScore, .seeds-wrap, .tab-candidate, .room-introduction-scroll-wrapper,
  .username-info, .calendar-checkin .calendar-wrapper, .download-panel-ctnr a, .list-unit {
    color: var(--dark-font-1) !important;
  }

  .gift-info-desc {
    color: var(--dark-font-2) !important;
  }

  .link-navbar .main-ctnr .nav-logo, .link-navbar .nav-item, .shortcuts-ctnr, .room-title, .tab-list .item.active, .rank-list-box a.live-skin-main-a-text, .chat-item.danmaku-item,
  .gift-item .label, .gift-info-title, .choice-item, .announcement-cntr .content, .record-title, .live-player-ctnr, .area-list-panel .list-item, .username, .user-row,
  .gift-component-effect-rule, .share-addr-name, th.list-head-text {
    color: var(--dark-font-0) !important;
  }

  .calendar-checkin .calendar-wrapper .calendar .date-ctnr .day-item {
    color: var(--dark-5) !important;

    &.checked {
      color: #fff !important;
    }
  }

  .rank-list-box a:hover, .chat-item.danmaku-item .danmaku-content:hover, .area-list-panel .list-item:hover, .user-item:hover .username, .download-item:hover {
    color: #23ade5 !important;
  }

  .head-info-section,
  .gift-control-section,
  .aside-area,
  .announcement-cntr,
  .gift-sender-panel.arrow-bottom:before,
  .gift-panel-box,
  .content-wrapper,
  .card,
  .live-record-list-cntr,
  .side-bar-popup-cntr {
    border-color: var(--dark-card) !important;
  }

  .tab-list .item, .l-line, .r-line, .rank-list-ctnr, .count-choice, .choice-item, .gift-reveal-header, .announcement-cntr .content, .room-introduction-tags, .info-item-ctnr, .footer-line, .edit-button {
    border-color: var(--dark-5) !important;
  }

  #rank-list-ctnr-box {
    .gift-rank-list-item, .top3-item {
      .top3-name, .top3-score {
        color: var(--dark-font-3) !important;
      }

      .name, .rank, .score {
        color: var(--dark-font-3) !important;
      }
    }
  }

  .card-item-middle-top-right .name, .card-item-middle-top-right .name {
    color: var(--dark-0) !important;
  }

  .common-popup-wrap {
    border-color: var(--dark-3) !important;
  }

  .common-popup-wrap.arrow-bottom:after, .common-popup-wrap.arrow-bottom:before {
    border-color: var(--dark-3) transparent transparent !important;
  }

  .common-popup-wrap.arrow-top:after, .common-popup-wrap.arrow-top:before {
    border-color: transparent transparent var(--dark-3) !important;
  }

  .arrow {
    //border-color: transparent transparent transparent var(--dark-card)!important;
  }

  .link-navbar-ctnr {
    box-shadow: 0 0 5px 1px var(--dark-card) !important;
  }

  .gift-sender-panel, .common-popup-wrap, .side-bar-popup-cntr, .gVPoeh {
    box-shadow: 0 6px 12px 0 var(--dark-1) !important;
  }

  .link-navbar-ctnr .link-navbar {
    box-shadow: none !important;
  }

  .link-navbar-ctnr .link-navbar .panel-shadow {
    box-shadow: 0 8px 20px 0 var(--dark-card) !important;
  }

  .live-player-ctnr.minimal {
    box-shadow: 0 0 30px 1px var(--dark-card) !important;
  }

  .chat-input-ctnr {
    border-color: var(--divider) !important;
    background-color: var(--dark-3) !important;

    .medal-section {
      border-color: var(--divider) !important;
    }

    .chat-input, .count-choice .count-input {
      background-color: var(--dark-3) !important;
      color: var(--dark-font-0) !important;
      border-color: var(--dark-4) !important;
    }
  }

  .bl-button--primary:disabled {
    background-color: var(--dark-4) !important;
    color: var(--dark-font-2) !important;
  }

  .area-list-panel {
    background-color: var(--dark-3) !important;

    .list-item:hover {
      background-color: var(--dark-2) !important;
    }
  }

  .search-bar-ctnr .search-bar {
    background-color: var(--dark-3) !important;

    input {
      color: var(--dark-font-1) !important;

      &:focus {
        color: var(--dark-font-0) !important;
      }
    }
  }

  .live-room-app .app-content .link-footer-ctnr {
    background-color: unset !important;

    .link-footer {
      background-color: unset !important;
      border-color: var(--divider) !important;

      .footer-linker-line {
        background-color: var(--divider) !important;
      }
    }
  }

  .record-download button {
    background: var(--dark-5) !important;
    border-color: var(--dark-6) !important;
    color: var(--dark-font-1) !important;
  }

  .side-bar-cntr {
    background-color: var(--dark-card) !important;
    border-color: var(--dark-card) !important;
  }

  .flip-view-image-ctnr {
    filter: brightness(0.9);
  }

  .pophover > p:first-child {
    color: var(--dark-font-1) !important;
  }

  .feed-title {
    border-bottom: 1px solid var(--divider);
  }

  ${n.DynamicMain}
`;t.LivePlayDarkModeStyle=r},59724:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MessageDarkModeStyle=void 0;const o=i(635),n=(i(15477),"\n    .message-list {\n      background-color: var(--dark-3)!important;\n      .msg-item .message {\n        color: var(--dark-font-0);\n        .message-content {\n          background-color: var(--dark-4)!important;\n          &.is-me {\n            background-color: #6f9dca!important;\n          }\n        }\n      }\n      .msg-notify, .msg-push {\n        background: var(--dark-4)!important;\n        .content {\n          color: var(--dark-font-1);\n        }\n        .modules .module {\n          .mtitle {\n            color: var(--dark-font-1);\n          }\n          .detail {\n            color: var(--dark-font-0);\n          }  \n        }\n        hr {\n          background: var(--dark-1)!important;\n        }\n        .link {\n          color: var(--dark-font-0);\n        }\n      }\n    }\n    "),r=o.createGlobalStyle`
  html {
    background: url(//s2.hdslb.com/bfs/static/blive/blfe-message-web/static/img/infocenterbg.a1a0d152.jpg) top/cover no-repeat fixed;

    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background-color: rgba(21, 21, 21, 0.8) !important;
      pointer-events: none;
    }
  }

  #message-navbar {
    background-color: transparent!important;
  }

  //左栏
  .space-left {
    background-color: #151515cc !important;

    .side-bar {
      .title {
        color: var(--dark-font-0);

        .icon {
          filter: brightness(4);
          margin-left: -30px;
        }
      }

      .item {
        color: var(--dark-font-1);

        &:hover, &.active {
          color: #2faee3;
        }
      }

      .divided-line {
        border-color: var(--divider);
      }
    }
  }

  //右栏
  .space-right {
    background-color: #1f1f1f80 !important;

    .space-right-top {
      .title {
        background-color: var(--dark-card) !important;
        color: var(--dark-font-1) !important;
        -webkit-box-shadow: 0 2px 4px 0 #1313138a !important;
        box-shadow: 0 2px 4px 0 #1313138a !important;
      }

      .group-helper-msg-list {
        background-color: var(--dark-card) !important;
        -webkit-box-shadow: 0 2px 4px 0 #1313138a !important;
        box-shadow: 0 2px 4px 0 #1313138a !important;

        .tab-list {
          color: var(--dark-font-1) !important;

          .tab-item.active[data-v-29e10985]::before {
            background-color: var(--dark-card) !important;
          }
        }

        .nothing {
          color: var(--dark-font-2) !important;
        }

        .name-box {
          .name {
            color: var(--dark-font-0) !important;
          }

          .status {
            color: var(--dark-font-2) !important;
          }
        }

        &::after {
          background-color: var(--dark-card) !important;
        }
      }
    }

    .space-right-bottom {
      .card {
        background-color: var(--dark-card) !important;
        -webkit-box-shadow: 0 2px 4px 0 #1313138a !important;
        box-shadow: 0 2px 4px 0 #1313138a !important;

        .header::after {
          background: var(--divider) !important;
        }

        .loading .link-progress-tv {
          background-color: unset !important;
        }

        .line-1 {
          color: var(--dark-font-1) !important;

          .name-field {
            color: var(--dark-font-0) !important;
          }
        }

        .line-2 {
          color: var(--dark-font-0) !important;

          .orginal-reply {
            border-color: var(--dark-1) !important;
            color: var(--dark-font-2) !important;
          }
        }

        .line-3 {
          color: var(--dark-font-2) !important;
        }

        .text-box {
          color: var(--dark-font-2) !important;
        }

        &.detail .content:not(:hover) span {
          color: var(--dark-font-0) !important;
        }

        .follow-btn {
          color: var(--dark-font-1);

          &.active {
            background: var(--dark-6);
            border-color: var(--dark-6);
          }

          &.inactive {
            background: var(--dark-4);
          }
        }

        .reply-box {
          textarea {
            background-color: var(--dark-3);
            border-color: var(--dark-3);
            color: var(--dark-font-1);
          }

          &:hover textarea {
            color: var(--dark-font-0);
          }
        }

        .divider, div::after {
          border-color: var(--divider) !important;
        }

        .divider-last::before, .divider-last::after {
          background-color: var(--divider) !important;
        }

        //系统通知
        &.system-item {
          .title {
            color: var(--dark-font-0);
          }

          .time {
            color: var(--dark-font-1);
          }

          .bottom {
            color: var(--dark-font-2);
          }
        }

        //私信存档
        &.whisper {
          .list {
            border-color: var(--dark-1);

            .list-title {
              color: var(--dark-font-0);
              border-color: var(--dark-1);
            }

            .list-content .list-item {
              border-color: var(--dark-1);

              .name {
                color: var(--dark-font-0);
              }

              .last-word {
                color: var(--dark-font-2);
              }

              &.active, &:hover {
                background-color: var(--dark-3) !important;
              }
            }
          }

          .dialog {
            .title {
              color: var(--dark-font-0);
              border-color: var(--dark-1);
            }

            ${n}
          }
        }
      }

      //我的消息
      .bili-im {
        color: var(--dark-font-1);
        background-color: var(--dark-card) !important;
        -webkit-box-shadow: 0 2px 4px 0 #1313138a !important;
        box-shadow: 0 2px 4px 0 #1313138a !important;

        .left, .left .title {
          border-color: var(--dark-1);
        }

        .list {
          .list-item {
            .name {
              color: var(--dark-font-0);
            }

            .last-word {
              color: var(--dark-font-2);
            }

            &.top {
              background-color: var(--dark-3);
            }

            &.active, &:hover {
              background-color: var(--dark-3) !important;
            }
          }

          .lds-spinner div:after {
            background-color: var(--dark-font-0) !important;
          }
        }

        .dialog {
          .title {
            color: var(--dark-font-0);
            border-color: var(--dark-1);

            .action-menu .menu-list {
              border-color: var(--dark-card);
              background-color: var(--dark-card) !important;
              -webkit-box-shadow: 0 6px 12px 0 var(--dark-card);
              box-shadow: 0 6px 12px 0 var(--dark-card);

              a {
                color: var(--dark-font-0);

                .tips {
                  color: var(--dark-font-2);
                }

                &:hover {
                  background-color: var(--dark-0) !important;
                }
              }

              &:before {
                border-color: var(--dark-card);
                background-color: var(--dark-card) !important;
              }
            }
          }

          ${n}
          .new-message-tip {
            .text, &::after {
              background-color: var(--dark-4) !important;
            }
          }

          .send-box {
            border-color: var(--dark-0);
            background-color: var(--dark-3) !important;

            .btn-box.send-btn {
              border-color: var(--dark-5) !important;
              background-color: var(--dark-5) !important;
              color: var(--dark-font-2) !important;

              &.active {
                background-color: #1389bf !important;
                border-color: #1389bf !important;
                color: #fff !important;
              }
            }

            .input-box #editor {
              color: var(--dark-font-0);
            }
          }

          .im-popup .im-popup-shell {
            background-color: var(--dark-3);

            .content {
              .content-text {
                color: var(--dark-font-0);
              }

              .selector-box .type-selector {
                color: var(--dark-font-0);

                .css-1xneiug {
                  .content {
                    fill: var(--dark-5);
                  }

                  .border {
                    fill-opacity: 0.5;
                  }
                }
              }

              .report-tip {
                color: var(--dark-font-1);
              }

              .input-box {
                border-color: var(--dark-5);
                background-color: var(--dark-5);

                textarea {
                  color: var(--dark-font-0);
                }
              }
            }

            .popup-btn-ctnr .bl-button--primary:disabled {
              background-color: var(--dark-4);
              color: var(--dark-font-2);
            }
          }
        }
      }

      //消息设置
      .config {
        color: var(--dark-font-0);
        background-color: var(--dark-card) !important;
        -webkit-box-shadow: 0 2px 4px 0 #1313138a !important;
        box-shadow: 0 2px 4px 0 #1313138a !important;

        .tip {
          color: var(--dark-font-2);
        }

        .config-item {
          .css-1xneiug {
            .content {
              fill: var(--dark-5);
            }

            .border {
              fill-opacity: 0.5;
            }
          }

          &::before {
            background: var(--dark-1) !important;
          }

          .radio-selector {
            color: var(--dark-font-0);
          }
        }
      }
    }
  }

  // 自动回复设置
  #link-message-container {
    .header {
      .tab {
        color: var(--Ba0_s) !important;
      }
    }

    .title {
      color: var(--Ba0_s) !important;
    }

    textarea {
      color: var(--Ga4_u) !important;
    }

    .btn.disabled {
      background-color: var(--Ga9_u) !important;
      color: var(--Ga7_u) !important;
    }
  }

  // 关键词回复
  .kw-search {
    background-color: var(--Ba0) !important;
    color: var(--Br10) !important;
  }
`;t.MessageDarkModeStyle=r},33126:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ReadRankDarkModeStyle=t.ReadCVDarkModeStyle=t.ReadDarkModeStyle=void 0;const o=i(635),n=i(15477),r=i(14517),a=o.createGlobalStyle`
  //文字 轻
  .article-item .item-holder .article-desc, .info-holder .dynamic, .more .info {
    color: var(--dark-font-2) !important;
  }

  //文字 中
  .info-holder .dynamic .arc-title {
    color: var(--dark-font-1) !important;
  }

  //文字 重
  body, .nav-tab-bar .tab-item, .partitio-name, .article-item .item-holder .article-title-holder, .rank-module .rank-tabs-bar label, .rank-module .rank-list .item a, .up-list .title, .info-holder .head .nick-name, .more .top-bar, .more .title, .categories-bar .tag-item {
    color: var(--dark-font-3) !important;
  }

  //hover蓝
  .nav-tab-bar .tab-item.on, .nav-tab-bar .tab-item:hover, .article-item .item-holder .article-title-holder:hover, .rank-module .rank-tabs-bar .rank-tabs-list li.on, .rank-module .rank-list .item a:hover, .info-holder .head .nick-name:hover, .info-holder .dynamic .arc-title:hover, .more .title:hover, .categories-bar .tag-item.on {
    color: #00a1d6 !important;
  }

  //背景
  .article-item, .rank-module .rank-list .item, .up-list {
    background-color: var(--bg) !important;
  }

  .page-content .right-side .rank-module .rank-list .item .rank-index {
    background: var(--dark-4);
  }

  //框线
  .article-item, .rank-module .rank-tabs-bar, .up-list .title, .more .top-bar, .categories-bar {
    border-color: var(--divider) !important;
  }

  //按钮
  .rank-module .complete-rank, .up-list .fresh-btn {
    background: var(--dark-5) !important;
    border-color: var(--dark-6) !important;
    color: var(--dark-font-0) !important;

    &:hover {
      color: #00a1d6 !important;
    }
  }

  //搜索
  .search-module .search-block {
    border-color: var(--dark-6) !important;
    background-color: var(--dark-2) !important;

    input {
      background-color: var(--dark-2) !important;
      color: var(--dark-font-0) !important;
    }

    .search-word-panel {
      border-color: var(--dark-card) !important;
      background-color: var(--dark-card) !important;

      .panel-title {
        .split-line {
          border-color: var(--dark-6) !important;
        }

        p span {
          background-color: var(--dark-card) !important;
          color: var(--dark-font-2) !important;
        }
      }

      .suggest-item, .history-item {
        color: var(--dark-font-0);

        &:hover, &.focus {
          background-color: var(--dark-3) !important;
        }
      }
    }
  }

  //侧边按钮
  .to-top {
    background-color: var(--dark-4) !important;
    border-color: var(--dark-4) !important;
  }

  //帮助按钮修正
  .more .help .icon {
    background-image: url(${(0,n.getURL)("/statics/imgs/read-help.png")}) !important;
  }

  //游戏按钮修正
  .nav-tab-bar .tab-item[data-tab-id="1"]:before {
    background-image: url(${(0,n.getURL)("/statics/images/read-game.png")});
  }

  // read list
  .list-info-block {
    background-color: var(--dark-card) !important;

    .right-side {
      .title {
        color: var(--dark-font-0) !important;
      }

      .up-name {
        color: var(--dark-font-1) !important;
      }
    }
  }

  .list-container .article-list-block {
    background-color: var(--dark-card) !important;

    .article-item {
      background-color: var(--dark-card) !important;

      .article-left-block {
        border-bottom: 1px solid var(--divider) !important;

        .article-title {
          color: var(--dark-font-1) !important;
        }
      }
    }
  }
  
  .article-card {
    .title-wrap .title {
      color: inherit!important;
    }
  }
`;t.ReadDarkModeStyle=a;const s=o.createGlobalStyle`
  .page-container, .article-action .more .more-ops-list, .view-note .editor-innter, .view-note .editor-innter .ql-editor {
    background: unset !important;
  }

  //文字 轻
  .up-info-right-block .fans-num, .up-info-right-block .view-num .follow-btn-holder .follow-btn.followed, .rightside-article-list-btn .title, .article-item .article-title .info, .more .info, .right-side-bar .to-comment .comment-num, .article-list-plane .button .title {
    color: var(--dark-font-2) !important;
  }

  //文字 中
  .article-action, .article-action .ops i, .article-action .more .more-ops-list {
    color: var(--dark-font-1) !important;
  }

  //文字 重
  .nav-tab-bar .tab-item, .follow-btn-holder .follow-btn, .up-info-right-block .up-name, .article-up-info .up-name, .rightside-article-list-btn .label, .up-article-list-block .block-title, .article-item .article-title, .more .top-bar, .more .title,
  .title-container .title, .article-holder, .article-holder h1, .article-holder .color-default, .article-list-plane .button .label, .article-holder .card-container .title,
  .article-left-tab .tab-item,
  .view-note .editor-innter .ql-editor {
    color: var(--dark-font-3) !important;
  }

  //hover蓝
  .nav-tab-bar .tab-item.on, .nav-tab-bar .tab-item:hover, .article-item .article-title:hover, .more .title:hover,
  .article-action .ops .on, .article-action .ops .on i, .article-action .ops i:hover,
  .article-action .ops .coin-btn:hover, .article-action .ops .fav-btn:hover, .article-action .ops .like-btn:hover,
  .article-action .ops .coin-btn:hover i, .article-action .ops .fav-btn:hover i, .article-action .ops .like-btn:hover i {
    color: #00a1d6 !important;
  }

  //框线
  .up-article-list-block .block-title, .more .top-bar, .article-action, #article-list-btn .title, #article-list-btn .label, .rightside-article-list-btn .label {
    border-color: var(--divider) !important;
  }

  //文章视频引用
  .article-holder .card-container {
    .card, .video-info {
      background-color: #1515154d !important;
    }

    a:after, .slim-video-card {
      border-color: var(--dark-4) !important;
    }
  }

  //关注按钮
  .follow-btn-holder .follow-btn {
    background-color: #00a1d6 !important;
    border-color: #00a1d6 !important;

    &:hover {
      background-color: #00b5e5 !important;
      border-color: #00b5e5 !important;
    }

    &.followed, &.followed:hover {
      background-color: var(--dark-5) !important;
      border-color: var(--dark-5) !important;
    }
  }

  //文章目录
  .rightside-article-list-btn {
    background-color: var(--dark-5) !important;
    border-color: var(--dark-5) !important;

    &:hover {
      background-color: var(--dark-card) !important;
      border-color: var(--dark-card) !important;
    }

    .icon-list {
      background-image: url(${(0,n.getURL)("/statics/imgs/article-list.png")}) !important;
    }
  }

  .article-list-plane {
    background-color: var(--dark-5) !important;
    border-color: var(--dark-5) !important;

    .button:hover {
      background-color: var(--dark-card) !important;
      border-color: var(--dark-card) !important;
    }
  }

  //更多按钮
  .up-info-holder .fixed-box .up-article-list-block .more-article {
    background-color: var(--dark-5);
    border-color: var(--dark-5);
    color: var(--dark-font-0);
  }

  //帮助按钮修正
  .up-info-holder .fixed-box .more .help .icon {
    background-image: url(${(0,n.getURL)("/statics/imgs/read-help.png")});
  }

  //游戏按钮修正
  .nav-tab-bar .tab-item[data-tab-id="1"]:before, .article-left-tab .tab-item[data-tab-id="1"]:before {
    background-image: url(${(0,n.getURL)("/statics/images/read-game.png")});
  }

  // 侧边按钮
  .right-side-bar .to-comment, .right-side-bar .to-top, .right-side-bar .to-comment .comment-num {
    background-color: var(--dark-4) !important;
    border-color: var(--dark-4) !important;
  }

  //评论区
  .comment-title-block span {
    color: var(--dark-font-1);
  }

  .comment-send-lite, .comment-m {
    background: var(--bg) !important;
  }

  ${r.CommentMain}
  .textarea-container {
    textarea {
      background-color: var(--dark-1) !important;
      border-color: var(--dark-1) !important;
      color: var(--dark-font-1) !important;
    }

    &:hover textarea, &.focus textarea {
      color: var(--dark-font-0) !important;
    }
  }

  .comment-emoji {
    border: 1px solid var(--dark-1) !important;
    background-color: var(--dark-1) !important;
  }

  .interaction-info {
    border-color: var(--dark-4) !important;
  }

  // 新专栏
  #app {
    background-color: var(--bg) !important;
  }

  #read-article-holder {
    color: var(--dark-font-1) !important;

    .img-box.loaded {
      filter: brightness(.8) !important;
    }

    &.normal-article-holder {
      h1, h2, h3, h4, h5, h6 {
        filter: invert(1);
      }

      .color-default {
        color: var(--dark-font-1) !important;
      }
    }
  }

  #readRecommendInfo {
    background-color: var(--dark-2) !important;

    .recommend-header {
      border-bottom-color: var(--divider) !important;

      .title, .more {
        color: var(--dark-font-0) !important;
      }
    }

    .article-item {
      border-color: var(--divider) !important;
    }
  }

  .catalog {
    background-color: var(--dark-0) !important;

    &:hover:after {
      background-color: var(--dark-0) !important;
    }

    .catalog-panel {
      background-color: var(--dark-0) !important;

      .catalog-panel__title {
        color: var(--dark-font-1) !important;
      }
    }

    .catalog-panel__list {
      background-color: var(--dark-0) !important;

      .catalog-item {
        color: var(--dark-font-2) !important;

        &:hover {
          background-color: var(--bg) !important;
        }

        .item-ul {
          background-color: var(--divider) !important;
        }
      }
    }


  }

  .side-toolbar {
    background-color: var(--dark-2) !important;

    .toolbar-item {
      color: var(--dark-font-2) !important;
    }
  }

  .article-detail {
    .fixed-top-header {
      background-color: var(--dark-card) !important;

      .up-info {
        .up-info__name {
          color: var(--dark-font-1) !important;
        }
      }

      .inner-title {
        color: var(--dark-font-3) !important;
      }
    }

    .article-breadcrumb {
      .breadcrumb-name {
        color: var(--dark-font-0) !important;
      }
    }

    .article-container {
      background-color: var(--dark-2) !important;

      .article-container__content {
        border-color: var(--divider) !important;

        .article-up-info {
          background-color: var(--dark-2) !important;
        }
      }
    }
  }

`;t.ReadCVDarkModeStyle=s;const l=o.createGlobalStyle`
  #App, .tips, .article-title {
    color: var(--dark-font-3) !important;
  }

  .article-desc {
    color: var(--dark-font-2) !important;
  }

  .article-title:hover {
    color: #00a1d6 !important;
  }

  .article-item, .rank-module .rank-list .item, .up-list {
    background-color: var(--bg) !important;
  }

  #App .rank-module .tips {
    background: var(--dark-4);
  }

  .article-content {
    border-color: var(--dark-1) !important;
  }
`;t.ReadRankDarkModeStyle=l},42555:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SearchDarkModeStyle=void 0;const o=i(635),n=o.createGlobalStyle`
  html {
    background: unset!important;
  }
  body {
    color: var(--dark-font-0);
  }
  input {
    border-color: var(--dark-4)!important;
    outline: none!important;
    color: var(--dark-font-0)!important;
  }
  .suggest-wrap {
    background: var(--dark-card)!important;
    border-color: var(--dark-card)!important;
    color: var(--dark-font-1)!important;
    .horizontal .hz-text:not(:hover) {
      border-color: var(--dark-6);
      color: var(--dark-font-0);
    }
    .title {
      border-color: var(--dark-6);
      span {
        background: var(--dark-card);
      }
    }
    .histories-wrap .histories .history-item {
      background-color: var(--dark-3) !important;
    }
    .trending-item {
      :hover {
        background-color: var(--dark-3) !important;
      }
      .rank.top, .rank.search-rank-top {
        color: var(--dark-font-3) !important;
      }
    }
    .vt-text {
      color: var(--dark-font-0);
      &:hover {
        background-color: var(--dark-3);
      }
    }
    .keyword-wrap .keyword {
      color: var(--dark-font-0);
      &.focus {
        background-color: var(--dark-3);
      }
    }
  }
  //主页
  .home-wrap {
    .home-input {
      .type {
        background-color: var(--dark-4)!important;
        border-color: var(--dark-4)!important;
        &.selected, &:hover {
          background-image: linear-gradient(0deg,var(--dark-3),var(--dark-4));
        }
      }
      .list {
        background-color: var(--dark-4);
        border-color: var(--dark-4);
        li:hover {
          background-color: var(--dark-3);
        }
      }
      .content {
        background-color: var(--dark-3)!important;
      }
    }
    .home-suggest {
      .hot-search, .history {
        border-color: var(--dark-5);
      }
      .hotlist {
        .num {
          background-color: var(--dark-4);
          &:not(.special) {
            color: var(--dark-font-1);
          }
        }
        .item {
          border-color: var(--dark-6);
        }
      }
      .history .list .item {
        border-color: var(--dark-6);
        a {
          color: var(--dark-font-0);
        }
      }
    }
  }
  //结果
  .total-wrap .total-text {
    color: var(--dark-font-2);
  }
  .user-list {
    .user-info, .video-info {
      a {
        color: var(--dark-font-0) !important;
      }
    }
  }
  .search-wrap .search-block .input-wrap {
    background-color: var(--dark-3)!important;
  }
  #navigator .v-switcher-header-item {
    border-color: var(--divider);
    a {
      color: var(--dark-font-1);
    }
  }
  .filter-wrap {
    border-color: var(--divider);
    .filter-item:not(active) a {
      color: var(--dark-font-1);
    }
    .fold:hover {
      background-color: var(--dark-2);
    }
    .sub-filter {
      background-color: var(--dark-2);
      border-color: var(--dark-2);
    }
    .filter-wrap_bottom {
      background-color: var(--divider);
    }
  }
  #all-list .mixin-list ul:not(:last-child) {
    border-color: var(--divider);
  }
  .activity-item .info {
    .type {
      border-color: var(--dark-6);
      color: var(--dark-font-2);
    }
    .title {
      color: var(--dark-font-0);
    }
    .desc {
      color: var(--dark-font-1);
    }
  }
  .fixed-top {
    background: hsla(0,100%,0%,.9)!important;
  }
  .page-wrap .pager {
    background: unset!important;
    .pages .page-item:not(.active) button:not(:hover) {
      color: var(--dark-font-1);
      background-color: var(--dark-2);
      border-color: var(--dark-3);
    }
  }
  .error-wrap {
    border-color: var(--divider);
    background-color: unset!important;
  }
  //视频
  .video-item.matrix, .video-item.list {
    border-color: var(--divider);
    .title {
      color: var(--dark-font-0);
    }
    .type {
      border-color: var(--dark-6);
      color: var(--dark-font-2);
    }
  }
  //番剧，影视
  .bangumi-item, .pgc-item {
    border-color: var(--divider);
    .right-info {
      .headline {
        span {
          border-color: var(--dark-6)!important;
          color: var(--dark-font-2)!important;
        }
        .title {
          color: var(--dark-font-0);
        }
      }
      .intros .value {
        color: var(--dark-font-0);
      }
      .ep-box .ep-sub .ep-item {
        border-color: var(--divider)!important;
        &:not(:hover) {
          color: var(--dark-font-2)!important;
        }
      }
    }
  }
  //直播
  #live-list {
    .live-tabs a {
      color: var(--dark-font-0);
    }
    .headline-live, .headline-room {
      h3 {
        color: var(--dark-font-1);
        .num-txt {
          color: var(--dark-font-2);
        }
      }
    }
    .live-user-wrap .live-user-item {
      box-shadow: 0 0 3px var(--dark-6);
      .item-right {
        .uname {
          color: var(--dark-font-1);
        }
        .status.free {
          background-color: var(--dark-4);
          color: var(--dark-font-1);
        }
        .info .star, .info .type {
          color: var(--dark-font-1);
        }
        .tags>span {
          border-color: var(--dark-6)!important;
          color: var(--dark-font-2);
        }
      }
    }
    .headline-room .filter a {
      color: var(--dark-font-0);
    }
    .live-room-item {
      .item-title {
        color: var(--dark-font-0);
      }
      .item-info .live-num, .item-info .uname {
        color: var(--dark-font-1);
      }
    }
  }
  //专栏
  .article-item {
    border-color: var(--divider);
    .content .title {
      color: var(--dark-font-0);
    }
  }
  //话题
  .topic-item {
    border-color: var(--divider);
    .content .headline a {
      color: var(--dark-font-0);
    }
  }
  // 游戏
  .game-list {
    .game-item {
      
    }
    .info {
      .headline {
        .title {
          color: var(--dark-font-3);
        }
      }
    }
  }
  //用户
  
  #user-list {
    .dropdown-wrap .select-wrap {
      border-color: var(--divider);
      .bili-dropdown {
        color: var(--dark-font-0);
        .selected {
          color: var(--dark-font-2);
        }
        .dropdown-list {
          background: var(--dark-3);
          border-color: var(--dark-3);
          .dropdown-item:hover {
            background: var(--dark-2);
          }
        }
      }
    }
  }
  .user-item {
    border-color: var(--divider);
    .title {
      color: var(--dark-font-0);
    }
    .attention-btn.followed, .attention-btn.followed:hover {
      background: var(--dark-5);
      color: var(--dark-font-1);
    }
    .up-info>span, .desc {
      color: var(--dark-font-1);
    }
    .up-videos .video-item .video-desc {
      color: var(--dark-font-0);
    }
  }
  //相簿
  .photo-item {
    border-color: var(--divider);
    .title {
      color: var(--dark-font-0);
    }
  }
`;t.SearchDarkModeStyle=n},40695:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SpaceDarkModeStyle=void 0;const o=i(635),n=i(15477),r=i(14517),a=o.createGlobalStyle`
    html {
      background: unset!important;
    }
    //文字 轻
    .n .n-data .n-data-k, .sec-empty-hint, .channel .empty-state p, .fav-item .state, .small-item .meta, .section.empty:after, .section .user-auth.no-auth .no-auth-title span,
    #page-fav .fav-sidenav .favlist-title, #page-fav .fav-sidenav .watch-later, #page-fav .fav-main .search-types,
    .i-live .i-live-unfo-btn, .section .operation, #page-channel-detail .watch-later-btn {
      color: var(--dark-font-2);
    }
    
    //文字 中
    .private-hint, .i-m-btn, .user .info .meta .row, .tc-slate, #page-fav .fav-main .fav-action-bottom .select-counter, #page-fav .fav-main .fav-meta, #page-setting .setting-privacy-item .setting-privacy-switcher .be-switch-label,
    .i-live .i-live-fo-count, .subscribe-title {
      color: var(--dark-font-1)!important;
    }
    
    //文字 重
    body, .n .n-data .n-data-v, .section-title, .video-title, .info-title, .large-item .title, #page-video .play-all-btn,
    .breadcrumb .follow-tabs, .breadcrumb .batch, .breadcrumb .play-all-btn, #page-follows .follow-main .follow-action-top .back-to-info, #page-follows .follow-main .follow-action-bottom li, #page-follows .follow-main .follow-action-bottom ul.filter-disable li:hover,
    #page-follows .follow-tabs span,
    #page-fav .fav-main .fav-action-top .back-to-info, #page-fav .fav-main .fav-action-bottom li, #page-fav .fav-main .fav-action-bottom li:hover,
    .article-title, #page-fav .fav-main .fav-content .fav-pugv-list .pugv-item .item-infos p.main-title,
    .sub-tabs span, .sub-tabs .filter-content, .tc-black {
      color: var(--dark-font-0)!important;
    }
    
    //高优先
    .feed-title, .section .user-auth.no-auth .no-auth-title .goto-auth, .user-auth .auth-description, .profession-description,
    .contribution-sidenav, .breadcrumb .item, .album-list__title
    .my-album .tab-list .tab:not(.active) .name, .my-album .title, .fav-sidenav, .nav-title .text,.i-live .i-live-text, .live-text,
    .fav-main .filter-item, .fav-main .filter-item .filter-type .be-dropdown-item span, .favInfo-box .favInfo-details .fav-name, .my-notebook .note-header .note-title .note-text,
    .pgc-item-title, .pgc-item-desc, .setting-privacy-item .setting-privacy-name, .channel-title .channel-name, .album-title, .follow-item,
    .g-search input {
      color: var(--dark-font-0)!important;
    }
    
    .pgc-space-follow-item .pgc-item-info .type-and-area, .pgc-space-follow-item .pgc-item-info .pgc-item-state, .favInfo-box .favInfo-details .fav-options .meta {
      color: var(--dark-font-1)!important;
    }
    
    // 投稿搜索后
    .search-page {
      background-color: var(--dark-card)!important;
      .search-nav {
        color: var(--dark-font-0)!important;
      }
    }
    
    //Card背景 
    .h .h-forbid, .n .n-inner, .bg-white,
    #page-index .col-1, .col-2 .section,
    .feed-title,
    .card,
    .col-full,
    .channel-option.no-channel, .channel-add-video,
    .follow-main .follow-action-bottom .follow-action-fixtop,
    #page-fav .fav-main .fav-action-bottom .fav-action-fixtop, #page-fav .fav-main .small-item:hover,
    .bili-dyn-item{
      background-color: var(--dark-card)!important;
    }
    .bili-dyn-item__tag {
      box-shadow: inset 0 -1px 0 var(--dark-3)!important;
    }
    
    // 2023年10月30日由于b站动态页面载入固定样式全局导致显示错误，故做一下修补
    a:not(.active,:hover) {
      color: var(--dark-font-0) !important;
    }
    
    //Card边框
    .col-1, .col-2 .section, .fav-covers, .card, .fav-main .small-item, .bili-dyn-item {
      border-color: var(--dark-card)!important;
    }

    .user-info-title{
      border-color: var(--dark-3)!important;
    }
    
    //Card阴影
    .n .n-inner, .large-item .cover img, .mini-item .cover img, .col-full, .i-pin-c{
      box-shadow: 0 0 0 1px #1313138a!important;
    }
    
    //框线
    .section, .section-title, .i-pin-v .be-tab, .i-m-upload, .i-m-r2, .user .tags, .contribution-sidenav, .contribution-sidenav~.main-content,
    .album-content, .filter, .channel-detail .channel-action-row .be-dropdown, .follow-main .follow-action-top, .follow-main .follow-action-top .back-to-info,
    .fav-sidenav,.fav-sidenav .nav-container, .fav-sidenav .watch-later, .fav-main .favList-info,
    .fav-main .filter-item.search, .fav-main .search-types, .fav-main .fav-action-top .back-to-info, .fav-main .fav-action-top,
    .article-content, .s-content, .setting-index-container, .setting-index-module,
    .i-live .i-live-unfo-btn, .i-live .i-live-fo-count, .section .operation, .channel .channel-item, .watch-later-btn, .mini-item,
    .follow-sidenav, .follow-sidenav .nav-container.follow-container, .follow-main, .follow-main .follow-header.follow-header-info, .list-item, .fans-action-btn.follow {
      border-color: var(--divider)!important;
    }
    
    .my-album .line {
      background-color: var(--dark-1)!important;
    }
    
    //hover深
    #submit-video-type-filter, .my-album .tab-list,
    .contribution-sidenav .contribution-item:hover,
    .fav-item:hover,
    .follow-item:hover {
      background-color: var(--dark-3)!important;
    }
    
    //搜索
    .g-search input, #page-fav .fav-main .search-input input {
      background: var(--dark-card)!important;
      color: var(--dark-font-0);
    }
    .g-search input {
      border-color: var(--divider);
    }
    
    //置顶视频，代表作
    .list-create {
      background-color: unset!important;
      .text {
        color: var(--dark-font-1);
      }
    }
    
    .feed-title {
      border-bottom: 1px solid var(--divider);
    }
    
    //空收藏夹
    .fav-covers.empty {
      background-image: url(${(0,n.getURL)("/statics/images/playlistbg.png")})!important;
    }
    
    //角标
    .section .count {
      background-color: var(--dark-2)!important;
      border-color: var(--dark-1)!important;
      color: var(--dark-font-1);
      &:before {
        background: none !important;
        left: -6px!important;
        top: -1px!important;
      }
    }
    
    //更多
    .section .more {
      border-color: var(--dark-5)!important;
      background-color: var(--dark-5)!important;
      color: var(--dark-font-1);
      background-position: -310px -404.5px!important;
      &:hover {
        background-position: -438px -404.5px!important;
      }
    }
    
    //公告
    #i-ann-content {
      textarea {
        background-color: var(--dark-3);
        border-color: var(--dark-3);
        color: var(--dark-font-1)!important;
      }
      &:hover textarea, &.focus textarea {
        color: var(--dark-font-0)!important;
      }
    }
    
    // 他的频道
    
    .channel-list {
      .channel-name {
        color: var(--dark-font-1)!important;
      }
    }
    
    ${r.DynamicMain}
    
    //更多操作
    #page-channel-detail .channel-detail .channel-action-row .be-dropdown {
      border-color: var(--dark-5)!important;
      background-color: var(--dark-5)!important;
    }
    .be-dropdown {
      color: var(--dark-font-1);
      .be-dropdown-menu {
        background: var(--dark-3)!important;
        border-color: var(--dark-3)!important;
        box-shadow: 0 11px 12px 0 var(--dark-3)!important;
        li:hover {
          background-color: var(--dark-2)!important;
        }
        .be-dropdown-item {
          color: var(--dark-font-0);
          &.be-dropdown-item-delimiter {
            border-color: var(--dark-1)!important;
          }
        }
      }
      &.filter-item {
        color: var(--dark-font-0);
      }
      .icon-arrow {
        background-position: -1369px -215px;
      }
    }
    
    .album-card .btn {
      background: var(--dark-3)!important;
      border-color: var(--dark-3)!important;
      color: var(--dark-font-0)!important;
    }
    
    .pgc-space-follow-item .bangumi-options .opt-list {
      background: var(--dark-3)!important;
      border-color: var(--dark-3)!important;
      li {
        color: var(--dark-font-0)!important;
        &:hover {
          color: #00a1d6!important;
          background-color: var(--dark-2)!important;
        }
        &.disabled, &.disabled:hover {
          color: #666666!important;
        }
      }
    }
    
    //拖动排序
    #page-fav .fav-sidenav .icon-cursor {
      background-color: var(--dark-1)!important;
    }
    
    //分页
    .be-pager {
      li.be-pager-item, li.be-pager-prev, li.be-pager-next {
        color: var(--dark-font-1)!important;
        background-color: var(--dark-2);
        border-color: var(--dark-3);
        &:hover {
          a {
            color: var(--dark-font-0)!important;
          }
          background-color: #00a1d6;
          border-color: var(--dark-3);
        }
      }
      .be-pager-options-elevator input {
        border-color: var(--dark-3);
        background-color: var(--dark-2);
        color: var(--dark-font-0);
      }
    }
    
    .bangumi-pagelistbox {
       a.p, a.prev-page, a.next-page {
        color: var(--dark-font-1)!important;
        background-color: var(--dark-2);
        border-color: var(--dark-3);
        &:hover {
          a {
            color: var(--dark-font-0)!important;
          }
          background-color: #00a1d6;
          border-color: var(--dark-3);
        }
      }
      .custom-right .custom-right-inner.custompage {
        border-color: var(--dark-3)!important;
        background-color: var(--dark-2)!important;
        color: var(--dark-font-0)!important;
      }
    }
    
    //笔记
    .my-notebook {
      .note-header, .note-single-item {
        border-color: var(--divider)!important;
      }
      .note-single-item {
        .note-item__detail--title {
          color: var(--dark-font-0)!important;
        }
        .note-item__detail--summary {
          color: var(--dark-font-1)!important;
        }
        .note-item__detail--info .update-mtime {
          color: var(--dark-font-2)!important;
        }
      }
      .note-single-item--selected {
        background: var(--dark-3)!important;
      }
    }
    .note-editor {
      color: #222;
    }
    
    //个人标签
    #page-setting {
      #setting-new-tag, #setting-new-tag-btn {
        border-color: var(--dark-3)!important;
        background: var(--dark-2)!important;
      }
      #setting-new-tag {
        color: var(--dark-font-0)!important;
      }
    }
    
    //认证标识修正
    #page-index .col-2 .section .user-auth .auth-icon {
      &.organization-auth {
        background-position: -2px -50px!important;
      }
      &.personal-auth {
        background-position: -36px -50px!important;
      }
    }
    
    //充电图片
    .elec-action {
      .elec-status {
        color: var(--dark-font-0)!important;
        .elec-count {
          color: var(--dark-font-1)!important;
        }
        background-image: url(${(0,n.getURL)("/statics/images/charging_unfocus.png")})!important
      }
      .elec-status-bg-grey {
        background: var(--dark-card)!important;
      }
      &:hover .elec-status {
         background-image: url(${(0,n.getURL)("/statics/images/charging_focus.gif")})!important
      }
      .elec-avatar {
        border-color: var(--dark-5)!important;
      }
    }
    
    //弹出框
    .modal-wrapper {
      background-color: var(--dark-3)!important;
      .modal-title, .title {
        border-color: var(--dark-1)!important;
      }
      .modal-title p {
        color: var(--dark-font-0)!important;
      }
      .btn.default {
        background-color: var(--dark-5)!important;
        border-color: var(--dark-5)!important;
        color: var(--dark-font-1)!important;
      }
      .be-input_inner, .be-textarea_inner {
        background: var(--dark-2)!important;
        border-color: var(--dark-1)!important;
        color: var(--dark-font-0);
      }
      .target-followitem {
        color: var(--dark-font-0)!important;
      }
    }
    
    .h .report-popup-item-text {
      color: unset!important;
    }
    
    .edit-media-list .edit-mask {
      .edit-board, .default-edit {
        background-color: var(--dark-3)!important;
        .head {
          color: unset!important;
          border-color: var(--dark-1)!important;
        }
        .info-wrap {
          .name-input, .media-list-intro{
            background: var(--dark-2)!important;
            border-color: var(--dark-1)!important;
            color: var(--dark-font-0);
          }
          .title {
            color: unset!important;
          }
        }
        .media-list-type {
          color: var(--dark-font-1)!important;
        }
        .default-btn-wrap .default-btn.cancel {
          background-color: var(--dark-5)!important;
          border-color: var(--dark-5)!important;
          color: var(--dark-font-1)!important;
        }
      }
    }
    
    #pin-wrapper {
      #pin-layer {
        background-color: var(--dark-3)!important;
      }
      .pin-layer-header {
        color: unset!important;
        border-color: var(--dark-1)!important;
      }
      #pin-layer-search {
        background: var(--dark-2)!important;
        border-color: var(--dark-1)!important;
        color: var(--dark-font-0);
      }
      .pin-layer-order-tip {
        color: unset!important;
      }
      .btn.btn-disabled {
        background-color: var(--dark-4)!important;
        border-color: var(--dark-4)!important;
        color: var(--dark-font-2)!important;
      }
      .btn.default {
        background-color: var(--dark-5)!important;
        border-color: var(--dark-5)!important;
        color: var(--dark-font-1)!important;
      }
    }
    
    .follow-dialog-wrap .follow-dialog-window {
      background-color: var(--dark-3)!important;
      .title {
        color: unset!important;
        border-color: var(--dark-1)!important;
      }
      .content .group-list {
        li {
          color: unset!important;
        }
        .add-group {
          .add-btn {
            color: var(--dark-font-1)!important;
            border-color: var(--dark-1)!important;
          }
          .input-group {
            background-color: var(--dark-2)!important;
            input {
              background: var(--dark-2)!important;
              border-color: var(--dark-1)!important;
              color: var(--dark-font-0);
            }
            .submit {
              background: #d9f1f933!important;
            }
          }
        }
        ul .follow-group-mask {
          background: unset!important;
        }
      }
      .bottom {
        border-color: var(--dark-1)!important;
        .btn:disabled {
          background-color: var(--dark-4)!important;
          border-color: var(--dark-4)!important;
          color: var(--dark-font-2)!important;
        }
      }
    }
    
    .wrapper .edit-video-modal {
      .target-favlist {
        .target-favitem .target-fav-title .fav-meta .fav-name, .target-fav-count {
          color: unset!important;
        }
      }
      .addfav-container {
        .fake-fav-input {
          color: var(--dark-font-1)!important;
          border-color: var(--dark-1)!important;
        }
        .fav-container {
          background-color: var(--dark-2)!important;
          input {
            background: var(--dark-2)!important;
            border-color: var(--dark-1)!important;
            color: var(--dark-font-0);
          }
          .fav-add-btn {
            background: #d9f1f933!important;
          }
        }
      }
      .favlist-body:after {
        background: var(--dark-1)!important;
      }
      .btn.ghost {
        background-color: var(--dark-4)!important;
        border-color: var(--dark-4)!important;
        color: var(--dark-font-2)!important;
      }
    }
    
    .fans-action-btn {
      color: var(--dark-font-1);
    }
    
    .fans-action-follow {
      background-color: var(--dark-5)!important;
      color: var(--dark-font-1);
    }
    
    #id-card {
      background: var(--dark-3)!important;
      .idc-meta, .idc-auth-description {
        color: var(--dark-font-1)!important;
      }
      .idc-avatar {
        border-color: var(--dark-3)!important;
      }
      .btn-center {
        a.primary {
          color: #fff!important;
          border-color: #00a1d6!important;
          background-color: #00a1d6!important;
        }
        a.primary:hover {
          border-color: #00b5e5!important;
          background-color: #00b5e5!important;
        }
        a, a.ghost {
          background: var(--dark-5)!important;
          color: var(--dark-font-1)!important;
          border-color: var(--dark-5)!important;
          &:hover {
            background: var(--dark-4)!important;
          }
        }
      }
      .idc-content {
        a .idc-uname{
          color: var(--dark-font-0)!important;
          &.this-is-vip {
            color: #fb7299!important;
          }
          &:hover {
            color: #00A1D6!important;
          }
        }
      }
    }
    .album-list {
      .album-list__title {
        color: var(--dark-font-1);
      }
      .album-list__tabs {
        background-color: var(--bg);
        .album-list__tab {
          .album-list__tab-name {
            color: var(--dark-font-1);
          }
        }
      }
      .album-card {
        .album-card__title {
          color: var(--dark-font-1);
        }
      }
    }
    ${r.CommentMain}
  `;t.SpaceDarkModeStyle=a},35877:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.VideoPlayDarkModeStyle=void 0;const o=i(635),n=i(14517),r=o.css`
  :root {
    --Ga0: #0D0D0E !important;
    --Ga0_s: #1E2022 !important;
    --Ga0_t: #1E2022 !important;
    --Ga1: #000000 !important;
    --Ga1_s: #232527 !important;
    --Ga1_t: #232527 !important;
    --Ga1_e: #232527 !important;
    --Ga2: #2F3134 !important;
    --Ga2_t: #2F3134 !important;
    --Ga3: #46494D !important;
    --Ga3_t: #46494D !important;
    --Ga4: #5E6267 !important;
    --Ga4_t: #5E6267 !important;
    --Ga5: #757A81 !important;
    --Ga5_t: #757A81 !important;
    --Ga6: #8B9097 !important;
    --Ga6_t: #8B9097 !important;
    --Ga7: #A2A7AE !important;
    --Ga7_t: #A2A7AE !important;
    --Ga8: #B9BDC2 !important;
    --Ga8_t: #B9BDC2 !important;
    --Ga9: #D0D3D7 !important;
    --Ga9_t: #D0D3D7 !important;
    --Ga10: #E7E9EB !important;
    --Ga10_t: #E7E9EB !important;
    --Ga11: #242628 !important;
    --Ga12: #1F2022 !important;
    --Wh0: #17181A !important;
    --Wh0_t: #17181A !important;
    --Ba0: #000000 !important;
    --Ba0_s: #FFFFFF !important;
    --Ba0_t: #000000 !important;
    --Pi0: #26161C !important;
    --Pi1: #2F1A22 !important;
    --Pi2: #472030 !important;
    --Pi3: #76304B !important;
    --Pi4: #A73E65 !important;
    --Pi5: #D44E7D !important;
    --Pi5_t: #D44E7D !important;
    --Pi6: #DC6D94 !important;
    --Pi7: #E38CAA !important;
    --Pi8: #EBABC1 !important;
    --Pi9: #F2CAD8 !important;
    --Pi10: #FAE9EF !important;
    --Ma0: #261525 !important;
    --Ma1: #2E182D !important;
    --Ma2: #461C43 !important;
    --Ma3: #72296C !important;
    --Ma4: #A13396 !important;
    --Ma5: #CB41BB !important;
    --Ma6: #D462C7 !important;
    --Ma7: #DD83D3 !important;
    --Ma8: #E6A4DE !important;
    --Ma9: #EFC5EA !important;
    --Ma10: #F8E6F6 !important;
    --Re0: #261314 !important;
    --Re1: #2E1617 !important;
    --Re2: #471A1C !important;
    --Re3: #742728 !important;
    --Re4: #A63131 !important;
    --Re5: #D1403E !important;
    --Re6: #D9615F !important;
    --Re7: #E18281 !important;
    --Re8: #E9A3A2 !important;
    --Re9: #F1C5C4 !important;
    --Re10: #F9E5E5 !important;
    --Or0: #28180F !important;
    --Or1: #301B10 !important;
    --Or2: #4A230E !important;
    --Or3: #783610 !important;
    --Or4: #A9490D !important;
    --Or5: #D66011 !important;
    --Or6: #DD7C3A !important;
    --Or7: #E49764 !important;
    --Or8: #EBB38D !important;
    --Or9: #F2CEB6 !important;
    --Or10: #FAEADF !important;
    --Ye0: #2A1E0F !important;
    --Ye1: #342410 !important;
    --Ye2: #4D300B !important;
    --Ye3: #7C4C08 !important;
    --Ye4: #AD6800 !important;
    --Ye5: #DB8700 !important;
    --Ye6: #E19C2C !important;
    --Ye7: #E7B158 !important;
    --Ye8: #EEC584 !important;
    --Ye9: #F4DAB1 !important;
    --Ye10: #FAEFDD !important;
    --Ly0: #2A2310 !important;
    --Ly1: #332A11 !important;
    --Ly2: #49390C !important;
    --Ly3: #745909 !important;
    --Ly4: #A27C00 !important;
    --Ly5: #CCA000 !important;
    --Ly6: #D5B02C !important;
    --Ly7: #DEC158 !important;
    --Ly8: #E7D184 !important;
    --Ly9: #EFE2B1 !important;
    --Ly10: #F8F2DD !important;
    --Lg0: #19220F !important;
    --Lg1: #1E2911 !important;
    --Lg2: #273C0E !important;
    --Lg3: #3C600F !important;
    --Lg4: #50840B !important;
    --Lg5: #67A70E !important;
    --Lg6: #81B638 !important;
    --Lg7: #9CC562 !important;
    --Lg8: #B6D58B !important;
    --Lg9: #D0E4B5 !important;
    --Lg10: #EBF3DF !important;
    --Gr0: #102017 !important;
    --Gr1: #11271B !important;
    --Gr2: #123923 !important;
    --Gr3: #175C34 !important;
    --Gr4: #198042 !important;
    --Gr5: #1FA251 !important;
    --Gr6: #46B26F !important;
    --Gr7: #6DC28D !important;
    --Gr8: #93D2AB !important;
    --Gr9: #BAE2C9 !important;
    --Gr10: #E1F3E8 !important;
    --Cy0: #0C1F20 !important;
    --Cy1: #0D2627 !important;
    --Cy2: #093739 !important;
    --Cy3: #085B5C !important;
    --Cy4: #028080 !important;
    --Cy5: #03A29F !important;
    --Cy6: #2FB2B0 !important;
    --Cy7: #5AC2C0 !important;
    --Cy8: #86D2D1 !important;
    --Cy9: #B2E2E1 !important;
    --Cy10: #DDF3F3 !important;
    --Lb0: #0A1B23 !important;
    --Lb1: #0B202A !important;
    --Lb2: #082D40 !important;
    --Lb3: #064A69 !important;
    --Lb4: #006996 !important;
    --Lb5: #0087BD !important;
    --Lb6: #2C9CC8 !important;
    --Lb7: #58B1D4 !important;
    --Lb8: #84C5DF !important;
    --Lb9: #B1DBEB !important;
    --Lb10: #DDEFF6 !important;
    --Bl0: #151826 !important;
    --Bl1: #181C2F !important;
    --Bl2: #1F2748 !important;
    --Bl3: #2E3C76 !important;
    --Bl4: #3B53A8 !important;
    --Bl5: #4B6BD4 !important;
    --Bl6: #6A85DB !important;
    --Bl7: #899EE3 !important;
    --Bl8: #A9B8EA !important;
    --Bl9: #C8D2F2 !important;
    --Bl10: #E7EBF9 !important;
    --Pu0: #1D1628 !important;
    --Pu1: #221A31 !important;
    --Pu2: #31214C !important;
    --Pu3: #4E317D !important;
    --Pu4: #6D3FB1 !important;
    --Pu5: #8C50E0 !important;
    --Pu6: #A06EE5 !important;
    --Pu7: #B48DEB !important;
    --Pu8: #C8ABF0 !important;
    --Pu9: #DBC9F5 !important;
    --Pu10: #F0E8FB !important;
    --Br0: #211D1B !important;
    --Br1: #282320 !important;
    --Br2: #382F2A !important;
    --Br3: #59483F !important;
    --Br4: #7A6154 !important;
    --Br5: #9A7C6A !important;
    --Br6: #AC9384 !important;
    --Br7: #BDA99E !important;
    --Br8: #CEBFB7 !important;
    --Br9: #E0D7D1 !important;
    --Br10: #F2EEEB !important;
    --Si0: #212325 !important;
    --Si1: #27292C !important;
    --Si2: #36393F !important;
    --Si3: #535962 !important;
    --Si4: #6F7987 !important;
    --Si5: #8C99AA !important;
    --Si6: #A0ABB9 !important;
    --Si7: #B4BCC7 !important;
    --Si8: #C8CED6 !important;
    --Si9: #DCE0E5 !important;
    --Si10: #F0F2F4 !important;
  }

  #app {
    background-color: var(--Ga12) !important;

    .video-title {
      color: var(--Bl0_u) !important;
    }

    .bilibili-player-video-sendbar {
      background: var(--Ga0) !important;

      .bilibili-player-video-info {
        color: var(--Ga5_u) !important;
      }

      .bilibili-player-video-inputbar {
        background: var(--dark-4) !important;

        .bilibili-player-video-inputbar-wrap {
          border-color: var(--Ba0_t) !important;
        }
      }
    }

    #bilibiliPlayer {
      box-shadow: 0 0 8px var(--Ba0) !important;
    }
  }

  body.player-fullscreen-fix {
    #app .bilibili-player-video-sendbar {
      background-color: transparent !important;
    }
  }
`,a=o.css`
  // 新新新版番剧页面信息
  /*body [class^=mediainfo]:not(:hover,:active) {
    //color: var(--dark-font-0) !important;
  }*/

  // 番剧介绍
  [class^=mediainfo_media_info] {
    [class^=mediainfo_media_right] {
      a:not(:hover), p, span {
        color: var(--dark-font-1) !important;
      }

      [class^=mediainfo_media_title] {
        color: var(--dark-font-3);
      }
    }

    [class^=mediainfo_ellipsis] {
      background: none !important;
    }

    // 评星级
    #ogv-weslie-media-info-review {
      border-color: var(--dark-card) !important;
      background-color: var(--dark-card) !important;

      &:hover {
        border-color: var(--dark-3) !important;
        background-color: var(--dark-3) !important;
      }
    }

    #ogv-weslie-media-info-follow {
      background-color: var(--dark-card) !important;

      [class^=mediainfo_follow_options] {
        [class^=mediainfo_follow_options_list] {
          background-color: var(--dark-0) !important;
          border-color: var(--dark-0) !important;

          li {
            color: var(--dark-font-2) !important
          }
        }
      }
    }
  }

  // 分割线
  [class^=operation_split_line],
  [class^=mediainfo_media_info],
  #review-module,
  #comment-module,
  .bb-comment .comment-header,
  .comment-bilibili-fold .comment-header,
  .bb-comment .comment-list .list-item .con,
  .comment-bilibili-fold .comment-list .list-item .con {
    border-color: var(--divider) !important;
  }

  .bb-comment, .comment-bilibili-fold {
    background: none !important;
  }

  // 右侧边栏
  [class^=paybar_btn_pay] {
    background-color: var(--dark-2) !important;
    border-color: transparent !important;
  }

  #danmukuBox {
    background-color: unset !important;
  }

  [class^=eplist_list_title] {
    h4 {
      color: var(--dark-font-1) !important;
    }
  }

  // 长标题选集
  [class^=longListItem_wrap] {
    margin-right: 6px;
    width: auto;

    &:hover {
      background-color: var(--dark-3) !important;
    }

    &[class*=longListItem_select] {
      background-color: var(--dark-3) !important;
    }
  }


  // 数字选集
  [class^=numberListItem_number_list_item] {
    border-color: transparent !important;
    background-color: var(--dark-3) !important;

    &[class*=numberListItem_select] {
      border-color: var(--bilibili-blue) !important;
    }

    [class^=numberListItem_title] {
      color: var(--dark-font-1) !important;
    }
  }

  [class^=numberList_wrapper], [class^=longList_wrap] {
    [class^=numberListItem_title], [class^=longListItem_wrap] {
      color: var(--dark-font-1) !important;
    }
  }

  // 其他选集卡片
  [class^=section_ep_section_module] {
    background-color: var(--dark-2) !important;

    [class^=section_section_title] {
      color: var(--dark-font-1) !important;
    }

    [class^=epitem_ep_item] {
      &:hover, &[class*=epitem_cursor] {
        background-color: var(--dark-3) !important;
      }


      [class^=epitem_ep_title] {
        color: var(--dark-font-2) !important;
      }
    }
  }


  // 点评区
  #review-module {
    [class^=review_module_title] {
      color: var(--dark-font-3) !important;
    }

    [class^=review_review_item_fill] {
      background: var(--dark-card) !important;

      [class^=review_review_title], [class^=review_review_content], [class^=review_review_author] {
        color: var(--dark-font-1) !important;
      }
    }
  }

  // 评论区
  .comment-emoji {
    margin-top: 8px;
    line-height: 20px;
    border-color: var(--dark-card) !important;
    background-color: var(--dark-card) !important;
    box-shadow: none !important;
  }

  .comment-send-lite .textarea-container textarea {
    background-color: var(--dark-2) !important;
  }

  // 推荐区
  [class^=RecommendItem_title], [class^=seasonlist_ss_title] {
    color: var(--dark-font-0) !important;
  }

  ${n.CommentMain}
  .comment-send-lite {
    background-color: var(--bg) !important;
  }
`,s=o.createGlobalStyle`
  body {
    color: var(--dark-font-0);
  }

  // 播放器mini窗口
  #bofqi.mini-player:before {
    box-shadow: #000000 0 0 8px;
  }

  // 视频信息
  #v_desc {
    .info, .desc-info {
      color: #879199;
    }
  }

  // 新合集
  .base-video-sections, .base-video-sections-v1 {
    background-color: #131313 !important;

    .first-line-title, .video-episode-card__info-title {
      color: var(--dark-font-1) !important;
    }

    .video-episode-card__info-playing {
      background-color: var(--paper-grey-900) !important;
    }
  }

  // 创作团队
  .members-info {
    .members-info__header {
      background-color: var(--dark-1);

      .title, .btn {
        color: var(--dark-font-1);
      }
    }

    .up-card {
      .avatar .info-tag {
        background-color: var(--dark-4) !important;
      }

      .avatar-name__container .name-text {
        color: var(--dark-font-0);
      }

      .attention {
        background-color: var(--dark-5) !important;
      }
    }

    .wide-members {
      .wide-members__title {
        color: var(--dark-font-1);
      }

      .avatar {
        border-color: var(--dark-5);

        .info-tag {
          background-color: var(--dark-4) !important;
        }

        .up-name {
          color: var(--dark-font-0);
        }
      }

      .van-icon-general_back_s, .van-icon-general_enter_s {
        &:before {
          background-color: var(--dark-6);
        }
      }

      .van-icon-general_back_s:after {
        background: linear-gradient(-270deg, #000, hsla(0, 0%, 100%, 0)) !important;
      }

      .van-icon-general_enter_s:after {
        background: linear-gradient(270deg, #000, hsla(0, 0%, 100%, 0)) !important;
      }
    }
  }

  // up信息
  .up-info {
    .btn .b-cd {
      background: var(--dark-3) !important;
    }

    .up-info_right {
      .name {
        .username {
          color: var(--dark-font-0);
        }

        .message {
          color: var(--dark-font-1);
        }
      }

      .btn-panel {
        .charge-btn {
          background: var(--dark-3) !important;
        }
      }
    }

    .btn-panel {
      .following {
        background-color: var(--dark-5);
        border-color: var(--dark-5);
      }

      .default-btn:not(.btn-transition) {
        background-color: var(--dark-1);
      }
    }
  }

  .bili-header-m .nav-menu .nav-mask {
    background-color: var(--dark-1) !important;
  }

  .nav-wrapper .nav-con ul li a {
    color: var(--dark-font-1) !important;
  }

  #viewbox_report .video-title .tit, .media-wrapper > h1,
  .media-right > *:not(.media-tool-bar),
  .media-right > *:not(.media-tool-bar) a, .media-right > *:not(.media-tool-bar) span {
    color: var(--dark-font-0) !important;
  }

  .main-container .media-info .media-right .media-tool-bar {
    .btn-rating {
      background-color: var(--dark-5);
      border-color: var(--dark-5);
      color: var(--dark-font-1) !important;

      &:hover {
        background-color: var(--dark-4);
      }
    }

    .btn-follow.active {
      background-color: var(--dark-5) !important;
    }

    .bangumi-options .opt-list {
      background: var(--dark-3) !important;
      border-color: var(--dark-3) !important;

      li {
        color: var(--dark-font-0) !important;

        &:hover {
          color: #00a1d6 !important;
          background-color: var(--dark-2) !important;
        }

        &.disabled, &.disabled:hover {
          color: #666666 !important;
        }
      }
    }
  }

  .main-container {
    background-color: transparent !important;
  }

  [class^="mediainfo_mediaInfo"], [class^="recommend_wrap"] {
    border-color: var(--divider) !important;
  }
  [class^="eplist_ep_list_wrapper"] {
    background-color: var(--dark-1) !important;
    [class^="SectionSelector_expand"] {
      background: linear-gradient(270deg,var(--dark-1) 46.21%,hsla(210,8%,95%,0)) !important;
    }
  }

  .bili-comment.browser-pc {
    background-color: transparent !important;
  }

  .reply-box.fixed-box {
    background-color: var(--bg) !important;
  }

  .main-container .plp-l .player-mask .player-limit-mask {
    background-color: var(--dark-0) !important;
  }

  .main-container .plp-l .player-mask .bar-wrapper {
    background-color: var(--dark-5) !important;
  }

  .main-container .pre-mask, .main-container .season-list .ss-list-wrapper .ss-item .ss-cover, .main-container .media-info .media-cover, .main-container .plp-l .player-mask .bar-wrapper .left-bar, .main-container .plp-l .player-mask .bar-wrapper .right-bar {
    background-color: var(--dark-1) !important;
  }

  .player-module .player-tool-bar {
    background: unset !important;
  }

  #bilibiliPlayer, .bpx-player-container {
    box-shadow: 0 0 8px var(--dark-1) !important;
  }

  #bilibili-player.mini-player:before {
    box-shadow: 0 0 5px var(--dark-1) !important;
  }

  #paybar_module {
    .vip a.btn-pay.active {
      background-color: var(--dark-1) !important;
      border: 1px solid var(--dark-3);
    }
  }

  #member-container {
    .up-card {
      .info-name {
        color: #c7c7c7;
      }
    }
  }

  // tags
  #v_tag {
    border-color: var(--divider) !important;

    ul li {
      background-color: var(--dark-1) !important;
      border-color: var(--dark-1) !important;

      .tag-item {
        border-color: var(--dark-0);
        background-color: var(--dark-1);
      }

      .tag-info-pane, a, .text {
        background-color: var(--dark-1) !important;
        color: var(--dark-font-1) !important;
      }
    }

    .btn-add, .ipt {
      background-color: var(--dark-2) !important;
      border-color: var(--dark-1) !important;
      color: var(--dark-font-1) !important;
    }
  }

  // 新版播放器
  .bpx-player-filter, .bpx-player-dm-wrap {
    background-color: var(--dark-2) !important;
  }

  .bpx-player-sending-area .bpx-player-sending-bar {
    background-color: var(--dark-0) !important;
  }

  .bpx-player-video-inputbar {
    background-color: var(--dark-5) !important;
  }

  .bpx-player-video-inputbar-wrap {
    border-color: var(--dark-5) !important;
  }

  .bpx-player-dm-btn-footer {
    background-color: var(--dark-0) !important;

    &:hover {
      color: var(--dark-font-2) !important;
    }
  }

  .bpx-player-dm-btn-history {
    background-color: var(--dark-0) !important;
  }

  .bpx-player-date-picker {
    border-color: var(--dark-0) !important;
    background-color: var(--dark-3) !important;
  }

  .bpx-player-date-picker-header {
    border-color: var(--dark-4) !important;
  }

  .bpx-player-date-picker-day {
    border-color: transparent !important;
    color: var(--dark-6) !important;

    &.day-enable {
      color: var(--dark-font-1) !important;
    }
  }

  .bpx-player-dm-load-status {
    background-color: var(--dark-0) !important;
    color: var(--dark-font-1) !important;
  }

  .dm-info-dm {
    color: var(--dark-font-1) !important;
  }

  .bui-long-list-item {
    &.bui-long-list-item-selected {
      .dm-info-row {
        background-color: var(--dark-3) !important;
      }
    }

    .dm-info-block-btn, .dm-info-report-btn {
      background-color: var(--dark-3) !important;
    }
  }

  // 举报窗口 
  .bpx-player-report-box {
    background-color: var(--dark-3) !important;
    box-shadow: none !important;
    border: 1px solid var(--dark-0) !important;

    .bpx-player-report-title {
      border-bottom-color: var(--dark-4) !important;
    }

    .bpx-player-report-content {
      color: var(--dark-font-0) !important;
    }
  }

  // 弹幕列表
  .player-auxiliary-area .player-auxiliary-danmaku .player-auxiliary-danmaku-function [class*=player-auxiliary-danmaku-btn-],
  .player-auxiliary-area .player-auxiliary-danmaku .player-auxiliary-danmaku-function,
  .danmaku-wrap,
    // 新版番剧播放器
  .bpx-player-dm-function,
  .bpx-player-auxiliary .bpx-player-dm-function .bpx-player-dm-btn-date, .bpx-player-auxiliary .bpx-player-dm-function .bpx-player-dm-btn-dm, .bpx-player-auxiliary .bpx-player-dm-function .bpx-player-dm-btn-time {
    background: #191919 !important;
    color: var(--dark-font-1) !important;

    .player-auxiliary-area {
      .player-auxiliary-danmaku-wrap, .player-auxiliary-danmaku-btn-history, .player-auxiliary-danmaku-btn-footer {
        background: #191919 !important;
      }
    }

    .player-auxiliary-danmaku-contaner {
      .player-auxiliary-danmaku-load-status {
        background: #191919 !important;
        color: #fff;
      }
    }
  }

  .player-auxiliary-area {
    background: #191919 !important;
  }

  .player-auxiliary-danmaku-load-status {
    background: unset !important;

    &.disabled {
      color: var(--dark-font-1) !important;
    }
  }

  .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-wrap .bscroll-vertical-scrollbar {
    background-color: black !important;
  }

  .danmaku-info-row {
    .danmaku-info-danmaku, span {
      color: var(--dark-font-1) !important;
    }

    &.danmaku-info-row-block {
      opacity: 0.3 !important;
    }
  }

  .player-auxiliary-area .player-auxiliary-filter {
    .player-auxiliary-filter-title {
      color: var(--dark-font-1) !important;
    }

    .player-auxiliary-setting-menu-wrap, .player-auxiliary-viewpointlist {
      background-color: var(--dark-1) !important;
      border-color: var(--dark-1) !important;

      .player-auxiliary-setting-menu-list {
        background-color: var(--dark-1) !important;
        color: var(--dark-font-1) !important;

        &:hover {
          background-color: var(--dark-3) !important;
        }
      }
    }
  }

  .player-auxiliary-collapse-viewpointlist {
    background: none !important;
  }

  .player-auxiliary-filter-wrap {
    background-color: #191919 !important;
  }

  .player-auxiliary-viewpointlist-item {
    .player-auxiliary-viewpointlist-info {
      .player-auxiliary-viewpointlist-content {
        color: var(--dark-font-1) !important;
      }

      .player-auxiliary-viewpointlist-time {
        color: var(--dark-font-2) !important;
      }
    }
  }

  .player-auxiliary-playlist-item-p-item-active {
    color: #00a1d6 !important;
  }

  .player-auxiliary-playlist-bottom {
    border-color: var(--dark-3) !important;
  }

  .danmaku-wrap .player-auxiliary-block .player-auxiliary-block-tabpanel {
    .player-auxiliary-block-tabpanel-row {
      &.special-title .player-auxiliary-block-label {
        color: var(--dark-font-1) !important;
      }

      &.player-auxiliary-border {
        background-color: var(--dark-3) !important;
      }
    }

    .player-auxiliary-block-string-short {
      background: var(--dark-4) !important;
      border-color: var(--dark-4) !important;

      &:focus {
        color: var(--dark-font-0) !important;
      }
    }

    .bui-button.bui-button-gray:not(:hover) {
      background: var(--dark-5) !important;
      color: var(--dark-font-1) !important;
    }

    .bui-tabs .bui-tabs-header .bui-tabs-header-item:not(.bui-tabs-header-item-active) {
      color: var(--dark-font-1);
    }

    .player-auxiliary-block-list-wrap .player-auxiliary-block-list .player-auxiliary-block-line {
      color: var(--dark-font-3) !important;
      background: var(--dark-4) !important;
    }
  }

  // 弹幕列表管理菜单
  .danmaku-wrap .player-auxiliary-area .player-auxiliary-danmaku-management {
    background-color: var(--dark-3) !important;

    & > * {
      border-color: var(--dark-1) !important;
    }

    .player-auxiliary-danmaku-wrap .player-auxiliary-danmaku-load-status {
      background: transparent !important;
    }
  }


  .v-wrap {
    background: none !important;

    .danmaku-wrap {
      background-color: var(--dark-2) !important;
    }
  }

  .bui-collapse-wrap {
    background-color: var(--dark-2) !important;

    .bui-collapse-header, .player-auxiliary-filter {
      background-color: var(--dark-2) !important;
    }

    .bui-collapse-body {
      background-color: var(--dark-2) !important;

      .player-auxiliary-playlist-item-active, .player-auxiliary-playlist-item:hover {
        .player-auxiliary-playlist-item-title {
          color: #00a1d6;
        }
      }

      .player-auxiliary-playlist-item-title {
        color: var(--dark-font-1);
      }
    }

    .player-auxiliary-playlist-item-p-list {
      .player-auxiliary-playlist-item-p-item {
        color: inherit;

        :hover {
          background-color: var(--paper-grey-900) !important;
        }
      }
    }
  }

  .bui-collapse .bui-collapse-header, .player-auxiliary-filter {
    background: var(--dark-2);

    span {
      color: var(--dark-font-1);
    }
  }

  // 选集列表
  #eplist_module, #multi_page, .ep-section-module {
    background-color: var(--dark-2);

    .list-wrapper.longlist {
      padding-right: 6px;
    }

    .list-wrapper.simple li {
      width: 64px;
    }

    .list-title, .head-con {
      h4, h3 {
        color: var(--dark-font-1);
      }
    }

    .section-title {
      color: var(--dark-font-1);
    }

    .module-box {
      li {
        &:not(.on):not(:hover) {
          border-color: var(--dark-3);
          background-color: #232323;

          a {
            color: var(--dark-font-1);
          }
        }

        &:not(.on):hover {
          background-color: #232323;
        }
      }
    }

    .list-wrapper, .cur-list .list-box, .section-ep-wrapper {
      &.simple {
        .ep-item:not(.cursor) {
          color: var(--dark-font-1);
          border-color: var(--dark-3);
          background-color: #232323;
        }
      }

      .ep-item, li {
        width: auto;
        margin-right: 5px;
        color: var(--dark-font-1);

        a {
          color: var(--dark-font-1);
        }

        &.cursor, & {
          background-color: #232323;
        }

        &.visited, &.watched {
          color: #757575;
        }

        &:hover {
          background-color: var(--dark-3);
          color: var(--dark-font-1);
        }
      }
    }
  }

  .video-sections {
    background-color: var(--dark-2) !important;

    .video-sections-head {
      .first-line-left {
        .first-line-title {
          color: var(--dark-font-1) !important;
        }
      }

      .video-sections-head_second-line {
        button {
          background: transparent !important;
        }
      }

      .border-bottom-line {
        background: var(--dark-4) !important;
      }
    }

    .video-sections-content-list {
      .video-sections-item {
        background-color: var(--dark-2) !important;
        border-color: var(--dark-1) !important;

        .video-section-title {
          background: var(--dark-1) !important;
          color: var(--dark-font-1) !important;
        }

        .video-episode-card {
          .video-episode-card__info-title {
            color: var(--dark-font-1) !important;

            &.video-episode-card__info-title-playing, &:hover {
              color: #00a1d6 !important;
            }
          }
        }
      }
    }
  }

  //广告
  .slide-ad .slide-gg {
    background: var(--dark-1) !important;
  }

  a.ad-report {
    color: var(--dark-font-3);

    .vcd {
      .cover {
        background: var(--dark-1) !important;
      }
    }
  }

  // 播放器工具栏
  .bilibili-player {
    background: unset !important;
  }

  .bilibili-player-video-bottom-area {
    :before {
      background: var(--dark-2) !important;
    }
  }

  .bilibili-player-video-sendbar {
    background: transparent !important;

    .bilibili-player-video-inputbar {
      background-color: unset !important;

      .bilibili-player-video-inputbar-wrap {
        border-color: var(--dark-4) !important;
        background-color: var(--dark-4);
      }

      .bilibili-player-video-danmaku-input {
        color: var(--dark-font-1) !important;
      }
    }

    .bilibili-player-video-sendbar-left, .bilibili-player-video-sendbar-right {
      background-color: var(--dark-1) !important;
    }
  }

  // 交互栏
  #arc_toolbar_report, #toolbar_module, #media_module, .main-container .review-module {
    border-color: var(--divider) !important;

    .more-ops-list {
      background-color: var(--dark-1) !important;
      border-color: var(--dark-1) !important;
      box-shadow: unset !important;
      color: var(--dark-font-1) !important;

      li:hover {
        background-color: var(--dark-3) !important;
      }
    }

    .media-desc i {
      background-color: var(--bg);
    }
  }

  .media-tool-bar {
    .btn-rating {
      background-color: var(--dark-1);
      border-color: var(--dark-1);
    }
  }

  // 活动
  .activity-m {
    .onlytip {
      color: var(--dark-font-1);
    }

    .inside-wrp {
      border-color: var(--dark-1);
      background-color: var(--dark-1);

      .left {
        color: var(--dark-font-1);
      }

      .right .inside-bg:before {
        background-image: linear-gradient(90deg, var(--dark-1), transparent 30%);
      }
    }
  }

  // 评价
  #review_module {
    border-color: var(--divider) !important;

    .review-list .review-item .review-body {
      background-color: var(--dark-1) !important;

      .review-header .review-author, .review-title {
        color: var(--dark-font-1)
      }

      .review-content {
        color: var(--dark-font-1) !important;
      }
    }
  }

  // 承包榜
  #sponsor_module {
    border-color: var(--divider) !important;

    .sponsor-rank-header {
      h3, .sponsor-rank-tab li {
        color: var(--dark-font-1) !important;
      }
    }

    .sponsor-rank-item {
      .sp-right .sp-msg {
        color: var(--dark-font-1) !important;
        border-color: var(--dark-1) !important;
        background-color: var(--dark-1) !important;
      }
    }
  }

  // 右侧视频推荐区
  #recom_module {
    .recom-title, .recom-list .video-title {
      color: var(--dark-font-3);
    }

    .expand-more {
      background-color: var(--dark-1);
      color: var(--dark-font-1);
    }
  }

  #reco_list {
    .rec-title {
      color: var(--dark-font-3);
    }

    .card-box {
      .pic-box {
        background: var(--dark-1) !important;
      }

      .info .title {
        color: var(--dark-font-3);
      }
    }

    a:hover {
      color: #00a1d6 !important;
    }

    .rec-footer {
      background-color: var(--dark-1);
    }
  }

  // 收藏页面右侧推荐区
  .rcmd-list {
    .remd-video-card {
      .info {
        .title {
          color: var(--dark-font-1) !important;
        }

        .count a {
          color: var(--dark-font-2) !important;
        }
      }
    }
  }

  // 番剧剧集信息
  #seasonlist_module {
    .series-title, [class^=seasonlist_series_title], .ss-list-wrapper .ss-item .ss-info .ss-title {
      color: var(--dark-font-3);
    }

    .ss-list-wrapper .ss-item .ss-info {
      .ss-title {
        color: var(--dark-font-3);
      }

      .pub-info {
        color: var(--dark-font-3);
      }
    }

    .expand-more {
      background-color: var(--dark-1);
      color: var(--dark-font-1);
    }
  }

  // 直播推荐 
  #live_recommand_report .pl__card {
    border-color: var(--dark-1);
    background-color: var(--dark-1);

    .pl__info .pl__title {
      color: var(--dark-font-1);
    }
  }

  // 侧边按钮
  .float-nav .nav-menu .item, .main-container .nav-tools .tool-item {
    background-color: var(--dark-4);
    border-color: var(--dark-4);
  }

  //投币弹出
  .coin-operated-m {
    background-color: var(--dark-3);

    .coin-title, .like-checkbox {
      color: var(--dark-font-0);
    }

    .mc-box {
      background-color: #fff;
    }
  }

  //收藏弹出
  .collection-m {
    background-color: var(--dark-3);

    .title {
      border-color: var(--dark-1) !important;
      color: var(--dark-font-0) !important;
    }

    .content .group-list {
      li .fav-title {
        color: var(--dark-font-0);
      }

      ul .collection-mask {
        background-color: unset !important;
      }
    }

    .add-group {
      .add-btn {
        color: var(--dark-font-1) !important;
        border-color: var(--dark-1) !important;
      }

      .input-group {
        background-color: var(--dark-2) !important;

        input {
          background: var(--dark-2) !important;
          border-color: var(--dark-1) !important;
          color: var(--dark-font-0);
        }

        .submit {
          background: #d9f1f933 !important;
        }
      }
    }

    .bottom {
      border-color: var(--dark-1) !important;

      .btn.disable {
        background-color: var(--dark-4) !important;
        border-color: var(--dark-4) !important;
        color: var(--dark-font-2) !important;
      }
    }
  }

  //转发弹出
  .video-toolbar .ops .share .share-pos {
    background-color: var(--dark-card) !important;
    border-color: var(--dark-card) !important;
    color: var(--dark-font-1);

    .box-a .share-down .share-btn {
      color: var(--dark-font-1);
    }

    .share-address .t {
      color: var(--dark-font-3);
    }

    .box-b {
      border-color: var(--dark-6) !important;
    }
  }

  //笔记
  .video-editor .ql-toolbar {
    color: #222;
  }

  // 抽奖
  .comment-vote-bilibili {
    background-color: var(--dark-3) !important;

    .t {
      color: var(--dark-font-0) !important;
      border-color: var(--dark-4) !important;
    }
  }

  //评论区
  #comment_module, #comment .common, #comment .comment {
    border-color: var(--divider) !important;

    .b-head {
      color: var(--dark-font-1);
    }

    .comment-send-lite {
      background: var(--Ga12) !important;
      border-color: var(--Ga12) !important;
    }

    .comment-emoji {
      box-shadow: none !important;
    }
  }

  .comm, .comment {
    ${n.CommentMain}
    .textarea-container {
      textarea {
        background-color: var(--dark-1) !important;
        border-color: var(--dark-1) !important;
        color: var(--dark-font-1) !important;
      }

      &:hover textarea, &.focus textarea {
        color: var(--dark-font-0) !important;
      }
    }

    .comment-emoji {
      border: 1px solid var(--dark-1) !important;
      background-color: var(--dark-1) !important;
    }
  }

  // 笔记功能
  .ql-editor {
    color: initial;
  }

  ${r}
  ${a}
  .svg-icon[class*=user-level] svg rect.st0 {
    fill: transparent !important;
  }
`;t.VideoPlayDarkModeStyle=s},93337:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.DarkMode=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"darkMode",{settings:{on:!1,followSystem:!0}}),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}}t.DarkMode=r},71476:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(93337),t)},24560:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SnifferStore=void 0;const n=o(i(57689));t.SnifferStore=n.default.createContext({})},77550:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SnifferViewer=void 0;const s=r(i(57689)),l=a(i(635)),c=i(53507),d=i(83888),u=i(43521),p=i(555),h=i(24560);(0,p.injectIconfont)("font_1690169_snaprnjkjk");const m=(e,t)=>{chrome.runtime.sendMessage({target:"downloadController",event:"create",name:t||e,data:{filename:t,url:e}})},f=(0,l.default)(c.Modal)`
  ${u.globalColor};

  &.sniffer-viewer-modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    min-width: auto;
    max-width: calc(100% - 64px);
    max-height: calc(100% - 64px);
    font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  }


  //@media (prefers-color-scheme: dark) {
  //.bilibili-helper-dark-mode &.sniffer-viewer-modal {
  //  background-color: var(--dark-1);
  //  color: var(--dark-font-3);
  //}

  //}

  .modal-body {
    padding: 0;
  }

  .viewer-header {
    display: flex;
    padding: 8px 8px 8px 16px;

    .title {
      margin-right: 6px;
      line-height: 36px;
      font-size: 22px;
      font-weight: 300;

      .bilibili-helper-2-icon-cat {
        margin-right: 4px;
        width: fit-content;
        line-height: 22px;
        color: var(--bilibili-pink);
      }

      .bilibili-helper-2-icon-bigData {
        vertical-align: baseline;
        margin-right: 4px;
      }
    }
  }

  .dev-sign {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 12px;
    background-color: var(--google-yellow-700);
    padding: 2px 0 0 6px;
    color: white;
    font-weight: 300;
    border-radius: 4px 0 0 0;

    a {
      margin-left: 4px;
      color: white;
    }
  }
`,b=l.default.div`
  display: flex;
  align-items: center;
  margin-right: auto;

  .filter-list-header {
    margin: 4px;
  }
`,v=l.default.div`
  display: flex;
  margin: 0 4px;
  font-size: 12px;
  cursor: pointer;

  .filter-name {
    margin-right: 2px;
  }
`,g={add:"+",minus:"-"},y=({title:e,name:t,value:i,operate:o})=>{const{removeFilter:n}=(0,s.useContext)(h.SnifferStore),r=(0,s.useCallback)(()=>{n(t,i)},[e,t,i,o]);return s.default.createElement(v,{onClick:r},g[o],s.default.createElement("span",{className:"filter-name"},e),"[ ",s.default.createElement("span",{className:"filter-value"},i)," ]")},w=l.default.div`
  position: sticky;
  top: 0;
  margin-right: 4px;
  padding: 0px 16px 6px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: 160px;
  height: 100%;
  box-sizing: border-box;
  background-color: var(--paper-grey-50);
  user-select: none;
  -webkit-user-drag: none;
  overflow: hidden auto;

  //@media (prefers-color-scheme: dark) {
  //.bilibili-helper-dark-mode & {
  //  background-color: var(--paper-grey-900);
  //}

  //}

  .type-list {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    .category-name {
      //font-weight: bold;
      margin-top: 6px;
      margin-bottom: 4px;
      font-size: 12px;
    }

    .type-item-title {
      margin-bottom: 1px;
      padding: 2px 4px;
      border-radius: 4px;
      cursor: pointer;
      overflow: hidden;

      :hover {
        background-color: var(--google-grey-300);
        //@media (prefers-color-scheme: dark) {
        //.bilibili-helper-dark-mode & {
        //  background-color: #303030;;
        //}

        //}
      }
    }

    .type-item {
      display: flex;
      flex-direction: column;
      font-weight: 300;
      cursor: pointer;
      margin-bottom: 6px;

      &.active {
        .type-item-title {
          //font-weight: bold;
          background-color: var(--google-grey-300);
          //@media (prefers-color-scheme: dark) {
          //.bilibili-helper-dark-mode & {
          //  background-color: #303030;;
          //}

          //}
        }
      }
    }
  }

  .sub-type-list {
    display: flex;
    flex-direction: column;
    //padding: 4px 20px;

    .sub-type-item {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      margin-left: 8px;
      margin-bottom: 1px;
      padding: 2px 2px 2px 0;
      border-radius: 4px;
      font-size: 14px;
      white-space: break-spaces;
      word-break: break-all;
      cursor: pointer;
      overflow: hidden;

      :hover {
        background-color: var(--google-grey-300);
        //@media (prefers-color-scheme: dark) {
        //.bilibili-helper-dark-mode & {
        //  background-color: #303030;;
        //}

        //}
      }

      .name {
        display: -webkit-box;
        margin-right: auto;
        padding: 0px 4px;
        border-radius: 4px;
        font-size: 12px;
        text-align: justify;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-all;
        overflow: hidden;
      }

      .count {
        flex-shrink: 0;
        display: block;
        margin-left: 3px;
        min-width: 16px;
        width: fit-content;
        height: 16px;
        line-height: 16px;
        border-radius: 2px;
        font-size: 12px;
        text-align: center;
        background-color: var(--bilibili-gray);
        //@media (prefers-color-scheme: dark) {
        //.bilibili-helper-dark-mode & {
        //  background-color: var(--paper-grey-900);
        //}

        //}
      }

      &.active {
        //font-weight: bold;
        background-color: var(--google-grey-300);
        //@media (prefers-color-scheme: dark) {
        //.bilibili-helper-dark-mode & {
        //  background-color: #303030;;
        //}

        //}
      }
    }
  }
`,k=l.default.div`
  position: absolute;
  right: 0;
  bottom: 20px;
  left: 0;
  display: flex;
  height: calc(100% - 116px + 32px + 32px - 20px);
  overflow: auto;

  //@media (prefers-color-scheme: dark) {
  //.bilibili-helper-dark-mode & {
  //  color: var(--dark-font-3);
  //}

  //}
`,x=l.default.div`
  flex-grow: 1;
  padding: 8px 8px 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  //grid-template-rows: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 8px;

  .type-container {
    margin-bottom: 16px;

    :last-of-type {
      margin-bottom: 0;
      padding-bottom: 50px;
    }

    .container-name {
      position: sticky;
      top: 0;
      display: block;
      align-items: center;
      margin-right: 8px;
      padding: 4px 4px 4px;
      height: 20px;
      line-height: 20px;
      text-indent: 12px;
      background-color: #f1f1f1;
      z-index: 1;
    }

    .container-items {
      padding: 8px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      grid-gap: 8px;

      :empty:after {
        content: '没有内容';
        font-size: 12px;
      }
    }
  }

  //@media (prefers-color-scheme: dark) {
  //.bilibili-helper-dark-mode & {
  //  .type-container {
  //    .container-name {
  //      background-color: #222;
  //    }
  //  }
  //}

  //}
`,S=l.default.div`
  display: flex;
  flex-direction: column;
  margin: 4px 4px 8px;
  padding: 8px;
  height: fit-content;
  border-radius: 4px;
  //overflow: hidden;

  &.selected {

  }

  :hover {
    box-shadow: inset 0 0 1px var(--paper-grey-900);

    .param-list {
      opacity: 1;
    }

    //@media (prefers-color-scheme: dark) {
    

    //}
  }
  //.bilibili-helper-dark-mode &:hover {
  //  box-shadow: inset 0 0 1px var(--paper-grey-500);
  //}

  .img-wrapper {
    position: relative;
    display: flex;
    //flex-grow: 1;
    align-items: center;
    justify-content: center;
    min-height: 120px;

    :hover {
      .action-wrapper {
        opacity: 1;
      }

      .img, .no-image-preview {
        filter: blur(4px);
      }
    }

    .img {
      display: block;
      margin: 0 auto;
      max-width: 200px;
      min-width: 10px;
      width: auto;
      max-height: 120px;
      min-height: 10px;
      height: initial;
      object-fit: contain;
      background-color: var(--bilibili-gray);
      box-shadow: inset 0 0 1px #bbb;
      -webkit-user-drag: none;
      image-rendering: pixelated;
      
      //@media (prefers-color-scheme: dark) {
      //.bilibili-helper-dark-mode & {
      //  background-color: var(--paper-grey-900);
      //}
      //}
    }

    

    .no-image-preview {
      text-align: center;

      .file-sub-type {
        font-size: 12px;
      }
    }

    .action-wrapper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      //visibility: hidden;
      z-index: 1;
      //backdrop-filter: blur(4px);
      opacity: 0;
      transition: opacity .2s;

      .button {
        margin-right: 8px;
        box-shadow: 0 0 1px var(--paper-grey-900);
        color: var(--paper-grey-1000);
        background-color: var(--bilibili-gray);

        :last-of-type {
          margin-right: 0;
        }
      }
    }
  }


  .param-list {
    margin-top: 4px;
    font-size: 12px;
    opacity: .7;
    //color: var(--paper-grey-500);
    //@media (prefers-color-scheme: dark) {
    //.bilibili-helper-dark-mode & {
    //  color: var(--paper-grey-600);
    //}

    //}
  }

  //@media (prefers-color-scheme: dark) {
  //.bilibili-helper-dark-mode & {
  //  //:hover {
  //  //  background-color: var(--paper-grey-900);
  //  //}
  //  .img {
  //    box-shadow: inset 0 0 1px #555;
  //  }
  //
  //  .img-wrapper {
  //    .action-wrapper {
  //      //background-color: var(--paper-grey-900);
  //      .button {
  //        color: var(--bilibili-gray);
  //        background-color: var(--paper-grey-1000);
  //        box-shadow: 0 0 1px var(--paper-grey-400);
  //      }
  //    }
  //  }
  //}

  //}
`,_=l.default.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  margin-bottom: 4px;
  line-height: 16px;
  font-family: sans-serif;
  user-select: none;
  -webkit-user-drag: none;

  &.filter {
    .param-value {
      margin: 0px -3px;
      padding: 0px 3px;
      border-radius: 2px;
      cursor: pointer;

      :hover {
        background-color: var(--paper-grey-300);
      }

      //.bilibili-helper-dark-mode &:hover {
      //  background-color: var(--paper-grey-800);
      //}
    }
  }

  :last-of-type {
    margin-bottom: 0;
  }

  .param-name {
    margin-right: 4px;
    //transform: scale(0.9);
    //transform-origin: bottom;
  }

  .param-value-wrapper {
    display: flex;
    flex-wrap: wrap;

    .param-value {
      margin-right: 3px;
      display: -webkit-box;
      width: fit-content;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: break-all;
      overflow: hidden;
      white-space: break-spaces;

      :last-of-type {
        margin-right: 0;
      }
    }
  }

`,O=({title:e,name:t,value:i,data:o,isFilter:n})=>{const{addFilter:r}=(0,s.useContext)(h.SnifferStore),a=(0,s.useCallback)((o,a)=>{n&&r(e,o||t,a||i,"add")},[e,t,i,n]);return s.default.createElement(_,{className:n?"filter":""},s.default.createElement("span",{className:"param-name",title:e},e,":"),s.default.createElement("div",{className:"param-value-wrapper"},o?o.map(({name:e,value:t},i)=>s.default.createElement("span",{key:i,className:"param-value",title:t,onClick:()=>a(e,t)},t)):s.default.createElement("span",{className:"param-value",title:i,onClick:()=>a()},i)))},C=e=>{const{url:t,originUrl:i,type:o,subType:n,size:r,directory:a,filename:l,pathname:u}=e,p=(0,s.useRef)(null),[f,b]=(0,s.useState)(!0),v=(0,s.useContext)(h.SnifferStore),{filters:g,setPreview:y}=v,w=((0,s.useCallback)(()=>{y(u)},[]),(0,s.useCallback)(()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"sniffer",action:"click_download"}),m(t,l)},[t,l]));return(0,s.useEffect)(()=>{if(g.length>0){let t=!0;for(const{name:i,value:o,operate:n}of g)t="add"===n?t&&(e[i]===o||d.CATEGORY_MAP[e[i]]===o):t&&!(e[i]===o||d.CATEGORY_MAP[e[i]]===o);f!==t&&b(t)}else f||b(!0)},[v,f]),f?s.default.createElement(S,{key:t},s.default.createElement("div",{className:"img-wrapper"},"image"===o?s.default.createElement(c.Image,{url:i||t,ref:p}):s.default.createElement("div",{className:"no-image-preview"},s.default.createElement(c.Icon,{icon:"file",size:40}),s.default.createElement("div",{className:"file-sub-type"},n)),s.default.createElement("div",{className:"action-wrapper"},s.default.createElement(c.Button,{className:"download-btn",icon:"cloud-download",iconSize:26,onClick:w}))),s.default.createElement("div",{className:"param-list"},s.default.createElement(O,{title:"\u7c7b\u578b",data:[{name:"type",value:o},{name:"subType",value:n}],isFilter:!0}),r?s.default.createElement(O,{title:"\u5c3a\u5bf8",name:"size",value:r,isFilter:!0}):null,s.default.createElement(O,{title:"\u8def\u5f84",data:[{name:"directory",value:d.CATEGORY_MAP[a]},{name:"directory",value:a}],isFilter:!0}))):null},L=(0,l.default)(c.Modal)`
  ${u.globalColor};

  &.previewer-modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    min-width: auto;
    max-width: calc(100% - 64px);
    max-height: calc(100% - 64px);
    font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  }

  //@media (prefers-color-scheme: dark) {
  //.bilibili-helper-dark-mode &.previewer-modal {
  //  background-color: var(--dark-1);
  //  color: var(--dark-font-3);
  //}

  //}

  .modal-body {
    display: flex;
    padding: 0;
    height: 100%;
    max-height: 100%;
  }

  .close-btn {
    position: absolute;
    top: 0;
    right: 0;
    margin: 8px;
  }

  .left-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 12px;
    width: calc(100% - 24px);
    height: calc(100% - 24px);

    .img {
      object-fit: contain;
      display: block;
      margin: auto;
      width: 100%;
      height: 100%;
      image-rendering: pixelated;
    }
  }

  .right-container {
    flex-shrink: 0;
    width: 400px;
    display: flex;
    flex-direction: column;
    background-color: var(--Pi0);
    border-radius: 0 4px 4px 0;
  }

  .side {

    .header {

    }

    .info-wrapper {

    }
  }
`,P=()=>{const e=(0,s.useContext)(h.SnifferStore),[t,i]=(0,s.useState)(null),{previewPathname:o,clearPreview:n,data:r}=e,a=(0,s.useCallback)(()=>{n()},[e]);return(0,s.useEffect)(()=>{!!o!==!!t&&i(o?r[o]:null)},[e]),s.default.createElement(L,{className:"previewer-modal",open:!!t,onClickMask:a},s.default.createElement(c.Button,{className:"close-btn",icon:"close",iconSize:26,onClick:a}),s.default.createElement("div",{className:"left-container"},s.default.createElement("div",{className:"header"}),s.default.createElement("div",{className:"image-wrapper"},t&&"image"===(null===t||void 0===t?void 0:t.type)?s.default.createElement(c.Image,{url:t.url,width:t.width,height:t.height}):null)),s.default.createElement("div",{className:"side"},s.default.createElement("div",{className:"header"}),s.default.createElement("div",{className:"info-wrapper"})))};class T extends s.default.Component{constructor(e){super(e),this.state={show:!1,categories:{},pathnameList:[],data:{},currentType:null,currentSubType:null,sortList:{},previewPathname:null,filters:[{title:"\u7c7b\u578b",name:"type",value:"image",operate:"add"}],addFilter:(e,t,i,o="add")=>{this.shiftDown&&(o="minus");const{filters:n}=this.state,r=n.find(({name:e,value:o})=>t===e&&i===o);r?r.operate!==o?(r.operate=o,this.setState({filters:n})):this.state.removeFilter(t,i):(n.push({title:e,name:t,value:i,operate:o}),this.setState({filters:n}))},removeFilter:(e,t)=>{const{filters:i}=this.state,o=i.findIndex(({name:i,value:o})=>e===i&&t===o);o>=0&&(i.splice(o,1),this.setState({filters:i}))},setPreview:(e=null)=>{this.setState({previewPathname:e})},clearPreview:()=>{this.setState({previewPathname:null})}},this.shiftDown=!1,this.handleOnClickCloseBtn=()=>{this.setState({show:!1},()=>{document.body.style.overflow=""})},this.handleOnClickType=e=>{switch(e){case"size":case"directory":return;default:return this.state.addFilter("\u7c7b\u522b","type",e)}},this.handleOnClickSubType=(e,t)=>{switch(e){case"size":return this.state.addFilter("\u7c7b\u522b",e,t);case"directory":return this.state.addFilter("\u8def\u5f84",e,t);default:return this.state.addFilter("\u5b50\u7c7b\u522b","subType",t)}}}componentDidMount(){document.addEventListener("keydown",e=>{"Shift"===e.key&&(this.shiftDown=!0)}),document.addEventListener("keyup",e=>{"Shift"===e.key&&(this.shiftDown=!1)}),window.addEventListener("message",e=>{var t;"showSnifferViewer"===(null===(t=null===e||void 0===e?void 0:e.data)||void 0===t?void 0:t.command)&&this.setState({show:!0},()=>{document.body.style.overflow="hidden"})}),chrome.runtime.onMessage.addListener((e,t,i)=>{if("showSnifferViewer"===e.command)this.setState({show:!0},()=>{document.body.style.overflow="hidden"}),chrome.runtime.sendMessage({target:"sniffer",event:"getCurrentTabSnifferData"});else if("getViewerState"===e.command)i(this.state.show);else if("snifferData"===e.command&&e.data){const{categories:t,data:o,sortList:n,pathnameList:r}=e.data,a={categories:t,data:o,sortList:n,pathnameList:r};this.setState(a),i(!0)}return!0}),chrome.runtime.sendMessage({target:"sniffer",event:"snifferDOMInitialized"})}render(){const{show:e,categories:t,data:i,sortList:o,pathnameList:n,filters:r,currentType:a,currentSubType:l}=this.state;return s.default.createElement(h.SnifferStore.Provider,{value:this.state},s.default.createElement(f,{open:e,className:"sniffer-viewer-modal",onClickMask:this.handleOnClickCloseBtn},s.default.createElement("header",{className:"viewer-header"},s.default.createElement("div",{className:"title"},s.default.createElement(c.Icon,{icon:"cat",size:28}),"\u8d44\u6e90\u7ba1\u7406\u5668"),s.default.createElement(b,{className:"filter-list"},r.length>0?s.default.createElement("span",{className:"filter-list-header"},"\u8fc7\u6ee4\u5668:"):null,r.length>0?r.map(e=>s.default.createElement(y,Object.assign({key:e.key+e.value},e))):null),s.default.createElement(c.Button,{icon:"close",iconSize:26,onClick:this.handleOnClickCloseBtn})),s.default.createElement(k,{className:"sniffer-viewer-content"},s.default.createElement(w,{className:"sniffer-viewer-side"},s.default.createElement("div",{className:"type-list"},s.default.createElement("div",{className:"category-name"},"\u7c7b\u578b / \u683c\u5f0f:"),Object.keys(t).map(e=>s.default.createElement("div",{key:e,className:["type-item",e===a?"active":null].filter(Boolean).join(" ")},s.default.createElement("div",{className:"type-item-title",onClick:()=>this.handleOnClickType(e)},e),s.default.createElement("div",{className:"sub-type-list"},e?(o[e]||Object.keys(t[e])).map(i=>s.default.createElement("div",{key:i,className:["sub-type-item",i===l?"active":null].filter(Boolean).join(" "),onClick:()=>this.handleOnClickSubType(e,i)},s.default.createElement("span",{className:"name",title:i},d.CATEGORY_MAP[i]||i),s.default.createElement("span",{className:"count"},t[e][i].length))):null))))),s.default.createElement(x,{className:"sniffer-viewer-item-container"},e?n.map(e=>{const t=i[e];return s.default.createElement(C,Object.assign({key:e},t))}):null)),s.default.createElement("div",{className:"dev-sign"},"\u6253\u5305\u4e0b\u8f7d\u529f\u80fd\u6682\u672a\u5f00\u653e\u3002\u6b63\u5728\u5f00\u53d1\u4e2d\uff0c\u5982\u6709\u95ee\u9898\u6216\u5efa\u8bae\u8bf7",s.default.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u8054\u7cfb\u300c\u52a9\u624b\u732b\u300d"))),s.default.createElement(P,null))}}t.SnifferViewer=T},83888:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CATEGORY_MAP=void 0,t.CATEGORY_MAP={"/bfs/archive":"\u89c6\u9891\u5c01\u9762","/bfs/bangumi/image":"\u756a\u5267\u5c01\u9762","/bfs/vip":"VIP\u76f8\u5173","/bfs/static/blive/blfe-dynamic-web/static/img":"\u52a8\u6001\u8d44\u6e90","/bfs/album":"\u76f8\u518c","/bfs/face":"\u7528\u6237\u5934\u50cf","/bfs/emote":"\u8868\u60c5","/bfs/garb/item":"\u88c5\u626e","/bfs/article":"\u6587\u7ae0\u8d44\u6e90","/bfs/static/jinkela/article-web/asserts":"\u9875\u9762\u8d44\u6e90","/bfs/seed/jinkela/commentpc/static/img":"\u4e00\u822c\u9759\u6001\u8d44\u6e90","/bfs/article/banner":"\u6587\u7ae0\u5934\u56fe","/bfs/space":"\u7a7a\u95f4","/bfs/static/jinkela/space/assets":"\u4e2a\u4eba\u7a7a\u95f4\u8d44\u6e90","/bfs/seed/jinkela/header-v2/images":"\u5934\u56fe","/bfs/music":"\u97f3\u4e50","/bfs/live/new_room_cover":"\u76f4\u64ad\u95f4\u5c01\u9762"}},26363:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},84071:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(41907),t),n(i(39679),t),n(i(6787),t),n(i(32781),t),n(i(81779),t),n(i(86741),t),n(i(68070),t),n(i(8901),t),n(i(26363),t),n(i(71476),t),n(i(12956),t),n(i(16045),t)},19610:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const n=i(53507),r=i(555),a=()=>o(void 0,void 0,void 0,(function*(){const e="";return yield(0,r.getPageDataInWindow)(`(() => {\n        let retryTimes = 0;\n            const t = setInterval(() => {\n                if (window.__SSR_INITIAL_STATE__ || window.__NEPTUNE_IS_MY_WAIFU__ || window.__STORE__) {\n                    window.postMessage({command: '${e}', pageData: {...(\n                        window.__SSR_INITIAL_STATE__ ||\n                        window.__NEPTUNE_IS_MY_WAIFU__ ||\n                        window.__STORE__\n                    )\n                }}, '*');\n                    clearInterval(t);\n                } else {\n                    ++retryTimes;\n                }\n                if (retryTimes === 300) {\n                    clearInterval(t);\n                }\n            }, 1000);\n        })()`,e)})),s=()=>o(void 0,void 0,void 0,(function*(){var e;const t=yield a();if(!t)return n.Message.error("\u76f4\u64ad\u95f4\u6570\u636e\u89e3\u6790\u5931\u8d25");const i=(null===t||void 0===t?void 0:t.baseInfoRoom)||(null===(e=null===t||void 0===t?void 0:t.roomInfoRes)||void 0===e?void 0:e.data),o=null===t||void 0===t?void 0:t.baseInfoAnchor;if(null===i||void 0===i?void 0:i.anchor_info){const{medal_info:e}=i.anchor_info;return(null===e||void 0===e?void 0:e.medal_id)||!1}return o&&(null===o||void 0===o?void 0:o.medalId)||!1})),l=()=>(0,r.interval)("#chat-control-panel-vm").then(e=>{if(e.childElementCount)return(0,r.interval)(".medal-section > span").then(e=>{if(!e)return n.Message.error("\u5207\u6362\u76f4\u64ad\u95f4\u663e\u793a\u52cb\u7ae0\u9519\u8bef\uff0c\u8bf7\u8054\u7cfb\u52a9\u624b\u732b");const t=(0,r.injectStyle)("updateLocalMedalShow","\n                .dialog-ctnr.common-popup-wrap.medal {\n                    display: none;\n                }\n            ");null===e||void 0===e||e.click(),setTimeout(()=>{null===e||void 0===e||e.click()}),setTimeout(()=>{t.remove()},600)})}),c=e=>new Promise(t=>{chrome.runtime.sendMessage({target:"autoMedal",event:"wearMadel",medalId:e},e=>{t(e)})}),d=()=>new Promise(e=>{chrome.runtime.sendMessage({target:"autoMedal",event:"takeOff"},t=>{e(t)})});(0,r.inLiveRoom)()&&(()=>{chrome.runtime.sendMessage({target:"autoMedal",event:"getSetting"},e=>{(null===e||void 0===e?void 0:e.on)&&s().then(e=>{e?c(e).then(e=>{if(!e)return d();n.Message.info("\u66f4\u6362\u7c89\u4e1d\u52cb\u7ae0\u6210\u529f")}).then(l):d()})})})()},26931:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AutoMedal=void 0;const r=i(12404),a=(n(i(43057)),i(96582));class s extends r.Feature{constructor(e){super(e,"autoMedal",{settings:{on:!1}}),this.modifyOrigin=e=>{const{requestHeaders:t}=e,i=[...t];let o=i.findIndex(({name:e})=>"bilibili-helper-header-action-set-origin"===e);return o>-1&&(i.push({name:"Origin",value:i[o].value}),i.splice(o,1)),{requestHeaders:i}},this.getJCT=()=>o(this,void 0,void 0,(function*(){return yield this.emit("cookieController","get",{url:"https://www.bilibili.com",name:"bili_jct"},e=>e)})),this.wearMadel=(e,t,i)=>o(this,void 0,void 0,(function*(){const t=yield this.getJCT();if(!t)return i(!1);const{medalId:n}=e;yield this.emit("requestController","create",{url:"https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/wear",options:{method:"post",contentType:"json",body:`csrf_token=${t}&csrf=${t}&medal_id=${n}`,headers:{"content-type":"application/x-www-form-urlencoded",passWrapper:"true","bilibili-helper-header-action-set-origin":"https://www.bilibili.com/"}}},({data:e})=>o(this,void 0,void 0,(function*(){i(0===e.code)})))})),this.takeOff=(e,t,i)=>o(this,void 0,void 0,(function*(){const e=yield this.getJCT();if(!e)return i(!1);yield this.emit("requestController","create",{url:"https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/take_off",options:{method:"post",contentType:"json",body:`csrf_token=${e}&csrf=${e}&visit_id=`,headers:{"content-type":"application/x-www-form-urlencoded",passWrapper:"true","bilibili-helper-header-action-set-origin":"https://www.bilibili.com/"}}},({data:e})=>o(this,void 0,void 0,(function*(){i(0===e.code)})))})),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("wearMadel",this.wearMadel),this.addListener("takeOff",this.takeOff),this.emit("webRequestController","create",{name:"autoMedalModifyOrigin",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.live.bilibili.com/xlive/web-room/v1/fansMedal/*"]},options:["blocking","requestHeaders","extraHeaders"],callback:(0,a.webRequestCallbackWrapper)(this.modifyOrigin)})}))}}t.AutoMedal=s},95075:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AutoSignIn=void 0;const r=i(12404),a=n(i(40337));class s extends r.Feature{constructor(e){super(e,"autoSignIn",{settings:{on:!1,pushNotification:!0},cache:{type:"local",dataType:"number"}}),this.online=!1,this.bilibiliAccount=null,this.notificationControllerOn=!1,this.onBeforeLaunch=()=>o(this,void 0,void 0,(function*(){this.addListener("networkOnlineChange",e=>this.online=e),yield this.emit("notificationController","getSetting",null,({on:e})=>{this.notificationControllerOn=e}),this.emit("networkController","getOnline",null,e=>this.online=e)})),this.onLaunch=()=>o(this,void 0,void 0,(function*(){this.notificationControllerOn&&this.settings.on&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin&&(this.createClock(),this.request())})),this.onPause=()=>o(this,void 0,void 0,(function*(){this.clearClock()})),this.createClock=()=>{this.emit("clockController","create",{name:"autoSignIn",alarmInfo:{periodInMinutes:5},focus:!0,callback:this.request})},this.clearClock=()=>{this.emit("clockController","pause",{name:"autoSignIn"})},this.request=()=>o(this,void 0,void 0,(function*(){if(this.online&&!chrome.extension.inIncognitoContext&&this.settings.on)return!this.todayPassed&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.emit("requestController","create",{url:""+a.default.doSign,options:{contentType:"json"}},({data:e})=>o(this,void 0,void 0,(function*(){!1===e?this.settings.pushNotification&&this.emit("notificationController","post",{title:"\u81ea\u52a8\u7b7e\u5230\u5931\u8d25",tag:"autoSignIn"}):0===e.code?(this.cache.set((new Date).getDate()),this.settings.pushNotification&&this.emit("notificationController","post",{title:"\u81ea\u52a8\u7b7e\u5230\u6210\u529f",tag:"autoSignIn"})):1011040===e.code?this.cache.set((new Date).getDate()):this.settings.pushNotification&&this.emit("notificationController","post",{title:"\u81ea\u52a8\u7b7e\u5230\u5931\u8d25",tag:"autoSignIn"})}))):void 0})),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}get todayPassed(){return this.cache.get()===(new Date).getDate()}onAfterSetSetting(e,t){return o(this,void 0,void 0,(function*(){t.on&&!this.__launched&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.launch():t.on&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin||!this.__launched||this.pause()}))}onBHAccountChange(e){const t=Object.create(null,{onBHAccountChange:{get:()=>super.onBHAccountChange}});return o(this,void 0,void 0,(function*(){yield t.onBHAccountChange.call(this,e),this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.notificationControllerOn&&this.settings.on&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin&&(this.createClock(),this.request()):this.pause()}))}}t.AutoSignIn=s},40337:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={doSign:"https://api.live.bilibili.com/sign/doSign"}},8581:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ChatFilter=void 0;const s=a(i(32699)),l=a(i(57689)),c=r(i(635)),d=i(53507),u=i(555),p=i(43521),h=c.createGlobalStyle`
  //html {
  //  ${p.globalColor}
  //}

  .chat-history-panel .chat-history-list .chat-item.danmaku-item, .chat-history-panel .chat-history-list .chat-item.danmaku-item * {
    pointer-events: auto !important;
  }
`,m=c.default.div.attrs({className:"chat-helper-panel ctrl-panel bilibili-chat-filter-panel"})`
  padding: 0 4px 0 0;
  //width: 100%;
`,f=((0,c.default)(d.Icon)`
  margin: 0 4px 0 7px;
  font-size: 20px;
  vertical-align: middle;
  color: #c8c8c8;
  transition: color .4s cubic-bezier(.22, .58, .12, .98);
  user-select: none;

  &:hover {
    color: #23ade5;
  }
`,c.default.h1`
  width: 100%;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
`),b=c.default.div.attrs({className:"filter-item"})`
  display: flex;
  justify-content: space-between;
  margin: 0 0 5px;
  padding: 3px 0 4px 4px;
  line-height: 16px;
  border-radius: 4px;
  font-size: 12px;
  color: #666;
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background-color: #eee;
  }
`,v=c.default.span.attrs({className:"filter-item-title"})`
  margin-right: 34px;
`,g=(0,c.default)(d.CheckBoxButton)`
  user-select: none;

  & .radio-knob {
    top: 2px;
    left: 2px;
    width: 12px;
    height: 12px;
  }
`,y={chat:".chat-item.danmaku-item, .chat-item.chat-colorful-bubble{display:none !important;}",small:".chat-item:not(.system-msg) > a, .chat-item .guard-icon, .chat-item .wealth-medal-ctnr {display:none !important;}",gift:".chat-item.top3-notice, .chat-item.gift-item, #chat-gift-bubble-vm {display:none !important;}",medal:".chat-item .fans-medal-item-ctnr,.chat-item .title-label{display:none !important;}",pk:"#chaos-pk-vm, #awesome-pk-vm{display:none !important;}",announcement:".chat-item.system-msg, .chat-item.convention-msg{display:none !important;}",n2233:"#my-dear-haruna-vm{display:none !important;}",emoji:".chat-item.chat-emoticon{display:none !important;}",flowEmoji:".danmaku-item-container .bilibili-danmaku img{display:none !important;}",combo:"#combo-card, .danmaku-item-container .combo {display:none!important;}"};class w extends l.default.Component{constructor(e){super(e),this.state={globalOption:{},localOption:{}},this.roomId=(()=>{const e=location.pathname.slice(1).match(/\d+/);return e?e[0]:null})(),this.handleOnClickRadio=(e,t)=>{const{localOption:i,globalOption:o}=this.state;let n=Object.assign({},i);o[e]===t&&n[this.roomId]&&void 0!==n[this.roomId][e]?delete n[this.roomId][e]:(n[this.roomId]||(n[this.roomId]={}),n[this.roomId][e]=t),s.default.isEmpty(n[this.roomId])&&delete n[this.roomId],chrome.runtime.sendMessage({target:"chatFilter",event:"setFilterMap",filterMap:n},()=>{this.setState({localOption:n})})}}componentDidMount(){chrome.runtime.sendMessage({target:"chatFilter",event:"getSetting"},e=>{this.setState({globalOption:e.options})}),chrome.runtime.sendMessage({target:"chatFilter",event:"getFilterMap"},e=>{this.setState({localOption:e})})}render(){const{localOption:e,globalOption:t}=this.state;return l.default.createElement(m,null,l.default.createElement(h,null),l.default.createElement(f,null,(0,u.__)("chatFilter_UI_listName")),Object.keys(t).map(i=>{const o=y[i],n=e[this.roomId]?e[this.roomId][i]:void 0,r=void 0!==n?n:t[i];return l.default.createElement(b,{key:i,onClick:()=>this.handleOnClickRadio(i,!r)},l.default.createElement(v,null,(0,u.__)("chatFilter_options_"+i)),l.default.createElement(g,{on:r}),o&&r?l.default.createElement("style",null,o):null)}))}}t.ChatFilter=w},50494:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.ChatFilter=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"chatFilter",{settings:{on:!0,options:{chat:!1,small:!0,gift:!0,medal:!0,emoji:!1,flowEmoji:!1,n2233:!0,pk:!1,announcement:!1,combo:!1}}}),this.filterMap={},this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings),stores:{filterMap:this.getStore("filterMap")}})}))}onInitStore(){return o(this,void 0,void 0,(function*(){const e=this.getStore("filterMap");void 0===e?(this.filterMap={},this.setStore("filterMap",this.filterMap)):this.filterMap=e}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("getFilterMap",(e,t,i)=>{i(this.filterMap)}),this.addListener("setFilterMap",(e,t,i)=>{this.filterMap=e.filterMap,this.setStore("filterMap",this.filterMap),i(!0)})}))}}t.ChatFilter=r},17902:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LiveChatMode=void 0;const s=i(53507),l=i(32699),c=a(i(57689)),d=r(i(635)),u=a(i(56058)),p=i(555),h=i(37459),{color:m}=h.theme,f=(0,d.default)(s.Button)`
  width: max-content;
  height: 22px;
  border-radius: 4px;

  button {
    display: inline-block;
    padding: 0 5px;
    font-weight: normal;
    border-radius: 4px;
    border: 1px solid ${m("bilibili-blue")};
    background-color: white;
    color: ${m("bilibili-blue")};
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  &.on button, & button:hover {
    background-color: var(--bilibili-blue);
    color: white;
  }

  .chat-area-btn {
    padding-left: 4px;
    border-left: 1px solid;
    margin-left: 4px;
  }
`,b=d.createGlobalStyle`
  .fullscreen-fix .aside-area,
  .player-full-win.hide-aside-area .aside-area {
    display: block;
  }

  .hide-aside-area {
    .live-room-app {
      .app-content {
        &:hover {
          .chat-input-ctnr, .control-panel-icon-row {
            visibility: visible !important;
          }
        }

        .app-body {
          #head-info-vm, #rank-list-ctnr-box {
            background-image: none !important;
          }

          .player-and-aside-area {
            .aside-area {
              display: block !important;
              background-color: transparent;
              z-index: 1001 !important;
              pointer-events: auto;

              .chat-history-panel {
                position: fixed;
                left: 0;
                bottom: 180px;
                display: inline-block;
                width: auto;
                height: calc(50% - 20px);
                border-radius: 4px;
                pointer-events: auto;
                background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 15%, transparent 75%) !important;
                background-color: transparent !important;
                background-color: unset;
                overflow: hidden;

                .chat-history-list {
                  margin-right: 8px;
                  height: 100%;
                  padding: 0;
                  overflow: -moz-scrollbars-none;
                  scrollbar-width: none;

                  &::-webkit-scrollbar {
                    display: none;
                  }

                  .chat-item {
                    margin-left: 6px;

                    &.danmaku-item {
                      margin: 0 0 4px 0;
                      padding: 3px 8px;
                      //width: fit-content;
                      height: auto;
                      font-size: 14px;
                      //border-radius: 4px;
                      //background-color: rgb(0 0 0 / 60%);
                      color: #e8e8e8 !important;
                    }

                    //&.chat-colorful-bubble {
                    //  backdrop-filter: saturate(0) brightness(0.7);
                    //}
                  }
                }

                .danmaku-buffer-prompt {
                  bottom: 0;
                  width: 100%;
                  margin-left: -10px;
                  border-radius: 4px;
                }

                #chat-history-list {
                  border-bottom: 1px solid transparent;
                  border-left: 1px solid transparent;
                  border-radius: 0 0 0 4px;
                }

                &:hover #chat-history-list {
                  border-bottom-color: var(--bilibili-blue);
                  border-left-color: var(--bilibili-blue);
                }
              }

              #chat-control-panel-vm {
                position: fixed;
                left: 0;
                bottom: 10px;
                margin-bottom: 3px;
                width: 100%;
                height: auto;
                background-color: transparent !important;
                background-image: none !important;
                pointer-events: none !important;
                z-index: 10;

                .control-panel-ctnr {
                  height: auto;
                  padding: 0 3px;
                  background: none !important;
                  border-radius: 0;

                  .chat-input-ctnr {
                    position: fixed;
                    bottom: 8px;
                    left: 440px;
                    right: 440px;
                    border: none;
                    background-color: transparent !important;

                    // 默认不隐藏, 避免在输入拼音光标被遮挡时数去焦点自动隐藏而中断输入的问题
                    &:not(.chat-input-focus) {
                      visibility: hidden;
                    }

                    .medal-section {
                      height: 36px;
                    }

                    .chat-input, textarea {
                      min-width: 200px;
                      height: 32px;
                      line-height: 16px;
                      background-color: rgba(0 0 0 / 80%) !important;
                      border-radius: 4px;
                      border-color: #2b2b2b;
                      color: #fff;
                      pointer-events: auto;

                      ::placeholder {
                        color: #fff;
                      }
                    }

                    .input-limit-hint {
                      bottom: 6px;
                      right: 12px;
                    }
                  }
                }

                .control-panel-icon-row {
                  visibility: hidden;

                  .icon-left-part {
                    margin-left: 8px;
                  }

                  &.superChat {
                    display: flex !important;
                    margin-top: -22px;
                    height: 21px;

                    .icon-right-part {
                      float: right !important;
                      margin-left: auto;
                      margin-right: 13px;
                      order: 0;
                    }

                    .icon-right-end-part {
                      float: right !important;
                      order: 1;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    //#bilibiliHelper2HandleButtonWrapper,
    #chat-control-panel-vm .chat-input-ctnr .medal-section,
    .live-room-app .app-content .app-body .player-and-aside-area .aside-area .chat-history-panel::-webkit-scrollbar,
    .live-room-app .app-content .app-body .player-and-aside-area .aside-area .rank-list-section,
    #penury-gift-msg,
    #chat-control-panel-vm .bottom-actions,
    .chat-history-panel #chat-history-list .chat-item.danmaku-item:before,
    .chat-history-panel #chat-history-list .chat-item.danmaku-item.guard-danmaku:after {
      display: none;
    }

    .live-room-app .app-content .app-body .chat-history-panel .chat-item,
    #chat-control-panel-vm .control-panel-ctnr,
    .control-panel-icon-row {
      pointer-events: none;
    }

    .web-player-controller-wrap {
      //bottom: 0px !important;
      padding: 0 0 4px 110px !important;

      & > div {
        margin-right: 200px;
        background: none !important;
      }
    }

    //#background-manage-vm,
    //#ema-wishing-vm,
    //#enter-failure,
    //#gold-store-vm,
    //#guard-store-vm,
    //#head-info-vm.head-info-section,
    //#link-footer-vm,
    //#link-navbar-vm,
    //#player-effect-vm,
    //#room-background-vm,
    //#sidebar-vm,
    //body.fullscreen-fix section#sections-vm {
    //  display: block !important
    //}

    .live-room-app .app-content .app-body .chat-history-panel .chat-item span,
    #chat-popup-area-vm,
    .chat-small-icon-box,
    .control-panel-icon-row > *,
    .danmaku-menu,
    .dialog-ctnr {
      pointer-events: auto;
    }

    .live-room-app .app-content .app-body .chat-history-panel .chat-item .user-name {
      //text-shadow: 0px 1px 1px #000;
    }

    .live-room-app .app-content .app-body .chat-history-panel .chat-item .danmaku-content {
      color: #eee;
      //text-shadow: 0px 1px 1px #000;
    }

    .dialog-ctnr {
      width: fit-content !important;

      .yan-ctnr {
        width: 300px;
      }

      &.common-popup-wrap {
        bottom: 30px !important;
        right: auto !important;
        right: 0 !important;
        width: fit-content;
        margin: 0 0 0 2px !important;
      }

      // 优化emoji表情弹窗初始弹出方向和位置
      &.emoticons {
        left: unset !important;
        right: 0 !important;
      }

      .superchat-content {
        max-width: 300px;
      }
    }

    //.bilibili-live-player-video video, #live-player video, .web-player-danmaku {
    //  height: calc(100% - 40px) !important;
    //}

    .bilibili-live-player-video-controller {
      bottom: 38px;

      .control-area {
        padding-left: 140px !important;
        padding-right: 40px !important;
      }
    }

    .bilibili-live-player-video-controller .bilibili-live-player-video-controller-container {
      padding: 0 130px 0 80px;
    }

    .bilibili-live-player-video-controller .bilibili-live-player-video-controller-container .bilibili-live-player-video-controller-right {
      margin-right: 22px;
    }

    .live-chat-mode-width-bar {
      position: absolute;
      top: 14px;
      right: 0;
      width: 8px;
      height: calc(100% - 14px);
      z-index: 1;
      cursor: ew-resize;
    }

    .live-chat-mode-height-bar {
      position: absolute;
      top: 0;
      width: calc(100% - 14px);
      height: 9px;
      z-index: 1;
      cursor: ns-resize;
    }

    .live-chat-mode-move-bar {
      display: block;
      position: absolute;
      top: -1px;
      right: -1px;
      width: 14px;
      height: 14px;
      border-radius: 0 4px 0 6px;
      font-size: 14px;
      color: transparent;
      z-index: 2;
      cursor: move;
    }

    .chat-history-panel:hover .live-chat-mode-width-bar,
    .chat-history-panel:hover .live-chat-mode-height-bar,
    .chat-history-panel:hover .live-chat-mode-move-bar {
      background-color: var(--bilibili-blue);
      user-select: none;
    }

    #aside-area-vm {
      pointer-events: none !important;
      z-index: 1200 !important;

      #pay-note-panel-vm {
        .pay-note-panel {
          background-color: transparent !important;
        }
      }
    }

    #aside-area-vm > * {
      pointer-events: initial;
    }

    .chat-history-panel:hover {
      .live-chat-mode-width-bar::after {
        content: '';
        display: block;
        width: 1px;
        height: 14px;
        background-color: #a8dbf0;
        position: absolute;
        left: 2px;
        top: calc(50% - 7.5px);
        transform: translate(-50%);
        box-shadow: 2px 0px 0px #a8dbf0, 4px 0px 0px #a8dbf0;
      }

      .live-chat-mode-height-bar::after {
        content: '';
        display: block;
        width: 14px;
        height: 1px;
        background-color: #a8dbf0;
        position: absolute;
        top: 2px;
        left: calc(50% - 7.5px);
        transform: translate(-50%);
        box-shadow: 0px 2px 0px #a8dbf0, 0px 4px 0px #a8dbf0;
      }
    }

    #bilibiliHelper2HandleButtonWrapper {
      opacity: 0.2;
      transition: opacity .3s;

      &:hover {
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .hide-aside-area:hover {
      #live-player {
        video {
          height: calc(100% - 30px) !important;
        }
      }

      #chat-control-panel-vm {
        bottom: 36px !important;
        margin: 0;
      }

      .web-player-controller-wrap {
        bottom: 24px !important;
      }

      .chat-input-ctnr {
        left: 35px !important;
        right: 0 !important;
        bottom: 0 !important;
      }
    }

    [class^="_mute-play-tip-container_"] {
      bottom: 70px !important;
    }
  }
`,v=d.createGlobalStyle`
  body.player-full-win.hide-aside-area .chat-history-panel {
    visibility: hidden;

    .danmaku-content {
      transition: none;
    }
  }
`,g=u.default.get("bilibili-helper-live-chat-mode")||{};class y extends c.default.Component{constructor(e){super(e),this.initDraggableBar=()=>{const e=this,t=document.querySelector(".app-content");let i=document.querySelector("#live-player video");const o=document.querySelector(".chat-history-panel");if(!t||!i||!o)return;const n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div");n.setAttribute("class","live-chat-mode-height-bar"),r.setAttribute("class","live-chat-mode-width-bar"),a.setAttribute("class","live-chat-mode-move-bar"),(0,l.isObject)(g[this.roomId])?(e.originWidth=g[this.roomId].width,e.originHeight=g[this.roomId].height,e.originOffectLeft=g[this.roomId].offsetLeft,e.originOffectBottom=g[this.roomId].offsetBottom):g[e.roomId]||(g[this.roomId]={}),r.addEventListener("mousedown",(function(t){t.stopPropagation(),0!==t.button&&1!==t.buttons||(i=document.querySelector("#live-player video"),e.widthMouseDown=!0,e.originWidth=o.clientWidth,e.originX=t.clientX)})),n.addEventListener("mousedown",(function(t){t.stopPropagation(),0!==t.button&&1!==t.buttons||(i=document.querySelector("#live-player video"),e.heightMouseDown=!0,e.originHeight=o.clientHeight,e.originY=t.clientY)})),a.addEventListener("mousedown",(function(t){t.stopPropagation(),0!==t.button&&1!==t.buttons||(i=document.querySelector("#live-player video"),e.moveMouseDown=!0,e.originOffectLeft=o.offsetLeft,e.originOffectBottom=i.offsetHeight-o.offsetTop-o.offsetHeight,e.originX=t.clientX,e.originY=t.clientY)})),t.addEventListener("mousemove",(0,l.throttle)((function(t){if(e.state.on||e.state.defaultOpen)if(e.widthMouseDown){const n=e.originX-t.clientX,r=e.originWidth-n;r>25&&r<i.clientWidth&&r<i.offsetWidth&&(o.style.width=r+"px")}else if(e.heightMouseDown){const n=e.originY-t.clientY,r=e.originHeight+n;r>25&&r<i.clientHeight&&r<i.offsetHeight&&(o.style.height=r+"px")}else if(e.moveMouseDown){const i=e.originX-t.clientX,n=e.originY-t.clientY;let r=e.originOffectLeft-i,a=e.originOffectBottom+n;r<0&&(r=0),a<48&&(a=48),o.style.left=r+"px",o.style.bottom=a+"px"}}),25),!0),t.addEventListener("mouseup",(function(){(e.widthMouseDown||e.heightMouseDown||e.moveMouseDown)&&(e.state.on||e.state.defaultOpen)&&(g[e.roomId]||(g[e.roomId]={}),g[e.roomId].width=e.originWidth=o.clientWidth,g[e.roomId].height=e.originHeight=o.clientHeight,g[e.roomId].offsetLeft=e.originOffectLeft=o.offsetLeft,g[e.roomId].offsetBottom=e.originOffectBottom=i.offsetHeight-o.offsetTop-o.offsetHeight,u.default.set("bilibili-helper-live-chat-mode",g),e.widthMouseDown=!1,e.heightMouseDown=!1,e.moveMouseDown=!1)}),!0),o.appendChild(r),o.appendChild(n),o.appendChild(a)},this.addListener=()=>{this.bodyDOM||(this.bodyDOM=document.querySelector("body")),new MutationObserver(()=>{this.dealWith()}).observe(this.bodyDOM,{attributes:!0,attributeFilter:["class"],attributeOldValue:!0})},this.dealWith=()=>{const e=document.querySelector(".chat-history-panel"),t=this.bodyDOM.classList,{on:i,currentState:o}=this.state;i&&t.contains("player-full-win")&&1!==o?t.contains("hide-aside-area")?this.setState({currentState:1},()=>{e&&(this.originWidth?e.style.width=this.originWidth+"px":e.style.width="30%"),e&&this.originHeight&&(e.style.height=this.originHeight+"px"),e&&this.originOffectLeft&&(e.style.left=this.originOffectLeft+"px"),e&&this.originOffectBottom&&(e.style.bottom=this.originOffectBottom+40+"px")}):document.querySelector(".aside-area-toggle-btn button").click():i&&t.contains("fullscreen-fix")?this.setState({currentState:0},()=>{e.style.width="",e.style.height=""}):this.setState({currentState:0},()=>{e&&(e.style.width="",e.style.height="")})},this.handleOnClick=()=>{const e=!this.state.on;this.setState({on:e},()=>{const t=u.default.get("bilibili-helper-live-chat-mode")||{};this.dealWith(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"live_page",action:"click_chat_mode",label:e}),t[this.roomId]?(t[this.roomId].on=e,t[this.roomId].showChatArea=!0):t[this.roomId]={on:!0,showChatArea:!0},u.default.set("bilibili-helper-live-chat-mode",t)})},this.handleOnClickChatAreaStateBtn=()=>{const e=!this.state.showChatArea;this.setState({showChatArea:e},()=>{const t=u.default.get("bilibili-helper-live-chat-mode")||{};t[this.roomId]?t[this.roomId].showChatArea=e:t[this.roomId]={on:!0,showChatArea:e},u.default.set("bilibili-helper-live-chat-mode",t)})},this.handleOnClick2Login=()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:chrome.runtime.getURL("/html/config.html#/")})},this.roomId=location.pathname.substr(1),"boolean"===typeof g[this.roomId]?(this.state={on:!!g[this.roomId],showChatArea:!0,currentState:0,hasLogin:!1,defaultOpen:!1},g[this.roomId]={on:!0,showChatArea:!0},u.default.set("bilibili-helper-live-chat-mode",g)):this.state={on:!!g[this.roomId]&&!!g[this.roomId].on,showChatArea:!g[this.roomId]||!!g[this.roomId].showChatArea,currentState:0,hasLogin:!1,defaultOpen:!1},this.addListener(),this.widthMouseDown=!1,this.heightMouseDown=!1,this.moveMouseDown=!1,this.originOffectLeft=0,this.originOffectBottom=0,this.originX=0,this.originY=0,this.originWidth=0,this.originHeight=0}componentDidMount(){this.bodyDOM=document.querySelector("body"),chrome.runtime.sendMessage({target:"liveChatMode",event:"getSetting"},e=>{this.setState({defaultOpen:e.defaultOpen}),g[this.roomId]||this.setState({on:e.defaultOpen})});const e=setInterval(()=>{const t=document.querySelector(".app-content"),i=document.querySelector("#live-player video"),o=document.querySelector(".chat-history-panel");t&&i&&o&&(clearInterval(e),this.initDraggableBar())},1e3);chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},e=>{this.setState({hasLogin:e.hasLogin})})}render(){const{on:e,showChatArea:t,currentState:i,hasLogin:o}=this.state;return o?c.default.createElement(c.default.Fragment,null,e&&c.default.createElement(f,{className:"on"},c.default.createElement("span",{onClick:this.handleOnClick},(0,p.__)("liveChatMode_buttonOFF")),0!==i&&c.default.createElement("span",{className:"chat-area-btn",onClick:this.handleOnClickChatAreaStateBtn},t?(0,p.__)("liveChatMode_hideChatArea"):(0,p.__)("liveChatMode_showChatArea"),t?null:c.default.createElement(v,null))),!e&&c.default.createElement(f,{onClick:this.handleOnClick},(0,p.__)("liveChatMode_buttonON")),0!==i&&e&&c.default.createElement(b,null)):c.default.createElement(f,{onClick:this.handleOnClick2Login},"\u767b\u5f55\u52a9\u624b\u5f00\u542f\u7248\u804a\u6a21\u5f0f")}}t.LiveChatMode=y},22208:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.LiveChatMode=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"liveChatMode",{settings:{on:!0,defaultOpen:!1}}),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}}t.LiveChatMode=r},83506:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LiveEmoji=void 0;const s=i(53507),l=r(i(57689)),c=r(i(635)),d=i(29010),u=i(555),p=a(i(56058)),h=p.default.get("bilibili-helper-2-live-emoji-commonly-used")||[],m=c.default.span`
  position: absolute;
  left: 90px;
  top: -33px;

  .icon-button {
    cursor: pointer;
    color: var(--Ga3);
  }

  body:not(.hide-aside-area) &.emoji-wrapper {
    border-radius: 4px;

    .icon-button {
      color: var(--Ga3);
      text-shadow: 0.5px 0px, 0px 0.5px;
    }
  }

  body.player-full-win.hide-aside-area &.emoji-wrapper {
    top: 0px;
    left: -34px;
    background-color: rgba(0, 0, 0, 0.8);
    width: fit-content;
    padding: 4.5px;
    pointer-events: auto;

    .icon-button {
      color: #c8c8c8;
      cursor: pointer;
    }
  }

  body.fullscreen-fix &.emoji-wrapper {
    top: 0px;
    left: -36px;
    width: fit-content;
    padding: 0;
    pointer-events: auto;

    .icon-button {
      cursor: pointer;
      background-color: rgba(255, 255, 255, .4);
      color: #fff;
      text-shadow: white 0px 0px 0.3px;
      padding: 5.5px;
      border-radius: 3px;
      vertical-align: baseline;
    }
  }
`,f=c.default.div`
  position: absolute;
  bottom: 32px;
  left: -218px;
  text-align: center;

  padding: 12px;
  width: 420px;
  max-height: 300px;
  font-size: 12px;
  box-sizing: border-box;
  border: 1px solid rgb(0 0 0 / 20%);
  border-radius: 8px;
  color: #383838;

  opacity: 0.6;
  transform: translateY(0) scale(0);
  transition: opacity 0.3s, transform 0.3s, z-index .2s 0s;
  transform-origin: 200px bottom;

  background-color: rgb(255 255 255 / 60%);
  backdrop-filter: blur(10px);

  overflow: auto;
  z-index: 1000;

  body.player-full-win:not(.hide-aside-area) & {
    transform-origin: 400px bottom;
    left: -384px;
  }

  body.player-full-win.hide-aside-area & {
    transform-origin: 0px bottom;
    left: -40px;
    bottom: 36px;
  }

  body.fullscreen-fix.hide-aside-area & {
    transform-origin: 10px bottom;
    left: -8px;
    bottom: 36px;
  }

  &.show {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .emoji-list, .commonly-used-list {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-auto-rows: 22px;
    grid-row-gap: 6px;
  }

  .emoji-list {
    max-height: 202px;
    overflow: auto;
  }

  .commonly-used-list {
    margin: 10px 0 0;
    padding: 10px 0 0;
    border-top: 1px dashed rgb(0 0 0 / 22%);
  }

  @media (prefers-color-scheme: dark) {
    border-color: rgb(0 0 0 / 40%);
    background-color: rgb(0 0 0 / 80%);
    color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 6px 12px 0 var(--dark-1);

    .commonly-used-list {
      border-top: 1px dashed rgb(255 255 255 / 15%);
    }
  }
  @media screen and (max-width: 1100px) {
    body.player-full-win.hide-aside-area & {
      left: 3px;
    }
  }
`,b=c.default.span`
  position: relative;
  display: block;
  align-self: center;
  height: 22px;
  //line-height: 22px;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    background-color: #f1f1f1;
  }

  .text-emoji-content {
    line-height: 18px;
    white-space: nowrap;

    :hover {
      opacity: .8;
    }

    :active {
      opacity: .5;
    }

    &.hide {
      visibility: hidden;
    }

    &.position-adjust {
      text-indent: -6px;
    }
  }

  .state {
    position: absolute;
    left: 0;
    right: 0;
    height: 22px;
    line-height: 18px;
  }

  @media (prefers-color-scheme: dark) {
    :hover {
      background-color: #333;
    }
  }
`,v=({inFullscreen:e=!1,text:t,onClick:i})=>{const[o,n]=(0,l.useState)(null),r=(0,l.useCallback)(()=>{i instanceof Function&&i(t);const o=e?document.querySelector(".web-player-inject-wrap"):document.body;(0,u.copy2Clipboard)(t,o).then(i=>{n(i);const o=e?".fullscreen-danmaku input.chat-input":"textarea.chat-input",r=document.querySelector(o),a=new Event("input",{bubbles:!0,cancelable:!0,composed:!0});r.value=r.value+t,r.dispatchEvent(a),null===r||void 0===r||r.focus(),setTimeout(()=>{n(null)},600)})},[t]);return l.default.createElement(b,{onClick:r},l.default.createElement("span",{className:["text-emoji-content",null===o?null:"hide"].join(" ")},t),l.default.createElement("span",{className:"state"},null===o?null:o?"\u5df2\u590d\u5236":"\u590d\u5236\u5931\u8d25"))};let g;const y=c.createGlobalStyle`
  /*
   * 还不错的脚本，由于位置和emoji图标重合，故做一下适配
   * https://greasyfork.org/zh-CN/scripts/387120-bilibili%E7%9B%B4%E6%92%AD%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%AE%E8%82%A4%E8%83%8C%E6%99%AF
   */
  body:not(.player-full-win), body.player-full-win:not(.hide-aside-area) {
    #skin-setting-icon {
      margin-left: 30px;
    }
  }

  .fullscreen-danmaku {
    overflow: visible !important;
    line-height: initial;
  }
`,w=c.createGlobalStyle`
  #aside-area-vm {
    z-index: 13;
  }
`,k=({inFullscreen:e=!1})=>{const[t,i]=(0,l.useState)(!1),[o,n]=(0,l.useState)(h),r=(0,l.useRef)(null),a=(0,l.useRef)(null),c=(0,l.useCallback)(()=>{t||(i(!0),setTimeout(()=>{var e;null===(e=a.current)||void 0===e||e.classList.add("a-scale-in-ease","v-enter-to"),setTimeout(()=>{var e;null===(e=a.current)||void 0===e||e.classList.remove("a-scale-in-ease","v-enter-to")},500)}))},[t]),u=(0,l.useCallback)((e=!1)=>{t&&(g=setTimeout(()=>{var e;i(!1),null===(e=a.current)||void 0===e||e.classList.add("a-scale-out","v-leave-to"),setTimeout(()=>{var e;null===(e=a.current)||void 0===e||e.classList.remove("a-scale-out","v-leave-to")},500)},e?300:0))},[t]),b=(0,l.useCallback)(()=>{clearTimeout(g),t||c()},[t]),k=(0,l.useCallback)(()=>{clearTimeout(g),t?u():b()},[t]),x=(0,l.useCallback)(e=>{if(o instanceof Array&&!o.includes(e)){o.unshift(e);const t=Array.from(new Set(o)).slice(0,8);n(t),p.default.set("bilibili-helper-2-live-emoji-commonly-used",t)}},[o]);return(0,l.useEffect)(()=>{const e=e=>{r.current&&!r.current.contains(e.target)&&t&&u()};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[t]),l.default.createElement(m,{className:"emoji-wrapper live-skin-coloration-area",ref:e=>r.current=e},l.default.createElement(y,null),t?l.default.createElement(w,null):null,l.default.createElement(s.Icon,{className:"icon-button live-skin-main-text",icon:"cat",size:23,onClick:k}),l.default.createElement(f,{ref:e=>a.current=e,className:["emoji-popup",t?"show":null].join(" ")},l.default.createElement("div",{className:"emoji-list"},d.TEXT_EMOJI.map((t,i)=>l.default.createElement(v,{inFullscreen:e,key:i,text:t,onClick:x}))),o&&o.length>0?l.default.createElement("div",{className:"commonly-used-list"},o.map((t,i)=>l.default.createElement(v,{inFullscreen:e,key:i,text:t}))):null))};t.LiveEmoji=k},52454:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(83506),r=o(i(57689)),a=o(i(97326)),s=i(555);(0,s.inLiveRoom)()&&(()=>{chrome.runtime.sendMessage({target:"liveEmoji",event:"getSetting"},e=>{e.on&&((0,s.interval)(".chat-input-ctnr",2e3).then(t=>{if(t){const i=document.createElement("span");i.setAttribute("class","icon-item icon-font"),i.setAttribute("id","bilibili-helper-live-emoji"),t.prepend(i),a.default.render(r.default.createElement(n.LiveEmoji,{settings:e}),i)}}),(0,s.interval)(".fullscreen-danmaku",2e3).then(t=>{if(t){const i=document.createElement("span");i.setAttribute("class","icon-item icon-font"),i.setAttribute("id","bilibili-helper-live-fullscreen-emoji"),t.appendChild(i),a.default.render(r.default.createElement(n.LiveEmoji,{settings:e,inFullscreen:!0}),i)}}))})})()},51449:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LiveEmoji=void 0;const o=i(12404);class n extends o.Feature{constructor(e){super(e,"liveEmoji",{settings:{on:!0}})}}t.LiveEmoji=n},32281:function(e,t,i){var o,n,r=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&r(t,e,i);return a(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Incognito=void 0;const c=s(i(57689)),d=i(10243),u=l(i(635)),p=i(51920),h=i(13904),m=i(96582),f=i(58188);let b;(0,m.inLiveRoom)(location.pathname)&&(b=(0,d.getLiveRoomId)(null===(n=null===(o=null===parent||void 0===parent?void 0:parent.window)||void 0===o?void 0:o.location)||void 0===n?void 0:n.href));const v=e=>new Promise(t=>{chrome.runtime.sendMessage({target:"incognito",event:e,roomId:b},e=>{t(e)})}),g=(0,u.default)(p.Button)`
  width: max-content;
  height: 22px;
  line-height: 22px;
  border-radius: 4px;
  border: 1px solid ${(0,h.color)("bilibili-blue")};
  box-sizing: border-box;
  background-color: white;
  color: ${(0,h.color)("bilibili-blue")};

  button {
    display: inline-block;
    padding: 0 5px;
    font-weight: normal;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  &.on, &:hover {
    background-color: ${(0,h.color)("bilibili-blue")};
    color: white;
  }
`,y=()=>{const[e,t]=(0,c.useState)(!1),[i,o]=(0,c.useState)(!1),[n,r]=(0,c.useState)(!1),[a,s]=(0,c.useState)(!1),[l,d]=(0,c.useState)(!1),u=(0,c.useCallback)(()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"liveIncognito",action:"clickTurnButton",label:"turn "+(n?"off":"on")}),v(n?"removeLive":"addLive").then(e=>{if(e)return r(!n),i?void 0:location.reload();p.Message.info("\u5207\u6362\u9690\u8eab\u72b6\u6001\u5931\u8d25\uff0c\u8bf7\u54a8\u8be2b\u7ad9\u300c\u52a9\u624b\u732b\u300d")})},[n,i]),h=(0,c.useCallback)(()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:chrome.runtime.getURL("/html/config.html?showPaymentModal=1")})},[]);(0,c.useEffect)(()=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},e=>{e&&e.hasLogin&&e.bhAccount&&(s(e.hasLogin),d((0,f.isVIP)(e.bhAccount)))}),v("getSetting").then(e=>{(null===e||void 0===e?void 0:e.on)&&(o(e.defaultIncognito),t(null===e||void 0===e?void 0:e.on),v("getList").then((e=[])=>{const t=e.includes(b);r(t),t&&p.Message.info("\u52a9\u624b\u4e3a\u60a8\u5f00\u542f\u9690\u8eab\u54af~")}))})},[]);const m=n?"on":"off";return a&&l?i?e?c.default.createElement(c.default.Fragment,null,c.default.createElement(g,null,"\u5df2\u5f00\u542f\u9ed8\u8ba4\u9690\u8eab"),c.default.createElement(g,{className:m,onClick:u},n?"\u53d6\u6d88\u5728\u8be5\u76f4\u64ad\u95f4\u9690\u8eab":"\u8bbe\u7f6e\u5728\u8be5\u76f4\u64ad\u95f4\u9690\u8eab")):null:e?c.default.createElement(g,{className:m,onClick:u},n?"\u5173\u95ed\u9690\u8eab":"\u5f00\u542f\u9690\u8eab"):null:c.default.createElement(g,{onClick:h},"\u52a9\u624b\u4f1a\u5458\u4e13\u4eab\u9690\u8eab\u529f\u80fd")};t.Incognito=y},68499:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Incognito=void 0;const r=i(12404),a=n(i(52296)),s=i(555);class l extends r.Feature{constructor(e){super(e,"incognito",{settings:{on:!1,defaultIncognito:!0}}),this.tabIdForRoomIdMap=new Map,this.onBeforeLaunch=()=>o(this,void 0,void 0,(function*(){this.addListener("getList",(e,t,i)=>{const o=Array.from(this.launchList);this.tabIdForRoomIdMap.set(t.tab.id,e.roomId),i(o)}),this.addListener("addLive",(e,t,i)=>{isNaN(e.roomId)&&i(!1),this.launchList.add(e.roomId),this.setStore("launchList",Array.from(this.launchList)),i(!0)}),this.addListener("removeLive",(e,t,i)=>{isNaN(e.roomId)&&i(!1),this.launchList.has(e.roomId)&&(this.launchList.delete(e.roomId),this.setStore("launchList",Array.from(this.launchList)),i(!0)),i(!1)}),this.addListener("clearAll",(e,t,i)=>{this.launchList=new Set,this.setStore("launchList",Array.from(this.launchList)),i(!0)}),chrome.tabs.onUpdated.addListener(this.onUpdatedCallback),chrome.tabs.onRemoved.addListener(this.onRemovedCallback)})),this.onLaunch=()=>o(this,void 0,void 0,(function*(){this.settings.on&&this.isVIP&&(yield this.emit("webRequestController","clear",{name:"liveIncognitoOnBeforeRequest"}),yield this.emit("webRequestController","clear",{name:"liveIncognitoOnBeforeSendHeaders"}),yield this.emit("webRequestController","create",{name:"liveIncognitoOnBeforeRequest",eventName:"onBeforeRequest",filter:{urls:["*://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByUser?*"]},options:["blocking","extraHeaders"],callback:this.redirect}),yield this.emit("webRequestController","create",{name:"liveIncognitoOnBeforeSendHeaders",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo?*","*://live-trace.bilibili.com/xlive/rdata-interface/v1/heartbeat/webHeartBeat?*","*://live-trace.bilibili.com/xlive/data-interface/v1/x25Kn/X"]},options:["blocking","requestHeaders","extraHeaders"],callback:this.modifyHeader}))})),this.redirect=(0,s.webRequestCallbackWrapper)(e=>{const{initiator:t,url:i,tabId:o}=e;if(!this.settings.on)return;if(/^chrome-extension:\/\//.test(t))return;let n;this.tabIdForRoomIdMap.has(o)&&(n=this.tabIdForRoomIdMap.get(o)),n||(n=this.getRoomIdByDetails(e));const r=(0,a.default)(i),{query:s}=r;return s&&(null===s||void 0===s?void 0:s.requestFrom)?void 0:this.settings.defaultIncognito||this.launchList.has(n)?{redirectUrl:"https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByUser?room_id=0&requestFrom=BILIBILI_HELPER_2.6.14"}:void 0}),this.modifyHeader=(0,s.webRequestCallbackWrapper)(e=>{const{requestHeaders:t,initiator:i,tabId:o}=e;if(!this.settings.on)return{requestHeaders:t};if(/^chrome-extension:\/\//.test(i))return{requestHeaders:t};let n;if(this.tabIdForRoomIdMap.has(o)&&(n=this.tabIdForRoomIdMap.get(o)),n||(n=this.getRoomIdByDetails(e)),this.settings.defaultIncognito||this.launchList.has(n)){const e=t.findIndex(e=>"cookie"===e.name.toLowerCase());return e&&t.splice(e,1),{requestHeaders:t}}return{requestHeaders:t}}),this.onUpdatedCallback=(e,t,i)=>{if(null===i||void 0===i?void 0:i.url){const t=new URL(i.url);if(!(0,s.inLiveRoom)(t.pathname))return;const o=(0,s.getLiveRoomId)(i.url);o&&this.tabIdForRoomIdMap.set(e,o)}},this.onRemovedCallback=e=>{this.tabIdForRoomIdMap.has(e)&&this.tabIdForRoomIdMap.delete(e)},this.getRoomIdByDetails=e=>{const{requestHeaders:t,url:i}=e;let o;if(t){const e=(0,a.default)(i,"",!0),{query:n}=e;if(n&&n.requestFrom)return{requestHeaders:t};const r=t.find(({name:e})=>"referer"===e.toLowerCase());if(o=(0,s.getLiveRoomId)(r.value),!o){const e=(0,a.default)(i,!0);o=e.query.id}}return o||null},this.onAfterSetSettingsFromCloud=()=>o(this,void 0,void 0,(function*(){const e=this.getStore("launchList");e&&(this.launchList=new Set(e)),this.isVIP&&this.settings.on?this.__launched||(yield this.launch()):this.__launched&&(yield this.pause())})),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings),stores:{launchList:this.getStore("launchList")}})}))}onBHAccountChange(e){return o(this,void 0,void 0,(function*(){this.isVIP?this.__firstLaunched&&!this.__launched&&this.settings.on&&(yield this.launch()):(this.settings.on=!1,yield this.setSetting(this.settings),yield this.pause())}))}onInitStore(){return o(this,void 0,void 0,(function*(){const e=this.getStore("launchList");void 0===e?(this.launchList=new Set,this.setStore("launchList",this.filterMap)):this.launchList=new Set(e)}))}onPause(){return o(this,void 0,void 0,(function*(){yield this.emit("webRequestController","clear",{name:"liveIncognitoOnBeforeRequest"}),yield this.emit("webRequestController","clear",{name:"liveIncognitoOnBeforeSendHeaders"})}))}}t.Incognito=l},81779:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(95075),t),n(i(71938),t),n(i(50494),t),n(i(22208),t),n(i(1018),t),n(i(61167),t),n(i(68499),t),n(i(51449),t),n(i(26931),t),n(i(63332),t),n(i(95601),t),n(i(72248),t),n(i(12411),t),n(i(7551),t)},30057:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const n=i(555),r=i(29010),a=i(10243),s=(new Event("click",{bubbles:!0,cancelable:!1}),()=>new Promise(e=>(0,a.setLivePlayerControllerVisible)(!0).then(()=>{const t=document.querySelector(".control-area .right-area .quality-wrap");if(t){const e=new Event("mouseenter",{bubbles:!0,cancelable:!1});t.dispatchEvent(e)}else setTimeout(()=>{(0,a.setLivePlayerControllerVisible)(!1)},1e3);setTimeout(()=>{e(!!t)},700)}))),l=(e,t,i)=>{const o=r.QUALITY_NAME_LIST.findIndex(t=>t===e);if(-1===o)return null;let n=i.find(e=>e.textContent===r.QUALITY_NAME_LIST[o]);if(!n){if(e=r.QUALITY_NAME_LIST[o+1],null===e)return null;n=i.find(t=>t.textContent.trim()===e)}return t&&(null===n||void 0===n?void 0:n.textContent.toLowerCase().match("pro"))&&(n=null),n||l(e,t,i)},c=(e,t,i)=>o(void 0,void 0,void 0,(function*(){return s().then(e=>{if(!e)return;const o=Array.from(document.querySelectorAll(".control-area .right-area .quality-wrap .quality-it, .control-area .right-area .quality-wrap .list-it"));let n=o.find(e=>e.textContent.trim()===t);if(n||(n=l(t,i,o)),(null===n||void 0===n?void 0:n.click)&&!(null===n||void 0===n?void 0:n.classList.contains("selected"))){n.click();const e=new Event("mouseout",{bubbles:!0,cancelable:!1});n.dispatchEvent(e)}(0,a.setLivePlayerControllerVisible)(!1)})}));chrome.runtime.sendMessage({target:"liveAutoQuality",event:"getSetting"},e=>{e.on&&(0,a.checkLivePlayerInitialized)().then(t=>{t&&(0,n.interval)("#live-player-ctnr .web-player-controller-wrap",1500).then(t=>{t&&c(t,e.quality,e.skipHVC)})})})},61167:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.LiveAutoQuality=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"liveAutoQuality",{settings:{on:!1,quality:"\u84dd\u5149",skipHVC:!1}}),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}}t.LiveAutoQuality=r},72248:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.LiveAutoRewrite=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"liveAutoRewrite",{settings:{on:!1}}),this.WEB_REQUEST_KEY="liveAutoRewriteOnBeforeRequest",this.onLaunch=()=>o(this,void 0,void 0,(function*(){this.addListener("onTabCreated",e=>{this.settings.on&&this.redirect(e.id,e.pendingUrl)}),this.addListener("onTabUpdated",({tabId:e,tab:t,changeInfo:i})=>{this.settings.on&&"loading"===i.status&&this.redirect(e,t.url)})})),this.redirect=(e,t)=>{var i;const o=null===(i=null===t||void 0===t?void 0:t.match(/^https?:\/\/live\.bilibili\.com\/(\d+)?/))||void 0===i?void 0:i[1];o&&chrome.tabs.update(e,{url:"https://live.bilibili.com/blanc/"+o})},this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i&&i({settings:this.simplifyConfig(this.settings)})}))}onPause(){return o(this,void 0,void 0,(function*(){}))}}t.LiveAutoRewrite=r},32962:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const n=i(555),r=(new Event("mousemove",{bubbles:!0,cancelable:!1}),new Event("click",{bubbles:!0,cancelable:!1})),a=(e,t)=>o(void 0,void 0,void 0,(function*(){let e=null;switch(t){case"web":yield(0,n.setLivePlayerControllerVisible)(!0),setTimeout(()=>{e=document.querySelector(".control-area .right-area .tip-wrap:nth-child(2) .icon"),e&&e.dispatchEvent(r)});break;case"full":yield(0,n.setLivePlayerControllerVisible)(!0),setTimeout(()=>{e=Array.from(document.querySelectorAll(".control-area .right-area .tip-wrap svg")).find(e=>{if(e.querySelector("#icon_\u5168\u5c4f"))return!0}),e&&e.dispatchEvent(r)})}e&&e.click&&e.click()}));chrome.runtime.sendMessage({target:"liveAutoWiden",event:"getSetting"},e=>{e.on&&(0,n.interval)("#live-player-ctnr .web-player-controller-wrap").then(t=>{t&&setTimeout(()=>{a(t,e.widenType)},1e3)})})},1018:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.LiveAutoWiden=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"liveAutoWiden",{settings:{on:!1,widenType:"default"}}),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}}t.LiveAutoWiden=r},69570:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.LiveDanmukuController=void 0;const n=i(51057);var r;(function(e){e[e["WS_OP_HEARTBEAT"]=2]="WS_OP_HEARTBEAT",e[e["WS_OP_HEARTBEAT_REPLY"]=3]="WS_OP_HEARTBEAT_REPLY",e[e["WS_OP_MESSAGE"]=5]="WS_OP_MESSAGE",e[e["WS_OP_USER_AUTHENTICATION"]=7]="WS_OP_USER_AUTHENTICATION",e[e["WS_OP_CONNECT_SUCCESS"]=8]="WS_OP_CONNECT_SUCCESS",e[e["WS_PACKAGE_HEADER_TOTAL_LENGTH"]=16]="WS_PACKAGE_HEADER_TOTAL_LENGTH",e[e["WS_PACKAGE_OFFSET"]=0]="WS_PACKAGE_OFFSET",e[e["WS_HEADER_OFFSET"]=4]="WS_HEADER_OFFSET",e[e["WS_VERSION_OFFSET"]=6]="WS_VERSION_OFFSET",e[e["WS_OPERATION_OFFSET"]=8]="WS_OPERATION_OFFSET",e[e["WS_SEQUENCE_OFFSET"]=12]="WS_SEQUENCE_OFFSET",e[e["WS_BODY_PROTOCOL_VERSION_NORMAL"]=0]="WS_BODY_PROTOCOL_VERSION_NORMAL",e[e["WS_BODY_PROTOCOL_VERSION_BROTLI"]=3]="WS_BODY_PROTOCOL_VERSION_BROTLI",e[e["WS_HEADER_DEFAULT_VERSION"]=1]="WS_HEADER_DEFAULT_VERSION",e[e["WS_HEADER_DEFAULT_OPERATION"]=1]="WS_HEADER_DEFAULT_OPERATION",e[e["WS_HEADER_DEFAULT_SEQUENCE"]=1]="WS_HEADER_DEFAULT_SEQUENCE",e[e["WS_AUTH_OK"]=0]="WS_AUTH_OK",e[e["WS_AUTH_TOKEN_ERROR"]=-101]="WS_AUTH_TOKEN_ERROR"})(r||(r={}));class a{constructor(e,t,i){this.authInfo={origin:null,encode:""},this.callbackQueueList={onInitializedQueue:[],onOpenQueue:[],onCloseQueue:[],onErrorQueue:[],onReceivedMessageQueue:[],onHeartBeatReplyQueue:[],onRetryFallbackQueue:[],onListConnectErrorQueue:[],onReceiveAuthResQueue:[]},this.dashboardTabIDList=new Set,this.db=null,this.initWS=!1,this.initializedWS=!1,this.ws=null,this.wsBinaryHeaderList=[{name:"Header Length",key:"headerLen",bytes:2,offset:r.WS_HEADER_OFFSET,value:r.WS_PACKAGE_HEADER_TOTAL_LENGTH},{name:"Protocol Version",key:"ver",bytes:2,offset:r.WS_VERSION_OFFSET,value:r.WS_HEADER_DEFAULT_VERSION},{name:"Operation",key:"op",bytes:4,offset:r.WS_OPERATION_OFFSET,value:r.WS_HEADER_DEFAULT_OPERATION},{name:"Sequence Id",key:"seq",bytes:4,offset:r.WS_SEQUENCE_OFFSET,value:r.WS_HEADER_DEFAULT_SEQUENCE}],this.customAuthParam=[],this.queryDashboard=e=>this.dashboardTabIDList.has(e),this.addDashboard=e=>{this.dashboardTabIDList.add(e)},this.removeDashboard=e=>{this.dashboardTabIDList.delete(e)},this.onRemovedCallback=e=>{this.dashboardTabIDList.has(e)&&this.dashboardTabIDList.delete(e)},this.getDB=()=>o(this,void 0,void 0,(function*(){return this.db||(yield this.initIndexedDB()),this.db})),this.initIndexedDB=()=>new Promise(e=>{const t=window.indexedDB.open("liveDanmuku_"+this.roomId,1);t.addEventListener("error",()=>{e(!1)}),t.addEventListener("success",()=>{this.db=t.result,e(this.db)}),t.addEventListener("upgradeneeded",e=>{var t;this.db=null===(t=e.target)||void 0===t?void 0:t.result,this.createTable("danmu",{autoIncrement:!0,indexMap:[{name:"username",param:"username",options:{unique:!1}},{name:"ts",param:"ts",options:{unique:!1}}]})})}),this.createTable=(e,t={})=>{const{keyPath:i,autoIncrement:o,indexMap:n}=t,r={};i&&(r.keyPath=i),o&&(r.autoIncrement=o),(null===n||void 0===n?void 0:n.length)&&n.forEach(({name:t,param:i,options:o})=>{if(!this.db.objectStoreNames.contains(e)){const n=this.db.createObjectStore(e,r);n.createIndex(t,i,o)}})},this.readDanmu=e=>o(this,void 0,void 0,(function*(){return this.getDB().then(t=>new Promise(i=>{const o=t.transaction(["danmu"]).objectStore("danmu").get(e);o.addEventListener("error",()=>{i(!1)}),o.addEventListener("success",()=>{o.result?i(o.result):i(null)})}))})),this.writeDanmu=e=>this.getDB().then(t=>new Promise(i=>{const o=t.transaction(["danmu"],"readwrite").objectStore("danmu").add(e);o.addEventListener("success",()=>i(!0)),o.addEventListener("error",()=>i(!1))})),this.initWs=()=>(this.initWS=!0,Promise.race(this.hostList.map(({host:e},t)=>o(this,void 0,void 0,(function*(){return{index:t,speed:yield this.testWSConnectivity(`wss://${e}/sub`),url:`wss://${e}/sub`}})))).then(e=>{const{url:t}=e;this.ws=new WebSocket(t),this.ws.binaryType="arraybuffer",this.ws.addEventListener("open",this.onOpenWS),this.ws.addEventListener("message",this.onReceiveMessage),this.ws.addEventListener("close",this.onCloseWS),this.ws.addEventListener("error",this.onError)}).catch(e=>!1).finally(()=>{this.initWS=!1})),this.onOpenWS=()=>{this.callFunction(this.callbackQueueList.onOpenQueue),this.initializedWS=!0,this.userAuthentication()},this.onReceiveMessage=e=>{const t=this.convertToObject(e.data);if(t instanceof Array)return t.forEach(e=>{this.onReceiveMessage(e)});t instanceof Object&&(t.op===r.WS_OP_HEARTBEAT_REPLY?this.onHeartBeatReply(t.body):t.op===r.WS_OP_MESSAGE?this.onMessageReply(t.body,t.seq):t.op===r.WS_OP_CONNECT_SUCCESS&&(0!==t.body.length&&t.body[0]?t.body[0].code===r.WS_AUTH_OK?this.heartBeat():t.body[0].code===r.WS_AUTH_TOKEN_ERROR?this.onReceiveAuthRes(t.body):this.onCloseWS():this.heartBeat()))},this.onHeartBeatReply=e=>{this.callFunction(this.callbackQueueList.onHeartBeatReplyQueue,e)},this.onMessageReply=(e,t)=>{e instanceof Array?e.forEach(e=>{this.onMessageReply(e,t)}):this.onReceivedMessage(e,t)},this.onReceiveAuthRes=e=>{},this.onReceivedMessage=(e,t)=>{this.dashboardTabIDList.size&&Array.from(this.dashboardTabIDList).forEach(t=>{chrome.tabs.sendMessage(t,e)})},this.onCloseWS=()=>{this.initializedWS=!1,clearTimeout(this.HEART_BEAT_INTERVAL),chrome.tabs.onRemoved.removeListener(this.onRemovedCallback),this.dashboardTabIDList.size&&Array.from(this.dashboardTabIDList).forEach(e=>{chrome.tabs.sendMessage(e,{cmd:"WS_CLOSE",data:null})})},this.onError=e=>{},this.testWSConnectivity=e=>o(this,void 0,void 0,(function*(){return new Promise(t=>{const i=new WebSocket(e),o=Date.now();i.addEventListener("open",()=>{t(Date.now()-o),i.close(1e3)})})})),this.userAuthentication=()=>{const e={uid:this.uid,roomid:this.roomId,protover:3,aid:0};for(let t=0;t<this.customAuthParam.length;t++){const{type:i="string",key:o,value:n}=this.customAuthParam[t];"string"===i?e[o]=n:"number"===i?e[o]=parseInt(n,10):"boolean"===i&&(e[o]=!!n)}const t=this.convertToArrayBuffer(JSON.stringify(e),r.WS_OP_USER_AUTHENTICATION);this.authInfo.origin=e,this.authInfo.encode=t,this.ws.send(t)},this.HEART_BEAT_INTERVAL=null,this.heartBeat=()=>{const e=this.convertToArrayBuffer({},r.WS_OP_HEARTBEAT);this.ws.send(e),this.HEART_BEAT_INTERVAL=setTimeout(()=>{this.heartBeat()},3e4)},this.callFunction=(e,t)=>{e instanceof Array&&e.length?e.forEach(e=>{this.callFunction(e,t)}):"function"===typeof e&&e(t)},this.getDecoder=()=>window.TextDecoder?new window.TextDecoder:{decode:function(e){return decodeURIComponent(window.escape(String.fromCharCode.apply(String,new Uint8Array(e))))}},this.getEncoder=function(){return window.TextEncoder?new window.TextEncoder:{encode:function(e){for(var t=new ArrayBuffer(e.length),i=new Uint8Array(t),o=0,n=e.length;o<n;o++)i[o]=e.charCodeAt(o);return t}}},this.convertToObject=function(e){const t=new DataView(e),i={body:[],packetLen:0,op:-1,count:0,ver:null,seq:null};if(i.packetLen=t.getInt32(r.WS_PACKAGE_OFFSET),this.wsBinaryHeaderList.forEach((function(e){4===e.bytes?i[e.key]=t.getInt32(e.offset):2===e.bytes&&(i[e.key]=t.getInt16(e.offset))})),i.packetLen<e.byteLength&&this.convertToObject(e.slice(0,i.packetLen)),this.decoder||(this.decoder=this.getDecoder()),!i.op||i.op!==r.WS_OP_MESSAGE&&i.op!==r.WS_OP_CONNECT_SUCCESS)i.op&&r.WS_OP_HEARTBEAT_REPLY===i.op&&(i.body={count:t.getInt32(r.WS_PACKAGE_HEADER_TOTAL_LENGTH)});else{let o,a,s=i.packetLen;for(o=r.WS_PACKAGE_OFFSET;o<e.byteLength;o+=s){s=t.getInt32(o),a=t.getInt16(o+r.WS_HEADER_OFFSET);try{let t;if(i.ver===r.WS_BODY_PROTOCOL_VERSION_NORMAL){const i=this.decoder.decode(e.slice(o+a,o+s));t=0!==i.length?JSON.parse(i):null}else if(i.ver===r.WS_BODY_PROTOCOL_VERSION_BROTLI){const i=e.slice(o+a,o+s),r=(0,n.BrotliDecode)(new Uint8Array(i));t=this.convertToObject(r.buffer).body}t&&i.body.push(t)}catch(t){}}}return i},this.convertToArrayBuffer=function(e,t){this.encoder||(this.encoder=this.getEncoder());const i=new ArrayBuffer(r.WS_PACKAGE_HEADER_TOTAL_LENGTH),o=new DataView(i,r.WS_PACKAGE_OFFSET),n=this.encoder.encode(e);return o.setInt32(r.WS_PACKAGE_OFFSET,r.WS_PACKAGE_HEADER_TOTAL_LENGTH+n.byteLength),this.wsBinaryHeaderList[2].value=t,this.wsBinaryHeaderList.forEach((function(e){4===e.bytes?o.setInt32(e.offset,e.value):2===e.bytes&&o.setInt16(e.offset,e.value)})),this.mergeArrayBuffer(i,n)},this.mergeArrayBuffer=function(e,t){const i=new Uint8Array(e),o=new Uint8Array(t),n=new Uint8Array(i.byteLength+o.byteLength);return n.set(i,0),n.set(o,i.byteLength),n.buffer},this.destroy=()=>{this.onCloseWS(),this.ws&&this.ws.close(1e3)},this.app=e,this.roomId=+t,this.uid=+i.uid,this.token=i.token,this.hostList=i.host_list,this.customAuthParam=[{type:"string",key:"platform",value:"web"},{type:"number",key:"type",value:2},{type:"string",key:"key",value:this.token}],chrome.tabs.onRemoved.addListener(this.onRemovedCallback)}}t.LiveDanmukuController=a},22993:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.danmuParser=t.danmuUserParser=void 0;const i=e=>!(e.length<1)&&{level:e[0]||0,label:e[1]||"--",anchorUsername:e[2]||"--",shortRoomID:e[3]||0,medalColor:e[4]||null,special:e[5]||"",iconId:e[6]||0,medalColorBorder:e[7],medalColorStart:e[8],medalColorEnd:e[9],guardLevel:e[10]||0,isLight:e[11],anchorId:e[12]},o=e=>({username:e[2][1]||"",uid:e[2][0]||0,isAdmin:!!e[2][2],isVip:!!e[2][3],isSvip:!!e[2][4],fansMedal:i(e[3]),title:e[5][1]||"",userLevel:e[4][0]||0,guardLevel:e[7]||0,chatBubbleType:e[0][10],chatBubbleColor:e[0][11],lpl:e[14]||0});t.danmuUserParser=o;const n=e=>{const i=(0,t.danmuUserParser)(e),o=e[9].ts||0;return{ts:o,userInfo:i,content:e[1]||"",validation:{ts:o,ct:e[9].ct||""},rnd:("number"===typeof e[0][5]?e[0][5]:parseInt(e[0][5]))||0,dmType:e[0][12]}};t.danmuParser=n},95601:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.LiveDanmuku=void 0;const n=i(12404),r=i(69570);class a extends n.Feature{constructor(e){super(e,"liveDanmuku",{settings:{on:!0}}),this.currentDanmuku=new Map,this.getDanmuku=(e,t,i)=>o(this,void 0,void 0,(function*(){i(this.currentDanmuku.get(+e.roomId))})),this.getDanmukuList=(e,t,i)=>o(this,void 0,void 0,(function*(){i(Array.from(this.currentDanmuku.values()).map(e=>e.roomId))})),this.createDanmuku=(e,t,i)=>o(this,void 0,void 0,(function*(){const t=+(null===e||void 0===e?void 0:e.roomId);if(!t||this.currentDanmuku.has(t))return i(!1);const o=yield this.getDanmukuConfig(t),n=new r.LiveDanmukuController(this,t,Object.assign(Object.assign({},o),this.bilibiliAccount));yield n.initWs(),this.currentDanmuku.set(t,n),yield this.emit("tabController","create",{url:chrome.runtime.getURL("/html/liveDashBoard.html?roomId="+t)},e=>{n.addDashboard(e.id)}),i(!0)})),this.closeDanmuku=(e,t,i)=>o(this,void 0,void 0,(function*(){const t=+(null===e||void 0===e?void 0:e.roomId);if(t&&this.currentDanmuku.has(t)){const e=this.currentDanmuku.get(t);return e.destroy(),this.currentDanmuku.delete(t),i(!0)}return i(!1)})),this.connectDashboardPage=(e,t,i)=>o(this,void 0,void 0,(function*(){const o=+(null===e||void 0===e?void 0:e.roomId);if(o&&this.currentDanmuku.has(o)){const e=t.tab.id;Array.from(this.currentDanmuku.values()).forEach(t=>{t.removeDashboard(e)});const n=this.currentDanmuku.get(o);n.addDashboard(e),i(!0)}else i(!1)})),this.getDanmukuConfig=e=>o(this,void 0,void 0,(function*(){return this.emit("requestController","create",{url:"https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo?id="+e,options:{contentType:"json"}},({data:e})=>0===e.code&&(null===e||void 0===e?void 0:e.data))})),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("getDanmuku",this.getDanmuku),this.addListener("getDanmukuList",this.getDanmukuList),this.addListener("createDanmuku",this.createDanmuku),this.addListener("closeDanmuku",this.closeDanmuku),this.addListener("connectDashboardPage",this.connectDashboardPage)}))}}t.LiveDanmuku=a},8620:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LiveRecord=void 0;const s=r(i(57689)),l=a(i(635)),c=i(51920),d=i(58188),u=i(74051),p=i(96582),h=l.default.div`
  @font-face {
    font-family: "lato";
    font-weight: 300;
    src: url(${chrome.runtime.getURL("statics/fonts/Lato-Light.ttf")}) format('truetype');
  }

  @font-face {
    font-family: "lato";
    font-weight: 400;
    src: url(${chrome.runtime.getURL("statics/fonts/Lato-Regular.ttf")}) format('truetype');
  }
  margin-bottom: 12px;

  .declaration {
    margin: 8px 0 0;
    line-height: 18px;
    font-weight: 100;
    color: var(--google-grey-700);

    span {
      color: red;
    }
  }
`,m=l.default.h1`
  //display: flex;
  width: 100%;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
`,f=l.default.div`
  position: relative;

  padding: 10px 14px 10px 10px;
  background-color: #fff;
  //background-image: linear-gradient(135deg, hsl(0deg 0% 99%), hsl(0deg 0% 95%));
  box-shadow: 0px 2px 6px rgb(0 0 0 / 16%);
  border-radius: 4px;

  &.error::after {
    content: '直播间解析错误，请联系客服「助手猫」喵';
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgb(229 229 229 / 95%);
    border-radius: 4px;
  }

  &.init::after {
    content: '初始化中，请耐心等待喵';
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgb(229 229 229 / 95%);
    border-radius: 4px;
  }

  .go-2-payment {
    margin-top: -1px;
    margin-left: auto;
    padding: 2px 3px;
    height: 13px;
    line-height: 14px;
    border-radius: 4px;
    font-weight: bold;
    background-color: var(--bilibili-pink);
    color: var(--bilibili-gray);
    transform: scale(0.8);
    cursor: pointer;
  }

  .login-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);

    .button {
      .button-view {
        padding: 0 22px;
      }
    }
  }

  .recorder {
    margin-right: auto;
    font-family: lato;

    @keyframes blink {
      0%, to {
        color: transparent;
      }

      50% {
        color: var(--google-red-500);
      }
    }

    &.playing {
      .recording-sign:not(.pausing) {
        color: var(--google-red-500);

        .bilibili-helper-2-icon-record {
          animation: blink 1s step-end infinite;
        }
      }
    }

    .line-select-wrapper {
      padding: 0 0 4px;
      display: flex;
      align-items: center;
      height: 12px;
      font-size: 12px;
      font-weight: normal;
      color: #999;
      border-bottom: 1px dashed rgb(231 231 231);

      .line-selector {
        flex-grow: 1;
        margin: 0;
        padding: 0;
        outline: 0;
        border: none;
        background: none;
        color: #222;
      }
    }

    .main {
      margin-top: 8px;
      display: flex;
      align-items: center;

      .recorder-left {
        margin-right: auto;
      }
    }

    .recording-sign {
      margin-bottom: 2px;
      font-weight: bold;
      //visibility: hidden;
      color: var(--google-grey-400);

      //&.show {
      //  visibility: visible;
      //}

      &.pausing {
        color: var(--google-yellow-500);
      }

      .bilibili-helper-2-icon-record {
        margin-right: 2px;
        line-height: 10px;
      }

      .pause-sign {
        margin-left: 8px;
        font-weight: bold;
        animation: blink 1s step-end infinite;
      }
    }

    .current, .limit {
      display: flex;
      align-items: center;
    }

    .file-size {

    }

    .current {
      margin-bottom: 8px;

      :last-of-type {
        margin-bottom: 0;
      }

      .timer {
        line-height: 20px;
        font-size: 26px;
      }

      .file-size {
        align-self: flex-end;
        margin-left: 8px;
        line-height: 14px;
        font-size: 14px;
      }
    }

    .limit {
      font-size: 12px;
      color: #999;

      .timer {
      }

      .file-size {
        transform: scale(0.8);
        transform-origin: 0px 10px;
        line-height: 12px;
      }
    }
  }
`,b=l.default.button`
  padding: 0;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 38px;
  background-color: #fff;
  cursor: pointer;
  transform: scale(1);
  transition: transform .3s, box-shadow .3s;

  :active {
    transform: scale(0.9);
  }

  &.stopped {
    color: var(--google-red-500);
    box-shadow: 0px 2px 5px #c48d88;
  }

  &.playing {
    color: rgb(59 59 59);
    box-shadow: rgb(179 178 178) 0px 1px 3px;
  }

  &[disabled] {
    filter: grayscale(1);
    cursor: not-allowed;
  }
`,v=(l.default.div`
`,e=>{const t=new URL(e),i=/^\/(?:blanc\/)?(\d+)/.exec(t.pathname);return!(!i||!i[1])&&+i[1]}),g=v(document.location.href),y=3600,w=60,k=e=>{const t=Math.floor(e/y),i=Math.floor((e-t*y)/w),o=Math.round(e-t*y-i*w);return{hours:t,minutes:i,seconds:o}},x=()=>{const[e,t]=(0,s.useState)(!g),[i,o]=(0,s.useState)(!1),[n,r]=(0,s.useState)({live_time:Date.now()}),[a,l]=(0,s.useState)(!1),[v,y]=(0,s.useState)(!1),[w,x]=(0,s.useState)([]),[S,_]=(0,s.useState)(0),[O,C]=(0,s.useState)(!1),[L,P]=(0,s.useState)(!1),[T,I]=(0,s.useState)({number:0,unit:"Byte"}),[D,M]=(0,s.useState)({hours:0,minutes:0,seconds:0}),[A,E]=(0,s.useState)({hours:0,minutes:0,seconds:0}),[B,j]=(0,s.useState)(!1),[N,R]=(0,s.useState)(!1),[F,V]=(0,s.useState)(!1),q=(0,s.useCallback)(e=>{_(e.target.selectedIndex),I((0,p.parseFileSize)(0)),E(k(0))},[]),U=(0,s.useCallback)(()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:chrome.runtime.getURL("/html/config.html#/")})},[]),H=(0,s.useCallback)(()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:chrome.runtime.getURL("/html/config.html?showPaymentModal=1")})},[]),W=(0,s.useCallback)(()=>{setTimeout(()=>{V(!1)},300)},[]),z=(0,s.useCallback)(()=>{var e;if(V(!0),setTimeout(()=>{V(!1)},3e4),!O)return c.Message.info("\u8bf7\u5148\u767b\u5f55\u52a9\u624b\u8d26\u53f7");if(a)y(!1),chrome.runtime.sendMessage({target:"liveRecord",event:"stopRecord",roomId:g},()=>{V(!1)});else{y(!1);const t=w[S];if(!t)return c.Message.error("\u5df2\u9009\u62e9\u7684\u7ebf\u8def\u65e0\u6548");chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"live_page",action:"live-record"});const{url:i,format:o}=t,r=null===(e=document.querySelector(".room-owner-username"))||void 0===e?void 0:e.textContent,a=new Date,s=a.toLocaleDateString().replace(/[/:]/g,"-"),d=Object.values(k((Date.now()-1e3*n.live_time)/1e3)).map(e=>String(e).padStart(2,"0")).join("-");chrome.runtime.sendMessage({target:"liveRecord",event:"startRecord",roomId:g,filename:`${r}_${s}_${d}`,url:i,format:o,focusNew:!0},e=>{V(!1),W(),e?(I((0,p.parseFileSize)(0)),E(k(0)),l(!0),y(!1)):(l(!1),c.Message.error("\u5f55\u5236\u5931\u8d25/\u53d6\u6d88\u5f55\u5236"))})}},[a,n,w,S,O]),$=(0,s.useCallback)(()=>{if(V(!0),setTimeout(()=>{V(!1)},3e4),!O)return c.Message.info("\u8bf7\u5148\u767b\u5f55\u52a9\u624b\u8d26\u53f7");v?(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"live_page",action:"live-record-restart"}),chrome.runtime.sendMessage({target:"liveRecord",event:"restartRecord",roomId:g},e=>{y(!1),V(!1),e&&c.Message.info("\u5df2\u91cd\u65b0\u5f00\u59cb\u5f55\u5236")})):(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"live_page",action:"live-record-pause"}),chrome.runtime.sendMessage({target:"liveRecord",event:"pauseRecord",roomId:g,focusNew:!1},e=>{y(!0),V(!1),e&&c.Message.info("\u5df2\u7ecf\u6682\u505c\u5f55\u5236")}))},[v,S,O]);return(0,s.useEffect)(()=>{chrome.runtime.onMessage.addListener((e,t,i)=>{if("liveRecordSecondData"===e.command){const{size:t,recordTime:i}=e;I((0,p.parseFileSize)(t)),E(k(i))}else if("stopLiveRecord"===e.command){const{size:t,recordTime:i}=e,o=k(i);I((0,p.parseFileSize)(t)),E(o),!o.hours&&o.minutes<=10?chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"live_page",action:"live-record-time",label:Math.round(o.minutes)}):chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"live_page",action:"live-record-time",label:5*Math.round((60*o.hours+o.minutes)/5)}),l(!1),W(),c.Message.error("\u5f55\u5236\u7ed3\u675f")}return i(!0),!0})},[]),(0,s.useEffect)(()=>{V(!0),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},e=>{e&&e.hasLogin&&e.bhAccount&&(C(e.hasLogin),P((0,d.isVIP)(e.bhAccount)))}),chrome.runtime.sendMessage({target:"liveRecord",event:"getSetting"},({limitSize:e})=>{M(k(600))}),chrome.runtime.sendMessage({target:"liveRecord",event:"getCurrentRecord",roomId:g},e=>{l(e)}),chrome.runtime.sendMessage({target:"liveRecord",event:"getSteamOption",roomId:g},e=>{e&&x(e)}),chrome.runtime.sendMessage({target:"liveRecord",event:"initRecord",roomId:g},e=>{V(!1),e?(o(!0),r(e)):(o(!1),t(!0),c.Message.info("\u76f4\u64ad\u95f4\u5f55\u5236\u53c2\u6570\u521d\u59cb\u5316\u5931\u8d25\uff0c\u8bf7\u8054\u7cfb\u300c\u52a9\u624b\u732b\u300d\u5657"))})},[]),s.default.createElement(h,null,s.default.createElement(m,null,"\u76f4\u64ad\u89c6\u9891\u5f55\u5236"),s.default.createElement(f,{className:[F?null:e?"error":"",i?null:"init"].filter(Boolean).join(" ")},s.default.createElement("div",{className:["recorder",a?"playing":null].filter(Boolean).join(" ")},s.default.createElement("div",{className:"line-select-wrapper"},"\u9009\u62e9",s.default.createElement("select",{className:"line-selector",disabled:a,onChange:q,placeholder:"\u6ca1\u6709\u53ef\u9009\u7ebf\u8def"},w.length>0?w.map(({format:e,codecName:t,rate:i},o)=>s.default.createElement("option",{key:o,value:o},"\u7ebf\u8def",o+1,", ",u.LIVE_FORMAT_NAME_MAP[i],", ",e,", ",t)):s.default.createElement("option",null,"\u6ca1\u6709\u53ef\u9009\u7ebf\u8def"))),s.default.createElement("div",{className:"main"},s.default.createElement("div",{className:"recorder-left"},s.default.createElement("div",{className:["recording-sign",!!a&&"show",!!v&&"pausing"].filter(Boolean).join(" ")},s.default.createElement(c.Icon,{icon:"record",size:12}),"REC",v?s.default.createElement("span",{className:"pause-sign"},"PAUSING"):null),s.default.createElement("div",{className:"current"},s.default.createElement("div",{className:"timer"},L?s.default.createElement("span",null,String(A.hours).padStart(2,"0"),":"):null,s.default.createElement("span",null,String(A.minutes).padStart(2,"0"),":"),s.default.createElement("span",null,String(A.seconds).padStart(2,"0"))),s.default.createElement("div",{className:"file-size"},s.default.createElement("span",{className:"size"},T.number.toFixed(2)),s.default.createElement("span",{className:"unit"},T.unit))),L?null:s.default.createElement("div",{className:"limit"},"Limit:\xa0",s.default.createElement("div",{className:"timer"},L?null:s.default.createElement("span",null,String(D.hours).padStart(2,"0"),":"),s.default.createElement("span",null,String(D.minutes).padStart(2,"0"),":"),s.default.createElement("span",null,String(D.seconds).padStart(2,"0"))),O&&!L?s.default.createElement("span",{className:"go-2-payment",onClick:H},"\u89e3\u9501\u9650\u5236"):null)),a?s.default.createElement(b,{className:v?"play":"pause",disabled:F||!i||0===w.length,onClick:$},s.default.createElement(c.Icon,{className:"record-icon",icon:v?"play":"pause",size:16})):null,s.default.createElement(b,{className:a?"playing":"stopped",disabled:F||!i||0===w.length,onClick:z},s.default.createElement(c.Icon,{className:"record-icon",icon:a?"stop":"record",size:16})))),O?null:s.default.createElement("div",{className:"login-wrapper"},s.default.createElement(c.Button,{className:"primary",onClick:U},"\u70b9\u51fb\u767b\u5f55\u540e\u542f\u7528"))),s.default.createElement("p",{className:"declaration"},"\u203b \u5b9e\u9645\u5f55\u5236\u65f6\u957f\u4e0e\u6587\u4ef6\u5927\u5c0f\u53ef\u80fd\u7565\u6709\u6240\u51fa\u5165",s.default.createElement("br",null),"\u203b \u6682\u505c\u5f55\u5236\u95f4\u9694\u592a\u77ed\u53ef\u80fd\u4ecd\u65e7\u4f1a\u8fde\u7740\u5f55\u5236",s.default.createElement("br",null),"\u203b \u6b63\u5f0f\u7248(v3.0.0)\u540e\u5c06\u4e0d\u518d\u652f\u6301\u540e\u53f0\u5f55\u5236",s.default.createElement("br",null),s.default.createElement("span",null,"\u203b \u5982\u679c\u53d1\u751f\u5361\u6b7b\uff0c\u8bf7\u5148\u5c06\u5f55\u5236\u751f\u6210\u7684wapcrs\u6587\u4ef6",s.default.createElement("br",null),"\u526a\u5207\u81f3\u5176\u4ed6\u76ee\u5f55\uff0c\u518d\u5c06\u8be5\u6587\u4ef6\u6269\u5c55\u540d\u6539\u4e3aflv\u5373\u53ef\u64ad\u653e")))};t.LiveRecord=x},63332:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.LiveRecord=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"liveRecord",{settings:{on:!0,limitSize:314572800}}),this.recordConfigMap=new Map,this.recordingMap=new Map,this.getCurrentRecord=(e,t,i)=>o(this,void 0,void 0,(function*(){var o;e.roomId||i(!1);let n=this.recordingMap.get(e.roomId);n&&!(null===n||void 0===n?void 0:n.stop)&&(null===(o=null===t||void 0===t?void 0:t.tab)||void 0===o?void 0:o.id)?(n.tabId=t.tab.id,i(!0)):i(!1)})),this.initRecord=(e,t,i)=>o(this,void 0,void 0,(function*(){e.roomId||i(!1);const t=yield this.emit("bilibiliLiveController","getLiveRoomData",e);i(t||!1)})),this.parseURLSFromConfig=(e,t="flv")=>o(this,void 0,void 0,(function*(){var t,i;let o;o=this.recordConfigMap.has(e)?this.recordConfigMap.get(e):yield this.emit("bilibiliLiveController","getLiveSteamConfig",{roomId:e});const n=null===(i=null===(t=null===o||void 0===o?void 0:o.playurl_info)||void 0===t?void 0:t.playurl)||void 0===i?void 0:i.stream;let r=[];return n&&n.forEach(e=>{for(const t of null===e||void 0===e?void 0:e.format)null===t||void 0===t||t.codec.forEach(e=>{if(e){const{base_url:i,url_info:o,codec_name:n,current_qn:a}=e;r.push(...null===o||void 0===o?void 0:o.map(({host:e,extra:o})=>{let r="fmp4"===t.format_name?"mp4":t.format_name;return{url:e+i+o,format:r,codecName:n,rate:a}}))}})}),r.sort((e,t)=>e.rate>=t.rate?1:0).sort(e=>"fmp4"===e.type?1:0)})),this.generateFetchStream=(e,t)=>o(this,void 0,void 0,(function*(){return fetch(e,{signal:t.signal}).then(e=>{var t;return null===(t=e.body)||void 0===t?void 0:t.getReader()}).catch(e=>{})})),this.startRecord=(e,t,i)=>o(this,void 0,void 0,(function*(){e.roomId&&e.url&&e.format&&void 0!==e.focusNew||i(!1),"flv"===e.format?this.recordFLV(e,t,i):"mp4"===e.format&&this.recordMP4(e,t,i)})),this.recordMP4=(e,t,i)=>o(this,void 0,void 0,(function*(){const{focusNew:o,url:n,format:r,roomId:a,filename:s=a+"_"+Date.now()}=e;let l=yield this.getMP4Recording(a,o,String(t.tab.id),n,s,r,i);i(!0),yield this.refreshM4SData(l)})),this.recordFLV=(e,t,i)=>o(this,void 0,void 0,(function*(){var o;const{focusNew:n,url:r,format:a,roomId:s,filename:l=s+"_"+Date.now()}=e;let c=yield this.getFLVRecording(s,n,String(t.tab.id),r,l,a,i);i(!0);let d=30,u=1024*d*1024;do{try{if(c){(!this.isVIP&&!this.isSuperVIP&&c.recordTime>=600||c.disconnected&&c.refreshTime>=c.refreshMaxTime)&&(c.stop=!0,clearInterval(c.recordTimer)),c.disconnectTime>=c.disconnectRetryTime&&(c.disconnectTime=0,c.refreshTime+=1,c.steamReader=yield this.generateFetchStream(c.url,c.abortController));const{done:e,value:t}=yield c.steamReader.read();!t||null===t||void 0===t||t.length,e||!t?(c.disconnected=!0,yield new Promise(e=>{setTimeout(()=>{c.disconnectTime+=1,e(!0)},1e3)})):(c.disconnected=!1,c.disconnectTime=0,c.refreshTime=0),t&&(null===t||void 0===t?void 0:t.length)&&(yield c.writableFileHandle.write({type:"write",data:t.buffer,position:c.size}),c.size+=null===t||void 0===t?void 0:t.length,c.tempSize+=null===t||void 0===t?void 0:t.length)}}catch(e){c.stop=!0}finally{c.tempSize>u&&(yield c.writableFileHandle.close(),c.writableFileHandle=yield c.fileHandle.createWritable({keepExistingData:!0}),yield c.writableFileHandle.seek(c.size),c.tempSize=0)}}while(c&&(!c.stop&&!c.pause));if(c.abortController.abort(),clearInterval(c.recordTimer),c.stop){if(c.writableFileHandle)try{yield null===(o=c.writableFileHandle)||void 0===o?void 0:o.close()}catch(e){}chrome.tabs.sendMessage(c.tabId,{command:"stopLiveRecord",size:c.size,recordTime:c.recordTime})}})),this.pauseRecord=(e,t,i)=>{e.roomId||i(!1);const o=this.recordingMap.get(e.roomId);o?(o.pause=!0,o.stop=!1,i(!0)):i(!1)},this.restartRecord=(e,t,i)=>{e.roomId||i(!1);const o=this.recordingMap.get(e.roomId);e.focusNew=!o.pause,e.format=o.format,this.startRecord(e,t,i)},this.stopRecord=(e,t,i)=>o(this,void 0,void 0,(function*(){var t;e.roomId||i(!1);const o=this.recordingMap.get(e.roomId);if(o){if(o.pause){try{yield null===(t=o.writableFileHandle)||void 0===t?void 0:t.close()}catch(e){}chrome.tabs.sendMessage(o.tabId,{command:"stopLiveRecord",size:o.size,recordTime:o.recordTime})}o.stop=!0,o.pause=!1,i(!0)}else i(!1)})),this.getMP4Recording=(e,t=!0,i,n,r,a,s)=>o(this,void 0,void 0,(function*(){var o,l;let c=this.recordingMap.get(e);const d=t||!c;if(d){d&&clearInterval(null===c||void 0===c?void 0:c.recordTimer),c&&this.recordingMap.delete(e);const t=new AbortController,o=yield window.showSaveFilePicker({suggestedName:r+"."+a,types:[{accept:{["video/"+a]:["."+a]}}]}).catch(e=>{s&&s(!1)});if(!o)return;let l=yield o.createWritable({keepExistingData:!0});c={m3u8URL:n,tempURL:n.split("index.m3u8"),m4sList:[],originM4SList:new Set,currentM4SFilename:"",refreshing:!1,writing:!1,url:n,filename:r,format:a,roomId:e,tabId:+i,size:0,recordTimer:0,refreshTime:0,refreshMaxTime:0,disconnectTime:0,disconnectRetryTime:10,stop:!1,disconnected:!1,pause:!1,fileHandle:o,writableFileHandle:l,recordTime:0,abortController:t,tempSize:0}}return(d||c.pause)&&(c.pause=!1,c.recordTimer=setInterval(()=>{c.recordTime+=1,c.pause||this.refreshM4SData(c),(c.pause||c.stop)&&clearInterval(c.recordTimer),chrome.tabs.sendMessage(c.tabId,{command:"liveRecordSecondData",size:c.size,recordTime:c.recordTime})},1e3),(null===(l=null===(o=null===c||void 0===c?void 0:c.abortController)||void 0===o?void 0:o.signal)||void 0===l?void 0:l.aborted)&&(c.abortController=new AbortController)),this.recordingMap.set(e,c),c})),this.getFLVRecording=(e,t=!0,i,n,r,a,s)=>o(this,void 0,void 0,(function*(){var o,l;let c=this.recordingMap.get(e);const d=t||!c;if(d){d&&clearInterval(null===c||void 0===c?void 0:c.recordTimer),c&&this.recordingMap.delete(e);const t=new AbortController,o=yield window.showSaveFilePicker({suggestedName:r+"."+a,types:[{accept:{["video/"+a]:["."+a]}}]}).catch(e=>{s&&s(!1)});if(!o)return;let l=yield o.createWritable({keepExistingData:!0}),u=yield this.generateFetchStream(n,t);c={url:n,filename:r,format:a,roomId:e,tabId:+i,size:0,recordTimer:0,refreshTime:0,refreshMaxTime:0,disconnectTime:0,disconnectRetryTime:10,stop:!1,disconnected:!1,pause:!1,fileHandle:o,writableFileHandle:l,steamReader:u,recordTime:0,abortController:t,tempSize:0}}return(d||c.pause)&&(c.pause=!1,c.recordTimer=setInterval(()=>{c.recordTime+=1,chrome.tabs.sendMessage(c.tabId,{command:"liveRecordSecondData",size:c.size,recordTime:c.recordTime})},1e3),(null===(l=null===(o=null===c||void 0===c?void 0:c.abortController)||void 0===o?void 0:o.signal)||void 0===l?void 0:l.aborted)&&(c.abortController=new AbortController,c.steamReader=yield this.generateFetchStream(c.url,c.abortController))),this.recordingMap.set(e,c),c})),this.getM3U8Data=e=>o(this,void 0,void 0,(function*(){return new Promise(t=>{fetch(e.m3u8URL).then(e=>e.text()).then(e=>e.match(/(h?\d+).m4s/g)).then(t=>0===e.m4sList.length?t:(t||[""]).slice(1)).then(t)})})),this.refreshM4SData=e=>o(this,void 0,void 0,(function*(){if(e.refreshing)return;e.refreshing=!0;let t=(yield this.getM3U8Data(e))||[];const i=t.filter(t=>!e.originM4SList.has(t));i.forEach(t=>e.originM4SList.add(t));const o=i.sort((e,t)=>"h"===e[0]?-1:"h"===t[0]?1:e<t?-1:0).filter(Boolean);e.m4sList.push(...o),o.length>100&&(e.m4sList=e.m4sList.slice(-100)),e.refreshing=!1,yield this.writeM4SData(e)})),this.getM4SData=e=>o(this,void 0,void 0,(function*(){return new Promise(t=>{fetch(e).then(e=>e.blob()).then(t)})})),this.writeM4SData=e=>o(this,void 0,void 0,(function*(){var t;if(!e.writing){if(e.writing=!0,e.m4sList.length){e.currentM4SFilename=e.m4sList.shift();const t=yield this.getM4SData(e.tempURL.join(e.currentM4SFilename));if(t instanceof Blob){const i=yield t.arrayBuffer();yield e.writableFileHandle.write({type:"write",data:new Uint8Array(i),position:e.size}),e.size+=null===i||void 0===i?void 0:i.byteLength,e.tempSize+=null===i||void 0===i?void 0:i.byteLength}}if(e.writing=!1,!this.isVIP&&!this.isSuperVIP&&e.recordTime>=600||e.disconnected&&e.refreshTime>=e.refreshMaxTime)e.stop=!0;else if(!e.pause&&!e.stop&&e.m4sList.length)return this.writeM4SData(e);if(e.stop){if(clearInterval(e.recordTimer),e.writableFileHandle)try{yield null===(t=e.writableFileHandle)||void 0===t?void 0:t.close()}catch(e){}chrome.tabs.sendMessage(e.tabId,{command:"stopLiveRecord",size:e.size,recordTime:e.recordTime})}}})),this.getSteamOption=(e,t,i)=>o(this,void 0,void 0,(function*(){if(!e.roomId)return i(!1);const t=yield this.parseURLSFromConfig(e.roomId);i(t||!1)})),this.verifyPermission=(e,t)=>o(this,void 0,void 0,(function*(){const i={};return t&&(i.mode="readwrite"),"granted"===(yield e.queryPermission(i))||"granted"===(yield e.requestPermission(i))})),this.checkLiveSteamUsable=e=>o(this,void 0,void 0,(function*(){yield this.emit("requestController","create",{url:e,options:{abortController:new AbortController,controlPassword:e}},e=>!(e.status>=400)),setTimeout(()=>{this.emit("requestController","cancel",{controlPassword:e})},1e3)})),this.modifyOriginAndReferer=e=>{const{initiator:t,requestHeaders:i}=e;if(/^chrome-extension:\/\//.test(t)){const e=[...i],t=e.findIndex(({name:e})=>"origin"===e.toLowerCase());return-1===t&&(e.push({name:"Origin",value:"https://live.bilibili.com"}),e.push({name:"Referer",value:"https://live.bilibili.com"})),{requestHeaders:e}}return{requestHeaders:i}},this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onBHAccountChange(e){return o(this,void 0,void 0,(function*(){this.isVIP?this.__firstLaunched&&!this.__launched&&this.settings.on&&(yield this.launch()):yield this.pause()}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){this.emit("webRequestController","create",{name:"liveRecordModifyOriginAndReferer",eventName:"onBeforeSendHeaders",filter:{urls:["*://*.mcdn.bilivideo.cn/live-bvc/*","*://*.bilivideo.com/live-bvc/*"]},options:["blocking","requestHeaders","extraHeaders"],callback:this.modifyOriginAndReferer}),this.addListener("getCurrentRecord",this.getCurrentRecord),this.addListener("initRecord",this.initRecord),this.addListener("startRecord",this.startRecord),this.addListener("stopRecord",this.stopRecord),this.addListener("pauseRecord",this.pauseRecord),this.addListener("restartRecord",this.restartRecord),this.addListener("download",this.stopRecord),this.addListener("getSteamOption",this.getSteamOption)}))}}t.LiveRecord=r},33913:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LiveScreenshot=void 0;const r=n(i(57689)),a=n(i(97326)),s=i(95947),l=i(56639),c=i(72673),d=n(i(635)),u=i(13904),p=i(10243),h=i(20837),m=(i(96582),(0,d.default)(s.Button).attrs({className:"bilibili-helper-screenshot-btn"})`
  width: max-content;
  height: 22px;
  line-height: 22px;
  border-radius: 4px;
  border: 1px solid ${(0,u.color)("bilibili-blue")};
  box-sizing: border-box;
  background-color: white;
  color: ${(0,u.color)("bilibili-blue")};

  button {
    display: inline-block;
    padding: 0 5px;
    font-weight: normal;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  &.on, &:hover {
    background-color: ${(0,u.color)("bilibili-blue")};
    color: white;
  }
`),f=(0,d.default)(c.Modal)`
  max-width: 1000px;

  .preview-img {
    display: block;
    width: 100%;
    border-radius: 4px;
  }
`,b=d.default.div`
`,v=d.default.div`
  .button:first-of-type, .button:nth-child(2) {
    margin-right: 8px;
  }
`,g=document.createElement("div");document.body.appendChild(g);const y=()=>new Promise(e=>{const t="window?.postMessage({command: 'sendInitData', pageData: window.__STORE__}, '*');",i=document.createElement("script");i.innerHTML=t,document.body.appendChild(i);const o=t=>{const{data:n}=t;"sendInitData"===n.command&&(e(n.pageData),i.remove(),window.removeEventListener("message",o))};window.addEventListener("message",o)});class w extends r.default.Component{constructor(e){super(e),this.state={imgSrc:null,showModal:!1},this.handleOnClick=()=>{(0,p.getLiveCurrentFrame)().then(e=>{e?this.setState({imgSrc:e,showModal:!0},()=>{}):window.postMessage({command:"showCheckHEVCModal"},"*")})},this.handleOnCloseModal=()=>{this.setState({showModal:!1})},this.handleOnDownloadImage=()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"live_page",action:"download_screenshot"});const e=document.querySelector(".room-owner-username").textContent;new Promise(e=>{y().then(t=>{chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},i=>{if(!i||!i.on)return!1;chrome.runtime.sendMessage({target:"renameDownloadFile",event:"renameFileName",type:"liveScreenshot",data:{title:t.baseInfoRoom.roomTitle,roomId:t.baseInfoRoom.roomID,format:"jpeg",owner:{mid:t.baseInfoAnchor.uid,name:t.baseInfoAnchor.username}}},t=>{e(t||!1)})})})}).then(t=>o(this,void 0,void 0,(function*(){const i=this.state.showModal?this.state.imgSrc:yield(0,p.getLiveCurrentFrame)();this.state.showModal||this.setState({imgSrc:i});const o=t||`${e} ${(new Date).toLocaleString()}.jpeg`;chrome.runtime.sendMessage({target:"liveScreenshot",event:"downloadScreenShot",url:i,filename:""+(t||o)}),this.setState({showModal:!1})})))},this.handleOnCopyImage=()=>{(0,h.copyImage2Clipboard)(this.state.imgSrc).then(e=>{l.Message.info("\u590d\u5236\u622a\u56fe"+(e?"\u6210\u529f":"\u5931\u8d25"))})}}render(){return r.default.createElement(r.default.Fragment,null,r.default.createElement(m,{onClick:()=>this.handleOnClick()},"\u622a\u53d6\u753b\u9762"),a.default.createPortal(r.default.createElement(f,{open:this.state.showModal,className:"preview-modal",title:"\u76f4\u64ad\u622a\u56fe\u9884\u89c8",onClickMask:this.handleOnCloseModal,buttons:r.default.createElement(v,null,r.default.createElement(s.Button,{className:"border",onClick:this.handleOnCloseModal},"\u5173\u95ed"),r.default.createElement(s.Button,{id:"acghelperScreenShotDownloadButton",className:"primary",onClick:this.handleOnDownloadImage},"\u4e0b\u8f7d"),r.default.createElement(s.Button,{className:"primary",onClick:this.handleOnCopyImage},"\u590d\u5236"))},r.default.createElement(b,null,r.default.createElement("img",{className:"preview-img",src:this.state.imgSrc,alt:"preview"}))),g))}}t.LiveScreenshot=w},7551:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.LiveScreenshot=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"liveScreenshot",{settings:{on:!0}}),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i&&i({settings:this.simplifyConfig(this.settings)})}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("downloadScreenShot",({url:e,filename:t},i,o)=>{e&&chrome.downloads.download({saveAs:!0,url:e,filename:t}),o(Boolean(e))})}))}}t.LiveScreenshot=r},5654:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.nextFrame=t.previousFrame=void 0;const n=i(10243),r=function(e){return o(this,void 0,void 0,(function*(){const t=yield(0,n.getCurrentQuality)(),i=yield(0,n.getVideoElement)();i?(e.preventDefault(),e.stopPropagation(),!isNaN(t)&&[116,74].includes(t)?i.currentTime-=1/60:i.currentTime-=1/30):window.postMessage({command:"showCheckHEVCModal"},"*")}))};t.previousFrame=r;const a=function(e){return o(this,void 0,void 0,(function*(){const t=yield(0,n.getCurrentQuality)(),i=yield(0,n.getVideoElement)();i?(e.preventDefault(),e.stopPropagation(),i&&!isNaN(t)&&[116,74].includes(t)?i.currentTime+=1/60:i.currentTime+=1/30):window.postMessage({command:"showCheckHEVCModal"},"*")}))};t.nextFrame=a},62385:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.minusPlaySpeed=t.addPlaySpeed=t.resetPlaySpeed=void 0;const n=i(10243);i(98767);const r=i(555),a=()=>o(void 0,void 0,void 0,(function*(){return new Promise(e=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},t=>{e(t)})})})),s=function(e){return o(this,void 0,void 0,(function*(){yield(0,r.injectScript)(`(window?.player || window?.playerRaw)?.setPlaybackRate(${e});`)}))},l=function(e){return o(this,void 0,void 0,(function*(){const t=yield(0,n.getVideoElement)();if(t){e.preventDefault(),e.stopPropagation();const t=(0,n.getSpeedBtn)(1);t?t.click():yield s(1)}}))};t.resetPlaySpeed=l;const c=4,d=function(e){return o(this,void 0,void 0,(function*(){e.preventDefault(),e.stopPropagation();const t=yield(0,n.getVideoElement)();t?(e.preventDefault(),e.stopPropagation(),a().then(({playSpeedChangeRange:e,useDefaultSpeedChangeRange:i,bhAccount:o})=>{(!o||o&&!(0,r.isVIP)(o))&&(e=.25,i=!0);const a=i?4:c;if(t.playbackRate<a){let o;i?e=.25:t.playbackRate+e>=a&&(e=a-t.playbackRate),o=1.5===t.playbackRate&&i?t.playbackRate+.5:t.playbackRate+e,o=+o.toFixed(2);const r=(0,n.getSpeedBtn)(o);r&&o?r.click():s(o),(0,n.showPlaySpeedTip)(o)}})):window.postMessage({command:"showCheckHEVCModal"},"*")}))};t.addPlaySpeed=d;const u=function(e){return o(this,void 0,void 0,(function*(){const t=yield(0,n.getVideoElement)();t?t.playbackRate>.5&&(e.preventDefault(),e.stopPropagation(),a().then(({playSpeedChangeRange:e,useDefaultSpeedChangeRange:i,bhAccount:o})=>{let a;(!o||o&&!(0,r.isVIP)(o))&&(e=.25,i=!0),i?e=.25:t.playbackRate-e<=.5&&(e=t.playbackRate-.5),a=2===t.playbackRate&&i?t.playbackRate-.5:t.playbackRate-e,a=+a.toFixed(2);const l=(0,n.getSpeedBtn)(a);l&&a?l.click():s(a),(0,n.showPlaySpeedTip)(a)})):window.postMessage({command:"showCheckHEVCModal"},"*")}))};t.minusPlaySpeed=u},60769:function(e,t){var i=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.nextFiveSeconds=t.previousFiveSeconds=void 0;const o=()=>document.querySelector("#bilibiliPlayer .bilibili-player-video video, #bilibili-player video"),n=()=>i(void 0,void 0,void 0,(function*(){return new Promise(e=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},t=>{e(t)})})})),r=function(e){return i(this,void 0,void 0,(function*(){const t=yield o();t?t.currentTime>0&&(e.preventDefault(),e.stopPropagation(),n().then(({playJumpChangeRange:e})=>{t.currentTime-=e})):window.postMessage({command:"showCheckHEVCModal"},"*")}))};t.previousFiveSeconds=r;const a=function(e){return i(this,void 0,void 0,(function*(){const t=yield o();t?(e.preventDefault(),e.stopPropagation(),n().then(({playJumpChangeRange:e})=>{t.currentTime+=e})):window.postMessage({command:"showCheckHEVCModal"},"*")}))};t.nextFiveSeconds=a},21471:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.copyScreenShot=void 0;const n=i(10243),r=i(20837),a=i(56639),s=e=>o(void 0,void 0,void 0,(function*(){var t;const i=yield(0,n.getLiveCurrentFrame)();if(i){if(!e)return(0,r.copyImage2Clipboard)(i).then(e=>{a.Message.info("\u590d\u5236\u622a\u56fe"+(e?"\u6210\u529f":"\u5931\u8d25"))});null===(t=document.getElementById("acghelperScreenShotDownloadButton"))||void 0===t||t.click()}})),l=(e,t)=>o(void 0,void 0,void 0,(function*(){if(t.on)return s(t.screenShotQuickSave)}));t.copyScreenShot=l},26183:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.danmuToggle=void 0;const i=function(e){const t=document.querySelector(".bilibili-player-video-danmaku-switch .bui-switch-input, .bpx-player-dm-switch .bui-switch-input");t&&(e.stopPropagation(),t.click())};t.danmuToggle=i},42551:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=i(555),n=(i(96122),i(96062),i(26183),i(84544),i(96441),i(34701),i(60769),i(62385),i(5654),i(13460),i(21471)),r={copyScreenShot:n.copyScreenShot},a=["TEXTAREA","INPUT"],s=[],l={},c=()=>(s.length>Object.keys(l).length&&s.forEach(e=>{if(!l[e]||0===l[e].length){const t=Array.from(document.querySelectorAll(e));t.length>0&&(l[e]=t)}}),l);(0,o.interval)("#web-player-controller-wrap-el",1e3).then(()=>new Promise((e,t)=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},i=>{i.on&&i.bilibiliHelperAccountLogin?chrome.runtime.sendMessage({target:"videoShortcuts",event:"getShortcuts"},t=>{e({setting:i,shortcuts:t})}):t()})})).then(({setting:e,shortcuts:t})=>{const i=new Map(t.map(([,e])=>[e[1],e[2]]));document.addEventListener("keydown",n=>{const{target:l,code:d,key:u,ctrlKey:p,shiftKey:h,altKey:m,metaKey:f}=n;if(a.includes(l.tagName)||l.shadowRoot)return;if(s.length>0){const e=c();let t=!1;if(Object.keys(e).forEach(i=>{const o=e[i];o.forEach(e=>{e.contains(l)&&(t=!0)})}),t)return}const b=(0,o.generateShortcutValue)(d,u,p,h,m,f);if(!b||!i.has(b)||!i.get(b))return;const v=t.find(([,e])=>{const[,t]=e;return""!==t&&t===b});if(!v)return;const g=r[v[0]];return g?g(n,e):void 0},!0)}).catch(e=>e)},84544:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.mirrorToggle=void 0;let i=!1;const o=function(e){var o,n;const r=document.querySelector(".bilibili-player-video-btn-setting-left-videomirror .bui-switch-input,.squirtle-setting-mirror,.bilibili-player-video-btn-setting .bui-switch-input,.bpx-player-ctrl-setting-menu-left .bpx-player-ctrl-setting-mirror .bui-switch-input");r?(e.stopPropagation(),r.click()):i||(i=!0,null===(o=document.querySelector(".bilibili-player-video-btn-setting .bp-svgicon, .bpx-player-ctrl-btn-icon"))||void 0===o||o.dispatchEvent(new Event("mouseover",{bubbles:!0,cancelable:!1})),null===(n=document.querySelector(".bilibili-player-video-btn-setting .bp-svgicon, .bpx-player-ctrl-btn-icon"))||void 0===n||n.dispatchEvent(new Event("mouseout",{bubbles:!0,cancelable:!1})),(0,t.mirrorToggle)(e))};t.mirrorToggle=o},96062:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.mute=void 0;const i=function(e){const t=document.querySelector(".bilibili-player-video-btn.bilibili-player-video-btn-volume button, .squirtle-volume .squirtle-volume-icon");t&&(e.stopPropagation(),t.click())};t.mute=i},96441:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.pip=void 0;const i=function(){const e=document.querySelector(".bilibili-player-video-btn.bilibili-player-video-btn-pip, .squirtle-video-pip,.bpx-player-control-bottom-right .bpx-player-ctrl-pip");e&&e.click()};t.pip=i},13460:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.playPositionLink=void 0;const i=()=>{const e=document.querySelector(".bilibili-helper-play-position-link-btn button");e&&(null===e||void 0===e||e.click())};t.playPositionLink=i},34701:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.watchLater=void 0;const i=function(){const e=document.querySelector("#arc_toolbar_report .more-ops-list .ops-watch-later, .more_dropdown .ops-watch-later, .video-watchlater .ops-watch-later");e&&e.click()};t.watchLater=i},96122:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.fillWiden=t.webWiden=t.normalWiden=void 0;const o=i(10243),n=function(e){(0,o.getNormalWidenButton)(!0,!0).then(t=>{t&&(e.stopPropagation(),t.click())})};t.normalWiden=n;const r=function(e){(0,o.getWebWidenButton)(!0,!0).then(t=>{t&&(e.stopPropagation(),t.click())})};t.webWiden=r;const a=function(e){(0,o.getFullFillWidenButton)(!0,!0).then(t=>{t&&(e.stopPropagation(),t.click())})};t.fillWiden=a},12411:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i};Object.defineProperty(t,"__esModule",{value:!0}),t.LiveShortcuts=void 0;const r=i(12404),a=i(555),s=[["copyScreenShot",["\u590d\u5236\u622a\u56fe\u81f3\u526a\u5207\u677f","s",!0]]];class l extends r.Feature{constructor(e){super(e,"liveShortcuts",{settings:{on:!0,screenShotQuickSave:!1}}),this.states={},this.hasLogin=!1,this.bilibiliAccount=null,this.bhAccount=null,this.onBeforeLaunch=()=>o(this,void 0,void 0,(function*(){this.addListener("getShortcuts",this.getShortcuts),this.addListener("setShortcut",this.setShortcut),this.addListener("reset",this.reset),yield this.emit("bilibiliHelperAccountController","getStatus",null,({bhAccount:e,hasLogin:t,bilibiliAccount:i})=>{this.hasLogin=t,this.bhAccount=e,this.bilibiliAccount=i,this.settings.bhAccount=this.bhAccount,this.settings.bilibiliAccount=this.bilibiliAccount,this.settings.bilibiliHelperAccountLogin=this.hasLogin})})),this.initShortcuts=()=>{let e=this.getStore("shortcuts");e?(this.store=new Map(s),e=e.filter(([e])=>{const t=s.find(([t])=>t===e);return!!t}),e.forEach(([e,t])=>{"webWiden"===e&&"w"===t[1]&&(t=["\u7f51\u9875\u5168\u5c4f","y"]),void 0===t[2]&&(t[2]=!0),this.store.set(e,t)}),this.setStore("shortcuts",Array.from(this.store))):(this.store=new Map(s),this.setStore("shortcuts",Array.from(this.store)))},this.getShortcuts=(e,t,i)=>{i(Array.from(this.store))},this.setShortcut=(e,t,i)=>{const{key:o,value:n,on:r}=e;if(this.store.has(o)){const e=this.store.get(o);e[1]=void 0!==n?n:e[1],e[2]=void 0!==r?r:e[2],this.setStore("shortcuts",Array.from(this.store))}i(!0)},this.reset=(e,t,i)=>{this.store=new Map(s.map(([e,[t,i]])=>{const[,,o]=this.store.get(e);return[e,[t,i,o]]})),this.setStore("shortcuts",Array.from(this.store)),i&&i()},this.onAfterSetSettingsFromCloud=()=>{this.initShortcuts(),this.settings.bilibiliAccount=this.bilibiliAccount,this.settings.bilibiliHelperAccountLogin=this.hasLogin},this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){const e=this.settings,{states:t,bhAccount:o,bilibiliAccount:r,bilibiliHelperAccountLogin:a}=e,s=n(e,["states","bhAccount","bilibiliAccount","bilibiliHelperAccountLogin"]);i({settings:this.simplifyConfig(s),stores:{shortcuts:this.getStore("shortcuts")}})}))}onInitStore(){return o(this,void 0,void 0,(function*(){this.initShortcuts()}))}onLaunch(){return o(this,void 0,void 0,(function*(){}))}onBHAccountChange(e){const t=Object.create(null,{onBHAccountChange:{get:()=>super.onBHAccountChange}});return o(this,void 0,void 0,(function*(){yield t.onBHAccountChange.call(this,e),this.settings.bilibiliAccount=this.bilibiliAccount,this.settings.bilibiliHelperAccountLogin=this.hasLogin,this.bhAccount&&(0,a.isVIP)(this.bhAccount)||this.reset()}))}}t.LiveShortcuts=l},43057:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={silver2coin:"https://api.live.bilibili.com/xlive/revenue/v1/wallet/silver2coin"}},71938:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Silver2coin=void 0;const r=i(12404),a=i(96582),s=n(i(43057));class l extends r.Feature{constructor(e){super(e,"silver2coin",{settings:{on:!1,pushNotification:!0},cache:{type:"local",dataType:"number"}}),this.online=!1,this.bilibiliAccount=null,this.notificationControllerOn=!1,this.onBeforeLaunch=()=>o(this,void 0,void 0,(function*(){this.addListener("networkOnlineChange",e=>this.online=e),yield this.emit("notificationController","getSetting",null,({on:e})=>{this.notificationControllerOn=e}),this.emit("networkController","getOnline",null,e=>this.online=e),this.emit("webRequestController","create",{name:"silver2coinModifyOrigin",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.live.bilibili.com/xlive/revenue/v1/wallet/silver2coin*"]},options:["blocking","requestHeaders","extraHeaders"],callback:(0,a.webRequestCallbackWrapper)(this.modifyOrigin)})})),this.onPause=()=>o(this,void 0,void 0,(function*(){this.clearClock()})),this.modifyOrigin=e=>{const{initiator:t,requestHeaders:i,url:o}=e,n=new URL(o),r=i;let a=r.findIndex(({name:e})=>"bilibili-helper-header-action-set-origin"===e);if(a>-1&&(r.push({name:"Origin",value:r[a].value}),r.splice(a,1)),a=r.findIndex(({name:e})=>"bilibili-helper-header-action-set-referer"===e),a>-1&&(r.push({name:"Referer",value:r[a].value}),r.splice(a,1)),t===n.origin){const e=r.findIndex(({name:e})=>"origin"===e.toLowerCase());e>-1&&r.splice(e,1),r.push({name:"Origin",value:"https://www.bilibili.com"});const t=r.findIndex(({name:e})=>"referer"===e.toLowerCase());t>-1&&r.splice(t,1),r.push({name:"Referer",value:"https://www.bilibili.com"})}return{requestHeaders:r}},this.createClock=()=>{this.emit("clockController","create",{name:"silver2coin",alarmInfo:{periodInMinutes:5},focus:!0,callback:this.request})},this.clearClock=()=>{this.emit("clockController","pause",{name:"silver2coin"})},this.getJCT=()=>o(this,void 0,void 0,(function*(){return yield this.emit("cookieController","get",{url:"https://www.bilibili.com",name:"bili_jct"},e=>e)})),this.request=()=>o(this,void 0,void 0,(function*(){if(this.online&&!chrome.extension.inIncognitoContext&&this.settings.on&&!this.todayPassed&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin){const e=yield this.getJCT();if(!e)return!1;this.emit("requestController","create",{url:s.default.silver2coin,options:{method:"post",contentType:"json",body:`csrf_token=${e}&csrf=${e}`,headers:{"content-type":"application/x-www-form-urlencoded",passWrapper:"true","bilibili-helper-header-action-set-referer":"https://www.bilibili.com/","bilibili-helper-header-action-set-origin":"https://www.bilibili.com/"}}},({data:e})=>o(this,void 0,void 0,(function*(){!1===e&&this.settings.pushNotification&&this.emit("notificationController","post",{title:"\u94f6\u74dc\u5b50\u81ea\u52a8\u5151\u6362\u5931\u8d25",tag:"silver2coin"}),0===e.code?(this.cache.set((new Date).getDate()),this.settings.pushNotification&&this.emit("notificationController","post",{title:"\u94f6\u74dc\u5b50\u81ea\u52a8\u5151\u6362\u6210\u529f",tag:"silver2coin"})):403===e.code&&this.cache.set((new Date).getDate())})))}})),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}get todayPassed(){return this.cache.get()===(new Date).getDate()}onAfterSetSetting(e,t){return o(this,void 0,void 0,(function*(){this.notificationControllerOn&&t.on&&!this.__launched&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.launch():t.on&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin||!this.__launched||this.pause()}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.notificationControllerOn&&this.settings.on&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin&&(this.createClock(),this.request())}))}onBHAccountChange(e){const t=Object.create(null,{onBHAccountChange:{get:()=>super.onBHAccountChange}});return o(this,void 0,void 0,(function*(){yield t.onBHAccountChange.call(this,e),this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.notificationControllerOn&&this.settings.on&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin&&this.createClock():this.pause()}))}}t.Silver2coin=l},62280:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={getStatus:"https://api.bilibili.com/x/vip/privilege/my",receive:"https://api.bilibili.com/x/vip/privilege/receive"}},59821:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AutoTakeVipPrivilege=void 0;const r=i(12404),a=n(i(32699)),s=i(555),l=n(i(62280)),c=[2,4,7];class d extends r.Feature{constructor(e){super(e,"autoTakeVipPrivilege",{settings:{on:!1,pushNotification:!0},cache:{type:"local",dataType:"number"}}),this.hasLogin=!1,this.bilibiliAccount=null,this.notificationControllerOn=!1,this.onBeforeLaunch=()=>o(this,void 0,void 0,(function*(){yield this.addListener("allHasLoaded",({firstInstall:e,updated:t})=>{(e||t)&&this.cache.clearCache(!0)}),yield this.emit("notificationController","getSetting",null,({on:e})=>{this.notificationControllerOn=e}),this.emit("webRequestController","create",{name:"autoTakeVipPrivilegeModifyHeader",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.bilibili.com/x/vip/privilege/receive*"]},options:["blocking","requestHeaders","extraHeaders"],callback:this.modifyHeaders})})),this.onLaunch=()=>o(this,void 0,void 0,(function*(){this.notificationControllerOn&&this.settings.on&&this.hasLogin&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin&&(this.createClock(),this.request())})),this.onPause=()=>o(this,void 0,void 0,(function*(){this.clearClock()})),this.createClock=()=>{this.emit("clockController","create",{name:"autoTakeVipPrivilege",alarmInfo:{periodInMinutes:5},focus:!0,callback:this.request})},this.clearClock=()=>{this.emit("clockController","pause",{name:"autoTakeVipPrivilege"})},this.modifyHeaders=(0,s.webRequestCallbackWrapper)(e=>{const{requestHeaders:t,url:i}=e,{query:o}=i;if(o&&o.requestFrom)return;const n=a.default.find(t,e=>"origin"===e.name.toLowerCase());return n?n.value="https://account.bilibili.com/":t.push({name:"Origin",value:"https://account.bilibili.com/"}),{requestHeaders:t}}),this.checkout=()=>new Promise((e,t)=>{(0,s.fetchFromHelper)(l.default.getStatus,{credentials:"include",mode:"cors"}).then(e=>e.json()).then(i=>{0===i.code&&i.data&&i.data.list?e(i.data.list.filter(e=>!c.includes(e.type)).map(e=>1!==e.state?e.type:-1).reduce((e,t)=>(-1!==t&&e.push(t),e),[])):t("\u83b7\u53d6\u4f1a\u5458\u798f\u5229\u72b6\u6001\u6570\u636e\u5931\u8d25")}).catch(e=>{})}),this.request=()=>o(this,void 0,void 0,(function*(){if(chrome.extension.inIncognitoContext)return Promise.reject(this.names.item+": \u8bf7\u9000\u51fa\u9690\u79c1\u6a21\u5f0f");if(this.settings.on){if(!this.thisMonthPassed&&this.hasLogin&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin){const e=yield this.emit("cookieController","get",{url:"https://www.bilibili.com",name:"bili_jct"}),t=yield this.checkout();return t.length>0?this.get(t,e):(this.cache.set((new Date).setHours(0,0,0,0)),!1)}return!1}})),this.get=(e,t)=>o(this,void 0,void 0,(function*(){return Promise.all(e.map(e=>this.emit("requestController","create",{url:l.default.receive+"?passWrapper=true",options:{method:"post",body:`type=${e}&csrf=${t}`,credentials:"include",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},contentType:"json"}},e=>{var t;return 0===(null===(t=null===e||void 0===e?void 0:e.data)||void 0===t?void 0:t.code)}))).then(t=>{const i=t.filter(Boolean).length;i===e.length&&e.length>0&&(this.cache.set((new Date).setHours(0,0,0,0)),this.settings.pushNotification&&this.emit("notificationController","post",{title:"\u81ea\u52a8\u9886\u53d6\u5927\u4f1a\u5458\u798f\u5229\u6210\u529f",tag:"autoTakeVipPrivilege"}))}).catch(e=>{})})),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}get thisMonthPassed(){return this.cache.get()+864e5>Date.now()}onAfterSetSetting(e,t){return o(this,void 0,void 0,(function*(){this.notificationControllerOn&&t.on&&!this.__launched&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.launch():t.on&&this.hasLogin&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin||!this.__launched||this.pause()}))}onBHAccountChange(e){const t=Object.create(null,{onBHAccountChange:{get:()=>super.onBHAccountChange}});return o(this,void 0,void 0,(function*(){yield t.onBHAccountChange.call(this,e),this.hasLogin&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.notificationControllerOn&&this.settings.on&&this.hasLogin&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin&&this.createClock():this.pause()}))}}t.AutoTakeVipPrivilege=d},39769:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Cat=void 0;const n=i(12404),r={top:100,right:24,direction:"right",locked:!0};class a extends n.Feature{constructor(e){super(e,"cat",{settings:{on:!0,catType:"default",showWhenFullWiden:!1,showInInjectPlayer:!1,autoClose:!1}}),this.handleConfigMap=new Map,this.getHandleConfig=(e,t,i)=>o(this,void 0,void 0,(function*(){return(null===e||void 0===e?void 0:e.type)&&this.handleConfigMap.has(e.type)?i(this.handleConfigMap.get(e.type)):i(r)})),this.setHandleConfig=(e,t,i)=>o(this,void 0,void 0,(function*(){if(null===e||void 0===e?void 0:e.type){const{left:t,right:o,top:n=100,direction:r="right",locked:a=!0}=e;return this.handleConfigMap.set(e.type,{left:t,right:o,top:n,direction:r,locked:a}),this.setStore("handleConfigMap",Array.from(this.handleConfigMap)),i(!0)}return i(!1)})),this.getTypeList=(e,t,i)=>o(this,void 0,void 0,(function*(){i(Array.from(this.handleConfigMap.keys()))})),this.resetPosition=(e,t,i)=>o(this,void 0,void 0,(function*(){this.handleConfigMap.has(e.type)?(this.handleConfigMap.set(e.type,{left:void 0,right:24,top:100,direction:"right",locked:!0}),i(!0)):i(!1)})),this.onAfterSetSettingsFromCloud=()=>o(this,void 0,void 0,(function*(){const e=this.getStore("handleConfigMap");e&&(this.handleConfigMap=new Map(e))})),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings),stores:{handleConfigMap:this.getStore("handleConfigMap")}})}))}onInitStore(){return o(this,void 0,void 0,(function*(){const e=this.getStore("handleConfigMap");e?this.handleConfigMap=new Map(e):(this.handleConfigMap=new Map,this.setStore("handleConfigMap",[]))}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("getHandleConfig",this.getHandleConfig),this.addListener("setHandleConfig",this.setHandleConfig),this.addListener("getTypeList",this.getTypeList),this.addListener("resetPosition",this.resetPosition)}))}}t.Cat=a},55889:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CustomWhisperMessage=void 0;const n=i(53507),r=o(i(57689)),a=o(i(635)),s=i(555),l=a.default.div.attrs({className:"custom-whisper-message"})`
  header {
    font-weight: bold;
    margin-bottom: 8px;
  }

  .custom-message {
    display: flex;
    align-items: flex-start;
    //margin-bottom: 4px;
    padding: 4px 4px 4px 8px;
    //border-radius: 4px;
    border-bottom: 1px solid var(--google-grey-100);
    opacity: .3;
    //cursor: not-allowed;
    user-select: none;

    :last-of-type {
      border-bottom: none;
    }

    :hover {
      background-color: var(--google-grey-300);
    }

    &.on {
      opacity: 1;
      //cursor: pointer;

      :active {
        background-color: var(--google-grey-400);
      }
    }

    .text {
      display: block;
      margin-right: auto;
      max-width: 300px;
      white-space: break-spaces;
    }

    .button {
      margin-left: 8px;
    }
  }
`;class c extends r.default.Component{constructor(e){super(e),this.state={messages:[]},this.handleOnClick=(e,t,i)=>{if(!e)return n.Message.info("\u8be5\u77ed\u8bed\u5df2\u88ab\u7981\u7528",1e3);chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"message_center",action:"enter"}),(0,s.injectScript)(`\n            (() => {\n                const targets = Array.from(document.querySelectorAll('.dialog:not(.hide)'));\n                if (targets.length === 1) {\n                    let target = targets[0];\n                    const input = target.querySelector('#editor');\n                    if (input) {\n                        // \u4f7f\u7528\u5168\u9009+\u9000\u683c\u952e\u6e05\u7406\u73b0\u6709\u5185\u5bb9\n                        window.getSelection().selectAllChildren(input);\n                        \n                        // \u51c6\u5907\u76ee\u6807\u5185\u5bb9\n                        window.clipboardData = new DataTransfer();\n                        window.clipboardData.setData('Text', ${JSON.stringify(t)});\n                        \n                        // \u7c98\u8d34\u5185\u5bb9\u5230\u8f93\u5165\u6846\n                        input.focus();\n                        const inputEvent = new Event('paste', {bubbles: true, cancelable: true, composed: true});\n                        input.dispatchEvent(inputEvent);\n                        \n                        if (${i}) {\n                            setTimeout(() => target.querySelector('.send-btn')?.click());\n                        } else {\n                            // \u5c06\u5149\u6807\u7f6e\u4e8e\u6587\u672c\u6700\u540e\u653e\n                            window.getSelection().selectAllChildren(input);\n                            window.getSelection().collapseToEnd();\n                        }\n                    }\n                }\n            })();\n        `)}}componentDidMount(){chrome.runtime.sendMessage({target:"customWhisperMessage",event:"getMessages"},e=>{this.setState({messages:e})})}render(){const{messages:e}=this.state;return r.default.createElement(l,null,r.default.createElement("header",null,"\u5feb\u6377\u56de\u590d\u77ed\u8bed"),e.map(({on:e,text:t,autoEnter:i},o)=>r.default.createElement("div",{key:o,className:["custom-message",e?"on":null].join(" "),onClick:()=>this.handleOnClick(e,t,i)},r.default.createElement("span",{className:"text"},t),r.default.createElement(n.Button,{className:"primary"},i?"\u53d1\u9001":"\u586b\u5165"))))}}t.CustomWhisperMessage=c},6459:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.CustomWhisperMessage=void 0;const n=i(12404),r=i(29010),a=[{on:!0,text:"\u975e\u5e38\u62b1\u6b49\uff0c\u6211\u73b0\u5728\u6709\u4e8b\u6b63\u5728\u5904\u7406\uff0c\u7a0d\u540e\u56de\u590d\u60a8\u3002",autoEnter:!1},{on:!0,text:"\u5bf9\u4e0d\u8d77\uff0c\u60a8\u521a\u624d\u53d1\u9001\u7684\u4fe1\u606f\u7531\u4e8e\u670d\u52a1\u5668\u800c\u4e22\u5931\u3002\u8bf7\u91cd\u65b0\u53d1\u9001\u3002",autoEnter:!1},{on:!0,text:"\u60a8\u547c\u53eb\u7684\u7528\u6237\u4ecd\u5728\u5395\u6240\u4e2d\uff0c\u8bf7\u7a0d\u540e\u518d\u7ed9\u4ed6\u5395\u7eb8\uff01",autoEnter:!1},{on:!0,text:"\u8fd9\u662f\u7b2c\u56db\u6761\u5feb\u6377\u56de\u590d\u77ed\u8bed\uff0c\u5b83\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u7279\u522b\u957f",autoEnter:!1},{on:!1,text:"\u8fd9\u662f\u7b2c\u4e94\u6761\u5feb\u6377\u56de\u590d\u77ed\u8bed\uff0c\u9ed8\u8ba4\u88ab\u7981\u7528",autoEnter:!1},{on:!1,text:"\u8fd9\u662f\u7b2c\u516d\u6761\u5feb\u6377\u56de\u590d\u77ed\u8bed\uff0c\u9ed8\u8ba4\u88ab\u7981\u7528",autoEnter:!1}];class s extends n.Feature{constructor(e){super(e,"customWhisperMessage",{dependencies:["bilibiliHelperAccountController"],settings:{on:!0}}),this.messages=[],this.onAfterSetSettingsFromCloud=()=>o(this,void 0,void 0,(function*(){this.messages=this.getStore("messages")})),this.getMessages=(e,t,i)=>{const o=this.messages.map((e,t)=>!(!this.isVIP&&t>r.CUSTOM_WHISPER_MESSAGE.FREE_NUMBER)&&e).filter(Boolean);i(o)},this.setMessage=(e,t,i)=>{let{on:o=!1,text:n,index:a,autoEnter:s=!1}=e;if(void 0===e.index||void 0===e.text)return i(!1);n=this.isVIP?n.substring(0,r.CUSTOM_WHISPER_MESSAGE.VIP_MAX_LENGTH):n.substring(0,r.CUSTOM_WHISPER_MESSAGE.FREE_MAX_LENGTH),void 0!==a&&void 0!==this.messages[a]?(this.messages[a]={on:o,text:n,autoEnter:s},this.setStore("messages",this.messages),i(!0)):this.messages.length<r.CUSTOM_WHISPER_MESSAGE.MAX_NUMBER&&(this.isVIP||this.messages.length<r.CUSTOM_WHISPER_MESSAGE.FREE_NUMBER)?(this.messages.push({on:o,text:n,autoEnter:s}),this.setStore("messages",this.messages),i(!0)):i(!1)},this.setMessageList=(e,t,i)=>{this.messages=e.list,this.setStore("messages",this.messages),i(!0)},this.deleteMessage=(e,t,i)=>{void 0!==this.messages[e.index]&&this.messages.splice(e.index,1),this.setStore("messages",this.messages),i(!0)},this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings),stores:{messages:this.getStore("messages")}})}))}onInitStore(){return o(this,void 0,void 0,(function*(){this.messages=this.getStore("messages"),this.messages||(this.messages=a,this.setStore("messages",this.messages))}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("getMessages",this.getMessages),this.addListener("setMessage",this.setMessage),this.addListener("deleteMessage",this.deleteMessage),this.addListener("setMessageList",this.setMessageList)}))}onLaunch(){return o(this,void 0,void 0,(function*(){}))}}t.CustomWhisperMessage=s},68070:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(82081),t),n(i(59821),t),n(i(39769),t),n(i(46775),t),n(i(6459),t)},46775:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Omnibox=void 0;const n=i(12404),r=i(14969),a=["v","u","l","a","b"],s={v:"video",u:"bili_user",l:"live",a:"article",b:"media_bangumi"},l=(e,t)=>`https://api.bilibili.com/x/web-interface/search/type?context=&search_type=${e}&page=1&keyword=${t}`;class c extends n.Feature{constructor(e){super(e,"omnibox",{settings:{on:!0}}),this.onInputChanged=(0,r.throttle)((e,t)=>o(this,void 0,void 0,(function*(){if(e){e=e.trim();const i=/^(\S+)\s+([\S\s]+)$/,o=i.exec(e);if(o){const i=o[1],n=o[2];if(a.includes(i)){const e=yield this.getSearchByType(s[i],n);e?this.suggestListByType(i,e,t):this.suggestNormalList(n,t,t)}else this.suggestNormalList(e,t,t)}else this.suggestNormalList(e,t,t)}})),500),this.suggestListByType=(e,t,i)=>{if(e&&t)switch(e){case"v":i(t.slice(0,6).map(({author:e,title:t,bvid:i,play:o})=>{const n="https://www.bilibili.com/video/"+i;return{content:`$$create$$${n}$$`,description:`${e} - ${t} - view: ${o}`}}));break;case"a":i(t.slice(0,6).map(({id:e,title:t,view:i})=>{const o="https://www.bilibili.com/read/cv"+e;return{content:`$$create$$${o}$$`,description:`${t} - view: ${i}`}}));break;case"u":i(t.slice(0,6).map(({mid:e,uname:t,level:i,usign:o})=>{const n="https://space.bilibili.com/"+e;return{content:`$$create$$${n}$$`,description:`LV${i} ${t} - ${o}`}}));break;case"l":i(t.slice(0,6).map(({roomid:e,uname:t,title:i})=>{const o="https://live.bilibili.com/"+e;return{content:`$$create$$${o}$$`,description:`${t} - ${i}`}}));break;case"b":i(t.slice(0,6).map(({title:e,url:t,desc:i})=>{const o=t;return{content:`$$create$$${o}$$`,description:`${e} - ${i}`}}));break}},this.suggestNormalList=(e,t)=>{t([{content:`$$video$$${e}$$`,description:"\u641c\u89c6\u9891 "+e},{content:`$$bangumi$$${e}$$`,description:"\u641c\u756a\u5267 "+e},{content:`$$live$$${e}$$`,description:"\u641c\u76f4\u64ad "+e},{content:`$$user$$${e}$$`,description:"\u641c\u7528\u6237 "+e},{content:`$$article$$${e}$$`,description:"\u641c\u4e13\u680f "+e}])},this.getSearchByType=(e,t)=>o(this,void 0,void 0,(function*(){return this.emit("requestController","create",{url:l(e,t),options:{contentType:"json"}},t=>{if(t&&t.data&&t.data.data&&t.data.data.result){let i=t.data.data.result;if("live"===e&&(i=t.data.data.result.live_room),i)return i.map(e=>(e.title&&(e.title=e.title.replace('<em class="keyword">',"").replace("</em>","")),e))}})})),this.onInputEnteredCallback=(e,t)=>{const i=/^\$\$(.+)\$\$(.+)\$\$$/;let o=i.exec(e),n="all",r=e;if(o){const e=o[1];switch(r=o[2],e){case"video":n="video";break;case"user":n="upuser";break;case"bangumi":n="bangumi";break;case"live":n="live";break;case"article":n="article";break;case"create":n="create";break}}const s=/^(\S+)\s+([\S\s]+)$/;if(o=s.exec(e),o){const e=o[1],t=o[2];a.includes(e)&&(n="all",r=t)}"create"===n?this.emit("tabController","create",{url:r,strict:!1}):this.emit("tabController","create",{url:`https://search.bilibili.com/${n}?keyword=${r}`,strict:!1})},this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onLaunch(){return o(this,void 0,void 0,(function*(){chrome.omnibox.setDefaultSuggestion({description:"\u4f7f\u7528 ACG\u52a9\u624b \u641c\u7d22"}),chrome.omnibox.onInputEntered.addListener(this.onInputEnteredCallback),chrome.omnibox.onInputChanged.addListener(this.onInputChanged)}))}onPause(){return o(this,void 0,void 0,(function*(){chrome.omnibox.onInputEntered.removeListener(this.onInputEnteredCallback)}))}}t.Omnibox=c},82081:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.QuickSearch=void 0;const n=i(12404),r=i(83938);class a extends n.Feature{constructor(e){super(e,"quickSearch",{dependencies:["tabController"],settings:{on:!0}}),this.onLaunch=()=>o(this,void 0,void 0,(function*(){if(this.settings.on)try{chrome.contextMenus.create({id:"bilibili-searchBili",title:(0,r.__)("quickSearch_menuTitle"),contexts:["selection"],onclick:e=>{chrome.runtime.sendMessage({command:"setGAEvent",action:"click",category:"quickSearch",label:"quickSearch"}),/^(av\d+|bv.+)/i.test(e.selectionText)?this.emit("tabController","create",{url:"https://www.bilibili.com/video/"+e.selectionText,strict:!1}):this.emit("tabController","create",{url:"https://search.bilibili.com/all?keyword="+encodeURIComponent(e.selectionText)})}})}catch(e){}})),this.onPause=()=>{chrome.contextMenus.remove("bilibili-searchBili",null)},this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onAfterSetSetting(e,t){return o(this,void 0,void 0,(function*(){t.on?this.launch():this.pause()}))}}t.QuickSearch=a},41907:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)},r=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Popup=void 0;const a=i(12404);n(i(29078),t),n(i(7511),t),n(i(20195),t);class s extends a.Feature{constructor(e){super(e,"popup",{settings:{on:!0,resizeRate:1}}),this.getSettingsForUpload=(e,t,i)=>r(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}}t.Popup=s},77141:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MainAnime=void 0;const r=i(12404),a=n(i(32699));i(555);class s extends r.Feature{constructor(e){super(e,"mainAnime",{dependencies:["bilibiliAccountController"],settings:{on:!0,toggle:!1}}),this.getAnimaTimeline=()=>new Promise(e=>{this.emit("requestController","create",{url:"https://bangumi.bilibili.com/web_api/timeline_global",options:{contentType:"json"}},e)}).then(({data:e})=>(0===e.code&&e.result.forEach((t,i)=>{1===t.is_today&&(e.result[i-1].is_yesterday=1),t.seasons=t.seasons.sort((e,t)=>e.follow>t.follow?-1:1)}),e.result)),this.getAnimaTimelineCN=()=>new Promise(e=>{this.emit("requestController","create",{url:"https://bangumi.bilibili.com/web_api/timeline_cn",options:{contentType:"json"}},e)}).then(({data:e})=>(0===e.code&&e.result.forEach((t,i)=>{1===t.is_today&&(e.result[i-1].is_yesterday=1),t.seasons=t.seasons.sort((e,t)=>e.follow>t.follow?-1:1)}),e.result)),this.onBeforeSendHeadersCallback=e=>{const{requestHeaders:t}=e,i=a.default.find(t,e=>"referer"===e.name.toLowerCase());return i?i.value="https://www.bilibili.com/":t.push({name:"referer",value:"https://www.bilibili.com/"}),{requestHeaders:t}},this.getFeedData=(e=1,t=1,i=20)=>new Promise(o=>this.emit("requestController","create",{url:`https://api.bilibili.com/pgc/web/follow/list?season_type=${e}&pn=${t}&ps=${i}`,options:{contentType:"json"}},o)).then(({data:e})=>0===e.code&&e.result)}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("getAnimaTimeline",(e,t,i)=>{this.getAnimaTimeline().then(e=>i(e))}),this.addListener("getAnimaTimelineCN",(e,t,i)=>{this.getAnimaTimelineCN().then(e=>i(e))}),this.addListener("getFeedData",(e,t,i)=>{this.getFeedData(e.type,e.pn,e.ps).then(e=>i(e))}),this.emit("webRequestController","create",{name:"animeFollowList",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.bilibili.com/pgc/web/follow/list?*"]},options:["blocking","requestHeaders","extraHeaders"],callback:this.onBeforeSendHeadersCallback})}))}onLaunch(){return o(this,void 0,void 0,(function*(){}))}}t.MainAnime=s},72173:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.MainCreator=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"mainCreator",{dependencies:["bilibiliAccountController"],settings:{on:!0}}),this.getData=()=>new Promise(e=>{this.emit("requestController","create",{url:"https://member.bilibili.com/x/web/index/stat",options:{contentType:"json"}},e)}).then(({data:e})=>{if(e&&e.data)return e.data}),this.getArticleData=()=>new Promise(e=>{this.emit("requestController","create",{url:"https://member.bilibili.com/x/web/data/article",options:{contentType:"json"}},e)}).then(({data:e})=>{if(e&&e.data){const{view:t,reply:i,like:o,coin:n,fav:r,share:a,incr_view:s,incr_reply:l,incr_like:c,incr_coin:d,incr_fav:u,incr_share:p}=e.data;return{articleView:t,articleReply:i,articleLike:o,articleCoin:n,articleFav:r,articleShare:a,articleIncrView:s,articleIncrReply:l,articleIncrLike:c,articleIncrCoin:d,articleIncrFav:u,articleIncrShare:p}}}),this.getRatingData=()=>new Promise(e=>{this.emit("requestController","create",{url:"https://api.bilibili.com/studio/up-rating/v3/rating/info",options:{contentType:"json"}},e)}).then(({data:e})=>{if(e&&e.data){const{credit:t,level:i,score:o}=e.data;return{ratingCredit:t,ratingLevel:i,ratingScore:o,ratingString:o<800?`${o} / ${100*i}`:o}}})}onLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("getData",(e,t,i)=>{this.getData().then(e=>i(e))}),this.addListener("getArticleData",(e,t,i)=>{this.getArticleData().then(e=>i(e))}),this.addListener("getRatingData",(e,t,i)=>{this.getRatingData().then(e=>i(e))})}))}}t.MainCreator=r},75955:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.MainFavlist=void 0;const n=i(12404),r=i(555);class a extends n.Feature{constructor(e){super(e,"mainFavlist",{dependencies:["bilibiliAccountController"],settings:{on:!0,openMethod:"direct"}}),this.onBeforeLaunch=()=>o(this,void 0,void 0,(function*(){this.addListener("getMediaList",(e,t,i)=>{this.getMediaList().then(e=>i(e))}),this.addListener("getVideoList",(e,t,i)=>{this.getVideoList(e.id,e.pn).then(e=>i(e))})})),this.getMediaList=()=>new Promise(e=>{this.emit("requestController","create",{url:"https://api.bilibili.com/x/v3/fav/folder/created/list-all?up_mid="+this.bilibiliAccount.uid,options:{contentType:"json"}},({data:t})=>{t&&t.data&&(t.data.list=t.data.list.map((e,t)=>(e.videos=[],e.pn=1,e.hasMore=!0,e)),e(t.data.list))})}),this.getVideoList=(e,t=1)=>new Promise(i=>{this.emit("requestController","create",{url:`https://api.bilibili.com/x/v3/fav/resource/list?media_id=${e}&pn=${t}&ps=20&keyword=&order=mtime&type=0&tid=0`,options:{contentType:"json"}},({data:e})=>{e&&e.data&&(e.data.medias=e.data.medias.map(e=>({videoInfo:{bvid:e.bvid,aid:(0,r.bv2av)(e.bvid),cid:e.ugc.first_cid,description:e.intro,cover:e.cover.replace("http://","https://"),title:e.title,url:e.link.replace("bilibili://video/","https://www.bilibili.com/video/av").replace("http://","https://"),duration:(0,r.parseTime)(1e3*e.duration),publishDate:e.pubtime?(0,r.videoPublishDescription)(1e3*e.pubtime):""},userInfo:{face:e.upper.face,uid:e.upper.mid,name:e.upper.name}})),i(e.data))})}),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onLaunch(){return o(this,void 0,void 0,(function*(){}))}}t.MainFavlist=a},94310:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.HistoryWatched=void 0;const n=i(12404),r=i(555);class a extends n.Feature{constructor(e){super(e,"historyWatched",{dependencies:["bilibiliAccountController"],settings:{on:!0,toggle:!1}}),this.getList=({type:e,viewAt:t,ps:i=20})=>{const o="https://api.bilibili.com/x/web-interface/history/cursor",n={type:e,view_at:t,ps:i},a=(0,r.generateURL)(o,n);return new Promise(e=>{this.emit("requestController","create",{url:a,options:{contentType:"json"}},e)}).then(({data:e})=>0===e.code&&e.data)},this.getSearchList=({pn:e=1,keyword:t,business:i="all",ps:o=20})=>{const n="https://api.bilibili.com/x/web-interface/history/cursor",a={pn:e,keyword:t,view_at:i,ps:o},s=(0,r.generateURL)(n,a);return new Promise(e=>{this.emit("requestController","create",{url:s,options:{contentType:"json"}},e)}).then(({data:e})=>0===e.code&&e.data)}}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("getList",(e,t,i)=>{this.getList(e).then(e=>i(e))}),this.addListener("getSearchList",(e,t,i)=>{this.getSearchList().then(e=>i(e))})}))}}t.HistoryWatched=a},89115:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MainHome=void 0;const r=i(12404),a=n(i(56058)),s=i(10243),l=i(46974);class c extends r.Feature{constructor(e){super(e,"mainHome",{dependencies:["bilibiliAccountController"],settings:{on:!0,showCarousel:!0,showLiveBar:!0,openMethod:"direct",videoType:"recentVideo"},cache:{type:"local",dataType:"array",limit:{duration:18e5}}}),this.getNewHotVideos=(e=!1,t=!1)=>{const{expired:i}=this.cache.checkExpired();(e||i)&&this.cache.clearCache(!0);const o=this.cache.get();return t||!(null===o||void 0===o?void 0:o.length)||i?new Promise(e=>{this.emit("requestController","create",{url:"https://api.bilibili.com/x/web-interface/index/top/rcmd?fresh_type=3",options:{contentType:"json"}},e)}).then(e=>{let i=[];return e&&e.data&&e.data.data&&e.data.data.item&&(i=e.data.data.item.map(e=>(e.publishDate=e.pubdate?(0,l.videoPublishDescription)(1e3*e.pubdate):"",{videoInfo:{aid:(0,s.bv2av)(e.bvid),cid:e.cid,bvid:e.bvid,cover:e.pic,duration:(0,l.parseTime)(1e3*e.duration),publishDate:e.pubdate?(0,l.videoPublishDescription)(1e3*e.pubdate):"",title:e.title,stat:e.stat,description:null,tageName:null},userInfo:{name:e.owner.name,face:e.owner.face,uid:e.owner.mid}})),o.push(...i),this.cache.set(o)),t?i:o}):Promise.resolve(o)},this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onInitStore(){return o(this,void 0,void 0,(function*(){const e=this.cache.get();e instanceof Array||this.cache.set([],!0)}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("clearPopupScrollPosition",(e,t,i)=>{a.default.remove("popupScrollPosition"),i(!0)}),this.addListener("clearCache",(e,t,i)=>{this.cache.clearCache(!0),i(!0)}),this.addListener("getNewHotVideos",(e,t,i)=>{this.getNewHotVideos(e.clearCache,e.continuous).then(e=>i(e))})}))}}t.MainHome=c},29078:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)},r=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},a=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i};Object.defineProperty(t,"__esModule",{value:!0}),t.PopupMain=t.NEW_DEFAULT_CUSTOM_SECTION_LIST=t.DEFAULT_CUSTOM_SECTION_LIST=void 0;const s=i(12404),l=i(555);n(i(89115),t),n(i(77141),t),n(i(75955),t),n(i(11192),t),n(i(57740),t),n(i(94310),t),n(i(72173),t),t.DEFAULT_CUSTOM_SECTION_LIST=[{key:"home",on:!0},{key:"animeTimeTable",on:!0},{key:"anime",on:!0},{key:"live",on:!0},{key:"favlist",on:!0},{key:"watchLater",on:!0},{key:"manga",on:!0}],t.NEW_DEFAULT_CUSTOM_SECTION_LIST=[{key:"home",on:!0,defaultIndex:0},{key:"specialAttention",on:!0,defaultIndex:1},{key:"history",on:!0,defaultIndex:-2},{key:"recommend",on:!0,defaultIndex:-4},{key:"creator",on:!0,defaultIndex:-1}];class c extends s.Feature{constructor(e){super(e,"popupMain",{dependencies:["bilibiliAccountController"],settings:{on:!0,columns:1,videoCardType:"simple",videoOpenMethod:"direct",activeIfExist:!0,sectionShow:[],rememberRecentReadPosition:!0,showTag:!0,temporaryShowLatestSection:!1}}),this.isVIP=!1,this.requireSection=(e=!1)=>r(this,void 0,void 0,(function*(){const i=this.getStore("requireSections");this.settings.sectionShow.length>0&&this.isVIP?(i!==l.version||e)&&(this.setStore("requireSections",l.version),this.settings.sectionShow=this.insectSection(this.settings.sectionShow,t.NEW_DEFAULT_CUSTOM_SECTION_LIST,!1),yield this.setSetting(this.settings)):yield this.resetSections()})),this.resetSections=()=>r(this,void 0,void 0,(function*(){this.setStore("requireSections",l.version),this.settings.sectionShow=this.insectSection([],t.DEFAULT_CUSTOM_SECTION_LIST),this.settings.sectionShow=this.insectSection(this.settings.sectionShow,t.NEW_DEFAULT_CUSTOM_SECTION_LIST,!1),yield this.setSetting(this.settings)})),this.insectSection=(e,t,i=!0)=>{const o=[...e],n=e.reduce((e,t)=>(e[t.key]=t,e),{});return t.forEach(e=>{n[e.key]||(void 0!==e.defaultIndex?o.splice(e.defaultIndex,0,e):i?o.push(e):o.unshift(e))}),o},this.onAfterSetSettingsFromCloud=()=>r(this,void 0,void 0,(function*(){yield this.requireSection(!0)})),this.getSettingsForUpload=(e,t,i)=>r(this,void 0,void 0,(function*(){const e=this.settings,{bhAccount:t}=e,o=a(e,["bhAccount"]);i({settings:this.simplifyConfig(o)})}))}onBeforeLaunch(){return r(this,void 0,void 0,(function*(){yield this.emit("bilibiliHelperAccountController","getStatus",null,({bhAccount:e,hasLogin:t,bilibiliAccount:i})=>{this.hasLogin=t,this.bhAccount=e,this.bilibiliAccount=i,this.settings.bhAccount=this.bhAccount,this.settings.bilibiliAccount=this.bilibiliAccount,this.settings.bilibiliHelperAccountLogin=this.hasLogin,this.isVIP=(0,l.isVIP)(this.bhAccount)})}))}onLaunch(){return r(this,void 0,void 0,(function*(){yield this.requireSection()}))}onBHAccountChange(e){return r(this,void 0,void 0,(function*(){this.bhAccount=e,this.bhAccount?this.isVIP=(0,l.isVIP)(this.bhAccount):this.isVIP=!1,yield this.requireSection(!0)}))}}t.PopupMain=c},11192:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.MainLive=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"mainLive",{dependencies:["bilibiliAccountController","bilibiliLiveBroadcast"],settings:{on:!0,openMethod:"direct"},cache:{type:"local",dataType:"object",delayDuration:2e3,limit:{duration:18e4}}}),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("getLiveFeedList",(e,t,i)=>{this.emit("bilibiliLiveBroadcast","getLiveFeedList",e,i)})}))}}t.MainLive=r},57740:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MainManga=void 0;const r=i(12404),a=n(i(32699));class s extends r.Feature{constructor(e){super(e,"mainManga",{dependencies:["bilibiliAccountController"],settings:{on:!0,openMethod:"direct"}}),this.modifyOrigin=e=>{const{initiator:t,requestHeaders:i}=e,o=!a.default.isEmpty(a.default.find(i,({name:e})=>e.match("bilibili-helper-header-action"))),n=[...i];if(o){const e=n.findIndex(({name:e})=>"bilibili-helper-header-action-set-origin"===e);e>-1&&(n.push({name:"Origin",value:n[e].value}),n.splice(e,1))}return{requestHeaders:n}},this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.emit("webRequestController","create",{name:"mainMangaSetOrigin",eventName:"onBeforeSendHeaders",filter:{urls:["*://manga.bilibili.com/*"]},options:["blocking","requestHeaders","extraHeaders"],callback:this.modifyOrigin})}))}}t.MainManga=s},7511:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.PopupMenu=void 0;const n=i(12404),r=i(83938),a=i(5546),s=i(32699),l=[{key:"home",on:!0,toggle:!0,needLogin:!1},{key:"live",on:!0,toggle:!0,needLogin:!1},{key:"dynamic",on:!0,toggle:!0,needLogin:!0},{key:"favourite",on:!0,toggle:!0,needLogin:!0},{key:"history",on:!0,toggle:!0,needLogin:!0},{key:"article",on:!0,toggle:!0,needLogin:!1},{key:"anime",on:!0,toggle:!0,needLogin:!1},{key:"audio",on:!0,toggle:!0,needLogin:!1}],c=[{title:"\u7a0d\u540e",url:"https://www.bilibili.com/watchlater/#/list",on:!0},{title:"\u6f2b\u753b",url:"https://manga.bilibili.com/",on:!0},{title:"\u9891\u9053",url:"https://www.bilibili.com/v/channel/",on:!0}],d=[];class u extends n.Feature{constructor(e){super(e,"popupMenu",{dependencies:["bilibiliAccountController"],settings:{on:!0,menuOptions:l}}),this.hasPermission=!0,this.defaultTabMap={home:()=>"https://www.bilibili.com/",live:()=>"https://live.bilibili.com/",dynamic:()=>"https://t.bilibili.com/",favourite:()=>o(this,void 0,void 0,(function*(){return yield this.emit("bilibiliAccountController","getLocalUID",null,e=>`https://space.bilibili.com/${e}/favlist`)})),history:()=>"https://www.bilibili.com/account/history",article:()=>"https://www.bilibili.com/read/home",anime:()=>"https://www.bilibili.com/anime",audio:()=>"https://www.bilibili.com/v/music"},this.onBeforeSetSettingsFromCloud=({settings:e,stores:t})=>o(this,void 0,void 0,(function*(){(null===t||void 0===t?void 0:t.customMenu)&&(t.customMenu=t.customMenu.map(e=>(void 0===e.key&&(e.key=this.generateMenuKey()),void 0===e.on&&(e.on=!0),e)).filter(Boolean)),Array.isArray(e.menuOptions)?e.menuOptions=e.menuOptions.map(e=>(void 0===e.key&&(e.key=this.generateMenuKey()),void 0===e.on&&(e.on=!0),Object.assign(Object.assign({},e),{title:(0,r.__)("popupMenu_kinds_"+e.key)}))):(0,s.isPlainObject)(e.menuOptions)&&(e.menuOptions=Object.keys(e.menuOptions).map(t=>({key:t,title:(0,r.__)("popupMenu_kinds_"+t),on:e.menuOptions[t].on,needLogin:e.menuOptions[t].needLogin,toggle:e.menuOptions[t].toggle})))})),this.openNewTab=(e,t,i)=>o(this,void 0,void 0,(function*(){const{url:t,key:o,active:n=!0,activeIfExist:r=!0}=e;let a=!1;if(this.hasPermission){let e;if(o&&!this.defaultTabMap[o])return void this.logger.warn("undefined popup menu key",o);e=o?yield this.defaultTabMap[o]():t,"home"!==o&&"live"!==o&&"dynamic"!==o||(a=!0),this.emit("tabController","create",{url:e,strict:a,active:n,activeIfExist:r},()=>{i(!0)})}else i(!1)})),this.initNewCustomMenu=()=>{const e=this.getStore("hasSetNewCustomMenu");return e?[]:(this.setStore("newCustomMenuList",d.map(e=>(e.key=this.generateMenuKey(),e.on=!0,e))),this.setStore("hasSetNewCustomMenu",!0),d)},this.generateMenuKey=()=>(0,a.v4)().split("-").join("").slice(5,10),this.onAfterSetSettingsFromCloud=()=>o(this,void 0,void 0,(function*(){this.customMenuStore=this.getStore("customMenu")})),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings),stores:{customMenu:this.customMenuStore}})}))}onInitStore(){return o(this,void 0,void 0,(function*(){this.customMenuStore=this.getStore("customMenu");const e=this.initNewCustomMenu(),t=c;if(this.customMenuStore){let t=!1;this.customMenuStore=this.customMenuStore.map(e=>{if(null!==e)return void 0===e.on&&(e.on=!0,t=!0),void 0===e.key&&(e.key=this.generateMenuKey(),t=!0),e;t=!0}).filter(Boolean),this.customMenuStore=[...this.customMenuStore,...e],t&&this.setStore("customMenu",this.customMenuStore)}else this.setStore("customMenu",t),this.customMenuStore=t;(0,s.isPlainObject)(this.settings.menuOptions)&&(this.settings.menuOptions=Object.keys(this.settings.menuOptions).map(e=>({key:e,title:(0,r.__)("popupMenu_kinds_"+e),on:this.settings.menuOptions[e].on,needLogin:this.settings.menuOptions[e].needLogin,toggle:this.settings.menuOptions[e].toggle})),this.setSetting(this.settings)),this.settings.menuOptions.forEach(e=>{e.title=(0,r.__)("popupMenu_kinds_"+e.key)})}))}onBeforeSetSetting(e){return o(this,void 0,void 0,(function*(){return(0,s.isPlainObject)(e.menuOptions)&&(e.menuOptions=Object.keys(e.menuOptions).map(t=>({key:t,title:(0,r.__)("popupMenu_kinds_"+t),on:e.menuOptions[t].on,needLogin:e.menuOptions[t].needLogin,toggle:e.menuOptions[t].toggle}))),e}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("setSystemMenuState",(e,t,i)=>{if(e.key&&void 0!==e.on){const t=this.settings.menuOptions.find(({key:t})=>t===e.key);t&&(t.on=e.on),this.setSetting(this.settings)}i(!0)}),this.addListener("setOptionsMenuList",(e,t,i)=>{this.settings.menuOptions=e.list,this.setSetting(this.settings),i(!0)}),this.addListener("setCustomMenuList",(e,t,i)=>{this.customMenuStore=e.list.map(e=>(void 0===e.key&&(e.key=this.generateMenuKey()),void 0===e.on&&(e.on=!0),e)),this.setStore("customMenu",this.customMenuStore),i(!0)}),this.addListener("updateCustomMenu",(e,t,i)=>{void 0!==e.index&&void 0!==e.title&&void 0!==e.url?(this.customMenuStore[e.index]={title:e.title,url:e.url},this.setStore("customMenu",this.customMenuStore),i(!0)):i(!1)}),this.addListener("deleteCustomMenu",(e,t,i)=>{this.customMenuStore[e.index]?(this.customMenuStore.splice(e.index,1),this.setStore("customMenu",this.customMenuStore),i(!0)):i(!1)}),this.addListener("getMenuList",(e,t,i)=>{i({options:this.settings.menuOptions,custom:this.customMenuStore})}),this.addListener("openNewTab",this.openNewTab)}))}}t.PopupMenu=u},20195:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.PopupSearcher=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"popupSearcher",{dependencies:["bilibiliAccountController"],settings:{on:!0}}),this.search=(e,t,i)=>{this.emit("tabController","create",{url:"https://search.bilibili.com/all?keyword="+e.keyword},()=>{const t=this.store.indexOf(e.keyword);t>=0&&this.store.splice(t,1),this.store.push(e.keyword),this.store=this.store.slice(-10),this.setStore("searchHistory",this.store)}),i(!0)},this.getHistory=(e,t,i)=>{i(this.store)},this.clearAll=(e,t,i)=>{this.store=[],this.setStore("searchHistory",this.store),i(!0)},this.clearKeywordByIndex=(e,t,i)=>{this.store.splice(e.index,1),this.setStore("searchHistory",this.store),i(this.store)}}onInitStore(){return o(this,void 0,void 0,(function*(){const e=this.getStore("searchHistory");void 0===e?(this.store=[],this.setStore("searchHistory",this.store)):this.store=e}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("go2Search",this.search),this.addListener("getSearchHistory",this.getHistory),this.addListener("clearAll",this.clearAll),this.addListener("clearKeywordByIndex",this.clearKeywordByIndex)}))}}t.PopupSearcher=r},39679:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.SpecialAttention=void 0;const n=i(12404),r=(i(52017),i(46974));class a extends n.Feature{constructor(e){super(e,"specialAttention",{settings:{on:!0,toggle:!1},cache:{type:"local",dataType:"object",limit:{duration:6e4}}}),this.attentionList=new Set,this.needRefresh=!1,this.hasLogin=!1,this.setSpecialAttentionList=(e,t,i)=>{e.uidList&&e.uidList instanceof Array?(this.attentionList=new Set(e.uidList),this.setStore("attentionList",Array.from(this.attentionList)),i(!0)):i(!1)},this.getSpecialAttentionList=(e,t,i)=>{i(Array.from(this.attentionList))},this.getSpecialAttentionAccountList=(e,t,i)=>o(this,void 0,void 0,(function*(){const e=yield this.emit("bilibiliAccountController","getAccountList",{uidList:Array.from(this.attentionList)});i(e.map(e=>e.toJSON()))})),this.addSpecialAttention=(e,t,i)=>o(this,void 0,void 0,(function*(){if(e.uid){const{uid:t}=e;this.attentionList.has(String(t))?i(!1):(this.attentionList.add(String(t)),this.setStore("attentionList",Array.from(this.attentionList)),yield this.emit("bilibiliAccountController","create",{uid:String(t)},e=>{this.needRefresh=!0,i(e)}))}else i(!1)})),this.removeSpecialAttention=(e,t,i)=>{e.uid?(this.attentionList.delete(String(e.uid)),this.setStore("attentionList",Array.from(this.attentionList)),i(!0)):i(!1)},this.fetchSpecialAccountVideoData=(e,t,i)=>o(this,void 0,void 0,(function*(){if(e.uid){const t=yield this.getAccountVideos(String(e.uid),"publishDate",e.pn||1,e.ps||20);i(t)}else i(!1)})),this.fetchSpecialAccountLiveData=(e,t,i)=>o(this,void 0,void 0,(function*(){e.uid?this.getAccountLiveStatus(String(e.uid)).then(i):i(!1)})),this.getAccountVideos=(e,t="publishDate",i=1,o=25)=>new Promise(t=>{this.emit("bilibiliAccountController","getData",{uid:e,url:"https://api.bilibili.com/x/space/wbi/arc/search",data:{mid:e,pn:i,ps:o,order:"pubdate",index:1,order_avoided:!0,platform:"web",web_location:1550101}},t)}).then(({data:e})=>{var t;if(null===(t=null===e||void 0===e?void 0:e.list)||void 0===t?void 0:t.vlist){const t=e.list.vlist.map(e=>({videoInfo:{aid:e.aid,bvid:e.bvid,cover:e.pic.replace("http://","https://"),duration:e.length,title:e.title,publishDate:(0,r.videoPublishDescription)(1e3*e.created),description:e.description,isNew:Date.now()-1e3*e.created<864e5},userInfo:{name:e.author,uid:String(e.mid)}}));return{list:t||[],page:e.page||!1}}return!1}).catch(e=>{}),this.getAccountLiveStatus=e=>new Promise(t=>{this.emit("bilibiliAccountController","getSpaceInfo",{uid:e},t)}).then(({data:e={}})=>{const{code:t,data:i}=e;return!(0!==t||!i.live_room)&&(i.live_room||{})}).catch(e=>{}),this.getSpaceHTML=e=>{},this.onAfterSetSettingsFromCloud=()=>o(this,void 0,void 0,(function*(){let e=this.getStore("attentionList");e&&("string"===typeof e&&(e=JSON.parse(e.replaceAll("'","")),this.setStore("attentionList",e)),this.attentionList=new Set(e.map(e=>String(e))),this.emit("*","updateSpecialAttentionList",{list:Array.from(this.attentionList)}))})),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings,["on"]),stores:{attentionList:this.getStore("attentionList")}})}))}onInitStore(){return o(this,void 0,void 0,(function*(){let e=this.getStore("attentionList");"string"===typeof e&&(null===e||void 0===e?void 0:e.length)>=2&&(e=JSON.parse(e.replaceAll("'","")),this.setStore("attentionList",e.map(e=>String(e)))),void 0===e?(this.attentionList=new Set,this.setStore("attentionList",[])):this.attentionList=new Set(e.map(e=>String(e)))}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("setSpecialAttentionList",this.setSpecialAttentionList),this.addListener("getSpecialAttentionList",this.getSpecialAttentionList),this.addListener("getSpecialAttentionAccountList",this.getSpecialAttentionAccountList),this.addListener("addSpecialAttention",this.addSpecialAttention),this.addListener("removeSpecialAttention",this.removeSpecialAttention),this.addListener("fetchSpecialAccountVideoData",this.fetchSpecialAccountVideoData),this.addListener("fetchSpecialAccountLiveData",this.fetchSpecialAccountLiveData)}))}onBHAccountChange(e){return o(this,void 0,void 0,(function*(){this.hasLogin||(this.attentionList=new Set)}))}}t.SpecialAttention=a},43253:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i};Object.defineProperty(t,"__esModule",{value:!0}),t.BilibiliMessage=t.MESSAGE_TYPE_STRING=void 0;const r=i(12404),a=i(555),s={at:0,like:0,reply:0,sys_msg:0,follow_unread:0,unfollow_unread:0};t.MESSAGE_TYPE_STRING={at:"@\u6211\u7684",like:"\u70b9\u8d5e",reply:"\u56de\u590d",sys_msg:"\u7cfb\u7edf\u6d88\u606f",unread:"\u79c1\u4fe1"};const l={at:"at",like:"love",reply:"reply",sys_msg:"system",unread:"whisper"};class c extends r.Feature{constructor(e){super(e,"bilibiliMessage",{settings:{on:!1,rangeType:{at:!0,like:!0,reply:!0,sys_msg:!0,unread:!0},useBlackList:!1,duration:5,speech:!1},cache:{type:"local",dataType:"object"}}),this.hasLogin=!1,this.bilibiliAccount=null,this.bhAccount=null,this.notificationControllerOn=!1,this.latestList=[],this.newList=Object.assign({},s),this.needRecreatedClock=!1,this.onBeforeLaunch=()=>o(this,void 0,void 0,(function*(){this.addListener("notificationControllerStateChange",e=>{e.on?this.settings.on&&this.createBilibiliMessageClock():this.pause(),this.notificationControllerOn=e.on}),this.addListener("getUnreadInfo",(e,t,i)=>{this.update().then(e=>i(e))})})),this.createBilibiliMessageClock=()=>{(0,a.isVIP)(this.bhAccount)&&(this.emit("clockController","create",{name:"bilibiliMessage",alarmInfo:{periodInMinutes:this.hasLogin&&(0,a.isVIP)(this.bhAccount)?this.settings.duration:5},focus:!0,callback:()=>{this.update().then(this.sendNotification)}}),this.update())},this.update=()=>this.getLatestData().then(e=>{const t=Object.assign({},s);let i=["at","like","reply","sys_msg","follow_unread","unfollow_unread"].reduce((i,o)=>(void 0!==e[o]&&void 0!==this.latestList[o]&&e[o]!==this.latestList[o]&&(e[o]<this.latestList[o]?t[o]=0:(t[o]=e[o]-this.latestList[o],i+=1)),i),0);return this.newList=i?t:Object.assign({},s),this.latestList=e,{newList:this.newList,hasNew:i,latestList:this.latestList}}),this.getLatestData=()=>Promise.all([this.getUnreadInfo(),this.getSingleUnread()]).then(([e,t])=>Object.assign(Object.assign({},e),t)),this.getUnreadInfo=()=>this.bilibiliAccount&&this.bilibiliAccount.hasLogin?new Promise(e=>{this.emit("requestController","create",{url:"https://api.bilibili.com/x/msgfeed/unread?build=0&mobi_app=web",options:{contentType:"json"}},({data:t})=>{t&&0===t.code&&t.data?e(t.data||null):e(null)})}):Promise.resolve(null),this.getSingleUnread=(e=!0)=>this.bilibiliAccount&&this.bilibiliAccount.hasLogin?new Promise(t=>{this.emit("requestController","create",{url:`https://api.vc.bilibili.com/session_svr/v1/session_svr/single_unread?unread_type=${e?0:1}&build=0&mobi_app=web`,options:{contentType:"json"}},({data:e})=>{e&&0===e.code&&e.data?t(e.data||null):t(null)})}):Promise.resolve(null),this.sendNotification=({newList:e,hasNew:i})=>{const{on:o,rangeType:r}=this.settings;if(!o||!i)return;const{follow_unread:a,unfollow_unread:s}=e,c=n(e,["follow_unread","unfollow_unread"]);c.unread=a+s;const d=Object.keys(c).map(e=>!(!c[e]||!r[e])&&e).filter(Boolean),u=d.map(e=>!!c[e]&&t.MESSAGE_TYPE_STRING[e]+":"+c[e]).filter(Boolean).join(", ");if(d.length>0){const e=l[d[0]];this.emit("notificationController","post",{title:"\u60a8\u6709\u65b0\u7684\u6d88\u606f\uff0c\u8bf7\u6ce8\u610f\u67e5\u6536",icon:chrome.runtime.getURL("statics/images/bilibili-cat-256.png"),body:u,data:{url:"https://message.bilibili.com/#/"+e||"https://message.bilibili.com/#/reply"},actions:[{action:"watch",title:"\u7acb\u5373\u67e5\u770b"}],autoCloseInterval:1e4},()=>{if(this.settings.speech){const e=window.speechSynthesis,t=new SpeechSynthesisUtterance(`\u60a8\u6709${d.length}\u6761\u65b0\u7684\u6d88\u606f`);e.speak(t)}})}},this.onAfterSetSettingsFromCloud=()=>o(this,void 0,void 0,(function*(){this.isVIP||(this.settings.on=!1,this.pause())})),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onInitStore(){return o(this,void 0,void 0,(function*(){const e=this.getStore("blackList");void 0===e?(this.blackList=new Set([]),this.setStore("blackList",Array.from(this.blackList))):this.blackList=new Set(e)}))}onAfterSetSetting(e,t){return o(this,void 0,void 0,(function*(){this.emit("clockController","query",{name:"bilibiliMessage"},e=>{!t.on&&e||!this.isVIP?this.pause():e||this.createBilibiliMessageClock()})}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.bilibiliAccount&&this.bilibiliAccount.hasLogin&&this.settings.on&&this.emit("notificationController","getSetting",null,({on:e})=>{this.notificationControllerOn=e,this.notificationControllerOn&&this.settings.on&&this.createBilibiliMessageClock()})}))}onPause(){return o(this,void 0,void 0,(function*(){this.emit("clockController","clear",{name:"bilibiliMessage"},null)}))}onBHAccountChange(e){const t=Object.create(null,{onBHAccountChange:{get:()=>super.onBHAccountChange}});return o(this,void 0,void 0,(function*(){yield t.onBHAccountChange.call(this,e),this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.notificationControllerOn&&this.settings.on&&this.createBilibiliMessageClock():this.pause()}))}}t.BilibiliMessage=c},4458:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.SubscriptionDynamic=void 0;const n=i(90741),r=i(12404),a=i(83938),s=i(96582),l=i(58188),c=i(10243),d=i(44238);class u extends r.Feature{constructor(e){super(e,"subscriptionDynamic",{dependencies:["specialAttention"],settings:{on:!1,rangeType:"all",numberType:"theLatestThree",useWhiteList:!1,useBlackList:!1,duration:10,showCover:!1,showBadge:!0,noNotification:!1,notifyTypes:["8"]},cache:{type:"local",dataType:"object",limit:{duration:18e5}}}),this.hasLogin=!1,this.bilibiliAccount=null,this.notificationControllerOn=!1,this.specialAttentionList=[],this.typeList=[8],this.defaultTypeList=[8],this.offsetDynamicId=0,this.offsetDynamicIdMap={},this.list=[],this.newCardsIdList=new Set,this.sentList=[],this.recentDynamicId=0,this.onBeforeLaunch=()=>o(this,void 0,void 0,(function*(){this.addListener("updateSpecialAttentionList",e=>{this.specialAttentionList=e.list||[]}),this.addListener("clearCache",(e,t,i)=>{this.clearCache(),i(!0)}),this.addListener("getDynamic",(e,t,i)=>{if(this.bilibiliAccount&&this.bilibiliAccount.hasLogin){const{typeList:t,offsetDynamicId:o,clearCache:n,continuous:r}=e,a=String(t||this.defaultTypeList).split(",").map(e=>e.trim()).sort().join(","),s=void 0===o?this.offsetDynamicIdMap[t]:o;this.getDynamic(this.bilibiliAccount.uid,a,s,n,r).then(i)}else i(!1)}),this.addListener("notificationControllerStateChange",e=>{e.on&&"off"!==this.settings.rangeType&&this.createVideoDynamicClock(),this.notificationControllerOn=e.on}),this.addListener("getBlackList",(e,t,i)=>{i(Array.from(this.blackList))}),this.addListener("setBlackList",(e,t,i)=>{this.blackList=new Set(e.blackList),this.setStore("blackList",Array.from(this.blackList)),i(!0)}),this.addListener("getWhiteList",(e,t,i)=>{i(Array.from(this.whiteList))}),this.addListener("setWhiteList",(e,t,i)=>{this.whiteList=new Set(e.whiteList),this.setStore("whiteList",Array.from(this.whiteList)),i(!0)}),this.addListener("getNewList",(e,t,i)=>{i([...this.newCardsIdList])}),this.addListener("clearNewList",(e,t,i)=>{this.newCardsIdList=new Set,chrome.browserAction.setBadgeText({text:""}),i(!0)})})),this.getLocalAccount=()=>new Promise(e=>{this.emit("bilibiliAccountController","getLocalAccount",null,e)}),this.createVideoDynamicClock=()=>o(this,void 0,void 0,(function*(){this.emit("clockController","create",{name:"dynamic",alarmInfo:{periodInMinutes:this.hasLogin&&(0,l.isVIP)(this.bhAccount)?this.settings.duration:10},focus:!0,callback:()=>{this.checkNewCallback()}})})),this.clearCache=()=>{this.cache.set({cards:[],hasMore:!0,videoIdList:new Set},!0)},this.checkNewCallback=()=>{this.getLocalAccount().then(({uid:e})=>{const t=String(this.defaultTypeList),i=this.offsetDynamicIdMap[t];return i?this.checkNew(e,this.defaultTypeList,i,i).then(e=>e&&0===e.code?e.data.new_num:Promise.reject(e)).then(i=>{if(i)return this.getNew(e,this.defaultTypeList).then(e=>{var o,n;if(0===e.code&&e.data.cards.length>0&&i>0){const r=e.data.cards.slice(0,+i).map(e=>new d.DynamicObject(e).toJSON()).filter(e=>!this.newCardsIdList.has(e.dynamicInfo.dynamicIdStr)&&(this.newCardsIdList.add(e.dynamicInfo.dynamicIdStr),!0)),a=r?null===(n=null===(o=r[0])||void 0===o?void 0:o.dynamicInfo)||void 0===n?void 0:n.dynamicIdStr:null;if(a&&(this.logger.log("checkNewCallback",a),this.offsetDynamicIdMap[t]=a,!this.settings.noNotification)){const e=r.filter(e=>{var t,i;if(!this.sentList.includes(null===(t=null===e||void 0===e?void 0:e.dynamicInfo)||void 0===t?void 0:t.dynamicIdStr))return this.sentList.push(null===(i=null===e||void 0===e?void 0:e.dynamicInfo)||void 0===i?void 0:i.dynamicIdStr),this.sentList=this.sentList.slice(-100),!0});e.length>0&&this.sendNotificationByList(e)}this.settings.showBadge&&chrome.browserAction.setBadgeText({text:String(this.newCardsIdList.size)})}})}):this.getNew(e,this.defaultTypeList).then(e=>{var i,o,n;if(e&&0===e.code){if(e.data.cards&&e.data.cards.length>0){this.logger.log("getNewList",e.data.cards);const r=null===(n=null===(o=null===(i=e.data)||void 0===i?void 0:i.cards[0])||void 0===o?void 0:o.desc)||void 0===n?void 0:n.dynamic_id_str;r&&(this.logger.log("getNew",r),this.offsetDynamicIdMap[t]=r)}}else this.logger.error(e)})})},this.getDynamic=(e,t,i=0,o=!1,n=!1)=>{var r;const{expired:a}=this.cache.checkExpired();this.cache.clearCache(o);const s=this.cache.get();return s.videoIdList instanceof Array?s.videoIdList=new Set(s.videoIdList):s.videoIdList||(s.videoIdList=new Set),(null===s||void 0===s?void 0:s.cards)||(s.cards=[]),n||!(null===(r=null===s||void 0===s?void 0:s.cards)||void 0===r?void 0:r.length)||a?new Promise(o=>{(i?this.getHistory(e,i,t):this.getNew(e,t)).then(e=>new Promise((t,i)=>{const{code:o,data:n}=e||{};0===o?t(n):i(e)})).then(e=>{const{cards:t=[],has_more:r}=e,a=t.slice(-1),l=void 0!==r?!!r:t.length>=(i?20:19);if(a&&a[0]){let e=t.map(e=>new d.DynamicObject(e).toJSON()),i=e[0].dynamicInfo.dynamicIdStr;if(e=e.map(e=>(e.userInfo.uid&&(e.isSpecialAttention=this.specialAttentionList.includes(String(e.userInfo.uid))),e)).filter(e=>{if(!s.videoIdList.has(e.dynamicInfo.dynamicIdStr))return s.videoIdList.add(e.dynamicInfo.dynamicIdStr),!0}),0===e.length)return o(s);s.hasMore=l,s.offsetDynamicId=a[0].desc.dynamic_id_str,n||(this.getStore("recentDynamicId")!==i&&(this.recentDynamicId=this.getStore("recentDynamicId")||"0"),this.recentDynamicId!==i&&i>this.recentDynamicId&&this.setStore("recentDynamicId",i));const r=e.findIndex(e=>e.dynamicInfo.dynamicIdStr===this.recentDynamicId);(0===r&&s.cards.length>0||r>0)&&(s.cards=s.cards.filter(({type:e})=>"recentReadPosition"!==e),e.splice(r,0,{type:"recentReadPosition"})),s.cards.push(...e),this.cache.set(s),o(n?{hasMore:l,offsetDynamicId:a[0].desc.dynamic_id_str,cards:e}:s)}else o({hasMore:!1,cards:[],offsetDynamicId:i})}).catch(e=>{o({hasMore:!1,cards:[],offsetDynamicId:i})})}):Promise.resolve(s)},this.checkNew=(e,t,i,o)=>{const n="https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_num",r={uid:e,type:t,rsp_type:1,current_dynamic_id:i||o};return new Promise(e=>this.emit("requestController","create",{url:(0,s.generateURL)(n,r),options:{contentType:"json"}},({data:t})=>e(t))).catch(e=>{})},this.getHistory=(e,t,i)=>{const o="https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_history",n={uid:e,offset_dynamic_id:t,type:i};return new Promise(e=>this.emit("requestController","create",{url:(0,s.generateURL)(o,n),options:{contentType:"json"}},e)).then(({data:e})=>e)},this.getNew=(e,t)=>{const i="https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new",o={uid:e,type_list:t};return new Promise(e=>this.emit("requestController","create",{url:(0,s.generateURL)(i,o),options:{credential:"include",contentType:"json"}},e)).then(({data:e})=>!1===e?(this.emit("notificationController","post",{title:"\u6700\u65b0\u6295\u7a3f\u68c0\u6d4b\u5931\u8d25",tag:"subscriptionDynamic"}),Promise.reject()):e)},this.sendNotificationByList=e=>{const{on:t,rangeType:i,numberType:o,useBlackList:r,useWhiteList:s}=this.settings;if(!t||"off"===i||e&&0===e.length)return;let d=[...e];if(this.hasLogin&&(0,l.isVIP)(this.bhAccount)&&(s?d=d.filter(e=>this.whiteList.has(String(e.userInfo.uid))):("specialAttention"===i&&(d=e.filter(e=>this.specialAttentionList.includes(String(e.userInfo.uid)))),r&&(d=d.filter(e=>!this.blackList.has(String(e.userInfo.uid)))))),0!==d.length)if(this.hasLogin&&"merge"===o&&(0,l.isVIP)(this.bhAccount)){const e=(0,a.__)("subscriptionDynamic_videoNumberType_merge",[d.length]);this.emit("notificationController","post",{title:e,icon:chrome.runtime.getURL("statics/images/bilibili-cat-256.png"),data:{url:"https://t.bilibili.com/?tab=8"},actions:[{action:"watch",title:"\u7acb\u5373\u67e5\u770b"}],autoCloseInterval:1e4})}else{let e=d;this.hasLogin&&"theLatestThree"===o&&(0,l.isVIP)(this.bhAccount)&&(e=e.slice(-3)),e.forEach(({type:e,dynamicInfo:t,videoInfo:i,userInfo:o,musicInfo:r,articleInfo:a,originInfo:s})=>{const l=(null===i||void 0===i?void 0:i.title)||(null===r||void 0===r?void 0:r.title)||(null===a||void 0===a?void 0:a.title)||t.content||"",d=1===e?"\u521a\u8f6c\u53d1\u4e86 "+(1===s.type?"\u52a8\u6001":n.DYNAMIC_NAME_MAP[s.type]):"\u521a\u53d1\u4e86 "+n.DYNAMIC_NAME_MAP[e],u=(null===i||void 0===i?void 0:i.aid)?"https://www.bilibili.com/video/"+(0,c.av2bv)(+i.aid):"https://t.bilibili.com/"+t.dynamicIdStr;this.emit("notificationController","post",{title:`${o.name} ${d}`,body:l,icon:o.face,image:this.settings.showCover?null===i||void 0===i?void 0:i.cover:null,data:{url:u},actions:[{action:"watch",title:"\u7acb\u5373\u67e5\u770b"}],autoCloseInterval:1e4})})}},this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings),stores:{whiteList:this.getStore("whiteList"),blackList:this.getStore("blackList"),recentDynamicId:this.getStore("recentDynamicId")}})})),this.cache.remove()}onInitStore(){return o(this,void 0,void 0,(function*(){const e=this.getStore("blackList");void 0===e?(this.blackList=new Set([]),this.setStore("blackList",Array.from(this.blackList))):this.blackList=new Set(e.map(e=>String(e)));const t=this.getStore("whiteList");void 0===t?(this.whiteList=new Set([]),this.setStore("whiteList",Array.from(this.whiteList))):this.whiteList=new Set(t.map(e=>String(e))),this.defaultTypeList=String(this.settings.notifyTypes).split(",").map(e=>+e),(23===this.defaultTypeList.length||this.defaultTypeList.includes(+n.ALL_DYNAMIC_TYPE_MAP.ALL))&&(this.defaultTypeList=[n.ALL_DYNAMIC_TYPE_MAP.ALL]);const i=this.cache.get();i&&i.cards||this.cache.set({cards:[],newOffsetDynamicId:-1,hasMore:!0,videoIdList:new Set},!0),this.recentDynamicId=this.getStore("recentDynamicId")||"0"}))}onAfterSetSetting(e,t){return o(this,void 0,void 0,(function*(){this.defaultTypeList=String(this.settings.notifyTypes).split(",").map(e=>+e),(23===this.defaultTypeList.length||this.defaultTypeList.includes(+n.ALL_DYNAMIC_TYPE_MAP.ALL))&&(this.defaultTypeList=[n.ALL_DYNAMIC_TYPE_MAP.ALL]),this.emit("clockController","query",{name:"dynamic"},e=>{!t.on&&e?this.pause():e||this.createVideoDynamicClock()})}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.bilibiliAccount&&this.bilibiliAccount.hasLogin&&this.settings.on&&Promise.all([this.emit("notificationController","getSetting",null,({on:e})=>e),this.emit("specialAttention","getSpecialAttentionList",{},e=>e||[])]).then(([e,t])=>{this.notificationControllerOn=e,this.specialAttentionList=t}).then(()=>{this.notificationControllerOn&&"off"!==this.settings.rangeType&&this.createVideoDynamicClock()})}))}onPause(){return o(this,void 0,void 0,(function*(){this.emit("clockController","clear",{name:"dynamic"},null)}))}onBHAccountChange(e){const t=Object.create(null,{onBHAccountChange:{get:()=>super.onBHAccountChange}});return o(this,void 0,void 0,(function*(){yield t.onBHAccountChange.call(this,e),this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.notificationControllerOn&&this.settings.on&&(yield this.createVideoDynamicClock()):yield this.pause()}))}}t.SubscriptionDynamic=u},6787:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(4458),t),n(i(33376),t),n(i(43253),t)},33376:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.BilibiliLiveBroadcast=void 0;const n=i(12404),r=i(555);class a extends n.Feature{constructor(e){super(e,"bilibiliLiveBroadcast",{dependencies:["specialAttention"],settings:{on:!1,rangeType:"all",useBlackList:!1,useWhiteList:!1,duration:10,showCover:!1},cache:{dataType:"array",limit:{duration:12e4}}}),this.hasLogin=!1,this.bilibiliAccount=null,this.notificationControllerOn=!1,this.specialAttentionList=[],this.currentList=[],this.lastList=[],this.needRecreatedClock=!1,this.onBeforeLaunch=()=>o(this,void 0,void 0,(function*(){this.addListener("updateSpecialAttentionList",e=>{this.specialAttentionList=e.list||[]}),this.addListener("getLiveFeedList",(e,t,i)=>{const{pn:o,ps:n}=e;this.getLiveFeedBroadcastingList(o,n).then(e=>i(e))}),this.addListener("getFullSimpleLiveList",(e,t,i)=>{const{expired:o}=this.cache.checkExpired(),n=this.cache.get();!o&&n.length>0?i(this.cache.get()):this.getSimpleLiveFeedBroadcastingList([],1,29,!0).then(e=>{e&&e.length>0&&this.cache.set(e),i(e)})}),this.addListener("notificationControllerStateChange",e=>{e.on&&"off"!==this.settings.rangeType&&this.createLiveClock(),this.notificationControllerOn=e.on}),this.addListener("getBlackList",(e,t,i)=>{i(Array.from(this.blackList))}),this.addListener("setBlackList",(e,t,i)=>{e.blackList=e.blackList.map(e=>String(e)),this.blackList=new Set(e.blackList),this.setStore("blackList",Array.from(this.blackList)),i(!0)}),this.addListener("getWhiteList",(e,t,i)=>{i(Array.from(this.whiteList))}),this.addListener("setWhiteList",(e,t,i)=>{e.whiteList=e.whiteList.map(e=>String(e)),this.whiteList=new Set(e.whiteList),this.setStore("whiteList",Array.from(this.whiteList)),i(!0)})})),this.createLiveClock=()=>{this.emit("clockController","create",{name:"live",alarmInfo:{periodInMinutes:this.hasLogin&&(0,r.isVIP)(this.bhAccount)?this.settings.duration:10},focus:!0,callback:()=>{this.checkNew()}})},this.getLocalUserId=()=>new Promise(e=>{this.emit("cookieController","message",{command:"getLocalUserId"},e)}),this.checkNew=(e=!1)=>o(this,void 0,void 0,(function*(){if(this.hasLogin)return yield this.getSimpleLiveFeedBroadcastingList([],1,29,!0).then(t=>{const{current:i,list:o,count:n}=this.getDifferent(this.currentList,t);return this.currentList=i,n>0&&!e?o:[]}).then(e=>{0!==e.length&&this.sendNotificationByList(e)}).catch(e=>{})})),this.getDifferent=(e,t)=>{const i=[];let o=0;return t.forEach(({owner:n},r)=>{let a=!1;e.forEach(({owner:e})=>{n.mid===e.mid&&(a=!0)}),a||(i.push(t[r]),o+=1)}),{current:t,list:i,count:o}},this.getSimpleLiveFollowList=(e=1,t=29,i=!1)=>new Promise(i=>{setTimeout(()=>{this.emit("requestController","create",{url:`https://api.live.bilibili.com/xlive/web-ucenter/user/following?page=${e}&page_size=${t}&_=`+Date.now(),options:{contentType:"json"}},i)},500)}).then(({data:e})=>{if(!1===e)return this.emit("notificationController","post",{title:"\u5f00\u64ad\u68c0\u6d4b\u5931\u8d25",tag:"bilibiliLiveBroadcast"}),Promise.reject();if(0===e.code){let t=!1,o=e.data.list.map(({face:e,title:i,uname:o,uid:n,roomid:r,live_status:a})=>(a||(t=!0),{title:i,owner:{name:o,mid:String(n),face:e},roomId:r,living:!!a}));return i&&(o=o.filter(({living:e})=>e)),{rooms:o,count:e.data.count,toEnd:i?t:i}}return Promise.reject()}),this.getSimpleLiveFeedBroadcastingList=(e=[],t=1,i=29,n=!1)=>o(this,void 0,void 0,(function*(){return yield this.getSimpleLiveFollowList(t,i,n).then(({rooms:o,count:r,toEnd:a})=>(this.logger.log(a,o,r,e),a?(o=o.filter(e=>!!e.living),e.push(...o),e):(e.push(...o),e.length<r?this.getSimpleLiveFeedBroadcastingList(e,t+1,i,n):e)))})),this.getLiveFeedBroadcastingList=(e=1,t=10)=>new Promise(i=>this.emit("requestController","create",{url:`https://api.live.bilibili.com/xlive/web-ucenter/v1/xfetter/GetWebList?page=${e}&page_size=${t}0&_=1616494848160`+Date.now(),options:{contentType:"json"}},i)).then(({data:e})=>{if(0===e.code)return{rooms:e.data.rooms.map(({keyframe:e,cover_from_user:t,title:i,nickname:o,uid:n,face:r,roomid:a,link:s,area_v2_name:l,tags:c})=>({cover:t||e,title:i,owner:{name:o,mid:String(n),face:r},roomId:a,link:s,areaName:l,tag:c})),count:e.data.count}}),this.sendNotificationByList=e=>{const{on:t,rangeType:i,useBlackList:o,useWhiteList:n}=this.settings;if(!t||"off"===i||!this.hasLogin)return;let a=[...e];(0,r.isVIP)(this.bhAccount)&&(n?a=a.filter(e=>this.whiteList.has(e.owner.mid)):("specialAttention"===i&&(a=e.filter(e=>this.specialAttentionList.includes(e.owner.mid))),o&&(a=a.filter(e=>!this.blackList.has(e.owner.mid))))),0!==a.length&&a.forEach(e=>{const{title:t,roomId:i,owner:o}=e;this.getRoomInfo(o.mid).then(e=>{this.emit("notificationController","post",{title:`\u4e3b\u64ad\u300c${o.name}\u300d\u5f00\u64ad\u5566! `,icon:o.face,image:this.settings.showCover?e:null,body:t,data:{url:"https://live.bilibili.com/"+i},actions:[{action:"watch",title:"\u7acb\u5373\u67e5\u770b"}],autoCloseInterval:1e4})})})},this.getRoomInfo=e=>new Promise(t=>{this.emit("requestController","create",{url:"https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByRoom?room_id="+e,options:{contentType:"json"}},({data:e})=>{e&&0===e.code&&e.data.room_info?t(e.data.room_info.cover||e.data.room_info.keyframe||null):t(null)})}),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings),stores:{whiteList:this.getStore("whiteList"),blackList:this.getStore("blackList")}})}))}onInitStore(){return o(this,void 0,void 0,(function*(){const e=this.getStoreByCompleteName("subscriptionLiveBroadcast-config");e&&(yield this.setSetting(e),this.deleteStoreByCompleteName("subscriptionLiveBroadcast-config"));let t=this.getStore("blackList");const i=this.getStoreByCompleteName("subscriptionLiveBroadcast-data_blackList");i&&(this.deleteStoreByCompleteName("subscriptionLiveBroadcast-data_blackList"),t=Array.from(new Set([...i,...t||[]]))),void 0===t?(this.blackList=new Set([]),this.setStore("blackList",Array.from(this.blackList))):(t=t.map(e=>String(e)),this.blackList=new Set(t));let o=this.getStore("whiteList");const n=this.getStoreByCompleteName("subscriptionLiveBroadcast-data_whiteList");n&&(this.deleteStoreByCompleteName("subscriptionLiveBroadcast-data_whiteList"),o=Array.from(new Set([...n,...o||[]]))),void 0===o?(this.whiteList=new Set([]),this.setStore("whiteList",Array.from(this.whiteList))):(o=o.map(e=>String(e)),this.whiteList=new Set(o))}))}onAfterSetSetting(e,t){return o(this,void 0,void 0,(function*(){this.emit("clockController","query",{name:"live"},e=>{!t.on&&e?this.pause():e||this.createLiveClock()})}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.bilibiliAccount&&this.bilibiliAccount.hasLogin&&this.hasLogin&&this.settings.on&&Promise.all([this.emit("notificationController","getSetting",null,({on:e})=>e),this.emit("specialAttention","getSpecialAttentionList",{},e=>e||[])]).then(([e,t])=>{this.notificationControllerOn=e,this.specialAttentionList=t}).then(()=>{this.lastList=this.cache.get(),this.notificationControllerOn&&"off"!==this.settings.rangeType&&this.createLiveClock(),this.checkNew(!0)})}))}onPause(){return o(this,void 0,void 0,(function*(){this.emit("clockController","clear",{name:"live"},null)}))}onBHAccountChange(e){const t=Object.create(null,{onBHAccountChange:{get:()=>super.onBHAccountChange}});return o(this,void 0,void 0,(function*(){yield t.onBHAccountChange.call(this,e),this.bilibiliAccount&&this.bilibiliAccount.hasLogin?this.notificationControllerOn&&this.settings.on&&this.createLiveClock():this.pause()}))}}t.BilibiliLiveBroadcast=a},79432:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const n=i(555),r=(i(10243),".bilibili-player-video-control .bilibili-player-iconfont.bilibili-player-iconfont-danmaku"),a=".bilibili-player-video-danmaku-switch input[type=checkbox], .bpx-player-dm-root .bui-switch-input, .bui-danmaku-switch-input";let s,l;const c=()=>o(void 0,void 0,void 0,(function*(){s=document.querySelector(r),s&&!s.getAttribute("bilibili-helper-data")?(s.setAttribute("bilibili-helper-data",!0),s.click()):(0,n.interval)(a).then(e=>{setTimeout(()=>{e&&e.click&&e.checked&&e.click()},1e3)})}));chrome.runtime.sendMessage({target:"videoHideDanmu",event:"getSetting"},e=>{e.on&&(0,n.interval)(".bpx-player-sending-bar .bpx-player-dm-root,\n         .bilibili-player-video-sendbar .bilibili-player-video-danmaku-root,\n         .bpx-player-sending-bar .bpx-player-dm-root").then(e=>o(void 0,void 0,void 0,(function*(){e&&(yield c(),new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.length>0&&e.addedNodes.forEach(e=>{"VIDEO"!==e.tagName&&"INPUT"!==e.tagName||(s=document.querySelector(r),l=document.querySelector(a),setTimeout(c,1e3))})})}).observe(e,{subtree:!0,childList:!0}))})))})},63521:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoHideDanmu=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"videoHideDanmu",{settings:{on:!1}}),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}}t.VideoHideDanmu=r},47842:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__asyncValues||function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,i=e[Symbol.asyncIterator];return i?i.call(e):(e="function"===typeof __values?__values(e):e[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(i){t[i]=e[i]&&function(t){return new Promise((function(o,r){t=e[i](t),n(o,r,t.done,t.value)}))}}function n(e,t,i,o){Promise.resolve(o).then((function(t){e({value:t,done:i})}),t)}};Object.defineProperty(t,"__esModule",{value:!0});const r=i(53507),a=i(555),s=i(10243),l=()=>new Promise(e=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getBHAccount"},t=>{e(null===t||void 0===t?void 0:t.boundBlid)})}),c=()=>new Promise(e=>{(0,a.interval)("#v_upinfo .u-face .fa, .up-card a.avatar, .avatar-list .scroll-inside a, .up-info_right .username, .wide-members-container .scroll-inside a, .up-info_right .name a, .up-detail .up-name, .members-info-container .membersinfo-upcard-wrap .avatar",1e3).then(t=>{if(t){const t=Array.from(document.querySelectorAll("#v_upinfo .u-face .fa, .members-info .up-card a.avatar, .avatar-list .scroll-inside a, .up-info_right .username, .wide-members-container .scroll-inside a, .up-info_right .name a, #member-container .up-card a, .up-detail .up-name, .members-info-container .membersinfo-upcard-wrap .avatar")).map(e=>{const t=e.href.match(/space\.bilibili\.com\/(\d+?)$/);return!!t&&t[1]}).filter(Boolean);e(t)}else e([])})}),d=()=>o(void 0,void 0,void 0,(function*(){const e="getUserCoins";return yield(0,a.getPageDataInWindow)(`(() => {\n        let retryTimes = 0;\n            const t = setInterval(() => {\n                if (window?.UserStatus?.userInfo?.money !== undefined) {\n                    window.postMessage({command: '${e}', pageData: window?.UserStatus?.userInfo?.money}, '*');\n                    clearInterval(t);\n                } else {\n                    ++retryTimes;\n                }\n                if (retryTimes === 300) {\n                    clearInterval(t);\n                }\n            }, 1000);\n        })()`,e)})),u=()=>(0,a.injectStyle)("bilibiliHelperAutoLikeCoinCollectStyle","\n        .bili-dialog-m, .bili-dialog-m {\n            display: none;\n        }\n    "),p=e=>o(void 0,void 0,void 0,(function*(){return new Promise(t=>{if(!e)return t(!1);(0,a.interval)("#arc_toolbar_report .like, #toolbar_module .like-info, .video-like:not(.on)").then(e=>e?e.classList.contains("on")?t(!1):(e.click(),void t(!0)):t(!1))})})),h=(e,t)=>o(void 0,void 0,void 0,(function*(){const i=yield d();return new Promise(o=>e?void 0!==i&&i<t?(r.Message.info(`\u786c\u5e01\u4e0d\u591f\u5566(${i}/${t})`),o(!1)):void(0,a.interval)("#arc_toolbar_report .coin, #toolbar_module .coin-info, .video-coin:not(.on)").then(e=>e?e.classList.contains("on")?o(!1):(e.click(),void(0,a.interval)(".coin-operated-m .like-checkbox, .bili-dialog-m .like-checkbox, .coin-operated .like-checkbox").then(e=>{if(!e)return o(!1);e.click(),document.querySelector(".coin-operated-m .like-checkbox input, .bili-dialog-m .like-checkbox input, .coin-operated .like-checkbox input").click(),1===t?document.querySelector(".coin-operated-m .left-con, .bili-dialog-m .left-con, .coin-operated .left-con").click():document.querySelector(".coin-operated-m .right-con, .bili-dialog-m .right-con, .coin-operated .right-con").click(),setTimeout(()=>{document.querySelector(".coin-operated-m .coin-bottom .bi-btn, .bili-dialog-m .bi-btn, .coin-operated .coin-btn").click(),o(!0)},500)})):o(!1)):o(!1))})),m=(e,t)=>o(void 0,void 0,void 0,(function*(){return new Promise(i=>{if(!e)return i(!1);(0,a.interval)("#arc_toolbar_report .collect, .video-fav:not(.on)").then(e=>e?e.classList.contains("on")?i(!1):(e.click(),void chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"fetchCollectionList"},e=>{(0,a.interval)(".collection-m .group-list label, .collection-m-exp .group-list label",400).then(o=>{o||i(!1);const n=e.find(({id:e})=>e===+t),r=Array.from(document.querySelectorAll(".collection-m .group-list label, .collection-m-exp .group-list label")),a=r.find(e=>{const t=e.querySelector(".fav-title").textContent;return t===n.title});a?(a.click(),setTimeout(()=>{const e=document.querySelector(".collection-m .bottom .submit-move, .collection-m-exp .bottom .submit-move");e.click(),i(!0)},300)):i(!1)})})):i(!1))})}));let f=!1;chrome.runtime.onMessage.addListener((e,t,i)=>{if("initAutoLikeCoinCollect"===e.command){if(f)return;f=!0,l().then(e=>{const t=()=>{c().then((t=[])=>{chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"getFeatureConfig"},i=>o(void 0,void 0,void 0,(function*(){var o,a,s,l;i=new Map(i);let c=!1;try{for(var d,f=!0,b=n(t);d=yield b.next(),o=d.done,!o;f=!0){l=d.value,f=!1;let t=l;const o=i.get(t);if(o&&(!e||t!==e)){const e=u(),t=yield p(o.like).catch(e=>{}),i=yield h(o.coin,o.coinNumber),n=yield m(o.collect,o.collectionId);if((t||i||n)&&(r.Message.info("\u52a9\u624b\u732b\u4e00\u952e\u4e09\u8fde\u54af"),c=!0),setTimeout(()=>{e.remove()},1e3),c)break}}}catch(e){a={error:e}}finally{try{f||o||!(s=b.return)||(yield s.call(b))}finally{if(a)throw a.error}}})))})};(0,s.onVideoChange)(t)}),i(!0)}else i(!1);return!0}),chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"getSetting"},e=>{e.on&&chrome.runtime.sendMessage({command:"autoLikeCoinCollectDOMInitialized"})})},49260:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AutoLikeCoinCollect=void 0;const r=i(38845),a=n(i(52296)),s=i(555);class l extends r.Feature{constructor(e){super(e,"autoLikeCoinCollect",{dependencies:["specialAttention"],settings:{on:!0,pushNotification:!0}}),this.hasLogin=!1,this.featureConfigMap=new Map,this.messageStore=new r.MessageStore("autoLikeCoinCollectDOMInitialized"),this.setFeatureConfig=(e,t,i)=>o(this,void 0,void 0,(function*(){const{uid:t,type:o,value:n,extraValue:r}=e;if(t){let e=this.featureConfigMap.get(t)||{};e[o]=n,n&&("coin"!==o||isNaN(r)?"collect"!==o||isNaN(r)||(e.collectionId=r):e.coinNumber=r>2?2:r),this.featureConfigMap.set(t,e),this.setStore("featureConfigMap",Array.from(this.featureConfigMap.entries())),i(!0)}else i(!1)})),this.getFeatureConfig=(e,t,i)=>o(this,void 0,void 0,(function*(){i(Array.from(this.featureConfigMap.entries()))})),this.removeUserConfig=(e,t,i)=>o(this,void 0,void 0,(function*(){const{uid:t}=e;t?(this.featureConfigMap.delete(t),this.setStore("featureConfigMap",Array.from(this.featureConfigMap.entries())),i(!0)):i(!1)})),this.fetchCollectionList=(e,t,i)=>o(this,void 0,void 0,(function*(){this.bilibiliAccount?this.emit("requestController","create",{url:"https://api.bilibili.com/x/v3/fav/folder/created/list-all?up_mid="+this.bilibiliAccount.uid,options:{contentType:"json"}},({data:e})=>{0===e.code&&i(e.data.list)}):i([])})),this.watcherCallback=(0,s.webRequestCallbackWrapper)(e=>{const{tabId:t}=e,i=new a.default(e.url,"",!0),{pathname:o,query:n}=i;if(n.passWrapper)return;if(n&&n.requestFrom)return;const r=this.messageStore.createData(t);r.queue.push({command:"initAutoLikeCoinCollect",type:"init",data:n}),this.messageStore.dealWith(t)}),this.onAfterSetSettingsFromCloud=()=>o(this,void 0,void 0,(function*(){const e=this.getStore("featureConfigMap");e&&(this.featureConfigMap=new Map(e))})),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings),stores:{featureConfigMap:this.getStore("featureConfigMap")}})}))}onInitStore(){return o(this,void 0,void 0,(function*(){let e=this.getStore("featureConfigMap");void 0===e?(this.featureConfigMap=new Map,this.setStore("featureConfigMap",[])):(e instanceof Array||(e=[]),this.featureConfigMap=new Map(e.map(([e,t])=>[String(e),t])),this.setStore("featureConfigMap",Array.from(this.featureConfigMap.entries())))}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("setFeatureConfig",this.setFeatureConfig),this.addListener("getFeatureConfig",this.getFeatureConfig),this.addListener("removeUserConfig",this.removeUserConfig),this.addListener("fetchCollectionList",this.fetchCollectionList)}))}onLaunch(){return o(this,void 0,void 0,(function*(){yield this.emit("specialAttention","getSpecialAttentionList",null,e=>{const t=this.featureConfigMap.size;e.forEach(e=>{this.featureConfigMap.has(e)||this.featureConfigMap.delete(e)}),t!==this.featureConfigMap.size&&(this.setStore("featureConfigMap",Array.from(this.featureConfigMap.entries())),this.emit("bilibiliHelperAccountController","uploadSettings",{featureName:"autoLikeCoinCollect"}))}),this.emit("webRequestController","create",{name:"autoLikeCoinCollectVideoWatcher",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.bilibili.com/x/web-interface/archive/relation?*"]},options:["requestHeaders"],callback:this.watcherCallback})}))}}t.AutoLikeCoinCollect=l},50156:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const n=i(555),r=i(10243);let a=!1;const s=()=>{var e;if((0,r.isWatchLaterPage)()){let t=document.querySelector(".player-auxiliary-btn-playlist-order.player-tooltips-trigger");if(t)return"reverse"===(null===(e=t.dataset)||void 0===e?void 0:e.order)?-1:1;t=document.querySelector(".list-playorder-btn");let i=null===t||void 0===t?void 0:t.getAttribute("title");if(i)return"\u987a\u5e8f\u64ad\u653e"===i?1:-1}return 1},l=()=>o(void 0,void 0,void 0,(function*(){return new Promise(e=>{(0,n.interval)(".player-auxiliary-collapse-playlist .player-auxiliary-playlist-count,.video-sections-content-list,.playlist-container .action-list-container, [class^=eplist_ep_list_wrapper]",500,5).then(t=>{var i,o;const r=!!t;let a="close"!==localStorage.getItem((0,n.isBangumiPage)()?"squirtleAutoChange":"recommend_auto_play");if(r){const t=document.querySelector(".player-auxiliary-collapse-playlist .player-auxiliary-playlist-count,.video-sections-head .cur-page,.base-video-sections .cur-page,.playlist-container .action-list-container .list-count,[class^=eplist_ep_list_progress]"),[n,l]=null!==(o=null===(i=null===t||void 0===t?void 0:t.textContent)||void 0===i?void 0:i.replace(/\(|\)/g,"").split("/").map(Number))&&void 0!==o?o:[],c=s()>0?n===l:1===+n;e([a,r,c,1])}else e([a,r,!0])})})})),c=()=>o(void 0,void 0,void 0,(function*(){return new Promise(e=>{(0,n.interval)("\n        #multi_page,\n        #eplist_module .list-wrapper ul\n        ",500,5).then(t=>{a=!!t;let i="close"!==localStorage.getItem("recommend_auto_play");if(a){const t=document.querySelector("#multi_page .cur-page, #eplist_module .ep-list-progress");if(null===t||void 0===t?void 0:t.textContent){const[o,n]=t.textContent.replace(/[()]/g,"").split("/"),r=s()>0?o===n:1===+o;e([i,a,r,2])}else e([i,a,!1,2])}else e([i,a,!0])})})}));let d=null;const u=(e,t)=>o(void 0,void 0,void 0,(function*(){var i,o;if(d)return d;if(e=void 0!==e?null===(i=yield l())||void 0===i?void 0:i[1]:e,e&&(d=document.querySelector(".player-auxiliary-autoplay-switch input,.video-sections .first-line-right .switch-button,.video-sections-head .switch-button")),!d&&e){const[e,t]=yield(0,n.interval)(".bpx-player-ctrl-setting-handoff-content input, .squirtle-handoff > div").then(()=>{const[e,t]=Array.from(document.querySelectorAll(".bpx-player-ctrl-setting-handoff-content input, .squirtle-handoff > div"))||[];if("0"===(null===e||void 0===e?void 0:e.value)||"0"===(null===e||void 0===e?void 0:e.dataset.value))return[e,t]});if(e&&t)return[e,t]}return t=void 0!==t?null===(o=yield c())||void 0===o?void 0:o[1]:t,!d&&t&&(d=document.querySelector("#multi_page .head-right .switch-button"),d||(d=yield(0,r.getAutoPlayModeButtons)())),d||(d=document.querySelector("#reco_list .rec-title .switch-button")),d}));let p=null,h=0;const m=(e,t=!0,i)=>o(void 0,void 0,void 0,(function*(){var o,n;if(i||(i=yield u()),i instanceof Array){const[e,r]=i;(null===(o=null===e||void 0===e?void 0:e.classList)||void 0===o?void 0:o.contains("active"))||(null===(n=null===r||void 0===r?void 0:r.classList)||void 0===n?void 0:n.contains("active"))?e.classList.contains("active")^t&&(t?e.click():r.click()):void 0!==e.checked&&e.checked^t&&(t?e.click():r.click())}else i&&e!==t&&(i.classList.contains("switch-button")?p=setInterval(()=>{const t=i.classList.contains("on");e===t?(null===i||void 0===i||i.click(),clearInterval(p)):h+=1,h>=30&&clearInterval(p)},500):null===i||void 0===i||i.click())})),f=()=>o(void 0,void 0,void 0,(function*(){return Promise.race([l(),c()]).then(([e,t,i,n])=>o(void 0,void 0,void 0,(function*(){const o=yield u(1===n?t:null,2===n?t:null);t?yield m(e,!i,o):yield m(e,!1,o)})))}));chrome.runtime.sendMessage({target:"videoAutoPlayMode",event:"getSetting"},e=>{if(e.on){if((0,r.isWatchLaterPage)())return void(0,n.interval)(".player-auxiliary-btn-playlist-order.player-tooltips-trigger,.list-playorder-btn").then(e=>{e&&e.addEventListener("click",()=>{f()})});(0,r.onVideoChange)(e=>o(void 0,void 0,void 0,(function*(){e&&(yield f())})))}})},95353:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoAutoPlayMode=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"videoAutoPlayMode",{settings:{on:!1}}),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}}t.VideoAutoPlayMode=r},85417:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const n=i(20837),r=i(10243);let a=null,s=!1;const l=new Event("click",{bubbles:!0,cancelable:!1}),c=e=>o(void 0,void 0,void 0,(function*(){yield new Promise(e=>{s?e(!0):(0,n.interval)("#bilibiliPlayer .bilibili-player-video-control-bottom-right, .squirtle-controller-wrap-right, .bpx-player-control-bottom-right",400,-1).then(t=>{s=!!t,e(s)})}).then(t=>o(void 0,void 0,void 0,(function*(){const i=yield(0,r.getCurrentWideType)();if(!t||i===e)return;let o=null;switch(e){case"wide":o=yield(0,r.getNormalWidenButton)(!1,!1);break;case"web":o=yield(0,r.getWebWidenButton)(!1,!1);break;case"full":o=yield(0,r.getFullFillWidenButton)(!1,!1)}o&&o.click&&a!==e&&(a=e,o.dispatchEvent(l))})))}));chrome.runtime.sendMessage({target:"videoWiden",event:"getSetting"},e=>o(void 0,void 0,void 0,(function*(){e.on&&(yield(0,r.onVideoChange)(t=>o(void 0,void 0,void 0,(function*(){t&&(s=!1,a=yield(0,r.getCurrentWideType)(),a!==e.widenType&&"full"!==a&&(yield c(e.widenType)))}))))})))},41465:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoWiden=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"videoWiden",{settings:{on:!1,widenType:"default"}}),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}}t.VideoWiden=r},76143:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Danmu=void 0;const l=i(51920),c=i(95947),d=s(i(55522)),u=i(6053),p=s(i(32699)),h=i(4258),m=s(i(57689)),f=i(96692);i(71009);const b=r(i(635)),v=i(96691),g=s(i(52296)),y=i(555),w=s(i(88648));i(43255);const{color:k}=v.theme,x=new u.Crc32Engine,S=b.createGlobalStyle`
  .bili-dm.bili-show {
    .bili-dm-vip {
      background: none !important;
      --textShadow: 1px 0 1px #000000, 0 1px 1px #000000,0 -1px 1px #000000, -1px 0 1px #000000 !important;
      text-shadow: var(--textShadow) !important;
    }
  }
`,_=b.default.div`
  position: relative;

  .danmu-wrapper {
    position: relative;
  }
`,O=b.default.div.attrs({className:"bilibili-helper-danmu-title"})`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  color: #222;

  .count {
    margin-left: 10px;
    color: ${k("google-grey-500")};
  }
`,C=(0,b.default)(f.List).attrs({className:"bilibili-helper-danmu-list"})`
  position: relative;
  min-height: 100px;
  max-height: 230px;
  margin-left: 4px;
  padding: 1px;
  border: 1px solid #eee;
  border-radius: 4px 4px 0 0;
  font-size: 12px;
  overflow: hidden;
  outline: none;
  width: 100%;

  & .no-data {
  }
`,L=b.default.div.attrs({className:"bilibili-helper-danmu-list"})`
  position: relative;
  min-height: 60px;
  max-height: 200px;
  margin-left: 4px;
  padding: 1px;
  border: 1px solid #eee;
  border-radius: 4px 4px 0 0;
  font-size: 12px;
  overflow: hidden;
  outline: none;

  .description {
    margin: 8px 0;
    text-align: center;
    color: #666;
  }

  .load-danmuku-button {
    //margin: 8px 0;
    width: calc(100% - 8px);
    height: 32px;
  }

  button {
    display: block;
    position: relative;
    margin: 4px;
    padding: 3px 12px;
    border: none;
    border-radius: 3px;
    font-size: 12px;
    letter-spacing: 0.3px;
    word-break: break-all;
    background-color: rgb(234, 244, 255);
    color: rgb(0, 161, 214);
    transition: all 0.3s ease 0s, visibility 0s ease 0s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      color: #004c65;
      background-color: #d4eaff;
    }
  }
`,P=b.default.div`
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  left: 5px;
  box-sizing: border-box;
  padding: 6px;
  background-color: #fff;
  visibility: hidden;
  font-size: 12px;
  opacity: 0;
  transition: opacity .3s, visibility .3s;
  overflow: auto;

  &.show {
    visibility: visible;
    opacity: 1;
  }

  .reason-radio-group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4px;
    margin: 8px 0;

    label {
      padding-left: 8px;
      height: 24px;
      line-height: 20px;
      cursor: pointer;

      input[type="radio"] {
        margin-right: 4px;
        appearance: auto;
        vertical-align: middle;
      }
    }
  }

  .report-content {
    margin: 4px 0 16px;
    padding: 4px;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid #ddd;
  }

  .action-box {
    display: flex;
    flex-direction: row-reverse;

    .button {
      height: 28px;
      line-height: 28px;
    }

    .confirm-report {
      margin-left: 8px;
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
    }

    .cancel {
      box-sizing: border-box;
      border: 1px solid #eee;
    }
  }
`,T=b.default.input.attrs({className:"bilibili-helper-danmu-input"})`
  display: block;
  width: calc(100% - 4px);
  margin-left: 4px;
  padding: 4px 6px;
  box-sizing: border-box;
  border: 1px solid #eee;
  border-top: none;
  border-radius: 0 0 4px 4px;
  font-size: 12px;
`,I=b.default.div`
  display: flex;
  margin-bottom: 1px;
  padding: 0 8px 1px;
  line-height: 20px;
  background-color: ${({hasQueried:e})=>e?"#d6e8f5":"white"};
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #00a1d6;

    .target-words {
      color: #fff;
    }
  }

  & .time {
    flex-grow: 0;
    flex-shrink: 0;
    min-width: 30px;
    padding-right: 6px;
  }

  & .danmu {
    position: relative;
    flex-grow: 1;
    margin: 0 7px 0 3px;
    padding: 0 7px;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    .button {
      position: absolute;
      top: 2px;
      right: 2px;
      height: 18px;
      line-height: 18px;
      vertical-align: bottom;
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
      zoom: 0.9;
      visibility: hidden;
    }

    &:hover {
      .button {
        visibility: visible;
      }
    }
  }

  & .author {
    flex-shrink: 0;
    width: 100px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  & .target-words {
    font-weight: bold;
    color: #00a1d6;
  }
`,D=b.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 23px;
  right: 1px;
  bottom: 1px;
  left: 1px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: rgba(255, 255, 255, 0.8);
  cursor: no-drop;
  user-select: none;
`,M=(0,b.default)(c.Button)`
  margin-left: 10px;
  padding: 0;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  font-weight: normal;
  border: 1px solid ${k("bilibili-blue")};
  border-radius: 4px;
  color: ${({on:e})=>e?"#fff":k("bilibili-blue")};
  background-color: ${({on:e})=>e?k("bilibili-blue"):"#fff"};

  button {
    min-width: 35px;
  }
`,A={1:"\u8fdd\u6cd5\u8fdd\u7981",2:"\u8272\u60c5\u4f4e\u4fd7",9:"\u6076\u610f\u5237\u5c4f",3:"\u8d4c\u535a\u8bc8\u9a97",4:"\u4eba\u8eab\u653b\u51fb",5:"\u4fb5\u72af\u9690\u79c1",6:"\u5783\u573e\u5e7f\u544a",10:"\u89c6\u9891\u65e0\u5173",7:"\u5f15\u6218",8:"\u5267\u900f",12:"\u9752\u5c11\u5e74\u4e0d\u826f\u4fe1\u606f",11:"\u5176\u5b83"};class E extends m.default.Component{constructor(e){super(e),this.state={loaded:!1,loadedXMLDANMU:!1,loading:!1,loadingText:null,danmuJSON:{list:[]},filterText:"",queryUserMode:null,currentCid:NaN,segmentDanmu:[],needLoadByHandle:!0,showDanmuReport:!1,reportDanmu:null,reportType:null,reportContent:"",dmid:null,setWhiteVIPDanmu:!1},this.currentPid=null,this.addListener=()=>{const e=this;let t,i;chrome.runtime.onMessage.addListener((e,t,i)=>a(this,void 0,void 0,(function*(){return"loadNewTypeDanmu"===e.command?(this.getNewDANMUList(e.oid,e.pid,e.segmentIndex),i(!0)):"loadNewTypeHistoryDanmu"===e.command&&(this.getDanmuData(e.oid,1,e.date),i(!0)),!0}))),window.addEventListener("message",(function(e){"pakku_ajax_request"===e.data.type&&/x\/v2\/dm\/history/.test(e.data.arg)&&chrome.runtime.sendMessage({target:"videoDanmu",event:"message",command:"pakkuGetHistoryDanmu",url:e.data.arg})})),(0,d.default)(document).on("mouseenter","[helper-data-usercard-mid]",(function(){e.createCard(this,(0,d.default)(this).attr("helper-data-usercard-mid"))})),(0,d.default)(document).on("mouseenter","[helper-data-usercard-mid], #helper-card",(function(){e.removeCardSign=!1,i&&(clearTimeout(i),i=null),i=setTimeout(()=>{document.querySelector("#helper-card")&&(document.querySelector("#helper-card").style.display="block")},300),t&&(clearTimeout(t),t=null),t=setTimeout(()=>{e.removeCardSign=!0},300)})),(0,d.default)(document).on("mouseleave","[helper-data-usercard-mid], #helper-card, .bilibili-helper-danmu-wrapper",(function(){setTimeout(()=>{const t=document.querySelector("#helper-card");e.removeCardSign&&t&&(t.style.display="none")},200)})),(0,y.onVideoChange)(()=>{this.setState({needLoadByHandle:!0,loading:!1,loadingText:""})})},this.getNewDanmuOption=(e,t,i)=>new Promise(o=>{const n=new g.default(w.default.view);n.set("query",{type:i,oid:e,pid:t}),chrome.runtime.sendMessage({target:"videoDanmu",event:"message",command:"fetchNewTypeDanmuOption",url:n.toString(),oid:e},e=>{o(e)})}),this.getNewDANMUList=(e,t,i=1)=>this.getVideoDuration().then(o=>new Promise((n,r)=>{e?1===i&&this.segmentDanmuOid!==e?(this.segmentDanmuOid=e,this.segmentDanmuList=[],this.getNewDanmuOption(e,t,1).then(({pageSize:i,total:r})=>{this.segmentDanmuPageSize=i,this.segmentSize=(i?Math.ceil(o/parseInt(i/1e3,10)):25)||1,this.segmentSize>r&&(this.segmentSize=r),this.currentOid=e,this.currentPid=t,this.setState({loading:!1,loadingText:""},()=>n())})):n():(this.setState({needLoadByHandle:!0,loading:!1,loadingText:""}),r())})),this.getDanmuData=(e,t,i)=>a(this,void 0,void 0,(function*(){const o=new g.default(i?w.default.historySeg:w.default.seg);if(o.set("query",{type:1,oid:e,date:i,segment_index:t}),1===t){this.segmentDanmuList=[];const t={count:0,list:[],cid:e};this.orderedJSON=Object.assign({},t),this.setState({danmuJSON:t,loaded:!1,loading:!0,currentCid:e})}return new Promise(i=>{chrome.runtime.sendMessage({target:"videoDanmu",event:"message",command:"fetchNewTypeDanmu",url:o.toString(),oid:e,segmentIndex:t},e=>{1===t&&(this.state.danmuJSON.length=0);const o=t-1;this.segmentDanmuList[o]=e,this.state.danmuJSON.count+=e.length,this.setState({danmuJSON:Object.assign({},this.state.danmuJSON)}),i(!0)})}).then(i=>{if(i&&t<this.segmentSize)return this.getDanmuData(e,t+1);{this.orderedJSON.list=this.segmentDanmuList.filter(Boolean).flat();const t=[...this.orderedJSON.list],i={count:t.length,list:t,cid:e};this.orderedJSON=Object.assign({},i),this.setState({danmuJSON:i,loaded:!0,loading:!1,currentCid:e})}})})),this.getVideoInitialData=()=>new Promise((e,t)=>{this.injectScript("\n                (()=>{\n                    if (window.__INITIAL_STATE__ && window.__INITIAL_STATE__.epInfo) {\n                        const pid = window.__INITIAL_STATE__.epInfo.aid;\n                        const oid = window.__INITIAL_STATE__.epInfo.cid;\n                        window.postMessage({command: 'setVideoInitialData', pid, oid}, '*');\n                    } else if (window.__INITIAL_STATE__ && window.playerInfo) {\n                        const pid = window.playerInfo.aid;\n                        const oid = window.playerInfo.cid;\n                        window.postMessage({command: 'setVideoInitialData', pid, oid}, '*');\n                    }\n                })();\n            ",5e3);const i=o=>{const{data:n}=o;"setVideoInitialData"===n.command&&(window.removeEventListener("message",i),n?e(n):t())};window.addEventListener("message",i)}),this.getVideoDuration=()=>this.context.videoInfo&&this.context.videoInfo.duration&&1===this.context.videoInfo.videos?Promise.resolve(this.context.videoInfo.duration):new Promise((e,t)=>{this.injectScript("\n                    (()=>{\n                        const messageCallback = (event) => {\n                            const {data} = event;\n                            if (data.command === 'getVideoDuration') {\n                                let duration;\n                                if (window.__playinfo__ && window.__playinfo__.data && window.__playinfo__.data.dash) {\n                                    duration = parseInt(window.__playinfo__.data.dash.duration, 10);\n                                } else if (window.player) {\n                                    duration = window.player.getDuration();\n                                }\n                                window.postMessage({command: 'setDuration', duration: duration || null}, '*');\n                                window.removeEventListener('message', messageCallback);\n                            }\n                        };\n                        window.addEventListener('message', messageCallback);\n                    })()\n                ",5e3);const i=o=>{const{data:n}=o;"setDuration"===n.command&&(window.removeEventListener("message",i),n.duration?e(n.duration):t())};window.addEventListener("message",i),window.postMessage({command:"getVideoDuration"},"*")}),this.injectScript=(e,t=0)=>{const i=document.createElement("script");i.innerHTML=e,document.body.appendChild(i),t&&setTimeout(()=>{i.remove()},t)},this.getUserInfoByUid=e=>new Promise(t=>{const i=new g.default(w.default.card);i.set("query",{mid:e,photo:1}),e&&chrome.runtime.sendMessage({target:"videoDanmu",event:"message",command:"fetchUserCard",url:i.toString()},i=>{if(412===i)t(i);else if(i){const{code:o,data:n}=JSON.parse(i);if(0===o){const{card:i,space:o,follower:r,following:a}=n;this.userMap[e]=Object.assign(Object.assign(Object.assign({},i),o),{follower:r,following:a}),t(e)}else this.setState({loadingText:"\u67e5\u8be2\u5931\u8d25!"},()=>{setTimeout(()=>this.setState({loading:!1}),3e3)}),t(!1)}else this.setState({loadingText:"\u67e5\u8be2\u5931\u8d25!"},()=>{setTimeout(()=>this.setState({loading:!1}),3e3)}),t(!1)})}),this.isRobotUser=(e={})=>{const{card:t}=e,{level_info:i}=t,{current_level:o}=i;return 0===o},this.getRowHeight=({index:e})=>{const{danmuJSON:t}=this.state,i=t.list[e],o=this.authorHashMap[i.authorHash];return o&&20*o.length||20},this.handleInputChange=e=>{const t=e.target.value,{danmuJSON:i}=this.state,{cid:o}=i;if(e.target.value){const e=[];this.orderedJSON.list.forEach(i=>{var o;if(!(null===(o=i.danmu)||void 0===o?void 0:o.indexOf))return;const n=i.danmu.indexOf(t);if(n>=0)if(i.danmu===t)e.push(Object.assign(Object.assign({},i),{danmu:m.default.createElement("span",{className:"target-words"},t)}));else{const o=i.danmu.split(t),n=o.reduce((e,i,n)=>(""===i?e.push(m.default.createElement("span",{key:n,className:"target-words"},t)):void 0!==o[n+1]&&""!==o[n+1]?e.push(i,m.default.createElement("span",{key:n,className:"target-words"},t)):e.push(i),e),[]);e.push(Object.assign(Object.assign({},i),{danmu:n}))}}),this.setState({danmuJSON:{cid:o,count:e.length,list:e}})}else{const{count:e,list:t}=this.orderedJSON;this.setState({danmuJSON:{cid:o,count:e,list:t}})}},this.handleDanmuLineClick=e=>{let t=/^b(\d+)$/.exec(e),i=[];i=t&&t[1]?[t[1]]:x.crack(parseInt(e,16)),this.setState({loading:!0,loadingText:"\u52aa\u529b\u67e5\u8be2\u4e2d~(\u0e51\u2022\u0300\u3142\u2022\u0301)\u0648"}),Promise.all(i.map(e=>this.getUserInfoByUid(e))).then(e=>e.filter(Boolean)).then(t=>{const i=t.find(e=>412===e);i?this.setState({loading:!0,loadingText:"\u67e5\u8be2\u592a\u9891\u7e41\u88ab\u9650\u6d41\u4e86\u30fd(\uff40\u2312\xb4)\uff89\uff0c\u8bf730\u5206\u949f\u540e\u5237\u65b0\u7f51\u9875\u7a0d\u540e\u518d\u8bd5"}):(t.length>0&&(this.authorHashMap[e]=t),this.setState({loading:!1},()=>{this.danmuListRef.recomputeRowHeights(),this.danmuListRef.forceUpdate()}))})},this.handleAuthorClick=(e,t)=>{if(this.state.queryUserMode)this.setState({queryUserMode:!1,danmuJSON:this.queryUserModeTemplateMap},()=>{this.danmuListRef.scrollToRow(this.currentRowIndex)});else{const i=[];this.queryUserModeTemplateMap=Object.assign({},this.state.danmuJSON);const o=t.map(e=>p.default.findKey(this.authorHashMap,t=>!!~t.indexOf(e)));this.orderedJSON.list.forEach(e=>{o.includes(e.authorHash)&&i.push(Object.assign({},e))}),this.setState({queryUserMode:!0,danmuJSON:{cid:this.orderedJSON.cid,count:i.length,list:i}},()=>{this.currentRowIndex=e})}},this.handleDownloadClick=e=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"download_danmu",label:e}),new Promise(t=>{chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},i=>{if(!i||!i.on)return!1;chrome.runtime.sendMessage({target:"renameDownloadFile",event:"renameFileName",type:"videoDanmu",data:Object.assign(Object.assign({},this.props.videoInfo),{format:e})},e=>{t(e||!1)})})}).then(t=>{this.state.danmuJSON.count>2e4&&l.Message.info("\u5b57\u5e55\u6587\u4ef6\u8f83\u5927\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85"),chrome.runtime.sendMessage({target:"videoDanmu",event:"message",command:"ass"===e?"downloadDanmuASS":"downloadDanmuXML",cid:this.state.currentCid,date:this.danmuDate,renamedFilename:t,filename:(0,y.getFilename)(document),origin:"ass"===e?document.location.href:null})})},this.handleOnClickLoadDanmu=()=>{this.state.loadedXMLDANMU?this.setState({loading:!1,needLoadByHandle:!1}):new Promise(e=>{this.currentPid=this.props.videoInfo.aid,this.currentOid=this.props.videoInfo.cid,e()}).then(()=>{this.setState({loading:!0,loadingText:"\u5f39\u5e55\u52a0\u8f7d\u4e2d~(\u0e51\u2022\u0300\u3142\u2022\u0301)\u0648",needLoadByHandle:!1},()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_load_danmu_button"}),this.getNewDANMUList(this.currentOid,this.currentPid).then(()=>this.getDanmuData(this.currentOid,1))})}).then(()=>{this.setState({loading:!1,needLoadByHandle:!1})}).catch(e=>{this.setState({loading:!1,needLoadByHandle:!1})})},this.createCardDOM=e=>{if(!e)return;const{mid:t,face:i,s_img:o,name:n,sign:r,level_info:a,following:s}=e;let l,c,d,u,p,h,m,f,b,v,g;c=document.querySelector(".helper-card-header")||document.createElement("div"),d=document.querySelector(".helper-card-container")||document.createElement("div"),u=document.querySelector(".helper-card-face")||document.createElement("img"),p=document.querySelector(".helper-card-user")||document.createElement("p"),h=document.querySelector(".helper-card-name")||document.createElement("a"),m=document.querySelector(".helper-card-sign")||document.createElement("p"),f=document.querySelector(".helper-card-level")||document.createElement("a"),b=document.querySelector(".helper-card-feed")||document.createElement("div"),v=document.querySelector(".helper-card-like-btn")||document.createElement("a"),g=document.querySelector(".helper-card-like-btn")||document.createElement("a"),l=document.querySelector("#helper-card"),l||(l=document.createElement("div"),c.setAttribute("class","helper-card-header bg"),d.setAttribute("class","helper-card-container info"),u.setAttribute("class","helper-card-face face"),p.setAttribute("class","helper-card-user user"),h.setAttribute("class","helper-card-name name"),h.setAttribute("target","_blank"),m.setAttribute("class","helper-card-sign sign"),b.setAttribute("class","helper-card-btn btn-box"),l.setAttribute("id","helper-card"),l.setAttribute("class","user-card"),f.setAttribute("class","helper-card-level level"),f.setAttribute("href","//www.bilibili.com/html/help.html#k_2"),f.setAttribute("target","_blank"),v.setAttribute("class","like"),v.innerHTML='<span class="hover-text">\u53d6\u6d88\u5173\u6ce8</span><span class="default-text">+\u5173\u6ce8</span>',g.setAttribute("class","message"),g.setAttribute("target","_blank"),g.innerText="\u53d1\u6d88\u606f",p.appendChild(h),p.appendChild(f),d.appendChild(p),d.appendChild(m),b.appendChild(v),b.appendChild(g),l.appendChild(c),l.appendChild(u),l.appendChild(d),l.appendChild(b)),c.setAttribute("style",`background-image: url(${o.replace(/^http:/,"https:")});`),u.setAttribute("src",i.replace(/^http:/,"https:"));const y=document.createElement("i");return y.setAttribute("class","level l"+a.current_level),f.innerHTML="",f.appendChild(y),v.setAttribute("mid",t),v.setAttribute("uname",n),v.onclick=function(){this.userMap[t].following=!s},s&&v.setAttribute("class","like liked"),g.setAttribute("href","//message.bilibili.com/#whisper/mid"+t),h.innerText=n,h.setAttribute("href","https://space.bilibili.com/"+t),m.innerText=r,l},this.createCard=(e,t)=>{const i=this.userMap[t],o=this.createCardDOM(i);document.querySelector("#helper-card")||document.querySelector("body").appendChild(o),this.setTargetPosition(e,o)},this.setTargetPosition=(e,t)=>{const{height:i,top:o,left:n}=e.getBoundingClientRect(),{height:r}=t.getBoundingClientRect();r&&(this.lastHeight=r),t.style.top=o>=r?o-this.lastHeight-2+"px":o+i+2+"px",n+377<=window.innerWidth?t.style.left=n+"px":t.style.left=window.innerWidth-377+"px"},this.handleOnClickSetReportType=e=>{this.setState({reportType:+e.target.value})},this.handleOnClickPostRepost=()=>{const{currentCid:e,reportType:t,dmid:i,reportContent:o}=this.state;chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_report_danmu_confirm_button"}),chrome.runtime.sendMessage({target:"videoDanmu",event:"postReport",cid:e,reason:t,dmid:i,content:o},e=>{this.setState({showDanmuReport:!1})})},this.handleOnClickReportDanmu=(e,t,i)=>{e.stopPropagation(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_report_danmu_button"}),this.setState({showDanmuReport:!0,reportType:null,reportContent:"",reportDanmu:t,dmid:i})},this.handleOnChangeReportContext=e=>{this.setState({reportContent:e.target.value})},this.onScroll=({clientHeight:e,scrollHeight:t,scrollTop:i})=>{},this.renderHeader=(e=this.state.danmuJSON)=>m.default.createElement(O,null,m.default.createElement("span",{style:{marginRight:"auto"}},"\u5f39\u5e55\u53d1\u9001\u8005\u67e5\u8be2 \u4e0e \u5f39\u5e55\u4e0b\u8f7d",e.count&&!this.state.needLoadByHandle?m.default.createElement("span",{className:"count"},e.count," \u6761"):null),this.state.needLoadByHandle?null:m.default.createElement(m.default.Fragment,null,m.default.createElement(M,{title:"\u4e0b\u8f7d ASS \u683c\u5f0f\u5f39\u5e55\u6587\u4ef6",onClick:()=>this.handleDownloadClick("ass")},"ASS"),m.default.createElement(M,{title:"\u4e0b\u8f7d XML \u683c\u5f0f\u5f39\u5e55\u6587\u4ef6",onClick:()=>this.handleDownloadClick("xml")},"XML"))),this.renderLine=({index:e,style:t})=>{const{danmuJSON:i}=this.state,o=i.list[e],{rowId:n,danmu:r,authorHash:a,time:s}=o,l=this.authorHashMap[a];let d=l?p.default.map(l,e=>this.userMap[e]?this.userMap[e].name:""):null;return m.default.createElement(I,{key:n,title:`[${s}] ${r} ${d?"by:"+d.join(","):""}`,onClick:()=>l?this.handleAuthorClick(e,l):this.handleDanmuLineClick(a),hasQueried:!p.default.isEmpty(d),style:t},m.default.createElement("span",{className:"time"},s),m.default.createElement("span",{className:"danmu"},r,m.default.createElement(c.Button,{onClick:e=>this.handleOnClickReportDanmu(e,r,n)},"\u4e3e\u62a5")),m.default.createElement("span",{className:"author"},d?d.map((e,t)=>m.default.createElement("div",{key:e,"helper-data-usercard-mid":l[t]},e)):null))},this.renderList=()=>m.default.createElement(f.AutoSizer,{disableHeight:!0},({width:e})=>m.default.createElement(C,{ref:e=>this.danmuListRef=e,width:e,height:this.state.danmuJSON&&this.state.danmuJSON.list.length>0?250:100,rowCount:this.state.danmuJSON.list.length,rowHeight:this.getRowHeight,rowRenderer:this.renderLine,noRowsRenderer:()=>m.default.createElement(I,{key:"none"},"\u65e0\u6570\u636e"),scrollToAlignment:"center",data:this.state.danmuJSON?this.state.danmuJSON.list:[]})),this.renderDanmuReport=()=>{const{showDanmuReport:e,reportDanmu:t,reportType:i,reportContent:o,needLoadByHandle:n}=this.state,r=11===i&&!!o||!!i&&11!==i;return m.default.createElement(P,{className:!n&&e?"show":""},m.default.createElement("div",null,m.default.createElement("b",null,"\u4e3e\u62a5\u5f39\u5e55: "),m.default.createElement("span",null,t)),m.default.createElement("div",{className:"report-body"},m.default.createElement("div",{className:"reason-radio-group"},Object.keys(A).map(e=>m.default.createElement("label",{key:e},m.default.createElement("input",{type:"radio",name:"reportDanmu",value:e,checked:!!i&&i===+e,onChange:this.handleOnClickSetReportType}),m.default.createElement("span",null,A[e])))),11===i&&m.default.createElement("textarea",{className:"report-content",value:o,onChange:this.handleOnChangeReportContext})),m.default.createElement("div",{className:"action-box"},m.default.createElement(c.Button,{className:"confirm-report",disabled:!r,onClick:this.handleOnClickPostRepost},"\u786e\u5b9a"),m.default.createElement(c.Button,{className:"cancel",onClick:()=>this.setState({showDanmuReport:!1})},"\u53d6\u6d88")))},this.orderedJSON={},this.userMap={},this.userCardMap={},this.queryUserModeTemplateMap={},this.danmuDocumentStr=null;const t=new Date;this.danmuDate=`${t.getMonth()+1}-${t.getDate()}`,this.addListener(),this.danmuListRef=null,this.currentRowIndex=0,this.authorHashMap={},this.segmentDanmuList=[],this.segmentDanmuOid=null,this.segmentSize=1,this.segmentDanmuPageSize=36e4,this.removeCardSign=null,this.lasetHeight=null,this.currentOid=null}componentDidMount(){chrome.runtime.sendMessage({command:"danmuDOMInitialized"});const e=document.querySelectorAll(".player-sidebar-list-item-inner, .bnj-player-single-item-mask");e.length>0&&e[0].addEventListener("click",()=>{setTimeout(()=>{chrome.runtime.sendMessage({command:"danmuDOMInitialized"})},500)}),chrome.runtime.sendMessage({target:"videoDanmu",event:"getSetting"},e=>{this.setState({setWhiteVIPDanmu:e.setWhiteVIPDanmu})})}render(){const{needLoadByHandle:e,loading:t,setWhiteVIPDanmu:i}=this.state;return m.default.createElement(_,null,i?m.default.createElement(S,null):null,this.renderHeader(),m.default.createElement("div",{className:"danmu-wrapper"},!e&&this.renderList(),e&&m.default.createElement(L,null,m.default.createElement("p",{className:"description"},"\u67e5\u8be2\u7ed3\u679c\u4ec5\u4f9b\u53c2\u8003\uff0c\u4e0d\u4f5c\u4e3a\u4e8b\u5b9e\u4f9d\u636e"),m.default.createElement("button",{className:"load-danmuku-button",onClick:this.handleOnClickLoadDanmu},"\u70b9\u51fb\u52a0\u8f7d\u5b8c\u6574\u5f39\u5e55\uff0c\u5f00\u59cb\u67e5\u8be2\u6216\u4e0b\u8f7d")),this.renderDanmuReport()),m.default.createElement(T,{placeholder:"\u8bf7\u8f93\u5165\u9700\u8981\u67e5\u8be2\u7684\u5f39\u5e55\u5185\u5bb9",onChange:this.handleInputChange}),t&&m.default.createElement(D,null,this.state.loadingText))}}t.Danmu=E,E.contextType=h.Store},88648:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={list:"https://api.bilibili.com/x/v1/dm/list.so",historyList:"https://api.bilibili.com/x/v2/dm/history",card:"https://api.bilibili.com/x/web-interface/card",seg:"https://api.bilibili.com/x/v2/dm/web/seg.so",historySeg:"https://api.bilibili.com/x/v2/dm/web/history/seg.so",view:"https://api.bilibili.com/x/v2/dm/web/view"}},70632:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoDanmu=void 0;const r=n(i(32699)),a=n(i(52296)),s=i(38845),l=i(87683),c=i(555),d=i(83107);class u extends s.Feature{constructor(e){super(e,"videoDanmu",{dependencies:["renameDownloadFile"],settings:{on:!0,setWhiteVIPDanmu:!1}}),this.messageStore=new s.MessageStore("danmuDOMInitialized"),this.tempDanmuMap=new Map,this.onMessageReceived=(e,t,i)=>{if("fetchCardInfo"===e.command&&e.url&&this.emit("requestController","create",{url:e.url,options:{contentType:"json"}},({data:e})=>{i(e)}),"fetchNewTypeDanmuOption"===e.command&&e.url)this.emit("requestController","create",{url:e.url,options:{contentType:"arrayBuffer"}},({data:e})=>{const t=(0,d.DmWebViewReplyDecoder)(e);i(t.dmSge)});else{if("fetchNewTypeDanmu"===e.command&&e.url)return this.fetchNewTypeDanmu(e,t,i);if("fetchUserCard"===e.command&&e.url)this.emit("requestController","create",{url:e.url,options:{contentType:"text"}},({data:e,error:t})=>{i(e||(null===t||void 0===t?void 0:t.status))});else if("downloadDanmuXML"===e.command&&e.cid){if(!this.tempDanmuMap.has(t.tab.id))return;const{pieces:i,oid:o}=this.tempDanmuMap.get(t.tab.id);this.tempDanmuMap.get(t.tab.id);const n=i.filter(Boolean).flat();let r=`<?xml version="1.0" encoding="UTF-8"?><i><chatserver></chatserver><chatid>${o}</chatid><mission></mission><maxlimit></maxlimit><state></state><real_name></real_name><source></source>`;r+=n.reduce((e,t)=>{const{danmu:i,authorHash:o,mode:n,progress:r,fontsize:a,color:s,ctime:l,idStr:d,weight:u}=t;return i?e+`<d p="${(r||0)/1e3},${n},${a},${s},${l},${u},${o},${d}">${(0,c.encodeHTMLEntries)(i)}</d>`:e},"")+"</i>";const a=(window.URL?URL:window.webkitURL).createObjectURL(new Blob([r],{type:"application/xml"}));let s=e.renamedFilename||`${e.filename?e.filename+".":""}${e.cid}.${e.date}.xml`;s=(0,c.ToCDB)(s.replace(/\s/g,"_")).replace(/[\\/:*?"<>~|]/g,"_"),chrome.downloads.download({saveAs:!0,url:a,filename:s,headers:[{name:"Content-Disposition",value:`attachment; filename="${s}"; filename*="utf-8' '${s}"`.replace("/","%2f")}]})}else if("downloadDanmuASS"===e.command&&e.cid){if(!this.tempDanmuMap.has(t.tab.id))return!0;const{pieces:i}=this.tempDanmuMap.get(t.tab.id);this.tempDanmuMap.get(t.tab.id);const o=i.filter(Boolean).flat();(0,l.GenerateASSByOriginData)(o,{title:e.filename,ori:e.origin}).then(t=>{const i=(window.URL?URL:window.webkitURL).createObjectURL(new Blob(["\ufeff"+t],{type:"application/octet-stream"}));let o=e.renamedFilename||`${e.filename?e.filename+".":""}${e.cid}.${e.date}.ass`;o=(0,c.ToCDB)(o.replace(/\s/g,"_")).replace(/[\\/:*?"<>~|]/g,"_"),chrome.downloads.download({saveAs:!0,url:i,filename:o,headers:[{name:"Content-Disposition",value:`attachment; filename="${o}"; filename*="utf-8' '${o}"`.replace("/","%2f")}]})})}else if("pakkuGetHistoryDanmu"===e.command){const i=this.messageStore.createData(t.id),o=new a.default(e.url,"",!0);i.queue.push({command:"loadHistoryDanmu",cid:i.data.cid,date:o.query.date}),this.messageStore.dealWith(t.id)}}return!0},this.watcher=(0,c.webRequestCallbackWrapper)(e=>{const{tabId:t}=e,i=new a.default(e.url,"",!0),{pathname:o,query:n}=i;if(!n||!n.requestFrom)if("/x/v2/dm/web/seg.so"===o){const e=this.messageStore.createData(t);e.data.cid=n.oid,e.queue.push({command:"loadNewTypeDanmu",oid:n.oid,pid:n.pid,segmentIndex:n.segment_index}),this.messageStore.dealWith(t)}else if("/x/v2/dm/web/history/seg.so"===o){const e=this.messageStore.createData(t);e.data.cid=n.oid,e.queue.push({command:"loadNewTypeHistoryDanmu",oid:n.oid,date:n.date}),this.messageStore.dealWith(t)}else if("/x/player.so"===o||"/player"===o){const e=this.messageStore.createData(t);e.data.cid=n.id.slice(4),e.queue.push({command:"loadCurrentDanmu",cid:e.data.cid}),this.messageStore.dealWith(t)}else if("/x/v1/dm/list.so"===o){const e=this.messageStore.createData(t);e.data.cid=n.oid,e.queue.push({command:"loadCurrentDanmu",cid:e.data.cid}),this.messageStore.dealWith(t)}else if("/x/v2/dm/history"===o&&n.date){const e=this.messageStore.createData(t);e.queue.push({command:"loadHistoryDanmu",cid:e.data.cid,date:n.date}),this.messageStore.dealWith(t)}}),this.fetchNewTypeDanmu=({url:e,oid:t,segmentIndex:i},n,a)=>o(this,void 0,void 0,(function*(){return this.emit("requestController","create",{url:e,options:{contentType:"arrayBuffer"}},({data:e})=>{if(e){const o=(0,d.DmSegMobileReplyDecoder)(e);if(this.logger.log(o),o&&o.elems){let e=this.tempDanmuMap.get(n.tab.id);if(1!==i&&this.tempDanmuMap.has(n.tab.id)||(e={length:0,pieces:[],oid:t},this.tempDanmuMap.set(n.tab.id,e)),o.elems){let t=o.elems.filter(e=>!!e.text).reduce((e,t)=>{let{id:i,text:o,uhash:n,mode:r,stime:a,size:s,color:l,date:d,dmid:u,weight:p}=t;a=parseInt(a+"000"||0,10)/1e3;let h=o.replace(/[\u0000-\u001f\u007f]/g,"");try{"["===h[0]&&(h=JSON.parse(h),h=h instanceof Array?h[4]:o)}catch(e){}finally{""===h&&void 0===h||e.push({authorHash:n,color:l,danmu:(0,c.decodeHTMLEntries)(h),ctime:d,fontsize:s,idStr:u,mode:r,progress:a,rowId:i,weight:+p>1?p:1,time:(0,c.parseTime)(a,10)})}return e},[]);return t=r.default.sortBy(t,"time"),e.pieces[i-1]=t,e.length+=t.length,this.tempDanmuMap.set(n.tab.id,e),void a(t)}}a([])}else a(e)}),!0})),this.postReport=(e,t,i)=>o(this,void 0,void 0,(function*(){const t=yield this.updateCSRF(),{cid:o,dmid:n,reason:r,content:a}=e,s={cid:o,dmid:n,reason:r,content:a,csrf:t,block:!0},l=new FormData;for(let e in s)l.append(e,s[e]);t?this.emit("requestController","create",{url:"https://api.bilibili.com/x/dm/report/add",options:{method:"post",contentType:"json",body:Array.from(l.entries()).map(([e,t])=>void 0!==t&&`${e}=${t}`).filter(Boolean).join("&"),headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}}},()=>{i(!0)}):i(!1)})),this.updateCSRF=()=>o(this,void 0,void 0,(function*(){return new Promise(e=>{this.emit("cookieController","get",{url:"https://www.bilibili.com",name:"bili_jct"},t=>{e(t)})})})),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.emit("webRequestController","create",{name:"videoDanmuWatcher",eventName:"onSendHeaders",filter:{urls:["*://api.bilibili.com/x/v2/dm/history?type=*","*://api.bilibili.com/x/v1/dm/list.so?oid=*","*://api.bilibili.com/x/player.so?id=cid:*","*://interface.bilibili.com/player?id=cid:*","*://api.bilibili.com/x/v2/dm/web/view?*","*://api.bilibili.com/x/v2/dm/web/seg.so?*","*://api.bilibili.com/x/v2/dm/web/history/seg.so*"]},options:["requestHeaders"],callback:this.watcher}),this.addListener("postReport",this.postReport),chrome.tabs.onRemoved.addListener(e=>{const t=this.tempDanmuMap.get(e);t&&this.tempDanmuMap.delete(e)}),this.updateCSRF()}))}}t.VideoDanmu=u},88565:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(i(70453));var r=n.default.Reader,a=n.default.Writer,s=n.default.util,l=n.default.roots["default"]||(n.default.roots["default"]={});l.bilibili=function(){var e={};return e.community=function(){var e={};return e.service=function(){var e={};return e.dm=function(){var e={};return e.v1=function(){var e={};return e.DmWebViewReply=function(){function e(e){if(this.specialDms=[],this.commandDms=[],this.reportFilter=[],this.expressions=[],this.postPanel=[],this.activityMetas=[],this.postPanelV2=[],e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.state=0,e.prototype.text="",e.prototype.textSide="",e.prototype.dmSge=null,e.prototype.flag=null,e.prototype.specialDms=s.emptyArray,e.prototype.checkBox=!1,e.prototype.count=s.Long?s.Long.fromBits(0,0,!1):0,e.prototype.commandDms=s.emptyArray,e.prototype.dmSetting=null,e.prototype.reportFilter=s.emptyArray,e.prototype.expressions=s.emptyArray,e.prototype.postPanel=s.emptyArray,e.prototype.activityMetas=s.emptyArray,e.prototype.postPanelV2=s.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=a.create()),null!=e.state&&Object.hasOwnProperty.call(e,"state")&&t.uint32(8).int32(e.state),null!=e.text&&Object.hasOwnProperty.call(e,"text")&&t.uint32(18).string(e.text),null!=e.textSide&&Object.hasOwnProperty.call(e,"textSide")&&t.uint32(26).string(e.textSide),null!=e.dmSge&&Object.hasOwnProperty.call(e,"dmSge")&&l.bilibili.community.service.dm.v1.DmSegConfig.encode(e.dmSge,t.uint32(34).fork()).ldelim(),null!=e.flag&&Object.hasOwnProperty.call(e,"flag")&&l.bilibili.community.service.dm.v1.DanmakuFlagConfig.encode(e.flag,t.uint32(42).fork()).ldelim(),null!=e.specialDms&&e.specialDms.length)for(var i=0;i<e.specialDms.length;++i)t.uint32(50).string(e.specialDms[i]);if(null!=e.checkBox&&Object.hasOwnProperty.call(e,"checkBox")&&t.uint32(56).bool(e.checkBox),null!=e.count&&Object.hasOwnProperty.call(e,"count")&&t.uint32(64).int64(e.count),null!=e.commandDms&&e.commandDms.length)for(i=0;i<e.commandDms.length;++i)l.bilibili.community.service.dm.v1.CommandDm.encode(e.commandDms[i],t.uint32(74).fork()).ldelim();if(null!=e.dmSetting&&Object.hasOwnProperty.call(e,"dmSetting")&&l.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.encode(e.dmSetting,t.uint32(82).fork()).ldelim(),null!=e.reportFilter&&e.reportFilter.length)for(i=0;i<e.reportFilter.length;++i)t.uint32(90).string(e.reportFilter[i]);if(null!=e.expressions&&e.expressions.length)for(i=0;i<e.expressions.length;++i)l.bilibili.community.service.dm.v1.Expressions.encode(e.expressions[i],t.uint32(98).fork()).ldelim();if(null!=e.postPanel&&e.postPanel.length)for(i=0;i<e.postPanel.length;++i)l.bilibili.community.service.dm.v1.PostPanel.encode(e.postPanel[i],t.uint32(106).fork()).ldelim();if(null!=e.activityMetas&&e.activityMetas.length)for(i=0;i<e.activityMetas.length;++i)t.uint32(114).string(e.activityMetas[i]);if(null!=e.postPanelV2&&e.postPanelV2.length)for(i=0;i<e.postPanelV2.length;++i)l.bilibili.community.service.dm.v1.PostPanelV2.encode(e.postPanelV2[i],t.uint32(122).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.DmWebViewReply;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.state=e.int32();break;case 2:o.text=e.string();break;case 3:o.textSide=e.string();break;case 4:o.dmSge=l.bilibili.community.service.dm.v1.DmSegConfig.decode(e,e.uint32());break;case 5:o.flag=l.bilibili.community.service.dm.v1.DanmakuFlagConfig.decode(e,e.uint32());break;case 6:o.specialDms&&o.specialDms.length||(o.specialDms=[]),o.specialDms.push(e.string());break;case 7:o.checkBox=e.bool();break;case 8:o.count=e.int64();break;case 9:o.commandDms&&o.commandDms.length||(o.commandDms=[]),o.commandDms.push(l.bilibili.community.service.dm.v1.CommandDm.decode(e,e.uint32()));break;case 10:o.dmSetting=l.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.decode(e,e.uint32());break;case 11:o.reportFilter&&o.reportFilter.length||(o.reportFilter=[]),o.reportFilter.push(e.string());break;case 12:o.expressions&&o.expressions.length||(o.expressions=[]),o.expressions.push(l.bilibili.community.service.dm.v1.Expressions.decode(e,e.uint32()));break;case 13:o.postPanel&&o.postPanel.length||(o.postPanel=[]),o.postPanel.push(l.bilibili.community.service.dm.v1.PostPanel.decode(e,e.uint32()));break;case 14:o.activityMetas&&o.activityMetas.length||(o.activityMetas=[]),o.activityMetas.push(e.string());break;case 15:o.postPanelV2&&o.postPanelV2.length||(o.postPanelV2=[]),o.postPanelV2.push(l.bilibili.community.service.dm.v1.PostPanelV2.decode(e,e.uint32()));break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.state&&e.hasOwnProperty("state")&&!s.isInteger(e.state))return"state: integer expected";if(null!=e.text&&e.hasOwnProperty("text")&&!s.isString(e.text))return"text: string expected";if(null!=e.textSide&&e.hasOwnProperty("textSide")&&!s.isString(e.textSide))return"textSide: string expected";if(null!=e.dmSge&&e.hasOwnProperty("dmSge")){var t=l.bilibili.community.service.dm.v1.DmSegConfig.verify(e.dmSge);if(t)return"dmSge."+t}if(null!=e.flag&&e.hasOwnProperty("flag")){t=l.bilibili.community.service.dm.v1.DanmakuFlagConfig.verify(e.flag);if(t)return"flag."+t}if(null!=e.specialDms&&e.hasOwnProperty("specialDms")){if(!Array.isArray(e.specialDms))return"specialDms: array expected";for(var i=0;i<e.specialDms.length;++i)if(!s.isString(e.specialDms[i]))return"specialDms: string[] expected"}if(null!=e.checkBox&&e.hasOwnProperty("checkBox")&&"boolean"!==typeof e.checkBox)return"checkBox: boolean expected";if(null!=e.count&&e.hasOwnProperty("count")&&!s.isInteger(e.count)&&!(e.count&&s.isInteger(e.count.low)&&s.isInteger(e.count.high)))return"count: integer|Long expected";if(null!=e.commandDms&&e.hasOwnProperty("commandDms")){if(!Array.isArray(e.commandDms))return"commandDms: array expected";for(i=0;i<e.commandDms.length;++i){t=l.bilibili.community.service.dm.v1.CommandDm.verify(e.commandDms[i]);if(t)return"commandDms."+t}}if(null!=e.dmSetting&&e.hasOwnProperty("dmSetting")){t=l.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.verify(e.dmSetting);if(t)return"dmSetting."+t}if(null!=e.reportFilter&&e.hasOwnProperty("reportFilter")){if(!Array.isArray(e.reportFilter))return"reportFilter: array expected";for(i=0;i<e.reportFilter.length;++i)if(!s.isString(e.reportFilter[i]))return"reportFilter: string[] expected"}if(null!=e.expressions&&e.hasOwnProperty("expressions")){if(!Array.isArray(e.expressions))return"expressions: array expected";for(i=0;i<e.expressions.length;++i){t=l.bilibili.community.service.dm.v1.Expressions.verify(e.expressions[i]);if(t)return"expressions."+t}}if(null!=e.postPanel&&e.hasOwnProperty("postPanel")){if(!Array.isArray(e.postPanel))return"postPanel: array expected";for(i=0;i<e.postPanel.length;++i){t=l.bilibili.community.service.dm.v1.PostPanel.verify(e.postPanel[i]);if(t)return"postPanel."+t}}if(null!=e.activityMetas&&e.hasOwnProperty("activityMetas")){if(!Array.isArray(e.activityMetas))return"activityMetas: array expected";for(i=0;i<e.activityMetas.length;++i)if(!s.isString(e.activityMetas[i]))return"activityMetas: string[] expected"}if(null!=e.postPanelV2&&e.hasOwnProperty("postPanelV2")){if(!Array.isArray(e.postPanelV2))return"postPanelV2: array expected";for(i=0;i<e.postPanelV2.length;++i){t=l.bilibili.community.service.dm.v1.PostPanelV2.verify(e.postPanelV2[i]);if(t)return"postPanelV2."+t}}return null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.DmWebViewReply)return e;var t=new l.bilibili.community.service.dm.v1.DmWebViewReply;if(null!=e.state&&(t.state=0|e.state),null!=e.text&&(t.text=String(e.text)),null!=e.textSide&&(t.textSide=String(e.textSide)),null!=e.dmSge){if("object"!==typeof e.dmSge)throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.dmSge: object expected");t.dmSge=l.bilibili.community.service.dm.v1.DmSegConfig.fromObject(e.dmSge)}if(null!=e.flag){if("object"!==typeof e.flag)throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.flag: object expected");t.flag=l.bilibili.community.service.dm.v1.DanmakuFlagConfig.fromObject(e.flag)}if(e.specialDms){if(!Array.isArray(e.specialDms))throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.specialDms: array expected");t.specialDms=[];for(var i=0;i<e.specialDms.length;++i)t.specialDms[i]=String(e.specialDms[i])}if(null!=e.checkBox&&(t.checkBox=Boolean(e.checkBox)),null!=e.count&&(s.Long?(t.count=s.Long.fromValue(e.count)).unsigned=!1:"string"===typeof e.count?t.count=parseInt(e.count,10):"number"===typeof e.count?t.count=e.count:"object"===typeof e.count&&(t.count=new s.LongBits(e.count.low>>>0,e.count.high>>>0).toNumber())),e.commandDms){if(!Array.isArray(e.commandDms))throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.commandDms: array expected");t.commandDms=[];for(i=0;i<e.commandDms.length;++i){if("object"!==typeof e.commandDms[i])throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.commandDms: object expected");t.commandDms[i]=l.bilibili.community.service.dm.v1.CommandDm.fromObject(e.commandDms[i])}}if(null!=e.dmSetting){if("object"!==typeof e.dmSetting)throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.dmSetting: object expected");t.dmSetting=l.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.fromObject(e.dmSetting)}if(e.reportFilter){if(!Array.isArray(e.reportFilter))throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.reportFilter: array expected");t.reportFilter=[];for(i=0;i<e.reportFilter.length;++i)t.reportFilter[i]=String(e.reportFilter[i])}if(e.expressions){if(!Array.isArray(e.expressions))throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.expressions: array expected");t.expressions=[];for(i=0;i<e.expressions.length;++i){if("object"!==typeof e.expressions[i])throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.expressions: object expected");t.expressions[i]=l.bilibili.community.service.dm.v1.Expressions.fromObject(e.expressions[i])}}if(e.postPanel){if(!Array.isArray(e.postPanel))throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.postPanel: array expected");t.postPanel=[];for(i=0;i<e.postPanel.length;++i){if("object"!==typeof e.postPanel[i])throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.postPanel: object expected");t.postPanel[i]=l.bilibili.community.service.dm.v1.PostPanel.fromObject(e.postPanel[i])}}if(e.activityMetas){if(!Array.isArray(e.activityMetas))throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.activityMetas: array expected");t.activityMetas=[];for(i=0;i<e.activityMetas.length;++i)t.activityMetas[i]=String(e.activityMetas[i])}if(e.postPanelV2){if(!Array.isArray(e.postPanelV2))throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.postPanelV2: array expected");t.postPanelV2=[];for(i=0;i<e.postPanelV2.length;++i){if("object"!==typeof e.postPanelV2[i])throw TypeError(".bilibili.community.service.dm.v1.DmWebViewReply.postPanelV2: object expected");t.postPanelV2[i]=l.bilibili.community.service.dm.v1.PostPanelV2.fromObject(e.postPanelV2[i])}}return t},e.toObject=function(e,t){t||(t={});var i={};if((t.arrays||t.defaults)&&(i.specialDms=[],i.commandDms=[],i.reportFilter=[],i.expressions=[],i.postPanel=[],i.activityMetas=[],i.postPanelV2=[]),t.defaults){if(i.state=0,i.text="",i.textSide="",i.dmSge=null,i.flag=null,i.checkBox=!1,s.Long){var o=new s.Long(0,0,!1);i.count=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.count=t.longs===String?"0":0;i.dmSetting=null}if(null!=e.state&&e.hasOwnProperty("state")&&(i.state=e.state),null!=e.text&&e.hasOwnProperty("text")&&(i.text=e.text),null!=e.textSide&&e.hasOwnProperty("textSide")&&(i.textSide=e.textSide),null!=e.dmSge&&e.hasOwnProperty("dmSge")&&(i.dmSge=l.bilibili.community.service.dm.v1.DmSegConfig.toObject(e.dmSge,t)),null!=e.flag&&e.hasOwnProperty("flag")&&(i.flag=l.bilibili.community.service.dm.v1.DanmakuFlagConfig.toObject(e.flag,t)),e.specialDms&&e.specialDms.length){i.specialDms=[];for(var n=0;n<e.specialDms.length;++n)i.specialDms[n]=e.specialDms[n]}if(null!=e.checkBox&&e.hasOwnProperty("checkBox")&&(i.checkBox=e.checkBox),null!=e.count&&e.hasOwnProperty("count")&&("number"===typeof e.count?i.count=t.longs===String?String(e.count):e.count:i.count=t.longs===String?s.Long.prototype.toString.call(e.count):t.longs===Number?new s.LongBits(e.count.low>>>0,e.count.high>>>0).toNumber():e.count),e.commandDms&&e.commandDms.length){i.commandDms=[];for(n=0;n<e.commandDms.length;++n)i.commandDms[n]=l.bilibili.community.service.dm.v1.CommandDm.toObject(e.commandDms[n],t)}if(null!=e.dmSetting&&e.hasOwnProperty("dmSetting")&&(i.dmSetting=l.bilibili.community.service.dm.v1.DanmuWebPlayerConfig.toObject(e.dmSetting,t)),e.reportFilter&&e.reportFilter.length){i.reportFilter=[];for(n=0;n<e.reportFilter.length;++n)i.reportFilter[n]=e.reportFilter[n]}if(e.expressions&&e.expressions.length){i.expressions=[];for(n=0;n<e.expressions.length;++n)i.expressions[n]=l.bilibili.community.service.dm.v1.Expressions.toObject(e.expressions[n],t)}if(e.postPanel&&e.postPanel.length){i.postPanel=[];for(n=0;n<e.postPanel.length;++n)i.postPanel[n]=l.bilibili.community.service.dm.v1.PostPanel.toObject(e.postPanel[n],t)}if(e.activityMetas&&e.activityMetas.length){i.activityMetas=[];for(n=0;n<e.activityMetas.length;++n)i.activityMetas[n]=e.activityMetas[n]}if(e.postPanelV2&&e.postPanelV2.length){i.postPanelV2=[];for(n=0;n<e.postPanelV2.length;++n)i.postPanelV2[n]=l.bilibili.community.service.dm.v1.PostPanelV2.toObject(e.postPanelV2[n],t)}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.DmWebViewReply"},e}(),e.PostPanel=function(){function e(e){if(e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.start=s.Long?s.Long.fromBits(0,0,!1):0,e.prototype.end=s.Long?s.Long.fromBits(0,0,!1):0,e.prototype.priority=s.Long?s.Long.fromBits(0,0,!1):0,e.prototype.bizId=s.Long?s.Long.fromBits(0,0,!1):0,e.prototype.bizType=0,e.prototype.clickButton=null,e.prototype.textInput=null,e.prototype.checkBox=null,e.prototype.toast=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=a.create()),null!=e.start&&Object.hasOwnProperty.call(e,"start")&&t.uint32(8).int64(e.start),null!=e.end&&Object.hasOwnProperty.call(e,"end")&&t.uint32(16).int64(e.end),null!=e.priority&&Object.hasOwnProperty.call(e,"priority")&&t.uint32(24).int64(e.priority),null!=e.bizId&&Object.hasOwnProperty.call(e,"bizId")&&t.uint32(32).int64(e.bizId),null!=e.bizType&&Object.hasOwnProperty.call(e,"bizType")&&t.uint32(40).int32(e.bizType),null!=e.clickButton&&Object.hasOwnProperty.call(e,"clickButton")&&l.bilibili.community.service.dm.v1.ClickButton.encode(e.clickButton,t.uint32(50).fork()).ldelim(),null!=e.textInput&&Object.hasOwnProperty.call(e,"textInput")&&l.bilibili.community.service.dm.v1.TextInput.encode(e.textInput,t.uint32(58).fork()).ldelim(),null!=e.checkBox&&Object.hasOwnProperty.call(e,"checkBox")&&l.bilibili.community.service.dm.v1.CheckBox.encode(e.checkBox,t.uint32(66).fork()).ldelim(),null!=e.toast&&Object.hasOwnProperty.call(e,"toast")&&l.bilibili.community.service.dm.v1.Toast.encode(e.toast,t.uint32(74).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.PostPanel;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.start=e.int64();break;case 2:o.end=e.int64();break;case 3:o.priority=e.int64();break;case 4:o.bizId=e.int64();break;case 5:o.bizType=e.int32();break;case 6:o.clickButton=l.bilibili.community.service.dm.v1.ClickButton.decode(e,e.uint32());break;case 7:o.textInput=l.bilibili.community.service.dm.v1.TextInput.decode(e,e.uint32());break;case 8:o.checkBox=l.bilibili.community.service.dm.v1.CheckBox.decode(e,e.uint32());break;case 9:o.toast=l.bilibili.community.service.dm.v1.Toast.decode(e,e.uint32());break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.start&&e.hasOwnProperty("start")&&!s.isInteger(e.start)&&!(e.start&&s.isInteger(e.start.low)&&s.isInteger(e.start.high)))return"start: integer|Long expected";if(null!=e.end&&e.hasOwnProperty("end")&&!s.isInteger(e.end)&&!(e.end&&s.isInteger(e.end.low)&&s.isInteger(e.end.high)))return"end: integer|Long expected";if(null!=e.priority&&e.hasOwnProperty("priority")&&!s.isInteger(e.priority)&&!(e.priority&&s.isInteger(e.priority.low)&&s.isInteger(e.priority.high)))return"priority: integer|Long expected";if(null!=e.bizId&&e.hasOwnProperty("bizId")&&!s.isInteger(e.bizId)&&!(e.bizId&&s.isInteger(e.bizId.low)&&s.isInteger(e.bizId.high)))return"bizId: integer|Long expected";if(null!=e.bizType&&e.hasOwnProperty("bizType"))switch(e.bizType){default:return"bizType: enum value expected";case 0:case 1:case 4:case 2:break}if(null!=e.clickButton&&e.hasOwnProperty("clickButton")){var t=l.bilibili.community.service.dm.v1.ClickButton.verify(e.clickButton);if(t)return"clickButton."+t}if(null!=e.textInput&&e.hasOwnProperty("textInput")){t=l.bilibili.community.service.dm.v1.TextInput.verify(e.textInput);if(t)return"textInput."+t}if(null!=e.checkBox&&e.hasOwnProperty("checkBox")){t=l.bilibili.community.service.dm.v1.CheckBox.verify(e.checkBox);if(t)return"checkBox."+t}if(null!=e.toast&&e.hasOwnProperty("toast")){t=l.bilibili.community.service.dm.v1.Toast.verify(e.toast);if(t)return"toast."+t}return null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.PostPanel)return e;var t=new l.bilibili.community.service.dm.v1.PostPanel;switch(null!=e.start&&(s.Long?(t.start=s.Long.fromValue(e.start)).unsigned=!1:"string"===typeof e.start?t.start=parseInt(e.start,10):"number"===typeof e.start?t.start=e.start:"object"===typeof e.start&&(t.start=new s.LongBits(e.start.low>>>0,e.start.high>>>0).toNumber())),null!=e.end&&(s.Long?(t.end=s.Long.fromValue(e.end)).unsigned=!1:"string"===typeof e.end?t.end=parseInt(e.end,10):"number"===typeof e.end?t.end=e.end:"object"===typeof e.end&&(t.end=new s.LongBits(e.end.low>>>0,e.end.high>>>0).toNumber())),null!=e.priority&&(s.Long?(t.priority=s.Long.fromValue(e.priority)).unsigned=!1:"string"===typeof e.priority?t.priority=parseInt(e.priority,10):"number"===typeof e.priority?t.priority=e.priority:"object"===typeof e.priority&&(t.priority=new s.LongBits(e.priority.low>>>0,e.priority.high>>>0).toNumber())),null!=e.bizId&&(s.Long?(t.bizId=s.Long.fromValue(e.bizId)).unsigned=!1:"string"===typeof e.bizId?t.bizId=parseInt(e.bizId,10):"number"===typeof e.bizId?t.bizId=e.bizId:"object"===typeof e.bizId&&(t.bizId=new s.LongBits(e.bizId.low>>>0,e.bizId.high>>>0).toNumber())),e.bizType){default:if("number"===typeof e.bizType){t.bizType=e.bizType;break}break;case"PostPanelBizTypeNone":case 0:t.bizType=0;break;case"PostPanelBizTypeEncourage":case 1:t.bizType=1;break;case"PostPanelBizTypeFragClose":case 4:t.bizType=4;break;case"PostPanelBizTypeColorDM":case 2:t.bizType=2;break}if(null!=e.clickButton){if("object"!==typeof e.clickButton)throw TypeError(".bilibili.community.service.dm.v1.PostPanel.clickButton: object expected");t.clickButton=l.bilibili.community.service.dm.v1.ClickButton.fromObject(e.clickButton)}if(null!=e.textInput){if("object"!==typeof e.textInput)throw TypeError(".bilibili.community.service.dm.v1.PostPanel.textInput: object expected");t.textInput=l.bilibili.community.service.dm.v1.TextInput.fromObject(e.textInput)}if(null!=e.checkBox){if("object"!==typeof e.checkBox)throw TypeError(".bilibili.community.service.dm.v1.PostPanel.checkBox: object expected");t.checkBox=l.bilibili.community.service.dm.v1.CheckBox.fromObject(e.checkBox)}if(null!=e.toast){if("object"!==typeof e.toast)throw TypeError(".bilibili.community.service.dm.v1.PostPanel.toast: object expected");t.toast=l.bilibili.community.service.dm.v1.Toast.fromObject(e.toast)}return t},e.toObject=function(e,t){t||(t={});var i={};if(t.defaults){if(s.Long){var o=new s.Long(0,0,!1);i.start=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.start=t.longs===String?"0":0;if(s.Long){o=new s.Long(0,0,!1);i.end=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.end=t.longs===String?"0":0;if(s.Long){o=new s.Long(0,0,!1);i.priority=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.priority=t.longs===String?"0":0;if(s.Long){o=new s.Long(0,0,!1);i.bizId=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.bizId=t.longs===String?"0":0;i.bizType=t.enums===String?"PostPanelBizTypeNone":0,i.clickButton=null,i.textInput=null,i.checkBox=null,i.toast=null}return null!=e.start&&e.hasOwnProperty("start")&&("number"===typeof e.start?i.start=t.longs===String?String(e.start):e.start:i.start=t.longs===String?s.Long.prototype.toString.call(e.start):t.longs===Number?new s.LongBits(e.start.low>>>0,e.start.high>>>0).toNumber():e.start),null!=e.end&&e.hasOwnProperty("end")&&("number"===typeof e.end?i.end=t.longs===String?String(e.end):e.end:i.end=t.longs===String?s.Long.prototype.toString.call(e.end):t.longs===Number?new s.LongBits(e.end.low>>>0,e.end.high>>>0).toNumber():e.end),null!=e.priority&&e.hasOwnProperty("priority")&&("number"===typeof e.priority?i.priority=t.longs===String?String(e.priority):e.priority:i.priority=t.longs===String?s.Long.prototype.toString.call(e.priority):t.longs===Number?new s.LongBits(e.priority.low>>>0,e.priority.high>>>0).toNumber():e.priority),null!=e.bizId&&e.hasOwnProperty("bizId")&&("number"===typeof e.bizId?i.bizId=t.longs===String?String(e.bizId):e.bizId:i.bizId=t.longs===String?s.Long.prototype.toString.call(e.bizId):t.longs===Number?new s.LongBits(e.bizId.low>>>0,e.bizId.high>>>0).toNumber():e.bizId),null!=e.bizType&&e.hasOwnProperty("bizType")&&(i.bizType=t.enums===String?void 0===l.bilibili.community.service.dm.v1.PostPanelBizType[e.bizType]?e.bizType:l.bilibili.community.service.dm.v1.PostPanelBizType[e.bizType]:e.bizType),null!=e.clickButton&&e.hasOwnProperty("clickButton")&&(i.clickButton=l.bilibili.community.service.dm.v1.ClickButton.toObject(e.clickButton,t)),null!=e.textInput&&e.hasOwnProperty("textInput")&&(i.textInput=l.bilibili.community.service.dm.v1.TextInput.toObject(e.textInput,t)),null!=e.checkBox&&e.hasOwnProperty("checkBox")&&(i.checkBox=l.bilibili.community.service.dm.v1.CheckBox.toObject(e.checkBox,t)),null!=e.toast&&e.hasOwnProperty("toast")&&(i.toast=l.bilibili.community.service.dm.v1.Toast.toObject(e.toast,t)),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.PostPanel"},e}(),e.PostPanelV2=function(){function e(e){if(e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.start=s.Long?s.Long.fromBits(0,0,!1):0,e.prototype.end=s.Long?s.Long.fromBits(0,0,!1):0,e.prototype.bizType=0,e.prototype.clickButton=null,e.prototype.textInput=null,e.prototype.checkBox=null,e.prototype.toast=null,e.prototype.bubble=null,e.prototype.label=null,e.prototype.postStatus=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=a.create()),null!=e.start&&Object.hasOwnProperty.call(e,"start")&&t.uint32(8).int64(e.start),null!=e.end&&Object.hasOwnProperty.call(e,"end")&&t.uint32(16).int64(e.end),null!=e.bizType&&Object.hasOwnProperty.call(e,"bizType")&&t.uint32(24).int32(e.bizType),null!=e.clickButton&&Object.hasOwnProperty.call(e,"clickButton")&&l.bilibili.community.service.dm.v1.ClickButtonV2.encode(e.clickButton,t.uint32(34).fork()).ldelim(),null!=e.textInput&&Object.hasOwnProperty.call(e,"textInput")&&l.bilibili.community.service.dm.v1.TextInputV2.encode(e.textInput,t.uint32(42).fork()).ldelim(),null!=e.checkBox&&Object.hasOwnProperty.call(e,"checkBox")&&l.bilibili.community.service.dm.v1.CheckBoxV2.encode(e.checkBox,t.uint32(50).fork()).ldelim(),null!=e.toast&&Object.hasOwnProperty.call(e,"toast")&&l.bilibili.community.service.dm.v1.ToastV2.encode(e.toast,t.uint32(58).fork()).ldelim(),null!=e.bubble&&Object.hasOwnProperty.call(e,"bubble")&&l.bilibili.community.service.dm.v1.BubbleV2.encode(e.bubble,t.uint32(66).fork()).ldelim(),null!=e.label&&Object.hasOwnProperty.call(e,"label")&&l.bilibili.community.service.dm.v1.LabelV2.encode(e.label,t.uint32(74).fork()).ldelim(),null!=e.postStatus&&Object.hasOwnProperty.call(e,"postStatus")&&t.uint32(80).int32(e.postStatus),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.PostPanelV2;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.start=e.int64();break;case 2:o.end=e.int64();break;case 3:o.bizType=e.int32();break;case 4:o.clickButton=l.bilibili.community.service.dm.v1.ClickButtonV2.decode(e,e.uint32());break;case 5:o.textInput=l.bilibili.community.service.dm.v1.TextInputV2.decode(e,e.uint32());break;case 6:o.checkBox=l.bilibili.community.service.dm.v1.CheckBoxV2.decode(e,e.uint32());break;case 7:o.toast=l.bilibili.community.service.dm.v1.ToastV2.decode(e,e.uint32());break;case 8:o.bubble=l.bilibili.community.service.dm.v1.BubbleV2.decode(e,e.uint32());break;case 9:o.label=l.bilibili.community.service.dm.v1.LabelV2.decode(e,e.uint32());break;case 10:o.postStatus=e.int32();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.start&&e.hasOwnProperty("start")&&!s.isInteger(e.start)&&!(e.start&&s.isInteger(e.start.low)&&s.isInteger(e.start.high)))return"start: integer|Long expected";if(null!=e.end&&e.hasOwnProperty("end")&&!s.isInteger(e.end)&&!(e.end&&s.isInteger(e.end.low)&&s.isInteger(e.end.high)))return"end: integer|Long expected";if(null!=e.bizType&&e.hasOwnProperty("bizType"))switch(e.bizType){default:return"bizType: enum value expected";case 0:case 1:case 4:case 2:break}if(null!=e.clickButton&&e.hasOwnProperty("clickButton")){var t=l.bilibili.community.service.dm.v1.ClickButtonV2.verify(e.clickButton);if(t)return"clickButton."+t}if(null!=e.textInput&&e.hasOwnProperty("textInput")){t=l.bilibili.community.service.dm.v1.TextInputV2.verify(e.textInput);if(t)return"textInput."+t}if(null!=e.checkBox&&e.hasOwnProperty("checkBox")){t=l.bilibili.community.service.dm.v1.CheckBoxV2.verify(e.checkBox);if(t)return"checkBox."+t}if(null!=e.toast&&e.hasOwnProperty("toast")){t=l.bilibili.community.service.dm.v1.ToastV2.verify(e.toast);if(t)return"toast."+t}if(null!=e.bubble&&e.hasOwnProperty("bubble")){t=l.bilibili.community.service.dm.v1.BubbleV2.verify(e.bubble);if(t)return"bubble."+t}if(null!=e.label&&e.hasOwnProperty("label")){t=l.bilibili.community.service.dm.v1.LabelV2.verify(e.label);if(t)return"label."+t}if(null!=e.postStatus&&e.hasOwnProperty("postStatus"))switch(e.postStatus){default:return"postStatus: enum value expected";case 0:case 1:break}return null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.PostPanelV2)return e;var t=new l.bilibili.community.service.dm.v1.PostPanelV2;switch(null!=e.start&&(s.Long?(t.start=s.Long.fromValue(e.start)).unsigned=!1:"string"===typeof e.start?t.start=parseInt(e.start,10):"number"===typeof e.start?t.start=e.start:"object"===typeof e.start&&(t.start=new s.LongBits(e.start.low>>>0,e.start.high>>>0).toNumber())),null!=e.end&&(s.Long?(t.end=s.Long.fromValue(e.end)).unsigned=!1:"string"===typeof e.end?t.end=parseInt(e.end,10):"number"===typeof e.end?t.end=e.end:"object"===typeof e.end&&(t.end=new s.LongBits(e.end.low>>>0,e.end.high>>>0).toNumber())),e.bizType){default:if("number"===typeof e.bizType){t.bizType=e.bizType;break}break;case"PostPanelBizTypeNone":case 0:t.bizType=0;break;case"PostPanelBizTypeEncourage":case 1:t.bizType=1;break;case"PostPanelBizTypeFragClose":case 4:t.bizType=4;break;case"PostPanelBizTypeColorDM":case 2:t.bizType=2;break}if(null!=e.clickButton){if("object"!==typeof e.clickButton)throw TypeError(".bilibili.community.service.dm.v1.PostPanelV2.clickButton: object expected");t.clickButton=l.bilibili.community.service.dm.v1.ClickButtonV2.fromObject(e.clickButton)}if(null!=e.textInput){if("object"!==typeof e.textInput)throw TypeError(".bilibili.community.service.dm.v1.PostPanelV2.textInput: object expected");t.textInput=l.bilibili.community.service.dm.v1.TextInputV2.fromObject(e.textInput)}if(null!=e.checkBox){if("object"!==typeof e.checkBox)throw TypeError(".bilibili.community.service.dm.v1.PostPanelV2.checkBox: object expected");t.checkBox=l.bilibili.community.service.dm.v1.CheckBoxV2.fromObject(e.checkBox)}if(null!=e.toast){if("object"!==typeof e.toast)throw TypeError(".bilibili.community.service.dm.v1.PostPanelV2.toast: object expected");t.toast=l.bilibili.community.service.dm.v1.ToastV2.fromObject(e.toast)}if(null!=e.bubble){if("object"!==typeof e.bubble)throw TypeError(".bilibili.community.service.dm.v1.PostPanelV2.bubble: object expected");t.bubble=l.bilibili.community.service.dm.v1.BubbleV2.fromObject(e.bubble)}if(null!=e.label){if("object"!==typeof e.label)throw TypeError(".bilibili.community.service.dm.v1.PostPanelV2.label: object expected");t.label=l.bilibili.community.service.dm.v1.LabelV2.fromObject(e.label)}switch(e.postStatus){default:if("number"===typeof e.postStatus){t.postStatus=e.postStatus;break}break;case"PostStatusNormal":case 0:t.postStatus=0;break;case"PostStatusClosed":case 1:t.postStatus=1;break}return t},e.toObject=function(e,t){t||(t={});var i={};if(t.defaults){if(s.Long){var o=new s.Long(0,0,!1);i.start=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.start=t.longs===String?"0":0;if(s.Long){o=new s.Long(0,0,!1);i.end=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.end=t.longs===String?"0":0;i.bizType=t.enums===String?"PostPanelBizTypeNone":0,i.clickButton=null,i.textInput=null,i.checkBox=null,i.toast=null,i.bubble=null,i.label=null,i.postStatus=t.enums===String?"PostStatusNormal":0}return null!=e.start&&e.hasOwnProperty("start")&&("number"===typeof e.start?i.start=t.longs===String?String(e.start):e.start:i.start=t.longs===String?s.Long.prototype.toString.call(e.start):t.longs===Number?new s.LongBits(e.start.low>>>0,e.start.high>>>0).toNumber():e.start),null!=e.end&&e.hasOwnProperty("end")&&("number"===typeof e.end?i.end=t.longs===String?String(e.end):e.end:i.end=t.longs===String?s.Long.prototype.toString.call(e.end):t.longs===Number?new s.LongBits(e.end.low>>>0,e.end.high>>>0).toNumber():e.end),null!=e.bizType&&e.hasOwnProperty("bizType")&&(i.bizType=t.enums===String?void 0===l.bilibili.community.service.dm.v1.PostPanelBizType[e.bizType]?e.bizType:l.bilibili.community.service.dm.v1.PostPanelBizType[e.bizType]:e.bizType),null!=e.clickButton&&e.hasOwnProperty("clickButton")&&(i.clickButton=l.bilibili.community.service.dm.v1.ClickButtonV2.toObject(e.clickButton,t)),null!=e.textInput&&e.hasOwnProperty("textInput")&&(i.textInput=l.bilibili.community.service.dm.v1.TextInputV2.toObject(e.textInput,t)),null!=e.checkBox&&e.hasOwnProperty("checkBox")&&(i.checkBox=l.bilibili.community.service.dm.v1.CheckBoxV2.toObject(e.checkBox,t)),null!=e.toast&&e.hasOwnProperty("toast")&&(i.toast=l.bilibili.community.service.dm.v1.ToastV2.toObject(e.toast,t)),null!=e.bubble&&e.hasOwnProperty("bubble")&&(i.bubble=l.bilibili.community.service.dm.v1.BubbleV2.toObject(e.bubble,t)),null!=e.label&&e.hasOwnProperty("label")&&(i.label=l.bilibili.community.service.dm.v1.LabelV2.toObject(e.label,t)),null!=e.postStatus&&e.hasOwnProperty("postStatus")&&(i.postStatus=t.enums===String?void 0===l.bilibili.community.service.dm.v1.PostStatus[e.postStatus]?e.postStatus:l.bilibili.community.service.dm.v1.PostStatus[e.postStatus]:e.postStatus),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.PostPanelV2"},e}(),e.ClickButton=function(){function e(e){if(this.portraitText=[],this.landscapeText=[],this.portraitTextFocus=[],this.landscapeTextFocus=[],e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.portraitText=s.emptyArray,e.prototype.landscapeText=s.emptyArray,e.prototype.portraitTextFocus=s.emptyArray,e.prototype.landscapeTextFocus=s.emptyArray,e.prototype.renderType=0,e.prototype.show=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=a.create()),null!=e.portraitText&&e.portraitText.length)for(var i=0;i<e.portraitText.length;++i)t.uint32(10).string(e.portraitText[i]);if(null!=e.landscapeText&&e.landscapeText.length)for(i=0;i<e.landscapeText.length;++i)t.uint32(18).string(e.landscapeText[i]);if(null!=e.portraitTextFocus&&e.portraitTextFocus.length)for(i=0;i<e.portraitTextFocus.length;++i)t.uint32(26).string(e.portraitTextFocus[i]);if(null!=e.landscapeTextFocus&&e.landscapeTextFocus.length)for(i=0;i<e.landscapeTextFocus.length;++i)t.uint32(34).string(e.landscapeTextFocus[i]);return null!=e.renderType&&Object.hasOwnProperty.call(e,"renderType")&&t.uint32(40).int32(e.renderType),null!=e.show&&Object.hasOwnProperty.call(e,"show")&&t.uint32(48).bool(e.show),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.ClickButton;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.portraitText&&o.portraitText.length||(o.portraitText=[]),o.portraitText.push(e.string());break;case 2:o.landscapeText&&o.landscapeText.length||(o.landscapeText=[]),o.landscapeText.push(e.string());break;case 3:o.portraitTextFocus&&o.portraitTextFocus.length||(o.portraitTextFocus=[]),o.portraitTextFocus.push(e.string());break;case 4:o.landscapeTextFocus&&o.landscapeTextFocus.length||(o.landscapeTextFocus=[]),o.landscapeTextFocus.push(e.string());break;case 5:o.renderType=e.int32();break;case 6:o.show=e.bool();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.portraitText&&e.hasOwnProperty("portraitText")){if(!Array.isArray(e.portraitText))return"portraitText: array expected";for(var t=0;t<e.portraitText.length;++t)if(!s.isString(e.portraitText[t]))return"portraitText: string[] expected"}if(null!=e.landscapeText&&e.hasOwnProperty("landscapeText")){if(!Array.isArray(e.landscapeText))return"landscapeText: array expected";for(t=0;t<e.landscapeText.length;++t)if(!s.isString(e.landscapeText[t]))return"landscapeText: string[] expected"}if(null!=e.portraitTextFocus&&e.hasOwnProperty("portraitTextFocus")){if(!Array.isArray(e.portraitTextFocus))return"portraitTextFocus: array expected";for(t=0;t<e.portraitTextFocus.length;++t)if(!s.isString(e.portraitTextFocus[t]))return"portraitTextFocus: string[] expected"}if(null!=e.landscapeTextFocus&&e.hasOwnProperty("landscapeTextFocus")){if(!Array.isArray(e.landscapeTextFocus))return"landscapeTextFocus: array expected";for(t=0;t<e.landscapeTextFocus.length;++t)if(!s.isString(e.landscapeTextFocus[t]))return"landscapeTextFocus: string[] expected"}if(null!=e.renderType&&e.hasOwnProperty("renderType"))switch(e.renderType){default:return"renderType: enum value expected";case 0:case 1:case 2:break}return null!=e.show&&e.hasOwnProperty("show")&&"boolean"!==typeof e.show?"show: boolean expected":null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.ClickButton)return e;var t=new l.bilibili.community.service.dm.v1.ClickButton;if(e.portraitText){if(!Array.isArray(e.portraitText))throw TypeError(".bilibili.community.service.dm.v1.ClickButton.portraitText: array expected");t.portraitText=[];for(var i=0;i<e.portraitText.length;++i)t.portraitText[i]=String(e.portraitText[i])}if(e.landscapeText){if(!Array.isArray(e.landscapeText))throw TypeError(".bilibili.community.service.dm.v1.ClickButton.landscapeText: array expected");t.landscapeText=[];for(i=0;i<e.landscapeText.length;++i)t.landscapeText[i]=String(e.landscapeText[i])}if(e.portraitTextFocus){if(!Array.isArray(e.portraitTextFocus))throw TypeError(".bilibili.community.service.dm.v1.ClickButton.portraitTextFocus: array expected");t.portraitTextFocus=[];for(i=0;i<e.portraitTextFocus.length;++i)t.portraitTextFocus[i]=String(e.portraitTextFocus[i])}if(e.landscapeTextFocus){if(!Array.isArray(e.landscapeTextFocus))throw TypeError(".bilibili.community.service.dm.v1.ClickButton.landscapeTextFocus: array expected");t.landscapeTextFocus=[];for(i=0;i<e.landscapeTextFocus.length;++i)t.landscapeTextFocus[i]=String(e.landscapeTextFocus[i])}switch(e.renderType){default:if("number"===typeof e.renderType){t.renderType=e.renderType;break}break;case"RenderTypeNone":case 0:t.renderType=0;break;case"RenderTypeSingle":case 1:t.renderType=1;break;case"RenderTypeRotation":case 2:t.renderType=2;break}return null!=e.show&&(t.show=Boolean(e.show)),t},e.toObject=function(e,t){t||(t={});var i={};if((t.arrays||t.defaults)&&(i.portraitText=[],i.landscapeText=[],i.portraitTextFocus=[],i.landscapeTextFocus=[]),t.defaults&&(i.renderType=t.enums===String?"RenderTypeNone":0,i.show=!1),e.portraitText&&e.portraitText.length){i.portraitText=[];for(var o=0;o<e.portraitText.length;++o)i.portraitText[o]=e.portraitText[o]}if(e.landscapeText&&e.landscapeText.length){i.landscapeText=[];for(o=0;o<e.landscapeText.length;++o)i.landscapeText[o]=e.landscapeText[o]}if(e.portraitTextFocus&&e.portraitTextFocus.length){i.portraitTextFocus=[];for(o=0;o<e.portraitTextFocus.length;++o)i.portraitTextFocus[o]=e.portraitTextFocus[o]}if(e.landscapeTextFocus&&e.landscapeTextFocus.length){i.landscapeTextFocus=[];for(o=0;o<e.landscapeTextFocus.length;++o)i.landscapeTextFocus[o]=e.landscapeTextFocus[o]}return null!=e.renderType&&e.hasOwnProperty("renderType")&&(i.renderType=t.enums===String?void 0===l.bilibili.community.service.dm.v1.RenderType[e.renderType]?e.renderType:l.bilibili.community.service.dm.v1.RenderType[e.renderType]:e.renderType),null!=e.show&&e.hasOwnProperty("show")&&(i.show=e.show),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.ClickButton"},e}(),e.ClickButtonV2=function(){function e(e){if(this.portraitText=[],this.landscapeText=[],this.portraitTextFocus=[],this.landscapeTextFocus=[],e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.portraitText=s.emptyArray,e.prototype.landscapeText=s.emptyArray,e.prototype.portraitTextFocus=s.emptyArray,e.prototype.landscapeTextFocus=s.emptyArray,e.prototype.renderType=0,e.prototype.textInputPost=!1,e.prototype.exposureOnce=!1,e.prototype.exposureType=0,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=a.create()),null!=e.portraitText&&e.portraitText.length)for(var i=0;i<e.portraitText.length;++i)t.uint32(10).string(e.portraitText[i]);if(null!=e.landscapeText&&e.landscapeText.length)for(i=0;i<e.landscapeText.length;++i)t.uint32(18).string(e.landscapeText[i]);if(null!=e.portraitTextFocus&&e.portraitTextFocus.length)for(i=0;i<e.portraitTextFocus.length;++i)t.uint32(26).string(e.portraitTextFocus[i]);if(null!=e.landscapeTextFocus&&e.landscapeTextFocus.length)for(i=0;i<e.landscapeTextFocus.length;++i)t.uint32(34).string(e.landscapeTextFocus[i]);return null!=e.renderType&&Object.hasOwnProperty.call(e,"renderType")&&t.uint32(40).int32(e.renderType),null!=e.textInputPost&&Object.hasOwnProperty.call(e,"textInputPost")&&t.uint32(48).bool(e.textInputPost),null!=e.exposureOnce&&Object.hasOwnProperty.call(e,"exposureOnce")&&t.uint32(56).bool(e.exposureOnce),null!=e.exposureType&&Object.hasOwnProperty.call(e,"exposureType")&&t.uint32(64).int32(e.exposureType),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.ClickButtonV2;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.portraitText&&o.portraitText.length||(o.portraitText=[]),o.portraitText.push(e.string());break;case 2:o.landscapeText&&o.landscapeText.length||(o.landscapeText=[]),o.landscapeText.push(e.string());break;case 3:o.portraitTextFocus&&o.portraitTextFocus.length||(o.portraitTextFocus=[]),o.portraitTextFocus.push(e.string());break;case 4:o.landscapeTextFocus&&o.landscapeTextFocus.length||(o.landscapeTextFocus=[]),o.landscapeTextFocus.push(e.string());break;case 5:o.renderType=e.int32();break;case 6:o.textInputPost=e.bool();break;case 7:o.exposureOnce=e.bool();break;case 8:o.exposureType=e.int32();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.portraitText&&e.hasOwnProperty("portraitText")){if(!Array.isArray(e.portraitText))return"portraitText: array expected";for(var t=0;t<e.portraitText.length;++t)if(!s.isString(e.portraitText[t]))return"portraitText: string[] expected"}if(null!=e.landscapeText&&e.hasOwnProperty("landscapeText")){if(!Array.isArray(e.landscapeText))return"landscapeText: array expected";for(t=0;t<e.landscapeText.length;++t)if(!s.isString(e.landscapeText[t]))return"landscapeText: string[] expected"}if(null!=e.portraitTextFocus&&e.hasOwnProperty("portraitTextFocus")){if(!Array.isArray(e.portraitTextFocus))return"portraitTextFocus: array expected";for(t=0;t<e.portraitTextFocus.length;++t)if(!s.isString(e.portraitTextFocus[t]))return"portraitTextFocus: string[] expected"}if(null!=e.landscapeTextFocus&&e.hasOwnProperty("landscapeTextFocus")){if(!Array.isArray(e.landscapeTextFocus))return"landscapeTextFocus: array expected";for(t=0;t<e.landscapeTextFocus.length;++t)if(!s.isString(e.landscapeTextFocus[t]))return"landscapeTextFocus: string[] expected"}if(null!=e.renderType&&e.hasOwnProperty("renderType"))switch(e.renderType){default:return"renderType: enum value expected";case 0:case 1:case 2:break}if(null!=e.textInputPost&&e.hasOwnProperty("textInputPost")&&"boolean"!==typeof e.textInputPost)return"textInputPost: boolean expected";if(null!=e.exposureOnce&&e.hasOwnProperty("exposureOnce")&&"boolean"!==typeof e.exposureOnce)return"exposureOnce: boolean expected";if(null!=e.exposureType&&e.hasOwnProperty("exposureType"))switch(e.exposureType){default:return"exposureType: enum value expected";case 0:case 1:break}return null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.ClickButtonV2)return e;var t=new l.bilibili.community.service.dm.v1.ClickButtonV2;if(e.portraitText){if(!Array.isArray(e.portraitText))throw TypeError(".bilibili.community.service.dm.v1.ClickButtonV2.portraitText: array expected");t.portraitText=[];for(var i=0;i<e.portraitText.length;++i)t.portraitText[i]=String(e.portraitText[i])}if(e.landscapeText){if(!Array.isArray(e.landscapeText))throw TypeError(".bilibili.community.service.dm.v1.ClickButtonV2.landscapeText: array expected");t.landscapeText=[];for(i=0;i<e.landscapeText.length;++i)t.landscapeText[i]=String(e.landscapeText[i])}if(e.portraitTextFocus){if(!Array.isArray(e.portraitTextFocus))throw TypeError(".bilibili.community.service.dm.v1.ClickButtonV2.portraitTextFocus: array expected");t.portraitTextFocus=[];for(i=0;i<e.portraitTextFocus.length;++i)t.portraitTextFocus[i]=String(e.portraitTextFocus[i])}if(e.landscapeTextFocus){if(!Array.isArray(e.landscapeTextFocus))throw TypeError(".bilibili.community.service.dm.v1.ClickButtonV2.landscapeTextFocus: array expected");t.landscapeTextFocus=[];for(i=0;i<e.landscapeTextFocus.length;++i)t.landscapeTextFocus[i]=String(e.landscapeTextFocus[i])}switch(e.renderType){default:if("number"===typeof e.renderType){t.renderType=e.renderType;break}break;case"RenderTypeNone":case 0:t.renderType=0;break;case"RenderTypeSingle":case 1:t.renderType=1;break;case"RenderTypeRotation":case 2:t.renderType=2;break}switch(null!=e.textInputPost&&(t.textInputPost=Boolean(e.textInputPost)),null!=e.exposureOnce&&(t.exposureOnce=Boolean(e.exposureOnce)),e.exposureType){default:if("number"===typeof e.exposureType){t.exposureType=e.exposureType;break}break;case"ExposureTypeNone":case 0:t.exposureType=0;break;case"ExposureTypeDMSend":case 1:t.exposureType=1;break}return t},e.toObject=function(e,t){t||(t={});var i={};if((t.arrays||t.defaults)&&(i.portraitText=[],i.landscapeText=[],i.portraitTextFocus=[],i.landscapeTextFocus=[]),t.defaults&&(i.renderType=t.enums===String?"RenderTypeNone":0,i.textInputPost=!1,i.exposureOnce=!1,i.exposureType=t.enums===String?"ExposureTypeNone":0),e.portraitText&&e.portraitText.length){i.portraitText=[];for(var o=0;o<e.portraitText.length;++o)i.portraitText[o]=e.portraitText[o]}if(e.landscapeText&&e.landscapeText.length){i.landscapeText=[];for(o=0;o<e.landscapeText.length;++o)i.landscapeText[o]=e.landscapeText[o]}if(e.portraitTextFocus&&e.portraitTextFocus.length){i.portraitTextFocus=[];for(o=0;o<e.portraitTextFocus.length;++o)i.portraitTextFocus[o]=e.portraitTextFocus[o]}if(e.landscapeTextFocus&&e.landscapeTextFocus.length){i.landscapeTextFocus=[];for(o=0;o<e.landscapeTextFocus.length;++o)i.landscapeTextFocus[o]=e.landscapeTextFocus[o]}return null!=e.renderType&&e.hasOwnProperty("renderType")&&(i.renderType=t.enums===String?void 0===l.bilibili.community.service.dm.v1.RenderType[e.renderType]?e.renderType:l.bilibili.community.service.dm.v1.RenderType[e.renderType]:e.renderType),null!=e.textInputPost&&e.hasOwnProperty("textInputPost")&&(i.textInputPost=e.textInputPost),null!=e.exposureOnce&&e.hasOwnProperty("exposureOnce")&&(i.exposureOnce=e.exposureOnce),null!=e.exposureType&&e.hasOwnProperty("exposureType")&&(i.exposureType=t.enums===String?void 0===l.bilibili.community.service.dm.v1.ExposureType[e.exposureType]?e.exposureType:l.bilibili.community.service.dm.v1.ExposureType[e.exposureType]:e.exposureType),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.ClickButtonV2"},e}(),e.PostPanelBizType=function(){var e={},t=Object.create(e);return t[e[0]="PostPanelBizTypeNone"]=0,t[e[1]="PostPanelBizTypeEncourage"]=1,t[e[4]="PostPanelBizTypeFragClose"]=4,t[e[2]="PostPanelBizTypeColorDM"]=2,t}(),e.TextInput=function(){function e(e){if(this.portraitPlaceholder=[],this.landscapePlaceholder=[],e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.portraitPlaceholder=s.emptyArray,e.prototype.landscapePlaceholder=s.emptyArray,e.prototype.renderType=0,e.prototype.placeholderPost=!1,e.prototype.show=!1,e.prototype.postStatus=0,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=a.create()),null!=e.portraitPlaceholder&&e.portraitPlaceholder.length)for(var i=0;i<e.portraitPlaceholder.length;++i)t.uint32(10).string(e.portraitPlaceholder[i]);if(null!=e.landscapePlaceholder&&e.landscapePlaceholder.length)for(i=0;i<e.landscapePlaceholder.length;++i)t.uint32(18).string(e.landscapePlaceholder[i]);return null!=e.renderType&&Object.hasOwnProperty.call(e,"renderType")&&t.uint32(24).int32(e.renderType),null!=e.placeholderPost&&Object.hasOwnProperty.call(e,"placeholderPost")&&t.uint32(32).bool(e.placeholderPost),null!=e.show&&Object.hasOwnProperty.call(e,"show")&&t.uint32(40).bool(e.show),null!=e.postStatus&&Object.hasOwnProperty.call(e,"postStatus")&&t.uint32(56).int32(e.postStatus),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.TextInput;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.portraitPlaceholder&&o.portraitPlaceholder.length||(o.portraitPlaceholder=[]),o.portraitPlaceholder.push(e.string());break;case 2:o.landscapePlaceholder&&o.landscapePlaceholder.length||(o.landscapePlaceholder=[]),o.landscapePlaceholder.push(e.string());break;case 3:o.renderType=e.int32();break;case 4:o.placeholderPost=e.bool();break;case 5:o.show=e.bool();break;case 7:o.postStatus=e.int32();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.portraitPlaceholder&&e.hasOwnProperty("portraitPlaceholder")){if(!Array.isArray(e.portraitPlaceholder))return"portraitPlaceholder: array expected";for(var t=0;t<e.portraitPlaceholder.length;++t)if(!s.isString(e.portraitPlaceholder[t]))return"portraitPlaceholder: string[] expected"}if(null!=e.landscapePlaceholder&&e.hasOwnProperty("landscapePlaceholder")){if(!Array.isArray(e.landscapePlaceholder))return"landscapePlaceholder: array expected";for(t=0;t<e.landscapePlaceholder.length;++t)if(!s.isString(e.landscapePlaceholder[t]))return"landscapePlaceholder: string[] expected"}if(null!=e.renderType&&e.hasOwnProperty("renderType"))switch(e.renderType){default:return"renderType: enum value expected";case 0:case 1:case 2:break}if(null!=e.placeholderPost&&e.hasOwnProperty("placeholderPost")&&"boolean"!==typeof e.placeholderPost)return"placeholderPost: boolean expected";if(null!=e.show&&e.hasOwnProperty("show")&&"boolean"!==typeof e.show)return"show: boolean expected";if(null!=e.postStatus&&e.hasOwnProperty("postStatus"))switch(e.postStatus){default:return"postStatus: enum value expected";case 0:case 1:break}return null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.TextInput)return e;var t=new l.bilibili.community.service.dm.v1.TextInput;if(e.portraitPlaceholder){if(!Array.isArray(e.portraitPlaceholder))throw TypeError(".bilibili.community.service.dm.v1.TextInput.portraitPlaceholder: array expected");t.portraitPlaceholder=[];for(var i=0;i<e.portraitPlaceholder.length;++i)t.portraitPlaceholder[i]=String(e.portraitPlaceholder[i])}if(e.landscapePlaceholder){if(!Array.isArray(e.landscapePlaceholder))throw TypeError(".bilibili.community.service.dm.v1.TextInput.landscapePlaceholder: array expected");t.landscapePlaceholder=[];for(i=0;i<e.landscapePlaceholder.length;++i)t.landscapePlaceholder[i]=String(e.landscapePlaceholder[i])}switch(e.renderType){default:if("number"===typeof e.renderType){t.renderType=e.renderType;break}break;case"RenderTypeNone":case 0:t.renderType=0;break;case"RenderTypeSingle":case 1:t.renderType=1;break;case"RenderTypeRotation":case 2:t.renderType=2;break}switch(null!=e.placeholderPost&&(t.placeholderPost=Boolean(e.placeholderPost)),null!=e.show&&(t.show=Boolean(e.show)),e.postStatus){default:if("number"===typeof e.postStatus){t.postStatus=e.postStatus;break}break;case"PostStatusNormal":case 0:t.postStatus=0;break;case"PostStatusClosed":case 1:t.postStatus=1;break}return t},e.toObject=function(e,t){t||(t={});var i={};if((t.arrays||t.defaults)&&(i.portraitPlaceholder=[],i.landscapePlaceholder=[]),t.defaults&&(i.renderType=t.enums===String?"RenderTypeNone":0,i.placeholderPost=!1,i.show=!1,i.postStatus=t.enums===String?"PostStatusNormal":0),e.portraitPlaceholder&&e.portraitPlaceholder.length){i.portraitPlaceholder=[];for(var o=0;o<e.portraitPlaceholder.length;++o)i.portraitPlaceholder[o]=e.portraitPlaceholder[o]}if(e.landscapePlaceholder&&e.landscapePlaceholder.length){i.landscapePlaceholder=[];for(o=0;o<e.landscapePlaceholder.length;++o)i.landscapePlaceholder[o]=e.landscapePlaceholder[o]}return null!=e.renderType&&e.hasOwnProperty("renderType")&&(i.renderType=t.enums===String?void 0===l.bilibili.community.service.dm.v1.RenderType[e.renderType]?e.renderType:l.bilibili.community.service.dm.v1.RenderType[e.renderType]:e.renderType),null!=e.placeholderPost&&e.hasOwnProperty("placeholderPost")&&(i.placeholderPost=e.placeholderPost),null!=e.show&&e.hasOwnProperty("show")&&(i.show=e.show),null!=e.postStatus&&e.hasOwnProperty("postStatus")&&(i.postStatus=t.enums===String?void 0===l.bilibili.community.service.dm.v1.PostStatus[e.postStatus]?e.postStatus:l.bilibili.community.service.dm.v1.PostStatus[e.postStatus]:e.postStatus),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.TextInput"},e}(),e.TextInputV2=function(){function e(e){if(this.portraitPlaceholder=[],this.landscapePlaceholder=[],e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.portraitPlaceholder=s.emptyArray,e.prototype.landscapePlaceholder=s.emptyArray,e.prototype.renderType=0,e.prototype.placeholderPost=!1,e.prototype.textInputLimit=0,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=a.create()),null!=e.portraitPlaceholder&&e.portraitPlaceholder.length)for(var i=0;i<e.portraitPlaceholder.length;++i)t.uint32(10).string(e.portraitPlaceholder[i]);if(null!=e.landscapePlaceholder&&e.landscapePlaceholder.length)for(i=0;i<e.landscapePlaceholder.length;++i)t.uint32(18).string(e.landscapePlaceholder[i]);return null!=e.renderType&&Object.hasOwnProperty.call(e,"renderType")&&t.uint32(24).int32(e.renderType),null!=e.placeholderPost&&Object.hasOwnProperty.call(e,"placeholderPost")&&t.uint32(32).bool(e.placeholderPost),null!=e.textInputLimit&&Object.hasOwnProperty.call(e,"textInputLimit")&&t.uint32(48).int32(e.textInputLimit),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.TextInputV2;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.portraitPlaceholder&&o.portraitPlaceholder.length||(o.portraitPlaceholder=[]),o.portraitPlaceholder.push(e.string());break;case 2:o.landscapePlaceholder&&o.landscapePlaceholder.length||(o.landscapePlaceholder=[]),o.landscapePlaceholder.push(e.string());break;case 3:o.renderType=e.int32();break;case 4:o.placeholderPost=e.bool();break;case 6:o.textInputLimit=e.int32();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.portraitPlaceholder&&e.hasOwnProperty("portraitPlaceholder")){if(!Array.isArray(e.portraitPlaceholder))return"portraitPlaceholder: array expected";for(var t=0;t<e.portraitPlaceholder.length;++t)if(!s.isString(e.portraitPlaceholder[t]))return"portraitPlaceholder: string[] expected"}if(null!=e.landscapePlaceholder&&e.hasOwnProperty("landscapePlaceholder")){if(!Array.isArray(e.landscapePlaceholder))return"landscapePlaceholder: array expected";for(t=0;t<e.landscapePlaceholder.length;++t)if(!s.isString(e.landscapePlaceholder[t]))return"landscapePlaceholder: string[] expected"}if(null!=e.renderType&&e.hasOwnProperty("renderType"))switch(e.renderType){default:return"renderType: enum value expected";case 0:case 1:case 2:break}return null!=e.placeholderPost&&e.hasOwnProperty("placeholderPost")&&"boolean"!==typeof e.placeholderPost?"placeholderPost: boolean expected":null!=e.textInputLimit&&e.hasOwnProperty("textInputLimit")&&!s.isInteger(e.textInputLimit)?"textInputLimit: integer expected":null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.TextInputV2)return e;var t=new l.bilibili.community.service.dm.v1.TextInputV2;if(e.portraitPlaceholder){if(!Array.isArray(e.portraitPlaceholder))throw TypeError(".bilibili.community.service.dm.v1.TextInputV2.portraitPlaceholder: array expected");t.portraitPlaceholder=[];for(var i=0;i<e.portraitPlaceholder.length;++i)t.portraitPlaceholder[i]=String(e.portraitPlaceholder[i])}if(e.landscapePlaceholder){if(!Array.isArray(e.landscapePlaceholder))throw TypeError(".bilibili.community.service.dm.v1.TextInputV2.landscapePlaceholder: array expected");t.landscapePlaceholder=[];for(i=0;i<e.landscapePlaceholder.length;++i)t.landscapePlaceholder[i]=String(e.landscapePlaceholder[i])}switch(e.renderType){default:if("number"===typeof e.renderType){t.renderType=e.renderType;break}break;case"RenderTypeNone":case 0:t.renderType=0;break;case"RenderTypeSingle":case 1:t.renderType=1;break;case"RenderTypeRotation":case 2:t.renderType=2;break}return null!=e.placeholderPost&&(t.placeholderPost=Boolean(e.placeholderPost)),null!=e.textInputLimit&&(t.textInputLimit=0|e.textInputLimit),t},e.toObject=function(e,t){t||(t={});var i={};if((t.arrays||t.defaults)&&(i.portraitPlaceholder=[],i.landscapePlaceholder=[]),t.defaults&&(i.renderType=t.enums===String?"RenderTypeNone":0,i.placeholderPost=!1,i.textInputLimit=0),e.portraitPlaceholder&&e.portraitPlaceholder.length){i.portraitPlaceholder=[];for(var o=0;o<e.portraitPlaceholder.length;++o)i.portraitPlaceholder[o]=e.portraitPlaceholder[o]}if(e.landscapePlaceholder&&e.landscapePlaceholder.length){i.landscapePlaceholder=[];for(o=0;o<e.landscapePlaceholder.length;++o)i.landscapePlaceholder[o]=e.landscapePlaceholder[o]}return null!=e.renderType&&e.hasOwnProperty("renderType")&&(i.renderType=t.enums===String?void 0===l.bilibili.community.service.dm.v1.RenderType[e.renderType]?e.renderType:l.bilibili.community.service.dm.v1.RenderType[e.renderType]:e.renderType),null!=e.placeholderPost&&e.hasOwnProperty("placeholderPost")&&(i.placeholderPost=e.placeholderPost),null!=e.textInputLimit&&e.hasOwnProperty("textInputLimit")&&(i.textInputLimit=e.textInputLimit),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.TextInputV2"},e}(),e.PostStatus=function(){var e={},t=Object.create(e);return t[e[0]="PostStatusNormal"]=0,t[e[1]="PostStatusClosed"]=1,t}(),e.RenderType=function(){var e={},t=Object.create(e);return t[e[0]="RenderTypeNone"]=0,t[e[1]="RenderTypeSingle"]=1,t[e[2]="RenderTypeRotation"]=2,t}(),e.CheckBox=function(){function e(e){if(e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.text="",e.prototype.type=0,e.prototype.defaultValue=!1,e.prototype.show=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=a.create()),null!=e.text&&Object.hasOwnProperty.call(e,"text")&&t.uint32(10).string(e.text),null!=e.type&&Object.hasOwnProperty.call(e,"type")&&t.uint32(16).int32(e.type),null!=e.defaultValue&&Object.hasOwnProperty.call(e,"defaultValue")&&t.uint32(24).bool(e.defaultValue),null!=e.show&&Object.hasOwnProperty.call(e,"show")&&t.uint32(32).bool(e.show),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.CheckBox;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.text=e.string();break;case 2:o.type=e.int32();break;case 3:o.defaultValue=e.bool();break;case 4:o.show=e.bool();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.text&&e.hasOwnProperty("text")&&!s.isString(e.text))return"text: string expected";if(null!=e.type&&e.hasOwnProperty("type"))switch(e.type){default:return"type: enum value expected";case 0:case 1:break}return null!=e.defaultValue&&e.hasOwnProperty("defaultValue")&&"boolean"!==typeof e.defaultValue?"defaultValue: boolean expected":null!=e.show&&e.hasOwnProperty("show")&&"boolean"!==typeof e.show?"show: boolean expected":null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.CheckBox)return e;var t=new l.bilibili.community.service.dm.v1.CheckBox;switch(null!=e.text&&(t.text=String(e.text)),e.type){default:if("number"===typeof e.type){t.type=e.type;break}break;case"CheckboxTypeNone":case 0:t.type=0;break;case"CheckboxTypeEncourage":case 1:t.type=1;break}return null!=e.defaultValue&&(t.defaultValue=Boolean(e.defaultValue)),null!=e.show&&(t.show=Boolean(e.show)),t},e.toObject=function(e,t){t||(t={});var i={};return t.defaults&&(i.text="",i.type=t.enums===String?"CheckboxTypeNone":0,i.defaultValue=!1,i.show=!1),null!=e.text&&e.hasOwnProperty("text")&&(i.text=e.text),null!=e.type&&e.hasOwnProperty("type")&&(i.type=t.enums===String?void 0===l.bilibili.community.service.dm.v1.CheckboxType[e.type]?e.type:l.bilibili.community.service.dm.v1.CheckboxType[e.type]:e.type),null!=e.defaultValue&&e.hasOwnProperty("defaultValue")&&(i.defaultValue=e.defaultValue),null!=e.show&&e.hasOwnProperty("show")&&(i.show=e.show),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.CheckBox"},e}(),e.CheckBoxV2=function(){function e(e){if(e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.text="",e.prototype.type=0,e.prototype.defaultValue=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=a.create()),null!=e.text&&Object.hasOwnProperty.call(e,"text")&&t.uint32(10).string(e.text),null!=e.type&&Object.hasOwnProperty.call(e,"type")&&t.uint32(16).int32(e.type),null!=e.defaultValue&&Object.hasOwnProperty.call(e,"defaultValue")&&t.uint32(24).bool(e.defaultValue),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.CheckBoxV2;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.text=e.string();break;case 2:o.type=e.int32();break;case 3:o.defaultValue=e.bool();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.text&&e.hasOwnProperty("text")&&!s.isString(e.text))return"text: string expected";if(null!=e.type&&e.hasOwnProperty("type"))switch(e.type){default:return"type: enum value expected";case 0:case 1:break}return null!=e.defaultValue&&e.hasOwnProperty("defaultValue")&&"boolean"!==typeof e.defaultValue?"defaultValue: boolean expected":null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.CheckBoxV2)return e;var t=new l.bilibili.community.service.dm.v1.CheckBoxV2;switch(null!=e.text&&(t.text=String(e.text)),e.type){default:if("number"===typeof e.type){t.type=e.type;break}break;case"CheckboxTypeNone":case 0:t.type=0;break;case"CheckboxTypeEncourage":case 1:t.type=1;break}return null!=e.defaultValue&&(t.defaultValue=Boolean(e.defaultValue)),t},e.toObject=function(e,t){t||(t={});var i={};return t.defaults&&(i.text="",i.type=t.enums===String?"CheckboxTypeNone":0,i.defaultValue=!1),null!=e.text&&e.hasOwnProperty("text")&&(i.text=e.text),null!=e.type&&e.hasOwnProperty("type")&&(i.type=t.enums===String?void 0===l.bilibili.community.service.dm.v1.CheckboxType[e.type]?e.type:l.bilibili.community.service.dm.v1.CheckboxType[e.type]:e.type),null!=e.defaultValue&&e.hasOwnProperty("defaultValue")&&(i.defaultValue=e.defaultValue),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.CheckBoxV2"},e}(),e.CheckboxType=function(){var e={},t=Object.create(e);return t[e[0]="CheckboxTypeNone"]=0,t[e[1]="CheckboxTypeEncourage"]=1,t}(),e.Toast=function(){function e(e){if(e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.text="",e.prototype.duration=0,e.prototype.show=!1,e.prototype.button=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=a.create()),null!=e.text&&Object.hasOwnProperty.call(e,"text")&&t.uint32(10).string(e.text),null!=e.duration&&Object.hasOwnProperty.call(e,"duration")&&t.uint32(16).int32(e.duration),null!=e.show&&Object.hasOwnProperty.call(e,"show")&&t.uint32(24).bool(e.show),null!=e.button&&Object.hasOwnProperty.call(e,"button")&&l.bilibili.community.service.dm.v1.Button.encode(e.button,t.uint32(34).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.Toast;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.text=e.string();break;case 2:o.duration=e.int32();break;case 3:o.show=e.bool();break;case 4:o.button=l.bilibili.community.service.dm.v1.Button.decode(e,e.uint32());break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.text&&e.hasOwnProperty("text")&&!s.isString(e.text))return"text: string expected";if(null!=e.duration&&e.hasOwnProperty("duration")&&!s.isInteger(e.duration))return"duration: integer expected";if(null!=e.show&&e.hasOwnProperty("show")&&"boolean"!==typeof e.show)return"show: boolean expected";if(null!=e.button&&e.hasOwnProperty("button")){var t=l.bilibili.community.service.dm.v1.Button.verify(e.button);if(t)return"button."+t}return null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.Toast)return e;var t=new l.bilibili.community.service.dm.v1.Toast;if(null!=e.text&&(t.text=String(e.text)),null!=e.duration&&(t.duration=0|e.duration),null!=e.show&&(t.show=Boolean(e.show)),null!=e.button){if("object"!==typeof e.button)throw TypeError(".bilibili.community.service.dm.v1.Toast.button: object expected");t.button=l.bilibili.community.service.dm.v1.Button.fromObject(e.button)}return t},e.toObject=function(e,t){t||(t={});var i={};return t.defaults&&(i.text="",i.duration=0,i.show=!1,i.button=null),null!=e.text&&e.hasOwnProperty("text")&&(i.text=e.text),null!=e.duration&&e.hasOwnProperty("duration")&&(i.duration=e.duration),null!=e.show&&e.hasOwnProperty("show")&&(i.show=e.show),null!=e.button&&e.hasOwnProperty("button")&&(i.button=l.bilibili.community.service.dm.v1.Button.toObject(e.button,t)),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.Toast"},e}(),e.ToastV2=function(){function e(e){if(e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.text="",e.prototype.duration=0,e.prototype.toastButtonV2=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=a.create()),null!=e.text&&Object.hasOwnProperty.call(e,"text")&&t.uint32(10).string(e.text),null!=e.duration&&Object.hasOwnProperty.call(e,"duration")&&t.uint32(16).int32(e.duration),null!=e.toastButtonV2&&Object.hasOwnProperty.call(e,"toastButtonV2")&&l.bilibili.community.service.dm.v1.ToastButtonV2.encode(e.toastButtonV2,t.uint32(26).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.ToastV2;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.text=e.string();break;case 2:o.duration=e.int32();break;case 3:o.toastButtonV2=l.bilibili.community.service.dm.v1.ToastButtonV2.decode(e,e.uint32());break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.text&&e.hasOwnProperty("text")&&!s.isString(e.text))return"text: string expected";if(null!=e.duration&&e.hasOwnProperty("duration")&&!s.isInteger(e.duration))return"duration: integer expected";if(null!=e.toastButtonV2&&e.hasOwnProperty("toastButtonV2")){var t=l.bilibili.community.service.dm.v1.ToastButtonV2.verify(e.toastButtonV2);if(t)return"toastButtonV2."+t}return null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.ToastV2)return e;var t=new l.bilibili.community.service.dm.v1.ToastV2;if(null!=e.text&&(t.text=String(e.text)),null!=e.duration&&(t.duration=0|e.duration),null!=e.toastButtonV2){if("object"!==typeof e.toastButtonV2)throw TypeError(".bilibili.community.service.dm.v1.ToastV2.toastButtonV2: object expected");t.toastButtonV2=l.bilibili.community.service.dm.v1.ToastButtonV2.fromObject(e.toastButtonV2)}return t},e.toObject=function(e,t){t||(t={});var i={};return t.defaults&&(i.text="",i.duration=0,i.toastButtonV2=null),null!=e.text&&e.hasOwnProperty("text")&&(i.text=e.text),null!=e.duration&&e.hasOwnProperty("duration")&&(i.duration=e.duration),null!=e.toastButtonV2&&e.hasOwnProperty("toastButtonV2")&&(i.toastButtonV2=l.bilibili.community.service.dm.v1.ToastButtonV2.toObject(e.toastButtonV2,t)),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.ToastV2"},e}(),e.BubbleV2=function(){function e(e){if(e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.text="",e.prototype.url="",e.prototype.bubbleType=0,e.prototype.exposureOnce=!1,e.prototype.exposureType=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=a.create()),null!=e.text&&Object.hasOwnProperty.call(e,"text")&&t.uint32(10).string(e.text),null!=e.url&&Object.hasOwnProperty.call(e,"url")&&t.uint32(18).string(e.url),null!=e.bubbleType&&Object.hasOwnProperty.call(e,"bubbleType")&&t.uint32(24).int32(e.bubbleType),null!=e.exposureOnce&&Object.hasOwnProperty.call(e,"exposureOnce")&&t.uint32(32).bool(e.exposureOnce),null!=e.exposureType&&Object.hasOwnProperty.call(e,"exposureType")&&t.uint32(40).int32(e.exposureType),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.BubbleV2;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.text=e.string();break;case 2:o.url=e.string();break;case 3:o.bubbleType=e.int32();break;case 4:o.exposureOnce=e.bool();break;case 5:o.exposureType=e.int32();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.text&&e.hasOwnProperty("text")&&!s.isString(e.text))return"text: string expected";if(null!=e.url&&e.hasOwnProperty("url")&&!s.isString(e.url))return"url: string expected";if(null!=e.bubbleType&&e.hasOwnProperty("bubbleType"))switch(e.bubbleType){default:return"bubbleType: enum value expected";case 0:case 1:case 2:break}if(null!=e.exposureOnce&&e.hasOwnProperty("exposureOnce")&&"boolean"!==typeof e.exposureOnce)return"exposureOnce: boolean expected";if(null!=e.exposureType&&e.hasOwnProperty("exposureType"))switch(e.exposureType){default:return"exposureType: enum value expected";case 0:case 1:break}return null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.BubbleV2)return e;var t=new l.bilibili.community.service.dm.v1.BubbleV2;switch(null!=e.text&&(t.text=String(e.text)),null!=e.url&&(t.url=String(e.url)),e.bubbleType){default:if("number"===typeof e.bubbleType){t.bubbleType=e.bubbleType;break}break;case"BubbleTypeNone":case 0:t.bubbleType=0;break;case"BubbleTypeClickButton":case 1:t.bubbleType=1;break;case"BubbleTypeDmSettingPanel":case 2:t.bubbleType=2;break}switch(null!=e.exposureOnce&&(t.exposureOnce=Boolean(e.exposureOnce)),e.exposureType){default:if("number"===typeof e.exposureType){t.exposureType=e.exposureType;break}break;case"ExposureTypeNone":case 0:t.exposureType=0;break;case"ExposureTypeDMSend":case 1:t.exposureType=1;break}return t},e.toObject=function(e,t){t||(t={});var i={};return t.defaults&&(i.text="",i.url="",i.bubbleType=t.enums===String?"BubbleTypeNone":0,i.exposureOnce=!1,i.exposureType=t.enums===String?"ExposureTypeNone":0),null!=e.text&&e.hasOwnProperty("text")&&(i.text=e.text),null!=e.url&&e.hasOwnProperty("url")&&(i.url=e.url),null!=e.bubbleType&&e.hasOwnProperty("bubbleType")&&(i.bubbleType=t.enums===String?void 0===l.bilibili.community.service.dm.v1.BubbleType[e.bubbleType]?e.bubbleType:l.bilibili.community.service.dm.v1.BubbleType[e.bubbleType]:e.bubbleType),null!=e.exposureOnce&&e.hasOwnProperty("exposureOnce")&&(i.exposureOnce=e.exposureOnce),null!=e.exposureType&&e.hasOwnProperty("exposureType")&&(i.exposureType=t.enums===String?void 0===l.bilibili.community.service.dm.v1.ExposureType[e.exposureType]?e.exposureType:l.bilibili.community.service.dm.v1.ExposureType[e.exposureType]:e.exposureType),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.BubbleV2"},e}(),e.BubbleType=function(){var e={},t=Object.create(e);return t[e[0]="BubbleTypeNone"]=0,t[e[1]="BubbleTypeClickButton"]=1,t[e[2]="BubbleTypeDmSettingPanel"]=2,t}(),e.LabelV2=function(){function e(e){if(this.content=[],e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.title="",e.prototype.content=s.emptyArray,e.prototype.exposureOnce=!1,e.prototype.exposureType=0,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=a.create()),null!=e.title&&Object.hasOwnProperty.call(e,"title")&&t.uint32(10).string(e.title),null!=e.content&&e.content.length)for(var i=0;i<e.content.length;++i)t.uint32(18).string(e.content[i]);return null!=e.exposureOnce&&Object.hasOwnProperty.call(e,"exposureOnce")&&t.uint32(24).bool(e.exposureOnce),null!=e.exposureType&&Object.hasOwnProperty.call(e,"exposureType")&&t.uint32(32).int32(e.exposureType),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.LabelV2;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.title=e.string();break;case 2:o.content&&o.content.length||(o.content=[]),o.content.push(e.string());break;case 3:o.exposureOnce=e.bool();break;case 4:o.exposureType=e.int32();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.title&&e.hasOwnProperty("title")&&!s.isString(e.title))return"title: string expected";if(null!=e.content&&e.hasOwnProperty("content")){if(!Array.isArray(e.content))return"content: array expected";for(var t=0;t<e.content.length;++t)if(!s.isString(e.content[t]))return"content: string[] expected"}if(null!=e.exposureOnce&&e.hasOwnProperty("exposureOnce")&&"boolean"!==typeof e.exposureOnce)return"exposureOnce: boolean expected";if(null!=e.exposureType&&e.hasOwnProperty("exposureType"))switch(e.exposureType){default:return"exposureType: enum value expected";case 0:case 1:break}return null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.LabelV2)return e;var t=new l.bilibili.community.service.dm.v1.LabelV2;if(null!=e.title&&(t.title=String(e.title)),e.content){if(!Array.isArray(e.content))throw TypeError(".bilibili.community.service.dm.v1.LabelV2.content: array expected");t.content=[];for(var i=0;i<e.content.length;++i)t.content[i]=String(e.content[i])}switch(null!=e.exposureOnce&&(t.exposureOnce=Boolean(e.exposureOnce)),e.exposureType){default:if("number"===typeof e.exposureType){t.exposureType=e.exposureType;break}break;case"ExposureTypeNone":case 0:t.exposureType=0;break;case"ExposureTypeDMSend":case 1:t.exposureType=1;break}return t},e.toObject=function(e,t){t||(t={});var i={};if((t.arrays||t.defaults)&&(i.content=[]),t.defaults&&(i.title="",i.exposureOnce=!1,i.exposureType=t.enums===String?"ExposureTypeNone":0),null!=e.title&&e.hasOwnProperty("title")&&(i.title=e.title),e.content&&e.content.length){i.content=[];for(var o=0;o<e.content.length;++o)i.content[o]=e.content[o]}return null!=e.exposureOnce&&e.hasOwnProperty("exposureOnce")&&(i.exposureOnce=e.exposureOnce),null!=e.exposureType&&e.hasOwnProperty("exposureType")&&(i.exposureType=t.enums===String?void 0===l.bilibili.community.service.dm.v1.ExposureType[e.exposureType]?e.exposureType:l.bilibili.community.service.dm.v1.ExposureType[e.exposureType]:e.exposureType),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.LabelV2"},e}(),e.ExposureType=function(){var e={},t=Object.create(e);return t[e[0]="ExposureTypeNone"]=0,t[e[1]="ExposureTypeDMSend"]=1,t}(),e.ToastButtonV2=function(){function e(e){if(e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.text="",e.prototype.action=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=a.create()),null!=e.text&&Object.hasOwnProperty.call(e,"text")&&t.uint32(10).string(e.text),null!=e.action&&Object.hasOwnProperty.call(e,"action")&&t.uint32(16).int32(e.action),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.ToastButtonV2;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.text=e.string();break;case 2:o.action=e.int32();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.text&&e.hasOwnProperty("text")&&!s.isString(e.text))return"text: string expected";if(null!=e.action&&e.hasOwnProperty("action"))switch(e.action){default:return"action: enum value expected";case 0:case 1:break}return null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.ToastButtonV2)return e;var t=new l.bilibili.community.service.dm.v1.ToastButtonV2;switch(null!=e.text&&(t.text=String(e.text)),e.action){default:if("number"===typeof e.action){t.action=e.action;break}break;case"ToastFunctionTypeNone":case 0:t.action=0;break;case"ToastFunctionTypePostPanel":case 1:t.action=1;break}return t},e.toObject=function(e,t){t||(t={});var i={};return t.defaults&&(i.text="",i.action=t.enums===String?"ToastFunctionTypeNone":0),null!=e.text&&e.hasOwnProperty("text")&&(i.text=e.text),null!=e.action&&e.hasOwnProperty("action")&&(i.action=t.enums===String?void 0===l.bilibili.community.service.dm.v1.ToastFunctionType[e.action]?e.action:l.bilibili.community.service.dm.v1.ToastFunctionType[e.action]:e.action),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.ToastButtonV2"},e}(),e.Button=function(){function e(e){if(e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.text="",e.prototype.action=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=a.create()),null!=e.text&&Object.hasOwnProperty.call(e,"text")&&t.uint32(10).string(e.text),null!=e.action&&Object.hasOwnProperty.call(e,"action")&&t.uint32(16).int32(e.action),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.Button;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.text=e.string();break;case 2:o.action=e.int32();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.text&&e.hasOwnProperty("text")&&!s.isString(e.text))return"text: string expected";if(null!=e.action&&e.hasOwnProperty("action"))switch(e.action){default:return"action: enum value expected";case 0:case 1:break}return null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.Button)return e;var t=new l.bilibili.community.service.dm.v1.Button;switch(null!=e.text&&(t.text=String(e.text)),e.action){default:if("number"===typeof e.action){t.action=e.action;break}break;case"ToastFunctionTypeNone":case 0:t.action=0;break;case"ToastFunctionTypePostPanel":case 1:t.action=1;break}return t},e.toObject=function(e,t){t||(t={});var i={};return t.defaults&&(i.text="",i.action=t.enums===String?"ToastFunctionTypeNone":0),null!=e.text&&e.hasOwnProperty("text")&&(i.text=e.text),null!=e.action&&e.hasOwnProperty("action")&&(i.action=t.enums===String?void 0===l.bilibili.community.service.dm.v1.ToastFunctionType[e.action]?e.action:l.bilibili.community.service.dm.v1.ToastFunctionType[e.action]:e.action),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.Button"},e}(),e.ToastFunctionType=function(){var e={},t=Object.create(e);return t[e[0]="ToastFunctionTypeNone"]=0,t[e[1]="ToastFunctionTypePostPanel"]=1,t}(),e.ToastBizType=function(){var e={},t=Object.create(e);return t[e[0]="ToastBizTypeNone"]=0,t[e[1]="ToastBizTypeEncourage"]=1,t}(),e.CommandDm=function(){function e(e){if(e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.oid=s.Long?s.Long.fromBits(0,0,!1):0,e.prototype.mid=s.Long?s.Long.fromBits(0,0,!1):0,e.prototype.command="",e.prototype.text="",e.prototype.stime=0,e.prototype.ctime="",e.prototype.mtime="",e.prototype.extra="",e.prototype.dmid="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=a.create()),null!=e.oid&&Object.hasOwnProperty.call(e,"oid")&&t.uint32(16).int64(e.oid),null!=e.mid&&Object.hasOwnProperty.call(e,"mid")&&t.uint32(24).int64(e.mid),null!=e.command&&Object.hasOwnProperty.call(e,"command")&&t.uint32(34).string(e.command),null!=e.text&&Object.hasOwnProperty.call(e,"text")&&t.uint32(42).string(e.text),null!=e.stime&&Object.hasOwnProperty.call(e,"stime")&&t.uint32(48).int32(e.stime),null!=e.ctime&&Object.hasOwnProperty.call(e,"ctime")&&t.uint32(58).string(e.ctime),null!=e.mtime&&Object.hasOwnProperty.call(e,"mtime")&&t.uint32(66).string(e.mtime),null!=e.extra&&Object.hasOwnProperty.call(e,"extra")&&t.uint32(74).string(e.extra),null!=e.dmid&&Object.hasOwnProperty.call(e,"dmid")&&t.uint32(82).string(e.dmid),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.CommandDm;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 2:o.oid=e.int64();break;case 3:o.mid=e.int64();break;case 4:o.command=e.string();break;case 5:o.text=e.string();break;case 6:o.stime=e.int32();break;case 7:o.ctime=e.string();break;case 8:o.mtime=e.string();break;case 9:o.extra=e.string();break;case 10:o.dmid=e.string();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){return"object"!==typeof e||null===e?"object expected":null==e.oid||!e.hasOwnProperty("oid")||s.isInteger(e.oid)||e.oid&&s.isInteger(e.oid.low)&&s.isInteger(e.oid.high)?null==e.mid||!e.hasOwnProperty("mid")||s.isInteger(e.mid)||e.mid&&s.isInteger(e.mid.low)&&s.isInteger(e.mid.high)?null!=e.command&&e.hasOwnProperty("command")&&!s.isString(e.command)?"command: string expected":null!=e.text&&e.hasOwnProperty("text")&&!s.isString(e.text)?"text: string expected":null!=e.stime&&e.hasOwnProperty("stime")&&!s.isInteger(e.stime)?"stime: integer expected":null!=e.ctime&&e.hasOwnProperty("ctime")&&!s.isString(e.ctime)?"ctime: string expected":null!=e.mtime&&e.hasOwnProperty("mtime")&&!s.isString(e.mtime)?"mtime: string expected":null!=e.extra&&e.hasOwnProperty("extra")&&!s.isString(e.extra)?"extra: string expected":null!=e.dmid&&e.hasOwnProperty("dmid")&&!s.isString(e.dmid)?"dmid: string expected":null:"mid: integer|Long expected":"oid: integer|Long expected"},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.CommandDm)return e;var t=new l.bilibili.community.service.dm.v1.CommandDm;return null!=e.oid&&(s.Long?(t.oid=s.Long.fromValue(e.oid)).unsigned=!1:"string"===typeof e.oid?t.oid=parseInt(e.oid,10):"number"===typeof e.oid?t.oid=e.oid:"object"===typeof e.oid&&(t.oid=new s.LongBits(e.oid.low>>>0,e.oid.high>>>0).toNumber())),null!=e.mid&&(s.Long?(t.mid=s.Long.fromValue(e.mid)).unsigned=!1:"string"===typeof e.mid?t.mid=parseInt(e.mid,10):"number"===typeof e.mid?t.mid=e.mid:"object"===typeof e.mid&&(t.mid=new s.LongBits(e.mid.low>>>0,e.mid.high>>>0).toNumber())),null!=e.command&&(t.command=String(e.command)),null!=e.text&&(t.text=String(e.text)),null!=e.stime&&(t.stime=0|e.stime),null!=e.ctime&&(t.ctime=String(e.ctime)),null!=e.mtime&&(t.mtime=String(e.mtime)),null!=e.extra&&(t.extra=String(e.extra)),null!=e.dmid&&(t.dmid=String(e.dmid)),t},e.toObject=function(e,t){t||(t={});var i={};if(t.defaults){if(s.Long){var o=new s.Long(0,0,!1);i.oid=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.oid=t.longs===String?"0":0;if(s.Long){o=new s.Long(0,0,!1);i.mid=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.mid=t.longs===String?"0":0;i.command="",i.text="",i.stime=0,i.ctime="",i.mtime="",i.extra="",i.dmid=""}return null!=e.oid&&e.hasOwnProperty("oid")&&("number"===typeof e.oid?i.oid=t.longs===String?String(e.oid):e.oid:i.oid=t.longs===String?s.Long.prototype.toString.call(e.oid):t.longs===Number?new s.LongBits(e.oid.low>>>0,e.oid.high>>>0).toNumber():e.oid),null!=e.mid&&e.hasOwnProperty("mid")&&("number"===typeof e.mid?i.mid=t.longs===String?String(e.mid):e.mid:i.mid=t.longs===String?s.Long.prototype.toString.call(e.mid):t.longs===Number?new s.LongBits(e.mid.low>>>0,e.mid.high>>>0).toNumber():e.mid),null!=e.command&&e.hasOwnProperty("command")&&(i.command=e.command),null!=e.text&&e.hasOwnProperty("text")&&(i.text=e.text),null!=e.stime&&e.hasOwnProperty("stime")&&(i.stime=e.stime),null!=e.ctime&&e.hasOwnProperty("ctime")&&(i.ctime=e.ctime),null!=e.mtime&&e.hasOwnProperty("mtime")&&(i.mtime=e.mtime),null!=e.extra&&e.hasOwnProperty("extra")&&(i.extra=e.extra),null!=e.dmid&&e.hasOwnProperty("dmid")&&(i.dmid=e.dmid),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.CommandDm"},e}(),e.DmSegConfig=function(){function e(e){if(e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.pageSize=s.Long?s.Long.fromBits(0,0,!1):0,e.prototype.total=s.Long?s.Long.fromBits(0,0,!1):0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=a.create()),null!=e.pageSize&&Object.hasOwnProperty.call(e,"pageSize")&&t.uint32(8).int64(e.pageSize),null!=e.total&&Object.hasOwnProperty.call(e,"total")&&t.uint32(16).int64(e.total),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.DmSegConfig;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.pageSize=e.int64();break;case 2:o.total=e.int64();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){return"object"!==typeof e||null===e?"object expected":null==e.pageSize||!e.hasOwnProperty("pageSize")||s.isInteger(e.pageSize)||e.pageSize&&s.isInteger(e.pageSize.low)&&s.isInteger(e.pageSize.high)?null==e.total||!e.hasOwnProperty("total")||s.isInteger(e.total)||e.total&&s.isInteger(e.total.low)&&s.isInteger(e.total.high)?null:"total: integer|Long expected":"pageSize: integer|Long expected"},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.DmSegConfig)return e;var t=new l.bilibili.community.service.dm.v1.DmSegConfig;return null!=e.pageSize&&(s.Long?(t.pageSize=s.Long.fromValue(e.pageSize)).unsigned=!1:"string"===typeof e.pageSize?t.pageSize=parseInt(e.pageSize,10):"number"===typeof e.pageSize?t.pageSize=e.pageSize:"object"===typeof e.pageSize&&(t.pageSize=new s.LongBits(e.pageSize.low>>>0,e.pageSize.high>>>0).toNumber())),null!=e.total&&(s.Long?(t.total=s.Long.fromValue(e.total)).unsigned=!1:"string"===typeof e.total?t.total=parseInt(e.total,10):"number"===typeof e.total?t.total=e.total:"object"===typeof e.total&&(t.total=new s.LongBits(e.total.low>>>0,e.total.high>>>0).toNumber())),t},e.toObject=function(e,t){t||(t={});var i={};if(t.defaults){if(s.Long){var o=new s.Long(0,0,!1);i.pageSize=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.pageSize=t.longs===String?"0":0;if(s.Long){o=new s.Long(0,0,!1);i.total=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.total=t.longs===String?"0":0}return null!=e.pageSize&&e.hasOwnProperty("pageSize")&&("number"===typeof e.pageSize?i.pageSize=t.longs===String?String(e.pageSize):e.pageSize:i.pageSize=t.longs===String?s.Long.prototype.toString.call(e.pageSize):t.longs===Number?new s.LongBits(e.pageSize.low>>>0,e.pageSize.high>>>0).toNumber():e.pageSize),null!=e.total&&e.hasOwnProperty("total")&&("number"===typeof e.total?i.total=t.longs===String?String(e.total):e.total:i.total=t.longs===String?s.Long.prototype.toString.call(e.total):t.longs===Number?new s.LongBits(e.total.low>>>0,e.total.high>>>0).toNumber():e.total),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.DmSegConfig"},e}(),e.DanmakuFlagConfig=function(){function e(e){if(e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.recFlag=0,e.prototype.recText="",e.prototype.recSwitch=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=a.create()),null!=e.recFlag&&Object.hasOwnProperty.call(e,"recFlag")&&t.uint32(8).int32(e.recFlag),null!=e.recText&&Object.hasOwnProperty.call(e,"recText")&&t.uint32(18).string(e.recText),null!=e.recSwitch&&Object.hasOwnProperty.call(e,"recSwitch")&&t.uint32(24).int32(e.recSwitch),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.DanmakuFlagConfig;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.recFlag=e.int32();break;case 2:o.recText=e.string();break;case 3:o.recSwitch=e.int32();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){return"object"!==typeof e||null===e?"object expected":null!=e.recFlag&&e.hasOwnProperty("recFlag")&&!s.isInteger(e.recFlag)?"recFlag: integer expected":null!=e.recText&&e.hasOwnProperty("recText")&&!s.isString(e.recText)?"recText: string expected":null!=e.recSwitch&&e.hasOwnProperty("recSwitch")&&!s.isInteger(e.recSwitch)?"recSwitch: integer expected":null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.DanmakuFlagConfig)return e;var t=new l.bilibili.community.service.dm.v1.DanmakuFlagConfig;return null!=e.recFlag&&(t.recFlag=0|e.recFlag),null!=e.recText&&(t.recText=String(e.recText)),null!=e.recSwitch&&(t.recSwitch=0|e.recSwitch),t},e.toObject=function(e,t){t||(t={});var i={};return t.defaults&&(i.recFlag=0,i.recText="",i.recSwitch=0),null!=e.recFlag&&e.hasOwnProperty("recFlag")&&(i.recFlag=e.recFlag),null!=e.recText&&e.hasOwnProperty("recText")&&(i.recText=e.recText),null!=e.recSwitch&&e.hasOwnProperty("recSwitch")&&(i.recSwitch=e.recSwitch),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.DanmakuFlagConfig"},e}(),e.DmSegMobileReply=function(){function e(e){if(this.elems=[],this.colorfulSrc=[],e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.elems=s.emptyArray,e.prototype.colorfulSrc=s.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=a.create()),null!=e.elems&&e.elems.length)for(var i=0;i<e.elems.length;++i)l.bilibili.community.service.dm.v1.DanmakuElem.encode(e.elems[i],t.uint32(10).fork()).ldelim();if(null!=e.colorfulSrc&&e.colorfulSrc.length)for(i=0;i<e.colorfulSrc.length;++i)l.bilibili.community.service.dm.v1.DmColorful.encode(e.colorfulSrc[i],t.uint32(42).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.DmSegMobileReply;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.elems&&o.elems.length||(o.elems=[]),o.elems.push(l.bilibili.community.service.dm.v1.DanmakuElem.decode(e,e.uint32()));break;case 5:o.colorfulSrc&&o.colorfulSrc.length||(o.colorfulSrc=[]),o.colorfulSrc.push(l.bilibili.community.service.dm.v1.DmColorful.decode(e,e.uint32()));break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.elems&&e.hasOwnProperty("elems")){if(!Array.isArray(e.elems))return"elems: array expected";for(var t=0;t<e.elems.length;++t){var i=l.bilibili.community.service.dm.v1.DanmakuElem.verify(e.elems[t]);if(i)return"elems."+i}}if(null!=e.colorfulSrc&&e.hasOwnProperty("colorfulSrc")){if(!Array.isArray(e.colorfulSrc))return"colorfulSrc: array expected";for(t=0;t<e.colorfulSrc.length;++t){i=l.bilibili.community.service.dm.v1.DmColorful.verify(e.colorfulSrc[t]);if(i)return"colorfulSrc."+i}}return null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.DmSegMobileReply)return e;var t=new l.bilibili.community.service.dm.v1.DmSegMobileReply;if(e.elems){if(!Array.isArray(e.elems))throw TypeError(".bilibili.community.service.dm.v1.DmSegMobileReply.elems: array expected");t.elems=[];for(var i=0;i<e.elems.length;++i){if("object"!==typeof e.elems[i])throw TypeError(".bilibili.community.service.dm.v1.DmSegMobileReply.elems: object expected");t.elems[i]=l.bilibili.community.service.dm.v1.DanmakuElem.fromObject(e.elems[i])}}if(e.colorfulSrc){if(!Array.isArray(e.colorfulSrc))throw TypeError(".bilibili.community.service.dm.v1.DmSegMobileReply.colorfulSrc: array expected");t.colorfulSrc=[];for(i=0;i<e.colorfulSrc.length;++i){if("object"!==typeof e.colorfulSrc[i])throw TypeError(".bilibili.community.service.dm.v1.DmSegMobileReply.colorfulSrc: object expected");t.colorfulSrc[i]=l.bilibili.community.service.dm.v1.DmColorful.fromObject(e.colorfulSrc[i])}}return t},e.toObject=function(e,t){t||(t={});var i={};if((t.arrays||t.defaults)&&(i.elems=[],i.colorfulSrc=[]),e.elems&&e.elems.length){i.elems=[];for(var o=0;o<e.elems.length;++o)i.elems[o]=l.bilibili.community.service.dm.v1.DanmakuElem.toObject(e.elems[o],t)}if(e.colorfulSrc&&e.colorfulSrc.length){i.colorfulSrc=[];for(o=0;o<e.colorfulSrc.length;++o)i.colorfulSrc[o]=l.bilibili.community.service.dm.v1.DmColorful.toObject(e.colorfulSrc[o],t)}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.DmSegMobileReply"},e}(),e.DanmakuElem=function(){function e(e){if(e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.stime=0,e.prototype.mode=0,e.prototype.size=0,e.prototype.color=0,e.prototype.uhash="",e.prototype.text="",e.prototype.date=s.Long?s.Long.fromBits(0,0,!1):0,e.prototype.weight=0,e.prototype.action="",e.prototype.pool=0,e.prototype.dmid="",e.prototype.attr=0,e.prototype.animation="",e.prototype.colorful=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=a.create()),null!=e.stime&&Object.hasOwnProperty.call(e,"stime")&&t.uint32(16).int32(e.stime),null!=e.mode&&Object.hasOwnProperty.call(e,"mode")&&t.uint32(24).int32(e.mode),null!=e.size&&Object.hasOwnProperty.call(e,"size")&&t.uint32(32).int32(e.size),null!=e.color&&Object.hasOwnProperty.call(e,"color")&&t.uint32(40).uint32(e.color),null!=e.uhash&&Object.hasOwnProperty.call(e,"uhash")&&t.uint32(50).string(e.uhash),null!=e.text&&Object.hasOwnProperty.call(e,"text")&&t.uint32(58).string(e.text),null!=e.date&&Object.hasOwnProperty.call(e,"date")&&t.uint32(64).int64(e.date),null!=e.weight&&Object.hasOwnProperty.call(e,"weight")&&t.uint32(72).int32(e.weight),null!=e.action&&Object.hasOwnProperty.call(e,"action")&&t.uint32(82).string(e.action),null!=e.pool&&Object.hasOwnProperty.call(e,"pool")&&t.uint32(88).int32(e.pool),null!=e.dmid&&Object.hasOwnProperty.call(e,"dmid")&&t.uint32(98).string(e.dmid),null!=e.attr&&Object.hasOwnProperty.call(e,"attr")&&t.uint32(104).int32(e.attr),null!=e.animation&&Object.hasOwnProperty.call(e,"animation")&&t.uint32(178).string(e.animation),null!=e.colorful&&Object.hasOwnProperty.call(e,"colorful")&&t.uint32(192).int32(e.colorful),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.DanmakuElem;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 2:o.stime=e.int32();break;case 3:o.mode=e.int32();break;case 4:o.size=e.int32();break;case 5:o.color=e.uint32();break;case 6:o.uhash=e.string();break;case 7:o.text=e.string();break;case 8:o.date=e.int64();break;case 9:o.weight=e.int32();break;case 10:o.action=e.string();break;case 11:o.pool=e.int32();break;case 12:o.dmid=e.string();break;case 13:o.attr=e.int32();break;case 22:o.animation=e.string();break;case 24:o.colorful=e.int32();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.stime&&e.hasOwnProperty("stime")&&!s.isInteger(e.stime))return"stime: integer expected";if(null!=e.mode&&e.hasOwnProperty("mode")&&!s.isInteger(e.mode))return"mode: integer expected";if(null!=e.size&&e.hasOwnProperty("size")&&!s.isInteger(e.size))return"size: integer expected";if(null!=e.color&&e.hasOwnProperty("color")&&!s.isInteger(e.color))return"color: integer expected";if(null!=e.uhash&&e.hasOwnProperty("uhash")&&!s.isString(e.uhash))return"uhash: string expected";if(null!=e.text&&e.hasOwnProperty("text")&&!s.isString(e.text))return"text: string expected";if(null!=e.date&&e.hasOwnProperty("date")&&!s.isInteger(e.date)&&!(e.date&&s.isInteger(e.date.low)&&s.isInteger(e.date.high)))return"date: integer|Long expected";if(null!=e.weight&&e.hasOwnProperty("weight")&&!s.isInteger(e.weight))return"weight: integer expected";if(null!=e.action&&e.hasOwnProperty("action")&&!s.isString(e.action))return"action: string expected";if(null!=e.pool&&e.hasOwnProperty("pool")&&!s.isInteger(e.pool))return"pool: integer expected";if(null!=e.dmid&&e.hasOwnProperty("dmid")&&!s.isString(e.dmid))return"dmid: string expected";if(null!=e.attr&&e.hasOwnProperty("attr")&&!s.isInteger(e.attr))return"attr: integer expected";if(null!=e.animation&&e.hasOwnProperty("animation")&&!s.isString(e.animation))return"animation: string expected";if(null!=e.colorful&&e.hasOwnProperty("colorful"))switch(e.colorful){default:return"colorful: enum value expected";case 0:case 60001:break}return null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.DanmakuElem)return e;var t=new l.bilibili.community.service.dm.v1.DanmakuElem;switch(null!=e.stime&&(t.stime=0|e.stime),null!=e.mode&&(t.mode=0|e.mode),null!=e.size&&(t.size=0|e.size),null!=e.color&&(t.color=e.color>>>0),null!=e.uhash&&(t.uhash=String(e.uhash)),null!=e.text&&(t.text=String(e.text)),null!=e.date&&(s.Long?(t.date=s.Long.fromValue(e.date)).unsigned=!1:"string"===typeof e.date?t.date=parseInt(e.date,10):"number"===typeof e.date?t.date=e.date:"object"===typeof e.date&&(t.date=new s.LongBits(e.date.low>>>0,e.date.high>>>0).toNumber())),null!=e.weight&&(t.weight=0|e.weight),null!=e.action&&(t.action=String(e.action)),null!=e.pool&&(t.pool=0|e.pool),null!=e.dmid&&(t.dmid=String(e.dmid)),null!=e.attr&&(t.attr=0|e.attr),null!=e.animation&&(t.animation=String(e.animation)),e.colorful){default:if("number"===typeof e.colorful){t.colorful=e.colorful;break}break;case"NoneType":case 0:t.colorful=0;break;case"VipGradualColor":case 60001:t.colorful=60001;break}return t},e.toObject=function(e,t){t||(t={});var i={};if(t.defaults){if(i.stime=0,i.mode=0,i.size=0,i.color=0,i.uhash="",i.text="",s.Long){var o=new s.Long(0,0,!1);i.date=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.date=t.longs===String?"0":0;i.weight=0,i.action="",i.pool=0,i.dmid="",i.attr=0,i.animation="",i.colorful=t.enums===String?"NoneType":0}return null!=e.stime&&e.hasOwnProperty("stime")&&(i.stime=e.stime),null!=e.mode&&e.hasOwnProperty("mode")&&(i.mode=e.mode),null!=e.size&&e.hasOwnProperty("size")&&(i.size=e.size),null!=e.color&&e.hasOwnProperty("color")&&(i.color=e.color),null!=e.uhash&&e.hasOwnProperty("uhash")&&(i.uhash=e.uhash),null!=e.text&&e.hasOwnProperty("text")&&(i.text=e.text),null!=e.date&&e.hasOwnProperty("date")&&("number"===typeof e.date?i.date=t.longs===String?String(e.date):e.date:i.date=t.longs===String?s.Long.prototype.toString.call(e.date):t.longs===Number?new s.LongBits(e.date.low>>>0,e.date.high>>>0).toNumber():e.date),null!=e.weight&&e.hasOwnProperty("weight")&&(i.weight=e.weight),null!=e.action&&e.hasOwnProperty("action")&&(i.action=e.action),null!=e.pool&&e.hasOwnProperty("pool")&&(i.pool=e.pool),null!=e.dmid&&e.hasOwnProperty("dmid")&&(i.dmid=e.dmid),null!=e.attr&&e.hasOwnProperty("attr")&&(i.attr=e.attr),null!=e.animation&&e.hasOwnProperty("animation")&&(i.animation=e.animation),null!=e.colorful&&e.hasOwnProperty("colorful")&&(i.colorful=t.enums===String?void 0===l.bilibili.community.service.dm.v1.DmColorfulType[e.colorful]?e.colorful:l.bilibili.community.service.dm.v1.DmColorfulType[e.colorful]:e.colorful),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.DanmakuElem"},e}(),e.DanmuWebPlayerConfig=function(){function e(e){if(e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.dmSwitch=!1,e.prototype.aiSwitch=!1,e.prototype.aiLevel=0,e.prototype.typeTop=!1,e.prototype.typeScroll=!1,e.prototype.typeBottom=!1,e.prototype.typeColor=!1,e.prototype.typeSpecial=!1,e.prototype.preventshade=!1,e.prototype.dmask=!1,e.prototype.opacity=0,e.prototype.dmarea=0,e.prototype.speedplus=0,e.prototype.fontsize=0,e.prototype.fullscreensync=!1,e.prototype.speedsync=!1,e.prototype.fontfamily="",e.prototype.bold=!1,e.prototype.fontborder=0,e.prototype.seniorModeSwitch=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=a.create()),null!=e.dmSwitch&&Object.hasOwnProperty.call(e,"dmSwitch")&&t.uint32(8).bool(e.dmSwitch),null!=e.aiSwitch&&Object.hasOwnProperty.call(e,"aiSwitch")&&t.uint32(16).bool(e.aiSwitch),null!=e.aiLevel&&Object.hasOwnProperty.call(e,"aiLevel")&&t.uint32(24).int32(e.aiLevel),null!=e.typeTop&&Object.hasOwnProperty.call(e,"typeTop")&&t.uint32(32).bool(e.typeTop),null!=e.typeScroll&&Object.hasOwnProperty.call(e,"typeScroll")&&t.uint32(40).bool(e.typeScroll),null!=e.typeBottom&&Object.hasOwnProperty.call(e,"typeBottom")&&t.uint32(48).bool(e.typeBottom),null!=e.typeColor&&Object.hasOwnProperty.call(e,"typeColor")&&t.uint32(56).bool(e.typeColor),null!=e.typeSpecial&&Object.hasOwnProperty.call(e,"typeSpecial")&&t.uint32(64).bool(e.typeSpecial),null!=e.preventshade&&Object.hasOwnProperty.call(e,"preventshade")&&t.uint32(72).bool(e.preventshade),null!=e.dmask&&Object.hasOwnProperty.call(e,"dmask")&&t.uint32(80).bool(e.dmask),null!=e.opacity&&Object.hasOwnProperty.call(e,"opacity")&&t.uint32(93).float(e.opacity),null!=e.dmarea&&Object.hasOwnProperty.call(e,"dmarea")&&t.uint32(96).int32(e.dmarea),null!=e.speedplus&&Object.hasOwnProperty.call(e,"speedplus")&&t.uint32(109).float(e.speedplus),null!=e.fontsize&&Object.hasOwnProperty.call(e,"fontsize")&&t.uint32(117).float(e.fontsize),null!=e.fullscreensync&&Object.hasOwnProperty.call(e,"fullscreensync")&&t.uint32(120).bool(e.fullscreensync),null!=e.speedsync&&Object.hasOwnProperty.call(e,"speedsync")&&t.uint32(128).bool(e.speedsync),null!=e.fontfamily&&Object.hasOwnProperty.call(e,"fontfamily")&&t.uint32(138).string(e.fontfamily),null!=e.bold&&Object.hasOwnProperty.call(e,"bold")&&t.uint32(144).bool(e.bold),null!=e.fontborder&&Object.hasOwnProperty.call(e,"fontborder")&&t.uint32(152).int32(e.fontborder),null!=e.seniorModeSwitch&&Object.hasOwnProperty.call(e,"seniorModeSwitch")&&t.uint32(168).int32(e.seniorModeSwitch),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.DanmuWebPlayerConfig;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.dmSwitch=e.bool();break;case 2:o.aiSwitch=e.bool();break;case 3:o.aiLevel=e.int32();break;case 4:o.typeTop=e.bool();break;case 5:o.typeScroll=e.bool();break;case 6:o.typeBottom=e.bool();break;case 7:o.typeColor=e.bool();break;case 8:o.typeSpecial=e.bool();break;case 9:o.preventshade=e.bool();break;case 10:o.dmask=e.bool();break;case 11:o.opacity=e.float();break;case 12:o.dmarea=e.int32();break;case 13:o.speedplus=e.float();break;case 14:o.fontsize=e.float();break;case 15:o.fullscreensync=e.bool();break;case 16:o.speedsync=e.bool();break;case 17:o.fontfamily=e.string();break;case 18:o.bold=e.bool();break;case 19:o.fontborder=e.int32();break;case 21:o.seniorModeSwitch=e.int32();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){return"object"!==typeof e||null===e?"object expected":null!=e.dmSwitch&&e.hasOwnProperty("dmSwitch")&&"boolean"!==typeof e.dmSwitch?"dmSwitch: boolean expected":null!=e.aiSwitch&&e.hasOwnProperty("aiSwitch")&&"boolean"!==typeof e.aiSwitch?"aiSwitch: boolean expected":null!=e.aiLevel&&e.hasOwnProperty("aiLevel")&&!s.isInteger(e.aiLevel)?"aiLevel: integer expected":null!=e.typeTop&&e.hasOwnProperty("typeTop")&&"boolean"!==typeof e.typeTop?"typeTop: boolean expected":null!=e.typeScroll&&e.hasOwnProperty("typeScroll")&&"boolean"!==typeof e.typeScroll?"typeScroll: boolean expected":null!=e.typeBottom&&e.hasOwnProperty("typeBottom")&&"boolean"!==typeof e.typeBottom?"typeBottom: boolean expected":null!=e.typeColor&&e.hasOwnProperty("typeColor")&&"boolean"!==typeof e.typeColor?"typeColor: boolean expected":null!=e.typeSpecial&&e.hasOwnProperty("typeSpecial")&&"boolean"!==typeof e.typeSpecial?"typeSpecial: boolean expected":null!=e.preventshade&&e.hasOwnProperty("preventshade")&&"boolean"!==typeof e.preventshade?"preventshade: boolean expected":null!=e.dmask&&e.hasOwnProperty("dmask")&&"boolean"!==typeof e.dmask?"dmask: boolean expected":null!=e.opacity&&e.hasOwnProperty("opacity")&&"number"!==typeof e.opacity?"opacity: number expected":null!=e.dmarea&&e.hasOwnProperty("dmarea")&&!s.isInteger(e.dmarea)?"dmarea: integer expected":null!=e.speedplus&&e.hasOwnProperty("speedplus")&&"number"!==typeof e.speedplus?"speedplus: number expected":null!=e.fontsize&&e.hasOwnProperty("fontsize")&&"number"!==typeof e.fontsize?"fontsize: number expected":null!=e.fullscreensync&&e.hasOwnProperty("fullscreensync")&&"boolean"!==typeof e.fullscreensync?"fullscreensync: boolean expected":null!=e.speedsync&&e.hasOwnProperty("speedsync")&&"boolean"!==typeof e.speedsync?"speedsync: boolean expected":null!=e.fontfamily&&e.hasOwnProperty("fontfamily")&&!s.isString(e.fontfamily)?"fontfamily: string expected":null!=e.bold&&e.hasOwnProperty("bold")&&"boolean"!==typeof e.bold?"bold: boolean expected":null!=e.fontborder&&e.hasOwnProperty("fontborder")&&!s.isInteger(e.fontborder)?"fontborder: integer expected":null!=e.seniorModeSwitch&&e.hasOwnProperty("seniorModeSwitch")&&!s.isInteger(e.seniorModeSwitch)?"seniorModeSwitch: integer expected":null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.DanmuWebPlayerConfig)return e;var t=new l.bilibili.community.service.dm.v1.DanmuWebPlayerConfig;return null!=e.dmSwitch&&(t.dmSwitch=Boolean(e.dmSwitch)),null!=e.aiSwitch&&(t.aiSwitch=Boolean(e.aiSwitch)),null!=e.aiLevel&&(t.aiLevel=0|e.aiLevel),null!=e.typeTop&&(t.typeTop=Boolean(e.typeTop)),null!=e.typeScroll&&(t.typeScroll=Boolean(e.typeScroll)),null!=e.typeBottom&&(t.typeBottom=Boolean(e.typeBottom)),null!=e.typeColor&&(t.typeColor=Boolean(e.typeColor)),null!=e.typeSpecial&&(t.typeSpecial=Boolean(e.typeSpecial)),null!=e.preventshade&&(t.preventshade=Boolean(e.preventshade)),null!=e.dmask&&(t.dmask=Boolean(e.dmask)),null!=e.opacity&&(t.opacity=Number(e.opacity)),null!=e.dmarea&&(t.dmarea=0|e.dmarea),null!=e.speedplus&&(t.speedplus=Number(e.speedplus)),null!=e.fontsize&&(t.fontsize=Number(e.fontsize)),null!=e.fullscreensync&&(t.fullscreensync=Boolean(e.fullscreensync)),null!=e.speedsync&&(t.speedsync=Boolean(e.speedsync)),null!=e.fontfamily&&(t.fontfamily=String(e.fontfamily)),null!=e.bold&&(t.bold=Boolean(e.bold)),null!=e.fontborder&&(t.fontborder=0|e.fontborder),null!=e.seniorModeSwitch&&(t.seniorModeSwitch=0|e.seniorModeSwitch),t},e.toObject=function(e,t){t||(t={});var i={};return t.defaults&&(i.dmSwitch=!1,i.aiSwitch=!1,i.aiLevel=0,i.typeTop=!1,i.typeScroll=!1,i.typeBottom=!1,i.typeColor=!1,i.typeSpecial=!1,i.preventshade=!1,i.dmask=!1,i.opacity=0,i.dmarea=0,i.speedplus=0,i.fontsize=0,i.fullscreensync=!1,i.speedsync=!1,i.fontfamily="",i.bold=!1,i.fontborder=0,i.seniorModeSwitch=0),null!=e.dmSwitch&&e.hasOwnProperty("dmSwitch")&&(i.dmSwitch=e.dmSwitch),null!=e.aiSwitch&&e.hasOwnProperty("aiSwitch")&&(i.aiSwitch=e.aiSwitch),null!=e.aiLevel&&e.hasOwnProperty("aiLevel")&&(i.aiLevel=e.aiLevel),null!=e.typeTop&&e.hasOwnProperty("typeTop")&&(i.typeTop=e.typeTop),null!=e.typeScroll&&e.hasOwnProperty("typeScroll")&&(i.typeScroll=e.typeScroll),null!=e.typeBottom&&e.hasOwnProperty("typeBottom")&&(i.typeBottom=e.typeBottom),null!=e.typeColor&&e.hasOwnProperty("typeColor")&&(i.typeColor=e.typeColor),null!=e.typeSpecial&&e.hasOwnProperty("typeSpecial")&&(i.typeSpecial=e.typeSpecial),null!=e.preventshade&&e.hasOwnProperty("preventshade")&&(i.preventshade=e.preventshade),null!=e.dmask&&e.hasOwnProperty("dmask")&&(i.dmask=e.dmask),null!=e.opacity&&e.hasOwnProperty("opacity")&&(i.opacity=t.json&&!isFinite(e.opacity)?String(e.opacity):e.opacity),null!=e.dmarea&&e.hasOwnProperty("dmarea")&&(i.dmarea=e.dmarea),null!=e.speedplus&&e.hasOwnProperty("speedplus")&&(i.speedplus=t.json&&!isFinite(e.speedplus)?String(e.speedplus):e.speedplus),null!=e.fontsize&&e.hasOwnProperty("fontsize")&&(i.fontsize=t.json&&!isFinite(e.fontsize)?String(e.fontsize):e.fontsize),null!=e.fullscreensync&&e.hasOwnProperty("fullscreensync")&&(i.fullscreensync=e.fullscreensync),null!=e.speedsync&&e.hasOwnProperty("speedsync")&&(i.speedsync=e.speedsync),null!=e.fontfamily&&e.hasOwnProperty("fontfamily")&&(i.fontfamily=e.fontfamily),null!=e.bold&&e.hasOwnProperty("bold")&&(i.bold=e.bold),null!=e.fontborder&&e.hasOwnProperty("fontborder")&&(i.fontborder=e.fontborder),null!=e.seniorModeSwitch&&e.hasOwnProperty("seniorModeSwitch")&&(i.seniorModeSwitch=e.seniorModeSwitch),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.DanmuWebPlayerConfig"},e}(),e.Expressions=function(){function e(e){if(this.data=[],e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.data=s.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=a.create()),null!=e.data&&e.data.length)for(var i=0;i<e.data.length;++i)l.bilibili.community.service.dm.v1.Expression.encode(e.data[i],t.uint32(10).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.Expressions;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.data&&o.data.length||(o.data=[]),o.data.push(l.bilibili.community.service.dm.v1.Expression.decode(e,e.uint32()));break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.data&&e.hasOwnProperty("data")){if(!Array.isArray(e.data))return"data: array expected";for(var t=0;t<e.data.length;++t){var i=l.bilibili.community.service.dm.v1.Expression.verify(e.data[t]);if(i)return"data."+i}}return null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.Expressions)return e;var t=new l.bilibili.community.service.dm.v1.Expressions;if(e.data){if(!Array.isArray(e.data))throw TypeError(".bilibili.community.service.dm.v1.Expressions.data: array expected");t.data=[];for(var i=0;i<e.data.length;++i){if("object"!==typeof e.data[i])throw TypeError(".bilibili.community.service.dm.v1.Expressions.data: object expected");t.data[i]=l.bilibili.community.service.dm.v1.Expression.fromObject(e.data[i])}}return t},e.toObject=function(e,t){t||(t={});var i={};if((t.arrays||t.defaults)&&(i.data=[]),e.data&&e.data.length){i.data=[];for(var o=0;o<e.data.length;++o)i.data[o]=l.bilibili.community.service.dm.v1.Expression.toObject(e.data[o],t)}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.Expressions"},e}(),e.Expression=function(){function e(e){if(this.keyword=[],this.period=[],e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.keyword=s.emptyArray,e.prototype.url="",e.prototype.period=s.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=a.create()),null!=e.keyword&&e.keyword.length)for(var i=0;i<e.keyword.length;++i)t.uint32(10).string(e.keyword[i]);if(null!=e.url&&Object.hasOwnProperty.call(e,"url")&&t.uint32(18).string(e.url),null!=e.period&&e.period.length)for(i=0;i<e.period.length;++i)l.bilibili.community.service.dm.v1.Period.encode(e.period[i],t.uint32(26).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.Expression;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.keyword&&o.keyword.length||(o.keyword=[]),o.keyword.push(e.string());break;case 2:o.url=e.string();break;case 3:o.period&&o.period.length||(o.period=[]),o.period.push(l.bilibili.community.service.dm.v1.Period.decode(e,e.uint32()));break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.keyword&&e.hasOwnProperty("keyword")){if(!Array.isArray(e.keyword))return"keyword: array expected";for(var t=0;t<e.keyword.length;++t)if(!s.isString(e.keyword[t]))return"keyword: string[] expected"}if(null!=e.url&&e.hasOwnProperty("url")&&!s.isString(e.url))return"url: string expected";if(null!=e.period&&e.hasOwnProperty("period")){if(!Array.isArray(e.period))return"period: array expected";for(t=0;t<e.period.length;++t){var i=l.bilibili.community.service.dm.v1.Period.verify(e.period[t]);if(i)return"period."+i}}return null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.Expression)return e;var t=new l.bilibili.community.service.dm.v1.Expression;if(e.keyword){if(!Array.isArray(e.keyword))throw TypeError(".bilibili.community.service.dm.v1.Expression.keyword: array expected");t.keyword=[];for(var i=0;i<e.keyword.length;++i)t.keyword[i]=String(e.keyword[i])}if(null!=e.url&&(t.url=String(e.url)),e.period){if(!Array.isArray(e.period))throw TypeError(".bilibili.community.service.dm.v1.Expression.period: array expected");t.period=[];for(i=0;i<e.period.length;++i){if("object"!==typeof e.period[i])throw TypeError(".bilibili.community.service.dm.v1.Expression.period: object expected");t.period[i]=l.bilibili.community.service.dm.v1.Period.fromObject(e.period[i])}}return t},e.toObject=function(e,t){t||(t={});var i={};if((t.arrays||t.defaults)&&(i.keyword=[],i.period=[]),t.defaults&&(i.url=""),e.keyword&&e.keyword.length){i.keyword=[];for(var o=0;o<e.keyword.length;++o)i.keyword[o]=e.keyword[o]}if(null!=e.url&&e.hasOwnProperty("url")&&(i.url=e.url),e.period&&e.period.length){i.period=[];for(o=0;o<e.period.length;++o)i.period[o]=l.bilibili.community.service.dm.v1.Period.toObject(e.period[o],t)}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.Expression"},e}(),e.Period=function(){function e(e){if(e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.start=s.Long?s.Long.fromBits(0,0,!1):0,e.prototype.end=s.Long?s.Long.fromBits(0,0,!1):0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=a.create()),null!=e.start&&Object.hasOwnProperty.call(e,"start")&&t.uint32(8).int64(e.start),null!=e.end&&Object.hasOwnProperty.call(e,"end")&&t.uint32(16).int64(e.end),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.Period;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.start=e.int64();break;case 2:o.end=e.int64();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){return"object"!==typeof e||null===e?"object expected":null==e.start||!e.hasOwnProperty("start")||s.isInteger(e.start)||e.start&&s.isInteger(e.start.low)&&s.isInteger(e.start.high)?null==e.end||!e.hasOwnProperty("end")||s.isInteger(e.end)||e.end&&s.isInteger(e.end.low)&&s.isInteger(e.end.high)?null:"end: integer|Long expected":"start: integer|Long expected"},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.Period)return e;var t=new l.bilibili.community.service.dm.v1.Period;return null!=e.start&&(s.Long?(t.start=s.Long.fromValue(e.start)).unsigned=!1:"string"===typeof e.start?t.start=parseInt(e.start,10):"number"===typeof e.start?t.start=e.start:"object"===typeof e.start&&(t.start=new s.LongBits(e.start.low>>>0,e.start.high>>>0).toNumber())),null!=e.end&&(s.Long?(t.end=s.Long.fromValue(e.end)).unsigned=!1:"string"===typeof e.end?t.end=parseInt(e.end,10):"number"===typeof e.end?t.end=e.end:"object"===typeof e.end&&(t.end=new s.LongBits(e.end.low>>>0,e.end.high>>>0).toNumber())),t},e.toObject=function(e,t){t||(t={});var i={};if(t.defaults){if(s.Long){var o=new s.Long(0,0,!1);i.start=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.start=t.longs===String?"0":0;if(s.Long){o=new s.Long(0,0,!1);i.end=t.longs===String?o.toString():t.longs===Number?o.toNumber():o}else i.end=t.longs===String?"0":0}return null!=e.start&&e.hasOwnProperty("start")&&("number"===typeof e.start?i.start=t.longs===String?String(e.start):e.start:i.start=t.longs===String?s.Long.prototype.toString.call(e.start):t.longs===Number?new s.LongBits(e.start.low>>>0,e.start.high>>>0).toNumber():e.start),null!=e.end&&e.hasOwnProperty("end")&&("number"===typeof e.end?i.end=t.longs===String?String(e.end):e.end:i.end=t.longs===String?s.Long.prototype.toString.call(e.end):t.longs===Number?new s.LongBits(e.end.low>>>0,e.end.high>>>0).toNumber():e.end),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.Period"},e}(),e.AnyBody=function(){function e(e){if(e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.body=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=a.create()),null!=e.body&&Object.hasOwnProperty.call(e,"body")&&l.google.protobuf.Any.encode(e.body,t.uint32(10).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.AnyBody;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.body=l.google.protobuf.Any.decode(e,e.uint32());break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.body&&e.hasOwnProperty("body")){var t=l.google.protobuf.Any.verify(e.body);if(t)return"body."+t}return null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.AnyBody)return e;var t=new l.bilibili.community.service.dm.v1.AnyBody;if(null!=e.body){if("object"!==typeof e.body)throw TypeError(".bilibili.community.service.dm.v1.AnyBody.body: object expected");t.body=l.google.protobuf.Any.fromObject(e.body)}return t},e.toObject=function(e,t){t||(t={});var i={};return t.defaults&&(i.body=null),null!=e.body&&e.hasOwnProperty("body")&&(i.body=l.google.protobuf.Any.toObject(e.body,t)),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.AnyBody"},e}(),e.DmColorful=function(){function e(e){if(e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.type=0,e.prototype.src="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=a.create()),null!=e.type&&Object.hasOwnProperty.call(e,"type")&&t.uint32(8).int32(e.type),null!=e.src&&Object.hasOwnProperty.call(e,"src")&&t.uint32(18).string(e.src),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.bilibili.community.service.dm.v1.DmColorful;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.type=e.int32();break;case 2:o.src=e.string();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!==typeof e||null===e)return"object expected";if(null!=e.type&&e.hasOwnProperty("type"))switch(e.type){default:return"type: enum value expected";case 0:case 60001:break}return null!=e.src&&e.hasOwnProperty("src")&&!s.isString(e.src)?"src: string expected":null},e.fromObject=function(e){if(e instanceof l.bilibili.community.service.dm.v1.DmColorful)return e;var t=new l.bilibili.community.service.dm.v1.DmColorful;switch(e.type){default:if("number"===typeof e.type){t.type=e.type;break}break;case"NoneType":case 0:t.type=0;break;case"VipGradualColor":case 60001:t.type=60001;break}return null!=e.src&&(t.src=String(e.src)),t},e.toObject=function(e,t){t||(t={});var i={};return t.defaults&&(i.type=t.enums===String?"NoneType":0,i.src=""),null!=e.type&&e.hasOwnProperty("type")&&(i.type=t.enums===String?void 0===l.bilibili.community.service.dm.v1.DmColorfulType[e.type]?e.type:l.bilibili.community.service.dm.v1.DmColorfulType[e.type]:e.type),null!=e.src&&e.hasOwnProperty("src")&&(i.src=e.src),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/bilibili.community.service.dm.v1.DmColorful"},e}(),e.DmColorfulType=function(){var e={},t=Object.create(e);return t[e[0]="NoneType"]=0,t[e[60001]="VipGradualColor"]=60001,t}(),e}(),e}(),e}(),e}(),e}(),l.google=function(){var e={};return e.protobuf=function(){var e={};return e.Any=function(){function e(e){if(e)for(var t=Object.keys(e),i=0;i<t.length;++i)null!=e[t[i]]&&(this[t[i]]=e[t[i]])}return e.prototype.type_url="",e.prototype.value=s.newBuffer([]),e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=a.create()),null!=e.type_url&&Object.hasOwnProperty.call(e,"type_url")&&t.uint32(10).string(e.type_url),null!=e.value&&Object.hasOwnProperty.call(e,"value")&&t.uint32(18).bytes(e.value),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));var i=void 0===t?e.len:e.pos+t,o=new l.google.protobuf.Any;while(e.pos<i){var n=e.uint32();switch(n>>>3){case 1:o.type_url=e.string();break;case 2:o.value=e.bytes();break;default:e.skipType(7&n);break}}return o},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){return"object"!==typeof e||null===e?"object expected":null!=e.type_url&&e.hasOwnProperty("type_url")&&!s.isString(e.type_url)?"type_url: string expected":null!=e.value&&e.hasOwnProperty("value")&&!(e.value&&"number"===typeof e.value.length||s.isString(e.value))?"value: buffer expected":null},e.fromObject=function(e){if(e instanceof l.google.protobuf.Any)return e;var t=new l.google.protobuf.Any;return null!=e.type_url&&(t.type_url=String(e.type_url)),null!=e.value&&("string"===typeof e.value?s.base64.decode(e.value,t.value=s.newBuffer(s.base64.length(e.value)),0):e.value.length>=0&&(t.value=e.value)),t},e.toObject=function(e,t){t||(t={});var i={};return t.defaults&&(i.type_url="",t.bytes===String?i.value="":(i.value=[],t.bytes!==Array&&(i.value=s.newBuffer(i.value)))),null!=e.type_url&&e.hasOwnProperty("type_url")&&(i.type_url=e.type_url),null!=e.value&&e.hasOwnProperty("value")&&(i.value=t.bytes===String?s.base64.encode(e.value,0,e.value.length):t.bytes===Array?Array.prototype.slice.call(e.value):e.value),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.default.util.toJSONOptions)},e.getTypeUrl=function(e){return void 0===e&&(e="type.googleapis.com"),e+"/google.protobuf.Any"},e}(),e}(),e}(),t["default"]=l},83107:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DmSegMobileReplyDecoder=t.DmWebViewReplyDecoder=void 0;const n=o(i(88565)),r=n.default.bilibili.community.service.dm.v1.DmSegMobileReply,a=n.default.bilibili.community.service.dm.v1.DmWebViewReply,s=e=>{const t=a.decode(new Uint8Array(e));return a.toObject(t)};t.DmWebViewReplyDecoder=s;const l=e=>{const t=r.decode(new Uint8Array(e));return r.toObject(t)};t.DmSegMobileReplyDecoder=l},86741:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(41465),t),n(i(63521),t),n(i(63800),t),n(i(46940),t),n(i(70632),t),n(i(36038),t),n(i(33481),t),n(i(47020),t),n(i(49260),t),n(i(95353),t),n(i(37955),t),n(i(46317),t),n(i(50441),t)},37955:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.RedirectSSR=void 0;const n=i(12404),r=i(96582);class a extends n.Feature{constructor(e){super(e,"redirectSSR",{settings:{on:!1}}),this.watcher=e=>{const{url:t}=e,i=t.replace("bilibili.com/s/video/","bilibili.com/video/");return{redirectUrl:i}},this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onAfterSetSetting(e,t){return o(this,void 0,void 0,(function*(){e.on!==t.on&&(t.on?this.createWatcher():this.clearWatcher())}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.settings.on&&this.createWatcher()}))}onPause(){return o(this,void 0,void 0,(function*(){this.settings.on||this.clearWatcher()}))}createWatcher(){this.emit("webRequestController","create",{name:"redirectSSRWatcher",eventName:"onBeforeRequest",filter:{urls:["*://*.bilibili.com/s/video/*"]},options:["blocking"],callback:(0,r.webRequestCallbackWrapper)(this.watcher)})}clearWatcher(){this.emit("webRequestController","clear",{name:"redirectSSRWatcher"})}}t.RedirectSSR=a},1705:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoSubtitleDownload=void 0;const n=i(4258),r=o(i(57689)),a=o(i(635)),s=i(96691),l=i(96582),{color:c}=s.theme,d=a.default.div`
  margin-bottom: 12px;
`,u=a.default.div.attrs({className:"bilibili-helper-subtitle-title"})`
  width: 100%;
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: bold;
  text-align: left;

  .count {
    margin-left: 10px;
    color: ${c("google-grey-500")};
  }
`,p=a.default.div`
  display: flex;
  flex-wrap: wrap;
`,h=a.default.div`
  display: grid;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  grid-template-columns: repeat(4, 1fr);
  margin: 4px;
  padding: 3px;
  width: 100%;
  font-size: 12px;
  font-style: normal;
  letter-spacing: 0.3px;
  transition: all 0.3s;

  a {
    position: relative;
    top: -2px;
    padding: 0 3px;
    color: #00a1d6;

    &:hover {
      color: #004c65;
    }

    &:last-of-type {
      border: none;
    }
  }
`,m=a.default.span`
  position: relative;
  display: inline-block;
  //padding: 0 8px;
  height: 32px;
  line-height: 32px;
  border-radius: 3px;
  border-right: 1px solid #fff;
  background-color: #eaf4ff;
  text-align: center;
  cursor: pointer;

  &:last-of-type {
    border-right: none;
  }

  &:hover {
    background-color: #d4eaff;
  }

  p {
    color: ${c("google-grey-900")};
    font-size: 12px;
  }

  .format {
    position: absolute;
    zoom: 0.7;
    right: 0;
    bottom: 2px;
    left: 0;
    height: 16px;
    line-height: 16px;
    color: var(--bilibili-pink);
    text-align: center;
  }
`;class f extends r.default.Component{constructor(e){super(e),this.handleDownloadSubtitle=(e,t)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"download_subtitle",label:e}),new Promise(i=>{chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},o=>{if(!o||!o.on)return!1;chrome.runtime.sendMessage({target:"renameDownloadFile",event:"renameFileName",type:"subtitle",data:Object.assign(Object.assign({},this.props.videoInfo),{lang:t.lan,format:e})},e=>{i(e||!1)})})}).then(i=>{chrome.runtime.sendMessage({target:"videoSubtitleDownload",event:"downloadSubtitle",subtitleObject:t,type:e,filename:i||(0,l.getFilename)(document)})})},this.state={subtitleData:[]}}componentDidMount(){chrome.runtime.sendMessage({command:"videoSubtitleDownloadDOMInitialized"}),chrome.runtime.onMessage.addListener((e,t,i)=>("loadSubtitle"===e.command&&e.subtitles&&(this.setState({subtitleData:e.subtitles}),i(!0)),!0))}render(){var e;const{subtitle:t}=this.props.videoInfo||{},i=null!==(e=null===t||void 0===t?void 0:t.list)&&void 0!==e?e:null===t||void 0===t?void 0:t.subtitles;return i&&(null===i||void 0===i?void 0:i.length)>0?r.default.createElement(d,null,r.default.createElement(u,null,"\u5b57\u5e55\u4e0b\u8f7d"),r.default.createElement(p,null,r.default.createElement(h,null,i.map(e=>{const{id:t,lan_doc:i}=e;return r.default.createElement(r.default.Fragment,{key:t},r.default.createElement(m,{onClick:()=>this.handleDownloadSubtitle("srt",e)},r.default.createElement("a",null,i.replace("\uff08"," (").replace("\uff09",")")),r.default.createElement("i",{className:"format"},"SRT")),r.default.createElement(m,{onClick:()=>this.handleDownloadSubtitle("json",e)},r.default.createElement("a",null,i.replace("\uff08"," (").replace("\uff09",")")),r.default.createElement("i",{className:"format"},"JSON")))})))):null}}t.VideoSubtitleDownload=f,f.contextType=n.Store},22305:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.convertCC2SRT=void 0;const i=e=>{const[t=0,i=0]=String(e).split(".");let o=Math.trunc(t/3600),n=Math.trunc((t-3600*o)/60),r=Math.trunc((t-3600*o-60*n)%60),a=String(i).padEnd(3,"0");return`${String(o).padStart(2,"0")}:${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")},${a}`},o=(e,t,o,n,r)=>{const{from:a,to:s,location:l,content:c}=r,d=i(a),u=i(s);return`${d} --\x3e ${u}\n<font color="${t}" size="${40*e}">${c}</font>\n`},n=e=>{const{body:t,font_size:i=.4,font_color:n="#FFFFFF",background_color:r="#9C27B0",background_alpha:a=.5,Stroke:s="none"}=e;return t.map((e,t)=>`${t}\n${o(i,n,r,a,e)}`).join("\n")};t.convertCC2SRT=n},36038:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoSubtitleDownload=void 0;const r=n(i(52296)),a=i(38845),s=i(555),l=i(22305);class c extends a.Feature{constructor(e){super(e,"videoSubtitleDownload",{dependencies:["webRequestController","requestController"],settings:{on:!0}}),this.messageStore=new a.MessageStore("videoSubtitleDownloadDOMInitialized"),this.subtitleWatcher=(0,s.webRequestCallbackWrapper)(e=>{const{tabId:t}=e,i=new r.default(e.url,"",!0),{pathname:o,query:n}=i;"/x/player/v2"===o&&this.getSubtitle(e.url).then(e=>{const i=this.messageStore.createData(t),{queue:o}=i;i.data.cid=n.cid,o.push({command:"loadSubtitle",subtitles:e.subtitles}),this.messageStore.dealWith(t)})}),this.getSubtitle=(e,t)=>o(this,void 0,void 0,(function*(){return this.emit("requestController","create",{url:e,options:Object.assign(Object.assign({},t),{contentType:"json"})},({data:e})=>e&&0===e.code?e.data.subtitle:[])})),this.downloadSubtitle=(e,t,i)=>{"srt"===e.type?this.downloadSRT(e,t,i):"json"===e.type&&this.downloadJSON(e,t,i)},this.downloadSRT=(e,t,i)=>{const o=this.messageStore.createData(t.tab.id||t.id);if(o){const{filename:t,subtitleObject:o}=e,{subtitle_url:n}=o;this.getJSONSubtitle(n.replace(/^(?:http?:?)?\/\//,"https://")).then(e=>{const o=(0,l.convertCC2SRT)(e),n=URL.createObjectURL(new Blob([o],{type:"text/srt"}));chrome.downloads.download({saveAs:!0,url:n,filename:(0,s.ToCDB)(t.replace(/\s/g,"_")).replace(/[\\/:*?"<>~|]/g,"_"),headers:[{name:"Content-Disposition",value:`attachment; filename="${t}"; filename*="utf-8' '${t}"`.replace("/","%2f")}]}),i(!0)})}else i(!1)},this.downloadJSON=(e,t,i)=>{const o=this.messageStore.createData(t.tab.id||t.id);if(o){const{filename:t,subtitleObject:n}=e,{lan:r,subtitle_url:a}=n,{cid:l}=o.data;chrome.downloads.download({saveAs:!0,url:a.replace(/^(?:http?:?)?\/\//,"https://"),filename:(0,s.ToCDB)(t.replace(/\s/g,"_")).replace(/[\\/:*?"<>~|]/g,"_"),headers:[{name:"Content-Disposition",value:`attachment; filename="${t}"; filename*="utf-8' '${t}"`.replace("/","%2f")}]}),i(!0)}else i(!1)},this.getJSONSubtitle=e=>this.emit("requestController","create",{url:e,options:{contentType:"json"}},({data:e})=>e)}onLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("downloadSubtitle",this.downloadSubtitle)}))}}t.VideoSubtitleDownload=c},37356:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const n=i(20837),r=i(10243);(0,n.interval)("#bilibiliPlayer .bilibili-player-video-btn-speed-menu,.squirtle-speed-select-list,.bpx-player-ctrl-playbackrate-menu",1e3).then(()=>{chrome.runtime.sendMessage({target:"videoAutoPlaySpeed",event:"getSetting"},e=>o(void 0,void 0,void 0,(function*(){e&&e.on&&1!==+e.speed&&(yield(0,r.onVideoChange)(t=>{const i=(0,r.getSpeedBtn)(+e.speed);i?i.click():t&&(t.playbackRate=Number(e.speed).toFixed(2))}))})))}).catch(e=>e)},47020:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoAutoPlaySpeed=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"videoAutoPlaySpeed",{settings:{on:!1,speed:1}}),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}}t.VideoAutoPlaySpeed=r},69208:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=i(555),n=i(10243),r=(e,t)=>{var i;let o,r=+e,a=n.VIDEO_QUALITY_NUMBER_LIST.findIndex(e=>+e===r);do{r=n.VIDEO_QUALITY_NUMBER_LIST[a];const e=`.bilibili-player-video-quality-menu .bui-select-item[data-value="${r}"],.squirtle-quality-wrap .squirtle-select-item [data-value="${r}"],.bpx-player-ctrl-quality-menu .bpx-player-ctrl-quality-menu-item[data-value="${r}"]`;o=document.querySelector(e);let s=r>80;o&&(s=!!(null===(i=o.querySelector('[class*="bigvip"]'))||void 0===i?void 0:i.textContent.includes("\u5927\u4f1a\u5458"))),a+=1,t||!s||!(r>80)&&r||o&&(o=null)}while(!o&&a<n.VIDEO_QUALITY_NUMBER_LIST.length&&r);return o},a=()=>new Promise(e=>{const t="\n        (() => {\n        let retryTimes = 0;\n            const t = setInterval(() => {\n                if (window.UserStatus && window.UserStatus.userInfo) {\n                    window.postMessage({command: 'sendInitUserData', pageData: {...window.UserStatus.userInfo}}, '*');\n                    clearInterval(t);\n                } else {\n                    ++retryTimes;\n                }\n                if (retryTimes === 300) {\n                    clearInterval(t);\n                }\n            }, 1000);\n        })()\n        ",i=document.createElement("script");i.innerHTML=t,document.body.appendChild(i);const o=t=>{const{data:n}=t;"sendInitUserData"===n.command&&(e(n.pageData),i.remove(),window.removeEventListener("message",o))};window.addEventListener("message",o)});(0,o.interval)(".bilibili-player-video-quality-menu,#bilibili-player .squirtle-quality-wrap,.bpx-player-control-wrap .bpx-player-ctrl-quality",1e3).then(e=>{e&&chrome.runtime.sendMessage({target:"videoAutoQuality",event:"getSetting"},e=>{e&&e.on&&setTimeout(()=>{a().then(t=>{const i=r(e.quality,!!t.vipStatus);i&&i.click()})},1500)})}).catch(e=>e)},33481:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoAutoQuality=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"videoAutoQuality",{settings:{on:!1,quality:80}}),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}}t.VideoAutoQuality=r},26886:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoCoverDownload=void 0;const n=i(53507),r=o(i(97326)),a=i(95947),s=o(i(57689)),l=o(i(635)),c=i(37459),d=i(555),{color:u}=c.theme,p=(0,l.default)(a.Button).attrs({className:"bilibili-helper-cover-download-btn"})`
  position: relative;
  display: inline-block;
  height: 32px;
  line-height: 28px;
  border-radius: 3px;
  font-size: 14px;
  font-style: normal;
  letter-spacing: 0.3px;
  background-color: #eaf4ff;
  transition: background-color .3s, color .3s;
  cursor: pointer;
  word-break: break-all;
  overflow: hidden;

  &:hover {
    background-color: #d4eaff;
  }

  .button-view {
    border-right: 1px solid #fff;
    height: inherit;
    font-size: 12px;
    font-weight: normal;
    color: #00a1d6;

    &:hover {
      color: #004c65;
    }

    &:last-of-type {
      border: none;
    }
  }
`,h=(0,l.default)(n.Modal)`
  max-width: 1000px;

  .preview-img {
    display: block;
    width: 100%;
    max-height: 500px;
    border-radius: 4px;
  }
`,m=l.default.div`
`,f=l.default.div`
  .button:first-of-type {
    margin-right: 8px;
  }
  .button {
    font-size: 12px;
  }
`,b=document.createElement("div");document.body.appendChild(b);class v extends s.default.Component{constructor(e){super(e),this.handleOnClick=()=>{const e=document.querySelector("#bofqi video, #bilibiliPlayer video, .bilibili-player-video video, #bilibili-player video");e?this.setState({imgSrc:this.props.imgSrc,showModal:!0},()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_cover_download_button"})}):window.postMessage({command:"showCheckHEVCModal"},"*")},this.handleOnCloseModal=()=>{this.setState({showModal:!1})},this.handleOnDownloadImage=()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"download_video_cover"});const e=(0,d.getFilename)(document),t=encodeURIComponent(`${e} ${(new Date).toLocaleString().replace(/\//g,"-")}.jpeg`.replace(/[|"*:<>]/g,"_"));new Promise(e=>{chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},t=>{if(!t||!t.on)return!1;chrome.runtime.sendMessage({target:"renameDownloadFile",event:"renameFileName",type:"videoCover",data:Object.assign(Object.assign({},this.props.videoInfo),{format:"jpeg"})},t=>{e(t||!1)})})}).then(e=>{const i=(0,d.ToCDB)((e||t).replace(/\s/g,"_")).replace(/[\\/:*?"<>~|]/g,"_");chrome.runtime.sendMessage({target:"downloadController",event:"create",name:i,data:{saveAs:!0,url:this.state.imgSrc.replace(/^\/\//,"https://").replace(/http:/,"https:"),filename:i,headers:[{name:"Content-Disposition",value:`attachment; filename="${i}"; filename*="utf-8' '${i}"`.replace("/","%2f")}]}},()=>{this.setState({showModal:!1})})})},this.state={imgSrc:null,showModal:!1}}render(){return s.default.createElement(s.default.Fragment,null,s.default.createElement(p,{onClick:this.handleOnClick},"\u89c6\u9891\u5c01\u9762\u4e0b\u8f7d"),r.default.createPortal(s.default.createElement(h,{open:this.state.showModal,className:"preview-modal",title:"\u89c6\u9891\u5c01\u9762\u9884\u89c8",onClickMask:this.handleOnCloseModal,buttons:s.default.createElement(f,null,s.default.createElement(a.Button,{className:"border",onClick:this.handleOnCloseModal},"\u5173\u95ed"),s.default.createElement(a.Button,{className:"primary",onClick:this.handleOnDownloadImage},"\u4e0b\u8f7d"))},s.default.createElement(m,null,s.default.createElement("img",{className:"preview-img",src:this.props.imgSrc,alt:"preview"}))),b))}}t.VideoCoverDownload=v},14347:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},s=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoDownload=void 0;const c=l(i(84875)),d=i(53507),u=i(95947),p=i(10243),h=i(47841),m=i(44101),f=l(i(57689)),b=r(i(635)),v=i(20837),g=i(86999),y=i(96582),w=i(58188),k=i(96691),x=i(26886),S=i(4258),_=l(i(56058)),O=(0,m.isFireFox)(),C=!1;(0,y.injectIconfont)(),(0,v.injectScript)("\n(() => {\n    if (window.historyHacked) {\n        return;\n    }\n    window.historyHacked = true;\n    \n    let isEP = false;\n    \n    const sendInfo = () => {\n        let isP = !!window?.__INITIAL_STATE__?.p;\n        let data = window?.__INITIAL_STATE__?.videoData || window?.__INITIAL_STATE__?.epInfo || window;\n        \n        if (isP) {\n            const tempData = window?.__INITIAL_STATE__?.cidMap?.[__INITIAL_STATE__.bvid]?.cids;\n            data.cid = tempData?.[__INITIAL_STATE__?.p];\n        }\n        window.postMessage({\n            command: 'videoChange',\n            aid: data?.aid,\n            bvid: data?.bvid,\n            cid: data?.cid,\n            isEP: isEP || !!window?.__INITIAL_STATE__?.epInf,\n            isP,\n        }, '*');\n    };\n    \n    // \u64ad\u653e\u5408\u96c6\u6309\u94ae\u5f00\u6253\u7684\u9875\u9762\u5730\u5740\u4e0d\u4f1a\u56e0\u4e3a\u89c6\u9891\u5207\u6362\u800c\u53d8\u5316\uff0c\u9700\u8981\u5355\u72ec\u505a\u68c0\u6d4b\n    if (location.href.match('https://www.bilibili.com/medialist')) {\n        Object.defineProperty(window, 'bvid', {\n            get: function () {\n                return this._bvid;\n            },\n            set: function (value) {\n                this._bvid = value;\n                sendInfo();\n            },\n        });\n        return;\n    } else if (location.href.match('https://www.bilibili.com/list/')) {\n        let tempCidMap = {...window.__INITIAL_STATE__.cidMap};\n        Object.defineProperty(window.__INITIAL_STATE__, 'cidMap', {\n            get: function () {\n                return tempCidMap;\n            },\n            set: function (value) {\n                tempCidMap = value;\n                sendInfo();\n            },\n        });\n        return;\n    }/*  else if (/https:\\/\\/www\\.bilibili\\.com\\/video\\/BV(?:.+)\\/?p=\\d+/) {\n    \n    } */\n    \n    if (location.href.match(/https:\\/\\/www\\.bilibili\\.com\\/bangumi\\/play\\/ep/)) {\n        isEP = true;\n    }\n    \n    sendInfo();\n    \n    let oldPushState = history.pushState;\n    history.pushState = function pushState() {\n        let ret = oldPushState.apply(this, arguments);\n        window.dispatchEvent(new Event('pushstate'));\n        window.dispatchEvent(new Event('locationchange'));\n        return ret;\n    };\n\n    let oldReplaceState = history.replaceState;\n    history.replaceState = function replaceState() {\n        let ret = oldReplaceState.apply(this, arguments);\n        window.dispatchEvent(new Event('replacestate'));\n        window.dispatchEvent(new Event('locationchange'));\n        return ret;\n    };\n\n    window.addEventListener('replacestate', () => {\n        sendInfo();\n    });\n    window.addEventListener('pushstate', () => {\n        sendInfo();\n    });\n})();\n");const L=e=>e,P=()=>new Promise(e=>{const t="window.postMessage({command: 'sendDashInfo', pageData: window.__playinfo__?.data}, '*');",i=document.createElement("script");i.innerHTML=t,document.body.appendChild(i);const o=t=>{const{data:n}=t;"sendDashInfo"===n.command&&(e(n.pageData),i.remove(),window.removeEventListener("message",o))};window.addEventListener("message",o)});let T={};const{color:I}=k.theme,D=(b.keyframes`
	0% {
		opacity: 0;
		z-index: 1;
	}
	100% {
		opacity: 1;
	}
`,b.default.div`
	margin-bottom: 12px;
	
	.basic-info {
		display: grid;
		grid-column-gap: 4px;
		grid-row-gap: 4px;
		grid-template-columns: repeat(4, 1fr);
		margin: 0 4px 0;
		padding: 3px;
		width: calc(100% - 10px);
		font-weight: normal;
		
		.button:not(.bilibili-helper-cover-download-btn) {
			position: relative;
			height: 32px;
			line-height: 32px;
			text-align: center;
			border-right: 1px solid #fff;
			border-radius: 3px;
			font-size: 12px;
			background-color: #eaf4ff;
			color: #00a1d6;
			transition: background-color .3s, color .3s;
			
			&:hover {
				color: #004c65;
				background-color: #d4eaff;
			}
			
			&:last-of-type {
				border: none;
			}
			
			&::after {
				content: '复制成功';
				display: block;
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				margin-left: -5%;
				margin-top: -1%;
				width: 110%;
				height: 110%;
				text-align: center;
				background-color: #eaf4ff;
				border-radius: 4px;
				opacity: 0;
				transition: opacity .3s .75s;
				pointer-events: none;
			}
			
			&:focus::after {
				transition: opacity .3s;
			}
			
			.format {
				position: absolute;
				right: 0;
				top: 15px;
				left: 0;
				height: 16px;
				line-height: 16px;
				color: var(--bilibili-pink);
				transform: scale(.7);
			}
			
			.description {
				position: relative;
				top: -2px;
			}
		}
		
		b {
			position: absolute;
			right: 0;
			bottom: 2px;
			left: 0;
			height: 16px;
			line-height: 16px;
			font-weight: normal;
			color: var(--bilibili-pink);
			text-align: center;
			transform: scale(.7);
		}
	}
	
	.space-cat-banner {
		font-size: 12px;
		min-width: unset;
		color: rgb(255, 255, 255);
		background-color: rgb(251, 114, 153);
		margin: 0px 6px 4px;
		padding: 0px 4px;
		border: 1px solid rgb(251, 114, 153);
		border-radius: 4px;
		word-break: break-word;
		
		.introduction {
			margin-right: 8px;
			//text-indent: 3px;
		}
		
		.button {
			height: 14px;
			
			.button-view {
				vertical-align: bottom;
				line-height: 6px;
				padding: 4px 8px;
				border-radius: 5px;
				//background-color: #fff;
				color: #fff;
			}
		}
	}
	
	@keyframes move {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 50px 0px;
		}
	}
	
	.percentage {
		position: relative;;
		border-radius: 4px;
		background-color: rgb(234, 244, 255);
		margin: 0 6px;
		padding: 0 8px;
		display: flex;
		user-select: none;
		width: min-content;
		height: 20px;
		line-height: 20px;
		transition: width 500ms;
		
		&.done {
			background-color: var(--paper-light-green-a700);
			
			::after {
				content: none;
			}
		}
		
		.percentage-title {
			margin-right: 4px;
			flex-shrink: 0;
			transform: scale(0.9);
			transform-origin: left;
		}
		
		.percentage-num {
			flex: 1;
			text-align: right;
			transform: scale(0.9);
			transform-origin: right;
		}
		
		::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			border-radius: 4px;
			background-size: 50px 50px;
			background-image: linear-gradient(-45deg, rgb(83 203 244 / 20%) 25%, transparent 25%, transparent 50%, rgb(83 203 244 / 20%) 50%, rgb(83 203 244 / 20%) 75%, transparent 75%, transparent);
			animation: move 1s linear infinite;
			overflow: hidden;
		}
	}
	
	.declaration {
		margin: 4px 6px 0px;
		line-height: 18px;
		//font-weight: 100;
		color: var(--google-grey-500);
		
		span {
			color: red;
		}
	}
`),M=b.default.div.attrs({className:"bilibili-helper-video-download-title"})`
	position: relative;
	width: 100%;
	margin-bottom: 6px;
	font-size: 12px;
	font-weight: bold;
	text-align: left;
	color: #222;
	
	.count {
		margin-left: 10px;
		color: ${I("google-grey-500")};
	}
	
	.helper-link, .ad-link {
		margin-left: 12px;
		font-size: 12px;
		font-weight: normal;
		text-decoration: underline;
		color: var(--bilibili-blue);
	}
`,A=(b.default.p`
	font-size: 12px;
	min-width: unset;
	color: rgb(255, 255, 255);
	background-color: rgb(251, 114, 153);
	margin-bottom: 4px;
	margin: 0 6px 4px;
	padding: 0px 4px;
	border: 1px solid rgb(251, 114, 153);
	border-radius: 4px;
	word-break: break-word;
`,b.default.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	
	.bilibili-helper-2-icon-cat-paw {
		margin-right: 8px;
		width: 12px;
		height: 12px;
		line-height: 12px;
		transform: rotate(-45deg);
		color: var(--bilibili-pink);
		transform: scale(.7);
		
	}
`),E=b.default.div`
	position: relative;
	display: grid;
	grid-column-gap: 4px;
	grid-row-gap: 4px;
	grid-template-columns: repeat(4, 1fr);
	box-sizing: border-box;
	margin: 0 4px 0;
	padding: 3px;
	width: calc(100% - 6px);
	font-size: 12px;
	font-style: normal;
	letter-spacing: 0.3px;
	transition: all 0.3s, visibility 0s;
	word-break: break-all;
	overflow: hidden;
	
	
	.button {
		position: relative;
		height: 32px;
		line-height: 32px;
		text-align: center;
		//border-right: 1px solid #fff;
		border-radius: 3px;
		font-size: 12px;
		background-color: #eaf4ff;
		color: #00a1d6;
		transition: background-color .3s, color .3s;
		outline: none;
		
		&:hover {
			color: #004c65;
			background-color: #d4eaff;
		}
		
		&:last-of-type {
			border: none;
		}
		
		//&.vip {
		//  background-color: var(--bilibili-pink);
		//  color: var(--bilibili-gray);
		//
		//  .download-link {
		//    color: var(--bilibili-pink);
		//  }
		//}
		
		&.has-link {
			height: 48px;
			line-height: 48px;
			
			.format {
				top: 11px;
			}
			
			.description {
				top: 0;
			}
			
			.link-group {
				display: grid;
				grid-column-gap: 2px;
				grid-row-gap: 2px;
				grid-template-columns: repeat(4, 1fr);
				margin: 0 auto;
				padding: 26px 2px 2px;
				max-width: 120px;
				width: 100%;
				box-sizing: border-box;
				
				.download-link {
					width: 100%;
					padding: 0 2px;
					box-sizing: border-box;
					
					:hover {
						color: var(--bilibili-pink);
					}
				}
			}
		}
		
		&.fragment-button {
			height: auto;
		}
		
		.format {
			position: absolute;
			right: 0;
			top: 15px;
			left: 0;
			height: 16px;
			line-height: 16px;
			color: var(--bilibili-pink);
			transform: scale(.7);
		}
		
		.description {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 20px;
			line-height: 34px;
		}
		
		&.vip {
			background-color: rgb(255 245 201);
			box-shadow: 0 1px 2px rgb(235 205 73);
			
			.vip-tag {
				position: absolute;
				display: block;
				width: 20px;
				height: 20px;
				top: -3px;
				left: -3px;
				background-size: 20px;
				background-image: url(https://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png@40w_40h_1c.webp);
				z-index: -1;
			}
			
			.bilibili-helper-2-icon-cat-paw {
				position: absolute;
				right: 9px;
				bottom: 10px;
				transform: scale(2) rotate(20deg);
				opacity: 0.2;
			}
		}
		
		//.description {
		//  position: relative;
		//  top: -2px;
		//}
		
		.download-link {
			position: absolute;
			top: 24px;
			left: 3px;
			padding: 0 2px;
			box-sizing: border-box;
			display: block;
			width: 94%;
			height: 20px;
			line-height: 20px;
			border-radius: 2px;
			background-color: #fff;
			color: var(--bilibili-blue);
		}
		
		.fragment-download-link {
			position: relative;
			padding: 0 2px;
			box-sizing: border-box;
			display: block;
			height: 18px;
			line-height: 18px;
			border-radius: 2px;
			background-color: #fff;
			color: var(--bilibili-blue);
		}
	}
	
	.can-not-download {
		grid-column-end: span 4;
	}
`,B=(0,b.default)(u.Button).attrs({className:"bilibili-helper-audio-download-btn"})`
	position: relative;
	display: inline-block;
	width: 100%;
	height: 30px;
	line-height: 26px;
	border-radius: 3px;
	font-size: 14px;
	font-style: normal;
	letter-spacing: 0.3px;
	//background-color: #eaf4ff;
	transition: background-color .3s, color .3s;
	cursor: pointer;
	word-break: break-all;
	overflow: hidden;
	
	&.button {
		background-color: rgb(255 245 201);
		box-shadow: 0 1px 2px rgb(235 205 73);
	}
	
	&:hover {
		background-color: rgb(255 245 201) !important;
	}
	
	.button-view {
		border-right: 1px solid #fff;
		height: inherit;
		font-size: 12px;
		font-weight: normal;
		color: #00a1d6;
		
		&:hover {
			color: #004c65;
		}
		
		&:last-of-type {
			border: none;
		}
	}
	
	.bilibili-helper-2-icon-cat-paw {
		position: absolute;
		right: 9px;
		bottom: 10px;
		transform: scale(2) rotate(20deg);
		opacity: 0.2;
	}
`,j=_.default.get("spaceCatOn");class N extends f.default.Component{constructor(e){super(e),this.state={currentVideoInfo:null,dashData:null,supportFormats:[],qualityMap:{},pageData:null,settings:null,errorStr:"",loading:!1,canDownload:!1,userData:null,videoSrc:null,audioSrc:null,hiResSrc:null,ad:null,hasLogin:!1,bhAccount:null,isVIP:!1,isSuperVIP:!1,aria2cConnected:!1,spaceCatActive:!1,spaceCatOn:void 0!==j&&j,downloading:!1,percentage:0},this.addListener=()=>{window.addEventListener("message",e=>{const{data:t}=e;if("videoChange"===(null===t||void 0===t?void 0:t.command)){if((null===t||void 0===t?void 0:t.cid)===this.state.userData.cid)return;this.setState({loading:!0,downloading:0!==this.state.percentage&&1!==this.state.percentage}),chrome.runtime.sendMessage({target:"videoDownload",event:"bindVideo2Tab",bvid:t.bvid,cid:t.cid,isEP:t.isEP,isP:t.isP})}return!0}),chrome.runtime.onMessage.addListener((e,t,i)=>{var o,n,r,a,l,c,u,h;if("initNewVideoIds"===e.command){if(e.data){const t=e.data,{userData:i,support_formats:o,dashInfo:n}=t,r=s(t,["userData","support_formats","dashInfo"]);this.setState({currentVideoInfo:Object.assign(Object.assign(Object.assign({},this.state.currentVideoInfo),r),i),userData:null!==i&&void 0!==i?i:this.state.userData,supportFormats:o,loading:!1},()=>{n&&this.initDashInfo(n),this.context.setVideoInfo(this.state.currentVideoInfo)})}i(!0)}else if("initNewVideoPlayInfo"===e.command)e.data?((null===(o=e.data)||void 0===o?void 0:o.subtitle)&&(null===(n=e.data)||void 0===n||delete n.subtitle),(null===(r=e.data)||void 0===r?void 0:r.cid)&&(null===(a=e.data)||void 0===a||delete a.cid),(null===(l=e.data)||void 0===l?void 0:l.aid)&&(null===(c=e.data)||void 0===c||delete c.aid),(null===(u=e.data)||void 0===u?void 0:u.bvid)&&(null===(h=e.data)||void 0===h||delete h.bvid),this.setState({errorStr:"",currentVideoInfo:Object.assign(Object.assign({},this.state.currentVideoInfo),e.data),canDownload:!(0,p.isBangumiPage)()&&!(0,p.isCheesePage)(),qualityMap:{},loading:!1},()=>{this.context.setVideoInfo(this.state.currentVideoInfo)})):this.setState({loading:!1,errorStr:"\u8be5\u89c6\u9891\u5df2\u88ab\u9650\u5236\u4e0b\u8f7d"}),i(!0);else if("initDashVideoPlayInfo"===e.command)e.data&&e.data.dash&&this.initDashInfo(e.data);else if("setPercentage"===e.command)1===e.percentage&&d.Message.info("\u89c6\u9891\u5df2\u4e0b\u8f7d\u5b8c\u6210"),this.setState({downloading:e.percentage<=1,percentage:e.percentage});else if("setDownloadError"===e.command)d.Message.error(e.error.message);else if("initUserInfo"===e.command){const{data:t}=e;this.setState({userData:t,currentVideoInfo:Object.assign(Object.assign({},this.state.currentVideoInfo),t)},()=>{this.context.setVideoInfo(this.state.currentVideoInfo)})}else"initDashIndex"===e.command&&d.Message.info("\u6b63\u5728\u5c1d\u8bd5\u83b7\u53d6\u89c6\u9891\u8d44\u6e90\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85~");return!0})},this.initDashInfo=e=>{var t,i,o,n,r,a,s,l,c,d,u,p,h,m,f,b,v,g,y,w,k;const{support_formats:x,dash:S}=e,_=L((null===(i=null===(t=S.audio)||void 0===t?void 0:t[0])||void 0===i?void 0:i.backupUrl)?null===(r=null===(n=null===(o=S.audio)||void 0===o?void 0:o[0])||void 0===n?void 0:n.backupUrl)||void 0===r?void 0:r[0]:null===(s=null===(a=S.audio)||void 0===a?void 0:a[0])||void 0===s?void 0:s.baseUrl),O=L((null===(c=null===(l=S.video)||void 0===l?void 0:l[0])||void 0===c?void 0:c.backupUrl)?null===(p=null===(u=null===(d=S.video)||void 0===d?void 0:d[0])||void 0===u?void 0:u.backupUrl)||void 0===p?void 0:p[0]:null===(m=null===(h=S.video)||void 0===h?void 0:h[0])||void 0===m?void 0:m.baseUrl),C=L((null===(b=null===(f=null===S||void 0===S?void 0:S.flac)||void 0===f?void 0:f.audio)||void 0===b?void 0:b.backupUrl)?null===(y=null===(g=null===(v=null===S||void 0===S?void 0:S.flac)||void 0===v?void 0:v.audio)||void 0===g?void 0:g.backupUrl)||void 0===y?void 0:y[0]:null===(k=null===(w=null===S||void 0===S?void 0:S.flac)||void 0===w?void 0:w.audio)||void 0===k?void 0:k.baseUrl);this.setState({videoSrc:O?O+"&requestFrom=BILIBILI_HELPER_2.6.14":"",audioSrc:_?_+"&requestFrom=BILIBILI_HELPER_2.6.14":"",hiResSrc:C?C+"&requestFrom=BILIBILI_HELPER_2.6.14":null,supportFormats:x,loading:!1})},this.getDashIndexData=e=>a(this,void 0,void 0,(function*(){const t=null===e||void 0===e?void 0:e[0],[i]=t.SegmentBase.Initialization.split("-").map(Number),[,o]=t.SegmentBase.indexRange.split("-").map(Number);return yield fetch(null===t||void 0===t?void 0:t.baseUrl,{headers:{range:`bytes=${i}-${o}`}}).then(e=>e.arrayBuffer())})),this.getDashMediaData=(e,t,i)=>a(this,void 0,void 0,(function*(){return yield fetch(e,{headers:{range:`bytes=${t}-${i}`}}).then(e=>e.arrayBuffer())})),this.initSidx=()=>a(this,void 0,void 0,(function*(){const{video:e,audio:t}=this.state.dashData,i=null===e||void 0===e?void 0:e[0].mimeType;let o=yield Promise.all([this.getDashIndexData(e),this.getDashIndexData(t)]);const n=(0,h.parseSidx)(o[0],0),r=(0,h.parseSidx)(o[1],0),s="a",l="mp4";let c,d;window.showSaveFilePicker({suggestedName:s+"."+l,types:[{accept:{[i]:["."+l]}}]}).then(e=>a(this,void 0,void 0,(function*(){return c=e,d=yield c.createWritable()}))).then(()=>a(this,void 0,void 0,(function*(){const i=0,o=5;yield Promise.all([this.getDashMediaData(e[0].baseUrl,n.references[i].startRange,n.references[o].endRange),this.getDashMediaData(t[0].baseUrl,r.references[i].startRange,r.references[o].endRange)])})))})),this.getVideoBasicInfo=(e,t)=>{if(t&&e)return new Promise(i=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:`https://api.bilibili.com/x/web-interface/view?aid=${t}&cid=${e}`,options:{contentType:"json"}},({data:e,error:t})=>{var o,n,r,a,s,l;if(e&&0===e.code){const{currentVideoInfo:t}=this.state;(null===(o=e.data)||void 0===o?void 0:o.pages)&&delete e.data.cid,(null===(n=e.data)||void 0===n?void 0:n.subtitle)&&(null===(s=null===(a=null===(r=e.data)||void 0===r?void 0:r.subtitle)||void 0===a?void 0:a[0])||void 0===s?void 0:s.subtitle_url)||null===(l=e.data)||void 0===l||delete l.subtitle,this.setState({currentVideoInfo:Object.assign(Object.assign(Object.assign({},t),e.data),{pic:e.data.pic}),loading:!1,qualityMap:{}},()=>{this.context.setVideoInfo(this.state.currentVideoInfo),i()})}else this.setState({loading:!1}),i()})})},this.getAudioInfo=()=>{fetch(location.href,{method:"GET",headers:{"content-type":"text/html; charset=utf-8"}}).then(e=>e.text()).then(e=>{const t=/<script>window\.__playinfo__=(.+?)<\/script>/.exec(e);new Promise(e=>{t&&t[1]||e(!1);try{const i=JSON.parse(t[1]);e(i.data||!1)}catch(t){e(!1)}}).then(({dash:e,support_formats:t})=>{var i,o;if(e){if(t&&this.setState({loading:!1,currentVideoInfo:Object.assign({},this.state.currentVideoInfo),supportFormats:t}),this.setState({dashData:e}),e.audio){const t=e.audio[0].backupUrl?e.audio[0].backupUrl[0]:e.audio[0].baseUrl,i=L(t);this.setState({audioSrc:i+"&requestFrom=BILIBILI_HELPER_2.6.14"})}if(e.video){const t=e.video[0].backupUrl?e.video[0].backupUrl[0]:e.video[0].baseUrl,i=L(t);this.setState({videoSrc:i+"&requestFrom=BILIBILI_HELPER_2.6.14"})}if(e.flac){const t=null===(o=null===(i=null===e||void 0===e?void 0:e.flac)||void 0===i?void 0:i.audio)||void 0===o?void 0:o.baseUrl,n=L(t);this.setState({hiResSrc:n?n+"&requestFrom=BILIBILI_HELPER_2.6.14":null})}}})})},this.getVideoFilename=(e,t,i)=>new Promise(o=>{var n;const{currentVideoInfo:r,userData:a}=this.state,s=document.querySelector(".player-auxiliary-playlist-item-p-item-active");let l,c,d=a.page_no;s&&([,c,d,l]=s.textContent.match(/^(P(\d+?))\s+(.+)/),d-=1),void 0===d&&T&&T.epInfo&&T.epList.length>0&&(d=T.epInfo.i+1),void 0===l&&d&&(r.pages&&r.pages[d-1]?l=r.pages[d-1].part:(null===T||void 0===T?void 0:T.epInfo)&&(l=T.epInfo.longTitle)),void 0===c&&T&&(void 0!==d?c="P"+d:(null===T||void 0===T?void 0:T.epInfo)&&(c=T.epInfo.titleFormat)),chrome.runtime.sendMessage({target:"renameDownloadFile",event:"renameFileName",type:"video",data:{url:t?t+"&requestFrom=bilibili_helper_2":"",sign:null===(n=null===t||void 0===t?void 0:t.split("?"))||void 0===n?void 0:n[0],cid:r.cid,aid:r.aid,bvid:r.bvid,pubdate:r.pubdate,quality:r.quality,owner:r.owner,title:r.title,subTitle:l,size:e,preTitle:c,pageNumber:d,format:i}},e=>{o(e)})}),this.handleOnClickDownloadAndSendFilename=(e,t,i)=>{const{currentVideoInfo:o,userData:n}=this.state,r=document.querySelector(".player-auxiliary-playlist-item-p-item-active");let a,s,l=n.page_no;r&&([,s,l,a]=r.textContent.match(/^(P(\d+?))\s+(.+)/),l-=1),void 0===l&&T&&(void 0!==T.p?l=T.p:T.epInfo&&T.epList.length>0&&(l=T.epInfo.i+1)),void 0===a&&(T||o)&&(o.pages&&o.pages[l-1]?a=o.pages[l-1].part:T.epInfo&&(a=T.epInfo.longTitle)),void 0===s&&T&&(void 0!==l?s="P"+l:T.epInfo&&(s=T.epInfo.titleFormat)),!e&&chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"download_only_"+i}),chrome.runtime.sendMessage({target:"renameDownloadFile",event:"sendVideoFilename",url:t+"&requestFrom=BILIBILI_HELPER_2.6.14",sign:t.split("?")[0],cid:o.cid,aid:o.aid,bvid:o.bvid,pubdate:o.pubdate,quality:o.quality,owner:o.owner,title:o.title,subTitle:a,size:e,preTitle:s,pageNumber:l,format:i})},this.handleOnClickQualityButton=(e=127)=>a(this,void 0,void 0,(function*(){const{qualityMap:t,spaceCatOn:i,isSuperVIP:o,isVIP:n,percentage:r,userData:a}=this.state;if(e>80){if(!(null===a||void 0===a?void 0:a.vip.status))return void d.Message.info("\u9700\u8981\u5f00\u901ab\u7ad9\u5927\u4f1a\u5458");if(!o&&!n)return void this.handleOnClickGotoPayment()}if(r<1&&r>0)d.Message.info("\u6b63\u5728\u4e0b\u8f7d\u4e2d, \u8bf7\u7a0d\u540e\u518d\u8bd5");else if(a){if(t[e])return void this.downloadByUrl(t[e]);const{cid:i,aid:o,bvid:n}=a;chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"download_video",label:e});let r=null;const s=location.href.match(/https:\/\/www\.bilibili\.com\/bangumi\/play\/ep(\d+)/);s&&(r=s[1]);const l=yield this.getVideoFilename(0,void 0,"mp4");chrome.runtime.sendMessage({target:"videoDownload",event:"newDownload",filename:l,cid:i,aid:o,bvid:n,quality:e,epid:r},e=>{e||alert("\u83b7\u53d6\u4e0b\u8f7d\u94fe\u63a5\u5931\u8d25")})}})),this.handleOnClickID=(e,t)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"copy_id",label:e}),(0,g.copy2Clipboard)(t).then(e=>d.Message.info("\u4fe1\u606f\u590d\u5236"+(e?"\u6210\u529f":"\u5931\u8d25")))},this.handleOnClickConvertLink=()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_convert_link"})},this.handleOnClickHelpLink=()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_helper_link"})},this.handleOnClickADLink=()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"click_video_ad"})},this.handleOnClickGotoPayment=()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:chrome.runtime.getURL("/html/config.html?showPaymentModal=1")})},this.handleOnClickOnSpaceCat=()=>{const{spaceCatOn:e}=this.state;this.setState({spaceCatOn:!e}),_.default.set("spaceCatOn",!e)},this.downloadByUrl=(e,t)=>{const i=document.createElement("a"),o=(0,y.getFilename)(document);i.innerText=o,i.style.display="none",i.setAttribute("referrerPolicy","unsafe-url"),i.setAttribute("download",o+".flv"),i.setAttribute("target","_blank"),i.href=t.replace(/^http:\/\//,"https://"),this.handleOnClickDownloadAndSendFilename(e,i.href,"flv"),i.click(),i.remove()},this.downloadBySpaceCat=(e=127)=>{P().then(t=>{if(null===t||void 0===t?void 0:t.dash){const i=null===t||void 0===t?void 0:t.dash;let o=i.video.sort((e,t)=>e.bandwidth>=t.bandwidth?0:1).filter(({id:t})=>e>=t)[0];o||(o=i.video.sort((e,t)=>e.bandwidth>=t.bandwidth?0:1)[0]);const n=i.audio.sort((e,t)=>e.bandwidth>t.bandwidth)[0],r=o.backup_url[0];n.backup_url[0];this.getVideoFilename(0,r,"mp4").then(e=>{o.codecs,n.codecs,location.href})}})},this.renderAD=()=>{const{ad:e}=this.state;return e?f.default.createElement("a",{className:"ad-link",href:e.link,onClick:this.handleOnClickADLink,target:"_blank",rel:"noreferrer"},e.title):null},this.renderVideoBasicInfo=()=>{const{currentVideoInfo:e}=this.state;return f.default.createElement(D,null,f.default.createElement(M,null,"\u89c6\u9891\u4fe1\u606f - \u70b9\u51fb\u590d\u5236"),f.default.createElement(A,null,(null===e||void 0===e?void 0:e.aid)?null:f.default.createElement("div",{className:"basic-info"},f.default.createElement(u.Button,null,"\u6682\u65e0\u6570\u636e")),(null===e||void 0===e?void 0:e.aid)?f.default.createElement(f.default.Fragment,null,f.default.createElement("div",{className:"basic-info"},f.default.createElement(x.VideoCoverDownload,{imgSrc:e.pic,videoInfo:e}),f.default.createElement(u.Button,{tabIndex:"0",onClick:()=>this.handleOnClickID("aid",e.aid)},f.default.createElement("b",{className:"format"},"aid"),f.default.createElement("i",{className:"description"},e.aid)),f.default.createElement(u.Button,{tabIndex:"1",onClick:()=>this.handleOnClickID("bvid",e.bvid)},f.default.createElement("b",{className:"format"},"bvid"),f.default.createElement("i",{className:"description"},e.bvid)),f.default.createElement(u.Button,{tabIndex:"2",onClick:()=>this.handleOnClickID("cid",e.cid)},f.default.createElement("b",{className:"format"},"cid"),f.default.createElement("i",{className:"description"},e.cid)))):null))},this.renderFlvButton=(e,t)=>{var i,o;const{aria2cConnected:n,spaceCatOn:r}=this.state,a=L(e[0].url||(null===(o=null===(i=e[0])||void 0===i?void 0:i.backup_url)||void 0===o?void 0:o.pop())),s=e[0].size;return this.handleOnClickDownloadAndSendFilename(s,a,t),n?f.default.createElement("a",{className:"download-link",onClick:()=>{chrome.runtime.sendMessage({target:"aria2c",event:"download",uri:a})}},"\u70b9\u51fb\u4e0b\u8f7d"):f.default.createElement("a",{className:"download-link",href:a+"&requestFrom=BILIBILI_HELPER_2.6.14",target:"__blank",referrerPolicy:"unsafe-url",download:!0},"\u70b9\u51fb\u4e0b\u8f7d")},this.renderFlvFragmentButton=(e,t)=>f.default.createElement("div",{className:"link-group"},e?e.map((e,i)=>{const o=L(e.url);return this.state.aria2cConnected?f.default.createElement("a",{key:i,className:"download-link",onClick:()=>{this.handleOnClickDownloadAndSendFilename(e.size,o,t),chrome.runtime.sendMessage({target:"aria2c",event:"download",uri:o})}},"\u70b9\u51fb\u4e0b\u8f7d"):f.default.createElement("a",{key:i,className:"fragment-download-link",href:o+"&requestFrom=BILIBILI_HELPER_2.6.14",target:"__blank",referrerPolicy:"unsafe-url",download:!0,onClick:()=>this.handleOnClickDownloadAndSendFilename(e.size,o,t)},i)}):null),this.renderTitle=()=>f.default.createElement(M,null,"\u89c6\u9891\u4e0b\u8f7d\uff084K8K\u8d85\u957f\u89c6\u9891\uff09",f.default.createElement("a",{className:"helper-link",href:"https://acghelper.com/questions",target:"_blank",rel:"noreferrer",onClick:this.handleOnClickHelpLink},"\u4f7f\u7528\u5e2e\u52a9"),this.renderAD()),this.renderBanner=()=>{const{spaceCatOn:e}=this.state;return f.default.createElement("div",{className:"space-cat-banner"},f.default.createElement("span",{className:"introduction"},"\u662f\u5426\u7531SpaceCat\u63a5\u7ba1\u89c6\u9891\u4e0b\u8f7d\u4efb\u52a1"),f.default.createElement(u.Button,{onClick:this.handleOnClickOnSpaceCat},e?"\u70b9\u51fb\u5173\u95ed":"\u70b9\u51fb\u542f\u7528"))},this.renderFLV=()=>{const{loading:e,currentVideoInfo:t,canDownload:i,errorStr:o,qualityMap:n,userData:r,percentage:a,downloading:s,isVIP:l,isSuperVIP:h,supportFormats:m}=this.state;let b;return((0,p.isBangumiPage)()||(0,p.isCheesePage)())&&(b="\u6211\u4eec\u611f\u5230\u975e\u5e38\u62b1\u6b49(\u2565\ufe4f\u2565)\uff0c\u7531\u4e8e\u7f51\u7ad9\u8981\u6c42\u52a9\u624b\u5c06\u4e0d\u518d\u63d0\u4f9b\u7248\u6743\u89c6\u9891\u4e0b\u8f7d"),b?f.default.createElement(f.default.Fragment,null,f.default.createElement(D,null,this.renderTitle(),f.default.createElement(E,null,f.default.createElement(u.Button,{className:"can-not-download"},b))),this.renderSplit()):f.default.createElement(f.default.Fragment,null,f.default.createElement(D,null,this.renderTitle(),s?f.default.createElement("div",{className:(0,c.default)("percentage",1===a?"done":""),style:{width:`calc(${100*a}% - 28px)`}},f.default.createElement("span",{className:"percentage-title"},"\u4e0b\u8f7d\u8fdb\u5ea6:"),f.default.createElement("span",{className:"percentage-num"},(100*a).toFixed(2),"%")):null,f.default.createElement(A,null,!e&&(null===m||void 0===m?void 0:m.length)>0&&r?f.default.createElement(E,{style:{gridTemplateColumns:C?"repeat(1,1fr)":"repeat(4, 1fr)"}},C?f.default.createElement(u.Button,null,"\u6d4f\u89c8\u5668\u5b58\u5728\u517c\u5bb9\u95ee\u9898\u65e0\u6cd5\u6b63\u5e38\u4e0b\u8f7d\uff0c\u8bf7\u4f7f\u7528\u5176\u4ed6\u6d4f\u89c8\u5668"):null,C?null:m.map(({new_description:e,quality:t})=>{const i=n[t];return f.default.createElement(u.Button,{key:t,className:[i?"has-link":"",t>80?"vip":null,i&&i.length>1?"fragment-button":null].join(" "),onClick:()=>i?null:this.handleOnClickQualityButton(t)},f.default.createElement("i",{className:"vip-tag"}),t>80?f.default.createElement(d.Icon,{icon:"cat-paw",size:16}):null,f.default.createElement("span",{className:"description"},e))})):f.default.createElement(E,{style:{gridTemplateColumns:"repeat(1,1fr)"}},f.default.createElement(u.Button,null,o||"\u6570\u636e\u8f7d\u5165\u4e2d"))),!C&&!e&&(null===m||void 0===m?void 0:m.length)>0&&r?f.default.createElement("p",{className:"declaration"},"\u203b \u8bf7\u8010\u5fc3\u7b49\u5f85\u6d4f\u89c8\u5668\u5c06crswap\u4e0emp4\u6587\u4ef6\u5408\u5e76",f.default.createElement("br",null),"\u203b \u7531\u4e8e\u9700\u8981\u8fdb\u884c\u4e0b\u8f7d\u6570\u636e\u7684\u5904\u7406\uff0c\u76ee\u524d\u6682\u65f6\u4e0d\u652f\u6301\u5176\u4ed6\u4e0b\u8f7d\u5de5\u5177",f.default.createElement("br",null)):null),!O&&this.renderSplit())}}componentDidMount(){this.addListener(),chrome.runtime.sendMessage({command:"videoDownloadDOMInitialized"}),chrome.runtime.sendMessage({target:"videoDownload",event:"getSetting"},e=>{this.setState({settings:e})}),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},e=>{e&&(null===e||void 0===e?void 0:e.hasLogin)&&(null===e||void 0===e?void 0:e.bhAccount)&&this.setState({hasLogin:e.hasLogin,bhAccount:e.bhAccount,isVIP:!!e.hasLogin&&(0,w.isVIP)(e.bhAccount),isSuperVIP:!!e.hasLogin&&(0,w.isSuperVIP)(e.bhAccount)})}),chrome.runtime.sendMessage({target:"aria2c",event:"getConnectedStat"},e=>{this.setState({aria2cConnected:e})})}renderSplit(){const{videoSrc:e,audioSrc:t,hiResSrc:i,isVIP:o,isSuperVIP:n,loading:r}=this.state;return!e&&!t||r?null:f.default.createElement(D,null,f.default.createElement(A,{className:"split-download"},f.default.createElement(M,null,"\u97f3\u89c6\u9891\u5206\u522b\u4e0b\u8f7d"),f.default.createElement(E,null,e?f.default.createElement(f.default.Fragment,null,f.default.createElement("a",{href:o||n?e+"requestFrom=$BILIBILI_HELPER_2.6.14":null,target:"__blank",referrerPolicy:"unsafe-url",download:!0,onClick:()=>o||n?this.handleOnClickDownloadAndSendFilename(0,e,"mp4"):this.handleOnClickGotoPayment()},f.default.createElement(B,null,f.default.createElement("span",{className:"description"},"\u4e0b\u8f7d\u753b\u9762"),f.default.createElement(d.Icon,{icon:"cat-paw",size:16})))):null,t?f.default.createElement(f.default.Fragment,null,f.default.createElement("a",{href:o||n?t:null,target:"__blank",referrerPolicy:"unsafe-url",download:!0,onClick:()=>o||n?this.handleOnClickDownloadAndSendFilename(0,t,"mp4"):this.handleOnClickGotoPayment()},f.default.createElement(B,null,f.default.createElement("span",{className:"description"},"\u4e0b\u8f7d\u58f0\u97f3"),f.default.createElement(d.Icon,{icon:"cat-paw",size:16})))):null,i?f.default.createElement(f.default.Fragment,null,f.default.createElement("a",{href:o||n?i:null,target:"__blank",referrerPolicy:"unsafe-url",download:!0,onClick:()=>o||n?this.handleOnClickDownloadAndSendFilename(0,i,"flac"):this.handleOnClickGotoPayment()},f.default.createElement(B,{className:"vip"},f.default.createElement("i",{className:"vip-tag"}),f.default.createElement("span",{className:"description"},"\u4e0b\u8f7dHi-Res\u97f3\u6e90"),f.default.createElement(d.Icon,{icon:"cat-paw",size:16})))):null)))}render(){return f.default.createElement(f.default.Fragment,null,this.renderVideoBasicInfo(),this.renderFLV())}}t.VideoDownload=N,N.contextType=S.Store},67833:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__asyncValues||function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,i=e[Symbol.asyncIterator];return i?i.call(e):(e="function"===typeof __values?__values(e):e[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(i){t[i]=e[i]&&function(t){return new Promise((function(o,r){t=e[i](t),n(o,r,t.done,t.value)}))}}function n(e,t,i,o){Promise.resolve(o).then((function(t){e({value:t,done:i})}),t)}};Object.defineProperty(t,"__esModule",{value:!0}),t.downloadByMp4=void 0;const r=i(29507),a=i(47841),s=(e,t,i,n,r=112)=>o(void 0,void 0,void 0,(function*(){return fetch(t?`https://api.bilibili.com/pgc/player/web/v2/playurl?avid=${i}&cid=${n}&qn=${r}&fnver=0&fnval=4048&fourk=1&tabId=${e}`:`https://api.bilibili.com/x/player/playurl?avid=${i}&cid=${n}&qn=${r}&fnver=0&fnval=4048&fourk=1&tabId=${e}`,{headers:{passWrapper:"true","bilibili-helper-header-action-set-referer":"https://www.bilibili.com","bilibili-helper-header-action-set-origin":"https://www.bilibili.com"}}).then(e=>e.json()).then(e=>{var i,o,n;return t?null===(o=null===(i=null===e||void 0===e?void 0:e.result)||void 0===i?void 0:i.video_info)||void 0===o?void 0:o.dash:null===(n=null===e||void 0===e?void 0:e.data)||void 0===n?void 0:n.dash})})),l=(e,t,i)=>o(void 0,void 0,void 0,(function*(){return fetch(e,{cache:"default",mode:"cors",referrerPolicy:"no-referrer-when-downgrade",headers:{range:`bytes=${t}-${i||""}`,passWrapper:"true","bilibili-helper-header-action-set-referer":"https://www.bilibili.com/","bilibili-helper-header-action-set-origin":"https://www.bilibili.com/"}}).then(e=>{if(!e.ok)throw new Error("\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfbb\u7ad9\u300c\u52a9\u624b\u732b\u300d");return e})})),c=(e,t)=>o(void 0,void 0,void 0,(function*(){return l(e.needBackupURL?e.backupUrl:e.baseUrl+"&bstart="+t.start,t.start,t.end).catch(i=>{if(i.message.toLowerCase().includes("failed to fetch"))return e.needBackupURL=!0,l(e.backupUrl+"&bstart="+t.start,t.start,t.end);throw i}).then(e=>e.arrayBuffer())})),d=(e,t)=>o(void 0,void 0,void 0,(function*(){return c(e,t)})),u=(e,t)=>{for(let i of t)if(i<=e)return i;return 64},p=(e,t,i)=>{var o,n,r;const a=u(t,Array.from(new Set(e.map(({id:e})=>e))).sort((e,t)=>e>t?-1:0)),s=e.filter(({id:e})=>e===a),l=(null===(o=s.filter(e=>i?e.codecs.match(i):e))||void 0===o?void 0:o[0])||(null===s||void 0===s?void 0:s[0]);if(!l)return;const[c]=null===(n=l.SegmentBase)||void 0===n?void 0:n.Initialization.split("-").map(Number),[,d]=null===(r=null===l||void 0===l?void 0:l.SegmentBase)||void 0===r?void 0:r.indexRange.split("-").map(Number);return l.range={start:c,end:d},l.needBackupURL=!1,l},h=e=>o(void 0,void 0,void 0,(function*(){var t,i;const[o,n]=null===(t=null===e||void 0===e?void 0:e.SegmentBase)||void 0===t?void 0:t.Initialization.split("-").map(Number),[r,a]=null===(i=null===e||void 0===e?void 0:e.SegmentBase)||void 0===i?void 0:i.indexRange.split("-").map(Number);let s=null===e||void 0===e?void 0:e.baseUrl;return e.needBackupURL&&(s=e.backupUrl),l(s,o,a).catch(t=>{if(t.message.toLowerCase().includes("failed to fetch"))return e.needBackupURL=!0,l(e.backupUrl,o,a);throw t})})),m=e=>{const{references:t,timescale:i=16e3}=e,o=t.length,n=[];for(let e=0;e<o;++e){const{size:o,startRange:r,endRange:a,duration:s}=t[e];n.push({timescale:i,index:e,range:{start:r,end:a},duration:s,size:o,time:s/i})}return n},f=(e,t)=>{e&&chrome.tabs.sendMessage(e,{command:"setPercentage",percentage:t})},b=(e,t,i)=>{e&&chrome.tabs.sendMessage(e,{command:t,message:i})},v=0,g=(e,t)=>{var i,o,n,r;const a=[];let s=0,l=[],c=[];const d=Math.max((null===e||void 0===e?void 0:e.length)||0,(null===t||void 0===t?void 0:t.length)||0);for(let u=0;u<d;++u){const p=null===e||void 0===e?void 0:e[u],h=null===t||void 0===t?void 0:t[u];p&&(s+=p.size,l.push(p)),h&&(s+=h.size,c.push(h));const m=(null===(i=null===l||void 0===l?void 0:l[0])||void 0===i?void 0:i.index)||(null===(o=null===c||void 0===c?void 0:c[0])||void 0===o?void 0:o.index),f=Math.max((null===(n=l[l.length-1])||void 0===n?void 0:n.index)||0,(null===(r=c[c.length-1])||void 0===r?void 0:r.index)||0),b=u===((null===e||void 0===e?void 0:e.length)||0)-1,g=u===((null===t||void 0===t?void 0:t.length)||0)-1;(s>v||u===d-1)&&(a.push({byteRange:{video:(null===l||void 0===l?void 0:l[0])?{start:l[0].range.start,end:l[l.length-1].range.end+Number(b)}:null,audio:(null===c||void 0===c?void 0:c[0])?{start:c[0].range.start,end:c[c.length-1].range.end+Number(g)}:null},indexRange:{start:m+1,end:f+1}}),l=[],c=[],s=0)}return a},y=(e,t,i)=>o(void 0,void 0,void 0,(function*(){const o={video:new r.Mp4Stream,audio:new r.Mp4Stream};if(t.videoBuffer&&t.audioBuffer){o.video.push(new Uint8Array(t.videoBuffer)),o.video.parse(),o.audio.push(new Uint8Array(t.audioBuffer)),o.audio.parse();for(let t=i.start;t<=i.end;++t){const i=o.video.getMoofBySequenceNumber(t),n=i&&o.video.getMdatByMoof(i),r=o.audio.getMoofBySequenceNumber(t),a=r&&o.audio.getMdatByMoof(r);if(i&&n){const t=i.traf,o=null===r||void 0===r?void 0:r.traf;if(t&&o){t.tfhd.track_id=1,o.tfhd.track_id=2;const r=o.size,s=i.size,l=n.size;t.trun.data_offset=s+r+8,o.trun.data_offset=s+r+l,i.boxs.push(o),yield e.write(i.raw),a&&n.push(a.raw.slice(8)),yield e.write(n.raw)}}}}else{const i=t.videoBuffer?"video":"audio";o[i].push(new Uint8Array(t.videoBuffer||t.audioBuffer)),o[i].parse();const n=o[i].moof,r=o[i].mdat;n.traf&&(n.traf.tfhd.track_id="video"===i?1:2,yield e.write(n.raw),yield e.write(r.raw))}})),w=(e,t,i)=>o(void 0,void 0,void 0,(function*(){try{const{byteRange:o,indexRange:n}=i,[r,a]=(yield Promise.all([o.video&&t.video?d(t.video,o.video):void 0,o.audio&&t.audio?d(t.audio,o.audio):void 0]).catch(e=>{}))||[],s={videoBuffer:r,audioBuffer:a};yield y(e,s,n)}catch(e){}})),k=(e,t,i,l,c,d)=>o(void 0,void 0,void 0,(function*(){var o,u,v,y,k,x,S,_,O;const C=yield window.showSaveFilePicker({suggestedName:t||"output",types:[{accept:{["video/mp4"]:[".mp4"]}}]}).catch(e=>{});if(!C)return;const L=yield C.createWritable({keepExistingData:!0}),P={value:0},T=yield s(e,i,l,c,d),I=T.video?p(T.video,d,"avc"):null,D=T.audio?p(T.audio,30280):null;b(e,"initDashIndex");let[M,A]=yield Promise.all([I?h(I):null,D?h(D):null]),[E,B]=yield Promise.all([M?M.arrayBuffer():null,A?A.arrayBuffer():null]);const j=E?(0,a.parseSidx)(E):null,N=B?(0,a.parseSidx)(B):null,R=j?m(j):null,F=N?m(N):null,V=g(R,F);let q=null,U=null;if(E&&(q=new r.Mp4Stream,q.push(new Uint8Array(E)),q.parse()),B&&(U=new r.Mp4Stream,U.push(new Uint8Array(B)),U.parse()),!q&&!U)throw new Error("\u9519\u8bef\u7684\u89c6\u9891\u6570\u636e");if(q&&U){const e=null===q||void 0===q?void 0:q.moov,t=null===e||void 0===e?void 0:e.mvhd,i=null===e||void 0===e?void 0:e.mvex;t.duration=i.mehd.fragment_duration,t.next_track_ID=3;const o=null===i||void 0===i?void 0:i.trex,n=null===(x=null===(k=U.moov)||void 0===k?void 0:k.mvex)||void 0===x?void 0:x.trex,r=null===(_=null===(S=U.moov)||void 0===S?void 0:S.mvex)||void 0===_?void 0:_.trep;o&&n&&r&&(o.track_id=1,n.track_id=2,i.boxs.push(n),i.boxs.push(r));const a=null===e||void 0===e?void 0:e.trak,s=null===(O=U.moov)||void 0===O?void 0:O.trak;if(i&&a&&s){a.tkhd.track_id=1,a.tkhd.duration=i.mehd.fragment_duration,a.renewEdts(a.tkhd.duration),s.tkhd.track_id=2,e.boxs.push(s);for(const t of q.boxs)if(yield L.write(t.raw),t===e)break}}else{const e=q?"video":"audio",t="video"===e?q:U;if(!t)throw new Error("\u89c6\u9891\u5934\u90e8\u6570\u636e\u9519\u8bef");const i="video"===e?null===q||void 0===q?void 0:q.moov:null===U||void 0===U?void 0:U.moov,o=null===i||void 0===i?void 0:i.mvhd,n=null===i||void 0===i?void 0:i.mvex;if(!o||!n)throw new Error("\u6570\u636e\u9519\u8bef");n.trex.track_id="video"===e?1:2;const r=i.trak;if(n&&r){r.tkhd.track_id="video"===e?1:2,r.tkhd.duration=n.mehd.fragment_duration,r.renewEdts(r.tkhd.duration);for(const e of t.boxs)if(yield L.write(e.raw),e===i)break}}try{for(var H,W=!0,z=n(V);H=yield z.next(),o=H.done,!o;W=!0){y=H.value,W=!1;let t=y;yield w(L,{video:I,audio:D},t).catch(e=>{}),P.value+=1,f(e,P.value/(V.length+1))}}catch(e){u={error:e}}finally{try{W||o||!(v=z.return)||(yield v.call(z))}finally{if(u)throw u.error}}yield L.close(),f(e,1)}));t.downloadByMp4=k},46940:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoDownload=void 0;const r=i(38845),a=i(67833),s=n(i(52296)),l=i(32699),c=i(96582),d=i(10243);class u extends r.Feature{constructor(e){super(e,"videoDownload",{dependencies:["renameDownloadFile"],settings:{on:!0,showFLVSegment:!0}}),this.messageStore=new r.MessageStore("videoDownloadDOMInitialized"),this.fetchingSignalMap={},this.downloadVideoMap={},this.tabVideoMap={},this.playurlCache={},this.videoDataCache={},this.lastCidMap={},this.modifyReferer=e=>{const{initiator:t,requestHeaders:i}=e,o=!(0,l.isEmpty)(i.find(({name:e})=>e.match("bilibili-helper-header-action"))),n=[...i];if(o){const e=n.findIndex(({name:e})=>"bilibili-helper-header-action-set-referer"===e);e>-1&&(n.push({name:"Referer",value:n[e].value}),n.splice(e,1))}return{requestHeaders:n}},this.modifyOrigin=e=>{const{initiator:t,requestHeaders:i,url:o}=e,n=new URL(o),r=i;let a=r.findIndex(({name:e})=>"bilibili-helper-header-action-set-origin"===e);if(a>-1&&(r.push({name:"Origin",value:r[a].value}),r.splice(a,1)),a=r.findIndex(({name:e})=>"bilibili-helper-header-action-set-referer"===e),a>-1&&(r.push({name:"Referer",value:r[a].value}),r.splice(a,1)),t===n.origin){const e=r.findIndex(({name:e})=>"origin"===e.toLowerCase());e>-1&&r.splice(e,1),r.push({name:"Origin",value:"https://www.bilibili.com"});const t=r.findIndex(({name:e})=>"referer"===e.toLowerCase());t>-1&&r.splice(t,1),r.push({name:"Referer",value:"https://www.bilibili.com"})}return{requestHeaders:r}},this.modifyCROSPolicy=e=>{const{requestHeaders:t}=e,i=[...t];return i.push({name:"Cross-Origin-Embedder-Policy",value:"equire-corp"}),i.push({name:"Cross-Origin-Opener-Policy",value:"same-origin"}),{requestHeaders:i}},this.videoWatcherCallback=(0,c.webRequestCallbackWrapper)(e=>{var t,i;const{tabId:o,requestHeaders:n}=e,r=new s.default(e.url,"",!0),{pathname:a,query:l}=r;if(l.passWrapper)return;if(l&&l.requestFrom)return;r.query.tabId=o;const c=this.messageStore.createData(o);if("/x/player/v2"===a||"/player.html"===a||"//pgc/player/web/v2/playurl"===a||"/x/player/wbi/v2"===a){let{cid:e,aid:i,bvid:u,avid:p}=l;!i&&!p||u?!u||i||p||(i=(0,d.bv2av)(u)):u=(0,d.av2bv)(+(i||p)),this.lastCidMap[o]=e,c.queue.length>0&&(c.queue=[]);const h=n.find(e=>"referer"===e.name.toLowerCase()),m=null===(t=/https?:\/\/www.bilibili.com\/video\/(BV\w+)\/?\??/.exec(h.value))||void 0===t?void 0:t[1],f=m===u,b=(f||!m&&!this.tabVideoMap[o])&&("//pgc/player/web/v2/playurl"===a||!this.tabVideoMap[o]||this.tabVideoMap[o]&&this.tabVideoMap[o].cid===+e||this.tabVideoMap[o]&&this.tabVideoMap[o].bvid===u);"/x/player/wbi/v2"===a&&(r.query.passWrapper=!0,this.fetchByUrl(e,r).then(t=>{const n=!(!t||0!==t.code)&&t.data,r=n.page_no;if(b)c.queue.push({command:"initUserInfo",data:n}),this.messageStore.dealWith(o);else{const t=this.videoDataCache[+e];t?n&&(this.videoDataCache[+e]=Object.assign(Object.assign({},t),{userData:n})):this.videoDataCache[+e]={userData:n}}const a=new s.default(`https://api.bilibili.com/x/web-interface/wbi/view/detail?aid=${i}&p=${r}&tabId=${o}`);this.fetchByUrl(l.aid+"detail",a).then(t=>{const i=!(!t||0!==t.code)&&(t.data.View||t.data||t.result);if(b)c.queue.push({command:"initNewVideoPlayInfo",type:"initVideoData",data:i}),this.messageStore.dealWith(o);else{const t=this.videoDataCache[+e];t?i&&(this.videoDataCache[+e]=Object.assign(Object.assign({},t),i)):this.videoDataCache[+e]=i}})})),this.cancelFetchPlayUrl(e).then(()=>{this.fetchPlayUrl(o,e,i,u).then(t=>{var i;const n=!(!t||0!==t.code)&&(t.data||(null===(i=t.result)||void 0===i?void 0:i.video_info)||t.result);if(b)c.queue.push({command:"initDashVideoPlayInfo",type:"initVideoData",data:n}),this.messageStore.dealWith(o);else{const t=this.videoDataCache[+e];t?n&&(this.videoDataCache[+e]=Object.assign(Object.assign({},t),{dashInfo:n})):this.videoDataCache[+e]={dashInfo:n}}})})}else if("/pgc/player/web/playurl"===a){let{cid:e,aid:t,avid:a,bvid:s}=l;!t&&!a||s?!s||t||a||(t=(0,d.bv2av)(s)):s=(0,d.av2bv)(+(t||a));const u=n.find(e=>"referer"===e.name.toLowerCase()),p=null===(i=/https?:\/\/www.bilibili.com\/video\/(BV\w+)\/?\??/.exec(u.value))||void 0===i?void 0:i[1],h=p===s,m=(h||!p&&!this.tabVideoMap[o])&&(!this.tabVideoMap[o]||this.tabVideoMap[o]&&this.tabVideoMap[o].cid===+e||this.tabVideoMap[o]&&this.tabVideoMap[o].bvid===s),f={cid:+e,aid:t,bvid:s};m&&(this.tabVideoMap[o]=f),c.queue.length>0&&(c.queue=[]),m&&this.messageStore.dealWith(o),this.cancelFetchPlayUrl(e+"dash").then(()=>{this.fetchByUrl(e+"dash",r).then(t=>{const i=!(!t||0!==t.code)&&(t.data||t.result);if(m)c.queue.push({command:"initDashVideoPlayInfo",type:"initVideoData",data:i}),this.messageStore.dealWith(o);else{const t=this.videoDataCache[+e];t?i&&(this.videoDataCache[+e]=Object.assign(Object.assign({},t),{dashInfo:i})):this.videoDataCache[+e]={dashInfo:i}}})})}}),this.getPlayUrl=(e,t,i)=>o(this,void 0,void 0,(function*(){return this.fetchPlayUrl(t.tab.id,e.cid,e.aid,e.bvid,e.quality,e.epid).then(t=>{var o,n,r,a,s,l;t&&0===t.code&&(null===(o=null===t||void 0===t?void 0:t.result)||void 0===o?void 0:o.durl)&&(null===(n=null===t||void 0===t?void 0:t.result)||void 0===n?void 0:n.durl.length)>0&&+e.quality===(null===(r=null===t||void 0===t?void 0:t.result)||void 0===r?void 0:r.quality)?i(t.result.durl):t&&0===t.code&&(null===(a=null===t||void 0===t?void 0:t.data)||void 0===a?void 0:a.durl)&&(null===(s=null===t||void 0===t?void 0:t.data)||void 0===s?void 0:s.durl.length)>0&&+e.quality===(null===(l=null===t||void 0===t?void 0:t.data)||void 0===l?void 0:l.quality)?i(t.data.durl):i(!1)})})),this.fetchByUrl=(e,t)=>o(this,void 0,void 0,(function*(){return new Promise(i=>{this.fetchingSignalMap[e]=e+Date.now(),this.emit("requestController","create",{url:t.toString(),options:{contentType:"json",credential:"include",noRequestFrom:!0,headers:{From:"bilibili-helper",passWrapper:"/x/player/wbi/playurl"===t.pathname,"bilibili-helper-header-action-set-referer":"https://www.bilibili.com/","bilibili-helper-header-action-set-origin":"https://www.bilibili.com/"},controlPassword:this.fetchingSignalMap[e]}},({data:e})=>i(e))})})),this.fetchPlayUrl=(e,t,i,n,r=120,a)=>o(this,void 0,void 0,(function*(){return new Promise(o=>{let s;s=`https://api.bilibili.com/x/player/wbi/playurl?cid=${t}&bvid=${n}&avid=${i}&qn=${r}&fourk=1&fnval=4048&fnver=0&tabId=${e}`,a&&(s=`https://api.bilibili.com/pgc/player/web/v2/playurl?ep_id=${a}&qn=${r}&fourk=1&fnval=4048&fnver=0&tabId=${e}`),this.fetchingSignalMap[t]=t+Date.now(),this.emit("requestController","create",{url:s,options:{contentType:"json",credential:"include",headers:{From:"bilibili-helper",passWrapper:"true","bilibili-helper-header-action-set-referer":"https://www.bilibili.com","bilibili-helper-header-action-set-origin":"https://www.bilibili.com"},controlPassword:this.fetchingSignalMap[t]}},({data:s})=>{s.data.v_voucher?o(this.fetchPlayUrl(e,t,i,n,r,a)):o(s)})})})),this.cancelFetchPlayUrl=e=>o(this,void 0,void 0,(function*(){return this.fetchingSignalMap[e]?new Promise(t=>{this.emit("requestController","cancel",{signal:this.fetchingSignalMap[e]},e=>t(e))}):Promise.resolve(!0)})),this.fetchPlayDash=e=>o(this,void 0,void 0,(function*(){return new Promise(t=>{fetch(e,{method:"GET",headers:{"content-type":"text/html; charset=utf-8"}}).then(e=>e.text()).then(e=>{const i=/<script>window\.__playinfo__=(.+?)<\/script>/.exec(e);i&&i[1]||t(!1);try{const e=JSON.parse(i[1]);t(e.data||!1)}catch(e){t(!1)}})})})),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.emit("webRequestController","create",{name:"videoDownloadVideoWatcher",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.bilibili.com/x/player/playurl*","*://api.bilibili.com/pgc/player/web/playurl*","*://api.bilibili.com//pgc/player/web/v2/playurl*","*://api.bilibili.com/x/player/wbi/playurl*","*://api.bilibili.com/x/player/wbi/v2*","*://api.bilibili.com/x/web-interface/wbi/view/detail*","*://api.bilibili.com/x/player/v2?*"]},options:["requestHeaders"],callback:(0,c.webRequestCallbackWrapper)(this.videoWatcherCallback)}),this.emit("webRequestController","create",{name:"videoDownloadVideoFetchAgain",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.bilibili.com/pgc/player/web/playurl*","*://api.bilibili.com/x/player/playurl*"]},options:["blocking","requestHeaders","extraHeaders"],callback:(0,c.webRequestCallbackWrapper)(this.modifyReferer)}),this.emit("webRequestController","create",{name:"videoDownloadVideoModifyOrigin",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.bilibili.com/x/player/wbi/playurl*","*://api.bilibili.com/x/web-interface/wbi/view/detail*","*://*.bilivideo.com/upgcxcode/*","*://*.bilivideo.cn/upgcxcode/*","*://*.mcdn.bilivideo.cn/upgcxcode/*","*://*.akamaized.net/upgcxcode/*"]},options:["blocking","requestHeaders","extraHeaders"],callback:(0,c.webRequestCallbackWrapper)(this.modifyOrigin)}),this.addListener("getPlayUrl",this.getPlayUrl),this.addListener("fetchPlayUrl",(e,t,i)=>{this.fetchPlayUrl(t.tab.id,e.cid,e.aid,e.bvid,e.quality).then(e=>{i(!!e&&(e.data||e.result))})}),this.addListener("bindVideo2Tab",(e,t,i)=>o(this,void 0,void 0,(function*(){var o;const n=t.tab.id;(null===(o=null===t||void 0===t?void 0:t.tab)||void 0===o?void 0:o.id)&&this.tabVideoMap[n]||e.isEP||e.isP?setTimeout(()=>{this.tabVideoMap[n]=e;const o=Number(e.cid||this.lastCidMap[n]);if(o in this.videoDataCache){const e=this.messageStore.createData(t.tab.id);e.queue.push({command:"initNewVideoIds",type:"init",data:this.videoDataCache[o]}),delete this.videoDataCache[+o],this.messageStore.dealWith(t.tab.id)}o in this.playurlCache&&(i(this.playurlCache[o]),delete this.playurlCache[o])},1e3):i(!1)}))),this.addListener("getDashData",(e,t,i)=>o(this,void 0,void 0,(function*(){e.url&&this.fetchPlayDash(e.url).then(e=>{i(e)})}))),this.addListener("checkCurrentVideo",(e,t,i)=>o(this,void 0,void 0,(function*(){e.cid&&e.tabId&&i(this.tabVideoMap[+e.tabId].cid===e.cid)}))),this.addListener("newDownload",(e,t,i)=>o(this,void 0,void 0,(function*(){const{filename:o,cid:n,aid:r,quality:s,epid:l}=e;(0,a.downloadByMp4)(t.tab.id,o,Boolean(l),r,n,s).catch(e=>{chrome.tabs.sendMessage(t.tab.id,{command:"setDownloadError",error:{message:"string"===typeof e?e:(null===e||void 0===e?void 0:e.message)||"\u4e0b\u8f7d\u5931\u8d25\uff0c\u8bf7\u786e\u8ba4\u662f\u5426\u4f7f\u7528\u7684\u662f\u6700\u65b0\u7248chrome\u6216edge\u6d4f\u89c8\u5668"}})}),i(!0)})))}))}}t.VideoDownload=u},42295:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoGuide=void 0;const n=o(i(57689)),r=o(i(635)),a=(o(i(56058)),i(53507)),s=location.pathname.match("player.html$"),l=r.default.p`
  margin: 12px 30px;
  color: #fff;
  font-size: 14px;
  white-space: break-spaces;

  .bilibili-helper-2-icon-acghelper {
    padding: 0 4px;
    width: fit-content;
    color: var(--bilibili-pink);
  }
`;class c extends n.default.Component{constructor(e){super(e),this.state={show:!1},this.handleOnClose=()=>{this.setState({show:!1},()=>{chrome.runtime.sendMessage({target:"videoGuide",event:"setSetting",show:!1})})}}componentDidMount(){chrome.runtime.sendMessage({target:"videoGuide",event:"getSetting"},({show:e})=>{this.setState({show:!s&&e})})}render(){return n.default.createElement(a.BilibiliHelperButtonGuide,{show:this.state.show,onClose:this.handleOnClose,sections:[n.default.createElement(n.default.Fragment,null,n.default.createElement(a.Image,{className:"topic-image",url:chrome.runtime.getURL("/statics/images/guide-1.jpg")}),n.default.createElement(l,null,"\u611f\u8c22\u60a8\u4f7f\u7528",n.default.createElement(a.Icon,{icon:"acghelper",size:16}),"\uff08ACG\u52a9\u624b\uff0c\u7b80\u79f0\u52a9\u624b\uff09\uff0c\u8fd9\u662f\u4e00\u6b3e\u7b2c\u4e09\u65b9\u6269\u5c55\u7a0b\u5e8f\uff0c\u4e3a\u60a8\u5728\u5404\u4e2a\u65b9\u9762\u589e\u5f3a\u6d4f\u89c8B\u7ad9\u7684\u4f53\u9a8c~"),n.default.createElement(l,null,"\u8fd9\u662f\u4e00\u4e2a\u7b80\u8981\u7684\u6982\u8ff0\uff0c\u5411\u60a8\u4ecb\u7ecd\u52a9\u624b\u5728\u89c6\u9891\u64ad\u653e\u9875\u9762\u4e2d\u53ef\u4ee5\u505a\u54ea\u4e9b\u4e8b\u3002"),n.default.createElement(l,null,"\u6211\u4eec\u5c06\u529f\u80fd\u7684\u5165\u53e3\u6309\u94ae\u505a\u4e86\u6539\u8fdb\uff0c\u4ece\u4e00\u4e2a\u56fa\u5b9a\u4e0e\u7f51\u9875\u67d0\u4e2a\u4f4d\u7f6e\u7684\u6309\u94ae\u53d8\u6210\u4e86\u4e00\u4e2a\u60ac\u6d6e\u7403\u300c\u52a9\u624b\u732b\u300d\u3002\u60a8\u53ef\u4ee5\u62d6\u62fd\u52a9\u624b\u732b\u5230\u81ea\u5df1\u559c\u6b22\u7684\u4f4d\u7f6e\u3002")),n.default.createElement(n.default.Fragment,null,n.default.createElement(a.Image,{className:"topic-image",url:chrome.runtime.getURL("/statics/images/guide-2.jpg")}),n.default.createElement(l,null,"\u5c06\u9f20\u6807\u79fb\u52a8\u5230\u52a9\u624b\u732b\u4e0a\u65f6\uff0c\u52a9\u624b\u732b\u7684\u4e0b\u65b9\u4f1a\u51fa\u73b0\u300c\u5df2\u4e0a\u9501\u300d\u56fe\u6807\u6309\u94ae"),n.default.createElement(l,null,"\u70b9\u51fb\u300c\u9501\u300d\u56fe\u6807\u53ef\u4ee5\u5207\u6362\u56fa\u5b9a\u6a21\u5f0f\u3002"),n.default.createElement(l,null,"\u4e0a\u9501\u65f6\uff0c\u52a9\u624b\u732b\u4e0d\u4f1a\u968f\u7740\u7f51\u9875\u7684\u6eda\u52a8\u800c\u79fb\u52a8\u4f4d\u7f6e\u3002")),n.default.createElement(n.default.Fragment,null,n.default.createElement(a.Image,{className:"topic-image",url:chrome.runtime.getURL("/statics/images/guide-3.jpg")}),n.default.createElement(l,null,"\u6211\u4eec\u5bf9\u529f\u80fd\u754c\u9762\u8fdb\u884c\u4e86\u91cd\u65b0\u8bbe\u8ba1\u3002\u89c6\u9891\u4e0b\u8f7d\u529f\u80fd\u5c06\u4f1a\u76f4\u63a5\u663e\u793a\u5404\u4e2a\u6e05\u6670\u5ea6\u7684\u4e0b\u8f7d\u6309\u94ae\uff0c\u70b9\u51fb\u5373\u4e0b\u8f7d"),n.default.createElement(l,null,"\u9664\u6b64\u4e4b\u5916\u8fd8\u589e\u52a0\u4e86\u300c\u622a\u5c4f\u300d\uff0c\u590d\u5236\u89c6\u9891ID\u7b49\u529f\u80fd"),n.default.createElement(l,null,"\u672a\u6765\u6211\u4eec\u8fd8\u4f1a\u7ee7\u7eed\u7ef4\u62a4\u589e\u52a0\u66f4\u591a\u529f\u80fd\uff0c\u5c3d\u8bf7\u671f\u5f85~")),n.default.createElement(n.default.Fragment,null,n.default.createElement(a.Image,{className:"topic-image",url:chrome.runtime.getURL("/statics/images/guide-4.jpg")}),n.default.createElement(l,null,"\u6700\u540e\uff0c\u6211\u4eec\u8fd8\u5bf9\u5d4c\u5165\u5f0f\u89c6\u9891\u505a\u4e86\u652f\u6301\uff0c\u73b0\u5728\u52a9\u624b\u732b\u4f1a\u51fa\u73b0\u5728\u6240\u6709b\u7ad9\u89c6\u9891\u64ad\u653e\u5668\u4e0a\u5566~"),n.default.createElement(l,null,"\u9664\u4e86\u756a\u5267\u3001\u663e\u793a\u89c2\u770b\u7535\u5f71\u4e4b\u7c7b\u7684\uff0c\u90fd\u53ef\u4ee5\u4e0b\u8f7d\u54e6"))]})}}t.VideoGuide=c},46317:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoGuide=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"videoGuide",{settings:{on:!0,show:!0}}),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}}t.VideoGuide=r},56200:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoPlayPositionLink=void 0;const n=i(53507),r=i(4258),a=i(95947),s=o(i(57689)),l=o(i(635)),c=i(37459),d=i(555),u=o(i(52296)),{color:p}=c.theme,h=(0,l.default)(a.Button).attrs({className:"bilibili-helper-play-position-link-btn"})`
  width: max-content;
  height: 22px;
  line-height: 22px;
  border-radius: 4px;
  border: 1px solid ${p("bilibili-blue")};
  box-sizing: border-box;
  font-size: 12px;
  background-color: white;
  color: ${p("bilibili-blue")};

  button {
    display: inline-block;
    padding: 0 5px;
    font-weight: normal;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  &.on, &:hover {
    background-color: ${p("bilibili-blue")};
    color: white;
  }
`,m=document.createElement("div");document.body.appendChild(m);const f=["s","m","h"];class b extends s.default.Component{constructor(e){super(e),this.handleOnClick=()=>{const e=document.querySelector(".bilibili-player-video-time-now, .squirtle-video-time-now, .bpx-player-ctrl-time-current");if(e&&e.textContent){const t=e.textContent.split(":").reverse().map((e,t)=>{const i=f[t];return e+i}).reverse().join(""),i=new u.default(location.href,!0);i.query.t=t,chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_page",action:"copy_play_position_link"}),(0,d.copy2Clipboard)(i.toString()).then(e=>n.Message.info("\u590d\u5236\u7a7a\u964d\u94fe\u63a5"+(e?"\u6210\u529f":"\u5931\u8d25")))}},this.state={imgSrc:null,showModal:!1}}render(){return s.default.createElement(h,{onClick:()=>this.handleOnClick()},"\u590d\u5236\u7a7a\u964d\u94fe\u63a5")}}t.VideoPlayPositionLink=b,b.contextType=r.Store},72972:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoScreenshot=void 0;const r=i(53507),a=i(4258),s=n(i(97326)),l=i(95947),c=n(i(57689)),d=n(i(635)),u=i(37459),p=i(555),h=i(10243),{color:m}=u.theme,f=(0,d.default)(l.Button).attrs({className:"bilibili-helper-screenshot-btn"})`
  width: max-content;
  height: 22px;
  line-height: 22px;
  border-radius: 4px;
  border: 1px solid ${m("bilibili-blue")};
  box-sizing: border-box;
  font-size: 12px;
  background-color: white;
  color: ${m("bilibili-blue")};

  button {
    display: inline-block;
    padding: 0 5px;
    font-weight: normal;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  &.on, &:hover {
    background-color: ${m("bilibili-blue")};
    color: white;
  }
`,b=(0,d.default)(r.Modal)`
  max-width: 1000px;

  .preview-img {
    display: block;
    width: 100%;
    max-height: 500px;
    border-radius: 4px;
  }

  .button {
    padding: 0 10px;
  }
`,v=d.default.div`
`,g=d.default.div`
  .button:first-of-type, .button:nth-child(2) {
    margin-right: 8px;
  }
`,y=document.createElement("div");document.body.appendChild(y);class w extends c.default.Component{constructor(e){super(e),this.imgRef=c.default.createRef(),this.handleOnClick=()=>{(0,h.getVideoCurrentFrame)().then(e=>o(this,void 0,void 0,(function*(){e?this.setState({imgSrc:e,showModal:!0},()=>{}):window.postMessage({command:"showCheckHEVCModal"},"*")})))},this.handleOnCloseModal=()=>{this.setState({showModal:!1})},this.handleOnCopyImage=()=>{this.setState({copying:!0}),(0,p.copyImage2Clipboard)(this.imgRef.current.src).then(e=>{this.setState({copying:!1}),r.Message.info(e?"\u590d\u5236\u6210\u529f":"\u590d\u5236\u5931\u8d25")})},this.handleOnDownloadImage=()=>{new Promise(e=>{chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},t=>{if(!t||!t.on)return!1;chrome.runtime.sendMessage({target:"renameDownloadFile",event:"renameFileName",type:"videoScreenshot",data:Object.assign(Object.assign({},this.props.videoInfo),{format:"jpeg"})},t=>{e(t||!1)})})}).then(e=>o(this,void 0,void 0,(function*(){const t=this.state.showModal?this.state.imgSrc:yield(0,h.getVideoCurrentFrame)();this.state.showModal||this.setState({imgSrc:t});const i=(0,p.getFilename)(document)+(new Date).toLocaleString()+".jpeg";chrome.runtime.sendMessage({target:"videoScreenshot",event:"downloadScreenShot",url:t,filename:""+(e||i)}),this.setState({showModal:!1})})))},this.state={imgSrc:null,showModal:!1,copying:!1}}render(){const{copying:e}=this.state;return c.default.createElement(c.default.Fragment,null,c.default.createElement(f,{onClick:()=>this.handleOnClick()},"\u622a\u53d6\u753b\u9762"),s.default.createPortal(c.default.createElement(b,{open:this.state.showModal,className:"preview-modal",title:"\u89c6\u9891\u622a\u56fe\u9884\u89c8",onClickMask:this.handleOnCloseModal,buttons:c.default.createElement(g,null,c.default.createElement(l.Button,{className:"border",onClick:this.handleOnCloseModal},"\u5173\u95ed"),c.default.createElement(l.Button,{id:"acghelperScreenShotDownloadButton",className:"primary",onClick:this.handleOnDownloadImage},"\u4e0b\u8f7d"),c.default.createElement(l.Button,{className:"primary",disabled:e,onClick:this.handleOnCopyImage},"\u590d\u5236"))},c.default.createElement(v,null,c.default.createElement("img",{ref:this.imgRef,className:"preview-img",src:this.state.imgSrc,alt:"preview"}))),y))}}t.VideoScreenshot=w,w.contextType=a.Store},50441:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoScreenshot=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"videoScreenshot",{settings:{on:!0}})}onLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("downloadScreenShot",({url:e,filename:t},i,o)=>{e&&chrome.downloads.download({saveAs:!0,url:e,filename:t}),o(Boolean(e))})}))}}t.VideoScreenshot=r},94757:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.nextFrame=t.previousFrame=void 0;const n=i(10243),r=function(e){return o(this,void 0,void 0,(function*(){const t=yield(0,n.getCurrentQuality)(),i=yield(0,n.getVideoElement)();i?(e.preventDefault(),e.stopPropagation(),!isNaN(t)&&[116,74].includes(t)?i.currentTime-=1/60:i.currentTime-=1/30):window.postMessage({command:"showCheckHEVCModal"},"*")}))};t.previousFrame=r;const a=function(e){return o(this,void 0,void 0,(function*(){const t=yield(0,n.getCurrentQuality)(),i=yield(0,n.getVideoElement)();i?(e.preventDefault(),e.stopPropagation(),i&&!isNaN(t)&&[116,74].includes(t)?i.currentTime+=1/60:i.currentTime+=1/30):window.postMessage({command:"showCheckHEVCModal"},"*")}))};t.nextFrame=a},59649:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.minusPlaySpeed=t.addPlaySpeed=t.resetPlaySpeed=void 0;const n=i(10243);i(12740);const r=i(555),a=()=>o(void 0,void 0,void 0,(function*(){return new Promise(e=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},t=>{e(t)})})})),s=function(e){return o(this,void 0,void 0,(function*(){yield(0,r.injectScript)(`(window?.player || window?.playerRaw)?.setPlaybackRate(${e});`)}))},l=function(e){return o(this,void 0,void 0,(function*(){const t=yield(0,n.getVideoElement)();if(t){e.preventDefault(),e.stopPropagation();const t=(0,n.getSpeedBtn)(1);t?t.click():yield s(1)}}))};t.resetPlaySpeed=l;const c=4,d=function(e){return o(this,void 0,void 0,(function*(){e.preventDefault(),e.stopPropagation();const t=yield(0,n.getVideoElement)();t?(e.preventDefault(),e.stopPropagation(),a().then(({playSpeedChangeRange:e,useDefaultSpeedChangeRange:i,bhAccount:o})=>{(!o||o&&!(0,r.isVIP)(o))&&(e=.25,i=!0);const a=i?4:c;if(t.playbackRate<a){let o;i?e=.25:t.playbackRate+e>=a&&(e=a-t.playbackRate),o=1.5===t.playbackRate&&i?t.playbackRate+.5:t.playbackRate+e,o=+o.toFixed(2);const r=(0,n.getSpeedBtn)(o);r&&o?r.click():s(o),(0,n.showPlaySpeedTip)(o)}})):window.postMessage({command:"showCheckHEVCModal"},"*")}))};t.addPlaySpeed=d;const u=function(e){return o(this,void 0,void 0,(function*(){const t=yield(0,n.getVideoElement)();t?t.playbackRate>.5&&(e.preventDefault(),e.stopPropagation(),a().then(({playSpeedChangeRange:e,useDefaultSpeedChangeRange:i,bhAccount:o})=>{let a;(!o||o&&!(0,r.isVIP)(o))&&(e=.25,i=!0),i?e=.25:t.playbackRate-e<=.5&&(e=t.playbackRate-.5),a=2===t.playbackRate&&i?t.playbackRate-.5:t.playbackRate-e,a=+a.toFixed(2);const l=(0,n.getSpeedBtn)(a);l&&a?l.click():s(a),(0,n.showPlaySpeedTip)(a)})):window.postMessage({command:"showCheckHEVCModal"},"*")}))};t.minusPlaySpeed=u},13356:function(e,t){var i=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.nextFiveSeconds=t.previousFiveSeconds=void 0;const o=()=>document.querySelector("#bilibiliPlayer .bilibili-player-video video, #bilibili-player video"),n=()=>i(void 0,void 0,void 0,(function*(){return new Promise(e=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},t=>{e(t)})})})),r=function(e){return i(this,void 0,void 0,(function*(){const t=yield o();t?t.currentTime>0&&(e.preventDefault(),e.stopPropagation(),n().then(({playJumpChangeRange:e})=>{t.currentTime-=e})):window.postMessage({command:"showCheckHEVCModal"},"*")}))};t.previousFiveSeconds=r;const a=function(e){return i(this,void 0,void 0,(function*(){const t=yield o();t?(e.preventDefault(),e.stopPropagation(),n().then(({playJumpChangeRange:e})=>{t.currentTime+=e})):window.postMessage({command:"showCheckHEVCModal"},"*")}))};t.nextFiveSeconds=a},67304:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.copyScreenShot=void 0;const n=i(10243),r=i(20837),a=i(56639),s=e=>o(void 0,void 0,void 0,(function*(){var t;const i=yield(0,n.getVideoCurrentFrame)();if(i){if(!e)return(0,r.copyImage2Clipboard)(i).then(e=>{a.Message.info("\u590d\u5236\u622a\u56fe"+(e?"\u6210\u529f":"\u5931\u8d25"))});null===(t=document.getElementById("acghelperScreenShotDownloadButton"))||void 0===t||t.click()}})),l=(e,t)=>o(void 0,void 0,void 0,(function*(){if(t.on)return s(t.screenShotQuickSave)}));t.copyScreenShot=l},33212:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.danmuToggle=void 0;const i=function(e){const t=document.querySelector(".bilibili-player-video-danmaku-switch .bui-switch-input, .bpx-player-dm-switch .bui-switch-input, .bui-danmaku-switch-input");t&&(e.stopPropagation(),t.click())};t.danmuToggle=i},84442:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=i(555),n=i(10665),r=i(37814),a=i(33212),s=i(6045),l=i(55725),c=i(19109),d=i(13356),u=i(59649),p=i(94757),h=i(36578),m=i(67304),f={fillWiden:n.fillWiden,webWiden:n.webWiden,normalWiden:n.normalWiden,mute:r.mute,danmuToggle:a.danmuToggle,mirrorToggle:s.mirrorToggle,pip:l.pip,watchLater:c.watchLater,previousFiveSeconds:d.previousFiveSeconds,nextFiveSeconds:d.nextFiveSeconds,resetPlaySpeed:u.resetPlaySpeed,addPlaySpeed:u.addPlaySpeed,minusPlaySpeed:u.minusPlaySpeed,previousFrame:p.previousFrame,nextFrame:p.nextFrame,playPositionLink:h.playPositionLink,copyScreenShot:m.copyScreenShot},b=["TEXTAREA","INPUT"],v=[".video-editor",".bili-note",".note-editor"],g={},y=()=>(v.length>Object.keys(g).length&&v.forEach(e=>{if(!g[e]||0===g[e].length){const t=Array.from(document.querySelectorAll(e));t.length>0&&(g[e]=t)}}),g);(0,o.interval)("#bilibiliPlayer, .bpx-player, #bilibili-player, #edu-player .bpx-player-video-wrap",1e3).then(()=>new Promise((e,t)=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},i=>{i.on&&i.bilibiliHelperAccountLogin?chrome.runtime.sendMessage({target:"videoShortcuts",event:"getShortcuts"},t=>{e({setting:i,shortcuts:t})}):t()})})).then(({setting:e,shortcuts:t})=>{const i=new Map(t.map(([,e])=>[e[1],e[2]]));document.addEventListener("keydown",n=>{const{target:r,code:a,key:s,ctrlKey:l,shiftKey:c,altKey:d,metaKey:u}=n;if(b.includes(r.tagName)||r.shadowRoot)return;if(v.length>0){const e=y();let t=!1;if(Object.keys(e).forEach(i=>{const o=e[i];o.forEach(e=>{e.contains(r)&&(t=!0)})}),t)return}const p=(0,o.generateShortcutValue)(a,s,l,c,d,u);if(!p||!i.has(p)||!i.get(p))return;const h=t.find(([,e])=>{const[,t]=e;return""!==t&&t===p});if(!h)return;const m=f[h[0]];return m?m(n,e):void 0},!0)}).catch(e=>e)},6045:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.mirrorToggle=void 0;let i=!1;const o=function(e){var o,n;const r=document.querySelector(".bilibili-player-video-btn-setting-left-videomirror .bui-switch-input,.squirtle-setting-mirror,.bilibili-player-video-btn-setting .bui-switch-input,.bpx-player-ctrl-setting-menu-left .bpx-player-ctrl-setting-mirror .bui-switch-input");r?(e.stopPropagation(),r.click()):i||(i=!0,null===(o=document.querySelector(".bilibili-player-video-btn-setting .bp-svgicon, .bpx-player-ctrl-btn-icon"))||void 0===o||o.dispatchEvent(new Event("mouseover",{bubbles:!0,cancelable:!1})),null===(n=document.querySelector(".bilibili-player-video-btn-setting .bp-svgicon, .bpx-player-ctrl-btn-icon"))||void 0===n||n.dispatchEvent(new Event("mouseout",{bubbles:!0,cancelable:!1})),(0,t.mirrorToggle)(e))};t.mirrorToggle=o},37814:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.mute=void 0;const i=function(e){const t=document.querySelector(".bilibili-player-video-btn.bilibili-player-video-btn-volume button, .squirtle-volume .squirtle-volume-icon");t&&(e.stopPropagation(),t.click())};t.mute=i},55725:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.pip=void 0;const i=function(){const e=document.querySelector(".bilibili-player-video-btn.bilibili-player-video-btn-pip, .squirtle-video-pip,.bpx-player-control-bottom-right .bpx-player-ctrl-pip");e&&e.click()};t.pip=i},36578:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.playPositionLink=void 0;const i=()=>{const e=document.querySelector(".bilibili-helper-play-position-link-btn button");e&&(null===e||void 0===e||e.click())};t.playPositionLink=i},19109:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.watchLater=void 0;const i=function(){const e=document.querySelector("#arc_toolbar_report .more-ops-list .ops-watch-later, .more_dropdown .ops-watch-later, .video-watchlater .ops-watch-later");e&&e.click()};t.watchLater=i},10665:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.fillWiden=t.webWiden=t.normalWiden=void 0;const o=i(10243),n=function(e){(0,o.getNormalWidenButton)(!0,!0).then(t=>{t&&(e.stopPropagation(),t.click())})};t.normalWiden=n;const r=function(e){(0,o.getWebWidenButton)(!0,!0).then(t=>{t&&(e.stopPropagation(),t.click())})};t.webWiden=r;const a=function(e){(0,o.getFullFillWidenButton)(!0,!0).then(t=>{t&&(e.stopPropagation(),t.click())})};t.fillWiden=a},32781:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoShortcuts=void 0;const r=i(12404),a=i(555),s=[["normalWiden",["\u5bbd\u5c4f","t",!0]],["webWiden",["\u7f51\u9875\u5168\u5c4f","y",!0]],["fillWiden",["\u5168\u5c4f","f",!0]],["mute",["\u9759\u97f3","m",!0]],["danmuToggle",["\u5f39\u5e55\u5f00\u5173","d",!0]],["mirrorToggle",["\u955c\u50cf\u5f00\u5173","n",!0]],["pip",["\u753b\u4e2d\u753b","p",!0]],["watchLater",["\u7a0d\u540e\u518d\u770b","b",!0]],["playPositionLink",["\u590d\u5236\u7a7a\u964d\u94fe\u63a5","c",!0]],["copyScreenShot",["\u590d\u5236\u622a\u56fe\u81f3\u526a\u5207\u677f","s",!0]],["previousFiveSeconds",["\u8df3\u8f6c\u5230\u51e0\u79d2\u524d",",",!0]],["nextFiveSeconds",["\u8df3\u8f6c\u5230\u51e0\u79d2\u540e",".",!0]],["resetPlaySpeed",["\u91cd\u7f6e\u64ad\u653e\u901f\u5ea6","x",!0]],["addPlaySpeed",["\u589e\u52a0\u64ad\u653e\u901f\u5ea6","Shift + ArrowUp",!0]],["minusPlaySpeed",["\u51cf\u5c0f\u64ad\u653e\u901f\u5ea6","Shift + ArrowDown",!0]],["previousFrame",["\u9010\u5e27\u5411\u524d\u8c03\u6574","Shift + ArrowLeft",!0]],["nextFrame",["\u9010\u5e27\u5411\u540e\u8c03\u6574","Shift + ArrowRight",!0]]];class l extends r.Feature{constructor(e){super(e,"videoShortcuts",{settings:{on:!0,playSpeedChangeRange:.25,playJumpChangeRange:5,useDefaultSpeedChangeRange:!1,screenShotQuickSave:!1}}),this.states={},this.hasLogin=!1,this.bilibiliAccount=null,this.bhAccount=null,this.onBeforeLaunch=()=>o(this,void 0,void 0,(function*(){this.addListener("getShortcuts",this.getShortcuts),this.addListener("setShortcut",this.setShortcut),this.addListener("reset",this.reset),yield this.emit("bilibiliHelperAccountController","getStatus",null,({bhAccount:e,hasLogin:t,bilibiliAccount:i})=>{this.hasLogin=t,this.bhAccount=e,this.bilibiliAccount=i,this.settings.bhAccount=this.bhAccount,this.settings.bilibiliAccount=this.bilibiliAccount,this.settings.bilibiliHelperAccountLogin=this.hasLogin})})),this.initShortcuts=()=>{let e=this.getStore("shortcuts");e?(this.store=new Map(s),e=e.filter(([e])=>{const t=s.find(([t])=>t===e);return!!t}),e.forEach(([e,t])=>{"webWiden"===e&&"w"===t[1]&&(t=["\u7f51\u9875\u5168\u5c4f","y"]),void 0===t[2]&&(t[2]=!0),this.store.set(e,t)}),this.setStore("shortcuts",Array.from(this.store))):(this.store=new Map(s),this.setStore("shortcuts",Array.from(this.store)))},this.getShortcuts=(e,t,i)=>{i(Array.from(this.store))},this.setShortcut=(e,t,i)=>{const{key:o,value:n,on:r}=e;if(this.store.has(o)){const e=this.store.get(o);e[1]=void 0!==n?n:e[1],e[2]=void 0!==r?r:e[2],this.setStore("shortcuts",Array.from(this.store))}i(!0)},this.reset=(e,t,i)=>{this.store=new Map(s.map(([e,[t,i]])=>{const[,,o]=this.store.get(e);return[e,[t,i,o]]})),this.setStore("shortcuts",Array.from(this.store)),i&&i()},this.onAfterSetSettingsFromCloud=()=>{this.initShortcuts(),this.settings.bilibiliAccount=this.bilibiliAccount,this.settings.bilibiliHelperAccountLogin=this.hasLogin},this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){const e=this.settings,{states:t,bhAccount:o,bilibiliAccount:r,bilibiliHelperAccountLogin:a}=e,s=n(e,["states","bhAccount","bilibiliAccount","bilibiliHelperAccountLogin"]);i({settings:this.simplifyConfig(s),stores:{shortcuts:this.getStore("shortcuts")}})}))}onInitStore(){return o(this,void 0,void 0,(function*(){this.initShortcuts()}))}onLaunch(){return o(this,void 0,void 0,(function*(){}))}onBHAccountChange(e){const t=Object.create(null,{onBHAccountChange:{get:()=>super.onBHAccountChange}});return o(this,void 0,void 0,(function*(){yield t.onBHAccountChange.call(this,e),this.settings.bilibiliAccount=this.bilibiliAccount,this.settings.bilibiliHelperAccountLogin=this.hasLogin,this.bhAccount&&(0,a.isVIP)(this.bhAccount)||this.reset()}))}}t.VideoShortcuts=l},63800:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.WatchLater=void 0;const n=i(12404),r=i(32699),a=i(555);class s extends n.Feature{constructor(e){super(e,"watchLater",{settings:{on:!0}}),this.currentList=new Map,this.hasLogin=!1,this.bilibiliAccount=null,this.refreshCSRF=()=>o(this,void 0,void 0,(function*(){return this.emit("cookieController","get",{url:"https://www.bilibili.com",name:"bili_jct"},e=>e)})),this.onBeforeSendHeadersCallback=e=>{const{initiator:t,requestHeaders:i,tabId:o}=e,n=!(0,r.isEmpty)((0,r.find)(i,({name:e,value:t})=>"from"===e.toLowerCase()&&t.toLowerCase().includes("bilibili_helper_2"))),a=!(0,r.isEmpty)((0,r.find)(i,({name:e})=>e.match("bilibili-helper-header-action")));if((/^chrome-extension:\/\//.test(t)||-1===o)&&n&&"https://www.bilibili.com"!==t&&a){const e=[...i],t=e.findIndex(({name:e})=>"bilibili-helper-header-action-set-origin"===e.toLowerCase());if(t>-1){const i=e.find(({name:e})=>"origin"===e.toLowerCase());i?i.value="https://www.bilibili.com":e.push({name:"Origin",value:e[t].value}),e.splice(t,1)}return{requestHeaders:e}}return{requestHeaders:i}},this.bilibiliWatchLaterWatcher=(0,a.webRequestCallbackWrapper)(e=>{this.updateWatchLaterList()}),this.getList=(e,t,i)=>{this.emit("requestController","create",{url:"https://api.bilibili.com/x/v2/history/toview/web",options:{contentType:"json",controlPassword:"updateWatchLater"}},({data:e={}})=>{0===e.code&&(e.data.list&&e.data.list.length>0?(e.data.list.map(e=>{this.currentList.set(e.aid,e)}),e.data.list=e.data.list.map(e=>({videoInfo:{aid:e.aid,bvid:e.bvid,cid:e.cid,cover:e.pic.replace("http://","https://"),duration:(0,a.parseTime)(1e3*e.duration),description:e.desc,tagName:e.tname,url:e.uri,shortLink:e.short_link_v2,title:e.title,publishDate:e.pubdate?(0,a.videoPublishDescription)(1e3*e.pubdate):""},userInfo:{name:e.owner.name,uid:e.owner.mid,face:e.owner.face}})),i(e.data.list)):(this.currentList.clear(),i(!1)))})},this.queryVideoInWatchLaterList=(e,t,i)=>{e.aid?i(this.currentList.has(e.aid)):i(!1)},this.setWatchLater=(e,t,i)=>o(this,void 0,void 0,(function*(){const{aid:t}=e;this.currentList.has(t)&&i(!0);const n=yield this.refreshCSRF(),r=new FormData;r.append("csrf",n),r.append("aid",t);const a=new Headers;a.append("bilibili-helper-header-action-set-origin","https://www.bilibili.com"),this.emit("requestController","create",{url:"https://api.bilibili.com/x/v2/history/toview/add",options:{method:"post",credential:"include",headers:a,body:r,contentType:"json"}},({data:e})=>o(this,void 0,void 0,(function*(){e&&0===e.code?(this.updateWatchLaterList(),i(!0)):e&&90005===e.code?i("notSupport"):i(!1)})))})),this.removeWatchLater=(e,t,i)=>o(this,void 0,void 0,(function*(){const{aid:t}=e;this.currentList.has(t)&&i(!0);const n=yield this.refreshCSRF(),r=new FormData;r.append("csrf",n),r.append("aid",t);const a=new Headers;a.append("bilibili-helper-header-action-set-origin","https://www.bilibili.com"),this.emit("requestController","create",{url:"https://api.bilibili.com/x/v2/history/toview/del",options:{method:"post",credential:"include",headers:a,body:r,contentType:"json"}},({data:e})=>o(this,void 0,void 0,(function*(){e&&0===e.code?(this.updateWatchLaterList(),i(!0)):i(!1)})))})),this.updateWatchLaterList=(0,r.debounce)(()=>{this.emit("requestController","cancel",{controlPassword:"updateWatchLater"}),this.emit("requestController","create",{url:"https://api.bilibili.com/x/v2/history/toview/web",options:{contentType:"json",controlPassword:"updateWatchLater"}},({data:e={}})=>{0===e.code&&(e.data.list&&e.data.list.length>0?e.data.list.map(e=>{this.currentList.set(e.aid,e)}):this.currentList.clear())})},1e3)}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("update",this.updateWatchLaterList),this.addListener("set",this.setWatchLater),this.addListener("remove",this.removeWatchLater),this.addListener("query",this.queryVideoInWatchLaterList),this.addListener("getList",this.getList)}))}onLaunch(){return o(this,void 0,void 0,(function*(){let e=navigator.userAgent;const t=["blocking","requestHeaders"];-1!==e.indexOf("Chrome/")&&(0,a.getChromeVersion)()>72&&t.push("extraHeaders"),this.updateWatchLaterList(),this.emit("webRequestController","create",{name:"watchLater",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.bilibili.com/x/v2/history/toview/add?*","*://api.bilibili.com/x/v2/history/toview/del?*"]},options:["blocking","requestHeaders","extraHeaders"],callback:this.onBeforeSendHeadersCallback}),this.emit("webRequestController","create",{name:"watchLaterFromBilibili",eventName:"onBeforeSendHeaders",filter:{urls:["*://api.bilibili.com/x/v2/history/toview*"]},options:["requestHeaders"],callback:this.bilibiliWatchLaterWatcher})}))}onBHAccountChange(e){const t=Object.create(null,{onBHAccountChange:{get:()=>super.onBHAccountChange}});return o(this,void 0,void 0,(function*(){yield t.onBHAccountChange.call(this,e),this.hasLogin&&this.bilibiliAccount&&this.bilibiliAccount.hasLogin||this.pause()}))}}t.WatchLater=s},41968:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.AD=void 0;const n=i(12404),r=i(555);class a extends n.Feature{constructor(e){super(e,"ad",{settings:{on:!0}}),this.adMap=[],this.clearIntervalDuration=18e5,this.clearIntervalTimer=null,this.systemType=r.isMacOS?"mac":"win",this.onNetworkOnline=e=>o(this,void 0,void 0,(function*(){e&&(this.adMap=yield this.getADs(["test"]))})),this.clearCache=()=>{clearTimeout(this.clearIntervalTimer),this.clearIntervalTimer=setTimeout(()=>{this.adMap=[]},this.clearIntervalDuration)},this.getADs=(e=["test"])=>o(this,void 0,void 0,(function*(){const t={query:"query get($tags: [String!]!) {\n                        ad {\n                            get(tags: $tags) {\n                                id\n                                title\n                                content\n                                cover\n                                link\n                                to\n                                tags\n                                position\n                                available\n                                system\n                            }\n                        }\n                    }\n                    ",variables:{tags:e}};return yield this.emit("requestController","createGraphQL",{options:t},e=>o(this,void 0,void 0,(function*(){const{errors:t,data:i}=e;return!(t||!e)&&(e&&i?i.ad.get:void 0)})))}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("networkOnline",this.onNetworkOnline),this.addListener("initData",(e,t,i)=>{this.adMap=e,i()}),this.addListener("getAds",(e,t,i)=>{this.clearCache(),new Promise(t=>{this.adMap&&0===this.adMap.length?this.getADs(e.tags).then(e=>{e&&(this.adMap=e),t(this.adMap)}):t(this.adMap)}).then(t=>{let o=[];t&&e.position&&(o=t.filter(t=>t.position===e.position)),o=o.filter(e=>e.system===this.systemType||"all"===e.system),i(o)})})}))}onLaunch(){return o(this,void 0,void 0,(function*(){}))}}t.AD=a},63012:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;const r=i(12404),a=i(555),s=i(5546),l="G-6WBMC43SLR",c="NOO6XbrASWuPY7qbaqu8XQ";class d extends r.Feature{constructor(e){super(e,"googleAnalytics",{settings:{on:!0},cache:{type:"local",dataType:"number"}}),this.__send=e=>o(this,void 0,void 0,(function*(){var{hitType:t="event",eventAction:i,eventCategory:o,eventLabel:r,nonInteraction:s}=e,d=n(e,["hitType","eventAction","eventCategory","eventLabel","nonInteraction"]);const u=yield this.getClientId();this.clientId=u;const p=this.store.uid||this.store.randomUserId,h="https://www.google-analytics.com",m="/mp/collect",f=(0,a.generateURL)(h+m,{measurement_id:l,api_secret:c});fetch(f,{method:"POST",mode:"no-cors",body:JSON.stringify({client_id:u,user_id:p,events:[{name:i,params:Object.assign({eventCategory:o,eventLabel:r,nonInteraction:s},d)}]}),headers:{"Content-Type":"application/json"}})})),this.__sendPageView=e=>{this.__send({eventAction:"page_view",pathname:e})},this.sendGA=(e,t,i)=>{if(this.settings.on&&e.action&&e.category){const{hitType:t,action:o,label:n,category:r="",nonInteraction:a=!1}=e;this.__send({hitType:t,eventAction:o,eventCategory:r,eventLabel:n,nonInteraction:a}),i(!0)}else i(!1)},this.sendPage=(e,t,i)=>{if(this.settings.on&&e.pathname){const{pathname:t}=e;this.__sendPageView(t),i(!0)}else i(!1)},this.insertGAScriptTag=(e="UA-39765420-8")=>{0===document.getElementsByClassName("ga-script").length&&(window["GoogleAnalyticsObject"]="ga",window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=1*new Date,window.ga("create",e,"auto"),window.ga("set","dimension1",a.version),window.ga("set","checkProtocolTask"),window.ga("set","userId",this.store.uid||this.store.randomUserId))},this.localBilibiliAccountLoginStateChange=({login:e},t,i)=>{void 0!==e?(e?this.emit("bilibiliAccountController","getLocalAccount",null,e=>{e?(this.store.uid=e.uid,window.ga("set","userId",this.store.uid)):(this.store.uid="",this.store.randomUserId||(this.store.randomUserId=String(Math.random()).slice(2),window.ga("set","userId",this.store.randomUserId))),this.setStore("default",this.store)}):(this.store.uid="",this.store.randomUserId||(this.store.randomUserId=String(Math.random()).slice(2),window.ga("set","userId",this.store.randomUserId),this.setStore("default",this.store))),i(!0)):i(!1)},this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings),stores:{default:this.getStore("default")}})}))}get todayPassed(){return this.cache.get()===(new Date).getDate()}onInitStore(){return o(this,void 0,void 0,(function*(){this.store=this.getStore("default"),this.store={},yield this.emit("bilibiliHelperAccountController","getStatus",null,(e={})=>{const{bilibiliAccount:t}=e||{};t&&t.uid?this.store.uid=t.uid:this.store.randomUserId=String(Math.random()).slice(2),this.setStore("default",this.store)})}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("localBilibiliAccountLoginStateChange",this.localBilibiliAccountLoginStateChange),this.addListener("send",this.sendGA),this.addListener("sendPage",this.sendPage);const e=this.getSetting("debug")||{};this.todayPassed||(yield this.__send({hitType:"event",eventCategory:"initialization",eventAction:"init",eventLabel:`${e.on?"official":"dev"}_${a.version}`}),this.cache.set((new Date).getDate()))}))}createClientId(){return o(this,void 0,void 0,(function*(){const e=(0,s.v4)().split("-").join("").slice(0,20),t=Math.floor(e.length/2),i=e.slice(0,t)+"."+e.slice(t);return yield this.emit("cookieController","createCookie",{name:"clientId",url:"https://bilibilihelper.com",domain:"bilibilihelper.com",httpOnly:!0,value:i}),i}))}getClientId(){return o(this,void 0,void 0,(function*(){return this.clientId?Promise.resolve(this.clientId):new Promise(e=>{this.emit("cookieController","get",{name:"clientId",url:"https://bilibilihelper.com"},t=>{e(t)})}).then(e=>e||this.createClientId())}))}}t.GoogleAnalytics=d},8795:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(18814),t),n(i(61516),t),n(i(79804),t),n(i(63012),t),n(i(67e3),t),n(i(78947),t),n(i(41968),t)},78947:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Language=void 0;const n=i(12404);class r extends n.Feature{constructor(e){super(e,"language",{settings:{on:!0,lang:"zh_CN"}}),this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("getI18nMap",(e,t,i)=>{i(window.i18nMap)})}))}}t.Language=r},61516:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Message=void 0;const n=i(12404),r=i(32699);class a extends n.Feature{constructor(e){super(e,"message",{settings:{on:!0,announcementNotification:!0},cache:{type:"local",dataType:"object",delayDuration:0}}),this.onNetworkOnline=e=>o(this,void 0,void 0,(function*(){e&&this.checkNewAnnouncement().then(this.sendNotification)})),this.createAnnouncementCheckClock=()=>{this.emit("clockController","create",{name:"message",alarmInfo:{periodInMinutes:180},focus:!0,callback:()=>{this.checkNewAnnouncement().then(this.sendNotification)}})},this.checkNewAnnouncement=e=>o(this,void 0,void 0,(function*(){const t={query:"query ($type: String!, $id: Int){\n                      message {\n                        getLatest(type: $type, id: $id) {\n                          latestUpdateDateTime\n                        }\n                      }\n                    }",variables:{type:"announcement",id:e}};return yield this.emit("requestController","createGraphQL",{options:t},t=>{const{errors:i,data:o}=t;return!i&&(t&&o?this.dealWithMessageData(e,o.message.getLatest||{}):void 0)})})),this.dealWithMessageData=(e,t)=>{const{latestUpdateDateTime:i}=t,o=this.cache.get();if(!o||(0,r.isEmpty)(o)||!o.announcement||o.announcement.latestUpdateDateTime<i)return this.getLatestAnnouncement(e,!1)},this.getLatestAnnouncement=(e,t=!0)=>o(this,void 0,void 0,(function*(){return this.getLatestMessage("announcement",e,t)})),this.getLatestMessage=(e,t,i=!0)=>o(this,void 0,void 0,(function*(){if(i){const e=this.cache.get(i);if(!(0,r.isEmpty)(e))return e}const o={query:"query ($type: String!, $id: Int) {\n                        message {\n                            getLatest(type: $type, id: $id) {\n                                id\n                                title\n                                type\n                                content\n                                latestUpdateDateTime\n                            }\n                        }\n                    }",variables:{type:e,id:t}};return this.emit("requestController","createGraphQL",{options:o},t=>{const{errors:i,data:o}=t;if(i)return!1;{const t=this.cache.get();if(void 0===t[e])t[e]={list:[o.message.getLatest],latestUpdateDateTime:o.message.getLatest.latestUpdateDateTime,hasNew:!0};else{if(!(t[e].latestUpdateDateTime<o.message.getLatest.latestUpdateDateTime))return!1;t[e].latestUpdateDateTime=o.message.getLatest.latestUpdateDateTime,t[e].list.unshift(o.message.getLatest),t[e].hasNew=!0}return this.cache.set(t),t}})})),this.sendNotification=e=>{const{announcementNotification:t}=this.settings;if(!t)return;if(!e||!e.announcement||!e.announcement.hasNew)return;const i=e.announcement.list[0];this.emit("notificationController","post",{title:"\u6536\u5230\u65b0\u516c\u544a\uff0c\u70b9\u51fb\u67e5\u9605",icon:chrome.runtime.getURL("statics/images/bilibili-cat-256.png"),body:i.title,autoCloseInterval:1e4,data:{url:("production".match("dev")?"http://acghelper.com:8000":"https://acghelper.com")+"/announcement?id="+i.id},actions:[{action:"watch",title:"\u7acb\u5373\u67e5\u770b"}]})},this.getSettingsForUpload=(e,t,i)=>o(this,void 0,void 0,(function*(){i({settings:this.simplifyConfig(this.settings)})}))}onInitStore(){return o(this,void 0,void 0,(function*(){const e=this.cache.get();if(e&&e.latestUpdateDateTime){const t={},i=Object.assign({},e);t.announcement={latestUpdateDateTime:e.latestUpdateDateTime,list:[i],hasNew:!1},this.cache.set(t)}}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("networkOnlineChange",this.onNetworkOnline),this.addListener("getLatestAnnouncement",(e,t,i)=>{this.getLatestAnnouncement(null,!0).then(e=>i(e))}),this.addListener("setAnnouncementRead",(e,t,i)=>{const o=this.cache.get();o.announcement.hasNew=!1,this.cache.set(o),i(!0)}),this.addListener("initData",(e,t,i)=>{e&&this.dealWithMessageData(null,e),i()})}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.createAnnouncementCheckClock()}))}}t.Message=a},74074:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.connect=void 0;const o=i(555),n=(e,{model:t,sign:i})=>{e.postMessage({command:"returnApp",data:{code:0,data:{connected:!0,version:o.version}},from:"helperProxy",model:t,sign:i})};t.connect=n},61296:function(e,t){var i=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.cookie=void 0;const o=(e,t)=>i(void 0,void 0,void 0,(function*(){const{detail:i,model:o,sign:n}=t;if(!o)throw"fetch from Model "+o;chrome.cookies.get(i,t=>{e.postMessage({command:"returnCookie",data:null===t||void 0===t?void 0:t.value,from:"helperProxy",model:o,sign:n})})}));t.cookie=o},67e3:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ProxyForWebsite=void 0;const a=i(32699),s=i(12404),l=r(i(52296)),c=i(74074),d=i(61296),u=e=>{const t=[].slice.call(new Uint8Array(e));let i="";return t.forEach(e=>i+=String.fromCharCode(e)),window.btoa(i)},p={};class h extends s.Feature{constructor(e){super(e,"proxyForWebsite",{dependencies:["requestController","webRequestController"],settings:{on:!0}}),this.callback=e=>{const{initiator:t,requestHeaders:i}=e,o=!(0,a.isEmpty)((0,a.find)(i,({name:e,value:t})=>"From"===e&&"bilibili-helper"===t));if(/^chrome-extension:\/\//.test(t)||o){const e=i.find(e=>"origin"===e.name.toLowerCase());return e?e.value="https://h.bilibili.com":i.push({name:"Origin",value:"https://h.bilibili.com"}),{requestHeaders:i}}},this.fetchJSON=(e,{url:t,options:i,sign:n,model:r})=>o(this,void 0,void 0,(function*(){if(!r)throw"fetch from Model "+r;const o=new l.default(t,!0);return this.emit("requestController","create",{url:t,options:Object.assign(Object.assign({},i),{contentType:"json"})},({data:t})=>{e.postMessage({command:"returnFetch",data:Object.assign(Object.assign({},t),{receipt:o.query}),from:"helperProxy",model:r,sign:n})})})),this.fetchImage=(e,{url:t,options:i,sign:n,model:r,mine:a})=>o(this,void 0,void 0,(function*(){let o="";o=p[n]?p[n]:yield this.emit("requestController","create",{url:t,options:i},({data:e})=>e.arrayBuffer().then(e=>p[n]=`data:${a};base64,`+u(e))),e.postMessage({command:"returnFetch",data:o,from:"helperProxy",model:r,sign:n})})),this.fetchPOST=(e,{url:t,options:i,sign:r,model:a})=>o(this,void 0,void 0,(function*(){if(!a)throw"fetch from Model "+a;const{body:o}=i,s=n(i,["body"]),l=new FormData;for(let e in o)l.append(e,o[e]);return i.body=l,s.body=l,this.emit("requestController","create",{url:t,options:Object.assign(Object.assign({},s),{contentType:"json"})},({data:t})=>{e.postMessage({command:"returnFetch",data:Object.assign(Object.assign({},t),{receipt:o}),from:"helperProxy",model:a,sign:r})})}))}onLaunch(){return o(this,void 0,void 0,(function*(){this.emit("webRequestController","create",{name:"proxyForWebsite",eventName:"onBeforeSendHeaders",filter:{urls:["https://api.bilibili.com/x/v2/reply/action?*","https://api.bilibili.com/x/v2/reply/add?*"]},options:["blocking","requestHeaders","extraHeaders"],callback:this.callback}),chrome.runtime.onConnect.addListener(e=>{e.onMessage.addListener((t,i)=>{const{command:o,data:r}=t;switch(o){case"connect":(0,c.connect)(i,r);break;case"fetch":{const{type:e}=r,t=n(r,["type"]);"json"===e?this.fetchJSON(i,t):"image"===e?this.fetchImage(i,t):"post"===e&&this.fetchPOST(i,t);break}case"cookie":(0,d.cookie)(i,r);break;case"actionInParent":chrome.tabs.sendMessage(e.sender.tab.id,r);break;case"actionInOrigin":chrome.tabs.sendMessage(e.sender.tab.id,r,{frameId:e.sender.frameId})}})})}))}}t.ProxyForWebsite=h},18814:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.States=void 0;const n=i(12404),r=i(555),a=i(32699);class s extends n.Feature{constructor(e){super(e,"states",{settings:{on:!0},cache:{type:"local",dataType:"object",delayDuration:0,limit:{duration:36e5}}}),this.states=null,this.shouldUpdate=!1,this.needUpdate=!1,this.onNetworkOnline=e=>o(this,void 0,void 0,(function*(){e&&(yield this.getVersionInfo(!0),yield this.getStates(!1))})),this.getStates=(e=!0)=>o(this,void 0,void 0,(function*(){let t=this.cache.checkExpired().expired;const i=this.cache.get(e);if(!t&&i&&!(0,a.isEmpty)(i)&&e)return i;const n={query:"query get($names: [String!]!) {\n                        app {\n                            get(names: $names) {\n                                latestVersion\n                                publishState\n                                minVersion\n                                paymentLink\n                                paymentIframe\n                            }\n                        }\n                    }\n                    ",variables:{names:["latestVersion","publishState","minVersion","paymentLink","paymentIframe"]}};return yield this.emit("requestController","createGraphQL",{options:n},e=>o(this,void 0,void 0,(function*(){const{errors:t,data:i}=e;return!(t||!e)&&(e&&i?this.dealWithStateData(i.app.get):void 0)})))})),this.dealWithStateData=e=>(this.states=Object.keys(e).reduce((t,i)=>(e[i].length&&["{","["].includes(e[i][0])&&["}","]"].includes(e[i][e[i].length-1])?t[i]=JSON.parse(e[i]):t[i]=e[i],t),{}),this.shouldUpdate=(0,r.isBiggerThan)(this.states.minVersion,r.version)>0,this.needUpdate=(0,r.isBiggerThan)(this.states.latestVersion,r.version)>0,this.cache.set(this.states),this.states),this.getVersionInfo=(e=!1)=>o(this,void 0,void 0,(function*(){const t=this.getStore("currentVersionInfo");if(!t||e){const e={query:"query get($version: String!) {\n                        version {\n                            get(version: $version) {\n                                version\n                                available\n                                publishType\n                            }\n                        }\n                    }\n                    ",variables:{version:r.version}};yield this.emit("requestController","createGraphQL",{options:e},e=>{const{errors:t,data:i}=e;if(!t&&!i)return!1;if(t)return!1;{const e=i.version.get;return e&&this.setStore("currentVersionInfo",e),e}})}}))}onBeforeLaunch(){return o(this,void 0,void 0,(function*(){this.addListener("networkOnlineChange",this.onNetworkOnline),this.addListener("getStates",(e,t,i)=>{this.getStates().then(e=>i(Object.assign(Object.assign({},e),{shouldUpdate:this.shouldUpdate,needUpdate:this.needUpdate})))}),this.addListener("getVersionInfo",(e,t,i)=>{const o=this.getStore("currentVersionInfo");void 0!==o?i(o):this.getVersionInfo().then(e=>i(e))}),this.addListener("initData",(e,t,i)=>{const{state:o,version:n}=e;o&&this.dealWithStateData(o),n&&this.setStore("currentVersionInfo",n),i()})}))}onLaunch(){return o(this,void 0,void 0,(function*(){}))}}t.States=s},79804:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{l(o.next(e))}catch(e){r(e)}}function s(e){try{l(o["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):n(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.SystemDataInit=void 0;const n=i(12404),r=i(555);class a extends n.Feature{constructor(e){super(e,"systemDataInit",{dependencies:["states","message"],settings:{on:!0}}),this.getInitData=()=>o(this,void 0,void 0,(function*(){const e={query:"query ($app: [String!]!, $version: String!, $messageType: String!, $adTags: [String!]!) {\n                        app {\n                            get(names: $app) {\n                                latestVersion\n                                publishState\n                                minVersion\n                                paymentLink\n                                paymentIframe\n                            }\n                        }\n                        version {\n                            get(version: $version) {\n                                version\n                                available\n                                publishType\n                            }\n                        }\n                        message {\n                            getLatest(type: $messageType) {\n                                latestUpdateDateTime\n                            }\n                        }\n                        ad {\n                            get(tags: $adTags) {\n                                id\n                                title\n                                content\n                                cover\n                                link\n                                to\n                                tags\n                                position\n                                available\n                                system\n                            }\n                        }\n                    }\n                    ",variables:{app:["latestVersion","publishState","minVersion","paymentLink","paymentIframe"],version:r.version,messageType:"announcement",adTags:["test"]}};return yield this.emit("requestController","createGraphQL",{options:e},e=>o(this,void 0,void 0,(function*(){const{errors:t,data:i}=e;if(t||!e)return!1;if(e&&i){const{app:e,version:t,message:o,ad:n}=i;this.emit("states","initData",{state:e.get||{},version:t.get||{}}),this.emit("message","initData",o.getLatest||{}),this.emit("ad","initData",n.get||[])}})))}))}onLaunch(){return o(this,void 0,void 0,(function*(){yield this.getInitData()}))}}t.SystemDataInit=a}}]);