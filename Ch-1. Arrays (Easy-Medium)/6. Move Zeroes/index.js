/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let curr = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = 0;
      nums[curr] = temp;
      curr++;
    }
  }

  return nums; // Returning to show on console, or else we are replacing the params itself
};

console.log("######################");

// Case 1:
// Input:
let nums1 = [0, 1, 0, 3, 12];

// Expected Output: [1, 3, 12, 0, 0]

const result1 = moveZeroes(nums1);
console.log(`Result1 for array ${nums1} is ${result1}`);
console.log("######################");

// Case 2:
// Input:
let nums2 = [0];

// Expected Output: [0]

const result2 = moveZeroes(nums2);
console.log(`Result2 for array ${nums2} is ${result2}`);
console.log("######################");
