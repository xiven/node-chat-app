var moment = require('moment');

new Date().getTime()
var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
// date.add(100, 'year');
// console.log(date.format('MMM Do, YYYY'));

// 10:43 am current time
// use padded for mins, unpadded for hours, 1-12
console.log(date.format('h:mm a'));

