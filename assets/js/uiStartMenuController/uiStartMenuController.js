document.addEventListener("DOMContentLoaded", () => {
    // Ambil modal dan tombol
    const modalStartMenu = document.getElementById("modalStartMenu");
    const startButton = document.getElementById("buttonModalStartMenu_StartButton");

    // Tampilkan modal saat DOM siap
    modalStartMenu.classList.add("open");

    // Fungsi tutup modal
    function closeStartMenu() {
        modalStartMenu.classList.remove("open");
    }

    // Tombol START menutup modal
    startButton.addEventListener("click", closeStartMenu);
});