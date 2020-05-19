exports.greet = function() {
  console.log('Hello');
}

console.log(exports);
console.log(module.exports);

// module.exports.greet = function() {
//   console.log('Hello world!');
// };