document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');
menu.addEventListener('click',()=>{if(nav.style.display==='flex'){nav.removeAttribute('style');return}
nav.style.display='flex';nav.style.position='absolute';nav.style.top='68px';nav.style.right='18px';nav.style.flexDirection='column';nav.style.gap='14px';nav.style.background='#111217';nav.style.padding='18px';nav.style.border='1px solid rgba(255,255,255,.1)';nav.style.borderRadius='14px';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=850)nav.removeAttribute('style')}));