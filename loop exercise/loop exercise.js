// 1 Mutltiplication Table Generator
let number = 4;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// 2 Sum of First N Natural Numbers
let n = 8;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log(`The sum of the first ${n} numbers is: ${sum}`);

// 3 Array Elements Printer
let numbersArray = [5, 10, 15, 20, 25];

for (let i = 0; i < numbersArray.length; i++) {
    console.log(`Array Element: ${numbersArray[i]}`);
}

// 4 Pattern Printer
let rows = 6;

for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}

// 5 Reverse Array Elements
let reverseArray = [1, 2, 3, 5, 8, 13];

for (let i = reverseArray.length - 1; i >= 0; i--) {
    console.log(`Reversed Element: ${reverseArray[i]}`);
}
