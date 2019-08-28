$(function(){
	// menu
	$('.menu-click').click(function(){
		$('.main-menu ul').slideToggle();
	});

	// back to top
	$(window).scroll(function() {
        if($(window).scrollTop() != 0) {
            $('#go_top').fadeIn();
        } else {
            $('#go_top').fadeOut();
        }
    });
    $('#go_top').click(function() {
        $('html, body').animate({scrollTop:0},500);
    });

    // tabs nav
    $('.tab-content:not(:first)').hide();
    $('.tab li a').click(function(){
    	$('.tab li a').removeClass('active');
    	$(this).addClass('active');
    	$('.tab-content').hide();

    	var activeTab = $(this).attr('href');
    	$(activeTab).fadeIn();
    	return false;
    });
    
	
});