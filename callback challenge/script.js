// 1. Custom Map Function
function customMap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

let numbers = [1, 2, 3];
let doubled = customMap(numbers, function(num) { return num * 2; });
console.log(doubled); 
// Predicted Output: [2, 4, 6]

// 2. Filter Function
function filter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

let filtered = filter([1, 2, 3, 4, 15], function(val) { return val < 10; });
console.log(filtered); 
// Predicted Output: [1, 2, 3, 4]

// 3. Some Function
function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
}

let someResult = some([1, 2, 3, 4], function(val) { return val > 5; });
console.log(someResult); 
// Predicted Output: false

// 4. Every Function
function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
}

let everyResult = every([1, 2, 3], function(val) { return val > 0; });
console.log(everyResult); 
// Predicted Output: true

// 5. Reduce Function
function reduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    
    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }
    return accumulator;
}

let sum = reduce([1, 2, 3], function(acc, num) { return acc + num; }, 0);
console.log(sum); 
// Predicted Output: 6


