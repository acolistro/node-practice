//practice with constructors and superconstructors
var EventEmitter = require('events');
var util = require('util');

function Greetr() {
  this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function() {
  console.log(this.greeting);
  this.emit('greet');
}

var greeter1 = new Greetr();

greeter1.on('greet', function() {
  console.log('Someone greeted');
});

greeter1.greet();


//practice with Object.create
// var person = {
//   firstname: '',
//   lastname: '',
//   greet: function() {
//     return this.firstname + ' ' + this.lastname;
//   }
// }

// var john = Object.create(person);
// john.firstname = 'John';
// john.lastname = 'Doe';

// var jane = Object.create(person);
// jane.firstname = 'Jane';
// jane.lastname = 'Doe';

// console.log(john.greet());
// console.log(jane.greet());

//practice with emitters
// var Emitter = require('events');
// var eventConfig = require('./config').events;

// var emtr = new Emitter();

// emtr.on(eventConfig.GREET, function() {
//   console.log('Somewhere, someone said hello.');
// });

// emtr.on(eventConfig.GREET, function() {
//   console.log('A greeting happened.');
// });

// console.log('Hello!');
// emtr.emit(eventConfig.GREET);



//object properties and methods
// var obj = {
//   greet: 'Hello'
// }

// console.log(obj.greet);
// console.log(obj['greet']);
// var prop = 'greet';
// console.log(obj[prop]);

//functions and arrays
// var arr = [];

// arr.push(function() {
//   console.log('Hello world 1');
// });

// arr.push(function() {
//   console.log('Hello world 2');
// });

// arr.push(function() {
//   console.log('Hello world 3');
// });

// arr.forEach(function(item) {
//   item();
// });

//utilities feature core module
// var util = require('util');

// var name = 'Lester';
// var greeting = util.format('Hello, %s', name);
// util.log(greeting);

//exports v module.exports
// var greet = require('./greet1');
// var greet2 = require('./greet2');

// greet2.greet();

//Playing with the require function and objects
// var greet = require('./greet1');
// greet();

// var greet2 = require('./greet2').greet;
// greet2();

// var greet3 = require('./greet3');
// greet3.greet();

// greet3.greeting = 'Changed hello world';

// var greet3b = require('./greet3');
// greet3b.greet();

// var Greet4 = require('./greet4');
// var grtr = new Greet4();
// grtr.greet();

// var greet5 = require('./greet5').greet;
// greet5();



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