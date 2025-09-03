
// theme persist
const root = document.documentElement;
(function initTheme(){
  const saved = localStorage.getItem('theme') || 'dark';
  if(saved==='light'){ root.classList.add('light'); }
  updateToggle();
})();

function toggleTheme(){
  const isLight = root.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  updateToggle();
}
function updateToggle(){
  const btns = document.querySelectorAll('.mode-toggle');
  const isLight = root.classList.contains('light');
  btns.forEach(b=> b.textContent = isLight ? '🌙 Dark' : '☀️ Light');
}

// copy IP
function copyIP(){
  navigator.clipboard.writeText('play.lightcrafts.net');
  const btn = document.getElementById('copyIpBtn');
  if(btn){ btn.textContent='Copied! ✅'; setTimeout(()=>btn.textContent='Copy IP', 1500); }
}

// entrance animations
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target);} });
},{threshold:.12});
document.querySelectorAll('.animate-in').forEach(el=>io.observe(el));

// fake submit for coming soon forms
function comingSoon(ev){
  ev.preventDefault();
  alert('This form will be connected soon.');
}
