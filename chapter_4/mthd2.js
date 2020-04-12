//call back function

const myFunc = (callbackFunc) =>
{
    let value =50;
    callbackFunc(value);
}

myFunc(value =>{ console.log(value);});

myFunc(function(value){ console.log(value); });

//for each
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach //every time this thing runs , it actually passes each element of the array and its index as the parameter of function
(
    function(person,indexs)
{console.log(person,indexs);}

);

people.forEach
(person => {
       console.log(`hello ${person}`);
     });


// callbacks & forEach
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
}

// people.forEach(person => {
//   console.log(`hello ${person}`);
// });

people.forEach(logPerson);