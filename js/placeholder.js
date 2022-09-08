const searchPlaceholderSelect = document.querySelector('.js-search-select');
const searchPlaceholderSearchInput = document.querySelector('.js-search-input');
const searchPlaceholderSortSelect = document.querySelector('.js-sort-select');
const elBookmarksBtnBox = document.querySelector('.bookmarks-btn-box');
const main = document.querySelector('.main');

var mainStatus = true;

window.onload = function(){
  mainStatus = false;
};

function placeholderRemover () {
  elBookmarksBtnBox.classList.remove('placeholder')
  searchPlaceholderSelect.classList.remove('placeholder')
  searchPlaceholderSearchInput.classList.remove('placeholder')
  searchPlaceholderSortSelect.classList.remove('placeholder')
  main.style.pointerEvents = 'auto';
}
setInterval(function () {
  if (mainStatus === false) {
      placeholderRemover();
  }
} , 1100);