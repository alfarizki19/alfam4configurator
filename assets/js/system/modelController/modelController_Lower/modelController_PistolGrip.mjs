// Model Controller for Pistol Grip (Lower)

import { modelState, objectShowHideSystem, applyTexture, getModelIDFromItemsID, getPartNameFromItemsID } from '../modelController_Core/sketchfabAPI.mjs';

// Import summary functions to reuse data collection
function collectVariants_pistolGrip() {
    const root = window?.part?.pistolGrip;
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

// Reset Pistol Grip Models
export function resetModel_PistolGrip() {
    const modelIDs = ['pistolGrip001', 'pistolGrip002'];
    modelIDs.forEach(modelID => {
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 0;
        }
    });
    objectShowHideSystem();
}

// Update Pistol Grip Models
export function updateModel_PistolGrip() {
    const variants = collectVariants_pistolGrip();
    resetModel_PistolGrip();
    
    variants.forEach(v => {
        if (v.quantity > 0) {
            const modelID = getModelIDFromItemsID(v.id);
            if (modelID && modelState.hasOwnProperty(modelID)) {
                modelState[modelID] = 1;
                applyTexture(v.id);
                console.log(`Pistol Grip model shown: ${modelID} with texture: ${v.id}_base`);
            }
        }
    });
    
    objectShowHideSystem();
}

// Handle specific pistol grip selection
export function handlePistolGripSelection(itemsID) {
    const modelID = getModelIDFromItemsID(itemsID);
    
    if (modelID) {
        resetModel_PistolGrip();
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 1;
        }
        applyTexture(itemsID);
        objectShowHideSystem();
        console.log(`Pistol Grip selected: ${itemsID} -> ${modelID}`);
    }
}

window.resetModel_PistolGrip = resetModel_PistolGrip;
window.updateModel_PistolGrip = updateModel_PistolGrip;
window.handlePistolGripSelection = handlePistolGripSelection;


