// Type/DataType in TypeScript

/* Primitive types
    - number
    - string
    - boolean
    - null
    - undefined
    - symbol
    - void
    - any
    - union types

   Non-primitive types
    - arrays
    - tuples
    - functions
    - interfaces
    - class
*/

// Number
let age: number = 25;
let price: number = 19.99;
let bigInt: bigint = 9007199254741991n;

console.log("Number:", age, price, bigInt);
console.log("Type of age:", typeof age);
console.log("Type of price:", typeof price);
console.log("Type of bigInt:", typeof bigInt);

// String
let firstName: string = "John";
let lastName: string = 'Doe';
let greeting: string = `Hello, ${firstName} ${lastName}!`;

console.log("String:", firstName, lastName, greeting);
console.log("Type of firstName:", typeof firstName);
console.log("Type of lastName:", typeof lastName);
console.log("Type of greeting:", typeof greeting);

// Boolean
let isActive: boolean = true;
let isCompleted: boolean = false;

console.log("Boolean:", isActive, isCompleted);
console.log("Type of isActive:", typeof isActive);
console.log("Type of isCompleted:", typeof isCompleted);

// Null and Undefined
let emptyValue: null = null;
let notAssigned: undefined = undefined;

console.log("Null:", emptyValue);
console.log("Undefined:", notAssigned);
console.log("Type of emptyValue:", typeof emptyValue);
console.log("Type of notAssigned:", typeof notAssigned);

// Any
// looses type safety
let randomValue: any = 42;
console.log("Any (number):", randomValue);
randomValue = "Now I'm a string";
console.log("Any (string):", randomValue);
randomValue = true;
console.log("Any (boolean):", randomValue);

// Union Types
let multiType: number | string;
multiType = 10;
console.log("Union Type (number):", multiType);
multiType = "Ten";
console.log("Union Type (string):", multiType);

// Void
function printMessage(): void {
    console.log("This is a void function.");
}
printMessage();

function logMessage(message: string): void {
    console.log("Void function message:", message);
}
logMessage("This is a log message.");

function sum(a: number, b: number): number {
    return a + b;
}
console.log("Sum function:", sum(5, 10));
let result: number = sum(20, 30);
console.log("Result of sum function:", result);



