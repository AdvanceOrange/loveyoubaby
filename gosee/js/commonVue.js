var CommonVue = {
    init:function(){
        var app = new Vue({
            el: '#app',
            data: {
                lang: Lang.zh,
                message:'1',
                typed:null,
                videoState: 'pause'
            },
            mounted(){
                this.initLang();
                dropMenu.init();
                $(window).on('scroll',function(){
                    dropMenu.calc();
                })
                this.typedInit();
            },
            methods:{
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
                changeLanguage(){
                    this.lang = this.lang == Lang.cn ? Lang.zh : Lang.cn;
                    localStorage.setItem("lang",this.lang == Lang.cn ? 'cn' : 'zh')
                    this.typed.destroy();
                    this.typedInit();
                },
                typedInit(){
                    this.typed = new Typed(".typed-quotes",{
                        strings: this.lang.typedString,
                        typeSpeed: 50,
                        contentType: 'html',
                        loop: true,
                        backDelay: 4000,
                    });
                },
                videoControll(){
                    var videoEl = document.getElementById('video');
                    var audioEl = document.getElementById('audio');
                    var bgEl = $("#bg");
                    if(videoEl.paused){
                        videoEl.play();
                        audioEl.play();
                        this.videoState = 'play'
                        bgEl.css({"display":"block","opacity":"0"});
                        setTimeout(function () {
                            bgEl.css({"opacity":"1"});
                        },10)
                        $("#video").css('width','75%')
                        $(".video > div").css('z-index',1000)
                    } else {
                        videoEl.pause();
                        audioEl.pause();
                        this.videoState = 'pause'
                        bgEl.css({"opacity":"0"});
                        setTimeout(function () {
                            bgEl.css({"display":"none","opacity":"0"});
                        },400)
                        $("#video").css('width','950px')
                        $(".video > div").css('z-index','auto')
                    }

                }
            }
        })

        $("body").css({"opacity":"1"})
    }
}

