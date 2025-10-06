// Sum of numbers in array

function sumOfOddNums(nums) {
  if (nums.length == 1) {
    return nums[0] % 2 != 0 ? nums[0] : 0;
  }

  return (nums[0] % 2 != 0 ? nums[0] : 0) + sumOfOddNums(nums.slice(1));
  return nums[0] + sumOfOddNums(nums.slice(1));
}
console.log("######################");

// Case 1:
const nums1 = [4, 2, 3, 5, 0];
const result1 = sumOfOddNums(nums1);
console.log(`Sum of odd numbers in ${nums1} is: ${result1}`);
console.log("######################");

// Case 2:
const nums2 = [4, 2, 3, 5, 10, 11];
const result2 = sumOfOddNums(nums2);
console.log(`Sum of odd numbers in ${nums2} is: ${result2}`);
console.log("######################");

// Final Output:
// ######################
// Sum of odd numbers in 4,2,3,5,0 is: 8
// ######################
// Sum of odd numbers in 4,2,3,5,10,11 is: 19
// ######################
