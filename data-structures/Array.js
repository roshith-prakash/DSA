// Return index of element or false
const search = (arr, element) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            return i
        }
    }
    return false
}

// Print the array
const traversal = (arr) => {
    for (let x of arr) {
        console.log(x, " ")
    }
}

// Insert at position
const insertion = (arr, element, position) => {

    // Start form end of array and shift elements to one position right.
    for (let i = arr.length - 1; i >= position; i--) {
        arr[i + 1] = arr[i]
    }

    // Add element at required position.
    arr[position] = element

    return arr
}

// Delete element
const deletion = (arr, element) => {
    let index

    // Search the loop for element
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            index = i
            break
        }
    }

    // If index not found, return false to indicate element is not present
    if (isNaN(index)) {
        return false
    }

    // From the index of the element, pull back elements to 1 position behind current position (rewrites the element.)
    for (let i = index; i < (arr.length); i++) {
        arr[i] = arr[i + 1]
    }

    // Pop so that last index is not null/undefined
    arr.pop()

    // Return the array
    return arr
}

// Reverse the array
const reverse = (arr) => {
    // Create a temp array
    const reverseArr = []

    //Index for temp array 
    let index = 0

    // Add elements in the temp array in reverse order.
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr[index] = arr[i]
        index = index + 1
    }

    // Replace original array with reverse array
    arr = reverseArr

    return arr
}

// Left rotate the array
// Bring the first element to the end of the array
const leftRotation = (arr, requiredRotations) => {
    let rotations = 0

    // While rotations are less than required rotations
    while (rotations < requiredRotations) {
        // Take first element of array in a variable
        let first = arr[0]

        // Shift all elements to one position on the left.
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i + 1]
        }

        // Add the first element to the end of the array
        arr[arr.length - 1] = first

        // increment rotation count.
        rotations++
    }

    return arr
}

// Right rotate the array
// Bring the last element to the start of the array
const rightRotation = (arr, requiredRotations) => {
    let rotations = 0

    // While rotation count is less than required rotations
    while (rotations < requiredRotations) {
        // Take last element in the variable
        let last = arr[arr.length - 1]

        // Shift all elements to 1 position right
        for (let i = arr.length - 1; i >= 0; i--) {
            arr[i] = arr[i - 1]
        }

        // Add the last element at the start of the array
        arr[0] = last

        // Increase rotation count
        rotations++
    }

    return arr
}

// Generate possible subarrays of the array
const generateSubArrays = (arr) => {

    // Parent array - will contain subarrays
    const fullArr = []

    const printSubArray = (arr, start, end) => {

        // When end index is higher - process has terminated
        if (end > arr.length) {
            return
        }
        // If start index is higher than end index, increment end index and reset start index
        else if (start > end) {
            printSubArray(arr, 0, end + 1)
        }
        // Create a sub array from start index to end index
        // Increment start index once process is completed
        else {
            // Create a new array
            let newArr = []

            // Push all elements from start index to end index
            for (let i = start; i < end; i++) {
                newArr.push(arr[i])
            }

            // Push the created array to the Parent array
            if (newArr.length > 0) {
                fullArr.push(newArr)
            }

            printSubArray(arr, start + 1, end)
        }
        return
    }

    printSubArray(arr, 0, 0)
    return (fullArr.sort())
}

// Array
const arr = [1, 2, 3, 4]

// Performing Operations
console.log("Search : ", search(arr, 3))
console.log("Insertion : ", insertion(arr, 6, 2))
console.log("Deletion : ", deletion(arr, 6))
console.log("Reverse : ", reverse(arr))
console.log("Left rotation : ", leftRotation(arr, 1))
console.log("Right rotation : ", rightRotation(arr, 1))
console.log("Subarrays : ", generateSubArrays(arr))
