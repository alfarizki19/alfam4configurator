// Model Controller for Rear Sight (Gear) - with state controls

import { modelState, objectShowHideSystem, applyTexture, getModelIDFromItemsID, getPartNameFromItemsID } from '../modelController_Core/sketchfabAPI.mjs';

// Import summary functions to reuse data collection
function collectVariants_rearSight() {
    const root = window?.part?.rearSight;
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

// Reset Rear Sight Models
export function resetModel_RearSight() {
    const modelIDs = ['rearSight001', 'rearSight002'];
    modelIDs.forEach(modelID => {
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 0;
        }
    });
    objectShowHideSystem();
}

// Update Rear Sight Models
export function updateModel_RearSight() {
    const variants = collectVariants_rearSight();
    resetModel_RearSight();
    
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
                
                console.log(`Rear Sight model shown: ${defaultModelID} with texture: ${v.id}_base`);
            }
        }
    });
    
    objectShowHideSystem();
}

// Handle Rear Sight State Changes
export function handleRearSightStateChange(brand, state) {
    // Check if rear sight is selected
    const variants = collectVariants_rearSight();
    const selectedVariant = variants.find(v => v.quantity > 0);
    
    if (selectedVariant) {
        const modelID = getModelIDFromItemsID(selectedVariant.id);
        if (modelID) {
            // Hide all rear sight states for this brand
            const states = ['A', 'B'];
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
            
            console.log(`Rear Sight ${brand} state changed to: ${state} (${selectedModelID})`);
        }
    }
}

// Handle specific rear sight selection
export function handleRearSightSelection(itemsID) {
    const modelID = getModelIDFromItemsID(itemsID);
    
    if (modelID) {
        resetModel_RearSight();
        
        // Show default state (_A)
        const defaultModelID = modelID + 'A';
        if (modelState.hasOwnProperty(defaultModelID)) {
            modelState[defaultModelID] = 1;
        }
        
        applyTexture(itemsID);
        objectShowHideSystem();
        console.log(`Rear Sight selected: ${itemsID} -> ${defaultModelID} (default state)`);
    }
}

// Get current rear sight state
export function getCurrentRearSightState() {
    const variants = collectVariants_rearSight();
    const selectedVariant = variants.find(v => v.quantity > 0);
    
    if (selectedVariant) {
        const modelID = getModelIDFromItemsID(selectedVariant.id);
        if (modelID) {
            const states = ['A', 'B'];
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

window.resetModel_RearSight = resetModel_RearSight;
window.updateModel_RearSight = updateModel_RearSight;
window.handleRearSightStateChange = handleRearSightStateChange;
window.handleRearSightSelection = handleRearSightSelection;
window.getCurrentRearSightState = getCurrentRearSightState;
