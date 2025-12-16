// object - object contains properties and behaviour
// object contains variables and methods
// object is a collection of key and value pairs

// Ex:

// employee -- name, designation, sal, dep
// bonus(),getempdetails, setdetails()

// student --  name, sid, grade
// get details(), setdetails()

//Different ways to create an object in JS/TS
// 1. using 'oject' type - directly define the values for variable (JS/TS)
// 2. Inline Type Object - we also define the datatype of the keys (TS)
// 3. Using type aliases (JS/TS)
// 4. Using the classes (JS/TS)

// 1. using 'oject' type - directly define the values for variable (JS/TS)
// TypeScript 'object' type represents all values that are not in primitive type.
/*
let employee: object = {
    name: "john",
    age: 30,
    salary: 50000,
    job: "engineer"

}
*/

let employee = {
    name: "john",
    age: 30,
    salary: 50000,
    job: "engineer",
    getDetails: function (): string {
        // console.log(this.name, this.age, this.job, this.salary);
        return `${this.name} ${this.age} ${this.job} ${this.salary}`;
    }
}
console.log(typeof employee);
console.log()
console.log(employee.getDetails());
console.log()

// accessing object - approach 1 (using . notation)

console.log(employee.name, "\n", employee.age, "\n", employee.job)
console.log()
console.log(employee["name"], "\n", employee["age"], "\n", employee["job"])
console.log()
employee.job = "Manager"
console.log(employee["name"], "\n", employee["age"], "\n", employee["job"])
console.log()
console.log("||||||||||||||||||||||||||||||||||||||||||||")
console.log()


// 2. Inline Type Object - we also define the datatype of the keys (TS)
// problem is need to repeat structure for every new object
let student: {
    name: string,
    age: number,
    grade: string,
    getSummary: () => string
} = {
    name: "Scott",
    age: 18,
    grade: "A",
    getSummary: function () {
        return `${this.name} ${this.age} ${this.grade}`;
    }
}
console.log(student.getSummary())
console.log()
console.log("||||||||||||||||||||||||||||||||||||||||||||")
console.log()


// 3. Using type aliases (JS/TS)
// example 1
type product = {
    name: string,
    price: number,
    getInfo: () => string
};
let book1: product = {
    name: "Learn Java",
    price: 299,
    getInfo: function () {
        return `${this.name} ${this.price}`
    }
}
let book2: product = {
    name: "Learn Python",
    price: 499,
    getInfo: function () {
        return `${this.name} ${this.price}`
    }
}
console.log(book1.getInfo())
console.log(book2.getInfo())
console.log()
console.log("||||||||||||||||||||||||||||||||||||||||||||")
console.log()

// ex 2 intersection types
type Personal = {
    name: string,
    age: number
}
type Contact = {
    email: string,
    phone: number
}
type Candidate = Personal & Contact & {
    getContactInfo: () => string;
}

let candidate: Candidate = {
    name: "Phill",
    age: 22,
    email: "phill@mail.com",
    phone: 9876543210,
    getContactInfo: function () {
        return `${this.name} ${this.age} ${this.email} ${this.phone}`
    }
}
console.log(candidate.getContactInfo())
console.log()
console.log("||||||||||||||||||||||||||||||||||||||||||||")
console.log()


// 4. Using the classes (JS ES16/TS)

class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName
    }
    getDetails(): string {
        return this.ssn + " " + this.getFullName()
    }
}
let person1 = new Person("121", "John", "Miller");
console.log(person1.getDetails())
let person2 = new Person("122", "Johnny", "Millerd");
console.log(person2.getDetails())
let person3 = new Person("123", "Johnathan", "Millers");
console.log(person3.getDetails())