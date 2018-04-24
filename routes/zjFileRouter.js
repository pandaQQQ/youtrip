const express = require("express");
const shops=require('../controller/ZJ_shopsController');
/*获取路由对象*/
const router=express.Router();

//====================商品首页==================
router.get("/journey",shops.journeyCon);
//商品菜单1
router.get('/jou1.do',shops.menuT);
//全部商品1
router.get('/jouAll.do',shops.menuAll);
//国家菜单2
router.get('/jou2.do',shops.menuL);
//世界菜单
router.get('/jou3.do',shops.menuR);



//=====================商品2页==================
router.get("/goods.do",shops.goodsController);
//====================商品详情==================
router.get("/details.do",shops.detailsController);

//===================客服案列内页===============
router.get("/case.do",shops.CaseController);

//================
router.get("/CaseDetails.do",shops.CaseDetailsController);
//客服案例2页
module.exports=router;

