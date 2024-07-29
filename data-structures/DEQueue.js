// DE Queue is a double ended queue.
// Insertion and deletion possible from both ends.
class DEQueue {
    constructor() {
        this.queueArray = []
        this.size = 0
    }

    //Check if queue is empty 
    isEmpty() {
        return this.size == 0 ? true : false
    }

    // Add new value to queue from the back
    pushBack(value) {
        this.queueArray[this.size] = value
        // Increase size of the array
        this.size = this.size + 1
    }

    // Add new value to queue from the front
    pushFront(value) {
        // Shift the elements to the right
        for (let i = this.size; i > 0; i--) {
            this.queueArray[i] = this.queueArray[i - 1]
        }
        // Replace value of the head of the array
        this.queueArray[0] = value
        // Increase size of array
        this.size = this.size + 1
    }

    // Get the value at the head 
    peekFront() {
        if (!this.isEmpty())
            return this.queueArray[0]
        else
            console.log("Queue is Empty!")
    }

    // Get the value at the tail 
    peekBack() {
        if (!this.isEmpty())
            return this.queueArray[this.size - 1]
        else
            console.log("Queue is Empty!")
    }

    // Remove the value from the head
    popFront() {
        if (!this.isEmpty()) {
            // Storing value in variable
            let elem = this.queueArray[0]

            // Pushing elements forward in queue
            for (let i = 0; i < this.size; i++) {
                this.queueArray[i] = this.queueArray[i + 1]
            }

            // Removing undefined / null elements
            this.queueArray = this.queueArray.filter(item => item != null || item != undefined)

            // Decreasing size of array
            this.size = this.size - 1

            return elem
        } else {
            console.log("Queue is Empty!")
        }
    }

    // Remove the value from the back
    popBack() {
        if (!this.isEmpty()) {
            // Storing value in variable
            let elem = this.queueArray[this.size - 1]

            // Replace value to undefined
            this.queueArray[this.size - 1] = undefined

            // Removing undefined / null elements
            this.queueArray = this.queueArray.filter(item => item != null || item != undefined)

            // Decrease size of array
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
            // Print values inside queue array
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
    let queue = new DEQueue()

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

