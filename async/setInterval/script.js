let Interval;
const text=document.querySelector("h1")
const start=document.getElementById("btn-start")


start.addEventListener('click',function(){
     Interval=setInterval(() => {
            text.innerHTML="welcome!!"
    }, 1000);
})