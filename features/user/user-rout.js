//Acquering module....
import express from "express";
import userController from "./user-controller.js";



//Initiliazing....
// We dont need to initialize if we use constructor.....
const UserRouter =express.Router();
const usercontroller= new userController();


//Routes....
UserRouter.post("/signup",(req, res)=>{
    usercontroller.signup(req,res);
});
UserRouter.post("/signin",(req, res)=>{
    usercontroller.singin(req,res);
});


export default UserRouter;