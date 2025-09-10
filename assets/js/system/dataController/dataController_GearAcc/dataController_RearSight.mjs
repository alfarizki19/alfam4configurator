// === dataController_RearSight.mjs ===
// Gear & Acc: Rear Sight controller

function rs_get(id){ return document.getElementById(id); }
function rs_setText(id, t){ const el=rs_get(id); if(el) el.textContent=t; }
function rs_addClass(id,c){ const el=rs_get(id); if(el) el.classList.add(c); }
function rs_removeClass(id,c){ const el=rs_get(id); if(el) el.classList.remove(c); }

function rs_getGearWrap(){ const nameEl=rs_get('partName_RearSight'); if(!nameEl) return null; let p=nameEl.parentElement; while(p && !p.classList.contains('menuPartMenuOptionContainer')){ p=p.parentElement; } return p? p.querySelector('.menuPartMenuOptionImageArea') : null; }
function rs_hideGearImages(){ const wrap=rs_getGearWrap(); if(!wrap) return; wrap.querySelectorAll('img, image, Image').forEach(el=>el.style.display='none'); }
function rs_showGearDefaults(){ const a=rs_get('partImgID_rearSight00100101'); if(a) a.style.display='flex'; }

function rs_getProducts(){ const a = window.part.rearSight && window.part.rearSight['001'] && window.part.rearSight['001'].products && window.part.rearSight['001'].products['001']; const b = window.part.rearSight && window.part.rearSight['002'] && window.part.rearSight['002'].products && window.part.rearSight['002'].products['001']; return {a, b}; }

export function uiReset_rearSight(){ const {a,b}=rs_getProducts(); if(a){ a.variants['01'].quantity=0; } if(b){ b.variants['01'].quantity=0; } rs_removeClass('productHeader_rearSight001001','active'); rs_removeClass('productHeader_rearSight002001','active'); rs_removeClass('productHeader_noRearSight','active'); rs_hideGearImages(); rs_showGearDefaults(); rs_setText('partName_RearSight','no rear sight selected'); rs_setText('partPrice_RearSight','----- USD'); rs_removeClass('productButtonIcon_noRearSight','active'); rs_removeClass('productButtonIcon_rearSight001001','active'); rs_removeClass('productButtonIcon_rearSight002001','active'); // keep part-menu defaults from inventory
 if(a){ rs_setText('productName_rearSight001001', a.productTitle); rs_setText('productPricing_rearSight001001', a.variants['01'].price+' USD'); }
 if(b){ rs_setText('productName_rearSight002001', b.productTitle); rs_setText('productPricing_rearSight002001', b.variants['01'].price+' USD'); } }

export function uiData_RearSight(){ const {a,b}=rs_getProducts(); const aSel=a && a.variants['01'] && a.variants['01'].quantity===1 ? a.variants['01'] : null; const bSel=b && b.variants['01'] && b.variants['01'].quantity===1 ? b.variants['01'] : null; const anySel = aSel||bSel; rs_hideGearImages(); if(!anySel){ rs_showGearDefaults(); rs_setText('partName_RearSight','no rear sight selected'); rs_setText('partPrice_RearSight','----- USD'); rs_addClass('productHeader_noRearSight','active'); rs_addClass('productButtonIcon_noRearSight','active'); return; } const chosen=aSel||bSel; const group=aSel?'001001':'002001'; const img=rs_get('partImgID_'+chosen.id); if(img) img.style.display='flex'; const product=(aSel? a:b); const title=product.productTitle; const suffix=(chosen.variantTitle && chosen.variantTitle.toLowerCase()!=='no variant'? (' - '+chosen.variantTitle):''); rs_setText('partName_RearSight', title + suffix); rs_setText('partPrice_RearSight', chosen.price+' USD'); // part-menu header texts
 rs_setText('productName_rearSight'+group, title + suffix); rs_setText('productPricing_rearSight'+group, chosen.price+' USD'); // clear both groups before set
 rs_removeClass('productHeader_rearSight001001','active'); rs_removeClass('productHeader_rearSight002001','active'); rs_removeClass('productButtonIcon_rearSight001001','active'); rs_removeClass('productButtonIcon_rearSight002001','active'); rs_removeClass('productHeader_noRearSight','active'); rs_removeClass('productButtonIcon_noRearSight','active'); rs_addClass('productHeader_rearSight'+group,'active'); rs_addClass('productButtonIcon_rearSight'+group,'active'); }

(function(){ const start=rs_get('buttonModalStartMenu_StartButton'); if(start){ start.addEventListener('click', function(){ uiReset_rearSight(); uiData_RearSight(); }); }
 const noBtn=rs_get('buttonItems_noRearSight'); if(noBtn){ noBtn.addEventListener('click', function(){ uiReset_rearSight(); uiData_RearSight(); }); }
 const aBtn=rs_get('buttonItems_rearSight001001'); if(aBtn){ aBtn.addEventListener('click', function(){ const {a,b}=rs_getProducts(); if(b){ b.variants['01'].quantity=0; } if(a){ a.variants['01'].quantity=1; } uiData_RearSight(); }); }
 const bBtn=rs_get('buttonItems_rearSight002001'); if(bBtn){ bBtn.addEventListener('click', function(){ const {a,b}=rs_getProducts(); if(a){ a.variants['01'].quantity=0; } if(b){ b.variants['01'].quantity=1; } uiData_RearSight(); }); }
})();

export function getSelectedRearSight(){ const {a,b}=rs_getProducts(); if(a && a.variants['01'].quantity===1) return a.variants['01']; if(b && b.variants['01'].quantity===1) return b.variants['01']; return null; }
export function getRearSightTotalPrice(){ const v=getSelectedRearSight(); return v? v.price:0; }
