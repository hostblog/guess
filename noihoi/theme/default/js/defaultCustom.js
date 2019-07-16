//Check box thuoc tinh click
$(document).ready(function () {
    var listChk = [];
    $("input[name='checksub']").click(function () {
        var le = $(this).val()
        if (this.checked == true) {
            listChk.push($(this).val());
            $("input.box" + le).attr("checked", true);
        } else {
            $("input.box" + le).attr("checked", false);
            var removeitem = $(this).val();
            listChk = $.grep(listChk, function (value) {
                return value != removeitem;
            });
        }
        if (listChk == "") {
            window.location.reload();
        } else {
            var cat = window.location.href;
            var tag = "";
            var arrCat = cat.split('//');
            var arrCat2 = arrCat[1].split("/");
            var s1 = arrCat2[1];
            if (arrCat2.length > 2) {
                tag = s1;
                tag += "/" + arrCat2[2].replace(".html", "");
            } else {
                tag = s1.substr(0, cat.indexOf(".html"));
            }
            //cat = cat.substr(cat.lastIndexOf('/') + 1);
            //cat = cat.substr(0, cat.indexOf(".html"));
            $("#loadFillter").load("/search_results.aspx?attid=" + listChk + "&cat=" + tag);

            $.ajax({
                async: false,
                type: "POST",
                url: "webService.asmx/GetMetaSEO",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify({
                    attid: listChk.join()
                }),
                success: function (response) {
                    console.log(response.d);
                    if (response.d != null) {
                        if (response.d.Title != "") {
                            $("title").html(response.d.Title);
                        }

                        if (response.d.Description != "") {
                            $("meta[name='description']").attr("content", response.d.Description);
                        }

                        if (response.d.Keyword != "") {
                            $("meta[name='keywords']").attr("content", response.d.Keyword);
                        }
                    }
                },
                failure: function (response) { }
            });
        }
    });

    $("img.img-mini").click(function () {
        var parent = $(this).parent();
        var imgUrl = $(parent).attr('id');
        var parent2 = $(parent).parent();
        var parent1 = $(parent2).parent();
        var imgBig = $(parent1).find("a.frame-img > img");
        $(imgBig).attr("src", imgUrl);
    });
});

//Check box hang san xuat click
$(document).ready(function () {
    var listChk = [];
    $("input[name='checksubman']").click(function () {
        var parent = $(this).parent();
        var grParent = parent.parent();
        var grLink = grParent.attr("name");
        var link = parent.attr("name");
        if (this.checked == true) {
            window.location.assign(link);
        } else {
            window.location.assign(grLink);
        }
    });
});


$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link');
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');
        if (!e.data.multiple) {
            $el.find('.sub-menu-left').not($next).slideUp().parent().removeClass('open');
        };
    }
    var accordion = new Accordion($('#menu_left'), false);
});

function openViewPro(proID) {
    $("#loadViewPro").load("/view_product.aspx?id=" + proID);
    $('.bs-example-modal-lg').modal();
}

function addToCartView(proID) {
    $("#loadViewPro").load("/add_cart_product.aspx?id=" + proID);
    $('.bs-example-modal-lg').modal();
}
$(document).ready(function () {
    $(".modal .close").click(function () {
        $("#loadViewPro").html("");
    });

    //listProductSearch();
})
var tagsource = []

function listProductSearch() {
    $.ajax({
        async: false,
        type: "POST",
        url: "webService.asmx/getProductList",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var tagProSearch = response.d;

            for (i = 0; i < tagProSearch.length; i++) {
                tagsource.push({
                    "id": tagProSearch[i].id,
                    "name": tagProSearch[i].strName,
                    "txtimg": tagProSearch[i].strImg
                });
            }
        },
        failure: function (response) { }

    });
}

function displayResult(item, val, text) {
    console.log(item);
}

//$(function () {
//    $('[id*=txtSearch]').typeahead({
//        source: tagsource,
//        itemSelected: displayResult
//    });
//});


document.write("<script type='text/javascript' language='javascript'>MainContentW = 1040;LeftBannerW = 129;RightBannerW = 0;LeftAdjust = 0;RightAdjust = 1;TopAdjust = 145;ShowAdDiv();window.onresize=ShowAdDiv;<\/script>");

$(window).load(function () {
    $('#myModalPopUp').modal('show');
});


