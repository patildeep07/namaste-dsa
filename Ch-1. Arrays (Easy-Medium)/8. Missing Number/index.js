/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // Approach 1:
  // let totalSum = nums.length * (nums.length + 1) / 2;

  // let sumOfInput = 0;
  // for (let i = 0; i < nums.length; i++) {
  //     sumOfInput += nums[i]
  // }

  // return totalSum - sumOfInput

  // Approach 2:

  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total = total + i;
    total = total - nums[i];
  }

  total = total + nums.length;

  return total;
};
console.log("######################");

// Case 1:
// Input:
let nums1 = [3, 0, 1];

// Expected output: 2

const result1 = missingNumber(nums1);
console.log(`Missing number in ${nums1} is ${result1}`);
console.log("######################");

// Case 2:
// Input:
let nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];

// Expected output: 8

const result2 = missingNumber(nums2);
console.log(`Missing number in ${nums2} is ${result2}`);
console.log("######################");

// Final output
// ######################
// Missing number in 3,0,1 is 2
// ######################
// Missing number in 9,6,4,2,3,5,7,0,1 is 8
// ######################
