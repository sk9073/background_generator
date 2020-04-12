const now = new Date();

console.log(datefns.isToday(now));

// formatting options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd, Do MMMM, YYYY'));

// comparing dates
console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));