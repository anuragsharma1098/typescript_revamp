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
console.log("||||||||||||||||||||||||||||||||||||||||||||")


// 2. Inline Type Object - we also define the datatype of the keys (TS)

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


