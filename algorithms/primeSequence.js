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

// To find sequence of prime numbers upto a certain number
const primeSequence = (num) => {
    let primeNumbers = []

    for (let i = 2; i <= num; i++) {
        if (checkPrime(i)) {
            primeNumbers.push(i)
        }
    }

    return primeNumbers
}

console.log(primeSequence(40))
