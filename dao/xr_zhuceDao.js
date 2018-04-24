const dbpool=require("../config/dbpollconfig")
const userDao={
    /*===================登录注册模块=======================*/
    xrAdduser(paramer){
        return new Promise(function(resolve,reject) {
            let sql="select * from t_user where username=?";
            dbpool.connect(sql,paramer,(err,data)=>{
                if(!err){
                   resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    xr_newadduser(paramer){
        return new Promise(function(resolve,reject) {
            let sql="insert into t_user value(null,?,?,?,null,null,null,null)";
            dbpool.connect(sql,paramer,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    xr_search(paramer){
        return new Promise(function(resolve,reject){
            let sql="select * from t_user where username=? and password=?"
            dbpool.connect(sql,paramer,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    login(){
        return new Promise(function(resolve,reject){
            let sql="select * from t_user"
            dbpool.connect(sql,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    xr_searchuser(paramer){
        return new Promise(function(resolve,reject){
            let sql="select * from t_user where username=?"
            dbpool.connect(sql,paramer,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    /*======================个人信息=====================*/
    xr_updatemesg(paramer){
        return new Promise(function(resolve,reject){
            let sql="update t_user set username=?,t_nickname=?,t_name=?,t_sex=?,t_mail=? where t_nickname=?";
            dbpool.connect(sql,paramer,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    /*======================修改密码=====================*/
    xr_upate(paramer){
        return new Promise(function(resolve,reject){
            let sql="update t_user set password=? where t_nickname=?";
            dbpool.connect(sql,paramer,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    /*======================会员查询=====================*/
    xr_serchperson(paramer){
        return new Promise(function(resolve,reject){
            let sql="select * from t_user where t_nickname=?"
            dbpool.connect(sql,paramer,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    /*======================会员查询=====================*/
    xr_seachhuiyuuanid(parser){
        return new Promise(function(resolve,reject){
            let sql="select * from t_user where username=?";
            dbpool.connect(sql,parser,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    xr_iphoner(parser){
        return new Promise(function(resolve,reject){
            let sql="select * from t_user where username=?";
            dbpool.connect(sql,parser,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    alternewphone(params){
        return new Promise(function(resolve,reject){
            let sql="UPDATE t_user SET PASSWORD=? WHERE username=?";
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getcollect(params){
        return new Promise(function(resolve,reject){
            let sql="SELECT s.id,s.s_name,s.s_price,si.si_imgSrc FROM t_collect AS c,t_shops AS s,t_user AS u,t_shopsimg AS si\n" +
                "WHERE c.c_userId =(SELECT id FROM t_user WHERE username=?) AND s.id=si.id\n" +
                "AND c.c_shopsId=s.id GROUP BY s.id";
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    console.log("收藏表",data)
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

}
module .exports=userDao