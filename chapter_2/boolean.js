  
// booleans & comparisons

console.log(true, false, 'true', 'false');

// methods can return booleans

let email = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

let result = email.includes('@');
let result1 = names.includes('luigi');

console.log(result);
console.log(result1);

let name = 'shaun';

console.log(name == 'shaun');
console.log(name == 'Shaun');
console.log(name > 'crystal');
console.log(name > 'Shaun');
console.log(name > 'Crystal');


let age = 25;

// loose comparison (different types can still be equal)
console.log('loose');
 console.log(age == 25);
 console.log(age == '25');
 console.log(age != 25);
 console.log(age != '25');

// strict comparison (different types cannot be equal)
console.log('strict');
console.log(age === 25);
 console.log(age === '25');
  console.log(age !== 25);
console.log(age !== '25');