// Declaring a tuple
let person: [string, number, boolean] = ["Alice", 30, true];
console.log("Tuple:", person);
console.log("Tuple - Name:", person[0]);
console.log("Tuple - Age:", person[1]);
console.log("Tuple - Is Employed:", person[2]);
console.log()

// Modifying tuple values
person[1] = 31;
console.log("Updated Tuple:", person);

// Iteration examples
console.log();
console.log("Iteration with for..of:");
for (const value of person) {
	console.log(value);
}

console.log();
console.log("Iteration with index (for loop):");
for (let i = 0; i < person.length; i++) {
	console.log(`Index ${i}:`, person[i]);
}

console.log();
console.log("Iteration with forEach():");
person.forEach((val, idx) => console.log(`Index ${idx}:`, val));

// Example: array of tuples and destructuring iteration
console.log();
const contacts: [string, string][] = [
	["Bob", "555-1234"],
	["Carol", "555-5678"]
];
console.log("Destructuring tuples in for..of:");
for (const [name, phone] of contacts) {
	console.log(name, "->", phone);
}

console.log();
console.log("Iteration with for..in (indexes):");
for (const idx in person) {
	console.log(`Index ${idx}:`, person[idx as any]);
}

console.log();
console.log("Iteration using values() iterator:");
for (const value of person.values()) {
	console.log(value);
}

console.log();

// Array of tuples (e.g., product and quantity)
const inventory: [string, number][] = [
	["Apples", 10],
	["Bananas", 5],
	["Oranges", 12]
];
console.log("Tuple array (inventory):", inventory);
console.log("Iterating tuple array with destructuring:");
for (const [item, qty] of inventory) {
	console.log(`${item}: ${qty}`);
}

// Demonstrate adding a new tuple
inventory.push(["Pears", 7]);
console.log("After push:", inventory);

console.log()
console.log(inventory[0])
console.log()
let tp=inventory[0]
console.log(tp[0])
console.log(tp[1])
