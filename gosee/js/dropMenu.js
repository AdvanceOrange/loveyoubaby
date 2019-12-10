/**
 * Created by orange on 17-7-6.
 * 处理导航栏下拉菜单动画逻辑
 */
//获得所有下拉菜单Title集合//lenght:7

var dropMenu = {
    init:function () {
        var menuTitles = $("[name='menuTitle']");
        for (var i = 0; i < menuTitles.length; i ++) {
            //如果有下拉菜单,则绑定事件
            if (typeof menuTitles.eq(i).next() != "undefined") {
                var sib = menuTitles.eq(i).next();
                //debugger
                sib.mouseover(

                    function() {

                        $(this).css({"opacity": 1, "marginTop": "-15px", "display":"block"});
                    }
                )
                sib.mouseout(
                    function() {
                        $(this).css({"opacity":0,"marginTop":0,"display":"none"});
                    }
                )
                menuTitles.eq(i).mouseover(
                    function() {
                        var sib = $(this).next();
                        sib.css({"display": "block"});
                        //同时设置css将不会出现动画效果，所以增加定时器
                        setTimeout(function() {
                            sib.css({"opacity": 1, "marginTop": "-15px"});
                        },10);

                        //alert("hello")
                        //console.log(sib)
                    }
                );
                menuTitles.eq(i).mouseout(
                    function() {
                        $(this).next().css({"opacity":0,"marginTop":0,"display":"none"});
                    }
                )
            }
        }

//网页被卷起来的高度
        var windowScrollHeight = null;
        var aEle = $(".productNav > ul > li > a");


        $(".nav-ul > li > a[class!=\"nav-active\"]").on("mouseover",function(){
            $(this).addClass("nav-active");
        })

        $(".nav-ul > li > a[class!=\"nav-active\"]").on("mouseout",function(){
            $(this).removeClass("nav-active");
        })

        this.calc()

    },

    calc:function (){
        windowScrollHeight = $(window).scrollTop();

        if($(".nav").attr("final") == 'false') {
            var b_n = (parseFloat(0.01 * parseFloat(windowScrollHeight)));
            $(".nav").css(
                {
                    // "background-image": "linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, "+(0+parseFloat(0.001*parseFloat(windowScrollHeight)))+"))",
                    "background": "rgba(254, 254, 254, " + (b_n >= 1 ? 1 : b_n) + ")",
                    "box-shadow": "0 0px 25px 0 rgba(0, 0, 0, " + (parseFloat(0.00010 * parseFloat(windowScrollHeight)) < 0.2 ? parseFloat(0.00010 * parseFloat(windowScrollHeight)) : 0.2) + ")",

                })

            if (windowScrollHeight <= 0) {
                $(".nav").addClass("nav-text-shadow")
            } else {
                $(".nav").removeClass("nav-text-shadow")
            }

            var n = 255 - (windowScrollHeight * 1.1 <= 204 ? windowScrollHeight * 1.1 : 204);
            $(".logo, .nav-ul > li > a").css(
                {
                    "color": "rgba(" + n + ", " + n + ", " + n + ")",
                })
        } else {
            $(".nav").removeClass("nav-text-shadow")
            $(".nav").css(
                {
                    "background-color": "rgba(254, 254, 254)",
                    "box-shadow": "0 0px 25px 0 rgba(0, 0, 0, " + (parseFloat(0.00010 * parseFloat(windowScrollHeight)) < 0.2 ? parseFloat(0.00010 * parseFloat(windowScrollHeight)) : 0.2) + ")"
                })
            $(".logo, .nav-ul > li > a").css(
                {
                    "color": "#383c48",
                })

        }
    }
}
