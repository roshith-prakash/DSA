// Find Kth Smallest Element in Heap
// Use a Max Heap

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

            // In case of max heap - parent must be larger than child
            // If condition is not met, swap parent and child 
            if (this.arr[parent] < this.arr[index]) {
                [this.arr[parent], this.arr[index]] = [this.arr[index], this.arr[parent]]
                index = parent
            }
            // If parent is larger, simply return from function
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

        // Bubble down to maintain the max heap property
        while (true) {
            let left = 2 * i;
            let right = 2 * i + 1;

            // Assume current node (parent) is the largest
            let largest = i;

            // Compare with left child
            if (left < this.arr.length && this.arr[left] > this.arr[largest]) {
                largest = left;
            }

            // Compare with right child
            if (right < this.arr.length && this.arr[right] > this.arr[largest]) {
                largest = right;
            }

            // If the current node (parent) is larger than both children, the heap is valid
            if (largest === i) {
                break;
            }

            // Swap with the larger child
            [this.arr[i], this.arr[largest]] = [this.arr[largest], this.arr[i]];

            // Move down to the child index
            i = largest;
        }
    }
}

// Function to find the kth Smallest element
const kthSmallestElement = (arr, k) => {

    // Create a new heap
    let heap = new Heap()

    // Add the first k elements in heap
    for (let i = 0; i < k; i++) {
        heap.insert(arr[i])
    }

    // For the remaining elements, if element is smaller than top of heap, delete top and add element to heap
    // At the end, the smallest k elements will be in heap, top of which will be the Kth Smallest Element
    for (let i = k; i < arr.length; i++) {
        if (arr[i] < heap.arr[1]) {
            heap.delete()
            heap.insert(arr[i])
        }
    }

    // Return top element of heap
    return heap.arr[1]
}

console.log(kthSmallestElement([7, 10, 4, 3, 20, 15], 3))