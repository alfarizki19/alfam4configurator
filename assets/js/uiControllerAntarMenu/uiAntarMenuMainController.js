export let menuOpened_ID = "A";

// Function to set menu opened ID
export function setMenuOpenedID(newMenuID) {
    menuOpened_ID = newMenuID;
}

export const mainMenuID = {
    menuMainMenu: "menuMainMenu",
    menuLowerGroupMenu: "menuLowerGroupMenu",
    menuUpperGroupMenu: "menuUpperGroupMenu",
    menuGearAndAccecoriesMenu: "menuGearAndAccecoriesMenu"
};

export const upperPartMenuID = {
    //Menu Upper Receiver
    menuPart_Barel: "menuPart_Barel",
    menuPart_BoltCarrierGroup: "menuPart_BoltCarrierGroup",
    menuPart_ChargingHandle: "menuPart_ChargingHandle",
    menuPart_EjectionPortCover: "menuPart_EjectionPortCover",
    menuPart_ForwardAssistsAssembly: "menuPart_ForwardAssistsAssembly",
    menuPart_HandguardRailSystem: "menuPart_HandguardRailSystem",
    menuPart_MuzzleDevice: "menuPart_MuzzleDevice",
    menuPart_UpperReceiver: "menuPart_UpperReceiver"
};

export const lowerPartMenuID = {
    //Menu Lower Receiver
    menuPart_BoltCatch: "menuPart_BoltCatch",
    menuPart_BufferAndSpringKit: "menuPart_BufferAndSpringKit",
    menuPart_BufferTube: "menuPart_BufferTube",
    menuPart_EndPlate: "menuPart_EndPlate",
    menuPart_LowerReceiver: "menuPart_LowerReceiver",
    menuPart_Magazine: "menuPart_Magazine",
    menuPart_MagazineRelease: "menuPart_MagazineRelease",
    menuPart_PistolGrip: "menuPart_PistolGrip",
    menuPart_Safety: "menuPart_Safety",
    menuPart_Stock: "menuPart_Stock",
    menuPart_TakedownPinSet: "menuPart_TakedownPinSet",
    menuPart_Trigger: "menuPart_Trigger",
    menuPart_TriggerGuard: "menuPart_TriggerGuard"
};

export const gearPartMenuID = {
    //Menu Gear And Accecories
    menuPart_Bipod: "menuPart_Bipod",
    menuPart_FrontSight: "menuPart_FrontSight",
    menuPart_MLOKandKeymodRail: "menuPart_MlokAndKeymodRail",
    menuPart_OpticSight: "menuPart_OpticSight",
    menuPart_RearSight: "menuPart_RearSight",
    menuPart_Scope: "menuPart_Scope",
    menuPart_VerticalGrip: "menuPart_VerticalGrip"
};

export const additionalPartMenuID = {    
    //Menu Addional Part
    //Warden
    menuPart_Warden: "menuPart_Warden",

    //Mlok For Bipod
    menuPart_MlokForBipod: "menuPart_MlokForBipod"
};

export function closeAllMenu() {
    // Sembunyikan semua menu dulu

    //Main Menu
    document.getElementById(mainMenuID.menuMainMenu).style.display = "none";

    //Category Menu
    document.getElementById(mainMenuID.menuLowerGroupMenu).style.display = "none";
    document.getElementById(mainMenuID.menuUpperGroupMenu).style.display = "none";
    document.getElementById(mainMenuID.menuGearAndAccecoriesMenu).style.display = "none";

    //Upper Part Menu
    document.getElementById(upperPartMenuID.menuPart_Barel).style.display = "none";
    document.getElementById(upperPartMenuID.menuPart_BoltCarrierGroup).style.display = "none";
    document.getElementById(upperPartMenuID.menuPart_ChargingHandle).style.display = "none";
    document.getElementById(upperPartMenuID.menuPart_EjectionPortCover).style.display = "none";
    document.getElementById(upperPartMenuID.menuPart_ForwardAssistsAssembly).style.display = "none";
    document.getElementById(upperPartMenuID.menuPart_HandguardRailSystem).style.display = "none";
    document.getElementById(upperPartMenuID.menuPart_MuzzleDevice).style.display = "none";
    document.getElementById(upperPartMenuID.menuPart_UpperReceiver).style.display = "none";

    //Lower Part Menu
    document.getElementById(lowerPartMenuID.menuPart_BoltCatch).style.display = "none";
    document.getElementById(lowerPartMenuID.menuPart_BufferAndSpringKit).style.display = "none";
    document.getElementById(lowerPartMenuID.menuPart_BufferTube).style.display = "none";
    document.getElementById(lowerPartMenuID.menuPart_EndPlate).style.display = "none";
    document.getElementById(lowerPartMenuID.menuPart_LowerReceiver).style.display = "none";
    document.getElementById(lowerPartMenuID.menuPart_Magazine).style.display = "none";
    document.getElementById(lowerPartMenuID.menuPart_MagazineRelease).style.display = "none";
    document.getElementById(lowerPartMenuID.menuPart_PistolGrip).style.display = "none";
    document.getElementById(lowerPartMenuID.menuPart_Safety).style.display = "none";
    document.getElementById(lowerPartMenuID.menuPart_Stock).style.display = "none";
    document.getElementById(lowerPartMenuID.menuPart_TakedownPinSet).style.display = "none";
    document.getElementById(lowerPartMenuID.menuPart_Trigger).style.display = "none";
    document.getElementById(lowerPartMenuID.menuPart_TriggerGuard).style.display = "none";

    //Gear And Accecories Part Menu
    document.getElementById(gearPartMenuID.menuPart_Bipod).style.display = "none";
    document.getElementById(gearPartMenuID.menuPart_FrontSight).style.display = "none";
    document.getElementById(gearPartMenuID.menuPart_MLOKandKeymodRail).style.display = "none";
    document.getElementById(gearPartMenuID.menuPart_OpticSight).style.display = "none";
    document.getElementById(gearPartMenuID.menuPart_RearSight).style.display = "none";
    document.getElementById(gearPartMenuID.menuPart_Scope).style.display = "none";
    document.getElementById(gearPartMenuID.menuPart_VerticalGrip).style.display = "none";

    //Additional Part
    document.getElementById(additionalPartMenuID.menuPart_Warden).style.display = "none";
    document.getElementById(additionalPartMenuID.menuPart_MlokForBipod).style.display = "none";
}

export function closeSummaryMenu() {
    document.getElementById("modalSummary").classList.remove ("open");
}

export function openMenu(){
    // Tampilkan menu yang dipilih

    //Main Menu
    if (menuOpened_ID === mainMenuID.menuMainMenu) {
        document.getElementById(mainMenuID.menuMainMenu).style.display = "block";
        document.getElementById(mainMenuID.menuMainMenu).style.overflow = "auto";
    }

    //Category Menu
    if (menuOpened_ID === mainMenuID.menuLowerGroupMenu) {
        document.getElementById(mainMenuID.menuLowerGroupMenu).style.display = "flex";
        document.getElementById(mainMenuID.menuLowerGroupMenu).style.overflow = "auto";
    }
    if (menuOpened_ID === mainMenuID.menuUpperGroupMenu) {
        document.getElementById(mainMenuID.menuUpperGroupMenu).style.display = "flex";
        document.getElementById(mainMenuID.menuUpperGroupMenu).style.overflow = "auto";
    }
    if (menuOpened_ID === mainMenuID.menuGearAndAccecoriesMenu) {
        document.getElementById(mainMenuID.menuGearAndAccecoriesMenu).style.display = "flex";
        document.getElementById(mainMenuID.menuGearAndAccecoriesMenu).style.overflow = "auto";
    }

    //Upper Part Menu
    if (menuOpened_ID === upperPartMenuID.menuPart_Barel) {
        document.getElementById(upperPartMenuID.menuPart_Barel).style.display = "flex";
        document.getElementById(upperPartMenuID.menuPart_Barel).style.overflow = "auto";
    }
    if (menuOpened_ID === upperPartMenuID.menuPart_BoltCarrierGroup) {
        document.getElementById(upperPartMenuID.menuPart_BoltCarrierGroup).style.display = "flex";
        document.getElementById(upperPartMenuID.menuPart_BoltCarrierGroup).style.overflow = "auto";
    }
    if (menuOpened_ID === upperPartMenuID.menuPart_ChargingHandle) {
        document.getElementById(upperPartMenuID.menuPart_ChargingHandle).style.display = "flex";
        document.getElementById(upperPartMenuID.menuPart_ChargingHandle).style.overflow = "auto";
    }
    if (menuOpened_ID === upperPartMenuID.menuPart_EjectionPortCover) {
        document.getElementById(upperPartMenuID.menuPart_EjectionPortCover).style.display = "flex";
        document.getElementById(upperPartMenuID.menuPart_EjectionPortCover).style.overflow = "auto";
    }
    if (menuOpened_ID === upperPartMenuID.menuPart_ForwardAssistsAssembly) {
        document.getElementById(upperPartMenuID.menuPart_ForwardAssistsAssembly).style.display = "flex";
        document.getElementById(upperPartMenuID.menuPart_ForwardAssistsAssembly).style.overflow = "auto";
    }
    if (menuOpened_ID === upperPartMenuID.menuPart_HandguardRailSystem) {
        document.getElementById(upperPartMenuID.menuPart_HandguardRailSystem).style.display = "flex";
        document.getElementById(upperPartMenuID.menuPart_HandguardRailSystem).style.overflow = "auto";
    }
    if (menuOpened_ID === upperPartMenuID.menuPart_MuzzleDevice) {
        document.getElementById(upperPartMenuID.menuPart_MuzzleDevice).style.display = "flex";
        document.getElementById(upperPartMenuID.menuPart_MuzzleDevice).style.overflow = "auto";
    }
    if (menuOpened_ID === upperPartMenuID.menuPart_UpperReceiver) {
        document.getElementById(upperPartMenuID.menuPart_UpperReceiver).style.display = "flex";
        document.getElementById(upperPartMenuID.menuPart_UpperReceiver).style.overflow = "auto";
    }

    //Lower Part Menu
    if (menuOpened_ID === lowerPartMenuID.menuPart_BoltCatch) {
        document.getElementById(lowerPartMenuID.menuPart_BoltCatch).style.display = "flex";
        document.getElementById(lowerPartMenuID.menuPart_BoltCatch).style.overflow = "auto";
    }
    if (menuOpened_ID === lowerPartMenuID.menuPart_BufferAndSpringKit) {
        document.getElementById(lowerPartMenuID.menuPart_BufferAndSpringKit).style.display = "flex";
        document.getElementById(lowerPartMenuID.menuPart_BufferAndSpringKit).style.overflow = "auto";
    }
    if (menuOpened_ID === lowerPartMenuID.menuPart_BufferTube) {
        document.getElementById(lowerPartMenuID.menuPart_BufferTube).style.display = "flex";
        document.getElementById(lowerPartMenuID.menuPart_BufferTube).style.overflow = "auto";
    }
    if (menuOpened_ID === lowerPartMenuID.menuPart_EndPlate) {
        document.getElementById(lowerPartMenuID.menuPart_EndPlate).style.display = "flex";
        document.getElementById(lowerPartMenuID.menuPart_EndPlate).style.overflow = "auto";
    }
    if (menuOpened_ID === lowerPartMenuID.menuPart_LowerReceiver) {
        document.getElementById(lowerPartMenuID.menuPart_LowerReceiver).style.display = "flex";
        document.getElementById(lowerPartMenuID.menuPart_LowerReceiver).style.overflow = "auto";
    }
    if (menuOpened_ID === lowerPartMenuID.menuPart_Magazine) {
        document.getElementById(lowerPartMenuID.menuPart_Magazine).style.display = "flex";
        document.getElementById(lowerPartMenuID.menuPart_Magazine).style.overflow = "auto";
    }
    if (menuOpened_ID === lowerPartMenuID.menuPart_MagazineRelease) {
        document.getElementById(lowerPartMenuID.menuPart_MagazineRelease).style.display = "flex";
        document.getElementById(lowerPartMenuID.menuPart_MagazineRelease).style.overflow = "auto";
    }
    if (menuOpened_ID === lowerPartMenuID.menuPart_PistolGrip) {
        document.getElementById(lowerPartMenuID.menuPart_PistolGrip).style.display = "flex";
        document.getElementById(lowerPartMenuID.menuPart_PistolGrip).style.overflow = "auto";
    }
    if (menuOpened_ID === lowerPartMenuID.menuPart_Safety) {
        document.getElementById(lowerPartMenuID.menuPart_Safety).style.display = "flex";
        document.getElementById(lowerPartMenuID.menuPart_Safety).style.overflow = "auto";
    }
    if (menuOpened_ID === lowerPartMenuID.menuPart_Stock) {
        document.getElementById(lowerPartMenuID.menuPart_Stock).style.display = "flex";
        document.getElementById(lowerPartMenuID.menuPart_Stock).style.overflow = "auto";
    }
    if (menuOpened_ID === lowerPartMenuID.menuPart_TakedownPinSet) {
        document.getElementById(lowerPartMenuID.menuPart_TakedownPinSet).style.display = "flex";
        document.getElementById(lowerPartMenuID.menuPart_TakedownPinSet).style.overflow = "auto";
    }
    if (menuOpened_ID === lowerPartMenuID.menuPart_Trigger) {
        document.getElementById(lowerPartMenuID.menuPart_Trigger).style.display = "flex";
        document.getElementById(lowerPartMenuID.menuPart_Trigger).style.overflow = "auto";
    }
    if (menuOpened_ID === lowerPartMenuID.menuPart_TriggerGuard) {
        document.getElementById(lowerPartMenuID.menuPart_TriggerGuard).style.display = "flex";
        document.getElementById(lowerPartMenuID.menuPart_TriggerGuard).style.overflow = "auto";
    }

    //Gear And Accecories Menu
    //Bipod
    if (menuOpened_ID === gearPartMenuID.menuPart_Bipod) {
        document.getElementById(gearPartMenuID.menuPart_Bipod).style.display = "flex";
        document.getElementById(gearPartMenuID.menuPart_Bipod).style.overflow = "auto";
    }

    //Front Sight
    if (menuOpened_ID === gearPartMenuID.menuPart_FrontSight) {
        document.getElementById(gearPartMenuID.menuPart_FrontSight).style.display = "flex";
        document.getElementById(gearPartMenuID.menuPart_FrontSight).style.overflow = "auto";
    }

    //MLOK and Keymod Rail
    if (menuOpened_ID === gearPartMenuID.menuPart_MLOKandKeymodRail) {
        document.getElementById(gearPartMenuID.menuPart_MLOKandKeymodRail).style.display = "flex";
        document.getElementById(gearPartMenuID.menuPart_MLOKandKeymodRail).style.overflow = "auto";
    }

    //Optic Sight
    if (menuOpened_ID === gearPartMenuID.menuPart_OpticSight) {
        document.getElementById(gearPartMenuID.menuPart_OpticSight).style.display = "flex";
        document.getElementById(gearPartMenuID.menuPart_OpticSight).style.overflow = "auto";
    }
    
    //Rear Sight
    if (menuOpened_ID === gearPartMenuID.menuPart_RearSight) {
        document.getElementById(gearPartMenuID.menuPart_RearSight).style.display = "flex";
        document.getElementById(gearPartMenuID.menuPart_RearSight).style.overflow = "auto";
    }
    
    //Scope
    if (menuOpened_ID === gearPartMenuID.menuPart_Scope) {
        document.getElementById(gearPartMenuID.menuPart_Scope).style.display = "flex";
        document.getElementById(gearPartMenuID.menuPart_Scope).style.overflow = "auto";
    }
    
    //Vertical Grip
    if (menuOpened_ID === gearPartMenuID.menuPart_VerticalGrip) {
        document.getElementById(gearPartMenuID.menuPart_VerticalGrip).style.display = "flex";
        document.getElementById(gearPartMenuID.menuPart_VerticalGrip).style.overflow = "auto";
    }

    //Additional Part
    if (menuOpened_ID === additionalPartMenuID.menuPart_Warden) {
        document.getElementById(additionalPartMenuID.menuPart_Warden).style.display = "flex";
        document.getElementById(additionalPartMenuID.menuPart_Warden).style.overflow = "auto";
    }

    //Additional Part
    if (menuOpened_ID === additionalPartMenuID.menuPart_MlokForBipod) {
        document.getElementById(additionalPartMenuID.menuPart_MlokForBipod).style.display = "flex";
        document.getElementById(additionalPartMenuID.menuPart_MlokForBipod).style.overflow = "auto";
    }
}