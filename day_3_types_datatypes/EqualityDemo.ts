// EqualityDemo.ts
// Demonstrates the difference between == and === in TypeScript/JavaScript

const a = '1';
const b = 1;
const objA: Record<string, unknown> = {};
const objB: Record<string, unknown> = {};

console.log("'1' == 1", a == b, "\t'1' === 1", a === b);
console.log("0 == false", 0 == false, "\t0 === false", 0 === false);
console.log("null == undefined", null == undefined, "\tnull === undefined", null === undefined);
console.log("objA == objB", objA == objB, "\tobjA === objB", objA === objB);
console.log("NaN == NaN", NaN == NaN, "\tNaN === NaN", NaN === NaN, "\tObject.is(NaN, NaN)", Object.is(NaN, NaN));
console.log("-0 === 0", -0 === 0, "\tObject.is(-0, 0)", Object.is(-0, 0));

// Common idiom: check for both null and undefined
let x: string | null | undefined = undefined;
console.log('x == null', x == null, '\tx === null', x === null);

x = null;
console.log('x == null (when null)', x == null, '\tx === null', x === null);

// Use cases: prefer === for clarity and safety

export {};
