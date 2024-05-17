const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("hi ,this async task is running");
    resolve();
    // reject();
  }, 1000);
});
//here, the code is running normal like a async function but if we want to add promise then we do this

promiseOne.then(() => {
  // if we want to use promise then we use the 'then' keyword and it only work when the async function is having a method named resolve, refer to line no.4
  console.log("this is promise one");
});
//when using catch comment out this code
// //here the promise is running
//and if we choose reject instead of resolve then it will give an exception but we can resolve it as well.





//multichaing of data
//here we are using the 'then' keyword to chain the data
promiseOne
  .then(() => {
    console.log("this is promise one");
  })
  .then(() => {
    console.log("this is promise two");
  }).catch((error) => {
    console.log(error);
  }).finally(()=>{
    console.log("this is error resolved or rejected");
  })
 //and now catching the error as well
  //here if we use reject method above then if we pass any message then it will be displayed and if we don't then it gives undefined
