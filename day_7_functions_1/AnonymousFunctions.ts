/* 
    Anonymous functions are functions that are defined without a name. 
    They are often used as arguments to other functions or assigned to variables.
    To invoke an anonymous function, 
    you typically call it immediately after its definition or assign it to a variable and then call that variable.
*/
/* Syntex:

    let variableName = function(parameters) {
        // function body
    }
    variableName();

*/

// Example 1: Assigning an anonymous function to a variable

let hlo=function(){
    console.log("Hello, World!");
}
hlo(); // Output: Hello, World!

// Example 2: Immediately Invoked Function Expression (IIFE)
//with parameters
let greet = function(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!