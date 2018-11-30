const searchInput = document.getElementById('search__form-input')
searchInput.addEventListener('input', () => searchInput.style.color = 'black');

function notEmptyValidation() {
  return searchInput.value.trim() !== '';
}
var browse_tab = document.getElementById("browse_tab");
browse_tab.className = "header_app_content orange-background hover_lightOrange";