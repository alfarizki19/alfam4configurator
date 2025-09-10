// Model Controller for MLOK/KeyMod Rails (Gear) - with conditional logic

import { modelState, objectShowHideSystem, applyTexture, getModelIDFromItemsID, getPartNameFromItemsID } from '../modelController_Core/sketchfabAPI.mjs';

// Import summary functions to reuse data collection
function collectVariants_mlokAndKeymodRail() {
    const root = window?.part?.mlokAndKeymodRail;
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

// Check if bipod is selected
function isBipodSelected() {
    const bipodRoot = window?.part?.bipod;
    if (!bipodRoot) return false;
    
    for (const brandKey in bipodRoot) {
        const brandNode = bipodRoot[brandKey];
        const products = brandNode?.products || {};
        for (const productKey in products) {
            const productNode = products[productKey];
            const variants = productNode?.variants || {};
            for (const vKey in variants) {
                const v = variants[vKey];
                if (v?.quantity > 0) return true;
            }
        }
    }
    return false;
}

// Reset MLOK Models
export function resetModel_MLOK() {
    // Hide all MLOK models
    const modelIDs = ['mlokAndKeymodRail001001_A', 'mlokAndKeymodRail001001_B', 'mlokAndKeymodRail002001_A', 'mlokAndKeymodRail002001_B'];
    modelIDs.forEach(modelID => {
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 0;
        }
    });
    objectShowHideSystem();
}

// Update MLOK Models
export function updateModel_MLOK() {
    // Get variants from summary system
    const variants = collectVariants_mlokAndKeymodRail();
    const bipodSelected = isBipodSelected();
    
    // Reset all MLOK models first
    resetModel_MLOK();
    
    // Show models based on selected variants and bipod state
    variants.forEach(v => {
        if (v.quantity > 0) {
            const modelID = getModelIDFromItemsID(v.id);
            if (modelID && modelState.hasOwnProperty(modelID)) {
                // Determine which state to show based on bipod selection
                const stateToShow = bipodSelected ? 'B' : 'A';
                const finalModelID = modelID + stateToShow;
                
                if (modelState.hasOwnProperty(finalModelID)) {
                    modelState[finalModelID] = 1;
                }
                
                // Apply texture
                applyTexture(v.id);
                
                console.log(`MLOK model shown: ${finalModelID} (${bipodSelected ? 'for bipod' : 'standalone'}) with texture: ${v.id}_base`);
            }
        }
    });
    
    // Update 3D scene
    objectShowHideSystem();
}

// Handle specific MLOK selection
export function handleMLOKSelection(itemsID) {
    // Extract model info
    const modelID = getModelIDFromItemsID(itemsID);
    const bipodSelected = isBipodSelected();
    
    if (modelID) {
        // Reset all MLOK models
        resetModel_MLOK();
        
        // Determine which state to show based on bipod selection
        const stateToShow = bipodSelected ? 'B' : 'A';
        const finalModelID = modelID + stateToShow;
        
        if (modelState.hasOwnProperty(finalModelID)) {
            modelState[finalModelID] = 1;
        }
        
        // Apply texture
        applyTexture(itemsID);
        
        // Update 3D scene
        objectShowHideSystem();
        
        console.log(`MLOK selected: ${itemsID} -> ${finalModelID} (${bipodSelected ? 'for bipod' : 'standalone'})`);
    }
}

// Handle bipod state change (affects MLOK display)
export function handleBipodStateChangeForMLOK() {
    // Re-update MLOK models when bipod state changes
    updateModel_MLOK();
}

// Get current MLOK state
export function getCurrentMLOKState() {
    const variants = collectVariants_mlokAndKeymodRail();
    const selectedVariant = variants.find(v => v.quantity > 0);
    const bipodSelected = isBipodSelected();
    
    if (selectedVariant) {
        const modelID = getModelIDFromItemsID(selectedVariant.id);
        if (modelID) {
            const stateToCheck = bipodSelected ? 'B' : 'A';
            const stateModelID = modelID + stateToCheck;
            if (modelState.hasOwnProperty(stateModelID) && modelState[stateModelID] === 1) {
                return stateToCheck;
            }
        }
    }
    return bipodSelected ? 'B' : 'A';
}

// Export for global access
// Start Button Integration
const startButton = document.getElementById("buttonModalStartMenu_StartButton");
if (startButton) {
    startButton.addEventListener("click", function () {
        console.log("Start button clicked - MLOK");
        // Wait for dataController to finish, then update model
        setTimeout(() => {
            updateModel_MLOK();
        }, 100);
    });
}

window.resetModel_MLOK = resetModel_MLOK;
window.updateModel_MLOK = updateModel_MLOK;
window.handleMLOKSelection = handleMLOKSelection;
window.handleBipodStateChangeForMLOK = handleBipodStateChangeForMLOK;
window.getCurrentMLOKState = getCurrentMLOKState;