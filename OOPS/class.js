// //code for class in javascript
class user {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
const chai = new user("piyush", "piyush@gmail.com", "123");
console.log(chai.encryptPass());
console.log(chai);



//behind the scene if it is not done using class
//comment above code for run the below code
function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
  user.prototype.encryptPass=function(){
     return `${this.password}abc`;
  }
   
  }
const chai = new user("piyush", "piyush@gmail.com", "123");
console.log(chai.encryptPass());
console.log(chai);
