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
