const name = 'shaun';

// function

const greet = () => {
  return 'hello';
};

let resultOne = greet();
console.log(resultOne);

// method

let resultTwo = name.toUpperCase(); // name.greet does not work ,even after adding parameters;
console.log(resultTwo);