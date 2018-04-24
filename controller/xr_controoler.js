const personDao=require("../dao/xr_zhuceDao")


const xr_controller={
     /*用户注册*/
    addUser(req,resp){
       let xr_username= req.body.xr_username
        let xr_password=req.body.xr_password
        let my_othername=req.body.my_othername
        personDao.xrAdduser([xr_username]).then(
            function(data){
                if(data.length>0){
                    resp.send(data)
                }else{
                    personDao.xr_newadduser([xr_username,xr_password,my_othername]).then(
                        function(data){
                          resp.send(data)
                        }
                    )
                }
            }
        )
    },
    /*用户登录*/
    searchUser(req,resp){
        let xr_searchuser=req.body.xr_user
        let xr_sezrchpassword=req.body.xr_password
        personDao.xr_search([xr_searchuser,xr_sezrchpassword]).then(
            function (data){
                if(data.length>0){
                    req.session.username = data[0].username;
                    resp.send(data)
                }else{
                    resp.send("失败")
                }
            }
        )
    },
    login(req,resp){
        personDao.login().then((data)=> {
            resp.render("login",{mydata:data})
        })
    },
    getLoginUsername(req,resp){
        resp.send(req.session.username)
    },
    /*=====================修改个人信息====================*/
    update(req,resp){
        let xr_huiyuan=req.body.xr_huiyuan
        let xr_phonenumber=req.body.xr_phonenumber
        let xr_nichen=req.body.xr_nichen
        let xr_name=req.body.xr_name
        let xr_sex=req.body.xr_sex
        let xr_email=req.body.xr_email
        console.log(xr_phonenumber,xr_nichen,xr_name,xr_sex,xr_email,xr_huiyuan)
        personDao.xr_updatemesg([xr_phonenumber,xr_nichen,xr_name,xr_sex,xr_email,xr_huiyuan]).then(
            function(data){
                resp.send(data)
            }
        )
    },
    upadetpassword(req,resp){
        let xr_huiyuan=req.body.xr_huiyuan
        let xr_divinputmima=req.body.xr_divinputmima
        personDao.xr_upate([xr_divinputmima,xr_huiyuan]).then(
            function(data){
                resp.send(data)
        })
    },
    /*=============会员查询===================*/
    xr_serchperson(req,resp){
        let xr_huiyuan=req.body.xr_huiyuan
        personDao.xr_serchperson([xr_huiyuan]).then(
            function(data){
                resp.send(data)
            }
        )
    },
    xr_seachhuiyuuan(req,resp){
        let uname=req.query.ssUrl;
        personDao.xr_seachhuiyuuanid([uname]).then(
            function(data){
                resp.send(data)
            }
        )
    },
    xr_iph(req,resp){
        let my_iphone= req.body.myphone
        personDao.xr_iphoner([my_iphone]).then(
            function(data){
                resp.send(data)
            }
        )
    },
    resetPwd(req,resp){
        let pwd = req.query.pwd
        let phone = req.query.newphone
        personDao.alternewphone([pwd,phone]).then(function(data) {
            resp.send(data)
        })
    },
    collect(req,resp){
        let ssurl = req.body.ssurl
        personDao.getcollect([ssurl]).then(function(data) {
            resp.send(data)
        })
    }
}
module.exports=xr_controller
