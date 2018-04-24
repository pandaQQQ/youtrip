/**
 * Created by xr on 2018/3/20.
 */
const yemadao=require("../dao/yemadao")
const yemacon= {

    yema(req, resp){
        let a = 16
        yemadao.yemacha([a]).then(function (data) {
            resp.send(data)
        })
    },
    yemashuju(req, resp){
        let yema = req.body.yema;
        yemadao.shuju([yema]).then(
            function (data) {
                resp.send(data)
            }
        )
    },
    weichaxunyema(req, resp){
        let a = 1;
        let b = 3;
        yemadao.weibanliyema([a, b]).then(
            function (data) {
                resp.send(data)

            }
        )

    },
    weibanlishuju(req, resp){

        let weipingjia = req.body.weipingjia;
        yemadao.weipingjiadao11(weipingjia).then(
            function (data) {
                resp.send(data)

            }
        )
    },
    xr_searchall(req, resp){
        let ssurl = req.query.ssurl
        console.log(ssurl)
        yemadao.searchyema([ssurl]).then(function (data) {
            console.log(data)
            resp.send(data)
        })
    },
    weibanlishujudan(req, resp){
        let allshuju = req.body.allshuju
        yemadao.searchshuju(allshuju).then(
            function (data) {
                resp.send(data)
            }
        )
    },
    xr_searchalredygo(req, resp){
        let ssurl= req.body.ssurl
        yemadao.alredygodao([ssurl]).then(
            function (data) {
                resp.send(data)
            }
        )
    },
    searchalredygoshuju(req, resp){
        let agogo = req.body.alredygo
        yemadao.agogodao(agogo).then(
            function (data) {
                resp.send(data)

            }
        )

    },
    xr_nopaypage(req, resp){
        yemadao.nopaydao().then(
            function (data) {
                resp.send(data)
            }
        )
    },
    nopayshujucon(req, resp){
        let nopaym = req.body.nopayshuju
        yemadao.nopayshujudao(nopaym).then(function (data) {
            resp.send(data)
        })
    },
    xr_nogopage(req, resp){
        yemadao.xr_nogopagedao().then(function (data) {
            resp.send(data)
        })
    },
    nogoshujucon(req, resp){
        let nogoshuju = req.body.nogoshuju
        yemadao.nogoshujudao(nogoshuju).then(function (data) {
            resp.send(data)
        })
    },
    yiquxiaopage(req, resp){
        yemadao.yiquxiaoDao().then(function (data) {
            resp.send(data)
        })
    },
    yiquxiaoshujucx(req, resp){
        let yiquxiaoshuju = req.body.yiquxiaoshuju
        yemadao.yiquxiaoshujudao(yiquxiaoshuju).then(
            function (data) {
                resp.send(data)
            }
        )
    },
    alreypay(req, resp){
        let alreadypay = req.body.bianhao1
        yemadao.alreadypaydao([alreadypay]).then(
            function (data) {
                resp.send(data)
            }
        )
    },
    yuikunagcon(req, resp){
    let zhunbeituikunagshuju=req.body.zhunbeituikunagshuju

        yemadao.zhunbeituikunagshujudao(zhunbeituikunagshuju).then(
            function(data){
              resp.send(data)

            }
        )

    },
    quxiaodingdancon(req,resp){
        let quxiaodingdan=req.body.quxiao
        yemadao.quxiaodingdandao(quxiaodingdan).then(
            function(data){
                resp.send(data)
            }

        )
},
    diangdanbianhaocon(req,resp){
       let diangdanbianhao=req.body.diangdanbianhao
        yemadao.diangdanbianhao(diangdanbianhao).then(
            function(data){
                resp.send(data)

            }
        )

    }


}


module .exports=yemacon