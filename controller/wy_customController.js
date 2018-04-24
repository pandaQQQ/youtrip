const wy_customDao= require("../dao/wy_customDao.js")

const customController={
// -------------------------前台数据------------------------
//-------------------------商品详情页提交预定页面----------------
    yuding(req,resp){
        let allMsg=req.query
        let id=req.query.id;
        let can=parseInt(req.query.can);
        wy_customDao. yuding([id]).
        then((data)=> {
            if(data.length>0){
                allMsg.name=data[0].s_name;
                wy_customDao.quxiaoxian([can]).
                    then((data)=>{
                    allMsg.caname=data[0].ca_name;
                    resp.render('wyOrderMsg',{data:allMsg})
                })
            }
        })
    },
//-------------------定制表单提交内容渲染页面-------------
    myOrderMsg(req,resp){
        var orderMsgArry=[];
        let shopsId=req.query.id;
        let totalMoney=req.query.total;
        let totalNum=req.query.Num;
        let startTime=req.query.Time;
        let ins=req.query.ins;
        let can=req.query.can;
        wy_customDao.myOrderMsgShopsDao([shopsId]).
        then((data)=> {
            if(data.length>0){
                orderMsgArry.push(data)
                wy_customDao.myOrderMsgInsDao([ins]).
                then((data)=>{
                    orderMsgArry.push(data)
                    wy_customDao.myOrderMsgCanDao([can]).
                        then((data)=>{
                        orderMsgArry.push(data)
                        console.log(data)
                    })
                })
            }
        })
    },
//-------------------定制表单提交内容-------------
    submitOrder(req,resp){
        let destination=req.body.destination;
        let datebox=req.body.datebox;
        let totalPerson=req.body.totalPerson;
        let moneyYes=req.body.moneyYes;
        let hotelTypeYes=req.body.hotelTypeYes;
        let theme=req.body.theme;
        let others=req.body.others;
        let notes=req.body.notes;
        let nameMsg=req.body.nameMsg;
        let telMsg=req.body.telMsg;
        let emailMsg=req.body.emailMsg;
        let temp='';
        let timeArr=datebox.split('/');
        temp=timeArr[2];
        timeArr[2]=timeArr[1];
        timeArr[1]=timeArr[0];
        timeArr[0]=temp;
        datebox=timeArr.join('-');
        theme=theme.join(',');
        others=others.join(',')
        wy_customDao.personOrderMsg([
            destination,
            datebox,
            totalPerson,
            moneyYes,
            hotelTypeYes,
            theme,
            others,
            notes,
            nameMsg,
            telMsg,
            emailMsg
        ]).
        then((data)=> {
        resp.send(data)
        })
    },
    customCase(req,resp){
        wy_customDao.Case([]).
        then((data)=> {
            if(data.length>0){
                resp.render('WY_case',{data:data});
                console.log(data)
            }
        })
    },
    orderMsg(req,resp){
        let Num=req.query.Num;
        let total=req.query.total;
        let time=req.query.time;
        let orderNo=req.query.orderNo;
        let orderDate=req.query.orderDate;
        let orderName=req.query.orderName;
        let orderTel=req.query.orderTel;
        let orderMail=req.query.orderMail;
        wy_customDao.orderInsert(
            [orderNo,
                orderName,
                orderTel,
                orderMail,
                Num,
                orderDate,
                time,
                total
               ]).
        then((data)=> {

        })
    }
};
module.exports=customController;