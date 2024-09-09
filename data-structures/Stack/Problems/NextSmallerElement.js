// In a given array, for all elements get the next smaller element in array.
// Add -1 for last element and for elements for which smaller elements are not found

const findNextSmaller = (arr) => {
    // Stack to push elements
    let stack = []
    // Add -1 for last element (and if no larger is present )
    stack.push(-1)
    // Answer array
    let answer = []

    for (let i = arr.length - 1; i >= 0; i--) {
        // Get current element
        let current = arr[i]

        // While element at top of array is larger than current, pop elements
        while (stack[stack.length - 1] >= current) {
            stack.pop()
        }

        // Push the element at top of the stack to answer array
        answer[i] = stack[stack.length - 1]
        // Push current element to stack
        stack.push(current)
    }

    return answer
}

console.log(findNextSmaller([1, 5, 2, 3, 4, 3]))
