var AudioContext = AudioContext || webkitAudioContext;
var context = new AudioContext;
//加载媒体
// var audio = new Audio("mp3/Half-blood Kakashi - Stay With Me【鬼怪OST】(Stringed Music Remix)（Cover：朴灿烈／Punch）.mp3");
var audio = new Audio("mp3/JUJU - この夜を止めてよ.mp3");
//创建节点
var source = context.createMediaElementSource(audio);
var analyser = context.createAnalyser();
//连接：source → analyser → destination
source.connect(analyser);
analyser.connect(context.destination);

//检测分辨率，获得缩放比例
var screenHeight = document.body.clientHeight,
    screenWidth = document.body.clientWidth;





analyser.fftSize = 4096;
var length = analyser.fftSize;
//创建数据
var dataArray = new Uint8Array(length);

audio.onended = function(){
    document.getElementById("fengmian").className = 'fengmianEnd';
    audio.load();
}

audio.oncanplaythrough = function() {
    document.getElementById("info").innerHTML = "轻触屏幕开始播放 -by 进击的橙子君"
    //if(AudioContext == null || AudioContext == undefined) {
        //alert("浏览器不支持Audio API")

    //}

        showFPS.go();

//alert("a")
    //audio.play();

    //loader.innerHTML = 'click to play...'
    document.addEventListener('click',function(){
        //console.log
        document.getElementById("fengmian").className = 'fengmian';
        //loader.style.display = 'none'
        //alert("b")
        audio.play();
        draw()
    })
};

function draw() {
    requestAnimationFrame(draw)
    //console.log(dataArray)
    analyser.getByteFrequencyData(dataArray);
    // infoTextEle.innerText = "输出信息:\n"+dataArray.toString()
    // infoTextEle.scrollTo(0,infoTextEle.scrollHeight)
    var eles = document.getElementsByClassName("newDiv");
    var startIndex = 0;
    for(var i = 0; i < 130; i ++) {
        startIndex = i * 5;
        eles[i].style.height = parseInt(pingjun(dataArray,startIndex)) + "px";
    }
}

function pingjun(dataArray, startIndex){
    var sum = 0;
    for(var i = 0; i < 5; i ++) {
        //console.log(startIndex)
        sum += dataArray[startIndex++];
    }
    //console.log(dataArray)
    //console.log(startIndex)
    //console.log(sum)
    //console.log(sum / 5)

    return  parseInt(sum / 5) * 0.5;
}


/**
 ** 得到浏览器每秒帧数fps
 **
 ** @Date Mar 13 2013
 **/
var showFPS = (function(){
    var requestAnimationFrame =
        window.requestAnimationFrame || //Chromium
        window.webkitRequestAnimationFrame || //Webkit
        window.mozRequestAnimationFrame || //Mozilla Geko
        window.oRequestAnimationFrame || //Opera Presto
        window.msRequestAnimationFrame || //IE Trident?
        function(callback) { //Fallback function
            window.setTimeout(callback, 1000/60);
        };
    var e,pe,pid = "infoText",fps,last,offset,step,appendFps;

    fps = 0;
    last = Date.now();
    step = function(){
        offset = Date.now() - last;
        fps += 1;
        if( offset >= 1000 ){
            last += offset;
            appendFps(fps);
            fps = 0;
        }
        requestAnimationFrame( step );
    };
    //显示fps; 如果未指定元素id，默认<body>标签
    appendFps = function(fps){
        if(!e) e=document.createElement('span');
        pe=pid?document.getElementById(pid):document.getElementsByTagName('body')[0];
        e.innerHTML = "fps: " + fps;
        pe.appendChild(e);
        if(fps >= 40) {
            pe.style.color="green";
        } else {
            pe.style.color="red";
        }
    }
    return {
        setParentElementId :  function(id){pid=id;},
        go          :  function(){step();}
    }
})();


function getImageColor(canvas, img) {
    canvas.width = img.width;
    canvas.height = img.height;

    var context = canvas.getContext("2d");
    var r=0,g=0,b=0;

    context.drawImage(img, 0, 0);

    // 获取像素数据
    var data = context.getImageData(0, 0, img.width, img.height).data;

    // 取所有像素的平均值
    for (var row = 0; row < img.height; row++) {
        for (var col = 0; col < img.width; col++) {
            r += data[((img.width * row) + col) * 4];
            g += data[((img.width * row) + col) * 4 + 1];
            b += data[((img.width * row) + col) * 4 + 2];
        }
    }

    // 求取平均值
    r /= (img.width * img.height);
    g /= (img.width * img.height);
    b /= (img.width * img.height);

    // 将最终的值取整
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);

    return "rgb(" + r + "," + g + "," + b + ")";
}
