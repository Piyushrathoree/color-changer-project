const person={
    firstName:"piyush",
    lastName:"rathore",
    get fullname(){//getter doesn't allow to have parameters 
        return this.firstName+" "+this.lastName
    }//getter used to get any element 
    
    
    ,
    set fullName(name){
        const [first,last]=name.split(' ')
        this.firstName=first
        this.lastName=last
    }
    //it doesn't return any element 
    //setter used to set any element
}
person.fullName='piyush rathore'
console.log(person.fullname);
console.log(person.firstName);
