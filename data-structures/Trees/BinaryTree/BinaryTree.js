// Done using Linked representation.

// Node to represent a singular element in the tree
class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}

// Pre order traversal of binary tree.
// Prints in order of : Root | Left Subtree | Right Subtree
const preOrder = (head) => {
    while (head != null) {
        console.log(head.value)
        preOrder(head.left)
        preOrder(head.right)
        return
    }
}

// Post order traversal of binary tree.
// Prints in order of : Left Subtree | Right Subtree | Root 
const postOrder = (head) => {
    while (head != null) {
        postOrder(head.left)
        postOrder(head.right)
        console.log(head.value)
        return
    }
}

// In order traversal of binary tree.
// Prints in order of : Left Subtree | Root | Right Subtree
const inOrder = (head) => {
    while (head != null) {
        inOrder(head.left)
        console.log(head.value)
        inOrder(head.right)
        return
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

    // Print preorder traversal of tree
    preOrder() {
        preOrder(this.head)
    }

    // Print post order traversal of tree
    postOrder() {
        postOrder(this.head)
    }

    // Print in order traversal of tree
    inOrder() {
        inOrder(this.head)
    }

    // Check if tree is a BST
    isBST(node, prev) {
        if (node != null) {
            // Check if left subtree is BST
            if (!this.isBST(node.left)) {
                return false
            }

            // If node value is smaller than prev, return false
            if (prev != null && node.value <= prev.value) {
                return false
            }

            // Replace prev with current node
            prev = node

            // Perform function for right subtree
            return this.isBST(node.right, prev)
        } else {
            return true
        }
    }
}

// -------------------------------------------------------------------------

//  Tree that is used for the example
//
//                0
//               / \
//              6   36
//             /     \
//            12      15

const binaryTree = new BinaryTree()
const n1 = binaryTree.createNode(0)
const n2 = binaryTree.createNode(6)
const n3 = binaryTree.createNode(36)
const n4 = binaryTree.createNode(12)
const n5 = binaryTree.createNode(15)

binaryTree.inititializeHead(n1)

binaryTree.addToLeft(n1, n2)
binaryTree.addToRight(n1, n3)
binaryTree.addToLeft(n2, n4)
binaryTree.addToRight(n3, n5)

console.log("\nPreOrder Traversal:")
binaryTree.preOrder()

console.log("\nPostOrder Traversal:")
binaryTree.postOrder()

console.log("\nInOrder Traversal:")
binaryTree.inOrder()


// ------------------------------------------------------------------------

// BST used in the example:
// 
//         50
//        /   \
//      30     70
//     /  \   /  \
//   20   40 60   80

const bt = new BinaryTree()
const bt1 = bt.createNode(50)
const bt2 = bt.createNode(30)
const bt3 = bt.createNode(70)
const bt4 = bt.createNode(20)
const bt5 = bt.createNode(40)
const bt6 = bt.createNode(60)
const bt7 = bt.createNode(80)

bt.inititializeHead(bt1)
bt.addToLeft(bt1, bt2)
bt.addToRight(bt1, bt3)
bt.addToLeft(bt2, bt4)
bt.addToRight(bt2, bt5)
bt.addToLeft(bt3, bt6)
bt.addToRight(bt3, bt7)

console.log(bt.isBST(bt.head))