const timesago = require("../dist/timesago");

const result1 = timesago('October 19, 2002');
console.log(result1); // 21 years ago

const result2 = timesago(1386786600000);
console.log(result2); // 9 years ago

const result3 = timesago(Date.now() - 3 * 24 * 60 * 60 * 1000);
console.log(result3); // 3 days ago

const result4 = timesago('2050-01-15T12:30:00Z');
console.log(result4); // in 26 years