const title = document.querySelector('h1');

//title.setAttribute('style', 'margin: 50px;');// it overites the whatever style alredy present in the html

console.log(title.style);
console.log(title.style.color);

title.style.margin ='8px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';