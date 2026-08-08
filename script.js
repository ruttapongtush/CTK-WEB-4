document.getElementById("year").textContent=new Date().getFullYear();
const btn=document.querySelector(".menu-btn"), menu=document.querySelector(".menu");
if(btn&&menu) btn.addEventListener("click",()=>menu.classList.toggle("open"));