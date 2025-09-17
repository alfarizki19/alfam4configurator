// === dataController_TakedownPin.mjs ===
// Takedown Pin Set UI Controller (Lower Category)

// Import model controller functions
import { updateModel_TakedownPin, handleTakedownPinSelection } from '../../modelController/modelController_Lower/modelController_TakedownPin.mjs';

// Helpers
function tk_setText(id, text){ const el=document.getElementById(id); if(el) el.textContent=text; }
function tk_addClass(id,c){ const el=document.getElementById(id); if(el) el.classList.add(c); }
function tk_removeClass(id,c){ const el=document.getElementById(id); if(el) el.classList.remove(c); }

function tk_variantKeysFor(group){
    if(group==="001001") return ["01","02"]; // Fortis
    if(group==="002001") return ["01","02","03","04","05","06","07","08","09","10"]; // Timber Creek
    if(group==="003001") return ["01"]; // YHM
    return [];
}

function tk_hideHeaderImages(group){
    const container = document.getElementById('productContainer_takedownPinSet'+group);
    if(!container) return;
    container.querySelectorAll('img, image, Image').forEach(function(el){ el.style.display='none'; });
}

function tk_showHeaderDefault(group){
    const container = document.getElementById('productContainer_takedownPinSet'+group);
    if(!container) return;
    let el = container.querySelector('#productImgID_takedownPinSet'+group+'01');
    if(!el && group==="003001") el = container.querySelector('[id="productImgID_takedownPinSet00200101"]');
    if(el) el.style.display='flex';
}

function tk_hideLowerImages(){
    const ids = [
        // 001001
        "partImgID_takedownPinSet00100101","partImgID_takedownPinSet00100102",
        // 002001
        "partImgID_takedownPinSet00200101","partImgID_takedownPinSet00200102","partImgID_takedownPinSet00200103","partImgID_takedownPinSet00200104","partImgID_takedownPinSet00200105","partImgID_takedownPinSet00200106","partImgID_takedownPinSet00200107","partImgID_takedownPinSet00200108","partImgID_takedownPinSet00200109","partImgID_takedownPinSet00200110",
        // 003001 (HTML currently has a duplicate id using 00200101; handle both)
        "partImgID_takedownPinSet00300101","partImgID_takedownPinSet00200101",
    ];
    ids.forEach(function(id){ const el=document.getElementById(id); if(el) el.style.display='none'; });
}

function tk_showLower(group, variant){
    let id = "partImgID_takedownPinSet"+group+variant;
    let el = document.getElementById(id);
    if(!el && group==="003001") el = document.getElementById("partImgID_takedownPinSet00200101");
    if(!el && group==="003001") el = document.getElementById("partImgID_takedownPinSet00300101");
    if(el) el.style.display='flex';
}

function tk_clearVariantButtons(group){
    tk_variantKeysFor(group).forEach(function(v){ const b=document.getElementById("buttonItems_takedownPinSet"+group+v); if(b) b.classList.remove('active'); });
}

function tk_clearHeaderIcons(){
    ["001001","002001","003001"].forEach(function(g){
        const container=document.getElementById("productContainer_takedownPinSet"+g);
        if(container){ const ico=container.querySelector('.itemsAccordionTypeA_OpenAccordion_ButtonIcon'); if(ico) ico.classList.remove('active'); }
        const idIcon=document.getElementById("productButtonIcon_takedownPinSet"+g); if(idIcon) idIcon.classList.remove('active');
    });
}

function tk_setHeaderIconActive(group){
    const container=document.getElementById("productContainer_takedownPinSet"+group);
    if(container){ const ico=container.querySelector('.itemsAccordionTypeA_OpenAccordion_ButtonIcon'); if(ico) ico.classList.add('active'); return; }
    const idIcon=document.getElementById("productButtonIcon_takedownPinSet"+group); if(idIcon) idIcon.classList.add('active');
}

// Resets
export function uiReset_takedownPinSet001001(){
    const p=window.part.takedownPin["001"].products["001"]; Object.keys(p.variants).forEach(k=>p.variants[k].quantity=0);
    tk_setText("productName_takedownPinSet001001", p.productTitle);
    tk_setText("productPricing_takedownPinSet001001", p.variants["01"].price+" USD");
    tk_removeClass("productHeader_takedownPinSet001001","active");
    tk_hideHeaderImages("001001"); tk_showHeaderDefault("001001");
    tk_clearVariantButtons("001001");
}

export function uiReset_takedownPinSet002001(){
    const p=window.part.takedownPin["002"].products["001"]; Object.keys(p.variants).forEach(k=>p.variants[k].quantity=0);
    tk_setText("productName_takedownPinSet002001", p.productTitle);
    tk_setText("productPricing_takedownPinSet002001", p.variants["01"].price+" USD");
    tk_removeClass("productHeader_takedownPinSet002001","active");
    tk_hideHeaderImages("002001"); tk_showHeaderDefault("002001");
    tk_clearVariantButtons("002001");
}

export function uiReset_takedownPinSet003001(){
    const p=window.part.takedownPin["003"].products["001"]; Object.keys(p.variants).forEach(k=>p.variants[k].quantity=0);
    tk_setText("productName_takedownPinSet003001", p.productTitle);
    tk_setText("productPricing_takedownPinSet003001", p.variants["01"].price+" USD");
    tk_removeClass("productHeader_takedownPinSet003001","active");
    tk_hideHeaderImages("003001"); tk_showHeaderDefault("003001");
}

export function uiData_TakedownPinSet(){
    let selected=null, group=null, productTitle="";
    // 001001
    { const v=window.part.takedownPin["001"].products["001"].variants; for(const k of ["01","02"]) if(v[k]&&v[k].quantity===1){ selected=v[k]; group="001001"; productTitle=window.part.takedownPin["001"].products["001"].productTitle; } }
    // 002001
    { const v=window.part.takedownPin["002"].products["001"].variants; for(const k of ["01","02","03","04","05","06","07","08","09","10"]) if(v[k]&&v[k].quantity===1){ selected=v[k]; group="002001"; productTitle=window.part.takedownPin["002"].products["001"].productTitle; } }
    // 003001
    { const v=window.part.takedownPin["003"].products["001"].variants; if(v["01"]&&v["01"].quantity===1){ selected=v["01"]; group="003001"; productTitle=window.part.takedownPin["003"].products["001"].productTitle; } }

    if(!selected || !group) return;

    // Items header
    tk_setText("productPricing_takedownPinSet"+group, selected.price+" USD");
    tk_addClass("productHeader_takedownPinSet"+group, "active");

    // Header images: show selected for this group; default 01 for others
    tk_hideHeaderImages(group);
    const headerContainer = document.getElementById('productContainer_takedownPinSet'+group);
    let h = headerContainer ? headerContainer.querySelector('#productImgID_takedownPinSet'+group+selected.id.slice(-2)) : null;
    if(!h && group==="003001" && headerContainer) h = headerContainer.querySelector('[id="productImgID_takedownPinSet00200101"]');
    if(h) h.style.display='flex';
    ["001001","002001","003001"].forEach(function(g){ if(g!==group){ tk_hideHeaderImages(g); tk_showHeaderDefault(g); }});

    // Items header name with variant suffix (if any)
    const variantSuffix = (selected.variantTitle && selected.variantTitle.toLowerCase()!=="no variant") ? (" - "+selected.variantTitle) : "";
    tk_setText("productName_takedownPinSet"+group, productTitle + variantSuffix);

    // Lower menu sync
    tk_hideLowerImages();
    tk_showLower(group, selected.id.slice(-2));
    tk_setText("partName_TakedownPinSet", productTitle + variantSuffix);
    tk_setText("partPrice_TakedownPinSet", selected.price+" USD");

    // Header icon and variant button actives
    tk_clearHeaderIcons(); tk_setHeaderIconActive(group);
    tk_clearVariantButtons(group); const vb=document.getElementById("buttonItems_takedownPinSet"+group+selected.id.slice(-2)); if(vb) vb.classList.add('active');
}

// Start default: Fortis 001001 01
{ const btn=document.getElementById("buttonModalStartMenu_StartButton"); if(btn) btn.addEventListener("click", function(){
    uiReset_takedownPinSet001001(); uiReset_takedownPinSet002001(); uiReset_takedownPinSet003001();
    // show defaults in headers and lower menu
    tk_hideHeaderImages("001001"); tk_hideHeaderImages("002001"); tk_hideHeaderImages("003001"); tk_showHeaderDefault("001001"); tk_showHeaderDefault("002001"); tk_showHeaderDefault("003001");
    tk_hideLowerImages(); tk_showLower("001001","01");
    window.part.takedownPin["001"].products["001"].variants["01"].quantity=1;
    uiData_TakedownPinSet();
    
    // Update 3D model after UI update
    updateModel_TakedownPin();
}); }

// Selection listeners
{ ["01","02"].forEach(function(v){ const b=document.getElementById("buttonItems_takedownPinSet001001"+v); if(b) b.addEventListener("click", function(){ uiReset_takedownPinSet001001(); uiReset_takedownPinSet002001(); uiReset_takedownPinSet003001(); window.part.takedownPin["001"].products["001"].variants[v].quantity=1; uiData_TakedownPinSet(); 
    
    // Update 3D model after UI update
    const itemsID = "takedownPinSet001001" + v;
    console.log(`🎯 Part button clicked: ${itemsID}`);
    handleTakedownPinSelection(itemsID);
    }); }); }
{ ["01","02","03","04","05","06","07","08","09","10"].forEach(function(v){ const b=document.getElementById("buttonItems_takedownPinSet002001"+v); if(b) b.addEventListener("click", function(){ uiReset_takedownPinSet001001(); uiReset_takedownPinSet002001(); uiReset_takedownPinSet003001(); window.part.takedownPin["002"].products["001"].variants[v].quantity=1; uiData_TakedownPinSet(); 
    
    // Update 3D model after UI update
    const itemsID = "takedownPinSet002001" + v;
    console.log(`🎯 Part button clicked: ${itemsID}`);
    handleTakedownPinSelection(itemsID);
    }); }); }
{ const b=document.getElementById("buttonItems_takedownPinSet003001"); if(b) b.addEventListener("click", function(){ uiReset_takedownPinSet001001(); uiReset_takedownPinSet002001(); uiReset_takedownPinSet003001(); window.part.takedownPin["003"].products["001"].variants["01"].quantity=1; uiData_TakedownPinSet(); 
    
    // Update 3D model after UI update
    const itemsID = "takedownPinSet00300101";
    console.log(`🎯 Part button clicked: ${itemsID}`);
    handleTakedownPinSelection(itemsID);
    }); }

// Exports for price calc
export function getSelectedTakedownPinSet(){
    const g1=window.part.takedownPin["001"].products["001"].variants; for(const k of ["01","02"]) if(g1[k]&&g1[k].quantity===1) return g1[k];
    const g2=window.part.takedownPin["002"].products["001"].variants; for(const k of ["01","02","03","04","05","06","07","08","09","10"]) if(g2[k]&&g2[k].quantity===1) return g2[k];
    const g3=window.part.takedownPin["003"].products["001"].variants; if(g3["01"]&&g3["01"].quantity===1) return g3["01"];
    return null;
}
export function getTakedownPinSetTotalPrice(){ const v=getSelectedTakedownPinSet(); return v? v.price:0; }