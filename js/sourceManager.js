/*资源加载工具*/
(function(){
    var source = {
        image:[
            {
                type: 'img',
                name: 'main',
                src: 'img/1.jpg'
            }
        ]
    }
    var R = {}
    var count = 0;
    for(var i = 0; i < source.image.length; i ++) {
        R[source.image[i].name] = new Image();
        R[source.image[i].name].src = source.image[i].src;
        R[source.image[i].name].onload = function () {
            count ++;
            if(count == source.image.length) {
                alert("complate")
            }

        }
    }
})()