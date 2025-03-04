//Importing modules....
import express from "express";
import productrouter from "./features/product/controllers/product-router.js";
import UserRouter from "./features/user/user-rout.js";
// import basicAuthorizer from "./middlewares/basicAuth.js";
import Env from "dotenv";
Env.config();
import bodyParser from "body-parser";
import jwtauth from "./middlewares/jwtAuth.js";
import cartRouter from "./features/cart/cart-route.js";
import cors from 'cors';
import loggerMiddleware from "./middlewares/Winstone-Logger.js";
import { ApplicationError } from "./error-Handler/Application-Error.js";
// import loggerMiddleware from "./middlewares/Logger-middleware.js";
// import swaggerJSDoc from "swagger-jsdoc";
// import swagger from "swagger-ui-express"; // swagger ui here....
// import apiDocs from "./swagger.json" assert {type:'json'} ;

// import { promises as fs } from 'fs';
// import { dirname, join as pathJoin } from 'path';
// import { fileURLToPath } from 'url';

// Get the directory name of the current module
// const __dirname = dirname(fileURLToPath(import.meta.url));

// async function loadData() {
//   try {
//     const filePath = pathJoin(__dirname, 'swagger.json');
//     const fileContent = await fs.readFile(filePath, 'utf-8');
//     const data = JSON.parse(fileContent);
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error('Error loading JSON:', error);
//   }
// }





//Aquring Express in our app....
const server=express();
const port=process.env.port || 3300;




//CORS Policy configuration


// bydefault cors will allow all client to accessthis but through the use of options we can limit this....
let corsOptions={
    origin: 'http://localhost:5501'
}

server.use(cors());

// server.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');
//     res.header('Access-Control-Allow-Headers', '*');
//     res.header('Access-Control-Allow-Methods', '*');
  
//     if(req.method=="OPTIONS"){
//       return res.status(200);
//     }
//     next();
//   });




// Middlewares....
server.use(bodyParser.json());
server.use(express.json()); // to parse data while sending raw data from postman..
server.use(loggerMiddleware);

//Error handelling middleware.... this should be appeare at last
server.use((err, req, res, next)=>{
    console.log(err);


    // if it is an application error
    if(err instanceof ApplicationError){ // is it an instance of error handelling class...
        res.status(err.code).send(err.message);
    }

    //if it is a server error
    res.status(500).send('Internal Server Error');
});

// Swagger

// server.use('/api-Docs', swagger.serve, swagger.setup(loadData()));

// Routes...
server.use("/api/product",jwtauth,productrouter);
server.use("/api/user",UserRouter);
server.use("/api/cart",jwtauth,cartRouter);
server.get('/', (req,res)=>{
    res.send("Welcome to E-Commerce API");
});

// handelling 404 -- it will handel all other routes which is not present in our application as because we have not specified any path here..
server.use((req,res)=>{
    res.status(404).send('API not Found');
});



//Server Listning....
server.listen(port,(err)=>{
    if(err){
        console.log(`Error Occured:- ${err}`);
    }else{
        console.log(`Server is Listining to the port- http://localhost:${port}`);
    }
})