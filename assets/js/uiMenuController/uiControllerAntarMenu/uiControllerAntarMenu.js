// uiControllerAntarMenu.js
// Empty file - uiControllerAntarMenu.js

// Export fungsi dan variabel yang dibutuhkan
//menentukan menu mana yang muncul
var menuID = "A";

/*
  contoh

  var menuID_menuMainMenu = "menuMainMenu";

  var menuID_idDiv = "ID Div Menu"

*/

//Main Menu
var menuID_menuMainMenu = "menuMainMenu";
var menuID_menuLowerGroupMenu = "menuLowerGroupMenu";
var menuID_menuUpperGroupMenu = "menuUpperGroupMenu";
var menuID_menuGearAndAccecoriesMenu = "menuGearAndAccecoriesMenu";

//Menu Upper Receiver
var menuID_menuPart_Barel = "menuPart_Barel";
var menuID_menuPart_BoltCarrierGroup = "menuPart_BoltCarrierGroup";
var menuID_menuPart_ChargingHandle = "menuPart_ChargingHandle";
var menuID_menuPart_EjectionPortCover = "menuPart_EjectionPortCover";
var menuID_menuPart_ForwardAssistsAssembly = "menuPart_ForwardAssistsAssembly";
var menuID_menuPart_HandguardRailSystem = "menuPart_HandguardRailSystem";
var menuID_menuPart_MuzzleDevice = "menuPart_MuzzleDevice";
var menuID_menuPart_UpperReceiver = "menuPart_UpperReceiver";

//Menu Lower Receiver
var menuID_menuPart_BoltCatch = "menuPart_BoltCatch";
var menuID_menuPart_BufferAndSpringKit = "menuPart_BufferAndSpringKit";
var menuID_menuPart_BufferTube = "menuPart_BufferTube";
var menuID_menuPart_EndPlate = "menuPart_EndPlate";
var menuID_menuPart_LowerReceiver = "menuPart_LowerReceiver";
var menuID_menuPart_Magazine = "menuPart_Magazine";
var menuID_menuPart_MagazineRelease = "menuPart_MagazineRelease";
var menuID_menuPart_PistolGrip = "menuPart_PistolGrip";
var menuID_menuPart_Safety = "menuPart_Safety";
var menuID_menuPart_Stock = "menuPart_Stock";
var menuID_menuPart_TakedownPinSet = "menuPart_TakedownPinSet";
var menuID_menuPart_Trigger = "menuPart_Trigger";
var menuID_menuPart_TriggerGuard = "menuPart_TriggerGuard";


//Menu Gear And Accecories
var menuID_menuPart_Bipod ="menuPart_Bipod";
var menuID_menuPart_FrontSight ="menuPart_FrontSight";
var menuID_menuPart_MLOKandKeymodRail ="menuPart_MlokAndKeymodRail";
var menuID_menuPart_OpticSight ="menuPart_OpticSight";
var menuID_menuPart_RearSight ="menuPart_RearSight";
var menuID_menuPart_Scope ="menuPart_Scope";
var menuID_menuPart_VerticalGrip ="menuPart_VerticalGrip";

//Menu Addional Part

//Warden
var menuID_menuPart_Warden ="menuPart_Warden";

//Mlok For Bipod
var menuID_menuPart_MlokForBipod ="menuPart_MlokForBipod";

window.onload = function() {
    menuID = menuID_menuMainMenu;
    menuController();
};

function menuController() {
    // Sembunyikan semua menu dulu

    //Main Menu
    document.getElementById(menuID_menuMainMenu).style.display = "none";

    //Category Menu
    document.getElementById(menuID_menuLowerGroupMenu).style.display = "none";
    document.getElementById(menuID_menuUpperGroupMenu).style.display = "none";
    document.getElementById(menuID_menuGearAndAccecoriesMenu).style.display = "none";

    //Upper Part Menu
    document.getElementById(menuID_menuPart_Barel).style.display = "none";
    document.getElementById(menuID_menuPart_BoltCarrierGroup).style.display = "none";
    document.getElementById(menuID_menuPart_ChargingHandle).style.display = "none";
    document.getElementById(menuID_menuPart_EjectionPortCover).style.display = "none";
    document.getElementById(menuID_menuPart_ForwardAssistsAssembly).style.display = "none";
    document.getElementById(menuID_menuPart_HandguardRailSystem).style.display = "none";
    document.getElementById(menuID_menuPart_MuzzleDevice).style.display = "none";
    document.getElementById(menuID_menuPart_UpperReceiver).style.display = "none";

    //Lower Part Menu
    document.getElementById(menuID_menuPart_BoltCatch).style.display = "none";
    document.getElementById(menuID_menuPart_BufferAndSpringKit).style.display = "none";
    document.getElementById(menuID_menuPart_BufferTube).style.display = "none";
    document.getElementById(menuID_menuPart_EndPlate).style.display = "none";
    document.getElementById(menuID_menuPart_LowerReceiver).style.display = "none";
    document.getElementById(menuID_menuPart_Magazine).style.display = "none";
    document.getElementById(menuID_menuPart_MagazineRelease).style.display = "none";
    document.getElementById(menuID_menuPart_PistolGrip).style.display = "none";
    document.getElementById(menuID_menuPart_Safety).style.display = "none";
    document.getElementById(menuID_menuPart_Stock).style.display = "none";
    document.getElementById(menuID_menuPart_TakedownPinSet).style.display = "none";
    document.getElementById(menuID_menuPart_Trigger).style.display = "none";
    document.getElementById(menuID_menuPart_TriggerGuard).style.display = "none";

    //Gear And Accecories Part Menu
    document.getElementById(menuID_menuPart_Bipod).style.display = "none";
    document.getElementById(menuID_menuPart_FrontSight).style.display = "none";
    document.getElementById(menuID_menuPart_MLOKandKeymodRail).style.display = "none";
    document.getElementById(menuID_menuPart_OpticSight).style.display = "none";
    document.getElementById(menuID_menuPart_RearSight).style.display = "none";
    document.getElementById(menuID_menuPart_Scope).style.display = "none";
    document.getElementById(menuID_menuPart_VerticalGrip).style.display = "none";

    //Additional Part
    document.getElementById(menuID_menuPart_Warden).style.display = "none";
    document.getElementById(menuID_menuPart_MlokForBipod).style.display = "none";
    

    // Tampilkan menu yang dipilih

    //Main Menu
    if (menuID === menuID_menuMainMenu) {
        document.getElementById(menuID_menuMainMenu).style.display = "block";
        document.getElementById(menuID_menuMainMenu).style.overflow = "auto";
    }

    //Category Menu
    if (menuID === menuID_menuLowerGroupMenu) {
        document.getElementById(menuID_menuLowerGroupMenu).style.display = "flex";
        document.getElementById(menuID_menuLowerGroupMenu).style.overflow = "auto";
    }
    if (menuID === menuID_menuUpperGroupMenu) {
        document.getElementById(menuID_menuUpperGroupMenu).style.display = "flex";
        document.getElementById(menuID_menuUpperGroupMenu).style.overflow = "auto";
    }
    if (menuID === menuID_menuGearAndAccecoriesMenu) {
        document.getElementById(menuID_menuGearAndAccecoriesMenu).style.display = "flex";
        document.getElementById(menuID_menuGearAndAccecoriesMenu).style.overflow = "auto";
    }

    //Upper Part Menu
    if (menuID === menuID_menuPart_Barel) {
        document.getElementById(menuID_menuPart_Barel).style.display = "flex";
        document.getElementById(menuID_menuPart_Barel).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_BoltCarrierGroup) {
        document.getElementById(menuID_menuPart_BoltCarrierGroup).style.display = "flex";
        document.getElementById(menuID_menuPart_BoltCarrierGroup).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_ChargingHandle) {
        document.getElementById(menuID_menuPart_ChargingHandle).style.display = "flex";
        document.getElementById(menuID_menuPart_ChargingHandle).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_EjectionPortCover) {
        document.getElementById(menuID_menuPart_EjectionPortCover).style.display = "flex";
        document.getElementById(menuID_menuPart_EjectionPortCover).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_ForwardAssistsAssembly) {
        document.getElementById(menuID_menuPart_ForwardAssistsAssembly).style.display = "flex";
        document.getElementById(menuID_menuPart_ForwardAssistsAssembly).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_HandguardRailSystem) {
        document.getElementById(menuID_menuPart_HandguardRailSystem).style.display = "flex";
        document.getElementById(menuID_menuPart_HandguardRailSystem).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_MuzzleDevice) {
        document.getElementById(menuID_menuPart_MuzzleDevice).style.display = "flex";
        document.getElementById(menuID_menuPart_MuzzleDevice).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_UpperReceiver) {
        document.getElementById(menuID_menuPart_UpperReceiver).style.display = "flex";
        document.getElementById(menuID_menuPart_UpperReceiver).style.overflow = "auto";
    }

    //Lower Part Menu
    if (menuID === menuID_menuPart_BoltCatch) {
        document.getElementById(menuID_menuPart_BoltCatch).style.display = "flex";
        document.getElementById(menuID_menuPart_BoltCatch).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_BufferAndSpringKit) {
        document.getElementById(menuID_menuPart_BufferAndSpringKit).style.display = "flex";
        document.getElementById(menuID_menuPart_BufferAndSpringKit).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_BufferTube) {
        document.getElementById(menuID_menuPart_BufferTube).style.display = "flex";
        document.getElementById(menuID_menuPart_BufferTube).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_EndPlate) {
        document.getElementById(menuID_menuPart_EndPlate).style.display = "flex";
        document.getElementById(menuID_menuPart_EndPlate).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_LowerReceiver) {
        document.getElementById(menuID_menuPart_LowerReceiver).style.display = "flex";
        document.getElementById(menuID_menuPart_LowerReceiver).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_Magazine) {
        document.getElementById(menuID_menuPart_Magazine).style.display = "flex";
        document.getElementById(menuID_menuPart_Magazine).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_MagazineRelease) {
        document.getElementById(menuID_menuPart_MagazineRelease).style.display = "flex";
        document.getElementById(menuID_menuPart_MagazineRelease).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_PistolGrip) {
        document.getElementById(menuID_menuPart_PistolGrip).style.display = "flex";
        document.getElementById(menuID_menuPart_PistolGrip).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_Safety) {
        document.getElementById(menuID_menuPart_Safety).style.display = "flex";
        document.getElementById(menuID_menuPart_Safety).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_Stock) {
        document.getElementById(menuID_menuPart_Stock).style.display = "flex";
        document.getElementById(menuID_menuPart_Stock).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_TakedownPinSet) {
        document.getElementById(menuID_menuPart_TakedownPinSet).style.display = "flex";
        document.getElementById(menuID_menuPart_TakedownPinSet).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_Trigger) {
        document.getElementById(menuID_menuPart_Trigger).style.display = "flex";
        document.getElementById(menuID_menuPart_Trigger).style.overflow = "auto";
    }
    if (menuID === menuID_menuPart_TriggerGuard) {
        document.getElementById(menuID_menuPart_TriggerGuard).style.display = "flex";
        document.getElementById(menuID_menuPart_TriggerGuard).style.overflow = "auto";
    }


    //Gear And Accecories Menu
    //Bipod
    if (menuID === menuID_menuPart_Bipod) {
        document.getElementById(menuID_menuPart_Bipod).style.display = "flex";
        document.getElementById(menuID_menuPart_Bipod).style.overflow = "auto";
    }

    //Front Sight
    if (menuID === menuID_menuPart_FrontSight) {
        document.getElementById(menuID_menuPart_FrontSight).style.display = "flex";
        document.getElementById(menuID_menuPart_FrontSight).style.overflow = "auto";
    }

    //MLOK and Keymod Rail
    if (menuID === menuID_menuPart_MLOKandKeymodRail) {
        document.getElementById(menuID_menuPart_MLOKandKeymodRail).style.display = "flex";
        document.getElementById(menuID_menuPart_MLOKandKeymodRail).style.overflow = "auto";
    }

    //Optic Sight
    if (menuID === menuID_menuPart_OpticSight) {
        document.getElementById(menuID_menuPart_OpticSight).style.display = "flex";
        document.getElementById(menuID_menuPart_OpticSight).style.overflow = "auto";
    }
    
    //Rear Sight
    if (menuID === menuID_menuPart_RearSight) {
        document.getElementById(menuID_menuPart_RearSight).style.display = "flex";
        document.getElementById(menuID_menuPart_RearSight).style.overflow = "auto";
    }
    
    //Scope
    if (menuID === menuID_menuPart_Scope) {
        document.getElementById(menuID_menuPart_Scope).style.display = "flex";
        document.getElementById(menuID_menuPart_Scope).style.overflow = "auto";
    }
    
    //Vertical Grip
    if (menuID === menuID_menuPart_VerticalGrip) {
        document.getElementById(menuID_menuPart_VerticalGrip).style.display = "flex";
        document.getElementById(menuID_menuPart_VerticalGrip).style.overflow = "auto";
    }

    //Additional Part
    if (menuID === menuID_menuPart_Warden) {
        document.getElementById(menuID_menuPart_Warden).style.display = "flex";
        document.getElementById(menuID_menuPart_Warden).style.overflow = "auto";
    }

    //Additional Part
    if (menuID === menuID_menuPart_MlokForBipod) {
    document.getElementById(menuID_menuPart_MlokForBipod).style.display = "flex";
    document.getElementById(menuID_menuPart_MlokForBipod).style.overflow = "auto";
    }
}

//main menu
//item upper group
document.getElementById("buttonKeMenuUpperGroup").addEventListener("click", function() {
    menuID = menuID_menuUpperGroupMenu;
    menuController();
});

// item lower group
document.getElementById("buttonKeMenuLowerGroup").addEventListener("click", function() {
    menuID = menuID_menuLowerGroupMenu;
    menuController();
});

// item gear and part accecories
document.getElementById("buttonKeMenuGearAndAccecories").addEventListener("click", function() {
    menuID = menuID_menuGearAndAccecoriesMenu;
    menuController();
});

//back button
document.getElementById("backButtonLowerMenu").addEventListener("click", function() {
    menuID = menuID_menuMainMenu;
    menuController();
});

//back button
document.getElementById("backButtonUpperMenu").addEventListener("click", function() {
    menuID = menuID_menuMainMenu;
    menuController();
});

//back button
document.getElementById("backButtonGearMenu").addEventListener("click", function() {
    menuID = menuID_menuMainMenu;
    menuController();
});


/* Menu Upper Part*/
//Barrel
//ke menu Part Barrel
document.getElementById("button_menuPart_Barrel").addEventListener("click", function() {
    menuID = menuID_menuPart_Barel;
    menuController();
});

//back button
document.getElementById("backButton_BarelMenu").addEventListener("click", function() {
    menuID = menuID_menuUpperGroupMenu;
    menuController();
});

//Bolt Carrier Group
//ke menu Part Bolt Carrier Group
document.getElementById("button_menuPart_BoltCarrierGroup").addEventListener("click", function() {
    menuID = menuID_menuPart_BoltCarrierGroup;
    menuController();
});

//back button
document.getElementById("backButton_BoltCarrierGroupMenu").addEventListener("click", function() {
    menuID = menuID_menuUpperGroupMenu;
    menuController();
});

//Charging Handle
//ke menu Part Charging Handle
document.getElementById("button_menuPart_ChargingHandle").addEventListener("click", function() {
    menuID = menuID_menuPart_ChargingHandle;
    menuController();
});

//back button
document.getElementById("backButton_ChargingHandle").addEventListener("click", function() {
    menuID = menuID_menuUpperGroupMenu;
    menuController();
});

//Ejection Port Cover
//ke menu Part Ejection Port Cover
document.getElementById("button_menuPart_EjectionPortCover").addEventListener("click", function() {
    menuID = menuID_menuPart_EjectionPortCover;
    menuController();
});

//back button
document.getElementById("backButton_EjectionPortCoverMenu").addEventListener("click", function() {
    menuID = menuID_menuUpperGroupMenu;
    menuController();
});

//Forward Assists Assembly
//ke menu Part Forward Assists Assembly
document.getElementById("button_menuPart_ForwardAssistsAssembly").addEventListener("click", function() {
    menuID = menuID_menuPart_ForwardAssistsAssembly;
    menuController();
});

//back button
document.getElementById("backButton_ForwardAssistMenu").addEventListener("click", function() {
    menuID = menuID_menuUpperGroupMenu;
    menuController();
});

//Handguard Rail System
//ke menu Part Handguard Rail System
document.getElementById("button_menuPart_HandguardRailSystem").addEventListener("click", function() {
    menuID = menuID_menuPart_HandguardRailSystem;
    menuController();
});

//back button
document.getElementById("backButton_HandguardRailSystem").addEventListener("click", function() {
    menuID = menuID_menuUpperGroupMenu;
    menuController();
});

//Muzzle Device
//ke menu Part Muzzle Device
document.getElementById("button_menuPart_MuzzleDevice").addEventListener("click", function() {
    menuID = menuID_menuPart_MuzzleDevice;
    menuController();
});

//back button
document.getElementById("backButton_MuzzleDevice").addEventListener("click", function() {
    menuID = menuID_menuUpperGroupMenu;
    menuController();
});

//Upper Receiver
//ke menu Part Upper Receiver
document.getElementById("button_menuPart_UpperReceiver").addEventListener("click", function() {
    menuID = menuID_menuPart_UpperReceiver;
    menuController();
});

//back button
document.getElementById("backButton_UpperReceiver").addEventListener("click", function() {
    menuID = menuID_menuUpperGroupMenu;
    menuController();
});

/* Lower Receiver Group */
//Bolt Catch
//ke menu Part Bolt Catch
document.getElementById("button_menuPart_BoltCatch").addEventListener("click", function() {
    menuID = menuID_menuPart_BoltCatch;
    menuController();
});

//back button
document.getElementById("backButton_BoltCatch").addEventListener("click", function() {
    menuID = menuID_menuLowerGroupMenu;
    menuController();
});

//Buffer Spring Kit
//ke menu Part Buffer Spring Kit
document.getElementById("button_menuPart_BufferSpringKit").addEventListener("click", function() {
    menuID = menuID_menuPart_BufferAndSpringKit;
    menuController();
});

//back button
document.getElementById("backButton_BufferAndSpring").addEventListener("click", function() {
    menuID = menuID_menuLowerGroupMenu;
    menuController();
});

//Buffer Tube
//ke menu Part Buffer Tube
document.getElementById("button_menuPart_BufferTube").addEventListener("click", function() {
    menuID = menuID_menuPart_BufferTube;
    menuController();
});

//back button
document.getElementById("backButton_BufferTube").addEventListener("click", function() {
    menuID = menuID_menuLowerGroupMenu;
    menuController();
});

//End Plate
//ke menu Part End Plate
document.getElementById("button_menuPart_EndPlate").addEventListener("click", function() {
    menuID = menuID_menuPart_EndPlate;
    menuController();
});

//back button
document.getElementById("backButton_EndPlate").addEventListener("click", function() {
    menuID = menuID_menuLowerGroupMenu;
    menuController();
});

//Lower Receiver
//ke menu Part Lower Receiver
document.getElementById("button_menuPart_LowerReceiver").addEventListener("click", function() {
    menuID = menuID_menuPart_LowerReceiver;
    menuController();
});

//back button
document.getElementById("backButton_LowerReceiver").addEventListener("click", function() {
    menuID = menuID_menuLowerGroupMenu;
    menuController();
});

//Magazine
//ke menu Part Magazine
document.getElementById("button_menuPart_Magazine").addEventListener("click", function() {
    menuID = menuID_menuPart_Magazine;
    menuController();
});

//back button
document.getElementById("backButton_Magazine").addEventListener("click", function() {
    menuID = menuID_menuLowerGroupMenu;
    menuController();
});

//Magazine Release
//ke menu Part Magazine Release
document.getElementById("button_menuPart_MagazineRelease").addEventListener("click", function() {
    menuID = menuID_menuPart_MagazineRelease;
    menuController();
});

//back button
document.getElementById("backButton_MagazineRelease").addEventListener("click", function() {
    menuID = menuID_menuLowerGroupMenu;
    menuController();
});

//Pistol Grip
//ke menu Part Pistol Grip
document.getElementById("button_menuPart_PistolGrip").addEventListener("click", function() {
    menuID = menuID_menuPart_PistolGrip;
    menuController();
});

//back button
document.getElementById("backButton_PistolGrip").addEventListener("click", function() {
    menuID = menuID_menuLowerGroupMenu;
    menuController();
});

//Safety
//ke menu Part Safety
document.getElementById("button_menuPart_Safety").addEventListener("click", function() {
    menuID = menuID_menuPart_Safety;
    menuController();
});

//back button
document.getElementById("backButton_Safety").addEventListener("click", function() {
    menuID = menuID_menuLowerGroupMenu;
    menuController();
});

//Stock
//ke menu Part Stock
document.getElementById("button_menuPart_Stock").addEventListener("click", function() {
    menuID = menuID_menuPart_Stock;
    menuController();
});

//back button
document.getElementById("backButton_Stock").addEventListener("click", function() {
    menuID = menuID_menuLowerGroupMenu;
    menuController();
});

//Takedown Pin Set
//ke menu Part Takedown Pin Set
document.getElementById("button_menuPart_TakedownPinSet").addEventListener("click", function() {
    menuID = menuID_menuPart_TakedownPinSet;
    menuController();
});

//back button
document.getElementById("backButton_TakeDownPinSet").addEventListener("click", function() {
    menuID = menuID_menuLowerGroupMenu;
    menuController();
});

//Trigger
//ke menu Part Trigger
document.getElementById("button_menuPart_Trigger").addEventListener("click", function() {
    menuID = menuID_menuPart_Trigger;
    menuController();
});

//back button
document.getElementById("backButton_Trigger").addEventListener("click", function() {
    menuID = menuID_menuLowerGroupMenu;
    menuController();
});

//Trigger Guard
//ke menu Part Trigger Guard
document.getElementById("button_menuPart_TriggerGuard").addEventListener("click", function() {
    menuID = menuID_menuPart_TriggerGuard;
    menuController();
});

//back button
document.getElementById("backButton_TriggerGuard").addEventListener("click", function() {
    menuID = menuID_menuLowerGroupMenu;
    menuController();
});

/* Gear And Accecories Part */

//Bipod
//ke menu Part Bipod
document.getElementById("button_menuPart_Bipod").addEventListener("click", function() {
    menuID = menuID_menuPart_Bipod;
    menuController();
});

//back button
document.getElementById("backButton_Bipod").addEventListener("click", function() {
    menuID = menuID_menuGearAndAccecoriesMenu;
    menuController();
});

//Front Sight
//ke menu Part Front Sight
document.getElementById("button_menuPart_FrontSight").addEventListener("click", function() {
    menuID = menuID_menuPart_FrontSight;
    menuController();
});

//back button
document.getElementById("backButton_FrontSight").addEventListener("click", function() {
    menuID = menuID_menuGearAndAccecoriesMenu;
    menuController();
});

//MLOK and Keymod Rail
//ke menu Part MLOK and Keymod Rail
document.getElementById("button_menuPart_MlokAndKeymodRail").addEventListener("click", function() {
    menuID = menuID_menuPart_MLOKandKeymodRail;
    menuController();
});

//back button
document.getElementById("backButton_MlokAndKeymodRail").addEventListener("click", function() {
    menuID = menuID_menuGearAndAccecoriesMenu;
    menuController();
});

//Optic Sight
//ke menu Part MLOK and Keymod Rail
document.getElementById("button_menuPart_OpticSight").addEventListener("click", function() {
    menuID = menuID_menuPart_OpticSight;
    menuController();
});

//back button
document.getElementById("backButton_OpticSight").addEventListener("click", function() {
    menuID = menuID_menuGearAndAccecoriesMenu;
    menuController();
});

//Rear Sight
//ke menu Part MLOK and Keymod Rail
document.getElementById("button_menuPart_RearSight").addEventListener("click", function() {
    menuID = menuID_menuPart_RearSight;
    menuController();
});

//back button
document.getElementById("backButton_RearSight").addEventListener("click", function() {
    menuID = menuID_menuGearAndAccecoriesMenu;
    menuController();
});

//Scope
//ke menu Part MLOK and Keymod Rail
document.getElementById("button_menuPart_Scope").addEventListener("click", function() {
    menuID = menuID_menuPart_Scope;
    menuController();
});

//back button
document.getElementById("backButton_Scope").addEventListener("click", function() {
    menuID = menuID_menuGearAndAccecoriesMenu;
    menuController();
});

//Vertical Grip
//ke menu Part MLOK and Keymod Rail
document.getElementById("button_menuPart_VerticalGrip").addEventListener("click", function() {
    menuID = menuID_menuPart_VerticalGrip;
    menuController();
});

//back button
document.getElementById("backButton_VerticalGrip").addEventListener("click", function() {
    menuID = menuID_menuGearAndAccecoriesMenu;
    menuController();
});

//Additional Part
//ke menu Warden
document.getElementById("buttonKeMenuWarden_muzzleDevice001001").addEventListener("click", function() {
    menuID = menuID_menuPart_Warden;
    menuController();
});

document.getElementById("buttonKeMenuWarden_muzzleDevice001002").addEventListener("click", function() {
    menuID = menuID_menuPart_Warden;
    menuController();
});

//back button
document.getElementById("backButton_Warden").addEventListener("click", function() {
    menuID = menuID_menuPart_MuzzleDevice;
    menuController();
});

//ke menu mlok for bipod
document.getElementById("buttonKeMenuMlokForBipod_bipod001001").addEventListener("click", function() {
    menuID = menuID_menuPart_MlokForBipod;
    menuController();
});

//back button
document.getElementById("backButton_MlokForBipod").addEventListener("click", function() {
    menuID = menuID_menuPart_Bipod;
    menuController();
});

// Fungsi untuk mengubah nilai menuID
function setMenuID(newMenuID) {
    menuID = newMenuID;
}