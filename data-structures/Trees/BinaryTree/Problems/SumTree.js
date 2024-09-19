// For a given tree, check for all nodes whether the value of node is the sum of left and right subtrees.

// Node to represent a singular element in the tree
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

    // Check if tree is sum Tree
    isSumTree(temp) {

        // If root is Null, return true
        if (temp == null) {
            return { isSumTree: true, sum: 0 }
        }

        // If leaf node, return true
        if (!temp?.left && !temp?.right) {
            return { isSumTree: true, sum: temp?.value }
        }

        // Check if left subtree is balanced
        let left = this.isSumTree(temp?.left)
        // Check if right subtree is balanced
        let right = this.isSumTree(temp?.right)

        // Check if sum of subtrees is equal to node value
        let sum = temp.value == (left.sum + right.sum)

        // If all are true, tree is balanced
        if (left.isSumTree && right.isSumTree && sum) {
            return { isSumTree: true, sum: temp?.value }
        }
        // If not, tree is not balanced
        else {
            return { isSumTree: false, sum: temp?.value }
        }
    }

}


// ------------------------------------------------------------------------

// Binary tree used:
// 
//       10
//      /   \
//     3     7
//    / \   / \
//   1  2  3   4

const bt = new BinaryTree()
const bt1 = bt.createNode(10)
const bt2 = bt.createNode(3)
const bt3 = bt.createNode(7)
const bt4 = bt.createNode(1)
const bt5 = bt.createNode(2)
const bt6 = bt.createNode(3)
const bt7 = bt.createNode(4)

bt.inititializeHead(bt1)
bt.addToLeft(bt1, bt2)
bt.addToRight(bt1, bt3)
bt.addToLeft(bt2, bt4)
bt.addToRight(bt2, bt5)
bt.addToLeft(bt3, bt6)
bt.addToRight(bt3, bt7)

console.log(bt.isSumTree(bt.head))