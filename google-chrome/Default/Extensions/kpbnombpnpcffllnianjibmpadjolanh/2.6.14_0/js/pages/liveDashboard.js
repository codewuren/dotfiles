(()=>{"use strict";var e={33721:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0})},99769:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0})},88170:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0})},76774:function(e,a,r){var p=this&&this.__createBinding||(Object.create?function(e,a,r,p){void 0===p&&(p=r);var t=Object.getOwnPropertyDescriptor(a,r);t&&!("get"in t?!a.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return a[r]}}),Object.defineProperty(e,p,t)}:function(e,a,r,p){void 0===p&&(p=r),e[p]=a[r]}),t=this&&this.__exportStar||function(e,a){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(a,r)||p(a,e,r)};Object.defineProperty(a,"__esModule",{value:!0}),t(r(88170),a),t(r(33721),a),t(r(99769),a)},97907:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.MAX_BIND_NUMBER=void 0,a.MAX_BIND_NUMBER=5},40677:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.CUSTOM_WHISPER_MESSAGE=void 0,a.CUSTOM_WHISPER_MESSAGE={FREE_NUMBER:3,MAX_NUMBER:15,FREE_MAX_LENGTH:30,VIP_MAX_LENGTH:500}},90741:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.DYNAMIC_TYPE_MAP=a.DYNAMIC_NOTIFICATION_TYPE_MAP=a.DYNAMIC_NAME_MAP=a.ALL_DYNAMIC_TYPE_MAP=void 0,a.ALL_DYNAMIC_TYPE_MAP={ALL:268435455,REPOST:1,PIC:2,WORD:4,VIDEO:8,DRAMA:32,ARTICLE:64,MUSIC:256,BANGUMI:512,NONE:1024,H5_SHARE:2048,COMIC_SHARE:2049,PGC_BANGUMI:4097,FILM:4098,TV:4099,GUOCHUANG:4100,DOCUMENTARY:4101,LIVE_ROOM:4200,LIVE:4201,MEDIA_LIST:4300,CHEESE_SERIES:4302,CHEESE_UPDATE:4303,HOT:1e3,LIVE_PUSH:4308,COLLECTION:4310,SUBSCRIPTION:4311,QUICK:1001},a.DYNAMIC_NAME_MAP={[a.ALL_DYNAMIC_TYPE_MAP.REPOST]:"\u8f6c\u53d1",[a.ALL_DYNAMIC_TYPE_MAP.PIC]:"\u56fe\u7247",[a.ALL_DYNAMIC_TYPE_MAP.WORD]:"\u6587\u5b57",[a.ALL_DYNAMIC_TYPE_MAP.VIDEO]:"\u89c6\u9891",[a.ALL_DYNAMIC_TYPE_MAP.DRAMA]:"\u620f\u5267",[a.ALL_DYNAMIC_TYPE_MAP.ARTICLE]:"\u6587\u7ae0",[a.ALL_DYNAMIC_TYPE_MAP.MUSIC]:"\u97f3\u4e50",[a.ALL_DYNAMIC_TYPE_MAP.BANGUMI]:"\u756a\u5267",[a.ALL_DYNAMIC_TYPE_MAP.H5_SHARE]:"\u8bdd\u9898",[a.ALL_DYNAMIC_TYPE_MAP.COMIC_SHARE]:"\u6f2b\u753b",[a.ALL_DYNAMIC_TYPE_MAP.PGC_BANGUMI]:"\u756a\u5267",[a.ALL_DYNAMIC_TYPE_MAP.FILM]:"\u7535\u5f71",[a.ALL_DYNAMIC_TYPE_MAP.TV]:"\u7535\u89c6/\u7efc\u827a",[a.ALL_DYNAMIC_TYPE_MAP.GUOCHUANG]:"\u56fd\u521b",[a.ALL_DYNAMIC_TYPE_MAP.DOCUMENTARY]:"\u7eaa\u5f55\u7247",[a.ALL_DYNAMIC_TYPE_MAP.LIVE_ROOM]:"\u76f4\u64ad\u95f4",[a.ALL_DYNAMIC_TYPE_MAP.LIVE]:"\u76f4\u64ad",[a.ALL_DYNAMIC_TYPE_MAP.MEDIA_LIST]:"\u6536\u85cf\u5939",[a.ALL_DYNAMIC_TYPE_MAP.CHEESE_SERIES]:"\u8bfe\u7a0b",[a.ALL_DYNAMIC_TYPE_MAP.CHEESE_UPDATE]:"\u8bfe\u7a0b\u66f4\u65b0",[a.ALL_DYNAMIC_TYPE_MAP.HOT]:"\u70ed\u95e8",[a.ALL_DYNAMIC_TYPE_MAP.LIVE_PUSH]:"\u76f4\u64ad\uff08\u63a8\u9001\uff09",[a.ALL_DYNAMIC_TYPE_MAP.COLLECTION]:"\u5408\u96c6",[a.ALL_DYNAMIC_TYPE_MAP.SUBSCRIPTION]:"\u76f4\u64ad\uff08\u8ba2\u9605\uff09"},a.DYNAMIC_NOTIFICATION_TYPE_MAP=[{title:"\u5168\u90e8\uff08\u5305\u542b\u8f6c\u53d1\uff09",types:[a.ALL_DYNAMIC_TYPE_MAP.ALL]},{title:"\u56fe\u6587",types:[a.ALL_DYNAMIC_TYPE_MAP.PIC,a.ALL_DYNAMIC_TYPE_MAP.WORD]},{title:"UP\u6295\u7a3f\u89c6\u9891",types:[a.ALL_DYNAMIC_TYPE_MAP.VIDEO]},{title:"\u6536\u85cf\u5939\uff0c\u5408\u96c6",types:[a.ALL_DYNAMIC_TYPE_MAP.MEDIA_LIST,a.ALL_DYNAMIC_TYPE_MAP.COLLECTION]},{title:"\u4e13\u680f",types:[a.ALL_DYNAMIC_TYPE_MAP.ARTICLE]},{title:"\u76f4\u64ad",types:[a.ALL_DYNAMIC_TYPE_MAP.LIVE_ROOM,a.ALL_DYNAMIC_TYPE_MAP.LIVE,a.ALL_DYNAMIC_TYPE_MAP.LIVE_PUSH,a.ALL_DYNAMIC_TYPE_MAP.SUBSCRIPTION]},{title:"\u97f3\u4e50",types:[a.ALL_DYNAMIC_TYPE_MAP.MUSIC]},{title:"\u65e5\u756a\uff0c\u56fd\u521b",types:[a.ALL_DYNAMIC_TYPE_MAP.BANGUMI,a.ALL_DYNAMIC_TYPE_MAP.PGC_BANGUMI,a.ALL_DYNAMIC_TYPE_MAP.GUOCHUANG]},{title:"\u6f2b\u753b",types:[a.ALL_DYNAMIC_TYPE_MAP.COMIC_SHARE]},{title:"\u8bfe\u7a0b",types:[a.ALL_DYNAMIC_TYPE_MAP.CHEESE_SERIES,a.ALL_DYNAMIC_TYPE_MAP.CHEESE_UPDATE]},{title:"\u7535\u5f71",types:[a.ALL_DYNAMIC_TYPE_MAP.FILM]},{title:"\u7535\u89c6\u7efc\u827a",types:[a.ALL_DYNAMIC_TYPE_MAP.TV]},{title:"\u7eaa\u5f55\u7247",types:[a.ALL_DYNAMIC_TYPE_MAP.DOCUMENTARY]},{title:"\u5176\u4ed6\uff08\u8bdd\u9898\uff0c\u620f\u5267\uff0c\u5df2\u88ab\u5220\u9664\u5185\u5bb9\uff09",types:[a.ALL_DYNAMIC_TYPE_MAP.H5_SHARE,a.ALL_DYNAMIC_TYPE_MAP.COMIC_SHARE,a.ALL_DYNAMIC_TYPE_MAP.DRAMA,a.ALL_DYNAMIC_TYPE_MAP.NONE]}],a.DYNAMIC_TYPE_MAP=Object.assign({ALL:268435455,PIC:2,VIDEO:8,ARTICLE:64,BANGUMI:512},a.ALL_DYNAMIC_TYPE_MAP)},29010:function(e,a,r){var p=this&&this.__createBinding||(Object.create?function(e,a,r,p){void 0===p&&(p=r);var t=Object.getOwnPropertyDescriptor(a,r);t&&!("get"in t?!a.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return a[r]}}),Object.defineProperty(e,p,t)}:function(e,a,r,p){void 0===p&&(p=r),e[p]=a[r]}),t=this&&this.__exportStar||function(e,a){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(a,r)||p(a,e,r)};Object.defineProperty(a,"__esModule",{value:!0}),t(r(25867),a),t(r(74051),a),t(r(48969),a),t(r(97907),a),t(r(40677),a),t(r(76774),a),t(r(20078),a)},74051:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.LIVE_FORMAT_NAME_MAP=a.LIVE_FORMATS_MAP=a.QUALITY_NAME_LIST=void 0,a.QUALITY_NAME_LIST=["4K","\u539f\u753bPRO","\u539f\u753b","\u84dd\u5149PRO","\u84dd\u5149","\u8d85\u6e05PRO","\u8d85\u6e05","\u9ad8\u6e05","\u6d41\u7545"],a.LIVE_FORMATS_MAP=[{qn:3e4,desc:"\u675c\u6bd4",hdr:!1},{qn:2e4,desc:"4K",hdr:!1},{qn:1e4,desc:"\u539f\u753b",hdr:!1},{qn:400,desc:"\u84dd\u5149",hdr:!0},{qn:250,desc:"\u8d85\u6e05",hdr:!0},{qn:150,desc:"\u9ad8\u6e05",hdr:!1},{qn:80,desc:"\u6d41\u7545",hdr:!1}],a.LIVE_FORMAT_NAME_MAP={3e4:"\u675c\u6bd4",2e4:"4K",1e4:"\u539f\u753b",400:"\u84dd\u5149",250:"\u8d85\u6e05",150:"\u9ad8\u6e05",80:"\u6d41\u7545"}},48969:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.TEXT_EMOJI=void 0,a.TEXT_EMOJI=["(\u2312\u25bd\u2312)","\uff08\uffe3\u25bd\uffe3\uff09","(=\u30fb\u03c9\u30fb=)","(\uff40\u30fb\u03c9\u30fb\xb4)","(\u301c\uffe3\u25b3\uffe3)\u301c","(\uff65\u2200\uff65)","(\xb0\u2200\xb0)\uff89","(\uffe33\uffe3)","\u256e(\uffe3\u25bd\uffe3)\u256d","( \xb4_\u309d\uff40)","\u2190_\u2190","\u2192_\u2192","(<_<)","(>_>)","(;\xac_\xac)",'("\u2594\u25a1\u2594)/',"(\uff9f\u0414\uff9f\u2261\uff9f\u0434\uff9f)!?","\u03a3(\uff9f\u0434\uff9f;)","\u03a3( \uffe3\u25a1\uffe3||)","(\xb4\uff1b\u03c9\uff1b`)","\uff08/T\u0414T)/","(^\u30fb\u03c9\u30fb^ )","(\uff61\uff65\u03c9\uff65\uff61)","(\u25cf\uffe3(\uff74)\uffe3\u25cf)","\u03b5=\u03b5=(\u30ce\u2267\u2207\u2266)\u30ce","(\xb4\uff65_\uff65`)","(-_-#)","\uff08\uffe3\u3078\uffe3\uff09","(\uffe3\u03b5(#\uffe3) \u03a3","\u30fd(`\u0414\xb4)\uff89","(\u256f\xb0\u53e3\xb0)\u256f(\u2534\u2014\u2534","\uff08#-_-)\u252f\u2501\u252f","_(:3\u300d\u2220)_","( \u309c- \u309c)\u3064\u30ed","(*\xb0\u25bd\xb0*)\u516b(*\xb0\u25bd\xb0*)\u266a","\u273f\u30fd(\xb0\u25bd\xb0)\u30ce\u273f","(\xa63\u3010\u2593\u2593\u3011","\ub208_\ub208","(\u0ca1\u03c9\u0ca1)","_(\u2267\u2207\u2266\u300d\u2220)_","\u2501\u2501\u2501\u2211(\uff9f\u25a1\uff9f*\u5ddd\u2501","\u2727(\u2256 \u25e1 \u2256\u273f)","( \xb4\uff65\uff65)\uff89(._.`)","(\xba\ufe43\xba\xa0)","(\u0e51>\u0602<\u0e51\uff09","\uff61\uff9f(\uff9f\xb4\u0414\uff40)\uff9f\uff61","(\u2202\u03c9\u2202)","(\u252f_\u252f)","(\u30fb\u03c9< )\u2605","( \u0e51\u02ca\u2022\u0325\u25b5\u2022)\u0a6d\u208e\u208e","\xa5\u311f(\xb4\uff65\u1d17\uff65`)\u30ce\xa5","\u03a3_(\ua4aa\u0f40\ua4aa\u300d\u2220)_","\u0669(\u0e5b \u02d8 \xb3\u02d8)\u06f6\u2764","(\u0e51\u203e\u1dc5^\u203e\u1dc5\u0e51)","(\ua4aa\u2313\ua4aa)"]},25867:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.SUPER_VIP_USER_IDENTITIES_KEY_LIST=a.VIP_USER_IDENTITIES_KEY_LIST=a.ALL_USER_IDENTITIES_KEY_LIST=a.USER_IDENTITIES_NAME_MAP=void 0,a.USER_IDENTITIES_NAME_MAP={superAdmin:"\u732b\u56fd\u8bbe\u8ba1\u5e08",admin:"\u732b\u56fd\u57ce\u7ba1",catForever:"\u732b\u56fd\u5927\u62a4\u6cd5",catVIPSuper:"\u52a9\u624b\u732b\u57f9\u80b2\u5e08",catVIP:"\u52a9\u624b\u732b\u89c2\u5bdf\u5458",catWatcher:"\u52a9\u624b\u732b\u77ad\u671b\u8005",catVIPHonor:"\u732b\u56fd\u8363\u8a89\u5e02\u6c11",catAirborneCommander:"\u7a7a\u964d\u6307\u6325\u5b98",catAirbornePilot:"\u55b5\u8425\u98de\u884c\u5458"},a.ALL_USER_IDENTITIES_KEY_LIST=["superAdmin","admin","catForever","catVIPSuper","catVIP","catWatcher"],a.VIP_USER_IDENTITIES_KEY_LIST=["superAdmin","admin","catForever","catVIP"],a.SUPER_VIP_USER_IDENTITIES_KEY_LIST=["superAdmin","admin","catForever"]},20078:(e,a)=>{var r;Object.defineProperty(a,"__esModule",{value:!0}),a.VIDEO_URL_TYPE_ID=a.VIDEO_FORMATS_MAP=void 0,a.VIDEO_FORMATS_MAP={0:"\u81ea\u52a8",15:"360P \u6d41\u7545",16:"360P \u6d41\u7545",32:"480P \u6e05\u6670",48:"720P \u9ad8\u6e05",64:"720P \u9ad8\u6e05",74:"720P60 \u9ad8\u6e05",80:"1080P \u9ad8\u6e05",112:"1080P \u9ad8\u7801\u7387",116:"1080P 60\u5e27",120:"4K \u8d85\u6e05",125:"HDR \u771f\u5f69",126:"\u675c\u6bd4\u89c6\u754c",127:"8K \u8d85\u9ad8\u6e05"},function(e){e["bv"]="bvid",e["av"]="aid",e["ep"]="epId",e["ss"]="ssId"}(r||(a.VIDEO_URL_TYPE_ID=r={}))},73972:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.Point2=void 0;class r{constructor(...e){this.__valid=!1,this.__needUpdate=!0,this.set=(...e)=>{if(isNaN(+e[0])||isNaN(+e[1])){if(e[0]instanceof Array&&2===e[0].length)this.set(...e[0]);else if(e[0]instanceof r){const{x:a,y:r}=e[0];this.set(a,r)}}else this.__needUpdate=!0,this.x=+e[0],this.y=+e[1];return this},this.setX=e=>(this.x=e,this.__needUpdate=!0,this),this.setY=e=>(this.y=e,this.__needUpdate=!0,this),this.add=e=>(this.x+=e.x,this.y+=e.y,this),this.addX=e=>(this.x+=e,this),this.addY=e=>(this.y+=e,this),this.sub=e=>(this.x-=e.x,this.y-=e.y,this),this.subX=e=>this.addX(-e),this.subY=e=>this.addY(-e),this.multiply=e=>0===e?this.set(0,0):(this.x*=e,this.y*=e,this),this.multiplyX=e=>(0===e?this.x=1/0:this.x*=e,this),this.multiplyY=e=>(0===e?this.y=1/0:this.y*=e,this),this.divide=e=>0===e?this.set(1/0,1/0):this.multiply(1/e),this.divideX=e=>this.multiplyX(1/e),this.divideY=e=>this.multiplyY(1/e),this.dot=e=>this.x*e.x+this.y+e.y,this.equal=(...e)=>{if("number"===typeof e[0]&&"number"===typeof e[1])return e[0]===this.x&&e[1]===this.y;if(e[0]instanceof Array&&2===e.length)return this.equal(...e[0]);if(e[0]instanceof r){const{x:a,y:r}=e[0];return this.equal(a,r)}return!1},this.normalize=()=>{const e=Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));return this.divide(e)},this.negtiveX=()=>(this.x*=-1,this),this.negtiveY=()=>(this.y*=-1,this),this.negtive=()=>this.negtiveX().negtiveY(),this.round=()=>(this.x=Math.round(this.x),this.y=Math.round(this.y),this),this.roundX=()=>(this.x=Math.round(this.x),this),this.roundY=()=>(this.y=Math.round(this.y),this),this.floor=()=>(this.x=Math.floor(this.x),this.y=Math.floor(this.y),this),this.floorX=()=>(this.x=Math.floor(this.x),this),this.floorY=()=>(this.y=Math.floor(this.y),this),this.ceil=()=>(this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this),this.ceilX=()=>(this.x=Math.ceil(this.x),this),this.ceilY=()=>(this.y=Math.ceil(this.y),this),this.trunc=()=>(this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this),this.truncX=()=>(this.x=Math.trunc(this.x),this),this.truncY=()=>(this.y=Math.trunc(this.y),this),this.clone=()=>new this.constructor(this.x,this.y),this.toArray=()=>[this.x,this.y],this.toObject=()=>({x:this.x,y:this.y}),this.toString=(e="x",a="y")=>`${e}${this.x}${a}${this.y}`,this.set(...e)}get zero(){return new this.constructor(0,0)}get infinity(){return new this.constructor(1/0,1/0)}get NaN(){return new this.constructor(NaN,NaN)}get unit(){return new this.constructor(1,1)}get valid(){return this.__needUpdate&&(this.__valid=Number.isInteger(this.x)&&Number.isInteger(this.y),this.__needUpdate=!1),this.__valid}get area(){return this.x*this.y}}a.Point2=r},69426:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.Position=void 0;const p=r(73972);class t extends p.Point2{constructor(...e){super(...e)}}a.Position=t},27669:function(e,a,r){var p=this&&this.__createBinding||(Object.create?function(e,a,r,p){void 0===p&&(p=r);var t=Object.getOwnPropertyDescriptor(a,r);t&&!("get"in t?!a.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return a[r]}}),Object.defineProperty(e,p,t)}:function(e,a,r,p){void 0===p&&(p=r),e[p]=a[r]}),t=this&&this.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e["default"]=a}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&p(a,e,r);return t(a,e),a},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.LiveDashboard=void 0;const o=l(r(57689)),n=i(r(635)),f=r(96692),d=l(r(52296)),c=r(51920),s=r(78836),b=r(22993),g=n.createGlobalStyle`
  @keyframes moveFromBottomIn {
    from {
      opacity: 0;
      transform: translate(0, 20px);
    }

    to {
      opacity: 1;
      transform: translate(0, 0px);
    }
  }
`,u=n.default.div`
  position: relative;
  height: 400px;
`,_=n.default.div`
  display: flex;
  //animation: moveFromBottomIn 1000ms cubic-bezier(0.42, 0, 0.1, 1) forwards;

  .username {
    width: 200px;
  }
`,h=(0,n.default)(f.List)`
  &::-webkit-scrollbar {
    width: 12px;
    height: 3px;
  }
  .ReactVirtualized__Grid__innerScrollContainer {
    //transition: height 500ms 0ms ease;
  }
`,{query:y}=new d.default(location.href,"",!0);new Set;class A extends o.default.Component{constructor(e){super(e),this.state={usableDanmukuList:[],messageList:[],danmuList:[]},this.listRef=o.default.createRef(),this.scrollLocked=!1,this.autoScrollTimer=null,this.onRowsRendered=({overscanStartIndex:e,overscanStopIndex:a,startIndex:r,stopIndex:p})=>{this.scrollLocked=p<=this.state.danmuList.length-4},this.renderRow=({key:e,index:a,isScrolling:r,isVisible:p,style:t})=>{const i=this.state.danmuList[a];return o.default.createElement(_,{key:e,style:t},o.default.createElement("span",{className:"username"},i.userInfo.username),o.default.createElement("span",{className:"content"},i.content))}}componentDidMount(){(null===y||void 0===y?void 0:y.roomId)?chrome.runtime.sendMessage({target:"liveDanmuku",event:"connectDashboardPage",roomId:null===y||void 0===y?void 0:y.roomId},e=>{c.Message.info(`\u8fde\u63a5\u76f4\u64ad\u95f4: ${null===y||void 0===y?void 0:y.roomId} ${e?"\u6210\u529f":"\u5931\u8d25"}`)}):chrome.runtime.sendMessage({target:"liveDanmuku",event:"getDanmukuList"},(e=[])=>{this.setState({usableDanmukuList:e})}),chrome.runtime.onMessage.addListener(e=>{if(e.cmd){const{cmd:a,data:r,info:p}=e;switch(a){case"DANMU_MSG":{const{danmuList:e}=this.state,a=(0,b.danmuParser)(p);e.push(a),this.setState({danmuList:e},()=>{this.scrollLocked||(clearTimeout(this.autoScrollTimer),this.autoScrollTimer=setTimeout(()=>{var a;null===(a=this.listRef)||void 0===a||a.scrollToRow(e.length)}))});break}default:}}return!0})}render(){const{danmuList:e}=this.state;return o.default.createElement(u,null,o.default.createElement(s.GlobalStyle,null),o.default.createElement(g,null),o.default.createElement(f.AutoSizer,{defaultHeight:300},({width:a,height:r})=>o.default.createElement(h,{ref:e=>this.listRef=e,width:a,height:r,rowHeight:18,rowCount:e.length,rowRenderer:this.renderRow,noRowsRenderer:()=>"\u65e0\u6570\u636e",onRowsRendered:this.onRowsRendered})))}}a.LiveDashboard=A},5519:function(e,a,r){var p=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const t=p(r(57689)),i=p(r(97326)),l=r(27669),o=document.createElement("div");o.id="root",document.body.appendChild(o),i.default.hydrate(t.default.createElement(l.LiveDashboard,null),o)},748:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.animations=void 0;const p=r(635);a.animations=p.css`
  @keyframes blink {
    0%, to {
      color: transparent;
    }

    50% {
      color: var(--google-red-500);
    }
  }
`},39757:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.colorValues=void 0,a.colorValues={"google-red-100":"#f4c7c3","google-red-300":"#e67c73","google-red-500":"#db4437","google-red-700":"#c53929","google-blue-100":"#c6dafc","google-blue-300":"#7baaf7","google-blue-500":"#4285f4","google-blue-600":"#1a73e8","google-blue-700":"#3367d6","google-green-100":"#b7e1cd","google-green-300":"#57bb8a","google-green-500":"#0f9d58","google-green-700":"#0b8043","google-yellow-100":"#fce8b2","google-yellow-300":"#f7cb4d","google-yellow-500":"#f4b400","google-yellow-700":"#f09300","google-grey-50":"#f8f9fa","google-grey-100":"#f5f5f5","google-grey-300":"#e0e0e0","google-grey-400":"#bdc1c6","google-grey-500":"#9e9e9e","google-grey-700":"#616161","paper-red-50":"#ffebee","paper-red-100":"#ffcdd2","paper-red-200":"#ef9a9a","paper-red-300":"#e57373","paper-red-400":"#ef5350","paper-red-500":"#f44336","paper-red-600":"#e53935","paper-red-700":"#d32f2f","paper-red-800":"#c62828","paper-red-900":"#b71c1c","paper-red-a100":"#ff8a80","paper-red-a200":"#ff5252","paper-red-a400":"#ff1744","paper-red-a700":"#d50000","paper-pink-50":"#fce4ec","paper-pink-100":"#f8bbd0","paper-pink-200":"#f48fb1","paper-pink-300":"#f06292","paper-pink-400":"#ec407a","paper-pink-500":"#e91e63","paper-pink-600":"#d81b60","paper-pink-700":"#c2185b","paper-pink-800":"#ad1457","paper-pink-900":"#880e4f","paper-pink-a100":"#ff80ab","paper-pink-a200":"#ff4081","paper-pink-a400":"#f50057","paper-pink-a700":"#c51162","paper-purple-50":"#f3e5f5","paper-purple-100":"#e1bee7","paper-purple-200":"#ce93d8","paper-purple-300":"#ba68c8","paper-purple-400":"#ab47bc","paper-purple-500":"#9c27b0","paper-purple-600":"#8e24aa","paper-purple-700":"#7b1fa2","paper-purple-800":"#6a1b9a","paper-purple-900":"#4a148c","paper-purple-a100":"#ea80fc","paper-purple-a200":"#e040fb","paper-purple-a400":"#d500f9","paper-purple-a700":"#aa00ff","paper-deep-purple-50":"#ede7f6","paper-deep-purple-100":"#d1c4e9","paper-deep-purple-200":"#b39ddb","paper-deep-purple-300":"#9575cd","paper-deep-purple-400":"#7e57c2","paper-deep-purple-500":"#673ab7","paper-deep-purple-600":"#5e35b1","paper-deep-purple-700":"#512da8","paper-deep-purple-800":"#4527a0","paper-deep-purple-900":"#311b92","paper-deep-purple-a100":"#b388ff","paper-deep-purple-a200":"#7c4dff","paper-deep-purple-a400":"#651fff","paper-deep-purple-a700":"#6200ea","paper-indigo-50":"#e8eaf6","paper-indigo-100":"#c5cae9","paper-indigo-200":"#9fa8da","paper-indigo-300":"#7986cb","paper-indigo-400":"#5c6bc0","paper-indigo-500":"#3f51b5","paper-indigo-600":"#3949ab","paper-indigo-700":"#303f9f","paper-indigo-800":"#283593","paper-indigo-900":"#1a237e","paper-indigo-a100":"#8c9eff","paper-indigo-a200":"#536dfe","paper-indigo-a400":"#3d5afe","paper-indigo-a700":"#304ffe","paper-blue-50":"#e3f2fd","paper-blue-100":"#bbdefb","paper-blue-200":"#90caf9","paper-blue-300":"#64b5f6","paper-blue-400":"#42a5f5","paper-blue-500":"#2196f3","paper-blue-600":"#1e88e5","paper-blue-700":"#1976d2","paper-blue-800":"#1565c0","paper-blue-900":"#0d47a1","paper-blue-a100":"#82b1ff","paper-blue-a200":"#448aff","paper-blue-a400":"#2979ff","paper-blue-a700":"#2962ff","paper-light-blue-50":"#e1f5fe","paper-light-blue-100":"#b3e5fc","paper-light-blue-200":"#81d4fa","paper-light-blue-300":"#4fc3f7","paper-light-blue-400":"#29b6f6","paper-light-blue-500":"#03a9f4","paper-light-blue-600":"#039be5","paper-light-blue-700":"#0288d1","paper-light-blue-800":"#0277bd","paper-light-blue-900":"#01579b","paper-light-blue-a100":"#80d8ff","paper-light-blue-a200":"#40c4ff","paper-light-blue-a400":"#00b0ff","paper-light-blue-a700":"#0091ea","paper-cyan-50":"#e0f7fa","paper-cyan-100":"#b2ebf2","paper-cyan-200":"#80deea","paper-cyan-300":"#4dd0e1","paper-cyan-400":"#26c6da","paper-cyan-500":"#00bcd4","paper-cyan-600":"#00acc1","paper-cyan-700":"#0097a7","paper-cyan-800":"#00838f","paper-cyan-900":"#006064","paper-cyan-a100":"#84ffff","paper-cyan-a200":"#18ffff","paper-cyan-a400":"#00e5ff","paper-cyan-a700":"#00b8d4","paper-teal-50":"#e0f2f1","paper-teal-100":"#b2dfdb","paper-teal-200":"#80cbc4","paper-teal-300":"#4db6ac","paper-teal-400":"#26a69a","paper-teal-500":"#009688","paper-teal-600":"#00897b","paper-teal-700":"#00796b","paper-teal-800":"#00695c","paper-teal-900":"#004d40","paper-teal-a100":"#a7ffeb","paper-teal-a200":"#64ffda","paper-teal-a400":"#1de9b6","paper-teal-a700":"#00bfa5","paper-green-50":"#e8f5e9","paper-green-100":"#c8e6c9","paper-green-200":"#a5d6a7","paper-green-300":"#81c784","paper-green-400":"#66bb6a","paper-green-500":"#4caf50","paper-green-600":"#43a047","paper-green-700":"#388e3c","paper-green-800":"#2e7d32","paper-green-900":"#1b5e20","paper-green-a100":"#b9f6ca","paper-green-a200":"#69f0ae","paper-green-a400":"#00e676","paper-green-a700":"#00c853","paper-light-green-50":"#f1f8e9","paper-light-green-100":"#dcedc8","paper-light-green-200":"#c5e1a5","paper-light-green-300":"#aed581","paper-light-green-400":"#9ccc65","paper-light-green-500":"#8bc34a","paper-light-green-600":"#7cb342","paper-light-green-700":"#689f38","paper-light-green-800":"#558b2f","paper-light-green-900":"#33691e","paper-light-green-a100":"#ccff90","paper-light-green-a200":"#b2ff59","paper-light-green-a400":"#76ff03","paper-light-green-a700":"#64dd17","paper-lime-50":"#f9fbe7","paper-lime-100":"#f0f4c3","paper-lime-200":"#e6ee9c","paper-lime-300":"#dce775","paper-lime-400":"#d4e157","paper-lime-500":"#cddc39","paper-lime-600":"#c0ca33","paper-lime-700":"#afb42b","paper-lime-800":"#9e9d24","paper-lime-900":"#827717","paper-lime-a100":"#f4ff81","paper-lime-a200":"#eeff41","paper-lime-a400":"#c6ff00","paper-lime-a700":"#aeea00","paper-yellow-50":"#fffde7","paper-yellow-100":"#fff9c4","paper-yellow-200":"#fff59d","paper-yellow-300":"#fff176","paper-yellow-400":"#ffee58","paper-yellow-500":"#ffeb3b","paper-yellow-600":"#fdd835","paper-yellow-700":"#fbc02d","paper-yellow-800":"#f9a825","paper-yellow-900":"#f57f17","paper-yellow-a100":"#ffff8d","paper-yellow-a200":"#ffff00","paper-yellow-a400":"#ffea00","paper-yellow-a700":"#ffd600","paper-amber-50":"#fff8e1","paper-amber-100":"#ffecb3","paper-amber-200":"#ffe082","paper-amber-300":"#ffd54f","paper-amber-400":"#ffca28","paper-amber-500":"#ffc107","paper-amber-600":"#ffb300","paper-amber-700":"#ffa000","paper-amber-800":"#ff8f00","paper-amber-900":"#ff6f00","paper-amber-a100":"#ffe57f","paper-amber-a200":"#ffd740","paper-amber-a400":"#ffc400","paper-amber-a700":"#ffab00","paper-orange-50":"#fff3e0","paper-orange-100":"#ffe0b2","paper-orange-200":"#ffcc80","paper-orange-300":"#ffb74d","paper-orange-400":"#ffa726","paper-orange-500":"#ff9800","paper-orange-600":"#fb8c00","paper-orange-700":"#f57c00","paper-orange-800":"#ef6c00","paper-orange-900":"#e65100","paper-orange-a100":"#ffd180","paper-orange-a200":"#ffab40","paper-orange-a400":"#ff9100","paper-orange-a700":"#ff6500","paper-deep-orange-50":"#fbe9e7","paper-deep-orange-100":"#ffccbc","paper-deep-orange-200":"#ffab91","paper-deep-orange-300":"#ff8a65","paper-deep-orange-400":"#ff7043","paper-deep-orange-500":"#ff5722","paper-deep-orange-600":"#f4511e","paper-deep-orange-700":"#e64a19","paper-deep-orange-800":"#d84315","paper-deep-orange-900":"#bf360c","paper-deep-orange-a100":"#ff9e80","paper-deep-orange-a200":"#ff6e40","paper-deep-orange-a400":"#ff3d00","paper-deep-orange-a700":"#dd2c00","paper-brown-50":"#efebe9","paper-brown-100":"#d7ccc8","paper-brown-200":"#bcaaa4","paper-brown-300":"#a1887f","paper-brown-400":"#8d6e63","paper-brown-500":"#795548","paper-brown-600":"#6d4c41","paper-brown-700":"#5d4037","paper-brown-800":"#4e342e","paper-brown-900":"#3e2723","paper-grey-50":"#fafafa","paper-grey-100":"#f5f5f5","paper-grey-200":"#eeeeee","paper-grey-300":"#e0e0e0","paper-grey-400":"#bdbdbd","paper-grey-500":"#9e9e9e","paper-grey-600":"#757575","paper-grey-700":"#616161","paper-grey-800":"#424242","paper-grey-900":"#212121","paper-blue-grey-50":"#eceff1","paper-blue-grey-100":"#cfd8dc","paper-blue-grey-200":"#b0bec5","paper-blue-grey-300":"#90a4ae","paper-blue-grey-400":"#78909c","paper-blue-grey-500":"#607d8b","paper-blue-grey-600":"#546e7a","paper-blue-grey-700":"#455a64","paper-blue-grey-800":"#37474f","bilibili-pink":"#FB7299","bilibili-blue":"#23ADE5","bilibili-green":"#6dc781"}},43521:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.globalColor=a.bilibiliDarkColor=void 0;const p=r(635);a.bilibiliDarkColor=p.css`
  --Ga0: #0D0D0E;
  --Ga0_s: #1E2022;
  --Ga0_t: #1E2022;
  --Ga1: #000000;
  --Ga1_s: #232527;
  --Ga1_t: #232527;
  --Ga1_e: #232527;
  --Ga2: #2F3134;
  --Ga2_t: #2F3134;
  --Ga3: #46494D;
  --Ga3_t: #46494D;
  --Ga4: #5E6267;
  --Ga4_t: #5E6267;
  --Ga5: #757A81;
  --Ga5_t: #757A81;
  --Ga6: #8B9097;
  --Ga6_t: #8B9097;
  --Ga7: #A2A7AE;
  --Ga7_t: #A2A7AE;
  --Ga8: #B9BDC2;
  --Ga8_t: #B9BDC2;
  --Ga9: #D0D3D7;
  --Ga9_t: #D0D3D7;
  --Ga10: #E7E9EB;
  --Ga10_t: #E7E9EB;
  --Ga11: #242628;
  --Ga12: #1F2022;
  --Wh0: #17181A;
  --Wh0_t: #17181A;
  --Ba0: #000000;
  --Ba0_s: #FFFFFF;
  --Ba0_t: #000000;
  --Pi0: #26161C;
  --Pi1: #2F1A22;
  --Pi2: #472030;
  --Pi3: #76304B;
  --Pi4: #A73E65;
  --Pi5: #D44E7D;
  --Pi5_t: #D44E7D;
  --Pi6: #DC6D94;
  --Pi7: #E38CAA;
  --Pi8: #EBABC1;
  --Pi9: #F2CAD8;
  --Pi10: #FAE9EF;
  --Ma0: #261525;
  --Ma1: #2E182D;
  --Ma2: #461C43;
  --Ma3: #72296C;
  --Ma4: #A13396;
  --Ma5: #CB41BB;
  --Ma6: #D462C7;
  --Ma7: #DD83D3;
  --Ma8: #E6A4DE;
  --Ma9: #EFC5EA;
  --Ma10: #F8E6F6;
  --Re0: #261314;
  --Re1: #2E1617;
  --Re2: #471A1C;
  --Re3: #742728;
  --Re4: #A63131;
  --Re5: #D1403E;
  --Re6: #D9615F;
  --Re7: #E18281;
  --Re8: #E9A3A2;
  --Re9: #F1C5C4;
  --Re10: #F9E5E5;
  --Or0: #28180F;
  --Or1: #301B10;
  --Or2: #4A230E;
  --Or3: #783610;
  --Or4: #A9490D;
  --Or5: #D66011;
  --Or6: #DD7C3A;
  --Or7: #E49764;
  --Or8: #EBB38D;
  --Or9: #F2CEB6;
  --Or10: #FAEADF;
  --Ye0: #2A1E0F;
  --Ye1: #342410;
  --Ye2: #4D300B;
  --Ye3: #7C4C08;
  --Ye4: #AD6800;
  --Ye5: #DB8700;
  --Ye6: #E19C2C;
  --Ye7: #E7B158;
  --Ye8: #EEC584;
  --Ye9: #F4DAB1;
  --Ye10: #FAEFDD;
  --Ly0: #2A2310;
  --Ly1: #332A11;
  --Ly2: #49390C;
  --Ly3: #745909;
  --Ly4: #A27C00;
  --Ly5: #CCA000;
  --Ly6: #D5B02C;
  --Ly7: #DEC158;
  --Ly8: #E7D184;
  --Ly9: #EFE2B1;
  --Ly10: #F8F2DD;
  --Lg0: #19220F;
  --Lg1: #1E2911;
  --Lg2: #273C0E;
  --Lg3: #3C600F;
  --Lg4: #50840B;
  --Lg5: #67A70E;
  --Lg6: #81B638;
  --Lg7: #9CC562;
  --Lg8: #B6D58B;
  --Lg9: #D0E4B5;
  --Lg10: #EBF3DF;
  --Gr0: #102017;
  --Gr1: #11271B;
  --Gr2: #123923;
  --Gr3: #175C34;
  --Gr4: #198042;
  --Gr5: #1FA251;
  --Gr6: #46B26F;
  --Gr7: #6DC28D;
  --Gr8: #93D2AB;
  --Gr9: #BAE2C9;
  --Gr10: #E1F3E8;
  --Cy0: #0C1F20;
  --Cy1: #0D2627;
  --Cy2: #093739;
  --Cy3: #085B5C;
  --Cy4: #028080;
  --Cy5: #03A29F;
  --Cy6: #2FB2B0;
  --Cy7: #5AC2C0;
  --Cy8: #86D2D1;
  --Cy9: #B2E2E1;
  --Cy10: #DDF3F3;
  --Lb0: #0A1B23;
  --Lb1: #0B202A;
  --Lb2: #082D40;
  --Lb3: #064A69;
  --Lb4: #006996;
  --Lb5: #0087BD;
  --Lb6: #2C9CC8;
  --Lb7: #58B1D4;
  --Lb8: #84C5DF;
  --Lb9: #B1DBEB;
  --Lb10: #DDEFF6;
  --Bl0: #151826;
  --Bl1: #181C2F;
  --Bl2: #1F2748;
  --Bl3: #2E3C76;
  --Bl4: #3B53A8;
  --Bl5: #4B6BD4;
  --Bl6: #6A85DB;
  --Bl7: #899EE3;
  --Bl8: #A9B8EA;
  --Bl9: #C8D2F2;
  --Bl10: #E7EBF9;
  --Pu0: #1D1628;
  --Pu1: #221A31;
  --Pu2: #31214C;
  --Pu3: #4E317D;
  --Pu4: #6D3FB1;
  --Pu5: #8C50E0;
  --Pu6: #A06EE5;
  --Pu7: #B48DEB;
  --Pu8: #C8ABF0;
  --Pu9: #DBC9F5;
  --Pu10: #F0E8FB;
  --Br0: #211D1B;
  --Br1: #282320;
  --Br2: #382F2A;
  --Br3: #59483F;
  --Br4: #7A6154;
  --Br5: #9A7C6A;
  --Br6: #AC9384;
  --Br7: #BDA99E;
  --Br8: #CEBFB7;
  --Br9: #E0D7D1;
  --Br10: #F2EEEB;
  --Si0: #212325;
  --Si1: #27292C;
  --Si2: #36393F;
  --Si3: #535962;
  --Si4: #6F7987;
  --Si5: #8C99AA;
  --Si6: #A0ABB9;
  --Si7: #B4BCC7;
  --Si8: #C8CED6;
  --Si9: #DCE0E5;
  --Si10: #F0F2F4
`,a.globalColor=p.css`
  --bilibili-pink: #FB7299;
  --bilibili-blue: #23ADE5;
  --bilibili-green: #6dc781;
  --bilibili-gray: #F4F4F4;
  --google-red-100: #f4c7c3;
  --google-red-300: #e67c73;
  --google-red-500: #db4437;
  --google-red-700: #c53929;
  --google-blue-100: #c6dafc;
  --google-blue-300: #7baaf7;
  --google-blue-500: #4285f4;
  --google-blue-600: #1a73e8;
  --google-blue-700: #3367d6;
  --google-green-100: #b7e1cd;
  --google-green-300: #57bb8a;
  --google-green-500: #0f9d58;
  --google-green-700: #0b8043;
  --google-yellow-100: #fce8b2;
  --google-yellow-300: #f7cb4d;
  --google-yellow-500: #f4b400;
  --google-yellow-700: #f09300;
  --google-grey-50: #f8f9fa;
  --google-grey-100: #f5f5f5;
  --google-grey-300: #e0e0e0;
  --google-grey-400: #bdc1c6;
  --google-grey-500: #9e9e9e;
  --google-grey-700: #616161;
  --paper-red-50: #ffebee;
  --paper-red-100: #ffcdd2;
  --paper-red-200: #ef9a9a;
  --paper-red-300: #e57373;
  --paper-red-400: #ef5350;
  --paper-red-500: #f44336;
  --paper-red-600: #e53935;
  --paper-red-700: #d32f2f;
  --paper-red-800: #c62828;
  --paper-red-900: #b71c1c;
  --paper-red-a100: #ff8a80;
  --paper-red-a200: #ff5252;
  --paper-red-a400: #ff1744;
  --paper-red-a700: #d50000;
  --paper-pink-50: #fce4ec;
  --paper-pink-100: #f8bbd0;
  --paper-pink-200: #f48fb1;
  --paper-pink-300: #f06292;
  --paper-pink-400: #ec407a;
  --paper-pink-500: #e91e63;
  --paper-pink-600: #d81b60;
  --paper-pink-700: #c2185b;
  --paper-pink-800: #ad1457;
  --paper-pink-900: #880e4f;
  --paper-pink-a100: #ff80ab;
  --paper-pink-a200: #ff4081;
  --paper-pink-a400: #f50057;
  --paper-pink-a700: #c51162;
  --paper-purple-50: #f3e5f5;
  --paper-purple-100: #e1bee7;
  --paper-purple-200: #ce93d8;
  --paper-purple-300: #ba68c8;
  --paper-purple-400: #ab47bc;
  --paper-purple-500: #9c27b0;
  --paper-purple-600: #8e24aa;
  --paper-purple-700: #7b1fa2;
  --paper-purple-800: #6a1b9a;
  --paper-purple-900: #4a148c;
  --paper-purple-a100: #ea80fc;
  --paper-purple-a200: #e040fb;
  --paper-purple-a400: #d500f9;
  --paper-purple-a700: #aa00ff;
  --paper-deep-purple-50: #ede7f6;
  --paper-deep-purple-100: #d1c4e9;
  --paper-deep-purple-200: #b39ddb;
  --paper-deep-purple-300: #9575cd;
  --paper-deep-purple-400: #7e57c2;
  --paper-deep-purple-500: #673ab7;
  --paper-deep-purple-600: #5e35b1;
  --paper-deep-purple-700: #512da8;
  --paper-deep-purple-800: #4527a0;
  --paper-deep-purple-900: #311b92;
  --paper-deep-purple-a100: #b388ff;
  --paper-deep-purple-a200: #7c4dff;
  --paper-deep-purple-a400: #651fff;
  --paper-deep-purple-a700: #6200ea;
  --paper-indigo-50: #e8eaf6;
  --paper-indigo-100: #c5cae9;
  --paper-indigo-200: #9fa8da;
  --paper-indigo-300: #7986cb;
  --paper-indigo-400: #5c6bc0;
  --paper-indigo-500: #3f51b5;
  --paper-indigo-600: #3949ab;
  --paper-indigo-700: #303f9f;
  --paper-indigo-800: #283593;
  --paper-indigo-900: #1a237e;
  --paper-indigo-a100: #8c9eff;
  --paper-indigo-a200: #536dfe;
  --paper-indigo-a400: #3d5afe;
  --paper-indigo-a700: #304ffe;
  --paper-blue-50: #e3f2fd;
  --paper-blue-100: #bbdefb;
  --paper-blue-200: #90caf9;
  --paper-blue-300: #64b5f6;
  --paper-blue-400: #42a5f5;
  --paper-blue-500: #2196f3;
  --paper-blue-600: #1e88e5;
  --paper-blue-700: #1976d2;
  --paper-blue-800: #1565c0;
  --paper-blue-900: #0d47a1;
  --paper-blue-a100: #82b1ff;
  --paper-blue-a200: #448aff;
  --paper-blue-a400: #2979ff;
  --paper-blue-a700: #2962ff;
  --paper-light-blue-50: #e1f5fe;
  --paper-light-blue-100: #b3e5fc;
  --paper-light-blue-200: #81d4fa;
  --paper-light-blue-300: #4fc3f7;
  --paper-light-blue-400: #29b6f6;
  --paper-light-blue-500: #03a9f4;
  --paper-light-blue-600: #039be5;
  --paper-light-blue-700: #0288d1;
  --paper-light-blue-800: #0277bd;
  --paper-light-blue-900: #01579b;
  --paper-light-blue-a100: #80d8ff;
  --paper-light-blue-a200: #40c4ff;
  --paper-light-blue-a400: #00b0ff;
  --paper-light-blue-a700: #0091ea;
  --paper-cyan-50: #e0f7fa;
  --paper-cyan-100: #b2ebf2;
  --paper-cyan-200: #80deea;
  --paper-cyan-300: #4dd0e1;
  --paper-cyan-400: #26c6da;
  --paper-cyan-500: #00bcd4;
  --paper-cyan-600: #00acc1;
  --paper-cyan-700: #0097a7;
  --paper-cyan-800: #00838f;
  --paper-cyan-900: #006064;
  --paper-cyan-a100: #84ffff;
  --paper-cyan-a200: #18ffff;
  --paper-cyan-a400: #00e5ff;
  --paper-cyan-a700: #00b8d4;
  --paper-teal-50: #e0f2f1;
  --paper-teal-100: #b2dfdb;
  --paper-teal-200: #80cbc4;
  --paper-teal-300: #4db6ac;
  --paper-teal-400: #26a69a;
  --paper-teal-500: #009688;
  --paper-teal-600: #00897b;
  --paper-teal-700: #00796b;
  --paper-teal-800: #00695c;
  --paper-teal-900: #004d40;
  --paper-teal-a100: #a7ffeb;
  --paper-teal-a200: #64ffda;
  --paper-teal-a400: #1de9b6;
  --paper-teal-a700: #00bfa5;
  --paper-green-50: #e8f5e9;
  --paper-green-100: #c8e6c9;
  --paper-green-200: #a5d6a7;
  --paper-green-300: #81c784;
  --paper-green-400: #66bb6a;
  --paper-green-500: #4caf50;
  --paper-green-600: #43a047;
  --paper-green-700: #388e3c;
  --paper-green-800: #2e7d32;
  --paper-green-900: #1b5e20;
  --paper-green-a100: #b9f6ca;
  --paper-green-a200: #69f0ae;
  --paper-green-a400: #00e676;
  --paper-green-a700: #00c853;
  --paper-light-green-50: #f1f8e9;
  --paper-light-green-100: #dcedc8;
  --paper-light-green-200: #c5e1a5;
  --paper-light-green-300: #aed581;
  --paper-light-green-400: #9ccc65;
  --paper-light-green-500: #8bc34a;
  --paper-light-green-600: #7cb342;
  --paper-light-green-700: #689f38;
  --paper-light-green-800: #558b2f;
  --paper-light-green-900: #33691e;
  --paper-light-green-a100: #ccff90;
  --paper-light-green-a200: #b2ff59;
  --paper-light-green-a400: #76ff03;
  --paper-light-green-a700: #64dd17;
  --paper-lime-50: #f9fbe7;
  --paper-lime-100: #f0f4c3;
  --paper-lime-200: #e6ee9c;
  --paper-lime-300: #dce775;
  --paper-lime-400: #d4e157;
  --paper-lime-500: #cddc39;
  --paper-lime-600: #c0ca33;
  --paper-lime-700: #afb42b;
  --paper-lime-800: #9e9d24;
  --paper-lime-900: #827717;
  --paper-lime-a100: #f4ff81;
  --paper-lime-a200: #eeff41;
  --paper-lime-a400: #c6ff00;
  --paper-lime-a700: #aeea00;
  --paper-yellow-50: #fffde7;
  --paper-yellow-100: #fff9c4;
  --paper-yellow-200: #fff59d;
  --paper-yellow-300: #fff176;
  --paper-yellow-400: #ffee58;
  --paper-yellow-500: #ffeb3b;
  --paper-yellow-600: #fdd835;
  --paper-yellow-700: #fbc02d;
  --paper-yellow-800: #f9a825;
  --paper-yellow-900: #f57f17;
  --paper-yellow-a100: #ffff8d;
  --paper-yellow-a200: #ffff00;
  --paper-yellow-a400: #ffea00;
  --paper-yellow-a700: #ffd600;
  --paper-amber-50: #fff8e1;
  --paper-amber-100: #ffecb3;
  --paper-amber-200: #ffe082;
  --paper-amber-300: #ffd54f;
  --paper-amber-400: #ffca28;
  --paper-amber-500: #ffc107;
  --paper-amber-600: #ffb300;
  --paper-amber-700: #ffa000;
  --paper-amber-800: #ff8f00;
  --paper-amber-900: #ff6f00;
  --paper-amber-a100: #ffe57f;
  --paper-amber-a200: #ffd740;
  --paper-amber-a400: #ffc400;
  --paper-amber-a700: #ffab00;
  --paper-orange-50: #fff3e0;
  --paper-orange-100: #ffe0b2;
  --paper-orange-200: #ffcc80;
  --paper-orange-300: #ffb74d;
  --paper-orange-400: #ffa726;
  --paper-orange-500: #ff9800;
  --paper-orange-600: #fb8c00;
  --paper-orange-700: #f57c00;
  --paper-orange-800: #ef6c00;
  --paper-orange-900: #e65100;
  --paper-orange-a100: #ffd180;
  --paper-orange-a200: #ffab40;
  --paper-orange-a400: #ff9100;
  --paper-orange-a700: #ff6500;
  --paper-deep-orange-50: #fbe9e7;
  --paper-deep-orange-100: #ffccbc;
  --paper-deep-orange-200: #ffab91;
  --paper-deep-orange-300: #ff8a65;
  --paper-deep-orange-400: #ff7043;
  --paper-deep-orange-500: #ff5722;
  --paper-deep-orange-600: #f4511e;
  --paper-deep-orange-700: #e64a19;
  --paper-deep-orange-800: #d84315;
  --paper-deep-orange-900: #bf360c;
  --paper-deep-orange-a100: #ff9e80;
  --paper-deep-orange-a200: #ff6e40;
  --paper-deep-orange-a400: #ff3d00;
  --paper-deep-orange-a700: #dd2c00;
  --paper-brown-50: #efebe9;
  --paper-brown-100: #d7ccc8;
  --paper-brown-200: #bcaaa4;
  --paper-brown-300: #a1887f;
  --paper-brown-400: #8d6e63;
  --paper-brown-500: #795548;
  --paper-brown-600: #6d4c41;
  --paper-brown-700: #5d4037;
  --paper-brown-800: #4e342e;
  --paper-brown-900: #3e2723;
  --paper-grey-50: #fafafa;
  --paper-grey-100: #f5f5f5;
  --paper-grey-200: #eeeeee;
  --paper-grey-300: #e0e0e0;
  --paper-grey-400: #bdbdbd;
  --paper-grey-500: #9e9e9e;
  --paper-grey-600: #757575;
  --paper-grey-700: #616161;
  --paper-grey-800: #424242;
  --paper-grey-900: #212121;
  --paper-grey-1000: #141414;
  --paper-blue-grey-50: #eceff1;
  --paper-blue-grey-100: #cfd8dc;
  --paper-blue-grey-200: #b0bec5;
  --paper-blue-grey-300: #90a4ae;
  --paper-blue-grey-400: #78909c;
  --paper-blue-grey-500: #607d8b;
  --paper-blue-grey-600: #546e7a;
  --paper-blue-grey-700: #455a64;
  --paper-blue-grey-800: #37474f;
`},78836:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.GlobalStyle=void 0;const p=r(635),t=r(748),i=r(13904),l=r(43521);a.GlobalStyle=p.createGlobalStyle`
  html,body {
    -ms-text-size-adjust: 100%; // 2
    -webkit-text-size-adjust: 100%; // 2
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
  body {
    margin: 0;
    font-size: 12px;
    ${(0,i.fontFamily)()};
    ${l.globalColor};
    ${t.animations};
    //background-color: var(--paper-grey-400)!important;
  }
  
  * {
    &::-webkit-scrollbar {
      width: 3px;
      height: 3px;
    }
    
    &::-webkit-scrollbar-corner {
      display: none;
    }
  
    &::-webkit-scrollbar-thumb {
      visibility: hidden;
      background-color: #b3b3b3;
    }
  
    &:hover {
      &::-webkit-scrollbar-thumb {
        visibility: visible;
      }
    }
  }

  .bilibili-helper-2-icon-bilibili {
    padding: 0 4px;
    width: fit-content!important;
    vertical-align: baseline!important;
    //color: var(--bilibili-pink);
  }

  .bilibili-helper-2-icon-acghelper {
    padding: 0 4px;
    width: fit-content!important;
    //color: var(--bilibili-pink);
  }
  
  .button {
    .primary {
      .bilibili-helper-2-icon-bilibili, .bilibili-helper-2-icon-acghelper {
        color: var(--bilibili-gray);
      }
    }
    .border {
      .bilibili-helper-2-icon-bilibili, .bilibili-helper-2-icon-acghelper {
        color: var(--bilibili-pink);
      }
    }
    
  }
  
  @media (prefers-color-scheme: dark) {
    * {
      &::-webkit-scrollbar-thumb {
        background-color: black;
      }
    }
  }
`},11120:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.opacity=void 0,a.opacity={"paper-blue-grey-900":"#263238","dark-divider-opacity":"0.12","dark-disabled-opacity":"0.38","dark-secondary-opacity":"0.54","dark-primary-opacity":"0.87","light-divider-opacity":"0.12","light-disabled-opacity":"0.3","light-secondary-opacity":"0.7","light-primary-opacity":"1.0"}},37459:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.theme=a.baseFontSize=void 0;const p=r(13904),t=1e3,i=204;a.baseFontSize=12,a.theme={color:p.color,logoHeight:50,bodyMinWidth:t,headerHeight:0,sidebarWidth:i,mainWidth:t-i,baseFontSize:a.baseFontSize,fontFamily:p.fontFamily,fontSize:p.fontSize,rem:p.rem,textOverflow:p.textOverflow,transition:p.transition,boxShadow:p.boxShadow,marginTrim:p.marginTrim,hideScrollbar:p.hideScrollbar,opacity:p.opacity}},13904:function(e,a,r){var p=this&&this.__createBinding||(Object.create?function(e,a,r,p){void 0===p&&(p=r);var t=Object.getOwnPropertyDescriptor(a,r);t&&!("get"in t?!a.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return a[r]}}),Object.defineProperty(e,p,t)}:function(e,a,r,p){void 0===p&&(p=r),e[p]=a[r]}),t=this&&this.__exportStar||function(e,a){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(a,r)||p(a,e,r)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.hideScrollbar=a.marginTrim=a.transition=a.boxShadow=a.color=a.textOverflow=a.fontSize=a.fontFamily=a.rem=void 0;const l=i(r(32699)),o=r(635),n=i(r(74770)),f=r(39757);t(r(11120),a);const d=(e,a=16)=>e/a+"rem";a.rem=d;const c=(e="")=>o.css`
    font-family: ${l.default.isEmpty(e)?null:`'${e}',`} Cereal, "PingFang SC", "Microsoft YaHei", system, -apple-system, ".SFNSDisplay-Regular", HelveticaNeue, LucidaGrande, "Hiragino Sans GB", "sans-serif";
`;a.fontFamily=c;const s=(e=16)=>o.css`
    font-size: ${(0,a.rem)(e)};
`;a.fontSize=s;const b=(e=1)=>1===e?o.css`
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
`:o.css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${e};
    overflow: hidden;
`;a.textOverflow=b;const g=(e,a=1)=>f.colorValues[e]?(0,n.default)(f.colorValues[e]).alpha(a).rgb().string():void 0;a.color=g;const u=([...e])=>{const a=1,r="#000000",p=.5;let t="";for(let i in e){const{h:l,v:o,blur:f,spread:d,color:c=(0,n.default)(r).alpha(p).rgb().string(),inset:s=""}=e[i];t+=`${l*a}px ${o*a}px ${5*f}px ${5*d}px ${c} ${s},`}return o.css`
        box-shadow: ${t};
    `};a.boxShadow=u;const _=({target:e="all",duration:a=.3})=>o.css`transition: ${e} ${a}s;`;a.transition=_;const h=({direction:e="h",value:a=0})=>o.css`
  &:first-of-type {
    ${"h"===e?"margin-left:"+a:"v"===e?"margin-top: "+a:null};
    ${"all"===e?`margin-left:${a};margin-top:${a}`:null};
  }
  &:last-of-type {
    ${"h"===e?"margin-right:"+a:"v"===e?"margin-bottom: "+a:null};
    ${"all"===e?`margin-right:${a};margin-bottom:${a}`:null};
  }
`;a.marginTrim=h,a.hideScrollbar=o.css`
    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }
    & {
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
    }
`}},a={};function r(p){var t=a[p];if(void 0!==t)return t.exports;var i=a[p]={id:p,loaded:!1,exports:{}};return e[p].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,(()=>{var e=[];r.O=(a,p,t,i)=>{if(!p){var l=1/0;for(d=0;d<e.length;d++){for(var[p,t,i]=e[d],o=!0,n=0;n<p.length;n++)(!1&i||l>=i)&&Object.keys(r.O).every(e=>r.O[e](p[n]))?p.splice(n--,1):(o=!1,i<l&&(l=i));if(o){e.splice(d--,1);var f=t();void 0!==f&&(a=f)}}return a}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[p,t,i]}})(),(()=>{r.n=e=>{var a=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(a,{a}),a}})(),(()=>{r.d=(e,a)=>{for(var p in a)r.o(a,p)&&!r.o(e,p)&&Object.defineProperty(e,p,{enumerable:!0,get:a[p]})}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a)})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.j=365})(),(()=>{var e={365:0};r.O.j=a=>0===e[a];var a=(a,p)=>{var t,i,[l,o,n]=p,f=0;if(l.some(a=>0!==e[a])){for(t in o)r.o(o,t)&&(r.m[t]=o[t]);if(n)var d=n(r)}for(a&&a(p);f<l.length;f++)i=l[f],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},p=self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[];p.forEach(a.bind(null,0)),p.push=a.bind(null,p.push.bind(p))})(),(()=>{r.nc=void 0})();var p=r.O(void 0,[196,133,110,468],()=>r(5519));p=r.O(p)})();