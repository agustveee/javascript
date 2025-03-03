// 1 Calculate the Total Cost of Items
let item1 = 15;
let item2 = 20;
let item3 = 10;
let totalCost = item1 + item2 + item3;
console.log("The total cost of the items is: $" + totalCost);

// 2 Calculate the Average of Three Numbers
let num1 = 5;
let num2 = 10;
let num3 = 7;
let average = (num1 + num2 + num3) / 3;
console.log("The average is: " + average);

// 3 Odd or Even Checker
let number = 15;
if (number % 2 == 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}

// 4 Calculate Discounts
let originalPrice = 100;
let discountPercentage = 20;
let discountAmount = (originalPrice * discountPercentage) / 100;
let discountedPrice = originalPrice - discountAmount;
console.log("The discounted price is: $" + discountedPrice);

// Reverse Percentage Calculation
let finalPrice = 80;
let discount = 20;
let originalPriceBeforeDiscount = finalPrice / (1 - discount / 100);
console.log("The original price before the discount was: $" + originalPriceBeforeDiscount);
