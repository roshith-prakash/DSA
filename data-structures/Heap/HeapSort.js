// Heap Sort implementation

// To sort in ascending order - Max heapify the array and call heapsort with max_heapify function
// To sort in descending order - Min heapify the array and call heapsort with min_heapify function

class Heap {

    // Heap uses 1 based indexing and thus we add a placeholder value for 0th index
    constructor() {
        this.arr = [undefined]
    }

    // For an array, this function puts the element at i-th index at its correct position in a Max Heap
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

    // For an array, this function puts the element at i-th index at its correct position in a Min Heap
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

