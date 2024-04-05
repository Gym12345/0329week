const express=require("express");
const app=express();
app.set("views","./views");
app.set("view engine","ejs");
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded());

app.use("/static",express.static("./public"));

const router= require("./routers/router")(app);
app.get("/",router);

const fileRouter= require("./routers/file_router");
app.use("/file",fileRouter);

app.listen(3000, () => console.log("3000 server"));