// Model Controller for Bipod (Gear) - with state controls

import { modelState, objectShowHideSystem, applyTexture, getModelIDFromItemsID, getPartNameFromItemsID } from '../modelController_Core/sketchfabAPI.mjs';

// Import summary functions to reuse data collection
function collectVariants_bipod() {
    const root = window?.part?.bipod;
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

// Reset Bipod Models
export function resetModel_Bipod() {
    // Hide all bipod models
    const modelIDs = ['bipod001'];
    modelIDs.forEach(modelID => {
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 0;
        }
    });
    objectShowHideSystem();
}

// Update Bipod Models
export function updateModel_Bipod() {
    // Get variants from summary system
    const variants = collectVariants_bipod();
    
    // Reset all bipod models first
    resetModel_Bipod();
    
    // Show models based on selected variants
    variants.forEach(v => {
        if (v.quantity > 0) {
            const modelID = getModelIDFromItemsID(v.id);
            if (modelID && modelState.hasOwnProperty(modelID)) {
                // Show default state (_A)
                const defaultModelID = modelID + 'A';
                if (modelState.hasOwnProperty(defaultModelID)) {
                    modelState[defaultModelID] = 1;
                }
                
                // Apply texture
                applyTexture(v.id);
                
                console.log(`Bipod model shown: ${defaultModelID} with texture: ${v.id}_base`);
            }
        }
    });
    
    // Update 3D scene
    objectShowHideSystem();
}

// Handle Bipod State Changes
export function handleBipodStateChange(state) {
    // Check if bipod is selected
    const variants = collectVariants_bipod();
    const selectedVariant = variants.find(v => v.quantity > 0);
    
    if (selectedVariant) {
        const modelID = getModelIDFromItemsID(selectedVariant.id);
        if (modelID) {
            // Hide all bipod states
            const states = ['A', 'B', 'C', 'D'];
            states.forEach(s => {
                const stateModelID = modelID + s;
                if (modelState.hasOwnProperty(stateModelID)) {
                    modelState[stateModelID] = 0;
                }
            });
            
            // Show selected state
            const selectedModelID = modelID + state;
            if (modelState.hasOwnProperty(selectedModelID)) {
                modelState[selectedModelID] = 1;
            }
            
            // Update 3D scene
            objectShowHideSystem();
            
            console.log(`Bipod state changed to: ${state} (${selectedModelID})`);
        }
    }
}

// Handle specific bipod selection
export function handleBipodSelection(itemsID) {
    // Extract model info
    const modelID = getModelIDFromItemsID(itemsID);
    
    if (modelID) {
        // Reset all bipod models
        resetModel_Bipod();
        
        // Show default state (_A)
        const defaultModelID = modelID + 'A';
        if (modelState.hasOwnProperty(defaultModelID)) {
            modelState[defaultModelID] = 1;
        }
        
        // Apply texture
        applyTexture(itemsID);
        
        // Update 3D scene
        objectShowHideSystem();
        
        console.log(`Bipod selected: ${itemsID} -> ${defaultModelID} (default state)`);
    }
}

// Get current bipod state
export function getCurrentBipodState() {
    const variants = collectVariants_bipod();
    const selectedVariant = variants.find(v => v.quantity > 0);
    
    if (selectedVariant) {
        const modelID = getModelIDFromItemsID(selectedVariant.id);
        if (modelID) {
            const states = ['A', 'B', 'C', 'D'];
            for (const state of states) {
                const stateModelID = modelID + state;
                if (modelState.hasOwnProperty(stateModelID) && modelState[stateModelID] === 1) {
                    return state;
                }
            }
        }
    }
    return 'A'; // Default state
}

// Export for global access
// Start Button Integration
const startButton = document.getElementById("buttonModalStartMenu_StartButton");
if (startButton) {
    startButton.addEventListener("click", function () {
        console.log("Start button clicked - Bipod");
        // Wait for dataController to finish, then update model
        setTimeout(() => {
            updateModel_Bipod();
        }, 100);
    });
}

window.resetModel_Bipod = resetModel_Bipod;
window.updateModel_Bipod = updateModel_Bipod;
window.handleBipodStateChange = handleBipodStateChange;
window.handleBipodSelection = handleBipodSelection;
window.getCurrentBipodState = getCurrentBipodState;