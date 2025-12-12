// named function
/* A named function is a function that has a specific name assigned to it.
    This name can be used to reference the function within its own body for recursion
    or to call the function from other parts of the code.

    Named functions are defined using the function keyword followed by the function name,
    a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces.

Syntax:
function functionName(parameter1: type, parameter2: type, ...): returnType {
    // function body
    return value;
}

// calling the function
functionName(arg1, arg2, ...);

*/

// named function without parameters and return type void

function displayMessage(): void {
    console.log("Hello from the named function!");
}
console.log()
displayMessage()

// named function with parameters and return type number

function addNumbers(x: number, y: number): number {
    return x + y;
}
let totalSum = addNumbers(12, 67)
console.log()
console.log("Total Sum", totalSum)

// named function with rest parameters and return type number

function multiplyNumbers(...numbers: number[]): number {
    // return numbers.reduce((acc, curr) => acc * curr, 1);
    let product = 1;
    for (let num of numbers) {
        product *= num;
    }
    return product;
}
let product = multiplyNumbers(2, 3, 56);
console.log()
console.log("Product:", product);

// named function with rest parameters of multiple values with multiple types

function concatenateValues(...values: (string | number)[]): string {
    return values.join(", ");
    // return values.length;
}
let concatenatedResult = concatenateValues("Hello", 42, "World", 3.14);
console.log()
console.log("Concatenated Result:", concatenatedResult);

//named function with optional parameters
function displayUser(id: number, name: string, mailid?: string): void {
    console.log("ID:", id);
    console.log("Name:", name);
    console.log("Mail ID:", mailid);
    // console.log("Mail ID:", mailid ?? "Not Provided");
    // if (mailid) {
    //     console.log("Mail ID:", mailid);
    // }
}
console.log()
displayUser(1,"Jerry")
console.log()
displayUser(2, "Alice", "alice@example.com")
console.log()
displayUser(3, "Bob", undefined)

// named function with default parameters
function calculateArea(length: number, width: number = 10): number {
    return length * width;
}
let area1 = calculateArea(5);
let area2 = calculateArea(5, 20);
console.log()
console.log("Area with default width:", area1);
console.log("Area with specified width:", area2);