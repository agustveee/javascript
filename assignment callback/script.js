// Task 1: Custom Array Filter
/**
 * DOCU: Filters an array based on a callback function
 * @param {Array} arr - the array to filter
 * @param {function} callback - the filtering function
 * @return {Array} - a new array with elements that pass the filter
 */
function customFilter(arr, callback) {
    let result = [];
    for (let item of arr) {
        if (callback(item)) {
            result.push(item);
        }
    }
    return result;
}

function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers);

// Task 2: Countdown Timer
/**
 * DOCU: Runs a countdown timer and executes a callback for each second
 * @param {number} start - the number to start counting down from
 * @param {function} callback - the function to execute each second
 */
function countdown(start, callback) {
    let interval = setInterval(() => {
        callback(start);
        if (start === 0) {
            clearInterval(interval);
            console.log("Countdown complete!");
        }
        start--;
    }, 1000);
}

function displayNumber(num) {
    console.log(num);
}

countdown(5, displayNumber);

// Task 3: Simple Event Listener
/**
 * DOCU: Creates a button and attaches an event listener to execute a callback
 * @param {string} buttonText - the text displayed on the button
 * @param {function} callback - the function executed when the button is clicked
 */
function createButton(buttonText, callback) {
    let button = document.createElement("button");
    button.innerText = buttonText;
    document.body.appendChild(button);
    button.addEventListener("click", callback);
}

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);

// Task 4: Task Runner
function runTasks(tasks) {
    let index = 0;
    
    function executeNext() {
        if (index < tasks.length) {
            setTimeout(() => {
                tasks[index]();
                index++;
                executeNext();
            }, 1000);
        }
    }
    
    executeNext();
}

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]);

// Task 5: Interactive Quiz Game
function askQuestion(question, choices, correctAnswer, callback) {
    let userAnswer = prompt(`${question}\n${choices.join("\n")}`);
    
    if (userAnswer !== null) {
        callback(userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase());
    } else {
        console.log("No answer provided.");
    }
}

function checkAnswer(isCorrect) {
    console.log(isCorrect ? "Correct!" : "Wrong!");
}

askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);
