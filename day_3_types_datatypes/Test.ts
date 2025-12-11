// Ts is a statically typed language
// let data = 100
let data: number = 100
// data = "Hello, TypeScript!" // This will cause a compile-time type error
console.log(data)
console.log(typeof data)

//Type Safety - Yes
let messagee: string = "Hello, World!";
let countt: number = 30
let result = messagee + countt
console.log(result);

// Annotations
// Annotation is the process of explicitly declaring types for variables, function parameters, and return values in TypeScript.
let username: string = "JohnDoe";
let isLoggedIn: boolean = true;
let scores: number[] = [95, 85, 76];
let user: { id: number; name: string } = { id: 1, name: "John" };

// Type Inference
// TypeScript can automatically infer types based on the assigned values.
// let age = 25; // inferred as number
// let greeting = "Hello!"; // inferred as string
// let isActive = false; // inferred as boolean
console.log(typeof age, typeof greeting, typeof isActive);

// Union Types
let mixed: string | number;
mixed = "A string value";
console.log(mixed);
mixed = 42;
console.log(mixed);
// mixed = true; // This will cause a compile-time type error
console.log(mixed);
