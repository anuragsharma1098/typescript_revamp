/* 
    An Array is a collection of items stored at contiguous memory locations.
    It allows you to store multiple values in a single variable.
*/

// Declaring an array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Array of numbers:", numbers);
console.log()

// Declaring an array of strings
let fruits: string[] = ["Apple", "Banana", "Cherry"];
console.log("Array of strings:", fruits);

//using generic array type
let empName: Array<String> = ["John", "Jack", "Jill"];
let empID: Array<number> = [102, 102, 103];
let mixData: Array<any> = [1, "Alex", true, null]
console.log()
console.log(empName)
console.log(empID)
console.log(mixData)
console.log()

// Declaring a mixed array using union types
let mixedArray: (number | string | boolean)[] = [1, "Two", true, 3, "Four", false];
console.log("Mixed array:", mixedArray);
let randomValue: any = 10;;
console.log("Any (number):", randomValue);
randomValue = "Now I'm a string";
console.log("Any (string):", randomValue);
randomValue = false;
console.log("Any (boolean):", randomValue);
console.log()
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
console.log()

let arr: number[] = [64, 83, 90, 56, 73, 23, 34]
function search(ele: number, arr: number[]): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return true
        }
    }
}
console.log(search(90, arr))
console.log()

function capitalizeWords(arr: string[]): string[] {
    let result: string[] = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i].toUpperCase();
    }
    return result
}
let word: string[] = ["Hello", "World", "TypeScript"]
console.log(capitalizeWords(word))

// Iterating over an array
console.log("Iterating over numbers array:");
for (let num of numbers) {
    console.log(num);
}
console.log()
console.log("Iterating over fruits array:");
for (let fruit of fruits) {
    console.log(fruit);
}
console.log()
console.log("Iterating over EMP NAMES using for loop")
for (let ind = 0; ind < empName.length; ind++) {
    console.log(empName[ind])
}
console.log()
console.log("Iterating over EMP ID using in")
for (let ids in empID) {
    console.log(empID[ids])
}
console.log()
console.log("Iterating over MIXED DATA using for...of")
for (let value of mixData)
    console.log(value)
console.log()

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
console.log()

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

