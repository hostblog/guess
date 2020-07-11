
$('nav#menu').mmenu();

var h=$('#slider').height();
$('.scrollmn').css({'height':h});
$(".hv-mn").hover(
  function () {
    $(this).parents('#secondpane').addClass('');
  }, 
  function () {
    $(this).parents('#secondpane').removeClass('');
  }
  );

//////end menu

///// fix_header
$getheight=$('.header').height();
$('.get-header').css({'height':$getheight});
$(window).scroll(function(event) {
  if($(window).scrollTop() > $getheight ){
    $('.bg_menu').addClass('fix_header');
  }else{
    $('.bg_menu').removeClass('fix_header');
  }
});
///// end fix_header

///facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.6&appId=976604885739311";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
///end facebook

///// search
function doEnter(evt){
  var key;
  if(evt.keyCode == 13 || evt.which == 13){
    onSearch(evt);
  }
}
function onSearch(evt) {
  var keyword = document.getElementById("keyword").value;
  if(keyword=='' || keyword=='Nhập từ khoá...')
    alert('Bạn chưa nhập từ khóa tìm kiếm!');
  else{
    location.href = "tim-kiem.htm&keywords="+keyword;
    loadPage(document.location);            
  }
}
$('body').on('click','.check_srch',function(){
 if($('.search').is(':hidden')){
  $('.search').css({'display':'block'});
}else{
  $('.search').css({'display':'none'});
}
});
/////end search

// lozad
lozad('.lozad', {
  load: function(el) {
    el.src = el.dataset.src;
    el.onload = function() {
     el.classList.add('fade')
   }
 }}).observe()
// /// end lozad

 // fancybox
// jQuery(".fancybox").fancybox();
// jQuery(".various3").fancybox({
//   'width'             : '70%',
//   'height'            : '60%',
//   'autoScale'         : false,
//   'transitionIn'      : 'none',
//   'transitionOut'     : 'none',
//   'type'              : 'iframe'
// });  
      
// // end fancybox

// product
$('html,body').on('click','.change-prd',function(){
  $(this).parent().find('a').removeClass('menulist__act');
  $(this).addClass('menulist__act');
  var idl=$(this).data('idl');
  var idc=$(this).data('idc');
  var tkdl=$(this).data('tkdl');
  var tkdc=$(this).data('tkdc');
  var el= $(this);
  $.ajax({
    url:'ajax/locsp.php',
    type:'POST',
    data:{idl:idl,idc:idc,tkdl:tkdl,tkdc:tkdl},
    success:function(data){
      el.parents('.product').find('.prd-bot').html(data);
    },  
  });
});

// end product

// /// scroll to top

$('body').append('<div id="top" ></div>');
$(window).scroll(function() {
  if($(window).scrollTop() > 100) {
    $('#top').fadeIn();
  } else {
    $('#top').fadeOut();
  }
});
$('#top').click(function() {
 $('html, body').animate({scrollTop:0},500);
});
// /// end scroll to top


// ////// slider-photobox
$('#grid').photobox('.getthumb', { thumbs:true, loop:false });
//////end slider-photobox

// //////slider-scrolltop
$(".scroller6").simplyScroll({orientation:'vertical',customClass:'vert',autoMode:'loop'});
// //////slider-owl

// //////end slider-owl



// cart
$('.add_to_basket2').click(function(){
  $id_prd= $(this).attr('value');
  if($('.show_box_cart').hasClass('hide_box')){
    $('.show_box_cart').removeClass('hide_box');
    $('.show_box_cart').addClass('show_box');
  }

  $.ajax({
    url:'ajax/ajax_giohang1.php',
    type:'POST',
    data:({id_prd:$id_prd,sl:1,types:'addcart'}),
    error:function(){
      alert('load loi!!');
    },
    before:function(){
          // img loadding
        },
        success:function(data){
         $('#add_item_cart').html(data);
       },
     });
});

$('.click_submit').click(function(){
  $('.success_submit').trigger('click');
});
//end cart

// video
$('.click_video').click(function(){
  var id=$(this).attr('data-id');
  $.ajax({
    url:'ajax/video1.php',
    data:'id='+id,
    type:'POST',
    async:true,
    success: function(res){
      $('.video__show').html(res)

    }
  });
  return false;
});

$('.showvideo').click(function(){
 if($('.full_video').hasClass('active_video')){
   $('.full_video').removeClass('active_video');
 }else{
   $('.full_video').addClass('active_video');
   var id=$(this).data('link');
   $.ajax({
    url:'ajax/video_show.php',
    type:'POST',
    data:{id:id},
    success:function(data){
      $('.full_video').html(data);
    },
  });
 }

});
$('html,body').on('click','.btn_hide', function(){
  if($('.full_video').hasClass('active_video')){
   $('.full_video').removeClass('active_video');
   $('.full_video').html();
   $(".full_video").empty();
 }
});

$('select[name="sltvd"]').change(function(){
  var id=$(this).val();
  $.ajax({
    url:'ajax/video1.php',
    data:'id='+id,
    type:'POST',
    async:true,
    success: function(res){
      $('.video__show').html(res)

    }
  });
  return false;
});

$('body').on('click','#add_like',function(){
      var idprd=$(this).data('id');
      $.ajax({
        url:'ajax/save_like.php',
        type:'POST',
        data:{idprd:idprd},
        success:function(data){
         if(data==1){
          alert("Đã thêm vào mục yêu thích!");
         }else{
          alert("Thêm lỗi!"); 
         }
        }
      });
  });


// tab

var cl__tab="tab>div";
    var cl__content="tab__content>div";
    var arr= new Array();
    var i=0;
    $('.'+cl__tab).each(function(){
      i++;
      arr.push(i);
    });
    $('.'+cl__tab+':nth-child(1)').addClass('act');
    $('.'+cl__content+':nth-child(1)').addClass('act-ct in');
    $('.'+cl__tab).click(function(){
      $('.'+cl__tab).removeClass('act');
      $('.'+cl__content).removeClass('act-ct in');
      $(this).addClass('act');
      for(var j=1;j<=arr.length;j++){
        if($('.'+cl__tab+':nth-child('+j+')').hasClass('act')){
          var cur=j;
        }
      }
      $('.'+cl__content+':nth-child('+cur+')').addClass('act-ct in');
    });
// end tab

// AnimOnScroll
// new AnimOnScroll( document.getElementById( 'grid' ), {
//   minDuration : 0.4,
//   maxDuration : 0.7,
//   viewportFactor : 0.2
// } );

// slider slick
// $('.slicksp').slick({
//   infinite: true,
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   arrows: true,
//   dots:false,
//   autoplay:true,
//   vertical:true,
//   lazyLoad: 'ondemand'
// });

$('.slickcenter').slick({
  centerMode: true,
  centerPadding: '20%',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 690,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1
      }
    }
  ]
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,centerPadding: '1px',
    asNavFor: '.slider-nav'
  });
   $('.slider-nav').slick({
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    asNavFor: '.slider-for',centerPadding: '1px',
    autoplay: true,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
// wow
// new WOW().init();

// slider owl
$(".owl-1").owlCarousel({
  slideSpeed : 300,
  paginationSpeed : 400,
  lazyLoad: true,
  loop:true,
  singleItem:true,
  autoplay:true,
  dots:false,
  nav: true,
  items:1,
  navText: ["<img src='images/pp.png'>","<img src='images/nn.png'>"],
});

$(".owl-cn").owlCarousel({
  slideSpeed : 300,
  paginationSpeed : 400,
  lazyLoad: true,
  loop:true,
  singleItem:true,
  autoplay:true,
  dots:false,
  nav: true,
  items:2,
  navText: ["<img src='images/pp.png'>","<img src='images/nn.png'>"],
});

$(".owl-2").owlCarousel({
  slideSpeed : 300,
  paginationSpeed : 400,
  lazyLoad: true,
  loop:true,
  singleItem:true,
  autoplay:true,
  dots:false,
  nav: true,
  navText: ["<img src='images/pp.png'>","<img src='images/nn.png'>"],
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      nav:true
    },
    600:{
      items:1,
      nav:true
    },
    1000:{
      items:2,
      nav:true,
      loop:true
    }
  }
});
$(".owl-3").owlCarousel({
  slideSpeed : 300,
  paginationSpeed : 400,
  lazyLoad: true,
  loop:true,
  singleItem:true,
  autoplay:true,
  dots:false,
  nav: true,
  navText: ["<img src='images/pp1.png'>","<img src='images/nn1.png'>"],
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      nav:true
    },
    600:{
      items:2,
      nav:true
    },
    1000:{
      items:3,
      nav:true,
      loop:true
    }
  }
});
$(".owl-4").owlCarousel({
  slideSpeed : 300,
  lazyLoad: true,
  paginationSpeed : 400,
  loop:true,
  singleItem:true,
  autoplay:true,
  dots:false,
  nav: true,
  navText: ["<img src='images/pp1.png'>","<img src='images/nn1.png'>"],
  responsiveClass:true,
  responsive:{
    0:{
      items:2,
      nav:true
    },
    600:{
      items:3,
      nav:true
    },
    1000:{
      items:4,
      nav:true,
      loop:true
    }
  }
});

$(".owl-5").owlCarousel({
  slideSpeed : 300,
  lazyLoad: true,
  paginationSpeed : 400,
  loop:true,
  singleItem:true,
  autoplay:true,
  dots:false,
  nav: true,
  navText: ["<img src='images/pp1.png'>","<img src='images/nn1.png'>"],
  responsiveClass:true,
  responsive:{
    0:{
      items:2,
      nav:true
    },
    600:{
      items:3,
      nav:true
    },
    1000:{
      items:5,
      nav:true,
      loop:true
    }
  }
});



$(".owl-video").owlCarousel({
  slideSpeed : 300,
  lazyLoad: true,
  paginationSpeed : 400,
  loop:false,
  singleItem:true,
  autoplay:true,
  dots:false,
  nav: true,
  navText: ["<img src='images/pp1.png'>","<img src='images/nn1.png'>"],
  responsiveClass:true,
  responsive:{
    0:{
      items:3,
      nav:true
    },
    600:{
      items:3,
      nav:true
    },
    1000:{
      items:3,
      nav:true,
      loop:false
    }
  }
});


$(".owl-dt").owlCarousel({
  slideSpeed : 300,
  lazyLoad: true,
  paginationSpeed : 400,
  loop:true,
  singleItem:true,
  autoplay:true,
  dots:false,
  nav: true,
  navText: ["<img src='images/pp1.png'>","<img src='images/nn1.png'>"],
  responsiveClass:true,
  responsive:{
    0:{
      items:3,
      nav:true
    },
    600:{
      items:3,
      nav:true
    },
    1000:{
      items:3,
      nav:true,
      loop:true
    }
  }
});

