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
}

const testStack = () => {
    const stack = new Stack();

    console.log("Is the stack empty?", stack.isEmpty()); // true

    stack.push(10);
    stack.push(20);
    stack.push(30);

    stack.displayStack(); // Current Stack: 10, 20, 30 <- Head

    console.log("Peek:", stack.peek()); // 30

    console.log("Pop:", stack.pop()); // 30
    console.log("Pop:", stack.pop()); // 20

    stack.displayStack(); // Current Stack: 10

    console.log("Is the stack empty?", stack.isEmpty()); // false

    console.log("Pop:", stack.pop()); // 10

    console.log("Is the stack empty?", stack.isEmpty()); // true

    stack.displayStack(); // Stack is Empty!
}

testStack()
