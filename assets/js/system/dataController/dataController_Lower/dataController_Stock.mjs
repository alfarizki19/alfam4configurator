// === dataController_Stock.mjs ===
// Stock UI Controller (Lower Category)

// Import model controller functions
import { updateModel_Stock, handleStockSelection } from '../../modelController/modelController_Lower/modelController_Stock.mjs';

function st_setText(id, text) { const el = document.getElementById(id); if (el) el.textContent = text; }
function st_addClass(id, c) { const el = document.getElementById(id); if (el) el.classList.add(c); }
function st_removeClass(id, c) { const el = document.getElementById(id); if (el) el.classList.remove(c); }

function st_clearVariantButtons(group) {
    const map = {
        "001001": ["01","02","03","04","05"],
        "002001": ["01","02","03"],
    };
    const list = map[group] || [];
    list.forEach(function (v) {
        const btn = document.getElementById("buttonItems_stock" + group + v);
        if (btn) btn.classList.remove("active");
    });
}

function st_hideHeaderImages(group){
    const map = { "001001": ["01","02","03","04","05"], "002001": ["01","02","03"] };
    (map[group]||[]).forEach(function(v){ const el=document.getElementById("productImgID_stock"+group+v); if(el) el.style.display='none'; });
}
function st_showHeaderDefault(group){ const el=document.getElementById("productImgID_stock"+group+"01"); if(el) el.style.display='flex'; }
function st_hideLowerImages(){ const ids=["partImgID_stock00100101","partImgID_stock00100102","partImgID_stock00100103","partImgID_stock00100104","partImgID_stock00100105","partImgID_stock00200101","partImgID_stock00200102","partImgID_stock00200103"]; ids.forEach(function(id){ const el=document.getElementById(id); if(el) el.style.display='none'; }); }
function st_setOpenButtonActive(group){ const b=document.getElementById("productButtonID_stock"+group); if(b) b.classList.add("active"); }
function st_clearOpenButtons(){ ["001001","002001"].forEach(function(g){ const b=document.getElementById("productButtonID_stock"+g); if(b) b.classList.remove("active"); }); }
function st_clearHeaderIcons(){ ["001001","002001"].forEach(function(g){ const ic=document.getElementById("productButtonIcon_stock"+g); if(ic) ic.classList.remove("active"); }); }
function st_setHeaderIconActive(group){ const ic=document.getElementById("productButtonIcon_stock"+group); if(ic) ic.classList.add("active"); }

function st_hideUpperDefaults() {
    // No explicit ids in upper menu file; leaving as data only updates
}

export function uiReset_stock001001() {
    const product = window.part.stock["001"].products["001"]; // B5 Systems
    Object.keys(product.variants).forEach(function (k) { product.variants[k].quantity = 0; });
    st_setText("productName_stock001001", product.productTitle);
    st_setText("productPricing_stock001001", product.variants["01"].price + " USD");
    st_removeClass("productHeader_stock001001", "active");
    st_clearVariantButtons("001001"); st_clearOpenButtons(); st_clearHeaderIcons();
    st_setText("partName_Stock", "-----");
    st_setText("partPrice_Stock", "-----");
}

export function uiReset_stock002001() {
    const product = window.part.stock["002"].products["001"]; // Daniel Defense
    Object.keys(product.variants).forEach(function (k) { product.variants[k].quantity = 0; });
    st_setText("productName_stock002001", product.productTitle);
    st_setText("productPricing_stock002001", product.variants["01"].price + " USD");
    st_removeClass("productHeader_stock002001", "active");
    st_clearVariantButtons("002001"); st_clearOpenButtons(); st_clearHeaderIcons();
    st_setText("partName_Stock", "-----");
    st_setText("partPrice_Stock", "-----");
}

export function uiData_Stock() {
    let selected = null; let headerSuffix = null; let productTitle = "";

    // 001001 variants
    {
        const prod = window.part.stock["001"].products["001"]; const v = prod.variants;
        for (const k of ["01","02","03","04","05"]) { if (v[k] && v[k].quantity === 1) { selected = v[k]; headerSuffix = "001001"; productTitle = prod.productTitle; } }
    }
    // 002001 variants
    {
        const prod = window.part.stock["002"].products["001"]; const v = prod.variants;
        for (const k of ["01","02","03"]) { if (v[k] && v[k].quantity === 1) { selected = v[k]; headerSuffix = "002001"; productTitle = prod.productTitle; } }
    }

    if (!selected || !headerSuffix) return;

    st_setText("productPricing_stock" + headerSuffix, selected.price + " USD");
    st_addClass("productHeader_stock" + headerSuffix, "active");
    st_setOpenButtonActive(headerSuffix);
    st_clearHeaderIcons(); st_setHeaderIconActive(headerSuffix);

    const variantSuffix = (selected.variantTitle && selected.variantTitle.toLowerCase() !== "no variant") ? (" - " + selected.variantTitle) : "";
    st_setText("productName_stock" + headerSuffix, productTitle + variantSuffix);
    st_setText("partName_Stock", productTitle + variantSuffix);
    st_setText("partPrice_Stock", selected.price + " USD");

    st_hideHeaderImages(headerSuffix); const h=document.getElementById("productImgID_stock"+headerSuffix+selected.id.slice(-2)); if(h) h.style.display='flex'; const other= headerSuffix==="001001"?"002001":"001001"; st_hideHeaderImages(other); st_showHeaderDefault(other);
    st_hideLowerImages(); const l=document.getElementById("partImgID_stock"+headerSuffix+selected.id.slice(-2)); if(l) l.style.display='flex';
    st_clearVariantButtons(headerSuffix);
    const btn = document.getElementById("buttonItems_stock" + headerSuffix + selected.id.slice(-2));
    if (btn) btn.classList.add("active");
}

// Start default -> stock001001 01
{
    const btn = document.getElementById("buttonModalStartMenu_StartButton");
    if (btn) {
        btn.addEventListener("click", function () {
            uiReset_stock001001(); uiReset_stock002001();
            window.part.stock["001"].products["001"].variants["01"].quantity = 1;
            uiData_Stock();
            
            // Update 3D model after UI update
            updateModel_Stock();
        });
    }
}

// Variant listeners
{
    ["01","02","03","04","05"].forEach(function (v) {
        const b = document.getElementById("buttonItems_stock001001" + v);
        if (b) b.addEventListener("click", function () {
            uiReset_stock001001(); uiReset_stock002001();
            const prod = window.part.stock["001"].products["001"]; if (prod.variants[v]) prod.variants[v].quantity = 1;
            uiData_Stock();
            
            // Update 3D model after UI update
            const itemsID = "stock001001" + v;
            console.log(`🎯 Part button clicked: ${itemsID}`);
            handleStockSelection(itemsID);
        });
    });
    ["01","02","03"].forEach(function (v) {
        const b = document.getElementById("buttonItems_stock002001" + v);
        if (b) b.addEventListener("click", function () {
            uiReset_stock001001(); uiReset_stock002001();
            const prod = window.part.stock["002"].products["001"]; if (prod.variants[v]) prod.variants[v].quantity = 1;
            uiData_Stock();
            
            // Update 3D model after UI update
            const itemsID = "stock002001" + v;
            console.log(`🎯 Part button clicked: ${itemsID}`);
            handleStockSelection(itemsID);
        });
    });
}

export function getSelectedStock() {
    const a = window.part.stock["001"].products["001"].variants;
    const b = window.part.stock["002"].products["001"].variants;
    for (const k of ["01","02","03","04","05"]) { if (a[k] && a[k].quantity === 1) return a[k]; }
    for (const k of ["01","02","03"]) { if (b[k] && b[k].quantity === 1) return b[k]; }
    return null;
}

export function getStockTotalPrice() { const v = getSelectedStock(); return v ? v.price : 0; }