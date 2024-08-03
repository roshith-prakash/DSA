// Requires a sorted array
// Binary Search divides the array to be searched in half with each iteration and thus allows a faster search time. We find the middle of the array. If element is at the middle, element is found. If element is smaller, rerun the program with array[start to mid]. If element is larfer, rerun the program with array[mid to end]. Continue till element is found or only a single element is present in array.

// Time complexity : O (log n)
// Created with recursion
const binarySearch = ({ arr, start, end, element }) => {
    // Find middle of array
    const mid = Math.floor((start + end) / 2)

    // If element is at middle of array
    if (arr[mid] == element) {
        return { element: element, position: mid }
    }
    // If no more elements is present in array
    else if (start == mid + 1 || end == mid - 1) {
        return false
    }
    // If element is larger, search in the latter part of the array
    else if (element >= arr[mid]) {
        return binarySearch({ arr: arr, start: mid + 1, end: end, element: element })
    }
    // If element is smaller, search in the former part of the array
    else if (element < arr[mid]) {
        return binarySearch({ arr: arr, start: start, end: mid - 1, element: element })
    }
}

// Time complexity : O (log n)
// Created with iteration
const binarySearchIteration = ({ arr, start, end, element }) => {
    // Find middle of array
    let mid = Math.floor((start + end) / 2)
    let s = start
    let e = end

    while (s <= e) {
        // If element is at middle of array
        if (arr[mid] == element) {
            return { element: element, position: mid }
        }
        // If element is larger, search in the latter part of the array
        else if (element >= arr[mid]) {
            s = mid + 1
        }
        // If element is smaller, search in the former part of the array
        else if (element < arr[mid]) {
            e = mid - 1
        }

        mid = Math.floor((s + e) / 2)
    }

    return false
}

// Sorted Array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Running Binary Search

console.log(binarySearch({ arr: arr, start: 0, end: arr.length - 1, element: 4 }))
console.log(binarySearchIteration({ arr: arr, start: 0, end: arr.length - 1, element: 4 }))
