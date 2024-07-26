// In selection sort, we try to create a sorted array on the left side of the current index. 
// In every iteration, we swap the smallest element on the right side to i position.

// Time complexity : O (n^2)

const selectionSort = ({ array }) => {

    // Mapping through the array - we will create a sorted array to the left of the index by finding the smallest number inside the array. 
    for (let index = 0; index < array.length; index++) {

        // Store the index as the index of smallest value.
        var indexOfMinimum = index

        // Loop through the array to find the smallest element and store it's index.
        for (let j = index + 1; j < arr.length; j++) {
            if (array[j] < array[indexOfMinimum]) {
                indexOfMinimum = j
            }
        }

        // Swap the current index (index) value and the smallest value (indexOfMinimum)
        [array[index], array[indexOfMinimum]] = [array[indexOfMinimum], array[index]]
    }

    return array
}

const arr = [3, 4, 8, 9, 7, 5, 6, 1, 2]

console.log(selectionSort({ array: arr }))

// How it is being sorted : ⬇️

// [
//     1, 4, 8, 9, 7,
//     5, 6, 3, 2
// ]
// [
//     1, 2, 8, 9, 7,
//     5, 6, 3, 4
// ]
// [
//     1, 2, 3, 9, 7,
//     5, 6, 8, 4
// ]
// [
//     1, 2, 3, 4, 7,
//     5, 6, 8, 9
// ]
// [
//     1, 2, 3, 4, 5,
//     7, 6, 8, 9
// ]
// [
//     1, 2, 3, 4, 5,
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
// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
// ]
// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
// ]