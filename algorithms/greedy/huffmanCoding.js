// Huffman Coding is used to compress data by assigning variable-length binary codes to input characters — shorter codes to more frequent characters, and longer codes to less frequent ones.

// Time Complexity : O(nlogn)

// IMPORTANT

// The Huffman Tree is NOT a heap at all. It’s a binary tree built using a Min Heap during its construction.

// The Min Heap is not used to enforce parent-child order in the tree; it’s just a tool to build the tree greedily, always combining the least frequent elements first.

//  Steps of Huffman Coding (Greedy Approach)
// 1. Input Frequencies: Count the frequency of each character.

// 2. Priority Queue: Insert all characters as leaf nodes into a min-heap (priority queue) based on their frequency.

// 3. Build Tree:
//      Remove the two nodes with the lowest frequency.
//      Create a new node with frequency = sum of those two.
//      Insert the new node back into the heap.
//      Repeat until only one node (the root) remains.

// 4. Assign Codes:
//      Traverse the tree.
//      Assign 0 for left and 1 for right (or vice versa).
//      Store the binary codes for each character.

// -------------------------------------------------------------------------

// Node structure for Huffman Tree
class HuffmanNode {
  constructor(char, freq, left = null, right = null) {
    this.char = char; // Character (null for internal nodes)
    this.freq = freq; // Frequency of the character(s)
    this.left = left; // Left child
    this.right = right; // Right child
  }
}

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
      if (this.heap[i].freq < this.heap[parent].freq) {
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
        if (left < length && this.heap[left].freq < this.heap[smallest].freq) {
          smallest = left;
        }

        if (
          right < length &&
          this.heap[right].freq < this.heap[smallest].freq
        ) {
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

// Build the Huffman Tree using greedy approach
const buildHuffmanTree = (charFreqs) => {
  const heap = new MinHeap();

  // Step 1: Insert all characters as individual nodes into the min-heap
  for (const [char, freq] of Object.entries(charFreqs)) {
    heap.insert(new HuffmanNode(char, freq));
  }

  // Step 2: Build the tree by combining two lowest freq nodes until one root remains
  while (heap.size() > 1) {
    const left = heap.extractMin(); // Least frequent
    const right = heap.extractMin(); // Second least frequent

    // Create a new internal node with combined frequency
    const newNode = new HuffmanNode(null, left.freq + right.freq, left, right);

    // Insert the new node back into the heap
    heap.insert(newNode);
  }

  return heap.extractMin(); // Final node is the root of Huffman Tree
};

// Generate Huffman codes by traversing the tree
const generateCodes = (node, prefix = "", codeMap = {}) => {
  if (!node) return;

  // If it's a leaf node, store the code
  if (node.char !== null) {
    codeMap[node.char] = prefix;
  }

  // Traverse left (add '0') and right (add '1')
  generateCodes(node.left, prefix + "0", codeMap);
  generateCodes(node.right, prefix + "1", codeMap);

  return codeMap;
};

// -------------------------------------------------------------------------------------------------------------

// Example character frequencies
const frequencies = {
  A: 50,
  B: 10,
  C: 30,
  D: 5,
  E: 3,
  F: 2,
};

// Step 1: Build Huffman Tree from the frequencies
const root = buildHuffmanTree(frequencies);

// Step 2: Generate Huffman Codes from the tree
const huffmanCodes = generateCodes(root);

// Sort the codeMap by character name (alphabetically)
const sortedCodes = Object.entries(huffmanCodes).sort(([a], [b]) =>
  a.localeCompare(b)
);

console.log("Huffman Codes :");
for (const [char, code] of sortedCodes) {
  console.log(`${char}: ${code}`);
}
