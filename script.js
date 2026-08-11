const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
const progress=document.querySelector('.progress');window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h>0?(scrollY/h)*100:0)+'%'});
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');
menu.addEventListener('click',()=>{if(nav.style.display==='flex'){nav.removeAttribute('style');return}nav.style.display='flex';nav.style.position='absolute';nav.style.top='68px';nav.style.right='18px';nav.style.flexDirection='column';nav.style.gap='14px';nav.style.background='#10131d';nav.style.padding='18px';nav.style.border='1px solid rgba(255,255,255,.1)';nav.style.borderRadius='14px';nav.style.boxShadow='0 20px 50px rgba(0,0,0,.35)'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=850)nav.removeAttribute('style')}));
