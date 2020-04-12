const adds = document.querySelector('.add');
const list = document.querySelector('.todos');  
const search = document.querySelector('.search input');

const generateTemp = function(todo)
{
const html = `
<li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
</li>
`;
list.innerHTML += html;
}


adds.addEventListener('submit',e =>{
    e.preventDefault();
    const todo = adds.add.value.trim();   // removes white spaces
    if(todo.length){
    generateTemp(todo);}
    adds.reset();
});

list.addEventListener('click',e =>{

    if(e.target.classList.contains('delete'))
    {
       e.target.parentElement.remove();
    }

});
const filterTodos = term => {

    // add filtered class
    Array.from(list.children)
      .filter(todo => !todo.textContent.toLowerCase().includes(term))
      .forEach(todo => todo.classList.add('filtered'));
  
    // remove filtered class
    Array.from(list.children)
      .filter(todo => todo.textContent.toLowerCase().includes(term))
      .forEach(todo => todo.classList.remove('filtered'));
  
  };


// filter todos event
search.addEventListener('keyup', () => {

    const term = search.value.trim().toLowerCase();
    filterTodos(term);
  
  });
