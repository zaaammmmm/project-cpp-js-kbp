// Quiz: Buktikan bahwa nilai tersebut telah benar2 menjadi tipe data boolean!

const number = 123;
const string = 'Dicoding';
const empty = null;

const boolFromNumber = Boolean(number);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber); // true
console.log(boolFromString); // true
console.log(boolFromNull);   // false

// Memeriksa tipe data
console.log(typeof boolFromNumber); // "boolean"
console.log(typeof boolFromString);  // "boolean"
console.log(typeof boolFromNull);    // "boolean"
