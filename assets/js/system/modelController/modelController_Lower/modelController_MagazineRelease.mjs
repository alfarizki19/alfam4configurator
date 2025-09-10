// Model Controller for Magazine Release (Lower)

import { modelState, objectShowHideSystem, applyTexture, getModelIDFromItemsID, getPartNameFromItemsID } from '../modelController_Core/sketchfabAPI.mjs';

// Import summary functions to reuse data collection
function collectVariants_magazineRelease() {
    const root = window?.part?.magazineRelease;
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

// Reset Magazine Release Models
export function resetModel_MagazineRelease() {
    // Hide all magazine release models
    const modelIDs = ['modelID_magazineRelease001001', 'modelID_magazineRelease002001'];
    modelIDs.forEach(modelID => {
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 0;
        }
    });
    objectShowHideSystem();
}

// Update Magazine Release Models
export function updateModel_MagazineRelease() {
    // Get variants from summary system
    const variants = collectVariants_magazineRelease();
    
    // Reset all magazine release models first
    resetModel_MagazineRelease();
    
    // Show models based on selected variants
    variants.forEach(v => {
        if (v.quantity > 0) {
            const modelID = getModelIDFromItemsID(v.id);
            if (modelID && modelState.hasOwnProperty(modelID)) {
                // Show model
                modelState[modelID] = 1;
                
                // Apply texture
                applyTexture(v.id);
                
                console.log(`Magazine Release model shown: ${modelID} with texture: ${v.id}_base`);
            }
        }
    });
    
    // Update 3D scene
    objectShowHideSystem();
}

// Handle specific magazine release selection
export function handleMagazineReleaseSelection(itemsID) {
    // Extract model info
    const modelID = getModelIDFromItemsID(itemsID);
    
    if (modelID) {
        // Reset all magazine release models
        resetModel_MagazineRelease();
        
        // Show selected model
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 1;
        }
        
        // Apply texture
        applyTexture(itemsID);
        
        // Update 3D scene
        objectShowHideSystem();
        
        console.log(`Magazine Release selected: ${itemsID} -> ${modelID}`);
    }
}

// Export for global access
// Start Button Integration
const startButton = document.getElementById("buttonModalStartMenu_StartButton");
if (startButton) {
    startButton.addEventListener("click", function () {
        console.log("Start button clicked - Magazine Release");
        // Wait for dataController to finish, then update model
        setTimeout(() => {
            updateModel_MagazineRelease();
        }, 100);
    });
}

window.resetModel_MagazineRelease = resetModel_MagazineRelease;
window.updateModel_MagazineRelease = updateModel_MagazineRelease;
window.handleMagazineReleaseSelection = handleMagazineReleaseSelection;