const express = require("express");
const upload = require("../config/uploadFileConfig")
/*================前台页面控制器文件引入====================*/
const lcf_visaController =require("../controller/lcf_visaController");

/*================后台页面控制器文件引入====================*/
const lcf_visaControllerCRM =require("../controller/lcf_visaControllerCRM");

/*获取路由对象*/
const router=express.Router();

/*=============================前台系统任务分发=========================================*/
router.get("/LCF_YouTripHome",lcf_visaController.queryHome)
router.get("/LCF_visa",lcf_visaController.queryVisa)
router.get("/LCF_visa.do",lcf_visaController.queryVisado)
router.get("/queryuserid.do",lcf_visaController.queryuserid)
router.get("/LCF_visaDetails",lcf_visaController.queryVisaDetails)
router.get("/LCF_visaOrder",lcf_visaController.queryVisaOrder)
//添加联系人信息
router.post("/orderContact.do",lcf_visaController.addOrderContact)
router.post("/orderPeople.do",lcf_visaController.addOrderPeople)

/*=============================后台系统任务分发=========================================*/
/*查询数据*/
router.get('/visaQuery.do',lcf_visaControllerCRM.queryVisaCRM)
/*删除单条数据*/
router.post('/visaDel.do',lcf_visaControllerCRM.delVisaCRM)
/*批量删除*/
router.post('/visaDelALL.do',lcf_visaControllerCRM.delAllVisaCRM)
/*修改数据*/
router.post('/visaAlter.do',lcf_visaControllerCRM.alterVisaCRM)
/*修改图片*/
router.post('/visaImgSrc.do',upload.single('imgUpload'),lcf_visaControllerCRM.SrcVisaCRM)
router.post('/visaImgLogo.do',upload.single('imgUpload'),lcf_visaControllerCRM.imgLogoVisaCRM)
/*新增数据*/
router.post('/visaAdd.do',lcf_visaControllerCRM.addVisaCRM)
/*上传新增图片*/
router.post('/addvisaImgSrc.do',upload.single('addimgUpload'),lcf_visaControllerCRM.addSrcVisaCRM)
router.post('/addvisaImgLogo.do',upload.single('addimgUpload'),lcf_visaControllerCRM.addimgLogoVisaCRM)

/*=======================签证订单======================================*/
/*查询订单*/
router.get('/visaOrderQuery.do',lcf_visaControllerCRM.queryOrderCRM)
/*删除单个订单*/
router.post('/visaOrderDel.do',lcf_visaControllerCRM.delOrderCRM)
/*删除多个订单*/
router.post('/visaOrderDelALL.do',lcf_visaControllerCRM.delAllOrderCRM)
/*修改订单信息*/
router.post('/visaOrderAlter.do',lcf_visaControllerCRM.alterOrderCRM)
router.post('/visaExcursionAlter.do',lcf_visaControllerCRM.alterExcursionCRM)
/*查询出游人信息*/
router.get('/queryVisaexcursion.do',lcf_visaControllerCRM.queryVisaexcursionCRM)
/*查询省市县*/
router.get('/queryAddress.do',lcf_visaControllerCRM.queryAddressCRM)


//上传证件
module.exports=router;

