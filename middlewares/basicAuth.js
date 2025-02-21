import UserModel from "../features/user/userDB.js";

const basicAuthorizer = (req, res, next)=>{

    const authHeader= req.headers["authorization"]; //Authorization header is a part of 

    // Check if authorization header is empty..

    if(!authHeader){
        return res.status(401).send("no authorization details found");
    }

    console.log(authHeader);

    // Extract credential in base64 format..
    const base64credentials= authHeader.replace('Basic', ' ');

    console.log(base64credentials);

    // Decode credential...
    const decodcred= Buffer.from(base64credentials, 'base64').toString('utf-8');
    const creds= decodcred.split(':'); // here the creds is an array which contains username and password
    console.log(creds);

    const users=UserModel.getall().find((u)=> u.email==creds[0] && u.password==creds[1]);

    if(users){
        next() // if we find such user then we will call the next middleware..
    }else{
        return res.status(401).send('Invalid Credential');
    }

}

export default basicAuthorizer;

// we will not use this middleware to secure user because if we do so we will not be able to login or register..
