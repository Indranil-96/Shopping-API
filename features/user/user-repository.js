import { getDB } from "../../config/configDB.js";
import { ApplicationError } from "../../error-Handler/Application-Error.js";
class UserRepository{

    async  signup(newUser) {
        try {

            //1. Get the database....
        const db= getDB();
        //2. get the collection
        const collection= db.collection("users");
        
        //3. push to database....
         await collection.insertOne(newUser);
        
        return newUser;
            
        } catch (err) {
            console.log(err);
            throw new ApplicationError(503, "Something went wrong");
        }
    }

    async singin(email, password){
        try {

            const db=getDB();
            const collection=db.collection("users");

            return await collection.findOne({email, password})
            
        } catch (err) {
            console.log(err);
            throw new ApplicationError(503, "Something went wrong");
        }
    }
}

export default UserRepository;