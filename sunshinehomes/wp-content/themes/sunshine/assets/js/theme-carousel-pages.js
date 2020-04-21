jQuery(document).ready(function () {
    jQuery('.page-tin-tuc .box-slider-list .slider-container').slick({
        autoplay: false,
        vertical: true,
        // verticalSwiping: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        // initialSlide: numberLength - numberSlider2,
        // draggable: false,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            // {
            //     breakpoint: 1649,
            //     settings: {
            //         slidesToShow: 4,
            //         initialSlide: number-4,
            //     }
            // },
        ]
    });
    jQuery('.page-tin-tuc .box-slider-full .slider-container').on('init', function (event, slick, direction) {
        jQuery('.page-tin-tuc .box-slider-list .slider-container').slick("slickGoTo", 1);
    });
    jQuery('.page-tin-tuc .box-slider-full .slider-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: '.box-slider-full',
        nextArrow: '<button type="button" class="o-slider-btn-next l-slider-btn-next"></button>',
        prevArrow: '<button type="button" class="o-slider-btn-prev l-slider-btn-prev"></button>',
        // draggable: false,
        infinite: true,
        autoplay: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
        ]
    });
    // var numberLength = jQuery('.page-tin-tuc .box-slider-list .slider-container > .post').length;
    // var numberSlider2 = 4;

    // On slide slider1
    // jQuery('.page-tin-tuc .box-slider-full .slider-container').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //     var currentSlide = jQuery(this).slick('slickCurrentSlide');
    //     if (currentSlide < numberLength - numberSlider2 - 1) {
    //         currentSlide = currentSlide + numberLength
    //     }
    //     console.log(currentSlide);
    //     jQuery('.page-tin-tuc .box-slider-list .slider-container').slick("slickGoTo", currentSlide - numberSlider2 + 1);
    // });

    jQuery('.page-tin-tuc .box-slider-full .slider-container').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        jQuery('.page-tin-tuc .box-slider-list .slider-container').slick("slickGoTo", nextSlide + 1);
    });
});