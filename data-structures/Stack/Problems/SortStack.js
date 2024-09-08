class Stack {
    constructor() {
        this.stackArray = []
        this.size = 0
    }

    isEmpty() {
        return this.size == 0 ? true : false
    }

    peek() {
        if (!this.isEmpty())
            return this.stackArray[this.size - 1]
        else
            console.log("Stack is Empty!")
    }

    pop() {
        if (!this.isEmpty()) {
            let elem = this.stackArray[this.size - 1]
            this.stackArray[this.size - 1] = undefined
            this.stackArray = this.stackArray.filter(item => item != undefined)
            this.size = this.size - 1
            return elem
        } else {
            console.log("Stack is Empty!")
        }

    }

    push(value) {
        this.stackArray[this.size] = value
        this.size = this.size + 1
    }

    displayStack() {
        if (!this.isEmpty()) {
            console.log("\nCurrent Stack :")
            for (let x of this.stackArray) {
                console.log(x)
            }
            console.log("<- Head\n")
        }
        else {
            console.log("Stack is Empty!")
        }
    }

    sortedInsert(value) {
        // If stack is empty or the top of the stack is smaller than current element, add element to stack
        if (this.size == 0 || (this.size != 0 && this.stackArray[this.size - 1] < value)) {
            this.stackArray.push(value)
            this.size = this.size + 1
            return
        }

        // Pop element from stack
        let num = this.stackArray.pop()
        // Decrement stack size
        this.size = this.size - 1

        // Recursively call function for "VALUE TO BE ADDED" (not popped element)
        this.sortedInsert(value)

        // Push back the popped element
        this.stackArray.push(num)
        // Increment stack size
        this.size = this.size + 1

    }

    sortStack() {
        // If stack is empty, return from stack
        if (this.size == 0) {
            return
        }

        // Pop element from stack
        let num = this.stackArray.pop()
        // Decrement stack size
        this.size = this.size - 1

        // Recursively call function till stack becomes empty
        this.sortStack()

        // Call the sortedInsert function for the current element
        this.sortedInsert(num)
    }
}

let stack = new Stack()
stack.push(4)
stack.push(3)
stack.push(1)
stack.push(5)
stack.push(2)
stack.push(6)

stack.sortStack()

stack.displayStack()
