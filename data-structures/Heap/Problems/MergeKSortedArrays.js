// Given K sorted arrays, Merge them in a sorted order

class Node {
    constructor(data, row, column) {
        this.data = data
        this.row = row
        this.column = column
    };
}

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

            if (this.heap[parentIndex].data > this.heap[index].data) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // Extract the minimum element from the heap
    delete() {
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

            if (leftIndex < length && this.heap[leftIndex].data < this.heap[smallest].data) {
                smallest = leftIndex;
            }

            if (rightIndex < length && this.heap[rightIndex].data < this.heap[smallest].data) {
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

const mergeKSortedArrays = (arrays, k) => {

    // Create a min heap
    let heap = new MinHeap()

    // Sorted, merged array
    let ans = []

    // Push the first element of each array into heap
    for (let i = 0; i < k; i++) {
        let node = new Node(arrays[i][0], i, 0)
        heap.insert(node)
    }

    // Get the smallest element (top) in heap and push that into the array
    while (heap.size() > 0) {
        let node = heap.delete()
        ans.push(node.data)

        // Get the array and the index of the element that was pushed
        let i = node.row
        let j = node.column

        // Get the index of the next element in the array
        let nextIndex = j + 1

        // If index is within bounds, Insert the next element that was in the array into the heap
        if (nextIndex < arrays[i].length) {
            let node = new Node(arrays[i][nextIndex], i, nextIndex)
            heap.insert(node)
        }

    }

    return ans
}

let arrays = [[1, 5, 9], [45, 90], [2, 6, 78, 100, 234]]
let k = 3

console.log(mergeKSortedArrays(arrays, k))
