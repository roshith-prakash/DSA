// Find number of Prime numbers before a certain given number.
// Create an array and set all values as true.
// For every true value in array, set all multiples of that value as false

const sieveOfEratothenes = (num) => {
    // Fill entire array with true
    const arr = new Array(num).fill(true)

    let count = 0
    // Since 0 & 1 are not prime, set them to false
    arr[0] = false
    arr[1] = false

    // Loop through all numbers
    for (let i = 2; i < num; i++) {

        // If number was not checked / is Prime
        if (arr[i]) {

            // Increase count 
            count++

            // Set all multiples of number as false
            for (let j = 2 * i; j < num; j = j + i) {
                arr[j] = false
            }
        }
    }

    return {
        count: count, primeNumbers: [...arr.keys()].filter(i => arr[i])
    }
}

console.log(sieveOfEratothenes(40))