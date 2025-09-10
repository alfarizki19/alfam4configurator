// === dataController_PistolGrip.mjs ===
// Pistol Grip UI Controller (Lower Category) — two products with variants

function pg_setText(id, text) { const el = document.getElementById(id); if (el) el.textContent = text; }
function pg_addClass(id, c) { const el = document.getElementById(id); if (el) el.classList.add(c); }
function pg_removeClass(id, c) { const el = document.getElementById(id); if (el) el.classList.remove(c); }

function pg_hideHeaderImages(group) {
    const map = {
        "001001": ["productImgID_pistolGrip00100101", "productImgID_pistolGrip00100102", "productImgID_pistolGrip00100103"],
        "002001": [
            "productImgID_pistolGrip00200101","productImgID_pistolGrip00200102","productImgID_pistolGrip00200103",
            "productImgID_pistolGrip00200104","productImgID_pistolGrip00200105","productImgID_pistolGrip00200106","productImgID_pistolGrip00200107"
        ],
    };
    const list = map[group] || [];
    list.forEach(function (id) { const el = document.getElementById(id); if (el) el.style.display = "none"; });
}

function pg_showHeaderDefault(group) {
    const def = group === "001001" ? "productImgID_pistolGrip00100101" : "productImgID_pistolGrip00200101";
    const el = document.getElementById(def); if (el) el.style.display = "flex";
}

function pg_hideLowerImages() {
    const ids = [
        "partImgID_pistolGrip00100101","partImgID_pistolGrip00100102","partImgID_pistolGrip00100103",
        "partImgID_pistolGrip00200101","partImgID_pistolGrip00200102","partImgID_pistolGrip00200103",
        "partImgID_pistolGrip00200104","partImgID_pistolGrip00200105","partImgID_pistolGrip00200106","partImgID_pistolGrip00200107",
    ];
    ids.forEach(function (id) { const el = document.getElementById(id); if (el) el.style.display = "none"; });
}

function pg_clearVariantButtons(group) {
    const map = { "001001": ["01","02","03"], "002001": ["01","02","03","04","05","06","07"] };
    (map[group] || []).forEach(function (v) {
        const btn = document.getElementById("buttonItems_pistolGrip" + group + v);
        if (btn) btn.classList.remove("active");
    });
}

export function uiReset_pistolGrip001001() {
    const product = window.part.pistolGrip["001"].products["001"]; // 3 variants
    Object.keys(product.variants).forEach(function (k) { product.variants[k].quantity = 0; });
    pg_setText("productName_pistolGrip001001", product.productTitle);
    pg_setText("productPricing_pistolGrip001001", product.variants["01"].price + " USD");
    pg_removeClass("productHeader_pistolGrip001001", "active");
    pg_removeClass("productButtonIcon_pistolGrip001001", "active");
    pg_hideHeaderImages("001001");
    pg_clearVariantButtons("001001");
}

export function uiReset_pistolGrip002001() {
    const product = window.part.pistolGrip["002"].products["001"]; // 7 variants
    Object.keys(product.variants).forEach(function (k) { product.variants[k].quantity = 0; });
    pg_setText("productName_pistolGrip002001", product.productTitle);
    pg_setText("productPricing_pistolGrip002001", product.variants["01"].price + " USD");
    pg_removeClass("productHeader_pistolGrip002001", "active");
    pg_removeClass("productButtonIcon_pistolGrip002001", "active");
    pg_hideHeaderImages("002001");
    pg_clearVariantButtons("002001");
}

export function uiData_PistolGrip() {
    let selected = null; let headerSuffix = null; let productTitle = "";

    { const prod = window.part.pistolGrip["001"].products["001"]; const v = prod.variants; for (const k of ["01","02","03"]) { if (v[k] && v[k].quantity === 1) { selected = v[k]; headerSuffix = "001001"; productTitle = prod.productTitle; } } }
    { const prod = window.part.pistolGrip["002"].products["001"]; const v = prod.variants; for (const k of ["01","02","03","04","05","06","07"]) { if (v[k] && v[k].quantity === 1) { selected = v[k]; headerSuffix = "002001"; productTitle = prod.productTitle; } } }

    if (!selected || !headerSuffix) return;

    pg_setText("productPricing_pistolGrip" + headerSuffix, selected.price + " USD");
    pg_addClass("productHeader_pistolGrip" + headerSuffix, "active");
    pg_addClass("productButtonIcon_pistolGrip" + headerSuffix, "active");

    // Header image switch for selected group
    pg_hideHeaderImages(headerSuffix);
    const hImg = document.getElementById("productImgID_" + selected.id);
    if (hImg) hImg.style.display = "flex";
    // Ensure other group's default (01)
    const other = headerSuffix === "001001" ? "002001" : "001001"; pg_hideHeaderImages(other); pg_showHeaderDefault(other);

    // Lower menu image and texts
    pg_hideLowerImages();
    const lImg = document.getElementById("partImgID_" + selected.id); if (lImg) lImg.style.display = "flex";
    const variantSuffix = (selected.variantTitle && selected.variantTitle.toLowerCase() !== "no variant") ? (" - " + selected.variantTitle) : "";
    pg_setText("partName_PistolGrip", productTitle + variantSuffix);
    pg_setText("partPrice_PistolGrip", selected.price + " USD");

    // Variant buttons
    pg_clearVariantButtons(headerSuffix);
    const btn = document.getElementById("buttonItems_pistolGrip" + headerSuffix + selected.id.slice(-2));
    if (btn) btn.classList.add("active");
}

// Start default: pistolGrip002001 01
{
    const btn = document.getElementById("buttonModalStartMenu_StartButton");
    if (btn) {
        btn.addEventListener("click", function () {
            uiReset_pistolGrip001001(); uiReset_pistolGrip002001();
            // Set default pistol grip to 00200101
            try { window.part.pistolGrip["002"].products["001"].variants["01"].quantity = 1; } catch(_) {}
            uiData_PistolGrip();
            // Ensure Trigger Guard default is shown with 00100101
            try {
                if (window.part && window.part.triggerGuard) {
                    const tg001 = window.part.triggerGuard["001"].products["001"].variants; Object.keys(tg001).forEach(function(k){ tg001[k].quantity = 0; });
                    const tg002 = window.part.triggerGuard["002"].products["001"].variants; Object.keys(tg002).forEach(function(k){ tg002[k].quantity = 0; });
                    window.part.triggerGuard["001"].products["001"].variants["01"].quantity = 1;
                }
                if (typeof window.uiReset_triggerGuard001001 === "function") window.uiReset_triggerGuard001001();
                if (typeof window.uiReset_triggerGuard002001 === "function") window.uiReset_triggerGuard002001();
                if (typeof window.uiData_TriggerGuard === "function") window.uiData_TriggerGuard();
                const wrap = document.getElementById("lowerPart_TriggerGuard"); if (wrap) wrap.style.display = "flex";
            } catch (e) { console.warn("TriggerGuard default on start failed", e); }
        });
    }
}

// Variant listeners
{
    ["01","02","03"].forEach(function (v) {
        const b = document.getElementById("buttonItems_pistolGrip001001" + v);
        if (b) b.addEventListener("click", function () {
            uiReset_pistolGrip001001(); uiReset_pistolGrip002001();
            window.part.pistolGrip["001"].products["001"].variants[v].quantity = 1;
            uiData_PistolGrip();
            // Hide Trigger Guard for pistolGrip001001** (no trigger guard needed)
            try {
                // Reset all Trigger Guard quantities to 0
                if (window.part && window.part.triggerGuard) {
                    const tg001 = window.part.triggerGuard["001"].products["001"].variants; Object.keys(tg001).forEach(function(k){ tg001[k].quantity = 0; });
                    const tg002 = window.part.triggerGuard["002"].products["001"].variants; Object.keys(tg002).forEach(function(k){ tg002[k].quantity = 0; });
                }
                if (typeof window.uiReset_triggerGuard001001 === "function") window.uiReset_triggerGuard001001();
                if (typeof window.uiReset_triggerGuard002001 === "function") window.uiReset_triggerGuard002001();
                if (typeof window.uiData_TriggerGuard === "function") window.uiData_TriggerGuard();
                const wrap = document.getElementById("lowerPart_TriggerGuard"); if (wrap) wrap.style.display = "none";
            } catch (e) { console.warn("TriggerGuard show flow failed", e); }
        });
    });
    ["01","02","03","04","05","06","07"].forEach(function (v) {
        const b = document.getElementById("buttonItems_pistolGrip002001" + v);
        if (b) b.addEventListener("click", function () {
            uiReset_pistolGrip001001(); uiReset_pistolGrip002001();
            window.part.pistolGrip["002"].products["001"].variants[v].quantity = 1;
            uiData_PistolGrip();
            // Show Trigger Guard for pistolGrip002001** (requires trigger guard default)
            try {
                // Reset all Trigger Guard quantities to 0
                if (window.part && window.part.triggerGuard) {
                    const tg001 = window.part.triggerGuard["001"].products["001"].variants; Object.keys(tg001).forEach(function(k){ tg001[k].quantity = 0; });
                    const tg002 = window.part.triggerGuard["002"].products["001"].variants; Object.keys(tg002).forEach(function(k){ tg002[k].quantity = 0; });
                }
                // Set default trigger guard selection: triggerGuard00100101 = 1
                try { window.part.triggerGuard["001"].products["001"].variants["01"].quantity = 1; } catch(_) {}
                if (typeof window.uiReset_triggerGuard001001 === "function") window.uiReset_triggerGuard001001();
                if (typeof window.uiReset_triggerGuard002001 === "function") window.uiReset_triggerGuard002001();
                if (typeof window.uiData_TriggerGuard === "function") window.uiData_TriggerGuard();
                const wrap = document.getElementById("lowerPart_TriggerGuard"); if (wrap) wrap.style.display = "flex";
            } catch (e) { console.warn("TriggerGuard hide flow failed", e); }
        });
    });
}

export function getSelectedPistolGrip() {
    const a = window.part.pistolGrip["001"].products["001"].variants; for (const k of ["01","02","03"]) { if (a[k] && a[k].quantity === 1) return a[k]; }
    const b = window.part.pistolGrip["002"].products["001"].variants; for (const k of ["01","02","03","04","05","06","07"]) { if (b[k] && b[k].quantity === 1) return b[k]; }
    return null;
}

export function getPistolGripTotalPrice() { const v = getSelectedPistolGrip(); return v ? v.price : 0; }