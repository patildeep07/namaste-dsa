// Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

var removeDuplicates = function (nums) {
  let current = -Infinity;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > current) {
      nums[count] = nums[i];
      current = nums[i];
      count++;
    }
  }

  console.log("Sequence of numbers after loop: ", nums);
  return count;
};

console.log("######################");

// Case 1:
// Input:
let nums1 = [1, 1, 2];
// Output
// [1,2]

const result1 = removeDuplicates(nums1);
console.log("Result1: ", result1);

console.log("######################");

// Case 2:
// Input:
let nums2 = [1, 1, 2, 3, 3, 4, 4, 4];
// Output
// [1,2]

const result2 = removeDuplicates(nums2);
console.log("Result2: ", result2);

console.log("######################");
