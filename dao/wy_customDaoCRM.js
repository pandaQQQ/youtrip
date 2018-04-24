const dbpool =require("../config/dbpollconfig");

const wy_customDaoCRM={
    //-------------------- 客户订单表-------------------
    CheckOrder(params,sql) {
        return new Promise(function (resolve, reject) {
            dbpool.connect(sql,
                params, (err, data) => {
                    if (!err) {
                        console.log(data)
                        resolve(data);
                    } else {
                        reject(err);
                    }
                })
        })
    },
    //-------------------用户资料------------------------
    getportrait() {
        return new Promise(function (resolve, reject) {
            dbpool.connect("SELECT a_name,a_imgSrc FROM t_adminlist WHERE id=?",
                [1], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
                })
        })
    },
    //-----------------------销售排行前十国家-----------------------
    Country(){
        return new Promise(function (resolve, reject) {
            dbpool.connect(
               "SELECT d.c_countryname, COUNT(b.or_shopid) AS total,c.v_imgLogo FROM t_shops AS a\n" +
                "JOIN t_orderlist AS b ON a.id=b.or_shopid\n" +
                "JOIN t_visa AS c ON c.v_visacountryid=a.s_country\n" +
                "JOIN t_country AS d ON a.s_country=d.id  GROUP BY d.id ORDER BY COUNT(b.or_shopid)  DESC LIMIT 10\n",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
                })
        })
    },
//---------------------------用户定制信息---------------------
    designMsg(){
        return new Promise(function (resolve, reject) {
            dbpool.connect("SELECT * FROM t_customorder AS a JOIN t_orderstate AS b WHERE a.c_state=b.id",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
                })
        })
    },
    //---------------------------用户定制信息---------------------
    userMsgDao(){
        return new Promise(function (resolve, reject) {
            dbpool.connect("SELECT * FROM t_user",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
                })
        })
    },

//--------------------查询后台角色管理-------------------
    roleManageDao(){
    return new Promise(function (resolve, reject) {
        dbpool.connect("SELECT * FROM t_rolelist",
            [], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    },
//--------------------查询后台管理员列表-------------------
    adminManageDao(){
        return new Promise(function (resolve, reject) {
            dbpool.connect("SELECT a.id,a.a_name,a.a_pwd,a.a_tel,a.a_imgSrc,a.a_roleid,a.a_joinTime,a.a_useState,b.or_stateName,c.r_role FROM t_adminlist AS a \n" +
                "JOIN t_orderstate AS b ON a.a_useState=b.id\n" +
                "JOIN t_rolelist  AS c  ON a.a_roleid=c.id\n",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
                })
        })
    },
//--------------------查询后台国家列表-------------------
    countryMsgDao(){
        return new Promise(function (resolve, reject) {
            dbpool.connect("SELECT a.id,a.c_countryname,a.c_remark,a.c_imgSrcbig,a.c_imgSrcsmall,a.c_continentid,b.c_contientname FROM t_country AS a \n" +
                "JOIN t_contient AS b ON a.c_continentid=b.id\n",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
                })
        })
    },
    //--------------------查询保险列表-------------------
    insuranceListMsgDao(){
    return new Promise(function (resolve, reject) {
        dbpool.connect("SELECT a.id,a.in_name,a.in_price,a.in_content,a.in_true,b.or_stateName FROM t_insurance AS a JOIN t_orderstate AS b ON a.in_true=b.id\n",
            [], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
    })
   },
    orderDesignerMsgDao() {
        return new Promise(function (resolve, reject) {
            dbpool.connect("SELECT a.id,a.d_name,a.d_label,a.d_imgSrc,b.de_say FROM t_designer AS a  JOIN t_designersay AS b ON a.id=b.de_designerid GROUP BY a.id\n",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
                })
        })
    },
    //--------------------查询套餐列表-------------------
    // orderManageMsgDao() {
    //     return new Promise(function (resolve, reject) {
    //         dbpool.connect("SELECT a.id,a.s_name,a.s_true,a.s_productdec,a.s_price,b.c_countryname,c.d_name,d.or_stateName FROM t_shops AS a\n" +
    //             "JOIN t_country AS b ON a.s_country=b.id\n" +
    //             "JOIN t_designer AS c ON a.s_designerid=c.id\n" +
    //             "JOIN t_orderstate AS d ON a.s_true=d.id ORDER BY a.id",
    //             [], (err, data) => {
    //                 if (!err) {
    //                     resolve(data);
    //                 } else {
    //                     reject(err);
    //                 }
    //             })
    //     })
    // },
    //--------------------查询客户案例列表-------------------
    customCaseMsgDao() {
        return new Promise(function (resolve, reject) {
            dbpool.connect("SELECT a.id,a.s_name,a.s_true,a.s_productdec,a.s_price,b.c_countryname,c.d_name,d.or_stateName FROM t_shops AS a\n" +
                "JOIN t_country AS b ON a.s_country=b.id\n" +
                "JOIN t_designer AS c ON a.s_designerid=c.id\n" +
                "JOIN t_orderstate AS d ON a.s_true=d.id ORDER BY a.id",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
                })
        })
    },
    //-------------------routeOrder订单表相关处理-------------------
    //--------------------筛选订单状态-------------------
    onSelectOrderMsgDao(params){
    return new Promise(function (resolve, reject) {
        dbpool.connect("SELECT * FROM t_user AS a JOIN t_orderlist AS b ON a.id=b.or_userId JOIN t_shops AS c ON b.or_shopid=c.id JOIN t_orderstate AS d ON d.id=b.or_state WHERE b.or_state=?",
            params, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
       })
    },
    //--------------------查询用户账号-------------------
    getUserNameDao(params,sql){
        return new Promise(function (resolve, reject) {
            dbpool.connect(sql,params,(err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
                })
        })
    }
}
module.exports=wy_customDaoCRM;
