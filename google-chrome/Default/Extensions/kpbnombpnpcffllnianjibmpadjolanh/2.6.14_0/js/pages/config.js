(()=>{"use strict";var e={33721:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},99769:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},88170:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},76774:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var i=Object.getOwnPropertyDescriptor(t,a);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,i)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),i=this&&this.__exportStar||function(e,t){for(var a in e)"default"===a||Object.prototype.hasOwnProperty.call(t,a)||n(t,e,a)};Object.defineProperty(t,"__esModule",{value:!0}),i(a(88170),t),i(a(33721),t),i(a(99769),t)},97907:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MAX_BIND_NUMBER=void 0,t.MAX_BIND_NUMBER=5},40677:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CUSTOM_WHISPER_MESSAGE=void 0,t.CUSTOM_WHISPER_MESSAGE={FREE_NUMBER:3,MAX_NUMBER:15,FREE_MAX_LENGTH:30,VIP_MAX_LENGTH:500}},90741:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DYNAMIC_TYPE_MAP=t.DYNAMIC_NOTIFICATION_TYPE_MAP=t.DYNAMIC_NAME_MAP=t.ALL_DYNAMIC_TYPE_MAP=void 0,t.ALL_DYNAMIC_TYPE_MAP={ALL:268435455,REPOST:1,PIC:2,WORD:4,VIDEO:8,DRAMA:32,ARTICLE:64,MUSIC:256,BANGUMI:512,NONE:1024,H5_SHARE:2048,COMIC_SHARE:2049,PGC_BANGUMI:4097,FILM:4098,TV:4099,GUOCHUANG:4100,DOCUMENTARY:4101,LIVE_ROOM:4200,LIVE:4201,MEDIA_LIST:4300,CHEESE_SERIES:4302,CHEESE_UPDATE:4303,HOT:1e3,LIVE_PUSH:4308,COLLECTION:4310,SUBSCRIPTION:4311,QUICK:1001},t.DYNAMIC_NAME_MAP={[t.ALL_DYNAMIC_TYPE_MAP.REPOST]:"\u8f6c\u53d1",[t.ALL_DYNAMIC_TYPE_MAP.PIC]:"\u56fe\u7247",[t.ALL_DYNAMIC_TYPE_MAP.WORD]:"\u6587\u5b57",[t.ALL_DYNAMIC_TYPE_MAP.VIDEO]:"\u89c6\u9891",[t.ALL_DYNAMIC_TYPE_MAP.DRAMA]:"\u620f\u5267",[t.ALL_DYNAMIC_TYPE_MAP.ARTICLE]:"\u6587\u7ae0",[t.ALL_DYNAMIC_TYPE_MAP.MUSIC]:"\u97f3\u4e50",[t.ALL_DYNAMIC_TYPE_MAP.BANGUMI]:"\u756a\u5267",[t.ALL_DYNAMIC_TYPE_MAP.H5_SHARE]:"\u8bdd\u9898",[t.ALL_DYNAMIC_TYPE_MAP.COMIC_SHARE]:"\u6f2b\u753b",[t.ALL_DYNAMIC_TYPE_MAP.PGC_BANGUMI]:"\u756a\u5267",[t.ALL_DYNAMIC_TYPE_MAP.FILM]:"\u7535\u5f71",[t.ALL_DYNAMIC_TYPE_MAP.TV]:"\u7535\u89c6/\u7efc\u827a",[t.ALL_DYNAMIC_TYPE_MAP.GUOCHUANG]:"\u56fd\u521b",[t.ALL_DYNAMIC_TYPE_MAP.DOCUMENTARY]:"\u7eaa\u5f55\u7247",[t.ALL_DYNAMIC_TYPE_MAP.LIVE_ROOM]:"\u76f4\u64ad\u95f4",[t.ALL_DYNAMIC_TYPE_MAP.LIVE]:"\u76f4\u64ad",[t.ALL_DYNAMIC_TYPE_MAP.MEDIA_LIST]:"\u6536\u85cf\u5939",[t.ALL_DYNAMIC_TYPE_MAP.CHEESE_SERIES]:"\u8bfe\u7a0b",[t.ALL_DYNAMIC_TYPE_MAP.CHEESE_UPDATE]:"\u8bfe\u7a0b\u66f4\u65b0",[t.ALL_DYNAMIC_TYPE_MAP.HOT]:"\u70ed\u95e8",[t.ALL_DYNAMIC_TYPE_MAP.LIVE_PUSH]:"\u76f4\u64ad\uff08\u63a8\u9001\uff09",[t.ALL_DYNAMIC_TYPE_MAP.COLLECTION]:"\u5408\u96c6",[t.ALL_DYNAMIC_TYPE_MAP.SUBSCRIPTION]:"\u76f4\u64ad\uff08\u8ba2\u9605\uff09"},t.DYNAMIC_NOTIFICATION_TYPE_MAP=[{title:"\u5168\u90e8\uff08\u5305\u542b\u8f6c\u53d1\uff09",types:[t.ALL_DYNAMIC_TYPE_MAP.ALL]},{title:"\u56fe\u6587",types:[t.ALL_DYNAMIC_TYPE_MAP.PIC,t.ALL_DYNAMIC_TYPE_MAP.WORD]},{title:"UP\u6295\u7a3f\u89c6\u9891",types:[t.ALL_DYNAMIC_TYPE_MAP.VIDEO]},{title:"\u6536\u85cf\u5939\uff0c\u5408\u96c6",types:[t.ALL_DYNAMIC_TYPE_MAP.MEDIA_LIST,t.ALL_DYNAMIC_TYPE_MAP.COLLECTION]},{title:"\u4e13\u680f",types:[t.ALL_DYNAMIC_TYPE_MAP.ARTICLE]},{title:"\u76f4\u64ad",types:[t.ALL_DYNAMIC_TYPE_MAP.LIVE_ROOM,t.ALL_DYNAMIC_TYPE_MAP.LIVE,t.ALL_DYNAMIC_TYPE_MAP.LIVE_PUSH,t.ALL_DYNAMIC_TYPE_MAP.SUBSCRIPTION]},{title:"\u97f3\u4e50",types:[t.ALL_DYNAMIC_TYPE_MAP.MUSIC]},{title:"\u65e5\u756a\uff0c\u56fd\u521b",types:[t.ALL_DYNAMIC_TYPE_MAP.BANGUMI,t.ALL_DYNAMIC_TYPE_MAP.PGC_BANGUMI,t.ALL_DYNAMIC_TYPE_MAP.GUOCHUANG]},{title:"\u6f2b\u753b",types:[t.ALL_DYNAMIC_TYPE_MAP.COMIC_SHARE]},{title:"\u8bfe\u7a0b",types:[t.ALL_DYNAMIC_TYPE_MAP.CHEESE_SERIES,t.ALL_DYNAMIC_TYPE_MAP.CHEESE_UPDATE]},{title:"\u7535\u5f71",types:[t.ALL_DYNAMIC_TYPE_MAP.FILM]},{title:"\u7535\u89c6\u7efc\u827a",types:[t.ALL_DYNAMIC_TYPE_MAP.TV]},{title:"\u7eaa\u5f55\u7247",types:[t.ALL_DYNAMIC_TYPE_MAP.DOCUMENTARY]},{title:"\u5176\u4ed6\uff08\u8bdd\u9898\uff0c\u620f\u5267\uff0c\u5df2\u88ab\u5220\u9664\u5185\u5bb9\uff09",types:[t.ALL_DYNAMIC_TYPE_MAP.H5_SHARE,t.ALL_DYNAMIC_TYPE_MAP.COMIC_SHARE,t.ALL_DYNAMIC_TYPE_MAP.DRAMA,t.ALL_DYNAMIC_TYPE_MAP.NONE]}],t.DYNAMIC_TYPE_MAP=Object.assign({ALL:268435455,PIC:2,VIDEO:8,ARTICLE:64,BANGUMI:512},t.ALL_DYNAMIC_TYPE_MAP)},29010:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var i=Object.getOwnPropertyDescriptor(t,a);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,i)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),i=this&&this.__exportStar||function(e,t){for(var a in e)"default"===a||Object.prototype.hasOwnProperty.call(t,a)||n(t,e,a)};Object.defineProperty(t,"__esModule",{value:!0}),i(a(25867),t),i(a(74051),t),i(a(48969),t),i(a(97907),t),i(a(40677),t),i(a(76774),t),i(a(20078),t)},74051:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LIVE_FORMAT_NAME_MAP=t.LIVE_FORMATS_MAP=t.QUALITY_NAME_LIST=void 0,t.QUALITY_NAME_LIST=["4K","\u539f\u753bPRO","\u539f\u753b","\u84dd\u5149PRO","\u84dd\u5149","\u8d85\u6e05PRO","\u8d85\u6e05","\u9ad8\u6e05","\u6d41\u7545"],t.LIVE_FORMATS_MAP=[{qn:3e4,desc:"\u675c\u6bd4",hdr:!1},{qn:2e4,desc:"4K",hdr:!1},{qn:1e4,desc:"\u539f\u753b",hdr:!1},{qn:400,desc:"\u84dd\u5149",hdr:!0},{qn:250,desc:"\u8d85\u6e05",hdr:!0},{qn:150,desc:"\u9ad8\u6e05",hdr:!1},{qn:80,desc:"\u6d41\u7545",hdr:!1}],t.LIVE_FORMAT_NAME_MAP={3e4:"\u675c\u6bd4",2e4:"4K",1e4:"\u539f\u753b",400:"\u84dd\u5149",250:"\u8d85\u6e05",150:"\u9ad8\u6e05",80:"\u6d41\u7545"}},48969:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TEXT_EMOJI=void 0,t.TEXT_EMOJI=["(\u2312\u25bd\u2312)","\uff08\uffe3\u25bd\uffe3\uff09","(=\u30fb\u03c9\u30fb=)","(\uff40\u30fb\u03c9\u30fb\xb4)","(\u301c\uffe3\u25b3\uffe3)\u301c","(\uff65\u2200\uff65)","(\xb0\u2200\xb0)\uff89","(\uffe33\uffe3)","\u256e(\uffe3\u25bd\uffe3)\u256d","( \xb4_\u309d\uff40)","\u2190_\u2190","\u2192_\u2192","(<_<)","(>_>)","(;\xac_\xac)",'("\u2594\u25a1\u2594)/',"(\uff9f\u0414\uff9f\u2261\uff9f\u0434\uff9f)!?","\u03a3(\uff9f\u0434\uff9f;)","\u03a3( \uffe3\u25a1\uffe3||)","(\xb4\uff1b\u03c9\uff1b`)","\uff08/T\u0414T)/","(^\u30fb\u03c9\u30fb^ )","(\uff61\uff65\u03c9\uff65\uff61)","(\u25cf\uffe3(\uff74)\uffe3\u25cf)","\u03b5=\u03b5=(\u30ce\u2267\u2207\u2266)\u30ce","(\xb4\uff65_\uff65`)","(-_-#)","\uff08\uffe3\u3078\uffe3\uff09","(\uffe3\u03b5(#\uffe3) \u03a3","\u30fd(`\u0414\xb4)\uff89","(\u256f\xb0\u53e3\xb0)\u256f(\u2534\u2014\u2534","\uff08#-_-)\u252f\u2501\u252f","_(:3\u300d\u2220)_","( \u309c- \u309c)\u3064\u30ed","(*\xb0\u25bd\xb0*)\u516b(*\xb0\u25bd\xb0*)\u266a","\u273f\u30fd(\xb0\u25bd\xb0)\u30ce\u273f","(\xa63\u3010\u2593\u2593\u3011","\ub208_\ub208","(\u0ca1\u03c9\u0ca1)","_(\u2267\u2207\u2266\u300d\u2220)_","\u2501\u2501\u2501\u2211(\uff9f\u25a1\uff9f*\u5ddd\u2501","\u2727(\u2256 \u25e1 \u2256\u273f)","( \xb4\uff65\uff65)\uff89(._.`)","(\xba\ufe43\xba\xa0)","(\u0e51>\u0602<\u0e51\uff09","\uff61\uff9f(\uff9f\xb4\u0414\uff40)\uff9f\uff61","(\u2202\u03c9\u2202)","(\u252f_\u252f)","(\u30fb\u03c9< )\u2605","( \u0e51\u02ca\u2022\u0325\u25b5\u2022)\u0a6d\u208e\u208e","\xa5\u311f(\xb4\uff65\u1d17\uff65`)\u30ce\xa5","\u03a3_(\ua4aa\u0f40\ua4aa\u300d\u2220)_","\u0669(\u0e5b \u02d8 \xb3\u02d8)\u06f6\u2764","(\u0e51\u203e\u1dc5^\u203e\u1dc5\u0e51)","(\ua4aa\u2313\ua4aa)"]},25867:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SUPER_VIP_USER_IDENTITIES_KEY_LIST=t.VIP_USER_IDENTITIES_KEY_LIST=t.ALL_USER_IDENTITIES_KEY_LIST=t.USER_IDENTITIES_NAME_MAP=void 0,t.USER_IDENTITIES_NAME_MAP={superAdmin:"\u732b\u56fd\u8bbe\u8ba1\u5e08",admin:"\u732b\u56fd\u57ce\u7ba1",catForever:"\u732b\u56fd\u5927\u62a4\u6cd5",catVIPSuper:"\u52a9\u624b\u732b\u57f9\u80b2\u5e08",catVIP:"\u52a9\u624b\u732b\u89c2\u5bdf\u5458",catWatcher:"\u52a9\u624b\u732b\u77ad\u671b\u8005",catVIPHonor:"\u732b\u56fd\u8363\u8a89\u5e02\u6c11",catAirborneCommander:"\u7a7a\u964d\u6307\u6325\u5b98",catAirbornePilot:"\u55b5\u8425\u98de\u884c\u5458"},t.ALL_USER_IDENTITIES_KEY_LIST=["superAdmin","admin","catForever","catVIPSuper","catVIP","catWatcher"],t.VIP_USER_IDENTITIES_KEY_LIST=["superAdmin","admin","catForever","catVIP"],t.SUPER_VIP_USER_IDENTITIES_KEY_LIST=["superAdmin","admin","catForever"]},20078:(e,t)=>{var a;Object.defineProperty(t,"__esModule",{value:!0}),t.VIDEO_URL_TYPE_ID=t.VIDEO_FORMATS_MAP=void 0,t.VIDEO_FORMATS_MAP={0:"\u81ea\u52a8",15:"360P \u6d41\u7545",16:"360P \u6d41\u7545",32:"480P \u6e05\u6670",48:"720P \u9ad8\u6e05",64:"720P \u9ad8\u6e05",74:"720P60 \u9ad8\u6e05",80:"1080P \u9ad8\u6e05",112:"1080P \u9ad8\u7801\u7387",116:"1080P 60\u5e27",120:"4K \u8d85\u6e05",125:"HDR \u771f\u5f69",126:"\u675c\u6bd4\u89c6\u754c",127:"8K \u8d85\u9ad8\u6e05"},function(e){e["bv"]="bvid",e["av"]="aid",e["ep"]="epId",e["ss"]="ssId"}(a||(t.VIDEO_URL_TYPE_ID=a={}))},73972:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Point2=void 0;class a{constructor(...e){this.__valid=!1,this.__needUpdate=!0,this.set=(...e)=>{if(isNaN(+e[0])||isNaN(+e[1])){if(e[0]instanceof Array&&2===e[0].length)this.set(...e[0]);else if(e[0]instanceof a){const{x:t,y:a}=e[0];this.set(t,a)}}else this.__needUpdate=!0,this.x=+e[0],this.y=+e[1];return this},this.setX=e=>(this.x=e,this.__needUpdate=!0,this),this.setY=e=>(this.y=e,this.__needUpdate=!0,this),this.add=e=>(this.x+=e.x,this.y+=e.y,this),this.addX=e=>(this.x+=e,this),this.addY=e=>(this.y+=e,this),this.sub=e=>(this.x-=e.x,this.y-=e.y,this),this.subX=e=>this.addX(-e),this.subY=e=>this.addY(-e),this.multiply=e=>0===e?this.set(0,0):(this.x*=e,this.y*=e,this),this.multiplyX=e=>(0===e?this.x=1/0:this.x*=e,this),this.multiplyY=e=>(0===e?this.y=1/0:this.y*=e,this),this.divide=e=>0===e?this.set(1/0,1/0):this.multiply(1/e),this.divideX=e=>this.multiplyX(1/e),this.divideY=e=>this.multiplyY(1/e),this.dot=e=>this.x*e.x+this.y+e.y,this.equal=(...e)=>{if("number"===typeof e[0]&&"number"===typeof e[1])return e[0]===this.x&&e[1]===this.y;if(e[0]instanceof Array&&2===e.length)return this.equal(...e[0]);if(e[0]instanceof a){const{x:t,y:a}=e[0];return this.equal(t,a)}return!1},this.normalize=()=>{const e=Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));return this.divide(e)},this.negtiveX=()=>(this.x*=-1,this),this.negtiveY=()=>(this.y*=-1,this),this.negtive=()=>this.negtiveX().negtiveY(),this.round=()=>(this.x=Math.round(this.x),this.y=Math.round(this.y),this),this.roundX=()=>(this.x=Math.round(this.x),this),this.roundY=()=>(this.y=Math.round(this.y),this),this.floor=()=>(this.x=Math.floor(this.x),this.y=Math.floor(this.y),this),this.floorX=()=>(this.x=Math.floor(this.x),this),this.floorY=()=>(this.y=Math.floor(this.y),this),this.ceil=()=>(this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this),this.ceilX=()=>(this.x=Math.ceil(this.x),this),this.ceilY=()=>(this.y=Math.ceil(this.y),this),this.trunc=()=>(this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this),this.truncX=()=>(this.x=Math.trunc(this.x),this),this.truncY=()=>(this.y=Math.trunc(this.y),this),this.clone=()=>new this.constructor(this.x,this.y),this.toArray=()=>[this.x,this.y],this.toObject=()=>({x:this.x,y:this.y}),this.toString=(e="x",t="y")=>`${e}${this.x}${t}${this.y}`,this.set(...e)}get zero(){return new this.constructor(0,0)}get infinity(){return new this.constructor(1/0,1/0)}get NaN(){return new this.constructor(NaN,NaN)}get unit(){return new this.constructor(1,1)}get valid(){return this.__needUpdate&&(this.__valid=Number.isInteger(this.x)&&Number.isInteger(this.y),this.__needUpdate=!1),this.__valid}get area(){return this.x*this.y}}t.Point2=a},69426:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Position=void 0;const n=a(73972);class i extends n.Point2{constructor(...e){super(...e)}}t.Position=i},28507:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MainStore=void 0;const i=n(a(57689));t.MainStore=i.default.createContext({})},58690:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Config=void 0;const i=a(53507),l=n(a(57689)),o=a(635),s=a(78836),r=a(47532),c=a(30890),d=a(70873),u=o.createGlobalStyle`
  .bilibili-helper-2-icon-cat-paw {
    margin: 0 8px 0 4px;
    color: var(--bilibili-pink);
    transform: rotate(-35deg);
    zoom: .74;
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
`;class h extends l.default.Component{constructor(e){super(e),this.handleOnReloadExtension=()=>{chrome.runtime.reload()}}componentDidMount(){this.props.initialized||i.Message.error(l.default.createElement(l.default.Fragment,null,"\u52a9\u624b\u521d\u59cb\u5316\u5f02\u5e38",l.default.createElement("a",{className:"extension-reload-btn",onClick:this.handleOnReloadExtension},"\u70b9\u51fb\u91cd\u542f")),0),chrome.runtime.sendMessage({target:"googleAnalytics",event:"sendPage",pathname:"/config/home"})}render(){return l.default.createElement(r.HashRouter,null,l.default.createElement(s.GlobalStyle,null),l.default.createElement(u,null),l.default.createElement(c.Header,null),l.default.createElement(d.Main,null))}}t.Config=h},30890:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;const i=a(51920),l=n(a(57689)),o=n(a(635)),s=a(58383),r=a(58113),c=(0,o.default)(r.AcghelperTextIcon)`
  width: 120px;
  margin-left: -3px;
  height: auto;
  fill: #fff;

  path {
    fill: #fff;
  }
`,d=o.default.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  flex-shrink: 0;
  padding: 10px 0;
  background-color: var(--bilibili-pink);
  color: #fff;
  overflow: hidden;

  .inner {
    display: flex;
    align-items: center;
    //max-width: 800px;
    margin: 0 auto;
    padding: 0 12px;
    cursor: pointer;

    .bilibili-helper-2-icon-cat {
      float: left;
      color: #fff;
    }

    header {
      margin-left: 8px;

      h1 {
        margin: -6px 0 0;
        text-indent: -1px;

        .bilibili-helper-2-icon-acghelper {
          line-height: 46px;
          font-weight: normal;
        }
      }

      p {
        display: flex;
        margin: -6px 0 0;

        a {
          margin-left: 2px;
        }

        .version {
          //margin-left: auto;
        }
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
`;class u extends l.default.Component{constructor(e){super(e),this.state={currentVersionInfo:null}}componentDidMount(){chrome.runtime.sendMessage({target:"states",event:"getVersionInfo"},e=>{e&&this.setState({currentVersionInfo:Object.assign({},e)})})}onClickLogo(){chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://acghelper.com/"})}render(){const{currentVersionInfo:e}=this.state;return l.default.createElement(d,null,l.default.createElement("div",{className:"inner",onClick:this.onClickLogo},l.default.createElement(i.Icon,{icon:"cat-tm",size:55}),l.default.createElement("header",null,l.default.createElement(c,null),l.default.createElement("p",null,l.default.createElement("span",{className:"version"},"version "+s.version)))))}}t.Header=u},11580:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(a(57689)),l=a(97326),o=a(83938),s=a(96582),r=a(58383),c=a(58690);(0,s.injectLocalIconfont)();const d=()=>new Promise(e=>{chrome.runtime.sendMessage({target:"app",event:"getInitialStatus"},t=>{e(!!t.bilibiliHelperAccount)})}),u=3;let h=0,p=!1;const g=document.getElementById("root"),m=()=>new Promise(e=>{d().then(t=>{t?((0,o.initI18n)().then(()=>{(0,l.render)(i.default.createElement(c.Config,{initialized:!0}),g,r.consoleLogo)}),e(!0)):h<u?(p||(p=!0,(0,l.render)("\u521d\u59cb\u5316\u4e2d\uff0c\u8bf7\u7a0d\u5019",g)),++h,setTimeout(m,1e3)):((0,o.initI18n)().then(()=>{(0,l.render)(i.default.createElement(c.Config,{initialized:!1}),g,r.consoleLogo)}),e(!1))})});m()},94345:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});a(53507);const i=a(1693),l=n(a(57689)),o=a(47532),s=n(a(635)),r=a(53671),c=(a(60998),a(28507)),d=s.default.div`

`;class u extends l.default.Component{constructor(e){super(e),this.state={cvImageDownload:!1},this.handleOnToggleCvImageDownload=()=>{chrome.runtime.sendMessage({target:"cvImageDownload",event:"setSetting",on:!this.state.cvImageDownload},()=>{this.context.uploadSettings("cvImageDownload"),this.setState({cvImageDownload:!this.state.cvImageDownload})})}}componentDidMount(){chrome.runtime.sendMessage({target:"cvImageDownload",event:"getSetting"},({on:e})=>{this.setState({cvImageDownload:e})})}render(){return l.default.createElement(d,null,l.default.createElement(r.Title,{title:"\u4e13\u680f\u9875\u9762\u8bbe\u7f6e"}),l.default.createElement(r.Section,{title:"\u56fe\u7247\u4e0b\u8f7d",toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnToggleCvImageDownload,on:this.state.cvImageDownload}),active:this.state.cvImageDownload}))}}u.contextType=c.MainStore,t["default"]=(0,o.withRouter)(u)},21265:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AccountBlock=void 0;const i=a(51920),l=n(a(57689)),o=n(a(635)),s=o.default.div.attrs({className:"account-block"})`
  display: flex;
  margin-bottom: 8px;
  padding: 1px 1px 8px;
  width: 100%;
  border-bottom: 1px solid #f7f7f7;
  box-sizing: border-box;
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 1px;
    border-bottom: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  .avatar {
    flex-shrink: 0;
    margin-right: 16px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 0 2px #b9b9b9;
    overflow: hidden;
    cursor: pointer;
  }

  .info {
    flex-grow: 1;
    padding: 2px 0;
    max-width: 350px;
    box-sizing: border-box;

    h6 {
      display: flex;
      align-items: center;
      margin: 0 0 4px 0;
      font-size: 14px;

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

      .add-btn {
        display: inline-block;
        margin-left: auto;
        height: 20px;
        vertical-align: bottom;
        font-size: 12px;
        background-color: var(--bilibili-blue);
        color: var(--google-grey-50);
      }

      .cancel-btn {
        display: inline-block;
        margin-left: auto;
        height: 20px;
        vertical-align: bottom;
        font-size: 12px;
        background-color: var(--google-grey-400);
        color: var(--google-grey-50);
      }
    }

    p {
      margin: 0 0 4px 0;
      color: #585858;
      overflow: hidden;
      white-space: break-spaces;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;

      span, a {
        margin-right: 12px
      }
    }

    i {
      font-style: normal;
    }
  }

  .action-box {
    flex-shrink: 0;

    .button {
      margin-top: 15.5px;
      background-color: var(--bilibili-blue);
      color: var(--google-grey-50);
    }
  }
`,r=e=>{const{added:t,mid:a,uname:n,face:o,level:r,videos:c,fans:d,sign:u,onOpenUserSpace:h,onClickAttentionBtn:p}=e,g=o.match("noface.gif$")?o:o+"@140w_140h.webp";return l.default.createElement(s,null,l.default.createElement("div",{className:"avatar",onClick:()=>h(a)},l.default.createElement(i.Image,{url:g.replace(/^(http:\/\/|\/\/)/,"https://"),sign:n})),l.default.createElement("div",{className:"info"},l.default.createElement("h6",null,l.default.createElement("a",{onClick:()=>h(a)},n),r?l.default.createElement("span",{className:"level lv"+r},"Lv.",r):null,l.default.createElement(i.Button,{className:t?"cancel-btn":"add-btn",onClick:()=>p(a)},t?"\u53d6\u6d88":"\u6dfb\u52a0")),(c||d)&&l.default.createElement("p",null,c&&l.default.createElement("span",null,"\u7a3f\u4ef6\u6570\uff1a",l.default.createElement("i",null,c)),d&&l.default.createElement("span",null,"\u7c89\u4e1d\u6570\uff1a",l.default.createElement("i",null,d))),u?l.default.createElement("p",{className:"sign",title:u},u):null))};t.AccountBlock=r},55992:function(e,t,a){var n=this&&this.__awaiter||function(e,t,a,n){function i(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,l){function o(e){try{r(n.next(e))}catch(e){l(e)}}function s(e){try{r(n["throw"](e))}catch(e){l(e)}}function r(e){e.done?a(e.value):i(e.value).then(o,s)}r((n=n.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AddBilibiliAccountModalBySearch=void 0;const l=a(32699),o=a(51920),s=a(65033),r=i(a(57689)),c=i(a(635)),d=a(96582),u=a(21265),h=(0,c.default)(o.Modal)`
  width: 500px;
`,p=c.default.div`
  .search-bar {
    display: flex;

    input {
      flex-grow: 1;
      outline: none;
      padding: 6px 10px;
      margin-right: 12px;
    }

    .button {
      flex-shrink: 0;
      vertical-align: middle;
      background-color: var(--bilibili-blue);
      color: var(--google-grey-50);
    }
  }

  .result-box {
    min-height: 20px;

    .list {
      position: relative;
      padding: 8px;
      height: 300px;
      border: 1px solid #eee;
      border-radius: 2px;
      box-sizing: border-box;
      overflow: auto;
    }

    .has-more-block {
      height: 50px;
    }
  }
`;class g extends r.default.Component{constructor(e){super(e),this.handleOnCreateUserSpaceTab=e=>{this.createTab("https://space.bilibili.com/"+e)},this.handleOnClickOpenModal=()=>{this.setState({modalOn:!0})},this.handleOnClickCloseModal=()=>{this.setState({modalOn:!1})},this.handleOnUserInputChange=e=>{e.persist(),this._onChange||(this._onChange=(0,l.debounce)(e=>{const t=e.target.value.trim();t&&this.setState({keyword:t,pn:1,searchResult:[],hasMore:!1},()=>{this.handleOnSearchUser(t,this.state.pn)})},700)),this._onChange(e)},this.handleOnSearchUser=(e,t=1)=>{e&&new Promise(e=>{this.searching?this.cancelSearchRequest().then(t=>e(!t)):e(!1)}).then(a=>{a||(this.searching=!0,this.sendSearchRequest(e,t).then(()=>{this.searchResultListRef.current.scrollTo(0,0)}))})},this.sendSearchRequest=(e,t=1)=>n(this,void 0,void 0,(function*(){if(!e)return;const a="https://api.bilibili.com/x/web-interface/search/type",n={search_type:"bili_user",page:t,order:0,order_sort:0,user_type:0,keyword:e},i=(0,d.generateURL)(a,n);return this.fetchPassword=Date.now(),new Promise(e=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:i,options:{contentType:"json",controlPassword:this.fetchPassword}},({data:a})=>{if(this.searching=!1,a&&a.data&&a.data.result&&a.data.result.length>0){const{searchResult:n}=this.state;n.push(...a.data.result),this.setState({searchResult:n,resultCount:a.data.numResults,hasMore:t<a.data.numPages,pn:t+1}),e()}else e()})})})),this.cancelSearchRequest=()=>new Promise(e=>{chrome.runtime.sendMessage({target:"requestController",event:"cancel",controlPassword:this.fetchPassword},t=>{e(t)})}),this.state={modalOn:!1,searching:!1,searchResult:[],resultCount:0,hasMore:!1,keyword:"",pn:1},this.searchResultListRef=r.default.createRef(),this.bottomObserverRef=r.default.createRef()}componentDidMount(){this.searchResultListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{this.state.hasMore&&e.length&&0!==e[0].intersectionRatio&&this.sendSearchRequest(this.state.keyword,this.state.pn)},{root:this.searchResultListRef.current}),this.observer.observe(this.bottomObserverRef.current))}createTab(e){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}render(){const{modalOn:e=!1,title:t,addedUidList:a,onClickAccountBtn:n,onClickClose:i}=this.props,{searchResult:l,resultCount:c}=this.state;return r.default.createElement(h,{open:e,title:t,buttons:r.default.createElement(r.default.Fragment,null,r.default.createElement(o.Button,{onClick:i},"\u5173\u95ed")),onClickMask:i},r.default.createElement(p,null,r.default.createElement("div",{className:"search-bar"},r.default.createElement(s.Input,{onChange:this.handleOnUserInputChange,type:"text",placeholder:"\u8f93\u5165\u7528\u6237\u540d\u8fdb\u884c\u641c\u7d22"}),r.default.createElement(o.Button,null,"\u641c\u7d22")),r.default.createElement("div",{className:"result-box"},r.default.createElement("p",null,"\u641c\u7d22\u7ed3\u679c",c?r.default.createElement("span",null," ~ \u5171\u627e\u5230 ",1e3===c?"1000+":c," \u4e2a\u7528\u6237"):null),r.default.createElement("div",{className:"list",ref:this.searchResultListRef},l.length>0?l.map(e=>r.default.createElement(u.AccountBlock,Object.assign({key:e.mid},e,{face:e.upic,sign:e.usign,added:a.has(e.mid),onOpenUserSpace:this.handleOnCreateUserSpaceTab,onClickAttentionBtn:n}))):"\u6ca1\u6709\u6570\u636e\uff0c\u8f93\u5165\u5173\u952e\u8bcd\u5f00\u59cb\u641c\u7d22",r.default.createElement("div",{className:"has-more-block",ref:this.bottomObserverRef})))))}}t.AddBilibiliAccountModalBySearch=g},58651:function(e,t,a){var n=this&&this.__awaiter||function(e,t,a,n){function i(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,l){function o(e){try{r(n.next(e))}catch(e){l(e)}}function s(e){try{r(n["throw"](e))}catch(e){l(e)}}function r(e){e.done?a(e.value):i(e.value).then(o,s)}r((n=n.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AddBilibiliAccountModalWithFollow=void 0;const l=a(32699),o=a(51920),s=a(65033),r=i(a(57689)),c=i(a(635)),d=a(96582),u=a(21265),h=(0,c.default)(o.Modal)`
  width: 500px;
`,p=c.default.div`
  .search-bar {
    display: flex;

    input {
      flex-grow: 1;
      outline: none;
      padding: 6px 10px;
      margin-right: 12px;
    }

    .button {
      flex-shrink: 0;
      vertical-align: middle;
      background-color: var(--bilibili-blue);
      color: var(--google-grey-50);
    }
  }

  .result-box {
    position: relative;
    min-height: 20px;

    .list {
      padding: 8px;
      height: 300px;
      border: 1px solid #eee;
      border-radius: 2px;
      box-sizing: border-box;
      overflow: auto;
      transform: scale(1);
    }

    .has-more-block {
      height: 50px;
    }
  }
`;class g extends r.default.Component{constructor(e){super(e),this.initialized=!1,this.handleOnCreateUserSpaceTab=e=>{this.createTab("https://space.bilibili.com/"+e)},this.handleOnClickOpenModal=()=>{this.setState({modalOn:!0})},this.handleOnClickCloseModal=()=>{this.setState({modalOn:!1})},this.handleOnUserInputChange=e=>{e.persist(),this._onChange||(this._onChange=(0,l.debounce)(e=>{const t=e.target.value.trim();t?this.setState({keyword:t,pn:1,searchResult:[],hasMore:!1},()=>{this.handleOnSearchUser(this.state.pn)}):this.setState({keyword:"",pn:1,hasMore:!1},()=>{this.handleOnSearchUser(this.state.pn)})},700)),this._onChange(e)},this.handleOnSearchUser=(e=1)=>{new Promise(e=>{this.searching?this.cancelSearchRequest().then(t=>e(!t)):e(!1)}).then(t=>{t||(this.searching=!0,this.sendSearchRequest(e).then(()=>{this.searchResultListRef.current.scrollTo(0,0)}))})},this.sendSearchRequest=(e=1,t=20)=>n(this,void 0,void 0,(function*(){let a="https://api.bilibili.com/x/relation/followings";const n={vmid:this.props.bilibiliAccount.uid,pn:e,ps:t,order:"desc",order_type:"attention"};this.state.keyword&&(a="https://api.bilibili.com/x/relation/followings/search",n.name=this.state.keyword);const i=(0,d.generateURL)(a,n);return this.fetchPassword=Date.now(),new Promise(a=>{chrome.runtime.sendMessage({target:"requestController",event:"create",url:i,options:{contentType:"json",controlPassword:this.fetchPassword}},({data:n})=>{if(this.searching=!1,n&&n.data&&n.data.list){if(n.data.list.length>0){let{searchResult:a}=this.state;1===e?a=n.data.list:a.push(...n.data.list),this.setState({searchResult:a,resultCount:n.data.total,hasMore:n.data.list.length===t,pn:e+1})}else this.setState({hasMore:!1});a()}else a()})})})),this.cancelSearchRequest=()=>new Promise(e=>{chrome.runtime.sendMessage({target:"requestController",event:"cancel",controlPassword:this.fetchPassword},t=>{e(t)})}),this.state={modalOn:!1,searching:!1,searchResult:[],resultCount:0,hasMore:!1,keyword:"",pn:1,listType:"all"},this.searchResultListRef=r.default.createRef(),this.bottomObserverRef=r.default.createRef()}componentDidMount(){this.searchResultListRef.current&&this.bottomObserverRef.current&&(this.observer=new IntersectionObserver((e,t)=>{this.state.hasMore&&this.props.modalOn&&e.length&&0!==e[0].intersectionRatio&&this.sendSearchRequest(this.state.pn)},{root:this.searchResultListRef.current}),this.observer.observe(this.bottomObserverRef.current))}componentDidUpdate(){!this.initialized&&this.props.bilibiliAccount&&this.props.modalOn&&(this.initialized=!0,this.sendSearchRequest(1))}createTab(e){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}render(){const{modalOn:e=!1,title:t,addedUidList:a,onClickAccountBtn:n,onClickClose:i}=this.props,{searchResult:l,resultCount:c,keyword:d}=this.state;return r.default.createElement(h,{open:e,title:t,buttons:r.default.createElement(r.default.Fragment,null,r.default.createElement(o.Button,{onClick:i},"\u5173\u95ed")),onClickMask:i},r.default.createElement(p,null,r.default.createElement("div",{className:"search-bar"},r.default.createElement(s.Input,{onChange:this.handleOnUserInputChange,type:"text",placeholder:"\u8f93\u5165\u7528\u6237\u540d\u8fdb\u884c\u641c\u7d22"}),r.default.createElement(o.Button,{onClick:()=>this.handleOnSearchUser(this.state.pn)},"\u641c\u7d22")),r.default.createElement("div",{className:"result-box"},r.default.createElement("p",null,"\u641c\u7d22\u7ed3\u679c",d&&c?r.default.createElement("span",null," ~ \u5171\u627e\u5230 ",1e3===c?"1000+":c," \u4e2a\u7528\u6237"):null),r.default.createElement("div",{className:"list",ref:this.searchResultListRef},e&&l.length>0?l.map(e=>r.default.createElement(u.AccountBlock,Object.assign({key:e.mid},e,{added:a.has(e.mid),onOpenUserSpace:this.handleOnCreateUserSpaceTab,onClickAttentionBtn:n}))):"\u6ca1\u6709\u6570\u636e\uff0c\u8f93\u5165\u5173\u952e\u8bcd\u5f00\u59cb\u641c\u7d22",r.default.createElement("div",{className:"has-more-block",ref:this.bottomObserverRef})))))}}t.AddBilibiliAccountModalWithFollow=g},6500:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.HelperArea=void 0;const i=n(a(57689)),l=n(a(635)),o=l.default.div`
  margin-left: 12px;
  padding-left: 12px;
  min-width: 200px;
  border-left: 1px dashed var(--bilibili-pink);

  .description {
    margin-top: 0;
    font-size: 14px;
  }

  b {
    display: inline-block;
    padding: 0 4px;
    color: var(--bilibili-pink);
  }

  .bilibili-helper-2-icon-bilibili {
    padding: 0 4px;
    width: fit-content;
    vertical-align: baseline;
    color: var(--bilibili-pink);
  }

  .bilibili-helper-2-icon-acghelper {
    padding: 0 4px;
    width: fit-content;
    color: var(--bilibili-pink);
  }
`;class s extends i.default.Component{constructor(e){super(e)}render(){const{title:e,description:t,children:a}=this.props;return i.default.createElement(o,null,e&&i.default.createElement("h3",null,e),t||a?i.default.createElement("div",{className:"description"},t||a):null)}}t.HelperArea=s},60998:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NeedLoginMask=void 0;const i=n(a(57689)),l=n(a(635)),o=a(53507),s=a(28507),r=(0,l.default)(o.Modal)`
  .introduction {
    text-align: center;

    .bilibili-helper-2-icon-bilibili {
      padding: 0 4px;
      width: fit-content;
      vertical-align: baseline;
      color: var(--bilibili-pink);
    }

    .bilibili-helper-2-icon-acghelper {
      padding: 0 4px;
      width: fit-content;
      color: var(--bilibili-pink);
    }
  }

  .description {
    font-size: 12px;
    color: var(--bilibili-pink);
    text-align: center;

    a {
      color: var(--bilibili-blue);
      cursor: pointer;
    }
  }
`,c=l.default.div`
  margin: 30px auto;
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

    //.bilibili-helper-2-icon-bilibili, .bilibili-helper-2-icon-acghelper {
    //  color: var(--bilibili-gray);
    //}
  }
`;class d extends i.default.Component{constructor(e){super(e),this.state={loading:!1,loginModalShow:!0,hasBilibiliAccountLogin:!1},this.handleOnClickLogin=()=>{this.state.loading||(this.setState({loading:!0}),this.context.handleOnClickLogin(e=>{e?this.setState({loading:!1,loginModalShow:!1}):this.setState({loading:!1,loginModalShow:!0})}))},this.handleOnClickRegister=()=>{this.state.loading||(this.setState({loading:!0}),this.context.handleOnClickRegister(e=>{e?this.setState({loading:!1,loginModalShow:!1}):this.setState({loading:!1,loginModalShow:!0})}))},this.handleOnClickMask=()=>{this.setState({loginModalShow:!1})},this.handleOnLoginOtherBilibiliAccount=()=>{this.context.handleOnLoginOtherBilibiliAccount().then(()=>{this.setState({hasBilibiliAccountLogin:!0})})},this.handleOnClickGoToOverview=()=>{location.href=chrome.runtime.getURL("/html/config.html#/"),this.context.handleOnClickShowLoginModal()}}render(){const{hasLogin:e}=this.context,{children:t}=this.props,{loginModalShow:a}=this.state;return i.default.createElement(r,{open:this.props.show&&a&&!e,onClickMask:this.handleOnClickMask,className:"need-login-mask"},t&&i.default.createElement("p",{className:"introduction"},t),i.default.createElement(c,null,i.default.createElement(o.Button,{className:"primary",onClick:this.handleOnClickGoToOverview},i.default.createElement("div",null,"\u524d\u5f80\u767b\u5f55"))),i.default.createElement("footer",{className:"description"},i.default.createElement("span",null,i.default.createElement("b",{style:{marginRight:4}},"\u203b"),"\u70b9\u51fb\u767b\u5f55\u5373\u8868\u793a\u60a8\u5df2\u540c\u610f",i.default.createElement("a",{href:"https://acghelper.com/licence.html",target:"_blank",rel:"noreferrer"},"\u300a\u4f7f\u7528\u6761\u6b3e\u300b"),"\u548c",i.default.createElement("a",{href:"https://acghelper.com/privacy.html",target:"_blank",rel:"noreferrer"},"\u300a\u9690\u79c1\u534f\u8bae\u300b"))))}}t.NeedLoginMask=d,d.contextType=s.MainStore},66849:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Page=void 0;n(a(57689));const i=n(a(635)),l=i.default.section`
  //max-width: 700px;
  min-width: 500px;
  section {
    .radio-button-wrapper {
      margin-bottom: 8px;
      width: fit-content;
    }
    .link {
      margin: 0 2px;
      padding: 0 2px;
      color: var(--bilibili-blue);
    }
  }
`;t.Page=l},37759:function(e,t,a){var n=this&&this.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Section=void 0;const l=a(53507),o=i(a(57689)),s=i(a(635)),r=a(555),c=a(28507),d=a(6500),u=(0,r.isFireFox)(),h=s.default.section`
  position: relative;
  display: flex;
  margin-left: 16px;
  margin-bottom: 16px;

  .header {
    display: flex;
    margin: 0 0 12px 0;
    padding: 0 0 6px;
    border-bottom: 1px solid #eee;

    &:empty {
      padding: 0;
      border-bottom: none;
    }

    &.no-border {
      margin-bottom: 0;
      border-bottom: none;
    }

    p {
      margin: 0;
    }

    .title {
      flex-grow: 1;
      font-size: 16px;
    }

    .description {
      font-size: 12px;
      color: var(--paper-grey-500);
    }

    .toolbar {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      margin-left: auto;
      margin-right: 4px;
      .button {
        margin-right: -4px;
      }
    }
  }

  & > .content {
    flex-shrink: 0;
    position: relative;
    width: 650px;

    & > .body {
      position: relative;
      display: grid;
      transition: filter .3s;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #fff;
        opacity: 0;
        cursor: not-allowed;
        visibility: hidden;
        z-index: -1;
        transition: visibility 0s .3s, z-index 0s .3s, opacity .3s;
      }

      & > .list-item {
        margin-left: 16px;
        border-top: none;
      }
    }
  }

  & > .content > .body.toggle-off {
    filter: grayscale(1);
    pointer-events: none;
    user-select: none;

    &::after {
      opacity: 0.5;
      visibility: visible;
      transition: visibility 0s, z-index 0s, opacity .3s;
      z-index: 1;
    }
  }
`,p=s.default.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -8px;
  padding: 0 20px;
  width: calc(100% - 24px);
  height: calc(100% + 10px);
  border-radius: 3px;
  background-color: rgb(244 244 244 / 70%);
  z-index: 1;

  .button {
    color: var(--bilibili-gray);

    .button-view {
      padding: 0 32px;
      background-color: var(--bilibili-blue);
    }
  }
`;class g extends o.default.Component{constructor(e){super(e)}renderButton(){const{hasLogin:e,isVIP:t,needVIP:a}=this.props;if("boolean"===typeof e){if(!e){const e=u?this.context.handleOnClickShowFirefoxModal:this.context.handleOnClickShowLoginModal;return o.default.createElement(p,null,o.default.createElement(l.Button,{onClick:e},a?"\u4f1a\u5458\u529f\u80fd\uff0c":"","\u70b9\u51fb\u767b\u5f55\u540e\u4f7f\u7528"))}if("boolean"===typeof t&&a&&!t)return u?o.default.createElement(p,null,o.default.createElement(l.Button,null,"\u706b\u72d0\u6d4f\u89c8\u5668\u6682\u4e0d\u63d0\u4f9b\u4ed8\u8d39\u529f\u80fd")):o.default.createElement(p,null,o.default.createElement(l.Button,{onClick:this.context.handleOnClickShowPaymentModal},"\u70b9\u51fb\u5f00\u901a\u52a9\u624b\u4f1a\u5458\u540e\u4f7f\u7528"))}return null}render(){const e=this.props,{active:t,title:a,description:i,children:l,toolbar:s,rows:r,columns:c,helperArea:u,hasLogin:p,isVIP:g,needVIP:m}=e,f=n(e,["active","title","description","children","toolbar","rows","columns","helperArea","hasLogin","isVIP","needVIP"]);return o.default.createElement(h,Object.assign({},f),o.default.createElement("div",{className:"content"},o.default.createElement("div",{className:["header",l?null:"no-border"].filter(Boolean).join(" ")},a||i?o.default.createElement("div",{className:"title"},a?o.default.createElement("p",{className:"title"},a):null,i?o.default.createElement("p",{className:"description"},i):null):null,s?o.default.createElement("div",{className:"toolbar"},s):null),l&&o.default.createElement("div",{className:["body",void 0===t||t?null:"toggle-off"].join(" "),style:{gridTemplateRows:r?`repeat(${r}, 1fr)`:"auto",gridTemplateColumns:`repeat(${c}, 1fr)`}},l),this.renderButton()),u?o.default.createElement(d.HelperArea,{className:"helper-area",style:{marginTop:(i?10:0)+"px"}},u):null)}}t.Section=g,g.contextType=c.MainStore,g.defaultProps={rows:0,columns:1,needVIP:!1}},70689:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Title=void 0;const i=n(a(57689)),l=n(a(635)),o=l.default.h2`
  margin: 0 0 12px;

  .title {
    margin: 0;
    font-size: 24px;
    font-weight: normal;
    color: #333;
  }

  p {
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 12px;
    font-weight: normal;
    color: #333;
  }
`;class s extends i.default.Component{constructor(e){super(e)}render(){const{title:e,description:t}=this.props;return i.default.createElement(o,null,e?i.default.createElement("div",{className:"title"},e):null,t?i.default.createElement("p",null,t):null)}}t.Title=s},59891:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Topic=void 0;const i=n(a(57689)),l=n(a(635)),o=l.default.div`
  margin-bottom: 32px;

  & > .header {
    position: sticky;
    top: 0;
    display: flex;
    margin-bottom: 16px;
    padding: 0 0 0 8px;
    width: 666px;
    //border-bottom: 1px solid #bbb;
    border-radius: 3px;
    background-color: #f3f3f3;
    z-index: 2;

    .title {
      font-size: 16px;

      h2 {
        margin: 0;
        padding: 4px 0 4px;
        font-size: 16px;
        color: #333;
      }

      p {
        margin-top: 4px;
        margin-bottom: 4px;
        font-size: 12px;
        font-weight: normal;
        color: #333;
      }
    }

    .toolbar {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      margin-left: auto;
      margin-right: 12px;
      padding: 4px 0;
    }
  }

  .content {
    &::after {
      transition: visibility 0s, z-index 0s, opacity .3s;
    }

    &.toggle-off {
      filter: grayscale(1);
      pointer-events: none;
      user-select: none;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #fff;
        opacity: 0.5;
        visibility: visible;
        z-index: 1;
        cursor: not-allowed;
      }
    }
  }

`;class s extends i.default.Component{constructor(e){super(e)}render(){const{active:e,toolbar:t}=this.props;return i.default.createElement(o,null,i.default.createElement("div",{className:"header"},i.default.createElement("div",{className:"title"},i.default.createElement("h2",null,this.props.title),this.props.description?i.default.createElement("p",null,this.props.description):null),i.default.createElement("div",{className:"toolbar"},t)),i.default.createElement("div",{className:["content",void 0===e||e?null:"toggle-off"].join(" ")},this.props.children))}}t.Topic=s},53671:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var i=Object.getOwnPropertyDescriptor(t,a);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,i)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),i=this&&this.__exportStar||function(e,t){for(var a in e)"default"===a||Object.prototype.hasOwnProperty.call(t,a)||n(t,e,a)};Object.defineProperty(t,"__esModule",{value:!0}),i(a(70689),t),i(a(59891),t),i(a(37759),t),i(a(66849),t),i(a(6500),t)},80263:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(51920),l=a(1693),o=n(a(57689)),s=a(47532),r=n(a(635)),c=a(28507),d=a(53671),u=a(32699),h=r.default.div`
  .input-section {
    .body {
      .rename-wrapper, .aria2c-wrapper {
        display: flex;
        margin-bottom: 12px;

        label {
          margin-right: 12px;
          display: inline-block;
          flex-shrink: 0;
          width: fit-content;
          line-height: 32px;
          font-size: 14px;
        }

        .rename-input, .aria3c-input {
          flex-grow: 1;
          padding: 6px 10px;
        }

        .button {
          margin-left: 8px;
          flex-shrink: 0;
        }
      }
    }
  }
`;class p extends o.default.Component{constructor(e){super(e),this.state={renameOn:!1,videoFilename:"",newVideoFilename:"",videoCoverFilename:"",newVideoCoverFilename:"",videoScreenshotFilename:"",newVideoScreenshotFilename:"",videoDanmuFilename:"",newVideoDanmuFilename:"",audioFilename:"",newAudioFilename:"",subtitleFilename:"",newSubtitleFilename:"",liveScreenshotFilename:"",newLiveScreenshotFilename:"",aria2cOn:!1,aria2cProtocol:"http",aria2cHost:"localhost",newAria2cHost:"localhost",aria2cPort:6800,newAria2cPort:6800,aria2cPath:"jsonrpc",newAria2cPath:"jsonrpc",aria2cSecret:"",newAria2cSecret:""},this.handleOnChangeRenameInput=(e,t)=>{this.setState({[`new${(0,u.upperFirst)(e)}Filename`]:t.target.value})},this.handleOnClickChangeRenameButton=e=>{const{bhAccount:t}=this.context;if(!t||!t.isVIP)return this.context.handleOnClickShowPaymentModal();const a=this.state[`new${(0,u.upperFirst)(e)}Filename`];chrome.runtime.sendMessage({target:"renameDownloadFile",event:"setSetting",[e+"Filename"]:a},()=>{this.context.uploadSettings("renameDownloadFile"),this.setState({[e+"Filename"]:a})})},this.handleOnClickRenameOn=()=>{chrome.runtime.sendMessage({target:"renameDownloadFile",event:"setSetting",on:!this.state.renameOn},()=>{this.context.uploadSettings("renameDownloadFile"),this.setState({renameOn:!this.state.renameOn})})},this.handleOnChangeAria2cInput=(e,t)=>{this.setState({["newAria2c"+(0,u.upperFirst)(e)]:t.target.value})},this.handleOnClickChangeAria2cButton=e=>{const{bhAccount:t}=this.context;if(!t||!t.isVIP)return this.context.handleOnClickShowPaymentModal();const a=this.state["newAria2c"+(0,u.upperFirst)(e)];chrome.runtime.sendMessage({target:"aria2c",event:"setSetting",[e]:a},()=>{this.context.uploadSettings("aria2c"),this.setState({["aria2c"+(0,u.upperFirst)(e)]:a})})},this.handleOnSelectProtocol=e=>{chrome.runtime.sendMessage({target:"aria2c",event:"setSetting",protocol:e},()=>{this.context.uploadSettings("aria2c"),this.setState({["aria2cProtocol"]:e},()=>{})})},this.handleOnClickAria2cOn=()=>{const{bhAccount:e,hasLogin:t}=this.context;if(!t||!e||!e.isVIP)return this.context.handleOnClickShowPaymentModal();chrome.runtime.sendMessage({target:"aria2c",event:"setSetting",on:!this.state.aria2cOn},()=>{this.context.uploadSettings("aria2c"),this.setState({aria2cOn:!this.state.aria2cOn})})}}componentDidMount(){chrome.runtime.sendMessage({target:"renameDownloadFile",event:"getSetting"},e=>{this.setState({renameOn:e.on,videoFilename:e.videoFilename,newVideoFilename:e.videoFilename,videoCoverFilename:e.videoCoverFilename,newVideoCoverFilename:e.videoCoverFilename,videoScreenshotFilename:e.videoScreenshotFilename,newVideoScreenshotFilename:e.videoScreenshotFilename,videoDanmuFilename:e.videoDanmuFilename,newVideoDanmuFilename:e.videoDanmuFilename,subtitleFilename:e.subtitleFilename,newSubtitleFilename:e.subtitleFilename,audioFilename:e.audioFilename,newAudioFilename:e.audioFilename,liveScreenshotFilename:e.liveScreenshotFilename,newLiveScreenshotFilename:e.liveScreenshotFilename})}),chrome.runtime.sendMessage({target:"aria2c",event:"getSetting"},e=>{this.setState({aria2cOn:e.on,aria2cProtocol:e.protocol,aria2cHost:e.host,newAria2cHost:e.host,aria2cPort:e.port,newAria2cPort:e.port,aria2cPath:e.path,newAria2cPath:e.path,aria2cSecret:e.secret,newAria2cSecret:e.secret})})}render(){const{renameOn:e,videoFilename:t,newVideoFilename:a,videoCoverFilename:n,newVideoCoverFilename:s,videoScreenshotFilename:r,newVideoScreenshotFilename:c,videoDanmuFilename:u,newVideoDanmuFilename:p,subtitleFilename:g,newSubtitleFilename:m,audioFilename:f,newAudioFilename:b,liveScreenshotFilename:v,newLiveScreenshotFilename:C,aria2cOn:S,aria2cProtocol:E,aria2cHost:y,newAria2cHost:M,aria2cPort:w,newAria2cPort:x,aria2cPath:k,newAria2cPath:O,aria2cSecret:A,newAria2cSecret:_}=this.state,{hasLogin:P,bhAccount:I}=this.context,L=!!I&&I.isVIP;return o.default.createElement(h,null,o.default.createElement(d.Title,{title:"\u4e0b\u8f7d\u8bbe\u7f6e"}),o.default.createElement(d.Topic,{title:o.default.createElement(o.default.Fragment,null,o.default.createElement(i.Icon,{icon:"cat-paw",size:16}),"\u81ea\u5b9a\u4e49\u4e0b\u8f7d\u6587\u4ef6\u540d"),active:e},o.default.createElement(d.Section,{className:"input-section",hasLogin:P,isVIP:L,needVIP:!0,helperArea:o.default.createElement(o.default.Fragment,null,"\u53ef\u4f7f\u7528\u5173\u952e\u8bcd\uff1a",o.default.createElement("br",null),"\u89c6\u9891/\u76f4\u64ad\u95f4\u6807\u9898\uff1a ",o.default.createElement("b",null,"__TITLE__"),o.default.createElement("br",null),"\u89c6\u9891\u9009\u96c6\u6807\u9898\uff1a",o.default.createElement("b",null,"__SUBTITLE__"),o.default.createElement("br",null),"\u89c6\u9891\u524d\u7f6e\u6807\u9898\uff1a",o.default.createElement("b",null,"__PRE_TITLE__"),"\uff08\u5982\uff1aP2\uff0c\u7b2c\u51e0\u96c6\uff09",o.default.createElement("br",null),"\u89c6\u9891\u9009\u96c6\u5e8f\u53f7\uff1a",o.default.createElement("b",null,"__PN__"),o.default.createElement("br",null),"\u89c6\u9891aid\uff1a ",o.default.createElement("b",null,"__AID__"),o.default.createElement("br",null),"\u89c6\u9891cid\uff1a ",o.default.createElement("b",null,"__CID__"),o.default.createElement("br",null),"\u89c6\u9891bvid\uff1a ",o.default.createElement("b",null,"__BVID__"),o.default.createElement("br",null),"\u89c6\u9891\u53d1\u5e03\u65f6\u95f4\uff1a ",o.default.createElement("b",null,"__TIME__"),o.default.createElement("br",null),"\u89c6\u9891\u53d1\u5e03\u65e5\u671f\uff1a ",o.default.createElement("b",null,"__DATE__"),o.default.createElement("br",null),"\u89c6\u9891\u753b\u8d28\u4ee3\u53f7\uff1a ",o.default.createElement("b",null,"__QUALITY__"),o.default.createElement("br",null),"\u89c6\u9891\u4e0a\u4f20\u8005\u6635\u79f0\uff1a ",o.default.createElement("b",null,"__UPPER__"),o.default.createElement("br",null),"\u89c6\u9891\u4e0a\u4f20\u8005UID\uff1a ",o.default.createElement("b",null,"__UID__"),o.default.createElement("br",null),"\u5b57\u5e55\u8bed\u8a00\uff1a ",o.default.createElement("b",null,"__LANG__"),o.default.createElement("br",null),o.default.createElement("br",null),"\u76f4\u64ad\u95f4ID\uff1a ",o.default.createElement("b",null,"__ROOM_ID__"),o.default.createElement("br",null),o.default.createElement("br",null),"\u5f53\u524d\u65e5\u671f\uff1a ",o.default.createElement("b",null,"__NOW_DATE__"),o.default.createElement("br",null),"\u5f53\u524d\u65f6\u95f4\uff1a ",o.default.createElement("b",null,"__NOW_TIME__"),o.default.createElement("br",null),o.default.createElement("br",null),"\u6269\u5c55\u540d\uff1a ",o.default.createElement("b",null,"__FORMAT__"),o.default.createElement("br",null),o.default.createElement("br",null),"\u9ed8\u8ba4\u4e3a\uff1a__TITLE__.__CID__.__FORMAT__",o.default.createElement("br",null),"\u6ce8\u610f\uff1a\u5173\u952e\u8bcd\u5fc5\u987b\u4e3a\u5927\u5199\u548c\u4e0b\u5212\u7ebf\u7ec4\u6210\u7684\u5b8c\u6574\u9884\u8bbe\u540d\u79f0",o.default.createElement("br",null),o.default.createElement("br",null),"\u547d\u540d\u4e2d\u53ef\u4f7f\u7528\u5173\u952e\u8bcd\u81ea\u7531\u7ec4\u5408\uff0c\u5982\uff1a",o.default.createElement("br",null),"video-__AID__.__TITLE__-\u5c0f\u5f20\u7684\u89c6\u9891.__FORMAT__",o.default.createElement("br",null),o.default.createElement("br",null),"\u4e0a\u8ff0\u4f8b\u5b50\u4f1a\u5f97\u5230\u5982\u300c",o.default.createElement("b",null,"video-123456.\u793a\u4f8b\u6807\u9898-\u5c0f\u5f20\u7684\u89c6\u9891.flv"),"\u300d\u8fd9\u6837\u7684\u547d\u540d",o.default.createElement("br",null),"\u5176\u4e2d __AID__ \u2192 123456\uff0c__TITLE__ \u2192 \u793a\u4f8b\u6807\u9898\uff0c__FORMAT__ \u2192 flv")},o.default.createElement("div",{className:"rename-wrapper"},o.default.createElement("label",{htmlFor:"videoRenameInput"},"\u89c6\u9891\u6587\u4ef6"),o.default.createElement(i.Input,{id:"videoRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("video",e),value:a}),o.default.createElement(i.Button,{className:a!==t?"primary":"border",disabled:a===t,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("video")},"\u786e\u8ba4\u4fee\u6539")),o.default.createElement("div",{className:"rename-wrapper"},o.default.createElement("label",{htmlFor:"videoCoverRenameInput"},"\u89c6\u9891\u5c01\u9762"),o.default.createElement(i.Input,{id:"videoCoverRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("videoCover",e),value:s}),o.default.createElement(i.Button,{className:s!==n?"primary":"border",disabled:s===n,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("videoCover")},"\u786e\u8ba4\u4fee\u6539")),o.default.createElement("div",{className:"rename-wrapper"},o.default.createElement("label",{htmlFor:"videoScreenshotRenameInput"},"\u89c6\u9891\u622a\u56fe"),o.default.createElement(i.Input,{id:"videoScreenshotRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("videoScreenshot",e),value:c}),o.default.createElement(i.Button,{className:c!==r?"primary":"border",disabled:c===r,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("videoScreenshot")},"\u786e\u8ba4\u4fee\u6539")),o.default.createElement("div",{className:"rename-wrapper"},o.default.createElement("label",{htmlFor:"videoDanmuRenameInput"},"\u5f39\u5e55\u6587\u4ef6"),o.default.createElement(i.Input,{id:"videoDanmuRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("videoDanmu",e),value:p}),o.default.createElement(i.Button,{className:p!==u?"primary":"border",disabled:p===u,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("videoDanmu")},"\u786e\u8ba4\u4fee\u6539")),o.default.createElement("div",{className:"rename-wrapper"},o.default.createElement("label",{htmlFor:"videoSubtitleRenameInput"},"\u5b57\u5e55\u6587\u4ef6"),o.default.createElement(i.Input,{id:"videoSubtitleRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("subtitle",e),value:m}),o.default.createElement(i.Button,{className:m!==g?"primary":"border",disabled:m===g,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("subtitle")},"\u786e\u8ba4\u4fee\u6539")),o.default.createElement("div",{className:"rename-wrapper"},o.default.createElement("label",{htmlFor:"audioRenameInput"},"\u97f3\u9891\u6587\u4ef6"),o.default.createElement(i.Input,{id:"audioRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("audio",e),value:b}),o.default.createElement(i.Button,{className:b!==f?"primary":"border",disabled:b===f,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("audio")},"\u786e\u8ba4\u4fee\u6539")),o.default.createElement("div",{className:"rename-wrapper"},o.default.createElement("label",{htmlFor:"audioRenameInput"},"\u76f4\u64ad\u622a\u5c4f"),o.default.createElement(i.Input,{id:"audioRenameInput",className:"rename-input",onChange:e=>this.handleOnChangeRenameInput("liveScreenshot",e),value:C}),o.default.createElement(i.Button,{className:C!==v?"primary":"border",disabled:C===v,disableEvent:!0,onClick:()=>this.handleOnClickChangeRenameButton("liveScreenshot")},"\u786e\u8ba4\u4fee\u6539")))),o.default.createElement(d.Topic,{title:o.default.createElement(o.default.Fragment,null,o.default.createElement(i.Icon,{icon:"cat-paw",size:16}),"Aria2c RPC\u8fde\u63a5\u8bbe\u7f6e"),toolbar:o.default.createElement(l.CheckBoxButton,{onClick:()=>this.handleOnClickAria2cOn(!(!L||!P)&&S),on:!(!L||!P)&&S}),active:!(!L||!P)&&S},o.default.createElement(d.Section,{title:"\u534f\u8bae"},o.default.createElement(l.RadioButtonGroup,{value:E||"http",data:["http","https","ws","wss"].map(e=>({key:e,title:e})),onClick:this.handleOnSelectProtocol})),o.default.createElement(d.Section,{className:"input-section"},o.default.createElement("div",{className:"aria2c-wrapper"},o.default.createElement("label",{htmlFor:"hostInput"},"RPC Host"),o.default.createElement(i.Input,{id:"hostInput",className:"aria3c-input",onChange:e=>this.handleOnChangeAria2cInput("host",e),value:M}),o.default.createElement(i.Button,{className:M!==y?"primary":"border",disabled:M===y,disableEvent:!0,onClick:()=>this.handleOnClickChangeAria2cButton("host")},"\u786e\u8ba4\u4fee\u6539")),o.default.createElement("div",{className:"aria2c-wrapper"},o.default.createElement("label",{htmlFor:"portInput"},"RPC \u7aef\u53e3"),o.default.createElement(i.Input,{id:"portInput",className:"aria3c-input",onChange:e=>this.handleOnChangeAria2cInput("port",e),value:x}),o.default.createElement(i.Button,{className:x!==w?"primary":"border",disabled:x===w,disableEvent:!0,onClick:()=>this.handleOnClickChangeAria2cButton("port")},"\u786e\u8ba4\u4fee\u6539")),o.default.createElement("div",{className:"aria2c-wrapper"},o.default.createElement("label",{htmlFor:"pathInput"},"RPC \u7aef\u53e3"),o.default.createElement(i.Input,{id:"pathInput",className:"aria3c-input",onChange:e=>this.handleOnChangeAria2cInput("path",e),value:O}),o.default.createElement(i.Button,{className:O!==k?"primary":"border",disabled:O===k,disableEvent:!0,onClick:()=>this.handleOnClickChangeAria2cButton("path")},"\u786e\u8ba4\u4fee\u6539")),o.default.createElement("div",{className:"aria2c-wrapper"},o.default.createElement("label",{htmlFor:"secretInput"},"RPC \u79d8\u94a5"),o.default.createElement(i.Input,{id:"secretInput",className:"aria3c-input",onChange:e=>this.handleOnChangeAria2cInput("secret",e),value:_}),o.default.createElement(i.Button,{className:_!==A?"primary":"border",disabled:_===A,disableEvent:!0,onClick:()=>this.handleOnClickChangeAria2cButton("secret")},"\u786e\u8ba4\u4fee\u6539")))))}}p.contextType=c.MainStore,t["default"]=(0,s.withRouter)(p)},99415:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(53507),l=n(a(57689)),o=a(47532),s=n(a(635)),r=a(53671),c=a(28507),d=s.default.div`

`;class u extends l.default.Component{constructor(e){super(e),this.state={autoTakeVipPrivilege:!1,autoTakeVipPrivilegePushNotification:!1,quickSearch:!1,darkMode:!1,darkModeFollowSystem:!0,sniffer:!0,networkRecheck:!1},this.handleOnToggleNetworkRecheck=()=>{chrome.runtime.sendMessage({target:"networkController",event:"setSetting",recheck:!this.state.networkRecheck},()=>{this.context.uploadSettings("networkController"),this.setState({networkRecheck:!this.state.networkRecheck})})},this.handleOnToggleAutoTakeVipPrivilege=()=>{chrome.runtime.sendMessage({target:"autoTakeVipPrivilege",event:"setSetting",on:!this.state.autoTakeVipPrivilege},()=>{this.context.uploadSettings("autoTakeVipPrivilege"),this.setState({autoTakeVipPrivilege:!this.state.autoTakeVipPrivilege})})},this.handleOnToggleAutoTakeVipPrivilegeNotification=()=>{chrome.runtime.sendMessage({target:"autoTakeVipPrivilege",event:"setSetting",pushNotification:!this.state.pushAutoTakeVipPrivilegeNotification},()=>{this.context.uploadSettings("autoTakeVipPrivilege"),this.setState({pushAutoTakeVipPrivilegeNotification:!this.state.pushAutoTakeVipPrivilegeNotification})})},this.handleOnToggleQuickSearch=()=>{chrome.runtime.sendMessage({target:"quickSearch",event:"setSetting",on:!this.state.quickSearch},()=>{this.context.uploadSettings("quickSearch"),this.setState({quickSearch:!this.state.quickSearch})})},this.handleOnToggleDarkMode=()=>{chrome.runtime.sendMessage({target:"darkMode",event:"setSetting",on:!this.state.darkMode},()=>{this.context.uploadSettings("darkMode"),this.setState({darkMode:!this.state.darkMode})})},this.handleOnToggleSniffer=()=>{chrome.runtime.sendMessage({target:"sniffer",event:"setSetting",on:!this.state.sniffer},()=>{this.context.uploadSettings("sniffer"),this.setState({sniffer:!this.state.sniffer})})},this.handleOnToggleDarkModeFollowSystem=()=>{chrome.runtime.sendMessage({target:"darkMode",event:"setSetting",followSystem:!this.state.darkModeFollowSystem},()=>{this.context.uploadSettings("darkMode"),this.setState({darkModeFollowSystem:!this.state.darkModeFollowSystem})})}}componentDidMount(){chrome.runtime.sendMessage({target:"autoTakeVipPrivilege",event:"getSetting"},e=>{this.setState({autoTakeVipPrivilege:e.on,pushAutoTakeVipPrivilegeNotification:e.pushNotification})}),chrome.runtime.sendMessage({target:"quickSearch",event:"getSetting"},e=>{this.setState({quickSearch:e.on})}),chrome.runtime.sendMessage({target:"darkMode",event:"getSetting"},e=>{e&&this.setState({darkMode:e.on,darkModeFollowSystem:e.followSystem})}),chrome.runtime.sendMessage({target:"sniffer",event:"getSetting"},e=>{e&&this.setState({sniffer:e.on})}),chrome.runtime.sendMessage({target:"networkController",event:"getSetting"},e=>{e||this.setState({networkRecheck:Boolean(null===e||void 0===e?void 0:e.recheck)})})}render(){const{hasLogin:e,bilibiliAccount:t}=this.context;return l.default.createElement(d,null,l.default.createElement(r.Title,{title:"\u5168\u5c40\u529f\u80fd"}),l.default.createElement(r.Section,{title:"\u81ea\u52a8\u9886\u53d6\u5927\u4f1a\u5458\u798f\u5229",hasLogin:e,toolbar:l.default.createElement(i.CheckBoxButton,{disable:!t,onClick:this.handleOnToggleAutoTakeVipPrivilege,on:this.state.autoTakeVipPrivilege}),active:this.state.autoTakeVipPrivilege&&!!t&&e,helperArea:"\u8be5\u529f\u80fd\u6bcf\u5929\u90fd\u4f1a\u5e2e\u4f60\u68c0\u67e5\uff0c\u6bcf\u4e2a\u6708\u9886\u53d6\u4e00\u6b21"},l.default.createElement(i.ListItem,{title:"\u63a8\u9001\u901a\u77e5",onClick:this.handleOnToggleAutoTakeVipPrivilegeNotification,operation:l.default.createElement(i.CheckBoxButton,{on:this.state.pushAutoTakeVipPrivilegeNotification})})),l.default.createElement(r.Section,{title:"\u6df1\u8272\u6a21\u5f0f",toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnToggleDarkMode,on:this.state.darkMode}),active:this.state.darkMode,helperArea:"\u76ee\u524d\u505a\u4e86\u9996\u9875\uff0c\u52a8\u6001\uff0c\u4e13\u680f\uff0c\u641c\u7d22\uff0c\u6d88\u606f\u4e2d\u5fc3\uff0c\u4e2a\u4eba\u4e3b\u9875\uff0c\u7a0d\u540e\u518d\u770b\uff0c\u5386\u53f2\u8bb0\u5f55\u76f4\u64ad\u89c2\u770b"},l.default.createElement(i.ListItem,{title:"\u8ddf\u968f\u7cfb\u7edf",onClick:this.handleOnToggleDarkModeFollowSystem,operation:l.default.createElement(i.CheckBoxButton,{on:this.state.darkModeFollowSystem})})),l.default.createElement(r.Section,{title:"\u9f20\u6807\u53f3\u952e\u5feb\u901f\u641c\u7d22",toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnToggleQuickSearch,on:this.state.quickSearch}),active:this.state.quickSearch,helperArea:l.default.createElement(l.default.Fragment,null,"\u5982\u679c\u9009\u62e9\u7684\u662f",l.default.createElement("b",null,"avid"),"\u6216",l.default.createElement("b",null,"bvid"),"\uff0c\u5219\u4f1a\u76f4\u63a5\u6253\u5f00\u76f8\u5e94\u89c6\u9891\u64ad\u653e\u9875\u9762")}),l.default.createElement(r.Section,{title:"\u8d44\u6e90\u7ba1\u7406\u5668",toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnToggleSniffer,on:this.state.sniffer}),active:this.state.sniffer,helperArea:"\u8be5\u529f\u80fd\u5f00\u53d1\u5468\u671f\u8f83\u957f\uff0c\u4f1a\u9010\u6b65\u5206\u9636\u6bb5\u5b8c\u5584\u529f\u80fd\uff0c\u656c\u8bf7\u671f\u5f85"}))}}u.contextType=c.MainStore,t["default"]=(0,o.withRouter)(u)},70873:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Main=void 0;const i=a(53507),l=a(555),o=n(a(57689)),s=n(a(635)),r=a(47532),c=(a(23746),a(83938)),d=n(a(94345)),u=n(a(86013)),h=n(a(38130)),p=n(a(3419)),g=n(a(35453)),m=n(a(96676)),f=n(a(80263)),b=n(a(19673)),v=n(a(99415)),C=n(a(84816)),S=n(a(62801)),E=a(28507),y=n(a(56058)),M=((0,l.isFireFox)(),[{key:"overview",component:u.default,path:"/"},{key:"popup",component:m.default,path:"/popup"},{key:"video",component:h.default,path:"/video"},{key:"live",component:p.default,path:"/live"},{key:"specialAttention",component:g.default,path:"/specialAttention"},{key:"download",component:f.default,path:"/download"},{key:"notification",component:b.default,path:"/notification"},{key:"article",component:d.default,path:"/article"},{key:"global",component:v.default,path:"/global"},{key:"order",component:C.default,path:"/order"},{key:"other",component:S.default,path:"/other"}]),w=s.default.div`
  position: fixed;
  top: 75px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  //min-height: calc(100% - 75px);
  overflow: auto;
`,x=s.default.aside`
  position: fixed;
  top: 75px;
  bottom: 0;
  //background-color: var(--paper-grey-100);
  backdrop-filter: blur(10px);
  background-color: rgb(245 245 245 / 0.8);
  pointer-events: none;
  z-index: 999;

  ul {
    //position: sticky;
    //top: 0;
    margin: 0;
    padding: 12px 0;
    min-width: 240px;
    font-size: 14px;
    overflow: auto;
    pointer-events: initial;
  }

  li {
    margin: 0 12px 2px 12px;
    padding: 8px 24px 8px 12px;
    list-style: none;
    //border-bottom: 1px solid #eee;
    border-radius: 0;
    cursor: pointer;
    user-select: none;

    &:last-of-type {
      //  border-bottom: none;
      margin-bottom: 0;
    }

    &:hover {
      background-color: var(--paper-grey-200);
    }

    &:active, &.active {
      background-color: var(--paper-grey-300);
    }
  }
`,k=s.default.main`
  flex-grow: 1;
  margin-left: 240px;
  padding: 12px 12px 12px 24px;
  width: fit-content;
  height: fit-content;
`,O=s.default.div`
  .login-modal {
    margin: 0;

    .modal-body {
      display: flex;
      flex-direction: column;
      align-items: center;

      &:first-child {
        margin-top: 20px;
      }

      .captcha-wrapper, .email-wrapper {
        display: flex;
        align-items: center;
        margin-top: 4px;
        margin-bottom: 4px;

        .input {
          padding: 4px 12px;
          width: 100%;
          height: 32px;
          box-sizing: border-box;
        }

        .captcha-input {
          flex-grow: 1;
        }

        .button {
          flex-shrink: 0;
          margin: 0 0 0 4px;
          width: auto;
          height: 32px;

          button {
            line-height: 32px;
          }
        }
      }

      .button {
        margin: 12px 0;
        width: 100%;
        height: 40px;
        line-height: 40px;

        button {
          line-height: 38px;
          font-size: 14px;
        }
      }

      .step-wrapper {
        width: 100%;
        max-height: 0;
        opacity: 0;
        transition: max-height 0.15s, opacity .3s;
        overflow: hidden;

        &.active {
          max-height: 500px;
          opacity: 1;
          transition: max-height 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95), opacity .3s;
        }

        &.step0 {
          .button {
            display: block;
          }
        }
      }

      .avatar {
        width: 14px;
        height: 14px;
        vertical-align: sub;
        border-radius: 50px;
        margin: 0px 4px 0;
        border: 1px solid #fff;
      }

      .welcome-topic {
        line-height: 20px;
        text-align: left;
        width: 100%;
        font-size: 14px;

        .important {
          color: var(--bilibili-pink);
          font-weight: normal;
        }
      }

      .password-box {
        width: 100%;
      }

      .confirm-password-box {
        width: 100%;
      }

      .password-input {
        margin: 0 0 4px;
        padding: 4px 12px;
        width: 100%;
        height: 32px;
        box-sizing: border-box;
        //text-align: center;
      }

      .login-btn {
        margin: 0;
      }

      .extra-box {
        display: flex;
        justify-content: space-between;

        .forget-password-btn {
          margin-left: auto;
          cursor: pointer;

          &:hover {
            color: var(--bilibili-blue);
            text-decoration: underline;
          }
        }

        .description {
          margin: 0;
          color: var(--bilibili-pink);
        }
      }

      .show-password-box {
        margin-bottom: 12px;
        width: fit-content;
        user-select: none;
        cursor: pointer;

        .checkbox-rect {
          display: inline-block;
          vertical-align: text-bottom;
        }
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .button {
        margin-left: 12px;
      }

      .description {
        font-size: 12px;
        color: var(--bilibili-pink);

        a {
          color: var(--bilibili-blue);
          cursor: pointer;
        }
      }
    }
  }

  .sign-out-modal {
    p {
      font-size: 14px;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .button {
        margin-left: 12px;
      }
    }
  }

  .bind-email-modal {
    .input {
      padding: 4px 12px;
      width: 100%;
      height: 32px;
      box-sizing: border-box;
    }

    .captcha-wrapper {
      display: flex;
      align-items: center;
      margin-top: 4px;

      .captcha-input {
        flex-grow: 1;
      }

      .button {
        flex-shrink: 0;
        margin-left: 4px;
      }
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;

      .button {
        margin-left: 12px;
      }

      .description {
        font-size: 12px;
        color: var(--bilibili-pink);

        a {
          color: var(--bilibili-blue);
          cursor: pointer;
        }
      }
    }
  }

  .change-password-modal {
    .modal-body {
      display: flex;
      flex-direction: column;

      .input {
        margin-bottom: 8px;
        padding: 4px 12px;
        width: 100%;
        height: 32px;
        box-sizing: border-box;
      }

      .no-email-prompt {
        margin: -4px 0 8px;
        color: var(--bilibili-pink);

        a {
          color: var(--bilibili-blue);
        }
      }

      .extra-box {
        display: flex;
        justify-content: space-between;

        .forget-password-btn {
          margin-left: auto;
          cursor: pointer;

          &:hover {
            color: var(--bilibili-blue);
            text-decoration: underline;
          }
        }

        .description {
          margin: 0;
          color: var(--bilibili-pink);
        }
      }

      .show-password-box {
        margin-bottom: 12px;
        width: fit-content;
        user-select: none;
        cursor: pointer;

        .checkbox-rect {
          display: inline-block;
          vertical-align: text-bottom;
        }
      }

      .captcha-wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        .input {
          margin: 0;
        }

        .captcha-input {
          flex-grow: 1;
        }

        .button {
          flex-shrink: 0;
          margin-left: 8px;
        }
      }
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;

      .button {
        margin-left: 12px;
      }
    }
  }

  .public-beta-announcement {
    .modal-body {
      font-size: 14px;
    }

    .hide-announcement-btn {
      .button-view {
        padding: 0 20px;
      }
    }
  }

  .reset-password-modal {
    p {
      margin: 12px 0;
      white-space: break-spaces;
      line-height: 20px;

      a {
        margin: 0 4px;
        color: var(--bilibili-blue);
      }
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;

      .button {
        margin-left: 12px;
      }
    }
  }

  .payment-iframe-modal {
    width: 1000px;
    max-width: max-content;
    box-sizing: border-box;
    overflow: hidden;

    .modal-body {
      padding: 0;
      width: 1000px;
      max-height: 800px;
      box-sizing: border-box;
    }

    .close-payment-modal-btn {
      position: absolute;
      top: 16px;
      right: 16px;
      color: var(--bilibili-gray);
      cursor: pointer;
    }

    iframe {
      display: block;
      width: 100%;
      height: 800px;
      max-height: 800px;
      border: none;
    }
  }

  .firefox-announcement-modal, .edge-announcement-modal {
    .modal-body {
      p {
        white-space: break-spaces;
        font-size: 14px;
      }
    }
  }

  @media screen and (max-height: 800px) {
    .payment-iframe-modal {
      .modal-body {
        max-height: 700px;
      }

      iframe {
        max-height: 700px;
        height: 700px;
      }
    }
  }
`,A=s.default.div`
  a {
    margin: 0 4px;
    color: var(--bilibili-blue);
  }
`,_=(y.default.get("hideAnnouncement"),y.default.get("hideChangeNameAnnouncement")||!1),P=y.default.get("hideEdgeModal")||!1,I=y.default.get("hidePayment")||!1,L=y.default.get("autoSync2Cloud");t.Main=(0,r.withRouter)(class extends o.default.Component{constructor(e){super(e),this.passwordInputRef=o.default.createRef(),this.confirmPasswordInputRef=o.default.createRef(),this.signUpEmailInputRef=o.default.createRef(),this.signUpEmailCaptchaInputRef=o.default.createRef(),this.bindEmailInputRef=o.default.createRef(),this.bindEmailCaptchaInputRef=o.default.createRef(),this.changePasswordEmailInputRef=o.default.createRef(),this.changePasswordCaptchaInputRef=o.default.createRef(),this.passwordForChangeInputRef=o.default.createRef(),this.confirmPasswordForChangeInputRef=o.default.createRef(),this.autoSync2Cloud=void 0===L||L,this.state={states:null,step:0,openPaymentModalAfterAction:!1,openChangePasswordModalAfterAction:!1,paymentIframeKey:0,emailForSignUp:"",captchaForSignUp:"",getSignUpCaptchaCooling:!1,signUpCaptchaCountDown:60,password:"",confirmPassword:"",showPassword:!1,passwordForChange:"",confirmPasswordForChange:"",emailForChangePassword:"",captchaForChangePassword:"",getChangePasswordCaptchaCooling:!1,changePasswordCaptchaCountDown:60,emailForBind:"",bindEmailCaptcha:"",email:"",getBindEmailCaptchaCooling:!1,bindEmailCaptchaCountDown:60,isResettingPassword:!1,logging:!1,loggingOut:!1,resettingPassword:!1,bhName:null,bhid:null,blidList:[],identities:[],hasLogin:!1,hasRegister:!1,bilibiliAccount:null,bhAccount:null,downloadSettings:!1,needFillPassword:!1,needRefreshPage:!1,hasLocalBilibiliAccountLogin:!1,hasLocalBilibiliHelperAccountLogin:!1,hasLocalBilibiliHelperAccountRegister:!1,loginModalShow:!1,resetModalShow:!1,signOutModalShow:!1,announcementModalShow:!_,showBindEmailModal:!1,showChangePasswordModal:!1,showPaymentModal:!I,showFirefoxModal:!1,showEdgeModal:!P,uploadSettings:e=>new Promise(t=>{if(!this.state.hasLogin||!this.autoSync2Cloud)return t(!1);chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"uploadSettings",featureName:e},e=>{t(e)})}),resetPassword:()=>{const{bilibiliAccount:e,password:t}=this.state;return e&&e.hasLogin&&e.uid?(this.setState({resettingPassword:!0}),new Promise(a=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"resetPassword",uid:e.uid,password:t},e=>{a(e)})})):Promise.resolve(!1)},handleOnClickLogin:()=>(this.setState({logging:!0}),new Promise(e=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"login",password:this.state.password,uid:this.state.bilibiliAccount.uid},t=>{if(setTimeout(()=>{this.setState({logging:!1})},1e3),t&&!0===t.hasLogin){const{hasLogin:a,bilibiliAccount:n,bhAccount:l}=t;i.Message.info("\u767b\u5f55\u6210\u529f"),this.setState({hasLogin:a,bhAccount:l,bilibiliAccount:n}),e(!0)}else"WRONG_PASSWORD"===(null===t||void 0===t?void 0:t.type)?(i.Message.error(o.default.createElement(o.default.Fragment,null,"\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u6ce8\u610f\u533a\u5206 \u52a9\u624b\u8d26\u53f7 \u4e0e B\u7ad9\u8d26\u53f7")),e(!1)):(null===t||void 0===t?void 0:t.message)?(i.Message.error(o.default.createElement(o.default.Fragment,null,t.message)),e(!1)):(i.Message.error(o.default.createElement(o.default.Fragment,null,t.message,"\uff0c\u4e00\u76f4\u5931\u8d25\u7684\u8bdd\u5c31",o.default.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u79c1\u4fe1\u52a9\u624b\u732b"),"\u5427")),e(!1))})})),handleOnClickRegister:()=>{this.handleOnClickValidateCaptchaForSignUp()},handleOnLoginOtherBilibiliAccount:()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://passport.bilibili.com/login?from=bilibili-helper"},()=>{this.setState({needRefreshPage:!0})})},handleOnClickSignOut:()=>(this.setState({loggingOut:!0}),new Promise(e=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"signOut"},t=>{this.setState({loggingOut:!1}),t?(i.Message.info("\u767b\u51fa\u6210\u529f"),this.setState({hasLogin:!1}),e(!0)):(i.Message.info("\u767b\u51fa\u5931\u8d25"),e(!1))})})),handleOnClickRefresh:()=>{history.go()},handleOnClickShowLoginModal:()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"login"}),this.setState({loginModalShow:!0,password:"",confirmPassword:"",logging:!1,showPassword:!1,showFirefoxModal:!1,showEdgeModal:!1})},handleOnClickHideLoginModal:()=>{this.setState({loginModalShow:!1,logging:!1},()=>{setTimeout(()=>{this.setState({step:0,password:"",confirmPassword:"",hasRegister:!1})},300)})},handleOnClickShowPaymentModal:()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"payment"}),this.refreshPaymentIframe(),this.setState({showPaymentModal:!0,openPaymentModalAfterAction:!1})},handleOnClickHidePaymentModal:()=>{this.setState({showPaymentModal:!1,openPaymentModalAfterAction:!1,loginModalShow:!1}),y.default.set("hidePayment",!0)},handleOnClickShowSignOutModal:()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"sign_out"}),this.setState({signOutModalShow:!0,loggingOut:!1})},handleOnClickHideSignOutModal:()=>{this.setState({signOutModalShow:!1,loggingOut:!1})},handleOnClickShowAnnouncementModal:()=>{this.setState({announcementModalShow:!0})},handleOnClickHideAnnouncementModal:()=>{this.setState({announcementModalShow:!1}),y.default.set("hideChangeNameAnnouncement",!0)},handleOnClickShowBindEmailModal:()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"bind_email"}),this.setState({showBindEmailModal:!0},()=>{this.bindEmailInputRef.current.focus()})},handleOnClickHideBindEmailModal:()=>{this.setState({showBindEmailModal:!1})},handleOnClickShowChangePasswordModal:()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_show_modal",label:"change_password"}),this.setState({showChangePasswordModal:!0})},handleOnClickHideChangePasswordModal:()=>{this.setState({showChangePasswordModal:!1})},handleOnClickChangePassword:()=>{this.state.bhAccount?this.state.bhAccount.email?this.state.handleOnClickShowChangePasswordModal():(this.setState({openChangePasswordModalAfterAction:!0}),this.state.handleOnClickShowBindEmailModal()):i.Message.info("\u8bf7\u5148\u767b\u5f55\u52a9\u624b\u8d26\u53f7")},sendPaymentMessage:()=>{this.state.states&&this.state.states.paymentIframe?this.state.handleOnClickShowPaymentModal():i.Message.info(o.default.createElement(A,null,"\u7cfb\u7edf\u72b6\u6001\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\u6216",o.default.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u79c1\u4fe1\u52a9\u624b\u732b")))},sendPublicBetaMessage:()=>{},openPage:e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})},openPrivacy:()=>{this.openPage("https://github.com/bilibili-helper/bilibili-helper-o/blob/master/ADDON_PRIVACY.md")},handleOnClickShowFirefoxModal:()=>{this.setState({showFirefoxModal:!0})},handleOnClickHideFirefoxModal:()=>{this.setState({showFirefoxModal:!1}),this.state.handleOnClickShowLoginModal()},handleOnClickShowEdgeModal:()=>{this.setState({showEdgeModal:!0})},handleOnClickHideEdgeModal:()=>{this.setState({showEdgeModal:!1}),y.default.set("hideEdgeModal",!0)}},this.urlParamHasUsedForShowPaymentModal=!1,this.handleOnClickNavigation=e=>{const{history:t,location:a}=this.props;a.pathname!==e&&t.push(e)},this.handleOnClickLogin=()=>{const{password:e}=this.state;!e||e.length<6?i.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5bc6\u7801\uff0c\u957f\u5ea6\u81f3\u5c116\u4f4d"):this.state.handleOnClickLogin().then(e=>{e&&(this.state.openPaymentModalAfterAction&&this.state.handleOnClickShowPaymentModal(),this.setState({loginModalShow:!1}))})},this.handleOnClickRegister=()=>{this.state.handleOnClickRegister()},this.handleOnClickReset=()=>{const{password:e,confirmPassword:t}=this.state;!e||e.length<6?i.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5bc6\u7801\uff0c\u957f\u5ea6\u81f3\u5c116\u4f4d"):e!==t?i.Message.info("\u8f93\u5165\u7684\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4"):this.state.resetPassword().then(e=>{"NO_ACCESS_TO_RESET_PASSWORD"===e?i.Message.error(o.default.createElement(A,null,"\u65e0\u6cd5\u91cd\u7f6e\u5bc6\u7801\uff0c\u8bf7\u4f7f\u7528\u6ce8\u518c\u65f6\u4f7f\u7528\u7684b\u7ad9\u8d26\u53f7",o.default.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u79c1\u4fe1\u52a9\u624b\u732b"),"\u4ee5\u83b7\u5f97\u91cd\u7f6e\u6743\u9650"),0):e?(this.state.handleOnClickShowLoginModal(),this.setState({resettingPassword:!1,isResettingPassword:!1,password:""},()=>{i.Message.info("\u5bc6\u7801\u91cd\u7f6e\u6210\u529f\uff0c\u8bf7\u524d\u5f80\u767b\u5f55"),this.passwordInputRef.current.focus()})):i.Message.info(o.default.createElement(A,null,"\u5bc6\u7801\u91cd\u7f6e\u5931\u8d25\uff0c\u8bf7",o.default.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u79c1\u4fe1\u52a9\u624b\u732b")))})},this.handleOnClickSignOut=()=>{this.state.handleOnClickSignOut().then(e=>{e&&this.state.handleOnClickHideSignOutModal()})},this.handleOnChangeSignUpEmail=e=>{this.setState({emailForSignUp:e.target.value.replace(/\s/g,"").slice(0,128)})},this.handleOnKeyDownEmailForSignUp=e=>{e.persist(),"Enter"===e.key&&(this.handleOnClickGetCaptchaForSignUp(),this.signUpEmailCaptchaInputRef.current.focus())},this.handleOnChangeSignUpCaptcha=e=>{let t=e.target.value.replace(/\s/g,"").replace(/[^\d]/g,"");this.setState({captchaForSignUp:t.slice(0,6)})},this.handleOnChangeBindEmail=e=>{this.setState({emailForBind:e.target.value.replace(/\s/g,"").slice(0,128)})},this.handleOnChangeBindEmailCaptcha=e=>{let t=e.target.value.replace(/\s/g,"").replace(/[^\d]/g,"");this.setState({bindEmailCaptcha:t.slice(0,6)})},this.handleOnChangePasswordChangeCaptcha=e=>{let t=e.target.value.replace(/\s/g,"").replace(/[^\d]/g,"");this.setState({captchaForChangePassword:t.slice(0,6)})},this.handleOnChangeChangePasswordEmail=e=>{this.setState({emailForChangePassword:e.target.value.replace(/\s/g,"").slice(0,128)})},this.handleOnChangePasswordForChange=e=>{this.setState({passwordForChange:e.target.value.replace(/\s/g,"").slice(0,64)})},this.handleOnChangeConfirmPasswordForChange=e=>{this.setState({confirmPasswordForChange:e.target.value.replace(/\s/g,"").slice(0,64)})},this.handleOnChangePassword=e=>{this.setState({password:e.target.value.replace(/\s/g,"").slice(0,64)})},this.handleOnChangeConfirmPassword=e=>{this.setState({confirmPassword:e.target.value.replace(/\s/g,"").slice(0,64)})},this.handleOnKeyDownBindEmailInput=e=>{e.persist(),"Enter"===e.key&&(this.bindEmailCaptchaInputRef.current.focus(),this.handleOnClickGetCaptchaForBindEmail())},this.handleOnKeyDownBindEmailCaptchaInput=e=>{e.persist(),"Enter"===e.key&&this.handleOnClickValidateCaptchaForBindEmail()},this.handleOnClickGetCaptchaForSignUp=()=>(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_get_captcha",label:"sign_up"}),this.state.bilibiliAccount&&this.state.bilibiliAccount.uid?this.state.getChangePasswordCaptchaCooling?i.Message.info("\u9a8c\u8bc1\u7801\u83b7\u53d6\u51b7\u5374\u4e2d\uff0c\u8bf7\u7a0d\u540e"):this.state.emailForSignUp&&(0,l.isValidEmail)(this.state.emailForSignUp)?void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"sendCaptchaForSignUp",blid:this.state.bilibiliAccount.uid,email:this.state.emailForSignUp},e=>{"\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f"===e&&this.setState({getSignUpCaptchaCooling:!0,signUpCaptchaCountDown:60},()=>{const e=setInterval(()=>{this.state.signUpCaptchaCountDown>1?this.setState({signUpCaptchaCountDown:this.state.signUpCaptchaCountDown-1}):(clearInterval(e),this.setState({getSignUpCaptchaCooling:!1,signUpCaptchaCountDown:0}))},1e3)}),i.Message.info(e)}):i.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740"):i.Message.info("\u8bf7\u5728B\u7ad9\u767b\u5f55\u5e76\u91cd\u542f\u52a9\u624b\u540e\u518d\u8bd5")),this.handleOnClickValidateCaptchaForSignUp=()=>{if(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_validate_captcha",label:"sign_up"}),!this.state.bilibiliAccount||!this.state.bilibiliAccount.uid)return i.Message.info("\u8bf7\u5148\u767b\u5f55B\u7ad9\u8d26\u53f7\uff0c\u7136\u540e\u91cd\u542f\u52a9\u624b\u540e\u518d\u8bd5");if(!this.state.emailForSignUp||!(0,l.isValidEmail)(this.state.emailForSignUp))return i.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740");if(!this.state.captchaForSignUp)return i.Message.info("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801");if(6!==String(this.state.captchaForSignUp).length||isNaN(this.state.captchaForSignUp))return i.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u9a8c\u8bc1\u7801");const{password:e,confirmPassword:t}=this.state;return!e||e.length<6?i.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5bc6\u7801\uff0c\u957f\u5ea6\u81f3\u5c116\u4f4d"):t!==t?i.Message.info("\u8f93\u5165\u7684\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4"):(this.setState({logging:!0}),void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"validateCaptchaForSignUp",email:this.state.emailForSignUp,blid:this.state.bilibiliAccount.uid,captcha:this.state.captchaForSignUp,password:e},e=>{this.setState({logging:!1}),"\u6ce8\u518c\u6210\u529f"===e&&(chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"initBHAccount"},e=>{const{hasLogin:t,bhAccount:a}=e;this.setState({hasLogin:t,bhAccount:a})}),this.setState({loginModalShow:!1,showChangePasswordModal:!1,showPassword:!1,passwordForChange:"",confirmPasswordForChange:"",emailForChangePassword:"",captchaForSignUp:""})),i.Message.info(e)}))},this.handleOnClickGetCaptchaForResetPassword=()=>(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_get_captcha",label:"reset_password"}),this.state.bilibiliAccount&&this.state.bilibiliAccount.uid?this.state.getChangePasswordCaptchaCooling?i.Message.info("\u9a8c\u8bc1\u7801\u83b7\u53d6\u51b7\u5374\u4e2d\uff0c\u8bf7\u7a0d\u5019"):this.state.emailForChangePassword&&(0,l.isValidEmail)(this.state.emailForChangePassword)?void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"sendCaptchaForResetPassword",blid:this.state.bilibiliAccount.uid,email:this.state.emailForChangePassword},e=>{"\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f"===e&&this.setState({getChangePasswordCaptchaCooling:!0,changePasswordCaptchaCountDown:60},()=>{const e=setInterval(()=>{this.state.changePasswordCaptchaCountDown>1?this.setState({changePasswordCaptchaCountDown:this.state.changePasswordCaptchaCountDown-1}):(clearInterval(e),this.setState({getChangePasswordCaptchaCooling:!1,changePasswordCaptchaCountDown:0}))},1e3)}),i.Message.info(e)}):i.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740"):i.Message.info("\u8bf7\u5728B\u7ad9\u767b\u5f55\u5e76\u91cd\u542f\u52a9\u624b\u540e\u518d\u8bd5")),this.handleOnClickValidateCaptchaForResetPassword=()=>{if(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_validate_captcha",label:"reset_password"}),!this.state.bilibiliAccount||!this.state.bilibiliAccount.uid)return i.Message.info("\u8bf7\u5728B\u7ad9\u767b\u5f55\u5e76\u91cd\u542f\u52a9\u624b\u540e\u518d\u8bd5");if(!this.state.emailForChangePassword||!(0,l.isValidEmail)(this.state.emailForChangePassword))return i.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740");if(!this.state.captchaForChangePassword)return i.Message.info("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801");if(6!==String(this.state.captchaForChangePassword).length||isNaN(this.state.captchaForChangePassword))return i.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u9a8c\u8bc1\u7801");const{passwordForChange:e,confirmPasswordForChange:t}=this.state;return!e||e.length<6?i.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5bc6\u7801\uff0c\u957f\u5ea6\u81f3\u5c116\u4f4d"):e!==t?i.Message.info("\u8f93\u5165\u7684\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4"):void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"validateCaptchaForResetPassword",blid:this.state.bilibiliAccount.uid,captcha:this.state.captchaForChangePassword,password:this.state.passwordForChange},e=>{"\u4fee\u6539\u6210\u529f"===e&&this.setState({showChangePasswordModal:!1,showPassword:!1,passwordForChange:"",confirmPasswordForChange:"",emailForChangePassword:"",captchaForChangePassword:""}),i.Message.info(e)})},this.handleOnClickGetCaptchaForChangePassword=()=>(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_get_captcha",label:"change_password"}),this.state.getChangePasswordCaptchaCooling?i.Message.info("\u9a8c\u8bc1\u7801\u83b7\u53d6\u51b7\u5374\u4e2d\uff0c\u8bf7\u7a0d\u5019"):this.state.emailForChangePassword&&(0,l.isValidEmail)(this.state.emailForChangePassword)?void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"sendCaptchaForChangePassword",email:this.state.emailForChangePassword},e=>{"\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f"===e&&this.setState({getChangePasswordCaptchaCooling:!0,changePasswordCaptchaCountDown:60},()=>{const e=setInterval(()=>{this.state.changePasswordCaptchaCountDown>1?this.setState({changePasswordCaptchaCountDown:this.state.changePasswordCaptchaCountDown-1}):(clearInterval(e),this.setState({getChangePasswordCaptchaCooling:!1,changePasswordCaptchaCountDown:0}))},1e3)}),i.Message.info(e)}):i.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740")),this.handleOnClickValidateCaptchaForChangePassword=()=>{if(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_validate_captcha",label:"change_password"}),!this.state.emailForChangePassword||!(0,l.isValidEmail)(this.state.emailForChangePassword))return i.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740");if(!this.state.captchaForChangePassword)return i.Message.info("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801");if(6!==String(this.state.captchaForChangePassword).length||isNaN(this.state.captchaForChangePassword))return i.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u9a8c\u8bc1\u7801");const{passwordForChange:e,confirmPasswordForChange:t}=this.state;return!e||e.length<6?i.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5bc6\u7801\uff0c\u957f\u5ea6\u81f3\u5c116\u4f4d"):e!==t?i.Message.info("\u8f93\u5165\u7684\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4"):void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"validateCaptchaForChangePassword",captcha:this.state.captchaForChangePassword,password:this.state.passwordForChange},e=>{"\u4fee\u6539\u6210\u529f"===e&&this.setState({showChangePasswordModal:!1,showPassword:!1,passwordForChange:"",confirmPasswordForChange:"",emailForChangePassword:"",captchaForChangePassword:""}),i.Message.info(e)})},this.handleOnClickGetCaptchaForBindEmail=()=>(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_get_captcha",label:"bind_email"}),this.state.getBindEmailCaptchaCooling?(this.bindEmailCaptchaInputRef.current.focus(),i.Message.info("\u9a8c\u8bc1\u7801\u83b7\u53d6\u51b7\u5374\u4e2d\uff0c\u8bf7\u7a0d\u5019")):this.state.emailForBind&&(0,l.isValidEmail)(this.state.emailForBind)?void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"sendCaptchaForBindEmail",email:this.state.emailForBind},e=>{"\u53d1\u9001\u9a8c\u8bc1\u7801\u6210\u529f"===e&&this.setState({getBindEmailCaptchaCooling:!0,bindEmailCaptchaCountDown:60},()=>{const e=setInterval(()=>{this.state.bindEmailCaptchaCountDown>1?this.setState({bindEmailCaptchaCountDown:this.state.bindEmailCaptchaCountDown-1}):(clearInterval(e),this.setState({getBindEmailCaptchaCooling:!1,bindEmailCaptchaCountDown:0}))},1e3)}),i.Message.info(e)}):i.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740")),this.handleOnClickValidateCaptchaForBindEmail=()=>(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_validate_captcha",label:"bind_email"}),this.state.emailForBind&&(0,l.isValidEmail)(this.state.emailForBind)?this.state.bindEmailCaptcha?6!==String(this.state.bindEmailCaptcha).length||isNaN(this.state.bindEmailCaptcha)?i.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u9a8c\u8bc1\u7801"):void chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"validateCaptchaForEmailBind",captcha:this.state.bindEmailCaptcha},e=>{if("\u7ed1\u5b9a\u6210\u529f"===e){const{bhAccount:e}=this.state;e.email=this.state.emailForBind.split("@").map((e,t)=>0===t?(e=e.slice(0,3)+e.slice(4).replace(/./g,"*"),e):e).join("@"),this.state.openPaymentModalAfterAction&&this.state.handleOnClickShowPaymentModal(),this.setState({openChangePasswordModalAfterAction:!1,showBindEmailModal:!1,bhAccount:e,email:this.state.emailForBind}),this.state.openChangePasswordModalAfterAction&&this.state.handleOnClickShowChangePasswordModal()}i.Message.info(e)}):i.Message.info("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"):i.Message.info("\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u90ae\u7bb1\u5730\u5740")),this.handleOnKeyDownPasswordInput=e=>{e.persist(),"Enter"===e.key&&(this.state.hasRegister?this.handleOnClickLogin():this.confirmPasswordInputRef.current.focus())},this.handleOnKeyDownSignUpCaptchaInput=e=>{e.persist(),"Enter"===e.key&&this.passwordInputRef.current.focus()},this.handleOnKeyDownEmailForChangePasswordInput=e=>{e.persist(),"Enter"===e.key&&(this.handleOnClickGetCaptchaForChangePassword(),this.changePasswordCaptchaInputRef.current.focus())},this.handleOnKeyDownChangePasswordCaptchaInput=e=>{e.persist(),"Enter"===e.key&&this.passwordForChangeInputRef.current.focus()},this.handleOnKeyDownConfirmPasswordInput=e=>{const{isResettingPassword:t}=this.state;"Enter"===e.key&&(t?this.handleOnClickReset():this.handleOnClickLogin())},this.handleOnKeyDownPasswordForChangeInput=e=>{e.persist(),"Enter"===e.key&&this.confirmPasswordForChangeInputRef.current.focus()},this.handleOnKeyDownConfirmPasswordForChangeInput=e=>{"Enter"===e.key&&this.handleOnClickValidateCaptchaForChangePassword()},this.handleOnClickShowPassword=()=>{this.setState({showPassword:!this.state.showPassword})},this.onLoadPaymentPage=function(e){e.persist()},this.refreshPaymentIframe=()=>{this.setState({paymentIframeKey:this.state.paymentIframeKey+1})},this.handleOnGotoReport=()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://message.bilibili.com/#/whisper/mid1344117169"})},this.renderLoginUI=()=>{const{step:e,password:t,showPassword:a,logging:n,hasLogin:l,bilibiliAccount:s,handleOnClickShowChangePasswordModal:r}=this.state;return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:["step-wrapper","step0",0===e?"active":""].join(" ")},o.default.createElement(i.Button,{disabled:l,className:"primary",onClick:()=>{this.passwordInputRef.current.focus(),this.setState({step:1,hasRegister:!0})}},"\u4ee5",o.default.createElement(i.Image,{url:s.face,className:"avatar"}),"\u767b\u5f55",o.default.createElement(i.Icon,{size:16,icon:"acghelper"}),"\u8d26\u53f7")),o.default.createElement("div",{className:["step-wrapper","step1",1===e?"active":""].join(" ")},o.default.createElement("div",{className:"welcome-topic"},"\u6b63\u5728\u4ee5 ",o.default.createElement("b",null,s.name)," \u8eab\u4efd\u767b\u5f55(\u0e51\u2022\u0300\u3142\u2022\u0301)\u0648\u2727",o.default.createElement("br",null),o.default.createElement("b",{className:"important"},"\u6b63\u5728\u767b\u5f55\u52a9\u624b\u8d26\u53f7\uff0c\u8bf7\u52ff\u4f7f\u7528b\u7ad9\u8d26\u53f7\u5bc6\u7801")),o.default.createElement("div",{className:"password-box"},o.default.createElement(i.Input,{ref:this.passwordInputRef,name:"password",type:a?"text":"password",className:["password-input",1===e?"active":"",e>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801\u8fdb\u884c\u767b\u5f55",onChange:this.handleOnChangePassword,onKeyDown:this.handleOnKeyDownPasswordInput,value:t}),o.default.createElement("div",{className:"extra-box"},o.default.createElement("div",{className:"show-password-box",onClick:this.handleOnClickShowPassword},o.default.createElement(i.CheckboxRect,{active:a})," \u663e\u793a\u5bc6\u7801"),o.default.createElement("p",{className:"description"}))),o.default.createElement(i.Button,{disableEvent:!1,disabled:!t||t.length<6||n,className:["login-btn","primary",1===e?"active":""].join(" "),onClick:this.handleOnClickLogin},"\u767b\u5f55"),o.default.createElement("div",{className:"extra-box"},o.default.createElement("a",{className:"forget-password-btn",onClick:r},"\u5fd8\u8bb0\u5bc6\u7801"))))},this.renderRegisterUI=()=>{const{step:e,password:t,confirmPassword:a,showPassword:n,logging:l,resettingPassword:s,emailForSignUp:r,hasLogin:c,hasRegister:d,bilibiliAccount:u}=this.state;return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:["step-wrapper","step0",0===e?"active":""].join(" ")},o.default.createElement(i.Button,{disabled:c,className:"primary",onClick:()=>{this.passwordInputRef.current.focus(),this.setState({step:1,hasRegister:!0})}},"\u4ee5",o.default.createElement(i.Image,{url:u.face,className:"avatar"}),"\u767b\u5f55",o.default.createElement(i.Icon,{size:16,icon:"acghelper"}),"\u8d26\u53f7"),o.default.createElement(i.Button,{disabled:d,className:"primary",onClick:()=>{this.signUpEmailInputRef.current.focus(),this.setState({step:1,hasRegister:!1})}},"\u4ee5",o.default.createElement(i.Image,{url:u.face,className:"avatar"}),"\u6ce8\u518c",o.default.createElement(i.Icon,{size:16,icon:"acghelper"}),"\u8d26\u53f7")),o.default.createElement("div",{className:["step-wrapper","step1",1===e?"active":""].join(" ")},o.default.createElement("div",{className:"welcome-topic"},"\u6b63\u5728\u4ee5 ",o.default.createElement("b",null,u.name)," \u8eab\u4efd\u6ce8\u518c\u52a9\u624b\u8d26\u53f7"),o.default.createElement("div",{className:"email-wrapper"},o.default.createElement(i.Input,{ref:this.signUpEmailInputRef,name:"emailForSignup",type:"email",className:["email-input","input"].join(" "),placeholder:"\u8bf7\u8f93\u5165\u60f3\u8981\u7ed1\u5b9a\u7684\u90ae\u7bb1",onChange:this.handleOnChangeSignUpEmail,onKeyDown:this.handleOnKeyDownEmailForSignUp,value:r,minlength:6})),o.default.createElement("div",{className:"captcha-wrapper"},o.default.createElement(i.Input,{ref:this.signUpEmailCaptchaInputRef,name:"signUpEmailCaptcha",type:"text",className:["sign-up-email-captcha-input",1===e?"active":"",e>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onChange:this.handleOnChangeSignUpCaptcha,onKeyDown:this.handleOnKeyDownSignUpCaptchaInput,value:this.state.captchaForSignUp,size:6}),o.default.createElement(i.Button,{className:"primary",onClick:this.handleOnClickGetCaptchaForSignUp,disabled:!this.state.emailForSignUp||this.state.getSignUpCaptchaCooling,disableEvent:!1},this.state.getSignUpCaptchaCooling?`\u8bf7\u7b49\u5f85${this.state.signUpCaptchaCountDown}\u79d2`:"\u83b7\u53d6\u9a8c\u8bc1\u7801")),o.default.createElement("div",{className:"password-box"},o.default.createElement(i.Input,{ref:this.passwordInputRef,type:n?"text":"password",className:["password-input",1===e?"active":"",e>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff0c\u957f\u5ea6\u4e0d\u5c0f\u4e8e6\u4f4d",onChange:this.handleOnChangePassword,onKeyDown:this.handleOnKeyDownPasswordInput,value:t})),o.default.createElement("div",{className:"confirm-password-box"},o.default.createElement(i.Input,{ref:this.confirmPasswordInputRef,type:n?"text":"password",className:["password-input",1===e?"active":"",e>1?"entered":""].join(" "),placeholder:"\u8bf7\u91cd\u590d\u8f93\u5165\u4e00\u904d\u5bc6\u7801",onChange:this.handleOnChangeConfirmPassword,onKeyDown:this.handleOnKeyDownConfirmPasswordInput,value:a}),o.default.createElement("div",{className:"extra-box"},o.default.createElement("div",{className:"show-password-box",onClick:this.handleOnClickShowPassword},o.default.createElement(i.CheckboxRect,{active:n})," \u663e\u793a\u5bc6\u7801"),o.default.createElement("p",{className:"description"},"\u8bf7\u52ff\u4f7f\u7528b\u7ad9\u8d26\u53f7\u5bc6\u7801"))),o.default.createElement(i.Button,{disableEvent:!1,disabled:!t||t.length<6||!a||a.length<6||l||s,className:["login-btn","primary",1===e?"active":""].join(" "),onClick:this.handleOnClickRegister},"\u6ce8\u518c")))},this.renderTitle=()=>{const{step:e,hasRegister:t}=this.state;let a="\u767b\u5f55";return t||(a="\u6ce8\u518c\u52a9\u624b\u8d26\u53f7"),0===e&&(a="\u8bf7\u9009\u62e9\u767b\u5f55\u65b9\u5f0f"),a}}componentDidMount(){chrome.runtime.onMessage.addListener((e,t,a)=>{const{action:n}=e;return"openLoginModal"===n?(i.Message.info("\u8bf7\u5148\u767b\u5f55\u518d\u8fdb\u884c\u540e\u7eed\u64cd\u4f5c\u54e6"),this.setState({showPaymentModal:!1,openPaymentModalAfterAction:!0},this.state.handleOnClickShowLoginModal)):"openBindEmailModal"===n?(i.Message.info("\u60a8\u8fd8\u6ca1\u6709\u7ed1\u5b9a\u90ae\u7bb1\uff0c\u8bf7\u5148\u7ed1\u5b9a\u90ae\u7bb1\u518d\u8fdb\u884c\u540e\u7eed\u64cd\u4f5c\u54e6"),this.setState({showPaymentModal:!1,openPaymentModalAfterAction:!0},this.state.handleOnClickShowBindEmailModal)):"payComplete"===n?(i.Message.info("\u6536\u5230\u6765\u81ea\u652f\u4ed8\u9875\u7684\u8ba2\u5355\u786e\u8ba4\u8bf7\u6c42\uff0c\u6b63\u5728\u786e\u8ba4\u8bf7\u7a0d\u5019"),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"queryTradeNoComplete",outTradeNo:e.outTradeNo},e=>{if(e&&"10000"===e.code){i.Message.info("\u8ba2\u5355\u786e\u8ba4\u5b8c\u6210\uff0c\u6b63\u5728\u66f4\u65b0\u7528\u6237\u6570\u636e\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85"),this.state.handleOnClickHidePaymentModal(),i.Message.info("\u7528\u6237\u6570\u636e\u66f4\u65b0\u5b8c\u6210\uff0c\u611f\u8c22\u60e0\u987e~");const{hasLogin:t,bhAccount:a}=e;this.setState({hasLogin:t,bhAccount:a})}else i.Message.error(`\u8ba2\u5355\u5f02\u5e38 (${e.code}): ${e.sub_msg}\uff0c\u8bf7\u8054\u7cfb\u5ba2\u670d`)})):"useRedeem"===n&&chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"useRedeem",code:e.code},e=>{if("\u5151\u6362\u6210\u529f"===e.message){i.Message.info("\u5151\u6362\u7801\u6fc0\u6d3b\u6210\u529f\uff0c\u6b63\u5728\u66f4\u65b0\u7528\u6237\u6570\u636e\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85"),this.state.handleOnClickHidePaymentModal(),i.Message.info("\u7528\u6237\u6570\u636e\u66f4\u65b0\u5b8c\u6210\uff0c\u611f\u8c22\u60e0\u987e~");const{hasLogin:t,bhAccount:a}=e;this.setState({hasLogin:t,bhAccount:a})}else i.Message.error("\u5151\u6362\u7801\u6fc0\u6d3b\u5931\u8d25: "+e)}),!0}),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},e=>{const{hasLogin:t,bilibiliAccount:a,downloadingSettings:n,hasRegister:i}=e;this.setState({hasLogin:t,bilibiliAccount:a,downloadingSettings:n,hasRegister:i})}),chrome.runtime.sendMessage({target:"states",event:"getStates"},e=>{e&&this.setState({states:e})}),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getBHAccount"},e=>{e&&this.setState({bhAccount:e})}),location.href.match(/[?&]?showPaymentModal=1&?/)&&!this.urlParamHasUsedForShowPaymentModal&&(this.urlParamHasUsedForShowPaymentModal=!0,this.state.handleOnClickShowPaymentModal())}render(){const{location:e}=this.props,{states:t,step:a,password:n,confirmPassword:l,showPassword:s,logging:d,paymentIframeKey:u,emailForChangePassword:h,email:p,emailForBind:g,bindEmailCaptcha:m,getBindEmailCaptchaCooling:f,bindEmailCaptchaCountDown:b,hasLogin:v,hasRegister:C,bilibiliAccount:S,needRefreshPage:y,showPaymentModal:A,showFirefoxModal:_,showEdgeModal:P,loginModalShow:I,resetModalShow:L,signOutModalShow:B,announcementModalShow:D,showChangePasswordModal:T,handleOnClickHideChangePasswordModal:N,showBindEmailModal:R,handleOnClickHideBindEmailModal:F,handleOnClickHideSignOutModal:V,handleOnClickHideAnnouncementModal:U}=this.state;return o.default.createElement(E.MainStore.Provider,{value:this.state},o.default.createElement(w,null,o.default.createElement(x,null,o.default.createElement("ul",null,M.map(({key:t,path:a})=>o.default.createElement("li",{key:a,className:e.pathname===a?"active":null,onClick:()=>this.handleOnClickNavigation(a)},(0,c.__)("config_main_navigation_"+t))))),o.default.createElement(k,null,o.default.createElement(r.Switch,{location:e},M.map(({key:e,path:t,component:a})=>o.default.createElement(r.Route,{key:e,path:t,exact:!0,render:()=>o.default.createElement(a,null)}))))),o.default.createElement(O,null,o.default.createElement(i.Modal,{open:I,className:"login-modal",title:this.renderTitle(),buttons:o.default.createElement("div",{className:"footer"},o.default.createElement("p",{className:"description"},o.default.createElement("span",null,o.default.createElement("b",{style:{marginRight:4}},"\u203b"),"\u70b9\u51fb\u767b\u5f55\u5373\u8868\u793a\u60a8\u5df2\u540c\u610f",o.default.createElement("a",{href:"https://acghelper.com/licence.html",target:"_blank",rel:"noreferrer"},"\u300a\u4f7f\u7528\u6761\u6b3e\u300b"),"\u548c",o.default.createElement("a",{href:"https://acghelper.com/privacy.html",target:"_blank",rel:"noreferrer"},"\u300a\u9690\u79c1\u534f\u8bae\u300b"))),o.default.createElement(i.Button,{onClick:this.state.handleOnClickHideLoginModal},"\u53d6\u6d88"))},S?C?this.renderLoginUI():this.renderRegisterUI():y?o.default.createElement(i.Button,{onClick:this.state.handleOnClickRefresh},"\u8bf7\u767b\u5f55",o.default.createElement(i.Icon,{size:16,icon:"bilibili"}),"\u8d26\u53f7\u540e\u5237\u65b0\u672c\u9875\u9762"):C?o.default.createElement(i.Button,{className:"primary",onClick:this.state.handleOnLoginOtherBilibiliAccount},o.default.createElement("div",null,"\u8bf7\u5148\u767b\u5f55",o.default.createElement(i.Icon,{size:16,icon:"bilibili"}),"\u8d26\u53f7\u518d\u767b\u5f55\u52a9\u624b\u8d26\u53f7")):o.default.createElement(i.Button,{className:"primary",onClick:this.state.handleOnLoginOtherBilibiliAccount},o.default.createElement("div",null,"\u8bf7\u5148\u767b\u5f55",o.default.createElement(i.Icon,{size:16,icon:"bilibili"}),"\u8d26\u53f7\u518d\u6ce8\u518c\u52a9\u624b\u8d26\u53f7"))),o.default.createElement(i.Modal,{open:B,className:"sign-out-modal",onClickMask:V,title:"\u8981\u5173\u95ed\u540c\u6b65\u548c\u4e2a\u6027\u5316\u529f\u80fd\u5417\uff1f",buttons:o.default.createElement("div",{className:"footer"},o.default.createElement(i.Button,{className:"border",onClick:V},"\u53d6\u6d88"),o.default.createElement(i.Button,{className:"primary",onClick:this.handleOnClickSignOut},"\u9000\u51fa"))},o.default.createElement("p",null,"\u6267\u884c\u6b64\u64cd\u4f5c\u4f1a\u4f7f\u60a8\u9000\u51fa ",o.default.createElement(i.Icon,{icon:"acghelper",size:16})," \u5e10\u53f7\u3002"),o.default.createElement("p",null,"\u60a8\u7684\u7279\u522b\u5173\u6ce8\u4ee5\u53ca\u5176\u4ed6\u8bbe\u7f6e\u5c06\u4e0d\u518d\u4fdd\u6301\u540c\u6b65\u3002")),o.default.createElement(i.Modal,{open:D,className:"public-beta-announcement",onClickMask:U,title:"\u54d4\u54e9\u54d4\u54e9\u52a9\u624b\u66f4\u540d\u516c\u544a",buttons:o.default.createElement("div",{className:"footer"},o.default.createElement(i.Button,{className:"primary hide-announcement-btn",onClick:U},"\u77e5\u9053\u5566~"))},o.default.createElement("p",null,"\u54d4\u54e9\u54d4\u54e9\u52a9\u624b\u81ea\u4ece\u7acb\u9879\u4ee5\u6765\u5df2\u7ecf\u8d70\u8fc711\u4e2a\u5e74\u5934\uff0c",o.default.createElement("br",null),"\u4e3a\u4e86\u672a\u6765\u66f4\u52a0\u7a33\u5b9a\u7684\u53d1\u5c55\uff0c\u6211\u4eec\u5728\u6b21\u5ba3\u5e03\uff1a"),o.default.createElement("p",null,"\u54d4\u54e9\u54d4\u54e9\u52a9\u624b\u6b63\u5f0f\u66f4\u540d\u4e3aACG\u52a9\u624b\uff0c\u4e00\u76f4\u4f34\u968f\u7740\u6211\u4eec\u7684\u8fd9\u4e2a\u540d\u5b57",o.default.createElement("br",null),"\u300cbilibilihelper\u300d\u4e5f\u5c06\u66f4\u540d\u4e3a\u300cacghelper\u300d"),o.default.createElement("p",null,"\u5f53\u7136\uff0c\u6211\u4eec\u4f9d\u65e7\u53eb\u505a\u300c\u52a9\u624b\u300d\uff0c\u4f46\u662f\u7531\u4e8eb\u7ad9\u7684\u4e0d\u65ad\u58ee\u5927\uff0cbilibili\u548c\u54d4\u54e9\u54d4\u54e9\u5df2\u7ecf",o.default.createElement("br",null),"\u6210\u4e3a\u4e86\u7279\u5316\u8bcd\uff0c\u6211\u4eec\u4e0d\u80fd\u4e00\u76f4\u65e0\u507f\u4f7f\u7528\u8be5\u540d\u5b57\u3002"),o.default.createElement("p",null,"\u76f8\u4fe1\u8fd9\u6b21\u66f4\u540d\u662f\u4e25\u8083\u5e76\u4e14\u610f\u4e49\u91cd\u5927\u7684\uff0c\u5e0c\u671b\u548c\u6570\u5341\u4e07\u5c0f\u4f19\u4f34\u4e00\u8d77\u6210\u957f\u52a0\u6cb9!")),o.default.createElement(i.Modal,{open:R,className:"bind-email-modal",title:"\u7ed1\u5b9a\u90ae\u7bb1",buttons:o.default.createElement("div",{className:"footer"},o.default.createElement(i.Button,{className:"border",onClick:F},"\u5173\u95ed"),o.default.createElement(i.Button,{className:"primary",onClick:this.handleOnClickValidateCaptchaForBindEmail,disabled:!this.state.bindEmailCaptcha||!g,disableEvent:!1},"\u786e\u8ba4\u7ed1\u5b9a"))},o.default.createElement(i.Input,{ref:this.bindEmailInputRef,name:"bindEmail",type:"email",className:["bind-email-input","input",1===a?"active":"",a>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u60f3\u8981\u7ed1\u5b9a\u90ae\u7bb1",onChange:this.handleOnChangeBindEmail,onKeyDown:this.handleOnKeyDownBindEmailInput,value:g,minlength:6}),o.default.createElement("div",{className:"captcha-wrapper"},o.default.createElement(i.Input,{ref:this.bindEmailCaptchaInputRef,name:"bindEmailCaptcha",type:"text",className:["captcha-input",1===a?"active":"",a>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onChange:this.handleOnChangeBindEmailCaptcha,onKeyDown:this.handleOnKeyDownBindEmailCaptchaInput,value:m,size:6}),o.default.createElement(i.Button,{className:"primary",onClick:this.handleOnClickGetCaptchaForBindEmail,disabled:!this.state.emailForBind||f,disableEvent:!1},f?`\u8bf7\u7b49\u5f85${b}\u79d2`:"\u83b7\u53d6\u9a8c\u8bc1\u7801"))),o.default.createElement(i.Modal,{open:T,className:"change-password-modal",title:v?"\u4fee\u6539\u5bc6\u7801":"\u91cd\u7f6e\u5bc6\u7801",buttons:o.default.createElement("div",{className:"footer"},o.default.createElement(i.Button,{className:"border",onClick:N},"\u5173\u95ed"),o.default.createElement(i.Button,{className:"primary",onClick:v?this.handleOnClickValidateCaptchaForChangePassword:this.handleOnClickValidateCaptchaForResetPassword,disabled:!this.state.captchaForChangePassword||!this.state.passwordForChange||!this.state.confirmPasswordForChange||!this.state.emailForChangePassword,disableEvent:!1},v?"\u786e\u8ba4\u4fee\u6539":"\u786e\u8ba4\u91cd\u7f6e"))},o.default.createElement("div",{className:"email-wrapper"},o.default.createElement(i.Input,{ref:this.changePasswordEmailInputRef,name:"emailForChangePassword",type:"email",className:["email-input","input"].join(" "),placeholder:v&&this.state.bhAccount?this.state.bhAccount.email:"\u8bf7\u8f93\u5165\u7ed1\u5b9a\u90ae\u7bb1",onChange:this.handleOnChangeChangePasswordEmail,onKeyDown:this.handleOnKeyDownEmailForChangePasswordInput,value:h,minlength:6}),v&&this.state.bhAccount&&this.state.bhAccount.email?null:o.default.createElement("div",{className:"no-email-prompt"},"\u5982\u6ca1\u6709\u7ed1\u5b9a\u90ae\u7bb1\uff0c\u8bf7\u53d1\u7ed9 ",o.default.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u52a9\u624b\u732b")," \u5e2e\u4f60\u7ed1\u5b9a")),o.default.createElement("div",{className:"captcha-wrapper"},o.default.createElement(i.Input,{ref:this.changePasswordCaptchaInputRef,name:"bindEmailCaptcha",type:"text",className:["bind-email-captcha-input",1===a?"active":"",a>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onChange:this.handleOnChangePasswordChangeCaptcha,onKeyDown:this.handleOnKeyDownChangePasswordCaptchaInput,value:this.state.captchaForChangePassword,size:6}),o.default.createElement(i.Button,{className:"primary",onClick:v?this.handleOnClickGetCaptchaForChangePassword:this.handleOnClickGetCaptchaForResetPassword,disabled:!this.state.emailForChangePassword||this.state.getChangePasswordCaptchaCooling,disableEvent:!1},this.state.getChangePasswordCaptchaCooling?`\u8bf7\u7b49\u5f85${this.state.changePasswordCaptchaCountDown}\u79d2`:"\u83b7\u53d6\u9a8c\u8bc1\u7801")),o.default.createElement("div",{className:"password-box"},o.default.createElement(i.Input,{ref:this.passwordForChangeInputRef,type:s?"text":"password",className:["password-input",1===a?"active":"",a>1?"entered":""].join(" "),placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff0c\u957f\u5ea6\u4e0d\u5c0f\u4e8e6\u4f4d",onChange:this.handleOnChangePasswordForChange,onKeyDown:this.handleOnKeyDownPasswordForChangeInput,value:this.state.passwordForChange})),o.default.createElement("div",{className:"confirm-password-box"},o.default.createElement(i.Input,{ref:this.confirmPasswordForChangeInputRef,type:s?"text":"password",className:["password-input"].join(" "),placeholder:"\u8bf7\u91cd\u590d\u8f93\u5165\u4e00\u904d\u5bc6\u7801",onChange:this.handleOnChangeConfirmPasswordForChange,onKeyDown:this.handleOnKeyDownConfirmPasswordForChangeInput,value:this.state.confirmPasswordForChange}),o.default.createElement("div",{className:"extra-box"},o.default.createElement("div",{className:"show-password-box",onClick:this.handleOnClickShowPassword},o.default.createElement(i.CheckboxRect,{active:s})," \u663e\u793a\u5bc6\u7801"),o.default.createElement("p",{className:"description"},"\u8bf7\u52ff\u4f7f\u7528b\u7ad9\u8d26\u53f7\u5bc6\u7801")))),o.default.createElement(i.Modal,{open:A,className:"payment-iframe-modal"},o.default.createElement("iframe",{key:u,src:A?t&&t.paymentIframe:null}),o.default.createElement(i.Icon,{className:"close-payment-modal-btn",icon:"close",size:16,onClick:this.state.handleOnClickHidePaymentModal})),o.default.createElement(i.Modal,{open:_,className:"firefox-announcement-modal",title:"\u706b\u72d0\u7528\u6237\u987b\u77e5",buttons:o.default.createElement("div",{className:"footer"},o.default.createElement(i.Button,{className:"primary",onClick:this.state.handleOnClickShowLoginModal},"\u6211\u5df2\u77e5\u6089"))},o.default.createElement("p",null,"\u4e3a\u4e86\u66f4\u52a0\u7a33\u5b9a\u7684\u63d0\u4f9b\u670d\u52a1\u4e0e\u907f\u514d\u610f\u5916\u53d1\u751f\uff0c\u5728\u706b\u72d0\u7248\u52a9\u624b\u6682\u4e0d\u63d0\u4f9b\u300c\u4f1a\u5458\u5f00\u901a\u300d\u529f\u80fd\u3002",o.default.createElement("br",null),o.default.createElement("br",null),"\u5982\u679c\u60a8\u5df2\u7ecf\u662f\u4ed8\u8d39\u7528\u6237\uff0c\u8bf7\u6ce8\u610f\u52a9\u624b\u5728\u706b\u72d0\u6d4f\u89c8\u5668\u4e0a\u90e8\u5206\u529f\u80fd\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u4f7f\u7528\uff0c\u4f8b\u5982",o.default.createElement("b",null,"\u300c\u5f39\u5e55\u67e5\u8be2\u300d"),"\u3001",o.default.createElement("b",null,"\u300c\u4ec5\u97f3\u89c6\u9891\u4e0b\u8f7d\u300d"),"\u548c",o.default.createElement("b",null,"\u300c\u4e0b\u8f7d\u6587\u4ef6\u91cd\u547d\u540d\u300d"),"\u529f\u80fd\u7b49\u3002",o.default.createElement("br",null),o.default.createElement("br",null),"\u5982\u679c\u4e4b\u540e\u5904\u4e8e\u4e0b\u67b6\u6216\u8fdb\u884c\u76f8\u5173\u8c03\u6574\u72b6\u6001\uff0c\u4ed8\u8d39\u529f\u80fd\u53ef\u80fd\u4f1a\u5f02\u5e38\u6216\u65e0\u6cd5\u4f7f\u7528\u3002")),o.default.createElement(i.Modal,{open:P,className:"edge-announcement-modal",title:"\u9047\u5230\u95ee\u9898\u600e\u4e48\u529e\u5462",buttons:o.default.createElement("div",{className:"footer"},o.default.createElement(i.Button,{className:"primary",onClick:this.state.handleOnClickHideEdgeModal},"\u6211\u5df2\u77e5\u6089"))},o.default.createElement("p",null,"\u4eb2\u7231\u7684\u7528\u6237\u60a8\u597d\uff0c\u5f53\u60a8\u9047\u5230\u95ee\u9898\u65f6\u8bf7\u8054\u7cfb \xa0",o.default.createElement("a",{href:"#",onClick:this.handleOnGotoReport},"b\u7ad9\u4eba\u5de5\u5ba2\u670d\u300c\u52a9\u624b\u732b\u300d"),"\u3002",o.default.createElement("br",null),o.default.createElement("br",null),"\u52a9\u624b\u732b\u6536\u5230\u6d88\u606f\u540e\u4f1a\u5c3d\u5feb\u7ed9\u60a8\u56de\u590d\u3002",o.default.createElement("br",null),o.default.createElement("br",null),"\u5982\u679c\u89c9\u5f97\u52a9\u624b\u4e0d\u9519\u8bb0\u5f97\u4e94\u661f\u597d\u8bc4\u54e6\u3002"))))}})},3419:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(53507),l=n(a(57689)),o=a(47532),s=n(a(635)),r=a(555),c=a(53671),d=a(28507),u=a(29010),h=s.default.div`

`;class p extends l.default.Component{constructor(e){super(e),this.handleOnToggleIncognito=()=>{chrome.runtime.sendMessage({target:"incognito",event:"setSetting",on:!this.state.incognito},()=>{this.context.uploadSettings("incognito"),this.setState({incognito:!this.state.incognito})})},this.handleOnToggleDefaultIncognito=()=>{chrome.runtime.sendMessage({target:"incognito",event:"setSetting",defaultIncognito:!this.state.defaultIncognito},()=>{this.context.uploadSettings("incognito"),this.setState({defaultIncognito:!this.state.defaultIncognito})})},this.handleOnClearIncognito=()=>{chrome.runtime.sendMessage({target:"incognito",event:"clearAll"},()=>{this.context.uploadSettings("incognito"),i.Message.info("\u6e05\u9664\u6240\u6709\u76f4\u64ad\u95f4\u9690\u8eab\u8bbe\u7f6e\u6210\u529f\uff0c\u76f4\u64ad\u95f4\u5237\u65b0\u540e\u9000\u51fa\u9690\u8eab\u54e6",5e3)})},this.handleOnToggleAutoSignIn=()=>{chrome.runtime.sendMessage({target:"autoSignIn",event:"setSetting",on:!this.state.autoSignIn},()=>{this.context.uploadSettings("autoSignIn"),this.setState({autoSignIn:!this.state.autoSignIn})})},this.handleOnToggleAutoMedal=()=>{chrome.runtime.sendMessage({target:"autoMedal",event:"setSetting",on:!this.state.autoMedal},()=>{this.context.uploadSettings("autoMedal"),this.setState({autoMedal:!this.state.autoMedal})})},this.handleOnToggleAutoRewrite=()=>{chrome.runtime.sendMessage({target:"liveAutoRewrite",event:"setSetting",on:!this.state.liveAutoRewrite},()=>{this.context.uploadSettings("liveAutoRewrite"),this.setState({liveAutoRewrite:!this.state.liveAutoRewrite})})},this.handleOnToggleAutoSignInNotification=()=>{chrome.runtime.sendMessage({target:"autoSignIn",event:"setSetting",pushNotification:!this.state.pushAutoSignInNotification},()=>{this.context.uploadSettings("autoSignIn"),this.setState({pushAutoSignInNotification:!this.state.pushAutoSignInNotification})})},this.handleOnToggleSilver2Coin=()=>{chrome.runtime.sendMessage({target:"silver2coin",event:"setSetting",on:!this.state.silver2coin},()=>{this.context.uploadSettings("silver2coin"),this.setState({silver2coin:!this.state.silver2coin})})},this.handleOnToggleLiveDefaultOpen=()=>{chrome.runtime.sendMessage({target:"liveChatMode",event:"setSetting",defaultOpen:!this.state.liveChatModeDefaultOpen},()=>{this.context.uploadSettings("liveChatMode"),this.setState({liveChatModeDefaultOpen:!this.state.liveChatModeDefaultOpen})})},this.handleOnToggleSilver2CoinNotification=()=>{chrome.runtime.sendMessage({target:"silver2coin",event:"setSetting",pushNotification:!this.state.pushSilver2CoinNotification},()=>{this.context.uploadSettings("silver2coin"),this.setState({pushSilver2CoinNotification:!this.state.pushSilver2CoinNotification})})},this.handleOnToggleChatFilterItem=(e,t)=>{const a=this.state.chatFilterOptions;a[e]=t,chrome.runtime.sendMessage({target:"chatFilter",event:"setSetting",options:a},()=>{this.context.uploadSettings("chatFilter"),this.setState({chatFilterOptions:a})})},this.handleOnClickLiveAutoWiden=()=>{const{liveAutoSetWidenOn:e}=this.state;chrome.runtime.sendMessage({target:"liveAutoWiden",event:"setSetting",on:!e},()=>{this.context.uploadSettings("liveAutoWiden"),this.setState({liveAutoSetWidenOn:!e})})},this.handleOnClickWidenType=e=>{const{liveAutoSetWidenType:t}=this.state;t!==e&&chrome.runtime.sendMessage({target:"liveAutoWiden",event:"setSetting",widenType:e},()=>{this.context.uploadSettings("liveAutoWiden"),this.setState({liveAutoSetWidenType:e})})},this.handleOnClickLiveAutoQuality=()=>{const{liveAutoQualityOn:e}=this.state;chrome.runtime.sendMessage({target:"liveAutoQuality",event:"setSetting",on:!e},()=>{this.context.uploadSettings("liveAutoQuality"),this.setState({liveAutoQualityOn:!e})})},this.handleOnClickLiveAutoQualitySkipHVC=()=>{const{liveAutoQualitySkipHVC:e}=this.state;chrome.runtime.sendMessage({target:"liveAutoQuality",event:"setSetting",skipHVC:!e},()=>{this.context.uploadSettings("liveAutoQuality"),this.setState({liveAutoQualitySkipHVC:!e})})},this.handleOnClickQualityType=e=>{const{liveAutoQuality:t}=this.state;t!==e&&chrome.runtime.sendMessage({target:"liveAutoQuality",event:"setSetting",quality:e},()=>{this.context.uploadSettings("liveAutoQuality"),this.setState({liveAutoQuality:e})})},this.handleOnClickToggletScreenShotQuickSave=()=>{chrome.runtime.sendMessage({target:"liveShortcuts",event:"setSetting",screenShotQuickSave:!this.state.screenShotQuickSave},()=>{this.setState({screenShotQuickSave:!this.state.screenShotQuickSave},()=>{this.context.uploadSettings("liveShortcuts")})})},this.state={autoSignIn:!0,autoMedal:!1,pushAutoSignInNotification:!0,silver2coin:!0,pushSilver2CoinNotification:!0,chatFilter:!0,chatFilterOptions:{},liveChatModeDefaultOpen:!1,liveAutoSetWidenOn:!1,liveAutoSetWidenType:"default",liveAutoQualityOn:!1,liveAutoQuality:"\u84dd\u5149",liveAutoQualitySkipHVC:!1,incognito:!1,defaultIncognito:!1,liveAutoRewrite:!1,screenShotQuickSave:!1}}componentDidMount(){chrome.runtime.sendMessage({target:"autoSignIn",event:"getSetting"},({on:e,pushNotification:t})=>{this.setState({autoSignIn:e,pushAutoSignInNotification:t})}),chrome.runtime.sendMessage({target:"autoMedal",event:"getSetting"},({on:e})=>{this.setState({autoMedal:e})}),chrome.runtime.sendMessage({target:"silver2coin",event:"getSetting"},({on:e,pushNotification:t})=>{this.setState({silver2coin:e,pushSilver2CoinNotification:t})}),chrome.runtime.sendMessage({target:"chatFilter",event:"getSetting"},({on:e,options:t})=>{this.setState({chatFilter:e,chatFilterOptions:t})}),chrome.runtime.sendMessage({target:"liveChatMode",event:"getSetting"},({defaultOpen:e})=>{this.setState({liveChatModeDefaultOpen:e})}),chrome.runtime.sendMessage({target:"liveAutoWiden",event:"getSetting"},({on:e,widenType:t})=>{this.setState({liveAutoSetWidenOn:e,liveAutoSetWidenType:t})}),chrome.runtime.sendMessage({target:"liveAutoQuality",event:"getSetting"},({on:e,quality:t,skipHVC:a})=>{this.setState({liveAutoQualityOn:e,liveAutoQuality:t,liveAutoQualitySkipHVC:a})}),chrome.runtime.sendMessage({target:"liveAutoRewrite",event:"getSetting"},({on:e})=>{this.setState({liveAutoRewrite:e})}),chrome.runtime.sendMessage({target:"incognito",event:"getSetting"},({on:e,defaultIncognito:t})=>{this.setState({incognito:e,defaultIncognito:t})}),chrome.runtime.sendMessage({target:"liveShortcuts",event:"getSetting"},({screenShotQuickSave:e})=>{this.setState({screenShotQuickSave:e})})}render(){const{hasLogin:e,bhAccount:t,bilibiliAccount:a}=this.context,{autoSignIn:n,autoMedal:o,liveAutoSetWidenOn:s,liveAutoSetWidenType:d,liveAutoQualityOn:p,liveAutoQuality:g,liveAutoQualitySkipHVC:m,incognito:f,screenShotQuickSave:b}=this.state,v=!!t&&t["isVIP"];return l.default.createElement(h,null,l.default.createElement(c.Title,{title:"\u76f4\u64ad\u533a\u529f\u80fd\u8bbe\u7f6e"}),l.default.createElement(c.Section,{title:"\u9ed8\u8ba4\u91cd\u5b9a\u5411\u81f3\u666e\u901a\u9875\u9762",toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnToggleAutoRewrite,on:this.state.liveAutoRewrite})}),l.default.createElement(c.Section,{title:"\u9ed8\u8ba4\u5f00\u542f\u7248\u804a\u6a21\u5f0f",toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnToggleLiveDefaultOpen,on:this.state.liveChatModeDefaultOpen})}),l.default.createElement(c.Section,{title:"\u81ea\u52a8\u66f4\u6362\u7c89\u4e1d\u52cb\u7ae0",toolbar:l.default.createElement(i.CheckBoxButton,{disable:!a,onClick:this.handleOnToggleAutoMedal,on:o}),active:o&&!!a,helperArea:l.default.createElement(l.default.Fragment,null,"\u767b\u5f55\u540e\u53ef\u7528\u3002",l.default.createElement("br",null),"\u5982\u679c\u672a\u5339\u914d\u5230\u7c89\u4e1d\u52cb\u7ae0\u5219\u81ea\u52a8\u8131\u5378\u6389")}),l.default.createElement(c.Section,{title:"\u622a\u5c4f\u5feb\u6377\u952e\u300cs\u300d\u4fdd\u5b58",description:"\u5f00\u542f\u540e\u4f7f\u7528\u5feb\u6377\u952e\u5c06\u300c\u590d\u5236\u5230\u526a\u8d34\u677f\u300d\u6539\u4e3a\u300c\u53e6\u5b58\u4e3a\u6587\u4ef6\u300d",active:b,toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnClickToggletScreenShotQuickSave,on:b})}),l.default.createElement(c.Section,{title:l.default.createElement(l.default.Fragment,null,l.default.createElement(i.Icon,{icon:"cat-paw",size:16}),"\u76f4\u64ad\u95f4\u9690\u8eab\u8fdb\u573a"),description:"\u8bf7\u6ce8\u610f\u542f\u7528\u8be5\u529f\u80fd\u4f1a\u5bfc\u81f4\u623f\u7ba1\u7b49\u6743\u9650\u4e22\u5931",isVIP:v,needVIP:!0,hasLogin:e,toolbar:l.default.createElement(i.CheckBoxButton,{disable:!a&&!v,onClick:this.handleOnToggleIncognito,on:f&&!!v}),active:f&&!!a&&!!v,helperArea:l.default.createElement(l.default.Fragment,null,"\u7531\u4e8e\u9690\u85cf\u4e86\u8eab\u4efd\uff0c\u8be5\u529f\u80fd\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u4f7f\u7528\u76f4\u64ad\u95f4\u5f39\u5e55\u3001\u9001\u793c\u7b49\u529f\u80fd\uff0c\u4e5f\u5305\u542b\u623f\u7ba1\u7ba1\u7406\u529f\u80fd\u7b49\u3002",l.default.createElement("br",null),l.default.createElement("br",null),l.default.createElement(i.Button,{className:"primary",onClick:this.handleOnClearIncognito},"\u6e05\u9664\u6240\u6709\u76f4\u64ad\u95f4\u9690\u8eab\u8bbe\u7f6e"))},l.default.createElement(i.ListItem,{title:"\u9ed8\u8ba4\u9690\u8eab",onClick:this.handleOnToggleDefaultIncognito,operation:l.default.createElement(i.CheckBoxButton,{on:this.state.defaultIncognito})})),l.default.createElement(c.Section,{title:"\u9ed8\u8ba4\u663e\u793a\u65b9\u5f0f - \u81ea\u52a8\u5bbd\u5c4f",active:s,toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnClickLiveAutoWiden,on:s})},l.default.createElement(i.RadioButtonGroup,{value:s?d:"",data:[{key:"web",title:"\u7f51\u9875\u5168\u5c4f"}],onClick:this.handleOnClickWidenType})),l.default.createElement(c.Section,{title:"\u9ed8\u8ba4\u753b\u8d28",active:p,toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnClickLiveAutoQuality,on:p}),helperArea:"\u8bf7\u6ce8\u610f\uff0cPRO\u6e05\u6670\u5ea6\u4e0b\u65e0\u6cd5\u4f7f\u7528\u76f4\u64ad\u622a\u5c4f\u7b49\u529f\u80fd"},l.default.createElement(i.RadioButtonGroup,{value:p?g:"\u84dd\u5149",data:u.QUALITY_NAME_LIST.map(e=>({key:e,title:e})),onClick:this.handleOnClickQualityType})),l.default.createElement(c.Section,{title:"\u9ed8\u8ba4\u753b\u8d28-\u8df3\u8fc7PRO(\u8f6f\u4ef6\u89e3\u7801)\u9009\u9879",active:m,toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnClickLiveAutoQualitySkipHVC,on:m}),helperArea:l.default.createElement(l.default.Fragment,null,"PRO\u753b\u8d28\u4e13\u4e3a\u65e0\u6cd5\u786c\u4ef6\u52a0\u901f\u7684\u7528\u6237\u63d0\u4f9b\u3002",l.default.createElement("br",null),"\u5982\u679c\u60a8\u53ef\u4ee5\u76f4\u63a5\u786c\u4ef6\u89e3\u7801\uff0c\u8bf7\u6253\u5f00\u6b64\u9009\u9879\uff0c\u4ee5\u8282\u7701\u6027\u80fd\u83b7\u5f97\u6700\u4f73\u4f53\u9a8c")}),l.default.createElement(c.Section,{title:"\u81ea\u52a8\u7b7e\u5230",toolbar:l.default.createElement(i.CheckBoxButton,{disable:!a,onClick:this.handleOnToggleAutoSignIn,on:n}),active:n&&!!a,helperArea:"\u8be5\u529f\u80fd\u6bcf\u5929\u90fd\u4f1a\u68c0\u67e5\uff0c\u6bcf\u5929\u7b7e\u5230\u4e00\u6b21~"},l.default.createElement(i.ListItem,{title:"\u63a8\u9001\u901a\u77e5",onClick:this.handleOnToggleAutoSignInNotification,operation:l.default.createElement(i.CheckBoxButton,{on:this.state.pushAutoSignInNotification})})),l.default.createElement(c.Section,{title:"\u81ea\u52a8\u94f6\u74dc\u5b50\u5151\u6362\u786c\u5e01",toolbar:l.default.createElement(i.CheckBoxButton,{disable:!a,onClick:this.handleOnToggleSilver2Coin,on:this.state.silver2coin}),active:this.state.silver2coin&&!!a},l.default.createElement(i.ListItem,{title:"\u63a8\u9001\u901a\u77e5",onClick:this.handleOnToggleSilver2CoinNotification,operation:l.default.createElement(i.CheckBoxButton,{on:this.state.pushSilver2CoinNotification})})),l.default.createElement(c.Section,{title:"\u53bb\u6c61\u7c89 - \u804a\u5929\u4fe1\u606f\u5c4f\u853d\u8bbe\u7f6e",description:"\u5168\u5c40\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u8bbe\u7f6e\u3002\u8fdb\u5165\u6bcf\u4e2a\u76f4\u64ad\u95f4\u540e\u53ef\u4ee5\u518d\u5355\u72ec\u8fdb\u884c\u8bbe\u7f6e\uff0c\u5355\u72ec\u8bbe\u7f6e\u4f1a\u8986\u76d6\u9ed8\u8ba4\u8bbe\u7f6e",helperArea:l.default.createElement(l.default.Fragment,null,l.default.createElement("b",null,"\u7528\u6237\u7b49\u7ea7"),"\u8fc7\u6ee4\u9879\u4ec5\u5728",l.default.createElement("b",null,"\u76f4\u64ad\u56de\u770b"),"\u9875\u9762\u6709\u6548",l.default.createElement("br",null))},l.default.createElement(i.CheckBoxGroup,{data:Object.keys(this.state.chatFilterOptions).map(e=>({key:e,title:(0,r.__)("chatFilter_options_"+e),on:this.state.chatFilterOptions[e]})),onClick:this.handleOnToggleChatFilterItem})))}}p.contextType=d.MainStore,t["default"]=(0,o.withRouter)(p)},19673:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(51920),l=a(1693),o=a(90741),s=n(a(57689)),r=a(555),c=a(47532),d=n(a(635)),u=a(555),h=a(53671),p=a(28507),g=(0,r.isFireFox)(),m=d.default.div`
  .toggle-off {
    position: relative;
    filter: grayscale(1);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #fff;
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  section {
    .radio-button-wrapper {
      margin-bottom: 8px;
      width: fit-content;
    }

    .link {
      margin: 0 2px;
      padding: 0 2px;
      color: var(--bilibili-blue);
    }
  }
`,f=d.default.div`
  .check-box-button {
    display: inline-block;
    margin-left: 16px;
  }
`,b=d.default.textarea`
  width: calc(100% - 18px);
  min-height: 50px;
  padding: 8px;
  border: 1px solid #ccc;
`;class v extends s.default.Component{constructor(e){super(e),this.state={globalNotificationState:!1,notificationJumpType:"button",notificationAutoClose:!1,notificationAPIType:"native",announcementNotification:!1,bilibiliMessageOn:!1,bilibiliMessageRangeType:{at:!0,like:!0,reply:!0,sys_msg:!0,unread:!0},bilibiliMessageDuration:5,bilibiliMessageSpeech:!1,videoOn:!1,videoRangeType:"all",videoNumberType:"theLatestThree",videoUseWhiteList:!1,videoUseBlackList:!1,videoDuration:10,videoShowCover:!1,videoNotPushNotification:!1,videoOnlyShowBadge:!1,videoNotifyTypes:["8"],liveOn:!1,liveRangeType:"all",liveUseWhiteList:!1,liveUseBlackList:!1,liveDuration:3,liveShowCover:!1,originDynamicWhiteListString:"",dynamicWhiteListString:"",originDynamicBlackListString:"",dynamicBlackListString:"",originLiveWhiteListString:"",liveWhiteListString:"",originLiveBlackListString:"",liveBlackListString:"",modalType:"dynamic",useBackground:!1},this.handleOnClickGlobalToggleBtn=()=>{const{globalNotificationState:e}=this.state;chrome.runtime.sendMessage({target:"notificationController",event:"setSetting",on:!e},()=>{this.setState({globalNotificationState:!e})})},this.handleOnRequestBackground=()=>{const e=this.state.useBackground?"remove":"request";chrome.runtime.sendMessage({target:"permissionController",event:e,permissions:["background"]},e=>{e&&this.setState({useBackground:!1})})},this.handleOnClickJumpType=e=>{chrome.runtime.sendMessage({target:"notificationController",event:"setSetting",useActions:"button"===e},()=>{this.context.uploadSettings("notificationController"),this.setState({notificationJumpType:e})})},this.handleOnClickAutoClose=()=>{const{notificationAutoClose:e}=this.state;chrome.runtime.sendMessage({target:"notificationController",event:"setSetting",autoClose:!e},()=>{this.context.uploadSettings("notificationController"),this.setState({notificationAutoClose:!e})})},this.handleOnToggleNotificationAPIType=e=>{chrome.runtime.sendMessage({target:"notificationController",event:"setSetting",apiType:e},()=>{this.context.uploadSettings("notificationController"),this.setState({notificationAPIType:e})})},this.handleOnSetVideoDuration=e=>{if(this.state.videoDuration!==e){const{bhAccount:t}=this.context;if(5===e&&(!t||!t.isVIP))return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",duration:e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoDuration:e})})}},this.handleOnSetVideoShowCover=()=>{const{videoShowCover:e}=this.state;chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",showCover:!e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoShowCover:!e})})},this.handleOnSetVideoShowBadge=()=>{const{videoShowBadge:e}=this.state;chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",showBadge:!e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoShowBadge:!e})})},this.handleOnSetVideoNoNotification=()=>{const{videoNoNotification:e}=this.state;chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",noNotification:!e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoNoNotification:!e})})},this.handleOnToggleAnnouncementMessage=()=>{const{announcementNotification:e}=this.state;chrome.runtime.sendMessage({target:"message",event:"setSetting",announcementNotification:!e},()=>{this.context.uploadSettings("message"),this.setState({announcementNotification:!e})})},this.handleOnSetBilibiliMessageOn=()=>{const{bilibiliMessageOn:e}=this.state,{bhAccount:t,hasLogin:a,handleOnClickShowLoginModal:n,sendPaymentMessage:i}=this.context;return a?e||t&&t.isVIP?void chrome.runtime.sendMessage({target:"bilibiliMessage",event:"setSetting",on:!e},()=>{this.context.uploadSettings("bilibiliMessage"),this.setState({bilibiliMessageOn:!e})}):i():n()},this.handleOnSetBilibiliMessageSpeech=()=>{const{bilibiliMessageOn:e,bilibiliMessageSpeech:t}=this.state,{bhAccount:a,hasLogin:n,handleOnClickShowLoginModal:i,sendPaymentMessage:l}=this.context;return n?e||a&&a.isVIP?void chrome.runtime.sendMessage({target:"bilibiliMessage",event:"setSetting",speech:!t},()=>{this.context.uploadSettings("bilibiliMessage"),this.setState({bilibiliMessageSpeech:!t})}):l():i()},this.handleOnToggleBilibiliMessageRangeType=(e,t)=>{const a=this.state.bilibiliMessageRangeType;a[e]=t,chrome.runtime.sendMessage({target:"bilibiliMessage",event:"setSetting",rangeType:a},()=>{this.context.uploadSettings("bilibiliMessage"),this.setState({bilibiliMessageRangeType:a})})},this.handleOnToggleSubscriptionDynamicType=(e,t)=>{const a=this.state.videoNotifyTypes;if(t&&!a.includes(e))a.push(e);else if(!t&&a.includes(e)){const t=a.findIndex(t=>t===e);a.splice(t,1)}chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",notifyTypes:a},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoNotifyTypes:a})})},this.handleOnToggleBilibiliMessageDuration=e=>{chrome.runtime.sendMessage({target:"bilibiliMessage",event:"setSetting",duration:e},()=>{this.context.uploadSettings("bilibiliMessage"),this.setState({bilibiliMessageDuration:e})})},this.handleOnSetVideoOn=()=>{const{videoOn:e}=this.state;chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",on:!e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoOn:!e})})},this.handleOnSetVideoRangeType=e=>{this.state.videoRangeType!==e&&chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",rangeType:e,useWhiteList:"whiteList"===e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoRangeType:e,videoUseWhiteList:"whiteList"===e})})},this.handleOnSetVideoNumberType=e=>{this.state.videoNumberType!==e&&chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",numberType:e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoNumberType:e})})},this.handleOnToggleUseVideoBlackList=()=>{const{videoUseBlackList:e}=this.state,{bhAccount:t={}}=this.context,a=!!t&&t["isVIP"];if(!e&&!a)return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setSetting",useBlackList:!e},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({videoUseBlackList:!e})})},this.handleOnSetLiveOn=()=>{const{liveOn:e}=this.state;chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",on:!e},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveOn:!e})})},this.handleOnSetLiveDuration=e=>{if(this.state.liveDuration!==e){const{bhAccount:t={}}=this.context,a=!!t&&t["isVIP"];if(!a)return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",duration:e},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveDuration:e})})}},this.handleOnSetLiveShowCover=()=>{const{liveShowCover:e}=this.state;chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",showCover:!e},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveShowCover:!e})})},this.handleOnSetLiveRangeType=e=>{this.state.liveRangeType!==e&&chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",rangeType:e,useWhiteList:"whiteList"===e},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveRangeType:e,liveUseWhiteList:"whiteList"===e})})},this.handleOnToggleUseLiveBlackList=()=>{const{liveUseBlackList:e}=this.state,{bhAccount:t={}}=this.context,a=!!t&&t["isVIP"];if(!e&&!a)return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setSetting",useBlackList:!e},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({liveUseBlackList:!e})})},this.handleOnOpenVideoDynamicPage=()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://t.bilibili.com/?tab=8"})},this.handleOnChangeDynamicBlackListTextArea=e=>{e.persist();const t=e.target.value.trim().replace(/[^\d, ]/g,"");this.setState({dynamicBlackListString:t})},this.handleOnChangeDynamicWhiteListTextArea=e=>{e.persist();const t=e.target.value.trim().replace(/[^\d, ]/g,"");this.setState({dynamicWhiteListString:t})},this.handleOnBlurDynamicBlackListTextArea=()=>{const{dynamicBlackListString:e,originDynamicBlackListString:t}=this.state;if(t!==e.trim()){const t=new Set(e.trim().split(",").map(e=>e.trim()).filter(Boolean)),a=Array.from(t),n=a.join(", ");chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setBlackList",blackList:Array.from(t)},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({originDynamicBlackListString:n,dynamicBlackListString:n})})}},this.handleOnBlurDynamicWhiteListTextArea=()=>{const{dynamicWhiteListString:e,originDynamicWhiteListString:t}=this.state;if(t!==e.trim()){const t=new Set(e.trim().split(",").map(e=>e.trim()).filter(Boolean)),a=Array.from(t),n=a.join(", ");chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"setWhiteList",whiteList:Array.from(t)},()=>{this.context.uploadSettings("subscriptionDynamic"),this.setState({originDynamicWhiteListString:n,dynamicWhiteListString:n})})}},this.handleOnChangeLiveBlackListTextArea=e=>{e.persist();const t=e.target.value.trim().replace(/[^\d, ]/g,"");this.setState({liveBlackListString:t})},this.handleOnChangeLiveWhiteListTextArea=e=>{e.persist();const t=e.target.value.trim().replace(/[^\d, ]/g,"");this.setState({liveWhiteListString:t})},this.handleOnBlurLiveBlackListTextArea=()=>{const{liveBlackListString:e,originLiveBlackListString:t}=this.state;if(t!==e.trim()){const t=new Set(e.trim().split(",").map(e=>e.trim()).filter(Boolean)),a=Array.from(t),n=a.join(", ");chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setBlackList",blackList:Array.from(t)},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({originLiveBlackListString:n,liveBlackListString:n})})}},this.handleOnBlurLiveWhiteListTextArea=()=>{const{liveWhiteListString:e,originLiveWhiteListString:t}=this.state;if(t!==e.trim()){const t=new Set(e.trim().split(",").map(e=>e.trim()).filter(Boolean)),a=Array.from(t),n=a.join(", ");chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"setWhiteList",whiteList:Array.from(t)},()=>{this.context.uploadSettings("bilibiliLiveBroadcast"),this.setState({originLiveWhiteListString:n,liveWhiteListString:n})})}}}componentDidMount(){chrome.runtime.sendMessage({target:"notificationController",event:"getSetting"},e=>{this.setState({globalNotificationState:e.on,notificationJumpType:e.useActions?"button":"card",notificationAutoClose:e.autoClose,notificationAPIType:e.apiType})}),chrome.runtime.sendMessage({target:"message",event:"getSetting"},e=>{const{announcementNotification:t}=e;this.setState({announcementNotification:t})}),chrome.runtime.sendMessage({target:"bilibiliMessage",event:"getSetting"},e=>{const{on:t,rangeType:a,duration:n,speech:i}=e;this.setState({bilibiliMessageOn:t,bilibiliMessageRangeType:a,bilibiliMessageDuration:n,bilibiliMessageSpeech:i})}),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getSetting"},e=>{const{on:t,rangeType:a,numberType:n,useWhiteList:i,useBlackList:l,duration:o,showCover:s,showBadge:r,noNotification:c,notifyTypes:d}=e;this.setState({videoOn:t,videoRangeType:a,videoNumberType:n,videoUseWhiteList:i,videoUseBlackList:l,videoDuration:o,videoShowCover:s,videoShowBadge:r,videoNoNotification:c,videoNotifyTypes:d.map(e=>String(e))})}),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getBlackList"},(e=[])=>{this.setState({originDynamicBlackListString:e.join(", "),dynamicBlackListString:e.join(", ")})}),chrome.runtime.sendMessage({target:"subscriptionDynamic",event:"getWhiteList"},(e=[])=>{this.setState({originDynamicWhiteListString:e.join(", "),dynamicWhiteListString:e.join(", ")})}),chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"getSetting"},e=>{const{on:t,rangeType:a,useWhiteList:n,useBlackList:i,duration:l,showCover:o}=e;this.setState({liveOn:t,liveRangeType:a,liveUseWhiteList:n,liveUseBlackList:i,liveDuration:l,liveShowCover:o})}),chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"getBlackList"},(e=[])=>{this.setState({originLiveBlackListString:e.join(", "),liveBlackListString:e.join(", ")})}),chrome.runtime.sendMessage({target:"bilibiliLiveBroadcast",event:"getWhiteList"},(e=[])=>{this.setState({originLiveWhiteListString:e.join(", "),liveWhiteListString:e.join(", ")})}),(0,r.isFireFox)()||chrome.permissions.contains({permissions:["background"]},e=>{this.setState({useBackground:!!e})})}render(){const{globalNotificationState:e,notificationJumpType:t,notificationAutoClose:a,notificationAPIType:n,announcementNotification:c,bilibiliMessageOn:d,bilibiliMessageRangeType:p,bilibiliMessageDuration:v,bilibiliMessageSpeech:C,videoOn:S,videoRangeType:E,videoNumberType:y,videoUseWhiteList:M,videoUseBlackList:w,videoDuration:x,videoShowCover:k,videoShowBadge:O,videoNoNotification:A,videoNotifyTypes:_,liveOn:P,liveRangeType:I,liveUseWhiteList:L,liveUseBlackList:B,liveDuration:D,liveShowCover:T,dynamicWhiteListString:N,dynamicBlackListString:R,liveWhiteListString:F,liveBlackListString:V,useBackground:U}=this.state,{hasLogin:j,bilibiliAccount:Y,bhAccount:W={}}=this.context,z=!!W&&W["isVIP"];return s.default.createElement(m,null,s.default.createElement(h.Title,{title:s.default.createElement(f,null,s.default.createElement("span",null,"\u6d88\u606f\u63a8\u9001\u8bbe\u7f6e")),description:"\u6d88\u606f\u63a8\u9001\u662f\u4e00\u79cd\u6839\u636e\u4e00\u5b9a\u9891\u7387\u8fdb\u884c\u5b9a\u671f\u68c0\u67e5\u7684\u529f\u80fd\uff0c\u5f53\u6709\u65b0\u5185\u5bb9\u65f6\u5c31\u4f1a\u63a8\u9001\u7ed9\u4f60\u5566~"}),s.default.createElement("div",{className:e?null:"toggle-off"},s.default.createElement(h.Topic,{title:"\u4e00\u822c\u63a8\u9001\u8bbe\u7f6e"},s.default.createElement(h.Section,{title:"\u6536\u5230\u63a8\u9001\u4e00\u6bb5\u65f6\u95f4\u540e\u81ea\u52a8\u5173\u95ed\u6d88\u606f",description:"\u81ea\u52a8\u5173\u95ed\u7b49\u5f85\u65f6\u95f4\u5404\u529f\u80fd\u53ef\u80fd\u4e0d\u4e00\u6837",toolbar:s.default.createElement(l.CheckBoxButton,{onClick:this.handleOnClickAutoClose,on:a})}),s.default.createElement(h.Section,{title:"\u63a8\u9001\u6a21\u5f0f"},s.default.createElement(l.RadioButtonGroup,{value:n,data:[{key:"native",title:"\u64cd\u4f5c\u7cfb\u7edf",description:"\u9ed8\u8ba4\u9009\u9879"},{key:"chrome",title:"\u6d4f\u89c8\u5668",description:"\u5982\u679c\u9ed8\u8ba4\u9009\u9879\u4e0b\u63a8\u9001\u6d88\u606f\u5de5\u4f5c\u5f02\u5e38\uff0c\u8bf7\u9009\u62e9\u8fd9\u4e00\u9879"}],onClick:this.handleOnToggleNotificationAPIType})),!(0,r.isFireFox)()&&s.default.createElement(h.Section,{title:"\u542f\u7528\u63a8\u9001\u589e\u5f3a",description:"\u89e3\u51b3\u540e\u53f0\u63a8\u9001\u5931\u8d25\u7684\u95ee\u9898\uff0c\u8bf7\u8c28\u614e\u542f\u7528\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6d4f\u89c8\u5668\u5f00\u673a\u81ea\u52a8\u542f\u52a8",toolbar:s.default.createElement(l.CheckBoxButton,{onClick:this.handleOnRequestBackground,on:U}),helperArea:s.default.createElement(s.default.Fragment,null,"\u542f\u7528\u540e",s.default.createElement("b",null,"\u91cd\u542f\u6269\u5c55"),"\u751f\u6548")})),s.default.createElement(h.Topic,{title:"\u65b0\u516c\u544a\u63a8\u9001",toolbar:s.default.createElement(l.CheckBoxButton,{onClick:this.handleOnToggleAnnouncementMessage,on:c})}),s.default.createElement(h.Topic,{title:s.default.createElement(s.default.Fragment,null,s.default.createElement(i.Icon,{icon:"cat-paw",size:16}),"B\u7ad9\u7ad9\u5185\u6d88\u606f\u63a8\u9001"),active:!g&&d,toolbar:s.default.createElement(l.CheckBoxButton,{disable:!Y||!j,onClick:this.handleOnSetBilibiliMessageOn,on:!!(z&&j&&Y)&&d})},s.default.createElement(h.Section,{title:"\u8bed\u97f3\u64ad\u62a5",description:"\u64ad\u62a5\u5185\u5bb9\u300c\u60a8\u6709\u65b0\u7684\u6d88\u606f\u300d",active:!!Y,toolbar:s.default.createElement(l.CheckBoxButton,{disable:!Y,onClick:this.handleOnSetBilibiliMessageSpeech,on:C})}),s.default.createElement(h.Section,{title:"\u9700\u8981\u63a8\u9001\u7684\u6d88\u606f\u7c7b\u522b",hasLogin:j,isVIP:z,needVIP:!0},s.default.createElement(l.CheckBoxGroup,{data:Object.keys(p).map(e=>({key:e,title:(0,u.__)("bilibiliMessage_"+e),on:p[e]})),onClick:this.handleOnToggleBilibiliMessageRangeType})),s.default.createElement(h.Section,{title:"\u63a8\u9001\u95f4\u9694",hasLogin:j,isVIP:z,needVIP:!0},s.default.createElement(l.RadioButtonGroup,{value:v,data:[{key:1,title:"1\u5206\u949f"},{key:3,title:"3\u5206\u949f"},{key:5,title:"5\u5206\u949f"},{key:10,title:"10\u5206\u949f"}],onClick:this.handleOnToggleBilibiliMessageDuration}))),s.default.createElement(h.Topic,{title:"B\u7ad9\u52a8\u6001\u66f4\u65b0\u68c0\u6d4b",active:S,toolbar:s.default.createElement(l.CheckBoxButton,{disable:!Y,onClick:this.handleOnSetVideoOn,on:!!Y&&S})},s.default.createElement(h.Section,{title:"\u663e\u793a\u5c01\u9762",active:!!Y,toolbar:s.default.createElement(l.CheckBoxButton,{disable:!Y,onClick:this.handleOnSetVideoShowCover,on:k})}),s.default.createElement(h.Section,{title:"\u5728\u6269\u5c55\u56fe\u6807\u4e0a\u663e\u793a\u65b0\u6295\u7a3f\u89d2\u6807",active:!!Y,toolbar:s.default.createElement(l.CheckBoxButton,{disable:!Y,onClick:this.handleOnSetVideoShowBadge,on:O})}),s.default.createElement(h.Section,{title:"\u4e0d\u5f39\u51fa\u6d88\u606f\u901a\u77e5",active:!!Y,toolbar:s.default.createElement(l.CheckBoxButton,{disable:!Y,onClick:this.handleOnSetVideoNoNotification,on:A})}),s.default.createElement(h.Section,{title:"\u63a8\u9001\u6d88\u606f\u7c7b\u522b",hasLogin:j},s.default.createElement(l.CheckBoxGroup,{data:o.DYNAMIC_NOTIFICATION_TYPE_MAP.map(({title:e,types:t},a)=>{const n=t.toString();return{key:n,title:e,on:_.includes(n)||_.includes(String(o.ALL_DYNAMIC_TYPE_MAP.ALL)),toggle:0===a||0!==a&&!_.includes(String(o.ALL_DYNAMIC_TYPE_MAP.ALL))}}),onClick:this.handleOnToggleSubscriptionDynamicType})),s.default.createElement(h.Section,{title:s.default.createElement(s.default.Fragment,null,s.default.createElement(i.Icon,{icon:"cat-paw",size:16}),"\u63a8\u9001\u8303\u56f4"),hasLogin:j,isVIP:z,needVIP:!0,active:z&&!!Y},s.default.createElement(l.RadioButtonGroup,{value:E,data:[{key:"all",title:"\u63a8\u9001\u6240\u6709\u5df2\u5173\u6ce8\u4e3b\u64ad\u7684\u89c6\u9891\u6295\u7a3f\u6d88\u606f"},{key:"specialAttention",title:"\u53ea\u63a8\u9001\u88ab\u7279\u522b\u5173\u6ce8\u4e86\u7684UP\u4e3b\u89c6\u9891\u6d88\u606f",description:"\u9700\u8981\u540c\u65f6\u5728b\u7ad9\u5173\u6ce8\u624d\u80fd\u6536\u5230\u63a8\u9001\u54e6"},{key:"whiteList",title:s.default.createElement(s.default.Fragment,null,"\u53ea\u63a8\u9001\u767d\u540d\u5355\u4e2d\u7684UP\u4e3b\u89c6\u9891\u6d88\u606f\uff0c\u5f53\u524d\u767d\u540d\u5355\u6709 ",s.default.createElement("b",null,N.split(",").filter(Boolean).length)," \u9879"),description:"\u53ea\u8981\u5728\u767d\u540d\u5355\u4e2d\uff0c\u5df2\u7ecf\u88ab\u52a0\u5230\u9ed1\u540d\u5355\u4e2d\u7684\u4e5f\u4f1a\u88ab\u63a8\u9001"}],onClick:this.handleOnSetVideoRangeType})),s.default.createElement(h.Section,{title:s.default.createElement(s.default.Fragment,null,s.default.createElement(i.Icon,{icon:"cat-paw",size:16}),"\u63a8\u9001\u95f4\u9694"),description:"\u4e24\u6b21\u63a8\u9001\u4e4b\u95f4\u81f3\u5c11\u4f1a\u95f4\u9694\u8fd9\u4e9b\u65f6\u95f4\uff0c\u9ed8\u8ba410\u5206\u949f",hasLogin:j,isVIP:z,needVIP:!0,active:z&&!!Y},s.default.createElement(l.RadioButtonGroup,{value:j&&z?x:10,data:[{key:1,title:"1\u5206\u949f"},{key:5,title:"5\u5206\u949f"},{key:10,title:"10\u5206\u949f"},{key:20,title:"20\u5206\u949f"},{key:30,title:"30\u5206\u949f"}],onClick:this.handleOnSetVideoDuration})),s.default.createElement(h.Section,{title:s.default.createElement(s.default.Fragment,null,s.default.createElement(i.Icon,{icon:"cat-paw",size:16}),"\u63a8\u9001\u663e\u793a\u6570\u91cf"),description:"\u9ed8\u8ba4\u63a8\u9001\u6bcf\u4e00\u6761",hasLogin:j,isVIP:z,needVIP:!0,active:z&&!!Y},s.default.createElement(l.RadioButtonGroup,{value:j&&z?y:"everyone",data:[{key:"everyone",title:"\u63a8\u9001\u6bcf\u4e00\u6761"},{key:"theLatestThree",title:"\u53ea\u63a8\u9001\u6700\u65b0\u7684\u4e09\u6761\u89c6\u9891\u6295\u7a3f\u6d88\u606f",description:"\u5982\u679c\u591a\u4e8e\u4e09\u6761\u5219\u9009\u62e9\u6700\u8fd1\u53d1\u5e03\u7684\u4e09\u6761"},{key:"merge",title:s.default.createElement(s.default.Fragment,null,"\u53ea\u63a8\u9001\u4e00\u6761\u663e\u793a\u6570\u91cf\u7684\u901a\u77e5\uff0c\u70b9\u51fb\u524d\u5f80",s.default.createElement("a",{className:"link",onClick:this.handleOnOpenVideoDynamicPage},"\u6295\u7a3f\u52a8\u6001"),"\u9875\u9762")}],onClick:this.handleOnSetVideoNumberType})),s.default.createElement(h.Section,{title:s.default.createElement(s.default.Fragment,null,s.default.createElement(i.Icon,{icon:"cat-paw",size:16}),"\u767d\u540d\u5355 (",N.split(", ").filter(Boolean).length,")"),description:"\u81ea\u52a8\u53bb\u9664\u91cd\u590d\u6dfb\u52a0\u7684UID",isVIP:z,needVIP:!0,active:"whiteList"===E&&!!Y&&z,hasLogin:j,helperArea:s.default.createElement(s.default.Fragment,null,s.default.createElement("b",null,"\u767d\u540d\u5355\u4f18\u5148\u7ea7\u9ad8\u4e8e\u9ed1\u540d\u5355\u548c\u52a9\u624b\u7279\u5173"),s.default.createElement("br",null),s.default.createElement("br",null),"\u5f53\u5931\u53bb\u9f20\u6807\u7126\u70b9\u65f6\u4f1a\u81ea\u52a8\u683c\u5f0f\u5316\u5e76\u8fc7\u6ee4\u91cd\u590d\u9879\u76ee",s.default.createElement("br",null),s.default.createElement("br",null),"\u4f7f\u7528",s.default.createElement("b",null,"\u82f1\u6587\u9017\u53f7"),"\u5c06\u6bcf\u4e2aUID\u5206\u9694\u5f00",s.default.createElement("br",null),s.default.createElement("br",null))},s.default.createElement(b,{placeholder:"\u8f93\u5165\u5e0c\u671b\u59cb\u7ec8\u63a8\u9001\u7684\u7528\u6237UID",value:N,onChange:this.handleOnChangeDynamicWhiteListTextArea,onBlur:this.handleOnBlurDynamicWhiteListTextArea})),s.default.createElement(h.Section,{title:s.default.createElement(s.default.Fragment,null,s.default.createElement(i.Icon,{icon:"cat-paw",size:16}),"\u9ed1\u540d\u5355 (",R.split(", ").filter(Boolean).length,")"),description:"\u81ea\u52a8\u53bb\u9664\u91cd\u590d\u6dfb\u52a0\u7684UID",isVIP:z,needVIP:!0,active:w&&!!Y&&z,hasLogin:j,toolbar:s.default.createElement(l.CheckBoxButton,{disable:!j||!Y,onClick:this.handleOnToggleUseVideoBlackList,on:!!j&&w}),helperArea:s.default.createElement(s.default.Fragment,null,"\u5f53\u5931\u53bb\u9f20\u6807\u7126\u70b9\u65f6\u4f1a\u81ea\u52a8\u683c\u5f0f\u5316\u5e76\u8fc7\u6ee4\u91cd\u590d\u9879\u76ee",s.default.createElement("br",null),s.default.createElement("br",null),"\u4f7f\u7528",s.default.createElement("b",null,"\u82f1\u6587\u9017\u53f7"),"\u5c06\u6bcf\u4e2aUID\u5206\u9694\u5f00",s.default.createElement("br",null),s.default.createElement("br",null))},s.default.createElement(b,{placeholder:"\u8f93\u5165\u5e0c\u671b\u5c4f\u853d\u63a8\u9001\u7684\u7528\u6237UID",value:R,onChange:this.handleOnChangeDynamicBlackListTextArea,onBlur:this.handleOnBlurDynamicBlackListTextArea}))),s.default.createElement(h.Topic,{title:"\u76f4\u64ad\u5f00\u64ad\u63a8\u9001 - \u9700\u767b\u5f55\u52a9\u624b\u8d26\u53f7",active:P,toolbar:s.default.createElement(l.CheckBoxButton,{disable:!Y,onClick:this.handleOnSetLiveOn,on:!!Y&&P})},s.default.createElement(h.Section,{title:"\u663e\u793a\u5c01\u9762",active:!!Y,toolbar:s.default.createElement(l.CheckBoxButton,{disable:!Y,onClick:this.handleOnSetLiveShowCover,on:T})}),s.default.createElement(h.Section,{title:s.default.createElement(s.default.Fragment,null,s.default.createElement(i.Icon,{icon:"cat-paw",size:16}),"\u63a8\u9001\u8303\u56f4"),hasLogin:j,isVIP:z,needVIP:!0,active:z&&!!Y},s.default.createElement(l.RadioButtonGroup,{value:z&&j?I:"all",data:[{key:"all",title:"\u63a8\u9001\u6240\u6709\u5df2\u5173\u6ce8\u4e3b\u64ad\u7684\u5f00\u64ad\u6d88\u606f"},{key:"specialAttention",title:"\u53ea\u63a8\u9001\u88ab\u7279\u522b\u5173\u6ce8\u4e86\u7684UP\u4e3b\u7684\u5f00\u64ad\u6d88\u606f",description:"\u9700\u8981\u540c\u65f6\u5728b\u7ad9\u5173\u6ce8\u624d\u80fd\u6536\u5230\u63a8\u9001\u54e6"},{key:"whiteList",title:s.default.createElement(s.default.Fragment,null,"\u53ea\u63a8\u9001\u767d\u540d\u5355\u4e2d\u7684UP\u4e3b\u7684\u5f00\u64ad\u6d88\u606f\uff0c\u5f53\u524d\u767d\u540d\u5355\u6709 ",s.default.createElement("b",null,F.split(",").filter(Boolean).length)," \u9879"),description:"\u53ea\u8981\u5728\u767d\u540d\u5355\u4e2d\uff0c\u5df2\u7ecf\u88ab\u52a0\u5230\u9ed1\u540d\u5355\u4e2d\u7684\u4e5f\u4f1a\u88ab\u63a8\u9001"}],onClick:this.handleOnSetLiveRangeType})),s.default.createElement(h.Section,{title:s.default.createElement(s.default.Fragment,null,s.default.createElement(i.Icon,{icon:"cat-paw",size:16}),"\u63a8\u9001\u95f4\u9694"),description:"\u4e24\u6b21\u63a8\u9001\u4e4b\u95f4\u81f3\u5c11\u4f1a\u95f4\u9694\u8fd9\u4e9b\u65f6\u95f4",hasLogin:j,isVIP:z,needVIP:!0,active:z&&!!Y},s.default.createElement(l.RadioButtonGroup,{value:j&&z?D:10,data:[{key:1,title:"1\u5206\u949f"},{key:5,title:"5\u5206\u949f"},{key:10,title:"10\u5206\u949f"}],onClick:this.handleOnSetLiveDuration})),s.default.createElement(h.Section,{title:s.default.createElement(s.default.Fragment,null,s.default.createElement(i.Icon,{icon:"cat-paw",size:16}),"\u767d\u540d\u5355 (",F.split(", ").filter(Boolean).length,")"),description:"\u81ea\u52a8\u53bb\u9664\u91cd\u590d\u6dfb\u52a0\u7684UID",hasLogin:j,isVIP:z,needVIP:!0,active:"whiteList"===I&&!!Y&&z,helperArea:s.default.createElement(s.default.Fragment,null,s.default.createElement("b",null,"\u767d\u540d\u5355\u4f18\u5148\u7ea7\u9ad8\u4e8e\u9ed1\u540d\u5355\u548c\u52a9\u624b\u7279\u5173"),s.default.createElement("br",null),s.default.createElement("br",null),"\u5f53\u5931\u53bb\u9f20\u6807\u7126\u70b9\u65f6\u4f1a\u81ea\u52a8\u683c\u5f0f\u5316\u5e76\u8fc7\u6ee4\u91cd\u590d\u9879\u76ee",s.default.createElement("br",null),s.default.createElement("br",null),"\u4f7f\u7528",s.default.createElement("b",null,"\u82f1\u6587\u9017\u53f7"),"\u5c06\u6bcf\u4e2aUID\u5206\u9694\u5f00",s.default.createElement("br",null),s.default.createElement("br",null))},s.default.createElement(b,{placeholder:"\u8f93\u5165\u5e0c\u671b\u59cb\u7ec8\u63a8\u9001\u7684\u7528\u6237UID",value:F,onChange:this.handleOnChangeLiveWhiteListTextArea,onBlur:this.handleOnBlurLiveWhiteListTextArea})),s.default.createElement(h.Section,{title:s.default.createElement(s.default.Fragment,null,s.default.createElement(i.Icon,{icon:"cat-paw",size:16}),"\u9ed1\u540d\u5355 (",V.split(", ").filter(Boolean).length,")"),description:"\u81ea\u52a8\u53bb\u9664\u91cd\u590d\u6dfb\u52a0\u7684UID",hasLogin:j,isVIP:z,needVIP:!0,active:B&&!!Y&&z,toolbar:s.default.createElement(l.CheckBoxButton,{disable:!j||!Y,onClick:this.handleOnToggleUseLiveBlackList,on:!!j&&B}),helperArea:s.default.createElement(s.default.Fragment,null,"\u5f53\u5931\u53bb\u9f20\u6807\u7126\u70b9\u65f6\u4f1a\u81ea\u52a8\u683c\u5f0f\u5316\u5e76\u8fc7\u6ee4\u91cd\u590d\u9879\u76ee",s.default.createElement("br",null),s.default.createElement("br",null),"\u4f7f\u7528",s.default.createElement("b",null,"\u82f1\u6587\u9017\u53f7"),"\u5c06\u6bcf\u4e2aUID\u5206\u9694\u5f00",s.default.createElement("br",null),s.default.createElement("br",null))},s.default.createElement(b,{placeholder:"\u8f93\u5165\u5e0c\u671b\u5c4f\u853d\u63a8\u9001\u7684\u7528\u6237UID",value:V,onChange:this.handleOnChangeLiveBlackListTextArea,onBlur:this.handleOnBlurLiveBlackListTextArea})))))}}v.contextType=p.MainStore,t["default"]=(0,c.withRouter)(v)},84816:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(53507),l=n(a(98777)),o=n(a(57689)),s=a(47532),r=n(a(635)),c=a(53671),d=a(28507),u=r.default.div`
  .load-order-list-btn {
    margin-left: 20px;
    vertical-align: bottom;
    font-size: 14px;

    .button-view {
      padding: 0 10px;
    }
  }
`;class h extends o.default.Component{constructor(e){super(e),this.state={orderList:[],redeemList:[],loaded:!1},this.handleOnClickLoadOrder=()=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"queryOrderAndRedeemList"},e=>{"string"!==typeof e?this.setState(Object.assign(Object.assign({},e),{loaded:!0})):i.Message.error(e)})}}componentDidMount(){}render(){const{orderList:e,redeemList:t,loaded:a}=this.state;return o.default.createElement(u,null,o.default.createElement(c.Title,{title:o.default.createElement(o.default.Fragment,null,"\u7528\u6237\u8ba2\u5355",a?null:o.default.createElement(i.Button,{className:"load-order-list-btn primary",onClick:this.handleOnClickLoadOrder},"\u70b9\u51fb\u52a0\u8f7d\u8ba2\u5355")),description:o.default.createElement(o.default.Fragment,null,"\u5982\u9700\u5f00\u7968\u8bf7\u5728\u652f\u4ed8\u6210\u529f\u540e30\u65e5\u5185",o.default.createElement("a",{href:"https://message.bilibili.com/#/whisper/mid1344117169",target:"_blank",rel:"noreferrer"},"\u79c1\u4fe1\u52a9\u624b\u732b"))}),o.default.createElement(c.Section,{title:"\u4ed8\u8d39\u8ba2\u5355\u5217\u8868"},e.length>0?e.map(e=>o.default.createElement(i.ListItem,{key:e.out_trade_no,title:"ACG\u52a9\u624b\u4f1a\u5458 "+e.duration+"\u5929",description:(0,l.default)(e.gmt_create).format("YYYY-MM-DD HH:mm:ss"),operation:o.default.createElement("span",null,"\uffe5 ",e.total_amount)})):"\u65e0\u6570\u636e"),o.default.createElement(c.Section,{title:"\u5151\u6362\u7801\u5217\u8868"},t.length>0?t.map(e=>o.default.createElement(i.ListItem,{key:e.code,title:e.code,description:`${e.generateType} / ${e.name} / ${(0,l.default)(e.createDateTime).format("YYYY-MM-DD HH:mm:ss")}`,operation:o.default.createElement("span",null,e.used?"\u5df2\u4f7f\u7528":e.active?"\u672a\u4f7f\u7528":"\u4e0d\u53ef\u7528")})):"\u65e0\u6570\u636e"))}}h.contextType=d.MainStore,t["default"]=(0,s.withRouter)(h)},62801:function(e,t,a){var n=this&&this.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=a(53507),o=(a(1693),i(a(57689))),s=a(37942),r=a(23642),c=a(47532),d=i(a(635)),u=a(53671),h=a(28507),p=a(29010),{FREE_NUMBER:g,MAX_NUMBER:m,FREE_MAX_LENGTH:f,VIP_MAX_LENGTH:b}=p.CUSTOM_WHISPER_MESSAGE,v=d.default.div`
  .list {
    .list-item {
      display: flex;
      align-items: center;
      width: 100%;
      height: 28px;

      & > span {

        &:first-of-type {
          width: 20px;
          flex-shrink: 0;
        }

        &:nth-child(2) {
          width: 70px;
        }
      }

      .text {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        flex-grow: 1;

        &.off {
          text-decoration: line-through;
        }
      }

      .action-box {
        display: flex;
        margin-left: 12px;

        .button {
          margin-right: 12px;

          &:last-of-type {
            margin-right: 0;
          }
        }
      }
    }
  }

  .whisper-message-editing-modal {
    width: 500px;

    .modal-body {
      display: flex;
      flex-direction: column;
      font-size: 14px;

      label {
        margin-bottom: 16px;

        &:last-of-type {
          margin-bottom: 0;
        }

        p {
          margin-top: 0;
          margin-bottom: 2px;
        }

        input {
          width: calc(100% - 22px);
          padding: 6px 10px;
          outline: none;
        }
      }

      section {
        margin: 0;

        & > .content {
          width: 100%;

          .title {
            font-size: 14px;
          }
        }
      }
    }
  }
`,C=d.default.textarea`
  width: calc(100% - 18px);
  min-height: 50px;
  padding: 8px;
  border: 1px solid #ccc;
`,S=function({index:e,info:t,onEditMessage:a,onDeleteMessage:n,onDragMove:i,onDrop:s}){const r=o.default.useCallback(()=>{a(Object.assign({index:e},t))},[t]),c=o.default.useCallback(()=>{n(e)},[e]);return o.default.createElement(E,{className:"list-item",index:e,onDragMove:i,onDrop:s},o.default.createElement("span",null,e+1,"."),o.default.createElement("span",{className:["text",t.on?"on":"off"].join(" ")},t.autoEnter?"[\u70b9\u51fb\u53d1\u9001] ":"",t.text),o.default.createElement("span",{className:"action-box"},o.default.createElement(l.Button,{onClick:r},"\u7f16\u8f91"),o.default.createElement(l.Button,{onClick:c},"\u5220\u9664")))},E=function(e){var{index:t,children:a,onDragMove:i,onDrop:l}=e,r=n(e,["index","children","onDragMove","onDrop"]);const c=o.default.useRef(null),[,d]=(0,s.useDrop)({accept:"sortable-list-item",hover(e,a){if(!c.current)return;const n=e.index,l=t;if(n===l)return;const o=c.current.getBoundingClientRect(),s=(o.bottom-o.top)/2,r=a.getClientOffset(),d=r.y-o.top;n<l&&d<s||n>l&&d>s||(i(n,l),e.index=l)}}),[{isDragging:u},h]=(0,s.useDrag)({item:{type:"sortable-list-item",index:t},collect:e=>({isDragging:e.isDragging()}),end(){l()}});return h(d(c)),o.default.createElement("div",Object.assign({ref:c,className:"sortable-list-item",style:{opacity:u?0:1}},r),a)};class y extends o.default.Component{constructor(e){super(e),this.state={customWhisperMessages:[],modalState:"add",showEditModal:!1,editingInfo:{index:"",on:!0,text:""}},this.menuInputCompositionStart=!1,this.customOrderChanged=!1,this.menuTextInputRef=o.default.createRef(),this.updateMenuList=()=>{chrome.runtime.sendMessage({target:"customWhisperMessage",event:"getMessages"},e=>{e&&this.setState({customWhisperMessages:e})})},this.handleOnCloseModal=()=>{this.setState({showEditModal:!1})},this.handleOnCreateNewMessage=()=>{const{customWhisperMessages:e}=this.state,{bhAccount:t}=this.context;return!(Object.values(e).length>=g&&Object.values(e).length<=m)||t&&t.isVIP?Object.values(e).length>=m?l.Message.info(`\u81ea\u5b9a\u4e49\u6d88\u606f\u6700\u591a\u53ea\u80fd\u52a0${m}\u6761\uff0c\u672a\u6765\u4f1a\u5f00\u653e\u66f4\u9ad8\u4e0a\u9650`):void this.setState({showEditModal:!0,modalState:"add",editingInfo:{index:e.length,text:"",on:!0,autoEnter:!1}}):this.context.handleOnClickShowPaymentModal()},this.onTextCompositionStart=()=>{this.menuInputCompositionStart=!0},this.onTextCompositionEnd=e=>{var t,a;this.menuInputCompositionStart=!1;const{editingInfo:n}=this.state,{hasLogin:i,bhAccount:o={}}=this.context,s=!!o&&o["isVIP"],r=s?b:f;return i?(null===(t=e.target)||void 0===t?void 0:t.value.length)>r?l.Message.error(`\u5b57\u6570${null===(a=e.target)||void 0===a?void 0:a.value.length}\uff0c\u5df2\u8d85\u8fc7\u4e0a\u9650${r}`):(n.text=e.target.value.slice(0,r),void this.setState({editingInfo:n})):l.Message.error("\u767b\u5f55\u52a9\u624b\u8d26\u53f7\u540e\u4f7f\u7528\u8be5\u529f\u80fd")},this.handOnConfirmUpdateMessage=()=>{const{editingInfo:e,modalState:t,customWhisperMessages:a}=this.state;e.text?chrome.runtime.sendMessage({target:"customWhisperMessage",event:"setMessage",index:e.index,on:e.on,text:e.text,autoEnter:e.autoEnter},e=>{e?(this.context.uploadSettings("customWhisperMessage"),this.updateMenuList(),this.setState({showEditModal:!1})):l.Message.error("\u63d2\u5165/\u66f4\u65b0\u81ea\u5b9a\u4e49\u6d88\u606f\u5931\u8d25")}):l.Message.error("\u8bf7\u8f93\u5165\u5185\u5bb9")},this.handleOnEditMessage=({index:e,text:t,on:a,autoEnter:n})=>{this.setState({showEditModal:!0,modalState:"edit",editingInfo:{index:e,text:t,on:a,autoEnter:n}})},this.handleOnDeleteCustomMessage=e=>{chrome.runtime.sendMessage({target:"customWhisperMessage",event:"deleteMessage",index:e},e=>{e&&(this.context.uploadSettings("customWhisperMessage"),this.updateMenuList())})},this.onChangeText=e=>{var t,a;const{editingInfo:n}=this.state,{hasLogin:i,bhAccount:o={}}=this.context;if(!i)return l.Message.error("\u767b\u5f55\u52a9\u624b\u8d26\u53f7\u540e\u4f7f\u7528\u8be5\u529f\u80fd");const s=!!o&&o["isVIP"],r=s?b:f;if((null===(t=e.target)||void 0===t?void 0:t.value.length)>r)return l.Message.error(`\u5b57\u6570${null===(a=e.target)||void 0===a?void 0:a.value.length}\uff0c\u5df2\u8d85\u8fc7\u4e0a\u9650${r}`);this.menuInputCompositionStart?n.text=e.target.value:n.text=e.target.value.slice(0,r),this.setState({editingInfo:n})},this.onChangeOn=()=>{const{editingInfo:e}=this.state;e.on=!e.on,this.setState({editingInfo:e})},this.onChangeAutoEnter=()=>{const{editingInfo:e}=this.state;e.autoEnter=!e.autoEnter,this.setState({editingInfo:e})},this.onDragMoveCustomMessage=(e,t)=>{if(e!==t){this.customOrderChanged=!0;const{customWhisperMessages:a}=this.state,n=a[e];a.splice(e,1),a.splice(t,0,n),this.setState({customWhisperMessages:a})}},this.onDropCustomMessage=()=>{this.customOrderChanged&&chrome.runtime.sendMessage({target:"customWhisperMessage",event:"setMessageList",list:this.state.customWhisperMessages},()=>{this.customOrderChanged=!1,this.context.uploadSettings("customWhisperMessage")})}}componentDidMount(){chrome.runtime.sendMessage({target:"customWhisperMessage",event:"getSetting"},({on:e,resizeRate:t})=>{this.setState({resizeRate:t})}),this.updateMenuList()}render(){const{customWhisperMessages:e,showEditModal:t,editingInfo:a,modalState:n}=this.state,{hasLogin:i,bhAccount:c={}}=this.context,d=!!c&&c["isVIP"];return o.default.createElement(v,null,o.default.createElement(u.Topic,{title:"\u6d88\u606f\u4e2d\u5fc3\u8bbe\u7f6e"},o.default.createElement("div",{className:"list-wrapper custom"},o.default.createElement(u.Section,{title:o.default.createElement(o.default.Fragment,null,o.default.createElement(l.Icon,{icon:"cat-paw",size:16}),"\u81ea\u5b9a\u4e49\u5feb\u6377\u6d88\u606f (",Object.values(e).length,"/",d?m:g,")"),hasLogin:i,toolbar:o.default.createElement(l.Button,{className:"add-btn",onClick:this.handleOnCreateNewMessage},"\u6dfb\u52a0"),helperArea:o.default.createElement(o.default.Fragment,null,o.default.createElement("b",null,"\u62d6\u52a8\u5bfc\u822a\u53ef\u4ee5\u8fdb\u884c\u6392\u5e8f"),o.default.createElement("br",null),o.default.createElement("br",null),"\u9ed8\u8ba4\u6d88\u606f\u6570\u91cf\u4e0a\u9650\uff1a3",o.default.createElement("br",null),o.default.createElement("b",null,"\u4f1a\u5458\u6d88\u606f\u6570\u91cf\u4e0a\u9650\uff1a15"),o.default.createElement("br",null),o.default.createElement("br",null),"\u9ed8\u8ba4\u6d88\u606f\u5b57\u7b26\u4e0a\u9650\uff1a30",o.default.createElement("br",null),o.default.createElement("b",null,"\u4f1a\u5458\u6d88\u606f\u5b57\u7b26\u4e0a\u9650\uff1a500"))},o.default.createElement("div",{className:"list"},o.default.createElement(s.DndProvider,{backend:r.HTML5Backend},Object.values(e).map((e,t)=>o.default.createElement(S,{index:t,key:e.text,info:e,onEditMessage:this.handleOnEditMessage,onDeleteMessage:this.handleOnDeleteCustomMessage,onDragMove:this.onDragMoveCustomMessage,onDrop:this.onDropCustomMessage}))))))),o.default.createElement(l.Modal,{open:t,className:"whisper-message-editing-modal",title:"add"===n?"\u65b0\u589e\u5feb\u6377\u6d88\u606f":"\u7f16\u8f91\u5feb\u6377\u6d88\u606f",onClickMask:this.handleOnCloseModal,buttons:o.default.createElement("div",{className:"btn-group"},o.default.createElement(l.Button,{onClick:this.handleOnCloseModal},"\u53d6\u6d88"),o.default.createElement(l.Button,{className:"confirm primary",onClick:this.handOnConfirmUpdateMessage},"\u786e\u8ba4"))},o.default.createElement("label",{from:"text"},o.default.createElement("p",null,"\u6d88\u606f\u5185\u5bb9 (\u4e0d\u957f\u4e8e",d?b:f,"\u4e2a\u5b57\u7b26)"),o.default.createElement(C,{id:"text",ref:this.menuTextInputRef,onChange:this.onChangeText,onCompositionStart:this.onTextCompositionStart,onCompositionEnd:this.onTextCompositionEnd,placeholder:`\u4e0d\u5927\u4e8e${d?b:f}\u4e2a\u4e2d\u6587\u6c49\u5b57\u5bbd\u5ea6`,value:a.text})),o.default.createElement(u.Section,{title:"\u70b9\u51fb\u76f4\u63a5\u53d1\u9001",active:a.autoEnter,toolbar:o.default.createElement(l.CheckBoxButton,{onClick:this.onChangeAutoEnter,on:a.autoEnter})}),o.default.createElement(u.Section,{title:"\u542f\u7528",active:a.on,toolbar:o.default.createElement(l.CheckBoxButton,{onClick:this.onChangeOn,on:a.on})})))}}y.contextType=h.MainStore,t["default"]=(0,c.withRouter)(y)},86013:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(53507),l=a(51920),o=a(29010),s=n(a(98777)),r=n(a(56058)),c=n(a(57689)),d=a(48723),u=a(47532),h=n(a(635)),p=a(555),g=a(53671),m=a(28507),f=(0,p.isFireFox)(),b=(0,h.default)(g.Page)`
  .modal {
    overflow: hidden;
  }

  .show-announcement-btn {
    margin-left: 20px;
    vertical-align: bottom;
    font-size: 14px;

    .button-view {
      padding: 0 10px;
    }
  }

  .reset-list {
    display: flex;
    flex-direction: column;

    .button {
      margin: 12px;
      padding: 0 12px;
      max-width: 200px;
      min-width: fit-content;
    }
  }
`,v=(h.default.div`
  margin-top: 24px;

  .report-btn {
    margin: 0 4px;
  }
`,h.default.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: var(--google-grey-50);
  border-radius: 4px;
  box-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.13), 0px 0px 2.9px rgba(0, 0, 0, 0.11);

  .avatar-wrapper {
    position: relative;

    .avatar {
      margin-right: 12px;
      width: 52px;
      height: 52px;
      border-radius: 50px;
    }
  }

  .info {
    h4, p {
      margin: 0;
    }

    h4 {
      margin-bottom: 4px;
      font-size: 16px;
    }

    p {
      font-size: 14px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .expire-date {
      margin-left: 12px;
      border: 1px solid var(--bilibili-pink);
      border-radius: 50px;
      background-color: #fff;

      .bilibili-helper-2-icon-cat-paw {
        width: 20px;
        text-align: center;
        transform: rotate(15deg) scale(0.8) translate(5px, -6px);
        margin: 0 9px 0 1px;
      }

      .bilibili-helper-vip {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        vertical-align: 2px;
        margin-right: 10px;
      }
    }
  }

  .action-btn-group {
    margin: 0 8px 0 auto;

    .button {
      margin-left: 8px;
      font-size: 12px;

      &:first-of-type {
        margin-left: 0;
      }
    }

    .login-btn {
      width: 70px;
    }
  }
`),C=(0,h.default)(g.Section)`
  .account {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    &:last-of-type {
      margin-bottom: 0;
    }

    .face {
      margin-right: 12px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
    }

    .info {
      .username {
        font-size: 14px;
      }

      .sign {
        margin: 0;
      }
    }

    .unbind-button {
      margin-left: auto;
      padding: 0 10px;
    }
  }

  .empty-list {
    font-size: 16px;
  }
`,S=h.default.div`
  position: relative;
  display: inline-block;
  text-align: center;
  padding: 8px;
  width: 50px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: var(--google-grey-50);
  cursor: pointer;
  transition: border-color .2s;

  &.selected {
    border-color: var(--bilibili-blue);

    &::after {
      content: '';
      position: absolute;
      right: 6px;
      bottom: 2px;
      display: block;
      width: 4px;
      height: 4px;
      background-color: var(--bilibili-blue);
      box-shadow: 4px 0 0 0 var(--bilibili-blue), 8px 0 0 0 var(--bilibili-blue),0px -4px 0 0 var(--bilibili-blue);
      transform: rotate(-45deg) scale(0.7);
    }
  }

  .cat-type {
    margin: 6px 0 0;
  }
`,E=(0,h.default)(d.HandleButton)`
`,y=r.default.get("autoSync2Cloud");class M extends c.default.Component{constructor(e){super(e),this.state={loading:!1,isLoginBilibiliAccount:!1,catType:"default",catTypeList:[],autoClose:!1,showWhenFullWiden:!1,showInInjectPlayer:!1,autoSync2Cloud:void 0===y||y,accountList:[]},this.handleOnClickUploadSettings=()=>{this.state.loading||this.setState({loading:!0},()=>{this.context.uploadSettings().then(e=>{e&&l.Message.info("\u914d\u7f6e\u4e0a\u4f20\u6210\u529f"),setTimeout(()=>this.setState({loading:!1}),3e3)})})},this.handleOnClickSyncSettings=()=>{this.state.loading||this.setState({loading:!0},()=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"downloadSettings"},e=>{e&&l.Message.info("\u914d\u7f6e\u540c\u6b65\u6210\u529f"),setTimeout(()=>this.setState({loading:!1}),3e3)})})},this.handleOnSelectCatType=e=>{e!==this.state.catType&&chrome.runtime.sendMessage({target:"cat",event:"setSetting",catType:e},()=>{this.context.uploadSettings("cat"),this.setState({catType:e})})},this.handleOnToggleHideCatWhenFullWiden=e=>{e!==this.state.showWhenFullWiden&&chrome.runtime.sendMessage({target:"cat",event:"setSetting",showWhenFullWiden:e},()=>{this.context.uploadSettings("cat"),this.setState({showWhenFullWiden:e})})},this.handleOnToggleShowInInjectPlayer=e=>{e!==this.state.showInInjectPlayer&&chrome.runtime.sendMessage({target:"cat",event:"setSetting",showInInjectPlayer:e},()=>{this.context.uploadSettings("cat"),this.setState({showInInjectPlayer:e})})},this.handleOnCatAutoClose=()=>{chrome.runtime.sendMessage({target:"cat",event:"setSetting",autoClose:!this.state.autoClose},()=>{this.context.uploadSettings("cat"),this.setState({autoClose:!this.state.autoClose})})},this.handleOnToggleSyncMode=()=>{r.default.set("autoSync2Cloud",!this.state.autoSync2Cloud),this.setState({autoSync2Cloud:!this.state.autoSync2Cloud},()=>{location.reload()})},this.handleOnGotoReport=()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://message.bilibili.com/#/whisper/mid1344117169"})},this.handleOnClickAddAccount=()=>{const{bilibiliMessageOn:e}=this.state,{bhAccount:t,hasLogin:a,handleOnClickShowLoginModal:n,sendPaymentMessage:i}=this.context;return a?e||t&&t.isVIP?(chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_toolbar",action:"click_bind_button"}),void chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"bind"})):i():n()},this.handleOnUnbind=(e,t)=>{e.stopPropagation(),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_unbind_account"}),chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"unbind",uid:t},()=>{this.updateList()})},this.handleOnResetCatPosition=e=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"config",action:"click_reset_cat_position"}),chrome.runtime.sendMessage({target:"cat",event:"resetPosition",type:e},e=>{l.Message.info("\u91cd\u7f6e"+(e?"\u6210\u529f":"\u5931\u8d25"))})},this.updateList=()=>{chrome.runtime.sendMessage({target:"bilibiliAccountController",event:"getAccountList"},e=>{e&&this.setState({accountList:e})})}}componentDidMount(){chrome.runtime.onMessage.addListener((e,t,a)=>{const{action:n}=e;return"boundAccount"===n&&this.updateList(),!0}),chrome.runtime.sendMessage({target:"cat",event:"getSetting"},e=>{this.setState({catType:e.catType,showWhenFullWiden:e.showWhenFullWiden,showInInjectPlayer:e.showInInjectPlayer,autoClose:e.autoClose})}),chrome.runtime.sendMessage({target:"cat",event:"getTypeList"},e=>{this.setState({catTypeList:e||[]})}),this.updateList()}render(){const{loading:e,catType:t,catTypeList:a,showWhenFullWiden:n,showInInjectPlayer:r,autoClose:d,autoSync2Cloud:u,accountList:h}=this.state,{hasLogin:p,bilibiliAccount:m,bhAccount:y,downloadingSettings:M,handleOnClickChangePassword:w,handleOnClickShowSignOutModal:x,handleOnClickShowLoginModal:k,handleOnClickShowAnnouncementModal:O,handleOnClickShowPaymentModal:A,handleOnClickShowBindEmailModal:_,handleOnClickShowFirefoxModal:P,isVIP:I,isSuperVIP:L}=this.context,B=m&&p?m.face:chrome.runtime.getURL("statics/images/bilibili-helper-cat-u-avatar-256.png");return c.default.createElement(b,null,c.default.createElement(g.Title,{title:c.default.createElement(c.default.Fragment,null,"\u6b22\u8fce\u4f7f\u7528\u300cACG\u52a9\u624b\u300d\u8bbe\u7f6e\u9875\u9762",c.default.createElement(l.Button,{className:"show-announcement-btn primary",onClick:O},"\u54d4\u54e9\u54d4\u54e9\u52a9\u624b\u66f4\u540d\u516c\u544a")),description:"\u4e00\u6b3e\u975e\u5b98\u65b9\u7684\u6d4f\u89c8\u5668\u6269\u5c55\u7a0b\u5e8f"}),c.default.createElement(g.Topic,{title:"\u8d26\u53f7\u8bbe\u7f6e"},c.default.createElement(g.Section,{helperArea:c.default.createElement(c.default.Fragment,null,c.default.createElement("b",null,"\u52a9\u624b\u8d26\u53f7\u4f1a\u968f\u7740B\u7ad9\u8d26\u53f7\u767b\u51fa\u800c\u9000\u51fa"),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("b",null,"\u9f20\u6807\u79fb\u52a8\u81f3\u4f1a\u5458\u79f0\u53f7\u4e0a\u505c\u7559\u6570\u79d2\u53ef\u67e5\u770b\u4f1a\u5458\u5230\u671f\u65f6\u95f4"),c.default.createElement("br",null),c.default.createElement("br",null),"\u8bbe\u7f6e\u529f\u80fd\u65f6\uff0c\u52a9\u624b\u4f1a\u81ea\u52a8\u4fdd\u5b58\u5e76\u4e0a\u4f20\u60a8\u7684\u8bbe\u7f6e\u7ed3\u679c",c.default.createElement("br",null),"\u6240\u4ee5\u8bbe\u7f6e\u5b8c\u540e\u5c31\u53ef\u4ee5\u7acb\u523b\u5173\u95ed\u8bbe\u7f6e\u9875\u9762")},c.default.createElement(v,null,c.default.createElement("div",{className:"avatar-wrapper"},c.default.createElement(l.Image,{className:"avatar",url:B,duration:0})),c.default.createElement("div",{className:"info"},c.default.createElement("h4",{className:"username"},m&&p?m.username:"\u5c1a\u672a\u767b\u5f55",y&&p&&(y.isVIP||y.isSuperVIP)&&y.identities.length>0?c.default.createElement("span",{className:"expire-date"},c.default.createElement(i.Icon,{icon:"cat-paw",size:16}),y.identities.map(e=>{const t=o.USER_IDENTITIES_NAME_MAP[e.name];return t?c.default.createElement("i",{key:e.name,className:"bilibili-helper-vip",title:(0,s.default)(e.to).format("YYYY-MM-DD")+" \u5230\u671f"},t):null}).filter(Boolean)):null),c.default.createElement("p",null,m&&p?M?"\u6b63\u5728\u540c\u6b65\u914d\u7f6e":u?"\u5df2\u542f\u7528\u8bbe\u7f6e\u540c\u6b65\u4e0e\u4e2a\u6027\u5316\u670d\u52a1":"":"\u767b\u5f55\u89e3\u9501\u66f4\u591a\u529f\u80fd\uff0c\u5e76\u5141\u8bb8\u8de8\u8bbe\u5907\u540c\u6b65\u60a8\u7684\u6570\u636e")),c.default.createElement("div",{className:"action-btn-group"},p?c.default.createElement(c.default.Fragment,null):null,p?c.default.createElement(c.default.Fragment,null,f?null:c.default.createElement(l.Button,{className:"open-payment-modal-btn border",onClick:A},y&&(y.isVIP||y.isSuperVIP)?"\u7eed\u8ba2\u4f1a\u5458":"\u8ba2\u9605\u4f1a\u5458"),y&&!y.email?c.default.createElement(l.Button,{className:"change-password-btn border",onClick:_},"\u7ed1\u5b9a\u90ae\u7bb1"):null,c.default.createElement(l.Button,{className:"change-password-btn border",onClick:w},"\u4fee\u6539\u5bc6\u7801"),c.default.createElement(l.Button,{className:"login-btn border",onClick:x},"\u9000\u51fa")):c.default.createElement(l.Button,{className:"login-btn primary",onClick:f?P:k},"\u767b\u5f55")))),c.default.createElement(g.Section,{title:"\u542f\u7528\u81ea\u52a8\u540c\u6b65\u529f\u80fd",toolbar:c.default.createElement(i.CheckBoxButton,{onClick:this.handleOnToggleSyncMode,on:u})})),c.default.createElement(g.Topic,{title:c.default.createElement(c.default.Fragment,null,c.default.createElement(i.Icon,{icon:"cat-paw",size:16}),"\u591a\u8d26\u53f7\u7cfb\u7edf"),description:"\u4f7f\u4f60\u80fd\u591f\u540c\u65f6\u4ee5\u4e0d\u540cb\u7ad9\u8d26\u53f7\u6d4f\u89c8\u5927\u90e8\u5206b\u7ad9\u9875\u9762",toolbar:h.length<5?c.default.createElement(l.Button,{className:"primary",onClick:this.handleOnClickAddAccount},"\u7ed1\u5b9a\u65b0\u8d26\u53f7"):null},c.default.createElement(C,{isVIP:I,hasLogin:p,needVIP:!0,helperArea:c.default.createElement(c.default.Fragment,null,"\u672c\u529f\u80fd\u6570\u636e\u4ec5\u4fdd\u5b58\u5728\u6d4f\u89c8\u5668\u672c\u5730\uff0c\u66f4\u6362\u6d4f\u89c8\u5668\u3001\u91cd\u65b0\u5b89\u88c5\u52a9\u624b\u6216\u6e05\u7406\u6d4f\u89c8\u5668\u90fd\u9700\u8981\u91cd\u65b0\u7ed1\u5b9a",c.default.createElement("br",null),c.default.createElement("br",null),"\u76ee\u524d\u7ed1\u5b9a\u4e0a\u9650\u4e3a ",c.default.createElement("b",null,"5"),"\uff0c\u5982\u9700\u66f4\u591a\u8bf7 ",c.default.createElement("a",{className:"report-btn",href:"#",onClick:this.handleOnGotoReport},"\u8054\u7cfb\u300c\u52a9\u624b\u732b\u300d"))},h.length>0?h.map(e=>c.default.createElement("div",{key:e.uid,className:"account"},c.default.createElement(l.Image,{className:"face",url:e.face}),c.default.createElement("div",{className:"info"},c.default.createElement("span",{className:"username"},e.username),c.default.createElement("p",{className:"sign"},e.sign)),c.default.createElement(l.Button,{className:"unbind-button primary",onClick:t=>this.handleOnUnbind(t,e.uid)},"\u53d6\u6d88\u7ed1\u5b9a"))):c.default.createElement("div",{className:"empty-list"},"\u6682\u65e0\u7ed1\u5b9a\u8d26\u53f7"))),c.default.createElement(g.Topic,{title:"\u52a9\u624b\u732b\u60ac\u6d6e\u7403\u8bbe\u7f6e"},c.default.createElement(g.Section,{title:"\u663e\u793a\u6837\u5f0f",columns:9,helperArea:c.default.createElement(c.default.Fragment,null,"\u52a9\u624b\u732b\u4f1a\u5728\u4e3b\u7ad9\u89c6\u9891\u9875\u9762\u548c\u76f4\u64ad\u95f4\u9875\u9762",c.default.createElement("b",null,"\u7f51\u9875\u5168\u5c4f"),"\u65f6\u4f1a\u81ea\u52a8\u534a\u900f\u660e\u5316",c.default.createElement("div",{className:"reset-list"},a.map(e=>c.default.createElement(l.Button,{key:e,className:"primary",onClick:()=>this.handleOnResetCatPosition(e)},"\u91cd\u7f6e\u52a9\u624b\u732b\u5728\u300c",e,"\u300d\u7684\u4f4d\u7f6e"))))},c.default.createElement(S,{className:"default"===t?"selected":"",onClick:()=>this.handleOnSelectCatType("default")},c.default.createElement(E,{icon:"cat",size:24,className:["handle-button","initialized","default"].filter(Boolean).join(" ")}),c.default.createElement("p",{className:"cat-type"},"\u9ed8\u8ba4")),c.default.createElement(S,{className:"pinkCat"===t?"selected":"",onClick:()=>this.handleOnSelectCatType("pinkCat")},c.default.createElement(E,{icon:"cat",size:24,className:["handle-button","initialized","pinkCat"].filter(Boolean).join(" ")}),c.default.createElement("p",{className:"cat-type"},"\u7c89\u732b")),c.default.createElement(S,{className:"blackCat"===t?"selected":"",onClick:()=>this.handleOnSelectCatType("blackCat")},c.default.createElement(E,{icon:"cat",size:24,className:["handle-button","initialized","blackCat"].filter(Boolean).join(" ")}),c.default.createElement("p",{className:"cat-type"},"\u9ed1\u732b")),c.default.createElement(S,{className:"translucentPink"===t?"selected":"",onClick:()=>this.handleOnSelectCatType("translucentPink")},c.default.createElement(E,{icon:"cat",size:24,className:["handle-button","initialized","translucentPink"].filter(Boolean).join(" ")}),c.default.createElement("p",{className:"cat-type"},"\u900f\u660e\u7c89")),c.default.createElement(S,{className:"translucentWhite"===t?"selected":"",onClick:()=>this.handleOnSelectCatType("translucentWhite")},c.default.createElement(E,{icon:"cat",size:24,className:["handle-button","initialized","translucentWhite"].filter(Boolean).join(" ")}),c.default.createElement("p",{className:"cat-type"},"\u900f\u660e\u7c89\u767d"))),c.default.createElement(g.Section,{title:"\u4e3b\u7ad9\u89c6\u9891\u7f51\u9875\u5168\u5c4f\u65f6\u663e\u793a",active:n,toolbar:c.default.createElement(i.CheckBoxButton,{onClick:()=>this.handleOnToggleHideCatWhenFullWiden(!n),on:n})}),c.default.createElement(g.Section,{title:"\u81ea\u52a8\u5173\u95ed\u52a9\u624b\u732b\u7a97\u53e3",toolbar:c.default.createElement(i.CheckBoxButton,{onClick:this.handleOnCatAutoClose,on:d})})))}}M.contextType=m.MainStore,t["default"]=(0,u.withRouter)(M)},96676:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var i=Object.getOwnPropertyDescriptor(t,a);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,i)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return i(t,e),t},o=this&&this.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(51920),c=a(65033),d=a(1693),u=l(a(57689)),h=a(47532),p=s(a(635)),g=a(555),m=(s(a(56058)),a(53671)),f=a(70689),b=a(37942),v=a(23642),C=a(28507),S=p.default.div`
  .list-wrapper {
    //max-width: 700px;
    margin-bottom: 22px;

    .add-btn {
      background-color: var(--bilibili-blue);
      color: var(--bilibili-gray);
    }

    .list {
      .list-item {
        display: flex;
        align-items: center;
        width: 100%;
        height: 28px;

        & > span {

          &:first-of-type {
            width: 80px;
            flex-shrink: 0;
          }

          &:nth-child(2) {
            width: 70px;
          }
        }

        .url {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          flex-grow: 1;
        }

        .action-box {
          display: flex;
          margin-left: 12px;

          .button {
            margin-right: 12px;

            &:last-of-type {
              margin-right: 0;
            }
          }
        }
      }
    }
  }

  .menu-editing-modal {
    width: 500px;

    .modal-body {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 16px;

        &:last-of-type {
          margin-bottom: 0;
        }

        p {
          margin-top: 0;
          margin-bottom: 2px;
        }

        input {
          width: calc(100% - 22px);
          padding: 6px 10px;
          outline: none;
        }
      }
    }

    .btn-group {
      .button {
        margin-left: 12px;

        &:first-of-type {
          margin-left: 0;
        }
      }

      .confirm {
        background-color: var(--bilibili-blue);
        color: var(--bilibili-gray);
      }
    }
  }

  .range-section {
    .body {
      .resize-change-range {
        display: inline-block;
        width: 100px;
        font-size: 14px;
      }

      .range {
        width: 210px;
        vertical-align: sub;
      }
    }
  }
`,E=function(e){var{index:t,children:a,onDragMove:n,onDrop:i}=e,l=o(e,["index","children","onDragMove","onDrop"]);const s=u.default.useRef(null),[,r]=(0,b.useDrop)({accept:"sortable-list-item",hover(e,a){if(!s.current)return;const i=e.index,l=t;if(i===l)return;const o=s.current.getBoundingClientRect(),r=(o.bottom-o.top)/2,c=a.getClientOffset(),d=c.y-o.top;i<l&&d<r||i>l&&d>r||(n(i,l),e.index=l)}}),[{isDragging:c},d]=(0,b.useDrag)({item:{type:"sortable-list-item",index:t},collect:e=>({isDragging:e.isDragging()}),end(){i()}});return d(r(s)),u.default.createElement("div",Object.assign({className:"sortable-list-item",ref:s,style:{opacity:c?0:1}},l),a)},y=function({index:e,info:t,onEditMenu:a,onDeleteMenu:n,onDragMove:i,onDrop:l}){const o=u.default.useCallback(()=>{a(Object.assign({index:e},t))},[t]),s=u.default.useCallback(()=>{n(e)},[e]);return u.default.createElement(E,{className:"list-item",index:e,onDragMove:i,onDrop:l},u.default.createElement("span",null,t.title),u.default.createElement("span",{className:"url"},t.url),u.default.createElement("span",{className:"action-box"},u.default.createElement(r.Button,{onClick:o},"\u7f16\u8f91"),u.default.createElement(r.Button,{onClick:s},"\u5220\u9664")))};class M extends u.default.Component{constructor(e){super(e),this.state={sectionShow:[],showTag:!0,resizeRate:1,videoOpenMethod:"direct",activeIfExist:!1,temporaryShowLatestSection:!1,homeContentType:"default",homeShowCarousel:!0,homeOpenMethod:"recentVideo",homeShowLiveBar:!0,homeVideoType:"recentVideo",liveOpenMethod:"direct",options:[],custom:[],openEditModal:!1,modalState:"add",editingInfo:{index:"",title:"",url:""},columns:1,videoCardType:"simple"},this.sectionOrderChanged=!1,this.systemMenuOrderChanged=!1,this.customMenuOrderChanged=!1,this.menuInputCompositionStart=!1,this.menuTitleInputRef=u.default.createRef(),this.menuUrlInputRef=u.default.createRef(),this.handleOnSetResizeRate=e=>{e.persist();const t=+e.target.value;this.setState({resizeRate:t},()=>{chrome.runtime.sendMessage({target:"popup",event:"setSetting",resizeRate:t},()=>{this.context.uploadSettings("popup")})})},this.handleOnClickSectionShow=(e,t)=>{const{sectionShow:a}=this.state,n=[...a],i=a.find(({key:t})=>t===e);i.on=t,chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",sectionShow:n},e=>{e&&(this.context.uploadSettings("popupMain"),this.setState({sectionShow:n}))})},this.handleOnClickTagShow=()=>{const{showTag:e}=this.state;chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",showTag:!e},t=>{t&&(this.context.uploadSettings("popupMain"),this.setState({showTag:!e}))})},this.handleOnClickTemporaryShowLatestSection=()=>{const{temporaryShowLatestSection:e}=this.state;chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",temporaryShowLatestSection:!e},t=>{t&&(this.context.uploadSettings("popupMain"),this.setState({temporaryShowLatestSection:!e}))})},this.handleOnMouseUpResizeRate=e=>{e.persist()},this.handleOnSetColumns=e=>{const{columns:t}=this.state;t!==e&&chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",columns:+e},()=>{this.context.uploadSettings("popupMain"),this.setState({columns:+e})})},this.handleOnSetVideoCardType=e=>{const{videoCardType:t}=this.state;t!==e&&chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",videoCardType:e},()=>{this.context.uploadSettings("popupMain"),this.setState({videoCardType:e})})},this.handleOnSetActiveIfExist=()=>{const{activeIfExist:e}=this.state;chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",activeIfExist:!e},()=>{this.context.uploadSettings("popupMain"),this.setState({activeIfExist:!e})})},this.handleOnSetVideoOpenMethod=e=>{this.state.videoOpenMethod!==e&&chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",videoOpenMethod:e},()=>{this.context.uploadSettings("popupMain"),this.setState({videoOpenMethod:e})})},this.handleOnSetHomeVideoType=e=>{this.state.homeVideoType!==e&&chrome.runtime.sendMessage({target:"mainHome",event:"setSetting",videoType:e},()=>{this.context.uploadSettings("mainHome"),chrome.runtime.sendMessage({target:"mainHome",event:"clearPopupScrollPosition"}),this.setState({homeVideoType:e})})},this.handleOnSetHomeShowLiveBar=()=>{chrome.runtime.sendMessage({target:"mainHome",event:"setSetting",showLiveBar:!this.state.homeShowLiveBar},()=>{this.context.uploadSettings("mainHome"),this.setState({homeShowLiveBar:!this.state.homeShowLiveBar})})},this.updateMenuList=()=>{chrome.runtime.sendMessage({target:"popupMenu",event:"getMenuList"},e=>{e&&this.setState(e)})},this.handleOnClickSystemMenu=(e,t)=>{chrome.runtime.sendMessage({target:"popupMenu",event:"setSystemMenuState",key:e,on:t},e=>{this.context.uploadSettings("popupMenu"),e&&this.updateMenuList()})},this.handleOnCreateNewMenu=()=>{const{custom:e}=this.state,{bhAccount:t}=this.context;return!(Object.values(e).length>=10&&Object.values(e).length<=10)||t&&t.isVIP?Object.values(e).length>=10?r.Message.info("\u81ea\u5b9a\u4e49\u5bfc\u822a\u6700\u591a\u53ea\u80fd\u52a010\u6761\uff0c\u672a\u6765\u4f1a\u5f00\u653e\u66f4\u9ad8\u4e0a\u9650"):void this.setState({openEditModal:!0,modalState:"add",editingInfo:{index:e.length,title:"",url:""}}):this.context.handleOnClickShowPaymentModal()},this.handleOnEditMenu=({index:e,title:t,url:a})=>{this.setState({openEditModal:!0,modalState:"edit",editingInfo:{index:e,title:t,url:a}})},this.handleOnCloseModal=()=>{this.setState({openEditModal:!1})},this.handOnConfirmUpdateMenu=()=>{const{editingInfo:e,modalState:t,custom:a}=this.state;e.title&&e.url&&new Promise((n,i)=>{if("add"===t){const t=a.find(({title:t})=>t===e.title);t&&0!==t.length?i():n()}else n()}).then(()=>{chrome.runtime.sendMessage({target:"popupMenu",event:"updateCustomMenu",index:e.index,title:e.title,url:e.url},e=>{e&&(this.context.uploadSettings("popupMenu"),this.updateMenuList(),this.setState({openEditModal:!1}))})})},this.handleOnDeleteCustomMenu=e=>{chrome.runtime.sendMessage({target:"popupMenu",event:"deleteCustomMenu",index:e},e=>{e&&(this.context.uploadSettings("popupMenu"),this.updateMenuList())})},this.onChangeTitle=e=>{const{editingInfo:t}=this.state;this.menuInputCompositionStart?t.title=e.target.value:t.title=e.target.value.slice(0,6),this.setState({editingInfo:t})},this.onTitleCompositionStart=()=>{this.menuInputCompositionStart=!0},this.onTitleCompositionEnd=e=>{this.menuInputCompositionStart=!1;const{editingInfo:t}=this.state;t.title=e.target.value.slice(0,6),this.setState({editingInfo:t})},this.onChangeURL=e=>{const{editingInfo:t}=this.state;this.menuInputCompositionStart?t.url=e.target.value:t.url=e.target.value.slice(0,256),this.setState({editingInfo:t})},this.onURLCompositionStart=()=>{this.menuInputCompositionStart=!0},this.onURLCompositionEnd=e=>{this.menuInputCompositionStart=!1;const{editingInfo:t}=this.state;t.url=e.target.value.slice(0,256),this.setState({editingInfo:t})},this.onDragMoveSection=(e,t)=>{if(e!==t){this.sectionOrderChanged=!0;const{sectionShow:a}=this.state,n=a[e];a.splice(e,1),a.splice(t,0,n),this.setState({sectionShow:a})}},this.onDropSection=()=>{this.sectionOrderChanged&&chrome.runtime.sendMessage({target:"popupMain",event:"setSetting",sectionShow:this.state.sectionShow},()=>{this.sectionOrderChanged=!1,this.context.uploadSettings("popupMain")})},this.onDragMoveSystemMenu=(e,t)=>{if(e!==t){this.systemMenuOrderChanged=!0;const{options:a}=this.state,n=a[e];a.splice(e,1),a.splice(t,0,n),this.setState({options:a})}},this.onDropSystemMenu=()=>{this.systemMenuOrderChanged&&chrome.runtime.sendMessage({target:"popupMenu",event:"setOptionsMenuList",list:this.state.options},()=>{this.systemMenuOrderChanged=!1,this.context.uploadSettings("popupMenu")})},this.onDragMoveCustomMenu=(e,t)=>{if(e!==t){this.customMenuOrderChanged=!0;const{custom:a}=this.state,n=a[e];a.splice(e,1),a.splice(t,0,n),this.setState({custom:a})}},this.onDropCustomMenu=()=>{this.customMenuOrderChanged&&chrome.runtime.sendMessage({target:"popupMenu",event:"setCustomMenuList",list:this.state.custom},()=>{this.customMenuOrderChanged=!1,this.context.uploadSettings("popupMenu")})},this.handleOnClickGotoBrowserShortcuts=()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"chrome://extensions/shortcuts"})}}componentDidMount(){chrome.runtime.sendMessage({target:"popup",event:"getSetting"},({resizeRate:e})=>{this.setState({resizeRate:e})}),chrome.runtime.sendMessage({target:"mainHome",event:"getSetting"},({contentType:e,openMethod:t,showCarousel:a,showLiveBar:n,videoType:i})=>{this.setState({homeContentType:e,homeOpenMethod:t,homeShowCarousel:a,homeShowLiveBar:n,homeVideoType:i})}),chrome.runtime.sendMessage({target:"mainLive",event:"getSetting"},({openMethod:e})=>{this.setState({liveOpenMethod:e})}),chrome.runtime.sendMessage({target:"popupMain",event:"getSetting"},({columns:e,videoCardType:t,sectionShow:a,showTag:n,videoOpenMethod:i,activeIfExist:l,temporaryShowLatestSection:o})=>{this.setState({columns:e,videoCardType:t,sectionShow:a,showTag:n,videoOpenMethod:i,activeIfExist:l,temporaryShowLatestSection:o})}),this.updateMenuList()}render(){const{resizeRate:e,sectionShow:t,videoOpenMethod:a,activeIfExist:n,showTag:i,homeOpenMethod:l,homeVideoType:s,homeShowLiveBar:h,homeShowCarousel:p,liveOpenMethod:C,options:M,custom:w,openEditModal:x,modalState:k,editingInfo:O,columns:A,videoCardType:_,temporaryShowLatestSection:P}=this.state,{hasLogin:I,bhAccount:L={}}=this.context,B=!!L&&L["isVIP"],D=t.reduce((e,{on:t})=>(e+=t?1:0,e),0);return u.default.createElement(S,null,u.default.createElement(f.Title,{title:"\u5e94\u7528\u7a0b\u5e8f\u5f39\u7a97\u8bbe\u7f6e"}),u.default.createElement(m.Topic,{title:"\u6269\u5c55\u5f39\u7a97\u901a\u7528\u8bbe\u7f6e"},u.default.createElement(m.Section,{className:"range-section",title:"\u7a97\u53e3\u7f29\u653e\u6bd4\u4f8b\u8c03\u8282",description:"\u70b9\u51fb\u540e\u53ef\u4ee5\u5de6\u53f3\u65b9\u5411\u952e\u8c03\u8282\uff0c\u9ed8\u8ba41x",helperArea:"\u5c06\u6269\u5c55\u5f39\u7a97\u8c03\u6574\u5230\u559c\u6b22\u7684\u5927\u5c0f"},u.default.createElement("div",null,u.default.createElement("span",{className:"resize-change-range"},e,"x"),u.default.createElement(r.Range,{value:e,max:3,min:.1,step:.02,onChange:this.handleOnSetResizeRate}))),u.default.createElement(m.Section,{title:"5\u5206\u949f\u5185\u5c55\u793a\u4e0a\u4e00\u6b21\u67e5\u770b\u7684\u677f\u5757",toolbar:u.default.createElement(d.CheckBoxButton,{onClick:this.handleOnClickTemporaryShowLatestSection,on:P})}),u.default.createElement(m.Section,{title:"\u6269\u5c55\u5f39\u7a97\u5feb\u6377\u952e\u8bbe\u7f6e",toolbar:u.default.createElement(r.Button,{className:"primary",onClick:this.handleOnClickGotoBrowserShortcuts},"\u524d\u5f80\u8bbe\u7f6e")})),u.default.createElement(m.Topic,{title:"\u677f\u5757\u901a\u7528\u8bbe\u7f6e"},u.default.createElement(m.Section,{title:"\u76f4\u63a5\u8df3\u8f6c\u5230\u5df2\u5b58\u5728\u7684\u9875\u9762",toolbar:u.default.createElement(d.CheckBoxButton,{onClick:this.handleOnSetActiveIfExist,on:n}),helperArea:"\u6682\u65f6\u65e0\u6cd5\u5904\u7406\u76f4\u64ad\u95f4\u77ed\u53f7\u81ea\u52a8\u91cd\u5b9a\u5411\u5bfc\u81f4\u7684\u91cd\u590d\u6253\u5f00\u95ee\u9898"}),u.default.createElement(m.Section,{title:"\u89c6\u9891\u5361\u7247\u663e\u793a\u4e3b\u9898\u6807\u7b7e",toolbar:u.default.createElement(d.CheckBoxButton,{onClick:this.handleOnClickTagShow,on:i})}),u.default.createElement(m.Section,{title:"\u5185\u5bb9\u5c55\u793a\u5217\u6570"},u.default.createElement(d.RadioButtonGroup,{value:A,data:[{key:1,title:"\u4e00\u5217\u5e03\u5c40"},{key:2,title:"\u4e24\u5217\u5e03\u5c40"}],onClick:this.handleOnSetColumns})),u.default.createElement(m.Section,{title:"\u89c6\u9891\u5361\u7247\u98ce\u683c"},u.default.createElement(d.RadioButtonGroup,{value:_,data:[{key:"simple",title:"\u7cbe\u7b80\u7684\u89c6\u9891\u5217\u8868\uff0c\u53ea\u6709\u6807\u9898\u3001UP\u4e3b\u548c\u8f83\u5c0f\u7684\u5c01\u9762"},{key:"old",title:"\u7b80\u7ea6\u89c6\u9891\u5361\u7247\uff0c\u6807\u9898\u548c\u5c01\u9762\u4e00\u4f53\u5f0f\u5c55\u793a"},{key:"new",title:"\u8be6\u7ec6\u89c6\u9891\u5361\u7247\uff0c\u6807\u9898\u4e0e\u5c01\u9762\u5206\u79bb"}],onClick:this.handleOnSetVideoCardType})),u.default.createElement(m.Section,{title:u.default.createElement(u.default.Fragment,null,u.default.createElement(r.Icon,{icon:"cat-paw",size:16}),"\u6253\u5f00\u65b9\u5f0f"),isVIP:B,active:B,needVIP:!0,hasLogin:I,helperArea:u.default.createElement("b",null,"\u8be5\u9009\u9879\u5728\u706b\u72d0\u6d4f\u89c8\u5668\u4e2d\u53ea\u80fd\u56fa\u5b9a\u4e3a\u300c\u9759\u9ed8\u6253\u5f00\u300d\u65b9\u5f0f")},u.default.createElement(d.RadioButtonGroup,{value:B?a:"direct",data:[{key:"direct",title:"\u76f4\u63a5\u6253\u5f00"},{key:"silent",title:"\u9759\u9ed8\u6253\u5f00",description:"\u5728\u6269\u5c55\u5f39\u7a97\u6253\u5f00\u7f51\u9875\u65f6\u7a97\u53e3\u4ecd\u4fdd\u6301\u6253\u5f00"}],onClick:this.handleOnSetVideoOpenMethod})),u.default.createElement(m.Section,{title:u.default.createElement(u.default.Fragment,null,u.default.createElement(r.Icon,{icon:"cat-paw",size:16}),"\u53ef\u9009\u677f\u5757"),description:"\u81f3\u5c11\u9009\u62e9\u4e24\u4e2a\u677f\u5757",columns:1,isVIP:B,needVIP:!0,active:B,hasLogin:I,helperArea:u.default.createElement("b",null,"\u62d6\u52a8\u5bfc\u822a\u53ef\u4ee5\u8fdb\u884c\u6392\u5e8f")},u.default.createElement(b.DndProvider,{backend:v.HTML5Backend},t.map(({key:e,on:t,toggle:a=!0},n)=>u.default.createElement(E,{key:e,index:n,onDragMove:this.onDragMoveSection,onDrop:this.onDropSection},u.default.createElement(d.ListItem,{key:e,title:(0,g.__)("popupMain_"+e),onClick:()=>D<=2&&t?null:this.handleOnClickSectionShow(e,!t),frontOperation:u.default.createElement(d.CheckboxRect,{active:t,disabled:D<=2&&t})})))))),u.default.createElement(m.Topic,{title:"\u7efc\u5408\u677f\u5757\u8bbe\u7f6e"},u.default.createElement(m.Section,{title:"\u9ed8\u8ba4\u663e\u793a\u5206\u7c7b"},u.default.createElement(d.RadioButtonGroup,{value:s||"recentVideo",data:[{key:"home",title:"\u9996\u9875\u70ed\u95e8",description:"\u9996\u9875\u7f6e\u9876\u548c\u7efc\u5408\u70ed\u95e8\u89c6\u9891"},{key:"recentVideo",title:"\u6700\u8fd1\u6295\u7a3f"}],onClick:this.handleOnSetHomeVideoType})),u.default.createElement(m.Section,{title:"\u5c55\u793a\u76f4\u64ad\u680f",toolbar:u.default.createElement(d.CheckBoxButton,{onClick:this.handleOnSetHomeShowLiveBar,on:h})})),u.default.createElement(m.Topic,{title:"\u5bfc\u822a\u680f\u8bbe\u7f6e"},u.default.createElement("div",{className:"list-wrapper system"},u.default.createElement(m.Section,{title:"\u7cfb\u7edf\u9884\u8bbe",columns:1,helperArea:u.default.createElement("b",null,"\u62d6\u52a8\u5bfc\u822a\u53ef\u4ee5\u8fdb\u884c\u6392\u5e8f")},u.default.createElement(b.DndProvider,{backend:v.HTML5Backend},M.map(e=>{var{needLogin:t,description:a=""}=e,n=o(e,["needLogin","description"]);return Object.assign(Object.assign({},n),{description:a+(t?" \u9700\u8981\u767b\u5f55":"")})}).map((e,t)=>{const{key:a,title:n=null,description:i=null,on:l=!1,toggle:o=!0}=e,s={};return s.frontOperation=u.default.createElement(d.CheckboxRect,{disabled:!o,active:l?1:0}),u.default.createElement(E,{key:a,index:t,onDragMove:this.onDragMoveSystemMenu,onDrop:this.onDropSystemMenu},u.default.createElement(d.ListItem,Object.assign({title:n,description:i,onClick:!!o&&(()=>this.handleOnClickSystemMenu(a,!l))},s)))})))),u.default.createElement("div",{className:"list-wrapper custom"},u.default.createElement(m.Section,{title:u.default.createElement(u.default.Fragment,null,u.default.createElement(r.Icon,{icon:"cat-paw",size:16}),"\u81ea\u5b9a\u4e49\u5bfc\u822a (",Object.values(w).length,"/",B?10:5,")"),toolbar:u.default.createElement(r.Button,{className:"add-btn",onClick:this.handleOnCreateNewMenu},"\u6dfb\u52a0"),helperArea:u.default.createElement(u.default.Fragment,null,u.default.createElement("b",null,"\u62d6\u52a8\u5bfc\u822a\u53ef\u4ee5\u8fdb\u884c\u6392\u5e8f"),u.default.createElement("br",null),u.default.createElement("br",null))},u.default.createElement("div",{className:"list"},u.default.createElement(b.DndProvider,{backend:v.HTML5Backend},Object.values(w).map((e,t)=>u.default.createElement(y,{index:t,key:e.title,info:e,onEditMenu:this.handleOnEditMenu,onDeleteMenu:this.handleOnDeleteCustomMenu,onDragMove:this.onDragMoveCustomMenu,onDrop:this.onDropCustomMenu}))))))),u.default.createElement(r.Modal,{open:x,className:"menu-editing-modal",title:"add"===k?"\u65b0\u589e\u5feb\u6377\u5bfc\u822a":"\u7f16\u8f91\u5feb\u6377\u5bfc\u822a",onClickMask:this.handleOnCloseModal,buttons:u.default.createElement("div",{className:"btn-group"},u.default.createElement(r.Button,{onClick:this.handleOnCloseModal},"\u53d6\u6d88"),u.default.createElement(r.Button,{className:"confirm",onClick:this.handOnConfirmUpdateMenu},"\u786e\u8ba4"))},u.default.createElement("label",{from:"title"},u.default.createElement("p",null,"\u5bfc\u822a\u6807\u9898 (\u4e0d\u957f\u4e8e10\u4e2a\u5b57\u7b26)"),u.default.createElement(c.Input,{id:"title",ref:this.menuTitleInputRef,onChange:this.onChangeTitle,onCompositionStart:this.onTitleCompositionStart,onCompositionEnd:this.onTitleCompositionEnd,placeholder:"\u4e0d\u80fd\u91cd\u590d, \u4e0d\u5927\u4e8e4\u4e2a\u4e2d\u6587\u6c49\u5b57\u5bbd\u5ea6",value:O.title})),u.default.createElement("label",{from:"url"},u.default.createElement("p",null,"\u8df3\u8f6c\u5730\u5740 (\u4e0d\u957f\u4e8e256\u4e2a\u5b57\u7b26)"),u.default.createElement(c.Input,{id:"url",ref:this.menuUrlInputRef,onChange:this.onChangeURL,onCompositionStart:this.onURLCompositionStart,onCompositionEnd:this.onURLCompositionEnd,placeholder:"\u8f93\u5165\u5bfc\u822a\u680f\u8df3\u8f6c\u7684\u76ee\u6807\u94fe\u63a5",value:O.url}))))}}M.contextType=C.MainStore,t["default"]=(0,h.withRouter)(M)},35453:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(51920),l=n(a(57689)),o=a(47532),s=n(a(635)),r=a(53671),c=a(55992),d=a(58651),u=a(60998),h=a(28507),p=a(70689),g=a(37942),m=a(23642),f=(0,s.default)(r.Page)`
  overflow: auto;

  .add-btn {
    background-color: var(--bilibili-blue);
    color: var(--bilibili-gray);
  }

  .follow {
    margin-right: 8px;
  }
`,b=((0,s.default)(i.Modal)`
  width: 500px;
`,s.default.div`
  .search-bar {
    display: flex;

    input {
      flex-grow: 1;
      outline: none;
      padding: 6px 10px;
      margin-right: 12px;
    }

    .button {
      flex-shrink: 0;
      vertical-align: middle;
      background-color: var(--bilibili-blue);
      color: var(--google-grey-50);
    }
  }

  .result-box {
    min-height: 20px;

    .list {
      position: relative;
      padding: 8px;
      height: 300px;
      border: 1px solid #eee;
      border-radius: 2px;
      box-sizing: border-box;
      overflow: auto;
    }
  }
`,s.default.div`
  display: flex;
  margin-bottom: 4px;
  padding: 8px 4px 8px 8px;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    background-color: #f5f5f5;
  }

  .avatar {
    flex-shrink: 0;
    margin-right: 8px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }

  .info {
    flex: 1;

    h6 {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: normal;
      margin: 0;

      a {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

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
    }

    /*p {
      margin-top: 2px;
      margin-bottom: 0;
      color: #999;
      display: -webkit-box;
      white-space: nowrap;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }*/

    .button {
      margin-left: auto;
      height: 20px;
      font-size: 12px;
      background-color: var(--google-grey-400);
      color: var(--google-grey-50);
    }
  }

  .auto-like-coin-collect-box {
    display: flex;
    margin-top: 6px;

    .config-item {
      display: flex;
      align-items: center;
      margin-right: 30px;
      line-height: 12px;
    }

    input[type="checkbox"] {
      vertical-align: middle;
      margin: 0 4px 0 0;
    }

    label {
      vertical-align: middle;
    }

    .coin-number {
      margin: 0 0 0 2px;
      padding: 0 0 0 2px;
      width: 30px;
      border: 0;
    }

    .collection-id {
      margin: 0 0 0 2px;
      padding: 0 0 0 2px;
      border: 0;
      font-size: 12px;
    }
  }
`),v=function({index:e,username:t,uid:a,level:n,face:o,sign:s,onClickUserName:r,onClickAttentionBtn:c,onDragMove:d,onDrop:u,autoLikeCoinCollectConfig:h,handleOnClickAutoLikeCoinCollect:p,collectionList:m}){const f=l.default.useRef(null),[,v]=(0,g.useDrop)({accept:"account-block",hover(t,a){if(!f.current)return;const n=t.index,i=e;if(n===i)return;const l=f.current.getBoundingClientRect(),o=(l.bottom-l.top)/2,s=a.getClientOffset(),r=s.y-l.top;n<i&&r<o||n>i&&r>o||(d(n,i),t.index=i)}}),[{isDragging:C},S]=(0,g.useDrag)({item:{type:"account-block",id:a,index:e},collect:e=>({isDragging:e.isDragging()}),end(){u()}}),E=l.default.useCallback(()=>{r(a)},[a]),y=l.default.useCallback(()=>{c(a)},[a]),M=l.default.useCallback(e=>{e.stopPropagation();const t=+e.target.value;t>=1&&t<=2&&p(a,"coinNumber",t)},[p,h]),w=l.default.useCallback(e=>{let t;e.stopPropagation(),h&&h.collectionId?t=h.collectionId:m&&(t=m[0].id),p(a,"collect",e.target.checked,t)},[p,h,m]),x=l.default.useCallback(e=>{e.stopPropagation();const t=e.target.value;p(a,"collectionId",t)},[p,h,m]);return S(v(f)),l.default.createElement(b,{key:a,ref:f,className:"user",style:{opacity:C?0:1}},l.default.createElement("div",{className:"avatar",onClick:E},l.default.createElement(i.Image,{url:o})),l.default.createElement("div",{className:"info"},l.default.createElement("h6",null,l.default.createElement("a",{onClick:E},t),l.default.createElement("span",{className:"level lv"+n},"Lv.",n),l.default.createElement(i.Button,{onClick:y},"\u53d6\u6d88\u7279\u5173")),l.default.createElement("div",{className:"auto-like-coin-collect-box"},l.default.createElement("div",{className:["config-item","like",h&&h.like?"active":""].join(" ")},l.default.createElement("input",{id:a+"like",type:"checkbox",checked:!!h&&!!h.like,onChange:()=>p(a,"like",!(h&&h.like))}),l.default.createElement("label",{htmlFor:a+"like"},"\u70b9\u8d5e")),l.default.createElement("div",{className:["config-item","coin",h&&h.coin?"active":""].join(" ")},l.default.createElement("div",null,l.default.createElement("input",{id:a+"coin",type:"checkbox",checked:!!h&&!!h.coin,onChange:()=>p(a,"coin",!(h&&h.coin),h&&h.coinNumber||2)}),l.default.createElement("label",{htmlFor:a+"coin"},"\u6295\u5e01")),l.default.createElement("input",{className:"coin-number",type:"number",max:2,min:1,step:1,value:h&&h.coinNumber||2,onChange:M}),"\u679a"),l.default.createElement("div",{className:["config-item","collect",h&&h.collect?"active":""].join(" ")},l.default.createElement("input",{id:a+"collect",type:"checkbox",checked:!!h&&!!h.collect,onChange:w}),l.default.createElement("label",{htmlFor:a+"collect"},"\u6536\u85cf")," \u81f3",l.default.createElement("select",{className:"collection-id",onChange:x,value:h?h.collectionId:m?m[0]:null},m.length>0?m.map(e=>l.default.createElement("option",{key:e.id,value:e.id},e.title)):l.default.createElement("option",null,"\u6ca1\u6709\u6570\u636e"))))))};class C extends l.default.Component{constructor(e){super(e),this.state={uidList:new Set,attentionList:[],searchModalOn:!1,followModalOn:!1,searching:!1,searchResult:{},collectionList:[],autoLikeCoinCollectConfigMap:new Map},this.searchResultListRef=l.default.createRef(),this.searching=!1,this.updateAccountList=()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"getSpecialAttentionAccountList"},e=>{e&&this.setState({attentionList:e,uidList:new Set(e.map(({uid:e})=>String(e)))})}),chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"fetchCollectionList"},e=>{e&&this.setState({collectionList:e})})},this.handleOnClickOpenSearchModal=()=>{const{uidList:e}=this.state;if(20===e.size)return i.Message.info("\u6dfb\u52a0\u4eba\u6570\u5df2\u8fbe\u5230\u4e0a\u9650");this.setState({searchModalOn:!0})},this.handleOnClickCloseSearchModal=()=>{this.setState({searchModalOn:!1})},this.handleOnClickOpenFollowModal=()=>{const{uidList:e}=this.state;if(20===e.size)return i.Message.info("\u6dfb\u52a0\u4eba\u6570\u5df2\u8fbe\u5230\u4e0a\u9650");this.setState({followModalOn:!0})},this.handleOnClickCloseFollowModal=()=>{this.setState({followModalOn:!1})},this.handleOnCreateUserSpaceTab=e=>{this.createTab("https://space.bilibili.com/"+e)},this.handleOnAddSpecialAttention=e=>{const{uidList:t}=this.state;if(20===t.size)return i.Message.info("\u6dfb\u52a0\u4eba\u6570\u5df2\u8fbe\u5230\u4e0a\u9650");chrome.runtime.sendMessage({target:"specialAttention",event:"addSpecialAttention",uid:e},t=>{if(t){this.context.uploadSettings("specialAttention");const{uidList:a}=this.state;a.add(e),this.setState({uidList:a},()=>{const{attentionList:e}=this.state;e.push(t),this.setState({attentionList:e})})}})},this.handleOnRemoveSpecialAttention=e=>{chrome.runtime.sendMessage({target:"specialAttention",event:"removeSpecialAttention",uid:String(e)},t=>{if(t){this.context.uploadSettings("specialAttention");const{uidList:t}=this.state;t.delete(String(e)),this.setState({uidList:t},()=>{const{attentionList:t}=this.state,a=t.findIndex(t=>String(t.uid)===String(e));a>=0&&(t.splice(a,1),this.setState({attentionList:t}))})}}),chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"removeUserConfig",uid:String(e)},t=>{if(t){this.context.uploadSettings("autoLikeCoinCollect");const{autoLikeCoinCollectConfigMap:t}=this.state;t.has(String(e))&&(t.delete(String(e)),this.setState({autoLikeCoinCollectConfigMap:t}))}})},this.handleOnClickAttentionBtn=e=>{const t=this.state.uidList.has(String(e));t?this.handleOnRemoveSpecialAttention(String(e)):this.handleOnAddSpecialAttention(String(e))},this.handleOnMoveAccount=(e,t)=>{const{uidList:a,attentionList:n}=this.state,i=Array.from(a),l=i[e];i.splice(e,1),i.splice(t,0,l);const o=n[e];n.splice(e,1),n.splice(t,0,o),this.setState({uidList:new Set(i),attentionList:n})},this.handleOnDropAccount=()=>{chrome.runtime.sendMessage({target:"specialAttention",event:"setSpecialAttentionList",uidList:Array.from(this.state.uidList)},()=>{this.context.uploadSettings("specialAttention")})},this.updateAutoLikeCoinCollectConfigMap=(e,t)=>{const{autoLikeCoinCollectConfigMap:a}=this.state;a.set(e,t),this.setState({autoLikeCoinCollectConfigMap:new Map(a)},()=>{this.context.uploadSettings("autoLikeCoinCollect")})},this.handleOnClickAutoLikeCoinCollect=(e,t,a,n)=>{chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"setFeatureConfig",uid:e,type:t,value:a,extraValue:n},n=>{if(n){const{autoLikeCoinCollectConfigMap:n}=this.state;let i=n.get(e);i?a?i[t]=a:(delete i[t],"coin"===t?delete i.coinNumber:"collect"===t&&delete i.collectionId):i={[t]:a},this.updateAutoLikeCoinCollectConfigMap(e,i)}})}}componentDidMount(){this.updateAccountList(),chrome.runtime.sendMessage({target:"autoLikeCoinCollect",event:"getFeatureConfig"},e=>(e&&this.setState({autoLikeCoinCollectConfigMap:new Map(e)}),!0))}createTab(e){chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})}render(){const{uidList:e,searchModalOn:t,followModalOn:a,attentionList:n,autoLikeCoinCollectConfigMap:o,collectionList:s}=this.state,{hasLogin:h,bilibiliAccount:b}=this.context;return l.default.createElement(f,null,l.default.createElement(p.Title,{title:"\u7279\u522b\u5173\u6ce8\u8bbe\u7f6e",description:"ACG\u52a9\u624b\u4f1a\u4e3b\u52a8\u63a8\u9001\u5728\u7279\u522b\u5173\u6ce8\u5217\u8868\u4e2d\u7528\u6237\u7684\u52a8\u6001\u5185\u5bb9\uff0c\u4e5f\u7528\u4e8e\u5728\u6269\u5c55\u7a97\u53e3\u4e2d\u5feb\u6377\u6d4f\u89c8"}),l.default.createElement(r.Topic,{title:"\u7279\u522b\u5173\u6ce8\u5217\u8868\u7ba1\u7406",description:"\u7279\u522b\u5173\u6ce8\u7684UP\u4e3b\u9700\u8981\u540c\u65f6\u5728b\u7ad9\u5173\u6ce8\u624d\u80fd\u6536\u5230\u63a8\u9001\u54e6"},l.default.createElement(r.Section,{title:l.default.createElement(l.default.Fragment,null,"\u5df2\u6dfb\u52a0\u5217\u8868",n&&n.length>0?l.default.createElement("span",null,"(",n.length+"/20",")"):null),description:"\u62d6\u52a8\u5217\u8868\u9879\u76ee\u53ef\u4ee5\u6392\u5e8f",hasLogin:h,active:h,toolbar:l.default.createElement(l.default.Fragment,null,l.default.createElement(i.Button,{disabled:n.length>=20||!h,disableEvent:!1,className:"add-btn follow",onClick:this.handleOnClickOpenFollowModal},"\u4ece\u5173\u6ce8\u5217\u8868\u6dfb\u52a0"),l.default.createElement(i.Button,{disabled:n.length>=20||!h,disableEvent:!1,className:"add-btn search",onClick:this.handleOnClickOpenSearchModal},"\u641c\u7d22\u6dfb\u52a0")),helperArea:l.default.createElement(l.default.Fragment,null,"\u9700\u767b\u5f55",l.default.createElement(i.Icon,{size:16,icon:"bilibili"}),"\u8d26\u53f7\u548c",l.default.createElement(i.Icon,{size:16,icon:"acghelper"}),"\u8d26\u53f7",l.default.createElement("br",null),l.default.createElement("br",null),"\u6dfb\u52a0\u4e3a\u7279\u522b\u5173\u6ce8\u540e\u53ef\u4f7f\u7528\u81ea\u5b9a\u4e49\u4e00\u952e\u4e09\u8fde\u529f\u80fd\uff0c\u80fd\u591f\u5206\u522b\u6307\u5b9a\u70b9\u8d5e\u3001\u6295\u5e01\u6570\u91cf\u548c\uff08\u6216\uff09\u6536\u85cf\u7684\u6536\u85cf\u5939")},l.default.createElement(g.DndProvider,{backend:m.HTML5Backend},l.default.createElement("div",{className:"added-list"},n.map((e,t)=>l.default.createElement(v,Object.assign({key:e.uid},e,{index:t,onClickUserName:this.handleOnCreateUserSpaceTab,onClickAttentionBtn:this.handleOnClickAttentionBtn,onDragMove:this.handleOnMoveAccount,onDrop:this.handleOnDropAccount,autoLikeCoinCollectConfig:o.get(e.uid),handleOnClickAutoLikeCoinCollect:this.handleOnClickAutoLikeCoinCollect,collectionList:s}))),0===n.length?"\u6ca1\u6709\u5185\u5bb9":null)))),l.default.createElement(c.AddBilibiliAccountModalBySearch,{modalOn:t,title:"\u641c\u7d22\u6dfb\u52a0\u300c\u52a9\u624b\u7684\u7279\u522b\u5173\u6ce8\u300d",addedUidList:e,onClickAccountBtn:this.handleOnClickAttentionBtn,onClickClose:this.handleOnClickCloseSearchModal}),l.default.createElement(d.AddBilibiliAccountModalWithFollow,{modalOn:a,title:"\u4ece\u300c\u5df2\u5173\u6ce8\u5217\u8868\u300d\u6dfb\u52a0\u300c\u52a9\u624b\u7684\u7279\u522b\u5173\u6ce8\u300d",addedUidList:e,onClickAccountBtn:this.handleOnClickAttentionBtn,onClickClose:this.handleOnClickCloseFollowModal,bilibiliAccount:this.context.bilibiliAccount}),l.default.createElement(u.NeedLoginMask,{show:!h||!b},"\u8be5\u9875\u9762\u529f\u80fd\u9700\u8981\u60a8\u540c\u65f6\u767b\u5f55",l.default.createElement(i.Icon,{icon:"bilibili",size:16}),"\u8d26\u53f7\u548c",l.default.createElement(i.Icon,{icon:"acghelper",size:16}),"\u8d26\u53f7"))}}C.contextType=h.MainStore,t["default"]=(0,o.withRouter)(C)},38130:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(53507),l=n(a(57689)),o=a(47532),s=n(a(635)),r=a(10243),c=a(15477),d=a(48347),u=a(53671),h=a(28507),p={ArrowUp:"\u2191",ArrowRight:"\u2192",ArrowDown:"\u2193",ArrowLeft:"\u2190"},g={Control:"\u2303",Shift:"\u21e7",Alt:"\u2325",Command:"\u2318"},m=e=>{if(""===e)return"\u7a7a";const t=e.split("+").map(e=>e.trim());return t.map(e=>c.isMacOS?p[e]||g[e]||e:p[e]||e).join(" + ")},f=(0,s.default)(u.Page)`
  .range-section {
    .body {
      .current-speed-change-range, .current-jump-change-range {
        display: inline-block;
        width: 100px;
        font-size: 14px;
      }

      .range {
        width: 210px;
        vertical-align: sub;
      }
    }
  }

  .shortcut-item {
    margin-bottom: 12px;

    .checkbox-rect {
      margin-right: 12px;
      display: inline-block;
      vertical-align: text-bottom;
    }
  }

  .shortcut-name {
    font-size: 14px;
    display: inline-block;
    width: 120px;
  }

  .shortcut-value {
    input {
      padding: 2px 4px;
      width: 200px;
      font-family: system-ui;
      text-indent: 2px;

      &.setting {
        color: #999;
      }
    }
  }
`;class b extends l.default.Component{constructor(e){super(e),this.state={shortcutOn:!1,shortcuts:[],screenShotQuickSave:!1,playSpeedChangeRange:.25,useDefaultSpeedChangeRange:!0,playJumpChangeRange:5,autoWidthType:"default",autoHideDanmu:!1,setWhiteVIPDanmu:!1,videoWidenOn:!1,autoQualityOn:!1,autoQuality:112,autoSpeedOn:!1,autoSpeed:1,autoPlayMode:!1,redirectSSR:!1},this.setting=!1,this.settingKey="",this.previousSettingKey="",this.settingValue="",this.previousSettingValue="",this.settingDefaultValue="",this.previousSettingDefaultValue="",this.handleOnClickAutoHideDanmu=()=>{chrome.runtime.sendMessage({target:"videoHideDanmu",event:"setSetting",on:!this.state.autoHideDanmu},()=>{this.context.uploadSettings("videoHideDanmu"),this.setState({autoHideDanmu:!this.state.autoHideDanmu})})},this.handleOnClickAutoPlayMode=()=>{chrome.runtime.sendMessage({target:"videoAutoPlayMode",event:"setSetting",on:!this.state.autoPlayMode},()=>{this.context.uploadSettings("videoAutoPlayMode"),this.setState({autoPlayMode:!this.state.autoPlayMode})})},this.handleOnClickVideoWiden=()=>{const{videoWidenOn:e}=this.state;chrome.runtime.sendMessage({target:"videoWiden",event:"setSetting",on:!e},()=>{this.context.uploadSettings("videoWiden"),this.setState({videoWidenOn:!e})})},this.handleOnClickWidenType=e=>{const{autoWidthType:t}=this.state;t!==e&&chrome.runtime.sendMessage({target:"videoWiden",event:"setSetting",widenType:e},()=>{this.context.uploadSettings("videoWiden"),this.setState({autoWidthType:e})})},this.handleOnToggleShortcuts=()=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",on:!this.state.shortcutOn},e=>{e&&(this.context.uploadSettings("videoShortcuts"),this.setState({shortcutOn:!this.state.shortcutOn}))})},this.handleOnRedirectSSR=()=>{chrome.runtime.sendMessage({target:"redirectSSR",event:"setSetting",on:!this.state.redirectSSR},e=>{e&&(this.context.uploadSettings("redirectSSR"),this.setState({redirectSSR:!this.state.redirectSSR}))})},this.handleOnMouseDownShortcutInput=e=>{e.persist();const{bhAccount:t}=this.context;if(!t||!t.isVIP)return this.context.sendPaymentMessage();e.target.classList.add("setting"),this.settingKey&&(this.previousSettingKey=this.settingKey,this.previousSettingValue=this.settingValue,this.previousSettingDefaultValue=this.settingDefaultValue),this.settingKey=e.target.dataset.key,this.settingValue=e.target.value,this.settingDefaultValue=e.target.value},this.handleOnBlurShortcutInput=e=>{e.persist(),e.target.classList.remove("setting");let t,a,n=!1;this.previousSettingDefaultValue!==this.previousSettingValue&&this.previousSettingKey?(t=this.previousSettingKey,a=this.previousSettingValue,n=!0):this.settingDefaultValue!==this.settingValue&&this.settingKey&&(t=this.settingKey,a=this.settingValue),void 0!==t&&void 0!==a&&chrome.runtime.sendMessage({target:"videoShortcuts",event:"setShortcut",key:t,value:a},()=>{this.previousSettingKey="",this.previousSettingValue="",this.previousSettingDefaultValue="",n||(this.settingKey="",this.settingValue="",this.settingDefaultValue=""),this.context.uploadSettings("videoShortcuts")})},this.handleOnKeyDownShortcutInput=e=>{e.persist();const t=(0,d.generateShortcutValue)(e.nativeEvent.code,e.key,e.ctrlKey,e.shiftKey,e.metaKey,e.altKey);if(t){const{shortcuts:e}=this.state,a=e.find(([e])=>this.settingKey===e);this.settingDefaultValue=a[1][1],a&&("backspace"===t?(this.settingValue="",a[1][1]=""):a[1][1]!==t&&(this.settingValue=t,a[1][1]=t),this.setState({shortcuts:e}))}},this.handleOnClickShortcutCheckbox=(e,t)=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"setShortcut",key:e,on:!t},()=>{const{shortcuts:a}=this.state,n=a.find(([t])=>e===t);n[1][2]=!t,this.setState({shortcuts:a}),this.context.uploadSettings("videoShortcuts")})},this.handleOnSetPlaySpeedRange=e=>{e.persist();const t=+e.target.value;this.setState({playSpeedChangeRange:t})},this.handleOnMouseUpPlaySpeedRange=e=>{e.persist();const{bhAccount:t={}}=this.context,a=+e.target.value;chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",playSpeedChangeRange:a},()=>{this.context.uploadSettings("videoShortcuts")})},this.handleOnClickUseDefaultPlaySpeedChangeRange=()=>{const e=this.state.useDefaultSpeedChangeRange,{bhAccount:t={}}=this.context,a=!!t&&t["isVIP"];if(!e&&!a)return this.context.sendPaymentMessage();chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",useDefaultSpeedChangeRange:!e},()=>{this.context.uploadSettings("videoShortcuts"),this.setState({useDefaultSpeedChangeRange:!e})})},this.handleOnSetPlayJumpChangeRange=e=>{e.persist();const t=+e.target.value;this.setState({playJumpChangeRange:t})},this.handleOnMouseUpPlayJumpChangeRange=e=>{e.persist();const t=+e.target.value;chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",playJumpChangeRange:t},()=>{this.context.uploadSettings("videoShortcuts")})},this.handleOnClickAutoQuality=()=>{chrome.runtime.sendMessage({target:"videoAutoQuality",event:"setSetting",on:!this.state.autoQualityOn},()=>{this.context.uploadSettings("videoAutoQuality"),this.setState({autoQualityOn:!this.state.autoQualityOn})})},this.handleOnClickChangeAutoQuality=e=>{chrome.runtime.sendMessage({target:"videoAutoQuality",event:"setSetting",quality:e},()=>{this.context.uploadSettings("videoAutoQuality"),this.setState({autoQuality:e})})},this.handleOnClickAutoPlaySpeed=()=>{chrome.runtime.sendMessage({target:"videoAutoPlaySpeed",event:"setSetting",on:!this.state.autoSpeedOn},()=>{this.context.uploadSettings("videoAutoPlaySpeed"),this.setState({autoSpeedOn:!this.state.autoSpeedOn})})},this.handleOnSetWhiteVIPDanmu=()=>{chrome.runtime.sendMessage({target:"videoDanmu",event:"setSetting",setWhiteVIPDanmu:!this.state.setWhiteVIPDanmu},()=>{this.context.uploadSettings("videoDanmu"),this.setState({setWhiteVIPDanmu:!this.state.setWhiteVIPDanmu})})},this.handleOnSetAutoPlaySpeedRange=e=>{e.persist();const t=+e.target.value;this.setState({autoSpeed:t})},this.handleOnMouseUpAutoPlaySpeedRange=e=>{e.persist();const t=+e.target.value;chrome.runtime.sendMessage({target:"videoAutoPlaySpeed",event:"setSetting",speed:t},()=>{this.context.uploadSettings("videoAutoPlaySpeed")})},this.handleOnClickResetShortcuts=()=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"reset"},()=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"getShortcuts"},e=>{this.setState({shortcuts:e},()=>{this.context.uploadSettings("videoShortcuts")})})})},this.handleOnClickToggletScreenShotQuickSave=()=>{chrome.runtime.sendMessage({target:"videoShortcuts",event:"setSetting",screenShotQuickSave:!this.state.screenShotQuickSave},()=>{this.setState({screenShotQuickSave:!this.state.screenShotQuickSave},()=>{this.context.uploadSettings("videoShortcuts")})})}}componentDidMount(){chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},({playSpeedChangeRange:e,useDefaultSpeedChangeRange:t,playJumpChangeRange:a,screenShotQuickSave:n})=>{this.setState({playSpeedChangeRange:e,useDefaultSpeedChangeRange:t,playJumpChangeRange:a,screenShotQuickSave:n})}),chrome.runtime.sendMessage({target:"videoShortcuts",event:"getShortcuts"},e=>{this.setState({shortcuts:e})}),chrome.runtime.sendMessage({target:"videoShortcuts",event:"getSetting"},e=>{this.setState({shortcutOn:e.on})}),chrome.runtime.sendMessage({target:"videoWiden",event:"getSetting"},e=>{this.setState({videoWidenOn:e.on,autoWidthType:e.widenType})}),chrome.runtime.sendMessage({target:"videoHideDanmu",event:"getSetting"},e=>{this.setState({autoHideDanmu:e.on})}),chrome.runtime.sendMessage({target:"videoDanmu",event:"getSetting"},e=>{this.setState({setWhiteVIPDanmu:e.setWhiteVIPDanmu})}),chrome.runtime.sendMessage({target:"videoAutoQuality",event:"getSetting"},e=>{this.setState({autoQualityOn:e.on,autoQuality:e.quality})}),chrome.runtime.sendMessage({target:"videoAutoPlaySpeed",event:"getSetting"},e=>{this.setState({autoSpeedOn:e.on,autoSpeed:e.speed})}),chrome.runtime.sendMessage({target:"videoAutoPlayMode",event:"getSetting"},e=>{this.setState({autoPlayMode:e.on})}),chrome.runtime.sendMessage({target:"redirectSSR",event:"getSetting"},({on:e})=>{this.setState({redirectSSR:e})})}render(){const{autoPlayMode:e,redirectSSR:t,shortcuts:a,shortcutOn:n,screenShotQuickSave:o,playSpeedChangeRange:s,useDefaultSpeedChangeRange:c,playJumpChangeRange:d,autoWidthType:h,autoHideDanmu:p,videoWidenOn:g,autoQualityOn:b,autoQuality:v,autoSpeedOn:C,autoSpeed:S,setWhiteVIPDanmu:E}=this.state,{hasLogin:y,bilibiliAccount:M}=this.context,{bhAccount:w={}}=this.context,x=!!w&&w["isVIP"];return l.default.createElement(f,null,l.default.createElement(u.Title,{title:"\u4e3b\u7ad9\u529f\u80fd"}),l.default.createElement(u.Topic,{title:"\u89c6\u9891\u64ad\u653e\u9875\u9762"},l.default.createElement(u.Section,{title:"\u9ed8\u8ba4\u5173\u95ed\u5f39\u5e55",active:p,toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnClickAutoHideDanmu,on:p})}),l.default.createElement(u.Section,{title:"\u667a\u80fd\u8fde\u64ad",description:"\u5408\u96c6\u4e0e\u5206P\u9875\u9762\u81ea\u52a8\u5f00\u542f\u8fde\u64ad\uff0c\u5176\u4ed6\u9875\u9762\u80fd\u81ea\u52a8\u5173\u95ed\u8fde\u64ad",active:e,toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnClickAutoPlayMode,on:e})}),l.default.createElement(u.Section,{title:"\u91cd\u7f6e\u5927\u4f1a\u5458\u5f39\u5e55\u989c\u8272",description:"\u5c06\u4e3b\u7ad9\u5927\u4f1a\u5458\u5f39\u5e55\u989c\u8272\u91cd\u7f6e\u4e3a\u767d\u8272",active:E,toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnSetWhiteVIPDanmu,on:E})}),l.default.createElement(u.Section,{title:"\u81ea\u52a8\u91cd\u5b9a\u5411SSR\u9875\u9762",description:"\u5c06\u5f62\u5982\u300c/s/video/*\u300d\u7684\u94fe\u63a5\u91cd\u5b9a\u5411\u5230\u300c/video/* \u300d",active:t,toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnRedirectSSR,on:t})}),l.default.createElement(u.Section,{className:"range-section",title:"\u9ed8\u8ba4\u64ad\u653e\u901f\u5ea6",description:"\u9ed8\u8ba41.0\uff0c\u8303\u56f4\uff1a0.5 ~ 4.0",toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnClickAutoPlaySpeed,on:C})},l.default.createElement("div",null,l.default.createElement("span",{className:"current-speed-change-range"},S),l.default.createElement(i.Range,{value:S,max:4,min:.5,step:.05,onChange:this.handleOnSetAutoPlaySpeedRange,onMouseUp:this.handleOnMouseUpAutoPlaySpeedRange}))),l.default.createElement(u.Section,{title:"\u9ed8\u8ba4\u663e\u793a\u65b9\u5f0f - \u81ea\u52a8\u5bbd\u5c4f",active:g,toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnClickVideoWiden,on:g})},l.default.createElement(i.RadioButtonGroup,{value:g?h:"",data:[{key:"wide",title:"\u5bbd\u5c4f"},{key:"web",title:"\u7f51\u9875\u5168\u5c4f"},{key:"full",title:"\u5168\u5c4f"}],onClick:this.handleOnClickWidenType})),l.default.createElement(u.Section,{title:"\u9ed8\u8ba4\u753b\u8d28",active:b,toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnClickAutoQuality,on:b}),helperArea:l.default.createElement(l.default.Fragment,null,l.default.createElement("b",null,"\u5982\u679c\u89c6\u9891\u4e0d\u5b58\u5728\u6240\u9009\u753b\u8d28\uff0c\u5219\u4f1a\u9010\u4e2a\u964d\u7ea7\u9002\u914d"),l.default.createElement("br",null),l.default.createElement("br",null),l.default.createElement("b",null,"\u5982\u679c\u9002\u914d\u5230\u5927\u4f1a\u5458\u753b\u8d28\u4f46\u7528\u6237\u4e0d\u662f\u5927\u4f1a\u5458\u5219\u4f1a\u7ec8\u6b62\u9002\u914d"))},l.default.createElement(i.RadioButtonGroup,{value:b?v:112,data:r.VIDEO_QUALITY_NUMBER_LIST.map(e=>({key:e,title:r.VIDEO_QUALITY_MAP[e]+(e>80?" (\u5927\u4f1a\u5458)":"")})),onClick:this.handleOnClickChangeAutoQuality}))),l.default.createElement(u.Topic,{title:"\u5feb\u6377\u952e"},l.default.createElement(u.Section,{className:"range-section",title:l.default.createElement(l.default.Fragment,null,l.default.createElement(i.Icon,{icon:"cat-paw",size:16}),"\u64ad\u653e\u901f\u5ea6\u8c03\u6574\u5e45\u5ea6 (0.05-0.5x)"),description:"\u9ed8\u8ba40.25x",hasLogin:y,active:!c,toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnClickUseDefaultPlaySpeedChangeRange,on:!!x&&!c}),helperArea:l.default.createElement(l.default.Fragment,null,"\u901a\u8fc7\u5feb\u6377\u952e\u8c03\u6574\u64ad\u653e\u901f\u5ea6\u4e0a\u9650\u6700\u5927\u4e3a",l.default.createElement("b",null,"4"))},l.default.createElement("div",null,l.default.createElement("span",{className:"current-speed-change-range"},y?s:.25),l.default.createElement(i.Range,{value:y?s:.25,max:.5,min:.05,step:.05,onChange:this.handleOnSetPlaySpeedRange,onMouseUp:this.handleOnMouseUpPlaySpeedRange}))),l.default.createElement(u.Section,{className:"range-section",title:l.default.createElement(l.default.Fragment,null,l.default.createElement(i.Icon,{icon:"cat-paw",size:16}),"\u5feb\u8fdb\u5feb\u9000\u5e45\u5ea6 (1-120\u79d2)"),description:"\u9ed8\u8ba45\u79d2",hasLogin:y,helperArea:l.default.createElement(l.default.Fragment,null,"\u8be5\u529f\u80fd\u4e0d\u9700\u8981\u60a8\u70b9\u51fb\u89c6\u9891\u64ad\u653e\u5668\u5c31\u80fd\u5728\u6574\u4e2a\u89c6\u9891\u64ad\u653e\u9875\u9762\u751f\u6548",l.default.createElement("br",null),"\u4f46\u4e0d\u4f1a\u5f71\u54cd\u4f60\u7f16\u8f91\u548c\u53d1\u9001\u6587\u5b57\u6d88\u606f")},l.default.createElement("div",null,l.default.createElement("span",{className:"current-jump-change-range"},y?d:5),l.default.createElement(i.Range,{value:y?d:5,max:120,min:1,step:1,onChange:this.handleOnSetPlayJumpChangeRange,onMouseUp:this.handleOnMouseUpPlayJumpChangeRange}))),l.default.createElement(u.Section,{title:"\u622a\u5c4f\u5feb\u6377\u4fdd\u5b58",description:"\u5f00\u542f\u540e\u4f7f\u7528\u5feb\u6377\u952e\u5c06\u300c\u590d\u5236\u5230\u526a\u8d34\u677f\u300d\u6539\u4e3a\u300c\u53e6\u5b58\u4e3a\u6587\u4ef6\u300d",active:o,toolbar:l.default.createElement(i.CheckBoxButton,{onClick:this.handleOnClickToggletScreenShotQuickSave,on:o})}),l.default.createElement(u.Section,{title:l.default.createElement(l.default.Fragment,null,l.default.createElement(i.Icon,{icon:"cat-paw",size:16}),"\u5feb\u6377\u952e\u5217\u8868"),hasLogin:y,active:n,toolbar:l.default.createElement(i.CheckBoxButton,{disable:!y,onClick:this.handleOnToggleShortcuts,on:!!y&&n}),helperArea:l.default.createElement(l.default.Fragment,null,"\u4ec5\u300c\u4fee\u6539\u5feb\u6377\u952e\u300d\u4e3a\u4ed8\u8d39\u529f\u80fd\uff0c\u300c\u5feb\u6377\u952e\u300d\u7684\u4f7f\u7528\u4e3a\u514d\u8d39\u529f\u80fd",l.default.createElement("br",null),l.default.createElement("br",null),"\u90e8\u5206\u5feb\u6377\u952e\u4e0e\u5b98\u65b9\u64ad\u653e\u5668\u4e2d\u7684\u91cd\u5408",l.default.createElement("br",null),l.default.createElement("br",null),l.default.createElement("b",null,"\u6309\u9000\u683c\u952e\u6e05\u9664\u8bbe\u5b9a"),l.default.createElement("br",null),l.default.createElement("br",null),"\u70b9\u51fb\u7f16\u8f91\u6846\u540e\u6309\u4e0b\u76f8\u5173\u5feb\u6377\u952e\u8fdb\u884c\u8bbe\u7f6e\uff0c\u652f\u6301\u7ec4\u5408\u952e",l.default.createElement("br",null),"\uff08\u5373\u7f16\u8f91\u6846\u5185\u5bb9\u4f1a\u53d8\u6210\u7070\u8272\uff09",l.default.createElement("br",null),l.default.createElement("br",null),"\u8bbe\u7f6e\u5b8c\u540e\u9f20\u6807\u70b9\u51fb\u9875\u9762\u7a7a\u767d\u5904\u540e\u8bbe\u7f6e\u751f\u6548",l.default.createElement("br",null),"\uff08\u5373\u7f16\u8f91\u6846\u5185\u5bb9\u4f1a\u53d8\u56de\u9ed1\u8272\uff09",l.default.createElement("br",null),l.default.createElement("br",null),l.default.createElement(i.Button,{className:"primary",onClick:this.handleOnClickResetShortcuts},"\u91cd\u7f6e\u5feb\u6377\u952e\u9ed8\u8ba4\u6309\u952e"))},l.default.createElement("div",{className:"list"},a&&a.map(([e,[t,a,n]])=>l.default.createElement("div",{key:e,className:"shortcut-item"},l.default.createElement(i.CheckboxRect,{active:n,onClick:()=>this.handleOnClickShortcutCheckbox(e,n)}),l.default.createElement("span",{className:"shortcut-name"},t),l.default.createElement("span",{className:"shortcut-value"},l.default.createElement(i.Input,{readOnly:!0,"data-key":e,className:"shortcut",onKeyDown:this.handleOnKeyDownShortcutInput,onBlur:this.handleOnBlurShortcutInput,onMouseDown:this.handleOnMouseDownShortcutInput,value:m(a)}))))))))}}b.contextType=h.MainStore,t["default"]=(0,o.withRouter)(b)},748:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.animations=void 0;const n=a(635);t.animations=n.css`
  @keyframes blink {
    0%, to {
      color: transparent;
    }

    50% {
      color: var(--google-red-500);
    }
  }
`},39757:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.colorValues=void 0,t.colorValues={"google-red-100":"#f4c7c3","google-red-300":"#e67c73","google-red-500":"#db4437","google-red-700":"#c53929","google-blue-100":"#c6dafc","google-blue-300":"#7baaf7","google-blue-500":"#4285f4","google-blue-600":"#1a73e8","google-blue-700":"#3367d6","google-green-100":"#b7e1cd","google-green-300":"#57bb8a","google-green-500":"#0f9d58","google-green-700":"#0b8043","google-yellow-100":"#fce8b2","google-yellow-300":"#f7cb4d","google-yellow-500":"#f4b400","google-yellow-700":"#f09300","google-grey-50":"#f8f9fa","google-grey-100":"#f5f5f5","google-grey-300":"#e0e0e0","google-grey-400":"#bdc1c6","google-grey-500":"#9e9e9e","google-grey-700":"#616161","paper-red-50":"#ffebee","paper-red-100":"#ffcdd2","paper-red-200":"#ef9a9a","paper-red-300":"#e57373","paper-red-400":"#ef5350","paper-red-500":"#f44336","paper-red-600":"#e53935","paper-red-700":"#d32f2f","paper-red-800":"#c62828","paper-red-900":"#b71c1c","paper-red-a100":"#ff8a80","paper-red-a200":"#ff5252","paper-red-a400":"#ff1744","paper-red-a700":"#d50000","paper-pink-50":"#fce4ec","paper-pink-100":"#f8bbd0","paper-pink-200":"#f48fb1","paper-pink-300":"#f06292","paper-pink-400":"#ec407a","paper-pink-500":"#e91e63","paper-pink-600":"#d81b60","paper-pink-700":"#c2185b","paper-pink-800":"#ad1457","paper-pink-900":"#880e4f","paper-pink-a100":"#ff80ab","paper-pink-a200":"#ff4081","paper-pink-a400":"#f50057","paper-pink-a700":"#c51162","paper-purple-50":"#f3e5f5","paper-purple-100":"#e1bee7","paper-purple-200":"#ce93d8","paper-purple-300":"#ba68c8","paper-purple-400":"#ab47bc","paper-purple-500":"#9c27b0","paper-purple-600":"#8e24aa","paper-purple-700":"#7b1fa2","paper-purple-800":"#6a1b9a","paper-purple-900":"#4a148c","paper-purple-a100":"#ea80fc","paper-purple-a200":"#e040fb","paper-purple-a400":"#d500f9","paper-purple-a700":"#aa00ff","paper-deep-purple-50":"#ede7f6","paper-deep-purple-100":"#d1c4e9","paper-deep-purple-200":"#b39ddb","paper-deep-purple-300":"#9575cd","paper-deep-purple-400":"#7e57c2","paper-deep-purple-500":"#673ab7","paper-deep-purple-600":"#5e35b1","paper-deep-purple-700":"#512da8","paper-deep-purple-800":"#4527a0","paper-deep-purple-900":"#311b92","paper-deep-purple-a100":"#b388ff","paper-deep-purple-a200":"#7c4dff","paper-deep-purple-a400":"#651fff","paper-deep-purple-a700":"#6200ea","paper-indigo-50":"#e8eaf6","paper-indigo-100":"#c5cae9","paper-indigo-200":"#9fa8da","paper-indigo-300":"#7986cb","paper-indigo-400":"#5c6bc0","paper-indigo-500":"#3f51b5","paper-indigo-600":"#3949ab","paper-indigo-700":"#303f9f","paper-indigo-800":"#283593","paper-indigo-900":"#1a237e","paper-indigo-a100":"#8c9eff","paper-indigo-a200":"#536dfe","paper-indigo-a400":"#3d5afe","paper-indigo-a700":"#304ffe","paper-blue-50":"#e3f2fd","paper-blue-100":"#bbdefb","paper-blue-200":"#90caf9","paper-blue-300":"#64b5f6","paper-blue-400":"#42a5f5","paper-blue-500":"#2196f3","paper-blue-600":"#1e88e5","paper-blue-700":"#1976d2","paper-blue-800":"#1565c0","paper-blue-900":"#0d47a1","paper-blue-a100":"#82b1ff","paper-blue-a200":"#448aff","paper-blue-a400":"#2979ff","paper-blue-a700":"#2962ff","paper-light-blue-50":"#e1f5fe","paper-light-blue-100":"#b3e5fc","paper-light-blue-200":"#81d4fa","paper-light-blue-300":"#4fc3f7","paper-light-blue-400":"#29b6f6","paper-light-blue-500":"#03a9f4","paper-light-blue-600":"#039be5","paper-light-blue-700":"#0288d1","paper-light-blue-800":"#0277bd","paper-light-blue-900":"#01579b","paper-light-blue-a100":"#80d8ff","paper-light-blue-a200":"#40c4ff","paper-light-blue-a400":"#00b0ff","paper-light-blue-a700":"#0091ea","paper-cyan-50":"#e0f7fa","paper-cyan-100":"#b2ebf2","paper-cyan-200":"#80deea","paper-cyan-300":"#4dd0e1","paper-cyan-400":"#26c6da","paper-cyan-500":"#00bcd4","paper-cyan-600":"#00acc1","paper-cyan-700":"#0097a7","paper-cyan-800":"#00838f","paper-cyan-900":"#006064","paper-cyan-a100":"#84ffff","paper-cyan-a200":"#18ffff","paper-cyan-a400":"#00e5ff","paper-cyan-a700":"#00b8d4","paper-teal-50":"#e0f2f1","paper-teal-100":"#b2dfdb","paper-teal-200":"#80cbc4","paper-teal-300":"#4db6ac","paper-teal-400":"#26a69a","paper-teal-500":"#009688","paper-teal-600":"#00897b","paper-teal-700":"#00796b","paper-teal-800":"#00695c","paper-teal-900":"#004d40","paper-teal-a100":"#a7ffeb","paper-teal-a200":"#64ffda","paper-teal-a400":"#1de9b6","paper-teal-a700":"#00bfa5","paper-green-50":"#e8f5e9","paper-green-100":"#c8e6c9","paper-green-200":"#a5d6a7","paper-green-300":"#81c784","paper-green-400":"#66bb6a","paper-green-500":"#4caf50","paper-green-600":"#43a047","paper-green-700":"#388e3c","paper-green-800":"#2e7d32","paper-green-900":"#1b5e20","paper-green-a100":"#b9f6ca","paper-green-a200":"#69f0ae","paper-green-a400":"#00e676","paper-green-a700":"#00c853","paper-light-green-50":"#f1f8e9","paper-light-green-100":"#dcedc8","paper-light-green-200":"#c5e1a5","paper-light-green-300":"#aed581","paper-light-green-400":"#9ccc65","paper-light-green-500":"#8bc34a","paper-light-green-600":"#7cb342","paper-light-green-700":"#689f38","paper-light-green-800":"#558b2f","paper-light-green-900":"#33691e","paper-light-green-a100":"#ccff90","paper-light-green-a200":"#b2ff59","paper-light-green-a400":"#76ff03","paper-light-green-a700":"#64dd17","paper-lime-50":"#f9fbe7","paper-lime-100":"#f0f4c3","paper-lime-200":"#e6ee9c","paper-lime-300":"#dce775","paper-lime-400":"#d4e157","paper-lime-500":"#cddc39","paper-lime-600":"#c0ca33","paper-lime-700":"#afb42b","paper-lime-800":"#9e9d24","paper-lime-900":"#827717","paper-lime-a100":"#f4ff81","paper-lime-a200":"#eeff41","paper-lime-a400":"#c6ff00","paper-lime-a700":"#aeea00","paper-yellow-50":"#fffde7","paper-yellow-100":"#fff9c4","paper-yellow-200":"#fff59d","paper-yellow-300":"#fff176","paper-yellow-400":"#ffee58","paper-yellow-500":"#ffeb3b","paper-yellow-600":"#fdd835","paper-yellow-700":"#fbc02d","paper-yellow-800":"#f9a825","paper-yellow-900":"#f57f17","paper-yellow-a100":"#ffff8d","paper-yellow-a200":"#ffff00","paper-yellow-a400":"#ffea00","paper-yellow-a700":"#ffd600","paper-amber-50":"#fff8e1","paper-amber-100":"#ffecb3","paper-amber-200":"#ffe082","paper-amber-300":"#ffd54f","paper-amber-400":"#ffca28","paper-amber-500":"#ffc107","paper-amber-600":"#ffb300","paper-amber-700":"#ffa000","paper-amber-800":"#ff8f00","paper-amber-900":"#ff6f00","paper-amber-a100":"#ffe57f","paper-amber-a200":"#ffd740","paper-amber-a400":"#ffc400","paper-amber-a700":"#ffab00","paper-orange-50":"#fff3e0","paper-orange-100":"#ffe0b2","paper-orange-200":"#ffcc80","paper-orange-300":"#ffb74d","paper-orange-400":"#ffa726","paper-orange-500":"#ff9800","paper-orange-600":"#fb8c00","paper-orange-700":"#f57c00","paper-orange-800":"#ef6c00","paper-orange-900":"#e65100","paper-orange-a100":"#ffd180","paper-orange-a200":"#ffab40","paper-orange-a400":"#ff9100","paper-orange-a700":"#ff6500","paper-deep-orange-50":"#fbe9e7","paper-deep-orange-100":"#ffccbc","paper-deep-orange-200":"#ffab91","paper-deep-orange-300":"#ff8a65","paper-deep-orange-400":"#ff7043","paper-deep-orange-500":"#ff5722","paper-deep-orange-600":"#f4511e","paper-deep-orange-700":"#e64a19","paper-deep-orange-800":"#d84315","paper-deep-orange-900":"#bf360c","paper-deep-orange-a100":"#ff9e80","paper-deep-orange-a200":"#ff6e40","paper-deep-orange-a400":"#ff3d00","paper-deep-orange-a700":"#dd2c00","paper-brown-50":"#efebe9","paper-brown-100":"#d7ccc8","paper-brown-200":"#bcaaa4","paper-brown-300":"#a1887f","paper-brown-400":"#8d6e63","paper-brown-500":"#795548","paper-brown-600":"#6d4c41","paper-brown-700":"#5d4037","paper-brown-800":"#4e342e","paper-brown-900":"#3e2723","paper-grey-50":"#fafafa","paper-grey-100":"#f5f5f5","paper-grey-200":"#eeeeee","paper-grey-300":"#e0e0e0","paper-grey-400":"#bdbdbd","paper-grey-500":"#9e9e9e","paper-grey-600":"#757575","paper-grey-700":"#616161","paper-grey-800":"#424242","paper-grey-900":"#212121","paper-blue-grey-50":"#eceff1","paper-blue-grey-100":"#cfd8dc","paper-blue-grey-200":"#b0bec5","paper-blue-grey-300":"#90a4ae","paper-blue-grey-400":"#78909c","paper-blue-grey-500":"#607d8b","paper-blue-grey-600":"#546e7a","paper-blue-grey-700":"#455a64","paper-blue-grey-800":"#37474f","bilibili-pink":"#FB7299","bilibili-blue":"#23ADE5","bilibili-green":"#6dc781"}},43521:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.globalColor=t.bilibiliDarkColor=void 0;const n=a(635);t.bilibiliDarkColor=n.css`
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
`,t.globalColor=n.css`
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
`},78836:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalStyle=void 0;const n=a(635),i=a(748),l=a(13904),o=a(43521);t.GlobalStyle=n.createGlobalStyle`
  html,body {
    -ms-text-size-adjust: 100%; // 2
    -webkit-text-size-adjust: 100%; // 2
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
  }
  body {
    margin: 0;
    font-size: 12px;
    ${(0,l.fontFamily)()};
    ${o.globalColor};
    ${i.animations};
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
`},96691:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var i=Object.getOwnPropertyDescriptor(t,a);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,i)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),i=this&&this.__exportStar||function(e,t){for(var a in e)"default"===a||Object.prototype.hasOwnProperty.call(t,a)||n(t,e,a)};Object.defineProperty(t,"__esModule",{value:!0}),i(a(13904),t),i(a(37459),t)},11120:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.opacity=void 0,t.opacity={"paper-blue-grey-900":"#263238","dark-divider-opacity":"0.12","dark-disabled-opacity":"0.38","dark-secondary-opacity":"0.54","dark-primary-opacity":"0.87","light-divider-opacity":"0.12","light-disabled-opacity":"0.3","light-secondary-opacity":"0.7","light-primary-opacity":"1.0"}},37459:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.theme=t.baseFontSize=void 0;const n=a(13904),i=1e3,l=204;t.baseFontSize=12,t.theme={color:n.color,logoHeight:50,bodyMinWidth:i,headerHeight:0,sidebarWidth:l,mainWidth:i-l,baseFontSize:t.baseFontSize,fontFamily:n.fontFamily,fontSize:n.fontSize,rem:n.rem,textOverflow:n.textOverflow,transition:n.transition,boxShadow:n.boxShadow,marginTrim:n.marginTrim,hideScrollbar:n.hideScrollbar,opacity:n.opacity}},13904:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var i=Object.getOwnPropertyDescriptor(t,a);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,i)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),i=this&&this.__exportStar||function(e,t){for(var a in e)"default"===a||Object.prototype.hasOwnProperty.call(t,a)||n(t,e,a)},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.hideScrollbar=t.marginTrim=t.transition=t.boxShadow=t.color=t.textOverflow=t.fontSize=t.fontFamily=t.rem=void 0;const o=l(a(32699)),s=a(635),r=l(a(74770)),c=a(39757);i(a(11120),t);const d=(e,t=16)=>e/t+"rem";t.rem=d;const u=(e="")=>s.css`
    font-family: ${o.default.isEmpty(e)?null:`'${e}',`} Cereal, "PingFang SC", "Microsoft YaHei", system, -apple-system, ".SFNSDisplay-Regular", HelveticaNeue, LucidaGrande, "Hiragino Sans GB", "sans-serif";
`;t.fontFamily=u;const h=(e=16)=>s.css`
    font-size: ${(0,t.rem)(e)};
`;t.fontSize=h;const p=(e=1)=>1===e?s.css`
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
`:s.css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${e};
    overflow: hidden;
`;t.textOverflow=p;const g=(e,t=1)=>c.colorValues[e]?(0,r.default)(c.colorValues[e]).alpha(t).rgb().string():void 0;t.color=g;const m=([...e])=>{const t=1,a="#000000",n=.5;let i="";for(let l in e){const{h:o,v:s,blur:c,spread:d,color:u=(0,r.default)(a).alpha(n).rgb().string(),inset:h=""}=e[l];i+=`${o*t}px ${s*t}px ${5*c}px ${5*d}px ${u} ${h},`}return s.css`
        box-shadow: ${i};
    `};t.boxShadow=m;const f=({target:e="all",duration:t=.3})=>s.css`transition: ${e} ${t}s;`;t.transition=f;const b=({direction:e="h",value:t=0})=>s.css`
  &:first-of-type {
    ${"h"===e?"margin-left:"+t:"v"===e?"margin-top: "+t:null};
    ${"all"===e?`margin-left:${t};margin-top:${t}`:null};
  }
  &:last-of-type {
    ${"h"===e?"margin-right:"+t:"v"===e?"margin-bottom: "+t:null};
    ${"all"===e?`margin-right:${t};margin-bottom:${t}`:null};
  }
`;t.marginTrim=b,t.hideScrollbar=s.css`
    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }
    & {
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
    }
`},34345:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(l.exports,l,l.exports,a),l.loaded=!0,l.exports}a.m=e,(()=>{var e=[];a.O=(t,n,i,l)=>{if(!n){var o=1/0;for(d=0;d<e.length;d++){for(var[n,i,l]=e[d],s=!0,r=0;r<n.length;r++)(!1&l||o>=l)&&Object.keys(a.O).every(e=>a.O[e](n[r]))?n.splice(r--,1):(s=!1,l<o&&(o=l));if(s){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,i,l]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{a.j=571})(),(()=>{var e={571:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var i,l,[o,s,r]=n,c=0;if(o.some(t=>0!==e[t])){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(r)var d=r(a)}for(t&&t(n);c<o.length;c++)l=o[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(d)},n=self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{a.nc=void 0})();var n=a.O(void 0,[196,133,468],()=>a(11580));n=a.O(n)})();