jQuery(document).ready(function ($) {
    $('.row-trai-nghiem .js-slider-1img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // fade: true,
        arrows: true,
        appendArrows: '.row-trai-nghiem .arrow-wrapper-aos',
        nextArrow: '<button type="button" class="o-slider-btn-next"></button>',
        prevArrow: '<button type="button" class="o-slider-btn-prev"></button>',
        autoplay: true,
        autoplaySpeed: 3500,
    });

    $('.row-dai-do-thi .js-slider-1img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // fade: true,
        arrows: true,
        appendArrows: '.row-dai-do-thi .arrow-wrapper-aos',
        nextArrow: '<button type="button" class="o-slider-btn-next"></button>',
        prevArrow: '<button type="button" class="o-slider-btn-prev"></button>',
        autoplay: true,
        autoplaySpeed: 3500,
    });
});

jQuery(document).ready(function ($) {
    //responsive image map
    //chỉ chạy hiệu ứng trên màn hình desktop
    $('img[usemap]').rwdImageMaps();

    let phanKhuMap = document.getElementById('phan-khu-map');
    if (!phanKhuMap) return; //nếu ko có phần tử này thì ko chạy tiếp code
    let count = 0;
    for (let area of phanKhuMap.areas) {
        //gán thuộc tính slide-target cho các area để xác định text cần hiện, ẩn
        count++;
        area.setAttribute('slide-target', count);
        //thêm sụ kiện khi kick chuột vào các area của image
        area.addEventListener("click", function (event) {
            event.preventDefault(); //chặn follow link
            slideIndex = this.getAttribute('slide-target') - 1; //auto convert sang Int, slide index bắt đầu từ 0
            // Manually refresh positioning of slick
            $('.js-slider-1img-3').slick('slickGoTo', slideIndex, false);
        })
    }

});

jQuery(document).ready(function ($) {
    //đối với màn hình mobile thì slider của phân khu sẽ bắt sự kiện trượt để style line1, line2 cho phù hợp.
    //slider này khởi tạo riêng
    $('.js-slider-1img-3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
        fade: true,
    });
    // On before slide change
    $('.js-slider-1img-3').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        let line1 = document.getElementById('line1');
        let line2 = document.getElementById('line2');
        //vì nextSlide đếm từ 0 nên phải tăng lên 1 đơn vị
        let newNextSlide = nextSlide + 1;
        // dùng regex để thay class line1-1, line1-11.. thành class cần thiết
        let newClass = line1.classList.value.replace(/line1-[0-9]/g, "line1-" + newNextSlide);
        line1.classList.value = newClass;
        newClass = line2.classList.value.replace(/line2-[0-9]/g, "line2-" + newNextSlide);
        line2.classList.value = newClass;

        //đồng bộ 2 slide với nhau
        // Manually refresh positioning of slick
        $('.js-slider-1img-3').slick('slickGoTo', nextSlide, false);
    });
})

jQuery(document).ready(function ($) {
    //ở màn hình ipad, phone khi xoay ngang - dọc thì tọa độ phân khu - map khác nhau hoàn toàn và đang lỗi
    //phải reload lại trang thì mới hết lỗi chứ gọi hàm $('img[usemap]').rwdImageMaps(); ko ăn thua
    //mỗi khi resize view port mà size > 50 thì auto reload lại trang. <50 có thể do aos nên bỏ qua.
    // let oldClientWidth = document.body.clientWidth;
    // window.addEventListener("resize", function () {
    //     //màn hình desktop bình thường thì bỏ qua ko cần reload
    //     let newClientWidth = document.body.clientWidth;
    //     if (newClientWidth > 1199) return;
    //     if (Math.abs(newClientWidth - oldClientWidth) < 50) return;
    //     location.reload();
    // });
})


jQuery(document).ready(function ($) {
    //cho hiện lại ảnh banner khi đã load file js
    $('.delay-show').css('opacity', '1');
});