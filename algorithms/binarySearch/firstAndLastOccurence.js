// Find the first occurence of an elemnt in a sorted array.
const firstOccurence = ({ arr, element }) => {
    // Find middle of array
    let s = 0
    let e = arr.length - 1
    let mid = Math.floor((s + e) / 2)
    let ans = false


    while (s <= e) {
        // If element is found, add index to answer and move to the left by replacing end value
        if (arr[mid] == element) {
            ans = mid
            e = mid - 1
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

    // Return the index or false
    return ans
}

// Find the last occurence of an element in a sorted array
const lastOccurence = ({ arr, element }) => {
    // Find middle of array
    let s = 0
    let e = arr.length - 1
    let mid = Math.floor((s + e) / 2)
    let ans = false


    while (s <= e) {
        // If element is found, add index to answer and move to the right by replacing start value
        if (arr[mid] == element) {
            ans = mid
            s = mid + 1
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

    // Return the index or false
    return ans
}

// Sorted array
const arr = [1, 2, 2, 2, 3, 5]
// Find first occurence
let firstOccurenceIndex = firstOccurence({ arr, element: 2 })
// Find last occurence
let lastOccurenceIndex = lastOccurence({ arr, element: 2 })
// Logging answer
console.log({ firstOccurenceIndex, lastOccurenceIndex })
