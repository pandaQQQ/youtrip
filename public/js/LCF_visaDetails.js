
/*==================you trip旅行者说=======================*/
$("#country>div>span").on("click",function(obj){
    console.log(obj.currentTarget.innerHTML);
    $("#sel-country").val(obj.currentTarget.innerHTML);
});
$("#sel-country").on("click",function(){
    $("#country-tab").css("display","block");
});
function closeTab(){
    $("#country-tab").css("display","none");
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

/*======================在职人员===================*/
var activeP = $(".activeP")
activeP.on("click",function () {
    var index = activeP.index($(this));
    activeP.removeClass("activeA").eq(index).addClass("activeA");
});
/*=================问题解答================*/
function problem() {
    var downInterval = setInterval(function () {
        window.scrollTo(0,window.scrollY+20);
        if(window.scrollY>=4100){
            clearInterval(downInterval)
        }
    },2)
}
/*=====================预定须知==================*/
function reservation(){
    var downInterval = setInterval(function () {
        window.scrollTo(0,window.scrollY+20);
        if(window.scrollY>=4450){
            clearInterval(downInterval)
        }
    })
}

/*======================选择身份===================*/
var idDefault = $(".idDefault")
idDefault.on("click",function () {
    var index = idDefault.index($(this));
    idDefault.removeClass("idCardbg").eq(index).addClass("idCardbg");
});

/*=======================减签证人数======================*/
function  reduceButton(){
    var numValue =document.getElementById("numValue");
    var num =parseInt(numValue.value)
    if(num==1){
        numValue.valueOf().value=1
        console.log(numValue.valueOf().value)
    }else{
        numValue.valueOf().value=num-1
        // console.log(numValue.valueOf().value)
    }
}
/*=======================加签证人数======================*/
function addButton(){
    var numValue =document.getElementById("numValue");
    var num =parseInt(numValue.value)
    numValue.valueOf().value=(num+1);
}

var offBearer =document.getElementById("offBearer");
var professional =document.getElementById("professional");
var retiree =document.getElementById("retiree");
var student =document.getElementById("student");
var children1 =document.getElementById("children");
function clickoffBearer() {
    offBearer.style.display="block"
    professional.style.display="none"
    retiree.style.display="none"
    student.style.display="none"
    children1.style.display="none"
}
function clickprofessional() {
    offBearer.style.display="none"
    professional.style.display="block"
    retiree.style.display="none"
    student.style.display="none"
    children1.style.display="none"
}
function clickretiree() {
    offBearer.style.display="none"
    professional.style.display="none"
    retiree.style.display="block"
    student.style.display="none"
    children1.style.display="none"
}
function clickstudent() {
    offBearer.style.display="none"
    professional.style.display="none"
    retiree.style.display="none"
    student.style.display="block"
    children1.style.display="none"
}
function clickchildren1() {
    offBearer.style.display="none"
    professional.style.display="none"
    retiree.style.display="none"
    student.style.display="none"
    children1.style.display="block"
}
sessionStorage.myhref=location.href;