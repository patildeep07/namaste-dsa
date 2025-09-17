// Find an element in the array and return the index of the element, return -1 if it doesnt exist

function findElement(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == elem) {
      return i;
    }
  }

  return -1;
}

// Case 1: No match
let result1 = findElement([1, 2, 3], 0);
console.log("Result 1: ", result1);

// Case 2: Element on idx 1
let result2 = findElement([1, 2, 3], 2);
console.log("Result 2: ", result2);

// Case 3: Element on idx 3
let result3 = findElement([10, 20, 50, 60], 60);
console.log("Result 3: ", result3);
