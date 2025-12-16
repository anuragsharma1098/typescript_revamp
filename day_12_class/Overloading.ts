// methods overloading and constructor overloading

class Calculation {
    constructor(); // default constructor
    constructor(a: number, b: number); // parameterized constructor

    constructor(a?: number, b?: number) {
        if (a !== undefined && b !== undefined) {
            console.log("Sum = ", (a + b))
        } else {
            console.log("Default Constructor Called")
        }
    }
    // method overloading
    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;

    add(a: number, b: number, c?: number): number {
        if (c !== undefined) {
            return a + b + c
        }
        return a + b
    }
}
console.log("Constructor Overloading")
let caculation1 = new Calculation();
let caculation2 = new Calculation(2, 5);
console.log()
console.log("Method Overloading")
console.log("Sum: ",caculation1.add(6,9));
console.log("Sum: ",caculation2.add(5,7,9))