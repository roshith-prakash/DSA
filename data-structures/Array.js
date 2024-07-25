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

    for (let i = arr.length - 1; i >= position; i--) {
        arr[i + 1] = arr[i]
    }

    arr[position] = element

    return arr
}

// Delete element
const deletion = (arr, element) => {
    let index

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            index = i
            break
        }
    }

    if (isNaN(index)) {
        return false
    }

    for (let i = index; i < (arr.length); i++) {
        arr[i] = arr[i + 1]
    }

    arr.pop()
    return arr
}

// Reverse the array
const reverse = (arr) => {
    const reverseArr = []

    let index = 0
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr[index] = arr[i]
        index = index + 1
    }

    arr = reverseArr

    return arr
}

// Left rotate the array
// Bring the first element to the end of the array
const leftRotation = (arr, requiredRotations) => {
    let rotations = 0

    while (rotations < requiredRotations) {
        let first = arr[0]

        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i + 1]
        }
        arr[arr.length - 1] = first

        rotations++
    }

    return arr
}

// Right rotate the array
// Bring the last element to the start of the array
const rightRotation = (arr, requiredRotations) => {
    let rotations = 0

    while (rotations < requiredRotations) {
        let last = arr[arr.length - 1]

        for (let i = arr.length - 1; i >= 0; i--) {
            arr[i] = arr[i - 1]
        }

        arr[0] = last

        rotations++
    }

    return arr
}

// Generate possible subarrays of the array
const generateSubArrays = (arr) => {
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
            let newArr = []

            for (let i = start; i < end; i++) {
                newArr.push(arr[i])
            }

            if (newArr.length > 0) {
                fullArr.push(newArr)
            }

            printSubArray(arr, start + 1, end)
        }
        return
    }

    printSubArray(arr, 0, 0)
    return (fullArr)
}


const arr = [1, 2, 3, 4]
console.log("Search : ", search(arr, 3))
console.log("Insertion : ", insertion(arr, 6, 2))
console.log("Deletion : ", deletion(arr, 6))
console.log("Reverse : ", reverse(arr))
console.log("Left rotation : ", leftRotation(arr, 1))
console.log("Right rotation : ", rightRotation(arr, 1))
console.log("Subarrays : ", generateSubArrays(arr))
