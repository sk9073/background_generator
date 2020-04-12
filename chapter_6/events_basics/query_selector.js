const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('u clicked me ');
});           //('name of the event',call_back_function)

const items = document.querySelectorAll('li');
items.forEach(item =>{
    item.addEventListener('click',e =>{
        console.log('item clicked');
        console.log(e);
        console.log(e.target);
        e.target.style.textDecoration = 'line-through';
    });
});