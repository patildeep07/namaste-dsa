var maxProfit = function (prices) {
  let maxProfit = 0;

  // Brute Force Solution -> Fails when the input size is huge, O(n^2) time complexity
  // for (let i = 0; i < prices.length; i++) {
  //     for (let j = i + 1; j < prices.length; j++) {
  //         if (prices[j] - prices[i] > maxProfit) {
  //             maxProfit = prices[j] - prices[i]
  //         }
  //     }
  // }

  let minValue = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minValue) {
      minValue = prices[i];
    }

    if (prices[i] - minValue > maxProfit) {
      maxProfit = prices[i] - minValue;
    }
  }

  return maxProfit;
};

console.log("######################");

// Case 1:
// Input: [7, 1, 5, 3, 6, 4]
// Simple case where price drops first then rises again
// Expected Output: 5
let prices1 = [7, 1, 5, 3, 6, 4];
const result1 = maxProfit(prices1);
console.log("Max profit for ", prices1, " is: ", result1);

console.log("######################");

// Case 2:
// Input: [7, 6, 4, 3, 1]
// Prices continuously drop -> No profit possible
// Expected Output: 0
let prices2 = [7, 6, 4, 3, 1];
const result2 = maxProfit(prices2);
console.log("Max profit for ", prices2, " is: ", result2);

console.log("######################");

// Case 3:
// Input: [1, 2, 3, 4, 5]
// Prices continuously rise -> Buy at start, sell at end
// Expected Output: 4
let prices3 = [1, 2, 3, 4, 5];
const result3 = maxProfit(prices3);
console.log("Max profit for ", prices3, " is: ", result3);

console.log("######################");

// Case 4:
// Input: [3, 3, 3, 3, 3]
// Constant prices -> No profit possible
// Expected Output: 0
let prices4 = [3, 3, 3, 3, 3];
const result4 = maxProfit(prices4);
console.log("Max profit for ", prices4, " is: ", result4);

console.log("######################");

// Case 5:
// Input: [2, 4, 1]
// Best to buy at 2 and sell at 4 -> small dataset
// Expected Output: 2
let prices5 = [2, 4, 1];
const result5 = maxProfit(prices5);
console.log("Max profit for ", prices5, " is: ", result5);

console.log("######################");

// Case 6:
// Input: [1, 2, 4, 2, 5, 7, 2, 4, 9, 0]
// Multiple peaks and dips -> best buy at 0, sell at 9
// Expected Output: 9
let prices6 = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0];
const result6 = maxProfit(prices6);
console.log("Max profit for ", prices6, " is: ", result6);

console.log("######################");

// Case 7:
// Input: [5]
// Only one price -> no transaction possible
// Expected Output: 0
let prices7 = [5];
const result7 = maxProfit(prices7);
console.log("Max profit for ", prices7, " is: ", result7);

console.log("######################");

// Case 8:
// Input: [10, 7, 5, 8, 11, 9]
// Typical mixed pattern -> buy at 5, sell at 11
// Expected Output: 6
let prices8 = [10, 7, 5, 8, 11, 9];
const result8 = maxProfit(prices8);
console.log("Max profit for ", prices8, " is: ", result8);
