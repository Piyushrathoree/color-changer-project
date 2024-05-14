const start = document.getElementById("btn-start");
const end = document.getElementById("btn-end");
const hex = "0123456789ABCDEF";
let color = "#";
let Interval;
start.addEventListener("click", () => {
  
  Interval=setInterval(
    (color) => {for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
      document.querySelector("body").style.backgroundColor = color;
    },
    1500,
    color
  );
});
end.addEventListener("click", () => {
  clearInterval(Interval)
});
