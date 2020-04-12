const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', e => {
const li = document.createElement('li');
li.textContent = 'something new to do';
ul.prepend(li);
e.stopPropagation();//  Event wont be bubbling up till ul and so on to the body
}); 

  // const items = document.querySelectorAll('li');
  // items.forEach(item => {
  //     item.addEventListener('click', e => {
  //       // e.target.style.textDecoration = 'line-through';
  //       e.target.remove();
  //     });
  //   });


  //event delegation

  ul.addEventListener('click', e => {
    // console.log('event in UL');
    console.log(e.target, e);
    if(e.target.tagName === 'LI'){
      e.target.remove();
    }
  });