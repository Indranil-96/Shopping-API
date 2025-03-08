import { MongoClient } from "mongodb";

const url="mongodb://127.0.0.1:27017/ecomDB"; // Instade of localhost use 127.0.0.1

let client;

export const connectDB= async()=>{
        await MongoClient.connect(url)

        .then((clientInstance) => {

            client=clientInstance; //storing the data base instance 

            console.log('MongoDB Connected Successfully');
        }).catch((err) => {
            console.error(err);
        });
}


export const getDB=()=>{
    return client.db(); // this will provide the data base access....
}