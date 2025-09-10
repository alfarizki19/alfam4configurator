// === dataController_Trigger.mjs ===
// Trigger UI Controller (Lower Category)

// Helpers
function tr_setText(id, text){ const el=document.getElementById(id); if(el) el.textContent=text; }
function tr_addClass(id,c){ const el=document.getElementById(id); if(el) el.classList.add(c); }
function tr_removeClass(id,c){ const el=document.getElementById(id); if(el) el.classList.remove(c); }

function tr_hideHeaderImages(group){ const container=document.getElementById('productContainer_trigger'+group); if(!container) return; container.querySelectorAll('img, image, Image').forEach(function(el){ el.style.display='none'; }); }
function tr_showHeaderDefault(group){ const img=document.getElementById('productImgID_trigger'+group+'01'); if(img) img.style.display='flex'; }

function tr_getLowerWrap(){ const nameEl=document.getElementById('partName_Trigger'); if(!nameEl) return null; let parent=nameEl.parentElement; while(parent && !parent.classList.contains('menuPartMenuOptionContainer')){ parent=parent.parentElement; } if(!parent) return null; return parent.querySelector('.menuPartMenuOptionImageArea'); }
function tr_hideLowerImages(){ const wrap=tr_getLowerWrap(); if(!wrap) return; wrap.querySelectorAll('img, image, Image').forEach(function(el){ el.style.display='none'; }); }

function tr_clearVariantButtons(group){ const map={ '001001':['01'], '002001':['01','02','03'] }; (map[group]||[]).forEach(function(v){ const b=document.getElementById('buttonItems_trigger'+group+v); if(b) b.classList.remove('active'); }); }
function tr_clearHeaderIcons(){ ['001001','002001'].forEach(function(g){ const ic=document.getElementById('productButtonIcon_trigger'+g); if(ic) ic.classList.remove('active'); }); }
function tr_setHeaderIconActive(group){ const ic=document.getElementById('productButtonIcon_trigger'+group); if(ic) ic.classList.add('active'); }

// Resets
export function uiReset_trigger001001(){ const p=window.part.trigger['001'].products['001']; Object.keys(p.variants).forEach(k=>p.variants[k].quantity=0); tr_setText('productName_trigger001001', p.productTitle); tr_setText('productPricing_trigger001001', p.variants['01'].price+' USD'); tr_removeClass('productHeader_trigger001001','active'); tr_hideHeaderImages('001001'); tr_showHeaderDefault('001001'); tr_clearVariantButtons('001001'); }
export function uiReset_trigger002001(){ const p=window.part.trigger['002'].products['001']; Object.keys(p.variants).forEach(k=>p.variants[k].quantity=0); tr_setText('productName_trigger002001', p.productTitle); tr_setText('productPricing_trigger002001', p.variants['01'].price+' USD'); tr_removeClass('productHeader_trigger002001','active'); tr_hideHeaderImages('002001'); tr_showHeaderDefault('002001'); tr_clearVariantButtons('002001'); }

export function uiData_Trigger(){ let sel=null,g=null,title=''; { const v=window.part.trigger['001'].products['001'].variants['01']; if(v.quantity===1){ sel=v; g='001001'; title=window.part.trigger['001'].products['001'].productTitle; } } { const v=window.part.trigger['002'].products['001'].variants; for(const k of ['01','02','03']){ if(v[k]&&v[k].quantity===1){ sel=v[k]; g='002001'; title=window.part.trigger['002'].products['001'].productTitle; } } } if(!sel) return; tr_setText('productPricing_trigger'+g, sel.price+' USD'); tr_addClass('productHeader_trigger'+g, 'active'); tr_hideHeaderImages(g); const h=document.getElementById('productImgID_'+sel.id); if(h) h.style.display='flex'; ['001001','002001'].forEach(function(x){ if(x!==g){ tr_hideHeaderImages(x); tr_showHeaderDefault(x); }}); const suffix = (sel.variantTitle && sel.variantTitle.toLowerCase()!=='no variant') ? (' - '+sel.variantTitle) : ''; tr_setText('productName_trigger'+g, title+suffix); tr_hideLowerImages(); const wrap=tr_getLowerWrap(); let lower = document.getElementById('partImgID_'+sel.id); if(!lower && wrap){ lower = Array.from(wrap.querySelectorAll('img, image, Image')).find(function(el){ const src=(el.getAttribute('src')||''); return src.indexOf(sel.id) !== -1; }); } if(lower) lower.style.display='flex'; tr_setText('partName_Trigger', title+suffix); tr_setText('partPrice_Trigger', sel.price+' USD'); tr_clearHeaderIcons(); tr_setHeaderIconActive(g); tr_clearVariantButtons(g); const vb=document.getElementById('buttonItems_'+sel.id); if(vb) vb.classList.add('active'); }

// Start default: 00100101
{ const btn=document.getElementById('buttonModalStartMenu_StartButton'); if(btn) btn.addEventListener('click', function(){ uiReset_trigger001001(); uiReset_trigger002001(); tr_hideHeaderImages('001001'); tr_hideHeaderImages('002001'); tr_showHeaderDefault('001001'); tr_showHeaderDefault('002001'); tr_hideLowerImages(); const d1=document.getElementById('partImgID_trigger00100101'); if(d1) d1.style.display='flex'; window.part.trigger['001'].products['001'].variants['01'].quantity=1; uiData_Trigger(); }); }

// Item listeners
{ const b=document.getElementById('buttonItems_trigger00100101'); if(b) b.addEventListener('click', function(){ uiReset_trigger001001(); uiReset_trigger002001(); window.part.trigger['001'].products['001'].variants['01'].quantity=1; uiData_Trigger(); }); }
{ ['01','02','03'].forEach(function(v){ const b=document.getElementById('buttonItems_trigger002001'+v); if(b) b.addEventListener('click', function(){ uiReset_trigger001001(); uiReset_trigger002001(); window.part.trigger['002'].products['001'].variants[v].quantity=1; uiData_Trigger(); }); }); }

export function getSelectedTrigger(){ const a=window.part.trigger['001'].products['001'].variants['01']; if(a.quantity===1) return a; const b=window.part.trigger['002'].products['001'].variants; for(const k of ['01','02','03']){ if(b[k]&&b[k].quantity===1) return b[k]; } return null; }
export function getTriggerTotalPrice(){ const v=getSelectedTrigger(); return v? v.price:0; }