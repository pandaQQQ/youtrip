/**
 * Created by xr on 2018/1/27.
 */
var s    /*验证码计时*/
var b;
function  xr_searchyaniphone(){
    $.ajax({
        url:"/xr_searchyaniphone.do",
        type:"POST",
        data:{
           myphone:$(".xr_input").eq(0).val(),
        },
        success:function(data){
            console.log(data.length)
           if(data.length>0){
               $(".xr_spancolor").eq(0).html("")
               xr_searchyanzhengma()
           }else{
               $(".xr_spancolor").eq(0).html("账号输入错误！")
           }
        }
    })
}
function xr_searchyanzhengma() {
    $.ajax({
        url:"/sendCode.do",
        type:"POST",
        data:{
            phone:$(".xr_input").eq(0).val()
        },
        success:function(data){
            console.log(data)
        }
    })
    s=60;/*设置定时时间*/
    //点击获取验证码
    $(".xr_sendyanzhengma").css("display", "none");
    //验证码计时
    $(".xt_inputmargintop1").css("opacity", "1");
    if(s<10){
        $("#xr_addzero").html(0)
    }
    $("#xr_miao").html(s)
    b=setInterval(xt_yanzhngma,1000)
}
function xt_yanzhngma(){
    s=s-1;
    if(s>-1){
        if(s<10){
            $("#xr_addzero").html(0)
        }
        $("#xr_miao").html(s)
        //判断定时时间和验证码是否正确
    }else if(s==-1){
        clearInterval(b);
        $(".xr_sendyanzhengma").css("display", "inline");
        //验证码计时
        $(".xt_inputmargintop1").css("opacity", "0");
        $("#xr_addzero").html("")
    }
}
var myphone =$(".xr_input").eq(0).val();
console.log(myphone)
    $(".xr_denluziti").click(function(){
        var myphone =$(".xr_input").eq(0).val();
        console.log(myphone)
        if(s>0){
            clearInterval(b);
            $(".xr_sendyanzhengma").css("display", "inline");
            //验证码计时
            $(".xt_inputmargintop1").css("opacity", "0");
            $("#xr_addzero").html("")
            $.ajax({
                url:"/yanzhrengCode.do",
                type:"POST",
                data:{
                    phone:$(".xr_input").eq(0).val(),
                    code:$(".xr_inputone").eq(0).val()
                },
                success:function(data){
                    location.href='xr_newwpassword.html?phone='+myphone
                }
            })
        }
    })


