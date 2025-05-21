//  The greedy version applies to the Fractional Knapsack Problem, where you’re allowed to take fractions of items.

// You are given:
//
// A set of n items, each with:
// a weight w[i]
// a value v[i]
// A maximum capacity W for a knapsack.
//
// Objective:
// Select a subset of the items such that:
// The total weight does not exceed W
// The total value is maximized

// Time Complexity : O(nlogn)

const fractionalKnapsack = (weights, values, capacity) => {
  const n = weights.length;

  // Create array of items with value-to-weight ratio
  const items = [];
  for (let i = 0; i < n; i++) {
    items.push({
      weight: weights[i],
      value: values[i],
      ratio: values[i] / weights[i],
    });
  }

  // Sort items by descending value-to-weight ratio
  items.sort((a, b) => b.ratio - a.ratio);

  console.log(items);

  let totalValue = 0;

  for (const item of items) {
    if (capacity >= item.weight) {
      // Take the whole item
      capacity -= item.weight;
      totalValue += item.value;
    } else {
      // Take the fraction that fits
      totalValue += item.ratio * capacity;
      break;
    }
  }

  return totalValue;
};

const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 20;

console.log(fractionalKnapsack(weights, values, capacity));
