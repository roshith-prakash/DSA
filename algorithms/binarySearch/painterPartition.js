// Given an array  of length ‘n’, where the array represents the boards and each element of the given array represents the length of each board.Some ‘k’ numbers of painters are available to paint these boards.Consider that each unit of a board takes 1 unit of time to paint.

// You are supposed to return the area of the minimum time to get this job done of painting all the ‘n’ boards under a constraint that any painter will only paint the continuous sections of boards.

const isPossible = (arr, painters, mid) => {
    // Maintaining counter
    let painterCount = 1
    // Boards which are alloted
    let boards = 0

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // If next board can be added without crossing limit, add it
        if (boards + arr[i] <= mid) {
            boards += arr[i]
        }
        // If limit is crossed, add a new painter to the counter. If maximum painter count is not exceeded, continue the loop, else return false as it is not a possible solution.
        else {
            painterCount++
            if (painterCount > painters || arr[i] > mid) {
                return false
            }
            // Resetting board value to 0 and adding arr[i] aka replacing value with arr[i]
            boards = arr[i]
        }
    }

    return true
}

const partition = (arr, painters) => {
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
        if (isPossible(arr, painters, mid)) {
            // Replace answer
            ans = mid
            // Decrease end value as anything above mid will also be a possible value.
            e = mid - 1
        }
        else {
            // Increase start value as anything below mid will also not be a possible value.
            s = mid + 1
        }
        // Recalculate mid
        mid = Math.floor((s + e) / 2)
    }

    return ans
}

let arr = [2, 1, 5, 6, 2, 3]
let painters = 2

console.log(partition(arr, painters))