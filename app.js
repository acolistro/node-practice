//Playing with the require function and objects
var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();

greet3.greeting = 'Changed hello world';

var greet3b = require('./greet3');
greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();


//practice with require() function
// var greet = require('./greet');
// greet.english(); 
// greet.spanish(); 

//practice with IIFEs
// (function (lastName) {
  
//   var firstName = 'John';
//   console.log(firstName);
//   console.log(lastName);

// }('Doe'));

// var firstName = 'Jane';
// console.log(firstName);


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