$(function(){

  // slider in header
  $('.slider__inner').slick({
    infinite: true,
    autoplay: true,
    arrows: false,
  });

  // slider in header
  $('.reviews__slider').slick({
    infinite: true,
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.png"></button>',
  });

  // rating stars 
  $(".rateYo").rateYo({
    rating: 4.5,
    readOnly: true,
    starWidth: "15px",
  });

  // burger menu
  $('.header__menu-btn').on('click', function(){
    $('.menu > ul').toggle(400, "swing");
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