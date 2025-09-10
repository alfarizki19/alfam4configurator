// Main Viewer Controller for M4 Rifle Configurator

import { initSketchfab, objectShowHideSystem } from './sketchfabAPI.mjs';
import { setupModelControllers } from './modelController_Core.mjs';

const iframe = document.getElementById('api-frame');
const uid = 'c37424f9264a48749e200075185cee29'; // M4_v3b model ID

const client = new Sketchfab(iframe);

client.init(uid, {
  success: function onSuccess(api) {
    api.start();
    api.addEventListener('viewerready', function () {
      console.log('M4 Rifle Configurator ready');

      // Initialize Sketchfab API
      initSketchfab(api);
      
      // Apply initial state
      objectShowHideSystem();
      
      // Setup all model controllers
      setupModelControllers();
      
      // Sync with summary system
      syncWithSummarySystem();
    });
  },
  error: function onError() {
    console.error('Sketchfab viewer gagal dimuat');
  }
});

// Sync with Summary System
function syncWithSummarySystem() {
  // Hook to summary system changes
  const observer = new MutationObserver(() => {
    updateAllModels();
  });
  
  // Observe summary container
  const summaryContainer = document.getElementById('summaryContainer');
  if (summaryContainer) {
    observer.observe(summaryContainer, { 
      childList: true, 
      subtree: true, 
      attributes: true,
      attributeFilter: ['style']
    });
  }
  
  // Initial sync
  updateAllModels();
  
  // Setup start button listener
  setupStartButton();
}

// Update all models based on summary
function updateAllModels() {
  // Import all Lower model controllers
  import('./modelController_Lower/modelController_MagazineRelease.mjs').then(module => {
    module.updateModel_MagazineRelease();
  });
  
  import('../modelController_Lower/modelController_BufferTube.mjs').then(module => {
    module.updateModel_BufferTube();
  });
  
  import('../modelController_Lower/modelController_ChargingHandle.mjs').then(module => {
    module.updateModel_ChargingHandle();
  });
  
  import('../modelController_Lower/modelController_BoltCatch.mjs').then(module => {
    module.updateModel_BoltCatch();
  });
  
  import('../modelController_Lower/modelController_EndPlate.mjs').then(module => {
    module.updateModel_EndPlate();
  });
  
  import('../modelController_Lower/modelController_LowerReceiver.mjs').then(module => {
    module.updateModel_LowerReceiver();
  });
  
  import('../modelController_Lower/modelController_Magazine.mjs').then(module => {
    module.updateModel_Magazine();
  });
  
  import('../modelController_Lower/modelController_PistolGrip.mjs').then(module => {
    module.updateModel_PistolGrip();
  });
  
  import('../modelController_Lower/modelController_Safety.mjs').then(module => {
    module.updateModel_Safety();
  });
  
  import('../modelController_Lower/modelController_Stock.mjs').then(module => {
    module.updateModel_Stock();
  });
  
  import('../modelController_Lower/modelController_TakedownPin.mjs').then(module => {
    module.updateModel_TakedownPinSet();
  });
  
  import('../modelController_Lower/modelController_Trigger.mjs').then(module => {
    module.updateModel_Trigger();
  });
  
  import('../modelController_Lower/modelController_TriggerGuard.mjs').then(module => {
    module.updateModel_TriggerGuard();
  });
  
  import('../modelController_Lower/modelController_BufferAndSpringKit.mjs').then(module => {
    module.updateModel_BufferAndSpringKit();
  });
  
  // Import all Upper model controllers
  import('../modelController_Upper/modelController_Barel.mjs').then(module => {
    module.updateModel_Barel();
  });
  
  import('../modelController_Upper/modelController_BoltCarrierGroup.mjs').then(module => {
    module.updateModel_BoltCarrierGroup();
  });
  
  import('../modelController_Upper/modelController_EjectionPortCover.mjs').then(module => {
    module.updateModel_EjectionPortCover();
  });
  
  import('../modelController_Upper/modelController_ForwardAssists.mjs').then(module => {
    module.updateModel_ForwardAssists();
  });
  
  import('../modelController_Upper/modelController_Handguard.mjs').then(module => {
    module.updateModel_HandguardRailSystem();
  });
  
  import('../modelController_Upper/modelController_MuzzleDevice.mjs').then(module => {
    module.updateModel_MuzzleDevice();
  });
  
  import('../modelController_Upper/modelController_UpperReceiver.mjs').then(module => {
    module.updateModel_UpperReceiver();
  });
  
  // Import all Gear model controllers
  import('../modelController_Gear/modelController_Bipod.mjs').then(module => {
    module.updateModel_Bipod();
  });
  
  import('../modelController_Gear/modelController_FrontSight.mjs').then(module => {
    module.updateModel_FrontSight();
  });
  
  import('../modelController_Gear/modelController_RearSight.mjs').then(module => {
    module.updateModel_RearSight();
  });
  
  import('../modelController_Gear/modelController_LaserSight.mjs').then(module => {
    module.updateModel_LaserSight();
  });
  
  import('../modelController_Gear/modelController_Mlok.mjs').then(module => {
    module.updateModel_MLOK();
  });
  
  import('../modelController_Gear/modelController_OpticSight.mjs').then(module => {
    module.updateModel_OpticSight();
  });
}

// Start Button Integration - Auto-select default parts when user clicks start
function setupStartButton() {
  const startButton = document.getElementById("buttonModalStartMenu_StartButton");
  if (startButton) {
    startButton.addEventListener("click", function () {
      console.log("Start button clicked - Initializing default 3D models");
      
      // Wait a bit for dataController to finish updating
      setTimeout(() => {
        updateAllModels();
        console.log("Default 3D models initialized");
      }, 100);
    });
  } else {
    console.warn("Start button not found: buttonModalStartMenu_StartButton");
  }
}

// Export for global access
window.syncWithSummarySystem = syncWithSummarySystem;
window.updateAllModels = updateAllModels;
window.setupStartButton = setupStartButton;