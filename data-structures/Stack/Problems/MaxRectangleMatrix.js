// Given a binary Matrix, find the largest rectangular area possible.
// We use the largest rectangle in 1D array approach with incrementing values as we move down the rows in Matrix. 

// Function to find the index of next smaller element for each element.
const findNextSmaller = (arr) => {
    let stack = [];
    let answer = Array(arr.length).fill(arr.length);  // Initialize with the length of the array
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            answer[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }
    return answer;
};

// Function to find the index of previous smaller element for each element.
const findPrevSmaller = (arr) => {
    let stack = [];
    let answer = Array(arr.length).fill(-1);  // Initialize with -1
    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            answer[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }
    return answer;
};

// Find the largest rectangle in 1D array
const findLargestRectangle = (arr) => {
    // Get next smaller element array
    let next = findNextSmaller(arr);
    // Get previous smaller element array
    let prev = findPrevSmaller(arr);
    let maxArea = 0;

    // Loop through the 1D array 
    for (let i = 0; i < arr.length; i++) {
        // Length of rectangle is value of element
        let length = arr[i];
        // Breadth of rectangle is the number of spaces currently used, caluclated as index of the next smaller element - the previous smaller element - 1
        let breadth = next[i] - prev[i] - 1;
        // Calculate area, compare to pre-existing value and store the larger value
        maxArea = Math.max(maxArea, length * breadth);
    }

    return maxArea;
};

const findMaxRectangleInMatrix = (matrix) => {
    // If matrix is empty, return 0
    if (!matrix.length) return 0;

    // Get the largest area for the first row in matrix
    let area = findLargestRectangle(matrix[0]);
    // Get the column length of the matrix
    let rowLength = matrix[0].length;
    // Create a 1D array representing a singular row (histogram)
    let rowHistogram = [...matrix[0]];

    // On every iteration, if the element is zero, we replace value in array by 0 , else we add 1 to increment length (value) of element.

    // Loop through the matrix rows
    for (let i = 1; i < matrix.length; i++) {
        // Looping through the matrix columns
        for (let j = 0; j < rowLength; j++) {
            // Update the 1D array
            rowHistogram[j] = matrix[i][j] === 0 ? 0 : rowHistogram[j] + 1;
        }

        // Compute max area for the current row histogram
        area = Math.max(area, findLargestRectangle(rowHistogram));
    }

    return area;
};

console.log(findMaxRectangleInMatrix([
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0]
]));
