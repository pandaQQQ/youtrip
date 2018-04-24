const dbpool =require("../config/dbpollconfig");

const wy_customDao ={
//-------------------- 跳转预定信息页面-------------------
//-------------------- 查询预定套餐名-------------------
    yuding(params) {
    return new Promise(function (resolve, reject) {
        dbpool.connect("SELECT s_name FROM t_shops WHERE id=? ",
            params,(err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
    })
},
quxiaoxian(params) {
    return new Promise(function (resolve, reject) {
        dbpool.connect("SELECT ca_name FROM t_cancel WHERE id=?",
            params,(err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
    })
},
//-------------------- 顾客案例查询-------------------
    Case() {
        return new Promise(function (resolve, reject) {
            dbpool.connect("SELECT a.s_country,a.s_name,s_destination,s_day,b.si_imgSrc,d.v_imgLogo,e.id FROM t_shops  AS a JOIN t_shopsimg AS b ON a.id=b.si_id\n" +
                "JOIN t_orderlist AS c ON c.or_shopid=a.id AND c.or_caseTrue=10\n" +
                "JOIN t_visa AS d ON d.v_visacountryid=a.s_country\n" +
                "JOIN t_customer AS e ON e.cu_orderid=c.id\n" +
                "GROUP BY a.id\n",
                [], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
                })
        })
    },
//-------------------- 订单存入数据库-------------------
   orderInsert(params){
        return new Promise(function (resolve, reject) {
            dbpool.connect("INSERT INTO t_orderlist(or_num,or_orderName,or_tel,or_email,or_peopleTotal,or_orderDate,or_startDate,or_price)VALUES(?,?,?,?,?,?,?,?)",
                params,(err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
                })
        })
    },
//-------------------- 订单页面填写信息数据库查询-------------------
    myOrderMsgShopsDao(params){
    return new Promise(function (resolve, reject) {
        dbpool.connect("selects_name FROM t_shops WHERE id=?",
            params,(err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
    })

},
myOrderMsgInsDao(params){
    return new Promise(function (resolve, reject) {
        dbpool.connect("SELECT in_name FROM t_insurance WHERE id=?",
            params,(err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
    })
},
myOrderMsgCanDao(params){
    return new Promise(function (resolve, reject) {
        dbpool.connect("SELECT in_name FROM t_insurance WHERE id=?",
            params,(err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
    })
},
// -------------------- 定制信息录入数据库-------------------
personOrderMsg(params){
    var nowtime=String(new Date().toLocaleString());
    params.push(nowtime);
    return new Promise(function (resolve, reject) {
        dbpool.connect("INSERT INTO t_customOrder VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,NULL)",
            params,(err, data) => {
                if (!err) {
                    console.log('success')
                    resolve(data);
                } else {
                    console.log(err)
                    reject(err);
                }
            })
    })
}
}
module.exports=wy_customDao;
