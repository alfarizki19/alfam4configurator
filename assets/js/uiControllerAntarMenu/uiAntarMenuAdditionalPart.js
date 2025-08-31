// uiAntarMenuAdditionalPart.js
// Additional Part Menu Controller for M4 Rifle Builder

import { upperPartMenuID, gearPartMenuID, additionalPartMenuID, closeAllMenu, openMenu, setMenuOpenedID } from '../uiControllerAntarMenu/uiAntarMenuMainController.js';

// Additional part menu navigation event listeners

//Warden
document.getElementById("buttonKeMenuWarden_muzzleDevice001001").addEventListener("click", function() {
    setMenuOpenedID(additionalPartMenuID.menuPart_Warden);
    closeAllMenu();
    openMenu();
});

document.getElementById("buttonKeMenuWarden_muzzleDevice001002").addEventListener("click", function() {
    setMenuOpenedID(additionalPartMenuID.menuPart_Warden);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButton_Warden").addEventListener("click", function() {
    setMenuOpenedID(upperPartMenuID.menuPart_MuzzleDevice);
    closeAllMenu();
    openMenu();
});

//Mlok for Bipod
document.getElementById("buttonKeMenuMlokForBipod_bipod001001").addEventListener("click", function() {
    setMenuOpenedID(additionalPartMenuID.menuPart_MlokForBipod);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButton_MlokForBipod").addEventListener("click", function() {
    setMenuOpenedID(gearPartMenuID.menuPart_Bipod);
    closeAllMenu();
    openMenu();
});
