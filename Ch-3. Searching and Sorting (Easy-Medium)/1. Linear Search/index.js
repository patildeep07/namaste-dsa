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

// Additional cases to cover edge and interesting scenarios

// Case 3: Empty array
const arr3 = [];
const target3 = 1;
const result3 = linearSearch(arr3, target3);
console.log(
  result3 < 0
    ? `Element ${target3} does not exist in ${arr3} array`
    : `Element ${target3} exists at ${result3}nd index in ${arr3} array`
);
console.log("######################");

// Case 4: Single-element array (present)
const arr4 = [5];
const target4 = 5;
const result4 = linearSearch(arr4, target4);
console.log(
  result4 < 0
    ? `Element ${target4} does not exist in ${arr4} array`
    : `Element ${target4} exists at ${result4}nd index in ${arr4} array`
);
console.log("######################");

// Case 5: Single-element array (absent)
const arr5 = [5];
const target5 = 6;
const result5 = linearSearch(arr5, target5);
console.log(
  result5 < 0
    ? `Element ${target5} does not exist in ${arr5} array`
    : `Element ${target5} exists at ${result5}nd index in ${arr5} array`
);
console.log("######################");

// Case 6: Target is first element
const arr6 = [10, 2, 3, 4];
const target6 = 10;
const result6 = linearSearch(arr6, target6);
console.log(
  result6 < 0
    ? `Element ${target6} does not exist in ${arr6} array`
    : `Element ${target6} exists at ${result6}nd index in ${arr6} array`
);
console.log("######################");

// Case 7: Target is last element
const arr7 = [2, 3, 4, 9];
const target7 = 9;
const result7 = linearSearch(arr7, target7);
console.log(
  result7 < 0
    ? `Element ${target7} does not exist in ${arr7} array`
    : `Element ${target7} exists at ${result7}nd index in ${arr7} array`
);
console.log("######################");

// Case 8: Multiple occurrences — should return first index
const arr8 = [1, 2, 3, 2, 5];
const target8 = 2;
const result8 = linearSearch(arr8, target8);
console.log(
  result8 < 0
    ? `Element ${target8} does not exist in ${arr8} array`
    : `Element ${target8} exists at ${result8}nd index in ${arr8} array`
);
console.log("######################");

// Case 9: Type coercion with == — string '6' should match number 6
const arr9 = ["6", 2, 3];
const target9 = 6; // number
const result9 = linearSearch(arr9, target9);
console.log(
  result9 < 0
    ? `Element ${target9} does not exist in ${arr9} array`
    : `Element ${target9} exists at ${result9}nd index in ${arr9} array`
);
console.log("######################");

// Case 10: Negative numbers
const arr10 = [-3, -2, -1];
const target10 = -2;
const result10 = linearSearch(arr10, target10);
console.log(
  result10 < 0
    ? `Element ${target10} does not exist in ${arr10} array`
    : `Element ${target10} exists at ${result10}nd index in ${arr10} array`
);
console.log("######################");

// Case 11: Array of strings
const arr11 = ["a", "b", "c"];
const target11 = "b";
const result11 = linearSearch(arr11, target11);
console.log(
  result11 < 0
    ? `Element ${target11} does not exist in ${arr11} array`
    : `Element ${target11} exists at ${result11}nd index in ${arr11} array`
);
console.log("######################");

// Case 12: undefined in array
const arr12 = [undefined, null, 0];
const target12 = undefined;
const result12 = linearSearch(arr12, target12);
console.log(
  result12 < 0
    ? `Element ${target12} does not exist in ${arr12} array`
    : `Element ${target12} exists at ${result12}nd index in ${arr12} array`
);
console.log("######################");

// Final Output:
// ######################
// Element 6 exists at 2nd index in 4,2,6,7,8 array
// ######################
// Element 6 does not exist in 213,215,35,234,45,756,3543,5675,34,756 array
// ######################
// Element 1 does not exist in  array
// ######################
// Element 5 exists at 0nd index in 5 array
// ######################
// Element 6 does not exist in 5 array
// ######################
// Element 10 exists at 0nd index in 10,2,3,4 array
// ######################
// Element 9 exists at 3nd index in 2,3,4,9 array
// ######################
// Element 2 exists at 1nd index in 1,2,3,2,5 array
// ######################
// Element 6 exists at 0nd index in 6,2,3 array
// ######################
// Element -2 exists at 1nd index in -3,-2,-1 array
// ######################
// Element b exists at 1nd index in a,b,c array
// ######################
// Element undefined exists at 0nd index in ,,,0 array
// ######################
