/**
 * Переключает класс у node
 * @param {Node} el
 * @param {string} classSwitch
 */
function switchClassForEl(el, classSwitch) {
  el.classList.toggle(classSwitch);
}

function loadedDom() {
  var searchForm = document.body.querySelector('.form-search-hotels');
  var btnToggle = document.body.querySelector('.feature-footer__button');

  if (searchForm && btnToggle) {
    switchClassForEl(searchForm, 'form-search-hotels_close');
    btnToggle.addEventListener('click', function() {
      switchClassForEl(searchForm, 'form-search-hotels_close');
    });
  }
}

document.addEventListener('DOMContentLoaded', loadedDom)
