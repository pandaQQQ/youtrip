const youtrip=require("../dao/fz-youtripDao");
var uploadPath;
var myid;
const Y ={
    pageCount:3,
    getyoutrip(req,resp){
        let params=[];
        console.log('hah1',req.params.page)
        params.push((req.params.page-1)*Y.pageCount);
        params.push(Y.pageCount);
        youtrip.selectCount().then(total=>{
            // console.log(total[0].stucount)
            let result=Math.ceil(total[0].stucount/Y.pageCount);
            console.log('1SDFSF',result)
            youtrip.CheckUser(params).then(info=>{
                console.log('DFGDGDGDGDFG',params)
                resp.render("fz-youtrip",{mydata:info,totalCount:result})
            })
            // if(data.length>0){
            //     // console.log(data);
            //     // console.log( data[0].shareimgs);
            //     // console.log( data[0].shareimgs.split(',')[0]);
            //     resp.render("fz-youtrip",{mydata:data})
            //     // resp.send(data)
            // }
        })
    },
    selectone(req,resp){
        myid=req.body.id
        console.log(myid)
        youtrip.selectone([]).then( data=> {
            resp.send(data)
        })
    },

    fzcommounity(req,resp){
        let mydata=[]
        myid=Number(myid)+1
        console.log(myid)
        youtrip.fzcommounity([myid]).then( data=> {
           mydata.push(data);
            youtrip.selectcomment([myid]).then(data=>{
                mydata.push(data);
                console.log(data);
                resp.render("fz-commounity",{data:mydata[0],
                comment:mydata[1]})
            })

      })
    },
    insertcomment(req,resp){
        let commenntid=req.body.obj
        let comment=req.body.comment
        youtrip.insertcomment([comment,commenntid]).then(data=> {
            resp.send(data)
        })
    },
    aboutMe(req,resp){
        youtrip. aboutMe([]).then( data=> {
            resp.render("fz-aboutMe",{mydata:data})
        })
    },
    problem(req,resp){
        youtrip.problem([]).then( data=> {
            resp.render("fz-problem",{mydata:data})
        })
    },
    recruitment(req,resp){
        youtrip.recruitment([]).then( data=> {
            resp.render("fz-recruitment",{mydata:data})
        })
    },
    Team(req,resp){
        youtrip.Team([]).then( data=> {
            resp.render("fz-Team",{mydata:data})
        })
    },
    getallUser(req,resp){
        youtrip.getallUser([]).then(function (data) {
            resp.send(data)
        })

    },
    getallshare(req,resp){
        youtrip.getallshare([]).then(function(data) {
            resp.send(data)
        })

    },
    getallComment(req,resp){
        youtrip.getallComment([]).then(function(data) {
            resp.send(data)
        })
    },
    getallRecommend(req,resp){
        youtrip.getallRecommend([]).then(function(data) {
            resp.send(data)
        })
    },
    deleteShare(req,resp){
        console.log(req.body.myid);
        youtrip.deleteShare([req.body.myid]).then(function(data) {
            resp.send(data)
        })
    },
    deletePeople(req,resp){
        console.log(req.body.myid);
        youtrip.deletePeople([req.body.myid]).then(function(data) {
            resp.send(data)
        })
    },
    uploadimg(req,resp){
        console.log(uploadPath);
        youtrip.uploadimg([uploadPath,req.body.myid]).then(function(data) {
            resp.send(data)
        })
    },
    setuserImgSrc(req,resp) {
        uploadPath="upload/"+req.file.filename;
        resp.send('修改上传成功')
    },
    mysearch(req,resp){
        let title=req.body.title
        title='%'+title+'%'
        youtrip.mysearch([title,title]).then(function(data) {
            resp.send(data)
        })
    },
    setshare(req,resp){
        // id :myinput[0].value,
        //     t_title:myinput[1].value,
        //     t_text:myinput[2].value,
        //     t_starleveid:myinput[4].value,
        //     t_orderlist:myinput[5].value
        let id=req.body.id
        let title=req.body.t_title
        let text=req.body.t_text
        let starleveid=req.body.t_starleveid
        let orderlist=req.body.t_orderlist

        youtrip.setshare([title,text,starleveid,orderlist,id]).then(function(data) {
            resp.send(data)
        })
    }
    // getPageTotal(req,resp){
    //     let pageCount=3;
    //     youtrip.selectCount([]).then((data)=>{
    //        var data=data[0].totalcount;
    //        let result=Math.ceil(data/pageCount);
    //        result=String(result);
    //        resp.send(result);
    //     })
    //
    // }
};
module.exports=Y;