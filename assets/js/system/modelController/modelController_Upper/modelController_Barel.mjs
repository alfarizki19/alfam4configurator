// Model Controller for Barrel (Upper)

import { modelState, objectShowHideSystem, applyTexture, getModelIDFromItemsID, getPartNameFromItemsID } from '../modelController_Core/sketchfabAPI.mjs';

// Import summary functions to reuse data collection
function collectVariants_barel() {
    const root = window?.part?.barel;
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

// Reset Barrel Models
export function resetModel_Barel() {
    const modelIDs = ['modelID_barel00200101'];
    modelIDs.forEach(modelID => {
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 0;
        }
    });
    objectShowHideSystem();
}

// Update Barrel Models
export function updateModel_Barel() {
    const variants = collectVariants_barel();
    resetModel_Barel();
    
    variants.forEach(v => {
        if (v.quantity > 0) {
            const modelID = getModelIDFromItemsID(v.id);
            if (modelID && modelState.hasOwnProperty(modelID)) {
                modelState[modelID] = 1;
                applyTexture(v.id);
                console.log(`Barrel model shown: ${modelID} with texture: ${v.id}_base`);
            }
        }
    });
    
    objectShowHideSystem();
}

// Handle specific barrel selection
export function handleBarelSelection(itemsID) {
    const modelID = getModelIDFromItemsID(itemsID);
    
    if (modelID) {
        resetModel_Barel();
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 1;
        }
        applyTexture(itemsID);
        objectShowHideSystem();
        console.log(`Barrel selected: ${itemsID} -> ${modelID}`);
    }
}

// Start Button Integration
const startButton = document.getElementById("buttonModalStartMenu_StartButton");
if (startButton) {
    startButton.addEventListener("click", function () {
        console.log("Start button clicked - Barrel");
        // Wait for dataController to finish, then update model
        setTimeout(() => {
            updateModel_Barel();
        }, 100);
    });
}

window.resetModel_Barel = resetModel_Barel;
window.updateModel_Barel = updateModel_Barel;
window.handleBarelSelection = handleBarelSelection;