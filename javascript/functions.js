// Multiply function
function multiply(a, b) {
    return a * b;
}
let result = multiply(4, 5);
console.log(result); // 20

// Add three numbers
function add(a, b, c) {
    return a + b + c;
}
let res = add(3, 4, 5);
console.log(res); // 12

// Arrow function (2 numbers)
const sum = (a, b) => a + b;
console.log(sum(2, 3)); // 5

// Arrow function (3 numbers)
const sm = (a, b, c) => a + b + c;
console.log(sm(3, 4, 5)); // 12

// Greeting function
const greetings = (sayhi) => "hello";
console.log(greetings()); // hello

// Check even (returns true/false)
function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(9)); // false

// Check even (prints result)
function isE(n) {
    console.log(n % 2 === 0);
}
isE(4); // true

// Count vowels
function countVowels(str) {
    let count = 0;
    for (let ch of str) {
        if ("aeiou".includes(ch.toLowerCase())) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Javascript")); // 3
