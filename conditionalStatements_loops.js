// Exercise 1: Temperature check
let temperature = 20;
if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature <= 15) {
    console.log("It's cold.");
} else if (temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

// Using switch
switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
}

// Exercise 2: Divisibility
let number = 6;

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

// Using switch
switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (number % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (number % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}

// Exercise 3: For loops
for (let i = 1; i <= 10; i++) console.log(i);

for (let i = 1; i <= 20; i++) if (i % 2 === 0) console.log(i);

let sum100 = 0;
for (let i = 1; i <= 100; i++) sum100 += i;
console.log("Sum 1-100:", sum100);

const arr1 = [1, 2, 3, 4, 5];
arr1.forEach(num => console.log(num));

const arr2 = [3, 7, 2, 5, 10, 6];
let max = arr2[0];
for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > max) max = arr2[i];
}
console.log("Largest:", max);

// Exercise 4: While loops
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

i = 1;
while (i <= 20) {
    if (i % 2 === 0) console.log(i);
    i++;
}

let sumWhile = 0;
i = 1;
while (i <= 100) {
    sumWhile += i;
    i++;
}
console.log("Sum using while:", sumWhile);

i = 1;
while (i < 50) {
    if (i % 5 === 0) console.log(i);
    i++;
}

// Exercise 5: Do While
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

let sumDo = 0;
i = 1;
do {
    sumDo += i;
    i++;
} while (i <= 100);
console.log("Do-while sum:", sumDo);