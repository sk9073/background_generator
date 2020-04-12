// strings
console.log('helo,world');

//concatenation

let fname = 'siva';
let sname = ' kumaran';
let fullName = fname + sname;
console.log(fullName);

// getting individual characters
console.log(fullName[2]);

// string length <just finds its property>
console.log(fullName.length);

//string methods <it actually does somethign>

console.log(fullName.toUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result);

let email = 'mario@thenetninja.co.uk';
let index = email.indexOf('@');
console.log(index);

//common string methods
result = email.lastIndexOf('n');
console.log(result);

result = email.slice(0,10);//normal indexing
console.log(result);

result = email.substr(4,10);//(this postion,from that this many char)
console.log(result);

result = email.replace('m','w');//just replaces the first one
console.log(result);


//TEMPLATE STRING

const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;
//concatenation way

result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
 console.log(result);
 
 //template string

 result = `the blog called ${title} by ${author} has ${likes} likes`;
 console.log(result);

 //html templates

 let html = `
 <h2>${title}</h2>
 <p>By ${author}</p>
 <span>This blog has ${likes} likes</span>
`;

console.log(html);