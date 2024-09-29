// There are given N ropes of different lengths, we need to connect these ropes into one rope. The cost to connect two ropes is equal to sum of their lengths.The task is to connect the ropes with minimum cost.

// Implements Min Heap (0 indexed)
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Get the index of the parent node
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Get the index of the left child
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    // Get the index of the right child
    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    // Insert a value into the heap
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    // Move the last element up to maintain the heap property
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);

            if (this.heap[parentIndex] > this.heap[index]) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // Extract the minimum element from the heap
    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    // Move the root element down to maintain the heap property
    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let leftIndex = this.getLeftChildIndex(index);
            let rightIndex = this.getRightChildIndex(index);
            let smallest = index;

            if (leftIndex < length && this.heap[leftIndex] < this.heap[smallest]) {
                smallest = leftIndex;
            }

            if (rightIndex < length && this.heap[rightIndex] < this.heap[smallest]) {
                smallest = rightIndex;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    // Return the size of the heap
    size() {
        return this.heap.length;
    }
}

const findMinimumCost = (ropes) => {
    const heap = new MinHeap();

    // Insert all rope lengths into the heap
    for (let rope of ropes) {
        heap.insert(rope);
    }

    let totalCost = 0;

    // Combine ropes until only one remains
    while (heap.size() > 1) {
        let min1 = heap.extractMin();
        let min2 = heap.extractMin();

        let cost = min1 + min2;
        totalCost += cost;

        heap.insert(cost);
    }

    return totalCost;
}

// Example usage:
console.log(findMinimumCost([4, 3, 2, 6])); // Output: 29
