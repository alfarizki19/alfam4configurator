document.addEventListener('DOMContentLoaded', function () {
  const sideMenu = document.getElementById('sideMenu');
  const buttonOpen = document.getElementById('buttonOpenSideMenu');
  const buttonClose = document.getElementById('buttonCloseSideMenu');
  const contentArea = document.getElementById('sideMenuContentArea');

  // Fungsi buka side menu
  function openSideMenu() {
    sideMenu.classList.add('active');
  }

  // Fungsi tutup side menu
  function closeSideMenu() {
    sideMenu.classList.remove('active');
  }

  // Event buka side menu dari tombol
  buttonOpen.addEventListener('click', openSideMenu);

  // Event tutup side menu dari tombol close
  buttonClose.addEventListener('click', closeSideMenu);

  // Event klik pada overlay (sideMenu) untuk tutup side menu
  sideMenu.addEventListener('click', function () {
    closeSideMenu();
  });

  // Cegah klik di dalam content area memicu penutupan side menu
  contentArea.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});