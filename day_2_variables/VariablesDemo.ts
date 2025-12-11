// variables can be declared using var, let, or const

// Using var (function-scoped)
var globalVar = "I am a global variable";
function varExample() {
    var localVar = "I am a local variable";
    console.log(localVar); // Accessible here
}
varExample();
console.log(globalVar); // Accessible here
// console.log(localVar); // Error: localVar is not defined
// Using let (block-scoped)
let blockVar = "I am a block-scoped variable";
if (true) {
    let innerBlockVar = "I am inside a block";
    console.log(innerBlockVar); // Accessible here
}
console.log(blockVar); // Accessible here
// console.log(innerBlockVar); // Error: innerBlockVar is not defined
// Using const (block-scoped and cannot be reassigned)
const constantVar = "I am a constant variable";
console.log(constantVar); // Accessible here
// constantVar = "Trying to change"; // Error: Assignment to constant variable
const innerConstVar = "I am inside a block";
if (true) {
    const innerConstVar = "I am inside a block";
    console.log(innerConstVar); // Accessible here
}
// console.log(innerConstVar); // Error: innerConstVar is not defined
// Summary:
// - Use var for function-scoped variables (less common in modern TypeScript).
// - Use let for block-scoped variables that may change.
// - Use const for block-scoped variables that should not be reassigned.

// Note: Always prefer let and const over var for better scoping and to avoid hoisting issues.

// Scope
// Declaration/Initialization
// Re declaration
// Re-initialization/Re-assignment
// Hoisting

// var -> function scope
// let -> block scope
// const -> block scope, cannot be reassigned
// var can be re-declared and re-assigned
// let can be re-assigned but not re-declared
// const cannot be re-assigned or re-declared
// All variables declared with var, let, and const are hoisted, but only var is initialized with undefined. let and const are not initialized.

// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
// This means that a variable can be used before it has been declared.
// However, only var variables are initialized with undefined during hoisting. let and const variables remain uninitialized until their declaration is evaluated.
// This can lead to a "temporal dead zone" for let and const, where accessing the variable before its declaration results in a ReferenceError.
// Example of hoisting with var, let, and const:

// Example of hoisting
// console.log(hoistedVar); // Outputs: undefined
var hoistedVar = "I am hoisted";
// console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am not hoisted";
// console.log(hoistedConst); // Error: Cannot access 'hoistedConst' before initialization
const hoistedConst = "I am not hoisted";
console.log(hoistedConst); // Outputs: I am not hoisted

// Best Practices:
// - Prefer const for variables that won't change.
// - Use let for variables that will change.
// - Avoid using var to prevent scope-related issues.

// End of VariablesDemo.ts