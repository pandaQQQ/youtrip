const wy_customDaoCRM= require("../dao/wy_customDaoCRM.js")

const customControllerCRM={
//-------------------- 客户订单表-------------------
    customOrder(req,resp){
        var params=req.query;
        var sql='';
        if(params.orderstate==undefined||params.orderstate==0){
            params=''
            sql='SELECT * FROM t_user AS a \n' +
                'JOIN t_orderlist AS b ON a.id=b.or_userId JOIN t_shops AS c ON b.or_shopid=c.id \n' +
                'JOIN t_orderstate AS d ON d.id=b.or_state';
        }else{
            sql='SELECT * FROM t_user AS a \n' +
                'JOIN t_orderlist AS b ON a.id=b.or_userId JOIN t_shops AS c ON b.or_shopid=c.id \n' +
                'JOIN t_orderstate AS d ON d.id=b.or_state\n' +
                'WHERE b.or_state=?';
            params=req.query.orderstate;
        }
        wy_customDaoCRM.CheckOrder([params],sql).
        then((data)=> {
            if(data.length>0){
                resp.send(data)
            }
        })
    },
    myportrait(req,resp){
        wy_customDaoCRM.getportrait([1]).
        then((data)=> {
            if(data.length>0){
                resp.send(data)
            }
        })
    },
    homeData(req,resp) {
        wy_customDaoCRM.Country([]).then((data) => {
            if (data.length > 0) {
                resp.send(data)
            }
        })
    },
//------------------后台定制信息-------------------------------
    peopleOrder(req,resp){
    wy_customDaoCRM.designMsg([]).then((data) => {
        if (data.length > 0) {
            resp.send(data)
        }
       })
    },
    //------------------后台会员信息-------------------------------
    userMsg(req,resp){
        wy_customDaoCRM.userMsgDao([]).then((data) => {
            if (data.length > 0){
                resp.send(data)
            }
        })
    },
//--------------------查询后台角色管理-------------------
    roleManage(req,resp) {
        wy_customDaoCRM.roleManageDao([]).then((data) => {
            if (data.length > 0) {
                resp.send(data)
            }
        })
    },
    adminManage(req,resp) {
        wy_customDaoCRM.adminManageDao([]).then((data) => {
            if (data.length > 0) {
                resp.send(data)
            }
        })
    },
    countryMsg(req,resp) {
        wy_customDaoCRM.countryMsgDao([]).then((data) => {
            if (data.length > 0) {
                resp.send(data)
            }
        })
    },
    insuranceListMsg(req,resp) {
        wy_customDaoCRM.insuranceListMsgDao([]).then((data) => {
            if (data.length > 0) {
                resp.send(data)
            }
        })
    },
    orderDesignerMsg(req,resp) {
    wy_customDaoCRM.orderDesignerMsgDao([]).then((data) => {
        if (data.length > 0) {
            resp.send(data)
        }
    })
  },
    // orderManageMsg(req,resp) {
    //     wy_customDaoCRM.orderManageMsgDao([]).then((data) => {
    //         if (data.length > 0) {
    //             console.log(data)
    //             resp.send(data)
    //         }
    //     })
    // },
    customCaseMsg(req,resp) {
        wy_customDaoCRM.customCaseMsgDao([]).then((data) => {
            if (data.length > 0) {
                console.log(data)
                resp.send(data)
            }
        })
    },
    //-------------------routeOrder订单表相关处理-------------------
    //--------------------筛选订单状态-------------------
    // onSelectOrderMsg(req,resp) {
    //     var orderstate=req.query.orderstate
    //     wy_customDaoCRM.onSelectOrderMsgDao([orderstate]).then((data) => {
    //         if (data.length > 0) {
    //             resp.send(data)
    //         }
    //     })
    // }
//--------------------筛选用户账号信息--------------------------
    getUserName(req,resp) {
        let userId=req.query.userId;
        let userName=req.query.userName;
        let sql='SELECT * FROM t_user where 1=1';
        let params=[];
        if(userId){
            params.push(userId);
            sql+=' and username=?'
        }
        if(userName){
            params.push(userName);
            sql+=' and t_name=?'
        }
        wy_customDaoCRM.getUserNameDao(params,sql).then((data) => {
            if (data.length > 0) {
                resp.send(data)
            }
        })
    },
//----------------------查询管理员状态---------------------------
    selectStateMsg(req,resp){
    console.log(req.query)
    wy_customDaoCRM.selectStateDao([1]).
    then((data)=> {
        if(data.length>0){
            resp.send(data)
        }
    })
},
};
module.exports=customControllerCRM;