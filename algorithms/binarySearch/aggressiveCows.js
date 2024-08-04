// You are given an array 'arr' consisting of 'n' integers which denote the position of a stall.

// You are also given an integer 'k' which denotes the number of aggressive cows.

// You are given the task of assigning stalls to 'k' cows such that the minimum distance between any two of them is the maximum possible.

// Print the maximum possible minimum distance.

const isPossible = (arr, cows, mid) => {
    // Maintaining counter
    let cowCount = 1
    // Boards which are alloted
    let lastPosition = arr[0]

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // If arr[i] - position of last cow is greater than mid, add a cow
        if (arr[i] - lastPosition >= mid) {
            cowCount++
            if (cowCount == cows) {
                return true
            }
            lastPosition = arr[i]
        }
    }

    return false
}

const partition = (arr, cows) => {

    // Sort the array  
    arr.sort((a, b) => a - b)
    // Start for partition will be 0
    let s = 0
    // End will be the sum of all values in array
    let e = arr.reduce((sum, current) => sum + current, 0)
    // Find mid of the space
    let mid = Math.floor((s + e) / 2)
    // Variable to store answer
    let ans

    while (s <= e) {
        // Check if the mid value is a possible solution.
        if (isPossible(arr, cows, mid)) {
            // Replace current answer
            ans = mid
            // Increase start value as anything below mid will also be a possible value.
            s = mid + 1
        }
        else {
            // Decrease end value as anything above mid will also not be a possible value.
            e = mid - 1
        }
        // Recalculate mid
        mid = Math.floor((s + e) / 2)
    }

    return ans
}

let arr = [4, 2, 1, 3, 6]
let cows = 2

console.log(partition(arr, cows))