import './vendor/slimselect.min.js';

let formSelect = null;
let popupSelect = null;

document.addEventListener('DOMContentLoaded', () => {
  formSelect = new window.SlimSelect({
    select: '#city',
    settings: {
      showSearch: false,
      allowDeselect: false,
      placeholderText: '',
      openPosition: 'down',
    },
  });

  popupSelect = new window.SlimSelect({
    select: '#popup-city',
    settings: {
      showSearch: false,
      allowDeselect: false,
      placeholderText: '',
      openPosition: 'down',
    },
  });
});

export {formSelect, popupSelect};
