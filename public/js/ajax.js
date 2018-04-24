var xhr;
if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
}else{
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
}
function ajax(method,url,params,callback,async){
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            callback();
        }
    }
    if(method=='get'){
        xhr.open(method,url+'?'+params,async)
        xhr.send(null);
    }else if(method=='post'){
        xhr.open(method,url,async);
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xhr.send(params);
    }
}

//function  xierong(myphone,myemail,callback){
//    var reg=/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/
//    var phone=/^1[0-9]{10}/
//    var mynull1 = /\S/
//    var a=reg.test(myemail)
//    var b=phone.test(myphone)
//   var d=mynull1.test(myphone)
//    var c=mynull1.test(myemail)
//    if(a||c==0){
//       callback("请输入正确信息！")
//    }else{
//        callback("")
//    }
//    if(b||d==0){
//        callback("请输入正确信息！")
//    }else{
//        callback("")
//    }
//
//}