const nativeSelect = document.getElementById('selectNative');
const customSelect = document.getElementById('selectCustom');
const customBody = customSelect.children[0];
const customOptions = customSelect.children[1];
const customOptionsList = Array.from(customOptions.children);
const optionsCount = customOptionsList.length;
const defaultLabel = customBody.getAttribute('data-value');

let optionChecked = '';
let optionHoveredIndex = -1;

customBody.addEventListener('click', () => (isSelectClosed() ? openSelect() : closeSelect()));

function isSelectClosed() {
  return !customSelect.classList.contains('active');
}

function openSelect() {
  customSelect.classList.add('active');
  customSelect.setAttribute('aria-hidden', false);

  if (optionChecked) {
    const optionCheckedIndex = customOptionsList.findIndex((item) => item.dataset.value === optionChecked);
    updateHoveredSelect(optionCheckedIndex);
  }

  document.addEventListener('click', watchClickOutside);
  document.addEventListener('keydown', keyboardNavigation);
}

function closeSelect() {
  customSelect.classList.remove('active');
  customSelect.setAttribute('aria-hidden', true);

  updateHoveredSelect(-1);

  document.removeEventListener('click', watchClickOutside);
  document.removeEventListener('keydown', keyboardNavigation);
}

function updateHoveredSelect(newIndex) {
  const prevOption = customOptions.children[optionHoveredIndex];
  const option = customOptions.children[newIndex];

  if (prevOption) {
    prevOption.classList.remove('hovered');
  }
  if (option) {
    option.classList.add('hovered');
  }

  optionHoveredIndex = newIndex;
}

function updateCheckedSelect(value, text) {
  const prevValue = optionChecked;
  const prevOption = customOptions.querySelector(`[data-value="${prevValue}"`);
  const option = customOptions.querySelector(`[data-value="${value}"`);

  if (prevOption) {
    prevOption.classList.remove('active');
  }

  if (option) {
    option.classList.add('active');
  }

  customBody.textContent = text;
  optionChecked = value;
}

function watchClickOutside(event) {
  const didClickedOutside = !customSelect.contains(event.target);

  if (didClickedOutside) {
    closeSelect();
  }
}

function keyboardNavigation(event) {
  // Стрелка вниз
  if (event.keyCode === 40 && optionHoveredIndex < optionsCount - 1) {
    event.preventDefault(); // убираем скролл страницы
    updateHoveredSelect(optionHoveredIndex + 1);
  }

  // Стрелка вверх
  if (event.keyCode === 38 && optionHoveredIndex > 0) {
    event.preventDefault(); // убираем скролл страницы
    updateHoveredSelect(optionHoveredIndex - 1);
  }

  // Enter или пробел
  if (event.keyCode === 13 || event.keyCode === 32) {
    event.preventDefault();

    const option = customOptions.children[optionHoveredIndex];
    const dataValue = option && option.dataset.value;
    const dataText = option.textContent;

    if (dataValue) {
      nativeSelect.value = dataValue;
      updateCheckedSelect(dataValue, dataText);
    }

    closeSelect();
  }

  // ESC
  if (event.keyCode === 27) {
    closeSelect();
  }
}

// Обновление значения кастомного селекта, когда меняется значение стандартного
nativeSelect.addEventListener('change', (event) => {
  const dataValue = event.target.value;
  const dataText = customOptions.querySelectorAll(`[data-value="${dataValue}"]`)[0].textContent;

  updateCheckedSelect(dataValue, dataText);
});

// Обновление кастомного селекта при клике или наведении на вариант
customOptionsList.forEach((option, index) => {
  option.addEventListener('click', (event) => {
    const dataValue = event.target.dataset.value;
    const textValue = event.target.textContent;

    nativeSelect.value = dataValue;
    updateCheckedSelect(value, textValue);
  });

  option.addEventListener('mouseenter', () => {
    updateHoveredSelect(index);
  });
});
