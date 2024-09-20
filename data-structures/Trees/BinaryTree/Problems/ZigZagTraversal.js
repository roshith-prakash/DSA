// ZigZag Traversal / Spiral Traversal
// Level order traversal where levels are printed in alternate directions

// Node to represent a singular element in the tree
class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}

// Also known as Breadth First Search
const levelOrder = (head) => {
    // Create a Queue
    const queue = []

    // Push root node into queue
    queue.push(head)
    // Push null whenever a level is completed (since root only has one element; add null)
    queue.push(null)

    // While queue is not empty
    while (queue.length) {

        // Get the node at the front of queue
        let temp = queue[0]
        // Dequeue node
        queue.shift()

        // If value at front was null, level was completed
        if (temp == null) {
            // Add new line to signify new level
            console.log("\n")
            // If queue still has elements, push null
            if (queue.length) {
                queue.push(null)
            }
        }
        // If value at front is a node
        else {
            // Print node value
            process.stdout.write(String(temp?.value) + " ")

            // Add left node to queue
            if (temp?.left) {
                queue.push(temp?.left)
            }

            // Add right node to queue
            if (temp?.right) {
                queue.push(temp?.right)
            }
        }
    }
}

// Zig Zag Traversal - level order traversal where direction alternates on ever level
const zigzagTraversal = (head) => {
    // Result array
    let result = []

    // If null, return result
    if (head == null) {
        return result
    }

    // Create a Queue
    const queue = []
    // Push root node into queue
    queue.push(head)
    // When true, traversal moves from left to right
    let flag = true

    // While queue is not empty
    while (queue.length) {
        // Temporary array (Since order can be straight or reverse) 
        let ans = []

        // Get queue length (Store in variable as shift will reduce size)
        let levelSize = queue.length

        for (let i = 0; i < levelSize; i++) {
            // Get the node at the front of queue
            let temp = queue.shift()

            // Check if value is to be inserted L to R or R to L
            let index = flag ? i : levelSize - i - 1
            // Add value to array
            ans[index] = temp?.value

            // Add left node to queue
            if (temp?.left) {
                queue.push(temp?.left)
            }

            // Add right node to queue
            if (temp?.right) {
                queue.push(temp?.right)
            }
        }

        // Reverse flag when level ends
        flag = !flag

        // Push temp array value to result array
        result = [...result, ...ans]
    }

    return result
}

// Class for Binary Tree
class BinaryTree {
    constructor() {
        this.head = null
    }

    // Initialize node as head
    inititializeHead(node) {
        this.head = node
    }

    // Create a node
    createNode(value) {
        const node = new Node(value, null, null)
        return node
    }

    // Initialize node as head
    inititializeHead(node) {
        this.head = node
    }

    // Add node2 to the left of node 1
    addToLeft(node1, node2) {
        if (node1 && node2) {
            node1.left = node2
        }
    }

    // Add node2 to the right of node 1
    addToRight(node1, node2) {
        if (node1 && node2) {
            node1.right = node2
        }
    }

    // Level order Traversal
    levelOrder() {
        levelOrder(this.head)
    }

    zigzagTraversal() {
        return zigzagTraversal(this.head).join(" ")
    }
}

//         50
//        /   \
//      30     70
//     /      /  \
//   40      60   80
//          /       \
//         65        90

const bt = new BinaryTree()
const bt1 = bt.createNode(50)
const bt2 = bt.createNode(30)
const bt3 = bt.createNode(70)
const bt4 = bt.createNode(60)
const bt5 = bt.createNode(80)
const bt6 = bt.createNode(90)
const bt7 = bt.createNode(65)
const bt8 = bt.createNode(40)

bt.inititializeHead(bt1)
bt.addToLeft(bt1, bt2)
bt.addToRight(bt1, bt3)
bt.addToLeft(bt3, bt4)
bt.addToRight(bt3, bt5)
bt.addToRight(bt5, bt6)
bt.addToLeft(bt4, bt7)
bt.addToLeft(bt2, bt8)

console.log("\nLevel Order Traversal : ")
bt.levelOrder()
console.log("Zig Zag Traversal : ")
console.log(bt.zigzagTraversal(), "\n")