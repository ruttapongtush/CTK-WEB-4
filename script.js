const y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();
const b=document.querySelector(".menu-button"),n=document.querySelector(".links");
if(b&&n)b.addEventListener("click",()=>n.classList.toggle("open"));