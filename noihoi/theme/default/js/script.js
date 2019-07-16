// JavaScript Document
$(document).ready(function() {

    /*var $window = $(window);
    var scrollTime = 0.8;
    var scrollDistance = 270;

    $window.on("mousewheel DOMMouseScroll", function(event){

        event.preventDefault();

        var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
            ease: Power1.easeOut,
            overwrite: 5
        });

    });*/

    var owl = $("#owl-demo");

    owl.owlCarousel({
        navigation: true,
        singleItem: true,
        autoPlay: true,
        transitionStyle: "fade"
    });

    var owl_footer = $("#owl-footer");

    owl_footer.owlCarousel({
        items: 1,
        loop: true,
        autoPlay: true,

        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [991, 1],
        itemsTablet: [769, 1],
        itemsTablet: [641, 1],
        itemsTablet: [640, 1],
        itemsMobile: [320, 1],
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        rewindNav: true,
        scrollPerPage: true,
        slideSpeed: 1500,
        pagination: true,
        paginationNumbers: false,
    });

    var owl_news = $("#owl-news-home");

    owl_news.owlCarousel({
        navigation: false,
        singleItem: true,
        autoPlay: true,
        transitionStyle: "fade"
    });

    //Select Transtion Type
    $("#transitionType").change(function() {
        var newValue = $(this).val();

        //TransitionTypes is owlCarousel inner method.
        owl.data("owlCarousel").transitionTypes(newValue);

        //After change type go to next slide
        owl.trigger("owl.next");
    });


});

$(".dropdown-menu li a").click(function() {
    $(this).parents(".dropdown").find('.btn').html('<img src="img/lorem.png" alt="lorem">' + $(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');

});

$(document).ready(function() {

    $(".tab_content").hide();
    $(".tab_content:first").show();

    $("ul.tabs-pro li").click(function() {
        $("ul.tabs-pro li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });
});

function ShowAdDiv() {
    var objAdDivRight = document.getElementById("divAdvRight");
    var objAdDivLeft = document.getElementById("divAdvLeft");

    if (document.body.clientWidth < 1200) {
        objAdDivRight.style.display = "none";
        objAdDivLeft.style.display = "none";
    } else {
        objAdDivRight.style.display = "block";
        objAdDivLeft.style.display = "block";
        FloatTopDiv();
    }
}

function FloatTopDiv() {
    startLX = ((document.body.clientWidth - MainContentW) / 2) - LeftBannerW - LeftAdjust, startLY = TopAdjust + 80;
    startRX = ((document.body.clientWidth - MainContentW) / 2) + MainContentW + RightAdjust, startRY = TopAdjust + 80;
    var d = document;

    function ml(id) {
        var el = d.getElementById ? d.getElementById(id) : d.all ? d.all[id] : d.layers[id];
        el.sP = function(x, y) {
            this.style.left = x + 'px';
            this.style.top = y + 'px';
        };
        el.x = startRX;
        el.y = startRY;
        return el;
    }

    function m2(id) {
        var e2 = d.getElementById ? d.getElementById(id) : d.all ? d.all[id] : d.layers[id];
        e2.sP = function(x, y) {
            this.style.left = x + 'px';
            this.style.top = y + 'px';
        };
        e2.x = startLX;
        e2.y = startLY;
        return e2;
    }
    window.stayTopLeft = function() {
        if (document.documentElement && document.documentElement.scrollTop)
            var pY = document.documentElement.scrollTop;
        else if (document.body)
            var pY = document.body.scrollTop;
        if (document.body.scrollTop > 30) {
            startLY = 3;
            startRY = 3;
        } else {
            startLY = TopAdjust;
            startRY = TopAdjust;
        };
        ftlObj.y += (pY + startRY - ftlObj.y) / 16;
        ftlObj.sP(ftlObj.x, ftlObj.y);
        ftlObj2.y += (pY + startLY - ftlObj2.y) / 16;
        ftlObj2.sP(ftlObj2.x, ftlObj2.y);
        setTimeout("stayTopLeft()", 1);
    }
    ftlObj = ml("divAdvRight");
    ftlObj2 = m2("divAdvLeft");
    stayTopLeft();
}

function toggle_bb() {
    $(".bb_open").css("display") == "none" ? ($(".bb_open").show(), $(".bb_close").hide(), $(".BottomLayer").toggle()) : $(".bb_close").css("display") == "none" && ($(".bb_open").hide(), $(".bb_close").show(), $(".BottomLayer").toggle())
}

// code new
$(document).ready(function() {
    // scoll to top
    $('.to-top').click(function() {
        $("html,body").animate({
            scrollTop: 0
                }, 600);
            });
        $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.to-top:hidden').stop(true, true).fadeIn();
        } else {
            $('.to-top').stop(true, true).fadeOut();
        }
    });

    //other
    $(".view-cart a span").html("Xem giỏ hàng");
    $(".col_phone_2 a").html("Thêm vào giỏ hàng");

    // ==== CONTACT ====
    $("#ctl26_ucLoadControl_ctl00_txtname").attr("Placeholder", 'Họ và tên *');
    $("#ctl26_ucLoadControl_ctl00_txtdiachi").attr("Placeholder", 'Địa chỉ *');
    $("#ctl26_ucLoadControl_ctl00_txtDienthoai").attr("Placeholder", 'Số điện thoại *');
    $("#ctl26_ucLoadControl_ctl00_txtDienthoaicodinh").attr("Placeholder", 'Số điện thoại cố định');
    $("#ctl26_ucLoadControl_ctl00_txtmail").attr("Placeholder", 'Email');
    $("#ctl26_ucLoadControl_ctl00_txtnoidung").attr("Placeholder", 'Nội dung');
    $("#ctl26_ucLoadControl_ctl00_txtCaptcha").attr("Placeholder", 'Capcha');
    $("#ctl26_ucLoadControl_ctl00_txtFax").attr("Placeholder", 'Fax');

    //buy
    $("#ctl26_ucLoadControl_ctl00_txtEmail").attr("Placeholder", 'Email*');
    $("#ctl26_ucLoadControl_ctl00_txtPhone").attr("Placeholder", 'Số di động*');
    $("#ctl26_ucLoadControl_ctl00_txtPhoneCodinh").attr("Placeholder", 'Số cố định');
    $("#ctl26_ucLoadControl_ctl00_txtAddress").attr("Placeholder", 'Địa chỉ');
    $("#ctl26_ucLoadControl_ctl00_txtContent").attr("Placeholder", 'Nội dung');

    //menu respon
    $(".menu-mobile .fa-bars").click(function() {
        $(".btn-close").addClass("menu-bg");
        $(".menu-chinh").toggleClass("menu-chinh-1");
        });
        $(".btn-close").click(function() {
            $(this).removeClass("menu-bg");
            $(".menu-chinh").removeClass("menu-chinh-1");
    });
    if ($(window).width() < 1025) {
        $("#nav-main-menu .itop > .sub-menu").hide();
        $(".itop > a").after("<i class='fa fa-plus'></i>");
        $("#nav-main-menu .fa-plus").click(function() {
            $(this).toggleClass("fa-plus");
            $(this).toggleClass("fa-minus");
            $(this).next('.sub-menu').animate({
                height: "toggle"
            }, 500);
        });
        if ($(window).width() < 1025) {
            $(".menu-left-view .itop > .wrap-sub-menu").hide();
            $(".itop > a").after("<i class='fa fa-plus'></i>");
            $(".menu-left-view .fa-plus").click(function() {
                $(this).toggleClass("fa-plus");
                $(this).toggleClass("fa-minus");
                $(this).next('.wrap-sub-menu').animate({
                    height: "toggle"
                }, 500);
            });
            $(".content-left .box-menu-left").appendTo(".menu-chinh");
        };
    };

    $(".cat-title-detail a").html($("#ctl26_ucLoadControl_ctl00_pnlNewsOld .ul-orther-news li a:eq(1)").html());
    $(".cat-title-detail a").attr('href',$("#ctl26_ucLoadControl_ctl00_pnlNewsOld .ul-orther-news li a:eq(1)").attr('href'));
});
