const hex="0123456789ABCDEF"
let color="#";
for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
}
const start=document.getElementById("btn-start")
const end=document.getElementById("btn-end")
start.addEventListener("click",()=>{
    setInterval(()=>{
        document.querySelector("body").style.backgroundColor=color
    },1000)
})