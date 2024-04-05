const express = require('express');
const app = express();
const path = require('path');
const cookieRouter = require("./src/routes/cookie_router");
const cookieParser = require("cookie-parser");
const config = require("./config/config");
const session = require("express-session");
const sessionRouter = require("./session/src/routes/session_router");
const bodyParser = require("body-parser");


//session store
const fileStore = require("session-file-store")(session); 
config.sessionConfig.store=new fileStore();       
//session store-ends

app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

app.use(cookieParser("secret"));
app.use(express.urlencoded({ extended: true })); // Instead of bodyParser.urlencoded() //session  라우터 보다 위에 써야함

app.use(session(config.sessionConfig));
app.use("/", cookieRouter);
app.use("/session", sessionRouter);


app.listen(3000, "127.0.0.1");
