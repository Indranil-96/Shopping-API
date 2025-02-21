import UserModel from "./userDB.js";

class userController{
    signin(req,res){
        const {email,password}=req.body;
        const result=UserModel.signin(email,password);

        if(!result){
            return res.status(401).send("Invalid Credential");
        }else{
            return res.send("Login Successful");
        }
    }

    signup(req,res){
        const {name, email, password, type}=req.body;
        const user=UserModel.signup(name, email, password);
        res.status(201).send(user);
    }
}

export default userController;