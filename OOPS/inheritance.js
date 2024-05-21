//here is the code for inheritance in js 
class user{
    constructor(name,password){
    this.name=name;
    this.password=password;
    }

    show(){
        console.log(`the price is ${this.password}`)
    }

}
class teacher extends user{
    constructor(name,password){
        super(name);//ssuper keyword is user for copying the same constructor value like parent class
        this.password=password

    }
    
   logMe(){
    console.log(`the name is ${this.name}`)
   }
}

const detail=new user('piyush','123')
const detail2=new teacher('xyz','123')
console.log(detail)
detail.show();
detail2.logMe()

