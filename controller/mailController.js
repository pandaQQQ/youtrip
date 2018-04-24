const AV = require('leancloud-storage');
const nodemailer = require('nodemailer');
const APP_ID = 'Xz6azjGHSk72fzbzD9CTibMM-gzGzoHsz';
const APP_KEY = 'h1AgP3j6RtxLPCaCF8UdtqUl';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
const smsController ={
    sendCode(req,resp){
        console.log(req.body.phone)
        AV.Cloud.requestSmsCode({
            mobilePhoneNumber: req.body.phone,
            name: 'LCF 140A',//正在使用什么服务
            op: 'LCF 140A登录DEMO',//进行什么操作
            ttl: 1                     // 验证码有效时间为 10 分钟
        }).then(function(){
            //调用成功
            resp.send("验证码发送成功")
        }, function(err){
            //调用失败
            resp.send(err)
            resp.send("验证码发送失败，请检查手机号")
        });
    },
    //验证码正确与否
    verifyCode(req,resp){
        AV.Cloud.verifySmsCode(req.body.code, req.body.phone).then(function(data){
            //验证成功
            console.log("验证成功")
            resp.send(data)
        }).catch( function(){
            console.log(err)
            resp.send(err)
        })
    },
    sendMail(req,resp){
        let transporter = nodemailer.createTransport({/*hmtp连接池*/
            host: 'smtp.qq.com',//发送邮件的服务器
            port: 587,//发送邮件的端口号
            secure: false, // true for 465, false for other ports //465-SSL
            auth: {   //账号信息
                user: "1752814820@qq.com", // generated ethereal user  发送方
                pass: "hfknjlnexkizecai"  // generated ethereal password 发送方授权码
            }
        });
        // setup email data with unicode symbols 发送邮件的内容配置
        let mailOptions = {
            from: '"百杰140A" <1752814820@qq.com>', // sender address //发送人
            to: req.body.receiver, // list of receivers //收件人
            subject: 'Hello World', // Subject line //邮件标题
            html: "<div>" +
            "<h1>Hello!!!!请看以下内容</h1>" +
            req.body.mailContent +
            "</div>", // html body
            attachments:[{
                filename:"personal_2.png",
                path:"./public/img/personal_2.png" //相对于服务器根地址
            }]
        };
        // send mail with defined transport object 执行发送邮件
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                resp.send(error)
            }else{
                resp.send(info)
            }
        });
    }
}

module.exports=smsController;