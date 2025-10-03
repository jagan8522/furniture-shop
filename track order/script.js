const openSearch = document.getElementById('openSearch');
const closeSearch = document.getElementById('closeSearch');
const searchOverlay = document.getElementById('searchOverlay');


if (openSearch) {
  openSearch.addEventListener('click', () => {
    searchOverlay.classList.add('show');
  });
}

if (closeSearch) {
  closeSearch.addEventListener('click', () => {
    searchOverlay.classList.remove('show');
  });
}