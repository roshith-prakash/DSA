// Find number of Prime numbers before a certain given number.
// Create an array and set all values as true.
// For every true value in array, set all multiples of that value as false

const sieveOfEratothenes = (num) => {
    const arr = new Array(num).fill(true)

    let count = 0
    arr[0] = false
    arr[1] = false

    for (let i = 2; i < num; i++) {
        if (arr[i]) {
            count++

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