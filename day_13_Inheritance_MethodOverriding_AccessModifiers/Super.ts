// Demonstration: difference between `super()` and `super` in TypeScript
// - `super()` calls the base class constructor. It must be used in a derived
//   class constructor before accessing `this`.
// - `super.method()` or `super.prop` accesses methods/properties on the base
//   class's prototype (or property accessors).

class Base {
    greeting: string;
    constructor(name: string) {
        this.greeting = `Base says hello to ${name}`;
        console.log('Base constructor ran');
    }

    greet() {
        console.log(this.greeting);
    }

    get info() {
        return 'info from Base';
    }
}

// Example A: using `super()` to call the Base constructor
class DerivedUsesSuperCall extends Base {
    constructor(name: string) {
        // super() calls Base's constructor. This initializes `this`.
        super(name); // <-- super() is required here before using `this`
        console.log('DerivedUsesSuperCall constructor ran');
    }

    show() {
        // `super.greet()` calls the Base implementation of greet
        console.log('Calling super.greet():');
        super.greet();

        // `super.info` accesses the base class getter `info`
        console.log('Accessing super.info ->', super.info);
    }
}

// Example B: attempting to use `this` before `super()` would error (commented)
/*
class BrokenDerived extends Base {
    constructor(name: string) {
        // Uncommenting the next line will cause a TS error: "'this' is not allowed before super()"
        // console.log(this);
        super(name);
    }
}
*/

// Example C: using `super` to call overridden methods
class Base2 {
    say() { console.log('Base2 says hi'); }
}

class Child extends Base2 {
    say() {
        console.log('Child overrides say');
    }

    callParentSay() {
        // `super.say()` calls the parent's method even when overridden
        super.say();
    }
}

// Run the examples
console.log()
console.log('--- Example A: super() vs super.method ---');
const d = new DerivedUsesSuperCall('User');
d.show();
console.log()
console.log('\n--- Example C: overridden method, using super.say() ---');
const c = new Child();
c.say();             // Child's override
c.callParentSay();  // calls Base2.say() via super.say()

// Short summary (logged):
console.log('\nSummary:');
console.log('- `super()` = call parent constructor (use inside derived constructor).');
console.log('- `super.method()` or `super.prop` = access parent prototype methods/properties.');
