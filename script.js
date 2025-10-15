
function toggleNav(){
  const nav = document.getElementById('site-nav');
  nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
}

function toast(msg){
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  Object.assign(el.style, {
    position:'fixed', bottom:'16px', left:'50%', transform:'translateX(-50%)',
    background:'#1f2937', color:'#fff', padding:'10px 14px', borderRadius:'10px',
    boxShadow:'0 6px 20px rgba(0,0,0,.2)', zIndex:9999, opacity:0, transition:'opacity .2s ease'
  });
  document.body.appendChild(el);
  requestAnimationFrame(()=>{ el.style.opacity = 1; });
  setTimeout(()=>{
    el.style.opacity = 0; setTimeout(()=>el.remove(), 250);
  }, 2400);
}

function handleMembership(e){
  e.preventDefault();
  toast('Thanks! Your membership form has been recorded (demo).');
}

function handleContact(e){
  e.preventDefault();
  toast('Thank you for reaching out! We will reply shortly.');
}

function handleInterest(e){
  e.preventDefault();
  toast('Thanks for your interest — we will be in touch!');
}

document.addEventListener('DOMContentLoaded', ()=>{
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
