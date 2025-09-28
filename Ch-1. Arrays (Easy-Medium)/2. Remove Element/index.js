// Remove Element

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

var removeElement = function (nums, val) {
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[current] = nums[i];
      current = current + 1;
    }
  }

  console.log("Array after shuffling is: ", nums);
  return current;
};

console.log("######################");

// Case 1:

// Input
let nums1 = [3, 2, 2, 3];
let val1 = 3;

// Expected output: [2, 2, _, _]

const result1 = removeElement(nums1, val1);
console.log("Result1: ", result1);

// Case 2:

// Input
let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;

// Expected: [0,1,4,0,3]

const result2 = removeElement(nums2, val2);
console.log("Result2: ", result2);
