const searchPlaceholderSelect = document.querySelector('.js-search-select');
const searchPlaceholderSearchInput = document.querySelector('.js-search-input');
const main = document.querySelector('.main');

var mainStatus = true;

window.onload = function(){
  mainStatus = false;
};

function placeholderRemover () {
  searchPlaceholderSelect.classList.remove('placeholder')
  searchPlaceholderSearchInput.classList.remove('placeholder')
  main.style.pointerEvents = 'auto';
}
setInterval(function () {
  if (mainStatus === false) {
      placeholderRemover();
  }
} , 1100);