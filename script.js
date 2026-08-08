document.getElementById('year')?.append(new Date().getFullYear());
const menu=document.querySelector('.menu'),top=document.querySelector('.top');menu?.addEventListener('click',()=>top.classList.toggle('open'));
