function setting_init() {
    $("#mzk_user_username").html(MZK_BGS.mzk_user_info.username);
    $("#mzk_user_level_button").html(MZK_BGS.mzk_user_info.vip_level);
    if (MZK_BGS.mzk_user_info.is_vip) {
        $("#mzk_user_type").html(get_lan_msg("user_vip_title"));
        $("#mzk_vip_exp").html(MZK_BGS.mzk_user_info.vip_expired);
    } else {
        $("#mzk_user_type").html(get_lan_msg("user_member_title"));
        $("#mzk_vip_exp").html(get_lan_msg("vip_expiry_date_status"));
    }
    if (!MZK_BGS.mzk_user_info.email) {
        $("#mzk_email_login_button").show();
        $("#mzk_logout").hide();
        $("#mzk_email_login_button").on("click", function () {
            window.open(chrome.runtime.getURL("login.html?/muser/login"), "igugehelper");
            window.close();
        });
    } else {
        $("#mzk_email_login_button").hide();
        $("#mzk_logout").show();
        $("#mzk_logout").on("click", function () {
            start_loading();
            iggservice.close_vpn();
            iggservice.user_logout(function (data) {
                stop_loading();
                window.close();
            },"userclick"
        );
        });
    }
}


jQuery(function () {
    check_user_login(function () {
        lang_init();
        $("#feedback_button").on("click", function () {
            window.open(chrome.runtime.getURL("helper/open_tracket.html"), "igugehelper");
        });

        $("#aboutus_button").on("click", function () {
            window.location.href = "about.html";
        });

        $("#mobileclient_button").on("click", function () {
            if (!MZK_BGS.mzk_user_info.is_vip || MZK_BGS.mzk_user_info.vip_level < 1) {
                only_vip_tips();
                return false;
            }
            window.open(chrome.runtime.getURL("page.html?/client/feed"), "igugehelper");
        });

        $("#faq_and_notice_button").on("click", function () {
            window.open("/helper/notice.html","igugehelper");
        });

        $("#custom_domain_button").on("click", function () {
            if (!MZK_BGS.mzk_user_info.is_vip || MZK_BGS.mzk_user_info.vip_level < 1) {
                only_vip_tips();
                return false;
            }
            window.open(chrome.runtime.getURL("helper/proxydomain.html"), "igugehelper");
        });
        if (!MZK_BGS.mzk_user_info.is_vip || MZK_BGS.mzk_user_info.vip_level < 1) {
            $("#faq_and_notice_button").hide();
            $("#mobileclient_button").hide();
            $("#custom_domain_button").hide();
        }
        setting_init();
    });
});