// Find Kth Largest Element in Heap
// Use a Min Heap

class Heap {
    // Heap uses 1 based indexing and thus we add a placeholder value for 0th index
    constructor() {
        this.arr = [undefined]
    }

    // Insert a new value in the heap
    insert(value) {
        // Push a new value at the end of the heap
        this.arr.push(value)
        // Get index of newly pushed value
        let index = this.arr.length - 1

        while (index > 1) {
            // Get parent of new node
            let parent = Math.floor(index / 2)

            // In case of min heap - parent must be smaller than child
            // If condition is not met, swap parent and child 
            if (this.arr[parent] > this.arr[index]) {
                [this.arr[parent], this.arr[index]] = [this.arr[index], this.arr[parent]]
                index = parent
            }
            // If parent is snaller, simply return from function
            else {
                return
            }
        }
    }

    // Deletes the root value in the heap
    delete() {

        // Nothing is present inside the heap
        if (this.arr.length === 1) {
            console.log("Nothing to delete!");
            return;
        }

        // Replace root with the last element
        this.arr[1] = this.arr.pop();

        let i = 1;  // Start from root

        // Bubble down to maintain the min heap property
        while (true) {
            let left = 2 * i;
            let right = 2 * i + 1;

            // Assume current node (parent) is the smallest
            let smallest = i;

            // Compare with left child
            if (left < this.arr.length && this.arr[left] < this.arr[smallest]) {
                smallest = left;
            }

            // Compare with right child
            if (right < this.arr.length && this.arr[right] < this.arr[smallest]) {
                smallest = right;
            }

            // If the current node (parent) is smaller than both children, the heap is valid
            if (smallest === i) {
                break;
            }

            // Swap with the smaller child
            [this.arr[i], this.arr[smallest]] = [this.arr[smallest], this.arr[i]];

            // Move down to the child index
            i = smallest;
        }
    }
}

// Function to find the kth Largest element
const kthLargestElement = (arr, k) => {

    // Create a new heap
    let heap = new Heap()

    // Add the first k elements in heap
    for (let i = 0; i < k; i++) {
        heap.insert(arr[i])
    }

    // For the remaining elements, if element is larger than top of heap, delete top and add element to heap
    // At the end, the largest k elements will be in heap, top of which will be the Kth Largest Element
    for (let i = k; i < arr.length; i++) {
        if (arr[i] > heap.arr[1]) {
            heap.delete()
            heap.insert(arr[i])
        }
    }

    // Return top element of heap
    return heap.arr[1]
}

console.log(kthLargestElement([7, 10, 4, 3, 20, 15], 2))