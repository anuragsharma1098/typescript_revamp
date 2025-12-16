class Car {

    name: string;
    color: string;
    model: string;

    constructor(name: string, color: string, model: string) {
        this.name = name;
        this.color = color;
        this.model = model;
    }
    start() {
        console.log("Car Started")
    }
    stop() {
        console.log("car Stopped")
    }
    displayInformation() {
        console.log(`NAME: ${this.name} 
            COLOR: ${this.color} 
            MODEL: ${this.model}`)
    }
}

class Honda extends Car {

    year: number;

    constructor(name: string, color: string, model: string, year: number) {

        super(name, color, model);
        this.year = year;
    }
    start() {
        console.log("Honda Car Started")
    }
    yom() {
        console.log(`NAME: ${this.name} 
            COLOR: ${this.color} 
            MODEL: ${this.model} 
            YOM: ${this.year}`)
    }
}

class Maruti extends Car {

    year: number;

    constructor(name: string, color: string, model: string, year: number) {

        super(name, color, model);
        this.year = year;
    }
    start() {
        console.log("Maruti Car Started")
    }
    yom() {
        console.log(`NAME: ${this.name} 
            COLOR: ${this.color} 
            MODEL: ${this.model} 
            YOM: ${this.year}`)
    }
}

let honda = new Honda("Honda", "White", "City", 2020);
console.log(honda.name)
console.log(honda.color)
console.log(honda.model)
console.log(honda.year)
honda.start()
honda.displayInformation()
honda.stop()
honda.yom()
console.log("*****************************************")
let maruti = new Maruti("Maruti", "Blue", "Baleno", 2022)
maruti.start()
maruti.stop()
maruti.displayInformation()
maruti.yom()
console.log("*****************************************")
let car = new Car("Car", "Car Color", "Car Model")
car.start()
car.stop()
car.displayInformation()
console.log("*****************************************")
let car1: Car = new Honda("HONDA", "HONDA RED", "HONDA CIVIC", 2025)
car1.displayInformation()
car1.start()
// car1.yom() // not accessible