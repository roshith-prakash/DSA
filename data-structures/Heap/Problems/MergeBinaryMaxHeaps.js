// Given two binary max heaps, merge them
// Heaps are 0 indexed.

class Heap {
    // Convert array to max heap
    static max_heapify(arr, size, i) {
        let largest = i
        let left = 2 * i + 1
        let right = (2 * i) + 2

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

let heap1 = [10, 5, 6, 2]
let heap2 = [12, 7, 9]

// Heap 3 - add elements from both heaps (not heapified yet)
let heap3 = [...heap1, ...heap2]
// Get size of heap
let size = heap3.length

// Create max heap for heap3
for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    Heap.max_heapify(heap3, size, i)
}

console.log(heap3)