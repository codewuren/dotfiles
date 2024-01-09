"use strict";(self["webpackChunkbilibilihelper2"]=self["webpackChunkbilibilihelper2"]||[]).push([[468],{85458:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(5771),t),n(i(38122),t)},5771:function(e,t,i){var o=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ADCard=void 0;const r=i(83656),a=n(i(57689)),l=n(i(635)),s=l.default.section.attrs(()=>({className:"ad-card"}))`
  position: relative;
  padding-bottom: 6px;
  width: 100%;
  min-width: 148px;
  //height: 135px;
  z-index: 1;
  //content-visibility: auto;
  //contain-intrinsic-size: 160px;

  .cover {
    position: relative;
    display: block;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px;
    transform-origin: bottom;
    transition: transform .3s;

    :before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 58px;
      width: 100%;
      background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .4));
      z-index: 1;
      pointer-events: none;
    }

    .cover-image {
      transition: filter 0.2s;
      filter: brightness(0.95);
      //transform: scale(1.1);
    }

    time {
      position: absolute;
      bottom: 6px;
      padding: 0 2px;
      min-width: 34px;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      color: #FFFFFF;
      z-index: 2;
    }

    .publish-date-desc {
      left: 8px;
    }

    .duration {
      right: 8px;
    }

    .tag.ad {
      //position: absolute;
      //top: 6px;
      //left: 6px;
      margin-right: 2px;
      height: 16px;
      z-index: 2;
      vertical-align: text-bottom;
    }

    .play-later-wrapper {
      position: absolute;
      right: 0;
      top: 0;
      margin: 5px;
      padding: 0 0 0 1px;
      box-sizing: border-box;
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.4);
      color: var(--bilibili-gray);
      visibility: hidden;
      z-index: 1;

      &.watched {
        visibility: visible;
      }

      &:hover {
        background-color: var(--bilibili-blue);
      }

      .play-later {
        width: 18px;
        height: 18px;
      }

      .text {
        display: inline-block;
        padding: 0 3px 0 2px;
        height: 18px;
        line-height: 18px;
        vertical-align: bottom;
      }
    }
  }

  .title {
    margin: 3px 0 0 0;
    padding: 0 1px;
    width: calc(100% - 4px);
    font-size: 14px;
    color: #141414;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    cursor: pointer;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2px;
    line-height: 12px;
    word-break: break-all;

    .info-line {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .extra-info {
      width: 100%;
      color: #616161;
    }

    a {
      color: #616161;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
    }

    .username {
      max-width: 144px;
      text-overflow: ellipsis;
      overflow: hidden;

      &:hover {
        text-decoration: underline;
      }
    }

    .add-special-attention-btn {
      visibility: hidden;
      margin-left: 4px;
      //padding: 0 1px 0 0;
      border-radius: 2px;
      text-decoration: none;
      color: #666;

      &:hover {
        background-color: var(--paper-grey-800);
        color: #aaa;
      }

      &:active {
        background-color: var(--paper-grey-900);
      }

      span {
        vertical-align: middle;
        font-size: 12px;
        font-weight: bold;
        //zoom: 0.8;
      }

      .text {
        padding: 0 2px;
        zoom: 0.8;
      }
    }
  }

  &:hover {
    .cover {
      //perspective: 1000px;
      //transform: scale3d(1.05, 1.05, 1);

      .cover-image {
        filter: brightness(1);
      }
    }

    .add-special-attention-btn {
      visibility: visible;
    }

    .play-later-wrapper {
      visibility: visible;
    }
  }

  &.special-attention {
    .cover {
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        box-shadow: inset 0 0 0 1px var(--bilibili-pink);
        z-index: 1;
        pointer-events: none;
      }
    }

    .title {
      color: var(--bilibili-pink);
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    .title {
      color: #E5E5E5;
    }

    .info {
      a {
        color: #999999;
      }
    }

    .cover-image {
      //filter: brightness(0.85);
    }
  }
`;class c extends a.default.Component{constructor(e){super(e),this.state={isSetWatchLater:!1,watchLaterText:!1},this.visible=!1,this.handleOnClick=(e,t)=>{e.stopPropagation(),chrome.runtime.sendMessage({target:"tabController",event:"create",url:t}),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"ad_card",action:"click_ad",label:this.props.id})}}componentDidMount(){chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"ad_card",action:"show_ad",label:this.props.id})}render(){const e=this.props,{cover:t,title:i="none title",link:n}=e,l=o(e,["cover","title","link"]);return a.default.createElement(s,Object.assign({},l,{onMouseUp:e=>this.handleOnClick(e,n)}),a.default.createElement("a",{className:"cover"},a.default.createElement(r.Image,{className:"cover-image",url:t+"@634w_400h.webp",height:86})),a.default.createElement("a",{className:"title",title:i},a.default.createElement("img",{className:"tag ad",src:chrome.runtime.getURL("/statics/images/adTag.png"),alt:"ad"}),i))}}t.ADCard=c,c.defaultProps={showWatcherLaterButton:!0}},38122:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.OldADCard=void 0;const s=i(83656),c=r(i(57689)),d=l(i(635)),p=d.default.section.attrs(()=>({className:"video-card"}))`
  position: relative;
  width: 100%;
  //max-width: 200px;
  min-width: 148px;
  height: 114px;
  z-index: 1;
  contain: paint;
  //content-visibility: auto;
  //contain-intrinsic-size: none 114px;

  .cover {
    position: relative;
    display: block;
    width: 100%;
    height: 110px;
    //border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    //box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
    :before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 38px;
      width: 100%;
      //border-radius: 0 0 2px 2px;
      background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));
      z-index: 1;
      pointer-events: none;
    }

    .cover-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: filter 0.3s cubic-bezier(0.5, 0.01, 0, 1) 0s, transform 0.3s cubic-bezier(0.5, 0.01, 0, 1) 0s;
      //filter: grayscale(0.5) brightness(0.24);
      //transform: scale(1.3);
    }

    .publish-date-desc {
      position: absolute;
      top: 6px;
      left: 8px;
      padding: 0 2px;
      min-width: 34px;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      color: #FFFFFF;
      z-index: 2;
    }

    .tag.ad {
      margin-right: 2px;
      height: 16px;
      z-index: 2;
      vertical-align: text-bottom;
    }

    .play-later-wrapper {
      position: absolute;
      right: 0;
      top: 20px;
      margin: 4px;
      padding: 0 0 0 1px;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.4);
      color: var(--bilibili-gray);
      visibility: hidden;
      z-index: 1;

      &.watched {
        visibility: visible;
      }

      &:hover {
        background-color: var(--bilibili-blue);
      }

      .play-later {
        width: 18px;
        height: 18px;
      }

      .text {
        display: inline-block;
        padding: 0 3px 0 2px;
        height: 18px;
        line-height: 18px;
        vertical-align: bottom;
      }
    }
  }

  .top-info {
    position: absolute;
    top: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 4px 4px 0;
    width: 100%;
    line-height: 16px;
    //text-shadow: 0 0 2px #000, 0 0 2px #000;

    .user-info {
      margin-right: 4px;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      padding: 1px 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: keep-all;
      transition: background-color .3s;
    }


    a {
      color: #fff;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
    }

    .username {
      max-width: 144px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: keep-all;

      &:hover {
        text-decoration: underline;
      }
    }

    .add-special-attention-btn {
      visibility: hidden;
      margin-left: 2px;
      text-decoration: none;
      color: #fff;

      &:hover {
        color: #aaa;
      }

      span {
        vertical-align: middle;
        font-size: 12px;
        font-weight: bold;
      }

      .text {
        padding: 0 2px;
        zoom: 0.8;
      }
    }
  }

  .time-box {
    flex-shrink: 0;
    display: inline-block;
    margin-left: auto;
    font-size: 12px;
    font-family: system-ui;
    text-align: center;
    color: #FFFFFF;
    z-index: 2;

    .duration, .publish-date {
      padding: 1px 4px;
      transition: background-color .3s;
    }
  }

  .bottom-info {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 6px 4px;
    width: 100%;
    line-height: 16px;

    .title {
      display: -webkit-box;
      flex-grow: 1;
      font-size: 12px;
      color: #ffffff;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;
      cursor: pointer;
      z-index: 1;
    }
  }

  &:hover {
    .cover .cover-image {
      filter: grayscale(0) brightness(1);
      transform: scale(1);
    }

    .top-info {
      .user-info {
        background-color: rgb(0 0 0 / 50%);

        .add-special-attention-btn {
          visibility: visible;
        }
      }

      .duration {
        background-color: rgb(0 0 0 / 50%);
      }

      .publish-date {
        background-color: rgb(0 0 0 / 50%);
      }
    }

    .play-later-wrapper {
      visibility: visible;
    }
  }

  &.special-attention {
    .cover {
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        box-shadow: inset 0 0 0 2px var(--bilibili-pink);
        pointer-events: none;
        z-index: 2;
      }
    }

    .title, .username {
      //color: var(--bilibili-pink);
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    .title {
      color: #E5E5E5;
    }

    .user-info {
      a {
        color: #fff;
      }
    }

    .cover-image {
      //filter: brightness(0.85);
    }
  }
`,u=function(e){var{cover:t,title:i="none title",link:o,id:n}=e,r=a(e,["cover","title","link","id"]);(0,c.useEffect)(()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"ad_card",action:"show_ad",label:n})},[]);const l=c.default.useCallback(e=>{e.stopPropagation(),o&&(chrome.runtime.sendMessage({target:"tabController",event:"create",url:o}),chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"ad_card",action:"click_ad",label:o}))},[o]);return c.default.createElement(p,Object.assign({},r,{onMouseUp:l}),c.default.createElement("div",{className:"cover"},c.default.createElement(s.Image,{className:"cover-image",url:t+"@638w_220h.webp",height:86,lazy:!0,duration:0}),c.default.createElement("div",{className:"bottom-info"},c.default.createElement("a",{className:"title",title:i},c.default.createElement("img",{className:"tag ad",src:chrome.runtime.getURL("/statics/images/adTag.png"),alt:"ad"}),i))))};t.OldADCard=u},12865:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Content=void 0;const n=i(58383),r=o(i(57689)),a=o(i(635)),l=i(59371),s=a.default.div.attrs(({show:e,position:t})=>({className:["handle-content-wrapper",e?"":"hide","left"===t?"right":"left"]}))`
  position: absolute;
  top: 0;
  padding: 10px;
  max-width: 500px;
  min-width: 100px;
  width: max-content;
  min-height: 40px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.14) 0 2px 4px 0;
  background-color: rgb(246 246 246);
  color: #222;
  opacity: 1;
  transition: transformX .15s, opacity .15s;
  overflow: auto;

  &.left {
    right: 36px;
    border-radius: 4px 0 4px 4px;
    transform: translateX(0px);
    transform-origin: top right;
  }

  &.right {
    left: 36px;
    border-radius: 0 4px 4px 4px;
    transform: translateX(0px);
    transform-origin: top left;
  }

  &.hide {
    transition: transform .2s, opacity .1s, visibility 0s .2s;
    opacity: 0;
    visibility: hidden;

    &.left {
      //transform: translateX(20px) !important;
    }

    &.right {
      //transform: translateX(-20px) !important;
    }
  }

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

  .need-update-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    padding: 0 6px;
    height: 30px !important;
    border-radius: 4px;
    font-size: 12px;
    background-color: var(--bilibili-blue);
    color: var(--bilibili-gray);
    //z-index: 30;

    //.skip-btn {
    //  margin-left: auto;
    //  margin-right: 12px;
    //  cursor: pointer;
    //}

    .need-update-btn {
      margin-left: auto;
      padding: 0 8px;
      height: 20px;
      line-height: 20px;
      border-radius: 6px;
      background-color: var(--bilibili-gray);
      color: var(--bilibili-blue);
      text-decoration: none;
    }
  }

  & > footer {
    display: flex;
    justify-content: space-between;
    margin: 12px -10px -10px;
    padding: 4px 10px 4px;
    border-top: 1px solid var(--google-grey-100);
    font-size: 12px;
    color: var(--google-grey-700);

    .bilibili-helper-name, .report {
      margin-right: 16px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    .version {
      margin-left: auto;
    }
  }

  @media (prefers-color-scheme: dark) {
    &::-webkit-scrollbar-thumb {
      background-color: black;
    }
  }
`;class c extends r.default.Component{constructor(e){super(e),this.contentRef=r.default.createRef(),this.state={states:null,currentVersionInfo:null,needRefreshPage:!1,hasLogin:!1,hasRegister:!1,bilibiliAccount:null,downloadingSettings:!1,loading:!1,loginLoginModalShow:!1,hasBilibiliAccountLogin:!1,handleOnLoginOtherBilibiliAccount:()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://passport.bilibili.com/login?from=bilibili-helper"},()=>{this.setState({needRefreshPage:!0})})},handleOnClickLogin:()=>{this.state.loading||(this.setState({loading:!0}),chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"login"},e=>{e?this.setState({loading:!1,hasLogin:e.hasLogin,hasRegister:e.hasRegister,bilibiliAccount:e.bilibiliAccount}):this.setState({loading:!1,loginLoginModalShow:!0})}))},handleOnClickRefresh:()=>{history.go()},handleOnClickGoToOverview:()=>{this.setState({needRefreshPage:!0}),this.openPage(chrome.runtime.getURL("/html/config.html"))},handleOnClickGoToWebsite:()=>{this.openPage("https://acghelper.com/")},openPrivacy:()=>{this.openPage("https://github.com/bilibili-helper/bilibili-helper-o/blob/master/ADDON_PRIVACY.md")}},this.openPage=e=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:e})},this.openHelperWebsite=()=>{this.openPage("https://acghelper.com/")},this.goToSendMessageForDeveloper=()=>{this.openPage("https://message.bilibili.com/#/whisper/mid1344117169")}}componentDidMount(){chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"getStatus"},e=>{if(e){const{hasLogin:t,bilibiliAccount:i,downloadingSettings:o}=e;this.setState({hasLogin:t,bilibiliAccount:i,downloadingSettings:o})}}),chrome.runtime.sendMessage({target:"states",event:"getStates"},e=>{e&&this.setState({states:e})}),chrome.runtime.sendMessage({target:"states",event:"getVersionInfo"},e=>{e&&this.setState({currentVersionInfo:Object.assign({},e)})})}render(){const{show:e=!1,position:t="left",children:i}=this.props,{states:o}=this.context;return r.default.createElement(l.MainStore.Provider,{value:this.state},r.default.createElement(s,{ref:this.contentRef,id:"bilibiliHelper2ContentWrapper",show:e,position:t},o&&o.needUpdate?r.default.createElement("div",{className:"need-update-wrapper"},"\u65b0\u7248\u672c\u300c",o.latestVersion,"\u300d\u73b0\u5df2\u53d1\u5e03 ~",r.default.createElement("a",{className:"need-update-btn",href:"https://acghelper.com",target:"_blank",rel:"noreferrer"},"\u7acb\u5373\u66f4\u65b0")):null,i,r.default.createElement("footer",null,r.default.createElement("span",{className:"bilibili-helper-name",onClick:this.openHelperWebsite},"ACG\u52a9\u624b\u5b98\u7f51"),r.default.createElement("span",{className:"report",onClick:this.goToSendMessageForDeveloper},"\u70b9\u51fb\u53cd\u9988"),r.default.createElement("span",{className:"version"},"\u5f53\u524d\u7248\u672c: ",n.version))))}}t.Content=c,c.contextType=l.MainStore},48723:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Handle=t.HandleButton=void 0;const s=i(18258),c=l(i(57689)),d=i(58188),p=i(96582),u=r(i(635)),f=i(12865),h=i(59371);(0,p.injectIconfont)();const b=u.createGlobalStyle`
    html {
      zoom: 1;
    }
`,m=u.default.div.attrs(({showWhenFullWiden:e,showInInjectPlayer:t})=>({className:["handle-wrapper",e?"show-in-full-widen":""],id:"bilibiliHelper2HandleButtonWrapper"}))`
	position: fixed;
	top: 100px;
	right: 24px;
	width: 36px;
	height: 36px;
	box-sizing: border-box;
	//opacity: .8;
	transition: opacity .2s .1s;
	z-index: 99999;
	
	&:hover {
		opacity: 1 !important;
		transition: opacity .2s;
	}
	
	&.show-in-full-widen {
		z-index: 999999;
	}
`;t.HandleButton=(0,u.default)(s.Icon).attrs(()=>({id:"bilibiliHelper2HandleButton"}))`
	position: relative;
	margin: 0;
	padding: 6px;
	border-radius: 50%;
	background-size: 24px;
	box-sizing: content-box;
	opacity: 1;
	cursor: pointer;
	user-select: none;
	transform: scale(1);
	transition: transform 300ms, border-radius 200ms, opacity .2s, opacity .3s;
	z-index: 1;
	
	&.default {
		background-color: var(--bilibili-pink);
		color: #fff;
		box-shadow: 0 1px 4px 0 rgb(251 114 153 / 0.6);
	}
	
	&.initialized {
		opacity: 1;
	}
	
	&.translucentPink {
		background-color: var(--bilibili-pink);
		color: #fff;
		box-shadow: 0 0 1px 0 var(--bilibili-pink);
		opacity: .6;
	}
	
	&.pinkCat {
		background-color: #fff;
		color: var(--bilibili-pink);
		box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
	}
	
	&.blackCat {
		background-color: var(--bilibili-gray);
		color: var(--paper-grey-900);
		box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
	}
	
	&.translucentWhite {
		background-color: var(--bilibili-gray);
		color: var(--bilibili-pink);
		opacity: .6;
	}
	
	&::before {
		display: block;
		transition: transform 300ms;
	}
	
	&:hover {
		opacity: 1;
		
		.lock-btn, .dark-btn {
			visibility: visible;
		}
	}
	
	&:hover::before {
		transform: scale(1.1);
	}
	
	&:active {
		transform: scale(0.9);
	}
	
	.tool-buttons {
		position: absolute;
		bottom: -6px;
		left: 0;
		width: 100%;
		
		.bilibili-helper-2-iconfont {
			transform: scale(.7);
			box-sizing: content-box;
			
			::before {
				pointer-events: none;
			}
		}
	}
	
	&.right.showContent {
		border-radius: 0 50% 50% 0;
	}
	
	&.left.showContent {
		border-radius: 50% 0 0 50%;
	}
`;const g=(0,u.default)(s.Icon).attrs(({position:e})=>({className:["lock-btn",e]}))`
	position: absolute;
	bottom: -12px;
	padding: 3px;
	border-radius: 50%;
	background-color: var(--bilibili-gray);
	color: var(--paper-grey-900);
	//transform: scale(0.6);
	cursor: pointer;
	user-select: none;
	visibility: hidden;
	z-index: 1;
	
	&.right {
		right: 0;
		transform-origin: top right;
	}
	
	&.left {
		left: 0;
		transform-origin: top left;
	}
	
	.bilibili-helper-2-dark-mode & {
		background-color: var(--dark-4);
		color: var(--paper-pink-50);
		
		&::before {
			transform: scale(0.85);
			display: block;
		}
	}
`;class x extends c.default.Component{constructor(e){super(e),this.state={isLocked:!0,toolBarPosition:"right",showContent:!1,catType:"default",hideWhenFullWiden:!0,showInInjectPlayer:!1,positionOption:{top:100,left:24},initialized:!1,states:{},isVIP:!1,isSuperVIP:!1,setVIPState:()=>this.state.states&&(0,d.isVIP)(this.state.bhAccount),setSuperVIPState:()=>this.state.states&&(0,d.isSuperVIP)(this.state.bhAccount)},this.mouseDown=!1,this.handleMoved=!1,this.initPosition=()=>{var e,t;const{isLocked:i,positionOption:o}=this.state,n=document.getElementById("bilibiliHelper2HandleButtonWrapper");let r,a=!1;if(n.style.position=i?"fixed":"absolute",o){let{top:e,left:t,right:i}=o;e<0&&(e=0,o.top=0,a=!0),n.style.top=e+"px",void 0!==t?(t<0&&(t=0,o.left=0,a=!0),r="left",n.style.left=t+"px"):void 0!==i&&(i<0&&(i=0,o.right=0,a=!0),r="right",n.style.right=i+"px"),a&&(this.setState({toolBarPosition:r,positionOption:o}),this.uploadHandleConfig())}const l=n.offsetWidth,s=n.offsetHeight,c=n.offsetTop,d=n.offsetLeft,p=Number((null===(t=null===(e=document.getElementsByTagName("html"))||void 0===e?void 0:e[0])||void 0===t?void 0:t.computedStyleMap().get("zoom").toString())||1);let u=window.visualViewport.width/p,f=window.visualViewport.height/p;c>f-s&&(n.style.top=f-s+"px"),d>u-l&&(n.style.left=u-l+"px"),this.setState({initialized:!0})},this.initDragEvent=()=>{var e,t;const i=document.getElementById("bilibiliHelper2HandleButtonWrapper"),o=document.getElementById("bilibiliHelper2ContentWrapper"),n=document.getElementById("bilibiliHelper2HandleButton");let r,a,l=n.clientWidth,s=Number((null===(t=null===(e=document.getElementsByTagName("html"))||void 0===e?void 0:e[0])||void 0===t?void 0:t.computedStyleMap().get("zoom").toString())||1),c=window.visualViewport.width/s,d=window.visualViewport.height/s;const p=()=>{var e,t;r=o.offsetHeight,s=Number((null===(t=null===(e=document.getElementsByTagName("html"))||void 0===e?void 0:e[0])||void 0===t?void 0:t.computedStyleMap().get("zoom").toString())||1),a=n.offsetHeight,c=window.visualViewport.width/s,d=window.visualViewport.height/s,o.style.maxHeight=d-50<=r?d-30+"px":""};if(window.addEventListener("resize",p),document.body.addEventListener("resize",p),n.addEventListener("mousedown",e=>{e.stopPropagation(),this.mouseDown=!0,this.originOffectTop=i.offsetTop,this.originOffectLeft=i.offsetLeft,this.originX=e.clientX,this.originY=e.clientY,p(),l=n.clientWidth}),window.ResizeObserver){const e=new window.ResizeObserver(()=>{r=o.offsetHeight,d-50<r&&(o.style.maxHeight=d-30+"px")});e.observe(o)}document.addEventListener("mousemove",e=>{if(this.mouseDown){const t=(this.originX-e.clientX)/s,n=(this.originY-e.clientY)/s,p=Math.abs(2*t+2*n);if(p>10||this.handleMoved){let e=this.originOffectTop-n;if(e<=0?e=0:e>=d-a&&(e=d-a),o.style.transform=d-e<r?`translate(0px, ${-(r-(d-e))}px)`:"translate(0, 0)",i.style.top=e+"px",this.handleMoved=!0,this.originOffectLeft-t+l/2<c/2){"left"!==this.state.toolBarPosition&&this.setState({toolBarPosition:"left"});let e=this.originOffectLeft-t;e<=0&&(e=0),i.style.right="unset",i.style.left=e+"px"}else{"right"!==this.state.toolBarPosition&&this.setState({toolBarPosition:"right"});let e=c-(this.originOffectLeft-t)-l;e<0&&(e=0),i.style.left="unset",i.style.right=e+"px"}}}},!0),document.addEventListener("mouseup",()=>{const{toolBarPosition:e,positionOption:t}=this.state;if(this.mouseDown){this.mouseDown=!1;let o=!1,{left:n,top:r,right:a}=i.getBoundingClientRect();r<0&&(r=0,o=!0),n<-10&&(n=-10,o=!0),a<-10&&(a=-10,o=!0);const l=document.body.clientWidth;(t.top!==r||void 0!==t.left&&t.left!==n||void 0!==t.right&&t.right!==l-a)&&(o=!0),t.top=r,"left"===e?(t.left=n,delete t.right):"right"===e&&(t.right=l-a,delete t.left),o&&this.setState({positionOption:t},()=>{this.uploadHandleConfig()})}},!1)},this.handleOnClickLockModeBtn=e=>{e.persist(),e.stopPropagation();const t=!this.state.isLocked;return chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"cat",action:"click_handle_lock_button",label:!this.state.isLocked}),this.setState({isLocked:!this.state.isLocked},()=>{var e,i;const{toolBarPosition:o}=this.state,n=document.getElementById("bilibiliHelper2HandleButtonWrapper"),r=Number((null===(i=null===(e=document.getElementsByTagName("html"))||void 0===e?void 0:e[0])||void 0===i?void 0:i.computedStyleMap().get("zoom").toString())||1);let{top:a,left:l,right:s}=n.getBoundingClientRect();const c=window.scrollY,d=window.scrollX,p={};if(t){n.style.position="fixed",n.style.top=a+"px";let e=a-c;e<=12&&(e=12),p.top=e}else n.style.position="absolute",n.style.top=a+c/r+"px",p.top=a+c/r;"left"===o?(n.style.left=l-d+"px",n.style.right="unset",p.left=l-d,delete p.right):"right"===o&&(n.style.left="unset",n.style.right=""+(document.body.clientWidth-s),delete p.left,p.right=document.body.clientWidth-s),this.setState({positionOption:p},()=>{this.uploadHandleConfig()})}),!1},this.handleOnClickHandleBtn=()=>{const{onBeforeClickHandle:e,onAfterClickHandle:t}=this.props;e instanceof Function&&e(this.state.showContent),this.handleMoved?(this.handleMoved=!1,t instanceof Function&&t(this.state.showContent)):(this.updateContentWrapperPosition(),this.setState({showContent:!this.state.showContent}),t instanceof Function&&t(!this.state.showContent))},this.updateContentWrapperPosition=()=>{var e,t,i;const o=document.getElementById("bilibiliHelper2ContentWrapper"),n=document.getElementById("bilibiliHelper2HandleButton"),r=o.offsetHeight,a=n.offsetHeight,l=Number((null===(i=null===(t=null===(e=document.getElementsByTagName("html"))||void 0===e?void 0:e[0])||void 0===t?void 0:t.style)||void 0===i?void 0:i.zoom)||1);let s=window.visualViewport.height/l,c=this.originOffectTop;c>=s-a&&(c=s-a),o.style.transform=s-c<r?`translate(0px, ${-(r-(s-c))}px)`:"translate(0, 0)"},this.uploadHandleConfig=()=>{const{type:e}=this.props,{positionOption:t,isLocked:i,toolBarPosition:o}=this.state;chrome.runtime.sendMessage(Object.assign(Object.assign({target:"cat",event:"setHandleConfig",type:e},t),{locked:i,direction:o}),()=>{chrome.runtime.sendMessage({target:"bilibiliHelperAccountController",event:"uploadSettings",featureName:"cat"})})}}get pageWidth(){return document.documentElement.offsetWidth+document.documentElement.scrollLeft}componentDidMount(){this.initDragEvent(),chrome.runtime.sendMessage({target:"states",event:"getStates"},e=>{e&&this.setState({states:e},()=>{this.setState({isVIP:this.state.setVIPState(),isSuperVIP:this.state.setSuperVIPState()})})}),chrome.runtime.sendMessage({target:"cat",event:"getSetting"},({catType:e,showWhenFullWiden:t=!0,showInInjectPlayer:i=!1,autoClose:o=!1})=>{this.setState({catType:e,showWhenFullWiden:t,showInInjectPlayer:i}),(o||this.props.autoClose)&&document.addEventListener("click",e=>{this.selfContentDOM||(this.selfContentDOM=document.getElementById("bilibiliHelper2HandleButtonWrapper")),this.selfContentDOM&&!this.selfContentDOM.contains(e.target)&&e.target!==this.selfContentDOM&&this.setState({showContent:!1})})}),chrome.runtime.sendMessage({target:"cat",event:"getHandleConfig",type:this.props.type},e=>{if(!e)return;const{left:t,right:i,top:o,direction:n,locked:r}=e;this.setState({toolBarPosition:n,isLocked:r,positionOption:{top:o,left:t,right:i}},()=>{this.initPosition()})})}render(){const e=this.props,{lockMode:i=!0,children:o,onBeforeClickHandle:n,onAfterClickHandle:r}=e,l=a(e,["lockMode","children","onBeforeClickHandle","onAfterClickHandle"]),{isLocked:s,toolBarPosition:d,showContent:p,catType:u,showWhenFullWiden:x,showInInjectPlayer:v,initialized:y}=this.state;return c.default.createElement(m,Object.assign({showWhenFullWiden:x,showInInjectPlayer:v},l),c.default.createElement(b,null),c.default.createElement(t.HandleButton,{className:["handle-button",y?"initialized":"",d,p?"showContent":"",u].filter(Boolean).join(" "),icon:"cat",size:24,onClick:this.handleOnClickHandleBtn},c.default.createElement("div",{className:"tool-buttons"},i&&c.default.createElement(g,{position:d,icon:s?"lock":"unlock",size:16,onClick:this.handleOnClickLockModeBtn}))),c.default.createElement(h.MainStore.Provider,{value:this.state},c.default.createElement(f.Content,{show:p,position:d},o)))}}t.Handle=x,x.defaultProps={type:"common"}},59371:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MainStore=void 0;const n=o(i(57689));t.MainStore=n.default.createContext({})},53368:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BilibiliHelperButton=void 0;const n=o(i(57689)),r=i(635),a=i(48723),l=i(43521),s=r.createGlobalStyle`
  body {
    ${l.globalColor};
  }
`,c=function(e){return n.default.createElement(n.default.Fragment,null,n.default.createElement(s,null),n.default.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://at.alicdn.com/t/font_1690169_cumlkywihxk.css"}),n.default.createElement(a.Handle,Object.assign({},e)))};t.BilibiliHelperButton=c},40529:function(e,t,i){var o=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BilibiliHelperButtonGuide=void 0;const r=i(72673),a=n(i(57689)),l=i(95947),s=n(i(97326)),c=n(i(635)),d=(0,c.default)(r.Modal)`
  flex-direction: column;
  margin: 32px;
  width: 800px;
  max-width: 1000px;
  min-width: 300px;
  height: 500px;
  vertical-align: middle;
  border-radius: 4px;
  color: #222;
  text-align: left;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.24);
  background-color: rgb(0 0 0 / 50%);
  transition: transform 0.12s;
  backdrop-filter: blur(10px);
  transform: scale(1);
  overflow: hidden;
  
  main {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 36px;
    left: 0;
  }

  .toolbar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 36px;
    display: flex;
    align-items: center;
    padding: 0 2px;
    background-color: rgb(255 255 255 / 4%);

    .button {
      .button-view {
        padding: 0 16px;
      }
    }

    .prev-button {

    }

    .next-button {
      margin-left: auto;
    }

    .close-button {
      margin-left: auto;
    }
  }
`,p=c.default.section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity .3s, visibility .3s;
  z-index: -1;
  overflow: auto;

  &.show {
    transition: opacity .2s;
    visibility: visible;
    opacity: 1;
    z-index: 1000000;
  }

  .title {

  }

  .content {
    .topic-image {
      margin: 30px 30px 0;
      width: calc(100% - 60px);
      border-radius: 4px;
    }
  }
`;class u extends a.default.Component{constructor(e){super(e)}render(){const e=this.props,{children:t}=e,i=o(e,["children"]);return a.default.createElement(p,Object.assign({},i),a.default.createElement("div",{className:"content"},t))}}class f extends a.default.Component{constructor(e){super(e),this.state={current:0},this.updateBodyOverflow=()=>{},this.handleOnClickPrevButton=()=>{const{current:e}=this.state;this.state.current>0&&this.setState({current:e-1})},this.handleOnClickNextButton=()=>{const{sections:e}=this.props,{current:t}=this.state;this.state.current<e.length-1&&this.setState({current:t+1})},this.wrapper=document.createElement("div"),document.body.appendChild(this.wrapper)}componentDidMount(){this.updateBodyOverflow()}componentDidUpdate(e,t,i){this.updateBodyOverflow()}render(){const e=this.props,{show:t,sections:i,onClose:n}=e,r=o(e,["show","sections","onClose"]),{current:c}=this.state;return s.default.createPortal(a.default.createElement(d,Object.assign({},r,{open:t}),a.default.createElement("main",null,i.map((e,t)=>a.default.createElement(u,{className:c===t?"show":"hide",key:t},e))),a.default.createElement("footer",{className:"toolbar"},c>0?a.default.createElement(l.Button,{className:"prev-button primary",disabled:0===c,onClick:this.handleOnClickPrevButton},"\u4e0a\u4e00\u9875"):null,c<i.length-1?a.default.createElement(l.Button,{className:"next-button primary",onClick:this.handleOnClickNextButton},"\u4e0b\u4e00\u9875"):null,c===i.length-1?a.default.createElement(l.Button,{className:"close-button primary",onClick:n},"\u6211\u77e5\u9053\u5566_(:\u0437\u300d\u2220)_"):null)),this.wrapper)}}t.BilibiliHelperButtonGuide=f,f.defaultProps={show:!1,sections:[]}},95947:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i};Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;const l=r(i(57689)),s=r(i(635)),c=i(18258),d=i(72194),p=i(37459),{color:u}=p.theme,f=s.css`
  height: 36px;
  //margin-right: -12px;
  border-radius: 50%;
`,h=s.default.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 32px;
  line-height: inherit;
  border-radius: 3px;
  font-size: 12px;
  color: ${u("paper-grey-600")};
  ${({theme:e})=>e.icon&&f};
  overflow: hidden;
  user-select: none;

  &.disabled {
    cursor: not-allowed !important;
    filter: grayscale(1) !important;
  }

  &.primary {
    background-color: var(--bilibili-blue);
    color: var(--bilibili-gray);
  }

  &.border {
    border: 1px solid #ddd;
    box-sizing: border-box;
  }
`,b=s.default.button`
  display: block;
  width: 100%;
  height: 100%;
  min-width: ${({theme:e})=>e.icon?"36px":"50px"};
  ${({theme:e})=>e.icon?"padding: 0":""};
  ${({theme:e})=>e.normal?"min-height: 36px":""};
  font-size: inherit;
  font-weight: inherit;
  background-color: transparent;
  color: inherit;
  cursor: ${({theme:e={}})=>e.disable?"not-allowed":e.loading?"progress":"pointer"};
  filter: grayscale(${({theme:e={}})=>e.disable?1:0});
  transition: color .3s;
  border: none;
  outline: none;
  z-index: 1;

  &.disabled {
    cursor: not-allowed !important;;
    //pointer-events: none!important;
  }
`,m=function(e){var{disabled:t=!1,disableEvent:i=!0,loading:o,children:n,className:r,theme:p,icon:u,normal:f,onClick:m,disable:g,iconSize:x=16,onMouseDown:v,onMouseUp:y}=e,w=a(e,["disabled","disableEvent","loading","children","className","theme","icon","normal","onClick","disable","iconSize","onMouseDown","onMouseUp"]);const[k,_]=(0,l.useState)(!1),[O,j]=(0,l.useState)(null),[C,E]=(0,l.useState)(void 0),[M,P]=(0,l.useState)(void 0),z=(0,l.useRef)(null),B=(0,l.useCallback)(e=>{if(t&&i)return!1;if(!k){const t=z.current.clientWidth,i=z.current.clientHeight,o=z.current.getBoundingClientRect(),n=u?t/2:e.clientX-o.left,r=u?i/2:e.clientY-o.top,a=u?t/2:Math.abs(t/2-n)+t/2,l=u?i/2:Math.abs(i/2-r)+i/2;_(!0),j(Math.sqrt(a*a+l*l)),E(n),P(r)}},[k,t]),N=(0,l.useCallback)(()=>{if(t&&i)return!1;k&&_(!1)},[k,t]);return l.default.createElement(s.ThemeProvider,{theme:Object.assign(Object.assign({},p),{radius:O,icon:u,normal:f,disable:g,loading:o})},l.default.createElement(h,{className:["button",r,t?"disabled":""].filter(Boolean).join(" "),onMouseDown:g?null:B,onMouseUp:g?null:N,onMouseLeave:g?null:N},l.default.createElement(b,Object.assign({ref:z,onClick:t&&i?null:m,onAuxClick:t&&i?null:m,onMouseDown:v,onMouseUp:y,className:["button-view",t?"disabled":""].join(" ")},w),l.default.createElement(l.default.Fragment,null,u&&l.default.createElement(c.Icon,{icon:u,size:x}),n)),l.default.createElement(d.Ripple,{active:k,x:C,y:M})))};t.Button=m},45242:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Carousel=void 0;const s=i(18258),c=i(83656),d=r(i(57689)),p=l(i(635)),u=p.default.div.attrs({className:"carousel"})`
  position: relative;
  //border-radius: 2px;
  //box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 2px 8px rgb(0 0 0 / 10%);
  //overflow: hidden;

  .dot-btns {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 8px;
    right: 10px;
    width: fit-content;
    height: 6px;
    z-index: 2;

    span {
      display: inline-block;
      margin-right: 5px;
      width: 6px;
      height: 6px;
      vertical-align: top;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 1px 2px rgb(0 0 0 / 0.5);
      cursor: pointer;

      &:last-of-type {
        margin-right: 0;
      }

      &.active {
        width: 8px;
        height: 8px;
        background-color: #FB7299;
      }
    }
  }

  .turn-btn {
    position: absolute;
    top: calc(50% - 18px);
    padding: 8px 4px;
    background-color: rgba(0, 0, 0, .7);
    //opacity: 0;
    visibility: hidden;
    color: #eee;
    z-index: 3;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .turn-left-btn {
    left: 0;
    border-radius: 0 4px 4px 0;
  }

  .turn-right-btn {
    right: 0;
    border-radius: 4px 0 0 4px;
  }

  &:hover {
    .turn-btn {
      //opacity: 1;
      visibility: visible;
    }
  }
`,f=p.default.div.attrs({className:"carousel-item"})`
  position: absolute;
  top: 0;
  left: calc(50% - 155px);
  height: 100%;
  width: 310px;
  opacity: 0;
  cursor: pointer;
  transition: opacity .7s, transform .3s;
  transform: translate(0, 0);
  border-radius: 2px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 20%), 0 2px 8px rgb(0 0 0 / 10%);
  overflow: hidden;
  //will-change: transform, opcity;

  :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 32px;
    width: 100%;
    border-radius: 0 0 2px 2px;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.6));
    z-index: 1;
  }

  &.active {
    opacity: 1;
    z-index: 2;
  }

  &.beforeBefore {
    z-index: 1;
    transform: translate(-202%, 0);
  }

  &.before {
    opacity: 1;
    z-index: 1;
    transform: translate(-102%, 0);
  }

  &.after {
    opacity: 1;
    z-index: 1;
    transform: translate(102%, 0);
  }

  &.afterAfter {
    z-index: 1;
    transform: translate(202%, 0);
  }

  .title {
    position: absolute;
    left: 8px;
    bottom: 6px;
    color: #fff;
    z-index: 1;
  }

  .ad-tag {
    margin-right: 2px;
    width: 38px;
    height: 22px;
    vertical-align: bottom;
    zoom: 0.74;
    z-index: 1;
  }
`,h=function(e){var{index:t,selected:i,src:o,onClick:n,alt:r,id:l,isAD:s,itemCount:p}=e,u=a(e,["index","selected","src","onClick","alt","id","isAD","itemCount"]);return d.default.createElement(f,Object.assign({className:[i===t?"active":null,(i<=1?p-(2-i)===t:i-2===t)?"beforeBefore":null,(0===i?p-1===t:i-1===t)?"before":null,(i===p-1?0===t:i+1===t)?"after":null,(i>=p-2?2+i-p===t:i+2===t)?"afterAfter":null].filter(Boolean).join(" "),onClick:()=>n()},u),d.default.createElement(c.Image,{url:o,alt:r}),d.default.createElement("div",{className:"title"},s?d.default.createElement(c.Image,{className:"ad-tag",url:chrome.runtime.getURL("/statics/images/adTag.png"),alt:"ad-tag"}):null,r))},b=function(e){var{data:t=[],interval:i=2500,showDots:o=!1,columns:n}=e,r=a(e,["data","interval","showDots","columns"]);const[l,c]=(0,d.useState)(0),[p,f]=(0,d.useState)(!1),b=(0,d.useCallback)(e=>{c(e)},[]),m=(0,d.useCallback)(()=>{f(!0)},[]),g=(0,d.useCallback)(()=>{f(!1)},[]),x=(0,d.useCallback)(()=>{c(0===l?t.length-1:l-1)},[l,t]),v=(0,d.useCallback)(()=>{l===t.length-1?c(0):c(l+1)},[l,t]),y=(0,d.useCallback)(()=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"popup_home",action:"click_carousel",label:l}),chrome.runtime.sendMessage({target:"tabController",event:"create",strict:!1,url:t?t[l]&&t[l].url:null})},[l,t]);return(0,d.useEffect)(()=>{let e;return p||(e=setTimeout(()=>{l===t.length-1?c(0):c(l+1)},i)),()=>{clearTimeout(e)}},[l,p,t]),d.default.createElement(u,Object.assign({},r,{onMouseEnter:m,onMouseLeave:g,style:{gridColumnEnd:"span "+n}}),t.map((e,i)=>d.default.createElement(h,Object.assign({key:e.alt,index:i,selected:l,itemCount:t.length,onClick:y},e))),t.length>1&&o&&d.default.createElement("div",{className:"dot-btns"},t.map((e,t)=>d.default.createElement("span",{key:e.alt,className:l===t?"active":null,onClick:()=>b(t)}))),t.length>1&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"turn-btn turn-left-btn",onClick:x},d.default.createElement(s.Icon,{icon:"left-arrow",size:20})),d.default.createElement("div",{className:"turn-btn turn-right-btn",onClick:v},d.default.createElement(s.Icon,{icon:"right-arrow",size:20}))))};t.Carousel=b},22325:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorBoundary=void 0;const n=o(i(57689));class r extends n.default.Component{constructor(e){super(e),this.state={hasError:!1}}componentDidCatch(e,t){}render(){return this.state.hasError?n.default.createElement("h1",null,"Something went wrong."):this.props.children}}t.ErrorBoundary=r},18258:function(e,t,i){var o=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=void 0;const r=n(i(57689)),a=n(i(635)),l=i(15477),s={cat128:(0,l.getURL)("statics/images/icon-128.png"),catSvg:(0,l.getURL)("statics/images/cat.svg"),catSvgWhite:(0,l.getURL)("statics/images/cat-white.svg"),arrowRight:(0,l.getURL)("statics/images/arrow_right.svg"),arrowDown:(0,l.getURL)("statics/images/arrow_down.svg"),arrowUp:(0,l.getURL)("statics/images/arrow_up.svg"),arrowLeft:(0,l.getURL)("statics/images/arrow_left.svg")},c=a.default.span.attrs(({icon:e})=>({className:e?"bilibili-helper-2-iconfont bilibili-helper-2-icon-"+e:"icon"}))`
  display: inline-block;
  width: ${e=>e.size||36}px;
  height: ${e=>e.size||36}px;
  line-height: ${e=>e.size||36}px;
  //vertical-align: middle;
  font-size: ${e=>e.size||36}px !important;
  ${({image:e})=>e?`background-image: url("${s[e]}")`:""});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${e=>e.image?"100%":"60%"};
  -webkit-font-smoothing: antialiased;
`,d=e=>{var{icon:t,size:i=36}=e,n=o(e,["icon","size"]);return r.default.createElement(c,Object.assign({icon:t,size:i,className:t?"bilibili-helper-2-iconfont bilibili-helper-2-icon-"+t:"icon"},n))};t.Icon=d},83656:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i};Object.defineProperty(t,"__esModule",{value:!0}),t.Image=void 0;const l=r(i(57689)),s=r(i(635)),c=s.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,d=s.default.img.attrs({className:"img"})`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:not([src]) {
    content: url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
    backdrop-filter: blur(14px);
    background-color: rgb(221 221 221 / 7%);
    box-sizing: border-box;
  }

  &[src] {
    animation: ${c} cubic-bezier(0.16, 0.6, 0.45, 0.93);
    animation-duration: ${({duration:e=500})=>e}ms;
  }
`,p=l.default.forwardRef((function(e,t){var{sign:i,url:o,direct:n}=e,r=a(e,["sign","url","direct"]);const[s,c]=(0,l.useState)(!1),[p,u]=(0,l.useState)(null),[f,h]=(0,l.useState)(null),b=(0,l.useCallback)(()=>{u(o),h(i||o),c(!0)},[i,o]);return(0,l.useEffect)(()=>{f!==(i||o)&&c(!1);const e=new window.Image;return n?(u(o),h(i||o),c(!0)):(e.addEventListener("load",b),e.src=o),()=>{e.removeEventListener("load",b)}},[o,i,f]),l.default.createElement(d,Object.assign({ref:t,src:s?p:null,alt:i||null},r))}));t.Image=l.default.forwardRef((function(e,t){var{sign:i,url:o,lazy:n=!1,direct:r=!1,offset:s=0,offsetVertical:c=0,duration:d,onContentVisible:u}=e,f=a(e,["sign","url","lazy","direct","offset","offsetVertical","duration","onContentVisible"]);return l.default.createElement(p,Object.assign({key:i,url:o,direct:r,duration:d,ref:t},f))}))},65033:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0;const n=o(i(57689)),r=o(i(635)),a=r.default.input.attrs({className:"input"})`
  border: 1px solid #ccc;
  border-radius: 2px;
  outline: none;
`;t.Input=n.default.forwardRef((function(e,t){return n.default.createElement(a,Object.assign({},e,{ref:t}))}))},59326:function(e,t,i){var o=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=i(22325),a=i(83656),l=n(i(57689)),s=n(i(635)),c=s.default.section`
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding: 4px;
  width: 100%;
  min-width: 148px;
  //height: 98px;
  z-index: 1;
  cursor: pointer;
  //content-visibility: paint;
  //contain-intrinsic-size: 48px 0;

  &:hover {
    background-color: #fff;
  }

  //content-visibility: auto;
  //contain-intrinsic-size: none 98px;

  .cover {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 33%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 4px;
    transform-origin: 50% 30%;
    transition: transform .3s;

    .duration {
      position: absolute;
      right: 10px;
      bottom: 6px;
      padding: 0 3px;
      min-width: 34px;
      height: 15px;
      font-size: 12px;
      text-align: center;
      zoom: calc(4 / 6);
      color: #FFFFFF;
      background-color: rgb(0 0 0 / 80%);
      //border-radius: 2px;
    }
  }

  .avatar {
    flex-shrink: 0;
    margin-right: 6px;
    width: 40px;
    height: 40px;
    cursor: pointer;

    .img {
      border-radius: 20px;
      border: 1px solid #fff;
      box-sizing: border-box;
    }
  }

  .info {
    position: relative;
    display: flex;
    flex-direction: column;
    width: calc(100% - 40px);
    //height: 30px;
    line-height: 12px;
    word-break: break-all;
    z-index: 2;

    a {
      width: fit-content;
      height: 18px;
      line-height: 22px;
      font-size: 14px;
      color: #616161;
      cursor: pointer;
    }

    .title {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      //top: 74px;
      //display: -webkit-box;
      margin: 4px 0 0 0;
      box-sizing: border-box;
      //padding: 0 2px;
      //width: calc(100% - 46px);
      width: 100%;
      min-height: 22px;
      line-height: 16px;
      font-size: 12px;
      color: #828282;
      overflow: hidden;
      text-overflow: ellipsis;
      //white-space: nowrap;
      //text-indent: 2px;
      word-break: break-all;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      z-index: 1;
      pointer-events: none;
      //zoom: 0.9;
    }

    .username {
      margin-top: 2px;
      height: 12px;
      line-height: 12px;
      font-size: 12px;
      overflow: hidden;
      text-decoration: none;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: black;

      &:hover {
        text-decoration: underline;
      }
    }

    .add-special-attention-btn {
      visibility: hidden;
      margin-left: 4px;
      padding: 1px;
      height: 16px;
      line-height: 12px;
      //border-radius: 2px;
      text-decoration: none;
      transform: scale(0.8);
      color: #666;
      box-sizing: border-box;

      &:hover {
        background-color: var(--paper-grey-800);
        color: #aaa;
      }

      &:active {
        background-color: var(--paper-grey-900);
      }
    }
  }

  &:hover {
    .cover {
      //perspective: 1000px;
      //transform: scale3d(1.05, 1.05, 1);

      .cover-image {
        //filter: brightness(1);
      }
    }

    .add-special-attention-btn {
      visibility: visible;
    }
  }

  &.special-attention {
    .info {
      .avatar {
        .img {
          border-color: var(--bilibili-pink);
        }
      }

      .username {
        color: var(--bilibili-pink);
      }
    }

    .cover {
      //box-sizing: border-box;
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        //border-radius: 4px;
        box-shadow: inset 0 0 0px 1px var(--bilibili-pink);
        z-index: 1;
      }
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: #111;
    }

    .info {
      .username {
        color: #ddd;
      }
    }

    .cover {
      box-shadow: rgba(0, 0, 0, 0.3) 0 1px 4px;

      &:hover .cover-image {
        filter: brightness(0.85);
      }
    }
  }
`;function d(e){var{cover:t,duration:i,title:n="none title",isSpecialAttention:s,owner:d,stat:p,onClickCover:u,onClickUserName:f,hideAuthor:h,onClickFollowBtn:b}=e,m=o(e,["cover","duration","title","isSpecialAttention","owner","stat","onClickCover","onClickUserName","hideAuthor","onClickFollowBtn"]);const g=l.default.useCallback(e=>{e.stopPropagation(),chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+d.mid})},[d]);return l.default.createElement(r.ErrorBoundary,null,l.default.createElement(c,Object.assign({className:["live-card",s?"special-attention":""].join(" "),onClick:u,onAuxClick:u},m),l.default.createElement("div",{className:"avatar"},l.default.createElement(a.Image,{url:d.face,height:30})),l.default.createElement("div",{className:"info"},l.default.createElement("a",{className:"username",onClick:f||g,onAuxClick:f||g},d.name),l.default.createElement("p",{className:"title",title:n},m.areaName," | ",n))))}t["default"]=d},56639:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function l(e){try{s(o["throw"](e))}catch(e){r(e)}}function s(e){e.done?i(e.value):n(e.value).then(a,l)}s((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Message=void 0;const r=i(95947),a=n(i(57689)),l=n(i(97326)),s=n(i(635)),c=s.default.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0s 0.2s, z-index 0s 0.2s, transform .2s;
  overflow: auto;
  white-space: nowrap;
  pointer-events: none;
  transform: translateY(-12px);
  z-index: -100000;

  //::after {
  //  content: " ";
  //  display: inline-block;
  //  vertical-align: middle;
  //  width: 0;
  //  height: 100%;
  //  overflow: hidden;
  //}

  &.on {
    transition: opacity .2s, transform .2s;
    visibility: visible;
    transform: translateY(0px);
    opacity: 1;
    z-index: 1000000;
  }
`,d=s.default.div.attrs(()=>({className:"message-container"}))`
  position: relative;
  top: 32px;
  display: inline-block;
  flex-direction: column;
  margin: 32px;
  max-width: 560px;
  min-width: 300px;
  vertical-align: top;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.24);
  text-align: left;
  transition: transform 0.12s;

  @media (prefers-color-scheme: dark) {
    background-color: var(--paper-grey-900);
    color: #E5E5E5;
  }
`,p=s.default.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 0;
  border-bottom: 1px solid #eee;
  padding: 0 12px;
  font-size: 14px;
  pointer-events: initial;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s, height .3s, padding .2s;

  &:last-of-type {
    border-bottom: none;
  }

  .content {
    flex-grow: 1;
  }

  .action-box {
    display: flex;
    flex-shrink: 0;

    .button {
      margin: -10px -12px -10px 0px;
    }
  }

  &.on {
    visibility: visible;
    opacity: 1;
    height: 36px;
    padding: 8px 12px;
    transition: opacity 0.2s, height .2s, padding .2s;
  }

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #151515;
  }
`,u=3e3;class f extends a.default.Component{constructor(e){super(e),this.state={show:!1,messageList:[]},this.messageTimerKeyMap={},this.findSameMessage=e=>{const{messageList:t}=this.state;return t.find(t=>t.content===e)},this.addMessage=(e,t,i=u)=>{const{messageList:o}=this.state,n=this.findSameMessage(t);if(n){const e=this.messageTimerKeyMap[n.key];clearTimeout(e),this.setMessageTimer(n)}else{const n=Date.now();o.push({key:n,type:e,content:t,duration:i,on:!1}),this.setState({messageList:o},()=>{setTimeout(()=>{this.showMessage(n)},200)})}},this.showMessage=e=>{const{messageList:t}=this.state,i=t.find(({key:t})=>t===e);i.on=!0,this.setState({messageList:t,show:t.filter(({on:e})=>e).length>0},()=>{this.setMessageTimer(i)})},this.setMessageTimer=e=>{"number"===typeof e.duration&&e.duration>0&&(this.messageTimerKeyMap[e.key]=setTimeout(()=>o(this,void 0,void 0,(function*(){yield this.hideMessage(e.key)})),e.duration))},this.hideMessage=e=>o(this,void 0,void 0,(function*(){return new Promise(t=>{const{messageList:i}=this.state;1===i.length&&this.setState({show:!1}),setTimeout(()=>{const o=i.findIndex(({key:t})=>t===e);i[o]&&(i[o].on=!1),this.setState({messageList:i},()=>{setTimeout(()=>this.deleteMessage(e),200),t(o)})},1===i.length?200:0)})})),this.deleteMessage=e=>o(this,void 0,void 0,(function*(){return new Promise(t=>{const{messageList:i}=this.state,o=i.findIndex(({key:t})=>t===e);i.splice(o,1),this.setState({messageList:i,show:i.filter(({on:e})=>e).length>0},t)})})),this.closeMessage=e=>this.hideMessage(e),this.clearAll=()=>{const{messageList:e}=this.state;e.forEach(({key:e})=>{this.hideMessage(e)})}}componentDidMount(){this.props.app.current=this}render(){const{show:e,messageList:t}=this.state;return a.default.createElement(c,{className:e?"message-model on":"message-model"},a.default.createElement(d,{classNames:"message-container"},t.map(({key:e,type:t,content:i,duration:o,on:n})=>a.default.createElement(p,{key:e,className:["message-row",t,n?"on":""].join(" ")},a.default.createElement("div",{className:"content"},i),o?null:a.default.createElement("div",{className:"action-box"},a.default.createElement(r.Button,{icon:"close",iconSize:12,onClick:()=>this.closeMessage(e)}))))))}}const h=a.default.createRef(),b=()=>new Promise(e=>{let t=document.getElementById("bhMessageWrapper");t?e(h):(t=document.createElement("div"),t.id="bhMessageWrapper",document.body.appendChild(t),l.default.render(a.default.createElement(f,{app:h}),t,()=>{e(h)}))}),m=(e,t,...i)=>{b().then(o=>{o.current.addMessage(e,t,...i)})},g=()=>{b().then(e=>{e.current.clearAll()})},x=(e,...t)=>m("info",e,...t),v=(e,...t)=>m("warn",e,...t),y=(e,...t)=>m("error",e,...t);t.Message={info:x,warn:v,error:y,clearAll:g}},72673:function(e,t,i){var o=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Modal=void 0;const r=n(i(57689)),a=n(i(635)),l=a.default.div.attrs(({open:e})=>({className:e?"modal bilibili-helper-mask on":"modal bilibili-helper-mask"}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, visibility 0s 0.2s, z-index 0s 0.2s;
  overflow: auto;
  z-index: -1000;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.6);

  ::after {
    content: " ";
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 100%;
    overflow: hidden;
  }

  &.on {
    transition: opacity 0.2s;
    visibility: visible;
    opacity: 1;
    z-index: 1000000;
  }
`,s=a.default.div.attrs(()=>({className:"modal-container"}))`
  position: relative;
  display: inline-block;
  flex-direction: column;
  margin: 32px;
  max-width: 560px;
  min-width: 300px;
  vertical-align: middle;
  border-radius: 4px;
  background-color: #fff;
  color: #222;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.24);
  text-align: left;
  transition: transform 0.12s;
  transform: scale(1);
`,c=a.default.div.attrs(()=>({className:"modal-title"}))`
  flex: 0;
  padding: 20px 20px 0;
  font-size: 15px;
  font-weight: bold;
`,d=a.default.div.attrs(()=>({className:"modal-body"}))`
  flex: 1;
  padding: 16px 20px;
  min-height: 50px;
  max-height: 600px;
  overflow: auto;
`,p=a.default.div.attrs(()=>({className:"modal-button-container"}))`
  display: flex;
  flex-direction: row-reverse;
  flex: 0;
  padding: 0 20px 20px 20px;
`;class u extends r.default.Component{constructor(e){super(e),this.handleMaskClick=e=>{e.target.classList.contains("bilibili-helper-mask")&&(this.container.style.transform="scale(1.02)",setTimeout(()=>this.container.style.transform="scale(1)",120))},this.handleOnCustomMaskClick=e=>{if(e.target.classList.contains("bilibili-helper-mask")){const{onClickMask:t}=this.props;t(e)}}}componentDidUpdate(e,t,i){e.open&&!this.props.open&&this.props.onClosed&&this.props.onClosed instanceof Function&&this.props.onClosed()}render(){const e=this.props,{open:t,title:i,buttons:n,children:a,onClickMask:u}=e,f=o(e,["open","title","buttons","children","onClickMask"]);return r.default.createElement(l,{open:t,onMouseDown:u?this.handleOnCustomMaskClick:this.handleMaskClick},r.default.createElement(s,Object.assign({ref:e=>this.container=e},f),i&&r.default.createElement(c,null,i),r.default.createElement(d,null,a),n&&r.default.createElement(p,null,n)))}}t.Modal=u},60570:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Radio=void 0;const l=a(i(57689)),s=r(i(635)),c=i(37459),d=i(72194),p=a(i(74770)),{color:u}=c.theme,f=s.default.div`
  display: block;
  position: relative;
  width: 32px;
  height: 16px;
  outline: none;
  z-index: 0;
  cursor: ${({theme:e={}})=>!1!==e.toggle?"pointer":"not-allowed"};
  filter: grayscale(${({theme:e={}})=>!1!==e.toggle?0:1});
`,h=s.default.span`
  width: 28px;
  height: 12px;
  position: absolute;
  left: 3px;
  top: 2px;
  border-radius: 8px;
  background-color: ${u("google-grey-400")};
  transition: background-color linear 80ms;
  //opacity: 0.5;
  .checked & {
    background-color: ${u("bilibili-pink")};
    opacity: 1;
  }
`,b=s.default.span.attrs(()=>({className:"radio-knob"}))`
  display: block;
  position: relative;
  width: 16px;
  height: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
  background-color: white;
  transition: transform linear 80ms, background-color linear 80ms;
  border-radius: 50%;
  z-index: 1;

  .ripple-item {
    //opacity: 0.125;
  }

  .checked & {
    transform: translate3d(18px, 0, 0);

    .ripple-item {
      background-color: ${(0,p.default)(u("bilibili-pink")).alpha(.5).rgb().toString()};
    }
  }
`;class m extends l.default.Component{constructor(e){super(e),this.handleOnMouseDown=()=>{this.setState({mouseDown:!0})},this.handleOnMouseUp=()=>{this.setState({mouseDown:!1})},this.state={mouseDown:!1,rippleRadius:0}}render(){const{on:e,onClick:t,disable:i}=this.props,{mouseDown:o}=this.state;return l.default.createElement(f,{className:e?"checked":"",onClick:t},l.default.createElement(h,null),l.default.createElement(b,{ref:e=>this.btn=e,onMouseDown:i?null:this.handleOnMouseDown,onMouseUp:i?null:this.handleOnMouseUp,onMouseLeave:i?null:this.handleOnMouseUp},l.default.createElement(s.ThemeProvider,{theme:{radius:17,speed:.75,size:1.2}},l.default.createElement(d.Ripple,{active:o}))))}}t.Radio=m},35320:function(e,t,i){var o=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Range=void 0;const r=n(i(57689)),a=n(i(635)),l=a.default.input`
`,s=function(e){const{value:t,max:i,min:n,step:a,onChange:s}=e,c=o(e,["value","max","min","step","onChange"]);return r.default.createElement(l,Object.assign({className:"range",type:"range",max:i,min:n,step:a,value:t,onChange:s},c))};t.Range=s},29006:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ImageBody=void 0;const l=r(i(57689)),s=a(i(635)),c=i(83656),d=s.default.div`
  display: flex;
  flex-wrap: nowrap;
  cursor: pointer;

  .info {
    .images {
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      max-height: 100px;
      object-fit: cover;
      overflow: hidden;
      border-radius: 2px;
      filter: brightness(.75);
    }

    .title {
      display: -webkit-box;
      margin: 0 0 3px 0;
      max-height: 84px;
      font-weight: 400;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
      text-align: justify;

      &.position-adjust {
        text-indent: -6px;
      }
    }

    .username {
      margin: 0 0 1px 0;
      color: var(--paper-grey-900);
      opacity: 0.4;

      :hover {
        opacity: 1;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .info {
      .username {
        color: #ddd;
      }

      .title {
        color: #ddd;
      }
    }
  }
`,p=({originInfo:e})=>{const t=(0,l.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+e.userInfo.uid})},[e]);return l.default.createElement(d,null,l.default.createElement("div",{className:"info"},l.default.createElement("p",{className:"username",onClick:t},"by ",e.userInfo.name),l.default.createElement("h4",{className:e.content&&"\u3010"===e.content[0]?"position-adjust title":"title",dangerouslySetInnerHTML:{__html:e.content}}),e.pictures?l.default.createElement("div",{className:"images"},l.default.createElement(c.Image,{url:e.pictures[0].img_src})):null))};t.ImageBody=p},61275:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoBody=void 0;const l=r(i(57689)),s=a(i(635)),c=i(83656),d=s.default.div`
  display: flex;
  //flex-wrap: nowrap;
  cursor: pointer;

  .cover {
    flex-shrink: 0;
    width: 64px;
    height: 48px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 2px;
  }

  .info {
    margin-left: 6px;

    .title {
      margin: 0;
      line-height: 14px;
      font-weight: 400;

      &.position-adjust {
        text-indent: -6px;
      }
    }

    .username {
      margin: 0;
      color: var(--paper-grey-900);
      opacity: 0.4;

      :hover {
        opacity: 1;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .info {
      .username {
        color: #ddd;
      }
      .title {
        color: #ddd;
      }
    }
  }
`,p=({originInfo:e,originVideoInfo:t})=>{const i=(0,l.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+e.userInfo.uid})},[e]),o=(0,l.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),chrome.runtime.sendMessage({target:"tabController",event:"create",url:t.url})},[t]);return l.default.createElement(d,{onClick:o},l.default.createElement("div",{className:"cover"},l.default.createElement(c.Image,{url:t.cover})),l.default.createElement("div",{className:"info"},l.default.createElement("h4",{className:t.title&&"\u3010"===t.title[0]?"position-adjust title":"title"},t.title),l.default.createElement("p",{className:"username",onClick:i},"by ",e.userInfo.name)))};t.VideoBody=p},84425:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RepostCard=void 0;const l=i(83656),s=i(29006),c=r(i(57689)),d=a(i(635)),p=i(90741),u=i(61275),f=d.default.section.attrs({className:"repost-card"})`
  margin-top: 1px;
  padding: 4px;
  border-radius: 4px;

  :hover {
    background-color: rgb(255 255 255 / 30%);
    outline: 1px solid #fff;
  }

  .card-head {
    display: flex;
    align-items: start;
    flex-wrap: nowrap;

    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      margin-right: 8px;
    }

    .username {
      cursor: pointer;

      :hover {
        text-decoration: underline;

      }
    }

    .repost-type {
      //color: var(--bilibili-pink);
    }
  }

  .card-body {
    .content {
      display: -webkit-box;
      margin: -10px 0 6px 38px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
      text-align: justify;
    }

    .bilibili-emoji {
      width: 12px;
    }

    .bilibili-topic-link {
      color: var(--bilibili-blue);
    }

    .origin-card {
      //margin-left: 18px;
      padding: 4px;
      border-radius: 4px;
      //border: 1px solid hsl(0deg 0% 0% / 20%);
      background-color: hsl(0deg 0% 100% / 70%);
    }
  }


  @media (prefers-color-scheme: dark) {
    background-color: hsl(0deg 0% 0% / 10%);
    :hover {
      background-color: hsl(0deg 0% 17%);
      outline: none;
    }

    .card-body {
      .content, .username, .repost-type {
        color: #ddd;
      }

      .origin-card {
        background-color: hsl(0deg 0% 0% / 20%);
      }
    }
  }
`;class h extends c.default.Component{constructor(e){super(e),this.handleOnClickUsername=()=>{chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+this.props.userInfo.uid})}}renderBody(e){switch(e.originInfo.type){case 2:return c.default.createElement(s.ImageBody,{originInfo:e.originInfo});case 8:return c.default.createElement(u.VideoBody,{originInfo:e.originInfo,originVideoInfo:e.originVideoInfo});case 1024:return"\u6e90\u52a8\u6001\u5df2\u88ab\u4f5c\u8005\u5220\u9664";default:return"\u672a\u517c\u5bb9\u7c7b\u578b: "+e.originInfo.type}}render(){const{dynamicInfo:e,originInfo:t,userInfo:i,originVideoInfo:o}=this.props;return c.default.createElement(f,null,c.default.createElement("div",{className:"card-head"},c.default.createElement(l.Image,{className:"avatar",url:i.face}),c.default.createElement("a",{className:"username",onClick:this.handleOnClickUsername},i.name),"\xa0\u8f6c\u53d1\u4e86\xa0",c.default.createElement("span",{className:"repost-type"},p.DYNAMIC_NAME_MAP[t.type])),c.default.createElement("div",{className:"card-body"},c.default.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:e.content}}),c.default.createElement("div",{className:"origin-card"},this.renderBody(this.props))))}}t.RepostCard=h},72194:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Ripple=void 0;const l=a(i(57689)),s=r(i(635)),c=s.keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`,d=s.default.div.attrs(()=>({className:"ripple-box"}))`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  user-select: none;
  pointer-events: none;
  z-index: 1;

  .ripple-item {
    user-select: none;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: scale(0);
    background-color: rgb(0, 0, 0);
    opacity: 0.2;
    animation: ${e=>e.theme.speed?1.15*e.theme.speed:1.15}s ${c} cubic-bezier(0.1, 0.3, 0, 1) forwards;
  }

  .hiding {
    transition: opacity ${e=>e.theme.speed?1.2*e.theme.speed*.3:.3}s;
    opacity: 0;
  }
`;class p extends l.default.Component{constructor(e){super(e),this.state={currentRipple:null,box:null}}static getDerivedStateFromProps(e,t){const{active:i,x:o,y:n,theme:r}=e,{radius:a=15,size:l=1}=r;let s=`width:${2*a*l}px;height:${2*a*l}px;margin: -${a*l}px;`;if(void 0!==o&&void 0!==n&&(s+=`top:${n}px;left:${o}px;`),i){const e=document.createElement("div");return e.setAttribute("class","ripple-item"),e.setAttribute("style",s),t.box.prepend(e),{currentRipple:e}}return t.currentRipple&&(t.currentRipple.classList.add("hiding"),setTimeout(()=>t.currentRipple.remove(),300)),t}render(){return l.default.createElement(d,{ref:e=>!this.state.box&&this.setState({box:e})})}}t.Ripple=(0,s.withTheme)(p)},95039:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoClassMap=void 0;const n=i(13620),r=o(i(5033)),a=o(i(75690));t.VideoClassMap={new:n.VideoCard,old:r.default,simple:a.default}},13620:function(e,t,i){var o=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoCard=void 0;const r=i(22325),a=i(18258),l=i(83656),s=n(i(57689)),c=n(i(635)),d=i(10243),p=c.default.section.attrs(()=>({className:"video-card"}))`
  position: relative;
  padding-bottom: 6px;
  width: 100%;
  //height: 160px;
  min-width: 148px;
  //height: 135px;
  z-index: 1;
  //content-visibility: auto;
  //contain-intrinsic-size: 160px;

  .cover {
    position: relative;
    display: block;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px;
    transform-origin: bottom;
    //transition: transform .3s;

    :before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 58px;
      width: 100%;
      background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .4));
      z-index: 1;
      pointer-events: none;
    }

    .cover-image {
      //transition: filter 0.2s;
      //filter: brightness(0.95);
      border-radius: 2px;
      //transform: scale(1.1);
    }

    time {
      position: absolute;
      bottom: 6px;
      padding: 0 2px;
      min-width: 34px;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      color: #FFFFFF;
      z-index: 2;
    }

    .publish-date-desc {
      left: 8px;
    }

    .duration {
      right: 8px;
    }

    .tag.new-tag {
      position: absolute;
      top: 6px;
      right: 6px;
      padding: 0 2px;
      min-width: 34px;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      background-color: var(--bilibili-blue);
      color: #FFFFFF;
      z-index: 2;
    }

    .play-later-wrapper {
      position: absolute;
      right: 0;
      top: 0;
      margin: 5px;
      padding: 0 0 0 1px;
      box-sizing: border-box;
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.4);
      color: var(--bilibili-gray);
      visibility: hidden;
      z-index: 1;

      &.watched {
        visibility: visible;
      }

      &:hover {
        background-color: var(--bilibili-blue);
      }

      .play-later {
        width: 18px;
        height: 18px;
      }

      .text {
        display: inline-block;
        padding: 0 3px 0 2px;
        height: 18px;
        line-height: 18px;
        vertical-align: bottom;
      }
    }
  }

  .title {
    margin: 3px 0 0 0;
    padding: 0 1px;
    width: calc(100% - 4px);
    font-size: 14px;
    color: #141414;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    cursor: pointer;

    .tag {
      margin-right: 4px;
      color: var(--bilibili-blue);
    }

    .position-adjust {
      margin-left: -6px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2px;
    line-height: 12px;
    word-break: break-all;

    .info-line {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .extra-info {
      width: 100%;
      color: #616161;
    }

    a {
      color: #616161;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
    }

    .username {
      max-width: 144px;
      text-overflow: ellipsis;
      overflow: hidden;

      &:hover {
        text-decoration: underline;
      }
    }

    .add-special-attention-btn {
      visibility: hidden;
      margin-left: 4px;
      //padding: 0 1px 0 0;
      border-radius: 2px;
      text-decoration: none;
      color: #666;

      &:hover {
        background-color: var(--paper-grey-800);
        color: #aaa;
      }

      &:active {
        background-color: var(--paper-grey-900);
      }

      span {
        vertical-align: middle;
        font-size: 12px;
        font-weight: bold;
        //zoom: 0.8;
      }

      .text {
        padding: 0 2px;
        zoom: 0.8;
      }
    }
  }

  &:hover {
    .cover {
      //perspective: 1000px;
      //transform: scale3d(1.05, 1.05, 1);

      .cover-image {
        //filter: brightness(1);
      }
    }

    .add-special-attention-btn {
      visibility: visible;
    }

    .play-later-wrapper {
      visibility: visible;
    }
  }

  &.special-attention {
    .cover {
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 2px;
        box-shadow: inset 0 0 0 1px var(--bilibili-pink);
        z-index: 1;
        pointer-events: none;
      }
    }

    .title {
      color: var(--bilibili-pink);
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    .title {
      color: #E5E5E5;
    }

    .info {
      a {
        color: #999999;
      }
    }

    .cover-image {
      //filter: brightness(0.85);
    }
  }
`;class u extends s.default.Component{constructor(e){super(e),this.state={isSetWatchLater:!1,watchLaterText:!1},this.visible=!1,this.handleOnClickUsername=e=>{chrome.runtime.sendMessage({target:"googleAnalytics",event:"send",hitType:"event",category:"video_card",action:"click_video",label:"upper_name"}),chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+this.props.userInfo.uid,active:1!==e.button})},this.handleOnClickSetWatchLater=e=>{e.stopPropagation();const{videoInfo:t}=this.props;if(!this.state.isSetWatchLater)return(t.aid||t.bvid)&&chrome.runtime.sendMessage({target:"watchLater",event:"set",aid:t.aid||(0,d.bv2av)(t.bvid)},e=>{switch(e){case!0:this.setState({isSetWatchLater:!0,watchLaterText:"\u5df2\u6dfb\u52a0\u5230\u7a0d\u540e\u518d\u770b"});break;case"notSupport":this.setState({isSetWatchLater:!0,watchLaterText:"\u7248\u6743\u5185\u5bb9\u6682\u65f6\u65e0\u6cd5\u6dfb\u52a0\u5230\u7a0d\u540e\u518d\u770b"});break;case!1:this.setState({isSetWatchLater:!1,watchLaterText:"\u6dfb\u52a0\u7a0d\u540e\u518d\u770b\u5931\u8d25"});break}}),!1},this.handleOnClickRemoveWatchLater=e=>{e.stopPropagation();const{videoInfo:t}=this.props;if(!this.state.isSetWatchLater)return(t.aid||t.bvid)&&chrome.runtime.sendMessage({target:"watchLater",event:"remove",aid:t.aid||(0,d.bv2av)(t.bvid)},e=>{switch(e){case!0:this.setState({isSetWatchLater:!0,watchLaterText:"\u5df2\u6dfb\u52a0\u5230\u7a0d\u540e\u518d\u770b"});break;case!1:this.setState({isSetWatchLater:!1,watchLaterText:"\u6dfb\u52a0\u7a0d\u540e\u518d\u770b\u5931\u8d25"});break}}),!1}}componentDidMount(){}render(){const e=this.props,{videoInfo:t,userInfo:i,onClickCover:n,onClickUserName:c,hideAuthor:d,isSpecialAttention:u,onClickFollowBtn:f,onContentVisible:h,isNew:b,showWatcherLaterButton:m,showRemoveWatcherLaterButton:g,showNewTag:x,showFollowButton:v=!1}=e,y=o(e,["videoInfo","userInfo","onClickCover","onClickUserName","hideAuthor","isSpecialAttention","onClickFollowBtn","onContentVisible","isNew","showWatcherLaterButton","showRemoveWatcherLaterButton","showNewTag","showFollowButton"]),{isSetWatchLater:w,watchLaterText:k}=this.state;return s.default.createElement(p,Object.assign({className:u?"special-attention":null},y),s.default.createElement(r.ErrorBoundary,null,s.default.createElement("a",{className:"cover",onClick:n,onAuxClick:n},s.default.createElement(l.Image,{className:"cover-image",url:t.cover+"@634w_400h.webp",height:86}),b?s.default.createElement("span",{className:["tag","new-tag"].join(" ")},"NEW"):null,t.publishDate&&s.default.createElement("time",{className:"publish-date-desc"},t.publishDate),(t.aid||t.bvid)&&m?s.default.createElement("div",{className:["play-later-wrapper",w?"watched":null].filter(Boolean).join(" "),onClick:this.handleOnClickSetWatchLater,onAuxClick:this.handleOnClickSetWatchLater},w?null:s.default.createElement(a.Icon,{className:"play-later",icon:"play-later",size:18}),k?s.default.createElement("span",{className:"text"},k):null):null,(t.aid||t.bvid)&&g?s.default.createElement("div",{className:["play-later-wrapper",w?"watched":null].filter(Boolean).join(" "),onClick:this.handleOnClickRemoveWatchLater,onAuxClick:this.handleOnClickRemoveWatchLater},w?null:s.default.createElement(a.Icon,{className:"play-later",icon:"play-later",size:18}),k?s.default.createElement("span",{className:"text"},k):null):null,t.duration?s.default.createElement("time",{className:"duration"},t.duration):null),s.default.createElement("a",{className:"title",title:t.title,onClick:n,onAuxClick:n},y.tname&&y.showTag?s.default.createElement("span",{className:"tag"},y.tname):null,s.default.createElement("span",{className:t&&t.title&&"\u3010"===t.title[0]?"position-adjust":null},t.title)),s.default.createElement("div",{className:"info"},s.default.createElement("div",{className:"info-line name"},!d&&s.default.createElement("a",{className:"username",onClick:c||this.handleOnClickUsername,onAuxClick:c||this.handleOnClickUsername},"UP: ",i.name),!d&&v&&s.default.createElement("a",{className:"add-special-attention-btn",onClick:f,onAuxClick:f},u?s.default.createElement(s.default.Fragment,null,s.default.createElement(a.Icon,{icon:"love",size:14})):null,u?null:s.default.createElement(s.default.Fragment,null,s.default.createElement(a.Icon,{icon:"love-hollow",size:14})))))))}}t.VideoCard=u,u.defaultProps={showWatcherLaterButton:!0}},5033:function(e,t,i){var o=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=i(22325),a=n(i(57689)),l=n(i(635)),s=i(83656),c=i(18258),d=l.default.section.attrs(()=>({className:"video-card"}))`
  position: relative;
  width: 100%;
  //max-width: 200px;
  min-width: 148px;
  //height: 114px;
  z-index: 1;
  //contain: paint;
  //content-visibility: auto;
  //contain-intrinsic-size: none 114px;

  .cover {
    position: relative;
    display: block;
    width: 100%;
    height: 110px;
    //border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    //box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
    //:before {
    //  content: "";
    //  position: absolute;
    //  bottom: 0;
    //  left: 0;
    //  height: 38px;
    //  width: 100%;
    //  //border-radius: 0 0 2px 2px;
    //  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));
    //  z-index: 1;
    //  pointer-events: none;
    //}

    .cover-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: filter .2s cubic-bezier(0.5, 0.01, 0, 1) 0s, transform .3s cubic-bezier(0.5, 0.01, 0, 1) 0s;
      filter: grayscale(0.5) brightness(.4);
      border-radius: 4px;
      //transform: scale(1.3);
    }

    .publish-date-desc {
      position: absolute;
      top: 6px;
      left: 8px;
      padding: 0 2px;
      min-width: 34px;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      color: #FFFFFF;
      z-index: 2;
    }

    .tag.new-tag {
      position: absolute;
      top: 6px;
      left: 6px;
      padding: 0 2px;
      min-width: 34px;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      background-color: var(--bilibili-blue);
      color: #FFFFFF;
      z-index: 2;
    }

    .play-later-wrapper {
      position: absolute;
      right: 0;
      top: 20px;
      margin: 4px;
      padding: 0 0 0 1px;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.4);
      color: var(--bilibili-gray);
      visibility: hidden;
      z-index: 1;

      &.watched {
        visibility: visible;
      }

      &:hover {
        background-color: var(--bilibili-blue);
      }

      .play-later {
        width: 18px;
        height: 18px;
      }

      .text {
        display: inline-block;
        padding: 0 3px 0 2px;
        height: 18px;
        line-height: 18px;
        vertical-align: bottom;
      }
    }
  }

  .top-info {
    position: absolute;
    top: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 4px 4px 0;
    width: 100%;
    line-height: 16px;
    //text-shadow: 0 0 2px #000, 0 0 2px #000;

    .user-info {
      margin-right: 4px;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      padding: 1px 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: keep-all;
      transition: background-color .2s;
    }


    a {
      color: #fff;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
    }

    .username {
      max-width: 144px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: keep-all;

      &:hover {
        text-decoration: underline;
      }
    }

    .add-special-attention-btn {
      visibility: hidden;
      margin-left: 2px;
      line-height: 14px;
      text-decoration: none;
      color: #fff;

      &:hover {
        color: #aaa;
      }

      span {
        vertical-align: middle;
        font-size: 12px;
        font-weight: bold;
      }

      .text {
        padding: 0 2px;
        zoom: 0.8;
      }
    }
  }

  .time-box {
    flex-shrink: 0;
    display: inline-block;
    margin-left: auto;
    font-size: 12px;
    font-family: system-ui;
    text-align: center;
    color: #FFFFFF;
    z-index: 2;

    .duration, .publish-date {
      padding: 1px 4px;
      transition: background-color .2s;
    }
  }

  .bottom-info {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 12px 6px 4px;
    width: 100%;
    line-height: 16px;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));

    .title {
      display: -webkit-box;
      flex-grow: 1;
      font-size: 12px;
      color: #ffffff;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: break-all;
      text-align: justify;
      cursor: pointer;
      z-index: 1;

      &.position-adjust {
        text-indent: -6px;
      }

      .tag {
        margin-right: 4px;
        color: var(--bilibili-blue);
      }

      .position-adjust {
        text-indent: -6px;
      }
    }
  }

  &:hover {
    .cover .cover-image {
      filter: grayscale(0) brightness(1);
      transform: scale(1);
    }

    .top-info {
      .user-info {
        background-color: rgb(0 0 0 / 50%);

        .add-special-attention-btn {
          visibility: visible;
        }
      }

      .duration {
        background-color: rgb(0 0 0 / 50%);
      }

      .publish-date {
        background-color: rgb(0 0 0 / 50%);
      }
    }

    //
    //.bottom-info {
    //  background: rgb(0 0 0 / 40%);
    //}

    .play-later-wrapper {
      visibility: visible;
    }
  }

  &.special-attention {
    .cover {
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 4px;
        box-shadow: inset 0 0 0 2px var(--bilibili-pink);
        pointer-events: none;
        z-index: 2;
      }
    }

    .title, .username {
      //color: var(--bilibili-pink);
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    .title {
      color: #E5E5E5;
    }

    .user-info {
      a {
        color: #fff;
      }
    }

    .cover-image {
      //filter: brightness(0.85);
    }
  }
`;function p(e){var{videoInfo:t,userInfo:i,onClickCover:n,onClickUserName:l,hideAuthor:p,isSpecialAttention:u,onClickFollowBtn:f,publishTime:h,showWatcherLaterButton:b=!0,showRemoveWatcherLaterButton:m=!1,showNewTag:g=!1,showFollowButton:x=!1}=e,v=o(e,["videoInfo","userInfo","onClickCover","onClickUserName","hideAuthor","isSpecialAttention","onClickFollowBtn","publishTime","showWatcherLaterButton","showRemoveWatcherLaterButton","showNewTag","showFollowButton"]);const[y]=a.default.useState(Date.now()-h<864e5),[w,k]=a.default.useState(!1),[_,O]=a.default.useState(!1),j=a.default.useCallback(e=>{e.stopPropagation(),i&&chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+i.uid,active:1!==e.button})},[i]),C=a.default.useCallback(e=>(e.stopPropagation(),t.aid&&!w&&chrome.runtime.sendMessage({target:"watchLater",event:"set",aid:t.aid},e=>{switch(e){case!0:k(!0),O("\u5df2\u7a0d\u540e\u518d\u770b");break;case"notSupport":k(!0),O("\u4e0d\u652f\u6301\u756a\u5267\u89c6\u9891");break;case!1:k(!1),O("\u8bbe\u7f6e\u5931\u8d25");break}}),!1),[t,w]),E=a.default.useCallback(e=>(e.stopPropagation(),t.aid&&!w&&chrome.runtime.sendMessage({target:"watchLater",event:"remove",aid:t.aid},e=>{switch(e){case!0:k(!0),O("\u5df2\u4ece\u7a0d\u540e\u518d\u770b\u5220\u9664");break;case!1:k(!1),O("\u8bbe\u7f6e\u5931\u8d25");break}}),!1),[t,w]);return a.default.createElement(d,Object.assign({className:u?"special-attention":null},v),a.default.createElement(r.ErrorBoundary,null,a.default.createElement("div",{className:"cover",onClick:n,onAuxClick:n},a.default.createElement(s.Image,{className:"cover-image",url:t.cover+"@638w_220h.webp",height:86,lazy:!0,duration:0}),t.publishDate&&g&&y?a.default.createElement("span",{className:["tag","new-tag"].join(" ")},"NEW"):null,b?a.default.createElement("div",{className:["play-later-wrapper",w?"watched":null].filter(Boolean).join(" "),onClick:C,onAuxClick:C},w?null:a.default.createElement(c.Icon,{className:"play-later",icon:"play-later",size:18}),_?a.default.createElement("span",{className:"text"},_):null):null,m?a.default.createElement("div",{className:["play-later-wrapper",w?"watched":null].filter(Boolean).join(" "),onClick:E,onAuxClick:E},w?null:a.default.createElement(c.Icon,{className:"play-later",icon:"play-later",size:18}),_?a.default.createElement("span",{className:"text"},_):null):null,a.default.createElement("div",{className:"top-info"},a.default.createElement("div",{className:"user-info"},!p&&i?a.default.createElement("a",{className:"username",onClick:l||j,onAuxClick:l||j},i.name):null,!p&&x&&a.default.createElement("a",{className:"add-special-attention-btn",onClick:f,onAuxClick:f},u?a.default.createElement(a.default.Fragment,null,a.default.createElement(c.Icon,{icon:"love",size:14})):null,u?null:a.default.createElement(a.default.Fragment,null,a.default.createElement(c.Icon,{icon:"love-hollow",size:14})))),t.duration||t.publishDate?a.default.createElement("div",{className:"time-box"},t.duration?a.default.createElement("time",{className:"duration"},t.duration):null,t.publishDate?a.default.createElement("time",{className:"publish-date"},t.publishDate):null):null),a.default.createElement("div",{className:"bottom-info"},a.default.createElement("a",{className:"title",title:t.title},v.tname&&v.showTag?a.default.createElement("span",{className:"tag"},v.tname):null,a.default.createElement("span",{className:t&&t.title&&"\u3010"===t.title[0]?"position-adjust":""},t.title))))))}t["default"]=p},75690:function(e,t,i){var o=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=i(22325),a=n(i(57689)),l=n(i(635)),s=i(83656),c=i(18258),d=l.default.section.attrs(()=>({className:"video-card"}))`
  position: relative;
  display: flex;
  //margin-bottom: 6px;
  padding: 4px;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  //max-width: 200px;
  min-width: 148px;
  //height: 42px;
  border-radius: 2px;
  z-index: 1;
  //contain: paint;
  //content-visibility: paint;
  //contain-intrinsic-size: 0 56px;
  //will-change: scroll-position;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }

  .cover {
    position: relative;
    display: block;
    flex-shrink: 0;
    width: 64px;
    height: 48px;
    //border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;
    cursor: pointer;
    //box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
    //:before {
    //  content: "";
    //  position: absolute;
    //  bottom: 0;
    //  left: 0;
    //  height: 38px;
    //  width: 100%;
    //  //border-radius: 0 0 2px 2px;
    //  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .8));
    //  z-index: 1;
    //  pointer-events: none;
    //}

    .cover-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 2px;
      //filter: brightness(.8);
      //transform: scale(1.3);
    }

    .publish-date-desc {
      position: absolute;
      top: 6px;
      left: 8px;
      padding: 0 2px;
      min-width: 34px;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      color: #FFFFFF;
      z-index: 2;
    }

    .tag.new-tag {
      position: absolute;
      top: 6px;
      right: 6px;
      padding: 0 2px;
      min-width: 34px;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      font-family: system-ui;
      text-align: center;
      background-color: var(--bilibili-blue);
      color: #FFFFFF;
      z-index: 2;
    }

    .play-later-wrapper {
      position: absolute;
      right: 0;
      bottom: 0;
      margin: 0;
      padding: 0 0 0 1px;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.4);
      color: var(--bilibili-gray);
      visibility: hidden;
      z-index: 1;

      &.watched {
        visibility: visible;
      }

      &:hover {
        background-color: var(--bilibili-blue);
      }

      .play-later {
        width: 18px;
        height: 18px;
      }

      .text {
        display: inline-block;
        padding: 0 3px 0 2px;
        height: 18px;
        line-height: 18px;
        vertical-align: bottom;
      }
    }
  }

  .top-info {
    position: absolute;
    top: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 4px 4px 0;
    width: 100%;
    line-height: 16px;
    //text-shadow: 0 0 2px #000, 0 0 2px #000;
  }

  .add-special-attention-btn {
    visibility: hidden;
    margin-left: 2px;
    line-height: 14px;
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #aaa;
    }

    span {
      vertical-align: middle;
      font-size: 12px;
      font-weight: bold;
    }

    .text {
      padding: 0 2px;
      zoom: 0.8;
    }
  }

  .user-info {
    margin-top: 2px;
    margin-right: 4px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: keep-all;
    //transition: background-color .3s;

    a {
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
      opacity: 0.4;

      :hover {
        opacity: 1;
      }
    }

    .username {
      max-width: 144px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: keep-all;

      &:hover {
        text-decoration: underline;
      }
    }

    .publish-time {
      opacity: 0.4;
      margin-left: 2px;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  .time-box {
    flex-shrink: 0;
    display: inline-block;
    margin-left: auto;
    font-size: 12px;
    font-family: system-ui;
    text-align: center;
    color: #FFFFFF;
    z-index: 2;

    .duration, .publish-date {
      padding: 1px 4px;
      transition: background-color .3s;
    }
  }

  .bottom-info {
    //position: absolute;
    //top: 0;
    //right: 0;
    //left: 62px;
    box-sizing: border-box;
    //display: flex;
    //align-items: center;
    padding: 0 0 0 4px;
    width: 100%;
    line-height: 16px;
    color: var(--paper-grey-900);

    .title {
      display: -webkit-box;
      flex-grow: 1;
      margin-top: -2px;
      font-size: 12px;
      overflow: hidden;
      text-align: justify;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
      cursor: pointer;
      z-index: 1;

      .tag {
        margin-right: 4px;
        color: var(--bilibili-blue);
      }

      .position-adjust {
        text-indent: -6px;
      }
    }
  }

  &:hover {
    //.cover .cover-image {
    //  filter: brightness(1);
    //}

    .top-info {
      .duration {
        background-color: rgb(0 0 0 / 50%);
      }

      .publish-date {
        background-color: rgb(0 0 0 / 50%);
      }
    }

    .play-later-wrapper {
      visibility: visible;
    }

    .user-info {
      //background-color: rgb(0 0 0 / 50%);

      .add-special-attention-btn {
        visibility: visible;
      }
    }
  }

  &.special-attention {
    .cover {
      //border: 1px solid var(--bilibili-pink);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 2px;
        box-shadow: inset 0 0 0 2px var(--bilibili-pink);
        pointer-events: none;
        z-index: 2;
      }
    }

    .title, .username {
      color: var(--bilibili-pink);
    }

    .add-special-attention-btn {
      color: var(--bilibili-pink);
    }
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: #111;
    }

    .title {
      color: #ddd;
    }

    .user-info {
      a {
        color: #ddd;
      }

      .publish-time {
        color: #ddd;
      }
    }

    .bottom-info {
      //color: var()
    }

    .cover-image {
      //filter: brightness(0.85);
    }
  }
`;function p(e){var{userInfo:t={},videoInfo:i={},onClickCover:n,onClickUserName:l,hideAuthor:p,isSpecialAttention:u,onClickFollowBtn:f,showWatcherLaterButton:h=!0,showRemoveWatcherLaterButton:b=!1,showPublishTime:m=!1,showFollowButton:g}=e,x=o(e,["userInfo","videoInfo","onClickCover","onClickUserName","hideAuthor","isSpecialAttention","onClickFollowBtn","showWatcherLaterButton","showRemoveWatcherLaterButton","showPublishTime","showFollowButton"]);const[v,y]=a.default.useState(!1),[w,k]=a.default.useState(!1),_=a.default.useCallback(e=>{e.stopPropagation(),t&&chrome.runtime.sendMessage({target:"tabController",event:"create",url:"https://space.bilibili.com/"+t.uid,active:1!==e.button})},[t]),O=a.default.useCallback(e=>(e.stopPropagation(),i.aid&&!v&&chrome.runtime.sendMessage({target:"watchLater",event:"set",aid:i.aid},e=>{switch(e){case!0:y(!0),k("\u5df2\u7a0d\u540e\u518d\u770b");break;case"notSupport":y(!0),k("\u4e0d\u652f\u6301\u756a\u5267\u89c6\u9891");break;case!1:y(!1),k("\u8bbe\u7f6e\u5931\u8d25");break}}),!1),[i,v]),j=a.default.useCallback(e=>(e.stopPropagation(),i.aid&&!v&&chrome.runtime.sendMessage({target:"watchLater",event:"remove",aid:i.aid},e=>{switch(e){case!0:y(!0),k("\u5df2\u4ece\u7a0d\u540e\u518d\u770b\u5220\u9664");break;case!1:y(!1),k("\u8bbe\u7f6e\u5931\u8d25");break}}),!1),[i,v]);return a.default.createElement(d,Object.assign({className:u?"special-attention":null},x,{onClick:n,onAuxClick:n}),a.default.createElement(r.ErrorBoundary,null,a.default.createElement("div",{className:"cover"},a.default.createElement(s.Image,{className:"cover-image",url:i.cover+"@128w_96h.webp",height:86,lazy:!0,duration:0}),h?a.default.createElement("div",{className:["play-later-wrapper",v?"watched":null].filter(Boolean).join(" "),onClick:O,onAuxClick:O},v?null:a.default.createElement(c.Icon,{className:"play-later",icon:"play-later",size:18}),w?a.default.createElement("span",{className:"text"},w):null):null,b?a.default.createElement("div",{className:["play-later-wrapper",v?"watched":null].filter(Boolean).join(" "),onClick:j,onAuxClick:j},v?null:a.default.createElement(c.Icon,{className:"play-later",icon:"play-later",size:18}),w?a.default.createElement("span",{className:"text"},w):null):null),a.default.createElement("div",{className:"bottom-info"},a.default.createElement("a",{className:"title",title:i.title},i.tagName&&x.showTag?a.default.createElement("span",{className:"tag"},i.tagName):null,a.default.createElement("span",{className:i&&"\u3010"===i.title[0]?"position-adjust":""},i.title)),a.default.createElement("div",{className:"user-info"},!p&&t?a.default.createElement("a",{className:"username",onClick:l||_,onAuxClick:l||_},t.name):null,!p&&g?a.default.createElement("a",{className:"add-special-attention-btn",onClick:f,onAuxClick:f},u?a.default.createElement(a.default.Fragment,null,a.default.createElement(c.Icon,{icon:"love",size:14})):null,u?null:a.default.createElement(a.default.Fragment,null,a.default.createElement(c.Icon,{icon:"love-hollow",size:14}))):null,i.publishDate&&m?a.default.createElement("span",{className:"publish-time"},i.publishDate):null))))}t["default"]=p},51920:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BilibiliHelperButtonGuide=t.Message=t.BilibiliHelperButton=t.Range=t.LiveCard=t.Carousel=t.Input=t.Image=t.Modal=t.Radio=t.Icon=t.Ripple=t.Button=void 0;var a=i(95947);Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return a.Button}});var l=i(72194);Object.defineProperty(t,"Ripple",{enumerable:!0,get:function(){return l.Ripple}});var s=i(18258);Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return s.Icon}});var c=i(60570);Object.defineProperty(t,"Radio",{enumerable:!0,get:function(){return c.Radio}});var d=i(72673);Object.defineProperty(t,"Modal",{enumerable:!0,get:function(){return d.Modal}});var p=i(83656);Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return p.Image}});var u=i(65033);Object.defineProperty(t,"Input",{enumerable:!0,get:function(){return u.Input}});var f=i(45242);Object.defineProperty(t,"Carousel",{enumerable:!0,get:function(){return f.Carousel}});var h=i(59326);Object.defineProperty(t,"LiveCard",{enumerable:!0,get:function(){return r(h).default}});var b=i(35320);Object.defineProperty(t,"Range",{enumerable:!0,get:function(){return b.Range}});var m=i(53368);Object.defineProperty(t,"BilibiliHelperButton",{enumerable:!0,get:function(){return m.BilibiliHelperButton}});var g=i(56639);Object.defineProperty(t,"Message",{enumerable:!0,get:function(){return g.Message}});var x=i(40529);Object.defineProperty(t,"BilibiliHelperButtonGuide",{enumerable:!0,get:function(){return x.BilibiliHelperButtonGuide}}),n(i(95039),t),n(i(85458),t),n(i(84425),t)},78333:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Body=void 0;const n=o(i(635));t.Body=n.default.div.attrs(({extend:e})=>({className:e?"extend":""}))`
  display: flex;
  flex-direction: column;
  padding: 0;
  transition: all 0.3s;
  &.extend {
    margin-bottom: 0;
  }
  &::-webkit-scrollbar {
    //display: none;
    //visibility: hidden;
  }
`},19937:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CheckBoxButton=void 0;const s=l(i(57689)),c=r(i(635)),d=i(37459),{color:p}=d.theme,u=c.default.div`
  display: block;
  position: relative;
  width: 32px;
  height: 16px;
  outline: none;
  z-index: 0;
  cursor: ${({theme:e={}})=>!1!==e.toggle?"pointer":"not-allowed"};
  ${({theme:e={}})=>!1!==e.toggle?"":"filter: grayscale(1)"};
  &[disabled] {
    filter: grayscale(1);
    cursor: not-allowed;
  }
`,f=c.default.div`
  width: 36px;
  height: 16px;
  border-radius: 2px;
  background-color: ${p("google-grey-400")};
  transition: background-color linear 80ms;
  box-shadow: inset 0px 0px 2px hsla(340, 0%, 40%, 1);
  //opacity: 0.5;
  .checked & {
    background-color: var(--bilibili-pink);
    box-shadow: inset 0px 0px 2px hsla(340, 60%, 40%, 1);
    //opacity: 1;
  }
`,h=c.default.span.attrs(()=>({className:"checkbox-knob"}))`
  position: absolute;
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
  background-color: white;
  border: 1px solid transparent;
  transition: transform linear 150ms, background-color linear 100ms, width linear 150ms;
  z-index: 1;
  .checked & {
    transform: translate3d(20px, 0, 0);
    right: 16px;
    left: unset;
  }
`;class b extends s.default.Component{constructor(e){super(e),this.handleOnMouseDown=()=>{this.setState({mouseDown:!0})},this.handleOnMouseUp=()=>{this.setState({mouseDown:!1})},this.state={mouseDown:!1,rippleRadius:0}}render(){const e=this.props,{on:t,onClick:i,disable:o,className:n}=e,r=a(e,["on","onClick","disable","className"]),{mouseDown:l}=this.state;return s.default.createElement(c.ThemeProvider,{theme:{mouseDown:l}},s.default.createElement(u,Object.assign({className:[n,t?"checked":"","check-box-button"].join(" "),disabled:o,onClick:o?null:i},r),s.default.createElement(f,{onMouseDown:o?null:this.handleOnMouseDown,onMouseUp:o?null:this.handleOnMouseUp,onMouseLeave:o?null:this.handleOnMouseUp},s.default.createElement(h,null))))}}t.CheckBoxButton=b},15439:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CheckBoxGroup=void 0;const n=o(i(57689)),r=i(22227),a=i(15280),l=function({data:e,direction:t="left",onClick:i}){return n.default.createElement(n.default.Fragment,null,e.map(e=>{const{key:o,title:l=null,description:s=null,on:c=!1,toggle:d=!0,hide:p=!1}=e;if(p)return null;const u={};return"left"===t?u.frontOperation=n.default.createElement(r.CheckboxRect,{disabled:!d,active:c?1:0}):u.operation=n.default.createElement(r.CheckboxRect,{disabled:!d,active:c?1:0}),n.default.createElement(a.ListItem,Object.assign({key:o,title:l,description:s,onClick:!!d&&!!i&&(()=>i(o,!c))},u))}))};t.CheckBoxGroup=l,t.CheckBoxGroup.defaultProps={data:[],direction:"left",onClick:null}},54376:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CheckBoxGroup=void 0;var o=i(15439);Object.defineProperty(t,"CheckBoxGroup",{enumerable:!0,get:function(){return o.CheckBoxGroup}})},22227:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CheckboxRect=void 0;o(i(57689));const n=o(i(635));t.CheckboxRect=n.default.div.attrs(({active:e,disabled:t=!1})=>({className:e?"checkbox-rect on":"checkbox-rect",disabled:t}))`
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border: 2px solid #848990;
  border-radius: 2px;
  transition: background-color 140ms, transform 140ms;
  cursor: pointer;
  
  &::after {
    border-color: #fff;
    border-style: solid;
    border-width: 0 2px 2px 0;
    content: '';
    display: block;
    height: 73%;
    transform: scale(0) rotate(45deg);
    transform-origin: 100% 80%;
    width: 36%;
  }
  &.on {
    background-color: var(--bilibili-pink);
    border-color: var(--bilibili-pink);
    
    ::after {
      transform: scale(0.9) rotate(45deg) translate(0.5px, 0.5px);
      transition: transform 140ms ease-out;
    }
  }
  
  &[disabled] {
    cursor: not-allowed;
    filter: brightness(1.7) grayscale(1);
  }
`},64011:function(e,t,i){var o=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Collapse=void 0;const r=n(i(32699)),a=n(i(57689)),l=n(i(635)),s=i(15280),c=i(96691),{color:d}=c.theme,p=l.default.div.attrs(()=>({className:"update-list-item"}))`
    margin-left: -20px;
    font-size: 13px;
    line-height: 26px;
    list-style: none;
    padding: 10px 0;
    &.serious {
      color: ${d("paper-red-500")};
      font-weight: bold;
    }
    i {
      margin: 4px;
      padding: 1px 6px;
      border-radius: 3px;
      font-size: 12px;
      font-style: normal;
      letter-spacing: 0.3px;
      background-color: ${d("paper-pink-50")};
      color: ${d("bilibili-pink")};
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-color: ${d("paper-pink-50")};
      }
    }
    a {
      color: ${d("bilibili-pink")};
    }
`;class u extends a.default.Component{render(){const e=this.props,{data:t,title:i,active:n=!1}=e,l=o(e,["data","title","active"]);return a.default.createElement(s.ListItem,{extend:!0,twoLine:!0,first:i,second:`\u5305\u542b ${t.length} \u6761\u5185\u5bb9`,subList:{hide:!n,children:r.default.map(t,(e,t)=>a.default.createElement(s.ListItem,Object.assign({key:t,noBorder:!1},l),a.default.createElement(p,{dangerouslySetInnerHTML:{__html:e}})))}})}}t.Collapse=u},49800:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.List=void 0;const n=o(i(57689)),r=o(i(635)),a=i(37459),{color:l}=a.theme,s=r.default.div.attrs(()=>({className:"list-wrapper"}))`
  flex-shrink: 0;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
  width: calc(100% - 20px);
  max-width: 800px;
  min-height: 0;
  min-width: 350px;
  transition: min-height 0.3s;
  visibility: visible;
  opacity: 1;
  
  .list-wrapper & {
    margin-left: 16px;
  }
`,c=r.default.div.attrs(()=>({className:"list-header"}))`
  margin: 21px 0 12px;
  padding: 8px 0 4px;
  max-height: 18px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: .25px;
  color: ${l("paper-grey-900")};
  overflow: hidden;
  transition: all 0.2s;
  opacity: 1;
`,d=r.default.div.attrs(()=>({className:"list-body"}))`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 100%;
  opacity: 1;
  transition: all 0.2s;
  //border-radius: 4px;
  border-radius: 3px;
  //box-shadow: 0 0px 1px 0 rgba(0,0,0,0.1);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  //background-color: whitesmoke;
  overflow: hidden;
  //padding-left: 40px;
  //background-color: white;
  .extended & {
    display: none;
  }
`;class p extends n.default.Component{constructor(){super(),this.top=0}render(){const{children:e,title:t,hidden:i}=this.props;return n.default.createElement(s,{hidden:i},t&&n.default.createElement(c,null,t),n.default.createElement(d,null,e))}}t.List=p},15657:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ListItem=void 0;const s=r(i(57689)),c=l(i(635)),d=i(95947),p=c.default.div.attrs(()=>({className:"list-item"}))`
  background-color: #fff;
  border-top: 1px solid #f2f3f5;
  ${({disable:e})=>e?"cursor: not-allowed; opacity: .5;":""}
  
  &:nth-of-type(1) {
    border-top: none;
    margin-top: 0;
  }
  .list-item & {
    border-top: 1px solid #f2f3f5;
    margin-top: 0;
  }
`,u=c.default.div.attrs(()=>({className:"list-item-main"}))`
  min-height: ${e=>e.twoLine?"56px":"40px"};
  padding: 0 0 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 13px;
  cursor: ${({onClick:e})=>e?"pointer":"default"};
  opacity: 1;
  //.icon {
  //  margin: 0 12px 0 -6px;
  //}
`,f=c.default.div.attrs(()=>({className:"front-operation-wrapper"}))`
  margin: 12px 20px auto -20px;
`,h=c.default.div.attrs(()=>({className:"two-line-container"}))`
  display: flex;
  flex-direction: column;
  flex: auto;
  h3 {
    margin: 0;
    height: 20px;
    font-size: 13px;
  }
`,b=c.default.h3`
  margin: 0;
  height: 20px;
  font-size: 13px;
  font-weight: 400;
`,m=c.default.div`
  margin-top: 2px;
  height: 16px;
  font-size: 12px;
  font-weight: 400;
  color: #757575;
`,g=c.default.div.attrs(()=>({className:"list-item-end"}))`
  display: flex;
  align-items: center;
  margin: 0 4px 0 0;
  .separator + & {
    margin: 0 13px 0 -13px;
  }
  .button {
    margin-right: -12px;
  }
`,x=c.default.div.attrs(({hide:e})=>({className:e?"sub-list hide":"sub-list"}))`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 0;
  border-radius: 4px;
  background-color: white;
  transition: all 0.3s;
  overflow: hidden;
  opacity: 1;
  .list-item {
    margin-left: ${({noIndent:e})=>e?"0px":"60px"};
    .list-item-start {
      margin: 0;
    }
    &:last-of-type {
      padding-bottom: 16px;
    }
  }
`,v=function(e){var{icon:t,title:i,description:o,frontOperation:n,operation:r,subList:l,onClick:c,extend:v,separator:y,toggle:w,disable:k}=e,_=a(e,["icon","title","description","frontOperation","operation","subList","onClick","extend","separator","toggle","disable"]);const[O,j]=(0,s.useState)(!1),[C,E]=(0,s.useState)(0),M=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(M.current){const e=Array.from(M.current.querySelectorAll(".list-item, *"));E(e.reduce((e,t)=>e+t.getBoundingClientRect().height,0))}},[M]),l&&l.children&&v&&(r=s.default.createElement(d.Button,{icon:!0===O?"arrowDown":"arrowUp",onClick:()=>this.setState({hideSubList:!O})}),c=()=>j(!O)),s.default.createElement(p,Object.assign({disable:k},_),i&&s.default.createElement(u,{onClick:c||null,twoLine:!!i&&!!o},t||null,n&&s.default.createElement(f,null,n),s.default.createElement(h,null,s.default.createElement(b,null,i),o&&s.default.createElement(m,null,o)),r&&s.default.createElement(g,{separator:y},r)),l&&l.children&&l.children&&s.default.createElement(x,{ref:M,noIndent:!i,style:{maxHeight:!v&&l.hide||v&&!0===O?"0":C||""}},l.children))};t.ListItem=v,t.ListItem.defaultProps={subList:null,operation:null,toggle:!0,children:[],separator:!1,disable:!1}},15280:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(49800),t),n(i(15657),t)},74486:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RadioButton=void 0;const l=a(i(57689)),s=r(i(635)),c=a(i(74770)),d=i(72194),p=i(96691),{color:u}=p.theme,f=s.default.div.attrs(()=>({className:"radio-button-wrapper"}))`
  display: flex;
  align-items: center;
  //margin-left: -16px;
  width: 100%;
  cursor: ${({theme:e={}})=>e.disable?"not-allowed":"pointer"};
  filter: grayscale(${({theme:e={}})=>e.disable?1:0});
  opacity: ${({theme:e={}})=>e.disable?.5:1};
`,h=s.default.div`
  width: 16px;
  height: 16px;
  position: relative;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid ${u("google-grey-700")};
  transition: all 0.3s;
  &::after {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    top: -2px;
    left: -2px;
    background-color: ${u("bilibili-pink")};
    border-radius: 50%;
    transform: scale(0);
    transition: all 0.15s;
  }
  &.checked {
    border-color: ${u("bilibili-pink")};
    &::after {
      transform: scale(0.5);
    }
    .ripple-item {
      background-color: ${(0,c.default)(u("bilibili-pink")).alpha(.5).rgb().toString()};
    }
  }
`,b=s.default.div.attrs(()=>({className:"radio-button-title"}))`
  margin-left: 20px;
  font-size: 14px;
`;class m extends l.default.Component{constructor(e){super(e),this.handleOnMouseDown=()=>{this.setState({mouseDown:!0})},this.handleOnMouseUp=()=>{this.setState({mouseDown:!1})},this.state={mouseDown:!1}}render(){const{on:e,title:t,onClick:i,disable:o=!1}=this.props,{mouseDown:n}=this.state;return l.default.createElement(s.ThemeProvider,{theme:{disable:o}},l.default.createElement(f,{onClick:i},l.default.createElement(h,{className:[e?"checked":"","radio-button-disc"],onMouseDown:o?null:this.handleOnMouseDown,onMouseUp:o?null:this.handleOnMouseUp,onMouseLeave:o?null:this.handleOnMouseUp},l.default.createElement(s.ThemeProvider,{theme:{speed:.5,size:1.2}},l.default.createElement(d.Ripple,{active:n}))),l.default.createElement(b,null,t)))}}t.RadioButton=m},93237:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RadioButtonGroup=void 0;const n=i(51318),r=o(i(57689)),a=i(15280),l=({data:e,value:t,onClick:i})=>e instanceof Array?e.map((e,o)=>{const{key:l,title:s,description:c,disable:d=!1,hide:p=!1}=e;return p?null:r.default.createElement(a.ListItem,{disable:d,key:o,noBorder:!1,title:s,description:c,onClick:d?null:()=>i(l),frontOperation:r.default.createElement(n.RadioDisc,{on:l===t,mouseDown:!1})})}):null;t.RadioButtonGroup=l},20064:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RadioButtonGroup=t.RadioButton=void 0;var o=i(74486);Object.defineProperty(t,"RadioButton",{enumerable:!0,get:function(){return o.RadioButton}});var n=i(93237);Object.defineProperty(t,"RadioButtonGroup",{enumerable:!0,get:function(){return n.RadioButtonGroup}})},51318:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&o(t,e,i);return n(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RadioDisc=void 0;const l=i(51920),s=a(i(57689)),c=r(i(635)),d=c.default.div.attrs(({active:e})=>({className:e?"radio-button-disc active":"radio-button-disc"}))`
  width: 16px;
  height: 16px;
  position: relative;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid var(--google-grey-700);
  transition: all 0.3s;
  &::after {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    top: -2px;
    left: -2px;
    background-color: var(--bilibili-pink);
    border-radius: 50%;
    transform: scale(0);
    transition: all 0.15s;
  }
  &.checked {
    border-color: var(--bilibili-pink);
    &::after {
      transform: scale(0.5);
    }
  }
`,p=({on:e,mouseDown:t})=>s.default.createElement(d,{className:e?"checked":""},s.default.createElement(c.ThemeProvider,{theme:{speed:.5,size:1.2}},s.default.createElement(l.Ripple,{active:t})));t.RadioDisc=p},36672:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SubPage=void 0;const n=o(i(57689)),r=o(i(635)),a=i(95947),l=r.default.div.attrs(({on:e})=>({className:e?"sub-page-wrapper on":"sub-page-wrapper off"}))`
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  width: 100%;
  transform: scaleY(0.9);
  opacity: 0;
  background-color: transparent;
  transition: z-index 300ms, background-color 200ms, opacity 150ms, transform 0ms 500ms, visibility 300ms;
  pointer-events: none;
  z-index: -100;
  visibility: hidden;
  
  &.on {
    transition: z-index 300ms, opacity 300ms, transform 200ms;
    opacity: 1;
    overflow: auto;
    background-color: #f2f3f5;
    transform: scaleY(1);
    pointer-events: auto;
    visibility: visible;
    z-index: 100;
  }
`,s=r.default.div.attrs(()=>({className:"sub-page-container"}))`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 0;
  bottom: 0;
  transform: translate(-50%, 0);
  max-width: 800px;
  width: 100%;
  opacity: 1;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
  pointer-events: auto;
`,c=r.default.div.attrs(()=>({className:"sub-page-header"}))`
  display: flex;
  width: 100%;
  padding: 16px 6px;
  flex-grow: 0;
  flex-shrink: 0;
`,d=r.default.h5.attrs(()=>({className:"sub-page-title"}))`
  margin: auto 0 auto 24px;
  font-size: 14px;
  font-weight: 500;
`,p=r.default.div.attrs(()=>({className:"sub-page-body"}))`
  flex-grow: 1;
  max-height: 0;
  min-height: 0;
  overflow: auto;
  //transition: max-height 0.2s;
  .on & {
    max-height: 100%;
    min-height: 100%;
  }
  & .list-body {
    box-shadow: none;
  }
`;class u extends n.default.Component{constructor(){super()}render(){const{on:e=!1,title:t="\u65e0\u6807\u9898",children:i,onClose:o}=this.props;return n.default.createElement(l,{on:e?1:0},n.default.createElement(s,null,n.default.createElement(c,null,n.default.createElement(a.Button,{icon:"left-arrow",onClick:o}),n.default.createElement(d,null,t)),n.default.createElement(p,null,i)))}}t.SubPage=u},1693:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),t.RadioDisc=t.CheckboxRect=t.CheckBoxButton=t.SubPage=t.Collapse=t.CheckBoxGroup=t.RadioButton=t.RadioButtonGroup=t.Body=void 0;var r=i(78333);Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return r.Body}}),n(i(15280),t);var a=i(20064);Object.defineProperty(t,"RadioButtonGroup",{enumerable:!0,get:function(){return a.RadioButtonGroup}}),Object.defineProperty(t,"RadioButton",{enumerable:!0,get:function(){return a.RadioButton}});var l=i(54376);Object.defineProperty(t,"CheckBoxGroup",{enumerable:!0,get:function(){return l.CheckBoxGroup}});var s=i(64011);Object.defineProperty(t,"Collapse",{enumerable:!0,get:function(){return s.Collapse}});var c=i(36672);Object.defineProperty(t,"SubPage",{enumerable:!0,get:function(){return c.SubPage}});var d=i(19937);Object.defineProperty(t,"CheckBoxButton",{enumerable:!0,get:function(){return d.CheckBoxButton}});var p=i(22227);Object.defineProperty(t,"CheckboxRect",{enumerable:!0,get:function(){return p.CheckboxRect}});var u=i(51318);Object.defineProperty(t,"RadioDisc",{enumerable:!0,get:function(){return u.RadioDisc}})},53507:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(1693),t),n(i(51920),t),n(i(34345),t)}}]);