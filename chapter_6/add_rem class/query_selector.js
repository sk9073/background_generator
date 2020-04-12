const content = document.querySelectorAll('p');

let x = '';
content.forEach(p => {
  x = p.innerText;
  if(x.includes('error')){
    p.classList.add('error');
  } else if(x.includes('success')) {
    p.classList.add('success');
  }

});

const paras = document.querySelectorAll('p');

paras.forEach(p => {
  if(p.textContent.includes('error')){
    p.classList.add('error');
  } else if(p.textContent.includes('success')) {
    p.classList.add('success');
  }
});

//toggle method

const title =document.querySelector('.title'); //if the query does not have the class it adds it , if it has , it removers it
title.classList.toggle('test');