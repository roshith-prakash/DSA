// Count the number of leaf nodes in the tree

// Node to represent a singular element in the tree
class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}

// In order traversal of binary tree.
// Prints in order of : Left Subtree | Root | Right Subtree
const inOrder = (head, counter) => {
    // Traverse the tree to find leaf nodes

    if (head == null) {
        return counter
    }

    inOrder(head.left, counter)

    // If both left and right child is Null (leaf node), add to count
    if (!head.left && !head.right) {
        counter.count = counter.count + 1
    }

    inOrder(head.right, counter)

    return counter
}

// Also known as Breadth First Search
const levelOrder = (head) => {
    console.log("\n")

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

// Class for Binary Tree
class BinaryTree {
    constructor() {
        this.head = null
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

    // Function to count leaf nodes
    countLeafNodes() {
        return inOrder(this.head, { count: 0 })
    }

}

//         50
//        /   \
//      30     70
//     /      /  \
//   20      60   80


const bt = new BinaryTree()
const bt1 = bt.createNode(50)
const bt2 = bt.createNode(30)
const bt3 = bt.createNode(70)
const bt4 = bt.createNode(20)
const bt6 = bt.createNode(60)
const bt7 = bt.createNode(80)

bt.inititializeHead(bt1)
bt.addToLeft(bt1, bt2)
bt.addToRight(bt1, bt3)
bt.addToLeft(bt2, bt4)
bt.addToLeft(bt3, bt6)
bt.addToRight(bt3, bt7)

console.log(bt.countLeafNodes())