/**
 * Created by orange on 17-7-7.
 */
    //header对象，用来显示banner
var ele = null;
//定时器，用来改变banner
var interval = null;
//确定显示的banner
var bannerindex = 0;
//控制自动播放
var isAutoPlay = true;
//控制banner的li集合
var bannerControlEle = null ;
//案例元素集合
var cooperations = null;
//本次显示合作案例的首下标
var coopStartIndex = 0;
//旧的合作合作项目下标数组
var oldCooperation = [];
//案例是否暂停
var isCooperPlay = true;
window.onload = function() {
    //获得合作案例集合
    cooperations = $(".showCooperation > span");
    //绑定事件，用户鼠标悬浮，暂停切换合作案例
    var cooperationEle = $(".showCooperation");
    cooperationEle.eq(0).mouseover(function() {
        isCooperPlay = false;
    })
    cooperationEle.eq(0).mouseout(function() {
        isCooperPlay = true;
    })

    //此处只能使用getElementsByName而不能使用getElementsByClassName
    bannerControlEle = document.getElementsByName('banner-control-li');
    //将最后一个li设置成active状态
    bannerControlEle[bannerControlEle.length - 1].setAttribute("class","active");
    ele = document.getElementsByTagName("header")[0];
    //background: url("images/banner3.jpg"/*tpa=http://www.zhuomeiad.com/js/images/banner3.jpg*/) center top / cover no-repeat;
    console.log(bannerControlEle.length-1)
    var count = bannerControlEle.length - 1;
    //设置最后一张banner图片
    ele.style.background = 'url(images/banner'+count+'.jpg) center center / cover no-repeat';

    startBanner();
    //动态绑定bannerControl监听
    for (var i = 0; i < bannerControlEle.length; i++) {
        bannerControlEle[i].addEventListener(
            "mouseover",
            function(){
                bannerControl(this)
            },
            false
        )
    }


    //首次显示的合作项目
    for(var i = 0; i < 5; i ++) {
        // console.log((index + i) % cooperations.length);
        cooperations.eq( i % cooperations.length).css({"display":"block"});
        oldCooperation[i]=i % cooperations.length;
    }

}

function startBanner(){
    //首页轮播开始工作
    interval = setTimeout(
        function () {
            setTimeout(arguments.callee, 5000);
            if (isAutoPlay) {
                bannerPlay();
            }
        }, 5000
    );
}

function bannerPlay() {
    //ele.style.opacity = '0.8';
    //console.log(ele);
    setTimeout(function(){
        //改变bannerControl状态
        for (var i = 0; i < bannerControlEle.length; i ++) {
            if (bannerControlEle[i].getAttribute("data") != bannerindex % bannerControlEle.length) {
                bannerControlEle[i].setAttribute("class","banner-control-li");
            } else {
                bannerControlEle[i].setAttribute("class","active");
            }
        }
        //利用banner的定时器
        /*
        if (isCooperPlay) {
            changeCooperation(coopStartIndex);
            coopStartIndex += 5;
        }
        */
        ele.style.background = 'url(images/banner'+bannerindex ++ % bannerControlEle.length+'.jpg) no-repeat center center';
        ele.style.backgroundSize = 'cover';
        // ele.style.opacity = '1';
    },300);
}

var time;
function bannerControl(li) {
    //首先清除time，因为当用户手动点击li后，time定时器将会在4秒后重新将banner重置为自动运行，但是在4秒之内，用户再次点击li，就需要取消之前得操作
    clearTimeout(time);
    //设置当前bannerindex 为 li -> data值
    bannerindex = li.getAttribute("data");
    //执行bannerplay
    bannerPlay();

    //停止自动播放
    isAutoPlay = false;
    //4秒后重新自动播放
    time = setTimeout(function(){
        isAutoPlay = true;
    },4000)

}
