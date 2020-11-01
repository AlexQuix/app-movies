import express from "express";
import path from "path";
import ejs from "ejs";

//INICIALIZERS
const app = express();


//SETTINGS
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine(".ejs", ejs.renderFile)


// MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")))

//CONTROLLER
const {index} = require("./controller/index");


//ROUTES
app.get("/", index);


//PORT
app.listen(app.get("port"), ()=>{
    console.log("Server conected in port" + app.get("port"));
});