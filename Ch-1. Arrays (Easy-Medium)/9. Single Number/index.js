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

// Case 1: Example from problem
// Input:
let nums1 = [4, 1, 2, 1, 2];

// Expected output: 4

const result1 = singleNumber(nums1);
console.log(`Single number in ${nums1} is ${result1}`);
console.log("######################");

// Case 2: Small array
// Input:
let nums2 = [2, 2, 1];

// Expected output: 1

const result2 = singleNumber(nums2);
console.log(`Single number in ${nums2} is ${result2}`);
console.log("######################");

// Case 3: Single element
// Input:
let nums3 = [7];

// Expected output: 7

const result3 = singleNumber(nums3);
console.log(`Single number in ${nums3} is ${result3}`);
console.log("######################");

// Case 4: Negative numbers
// Input:
let nums4 = [-1, -1, -2];

// Expected output: -2

const result4 = singleNumber(nums4);
console.log(`Single number in ${nums4} is ${result4}`);
console.log("######################");

// Case 5: Larger array
// Input:
let nums5 = [10, 14, 10, 18, 14];

// Expected output: 18

const result5 = singleNumber(nums5);
console.log(`Single number in ${nums5} is ${result5}`);
console.log("######################");

// Case 6: Mix of negative and positive
// Input:
let nums6 = [-3, -3, 5, 7, 5];

// Expected output: 7

const result6 = singleNumber(nums6);
console.log(`Single number in ${nums6} is ${result6}`);
console.log("######################");

// Case 7: Zero included
// Input:
let nums7 = [0, 4, 0, 4, 9];

// Expected output: 9

const result7 = singleNumber(nums7);
console.log(`Single number in ${nums7} is ${result7}`);
console.log("######################");

// Case 8: Consecutive numbers
// Input:
let nums8 = [1, 1, 2, 2, 3];

// Expected output: 3

const result8 = singleNumber(nums8);
console.log(`Single number in ${nums8} is ${result8}`);
console.log("######################");

// Case 9: Large range
// Input:
let nums9 = [100, 200, 300, 100, 200];

// Expected output: 300

const result9 = singleNumber(nums9);
console.log(`Single number in ${nums9} is ${result9}`);
console.log("######################");

// Final Output
// ######################
// Single number in 4,1,2,1,2 is 4
// ######################
// Single number in 2,2,1 is 1
// ######################
// Single number in 7 is 7
// ######################
// Single number in -1,-1,-2 is -2
// ######################
// Single number in 10,14,10,18,14 is 18
// ######################
// Single number in -3,-3,5,7,5 is 7
// ######################
// Single number in 0,4,0,4,9 is 9
// ######################
// Single number in 1,1,2,2,3 is 3
// ######################
// Single number in 100,200,300,100,200 is 300
// ######################
