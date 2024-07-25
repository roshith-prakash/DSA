// Requires a sorted array
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

// Sorted Array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Running Binary Search
console.log(binarySearch({ arr: arr, start: 0, end: arr.length - 1, element: 9 }))
