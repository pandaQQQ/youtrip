var hotelType=[]
var money=[]
var destination
var totalPerson
var theme=[]
var others=[]
// -------------关闭目的地面板---------------
function closeTab(){
    var  countryTab=document.getElementById("customItemStepinCountry-tab");
    countryTab.style.display="none";
}
function openTab(){
    var  countryTab=document.getElementById("customItemStepinCountry-tab");
    countryTab.style.display="block";
}
$("#customItemStepSelcountry>div>span").on("click",function(obj){
    $("#customItemStepinCountry").val(obj.currentTarget.innerHTML);
    destination=obj.currentTarget.innerHTML
});
// -------------减出行成人-------------
$("#selNum1").on("click",function(){
    if($("#selNum2").val()==1){
        $("#selNum2").val(1);
    }else{
        $("#selNum2").val($("#selNum2").val()-1);
    }
    totalPerson=$("#selNum2").val()
});
//------------ 加出行成人------------
$("#selNum3").on("click",function(){
    var selNum2=document.getElementById("selNum2");
    var num=parseInt(selNum2.value);
    $("#selNum2").val(num+1);
    totalPerson=$("#selNum2").val()
});

// ----------------------选择预算----------------
$(".Personbudget").on("click",function(){
    money.push($(this).find('.money').text())
    hotelType.push($(this).find('.hotelType').text())
    $('.Personbudget').css({
        "color":"#c1c1c1",
        "border":"1px solid #c1c1c1"
    });
    $('.PersonbudgetYes').css("display","none");
    $('.PersonbudgetYes>span').css("display","none");
    $(this).css("color","#b1a86c");
    $(this).css("border","1px solid #b1a86c");
    $(this.getElementsByClassName("PersonbudgetYes")[0]).css("display","block");
    $(this.getElementsByClassName("PersonbudgetYes")[0].getElementsByTagName("span")[0]).css("display","block");
});

// ---------------------选择行程天数---------------------
// -------------减出行成人-------------
$("#selNumDay1").on("click",function(){
    if($("#selNumDay2").val()==1){
        $("#selNumDay2").val(1);
    }else{
        $("#selNumDay2").val($("#selNumDay2").val()-1);
    }
});
//------------ 加出行成人------------
$("#selNumDay3").on("click",function(){
    var selNumDay2=document.getElementById("selNumDay2");
    var num=parseInt(selNumDay2.value);
    $("#selNumDay2").val(num+1);
});

//-------------------跳转下一步-----------------
function step1Next(){
    var uname = document.getElementsByClassName("username")[0].innerText;
    if(uname!=""&&uname!="登录"){
        var primaryMsgOut=document.getElementsByClassName("primaryMsgOut")[0];
        var primaryMsgStep2=document.getElementsByClassName("primaryMsgStep2")[0];
        $('#stepBar2').addClass('timeBarLineActive')
        $('#stepBarNum2').addClass('timeBarCircleActive')
        $('#stepBarNumWord2').css('color','white')
        primaryMsgOut.style.display="none";
        primaryMsgStep2.style.display="block";
    }else{
        sessionStorage.myhref=location.href;
        window.location.href='/login';
    }

}
function step2Next(){
    var primaryMsgStep2=document.getElementsByClassName("primaryMsgStep2")[0];
    var primaryMsgStep3=document.getElementsByClassName("primaryMsgStep3")[0];
    $('#stepBar3').addClass('timeBarLineActive')
    $('#stepBarNum3').addClass('timeBarCircleActive')
    $('#stepBarNumWord3').css('color','white')
    primaryMsgStep2.style.display="none";
    primaryMsgStep3.style.display="block";
}
function step2pre(){
    var primaryMsgStep2=document.getElementsByClassName("primaryMsgStep2")[0];
    var primaryMsgOut=document.getElementsByClassName("primaryMsgOut")[0];
    $('#stepBar2').removeClass('timeBarLineActive')
    $('#stepBarNum2').removeClass('timeBarCircleActive')
    $('#stepBarNumWord2').css('color','#c9c9c9')
    primaryMsgOut.style.display="block";
    primaryMsgStep2.style.display="none";
}
function step3pre(){
    var primaryMsgStep2=document.getElementsByClassName("primaryMsgStep2")[0];
    var primaryMsgStep3=document.getElementsByClassName("primaryMsgStep3")[0];
    $('#stepBar3').removeClass('timeBarLineActive')
    $('#stepBarNum3').removeClass('timeBarCircleActive')
    $('#stepBarNumWord3').css('color','#c9c9c9')
    primaryMsgStep2.style.display="block";
    primaryMsgStep3.style.display="none";
}
//-------------------主题复选框选择-----------------
$(".customerThemeCheckMsg").on("click",function(){
    if(this.getElementsByClassName("customerThemeCheckSquare")[0].style.background=="rgb(177, 168, 108)"){
        $(this.getElementsByClassName("customerThemeCheckSquare")[0]).css("background","rgb(255,255,255)");
        $(this.getElementsByClassName("customerThemeCheckYes")[0]).css("display","none");
    }else{
        $(this.getElementsByClassName("customerThemeCheckSquare")[0]).css("background","rgb(177,168,108)");
        $(this.getElementsByClassName("customerThemeCheckYes")[0]).css("display","block");
    }
    theme.push($(this).find('.customerThemeCheckWord').text())
    if(theme.length>1){
        for(var i=0;i<theme.length-1;i++){
            if($(this).find('.customerThemeCheckWord').text()==theme[i]){
                theme.splice(i,1)
                theme.splice(theme.length-1,1)
            }
        }
    }
});
//-------------------其他需求复选框选择-----------------
$(".customerOtherCheckMsg").on("click",function(){
    if(this.getElementsByClassName("customerThemeCheckSquare")[0].style.background=="rgb(177, 168, 108)"){
        $(this.getElementsByClassName("customerThemeCheckSquare")[0]).css("background","rgb(255,255,255)");
        $(this.getElementsByClassName("customerThemeCheckYes")[0]).css("display","none");
    }else{
        $(this.getElementsByClassName("customerThemeCheckSquare")[0]).css("background","rgb(177,168,108)");
        $(this.getElementsByClassName("customerThemeCheckYes")[0]).css("display","block");
    }
    others.push($(this).find('.customerThemeCheckWord').text())
    if(others.length>1){
        for(var i=0;i<others.length-1;i++){
            if($(this).find('.customerThemeCheckWord').text()==others[i]){
                others.splice(i,1)
                others.splice(others.length-1,1)
            }
        }
    }
});
// -----------------------提交ajax请求----------------

function submitReq(){
    var moneyYes,hotelTypeYes
    for(var i=money.length-1;i>=0;i--){
        if(money[i]!=""){
            moneyYes=money[i];
            break;
        }
    }
    for(var i=hotelType.length-1;i>=0;i--){
        if(hotelType[i]!=""){
           hotelTypeYes=hotelType[i];
            break;
        }
    }
    $.ajax({
        type:"post",//提交方式
        url:"/orderSubmit.do",//提交地址
        data:{//参数
           destination:destination,
           datebox:document.getElementsByClassName('datebox')[0].value,
           totalPerson:totalPerson,
           moneyYes:moneyYes,
           hotelTypeYes:hotelTypeYes,
           theme:theme,
           others:others,
           notes:$("#notes").val(),
           nameMsg:$('#nameMsg').val(),
           telMsg:$('#telMsg').val(),
           emailMsg:$('#emailMsg').val()
        },
        contentType:"application/x-www-form-urlencoded;charset=utf-8",
        traditional:true, //传数组需设置为true
        async:true
    })
}
