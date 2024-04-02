
const db=require("../../db/user_cart");

const cart =() =>{
    console.log(db);
    return db
}
const save=(cart_list, id) =>{
    //select * from goods where goods_id=id;
    for(let i=0;i<db.length;i++){
        if(db[i].goods_id==id){
            cart_list = db[i];
            break;
        }
    }
    console.log ("at cookie service:"+JSON.stringify(cart_list));
    return cart_list;
}


module.exports={cart , save};