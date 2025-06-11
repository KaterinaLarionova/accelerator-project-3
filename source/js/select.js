import './vendor/slimselect.min.js';

document.addEventListener('DOMContentLoaded', () => {
  new window.SlimSelect({
    select: '#city',
    settings: {
      showSearch: false,
      allowDeselect: false,
      placeholderText: '',
      openPosition: 'down',
    },
  });
});
