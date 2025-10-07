// 231. Power of Two -> https://leetcode.com/problems/power-of-two/description/

// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

// NOTE: We are solving using recursion, but can also be solved using bitwise operators.... Something like below
// return (n & (n-1)) === 0
// Since when it is power of n the value will always have only one, subtracting makes all numbers after it to be 1, and using & operator between makes it 0000000

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n == 0) return false;
  if (n == 1) return true;

  if (n % 2 !== 0) return false;

  return isPowerOfTwo(Math.floor(n / 2));
};
console.log("######################");

// Case 1:
// Input:
const n1 = 16;
const result1 = isPowerOfTwo(n1);
console.log(`Is ${n1} power of two? ${result1}`);
console.log("######################");

// Case 2:
// Input:
const n2 = 19;
const result2 = isPowerOfTwo(n2);
console.log(`Is ${n2} power of two? ${result2}`);
console.log("######################");

// Case 3:
// Input:
const n3 = 0;
const result3 = isPowerOfTwo(n3);
console.log(`Is ${n3} power of two? ${result3}`);
console.log("######################");

// Case 4:
// Input:
const n4 = 20;
const result4 = isPowerOfTwo(n4);
console.log(`Is ${n4} power of two? ${result4}`);
console.log("######################");

// Final Output:
// ######################
// Is 16 power of two? true
// ######################
// Is 19 power of two? false
// ######################
// Is 0 power of two? false
// ######################
// Is 20 power of two? false
// ######################
