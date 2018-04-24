/*============================监听导航窗口滚动===================*/
sessionStorage.myhref=location.href;
var navbar = document.getElementsByClassName("navbar-default")[0];
window.onscroll = function() {/*窗口滚动*/
    var scrlength =parseInt(document.documentElement.scrollTop||document.body.scrollTop);/*获取窗口当前的滚动位置*/
    if (scrlength>450){
        var colorRgba ="rgba(97,88,57, 0.4)"
        navbar.style.backgroundColor=colorRgba;
    }else if (scrlength<450){
        navbar.style.backgroundColor="inherit";
    }
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




/* 内容块 激活这个插件*/

// var sqlJson;
// var item=0;
// $(function(){
//     /*瀑布流开始*/
//     var container = $('.waterfull');
//     var loading=$('#imloading');
//     // 初始化loading状态
//     loading.data("on",true);
//     /*判断瀑布流最大布局宽度，最大为1280*/
//     function tores(){
//         var tmpWid=$(window).width();
//         if(tmpWid>1174){
//             tmpWid=1174;
//         }else{
//             var column=Math.floor(tmpWid/300);
//             tmpWid=column*300;
//         }
//         $('.waterfull').width(tmpWid);
//     }
//     tores();
//     $(window).resize(function(){
//         tores();
//     });
//     container.imagesLoaded(function(){
//         container.masonry({
//             // columnWidth: 10,
//             itemSelector : '.item',
//             isFitWidth: true,//是否根据浏览器窗口大小自动适应默认false
//             isAnimated: true,//是否采用jquery动画进行重拍版
//             isRTL:false,//设置布局的排列方式，即：定位砖块时，是从左向右排列还是从右向左排列。默认值为false，即从左向右
//             isResizable: true,//是否自动布局默认true
//             animationOptions: {
//                 duration: 800,
//                 easing: 'easeInOutBack',//如果你引用了jQeasing这里就可以添加对应的动态动画效果，如果没引用删除这行，默认是匀速变化
//                 queue: false//是否队列，从一点填充瀑布流
//             }
//         });
//     });
//     function loadImage(url) {
//         var img = new Image();
//         //创建一个Image对象，实现图片的预下载
//         img.src = url;
//         if (img.complete) {
//             return img.src;
//         }
//         img.onload = function () {
//             return img.src;
//         };
//     };
//
//     /*通过ajax从后台获取到的数据*/
//     // var sqlJson=[{'title':'瀑布流其实就是几个函数的事！','intro':'爆料，苏亚雷斯又咬人啦，C罗哪有内马尔帅，梅西今年要不夺冠，你就去泰国吧，老子买了阿根廷赢得彩票，输了就去不成了。','src':'images/one.jpeg','writer':'志强不息','date':'2小时前','looked':321},{'title':'瀑布流其实就是几个函数的事！','intro':'爆料了，苏亚雷斯又咬人啦，C罗哪有内马尔帅，梅西今年要不夺冠，你就去泰国吧，老子买了阿根廷赢得彩票，输了就去不成了。','src':'images/demo2.jpg','writer':'志强不息','date':'2小时前','looked':321},{'title':'瀑布流其实就是几个函数的事！','intro':'爆料了，苏亚雷斯又咬人啦，C罗哪有内马尔帅，梅西今年要不夺冠，你就去泰国吧，老子买了阿根廷赢得彩票，输了就去不成了。','src':'images/p1.jpg','writer':'志强不息','date':'2小时前','looked':321},{'title':'瀑布流其实就是几个函数的事！','intro':'爆料了，苏亚雷斯又咬人啦，C罗哪有内马尔帅，梅西今年要不夺冠，你就去泰国吧，老子买了阿根廷赢得彩票，输了就去不成了。','src':'images/p1.jpg','writer':'志强不息','date':'2小时前','looked':321}];
//     window.onload=function () {
//         getALLUser();
//     };
//
//     function getALLUser() {
//         var xhr;
//         if(window.XMLHttpRequest){
//             xhr=new  XMLHttpRequest();
//
//         }else {
//             xhr=new ActiveXObject("microsoft.XMLHTTP");
//         }
//         xhr.onreadystatechange=function () {
//             if(xhr.readyState==4&&xhr.status==200){
//                 var data=JSON.parse(xhr.responseText);//将JSON字符串转换成了JSON对象
//                 sqlJson=data;
//                 console.log(sqlJson)
//             }
//         };
//         xhr.open("get","/LCF_visa.do?itemNum="+itemNum);
//         xhr.send(null)
//     }
//
//     /*本应该通过ajax从后台请求过来类似sqljson的数据然后，便利，进行填充，这里我们用sqlJson来模拟一下数据*/
//     $(window).scroll(function(){
//         // 计算所有瀑布流块中距离顶部最大，进而在滚动条滚动时，来进行ajax请求，方法很多这里只列举最简单一种，最易理解一种
//         itemNum=$('#waterfull').find('.item').length;
//         console.log("item1:"+itemNum);
//
//         var itemArr=[];
//         itemArr[0]=$('#waterfull').find('.item').eq(itemNum-1).offset().top+$('#waterfull').find('.item').eq(itemNum-1)[0].offsetHeight;
//         itemArr[1]=$('#waterfull').find('.item').eq(itemNum-2).offset().top+$('#waterfull').find('.item').eq(itemNum-1)[0].offsetHeight;
//         itemArr[2]=$('#waterfull').find('.item').eq(itemNum-3).offset().top+$('#waterfull').find('.item').eq(itemNum-1)[0].offsetHeight;
//
//         var maxTop=Math.max.apply(null,itemArr);
//
//         console.log("maxtop:"+maxTop)
//
//         if(maxTop<$(window).height()+$(document).scrollTop()){
//             console.log("11:"+$(window).height());
//             console.log("22:"+$(document).scrollTop());
//
//             //加载更多数据
//             loading.data("on",false).fadeIn(4000);
//             (function(sqlJson){
//                 console.log(sqlJson.length)
//                 /*这里会根据后台返回的数据来判断是否你进行分页或者数据加载完毕这里假设大于30就不在加载数据*/
//                 if(itemNum>parseInt(sqlJson.length)){
//                     console.log("sqlJson.length",sqlJson.length)
//                     loading.text('就有这么多了！');
//                 }else
//                 {
//                     console.log(item++);
//
//                     var waterfull = document.getElementById("waterfull").innerHTML;
//                     waterfull="";
//                     for(var i in sqlJson){
//                         waterfull+="<div class='col-lg-2 col-md-3 col-sm-2 visaimg item'>" +
//                                     "<img src="+sqlJson[i].v_imgSrc+" alt=''>" +
//                                     "<div class='imgBotttom'>" +
//                                         "<div>"+
//                                             "<a href='/LCF_visaDetails?id="+sqlJson[i].id+"'>"+sqlJson[i].c_countryname+'个人旅游签证（'+sqlJson[i].vp_place+'办理）'+
//                                             "</a>"+
//                                         "</div>" +
//                                     "<p>"+sqlJson[i].v_price+'/人起'+"</p>"+
//                                     "<div class='imgBotttomCircle'>" +
//                                         "<img src="+sqlJson[i].v_imgLogo+" alt=''>" +
//                                     "</div>" +
//                                 "</div>" +
//                             "</div>";
//                     }
//                     /*模拟ajax请求数据时延时800毫秒*/
//                     var time=setTimeout(function(){
//
//                         $(waterfull).find('img').each(function(index){
//                             loadImage($(this).attr('src'));
//                         });
//                         var $newElems = $(waterfull).css({ opacity: 0}).appendTo(container);
//                         console.log($newElems);
//                         $newElems.imagesLoaded(function(){
//                             $newElems.animate({ opacity: 1},1000);
//                             container.masonry( 'appended', $newElems,true);
//                             loading.data("on",true).fadeOut();
//                             clearTimeout(time);
//                         });
//                     },1000)
//                 }
//             })(sqlJson);
//         }
//     });
// });








