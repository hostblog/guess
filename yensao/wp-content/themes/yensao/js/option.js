jQuery(document).ready(function() {

    // main slider

    if(jQuery('#main-slider').length){

        jQuery('#main-slider').flexslider({

            animation: "slide",

            animationLoop: true,

            slideshowSpeed: 5000,

            controlNav: false,

        });

    }

    // single product

    if(jQuery('#single-product').length){

        jQuery('#single-product-carousel').flexslider({

        animation: "slide",

        controlNav: false,

        animationLoop: false,

        slideshow: true,

        itemWidth: 100,

        itemMargin: 19,

        asNavFor: '#single-product'

        });



       jQuery('#single-product').flexslider({

        animation: "slide",

        controlNav: false,

        animationLoop: false,

        slideshow: true,

        sync: "#single-product-carousel"

        });

    }

    if(jQuery('#related-products').length){

        jQuery('#related-products').owlCarousel({

            loop:true,

            margin:10,

            nav:true,

            dots:false,

            margin:10,

            responsive:{

                600:{

                    items:4

                }

            }

        })

    }

    if(jQuery('#tin-hot').length){

        jQuery('#tin-hot').owlCarousel({

            loop:true,

            margin:10,

            nav:true,

            dots:false,

            margin:10,

            responsive:{

                900:{

                    items:1

                },

                600:{

                    items:1

                },

                300:{

                    items:1

                }

            }

        })

    }

    if(jQuery('#woo-khuyenmai').length){

        jQuery('#woo-khuyenmai').owlCarousel({

            loop:true,

            margin:10,

            nav:true,

            dots:false,

            margin:10,

            responsive:{

                900:{

                    items:1

                },

                600:{

                    items:2

                },

                300:{

                    items:1

                },

            }

        })

    }

    if(jQuery('.owl-carousel-tab').length){

        jQuery('.owl-carousel-tab').owlCarousel({

            loop:true,

            margin:10,

            nav:true,

            dots:false,

            margin:10,

            responsive:{

                900:{

                    items:5

                },

                600:{

                    items:3

                },

                300:{

                    items:1

                },

            }

        });

        jQuery('.owl-carousel-tab2').owlCarousel({

            loop:true,

            margin:10,

            nav:true,

            dots:false,

            margin:10,

            responsive:{

                900:{

                    items:5

                },

                600:{

                    items:3

                },

                300:{

                    items:1

                },

            }

        });

        jQuery('.owl-carousel-tab3').owlCarousel({

            loop:true,

            margin:10,

            nav:true,

            dots:false,

            margin:10,

            responsive:{

                900:{

                    items:5

                },

                600:{

                    items:3

                },

                300:{

                    items:1

                },

            }

        });

    }

    if(jQuery('#tin-tuc').length){

        jQuery('#tin-tuc').owlCarousel({

            loop:true,

            margin:10,

            nav:true,

            dots:false,

            margin:10,

            responsive:{

                900:{

                    items:3

                },

                600:{

                    items:2

                },

                300:{

                    items:1

                },

            }

        })

    }

});

jQuery(document).ready(function() {

    // jQuery('#menu-danh-muc-sp>li>.sub-menu').hide();

    jQuery('.main-menu>.btn-dropdown').click(function(e){

        var box = jQuery(this).closest('.main-menu');

        box.toggleClass('active').toggleClass('');

        box.find('#menu-danh-muc-sp').slideToggle('slow');

    });

   jQuery('#menu-danh-muc-sp>li.menu-item-has-children').append('<span></span>');

    jQuery('#menu-danh-muc-sp>li>span').click(function(e){

        var box = jQuery(this).closest('li.menu-item-has-children');

        box.toggleClass('active').toggleClass('');

        // box.find('>.sub-menu').slideToggle('slow');

    });

});

jQuery(document).ready(function() {

    jQuery('.navtabs>li>a').click(function(e){

        jQuery('.navtabs>li').removeClass('active');

        jQuery('.tab-pane').removeClass('active in hide');

         jQuery(this).closest('li').addClass('active');

        hf = jQuery(this).attr('href');

        jQuery(hf).addClass('active in');

        e.preventDefault();

    });

    jQuery('.tab-content>.def-hide').addClass('hide');



    /* mini cart */

    jQuery('.mini-cart-content .remove').click(function () {

        var box = jQuery(this).closest('li.mini_cart_item');

        mi = box.attr('data-total');

        var ni = jQuery('.cart-control .cart-number').text();

        mini = ni - mi;

        jQuery('.cart-control .cart-number').text(mini);

        setTimeout(function () {

            box.css('display','none');

        }, 1500);

        if(mini == 0){

            setTimeout(function () {

                window.location.reload();

            }, 2000);

        }

    });

    jQuery('body.mobile .cart-control').click(function (e) {

        jQuery('.mini-cart-content').toggleClass('active').toggleClass('');

        e.preventDefault();

    });

});