// Node to be used inside linked list.
class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

// Queue using Linked List. Head pointer used as top of the stack
class DEQueueLL {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    // Push a new value to the back of the queue
    pushBack(value) {
        const node = new Node(value, null)
        // If head element already present
        if (this.head) {
            let current = this.head
            // Go to the last element
            while (current.next != null) {
                current = current.next
            }
            // Add pointer to new node
            current.next = node
            // Point tail to new node
            this.tail = node
        } else {
            // Add a node and point head to it.
            this.head = node
            this.tail = node
        }

        // Increase size
        this.size = this.size + 1
    }

    // Push a new value to the front of the queue
    pushFront(value) {
        const node = new Node(value, null)
        // If head element already present
        if (this.head) {
            let current = this.head
            node.next = current
            this.head = node
        } else {
            // Add a node and point head to it.
            this.head = node
            this.tail = node
        }

        // Increase size of the list
        this.size = this.size + 1
    }

    // Pop a value from the back of the queue
    popBack() {
        // No elements present
        if (this.head == null || this.size == 0) {
            console.log("Queue is Empty.")
            return
        }

        // Store value of tail
        let elem = this.tail

        // More than one element present
        if (this.tail != this.head) {
            let current = this.head

            // Go to 2nd last element
            while (current.next != this.tail) {
                current = current.next
            }
            // Remove pointer to tail
            current.next = null
            // Point tail to this element
            this.tail = current
        }
        else {
            // Only 1 element was present; reset both head & tail
            this.head = null
            this.tail = null
        }

        // Decrease size of the list
        this.size = this.size - 1
        return elem
    }

    // Pop a value from the front of the queue
    popFront() {
        // No nodes present
        if (this.head == null || this.size == 0) {
            console.log("Queue is Empty.")
            return
        }

        if (this.head.next) {
            // Store value of head to be returned
            let value = this.head.value
            // Make next element as the head
            this.head = this.head?.next
            // Decrease size of this list
            this.size = this.size - 1
            return value
        } else {
            // Store value of head to be returned
            let value = this.head.value
            // Since no more elements are present, make the head null
            this.head = null
            this.tail = null
            this.size = this.size - 1
            return value
        }
    }

    // Peek the value at the head
    peekFront() {
        if (this.head) {
            return this.head.value
        }
        else {
            console.log("Queue is Empty!")
        }
    }

    // Peek the value at the tail
    peekBack() {
        if (this.head) {
            return this.tail.value
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
    let queue = new DEQueueLL()

    console.log("Initial Queue:")
    queue.displayQueue()

    console.log("\nPushBack 1, 2, 3:")
    queue.pushBack(1)
    queue.pushBack(2)
    queue.pushBack(3)
    queue.displayQueue()

    console.log("\nPushFront 0:")
    queue.pushFront(0)
    queue.displayQueue()

    console.log("\nPeekFront:")
    console.log(queue.peekFront()) // Should print 0

    console.log("\nPeekBack:")
    console.log(queue.peekBack()) // Should print 3

    console.log("\nPopFront:")
    console.log(queue.popFront()) // Should print 0
    queue.displayQueue()

    console.log("\nPopBack:")
    console.log(queue.popBack()) // Should print 3
    queue.displayQueue()

    console.log("\nPopFront again:")
    console.log(queue.popFront()) // Should print 1
    queue.displayQueue()

    console.log("\nIsEmpty:")
    console.log(queue.isEmpty()) // Should print false

    console.log("\nPopFront again:")
    console.log(queue.popFront()) // Should print 2
    queue.displayQueue()

    console.log("\nIsEmpty:")
    console.log(queue.isEmpty()) // Should print true
}

testQueue()