/*=========================近期活动轮播==================*/
function play(){
    var player = document.getElementById("player");
    if (player.paused){
        player.play();
    }else{
        player.pause();
    }
}
/*============================窗口滚动===================*/
window.onscroll = function() {/*窗口滚动*/
    var navbar = document.getElementsByClassName("navbar-default")[0];
    var onlineIcon = document.getElementsByClassName("onlineIcon")[0];
    var lcfBackUp = document.getElementsByClassName("lcfBackUp")[0];
    var scrlength =parseInt(document.documentElement.scrollTop||document.body.scrollTop);/*获取窗口当前的滚动位置*/
    if (scrlength>750){
        var colorRgba ="rgba(167,152,101, 0.6)"
        navbar.style.backgroundColor=colorRgba;
    }else if (scrlength<750){
        navbar.style.backgroundColor="inherit";
    }

    if (scrlength>180){
        onlineIcon.style.backgroundColor="#615839"
        lcfBackUp.style.backgroundColor="#615839"
    }else if (scrlength<180){
        onlineIcon.style.backgroundColor="#a79865"
        lcfBackUp.style.backgroundColor="#a79865"
    }
}
/*=======================点击向下走===================*/
function lcfDown() {
    var backInterval = setInterval(function () {
        window.scrollTo(0,window.scrollY+10);
        if(window.scrollY>750){
            clearInterval(backInterval)
        }
    },5)
}
/*========================回到顶部============================*/
function lcfBackTop() {
    var backInterval = setInterval(function () {
        window.scrollTo(0,window.scrollY-20);
        if(window.scrollY<=0){
            clearInterval(backInterval)
        }
    },5)
}

var isTrue = true;
$(".navbar-toggle").on("click",function(){
    isTrue=!isTrue
    var navdiv = document.getElementsByClassName('navdiv')[0];
    if(isTrue ==true){
        navdiv.style.display='none'
    }else{
        navdiv.style.display='block'
    }
});

$(".textStr").each(function() {
    if ($(this).text().length >100) {
        $(this).html($(this).text().replace(/\s+/g, "").substr(0, 100) + "......")
    }
})

function  mychuan(obj) {
    console.log(obj)
    ajax("post","/onclick.do","id="+obj,function(){
        var mymassage=JSON.parse(xhr.responseText)
        if(mymassage.length>0){
            console.log(mymassage)
        }
    })
}

sessionStorage.myhref=location.href;