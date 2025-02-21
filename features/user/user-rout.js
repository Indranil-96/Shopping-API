//Acquering module....
import express from "express";
import userController from "./user-controller.js";



//Initiliazing....
// We dont need to initialize if we use constructor.....
const UserRouter =express.Router();
const usercontroller= new userController();


//Routes....
UserRouter.post("/signup",usercontroller.signup);
UserRouter.post("/signin",usercontroller.signin);


export default UserRouter;