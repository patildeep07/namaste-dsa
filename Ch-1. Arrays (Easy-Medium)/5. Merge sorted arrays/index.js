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
// Input:
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m1 = 3;
let n1 = 3;

// Expected output: [1,2,2,3,5,6]

let result1 = merge(nums1, m1, nums2, n1);
console.log("Result1 is: ", result1);
console.log("######################");

// Case 2:
// Input:
let nums3 = [1];
let nums4 = [];
let m2 = 1;
let n2 = 0;

// Expected output: [1,2,2,3,5,6]

let result2 = merge(nums3, m2, nums4, n2);
console.log("Result2 is: ", result2);
console.log("######################");

// Final Output:
// ######################
// Result1 is:  [ 1, 2, 2, 3, 5, 6 ]
// ######################
// Result2 is:  [ 1 ]
// ######################
