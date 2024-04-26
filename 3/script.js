const time=document.querySelector(".time")



//async
setInterval(() => {
    const date =new Date();
    time.innerHTML=date.toLocaleTimeString() 
}, 1000);













