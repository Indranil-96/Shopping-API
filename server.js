//Importing modules....
import express from "express";
import productrouter from "./features/product/controllers/product-router";



// Middlewares....




//Aquring Express in our app....
const server=express();
const port=3300;


// Routes...
server.use("/api/product",productrouter);
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