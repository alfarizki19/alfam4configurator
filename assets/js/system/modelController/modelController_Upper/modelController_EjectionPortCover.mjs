// Model Controller for Ejection Port Cover (Upper)

import { modelState, objectShowHideSystem, applyTexture, getModelIDFromItemsID, getPartNameFromItemsID } from '../modelController_Core/sketchfabAPI.mjs';

// Import summary functions to reuse data collection
function collectVariants_ejectionPortCover() {
    const root = window?.part?.ejectionPortCover;
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

// Reset Ejection Port Cover Models
export function resetModel_EjectionPortCover() {
    const modelIDs = ['ejectionPortCover001'];
    modelIDs.forEach(modelID => {
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 0;
        }
    });
    objectShowHideSystem();
}

// Update Ejection Port Cover Models
export function updateModel_EjectionPortCover() {
    const variants = collectVariants_ejectionPortCover();
    resetModel_EjectionPortCover();
    
    variants.forEach(v => {
        if (v.quantity > 0) {
            const modelID = getModelIDFromItemsID(v.id);
            if (modelID && modelState.hasOwnProperty(modelID)) {
                modelState[modelID] = 1;
                applyTexture(v.id);
                console.log(`Ejection Port Cover model shown: ${modelID} with texture: ${v.id}_base`);
            }
        }
    });
    
    objectShowHideSystem();
}

// Handle specific ejection port cover selection
export function handleEjectionPortCoverSelection(itemsID) {
    const modelID = getModelIDFromItemsID(itemsID);
    
    if (modelID) {
        resetModel_EjectionPortCover();
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 1;
        }
        applyTexture(itemsID);
        objectShowHideSystem();
        console.log(`Ejection Port Cover selected: ${itemsID} -> ${modelID}`);
    }
}

window.resetModel_EjectionPortCover = resetModel_EjectionPortCover;
window.updateModel_EjectionPortCover = updateModel_EjectionPortCover;
window.handleEjectionPortCoverSelection = handleEjectionPortCoverSelection;
