// Minimum cost to make a valid parentheses string :
// (Number of unbalanced closed brackets + 1) / 2  +  (Number of unbalanced open brackets + 1) / 2

const findMinimumCost = (str) => {

    // Odd length string - cannot be made valid
    if (str.length % 2 != 0) {
        return false
    }

    let stack = []

    for (let i = 0; i < str.length; i++) {
        let ch = str[i]

        // If opening brace, push to stack
        if (ch == "(") {
            stack.push(ch)
        }
        // Character is closed brace
        else {
            // Valid condition - pop from stack
            if (stack.length != 0 && stack[stack.length - 1] == "(") {
                stack.pop()
            }
            else {
                stack.push(ch)
            }
        }
    }

    // Number of closing brackets
    let a = 0
    // Number of opening brackets
    let b = 0

    while (stack.length > 0) {
        if (stack[stack.length - 1] == "(") {
            b++
        }
        else {
            a++
        }
        stack.pop()
    }

    // Calculate the number of brackets that need to be reversed
    let ans = Math.floor(((a + 1) / 2)) + Math.floor(((b + 1) / 2))

    return ans
}

console.log(findMinimumCost("(()("))