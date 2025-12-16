/*
    1.class
    2. read only properties
    3. optional properties
    4. Static properties and methods
*/

class Student {
    /*
        - `id` is read-only once set in the constructor
        - `name` and `email` are instance properties with getters/setters
        - `schoolName` is a class-level (static) property shared by all students
    */

    // class-level school name (default can be changed for all students)
    static schoolName: string = 'Unknown School';

    constructor(
        public readonly id: number,
        private _name: string,
        private _email?: string
    ) { }

    // name getter / setter
    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if (!newName) throw new Error('Name cannot be empty');
        this._name = newName;
    }

    // email getter / setter (optional)
    get email(): string | undefined {
        return this._email;
    }

    set email(newEmail: string | undefined) {
        this._email = newEmail;
    }

    // instance method that returns student details
    getDetails(): string {
        return `Student id: ${this.id}, 
        name: ${this._name}, 
        email: ${this._email ?? 'N/A'}, 
        school: ${Student.schoolName} `;
    }
}

// Example usage
// Change the shared school name for all Student instances
Student.schoolName = 'Greenwood High';

const s1 = new Student(1, 'Anna', 'anna@example.com');
const s2 = new Student(2, 'Priya');
const s3 = new Student(1, 'Anna', 'anna@example.com');
const s4 = new Student(2, 'Priya');
console.log(s1.getDetails());
console.log(s2.getDetails());
Student.schoolName = 'GreenLand High'
console.log(s3.getDetails());
console.log(s4.getDetails());

export { Student };