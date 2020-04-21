jQuery(document).ready(function () {
    //home desktop

    var mySwiper_song_sinh_thai = new Swiper('.home-desktop .row-gia-tri-song .box-slider .swiper-container', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 1200,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.home-desktop .row-gia-tri-song .box-slider .swiper-info .swiper-next',
            prevEl: '.home-desktop .row-gia-tri-song .box-slider .swiper-info .swiper-prev',
        },
        on: {
            slideChangeTransitionEnd: function () {
                var current = jQuery('.home-desktop .row-gia-tri-song .swiper-container .swiper-slide-active').data("swiper-slide-index") + 1;
                if (current < 10) {
                    jQuery(".home-desktop .row-gia-tri-song .slide-number .current").text('0' + current);
                } else {
                    jQuery(".home-desktop .row-gia-tri-song .slide-number .current").text(current);
                }
            },
        }
    });

    jQuery('.home-desktop .row-gia-tri-song').each(function () {
        var total_song_sinh_thai = mySwiper_song_sinh_thai.slides.length - 2;
        if (total_song_sinh_thai < 10) {
            total_song_sinh_thai = '0' + total_song_sinh_thai;
        }
        jQuery(".home-desktop .row-gia-tri-song .current").text("01");
        jQuery(".home-desktop .row-gia-tri-song .total").text(total_song_sinh_thai);
    })



    jQuery('.home-desktop .row-phan-khu-2 .box-slider .slider-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        appendArrows: '.home-desktop .row-phan-khu-2 .box-slider .slick-navigation',
        autoplay: true,
        autoplaySpeed: 3500,
    });
    jQuery('.home-desktop .row-phan-khu-2 .box-slider .slider-content').find('.slick-active').eq(1).addClass('slide-center-active');
    jQuery('.home-desktop .row-phan-khu-2 .box-slider .slider-content').on('afterChange', function (slick, currentSlide) {
        jQuery(this).find('.slick-slide').removeClass('slide-center-active');
        jQuery(this).find('.slick-active').eq(1).addClass('slide-center-active');
    });
    jQuery('.home-desktop .row-noi-that .box-slider .slider-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3500,
        appendArrows: '.home-desktop .row-noi-that .slick-navigation',
    });

    jQuery('.home-desktop .row-noi-that-hien-dai .box-slider .slider-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3500,
        appendArrows: '.home-desktop .row-noi-that-hien-dai .slick-navigation',
    });

    //home mobile
    jQuery('.home-mobile .row-gia-tri-song .box-slider .slider-content').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var current = (currentSlide ? currentSlide : 0) + 1;
        var current = current < 10 ? '0' + current : current;
        var total = slick.slideCount < 10 ? '0' + slick.slideCount : slick.slideCount;
        jQuery('.home-mobile .row-gia-tri-song .box-slider .slick-info .slide-number .current').text(current);
        jQuery('.home-mobile .row-gia-tri-song .box-slider .slick-info .slide-number .total').text(total);
    });
    jQuery('.home-mobile .row-gia-tri-song .box-slider .slider-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 3500,
        nextArrow: '.home-mobile .row-gia-tri-song .box-slider .slick-next',
        prevArrow: '.home-mobile .row-gia-tri-song .box-slider .slick-prev',
    });
    jQuery('.home-mobile .row-phan-khu-2 .box-slider .slider-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        appendArrows: '.home-mobile .row-phan-khu-2 .box-slider .slick-navigation',
        autoplay: true,
        autoplaySpeed: 3500,
        centerMode: false,
    });
    jQuery('.home-mobile .row-noi-that .box-slider .slider-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3500,
        appendArrows: '.home-mobile .row-noi-that .slick-navigation',
    });

    jQuery('.home-mobile .row-noi-that-hien-dai .box-slider .slider-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3500,
        appendArrows: '.home-mobile .row-noi-that-hien-dai .slick-navigation',
    });

    jQuery('.popup-tinh-hoa-kien-truc .popup-data').each(function () {
        jQuery(this).find('.box-slider .slider-content').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3500,
            appendArrows: jQuery(this).find('.slick-navigation'),
        });
    });

    jQuery('.popup-phan-khu-2 .box-slider-big .slider-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
        asNavFor: '.popup-phan-khu-2 .box-slider-small .slider-content',
    });

    jQuery('.popup-phan-khu-2 .box-slider-small .slider-content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        asNavFor: '.popup-phan-khu-2 .box-slider-big .slider-content',
        focusOnSelect: true,
    });

    jQuery('.popup-video-noi-that-indochine .close').on('click', function () {
        player_indochine.stopVideo();
    })

});

var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player_indochine;
var player_hien_dai;

var width1 = 1920;
var height1 = 1080;
let ratio1 = width1/height1;
if (( window.innerWidth <= 800 ) || ( window.innerHeight <= 600 ) ) { 
    maxwidth1 = document.body.clientWidth;
} else {
    maxwidth1 = document.body.clientWidth * 0.8;
}
var maxheight1 = Math.round(maxwidth1 / ratio1);

// if the height is too big for the window, constrain it
if (height1 > maxheight1) {
    height1 = maxheight1;
    width1 = Math.round(height1 * ratio1);
}

var width2 = 1920;
var height2 = 1080;
let ratio2 = width2/height2;
if (( window.innerWidth <= 800 ) || ( window.innerHeight <= 600 ) ) { 
    maxwidth2 = document.body.clientWidth;
} else {
    maxwidth2 = document.body.clientWidth * 0.8;
}
var maxheight2 = Math.round(maxwidth2 / ratio2);

// if the height is too big for the window, constrain it
if (height2 > maxheight2) {
    height2 = maxheight2;
    width2 = Math.round(height2 * ratio2);
}

function onYouTubePlayerAPIReady() {
    player_indochine = new YT.Player('video_indochine', {
        events: {
            'onReady': onPlayerReady2,
            'onStateChange': onPlayerStateChange2,
        }
    });
    player_hien_dai = new YT.Player('video_hien_dai', {
        events: {
            'onReady': onPlayerReady3,
            'onStateChange': onPlayerStateChange3,
        }
    });
}

function onPlayerReady2(event) {
    jQuery('#videoindochine').on('click', function () {
        jQuery('.popup-video-noi-that-indochine').modal('show');
        player_indochine.playVideo();
        jQuery('.sunshine-modal.popup-video-noi-that-indochine .modal-content').css({'width': width1, 'height': height1});
    })
    jQuery('.popup-video').on('hidden.bs.modal', function (e) {
        event.target.stopVideo();
    })
}

function onPlayerStateChange2(event) {
    if (event.data == YT.PlayerState.ENDED) {
        jQuery('.popup-video-noi-that-indochine').addClass('ended');
        player_indochine.seekTo(0);
    } else if (event.data == YT.PlayerState.PAUSED) {
        jQuery('.popup-video-noi-that-indochine').addClass('paused');
    } else if (event.data == YT.PlayerState.PLAYING) {
        jQuery('.popup-video-noi-that-indochine').removeClass('ended');
        jQuery('.popup-video-noi-that-indochine').removeClass('paused');
    }
}
jQuery('.popup-video-noi-that-indochine .modal-body').on('click', function () {
    let playerState = player_indochine.getPlayerState();
    if (playerState == YT.PlayerState.ENDED) {
        player_indochine.seekTo(0);
    } else if (playerState == YT.PlayerState.PAUSED) {
        player_indochine.playVideo();
    }
})

function onPlayerReady3(event) {
    jQuery('#videonoithathiendai').on('click', function () {
        jQuery('.popup-video-noi-that-hien-dai').modal('show');
        player_hien_dai.playVideo();
        jQuery('.sunshine-modal.popup-video-noi-that-hien-dai .modal-content').css({'width': width2, 'height': height2});
    })
    jQuery('.popup-video').on('hidden.bs.modal', function (e) {
        event.target.stopVideo();
    })
}

function onPlayerStateChange3(event) {
    if (event.data == YT.PlayerState.ENDED) {
        jQuery('.popup-video-noi-that-hien-dai').addClass('ended');
        player_hien_dai.seekTo(0);
    } else if (event.data == YT.PlayerState.PAUSED) {
        jQuery('.popup-video-noi-that-hien-dai').addClass('paused');
    } else if (event.data == YT.PlayerState.PLAYING) {
        jQuery('.popup-video-noi-that-hien-dai').removeClass('ended');
        jQuery('.popup-video-noi-that-hien-dai').removeClass('paused');
    }
}
jQuery('.popup-video-noi-that-hien-dai .modal-body').on('click', function () {
    let playerState = player_hien_dai.getPlayerState();
    if (playerState == YT.PlayerState.ENDED) {
        player_hien_dai.seekTo(0);
    } else if (playerState == YT.PlayerState.PAUSED) {
        player_hien_dai.playVideo();
    }
})