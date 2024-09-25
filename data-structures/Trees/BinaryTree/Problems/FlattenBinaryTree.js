// Given a binary tree, flatten it into linked list in-place.
// Usage of auxiliary data structure is not allowed.  Space Complexity : O(1)
// After flattening, left of each node should point to NULL and right should contain next node in preorder.

// Uses Morris Traversal Logic


class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
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

    flattenTree() {
        // Starting current as head / root
        let current = this.head

        while (current) {
            // If left subtree exists
            if (current?.left) {
                // Get Inorder predecessor for the node - rightmost node in left subtree
                let predecessor = current?.left

                // Getting predecessor
                while (predecessor?.right) {
                    predecessor = predecessor?.right
                }

                // Connect predecessor to right of current node (pre order)
                predecessor.right = current?.right
                // Change current.right to current.left (requirement in question)
                current.right = current?.left
                // Change left to null (requirement in question)
                current.left = null
            }

            // Move current to next node
            current = current?.right
        }
    }

    // Print Tree as LL => next node is the right node
    printTree() {
        let current = this.head
        while (current) {
            console.log(current?.value)
            current = current?.right
        }
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

bt.flattenTree()
bt.printTree()