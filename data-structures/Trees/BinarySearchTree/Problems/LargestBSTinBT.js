// Find the Largest BST in a Binary Tree

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

    levelOrder() {
        levelOrder(this.head)
    }
}

function findLargestBST(root, maxSize) {

    // Null node reached
    if (root == null) {
        return { min: Number.MAX_VALUE, max: Number.MIN_VALUE, isBST: true, size: 0 }
    }

    // Check if left is BST and get min, max, size values
    let left = findLargestBST(root?.left, maxSize)
    // Check if right is BST and get min, max, size values
    let right = findLargestBST(root?.right, maxSize)

    // For current node
    let currNode = {}
    // Calculate size of bst
    currNode.size = left.size + right.size + 1
    // Calculate max value for node
    currNode.max = Math.max(root?.value, right.max)
    // Calculate min value for node
    currNode.min = Math.min(root?.value, left.min)

    // Check if tree with node as root is a BST
    if (left.isBST && right.isBST && root?.value > left.max && root?.value < right.min) {
        currNode.isBST = true
    } else {
        currNode.isBST = false
    }

    // If tree is a BST, recalculate largest BST size
    if (currNode.isBST) {
        maxSize.size = Math.max(currNode.size, maxSize.size)
    }

    return currNode
}

// Wrapper function to get the size of the largest BST
let largestBST = (head) => {
    // As object so it can be passed by reference
    let maxSize = { size: 0 }
    // Get size of largest bst
    findLargestBST(head, maxSize)
    // Log answer
    console.log(maxSize)
}

// -------------------------------------------------------------------------

//  Tree that is used for the example
//
//            2
//        /       \
//       7         15
//      /  \      /  \
//     3    10   13    18
//    / \  /  \    \   / \
//   1  5 9   11   14 17  20


// Assuming you have a BinaryTree class and createNode, addToLeft, addToRight, and inititializeHead methods
const binaryTree = new BinaryTree();

// Create nodes for the tree
const n2 = binaryTree.createNode(2);
const n7 = binaryTree.createNode(7);
const n15 = binaryTree.createNode(15);
const n3 = binaryTree.createNode(3);
const n10 = binaryTree.createNode(10);
const n13 = binaryTree.createNode(13);
const n18 = binaryTree.createNode(18);
const n1 = binaryTree.createNode(1);
const n5 = binaryTree.createNode(5);
const n9 = binaryTree.createNode(9);
const n11 = binaryTree.createNode(11);
const n14 = binaryTree.createNode(14);
const n17 = binaryTree.createNode(17);
const n20 = binaryTree.createNode(20);

// Initialize the root (head) of the tree
binaryTree.inititializeHead(n2);

// Build the left subtree
binaryTree.addToLeft(n2, n7);
binaryTree.addToLeft(n7, n3);
binaryTree.addToRight(n7, n10);
binaryTree.addToLeft(n3, n1);
binaryTree.addToRight(n3, n5);
binaryTree.addToLeft(n10, n9);
binaryTree.addToRight(n10, n11);

// Build the right subtree
binaryTree.addToRight(n2, n15);
binaryTree.addToLeft(n15, n13);
binaryTree.addToRight(n15, n18);
binaryTree.addToRight(n13, n14);
binaryTree.addToLeft(n18, n17);
binaryTree.addToRight(n18, n20);

binaryTree.levelOrder()

largestBST(binaryTree.head)