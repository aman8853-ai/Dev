
/***********************
 * JavaScript Functions – React Ready
 ***********************/

// 1. Basic Function
function add(a, b) {
  return a + b;
}

// 2. Arrow Function
const subtract = (a, b) => a - b;

// 3. Default Parameters
const greet = (name = "Guest") => `Hello, ${name}`;

// 4. Function Expression
const multiply = function (a, b) {
  return a * b;
};

// 5. Callback Function
function calculate(a, b, operation) {
  return operation(a, b);
}

// 6. Higher Order Functions
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
const even = numbers.filter(n => n % 2 === 0);

// 7. Rest Parameters
const sumAll = (...nums) => {
  return nums.reduce((sum, n) => sum + n, 0);
};

// 8. Destructuring in Function
const printUser = ({ name, age }) => {
  return `${name} is ${age} years old`;
};

// 9. Returning Object
const createUser = (name, age) => ({
  name,
  age
});

// 10. Async Function
const fetchData = async () => {
  const res = await fetch("https://api.github.com/users/octocat");
  const data = await res.json();
  return data;
};

// 11. Promise Function
const wait = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// 12. IIFE
(() => {
  console.log("IIFE executed");
})();

// 13. Utility Functions
const square = n => n * n;
const isEven = n => n % 2 === 0;

// Export for React usage
export {
  add,
  subtract,
  multiply,
  greet,
  sumAll,
  fetchData,
  square,
  isEven
};
