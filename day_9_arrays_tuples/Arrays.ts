/* 
    An Array is a collection of items stored at contiguous memory locations.
    It allows you to store multiple values in a single variable.
*/

// Declaring an array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Array of numbers:", numbers);

// Declaring an array of strings
let fruits: string[] = ["Apple", "Banana", "Cherry"];
console.log("Array of strings:", fruits);

// Declaring a mixed array using union types
let mixedArray: (number | string | boolean)[] = [1, "Two", true, 3, "Four", false];
console.log("Mixed array:", mixedArray);
let randomValue: any = 10;;
console.log("Any (number):", randomValue);
randomValue = "Now I'm a string";
console.log("Any (string):", randomValue);
randomValue = false;
console.log("Any (boolean):", randomValue);
// Declaring a union-typed variable used below
let multiType: number | string = 10;
console.log("Union type (number):", multiType);
console.log("Union type (string):", multiType);
multiType = "Hello TypeScript";
console.log("Union type (string):", multiType);
console.log("Union type (number):", multiType);
multiType = "Hello TypeScript";
console.log("Union type (string):", multiType);
console.log("Union type (number):", multiType);
console.log("Union type (string):", multiType);
multiType = "Hello TypeScript";
console.log("Union type (string):", multiType);
console.log("Union type (number):", multiType);

// Declaring a tuple
let person: [string, number, boolean] = ["Alice", 30, true];
console.log("Tuple:", person);
console.log("Tuple - Name:", person[0]);
console.log("Tuple - Age:", person[1]);
console.log("Tuple - Is Employed:", person[2]);
// Modifying tuple values
person[1] = 31;
console.log("Updated Tuple:", person);

// Array methods
numbers.push(6);
console.log("After push:", numbers);
numbers.pop();
console.log("After pop:", numbers);
fruits.shift();
console.log("After shift:", fruits);
fruits.unshift("Mango");
console.log("After unshift:", fruits);
let index = fruits.indexOf("Banana");
console.log("Index of Banana:", index);
let slicedFruits = fruits.slice(0, 2);
console.log("Sliced fruits:", slicedFruits);

// Iterating over an array
console.log("Iterating over numbers array:");
for (let num of numbers) {
    console.log(num);
}
console.log("Iterating over fruits array:");
for (let fruit of fruits) {
    console.log(fruit);
}

/*
Primitive Types in TypeScript
    - number
    - string
    - boolean
    - null
    - undefined
    - any
    - union types
    - void
*/