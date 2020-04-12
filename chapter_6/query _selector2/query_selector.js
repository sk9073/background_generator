//get an element by an id
const title = document.getElementById('page-title');
console.log(title);

// by class name
const error= document.getElementsByClassName('error');
console.log(error[0]); // though this works ,u cant grab consecutive elements via for each

error.forEach(err => {
    console.log(err);
    
});


// get elements by their tag name
const paras = document.getElementsByTagName('p');
console.log(paras);

paras.forEach(err => {
    console.log(err);
    
});

// we cannot use for each method on html collection , unlike node list