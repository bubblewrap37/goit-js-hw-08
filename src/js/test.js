//import throttle = require("lodash.throttle");

// console.log('log-1');
// setTimeout(() => {
//   console.log('log-2');
// }, 1000);
// console.log('log-3');
// console.log('log-4');
// setTimeout(() => {
//   console.log('log-5');
// }, 1);
// console.log('log-6');
// console.log('log-7');
// console.log('log-8');

let interval;

interval = setInterval(() => {
  console.log('wiadomosc z interwalu');
}, 1000);
console.log(interval);
