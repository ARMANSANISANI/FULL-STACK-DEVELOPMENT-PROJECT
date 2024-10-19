const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
