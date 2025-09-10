// === dataController_TriggerGuard.mjs ===
// Trigger Guard UI Controller (Lower Category)

// Helpers
function tg_setText(id, text){ const el=document.getElementById(id); if(el) el.textContent=text; }
function tg_addClass(id,c){ const el=document.getElementById(id); if(el) el.classList.add(c); }
function tg_removeClass(id,c){ const el=document.getElementById(id); if(el) el.classList.remove(c); }

function tg_hideHeaderImages(group){ const container=document.getElementById('productContainer_triggerGuard'+group); if(!container) return; container.querySelectorAll('img, image, Image').forEach(function(el){ el.style.display='none'; }); }
function tg_showHeaderDefault(group){ const container=document.getElementById('productContainer_triggerGuard'+group); if(!container) return; let el=document.getElementById('productImgID_triggerGuard'+group+'01'); if(!el) el=container.querySelector('img, image, Image'); if(el) el.style.display='flex'; }

function tg_getLowerWrap(){ const nameEl=document.getElementById('partName_TriggerGuard'); if(!nameEl) return null; let parent=nameEl.parentElement; while(parent && !parent.classList.contains('menuPartMenuOptionContainer')){ parent=parent.parentElement; } if(!parent) return null; return parent.querySelector('.menuPartMenuOptionImageArea'); }
function tg_hideLowerImages(){ const wrap=tg_getLowerWrap(); if(!wrap) return; wrap.querySelectorAll('img, image, Image').forEach(function(el){ el.style.display='none'; }); }

function tg_clearVariantButtons(group){ const map={ '001001':['01','02','03','04','05','06','07'], '002001':['01','02','03','04','05','06','07','08','09','10'] }; (map[group]||[]).forEach(function(v){ const b=document.getElementById('buttonItems_triggerGuard'+group+v); if(b) b.classList.remove('active'); }); }
function tg_clearHeaderIcons(){ ['001001','002001'].forEach(function(g){ const ic=document.getElementById('productButtonIcon_triggerGuard'+g); if(ic) ic.classList.remove('active'); }); }
function tg_setHeaderIconActive(group){ const ic=document.getElementById('productButtonIcon_triggerGuard'+group); if(ic) ic.classList.add('active'); }

// Resets
export function uiReset_triggerGuard001001(){ const p=window.part.triggerGuard['001'].products['001']; Object.keys(p.variants).forEach(k=>p.variants[k].quantity=0); tg_setText('productName_triggerGuard001001', p.productTitle); tg_setText('productPricing_triggerGuard001001', p.variants['01'].price+' USD'); tg_removeClass('productHeader_triggerGuard001001','active'); tg_hideHeaderImages('001001'); tg_showHeaderDefault('001001'); tg_clearVariantButtons('001001'); }
export function uiReset_triggerGuard002001(){ const p=window.part.triggerGuard['002'].products['001']; Object.keys(p.variants).forEach(k=>p.variants[k].quantity=0); tg_setText('productName_triggerGuard002001', p.productTitle); tg_setText('productPricing_triggerGuard002001', p.variants['01'].price+' USD'); tg_removeClass('productHeader_triggerGuard002001','active'); tg_hideHeaderImages('002001'); tg_showHeaderDefault('002001'); tg_clearVariantButtons('002001'); }

export function uiData_TriggerGuard(){ let sel=null,g=null,title=''; { const v=window.part.triggerGuard['001'].products['001'].variants; for(const k of ['01','02','03','04','05','06','07']){ if(v[k]&&v[k].quantity===1){ sel=v[k]; g='001001'; title=window.part.triggerGuard['001'].products['001'].productTitle; } } } { const v=window.part.triggerGuard['002'].products['001'].variants; for(const k of ['01','02','03','04','05','06','07','08','09','10']){ if(v[k]&&v[k].quantity===1){ sel=v[k]; g='002001'; title=window.part.triggerGuard['002'].products['001'].productTitle; } } } if(!sel) return; tg_setText('productPricing_triggerGuard'+g, sel.price+' USD'); tg_addClass('productHeader_triggerGuard'+g,'active'); tg_hideHeaderImages(g); let h=document.getElementById('productImgID_'+sel.id); if(!h){ const container=document.getElementById('productContainer_triggerGuard'+g); if(container){ h=Array.from(container.querySelectorAll('img, image, Image')).find(function(el){ const src=(el.getAttribute('src')||''); return src.indexOf(sel.id)!==-1; }); } } if(h) h.style.display='flex'; ['001001','002001'].forEach(function(x){ if(x!==g){ tg_hideHeaderImages(x); tg_showHeaderDefault(x); }}); const suffix=(sel.variantTitle&&sel.variantTitle.toLowerCase()!=='no variant')?(' - '+sel.variantTitle):''; tg_setText('productName_triggerGuard'+g, title+suffix); tg_hideLowerImages(); let lower=document.getElementById('partImgID_'+sel.id); if(!lower){ lower=document.getElementById('partImgID_TriggerGuard'+g+sel.id.slice(-2)); } if(!lower){ const wrap=tg_getLowerWrap(); if(wrap){ lower=Array.from(wrap.querySelectorAll('img, image, Image')).find(function(el){ const src=(el.getAttribute('src')||''); return src.indexOf(sel.id)!==-1; }); } } if(!lower){ lower=document.getElementById('partImgID_TriggerGuard'+g+'01'); } if(lower) lower.style.display='flex'; tg_setText('partName_TriggerGuard', title+suffix); tg_setText('partPrice_TriggerGuard', sel.price+' USD'); tg_clearHeaderIcons(); tg_setHeaderIconActive(g); tg_clearVariantButtons(g); const vb=document.getElementById('buttonItems_'+sel.id); if(vb) vb.classList.add('active'); }

// Start default: 00100101
{ const btn=document.getElementById('buttonModalStartMenu_StartButton'); if(btn) btn.addEventListener('click', function(){ uiReset_triggerGuard001001(); uiReset_triggerGuard002001(); tg_hideHeaderImages('001001'); tg_hideHeaderImages('002001'); tg_showHeaderDefault('001001'); tg_showHeaderDefault('002001'); tg_hideLowerImages(); const d=document.getElementById('partImgID_triggerGuard00100101'); if(d) d.style.display='flex'; window.part.triggerGuard['001'].products['001'].variants['01'].quantity=1; uiData_TriggerGuard(); }); }

// Selection listeners
{ ['01','02','03','04','05','06','07'].forEach(function(v){ const b=document.getElementById('buttonItems_triggerGuard001001'+v); if(b) b.addEventListener('click', function(){ uiReset_triggerGuard001001(); uiReset_triggerGuard002001(); window.part.triggerGuard['001'].products['001'].variants[v].quantity=1; uiData_TriggerGuard(); }); }); }
{ ['01','02','03','04','05','06','07','08','09','10'].forEach(function(v){ const b=document.getElementById('buttonItems_triggerGuard002001'+v); if(b) b.addEventListener('click', function(){ uiReset_triggerGuard001001(); uiReset_triggerGuard002001(); window.part.triggerGuard['002'].products['001'].variants[v].quantity=1; uiData_TriggerGuard(); }); }); }

export function getSelectedTriggerGuard(){ const a=window.part.triggerGuard['001'].products['001'].variants; for(const k of ['01','02','03','04','05','06','07']){ if(a[k]&&a[k].quantity===1) return a[k]; } const b=window.part.triggerGuard['002'].products['001'].variants; for(const k of ['01','02','03','04','05','06','07','08','09','10']){ if(b[k]&&b[k].quantity===1) return b[k]; } return null; }
export function getTriggerGuardTotalPrice(){ const v=getSelectedTriggerGuard(); return v? v.price:0; }





// Expose key functions to window for cross-controller coordination
window.uiReset_triggerGuard001001 = uiReset_triggerGuard001001;
window.uiReset_triggerGuard002001 = uiReset_triggerGuard002001;
window.uiData_TriggerGuard = uiData_TriggerGuard;
window.getSelectedTriggerGuard = getSelectedTriggerGuard;