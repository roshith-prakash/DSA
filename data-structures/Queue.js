// Start of array is the head of the queue. Easier to add elements to queue. Expensive to pop elements
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

