const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  cards.forEach(card => {
    card.hidden = filter !== 'all' && !card.dataset.category.split(' ').includes(filter);
    if (!card.hidden) count++;
  });
  document.querySelector('#filter-status').textContent = `${count} projects shown.`;
}));
document.querySelector('#year').textContent = new Date().getFullYear();
