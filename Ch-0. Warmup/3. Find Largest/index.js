// Write a function that returns the largest number in array

function findLargestNumber(arr) {
  let largestNum = arr[0] || null; // Can also use -Infinity here

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }

  return largestNum;
}

// Case 1: Normal array
const array1 = [2, 4, 5, 1, 9, 3, 6];
const result1 = findLargestNumber(array1);
console.log("Result 1: ", result1);

// Case 2: Negative numbers array
const array2 = [-2, -4, -5, -1, -9, -3, -6];
const result2 = findLargestNumber(array2);
console.log("Result 2: ", result2);

// Case 3: Empty array
const array3 = [];
const result3 = findLargestNumber(array3);
console.log("Result 3: ", result3);
