$(document).ready(function () {

    $("div.wrapper").each(function (i, e) {
        $(e).attr("ondragstart", "return false");
    });

    var $demo1 = $("div.demo1"),
        $demo3 = $("div.demo3");


    var carousel1 = new Carousel($demo1.children("ul.container"), {
        opacity: .9,
        scale: [.9],
        transition: "400ms",
        switchBtn: $demo1.children("i.btn-direct"),
        offset: 1600,
        isClickCard: true,
        isAuto: true,
        interval: 4000
    });

    var carousel3 = new Carousel($demo3.children("ul.container"), {
        transition: ".4s",
        switchBtn: $demo3.children("i.btn-direct"),
        offsetDistance: $demo3.find("ul.container>li").eq(0).outerWidth() + 20,
        isAuto: true,
    });
})