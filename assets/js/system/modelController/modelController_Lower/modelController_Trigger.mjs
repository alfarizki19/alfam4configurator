// Model Controller for Trigger (Lower)

import { modelState, objectShowHideSystem, applyTexture, getModelIDFromItemsID, getPartNameFromItemsID } from '../modelController_Core/sketchfabAPI.mjs';

// Import summary functions to reuse data collection
function collectVariants_trigger() {
    const root = window?.part?.trigger;
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

// Reset Trigger Models
export function resetModel_Trigger() {
    const modelIDs = ['trigger001', 'trigger002'];
    modelIDs.forEach(modelID => {
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 0;
        }
    });
    objectShowHideSystem();
}

// Update Trigger Models
export function updateModel_Trigger() {
    const variants = collectVariants_trigger();
    resetModel_Trigger();
    
    variants.forEach(v => {
        if (v.quantity > 0) {
            const modelID = getModelIDFromItemsID(v.id);
            if (modelID && modelState.hasOwnProperty(modelID)) {
                modelState[modelID] = 1;
                applyTexture(v.id);
                console.log(`Trigger model shown: ${modelID} with texture: ${v.id}_base`);
            }
        }
    });
    
    objectShowHideSystem();
}

// Handle specific trigger selection
export function handleTriggerSelection(itemsID) {
    const modelID = getModelIDFromItemsID(itemsID);
    
    if (modelID) {
        resetModel_Trigger();
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 1;
        }
        applyTexture(itemsID);
        objectShowHideSystem();
        console.log(`Trigger selected: ${itemsID} -> ${modelID}`);
    }
}

window.resetModel_Trigger = resetModel_Trigger;
window.updateModel_Trigger = updateModel_Trigger;
window.handleTriggerSelection = handleTriggerSelection;