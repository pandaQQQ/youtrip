/*=========================近期活动轮播==================*/

/*========================回到顶部============================*/
function lcfBackTop() {
    var backInterval = setInterval(function () {
        window.scrollTo(0,window.scrollY-20);
        if(window.scrollY<=0){
            clearInterval(backInterval)
        }
    },5)
}
sessionStorage.myhref=location.href;


