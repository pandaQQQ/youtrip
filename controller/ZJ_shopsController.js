const ZJ_module=require('../dao/ZJ_shopsDao');//引入数据dao（查询语句）
const ZJ_shops={
    //查询全部
    journeyCon(req,resp){
        let SHOP=[];
        ZJ_module.journey.Con1().then(function (data) {//myShops大洲数SHOP[0]
            SHOP.push(data);
            ZJ_module.journey.Con2().then(function (data) {//myTheme主题菜单栏SHOP[1]
                SHOP.push(data);
                ZJ_module.journey.country().then(function (data) {//myCountry国家商品列表SHOP[2]
                    SHOP.push(data);
                    ZJ_module.journey.topCountry().then(function (data) {//myImg推荐国家SHOP[3]
                        SHOP.push(data);
                        ZJ_module.journey.Europe().then(function (data) {//欧洲国家SHOP[4]
                            console.log(data);
                            SHOP.push(data);
                            ZJ_module.journey.Antarctica().then(function (data) {//SHOP[5]美洲国家
                                SHOP.push(data);
                                ZJ_module.journey.Oceanica().then(function (data) {//SHOP[6]大洋洲澳洲
                                    SHOP.push(data);
                                    ZJ_module.journey.Caribou().then(function (data) {//SHOP[7]中东
                                        SHOP.push(data);
                                        ZJ_module.journey.Aaia().then(function (data) {//SHOP[8]东南亚
                                            SHOP.push(data);
                                            resp.render('ZJ_journey',{
                                                myShops:SHOP[0],
                                                myTheme:SHOP[1],
                                                myCountry:SHOP[2],
                                                myImg:SHOP[3],
                                                myEurope:SHOP[4],
                                                Antarctica:SHOP[5],
                                                Oceanica:SHOP[6],
                                                Caribou:SHOP[7],
                                                Aaia:SHOP[8],
                                            })

                                        })

                                    })
                                })
                            })

                        })

                    }

                    )
                }

                )
            })
        })
    },
    //查询世界表
    menuR(req,resp){
        let hhh=req.query.TEXT;
        callBack=(result)=>{
            resp.send(result)
        };
        ZJ_module.menuDao(hhh,callBack)
    },
    //查询主题表
    menuT(req,resp){
        let hhh=req.query.TEXT;
        console.log(hhh,"hhh");
        callBack=(result)=>{
            resp.send(result)
        };
        ZJ_module.menuTDao(hhh,callBack)

    },
    //查询主题世界2张表
    menuL(req,resp){
        let hhh=req.query.TEXT;
        let hhh2=req.query.TEXT2;
        callBack=(result)=>{
            resp.send(result)
        };
        ZJ_module.journey2(hhh,hhh2,callBack);
    },
    menuAll(req,resp){
            callBalk=function (result) {
                resp.send(result);
            };
            ZJ_module.AllCountry(callBalk)
        },


    //=================================goods==============================
    goodsController(req,resp){
        let Country=req.query.id;
        let GOODS=[];
        ZJ_module.goods.goodsDao(Country).then(function (data) {//查询商品基础信息
            GOODS.push(data);
            ZJ_module.goods.goodsDao2(Country).then(function (data) {//点击进来的国家所有信息
                GOODS.push(data);
                ZJ_module.goods.goodsDao3(Country).then(function (data) {//商品图片的信息
                    GOODS.push(data);
                    ZJ_module.goods.goodsDao4(Country).then(function (data) {//商品标签
                        GOODS.push(data);
                        ZJ_module.goods.goodsDao5().then(function (data) {
                            GOODS.push(data);
                            ZJ_module.goods.goodsDao6().then(function (data) {
                               GOODS.push(data);
                               console.log(data);
                                resp.render("ZJ_goods",{
                                    myCountry:GOODS[0],
                                    myCountry2:GOODS[1],
                                    myShopsImg:GOODS[2],
                                    myShopsTitle:GOODS[3],
                                    myShopsPrice:GOODS[4],
                                    myShopsDay:GOODS[5]
                                })

                            });
                        });

                    });


                });

            });

        })
    },


    //=================================Ddetails==============================
    detailsController(req,resp){
        let Details=req.query.id;
        console.log(Details);
        let SHOP=[];
        ZJ_module.details.detailsDao1(Details).then(function (data) {//查询商品所有信息
            SHOP.push(data);
           ZJ_module.details.detailsDao2().then(function (data) {//查询所有意外险
            SHOP.push(data);
            ZJ_module.details.detailsDao3().then((data)=>{//查询所有取消险
                SHOP.push(data);
                ZJ_module.details.detailsDao4(Details).then((data)=>{//查询商品图片
                    SHOP.push(data);
                    ZJ_module.details.detailsDao5(Details).then((data)=>{//设计师
                        SHOP.push(data);
                        ZJ_module.details.detailsDao6(Details).then((data)=>{//行程
                            SHOP.push(data);
                            ZJ_module.details.detailsDao7(Details).then((data)=>{//地图
                                SHOP.push(data);
                                console.log(data,"zhujies");
                                resp.render("ZJ_details",{
                                    myDetailsShops:SHOP[0],
                                    myDetailsInsurance:SHOP[1],
                                    myDetailsCancel:SHOP[2],
                                    myDetailsImages:SHOP[3],
                                    myDetailsDesigner:SHOP[4],
                                    myDetailsTrip:SHOP[5],
                                    myDetailsMap:SHOP[6]
                                })

                            })

                        });

                    });

                });

            });

        });
        })

    },


    //============================CaseController===========================
    CaseController(req,resp){
        let Case=req.query.id;
        let SHOP=[];
        ZJ_module.case.CaseDao(Case).then((data)=>{//顾客案列
            SHOP.push(data);
            ZJ_module.case.CaseDao2(Case).then((data)=>{//顾客案列的评价
                SHOP.push(data);
                ZJ_module.case.CaseDao3(Case).then((data)=>{//查询图片
                    SHOP.push(data);
                    ZJ_module.case.CaseDao4(Case).then((data)=>{//查询商品
                        SHOP.push(data);
                        console.log(data,"zhujie");
                        resp.render("ZJ_case",{
                            myCase:SHOP[0],
                            myCaseComment:SHOP[1],
                            myCaseImages:SHOP[2],
                            myCaseShops:SHOP[3]
                        })

                    })

                })
            })
        })
    },


//    ===============================CaseDetailsController==================
    CaseDetailsController(req,resp){
        let shop=req.query.id;
        let SHOP=[];

        ZJ_module.CaseDetails.CaseDetailsDao(shop).then((data)=>{
            SHOP.push(data);
            console.log(data);
            resp.render("ZJ_caseDetails",{
                myShop:SHOP[0]
            })
        })
    }
}
;

module.exports=ZJ_shops;