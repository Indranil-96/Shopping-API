// here we have designed a class which inherit the javascript class Error
export class ApplicationError extends Error{ 

    constructor(code, message){
        super(message);
        this.code=code;
    }
}