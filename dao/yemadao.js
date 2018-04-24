/**
 * Created by xr on 2018/3/20.
 */
const xr_dbpool=require("../config/dbpollconfig")
const xr_yenmadao={
    pageNum:3,
    yemacha(parser){
        return new Promise(
            function(resolve,reject){
               let sql="select count(*) as b from t_visaorder where vr_state=?"
                xr_dbpool.connect(sql,parser,(err,data)=>{
                   if(!err){
                       resolve({page:Math.ceil(data[0].b/xr_yenmadao.pageNum)})
                   }else{
                       reject(err)
                   }
                })
            }
        )

    },
    weibanliyema(parser){
        return new Promise(
            function(reslove,reject){
           let sql="select count(*) as a from t_visaorder where vr_state=? or vr_state=? "
            xr_dbpool.connect(sql,parser,(err,data)=>{
              if(!err){
                  reslove({page:Math.ceil(data[0].a/xr_yenmadao.pageNum)})
              }else{
                  reject(err)
              }
            })
            }
        )

    },
    shuju(parser){
        return new Promise(
            function(resolve,reject){
                let sql="SELECT vr_name,vr_count,c_countryname,vr_city,vr_area,vr_sumprice FROM t_visaorder AS vo JOIN t_visa AS v ON vo.vr_visaId = v.id JOIN t_country AS co ON v.v_visacountryid =co.id where vr_state=1 limit ?,?"
                xr_dbpool.connect(sql,[(parser-1)*xr_yenmadao.pageNum,xr_yenmadao.pageNum],(err,data)=>{
             if(!err){
                 resolve(data)
             }else{
               reject(err)
             }



                })


            }
        )


    },
weipingjiadao11(parser){
    return new Promise(
        function(resolve,reject){
        let sql="SELECT vr_name,vr_count,c_countryname,vr_city,vr_area,vr_sumprice FROM t_visaorder AS vo JOIN t_visa AS v ON vo.vr_visaId = v.id JOIN t_country AS co ON v.v_visacountryid =co.id where vr_state=1 or vr_state=3 limit ?,?"
        xr_dbpool.connect(sql,[(parser-1)*xr_yenmadao.pageNum,xr_yenmadao.pageNum],(err,data)=>{
            if(!err){
             resolve(data)
            }else{
                reject(err)
            }

        })
        }
    )

    },
    searchyema(params){
       return new Promise(function(resolve,reject){
           let sql="SELECT COUNT(*) AS c FROM t_orderlist AS a JOIN t_orderstate AS b ON a.or_state=b.id WHERE or_userId=(SELECT id FROM t_user WHERE username=?)"
           xr_dbpool.connect(sql,params,(err,data)=>{
               if(!err){
                   resolve({page:Math.ceil(data[0].c/xr_yenmadao.pageNum)})
               }else{
                   reject(err)
               }
           })
       })
    },
     searchshuju(parser){
        return new Promise(function(resolve,reject){
            let sql="SELECT or_num,s_name,or_orderName,or_startDate,s_price,or_stateName FROM t_orderlist AS a JOIN t_orderstate AS b ON a.or_state=b.id JOIN t_shops AS t ON t.id=a.or_shopid limit ?,?"
            xr_dbpool.connect(sql,[(parser-1)*xr_yenmadao.pageNum,xr_yenmadao.pageNum],(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    alredygodao(params){
       return new Promise(
           function(resolve,reject){
              let sql="SELECT COUNT(*) AS c FROM t_orderlist AS a JOIN t_orderstate AS b ON a.or_state=b.id WHERE b.id=4 AND or_userId=(SELECT id FROM t_user WHERE username=?)"
               xr_dbpool.connect(sql,params,(err,data)=>{
                   if(!err){
                       resolve({page:Math.ceil(data[0].c/xr_yenmadao.pageNum)})
                   }else{
                       reject(err)
                   }

               })
           }
       )

    },
    agogodao(parser){
        "use strict";
        return new Promise(
            function(resolve,reject){
                let sql="SELECT or_num,s_name,or_startDate,s_price,or_stateName FROM t_orderlist AS a JOIN t_orderstate AS b ON a.or_state=b.id  JOIN t_shops AS t ON a.or_shopid=t.s_designerid WHERE b.id=4 limit ?,?"
               xr_dbpool.connect(sql,[(parser-1)*xr_yenmadao.pageNum,xr_yenmadao.pageNum],(err,data)=>{
                   if(!err){
                       resolve(data)
                   }else{
                       reject(err)
                   }


               })
            }
        )
    },
    nopaydao(){
        return new Promise(
            function(resolve,reject){
                let sql="SELECT COUNT(*) as c FROM t_orderlist AS a JOIN t_orderstate AS b ON a.or_state=b.id WHERE b.id=2"
                xr_dbpool.connect(sql,[],(err,data)=>{

                    if(!err){

                        resolve({page:Math.ceil(data[0].c/xr_yenmadao.pageNum)})

                    }else{
                        reject(err)
                    }
                })
            }
        )
    },
    nopayshujudao(parser){
        return new Promise(
            function(resolve,reject){
                let sql="SELECT or_num,s_name,or_startDate,s_price FROM t_orderlist AS a JOIN t_shops AS t ON a.or_shopid=t.id WHERE a.or_state=2 limit ?,?"
               xr_dbpool.connect(sql,[(parser-1)*xr_yenmadao.pageNum,xr_yenmadao.pageNum],(err,data)=>{

                   if(!err){
                       resolve(data)
                   }else{
                       reject(err)
                   }
               })
            }
        )
    },
    xr_nogopagedao(){
        return new Promise(
            function(resolve,reject){
                let sql="SELECT COUNT(*) AS c FROM t_orderlist AS a JOIN t_orderstate AS b ON a.or_state=b.id WHERE b.id=3"
                xr_dbpool.connect(sql,[],(err,data)=>{
                    if(!err){
                        resolve({page:Math.ceil(data[0].c/xr_yenmadao.pageNum)})
                    }else{
                        reject(err)
                    }
                })
            }


    )
    },
    nogoshujudao(parser){
        return new Promise(
            function(resolve,reject){
                let sql="SELECT or_num,s_name,or_startDate,s_price FROM t_orderlist AS a JOIN t_shops AS t ON a.or_shopid=t.id WHERE a.or_state=3 limit ?,?"
                xr_dbpool.connect(sql,[(parser-1)*xr_yenmadao.pageNum,xr_yenmadao.pageNum],(err,data)=>{
                    if(!err){
                        resolve(data)
                    }else{
                        reject(err)
                    }
                })
            }
        )
    },
    yiquxiaoDao(){
        return new Promise(
        function(resolve,reject){
            let sql="SELECT COUNT(*) AS c FROM t_orderlist AS a JOIN t_orderstate AS b ON a.or_state=b.id WHERE b.id=6"
            xr_dbpool.connect(sql,[],(err,data)=>{
                if(!err){
                    resolve({page:Math.ceil(data[0].c/xr_yenmadao.pageNum)})
                }else{
                    reject(err)
                }
            })
        })
    },
    yiquxiaoshujudao(parser){
        return new Promise(
            function(resolve,reject){
                let sql="SELECT or_num,s_name,or_startDate,s_price FROM t_orderlist AS a JOIN t_shops AS t ON a.or_shopid=t.id WHERE a.or_state=6 limit ?,?"
                xr_dbpool.connect(sql,[(parser-1)*xr_yenmadao.pageNum,xr_yenmadao.pageNum],(err,data)=>{
                    if(!err){
                        resolve(data)
                    }else{
                        reject(err)
                    }
                })
            }
        )
    },
    alreadypaydao(parser){
        return new Promise(
            function(resolve,reject){
                let sql="update t_orderlist set or_state=3 where or_num=?"
                xr_dbpool.connect(sql,[parser],(err,data)=>{
                    if(!err){
                        resolve(data)
                    }else{
                        reject(err)
                    }
                })
            }
        )
    },
    zhunbeituikunagshujudao(parser){
        "use strict";
        return new Promise(
            function(resolve,reject){
                let sql="update t_orderlist set or_state=5 where or_num=?"
                xr_dbpool.connect(sql,parser,(err,data)=>{
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }



                })
            }
        )
    },
    quxiaodingdandao(parser){
        return new Promise(
            function (resolve,reject){
            "use strict";
                let sql="update t_orderlist set or_state=7 where or_num=? "
                xr_dbpool.connect(sql,[parser],(err,data)=>{
                    if(!err){
                        resolve(data)
                    }else{
                        reject(err)
                    }

                })
        }
        )
    },
    diangdanbianhao(parser){
        return new Promise(
            function(resolve,reject){
                let sql="SELECT s_name,or_startDate,s_price FROM t_orderlist AS a JOIN t_shops AS b ON a.or_shopid=b.id where or_num=?"
                 xr_dbpool.connect(sql,[parser],(err,data)=>{
                     if(!err){
                         resolve(data)
                     }else{
                         reject(err)
                     }

                 })
            }
        )

    }

    }

module .exports=xr_yenmadao