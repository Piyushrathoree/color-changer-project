// here we'll talk about the call method which use to hold the reference of any method while putting any method or function into any constructor

function callMe(username){
    this.username=username;
}
function createUser(username,email,pass){
    // callMe(username)
    //now here it looks like that when I run this it will assign username to username from the function above but no it will user it but whenever we are using it will not return any value so we use 'call'method here
    callMe.call(this,username)
    this.email=email;
    this.pass=pass;
    
}
const user= new createUser('piyush','piyush@gmail.com','123')
console.log(user);