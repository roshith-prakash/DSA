// In insertion sort, we try to create a sorted array on the left side of the current index, gradually adding elements inside it on every iteration.

const insertionSort = ({ array }) => {

    // Mapping through the array - we will create a sorted array to the left of the index. Since an array of one element is already a sorted array, we start from the second element (index = 1)
    for (let index = 1; index < array.length; index++) {

        // Get value at current index and store it in a variable
        let currentValue = array[index]

        // Get the index to the element previous to the current index
        let j = index - 1

        // We need to put the current element in the correct position in the sorted array on the left. So we start at the end of the sorted array & compare the value to the current value. If value at j is greater than current Value, shift it to the right.

        while (j >= 0 && array[j] > currentValue) {
            array[j + 1] = array[j]
            j--
        }

        // The correct position of the current element is j+1. Rewrite the element with the new value to be added.
        array[j + 1] = currentValue

    }

    return array
}

const arr = [3, 4, 8, 9, 7, 5, 6, 1, 2]

console.log(insertionSort({ array: arr }))