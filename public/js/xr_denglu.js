/**
 * Created by xr on 2018/1/28.
 */
var xr_user,xr_password
function xr_forgetpassword(){
    location.href="../pages/xr_forgermima.html"
}
function xr_lijizhuce(){

   location.href="/login"
}
function xr_lijidenlu(){
   var xr_phone= /^1[3|4|5|8][0-9]\d{8}$/
    var xr_emali=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    var xr_seapassword=/^[A-Za-z0-9]{6,}$/
    xr_user=$(".xr_input").eq(0).val()
    xr_password=$(".xr_input").eq(1).val()
    var a=xr_phone.test(xr_user)
    var b=xr_emali.test(xr_user)
    var c=xr_seapassword.test(xr_password)
    if((a||b)&&c){
        document.getElementById("xr_mistakemeg").innerHTML="";
        document.getElementById("xr_mistakepass").innerHTML="";
      ajax("post","/search.do","xr_user="+xr_user+"&xr_password="+xr_password,function(){
            var newdata=JSON.parse(xhr.responseText);
            if(newdata.length>0){
                location.href="xr_personmesg?id="+newdata[0].id
            }
        })

    }else{

        if(a||b){

            document.getElementById("xr_mistakemeg").innerHTML=""

        }else{
            console.log(1111)
            document.getElementById("xr_mistakemeg").innerHTML="账户输入错误！"
            console.log(document.getElementsByClassName("xr_input")[0])
        }
        if(c){
            document.getElementById("xr_mistakepass").innerHTML=""
        }else{
            document.getElementById("xr_mistakepass").innerHTML="密码输入错误！"
        }
    }
}

