
$(document).ready(function() {
        $('a[href*=#]').bind('click', function(e) {
                e.preventDefault(); // prevent hard jump, the default behavior

                var target = $(this).attr("href"); // Set the target as variable

                // perform animated scrolling by getting top-position of target-element and set it as scroll target
                $('html, body').stop().animate({
                        scrollTop: $(target).offset().top
                }, 600, function() {
                        location.hash = target; //attach the hash (#jumptarget) to the pageurl
                });

                return false;
        });
});

$(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
    
        // Assign active class to nav links while scolling
        $('.page-section').each(function(i) {
                if ($(this).position().top <= scrollDistance) {
                        $('.b-header__menu-navbar a.active').removeClass('active');
                        $('.b-header__menu-navbar a').eq(i).addClass('active');
                }
        });
}).scroll();


$(document).ready(function(){    

    $('#tvcSlider').owlCarousel({
        items: 1,
        loop:true,
        margin:0,
        nav:true,
        navText: false,
        autoplay:false,
        dots: false 
    });

    $('#gallerySlider').owlCarousel({
        items: 1,
        loop:true,
        margin:0,
        nav:true,
        navText: false,
        autoplay:true, 
        dots: false 
    });
    $('#blogSlider').owlCarousel({
        items: 1,
        loop:true,
        margin:0,
        nav:true,
        navText: false,
        autoplay:true, 
        dots: false 
    });
    $('#blogslider').owlCarousel({
        loop:false,
        margin:30, 
        nav:true,
        dots:true, 
        responsiveClass: true,
        autoplay:false,
        autoplayTimeout: 5000,
        navText:false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
      }); 

    $(document).ready(function(){
        $("button.btn-tai").click(function(){
          $(".taibaogia").toggleClass("is-active");
        });
      });
}); 