$(function(){
    // nav鏀剁缉灞曞紑
    $('.nav-item>a').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            if ($(this).next().css('display') == "none") {
                //灞曞紑鏈睍寮€
                $('.nav-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            }else{
                //鏀剁缉宸插睍寮€
                $(this).next('ul').slideUp(300);
                $('.nav-item.nav-show').removeClass('nav-show');
            }
        }
    });
    //nav-mini鍒囨崲
    $('#mini').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            $('.nav-item.nav-show').removeClass('nav-show');
            $('.nav-item').children('ul').removeAttr('style');
            $('.nav').addClass('nav-mini');
        }else{
            $('.nav').removeClass('nav-mini');
        }
    });
});