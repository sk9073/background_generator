
const form = document.querySelector('.signup-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(form.username.value);
});

// testing RegEx

const username = 'siva kumaran';
const pattern = /^[a-z]{6,}$/; //atleast 6 char

 let result = pattern.test(username); //returns a boolean

if(result){
   console.log('regex test passed :)');
 } else {
   console.log('regex test failed :(');
 }

 result = username.search(pattern);

console.log(result); //returns the index where it finds a match like this