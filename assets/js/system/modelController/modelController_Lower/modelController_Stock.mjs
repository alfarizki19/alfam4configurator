// Model Controller for Stock (Lower)

import { modelState, objectShowHideSystem, applyTexture, getModelIDFromItemsID, getPartNameFromItemsID } from '../modelController_Core/sketchfabAPI.mjs';

// Import summary functions to reuse data collection
function collectVariants_stock() {
    const root = window?.part?.stock;
    const items = [];
    if (!root) return items;
    for (const brandKey in root) {
        const brandNode = root[brandKey];
        const products = brandNode?.products || {};
        for (const productKey in products) {
            const productNode = products[productKey];
            const productTitle = productNode?.productTitle || "";
            const variants = productNode?.variants || {};
            for (const vKey in variants) {
                const v = variants[vKey];
                if (!v?.id) continue;
                items.push({ id: v.id, quantity: Number(v.quantity) || 0, title: productTitle, price: Number(v.price) });
            }
        }
    }
    return items;
}

// Reset Stock Models
export function resetModel_Stock() {
    const modelIDs = ['stock001', 'stock002'];
    modelIDs.forEach(modelID => {
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 0;
        }
    });
    objectShowHideSystem();
}

// Update Stock Models
export function updateModel_Stock() {
    const variants = collectVariants_stock();
    resetModel_Stock();
    
    variants.forEach(v => {
        if (v.quantity > 0) {
            const modelID = getModelIDFromItemsID(v.id);
            if (modelID && modelState.hasOwnProperty(modelID)) {
                modelState[modelID] = 1;
                applyTexture(v.id);
                console.log(`Stock model shown: ${modelID} with texture: ${v.id}_base`);
            }
        }
    });
    
    objectShowHideSystem();
}

// Handle specific stock selection
export function handleStockSelection(itemsID) {
    const modelID = getModelIDFromItemsID(itemsID);
    
    if (modelID) {
        resetModel_Stock();
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 1;
        }
        applyTexture(itemsID);
        objectShowHideSystem();
        console.log(`Stock selected: ${itemsID} -> ${modelID}`);
    }
}

window.resetModel_Stock = resetModel_Stock;
window.updateModel_Stock = updateModel_Stock;
window.handleStockSelection = handleStockSelection;