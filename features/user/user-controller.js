import UserModel from "./userDB.js";
import jwt from 'jsonwebtoken';
import UserRepository from "./user-repository.js";
import { ApplicationError } from "../../error-Handler/Application-Error.js";

class userController{

    constructor(){
        this.UserRepository=new UserRepository();
    }

    

    async singin(req,res){
        
        try {
            const {email,password}=req.body;
            const result= await this.UserRepository.singin(email,password)

        if(!result){
            return res.status(401).send("Invalid Credential");
        }else{

            // Basic Authentication....
            // return res.send("Login Successful");

            // JWT Authentication.....
            //create Token...
            const token=jwt.sign({id: result.id, mail: result.email},"luYLL3CcHV",{expiresIn: '1h'});  //sign method has three parameter jwt.sign(payload,key,option)
            //send token....
            return res.status(200).send(token);
        }
        } catch (err) {
            console.log(err);
            // throw new ApplicationError(503,'Invalid Credential');
        }
    }

    async signup(req,res){
        const {name, email, password, type}=req.body;
        const newUser= new UserModel(name, email, password, type);
        this.UserRepository.signup(newUser);
        res.status(201).send(newUser);
    }
}

export default userController;