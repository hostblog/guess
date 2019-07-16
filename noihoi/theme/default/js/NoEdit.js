$('.kv-fa').rating({
    step: 1,
    showClear: false,
    showCaption: false,
    showCaptionAsTitle: false,
    theme: 'krajee-fa',
    filledStar: '<i class="fa fa-star"></i>',
    emptyStar: '<i class="fa fa-star-o"></i>',
    starCaptions: {
        0.5: '0,5 sao',
        1: '1 sao',
        1.5: '1,5 sao',
        2: '2 sao',
        2.5: '2,5 sao',
        3: '3 sao',
        3.5: '3,5 sao',
        4: '4 sao',
        4.5: '4,5 sao',
        5: '5 sao'
    }
});