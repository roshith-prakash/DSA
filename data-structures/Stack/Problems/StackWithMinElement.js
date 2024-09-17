class SpecialStack {
    constructor() {
        this.stackArray = [];
        this.mini = Infinity;  // Initialize with a value larger than any possible stack element
    }

    push(data) {
        // When stack is empty, add element to stack and initialise min val as current val
        if (this.stackArray.length === 0) {
            this.stackArray.push(data);
            this.mini = data;
        } else {
            // If current value is smaller than min, calculate value to push and change min to current value
            if (data < this.mini) {
                // Modify the value before pushing to maintain minimum
                this.stackArray.push(2 * data - this.mini);
                this.mini = data;
            }
            // If value is larger, directly push to stack
            else {
                this.stackArray.push(data);
            }
        }
    }

    pop() {
        if (this.stackArray.length === 0) {
            return -1;  // Stack is empty
        }

        let curr = this.stackArray.pop();
        if (curr > this.mini) {
            return curr;
        } else {
            let prevMin = this.mini;
            let val = 2 * this.mini - curr;
            this.mini = val;
            return prevMin;
        }
    }

    top() {
        if (this.stackArray.length === 0) {
            return -1;  // Stack is empty
        }

        let curr = this.stackArray[this.stackArray.length - 1];
        if (curr < this.mini) {
            return this.mini;
        } else {
            return curr;
        }
    }

    isEmpty() {
        return this.stackArray.length === 0;
    }


    getMin() {
        if (this.stackArray.length === 0) {
            return -1;  // Stack is empty
        }

        return this.mini;
    }
}

// Test the SpecialStack class
const testCode = () => {

    // Test Code for Stack with getMin() functionality
    let stack = new SpecialStack();

    console.log("Initial Stack is empty:", stack.isEmpty());  // Should return true
    console.log("Initial min (should not exist):", stack.getMin());  // Should return "Stack is empty"

    stack.push(5);
    console.log("After pushing 5, current min:", stack.getMin());  // Should return 5

    stack.push(3);
    console.log("After pushing 3, current min:", stack.getMin());  // Should return 3

    stack.push(7);
    console.log("After pushing 7, current min:", stack.getMin());  // Should return 3

    stack.push(2);
    console.log("After pushing 2, current min:", stack.getMin());  // Should return 2

    stack.push(6);
    console.log("After pushing 6, current min:", stack.getMin());  // Should return 2

    console.log("Popped:", stack.pop());  // Should pop 6
    console.log("Current min after popping:", stack.getMin());  // Should return 2

    console.log("Popped:", stack.pop());  // Should pop 2
    console.log("Current min after popping:", stack.getMin());  // Should return 3

    console.log("Popped:", stack.pop());  // Should pop 7
    console.log("Current min after popping:", stack.getMin());  // Should return 3

    console.log("Popped:", stack.pop());  // Should pop 3
    console.log("Current min after popping:", stack.getMin());  // Should return 5

    console.log("Popped:", stack.pop());  // Should pop 5
    console.log("Current min after popping:", stack.getMin());  // Should return "Stack is empty"

}

testCode();
