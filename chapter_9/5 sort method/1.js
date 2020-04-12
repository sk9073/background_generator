const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

names.sort(); //destructive  ascending
//names.reverse();
console.log(names)

//example 2

const scores = [10, 50, 20, 5, 35, 70, 45]; 

scores.sort((a,b) => b -a); //just looks at the first number
//scores.reverse();
console.log(scores);

// example 3 - sorting objects
const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70},
    {name: 'shaun', score: 90}
  ];


//   players.sort((a,b) => {         //a and b represents two consecutive elements on the array
//     console.log('1');
//   if(a.score > b.score){
//     return -1;                  //compare btwn 20 & 10 , we need 20 to come first
//   } else if (b.score > a.score){
//     return 1;                   
//   } else {
//     return 0;
//   }

//   });

  players.sort((a,b) => b.score - a.score);

  console.log(players);