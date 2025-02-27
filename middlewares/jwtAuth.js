
import jwt from 'jsonwebtoken';

const jwtauth=(req,res,next)=>{
    //Read the token....
    const token=req.headers['authorization'];

    // if no token, return the error....
    if(!token){
        return res.status(401).send('Unauthorized Access');
    };

    // check if the token is valid....
    try {
        const payload=jwt.verify(token,"luYLL3CcHV"); // passing the token and the key.
        req.userID=payload.id; // attaching userid to request body...
        console.log(payload);
    } catch (error) {  // return error....
        return res.status(401).send('Unauthorized Access');
    }

    // call thenext middleware....

    next();
}

export default jwtauth