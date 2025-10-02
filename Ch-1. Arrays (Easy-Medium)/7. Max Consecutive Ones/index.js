/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 0;
    }
  }
  return maxCount;
};

console.log("######################");

// Case 1:
// Input:
let nums1 = [1, 1, 0, 1, 1, 1];

// Expected Output: 3

const result1 = findMaxConsecutiveOnes(nums1);
console.log(`Result1 for array ${nums1} is ${result1}`);
console.log("######################");

// Case 2:
// Input:
let nums2 = [1, 0, 1, 1, 0, 1];

// Expected Output: 2

const result2 = findMaxConsecutiveOnes(nums2);
console.log(`Result2 for array ${nums2} is ${result2}`);
console.log("######################");

// Final Output:
// ######################
// Result1 for array 1,1,0,1,1,1 is 3
// ######################
// Result2 for array 1,0,1,1,0,1 is 2
// ######################
