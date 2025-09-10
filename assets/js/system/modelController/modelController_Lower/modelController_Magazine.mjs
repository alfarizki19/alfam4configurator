// Model Controller for Magazine (Lower)

import { modelState, objectShowHideSystem, applyTexture, getModelIDFromItemsID, getPartNameFromItemsID } from '../modelController_Core/sketchfabAPI.mjs';

// Import summary functions to reuse data collection
function collectVariants_magazine() {
    const root = window?.part?.magazine;
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

// Reset Magazine Models
export function resetModel_Magazine() {
    const modelIDs = ['magazine001', 'magazine002'];
    modelIDs.forEach(modelID => {
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 0;
        }
    });
    objectShowHideSystem();
}

// Update Magazine Models
export function updateModel_Magazine() {
    const variants = collectVariants_magazine();
    resetModel_Magazine();
    
    variants.forEach(v => {
        if (v.quantity > 0) {
            const modelID = getModelIDFromItemsID(v.id);
            if (modelID && modelState.hasOwnProperty(modelID)) {
                modelState[modelID] = 1;
                applyTexture(v.id);
                console.log(`Magazine model shown: ${modelID} with texture: ${v.id}_base`);
            }
        }
    });
    
    objectShowHideSystem();
}

// Handle specific magazine selection
export function handleMagazineSelection(itemsID) {
    const modelID = getModelIDFromItemsID(itemsID);
    
    if (modelID) {
        resetModel_Magazine();
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 1;
        }
        applyTexture(itemsID);
        objectShowHideSystem();
        console.log(`Magazine selected: ${itemsID} -> ${modelID}`);
    }
}

window.resetModel_Magazine = resetModel_Magazine;
window.updateModel_Magazine = updateModel_Magazine;
window.handleMagazineSelection = handleMagazineSelection;


