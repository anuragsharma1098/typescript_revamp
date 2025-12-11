// break and continue statements in loops
for (let i = 1; i <= 10; i++) {
    if (i == 6) {
        console.log("Breaking the loop at i =", i);
        break; // exit the loop when i is 6
    }
    console.log("Current value of i:", i);
}

console.log("-----");
for (let j = 1; j <= 10; j++) {
    if (j % 2 == 0) {
        console.log("Continuing at j =", j);
        continue; // skip even numbers
    }
    console.log("Current value of j:", j);
}
console.log("-----");
let count: number = 0;
while (count < 10) {
    count++;
    if (count == 7) {
        console.log("Breaking the while loop at count =", count);
        break; // exit the loop when count is 7
    }
    console.log("Current count in while loop:", count);
}

for (let i = 1; i <= 20; i++) {
    if (i == 3 || i == 5 || i == 7 || i == 13) {
        continue; // skip specific numbers
    }
    console.log("Value of i in for loop:", i);
}