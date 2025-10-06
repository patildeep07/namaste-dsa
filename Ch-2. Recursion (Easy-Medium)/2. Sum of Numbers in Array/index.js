// Sum of numbers in array

function sumOfNums(nums) {
  if (nums.length == 1) {
    return nums[0];
  }

  return nums[0] + sumOfNums(nums.slice(1));
}
console.log("######################");

// Case 1:
const nums1 = [4, 2, 3, 5, 0];
const result1 = sumOfNums(nums1);
console.log(`Sum of ${nums1} is: ${result1}`);
console.log("######################");

// Case 2:
const nums2 = [4, 2, 3, 5, 10];
const result2 = sumOfNums(nums2);
console.log(`Sum of ${nums2} is: ${result2}`);
console.log("######################");

// Final Output:
// ######################
// Sum of 4,2,3,5,0 is: 14
// ######################
// Sum of 4,2,3,5,10 is: 24
// ######################
