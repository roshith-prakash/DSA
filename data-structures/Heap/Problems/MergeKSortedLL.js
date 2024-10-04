// Given K sorted Linked Lists, merge them into a single sorted LL

class LLNode {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

// Implements Min Heap (0 indexed)
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Get the index of the parent node
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Get the index of the left child
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    // Get the index of the right child
    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    // Insert a value into the heap
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    // Move the last element up to maintain the heap property
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);

            if (this.heap[parentIndex].data > this.heap[index].data) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // Extract the minimum element from the heap
    delete() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    // Move the root element down to maintain the heap property
    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let leftIndex = this.getLeftChildIndex(index);
            let rightIndex = this.getRightChildIndex(index);
            let smallest = index;

            if (leftIndex < length && this.heap[leftIndex].data < this.heap[smallest].data) {
                smallest = leftIndex;
            }

            if (rightIndex < length && this.heap[rightIndex].data < this.heap[smallest].data) {
                smallest = rightIndex;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    // Return the size of the heap
    size() {
        return this.heap.length;
    }
}

const mergeKSortedLL = (headArray, k) => {
    // Create a Min heap
    let heap = new MinHeap()

    // Add both head nodes into the heap
    for (let i = 0; i < k; i++) {
        heap.insert(headArray[i])
    }

    // Head and tail pointers for merged LL
    let head = null
    let tail = null

    while (heap.size() > 0) {
        let node = heap.delete()

        // Add the next node in the heap
        if (node.next) {
            heap.insert(node.next)
        }

        // If head pointer is not initialized
        if (!head) {
            head = node
            tail = node
        }
        // If head and tail exists, point tail to node and then change tail to node
        else {
            tail.next = node
            tail = node
        }
    }

    return head
}


// First Linked List
const head1 = new LLNode(1)
const n2 = new LLNode(5)
const n3 = new LLNode(6)

head1.next = n2
n2.next = n3

// Second Linked List
const head2 = new LLNode(2)
const n4 = new LLNode(3)
const n5 = new LLNode(7)

head2.next = n4
n4.next = n5

// Array of head nodes
const arr = [head1, head2]
const k = 2

// Merge the lists and get the head
let mergedHead = mergeKSortedLL(arr, 2)
let temp = mergedHead

// Print the LL
while (temp) {
    console.log(temp.data)
    temp = temp?.next
}