// uiSummaryEditPartGearAndAcc.js
// Summary Edit Part Gear and Accessories Controller for M4 Rifle Builder

import { gearPartMenuID, additionalPartMenuID, closeAllMenu, openMenu, setMenuOpenedID } from '../uiControllerAntarMenu/uiAntarMenuMainController.js';
import { closeModal_Summary } from './uiSummaryController.js';

// Summary edit part gear and accessories navigation event listeners

//Bipod
document.getElementById("summaryItemsButton_bipod00100101").addEventListener("click", function() {
    setMenuOpenedID(gearPartMenuID.menuPart_Bipod);
    closeModal_Summary();
    closeAllMenu();
    openMenu();
});

//Front Sight
document.getElementById("summaryItemsButton_frontSight00100101").addEventListener("click", function() {
    setMenuOpenedID(gearPartMenuID.menuPart_FrontSight);
    closeModal_Summary();
    closeAllMenu();
    openMenu();
});

document.getElementById("summaryItemsButton_frontSight00200101").addEventListener("click", function() {
    setMenuOpenedID(gearPartMenuID.menuPart_FrontSight);
    closeModal_Summary();
    closeAllMenu();
    openMenu();
});

//MLOK and Keymod Rail
document.getElementById("summaryItemsButton_mlokAndKeymodRail00100101").addEventListener("click", function() {
    setMenuOpenedID(gearPartMenuID.menuPart_MLOKandKeymodRail);
    closeModal_Summary();
    closeAllMenu();
    openMenu();
});

document.getElementById("summaryItemsButton_mlokAndKeymodRail00200101").addEventListener("click", function() {
    setMenuOpenedID(gearPartMenuID.menuPart_MLOKandKeymodRail);
    closeModal_Summary();
    closeAllMenu();
    openMenu();
});

//Mlok for Bipod
document.getElementById("summaryItemsButton_mlokAndKeymodRail00100101_forBipod").addEventListener("click", function() {
    setMenuOpenedID(additionalPartMenuID.menuPart_MlokForBipod);
    closeModal_Summary();
    closeAllMenu();
    openMenu();
});

document.getElementById("summaryItemsButton_mlokAndKeymodRail00200101_forBipod").addEventListener("click", function() {
    setMenuOpenedID(additionalPartMenuID.menuPart_MlokForBipod);
    closeModal_Summary();
    closeAllMenu();
    openMenu();
});

//Optic Sight
document.getElementById("summaryItemsButton_opticSight00100101").addEventListener("click", function() {
    setMenuOpenedID(gearPartMenuID.menuPart_OpticSight);
    closeModal_Summary();
    closeAllMenu();
    openMenu();
});

//Rear Sight
document.getElementById("summaryItemsButton_rearSight00100101").addEventListener("click", function() {
    setMenuOpenedID(gearPartMenuID.menuPart_RearSight);
    closeModal_Summary();
    closeAllMenu();
    openMenu();
});

document.getElementById("summaryItemsButton_rearSight00200101").addEventListener("click", function() {
    setMenuOpenedID(gearPartMenuID.menuPart_RearSight);
    closeModal_Summary();
    closeAllMenu();
    openMenu();
});

