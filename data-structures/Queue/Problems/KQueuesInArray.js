// Given an array of size S, implement K queues within it - use the space in an optimal way.

class KQueues {
    constructor(N, S) {

        this.n = N; // Number of Queues
        this.s = S; // Size of array
        this.arr = new Array(this.s); // Array to hold the queue elements
        this.front = new Array(this.n).fill(-1); // Array to store front of each queue
        this.rear = new Array(this.n).fill(-1); // Array to store rear of each queue
        this.next = new Array(this.s); // Array to manage the next index in the queue
        this.freespot = 0; // Initially, the first free spot is 0

        // Initialize next array (pointing to the next free spot; since array is empty, next free spot is the next index)
        for (let i = 0; i < this.s - 1; i++) {
            this.next[i] = i + 1;
        }

        // No free spot will be present for last index
        this.next[this.s - 1] = -1;

    }

    // Enqueue value x to the m-th queue
    enqueue(x, m) {

        // Check overflow condition
        if (this.freespot == -1) {
            console.log("No empty space!")
            return
        }

        // Get the index of empty space
        let index = this.freespot

        // Change empty space pointer to next empty space
        this.freespot = this.next[index]

        // If queue is empty
        if (this.front[m - 1] == -1) {
            // Initialise front as current index
            this.front[m - 1] = index
        }
        // If queue already has elements, link rear to current index
        else {
            this.next[this.rear[m - 1]] = index
        }

        // Change next of current index to -1
        this.next[index] = -1

        // Change rear of current queue to current index
        this.rear[m - 1] = index

        // Add the value to the index
        this.arr[index] = x

        return
    }

    // dequeue value from the m-th queue
    dequeue(m) {
        // Check underflow condition
        if (this.front[m - 1] == -1) {
            console.log("Queue is empty!")
            return
        }

        // Get the front of the queue
        let index = this.front[m - 1]

        // Move front to the next element in queue
        this.front[m - 1] = this.next[index]

        // Change next to free spot
        this.next[index] = this.freespot

        // Change freespot to current index
        this.freespot = index

        let data = this.arr[index]

        this.arr[index] = undefined

        return data
    }

    // Function to display a queue
    displayQueue(m) {
        // Get index of front
        let index = this.front[m - 1];

        // If index is -1, queue is emptu
        if (index == -1) {
            console.log(`Queue ${m} is empty!`);
            return;
        }
        // Array to push values
        let result = [];

        // While index is not -1 (end), push value at index and change index to next index
        while (index != -1) {
            result.push(this.arr[index]);
            index = this.next[index];
        }

        console.log(`Queue ${m}: ${result.join(' -> ')}`);
    }
}


// Test KQueues with 3 queues and an array size of 10
let kQueues = new KQueues(3, 10);

// Test enqueue operations
kQueues.enqueue(15, 1); // Enqueue 15 to queue 1
kQueues.enqueue(45, 2); // Enqueue 45 to queue 2
kQueues.enqueue(17, 1); // Enqueue 17 to queue 1
kQueues.enqueue(49, 1); // Enqueue 49 to queue 1
kQueues.enqueue(39, 3); // Enqueue 39 to queue 3
kQueues.enqueue(11, 3); // Enqueue 11 to queue 3

kQueues.displayQueue(1); // Should display queue 1: 15 -> 17 -> 49
kQueues.displayQueue(2); // Should display queue 2: 45
kQueues.displayQueue(3); // Should display queue 3: 39 -> 11

// Test dequeue operations
console.log(kQueues.dequeue(1)); // Dequeue from queue 1
console.log(kQueues.dequeue(2)); // Dequeue from queue 2
console.log(kQueues.dequeue(3)); // Dequeue from queue 3
console.log(kQueues.dequeue(1)); // Dequeue from queue 1 again
console.log(kQueues.dequeue(3)); // Dequeue from queue 3 again

kQueues.displayQueue(1); // Should display queue 1: 15 -> 17 -> 49
kQueues.displayQueue(2); // Should display queue 2: 45
kQueues.displayQueue(3); // Should display queue 3: 39 -> 11