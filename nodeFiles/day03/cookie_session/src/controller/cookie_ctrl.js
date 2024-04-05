
const { request, response } = require("express");
const config=require("../../config/config.js");
const cookieConfig=config.cookieConfig;
const index = (request, response) => {

    console.log(request.cookies)
    const userCookie =  request.cookies.myCookie ;
    //const  encodedCookie=request.signedCookies.myCookie; 암호화 된쿠키 불러올떄

    response.cookie("myCookie", "valueCookie", cookieConfig);
    response.render("index", { userCookie });
};

const popup = (request, response) => {
    response.render("popup");
};

const cookie02=(request,response) =>{  // 특정시간만큼 안열리는 팝업창
    const userCookie=request.cookies.myCookie;
    response.render("cookie02",{userCookie}); 
}
const popup02 = (request, response) => {
    response.render("popup02");
};
const makeCookie=(request,response) => {
    
    response.cookie("myCookie", "value1", cookieConfig);
    response.send("<script> window.close()  </script>")
    
}


const ser=require("../service/cookie_service");

const cart=(request,response) =>{
    response.render("cart",{list: ser.cart()})
}

// const success = (req,res) =>{

//     if(req.session.username ){  //세션 존재유무에 따라 
//         res.render("success",{nick :req.session.nick});
//     }
//     else{
        
//         let msg=scriptMsg("로그인 먼저하세요","login")

//         res.send(msg);
//     }
   
   
   
// }
const scriptMsg=( sMsg, sUrl) =>{
    return `<script> alert("${sMsg}"); 
    location.href="${sUrl}";
    </script>`;
}
let cart_array=[];
const save = (request,response) =>{
    if(request.session.username){  //세션 추가

            if(request.cookies.cart_array == null){ 
                cart_array=[];  //이거 안해주면  전역변수인 cartarray 는 쿠키가아니기떄문에 자동으로 소멸하지않음 그래서 따로 소멸될떄(null) 일떄 그냥 초기화 해버려야함 
            }
            const goods_id=request.params.goods;


            let cart_list=request.signedCookies.cart_list;

            if(cart_list === undefined){
                cart_list={};
            }
            
            cart_list=ser.save(cart_list,goods_id);
            cart_array.push(cart_list);

        
            //console.log("cart_list:"+JSON.stringify(cart_list)); // cart_list 배열아님 그냥 스트링 값 한개임

        
            
            response.cookie('cart_array', cart_array, cookieConfig);
        
            //console.log("at cart_array:"+cart_array);
        
            const msg =
            ` <script>
                alert("${goods_id}상품을 장바구니에 등록 되었읍!!!");
                location.href="/cart";
            </script>`
            response.send(msg);
        }
        else{
            let msg=scriptMsg("로그인이 필요한 서비스입니다","/cart")
            response.send(msg)
        }
    
}
const viewList =(request,response) =>{
    if(request.session.username){  //세션 추가
        const cart_array = request.cookies.cart_array;
        // console.log("at viewList:"+cart_array);
         if(!cart_array){
             const msg = `<script> alert("저장된 목록이 없습니다");
                          location.href="/cart";
                         </script>`;
             response.status(200).send(msg);
         } else {
             response.render("viewList",{cart_array});
         }
     }

     else{

        let msg=scriptMsg("로그인이 필요한 서비스입니다","/session/login")
        response.send(msg)
     }
    }


   

module.exports = { index, popup , cookie02 ,popup02, makeCookie , cart ,save , viewList,scriptMsg};
