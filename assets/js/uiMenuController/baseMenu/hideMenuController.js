document.addEventListener('DOMContentLoaded', () => {
  const mainArea = document.getElementById('mainArea');

  const openButton = document.getElementById('menuAreaHeaderButtonOpenMenuItem');
  const hideButton = document.getElementById('menuAreaHeaderButtonHideMenuItem');
  const closeHideButton = document.getElementById('menuAreaHeaderButtonCloseHideMenuItem');

  // Set default state
  mainArea.classList.add('menu-open');

  // Menu tertutup dari kondisi terbuka
  hideButton?.addEventListener('click', () => {
    mainArea.classList.remove('menu-open');
    mainArea.classList.add('menu-closed');
  });

  // Menu terbuka dari kondisi tertutup (tombol open)
  openButton?.addEventListener('click', () => {
    mainArea.classList.remove('menu-closed');
    mainArea.classList.add('menu-open');
  });

  // Menu terbuka dari kondisi tertutup (tombol close-hide)
  closeHideButton?.addEventListener('click', () => {
    mainArea.classList.remove('menu-closed');
    mainArea.classList.add('menu-open');
  });
});
