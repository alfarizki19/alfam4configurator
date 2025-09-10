// Model Controller for Muzzle Device (Upper)

import { modelState, objectShowHideSystem, applyTexture, getModelIDFromItemsID, getPartNameFromItemsID } from '../modelController_Core/sketchfabAPI.mjs';

// Import summary functions to reuse data collection
function collectVariants_muzzleDevice() {
    const root = window?.part?.muzzleDevice;
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

// Reset Muzzle Device Models
export function resetModel_MuzzleDevice() {
    const modelIDs = ['muzzleDevice001', 'muzzleDevice002'];
    modelIDs.forEach(modelID => {
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 0;
        }
    });
    objectShowHideSystem();
}

// Update Muzzle Device Models
export function updateModel_MuzzleDevice() {
    const variants = collectVariants_muzzleDevice();
    resetModel_MuzzleDevice();
    
    variants.forEach(v => {
        if (v.quantity > 0) {
            const modelID = getModelIDFromItemsID(v.id);
            if (modelID && modelState.hasOwnProperty(modelID)) {
                modelState[modelID] = 1;
                applyTexture(v.id);
                console.log(`Muzzle Device model shown: ${modelID} with texture: ${v.id}_base`);
            }
        }
    });
    
    objectShowHideSystem();
}

// Handle specific muzzle device selection
export function handleMuzzleDeviceSelection(itemsID) {
    const modelID = getModelIDFromItemsID(itemsID);
    
    if (modelID) {
        resetModel_MuzzleDevice();
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 1;
        }
        applyTexture(itemsID);
        objectShowHideSystem();
        console.log(`Muzzle Device selected: ${itemsID} -> ${modelID}`);
    }
}

window.resetModel_MuzzleDevice = resetModel_MuzzleDevice;
window.updateModel_MuzzleDevice = updateModel_MuzzleDevice;
window.handleMuzzleDeviceSelection = handleMuzzleDeviceSelection;
