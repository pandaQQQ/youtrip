//甄选行程目的地左右菜单栏样鼠标移入样式改变
let JourneyLeftMenu=$("#ZJ-leftMenu li");
let JourneyRightMenu=$("#ZJ-rightMenu li");
let GoodsLeftMenu=$("#ZJ-GoodsLeftMenu li");
let GoodsRIGHTMenu=$("#ZJ-GoodsRightMenu li");

//==========菜单默认样式====================
let defL3;
let defL4;
let text="全部";//世界
let text2;//参数2
let text3="全部";//风格
let params='';//参数的盒子
let ARR=[];//参数盒子


//======================商品详情页跳转获取参数=============================
let totalALL;//总价
let DetailId;//商品id
let DetailsNum;//人数
let DetailsTime;//时间
let DetailsCan;//取消险
let DetailsIns;//保险




//======================一下是详情要样式===========

let DetailsYou=$("#ZJ-you>div");
let DetailsYuan=document.getElementById("ZJ-round");


//=============菜单样式==============
var showMENU={
    hover(id,bgid) {
        id.style.color="white";
        id.style.backgroundColor="#a17648";
        id.style.cursor="pointer";
        id.style.transition="all .1s linear";
        bgid.style.color="white";
        bgid.style.backgroundColor="#a17648";
    },
    out(id,bgid) {
        id.style.color="#a17648";
        id.style.backgroundColor="white";
        id.style.transition="all .1s linear";
        bgid.style.color="white";
        bgid.style.backgroundColor="#a17648";
    },
    click(id,bgid){
        id.style.color="white";
        id.style.backgroundColor="#a17648";
        id.style.cursor="pointer";
        id.style.transition="all .1s linear";

    },
    onclick(id){
        id.css({
            "color":"#a17648",
            "backgroundColor":"white"
        })
    }

};




//=============世界菜单栏============
function MenuJourneyRight(id,id2) {
    let defL=id.parent().prevObject[0];
    defL4=id2.parent().prevObject[0];
    //点击样式
    for(let i=0;i<id.length;i++){
        //========鼠标移入移除的样式改变==========
        id[i].onmouseover=function () {
            showMENU.hover(id[i],defL);
        };
        id[i].onmouseout=function () {
            showMENU.out(id[i],defL);
        };


        //========鼠标点击事件====================
        id[i].onclick=function () {
            defL=id[i];
            defL3=defL;
            showMENU.hover(id[i],defL);
            showMENU.onclick($(id[i]).siblings("li"));
            text2=defL4.firstElementChild.innerHTML.replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, "");
            text=this.firstElementChild.innerHTML.replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, "");
            JouAjax(text,text3);
        };
    }
}
//=============风格菜单栏============
function MenuJourneyLeft(id,id2) {
    let defL=id.parent().prevObject[0];
    defL3=id2.parent().prevObject[0];
    //点击样式
    for(let i=0;i<id.length;i++){
        //========鼠标移入移除的样式改变==========
        id[i].onmouseover=function () {
            showMENU.hover(id[i],defL);
        };
        id[i].onmouseout=function () {
            showMENU.out(id[i],defL);
        };


        //========鼠标点击事件====================
        id[i].onclick=function () {
            defL=id[i];
            defL4=defL;
            showMENU.hover(id[i],defL);
            showMENU.onclick($(id[i]).siblings("li"));
            text2=defL3.firstElementChild.innerHTML.replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, "");
            text3=this.firstElementChild.innerHTML.replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, "");

            JouAjax();
        };
    }
}
//ajax配置
JouAjax=(q,p)=>{
    if(text=="全部"&&text3=="全部"){
        ajax("get","/jouAll.do","",JouBack);
        text2="";
        params='';
        ARR=[];

    }


    else if(text=="全部"&&text3!="全部"){
        ARR.push(text3);
        params=("TEXT="+ARR[0]);
        ajax('get','/jou1.do',params,JouBack);params='';
        text2="";
        ARR=[];
    }

    else if(text!="全部"&&text3=="全部"){
        ARR.push(text);
        params=("TEXT="+ARR[0]);
        ajax('get','/jou3.do',params,JouBack);
        params='';
        text2="";
        ARR=[];
    }


    else if (text!="全部"&text3!="全部"){
        ARR.push(text);
        ARR.push(text3);
        params=("TEXT="+ARR[0]+"&TEXT2="+ARR[1]);
        ajax('get','/jou2.do',params,JouBack);
        params='';
        text2="";
        ARR=[];
    }

};

//甄选行程主页选项栏的回调函数
JouBack=()=>{
    let data=JSON.parse(xhr.responseText);
    let ele=document.getElementById('ZJ_countryBox');
    ele.innerHTML='';
    for(let i=0;i<data.length;i++){
        ele.innerHTML+="        <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-6  ZJ-padding0\">\n" +
            "          <div class=\"shop text-center\">\n" +
            "            <div  class=\"ZJ-Y\">\n" +
            "              <div  class=\"followimg1 \">\n" +
            "                <div class=\"ZJ-sp-img ZJ-relative\">\n" +
            "                  <img src=\""+data[i].c_imgSrcsmall+"\" alt=\"\">\n" +
            "                </div>\n" +
            "              </div>\n" +
            "              <div class=\"ZJ-sp-title ZJ-show\">\n" +
            "                <h3><a href=\"ZJ-goods.html\">"+data[i].c_countryname+"</a></h3>\n" +
            "\n" +
            "                <div class=\"ZJ-sp-label\">\n" +
            "                  <p>"+data[i].c_remark+"</p>\n" +
            "                </div>\n" +
            "              </div>\n" +
            "            </div>\n" +
            "          </div>\n" +
            "        </div>\n"
    }
};


//点击样式
MenuJourneyRight(JourneyRightMenu,JourneyLeftMenu);
MenuJourneyLeft(JourneyLeftMenu,JourneyRightMenu);
// Menu(GoodsLeftMenu);
// Menu(GoodsRIGHTMenu);
//==================以上是4菜单样式================

//======================一下是详情要样式===========


//添加文字
function detailsShow() {
    DetailsYuan.innerHTML="";
    for (let i=0;i<DetailsYou.length;i++){
        DetailsYuan.innerHTML+="<p id='p"+i+"'><a href='#"+DetailsYou[i].id+"'>"+DetailsYou[i].id+"</a></p>";

    }
}
detailsShow();

function detailsHeight() {
    let deP=[];
    for (let i=0;i<DetailsYou.length;i++){
        let P=document.getElementById("p"+i+"");
        deP.push(P)
    }

    for (let i=1;i<deP.length;i++){
        let height=$("#D"+i+"").outerHeight(true);
        deP[i].style.marginTop=(height-45)+"px"
    }
}
detailsHeight();

//监听滚轮


//==================================计算总价===================================
//(取消和意外险的总价)
function checkedPrice(ClassLength,checkboxName,shu) {
    let ZJ_In_Cancel_Price;
    for(let i=0;i<ClassLength.length;i++){
        if (checkboxName[i].checked==true){
            ZJ_In_Cancel_Price=Number(ClassLength[i].innerHTML)*Number(shu[i].innerHTML);
            break
        }else {
            ZJ_In_Cancel_Price=0;
        }
    }
    return ZJ_In_Cancel_Price
}


//单房差
function checkedPrice2(id1,id2) {
    let cha=Number(id1.text())*Number(id2.text());
    return cha
}



//算总价
function ZJ_total() {
    //(总价)
    let total;
    //(成人价格)
    let ZJ_AdultPrice=Number($("#ZJ_AdultPrice").text())*Number($("#adult").text());
    // (儿童价)
    let ZJ_ChildPrice=Number($("#ZJ_ChildPrice").text())*Number($("#child").text());
    //(单房差)
    let ZJ_roomRate=checkedPrice2($("#ZJ_roomRate"),$("#ZJ_cha"));
    //(意外险)
    let ZJ_InsurancePrice=checkedPrice($("#ZJ_InsurancePrice .ZJ_InsurancePrice"),$("input[name='checkbox1']"),$(".ZJ_InsurancePrice_shu"));
    //(取消险)
    let ZJ_CancelInsurance=checkedPrice($("#ZJ_CancelInsurance .ZJ_CancelInsurance"),$("input[name='checkbox2']"),$(".ZJ_CancelInsurance_shu"));
    //(wifi)
    let ZJ_WIFIPrice=checkedPrice2($("#ZJ_WIFIPrice"),$("#ZJ_WIFI"));

    total=ZJ_AdultPrice+ZJ_ChildPrice+ZJ_roomRate+ZJ_CancelInsurance+ZJ_WIFIPrice+ZJ_InsurancePrice;
    totalALL=total;
    return total
}


// 改变份数//选择人数的同时改变分数
function ZJ_transfer() {
    for (let i=0;i<$(".ZJ_InsurancePrice_shu").length;i++){
        $(".ZJ_InsurancePrice_shu")[i].innerHTML=(Number($("#child").text())+Number($("#adult").text()));
    }
    for (let i=0;i<$(".ZJ_CancelInsurance_shu").length;i++){
        $(".ZJ_CancelInsurance_shu")[i].innerHTML=(Number($("#child").text())+Number($("#adult").text()));
    }
}


//计算总价
function total() {
    $("#ZJ_total1").text(ZJ_total());
    $("#ZJ_total2").text(ZJ_total());
}

//===============================表单面板隐藏切换==========================

function hidAr(article,title) {
    for (let i=0;i<article.length;i++){
        title[i].onclick=function () {
            $(article[i]).toggle();
        }
    }
}


//======================商品详情页跳转获取参数=============================
// let totalALL;//总价
// DetailId
// let DetailsNum;//人数
// let DetailsTime;//时间
// let DetailsCan;//取消险
// let DetailsIns;//保险

checkbox=()=>{
    let a=$("input[name='checkbox1']");

    for(let i=0;i<a.length;i++){
        if (a[i].checked==true){
            DetailsIns=$(a[i]).attr("id");
            DetailsIns=Number(DetailsIns)
        }else {
            DetailsIns=undefined
        }
    }

    let b=$("input[name='checkbox2']");

    for(let i=0;i<b.length;i++){
        if (b[i].checked==true){
            DetailsCan=$(b[i]).attr("id")
        }else {
            DetailsCan=undefined
        }
    }
};




//===================立即定制页面跳转=================
// var on_Reserve=false;//立即预定跳转页面的开关
$("#ZJ_reserve").click(function () {
    let date=$("#ZJ_date").val();
    if (date==""){
        alert("请选择日期")
    }else {
        DetailsTime=$("#ZJ_date").val();
        DetailId=$($("#tit>h1")[0]).attr("id");
        DetailsNum=$("#adult").text();
        checkbox();
        // $("#ZJ_reserve").click(window.location.href='/orderMsj.do?id='+DetailId+"&total="+totalALL+"&Num="+DetailsNum+"&Time="+DetailsTime+"&ins="+DetailsIns+"&can="+DetailsCan);
        console.log(DetailsIns,typeof DetailsIns)
    }
});

//==============================表单展开=====================
$("#ZJ_date").change(function () {
    $(".hiddenIn2")[0].style.display="block"
});






//=====================轮播================
let lunboLEFT=$("#ZJ_lun>div> span")[1];
let lunboRIGHT=$("#ZJ_lun>div> span")[0];
let lunbo=$("#ZJ_lun>div:first-child img")[0];
let def=$($("#ZJ_lun>div:last-child>div>div")[0]);
let boxLun=$("#ZJ_lun>div:last-child>div");
let o=$(def.children("img")).attr("src");
def.removeClass("ZJ-yin");

let j=0;
leftlun=()=>{
    let a=$("#ZJ_lun>div:last-child>div>div");
    let f=$(a[j]).css("margin-right").split("px")[0];
    let g=$(a[j]).css("width").split("px")[0];
    $(a[j]).addClass("ZJ-yin");
    if(j>=a.length-1){
        j=-1;
    }
    j++;
    def=$(a[j]);
    def.removeClass("ZJ-yin");
    o=$(def.children("img")).attr("src");
    $(lunbo).attr("src",o);
};

lunboLEFT.onclick=function () {
    leftlun()
};




//=============================== 页面加载时执行函数========================
window.onload=function () {
    ZJ_transfer();
    total();
    hidAr($("#ZJ_InsurancePrice article"),$("#ZJ_InsurancePrice .ZJ_TArticle"));
    hidAr($("#ZJ_CancelInsurance article"),$("#ZJ_CancelInsurance .ZJ_CancelTitle"));

};


