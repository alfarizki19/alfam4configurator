// Model Controller for End Plate (Lower)

import { modelState, objectShowHideSystem, applyTexture, getModelIDFromItemsID, getPartNameFromItemsID } from '../modelController_Core/sketchfabAPI.mjs';

// Import summary functions to reuse data collection
function collectVariants_endPlate() {
    const root = window?.part?.endPlate;
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

// Reset End Plate Models
export function resetModel_EndPlate() {
    const modelIDs = ['endPlate001', 'endPlate002'];
    modelIDs.forEach(modelID => {
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 0;
        }
    });
    objectShowHideSystem();
}

// Update End Plate Models
export function updateModel_EndPlate() {
    const variants = collectVariants_endPlate();
    resetModel_EndPlate();
    
    variants.forEach(v => {
        if (v.quantity > 0) {
            const modelID = getModelIDFromItemsID(v.id);
            if (modelID && modelState.hasOwnProperty(modelID)) {
                modelState[modelID] = 1;
                applyTexture(v.id);
                console.log(`End Plate model shown: ${modelID} with texture: ${v.id}_base`);
            }
        }
    });
    
    objectShowHideSystem();
}

// Handle specific end plate selection
export function handleEndPlateSelection(itemsID) {
    const modelID = getModelIDFromItemsID(itemsID);
    
    if (modelID) {
        resetModel_EndPlate();
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 1;
        }
        applyTexture(itemsID);
        objectShowHideSystem();
        console.log(`End Plate selected: ${itemsID} -> ${modelID}`);
    }
}

window.resetModel_EndPlate = resetModel_EndPlate;
window.updateModel_EndPlate = updateModel_EndPlate;
window.handleEndPlateSelection = handleEndPlateSelection;


