importScripts("/libs/crypto-js/crypto-js.js");
importScripts('./js/iggservice.js');


// sw start working
self.addEventListener('activate', function (event) {
  console.log("sw start is ok");
  //start_listen();
  iggservice.init_connect();
  iggservice.start_listen();
});

iggservice.init_config();
iggservice.start_bg_listen_handle();

function start_listen() {
  chrome.alarms.onAlarm.addListener(function (alarm) {
      switch (alarm.name) {
          case "KeepLive_Session":
          case "KeepLive_Session_Init":
            iggservice.init_config(function(){
              iggservice.KeepLive_Session();
            });
            break;
          case "Check_iGG_Alarms":
            //iggservice.check_alarms();
            break;
          default:
      }
  });
}

// 消息监听
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (typeof request.cmd === "undefined") {
      sendResponse({ farewell: "hello" });
      return true;
    }
    
    switch (request.cmd) {
      case "MZK_getJSON_DATA":
        iggservice.MZK_getJSON_DATA(request.url, request.senddata, function (response) {
          sendResponse(response);
        });
        break;
      case "check_proxy_permissions":
        sendResponse({ result: 'ok' });
        iggservice.check_proxy_permissions();
        break;
      case "KeepLive_Session":
        sendResponse({ result: 'ok' });
        iggservice.KeepLive_Session();
        break;
      case "get_default_server":
        sendResponse({ result: 'ok' });
        iggservice.get_default_server();
        break;
      case "email_login":
        iggservice.email_login(request.senddata, function (response) {
          sendResponse(response);
        });
        break;
      case "user_logout":
          iggservice.user_logout();
          sendResponse({ result: 'ok' });
          break;
      case "reload_geoip_cfg":
        iggservice.reload_geoip_switch();
        sendResponse({ result: 'ok' });
        break;
      case "reload_server_line":
        iggservice.reload_server_line();
        break;  
      case "open_vpn":
        sendResponse({ result: 'ok' });
        iggservice.open_vpn();
        break;
      case "close_vpn":
        sendResponse({ result: 'ok' });
        iggservice.close_vpn();
        break;
      case "sw_ping":
        sendResponse({ result: 'ok' });
        break;
      default:
        sendResponse({ result: "ok" });
    }
    return true;
  }
);
