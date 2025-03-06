// Exercise 1
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
}

console.log(calculate(5, 3, add));
console.log(calculate(4, 2, multiply));
console.log(calculate(10, 4, subtract));
console.log(calculate(20, 5, divide));
console.log(calculate(10, 0, divide));


// Exercise 2
function delayedMessage(message, delay, beforeCallback, afterCallback) {
    beforeCallback();
    setTimeout(() => {
        afterCallback(message);
    }, delay);
}

delayedMessage(
    "Hello, world!", 
    2000, 
    function() {
        console.log("Message will be displayed after the delay...");
    }, 
    function(msg) {
        console.log(msg);
    }
);

// Exercise 3
function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        if (callback(i) === false) {
            console.log("Loop stopped early.");
            break;
        }
    }
}

repeatTask(5, function(index) {
    console.log("Iteration:", index);
    if (index === 2) return false;
});

