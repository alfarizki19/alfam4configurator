// Model Controller for Buffer and Spring Kit (Lower)

import { modelState, objectShowHideSystem, applyTexture, getModelIDFromItemsID, getPartNameFromItemsID } from '../modelController_Core/sketchfabAPI.mjs';

// Import summary functions to reuse data collection
function collectVariants_bufferAndSpringKit() {
    const root = window?.part?.bufferAndSpringKit;
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

// Reset Buffer and Spring Kit Models
export function resetModel_BufferAndSpringKit() {
    const modelIDs = ['bufferAndSpringKit001'];
    modelIDs.forEach(modelID => {
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 0;
        }
    });
    objectShowHideSystem();
}

// Update Buffer and Spring Kit Models
export function updateModel_BufferAndSpringKit() {
    const variants = collectVariants_bufferAndSpringKit();
    resetModel_BufferAndSpringKit();
    
    variants.forEach(v => {
        if (v.quantity > 0) {
            const modelID = getModelIDFromItemsID(v.id);
            if (modelID && modelState.hasOwnProperty(modelID)) {
                modelState[modelID] = 1;
                applyTexture(v.id);
                console.log(`Buffer and Spring Kit model shown: ${modelID} with texture: ${v.id}_base`);
            }
        }
    });
    
    objectShowHideSystem();
}

// Handle specific buffer and spring kit selection
export function handleBufferAndSpringKitSelection(itemsID) {
    const modelID = getModelIDFromItemsID(itemsID);
    
    if (modelID) {
        resetModel_BufferAndSpringKit();
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 1;
        }
        applyTexture(itemsID);
        objectShowHideSystem();
        console.log(`Buffer and Spring Kit selected: ${itemsID} -> ${modelID}`);
    }
}

window.resetModel_BufferAndSpringKit = resetModel_BufferAndSpringKit;
window.updateModel_BufferAndSpringKit = updateModel_BufferAndSpringKit;
window.handleBufferAndSpringKitSelection = handleBufferAndSpringKitSelection;