// in this I'll share promise using async await
async function promise() {
  const response = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("running promise");
    }, 1000);
  });
  await response;
  console.log(response);
}
promise();
