check_user_login(function () {
    __pageinit();
});


function enable_connect_button() {
    $("#connect_button").addClass('active');
    $("#connect_button").attr('att', '0');
    $("#mzk_home_link_text").html(get_lan_msg("vpn_connected"));
    MZK_BGS.mzk_is_connect = true;
}

function disable_connect_button() {
    $("#connect_button").removeClass('active');
    $("#connect_button").attr('att', '1');
    $("#mzk_home_link_text").html(get_lan_msg("vpn_click_connect"));
    MZK_BGS.mzk_is_connect = false;
}

function change_connect_model(is_reconn) {
    if (MZK_BGS.mzk_is_connect && is_reconn) {
        open_vpn();
    }

    if (MZK_BGS.mzk_pac_config.geoip_switch === true) {
        $("#connect_mode_text").html(get_lan_msg("vpn_mode_geoip_enable"));
        $("#connect_mode_div").css({ color: "#333" });
    } else {
        $("#connect_mode_text").html(get_lan_msg("vpn_mode_geoip_disable"));
        $("#connect_mode_div").css({ color: "#e5e5e5" });
    }
}


function Resume_vpn_display_status() {
    // 连接模式
    change_connect_model(0);
    if (MZK_BGS.mzk_is_connect && MZK_BGS.mzk_server_id) {
        enable_connect_button();
    } else {
        disable_connect_button();
    }
}


function __pageinit() {
    lang_init();
    if(!MZK_BGS.mzk_user_token) return;
    if (MZK_BGS.mzk_select_server_info) {
        $("#server_name").html(MZK_BGS.mzk_select_server_info.name);
        Resume_vpn_display_status();
    } else {
        iggservice.get_default_server(function () {
            $("#server_name").html(MZK_BGS.mzk_select_server_info.name);
            Resume_vpn_display_status();
            open_vpn();
            enable_connect_button();
            if (MZK_BGS.mzk_user_info.is_vip) {
                iggservice.KeepLive_Session();
            }
        });
    }
    $("#exp_date").html(MZK_BGS.mzk_user_info.vip_expired);
    $("#mzk_app_ver").html(MZK_BGS.mzk_config.app_ver);
    $('.switch .switch-col .switch-main').on("click",function () {
        if (!MZK_BGS.mzk_is_connect) {
            if (!MZK_BGS.mzk_server_id) {
                alert(get_lan_msg("vpn_must_select_server_tips"));
                return false;
            }
            open_vpn();
            console.log("open connect");
            enable_connect_button();
        } else {
            close_vpn(function () {
                disable_connect_button();
            });
            console.log("close connect");
        }
    });

    if (MZK_BGS.mzk_config.device_name === "firefox" && typeof browser !== "undefined" && !MZK_BGS.mzk_config.is_ff_privateBrowsingAllowed) {
        $("#firefox_per_tips").show();
        $("#firefox_per_tips_div").click(function () {
            window.open(chrome.runtime.getURL("helper/ff_tips.html"),"igugehelper");
        });
    }

    $("#connect_mode_div").on("click",function () {
        if (!MZK_BGS.mzk_user_info.is_vip || MZK_BGS.mzk_user_info.vip_level < 1) {
            only_vip_tips();
            return false;
        }
        window.location.href = "helper/pmodel.html";
    });

    if (!MZK_BGS.mzk_user_info.is_vip) {
        $("#connect_mode_div").css({ color: "#e5e5e5", cursor: "not-allowed" });
    }

    $('.language ul li').on("click",function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $("#mzk_select_link").on("click",function () {
        window.location.href = "select_line.html";
    });

    $("#mzk_buyvip_buutton").on("click",function () {
        window.open(chrome.runtime.getURL("/helper/payment.html?pid=2"),"igugehelper");
    });

    $("#vip_date_tips").on("click",function () {
        window.open(chrome.runtime.getURL("/helper/payment.html?pid=2"),"igugehelper");
    });

    $("#client_page_link").on("click",function () {
        window.open(chrome.runtime.getURL("page.html?/client/download"),"igugehelper");
    });

    $("#mzk_setting_buutton").on("click",function () {
        window.location.href = "setting.html";
    });

    if (MZK_BGS.mzk_user_info.is_vip) {
        $("#main_notes").html(MZK_BGS.mzk_config.vip_notice.title).on("click",function () {
            if (/^http/g.test(MZK_BGS.mzk_config.vip_notice.url)) {
                window.open(MZK_BGS.mzk_config.vip_notice.url,"igugehelper");
            } else {
                window.location.href = MZK_BGS.mzk_config.vip_notice.url;
            }
        });
    } else {
        $("#main_notes").html(MZK_BGS.mzk_config.notice.title).on("click",function () {
            if (/^http/g.test(MZK_BGS.mzk_config.notice.url)) {
                window.open(MZK_BGS.mzk_config.notice.url,"igugehelper");
            } else {
                window.location.href = MZK_BGS.mzk_config.notice.url;
            }
        });
    }
    
    check_proxy_permissions();
}

function check_proxy_permissions() {
    if (MZK_BGS.mzk_config.device_name === "firefox" && typeof browser !== "undefined") {
        var app_count = 0;
        chrome.management.getAll(function (ExtensionInfo) {
            ExtensionInfo.forEach(function (EInfo) {
                if (typeof EInfo.permissions !== "undefined" && EInfo.permissions.indexOf('proxy') !== -1 && EInfo.enabled === true && EInfo.id !== chrome.runtime.id && app_count < 1) {
                    app_count++;
                    $.dialog({
                        title: get_lan_msg("fix_proxy_error_title"),
                        content: get_lan_msg('firefox_proxy_error_tips', [EInfo.name]),
                    });
                }
            });
        });

        chrome.proxy.settings.get({
            'incognito': false
        },
            function (proxy_config) {
                if (proxy_config.levelOfControl === 'controlled_by_this_extension' && proxy_config.value.autoConfigUrl && !MZK_BGS.mzk_config.is_ff_privateBrowsingAllowed) {
                    $.confirm({
                        title: get_lan_msg("fix_proxy_error_title"),
                        content: get_lan_msg("firefox_proxy_self_error_tips"),
                        type: 'red',
                        typeAnimated: true,
                        buttons: {
                            ok: {
                                text: get_lan_msg("fix_button"),
                                btnClass: 'btn-red',
                                action: function () {
                                    window.open(chrome.runtime.getURL("helper/ff_tips.html"),"igugehelper");
                                    window.close();
                                }
                            },
                            close: function () {
                                window.close();
                            }
                        }
                    });
                } else if ((proxy_config.levelOfControl === 'controlled_by_this_extension' || proxy_config.levelOfControl === 'controllable_by_this_extension') && MZK_BGS.mzk_is_connect && !proxy_config.value.autoConfigUrl && MZK_BGS.mzk_config.is_ff_privateBrowsingAllowed) {
                    open_vpn();
                }
            });

    } else {
        chrome.proxy.settings.get({
            'incognito': false
        },
            function (proxy_config) {
                if (proxy_config['levelOfControl'] === 'controlled_by_other_extensions') {
                    $.confirm({
                        title: get_lan_msg("fix_proxy_error_title"),
                        content: get_lan_msg("fix_proxy_per_tips"),
                        type: 'red',
                        typeAnimated: true,
                        buttons: {
                            ok: {
                                text: get_lan_msg("fix_button"),
                                btnClass: 'btn-red',
                                action: function () {
                                    chrome.runtime.sendMessage({ cmd: "check_proxy_permissions" });
                                }
                            },
                            close: function () {
                            }
                        }
                    });
                }
            });
        chrome.runtime.sendMessage({ cmd: "check_proxy_permissions" });
    }
}