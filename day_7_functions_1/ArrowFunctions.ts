/* 
    Arrow/Lambda functions are a shorthand syntax for writing anonymous functions in TypeScript.
    They provide a more concise way to write functions and are particularly useful when working 
    with callbacks or when you want to preserve the context of 'this'.
*/
/* Syntex:

    let variableName = (parameters) => {
        // function body
    }   
    variableName();

    // If there is only one parameter, parentheses can be omitted
    let variableName = parameter => {
        // function body
    }
    variableName();

    // If the function body contains a single expression, 
    // you can omit the curly braces and the 'return' keyword
    let variableName = (parameters) => expression;
    variableName();
*/
// Example 1: Basic Arrow Function with no parameters and no return value
// let greet =(): void =>{}
let greetNew = () => {
    console.log("Hello, World!");
}
greetNew(); // Output: Hello, World!

// Example 2: Arrow Function with parameters and return value
let add = (a: number, b: number): number => {
    return a + b;
}
console.log("Sum:", add(5, 3)); // Output: Sum: 8

let addShort = (a: number, b: number): number => a + b;
console.log("Sum (short):", addShort(10, 7)); // Output: Sum (short): 17

// Example 3: Arrow Function with optional parameters
let multiply = (a: number, b?: number): number => {
    if (b !== undefined) {
        return a * b;
    }       
    return a * a; // If b is not provided, return square of a
}
console.log("Multiply with two params:", multiply(4, 5)); // Output: Multiply with two params: 20
console.log("Multiply with one param:", multiply(4)); // Output: Multiply with one param: 16

let displayUserr = (id: number, name: string, mailid?: string): void => {
    console.log("ID:", id);
    console.log("Name:", name);
    if (mailid) {
        console.log("Mail ID:", mailid);
    }
}
console.log();
displayUserr(1, "Alice", "alice@example.com");
console.log();
displayUserr(2, "Bob");

let calculateAreaNew = (length: number, width: number = 10): number => length * width;

let areaNew1 = calculateAreaNew(5);
let areaNew2 = calculateAreaNew(5, 20);
console.log("Area with default width:", areaNew1); // Output: Area with default width: 50
console.log("Area with provided width:", areaNew2); // Output: Area with provided width: 100

let restParameters = (...numbers: number[]): number => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of rest parameters:", restParameters(1, 2, 3, 4, 5)); // Output: Sum of rest parameters: 15

let concatenateStrings = (...strings: string[]): string => strings.join(" - ");
console.log("Concatenated Strings:", concatenateStrings("TypeScript", "is", "awesome")); 
// Output: Concatenated Strings: TypeScript - is - awesome

