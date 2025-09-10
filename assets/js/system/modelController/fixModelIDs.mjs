// Script to fix all Model IDs based on partData.txt
// This will update all model controllers with correct Model IDs

// Model ID mapping from partData.txt
const correctModelIDs = {
    // Barrel
    'barel00200101': 'modelID_barel00200101',
    
    // Bipod
    'bipod00100101': ['modelID_bipod001001_A', 'modelID_bipod001001_B', 'modelID_bipod001001_C', 'modelID_bipod001001_D'],
    
    // Bolt Carrier Group
    'boltCarrierGroup00100101': 'modelID_boltCarrierGroup001001',
    'boltCarrierGroup00200101': 'modelID_boltCarrierGroup002001',
    'boltCarrierGroup00200201': 'modelID_boltCarrierGroup002002',
    
    // Bolt Catch
    'boltCatch00100101': 'modelID_boltCatch001001',
    
    // Buffer Tube
    'bufferTube00100101': 'modelID_bufferTube001001',
    
    // Buffer and Spring Kit
    'bufferAndSpringKit00100101': 'modelID_bufferAndSpringKit001001',
    
    // Charging Handle
    'chargingHandle00100101': 'modelID_chargingHandle001001',
    'chargingHandle00100102': 'modelID_chargingHandle001002',
    'chargingHandle00200101': 'modelID_chargingHandle002001',
    'chargingHandle00300101': 'modelID_chargingHandle003001',
    'chargingHandle00400101': 'modelID_chargingHandle004001',
    
    // Ejection Port Cover
    'ejectionPortCover00100101': 'modelID_ejectionPortCover001001',
    'ejectionPortCover00100102': 'modelID_ejectionPortCover001001',
    'ejectionPortCover00100103': 'modelID_ejectionPortCover001001',
    'ejectionPortCover00100104': 'modelID_ejectionPortCover001001',
    'ejectionPortCover00100105': 'modelID_ejectionPortCover001001',
    'ejectionPortCover00100106': 'modelID_ejectionPortCover001001',
    'ejectionPortCover00100107': 'modelID_ejectionPortCover001001',
    'ejectionPortCover00100108': 'modelID_ejectionPortCover001001',
    'ejectionPortCover00100109': 'modelID_ejectionPortCover001001',
    'ejectionPortCover00100110': 'modelID_ejectionPortCover001001',
    
    // End Plate
    'endPlate00100101': 'modelID_endPlate001001',
    'endPlate00100102': 'modelID_endPlate001001',
    'endPlate00100103': 'modelID_endPlate001001',
    'endPlate00100104': 'modelID_endPlate001001',
    'endPlate00100105': 'modelID_endPlate001001',
    'endPlate00100106': 'modelID_endPlate001001',
    'endPlate00100107': 'modelID_endPlate001001',
    'endPlate00200101': 'modelID_endPlate00200101',
    'endPlate00200102': 'modelID_endPlate00200102',
    'endPlate00200103': 'modelID_endPlate00200103',
    'endPlate00200104': 'modelID_endPlate00200104',
    'endPlate00200105': 'modelID_endPlate00200105',
    'endPlate00200106': 'modelID_endPlate00200106',
    'endPlate00200107': 'modelID_endPlate00200107',
    'endPlate00200108': 'modelID_endPlate00200108',
    'endPlate00200109': 'modelID_endPlate00200109',
    'endPlate00200110': 'modelID_endPlate00200110',
    
    // Forward Assist
    'forwardAssists00100101': 'modelID_forwardAssists001001',
    'forwardAssists00100102': 'modelID_forwardAssists001001',
    
    // Front Sight
    'frontSight00100101': ['modelID_frontSight001001_A', 'modelID_frontSight001001_B'],
    'frontSight00200101': ['modelID_frontSight002001_A', 'modelID_frontSight002001_B'],
    
    // Handguard Rail System
    'handguardRailSystem00100101': 'modelID_handguardRailSystem001001',
    'handguardRailSystem00100102': 'modelID_handguardRailSystem001001',
    'handguardRailSystem00100201': 'modelID_handguardRailSystem001002',
    'handguardRailSystem00100202': 'modelID_handguardRailSystem001002',
    
    // Laser Sight
    'laserSight00100101': 'modelID_laserSight001001',
    
    // Lower Receiver
    'lowerReceiver00100101': 'modelID_lowerReceiver001001',
    'lowerReceiver00100102': 'modelID_lowerReceiver001001',
    
    // Magazine
    'magazine00100101': 'modelID_magazine001001',
    'magazine00200101': 'modelID_magazine001001',
    
    // Magazine Release
    'magazineRelease00100101': 'modelID_magazineRelease001001',
    'magazineRelease00100102': 'modelID_magazineRelease001001',
    'magazineRelease00100103': 'modelID_magazineRelease001001',
    'magazineRelease00200101': 'modelID_magazineRelease002001',
    'magazineRelease00200102': 'modelID_magazineRelease002001',
    'magazineRelease00200103': 'modelID_magazineRelease002001',
    'magazineRelease00200104': 'modelID_magazineRelease002001',
    'magazineRelease00200105': 'modelID_magazineRelease002001',
    'magazineRelease00200106': 'modelID_magazineRelease002001',
    'magazineRelease00200107': 'modelID_magazineRelease002001',
    'magazineRelease00200108': 'modelID_magazineRelease002001',
    'magazineRelease00200109': 'modelID_magazineRelease002001',
    'magazineRelease00200110': 'modelID_magazineRelease002001',
    
    // MLOK/KeyMod Rails
    'mlokAndKeymodRail00100101': ['modelID_mlokAndKeymodRail001001_A', 'modelID_mlokAndKeymodRail001001_B'],
    'mlokAndKeymodRail00200101': ['modelID_mlokAndKeymodRail002001_A', 'modelID_mlokAndKeymodRail002001_B'],
    
    // Muzzle Device
    'muzzleDevice00100101': 'modelID_muzzleDevice001001',
    'muzzleDevice00100201': 'modelID_muzzleDevice001002',
    'muzzleDevice00100301': 'modelID_muzzleDevice001003',
    'muzzleDevice00100302': 'modelID_muzzleDevice001003',
    'muzzleDevice00200201': 'modelID_muzzleDevice002002',
    'muzzleDevice00200202': 'modelID_muzzleDevice002002',
    
    // Optic Sight
    'opticSight00100101': 'modelID_opticSight001001',
    
    // Pistol Grip
    'pistolGrip00100101': 'modelID_pistolGrip001001',
    'pistolGrip00100102': 'modelID_pistolGrip001001',
    'pistolGrip00100103': 'modelID_pistolGrip001001',
    'pistolGrip00200101': 'modelID_pistolGrip001001',
    'pistolGrip00200102': 'modelID_pistolGrip001001',
    'pistolGrip00200103': 'modelID_pistolGrip001001',
    'pistolGrip00200104': 'modelID_pistolGrip001001',
    'pistolGrip00200105': 'modelID_pistolGrip001001',
    'pistolGrip00200106': 'modelID_pistolGrip001001',
    'pistolGrip00200107': 'modelID_pistolGrip001001',
    
    // Rear Sight
    'rearSight00100101': ['modelID_rearSight001001_A', 'modelID_rearSight001001_B'],
    'rearSight00200101': ['modelID_rearSight002001_A', 'modelID_rearSight002001_B'],
    
    // Safety
    'safety00100101': 'modelID_safety001001',
    'safety00100102': 'modelID_safety001001',
    'safety00100103': 'modelID_safety001001',
    'safety00100104': 'modelID_safety001001',
    'safety00200101': 'modelID_safety002001',
    'safety00200102': 'modelID_safety002001',
    'safety00200103': 'modelID_safety002001',
    'safety00200104': 'modelID_safety002001',
    'safety00200105': 'modelID_safety002001',
    'safety00200106': 'modelID_safety002001',
    'safety00200107': 'modelID_safety002001',
    'safety00200108': 'modelID_safety002001',
    'safety00200109': 'modelID_safety002001',
    'safety00200110': 'modelID_safety002001',
    
    // Stock
    'stock00100101': 'modelID_stock001001',
    'stock00100102': 'modelID_stock001001',
    'stock00100103': 'modelID_stock001001',
    'stock00100104': 'modelID_stock001001',
    'stock00100105': 'modelID_stock001001',
    'stock00200101': 'modelID_stock002001',
    'stock00200102': 'modelID_stock002001',
    'stock00200103': 'modelID_stock002001',
    
    // Takedown Pin Set
    'takedownPinSet00100101': 'modelID_takedownPinSet001001',
    'takedownPinSet00100102': 'modelID_takedownPinSet001001',
    'takedownPinSet00200101': 'modelID_takedownPinSet002001',
    'takedownPinSet00200102': 'modelID_takedownPinSet002001',
    'takedownPinSet00200103': 'modelID_takedownPinSet002001',
    'takedownPinSet00200104': 'modelID_takedownPinSet002001',
    'takedownPinSet00200105': 'modelID_takedownPinSet002001',
    'takedownPinSet00200106': 'modelID_takedownPinSet002001',
    'takedownPinSet00200107': 'modelID_takedownPinSet002001',
    'takedownPinSet00200108': 'modelID_takedownPinSet002001',
    'takedownPinSet00200109': 'modelID_takedownPinSet002001',
    'takedownPinSet00200110': 'modelID_takedownPinSet002001',
    'takedownPinSet00300101': 'modelID_takedownPinSet003001',
    
    // Trigger
    'trigger00100101': 'modelID_trigger001001',
    'trigger00200101': 'modelID_trigger002001',
    'trigger00200102': 'modelID_trigger002001',
    'trigger00200103': 'modelID_trigger002001',
    
    // Trigger Guard
    'triggerGuard00100101': 'modelID_triggerGuard001001',
    'triggerGuard00100102': 'modelID_triggerGuard001001',
    'triggerGuard00100103': 'modelID_triggerGuard001001',
    'triggerGuard00100104': 'modelID_triggerGuard001001',
    'triggerGuard00100105': 'modelID_triggerGuard001001',
    'triggerGuard00100106': 'modelID_triggerGuard001001',
    'triggerGuard00100107': 'modelID_triggerGuard001001',
    'triggerGuard00200101': 'modelID_triggerGuard002001',
    'triggerGuard00200102': 'modelID_triggerGuard002001',
    'triggerGuard00200103': 'modelID_triggerGuard002001',
    'triggerGuard00200104': 'modelID_triggerGuard002001',
    'triggerGuard00200105': 'modelID_triggerGuard002001',
    'triggerGuard00200106': 'modelID_triggerGuard002001',
    'triggerGuard00200107': 'modelID_triggerGuard002001',
    'triggerGuard00200108': 'modelID_triggerGuard002001',
    'triggerGuard00200109': 'modelID_triggerGuard002001',
    'triggerGuard00200110': 'modelID_triggerGuard002001',
    
    // Upper Receiver
    'upperReceiver00100101': 'modelID_upperReceiver001001',
    'upperReceiver00100102': 'modelID_upperReceiver001001'
};

// Export the mapping for use in other files
export { correctModelIDs };

// Helper function to get correct model ID from items ID
export function getCorrectModelID(itemsID) {
    return correctModelIDs[itemsID] || null;
}

// Helper function to get all possible model IDs for a part
export function getAllModelIDsForPart(partName) {
    const modelIDs = new Set();
    
    for (const [itemsID, modelID] of Object.entries(correctModelIDs)) {
        if (itemsID.startsWith(partName)) {
            if (Array.isArray(modelID)) {
                modelID.forEach(id => modelIDs.add(id));
            } else {
                modelIDs.add(modelID);
            }
        }
    }
    
    return Array.from(modelIDs);
}
