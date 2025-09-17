// Write a function that returns the smallest number in array

function findSmallestNumber(arr) {
  let smallestNum = arr[0] || null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    }
  }

  return smallestNum;
}

// Case 1: Normal array
const array1 = [2, 4, 5, 1, 9, 3, 6];
const result1 = findSmallestNumber(array1);
console.log("Result 1: ", result1);

// Case 2: Negative numbers array
const array2 = [-2, -4, -5, -1, -9, -3, -6];
const result2 = findSmallestNumber(array2);
console.log("Result 2: ", result2);

// Case 3: Empty array
const array3 = [];
const result3 = findSmallestNumber(array3);
console.log("Result 3: ", result3);
