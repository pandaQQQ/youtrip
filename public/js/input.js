function check(obj,name){
    var checks = document.getElementsByName(name);
    if(obj.checked){
        for(var i=0;i<checks.length;i++){
            checks[i].checked = false;
        }
        obj.checked = true;

    }else{
        for(var i=0;i<checks.length;i++){
            checks[i].checked = false;
        }
    }
}

