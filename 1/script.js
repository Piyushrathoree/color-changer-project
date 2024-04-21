// let box=document.getElementsByClassName(".box")
// const body=document.querySelector("body")
// box.addEventListener("click",function(){
//     body.style.backgroundColor='box.style.backgroundColor'
// })
// let boxes = document.getElementsByClassName("box");

// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].addEventListener("click", function() {
//         document.body.style.backgroundColor =boxes.target.style.backgroundColor;
//     });
// }

// let boxes = document.getElementsByClassName("box");

// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].addEventListener("click", function() {
//         let style = boxes[i].currentStyle || window.getComputedStyle(boxes[i], null);
//         document.body.style.backgroundColor = style.backgroundColor || style.getPropertyValue("background-color");
//     });
// }   

let red=document.querySelector("#box1").style.backgroundColor="red"
let blue=document.querySelector("#box2").style.backgroundColor="blue"
let green=document.querySelector("#box3").style.backgroundColor="green"
let yellow=document.querySelector("#box4").style.backgroundColor="yellow"

let box =document.querySelectorAll(".box")
let body=document.querySelector("body")

box.forEach(function(btn){
    btn.addEventListener("click",function(e){
        // console.log(e);
        // console.log(e.target);
        
        body.style.backgroundColor=e.target.style.backgroundColor
    })
})