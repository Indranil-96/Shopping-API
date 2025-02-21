//Importing modules....
import express from "express";
import productrouter from "./features/product/controllers/product-router.js";
import UserRouter from "./features/user/user-rout.js";
import basicAuthorizer from "./middlewares/basicAuth.js";
import Env from "dotenv";
Env.config();
import bodyParser from "body-parser";



//Aquring Express in our app....
const server=express();
const port=process.env.port || 3300;



// Middlewares....
server.use(bodyParser.json());
server.use(express.json()); // to parse data while sending raw data from postman..



// Routes...
server.use("/api/product",basicAuthorizer,productrouter);
server.use("/api/user",UserRouter);
server.get('/', (req,res)=>{
    res.send("Welcome to E-Commerce API");
})



//Server Listning....
server.listen(port,(err)=>{
    if(err){
        console.log(`Error Occured:- ${err}`);
    }else{
        console.log(`Server is Listining to the port- http://localhost:${port}`);
    }
})