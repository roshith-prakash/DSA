// Node to be used inside linked list.
class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

// Queue using Linked List. Head pointer used as top of the stack
class Queue {
    constructor() {
        this.head = null
        this.size = 0
    }

    // Push a new value to the stack
    push(value) {
        const node = new Node(value, null)
        // If head element already present
        if (this.head) {
            let current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        } else {
            // Add a node and point head to it.
            this.head = node
        }
        this.size = this.size + 1
    }

    // Pop a value from the queue
    pop() {
        if (this.head == null || this.size == 0) {
            console.log("Queue is Empty.")
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
            console.log("Queue is Empty!")
        }
    }

    // Check if queue is empty
    isEmpty() {
        return this.size == 0 ? true : false
    }

    // Traverse through the linked list to display queue values.
    displayQueue() {
        // If nodes are present
        if (this.size != 0 && this.head != null) {
            console.log("\nValues in the queue are:")
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
            console.log("Queue is Empty!")
        }
    }
}

const testQueue = () => {
    const queue = new Queue();

    console.log("Is the queue empty?", queue.isEmpty()); // true

    queue.push(10);
    queue.push(20);
    queue.push(30);

    queue.displayQueue(); // Current Stack: 10, 20, 30 <- Head

    console.log("Peek:", queue.peek()); // 30

    console.log("Pop:", queue.pop()); // 30
    console.log("Pop:", queue.pop()); // 20

    queue.displayQueue(); // Current Stack: 10

    console.log("Is the queue empty?", queue.isEmpty()); // false

    console.log("Pop:", queue.pop()); // 10

    console.log("Is the queue empty?", queue.isEmpty()); // true

    queue.displayQueue(); // Stack is Empty!
}

testQueue()