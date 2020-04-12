const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {             //submit event even takes care of keyboard thing , also dont assign it to submit button but assign it to form tag
  e.preventDefault(); //To prevent the default reload that happens
  // console.log('form submitted');
  // console.log(username.value);
  console.log(form.username.value); //we dont have to always create seperate input feilds(query selector) if we already have one for the form
});