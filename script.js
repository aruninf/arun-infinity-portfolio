const PASSCODE_HASH = '62afc7e05e6d5d70e848d67a11787fc9b4557d71f0c3b8255bfde4072e0f4b06';
const AUTH_KEY = 'portfolio_auth';

async function hashPasscode(input){
  const data = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// ── Protected content (not in HTML source) ──────────────────────────────

const PROTECTED_HTML = {
  currently: `
      <div class="jstep now">
        <div class="jstep-tag">Nov 2025 — Present</div>
        <h3>React Native Developer, full-time on the Whitetower Digital account (client: Villar)</h3>
        <p>Delivered <strong style="color:var(--ink);">Disport</strong> and <strong style="color:var(--ink);">Medhub</strong> — both shipped on schedule. Currently building <strong style="color:var(--ink);">T1</strong>, an electrician job-management app, alongside the rest of the account's work.</p>
      </div>`,
  cards: `
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/appifany/appifany-goodsamapp" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">Good Sam App</div><div class="card-org">appifany</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Flutter</div>
        <div class="card-meta">Updated 2 months ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/appifany/artesian-loyalty-flutter" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">Artesian Loyalty</div><div class="card-org">appifany</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Flutter</div>
        <div class="card-meta">Updated 11 months ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/aruninf/become-secure-app" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">Become Secure App</div><div class="card-org">aruninf</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Flutter</div>
        <div class="card-meta">Updated 11 months ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/aruninf/become-secure-cms" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">Become Secure CMS</div><div class="card-org">aruninf</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Admin / CMS</div>
        <div class="card-meta">Updated 11 months ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/aruninf/bright-vox-flutter" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">Bright Vox</div><div class="card-org">aruninf</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Flutter</div>
        <div class="card-meta">Updated 11 months ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/appifany/check-in-chick" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">Check In Chick</div><div class="card-org">appifany</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Flutter</div>
        <div class="card-meta">Updated 11 months ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/appifany/clear-sky-ios" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">Clear Sky</div><div class="card-org">appifany</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">iOS Native</div>
        <div class="card-meta">Updated 11 months ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/connectable/connectable-flutter-app" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">ConnectAble</div><div class="card-org">connectable</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Flutter</div>
        <div class="card-meta">Updated 1 week ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/appifany/cosmo-ios-app" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">Cosmo iOS</div><div class="card-org">appifany</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">iOS Native</div>
        <div class="card-meta">Updated 11 months ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/aruninf/flutter_bloc_sample" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">Flutter BLoC Sample</div><div class="card-org">aruninf</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Flutter BLoC</div>
        <div class="card-meta">Updated 10 months ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/aruninf/goalsfmapp" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">Goals FM App</div><div class="card-org">aruninf</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Flutter</div>
        <div class="card-meta">Updated 11 months ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/aruninf/goalsfmcms" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">Goals FM CMS</div><div class="card-org">aruninf</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Admin / CMS</div>
        <div class="card-meta">Updated 10 months ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/appifany/job-matched-app" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">Job Matched App</div><div class="card-org">appifany</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Flutter</div>
        <div class="card-meta">Updated 11 months ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/aruninf/jobwish-app" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">JobWish App</div><div class="card-org">aruninf</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Flutter OpenAI API</div>
        <div class="card-meta">Updated 9 months ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/aruninf/jobwish-app-new" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">JobWish App v2</div><div class="card-org">aruninf</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Flutter OpenAI API</div>
        <div class="card-meta">Updated 1 hour ago active</div>
      </a>
      <a class="card reveal" data-cat="mentalfloss" href="https://gitlab.infinitysoftsystems.com/mentalfloss/mentalfloss_admin" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">MentalFloss Admin</div><div class="card-org">mentalfloss</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Admin / CMS</div>
        <div class="card-meta">Updated 6 months ago</div>
      </a>
      <a class="card reveal" data-cat="mentalfloss" href="https://gitlab.infinitysoftsystems.com/mentalfloss/mentalfloss_be" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">MentalFloss Backend</div><div class="card-org">mentalfloss</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Backend API</div>
        <div class="card-meta">Updated 1 month ago</div>
      </a>
      <a class="card reveal" data-cat="mentalfloss" href="https://gitlab.infinitysoftsystems.com/mentalfloss/mentalfloss_react_fe" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">MentalFloss Web</div><div class="card-org">mentalfloss</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">React</div>
        <div class="card-meta">Updated 1 month ago</div>
      </a>
      <a class="card reveal" data-cat="mentalfloss" href="https://gitlab.infinitysoftsystems.com/mentalfloss/mentalfloss_mobile" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">MentalFloss Mobile</div><div class="card-org">mentalfloss</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">React Native</div>
        <div class="card-meta">Updated 1 week ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/aruninf/mind-reset" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">Mind Reset</div><div class="card-org">aruninf</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Flutter</div>
        <div class="card-meta">Owner</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/aruninf/note-app-react-native" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">Note App</div><div class="card-org">aruninf</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">React Native</div>
        <div class="card-meta">Updated 10 months ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/appifany/posyard-mobile-app" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">PosYard</div><div class="card-org">appifany</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Mobile</div>
        <div class="card-meta">Updated 11 months ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/appifany/take-a-plate-flutter" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">Take A Plate</div><div class="card-org">appifany</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Flutter</div>
        <div class="card-meta">Updated 2 weeks ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/appifany/the-goat-app" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">The Goat App</div><div class="card-org">appifany</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">iOS Native</div>
        <div class="card-meta">Updated 11 months ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/appifany/yourfishapp" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">Your Fish App</div><div class="card-org">appifany</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Flutter Firebase</div>
        <div class="card-meta">Updated 11 months ago</div>
      </a>
      <a class="card reveal" data-cat="appifany" href="https://gitlab.infinitysoftsystems.com/appifany/yourfishcms" target="_blank" rel="noopener">
        <div class="card-top"><div><div class="card-name">Your Fish CMS</div><div class="card-org">appifany</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">Admin / CMS</div>
        <div class="card-meta">Owner</div>
      </a>
      <div class="card reveal" data-cat="whitetower">
        <div class="card-top"><div><div class="card-name">Disport</div><div class="card-org">whitetower digital</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">React Native</div>
        <div class="card-meta">Delivered</div>
      </div>
      <div class="card reveal" data-cat="whitetower">
        <div class="card-top"><div><div class="card-name">Medhub</div><div class="card-org">whitetower digital</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">React Native</div>
        <div class="card-meta">Delivered</div>
      </div>
      <div class="card reveal" data-cat="whitetower">
        <div class="card-top"><div><div class="card-name">T1</div><div class="card-org">whitetower digital</div></div><div class="card-arrow">↗</div></div>
        <div class="card-stack">React Native</div>
        <div class="card-meta">In progress</div>
      </div>`,
  quote: `
      <div class="quote-card">
        "Superstar. Quite happy with Arun delivered Disport and Medhub on time."
        <div class="quote-meta"> Villar, client</div>
      </div>`
};

let gridRevealed = false;
const revealObserver = new IntersectionObserver((entries)=>{
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

function observeReveal(){
  document.querySelectorAll('.hero, section').forEach(el=>{
    if(!el.classList.contains('in')){
      revealObserver.observe(el);
    }
  });
}

let filtersSetup = false;
function setupFilters(){
  if(filtersSetup) return;
  filtersSetup = true;
  const pills = document.querySelectorAll('.filter-pill');
  const cards = () => document.querySelectorAll('.card');
  pills.forEach(p=>{
    p.addEventListener('click', ()=>{
      pills.forEach(x=>x.classList.remove('active'));
      p.classList.add('active');
      const f = p.dataset.filter;
      cards().forEach(c=>{
        c.classList.toggle('hidden', f !== 'all' && c.dataset.cat !== f);
        if(gridRevealed && !c.classList.contains('hidden') && !c.classList.contains('in')){
          c.classList.add('in');
        }
      });
    });
  });
}

function injectProtectedContent(){
  document.querySelectorAll('.lock-card').forEach(el => el.remove());

  const curr = document.getElementById('currentlySection');
  curr.style.display = '';
  curr.classList.add('in');
  const currContent = document.getElementById('currentlyContent');
  currContent.classList.add('journey');
  currContent.innerHTML = PROTECTED_HTML.currently;

  document.getElementById('grid').innerHTML = PROTECTED_HTML.cards;
  document.getElementById('quoteContainer').innerHTML = PROTECTED_HTML.quote;
  document.getElementById('unlockBtn').textContent = '🔓';

  const portfolio = document.getElementById('portfolio');
  if(portfolio && portfolio.classList.contains('in')){
    const cards = portfolio.querySelectorAll('.card');
    cards.forEach((card, i)=>{
      setTimeout(()=>card.classList.add('in'), i * 50);
    });
  }

  setupFilters();
}

function checkAuth(){
  if(sessionStorage.getItem(AUTH_KEY) === '1'){
    injectProtectedContent();
    document.getElementById('unlockBtn').textContent = '🔓';
  }
}

observeReveal();

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

document.querySelectorAll('.lock-card').forEach(card => {
  card.addEventListener('click', () => {
    modal.classList.add('open');
    passcodeInput.value = '';
    authError.textContent = '';
    passcodeInput.focus();
  });
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
    injectProtectedContent();
    sessionStorage.setItem(AUTH_KEY, '1');
    modal.classList.remove('open');
  } else {
    authError.textContent = 'Incorrect passcode. Try again.';
    passcodeInput.value = '';
    passcodeInput.focus();
  }
});

checkAuth();

// ── Hamburger menu ────────────────────────────────────────────────────────

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── Anti-inspect & anti-download ──────────────────────────────────────────

document.addEventListener('contextmenu', e => e.preventDefault());

document.addEventListener('keydown', e => {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key)) ||
    (e.ctrlKey && ['u','s','U','S'].includes(e.key))
  ) {
    e.preventDefault();
  }
});

document.addEventListener('dragstart', e => {
  if (e.target.tagName === 'IMG' || e.target.tagName === 'A') {
    e.preventDefault();
  }
});

['devtoolschange', 'devtoolsopen', 'devtoolsclose'].forEach(ev => {
  window.addEventListener(ev, e => e.preventDefault());
});

setInterval(() => {
  const w = window.outerWidth - window.innerWidth;
  if (w > 160 || w < 0) {
    document.body.style.filter = 'blur(20px)';
    document.title = '⚠️';
  }
}, 1000);

console.log(
  '%c🚫 Inspection not allowed',
  'font-size:18px; font-weight:bold; color:#E65E5E;'
);
