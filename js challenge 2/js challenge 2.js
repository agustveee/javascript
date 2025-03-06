// 1 Inventory Tracker
let inventory = ["apple", "banana", "cherry", "date", "elderberry"];
let inventoryCount = [10, 15, 5, 20, 7];

for (let i = 0; i < inventory.length; i++) {
  console.log(`${inventory[i]}: ${inventoryCount[i]}`);
}

// Predicted Output:
// apple: 10
// banana: 15
// cherry: 5
// date: 20
// elderberry: 7

// 2 Alphabetical Sorting
let words = ["zebra", "apple", "mango", "cherry", "banana"];

for (let i = 0; i < words.length; i++) {
  for (let j = i + 1; j < words.length; j++) {
    if (words[i] > words[j]) {
      let temp = words[i];
      words[i] = words[j];
      words[j] = temp;
    }
  }
}

console.log(words);

// Predicted Output: [ 'apple', 'banana', 'cherry', 'mango', 'zebra' ]

// 3 Unique Array Builder
let uniqueNumbers = [];

while (uniqueNumbers.length < 10) {
  let randomNumber = Math.floor(Math.random() * 20) + 1;

  let exists = false;
  for (let i = 0; i < uniqueNumbers.length; i++) {
    if (uniqueNumbers[i] === randomNumber) {
      exists = true;
      break;
    }
  }

  if (!exists) {
    uniqueNumbers.push(randomNumber);
  }
}

console.log(uniqueNumbers);

// Predicted Output: [ 16, 11, 20, 12, 2, 1, 8, 14, 15, 10 ]

// 4 Triangle Checker
let sideA = 7;
let sideB = 10;
let sideC = 5;

if (sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB) {
  console.log(`The sides ${sideA}, ${sideB}, and ${sideC} form a valid triangle.`);
} else {
  console.log(`The sides ${sideA}, ${sideB}, and ${sideC} do not form a valid triangle.`);
}

//  Predicted Output: The sides 7, 10, and 5 form a valid triangle.
