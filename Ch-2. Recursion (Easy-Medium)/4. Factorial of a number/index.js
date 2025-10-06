// Factorial of a number using recursion

function factorial(num) {
  if (num === 0) return 1;

  return num * factorial(num - 1);
}
console.log("######################");

// Case 1:
const num1 = 5;
const result1 = factorial(num1);
console.log(`Factorial of ${num1} is ${result1}`);
console.log("######################");

// Case 2:
const num2 = 0;
const result2 = factorial(num2);
console.log(`Factorial of ${num2} is ${result2}`);
console.log("######################");
