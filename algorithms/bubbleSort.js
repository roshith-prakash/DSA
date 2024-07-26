// In bubble sort, in every iteration we push the heaviest element to the end of the current array and reduce the size of the "to be sorted" array by 1.

// Time complexity : O (n^2)

const bubbleSort = ({ array }) => {

    // Mapping through the array    
    for (let i = 0; i < array.length; i++) {

        // Flag to check if array is sorted - assume it is already sorted.
        var isSorted = true

        // Since we are placing the heaviest element at the correct position in every outer loop iteration, we only need to loop through array length - i elements.
        for (let j = 0; j < array.length - i; j++) {

            // If current element is heavier than next element, swap them. Set the sorted flag to false.
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                isSorted = false
            }
        }

        // If no swaps were made, array is already sorted and we can return
        if (isSorted) {
            return array
        }
    }
    return array
}

const arr = [3, 4, 8, 9, 7, 5, 6, 1, 2]

console.log(bubbleSort({ array: arr }))

// How it is being sorted : ⬇️

// [
//     3, 4, 8, 7, 9,
//     5, 6, 1, 2
// ]
// [
//     3, 4, 8, 7, 5,
//     9, 6, 1, 2
// ]
// [
//     3, 4, 8, 7, 5,
//     6, 9, 1, 2
// ]
// [
//     3, 4, 8, 7, 5,
//     6, 1, 9, 2
// ]
// [
//     3, 4, 8, 7, 5,
//     6, 1, 2, 9
// ]
// [
//     3, 4, 7, 8, 5,
//     6, 1, 2, 9
// ]
// [
//     3, 4, 7, 5, 8,
//     6, 1, 2, 9
// ]
// [
//     3, 4, 7, 5, 6,
//     8, 1, 2, 9
// ]
// [
//     3, 4, 7, 5, 6,
//     1, 8, 2, 9
// ]
// [
//     3, 4, 7, 5, 6,
//     1, 2, 8, 9
// ]
// [
//     3, 4, 5, 7, 6,
//     1, 2, 8, 9
// ]
// [
//     3, 4, 5, 6, 7,
//     1, 2, 8, 9
// ]
// [
//     3, 4, 5, 6, 1,
//     7, 2, 8, 9
// ]
// [
//     3, 4, 5, 6, 1,
//     2, 7, 8, 9
// ]
// [
//     3, 4, 5, 1, 6,
//     2, 7, 8, 9
// ]
// [
//     3, 4, 5, 1, 2,
//     6, 7, 8, 9
// ]
// [
//     3, 4, 1, 5, 2,
//     6, 7, 8, 9
// ]
// [
//     3, 4, 1, 2, 5,
//     6, 7, 8, 9
// ]
// [
//     3, 1, 4, 2, 5,
//     6, 7, 8, 9
// ]
// [
//     3, 1, 2, 4, 5,
//     6, 7, 8, 9
// ]
// [
//     1, 3, 2, 4, 5,
//     6, 7, 8, 9
// ]
// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
// ]
// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
// ]
