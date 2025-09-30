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
// Input:
let prices1 = [7, 1, 5, 3, 6, 4];

// Expected Output: 6

const result1 = maxProfit(prices1);
console.log("Max profit for ", prices1, " is: ", result1);

console.log("######################");

// Case 2:
// Input:
let prices2 = [7, 6, 4, 3, 1];

// Expected Output: 0

const result2 = maxProfit(prices2);
console.log("Max profit for ", prices2, " is: ", result2);

// Program Output:
// ######################
// Max profit for  [ 7, 1, 5, 3, 6, 4 ]  is:  5
// ######################
// Max profit for  [ 7, 6, 4, 3, 1 ]  is:  0
