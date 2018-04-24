const express = require("express");
const upload = require("../config/uploadFileConfig")
/*获取路由对象*/
/*====================冯政豪的控制文件=======================*/
const Y=require("../controller/fz-youtripC");

const router=express.Router();

/*==============冯政豪的动作模块====================Y.getyoutrip*/
// /:page
router.get("/fz-youtrip/:page",Y.getyoutrip);
router.post('/onclick.do',Y.selectone);


router.get('/fz-commounity',Y.fzcommounity);
router.post('/insertcomment',Y.insertcomment);

router.get('/fz-aboutMe',Y.aboutMe);
router.get('/fz-problem',Y.problem);
router.get('/fz-recruitment',Y.recruitment);
router.get('/fz-Team',Y.Team);
//这是vue页面的请求
//社区人员管理全部信息查询
router.get("/getallUser",Y.getallUser);
router.post("/deletePeople",Y.deletePeople);//删除
//单独查询
router.post("/mysearch",Y.mysearch);
//编辑里的上传图片
router.post('/setuserImgSrc.do',upload.single('addimgUpload'),Y.setuserImgSrc);
router.post('/uploadimg',Y.uploadimg)



//分享
router.get("/getallshare",Y.getallshare);
router.post('/setshare',Y.setshare);
router.post('/deleteShare',Y.deleteShare);
//评论
router.get("/getallComment",Y.getallComment);
//推荐
router.get("/getallRecommend",Y.getallRecommend);

module.exports=router;

