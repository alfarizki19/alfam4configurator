// Model Controller for Handguard Rail System (Upper)

import { modelState, objectShowHideSystem, applyTexture, getModelIDFromItemsID, getPartNameFromItemsID } from '../modelController_Core/sketchfabAPI.mjs';

// Import summary functions to reuse data collection
function collectVariants_handguardRailSystem() {
    const root = window?.part?.handguardRailSystem;
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

// Reset Handguard Rail System Models
export function resetModel_HandguardRailSystem() {
    const modelIDs = ['handguardRailSystem001', 'handguardRailSystem002'];
    modelIDs.forEach(modelID => {
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 0;
        }
    });
    objectShowHideSystem();
}

// Update Handguard Rail System Models
export function updateModel_HandguardRailSystem() {
    const variants = collectVariants_handguardRailSystem();
    resetModel_HandguardRailSystem();
    
    variants.forEach(v => {
        if (v.quantity > 0) {
            const modelID = getModelIDFromItemsID(v.id);
            if (modelID && modelState.hasOwnProperty(modelID)) {
                modelState[modelID] = 1;
                applyTexture(v.id);
                console.log(`Handguard Rail System model shown: ${modelID} with texture: ${v.id}_base`);
            }
        }
    });
    
    objectShowHideSystem();
}

// Handle specific handguard rail system selection
export function handleHandguardRailSystemSelection(itemsID) {
    const modelID = getModelIDFromItemsID(itemsID);
    
    if (modelID) {
        resetModel_HandguardRailSystem();
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 1;
        }
        applyTexture(itemsID);
        objectShowHideSystem();
        console.log(`Handguard Rail System selected: ${itemsID} -> ${modelID}`);
    }
}

window.resetModel_HandguardRailSystem = resetModel_HandguardRailSystem;
window.updateModel_HandguardRailSystem = updateModel_HandguardRailSystem;
window.handleHandguardRailSystemSelection = handleHandguardRailSystemSelection;