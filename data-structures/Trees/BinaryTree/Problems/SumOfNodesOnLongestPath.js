// Find the sum of nodes on the longest path of the tree.

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

    sum(node, sum, maxSum, len, maxLen) {
        // If leaf node is reached
        if (node == null) {
            // Check if height is maximum
            if (len > maxLen.value) {
                // Change values
                maxLen.value = len
                maxSum.value = sum
            }
            // If height is same as prev maximum, choose larger value
            else if (len == maxLen.value) {
                maxSum.value = Math.max(sum, maxSum.value)
            }

            return
        }

        // Add node value
        sum = sum + node.value

        // Calculate for subtrees
        this.sum(node?.left, sum, maxSum, len + 1, maxLen)
        this.sum(node?.right, sum, maxSum, len + 1, maxLen)
    }

    sumOfNodesOnLongestPath() {
        // Current Length of path
        let len = 0
        // Max Len of Path - Created as object so that it is passed by reference
        let maxLen = { value: 0 }
        // Current sum of nodes on path
        let sum = 0
        // Max sum on Path - Created as object so that it is passed by reference
        let maxSum = { value: 0 }

        this.sum(this.head, sum, maxSum, len, maxLen)

        console.log(maxSum.value)
    }

}

//         50
//        /   \
//      30     70
//     /      /  \
//   40      60   80
//          /       
//         90        

// Answer : 270

const bt = new BinaryTree()
const bt1 = bt.createNode(50)
const bt2 = bt.createNode(30)
const bt3 = bt.createNode(70)
const bt4 = bt.createNode(60)
const bt5 = bt.createNode(80)
const bt7 = bt.createNode(90)
const bt8 = bt.createNode(40)

bt.inititializeHead(bt1)
bt.addToLeft(bt1, bt2)
bt.addToRight(bt1, bt3)
bt.addToLeft(bt3, bt4)
bt.addToRight(bt3, bt5)
bt.addToLeft(bt4, bt7)
bt.addToLeft(bt2, bt8)

bt.sumOfNodesOnLongestPath()