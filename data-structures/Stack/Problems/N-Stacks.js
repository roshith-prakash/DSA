// Given an array of Size S, implement N stacks within the array - making sure to optimize the space provided.

// A sort of linked approach is used in this problem where the index of the next element in stack is stored.

// Arr      : Create an array of Size S to store data.
// Next     : Create an array of Size S ; this array will be used to store the index of the next available position OR the next index in the stack.
// Top      : Create an array of Size N ; this array will store the index of the top element of each stack.
// FreeSpot : Variable to store the index of the next free spot in the array


class NStack {
    constructor(N, S) {

        this.n = N; // Number of stacks
        this.s = S; // Size of array
        this.arr = new Array(this.s); // Array to hold the stack elements
        this.top = new Array(this.n).fill(-1); // Array to store top of each stack
        this.next = new Array(this.s); // Array to manage the next index in the stack
        this.freespot = 0; // Initially, the first free spot is 0

        // Initialize next array (pointing to the next free spot; since array is empty, next free spot is the next index)
        for (let i = 0; i < this.s - 1; i++) {
            this.next[i] = i + 1;
        }

        // No free spot will be present for last index
        this.next[this.s - 1] = -1;

    }

    // Push 'x' into the mth stack. Returns true if it gets pushed, otherwise false.
    push(x, m) {

        // Check for overflow condition
        if (this.freespot === -1) {
            console.log("\nNo space available!")
            return; // No space left in the array
        }

        // Find index where we can insert the element
        let index = this.freespot;

        // Insert the element into the array
        this.arr[index] = x;

        // Update the freespot to the next available spot
        this.freespot = this.next[index];

        // Link the new element with the previous top of the Mth stack
        this.next[index] = this.top[m - 1];

        // Update the top to the new index
        this.top[m - 1] = index;

        console.log(`\nAdding ${x} in Stack ${m}`)
        console.log("FreeSpot : ", this.freespot, "\tTop : ", this.top, "\tNext : ", this.next, "\tArray : ", this.arr)
    }

    // Pop the top element from mth stack. Returns -1 if stack is empty.
    pop(m) {

        // Check for underflow condition
        if (this.top[m - 1] === -1) {
            console.log(`\nStack ${m} is Empty!`)
            return -1; // Stack is empty
        }

        // Get the index of the top element
        let index = this.top[m - 1];

        // Update the top to point to the next element
        this.top[m - 1] = this.next[index];

        // Link the freed spot to the freespot list
        this.next[index] = this.freespot;

        // Update freespot to the current index
        this.freespot = index;

        console.log(`\nPopping ${this.arr[index]} from Stack ${m}`)
        console.log("FreeSpot : ", this.freespot, "\tTop : ", this.top, "\tNext : ", this.next, "\tArray : ", this.arr)
    }

    // Print all elements in the Mth stack from top to bottom
    printStack(m) {

        // Get the top index of the Mth stack
        let index = this.top[m - 1];

        // If index is -1, stack is empty
        if (index === -1) {
            console.log(`\nStack ${m} is empty.`);
            return;
        }

        // Create an array to store value in the stack
        let result = [];

        // Run till index is not -1 (empty condition)
        while (index !== -1) {
            // Push the element into the result array
            result.push(this.arr[index]);
            // Move to the next element in the stack
            index = this.next[index];
        }

        // Print the stack elements
        console.log(`\nStack ${m}: Top => ${result.join(", ")}`);
    }
}


const testCode = () => {
    // Instantiate NStack with 3 stacks and an array of length 6
    const stacks = new NStack(3, 6);

    // Test pushing into different stacks
    stacks.push(10, 1); // Push 10 into stack 1 => true
    stacks.push(20, 1); // Push 20 into stack 1 => true
    stacks.push(30, 2); // Push 30 into stack 2 => true
    stacks.push(40, 3); // Push 40 into stack 3 => true
    stacks.push(50, 2); // Push 50 into stack 2 => true
    stacks.push(60, 3); // Push 60 into stack 3 => true

    // Test pushing into a full stack
    stacks.push(70, 1); // Push 70 into any stack => false (since stack is full)

    stacks.printStack(1)
    stacks.printStack(2)
    stacks.printStack(3)

    // Test popping from stacks
    stacks.pop(1); // Pop from stack 1 => 20
    stacks.pop(1); // Pop from stack 1 => 10
    stacks.pop(1); // Pop from stack 1 => -1 (empty)

    stacks.printStack(1)
    stacks.printStack(2)
    stacks.printStack(3)

    stacks.pop(2); // Pop from stack 2 => 50
    stacks.pop(2); // Pop from stack 2 => 30
    stacks.pop(2); // Pop from stack 2 => -1 (empty)

    stacks.printStack(1)
    stacks.printStack(2)
    stacks.printStack(3)

    stacks.pop(3); // Pop from stack 3 => 60
    stacks.pop(3); // Pop from stack 3 => 40
    stacks.pop(3); // Pop from stack 3 => -1 (empty)

    stacks.printStack(1)
    stacks.printStack(2)
    stacks.printStack(3)

    // Test pushing again after popping
    stacks.push(70, 1); // Push 70 into stack 1 => true
    stacks.push(80, 2); // Push 80 into stack 2 => true

    stacks.printStack(1)
    stacks.printStack(2)
    stacks.printStack(3)

    // Test popping from updated stacks
    stacks.pop(1); // Pop from stack 1 => 70
    stacks.pop(2); // Pop from stack 2 => 80

    stacks.printStack(1)
    stacks.printStack(2)
    stacks.printStack(3)

}

testCode()