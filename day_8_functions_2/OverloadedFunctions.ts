/* 
    Overloaded Functions in TypeScript
    Function overloading allows you to define multiple signatures for a function.
    This enables the function to handle different types or numbers of arguments.
*/

/*
    Syntex:
    function functionName(param1: type1): returnType;
    function functionName(param1: type2, param2: type3): returnType;
    function functionName(param1: type1 | type2, param2?: type3): returnType {
        // function implementation
    }


    -> way to declare overloaded functions in TypeScript
    step 1: declare multiple function signatures
    step 2: provide a single implementation that handles all cases
*/

// Function Overloading Example
function combine(input1: string, input2: string): string;
function combine(input1: number, input2: number): number;
function combine(input1: string, input2: number): string;
function combine(input1: number, input2: string): string;
function combine(input1: string | number, input2: string | number): string | number {
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + ' ' + input2; // Concatenate strings with space
    } else if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2; // Sum numbers
    } else {
        return input1.toString() + input2.toString(); // Convert both to string and concatenate
    }
}

// Usage of overloaded function
console.log(combine("Hello", "World")); // Output: "Hello World"
console.log(combine(10, 20));           // Output: 30
console.log(combine("Age: ", 25));      // Output: "Age: 25"
console.log(combine(100, " Dollars"));   // Output: "100 Dollars"

// Testing the types of the return values
let combinedString: string = combine("TypeScript", "Functions");
let combinedNumber: number = combine(5, 15);
let mixedCombination1: string = combine("Score: ", 100);
let mixedCombination2: string = combine(50, " points");
console.log("Combined String:", combinedString);
console.log("Combined Number:", combinedNumber);
console.log("Mixed Combination 1:", mixedCombination1);
console.log("Mixed Combination 2:", mixedCombination2);

// The following line would cause a TypeScript error due to type mismatch
// let invalidCombination: boolean = combine(true, false); // Error: No overload matches this call
// Uncommenting the above line will result in a compilation error, demonstrating type safety with overloaded functions.

// example with different number of parameters
function greet(name: string): string;
function greet(name: string, age: number): string;
function greet(name: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age} years old.`;
    } else {
        return `Hello, ${name}.`;
    }
}
// Usage of overloaded greet function
console.log(greet("Alice"));           // Output: "Hello, Alice."
console.log(greet("Bob", 30));         // Output: "Hello, Bob. You are 30 years old."

// example with different return types
function getValue(flag: true): string;
function getValue(flag: false): number;
function getValue(flag: boolean): string | number {
    if (flag) {
        return "You passed true";
    } else {
        return 0;
    }
}
// Usage of overloaded getValue function
let value1: string = getValue(true);   // Output: "You passed true"
let value2: number = getValue(false);  // Output: 0
console.log("Value when true:", value1);
console.log("Value when false:", value2);

// End of OverloadedFunctions.ts