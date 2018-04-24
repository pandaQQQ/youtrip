const dbpool =require("../config/dbpollconfig");

const lcfvisaDao ={
    /*首页视频查询*/
    getBanner(params){
        return new Promise(function (resolve,reject) {
            let sql = 'SELECT * FROM t_homevido WHERE h_state=8';
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    /*热门目的地查询*/
    getDestination(params){
        return new Promise(function (resolve,reject) {
            let sql ='SELECT sp.id,sp.s_destination,co.c_countryname,co.c_imgSrcsmall,ht.h_hotName AS countrySum\n' +
                'FROM t_shops sp,t_country co,t_hotstate AS ht WHERE sp.s_country = co.id AND s_hotState=1 \n' +
                'GROUP BY co.c_countryname ORDER BY sp.id ASC LIMIT 0,8'
                dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    /*客户案例*/
    getCustomerCase(params){
        return new Promise(function (resolve,reject) {
            let sql='SELECT cu.id,co.c_countryname,us.t_name,tv.ev_evaluation,sh.s_day,ol.or_peopleTotal,simg.si_imgSrc,COUNT(DISTINCT co.c_countryname) AS countName FROM t_orderlist AS ol JOIN t_shops AS sh ON ol.or_shopid=sh.id\n' +
                '                JOIN t_country AS co ON sh.s_country= co.id JOIN t_user AS us ON ol.or_userId = us.id JOIN t_evaluation AS tv ON ol.id=tv.id\n' +
                '                JOIN t_shopsimg AS simg ON simg.si_id= sh.id JOIN t_customer AS cu ON cu.cu_orderid = ol.id\n' +
                '                WHERE ol.or_state=4 AND ol.or_caseTrue=10 GROUP BY co.c_countryname ORDER BY ol.id LIMIT 0,3'
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    /*You Trip | 旅行者说*/
    getYouTrip(params){
        return new Promise(function (resolve,reject) {
            let sql = 'SELECT a.id,t_nickname,t_imgSrc,t_shareimgs,t_text,s_teamNumber,s_price,s_day FROM t_usershare a JOIN t_user b ON a.t_userId=b.id JOIN t_newshare c ON  a.t_id=c.id JOIN t_orderlist d ON c.t_orderList=d.id JOIN t_shops f ON d.or_shopid=f.id LIMIT 0,3'
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getShops(params){
        return new Promise(function (resolve,reject) {
            let sql = 'SELECT COUNT(*) as shopSum FROM t_shops'
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    console.log(data)
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getUser(params){
        return new Promise(function (resolve,reject) {
            let sql = 'SELECT COUNT(*) as userSum FROM t_user'
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    console.log(data)
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getOrder(params){
        return new Promise(function (resolve,reject) {
            let sql = 'SELECT COUNT(*) as orderSum  FROM t_orderlist WHERE or_state=4'
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    console.log(data)
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getCountry(params){
        return new Promise(function (resolve,reject) {
            let sql = 'SELECT COUNT(*) as coSum FROM t_country'
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    console.log(data)
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getDesigner(params){
        return new Promise(function (resolve,reject) {
            let sql = 'SELECT COUNT(*) as designerSum FROM t_designer'
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    console.log(data)
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },



    /*============================获取用户id===================================*/
    getqueryid(params){
        return new Promise(function (resolve,reject){
            let sql ="SELECT * FROM t_user where username=?"
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getqueryVisa(params){
        return new Promise(function (resolve,reject){
            let sql ="SELECT v.id,v_price,v_imgSrc,v_imgLogo,c_countryname,vp_place FROM t_visa AS v JOIN t_country AS c ON v_visacountryid = c.id JOIN t_visaplace AS vp ON v.v_placeid = vp.id where v_state=8"
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getqueryDetailsid(params){
        return new Promise(function(resolve,reject){
            let sql ="SELECT v.id,v_price,v_imgSrc,v_starttime,v_stoptime,v_handling,c_countryname,vp_place FROM t_visa AS v JOIN t_country AS c ON v_visacountryid = c.id JOIN t_visaplace AS vp ON v.v_placeid = vp.id where v.id=?"
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getqueryOrder(params){
        return new Promise(function (resolve,reject) {
            let sql ="SELECT v.id,v_price,c_countryname,vp_place FROM t_visa AS v JOIN t_country AS c ON v_visacountryid = c.id JOIN t_visaplace AS vp ON v.v_placeid = vp.id where c_countryname=?"
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    console.log(data)
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    /*提交订单*/
    addContact(params){
        return new Promise(function (resovle,reject) {
            let sql='INSERT INTO t_visaorder(id,vr_num,vr_name,vr_tel,vr_mail,vr_goDate,vr_provinces,vr_city,vr_area,vr_streetaddress,vr_ktfree,vr_insurancetitle,vr_insuranceprice,vr_refusaltitle,vr_refusalprice,vr_orderDate,vr_count,vr_sumprice,vr_visaId,vr_userId)'
            let sqlValues = ' values(null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,(SELECT v_visacountryid FROM t_visa AS v JOIN t_country AS c ON v_visacountryid = c.id WHERE c_countryname =?),(select id from t_user where username=?))'
            dbpool.connect(sql+sqlValues,params,(err,data)=>{
                if(!err){
                    resovle(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    /*多条语句的添加*/
    addPeople(params){
        return new Promise(function (resovle,reject) {
            let sql = "insert into t_visaexcursion values";
            let dataInfo = [];
            let sql2 = "(null,?,?,(SELECT id FROM t_visaorder WHERE vr_name=?))";
            let newSql = "";
            if(typeof params.pelNameContro == "object"){
                console.log(params.pelNameContro.length)
                for(let i=0;i<params.pelNameContro.length;i++){
                    let pelName = params.pelNameContro[i];
                    let typeName = params.typeNameContro[i];
                    let contactUname = params.contactUname.trim();
                    let info = [pelName,typeName,contactUname];
                    dataInfo = dataInfo.concat(info);
                    if(i>=1){
                        newSql+= ","+sql2;
                        console.log(newSql)
                    }else{
                        newSql = sql2
                    }
                }
            }else{
                let pelName = params.pelNameContro;
                let typeName = params.typeNameContro;
                let contactUname = params.contactUname.trim();
                let info = [pelName,typeName,contactUname];
                dataInfo = dataInfo.concat(info);
                newSql = sql2
            }
            dbpool.connect(sql+newSql,dataInfo,(err,data)=>{
                if(!err){
                    console.log(data)
                    return resovle(data)
                }else{
                    console.log(err)
                    return reject(err)
                }
            })
        })
    },
}
module.exports = lcfvisaDao