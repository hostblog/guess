// jQuery(document).ready(function ($) {
//     // header sticky
//     var didScroll;
//     var lastScrollTop = 0;
//     var navbarHeight = jQuery('header').outerHeight();

//     jQuery(window).scroll(function (event) {
//         didScroll = true;
//     });

//     setInterval(function () {
//         if (didScroll) {
//             smartconstruction_hasScrolled();
//             didScroll = false;
//         }
//     }, 50);
//     var headerHeight = jQuery('.header').outerHeight();

//     function smartconstruction_hasScrolled() {
//         var st = jQuery(this).scrollTop();
//         if (st > headerHeight) {
//             jQuery('.header-sticky').addClass('show');
//         }
//         if (Math.abs(lastScrollTop - st) <= 50)
//             return;
//         if (st > lastScrollTop || st < headerHeight) {
//             jQuery('.header-sticky').removeClass('on-top');
//         } else {
//             jQuery('.header-sticky').addClass('on-top');
//         }
//         lastScrollTop = st;
//     }
// });

//hide navbar on mobile after click
jQuery(document).ready(function ($) {
    let eles = document.querySelectorAll('.nav-item.nav-link');
    for (let ele of eles) {
        ele.addEventListener('click', function () {
            $('#navbarNavAltMarkup').removeClass('show');
            $('.js-show-navbar').removeClass('invisible');
        });
    }
})
//end of hide navbar on mobile after click


// smooth scroll
jQuery(document).ready(function ($) {
    // Select all links with hashes
    jQuery('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    jQuery('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = jQuery(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
});