var topObj = document.querySelector('.back-to-top');
// var top = 0;
// 设置“回到顶部的初始位置”
window.onscroll = function(){
    var t = 100; 
    var top = document.documentElement.scrollTop + t;
    topObj.style.top = top + 'px';
}
var timer = '';
topObj.onclick = function(){
    timer = setInterval(function(){
        clearInterval('timer')
        var pureTop = document.documentElement.scrollTop;
        if( pureTop < 0){
            clearInterval(timer)
        }else{
            document.documentElement.scrollTop = pureTop - 30;
        }
    },30)
}