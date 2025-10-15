/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // Approach 1: Using extra space, and filling 1 by 1. What we are trying to do is compare between two elements of both arrays and place it one by one. From Left to Right
  // let nums1Copy = nums1.slice(0, m);
  // let p1 = 0;
  // let p2 = 0;

  // for (let i= 0; i < m+n; i++) {
  //     if( p2 >= n || (nums1Copy[p1] < nums2[p2] && p1 < m) ) {
  //         nums1[i] = nums1Copy[p1];
  //         p1++;
  //     } else {
  //         nums1[i] = nums2[p2];
  //         p2++;
  //     }
  // }

  // Approach 2: Filling elements in reverse
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0 || (nums1[p1] > nums2[p2] && p1 >= 0)) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }

  return nums1; // Returning it only to show on console, or else we are only modifying the original nums1 array
};

console.log("######################");

// Case 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Typical case with overlapping ranges
// Expected output: [1,2,2,3,5,6]
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m1 = 3;
let n1 = 3;
let result1 = merge(nums1, m1, nums2, n1);
console.log("Result1 is: ", result1);
console.log("######################");

// Case 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// nums2 is empty -> nums1 remains same
// Expected output: [1]
let nums3 = [1];
let nums4 = [];
let m2 = 1;
let n2 = 0;
let result2 = merge(nums3, m2, nums4, n2);
console.log("Result2 is: ", result2);
console.log("######################");

// Case 3:
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// nums1 initially empty, nums2 has single element
// Expected output: [1]
let nums5 = [0];
let nums6 = [1];
let m3 = 0;
let n3 = 1;
let result3 = merge(nums5, m3, nums6, n3);
console.log("Result3 is: ", result3);
console.log("######################");

// Case 4:
// Input: nums1 = [4,5,6,0,0,0], m = 3, nums2 = [1,2,3], n = 3
// nums1 elements all greater than nums2 elements
// Expected output: [1,2,3,4,5,6]
let nums7 = [4, 5, 6, 0, 0, 0];
let nums8 = [1, 2, 3];
let m4 = 3;
let n4 = 3;
let result4 = merge(nums7, m4, nums8, n4);
console.log("Result4 is: ", result4);
console.log("######################");

// Case 5:
// Input: nums1 = [1,2,4,5,6,0], m = 5, nums2 = [3], n = 1
// nums2 element goes in the middle
// Expected output: [1,2,3,4,5,6]
let nums9 = [1, 2, 4, 5, 6, 0];
let nums10 = [3];
let m5 = 5;
let n5 = 1;
let result5 = merge(nums9, m5, nums10, n5);
console.log("Result5 is: ", result5);
console.log("######################");

// Case 6:
// Input: nums1 = [2,0], m = 1, nums2 = [1], n = 1
// nums2 has smaller element, goes first
// Expected output: [1,2]
let nums11 = [2, 0];
let nums12 = [1];
let m6 = 1;
let n6 = 1;
let result6 = merge(nums11, m6, nums12, n6);
console.log("Result6 is: ", result6);
console.log("######################");

// Case 7:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [4,5,6], n = 3
// nums2 has all larger elements -> appended directly
// Expected output: [1,2,3,4,5,6]
let nums13 = [1, 2, 3, 0, 0, 0];
let nums14 = [4, 5, 6];
let m7 = 3;
let n7 = 3;
let result7 = merge(nums13, m7, nums14, n7);
console.log("Result7 is: ", result7);
console.log("######################");

// Case 8:
// Input: nums1 = [2,2,3,0,0,0], m = 3, nums2 = [1,2,3], n = 3
// Duplicate elements in both arrays
// Expected output: [1,2,2,2,3,3]
let nums15 = [2, 2, 3, 0, 0, 0];
let nums16 = [1, 2, 3];
let m8 = 3;
let n8 = 3;
let result8 = merge(nums15, m8, nums16, n8);
console.log("Result8 is: ", result8);
console.log("######################");
