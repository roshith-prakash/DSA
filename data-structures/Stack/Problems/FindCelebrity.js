// Given a matrix on n*n size, find the celebrity.
// Two conditions:
//      A celebrity knows no one.
//      Everyone knows the celebrity.
// Each row depicts a person, and columns for the row depicts whether that person knows someone.
// Diagonal elements (knowing themselves) will be depicted by 0.

//  Person 1:     0        1       0
//  Person 2:     0        0       0     <- Celebrity as person knows no one (row contains only zeros)
//  Person 3:     0        1       0

const findCelebrity = (matrix) => {

    // Create a stack 
    let stack = []

    // Push all rows (indexes) into the stack
    for (let i = 0; i < matrix.length; i++) {
        stack.push(i)
    }

    // Run loop till stack only has a single element (potential celebrity)
    while (stack.length > 1) {

        // Get the top two elements in the stack
        let A = stack.pop()
        let B = stack.pop()

        // If A knows B, then A cannot be a celebrity (Reason : Celebrity knows no one)
        if (matrix[A][B]) {
            // Push B back into stack as a choice for potential celebrity
            stack.push(B)
        }
        // If B knows A, then B cannot be a celebrity (Reason : Celebrity knows no one)
        else {
            // Push A back into stack as a choice for potential celebrity
            stack.push(A)
        }
    }

    // Retrieve the singular element in the array 
    let potentialCeleb = stack.pop()

    // If element is celebrity - element should know no one (row should only contain zeros)
    if (matrix[potentialCeleb].includes(1))
        return false

    // Check all columns related to the celebrity - all except diagonal (celeb element themselves) should be 1
    for (let i = 0; i < matrix.length - 1; i++) {
        // If value is zero (element does not know potential celeb) - return false as everyone must know celebrity
        if (potentialCeleb != i && matrix[i][potentialCeleb] == 0) {
            return false
        }
    }

    // If all conditions are matched, return index as celebrity
    return potentialCeleb
}

console.log("Person with index ", findCelebrity(
    [
        [0, 1, 1, 1],
        [0, 0, 1, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 0]  // Person 4 is the celebrity
    ]
), " is the celebrity")