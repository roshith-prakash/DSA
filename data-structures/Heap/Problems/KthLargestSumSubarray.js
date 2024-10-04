// Given an array, get the Kth Largest sum subarray.
// Subarray is consecutive elements in the array
// Return the Kth largest sum of a subarray

// Using a 0 indexed min heap
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Return size of heap
    size() {
        return this.heap.length;
    }

    // Get top element of heap (smallest in heap)
    top() {
        return this.heap[0];
    }

    // Insert a value into the min heap
    push(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    // Delete the top value from min heap
    pop() {
        if (this.size() > 1) {
            this.swap(0, this.heap.length - 1);
            const poppedValue = this.heap.pop();
            this.bubbleDown(0);
            return poppedValue;
        }
        return this.heap.pop();
    }

    // Make sure newly added element is at right position
    bubbleUp(index) {
        let parent = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[parent] > this.heap[index]) {
            this.swap(index, parent);
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    // Make sure root is at right position (after deletion)
    bubbleDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;

        if (left < this.size() && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.size() && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.bubbleDown(smallest);
        }
    }

    // Swap elements at two indices
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

function getKthLargest(arr, k) {
    // Create min heap
    const miniHeap = new MinHeap();
    // Get size of array
    const n = arr.length;

    // Run loop on array 
    for (let i = 0; i < n; i++) {
        let sum = 0;

        // Start J from i as subarray is consecutive elements 
        for (let j = i; j < n; j++) {
            sum += arr[j];
            // Heap will contain the K largest elements - push if K length is not reached
            if (miniHeap.size() < k) {
                miniHeap.push(sum);
            }
            // If k value is reached, remove the top (smallest) element and push new sum
            else {
                if (sum > miniHeap.top()) {
                    miniHeap.pop();
                    miniHeap.push(sum);
                }
            }
        }
    }

    return miniHeap.top();
}

// Example usage
const arr = [1, -2, 3, -4, 5];
const k = 2;
console.log(getKthLargest(arr, k));  // Output will depend on the sum calculations
