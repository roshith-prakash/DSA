// The Class written below implements a Max Heap.
// max_heapify and min_heapify functions of a class can be directly called by passing an array

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

    // Convert array to max heap
    static max_heapify(arr, size, i) {
        let largest = i
        let left = 2 * i
        let right = (2 * i) + 1

        if (left <= size && arr[largest] < arr[left]) {
            largest = left
        }

        if (right <= size && arr[largest] < arr[right]) {
            largest = right
        }

        if (largest != i) {
            [arr[largest], arr[i]] = [arr[i], arr[largest]]
            this.max_heapify(arr, size, largest)
        }
    }

    // Convert array to min heap
    static min_heapify(arr, size, i) {
        let smallest = i
        let left = 2 * i
        let right = (2 * i) + 1

        // If parent is larger than child, change smallest index to child
        if (left <= size && arr[smallest] > arr[left]) {
            smallest = left
        }

        // If parent is larger than child, change smallest index to child
        if (right <= size && arr[smallest] > arr[right]) {
            smallest = right
        }

        // If smallest is not parent, swap parent and child
        if (smallest != i) {
            [arr[smallest], arr[i]] = [arr[i], arr[smallest]]
            // Call function for child
            this.min_heapify(arr, size, smallest)
        }
    }

    // Print heap - start from index 1 as heaps are 1 indexed
    printHeap() {
        console.log("\nHeap:")
        for (let i = 1; i < this.arr.length; i++) {
            console.log(this.arr[i])
        }
    }
}


// -----------------------------------------------------------------------------


const heap = new Heap()

// Insert values in heap
heap.insert(17)
heap.insert(15)
heap.insert(6)
heap.insert(10)
heap.insert(10)
heap.insert(7)

// Print heap
heap.printHeap()

// Delete root from heap
heap.delete()

// Print heap
heap.printHeap()


// --------------------------------------------------------------------------------s


// Heapifying an array

// Create an array
let arr = [undefined, 54, 53, 55, 52, 50]
// Get the size of the heap (0 index not considered)
let size = arr.length - 1

// Max Heapify the array
for (let i = Math.floor(size / 2); i > 0; i--) {
    Heap.max_heapify(arr, size, i)
}

// Print the max heaped array
console.log("\nMax Heap of Array:")
for (let i = 1; i <= size; i++) {
    console.log(arr[i])
}

// Min Heapify the array
for (let i = Math.floor(size / 2); i > 0; i--) {
    Heap.min_heapify(arr, size, i)
}

// Print the min heaped array
console.log("\nMin Heap of Array:")
for (let i = 1; i <= size; i++) {
    console.log(arr[i])
}