// The Optimal Merge Pattern is a classic Greedy Algorithm problem that deals with efficient merging of files (or data sequences) to minimize the total cost of merging.
// Given n files with sizes f1, f2, ..., fn, merge them all into a single file.
// Each merge of two files has a cost equal to the sum of their sizes.
// The objective is to minimize the total cost of merging all files.

// Always merge the two smallest files first. (Similar to Huffman Coding)

// Time Complexity : O(n log n)

// MinHeap class to implement a priority queue based on frequency
class MinHeap {
  constructor() {
    this.heap = []; // Array-based min heap
  }

  // Insert a node and maintain heap property
  insert(node) {
    this.heap.push(node);

    let i = this.heap.length - 1;

    // Maintain Heap
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.heap[i] < this.heap[parent]) {
        // Swap if child has smaller frequency than parent
        [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
        i = parent;
      } else {
        break;
      }
    }
  }

  // Remove and return the node with minimum frequency
  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;

      let i = 0;
      const length = this.heap.length;

      while (true) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let smallest = i;

        // Find the smallest among parent, left, and right
        if (left < length && this.heap[left] < this.heap[smallest]) {
          smallest = left;
        }

        if (right < length && this.heap[right] < this.heap[smallest]) {
          smallest = right;
        }

        // Swap if needed and continue down the heap
        if (smallest !== i) {
          [this.heap[i], this.heap[smallest]] = [
            this.heap[smallest],
            this.heap[i],
          ];
          i = smallest;
        } else {
          break;
        }
      }
    }
    return min;
  }

  // Return current size of heap
  size() {
    return this.heap.length;
  }
}

const optimalMergePattern = (fileSizes) => {
  const heap = new MinHeap();

  // Insert all files as nodes with freq
  fileSizes.forEach((size) => heap.insert(size));

  let totalCost = 0;

  // Extract the two smallest children
  while (heap.size() > 1) {
    const first = heap.extractMin();
    const second = heap.extractMin();

    // Merge the files
    const mergedFreq = first + second;
    totalCost += mergedFreq;

    // Insert the merged file back into the heap
    heap.insert(mergedFreq);
  }

  return totalCost;
};

const fileSizes = [4, 8, 6, 12];
console.log(optimalMergePattern(fileSizes)); // Output: 58
