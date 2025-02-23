import UserModel from "./userDB.js";
import jwt from 'jsonwebtoken';

class userController{
    signin(req,res){
        const {email,password}=req.body;
        const result=UserModel.signin(email,password);

        if(!result){
            return res.status(401).send("Invalid Credential");
        }else{

            // Basic Authentication....
    //        return res.send("Login Successful");

            // JWT Authentication.....

            //create Token...
            const token=jwt.sign({id: result.id, mail: result.email},"luYLL3CcHV",{expiresIn: '1h'});  //sign method has three parameter jwt.sign(payload,key,option)
            //send token....
            return res.status(200).send(token);
        }
    }

    signup(req,res){
        const {name, email, password, type}=req.body;
        const user=UserModel.signup(name, email, password);
        res.status(201).send(user);
    }
}

export default userController;