/*引入第三方模块*/
const express=require("express");
const logger=require("morgan");
const favicon=require("serve-favicon");
const bodyParser = require("body-parser");//处理post数据
const path = require("path");//处理路径
const session = require("express-session");
const cookieParser = require("cookie-parser");/*只会将session的标志，不会存会话数据*/
//引入自己的模块
const indexrouter=require("./routes/indexFileRouter");
const fzhrouter=require("./routes/fzhFileRouter");
const lcfrouter=require("./routes/lcfFileRouter");
const wyrouter=require("./routes/wyFileRouter");
const zjrouter=require("./routes/zjFileRouter");
const xrrouter=require("./routes/xrFileRouter");

//调用express，创建项目的实例,搭建了服务器
const app=express();

/*=============session和cookie的配置===============*/
app.use(cookieParser());
app.use(session({
    name:"youtrip",
    secret:"123456789",
    cookie:{maxAge:300000},
    resave:true,
    rolling:true,
    saveUninitialized:true
}));

/*============日志配置===============*/
app.use(logger("dev"));//调用日志，配置为的dev模式
// =====================图标配置==============================
app.use(favicon(__dirname+"/public/images/favicon.ico"));

/*===========视图引擎配置===========*/
app.set("views",path.join(__dirname,"views"));  //视图文件路径
app.set("view engine","ejs");




/*============post读取数据===================*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//必须放在静态资源的路径设置之前
//  app.use("/",(req,resp,next)=> {
//     req.headers.referer=req.headers.referer||"";
//      if(req.session.username||req.path=="/login"||req.headers.referer.match(/login$/)){
//         app.locals.username=req.session.username
//         next()
//      }else {
//          req.session.originalURL = req.url;
//          resp.redirect('/login');
//      }
//  });



//集成了路由
//告诉router有请求来了，要去分任务，直接把任务转给router
app.use(indexrouter);
app.use(fzhrouter);
app.use(lcfrouter);
app.use(wyrouter);
app.use(xrrouter);
app.use(zjrouter);

//静态资源
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(path.join(__dirname,"/public/pages")));
//项目监听
app.set("port",8888);
app.listen(8888,()=>{
    console.log("8888端口已经启动");
});