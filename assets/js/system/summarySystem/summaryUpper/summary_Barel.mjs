// Summary visibility controller for Barel (Barrel)

function getQuantityById_Barel(variantId) {
    const root = window?.part?.barrel;
    if (!root) return 0;
    for (const brandKey in root) {
        const brandNode = root[brandKey];
        const products = brandNode?.products || {};
        for (const productKey in products) {
            const variants = products[productKey]?.variants || {};
            for (const vKey in variants) {
                const v = variants[vKey];
                if (v?.id === variantId) return Number(v.quantity) || 0;
            }
        }
    }
    return 0;
}

export function resetSummary_Barel() {
    const ids = ["barel00200101"]; // extend if more variants exist
    ids.forEach(id => {
        const el = document.getElementById(`summaryItems_${id}`);
        if (el) el.style.display = "none";
    });
}

function getTitleAndPriceById_Barel(variantId) {
    const root = window?.part?.barrel;
    if (!root) return { title: "", price: undefined };
    for (const brandKey in root) {
        const brandNode = root[brandKey];
        const products = brandNode?.products || {};
        for (const productKey in products) {
            const productNode = products[productKey];
            const productTitle = productNode?.productTitle || "";
            const variants = productNode?.variants || {};
            for (const vKey in variants) {
                const v = variants[vKey];
                if (v?.id === variantId) {
                    return { title: productTitle, price: Number(v.price) };
                }
            }
        }
    }
    return { title: "", price: undefined };
}

function formatUsd(amount) {
    const n = Number(amount);
    if (!isFinite(n)) return "";
    return `${n.toFixed(2)} USD`;
}

function composeName(productTitle, variantTitle) {
    const vt = (variantTitle || "").trim();
    if (!vt || vt.toLowerCase() === "no variant") return productTitle || "";
    return `${productTitle || ""} - ${vt}`;
}

export function updateSummary_Barel() {
    const ids = ["barel00200101"]; // extend if more variants exist
    ids.forEach(id => {
        const qty = getQuantityById_Barel(id);
        if (qty > 0) {
            const el = document.getElementById(`summaryItems_${id}`);
            if (el) el.style.display = "";

            const meta = getTitleAndPriceById_Barel(id);
            const nameEl = document.getElementById(`summaryItemsName_${id}`);
            const priceEl = document.getElementById(`summaryItemsPricing_${id}`);
            if (nameEl && meta.title) nameEl.textContent = composeName(meta.title, meta.variantTitle);
            if (priceEl && meta.price !== undefined) priceEl.textContent = formatUsd(meta.price);
        }
    });
}

window.resetSummary_Barel = resetSummary_Barel;
window.updateSummary_Barel = updateSummary_Barel;
