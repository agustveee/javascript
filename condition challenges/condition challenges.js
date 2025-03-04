// 1 Grading System
let score = 65;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else if (score >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}

// 2 Weather Advisor
let temperature = -12;

if (temperature < 0) {
    console.log("It's freezing outside! Bundle up!");
} else if (temperature <= 15) {
    console.log("It's cold outside. Wear a jacket.");
} else if (temperature <= 30) {
    console.log("The weather is nice. Enjoy your day!");
} else {
    console.log("It's hot outside. Stay hydrated!");
}

// 3 Eligibility Checker
let userAge = 19;

if (userAge < 13) {
    console.log("You are too young for this activity.");
} else if (userAge <= 17) {
    console.log("You need parental permission.");
} else {
    console.log("You are eligible for this activity.");
}

// 4 Ticket Price Calculator
let ageTicket = 11;
let isMember = true;

let ticketPrice;

if (ageTicket < 12) {
    ticketPrice = "Free";
} else if (isMember) {
    ticketPrice = "$10";
} else {
    ticketPrice = "$15";
}

console.log(`Ticket price: ${ticketPrice}`);

// 5 Leap Year Checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2025));
console.log(isLeapYear(2012));
console.log(isLeapYear(2002));
console.log(isLeapYear(1995));
