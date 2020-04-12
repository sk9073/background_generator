// return statements

// const speak = function(name, time){
//   console.log(`good ${time}, ${name}!`);
// };

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;  // return 3.14*radius**2;
  }
  
  const area = calcArea(5);
  console.log('area is:', area);