// Function to return Least Common Multiple of two numbers 
function findLCM(a, b) {
    // Get the bigger number
    let larger = Math.max(a, b);
    // Get the smaller number
    let smaller = Math.min(a, b);

    // Add the larger number to itself till it is divisible by smaller number.
    // Return the number which is divisible.
    for (i = larger; ; i += larger) {
        if (i % smaller == 0)
            return i;
    }
}

let a = 21
let b = 4

console.log("LCM of " + a + " and " + b + " is " + findLCM(a, b));