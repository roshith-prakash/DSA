// Find the first non repeating character in Stream.
// Print non repeating character if present; else print #

const firstNonRepeatingCharacterinStream = (str) => {

    // Object to store count of each character
    let charCounter = {}
    // Queue to store non repeating character
    let queue = []
    // Answer string
    let ans = ""

    // Loop through the string
    for (let i = 0; i < str.length; i++) {
        // Get character
        let char = str[i]

        // If character is already in obj, increase count
        if (charCounter[char]) {
            charCounter[char] = charCounter[char] + 1
        }
        // Else initialise count to 0
        else {
            charCounter[char] = 1
        }

        // Push character to queue
        queue.push(char)

        // While queue is not empty
        while (queue.length > 0) {
            // If character at start of queue is repeating, remove it from queue
            if (charCounter[queue[0]] > 1) {
                queue.shift()
            }
            // If character is non repeating, push it to string and break loop
            else {
                ans = ans + queue[0]
                break
            }
        }

        // If loop becomes empty (else condition not reached), push #
        if (queue.length == 0) {
            ans = ans + "#"
        }
    }

    return ans
}

console.log(firstNonRepeatingCharacterinStream("aabc"))