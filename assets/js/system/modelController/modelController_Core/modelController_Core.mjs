// Model Controller Core - Central controller for all model operations

import { modelState, objectShowHideSystem, applyTexture, getModelIDFromItemsID, getPartNameFromItemsID } from './sketchfabAPI.mjs';

// Setup all model controllers
export function setupModelControllers() {
  // Setup button listeners for state controls
  setupStateButtonListeners();
  
  // Setup summary system integration
  setupSummaryIntegration();
  
  console.log('All model controllers initialized');
}

// Setup button listeners for bipod, front sight, rear sight states
function setupStateButtonListeners() {
  // Bipod state buttons
  setupBipodButtons();
  
  // Front Sight state buttons
  setupFrontSightButtons();
  
  // Rear Sight state buttons
  setupRearSightButtons();
}

// Bipod state buttons (A, B, C, D)
function setupBipodButtons() {
  const bipodButtons = [
    { id: 'modelController_buttonItems_bipod00100101_A', state: 'A' },
    { id: 'modelController_buttonItems_bipod00100101_B', state: 'B' },
    { id: 'modelController_buttonItems_bipod00100101_C', state: 'C' },
    { id: 'modelController_buttonItems_bipod00100101_D', state: 'D' }
  ];
  
  bipodButtons.forEach(button => {
    const element = document.getElementById(button.id);
    if (element) {
      element.addEventListener('click', () => {
        handleBipodStateChange(button.state);
      });
    }
  });
}

// Front Sight state buttons (A, B)
function setupFrontSightButtons() {
  const frontSightButtons = [
    { id: 'modelController_buttonItems_frontSight00100101_A', brand: '001', state: 'A' },
    { id: 'modelController_buttonItems_frontSight00100101_B', brand: '001', state: 'B' },
    { id: 'modelController_buttonItems_frontSight00200101_A', brand: '002', state: 'A' },
    { id: 'modelController_buttonItems_frontSight00200101_B', brand: '002', state: 'B' }
  ];
  
  frontSightButtons.forEach(button => {
    const element = document.getElementById(button.id);
    if (element) {
      element.addEventListener('click', () => {
        handleFrontSightStateChange(button.brand, button.state);
      });
    }
  });
}

// Rear Sight state buttons (A, B)
function setupRearSightButtons() {
  const rearSightButtons = [
    { id: 'modelController_buttonItems_rearSight00100101_A', brand: '001', state: 'A' },
    { id: 'modelController_buttonItems_rearSight00100101_B', brand: '001', state: 'B' },
    { id: 'modelController_buttonItems_rearSight00200101_A', brand: '002', state: 'A' },
    { id: 'modelController_buttonItems_rearSight00200101_B', brand: '002', state: 'B' }
  ];
  
  rearSightButtons.forEach(button => {
    const element = document.getElementById(button.id);
    if (element) {
      element.addEventListener('click', () => {
        handleRearSightStateChange(button.brand, button.state);
      });
    }
  });
}

// Handle bipod state changes
function handleBipodStateChange(state) {
  // Hide all bipod states
  hideModel('bipod001');
  
  // Show selected state
  showModel(`bipod001${state}`);
  
  console.log(`Bipod state changed to: ${state}`);
}

// Handle front sight state changes
function handleFrontSightStateChange(brand, state) {
  // Hide all front sight states for this brand
  hideModel(`frontSight${brand}`);
  
  // Show selected state
  showModel(`frontSight${brand}${state}`);
  
  console.log(`Front Sight ${brand} state changed to: ${state}`);
}

// Handle rear sight state changes
function handleRearSightStateChange(brand, state) {
  // Hide all rear sight states for this brand
  hideModel(`rearSight${brand}`);
  
  // Show selected state
  showModel(`rearSight${brand}${state}`);
  
  console.log(`Rear Sight ${brand} state changed to: ${state}`);
}

// Setup summary system integration
function setupSummaryIntegration() {
  // Override summary functions to include model updates
  const summaryFunctions = {
    chargingHandle: 'updateSummary_ChargingHandle',
    bufferTube: 'updateSummary_BufferTube',
    magazineRelease: 'updateSummary_MagazineRelease',
    boltCatch: 'updateSummary_BoltCatch',
    endPlate: 'updateSummary_EndPlate',
    lowerReceiver: 'updateSummary_LowerReceiver',
    magazine: 'updateSummary_Magazine',
    pistolGrip: 'updateSummary_PistolGrip',
    safety: 'updateSummary_Safety',
    stock: 'updateSummary_Stock',
    takedownPinSet: 'updateSummary_TakedownPinSet',
    trigger: 'updateSummary_Trigger',
    triggerGuard: 'updateSummary_TriggerGuard',
    bufferAndSpringKit: 'updateSummary_BufferAndSpringKit',
    barrel: 'updateSummary_Barel',
    boltCarrierGroup: 'updateSummary_BoltCarrierGroup',
    ejectionPortCover: 'updateSummary_EjectionPortCover',
    forwardAssists: 'updateSummary_ForwardAssists',
    handguardRailSystem: 'updateSummary_Handguard',
    muzzleDevice: 'updateSummary_MuzzleDevice',
    upperReceiver: 'updateSummary_UpperReceiver',
    bipod: 'updateSummary_Bipod',
    frontSight: 'updateSummary_FrontSight',
    laserSight: 'updateSummary_LaserSight',
    mlokAndKeymodRail: 'updateSummary_Mlok',
    opticSight: 'updateSummary_OpticSight',
    rearSight: 'updateSummary_RearSight'
  };
  
  // Hook to existing summary functions
  Object.keys(summaryFunctions).forEach(part => {
    const originalFunctionName = summaryFunctions[part];
    const originalFunction = window[originalFunctionName];
    
    if (originalFunction) {
      window[originalFunctionName] = function() {
        // Call original summary function
        originalFunction();
        
        // Update model
        updateModelForPart(part);
      };
    }
  });
}

// Update model for specific part
function updateModelForPart(partName) {
  // Import and call the specific model controller
  const controllerPath = getControllerPath(partName);
  
  if (controllerPath) {
    import(controllerPath).then(module => {
      const functionName = `updateModel_${partName.charAt(0).toUpperCase() + partName.slice(1)}`;
      if (module[functionName]) {
        module[functionName]();
      }
    }).catch(err => {
      console.warn(`Model controller not found for ${partName}:`, err);
    });
  }
}

// Get controller path for part
function getControllerPath(partName) {
  const controllerMap = {
    // Lower
    chargingHandle: './modelController_Lower/modelController_ChargingHandle.mjs',
    bufferTube: './modelController_Lower/modelController_BufferTube.mjs',
    magazineRelease: './modelController_Lower/modelController_MagazineRelease.mjs',
    boltCatch: './modelController_Lower/modelController_BoltCatch.mjs',
    endPlate: './modelController_Lower/modelController_EndPlate.mjs',
    lowerReceiver: './modelController_Lower/modelController_LowerReceiver.mjs',
    magazine: './modelController_Lower/modelController_Magazine.mjs',
    pistolGrip: './modelController_Lower/modelController_PistolGrip.mjs',
    safety: './modelController_Lower/modelController_Safety.mjs',
    stock: './modelController_Lower/modelController_Stock.mjs',
    takedownPinSet: './modelController_Lower/modelController_TakedownPin.mjs',
    trigger: './modelController_Lower/modelController_Trigger.mjs',
    triggerGuard: './modelController_Lower/modelController_TriggerGuard.mjs',
    bufferAndSpringKit: './modelController_Lower/modelController_BufferAndSpringKit.mjs',
    
    // Upper
    barrel: './modelController_Upper/modelController_Barel.mjs',
    boltCarrierGroup: './modelController_Upper/modelController_BoltCarrierGroup.mjs',
    ejectionPortCover: './modelController_Upper/modelController_EjectionPortCover.mjs',
    forwardAssists: './modelController_Upper/modelController_ForwardAssists.mjs',
    handguardRailSystem: './modelController_Upper/modelController_Handguard.mjs',
    muzzleDevice: './modelController_Upper/modelController_MuzzleDevice.mjs',
    upperReceiver: './modelController_Upper/modelController_UpperReceiver.mjs',
    
    // Gear
    bipod: './modelController_Gear/modelController_Bipod.mjs',
    frontSight: './modelController_Gear/modelController_FrontSight.mjs',
    laserSight: './modelController_Gear/modelController_LaserSight.mjs',
    mlokAndKeymodRail: './modelController_Gear/modelController_Mlok.mjs',
    opticSight: './modelController_Gear/modelController_OpticSight.mjs',
    rearSight: './modelController_Gear/modelController_RearSight.mjs'
  };
  
  return controllerMap[partName];
}

// Helper functions
function showModel(modelID) {
  if (modelState.hasOwnProperty(modelID)) {
    modelState[modelID] = 1;
    objectShowHideSystem();
  }
}

function hideModel(modelID) {
  if (modelState.hasOwnProperty(modelID)) {
    modelState[modelID] = 0;
    objectShowHideSystem();
  }
}

// Export for global access
window.setupModelControllers = setupModelControllers;
window.updateModelForPart = updateModelForPart;


