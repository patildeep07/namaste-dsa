// Write a function that returns the number of negative numbers in an array

function findNumberOfNegativeNumbers(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }

  return count;
}

// Case 1: When multiple negative numbers exists in array
let array1 = [-1, -2, 3, -3, 6, 9, 3, -4, -5, 20, 343, 243, -6];
const result1 = findNumberOfNegativeNumbers(array1);
console.log("Result 1: ", result1);

// Case 2: When no negative number exists in array
let array2 = [20, 343, 243, 7, 92];
const result2 = findNumberOfNegativeNumbers(array2);
console.log("Result 1: ", result2);
