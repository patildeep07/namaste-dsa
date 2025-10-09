// 509. Fibonacci Number -> https://leetcode.com/problems/fibonacci-number/description/

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n == 1) return 1;
  if (n == 0) return 0;

  return fib(n - 1) + fib(n - 2);
};
console.log("######################");

// Case 1:
// Input:
const n1 = 3;
const result1 = fib(n1);
console.log(`Fibonacci number at the ${n1}th position is ${result1}`);
console.log("######################");

// Case 2:
// Input:
const n2 = 5;
const result2 = fib(n2);
console.log(`Fibonacci number at the ${n2}th position is ${result2}`);
console.log("######################");

// Case 3:
// Input:
const n3 = 7;
const result3 = fib(n3);
console.log(`Fibonacci number at the ${n3}th position is ${result3}`);
console.log("######################");

// Final Output:
// ######################
// Fibonacci number at the 3th position is 2
// ######################
// Fibonacci number at the 5th position is 5
// ######################
// Fibonacci number at the 7th position is 13
// ######################
