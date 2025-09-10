// Model Controller for Front Sight (Gear) - with state controls

import { modelState, objectShowHideSystem, applyTexture, getModelIDFromItemsID, getPartNameFromItemsID } from '../modelController_Core/sketchfabAPI.mjs';

// Import summary functions to reuse data collection
function collectVariants_frontSight() {
    const root = window?.part?.frontSight;
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

// Reset Front Sight Models
export function resetModel_FrontSight() {
    const modelIDs = ['frontSight001', 'frontSight002'];
    modelIDs.forEach(modelID => {
        if (modelState.hasOwnProperty(modelID)) {
            modelState[modelID] = 0;
        }
    });
    objectShowHideSystem();
}

// Update Front Sight Models
export function updateModel_FrontSight() {
    const variants = collectVariants_frontSight();
    resetModel_FrontSight();
    
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
                
                console.log(`Front Sight model shown: ${defaultModelID} with texture: ${v.id}_base`);
            }
        }
    });
    
    objectShowHideSystem();
}

// Handle Front Sight State Changes
export function handleFrontSightStateChange(brand, state) {
    // Check if front sight is selected
    const variants = collectVariants_frontSight();
    const selectedVariant = variants.find(v => v.quantity > 0);
    
    if (selectedVariant) {
        const modelID = getModelIDFromItemsID(selectedVariant.id);
        if (modelID) {
            // Hide all front sight states for this brand
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
            
            console.log(`Front Sight ${brand} state changed to: ${state} (${selectedModelID})`);
        }
    }
}

// Handle specific front sight selection
export function handleFrontSightSelection(itemsID) {
    const modelID = getModelIDFromItemsID(itemsID);
    
    if (modelID) {
        resetModel_FrontSight();
        
        // Show default state (_A)
        const defaultModelID = modelID + 'A';
        if (modelState.hasOwnProperty(defaultModelID)) {
            modelState[defaultModelID] = 1;
        }
        
        applyTexture(itemsID);
        objectShowHideSystem();
        console.log(`Front Sight selected: ${itemsID} -> ${defaultModelID} (default state)`);
    }
}

// Get current front sight state
export function getCurrentFrontSightState() {
    const variants = collectVariants_frontSight();
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

window.resetModel_FrontSight = resetModel_FrontSight;
window.updateModel_FrontSight = updateModel_FrontSight;
window.handleFrontSightStateChange = handleFrontSightStateChange;
window.handleFrontSightSelection = handleFrontSightSelection;
window.getCurrentFrontSightState = getCurrentFrontSightState;