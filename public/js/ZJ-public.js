sessionStorage.myhref=location.href;

//人数加减
var count={
    add:function (hh){
    let hh2=hh.text();
    if(hh.text()>=0){
        hh2=Number(hh2)+1;
        hh.text(hh2)
    }else if(hh.text()<0){
        hh2=0;
        hh.text(hh2)
    }
},
 reduced:function(hh) {
    let hh2=hh.text();
    if(hh.text()>0){
        hh2=Number(hh2)-1;
        hh.text(hh2)
    }else if(hh.text()<=0){
        hh2=0;
        hh.text(hh2)
    }
}

};





