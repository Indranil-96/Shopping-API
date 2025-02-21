class UserModel{
    constructor(name, email, password, type, id){
        this.name=name;
        this.email=email;
        this.password=password;
        this.type=type;
        this.id=id;
    }

    static signup(name, email, password, type){
        const newuser = new UserModel (name, email, password, type);
        newuser.id=Users.length+1;
        Users.push(newuser);
        return newuser;
    }

    static signin(email, password){
        const result= Users.find((u)=> u.email== email && u.password == password);
        return result;
    }

    static getall(){
        return Users;
    }
}

const Users=[
    {
        id:1,
        name:"Rahul",
        email:"rahul@gmail.com",
        password:1234,
        type:"user"
    },
]

export default UserModel;