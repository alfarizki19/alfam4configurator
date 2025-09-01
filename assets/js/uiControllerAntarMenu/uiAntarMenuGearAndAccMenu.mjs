// uiAntarMenuGearAndAccMenu.js
// Gear and Accessories Menu Controller for M4 Rifle Builder

import { mainMenuID, gearPartMenuID, closeAllMenu, openMenu, setMenuOpenedID } from './uiAntarMenuMainController.mjs';

// Gear and accessories menu navigation event listeners

//Bipod
document.getElementById("button_menuPart_Bipod").addEventListener("click", function() {
    setMenuOpenedID(gearPartMenuID.menuPart_Bipod);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButton_Bipod").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuGearAndAccecoriesMenu);
    closeAllMenu();
    openMenu();
});

//Front Sight
document.getElementById("button_menuPart_FrontSight").addEventListener("click", function() {
    setMenuOpenedID(gearPartMenuID.menuPart_FrontSight);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButton_FrontSight").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuGearAndAccecoriesMenu);
    closeAllMenu();
    openMenu();
});

//Laser Sight
document.getElementById("button_menuPart_LaserSight").addEventListener("click", function() {
    setMenuOpenedID(gearPartMenuID.menuPart_LaserSight);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButton_LaserSight").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuGearAndAccecoriesMenu);
    closeAllMenu();
    openMenu();
});

//MLOK and Keymod Rail
document.getElementById("button_menuPart_MlokAndKeymodRail").addEventListener("click", function() {
    setMenuOpenedID(gearPartMenuID.menuPart_MLOKandKeymodRail);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButton_MlokAndKeymodRail").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuGearAndAccecoriesMenu);
    closeAllMenu();
    openMenu();
});

//Optic Sight
document.getElementById("button_menuPart_OpticSight").addEventListener("click", function() {
    setMenuOpenedID(gearPartMenuID.menuPart_OpticSight);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButton_OpticSight").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuGearAndAccecoriesMenu);
    closeAllMenu();
    openMenu();
});

//Rear Sight
document.getElementById("button_menuPart_RearSight").addEventListener("click", function() {
    setMenuOpenedID(gearPartMenuID.menuPart_RearSight);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButton_RearSight").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuGearAndAccecoriesMenu);
    closeAllMenu();
    openMenu();
});

//Scope
document.getElementById("button_menuPart_Scope").addEventListener("click", function() {
    setMenuOpenedID(gearPartMenuID.menuPart_Scope);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButton_Scope").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuGearAndAccecoriesMenu);
    closeAllMenu();
    openMenu();
});

//Vertical Grip
document.getElementById("button_menuPart_VerticalGrip").addEventListener("click", function() {
    setMenuOpenedID(gearPartMenuID.menuPart_VerticalGrip);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButton_VerticalGrip").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuGearAndAccecoriesMenu);
    closeAllMenu();
    openMenu();
});
