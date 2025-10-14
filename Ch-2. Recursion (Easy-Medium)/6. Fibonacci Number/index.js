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

// Case 4:
// Input:
const n4 = 0;
const result4 = fib(n4);
console.log(`Fibonacci number at the ${n4}th position is ${result4}`);
console.log("######################");

// Case 5:
// Input:
const n5 = 1;
const result5 = fib(n5);
console.log(`Fibonacci number at the ${n5}th position is ${result5}`);
console.log("######################");

// Case 6:
// Input:
const n6 = 2;
const result6 = fib(n6);
console.log(`Fibonacci number at the ${n6}th position is ${result6}`);
console.log("######################");

// Case 7:
// Input:
const n7 = 8;
const result7 = fib(n7);
console.log(`Fibonacci number at the ${n7}th position is ${result7}`);
console.log("######################");

// Case 8:
// Input:
const n8 = 10;
const result8 = fib(n8);
console.log(`Fibonacci number at the ${n8}th position is ${result8}`);
console.log("######################");

// Case 9:
// Input:
const n9 = 12;
const result9 = fib(n9);
console.log(`Fibonacci number at the ${n9}th position is ${result9}`);
console.log("######################");

// Case 10:
// Input:
const n10 = 15;
const result10 = fib(n10);
console.log(`Fibonacci number at the ${n10}th position is ${result10}`);
console.log("######################");

// Final Output:
// ######################
// Fibonacci number at the 3th position is 2
// ######################
// Fibonacci number at the 5th position is 5
// ######################
// Fibonacci number at the 7th position is 13
// ######################
// Fibonacci number at the 0th position is 0
// ######################
// Fibonacci number at the 1th position is 1
// ######################
// Fibonacci number at the 2th position is 1
// ######################
// Fibonacci number at the 8th position is 21
// ######################
// Fibonacci number at the 10th position is 55
// ######################
// Fibonacci number at the 12th position is 144
// ######################
// Fibonacci number at the 15th position is 610
// ######################
