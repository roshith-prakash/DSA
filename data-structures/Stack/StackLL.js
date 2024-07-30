// Node to be used inside linked list.
class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

// Stack using Linked List. Head pointer used as top of the stack
class Stack {
    constructor() {
        this.head = null
        this.size = 0
    }

    // Push a new value to the stack
    push(value) {
        const node = new Node(value, null)
        if (this.head) {
            // Add a new node at the start and point it to the previously starting element
            node.next = this.head
            this.head = node
            this.size = this.size + 1
        } else {
            // Add a node and point head to it.
            this.head = node
            this.size = this.size + 1
        }
    }

    // Pop a value from the stack
    pop() {
        if (this.head == null || this.size == 0) {
            console.log("Stack is Empty.")
            return
        }

        if (this.head.next) {
            // Store value of head to be returned
            let value = this.head.value
            // Make next element as the head
            this.head = this.head?.next
            this.size = this.size - 1
            return value
        } else {
            // Store value of head to be returned
            let value = this.head.value
            // Since no more elements are present, make the head null
            this.head = null
            this.size = this.size - 1
            return value
        }
    }

    // Peek the value at the head
    peek() {
        if (this.head) {
            return this.head.value
        }
        else {
            console.log("Stack is Empty!")
        }
    }

    // Check if stack is empty
    isEmpty() {
        return this.size == 0 ? true : false
    }

    // Traverse through the linked list to display stack values.
    displayStack() {
        // If nodes are present
        if (this.size != 0 && this.head != null) {
            console.log("\nValues in the stack are:")
            // Loop through the list to display values
            let current = this.head
            console.log("<- Head")
            while (current) {
                console.log(current.value)
                current = current?.next
            }
        }
        // If no nodes are present.
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

    stack.displayStack(); // Current Stack: Head-> 30, 20, 10

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