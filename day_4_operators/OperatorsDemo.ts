let a:number = 10, b:number = 20;

// Arithmetic Operators
console.log("Addition: " + (a + b));
console.log("Subtraction: " + (b - a));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (b / a));
console.log("Modulus: " + (b % a));
console.log("Exponentiation: " + (a ** 2));

// Assignment Operators
let c:number = a;
console.log("Initial value of c: " + c);
c += b;
console.log("After c += b: " + c);
c -= a;
console.log("After c -= a: " + c);
c *= 2;
console.log("After c *= 2: " + c);
c /= 2;
console.log("After c /= 2: " + c);
c %= 3;
console.log("After c %= 3: " + c);
c **= 2;
console.log("After c **= 2: " + c);

// Comparison Operators
console.log("a == b: " + (a == b));
console.log("a != b: " + (a != b));
console.log("a === b: " + (a === b));
console.log("a !== b: " + (a !== b));
console.log("a > b: " + (a > b));
console.log("a < b: " + (a < b));
console.log("a >= b: " + (a >= b));
console.log("a <= b: " + (a <= b));

// Logical Operators
let x:boolean = true, y:boolean = false;
console.log("x && y: " + (x && y));
console.log("x || y: " + (x || y));
console.log("!x: " + (!x));
console.log("!y: " + (!y));

// Increment and Decrement Operators
let d:number = 5;
console.log("Initial value of d: " + d);
console.log("Post-increment d++: " + (d++));    
console.log("Value of d after post-increment: " + d);
console.log("Pre-increment ++d: " + (++d));     
console.log("Value of d after pre-increment: " + d);
console.log("Post-decrement d--: " + (d--));    
console.log("Value of d after post-decrement: " + d);
console.log("Pre-decrement --d: " + (--d));     
console.log("Value of d after pre-decrement: " + d);

// Ternary Operator
let max:number = (a > b) ? a : b;
console.log("Maximum of a and b using ternary operator: " + max);
let personAge:number = 18;
let eligibility:string = (personAge >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log("Voting eligibility using ternary operator: " + eligibility);

// Bitwise Operators
console.log("a & b: " + (a & b));
console.log("a | b: " + (a | b));
console.log("a ^ b: " + (a ^ b));
console.log("~a: " + (~a));
console.log("a << 2: " + (a << 2));
console.log("a >> 2: " + (a >> 2));
console.log("a >>> 2: " + (a >>> 2));