// here is the code for why we use 'this' keyword in js 

const user={
    name:'piyush',
    age:19,
    place:'bhopal',
    state:'madhya pradesh',


    getUserDetails:function(){
        console.log("got details from the database")
        console.log(`name:${this.name}`)//here I user 'this' keyword by which it access to the whole object
        return `${user.name}`
    },
    anotherDetails:{
        stream:"computer science"
        ,
        details:function(){
            console.log(`name:${user.name}`);
            return `${this.stream}`
        }
    },
    
    

}
console.log(user.name)
console.log(user.getUserDetails())
console.log(user.anotherDetails.details())