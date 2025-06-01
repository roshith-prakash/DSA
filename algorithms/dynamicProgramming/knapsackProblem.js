// The 0/1 Knapsack Problem is a classic dynamic programming problem that deals with combinatorial optimization

// You are given:
// A set of n items, each with a weight and a value.
// A knapsack that can carry a maximum weight W.

// Goal: Maximize the total value of items you can put into the knapsack without exceeding the weight limit.
// Each item can be either included (1) or not included (0)

// Time complexity : O(n × capacity)

const knapsack = (weights, values, capacity) => {
  const n = weights.length;

  // Initialize a 2D array (dp) with (n+1) rows and (capacity+1) columns filled with 0
  // dp[i][w] will store the maximum value for the first i items with weight limit w
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  // Build the dp table
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      // If the weight of the current item (i-1) is less than or equal to the current capacity
      if (weights[i - 1] <= w) {
        // Choose the maximum between:
        // 1. Not taking the current item
        // 2. Taking the current item and adding its value to the solution of the remaining capacity
        dp[i][w] = Math.max(
          dp[i - 1][w], // Exclude the item
          values[i - 1] + dp[i - 1][w - weights[i - 1]] // Include the item
        );

        console.log(i, w, dp[i][w]);
      } else {
        // If current item's weight is more than current capacity, we can't include it
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  // The bottom-right cell of the table contains the maximum value achievable
  return dp[n][capacity];
};

// Example usage:
const values = [10, 40, 60, 90, 100, 120, 150];
const weights = [5, 10, 20, 15, 25, 30, 35];
const capacity = 50;

console.log(knapsack(weights, values, capacity));
