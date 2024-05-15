const randomColor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let Interval;
const start = function () {
  if (!Interval) {
    Interval = setInterval(changeBgColor, 1000);
  }
// Interval=setInterval(changeBgColor,1000)
  
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stop = function () {
    clearInterval(Interval);
    Interval=null;
};
document.querySelector("#btn-start").addEventListener('click',start)
document.querySelector("#btn-end").addEventListener('click',stop)
