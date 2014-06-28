(function($){ 
  "use strict";

// ______________ RETINA

if(window.devicePixelRatio >= 1.2){
    var images = document.getElementsByTagName('img');
    for(var i=0;i < images.length;i++){
        var attr = images[i].getAttribute('data-2x');
        if(attr){
            images[i].src = attr;
        }
    }
}

// ______________ FIXED MENU AT SCROLL

jQuery("document").ready(function($){
  
  var nav = $('.main-nav');
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      nav.addClass("f-nav").fadeIn('fast');
    } else {
      nav.removeClass("f-nav").fadeIn('fast');
    }
  });

}); 

// ______________ SOCIAL LIKES

$('.social-likes').socialLikes({
    counters: true,
    zeroes: true,
    forceUpdate: true
});
  

// ______________ MOBILE MENU

 $(function(){
        $('nav.mobile-menu').slicknav();
    });

// ______________ ISOTOPE

var $container = $('.itemContainer ul');

if (conditionizr.safari && conditionizr.windows) {
$container.isotope({
  itemSelector: '.itemContainer ul li',
  layoutMode: 'masonry',
  masonry: {gutter: 15}
});
} else {
$container.isotope({
  itemSelector: '.itemContainer ul li',
  layoutMode: 'masonry'
}); 
}

$container.imagesLoaded( function() {
  $container.isotope('layout');
});


// ______________ BACK TO TOP BUTTON

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#back-to-top').fadeIn('slow');
    } else {
      $('#back-to-top').fadeOut('slow');
    }
  });
$('#back-to-top').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });


// ______________ SUPERFISH MENU

  var $j = jQuery.noConflict();
     $j(document).ready(function(){
        $j("ul.sf-menu").superfish({
            animation:   {opacity:'show',height:'show'},   // slide-down effect without fade-in
            delay:     300,              // 1.2 second delay on mouseout
            speed:       'fast'
        });
    });

})(jQuery);
