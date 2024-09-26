// Given a preorder traversal, create a BST.

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
const inOrder = (head) => {
    while (head != null) {
        inOrder(head.left)
        console.log({ value: head.value, left: head.left?.value, right: head.right?.value })
        inOrder(head.right)
        return
    }
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

// Class for Binary Search Tree
class BST {
    constructor() {
        this.head = null
    }

    // Print inOrder traversal of BST (Sorted values)
    inOrder() {
        inOrder(this.head)
    }

    // Prints level order traversal of BST
    levelOrder() {
        levelOrder(this.head)
    }

    // Add a new node inside the BST
    addNode(node, value) {
        // If head is not present, add node as head and return
        if (!this.head) {
            const node = new Node(value, null, null)
            this.head = node
            return
        }
        else {
            // If node with value is already present, display error and return
            if (value == node.value) {
                console.log("Value already present in BST!")
                return
            }
            // If value is smaller than node & node's left is empty, add to the left of node
            else if (value < node.value && node.left == null) {
                const newNode = new Node(value, null, null)
                node.left = newNode
                return
            }
            // If value is smaller than node but element is already present in node.left, move to the left subtree
            else if (value < node.value && node.left != null) {
                return this.addNode(node.left, value)
            }
            // If value is greater than node & node's right is empty, add to the right of node
            else if (value > node.value && node.right == null) {
                const newNode = new Node(value, null, null)
                node.right = newNode
                return
            }
            // If value is greater than node but element is already present in node.right, move to the right subtree
            else if (value > node.value && node.right != null) {
                return this.addNode(node.right, value)
            }
        }
    }

    // Creating a bst from preorder array
    createBST(preorder, min, max, index) {
        // If index is out of bound, return null
        if (index.index >= preorder.length) {
            return null
        }

        // If value at index is out of bounds (min,max), return null
        if (preorder[index.index] < min || preorder[index.index] > max) {
            return null
        }

        // Create a new node with value at index
        let node = new Node(preorder[index.index])
        // Increment index
        index.index++

        // Create left subtree 
        node.left = this.createBST(preorder, min, node.value, index)
        // Create right subtree
        node.right = this.createBST(preorder, node.value, max, index)

        // Return node
        return node
    }

    // Wrapper function
    preorderToBST(arr) {
        // Min value - low bound
        let min = Number.MIN_VALUE
        // Max value - high bound
        let max = Number.MAX_VALUE
        // Index of current element
        let index = { index: 0 }

        // Create bst and set its head
        this.head = this.createBST(arr, min, max, index)
    }

}

let bst = new BST()

bst.preorderToBST([12, 7, 3, 10, 15, 13, 18])

bst.levelOrder()