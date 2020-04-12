  
const article = document.querySelector('article');
console.log(article.children); //html collection

console.log(Array.from(article.children));//now its an array

Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
  });

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling); //we get null coz there is no previous sibling

//chaining

console.log(title.nextElementSibling.parentElement.children);
  