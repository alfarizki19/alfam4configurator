// uiAntarMenuMainMenu.js
// Main Menu Controller for M4 Rifle Builder

import { mainMenuID, closeAllMenu, openMenu, setMenuOpenedID } from './uiAntarMenuMainController.js';

// Main menu navigation event listeners

//item upper group
document.getElementById("buttonKeMenuUpperGroup").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuUpperGroupMenu);
    closeAllMenu();
    openMenu();
});

// item lower group
document.getElementById("buttonKeMenuLowerGroup").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuLowerGroupMenu);
    closeAllMenu();
    openMenu();
});

// item gear and part accessories
document.getElementById("buttonKeMenuGearAndAccecories").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuGearAndAccecoriesMenu);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButtonLowerMenu").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuMainMenu);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButtonUpperMenu").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuMainMenu);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButtonGearMenu").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuMainMenu);
    closeAllMenu();
    openMenu();
});