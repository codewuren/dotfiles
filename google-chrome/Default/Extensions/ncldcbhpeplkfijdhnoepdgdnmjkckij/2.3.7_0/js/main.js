iggservice.init_config();
var MZK_BGS = iggservice.getconfig();

function loading_bgsinfo(callbackFn) {
    chrome.storage.local.get(["uinfo", "mzk_is_connect", "mzk_select_server_info", "mzk_server_id", "mzk_token","mzk_geoip_switch"], function (result) {
        if (typeof result.mzk_token !== "undefined") MZK_BGS.mzk_user_token = result.mzk_token;
        if (typeof result.mzk_is_connect !== "undefined") MZK_BGS.mzk_is_connect = result.mzk_is_connect;
        if (typeof result.mzk_server_id !== "undefined") MZK_BGS.mzk_server_id = result.mzk_server_id;
        if (result.mzk_select_server_info) {
            MZK_BGS.mzk_select_server_info = result.mzk_select_server_info;
        }
        MZK_BGS.mzk_pac_config = {};
        if (typeof result.mzk_geoip_switch !== "undefined") {
            MZK_BGS.mzk_pac_config.geoip_switch = result.mzk_geoip_switch;
        }else{
            MZK_BGS.mzk_pac_config.geoip_switch = true;
        }
        var Manifest = chrome.runtime.getManifest();
        MZK_BGS.mzk_config = {
            'notice': { title: "开通VIP可获取更高速加速通道", url: "login.html" },
            'vip_notice': { title: "IGG官方网站 http://iguge.net", url: "https://iguge.net" },
        };
        MZK_BGS.mzk_config.app_ver = Manifest.version;

        if (result.uinfo) {
            MZK_BGS.mzk_user_info = JSON.parse(result.uinfo);
        }
        callbackFn(MZK_BGS);
    });
}


function get_lan_msg(msgkey, substitutions) {
    if (typeof substitutions === "undefined") substitutions = [];
    return chrome.i18n.getMessage(msgkey, substitutions);
}

document.oncontextmenu = document.body.oncontextmenu = function () { return false; }

function start_loading() {
    $.LoadingOverlay("show");
}

function stop_loading() {
    $.LoadingOverlay("hide");
}

function register_token(_acallback) {
    chrome.runtime.sendMessage({ cmd: "register_token" }, function (response) {
        if (response.result == "ok") if (_acallback) _acallback();
    });
}

$("#mzk_back").on("click", function () {
    window.location.href = "/main.html";
});


function check_user_login(will_login) {
    if (typeof chrome === "undefined" || typeof chrome.runtime === "undefined" || typeof chrome.runtime.id === "undefined") {
        window.close();
        return false;
    }
    loading_bgsinfo(function (response) {
        if (!MZK_BGS.mzk_user_info || !MZK_BGS.mzk_user_token) {
            window.location.href = "/welcome.html";
            return;
        } else {
            if (!MZK_BGS.mzk_user_info.vip_expired)
                MZK_BGS.mzk_user_info.vip_expired = get_lan_msg("vip_expiry_date_status");
            if (will_login)
                will_login();
        }
    });

}


function MZK_getJSON_DATA(API, send_data, _rcallback) {
    start_loading();
    iggservice.load_storage_config(function(){
        iggservice.MZK_getJSON_DATA(API , send_data,function(data){
            if(_rcallback) _rcallback(data);
            stop_loading();
        });
    });
}

function open_vpn(_acallback) {
    chrome.runtime.sendMessage({ cmd: "open_vpn" }, function (response) {
        if (_acallback)
            _acallback();
    });
}

function close_vpn(_acallback) {
    chrome.runtime.sendMessage({ cmd: "close_vpn" }, function (response) {
        if (_acallback)
            _acallback();
    });
}

function lang_init() {
    $("[class^='lang_']").each(function (i) {
        var lang_index = $(this).attr("class").toString();
        lang_index = lang_index.split(" ", 1)[0].replace(/^lang_/, "");
        $(this).html(get_lan_msg(lang_index));
    });
}

if (("#mzk_about_us").length > 0) {
    lang_init();
    $("#mzk_server_police").on("click", function () {
        window.open("https://iguge.xyz/helper/?page_id=210", "igugehelper");
    });

    $("#mzk_privacy_police").on("click", function () {
        window.open("https://iguge.xyz/helper/?page_id=215", "igugehelper");
    });
}

function only_vip_tips() {
    $.confirm({
        title: get_lan_msg("error_code"),
        content: get_lan_msg("only_vip_tips"),
        type: 'red',
        typeAnimated: true,
        buttons: {
            ok: {
                text: get_lan_msg("to_buy_vip"),
                btnClass: 'btn-red',
                action: function () {
                    window.location.href = "buyvip.html";
                }
            },
            close: function () {
            }
        }
    });
}

function close_windows() {
    chrome.tabs.getCurrent(function (tab) {
        chrome.tabs.remove(tab.id);
    });
}

function JqueryAlertMsg(msg) {
    $.confirm({
        title: 'Success',
        content: msg,
        type: 'green',
        buttons: {
            OK: function () {
                ;
            }
        }
    });
}

function fix_proxy_permissions() {
    chrome.management.getAll(function (ExtensionInfo) {
        ExtensionInfo.forEach(disable_clash_app);
    });
}

function disable_clash_app(ExtensionInfo) {
    if (typeof ExtensionInfo.permissions !== "undefined" && ExtensionInfo.permissions.indexOf('proxy') !== -1 && ExtensionInfo.enabled === true && ExtensionInfo.id !== chrome.runtime.id) {
        chrome.management.setEnabled(ExtensionInfo.id, false);
    } else if (ExtensionInfo.name == "Tampermonkey") {
        chrome.management.setEnabled(ExtensionInfo.id, false);
    }
    //todo check webRequest and hostPermissions => <all_urls>
}