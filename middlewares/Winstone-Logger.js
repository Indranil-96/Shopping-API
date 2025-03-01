import winston from 'winston';


const Logger=winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'request-logging' },
    transports:[
        new winston.transports.File({filename:'logs.txt'})      
    ]
});


const loggerMiddleware= async(req, res, next)=>{
    const data=`${req.url} - ${JSON.stringify(req.body)}`;
    Logger.info(data);
    next();
};

export default loggerMiddleware;