const visaDao =require("../dao/lcf_visaDao");
const visaDaoCRM =require("../dao/lcf_visaDaoCRM");
const visaContoller ={
    /*首页*/
    queryHome(req,resp){
        let bannerQuery=[];
        visaDao.getBanner([]).then(function (data) {
            bannerQuery.push(data)
            visaDao.getDestination([]).then(function (data) {
                bannerQuery.push(data)
                visaDao.getCustomerCase([]).then(function (data) {
                    bannerQuery.push(data)
                    visaDao.getYouTrip([]).then(function (data) {
                        bannerQuery.push(data)
                        visaDao.getShops([]).then(function (data) {
                            bannerQuery.push(data)
                            visaDao.getUser([]).then(function (data) {
                                bannerQuery.push(data)
                                visaDao.getOrder([]).then(function (data) {
                                    bannerQuery.push(data)
                                    visaDao.getCountry([]).then(function (data) {
                                        bannerQuery.push(data)
                                        visaDao.getDesigner([]).then(function (data) {
                                            bannerQuery.push(data)
                                            resp.render('LCF_YouTripHome', {
                                                homebasic: bannerQuery[0],
                                                destination: bannerQuery[1],
                                                customerCase: bannerQuery[2],
                                                youTrip: bannerQuery[3],
                                                shops: bannerQuery[4],
                                                user: bannerQuery[5],
                                                order: bannerQuery[6],
                                                sumcountry: bannerQuery[7],
                                                designer: bannerQuery[8],
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    },

    /*签证*/
    queryuserid(req,resp) {
        let uname = req.query.uname.trim();
        visaDao.getqueryid([uname]).then(function (data) {
            resp.send(data)
        })
    },
    queryVisa(req,resp) {
        visaDao.getqueryVisa([]).then(function (data) {
            resp.render("LCF_visa",{visaCountry:data})
        })
    },
    queryVisado(req,resp) {
        let itemNum=req.query.itemNum;
        console.log(itemNum)
        visaDao.getqueryVisa([]).then(function (data) {
            resp.send(data)
        })
    },
    queryVisaDetails(req,resp){
        let visaid = req.query.id;
        visaDao.getqueryDetailsid([visaid]).then(function (data) {
            resp.render("LCF_visaDetails",{visaDetails:data})
        })
    },
    queryVisaOrder(req,resp){
        let orderName = req.query.orderName;
        console.log(orderName)
        // let orderArr=[];
        visaDao.getqueryOrder([orderName]).then(function (data) {
            // orderArr.push(data)
            resp.render("LCF_visaOrder",{visaOrder:data})
            // visaDaoCRM.getprovinceCRM([]).then(function (data) {  /*省查询*/
            //     orderArr.push(data)
            //     visaDaoCRM.getcityCRM([]).then(function (data) { /*市查询*/
            //         orderArr.push(data)
            //         visaDaoCRM.gettownCRM([]).then(function (data) { /*县/区查询*/
            //             orderArr.push(data)
            //             console.log(orderArr[0])
            //             resp.render("LCF_visaOrder",{visaOrder:orderArr})
            //         })
            //     })
            // })

        })
    },

    /*=============添加联系人信息============*/
    addOrderContact(req,resp){
        let uname = req.body.uname.trim();
        let orderVisaName = req.body.orderVisaName.trim();
        let contactUname = req.body.contactUname.trim();
        let contactTel = req.body.contactTel.trim();
        let contactEmail = req.body.contactEmail.trim();
        let goDate = req.body.goDate.trim();
        let sumFree = req.body.sumFree.trim();
        let refusalName = req.body.refusalName;
        let countPeople = req.body.countPeople;
        let ktfree = req.body.ktfree;
        let antifree = req.body.antifree;

        let cmbProvince = req.body.cmbProvince;
        let cmbCity = req.body.cmbCity;
        let cmbArea = req.body.cmbArea;
        let address = req.body.address;

        let free = req.body.free;
        let insurancxeName = req.body.insurancxeName;
        let matchNum = req.body.matchNum;
        let orderData = req.body.orderData;
        function myData(data) {
            resp.send(data)
        }
        let params=[matchNum,contactUname,contactTel,contactEmail,goDate,cmbProvince,cmbCity,cmbArea,address,ktfree,insurancxeName,free,refusalName,antifree,orderData,countPeople,sumFree,orderVisaName,uname]
        visaDao.addContact(params)
            .then(myData)
            .catch(function (err) {
                myData(err)
        })
    },
    /*出游人信息*/
    addOrderPeople(req,resp){
        let dataInfo = req.body;
        console.log(dataInfo)
        visaDao.addPeople(dataInfo)
            .then(function (data) {
                resp.send(data)
            })
            .catch(function (err) {
                resp.send(err)
            })
    }
}
module.exports=visaContoller;