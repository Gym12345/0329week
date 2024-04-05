const { render } = require("ejs");

const fs=require("fs");
const view = {
    index: (req, res) => {
        console.log("controller index 연동");
        res.render("file_index");
    },
    list:(req, res) => {
        let fList;
        fList= fs.readdirSync("./upload_file");
        res.render("file_list", { list : fList });
    },
    download : (req,res) => {
        const path=`./upload_file/${req.params.fileName}`;
        res.download(path);
    },
    modifyForm:(req, res) =>{
        const fileName=req.params.fileName;
        res.render("modify_Form",{fileName});
    }
};

const process = {
    upload: (req, res) => {
        console.log("upload 연동");
        console.log(req.file);
        console.log("validation:",req.fileValidation);
        if(req.fileValidation){
            return res.send(req.fileValidation);
        }


        res.send("연동"); // Assuming "upload_success" is the name of your success view
        console.log(req.body)
    },
    deleteFile: (req,res) =>{
        fs.unlinkSync("./upload_file/"+req.params.fileName);
        console.log("./upload_file/"+req.params.fileName);
        res.redirect("/file/list");
    },
    modify:(req,res) =>{
        console.log('req.file(modify):',req.file); //req.file = 사용자가 변경할파일
        console.log('req.body.originName(modify):',req.body.originFileName)
        
        if(req.file !==req.body.originFileName  && req.file !=undefined){
            fs.unlinkSync("./upload_file/"+ req.body.originFileName);
        }
            
        res.redirect("/file/list");

       

    }


};


module.exports = { view, process };
