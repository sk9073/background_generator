// type conversion
let score = '100';

score = Number(score);
console.log(score + 1);
console.log(typeof score);

 let result = Number('hello');
result = String(50);
console.log(result, typeof result);

result = Boolean(100);
console.log(result, typeof result);

result = Boolean(0);
console.log(result, typeof result);

result = Boolean('0');
console.log(result, typeof result);

result = Boolean('');
console.log(result, typeof result);