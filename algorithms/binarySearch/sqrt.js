// Getting Square root of a number using binary seach.
// The square root of a number will exist between 0 - number.
// We divide the sample set at each turn and check if mid^2 is equal to the number.

const getSquareRoot = (num) => {
    // Setting variables
    let start = 0
    let end = num
    let mid = (start + end) / 2
    let sqrt = false

    while (!sqrt) {
        // Find the square of the mid
        let squared = mid * mid

        // If mid^2 == num, set sqrt to break loop
        if (Number(squared).toFixed(2) == num) {
            sqrt = Number(mid).toFixed(2)
        }
        // If mid^2 is smaller than num, mid is smaller than required sqrt
        else if (squared < num) {
            start = mid
        }
        // If mid^2 is greater than num, mid is greater than required sqrt
        else {
            end = mid
        }

        // Set new mid value
        mid = (start + end) / 2
    }

    return sqrt
}

console.log(getSquareRoot(100))
console.log(Math.sqrt(100))