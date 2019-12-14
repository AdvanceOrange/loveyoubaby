/**
 * Created by orange on 17-7-7.
 */
/*向上滚动*/
function onTop() {
    var time = setInterval(function() {
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        document.documentElement.scrollTop = document.body.scrollTop = osTop - 200;
        if (osTop <= 0) {
            clearInterval(time);
        }
    },30)
}