const db=require('../config/dbpollconfig');//(链接数据库)

const ZJ_shops={
    //=================商品数据页面==============
    journey:{
        Con1(){//大洲数据
            return new Promise((resolve,reject)=>{
                let sql='select c_contientname from t_contient'
                db.connect(sql,[],(err,data)=>{
                    resolve(data);
                })
            })
        },
        Con2(){//主题数据
            return new Promise((resolve,reject)=>{
                let sql="select t_name from t_theme"
                db.connect(sql,[],(err,data)=>{
                    resolve(data);
                })
            })
        },
        country(){//国家
            return new Promise((resolve,reject)=>{
                let sql="select * from t_country"
                db.connect(sql,[],(err,data)=>{
                    resolve(data);
                })
            })
        },
        topCountry(){//热销国家
            return new Promise((resolve,reject)=>{
                let sql="select * from t_country where c_hotstate=1"
                db.connect(sql,[],(err,data)=>{
                    resolve(data);
                })
            })
        },
        Europe(){//欧洲国家
            return new Promise((resolve,reject)=>{
                let sql="select * from t_country where c_continentid=1"
                db.connect(sql,[],(err,data)=>{
                    resolve(data)
                })
            })
        },
        Antarctica(){//美洲
            return new Promise((resolve,reject)=>{
                let sql="select * from t_country where c_continentid=3"
                db.connect(sql,[],(err,data)=>{
                    resolve(data)
                })
            })
        },
        Oceanica(){//澳洲
            return new Promise((resolve,reject)=>{
                let sql="select * from t_country where c_continentid=2"
                db.connect(sql,[],(err,data)=>{
                    resolve(data)
                })
            })
        },
        Caribou(){//中东
            return new Promise((resolve,reject)=>{
                let sql="select * from t_country where c_continentid=5"
                db.connect(sql,[],(err,data)=>{
                    resolve(data)
                })
            })
        },
        Aaia(){//东南亚
            return new Promise((resolve,reject)=>{
                let sql = "select * from t_country where c_continentid=4"
                db.connect(sql,[],(err,data)=>{
                    resolve(data)
                })
            })
        }
    },
    menuDao(name,callBack){
        let sql="select id from t_contient where c_contientname=?"
        let sql2="select * from t_country where c_continentid=?"
        db.connect(sql,[name],(err,data)=>{
            db.connect(sql2,[data[0].id],(err,data)=>{
                callBack(data);
            })
        })
    },
    AllCountry(callBalk){
        db.connect("select * from t_country",[],(err,data)=>{
            callBalk(data);
        })
    },
    journey2(hhh,hhh2,callBack){
        let sql="select id from t_contient where c_contientname=?"
        let sql2="select id from t_theme where t_name=?"
        let sql3="SELECT * FROM (SELECT t_country.*\n" +
            "FROM t_shops,t_theme,t_themeshops,t_country,t_contient\n" +
            "WHERE t_shops.`id`=t_themeshops.`ts_shopsid`AND t_themeshops.`ts_themid`=? AND t_country.id=t_shops.`s_country`\n" +
            "GROUP BY t_shops.`id`)AS hhh\n" +
            "WHERE hhh.c_continentid=?"
        db.connect(sql,[hhh],(err,data)=>{
            let ARR=data[0].id;
            db.connect(sql2,[hhh2],(err,data)=>{
                db.connect(sql3,[data[0].id,ARR],(err,data)=>{
                    callBack(data);
                })
            })
        })
    },
    menuTDao(hhh,callback){
        let sql="select id from t_theme where t_name=?"
        let sql2="SELECT t_country.*\n" +
            "FROM t_shops,t_theme,t_themeshops,t_country,t_contient\n" +
            "WHERE t_shops.`id`=t_themeshops.`ts_shopsid`AND t_themeshops.`ts_themid`=? AND t_country.id=t_shops.`s_country`\n" +
            "GROUP BY t_country.`id`"
        db.connect(sql,[hhh],(err,data)=>{
            db.connect(sql2,[data[0].id],(err,data)=>{
                callback(data);
            })
        })
    },
//    ========================goods================
    goods:{
        goodsDao(Country){
            return new Promise((resolve,reject)=>{
                let sql="select id from t_country where id=?"
                let sql2="select * from t_shops where s_country=?"
                db.connect(sql,[Country],(err,data)=>{
                    db.connect(sql2,[data[0].id],(err,data)=>{
                        resolve(data);
                    })
                })
            })
        },
        goodsDao2(Country){
            return new Promise((resolve,reject)=>{
                db.connect("select * from t_country where id=?",[Country],(err,data)=>{
                    resolve(data);
                })
            })
        },
        goodsDao3(Country){
            return new Promise((resolve,reject)=>{
                let sql="select id from t_country where id=?"
                let sql2="SELECT t_shopsimg.`si_imgSrc`,t_shops.`id` \n" +
                    "FROM t_shops,t_shopsimg \n" +
                    "WHERE t_shops.`s_country`=? AND t_shops.id=t_shopsimg.si_id GROUP BY t_shops.`id`"
                db.connect(sql,[Country],(err,data)=>{
                    db.connect(sql2,[data[0].id],(err,data)=>{
                        resolve(data);
                    })
                })
            })
        },
        goodsDao4(Country){
            return new Promise((resolve,reject)=>{
                let sql="select id from t_country where id=?"
                let sql2="SELECT t_shops.`s_shopkey` \n" +
                    "FROM t_shops \n" +
                    "WHERE t_shops.`s_country`=?"
                db.connect(sql,[Country],(err,data)=>{
                    db.connect(sql2,[data[0].id],(err,data)=>{
                        resolve(data);
                    })
                })
            })
        },
        goodsDao5(){
            return new Promise((resolve,reject)=>{
                db.connect("select * from t_price",[],(err,data)=>{
                    resolve(data)
                })
            })
        },
        goodsDao6(){
            return new Promise((resolve,reject)=>{
                db.connect("select * from t_days",[],(err,data)=>{
                    resolve(data)
                })
            })
        }
    },

//===========================details===============
    details:{
        detailsDao1(Details){
            return new Promise((resolve,reject)=>{
                db.connect("select * from t_shops where id=?",[Details],(err,data)=>{
                    resolve(data)
                })
            })
        },
        detailsDao2(){
            return new Promise((resolve,reject)=>{
                db.connect("select * from t_insurance",[],(err,data)=>{
                    resolve(data)
                })
            })
        },
        detailsDao3(){
            return new Promise((resolve,reject)=>{
                db.connect("select * from t_cancel",[],(err,data)=>{
                    resolve(data)
                })
            })
        },
        detailsDao4(Details){
            return new Promise((resolve,reject)=>{
                db.connect("select * from t_shopsimg where si_id=?",[Details],(err,data)=>{
                    resolve(data)
                })
            })
        },
        detailsDao5(Details){
            return new Promise((resolve,reject)=>{
                let sql="select s_designerid from t_shops where id=?"
                let sql2="select * from t_designer,t_designersay where t_designer.id=? and t_designersay.de_shopsid=?"
                db.connect(sql,[Details],(err,data)=>{
                    db.connect(sql2,[data[0].s_designerid,Details],(err,data)=>{
                        resolve(data)
                    })
                })
            })

        },
        detailsDao6(Details){
            return new Promise((resolve,reject)=>{
                db.connect("select * from t_trip where go_id=?",[Details],(err,data)=>{
                    resolve(data)
                })
            })
        },
        detailsDao7(Details){
            return new Promise((resolve,reject)=>{
                db.connect("select s_jing from t_shops where id=?",[Details],(err,data)=>{
                    resolve(data)
                })
            })
        }
    },


//======================case=======================
    case:{
        CaseDao(Case){
            return new Promise((resolve,reject)=>{
                db.connect("select * from t_customer where id=?",[Case],(err,data)=>{
                    resolve(data)
                })
            })
        },
        CaseDao2(Case){
            return new Promise((resolve,reject)=>{
                let sql="select cu_orderid from t_customer where id=?"
                let sql2="select * from t_evaluation where or_id=?"
                db.connect(sql,[Case],(err,data)=>{
                    db.connect(sql2,[data[0].cu_orderid],(err,data)=>{
                        resolve(data)
                    })
                })
            })
        },
        CaseDao3(Case){
            return new Promise((resolve,reject)=>{
                db.connect("select * from t_feeling where cu_id=?",[Case],(err,data)=>{
                    resolve(data)
                })
            })
        },
        CaseDao4(Case){
            return new Promise((resolve,reject)=>{
                let sql="select cu_orderid from t_customer where id=?"
                let sql2="select or_shopid from t_orderlist where id=?"
                let sql3="select t_shops.*,t_shopsimg.si_imgSrc from t_shops,t_shopsimg where t_shops.id=? and t_shopsimg.si_id=? group by t_shops.id"
                db.connect(sql,[Case],(err,data)=>{
                    db.connect(sql2,[data[0].cu_orderid],(err,data)=>{
                        db.connect(sql3,[data[0].or_shopid,data[0].or_shopid],(err,data)=>{
                            resolve(data)
                        })
                    })
                })
            })
        }
    },

//==================CaseDetails====================
    CaseDetails:{
        CaseDetailsDao(shop){
            return new Promise((resolve,reject)=>{
                db.connect("select * from t_trip where go_id=?",[shop],(err,data)=>{
                    resolve(data)
                })
            })
        }
    }

};//业务数据
module.exports=ZJ_shops;