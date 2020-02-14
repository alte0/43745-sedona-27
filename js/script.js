/**
 * Переключает класс у node
 * @param {Node} el
 * @param {string} classSwitch
 */
function switchClass(el, classSwitch) {
  el.classList.toggle(classSwitch);
}

function loadedDom() {
  var searchForm = document.body.querySelector('.form-search-hotels');
  var btnToggle = document.body.querySelector('.feature-footer__button');

  switchClass(searchForm, 'form-search-hotels_close');

  if (btnToggle) {
    btnToggle.addEventListener('click', function() {
      switchClass(searchForm, 'form-search-hotels_close');
    });
  }
}

document.addEventListener('DOMContentLoaded', loadedDom)
