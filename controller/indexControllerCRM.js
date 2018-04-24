const indexDaoCRM =require("../dao/indexDaoCRM");
var uploadPath;
const indexContoller ={
    /*查询套餐*/
    orderManageMsg(req,resp) {
        indexDaoCRM.orderManageMsgDao([]).then((data) => {
            if (data.length > 0) {
                resp.send(data)
            }
        })
    },
    queryCountryCRM(req,resp) {
        let orderQuery=[];
        indexDaoCRM.getCountryNameCRM([]).then(function (data) {
            orderQuery.push(data)
            indexDaoCRM.getDesigneridCRM([]).then(function (data) {
                orderQuery.push(data)
                indexDaoCRM.getOrderstateCRM([]).then(function (data) {
                    orderQuery.push(data)
                    indexDaoCRM.getHotNameCRM([]).then(function (data) {
                        orderQuery.push(data)
                        resp.send(orderQuery)
                    })
                })
            })
        })
    },
    /*新增套餐*/
    addOrderManage(req,resp){
        let sname=req.body.sname
        let countryname=req.body.countryname
        let stateName=req.body.stateName
        let designerid=req.body.designerid
        let sgo=req.body.sgo
        let destination=req.body.destination
        let teamNumber=req.body.teamNumber
        let price=req.body.price
        let day=req.body.day
        let shopkey=req.body.shopkey
        let seasonsay=req.body.seasonsay
        let productdec=req.body.productdec
        let hotName=req.body.hotName
        let jing=req.body.jing

        let queryArr=[sname,sgo,destination,teamNumber,price,day,shopkey,seasonsay,productdec,designerid,countryname,stateName,jing,hotName]
        console.log(queryArr)
        let dataArr=[]
        indexDaoCRM.addOrder(queryArr).then(function (data) {
            dataArr.push(data)
            indexDaoCRM.addshopimg([uploadPath]).then(function (data) {
                dataArr.push(data)
                resp.send(dataArr)
            })
        })
    },
    alterOrderManage(req,resp){
        let sname=req.body.sname
        let countryname=req.body.countryname
        let stateName=req.body.stateName
        let designerid=req.body.designerid
        let sgo=req.body.sgo
        let destination=req.body.destination
        let teamNumber=req.body.teamNumber
        let price=req.body.price
        let day=req.body.day
        let shopkey=req.body.shopkey
        let seasonsay=req.body.seasonsay
        let productdec=req.body.productdec
        let hotName=req.body.hotName
        let jing=req.body.jing

        let alterArr=[sname,sgo,destination,teamNumber,price,day,shopkey,seasonsay,productdec,designerid,countryname,stateName,jing,hotName]
        console.log(queryArr)
        indexDaoCRM.alterOrder(alterArr).then(function (data) {
            resp.send(data)
        })
    },
    /*上传图片*/
    imgShopCRM(req,resp) {
        uploadPath="upload/"+req.file.filename;
        resp.send('上传成功')
    },

    shopDelCRM(req,resp){
        let shopId= req.body.shopId
        visaDaoCRM.getshopDelCRM([shopId]).then(function (data) {
            resp.send(data)
        })
    },
    shopsDelAllCRM(req,resp) {
        let oridArr = req.body.oridArr;
        let sql = 'DELETE FROM t_shops WHERE id in('
        for(let i=0;i<oridArr.length;i++){
            sql+='?,'
        }
        sql=sql.slice(0,(sql.length-1))
        sql+=')'
        console.log(sql)
        visaDaoCRM.getshopsDelAllCRM(sql,oridArr).then(function (data) {
            resp.send(data)
        })
    },
}
module.exports=indexContoller;