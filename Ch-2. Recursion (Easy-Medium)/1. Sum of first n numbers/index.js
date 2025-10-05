// Find the sum of first n numbers

function sumOfNumbers(n) {
  if (n == 0) return 0;

  return n + sumOfNumbers(n - 1);
}
console.log("######################");

// Case 1:
const n1 = 5;
const result1 = sumOfNumbers(n1);
console.log(`Sum of first ${n1} numbers is: ${result1}`);
console.log("######################");

// Case 2:
const n2 = 0;
const result2 = sumOfNumbers(n2);
console.log(`Sum of first ${n2} numbers is: ${result2}`);
console.log("######################");

// Final Output
// ######################
// Sum of first 5 numbers is: 15
// ######################
// Sum of first 0 numbers is: 0
// ######################
