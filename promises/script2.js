// in this I'll share promise using async await
async function promise() {
  const response = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("running promise");
      resolve({'username':"js","password":'123'})
    }, 1000);
  });
  await response;
  console.log(response);
}
promise();
//comment the above code whenever you want to run the below code



//one more way to do the same thing
const promiseId=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log("running promise");
    resolve({'username':"js","password":'123'})
    
  },1000)
  
})

async function consumePromise(){
  // we want to handle error then we use try and catch here
  try{
    const response=await promiseId
  console.log(response)

  }catch{
    console.log("error: something went wrong")
  }
}
consumePromise()