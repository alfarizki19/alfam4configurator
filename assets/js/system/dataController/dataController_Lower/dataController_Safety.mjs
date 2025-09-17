// === dataController_Safety.mjs ===
// Safety UI Controller (Lower Category) — two products with many variants

// Import model controller functions
import { updateModel_Safety, handleSafetySelection } from '../../modelController/modelController_Lower/modelController_Safety.mjs';

function sf_setText(id, text) { const el = document.getElementById(id); if (el) el.textContent = text; }
function sf_addClass(id, c) { const el = document.getElementById(id); if (el) el.classList.add(c); }
function sf_removeClass(id, c) { const el = document.getElementById(id); if (el) el.classList.remove(c); }

function sf_hideHeaderImages(group) {
    const ids = group === "001001"
        ? ["productImgID_Safety00100101","productImgID_Safety00100102","productImgID_Safety00100103","productImgID_Safety00100104"]
        : ["productImgID_Safety00200101","productImgID_Safety00200102","productImgID_Safety00200103","productImgID_Safety00200104","productImgID_Safety00200105","productImgID_Safety00200106","productImgID_Safety00200107","productImgID_Safety00200108","productImgID_Safety00200109","productImgID_Safety00200110"];
    ids.forEach(function (id) { const el = document.getElementById(id); if (el) el.style.display = "none"; });
}
function sf_clearHeaderIcons(){ ["001001","002001"].forEach(function(g){ const ic=document.getElementById("productButtonIcon_Safety"+g); if(ic) ic.classList.remove("active"); }); }
function sf_setHeaderIconActive(group){ const ic=document.getElementById("productButtonIcon_Safety"+group); if(ic) ic.classList.add("active"); }

function sf_showHeaderDefault(group) {
    const id = group === "001001" ? "productImgID_Safety00100101" : "productImgID_Safety00200101";
    const el = document.getElementById(id); if (el) el.style.display = "flex";
}

function sf_hideLowerImages() {
    const ids = [
        "partImgID_Safety00100101","partImgID_Safety00100102","partImgID_Safety00100103","partImgID_Safety00100104",
        "partImgID_Safety00200101","partImgID_Safety00200102","partImgID_Safety00200103","partImgID_Safety00200104","partImgID_Safety00200105","partImgID_Safety00200106","partImgID_Safety00200107","partImgID_Safety00200108","partImgID_Safety00200109","partImgID_Safety00200110",
    ];
    ids.forEach(function (id) { const el = document.getElementById(id); if (el) el.style.display = "none"; });
}

function sf_clearVariantButtons(group) {
    const map = { "001001": ["01","02","03","04"], "002001": ["01","02","03","04","05","06","07","08","09","10"] };
    (map[group] || []).forEach(function (v) {
        const btn = document.getElementById("buttonItems_safety" + group + v);
        if (btn) btn.classList.remove("active");
    });
}

export function uiReset_safety001001() {
    const product = window.part.safety["001"].products["001"]; Object.keys(product.variants).forEach(k => product.variants[k].quantity = 0);
    sf_setText("productName_safety001001", product.productTitle);
    sf_setText("productPricing_safety001001", product.variants["01"].price + " USD");
    sf_removeClass("productHeader_safety001001", "active");
    sf_hideHeaderImages("001001"); sf_clearVariantButtons("001001");
}

export function uiReset_safety002001() {
    const product = window.part.safety["002"].products["001"]; Object.keys(product.variants).forEach(k => product.variants[k].quantity = 0);
    sf_setText("productName_safety002001", product.productTitle);
    sf_setText("productPricing_safety002001", product.variants["01"].price + " USD");
    sf_removeClass("productHeader_safety002001", "active");
    sf_hideHeaderImages("002001"); sf_clearVariantButtons("002001");
}

export function uiData_Safety() {
    let selected = null; let headerSuffix = null; let productTitle = "";
    { const p = window.part.safety["001"].products["001"].variants; for (const k of ["01","02","03","04"]) { if (p[k] && p[k].quantity === 1) { selected = p[k]; headerSuffix = "001001"; productTitle = window.part.safety["001"].products["001"].productTitle; } } }
    { const p = window.part.safety["002"].products["001"].variants; for (const k of ["01","02","03","04","05","06","07","08","09","10"]) { if (p[k] && p[k].quantity === 1) { selected = p[k]; headerSuffix = "002001"; productTitle = window.part.safety["002"].products["001"].productTitle; } } }
    if (!selected) return;

    sf_setText("productPricing_safety" + headerSuffix, selected.price + " USD");
    sf_addClass("productHeader_safety" + headerSuffix, "active");
    // Open-accordion header button active when variant selected
    const openBtn = document.getElementById("productButtonID_Safety" + headerSuffix);
    if (openBtn) openBtn.classList.add("active");
    sf_clearHeaderIcons(); sf_setHeaderIconActive(headerSuffix);

    sf_hideHeaderImages(headerSuffix);
    const hImg = document.getElementById("productImgID_Safety" + headerSuffix + selected.id.slice(-2)); if (hImg) hImg.style.display = "flex";
    const other = headerSuffix === "001001" ? "002001" : "001001"; sf_hideHeaderImages(other); sf_showHeaderDefault(other);

    sf_hideLowerImages();
    const lImg = document.getElementById("partImgID_Safety" + headerSuffix + selected.id.slice(-2)); if (lImg) lImg.style.display = "flex";
    const suffix = (selected.variantTitle && selected.variantTitle.toLowerCase() !== "no variant") ? (" - " + selected.variantTitle) : "";
    sf_setText("partName_Safety", productTitle + suffix);
    sf_setText("partPrice_Safety", selected.price + " USD");

    sf_clearVariantButtons(headerSuffix);
    const btn = document.getElementById("buttonItems_safety" + headerSuffix + selected.id.slice(-2)); if (btn) btn.classList.add("active");
}

// Start default
{
    const btn = document.getElementById("buttonModalStartMenu_StartButton");
    if (btn) {
        btn.addEventListener("click", function () {
            uiReset_safety001001(); uiReset_safety002001();
            window.part.safety["001"].products["001"].variants["01"].quantity = 1;
            uiData_Safety();
            
            // Update 3D model after UI update
            updateModel_Safety();
        });
    }
}

// Variant listeners
{
    ["01","02","03","04"].forEach(function (v) { const b = document.getElementById("buttonItems_safety001001" + v); if (b) b.addEventListener("click", function () { uiReset_safety001001(); uiReset_safety002001(); window.part.safety["001"].products["001"].variants[v].quantity = 1; uiData_Safety(); 
    
    // Update 3D model after UI update
    const itemsID = "safety001001" + v;
    console.log(`🎯 Part button clicked: ${itemsID}`);
    handleSafetySelection(itemsID);
    }); });
    ["01","02","03","04","05","06","07","08","09","10"].forEach(function (v) { const b = document.getElementById("buttonItems_safety002001" + v); if (b) b.addEventListener("click", function () { uiReset_safety001001(); uiReset_safety002001(); window.part.safety["002"].products["001"].variants[v].quantity = 1; uiData_Safety(); 
    
    // Update 3D model after UI update
    const itemsID = "safety002001" + v;
    console.log(`🎯 Part button clicked: ${itemsID}`);
    handleSafetySelection(itemsID);
    }); });
}

export function getSelectedSafety() {
    const a = window.part.safety["001"].products["001"].variants; for (const k of ["01","02","03","04"]) { if (a[k] && a[k].quantity === 1) return a[k]; }
    const b = window.part.safety["002"].products["001"].variants; for (const k of ["01","02","03","04","05","06","07","08","09","10"]) { if (b[k] && b[k].quantity === 1) return b[k]; }
    return null;
}

export function getSafetyTotalPrice() { const v = getSelectedSafety(); return v ? v.price : 0; }