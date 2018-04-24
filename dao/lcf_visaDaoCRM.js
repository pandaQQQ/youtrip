const dbpool =require("../config/dbpollconfig");

const lcfvisaDaoCRM ={
    /*首页视频查询*/
    getbanner(params){
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

    /*签证管理查询*/
    getqueryVisaCRM(sql,params){
        return new Promise(function (resolve,reject){
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getqueryCountryCRM(params){
        return new Promise(function (resolve,reject){
            let sql ="SELECT id,c_countryname FROM t_country ORDER BY id"
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getqueryPlaceCRM(params){
        return new Promise(function (resolve,reject){
            let sql ="SELECT id,vp_place FROM t_visaplace"
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    getdelVisaCRM(params){
        return new Promise(function (resovle,reject) {
            let sql = 'UPDATE t_visa SET v_state=9 WHERE id=?'
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resovle(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getdelAllVisaCRM(sql,params){
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
    getAlterVisaCRM(params){
        return new Promise(function (resovle,reject) {
            let sql = 'UPDATE t_visa SET v_visacountryid=(SELECT id FROM t_country WHERE c_countryname=?),v_price=?,v_imgSrc=?,v_imgLogo=?,v_placeid=(SELECT id FROM t_visaplace WHERE vp_place=?),v_starttime=?,v_stoptime=?,v_handling=? WHERE id=?'
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resovle(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getAlterSrcCRM(params){
        console.log(params)
        return new Promise(function (resovle,reject) {
            let sql = 'UPDATE t_visa SET v_imgSrc=? WHERE id=?'
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resovle(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getAlterImgCRM(params){
        return new Promise(function (resovle,reject) {
            let sql = 'UPDATE t_visa SET v_imgLogo=? WHERE id=?'
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resovle(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    getaddVisaCRM(params){
        return new Promise(function (resovle,reject) {
            let sql = 'INSERT INTO t_visa(id,v_visacountryid,v_price,v_imgSrc,v_imgLogo,v_placeid,v_starttime,v_stoptime,v_handling) VALUES(NULL,(SELECT id FROM t_country WHERE c_countryname=?),?,?,?,(SELECT id FROM t_visaplace WHERE vp_place = ?),?,?,?)'
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resovle(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    /*签证订单管理*/
    getAllOrderCRM(sql,params){
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
//    删除单条数据
    getdelOrderCRM(params){
        let sql='UPDATE t_visaorder SET or_cancel=9 WHERE id=?'
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
    /*删除多条数据*/
    getdelAllOrderCRM(sql,params){
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
    /*查询出游人*/
    getVisaexcursionCRM(params){
        return new Promise(function (resovle,reject) {
            let sql='SELECT ve.id,vr_name,e_name,e_typename FROM t_visaexcursion \n' +
                'AS ve JOIN t_visaorder AS vo ON vo.id=ve.e_visaorderid WHERE vo.id=?'
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resovle(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    /*省*/
    getprovinceCRM(params){
        return new Promise(function (resovle,reject) {
            let sql='SELECT * FROM t_address_province'
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resovle(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    /*市*/
    getcityCRM(sql2,params2){
        return new Promise(function (resovle,reject) {
            dbpool.connect(sql2,params2,(err,data)=>{
                if(!err){
                    resovle(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    /*县*/
    gettownCRM(sql3,params3){
        return new Promise(function (resovle,reject) {
            dbpool.connect(sql3,params3,(err,data)=>{
                if(!err){
                    resovle(data)
                }else{
                    reject(err)
                }
            })
        })
    },

    /*修改订单*/
    getAlterOrderCRM(params){
        return new Promise(function (resovle,reject) {
            let sql = 'UPDATE t_visaorder SET vr_name=?,vr_mail=?,vr_goDate=?,vr_provinces=?,vr_city=?,vr_area=?,vr_streetaddress=? WHERE id=?'
            dbpool.connect(sql,params,(err,data)=>{
                if(!err){
                    resovle(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    getAlterExcursionCRM(params){
        return new Promise(function (resovle,reject) {
            let sql = "UPDATE t_visaexcursion SET e_name=?,e_typename=? WHERE id=?";
            // let dataInfo = [];
            // let sql2 = " e_name=?,e_typename=? WHERE id=?";
            // // let sql2 =' e_name = CASE id WHEN ? THEN ? END,e_typename = CASE id WHEN ? THEN ? END WHERE id IN (?)'
            // let newSql = "";
            // if(typeof params.eNameArr == "object"){
            //     console.log(params.eNameArr.length)
            //     for(let i=0;i<params.eNameArr.length;i++){
            //         let eName = params.eNameArr[i];
            //         let typeName = params.typeNameArr[i];
            //         let orderId = params.orderId;
            //         let info = [eName,typeName,orderId];
            //         dataInfo = dataInfo.concat(info);
            //         if(i>=1){
            //             newSql+= ","+sql2;
            //             console.log(newSql)
            //         }else{
            //             newSql = sql2
            //         }
            //     }
            // }else{
            //     console.log(445555)
            //     let eName = params.eNameArr;
            //     let typeName = params.typeNameArr;
            //     let orderId = params.orderId;
            //     let info = [eName,typeName,orderId];
            //     dataInfo = dataInfo.concat(info);
            //     newSql = sql2
            //     console.log(newSql)
            // }
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
module.exports = lcfvisaDaoCRM