//using time stamps
const before = new Date("February 1 2019 7:30:58");
const now = new Date();

console.log(now.getTime(),before.getTime());

const diff = now.getTime() - before.getTime();
// const diff = now - before;

console.log(diff);
const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(`the before date was ${mins} mins ago`);
console.log(`the before date was ${hours} hours ago`);
console.log(`the before date was ${days} days ago`);


// converting timestamps to dates
const timestamp = 1675938474990;
console.log(new Date(timestamp));