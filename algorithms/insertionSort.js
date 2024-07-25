const insertionSort = ({ array }) => {

    // Mapping through the array    
    for (let i = 0; i < array.length; i++) {

        // Flag to check if array is sorted - assume it is al
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

console.log(insertionSort({ array: arr }))