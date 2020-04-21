jQuery(document).ready(function(){
    jQuery('.row_biet_thu_40 .box-slide-anh').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3500,
         responsive: [
            {
                breakpoint: 767,
                    settings: {
                        prevArrow: jQuery('.row_biet_thu_40 .slick-prev'),
                        nextArrow: jQuery('.row_biet_thu_40 .slick-next'),   
                    },
            },
        ]
    });
    jQuery('.row-quyen-dichvu .box-slide-anh').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3500,  
        prevArrow: jQuery('.row-quyen-dichvu .slick-prev'),
        nextArrow: jQuery('.row-quyen-dichvu .slick-next'), 
        responsive: [
            {
                breakpoint: 767,
                    settings: {
                          slidesToShow: 1,
                    },
            },
        ]
    });
    jQuery('.row-quyen-dichvu-mobile .box-slide-anh1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3500, 
        prevArrow: jQuery('.row-quyen-dichvu-mobile .slick-prev'),
        nextArrow: jQuery('.row-quyen-dichvu-mobile .slick-next'), 
    });

    jQuery('.row-tintuc .slide-tintuc').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,  
        responsive: [
            {
                 breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                   {

            breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});