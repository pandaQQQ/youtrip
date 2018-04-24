const db=require("../config/dbpollconfig");

const youtripDao={
    selectCount(params){
        return new Promise(function(resolve,reject){
            let sql="SELECT count(*) as stucount FROM t_newshare";
            /**/
            db.connect(sql,params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err.message)
                }
            })
        })
    },
    selectone(params){
    return new Promise(function(resolve,reject) {
        db.connect("SELECT a.id,t_nickname,t_imgSrc,t_keyword,t_title,t_shareimgs,t_text,t_date,s_teamNumber,s_price,s_day FROM t_usershare a JOIN t_user b ON a.t_userId=b.id JOIN t_newshare c ON  a.t_id=c.id JOIN t_orderlist d ON c.t_orderList=d.id JOIN t_shops f ON d.or_shopid=f.id ", params, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err.message)
            }
        })
    })
    },
    fzcommounity(params){
        return new Promise(function(resolve,reject) {
            db.connect("SELECT a.id,t_nickname,t_imgSrc,t_keyword,t_title,t_shareimgs,t_text,t_date,s_teamNumber,s_price,s_day FROM t_usershare a JOIN t_user b ON a.t_userId=b.id JOIN t_newshare c ON  a.t_id=c.id JOIN t_orderlist d ON c.t_orderList=d.id JOIN t_shops f ON d.or_shopid=f.id WHERE a.id=?", params, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err.message)
                }
            })
        })
    },
    selectcomment(params){
        return new Promise(function(resolve,reject) {
            db.connect("SELECT a.id ,t_nickname,t_content FROM t_newshare a JOIN t_comment b ON b.t_sid=a.id JOIN t_user c ON c.id=b.t_id WHERE a.id=?", params, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err.message)
                }
            })
        })
    },
    insertcomment(params){
        return new Promise(function(resolve,reject) {
            db.connect("INSERT INTO t_comment VALUES(NULL,?,20170407,2,?)", params, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err.message)
                }
            })
        })
    },
    aboutMe(params){
        return new Promise(function(resolve,reject) {
            db.connect("SELECT a.id,t_nickname,t_imgSrc,t_keyword,t_title,t_shareimgs,t_text,t_date,s_teamNumber,s_price,s_day FROM t_usershare a JOIN t_user b ON a.t_userId=b.id JOIN t_newshare c ON  a.t_id=c.id JOIN t_orderlist d ON c.t_orderList=d.id JOIN t_shops f ON d.or_shopid=f.id   ", params, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err.message)
                }
            })
        })
    },
    problem(params){
        return new Promise(function(resolve,reject) {
            db.connect("SELECT a.id,t_nickname,t_imgSrc,t_keyword,t_title,t_shareimgs,t_text,t_date,s_teamNumber,s_price,s_day FROM t_usershare a JOIN t_user b ON a.t_userId=b.id JOIN t_newshare c ON  a.t_id=c.id JOIN t_orderlist d ON c.t_orderList=d.id JOIN t_shops f ON d.or_shopid=f.id   ", params, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err.message)
                }
            })
        })
    },
    recruitment(params){
        return new Promise(function(resolve,reject) {
            db.connect("SELECT a.id,t_nickname,t_imgSrc,t_keyword,t_title,t_shareimgs,t_text,t_date,s_teamNumber,s_price,s_day FROM t_usershare a JOIN t_user b ON a.t_userId=b.id JOIN t_newshare c ON  a.t_id=c.id JOIN t_orderlist d ON c.t_orderList=d.id JOIN t_shops f ON d.or_shopid=f.id   ", params, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err.message)
                }
            })
        })
    },
    Team(params){
        return new Promise(function(resolve,reject) {
            db.connect("SELECT a.id,t_nickname,t_imgSrc,t_keyword,t_title,t_shareimgs,t_text,t_date,s_teamNumber,s_price,s_day FROM t_usershare a JOIN t_user b ON a.t_userId=b.id JOIN t_newshare c ON  a.t_id=c.id JOIN t_orderlist d ON c.t_orderList=d.id JOIN t_shops f ON d.or_shopid=f.id   ", params, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err.message)
                }
            })
        })
    },
    CheckUser(params){
        console.log('dao层',params)
        return new Promise(function(resolve,reject){
            //
           db.connect("SELECT a.id,t_nickname,t_imgSrc,t_keyword,t_title,t_shareimgs,t_text,t_date,s_teamNumber,s_price,s_day FROM t_usershare a JOIN t_user b ON a.t_userId=b.id JOIN t_newshare c ON  a.t_id=c.id JOIN t_orderlist d ON c.t_orderList=d.id JOIN t_shops f ON d.or_shopid=f.id limit ?,? ",params,(err,data)=>{
               if(!err){
                   resolve(data)
               }else{
                   reject(err.message)
               }
           })
        })
    },
    getallUser(params){
        return new Promise(function(resolve,reject){
            //
            db.connect("SELECT a.id,t_name,t_nickname,t_imgsrc,t_title FROM t_usershare AS b JOIN t_user AS a JOIN t_newshare AS c  ON b.t_userId=a.id AND b.t_id=c.id ORDER BY b.id ",params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err.message)
                }
            })
        })
    },
    getallshare(params){
        return new Promise(function(resolve,reject){
            //
            db.connect("SELECT a.id,t_orderlist,t_starleveid,t_nickname,t_imgSrc,t_keyword,t_title,t_shareimgs,t_text,t_date,s_teamNumber,s_price,s_day FROM t_usershare a JOIN t_user b ON a.t_userId=b.id JOIN t_newshare c ON  a.t_id=c.id JOIN t_orderlist d ON c.t_orderList=d.id JOIN t_shops f ON d.or_shopid=f.id ",params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err.message)
                }
            })
        })
    },
    getallComment(params){
        return new Promise(function(resolve,reject){
            //
            db.connect("SELECT a.id,t_content,t_cdate,t_title,t_nickname FROM t_comment AS a JOIN t_newshare AS b JOIN t_user AS c ON a.t_id=b.id AND a.t_sid=c.id  ORDER BY a.id ",params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err.message)
                }
            })
        })
    },
    getallRecommend(params){
        return new Promise(function(resolve,reject){
            db.connect("SELECT a.id,s_name,t_nickname,s_destination FROM t_recommend AS a JOIN t_usershare AS b JOIN t_user AS c JOIN t_shops AS d  ON b.id=a.t_id AND b.t_userId=c.id AND a.t_routeid=d.id ORDER BY a.id ",params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err.message)
                }
            })
        })
    },
    deletePeople(params){
        return new Promise(function(resolve,reject){
            db.connect("DELETE FROM t_usershare WHERE id= ?",params,(err,data)=>{
                if(!err){
                    data="删除成功";
                    resolve(data)
                }else{
                    reject(err.message)
                }
            })
        })
    },
    deleteShare(params){
        return new Promise(function(resolve,reject){
            db.connect("DELETE FROM t_newshare WHERE id= ?",params,(err,data)=>{
                if(!err){
                    data="删除成功";
                    resolve(data)
                }else{
                    reject(err.message)
                }
            })
        })
    },
    uploadimg(params){
        return new Promise(function(resolve,reject){
            db.connect("update  t_user set t_imgSrc= ? WHERE id= ?",params,(err,data)=>{
                if(!err){
                    data="更新成功";
                    resolve(data)
                }else{
                    reject(err.message)
                }
            })
        })
    },
    mysearch(params){
        return new Promise(function(resolve,reject){
            db.connect("SELECT * FROM (SELECT a.id,t_name,t_nickname,t_imgsrc,t_title FROM t_usershare AS b JOIN t_user AS a JOIN t_newshare AS c  ON b.t_userId=a.id AND b.t_id=c.id ORDER BY b.id) AS e WHERE e.t_nickname LIKE ? OR e.id  LIKE ? " ,params,(err,data)=>{
                if(!err){
                    console.log(data)
                    resolve(data)
                }else{
                    reject(err.message)
                }
            })
        })
    },
    setshare(params){
        return new Promise(function(resolve,reject){
            console.log(params)
            db.connect("UPDATE  t_newshare  SET t_title=?,t_text=?,t_starleveid=?,t_orderlist=? WHERE id=?" ,params,(err,data)=>{
                if(!err){
                    console.log(data)
                    resolve(data)
                }else{
                    reject(err.message)
                }
            })
        })
    },
};
module.exports=youtripDao;
