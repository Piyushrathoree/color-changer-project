//use of static keyword-for limiting the accessibility of any method in the class

class user{
    constructor(name) {
    this.name=name;

    }
    static createId(){
        console.log(`${this.name}abc`)
    }
}
class teacher extends user{
    constructor(name,age){
    super(name)
    this.age=age
 
}
show(){
    console.log(this.name,this.age)
}
}

const me =new user('piyush')
// me.createId();//see here im not able to use this method because its static 
const you =new teacher('xyz','123')
you.show()
