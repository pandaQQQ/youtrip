
// ----------文字路径---------

//选择元素
var el = document.querySelector('.text');

//每个选项可以定义为单个也可以定义为数组
var options = {
    size: 50,         // 字体大小，决定文字的高度，px
    weight: 2,         // 粗体，px
    rounded: false,    // 字母结尾圆角
    color: ['#2CCA90','#2CCA90'],  // 字体颜色
    duration: 1,       // 每个字母的动画展示时长 (seconds)
    delay: [0, 0.1],  // 每个字母间的动画延时
    fade: 0.5,         // 渐显效果的时长(seconds)
    easing: d3_ease.easeCubicInOut.ease,   // 缓冲动画效果
    individualDelays: false     // 默认false，如果设置成false，则动画效果会从左到右过度展示，如果是true，字母动画效果是同步展示
};
var myText = new Letters(el, options);
myText.show();

//--------------------客户案例详情页--------------------
function caseMsg(msg){
    window.location.href='/case.do?id='+msg;
    console.log(window.location.href)
}

