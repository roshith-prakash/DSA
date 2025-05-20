// Radix Sort is a non-comparative sorting algorithm that sorts numbers (or strings) by processing individual digits.
// Sorts based on units place, then 10s place, then 100s place .........

// Time complexity : O (nk), where k is the maximum number of digits.

// Gets the digit at the current place
const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

// Gets the number of digits
const digitCount = (num) => {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// Finds the number with the most amount of digits
const mostDigits = (nums) => {
  return Math.max(...nums.map((num) => digitCount(num)));
};

const radixSort = (nums) => {
  //Get the number with the most digits
  const maxDigitCount = mostDigits(nums);

  // Loop through each digit place ( 0s, 10s, 100s ...)
  for (let k = 0; k < maxDigitCount; k++) {
    // Create 10 buckets to store values which relate to the digit
    const buckets = Array.from({ length: 10 }, () => []);

    // Loop through the numbers array
    for (let num of nums) {
      const digit = getDigit(num, k);
      buckets[digit].push(num);
    }

    // Example of how buckets will look after a pass
    // [
    //   [ 170, 90 ], [],
    //   [ 802, 2 ],  [],
    //   [ 24 ],      [ 45, 75 ],
    //   [ 66 ],      [],
    //   [],          []
    // ]

    console.log(buckets);

    // The buckets itself are sorted according to the digit place so merge them together.
    nums = [].concat(...buckets);
  }

  return nums;
};

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));
