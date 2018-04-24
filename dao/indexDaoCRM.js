const dbpool =require("../config/dbpollconfig");
const indexDao ={
    //--------------------查询套餐列表-------------------
    orderManageMsgDao(params) {
        return new Promise(function (resolve, reject) {
                let sql='SELECT a.id,s_name,s_go,s_destination,s_teamNumber,s_price,s_day,s_shopkey,s_seasonsay,s_productdec,d_name,c_countryname,or_stateName,h_hotName,s_jing,s_designerid,si_imgSrc,s_true FROM t_shops AS a JOIN t_country AS b ON a.s_country=b.id\n' +
                    'JOIN t_designer AS c ON a.s_designerid=c.id JOIN t_orderstate AS d ON a.s_true=d.id JOIN t_hotstate AS ht ON a.s_hotState= ht.id JOIN t_shopsimg sg ON a.id=sg.si_id GROUP BY sg.si_id ORDER BY a.id'
               dbpool.connect(sql,[params], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
                })
        })
    },
    /*国家查询*/
    getCountryNameCRM(params){
        return new Promise(function (resolve,reject){
            let sql ="SELECT id,c_countryname FROM t_country order by id"
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    /*设计师*/
    getDesigneridCRM(params){
        return new Promise(function (resolve,reject){
            let sql ="SELECT id,d_name FROM t_designer"
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    /*是否上架查询*/
    getOrderstateCRM(params){
        return new Promise(function (resolve,reject){
            let sql ="SELECT id,or_stateName FROM t_orderstate WHERE id IN(8,9)"
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    /*是否设为热门查询*/
    getHotNameCRM(params){
        return new Promise(function (resolve,reject){
            let sql ="SELECT id,h_hotName FROM t_hotstate"
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    //---------------------新增套餐------------------------
    addOrder(params){
        return new Promise(function (resovle,reject) {
            let sql = 'INSERT INTO t_shops VALUES(NULL,?,?,?,?,?,?,?,?,?,\n' +
                '(SELECT id FROM t_designer WHERE d_name=?),(SELECT id FROM t_country WHERE c_countryname=?),\n' +
                '(SELECT id FROM t_orderstate WHERE or_stateName=?),?,(SELECT id FROM t_hotstate WHERE h_hotName=?))'
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resovle(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    addshopimg(params){
        return new Promise(function (resovle,reject) {
            let sql = 'INSERT INTO t_shopsimg VALUES(NULL,?,21)'
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resovle(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    alterOrder(params){
        return new Promise(function (resovle,reject) {
            let sql = ''
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resovle(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getshopsDelAllCRM(sql,params){
        return new Promise(function (resovle,reject) {
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resovle(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getshopDelCRM(params){
        return new Promise(function (resovle,reject) {
            let sql='DELETE FROM t_shops WHERE id=?'
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resovle(data)
                }else{
                    reject(err)
                }
            })
        })
    },
}
module.exports = indexDao