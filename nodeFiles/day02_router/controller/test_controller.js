const index=(request,response) =>{
    response.render("index");
}
const test1=(request,response) =>{
    response.send("test1111");
}
const test2=(request,response) =>{
    response.send("test2222");
}
module.exports={index:index , test1:test1 ,test2} ;