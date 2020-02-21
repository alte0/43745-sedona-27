/**
 * Переключает класс у node
 * @param {Node} el
 * @param {string} classSwitch
 */
function switchClassForEl(el, classSwitch) {
  el.classList.toggle(classSwitch);
}
/**
 * Очишает от пробелов
 * @param {void} value
 */
function clearDataSpace(value) {
  return value.trim();
}
/**
 * Выполнение действий, после завершения загрузки DOM
 */
function loadedDom() {
  var isStorageSupport = true;
  try {
    storagCountPeople = localStorage.getItem("countPeople");
    storageCountChildren = localStorage.getItem("countChildren");
  } catch (err) {
    isStorageSupport = false;
  }
  var btnToggle = document.body.querySelector('.feature-footer__button');
  var searchForm = document.body.querySelector('.form-search-hotels');
  var dateStartInput = searchForm.querySelector('#date-start');
  var dateEndInput = searchForm.querySelector('#date-end');
  var countPeople = searchForm.querySelector('#count-people');
  var countChildren = searchForm.querySelector('#count-children');

  switchClassForEl(searchForm, 'form-search-hotels_close');

  btnToggle.addEventListener('click', function() {
    switchClassForEl(searchForm, 'form-search-hotels_close');

    if (!searchForm.classList.contains('form-search-hotels_close')) {
      dateStartInput.focus();
      countPeople.value = storagCountPeople;
      countChildren.value = storageCountChildren;
    }
  });

  searchForm.addEventListener('submit', function (evt) {
    var valueDateStart = clearDataSpace(dateStartInput.value);
    var valueDateEndInput = clearDataSpace(dateEndInput.value);
    var valueCountPeople = clearDataSpace(countPeople.value);
    var valueCountChildren = clearDataSpace(countChildren.value);

    if (!valueDateStart || !valueDateEndInput || !valueCountPeople || !valueCountChildren) {
      evt.preventDefault();
      searchForm.classList.remove('form-search-hotels_error');
      searchForm.offsetWidth = searchForm.offsetWidth;
      searchForm.classList.add('form-search-hotels_error');
      return;
    }

    if (isStorageSupport) {
      localStorage.setItem('countPeople', valueCountPeople);
      localStorage.setItem('countChildren', valueCountChildren);
    }
  })
}

document.addEventListener('DOMContentLoaded', loadedDom)
