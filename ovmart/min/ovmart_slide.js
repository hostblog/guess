$(document).ready(function(){var owl=$('#home-slider');if(owl.length){owl.owlCarousel({autoPlay:4500,loop:true,navigation:false,pagination:true,navigationText:["",""],transitionStyle:"fade",singleItem:true,items:1});}
if(window.innerWidth<=1024){$('#PRODUCT_NEW .product-list').owlCarousel({autoPlay:4500,pagination:false,navigation:false,loop:false,scrollPerPage:true,navigationText:false,itemsDesktop:[1024,2],itemsDesktopSmall:[967,2],itemsTablet:[600,2],itemsMobile:[600,2]});if($('.salePromotion .product-list .item').length){$('.salePromotion .product-list').owlCarousel({autoPlay:4500,pagination:false,navigation:false,loop:false,scrollPerPage:true,navigationText:false,itemsDesktop:[1024,2],itemsDesktopSmall:[967,2],itemsTablet:[600,2],itemsMobile:[600,2]});}}
$('.sendSubcrible').click(function(e){e.preventDefault();$.post('/newsletter/subscribe',{mail:$('#subscribeEmail').val(),gender:$('input[name=gender]:checked').val(),name:$('input.userName').val(),mobile:$('input.userPhone').val(),titleMail:'Xin chúc mừng '+$('input.userName').val()+' đã nhân được mã giảm giá 100.000đ'},function(rs){if(rs.code==1){$(".overlay-popup").fadeOut('slow');}
alert(rs.message);});});if($('.overlay-popup').length){$(".overlay-popup").modal('show');}
$('.small_popup_click').click(function(){$(".overlay-popup").modal('show');});});