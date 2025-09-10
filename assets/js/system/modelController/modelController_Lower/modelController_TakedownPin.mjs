// Model Controller for Takedown Pin Set (Lower)

import { modelState, objectShowHideSystem, applyTexture, getModelIDFromItemsID, getPartNameFromItemsID } from '../modelController_Core/sketchfabAPI.mjs';

// Import summary functions to reuse data collection
function collectVariants_takedownPinSet() {
    const root = window?.part?.takedownPinSet;
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

// Reset Takedown Pin Set Models
export function resetModel_TakedownPinSet() {
    const modelIDs = ['takedownPinSet001', 'takedownPinSet002', 'takedownPinSet003'];
    modelIDs.forEach(modelID => {
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 0;
        }
    });
    objectShowHideSystem();
}

// Update Takedown Pin Set Models
export function updateModel_TakedownPinSet() {
    const variants = collectVariants_takedownPinSet();
    resetModel_TakedownPinSet();
    
    variants.forEach(v => {
        if (v.quantity > 0) {
            const modelID = getModelIDFromItemsID(v.id);
            if (modelID && modelState.hasOwnProperty(modelID)) {
                modelState[modelID] = 1;
                applyTexture(v.id);
                console.log(`Takedown Pin Set model shown: ${modelID} with texture: ${v.id}_base`);
            }
        }
    });
    
    objectShowHideSystem();
}

// Handle specific takedown pin set selection
export function handleTakedownPinSetSelection(itemsID) {
    const modelID = getModelIDFromItemsID(itemsID);
    
    if (modelID) {
        resetModel_TakedownPinSet();
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 1;
        }
        applyTexture(itemsID);
        objectShowHideSystem();
        console.log(`Takedown Pin Set selected: ${itemsID} -> ${modelID}`);
    }
}

window.resetModel_TakedownPinSet = resetModel_TakedownPinSet;
window.updateModel_TakedownPinSet = updateModel_TakedownPinSet;
window.handleTakedownPinSetSelection = handleTakedownPinSetSelection;


