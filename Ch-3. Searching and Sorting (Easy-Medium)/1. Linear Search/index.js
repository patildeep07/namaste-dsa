// Linear search - Find a target from an array using linear search and return the index at which target is present

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }

  return -1;
}
console.log("######################");

// Case 1:
// Input:
const arr1 = [4, 2, 6, 7, 8];
const target1 = 6;

// Expected output: 2

const result1 = linearSearch(arr1, target1);
console.log(
  result1 < 0
    ? `Element ${target1} does not exist in ${arr1} array`
    : `Element ${target1} exists at ${result1}nd index in ${arr1} array`
);
console.log("######################");

// Case 2:
// Input:
const arr2 = [213, 215, 35, 234, 45, 756, 3543, 5675, 34, 756];
const target2 = 6;

// Expected output: -1

const result2 = linearSearch(arr2, target2);
console.log(
  result2 < 0
    ? `Element ${target2} does not exist in ${arr2} array`
    : `Element ${target2} exists at ${result2}nd index in ${arr2} array`
);
console.log("######################");

// Final Output:
// ######################
// Element 6 exists at 2nd index in 4,2,6,7,8 array
// ######################
// Element 6 does not exist in 213,215,35,234,45,756,3543,5675,34,756 array
// ######################
