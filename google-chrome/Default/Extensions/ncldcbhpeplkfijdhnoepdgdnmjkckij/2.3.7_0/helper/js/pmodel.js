jQuery(function () {
    check_user_login(function(){
        page_init();
        lang_init();
    });   
 });

 function page_init(){
    $(".line-inform-txt").click(function(){
        select_model(this.id);
    });
 }

 function select_model(pid){
    if (!MZK_BGS.mzk_user_info.is_vip || MZK_BGS.mzk_user_info.vip_level < 1) {
        return false;
    }
    var geoip_status = false;
    
     if(pid == "igg_pmode1"){
        if (MZK_BGS.mzk_pac_config.geoip_switch == false && MZK_BGS.mzk_user_info.is_vip) {
            geoip_status = true;
        }
     }else if(pid == "igg_pmode2"){
        if (MZK_BGS.mzk_pac_config.geoip_switch == true && MZK_BGS.mzk_user_info.is_vip) {
            geoip_status = false;
        }
     }

     chrome.storage.local.set({ mzk_geoip_switch: geoip_status });
     chrome.runtime.sendMessage({cmd:"reload_geoip_cfg"});
     window.location.href = "/main.html";
 }