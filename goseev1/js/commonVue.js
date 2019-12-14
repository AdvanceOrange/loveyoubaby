/**
 * @author/作者 进击の橙子君
 * @date/时间 2019/12/14 16:03
 * @Licenses/协议 GPLv3 此代码使用GPLv3协议，未经许可禁止修改。
 */

/**
 * 这是网站核心逻辑文件
 * 依赖于vue
 * @type {{init: CommonVue.init}}
 */
var CommonVue = {
    init:function(){
        var app = new Vue({
            el: '#app',
            data: {
                lang: Lang.zh,
                message:'1',
                typed:null,
                videoState: 'pause',
                setTimeO:null,
                loginPage: {
                    loginUserName:'',
                    loginPassWord:'',
                }
            },
            mounted(){
                //初始化语言
                this.initLang();
                //初始化下拉
                dropMenu.init();
                //绑定窗口滚动事件
                $(window).on('scroll',function(){
                    dropMenu.calc();
                })
                //绑定打字机效果组件
                if($(".typed-quotes").length) {
                    this.typedInit();
                }
                //初始化机票页面组件
                if($('#demo').length) {
                    this.ticketPageInit();
                }
            },
            methods:{
                //初始化网站语言
                initLang(){
                    var langStr = localStorage.getItem("lang");
                    if(langStr) {
                        if(langStr == 'zh') {
                            this.lang = Lang.zh;
                        } else if (langStr == 'cn') {
                            this.lang = Lang.cn;
                        }
                    } else {
                        this.lang = Lang.cn;
                    }
                },
                //切换网站语言
                changeLanguage(){
                    this.showLoading();
                    setTimeout(()=>{
                        this.showMessage(this.lang.message.updateLangSuccess,()=>{
                            this.lang = this.lang == Lang.cn ? Lang.zh : Lang.cn;
                            localStorage.setItem("lang",this.lang == Lang.cn ? 'cn' : 'zh')
                            if(this.typed) {
                                this.typed.destroy();
                            }
                            if($(".typed-quotes").length) {
                                this.typedInit();
                            }
                            this.shadowBox('close','');
                        },'succ');
                    },600)

                },
                //初始化打字机效果组件
                typedInit(){
                    this.typed = new Typed(".typed-quotes",{
                        cursorChar: '',
                        strings: this.lang.typedString,
                        typeSpeed: 50,
                        contentType: 'html',
                        loop: true,
                        backDelay: 4000,
                    });
                },
                //机票页面组件初始化
                ticketPageInit(){
                    laydate.render({elem: '#demo',done: (value, date, endDate)=>{
                        this.lang.ticket.fromTimeValue = value;
                    }});

                    var el = $(".line-code > li");

                    for(var i = 0; i < el.length; i ++) {
                        var css = {
                            "width": "30px",
                            "height": (Math.ceil(Math.random()*3)+1)+"px",
                            "background": "#000",
                            "margin-top": (Math.ceil(Math.random()*3)+1)+"px",
                        };
                        el.eq(i).css(css);
                    }
                },
                //主页视频控制方法
                videoControll(){
                    var videoEl = document.getElementById('video');
                    var audioEl = document.getElementById('audio');
                    if(videoEl.paused){
                        this.shadowBox("open","")
                        videoEl.play();
                        audioEl.play();
                        this.videoState = 'play'
                        $("#video").css('width','75%')
                        $(".video > div").css('z-index',1000)
                    } else {
                        this.shadowBox("close","")
                        videoEl.pause();
                        audioEl.pause();
                        this.videoState = 'pause'
                        $("#video").css('width','950px')
                        $(".video > div").css('z-index','auto')
                    }

                },
                //显示toast 提示
                showMessage:function(message,callFun,level){
                    if(this.setTimeO) {
                        clearTimeout(this.setTimeO);
                    }
                    $(".message").remove();

                    //消息图标设置
                    var icon = 'fa-check';
                    switch (level) {
                        case 'succ':
                            icon = "fa-check";
                            break;
                        case 'erro':
                            icon = 'fa-times';
                            break;
                        case 'warn':
                            icon = 'fa-exclamation';
                            break;
                    }
                    var messageHtml = '<div class="message message'+level+'">' +
                        '<p><span class="fa '+icon+'" style="margin-right:.3rem"></span>'+message+'</p>' +
                        '</div>'
                    $("body").append(messageHtml);
                    setTimeout(function () {
                        $(".message").addClass("messageShow")
                    },20)
                    this.setTimeO = setTimeout(function(){
                        $(".message").removeClass("messageShow")
                        if(typeof(callFun) == 'function'){
                            callFun();
                        }
                    },3000)
                },
                //搜索机票逻辑
                searchTicket(){
                    //检查数据
                    if(!this.lang.ticket.fromAirportValue) {
                        this.showMessage(this.lang.message.userNotInput + this.lang.ticket.fromAirport,null,'erro');
                        return;
                    }
                    if(!this.lang.ticket.toAirportValue) {
                        this.showMessage(this.lang.message.userNotInput + this.lang.ticket.toAirport,null,'erro');
                        return;
                    }
                    if(!this.lang.ticket.fromTimeValue) {
                        this.showMessage(this.lang.message.userNotInput + this.lang.ticket.fromTime,null,'erro');
                        return;
                    }
                    if(!this.lang.ticket.phoneValue) {
                        this.showMessage(this.lang.message.userNotInput + this.lang.ticket.phone,null,'erro');
                        return;
                    }
                    if(!this.lang.ticket.nameValue) {
                        this.showMessage(this.lang.message.userNotInput + this.lang.ticket.name,null,'erro');
                        return;
                    }
                    if(!this.lang.ticket.idValue) {
                        this.showMessage(this.lang.message.userNotInput + this.lang.ticket.id,null,'erro');
                        return;
                    }

                    this.showLoading();
                    this.showMessage(this.lang.message.searching,()=>{
                        this.lang.ticket.tickets = [];
                        var n = Math.floor(Math.random()*10)
                        for(var i = 0; i < n; i ++) {
                            this.lang.ticket.tickets.push(
                                {
                                    fromAirport:this.lang.ticket.fromAirportValue,
                                    toAirport:this.lang.ticket.toAirportValue,
                                    fromTime:this.lang.ticket.fromTimeValue,
                                    phone:this.lang.ticket.phoneValue,
                                    name:this.lang.ticket.nameValue,
                                    idNumber:this.lang.ticket.idValue,
                                }
                            )
                        }
                        this.shadowBox("close","");
                    },'succ');
                },
                //登录按钮点击后进入主页逻辑
                goIndex(){
                    if(!this.loginPage.loginUserName) {
                        this.showMessage(this.lang.message.userNotInput + this.lang.login.username,null,'erro');
                        return;
                    }

                    if(!this.loginPage.loginPassWord) {
                        this.showMessage(this.lang.message.userNotInput + this.lang.login.password,null,'erro');
                        return;
                    }
                    this.showLoading();
                    setTimeout(()=>{
                        this.showMessage(this.lang.message.loginSuccess,function(){
                            location.href = 'index.html';
                        },'succ');
                    },2000)
                },
                //退出按钮点击后进入登录页逻辑
                goLogin(){
                    this.showLoading();
                    setTimeout(()=>{
                        this.showMessage(this.lang.message.logoutSuccess,function(){
                            location.href = 'login.html';
                        },'succ');
                    },1000)
                },
                //主页搜索按钮进入目的地页面逻辑
                goDestination(){
                    this.showLoading();
                    this.showMessage(this.lang.message.searching,function(){
                        location.href = 'destination.html';
                    },'succ');
                },
                //显示加载效果
                showLoading(){
                    this.shadowBox("open","<div style='width:100%;height:100%;display: flex'>" +
                        "<div style='display: inline-flex;margin: auto;'><span class='flower-loader' style='margin:auto;'></span>" +
                        "<p style='text-align: center;padding-left: 1rem;color: #fff;'>"+this.lang.message.loading+"</p></div>" +
                        "</div>");
                },
                //显示遮罩层
                shadowBox(status,innerHtml){
                    var bgEl = $("#bg");
                    switch (status) {
                        case "open":
                            if(bgEl){
                                bgEl.remove();
                            }
                            $("body").css("overflow","hidden")
                            $("body").append("<div id='bg'>"+innerHtml+"</div>")
                            $("#bg").css({"display":"block","opacity":"0"});
                            setTimeout(function () {
                                $("#bg").css({"opacity":"1","backdrop-filter": "blur(3px)"});
                            },10)
                            break;
                        case "close":
                            $("body").css("overflow","auto")
                            bgEl.css({"opacity":"0","backdrop-filter": "blur(0px)"});
                            setTimeout(function () {
                                bgEl.remove();
                            },400)
                            break;
                    }
                },
                //显示无法打开，统一的未开发的页面提示
                showNotOpenMessage(){
                    this.showMessage(this.lang.message.notOpen,null,'warn');
                }
            }
        })

        $("body").css({"opacity":"1"})
    }
}

