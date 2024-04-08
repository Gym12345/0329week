const service=require("../service/page_service")
const views={
    index:(req,res)=>{
        res.render("index");
    },
    list: async(req, res) =>{
    
        const totalContent = await service.pageRead.totalContent();
        const data=await service.pageRead.list(req.query.start, totalContent);
        console.log("data"+data);
        console.log("req.query.start:", req.query)
        res.render("list",{list:data.list ,start:data.start ,totalContent , page:data.page});
    },

    write_form:(req,res) =>{

        res.render("write_form");
    },
    content: async(req,res) =>{
        const data = await service.pageRead.content(req.params.num);
        res.render("content",{data});

    }
    
   
}
const process={
    write: async(req,res) =>{
        const msg=await service.pageInsert(req.body);
        res.redirect("/page/list");
    },
}

module.exports={views,process};