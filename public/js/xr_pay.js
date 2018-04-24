/**
 * Created by xr on 2018/1/23.
 */
var xr_secons,xr_mites,xr_hour,m,s,h;
   h=0;
   m=1;
   s=10;
 window.onload=function(){
        xr_dingshimiao()
        xr_dingshifen()
        xr_jiafne()
        xr_hour1()
        xr_dingdanmingcheng()
    }
function xr_hour1(){
    xr_hour=parseInt(h);
    $("#xr_hour").html(xr_hour)
    if(xr_hour<10){
        $(".xr_addhourzero").html(0)
    }else{ $(".xr_addhourzero").html("")}
}
function xr_jiafne(){
    $("#xr_milits").html(xr_mites)
    $("#xr_sections").html(xr_secons)
}
function xr_dingshimiao(){
    xr_secons=parseInt(s);

}
function xr_dingshifen(){
    xr_mites=parseInt(m)
    if(xr_mites<10){
        $(".xr_addmitzero").html(0)
    }else{$(".xr_addmitzero").html("")
    }
}

var b=setInterval(xr_time,1000)
function xr_time(){
    xr_secons=xr_secons-1;
    if(xr_secons<10){
        $(".xr_addsenzero").html(0)
    }else{$(".xr_addsenzero").html("")}

    $("#xr_sections").html(xr_secons)


    if(xr_secons==0){

        xr_mites=xr_mites-1;
        if(xr_mites<10){
            $(".xr_addmitzero").html(0)
        }else{$(".xr_addmitzero").html("")
        }
        if(xr_mites>-1){
            $("#xr_milits").html(xr_mites)
        }
        if(xr_secons==0&&xr_mites==-1){
            clearInterval(b);
            location.href="xr_personmesg"
        }else{
            s=parseInt(60)
            xr_dingshimiao()
        }

    }
}
var bianhao1,a
function xr_dingdanmingcheng(){
     bianhao1=location.href.split("?")[1].split("&")[0].split("=")[1]
     a=location.href.split("&")[1].split("=")[1]
    $("#dingdanbianhao").html(bianhao1)
    $("#my_money").html(a)
}

//确认支付
$(".xr_spanpay").click(
    function (){
        ajax("post","/aleader.do","bianhao1="+bianhao1,function(){

        })
        var b=location.href.split("?")[1]
        location.href="xr_personmesg?id="+bianhao1
    }
)





$(".xr_quxiao").click(function(){
    $(".xr_xuanzhong").css("display","inline-block");
    $(".xr_xuanzhong1").css("display","none")

})
$(".xr_quxiao1").click(function(){
    $(".xr_xuanzhong").css("display","none");
    $(".xr_xuanzhong1").css("display","inline-block")
})