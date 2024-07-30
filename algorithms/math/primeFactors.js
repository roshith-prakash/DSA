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

// Function to get prime factors
const getPrimeFactors = (num) => {
    // Array to push factors in
    let factors = []

    // Factors cannot be greater than num/2
    for (let i = 2; i < num / 2; i++) {
        // If number is a factor, check if the number is a prime number
        if (num % i == 0 && checkPrime(i)) {
            // If number is a prime number, add it to array
            factors.push(i);
        }
    }

    return factors
}

console.log(getPrimeFactors(12))