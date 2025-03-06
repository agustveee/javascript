// Challenge 1 
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
         sum += arr[i];
    }
    return sum;
}
  
let numbers = [1, 2, 3, 4];
console.log("Sum:", calculateSum(numbers));

// Prected Output: 10

// Challenge 2
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
  
console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(0));

// Prected Output:
// true
// false
// true

// Challenge 3
function greet(name) {
    return "Hello, " + name + "!";
}
 
function personalizedGreeting(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(greet(names[i]));
    }
}
  
let friends = ["Alice", "Bob", "Charlie"];
personalizedGreeting(friends);

// Prected Output: 
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!

// Challenge 4
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
  
let originalArray = [10, 20, 30];
console.log(reverseArray(originalArray));
console.log(originalArray);

// Prected Output:
// [ 30, 20, 10 ]
// [ 10, 20, 30 ]