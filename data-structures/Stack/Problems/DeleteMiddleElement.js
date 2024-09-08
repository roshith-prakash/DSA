// End of array is top of stack as elements are easier to add and remove at the end.
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

    deleteElement(stack, count) {

        // If middle is reached, pop element from array and return
        if (count == Math.floor(this.size / 2)) {
            stack.pop()
            return
        }

        // Pop element from stack
        let topElement = stack.pop()

        // Recursively call function till middle is reached
        this.deleteElement(stack, count + 1)

        // Push back the popped elements
        stack.push(topElement)

    }

    deleteMiddleElement() {
        let count = 0

        this.deleteElement(this.stackArray, count)
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)

stack.displayStack()

stack.deleteMiddleElement()

stack.displayStack()