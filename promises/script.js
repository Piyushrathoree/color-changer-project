const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("hi ,this async task is running");
    resolve({'username':'piyush','password':123});
    // reject();
  }, 1000);
});
//here, the code is running normal like a async function but if we want to add promise then we do this

promiseOne.then(() => {
  // if we want to use promise then we use the 'then' keyword and it only work when the async function is having a method named resolve, refer to line no.4
  console.log("this is promise one");
});
//whenever I'm doing multichaining comment the above code
// //here the promise is running
//and if we choose reject instead of resolve then it will give an exception but we can resolve it as well.





//multichaing of data
//here we are using the 'then' keyword to chain the data
//at the time of multichaining if we are accessing any value than it should be return that value which you are trying to access
promiseOne
  .then((user) => {
    console.log('this is promiseOne');
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log("this is promise two");
    console.log(username);
  }).catch((error) => {
    console.log(error);
  }).finally(()=>{
    console.log("this is error resolved or rejected");
  })
 //and now catching the error as well
  //here if we use reject method above then if we pass any message then it will be displayed and if we don't then it gives undefined
