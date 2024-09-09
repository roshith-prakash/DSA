// To find the largest rectangle in histogram, for each bar of histogram, we find a previous smaller element and next smaller element and store their indices to get the number of bars that can be used for the rectangle.

// In this example, we are returning the index of the next smaller element (since width is calculated using index)
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

        // While stack top is not -1 and the element in main array is greater than current, pop elements
        while (stack[stack.length - 1] != -1 && arr[stack[stack.length - 1]] >= current) {
            stack.pop()
        }

        // Push the element at top of the stack (index) to answer array
        answer[i] = stack[stack.length - 1]
        // Push current index to stack
        stack.push(i)
    }

    return answer
}

// In this example, we are returning the index of the previous smaller element (since width is calculated using index)
const findPrevSmaller = (arr) => {
    // Stack to push elements
    let stack = []
    // Add -1 for last element (and if no larger is present )
    stack.push(-1)
    // Answer array
    let answer = []

    for (let i = 0; i < arr.length; i++) {
        // Get current element
        let current = arr[i]

        // While stack top is not -1 and the element in main array is greater than current, pop elements
        while (stack[stack.length - 1] != -1 && arr[stack[stack.length - 1]] >= current) {
            stack.pop()
        }

        // Push the element at top of the stack (index) to answer array
        answer[i] = stack[stack.length - 1]
        // Push current index to stack
        stack.push(i)
    }

    return answer
}

const findLargestRectangleInHistogram = (arr) => {
    // For each element, gets the index of the next smaller element
    let next = findNextSmaller(arr)
    // For each element, gets the index of the previous smaller element
    let prev = findPrevSmaller(arr)

    // Variable to stoe Max area possible
    let maxArea = 0


    for (let i = 0; i < arr.length; i++) {

        // If smaller element is not present to the right, array length can be considered next smallest index
        if (next[i] == -1) {
            next[i] = arr.length
        }

        // Height of rectangle - value in main array
        let length = arr[i]
        // Breadth of rectangle is the number of histogram bars currently used, caluclated as index of the next smaller element - the previous smaller element - 1
        let breadth = next[i] - prev[i] - 1

        // Calculate area, compare to pre-existing value and store the lareger value
        let area = length * breadth
        maxArea = Math.max(maxArea, area)
    }

    console.log("Largest Rectangle : ", maxArea)
    return maxArea
}

// Refer histogram.png for histogram used in the example
findLargestRectangleInHistogram([2, 1, 5, 6, 2, 3])

