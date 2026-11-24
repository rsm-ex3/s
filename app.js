(() => {
 const $=s=>document.querySelector(s), menu=window.SEBeZ_MENU||[];let active='All';
 const categories=['All',...new Set(menu.map(x=>x.category))];
 const money=n=>`${Number(n).toLocaleString('en-US')} ETB`;
 function renderTabs(){ $('#categoryTabs').innerHTML=categories.map(c=>`<button class="filter ${c===active?'selected':''}" data-filter="${c}">${c}</button>`).join(''); }
 function renderMenu(){const q=$('#menuSearch').value.trim().toLowerCase();const items=menu.filter(x=>(active==='All'||x.category===active)&&(`${x.name} ${x.description} ${x.category}`.toLowerCase().includes(q)));$('#productGrid').innerHTML=items.map(x=>`<article class="food-card"><div class="food-photo"><img src="${x.image}" alt="Illustrative photo of ${x.name}" loading="lazy"><span>${x.category}</span></div><div class="food-info"><h3>${x.name}</h3><p>${x.description}</p><b>${money(x.price)}</b></div></article>`).join('')||'<p class="empty">No dishes match your search.</p>';}
 $('#categoryTabs').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;active=b.dataset.filter;renderTabs();renderMenu();});$('#menuSearch').addEventListener('input',renderMenu);
 $('#reservationForm').addEventListener('submit',e=>{e.preventDefault();$('#reservationStatus').textContent='Thanks! This is a design preview. Your request has not been sent to the cafe.';});
 $('#navToggle').addEventListener('click',()=>$('#mainNav').classList.toggle('open'));$('#mainNav').addEventListener('click',e=>{if(e.target.tagName==='A')$('#mainNav').classList.remove('open');});
 $('#year').textContent=new Date().getFullYear();renderTabs();renderMenu();
})();
