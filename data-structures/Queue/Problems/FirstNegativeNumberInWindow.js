// Find First Negative Integer in Ever Window of size K - return 0 if no negative numbers are present.

// Problem can be solved by using Native Array with shift function. 

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
}

const firstNegativeNumberInWindow = (arr, windowSize) => {

    // Create a Queue to store index of negative numbers
    const queue = new Queue()
    // Create a array to store answers
    const answer = []

    // Process first window
    for (let i = 0; i < windowSize; i++) {
        if (arr[i] < 0) {
            queue.push(i)
        }
    }

    // Check if negative number exists 
    if (!queue.isEmpty()) {
        answer.push(arr[queue.peek()])
    } else {
        answer.push(0)
    }

    // Process remaining windows
    // Start at windowSize because all elements previous to that have already been processed.
    for (let i = windowSize; i < arr.length; i++) {

        // On exceeding window size, remove index from queue
        if (!queue.isEmpty() && i - queue.peek() >= windowSize) {
            queue.pop()
        }

        // If number at current index is negative, push index to queue
        if (arr[i] < 0) {
            queue.push(i)
        }

        // Check if negative number exists 
        if (!queue.isEmpty()) {
            answer.push(arr[queue.peek()])
        } else {
            answer.push(0)
        }
    }

    return answer
}


console.log(firstNegativeNumberInWindow([-8, 2, 3, -6, 10], 2))