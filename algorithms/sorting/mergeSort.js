// Merge Sort Algorithm
// Merge sort breaks the array till they are individual elements and then merges them together in a sorted order.

// Time complexity : O (n * log n)

// Merge function which merges the array elements together.
const merge = ({ array, low, mid, high }) => {

    // Index for first (left) part of array
    let i = low
    // Index for second (right) part of array 
    let j = mid + 1

    // Index for second Array
    let k = low

    // Array in which elements will be added
    let secondArray = []

    // While both arrays are not completely traversed
    while (i <= mid && j <= high) {

        // If element in left array is smaller
        if (array[i] < array[j]) {
            // Add element in the array and increment indexes
            secondArray[k] = array[i]
            i++
            k++
        }
        // If element in right array is smaller
        else {
            // Add element in the array and increment indexes
            secondArray[k] = array[j]
            j++
            k++
        }
    }

    // If left array was not completely traversed, add all elements in the second array.
    while (i <= mid) {
        secondArray[k] = array[i]
        i++
        k++
    }

    // If right array was not completely traversed, add all elements in the second array.
    while (j <= high) {
        secondArray[k] = array[j]
        j++
        k++
    }

    // Mapping the elements to the original array (Mind the index!)
    for (let index = low; index <= high; index++) {
        array[index] = secondArray[index]
    }
}

// Mergesort function which calls itself recursively to divide the array to be sorted.
const mergeSort = ({ array, low, high }) => {
    if (low < high) {
        // Find the middle index of the array
        let mid = Math.floor((low + high) / 2)
        // Use mergeSort on elements to the left of the array
        mergeSort({ array: array, low: low, high: mid })
        // Use mergeSort on elements to the right of the array
        mergeSort({ array: array, low: mid + 1, high: high })
        // Merge the arrays
        merge({ array: array, low: low, mid: mid, high: high })
    }
}

const arr = [3, 4, 8, 4, 9, 7, 5, 6, 1, 2]

mergeSort({ array: arr, low: 0, high: arr.length - 1 })

console.log(arr)


// How it is being sorted : ⬇️

// [
//     3, 4, 8, 4, 9,
//     7, 5, 6, 1, 2
// ]
// [
//     3, 4, 8, 4, 9,
//     7, 5, 6, 1, 2
// ]
// [
//     3, 4, 8, 4, 9,
//     7, 5, 6, 1, 2
// ]
// [
//     3, 4, 4, 8, 9,
//     7, 5, 6, 1, 2
// ]
// [
//     3, 4, 4, 8, 9,
//     5, 7, 6, 1, 2
// ]
// [
//     3, 4, 4, 8, 9,
//     5, 6, 7, 1, 2
// ]
// [
//     3, 4, 4, 8, 9,
//     5, 6, 7, 1, 2
// ]
// [
//     3, 4, 4, 8, 9,
//     1, 2, 5, 6, 7
// ]
// [
//     1, 2, 3, 4, 4,
//     5, 6, 7, 8, 9
// ]
// [
//     1, 2, 3, 4, 4,
//     5, 6, 7, 8, 9
// ]