/**
 * 用来处理商品页面滚动时，左侧导航栏跟随效果
 * Created by orange on 17-7-9.
 */
//网页被卷起来的高度
var windowScrollHeight = null;
var aEle = $(".productNav > ul > li > a");
window.onscroll = function () {
    windowScrollHeight = $(window).scrollTop();
    console.log(windowScrollHeight)
    changeActive();
    dropMenu.calc();
}
/*窗口大小改变事件*/
$(window).resize(function() {
    //网页被卷起来的高度
    windowScrollHeight = $(window).scrollTop();
    changeActive();
});

function changeActive() {
    var hEle = $("h2");

    //alert("")
    //  获得浏览器可视窗口高度
    var winHeight = $(window).height();
    var aniEle = $(".ani_top");
    for (var i = 0; i < aniEle.length; i++) {
        //console.log(hEle.eq(i).offset().top)
        //  H2标签当前在可见窗口中，元素距离浏览器顶部距离
        if (aniEle.eq(i).offset().top - windowScrollHeight >= 0 && aniEle.eq(i).offset().top - windowScrollHeight <= winHeight) {
            aniEle.eq(i).css({"top":"0","opacity":"1","transform":"scale(1,1)"});
        }
    }
    //
    for (var i = 0; i < hEle.length; i++) {
        //console.log(hEle.eq(i).offset().top)
        //  H2标签当前在可见窗口中，元素距离浏览器顶部距离
        if (hEle.eq(i).offset().top - windowScrollHeight + 80 >= 0 && hEle.eq(i).offset().top - windowScrollHeight <= winHeight) {

            aEle.eq(i).addClass("aActive");
            // console.log(hEle.eq(i).parent());
            // hEle.eq(i).parent().css({"opacity":"1","top":"0"})
        } else {
            aEle.eq(i).removeClass("aActive");
        }
    }
}

$().ready(function () {
    changeActive();
});
