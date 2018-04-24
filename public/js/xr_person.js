var m, ssurl
var sUrl=location.href
window.onload=function(){
    personmesg() ;
    seaarchname();
    personcentermes()
}
function seaarchname(){
    ssurl=sUrl.split('=')[1]
    ajax("get","/xr_seachid.do","ssUrl="+ssurl,function(data){
        var data=JSON.parse(xhr.responseText);
        document.getElementById("xr_huiyuan").innerHTML=data[0].t_nickname;
    })
}
//注销
//点击个人信息
function personmesg(){
    //我的签证字体
    $(".xr_newzitia").eq(4).css("color","black")
    //全部签证
    $(".xr_rightcontent3").css("display","none")
    //我的评价
    $(".xr_rightcontent2").css("display","none")
    //密码
    $(".xrmima").css("display","none")
    /*订单隐藏*/
    $(".xr_rightcontent").css("display","none")
    /*取消订单*/
    $(".xr_fivefive").css("display","none")
    /*带出行*/
    $(".xr_fourfour").css("display","none")
    /*代付款*/
    $(".xr_throwthrow").css("display","none")
    /*已付款*/
    $(".xr_sectiontwotwo").css("display","none")
    /*全部订单*/
    $(".xr_sectiontwo").css("display","none")
    /*我的收藏*/
    $(".xr_rightcontent1").css("display","none")
    /*个人信息*/
    $(".xr_position").css("display","inline-block")
    //    个人信息字体
    $(".xr_newzitia").eq(0).css("color","#a79865")
  //基本信息字体
   $("#xr_jibenxinxi").css("color","#a79865")
    //选中县
    $("#xr_xiahua1").css("left","27.5%")
   // 密码修改字体
    $("#xr_mimaxiugai").css("color","black")
   //我的订单ziti
    $(".xr_newzitia").eq(1).css("color","black")
   //我的收藏字体
    $(".xr_newzitia").eq(2).css("color","black")
   //我的评价字体
    $(".xr_newzitia").eq(3).css("color","black")
}
//点击基本信息
function personxinxixianshi(){
    personmesg()
    personcentermes()
}
function personcentermes(){
    $("#xr_name").html($("#xr_huiyuan").html())
    var xr_huiyuan=$('#xr_huiyuan').html()
   ajax("post","/xr_research.do","xr_huiyuan="+xr_huiyuan,function(){
       var newdata=JSON.parse(xhr.responseText)
       $(".xr_nicheninput").eq(0).val(newdata[0].t_nickname)
       $(".xr_nicheninput").eq(1).val(newdata[0].t_name)
       $(".xr_nicheninput").eq(2).val(newdata[0].username)
       $(".xr_nicheninput").eq(3).val(newdata[0].t_mail)
       $("input:radio[name='inlineRadioOptions'][value="+newdata[0].t_sex+"]").attr('checked','true');
   })
}
//点击密码
function xr_mima(){
    $("#xr_jibenxinxi").css("color","black")
    document.getElementById("xr_xiahua1").style.transition="left 0.3s"
    $("#xr_mimaxiugai").css("color","#a79865")
    //选中县
    $("#xr_xiahua1").css("left","57.5%")
    $(".xrmima").eq(0).css("display","inline-block")
}
//点击我的订单
function xr_dingdan(){
    //我的签证字体
    $(".xr_newzitia").eq(4).css("color","black")
    //全部签证
    $(".xr_rightcontent3").css("display","none")
    //我的评价
    $(".xr_rightcontent2").css("display","none")
    /*订单隐藏*/
    $(".xr_rightcontent").css("display","inline-block")
    /*取消订单*/
    $(".xr_fivefive").eq(0).css("display","none")
    /*带出行*/
    $(".xr_fourfour").eq(0).css("display","none")
    /*代付款*/
    $(".xr_throwthrow").eq(0).css("display","none")
    /*已付款*/
    $(".xr_sectiontwotwo").eq(0).css("display","none")
    /*全部订单*/
    $(".xr_sectiontwo").eq(0).css("display","inline-block")
    /*我的收藏*/
    $(".xr_rightcontent1").eq(0).css("display","none")
    /*个人信息*/
    $(".xr_position").eq(0).css("display","none")
    //    个人信息字体
    $(".xr_newzitia").eq(0).css("color","black")
    //我的订单ziti
    $(".xr_newzitia").eq(1).css("color","#a79865")
//我的收藏字体
    $(".xr_newzitia").eq(2).css("color","black")
//    我的评价字体
    $(".xr_newzitia").eq(3).css("color","black")
//    全部订单字体
    $("#xr_all").css("color","#a79865")
//    已付款字体
    $("#xr_payfor").css("color","black")
//    代付款
    document.getElementById("xr_xuanzhongxian").style.transition="left 0.3s"
    $("#xr_nopay").css("color","black")
//    带出行
    $("#xr_nogo").css("color","black")
//    已取消
    $("#xr_close").css("color","black")
//   选中线
    $("#xr_xuanzhongxian").css("left","11%")
    searchall()
    xr_allsearch(1)
}

//点击全部订单
function xr_alldindan(){
    xr_dingdan()
    searchall()
    xr_allsearch(1)
}
//插寻全部订单页码
var maxallsearch,nowpagetem
function searchall(){
    ssurl=sUrl.split('=')[1]
    ajax("get","/searchall.do","ssurl="+ssurl,function(){
    var newdata=JSON.parse(xhr.responseText)
        maxallsearch=newdata.page;
        $(".xr_yema").remove()
        for(var i=1;i<=newdata.page;i++){
            $(".allsearchymleft").eq(0).before(
                "<div class='xr_anniu1 xr_anniucolor xr_anniuziticolor xr_yema' onclick='xr_allsearch("+i+")'>"+i+"</div>"
            )
        }
    })
}
function xr_allsearch(m){
    ajax("post","/searchallshuju.do","allshuju="+m,function(){
        var newdata=JSON.parse(xhr.responseText)
        console.log(newdata.length)
        $(".xr_yyyy").remove()
        for(var i=0;i<newdata.length;i++){
            if( newdata[i].s_name.length>5){
                var s=newdata[i].s_name.substring(0,2)+"..."
            }
            if( newdata[i].or_stateName=="已出行"||newdata[i].or_stateName=="已退款") {
                $(".xr_anniuuuu").eq(0).before(
                "<div class='xr_yyyy'>"+
                "<div class='xr_sectiontwo1 xr_margin'>"+
                "<div class='xr_sectiontwo1header'>"+
                "</div>"+
                "<div class='xr_sectiontherr'>"+
                "<div class='xr_sectiontherrone'>"+
                "<div class='row text-center'>"+
                "<div class='col-xs-2'>"+
                "订单号"+
                "</div>"+
                "<div class='col-xs-2'>"+
                "产品名称"+
                "</div>"+
                "<div class='col-xs-2'>"+
                "出行日期"+
                "</div>"+
                "<div class='col-xs-2'>"+
                "支付金额"+
                "</div>"+
                "<div class='col-xs-2 '>"+
                "状态"+
                "</div>"+
                "<div class='col-xs-2'>"+
                "操作"+
                "</div>"+
                "</div>"+
                "</div>"+
                "</div>"+
                "<div class='xr_sectionfour'>"+
                "<div class='row text-center xr_divxrpadding'>"+
                "<div class='col-xs-2'>"+
                newdata[i].or_num+
                "</div>"+
                "<div class='col-xs-2 xr_imge'>"+
                s+
                '</div>'+
                "<div class='col-xs-2' style='overflow: hidden'>"+
                newdata[i].or_startDate.split("T")[0].split("-")[0]+"."+
                newdata[i].or_startDate.split("T")[0].split("-")[1]+"."+
                newdata[i].or_startDate.split("T")[0].split("-")[2]+
                "</div>"+
                "<div class='col-xs-2' style='color: red'>"+
                "￥"+ newdata[i].s_price+
                "</div>"+
                "<div class='col-xs-2'>"+
                newdata[i].or_stateName+
                "</div>"+
                "<div class='col-xs-2'>"+
                "<div onclick='lookxiangqing()'>"+
                "查看详情"+
                "</div>"+
                "</div>"+
                "</div>"+
                "</div>"+
                "</div>"
               )
            }else{
                if( newdata[i].or_stateName=="去支付"){
                    $(".xr_anniuuuu").eq(0).before(
                        "<div class='xr_yyyy'>"+
                    "<div class='xr_sectiontwo1 xr_margin'>"+
                        "<div class='xr_sectiontwo1header'>"+
                        "</div>"+
                        "<div class='xr_sectiontherr'>"+
                        "<div class='xr_sectiontherrone'>"+
                        "<div class='row text-center'>"+
                        "<div class='col-xs-2'>"+
                        "订单号"+
                       "</div>"+
                        "<div class='col-xs-2'>"+
                        "产品名称"+
                        "</div>"+
                        "<div class='col-xs-2'>"+
                        "出行日期"+
                        "</div>"+
                       "<div class='col-xs-2'>"+
                        "支付金额"+
                       "</div>"+
                        "<div class='col-xs-2'>"+
                        "状态"+
                        "</div>"+
                        "<div class='col-xs-2'>"+
                        "操作"+
                        "</div>"+
                        "</div>"+
                        "</div>"+
                        "</div>"+
                        "<div class='xr_sectionfour'>"+
                        "<div class='row text-center xr_divxrpadding'>"+
                        "<div class='col-xs-2'>"+
                        newdata[i].or_num+
                       "</div>"+
                        "<div class='col-xs-2 xr_imge'>"+
                        s+
                        "</div>"+
                        "<div class='col-xs-2' style='overflow: hidden'>"+
                        newdata[i].or_startDate.split("T")[0].split("-")[0]+"."+
                        newdata[i].or_startDate.split("T")[0].split("-")[1]+"."+
                        newdata[i].or_startDate.split("T")[0].split("-")[2]+
                    "</div>"+
                    "<div class='col-xs-2' style='color: red'>"+
                        "￥"+ newdata[i].s_price+
                    "</div>"+
                    "<div class='col-xs-2'>"+
                        "待支付"+
                        "</div>"+
                        "<div class='col-xs-2'>"+
                        "<span class='xr_span' onclick='xr_pay(this)'>"+
                        newdata[i].or_stateName+
                    "</span>"+
                        "</div>"+
                        "</div>"+
                        "</div>"+
                        "<div class='xr_quxiaodingdan1'>"+
                        "<div class='row xr_quxiaodingdan xr_quxiaodingdanziti'>"+
                        "<div class='col-xs-3 col-xs-offset-9 text-right'>"+
                        "<span onclick='lookxiangqing()'>"+
                        "查看详情"+
                    "</span>"+
                        "&nbsp;"+
                "<span>"+
                    "取消订单"+
                    "</span>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                    "</div>"

                    )
                }else{
                    $(".xr_anniuuuu").eq(0).before(

                        "<div class='xr_yyyy'>"+
                        "<div class='xr_sectiontwo1 xr_margin'>"+

                        "<div class='xr_sectiontwo1header'>"+
                            "</div>"+

                        "<div class='xr_sectiontherr'>"+
                        "<div class='xr_sectiontherrone'>"+
                        "<div class='row text-center'>"+
                        "<div class='col-xs-2'>"+
                        "订单号"+
                        "</div>"+
                        "<div class='col-xs-2'>"+
                        "产品名称"+
                        "</div>"+
                        "<div class='col-xs-2'>"+
                        "出行日期"+
                        "</div>"+
                       "<div class='col-xs-2'>"+
                        "支付金额"+

                        "</div>"+
                        "<div class='col-xs-2'>"+
                        "状态"+
                        "</div>"+

                        "<div class='col-xs-2'>"+
                        "操作"+
                        "</div>"+

                        "</div>"+
                        "</div>"+

                        "</div>"+

                       "<div class='xr_sectionfour'>"+
                        "<div class='row text-center xr_divxrpadding'>"+
                        "<div class='col-xs-2'>"+
                        newdata[i].or_num+
                        "</div>"+
                        "<div class='col-xs-2 xr_imge'>"+
                       s+
                        "</div>"+
                        "<div class='col-xs-2' style='overflow: hidden'>"+
                        newdata[i].or_startDate.split("T")[0].split("-")[0]+"."+
                        newdata[i].or_startDate.split("T")[0].split("-")[1]+"."+
                        newdata[i].or_startDate.split("T")[0].split("-")[2]+
                        "</div>"+
                        "<div class='col-xs-2' style='color: red'>"+
                        "￥"+ newdata[i].s_price+
                    "</div>"+
                        "<div class='col-xs-2'>"+
                        newdata[i].or_stateName+
                        "</div>"+
                    "<div class='col-xs-2'>"+
                        "<span>"+
                        "退款"+
                        "</span>"+
                        "&nbsp;"+
                "<span onclick='lookxiangqing()'>"+
                    "详情"+
                    "</span>"+
                    "</div>"+
                        "</div>"+
                        "</div>"+
                        "<div class='xr_quxiaodingdan'>"+
                        "</div>"+
                        "</div>"+

                        "</div>"
                    )
                }
            }
        }
    })
    nowpagetem=m
}
//全部订单上一页
function allserpre(){
    if(nowpagetem>1){
        xr_allsearch(nowpagetem-1)
    }
}
//全部订单下一页
function allsernex(){
    if(nowpagetem<maxallsearch){
        xr_allsearch(nowpagetem+1)
    }
}
//点击已出行
var alredygomaxpage,alredygonowpage
function xr_payfor(){
    document.getElementById("xr_xuanzhongxian").style.transition="left 0.3s"
    /*取消订单*/
    $(".xr_fivefive").eq(0).css("display","none")
    /*带出行*/
    $(".xr_fourfour").eq(0).css("display","none")
    /*代付款*/
    $(".xr_throwthrow").eq(0).css("display","none")
    /*已付款*/
    $(".xr_sectiontwotwo").eq(0).css("display","inline-block")
    /*全部订单*/
    $(".xr_sectiontwo").eq(0).css("display","none")
    //全部订单字体
    $("#xr_all").css("color","black")
//    已付款字体
    $("#xr_payfor").css("color","#a79865")
//    代付款
    $("#xr_nopay").css("color","black")
//    带出行
    $("#xr_nogo").css("color","black")
//    已取消
    $("#xr_close").css("color","black")
//   选中线
    $("#xr_xuanzhongxian").css("left","27.5%")
    ssurl=sUrl.split('=')[1]
    ajax("post","/searchalredygo.do","ssurl="+ssurl,function(){
        var newdata=JSON.parse(xhr.responseText);
        alredygomaxpage=newdata.page
        $(".xrrrr").remove()
        console.log("就是他+"+newdata.page)
        for(var i=1;i<=newdata.page;i++){
            $(".xr_anniuxrleft").before(
            "<div class='xr_anniu1 xr_anniucolor xr_anniuziticolor xrrrr' onclick='searchaao("+i+")'>"+i+
            "</div>"
            )
        }
    });
    searchaao(1)
}
function searchaao(m){
 ajax("post","/searchalredygoshuju.do","alredygo="+m,function(){
     var newdata=JSON.parse(xhr.responseText);
     $(".xr_gogo").remove();
    for(var i=0;i<newdata.length;i++){
    if( newdata[i].s_name.length>5){
        var s=newdata[i].s_name.substring(0,2)+"..."
    }
    $(".xr_anniuxr").eq(0).before(
        "<div class='xr_gogo'>"+
        "<div class='xr_sectiontwo1 xr_margin'>"+
        "<div class='xr_sectiontwo1header'>"+
        "</div>"+
        "<div class='xr_sectiontherr'>"+
        "<div class='xr_sectiontherrone'>"+
        "<div class='row text-center'>"+
        "<div class='col-xs-2'>"+
        "订单号"+
        "</div>"+
        "<div class='col-xs-2'>"+
        "产品名称"+
        "</div>"+
        "<div class='col-xs-2'>"+
        "出行日期"+
        "</div>"+
        "<div class='col-xs-2'>"+
        "支付金额"+
        "</div>"+
        "<div class='col-xs-2'>"+
        "状态"+
        "</div>"+
        "<div class='col-xs-2'>"+
        "操作"+
        "</div>"+
        "</div>"+
        "</div>"+
        "</div>"+
        "<div class='xr_sectionfour'>"+
        "<div class='row text-center xr_divxrpadding' >"+
        "<div class='col-xs-2'>"+
        newdata[i].or_num+
        "</div>"+
        "<div class='col-xs-2 xr_imge'>"+
        s+
        "</div>"+
        "<div class='col-xs-2' style='overflow: hidden'>"+
        newdata[i].or_startDate.split("T")[0].split("-")[0]+"."+
        newdata[i].or_startDate.split("T")[0].split("-")[1]+"."+
        newdata[i].or_startDate.split("T")[0].split("-")[2]+
    "</div>"+
    "<div class='col-xs-2' style='color: red'>"+
        "￥"+newdata[i].s_price+
    "</div>"+
    "<div class='col-xs-2'>"+
       newdata[i].or_stateName+
        "</div>"+
        "<div class='col-xs-2'>"+
        "<div onclick='lookxiangqing()'>"+
        "查看详情"+
        "</div>"+
        "</div>"+
        "</div>"+
        "</div>"+
        "</div>"+
        "</div>"
    )
}
 })
    alredygonowpage=m
}
//上一页
function pre(){
    if(alredygonowpage>1){
        searchaao(alredygonowpage-1)
} }
//下一页
function nex(){
    if(alredygonowpage<alredygomaxpage){
        searchaao(alredygonowpage+1)
    }
}

//点击代付款
function xr_nopay(){
    document.getElementById("xr_xuanzhongxian").style.transition="left 0.3s"
    /*取消订单*/
    $(".xr_fivefive").eq(0).css("display","none")
    /*带出行*/
    $(".xr_fourfour").eq(0).css("display","none")
    /*代付款*/
    $(".xr_throwthrow").eq(0).css("display","inline-block")
    /*已付款*/
    $(".xr_sectiontwotwo").eq(0).css("display","none")
    /*全部订单*/
    $(".xr_sectiontwo").eq(0).css("display","none")
    //全部订单字体
    $("#xr_all").css("color","black")
//    已付款字体
    $("#xr_payfor").css("color","black")
//    代付款

    $("#xr_nopay").css("color","#a79865")
//    带出行
    $("#xr_nogo").css("color","black")
//    已取消
    $("#xr_close").css("color","black")
//   选中线
    $("#xr_xuanzhongxian").css("left","44%")
    nopage()
    nopayshuju(1)
}
//代付款页码查询
var nopayagemax,nopayagenow
function nopage(){
    ajax("post","/nopayage.do",null,function(){
        var newdata=JSON.parse(xhr.responseText)
        nopayagemax=newdata.page
        $(".xr_rrrrxx").remove()
        for(var i=1;i<=newdata.page;i++){
            $(".xr_xxxxxx").eq(0).before(
            "<div class='xr_anniu1 xr_anniucolor xr_anniuziticolor xr_rrrrxx' onclick='nopayshuju("+i+")'>"+
            i+
                "</div>"
            )
        }
    })
}
function nopayshuju(m){
    ajax("post","/nopayshuju.do","nopayshuju="+m,function(){
        var newdata=JSON.parse(xhr.responseText)
        $(".xr_noapayclear").remove()
        for(var i=0;i<newdata.length;i++){
            if( newdata[i].s_name.length>5){
                var s=newdata[i].s_name.substring(0,2)+"..."
            }
            $(".xr_nopayadd").eq(0).before(
                "<div class='xr_noapayclear'>"+
            "<div class='xr_sectiontwo1 xr_margin'>"+

                "<div class='xr_sectiontwo1header'>"+

                "</div>"+

                "<div class='xr_sectiontherr'>"+
                "<div class='xr_sectiontherrone'>"+
                "<div class='row text-center'>"+
                "<div class='col-xs-2'>"+
                "订单号"+
                "</div>"+
                "<div class='col-xs-2'>"+
                "产品名称"+
                "</div>"+
                "<div class='col-xs-2'>"+
                "出行日期"+
                "</div>"+
                "<div class='col-xs-2'>"+
                "支付金额"+
                "</div>"+
                "<div class='col-xs-2'>"+
                "状态"+
               "</div>"+
                "<div class='col-xs-2'>"+
                "操作"+
                "</div>"+
                "</div>"+
               "</div>"+

               "</div>"+

                "<div class='xr_sectionfour'>"+
                "<div class='row text-center xr_divxrpadding'>"+
                "<div class='col-xs-2'>"+
                newdata[i].or_num+
                "</div>"+
                "<div class='col-xs-2 xr_imge'>"+
               s+
                "</div>"+
                "<div class='col-xs-2' style='overflow:hidden'>"+
                newdata[i].or_startDate.split("T")[0].split("-")[0]+"."+
                newdata[i].or_startDate.split("T")[0].split("-")[1]+"."+
                newdata[i].or_startDate.split("T")[0].split("-")[2]+
            "</div>"+
            "<div class='col-xs-2' style='color:red'>"+
                "￥"+ newdata[i].s_price+
            "</div>"+
            "<div class='col-xs-2'>"+
               "待支付"+
                "</div>"+
                "<div class='col-xs-2'>"+
                "<span class='xr_span' onclick='xr_pay(this)'>"+
                "去支付"+
                "</span>"+

                "</div>"+
                "</div>"+

                "</div>"+

                "<div class='xr_quxiaodingdan1'>"+
                "<div class='row xr_quxiaodingdan xr_quxiaodingdanziti'>"+

                "<div class='col-xs-3 col-xs-offset-9 text-right'>"+
                "<span onclick='lookxiangqing(this)'>"+
                "查看详情"+
                "</span>"+
                "&nbsp"+
        "<span onclick='quxiaodingdan(this)'>"+
            "取消订单"+
            "</span>"+
            "</div>"+
            "</div>"+
            "</div>"+
            "</div>"+
                    "</div>"
            )

        }
    })
    nopayagenow=m
}
function quxiaodingdan(obj){
   var quxioao=$(obj).parents().parents().parents().prev().children().eq(0).children().eq(0).html()
    console.log("这是祛痘小订单的"+quxioao)
    ajax("post","/quxiaodingdan.do","quxiao="+quxioao,function(){
    })
    nopage()
    nopayshuju(1)
}

function xr_pay(obj){
var child=$(obj).parents().parents().children().eq(0).html()
    var xr_price=$(obj).parents().parents().children().eq(3).html()
    var a=location.href.split("=")[1]
    location.href="xr_payfor.html?"+child+xr_price+"id"+a
}
//上一页
function  nopayprepage(){
    console.log("这是上一页得治"+nopayagenow)
    if(nopayagenow>1){
        nopayshuju(nopayagenow-1)
    }
}
//下一页
function  nopaynexpage(){
    console.log("这是下一页得治"+nopayagemax)
    if(nopayagenow<nopayagemax){
        nopayshuju(nopayagemax+1)
    }
}
//点击待出行
function xr_nogo(){
    document.getElementById("xr_xuanzhongxian").style.transition="left 0.3s"
    /*取消订单*/
    $(".xr_fivefive").eq(0).css("display","none")
    /*带出行*/
    $(".xr_fourfour").eq(0).css("display","inline-block")
    /*代付款*/
    $(".xr_throwthrow").eq(0).css("display","none")
    /*已付款*/
    $(".xr_sectiontwotwo").eq(0).css("display","none")
    /*全部订单*/
    $(".xr_sectiontwo").eq(0).css("display","none")
    //全部订单字体
    $("#xr_all").css("color","black")
//    已付款字体
    $("#xr_payfor").css("color","black")
//    代付款字体

    $("#xr_nopay").css("color","black")
//    带出行
    $("#xr_nogo").css("color","#a79865")
//    已取消
    $("#xr_close").css("color","black")
//   选中线
    $("#xr_xuanzhongxian").css("left","60%")
    nogopage()
    nogoshuju(1)
}
//详细信息
var nogaopagemax,nownogopage
function nogopage(){
    ajax("post","/nogopage.do",null,function(){
        var newdata=JSON.parse(xhr.responseText)
        nogaopagemax=newdata.page
        $(".nopaypage").remove()
        for(var i=1;i<=newdata.page;i++){
           $(".xr_nogopage").eq(0).before(
            "<div class='xr_anniu1 xr_anniucolor1 nopaypage' onclick='nogoshuju("+i+")'>"+
                +i+
                "</div>"
            )
        }
    })
}

//查看详情
var xiangqingobj
function lookxiangqing(obj){
    var diangdanbianhao=$(obj).parents().parents().parents().prev().children().eq(0).children().eq(0).html()
    console.log("这是详情订单编号="+diangdanbianhao)
    var goname=$(obj).parents().parents().parents().prev().children().eq(0).children().eq(4).html()
    $("#xr_number").html(diangdanbianhao)
    $("#goname").html(goname)
    xiangqingobj=obj
    $(xiangqingobj).parent().parent().parent().parent().parent().parent().css(
        "display","none"
    )
    $(".xr_bigxiangqing").eq(0).css(
        "display","inline-block"
    )
    ajax("post","/diangdanbianhao.do","diangdanbianhao="+diangdanbianhao,function(){
        var newdata=JSON.parse(xhr.responseText)
       for(var i=0;i<newdata.length;i++){
           $("#xr_number").html(diangdanbianhao)
           $("#gotime").html(  newdata[i].or_startDate.split("T")[0].split("-")[0]+"."+
               newdata[i].or_startDate.split("T")[0].split("-")[1]+"."+
               newdata[i].or_startDate.split("T")[0].split("-")[2])
           $("#dingdanname").html(newdata[i].s_name)
           $("#dingdanprice").html("￥"+newdata[i].s_price)
           $("#dingdanzhuangtai").html(goname)
       }
    })
    $(".xr_bigxiangqing").eq(0)
}
function closexiangqing(){
    $(xiangqingobj).parent().parent().parent().parent().parent().parent().css(
        "display","inline-block"
    )
    $(".xr_bigxiangqing").eq(0).css(
        "display","none"
    )
}
function nogoshuju(m){
    $(".nopaypage").eq(m-1).removeClass("xr_anniucolor1").addClass("xr_anniucolor xr_anniuziticolor");
   ajax("post","/nogoshuju.do","nogoshuju="+m,function(){
       var newdata=JSON.parse(xhr.responseText)
           $(".xr_nogoclear").remove()
       for(var i=0;i<newdata.length;i++){
           if( newdata[i].s_name.length>5){
               var s=newdata[i].s_name.substring(0,4)+"..."
           }
           $(".xr_nogoshuju").before(
               "<div class='xr_nogoclear'>"+
           "<div class='xr_sectiontwo1 xr_margin'>"+
               "<div class='xr_sectiontwo1header'>"+
               "</div>"+
              "<div class='xr_sectiontherr'>"+
               "<div class='xr_sectiontherrone'>"+
               "<div class='row text-center'>"+
               "<div class='col-xs-2'>"+
               "订单号"+
               "</div>"+
              "<div class='col-xs-2'>"+
               "产品名称"+
               "</div>"+
               "<div class='col-xs-3'>"+
               "出行日期"+
               "</div>"+
               "<div class='col-xs-3'>"+
              "支付金额"+
               "</div>"+
               "<div class='col-xs-2'>"+
               "操作"+
               "</div>"+
               "</div>"+
               "</div>"+
           "</div>"+
               "<div class='xr_sectionfour'>"+
               "<div class='row text-center xr_divxrpadding'>"+
           "<div class='col-xs-2'>"+
               newdata[i].or_num+
               "</div>"+
               "<div class='col-xs-2 xr_imge'>"+
               s+
               "</div>"+
               "<div class='col-xs-3' style='overflow: hidden'>"+
               newdata[i].or_startDate.split("T")[0].split("-")[0]+"."+
               newdata[i].or_startDate.split("T")[0].split("-")[1]+"."+
               newdata[i].or_startDate.split("T")[0].split("-")[2]+
               "</div>"+
               "<div class='col-xs-3' style='color:red'>"+
               "￥"+ newdata[i].s_price+
           "</div>"+
           "<div class='col-xs-2'>"+
               "<span onclick='zhunbeituikuan(this)' style='cursor: pointer'>"+
           "退款"+
           "</span>"+
           "&nbsp"+
       "<span onclick='lookxiangqing()'>"+
           "详情"+
           "</span>"+
           "</div>"+
           "</div>"+
           "</div>"+
           "<div class='xr_quxiaodingdan'>"+
               "</div>"+
               "</div>"+
               "</div>"
           )
       }
   })
}
//点击以退款
function xr_close(){
    document.getElementById("xr_xuanzhongxian").style.transition="left 0.3s"
    /*取消订单*/
    $(".xr_fivefive").eq(0).css("display","inline-block")
    /*带出行*/
    $(".xr_fourfour").eq(0).css("display","none")
    /*代付款*/
    $(".xr_throwthrow").eq(0).css("display","none")
    /*已付款*/
    $(".xr_sectiontwotwo").eq(0).css("display","none")
    /*全部订单*/
    $(".xr_sectiontwo").eq(0).css("display","none")
    //全部订单字体
    $("#xr_all").css("color","black")
//    已付款字体
    $("#xr_payfor").css("color","black")
//    代付款字体
    $("#xr_nopay").css("color","black")
//    带出行
    $("#xr_nogo").css("color","black")
//    已取消
    $("#xr_close").css("color","#a79865")
//   选中线
    $("#xr_xuanzhongxian").css("left","77%")
    tuikuan()
    yiquxiaoshuju(1)
}
var tuikuanmaxpage,tuikaunnowpage;
function tuikuan(){
    ajax("post","/tuikuan.do",null,function(){
        var newdata=JSON.parse(xhr.responseText)
        tuikuanmaxpage=newdata.page
        $(".xxrrrrr").remove()
        console.log("这是已取消的"+newdata.page)
        for(var i=1;i<=newdata.page;i++){
            $(".xr_wuxiao").before(
            "<div class='xr_anniu1 xr_anniucolor1 xxrrrrr' onclick='yiquxiaoshuju("+i+")'>"+
                i+
               "</div>"
            )
        }
    })
}
function yiquxiaoshuju(m){
    $(".xxrrrrr").eq(m-1).removeClass("xr_anniucolor1").addClass("xr_anniucolor xr_anniuziticolor")
    ajax("post","/yiquxiaoshuju.do","yiquxiaoshuju="+m,function(){
        var newdata=JSON.parse(xhr.responseText)
        $(".xr_yyqqxx").remove();

        for(var i=0;i<newdata.length;i++){
            if( newdata[i].s_name.length>5){
                var s=newdata[i].s_name.substring(0,4)+"..."
            }
            $(".xr_xxyiquxiao").before(
                "<div class='xr_yyqqxx'>"+
            "<div class='xr_sectiontwo1 xr_margin'>"+
                "<div class='xr_sectiontwo1header'>"+
                "</div>"+
                "<div class='xr_sectiontherr'>"+
                "<div class='xr_sectiontherrone'>"+
                "<div class='row text-center'>"+
                "<div class='col-xs-2'>"+
                "订单号"+
                "</div>"+
                "<div class='col-xs-2'>"+
               "产品名称"+
                "</div>"+
                "<div class='col-xs-2'>"+
                "出行日期"+
                "</div>"+
                "<div class='col-xs-2'>"+
                "支付金额"+
                "</div>"+
                "<div class= 'col-xs-2'>"+
                "状态"+
                "</div>"+
                "<div class='col-xs-2'>"+
                "操作"+
                "</div>"+
               "</div>"+
                "</div>"+
                "</div>"+
                "<div class='xr_sectionfour'>"+
                "<div class='row text-center xr_divxrpadding'>"+
                "<div class='col-xs-2'>"+
                newdata[i].or_num+
                "</div>"+
                "<div class='col-xs-2 xr_imge'>"+
               s+
                "</div>"+
                "<div class='col-xs-2'>"+
                newdata[i].or_startDate.split("T")[0].split("-")[0]+"."+
                newdata[i].or_startDate.split("T")[0].split("-")[1]+"."+
                newdata[i].or_startDate.split("T")[0].split("-")[2]+
                "</div>"+
            "<div class='col-xs-2' style='color:red'>"+
                "￥"+ newdata[i].s_price+
            "</div>"+
           "<div class='col-xs-2'>"+
                "已退款"+
                "</div>"+
                "<div class='col-xs-2'>"+
                "<div onclick='lookxiangqing()'>"+
                "查看详情"+
                "</div>"+
                "</div>"+
                "</div>"+
                "</div>"+
                "</div>"
            )
        }
    })
}
//点击收藏
function mysoucang(){
    //我的签证字体
    $(".xr_newzitia").eq(4).css("color","black")
    //全部签证
    $(".xr_rightcontent3").css("display","none")
    //我的评价
    $(".xr_rightcontent2").css("display","none")
    //订单隐藏
    $(".xr_rightcontent").css("display","none")
    /*我的收藏*/
    $(".xr_rightcontent1").eq(0).css("display","inline-block")
    /*个人信息*/
    $(".xr_position").eq(0).css("display","none")
    //    个人信息字体
    $(".xr_newzitia").eq(0).css("color","black")
    //我的订单ziti
    $(".xr_newzitia").eq(1).css("color","black")
//我的收藏字体
    $(".xr_newzitia").eq(2).css("color","#a79865")
//    我的评价字体
    $(".xr_newzitia").eq(3).css("color","black")

//我的搜藏字体
    $("#xr_myshoucang").css("color","#a79865")
    ssurl=sUrl.split('=')[1]
    ajax("post","/collect.do","ssurl="+ssurl,function(){
        var data=JSON.parse(xhr.responseText)
        document.getElementById("collect").innerHTML=""
        console.log("datalength",data.length)
        for(var i=0;i<data.length;i++) {
            document.getElementById("collect").innerHTML+="<div class='col-xs-5 collectimg'>"+
                "<div>" +
                "<img src='"+data[i].si_imgSrc+"' width='100%' height='155px'>"+
                "</div>" +
                "<div class='xr_shoucangtext'>"+
                "<a href='/details.do?id='"+data[i].id+">"+data[i].s_name+"</a>"+
                "</div>"+
                "<div class='xr_shoucangpadding'>" +
                "<div class='row'>" +
                "<div class='col-xs-6 col-xs-offset-3 text-center'>" +
                "<span  class='shoucangcolor'><i class='fa fa-heart' aria-hidden='true'></i>&nbsp;</span>" +
                "<span class='xr_shoucangxinacolor'></span>&nbsp;" +
                "<span><i class='fa fa-jpy' aria-hidden='true'></i>" + data[i].s_price+
                "</span>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>"
        }
        $(".xr_shoucangtext").each(function() {
            console.log($(this).text().length)
            if ($(this).text().length >15) {
                $(this).html($(this).text().replace(/\s+/g, "").substr(0, 15) + "......")
            }
        })
    })
}




//点击我的评价
function xr_pingjia(){
    //我的签证字体
    $(".xr_newzitia").eq(4).css("color","black")
    //全部签证
    $(".xr_rightcontent3").css("display","none")
    //订单隐藏
    $(".xr_rightcontent").css("display","none")
    /*我的收藏*/
    $(".xr_rightcontent1").eq(0).css("display","none")
    /*个人信息*/
    $(".xr_position").eq(0).css("display","none")
    //我的评价
    $(".xr_rightcontent2").css("display","inline-block")
    //    个人信息字体
    $(".xr_newzitia").eq(0).css("color","black")
    //我的订单ziti
    $(".xr_newzitia").eq(1).css("color","black")
//我的收藏字体
    $(".xr_newzitia").eq(2).css("color","black")
//    我的评价字体
    $(".xr_newzitia").eq(3).css("color","#a79865")
//我的搜藏字体
    $("#xr_myshoucang").css("color","#a79865")
//    已评价字体
    $("#xr_yespingjia").css("color","#a79865")
//    未评价字体
    $("#xr_nopingjia").css("color","black")
//    已评价页面
    $(".xr_sectiontwotwopingjia").css("display","inline-block")
    //    未评价页面
    $(".xr_throwthrowpingjia").css("display","none")
//    选中县
    $(".xr_xuanzhongxianxian") .css("left","32%")
    document.getElementsByClassName("xr_xuanzhongxianxian")[0].style.transition="left 0.3s"
}
//点击已评价
function xr_yespingjia(){
    xr_pingjia()
}
//点击未评价
function xr_nopingjia(){
    document.getElementsByClassName("xr_xuanzhongxianxian")[0].style.transition="left 0.3s"

// 已评价字体
    $("#xr_yespingjia").css("color","black")
//    未评价字体
    $("#xr_nopingjia").css("color","#a79865")
//    已评价页面
    $(".xr_sectiontwotwopingjia").css("display","none")
    //    未评价页面
    $(".xr_throwthrowpingjia").css("display","inline-block")
//    选中县
    $(".xr_xuanzhongxianxian").css("left","56%")
}
$(".xr_span").click(function(){
    window.location.href="xr_payfor.html"

})
//点击签证
function xr_qianzheng(){
    //订单隐藏
    $(".xr_rightcontent").css("display","none")
    /*我的收藏*/
    $(".xr_rightcontent1").eq(0).css("display","none")
    /*个人信息*/
    $(".xr_position").eq(0).css("display","none")
    //我的评价
    $(".xr_rightcontent2").css("display","none")
    //我的签证
    $(".xr_newzitia").eq(4).css("display","inline-block")
    //我的签证字体
    $(".xr_newzitia").eq(4).css("color","#a79865")
    //    个人信息字体
    $(".xr_newzitia").eq(0).css("color","black")
    //我的订单ziti
    $(".xr_newzitia").eq(1).css("color","black")
//我的收藏字体
    $(".xr_newzitia").eq(2).css("color","black")
//    我的评价字体
    $(".xr_newzitia").eq(3).css("color","black")

//我的搜藏字体
    $("#xr_myshoucang").css("color","black")
    //未办理
    $(".xr_throwthrownobanli").css("display","none")
//    已办理字体
    $("#xr_yesbanli").css("color","#a79865")
//    未办理字体
    $("#xr_nobanli").css("color","black")
//    已办理页面
    $(".xr_sectiontwotwoqianzheng").css("display","inline-block")
    //全部签证
    $(".xr_rightcontent3").css("display","inline-block")
    //    未办理面
    $(".xr_throwthrowpingjia").css("display","none")
//    选中县
    $(".xr_xuanzhongxianxanbanli") .css("left","32%")
    document.getElementsByClassName("xr_xuanzhongxianxian")[1].style.transition="left 0.3s"
    //查数据
    xr_yibanli()
    xr_serchyemashuju(1)
}
//点击已办理
function xr_yesqianzheng(){
    //已办理
    $(".xr_sectiontwotwoqianzheng").css("display","inline-block")
    //未办理
    $(".xr_throwthrownobanli").css("display","none")
    //已办理字体
    $("#xr_yesbanli").css("color","#a79865")
    //wei办理字体
    $("#xr_nobanli").css("color","black")
    //下划线
    $("#xr_xuanzhongxianxanbanliqianzhen").css("left","32%")
    document.getElementsByClassName("xr_xuanzhongxianxian")[1].style.transition="left 0.3s"
    xr_yibanli();
    xr_serchyemashuju(1)
}
//查询已办理数据页码
var pagenum,maxpage,nowpage
function  xr_yibanli(){
   ajax("post","/xr_qianzhengbanli.do",null,function(){
      var data=JSON.parse(xhr.responseText)
       maxpage=data.page
       console.log("这是页码"+data.page)
       $(".yml").remove()
       for(var i=1;i<=data.page;i++){
           //$("#yibanli").html=
         $(".yibanlileft").eq(0).before("<div class='xr_anniu1 xr_anniucolor xr_anniuziticolor yml' onclick='xr_serchyemashuju("+i+")'>"+i+"</div>")
       }
   })

}
//查询已办理数据
function xr_serchyemashuju(m){
    ajax("post","/xr_shuju.do","yema="+m,function(data){
        var data=JSON.parse(xhr.responseText)
        console.log(data.length)
        $(".xr_qingkong").remove()
           for(var i=0;i<data.length;i++){
                 $(".xr_anniuu").eq(0).before(
              "<div class='xr_sectiontwo1 xr_margin xr_qingkong'>"+
                   "<div class='xr_sectiontwo1header'>"+
                  "</div>" +
                   "<div class='xr_sectiontherr'>"+
                   "<div class='xr_sectiontherrone'>"+
                   "<div class='row text-center'>"+
                   "<div class='col-xs-2'>"+
                   "姓名"+
                   "</div>"+
                   "<div class='col-xs-2'>"+
                   "出行人数"+
                   "</div>"+
                   "<div class='col-xs-2'>"+
                 "目的地"+
                   "</div>"+
                   "<div class='col-xs-4'>"+
                   "收货地址"+
                  "</div>" +
                   "<div class='col-xs-2'>"+
                   "应付金额"+
                   "</div>"+

                   "</div>"+
                   "</div>"+

                   "</div>"+

                   "<div class='xr_sectionfour'>"+
                   "<div class='row text-center xr_divxrpadding'>"+
                   "<div class='col-xs-2'>"+
                   data[i].vr_name+
                   "</div>"+
                   "<div class='col-xs-2 xr_imge'>"+
              data[i].vr_count+
                   " </div>"+
                   "<div class='col-xs-2'>"+
              data[i].c_countryname+
                  "</div>"+
                   "<div class='col-xs-4'>"+
              data[i].vr_city+ data[i].vr_area+
                   "</div>"+
                  "<div class='col-xs-2' style='color: red'>"+
              "￥"+data[i].vr_sumprice+
               "</div>"+
               "</div>"+
              " </div>"+
               "<div class='xr_quxiaodingdan'>"+
                   "<div class='row  xr_quxiaodingdanziti'>"+
                   "<div class='col-xs-3 col-xs-offset-9 text-right ' onclick='lookxiangqing()'>"+
                   "查看详情"+
                   "</div>"+
                   "</div>"+
                   "</div>"+
                  " </div>"
               );
               pagenum=m;
           }
    })
}
//上一页
function preagenum(){
   if(pagenum>1){
       xr_serchyemashuju(pagenum-1)
}
}
//下一页
function nextpagenum(){
    if(pagenum<maxpage){
        xr_serchyemashuju(pagenum+1)
    }
}

function xr_quxiao(){
    personcentermes()
}
//点击未办理
function xr_noqianzheng(){
    //已办理
    $(".xr_sectiontwotwoqianzheng").css("display","none")
    //未办理
    $(".xr_throwthrownobanli").css("display","inline-block")
    //已办理字体
    $("#xr_yesbanli").css("color","black")
    //wei办理字体
    $("#xr_nobanli").css("color","#a79865")
    //下划线
    $("#xr_xuanzhongxianxanbanliqianzhen").css("left","56%")
    document.getElementsByClassName("xr_xuanzhongxianxian")[1].style.transition="left 0.3s"
    weibanli()
    xr_weibanli(1)
}
//未办理页码
var weibanlimaxpage
function  weibanli(){
    ajax("post","/xr_serchweizhifu.do",null,function(){
        var newdata=JSON.parse(xhr.responseText)
        weibanlimaxpage=newdata.page
        $(".ymll").remove()
        for(var i=1;i<=newdata.page;i++){
            $(".yibanlirightxxrr").eq(0).before("<div class='xr_anniu1 xr_anniucolor xr_anniuziticolor ymll' onclick='xr_weibanli("+i+")'>"+i+"</div>")
        }
    })
}
//未办理数据

function xr_weibanli(m){
    ajax("post","/weipingjia.do","weipingjia="+m,function(){
        var newdata=JSON.parse(xhr.responseText)
        $(".xr_newweibanli").remove();
        for(var i=0;i<newdata.length;i++){
            $(".xr_aniuniu").eq(0).before(
                "<div class='xr_newweibanli'>"+
                "<div class='xr_sectiontwo1 xr_margin'>"+
                    "<div class='xr_sectiontwo1header>"+
                   " </div>"+
                    "<div class='xr_sectiontherr'>"+
                    "<div class='xr_sectiontherrone'>"+
                    "<div class='row text-center'>"+
                   " <div class='col-xs-2'>"+
                    "姓名"+
                    "</div>"+
                    "<div class='col-xs-2'>"+
                    "出行人数"+
                    "</div>"+
                    "<div class='col-xs-2'>"+
                    "目的地"+
                    "</div>"+
                    "<div class='col-xs-2'>"+
                   "收货地址"+
                   "</div>"+
                    "<div class='col-xs-2'>"+
                    "应付金额"+
                    "</div>"+
                    "<div class='col-xs-2'>"+
                    "操作"+
                    "</div>"+
                   "</div>"+
                    "</div>"+
                    "</div>"+
                    "<div class='xr_sectionfour'>"+
                    "<div class='row text-center xr_divxrpadding'>"+
                    "<div class='col-xs-2'>"+
                newdata[i].vr_name+
                    "</div>"+
                    "<div class='col-xs-2 xr_imge'>"+
                newdata[i].vr_count+
                    "</div>"+
                   "<div class='col-xs-2'>"+
                newdata[i].c_countryname+
                   "</div>"+
                    "<div class='col-xs-2'>"+
                newdata[i].vr_city.split("市")[0]+ newdata[i].vr_area+
                   "</div>"+
                    "<div class='col-xs-2' style='color: red'>"+
                "￥"+newdata[i].vr_sumprice+
                "</div>"+
                "<div class='col-xs-2'>"+
                    "<span class='xr_span' onclick='xr_pppayfor()'>去支付</span>"+
                   "</div>"+
                    "</div>"+
                    "</div>"+
                    "<div class='xr_quxiaodingdan'>"+
                    "<div class='row  xr_quxiaodingdanziti'>"+
                    "<div class='col-xs-3 col-xs-offset-9 text-right'>"+
                    "查看详情"+
                    "</div>"+
                    "</div>"+
                    "</div>"+
                   "</div>" +
                    "</div>"
            )
        }
    })
    nowpage=m
}
//跳转支付页面
function xr_pppayfor(){
    var a=location.href.split("=")[1]
    location.href="xr_payfor.html?"+a
}
//签证为办理上一页
function weibanlipreabe(){
    if(nowpage>1){
        xr_weibanli(nowpage-1)
    }
}
//签证为办理上一页
function weibanlinexabe(){
    if(nowpage<weibanlimaxpage){
        xr_weibanli(nowpage+1)
    }
}

var xr_huiyuan
function xr_updatepersonmesg(){
   var xr_nichen=$(".xr_nicheninput").eq(0).val()
   var xr_name= $(".xr_nicheninput").eq(1).val()
   var xr_phonenumber=$(".xr_nicheninput").eq(2).val()
    var xr_sex=$('input:radio:checked').val()
    console.log("这是性别："+xr_sex)
    var xr_email=$(".xr_nicheninput").eq(3).val()
    console.log("这是啥"+xr_nichen,xr_name,xr_phonenumber,xr_sex,xr_email)
    var nichengpanduan=/^[a-zA-Z\u4e00-\u9fa5]+$/
    var a=nichengpanduan.test(xr_name)
    var phonenumberpanduan=/^1(3|4|5|7|8)\d{9}$/
    var b=phonenumberpanduan.test(xr_phonenumber)
    var xr_emailcheishi=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    var c=xr_emailcheishi.test(xr_email)
    var xr_huiyuan=$('#xr_huiyuan').html()
    console.log(xr_nichen,a,b,c)
    console.log("你在干嘛："+document.getElementById("xr_phonenumbermiatake"))
    if(a&&b&&c&&xr_nichen){
        console.log(55555555555)
        //想数据库加数据
        ajax("post","/xr_update.do","xr_huiyuan="+xr_huiyuan+"&xr_phonenumber="+xr_phonenumber+"&xr_nichen="+xr_nichen+"&xr_name="+xr_name+
        "&xr_sex="+xr_sex+"&xr_email="+xr_email,function(data){
            "这他妈就对了"
        }
        )

        m=1
        $(".xr_updatesuccess").eq(0).css("display","inline-block")
        $(".xr_divrelativ").eq(0).css("display","none")
        //location.href="xr_personmesg"
    }else{

        if(a){
             document.getElementById("xr_namemiatake").innerHTML=""
        }
        else{
            document.getElementById("xr_namemiatake").innerHTML="请输入正确姓名"
        }
        if(b){
           document.getElementById("xr_phonenumbermiatake").innerHTML=""
        }else{
            document.getElementById("xr_phonenumbermiatake").innerHTML="请输入正确手机号"

        }
        if(c){
            document.getElementById("xr_emailmiatake").innerHTML=""
        }else{
            document.getElementById("xr_emailmiatake").innerHTML="请注入正确邮箱名称"
        }
        if(xr_nichen){
            document.getElementById("xr_nichengmiatake").innerHTML=""
        }else{
            document.getElementById("xr_nichengmiatake").innerHTML="昵称不能为空!"
        }
    }
}

function xr_passwordtrue(){
    var xr_huiyuan=$('#xr_huiyuan').html()
    var xr_divinputmima0=$(".divinputmima").eq(0).val();
    console.log(xr_divinputmima0)
    var a=/[a-zA-Z0-9]{6,10}$/
   var divinputmima1=$(".divinputmima").eq(1).val()

    var b=a.test(xr_divinputmima0)
    if((divinputmima1==xr_divinputmima0)&&b){
       ajax("post","/upadepassword.do","xr_huiyuan="+xr_huiyuan+"&xr_divinputmima="+xr_divinputmima0,function(){
           "这他妈就对了";

       })
        m=2
        $(".xr_divrelativ").eq(0).css("display","none")
        $(".xr_updatesuccess").eq(0).css("display","inline-block")
        $(".xrmima").eq(0).css("display","none")

    }else{
        if(b){
            document.getElementById("mymima").innerHTML=""
        }else{
            console.log(232323)
            document.getElementById("mymima").innerHTML="请输入正确的密码"
        }
        if(divinputmima1==xr_divinputmima0){
            document.getElementById("mymima1").innerHTML=""
        }else{
            document.getElementById("mymima1").innerHTML="两次密码输入不一致"
        }
    }
}
function xr_yicang(){
    if(m==1){
        $(".xr_updatesuccess").eq(0).css("display","none")
    }else{
        $(".xr_updatesuccess").eq(0).css("display","none")
    }
    document.getElementById("xr_huiyuan").innerHTML=$(".xr_nicheninput").eq(0).val()
    location.href="xr_personmesg?id="+ssurl
}

//图退款
var zhunbeituikunagshuju
var ss,mgobj
function mytuikuan(){
    //现实背景
    $("#nononogogogo").css("display","inline-block")
    $(".xr_tuikuansuccess").eq(0).css("display","none")
    zhunbeituikunagshujuneirong()
}
function zhunbeituikuan(obj){
    $("#nononogogogo").css("display","none")
    $(".xr_tuikuansuccess").eq(0).css("display","inline-block")
    ss=0
    mgobj=obj
    ccc()
}

//还要影藏背景
function ccc(){
    if(ss==0){
        $(mgobj).parents().parents().children().eq(4).children().eq(0).html("退款中")
        zhunbeituikunagshuju= $(mgobj).parents().parents().children().eq(0).html()
    }else{
        $(mgobj).parents().parents().children().eq(4).children().eq(0).html("退款")
    }
    console.log("这是退款+"+zhunbeituikunagshuju)
}
function zhunbeituikunagshujuneirong(){
    ajax("post","/yuikunag.do","zhunbeituikunagshuju="+zhunbeituikunagshuju,function(){

    })
}
function mynotuikuan(){
   ss=1
    ccc()
    $("#nononogogogo").css(
        "display","inline-block"
    )
    $(".xr_tuikuansuccess").eq(0).css("display","none")
}




















