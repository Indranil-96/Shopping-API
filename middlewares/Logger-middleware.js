import fs from 'fs';


const fspromise =fs.promises;

async function log(logData) {
    try {
        logData= `\n ${new Date().toString()} - ${logData}`;
        await fspromise.appendFile('log.txt',logData);
    } catch (err) {
        console.log(err);
    }
}



const loggerMiddleware= async(req, res, next)=>{
    const data=`${req.url} - ${JSON.stringify(req.body)}`;
    await log(data);
    next();
};


export default loggerMiddleware;