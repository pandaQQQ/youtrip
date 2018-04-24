/**
 * Created by xr on 2018/1/28.
 */


function xr_zhuce(){
    var xr_chuce=$(".xr_input").eq(0).val()
    var xr_zhucezhengzhe=/^1[3|4|5|8|7][0-9]\d{8}$/
    var a=xr_zhucezhengzhe.test(xr_chuce)
    var xr_email=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    var b=xr_email.test(xr_chuce)
    var xr_password=$(".xr_input ").eq(1).val()
    var xr_yanzhen= /^[A-Za-z0-9]{6,}$/
    var c=xr_yanzhen.test(xr_password)
    var my_othername="会员"+Math.floor(Math.random () * 100) + 100;
    var xr_newpassword=$(".xr_input").eq(2).val()
    if(xr_password==xr_newpassword&&(a||b)&&c){
        document.getElementsByClassName("xr_spannn")[0].innerHTML=""
        document.getElementsByClassName("xr_spannn")[1].innerHTML=""
        document.getElementsByClassName("xr_spannn")[2].innerHTML=""
        ajax("post","/register.do","my_othername="+my_othername+"&xr_username="+xr_chuce+"&xr_password="+xr_password+"&xr_newpassword="+xr_password,function(){
            var data=JSON.parse(xhr.responseText)
            if(data.length>0){
                document.getElementsByClassName("xr_spannn")[0].innerHTML="账户名已存在！"
            }else{
                location.href="/login"
            }
        })
    }else{
        if(a||b){
        document.getElementsByClassName("xr_spannn")[0].innerHTML=""
        }else{
            document.getElementsByClassName("xr_spannn")[0].innerHTML="账户输入错误！"
        };
        if(c){
            document.getElementsByClassName("xr_spannn")[1].innerHTML=""
        }else{
            document.getElementsByClassName("xr_spannn")[1].innerHTML="密码输入错误！"
        }
        if(xr_password==xr_newpassword){
            document.getElementsByClassName("xr_spannn")[2].innerHTML=""
        }else{
            document.getElementsByClassName("xr_spannn")[2].innerHTML="密码输入不一致！"
        }
    }
}
