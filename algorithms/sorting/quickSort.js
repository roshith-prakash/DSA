
// Quick Sort Algorithm - Takes a pivot element and finds the correct position for it in the array.
// We are taking the first element in the array as the pivot in this case.

// Time complexity : O (n * log n)

// Partition function that places the pivot element in the correct position.
const partition = ({ array, low, high }) => {

    // Pivot is the element which will be placed in it's correct position in the current iteration.
    var pivot = array[low]

    // i will be index of element larger than pivot. Start from start (excluding pivot.)
    var i = low + 1

    // j will be index of element smaller than the pivot. Start from end of array.
    var j = high

    // Perform the below till j exceeds or is equal to i.
    do {
        // Find an element which is larger than the pivot.
        while (array[i] <= pivot) {
            i++
        }

        // Find an element which is smaller than the pivot.
        while (array[j] > pivot) {
            j--
        }

        // If i is smaller than j, swap the elements at i & j.
        if (i < j) {
            [array[i], array[j]] = [array[j], array[i]]
        }
    } while (i < j)

    // Swap pivot element with the element at position j. 
    [array[low], array[j]] = [array[j], array[low]]


    return j
}

// Quicksort function which calls itself recusively to divide the array to be sorted.
const quickSort = ({ array, low, high }) => {

    if (low < high) {
        // Use partition to place the low element at the correct position in the array.
        let partitionIndex = partition({ array: array, low: low, high: high })
        // Use quicksort on elements to the left of the element.
        quickSort({ array: array, low: low, high: partitionIndex - 1 })
        // Use quicksort on elements to the right of the element.
        quickSort({ array: array, low: partitionIndex + 1, high: high })
    }
}

const arr = [3, 4, 8, 4, 9, 7, 5, 6, 1, 2]

quickSort({ array: arr, low: 0, high: arr.length - 1 })

console.log(arr)


// How it is being sorted : ⬇️

// [
//     3, 2, 8, 4, 9,
//     7, 5, 6, 1, 4
// ]
// [
//     3, 2, 1, 4, 9,
//     7, 5, 6, 8, 4
// ]
// [
//     3, 2, 1, 4, 9,
//     7, 5, 6, 8, 4
// ]
// [
//     1, 2, 3, 4, 9,
//     7, 5, 6, 8, 4
// ]
// [
//     1, 2, 3, 4, 4,
//     7, 5, 6, 8, 9
// ]
// [
//     1, 2, 3, 4, 4,
//     7, 5, 6, 8, 9
// ]
// [
//     1, 2, 3, 4, 4,
//     7, 5, 6, 8, 9
// ]
// [
//     1, 2, 3, 4, 4,
//     6, 5, 7, 8, 9
// ]
// [
//     1, 2, 3, 4, 4,
//     5, 6, 7, 8, 9
// ]
// [
//     1, 2, 3, 4, 4,
//     5, 6, 7, 8, 9
// ]