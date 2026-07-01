const PASSCODE_HASH = '62afc7e05e6d5d70e848d67a11787fc9b4557d71f0c3b8255bfde4072e0f4b06';
const AUTH_KEY = 'portfolio_auth';

async function hashPasscode(input){
  const data = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function checkAuth(){
  if(sessionStorage.getItem(AUTH_KEY) === '1'){
    document.querySelectorAll('.protected').forEach(el => el.classList.remove('protected'));
    document.getElementById('unlockBtn').textContent = '🔓 Portfolio';
  }
}

let gridRevealed = false;
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    e.target.classList.add('in');
    const grid = e.target.querySelector('.grid');
    if(grid && !gridRevealed){
      gridRevealed = true;
      grid.querySelectorAll('.card').forEach((card, i)=>{
        setTimeout(()=>card.classList.add('in'), i * 50);
      });
    }
  });
}, {threshold:0.06});

document.querySelectorAll('.hero, section').forEach(el=>{
  el.classList.add('reveal');
  observer.observe(el);
});

const pills = document.querySelectorAll('.filter-pill');
const cards = document.querySelectorAll('.card');
pills.forEach(p=>{
  p.addEventListener('click', ()=>{
    pills.forEach(x=>x.classList.remove('active'));
    p.classList.add('active');
    const f = p.dataset.filter;
    cards.forEach(c=>{
      c.classList.toggle('hidden', f !== 'all' && c.dataset.cat !== f);
      if(gridRevealed && !c.classList.contains('hidden') && !c.classList.contains('in')){
        c.classList.add('in');
      }
    });
  });
});

const unlockBtn = document.getElementById('unlockBtn');
const modal = document.getElementById('authModal');
const passcodeInput = document.getElementById('passcodeInput');
const authSubmit = document.getElementById('authSubmit');
const authError = document.getElementById('authError');

unlockBtn.addEventListener('click', ()=>{
  modal.classList.add('open');
  passcodeInput.value = '';
  authError.textContent = '';
  passcodeInput.focus();
});

modal.addEventListener('click', (e)=>{
  if(e.target === modal) modal.classList.remove('open');
});

passcodeInput.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter') authSubmit.click();
});

authSubmit.addEventListener('click', async ()=>{
  const inputHash = await hashPasscode(passcodeInput.value);
  if(inputHash === PASSCODE_HASH){
    document.querySelectorAll('.protected').forEach(el => el.classList.remove('protected'));
    unlockBtn.textContent = '🔓';
    sessionStorage.setItem(AUTH_KEY, '1');
    modal.classList.remove('open');
  } else {
    authError.textContent = 'Incorrect passcode. Try again.';
    passcodeInput.value = '';
    passcodeInput.focus();
  }
});

checkAuth();
