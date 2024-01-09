(()=>{"use strict";var e={33721:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},99769:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},88170:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},76774:function(e,t,i){var a=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,o)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),o=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||a(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),o(i(88170),t),o(i(33721),t),o(i(99769),t)},97907:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MAX_BIND_NUMBER=void 0,t.MAX_BIND_NUMBER=5},40677:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CUSTOM_WHISPER_MESSAGE=void 0,t.CUSTOM_WHISPER_MESSAGE={FREE_NUMBER:3,MAX_NUMBER:15,FREE_MAX_LENGTH:30,VIP_MAX_LENGTH:500}},90741:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DYNAMIC_TYPE_MAP=t.DYNAMIC_NOTIFICATION_TYPE_MAP=t.DYNAMIC_NAME_MAP=t.ALL_DYNAMIC_TYPE_MAP=void 0,t.ALL_DYNAMIC_TYPE_MAP={ALL:268435455,REPOST:1,PIC:2,WORD:4,VIDEO:8,DRAMA:32,ARTICLE:64,MUSIC:256,BANGUMI:512,NONE:1024,H5_SHARE:2048,COMIC_SHARE:2049,PGC_BANGUMI:4097,FILM:4098,TV:4099,GUOCHUANG:4100,DOCUMENTARY:4101,LIVE_ROOM:4200,LIVE:4201,MEDIA_LIST:4300,CHEESE_SERIES:4302,CHEESE_UPDATE:4303,HOT:1e3,LIVE_PUSH:4308,COLLECTION:4310,SUBSCRIPTION:4311,QUICK:1001},t.DYNAMIC_NAME_MAP={[t.ALL_DYNAMIC_TYPE_MAP.REPOST]:"\u8f6c\u53d1",[t.ALL_DYNAMIC_TYPE_MAP.PIC]:"\u56fe\u7247",[t.ALL_DYNAMIC_TYPE_MAP.WORD]:"\u6587\u5b57",[t.ALL_DYNAMIC_TYPE_MAP.VIDEO]:"\u89c6\u9891",[t.ALL_DYNAMIC_TYPE_MAP.DRAMA]:"\u620f\u5267",[t.ALL_DYNAMIC_TYPE_MAP.ARTICLE]:"\u6587\u7ae0",[t.ALL_DYNAMIC_TYPE_MAP.MUSIC]:"\u97f3\u4e50",[t.ALL_DYNAMIC_TYPE_MAP.BANGUMI]:"\u756a\u5267",[t.ALL_DYNAMIC_TYPE_MAP.H5_SHARE]:"\u8bdd\u9898",[t.ALL_DYNAMIC_TYPE_MAP.COMIC_SHARE]:"\u6f2b\u753b",[t.ALL_DYNAMIC_TYPE_MAP.PGC_BANGUMI]:"\u756a\u5267",[t.ALL_DYNAMIC_TYPE_MAP.FILM]:"\u7535\u5f71",[t.ALL_DYNAMIC_TYPE_MAP.TV]:"\u7535\u89c6/\u7efc\u827a",[t.ALL_DYNAMIC_TYPE_MAP.GUOCHUANG]:"\u56fd\u521b",[t.ALL_DYNAMIC_TYPE_MAP.DOCUMENTARY]:"\u7eaa\u5f55\u7247",[t.ALL_DYNAMIC_TYPE_MAP.LIVE_ROOM]:"\u76f4\u64ad\u95f4",[t.ALL_DYNAMIC_TYPE_MAP.LIVE]:"\u76f4\u64ad",[t.ALL_DYNAMIC_TYPE_MAP.MEDIA_LIST]:"\u6536\u85cf\u5939",[t.ALL_DYNAMIC_TYPE_MAP.CHEESE_SERIES]:"\u8bfe\u7a0b",[t.ALL_DYNAMIC_TYPE_MAP.CHEESE_UPDATE]:"\u8bfe\u7a0b\u66f4\u65b0",[t.ALL_DYNAMIC_TYPE_MAP.HOT]:"\u70ed\u95e8",[t.ALL_DYNAMIC_TYPE_MAP.LIVE_PUSH]:"\u76f4\u64ad\uff08\u63a8\u9001\uff09",[t.ALL_DYNAMIC_TYPE_MAP.COLLECTION]:"\u5408\u96c6",[t.ALL_DYNAMIC_TYPE_MAP.SUBSCRIPTION]:"\u76f4\u64ad\uff08\u8ba2\u9605\uff09"},t.DYNAMIC_NOTIFICATION_TYPE_MAP=[{title:"\u5168\u90e8\uff08\u5305\u542b\u8f6c\u53d1\uff09",types:[t.ALL_DYNAMIC_TYPE_MAP.ALL]},{title:"\u56fe\u6587",types:[t.ALL_DYNAMIC_TYPE_MAP.PIC,t.ALL_DYNAMIC_TYPE_MAP.WORD]},{title:"UP\u6295\u7a3f\u89c6\u9891",types:[t.ALL_DYNAMIC_TYPE_MAP.VIDEO]},{title:"\u6536\u85cf\u5939\uff0c\u5408\u96c6",types:[t.ALL_DYNAMIC_TYPE_MAP.MEDIA_LIST,t.ALL_DYNAMIC_TYPE_MAP.COLLECTION]},{title:"\u4e13\u680f",types:[t.ALL_DYNAMIC_TYPE_MAP.ARTICLE]},{title:"\u76f4\u64ad",types:[t.ALL_DYNAMIC_TYPE_MAP.LIVE_ROOM,t.ALL_DYNAMIC_TYPE_MAP.LIVE,t.ALL_DYNAMIC_TYPE_MAP.LIVE_PUSH,t.ALL_DYNAMIC_TYPE_MAP.SUBSCRIPTION]},{title:"\u97f3\u4e50",types:[t.ALL_DYNAMIC_TYPE_MAP.MUSIC]},{title:"\u65e5\u756a\uff0c\u56fd\u521b",types:[t.ALL_DYNAMIC_TYPE_MAP.BANGUMI,t.ALL_DYNAMIC_TYPE_MAP.PGC_BANGUMI,t.ALL_DYNAMIC_TYPE_MAP.GUOCHUANG]},{title:"\u6f2b\u753b",types:[t.ALL_DYNAMIC_TYPE_MAP.COMIC_SHARE]},{title:"\u8bfe\u7a0b",types:[t.ALL_DYNAMIC_TYPE_MAP.CHEESE_SERIES,t.ALL_DYNAMIC_TYPE_MAP.CHEESE_UPDATE]},{title:"\u7535\u5f71",types:[t.ALL_DYNAMIC_TYPE_MAP.FILM]},{title:"\u7535\u89c6\u7efc\u827a",types:[t.ALL_DYNAMIC_TYPE_MAP.TV]},{title:"\u7eaa\u5f55\u7247",types:[t.ALL_DYNAMIC_TYPE_MAP.DOCUMENTARY]},{title:"\u5176\u4ed6\uff08\u8bdd\u9898\uff0c\u620f\u5267\uff0c\u5df2\u88ab\u5220\u9664\u5185\u5bb9\uff09",types:[t.ALL_DYNAMIC_TYPE_MAP.H5_SHARE,t.ALL_DYNAMIC_TYPE_MAP.COMIC_SHARE,t.ALL_DYNAMIC_TYPE_MAP.DRAMA,t.ALL_DYNAMIC_TYPE_MAP.NONE]}],t.DYNAMIC_TYPE_MAP=Object.assign({ALL:268435455,PIC:2,VIDEO:8,ARTICLE:64,BANGUMI:512},t.ALL_DYNAMIC_TYPE_MAP)},29010:function(e,t,i){var a=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,o)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),o=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||a(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),o(i(25867),t),o(i(74051),t),o(i(48969),t),o(i(97907),t),o(i(40677),t),o(i(76774),t),o(i(20078),t)},74051:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LIVE_FORMAT_NAME_MAP=t.LIVE_FORMATS_MAP=t.QUALITY_NAME_LIST=void 0,t.QUALITY_NAME_LIST=["4K","\u539f\u753bPRO","\u539f\u753b","\u84dd\u5149PRO","\u84dd\u5149","\u8d85\u6e05PRO","\u8d85\u6e05","\u9ad8\u6e05","\u6d41\u7545"],t.LIVE_FORMATS_MAP=[{qn:3e4,desc:"\u675c\u6bd4",hdr:!1},{qn:2e4,desc:"4K",hdr:!1},{qn:1e4,desc:"\u539f\u753b",hdr:!1},{qn:400,desc:"\u84dd\u5149",hdr:!0},{qn:250,desc:"\u8d85\u6e05",hdr:!0},{qn:150,desc:"\u9ad8\u6e05",hdr:!1},{qn:80,desc:"\u6d41\u7545",hdr:!1}],t.LIVE_FORMAT_NAME_MAP={3e4:"\u675c\u6bd4",2e4:"4K",1e4:"\u539f\u753b",400:"\u84dd\u5149",250:"\u8d85\u6e05",150:"\u9ad8\u6e05",80:"\u6d41\u7545"}},48969:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TEXT_EMOJI=void 0,t.TEXT_EMOJI=["(\u2312\u25bd\u2312)","\uff08\uffe3\u25bd\uffe3\uff09","(=\u30fb\u03c9\u30fb=)","(\uff40\u30fb\u03c9\u30fb\xb4)","(\u301c\uffe3\u25b3\uffe3)\u301c","(\uff65\u2200\uff65)","(\xb0\u2200\xb0)\uff89","(\uffe33\uffe3)","\u256e(\uffe3\u25bd\uffe3)\u256d","( \xb4_\u309d\uff40)","\u2190_\u2190","\u2192_\u2192","(<_<)","(>_>)","(;\xac_\xac)",'("\u2594\u25a1\u2594)/',"(\uff9f\u0414\uff9f\u2261\uff9f\u0434\uff9f)!?","\u03a3(\uff9f\u0434\uff9f;)","\u03a3( \uffe3\u25a1\uffe3||)","(\xb4\uff1b\u03c9\uff1b`)","\uff08/T\u0414T)/","(^\u30fb\u03c9\u30fb^ )","(\uff61\uff65\u03c9\uff65\uff61)","(\u25cf\uffe3(\uff74)\uffe3\u25cf)","\u03b5=\u03b5=(\u30ce\u2267\u2207\u2266)\u30ce","(\xb4\uff65_\uff65`)","(-_-#)","\uff08\uffe3\u3078\uffe3\uff09","(\uffe3\u03b5(#\uffe3) \u03a3","\u30fd(`\u0414\xb4)\uff89","(\u256f\xb0\u53e3\xb0)\u256f(\u2534\u2014\u2534","\uff08#-_-)\u252f\u2501\u252f","_(:3\u300d\u2220)_","( \u309c- \u309c)\u3064\u30ed","(*\xb0\u25bd\xb0*)\u516b(*\xb0\u25bd\xb0*)\u266a","\u273f\u30fd(\xb0\u25bd\xb0)\u30ce\u273f","(\xa63\u3010\u2593\u2593\u3011","\ub208_\ub208","(\u0ca1\u03c9\u0ca1)","_(\u2267\u2207\u2266\u300d\u2220)_","\u2501\u2501\u2501\u2211(\uff9f\u25a1\uff9f*\u5ddd\u2501","\u2727(\u2256 \u25e1 \u2256\u273f)","( \xb4\uff65\uff65)\uff89(._.`)","(\xba\ufe43\xba\xa0)","(\u0e51>\u0602<\u0e51\uff09","\uff61\uff9f(\uff9f\xb4\u0414\uff40)\uff9f\uff61","(\u2202\u03c9\u2202)","(\u252f_\u252f)","(\u30fb\u03c9< )\u2605","( \u0e51\u02ca\u2022\u0325\u25b5\u2022)\u0a6d\u208e\u208e","\xa5\u311f(\xb4\uff65\u1d17\uff65`)\u30ce\xa5","\u03a3_(\ua4aa\u0f40\ua4aa\u300d\u2220)_","\u0669(\u0e5b \u02d8 \xb3\u02d8)\u06f6\u2764","(\u0e51\u203e\u1dc5^\u203e\u1dc5\u0e51)","(\ua4aa\u2313\ua4aa)"]},25867:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SUPER_VIP_USER_IDENTITIES_KEY_LIST=t.VIP_USER_IDENTITIES_KEY_LIST=t.ALL_USER_IDENTITIES_KEY_LIST=t.USER_IDENTITIES_NAME_MAP=void 0,t.USER_IDENTITIES_NAME_MAP={superAdmin:"\u732b\u56fd\u8bbe\u8ba1\u5e08",admin:"\u732b\u56fd\u57ce\u7ba1",catForever:"\u732b\u56fd\u5927\u62a4\u6cd5",catVIPSuper:"\u52a9\u624b\u732b\u57f9\u80b2\u5e08",catVIP:"\u52a9\u624b\u732b\u89c2\u5bdf\u5458",catWatcher:"\u52a9\u624b\u732b\u77ad\u671b\u8005",catVIPHonor:"\u732b\u56fd\u8363\u8a89\u5e02\u6c11",catAirborneCommander:"\u7a7a\u964d\u6307\u6325\u5b98",catAirbornePilot:"\u55b5\u8425\u98de\u884c\u5458"},t.ALL_USER_IDENTITIES_KEY_LIST=["superAdmin","admin","catForever","catVIPSuper","catVIP","catWatcher"],t.VIP_USER_IDENTITIES_KEY_LIST=["superAdmin","admin","catForever","catVIP"],t.SUPER_VIP_USER_IDENTITIES_KEY_LIST=["superAdmin","admin","catForever"]},20078:(e,t)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.VIDEO_URL_TYPE_ID=t.VIDEO_FORMATS_MAP=void 0,t.VIDEO_FORMATS_MAP={0:"\u81ea\u52a8",15:"360P \u6d41\u7545",16:"360P \u6d41\u7545",32:"480P \u6e05\u6670",48:"720P \u9ad8\u6e05",64:"720P \u9ad8\u6e05",74:"720P60 \u9ad8\u6e05",80:"1080P \u9ad8\u6e05",112:"1080P \u9ad8\u7801\u7387",116:"1080P 60\u5e27",120:"4K \u8d85\u6e05",125:"HDR \u771f\u5f69",126:"\u675c\u6bd4\u89c6\u754c",127:"8K \u8d85\u9ad8\u6e05"},function(e){e["bv"]="bvid",e["av"]="aid",e["ep"]="epId",e["ss"]="ssId"}(i||(t.VIDEO_URL_TYPE_ID=i={}))},73972:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Point2=void 0;class i{constructor(...e){this.__valid=!1,this.__needUpdate=!0,this.set=(...e)=>{if(isNaN(+e[0])||isNaN(+e[1])){if(e[0]instanceof Array&&2===e[0].length)this.set(...e[0]);else if(e[0]instanceof i){const{x:t,y:i}=e[0];this.set(t,i)}}else this.__needUpdate=!0,this.x=+e[0],this.y=+e[1];return this},this.setX=e=>(this.x=e,this.__needUpdate=!0,this),this.setY=e=>(this.y=e,this.__needUpdate=!0,this),this.add=e=>(this.x+=e.x,this.y+=e.y,this),this.addX=e=>(this.x+=e,this),this.addY=e=>(this.y+=e,this),this.sub=e=>(this.x-=e.x,this.y-=e.y,this),this.subX=e=>this.addX(-e),this.subY=e=>this.addY(-e),this.multiply=e=>0===e?this.set(0,0):(this.x*=e,this.y*=e,this),this.multiplyX=e=>(0===e?this.x=1/0:this.x*=e,this),this.multiplyY=e=>(0===e?this.y=1/0:this.y*=e,this),this.divide=e=>0===e?this.set(1/0,1/0):this.multiply(1/e),this.divideX=e=>this.multiplyX(1/e),this.divideY=e=>this.multiplyY(1/e),this.dot=e=>this.x*e.x+this.y+e.y,this.equal=(...e)=>{if("number"===typeof e[0]&&"number"===typeof e[1])return e[0]===this.x&&e[1]===this.y;if(e[0]instanceof Array&&2===e.length)return this.equal(...e[0]);if(e[0]instanceof i){const{x:t,y:i}=e[0];return this.equal(t,i)}return!1},this.normalize=()=>{const e=Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));return this.divide(e)},this.negtiveX=()=>(this.x*=-1,this),this.negtiveY=()=>(this.y*=-1,this),this.negtive=()=>this.negtiveX().negtiveY(),this.round=()=>(this.x=Math.round(this.x),this.y=Math.round(this.y),this),this.roundX=()=>(this.x=Math.round(this.x),this),this.roundY=()=>(this.y=Math.round(this.y),this),this.floor=()=>(this.x=Math.floor(this.x),this.y=Math.floor(this.y),this),this.floorX=()=>(this.x=Math.floor(this.x),this),this.floorY=()=>(this.y=Math.floor(this.y),this),this.ceil=()=>(this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this),this.ceilX=()=>(this.x=Math.ceil(this.x),this),this.ceilY=()=>(this.y=Math.ceil(this.y),this),this.trunc=()=>(this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this),this.truncX=()=>(this.x=Math.trunc(this.x),this),this.truncY=()=>(this.y=Math.trunc(this.y),this),this.clone=()=>new this.constructor(this.x,this.y),this.toArray=()=>[this.x,this.y],this.toObject=()=>({x:this.x,y:this.y}),this.toString=(e="x",t="y")=>`${e}${this.x}${t}${this.y}`,this.set(...e)}get zero(){return new this.constructor(0,0)}get infinity(){return new this.constructor(1/0,1/0)}get NaN(){return new this.constructor(NaN,NaN)}get unit(){return new this.constructor(1,1)}get valid(){return this.__needUpdate&&(this.__valid=Number.isInteger(this.x)&&Number.isInteger(this.y),this.__needUpdate=!1),this.__valid}get area(){return this.x*this.y}}t.Point2=i},69426:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Position=void 0;const a=i(73972);class o extends a.Point2{constructor(...e){super(...e)}}t.Position=o},84601:function(e,t,i){var a=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,o)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&a(t,e,i);return o(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Initializing=void 0;const l=i(95947),s=i(18258),c=n(i(57689)),p=r(i(635)),d=i(78836),u=i(58383),h=i(47573),m=p.createGlobalStyle`
  html {
    width: fit-content;
  }

  body {
    position: relative;
    margin: 0;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: var(--paper-grey-900);
    }
  }
`,f=p.default.div`
  width: 400px;
  height: 500px;
  backdrop-filter: blur(4px);
  background-color: rgb(255 255 255 / 92%);
  opacity: 0;
  transition: opacity 0s .3s, z-index 0s .3s;
  z-index: -1;

  &.show {
    opacity: 1;
    z-index: 10;
    overflow: hidden;
  }

  .welcome {
    text-align: left;
    color: black;
    margin: 0 -1px 8px;
  }

  .logo {
    width: fit-content;
    color: var(--bilibili-pink);
  }

  .version {
    display: flex;
    justify-content: space-between;
    margin: 4px 0 0;
    text-align: right;
    color: var(--google-grey-500);

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  footer {
    position: absolute;
    bottom: 0;
    right: 12px;
    left: 12px;

    .description {
      font-size: 12px;
      color: var(--bilibili-pink);
      text-align: center;

      a {
        color: var(--bilibili-blue);
        cursor: pointer;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(33 33 33 / 10%);
    background-image: linear-gradient(0deg, #0e0e0e 0%, transparent);
    backdrop-filter: blur(10px);
    .welcome {
      color: #eee;
    }
  }
`,g=p.default.div`
  margin: 30% auto 0;
  width: min-content;
  text-align: center;
`,b=p.default.div`
  margin: 140px auto 0;
  width: fit-content;

  .button {
    margin: 12px 0;
    width: fit-content;
    min-width: 180px;
    height: 40px;
    line-height: 40px;

    button {
      line-height: 38px;
      font-size: 14px;
    }

    &.primary {
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
    }

    &.border {
      border: 1px solid #ddd;
      box-sizing: border-box;
    }
  }

  .bilibili-helper-2-icon-bilibili {
    width: 42px;
    line-height: 10px;
  }
`;class v extends c.default.Component{constructor(e){super(e),this.state={loginModalShow:!1},this.openPage=e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})},this.handleOnClickGoToOverview=()=>{this.openPage(chrome.runtime.getURL("/html/config.html"))},this.handleOnClickGoToWebsite=()=>{this.openPage("https://acghelper.com/")}}render(){return c.default.createElement(f,{className:"show"},c.default.createElement(d.GlobalStyle,null),c.default.createElement(m,null),c.default.createElement(g,null,c.default.createElement("p",{className:"welcome"},"\u611f\u8c22\u4f7f\u7528"),c.default.createElement(s.Icon,{className:"logo",icon:"acghelper",size:42}),c.default.createElement("p",{className:"version"},c.default.createElement("span",null,"\u5f53\u524d\u7248\u672c: ",u.version))),c.default.createElement(b,null,c.default.createElement(l.Button,{className:"primary"},c.default.createElement("div",null,"\u6b63\u5728\u542f\u52a8\u4e2d\uff0c\u8bf7\u7a0d\u5019"))))}}t.Initializing=v,v.contextType=h.MainStore},47573:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MainStore=void 0;const o=a(i(57689));t.MainStore=o.default.createContext({})},47905:function(e,t,i){var a=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,o)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&a(t,e,i);return o(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NeedUpgrade=void 0;const l=i(95947),s=i(18258),c=n(i(57689)),p=r(i(635)),d=i(78836),u=i(58383),h=i(47573),m=p.createGlobalStyle`
  html {
    width: fit-content;
  }

  body {
    position: relative;
    margin: 0;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: var(--paper-grey-900);
    }
  }
`,f=p.default.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  background-color: rgb(255 255 255 / 92%);
  opacity: 0;
  transition: opacity 0s .3s, z-index 0s .3s;
  z-index: -1;

  &.show {
    opacity: 1;
    z-index: 30;
    overflow: hidden;
  }

  .welcome {
    text-align: left;
    color: black;
    margin: 0 -1px 8px;
  }

  .logo {
    width: fit-content;
    color: var(--bilibili-pink);
  }

  .version {
    display: flex;
    justify-content: space-between;
    margin: 4px 0 0;
    text-align: right;
    color: var(--google-grey-500);

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  footer {
    position: absolute;
    bottom: 0;
    right: 12px;
    left: 12px;

    .description {
      font-size: 12px;
      color: var(--bilibili-pink);
      text-align: center;

      a {
        color: var(--bilibili-blue);
        cursor: pointer;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(33 33 33 / 10%);
    background-image: linear-gradient(0deg, #0e0e0e 0%, transparent);
    backdrop-filter: blur(10px);
    .welcome {
      color: #eee;
    }
  }
`,g=p.default.div`
  margin: 30% auto 0;
  width: min-content;
  text-align: center;
`,b=p.default.div`
  margin: 140px auto 0;
  width: fit-content;

  .button {
    margin: 12px 0;
    width: fit-content;
    min-width: 180px;
    height: 40px;
    line-height: 40px;

    button {
      line-height: 38px;
      font-size: 14px;
    }

    &.primary {
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
    }

    &.border {
      border: 1px solid #ddd;
      box-sizing: border-box;
    }
  }

  .bilibili-helper-2-icon-bilibili {
    width: 42px;
    line-height: 10px;
  }
`;class v extends c.default.Component{constructor(e){super(e),this.state={loginModalShow:!1},this.openPage=e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})},this.handleOnClickGoToOverview=()=>{this.openPage(chrome.runtime.getURL("/html/config.html"))},this.handleOnClickGoToWebsite=()=>{this.openPage("https://acghelper.com/")}}render(){return c.default.createElement(f,{className:"show"},c.default.createElement(d.GlobalStyle,null),c.default.createElement(m,null),c.default.createElement(g,null,c.default.createElement("p",{className:"welcome"},"\u611f\u8c22\u4f7f\u7528"),c.default.createElement(s.Icon,{className:"logo",icon:"acghelper",size:42}),c.default.createElement("p",{className:"version"},c.default.createElement("span",null,"\u5f53\u524d\u7248\u672c: ",u.version))),c.default.createElement(b,null,c.default.createElement(l.Button,{className:"primary",onClick:this.handleOnClickGoToWebsite},c.default.createElement("div",null,"\u7acb\u5373\u66f4\u65b0"))))}}t.NeedUpgrade=v,v.contextType=h.MainStore},99036:function(e,t,i){var a=this&&this.__rest||function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(i[a[o]]=e[a[o]])}return i},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Section=void 0;const r=o(i(57689)),n=o(i(635)),l=n.default.div`
  //padding: 10px 8px 0 10px;

  .section-content {
    display: grid;
    grid-row-gap: ${({rowGap:e})=>void 0===e?1:e}px;
    grid-column-gap: ${({columnsGap:e})=>void 0===e?1:e}px;
    //content-visibility: auto;
    //margin-bottom: 42px;
    //padding-top: 6px;
  }
`,s=n.default.h4`
  position: sticky;
  top: -10px;
  display: flex;
  margin: 0 -10px;
  padding: 4px 0 4px 10px;
  color: #3B3B3B;
  background-color: #f4f4f4;
  z-index: 2;

  b {
    margin: 0 4px;
    color: var(--bilibili-pink);
  }

  .more-btn {
    margin-left: auto;
    cursor: pointer;
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    user-select: none;
    //grid-column-end: span 2;
    color: #171717;
    overflow: hidden;

    .button {
      margin-bottom: 6px;
      cursor: pointer;

      .button-view {
        padding: 0 22px;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    color: #999999;
    background-color: #1f1f1f;
    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`;class c extends r.default.Component{constructor(e){super(e)}render(){const e=this.props,{children:t,title:i,columns:o,rowGap:n,columnsGap:c,footer:p,sectionRef:d}=e,u=a(e,["children","title","columns","rowGap","columnsGap","footer","sectionRef"]);return r.default.createElement(l,Object.assign({className:"section",rowGap:n,columnsGap:c,ref:d},u),i?r.default.createElement(s,{className:"section-title"},i):null,r.default.createElement("div",{className:"section-content",style:{gridTemplateColumns:`repeat(${o}, 1fr)`,gridColumnEnd:"span "+o}},t),p)}}t.Section=c,c.defaultProps={columns:1,rowGap:2,columnsGap:2}},58213:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.notifyNeedLogin=void 0;const o=i(56639),r=a(i(57689)),n=a(i(635)),l=i(32699),s=n.default.span`
  a {
    padding: 0 2px;
    color: var(--bilibili-pink);
    cursor: pointer;
  }
`,c=()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://passport.bilibili.com/login"})},p=(0,l.throttle)(()=>{o.Message.clearAll(),o.Message.error(r.default.createElement(s,null,"\u70b9\u51fb",r.default.createElement("a",{onClick:c},"\u767b\u5f55"),"B\u7ad9\u8d26\u53f7"),0)},300);t.notifyNeedLogin=p},52179:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(i(57689)),r=i(97326),n=i(78836),l=i(555),s=i(15552),c=i(84601);(0,l.injectLocalIconfont)("font_1690169_b4tjv3p6054");const p=document.getElementById("root"),d=(e,t)=>new Promise(i=>{chrome.runtime.sendMessage({target:"app",event:"getInitialStatus"},a=>{i(e<t?!!a&&!!a.initializedAll:!!a&&!!a.bilibiliHelperAccount)})}),u=6;let h=0,m=!1;const f=()=>new Promise(e=>{d(h,u).then(t=>{t?((0,l.initI18n)().then(()=>{(0,r.render)(o.default.createElement(o.default.Fragment,null,o.default.createElement(n.GlobalStyle,null),o.default.createElement(s.Popup,{initialized:!0})),p)}),e(!0)):h<u?(m||(m=!0,(0,r.render)(o.default.createElement(c.Initializing,null),p)),++h,setTimeout(f,1e3)):((0,l.initI18n)().then(()=>{(0,r.render)(o.default.createElement(o.default.Fragment,null,o.default.createElement(n.GlobalStyle,null),o.default.createElement(s.Popup,{initialized:!1})),p)}),e(!1))})});f()},89922:function(e,t,i){var a=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,o)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&a(t,e,i);return o(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=i(53507),s=i(83656),c=r(i(57689)),p=n(i(635)),d=i(47532),u=i(99036),h=i(47573),m=e=>["","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u65e5"][e],f=p.default.div.attrs({className:"popup-main-anime"})`
  padding: 0 !important;
  width: 100% !important;
  overflow: hidden;

  .section-btn-group {
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 4px;
    padding: 4px;
    background-color: #F4F4F4;

    .button {
      width: 100%;
      height: 20px;
      line-height: 20px;
      //background-color: var(--bilibili-blue);
      //color: var(--bilibili-gray);
      &.active {
        background-color: var(--paper-grey-300);
        color: var(--paper-grey-900);
      }

      button {
        line-height: 18px;
      }
    }
  }

  .section {
    position: absolute;
    top: 28px;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    scrollbar-width: thin;

    .section-content {
      .each-day {
        position: relative;
        margin-left: 2px;
        margin-right: 2px;
        padding-left: 0;
        box-sizing: border-box;
        //width: 190px;
        flex-shrink: 0;
        scroll-snap-align: start;
        //cursor: pointer;

        .topic {
          //position: sticky;
          //left: 0px;
          //display: inline-block;
          //margin-left: -10px;
          //padding-left: 10px;
          position: sticky;
          top: 0;
          height: 28px;
          z-index: 2;
          background-color: #f4f4f4;

          h5 {
            margin: 0 0 0 2px;
            font-size: 16px;
            color: #545454;
            line-height: 30px;
          }
        }

        .seasons {
          display: grid;
          grid-column-gap: 4px;
          grid-row-gap: 4px;
          //height: calc(100% - 30px);
          //margin-bottom: 30px;

          &::-webkit-scrollbar-thumb {
            visibility: visible;
          }

          .empty-day {
            margin-bottom: 8px;
            margin-left: 1px;
            font-size: 12px;
            font-weight: bold;
            opacity: 0.6;
          }
        }

        &.is-today {
          padding: 2px 0 6px;
          //border-top: 1px dashed var(--bilibili-pink);
          //border-bottom: 1px dashed var(--bilibili-pink);
          .topic h5 {
            color: var(--bilibili-pink);
          }

          .seasons {
            box-shadow: inset -2px 0 0px 0px var(--bilibili-pink);
            //background-color: rgb(251 114 153 / 0.1);
            //border-radius: 2px;
          }
        }
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .section-btn-group {
      background-color: #1f1f1f;

      .button {
        &.active {
          background-color: var(--paper-grey-800);
          color: var(--bilibili-gray);
        }
      }
    }

    .section .section-content .each-day .topic {
      background-color: #1f1f1f;
    }
  }
`,g=p.default.div`
  display: flex;
  padding: 4px;
  border-radius: 2px;
  cursor: pointer;
  //transition: background-color .2s;
  //margin-bottom: 6px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background-color: rgb(222 220 220 / 50%);
  }

  .avatar {
    position: relative;
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 2px;
    object-fit: cover;
    //cursor: pointer;
    overflow: hidden;

    .img {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      //transition: filter .2s;
    }

    .publish-time {
      position: absolute;
      bottom: 0;
      padding: 2px 3px;
      line-height: 12px;
      border-radius: 0 3px 0 0;
      background-color: rgb(0 0 0 / 60%);
      color: #fff;
      transform-origin: bottom left;
      transform: scale(0.8);
      z-index: 1;
    }
  }

  .info {
    display: inline-block;
    padding-left: 6px;
    width: calc(100% - 60px);
    vertical-align: top;

    h6, p {
      margin: 0;
      line-height: 14px;
      font-size: 12px;
      //cursor: pointer;
    }

    h6 {
      display: -webkit-box;
      max-height: 28px;
      font-weight: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    p {
      margin-top: 8px;
      color: #666;
    }
  }

  &.follow {
    .avatar img {
      border: 2px solid var(--bilibili-pink);
    }
  }

  &.is-published {
    .info p {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgb(0 0 0 / 0.5);

      .avatar {
        .img {
          //filter: brightness(1);
        }
      }
    }

    .avatar {
      .img {
        //filter: brightness(.8);
      }
    }

    .info {
      h6 {
        color: #aaa;
      }
    }
  }
`,b=function({square_cover:e,pub_index:t,ep_id:i,pub_time:a,title:o,url:r,follow:n,is_published:l,delay:p,delay_reason:d}){const{createTab:u}=(0,c.useContext)(h.MainStore),m=c.default.useCallback(e=>{if(i&&l){const t=`https://www.bilibili.com/bangumi/play/ep${i}/`;u(e,t)}else u(e,r);chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_time_table",action:"click_category_item",label:o})},[r,i]);return c.default.createElement(g,{className:[n?"follow":"",l?"is-published":null].filter(Boolean).join(" "),onClick:m,onAuxClick:m},c.default.createElement("div",{className:"avatar"},c.default.createElement(s.Image,{url:e+"@100w_100h.webp",sign:o}),c.default.createElement("div",{className:"publish-time"},a)),c.default.createElement("div",{className:"info"},c.default.createElement("h6",null,o),c.default.createElement("p",null,p?d:t)))};class v extends c.default.Component{constructor(e){super(e),this.getTimelineData=()=>{chrome.runtime.sendMessage({target:"mainAnime",event:"getAnimaTimeline"},e=>{e&&this.setState({timeline:e||[]},()=>{const e=document.getElementById("todayAnime");e&&(e.parentNode.parentNode.scrollTop=e.offsetTop)})})},this.getTimelineCNData=()=>{chrome.runtime.sendMessage({target:"mainAnime",event:"getAnimaTimelineCN"},e=>{e&&this.setState({timelineCN:e||[]},()=>{const e=document.getElementById("todayAnime");e&&(e.parentNode.parentNode.scrollTop=e.offsetTop)})})},this.handleOnClickTypeButton=e=>{const{type:t,timelineCN:i}=this.state;t!==e&&(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_time_table",action:"click_category",label:e}),this.setState({type:e},()=>{if(0===i.length)this.getTimelineCNData();else{const e=document.getElementById("todayAnime");e&&(e.parentNode.parentNode.scrollTop=e.offsetTop)}}))},this.state={type:"global",timeline:[],timelineCN:[]}}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/animeTable"}),this.getTimelineData()}render(){const{timeline:e,timelineCN:t,type:i}=this.state,{columns:a}=this.context,o="global"===i?e:t;return c.default.createElement(f,null,c.default.createElement("div",{className:"section-btn-group"},c.default.createElement(l.Button,{className:"global"===i?"active":"",onClick:()=>this.handleOnClickTypeButton("global")},"\u65e5\u756a"),c.default.createElement(l.Button,{className:"cn"===i?"active":"",onClick:()=>this.handleOnClickTypeButton("cn")},"\u56fd\u521b")),c.default.createElement(u.Section,null,o.map(e=>{const{date:t,day_of_week:i,is_today:o,is_yesterday:r=!1,seasons:n}=e,l=m(i);return c.default.createElement("div",{key:t,id:o?"todayAnime":"",className:["each-day",o?"is-today":null,r?"is-yesterday":null].filter(Boolean).join(" ")},c.default.createElement("div",{className:"topic"},c.default.createElement("h5",null,"\u5468"+l," ",t.split("-").join("\u6708"),"\u65e5")),c.default.createElement("div",{className:"seasons",style:{gridTemplateColumns:`repeat(${a}, 1fr)`}},n.map(e=>c.default.createElement(b,Object.assign({key:e.ep_id||e.season_id},e))),0===n.length?c.default.createElement("div",{className:"empty-day"},"\u5f53\u5929\u6ca1\u6709\u756a\u5267\u653e\u9001"):null))})))}}v.contextType=h.MainStore,t["default"]=(0,d.withRouter)(v)},17283:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(53507),r=a(i(57689)),n=i(47532),l=a(i(635)),s=i(99036),c=i(47573),p=l.default.div.attrs({className:"popup-main-anime"})`
  padding: 0 !important;
  width: 100% !important;
  overflow: hidden;

  .section-btn-group {
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 4px;
    padding: 4px;
    background-color: #F4F4F4;

    .button {
      width: 100%;
      height: 20px;
      line-height: 20px;
      //background-color: var(--bilibili-blue);
      //color: var(--bilibili-gray);
      &.active {
        background-color: var(--paper-grey-300);
        color: var(--paper-grey-900);
      }

      button {
        line-height: 18px;
      }
    }
  }

  .section {
    position: absolute;
    top: 28px;
    right: 0;
    bottom: 0;
    left: 0;
    padding-bottom: 40px;
    overflow: auto;

    .section-title {
      top: 28px;
      display: flex;
      width: 100%;

      .more-btn {
        cursor: pointer;
        margin-left: auto;
      }
    }

    .section-content {
      min-height: 200px;
    }
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    user-select: none;
    //grid-column-end: span 2;
    color: #171717;
    overflow: hidden;

    .button {
      margin-bottom: 6px;
      cursor: pointer;

      .button-view {
        padding: 0 22px;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .section-btn-group {
      background-color: #1f1f1f;

      .button {
        &.active {
          background-color: var(--paper-grey-800);
          color: var(--bilibili-gray);
        }
      }
    }

    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`,d=l.default.div`
  display: flex;
  padding: 4px;
  //height: 58px;
  border-radius: 2px;
  cursor: pointer;
  //transition: background-color .2s;
  //content-visibility: auto;
  //contain-intrinsic-size: 0 58px;

  &:hover {
    background-color: rgb(222 220 220 / 50%);
  }

  .cover {
    position: relative;
    flex-shrink: 0;
    border-radius: 2px;

    .img {
      display: block;
      width: 80px;
      //height: 62.5px;
      border-radius: 2px;
      //transition: filter .2s;
    }

    .badge {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0 3px;
      border-radius: 2px;
      background-color: var(--bilibili-pink);
      color: var(--bilibili-gray);
      zoom: .8;
      //opacity: 0;
    }
  }

  .info {
    flex-grow: 1;
    margin-left: 6px;
    display: flex;
    flex-direction: column;

    .title {
      margin: 0;
      color: var(--paper-grey-900);
      line-height: 14px;
      font-size: 12px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }

    .progress {
      margin: 0;
      color: var(--paper-grey-600);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;

      &.unwatch {
        color: var(--bilibili-pink);
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgb(0 0 0 / 0.5);

      .img {
        filter: brightness(1);
      }
    }

    .img {
      filter: brightness(.8);
    }

    .info {
      .title {
        color: var(--bilibili-gray);
      }
    }
  }
`;class u extends r.default.Component{constructor(e){super(e),this.state={type:1,dataList:[{list:[],pn:1,hasMore:!0},{list:[],pn:1,hasMore:!0},{list:[],pn:1,hasMore:!0},{list:[],pn:1,hasMore:!0}]},this.listRef=r.default.createRef(),this.bottomObserverRef=r.default.createRef(),this.loadDataByType=(e=20)=>new Promise(t=>{const{dataList:i,type:a}=this.state;i[a-1].hasMore&&chrome.runtime.sendMessage({target:"mainAnime",event:"getFeedData",type:a,pn:i[a-1].pn,ps:e},o=>{o?(i[a-1].list.push(...o),i[a-1].pn+=1,o.length<e&&(i[a-1].hasMore=!1),this.setState({dataList:i},()=>t())):t()})}),this.handleOnClickGoToAnimePage=(e,t,i)=>{const{type:a}=this.state;chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_followed",action:"click_category_item",label:`${a}_${i}`}),this.context.createTab(e,"https://www.bilibili.com/bangumi/play/ss"+t)},this.handleOnClickTypeButton=e=>{const{type:t}=this.state;t!==e&&(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_followed",action:"click_category",label:e}),this.setState({type:e}))}}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/subscribed"}),this.loadDataByType().then(()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{const{dataList:i,type:a}=this.state;i[a-1].hasMore&&e.length&&e[0].intersectionRatio&&this.loadDataByType()},{root:this.listRef.current}),this.observer.observe(this.bottomObserverRef.current))})}render(){const{dataList:e,type:t}=this.state,{columns:i}=this.context;return r.default.createElement(p,{ref:this.listRef},r.default.createElement("div",{className:"section-btn-group"},r.default.createElement(o.Button,{className:1===t?"active":"",onClick:()=>this.handleOnClickTypeButton(1)},"\u65e5\u756a"),r.default.createElement(o.Button,{className:4===t?"active":"",onClick:()=>this.handleOnClickTypeButton(4)},"\u56fd\u521b"),r.default.createElement(o.Button,{className:2===t?"active":"",onClick:()=>this.handleOnClickTypeButton(2)},"\u5f71\u89c6"),r.default.createElement(o.Button,{className:3===t?"active":"",onClick:()=>this.handleOnClickTypeButton(3)},"\u7eaa\u5f55\u7247")),r.default.createElement(s.Section,{columns:i,rowGap:0,columnsGap:4,footer:r.default.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},e[t-1].hasMore&&e[t-1].list.length>0?r.default.createElement(o.Button,{className:"border",onClick:()=>this.loadDataByType()},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},e[t-1].list.length>0?e[t-1].list.map((e,t)=>{const{badge:i,title:a,season_id:n,cover:l,new_ep:s,progress:c}=e;return r.default.createElement(d,{key:t,onClick:e=>this.handleOnClickGoToAnimePage(e,n,t),onAuxClick:e=>this.handleOnClickGoToAnimePage(e,n,t)},r.default.createElement("div",{className:"cover"},r.default.createElement(o.Image,{url:s.cover||l}),i?r.default.createElement("span",{className:"badge"},i):null),r.default.createElement("div",{className:"info"},r.default.createElement("p",{className:"title"},a),s?r.default.createElement("p",{className:["progress",s.is_new>0?"unwatch":""].filter(Boolean).join(" ")},s.index_show):null,c?r.default.createElement("p",{className:"progress"},c.index_show):null))}):r.default.createElement("div",{style:{padding:"0 8px"}},"\u6ca1\u6709\u8ba2\u9605\u4fe1\u606f")))}}u.contextType=c.MainStore,t["default"]=(0,n.withRouter)(u)},40209:function(e,t,i){var a=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,o)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&a(t,e,i);return o(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BilibiliWebsiteMap=void 0;const l=i(56289),s=i(47573),c=r(i(57689)),p=n(i(635)),d=p.default.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 3px 3px 3px;
  display: flex;
  flex-direction: column;
  background-color: rgb(255 255 255 / 75%);
  backdrop-filter: blur(10px);
  z-index: 5;
  visibility: hidden;
  overflow: auto;
  transform: translate(10px, 0px);
  transition: transform 0.1s ease 0s, opacity 0.2s ease 0s, visibility 0s ease 0.3s;
  opacity: 0;

  &.show {
    visibility: visible;
    transform: translate(0px, 0px);
    transition: transform 0.2s ease 0s, visibility 0.3s ease 0s, opacity 0.1s ease 0s;
    opacity: 1;
  }

  .topic {
    margin: 18px 22px 12px;
    font-size: 24px;
    font-weight: 300;
  }

  .link-grid {
    padding-bottom: 30px;
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(70px, 4fr));
    grid-template-rows: repeat(auto-fill, minmax(40px, 1fr));
    overflow: auto;

    .website-link {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      border: 1px solid transparent;
      border-radius: 2px;
      text-decoration: none;
      background-color: transparent;
      color: #000;
      cursor: pointer;

      :hover {
        background-color: var(--bilibili-blue);
        border-color: rgb(0, 156, 214);
        color: var(--bilibili-gray);
      }
    }
  }


  @media (prefers-color-scheme: dark) {
    background-color: rgb(0 0 0 / 75%);
    .link-grid {
      .website-link {
        color: #fff;

        :hover {
          background-color: rgb(22, 147, 192);
          border-color: rgb(0, 97, 133);
        }
      }
    }
  }
`,u=({name:e,link:t})=>{const{createTab:i}=(0,c.useContext)(s.MainStore),a=(0,c.useCallback)(a=>{i(a,t),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_website_link",label:e})},[t]);return c.default.createElement("a",{key:e,className:"website-link",onAuxClick:a,onClick:a},e)},h=({show:e=!1})=>{const[t,i]=(0,c.useState)(!1),{setHideWebsiteMap:a}=(0,c.useContext)(s.MainStore),o=(0,c.useCallback)(()=>{i(!1),a()},[]);return(0,c.useEffect)(()=>{i(e)},[e]),c.default.createElement(d,{className:t?"show":null,onMouseLeave:o},c.default.createElement("h3",{className:"topic"},"\u7ad9\u70b9\u5730\u56fe"),c.default.createElement("div",{className:"link-grid"},Object.entries(l.WEBSITE_MAP).map(([e,t],i)=>c.default.createElement(u,{key:i,name:e,link:t}))))};t.BilibiliWebsiteMap=h},56289:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WEBSITE_MAP=void 0,t.WEBSITE_MAP={\u756a\u5267:"https://www.bilibili.com/anime/",\u56fd\u521b:"https://www.bilibili.com/guochuang/",\u7535\u5f71:"https://www.bilibili.com/movie/",\u7535\u89c6\u5267:"https://www.bilibili.com/tv/",\u7eaa\u5f55\u7247:"https://www.bilibili.com/documentary/",\u8bfe\u5802:"https://www.bilibili.com/cheese/",\u516c\u5f00\u8bfe:"https://www.bilibili.com/mooc",\u52a8\u753b:"https://www.bilibili.com/v/douga/",\u97f3\u4e50:"https://www.bilibili.com/v/music/",\u821e\u8e48:"https://www.bilibili.com/v/dance/",\u6e38\u620f:"https://www.bilibili.com/v/game/",\u77e5\u8bc6:"https://www.bilibili.com/v/knowledge/",\u79d1\u6280:"https://www.bilibili.com/v/tech/",\u8fd0\u52a8:"https://www.bilibili.com/v/sports",\u6c7d\u8f66:"https://www.bilibili.com/v/car",\u751f\u6d3b:"https://www.bilibili.com/v/life",\u7f8e\u98df:"https://www.bilibili.com/v/food",\u52a8\u7269\u5708:"https://www.bilibili.com/v/animal",VLOG:"https://www.bilibili.com/v/life/daily/",\u9b3c\u755c:"https://www.bilibili.com/v/kichiku/",\u65f6\u5c1a:"https://www.bilibili.com/v/fashion",\u5a31\u4e50:"https://www.bilibili.com/v/ent/",\u5f71\u89c6:"https://www.bilibili.com/v/cinephile",\u65b0\u6b4c\u70ed\u699c:"https://www.bilibili.com/v/musicplus/",\u5168\u533a\u6392\u884c\u699c:"https://www.bilibili.com/v/popular/rank/all",\u6d3b\u52a8\u4e2d\u5fc3:"https://www.bilibili.com/blackboard/activity-list.html",\u793e\u533a\u4e2d\u5fc3:"https://www.bilibili.com/blackboard/activity-5zJxM3spoS.html",\u5c0f\u9ed1\u5c4b:"https://www.bilibili.com/blackroom/ban",\u98ce\u7eaa\u59d4\u5458\u4f1a:"https://www.bilibili.com/judgement/index",\u7efc\u827a:"https://www.bilibili.com/variety/",\u6e38\u620f\u4e2d\u5fc3:"https://game.bilibili.com/platform",\u8d5b\u4e8b:"https://www.bilibili.com/v/game/match/",\u996d\u76d2:"https://workshop.bilibili.com/homepage",\u76f8\u7c3f:"https://h.bilibili.com/"}},40793:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(i(57689)),r=i(51920),n=a(i(635)),l=i(47532),s=a(i(56058)),c=i(99036),p=i(47573),d=n.default.div`
  //.topic {
  //  margin-top: 0;
  //  margin-bottom: 6px;
  //  margin-left: -10px;
  //  padding: 4px 0 4px 10px;
  //  font-size: 12px;
  //  color: #3B3B3B;
  //  position: sticky;
  //  top: -10px;
  //  z-index: 2;
  //  background-color: #f4f4f4;
  //}

  .topic {
    display: flex;
    margin: 0;
    color: #3B3B3B;

    b {
      margin: 0 4px;
      color: var(--bilibili-pink);
    }

    .more-btn {
      margin-left: auto;
      cursor: pointer;
    }
  }

  @media (prefers-color-scheme: dark) {
    .topic {
      color: #999999;
      background-color: #1f1f1f;
    }
  }
`,u=n.default.div.attrs({className:"popup-main-home"})`
  position: relative;
  display: grid;
  //grid-template-columns: repeat(auto-fill, 196px);
  //grid-template-rows: repeat(auto-fill, 135px);
  //grid-column-gap: 12px;
  grid-template-columns: 1fr;
  grid-row-gap: 12px;
  margin-bottom: 42px;

  &::-webkit-scrollbar {
    width: 3px;
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

  .carousel {
    margin-left: -10px;
    width: calc(100% + 20px);
    height: 92px;
    overflow: hidden;

    img:not([src]) {
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0 0 0 / 10%);
    }
  }

  .LazyLoad {
    min-height: 149px;
  }

  .section-content {
    //padding-top: 6px;
    .recent-read-position {
      text-align: center;
      padding: 16px 0;
      pointer-events: none;
    }
  }

  .data-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    font-size: 12px;
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: -280px auto 20px;
    padding-top: 300px;
    height: 42px;
    text-align: center;
    user-select: none;
    //grid-column-end: span 2;
    color: #171717;
    overflow: hidden;

    .button {
      margin-bottom: 6px;
      cursor: pointer;

      .button-view {
        padding: 0 22px;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    &::-webkit-scrollbar-thumb {
      background-color: black;
    }

    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`,h=n.default.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
`,m=n.default.div`
  position: sticky;
  bottom: 40px;
  right: 0px;
  height: auto;
  display: flex;
  flex-direction: column;
  float: right;
  text-align: center;
  z-index: 1;
  opacity: 0;
  transition: opacity .3s, visibility .3s;
  visibility: hidden;
  
  &.show {
    opacity: 0.4;
    visibility: visible;
    
    :hover {
      opacity: 1;
      visibility: visible;
    }
  }
`,f=(0,n.default)(r.Button)`
  padding: 4px;
  width: 32px;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;

  & + & {
    margin-top: 8px;
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    min-width: 30px;
    font-size: 12px;
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(20 20 20);
    border-color: var(--google-grey-700);
    color: var(--bilibili-gray);
  }
`,g=n.default.div`
  margin-bottom: -12px;
  width: auto;
  overflow: auto;

  .list {
    display: flex;
    margin-top: 6px;
    width: 100%;
    overflow: auto;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`,b=n.default.a`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  margin: 0 2.5px;
  padding: 4px 1px;
  width: 50px;
  border: 1px solid transparent;
  border-radius: 2px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color .2s;
  //content-visibility: print;
  //contain-intrinsic-size: 54px 0;
  //will-change: scroll-position;

  &:hover {
    background-color: rgba(255, 255, 255);
  }

  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50px;
  }

  .user-name {
    overflow: hidden;
    //text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    width: 114%;
    word-break: break-all;
    color: var(--paper-grey-900);
    text-align: center;
    zoom: 0.8;
  }

  @media (prefers-color-scheme: dark) {
    .user-name {
      color: var(--paper-grey-100);
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`,v=(n.default.div`
  display: flex;
  align-items: center;

  .button {
    height: 22px;
  }
`,n.default.div`
  display: flex;
`),y=n.default.section`
  margin-left: 8px;
  cursor: pointer;
  font-weight: normal;
  opacity: .8;

  :first-child {
    margin-left: 0;
  }

  &.active {
    font-weight: bold;
    opacity: 1;
  }
`,x=s.default.get("mainHome-config")||{};let k=s.default.get("popupScrollPosition")||{};const w=!!k.type;class _ extends o.default.Component{constructor(e){super(e),this.initedScrollPosition=!1,this.state={liveList:[],livingCount:0,carousel:[],videoType:(null===k||void 0===k?void 0:k.type)||(x?x.videoType:"recentVideo"),rememberRecentReadPosition:!x||x.rememberRecentReadPosition,offsetDynamicId:0,videoList:[],recentVideoList:[],hotVideoList:[],hotVideoListPageNumber:1,hasMoreVideos:!0,adMap:[],loading:!1,showGoTopButton:!1,newListLength:0},this.hotVideoIdMap=[],this.contentType="recentVideo",this.videoListRef=o.default.createRef(),this.firstPageRefRef=o.default.createRef(),this.bottomObserverRef=o.default.createRef(),this.dynamicInitLoaded=!1,this.hotInitLoaded=!1,this.handleOnToggleVideoType=e=>{this.setState({videoType:e},()=>{this.handleOnClickGoTopButton()})},this.handleOnClickGetRefreshDynamicList=()=>{this.setState({newListLength:0,recentVideoList:[]},()=>{this.getDynamic(0,!0,!1),this.dynamicInitLoaded=!0})},this.getNewHotVideos=(e=!1,t=!1)=>{const{hotVideoList:i}=this.state;return new Promise(a=>{chrome.runtime.sendMessage({target:"mainHome",event:"getNewHotVideos",clearCache:e,continuous:t},e=>{if(e){const t=e.map(e=>{if(!this.hotVideoIdMap.includes(e.aid))return e}).filter(Boolean);i.push(...t),this.setState({hotVideoList:i,loading:!1},()=>{a()})}else a()})}).then(()=>{let{scrollPosition:e=0}=s.default.get("popupScrollPosition")||{};e&&!this.initedScrollPosition&&(this.initedScrollPosition=!0,this.setState({videoType:"home"},()=>{this.hotInitLoaded||this.videoListRef.current.scrollTo(0,+e)}))})},this.getDynamic=(e=this.state.offsetDynamicId,t=!1,i=!0)=>{const{recentVideoList:a,adMap:o}=this.state;return new Promise(o=>{chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getDynamic",offsetDynamicId:e,typeList:[8],clearCache:t,continuous:i},e=>{var t;if(e){const{hasMore:i,offsetDynamicId:n}=e;0===(null===(t=e.cards)||void 0===t?void 0:t.length)&&r.Message.error("\u7f51\u7edc\u9519\u8bef\u6216\u8bf7\u6c42\u9891\u7387\u8fc7\u9ad8, \u8bf7\u7a0d\u540e\u518d\u8bd5"),a.push(...e.cards),this.setState({hasMoreVideos:i,recentVideoList:a,offsetDynamicId:n,loading:!1},()=>{o()})}else this.setState({hasMoreVideos:!1,recentVideoList:[],offsetDynamicId:0,loading:!1},()=>{o()})})}).then(()=>{const{scrollPosition:e=0}=s.default.get("popupScrollPosition")||{};e&&!this.initedScrollPosition&&(this.initedScrollPosition=!0,this.setState({videoType:"recentVideo"},()=>{this.dynamicInitLoaded||this.videoListRef.current.scrollTo(0,+e)}))})},this.getLiveList=()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/polymer/web-dynamic/v1/portal",options:{contentType:"json"}},({data:e})=>{e&&e.data&&e.data.live_users&&e.data.live_users.items.length>0&&this.setState({liveList:e.data.live_users.items,livingCount:e.data.live_users.count})})},this.handleOnClickVideoCover=(e,t,i)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_video",label:i}),e.preventDefault(),e.stopPropagation(),this.context.createTab(e,"https://www.bilibili.com/video/"+t)},this.handleOnClickMoreLiving=()=>{this.props.history.push("/live")},this.handleOnClickOpenLive=(e,t,i)=>{e.stopPropagation(),e.preventDefault(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_living_list",label:i}),this.context.createTab(e,t)},this.handleOnClickGoTopButton=()=>{this.videoListRef.current&&(this.videoListRef.current.scrollTo(0,0),this.setState({showGoTopButton:!1})),chrome.runtime.sendMessage({target:"mainHome",event:"clearPopupScrollPosition"}),this.clearCache()},this.clearCache=()=>{"recentVideo"===this.state.videoType?chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"clearCache"}):"home"===this.state.videoType&&chrome.runtime.sendMessage({target:"mainHome",event:"clearCache"})},this.getContinuousHotVideos=()=>this.getNewHotVideos(!1,!0),this.getContinuousDynamicVideos=()=>this.getDynamic(this.state.offsetDynamicId,!1,!0)}componentDidMount(){if(this.videoListRef.current){const e=this.videoListRef.current;let t=0,i=!1;e.addEventListener("wheel",a=>{clearTimeout(t),t=setTimeout(()=>{let t=Number(e.scrollTop);t<=150&&!i&&(chrome.runtime.sendMessage({target:"mainHome",event:"clearPopupScrollPosition"}),i=!0,this.clearCache()),t>76&&(t-=76,i=!1,s.default.set("popupScrollPosition",{type:this.state.videoType,scrollPosition:t,t:Date.now()}))},50)})}chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/home"}),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getNewList"},e=>{e&&e.length&&this.setState({newListLength:e.length}),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"clearNewList"})});const e=s.default.get("mainHome-config")||{},t=!e||!!e.showLiveBar;this.setState({showLiveBar:t}),t&&this.getLiveList(),this.videoListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{const{loading:i}=this.state,a=setTimeout(()=>{this.setState({loading:!1})},1e4);e.length&&e[0].intersectionRatio>0&&!i?(this.setState({loading:!0}),this.state.hasMoreVideos&&"recentVideo"===this.state.videoType?this.getDynamic(this.state.offsetDynamicId,!this.dynamicInitLoaded&&!w,this.dynamicInitLoaded).then(()=>{this.dynamicInitLoaded=!0,clearTimeout(a)}):"home"===this.state.videoType&&this.getNewHotVideos(!this.hotInitLoaded&&!w,this.hotInitLoaded).then(()=>{this.hotInitLoaded=!0,clearTimeout(a)})):this.state.hasMoreVideos},{root:this.videoListRef.current,threshold:[0,.5,1]}),this.observer.observe(this.bottomObserverRef.current),this.firstPageRefRef.current&&new IntersectionObserver(e=>{const t=e[0],{hotVideoList:i,recentVideoList:a,videoType:o}=this.state;if(t.intersectionRatio<.3)this.setState({showGoTopButton:!0});else{const e="home"===o?i:a;e.length>0&&chrome.runtime.sendMessage({target:"mainHome",event:"clearPopupScrollPosition"}),this.setState({showGoTopButton:!1})}},{root:this.videoListRef.current,threshold:[.3]}).observe(this.firstPageRefRef.current))}componentDidUpdate(e,t,i){return t.adMap.length!==this.state.adMap.length||t.liveList.length!==this.state.liveList.length||t.recentVideoList.length!==this.state.recentVideoList.length}renderLiveList(){const{liveList:e,livingCount:t,showLiveBar:i}=this.state,{columns:a}=this.context;return i&&t>0?o.default.createElement(g,{style:{gridColumnEnd:"span "+a}},o.default.createElement("h4",{className:"topic"},"\u6b63\u5728\u76f4\u64ad",o.default.createElement("b",null,t),"\u4eba",o.default.createElement("span",{className:"more-btn",onClick:this.handleOnClickMoreLiving},"\u67e5\u770b\u5168\u90e8")),o.default.createElement("div",{className:"list"},e.map((e,t)=>o.default.createElement(b,{key:e.uid,onClick:i=>this.handleOnClickOpenLive(i,e.jump_url,t),onAuxClick:i=>this.handleOnClickOpenLive(i,e.jump_url,t)},o.default.createElement(r.Image,{className:"user-avatar",url:e.face}),o.default.createElement("span",{className:"user-name"},e.uname))))):null}renderVideoListTitle(){const{videoType:e}=this.state;return o.default.createElement(v,null,o.default.createElement(y,{className:"recentVideo"===e?"active":null,onClick:()=>this.handleOnToggleVideoType("recentVideo")},"\u6700\u8fd1\u6295\u7a3f"),o.default.createElement(y,{className:"home"===e?"active":null,onClick:()=>this.handleOnToggleVideoType("home")},"\u9996\u9875\u63a8\u8350"))}renderVideoCard(e,t){const{videoCardType:i,columns:a}=this.context,{videoType:n}=this.state,{dynamicInfo:l,videoInfo:s,userInfo:c}=t,p=r.VideoClassMap[i];if(t.isAD)return null;switch("home"===n&&(t.type=8),t.type){case"recentReadPosition":return o.default.createElement("div",{className:"recent-read-position",style:{gridColumnEnd:"span "+a}},"\u4ee5\u4e0b\u662f\u66f4\u65e9\u524d\u7684\u5185\u5bb9");case 8:return o.default.createElement(p,{key:(null===l||void 0===l?void 0:l.dynamicIdStr)||s.aid,isSpecialAttention:t.isSpecialAttention,userInfo:c,videoInfo:s,onClickCover:t=>this.handleOnClickVideoCover(t,s.bvid,e),showTag:this.context.showTag});case 1:return o.default.createElement(r.RepostCard,Object.assign({key:l.dynamicIdStr},t));default:return o.default.createElement("section",{key:l.dynamicIdStr},"\u672a\u517c\u5bb9\u7c7b\u578b:"+t.type)}}renderVideoList(){const{columns:e,bilibiliAccount:t,createTab:i}=this.context,{videoType:a,recentVideoList:n,hotVideoList:l,loading:s}=this.state,c="home"===a?l:n;return c?c.length>0?c.map((e,t)=>this.renderVideoCard(t,e)):t&&!t.hasLogin?o.default.createElement("div",{style:{gridColumnEnd:"span "+e}},o.default.createElement(r.Button,{onClick:e=>i(e,"https://passport.bilibili.com/login?from=bilibili-helper",{active:!0})},"\u672a\u53d1\u73b0\u5df2\u767b\u5f55\u7684B\u7ad9\u8d26\u53f7\uff0c\u70b9\u51fb\u767b\u5f55")):s?o.default.createElement("div",{className:"data-loading"},"\u6570\u636e\u83b7\u53d6\u4e2d\uff0c\u8bf7\u7a0d\u7b49..."):void 0:"\u6ca1\u6709\u89c6\u9891\u6570\u636e"}renderVideoSection(){const{columns:e}=this.context,{hasMoreVideos:t,recentVideoList:i,hotVideoList:a,videoType:n}=this.state;let l;return l="home"===n?this.getContinuousHotVideos:this.getContinuousDynamicVideos,o.default.createElement(c.Section,{title:this.renderVideoListTitle(),columns:e,rowGap:6,columnsGap:6,footer:o.default.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},t?o.default.createElement(r.Button,{className:"border",onClick:l},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},this.renderVideoList())}render(){const{showGoTopButton:e,newListLength:t,videoType:i}=this.state;return o.default.createElement(d,{id:"homePage",ref:this.videoListRef},o.default.createElement(u,null,this.renderLiveList(),this.renderVideoSection()),o.default.createElement(h,{ref:this.firstPageRefRef}),o.default.createElement(m,{className:e?"show":""},o.default.createElement(f,{onClick:this.handleOnClickGoTopButton},o.default.createElement(r.Icon,{icon:"top-arrow",size:12}))))}}_.contextType=p.MainStore,t["default"]=(0,l.withRouter)(_)},77334:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(i(57689)),r=i(47532),n=a(i(635)),l=i(99036),s=i(47573),c=i(555),p=[{key:"total_click",secondKey:"incr_click",title:"\u64ad\u653e\u91cf",linkCallback:"handleOnClickDataCenter",secondTitle:"\u6628\u65e5"},{key:"total_reply",secondKey:"incr_reply",title:"\u8bc4\u8bba\u6570",secondTitle:"\u6628\u65e5"},{key:"total_dm",secondKey:"incr_dm",title:"\u5f39\u5e55\u6570",secondTitle:"\u6628\u65e5"},{key:"total_like",secondKey:"inc_like",title:"\u70b9\u8d5e\u6570",secondTitle:"\u6628\u65e5"},{key:"total_coin",secondKey:"inc_coin",title:"\u6295\u5e01\u6570",secondTitle:"\u6628\u65e5"},{key:"total_fav",secondKey:"inc_fav",title:"\u6536\u85cf\u6570",secondTitle:"\u6628\u65e5"},{key:"total_share",secondKey:"inc_share",title:"\u5206\u4eab\u6570",secondTitle:"\u6628\u65e5"},{key:"total_elec",secondKey:"inc_elec",title:"\u5145\u7535\u6570",secondTitle:"\u6628\u65e5",linkCallback:"handleOnClickCommentManager"}],d=[{key:"articleView",secondKey:"articleIncrView",title:"\u9605\u8bfb\u91cf",secondTitle:"\u6628\u65e5"},{key:"articleReply",secondKey:"articleIncrReply",title:"\u8bc4\u8bba\u6570",secondTitle:"\u6628\u65e5"},{key:"articleLike",secondKey:"articleIncrLike",title:"\u70b9\u8d5e\u6570",secondTitle:"\u6628\u65e5"},{key:"articleCoin",secondKey:"articleIncrCoin",title:"\u6295\u5e01\u6570",secondTitle:"\u6628\u65e5"},{key:"articleFav",secondKey:"articleIncrFav",title:"\u6536\u85cf\u6570",secondTitle:"\u6628\u65e5"},{key:"articleShare",secondKey:"articleIncrShare",title:"\u5206\u4eab\u6570",secondTitle:"\u6628\u65e5"}],u=[{title:"\u89c6\u9891",list:p},{title:"\u4e13\u680f",list:d}],h=n.default.div.attrs({className:"popup-main-creator"})`
  .section {
    margin-bottom: 6px;

    :last-child {
      margin-bottom: 0;
      padding-bottom: 40px;
    }

    .type-header {
      //grid-column-end: span 2;
      margin: 2px 0 0;
      padding-left: 4px;
      font-weight: bold;
    }
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    user-select: none;
    //grid-column-end: span 2;
    color: #171717;
    overflow: hidden;

    .button {
      margin-bottom: 6px;
      cursor: pointer;

      .button-view {
        padding: 0 22px;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`,m=n.default.section`
  position: relative;
  padding: 6px;
  //border-radius: 2px;
  //border: 1px solid transparent;
  box-sizing: border-box;
  transition: background-color .2s, border-color .2s;
  background-color: hsl(0deg 0% 99%);

  &:hover {
  }

  &:active {
    background-color: hsl(0deg 0% 82% / 50%);
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgb(0 0 0 / 30%);
    }

    &:active {
      background-color: rgb(0 0 0 / 50%);
    }
  }
`,f=(0,n.default)(m).attrs(({hasCallback:e})=>({className:e?"has-callback":""}))`
  &.has-callback {
    cursor: pointer;

    ::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      border: 3px solid transparent;
      border-top: 3px solid hsl(0deg 0% 80%);
      border-right: 3px solid hsl(0deg 0% 80%);
      pointer-events: none;

    }
  }

  main {
    position: relative;
    padding: 0 6px 0 4px;
    //width: fit-content;
    //background-color: rgb(255 255 255 / 16%);
    transition: background-color .2s;

    &:last-of-type {
      margin-right: 0;
    }

    &.zero {
      filter: grayscale(1) brightness(0.38);
    }

    //&:hover {
    //  background-color: rgb(0 0 0 / 25%);
    //}
    i {
      font-style: normal;
    }

    .second-value {
      margin-left: 8px;
      font-style: normal;
      color: var(--bilibili-blue);
    }

  }

  &.header {
    text-align: center;
    cursor: pointer;

    .bilibili-helper-2-icon-right-arrow {
      float: right;
      line-height: 16px;
      color: var(--paper-grey-600);
    }
  }

  &.data-section {
    margin-bottom: 0;

    .main-data {
      .title {
        margin-right: 6px;
        font-size: 12px;
        font-weight: normal;
        letter-spacing: .5px;
      }

      .main-value {
        //display: block;
        font-size: 14px;
        color: var(--bilibili-blue);

        .yesterday {
          color: var(--bilibili-pink);
        }
      }
    }
  }

  &.rating {
    .level {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 16px;
      font-weight: bold;
      font-family: system-ui;
      font-style: italic;
      filter: opacity(0.1);
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(0 0 0 / 16%);
    &.has-callback {
      ::after {
        opacity: .25;
        border-top: 3px solid hsl(0deg 0% 50%);
        border-right: 3px solid hsl(0deg 0% 50%);
      }
    }

    &.data-section {
      .main-value {
        opacity: 0.95;
      }
    }

    &.rating {
      .level {
        filter: opacity(0.2);
      }
    }
  }
`;class g extends o.default.Component{constructor(e){super(e),this.getData=()=>new Promise(e=>{chrome.runtime.sendMessage({target:"mainCreator",event:"getData"},t=>{t&&this.setState(Object.assign({},t)),e()})}),this.getArticleData=()=>new Promise(e=>{chrome.runtime.sendMessage({target:"mainCreator",event:"getArticleData"},t=>{t&&this.setState(Object.assign({},t)),e()})}),this.getRatingData=()=>new Promise(e=>{chrome.runtime.sendMessage({target:"mainCreator",event:"getRatingData"},t=>{t&&this.setState(Object.assign({},t)),e()})}),this.handleOnClickLink=(e,t,i)=>{e.stopPropagation(),e.preventDefault(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_creator",action:"_"+t}),this.context.createTab(e,i)},this.handleOnClickCenter=e=>{this.handleOnClickLink(e,null,"https://member.bilibili.com/platform/home")},this.handleOnClickRating=e=>{this.handleOnClickLink(e,"rating","https://member.bilibili.com/platform/railgun/index")},this.handleOnClickVideoManager=e=>{this.handleOnClickLink(e,"video_manager","https://member.bilibili.com/platform/upload-manager/article")},this.handleOnClickArticleManager=e=>{this.handleOnClickLink(e,"article_manager","https://member.bilibili.com/platform/upload-manager/text")},this.handleOnClickDataCenter=e=>{this.handleOnClickLink(e,"data_center","https://member.bilibili.com/platform/data-up/video/dataCenter/video")},this.handleOnClickFansManager=e=>{this.handleOnClickLink(e,"fans_manager","https://member.bilibili.com/platform/fans/medal")},this.handleOnClickCommentManager=e=>{this.handleOnClickLink(e,"comment_manager","https://member.bilibili.com/platform/comment/article")},this.handleOnClickCommentManager=e=>{this.handleOnClickLink(e,"allowance","https://member.bilibili.com/platform/allowance/charge")},this.state={total_fans:NaN,total_click:NaN,total_reply:NaN,total_dm:NaN,total_like:NaN,total_share:NaN,total_coin:NaN,total_fav:NaN,total_elec:NaN,inc_coin:NaN,inc_elec:NaN,inc_fav:NaN,inc_like:NaN,inc_share:NaN,incr_click:NaN,incr_dm:NaN,incr_fans:NaN,incr_reply:NaN,follow:{},unfollow:{},articleView:NaN,articleReply:NaN,articleLike:NaN,articleCoin:NaN,articleFav:NaN,articleShare:NaN,articleIncrView:NaN,articleIncrReply:NaN,articleIncrLike:NaN,articleIncrCoin:NaN,articleIncrFav:NaN,articleIncrShare:NaN,ratingString:"",ratingCredit:NaN,ratingLevel:NaN}}componentDidMount(){this.getData(),this.getArticleData(),this.getRatingData()}render(){const e=(0,c.parseNumberByBase)(this.state.incr_fans);let t="";return isNaN(e)||(t=(e>0?" + ":" - ")+Math.abs(e)),o.default.createElement(h,{ref:this.listRef},o.default.createElement(l.Section,{columns:4,columnsGap:6,rowGap:6},o.default.createElement(f,{hasCallback:!0,className:"header",onClick:this.handleOnClickCenter,onAuxClick:this.handleOnClickCenter},"\u521b\u4f5c\u4e2d\u5fc3"),o.default.createElement(f,{hasCallback:!0,className:"header",onClick:this.handleOnClickVideoManager,onAuxClick:this.handleOnClickVideoManager},"\u89c6\u9891\u7ba1\u7406"),o.default.createElement(f,{hasCallback:!0,className:"header",onClick:this.handleOnClickArticleManager,onAuxClick:this.handleOnClickArticleManager},"\u4e13\u680f\u7ba1\u7406"),o.default.createElement(f,{hasCallback:!0,className:"header",onClick:this.handleOnClickCommentManager,onAuxClick:this.handleOnClickCommentManager},"\u4e92\u52a8\u7ba1\u7406")),o.default.createElement(l.Section,{columns:1,columnsGap:6,rowGap:1},o.default.createElement(l.Section,{columns:1,columnsGap:6,rowGap:6},o.default.createElement(f,{className:"data-section",onClick:this.handleOnClickFansManager,onAuxClick:this.handleOnClickFansManager,hasCallback:!0},o.default.createElement("main",{className:"main-data"},o.default.createElement("b",{className:"title"},"\u7c89\u4e1d\u6570"),o.default.createElement("i",{className:"main-value"},(0,c.parseNumberByBase)(this.state.total_fans||0),o.default.createElement("span",{className:"yesterday"},t))))),u.map(({title:e,list:t},i)=>o.default.createElement(l.Section,{key:i,title:e,columns:1,columnsGap:6,rowGap:1},t.map(({title:e,secondTitle:t,key:i,secondKey:a,linkCallback:r,holdColumns:n})=>{const l=!!this[r],s=0===this.state[a];let p;if(!s&&this.state[a]){const e=(0,c.parseNumberByBase)(this.state[a]);p=e>0?" \uff0b"+(0,c.parseNumberByBase)(this.state[a]):""}else p="";return o.default.createElement(f,{key:i,className:"data-section",onClick:l?this[r]:null,onAuxClick:l?this[r]:null,hasCallback:l},o.default.createElement("main",{className:"main-data"},o.default.createElement("b",{className:"title"},e),o.default.createElement("i",{className:"main-value"},(0,c.parseNumberByBase)(this.state[i]||0),o.default.createElement("span",{className:"yesterday"},p))))}))),o.default.createElement(l.Section,{title:"\u5176\u4ed6",columns:1,columnsGap:6,rowGap:6},o.default.createElement(f,{className:"data-section rating",onClick:this.handleOnClickRating,onAuxClick:this.handleOnClickRating,hasCallback:!0},o.default.createElement("main",{className:"main-data"},o.default.createElement("b",{className:"title"},"\u7535\u78c1\u529b"),o.default.createElement("i",{className:"main-value"},this.state.ratingString)),o.default.createElement("main",null,o.default.createElement("div",{className:"yesterday"},"\u4fe1\u7528\u503c",o.default.createElement("i",{className:"second-value"},this.state.ratingCredit||0)),o.default.createElement("span",{className:"level"},"Lv",this.state.ratingLevel))))))}}g.contextType=s.MainStore,t["default"]=(0,r.withRouter)(g)},61558:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(51920),r=i(95039),n=a(i(57689)),l=i(47532),s=a(i(635)),c=i(99036),p=i(47573),d=s.default.div.attrs({className:"popup-main-favlist"})`
  display: flex;
  flex-direction: row-reverse;
  padding: 0;
  overflow: hidden !important;

  .fav-item-list-wrapper {
    position: sticky;
    top: -8px;

    flex-shrink: 0;
    margin: 0 -10px -8px -10px;
    width: 10px;
    height: calc(100% + 4px);
    transition: width .2s;
    z-index: 2;

    .expand-button {
      position: absolute;
      top: calc(50%);
      left: -16px;
      padding: 4px 0 4px 3px;
      background-color: #f4f4f4;
      border-radius: 4px;

      .bilibili-helper-2-iconfont {
        display: block;
      }
    }

    &:hover {
      width: 72px;
    }
  }

  .fav-item-list {
    display: flex;
    flex-direction: column;
    padding-bottom: 34px;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;

    .fav-item {
      flex-shrink: 0;
      margin-bottom: 1px;
      padding: 8px;
      //height: 14px;
      //line-height: 14px;
      font-size: 12px;
      word-break: keep-all;
      background-color: #fff;
      overflow: hidden;
      cursor: pointer;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      user-select: none;

      &:hover {
        background-color: var(--bilibili-blue);
        color: var(--bilibili-gray);
      }

      &.selected {
        position: sticky;
        top: 0;
        background-color: rgb(35 173 229 / 10%);
        color: var(--bilibili-blue);
        pointer-events: none;

        //width: fit-content;
      }
    }
  }

  .section {
    margin: 0 10px 0 0;
    width: 100%;
    overflow: auto;
  }

  .list {
    position: relative;
    display: grid;
    //grid-template-columns: repeat(auto-fill, 196px);
    //grid-template-rows: repeat(auto-fill, 135px);
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    margin-bottom: 42px;


    .LazyLoad {
      min-height: 149px;
    }
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    user-select: none;
    //grid-column-end: span 2;
    color: #171717;
    overflow: hidden;

    .button {
      margin-bottom: 6px;
      cursor: pointer;

      .button-view {
        padding: 0 22px;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .fav-item-list-wrapper {
      .fav-item {
        background-color: #171717;
      }

      .expand-button {
        background-color: #202020;
      }
    }

    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`;class u extends n.default.Component{constructor(e){super(e),this.currentDidList=new Set,this.getFavlist=()=>new Promise((e,t)=>{chrome.runtime.sendMessage({target:"mainFavlist",event:"getMediaList"},i=>{i?(this.setState({list:i}),e()):t()})}),this.getVideoList=(e,t=1)=>{const{list:i}=this.state,a=i[e];chrome.runtime.sendMessage({target:"mainFavlist",event:"getVideoList",id:a.id,pn:t},t=>{t&&(t.medias.forEach(e=>{e.isSpecialAttention=this.context.specialAttentionList.includes(e.userInfo.uid)}),a.videos.push(...t.medias),a.hasMore=t.has_more,a.pn+=1,this.setState({list:i,currentIndex:e},()=>{1===e&&(document.querySelector(".popup-main-favlist .section").scrollTop=0)}))})},this.handleOnClickMedia=e=>{const{list:t,currentIndex:i}=this.state;if(i===e)return;const a=t[e];0===a.videos.length&&a.hasMore?this.getVideoList(e,a.pn):this.setState({currentIndex:e})},this.handleOnClickVideoCover=(e,t,i)=>{e.preventDefault(),e.stopPropagation(),e.persist(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_favlist",action:"click_video",label:i}),this.context.createTab(e,"https://www.bilibili.com/video/"+t)},this.handleOnClickUserName=(e,t)=>{e.persist(),e.stopPropagation(),e.preventDefault(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_favlist",action:"click_video",label:"upper_name"}),this.context.createTab(e,"https://space.bilibili.com/"+t)},this.state={hasMore:!1,list:[],currentIndex:0},this.listRef=n.default.createRef(),this.bottomObserverRef=n.default.createRef()}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/favlist"}),this.getFavlist().then(()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{const{list:i,currentIndex:a}=this.state;i[a].hasMore&&e.length&&e[0].intersectionRatio&&this.getVideoList(a,i[a].pn)},{root:this.listRef.current,threshold:[0,.5]}),this.observer.observe(this.bottomObserverRef.current))})}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{currentIndex:e,hasMore:t,list:i}=this.state,{columns:a,videoCardType:l}=this.context,s=r.VideoClassMap[l];return n.default.createElement(d,{ref:this.listRef},n.default.createElement("div",{className:"fav-item-list-wrapper"},n.default.createElement("div",{className:"fav-item-list"},i.map((t,i)=>n.default.createElement("div",{key:t.id,className:["fav-item",e===i?"selected":""].join(" "),onClick:()=>this.handleOnClickMedia(i)},t.title))),n.default.createElement("div",{className:"expand-button"},n.default.createElement(o.Icon,{icon:"left-arrow",size:16}))),n.default.createElement(c.Section,{columns:a,style:{gridColumnEnd:"span "+a},footer:n.default.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},t?n.default.createElement(o.Button,{className:"border",onClick:()=>this.getVideoList(e,i[e].pn)},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},i[e]&&i[e].videos.length>0?i[e].videos.map((e,t)=>{const{userInfo:i,videoInfo:a}=e;return n.default.createElement(s,{key:a.bvid,userInfo:i,videoInfo:a,onClickUserName:e=>this.handleOnClickUserName(e,i.uid),onClickCover:e=>this.handleOnClickVideoCover(e,a.bvid,t),showWatcherLaterButton:!1})}):"\u6ca1\u6709\u89c6\u9891\u6570\u636e"))}}u.contextType=p.MainStore,t["default"]=(0,l.withRouter)(u)},61527:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(53507),r=a(i(57689)),n=i(47532),l=a(i(635)),s=i(555),c=i(99036),p=i(47573),d=l.default.div.attrs({className:"popup-main-anime"})`
  padding: 0 !important;
  width: 100% !important;
  overflow: hidden;

  .section-btn-group {
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 4px;
    padding: 4px;
    background-color: #F4F4F4;

    .button {
      width: 100%;
      height: 20px;
      line-height: 20px;
      //background-color: var(--bilibili-blue);
      //color: var(--bilibili-gray);
      &.active {
        background-color: var(--paper-grey-300);
        color: var(--paper-grey-900);
      }

      button {
        line-height: 18px;
      }
    }
  }

  .section {
    position: absolute;
    top: 28px;
    right: 0;
    bottom: 0;
    left: 0;
    padding-bottom: 40px;
    overflow: auto;
    scrollbar-width: thin;

    .section-title {
      top: 28px;
      display: flex;
      width: 100%;

      .more-btn {
        cursor: pointer;
        margin-left: auto;
      }
    }

    .section-content {
      min-height: 200px;
    }
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    user-select: none;
    //grid-column-end: span 2;
    color: #171717;
    overflow: hidden;

    .button {
      margin-bottom: 6px;
      cursor: pointer;

      .button-view {
        padding: 0 22px;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .section-btn-group {
      background-color: #1f1f1f;

      .button {
        &.active {
          background-color: var(--paper-grey-800);
          color: var(--bilibili-gray);
        }
      }
    }

    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`,u=l.default.div`
  display: flex;
  padding: 4px;
  //height: 58px;
  border-radius: 2px;
  cursor: pointer;
  //transition: background-color .2s;
  //content-visibility: auto;
  //contain-intrinsic-size: 0 58px;

  &:hover {
    background-color: rgb(222 220 220 / 50%);
  }

  .cover {
    position: relative;
    flex-shrink: 0;
    border-radius: 2px;
    overflow: hidden;

    .img {
      display: block;
      width: 80px;
      max-height: 70px;
      //height: 62.5px;
      border-radius: 2px;
      //transition: filter .2s;
    }

    .badge {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0 3px;
      border-radius: 2px;
      background-color: var(--bilibili-pink);
      color: var(--bilibili-gray);
      zoom: .8;
      //opacity: 0;

      &.not-in-live {
        background-color: var(--paper-grey-800);
      }
    }

    .process-bar {
      position: absolute;
      height: 3px;
      width: 100%;
      bottom: 0;
      background-color: var(--google-grey-300);

      .process-handle {
        height: 100%;
        background-color: var(--bilibili-pink);
      }
    }
  }

  .info {
    flex-grow: 1;
    margin-left: 6px;
    display: flex;
    flex-direction: column;

    .title {
      margin: 0;
      color: var(--paper-grey-900);
      line-height: 14px;
      font-size: 12px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;

      .tag {
        margin-right: 4px;
        color: var(--bilibili-blue);
      }
    }

    .username, .view-time {
      display: -webkit-box;
      margin: 0;
      width: fit-content;
      color: var(--paper-grey-600);
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }

    .username:hover {
      text-decoration: underline;
    }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgb(0 0 0 / 0.5);

      .img {
        //filter: brightness(1);
      }
    }

    .img {
      //filter: brightness(.8);
    }

    .info {
      .title {
        color: var(--bilibili-gray);
      }
    }
  }
`;class h extends r.default.Component{constructor(e){super(e),this.state={type:0,dataList:[{list:[],viewAt:0,hasMore:!0,ps:30,type:"all"},{list:[],viewAt:0,hasMore:!0,ps:30,type:"archive"},{list:[],viewAt:0,hasMore:!0,ps:30,type:"live"},{list:[],viewAt:0,hasMore:!0,ps:30,type:"article"}]},this.listRef=r.default.createRef(),this.bottomObserverRef=r.default.createRef(),this.loadDataByType=(e=20)=>new Promise(t=>{const{dataList:i,type:a}=this.state;i[a].hasMore&&chrome.runtime.sendMessage({target:"historyWatched",event:"getList",type:i[a].type,viewAt:i[a].viewAt,ps:i[a].ps},o=>{o?(i[a].list.push(...o.list),i[a].viewAt=o.list[o.list.length-1].view_at,o.length<e&&(i[a].hasMore=!1),this.setState({dataList:i},()=>t())):t()})}),this.handleOnClickHistoryItem=(e,t,i)=>{const{type:a}=this.state;chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_history",action:"click_category_item",label:`${a}_${i}`}),this.context.createTab(e,t)},this.handleOnClickUserName=(e,t)=>{e.stopPropagation(),e.preventDefault(),this.context.createTab(e,"https://space.bilibili.com/"+t)},this.handleOnClickTypeButton=e=>{const{type:t}=this.state;t!==e&&(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",action:"click_category",label:e}),this.setState({type:e},()=>{this.listRef.current&&(this.listRef.current.querySelector(".popup-main-anime .section").scrollTop=0)}))}}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/history"}),this.loadDataByType().then(()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{const{dataList:i,type:a}=this.state;i[a].hasMore&&e.length&&e[0].intersectionRatio&&this.loadDataByType()},{root:this.listRef.current,threshold:[0,.5]}),this.observer.observe(this.bottomObserverRef.current))})}render(){const{dataList:e,type:t}=this.state,{columns:i}=this.context;return r.default.createElement(d,{ref:this.listRef},r.default.createElement("div",{className:"section-btn-group"},r.default.createElement(o.Button,{className:0===t?"active":"",onClick:()=>this.handleOnClickTypeButton(0)},"\u5168\u90e8"),r.default.createElement(o.Button,{className:1===t?"active":"",onClick:()=>this.handleOnClickTypeButton(1)},"\u89c6\u9891"),r.default.createElement(o.Button,{className:2===t?"active":"",onClick:()=>this.handleOnClickTypeButton(2)},"\u76f4\u64ad"),r.default.createElement(o.Button,{className:3===t?"active":"",onClick:()=>this.handleOnClickTypeButton(3)},"\u4e13\u680f")),r.default.createElement(c.Section,{columns:i,rowGap:0,columnsGap:4,footer:r.default.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},e[t].hasMore&&e[t].list.length>0?r.default.createElement(o.Button,{className:"border",onClick:()=>this.loadDataByType()},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},e[t].list.length>0?e[t].list.map((e,t)=>{const{badge:i,title:a,tag_name:n,view_at:l,cover:c,covers:p,author_name:d,author_mid:h,uri:m,history:f,duration:g,progress:b}=e;let v=m;return f.epid?v="https://www.bilibili.com/bangumi/play/ep"+f.epid:!v&&f.bvid?(v="https://www.bilibili.com/video/"+f.bvid,f.page&&f.page>1&&(v+="?p="+f.page)):!v&&f.oid&&(v="https://www.bilibili.com/read/cv"+f.oid),r.default.createElement(u,{key:t,onClick:e=>this.handleOnClickHistoryItem(e,v,t),onAuxClick:e=>this.handleOnClickHistoryItem(e,v,t)},r.default.createElement("div",{className:"cover"},r.default.createElement(o.Image,{url:c||(p?p[0]:null)}),i?r.default.createElement("span",{className:["badge","\u672a\u5f00\u64ad"===i?"not-in-live":null].join(" ")},i):null,g&&b?r.default.createElement("div",{className:"process-bar"},r.default.createElement("div",{className:"process-handle",style:{width:b/g*100+"%"}})):null),r.default.createElement("div",{className:"info"},r.default.createElement("p",{className:"title"},this.context.showTag?r.default.createElement("span",{className:"tag"},n):null,a),d?r.default.createElement("p",{className:"username"},r.default.createElement("a",{onClick:e=>this.handleOnClickUserName(e,h),onAuxClick:e=>this.handleOnClickUserName(e,h)},d)):null,l?r.default.createElement("p",{className:"view-time"},(0,s.fromNow)(1e3*l)):null))}):r.default.createElement("div",{style:{padding:"0 8px"}},"\u6ca1\u6709\u6570\u636e")))}}h.contextType=p.MainStore,t["default"]=(0,n.withRouter)(h)},56319:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(i(57689)),r=i(51920),n=i(95039),l=a(i(635)),s=i(47532),c=a(i(56058)),p=i(99036),d=i(47573),u=l.default.div`
  //.topic {
  //  margin-top: 0;
  //  margin-bottom: 6px;
  //  margin-left: -10px;
  //  padding: 4px 0 4px 10px;
  //  font-size: 12px;
  //  color: #3B3B3B;
  //  position: sticky;
  //  top: -10px;
  //  z-index: 2;
  //  background-color: #f4f4f4;
  //}

  .topic {
    display: flex;
    margin: 0;
    color: #3B3B3B;

    b {
      margin: 0 4px;
      color: var(--bilibili-pink);
    }

    .more-btn {
      margin-left: auto;
      cursor: pointer;
    }
  }

  @media (prefers-color-scheme: dark) {
    .topic {
      color: #999999;
      background-color: #1f1f1f;
    }
  }
`,h=l.default.div.attrs({className:"popup-main-home"})`
  position: relative;
  display: grid;
  //grid-template-columns: repeat(auto-fill, 196px);
  //grid-template-rows: repeat(auto-fill, 135px);
  //grid-column-gap: 12px;
  grid-template-columns: 1fr;
  grid-row-gap: 12px;
  margin-bottom: 42px;

  &::-webkit-scrollbar {
    width: 3px;
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

  .carousel {
    margin-left: -10px;
    width: calc(100% + 20px);
    height: 92px;
    overflow: hidden;

    img:not([src]) {
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0 0 0 / 10%);
    }
  }

  .LazyLoad {
    min-height: 149px;
  }

  .recommend-video-list {
    .section-content {
      padding-top: 6px;
    }
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    user-select: none;
    //grid-column-end: span 2;
    color: #171717;
    overflow: hidden;

    .button {
      margin-bottom: 6px;
      cursor: pointer;

      .button-view {
        padding: 0 22px;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    &::-webkit-scrollbar-thumb {
      background-color: black;
    }

    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`,m=l.default.div`
  margin-bottom: -12px;
  width: auto;
  overflow: auto;

  .list {
    display: flex;
    margin-top: 6px;
    width: 100%;
    overflow: auto;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`,f=l.default.a`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  margin: 0 2.5px;
  padding: 4px 1px;
  width: 50px;
  border: 1px solid transparent;
  border-radius: 2px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color .2s;
  //content-visibility: print;
  //contain-intrinsic-size: 54px 0;
  //will-change: scroll-position;

  &:hover {
    background-color: rgba(255, 255, 255);
  }

  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50px;
  }

  .user-name {
    overflow: hidden;
    //text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    width: 114%;
    word-break: break-all;
    color: var(--paper-grey-900);
    text-align: center;
    zoom: 0.8;
  }

  @media (prefers-color-scheme: dark) {
    .user-name {
      color: var(--paper-grey-100);
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`,g=(l.default.div`
  display: flex;
  align-items: center;

  .button {
    height: 22px;
  }
`,l.default.section`
`);class b extends o.default.Component{constructor(e){super(e),this.state={liveList:[],livingCount:0,carousel:[],offsetDynamicId:0,videoList:[],recentVideoList:[],hotVideoList:[],hotVideoListPageNumber:1,hasMoreVideos:!0,adMap:[]},this.contentType="recentVideo",this.videoListRef=o.default.createRef(),this.bottomObserverRef=o.default.createRef(),this.currentDidList=new Set,this.getHomeData=(e=!0)=>new Promise(t=>{chrome.runtime.sendMessage({target:"mainHome",event:"getHomeData",getCache:e},e=>{if(e){const{data:t}=e,{carousel:i,recommendList:a}=t;a.forEach(e=>{e.isSpecialAttention=this.state.specialAttentionList.includes(e.owner.mid)})}else t()})}),this.getDynamic=(e=this.state.offsetDynamicId)=>{const{bhAccount:t,specialAttentionList:i}=this.context;return new Promise(a=>{chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getDynamic",offsetDynamicId:e},e=>{if(e){const{recentVideoList:o,adMap:r}=this.state,{hasMore:n,offsetDynamicId:l}=e;if(e.cards=e.cards.filter(e=>{if(e.isSpecialAttention=i.includes(e.card.owner.mid),!this.currentDidList.has(e.desc.dynamic_id_str))return this.currentDidList.add(e.desc.dynamic_id_str),!0}),(!t||!t.isVIP)&&r.length>0){const t=1,i=r.filter(e=>!e.hasShow),a=Math.floor(Math.random()*(i.length+t));o[0]&&o[0].isAD&&o.shift();const n=i[a];n&&(n.hasShow=!0,e.cards.unshift(Object.assign(Object.assign({},n),{isAD:!0,link:n.link,cover:n.cover,title:n.title})))}o.push(...e.cards),this.setState({hasMoreVideos:n,recentVideoList:o,offsetDynamicId:l},()=>{a()})}else this.setState({hasMoreVideos:!1,recentVideoList:[],offsetDynamicId:0},()=>{a()})})})},this.getHotVideos=()=>new Promise(e=>{const{hotVideoList:t,hotVideoListPageNumber:i}=this.state;this.state.hasMoreVideos?chrome.runtime.sendMessage({target:"mainHome",event:"getHotVideos",pn:i},a=>{if(a){const{list:o,hasMore:r}=a;o.forEach(e=>{e.isSpecialAttention=this.context.specialAttentionList.includes(e.owner.mid)}),t.push(...o),this.setState({hotVideoList:t,hasMoreVideos:r,hotVideoListPageNumber:i+1},()=>e())}}):e()}),this.getLiveList=()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/w_live_users?size=20",options:{contentType:"json"}},({data:e})=>{e&&e.data&&e.data.items&&e.data.items.length>0&&this.setState({liveList:e.data.items,livingCount:e.data.count})})},this.handleOnClickVideoCover=(e,t,i)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_video",label:i}),e.preventDefault(),this.createTab("https://www.bilibili.com/video/"+t,"direct"===this.context.videoOpenMethod()&&1!==e.button)},this.handleOnClickSpecialAttentionBtn=(e,t)=>{e.stopPropagation();const{specialAttentionList:i}=this.context,{videoList:a,recentVideoList:o,hotVideoList:r}=this.state;new Promise((e,a)=>{i.includes(t)?(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_video",label:"specialAttention_remove"}),chrome.runtime.sendMessage({target:"specialAttention",event:"removeSpecialAttention",uid:t},o=>{if(o){const o=i.indexOf(t);o>=0?(i.splice(o,1),e(i)):a()}else a()})):(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_video",label:"specialAttention_add"}),chrome.runtime.sendMessage({target:"specialAttention",event:"addSpecialAttention",uid:t},o=>{o?(i.push(t),e(i)):a()}))}).then(e=>{"hot"===this.contentType||"default"===this.contentType?this.setState({specialAttentionList:e,videoList:a.map(t=>(t.isSpecialAttention=e.includes(t.owner.mid),t)),hotVideoList:r.map(t=>(t.isSpecialAttention=e.includes(t.owner.mid),t))}):"recentVideo"===this.contentType&&this.setState({recentVideoList:o.map(t=>(t.isSpecialAttention=e.includes(t.desc.uid),t))})})},this.handleOnClickMoreLiving=()=>{this.props.history.push("/live")},this.handleOnClickOpenLive=(e,t,i)=>{e.stopPropagation(),e.preventDefault(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_living_list",label:i}),this.createTab(t,"direct"===this.context.videoOpenMethod()&&1!==e.button)},this.refreshSpecialAttention=()=>{const{specialAttentionList:e}=this.context,{recentVideoList:t}=this.state;this.setState({recentVideoList:t.map(t=>(t.isSpecialAttention=e.includes(t.card.owner.mid),t))})}}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/home"}),chrome.runtime.sendMessage({target:"ad",event:"getAds",position:"popupMainHome"},e=>{e&&e.length>0&&this.setState({adMap:e})});const e=c.default.get("mainHome-config")||{},t=!e||!!e.showLiveBar;this.setState({showLiveBar:t}),t&&this.getLiveList(),this.getHomeData(!1),this.getDynamic(),this.videoListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{this.state.hasMoreVideos?e.length&&0!==e[0].intersectionRatio&&this.getDynamic(this.state.offsetDynamicId):t.disconnect()},{root:this.videoListRef.current}),this.observer.observe(this.bottomObserverRef.current))}componentDidUpdate(e,t,i){return t.adMap.length!==this.state.adMap.length||t.liveList.length!==this.state.liveList.length||t.recentVideoList.length!==this.state.recentVideoList.length}createTab(e,t=!0){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e,active:t})}renderLiveList(){const{liveList:e,livingCount:t,showLiveBar:i}=this.state,{columns:a}=this.context;return i&&t>0?o.default.createElement(m,{style:{gridColumnEnd:"span "+a}},o.default.createElement("h4",{className:"topic"},"\u6b63\u5728\u76f4\u64ad",o.default.createElement("b",null,t),"\u4eba",o.default.createElement("span",{className:"more-btn",onClick:this.handleOnClickMoreLiving},"\u67e5\u770b\u5168\u90e8")),o.default.createElement("div",{className:"list"},e.map((e,t)=>o.default.createElement(f,{key:e.uid,onClick:i=>this.handleOnClickOpenLive(i,e.link,t)},o.default.createElement(r.Image,{className:"user-avatar",url:e.face}),o.default.createElement("span",{className:"user-name"},e.uname))))):null}renderVideoListTitle(){let e=this.contentType;return o.default.createElement("div",null,o.default.createElement(g,{className:"home"===e?"active":null},"\u6700\u8fd1\u6295\u7a3f"),o.default.createElement(g,{className:"recentVideo"===e?"active":null},"\u9996\u9875\u63a8\u8350"))}renderRecentVideo(e,t){const{columns:i,bilibiliAccount:a}=this.context;if(!e)return"\u6ca1\u6709\u89c6\u9891\u6570\u636e";const l=n.VideoClassMap[this.context.videoCardType];return e.length>0?e.map((e,t)=>{const{desc:i,card:a}=e;return e.isAD?null:o.default.createElement(l,Object.assign({key:i.dynamic_id_str,isSpecialAttention:e.isSpecialAttention},a,{owner:{name:i.user_profile.info.uname,mid:i.uid,face:i.user_profile.info.face},onClickCover:e=>this.handleOnClickVideoCover(e,i.bvid,t),onClickFollowBtn:e=>this.handleOnClickSpecialAttentionBtn(e,i.uid),showTag:this.context.showTag}))}):a&&!a.hasLogin?o.default.createElement("div",{style:{gridColumnEnd:"span "+i}},o.default.createElement(r.Button,{onClick:()=>this.createTab("https://passport.bilibili.com/login?from=bilibili-helper",!0)},"\u672a\u53d1\u73b0\u5df2\u767b\u5f55\u7684B\u7ad9\u8d26\u53f7\uff0c\u70b9\u51fb\u767b\u5f55")):void 0}renderVideoList(){const{columns:e,hasLogin:t,bhAccount:i}=this.context,{hotVideoList:a,hasMoreVideos:n,recentVideoList:l}=this.state;return o.default.createElement(p.Section,{title:this.renderVideoListTitle(),columns:e,rowGap:6,columnsGap:6,footer:o.default.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},n&&l&&l.length>0?o.default.createElement(r.Button,{className:"border",onClick:()=>this.getDynamic()},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},this.renderRecentVideo(l,n))}render(){return o.default.createElement(u,{id:"homePage",ref:this.videoListRef},o.default.createElement(h,null,this.renderLiveList(),this.renderVideoList()))}}b.contextType=d.MainStore,t["default"]=(0,s.withRouter)(b)},62877:function(e,t,i){var a,o=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,o)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return r(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Main=void 0;const s=i(53507),c=i(40209),p=(i(58383),l(i(57689))),d=i(47532),u=l(i(635)),h=i(555),m=i(47573),f=i(1642),g=l(i(56058)),b={1:5,2:5},v=u.default.div.attrs({className:"popup-main"})`
  position: relative;
  //display: inline-block;
  flex-shrink: 0;
  flex-grow: 1;
  width: calc(100% - 80px);
  height: 100%;
  box-sizing: border-box;
  background: rgb(244, 244, 244);
  overflow-x: hidden;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  .tab-bar {
    position: relative;
    //margin: 10px 0px 0px;
    //padding: 0 10px 6px;
    //box-shadow: 0 1px 0 0px #ddd;
    width: 100%;
    background-color: #e7e7e7;
    z-index: 4;
    white-space: nowrap;
    overflow: visible;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }

    .inner {
      //width: fit-content;
      //will-change: transform;
      .tab-bar-box {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .extra-tools {
          display: flex;
          align-items: center;
          justify-content: flex-end;

          .current-extra-section {
            width: fit-content;
            //position: absolute;
            //top: 100%;
            //background-color: #e7e7e7;
            //pointer-events: none;
          }
        }

        .show-more-tab-btn {
          padding: 8px;
          cursor: pointer;
        }
      }
    }

    .more-tab-bar {
      display: grid;
      //grid-auto-flow: column;
      grid-template-columns: repeat(${({columns:e})=>b[e]}, 1fr);
      //grid-template-rows: repeat(2, 1fr);
      justify-items: center;
      align-items: center;
      position: absolute;
      padding-bottom: 0;
      padding-right: 28px;
      width: calc(100% - 28px);
      max-height: 0px;
      background-color: #e7e7e7;
      opacity: 0;
      overflow: hidden;
      transition: max-height .2s, opacity .15s;
      box-shadow: inset 0px 0.5px 1px rgb(0 0 0 / 10%);
      direction: rtl;

      &.show {
        max-height: fit-content;
        padding-bottom: 18px;
        opacity: 1;
      }

      &.is-vip {
        padding-bottom: 0;
      }

      .vip-btn {
        position: absolute;
        bottom: 6px;
        right: 6px;
        left: 6px;
        text-align: center;
        color: var(--bilibili-pink);
        cursor: pointer;
      }
    }

    a {
      box-sizing: border-box;
      display: inline-block;
      padding: 6px;
      width: 100%;
      font-size: 14px;
      text-decoration: none;
      color: #666;
      text-align: center;
      transition: color 150ms;
      cursor: pointer;
      user-select: none;

      &:last-of-type {
        margin-right: 0;
      }

      &:hover:not(.active) {
        color: hsl(0deg 0% 0%);
      }

      &.active {
        position: relative;
        font-weight: bold;
        color: #333333;
        background-color: #F4F4F4;
      }

      &[disabled] {
        cursor: not-allowed;
        color: #3c3c3c;
      }
    }

    .translate-wrapper {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      pointer-events: none;
    }

    .translate-box {
      position: absolute;
      top: 0;
      bottom: 0;
      background-color: #F4F4F4;
      transition: width .15s .05s, transform .2s ease-in-out;
      //will-change: width, transform;
      z-index: -1;

      //&::before, &::after {
      //  content: '';
      //  position: absolute;
      //  bottom: 0;
      //  display: block;
      //  width: 6px;
      //  height: 6px;
      //  background-image: radial-gradient(closest-side, #e7e7e7 50%, #f4f4f4 50%);
      //  background-position: 200% 200%;
      //  background-size: 400% 400%;
      //}
      //
      //&::before {
      //  left: -6px;
      //}
      //
      //&::after {
      //  right: -6px;
      //  transform: rotate(90deg);
      //}
    }
  }

  .content {
    position: relative;
    height: calc(100% - 32px);
    font-size: 12px;
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    &:hover {
      &::-webkit-scrollbar-thumb {
        background-color: black;
      }
    }

    &.show-top-bar {
      padding-top: 30px;
      height: calc(100% - 64px);

      & > div {
        height: calc(100% - 30px);
      }
    }

    .login-wrapper {
      display: flex;
      align-items: center;
      margin-top: -30px;
      padding: 0 6px;
      height: 30px !important;
      font-weight: bold;
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
      z-index: 30;

      .skip-btn {
        margin-left: auto;
        margin-right: 12px;
        cursor: pointer;
      }

      .login-btn {
        padding: 0 8px;
        height: 20px;
        line-height: 20px;
        border-radius: 6px;
        background-color: var(--bilibili-gray);
        color: var(--bilibili-blue);
        text-decoration: none;
      }
    }

    .need-update-wrapper {
      display: flex;
      align-items: center;
      margin-top: -30px;
      padding: 0 6px;
      height: 30px !important;
      font-weight: bold;
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
      //z-index: 30;

      .skip-btn {
        margin-left: auto;
        margin-right: 12px;
        cursor: pointer;
      }

      .need-update-btn {
        padding: 0 8px;
        height: 20px;
        line-height: 20px;
        border-radius: 6px;
        background-color: var(--bilibili-gray);
        color: var(--bilibili-blue);
        text-decoration: none;
      }
    }

    & > div {
      position: absolute;
      box-sizing: border-box;
      padding: 10px 10px 0 10px;
      width: 100%;
      height: 100%;
      overflow: auto;
      contain: size;
      scrollbar-width: thin;
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f1f1f;
    color: #999999;

    .tab-bar {
      background-color: #151515;
      //box-shadow: 0 1px 0 0px #191919;

      a {
        color: #999;

        &:hover:not(.active) {
          color: hsl(0deg 0% 90%);
        }

        &.active {
          color: #CCCCCC;
          background-color: #1f1f1f;
        }
      }

      //.translate-box {
      //  background-color: #1f1f1f;
      //
      //  &::before, &::after {
      //    background-image: radial-gradient(closest-side, #151515 50%, #1f1f1f 50%);
      //  }
      //}

      /*.inner .tab-bar-box .extra-tools {
        .current-extra-section {
          background-color: #151515;
        }
      }*/

      .more-tab-bar {
        background-color: #151515;
        box-shadow: inset 0px 0.5px 1px rgb(255 255 255 / 5%);

        .vip-btn {
          color: var(--google-yellow-300);
        }
      }
    }
  }
`,y=g.default.get("showLoginBar"),x=(g.default.get("showUpdateBar"),g.default.get("popupMain-config")),k=x.sectionShow.filter(({key:e,on:t})=>{const i=f.routers.find(t=>t.key===e);return i&&t}),w=x.temporaryShowLatestSection,_=k.length>0?k[0]:null,M=f.routers.find(e=>e.key===_.key)||f.routers[0],E=g.default.get("popupMain-temp-path");t.Main=(0,d.withRouter)((a=class extends p.default.Component{constructor(e){super(e),this.currentTabElement=null,this.state={translateBoxStyle:null,showLoginBar:void 0===y||y,showUpdateBar:!1,temporaryShowLatestSection:void 0!==w&&w,showMoreTabBar:!1,currentRoute:null},this.handleOnClickLink=(e,t,a,o)=>{e.persist(),this.currentTabElement=e.target,chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup",action:"tab_bar",label:a});const{history:r,location:l}=this.props,{bilibiliAccount:s,columns:c}=this.context;if(l.pathname!==a){const e=f.routers.find(e=>e.path===a);if(e){const t=k.slice(b[c]).find(({key:t})=>t===e.key);e.isExtraRoute=!!t,this.setState({currentRoute:e})}!o||o&&o===!!s?(g.default.set("popupMain-temp-path",{path:a,t:Date.now()}),this.setState({showMoreTabBar:!1}),r.push(a)):Promise.resolve().then(()=>n(i(58213))).then(({notifyNeedLogin:e})=>{e&&e()})}},this.handleOnClickSkipLogin=()=>{this.setState({showLoginBar:!1},()=>{g.default.set("showLoginBar",!1)}),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup",action:"click_skip_login"})},this.handleOnClickSkipUpdate=()=>{const{states:e}=this.context;g.default.set("showUpdateBar:"+e.latestVersion,!1),this.setState({showUpdateBar:!1}),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup",action:"click_skip_update"})},this.handleOnClickLogin=()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup",action:"click_login"})},this.handleOnClickShowMoreTabBar=()=>{this.setState({showMoreTabBar:!this.state.showMoreTabBar})},this.showMoreTabBar=()=>{this.setState({showMoreTabBar:!0})},this.hideMoreTabBar=()=>{this.setState({showMoreTabBar:!1})},this.tabRef=p.default.createRef(),this.tabInnerRef=p.default.createRef()}componentDidMount(){const{columns:e}=this.context,{history:t}=this.props;w&&E&&Date.now()-E.t<3e5?t.push(E.path):t.push(M.path);const i=document.querySelector(".tab-bar-box .active");i&&(i.clientWidth,this.currentTabElement=i);const a=f.routers.find(e=>e.path===location.hash.slice(1));if(a){const t=k.slice(b[e]).find(({key:e})=>e===a.key);a.isExtraRoute=!!t,this.setState({currentRoute:a})}}render(){const{location:e}=this.props,{translateBoxStyle:t,showLoginBar:i,showUpdateBar:a,showMoreTabBar:o,currentRoute:r}=this.state,{hasLogin:n,bilibiliAccount:l,states:u,isVIP:m,isSuperVIP:y,handleOnClickPayment:x,columns:w,showWebsiteMap:_}=this.context,M=m||y,E=!(!(null===u||void 0===u?void 0:u.needUpdate)||!(null===u||void 0===u?void 0:u.latestVersion))&&g.default.get("showUpdateBar:"+(null===u||void 0===u?void 0:u.latestVersion)),C=void 0===E||(a||E);return p.default.createElement(v,{columns:w},p.default.createElement("div",{className:"tab-bar",ref:this.tabRef,onMouseLeave:this.hideMoreTabBar},p.default.createElement("div",{className:"inner",ref:this.tabInnerRef},p.default.createElement("div",{className:"tab-bar-box"},k.slice(0,b[w]).map(({key:t,on:i})=>{const a=f.routers.find(e=>e.key===t);if(a){const{path:o,needLogin:r=!1,show:n}=a;return n||i?p.default.createElement("a",{key:t,disabled:!l&&!0===r,className:e.pathname===o?"active":null,onClick:e=>this.handleOnClickLink(e,t,o,r)},(0,h.__)("popupMain_"+t)):null}return null}),k.length>b[w]?p.default.createElement("div",{className:"extra-tools"},w>1&&r&&r.isExtraRoute?p.default.createElement("a",{className:"current-extra-section active"},(0,h.__)("popupMain_"+r.key)):null,p.default.createElement(s.Icon,{className:"show-more-tab-btn",icon:o?"top-arrow":"bottom-arrow",size:12,onClick:this.handleOnClickShowMoreTabBar,onMouseEnter:this.showMoreTabBar})):null)),k.length>b[w]-1?p.default.createElement("div",{className:["more-tab-bar",o?"show":"",M?"is-vip":""].join(" ")},k.slice(b[w]).map(({key:t,on:i})=>{const a=f.routers.find(e=>e.key===t);if(a){const{path:o,needLogin:r=!1,show:n}=a;return n||i?p.default.createElement("a",{key:t,disabled:!l&&!0===r,className:e.pathname===o?"active":null,onClick:e=>this.handleOnClickLink(e,t,o,r)},(0,h.__)("popupMain_"+t)):null}return null}),M?null:p.default.createElement("span",{className:"vip-btn",onClick:x},"\u81ea\u5b9a\u4e49\u6392\u5e8f\u548c\u663e\u793a\u6570\u91cf ~ \u70b9\u51fb\u5f00\u901a\u4f1a\u5458")):null),p.default.createElement("div",{className:["content",!n&&i||C?"show-top-bar":""].join(" ")},!n&&i?p.default.createElement("div",{className:"login-wrapper"},"\u65b0\u589e\u5341\u591a\u9879\u7279\u6027\uff0c\u5f00\u59cb\u4e2a\u6027\u5316\u5b9a\u5236~",p.default.createElement("a",{className:"skip-btn",onClick:this.handleOnClickSkipLogin},"\u5173\u95ed"),p.default.createElement("a",{className:"login-btn",onClick:this.handleOnClickLogin,href:chrome.runtime.getURL("html/config.html"),target:"_blank",rel:"noreferrer"},"\u70b9\u51fb\u767b\u5f55")):null,u&&u.needUpdate&&C?p.default.createElement("div",{className:"need-update-wrapper"},"\u65b0\u7248\u672c\u300c",u.latestVersion,"\u300d\u73b0\u5df2\u53d1\u5e03 ~",p.default.createElement("a",{className:"skip-btn",onClick:this.handleOnClickSkipUpdate},"\u5173\u95ed"),p.default.createElement("a",{className:"need-update-btn",href:"https://acghelper.com",target:"_blank",rel:"noreferrer"},"\u7acb\u5373\u66f4\u65b0")):null,p.default.createElement(p.default.Suspense,{fallback:p.default.createElement("div",null,"Loading...")},p.default.createElement(d.Switch,{location:e},f.routers.map(({title:e,path:t,exact:i,component:a})=>p.default.createElement(d.Route,{key:t,title:e,path:t,exact:i,component:a}))))),p.default.createElement(c.BilibiliWebsiteMap,{show:_}))}},a.contextType=m.MainStore,a))},62886:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(51920),r=a(i(57689)),n=i(47532),l=a(i(635)),s=i(99036),c=i(47573),p=l.default.div.attrs({className:"popup-main-live"})`
  .topic {
    margin: 0 -10px 6px;
    padding: 4px 0 4px 10px;
    font-size: 12px;
    color: #3B3B3B;
    position: sticky;
    top: -10px;
    z-index: 2;
    background-color: #f4f4f4;
  }

  .list {
    position: relative;
    display: grid;
    //grid-template-columns: repeat(auto-fill, 196px);
    //grid-template-rows: repeat(auto-fill, 135px);
    grid-column-gap: 12px;
    grid-row-gap: 8px;
    margin-bottom: 30px;
    padding-bottom: 12px;

    .LazyLoad {
      min-height: 121px;
    }
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    color: #171717;
    user-select: none;
    //grid-column-end: span 2;
    overflow: hidden;

    .button {
      margin-bottom: 6px;
      cursor: pointer;

      .button-view {
        padding: 0 22px;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .topic {
      color: #999999;
      background-color: #1f1f1f;
    }

    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`;class d extends r.default.Component{constructor(e){super(e),this.getFeedList=(e=1,t=10)=>{chrome.runtime.sendMessage({target:"mainLive",event:"getLiveFeedList",pn:e,ps:t},i=>{const{rooms:a,count:o}=i;let{rooms:r,hasMore:n,roomIdList:l}=this.state;a.forEach(e=>{e.isSpecialAttention=this.context.specialAttentionList.includes(e.owner.mid)});const s=a.filter(e=>{if(!l.has(e.roomId))return l.add(e.roomId),!0});r.push(...s),r.length>=o&&(n=!1),this.setState({rooms:r,count:o,hasMore:n,pn:e,ps:t})})},this.handleOnClickCover=(e,t,i,a)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_live",action:"click_live_card",label:a}),this.context.createTab(e,i)},this.handleOnClickUserName=(e,t)=>{e.preventDefault(),e.stopPropagation(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_live",action:"click_live_card",label:"upper_name"}),this.context.createTab(e,"https://space.bilibili.com/"+t)},this.state={rooms:[],roomIdList:new Set,count:0,pn:1,ps:10,hasMore:!0},this.listRef=r.default.createRef(),this.bottomObserverRef=r.default.createRef()}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/live"}),this.getFeedList(),this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{if(this.state.hasMore){const{count:t,rooms:i,pn:a,ps:o}=this.state;e.length&&e[0].intersectionRatio&&this.getFeedList(a+1,o)}else t.disconnect()},{root:this.listRef.current,threshold:[0,.5]}),this.observer.observe(this.bottomObserverRef.current))}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{rooms:e,count:t,hasMore:i,pn:a,ps:n}=this.state,{columns:l}=this.context;return r.default.createElement(p,{ref:this.listRef},r.default.createElement("h6",{className:"topic"},"\u6b63\u5728\u76f4\u64ad (",t,")"),r.default.createElement(s.Section,{columns:l,rowGap:8,columnsGap:12,footer:r.default.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},i&&e&&e.length>=0?r.default.createElement(o.Button,{className:"border",onClick:()=>this.getFeedList(a+1,n)},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},e&&e.length>0?e.map((e,t)=>r.default.createElement(o.LiveCard,Object.assign({key:e.roomId,onClickUserName:t=>this.handleOnClickUserName(t,e.owner.mid),onClickCover:i=>this.handleOnClickCover(i,e.roomId,e.link,t)},e))):"\u6ca1\u6709\u76f4\u64ad\u4fe1\u606f"))}}d.contextType=c.MainStore,t["default"]=(0,n.withRouter)(d)},91827:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(51920),r=a(i(57689)),n=i(47532),l=a(i(635)),s=i(99036),c=i(47573),p=l.default.div.attrs({className:"popup-main-recently-posted"})`
  .section {
    .section-content {
      padding-bottom: 40px;
    }
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    user-select: none;
    //grid-column-end: span 2;
    color: #171717;
    overflow: hidden;

    .button {
      margin-bottom: 6px;
      cursor: pointer;

      .button-view {
        padding: 0 22px;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`,d=l.default.div`
  cursor: pointer;
  perspective: 1000px;
  transition: transform ease .3s;
  transform: perspective(100px) translateZ(0px);

  :hover {
    transform: perspective(100px) translateZ(5px);

    .cover-image {
      box-shadow: 0 3px 10px rgb(0 0 0 / 60%);
      filter: brightness(1);
    }
  }

  .cover {
    position: relative;
    display: block;

    :before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 38px;
      width: 100%;
      //border-radius: 0 0 2px 2px;
      //background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));
      z-index: 1;
      pointer-events: none;
    }
  }

  .cover-image {
    box-shadow: 0 0 3px rgb(0 0 0 / 10%);
    transition: box-shadow .3s, filter .3s;

    img {
      display: block;
    }
  }

  @media (prefers-color-scheme: dark) {
    .cover-image {
      filter: brightness(0.8);
    }
  }
`;class u extends r.default.Component{constructor(e){super(e),this.getList=(e=1)=>{const{ps:t,list:i}=this.state;return new Promise((a,o)=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://manga.bilibili.com/twirp/bookshelf.v1.Bookshelf/ListFavorite?device=pc&platform=web",options:{method:"POST",body:JSON.stringify({page_num:e,page_size:t,order:1,wait_free:0}),headers:{"content-type":"application/json;charset=UTF-8","bilibili-helper-header-action-set-origin":"https://www.bilibili.com"},contentType:"json"}},({data:r})=>{r&&r.data?(i.push(...r.data),this.setState({pn:e+1,list:i,hasMore:r.data.length===t}),a()):o()})})},this.handleOnClickCover=(e,t)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_manga",action:"click_video"}),this.context.createTab(e,"https://manga.bilibili.com/detail/mc"+t)},this.state={list:[],pn:1,ps:9,hasMore:!0},this.listRef=r.default.createRef(),this.bottomObserverRef=r.default.createRef()}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/manga"}),this.getList().then(()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{const{pn:i,hasMore:a}=this.state;a?e.length&&e[0].intersectionRatio&&this.getList(i):t.disconnect()},{root:this.listRef.current,threshold:[0,.5]}),this.observer.observe(this.bottomObserverRef.current))})}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{hasMore:e,list:t,pn:i}=this.state,{columns:a,videoCardType:n}=this.context;return r.default.createElement(p,{ref:this.listRef},r.default.createElement(s.Section,{columns:3,style:{gridColumnEnd:"span 3"},columnsGap:16,rowGap:16,footer:r.default.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},e?r.default.createElement(o.Button,{className:"border",onClick:()=>this.getList(i)},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null)},t.length>0?t.map(e=>r.default.createElement(d,{key:e.id},r.default.createElement("div",{className:"cover",onClick:t=>this.handleOnClickCover(t,e.comic_id),onAuxClick:t=>this.handleOnClickCover(t,e.comic_id)},r.default.createElement("div",{className:"cover-image"},r.default.createElement(o.Image,{url:e.vcover+"@242w_252h.webp"}))))):"\u6ca1\u6709\u6570\u636e"))}}u.contextType=c.MainStore,t["default"]=(0,n.withRouter)(u)},41995:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(51920),r=a(i(57689)),n=i(47532),l=a(i(635)),s=i(47573),c=l.default.div.attrs({className:"popup-main-recently-posted"})`
  .list {
    position: relative;
    display: grid;
    //grid-template-columns: repeat(auto-fill, 196px);
    //grid-template-rows: repeat(auto-fill, 135px);
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    margin-bottom: 42px;

    .LazyLoad {
      min-height: 149px;
    }
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    user-select: none;
    //grid-column-end: span 2;
    color: #171717;
    overflow: hidden;

    .button {
      margin-bottom: 6px;
      cursor: pointer;
      .button-view {
        padding: 0 22px;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`;class p extends r.default.Component{constructor(e){super(e),this.currentDidList=new Set,this.handleOnClickVideoCover=(e,t,i)=>{e.persist(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_recently_posted",action:"click_video",label:i}),this.context.createTab(e,"https://www.bilibili.com/video/"+t)},this.handleOnClickUserName=(e,t)=>{e.persist(),e.stopPropagation(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_recently_posted",action:"click_video",label:"upper_name"}),this.context.createTab(e,"https://space.bilibili.com/"+t)},this.getDynamic=e=>new Promise(t=>{chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getDynamic",offsetDynamicId:e},e=>{if(e){const{cards:i,specialAttentionList:a}=this.state,{hasMore:o,offsetDynamicId:r}=e;e.cards=e.cards.filter(e=>{if(!this.currentDidList.has(e.desc.dynamic_id_str))return this.currentDidList.add(e.desc.dynamic_id_str),!0}),i.push(...e.cards),this.setState({hasMore:o,cards:i,offsetDynamicId:r},()=>{t()})}else t()})}),this.handleOnClickSpecialAttentionBtn=(e,t)=>{e.stopPropagation();const{specialAttentionList:i,cards:a}=this.state;new Promise((e,a)=>{i.includes(t)?(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_recently_posted",action:"click_video",label:"specialAttention_remove"}),chrome.runtime.sendMessage({target:"specialAttention",event:"removeSpecialAttention",uid:t},o=>{if(o){const o=i.indexOf(t);o>=0?(i.splice(o,1),e(i)):a()}else a()})):(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_recently_posted",action:"click_video",label:"specialAttention_add"}),chrome.runtime.sendMessage({target:"specialAttention",event:"addSpecialAttention",uid:t},o=>{o?(i.push(t),e(i)):a()}))}).then(e=>{let t=a.map(t=>(t.isSpecialAttention=e.includes(t.desc.uid),t));this.setState({specialAttentionList:e,cards:t})})},this.state={hasMore:!1,cards:[],offsetDynamicId:0,specialAttentionList:[]},this.listRef=r.default.createRef(),this.bottomObserverRef=r.default.createRef()}componentDidMount(){chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"clearNewList"}),chrome.runtime.sendMessage({target:"specialAttention",event:"getSpecialAttentionList"},e=>{this.setState({specialAttentionList:e},()=>{this.getDynamic(0).then(()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{this.state.hasMore?e.length&&e[0].intersectionRatio&&this.getDynamic(this.state.offsetDynamicId):t.disconnect()},{root:this.listRef.current}),this.observer.observe(this.bottomObserverRef.current))})})})}shouldComponentUpdate(e,t,i){return 0!==this.state.cards.length&&this.state.cards.length===t.cards.length}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{cards:e,hasMore:t}=this.state,{columns:i,videoCardType:a}=this.context,n="new"===a?o.VideoClassMap.new:o.VideoClassMap.old;return r.default.createElement(c,{ref:this.listRef},r.default.createElement("div",{className:"list",style:{gridTemplateColumns:`repeat(${i}, 1fr)`}},e.length>0?e.map((e,t)=>{const{desc:i,card:a}=e;return r.default.createElement(n,Object.assign({key:i.dynamic_id_str,isSpecialAttention:e.isSpecialAttention},a,{owner:{name:i.user_profile.info.uname,mid:i.uid,face:i.user_profile.info.face},onClickUserName:e=>this.handleOnClickUserName(e,i.uid),onClickCover:e=>this.handleOnClickVideoCover(e,i.bvid,t),onClickFollowBtn:e=>this.handleOnClickSpecialAttentionBtn(e,i.uid)}))}):null),r.default.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},t?r.default.createElement(o.Button,{className:"border",onClick:()=>this.getDynamic(this.state.offsetDynamicId)},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"):null))}}p.contextType=s.MainStore,t["default"]=(0,n.withRouter)(p)},37398:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(51920),r=a(i(57689)),n=i(47532),l=a(i(635)),s=i(46974),c=i(10243),p=i(47573),d=i(99036),u=a(i(52296)),h=a(i(56058)),m=l.default.div.attrs({className:"popup-main-recommend"})`
  .list {
    position: relative;
    display: grid;
    //grid-template-columns: repeat(auto-fill, 196px);
    //grid-template-rows: repeat(auto-fill, 135px);
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    margin-bottom: 42px;

    .LazyLoad {
      min-height: 149px;
    }
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    user-select: none;
    //grid-column-end: span 2;
    color: #171717;
    overflow: hidden;

    .button {
      margin-bottom: 6px;
      cursor: pointer;

      .button-view {
        padding: 0 22px;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`,f=h.default.get("accessKeyForGetRecommendVideo");class g extends r.default.Component{constructor(e){super(e),this.currentCidList=new Set,this.getAccessConfirmUrl=()=>new Promise(e=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://passport.bilibili.com/login/app/third?appkey=27eb53fc9058f8c3&api=https://www.mcbbs.net/template/mcbbs/image/special_photo_bg.png&sign=04224646d1fea004e79606d3b038c84a",options:{contentType:"json"}},({data:t})=>{e(t?t.data.confirm_uri:null)})}),this.getAccessKey=e=>new Promise(t=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:e},(i={})=>{const{data:a}=i;if(a){const i=new u.default(e,!0),o=new u.default(a.url,!0);if(o.query&&o.query.access_key){const e={accessKey:o.query.access_key,apiKey:i.query.appkey};this.setState({keys:e},()=>{this.getVideoList()}),h.default.set("accessKeyForGetRecommendVideo",e),t(!0)}}t()})}),this.handleOnClickVideoCover=(e,t,i)=>{e.stopPropagation(),e.preventDefault(),e.persist(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_recommed",action:"click_video",label:i}),this.context.createTab(e,"https://www.bilibili.com/video/av"+t)},this.getVideoList=()=>new Promise(e=>{this.state.loading?e(!1):this.setState({loading:!0});const{accessKey:t,apiKey:i}=this.state.keys,a=Math.floor(Date.now()/1e3).toString()+"0"+Math.floor(10*Math.random()).toString();chrome.runtime.sendMessage({target:"requestController",event:"create",url:`https://app.bilibili.com/x/v2/feed/index?appkey=${i}&access_key=${t}&build=1&mobi_app=android&idx=${a}`,options:{contentType:"json"}},({data:t})=>{var i;if(setTimeout(()=>{this.state.loading&&this.setState({loading:!1})},1e3),t&&(null===(i=null===t||void 0===t?void 0:t.data)||void 0===i?void 0:i.items)&&t.data.items.length>0){const{videoList:i,specialAttentionList:a}=this.state,o=t.data.items.map(e=>{const{args:t,player_args:i}=e;if(!i)return!1;const{aid:o,cid:r,duration:n}=i,{up_id:l,rname:p,up_name:d}=t;return!this.currentCidList.has(r)&&(this.currentCidList.add(r),{isSpecialAttention:a.includes(l),videoInfo:{aid:o,cid:r,bvid:(0,c.av2bv)(r),cover:e.cover,duration:e.cover_right_text,title:e.title,publishDate:(0,s.videoPublishDescription)(10*e.idx),tagName:p},userInfo:{uid:l,name:d}})}).filter(Boolean);i.push(...o),this.setState({videoList:i,loading:!1},()=>e())}else e()})}),this.handleOnClickSpecialAttentionBtn=(e,t)=>{e.stopPropagation(),e.preventDefault();const{specialAttentionList:i,videoList:a}=this.state;new Promise((e,a)=>{i.includes(t)?(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_recommend",action:"click_video",label:"specialAttention_remove"}),chrome.runtime.sendMessage({target:"specialAttention",event:"removeSpecialAttention",uid:t},o=>{if(o){const o=i.indexOf(t);o>=0?(i.splice(o,1),e(i)):a()}else a()})):(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_recommend",action:"click_video",label:"specialAttention_add"}),chrome.runtime.sendMessage({target:"specialAttention",event:"addSpecialAttention",uid:t},o=>{o?(i.push(t),e(i)):a()}))}).then(e=>{let t=a.map(t=>(t.isSpecialAttention=e.includes(t.userInfo.uid),t));this.setState({specialAttentionList:e,videoList:t})}).catch(e=>{})},this.state={videoList:[],specialAttentionList:[],loading:!1,keys:f||{accessKey:"",apiKey:""}},this.listRef=r.default.createRef(),this.bottomObserverRef=r.default.createRef()}componentDidMount(){new Promise(e=>{e()}).then(()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"getSpecialAttentionList"},e=>{this.setState({specialAttentionList:e},()=>{this.getVideoList().then(()=>{this.listRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{!this.state.loading&&e.length&&e[0].intersectionRatio&&this.getVideoList()},{root:this.listRef.current,threshold:[0,.5]}),this.observer.observe(this.bottomObserverRef.current))})})})})}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{videoList:e}=this.state,{columns:t,videoCardType:i}=this.context,a=o.VideoClassMap[i];return r.default.createElement(m,{ref:this.listRef},r.default.createElement(d.Section,{columns:t,rowGap:6,columnsGap:6,footer:r.default.createElement("div",{ref:this.bottomObserverRef,className:"bottom-observer"},r.default.createElement(o.Button,{className:"border",onClick:()=>this.getVideoList()},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"))},e.map((e,t)=>r.default.createElement(a,{key:e.videoInfo.cid,isSpecialAttention:e.isSpecialAttention,videoInfo:e.videoInfo,userInfo:e.userInfo,onClickCover:i=>this.handleOnClickVideoCover(i,e.videoInfo.aid,t),onClickFollowBtn:t=>this.handleOnClickSpecialAttentionBtn(t,e.userInfo.uid),showTag:this.context.showTag}))))}}g.contextType=p.MainStore,t["default"]=(0,n.withRouter)(g)},1642:function(e,t,i){var a=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,o)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&a(t,e,i);return o(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.routers=void 0;const l=n(i(57689));t.routers=[{key:"home",path:"/",component:l.default.lazy(()=>Promise.resolve().then(()=>r(i(40793)))),exact:!0,needLogin:!1,show:!0},{key:"specialAttention",path:"/specialAttention",component:l.default.lazy(()=>Promise.resolve().then(()=>r(i(36393)))),exact:!0,needLogin:!1,show:!1},{key:"recentlyPosted",path:"/recentlyPosted",component:l.default.lazy(()=>Promise.resolve().then(()=>r(i(41995)))),exact:!0,needLogin:!0,show:!1},{key:"animeTimeTable",path:"/animeTimeTable",component:l.default.lazy(()=>Promise.resolve().then(()=>r(i(89922)))),show:!1},{key:"anime",path:"/anime",component:l.default.lazy(()=>Promise.resolve().then(()=>r(i(17283)))),needLogin:!0,show:!1},{key:"live",path:"/live",component:l.default.lazy(()=>Promise.resolve().then(()=>r(i(62886)))),exact:!0,needLogin:!0,show:!1},{key:"recommend",path:"/recommend",component:l.default.lazy(()=>Promise.resolve().then(()=>r(i(37398)))),exact:!0,needLogin:!0,show:!1},{key:"favlist",path:"/favlist",component:l.default.lazy(()=>Promise.resolve().then(()=>r(i(61558)))),exact:!0,needLogin:!0,show:!1},{key:"history",path:"/history",component:l.default.lazy(()=>Promise.resolve().then(()=>r(i(61527)))),exact:!0,needLogin:!0,show:!1},{key:"watchLater",path:"/watchLater",component:l.default.lazy(()=>Promise.resolve().then(()=>r(i(37249)))),exact:!0,needLogin:!0,show:!1},{key:"manga",path:"/manga",component:l.default.lazy(()=>Promise.resolve().then(()=>r(i(91827)))),exact:!0,needLogin:!0,show:!1},{key:"realHome",path:"/home",component:l.default.lazy(()=>Promise.resolve().then(()=>r(i(56319)))),exact:!0,needLogin:!0,show:!1},{key:"creator",path:"/creator",component:l.default.lazy(()=>Promise.resolve().then(()=>r(i(77334)))),exact:!0,needLogin:!0,show:!1}]},72738:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SpecialAccountBlock=void 0;const o=i(51920),r=i(95039),n=i(47573),l=a(i(57689)),s=a(i(635)),c=i(99036),p=s.default.div.attrs({className:"special-account-block"})`
  padding-top: 10px;
  padding-bottom: 20px;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
`,d=s.default.div`
  display: flex;
  padding: 0 0 4px;
  width: 100%;
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 1px;
    border-bottom: none;
  }

  .avatar {
    flex-shrink: 0;
    margin-left: 2px;
    margin-right: 8px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }

  .info {
    flex-grow: 1;
    max-width: 540px;
    box-sizing: border-box;

    h6 {
      display: flex;
      align-items: center;
      margin: 0 0 4px 0;
      font-size: 14px;
      line-height: 14px;

      .level {
        margin-left: 8px;
        padding: 0 6px;
        border-radius: 3px;
        color: #fff;
        zoom: 0.7;

        &.lv0 {
          background-color: #bfbfbf;
        }

        &.lv1 {
          background-color: #bfbfbf;
        }

        &.lv2 {
          background-color: #95ddb2;
        }

        &.lv3 {
          background-color: #93d1e4;
        }

        &.lv4 {
          background-color: #ffb37c;
        }

        &.lv5 {
          background-color: #fe6c06;
        }

        &.lv6 {
          background-color: #fe0202;
        }
      }

      .living {
        margin-left: 14px;
        vertical-align: bottom;
        color: var(--bilibili-pink);
        zoom: 0.7;
      }
    }

    p {
      margin: 0 0 4px 0;
      overflow: hidden;
      //white-space: nowrap;
      text-overflow: ellipsis;
      color: #666;

      span, a {
        margin-right: 12px
      }
    }

    a:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    i {
      font-style: normal;
    }
  }

  @media (prefers-color-scheme: dark) {
    .info {
      .username {
        color: #bbb;
      }
    }
  }
`,u=s.default.div.attrs({className:"video-area"})`

  .topic {
    margin: 0 0 6px;
    font-weight: bold;
    color: #989898;
    zoom: 0.8;
  }

  .video-list {
    display: flex;
    flex-direction: column;
    width: calc(100% - 6px);
    //height: 147px;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .section-title {
      margin: 0 0 4px;
      padding: 0;
    }

    .video-card {
      //margin-right: 6px;
      height: auto;

      &:last-of-type {
        margin-right: 0;
      }
    }

    .more-video-btn {
      margin-top: 10px;
      width: 100%;
      height: 50px;
      line-height: 30px;
      flex-shrink: 0;
      text-align: center;
      //line-height: 75px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;class h extends l.default.Component{constructor(e){super(e),this.state={recentlyVideos:[],pn:1,ps:30,hasMoreVideo:!0},this.videoListRef=l.default.createRef(),this.bottomObserverRef=l.default.createRef(),this.getVideoInfo=e=>{(this.state.hasMoreVideo||e)&&chrome.runtime.sendMessage({target:"specialAttention",event:"fetchSpecialAccountVideoData",uid:this.props.uid,pn:this.state.pn,ps:this.state.ps},e=>{const{recentlyVideos:t,ps:i,pn:a}=this.state;e.page&&(t.push(...e.list),this.setState({recentlyVideos:t,pn:a+1,ps:i,hasMoreVideo:e.page.count/e.page.ps>e.page.pn}))})},this.getLiveInfo=()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"fetchSpecialAccountLiveData",uid:this.props.uid},e=>{this.setState({liveRoomInfo:e})})},this.handleOnCreateUserSpaceTab=e=>{this.context.createTab(e,"https://space.bilibili.com/"+this.props.uid,{strict:!1})},this.handleOnClickViewMoreVideo=e=>{this.context.createTab(e,`https://space.bilibili.com/${this.props.uid}/video`,{strict:!1})},this.handleOnClickLiveRoom=e=>{const{livingData:t}=this.props;this.context.createTab(e,"https://live.bilibili.com/"+t.roomId,{strict:!1})},this.handleOnClickVideoCover=(e,t)=>{e.preventDefault(),this.context.createTab(e,"https://www.bilibili.com/video/"+t,{strict:!1})}}componentDidMount(){this.videoListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{this.state.hasMoreVideo&&e.length&&0!==e[0].intersectionRatio&&this.getVideoInfo()},{root:this.videoListRef.current,threshold:[0,.5]}),this.observer.observe(this.bottomObserverRef.current))}renderRecommendVideoList(){const{recentlyVideos:e}=this.state,t=r.VideoClassMap[this.context.videoCardType];return e&&e.length>0?e.map(({videoInfo:e,userInfo:i})=>l.default.createElement(t,{key:e.bvid,userInfo:i,videoInfo:e,hideAuthor:!0,showNewTag:!0,onClickCover:t=>this.handleOnClickVideoCover(t,e.bvid),showPublishTime:!0})):"\u6ca1\u6709\u89c6\u9891\u6570\u636e"}render(){const{face:e,username:t,sign:i,level:a,id:r,livingData:n}=this.props,{hasMoreVideo:s}=this.state,{columns:h}=this.context;return l.default.createElement(p,{id:r,ref:this.videoListRef},l.default.createElement(d,null,l.default.createElement("div",{className:"avatar",onClick:this.handleOnCreateUserSpaceTab,onAuxClick:this.handleOnCreateUserSpaceTab},l.default.createElement(o.Image,{url:e})),l.default.createElement("div",{className:"info"},l.default.createElement("h6",null,l.default.createElement("a",{className:"username",onClick:this.handleOnCreateUserSpaceTab,onAuxClick:this.handleOnCreateUserSpaceTab},t),l.default.createElement("span",{className:"level lv"+a},"Lv.",a),n&&!!n.living&&l.default.createElement("a",{className:"living",onClick:this.handleOnClickLiveRoom,onAuxClick:this.handleOnClickLiveRoom},"\u76f4\u64ad\u4e2d...")),l.default.createElement("p",{title:i},i))),l.default.createElement(u,null,l.default.createElement(c.Section,{title:"\u6700\u8fd1\u6295\u7a3f",columns:h,rowGap:4,columnsGap:6,className:"video-list",footer:s&&l.default.createElement("div",{ref:this.bottomObserverRef,className:"more-video-btn",onClick:this.getVideoInfo},"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a")},this.renderRecommendVideoList())))}}t.SpecialAccountBlock=h,h.contextType=n.MainStore},36393:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(51920),r=a(i(57689)),n=a(i(54363)),l=a(i(635)),s=i(47532),c=i(72738),p=l.default.div.attrs({id:"specialAttentionPage",className:"popup-main-special-attention"})`
  display: flex;
  padding: 0 !important;

  .quick-btn-area {
    flex-shrink: 0;
    padding: 4px 0 0 6px;
    width: calc(100% - 8px);
    height: 100%;
    //background-color: #f4f4f4;
    z-index: 3;
    overflow: visible auto;
    box-sizing: border-box;
    pointer-events: none;

    :hover {
      .quick-btn {
        opacity: 1;
      }
    }

    .quick-btn-list {
      display: grid;
      grid-row-gap: 4px;
      justify-content: flex-start;
      margin: -4px;
      padding: 10px 4px 0 2px;
      width: fit-content;
      //height: fit-content;
      max-height: 100%;
      box-sizing: border-box;
      overflow: auto;
      pointer-events: auto;
      scrollbar-width: none;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 100%;
        background-color: rgb(244, 244, 244);
        box-shadow: 0.5px 0 6px 0 #ddd;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .quick-btn {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: center;

      width: fit-content;
      border-radius: 50px;
      //background-color: #f4f4f4;
      box-sizing: border-box;
      cursor: pointer;
      pointer-events: none;
      width: fit-content;

      opacity: 0.4;
      transition: opacity .2s ease;

      &:hover {
        //background-color: #d0cfcf;

        .cover {
          border-color: #d0cfcf;
        }

        .name {
          display: block;
        }
      }

      &:last-of-type {

      }

      &.active {
        opacity: 1;
      }

      .cover {
        flex-shrink: 0;
        width: 28px;
        height: 28px;
        line-height: 25px;
        border: 2px solid transparent;;
        border-radius: 50%;
        overflow: hidden;
        z-index: 1;
        pointer-events: initial;

        &.living {
          border: 2px solid var(--bilibili-pink);

          ::after {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            box-shadow: inset 0 0px 2px rgb(0 0 0 / 90%);
          }
        }

        .img {
          pointer-events: none;
        }

        .living-tag {
          position: absolute;
          bottom: -12px;
          left: 5px;
          font-weight: bolder;
          color: var(--bilibili-pink);
          text-shadow: 0px 0px 1px white, 0px 0px 1px white, 0px 0px 1px white, 0px 0px 1px white, 0px 0px 1px white, 0px 0px 1px white;
          zoom: 0.7;
        }

        .bilibili-helper-2-icon-option {
          margin: 6px;
        }
      }

      .name {
        //position: absolute;
        //top: 0;
        //left: calc(100% - 12px);
        display: none;
        margin-left: -14px;
        padding: 2px 8px 2px 18px;
        width: max-content;
        height: 20px;
        line-height: 16px;
        box-sizing: border-box;
        border-radius: 0 15px 15px 0;
        background-color: #e6e6e6;
        word-break: keep-all;
        pointer-events: none;
      }
    }
  }

  .account-block-list {
    flex-grow: 1;
    margin-left: calc(-100% + 46px);
    padding-left: 6px;
    //width: calc(100% - 36px);
    height: 100%;
    overflow: auto;
  }

  @media (prefers-color-scheme: dark) {
    color: #474747;

    .quick-btn-area {
      .quick-btn-list {
        &::before {
          background-color: rgb(21 21 21);
          box-shadow: none;
        }
      }

      .quick-btn {
        color: #bbb;

        &:hover {
          .cover {
            border-color: #545454;
          }

        }

        .name {
          background-color: #1d1c1c;
          color: #bbb;
        }
      }
    }
  }
`,d=l.default.div.attrs({className:"empty-page"})`
  margin: auto;
  padding: 60px 40px;
  height: calc(100% - 120px);
  color: #999999;
  text-align: center;
  overflow: hidden;

  h1 {
    margin-bottom: 4px;
  }

  p {
    margin-top: 0;
    margin-bottom: -10px;
    font-size: 16px;
    z-index: 1;

    a {
      font-weight: bold;
      color: #999999;
      cursor: pointer;
    }
  }

  .bilibili-helper-2-iconfont {
    display: block;
    margin: 0 auto 0 50%;
    transform: translate(-50%, 0px);
    color: #E5E5E5;
    pointer-events: none;
  }

  @media (prefers-color-scheme: dark) {
    color: #474747;

    .bilibili-helper-2-iconfont {
      color: #171717;
    }
  }
`;t["default"]=(0,s.withRouter)(class extends r.default.Component{constructor(e){super(e),this.quickButtonMoveoutHandle=null,this.updateAccountList=()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"getSpecialAttentionAccountList"},(e=[])=>{this.setState({attentionList:e})})},this.getLivingList=()=>{chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"getFullSimpleLiveList"},(e=[])=>{this.setState({livingList:e})})},this.handleOnClickAddAttention=()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",redirect:chrome.runtime.getURL("/html/config.html#/specialAttention"),url:chrome.runtime.getURL("/html/config.html#/specialAttention")})},this.handleOnClickQuickBtn=(e,t)=>{const i=document.getElementById("user"+e);this.setState({currentIndex:t}),i&&(i.scrollTop=0)},this.handleOnMouseEnterQuickBtnArea=e=>{e.persist(),clearTimeout(this.quickButtonMoveoutHandle)},this.handleOnMouseLeaveQuickBtnArea=e=>{e.persist(),clearTimeout(this.quickButtonMoveoutHandle),this.quickButtonMoveoutHandle=setTimeout(()=>{const t=e.target.querySelector(".active");t&&t.scrollIntoView({block:"nearest",behavior:"smooth"})},1e3)},this.state={attentionList:[],livingList:[],currentIndex:0}}componentDidMount(){this.getLivingList(),this.updateAccountList()}renderEmpty(){return r.default.createElement(d,null,r.default.createElement("h1",null,"\u6ca1\u6709\u7279\u522b\u5173\u6ce8\u7684\u4e3b\u64ad\u54e6"),r.default.createElement("p",null,"\u70b9\u51fb ",r.default.createElement("a",{onClick:this.handleOnClickAddAttention},"\u8fd9\u91cc")," \u5f00\u59cb\u6dfb\u52a0"),r.default.createElement(o.Icon,{icon:"cat-tm",size:268}))}renderList(){const{attentionList:e,currentIndex:t,livingList:i}=this.state;return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"quick-btn-area",onMouseLeave:this.handleOnMouseLeaveQuickBtnArea,onMouseEnter:this.handleOnMouseEnterQuickBtnArea},r.default.createElement("div",{className:"quick-btn-list"},e&&e.map((e,a)=>{const n=i.find(({owner:t})=>String(t.mid)===e.uid);return r.default.createElement("div",{key:e.uid,className:["quick-btn",a===t?"active":null].filter(Boolean).join(" "),onClick:()=>this.handleOnClickQuickBtn(e.uid,a)},r.default.createElement("div",{className:["cover",n&&n.living?"living":""].filter(Boolean).join(" ")},r.default.createElement(o.Image,{url:e.face})),r.default.createElement("div",{className:"name"},e.username))}),r.default.createElement("div",{className:"quick-btn",onClick:this.handleOnClickAddAttention},r.default.createElement("div",{className:"cover"},r.default.createElement(o.Icon,{size:16,icon:"option"})),r.default.createElement("div",{className:"name"},"\u7ba1\u7406\u7279\u5173")))),r.default.createElement("div",{className:"account-block-list"},e.length>0?r.default.createElement(r.default.Fragment,null,r.default.createElement(n.default,{key:e[t].uid,overflow:!0,scrollContainer:"#specialAttentionPage"},r.default.createElement(c.SpecialAccountBlock,Object.assign({id:"user"+e[t].uid},e[t],{livingData:i.find(({owner:i})=>String(i.mid)===e[t].uid)})))):"\u6ca1\u6709\u6570\u636e"))}render(){const{attentionList:e}=this.state;return r.default.createElement(p,null,0===e.length?this.renderEmpty():this.renderList())}})},37249:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(95039),r=a(i(57689)),n=i(47532),l=a(i(635)),s=i(99036),c=i(47573),p=l.default.div.attrs({className:"popup-main-recently-posted"})`
  .list {
    position: relative;
    display: grid;
    //grid-template-columns: repeat(auto-fill, 196px);
    //grid-template-rows: repeat(auto-fill, 135px);
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    margin-bottom: 42px;

    .LazyLoad {
      min-height: 149px;
    }
  }

  .bottom-observer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    height: 42px;
    text-align: center;
    user-select: none;
    //grid-column-end: span 2;
    color: #171717;
    overflow: hidden;

    .button {
      margin-bottom: 6px;
      cursor: pointer;

      .button-view {
        padding: 0 22px;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .bottom-observer {
      .button {
        border-color: var(--google-grey-700);
        color: var(--bilibili-gray);
      }
    }
  }
`;class d extends r.default.Component{constructor(e){super(e),this.getWatchLaterList=()=>{chrome.runtime.sendMessage({target:"watchLater",event:"getList"},e=>{e&&(e.forEach(e=>{e.isSpecialAttention=this.context.specialAttentionList.includes(e.userInfo.uid)}),this.setState({cards:e}))})},this.handleOnClickVideoCover=(e,t,i)=>{e.stopPropagation(),e.preventDefault(),e.persist(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_watch_later",action:"click_video",label:i}),this.context.createTab(e,"https://www.bilibili.com/video/"+t)},this.handleOnClickUserName=(e,t)=>{e.preventDefault(),e.stopPropagation(),e.persist(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_watch_later",action:"click_video",label:"upper_name"}),this.context.createTab(e,"https://space.bilibili.com/"+t)},this.state={cards:[]}}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup/watchLater"}),this.getWatchLaterList()}render(){const{cards:e}=this.state,{columns:t,videoCardType:i}=this.context,a=o.VideoClassMap[i];return r.default.createElement(p,null,r.default.createElement(s.Section,{columns:t,style:{gridColumnEnd:"span "+t,marginBottom:"40px"}},e.length>0?e.map((e,t)=>{const{videoInfo:i,userInfo:o}=e;return r.default.createElement(a,{key:i.bvid,showWatcherLaterButton:!1,showRemoveWatcherLaterButton:!0,isSpecialAttention:e.isSpecialAttention,userInfo:o,videoInfo:i,onClickUserName:e=>this.handleOnClickUserName(e,o.uid),onClickCover:e=>this.handleOnClickVideoCover(e,i.bvid,t)})}):"\u6ca1\u6709\u89c6\u9891\u6570\u636e"))}}d.contextType=c.MainStore,t["default"]=(0,n.withRouter)(d)},76724:function(e,t,i){var a=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,o)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&a(t,e,i);return o(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Menu=void 0;const l=i(95947),s=i(18258),c=n(i(57689)),p=n(i(635)),d=i(83938),u=n(i(56058)),h=i(47573),m=p.default.div.attrs({className:"popup-menu"})`
  //display: inline-block;
  flex-shrink: 0;
  //padding-right: 1px;
  width: 80px;
  max-width: 80px;
  height: calc(100% - 30px);
  min-height: 1000px;
  max-height: calc(100% - 30px);
  //vertical-align: top;
  //padding-top: 4px;
  box-sizing: border-box;
  box-shadow: -0.5px 0 6px 0 #ddd;
  background-color: hsl(0deg 0% 93%);
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;

  &.empty {
    width: 0;
    .add-btn, .more-link {
      display: none;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .inner-menu {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 34px;
    padding-top: 4px;
    width: 80px;
    max-width: 80px;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .menu-item {
    display: block;
    margin: 0 auto 4px;
    width: calc(100% - 7px);
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    font-size: 14px;
    //border-radius: 3px;
    //border: 1px solid transparent;
    border: 1px solid rgb(245, 245, 245);
    background: #f9f9f9;
    text-align: center;
    cursor: pointer;
    transition: background-color 300ms, color 30ms, border-color 300ms;
    user-select: none;

    &:hover {
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
      border-color: rgb(0, 156, 214);
    }

    .button-view {
      transition: color 300ms;
    }

    //&:active {
    //  background-color: rgb(0 0 0 / 20%);
    //transform: scale(0.85);
    //}

    &.disabled {
      cursor: not-allowed;
      color: var(--google-grey-400);
    }
  }
  .add-btn {
    height: 24px;
  }
  .more-link {
    height: 24px;
    font-weight: bold;
  }
  
  @media (prefers-color-scheme: dark) {
    box-shadow: -0.5px 0 0 0.1px #111;
    background-color: hsl(0deg 0% 6%);
    color: hsl(0deg 0% 54%);

    .menu-item {
      border-color: transparent;
      background-color: hsl(0deg 0% 9%);

      &:hover {
        background-color: hsl(196deg 79% 42%);
        border-color: hsl(196deg 100% 26%);
      }

      &.disabled {
        color: #3c3c3c;
      }
    }
  }
`,f=u.default.get("popupMenu-config")||{},g=u.default.get("popupMenu-data_customMenu")||{};class b extends c.default.Component{constructor(e){super(e),this.handleOnClickDefaultMenu=(e,t,a)=>{const{bilibiliAccount:o}=this.context;a&&o||!a?(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_menu",action:"click_menu_item",label:t}),chrome.runtime.sendMessage({target:"popupMenu",event:"openNewTab",key:t,active:"silent"!==this.context.videoOpenMethod()&&0===e.button,activeIfExist:this.context.activeIfExist})):Promise.resolve().then(()=>r(i(58213))).then(({notifyNeedLogin:e})=>{e&&e()})},this.handleOnClickCustomMenu=(e,t,i)=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_menu",action:"click_custom_menu_item",label:i}),chrome.runtime.sendMessage({target:"popupMenu",event:"openNewTab",url:t,active:"silent"!==this.context.videoOpenMethod()&&0===e.button,activeIfExist:this.context.activeIfExist})},this.handleOnClickAddMore=e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",queryURL:chrome.runtime.getURL("/html/config.html"),url:chrome.runtime.getURL("/html/config.html#/popup"),strict:!1,activeIfExist:this.context.activeIfExist})},this.state={options:f.menuOptions?f.menuOptions.filter(({on:e})=>e):[],custom:void 0!==g?g:[]}}render(){const{options:e,custom:t}=this.state,{hasLogin:i,bilibiliAccount:a,setTriggerWebsiteMap:o}=this.context;return c.default.createElement(m,{className:0===e.length&&0===t.length?"empty":""},c.default.createElement("div",{className:"inner-menu"},c.default.createElement(l.Button,{className:"more-link menu-item",onClick:o},"\xb7 \xb7 \xb7"),e.map(({key:e,on:t,needLogin:i})=>t?c.default.createElement(l.Button,{key:e,className:"menu-item",disabled:i&&!a,onClick:t=>this.handleOnClickDefaultMenu(t,e,i),onAuxClick:t=>this.handleOnClickDefaultMenu(t,e,i)},(0,d.__)("popupMenu_kinds_"+e)):null),Object.entries(t).map(([e,t])=>c.default.createElement(l.Button,{key:e,className:"menu-item",onClick:e=>this.handleOnClickCustomMenu(e,t.url),onAuxClick:e=>this.handleOnClickCustomMenu(e,t.url)},t.title)),c.default.createElement(l.Button,{className:"menu-item add-btn",onClick:this.handleOnClickAddMore,onAuxClick:this.handleOnClickAddMore},c.default.createElement(s.Icon,{icon:"add",size:16}))))}}t.Menu=b,b.contextType=h.MainStore},15552:function(e,t,i){var a=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,o)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&a(t,e,i);return o(t,e),t},n=this&&this.__awaiter||function(e,t,i,a){function o(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function n(e){try{s(a.next(e))}catch(e){r(e)}}function l(e){try{s(a["throw"](e))}catch(e){r(e)}}function s(e){e.done?i(e.value):o(e.value).then(n,l)}s((a=a.apply(e,t||[])).next())}))},l=this&&this.__rest||function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(i[a[o]]=e[a[o]])}return i},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Popup=void 0;const c=i(53507),p=s(i(56058)),d=i(555),u=i(76724),h=i(47905),m=i(84926),f=s(i(57689)),g=r(i(635)),b=i(47532),v=i(62877),y=i(47573),x=g.createGlobalStyle`
  html {
    width: fit-content;
  }

  body {
    position: relative;
    margin-left: auto;
    //-webkit-font-smoothing: subpixel-antialiased;
    width: ${({columns:e})=>2===e?500:400}px;
    max-width: 800px;
    min-width: 400px;

    // 修复chrome96的bug，在绝对定位或固定定位仍旧会显示出滚动条
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: var(--paper-grey-900);
    }
  }

  .fade-enter {
    opacity: 0;
    //transition: opacity 300ms cubic-bezier(0.42, 0, 0, 0.84);
    z-index: 2;
    visibility: visible;
    z-index: 1;
  }

  .fade-enter-active {
    opacity: 1;
  }

  .fade-appear-done {
    opacity: 1;
  }

  .fade-exit {
    opacity: 1;
    //transition: opacity 150ms cubic-bezier(0.42, 0, 0, 0.84);
    z-index: 0;
  }

  .fade-exit-active {
    opacity: 0;
  }

  .fade-exit-done {
    opacity: 0;
    visibility: hidden;
  }

  .extension-reload-btn {
    margin-left: 8px;
    padding: 0 8px;
    height: 20px;
    line-height: 20px;
    border-radius: 6px;
    background-color: var(--bilibili-blue);
    color: var(--bilibili-gray);
    text-decoration: none;
  }
`,k=g.default.div.attrs(()=>({className:"app-wrapper"}))`
  position: relative;
  //display: flex;
  //flex-direction: column;
  //width: 400px;
  min-width: 200px;
  max-width: 800px;
  min-height: 200px;
  //max-height: 600px;
  overflow: hidden;

  & > .content-wrapper {
    display: flex;
    height: 100%;
    max-height: 100%;
    overflow: hidden;
  }
`,w=p.default.get("popupMain-config")||{},_=p.default.get("popup-config")||{},M=_?_.resizeRate:1;class E extends f.default.Component{constructor(e){super(e),this.state={states:null,currentVersionInfo:null,needRefreshPage:!1,specialAttentionList:[],recentVideoList:[],isVIP:!1,isSuperVIP:!1,showWebsiteMap:!1,videoOpenMethod:()=>this.state.isVIP&&w?w.videoOpenMethod:"direct",activeIfExist:(null===w||void 0===w?void 0:w.activeIfExist)||!1,hasLogin:!0,hasRegister:!1,bilibiliAccount:void 0,bhAccount:null,columns:(null===w||void 0===w?void 0:w.columns)||1,videoCardType:(null===w||void 0===w?void 0:w.videoCardType)||"old",showTag:null===w||void 0===w?void 0:w.showTag,loading:!1,handleOnClickRefresh:()=>{history.go()},handleOnLoginOtherBilibiliAccount:()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://passport.bilibili.com/login?from=bilibili-helper"},()=>{this.setState({needRefreshPage:!0})})},handleOnClickPayment:()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:chrome.runtime.getURL("html/config.html?showPaymentModal=1")})},getSpecialAccountList:()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"getSpecialAttentionList"},(e=[])=>{this.setState({specialAttentionList:e})})},setVIPState:()=>this.state.states&&(0,d.isVIP)(this.state.bhAccount),setSuperVIPState:()=>this.state.states&&(0,d.isSuperVIP)(this.state.bhAccount),createTab:(e,t,i={})=>{const{active:a,activeIfExist:o}=i,r=l(i,["active","activeIfExist"]);chrome.runtime.sendMessage(Object.assign({target:"tabController",event:"create",queryURL:t,strict:!1,url:t,active:!a&&"silent"!==this.state.videoOpenMethod()&&(void 0!==i.active?i.active:0===e.button),activeIfExist:o||this.state.activeIfExist},r))},setShowWebsiteMap:()=>{this.setState({showWebsiteMap:!0})},setHideWebsiteMap:()=>{this.setState({showWebsiteMap:!1})},setTriggerWebsiteMap:()=>{this.setState({showWebsiteMap:!this.state.showWebsiteMap})}},this.initAccountData=e=>n(this,void 0,void 0,(function*(){return new Promise(t=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},i=>{if(i){const{hasLogin:a,bilibiliAccount:o=null,hasRegister:r}=i;this.setState({hasLogin:a,hasRegister:r,bilibiliAccount:o}),t(),e&&e()}else setTimeout(()=>{this.initAccountData(t)},500)})})})),this.handleOnReloadExtension=()=>{chrome.runtime.reload()}}componentDidMount(){document.body.onmousedown=e=>{if(1===e.button)return!1},this.props.initialized||(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup",action:"init_failed"}),c.Message.error(f.default.createElement(f.default.Fragment,null,"\u52a9\u624b\u521d\u59cb\u5316\u5f02\u5e38",f.default.createElement("a",{className:"extension-reload-btn",onClick:this.handleOnReloadExtension},"\u70b9\u51fb\u91cd\u542f")),0)),document.body.style.width=Math.floor(window.innerWidth/M)+"px",setTimeout(()=>{document.querySelector(".app-wrapper").style.height=Math.floor(window.innerHeight/M)+"px"}),document.body.style.zoom=M,chrome.runtime.sendMessage({target:"states",event:"getStates"},e=>{e&&this.setState({states:e},()=>{this.setState({isVIP:this.state.setVIPState(),isSuperVIP:this.state.setSuperVIPState()})})}),chrome.runtime.sendMessage({target:"states",event:"getVersionInfo"},e=>{e&&this.setState({currentVersionInfo:Object.assign({},e)})}),chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/popup"}),this.state.getSpecialAccountList(),this.initAccountData().then(()=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getBHAccount"},e=>{e&&this.setState({bhAccount:e},()=>{this.setState({isVIP:this.state.setVIPState(),isSuperVIP:this.state.setSuperVIPState()})})})})}render(){const{columns:e,states:t}=this.state;return f.default.createElement(b.HashRouter,null,f.default.createElement(x,{columns:e}),f.default.createElement(k,{style:{maxWidth:(2===e?800:400)+"px"}},f.default.createElement(y.MainStore.Provider,{value:this.state},f.default.createElement("div",{className:"content-wrapper"},f.default.createElement(v.Main,null),f.default.createElement(u.Menu,null)),f.default.createElement(m.Toolbar,null),t&&t.shouldUpdate?f.default.createElement(h.NeedUpgrade,null):null)))}}t.Popup=E},99512:function(e,t,i){var a=this&&this.__rest||function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(i[a[o]]=e[a[o]])}return i},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(i(57689)),n=o(i(635)),l=i(47573),s=i(97907),c=n.default.div.attrs(({show:e})=>({className:e?"show":null}))`
  position: absolute;
  right: 0;
  bottom: calc(100% + 1px);
  padding: 4px;
  width: max-content;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 2px 8px rgb(0 0 0 / 10%);
  background-color: rgb(236 236 236);
  visibility: hidden;
  transition: visibility 0.2s, opacity 0.2s, transform .2s;
  transform: translateY(6px);
  opacity: 0;
  pointer-events: none;


  &.show {
    visibility: visible;
    transform: translateY(0px);
    opacity: 1;
    pointer-events: initial;
  }

  .list {
    margin: 0 0 6px;
    padding: 0;
    list-style: none;

    .list-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
      min-width: 250px;
      white-space: nowrap;
      font-size: 16px;
      zoom: 0.6;

      .add-button {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
          color: dodgerblue;
        }
      }
    }

    .line {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 3px 0 3px 4px;
      max-width: 250px;
      cursor: pointer;

      &:hover {
        background-color: var(--paper-grey-300);
        border-radius: 2px;
      }

      .keyword {
        flex: 1;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .clear-btn {
        flex-shrink: 0;
        margin-left: 8px;
        color: var(--paper-grey-800);
        zoom: 0.6;

        &:hover {
          color: var(--paper-grey-600);
        }
      }
    }
  }

  input {
    padding: 2px 4px;
    width: calc(100% - 10px);
    min-width: 150px;

    &::placeholder {
      font-size: 12px;
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(27 27 27);
    .list .line {
      color: var(--bilibili-gray);

      &:hover {
        background-color: var(--paper-grey-900);
      }
    }
  }
`;class p extends r.default.Component{constructor(e){super(e),this.handleOnClickLogin=()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:chrome.runtime.getURL("html/config.html")})},this.handleOnClickAddAccount=()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_bind_button"}),chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"bind"})},this.handleOnClickBoundAccount=e=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_bound_account"}),chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"createTabByAccount",uid:e})},this.handleOnUnbind=(e,t)=>{e.stopPropagation(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_unbind_account"}),chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"unbind",uid:t},()=>{this.props.updateList()})},this.renderBindButton=()=>{const{list:e}=this.props,{hasLogin:t,isVIP:i,handleOnClickPayment:a}=this.context;return t?i?e.length>0?e.map(e=>r.default.createElement("div",{key:e.uid,className:"line",onClick:()=>this.handleOnClickBoundAccount(e.uid)},e.username)):r.default.createElement("div",{className:"line",onClick:this.handleOnClickAddAccount},"\u7ed1\u5b9a\u65b0\u8d26\u53f7"):r.default.createElement("div",{className:"line",onClick:a},"\u70b9\u51fb\u5f00\u901a\u52a9\u624b\u4f1a\u5458"):r.default.createElement("div",{className:"line",onClick:this.handleOnClickLogin},"\u4f1a\u5458\u529f\u80fd\uff0c\u70b9\u51fb\u767b\u5f55")}}render(){const e=this.props,{active:t,list:i,handleOnCloseButton:o}=e,n=a(e,["active","list","handleOnCloseButton"]),{columns:l,hasLogin:p,isVIP:d}=this.context;return r.default.createElement(c,Object.assign({show:t},n),r.default.createElement("div",{className:"list"},r.default.createElement("div",{className:"list-header"},"\u591a\u8d26\u53f7\u5217\u8868",d&&i.length>0&&i.length<s.MAX_BIND_NUMBER?r.default.createElement("span",{className:"add-button",onClick:this.handleOnClickAddAccount},"\u7ed1\u5b9a\u65b0\u8d26\u53f7"):null),this.renderBindButton()))}}p.contextType=l.MainStore,t["default"]=p},22383:function(e,t,i){var a=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,o)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&a(t,e,i);return o(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AccountList=void 0;const l=i(18258),s=n(i(57689)),c=n(i(635)),p=i(47573),d=s.default.lazy(()=>Promise.resolve().then(()=>r(i(99512)))),u=c.default.div`
  position: relative;
  width: 24px;
  margin-right: 4px;
  z-index: 1;

  .bilibili-helper-2-icon-bell {
    &.has-new {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    //background-color: rgb(27 27 27);
  }
`;class h extends s.default.Component{constructor(e){super(e),this.wrapperRef=s.default.createRef(),this.state={active:!1,list:[]},this.updateList=()=>{chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"getAccountList"},e=>{e&&this.setState({list:e})})},this.handleOnHideSearchBox=e=>{this.wrapperRef&&!this.wrapperRef.current.contains(e.target)&&this.setState({active:!1})},this.handleOnClickIcon=()=>{const{active:e}=this.state;e||chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_account_list"}),this.setState({active:!e})},this.handleOnMouseEnterIcon=()=>{clearTimeout(this.hideBoxT),this.setState({active:!0})},this.handleOnMouseLeaveIcon=e=>{this.hideBoxT=setTimeout(()=>{this.setState({active:!1})},300)},this.handleOnMouseEnterBox=e=>{clearTimeout(this.hideBoxT),this.setState({active:!0})},this.handleOnHideBox=e=>{this.hideBoxT=setTimeout(()=>{this.setState({active:!1})},300)}}componentDidMount(){chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"getAccountList"},e=>{e&&this.setState({list:e})}),document.addEventListener("click",this.handleOnHideSearchBox)}render(){const{active:e,list:t}=this.state;return s.default.createElement(u,{ref:this.wrapperRef},s.default.createElement(l.Icon,{icon:"account",size:16,className:[e?"active":null].filter(Boolean).join(" "),onClick:this.handleOnClickIcon,onMouseEnter:this.handleOnMouseEnterIcon,onMouseLeave:this.handleOnMouseLeaveIcon}),s.default.createElement(s.default.Suspense,{fallback:null},s.default.createElement(d,{active:e,list:t,handleOnCloseButton:this.handleOnCloseButton,updateList:this.updateList,onMouseEnter:this.handleOnMouseEnterBox,onMouseLeave:this.handleOnHideBox})))}}t.AccountList=h,h.contextType=p.MainStore},2758:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(95947),r=a(i(97326)),n=a(i(57689)),l=a(i(635)),s=i(47573),c=l.default.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 20px;
  width: calc(100% - 40px) !important;
  height: calc(100% - 40px) !important;
  border-radius: 4px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transition: visibility 0.3s, opacity 0.3s;
  backdrop-filter: blur(10px);
  z-index: 31;
  

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    z-index: -1;
  }

  &.show {
    opacity: 1;
    visibility: visible;
    pointer-events: inherit;
  }

  &.columns-1 {
    width: 400px;
    height: 500px;
  }

  &.columns-2 {
    width: 500px;
    height: 500px;
  }

  @supports not (backdrop-filter: blur(10px)) {
    background-color: rgb(0 0 0 / 88%);
    &::before {
      background-color: rgb(255 255 255);
    }
  }

  @media (prefers-color-scheme: dark) {
    color: #999999;

    @supports not (backdrop-filter: blur(10px)) {
      &::before {
        background-color: #999;
      }
    }
  }


`,p=l.default.div`
  padding-bottom: 46px;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;

  footer {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 32px;
    height: 52px;
    text-align: right;

    .button {
      margin-left: 8px;
      height: 28px;
      font-size: 14px;

      .button-view {
        padding: 0 16px;
      }
    }
  }
`,d=l.default.div`
  //position: absolute;
  margin: 24px 12px 12px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 2px 8px rgb(0 0 0 / 10%);
  background-color: rgb(236 236 236);
  overflow: hidden;

  &:first-of-type {
    margin-top: 12px;
  }

  &.hide {
    main {
      height: 0;
      margin: 6px;
    }
  }

  .close-btn {
    position: absolute;
    right: 0;
  }

  .title {
    text-align: center;
    margin: 18px 12px 12px;
    font-size: 16px;
    font-weight: bold;
  }

  main {
    margin: 0 12px 40px;
    line-height: 24px;
    font-size: 14px;
    white-space: pre-line;
    word-break: break-all;
    overflow: auto;
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(27 27 27);
  }
`;class u extends n.default.Component{constructor(e){super(e),this.modalElement=document.createElement("div"),this.modalElement.id="announcementContent",document.getElementById("root").querySelector(".content-wrapper").appendChild(this.modalElement)}render(){const{active:e,list:t,handleOnCloseButton:i}=this.props,{columns:a,hasLogin:l}=this.context;return r.default.createPortal(n.default.createElement(c,{className:["announcement-modal",e?"show":"hide",1===a?"columns-1":"columns-2"].join(" ")},n.default.createElement(p,null,t.map(({title:e,content:t,id:i},a)=>n.default.createElement(d,{key:a},n.default.createElement("h2",{className:"title"},e),n.default.createElement("main",{dangerouslySetInnerHTML:{__html:t}}))),n.default.createElement("footer",null,n.default.createElement(o.Button,{className:"primary",onClick:i},"\u77e5\u9053\u5566")))),this.modalElement)}}u.contextType=s.MainStore,t["default"]=u},1393:function(e,t,i){var a=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,o)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&a(t,e,i);return o(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Announcement=void 0;const l=i(18258),s=n(i(57689)),c=n(i(635)),p=i(47573),d=s.default.lazy(()=>Promise.resolve().then(()=>r(i(2758)))),u=c.default.div`
  position: relative;
  width: 24px;
  margin-right: 4px;
  z-index: 1;

  .bilibili-helper-2-icon-bell {
    &.has-new {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    //background-color: rgb(27 27 27);
  }
`;class h extends s.default.Component{constructor(e){super(e),this.state={active:!1,list:[],latestUpdateDateTime:null,hasNew:!1},this.handleOnClickIcon=()=>{const{active:e}=this.state;e||chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_announcement"}),this.setState({active:!e})},this.handleOnCloseButton=()=>{const{hasNew:e}=this.state;e&&chrome.runtime.sendMessage({target:"message",event:"setAnnouncementRead"},()=>{this.setState({hasNew:!1})}),this.setState({active:!1})}}componentDidMount(){chrome.runtime.sendMessage({target:"message",event:"getLatestAnnouncement"},e=>{if(e){const{announcement:t}=e;t.hasNew&&this.setState({active:!0}),this.setState(Object.assign({},t))}})}render(){const{active:e,list:t,content:i,hasNew:a}=this.state;return s.default.createElement(u,null,s.default.createElement(l.Icon,{icon:"bell",size:16,className:[e?"active":null,a?"has-new":null].filter(Boolean).join(" "),onClick:this.handleOnClickIcon}),s.default.createElement(s.default.Suspense,{fallback:null},s.default.createElement(d,{active:e,list:t,handleOnCloseButton:this.handleOnCloseButton})))}}t.Announcement=h,h.contextType=p.MainStore},16808:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BilibiliMessage=void 0;const o=i(51920),r=a(i(57689)),n=a(i(635)),l=i(47573),s=n.default.div`
  position: relative;
  width: 24px;
  margin-right: 4px;

  &:hover {
    .message-content {
      opacity: 1;
      visibility: visible;
    }
  }

  .bilibili-helper-2-icon-email {
    &.has-unread {
      color: var(--bilibili-pink);
    }
  }
`,c=n.default.div.attrs(({show:e})=>({className:["bilibili-message-content",e?"show":null].join(" ")}))`
  position: absolute;
  right: 0;
  bottom: calc(100% + 1px);
  padding: 4px;
  min-width: 80px;
  min-height: 100px;
  background-color: rgb(236 236 236);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 0 8px rgb(0 0 0 / 10%);
  visibility: hidden;
  transition: visibility 0.2s, opacity 0.2s, transform .2s;
  transform: translateY(6px);
  opacity: 0;
  pointer-events: none;

  &.show {
    visibility: visible;
    transform: translateY(0px);
    opacity: 1;
    pointer-events: initial;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      padding: 2px;
      display: flex;
      justify-content: space-between;
      border-radius: 2px;
      cursor: pointer;

      &:hover {
        background-color: var(--paper-grey-300);
      }

      .unread {
        color: var(--bilibili-pink);
      }
    }
  }


  @media (prefers-color-scheme: dark) {
    background-color: rgb(27 27 27);
    ul {
      li {
        &:hover {
          background-color: var(--paper-grey-900);
        }
      }
    }
  }
`,p={reply:"https://message.bilibili.com/#/reply",at:"https://message.bilibili.com/#/at",like:"https://message.bilibili.com/#/love",system:"https://message.bilibili.com/#/system",whisper:"https://message.bilibili.com/#/whisper"};class d extends r.default.Component{constructor(e){super(e),this.hideBoxT=null,this.state={active:!1,latestList:{},newList:{},hasUnread:!1},this.ref=r.default.createRef(null),this.handleOnMouseEnterIcon=()=>{clearTimeout(this.hideBoxT),this.setState({active:!0})},this.handleOnMouseLeaveIcon=e=>{this.handleOnHideBox(e)},this.handleOnMouseEnterBox=e=>{clearTimeout(this.hideBoxT),this.setState({active:!0})},this.handleOnHideBox=e=>{this.hideBoxT=setTimeout(()=>{this.setState({active:!1})},300)},this.handleOnClickHideBox=e=>{this.ref.current&&!this.ref.current.contains(e.target)&&this.handleOnHideBox()},this.handleOnClickMessage=()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://message.bilibili.com/#/reply"},()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_message"})})},this.handleOnClickMessageTypeLink=e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:p[e]},()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_message",label:e})})}}componentDidMount(){document.addEventListener("click",this.handleOnClickHideBox),chrome.runtime.sendMessage({target:"bilibiliMessage",event:"getUnreadInfo"},e=>{if(e){const{at:t=0,like:i=0,reply:a=0,sys_msg:o=0,follow_unread:r=0,unfollow_unread:n=0}=e.latestList,l=t+i+a+o+r+n>0;e.latestList={at:t,like:i,reply:a,sys_msg:o,follow_unread:r,unfollow_unread:n},this.setState(Object.assign(Object.assign({},e),{hasUnread:l}))}})}render(){const{bilibiliAccount:e}=this.context,{active:t,latestList:i,hasUnread:a}=this.state,n=void 0===e||!(!e||!e.hasLogin);return n?r.default.createElement(s,Object.assign({id:"bilibiliMessage",ref:this.ref,className:"message-app"},this.props),r.default.createElement(o.Icon,{icon:"email",className:[t?"active":null,a?"has-unread":null].filter(Boolean).join(" "),size:16,onClick:this.handleOnClickMessage,onMouseEnter:this.handleOnMouseEnterIcon,onMouseLeave:this.handleOnMouseLeaveIcon}),r.default.createElement(c,{show:t,onMouseEnter:this.handleOnMouseEnterBox,onMouseLeave:this.handleOnMouseLeaveIcon},void 0!==i.follow_unread?r.default.createElement("ul",null,r.default.createElement("li",{onClick:()=>this.handleOnClickMessageTypeLink("reply")},"\u56de\u590d\u6211\u7684 ",r.default.createElement("span",{className:i.reply>0?"unread":""},i.reply)),r.default.createElement("li",{onClick:()=>this.handleOnClickMessageTypeLink("at")},"@\u6211\u7684 ",r.default.createElement("span",{className:i.at>0?"unread":""},i.at)),r.default.createElement("li",{onClick:()=>this.handleOnClickMessageTypeLink("like")},"\u6536\u5230\u7684\u8d5e ",r.default.createElement("span",{className:i.like>0?"unread":""},i.like)),r.default.createElement("li",{onClick:()=>this.handleOnClickMessageTypeLink("system")},"\u7cfb\u7edf\u901a\u77e5 ",r.default.createElement("span",{className:i.sys_msg>0?"unread":""},i.sys_msg)),r.default.createElement("li",{onClick:()=>this.handleOnClickMessageTypeLink("whisper")},"\u6211\u7684\u6d88\u606f",r.default.createElement("span",{className:i.follow_unread+i.unfollow_unread>0?"unread":""},i.follow_unread+i.unfollow_unread))):null)):null}}t.BilibiliMessage=d,d.contextType=l.MainStore},12299:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Searcher=void 0;const o=i(51920),r=i(65033),n=a(i(57689)),l=a(i(635)),s=l.default.div`
  position: relative;
  width: 24px;
  margin-right: 4px;
`,c=l.default.div.attrs(({show:e})=>({className:e?"show":null}))`
  position: absolute;
  right: 0;
  bottom: calc(100% + 1px);
  padding: 4px;
  background-color: rgb(236 236 236);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 0 8px rgb(0 0 0 / 10%);
  visibility: hidden;
  transition: visibility 0.2s, opacity 0.2s, transform .2s;
  transform: translateY(6px);
  opacity: 0;
  pointer-events: none;

  &.show {
    visibility: visible;
    transform: translateY(0px);
    opacity: 1;
    pointer-events: initial;
  }

  .history-list {
    margin: 0 0 6px;
    padding: 0;
    list-style: none;

    .history-list-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
      min-width: 250px;
      white-space: nowrap;
      font-size: 16px;
      zoom: 0.6;

      .clear-all {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
          color: dodgerblue;
        }
      }
    }

    .keyword-line {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 3px 0 3px 4px;
      max-width: 250px;
      cursor: pointer;

      &:hover {
        background-color: var(--paper-grey-300);
        border-radius: 2px;
      }

      .keyword {
        flex: 1;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .clear-btn {
        flex-shrink: 0;
        margin-left: 8px;
        color: var(--paper-grey-800);
        zoom: 0.6;

        &:hover {
          color: var(--paper-grey-600);
        }
      }
    }
  }

  input {
    padding: 2px 4px;
    width: calc(100% - 10px);
    min-width: 150px;

    &::placeholder {
      font-size: 12px;
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgb(27 27 27);
    .history-list .keyword-line {
      color: var(--bilibili-gray);

      &:hover {
        background-color: var(--paper-grey-900);
      }
    }

    input {
      background-color: var(--paper-grey-300);
      border-color: var(--paper-grey-900);
    }
  }
`;let p=!0;const d=function(e){const[t,i]=n.default.useState(!1),[a,l]=n.default.useState([]),d=n.default.useRef(null),u=n.default.useRef(null),[h,m]=n.default.useState(!1),f=n.default.useCallback(()=>{t||chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_searcher"}),i(!t)},[t,u,h]),g=n.default.useCallback(()=>{clearTimeout(p),i(!0)},[]),b=n.default.useCallback(e=>{p=setTimeout(()=>{!d.current||d.current.contains(e.target)||h||i(!1)},300)},[h]),v=n.default.useCallback(e=>{e&&chrome.runtime.sendMessage({target:"popupSearcher",event:"go2Search",keyword:e},()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"search",label:e})})},[]),y=n.default.useCallback(e=>{e.persist(),"Enter"===e.key&&e.target.value.trim()&&v(e.target.value.trim())},[]),x=n.default.useCallback(()=>{chrome.runtime.sendMessage({target:"popupSearcher",event:"clearAll"},e=>{e&&l([])})},[]),k=n.default.useCallback(e=>{void 0!==e&&chrome.runtime.sendMessage({target:"popupSearcher",event:"clearKeywordByIndex",index:e},e=>{e&&l(e)})},[]),w=n.default.useCallback(()=>{m(!0)},[]),_=n.default.useCallback(()=>{m(!1)},[]);return n.default.useEffect(()=>{t&&setTimeout(()=>{u.current.focus()},250)},[t]),n.default.useEffect(()=>(document.addEventListener("click",b),chrome.runtime.sendMessage({target:"popupSearcher",event:"getSearchHistory"},e=>{e&&l(e)}),()=>{document.removeEventListener("click",b)}),[]),n.default.createElement(s,Object.assign({ref:d,className:"searcher"},e),n.default.createElement(o.Icon,{icon:"search",className:t?"active":null,size:16,onClick:f}),n.default.createElement(c,{show:t,onMouseEnter:g},a.length>0&&n.default.createElement("ul",{className:"history-list"},n.default.createElement("li",{className:"history-list-header"},"\u6700\u8fd1",a.length,"\u6761\u8bb0\u5f55 ",n.default.createElement("span",{className:"clear-all",onClick:x},"\u6e05\u7a7a\u8bb0\u5f55")),a.map((e,t)=>n.default.createElement("li",{className:"keyword-line",key:e},n.default.createElement("span",{className:"keyword",onClick:()=>v(e)},e),n.default.createElement(o.Icon,{className:"clear-btn",size:16,icon:"close",onClick:()=>k(t)})))),n.default.createElement(r.Input,{ref:u,placeholder:"\u8f93\u5165\u5173\u952e\u8bcd\u6309\u56de\u8f66\u641c\u7d22",onKeyPress:y,onCompositionStart:w,onCompositionEnd:_})))};t.Searcher=d},84926:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Toolbar=void 0;const o=i(18258),r=a(i(57689)),n=a(i(635)),l=i(16808),s=i(12299),c=i(1393),p=i(22383),d=i(36142),u=i(53936),h=n.default.div.attrs({className:"popup-toolbar"})`
  position: absolute;
  bottom: 0;
  right: 0;
  //left: 0;
  //display: flex;
  //align-items: center;
  height: 30px;
  padding: 0 10px 0 4px;
  border-radius: 4px 0 0 0;
  background-color: rgb(230 230 230);
  //background-color: rgb(230 230 230 / 70%);
  //backdrop-filter: blur(10px);
  //pointer-events: none;
  z-index: 6;

  .extra-tools {
    display: flex;
    margin-top: 3px;
    margin-right: -10px;
    margin-left: auto;
    line-height: 16px;
    pointer-events: auto;

    .action-btn {
      margin-right: 4px;

      &:last-of-type {
        //margin-right: 0;
      }
    }

    .bilibili-helper-2-iconfont {
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
      background-color: transparent;
      transition: background-color .2s;

      &:hover, &.active {
        background-color: #ccc;
      }

      &:active {
        background-color: #bbb;
      }
    }
  }


  @media (prefers-color-scheme: dark) {
    background-color: rgb(20 20 20);
    color: #999999;
    .extra-tools {
      .bilibili-helper-2-iconfont {
        &:hover, &.active {
          background-color: #222;
        }

        &:active {
          background-color: #1a1a1a;
        }
      }
    }
  }
`,m={option:()=>chrome.runtime.getURL("html/config.html"),message:()=>"https://message.bilibili.com/#/reply"};class f extends r.default.Component{constructor(e){super(e),this.handleOnClickOption=()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_option"}),chrome.runtime.sendMessage({target:"tabController",event:"create",url:m.option()})}}render(){return r.default.createElement(h,null,r.default.createElement("div",{className:"extra-tools"},r.default.createElement(u.Sniffer,{className:"action-btn"}),r.default.createElement(s.Searcher,{className:"action-btn"}),r.default.createElement(l.BilibiliMessage,null),r.default.createElement(c.Announcement,{className:"action-btn"}),r.default.createElement(p.AccountList,null),r.default.createElement(o.Icon,{className:"action-btn",icon:"option",size:16,onClick:this.handleOnClickOption}),r.default.createElement(d.Owner,null)))}}t.Toolbar=f},99694:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=i(18258),r=i(95947),n=i(83656),l=a(i(98777)),s=a(i(57689)),c=a(i(97326)),p=a(i(635)),d=i(47573),u=i(29010),h=p.default.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transition: visibility 0.2s, opacity 0.2s;
  backdrop-filter: blur(10px);
  z-index: 33;

  .mask {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    background-color: rgb(255 255 255 / 80%);
    z-index: -1;
  }

  @supports not (backdrop-filter: blur(10px)) {
    .mask {
      background-color: rgb(255 255 255);
    }
  }

  &.show {
    opacity: 1;
    visibility: visible;
    pointer-events: inherit;
  }

  &.columns-1 {
    //width: 400px;
    height: 500px;
  }

  &.columns-2 {
    //width: 800px;
    height: 500px;
  }

  .close-button {
    position: fixed;
    bottom: 0;
    right: 0;
    border-radius: 50%;
  }

  & > main {
    padding: 12px;
  }

  @media (prefers-color-scheme: dark) {
    color: var(--bilibili-gray);

    .mask {
      background-color: rgb(0 0 0 / 88%);
    }

    @supports not (backdrop-filter: blur(10px)) {
      .mask {
        background-color: rgb(31 31 31);
      }
    }
  }
`,m=p.default.section`
  position: relative;
  padding: 6px;
  border-radius: 2px;
  background-color: transparent;
  border: 1px solid transparent;
  box-sizing: border-box;
  transition: background-color .2s, border-color .2s;

  .topic {
    margin: 0 0 4px 0;
    padding: 4px 4px 4px 8px;
    background-color: rgb(255 255 255 / 16%);
    border-radius: 2px;
  }

  &:hover {
    background-color: rgb(255 255 255 / 5%);
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgb(255 255 255 / 2%);
    }

    .topic {
      background-color: rgb(255 255 255 / 8%);
    }
  }
`,f=(0,p.default)(m)`
  display: flex;

  .avatar {
    position: relative;
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    border: 3px solid var(--paper-grey-100);
    border-radius: 50%;
    overflow: hidden;


    &:hover {
      .space-anchor {
        opacity: 1;
      }
    }

    .space-anchor {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgb(0 0 0 / 60%);
      color: var(--bilibili-gray);
      opacity: 0;
      transition: opacity .2s;
      cursor: pointer;
    }
  }

  .info {
    flex-grow: 1;
    margin-left: 12px;
    font-size: 18px;

    .username-box {
      display: flex;
      flex-wrap: nowrap;
      margin: 0;
      white-space: nowrap;
    }

    .identity-tags {
      position: absolute;
      top: 6px;
      right: 6px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-left: 0;
      width: fit-content;

      i {
        display: inline-block;
        padding: 0 4px;
        line-height: 20px;
        vertical-align: bottom;
        border-radius: 4px;
        font-style: normal;
        font-size: 12px;
        background-color: rgb(0 0 0 / 10%);
        color: var(--bilibili-gray);
        white-space: nowrap;
        box-sizing: border-box;
        transform: scale(0.9);
        transform-origin: top right;

        &.bilibili-vip {
          background-color: rgb(251 114 153 / 60%);
        }

        &.bilibili-helper-vip {
          background-color: rgb(251 114 153 / 80%);

          .bilibili-helper-2-icon-cat-paw {
            zoom: .8;
            transform: rotate(-35deg);
            margin-right: 6px;
          }
        }
      }
    }

    .level-box {
      width: 40%;

      .level-value {
        display: flex;
        justify-content: space-between;
        font-size: 12px;

        .exp {
          margin-left: auto;
        }
      }

      .level-bar {
        width: 100%;
        height: 2px;
        background-color: rgb(121 121 121 / 50%);

        .current-level-bar {
          height: 100%;
          background-color: var(--bilibili-pink);
        }
      }
    }

    .wallet {
      margin-top: 4px;
      font-size: 12px;

      & > span {
        margin-left: -4px;
        margin-right: 12px;
        padding: 0 4px;
        background-color: transparent;
        transition: background-color .2s;
        cursor: pointer;

        &:last-of-type {
          margin-right: 0;
        }

        &:hover {
          background-color: rgb(255 255 255 / 40%);
        }

        &:active {
          background-color: rgb(255 255 255 / 20%);
        }

        i {
          font-style: normal;
        }
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .avatar {
      border-color: var(--paper-grey-800);
    }

    .info {
      .tags {
        i {
          background-color: rgb(255 255 255 / 10%);
        }
      }

      .wallet {
        & > span {
          &:hover {
            background-color: rgb(255 255 255 / 20%);
          }

          &:active {
            background-color: rgb(255 255 255 / 10%);
          }
        }
      }

      .identity-tags {
        i {
          cursor: pointer;

          &.bilibili-helper-vip {
            background-color: rgb(251 114 153 / 60%);
          }

          &.bilibili-vip {
            background-color: rgb(251 114 153 / 40%);
          }
        }
      }
    }
  }
`,g=(0,p.default)(m)`
  main {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;

    &:last-of-type {
      margin-bottom: 0;
    }

    .task {
      position: relative;
      display: flex;
      flex-grow: 1;
      margin-right: 4px;
      padding: 4px 22px 4px 6px;
      background-color: hsl(0deg 0% 88% / 16%);
      white-space: nowrap;

      &:last-of-type {
        margin-right: 0;
      }

      ::after {
        content: '';
        position: absolute;
        right: 10px;
        bottom: 8px;
        display: block;
        width: 4px;
        height: 4px;
        background-color: var(--paper-grey-400);
        box-shadow: 4px 0 0 0 var(--paper-grey-400), 8px 0 0 0 var(--paper-grey-400),0px -4px 0 0 var(--paper-grey-400);
        transform: rotate(-45deg) scale(0.7);
      }

      &.done {
        ::after {
          background-color: var(--google-green-500);
          box-shadow: 4px 0 0 0 var(--google-green-500), 8px 0 0 0 var(--google-green-500),0px -4px 0 0 var(--google-green-500);
        }
      }

      .sup {
        zoom: 0.75;
        font-style: normal;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    main {
      .task {
        background-color: rgb(255 255 255 / 3%);

        ::after {
          background-color: var(--paper-grey-700);
          box-shadow: 4px 0 0 0 var(--paper-grey-700), 8px 0 0 0 var(--paper-grey-700),0px -4px 0 0 var(--paper-grey-700);
        }
      }
    }
  }
`,b=(0,p.default)(m)`
  main {
    display: flex;
    //justify-content: space-between;

    .section {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-right: 4px;
      padding: 4px 10px 4px 6px;
      width: fit-content;
      background-color: hsl(0deg 0% 88% / 16%);
      cursor: pointer;
      transition: background-color .2s;

      &:last-of-type {
        margin-right: 0;
      }

      &:hover {
        background-color: rgb(255 255 255 / 25%);
      }

      i {
        margin-left: 22px;
        font-style: normal;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    main {
      .section {
        background-color: rgb(255 255 255 / 8%);
      }
    }
  }
`;class v extends s.default.Component{constructor(e){super(e),this.state={navData:null,memberData:null,dailyTaskData:null,statisticalData:null,liveSignData:null,privilegeData:null},this.hasInitData=!1,this.getVIPInfo=()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/web-interface/nav",options:{contentType:"json"}},({data:e})=>{0===e.code&&this.setState({navData:e.data})})},this.getMemberInfo=()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/member/web/account",options:{contentType:"json"}},({data:e})=>{0===e.code&&this.setState({memberData:e.data})})},this.getDailyTaskState=()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/member/web/exp/reward",options:{contentType:"json"}},({data:e})=>{0===e.code&&this.setState({dailyTaskData:e.data})})},this.getStatisticalData=()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/web-interface/nav/stat",options:{contentType:"json"}},({data:e})=>{0===e.code&&this.setState({statisticalData:e.data})})},this.getLiveSignStatus=()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.live.bilibili.com/xlive/web-ucenter/v1/sign/WebGetSignInfo",options:{contentType:"json"}},({data:e})=>{0===e.code&&this.setState({liveSignData:e.data})})},this.getPrivilegeStatus=()=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:"https://api.bilibili.com/x/vip/privilege/my",options:{contentType:"json"}},({data:e})=>{0===e.code&&this.setState({privilegeData:e.data})})},this.openPage=e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})},this.renderCatIdentities=()=>{const{bhAccount:e}=this.context;return e?e.identities.map(e=>{const t=u.USER_IDENTITIES_NAME_MAP[e.name];return t?s.default.createElement("i",{key:e.name,className:"bilibili-helper-vip",title:(0,l.default)(e.to).format("YYYY-MM-DD")+" \u5230\u671f"},s.default.createElement(o.Icon,{icon:"cat-paw",size:12}),t):null}).filter(Boolean):null},this.renderBasicArea=()=>{const{navData:e}=this.state;return e?s.default.createElement(f,null,(()=>{const{face:t,uname:i,level_info:a,wallet:o,money:r,vipStatus:l,vip_label:c}=e,{current_level:p,next_exp:d,current_exp:u}=a,{text:h}=c,{bcoin_balance:m}=o;return s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:"avatar"},s.default.createElement(n.Image,{url:t}),s.default.createElement("div",{className:"space-anchor",onClick:()=>this.openPage("https://space.bilibili.com/")},"\u4e2a\u4eba\u7a7a\u95f4")),s.default.createElement("div",{className:"info"},s.default.createElement("h5",{className:"username-box"},i),s.default.createElement("span",{className:"identity-tags"},this.renderCatIdentities(),l?s.default.createElement("i",{className:"bilibili-vip",onClick:()=>this.openPage("https://account.bilibili.com/account/big")},h):null),s.default.createElement("div",{className:"level-box"},s.default.createElement("div",{className:"level-value"},"LV",p," ",s.default.createElement("span",{className:"exp"},u,"/",d)),s.default.createElement("div",{className:"level-bar"},s.default.createElement("div",{className:"current-level-bar",style:{width:u/d*100+"%"}}))),s.default.createElement("div",{className:"wallet"},s.default.createElement("span",{onClick:()=>this.openPage("https://account.bilibili.com/account/coin")},"\u786c\u5e01: ",s.default.createElement("i",null,r)),s.default.createElement("span",{onClick:()=>this.openPage("https://pay.bilibili.com/paywallet-fe/bb_balance.html")},"B\u5e01: ",s.default.createElement("i",null,m)))))})()):null},this.renderStatisticalData=()=>{const{bilibiliAccount:e}=this.context,{statisticalData:t}=this.state,i="https://space.bilibili.com/"+e.uid;return t?s.default.createElement(b,null,s.default.createElement("main",null,s.default.createElement("div",{className:"section",onClick:()=>this.openPage(i+"/fans/follow")},"\u5173\u6ce8",s.default.createElement("i",null,t.following)),s.default.createElement("div",{className:"section",onClick:()=>this.openPage(i+"/fans/fans")},"\u7c89\u4e1d",s.default.createElement("i",null,t.follower)),s.default.createElement("div",{className:"section",onClick:()=>this.openPage(i+"/dynamic")},"\u52a8\u6001",s.default.createElement("i",null,t.dynamic_count)))):null},this.renderDailyTask=()=>{const{dailyTaskData:e,liveSignData:t,privilegeData:i}=this.state;return s.default.createElement(s.default.Fragment,null,s.default.createElement(g,null,s.default.createElement("main",null,e?s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:["task",e.login?"done":null].join(" ")},"\u6bcf\u65e5\u767b\u5f55"),s.default.createElement("div",{className:["task",e.watch?"done":null].join(" ")},"\u6bcf\u65e5\u89c2\u770b\u89c6\u9891"),s.default.createElement("div",{className:["task",50===e.coins?"done":null].join(" ")},"\u6bcf\u65e5\u6295\u5e01\uff08",e.coins,"/50\uff09")):null),s.default.createElement("main",null,e?s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:["task",e.share?"done":null].join(" ")},"\u6bcf\u65e5\u5206\u4eab\u89c6\u9891",s.default.createElement("i",{className:"sup"},"(\u5ba2\u6237\u7aef)"))):null),s.default.createElement("main",null,t?s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:["task",t.status?"done":null].join(" ")},"\u6bcf\u65e5\u76f4\u64ad\u7b7e\u5230")):null)),s.default.createElement(g,null,s.default.createElement("main",null,i&&i.list&&i.list.length>0?s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:["task",i.list[0].state?"done":null].join(" ")},"\u5e74\u5ea6\u4e13\u4eabB\u5e01\u5238\u8d60\u9001"),s.default.createElement("div",{className:["task",i.list[1].state?"done":null].join(" ")},"\u5e74\u5ea6\u4e13\u4eab\u4f1a\u5458\u8d2d\u4f18\u60e0\u5238")):null)))},this.modalElement=document.createElement("div"),this.modalElement.id="ownerArea",document.getElementById("root").querySelector(".content-wrapper").appendChild(this.modalElement)}componentDidUpdate(e,t,i){e.active||!this.props.active||this.hasInitData||(this.hasInitData=!0,this.getVIPInfo(),this.getMemberInfo(),this.getDailyTaskState(),this.getStatisticalData(),this.getLiveSignStatus(),this.getPrivilegeStatus())}render(){const{columns:e,bilibiliAccount:t}=this.context,{active:i,onClose:a}=this.props;return c.default.createPortal(s.default.createElement(h,{className:["owner-modal",i?"show":"hide",1===e?"columns-1":"columns-2"].join(" ")},s.default.createElement("div",{className:"mask"}),s.default.createElement("main",null,this.renderBasicArea(),this.renderStatisticalData(),this.renderDailyTask()),s.default.createElement(r.Button,{className:"close-button",icon:"close",iconSize:20,onClick:a})),this.modalElement)}}v.contextType=d.MainStore,t["default"]=v},36142:function(e,t,i){var a=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,o)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&a(t,e,i);return o(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Owner=void 0;const l=i(83656),s=n(i(57689)),c=n(i(635)),p=i(47573),d=s.default.lazy(()=>Promise.resolve().then(()=>r(i(99694)))),u=c.default.div`
  position: relative;
  bottom: 10px;
  margin-bottom: -26px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`,h=c.default.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid var(--paper-grey-100);
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  transition: border-color .3s;

  &:hover {
    border: 3px solid var(--paper-grey-50);
  }

  .img {
    position: relative;
    top: 0;
    right: 0;
    border-radius: 50%;
  }

  @media (prefers-color-scheme: dark) {
    border-color: var(--paper-grey-800);
    &:hover {
      border-color: var(--paper-grey-700);
    }
  }
`;class m extends s.default.Component{constructor(e){super(e),this.state={active:!1},this.handleOnClickIcon=()=>{this.state.active||chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_owner_area"}),this.setState({active:!this.state.active})},this.handleOnCloseModal=()=>{this.setState({active:!1})}}render(){const{bilibiliAccount:e}=this.context,{active:t}=this.state,i=void 0!==e&&!(!e||!e.hasLogin);return i?s.default.createElement(u,null,s.default.createElement(h,{onClick:this.handleOnClickIcon},s.default.createElement(l.Image,{url:e&&e.face})),s.default.createElement(s.default.Suspense,{fallback:null},s.default.createElement(d,{active:t,onClose:this.handleOnCloseModal}))):null}}t.Owner=m,m.contextType=p.MainStore},53936:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Sniffer=void 0;const o=a(i(57689)),r=a(i(635)),n=i(53507),l=r.default.div`
  position: relative;
  width: 24px;
  margin-right: 4px;
  z-index: 1;
`;class s extends o.default.Component{constructor(e){super(e),this.state={active:!1},this.handleOnClickIcon=()=>{const{active:e}=this.state;e&&(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_sniffer"}),chrome.runtime.sendMessage({target:"sniffer",event:"startGetCurrentTabSnifferData"}))}}componentDidMount(){chrome.runtime.sendMessage({target:"sniffer",event:"checkPermission"},e=>{this.setState({active:e})})}render(){const{active:e}=this.state;return e?o.default.createElement(l,null,o.default.createElement(n.Icon,{icon:"bigData",size:16,onClick:this.handleOnClickIcon})):null}}t.Sniffer=s},748:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.animations=void 0;const a=i(635);t.animations=a.css`
  @keyframes blink {
    0%, to {
      color: transparent;
    }

    50% {
      color: var(--google-red-500);
    }
  }
`},39757:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.colorValues=void 0,t.colorValues={"google-red-100":"#f4c7c3","google-red-300":"#e67c73","google-red-500":"#db4437","google-red-700":"#c53929","google-blue-100":"#c6dafc","google-blue-300":"#7baaf7","google-blue-500":"#4285f4","google-blue-600":"#1a73e8","google-blue-700":"#3367d6","google-green-100":"#b7e1cd","google-green-300":"#57bb8a","google-green-500":"#0f9d58","google-green-700":"#0b8043","google-yellow-100":"#fce8b2","google-yellow-300":"#f7cb4d","google-yellow-500":"#f4b400","google-yellow-700":"#f09300","google-grey-50":"#f8f9fa","google-grey-100":"#f5f5f5","google-grey-300":"#e0e0e0","google-grey-400":"#bdc1c6","google-grey-500":"#9e9e9e","google-grey-700":"#616161","paper-red-50":"#ffebee","paper-red-100":"#ffcdd2","paper-red-200":"#ef9a9a","paper-red-300":"#e57373","paper-red-400":"#ef5350","paper-red-500":"#f44336","paper-red-600":"#e53935","paper-red-700":"#d32f2f","paper-red-800":"#c62828","paper-red-900":"#b71c1c","paper-red-a100":"#ff8a80","paper-red-a200":"#ff5252","paper-red-a400":"#ff1744","paper-red-a700":"#d50000","paper-pink-50":"#fce4ec","paper-pink-100":"#f8bbd0","paper-pink-200":"#f48fb1","paper-pink-300":"#f06292","paper-pink-400":"#ec407a","paper-pink-500":"#e91e63","paper-pink-600":"#d81b60","paper-pink-700":"#c2185b","paper-pink-800":"#ad1457","paper-pink-900":"#880e4f","paper-pink-a100":"#ff80ab","paper-pink-a200":"#ff4081","paper-pink-a400":"#f50057","paper-pink-a700":"#c51162","paper-purple-50":"#f3e5f5","paper-purple-100":"#e1bee7","paper-purple-200":"#ce93d8","paper-purple-300":"#ba68c8","paper-purple-400":"#ab47bc","paper-purple-500":"#9c27b0","paper-purple-600":"#8e24aa","paper-purple-700":"#7b1fa2","paper-purple-800":"#6a1b9a","paper-purple-900":"#4a148c","paper-purple-a100":"#ea80fc","paper-purple-a200":"#e040fb","paper-purple-a400":"#d500f9","paper-purple-a700":"#aa00ff","paper-deep-purple-50":"#ede7f6","paper-deep-purple-100":"#d1c4e9","paper-deep-purple-200":"#b39ddb","paper-deep-purple-300":"#9575cd","paper-deep-purple-400":"#7e57c2","paper-deep-purple-500":"#673ab7","paper-deep-purple-600":"#5e35b1","paper-deep-purple-700":"#512da8","paper-deep-purple-800":"#4527a0","paper-deep-purple-900":"#311b92","paper-deep-purple-a100":"#b388ff","paper-deep-purple-a200":"#7c4dff","paper-deep-purple-a400":"#651fff","paper-deep-purple-a700":"#6200ea","paper-indigo-50":"#e8eaf6","paper-indigo-100":"#c5cae9","paper-indigo-200":"#9fa8da","paper-indigo-300":"#7986cb","paper-indigo-400":"#5c6bc0","paper-indigo-500":"#3f51b5","paper-indigo-600":"#3949ab","paper-indigo-700":"#303f9f","paper-indigo-800":"#283593","paper-indigo-900":"#1a237e","paper-indigo-a100":"#8c9eff","paper-indigo-a200":"#536dfe","paper-indigo-a400":"#3d5afe","paper-indigo-a700":"#304ffe","paper-blue-50":"#e3f2fd","paper-blue-100":"#bbdefb","paper-blue-200":"#90caf9","paper-blue-300":"#64b5f6","paper-blue-400":"#42a5f5","paper-blue-500":"#2196f3","paper-blue-600":"#1e88e5","paper-blue-700":"#1976d2","paper-blue-800":"#1565c0","paper-blue-900":"#0d47a1","paper-blue-a100":"#82b1ff","paper-blue-a200":"#448aff","paper-blue-a400":"#2979ff","paper-blue-a700":"#2962ff","paper-light-blue-50":"#e1f5fe","paper-light-blue-100":"#b3e5fc","paper-light-blue-200":"#81d4fa","paper-light-blue-300":"#4fc3f7","paper-light-blue-400":"#29b6f6","paper-light-blue-500":"#03a9f4","paper-light-blue-600":"#039be5","paper-light-blue-700":"#0288d1","paper-light-blue-800":"#0277bd","paper-light-blue-900":"#01579b","paper-light-blue-a100":"#80d8ff","paper-light-blue-a200":"#40c4ff","paper-light-blue-a400":"#00b0ff","paper-light-blue-a700":"#0091ea","paper-cyan-50":"#e0f7fa","paper-cyan-100":"#b2ebf2","paper-cyan-200":"#80deea","paper-cyan-300":"#4dd0e1","paper-cyan-400":"#26c6da","paper-cyan-500":"#00bcd4","paper-cyan-600":"#00acc1","paper-cyan-700":"#0097a7","paper-cyan-800":"#00838f","paper-cyan-900":"#006064","paper-cyan-a100":"#84ffff","paper-cyan-a200":"#18ffff","paper-cyan-a400":"#00e5ff","paper-cyan-a700":"#00b8d4","paper-teal-50":"#e0f2f1","paper-teal-100":"#b2dfdb","paper-teal-200":"#80cbc4","paper-teal-300":"#4db6ac","paper-teal-400":"#26a69a","paper-teal-500":"#009688","paper-teal-600":"#00897b","paper-teal-700":"#00796b","paper-teal-800":"#00695c","paper-teal-900":"#004d40","paper-teal-a100":"#a7ffeb","paper-teal-a200":"#64ffda","paper-teal-a400":"#1de9b6","paper-teal-a700":"#00bfa5","paper-green-50":"#e8f5e9","paper-green-100":"#c8e6c9","paper-green-200":"#a5d6a7","paper-green-300":"#81c784","paper-green-400":"#66bb6a","paper-green-500":"#4caf50","paper-green-600":"#43a047","paper-green-700":"#388e3c","paper-green-800":"#2e7d32","paper-green-900":"#1b5e20","paper-green-a100":"#b9f6ca","paper-green-a200":"#69f0ae","paper-green-a400":"#00e676","paper-green-a700":"#00c853","paper-light-green-50":"#f1f8e9","paper-light-green-100":"#dcedc8","paper-light-green-200":"#c5e1a5","paper-light-green-300":"#aed581","paper-light-green-400":"#9ccc65","paper-light-green-500":"#8bc34a","paper-light-green-600":"#7cb342","paper-light-green-700":"#689f38","paper-light-green-800":"#558b2f","paper-light-green-900":"#33691e","paper-light-green-a100":"#ccff90","paper-light-green-a200":"#b2ff59","paper-light-green-a400":"#76ff03","paper-light-green-a700":"#64dd17","paper-lime-50":"#f9fbe7","paper-lime-100":"#f0f4c3","paper-lime-200":"#e6ee9c","paper-lime-300":"#dce775","paper-lime-400":"#d4e157","paper-lime-500":"#cddc39","paper-lime-600":"#c0ca33","paper-lime-700":"#afb42b","paper-lime-800":"#9e9d24","paper-lime-900":"#827717","paper-lime-a100":"#f4ff81","paper-lime-a200":"#eeff41","paper-lime-a400":"#c6ff00","paper-lime-a700":"#aeea00","paper-yellow-50":"#fffde7","paper-yellow-100":"#fff9c4","paper-yellow-200":"#fff59d","paper-yellow-300":"#fff176","paper-yellow-400":"#ffee58","paper-yellow-500":"#ffeb3b","paper-yellow-600":"#fdd835","paper-yellow-700":"#fbc02d","paper-yellow-800":"#f9a825","paper-yellow-900":"#f57f17","paper-yellow-a100":"#ffff8d","paper-yellow-a200":"#ffff00","paper-yellow-a400":"#ffea00","paper-yellow-a700":"#ffd600","paper-amber-50":"#fff8e1","paper-amber-100":"#ffecb3","paper-amber-200":"#ffe082","paper-amber-300":"#ffd54f","paper-amber-400":"#ffca28","paper-amber-500":"#ffc107","paper-amber-600":"#ffb300","paper-amber-700":"#ffa000","paper-amber-800":"#ff8f00","paper-amber-900":"#ff6f00","paper-amber-a100":"#ffe57f","paper-amber-a200":"#ffd740","paper-amber-a400":"#ffc400","paper-amber-a700":"#ffab00","paper-orange-50":"#fff3e0","paper-orange-100":"#ffe0b2","paper-orange-200":"#ffcc80","paper-orange-300":"#ffb74d","paper-orange-400":"#ffa726","paper-orange-500":"#ff9800","paper-orange-600":"#fb8c00","paper-orange-700":"#f57c00","paper-orange-800":"#ef6c00","paper-orange-900":"#e65100","paper-orange-a100":"#ffd180","paper-orange-a200":"#ffab40","paper-orange-a400":"#ff9100","paper-orange-a700":"#ff6500","paper-deep-orange-50":"#fbe9e7","paper-deep-orange-100":"#ffccbc","paper-deep-orange-200":"#ffab91","paper-deep-orange-300":"#ff8a65","paper-deep-orange-400":"#ff7043","paper-deep-orange-500":"#ff5722","paper-deep-orange-600":"#f4511e","paper-deep-orange-700":"#e64a19","paper-deep-orange-800":"#d84315","paper-deep-orange-900":"#bf360c","paper-deep-orange-a100":"#ff9e80","paper-deep-orange-a200":"#ff6e40","paper-deep-orange-a400":"#ff3d00","paper-deep-orange-a700":"#dd2c00","paper-brown-50":"#efebe9","paper-brown-100":"#d7ccc8","paper-brown-200":"#bcaaa4","paper-brown-300":"#a1887f","paper-brown-400":"#8d6e63","paper-brown-500":"#795548","paper-brown-600":"#6d4c41","paper-brown-700":"#5d4037","paper-brown-800":"#4e342e","paper-brown-900":"#3e2723","paper-grey-50":"#fafafa","paper-grey-100":"#f5f5f5","paper-grey-200":"#eeeeee","paper-grey-300":"#e0e0e0","paper-grey-400":"#bdbdbd","paper-grey-500":"#9e9e9e","paper-grey-600":"#757575","paper-grey-700":"#616161","paper-grey-800":"#424242","paper-grey-900":"#212121","paper-blue-grey-50":"#eceff1","paper-blue-grey-100":"#cfd8dc","paper-blue-grey-200":"#b0bec5","paper-blue-grey-300":"#90a4ae","paper-blue-grey-400":"#78909c","paper-blue-grey-500":"#607d8b","paper-blue-grey-600":"#546e7a","paper-blue-grey-700":"#455a64","paper-blue-grey-800":"#37474f","bilibili-pink":"#FB7299","bilibili-blue":"#23ADE5","bilibili-green":"#6dc781"}},43521:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.globalColor=t.bilibiliDarkColor=void 0;const a=i(635);t.bilibiliDarkColor=a.css`
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
`,t.globalColor=a.css`
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
`},78836:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalStyle=void 0;const a=i(635),o=i(748),r=i(13904),n=i(43521);t.GlobalStyle=a.createGlobalStyle`
  html,body {
    -ms-text-size-adjust: 100%; // 2
    -webkit-text-size-adjust: 100%; // 2
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
  body {
    margin: 0;
    font-size: 12px;
    ${(0,r.fontFamily)()};
    ${n.globalColor};
    ${o.animations};
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
`},96691:function(e,t,i){var a=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,o)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),o=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||a(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),o(i(13904),t),o(i(37459),t)},11120:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.opacity=void 0,t.opacity={"paper-blue-grey-900":"#263238","dark-divider-opacity":"0.12","dark-disabled-opacity":"0.38","dark-secondary-opacity":"0.54","dark-primary-opacity":"0.87","light-divider-opacity":"0.12","light-disabled-opacity":"0.3","light-secondary-opacity":"0.7","light-primary-opacity":"1.0"}},37459:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.theme=t.baseFontSize=void 0;const a=i(13904),o=1e3,r=204;t.baseFontSize=12,t.theme={color:a.color,logoHeight:50,bodyMinWidth:o,headerHeight:0,sidebarWidth:r,mainWidth:o-r,baseFontSize:t.baseFontSize,fontFamily:a.fontFamily,fontSize:a.fontSize,rem:a.rem,textOverflow:a.textOverflow,transition:a.transition,boxShadow:a.boxShadow,marginTrim:a.marginTrim,hideScrollbar:a.hideScrollbar,opacity:a.opacity}},13904:function(e,t,i){var a=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,o)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),o=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||a(t,e,i)},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.hideScrollbar=t.marginTrim=t.transition=t.boxShadow=t.color=t.textOverflow=t.fontSize=t.fontFamily=t.rem=void 0;const n=r(i(32699)),l=i(635),s=r(i(74770)),c=i(39757);o(i(11120),t);const p=(e,t=16)=>e/t+"rem";t.rem=p;const d=(e="")=>l.css`
    font-family: ${n.default.isEmpty(e)?null:`'${e}',`} Cereal, "PingFang SC", "Microsoft YaHei", system, -apple-system, ".SFNSDisplay-Regular", HelveticaNeue, LucidaGrande, "Hiragino Sans GB", "sans-serif";
`;t.fontFamily=d;const u=(e=16)=>l.css`
    font-size: ${(0,t.rem)(e)};
`;t.fontSize=u;const h=(e=1)=>1===e?l.css`
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
`:l.css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${e};
    overflow: hidden;
`;t.textOverflow=h;const m=(e,t=1)=>c.colorValues[e]?(0,s.default)(c.colorValues[e]).alpha(t).rgb().string():void 0;t.color=m;const f=([...e])=>{const t=1,i="#000000",a=.5;let o="";for(let r in e){const{h:n,v:l,blur:c,spread:p,color:d=(0,s.default)(i).alpha(a).rgb().string(),inset:u=""}=e[r];o+=`${n*t}px ${l*t}px ${5*c}px ${5*p}px ${d} ${u},`}return l.css`
        box-shadow: ${o};
    `};t.boxShadow=f;const g=({target:e="all",duration:t=.3})=>l.css`transition: ${e} ${t}s;`;t.transition=g;const b=({direction:e="h",value:t=0})=>l.css`
  &:first-of-type {
    ${"h"===e?"margin-left:"+t:"v"===e?"margin-top: "+t:null};
    ${"all"===e?`margin-left:${t};margin-top:${t}`:null};
  }
  &:last-of-type {
    ${"h"===e?"margin-right:"+t:"v"===e?"margin-bottom: "+t:null};
    ${"all"===e?`margin-right:${t};margin-bottom:${t}`:null};
  }
`;t.marginTrim=b,t.hideScrollbar=l.css`
    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }
    & {
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
    }
`},34345:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})}},t={};function i(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=e,(()=>{var e=[];i.O=(t,a,o,r)=>{if(!a){var n=1/0;for(p=0;p<e.length;p++){for(var[a,o,r]=e[p],l=!0,s=0;s<a.length;s++)(!1&r||n>=r)&&Object.keys(i.O).every(e=>i.O[e](a[s]))?a.splice(s--,1):(l=!1,r<n&&(n=r));if(l){e.splice(p--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[a,o,r]}})(),(()=>{i.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return i.d(t,{a:t}),t}})(),(()=>{i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{i.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{i.j=174})(),(()=>{var e={174:0};i.O.j=t=>0===e[t];var t=(t,a)=>{var o,r,[n,l,s]=a,c=0;if(n.some(t=>0!==e[t])){for(o in l)i.o(l,o)&&(i.m[o]=l[o]);if(s)var p=s(i)}for(t&&t(a);c<n.length;c++)r=n[c],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(p)},a=self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),(()=>{i.nc=void 0})();var a=i.O(void 0,[196,133,468],()=>i(52179));a=i.O(a)})();