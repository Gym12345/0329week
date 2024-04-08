const dao=require("../database/pageDAO");


const pageRead={
    list:async (start, totalC) => {
        start = (start && start>1)? Number(start) :1 ;
        const page=pageOperation(start,totalC);
        console.log("page"+page)
        const list=await dao.daoRead.list(page.startNum , page.endNum);   

        
        console.log("service:", list);
        data= {};
        data.page=page;

        data.start=start;
        data.list=list.rows;

        return data;
    },
    content: async(num) =>{
        pageUpdate.upHit(num);

        const data=await dao.daoRead.content(num);
        return data.rows[0];
    },
    totalContent : async () => {
        const totalContent = await dao.daoRead.totalContent();
        console.log( totalContent );
        return totalContent.rows[0]["COUNT(*)"];
    }
}

const pageUpdate={
    upHit : (num) => {
        dao.daoUpdate.upHit(num);
    }

}
const pageOperation=(start,totalContent)=>{
    let page={};
    const pageNum=3;
    const num=(totalContent%pageNum ==0) ? 0 :1;
    /*if(totalContent %pageNum ==0) num=0;
    else num=1;
    */
    page.totPage=parseInt(totalContent/pageNum) +num;
    page.startNum=(start-1) * pageNum+1;
    page.endNum=start*pageNum;
    return page;
}
const pageInsert= async (body) => {
    console.log("write");
    const result= await dao.daoInsert.write(body);
    return result;
}

module.exports={pageRead,pageInsert, pageOperation};