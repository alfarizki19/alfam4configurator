// === dataController_Magazine.mjs ===
// Magazine UI Controller (Lower Category) — two products, single variant each

// Import model controller functions
import { updateModel_Magazine, handleMagazineSelection } from '../../modelController/modelController_Lower/modelController_Magazine.mjs';

function mg_setText(id, text){ const el=document.getElementById(id); if(el) el.textContent=text; }
function mg_addClass(id,c){ const el=document.getElementById(id); if(el) el.classList.add(c); }
function mg_removeClass(id,c){ const el=document.getElementById(id); if(el) el.classList.remove(c); }

function mg_hideLowerImages(){ ["partImgID_magazine00100101","partImgID_magazine00200101"].forEach(function(id){ const el=document.getElementById(id); if(el) el.style.display='none'; }); }
function mg_showLower(id){ const el=document.getElementById(id); if(el) el.style.display='flex'; }
function mg_clearHeaderButtons(){ ["001001","002001"].forEach(function(s){ const b=document.getElementById("buttonItemsID_Magazine"+s+"01"); if(b) b.classList.remove("active"); }); }
function mg_setHeaderActive(suffix){ const b=document.getElementById("buttonItemsID_Magazine"+suffix+"01"); if(b) b.classList.add("active"); }
function mg_clearHeaderIcons(){ ["001001","002001"].forEach(function(s){ const icon=document.getElementById("productButtonIcon_Magazine"+s); if(icon) icon.classList.remove("active"); }); }
function mg_setHeaderIconActive(suffix){ const container=document.getElementById("productContainer_magazine"+suffix); if(container){ const icon=container.querySelector('.itemsAccordionTypeA_OpenAccordion_ButtonIcon'); if(icon) icon.classList.add('active'); } else { const icon=document.getElementById("productButtonIcon_Magazine"+suffix); if(icon) icon.classList.add("active"); } }
function mg_clearItemButtons(){ ["buttonItemsID_Magazine00100101","buttonItemsID_Magazine00200101"].forEach(function(id){ const el=document.getElementById(id); if(el) el.classList.remove("active"); }); }

export function uiReset_magazine001001(){ const p=window.part.magazine["001"].products["001"]; p.variants["01"].quantity=0; mg_setText("productName_magazine001001", p.productTitle); mg_setText("productPricing_magazine001001", p.variants["01"].price+" USD"); mg_removeClass("productHeader_magazine001001","active"); mg_clearHeaderButtons(); mg_clearHeaderIcons(); mg_clearItemButtons(); mg_hideLowerImages(); }
export function uiReset_magazine002001(){ const p=window.part.magazine["002"].products["001"]; p.variants["01"].quantity=0; mg_setText("productName_magazine002001", p.productTitle); mg_setText("productPricing_magazine002001", p.variants["01"].price+" USD"); mg_removeClass("productHeader_magazine002001","active"); mg_clearHeaderButtons(); mg_clearHeaderIcons(); mg_clearItemButtons(); mg_hideLowerImages(); }

export function uiData_Magazine(){ let s=null,g=null,t=""; { const v=window.part.magazine["001"].products["001"].variants["01"]; if(v.quantity===1){ s=v; g="001001"; t=window.part.magazine["001"].products["001"].productTitle; } } { const v=window.part.magazine["002"].products["001"].variants["01"]; if(v.quantity===1){ s=v; g="002001"; t=window.part.magazine["002"].products["001"].productTitle; } } if(!s) return; mg_setText("productPricing_magazine"+g, s.price+" USD"); mg_addClass("productHeader_magazine"+g, "active"); mg_setText("productName_magazine"+g, t + (s.variantTitle.toLowerCase()!=="no variant"? (" - "+s.variantTitle):"")); mg_clearHeaderButtons(); mg_setHeaderActive(g); mg_clearHeaderIcons(); mg_setHeaderIconActive(g); mg_hideLowerImages(); mg_showLower("partImgID_magazine"+g+"01"); mg_setText("partName_Magazine", t + (s.variantTitle.toLowerCase()!=="no variant"? (" - "+s.variantTitle):"")); mg_setText("partPrice_Magazine", s.price+" USD"); mg_clearItemButtons(); const ib=document.getElementById("buttonItemsID_Magazine"+g+"01"); if(ib) ib.classList.add("active"); }

{ const btn=document.getElementById("buttonModalStartMenu_StartButton"); if(btn) btn.addEventListener("click", function(){ uiReset_magazine001001(); uiReset_magazine002001(); window.part.magazine["001"].products["001"].variants["01"].quantity=1; uiData_Magazine(); 
    
    // Update 3D model after UI update
    updateModel_Magazine();
    }); }

{ const b1=document.getElementById("buttonItemsID_Magazine00100101"); if(b1) b1.addEventListener("click", function(){ uiReset_magazine001001(); uiReset_magazine002001(); window.part.magazine["001"].products["001"].variants["01"].quantity=1; uiData_Magazine(); 
    
    // Update 3D model after UI update
    const itemsID = "magazine00100101";
    console.log(`🎯 Part button clicked: ${itemsID}`);
    handleMagazineSelection(itemsID);
    }); const b2=document.getElementById("buttonItemsID_Magazine00200101"); if(b2) b2.addEventListener("click", function(){ uiReset_magazine001001(); uiReset_magazine002001(); window.part.magazine["002"].products["001"].variants["01"].quantity=1; uiData_Magazine(); 
    
    // Update 3D model after UI update
    const itemsID = "magazine00200101";
    console.log(`🎯 Part button clicked: ${itemsID}`);
    handleMagazineSelection(itemsID);
    }); }

export function getSelectedMagazine(){ const a=window.part.magazine["001"].products["001"].variants["01"]; if(a.quantity===1) return a; const b=window.part.magazine["002"].products["001"].variants["01"]; if(b.quantity===1) return b; return null; }
export function getMagazineTotalPrice(){ const v=getSelectedMagazine(); return v? v.price:0; }