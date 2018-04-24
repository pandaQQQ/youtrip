const express = require("express");
/*获取路由对象*/
const router=express.Router();
const xr_controoler=require("../controller/xr_controoler")
const xr_sendcode = require("../controller/mailController")
const xr_yema=require("../controller/xr_yema")

router.post("/upadepassword.do",xr_controoler.upadetpassword)
router.post("/register.do",xr_controoler.addUser)
router.post("/login.do",xr_controoler.searchUser)
router.get("/getLoginUsername.do",xr_controoler.getLoginUsername)

router.post("/xr_update.do",xr_controoler.update)
router.post("/xr_research.do",xr_controoler.xr_serchperson)
router.get("/xr_seachid.do",xr_controoler.xr_seachhuiyuuan)
router.post("/xr_searchyaniphone.do",xr_controoler.xr_iph)
router.post("/resetPwd.do",xr_controoler.resetPwd)
router.post("/collect.do",xr_controoler.collect)


router.get("/register",function (req,resp) {
    resp.render("register",{home:0})
});
router.get("/login",function (req,resp) {
    resp.render("login",{home:0})
});
router.get("/login",xr_controoler.login)//登录界面的拦截
router.post("/yuikunag.do",xr_yema.yuikunagcon)
//个人中心拦截
router.get("/xierongcenter",function(req,resp){
    resp.render('xr_personmesg');
});
//页码查询
router.post("/xr_qianzhengbanli.do",xr_yema.yema)
router.post("/xr_serchweizhifu.do",xr_yema.weichaxunyema)
router.get("/searchall.do",xr_yema.xr_searchall)
router.post("/searchalredygo.do",xr_yema.xr_searchalredygo)
router.post("/nopayage.do",xr_yema.xr_nopaypage)
router.post("/nogopage.do",xr_yema.xr_nogopage)
router.post("/tuikuan.do",xr_yema.yiquxiaopage)
router.post("/quxiaodingdan.do",xr_yema.quxiaodingdancon)
router.post("/diangdanbianhao.do",xr_yema.diangdanbianhaocon)
//该状态
router.post("/aleader.do",xr_yema.alreypay)
//数据查询
router.post("/xr_shuju.do",xr_yema.yemashuju)
router.post("/weipingjia.do",xr_yema.weibanlishuju)
router.post("/searchallshuju.do",xr_yema.weibanlishujudan)
router.post("/searchalredygoshuju.do",xr_yema.searchalredygoshuju)
router.post("/nopayshuju.do",xr_yema.nopayshujucon)
router.post("/nogoshuju.do",xr_yema.nogoshujucon)
router.post("/yiquxiaoshuju.do",xr_yema.yiquxiaoshujucx)
router.get("/xr_personmesg",function(req,resp){
    resp.render("xr_personmesg",{id:12})
})

router.post("/sendCode.do",xr_sendcode.sendCode)
router.post("/yanzhrengCode.do",xr_sendcode.verifyCode)
module.exports=router;

