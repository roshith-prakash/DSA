// Function to get the highest common factor.
function getHCF(a, b) {
    // Get the smaller of the two numbers
    let smaller = Math.min(a, b);
    // Initialize HCF value
    let hcf = 1;

    for (let i = 1; i <= smaller; i++) {
        // If both numbers are divisible by i, replace HCF value
        if (a % i === 0 && b % i === 0) {
            hcf = i;
        }
    }

    return hcf;
}

const a = 21
const b = 8


console.log(`GCD of the giving numbers(${a},${b}) is:`, getHCF(a, b));