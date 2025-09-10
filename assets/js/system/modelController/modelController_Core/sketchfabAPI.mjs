// Sketchfab API Controller for M4 Rifle Configurator

let apiGlobal = null;

export function initSketchfab(api) {
  apiGlobal = api;
  console.log('Sketchfab API initialized');
}

export function getAPI() {
  return apiGlobal;
}

// Model State Management
export const modelState = {
  // Lower Parts
  bufferTube001: 0,
  magazineRelease001: 0,
  magazineRelease002: 0,
  chargingHandle001: 0,
  chargingHandle002: 0,
  chargingHandle003: 0,
  chargingHandle004: 0,
  boltCatch001: 0,
  endPlate001: 0,
  endPlate002: 0,
  lowerReceiver001: 0,
  magazine001: 0,
  magazine002: 0,
  pistolGrip001: 0,
  pistolGrip002: 0,
  safety001: 0,
  safety002: 0,
  stock001: 0,
  stock002: 0,
  takedownPinSet001: 0,
  takedownPinSet002: 0,
  takedownPinSet003: 0,
  trigger001: 0,
  trigger002: 0,
  triggerGuard001: 0,
  triggerGuard002: 0,
  bufferAndSpringKit001: 0,
  
  // Upper Parts
  barrel002: 0,
  boltCarrierGroup001: 0,
  boltCarrierGroup002: 0,
  ejectionPortCover001: 0,
  forwardAssists001: 0,
  handguardRailSystem001: 0,
  handguardRailSystem002: 0,
  muzzleDevice001: 0,
  muzzleDevice002: 0,
  upperReceiver001: 0,
  
  // Gear Parts
  bipod001: 0,
  frontSight001: 0,
  frontSight002: 0,
  laserSight001: 0,
  mlokAndKeymodRail001: 0,
  mlokAndKeymodRail002: 0,
  opticSight001: 0,
  rearSight001: 0,
  rearSight002: 0
};

// Show/Hide Model System
export function objectShowHideSystem() {
  if (!apiGlobal) {
    console.error('API belum diinisialisasi');
    return;
  }

  apiGlobal.getNodeMap(function (err, nodes) {
    if (err) {
      console.error('Gagal mengambil node map', err);
      return;
    }

    // Loop semua model state
    Object.keys(modelState).forEach(modelKey => {
      const model = Object.values(nodes).find((node) => node.name === `modelID_${modelKey}`);
      if (model) {
        if (modelState[modelKey] === 0) {
          console.log(`${modelKey} disembunyikan`);
          apiGlobal.hide(model.instanceID);
        } else if (modelState[modelKey] === 1) {
          console.log(`${modelKey} ditampilkan`);
          apiGlobal.show(model.instanceID);
        }
      } else {
        console.warn(`modelID_${modelKey} tidak ditemukan di scene`);
      }
    });
  });
}

// Apply Texture Function
export function applyTexture(itemsID) {
  if (!apiGlobal) return;
  
  const partName = getPartNameFromItemsID(itemsID);
  const texturePath = `data/texture/${partName}/${itemsID}_base.jpg`;
  
  apiGlobal.getMaterialList((err, materials) => {
    if (err) {
      console.error('Gagal mengambil material list', err);
      return;
    }
    
    materials.forEach(material => {
      if (material.name.includes(partName)) {
        apiGlobal.setTexture(material.index, texturePath);
        console.log(`Texture applied: ${texturePath}`);
      }
    });
  });
}

// Helper Functions
export function getModelIDFromItemsID(itemsID) {
  const match = itemsID.match(/^(\w+)(\d{3})(\d{3})(\d{2})$/);
  if (match) {
    const [, partName, brandCode, productCode] = match;
    return `${partName}${brandCode}${productCode}`;
  }
  return null;
}

export function getPartNameFromItemsID(itemsID) {
  const match = itemsID.match(/^(\w+)(\d{3})(\d{3})(\d{2})$/);
  return match ? match[1] : null;
}

// Reset All Models
export function resetAllModels() {
  Object.keys(modelState).forEach(key => {
    modelState[key] = 0;
  });
  objectShowHideSystem();
}

// Show Model by ModelID
export function showModel(modelID) {
  if (modelState.hasOwnProperty(modelID)) {
    modelState[modelID] = 1;
    objectShowHideSystem();
  }
}

// Hide Model by ModelID
export function hideModel(modelID) {
  if (modelState.hasOwnProperty(modelID)) {
    modelState[modelID] = 0;
    objectShowHideSystem();
  }
}

// Hide All Models from Part
export function hidePartModels(partName) {
  Object.keys(modelState).forEach(key => {
    if (key.startsWith(partName)) {
      modelState[key] = 0;
    }
  });
  objectShowHideSystem();
}

window.modelState = modelState;
window.objectShowHideSystem = objectShowHideSystem;
window.applyTexture = applyTexture;
window.resetAllModels = resetAllModels;
window.showModel = showModel;
window.hideModel = hideModel;
window.hidePartModels = hidePartModels;


