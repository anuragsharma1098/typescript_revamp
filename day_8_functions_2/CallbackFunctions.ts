/* 
    A callback function is a function that is passed as an argument to another function
    and is executed after some operation has been completed. Callback functions are commonly
    used for asynchronous operations, event handling, and functional programming.
*/

// Example 1: 
function greeet(name: string, callback: (message: string) => void): void {
    const message = `Hello, ${name}!`;
    callback(message);
}

function showMessage(message: string): void {
    console.log("Message:", message);
}

greeet("Hello World!", showMessage);

// Example 2:
function sumNumber(a: number, b: number, callback: (result: number) => void) {
    const result = a + b;
    callback(result);
}

function displayResult(result: number): void {
    console.log("Result:", result);
}
sumNumber(5, 10, displayResult);
