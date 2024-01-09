function notice_init(){
    MZK_getJSON_DATA("chromeext/index/notices" , {},function(data){
        if(data.result == 'ok') {
            $.each(data.notes, function (i, k) {
                var s_str = '<div class="alert alert-info" role="alert">'+k+'</div>';
                $("#notes").append(s_str);
            });
        }
});
}

jQuery(function () {
    check_user_login(function(){
        notice_init();
    });
 });