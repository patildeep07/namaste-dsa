// 136. Single Number -> https://leetcode.com/problems/single-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // Approach 1: Using hash map
  // let hash = {};

  // for (let i = 0; i < nums.length; i++) {
  //     if (!hash[nums[i]]) {
  //         hash[nums[i]] = 1;
  //     } else {
  //         hash[nums[i]]++;
  //     }
  // }

  // for (let i = 0; i < nums.length; i++) {
  //     if (hash[nums[i]] == 1) {
  //         return nums[i]
  //     }
  // }

  // Approach 2: Using XOR
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }

  return xor;
};
console.log("######################");

// Case 1:
// Input:
let nums1 = [4, 1, 2, 1, 2];

// Expected output: 4

const result1 = singleNumber(nums1);
console.log(`Single number in ${nums1} is ${result1}`);
console.log("######################");

// Case 2:
// Input:
let nums2 = [2, 2, 1];

// Expected output: 4

const result2 = singleNumber(nums2);
console.log(`Single number in ${nums2} is ${result2}`);
console.log("######################");

// Final Output
// ######################
// Single number in 4,1,2,1,2 is 4
// ######################
// Single number in 2,2,1 is 1
// ######################
