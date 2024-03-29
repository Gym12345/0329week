 const http = require('http'); //require () node js의 라이브러리 임포트 방식

const fs=require("fs");
 const app=http.createServer( (request,respond) =>{
      
            console.log('연결성공hi')
        
      

            respond.writeHead(200,{ 'Content-Type':'text/html;  charset=utf-8' }) //200 은 성공적인 연결을 뜻하는 HTTP 상태 코드


      if ( request.url ==="/") {            //url mapping
            respond.end(`<h1>기본페이지</h1>
                  <a href="/test">test이동</a>
            `)
      }else if(request.url ==="/test"){
            fs.readFile("./test.html", (err,data)=>{   //redirection
                 respond.end(data);                   //redirection
            });
      }else {     
            respond.end("정의되지않은 페이지")
      }
      

 })

 app.listen(3000, "192.168.42.92"); // 3000 번 포트 
