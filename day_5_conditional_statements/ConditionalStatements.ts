// if...else conditional statement
let personAge: number = 11;
if (personAge < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}

let score: number = 85;
if (score % 2 == 0) {
    console.log(`Your score ${score} is even.`);
} else {
    console.log(`Your score ${score} is odd.`);
}

// if...else if...else conditional statement
let temperature: number = 30;
if (temperature > 30) {
    console.log("It's a hot day.");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("It's a warm day.");
} else {
    console.log("It's a cold day.");
}

let browser: string = "Firefox";
if (browser === "Chrome") {
    console.log("You are using Google Chrome.");
} else if (browser === "Firefox") {
    console.log("You are using Mozilla Firefox.");
} else {
    console.log("You are using an unsupported browser.");
}

// switch conditional statement
let dayOfWeek: number = 3;
switch (dayOfWeek) {
    case 2:
        console.log("It's Monday.");
        break;
    case 3:
        console.log("It's Tuesday.");
        break;
    case 4:
        console.log("It's Wednesday.");
        break;
    case 5:
        console.log("It's Thursday.");
        break;
    case 6:
        console.log("It's Friday.");
        break;
    case 7:
        console.log("It's Saturday.");
        break;
    case 1:
        console.log("It's Sunday.");
        break;
    default:
        console.log("Invalid day of the week.");
        break;
}

let fruit: string = "Apple";
switch (fruit) {
    case "Banana":
        console.log("It's a Banana.");
        break;
    case "Apple":
        console.log("It's an Apple.");
        break;
    case "Orange":
        console.log("It's an Orange.");
        break;
    default:
        console.log("Unknown fruit.");
        break;
}

let x: number = 10;
let y: number = 20;
switch (x - y) {
    case -10:
        console.log("x is less than y by 10.");
        break;
    case 0:
        console.log("x is equal to y.");
        break;
    case 10:
        console.log("x is greater than y by 10.");
        break;
    default:
        console.log("x and y have a different difference.");
        break;
}