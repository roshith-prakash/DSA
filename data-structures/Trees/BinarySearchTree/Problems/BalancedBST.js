// Given a BST, convert it to a balanced BST.
// In a balanced bst, the height of two subtrees does not differ by more than 1

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
const inOrder = (head, arr) => {
    while (head != null) {
        inOrder(head.left, arr)
        arr.push(head?.value)
        inOrder(head.right, arr)
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
    inOrder(arr) {
        inOrder(this.head, arr)
    }

    levelOrder() {
        levelOrder(this.head)
    }

    // To get the inorder predecessor of the node
    // Inorder predecessor of node is the rightmost element of the left subtree
    getInOrderPredecessor(node) {
        node = node.left
        while (node.right != null) {
            node = node.right
        }

        return node
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
                return newNode
            }
            // If value is smaller than node but element is already present in node.left, move to the left subtree
            else if (value < node.value && node.left != null) {
                return this.addNode(node.left, value)
            }
            // If value is greater than node & node's right is empty, add to the right of node
            else if (value > node.value && node.right == null) {
                const newNode = new Node(value, null, null)
                node.right = newNode
                return newNode
            }
            // If value is greater than node but element is already present in node.right, move to the right subtree
            else if (value > node.value && node.right != null) {
                return this.addNode(node.right, value)
            }
        }
    }

    // Using binary search logic to balance tree - make root as mid of array so that equal (or at max 1 difference) elements are on each side
    balance(start, end, inorder) {
        // Base case
        if (start > end) {
            return null
        }

        // Get mid of the array for the current stage
        let mid = Math.floor((start + end) / 2)
        // Get element from array and create a new node
        let node = new Node(inorder[mid])

        // Create left subtree for this node
        node.left = this.balance(start, mid - 1, inorder)
        // Create right subtree for this node
        node.right = this.balance(mid + 1, end, inorder)

        return node
    }

    // Wrapper function - converts BST to a balanced BST
    convertToBalancedBST() {
        // To store inorder values
        let inorder = []

        // Populate array with sorted values
        this.inOrder(inorder)

        // Change head to node returned by balance function
        this.head = this.balance(0, inorder.length - 1, inorder)
    }

}

const testBST = () => {

    // BST used in the example
    // 
    // Assuming the BST class and addNode method are already defined

    const bst = new BST();

    // Inserting nodes to create the tree structure from the image
    bst.addNode(bst.head, 10); // Root
    bst.addNode(bst.head, 8);  // Left child of 10
    bst.addNode(bst.head, 12); // Right child of 10
    bst.addNode(bst.head, 4);  // Left child of 8
    bst.addNode(bst.head, 16); // Right child of 12
    bst.addNode(bst.head, 2);  // Left child of 4
    bst.addNode(bst.head, 20); // Right child of 16


    bst.levelOrder()

    bst.convertToBalancedBST()

    bst.levelOrder()

}

testBST()