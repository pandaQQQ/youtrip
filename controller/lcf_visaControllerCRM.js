const visaDaoCRM =require("../dao/lcf_visaDaoCRM");
var uploadPath;
var uploadPath2;
var uploadPath3;
var uploadPath4;
const visaContollerCRM ={
    /*首页*/
    queryHomeCRM(req,resp){
        visaDaoCRM.getbanner([]).then(function (data) {
            resp.send(data)
        })
    },
    queryVisaCRM(req,resp) {
        let visaQuery=[];
        let params=[];
        let queryCountry =req.query.queryCountry||""  /*根据国家查询*/
        let queryPlace =req.query.queryPlace||""  /*根据送签地查询*/
        let sql ="SELECT v.id AS id,v_price,v_imgSrc,v_imgLogo,c_countryname,vp_place,v_starttime,v_stoptime,v_handling,or_stateName FROM t_visa AS v JOIN t_country AS c ON v_visacountryid = c.id JOIN t_visaplace AS vp ON v.v_placeid = vp.id JOIN t_orderstate AS os ON os.id = v.v_state WHERE v_state=8 and 1=1"
        if(queryCountry!=""){
            sql+=' AND v_visacountryid=(SELECT c.id FROM t_country AS c WHERE c_countryname=?)'
            queryCountry=queryCountry.trim()
            params.push(queryCountry)
        }
        if(queryPlace!=""){
            sql+=' AND v_placeid = (SELECT id FROM t_visaplace WHERE vp_place=?)'
            queryPlace=queryPlace.trim()
            params.push(queryPlace)
        }
        visaDaoCRM.getqueryVisaCRM(sql,params).then(function (data) {
            visaQuery.push(data)
            visaDaoCRM.getqueryCountryCRM([]).then(function (data) {
                visaQuery.push(data)
                visaDaoCRM.getqueryPlaceCRM([]).then(function (data) {
                    visaQuery.push(data)
                    resp.send(visaQuery)
                })
            })
        })
    },
    delVisaCRM(req,resp) {
        let visaId = req.body.visaId;
        console.log(visaId)
        visaDaoCRM.getdelVisaCRM([visaId]).then(function (data) {
            resp.send(data)
        })
    },
    delAllVisaCRM(req,resp) {
        let idArr = req.body.idArr;
        console.log(idArr)
        let sql = 'UPDATE t_visa SET v_state=9 WHERE id in('
        for(let i=0;i<idArr.length;i++){
            sql+='?,'
        }
        sql=sql.slice(0,(sql.length-1))
        sql+=')'
        console.log(sql)
        visaDaoCRM.getdelAllVisaCRM(sql,idArr).then(function (data) {
            resp.send(data)
        })
    },
    alterVisaCRM(req,resp) {
        let visaCountry = req.body.visaCountry;
        let visaPrice = req.body.visaPrice;
        let visaPlace = req.body.visaPlace;
        let visaStart = req.body.visaStart;
        let visaStop = req.body.visaStop;
        let visaHand = req.body.visaHand;
        console.log(uploadPath)
        console.log(uploadPath2)

        let visaId = req.body.visaId;
        visaDaoCRM.getAlterVisaCRM([visaCountry,visaPrice,uploadPath,uploadPath2,visaPlace,visaStart,visaStop,visaHand,visaId]).then(function (data) {
            resp.send(data)
        })
    },
    SrcVisaCRM(req,resp) {
        uploadPath="upload/"+req.file.filename;
        resp.send('修改上传成功')
    },
    imgLogoVisaCRM(req,resp) {
        uploadPath2="upload/"+req.file.filename;
        resp.send('修改上传成功')
    },

    addSrcVisaCRM(req,resp) {
        uploadPath3="upload/"+req.file.filename;
        resp.send('新增上传成功')
    },
    addimgLogoVisaCRM(req,resp) {
        uploadPath4="upload/"+req.file.filename;
        resp.send('新增上传成功')
    },
    addVisaCRM(req,resp) {
        let addcountry = req.body.addcountry;
        let addprice = req.body.addprice;
        let addplace = req.body.addplace;
        let addstart = req.body.addstart;
        let addstop = req.body.addstop;
        let addhand = req.body.addhand;
        visaDaoCRM.getaddVisaCRM([addcountry,addprice,uploadPath3,uploadPath4,addplace,addstart,addstop,addhand]).then(function (data) {
            resp.send(data)
        })
    },

    /*签证订单管理*/
    queryOrderCRM(req,resp){
        let orderQuery=[];
        let params=[];
        let queryContact =req.query.queryContact||""  /*根据联系人查询*/
        let queryCountry =req.query.queryCountry||""  /*根据国家查询*/
        let queryNum =req.query.queryNum||""  /*根据订单编号查询*/
        let sql='SELECT vo.id,vr_num,vr_name,vr_tel,vr_mail,vr_goDate,vr_provinces,vr_city,vr_area,vr_streetaddress,\n' +
            'vr_ktfree,vr_insurancetitle,vr_insuranceprice,vr_refusaltitle,vr_refusalprice,vr_count,vr_sumprice,vr_orderDate,or_stateName,vp_place,c_countryname\n' +
            'FROM t_visaorder AS vo JOIN t_visa AS va ON vo.vr_visaId = va.id JOIN t_visaplace AS vp ON va.v_placeid = vp.id\n' +
            'JOIN t_country AS co ON co.id = va.v_visacountryid JOIN t_orderstate AS so ON vo.vr_state = so.id WHERE or_cancel=8'
        if(queryContact!=""){
            sql+=' AND vr_name=?'
            queryContact=queryContact.trim()
            params.push(queryContact)
        }
        if(queryCountry!=""){
            sql+=' AND vr_visaId=(SELECT c.id FROM t_country AS c WHERE c_countryname=?)'
            queryCountry=queryCountry.trim()
            params.push(queryCountry)
        }
        if(queryNum!=""){
            sql+=' AND vr_num =?'
            queryNum=queryNum.trim()
            params.push(queryNum)
        }
        console.log("params",params)
        console.log("sql",sql)
        /*地址查询*/
        /*市*/
        let params2 =[];
        let provinceSel=req.query.provinceSel||"";
        console.log(provinceSel)
        let sql2='SELECT ac.id AS c_id,c_name FROM t_address_province AS ap,t_address_city AS ac where 1=1'
        if(provinceSel!=""){
            sql2+=' and c_provinceCode=(SELECT p_code FROM t_address_province WHERE p_name=?) GROUP BY c_name ORDER BY ac.id ASC'
            provinceSel=provinceSel.trim();
            params2.push(provinceSel)
        }

        /*县*/
        let params3 =[];
        let provinceSel3=req.query.provinceSel||"";
        let citySel=req.query.citySel||"";
        let sql3='SELECT ato.id AS t_id,t_code,t_name,t_cityCode FROM t_address_province AS ap,t_address_city AS ac,t_address_town AS ato WHERE 1=1'
        if(provinceSel3!=""){
            sql3+=' AND c_provinceCode=(SELECT p_code FROM t_address_province WHERE p_name=?)'
            provinceSel3=provinceSel3.trim();
            params3.push(provinceSel3)
        }
        if(citySel!=""){
            sql3+=' AND t_cityCode=(SELECT c_code FROM t_address_city WHERE c_name=?)'
            citySel=citySel.trim();
            params3.push(citySel)
        }
        sql3+=' GROUP BY t_name ORDER BY ato.id ASC'
        visaDaoCRM.getAllOrderCRM(sql,params).then(function (data) {/*签证订单所有数据查询*/
            orderQuery.push(data)
            visaDaoCRM.getqueryCountryCRM([]).then(function (data) {/*国家查询*/
                orderQuery.push(data)
                visaDaoCRM.getprovinceCRM().then(function (data) {  /*省查询*/
                    orderQuery.push(data)
                    resp.send(orderQuery)
                })
            })
        })
    },
    /*查询市县*/
    queryAddressCRM(req,resp){
        let orderQuery=[];
        /*地址查询*/
        /*市*/
        let params2 =[];
        let provinceSel=req.query.provinceSel||"";
        console.log(provinceSel)
        let sql2='SELECT ac.id AS c_id,c_name FROM t_address_province AS ap,t_address_city AS ac where 1=1'
        if(provinceSel!=""){
            sql2+=' and c_provinceCode=(SELECT p_code FROM t_address_province WHERE p_name=?) GROUP BY c_name ORDER BY ac.id ASC'
            provinceSel=provinceSel.trim();
            params2.push(provinceSel)
        }

        /*县*/
        let params3 =[];
        let provinceSel3=req.query.provinceSel||"";
        let citySel=req.query.citySel||"";
        let sql3='SELECT ato.id AS t_id,t_code,t_name,t_cityCode FROM t_address_province AS ap,t_address_city AS ac,t_address_town AS ato WHERE 1=1'
        if(provinceSel3!=""){
            sql3+=' AND c_provinceCode=(SELECT p_code FROM t_address_province WHERE p_name=?)'
            provinceSel3=provinceSel3.trim();
            params3.push(provinceSel3)
        }
        if(citySel!=""){
            sql3+=' AND t_cityCode=(SELECT c_code FROM t_address_city WHERE c_name=?)'
            citySel=citySel.trim();
            params3.push(citySel)
        }
        sql3+=' GROUP BY t_name ORDER BY ato.id ASC'
        visaDaoCRM.getcityCRM(sql2,params2).then(function (data) { /*市查询*/
            orderQuery.push(data)
            visaDaoCRM.gettownCRM(sql3,params3).then(function (data) { /*县/区查询*/
                orderQuery.push(data)
                resp.send(orderQuery)
            })
        })
    },

    delOrderCRM(req,resp){
        let orderId= req.body.orderId
        visaDaoCRM.getdelOrderCRM([orderId]).then(function (data) {
            resp.send(data)
        })
    },
    delAllOrderCRM(req,resp) {
        let oridArr = req.body.oridArr;
        let sql = 'UPDATE t_visaorder SET or_cancel=9 WHERE id in('
        for(let i=0;i<oridArr.length;i++){
            sql+='?,'
        }
        sql=sql.slice(0,(sql.length-1))
        sql+=')'
        console.log(sql)
        visaDaoCRM.getdelAllOrderCRM(sql,oridArr).then(function (data) {

            resp.send(data)
        })
    },
    queryVisaexcursionCRM(req,resp){
        let queryid=req.query.queryid;
        visaDaoCRM.getVisaexcursionCRM([queryid]).then(function (data) {
            console.log(data)
            resp.send(data)
        })
    },
    alterOrderCRM(req,resp){
        let orderId= req.body.orderId
        let orderName = req.body.orderName;
        let orderMail = req.body.orderMail;
        let goDateName = req.body.goDateName;
        let provincesName = req.body.provincesName;
        let cityName = req.body.cityName;
        let areaName = req.body.areaName;
        let streetName = req.body.streetName;
        let paramsArr=[orderName,orderMail,goDateName,provincesName,cityName,areaName,streetName,orderId]
        console.log('修改订单信息:',paramsArr)
        visaDaoCRM.getAlterOrderCRM(paramsArr).then(function (data) {
            resp.send(data)
        })
    },
    alterExcursionCRM(req,resp){
        let eName= req.body.eName
        let typeName= req.body.typeName
        let orderId= req.body.orderId
        let excursionArr=[eName,typeName,orderId]
        console.log(excursionArr)
        // console.log('修改出游人:',excursionArr)
        visaDaoCRM.getAlterExcursionCRM(excursionArr).then(function (data) {
            resp.send(data)
        })
    },

}
module.exports=visaContollerCRM;