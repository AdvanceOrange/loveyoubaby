var AudioContext = AudioContext || webkitAudioContext;
var context = new AudioContext;
//加载媒体
var audio = new Audio("mp3/Half-blood Kakashi - Stay With Me【鬼怪OST】(Stringed Music Remix)（Cover：朴灿烈／Punch）.mp3");
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


audio.oncanplaythrough = function() {


//alert("a")
    //audio.play();

    //loader.innerHTML = 'click to play...'
    document.addEventListener('click',function(){
        document.getElementById("fengmian").className = 'fengmian';
        //loader.style.display = 'none'
        //alert("b")
        audio.play();
        draw()
    })
};


var infoTextEle = document.getElementById("infoText");

function draw() {
    requestAnimationFrame(draw)
    //console.log(dataArray)
    analyser.getByteFrequencyData(dataArray);
    infoTextEle.innerText = "输出信息:\n"+dataArray.toString()
    // infoTextEle.scrollTo(0,infoTextEle.scrollHeight)
    var eles = document.getElementsByClassName("newDiv");
    for(var i = 0; i < 130; i ++) {
        eles[i].style.height = parseInt(dataArray[i]*.8);
    }
}
