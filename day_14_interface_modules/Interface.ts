// Interface examples: properties, optional, readonly, index signature, function type, extension

// Basic interface with optional and readonly properties
interface Person {
	readonly id: number;
	name: string;
	age?: number; // optional
	greet(): string;
	[propName: string]: any; // index signature for extra props
}

// Function type interface
interface StringFormatter {
	(input: string): string;
}

// Extending interfaces
interface Employee extends Person {
	role: string;
}

// Class implementing an interface
class User implements Person {
	readonly id: number;
	constructor(public name: string, id: number, public age?: number) {
		this.id = id;
	}
	greet() {
		return `Hello, I'm ${this.name}`;
	}
}

// Usage examples
const alice: Person = { id: 1, name: 'Alice', age: 30, greet() { return 'Hi'; }, extra: 'allowed' };
const bob = new User('Bob', 2);

const employee: Employee = { id: 3, name: 'Carol', role: 'Manager', greet() { return 'Hey'; } };

const upperCase: StringFormatter = (s) => s.toUpperCase();

console.log(alice.name, alice.greet());
console.log(bob.name, bob.greet());
console.log(employee.name, employee.role);
console.log(upperCase('hello'));

