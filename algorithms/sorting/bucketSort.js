// Bucket Sort is a sorting algorithm that works by distributing elements into a number of buckets, sorting each bucket individually, and then concatenating the sorted buckets to get the final sorted array.
// Input is uniformly distributed over a known range.
// Great for sorting floats between 0 and 1.

// Average case: O(n + k)
// Worst case: O(n²)

const bucketSort = (arr, bucketCount = 5) => {
  if (arr.length === 0) return arr;

  // Step 1: Find min and max
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  // Step 2 : Create buckets
  const bucketRange = (max - min) / bucketCount;
  const buckets = Array.from({ length: bucketCount }, () => []);

  // Distribute input array values into buckets
  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor((arr[i] - min) / bucketRange);
    const safeIndex = index === bucketCount ? bucketCount - 1 : index;
    buckets[safeIndex].push(arr[i]);
  }

  // Buckets :
  //
  //  [
  //    [ 0.17, 0.26, 0.21, 0.12, 0.23 ],
  //    [ 0.39 ],
  //    [],
  //    [ 0.72, 0.68 ],
  //    [ 0.78, 0.94 ]
  //  ]

  // Step 4: Sort each bucket and concatenate
  const sortedArray = [];
  for (const bucket of buckets) {
    // Sort values inside the bucket
    bucket.sort((a, b) => a - b);

    // Add values to sorted array
    sortedArray.push(...bucket);
  }

  return sortedArray;
};

const arr = [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68];

console.log(bucketSort(arr));
