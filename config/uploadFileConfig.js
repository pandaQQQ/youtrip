const multer=require("multer");
const storage=multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,"./public/upload");
    },
    filename:function(req,file,callback){
        var fileFormat=(file.originalname).split(".");
        callback(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});
const upload=multer({
    storage:storage
});
module.exports=upload;