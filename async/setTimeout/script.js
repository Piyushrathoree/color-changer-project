const text= document.querySelector("#text")
const start=document.getElementById("btn-start")
start.addEventListener('click',function(){
    
    setTimeout(() => {
    text.innerText="hey welcome to this repo"    
    }, 100);
})