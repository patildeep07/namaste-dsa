// Write a function that returns the second largest number

function secondLargest(arr) {
  if (arr.length < 2) {
    return "Array smaller than 2";
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  // for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > largest) {
  //         largest = arr[i];
  //     } else if (arr[i] < largest && arr[i] > secondLargest) {
  //         secondLargest = arr[i]
  //     }
  // }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest) {
      if (arr[i] >= largest) {
        largest = arr[i];
      } else {
        secondLargest = arr[i];
      }
    }
  }

  return secondLargest;
}

// Case 1: Normal array
const array1 = [2, 4, 5, 1, 9, 3, 9, 6];
const result1 = secondLargest(array1);
console.log("Result 1: ", result1);
