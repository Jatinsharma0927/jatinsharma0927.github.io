const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));

const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-innerHeight;
  if(progress) progress.style.width=(h>0?(scrollY/h)*100:0)+'%';
},{passive:true});

const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{
  if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';}
},{passive:true});

const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');
if(menu&&nav){
  menu.addEventListener('click',()=>{
    if(nav.style.display==='flex'){nav.removeAttribute('style');return}
    nav.style.display='flex';nav.style.position='absolute';nav.style.top='68px';nav.style.right='18px';nav.style.flexDirection='column';nav.style.gap='14px';nav.style.background='#ffffff';nav.style.padding='18px';nav.style.border='1px solid #e6eaf0';nav.style.borderRadius='14px';nav.style.boxShadow='0 20px 50px rgba(16,24,40,.14)';
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=850)nav.removeAttribute('style')}));
}

// Universal contact animation: every contact option reveals its details at both the top and bottom, then opens the destination.
const contactLinks=document.querySelectorAll('.contact-link');
const contactTop=document.getElementById('contactTop');
const contactBottom=document.getElementById('contactBottom');
let contactTimer;
const contactDetails={
  whatsapp:{action:'Opening WhatsApp…'},
  email:{action:'Opening email…'},
  call:{action:'Opening phone…'},
  linkedin:{action:'Opening LinkedIn…'},
  instagram:{action:'Opening Instagram…'}
};
function setContactPanel(panel,type,label,value,icon){
  if(!panel) return;
  panel.dataset.type=type;
  panel.querySelector('.contact-mark').textContent=icon||'↗';
  panel.querySelector('.contact-panel-copy strong').textContent=label;
  panel.querySelector('.contact-panel-copy span').textContent=value;
  panel.querySelector('.contact-panel-action').textContent=(contactDetails[type]||{action:'Opening…'}).action;
  panel.classList.remove('show');
  void panel.offsetWidth;
  panel.classList.add('show');
  panel.setAttribute('aria-hidden','false');
}
function hideContactPanels(){
  [contactTop,contactBottom].forEach(panel=>{
    if(panel){panel.classList.remove('show');panel.setAttribute('aria-hidden','true');}
  });
}
contactLinks.forEach(link=>link.addEventListener('click',e=>{
  e.preventDefault();
  const type=link.dataset.contact||'contact';
  const label=link.dataset.label||'Contact';
  const value=link.dataset.value||'';
  const icon=link.dataset.icon||'↗';
  setContactPanel(contactTop,type,label,value,icon);
  setContactPanel(contactBottom,type,label,value,icon);
  link.classList.remove('contact-pulse');
  void link.offsetWidth;
  link.classList.add('contact-pulse');
  clearTimeout(contactTimer);
  contactTimer=setTimeout(()=>{
    hideContactPanels();
    link.classList.remove('contact-pulse');
  },4200);
  const url=link.href;
  setTimeout(()=>{
    window.location.href=url;
  },850);
}));
