const time=document.querySelector(".time")




setInterval(() => {
    const date =new Date();
    time.innerHTML=date.toLocaleTimeString() 
}, 1000);













