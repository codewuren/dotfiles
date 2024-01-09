const getObjectFromLocalStorage = async function(key) {
    return new Promise((resolve, reject) => {
      try {
        chrome.storage.local.get(key, function(value) {
          resolve(value[key]);
        });
      } catch (ex) {
        reject(ex);
      }
    });
  };

var iggservice = (function () {

    var iggcfg = {};

    function getconfig() {
        return iggcfg;
    }

    function get_base_domain() {
        return "https://asia.igugehelperapi.com/";
    }

    function init_config(init_callback) {
        console.log("init config");
        iggcfg.mzk_config = {
            base_domain: get_base_domain(),
            vip_base_domain: "",
            app_ver: "1.0.0",
            browser_ver: "",
            device_name: "chrome",
            curr_server_id: "",
            lang: chrome.i18n.getUILanguage(),
            'notice': { title: "开通VIP可获取更高速加速通道", url: "login.html" },
            'vip_notice': { title: "IGG官方网站 http://iguge.net", url: "http://iguge.net" },
            api_ver: "1.0",
            uninstall_url: "",
            read_vip_exp_count: 1,
            is_ff_privateBrowsingAllowed: false,
            proxy_permissions_namewhilelist: ["IDM Integration Module"]
        };
        iggcfg.mzk_pac_config = {
            geoip_data: "[]",
            testdomain: {},
            test_pac_domain: [],
            auto_test_server_rank: [],
            geoip_switch: true,
        };
        iggcfg.mzk_user_token = "";
        iggcfg.mzk_is_connect = false;
        iggcfg.mzk_select_server_info = false;
        iggcfg.mzk_connect_mode = "smart";
        iggcfg.mzk_user_info = {};
        iggcfg.mzk_server_id = '';

        iggcfg.mzk_backup_server = [
            "https://$udomain$.igsync.net/",
            "http://$udomain$.igg-sync.com/",
            "http://$udomain$.igg-sync.net/",
            "http://$udomain$.imsfast.org/93f83938/",
            "http://igg.fyi/",
            "https://$udomain$.dingdingsync.com/",
            "http://v5.igghelper.com:8801/",
            "http://service.iggapi.xyz:10911/",
        ];

        iggcfg.mzk_vip_backup_server = iggcfg.mzk_backup_server;

        iggcfg.mzk_config.vip_base_domain = "https://api.igg.fyi/";

        load_storage_config(init_callback);
    }

    async function hash(string) {
        const utf8 = new TextEncoder().encode(string);
        const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray
            .map((bytes) => bytes.toString(16).padStart(2, '0'))
            .join('');
        return hashHex;
    }

    function replace_hash_domain(hash_domain) {
        let i = 0;

        while (i < iggcfg.mzk_backup_server.length) {
            iggcfg.mzk_backup_server[i] = iggcfg.mzk_backup_server[i].replace('$udomain$', hash_domain);
            i++;
        }

        i = 0;
        while (i < iggcfg.mzk_vip_backup_server.length) {
            iggcfg.mzk_vip_backup_server[i] = iggcfg.mzk_vip_backup_server[i].replace('$udomain$', hash_domain);
            i++;
        }
    }


    async function load_storage_config(init_callback) {
        chrome.storage.local.get(null, function (result) {
            iggcfg.mzk_is_connect = result.mzk_is_connect;
            iggcfg.mzk_server_id = result.mzk_server_id;
            if (result.mzk_select_server_info) {
                iggcfg.mzk_select_server_info = result.mzk_select_server_info;
            }

            if(typeof result.mzk_is_connect !== "undefined" && result.mzk_is_connect == true){
                set_badge_on();
            }else{
                set_badge_off();
            }

            if (typeof result.mzk_geoip_switch !== "undefined") {
                iggcfg.mzk_pac_config.geoip_switch = result.mzk_geoip_switch;
            }

            if (typeof result.test_pac_domain !== "undefined") {
                iggcfg.mzk_pac_config.test_pac_domain = result.test_pac_domain;
            }

            if (typeof result.pac_auto_test_server !== "undefined") {
                iggcfg.mzk_pac_config.testdomain = result.pac_auto_test_server;
            }

            if (typeof result.backup_url_domain !== "undefined") {
                iggcfg.mzk_backup_server = result.backup_url_domain;
                iggcfg.mzk_config.base_domain = iggcfg.mzk_backup_server[0];
            }

            if (typeof result.backup_vip_domain !== "undefined") {
                iggcfg.mzk_vip_backup_server = result.backup_vip_domain;
                iggcfg.mzk_config.vip_base_domain = result.backup_vip_domain[0];
            }

            if (typeof result.last_api_domain !== "undefined") {
                iggcfg.mzk_config.base_domain = result.last_api_domain;
                iggcfg.mzk_config.vip_base_domain = result.last_api_domain;
            }

            if (typeof result.proxy_permissions_namewhilelist !== "undefined") {
                iggcfg.mzk_config.proxy_permissions_namewhilelist = result.proxy_permissions_namewhilelist;
            }

            if (typeof result.mzk_token !== "undefined") {
                iggcfg.mzk_user_token = result.mzk_token;
            }

            var hash_domain = "";
            if (typeof result.last_hash_domain !== "undefined") {
                hash_domain = result.last_hash_domain;
                replace_hash_domain(hash_domain);
            } else {
                hash(new Date()).then(function (hex) {
                    hash_domain = hex.substring(0, 16);
                    chrome.storage.local.set({ last_hash_domain: hash_domain });
                    replace_hash_domain(hash_domain);
                });
            }


            if (result.uinfo) {
                iggcfg.mzk_user_info = JSON.parse(result.uinfo);
            }

            var browser_ver = getFirefoxVersion();
            if (browser_ver) {
                iggcfg.mzk_config.device_name = "firefox";
                iggcfg.mzk_config.browser_ver = browser_ver;
                check_firefox_privateBrowsingAllowed();
            } else if (navigator.userAgent.match(/Edg\/([0-9]+)\./)) {
                iggcfg.browser_ver = getEdgeVersion();
                iggcfg.mzk_config.device_name = "edge";
                iggcfg.mzk_config.browser_ver = browser_ver;
            } else if (navigator.userAgent.match(/OPR\/([0-9]+)\./)) {
                iggcfg.browser_ver = getOperaVersion();
                iggcfg.mzk_config.device_name = "opera";
                iggcfg.mzk_config.browser_ver = browser_ver;
            } else {
                iggcfg.mzk_config.browser_ver = getChromeVersion();
            }

            var Manifest = chrome.runtime.getManifest();
            iggcfg.mzk_config.app_ver = Manifest.version;
            if (init_callback) init_callback();
            check_proxy_permissions();
        });
    }

    function init_connect() {
        get_user_token(function () {
            if (iggcfg.mzk_is_connect) {
                init_config(function(){
                    open_vpn();
                });
            } 
            // else if (iggcfg.mzk_user_info.is_vip && iggcfg.mzk_user_info.u_type != "parent") {
            //     close_vpn(function () {
            //         must_email_login_tips();
            //     });
            // } 
            // else if (iggcfg.mzk_user_token && iggcfg.mzk_user_info.u_type != "parent") {
            //     must_email_login_tips();
            //     user_logout(function(){},"auto_s3");
            // }
        });
    }

    function getChromeVersion() {
        var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        return raw ? parseInt(raw[2], 10) : false;
    }

    function getFirefoxVersion() {
        var raw = navigator.userAgent.match(/Firefox\/([0-9]+)\./);
        return raw ? parseInt(raw[1], 10) : false;
    }

    function getEdgeVersion() {
        var raw = navigator.userAgent.match(/Edg\/([0-9]+)\./);
        return raw ? parseInt(raw[1], 10) : false;
    }

    function getOperaVersion() {
        var raw = navigator.userAgent.match(/OPR\/([0-9]+)\./);
        return raw ? parseInt(raw[1], 10) : false;
    }

    function user_uninstall() {
        if (typeof mzk_user_info.u_type !== "undefined" && mzk_user_info.u_type === "parent") {
            user_logout();
        }
    }

    function load_default_data(_acallback) {
        Promise.all([
            fetch(chrome.runtime.getURL("/localdb/geoip.txt")).then(x => x.text())
        ]).then(([data]) => {
            iggcfg.mzk_pac_config.geoip_data = data;
            if (_acallback)
                _acallback();
        });
    }

    function reload_geoip_switch() {
        chrome.storage.local.get("mzk_geoip_switch", function (result) {
            if (typeof result.mzk_geoip_switch !== "undefined") {
                iggcfg.mzk_pac_config.geoip_switch = result.mzk_geoip_switch;
                if (iggcfg.mzk_is_connect && iggcfg.mzk_user_info.u_type == "parent") {
                    open_vpn();
                }
            }
        });
    }

    function reload_server_line(_acallback) {
        chrome.storage.local.get(["mzk_select_server_info", "mzk_server_id"], function (result) {
            iggcfg.mzk_server_id = result.mzk_server_id;
            iggcfg.mzk_select_server_info = result.mzk_select_server_info;
            //open_vpn();
            if (iggcfg.mzk_select_server_info.line_mode != "smart") {
                chrome.storage.local.remove(["testspeed_top_ranking_server", "test_pac_domain"]);
            } else {
                KeepLive_Session();
            }
            if (_acallback)
                _acallback();
        });
    }

    function get_user_token(_acallback) {
        chrome.storage.local.get(['mzk_token', 'uinfo'], function (result) {
            if (!result.mzk_token || !result.uinfo) {
                opentabsurl(chrome.runtime.getURL("login.html?/muser/login"));
                return false;
            }
            if (result.mzk_token) iggcfg.mzk_user_token = result.mzk_token;
            if (_acallback)
                _acallback();
        });
    }

    function opentabsurl(url) {
        chrome.tabs.create({
            url: url
        });
    }



    function MZK_getJSON_DATA(API, send_data, _rcallback) {
        if (!send_data)
            send_data = {};
        var Manifest = chrome.runtime.getManifest();
        send_data.appver = Manifest.version;
        send_data.device_name = iggcfg.mzk_config.device_name;
        send_data.token = iggcfg.mzk_user_token;
        send_data.curr_server_id = iggcfg.mzk_server_id;
        send_data.runtime_id = chrome.runtime.id;
        send_data.lang = iggcfg.mzk_config.lang;
        if (iggcfg.mzk_user_info.is_vip) {
            var curr_api_url = iggcfg.mzk_config.vip_base_domain;
            if (!curr_api_url) curr_api_url = iggcfg.mzk_vip_backup_server[0];
            iggcfg.curr_backup_server_list = iggcfg.mzk_vip_backup_server;
        } else {
            var curr_api_url = iggcfg.mzk_config.base_domain;
            iggcfg.curr_backup_server_list = iggcfg.mzk_backup_server;
        }
        iggcfg.retryLimit = iggcfg.curr_backup_server_list.length;
        getjsonData(curr_api_url, API, send_data, 0).then(data => {
            if (!data) return false;
            if (typeof data.msgtype !== "undefined" && typeof data.msgdata !== "undefined" && data.msgtype == "Encrypt") {
                data = JSON.parse(CryptoJSAesDecrypt(data.msgdata));
            }
            if (_rcallback) {
                _rcallback(data);
            }
        });
        return true;
    }

    function CryptoJSAesDecrypt(encrypted_json_string) {
        var obj_json = JSON.parse(encrypted_json_string);
        var encrypted = obj_json.ciphertext;
        var salt = CryptoJS.enc.Hex.parse(obj_json.salt);
        var iv = CryptoJS.enc.Hex.parse(obj_json.iv);
        var key = CryptoJS.PBKDF2(iggcfg.mzk_user_token, salt, { hasher: CryptoJS.algo.SHA512, keySize: 64 / 8, iterations: 999 });
        var decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv: iv });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }

    async function getjsonData(domain = '', apipath = '', data = {}, tryCount) {
        const controller = new AbortController();
        setTimeout(() => {
            controller.abort();
        }, 15000);
        // Default options are marked with *
        try {
            if (!domain) domain = get_base_domain();
            const response = await fetch(domain + apipath, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'include', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    'Accept-Encoding': 'gzip'
                },
                signal: controller.signal,
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            }).catch((error) => {
                console.log(error)
            });
            return await response.json();
        } catch (error) {
            console.log(error);
            if (tryCount < iggcfg.retryLimit) {
                if (iggcfg.mzk_user_info.is_vip) iggcfg.mzk_config.vip_base_domain = iggcfg.curr_backup_server_list[tryCount]; else iggcfg.mzk_config.base_domain = iggcfg.curr_backup_server_list[tryCount];
                domain = iggcfg.curr_backup_server_list[tryCount];
                console.log("try domain:" + domain +  apipath + " " + new Date());
                chrome.storage.local.set({ last_api_domain: domain });
                // chrome.storage.local.get(["debug_log"],function(r){
                //     var debug_log = [];
                //     if(typeof r.debug_log !== "undefined") debug_log = r.debug_log;
                //     var add_log = domain + apipath + " " + new Date();
                //     debug_log.push(add_log);
                //     chrome.storage.local.set("debug_log",debug_log);
                // });
                return getjsonData(domain, apipath, data, tryCount + 1);
            } else {
                if (!/getsession/igm.test(apipath) && !/show/igm.test(apipath) ) {
                    show_notifications_msg('network_error_' + Math.random(), get_lan_msg("error_network"));
                }
                return false;
            }
        }
    }

    function get_lan_msg(msgkey, substitutions) {
        if (typeof substitutions === "undefined") substitutions = [];
        return chrome.i18n.getMessage(msgkey, substitutions);
    }

    /**
     * 
     * @param string msg_type_id
     * @param string msg
     */
    function show_notifications_msg(msg_type_id, msg) {
        //msg_type_id += Math.floor(Math.random() * 1000) + 1;
        chrome.notifications.create(msg_type_id, {
            'type': 'basic',
            'iconUrl': 'img/128ico.png',
            'title': 'IGuGe',
            'message': msg,
            'isClickable': true,
            'priority': 2
        }, function (id) {
            console.log("Last error:" + chrome.runtime.lastError);
            //console.log("Last error:");
        });
    }

    function vip_exp_tips() {
       if (!iggcfg.mzk_user_info.is_vip && iggcfg.mzk_user_info.u_type == "parent") {
            chrome.notifications.create("mzk_vip_is_exp", {
                'type': 'basic',
                'iconUrl': 'img/128ico.png',
                'title': 'VIP已经过期',
                'message': "您的iGuge VIP已经过期,点此续费.",
                'isClickable': true,
                'priority': 2
            }, function (id) {
                console.log("Last error:", chrome.runtime.lastError);
            });

            chrome.notifications.onClicked.addListener(function (id) {
                chrome.notifications.clear(id);
                opentabsurl(chrome.runtime.getURL("/helper/payment.html?pid=2"), "iggpayment");
            });
        }
    }

    function must_email_login_tips() {
        if (iggcfg.mzk_user_info.u_type != "parent") {
            chrome.notifications.create("igg_mustemaillogin", {
                'type': 'basic',
                'iconUrl': 'img/128ico.png',
                'title': '账号异常',
                'message': "您的登陆信息已经丢失,点此重新登陆。",
                'isClickable': true,
                'priority': 2
            }, function (id) {
                console.log("Last error:", chrome.runtime.lastError);
            });

            chrome.notifications.onClicked.addListener(function (id) {
                chrome.notifications.clear(id);
                opentabsurl(chrome.runtime.getURL("login.html?/muser/login"), "igglogin");
            });
        }
    }

    function check_proxy_permissions() {
        if (iggcfg.mzk_config.device_name === "firefox" && typeof browser !== "undefined") {
            browser.management.getAll(function (ExtensionInfo) {
                ExtensionInfo.forEach(check_clash_app);
            });
        } else {
            chrome.management.getAll(function (ExtensionInfo) {
                ExtensionInfo.forEach(check_clash_app);
            });
        }
    }

    function check_clash_app(ExtensionInfo) {
        if (ExtensionInfo.id != chrome.runtime.id && typeof ExtensionInfo.permissions !== "undefined" && ExtensionInfo.permissions.indexOf('proxy') !== -1 && ExtensionInfo.enabled === true && ExtensionInfo.id !== chrome.runtime.id) {
            if (!iggcfg.mzk_config.proxy_permissions_namewhilelist.includes(ExtensionInfo.name)) chrome.management.setEnabled(ExtensionInfo.id, false);
        }
    }

    function check_firefox_privateBrowsingAllowed(_rcallback) {
        chrome.management.get(chrome.runtime.id, function (result) {
            iggcfg.mzk_config.is_ff_privateBrowsingAllowed = result.permissions.includes("internal:privateBrowsingAllowed");
            if (_rcallback) {
                _rcallback(data);
            }
        });
    }

    function user_logout(_acallback , u_s = 'auto') {
        MZK_getJSON_DATA("chromeext/muser/logout?u_s=" + u_s, {},
            function (data) {
                close_vpn(function () {
                    chrome.storage.local.get(null, function (local_data) {
                        var retain_key = ["backup_vip_domain", "backup_url_domain", "last_hash_domain"];
                        for (const [key, value] of Object.entries(local_data)) {
                            if (!retain_key.includes(key)) {
                                chrome.storage.local.remove(key);
                            }
                        }
                        iggcfg.mzk_server_id = '';
                        iggcfg.mzk_user_token = "";
                        iggcfg.mzk_user_info = {};
                        Mzk_iTestSpeed.top_server = [];
                        opentabsurl(chrome.runtime.getURL("login.html?/muser/login"));
                        if(_acallback) _acallback();
                    });
                    chrome.alarms.clearAll();
                });
            }
        );
    }

    function email_login(postData, _rlogincallback) {
        MZK_getJSON_DATA("chromeext/v2/email_login", postData, function (data) {
            if (data.result == 'ok') {
                iggcfg.mzk_user_info = data.uinfo;
                iggcfg.mzk_user_token = data.token;
                chrome.storage.local.set({ mzk_token: data.token, uinfo: JSON.stringify(data.uinfo) }, function () {
                    iggcfg.mzk_select_server_info = false;
                    iggcfg.mzk_is_connect = false;
                    chrome.action.setPopup({ popup: "main.html" });
                    check_proxy_permissions();
                    get_default_server(function () {
                        open_vpn(function () {
                            start_listen();
                            if (_rlogincallback) {
                                _rlogincallback(data);
                            }
                        });
                    });
                });
            } else {
                if (_rlogincallback) {
                    _rlogincallback(data);
                }
            }
        });
    }



    
    function start_listen() {
        chrome.storage.local.get(["mzk_is_connect"], function (result) {
            if (!result.mzk_is_connect) return;
            chrome.alarms.create("KeepLive_Session", { delayInMinutes: 60, periodInMinutes: 60 });
            chrome.alarms.create("KeepLive_Session_Init", { delayInMinutes: 3 });
            //chrome.alarms.create("Check_iGG_Alarms", { delayInMinutes: 5 , periodInMinutes: 5});
            chrome.alarms.onAlarm.addListener(bg_listen_handle);
        });
    }

    function start_bg_listen_handle(){
        chrome.alarms.onAlarm.addListener(bg_listen_handle);
        chrome.alarms.clear("Check_iGG_Alarms");
    }

    function check_alarms(){
        console.log("check alarms");
    }

    function bg_listen_handle(alarm) {
        switch (alarm.name) {
            case "KeepLive_Session":
                init_config(function () {
                    KeepLive_Session();
                });
                 break;
            case "KeepLive_Session_Init":
                init_config(function () {
                    KeepLive_Session();
                });
                break;
            case "Check_iGG_Alarms":
                //iggservice.check_alarms();
                break;    
            case "TestSpeed_First_Run":
                Mzk_iTestSpeed.Start();
                break;
            case "TestSpeed_Run":
                Mzk_iTestSpeed.Start(1);
                break;
            case "TestSpeed_ApplyVPN":
                init_config(function () {
                    Mzk_iTestSpeed.ApplyVPN();
                });
                break;
            default:
        }
        listen_server_auth();
    }

    var calls = {};
    var DEFAULT_RETRY_ATTEMPTS = 5;
    async function bg_auth_handle(details, callbackFn) {
        var idstr = details.requestId.toString();
        if (details.isProxy === true) {
            if (!(idstr in calls)) {
                calls[idstr] = 0;
            }
            
            calls[idstr] = calls[idstr] + 1;
            var retry = DEFAULT_RETRY_ATTEMPTS;
            if (calls[idstr] >= retry) {
                calls = {};
                callbackFn({
                    cancel: true
                });
                // return({
                //     cancel: true
                // });
            }
            var db_select_server = await getObjectFromLocalStorage("mzk_select_server_info");
            var username = db_select_server.p_user;
            var password = db_select_server.p_pass;
            if (username && password) {
                callbackFn({
                    authCredentials: {
                        'username': username,
                        'password': password
                    }
                });
            }
            callbackFn({
                authCredentials: {
                    'username': username,
                    'password': password
                }
            });
        }
        callbackFn({});
    }

    function listen_server_auth() {
        chrome.webRequest.onAuthRequired.addListener(
            bg_auth_handle,
            { urls: ['<all_urls>'] }, ['asyncBlocking']
        );
    }

    class Mzk_Kepplive_Service {
        static sync_current_server_info(sid) {
            if (iggcfg.mzk_select_server_info) {
                MZK_getJSON_DATA("chromeext/v2/get_server_info", { sid: sid }, function (data) {
                    if (data.result == "ok") {
                        if (typeof data.server.line_sn === "undefined") {
                            get_default_server(function () {
                                if (iggcfg.mzk_is_connect) open_vpn();
                            });
                        } else {
                            iggcfg.mzk_select_server_info = data.server;
                            chrome.storage.local.set({ mzk_select_server_info: data.server }, function () {
                                iggcfg.mzk_server_id = data.server.line_sn;
                                iggcfg.mzk_select_server_info = data.server;
                                if (iggcfg.mzk_is_connect) open_vpn();
                            });
                        }
                    }
                });
            }
        }
        static sync_testdomain(auto_test_server) {
            iggcfg.mzk_pac_config.testdomain = auto_test_server;
            var test_pac_domain = {};
            for (const key in auto_test_server) {
                test_pac_domain[auto_test_server[key].testdomain] = auto_test_server[key].server;
            };
            iggcfg.mzk_pac_config.test_pac_domain = test_pac_domain;
            chrome.storage.local.set({ test_pac_domain: test_pac_domain, pac_auto_test_server: auto_test_server });
            open_vpn(function () {
                chrome.alarms.create("TestSpeed_First_Run", { delayInMinutes: 1 });
            });
        }
    }


    function KeepLive_Session() {
        chrome.idle.queryState(60, function (newState) {
            console.log("sys state:" + newState);
            if (newState != "locked") {
                Run_keepsession();
            }
        });
    }

    function Run_keepsession() {
        chrome.storage.local.get(["mzk_is_connect", "uinfo", "mzk_token", "mzk_select_server_info", "mzk_server_id"], function (result) {
            if (!result.mzk_is_connect) return;
            iggcfg.mzk_user_info = JSON.parse(result.uinfo);
            iggcfg.mzk_user_token = result.mzk_token;
            iggcfg.mzk_select_server_info = result.mzk_select_server_info;
            iggcfg.mzk_server_id = result.mzk_server_id;
            MZK_getJSON_DATA("chromeext/v2/getsession/token/" + iggcfg.mzk_user_token + "?appver=" + iggcfg.mzk_config.app_ver, {}, function (data) {
                if (data.result == "ok") {
                    if (data.uinfo.u_type !== "parent") {
                        must_email_login_tips();
                        user_logout(function(){},"auto_s1");
                        return;
                    }

                    if (data.is_user_change || data.uinfo.vip_level != iggcfg.mzk_user_info.vip_level) {
                        get_default_server(function () {
                            open_vpn();
                        });
                    }
                    chrome.storage.local.set({ uinfo: JSON.stringify(data.uinfo) });
                    iggcfg.mzk_user_info = data.uinfo;

                    if ((iggcfg.mzk_select_server_info.vip_level > iggcfg.mzk_user_info.vip_level) || (iggcfg.mzk_user_info.vip_level > 1 && iggcfg.mzk_select_server_info.vip_level < 2)) {
                        get_default_server(function () {
                            open_vpn();
                        });
                    }

                    iggcfg.mzk_config.vip_notice = data.notice;
                    if (iggcfg.mzk_select_server_info && data.server_last_update !== iggcfg.mzk_select_server_info.last_update) {
                        Mzk_Kepplive_Service.sync_current_server_info(iggcfg.mzk_select_server_info.line_sn);
                    }

                    if (data.auto_test_server.length > 2 && iggcfg.mzk_select_server_info.line_mode == "smart") {
                        Mzk_Kepplive_Service.sync_testdomain(data.auto_test_server);
                    }


                    if (typeof data.backup_domain_server !== "undefined") {
                        chrome.storage.local.set({ "backup_url_domain": data.backup_domain_server });
                        iggcfg.mzk_backup_server = data.backup_domain_server;
                    }

                    if (typeof data.vip_backup_domain_server !== "undefined") {
                        chrome.storage.local.set({ "backup_vip_domain": data.vip_backup_domain_server });
                        iggcfg.mzk_vip_backup_server = data.vip_backup_domain_server;
                    }

                    if (typeof data.proxy_namewhilelist !== "undefined") {
                        chrome.storage.local.set({ "proxy_permissions_namewhilelist": data.proxy_namewhilelist });
                        iggcfg.mzk_config.proxy_permissions_namewhilelist = data.proxy_namewhilelist;
                    }

                    //if (typeof data.vip_exp_tips !== "undefined" && data.vip_exp_tips == "open" && iggcfg.mzk_config.read_vip_exp_count <= 3) {
                    if (typeof data.vip_exp_tips !== "undefined" && data.vip_exp_tips == "open") {
                        vip_exp_tips();
                        iggcfg.mzk_config.read_vip_exp_count++;
                    }

                    if (!chrome.webRequest.onAuthRequired.hasListener(bg_auth_handle)) {
                        listen_server_auth();
                    }
                } else {
                    console.log("error data");
                    console.log(data);
                    if (typeof data.result !== "undefined" && data.result == "error") {
                        show_notifications_msg('user_token_error', get_lan_msg("user_token_error"));
                        user_logout(function(){},"auto_s2");
                    }
                }
            });
            chrome.storage.local.set({"last_keeplive_time":Date.now()});
        });
    }

    function get_default_server(_rcallback) {
        var ipdata = {};
        if (typeof Mzk_iTestSpeed.ipinfo !== "undefined" && typeof Mzk_iTestSpeed.ipinfo.data !== "undefined") ipdata = Mzk_iTestSpeed.ipinfo.data;
        MZK_getJSON_DATA("chromeext/v2/get_default_location", { geoip_info: ipdata }, function (data) {
            if (data.result == 'ok') {
                chrome.storage.local.set({ mzk_select_server_info: data.server, mzk_server_id: data.server.line_sn }, function () {
                    iggcfg.mzk_server_id = data.server.line_sn;
                    iggcfg.mzk_select_server_info = data.server;
                    if (_rcallback) {
                        _rcallback();
                    }
                });
            } else {
                console.log(data.msg);
            }
        });
    }


    function open_vpn(_acallback) {
        chrome.storage.local.get(["mzk_server_id", "mzk_select_server_info"], function (result) {
            applyChanges('production', function () {
                chrome.storage.local.set({ mzk_is_connect: true });
                set_badge_on();
                console.log('vpn Connected');
                listen_server_auth();
                if (_acallback)
                    _acallback();
            });
        });
    }

    function close_vpn(_acallback) {
        applyChanges("system", function () {});
        chrome.storage.local.remove("mzk_is_connect");
        set_badge_off();
        if (_acallback)
            _acallback();
        console.log('vpn Disconnect');
    }

    function onlyUniqueArray(value, index, self) {
        return self.indexOf(value) === index;
    }

    function applyChanges(mode, cb) {
        switch (iggcfg.mzk_config.device_name) {
            case 'edge':
            case 'chrome':
                applyPacData(mode, cb);
                break;
            case 'firefox':
                var browser_proxy = new Mzk_Firefox_proxy();
                var base_domain = "";
                if (iggcfg.mzk_user_info.is_vip) base_domain = iggcfg.mzk_config.vip_base_domain; else base_domain = iggcfg.mzk_config.base_domain;
                var pac_url = base_domain + "chromeext/pac/show/token/" + mzk_user_token + "?sid=" + mzk_select_server_info.line_sn + "&pmode=" + mzk_connect_mode + "&geoip=" + mzk_pac_config.geoip_switch + "&rd=" + Math.random().toString();
                var config = browser_proxy.generateProxyConfig(mode, pac_url);
                var re = /HTTPS ([^;]+)/g;
                var firefox_server = iggcfg.mzk_select_server_info.address.split(re);
                var ff_info = firefox_server[1].split(":");
                iggcfg.mzk_select_server_info.ff_server = { server: ff_info[0], port: ff_info[1] };
                browser_proxy.applyChanges(config, cb);
                break;
            default:
        }
    }

    function applyPacData(mode, cb) {
        if ("production" === mode) {
            chrome.storage.local.get(["testspeed_top_ranking_server", "mzk_token", "mzk_select_server_info"], function (s_server) {
                iggcfg.mzk_user_token = s_server.mzk_token;
                iggcfg.mzk_select_server_info = s_server.mzk_select_server_info;
                var top_server = "";
                if (iggcfg.mzk_select_server_info.line_mode == "smart" && s_server.testspeed_top_ranking_server) top_server = JSON.stringify(s_server.testspeed_top_ranking_server);
                MZK_getJSON_DATA("chromeext/pac/show", { sid: iggcfg.mzk_select_server_info.line_sn, gpd: 1, geoip: iggcfg.mzk_pac_config.geoip_switch.toString(), top_server: top_server }, function (data) {
                    if (typeof data.result !== "undefined" && data.result == 'ok') {
                        load_default_data(function () {
                            var browser_proxy = new Mzk_Chrome_proxy();
                            data.tpl = data.tpl.replace('__GEOIP_LIST__', iggcfg.mzk_pac_config.geoip_data);
                            var config = browser_proxy.generateProxyConfig(mode, data.tpl);
                            browser_proxy.applyChanges(config, cb);
                        });
                    }else{
                        if (typeof data.result !== "undefined" && data.result == "error") {
                            show_notifications_msg('user_token_error', get_lan_msg("user_token_error"));
                            // user_logout();
                        }
                    }
                });
            });
        } else {
            var browser_proxy = new Mzk_Chrome_proxy();
            var config = browser_proxy.generateProxyConfig(mode, '');
            browser_proxy.applyChanges(config, cb);
        }
    }

    function set_badge_on() {
        chrome.action.setBadgeText({ text: 'ON' });
        chrome.action.setBadgeBackgroundColor({ color: '#4688F1' });
    }

    function set_badge_off() {
        chrome.action.setBadgeText({ text: 'OFF' });
        chrome.action.setBadgeBackgroundColor({ color: '#fa7d3c' });
    }

    class Mzk_Chrome_proxy {
        applyChanges(config, cb) {
            chrome.proxy.settings.set({
                value: config,
                scope: 'regular'
            }, cb);
        }

        generateProxyConfig(s_mode, pac_data) {
            switch (s_mode) {
                case 'system':
                    return { mode: 'system' }
                case 'production':
                    if (pac_data)
                        return {
                            mode: 'pac_script',
                            pacScript: {
                                data: pac_data,
                                mandatory: true
                            }
                        }
            }
            return { mode: 'system' }
        }
    };

    class Mzk_iTestSpeed {
        static RunTestspeed() {
            init_config(function () {
                var task_count = 0;
                if (iggcfg.mzk_select_server_info.line_mode != "smart") return;
                task_count = Object.keys(iggcfg.mzk_pac_config.test_pac_domain).length;
                if (task_count > 2 && iggcfg.mzk_is_connect) {
                    var auto_test_server_rank = [];
                    var top_server = [];
                    for (const i in iggcfg.mzk_pac_config.testdomain) {
                        var k = iggcfg.mzk_pac_config.testdomain[i];
                        Mzk_iTestSpeed.fetchurl("https://" + k.testdomain + "/img/128ico.png", i, function (err, data) {
                            console.log(" speed:" + data + " err:" + err);
                            if (err !== null) {
                                auto_test_server_rank.push({ server: iggcfg.mzk_pac_config.testdomain[i].server, ranking: data, result: err });
                            } else {
                                var trank = Math.round(data * k.load);
                                if (trank < 3000) {
                                    auto_test_server_rank.push({ server: iggcfg.mzk_pac_config.testdomain[i].server, ranking: data, result: "ok" });
                                    top_server.push({ server: iggcfg.mzk_pac_config.testdomain[i].server, ranking: trank, result: "ok" });
                                }
                            }
                            if (task_count > 0) task_count--;
                            if (task_count < 1) {
                                chrome.storage.local.set({ speed_test_top_server: top_server, auto_test_server_rank: auto_test_server_rank });
                            }
                        });
                    };

                }
            });
        }

        static fetchurl(urls, keyid, callback_func) {
            // const controller = new AbortController();
            // setTimeout(() => {
            //     controller.abort();
            // }, 3000);
            var s_time = new Date().getTime();
            fetch(urls, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'include', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'image/png'
                },
                //signal: controller.signal,
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            }).then(function () {
                var e_time = new Date().getTime();
                var run_time = e_time - s_time;
                callback_func(null, run_time);
            }).catch((error) => {
                console.log(error);
                var e_time = new Date().getTime();
                var run_time = e_time - s_time;
                callback_func(error, run_time);
            });
        }

        static Start(times) {
            if (typeof iggcfg.mzk_select_server_info.address === "undefined" || iggcfg.mzk_select_server_info.line_mode != "smart" || Mzk_iTestSpeed.task_count > 0) return false;
            Mzk_iTestSpeed.curr_top_ranking_server = undefined;
            Mzk_iTestSpeed.RunTestspeed();
            if (typeof times === "undefined") {
                chrome.alarms.create("TestSpeed_Run", { delayInMinutes: 1 });
                Mzk_iTestSpeed.last_test_user_isvip = iggcfg.mzk_user_info.is_vip;
            } else {
                chrome.alarms.create("TestSpeed_ApplyVPN", { delayInMinutes: 1 });
            }
        }

        static ApplyVPN() {
            init_config(function () {
                chrome.storage.local.get(["speed_test_top_server", "pac_auto_test_server", "mzk_is_connect"], function (result) {
                    if (typeof result.speed_test_top_server === "undefined" || typeof result.pac_auto_test_server === "undefined") return;
                    var top_server = result.speed_test_top_server;
                    var mzk_is_connect = result.mzk_is_connect;
                    iggcfg.mzk_pac_config.auto_test_server_rank = result.pac_auto_test_server;
                    if (Object.keys(iggcfg.mzk_pac_config.auto_test_server_rank).length < 1 || top_server.length < 2) return;
                    top_server.sort(Mzk_iTestSpeed.compare("ranking"));
                    Mzk_iTestSpeed.curr_top_ranking_server = top_server.slice(0, 2);
                    if (Mzk_iTestSpeed.curr_top_ranking_server[0].server == Mzk_iTestSpeed.curr_top_ranking_server[1].server) {
                        Mzk_iTestSpeed.curr_top_ranking_server = undefined;
                        return;
                    }
                    if (Object.keys(Mzk_iTestSpeed.curr_top_ranking_server).length < 2) return;
                    var newserver = "HTTPS " + Mzk_iTestSpeed.curr_top_ranking_server[0].server + ";HTTPS " + Mzk_iTestSpeed.curr_top_ranking_server[1].server + ";";
                    if (typeof iggcfg.mzk_select_server_info.address !== "undefined" && iggcfg.mzk_select_server_info.line_mode == "smart") {
                        if (newserver == iggcfg.mzk_select_server_info.address) return;
                        iggcfg.mzk_select_server_info.address = newserver;
                        chrome.storage.local.set({ mzk_select_server_info: iggcfg.mzk_select_server_info, testspeed_top_ranking_server: Mzk_iTestSpeed.curr_top_ranking_server });
                        if (mzk_is_connect) {
                            if (iggcfg.mzk_config.device_name == "firefox") {
                                Mzk_iTestSpeed.SendReport(function () {
                                    open_vpn();
                                });
                            } else {
                                open_vpn();
                            }
                        }
                    }
                });
                chrome.storage.local.remove(["speed_test_top_server", "auto_test_server_rank"]);
            });
        }

        static SendReport(_rcallback) {
            MZK_getJSON_DATA("chromeext/pac/report_testspeed", { ipinfo: JSON.stringify(Mzk_iTestSpeed.ipinfo), sid: iggcfg.mzk_select_server_info.line_sn, report: JSON.stringify(iggcfg.mzk_pac_config.auto_test_server_rank), top_server: JSON.stringify(Mzk_iTestSpeed.curr_top_ranking_server) }, function (data) {
                if (data.result == 'ok') {
                    if (_rcallback) {
                        _rcallback();
                    }
                } else {
                    console.log(data.msg);
                }
            });
        }

        static GetCurrentIpinfo() {
            ;
        }

        static compare(p) {
            return function (m, n) {
                var a = m[p];
                var b = n[p];
                return a - b;
            }
        }
    };

    class Mzk_Firefox_proxy {
        applyChanges(config, cb) {
            if (mzk_config.is_ff_privateBrowsingAllowed) {
                chrome.proxy.settings.set({
                    value: config,
                    scope: 'regular'
                }, cb);
                if (browser.proxy.onRequest.hasListener(Mzk_Firefox_proxy.handleProxyRequest)) {
                    browser.proxy.onRequest.removeListener(Mzk_Firefox_proxy.handleProxyRequest);
                }
            } else {
                if (config.proxyType === "autoConfig") {
                    browser.proxy.onRequest.addListener(Mzk_Firefox_proxy.handleProxyRequest, { urls: ["<all_urls>"] });
                } else {
                    browser.proxy.onRequest.removeListener(Mzk_Firefox_proxy.handleProxyRequest);
                }
            }
            if (cb) cb();
        }

        generateProxyConfig(s_mode, pac_url) {
            switch (s_mode) {
                case 'system':
                    return { proxyType: 'system' }
                case 'production':
                    return {
                        proxyType: 'autoConfig',
                        autoConfigUrl: pac_url
                    }
            }
        }

        static handleProxyRequest(requestInfo) {
            //var url_info = new URL(requestInfo.url);
            //var api_url_info = new URL(mzk_config.base_domain);
            //var igg_https_proxy = {type: "https", host: mzk_select_server_info.ff_server.server, port: mzk_select_server_info.ff_server.port};
            var igg_direct = {type: "direct"};
            return igg_direct;
        }

        static testDomain(target, domains, cnRootIncluded) {
            if (typeof domains === "undefined") return false;
            var idxA = target.lastIndexOf('.');
            var idxB = target.lastIndexOf('.', idxA - 1);
            var suffix = cnRootIncluded ? target.substring(idxA + 1) : '';
            if (suffix === 'cn') {
                return true;
            }
            while (true) {
                if (idxB === -1) {
                    if (domains.includes(target)) {
                        return true;
                    } else {
                        return false;
                    }
                }
                suffix = target.substring(idxB + 1);
                if (domains.includes(suffix)) {
                    return true;
                }
                idxB = target.lastIndexOf('.', idxB - 1);
            }
        }

        static isPrivateIp(ip) {
            return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(ip) ||
                /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(ip) ||
                /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(ip) ||
                /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(ip) ||
                /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(ip) ||
                /^f[cd][0-9a-f]{2}:/i.test(ip) ||
                /^fe80:/i.test(ip) ||
                /^::1$/.test(ip) ||
                /^::$/.test(ip);
        }
    };

    return {
        load_storage_config: load_storage_config,
        init_config: init_config,
        init_connect: init_connect,
        start_listen: start_listen,
        check_alarms: check_alarms,
        start_bg_listen_handle: start_bg_listen_handle,
        getconfig: getconfig,
        MZK_getJSON_DATA: MZK_getJSON_DATA,
        check_proxy_permissions: check_proxy_permissions,
        open_vpn: open_vpn,
        close_vpn: close_vpn,
        email_login: email_login,
        user_logout: user_logout,
        KeepLive_Session: KeepLive_Session,
        reload_geoip_switch: reload_geoip_switch,
        reload_server_line: reload_server_line,
        get_default_server: get_default_server
    }
})();
