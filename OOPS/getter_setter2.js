//getter and setter in class and constructor form
class main{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password=value
    }
}
const kuchBhi=new main('a@gmail.com','abc')
console.log(kuchBhi.password);


//getter and setter in function way
function user(email,password){
    this._email=email;
    this._password=password;

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email=value 
        }
    })
}
const user1=new user('a@gmail.com','abc')
console.log(user1.email)
