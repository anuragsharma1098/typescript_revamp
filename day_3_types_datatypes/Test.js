// Js is dynamically typed language
let a = 10;
console.log(a); // Output: 10
console.log(typeof a); // Output: number
a = "Hello";
console.log(a); // Output: Hello
console.log(typeof a); // Output: string
a = true;
console.log(a); // Output: true
console.log(typeof a); // Output: boolean

// Type Safety - Not
let message = "Hello, World!";
let count = 30
message = count; // This will not cause any error in JavaScript
console.log(message);