// A pair of brackets is redundant if they do not contain a operator inside them.

const findRedundantBrackets = (str) => {
    // Creating a stack - contains operators and opening brackets
    let stack = []

    //Loop through string 
    for (let i = 0; i < str.length; i++) {
        let ch = str[i]

        // If operator or opening bracket, then push to stack
        if (ch == "(" || ch == "+" || ch == '-' || ch == "*" || ch == "/") {
            stack.push(ch)
        }
        else {

            // If character is a closing bracket
            if (ch == ")") {
                // Set flag
                let isRedundant = true

                // Check top of stack - till it doesnt reach opening brackets
                // If stack top returns operator, current parentheses is not redundant
                while (stack[stack.length - 1] != "(") {
                    let top = stack[stack.length - 1]

                    // Set redundant flag to false
                    if (top == "+" || top == '-' || top == "*" || top == "/") {
                        isRedundant = false
                    }

                    // Pop element from stack
                    stack.pop()
                }

                // If stack pop did not return operator,
                if (isRedundant) {
                    return true
                }

                // Pop element from stack - opening bracket
                stack.pop()
            }
        }
    }

    return false
}

console.log(findRedundantBrackets("((a/b) + (a*b))"))