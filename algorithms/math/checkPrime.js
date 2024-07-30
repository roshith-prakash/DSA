const checkPrime = (num) => {
    // Flag - default true
    var isPrime = true

    // The square of any number that is a factor will be less than the number itself.
    for (let i = 2; i * i <= num; i++) {
        // If num is completely divisible, it is not a prime number
        if (num % i === 0) {
            isPrime = false
        }
    }

    return isPrime
}

console.log(checkPrime(53))