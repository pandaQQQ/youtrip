
function p(s) {
    return s < 10 ? '0' + s: s;
}

var myDate = new Date();
//获取当前年
var year=myDate.getFullYear();
//获取当前月
var month=myDate.getMonth()+1;
//获取当前日
var date=myDate.getDate();
var enYear=year;
var enMonth=month+2;
var enDate=date;



if(enMonth>12){
    enYear=year+1;
}else {
    enYear=year;
}
if(enMonth==1||enDate>=28){
    enDate=28
}else {
    enDate=date
}
var now=year+'-'+p(month)+"-"+p(date);
var now2=enYear+'-'+p(enMonth)+"-"+p(enDate);


$('.form_datetime').datetimepicker({
    format: "yyyy-mm-dd",//时间显示格式
    language: 'zh-CN',//中文，需要引用zh-CN.js包
    weekStart: 0, //一周从哪一天开始
    startDate:now,//获取当前时间
    endDate:now2,
    startView: 2,//首先展示月份
    minView:2,//只显示月份
    todayBtn:  1, //
    forceParse: 0,
    showMeridian: 1
});

//    var eee=$("#dateIn");
//    console.log(eee.val(),22222222);
//    $("#buttonIn").onclick=show();
//    function show() {
//        console.log(eee.val(),"我的input框的值")
//    }
//    weekStart
//    Integer. 默认值：0
//
//    一周从哪一天开始。0（星期日）到6（星期六）
//
//startDate
//    Date. 默认值：开始时间
//
//    endDate
//    Date. 默认值：结束时间
//
//    autoclose
//    Boolean. 默认值：false
//
//    当选择一个日期之后是否立即关闭此日期时间选择器。
//
//startView
//    Number, String. 默认值：2, 'month'
//
//    日期时间选择器打开之后首先显示的视图。 可接受的值：
//
//0 or 'hour' 为小时视图
//    1 or 'day' 为天视图
//    2 or 'month' 为月视图（为默认值）
//3 or 'year'  为年视图
//    4 or 'decade' 为十年视图
//    todayBtn
//    Boolean, "linked". 默认值: false
//
//    如果此值为true 或 "linked"，则在日期时间选择器组件的底部显示一个 "Today" 按钮用以选择当前日期。如果是true的话，"Today" 按钮仅仅将视图转到当天的日期，如果是"linked"，当天日期将会被选中。
//
//todayHighlight
//    Boolean. 默认值: false
//
//    如果为true, 高亮当前日期。
//
//keyboardNavigation
//    Boolean. 默认值: true
//
//    是否允许通过方向键改变日期。
//
//日期时间选择器提供了键盘导航：
//
//up, down, left, right 方向键
//    这些方向键中，left/right 向后/向前 一天，up/down 向后/向前 一周。
//
//配合shift键，up/left 向后退一个月，down/right 向前进一个月。
//
//配置ctrl键，up/left 向后退一年，down/right 向前进一年。
//
//Shift+ctrl 和 ctrl 同等效果 - 也就是说，他们不能同时改变月和年，只能单独改变年。
//
//language
//    String. 默认值: 'en'； 可以通过导入对应语言的js文件来设置语言
//
//    forceParse
//    Boolean. 默认值: true
//
//    当选择器关闭的时候，是否强制解析输入框中的值。
//
// 方法：
//
//    .datetimepicker(options)
//    初始化日期时间选择器。
//
//remove
//    参数: None
//
//    移除日期时间选择器。同时移除已经绑定的event、内部绑定的对象和HTML元素。
//
//$('#datetimepicker').datetimepicker('remove');
//    show
//    参数: None
//
//    显示日期时间选择器。
//
//$('#datetimepicker').datetimepicker('show');
//    hide
//    参数: None
//
//    隐藏日期时间选择器。
//
//$('#datetimepicker').datetimepicker('hide');
//    update
//    参数: None
//
//    使用当前输入框中的值更新日期时间选择器。
//
//$('#datetimepicker').datetimepicker('update');
//    setStartDate
//    参数:
//
//        startDate (String)
//    给日期时间选择器设置一个新的起始日期。
//
//$('#datetimepicker').datetimepicker('setStartDate', '2012-01-01');
//    setEndDate
//    参数:
//
//        endDate (String)
//    给日期时间选择器设置结束日期。
//
//$('#datetimepicker').datetimepicker('setEndDate', '2012-01-01');

