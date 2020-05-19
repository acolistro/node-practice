//revealing module pattern
var greeting = 'Hello world!!!!!';

function greet() {
  console.log(greeting);

}

module.exports = {
  greet: greet
}