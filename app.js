//practice with IIFEs
(function (lastName) {
  
  var firstName = 'John';
  console.log(firstName);
  console.log(lastName);

}('Doe'));

var firstName = 'Jane';
console.log(firstName);

//practice with require() function
// var greet = require('./greet.js');
// greet();

// pass by value
// function change(b) {
//   b = 2;
// }

// var a = 1;
// change(a);
// console.log(a);

// function changeObj(d) {
//   d.prop1 = function() {};
//   d.prop2 = {};
// }

// var c = {};
// c.prop1 = {};
// changeObj(c);
// console.log(c);