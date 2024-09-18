// Given a Queue, reverse it.

class Queue {
    constructor() {
        this.queueArray = []
        this.size = 0
    }

    //Check if queue is empty 
    isEmpty() {
        return this.size == 0 ? true : false
    }

    // Add new value to queue
    push(value) {
        this.queueArray[this.size] = value
        this.size = this.size + 1
    }

    // Ger the value at the head 
    peek() {
        if (!this.isEmpty())
            return this.queueArray[0]
        else
            console.log("Queue is Empty!")
    }

    // Remove the value from the head
    pop() {
        if (!this.isEmpty()) {
            // Storing value in variable
            let elem = this.queueArray[0]

            // Pushing elements forward in queue
            for (let i = 0; i < this.size; i++) {
                this.queueArray[i] = this.queueArray[i + 1]
            }

            // Removing undefined / null elements
            this.queueArray = this.queueArray.filter(item => item != null || item != undefined)

            // Decreasing size
            this.size = this.size - 1

            return elem
        } else {
            console.log("Queue is Empty!")
        }

    }

    // Displaying the elements inside the Queue
    displayQueue() {
        if (!this.isEmpty()) {
            console.log("\nCurrent Queue :")
            console.log("<- Head\n")
            for (let x of this.queueArray) {
                console.log(x)
            }

        }
        else {
            console.log("Queue is Empty!")
        }
    }

    // To reverse the queue
    reverseQueue() {
        // Check if queue has data
        if (this.size == 0) {
            console.log("Stack is empty!")
            return
        }

        // Create a stack
        let stack = []

        // Push all element from queue to stack
        while (this.size > 0) {
            stack.push(this.pop())
        }

        // Push all element from stack to queue
        while (stack.length > 0) {
            this.push(stack.pop())
        }

        return
    }
}

const queue = new Queue();

queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);

queue.displayQueue();

queue.reverseQueue()

queue.displayQueue();
