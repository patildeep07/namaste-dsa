// Reverse String

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

var reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    let temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }

  console.log("Reverse is: ", s);
};

console.log("######################");

// Case 1:
// Input:
let s1 = ["h", "e", "l", "l", "o"];
// Expected output:
// ["o","l","l","e","h"]

console.log("Result 1: ");
const result1 = reverseString(s1);

console.log("######################");

// Case 2:
// Input:
let s2 = ["H", "a", "n", "n", "a", "h"];
// Expected output:
// ["h","a","n","n","a","H"]

console.log("Result 2: ");
const result2 = reverseString(s2);

console.log("######################");
