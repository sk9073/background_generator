const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
const li = document.createElement('li');
li.textContent = 'something new to do';
ul.appendChild(li);
//ul.prepend(li);
});           //('name of the event',call_back_function)

 const items = document.querySelectorAll('li');
items.forEach(item => {
    item.addEventListener('click', e => {
      // e.target.style.textDecoration = 'line-through';
      e.target.remove();
    });
  });