const express = require("express");
const wy_customController=require("../controller/wy_customController");
const wy_customControllerCRM=require("../controller/wy_customControllerCRM");
/*获取路由对象*/
const router=express.Router();

//------------------前台路由---------------------------
//------------------前台客户案例---------------------------
router.get("/customCase",wy_customController.customCase);
//------------------前台客户案例跳转详情页---------------------------
router.get("/customCaseDetail.do",function(req,resp){
    console.log(req.query)
});
//------------------前台定制页面---------------------------
router.get("/customOne",function(req,resp){
    resp.render('wyCustomOne');
});
//------------------商品详情跳转填写订单信息页面--------------------
router.get("/orderMsj.do",wy_customController.yuding)
//------------------前台订单提交成功---------------------------
router.get("/OrderSuccess",function(req,resp){
    resp.render('wyOrderSuccess',{data:req.query});
});
//------------------提交订单---------------------------
router.get("/submitorder.do",wy_customController.orderMsg);
//---------------------提交定制需求------------------------------
router.post("/orderSubmit.do",wy_customController.submitOrder);

//------------------后台路由---------------------------
//--------------------查询用户订单信息-------------------
router.get('/customerOrder.do',wy_customControllerCRM.customOrder)
//--------------------查询用户后台头像信息-------------------
router.get('/getProtrait.do',wy_customControllerCRM.myportrait)
router.get('/homeData.do',wy_customControllerCRM.homeData)
router.get('/userMsg.do',wy_customControllerCRM.userMsg)
//--------------------查询用户定制信息-------------------
router.get('/customOrder.do',wy_customControllerCRM.peopleOrder)
//--------------------查询后台角色管理-------------------
router.get('/roleManage.do',wy_customControllerCRM.roleManage)
//--------------------查询后台管理员列表-------------------
router.get('/adminManage.do',wy_customControllerCRM.adminManage)
//--------------------查询国家列表-------------------
router.get('/countryMsg.do',wy_customControllerCRM.countryMsg)
//--------------------查询保险列表-------------------
router.get('/insuranceList.do',wy_customControllerCRM.insuranceListMsg)
//--------------------查询定制师列表-------------------
router.get('/orderDesigner.do',wy_customControllerCRM.orderDesignerMsg)
//--------------------查询套餐列表-------------------
// router.get('/orderManage.do',wy_customControllerCRM.orderManageMsg)
//--------------------查询客户案例列表-------------------
router.get('/customCase.do',wy_customControllerCRM.customCaseMsg)
//-------------------------后台查询功能------------------------------
//-------------------查询用户姓名和账号------------------------------------
router.get('/getUserName.do',wy_customControllerCRM.getUserName)
//-------------------查询管理员状态------------------------------------
router.get('/selectState.do',wy_customControllerCRM.selectStateMsg)
module.exports=router;


