// Heap Sort implementation

// The Class written below implements a Max Heap.
// max_heapify and min_heapify functions of a class can be directly called by passing an array

class Heap {

    // Heap uses 1 based indexing and thus we add a placeholder value for 0th index
    constructor() {
        this.arr = [undefined]
    }

    // Convert array to max heap
    static max_heapify(arr, size, i) {
        let largest = i
        let left = 2 * i
        let right = (2 * i) + 1

        // If parent is smaller than child, change largest index to child
        if (left <= size && arr[largest] < arr[left]) {
            largest = left
        }

        // If parent is smaller than child, change largest index to child
        if (right <= size && arr[largest] < arr[right]) {
            largest = right
        }

        // If largest is not parent, swap parent and child
        if (largest != i) {
            [arr[largest], arr[i]] = [arr[i], arr[largest]]
            // Call function for child
            this.max_heapify(arr, size, largest)
        }
    }
}

// Sorting a heap
const heapSort = (arr, n) => {
    // Get size (arr.length - 1 as heap is 1 indexed)
    let size = n

    // Size must be greater than 1 (1st element (0th index) is not considered)
    while (size > 1) {
        // Swap root element with last element
        [arr[size], arr[1]] = [arr[1], arr[size]]
        // Reduce size since max value is sent to the last index
        size--

        // Bring root to correct position
        Heap.max_heapify(arr, size, 1)
    }
}


// -----------------------------------------------------------------------------


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

// Sort the heap
heapSort(arr, size)

// Print the sorted heap array
console.log("\nHeap Sort:")
for (let i = 1; i <= size; i++) {
    console.log(arr[i])
}

