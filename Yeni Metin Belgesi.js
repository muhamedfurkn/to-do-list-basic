const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

form.addEventListener('submit', event => {
  event.preventDefault();

  const todo = input.value;
  input.value = '';

  const item = document.createElement('li');
  item.innerHTML = `
    <input type="checkbox">
    <label>${todo}</label>
  `;

  list.appendChild(item);
});

list.addEventListener('click', event => {
  if (event.target.matches('input[type="checkbox"]')) {
    event.target.parentElement.classList.toggle('completed');
  }
});
