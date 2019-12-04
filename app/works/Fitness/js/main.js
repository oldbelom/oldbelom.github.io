$(function(){

    // datepicker
    $('select').styler();

    $('[data-toggle="datepicker"]').datepicker({
        language: 'ru-RU'        
    });

    // burger menu
    $('.menu__btn').on('click', function(){
        $('.menu > ul').slideToggle();
    });

    // scroll to top button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1000) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
        
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
        
});