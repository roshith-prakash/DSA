// To insert at bottom, pop elements till stack is empty, add the element and push back the popped elements.

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

    insertElement(value) {
        // Stack is empty i.e bottom reached.
        if (this.size == 0) {
            this.stackArray.push(value)
            this.size = this.size + 1
            return
        }

        // Remove element from stack
        let num = this.stackArray.pop()
        // Reduce size of stack
        this.size = this.size - 1
        // Recursively call function till stack becomes empty
        this.insertElement(value)

        // Push back the element that was popped
        this.stackArray.push(num)
        // Increase size of stack
        this.size = this.size + 1
    }

    insertAtBottom(value) {
        this.insertElement(value)
    }
}

let stack = new Stack()
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.insertAtBottom(1)
console.log(stack.size)

stack.displayStack()