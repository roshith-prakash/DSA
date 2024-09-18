// Given two data sets - current petrol & distance to next petrol pumps, find a starting point from which a complete circle can be completed.

// Circle is checked as deficit is added for each failure point.

const circularTourStartingPoint = (arr) => {
    // The deficit
    let deficit = 0
    // The extra amount remaining
    let balance = 0
    // Starting index for complete circle
    let start = 0

    for (let i = 0; i < arr.length; i++) {
        // Calculate balance
        balance += arr[i].petrol - arr[i].distance

        // If balance is negative, start cannot be at any previous position; thus increment start to i+1
        if (balance < 0) {
            deficit += balance
            start = i + 1
            balance = 0
        }
    }

    // If deficit + balance is greater than 0, starting point is valid
    if (deficit + balance >= 0) {
        return start
    }
    // Return false as loop cannot be completed 
    else {
        return false
    }
}

console.log(circularTourStartingPoint([
    { petrol: 4, distance: 6 },
    { petrol: 6, distance: 5 },
    { petrol: 7, distance: 3 },
    { petrol: 4, distance: 5 },
]))