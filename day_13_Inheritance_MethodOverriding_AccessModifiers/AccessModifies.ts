/**
 * TypeScript access modifiers examples
 * - public (default): accessible anywhere
 * - private: accessible only inside the declaring class
 * - protected: accessible in the declaring class and subclasses
 * - readonly: can be assigned only at declaration or in constructor
 * - static: belongs to the class, not the instance
 * - ECMAScript private (#): enforced at runtime too
 */

class Person {
	public name: string; // public (explicit)
	private ssn: string; // private
	protected salary: number; // protected
	readonly id: number; // readonly
	static readonly species = 'Homo sapiens'; // static

	constructor(name: string, id: number, ssn: string, salary: number) {
		this.name = name;
		this.id = id;
		this.ssn = ssn;
		this.salary = salary;
	}

	public getName(): string {
		return this.name;
	}

	// Access private field inside the class
	public getSSNMasked(): string {
		return this.ssn.slice(0, 3) + '-***-****';
	}

	// Protected method - available to subclasses
	protected getSalary(): number {
		return this.salary;
	}
}

class Employee extends Person {
	private department: string;

	constructor(name: string, id: number, ssn: string, salary: number, department: string) {
		super(name, id, ssn, salary);
		this.department = department;
	}

	// Subclass can access protected members
	public getAnnualSalary(): number {
		return this.getSalary() * 12;
	}

	public describe(): string {
		// Can't access `ssn` directly because it's private to Person
		// return `SSN: ${this.ssn}`; // Error if uncommented

		// Can access protected `salary` and public `name`
		return `${this.name} works in ${this.department} and earns ${this.salary} per month.`;
	}
}

// ECMAScript private field (runtime-enforced)
class SecretHolder {
	#secret: string;
	constructor(secret: string) {
		this.#secret = secret;
	}
	reveal() {
		return `Secret: ${this.#secret}`;
	}
}

// Parameter properties shorthand example
class Student {
	constructor(
		public name: string,
		private grade: number,
		protected age: number,
		readonly studentId: number
	) {}

	public getGrade() {
		return this.grade;
	}
}

// Usage examples
const p = new Person('Alice', 1, '123-45-6789', 5000);
console.log(p.getName()); // Alice
console.log(p.getSSNMasked()); // 123-***-****
console.log(Person.species); // Homo sapiens

const e = new Employee('Bob', 2, '987-65-4321', 6000, 'Engineering');
console.log(e.describe()); // Bob works in Engineering ...
console.log('Annual salary:', e.getAnnualSalary());

const s = new SecretHolder('my-secret');
console.log(s.reveal()); // Secret: my-secret

const st = new Student('Charlie', 95, 20, 101);
console.log(st.name); // public is accessible
console.log(st.getGrade()); // 95

// Examples of things that will error if uncommented:
// p.ssn; // Error: 'ssn' is private
// p.salary; // Error: 'salary' is protected
// p.id = 10; // Error: Cannot assign to 'id' because it is a read-only property
// s.#secret; // Syntax/runtime error

