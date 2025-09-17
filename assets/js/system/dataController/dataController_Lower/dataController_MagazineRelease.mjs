// === dataController_MagazineRelease.mjs ===
// Magazine Release UI Controller (Lower) — two products, many variants

// Import model controller functions
import { updateModel_MagazineRelease, handleMagazineReleaseSelection } from '../../modelController/modelController_Lower/modelController_MagazineRelease.mjs';

function mr_setText(id, text){ const el=document.getElementById(id); if(el) el.textContent=text; }
function mr_addClass(id,c){ const el=document.getElementById(id); if(el) el.classList.add(c); }
function mr_removeClass(id,c){ const el=document.getElementById(id); if(el) el.classList.remove(c); }

function mr_clear(group, max){ for(let i=1;i<=max;i++){ const k=(""+i).padStart(2,"0"); const b=document.getElementById("buttonItems_magazineRelease"+group+k); if(b) b.classList.remove("active"); } }
function mr_hideHeaderImages(group){ const max= group==="001001"?3:10; for(let i=1;i<=max;i++){ const k=(""+i).padStart(2,"0"); const el=document.getElementById("productImgID_magazineRelease"+group+k); if(el) el.style.display='none'; } }
function mr_showHeaderDefault(group){ const el=document.getElementById("productImgID_magazineRelease"+group+"01"); if(el) el.style.display='flex'; }
function mr_hideLowerImages(){ const ids=["partImgID_magazineRelease00100101","partImgID_magazineRelease00100102","partImgID_magazineRelease00100103","partImgID_magazineRelease00200101","partImgID_magazineRelease00200102","partImgID_magazineRelease00200103","partImgID_magazineRelease00200104","partImgID_magazineRelease00200105","partImgID_magazineRelease00200106","partImgID_magazineRelease00200107","partImgID_magazineRelease00200108","partImgID_magazineRelease00200109","partImgID_magazineRelease00200110"]; ids.forEach(function(id){ const el=document.getElementById(id); if(el) el.style.display='none'; }); }
function mr_clearHeaderIcons(){ ["001001","002001"].forEach(function(s){ const container=document.getElementById("productContainer_magazineRelease"+s); if(container){ const ico=container.querySelector('.itemsAccordionTypeA_OpenAccordion_ButtonIcon'); if(ico) ico.classList.remove('active'); } else { const ico=document.getElementById("productButtonIcon_MagazineRelease"+s); if(ico) ico.classList.remove('active'); } }); }
function mr_setHeaderIconActive(suffix){ const container=document.getElementById("productContainer_magazineRelease"+suffix); if(container){ const ico=container.querySelector('.itemsAccordionTypeA_OpenAccordion_ButtonIcon'); if(ico) ico.classList.add('active'); } else { const ico=document.getElementById("productButtonIcon_MagazineRelease"+suffix); if(ico) ico.classList.add('active'); } }

export function uiReset_magazineRelease001001(){ const p=window.part.magazineRelease["001"].products["001"]; Object.keys(p.variants).forEach(k=>p.variants[k].quantity=0); mr_setText("productName_magazineRelease001001", p.productTitle); mr_setText("productPricing_magazineRelease001001", p.variants["01"].price+" USD"); mr_removeClass("productHeader_magazineRelease001001","active"); mr_clear("001001",3); }
export function uiReset_magazineRelease002001(){ const p=window.part.magazineRelease["002"].products["001"]; Object.keys(p.variants).forEach(k=>p.variants[k].quantity=0); mr_setText("productName_magazineRelease002001", p.productTitle); mr_setText("productPricing_magazineRelease002001", p.variants["01"].price+" USD"); mr_removeClass("productHeader_magazineRelease002001","active"); mr_clear("002001",10); }

export function uiData_MagazineRelease(){ let s=null,g=null,t=""; { const v=window.part.magazineRelease["001"].products["001"].variants; for(let i=1;i<=3;i++){ const k=(""+i).padStart(2,"0"); if(v[k]&&v[k].quantity===1){ s=v[k]; g="001001"; t=window.part.magazineRelease["001"].products["001"].productTitle; } } } { const v=window.part.magazineRelease["002"].products["001"].variants; for(let i=1;i<=10;i++){ const k=(""+i).padStart(2,"0"); if(v[k]&&v[k].quantity===1){ s=v[k]; g="002001"; t=window.part.magazineRelease["002"].products["001"].productTitle; } } } if(!s) return; mr_setText("productPricing_magazineRelease"+g, s.price+" USD"); mr_addClass("productHeader_magazineRelease"+g, "active"); mr_setText("productName_magazineRelease"+g, t + (s.variantTitle.toLowerCase()!=="no variant"? (" - "+s.variantTitle):"")); mr_hideHeaderImages(g); const h=document.getElementById("productImgID_magazineRelease"+g+s.id.slice(-2)); if(h) h.style.display='flex'; const other=g==="001001"?"002001":"001001"; mr_hideHeaderImages(other); mr_showHeaderDefault(other); mr_hideLowerImages(); const l=document.getElementById("partImgID_magazineRelease"+g+s.id.slice(-2)); if(l) l.style.display='flex'; mr_clear(g, g==="001001"?3:10); const b=document.getElementById("buttonItems_magazineRelease"+g+s.id.slice(-2)); if(b) b.classList.add("active"); mr_setText("partName_MagazineRelease", t + (s.variantTitle.toLowerCase()!=="no variant"? (" - "+s.variantTitle):"")); mr_setText("partPrice_MagazineRelease", s.price+" USD"); mr_clearHeaderIcons(); mr_setHeaderIconActive(g); }

{ const btn=document.getElementById("buttonModalStartMenu_StartButton"); if(btn) btn.addEventListener("click", function(){ uiReset_magazineRelease001001(); uiReset_magazineRelease002001(); mr_hideHeaderImages("001001"); mr_hideHeaderImages("002001"); mr_showHeaderDefault("001001"); mr_showHeaderDefault("002001"); mr_hideLowerImages(); window.part.magazineRelease["001"].products["001"].variants["01"].quantity=1; uiData_MagazineRelease(); 
    
    // Update 3D model after UI update
    updateModel_MagazineRelease();
    }); }

{ for(let i=1;i<=3;i++){ const k=(""+i).padStart(2,"0"); const b=document.getElementById("buttonItems_magazineRelease001001"+k); if(b) b.addEventListener("click", function(){ uiReset_magazineRelease001001(); uiReset_magazineRelease002001(); window.part.magazineRelease["001"].products["001"].variants[k].quantity=1; uiData_MagazineRelease(); 
    
    // Update 3D model after UI update
    const itemsID = "magazineRelease001001" + k;
    console.log(`🎯 Part button clicked: ${itemsID}`);
    handleMagazineReleaseSelection(itemsID);
    }); } for(let i=1;i<=10;i++){ const k=(""+i).padStart(2,"0"); const b=document.getElementById("buttonItems_magazineRelease002001"+k); if(b) b.addEventListener("click", function(){ uiReset_magazineRelease001001(); uiReset_magazineRelease002001(); window.part.magazineRelease["002"].products["001"].variants[k].quantity=1; uiData_MagazineRelease(); 
    
    // Update 3D model after UI update
    const itemsID = "magazineRelease002001" + k;
    console.log(`🎯 Part button clicked: ${itemsID}`);
    handleMagazineReleaseSelection(itemsID);
    }); } }

export function getSelectedMagazineRelease(){ const a=window.part.magazineRelease["001"].products["001"].variants; for(let i=1;i<=3;i++){ const k=(""+i).padStart(2,"0"); if(a[k]&&a[k].quantity===1) return a[k]; } const b=window.part.magazineRelease["002"].products["001"].variants; for(let i=1;i<=10;i++){ const k=(""+i).padStart(2,"0"); if(b[k]&&b[k].quantity===1) return b[k]; } return null; }
export function getMagazineReleaseTotalPrice(){ const v=getSelectedMagazineRelease(); return v? v.price:0; }