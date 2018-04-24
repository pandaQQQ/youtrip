const express = require("express");
const indexControllerCRM = require('../controller/indexControllerCRM')
const upload = require("../config/uploadFileConfig")
/*获取路由对象*/
const router=express.Router();

//--------------------查询套餐列表-------------------
router.get('/orderManage.do',indexControllerCRM.orderManageMsg)
/*查询下拉菜单*/
router.get('/orderSelect.do',indexControllerCRM.queryCountryCRM)
/*===================新增套餐========================*/
router.post('/addOrderManage.do',indexControllerCRM.addOrderManage)
/*修改订单*/
router.post('/alterOrderManage.do',indexControllerCRM.alterOrderManage)
/*上传新增图片*/
router.post('/shopImgSrc.do',upload.single('shopUpload'),indexControllerCRM.imgShopCRM)
router.post('/shopsDelAll.do',indexControllerCRM.shopsDelAllCRM)
router.post('/shopsDel.do',indexControllerCRM.shopDelCRM)

module.exports=router;

