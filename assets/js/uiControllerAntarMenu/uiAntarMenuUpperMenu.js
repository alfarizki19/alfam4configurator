// uiAntarMenuUpperMenu.js
// Upper Menu Controller for M4 Rifle Builder

import { mainMenuID, upperPartMenuID, closeAllMenu, openMenu, setMenuOpenedID } from './uiAntarMenuMainController.js';

// Upper menu navigation event listeners

//Barrel
document.getElementById("button_menuPart_Barrel").addEventListener("click", function() {
    setMenuOpenedID(upperPartMenuID.menuPart_Barel);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButton_BarelMenu").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuUpperGroupMenu);
    closeAllMenu();
    openMenu();
});

//Bolt Carrier Group
document.getElementById("button_menuPart_BoltCarrierGroup").addEventListener("click", function() {
    setMenuOpenedID(upperPartMenuID.menuPart_BoltCarrierGroup);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButton_BoltCarrierGroupMenu").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuUpperGroupMenu);
    closeAllMenu();
    openMenu();
});

//Charging Handle
document.getElementById("button_menuPart_ChargingHandle").addEventListener("click", function() {
    setMenuOpenedID(upperPartMenuID.menuPart_ChargingHandle);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButton_ChargingHandle").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuUpperGroupMenu);
    closeAllMenu();
    openMenu();
});

//Ejection Port Cover
document.getElementById("button_menuPart_EjectionPortCover").addEventListener("click", function() {
    setMenuOpenedID(upperPartMenuID.menuPart_EjectionPortCover);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButton_EjectionPortCoverMenu").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuUpperGroupMenu);
    closeAllMenu();
    openMenu();
});

//Forward Assists Assembly
document.getElementById("button_menuPart_ForwardAssistsAssembly").addEventListener("click", function() {
    setMenuOpenedID(upperPartMenuID.menuPart_ForwardAssistsAssembly);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButton_ForwardAssistMenu").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuUpperGroupMenu);
    closeAllMenu();
    openMenu();
});

//Handguard Rail System
document.getElementById("button_menuPart_HandguardRailSystem").addEventListener("click", function() {
    setMenuOpenedID(upperPartMenuID.menuPart_HandguardRailSystem);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButton_HandguardRailSystem").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuUpperGroupMenu);
    closeAllMenu();
    openMenu();
});

//Muzzle Device
document.getElementById("button_menuPart_MuzzleDevice").addEventListener("click", function() {
    setMenuOpenedID(upperPartMenuID.menuPart_MuzzleDevice);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButton_MuzzleDevice").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuUpperGroupMenu);
    closeAllMenu();
    openMenu();
});

//Upper Receiver
document.getElementById("button_menuPart_UpperReceiver").addEventListener("click", function() {
    setMenuOpenedID(upperPartMenuID.menuPart_UpperReceiver);
    closeAllMenu();
    openMenu();
});

//back button
document.getElementById("backButton_UpperReceiver").addEventListener("click", function() {
    setMenuOpenedID(mainMenuID.menuUpperGroupMenu);
    closeAllMenu();
    openMenu();
});
