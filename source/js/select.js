import './vendor/slimselect.min.js';

let formSelect = null;
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

  new window.SlimSelect({
    select: '#popup-city',
    settings: {
      showSearch: false,
      allowDeselect: false,
      placeholderText: '',
      openPosition: 'down',
    },
  });
});

export {formSelect};
