//tạo script youtube api
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//khởi tạo play video 
var player;
var playerReady = false;
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    // console.log('iframe ready');
    player = new YT.Player('player', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    //event.target.playVideo();
    playerReady = true;
    //console.log('youtube api video ready');
}
//end of khởi tạo play video
//play video ở giới thiệu 
jQuery(document).ready(function ($) {
    jQuery('.js-video-btn').on('click', function () {
        //console.log('.video-btn clicked 1');
        //console.log(playerReady);
        if (!playerReady) {
            return;
        }
        let playerState = player.getPlayerState();
        if (playerState != YT.PlayerState.PLAYING) {
            jQuery('.js-image-video').addClass('active');
            player.unMute();
            player.playVideo();
        }
    });
    jQuery('.js-img').on('click', function () {
        // console.log('.video clicked');
        player.stopVideo();
        jQuery('.js-image-video').removeClass('active');
    });
})
// end of play video ở giới thiệu

//pause video khi người dùng scroll sang chỗ khác
/*!
 * Determine if an element is in the viewport
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();

    return !(
        distance.top > window.innerHeight || //chưa scroll đến element
        distance.bottom < 0 //scroll quá element
    );
};

jQuery(document).ready(function ($) {
    // header sticky
    let didScroll;
    let shouldPlayAgain = false;

    jQuery(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            youtube_hasScrolled();
            didScroll = false;
        }
    }, 500);

    function youtube_hasScrolled() {
        if (!playerReady) {
            return;
        }
        let ele = document.getElementById("player");
        let playerState = player.getPlayerState();
        if (!(playerState == YT.PlayerState.PLAYING || playerState == YT.PlayerState.PAUSED)) {
            //chỉ xét nếu đang playing hoặc đã pause trước đó
            return;
        }
        if (!isInViewport(ele) && playerState == YT.PlayerState.PLAYING) {
            //nếu đang play mà ra khỏi view port thì dừng
            player.pauseVideo();
            shouldPlayAgain = true;
        }

        if (isInViewport(ele) && shouldPlayAgain) {
            //chạy tiếp khi quay trở lại viewport
            player.playVideo();
            shouldPlayAgain = false;
        }
    }
});
//end of pause video

//thay đổi icon bật tắt navbar
function onPlayerStateChange() {
    let playerState = player.getPlayerState();

    //thay đổi icon bật tắt navbar. dành riêng cho trang heritage resort
    let headerEle = document.querySelector('#header .navbar-toggler-icon');
    if (playerState == YT.PlayerState.PLAYING) {
        headerEle.classList.add('youtube-playing');
    } else {
        headerEle.classList.remove('youtube-playing')
    }
    //che giao diện video clip khi pause
    let videoCoverEle = document.querySelector('.group-youtube .video-cover');
    if (playerState == YT.PlayerState.PAUSED) {
        videoCoverEle.classList.add('youtube-paused');
    } else {
        videoCoverEle.classList.remove('youtube-paused')
    }

    manageVideoController();
}

function manageVideoController() {
    //xác định icon nào ẩn hiện
    playerState = player.getPlayerState();
    if (playerState == YT.PlayerState.PLAYING) {
        document.querySelector('.video-controller .pause').classList.remove('u-display-none');
        document.querySelector('.video-controller .play').classList.add('u-display-none');
    } else {
        document.querySelector('.video-controller .pause').classList.add('u-display-none');
        document.querySelector('.video-controller .play').classList.remove('u-display-none');
    }
    if (player.isMuted()) {
        document.querySelector('.video-controller .muted').classList.remove('u-display-none');
        document.querySelector('.video-controller .sound-on').classList.add('u-display-none');
    } else {
        document.querySelector('.video-controller .muted').classList.add('u-display-none');
        document.querySelector('.video-controller .sound-on').classList.remove('u-display-none');
    }
}

jQuery(document).ready(function ($) {
    //khi bấm các nút điều khiển video trên video controller
    jQuery('.video-controller .play').on('click', function () {
        if (!playerReady) {
            return;
        }
        let playerState = player.getPlayerState();
        if (playerState != YT.PlayerState.PLAYING) {
            jQuery('.js-image-video').addClass('active');
            player.playVideo();
        }
    });
    jQuery('.video-controller .pause').on('click', function () {
        if (!playerReady) {
            return;
        }
        let playerState = player.getPlayerState();
        if (playerState != YT.PlayerState.PAUSED) {
            player.pauseVideo();
        }
    });
    jQuery('.video-controller .muted').on('click', function () {
        player.unMute();
        document.querySelector('.video-controller .muted').classList.add('u-display-none');
        document.querySelector('.video-controller .sound-on').classList.remove('u-display-none');
    });
    jQuery('.video-controller .sound-on').on('click', function () {
        player.mute();
        document.querySelector('.video-controller .muted').classList.remove('u-display-none');
        document.querySelector('.video-controller .sound-on').classList.add('u-display-none');
    });
})
//end of thay đổi icon bật tắt navbar