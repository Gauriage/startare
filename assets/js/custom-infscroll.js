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
    if ($(this).scrollTop() > 400) {
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

// ______________ ISOTOPE & INFINITE SCROLL

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

   $('[data-toggle=infinitescroll]').each(function() {
   var target = $(this).data('target') || '#posts';

  $container.infinitescroll({
      navSelector: '.paging',
      nextSelector: $(this).data('next-selector'),
      itemSelector: '.itemContainer ul li',
      maxPage: parseInt($(this).data('max-page')),
      loading: {
        finishedMsg: 'ALL POSTS LOADED',
        img: 'https://dl.dropboxusercontent.com/u/32455218/loader.png',
        msg: null,
        msgText: '',
      },
      pixelsFromNavToBottom: 40,
     behavior    : "twitter"
    },

      
       // call Isotope as a callback

        function( newElements ) {

           
     $(newElements).imagesLoaded(function(){
            $container.isotope('appended', $(newElements));

          $('.social-likes').socialLikes({
        counters: true,
        zeroes: true,
        forceUpdate: true
        });
      

            $container.isotope('layout');
        });



      }
      );
      
 });
      
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